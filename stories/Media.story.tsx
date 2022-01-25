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
                { name: "tealBlue", value: COLORS.tealBlue },
                { name: "greyShade", value: "#dddddd" }
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
    backgrounds: { default: "greyShade" }
};

Icons.decorators = [
    () => {
        return (
            <>
                {Object.keys(ICONS).map(key => (
                    <Media
                        {...(Icons.args as MediaInterface)}
                        src={ICONS[key]}
                        alt={ICONS[key]}
                        margin={"2.5rem"}
                    />
                ))}
            </>
        );
    }
];

