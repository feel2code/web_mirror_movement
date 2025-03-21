import clsx from "clsx";

import Link from 'next/link';
import { BsFillCheckCircleFill } from "react-icons/bs";

import { IPricing } from "@/types";

interface Props {
    tier: IPricing;
    highlight?: boolean;
}

const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
    const { name, price, features } = tier;

    return (
        <div className={clsx("w-full max-w-sm mx-auto bg-white rounded-xl border border-gray-200 lg:max-w-full", { "shadow-lg": highlight })}>
            <div className="p-6 border-b border-gray-200 rounded-t-xl">
                <h3 className="text-2xl font-semibold mb-4 text-black">{name}</h3>
                <p className="text-3xl md:text-5xl font-bold mb-6 text-black">
                    <span className={clsx({ "text-secondary": highlight })}>
                        {typeof price === 'number' ? `₽${price}` : price}
                    </span>
                    {typeof price === 'number' && <span className="text-lg font-normal text-black"> в месяц</span>}
                </p>
                <Link href="#cta">
                <button className={clsx("w-full py-3 px-4 rounded-full transition-colors", { "bg-primary hover:bg-primary-accent text-black": !highlight, "bg-hero-background hover:bg-secondary text-black": highlight })}>
                    Погнали!
                </button>
                </Link>
            </div>
            <div className="p-6 mt-1">
                <p className="font-bold mb-0">FEATURES</p>
                <p className="text-black mb-7">Все, о чем вы так давно мечтали...</p>
                <ul className="space-y-4 mb-8">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                            <BsFillCheckCircleFill className="h-5 w-5 text-secondary mr-2" />
                            <span className="text-black">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PricingColumn
