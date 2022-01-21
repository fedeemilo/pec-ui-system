/* Box Types */

export interface BoxInterface extends HTMLDivElement {
    content: any | any[];
    justify?: string;
}

/* Alert Types */

export interface AlertInterface {
    type: string
    label: string;
    launch?: string | null;
    icon?: string
}
export interface AlertContainerInterface {
    bgColor?: string;
}

/* Media Types */
export interface MediaInterface {
    src: string;
    alt?: string;
    name?: string;
    width?: string;
    height?: string;
    hoverColor?: string;
    padding?: string;
    center?: boolean;
    styleString?: string;
    margin?: string;
}