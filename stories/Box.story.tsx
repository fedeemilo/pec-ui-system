import React, { FC } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "../src";
import { BoxInterface } from "../types";


export default {
    title: "Box",
    component: Box
} as ComponentMeta<FC<BoxInterface>>;

const Template = (args: any) => <Box {...args} />;

export const Primary: ComponentStory<FC<BoxInterface>> = Template.bind({});
Primary.args = { content: "DEFAULT BOX" };

Primary.decorators = [
    () => {
        return (
            <>
                <Box {...(Primary.args as BoxInterface)} />
                <Box {...(Primary.args as BoxInterface)} />
                <Box {...(Primary.args as BoxInterface)} />
            </>
        );
    }
];
