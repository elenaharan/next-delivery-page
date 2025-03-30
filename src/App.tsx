import { useEffect, useState } from "react";
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

  const userId = process.env.REACT_APP_USER_ID;

  useEffect(() => {
    fetch(`http://localhost:3000/comms/your-next-delivery/${userId}`)
      .then((res) => res.json())
      .then((data) => setDeliveryData(data))
      .catch((err) => console.error("Error fetching next delivery data", err));
  }, [userId]);

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
