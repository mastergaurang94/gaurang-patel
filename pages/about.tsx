import Link from "next/link";

export default function About() {
  return (
    <div className="py-8">
      <h2 className="text-4xl py-4 font-bold">About</h2>
      <p className="text-lg leading-relaxed my-4">I&apos;m Gaurang Patel.</p>
      <p className="text-lg leading-relaxed my-4">
        I support people in navigating their journey through the crypto jungle.
      </p>
      <p className="text-lg leading-relaxed my-4">
        To tip me, you can send me some BTC, ETH, or SOL at these addresses:
      </p>
      <p className="text-lg leading-relaxed my-4">
        <code>bc1q4x87pmelz75c3g62p6ntvaevu4qgefxyngwl83</code>
        <br></br>
        <code>0x65744fFD6cF921F1989f7F7D2cffCaB9Fe2fC085</code>
        <br></br>
        <code>4UTmXN414x37xpEQV7AKX1McbdF6m3wq8cSEcA6ja55L</code>
      </p>
      <p className="text-lg leading-relaxed my-4">
        My Twitter handle is
        <Link
          className="pl-1 text-blue-500 LinkText"
          href="https://twitter.com/mastergaurang94"
          target="_blank"
          rel="noopener noreferrer"
        >
          @mastergaurang94
        </Link>
        .
      </p>
      <p className="text-lg leading-relaxed">Have a wonderful day!</p>
    </div>
  );
}
