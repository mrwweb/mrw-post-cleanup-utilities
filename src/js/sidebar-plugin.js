/* Thank you, Aurooba! https://github.com/createwithrani/quickpost/blob/develop/src/index.js */
/**
 * WordPress dependencies.
 */
import { PluginDocumentSettingPanel } from "@wordpress/editor";
import { useState } from "@wordpress/element";
import { SelectControl } from "@wordpress/components";

/* Internal dependencies */
import FixFakeHeadingsButton from "./buttons/fix-fake-headings";

const PluginDocumentSettingPanelDemo = () => {
	const [level, setLevel] = useState(2);
	return (
		<PluginDocumentSettingPanel
			name="mrw-fix-headings"
			title="Heading Fixer"
			className="mrw-fix-headings"
		>
			<div
				style={{
					display: "flex",
					gap: "12px",
					flexDirection: "column",
				}}
			>
				<FixFakeHeadingsButton level={level} />
				<SelectControl
					label="Heading Level"
					value={level}
					options={[
						{ label: "2", value: 2 },
						{ label: "3", value: 3 },
						{ label: "4", value: 4 },
					]}
					onChange={(value) => setLevel(parseInt(value))}
				/>
				<p>
					This button will find any paragraphs that are completely
					bolded and turn them into headings. By default, headings are
					level 2 (main subsections), but many pages (especially
					Guides) may benefit from conversion to Heading 3 or Heading
					4 and then updating just a few Headings to level 2/3.
				</p>
			</div>
		</PluginDocumentSettingPanel>
	);
};

export default PluginDocumentSettingPanelDemo;
