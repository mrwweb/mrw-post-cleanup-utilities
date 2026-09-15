/* WordPress Dependencies */
import { __ } from '@wordpress/i18n';
import { homeButton } from '@wordpress/icons';

/* Internal Dependencies */
import EditorFindReplaceButton from '../components/editor-find-replace-button';

export default function RemoveNBSPsButton() {
	function removeNBSPs( postContent ) {
		return postContent.replace( /&nbsp;/gi, ' ' );
	}

	return (
		<EditorFindReplaceButton
			buttonText={ __(
				'Remove Non-breaking Spaces',
				'mrw-post-cleanup-utilities'
			) }
			buttonIcon={ homeButton }
			contentTransform={ removeNBSPs }
		/>
	);
}
