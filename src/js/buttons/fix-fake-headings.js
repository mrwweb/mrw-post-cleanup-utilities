/* WordPress Dependencies */
import { __ } from "@wordpress/i18n";
import { createBlock } from "@wordpress/blocks";

/* Internal Dependencies */
import MultiBlockTransformButton from "../components/multi-block-transform-button";

export default function FixFakeHeadingsButton(attributes) {
	let { level } = attributes;
	if (level === 2) {
		level = undefined;
	}

	function isFakeHeading(block) {
		if (block?.name !== "core/paragraph") {
			return false;
		}

		const blockContent = block.attributes.content.trim();

		if (blockContent === undefined) {
			return false;
		}

		const startsWithBold = (blockContent.match(/^<strong>/g) || []).length === 1;
		const endsWithBold =
			(blockContent.match(/<\/strong>$/g) || []).length === 1;
		const onlyOneBold =
			(blockContent.match(/<\/strong>/g) || []).length === 1;

		return startsWithBold && endsWithBold && onlyOneBold;
	}

	function convertParagraphToHeading(block) {
		const newBlock = createBlock("core/heading", {
			...block.attributes,
			content: block.attributes.content
				.replace(/^<strong>/, "")
				.replace(/<\/strong>$/, ""),
			level,
		});
		return newBlock;
	}

	return (
		<MultiBlockTransformButton
			label={__("Fix Fake Headings", 'mrw-post-cleanup-utilities')}
			icon="heading"
			blockTest={isFakeHeading}
			blockTransform={convertParagraphToHeading}
		/>
	);
}
