import React from "react";
import { SkeletonDiv, SkeletonContainer } from "./styles";

//alert que sirve para succes, warning, error:  unica linea
const SkeletonAlert = () => <SkeletonDiv width={"100%"} height={"1.8rem"} />;

// display info de usuarios: icono + 2 lineas
const SkeletonDisplayInfo = () => {
    return (
        <SkeletonContainer>
            <SkeletonDiv width={"10%"} height={"1.8rem"} />
            <SkeletonDiv width={"87.4%"} height={"1.8rem"} />
            <SkeletonDiv width={"100%"} height={"1.8rem"} />
        </SkeletonContainer>
    );
};

// body de datos de usuario:  label + 4 lineas

const SkeletonAccountInfo = () => {
    return (
        <>
            {[1, 2, 3, 4].map(() => (
                <SkeletonDiv width={"99%"} height={"1.3rem"} />
            ))}
        </>
    );
};

// busqueda de linea o cliente: 3 lineas + form 4 inputs + button
const SkeletonSearchForm = () => {
    return (
        <>
            {[1, 2].map(() => (
                <SkeletonDiv width={"40%"} height={"1.8rem"} margin={".9rem"} />
            ))}

            <SkeletonDiv width={"40%"} height={"2.8rem"} margin={".9rem"} />

            {[1, 2].map(() => (
                <SkeletonDiv
                    width={"25%"}
                    height={"1.3rem"}
                    margin={".9rem 0 .9rem 4rem"}
                />
            ))}

            <SkeletonDiv width={"40%"} height={"1.5rem"} margin={".9rem"} />
        </>
    );
};

const SkeletonRender = () => {
    return (
        <>
            {[1, 2].map(() => (
                <SkeletonDiv width={"100%"} height={"1.8rem"} />
            ))}

            <br />

            <SkeletonDiv width={"100%"} height={"1.8rem"} />
        </>
    );
};

export {
    SkeletonAlert,
    SkeletonDisplayInfo,
    SkeletonAccountInfo,
    SkeletonSearchForm,
    SkeletonRender
};
