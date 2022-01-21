import React, { FC } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Media } from "../src";
import { MediaInterface } from "../types";
import { ICONS } from "../src/constants/icons";
import { COLORS } from "../src/constants";

export default {
    title: "Media",
    component: Media,
    parameters: {
        backgrounds: {
            default: "facebook",
            values: [
                { name: "twitter", value: "#00aced" },
                { name: "facebook", value: "#3b5998" },
                { name: "tealBlue", value: COLORS.tealBlue }
            ]
        }
    }
} as ComponentMeta<FC<MediaInterface>>;

const Template = (args: any) => <Media {...args} />;

export const Icons: ComponentStory<FC<MediaInterface>> = Template.bind({});
Icons.args = {
    name: ICONS.INFO_WHITE,
    src: ICONS.INFO_WHITE
};

Icons.parameters = {
    backgrounds: { default: "tealBlue" }
};

Icons.decorators = [
    () => {
        return (
            <>
                <div>
                    <Media
                        {...(Icons.args as MediaInterface)}
                        src={ICONS.CHECK}
                        alt={ICONS.CHECK}
                        margin={"1rem"}
                    />
                    <Media
                        {...(Icons.args as MediaInterface)}
                        src={ICONS.CHECK_WHITE}
                        alt={ICONS.CHECK_WHITE}
                        margin={"1rem"}
                    />
                    <Media
                        {...(Icons.args as MediaInterface)}
                        src={ICONS.ERROR_LAUNCH}
                        alt={ICONS.ERROR_LAUNCH}
                        margin={"1rem"}
                    />
                    <Media
                        {...(Icons.args as MediaInterface)}
                        src={ICONS.FLAG_ARG}
                        alt={ICONS.FLAG_ARG}
                        margin={"1rem"}
                    />
                    <Media
                        {...(Icons.args as MediaInterface)}
                        src={ICONS.INFO_BLUE}
                        alt={ICONS.INFO_BLUE}
                        margin={"1rem"}
                    />
                </div>
                <div>
                    <Media
                        {...(Icons.args as MediaInterface)}
                        src={ICONS.LOGO}
                        alt={ICONS.LOGO}
                        margin={"1rem"}
                    />
                    <Media
                        {...(Icons.args as MediaInterface)}
                        src={ICONS.LOGOUT}
                        alt={ICONS.LOGOUT}
                        margin={"1rem"}
                    />
                    <Media
                        {...(Icons.args as MediaInterface)}
                        src={ICONS.INFO_WHITE}
                        alt={ICONS.INFO_WHITE}
                        margin={"1rem"}
                    />
                    <Media
                        {...(Icons.args as MediaInterface)}
                        src={ICONS.INFO_WHITE}
                        alt={ICONS.INFO_WHITE}
                        margin={"1rem"}
                    />
                    <Media
                        {...(Icons.args as MediaInterface)}
                        src={ICONS.INFO_WHITE}
                        alt={ICONS.INFO_WHITE}
                        margin={"1rem"}
                    />
                </div>
            </>
        );
    }
];




//     LOGOUT: logout,
//     SEARCH: search,
//     SEARCH_SIDE_BAR: searchSideBar,
//     VERIFY: verify,
//     VERTICAL_OFF: verticalOff,
//     VERTICAL_OK: verticalOk
