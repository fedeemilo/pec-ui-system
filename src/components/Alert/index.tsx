import React, { FC } from "react";
import { AlertInterface } from "../../../types";
import { COLORS } from "../../constants";
import { ICONS } from "../../constants/icons";
import { Media } from "../Media";
import { AlertContainer, LaunchIcon } from "./styles";

export const Alert: FC<AlertInterface> = ({
    type,
    label,
    launch,
    icon = ICONS.INFO_WHITE
}) => {
    const colorByType: any = {
        danger: COLORS.alertDanger,
        warning: COLORS.alertWarning,
        success: COLORS.alertSuccess
    };

    return (
        <AlertContainer bgColor={colorByType[type]}>
            <Media name={icon} src={icon} />
            {label}

            {launch && (
                <LaunchIcon {...(launch && { href: launch })}>
                    <Media name={ICONS.ERROR_LAUNCH} src={ICONS.ERROR_LAUNCH} />
                </LaunchIcon>
            )}
        </AlertContainer>
    );
};
