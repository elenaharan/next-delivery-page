type CatAvatarProps = {
  imageUrl: string;
  petName: string;
};

export default function CatAvatar({ imageUrl, petName }: CatAvatarProps) {
  return (
    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full overflow-hidden md:hidden">
      <img
        src={imageUrl}
        alt={petName}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
