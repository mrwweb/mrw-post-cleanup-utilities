<?php
/**
 * Plugin Name:     MRW Post Cleanup Utilities
 * Description:     Creates a button to detect and fix "Fake" headings made from bold paragraphs. Similar features may get added in the future!
 * Author:          Mark Root-Wiley, MRW Web Design
 * Author URI:      https://MRWweb.com
 * Text Domain:     mrw-post-cleanup-utilities
 * Version:         0.2.0
 *
 * @package         Mrw_Post_Cleanup_Utilities
 */

namespace MRW\Post_Cleanup_Utilities;

add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\block_editor_assets' );
// enqueue the js/index.js in the block editor using the asset file for dependencies and version
function block_editor_assets() {
    $asset_file = include plugin_dir_path( __FILE__ ) . 'js/index.asset.php';
    wp_enqueue_script(
        'mrw-post-cleanup-utilities-editor',
        plugins_url( 'js/index.js', __FILE__ ),
        $asset_file['dependencies'],
        $asset_file['version']
    );
}
