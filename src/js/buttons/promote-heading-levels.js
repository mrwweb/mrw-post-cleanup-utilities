/*
 * Dependencies.
 */
import { BlockTransformButton } from "../compontents/block-transform-button";
import { createBlock, getBlockContent } from "@wordpress/blocks";

function PromoteHeadingLevels(attributes) {

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
			blockTest={isHeadingButNot2}
			blockTransform={PromoteHeadingLevel}
			buttonText={"Promote Headings"}
			buttonIcon="arrow-up-alt"
		/>
	);
}

export default PromoteHeadingLevels;
