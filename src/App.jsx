import { useState } from 'react'
import { usePedidos } from './hooks/usePedidos'
import { useFiltros } from './hooks/useFiltros'
import Header from './components/Header'
import Hero from './components/Hero'
import StatsCards from './components/StatsCards'
import PedidoForm from './components/PedidoForm'
import FiltroBar from './components/FiltroBar'
import PedidoList from './components/PedidoList'
import Alerta from './components/Alerta'
import DicasSeguranca from './components/DicasSeguranca'
import ContatosEmergencia from './components/ContatosEmergencia'
import OdsSection from './components/OdsSection'
import Footer from './components/Footer'

export default function App() {
  const { pedidos, carregando, erro, criar, atualizar, remover } = usePedidos()
  const filtros = useFiltros(pedidos)
  const [editando, setEditando] = useState(null)

  const salvar = async (dados) => {
    if (!editando) return criar(dados)
    const ok = await atualizar(editando, dados)
    if (ok) setEditando(null)
    return ok
  }

  const excluirPedido = (id) => {
  if (window.confirm('Excluir este pedido?')) remover(id)
}

  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl space-y-12 px-4 py-8">
        <Hero />
        <StatsCards pedidos={pedidos} />

        <section id="pedidos" className="grid gap-8 lg:grid-cols-[380px_1fr]">
          <PedidoForm
            key={editando?.id ?? 'novo'}
            inicial={editando}
            onSalvar={salvar}
            onCancelar={() => setEditando(null)}
          />
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-tinta">Pedidos de ajuda</h2>
            <Alerta mensagem={erro} />
            <FiltroBar filtros={filtros} />
            <PedidoList
              pedidos={filtros.filtrados}
              carregando={carregando}
              onStatus={(p, status) => atualizar(p, { status })}
              onEditar={setEditando}
              onExcluir={excluirPedido}
            />
          </div>
        </section>

        <DicasSeguranca />
        <ContatosEmergencia />
        <OdsSection />
      </main>
      <Footer />
    </>
  )
}
