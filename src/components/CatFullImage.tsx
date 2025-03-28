type CatFullImageProps = {
  imageUrl: string;
  petName: string;
};

export default function CatFullImage({ imageUrl, petName }: CatFullImageProps) {
  return (
    <div className="hidden md:block w-1/2">
      <img
        src={imageUrl}
        alt={petName}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
