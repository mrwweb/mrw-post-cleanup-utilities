/* WordPress Dependencies */
import { __ } from "@wordpress/i18n";
import { createBlock } from "@wordpress/blocks";
import { paragraph } from "@wordpress/icons";

/* Internal Dependencies */
import SelectedBlocksTransformButton from "../components/selected-blocks-transform-button";
import toSentenceCase from "../utilities/to-sentence-case";

export default function SentenceCaseButton() {

	function convertToSentenceCase(block) {
		const newBlock = createBlock(block.name, {
			...block.attributes,
			content: toSentenceCase(block.attributes.content),
		});
		return newBlock;
	}

	return (
		<SelectedBlocksTransformButton
			label={__("Convert to Sentence Case", 'mrw-post-cleanup-utilities')}
			icon={paragraph}
			blockTransform={convertToSentenceCase}
			blockTest={() => true}
		/>
	);
}
