import React from "react";
import { DeliveryDataProps } from "../App";
import CatImage from "./CatImage";
import DeliveryInfo from "./DeliveryInfo";
import FreeGiftTag from "./FreeGiftTag";

const NextDeliveryCard: React.FC<DeliveryDataProps> = ({
  freeGift,
  message,
  title,
  totalPrice,
}) => {
  return (
    <div className="absolute top-[30vh] left-1/2 transform -translate-x-1/2 w-full px-4 w-full max-w-md md:max-w-4xl">
      <div className="relative bg-white rounded-lg border border-gray-300 shadow-md md:flex p-0 overflow-visible">
        <CatImage />
        <DeliveryInfo message={message} title={title} totalPrice={totalPrice} />
        {freeGift && <FreeGiftTag />}
      </div>
    </div>
  );
};

export default NextDeliveryCard;
