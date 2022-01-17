import React, { FC } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box, Button } from "../src";
import { BoxProps } from "./components/Box";
import { COLORS } from "../src/constants";

export default {
    title: "Box",
    component: Box
} as ComponentMeta<FC<BoxProps>>;

const Template = (args: any) => <Box {...args} />;

export const Primary: ComponentStory<FC<BoxProps>> = Template.bind({});
Primary.args = { content: "DEFAULT BOX" };

Primary.decorators = [
    () => {
        return (
            <>
                <Box {...(Primary.args as BoxProps)} />
                <Box {...(Primary.args as BoxProps)} />
                <Box {...(Primary.args as BoxProps)} />
            </>
        );
    }
];
