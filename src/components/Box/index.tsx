import React, {  FC } from "react";
import { BoxContainer } from "./styles";

export interface BoxProps extends HTMLDivElement {
    content: any | any[],
    justify?: string
}

export const Box: FC<BoxProps> = ({ content }) => {
    return (
        <BoxContainer>
            {content}
        </BoxContainer>
    );
};
