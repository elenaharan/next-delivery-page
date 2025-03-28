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
    <div className="absolute top-[30vh] left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white rounded-lg shadow-md p-4 md:max-w-2xl">
      <CatAvatar imageUrl={imageUrl} petName={petName} />
      <DeliveryInfo
        petName={petName}
        userName={userName}
        totalPrice={totalPrice}
      />

      <DeliveryActionsButtons />
      {showFreeGift && <FreeGiftTag />}
    </div>
  );
};

export default NextDeliveryCard;
