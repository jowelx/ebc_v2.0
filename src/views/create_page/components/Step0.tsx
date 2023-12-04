import { Container, Item } from '@/components/layout/Container'
import React, { FC } from 'react'
import { ButtonContained } from '@/components/UI/Buttons'
import styled from '@emotion/styled'
import { Divider, Typography } from '@mui/material'
import { FONT_GRAY } from '@/constants/Colors'
import { Step } from '@/types/CreateCage'
import { Title } from '@/components/UI/Text'

import { FadeInOut } from '@/constants/Animations'
import { MotionDiv } from '@/components/UI/Animated'
const Text = styled(Typography)({
    fontFamily: 'Manrope',
    fontWeight: 400,
    color: FONT_GRAY
})
const data = [{ title: 'Registra tus jaulas', text: 'Agrega información básica de la jaula como un nombre y un número de lote que sirva para identificarla' },
{ title: 'Añade los conejos', text: 'Agrega tus conejos a su correspondiente jaula y dales una descripción detallada, como su raza, edad y su reproducción' },
{ title: 'Lleva el control de tu granja', text: 'Realiza un seguimiento de tu granja a través de los reportes para conseguir el mejor rendimiento posible' }]

const Step1: FC<Step> = ({ setStep }) => {
    return (
        <Container>
            <Item xs={12}>
                <MotionDiv variants={FadeInOut}>
                    <Container alignItems='center' sx={{ padding: { xs: 4, md: 0 } }}>
                        <Item xs={12} md={6}>
                            <Title variant='h2' size={47} sx={{ fontSize: { xs: 27, md: 47 } }}>
                                Comenzar en El buen conejo es muy fácil
                            </Title>
                            <br />
                        </Item>
                        <Item xs={12} md={6}>
                            <Container>
                                {data.map((item, index) => (
                                    <Item xs={12}>
                                        <Title size={21} >
                                            {index + 1}. {item.title}
                                        </Title>
                                        <Text>
                                            {item.text}
                                        </Text>
                                        <br />
                                        {index < 2 ? <Divider /> : null}
                                        <br />
                                    </Item>
                                ))}
                                <Item xs={12} >
                                    <ButtonContained onClick={() => setStep(1)}>
                                        Continuar
                                    </ButtonContained>
                                </Item>
                            </Container>
                        </Item>
                    </Container>
                </MotionDiv>

            </Item>
        </Container>
    )
}
export default Step1;