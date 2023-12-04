'use client'
import { Container, ContentContainer, Item, PrincipalContainer } from '@/components/layout/Container'
import React, { useState } from 'react'
import styled from '@emotion/styled'
import Step from './components/Step0'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'
import { Box } from '@mui/material'
interface style {
    step: number
}
const BGContainer = styled(Box)(({ step }: style) => ({
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    background: step === 0
        ? "linear-gradient(180deg, rgba(160, 243, 192, 0.00) 0%, rgba(160, 243, 192, 0.3) 100%);"
        : "linear-gradient(180deg, rgba(160, 243, 192, 0.00) 0%, rgba(160, 243, 192, 0) 100%);"  // Puedes usar la prop color o un valor predeterminado "red"
}));

const CreateCage = () => {
    const [step, setStep] = useState(0)
    return (
        <BGContainer step={step} sx={{
            background: {
                xs: 'white', md: step === 0
                    ? "linear-gradient(180deg, rgba(160, 243, 192, 0.00) 0%, rgba(160, 243, 192, 0.3) 100%);"
                    : "linear-gradient(180deg, rgba(160, 243, 192, 0.00) 0%, rgba(160, 243, 192, 0) 100%);"  // Puedes usar la prop color o un valor predeterminado "red"
            }
        }}>
            <PrincipalContainer>
                <ContentContainer>
                    <Container>
                        <Item xs={12}>
                            {step === 0 ? <Step setStep={setStep} /> : null}
                            {step === 1 ? <Step1 setStep={setStep} /> : null}
                            {step === 2 ? <Step2 setStep={setStep} /> : null}
                            {step === 3 ? <Step3 setStep={setStep} /> : null}
                        </Item>
                    </Container>
                </ContentContainer>
            </PrincipalContainer>
        </BGContainer>
    )
}
export default CreateCage