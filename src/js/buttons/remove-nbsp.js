/* WordPress Dependencies */
import { __ } from "@wordpress/i18n";

/* Internal Dependencies */
import EditorFindReplaceButton from "../components/editor-find-replace-button";

export default function RemoveNBSPsButton() {
    function removeNBSPs( postContent ) {
        return postContent
            .replace(/&nbsp;/gi, ' ');
    }

    return (
        <EditorFindReplaceButton
            buttonText={__('Remove Non-breaking Spaces', 'mrw-post-cleanup-utilities')}
            buttonIcon={'button'}
            contentTransform={removeNBSPs}
        />
    );
}
