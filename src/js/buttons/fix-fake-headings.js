/*
 * WordPress dependencies.
 */
import { Button } from "@wordpress/components";
import { useSelect, useDispatch } from "@wordpress/data";
import { store as blockEditorStore } from "@wordpress/block-editor";
import { createBlock, getBlockContent } from "@wordpress/blocks";

function FixFakeHeadingsButton(attributes) {
	let { level } = attributes;
	if (level === 2) {
		level = undefined;
	}

	/* Lesson learned: React hooks must be called in the root of the functional compontent! */
	/* See: https://react.dev/warnings/invalid-hook-call-warning#breaking-rules-of-hooks
	and See: https://developer.wordpress.org/news/2024/03/28/how-to-work-effectively-with-the-useselect-hook/#but-call-them-outside-when-you-re-in-an-event-handler */
	/* select all blocks in the body of the wordpress block editor with useSelect */
	const blocks = useSelect(
		(select) => select(blockEditorStore).getBlocks(),
		[],
	);
	const { replaceBlock } = useDispatch(blockEditorStore);

	function makeRealHeadings() {
		blocks.forEach((block) => analyzeBlocks(block));
	}

	function analyzeBlocks(block) {
		if (isFakeHeading(block)) {
			convertParagraphToHeading(block);
		} else if (block?.innerBlocks?.length) {
			block.innerBlocks.forEach((block) => analyzeBlocks(block));
		}
	}

	/**
	 * Determine if block is a faux heading that is bolded
	 *
	 * @param {*} block given a WordPress block object, this determines if it's a paragraph that is completely bolded
	 * @returns bool
	 */
	function isFakeHeading(block) {
		if (block?.name !== "core/paragraph") {
			return false;
		}

		const blockContent = getBlockContent(block).trim();

		if (blockContent === undefined) {
			return false;
		}

		const startsWithBold = blockContent.indexOf("<p><strong>") > -1;
		const endsWithBold =
			(blockContent.match(/<\/strong>[\s]?<\/p>$/g) || []).length === 1;

		if (!startsWithBold || !endsWithBold) {
			return false;
		}

		const onlyOneBold =
			(blockContent.match(/<\/strong>/g) || []).length === 1;

		return onlyOneBold;
	}

	function convertParagraphToHeading(block) {
		const blockContent = getBlockContent(block);
		const newBlock = createBlock("core/heading", {
			content: blockContent
				.replace("<p><strong>", "")
				.replace("</strong></p>", "")
				.replace("<u>", "")
				.replace("</u>", "")
                .trim(),
			level,
		});
		replaceBlock(block.clientId, newBlock);
	}

	return (
		<Button
			variant="secondary"
			text="Fix Fake Headings"
			icon="heading"
			__nextHasNoMarginBottom={true}
			isDestructive={true}
			onClick={makeRealHeadings}
		/>
	);
}

export default FixFakeHeadingsButton;
