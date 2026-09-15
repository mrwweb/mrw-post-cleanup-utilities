/* WordPress Dependencies */
import { __ } from '@wordpress/i18n';
import { keyboardReturn } from '@wordpress/icons';

/* Internal Dependencies */
import EditorFindReplaceButton from '../components/editor-find-replace-button';

export default function RemoveLinebreaksButton() {
	function removeLinebreaks( postContent ) {
		return postContent.replace( /<br>/gi, ' ' ).replace( /<br \/>/gi, ' ' );
	}

	return (
		<EditorFindReplaceButton
			buttonText={ __(
				'Remove Hard Linebreaks',
				'mrw-post-cleanup-utilities'
			) }
			buttonIcon={ keyboardReturn }
			contentTransform={ removeLinebreaks }
		/>
	);
}
