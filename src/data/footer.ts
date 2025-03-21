import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    socials: ISocials;
} = {
    subheading: "Быстрый и удобный ВПН сервис.",
    quickLinks: [
        {
            text: "Возможности",
            url: "#features"
        },
        {
            text: "Цены",
            url: "#pricing"
        },
        {
            text: "Часто задаваемые вопросы",
            url: "#faq"
        }
    ],
    // email: 'mirror_vpn@yandex.ru',
    // telephone: '+1 (123) 456-7890',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        // twitter: 'https://twitter.com/Twitter',
        // facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        // linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        // instagram: 'https://www.instagram.com',
        telegram: 'https://www.t.me/feel2code',
    }
}
