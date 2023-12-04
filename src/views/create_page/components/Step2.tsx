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
import { Box, Checkbox, Divider } from '@mui/material';
import CheckBoxCustom from '@/components/UI/CheckBox';
const Card = styled(Box)({
    display: "flex",
    width: "50vw",

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
const Step2: FC<Step> = ({ setStep }) => {
    const [screen, setScreen] = useState(0)
    const [gender, setGender] = useState(0)
    return (
        <Container >
            <Item xs={12}>
                {screen === 0 ? <MotionDiv variants={FadeInOut}>
                    <Container alignItems='center' sx={{ padding: { xs: 4, md: 0 }, flexDirection: { xs: 'column-reverse', md: 'row' } }}>
                        <Item xs={12} md={6}>
                            <StepText>
                                Paso 2
                            </StepText>
                            <br />
                            <Title size={43}>
                                Añade los conejos
                            </Title>
                            <br />
                            <SubTitle size={18}>
                                En este paso, agrega todos los conejos que se encuentran en esta jaula y dales una descripción detallada, como su raza, edad y su reproducción, entre otros datos.  </SubTitle>
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
                                src={'/assets/ilustration_create_cage_step2.svg'}
                                width={600}
                                height={600}
                                alt='ilustarion for create cage'
                            />
                        </Item>
                    </Container>
                </MotionDiv>

                    : null}
                {screen === 1 ? <MotionDiv variants={FadeInOut}>
                    <Container justifyContent='center' style={{ marginTop: '100vh', marginBottom: '10vh' }}>
                        <Item xs={12}>
                            <Card sx={{ width: { xs: '100vw', md: '50vw' } }}>
                                <Title size={27}>
                                    Agregar conejo
                                </Title>
                                <SubTitle size={18}>
                                    Añade los datos del conejo que forma parte de esta jaula.
                                </SubTitle>
                                <br />
                                <Title size={16}>
                                    Imagen del conejo
                                </Title>
                                <SubTitle size={16}>
                                    Agrega hasta 5 fotos de tu conejo </SubTitle>
                                <Container alignItems='center'>
                                    <Item xs={2}>
                                        <Image src={'/assets/bonieTemplate.svg'} alt="bonnie ilustration" width={72} height={72} />
                                    </Item>
                                    <Item xs={3}>
                                        <ButtonContained>
                                            Elegir imagen
                                        </ButtonContained>
                                    </Item>
                                </Container>

                                <Container columnSpacing={2} rowSpacing={2}>
                                    <Item xs={6}>
                                        <Input placeholder='Nombre' label='Nombre' />
                                    </Item>
                                    <Item xs={6}>
                                        <Input placeholder='002' label='ID' />
                                    </Item>
                                    <Item xs={6}>
                                        <Input placeholder='Negro' label='Color' />
                                    </Item>
                                    <Item xs={6}>
                                        <Input placeholder='8' label='Peso (en Kg)' />
                                    </Item>
                                    <Item xs={6}>
                                        <Title size={16}>
                                            Sexo
                                        </Title>
                                        {/* <Container>
                                            <Item xs={6}>
                                                <CheckBoxCustom value={gender=== 0}setValue={setGender} label='Macho' />
                                            </Item>
                                            <Item xs={6}>
                                                <CheckBoxCustom value={gender === }setValue={setGender} label='Hembra' />
                                            </Item>
    </Container>*/}
                                    </Item>
                                    <Item xs={6}>

                                    </Item>
                                </Container>

                                <Divider />
                                <Title size={27}>
                                    Historia y linaje
                                </Title>
                                <SubTitle size={18}>
                                    Agrega información más detallada del conejo </SubTitle>

                                <Input placeholder='Negro' label='Color' />

                                <Container columnSpacing={2} rowSpacing={2}>
                                    <Item xs={6}>
                                        <SelectCustom data={data} label="Padre" />
                                    </Item>
                                    <Item xs={6}>
                                        <SelectCustom data={data} label="Madre" />
                                    </Item>
                                    <Item xs={12}>
                                        <SelectCustom data={data} label="Raza" />
                                    </Item>
                                    <Item xs={12}>
                                        <SelectCustom data={data} label="Genotipo" />
                                    </Item>
                                </Container>



                                <ButtonContained onClick={() => setStep(3)}>
                                    Guardar y agregar otro conejo
                                </ButtonContained>
                            </Card>
                        </Item>
                    </Container>
                </MotionDiv>
                    : null}
            </Item>
        </Container>

    )
}
export default Step2