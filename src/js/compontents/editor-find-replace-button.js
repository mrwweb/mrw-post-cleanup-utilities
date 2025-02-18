import { useSelect, useDispatch } from "@wordpress/data";
import { parse } from "@wordpress/blocks";
import { store as editorStore } from "@wordpress/editor";
import { store as blockEditorStore } from "@wordpress/editor";
import { Button } from "@wordpress/components";

export default function EditorFindReplaceButton( props ) {
    const { transformFunction, buttonText, buttonIcon } = props;

    const { resetBlocks } = useDispatch(blockEditorStore);
    const postContent = useSelect(
        (select) => select(editorStore).getEditedPostContent(),
        [],
    );

    /**
     * Apply the transform function to the post content, parse back into block objects, and reset the editor with those updated blocks
     */
    function updatePost() {
        const newContent = transformFunction(postContent);
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
