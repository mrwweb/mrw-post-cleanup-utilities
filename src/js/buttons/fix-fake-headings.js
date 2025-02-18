/* WordPress Dependencies */
import { __ } from "@wordpress/i18n";
import { createBlock, getBlockContent } from "@wordpress/blocks";

/* Internal Dependencies */
import BlockTransformButton from "../compontents/block-transform-button";

export default function FixFakeHeadingsButton(attributes) {
	let { level } = attributes;
	if (level === 2) {
		level = undefined;
	}

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
			/* Reminder that this simple .replace() only works because there is one instance of each element we're searching for */
			content: blockContent
				.replace("<p><strong>", "")
				.replace("</strong></p>", "")
                .trim(),
			level,
		});
		return newBlock;
	}

	return (
		<BlockTransformButton
			label={__("Fix Fake Headings", 'mrw-post-cleanup-utilities')}
			icon="heading"
			blockTest={isFakeHeading}
			blockTransform={convertParagraphToHeading}
		/>
	);
}
