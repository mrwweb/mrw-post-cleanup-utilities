/* WordPress Dependencies */
import { __ } from "@wordpress/i18n";
import { linkOff } from "@wordpress/icons";

/* Internal Dependencies */
import EditorFindReplaceButton from "../components/editor-find-replace-button";

export default function StripEmptyLinksButton() {
    function stripEmptyLinks( postContent ) {
        return postContent.replace(/<a.+>(\s*)<\/a>/gi, '$1');
    }

	return (
		<EditorFindReplaceButton
            buttonText={__('Strip Empty Links', 'mrw-post-cleanup-utilities')}
            buttonIcon={linkOff}
            contentTransform={stripEmptyLinks}
        />
	);
}
