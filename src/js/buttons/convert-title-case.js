/* WordPress Dependencies */
import { __ } from "@wordpress/i18n";
import { createBlock } from "@wordpress/blocks";
import { title } from "@wordpress/icons";

/* Internal Dependencies */
import SelectedBlocksTransformButton from "../components/selected-blocks-transform-button";
import toTitleCase from "../vendor/to-title-case/to-title-case";

export default function TitleCaseButton() {

	function convertToTitleCase(block) {
		const newBlock = createBlock(block.name, {
			...block.attributes,
			content: toTitleCase(block.attributes.content),
		});
		return newBlock;
	}

	return (
		<SelectedBlocksTransformButton
			label={__("Convert to Title Case", 'mrw-post-cleanup-utilities')}
			icon={title}
			blockTransform={convertToTitleCase}
			blockTest={() => true}
		/>
	);
}
