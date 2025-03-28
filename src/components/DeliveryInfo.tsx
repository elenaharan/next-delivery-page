import DeliveryActionsButtons from "./DeliveryActionsButtons";

type DeliveryInfoProps = {
  petName: string;
  userName: string;
  totalPrice: number;
};

export default function DeliveryInfo({
  petName,
  userName,
  totalPrice,
}: DeliveryInfoProps) {
  return (
    <div className="flex-1 p-4 text-center md:text-left">
      <div className="mt-6 text-center md:text-left">
        <h2 className="text-lg font-semibold text-green-700">
          Your next delivery for {petName}
        </h2>
        <p className="text-sm text-gray-600">
          Hey {userName}! In two days' time, we'll be charging you for your next
          order for {petName}'s fresh food.
        </p>
        <p className="font-bold mt-2">Total price: £{totalPrice}</p>
      </div>
      <DeliveryActionsButtons />
    </div>
  );
}
