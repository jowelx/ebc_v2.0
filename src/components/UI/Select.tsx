import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import { FONT_PURPPLE } from '@/constants/Colors';
import { SelectType } from '@/types/Input';
import { SubTitle, Title } from './Text';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {

            borderRadius: 8,
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 200,
            '&::-webkit-scrollbar': {
                width: '12px', // Ancho de la barra de desplazamiento
                backgroundColor: 'red !important',
            },
            '&::-webkit-scrollbar-thumb': {
                borderRadius: '16px', // Redondear la barra de desplazamiento
                backgroundColor: 'red !important', // Cambia este color según tus preferencias
            },
        },

    },
};

function getStyles(name: string, personName: string[], theme: Theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const CustomIcon: React.FC<any> = ({ isOpen }) => (

    <motion.img
        style={{ marginRight: 10 }}
        initial="initial"
        animate="animate"
        src="/assets/ArrowIcon.svg"
        alt="icon"
        width={24}
        height={24}
        variants={{
            initial: { rotate: isOpen ? 0 : -180, },
            animate: { rotate: isOpen ? -180 : 0, transition: { duration: 0.3, ease: 'easeOut' } },
        }}
    />
);
export default function SelectCustom({ label, data }: SelectType) {
    const [isOpen, setIsOpen] = React.useState(false);
    const theme = useTheme();
    const [personName, setPersonName] = React.useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
        setIsOpen(false);
    };
    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };
    return (
        <div>
            <Title size={16}>
                {label}
            </Title>

            <FormControl sx={{ width: "100%", }}>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    style={{
                        height: 48,
                        borderRadius: 8,
                        color: FONT_PURPPLE,
                        fontFamily: "Manrope",
                        fontSize: 16
                    }}
                    value={personName}
                    onChange={handleChange}
                    onOpen={handleOpen}
                    onClose={handleClose}
                    input={<OutlinedInput />}
                    MenuProps={MenuProps}
                    IconComponent={() => <CustomIcon isOpen={isOpen} />}

                >
                    {data.map((name: any) => (
                        <MenuItem
                            key={name}
                            value={name.value}
                            style={getStyles(name, personName, theme)}
                        >
                            {name.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}