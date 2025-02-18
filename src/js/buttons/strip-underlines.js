/* WordPress Dependencies */
import { __ } from "@wordpress/i18n";

/* Internal Dependencies */
import EditorFindReplaceButton from "../components/editor-find-replace-button";

export default function StripUnderlinesButton() {
    // This will remove all instances of underlines using either the <u> tag or inline styles. If a span is only used to apply this one inline style, then we can and should safely remove the span as well
    function stripUnderlines( postContent ) {
        return postContent
            .replace(/<u>/gi, '')
            .replace(/<\\u>/gi, '')
            .replace(/<span style="text-decoration: underline;">(.*)<\/span>/gi, '$1')
            .replace(/text-decoration: underline;/gi, '');
    }

	return (
		<EditorFindReplaceButton
            buttonText={__('Strip Underlines', 'mrw-post-cleanup-utilities')}
            buttonIcon={'editor-underline'}
            contentTransform={stripUnderlines}
        />
	);
}
