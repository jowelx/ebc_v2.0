'use client'
import React, { FC } from 'react'
import { Grid } from '@mui/material';
import { ContainerProps, ItemProps } from '@/types/Layout';
import styled from '@emotion/styled'
export const PrincipalContainer = styled.main({
    display: 'grid',
    gridTemplateColumns: ' minmax(100%, 2fr)',
    maxWidth: 1440,
    margin: '0 auto',
    placeItems: " center;"

})
export const ContentContainer = styled.div({
    display: 'grid',
    gridTemplateColumns: ' minmax(100%, 1fr)',
    width: '100%',
    maxWidth: 1200,
})
export const Container: FC<ContainerProps> = ({ children, ...props }) => {

    return (<Grid container {...props}>
        {children}
    </Grid>)
}
export const Item: FC<ItemProps> = ({ children, ...props }) => {
    return (<Grid item {...props}>
        {children}
    </Grid>)
}
