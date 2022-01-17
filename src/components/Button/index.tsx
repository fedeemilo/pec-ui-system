import React, { ButtonHTMLAttributes, FC } from "react"
import { Container } from "./styles"
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
    background?: string
}
export const Button: FC<ButtonProps> = ({ label, ...rest }) => {
    return (
        <Container type="button" {...rest}>
            {label}
        </Container>
    )
}
