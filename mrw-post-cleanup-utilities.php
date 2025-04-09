<?php
/**
 * Plugin Name:     MRW Post Cleanup Utilities
 * Description:     Useful tools to transform blocks and post content for more accessible and consistent formatting.
 * Author:          Mark Root-Wiley, MRW Web Design
 * Author URI:      https://MRWweb.com
 * Text Domain:     mrw-post-cleanup-utilities
 * Version:         0.3.1
 * GitHub Plugin URI: mrwweb/mrw-post-cleanup-utilities
 * Primary Branch:  main
 * 
 *
 * @package         MRW_Post_Cleanup_Utilities
 */

namespace MRW\Post_Cleanup_Utilities;

add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\block_editor_assets' );
function block_editor_assets() {
    $asset_file = include plugin_dir_path( __FILE__ ) . 'js/index.asset.php';
    wp_enqueue_script(
        'mrw-post-cleanup-utilities-editor',
        plugins_url( 'js/index.js', __FILE__ ),
        $asset_file['dependencies'],
        $asset_file['version']
    );
}
