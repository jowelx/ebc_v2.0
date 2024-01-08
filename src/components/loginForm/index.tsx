'use client';

import { Box, Button, FormControl, TextField } from '@mui/material';
import Link from 'next/link';

const formStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
};

const LoginForm = () => {
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <Box
      sx={{
        width: '500px',
        height: '410px',
        paddingX: '16px',
        paddingY: '32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '4px',
        boxShadow: '0px 1px 8px 0px rgba(0, 0, 0, 0.12);',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          marginBottom: '8px',
          fontSize: '27px',
          lineHeight: '32.4px',
        }}
      >
        <h4>Inicia sesión en El buen conejo</h4>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          fontSize: '16px',
          lineHeight: '19.2px',
        }}
      >
        <h4>¿Aún no tienes cuenta? </h4>

        <Box
          sx={{
            color: '#008C7C',
            textDecoration: 'none',
          }}
        >
          <Link
            href='/register'
            style={{
              textDecoration: 'none',
              color: '#008C7C',
              fontWeight: 'bold',
              marginLeft: '4px',
            }}
          >
            Regístrate ahora
          </Link>
        </Box>
      </Box>

      <Box
        sx={{
          marginY: '32px',
        }}
      >
        <form onSubmit={submitHandler} style={formStyle}>
          <FormControl>
            <Box
              sx={{
                marginBottom: '8px',
                color: '#4F2F4A',
              }}
            >
              <span>Email</span>
            </Box>
            <TextField
              id='outlined-size-small'
              label='name@example.com'
              variant='outlined'
              size='small'
              InputLabelProps={{ style: { color: '#5EECA4' } }}
              sx={{
                height: '40px',
                width: '468px',
                marginBottom: '1rem',
                padding: '0',
              }}
            />
          </FormControl>

          <FormControl>
            <Box
              sx={{
                marginBottom: '8px',
                color: '#4F2F4A',
              }}
            >
              <span>Contraseña</span>
            </Box>
            <TextField
              required
              id='outlined-password-input'
              label='Introduce tu contraseña'
              type='password'
              variant='outlined'
              size='small'
              InputLabelProps={{
                style: { color: '#5EECA4', borderColor: '#D1DCD8' },
              }}
              sx={{
                height: '40px',
                width: '468px',
                marginBottom: '1rem',
                padding: '0',
              }}
            />
          </FormControl>

          <FormControl>
            <Button
              type='submit'
              variant='contained'
              sx={{
                height: '40px',
                width: '468px',
                padding: '0',
                bgcolor: '#008C7C',
                textTransform: 'none',
                fontSize: '16px',
                fontWeight: '700',
                ':hover': {
                  backgroundColor: '#007C7C',
                },
              }}
            >
              Iniciar sesión
            </Button>
          </FormControl>
        </form>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
          width: '100%',
          marginBottom: '8px',
          fontSize: '16px',
          lineHeight: '19.2px',
        }}
      >
        <Link
          href={'/reset'}
          style={{
            textDecoration: 'none',
            color: '#0A0A0A',
            fontWeight: '700',
            marginLeft: '4px',
            fontSize: '14px',
          }}
        >
          ¿Olvidaste la contraseña?
        </Link>
      </Box>
    </Box>
  );
};

export default LoginForm;
