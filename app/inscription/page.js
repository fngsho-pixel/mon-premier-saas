'use client'

import { useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function Inscription() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSignup(e) {
    e.preventDefault()
    setMessage('')

    if (password.length < 8) {
      setMessage('Le mot de passe doit contenir au moins 8 caractères.')
      return
    }

    setLoading(true)

    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    setLoading(false)

    if (error) {
      setMessage(error.message)
      return
    }

    setMessage(
      'Compte créé ! Vérifiez votre boîte e-mail pour confirmer votre adresse.'
    )
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0B1220] px-6 py-12 text-white">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.05] p-8">
        <a href="/" className="text-2xl font-bold">
          Panier<span className="text-[#FF795B]">Perdu</span>
        </a>

        <h1 className="mt-8 text-3xl font-bold">Créer mon compte</h1>
        <p className="mt-3 text-slate-300">
          Commencez à récupérer vos paniers abandonnés.
        </p>

        <form onSubmit={handleSignup} className="mt-8 space-y-5">
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
              autoComplete="new-password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-white/20 bg-[#111D30] px-4 py-3 text-white outline-none focus:border-[#FF795B]"
              placeholder="8 caractères minimum"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-[#FF795B] px-6 py-4 font-semibold text-[#0B1220] transition hover:bg-[#ff927a] disabled:opacity-60"
          >
            {loading ? 'Création en cours...' : 'Créer mon compte'}
          </button>
        </form>

        {message && (
          <p role="status" className="mt-5 rounded-xl bg-white/10 p-4 text-sm text-slate-200">
            {message}
          </p>
        )}

        <p className="mt-8 text-center text-sm text-slate-400">
          Déjà inscrit ?{' '}
          <a href="/connexion" className="text-[#FF957D] hover:underline">
            Se connecter
          </a>
        </p>
      </div>
    </main>
  )
}
