/* WordPress Dependencies */
import { __ } from "@wordpress/i18n";
import { createBlock, getBlockContent } from "@wordpress/blocks";

/* Internal Dependencies */
import BlockTransformButton from "../components/block-transform-button";

export default function PromoteHeadingLevels(attributes) {

	function isHeadingButNot2(block) {
		return block?.name === "core/heading" && block.attributes.level > 2;
	}

	function PromoteHeadingLevel(block) {
		const blockContent = getBlockContent(block);
		const newBlock = createBlock("core/heading", {
			...block.attributes,
			content: blockContent
            	// regex for any number
				.replace(/<h[2-6][^>]*>/i, '')
				.replace(/<\/h[2-6]>/i, '')
                .trim(),
			level: Math.max(2,block.attributes.level - 1),
		});
		return newBlock;
	}

	return (
		<BlockTransformButton
			label={__("Promote Headings", 'mrw-post-cleanup-utilities')}
			icon="arrow-up-alt"
			blockTest={isHeadingButNot2}
			blockTransform={PromoteHeadingLevel}
		/>
	);
}
