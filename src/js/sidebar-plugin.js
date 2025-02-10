/* Thank you, Aurooba! https://github.com/createwithrani/quickpost/blob/develop/src/index.js */
/**
 * WordPress dependencies.
 */
import { PluginSidebar } from "@wordpress/editor";
import { useState } from "@wordpress/element";
import { PanelBody, SelectControl } from "@wordpress/components";

/* Internal dependencies */
import FixFakeHeadingsButton from "./buttons/fix-fake-headings";
import ResetHeadingLevelsButton from "./buttons/reset-heading-levels";
import PromoteHeadingLevelsButton from "./buttons/promote-heading-levels";

const CleanupUtilitiesSidebar = () => {
	const [fakeHeadingsLevel, setFakeHeadingsLevel] = useState(2);
	const [resetHeadingsLevel, setResetHeadingsLevel] = useState(2);
	return (
		<PluginSidebar
			name="mrw-post-cleanup-utilities"
			title="Post Cleanup Utilities"
			icon="admin-tools"
		>
			<PanelBody
				name="mrw-fix-headings"
				title="Fix Fake Headings"
				className="mrw-fix-headings"
				initialOpen={false}
				icon="heading"
			>
				<div
					style={{
						display: "flex",
						gap: "12px",
						flexDirection: "column",
					}}
				>
					<p>
						This button will find any paragraphs that are completely
						bolded and turn them into headings. By default, headings are
						level 2 (main subsections), but many pages (especially
						Guides) may benefit from conversion to Heading 3 or Heading
						4 and then updating just a few Headings to level 2/3.
					</p>
					<SelectControl
						label="Heading Level"
						value={fakeHeadingsLevel}
						options={[
							{ label: "2", value: 2 },
							{ label: "3", value: 3 },
							{ label: "4", value: 4 },
						]}
						onChange={(value) => setFakeHeadingsLevel(parseInt(value))}
					/>
					<FixFakeHeadingsButton level={fakeHeadingsLevel} />
				</div>
			</PanelBody>
			<PanelBody
				name="mrw-reset-headings"
				title="Reset Heading Levels"
				className="mrw-reset-headings"
				initialOpen={false}
				icon="image-rotate"
			>
				<div
					style={{
						display: "flex",
						gap: "12px",
						flexDirection: "column",
					}}
				>
					<p>
						Change all heading blocks to the selected level.
					</p>
					<SelectControl
						label="Heading Level"
						value={resetHeadingsLevel}
						options={[
							{ label: "2", value: 2 },
							{ label: "3", value: 3 },
							{ label: "4", value: 4 },
						]}
						onChange={(value) => setResetHeadingsLevel(parseInt(value))}
					/>
					<ResetHeadingLevelsButton level={resetHeadingsLevel} />
				</div>
			</PanelBody>
			<PanelBody
				name="mrw-promote-headings"
				title="Promote Heading Levels"
				className="mrw-promote-headings"
				icon="arrow-up-alt"
				initialOpen={false}
			>
				<div
					style={{
						display: "flex",
						gap: "12px",
						flexDirection: "column",
					}}
				>
					<p>
						"Raise" all headings in the hierarchy by one level (decrease numeric level by one). Change in levels is capped at 2, so this tool may result in flattening heading structure.
					</p>
					<PromoteHeadingLevelsButton />
				</div>
			</PanelBody>

		</PluginSidebar>
	);
};

export default CleanupUtilitiesSidebar;
