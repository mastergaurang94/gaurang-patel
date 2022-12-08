import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className={`mx-auto py-8`} style={{ fontFamily: "Vollkorn, serif", width: "720px" }}>
      <header className="container">
        <div className={`flex flex-row justify-between`}>
          <div className={`flex justify-start`}>
            <Link href="/">
              <div className={`text-3xl font-bold LinkText`}>
                Gaurang Patel
              </div>
            </Link>
          </div>
          <div className="w-6 h-6 self-center">
            <svg className="fill-current text-gray-600" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>
          </div>
        </div>
      </header>

      <main className="container mx-auto">{children}</main>

      <footer className="mt-8 py-4">
        <div className="container">
          &copy; 2022 Gaurang Patel
        </div>
      </footer>
    </div>
  );
}
