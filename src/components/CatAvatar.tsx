type CatAvatarProps = {
  imageUrl: string;
  petName: string;
};

export default function CatAvatar({ imageUrl, petName }: CatAvatarProps) {
  return (
    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-2 border-white overflow-hidden">
      <img
        src={imageUrl}
        alt={petName}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
