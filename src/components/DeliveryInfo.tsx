import { DeliveryDataProps } from "../App";
import DeliveryActionsButtons from "./DeliveryActionsButtons";

export default function DeliveryInfo({
  message,
  title,
  totalPrice,
}: DeliveryDataProps) {
  return (
    <div className="flex-1 p-4 text-center md:text-left">
      <div className="mt-6 text-center md:text-left">
        <h2 className="text-lg font-semibold text-green-700">{title}</h2>
        <p className="text-sm text-gray-600">{message}</p>
        <p className="font-bold mt-2">Total price: £{totalPrice}</p>
      </div>
      <DeliveryActionsButtons />
    </div>
  );
}
