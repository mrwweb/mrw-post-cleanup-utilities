import { useDispatch, useSelect } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

/* import recurseAndTransform from "../utlities/recurse-and-transform"; */

/**
 * The <SelectedBlocksTransformButton /> component creates a button that, when clicked, will recursively modify the currently selected block.
 *
 *
 * @param {*} props Expects three props, a blockTransform function that accepts a block object and returns a new block object, the label for the button's label, an icon (valid dashicon string)
 */
export default function SelectedBlocksTransformButton( props ) {
	const { blockTransform, blockTest, label, icon } = props;

	const { replaceBlock } = useDispatch( blockEditorStore );
	const { getSelectedBlockClientIds, getBlocksByClientId } =
		useSelect( blockEditorStore );

	/**
	 * Function that 1) tests a block to see if it meets a specific criteria, and 2) if it does, transforms it via the second function. It is recursive and will go through nested blocks utnil all blocks have been tested and possibly transformed.
	 *
	 * @param {Object}   block             a WordPress block editor block object
	 * @param {Function} criteriaFunction  a function that tests the block to see if it meets a specific criteria and returns true or false. When true, the transform function is applied to the block
	 * @param {Function} transformFunction a function that transforms the block if it meets the criteria. The function is expected to return a valid block object, usually created with createBlock() from @wordpress/blocks
	 */
	function recurseAndTransform( block ) {
		if ( blockTest( block ) ) {
			const newBlock = blockTransform( block );
			replaceBlock( block.clientId, newBlock );
		} else if ( block?.innerBlocks?.length ) {
			block.innerBlocks.forEach( ( block ) =>
				recurseAndTransform( block )
			);
		}
	}

	return (
		<Button
			text={ label }
			icon={ icon }
			isDestructive={ true }
			onClick={ () => {
				const blocks = getBlocksByClientId(
					getSelectedBlockClientIds()
				);
				blocks.forEach( ( block ) =>
					recurseAndTransform(
						block,
						blockTransform,
						() => blocks.content
					)
				);
			} }
			variant="secondary"
			__nextHasNoMarginBottom
			__next40pxDefaultSize
		/>
	);
}
