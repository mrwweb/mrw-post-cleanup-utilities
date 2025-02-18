
import { useSelect, useDispatch } from "@wordpress/data";
import { store as blockEditorStore } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

/**
 * The <BlockTransformButton /> component creates a button that, when clicked, will recursively test all blocks against a criteria function and transform them via a transform function if they meet the criteria.
 * 
 * Note: the current behavior means that each transformed block creates a new undo/history point for the editor
 * 
 * @param {*} props Expects four props, a blockTest function that accepts a block object and returns true or false, a blockTransform function that accepts a block object and returns a new block object, the label for the button's label, an icon (valid dashicon string)
 */
export default function BlockTransformButton(props) {
    const { blockTest, blockTransform, label, icon } = props;

    /*
    Lesson learned: React hooks must be called in the root of the functional compontent!
	See: https://react.dev/warnings/invalid-hook-call-warning#breaking-rules-of-hooks
	and See: https://developer.wordpress.org/news/2024/03/28/how-to-work-effectively-with-the-useselect-hook/#but-call-them-outside-when-you-re-in-an-event-handler
    */
    const { replaceBlock } = useDispatch(blockEditorStore);
    const blocks = useSelect(
        (select) => select(blockEditorStore).getBlocks(),
        [],
    );

    /**
     * Function that 1) tests a block to see if it meets a specific criteria, and 2) if it does, transforms it via the second function. It is recursive and will go through nested blocks utnil all blocks have been tested and possibly transformed.
     *
     * @param {object} block a WordPress block editor block object
     * @param {function} criteriaFunction a function that tests the block to see if it meets a specific criteria and returns true or false. When true, the transform function is applied to the block
     * @param {function} transformFunction a function that transforms the block if it meets the criteria. The function is expected to return a valid block object, usually created with createBlock() from @wordpress/blocks
     */
    function recurseAndTransform( block ) {
        if ( blockTest(block) ) {
            const newBlock = blockTransform(block);
            replaceBlock(block.clientId, newBlock);
        } else if (block?.innerBlocks?.length) {
            block.innerBlocks.forEach((block) => recurseAndTransform(block));
        }
    }

    return (
        <Button
            text={label}
            icon={icon}
            isDestructive={true}
            onClick={() => {
                blocks.forEach((block) => recurseAndTransform(block))
            }}
            __nextHasNoMarginBottom={true}
            variant="secondary"
            />
    );
}