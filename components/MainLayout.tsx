import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`container mx-auto max-w-full lg:w-2/3 py-8 px-4`}
      style={{ fontFamily: "Vollkorn, serif" }}
    >
      <Script
        defer
        data-domain="gaurangpatel.xyz"
        src="https://plausible.io/js/script.js"
      />

      <header className="container mx-auto">
        <div className={`flex flex-col justify-between`}>
          <div className={`flex justify-start items-center gap-2`}>
            <Link href="/">
              <Image
                src="/favicon.ico"
                alt="Logo"
                width={48}
                height={48}
                className="mr-2"
              />
            </Link>
            <Link href="/">
              <div className={`text-3xl font-bold LinkText`}>Gaurang Patel</div>
            </Link>
          </div>
          <div className={`flex justify-start pt-4 gap-4`}>
            <Link href="/" className={`text-lg text-blue-500 LinkText`}>
              Home
            </Link>
            <Link href="/essays" className={`text-lg text-blue-500 LinkText`}>
              Essays
            </Link>
            <Link href="/about" className={`text-lg text-blue-500 LinkText`}>
              About
            </Link>
            <Link
              href="https://honeycombs.xyz"
              className={`text-lg text-blue-500 LinkText`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Honeycombs
            </Link>
            <Link href="/rss.xml" className={`text-lg text-blue-500 LinkText`}>
              RSS
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto">{children}</main>

      <footer className="container mx-auto py-2">
        <div className="container">&copy; 2026 Gaurang Patel</div>
      </footer>
    </div>
  );
}
