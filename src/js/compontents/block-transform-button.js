import { useSelect, useDispatch } from "@wordpress/data";
import { store as blockEditorStore } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

export function BlockTransformButton(props) {
    const { blockTest, blockTransform, buttonText, buttonIcon } = props;

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
     * @param {function} criteriaFunction a function that tests the block to see if it meets a specific criteria
     * @param {function} transformFunction a function that transforms the block if it meets the criteria
     */
    function recurseAndTransform( block, criteriaFunction, transformFunction ) {
        if ( criteriaFunction(block) ) {
            const newBlock = transformFunction(block);
            replaceBlock(block.clientId, newBlock);
        } else if (block?.innerBlocks?.length) {
            block.innerBlocks.forEach((block) => recurseAndTransform(block));
        }
    }

    return (
        <Button
            text={buttonText}
            icon={buttonIcon}
            isDestructive={true}
            onClick={() => {
                blocks.forEach((block) => recurseAndTransform(block, blockTest, blockTransform ))
            }}
            __nextHasNoMarginBottom={true}
            variant="secondary"
            />
    );
}