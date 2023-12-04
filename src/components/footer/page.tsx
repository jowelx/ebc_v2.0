'use client';

import { Container } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/logoText.svg';
import styles from './styles.module.css';

const Footer = () => {
  const data = [
    {
      title: 'Empresa',
      links: [
        { name: 'Acerca de nosotros', href: '#' },
        { name: 'Centro de ayuda', href: '#' },
        { name: 'Solicitud de funcionalidades', href: '#' },
      ],
    },
    {
      title: 'Sitio web',
      links: [
        { name: 'Términos y condiciones', href: '#' },
        { name: 'Política de privacidad', href: '#' },
        { name: 'Mapa del sitio', href: '#' },
      ],
    },
  ];
  return (
    <Container fixed sx={{ bgcolor: '#FBF7CB' }}>
      {/* <div className='container bg-light mt-1'> */}
      <div className={`${styles.footerRow}`}>
        <Link
          href='/'
          className='d-flex align-items-center link-dark text-decoration-none'
        >
          <Image src={logo} alt='Logo' className=' mt-3' />
        </Link>
      </div>
      <footer className={`${styles.footerTag}`}>
        <div className={`${styles.footerRow}`}>
          {data.map((item, index) => (
            <div key={index} className='col-6'>
              <h5 className={`${styles.footerTitle}`}>{item.title}</h5>
              <ul className={`${styles.footerList}`}>
                {item.links.map((link, i) => (
                  <li key={i} className={`${styles.listItem}`}>
                    <Link href={link.href} className={`${styles.footerLink}`}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`${styles.copyRight}`}>
          <p>&copy;2023 El buen conejo. Todos los derechos reservados.</p>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
