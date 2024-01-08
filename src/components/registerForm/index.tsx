'use client';

import {
  Box,
  Button,
  FormControl,
  List,
  ListItem,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import Link from 'next/link';
import { useState } from 'react';

const RegisterForm = () => {
  const [estado, setEstado] = useState('' as string);

  const formStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  };
  return (
    <Box
      sx={{
        width: '500px',
        height: '658px',
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
        <h4>Comienza a ser productor</h4>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          fontSize: '16px',
          lineHeight: '19.2px',
          gap: '8px',
        }}
      >
        <h4>Primero, crea tu cuenta en El buen conejo </h4>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginBottom: '8px',
            fontSize: '16px',
            lineHeight: '19.2px',
          }}
        >
          <h4>¿Ya tienes cuenta? </h4>
          <Link
            href={'/login'}
            style={{
              textDecoration: 'none',
              color: '#008C7C',
              fontWeight: '700',
              marginLeft: '4px',
              fontSize: '14px',
            }}
          >
            Inicia sesión
          </Link>
        </Box>
      </Box>

      <Box
        sx={{
          marginTop: '24px',
        }}
      >
        <form style={formStyle}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              marginBottom: '8px',
              fontSize: '16px',
              lineHeight: '19.2px',
              gap: '8px',
            }}
          >
            <FormControl
              sx={{
                marginRight: '8px',
              }}
            >
              <Box
                sx={{
                  marginBottom: '8px',
                  color: '#4F2F4A',
                }}
              >
                <span>Nombre</span>
              </Box>
              <TextField
                id='name-size-small'
                label='Nombre'
                variant='outlined'
                size='small'
                InputLabelProps={{ style: { color: '#5EECA4' } }}
                sx={{
                  height: '40px',
                  width: '214px',
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
                <span>Apellido</span>
              </Box>
              <TextField
                id='lastName-size-small'
                label='Apellido'
                variant='outlined'
                size='small'
                InputLabelProps={{ style: { color: '#5EECA4' } }}
                sx={{
                  height: '40px',
                  width: '214px',
                  marginBottom: '1rem',
                  padding: '0',
                }}
              />
            </FormControl>
          </Box>

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
              id='email-size-small'
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

            <Box
              sx={{
                fontSize: '12px',
                lineHeight: '14.4px',
                color: '#4F2F4A',
                marginBottom: '8px',
              }}
            >
              <span>La contraseña debe contener:</span>
              <List
                sx={{
                  paddingTop: '4px',
                }}
              >
                <ListItem
                  sx={{
                    padding: '0',
                  }}
                >
                  Una mayúscula (A-Z)
                </ListItem>
                <ListItem
                  sx={{
                    padding: '0',
                  }}
                >
                  Un número (0-9)
                </ListItem>
                <ListItem
                  sx={{
                    padding: '0',
                  }}
                >
                  Una minúscula (a-z)
                </ListItem>
              </List>
            </Box>
          </FormControl>

          <FormControl>
            <Box
              sx={{
                marginBottom: '8px',
                color: '#4F2F4A',
              }}
            >
              <span>Selecciona tu Estado</span>
            </Box>
            <Select
              displayEmpty
              id='estado-size-small'
              label='name@example.com'
              variant='outlined'
              size='small'
              value={estado}
              onChange={(e) => setEstado(e.target.value as string)}
              sx={{
                height: '40px',
                width: '468px',
                marginBottom: '1rem',
                padding: '0',
              }}
              input={<OutlinedInput />}
            >
              <MenuItem value={'test1'}>test1</MenuItem>
              <MenuItem value={'test2'}>test2</MenuItem>
              <MenuItem value={'test3'}>test3</MenuItem>
            </Select>
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
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: '#858585',
          width: '100%',
          marginTop: '8px',
          fontSize: '12px',
          lineHeight: '19.2px',
        }}
      >
        <span>
          Al continuar, usted reconoce que ha leído, entendido y está de acuerdo
          con las Condiciones del servicio y la Política de privacidad de El
          buen conejo.
        </span>
      </Box>
    </Box>
  );
};

export default RegisterForm;
