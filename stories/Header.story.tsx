import React, { FC } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Header } from "../src";
import { DisplayUser } from "./components/Header";
import { userMockBasic, userMockIntermediate } from "../src/Mocks";
import { ICONS } from "./constants/icons";
import { STRINGS } from "./constants";

export default {
    title: "Header",
    component: Header
} as ComponentMeta<FC<DisplayUser>>;

const Template = (args: any) => <Header {...args} />;

export const Basic: ComponentStory<FC<DisplayUser>> = Template.bind({});

Basic.args = {
    user: userMockBasic
}

export const Advanced: ComponentStory<FC<DisplayUser>> = Template.bind({});

Advanced.args = {
    user: userMockIntermediate
};