
export const metadata = {
  title: "Mon Premier SaaS",
  description: "Bienvenue sur mon application SaaS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
