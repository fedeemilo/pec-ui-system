import styled from "styled-components";
import { MediaInterface } from "../../../types";

export const MediaContainer = styled("img")<MediaInterface>`
    padding: ${props => props.padding};
    margin: ${props => props.margin};
    ${props =>
        props.center &&
        `display: block;
        margin-left: auto;
        margin-right: auto;`};
    ${props => props.styleString};
    ${props =>
        props.hoverColor &&
        ` &:hover{
            fill:white; 
            background: ${props.hoverColor};
            cursor: pointer;
            transition: .2s;
        }`}
`;
