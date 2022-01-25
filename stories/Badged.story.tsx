import React, { FC } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Badged } from "../src";
import { BadgedInterface } from "../types";
import { ICONS } from "../src/constants/icons";
import { COLORS, STRINGS } from "../src/constants";

export default {
    title: "Badged",
    component: Badged,
    parameters: {
        backgrounds: {
            default: "facebook",
            values: [
                { name: "tealBlue", value: COLORS.tealBlue },
                { name: "greyShade", value: "#dddddd" }
            ]
        }
    }
} as ComponentMeta<FC<BadgedInterface>>;

const Template = (args: any) => <Badged {...args} />;

export const Verify: ComponentStory<FC<BadgedInterface>> = Template.bind({});
Verify.args = {
    text: STRINGS.VERIFY,
    backColor: COLORS.GREEN,
    color: COLORS.WHITE,
    icon: ICONS.VERIFY
};

export const Basic: ComponentStory<FC<BadgedInterface>> = Template.bind({});
Basic.args = {
    text: STRINGS.BASIC,
    backColor: COLORS.ORANGE, 
    color: COLORS.WHITE,
    icon: ICONS.ACCOUNT,
    reverse: true
};

export const Intermediate: ComponentStory<FC<BadgedInterface>> = Template.bind({});
Intermediate.args = {
    text: STRINGS.INTERMEDIATE,
    backColor: COLORS.YELLOW,
    color: COLORS.WHITE,
    icon: ICONS.ACCOUNT,
    reverse: true
};

export const Advanced: ComponentStory<FC<BadgedInterface>> = Template.bind(
    {}
);
Advanced.args = {
    text: STRINGS.ADVANCED,
    backColor: COLORS.GREEN,
    color: COLORS.WHITE,
    icon: ICONS.ACCOUNT,
    reverse: true
};
