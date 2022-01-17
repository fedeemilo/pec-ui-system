import styled from "styled-components";
import { COLORS } from "../../constants";

const BoxContainer = styled("div") <{
    justify?: string
}>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 60px;
    padding: 2px;
    margin: 1rem;
    border-radius: 4px;
    background-color: ${COLORS.white};
    border: 1px solid rgba(215, 215, 215, 0.95);
    box-sizing: border-box;
`;

export { BoxContainer }

