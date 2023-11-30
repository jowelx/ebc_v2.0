'use client'
import React, { FC } from 'react'
import { Grid } from '@mui/material';
import { ContainerProps, ItemProps } from '@/types/Layout';


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
