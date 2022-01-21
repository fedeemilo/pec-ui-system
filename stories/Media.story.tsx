import React, { FC } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Media } from "../src";
import { MediaInterface } from "../types";
import { ICONS } from "../src/constants/icons";

export default {
    title: "Media",
    component: Media,
    parameters: {
        backgrounds: {
            default: "facebook",
            values: [
                { name: "twitter", value: "#00aced" },
                { name: "facebook", value: "#3b5998" }
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
    backgrounds: { default: "facebook" }
};