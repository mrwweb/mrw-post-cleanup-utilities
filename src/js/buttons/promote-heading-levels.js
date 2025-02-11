/*
 * WordPress dependencies.
 */
import { Button } from "@wordpress/components";
import { useSelect, useDispatch } from "@wordpress/data";
import { store as blockEditorStore } from "@wordpress/block-editor";
import { createBlock, getBlockContent } from "@wordpress/blocks";

function PromoteHeadingLevels(attributes) {

	const blocks = useSelect(
		(select) => select(blockEditorStore).getBlocks(),
		[],
	);
	
	const { replaceBlock } = useDispatch(blockEditorStore);

	function PromoteHeadingLevels() {
		blocks.forEach((block) => recurseBlocks(block));
	}

	function recurseBlocks(block) {
		if (block?.name === "core/heading" && block.attributes.level > 2) {
			PromoteHeadingLevel(block);
		} else if (block?.innerBlocks?.length) {
			block.innerBlocks.forEach((block) => recurseBlocks(block));
		}
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
		replaceBlock(block.clientId, newBlock);
	}

	return (
		<Button
			variant="secondary"
			text="Promote Headings"
			icon="arrow-up-alt"
			__nextHasNoMarginBottom={true}
			isDestructive={true}
			onClick={PromoteHeadingLevels}
		/>
	);
}

export default PromoteHeadingLevels;
