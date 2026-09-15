/* WordPress Dependencies */
import { __ } from '@wordpress/i18n';
import { code } from '@wordpress/icons';

/* Internal Dependencies */
import EditorFindReplaceButton from '../components/editor-find-replace-button';

export default function ConsolidateFormattingTagsButton() {
	function consolidateFormattingTags( postContent ) {
		return postContent
			.replace( /<\/strong>(\s*)<strong>/gi, '$1' )
			.replace( /<\/b>(\s*)<b>/gi, '$1' )
			.replace( /<\/em>(\s*)<em>/gi, '$1' )
			.replace( /<\/i>(\s*)<i>/gi, '$1' )
			.replace( /<\/u>(\s*)<u>/gi, '$1' );
	}

	return (
		<EditorFindReplaceButton
			buttonText={ __(
				'Consolidate Formatting Tags',
				'mrw-post-cleanup-utilities'
			) }
			buttonIcon={ code }
			contentTransform={ consolidateFormattingTags }
		/>
	);
}
