import {
    type ReactNode,
} from "react";
import { Variants } from 'framer-motion';
import { GridDirection } from '@mui/material/Grid';
export interface ContainerProps {
    direction?: GridDirection | undefined;
    children: ReactNode;
    justifyContent?: string;
    style?: any;
    columnSpacing?: number;
    alignItems?: string;
    rowSpacing?: number;
    sx?: any;
}
export interface ItemProps {
    onClick?: any;
    style?: any,
    children: ReactNode;
    xs?: number;
    md?: number;
    sx?: any;
    lg?: number;
    xl?: number;
    sm?: number;
}
export interface AnimatedComponent {
    children: ReactNode;
    variants?: Variants
    props?: any
} 