export default function CatImage() {
  const imageUrl = "/images/cat-under-leaves.jpg";
  const altText = "white cat under green leaves";

  return (
    <>
      {/* Mobile Avatar */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full overflow-hidden border border-gray-300 md:hidden">
        <img
          src={imageUrl}
          alt={altText}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Desktop Full Image */}
      <div className="hidden md:block w-1/2">
        <img
          src={imageUrl}
          alt={altText}
          className="h-full w-full object-cover"
        />
      </div>
    </>
  );
}
