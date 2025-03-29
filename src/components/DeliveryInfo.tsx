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
        <h2 className="text-xs md:text-lg font-semibold text-green-700">
          {title}
        </h2>
        <p className="text-xs md:text-sm text-gray-600 font-extralight">
          {message}
        </p>
        <p className="text-xs md:text-sm font-medium text-gray-600 mt-2 md:mt-4">
          Total price: £{totalPrice.toFixed(2)}
        </p>
      </div>
      <DeliveryActionsButtons />
    </div>
  );
}
