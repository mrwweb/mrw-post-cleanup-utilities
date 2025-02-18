
import { useSelect, useDispatch } from "@wordpress/data";
import { parse } from "@wordpress/blocks";
import { store as editorStore } from "@wordpress/editor";
import { store as blockEditorStore } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

/**
 * The <EditorFindReplaceButton /> component creates a button that, when clicked, apply a transform function to the post content as a string
 * 
 * @param {*} props Expects four props, a transformFunction that accepts a string and returns a modified string, the buttonText for the button's label, a buttonIcon (valid dashicon string)
 */
export default function EditorFindReplaceButton( props ) {
    const { contentTransform, buttonText, buttonIcon } = props;

    const { resetBlocks } = useDispatch(blockEditorStore);
    const postContent = useSelect(
        (select) => select(editorStore).getEditedPostContent(),
        [],
    );

    /**
     * Apply the transform function to the post content, parse back into block objects, and reset the editor with those updated blocks
     */
    function updatePost() {
        const newContent = contentTransform(postContent);
        const updatedBlocks = parse(newContent);
        resetBlocks(updatedBlocks);
    }

	return (
		<Button
            text={buttonText}
            icon={buttonIcon}
            isDestructive={true}
            __nextHasNoMarginBottom={true}
            onClick={() => updatePost()}
            variant="secondary"
            />
	);
}
