import styles from "../../Routes/Landing/Landing.module.css";

export const cardsWithLink = [
    {
        className: "text-start mb-2",
        icon: "bi bi-camera-video",
        iconAbove: true,
        title: "Comunidad",
        text: "Conecta con otros productores, comparte tus expectativas y aprende de los demás.",
        link: {
            url: "/community",
            text: "Ver comunidad",
            className: "small",
        },
    },
    {
        className: "text-start mb-2",
        icon: "bi bi-handbag",
        iconAbove: true,
        title: "Mercado",
        text: "Da a conocer tus conejos y comienza a venderlos en el mercado.",
        link: {
            url: "/market",
            text: "Ver mercado",
            className: "small",
        },
    },
    {
        className: "text-start mb-2",
        icon: "bi bi-calendar2-event",
        iconAbove: true,
        title: "Eventos",
        text: "Mantente al tanto de los eventos importantes: ferias, conferencias y más.",
        link: {
            url: "/events",
            text: "Ver eventos",
            className: "small",
        },
    },
];

export const cardsTools = [
    {
        className: "text-start border-0 bg-transparent",
        icon: `bi bi-calendar2-month-fill ${styles.text_orange}`,
        iconAbove: true,
        title: "Ahorrar tiempo",
        text: "Solo tienes que concentrarte en lo que mejor sabes hacer y El buen conejo hace el resto.",
    },
    {
        className: "text-start border-0 bg-transparent",
        icon: `bi bi-person-fill-gear ${styles.text_purple}`,
        iconAbove: true,
        title: "Maximizar su eficiencia",
        text: "Con todas las funcionalidades de El buen conejo tendrás tu granja bien organizada y optimizada.",
    },
    {
        className: "text-start border-0 bg-transparent",
        icon: `bi bi-clipboard-data-fill ${styles.text_yellow}`,
        iconAbove: true,
        title: "Desiciones basadas en datos",
        text: "Recibe reportes y obtén información relevante para estar al día con la granja.",
    },
];

export const cardsSteps = [
    {
        className: "text-start mb-3",
        icon: `bi bi-1-circle-fill text-secondary`,
        title: "Crea tu cuenta",
        text: "Necesitas registrarte como productor para automatizar la gestión de tu granja.",
    },
    {
        className: "text-start mb-3",
        icon: `bi bi-2-circle-fill text-secondary`,
        title: "Agrega tus conejos",
        text: "Agrega tus conejos a jaulas y dales una descripción detallada, como su raza, edad, entre otros datos.",
    },
    {
        className: "text-start mb-3",
        icon: `bi bi-3-circle-fill text-secondary`,
        title: "Recibe informes",
        text: "Por último mantén la información de tus conejos actualizada para recibir informes y estar al día con tu granja.",
    },
];
