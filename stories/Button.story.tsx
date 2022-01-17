    import React, { FC } from "react";
    import { ComponentStory, ComponentMeta } from "@storybook/react";
    import { Button } from "../src";
    import { ButtonProps } from "./components/Button";
    import { COLORS } from "../src/constants";

    export default {
        title: "Button",
        component: Button
    } as ComponentMeta<FC<ButtonProps>>;

    const Template = (args: any) => <Button {...args} />;

    export const Primary: ComponentStory<FC<ButtonProps>> = Template.bind({});
    Primary.args = { label: "Button" };

Primary.decorators = [
    () => {
        return (
            <> 
                <Button
                    {...(Primary.args as ButtonProps)}
                    label={"Blue Munsell"}
                    background={COLORS.blueMunsell}
                />
                <Button
                    {...(Primary.args as ButtonProps)}
                    label={"Teal Blue"}
                    background={COLORS.tealBlue}
                />
                <Button
                    {...(Primary.args as ButtonProps)}
                    label={"Ming"}
                    background={COLORS.ming}
                />
            </>
        );
    }
];

export const DarkMode: ComponentStory<FC<ButtonProps>> = Template.bind({});
DarkMode.args = { label: "Button" };

DarkMode.decorators = [
    () => {
        return (
            <>
                <Button
                    {...(DarkMode.args as ButtonProps)}
                    label={"Gun Metal"}
                    background={COLORS.gunMetal}
                />
                <Button
                    {...(DarkMode.args as ButtonProps)}
                    label={"Dark Jungle Green"}
                    background={COLORS.darkJungleGreen}
                />
                <Button
                    {...(DarkMode.args as ButtonProps)}
                    label={"Rich Black"}
                    background={COLORS.richBlack}
                />
            </>
        );
    }
];