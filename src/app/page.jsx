'use client'
import React, { useContext, useEffect } from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import { AppContext } from '@/context/AppContextProvider'
import Heading from '@/UI/Heading'
import Paragraph from "@/UI/Paragraph";
import CardIcon from "@/Components/CardIcon";

import AppLink from "@/UI/AppLink";
import {
  cardsWithLink,
  cardsTools,
  cardsSteps,
} from "@/utils/landing/cardData";
export default function Home() {
  const { allInformation, setAllInformation } = useContext(AppContext)

  return (
    <>
      <section className="bg-info bg-opacity-10 pt-3">
        <header className="text-center px-3">
          <Heading>La Herramienta para controlar su granja</Heading>
          <Paragraph>
            Lleva un registro completo de tus conejos y gestiona tu granja de
            manera eficiente.
          </Paragraph>
          <AppLink href="/register" className="btn btn-success">
            Únete al El buen conejo
          </AppLink>
        </header>
        <article className="row mt-3 p-4">
          {cardsWithLink.map((card, index) => (
            <div key={index} className="col-sm-4">
              <CardIcon
                className={card.className}
                icon={card.icon}
                iconAbove={card.iconAbove}
                title={card.title}
                text={card.text}
                link={card.link}
              />
            </div>
          ))}
        </article>
      </section>

      <section className="bg-success bg-opacity-10 pt-5">
        <header className="text-center px-3">
          <Heading className="h4">
            El aliado perfecto para el cuidado de tus conejos
          </Heading>
          <Paragraph>
            El buen conejo es una solución práctica para agricultores, granjeros
            y familias.
          </Paragraph>
        </header>
        <article className="row mt-3 ps-4">
          {cardsTools.map((card, index) => (
            <div key={index} className="col-sm-4">
              <CardIcon
                className={card.className}
                icon={card.icon}
                iconAbove={card.iconAbove}
                title={card.title}
                text={card.text}
                link={card.link}
              />
            </div>
          ))}
        </article>
        <div className="row mt-4">
          <main className="col-12 col-md-6 text-center ps-3 ps-md-5">
            <header>
              <Heading className="h4 mb-4">Comienza a ser productor</Heading>
            </header>
            <article className="px-3">
              {cardsSteps.map((card, index) => (
                <div key={index} className="">
                  <CardIcon
                    className={card.className}
                    icon={card.icon}
                    title={card.title}
                    text={card.text}
                    link={card.link}
                  />
                </div>
              ))}
              <AppLink
                href="/register"
                className="btn btn-success w-100 mt-2 mb-4"
              >
                Abre tu cuenta ahora
              </AppLink>
            </article>
          </main>

          <figure className="col-6 text-center d-none d-md-block mt-2">
            <img src={"/assets/mobile.svg"} className="img-fluid" alt="view mobile" />
          </figure>
        </div>
      </section>
    </>

  )
}
