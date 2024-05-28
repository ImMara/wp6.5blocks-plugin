/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps , InspectorControls } from '@wordpress/block-editor';
import { PanelBody,TextControl,ToggleControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({attributes,setAttributes}){

	const year = new Date().getFullYear();
	const { showStartYear,startYear } = attributes;

	const params = useBlockProps();

	return (
		<>
			<InspectorControls>
				<PanelBody title={"configuration"}>
					<ToggleControl
						label="Afficher année de départ"
						checked={ showStartYear}
						onChange={
							(value)=> {
								console.log(value);
								setAttributes({showStartYear: value})
							}
						}
					>
					</ToggleControl>
					{
						showStartYear?(
							<TextControl
								label={"Année de départ"}
								value={startYear}
								onChange={(value)=>setAttributes({startYear: value})}
							/>
						):null
					}

				</PanelBody>
			</InspectorControls>
			<p { ...useBlockProps() }>
				Copyright : {showStartYear&& startYear? `${startYear} - `:"" } {year}
			</p>
		</>
	);
}
