import { useState, useEffect } from 'react'
import { pedidosApi } from '../services/pedidosApi'

export function usePedidos() {
  const [pedidos, setPedidos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')

  const executar = async (acao) => {
    setErro('')
    try {
      return await acao()
    } catch (e) {
      setErro(e.message)
    }
  }

  useEffect(() => {
    executar(pedidosApi.listar)
      .then((lista) => lista && setPedidos(lista))
      .finally(() => setCarregando(false))
  }, [])

  const criar = async (dados) => {
    const novo = await executar(() =>
      pedidosApi.criar({ ...dados, status: 'aberto', criadoEm: new Date().toISOString() }),
    )
    if (novo) setPedidos((atual) => [novo, ...atual])
    return Boolean(novo)
  }

  const atualizar = async (pedido, mudancas) => {
    const salvo = await executar(() => pedidosApi.atualizar(pedido.id, { ...pedido, ...mudancas }))
    if (salvo) setPedidos((atual) => atual.map((p) => (p.id === salvo.id ? salvo : p)))
    return Boolean(salvo)
  }

  const remover = async (id) => {
    const ok = await executar(() => pedidosApi.remover(id))
    if (ok) setPedidos((atual) => atual.filter((p) => p.id !== id))
  }

  return { pedidos, carregando, erro, criar, atualizar, remover }
}
