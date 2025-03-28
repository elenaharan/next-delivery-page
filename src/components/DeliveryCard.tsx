import React from "react";
import DeliveryActionsButtons from "./DeliveryActionsButtons";
import FreeGiftTag from "./FreeGiftTag";
import DeliveryInfo from "./DeliveryInfo";
import CatAvatar from "./CatAvatar";

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
        <div className="hidden md:block w-1/2">
          <img
            src={imageUrl}
            alt={petName}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-1 p-4 text-center md:text-left">
          <DeliveryInfo
            petName={petName}
            userName={userName}
            totalPrice={totalPrice}
          />

          <DeliveryActionsButtons />
        </div>
        {showFreeGift && <FreeGiftTag />}
      </div>
    </div>
  );
};

export default NextDeliveryCard;
