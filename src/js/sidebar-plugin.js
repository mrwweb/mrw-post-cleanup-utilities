/* WordPress dependencies */
import { PluginSidebar } from "@wordpress/editor";
import { useState } from "@wordpress/element";
import { SelectControl } from "@wordpress/components";

/* Internal dependencies */
import SidebarPanelSection from "./compontents/sidebar-panel-section";
import FixFakeHeadingsButton from "./buttons/fix-fake-headings";
import ResetHeadingLevelsButton from "./buttons/reset-heading-levels";
import PromoteHeadingLevelsButton from "./buttons/promote-heading-levels";

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
			title="Post Cleanup Utilities"
			icon="admin-tools"
		>
			<SidebarPanelSection
				name="mrw-fix-headings"
				title="Fix Fake Headings"
				icon="heading"
				description="This button will find any paragraphs that are completely
						bolded and turn them into headings. By default, headings are
						level 2 (main subsections), but many pages (especially
						Guides) may benefit from conversion to Heading 3 or Heading
						4 and then updating just a few Headings to level 2/3."
			>
				<SelectControl
					label="Heading Level"
					value={fakeHeadingsLevel}
					options={headingLevels}
					onChange={(value) => setFakeHeadingsLevel(parseInt(value))}
				/>
				<FixFakeHeadingsButton level={fakeHeadingsLevel} />
			</SidebarPanelSection>
			<SidebarPanelSection
				name="mrw-reset-headings"
				title="Reset Heading Levels"
				icon="image-rotate"
				description="Change all heading blocks to the selected level."
			>
				<SelectControl
					label="Heading Level"
					value={resetHeadingsLevel}
					options={headingLevels}
					onChange={(value) => setResetHeadingsLevel(parseInt(value))}
				/>
				<ResetHeadingLevelsButton level={resetHeadingsLevel} />
			</SidebarPanelSection>
			<SidebarPanelSection
				name="mrw-promote-headings"
				title="Promote Heading Levels"
				icon="arrow-up-alt"
				description={"\"Raise\" all headings in the hierarchy by one level (decrease numeric level by one). Change in levels is capped at 2, so this tool may result in flattening heading structure."}
				>
				<PromoteHeadingLevelsButton />
			</SidebarPanelSection>

		</PluginSidebar>
	);
};

export default CleanupUtilitiesSidebar;
