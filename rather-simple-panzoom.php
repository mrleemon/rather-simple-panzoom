<?php
/**
 * Plugin Name: Rather Simple Panzoom
 * Plugin URI:
 * Update URI: false
 * Version: 1.0
 * Requires at least: 5.8
 * Requires PHP: 7.0
 * Author: Oscar Ciutat
 * Author URI: http://oscarciutat.com/code/
 * Text Domain: rather-simple-panzoom
 * Description: A really simple panzoom
 * License: GPLv2 or later
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License, version 2, as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 *
 * @package rather_simple_panzoom
 */

/**
 * Core class used to implement the plugin.
 */
class Rather_Simple_Panzoom {

	/**
	 * Plugin instance
	 *
	 * @var object $instance
	 */
	protected static $instance = null;

	/**
	 * Access this plugin’s working instance
	 */
	public static function get_instance() {

		if ( ! self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;

	}

	/**
	 * Used for regular plugin work
	 */
	public function plugin_setup() {

		$this->includes();

		add_action( 'init', array( $this, 'load_language' ) );
		add_action( 'init', array( $this, 'register_block' ) );

		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
		// add_action( 'admin_enqueue_scripts', array( $this, 'admin_enqueue_scripts' ) );
		// add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_block_editor_assets' ) );

		add_shortcode( 'panzoom', array( $this, 'shortcode_panzoom' ) );

	}

	/**
	 * Constructor. Intentionally left empty and public.
	 */
	public function __construct() {}

	/**
	 * Includes required core files used in admin and on the frontend
	 */
	protected function includes() {}

	/**
	 * Loads Language
	 */
	public function load_language() {
		load_plugin_textdomain( 'rather-simple-panzoom', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
	}

	/**
	 * Enqueue scripts
	 */
	public function enqueue_scripts() {
		// Load styles.
		wp_enqueue_style(
			'rather-simple-panzoom-css',
			plugins_url( '/style.css', __FILE__ ),
			array(),
			filemtime( plugin_dir_path( __FILE__ ) . '/style.css' )
		);

		// Load scripts.
		wp_enqueue_script(
			'panzoom',
			plugins_url( '/assets/js/panzoom.min.js', __FILE__ ),
			array(),
			filemtime( plugin_dir_path( __FILE__ ) . '/assets/js/panzoom.min.js' ),
			true
		);
		wp_enqueue_script(
			'rather-simple-panzoom-frontend',
			plugins_url( '/assets/js/frontend.js', __FILE__ ),
			array( 'panzoom' ),
			filemtime( plugin_dir_path( __FILE__ ) . '/assets/js/frontend.js' ),
			true
		);
	}

	/**
	 * Enqueues block assets
	 */
	public function enqueue_block_editor_assets() {

		// Load scripts.
		wp_enqueue_script(
			'panzoom-js',
			plugins_url( '/assets/js/panzoom.min.js', __FILE__ ),
			array(),
			filemtime( plugin_dir_path( __FILE__ ) . '/assets/js/panzoom.min.js' ),
			false
		);
		wp_enqueue_script(
			'backend',
			plugins_url( '/assets/js/frontend.js', __FILE__ ),
			array( 'panzoom-js' ),
			filemtime( plugin_dir_path( __FILE__ ) . '/assets/js/frontend.js' ),
			false
		);

	}

	/**
	 * Shortcode panzoom
	 *
	 * @param array $attr  An array of attributes.
	 */
	public function shortcode_panzoom( $attr ) {
		$html = $this->shortcode_atts( $attr );
		return $html;
	}

	/**
	 * Shortcode attributes
	 *
	 * @param array $attr  An array of attributes.
	 */
	public function shortcode_atts( $attr ) {
		$atts = shortcode_atts(
			array(
				'id' => '',
			),
			$attr,
			'panzoom'
		);
		$id   = $atts['id'];
		$html = '';
		if ( 'panzoom' === get_post_type( $id ) ) {
			$html = $this->panzoom_markup( $id );
		}
		return $html;
	}

	/**
	 * Show panzoom
	 *
	 * @param integer $id  The panzoom ID.
	 */
	public function show_panzoom( $id ) {
		$html = '';
		if ( 'panzoom' === get_post_type( $id ) ) {
			$html = $this->panzoom_markup( $id );
		}
		echo $html;
	}

	/**
	 * Panzoom markup
	 *
	 * @param integer $id  The panzoom ID.
	 */
	public function panzoom_markup( $id ) {
		$html = '<!-- Begin panzoom markup -->
				<div class="panzoom-parent">
				<div id="panzoom-element">
					<?php RickyDavila\DBContenidos::showContenido( $conexion, 11, "cast" ); ?>
				</div>

				<div class="panzoom-buttons">
					<button id="zoomin-button"><span class="screen-reader-text">Zoom In</span></button>
					<button id="zoomout-button"><span class="screen-reader-text">Zoom Out</span></button>
				</div>
			</div>
			<!-- End panzoom markup -->';

		return $html;

	}

	/**
	 * Registers block
	 *
	 * @throws Error If block is not built.
	 */
	public function register_block() {

		if ( ! function_exists( 'register_block_type' ) ) {
			// The block editor is not active.
			return;
		}

		// Register the block by passing the location of block.json to register_block_type.
		register_block_type(
			__DIR__ . '/build/blocks/panzoom'
		);

		// Load translations.
		$script_handle = generate_block_asset_handle( 'occ/rather-simple-panzoom', 'editorScript' );
		wp_set_script_translations( $script_handle, 'rather-simple-panzoom', plugin_dir_path( __FILE__ ) . 'languages' );

	}

}

add_action( 'plugins_loaded', array( Rather_Simple_Panzoom::get_instance(), 'plugin_setup' ) );
