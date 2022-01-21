import styled from "styled-components";
import { AlertContainerInterface } from "../../../types";

const AlertContainer = styled("div")<AlertContainerInterface>`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: ${props => props.bgColor};
    min-width: 80vw;
    min-height: 1.8rem;
    width: 100%;
    margin: 1rem auto;
    padding: 0.6rem;
    border-radius: 4px;
    color: white;

    & img {
        margin-right: 10px;
    }
`;

const LaunchIcon = styled.a`
    text-decoration: none;
    margin-left: auto;
    order: 2;

    &:link,
    :visited,
    :active {
        color: white;
    }
`;

export { AlertContainer, LaunchIcon };
