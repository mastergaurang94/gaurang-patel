import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MemeModal from "./MemeModal";

interface MemecoinProps {
  id: number;
  name: string;
  ticker: string;
  date: string;
  description: string;
  imageUrl: string;
  links?: {
    [key: string]: string | undefined;
  };
}

const Memecoin: React.FC<MemecoinProps> = ({
  name,
  ticker,
  date,
  description,
  imageUrl,
  links = {},
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const parsedDate = new Date(`${date}T06:00:00Z`);
  const formattedDate = parsedDate.toLocaleDateString("en-US");

  const renderLinks = () => {
    const linkLabels: { [key: string]: string } = {
      contractAddress: "Contract Address",
      dexscreenerUrl: "Dexscreener",
      pumpFunUrl: "Pump.fun",
      raydiumUrl: "Buy on Raydium",
      coingeckoUrl: "Coingecko",
      coinmarketCapUrl: "Coinmarketcap",
    };

    return Object.entries(links)
      .filter(([key, value]) => value)
      .map(([key, value], index, array) => (
        <span key={key}>
          <Link
            href={value!}
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkLabels[key]}
          </Link>
          {index < array.length - 1 && <span className="mx-2">|</span>}
        </span>
      ));
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex items-start space-x-4 p-4 border-b border-gray-200">
      <div className="flex-shrink-0" onClick={openModal}>
        <Image
          src={imageUrl}
          alt={name}
          width={100}
          height={100}
          className="rounded cursor-pointer"
        />
      </div>
      <div>
        <h3 className="text-xl font-bold">
          ${ticker} / {name}
        </h3>
        <p className="text-gray-500">{formattedDate}</p>
        <p className="mt-2 text-gray-700">{description}</p>
        <div className="mt-4">{renderLinks()}</div>
      </div>
      {isModalOpen && <MemeModal imageUrl={imageUrl} onClose={closeModal} />}
    </div>
  );
};

export default Memecoin;
