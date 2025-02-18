/* WordPress Dependencies */
import { createBlock, getBlockContent } from "@wordpress/blocks";
import { __, sprintf } from "@wordpress/i18n";

/* Internal Dependencies */
import BlockTransformButton from "../components/block-transform-button";

export default function ResetHeadingLevelsButton(attributes) {
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
			label={sprintf(__("Make all headings H%1$ds", 'mrw-post-cleanup-utilities'), level)}
			icon="image-rotate"
			blockTest={isHeadingButNotSelectedLevel}
			blockTransform={resetHeadingLevel}
		/>
	);
}
