'use client'
import Image from 'next/image'
import styles from './page.module.css'
import styled from '@emotion/styled'
import { Button } from '@mui/material'



/* Estilizar componentes con emotion styled*/
/* Para usar las etiquetas de HTML5 simplemtente se pone styled.etiqueta*/
/*Estilizar con objetos literales*/
const Text = styled.p({
  fontSize: 10,
  fontFamily: 'Manrope'
})
/*Estilizar como css*/
const TextCss = styled.p`
font-size:10px`
/*Estilizar componentes de Material UI o cualquier otra libreria*/
/*Se pone styled(aca se pone el componente que se desea estilizar)*/
/*Estilizar con objetos literales*/
const ButtonObject = styled(Button)({
  backgroundColor: 'cian'
})
/*Estilizar como css*/
const ButtonCss = styled(Button)`
background-color:orange
`
/*Nota: cuando se ulizan pixeles en objetos 
literales no hace falta poner la unidad, 
solo el numero, en los caso en que se especifican
varia propiedades a la vez 
como por ejemplo en css padding:10px 5px,
en objetos literales se tiene que poner '10px 5px' */

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <ButtonObject variant='contained'>

          Boton A

        </ButtonObject>
        <Text>
          Texto A
        </Text>
        <ButtonCss variant='contained'>

          Boton B
        </ButtonCss>
        <TextCss>
          Texto B
        </TextCss>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
