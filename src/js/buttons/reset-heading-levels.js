/*
 * Dependencies.
 */
import { BlockTransformButton } from "../compontents/block-transform-button";
import { createBlock, getBlockContent } from "@wordpress/blocks";

function ResetHeadingLevelsButton(attributes) {
	const { level } = attributes;

	function isHeadingButNotSelectedLevel(block, level) {
		return block?.name === "core/heading" && block.attributes.level !== level;
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
		return newBlock;
	}

	return (
		<BlockTransformButton
			blockTest={isHeadingButNotSelectedLevel}
			blockTransform={resetHeadingLevel}
			buttonText={"Make all headings H" + level + "s"}
			buttonIcon="image-rotate"
		/>
	);
}

export default ResetHeadingLevelsButton;
