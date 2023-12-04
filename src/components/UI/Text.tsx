import React from 'react';
import styled from '@emotion/styled'
import { Typography } from '@mui/material';
import { FONT_COLOR_PRIMARY, FONT_GRAY, FONT_PURPPLE } from '@/constants/Colors';
import { TitleType } from '@/types/Text';

export const Title = styled(Typography)(({ size }: TitleType) => ({
    color: FONT_PURPPLE,
    fontFamily: 'Manrope',
    fontWeight: 600,
    /* Asumo que 'step' es una prop que deseas usar en el estilo */
    fontSize: size
}));
export const SubTitle = styled(Typography)(({ size }: TitleType) => ({
    color: FONT_GRAY,
    fontFamily: 'Manrope',
    fontWeight: 400,
    /* Asumo que 'step' es una prop que deseas usar en el estilo */
    fontSize: size
}));
export const StepText = styled(Typography)({
    variant: 'h6',
    fontFamily: 'Manrope',
    color: FONT_COLOR_PRIMARY,
    fontWeight: 600,
    fontSize: 16,
})