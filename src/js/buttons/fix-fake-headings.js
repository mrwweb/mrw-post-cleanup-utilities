import { createBlock, getBlockContent } from "@wordpress/blocks";
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
			content: blockContent
				.replace("<p><strong>", "")
				.replace("</strong></p>", "")
				.replace("<u>", "")
				.replace("</u>", "")
                .trim(),
			level,
		});
		return newBlock;
	}

	return (
		<BlockTransformButton
			blockTest={isFakeHeading}
			blockTransform={convertParagraphToHeading}
			buttonText="Fix Fake Headings"
			buttonIcon="heading"
		/>
	);
}
