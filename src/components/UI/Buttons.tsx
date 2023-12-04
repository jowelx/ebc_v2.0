
import styled from '@emotion/styled'
import { Button } from '@mui/material';
import { PRIMARY_COLOR, PRIMARY_COLOR_HOVER } from '@/constants/Colors';

export const ButtonContained = styled(Button)({
    variant: 'contained',
    textTransform: 'none',
    borderRadius: 8,
    padding: "0px, 24px, 0px, 24px",
    backgroundColor: PRIMARY_COLOR,
    color: 'white',
    fontFamily: 'Manrope',
    fontSize: 16,
    width: '100%',
    fontWeight: 700,
    '&:hover': {
        backgroundColor: PRIMARY_COLOR_HOVER,
    }
})