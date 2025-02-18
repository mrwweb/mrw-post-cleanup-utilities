/**
 * The custom sidebar containing all utilities. Each utility is put into its own SidebarPanelSection component.
 * 
 * Some sections may require custom, non-persistent settings (e.g. what heading level to change all headings to), which are also declared here
 */

/* WordPress dependencies */
import { __ } from "@wordpress/i18n";
import { PluginSidebar } from "@wordpress/editor";
import { useState } from "@wordpress/element";
import { SelectControl } from "@wordpress/components";

/* Internal dependencies */
import SidebarPanelSection from "./components/sidebar-panel-section";
import FixFakeHeadingsButton from "./buttons/fix-fake-headings";
import ResetHeadingLevelsButton from "./buttons/reset-heading-levels";
import PromoteHeadingLevelsButton from "./buttons/promote-heading-levels";
import StripUnderlinesButton from "./buttons/strip-underlines";
import RemoveLinebreaksButton from "./buttons/remove-linebreaks";
import RemoveNBSPsButton from "./buttons/remove-nbsp";

const CleanupUtilitiesSidebar = () => {
	const [fakeHeadingsLevel, setFakeHeadingsLevel] = useState(2);
	const [resetHeadingsLevel, setResetHeadingsLevel] = useState(2);
	const headingLevels = [
		{ label: "2", value: 2 },
		{ label: "3", value: 3 },
		{ label: "4", value: 4 },
	];
	
	return (
		<PluginSidebar
			name="mrw-post-cleanup-utilities"
			title={__("Post Cleanup Utilities", 'mrw-post-cleanup-utilities')}
			icon="admin-tools"
		>
			<SidebarPanelSection
				name="mrw-fix-headings"
				title={__("Fix Fake Headings", 'mrw-post-cleanup-utilities')}
				icon="heading"
				description={__("Turns Paragraphs blocks containing only bold text into Heading blocks of the selected level.", 'mrw-post-cleanup-utilities')}
			>
				<SelectControl
					label={__("Heading Level", 'mrw-post-cleanup-utilities')}
					value={fakeHeadingsLevel}
					options={headingLevels}
					onChange={(value) => setFakeHeadingsLevel(parseInt(value))}
				/>
				<FixFakeHeadingsButton level={fakeHeadingsLevel} />
			</SidebarPanelSection>

			<SidebarPanelSection
				name="mrw-reset-headings"
				title={__("Reset Heading Levels", 'mrw-post-cleanup-utilities')}
				icon="image-rotate"
				description={__("Change all heading blocks to the selected level.", 'mrw-post-cleanup-utilities')}
			>
				<SelectControl
					label={__("Heading Level", 'mrw-post-cleanup-utilities')}
					value={resetHeadingsLevel}
					options={headingLevels}
					onChange={(value) => setResetHeadingsLevel(parseInt(value))}
				/>
				<ResetHeadingLevelsButton level={resetHeadingsLevel} />
			</SidebarPanelSection>

			<SidebarPanelSection
				name="mrw-promote-headings"
				title={__("Promote Heading Levels", 'mrw-post-cleanup-utilities')}
				icon="arrow-up-alt"
				description={__("Move every heading up the hierarchy by one level (e.g. H3 becomes H2). Change is capped at H2.", 'mrw-post-cleanup-utilities')}
				>
				<PromoteHeadingLevelsButton />
			</SidebarPanelSection>

			<SidebarPanelSection
				name="mrw-strip-underlines"
				title={__("Strip Underlines", 'mrw-post-cleanup-utilities')}
				icon="editor-underline"
				description={__("Remove all underlines created by either the <u> element or inline styles.", 'mrw-post-cleanup-utilities')}
				>
				<StripUnderlinesButton />
			</SidebarPanelSection>

			<SidebarPanelSection
				name="mrw-remove-linebreaks"
				title={__("Remove Linebreaks", 'mrw-post-cleanup-utilities')}
				icon="editor-break"
				description={__("Remove all linebreaks within paragraphs, headings, etc.", 'mrw-post-cleanup-utilities')}
				>
				<RemoveLinebreaksButton />
			</SidebarPanelSection>

			<SidebarPanelSection
				name="mrw-remove-nbsps"
				title={__("Remove Non-breaking Spaces", 'mrw-post-cleanup-utilities')}
				icon="button"
				description={__("Remove the &nbsp; character that can result in double-spaces or undesired text wrapping.", 'mrw-post-cleanup-utilities')}
				>
				<RemoveNBSPsButton />
			</SidebarPanelSection>

		</PluginSidebar>
	);
};

export default CleanupUtilitiesSidebar;
