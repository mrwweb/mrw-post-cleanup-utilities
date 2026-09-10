/* WordPress Dependencies */
import { __ } from "@wordpress/i18n";
import { createBlock } from "@wordpress/blocks";
import { formatBold } from "@wordpress/icons";

/* Internal Dependencies */
import MultiBlockTransformButton from "../components/multi-block-transform-button";

export default function StripBoldFromHeadingsButton(attributes) {

	function isHeadingWithBold(block) {
		return block?.name === "core/heading" && block.attributes.content.includes("<strong");
	}

	function StripBoldFromHeading(block) {
		const newBlock = createBlock("core/heading", {
			...block.attributes,
			content: block.attributes.content.replace(/<strong>|<\/strong>|<b>|<\/b>/g, "")
		});
		return newBlock;
	}

	return (
		<MultiBlockTransformButton
			label={__("Strip Bold from Headings", 'mrw-post-cleanup-utilities')}
			icon={formatBold}
			blockTest={isHeadingWithBold}
			blockTransform={StripBoldFromHeading}
		/>
	);
}
