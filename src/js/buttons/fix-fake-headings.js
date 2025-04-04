/* WordPress Dependencies */
import { __ } from "@wordpress/i18n";
import { createBlock, getBlockContent } from "@wordpress/blocks";

/* Internal Dependencies */
import BlockTransformButton from "../components/block-transform-button";

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

		const startsWithBold = (blockContent.match(/^<p(.*)>[\s]?<strong>/g) || []).length === 1;
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
			...block.attributes,
			content: blockContent
				.replace(/^<p(.*)>[\s]?<strong>/, "")
				.replace(/<\/strong>[\s]?<\/p>$/, "")
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
