import React, { FC } from 'react';
import { Container, Item } from '../layout/Container';
import { CheckBoxType } from '@/types/Input';
import { SubTitle } from './Text';
import Radio from '@mui/material/Radio';
const CheckBoxCustom: FC<CheckBoxType> = ({ label, setValue, value }) => {
    return (
        <Container>
            <Item xs={10}>
                <Radio
                    // checked={selectedValue === 'a'}
                    // onChange={handleChange}
                    value="a"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'A' }}
                />
            </Item>
            <Item xs={2} >
                <SubTitle size={14}>
                    {label}
                </SubTitle>
            </Item>
        </Container>
    )
}
export default CheckBoxCustom;