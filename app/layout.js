
import './globals.css'

export const metadata = {
  title: "Panier Perdu",
  description: "Récupérez vos paniers abandonnés automatiquement.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
