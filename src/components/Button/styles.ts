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
    transition: box-shadow 0.4s, text-shadow 0.5s;
    box-shadow: inset 0 0 35px 0px rgba(0, 0, 0, 0.25),
        inset 0 2px 1px 1px rgba(255, 255, 255, 0),
        1px 1px 15px 2px rgba(154, 137, 164, 0.5);

    text-shadow: 1px -1px 3px ${COLORS.blueMunsell},
        -1px 1px 3px rgba(192, 151, 178, 1);
    outline: none;

    &:hover {
        cursor: pointer;

        box-shadow: inset 0 0 35px 0px rgba(0, 0, 0, 0.15),
            inset 0 2px 1px 1px rgba(255, 255, 255, 0),
            1px 1px 15px 2px rgba(154, 137, 164, 0.1);

        text-shadow: 3px -3px 5px rgba(143, 162, 199, 1),
            -3px 3px 5px rgba(192, 151, 178, 1);
            
        transition: box-shadow 0.4s, text-shadow 0.5s;
    }
`;

export { Container };
