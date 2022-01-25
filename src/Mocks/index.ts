import { COLORS } from "../constants";
import { ICONS } from "../constants/icons";

export const errorMock = {
    type: "danger",
    label: "Cuenta bloqueada.",
    error: "http://www.google.com"
};

export const warningMock = {
    type: "warning",
    label: "En este momento no posee servicio disponible.",
    error: null
};

export const successMock = {
    type: "success",
    label: "Ganaste la lotería.",
    error: null
};

export const userMockBasic = [
    {
        type: "badge",
        color: "#fff",
        bgColor: "#fa7321",
        content: "BÁSICO",
        col: 1.3,
        icon: ICONS.ACCOUNT
    },
    {
        type: "label",
        label: "Titular",
        content: "Silvina Elizabeth Lopez Gonzalez",
        col: 3,
        line: true
    },
    {
        type: "label",
        label: "DNI",
        line: true,
        content: 34456132,
        col: 1.2
    },
    {
        type: "label",
        label: "Línea",
        content: 8888776662,
        col: 1.5,
        line: true
    },
    {
        type: "label",
        label: "CUIT",
        content: 20344561320,
        col: 1.5,
        line: true
    },
    {
        type: "label",
        label: "Género",
        content: "F",
        col: 1,
        line: true
    },
    {
        type: "label",
        label: "Ocupación",
        content: "Empleado",
        col: 2.5
    },

    {
        type: "label",
        label: "Dirección",
        content: "Santiago de Estero 3454",
        col: 2.5,
        line: true
    },
    {
        type: "label",
        label: "Código Postal",
        content: "7689",
        col: 1.12,
        line: true
    },
    {
        type: "label",
        label: "Ciudad",
        content: "Bahía Blanca",
        col: 1.8,
        line: true
    },
    {
        type: "label",
        label: "Provincia",
        content: "Buenos Aires",
        col: 1.8,
        line: true
    },
    {
        type: "label",
        label: "Correo Electrónico",
        content: "example@gmail.com",
        col: 3
    }
];

export const userMockIntermediate = [
    {
        type: "badge",
        color: "#fff",
        bgColor: COLORS.YELLOW,
        content: "INTERMEDIO",
        col: 1.3,
        icon: ICONS.ACCOUNT,
        size: '2rem'
    },
    {
        type: "label",
        label: "Titular",
        content: "Silvina Elizabeth Lopez Gonzalez",
        col: 3,
        line: true
    },
    {
        type: "label",
        label: "DNI",
        line: true,
        content: 34456132,
        col: 1.2
    },
    {
        type: "label",
        label: "Línea",
        content: 8888776662,
        col: 1.5,
        line: true
    },
    {
        type: "label",
        label: "CUIT",
        content: 20344561320,
        col: 1.5,
        line: true
    },
    {
        type: "label",
        label: "Género",
        content: "F",
        col: 1,
        line: true
    },
    {
        type: "label",
        label: "Ocupación",
        content: "Empleado",
        col: 2.5
    },

    {
        type: "label",
        label: "Dirección",
        content: "Santiago de Estero 3454",
        col: 2.5,
        line: true
    },
    {
        type: "label",
        label: "Código Postal",
        content: "7689",
        col: 1.12,
        line: true
    },
    {
        type: "label",
        label: "Ciudad",
        content: "Bahía Blanca",
        col: 1.8,
        line: true
    },
    {
        type: "label",
        label: "Provincia",
        content: "Buenos Aires",
        col: 1.8,
        line: true
    },
    {
        type: "label",
        label: "Correo Electrónico",
        content: "example@gmail.com",
        col: 3
    }
];
