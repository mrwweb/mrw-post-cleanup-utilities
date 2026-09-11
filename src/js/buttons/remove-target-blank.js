/* WordPress Dependencies */
import { __ } from "@wordpress/i18n";
import { external } from "@wordpress/icons";

/* Internal Dependencies */
import EditorFindReplaceButton from "../components/editor-find-replace-button";

export default function RemoveTargetBlankButton() {
    // This will remove all instances of target="_blank" attributes
    function removeTargetBlank( postContent ) {
        return postContent
            .replace(/ target="_blank"/gi, '')
            .replace(/ rel="noopener noreferrer"/gi, '')
            .replace(/ rel="noopener"/gi, '')
            .replace(/ rel="noreferrer"/gi, '');
    }

	return (
		<EditorFindReplaceButton
            buttonText={__('Remove target="_blank"', 'mrw-post-cleanup-utilities')}
            buttonIcon={external}
            contentTransform={removeTargetBlank}
        />
	);
}
