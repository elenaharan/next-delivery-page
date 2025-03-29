export default function DeliveryActionsButtons() {
  return (
    <div className="flex justify-between gap-3 my-4 md:mt-8">
      <button className="w-[50%] bg-green-700 text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-md">
        SEE DETAILS
      </button>
      <button className="w-[50%] border border-green-700 text-green-700 text-xs md:text-sm font-semibold px-4 py-2 rounded-md">
        EDIT DELIVERY
      </button>
    </div>
  );
}
