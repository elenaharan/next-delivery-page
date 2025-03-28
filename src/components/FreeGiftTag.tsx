export default function FreeGiftTag() {
  return (
    <div
      className="
        absolute
        bg-pink-200 text-purple-800 font-bold px-4 py-1 shadow
        text-xs md:text-sm
        -bottom-4 md:bottom-auto
        left-1/2 md:left-auto
        -top-auto md:-top-2
        -right-auto md:-right-4
        transform
        -translate-x-[50%] md:translate-x-0
        rotate-[-5deg] md:rotate-6
        block md:block
      "
      style={{ borderRadius: 0 }}
    >
      FREE GIFT
    </div>
  );
}
