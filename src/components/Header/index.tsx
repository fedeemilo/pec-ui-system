import React, { FC } from "react";
import { switchData } from "./switchData";
import { Col, Container, Element } from "../../Common/Grid";
import { SkeletonDisplayInfo } from "../Skeleton";
import { HeaderContainer } from "./styles";

export interface DisplayUser {
    user: any[];
}

export const Header: FC<DisplayUser> = ({ user }) => {
    return (
        <HeaderContainer>
            <Container
                styleString={`
                position: relative;
                justify-content: flex-start;
                padding: .25rem;

                &:before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    height: .1px;
                    left: 0;
                    border-top: .1px solid #d7d7d7;
                    background: black;
                    width: 100%;
                    transform: translateY(-50%);
                }
            `}
            >
                {user &&
                    user.map(user => (
                        <Col size={user?.col}>
                            <Element>{switchData(user)}</Element>
                        </Col>
                    ))}
            </Container>
            {!user && <SkeletonDisplayInfo />}
        </HeaderContainer>
    );
};

