/* Core dependencies */
import { registerPlugin } from "@wordpress/plugins";

/* Internal Dependencies */
import PluginDocumentSettingPanelDemo from './sidebar-plugin';

registerPlugin("plugin-document-setting-panel-demo", {
	render: PluginDocumentSettingPanelDemo,
});