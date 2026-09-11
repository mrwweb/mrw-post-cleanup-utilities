/**
 * The custom sidebar containing all utilities. Each utility is put into its own SidebarPanelSection component.
 *
 * Some sections may require custom, non-persistent settings (e.g. what heading level to change all headings to), which are also declared here
 */

/* WordPress dependencies */
import { __ } from '@wordpress/i18n';
import { PluginSidebar } from '@wordpress/editor';
import { useState } from '@wordpress/element';
import { Icon, PanelRow, SelectControl } from '@wordpress/components';

/* Internal dependencies */
import SidebarPanelSection from './components/sidebar-panel-section';
import FixFakeHeadingsButton from './buttons/fix-fake-headings';
import ResetHeadingLevelsButton from './buttons/reset-heading-levels';
import PromoteHeadingLevelsButton from './buttons/promote-heading-levels';
import StripUnderlinesButton from './buttons/strip-underlines';
import NoDoubleSpaceButton from './buttons/double-space-to-single-space';
import RemoveLinebreaksButton from './buttons/remove-linebreaks';
import RemoveNBSPsButton from './buttons/remove-nbsp';
import TitleCaseButton from './buttons/convert-title-case';
import SentenceCaseButton from './buttons/convert-sentence-case';
import StripEmptyLinksButton from './buttons/strip-empty-links';
import StripBoldFromHeadingsButton from './buttons/strip-bold-from-headings';
import RemoveTargetBlankButton from './buttons/remove-target-blank';
import ConsolidateFormattingTagsButton from './buttons/consolidate-format-tags';
import DeleteEmptyTextBlocksButton from './buttons/delete-empty-text-blocks';
import {
	fullscreen,
	heading,
	info,
	link,
	pencil,
	tool,
} from '@wordpress/icons';

const CleanupUtilitiesSidebar = () => {
	const [ fakeHeadingsLevel, setFakeHeadingsLevel ] = useState( 2 );
	const [ resetHeadingsLevel, setResetHeadingsLevel ] = useState( 2 );
	const headingLevels = [
		{ label: '2', value: 2 },
		{ label: '3', value: 3 },
		{ label: '4', value: 4 },
	];

	return (
		<PluginSidebar
			name="mrw-post-cleanup-utilities"
			title={ __(
				'Post Cleanup Utilities',
				'mrw-post-cleanup-utilities'
			) }
			icon={ tool }
		>
			<SidebarPanelSection
				name="mrw-headings"
				title={ __( 'Headings', 'mrw-post-cleanup-utilities' ) }
				icon={ heading }
			>
				<PanelRow>
					<FixFakeHeadingsButton
						level={ fakeHeadingsLevel }
						aria-describedby="mrw-fix-fake-headings-help"
					/>
					<SelectControl
						label={ __(
							'Heading Level',
							'mrw-post-cleanup-utilities'
						) }
						value={ fakeHeadingsLevel }
						options={ headingLevels }
						onChange={ ( value ) =>
							setFakeHeadingsLevel( parseInt( value ) )
						}
						hideLabelFromVision={ true }
					/>
				</PanelRow>
				<p className="mrw-help-text" id="mrw-fix-fake-headings-help">
					<Icon icon={ info } size="18" />{ ' ' }
					{ __(
						'Turns Paragraphs blocks containing only bold text into Heading blocks of the selected level.',
						'mrw-post-cleanup-utilities'
					) }
				</p>

				<PanelRow>
					<ResetHeadingLevelsButton
						level={ resetHeadingsLevel }
						aria-describedby="mrw-reset-headings-help"
					/>
					<SelectControl
						label={ __(
							'Heading Level',
							'mrw-post-cleanup-utilities'
						) }
						value={ resetHeadingsLevel }
						options={ headingLevels }
						onChange={ ( value ) =>
							setResetHeadingsLevel( parseInt( value ) )
						}
						hideLabelFromVision={ true }
					/>
				</PanelRow>

				<p className="mrw-help-text" id="mrw-reset-headings-help">
					<Icon icon={ info } size="18" />{ ' ' }
					{ __(
						'Change all heading blocks to the selected level.',
						'mrw-post-cleanup-utilities'
					) }
				</p>

				<PromoteHeadingLevelsButton aria-describedby="mrw-promote-headings-help" />
				<p className="mrw-help-text" id="mrw-promote-headings-help">
					<Icon icon={ info } size="18" />{ ' ' }
					{ __(
						'Move every heading up the hierarchy by one level (e.g. H3 becomes H2). Change is capped at H2.',
						'mrw-post-cleanup-utilities'
					) }
				</p>

				<StripBoldFromHeadingsButton />
			</SidebarPanelSection>

			<SidebarPanelSection
				name="mrw-formatting"
				title={ __( 'Text Formatting', 'mrw-post-cleanup-utilities' ) }
				icon={ pencil }
			>
				<ConsolidateFormattingTagsButton aria-describedby="mrw-conslidate-formatting-help" />
				<p
					className="mrw-help-text"
					id="mrw-conslidate-formatting-help"
				>
					<Icon icon={ info } size="18" />{ ' ' }
					{ __(
						'Merges consecutive bold, italic, and underline tags.',
						'mrw-post-cleanup-utilities'
					) }
				</p>
				<StripUnderlinesButton />
				<TitleCaseButton />
				<SentenceCaseButton />
			</SidebarPanelSection>

			<SidebarPanelSection
				name="mrw-whitespace"
				title={ __( 'Whitespace', 'mrw-post-cleanup-utilities' ) }
				icon={ fullscreen }
			>
				<NoDoubleSpaceButton />
				<RemoveNBSPsButton />
				<RemoveLinebreaksButton />
				<DeleteEmptyTextBlocksButton aria-describedby="mrw-empty-text-blocks-help" />
				<p className="mrw-help-text" id="mrw-empty-text-blocks-help">
					<Icon icon={ info } size="18" />{ ' ' }
					{ __(
						'Deletes Paragraphs and Headings that are empty or only contain whitespace.',
						'mrw-post-cleanup-utilities'
					) }
				</p>
			</SidebarPanelSection>

			<SidebarPanelSection
				name="mrw-links"
				title={ __( 'Links', 'mrw-post-cleanup-utilities' ) }
				icon={ link }
				description={ __(
					'Remove all target="_blank" attributes from links.',
					'mrw-post-cleanup-utilities'
				) }
			>
				<StripEmptyLinksButton />
				<RemoveTargetBlankButton />
			</SidebarPanelSection>
		</PluginSidebar>
	);
};

export default CleanupUtilitiesSidebar;
