import React from "react";
import CatAvatar from "./CatAvatar";
import CatFullImage from "./CatFullImage";
import DeliveryInfo from "./DeliveryInfo";
import FreeGiftTag from "./FreeGiftTag";

interface NextDeliveryCardProps {
  petName: string;
  userName: string;
  totalPrice: number;
  imageUrl: string;
  showFreeGift?: boolean;
}

const NextDeliveryCard: React.FC<NextDeliveryCardProps> = ({
  petName,
  userName,
  totalPrice,
  imageUrl,
  showFreeGift,
}) => {
  return (
    <div className="absolute top-[30vh] left-1/2 transform -translate-x-1/2 w-full px-4 w-full max-w-md md:max-w-2xl">
      <div className="relative bg-white rounded-lg border border-gray-200 shadow-md md:flex p-0 overflow-visible">
        <CatAvatar imageUrl={imageUrl} petName={petName} />
        <CatFullImage imageUrl={imageUrl} petName={petName} />
        <DeliveryInfo
          petName={petName}
          userName={userName}
          totalPrice={totalPrice}
        />
        {showFreeGift && <FreeGiftTag />}
      </div>
    </div>
  );
};

export default NextDeliveryCard;
