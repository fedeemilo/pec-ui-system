import styled from "styled-components";
import { BadgedInterface } from "../../../types";

export const BadgedContainer = styled("div")<BadgedInterface>`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: ${props => props.reverse && "row-reverse"};
    padding: 0.55rem;
    font-size: ${props => props.size};
    font-weight: 700;
    text-align: center;
    border-radius: 0.25rem;
    color: ${props => props.color};
    background-color: ${props => props.backColor};
    text-transform: uppercase;
    align-content: center;

    ${props => props.reverse && "img { margin-right: .5rem;}"}
`;
 