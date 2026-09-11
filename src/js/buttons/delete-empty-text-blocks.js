/* WordPress Dependencies */
import { __ } from '@wordpress/i18n';
import { border } from '@wordpress/icons';

/* Internal Dependencies */
import MultiBlockTransformButton from '../components/multi-block-transform-button';

export default function DeleteEmptyTextBlocksButton( attributes ) {
	function isEmptyHeadingOrParagraph( block ) {
		if (
			block?.name !== 'core/heading' &&
			block?.name !== 'core/paragraph'
		) {
			return false;
		}

		const content = block.attributes?.content;
		return ! content || content.toString().trim() === '';
	}

	// Returning a falsy value tells MultiBlockTransformButton to remove the
	// block instead of replacing it.
	function deleteBlock( block ) {
		return undefined;
	}

	return (
		<MultiBlockTransformButton
			label={ __(
				'Delete Empty Text Blocks',
				'mrw-post-cleanup-utilities'
			) }
			icon={ border }
			blockTest={ isEmptyHeadingOrParagraph }
			blockTransform={ deleteBlock }
			{ ...attributes }
		/>
	);
}
