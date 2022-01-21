/* Box Types */

export interface BoxProps extends HTMLDivElement {
    content: any | any[];
    justify?: string;
}

/* Alert Types */

export interface AlertProps {
    type: string
    label: string;
    launch?: string | null;
}

export interface AlertContainerProps {
    bgColor?: string;
}