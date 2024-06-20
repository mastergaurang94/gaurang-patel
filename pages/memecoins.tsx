import memecoins from "../utils/memecoinsData";
import Memecoin from "../components/Memecoin";

export default function Memecoins() {
  return (
    <div className="py-8">
      <h2 className="text-4xl py-4 font-bold">A Meditation on Memes</h2>
      <p className="text-lg leading-relaxed my-4">
        Every day, I release a new memecoin. This project explores the
        intersection of memes, culture, and cryptocurrency. Join me on this
        journey as I share a new memecoin each day, reflecting on the humor,
        absurdity, and impact of memes in our digital world.
      </p>

      <div className="mt-8 space-y-4">
        {memecoins.map((memecoin) => (
          <Memecoin
            key={memecoin.id}
            id={memecoin.id}
            name={memecoin.name}
            ticker={memecoin.ticker}
            date={memecoin.date}
            description={memecoin.description}
            imageUrl={memecoin.imageUrl}
            links={memecoin.links}
          />
        ))}
      </div>
    </div>
  );
}
