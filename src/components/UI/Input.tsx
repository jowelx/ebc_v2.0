import React, { FC } from 'react';
import { Container, Item } from '../layout/Container';
import { Input } from '@/types/Input';
import { Title } from './Text';
import styled from '@emotion/styled';
import { INPUT_PLACEHOLDER_COLOR } from '@/constants/Colors';
const CustomInput = styled.input({
    width: '100%',
    fontSize: 16,
    borderRadius: 8,
    border: '1px solid  #D1DCD8',
    padding: '12px 16px',
    outline: 'none',
    '::placeholder': {
        color: INPUT_PLACEHOLDER_COLOR
    }
})
const Input: FC<Input> = ({ label, placeholder }) => {
    return (
        <Container>
            <Item xs={12}>
                <Title size={16}>
                    {label}
                </Title>
            </Item>
            <Item xs={12}>
                <CustomInput placeholder={placeholder} />
            </Item>
        </Container>
    )
}
export default Input