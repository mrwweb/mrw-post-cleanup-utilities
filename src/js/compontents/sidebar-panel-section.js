import { PanelBody } from "@wordpress/components";

/**
 * The <SidebarPanelSection /> component creates a standard display for the section panel containing a post cleanup utility. At it's simplest, that is a single button and description, though it may also contain extra configuration settings for that cleanup transformation
 * 
 * @param {*} props Expects four props, a `name` (used for the ID/name and className), the panel's `title`, an `icon` (valid dashicon string) for the panel's icon, and a `description` of the transformation
 * @returns 
 */
export default function SidebarPanelSection( props ) {
    const { name, title, icon, description, children } = props;
    return (
        <PanelBody
            name={name}
            title={title}
            className={name}
            icon={icon}
            initialOpen={false}
        >
            <div
                style={{
                    display: "flex",
                    gap: "12px",
                    flexDirection: "column",
                }}
            >
                <p>{description}</p>

                {children}

            </div>
        </PanelBody>
    );
}