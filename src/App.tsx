import React from "react";
import NextDeliveryCard from "./components/DeliveryCard";

function App() {
  return (
    <div className="App">
      <NextDeliveryCard
        petName="Vaska"
        userName="Elena"
        totalPrice={200}
        imageUrl="/images/cat-in-tree.jpg"
        showFreeGift={true}
      />
    </div>
  );
}

export default App;
