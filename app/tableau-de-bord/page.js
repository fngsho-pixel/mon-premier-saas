
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabase'

export default function TableauDeBord() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function verifierConnexion() {
      const { data, error } = await supabase.auth.getUser()

      if (error || !data.user) {
        router.replace('/connexion')
        return
      }

      setEmail(data.user.email)
      setLoading(false)
    }

    verifierConnexion()
  }, [router])

  async function deconnexion() {
    await supabase.auth.signOut()
    router.replace('/connexion')
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-[#0B1220] text-white flex items-center justify-center">
        Chargement...
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#0B1220] text-white p-8">
      <h1 className="text-3xl font-bold">
        Bienvenue sur Panier<span className="text-[#FF795B]">Perdu</span>
      </h1>

      <p className="mt-4 text-slate-300">
        Connecté avec : {email}
      </p>

      <div className="mt-10 rounded-2xl bg-[#111D30] p-6">
        <h2 className="text-xl font-bold">
          Votre tableau de bord
        </h2>
        <p className="mt-3 text-slate-300">
          Votre espace client est prêt à être configuré.
        </p>
      </div>

      <button
        onClick={deconnexion}
        className="mt-8 rounded-full bg-[#FF795B] px-6 py-3 font-semibold text-[#0B1220]"
      >
        Se déconnecter
      </button>
    </main>
  )
}
