import React, {  FC } from "react";
import { BoxInterface } from "../../../types";
import { BoxContainer } from "./styles";

export const Box: FC<BoxInterface> = ({ content }) => {
    return <BoxContainer>{content}</BoxContainer>;
};
