/* WordPress Dependencies */
import { __ } from "@wordpress/i18n";
import { flipHorizontal } from "@wordpress/icons";

/* Internal Dependencies */
import EditorFindReplaceButton from "../components/editor-find-replace-button";

export default function NoDoubleSpaceButton() {
    // This will replace all instances of double spaces with single spaces
    function replaceDoubleSpaces( postContent ) {
        return postContent
            .replace(/  /g, ' ')
            .replace(/&nbsp; /g, ' ')
            .replace(/ &nbsp;/g, ' ')
            .replace(/&nbsp;&nbsp;/g, ' ');
    }

	return (
		<EditorFindReplaceButton
            buttonText={__('Remove Double Spaces', 'mrw-post-cleanup-utilities')}
            buttonIcon={flipHorizontal}
            contentTransform={replaceDoubleSpaces}
        />
	);
}