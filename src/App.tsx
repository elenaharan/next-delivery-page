import React, { useEffect, useState } from "react";
import NextDeliveryCard from "./components/DeliveryCard";

export type DeliveryDataProps = {
  freeGift?: boolean;
  message: string;
  title: string;
  totalPrice: number;
};

function App() {
  const [deliveryData, setDeliveryData] = useState<DeliveryDataProps | null>(
    null
  );

  useEffect(() => {
    fetch(
      `http://localhost:3000/comms/your-next-delivery/ff535484-6880-4653-b06e-89983ecf4ed5`
    )
      .then((res) => res.json())
      .then((data) => setDeliveryData(data));
  }, []);

  return (
    <div className="App">
      {deliveryData && (
        <NextDeliveryCard
          freeGift={deliveryData.freeGift}
          message={deliveryData.message}
          title={deliveryData.title}
          totalPrice={deliveryData.totalPrice}
        />
      )}
    </div>
  );
}

export default App;
