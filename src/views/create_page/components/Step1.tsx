import { ButtonContained } from '@/components/UI/Buttons';
import { StepText, SubTitle, Title } from '@/components/UI/Text';
import { Container, Item } from '@/components/layout/Container';
import { Step } from '@/types/CreateCage';
import Image from 'next/image';
import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
import Input from '@/components/UI/Input';
import SelectCustom from '@/components/UI/Select';
import { FadeInOut } from '@/constants/Animations';
import { MotionDiv } from '@/components/UI/Animated';

import { Box } from '@mui/material';
const Card = styled(Box)({
    display: "flex",


    padding: "32px",
    flexDirection: "column",
    alignItems: "flex-star",
    gap: "24px;",
    background: "#FFF",
    boxShadow: "0px 1px 8px 0px rgba(0, 0, 0, 0.12)"
});
const data = [{
    label: 'prueba 1',
    value: 'prueba 1'
}, {
    label: 'prueba 2',
    value: 'prueba 2'
}]
const Step1: FC<Step> = ({ setStep }) => {
    const [screen, setScreen] = useState(0)

    return (
        <Container >
            <Item xs={12}>
                {screen === 0 ? <MotionDiv variants={FadeInOut}>
                    <Container alignItems='center'
                        sx={{ padding: { xs: 4, md: 0 }, flexDirection: { xs: 'column-reverse', md: 'row' } }}>
                        <Item xs={12} md={6}>
                            <StepText>
                                Paso 1
                            </StepText>
                            <br />
                            <Title size={43}>
                                Registra tus jaulas
                            </Title>
                            <br />
                            <SubTitle size={18}>
                                En este paso, agrega todos los conejos que se encuentran en esta jaula y dales una descripción detallada, como su raza, edad y su reproducción, entre otros datos.
                            </SubTitle>
                            <br />
                            <Container>
                                <Item xs={12} md={3}>
                                    <ButtonContained onClick={() => setScreen(1)}>
                                        Continuar
                                    </ButtonContained>
                                </Item>
                            </Container>

                        </Item>
                        <Item xs={12} md={6}>
                            <Image
                                layout='responsive'
                                objectFit='fill'
                                src={'/assets/ilustration_create_cage.svg'}
                                width={600}
                                height={600}
                                alt='ilustarion for create cage'
                            />
                        </Item>
                    </Container>
                </MotionDiv>

                    : null}
                {screen === 1 ? <MotionDiv >
                    <Container justifyContent='center'>
                        <Item xs={12}>
                            <Card sx={{ width: { xs: '100vw', md: '50vw' } }}>
                                <Title size={27}>
                                    Crear jaula
                                </Title>
                                <SubTitle size={18}>
                                    Primero crea una jaula para luego agregar sus conejos
                                </SubTitle>
                                <Input placeholder='002' label='Título' />
                                <Input placeholder='Número de lote' label='Número de lote o identificación (opcional)' />
                                <SelectCustom data={data} label="Privacidad" />
                                <SubTitle size={12}>
                                    Mantenlo en privado si no quieres que otros vean los conejos de esta jaula
                                </SubTitle>
                                <ButtonContained onClick={() => setStep(2)}>
                                    Crear jaula y continuar
                                </ButtonContained>
                            </Card>
                        </Item>
                    </Container>
                </MotionDiv>
                    : null}
            </Item>
        </Container >

    )
}
export default Step1