import "./globals.css";

export const metadata = {
  title: "Rick & Morty Lab",
  description: "A broken app waiting to be fixed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
