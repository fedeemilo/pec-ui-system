import React, { FC } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Alert } from "../src";
import { AlertInterface } from "../types";
import { ICONS } from "../src/constants/icons";

export default {
    title: "Alert",
    component: Alert
} as ComponentMeta<FC<AlertInterface>>;

const Template = (args: any) => <Alert {...args} />;

export const Danger: ComponentStory<FC<AlertInterface>> = Template.bind({});
Danger.args = {
    type: "danger",
    label: "Cuenta bloqueada.",
    launch: "https://www.google.com"
};

Danger.decorators = [
    () => {
        return (
            <>
                <Alert {...(Danger.args as AlertInterface)} />
                <Alert
                    {...(Danger.args as AlertInterface)}
                    label={"Error en la respuesta del servicio"}
                />
                <Alert
                    {...(Danger.args as AlertInterface)}
                    label={"Error 404"}
                    launch={null}
                />
            </>
        );
    }
];

export const Warning: ComponentStory<FC<AlertInterface>> = Template.bind({});
Warning.args = {
    type: "warning",
    label: "En este momento no posee servicio disponible."
};

Warning.decorators = [
    () => {
        return (
            <>
                <Alert {...(Warning.args as AlertInterface)} />
                <Alert
                    {...(Warning.args as AlertInterface)}
                    label={
                        "Estamos trabajando para implementar esta funcionalidad proximamente."
                    }
                />
                <Alert
                    {...(Warning.args as AlertInterface)}
                    label={"Warning!"}
                    launch={null}
                />
            </>
        );
    }
];

export const Success: ComponentStory<FC<AlertInterface>> = Template.bind({});
Success.args = {
    type: "success",
    label: "La operacion ha sido exitosa."
};

Success.decorators = [
    () => {
        return (
            <>
                <Alert {...(Success.args as AlertInterface)} />
                <Alert
                    {...(Success.args as AlertInterface)}
                    label={"La operacion se ha completado con exito!"}
                />
                <Alert
                    {...(Success.args as AlertInterface)}
                    label={"Success!"}
                    launch={null}
                    icon={ICONS.CHECK_WHITE}
                />
            </>
        );
    }
];
