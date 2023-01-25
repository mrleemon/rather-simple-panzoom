/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import {
    G,
    Path,
    SVG,
	Button,
    PanelBody,
} from '@wordpress/components';
import { InspectorControls, MediaUpload, MediaUploadCheck, useBlockProps } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import ServerSideRender from '@wordpress/server-side-render';
import metadata from "./block.json";

import './editor.scss';
import './style.scss';

const { name } = metadata;

/**
 * Internal dependencies
 */

export const settings = {
	icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M20 4v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 9.67l1.69 2.26 2.48-3.1L19 15H9zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z" /></G></SVG>,
    
    edit: ( props ) => {
		const blockProps = useBlockProps();
		const {
			attributes: { url, id },
			setAttributes,
		} = props;

		const setImage = ( media ) => {
			setAttributes( { url: media.url, id: media.id } );
		};

		const ALLOWED_MEDIA_TYPES = [ 'image' ];

        return (
			<Fragment>
				<InspectorControls>
					<PanelBody
						title={ __( 'Settings', 'rather-simple-panzoom' ) }
					>
                    </PanelBody>
                </InspectorControls>
				<div { ...blockProps }>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ setImage }
							allowedTypes={ ALLOWED_MEDIA_TYPES }
							value={ id }
							render={ ( { open } ) => (
								<div>
									{ !! url &&
										<img src={ url } />
									}
									<Button onClick={ open }>Open Media Library</Button>
								</div>
							) }
						/>
					</MediaUploadCheck>
				</div>
            </Fragment>
        );

    },

    save: ( props ) => {
		const {
			attributes: { url, id },
		} = props;
		const blockProps = useBlockProps.save();
		
		return (
			<div { ...blockProps }>
				<div class="panzoom-parent">
					<div class="panzoom-element">
						<img src={ url } />
					</div>
					<div class="panzoom-buttons">
						<button class="zoomin-button"><span class="screen-reader-text">Zoom In</span></button>
						<button class="zoomout-button"><span class="screen-reader-text">Zoom Out</span></button>
					</div>
				</div>
			</div>
		);
	},

};

registerBlockType( name, settings );
