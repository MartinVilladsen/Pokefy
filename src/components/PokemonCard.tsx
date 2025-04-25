import Image from "next/image";

type PokemonCardProps = {
  name: string;
  image: string;
};

export const PokemonCard = ({ name, image }: PokemonCardProps) => (
    <div className="bg-zinc-800 rounded-xl p-4 hover:bg-zinc-700 transition">
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="mx-auto"
        />
      <h3 className="text-center text-white mt-2 capitalize">{name}</h3>
    </div>
  );
