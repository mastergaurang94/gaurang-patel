import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`container mx-auto max-w-2/3 sm:max-w-full py-8 px-4`} style={{ fontFamily: "Vollkorn, serif" }}>
      <header className="container mx-auto">
        <div className={`flex flex-col justify-between`}>
          <div className={`flex justify-start`}>
            <Link href="/">
              <div className={`text-3xl font-bold LinkText`}>
                Gaurang Patel
              </div>
            </Link>
          </div>
          <div className={`flex justify-start pt-2 gap-4`}>
            <Link href="/about" className={`text-lg text-blue-500 LinkText`}>About</Link>
            <Link href="/contact" className={`text-lg text-blue-500 LinkText`}>Contact</Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto">{children}</main>

      <footer className="container mx-auto py-2">
        <div className="container">
          &copy; 2022 Gaurang Patel
        </div>
      </footer>
    </div>
  );
}