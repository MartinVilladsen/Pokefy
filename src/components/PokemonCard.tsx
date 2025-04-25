import Image from "next/image";

type PokemonCardProps = {
  name: string;
  image: string;
};

export const PokemonCard = ({ name, image }: PokemonCardProps) => (
    <div className="bg-zinc-800 rounded-xl p-4 hover:bg-zinc-700 transition">
      {image ? (
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="mx-auto"
        />
      ) : (
        <div className="h-[100px] flex items-center justify-center text-sm text-gray-400">
          No image
        </div>
      )}
      <h3 className="text-center text-white mt-2 capitalize">{name}</h3>
    </div>
  );
