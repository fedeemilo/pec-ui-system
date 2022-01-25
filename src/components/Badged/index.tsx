import React, { FunctionComponent } from "react";
import { BadgedInterface } from "../../../types";
import { Media } from "../Media";
import { BadgedContainer } from "./styles";

export const Badged: FunctionComponent<BadgedInterface> = ({
    text,
    icon,
    color,
    size,
    backColor,
    ...rest
}) => {
    return (
        <BadgedContainer
            color={color}
            size={size}
            backColor={backColor}
            {...rest}
        >
            {text}
            {icon && <Media src={icon} alt={icon} />}
        </BadgedContainer>
    );
};
