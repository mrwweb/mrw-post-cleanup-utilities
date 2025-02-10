/* Core dependencies */
import { registerPlugin } from "@wordpress/plugins";

/* Internal Dependencies */
import CleanupUtilitiesSidebar from './sidebar-plugin';

registerPlugin("cleanup-utilities-sidebar", {
	render: CleanupUtilitiesSidebar,
});