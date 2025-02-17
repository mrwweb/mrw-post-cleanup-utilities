import { PanelBody } from "@wordpress/components";

export default function SidebarPanelSection( props ) {
    const { panelName, title, icon, description, children } = props;
    return (
        <PanelBody
            name={panelName}
            title={title}
            className={panelName}
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