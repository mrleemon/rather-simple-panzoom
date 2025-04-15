/**
 * WordPress dependencies
 */
import {
	Path,
	SVG,
} from '@wordpress/primitives';
import {
	registerBlockType
} from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import Edit from './edit';
import save from './save';
import transforms from './transforms';

import './editor.scss';
import './style.scss';

const { name } = metadata;

export const settings = {
	icon: {
		src: <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<Path d="M15.5,2C18,2 20,4 20,6.5C20,7.38 19.75,8.21 19.31,8.9L22.39,12L21,13.39L17.88,10.32C17.19,10.75 16.37,11 15.5,11C13,11 11,9 11,6.5C11,4 13,2 15.5,2M15.5,4A2.5,2.5 0 0,0 13,6.5A2.5,2.5 0 0,0 15.5,9A2.5,2.5 0 0,0 18,6.5A2.5,2.5 0 0,0 15.5,4M7.5,14.5L4,19H18L13.5,13L10,17.5L7.5,14.5M20,20A2,2 0 0,1 18,22H4A2,2 0 0,1 2,20V6A2,2 0 0,1 4,4H9.5C9.18,4.77 9,5.61 9,6.5A6.5,6.5 0 0,0 15.5,13C16.18,13 16.84,12.89 17.46,12.7L20,15.24V20Z" />
		</SVG>,
		foreground: '#ff8a00'
	},

	edit: Edit,
	save,
	transforms,
};

registerBlockType(name, settings);
