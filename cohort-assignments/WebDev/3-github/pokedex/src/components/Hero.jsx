import pokemonLogo from "../assets/pokemon-5.png";

const Hero = () => {
  return (
    <div className="text-neutral-100 mt-12 flex flex-col justify-around items-center">
      <h1 className="text-6xl">Gotta Know 'Em All!</h1>
      <p className="text-3xl mt-2">Dive into the ultimate Pokémon database</p>
      <img
        src={pokemonLogo}
        alt="pokemons"
        className="mt-8 rounded-md"
      />
    </div>
  );
};

export default Hero;
