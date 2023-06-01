import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <main className="bg-gray-800 p-10 flex justify-center">
          <main className="bg-gray-100 min-h-screen w-screen">
            {/* <AuthContext> */}
            <main className="border rounded max-w-screen-2xl m-auto bg-white">
                <Navbar />
              {children}
            </main>
            {/* </AuthContext> */}
          </main>
        </main>
      </body>
    </html>
  );
}
