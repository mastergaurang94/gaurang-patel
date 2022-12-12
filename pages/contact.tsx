import Link from 'next/link';

export default function Contact() {
  return (
    <div className="py-8">
      <h2 className="text-4xl py-4 font-bold">Contact</h2>
      <p className="text-lg leading-relaxed my-4">My email address is my first name with master before it and 94 after it at Gmail.</p>
      <p className="text-lg leading-relaxed my-4">
        My Twitter handle is 
        <Link className="pl-1 text-blue-500 LinkText" href="https://twitter.com/mastergaurang94"
          target="_blank" rel="noopener noreferrer">
          @mastergaurang94
        </Link>.
      </p>
      <p className="text-lg leading-relaxed">Have a wonderful day!</p>
    </div>
  );
}