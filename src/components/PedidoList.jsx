import PedidoCard from './PedidoCard'

export default function PedidoList({ pedidos, carregando, onStatus, onEditar, onExcluir }) {
  if (carregando) return <p role="status">Carregando pedidos…</p>
  if (!pedidos.length) {
    return <p className="rounded-lg border border-dashed border-slate-500 p-6">Nenhum pedido encontrado. Use o formulário para registrar o primeiro.</p>
  }
  return (
    <ul className="space-y-3">
      {pedidos.map((pedidoAtual) => (
  <PedidoCard
    key={pedidoAtual.id}
    pedido={pedidoAtual}
    onStatus={onStatus}
    onEditar={onEditar}
    onExcluir={onExcluir}
  />
))}
    </ul>
  )
}
