/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	Path,
	SVG,
	PanelBody,
} from '@wordpress/components';
import {
	InspectorControls,
	BlockControls,
	MediaUploadCheck,
	MediaPlaceholder,
	MediaReplaceFlow,
	useBlockProps
} from '@wordpress/block-editor';
import { useRef, useEffect } from '@wordpress/element';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import Panzoom from '@panzoom/panzoom';
import metadata from "./block.json";

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
	
	edit: (props) => {
		const blockProps = useBlockProps();
		const ref = useRef();
		const {
			attributes: { url, id, alt },
			setAttributes,
		} = props;

		const setImage = (media) => {
			setAttributes({ url: media.url, id: media.id, alt: media.alt });
		};

		useEffect( () => {
			if ( ref.current ) {
				// The Panzoom constructor is called when a new block is added and an image is selected/replaced.
				var panzoom = Panzoom(ref.current, {
					minScale: 1.1,
					maxScale: 5,
					startScale: 1.1,
					animate: true,
					duration: 1000,
					origin: '50% 0'
				});
			}
		}, [url]);

		return (
			<>
				<InspectorControls>
					<PanelBody
						title={__('Settings', 'rather-simple-panzoom')}
					>
					</PanelBody>
				</InspectorControls>
				<BlockControls>
					<MediaReplaceFlow
						mediaId={id}
						mediaUrl={url}
						allowedTypes={['image']}
						accept="image/*"
						onSelect={setImage}
						name={!url ? __('Add Image', 'rather-simple-panzoom') : __('Replace Image', 'rather-simple-panzoom')}
					/>
				</BlockControls>
				<div {...blockProps}>
					<MediaUploadCheck>
						{url &&
							<div className="panzoom-parent">
								<div className="panzoom-element" ref={ref}>
									<img
										className={`wp-image-${id}`}
										src={url}
										alt={alt}
									/>
								</div>
								<div className="panzoom-buttons">
									<button className="zoomin-button">
										<span className="screen-reader-text">{__('Zoom In', 'rather-simple-panzoom')}</span>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
									</button>
									<button className="zoomout-button">
										<span className="screen-reader-text">{__('Zoom Out', 'rather-simple-panzoom')}</span>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,13H5V11H19V13Z" /></svg>
									</button>
								</div>
							</div>
						}
						{!url &&
							<MediaPlaceholder
								accept="image/*"
								allowedTypes={['image']}
								onSelect={setImage}
								value={id}
								multiple={false}
								handleUpload={true}
								labels={
									{ title: __('Panzoom Image', 'rather-simple-panzoom') }
								}
							/>
						}
					</MediaUploadCheck>
				</div>
			</>
		);

	},

	save: (props) => {
		const {
			attributes: { url, id, alt },
		} = props;
		const blockProps = useBlockProps.save();

		return (
			<div {...blockProps}>
				<div className="panzoom-parent">
					<div className="panzoom-element">
						<img
							className={`wp-image-${id}`}
							src={url}
							alt={alt}
						/>
					</div>
					<div className="panzoom-buttons">
						<button className="zoomin-button">
							<span className="screen-reader-text">Zoom In</span>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
						</button>
						<button className="zoomout-button">
							<span className="screen-reader-text">Zoom Out</span>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,13H5V11H19V13Z" /></svg>
						</button>
					</div>
				</div>
			</div>
		);
	},

};

registerBlockType(name, settings);
