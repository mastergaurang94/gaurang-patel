import memecoins from "../utils/memecoinsData";
import Memecoin from "../components/Memecoin";
import Link from "next/link";

export default function Memecoins() {
  return (
    <div className="py-8">
      <h2 className="text-4xl py-4 font-bold">A Meditation on Memes</h2>
      <p className="text-lg leading-relaxed my-4">
        Every day, I release a new memecoin. Each one is a unique creation and a
        daily experiment in finance, tech, and culture.<br></br>
        <br></br>
        <h3 className="font-semibold text-xl py-2">What you can expect:</h3>
        <ul className="list-disc ml-8">
          <li className="my-1">
            <span className="font-medium">Fair launch:</span> Doxxed dev (me),
            no insiders, no VCs, reasonable allocation.
          </li>
          <li className="my-1">
            <span className="font-medium">Transparency:</span> I reserve the
            right to sell at any point after a coin reaches a $1M market cap.
          </li>
          <li className="my-1">
            <span className="font-medium">Entertainment with a Purpose:</span>{" "}
            Please understand memecoins lie at the end of the risk curve for a
            reason. I don&apos;t ignore the risk and volatility. At the same
            time, I can&apos;t ignore the unrivaled access to creative
            expression, financial advancement, and collaborative potential that
            they offer to the common person.
          </li>
        </ul>
        <br></br>
        I&apos;ve spent enough time in crypto to see what&apos;s real and
        what&apos;s not. What I love about memecoins is they are honest.
        There&apos;s no pretending to be more than what they are. I don&apos;t
        know what the future holds, nor do I have any answers, but I hope you
        resonate with them and they bring some joy into your lives. <br></br>
        <br></br>You can follow updates here on this page or on{" "}
        <Link
          className="text-blue-500 LinkText"
          href="https://x.com/mastergaurang94/status/1799968556618035438"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </Link>
        .
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
