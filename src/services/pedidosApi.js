// Camada de acesso a dados: so aqui existe fetch/localStorage.
// Com VITE_API_URL definida usa a API externa (MockAPI); sem ela, usa localStorage para testes.
const BASE = import.meta.env.VITE_API_URL
const KEY = 'sos-enchente-pedidos'

async function http(path = '', options = {}) {
  const res = await fetch(`${BASE}/pedidos${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  if (!res.ok) throw new Error(`Não foi possível falar com o servidor (erro ${res.status}).`)
  return res.json()
}

const ler = () => JSON.parse(localStorage.getItem(KEY) || '[]')
const salvar = (lista) => localStorage.setItem(KEY, JSON.stringify(lista))

export const usandoApiExterna = Boolean(BASE)

export const pedidosApi = BASE
  ? {
      listar: () => http(),
      criar: (dados) => http('', { method: 'POST', body: JSON.stringify(dados) }),
      atualizar: (id, dados) => http(`/${id}`, { method: 'PUT', body: JSON.stringify(dados) }),
      remover: (id) => http(`/${id}`, { method: 'DELETE' }),
    }
  : {
      listar: async () => ler(),
      criar: async (dados) => {
        const novo = { ...dados, id: String(Date.now()) }
        salvar([novo, ...ler()])
        return novo
      },
      atualizar: async (id, dados) => {
        const atual = { ...dados, id }
        salvar(ler().map((p) => (p.id === id ? atual : p)))
        return atual
      },
      remover: async (id) => {
        salvar(ler().filter((p) => p.id !== id))
        return { id }
      },
    }
