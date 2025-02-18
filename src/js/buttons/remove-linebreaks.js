/* WordPress Dependencies */
import { __ } from "@wordpress/i18n";

/* Internal Dependencies */
import EditorFindReplaceButton from "../compontents/editor-find-replace-button";

export default function RemoveLinebreaksButton() {
    function removeLinebreaks( postContent ) {
        return postContent
            .replace(/<br>/gi, ' ')
            .replace(/<br \/>/gi, ' ');
    }

    return (
        <EditorFindReplaceButton
            buttonText={__('Remove Linebreaks', 'mrw-post-cleanup-utilities')}
            buttonIcon={'editor-break'}
            contentTransform={removeLinebreaks}
        />
    );
}
