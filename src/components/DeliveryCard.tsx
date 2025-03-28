import React from "react";
import CatAvatar from "./CatAvatar";
import CatFullImage from "./CatFullImage";
import DeliveryInfo from "./DeliveryInfo";
import FreeGiftTag from "./FreeGiftTag";
import { DeliveryDataProps } from "../App";

const NextDeliveryCard: React.FC<DeliveryDataProps> = ({
  freeGift,
  message,
  title,
  totalPrice,
}) => {
  return (
    <div className="absolute top-[30vh] left-1/2 transform -translate-x-1/2 w-full px-4 w-full max-w-md md:max-w-2xl">
      <div className="relative bg-white rounded-lg border border-gray-200 shadow-md md:flex p-0 overflow-visible">
        <CatAvatar imageUrl="/images/cat-under-leaves.jpg" petName="" />
        <CatFullImage imageUrl="/images/cat-under-leaves.jpg" petName="" />
        <DeliveryInfo message={message} title={title} totalPrice={totalPrice} />
        {freeGift && <FreeGiftTag />}
      </div>
    </div>
  );
};

export default NextDeliveryCard;
