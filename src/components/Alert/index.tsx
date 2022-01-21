import React, { FC } from "react";
import { AlertProps } from "../../../types";
import { COLORS } from "../../constants";
import ICONS from "../../constants/icons";
import { AlertContainer, RedirectIcon } from "./styles";

export const Alert: FC<AlertProps> = ({ type, label, launch }) => {

    const colorByType: any = {
        danger: COLORS.alertDanger,
        warning: COLORS.alertWarning,
        success: COLORS.alertSuccess
    };

    return (
        <AlertContainer bgColor={colorByType[type]}>
            <img src={ICONS.INFO_WHITE} alt="info esta -icon" />
            {label}

            {launch && (
                <RedirectIcon {...(launch && { href: launch })}>
                    <img src={ICONS.ERROR_LAUNCH} alt="launch-icon" />
                </RedirectIcon>
            )}
        </AlertContainer>
    );
};
