/*
 * WordPress dependencies.
 */
import { Button } from "@wordpress/components";
import { useSelect, useDispatch } from "@wordpress/data";
import { store as blockEditorStore } from "@wordpress/block-editor";
import { createBlock, getBlockContent } from "@wordpress/blocks";

function ResetHeadingLevelsButton(attributes) {
	let { level } = attributes;
	
	/* Lesson learned: React hooks must be called in the root of the functional compontent! */
	/* See: https://react.dev/warnings/invalid-hook-call-warning#breaking-rules-of-hooks
	and See: https://developer.wordpress.org/news/2024/03/28/how-to-work-effectively-with-the-useselect-hook/#but-call-them-outside-when-you-re-in-an-event-handler */
	/* select all blocks in the body of the wordpress block editor with useSelect */
	const blocks = useSelect(
		(select) => select(blockEditorStore).getBlocks(),
		[],
	);
	const { replaceBlock } = useDispatch(blockEditorStore);

	function resetHeadingLevels() {
		blocks.forEach((block) => recurseBlocks(block));
	}

	function recurseBlocks(block) {
		if (block?.name === "core/heading" && block.attributes.level !== level) {
			resetHeadingLevel(block);
		} else if (block?.innerBlocks?.length) {
			block.innerBlocks.forEach((block) => recurseBlocks(block));
		}
	}

	function resetHeadingLevel(block) {
		const blockContent = getBlockContent(block);
		const newBlock = createBlock("core/heading", {
			...block.attributes,
			content: blockContent
            	// regex for any number
				.replace(/<h[2-6][^>]*>/i, '')
				.replace(/<\/h[2-6]>/i, '')
                .trim(),
			level,
		});
		replaceBlock(block.clientId, newBlock);
	}

	return (
		<Button
			variant="secondary"
			text={"Make all headings H" + level + "s"}
			icon="image-rotate"
			__nextHasNoMarginBottom={true}
			isDestructive={true}
			onClick={resetHeadingLevels}
		/>
	);
}

export default ResetHeadingLevelsButton;
