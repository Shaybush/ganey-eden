"use client";

import React, { FC, useEffect } from 'react';
import { iconConfig } from '@/app/core/config/icon.config';

interface IconProps {
    styleClass?: string;
    width?: number;
    height?: number;
    iconSrc: string;
}

const Icon: FC<IconProps> = ({ styleClass = '', width = 16, height = 16, iconSrc }) => {
    useEffect(() => {
        setIconSource();
    });

    // Utillity function: merge tailwind classes
    const getArrayFromString = (queryValues: string): string[] => {
        return !!queryValues ? queryValues.toString().split(',') : [];
    };

    const setIconSource = (): void => {
        if (getArrayFromString(iconSrc).length === 0) {
            console.log(getArrayFromString(iconSrc));
            iconSrc = '';
        }
        else {
            console.log(iconConfig[iconSrc]);
            iconSrc = iconConfig[iconSrc] || iconSrc;
        }
    };



    return (
        <img className={styleClass} src={iconSrc} width={width} height={height} />
    );
};

export default Icon;