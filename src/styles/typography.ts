export type TextVariant = 'default' | 'title' | 'card_title' | 'card_subtitle' | 'card_info_1' | 'card_info_2' | 'card_info_3'

const textVariants: { [key in TextVariant]: string } = {
    default: `
        font-size: 0.8125rem;
        font-weight: 500;
        font-style: normal;
        margin: 0;
    `,
    card_subtitle: `
        font-size: 0.5625rem;
        lineHeight: "0.5625rem"
        margin: 0;
        text-transform: uppercase;
    `,
    card_info_3: `
        font-size: 0.875rem;
    `,
    card_info_2: `
        font-size: 0.875rem;
        font-weight: bold;
    `,
    card_info_1: `
        font-size: 1rem;
        font-weight: bold;
    `,
    card_title: `
        font-size: 1.125rem;
        font-weight: bold;
        margin: 1rem 0rem;
    `,
    title: `
        font-size: 1.5rem;
        font-weight: bold;
        margin: 1rem 0rem;
    `
};

export {
    textVariants
};