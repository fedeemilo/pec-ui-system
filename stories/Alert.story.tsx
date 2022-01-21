import React, { FC } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Alert } from "../src";
import { AlertProps } from "../types";


export default {
    title: "Alert",
    component: Alert
} as ComponentMeta<FC<AlertProps>>;

const Template = (args: any) => <Alert {...args} />;

export const Danger: ComponentStory<FC<AlertProps>> = Template.bind({});
Danger.args = {
    type: "danger",
    label: "Cuenta bloqueada.",
    launch: "https://www.google.com"
};

Danger.decorators = [
    () => {
        return (
            <>
                <Alert
                    {...(Danger.args as AlertProps)}               
                />
                <Alert
                    {...(Danger.args as AlertProps)}
                    label={"Error en la respuesta del servicio"}

                />
                <Alert
                    {...(Danger.args as AlertProps)}
                    label={"Error 404"}
                    launch={null} 
                />
            </>
        );
    }
];

export const Warning: ComponentStory<FC<AlertProps>> = Template.bind({});
Warning.args = {
    type: "warning",
    label: "En este momento no posee servicio disponible."
};

export const Success: ComponentStory<FC<AlertProps>> = Template.bind({});
Success.args = {
    type: "success",
    label: "La operacion ha sido exitosa."
};
