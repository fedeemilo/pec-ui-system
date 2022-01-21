import React, { FunctionComponent } from "react";
import { MediaInterface } from "../../../types";
import { MediaContainer } from "./styles";

export const Media: FunctionComponent<MediaInterface> = ({
    name,
    src,
    width,
    height,
    hoverColor,
    padding,
    margin
}) => {
    return (
        <MediaContainer
            padding={padding}
            hoverColor={hoverColor}
            margin={margin}
            width={width}
            src={src}
            alt={name}
            height={height}
        />
    );
};


