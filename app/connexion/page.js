'use client'

import { useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function Connexion() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin(e) {
    e.preventDefault()
    setMessage('')
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    setLoading(false)

    if (error) {
      setMessage('Adresse e-mail ou mot de passe incorrect.')
      return
    }

    window.location.href = '/tableau-de-bord'
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0B1220] px-6 py-12 text-white">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.05] p-8">
        <a href="/" className="text-2xl font-bold">
          Panier<span className="text-[#FF795B]">Perdu</span>
        </a>

        <h1 className="mt-8 text-3xl font-bold">Content de vous revoir !</h1>

        <p className="mt-3 text-slate-300">
          Connectez-vous à votre espace Panier Perdu.
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm">
              Adresse e-mail
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-white/20 bg-[#111D30] px-4 py-3 text-white outline-none focus:border-[#FF795B]"
              placeholder="vous@exemple.fr"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm">
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-white/20 bg-[#111D30] px-4 py-3 text-white outline-none focus:border-[#FF795B]"
              placeholder="Votre mot de passe"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-[#FF795B] px-6 py-4 font-semibold text-[#0B1220] transition hover:bg-[#ff927a] disabled:opacity-60"
          >
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>

        {message && (
          <p role="alert" className="mt-5 rounded-xl bg-red-400/10 p-4 text-sm text-red-200">
            {message}
          </p>
        )}

        <p className="mt-8 text-center text-sm text-slate-400">
          Pas encore de compte ?{' '}
          <a href="/inscription" className="text-[#FF957D] hover:underline">
            Créer un compte
          </a>
        </p>
      </div>
    </main>
  )
}
