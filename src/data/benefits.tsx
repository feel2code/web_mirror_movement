import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";
import { FaFacebook, FaGithub, FaInstagram, FaSpotify, FaLinkedin, FaThreads, FaTwitter, FaXTwitter, FaYoutube, FaTelegram } from "react-icons/fa6";
import { siteDetails } from "./siteDetails";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Разблокируйте любимые сервисы и сайты",
        description: `С помощью нашего сервиса ${siteDetails.siteName} вам больше не нужно думать о том, что заблокировано!`,
        bullets: [
            {
                title: "YouTube",
                description: "Высокая скорость и удобство на любом из устройств, Apple, Android, SmartTV, Windows, Mac, Linux.",
                icon: <FaYoutube size={26} />
            },
            {
                title: "Instagram",
                description: "Выкладываете фото, а может ведете бизнес? Не проблема! Наш сервис поможет вам в любой ситуации.",
                icon: <FaInstagram size={26} />
            },
            {
                title: "X (Twitter)",
                description: "Следите за новостями и общайтесь с друзьями в любое время!",
                icon: <FaXTwitter size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.png"
    },
    {
        title: "Seamless Investing",
        description: "Start building wealth today, no financial degree required. Finwise makes investing accessible and straightforward.",
        bullets: [
            {
                title: "Spotify",
                description: "Для меломанов возможности не ограничены!",
                icon: <FaSpotify size={26} />
            },
            {
                title: "LinkedIn",
                description: `Вы копирайтер, фрилансер, или просто любители соцсетей? Найти работу за рубежом поможет ${siteDetails.siteName}`,
                icon: <FaLinkedin size={26} />
            },
            {
                title: "Удобная оплата и никаких ограничений",
                description: "Оплачивайте подписку удобным для вас способом, а наш бот напомнит об окончании подписки!",
                icon: <FiPieChart size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.png"
    },
]
