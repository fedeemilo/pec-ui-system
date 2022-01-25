import React from "react";
import { Label, Content, State, VerticallDivisor } from "../../Common/Grid";
import { Badged } from "../Badged";

export const switchData = ({
    label,
    content,
    type,
    active,
    line,
    color,
    bgColor,
    icon
}: any) => {
    switch (type) {
        case "label":
            return (
                <>
                    <Label>{label}</Label>
                    <Content color={active}>{content}</Content>
                    {line && <VerticallDivisor />}
                </>
            );
        case "icon":
            return <h1>aca reemplaze por media</h1>;

        case "badge":
            return (
                <Badged
                    color={color}
                    backColor={bgColor}
                    icon={icon}
                    text={content}
                    reverse={true}
                />
            );

        case "state":
            return <State>{content}</State>;
    }
};
