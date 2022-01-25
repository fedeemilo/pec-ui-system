import { FunctionComponent } from "react";
import styled from "styled-components";

export const SkeletonContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0.5rem;
`;

interface SkeletonDivInterface {
    height: string;
    width: string;
    radius?: string;
    margin?: string;
}

export const SkeletonDiv: FunctionComponent<SkeletonDivInterface> = styled(
    "div"
)<{
    width: string;
    height: string;
    radius?: string;
    margin?: string;
}>`
    animation: gradient 3s ease infinite;
    background: linear-gradient(to right, #ddd, #cccccc, #ddd);
    background-size: 200% 200%;
    border-radius: ${props => (props.radius ? props.radius : "0.12rem")};
    height: ${props => props.height};
    margin: ${props => (props.margin ? props.margin : "0.5rem")};
    padding: 0.1rem;
    width: ${props => props.width};

    @keyframes gradient {
        0% {
            background-position: 100% 0;
        }
        50% {
            background-position: 0 50%;
        }
        100% {
            background-position: 100% 0;
        }
    }
`;
