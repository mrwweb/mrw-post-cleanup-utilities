/* WordPress Dependencies */
import { __ } from '@wordpress/i18n';
import { createBlock } from '@wordpress/blocks';
import { levelUp } from '@wordpress/icons';

/* Internal Dependencies */
import MultiBlockTransformButton from '../components/multi-block-transform-button';

export default function PromoteHeadingLevels( attributes ) {
	function isHeadingButNot2( block ) {
		return block?.name === 'core/heading' && block.attributes.level > 2;
	}

	function PromoteHeadingLevel( block ) {
		const newBlock = createBlock( 'core/heading', {
			...block.attributes,
			content: block.attributes.content,
			level: Math.max( 2, block.attributes.level - 1 ),
		} );
		return newBlock;
	}

	return (
		<MultiBlockTransformButton
			label={ __( 'Promote Headings', 'mrw-post-cleanup-utilities' ) }
			icon={ levelUp }
			blockTest={ isHeadingButNot2 }
			blockTransform={ PromoteHeadingLevel }
			{ ...attributes }
		/>
	);
}
