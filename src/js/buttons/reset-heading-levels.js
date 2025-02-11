/*
 * WordPress dependencies.
 */
import { Button } from "@wordpress/components";
import { useSelect, useDispatch } from "@wordpress/data";
import { store as blockEditorStore } from "@wordpress/block-editor";
import { createBlock, getBlockContent } from "@wordpress/blocks";

function ResetHeadingLevelsButton(attributes) {
	let { level } = attributes;
	
	const blocks = useSelect(
		(select) => select(blockEditorStore).getBlocks(),
		[],
	);
	
	const { replaceBlock } = useDispatch(blockEditorStore);

	function resetHeadingLevels() {
		blocks.forEach((block) => recurseBlocks(block));
	}

	function recurseBlocks(block) {
		if (block?.name === "core/heading" && block.attributes.level !== level) {
			resetHeadingLevel(block);
		} else if (block?.innerBlocks?.length) {
			block.innerBlocks.forEach((block) => recurseBlocks(block));
		}
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
		replaceBlock(block.clientId, newBlock);
	}

	return (
		<Button
			variant="secondary"
			text={"Make all headings H" + level + "s"}
			icon="image-rotate"
			__nextHasNoMarginBottom={true}
			isDestructive={true}
			onClick={resetHeadingLevels}
		/>
	);
}

export default ResetHeadingLevelsButton;
