import { useState } from "react";

export function TokenLaunchpad() {
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [image, setImage] = useState("");
  const [supply, setSupply] = useState("");

  const handleCreateToken = () => {
    
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-semibold">Solana Token Launchpad</h1>
      <input
        className="mt-5 py-5 pl-[10px] w-[300px] bg-neutral-700"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="mt-5 py-5 pl-[10px] w-[300px] bg-neutral-700"
        type="text"
        placeholder="Symbol"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
      />
      <input
        className="mt-5 py-5 pl-[10px] w-[300px] bg-neutral-700"
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        className="mt-5 py-5 pl-[10px] w-[300px] bg-neutral-700"
        type="text"
        placeholder="Initial Supply"
        value={supply}
        onChange={(e) => setSupply(e.target.value)}
      />
      <button
        className="bg-neutral-950 p-5 mt-5 rounded-md hover:bg-neutral-900 hover:border-neutral-400 hover:border-2"
        onChange={handleCreateToken}
      >
        Create a token
      </button>
    </div>
  );
}
