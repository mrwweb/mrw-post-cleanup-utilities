/* WordPress Dependencies */
import { createBlock, getBlockContent } from "@wordpress/blocks";
import { __, sprintf } from "@wordpress/i18n";
import { reset } from "@wordpress/icons";

/* Internal Dependencies */
import MultiBlockTransformButton from "../components/multi-block-transform-button";

export default function ResetHeadingLevelsButton(attributes) {
	const { level } = attributes;

	function isHeadingButNotSelectedLevel(block, level) {
		return block?.name === "core/heading" && block.attributes.level !== level;
	}

	function resetHeadingLevel(block) {
		const newBlock = createBlock("core/heading", {
			...block.attributes,
			content: block.attributes.content,
			level,
		});
		return newBlock;
	}

	return (
		<MultiBlockTransformButton
			label={sprintf(__("Make all headings H%1$ds", 'mrw-post-cleanup-utilities'), level)}
			icon={reset}
			blockTest={isHeadingButNotSelectedLevel}
			blockTransform={resetHeadingLevel}
		/>
	);
}
