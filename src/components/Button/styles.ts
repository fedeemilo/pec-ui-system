import styled from "styled-components";
import { COLORS } from "../../constants";

const Container = styled.button<{
    background?: string;
}>`
    background-color: ${({ background }) => background || COLORS.blueMunsell};
    outline: none;
    border: none;
    padding: 0.8rem 1.3rem;
    font-size: 1.2rem;
    border-radius: 0.3rem;
    width: 95%;
    height: 3.3rem;
    margin: 1.07rem auto;
    color: ${COLORS.white};
    cursor: pointer;
    transition: 200ms;
`;

export { Container };
