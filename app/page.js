
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1220] text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="text-2xl font-bold">
          Panier<span className="text-[#FF795B]">Perdu</span>
        </div>
        <a
          href="#decouvrir"
          className="rounded-full border border-white/20 px-5 py-2 text-sm hover:bg-white/10"
        >
          Découvrir
        </a>
      </nav>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="mb-5 inline-block rounded-full bg-[#FF795B]/15 px-4 py-2 text-sm text-[#FFB09D]">
            Pour les boutiques Shopify
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Vos paniers abandonnés méritent une seconde chance.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Panier Perdu vous aide à récupérer des ventes grâce à deux e-mails
            automatiques, personnalisés et envoyés au bon moment.
          </p>

          <a
            href="#decouvrir"
            className="mt-8 inline-block rounded-full bg-[#FF795B] px-7 py-4 font-semibold text-[#0B1220] transition hover:bg-[#ff927a]"
          >
            Découvrir comment ça marche
          </a>

          <p className="mt-4 text-sm text-slate-400">
            Simple à mettre en place. 29 € / mois par boutique.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl">
          <div className="mb-6 flex items-center justify-between">
            <span className="font-semibold">Votre activité</span>
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
              Exemple de tableau de bord
            </span>
          </div>

          <div className="rounded-2xl bg-[#111D30] p-5">
            <p className="text-sm text-slate-400">Chiffre d’affaires récupéré</p>
            <p className="mt-2 text-4xl font-bold text-[#FF957D]">1 240 €</p>
            <p className="mt-2 text-xs text-slate-500">
              Illustration fictive — pas un résultat client réel
            </p>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#111D30] p-4">
              <p className="text-sm text-slate-400">Relances</p>
              <p className="mt-2 text-2xl font-bold">2</p>
            </div>
            <div className="rounded-2xl bg-[#111D30] p-4">
              <p className="text-sm text-slate-400">Prix</p>
              <p className="mt-2 text-2xl font-bold">29 €<span className="text-sm font-normal"> / mois</span></p>
            </div>
          </div>
        </div>
      </section>

      <section id="decouvrir" className="border-t border-white/10 bg-[#101A2B] px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#FF957D]">
            Le principe
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Récupérez vos ventes sans courir après vos clients.
          </h2>
          <p className="mt-5 leading-8 text-slate-300">
            Deux e-mails personnalisés relancent automatiquement les clients
            qui n’ont pas terminé leur commande. Vous gardez une vue claire
            sur les ventes récupérées.
          </p>
        </div>
      </section>

      <footer className="px-6 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Panier Perdu. Tous droits réservés.
      </footer>
    </main>
  );
}
