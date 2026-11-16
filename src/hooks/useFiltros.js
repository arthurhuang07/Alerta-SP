import { useState, useMemo } from 'react'
import { URGENCIAS } from '../data/constantes'

export function useFiltros(pedidos) {
  const [busca, setBusca] = useState('')
  const [status, setStatus] = useState('todos')
  const [urgencia, setUrgencia] = useState('todas')

  const filtrados = useMemo(() => {
    const termo = busca.trim().toLowerCase()
    return pedidos
      .filter((p) => !termo || p.bairro.toLowerCase().includes(termo) || p.tipo.toLowerCase().includes(termo))
      .filter((p) => status === 'todos' || p.status === status)
      .filter((p) => urgencia === 'todas' || p.urgencia === urgencia)
      .sort((a, b) => URGENCIAS[a.urgencia].peso - URGENCIAS[b.urgencia].peso)
  }, [pedidos, busca, status, urgencia])

  return { busca, setBusca, status, setStatus, urgencia, setUrgencia, filtrados }
}
