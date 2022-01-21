import React, {  FC } from "react";
import { BoxProps } from "../../../types";
import { BoxContainer } from "./styles";

export const Box: FC<BoxProps> = ({ content }) => {
    return (
        <BoxContainer>
            {content}
        </BoxContainer>
    );
};
