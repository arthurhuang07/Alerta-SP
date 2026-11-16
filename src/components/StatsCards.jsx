export default function StatsCards({ pedidos }) {
  const contarPorStatus = (status) => pedidos.filter((pedido) => pedido.status === status).length
  const resolvidos = conta('resolvido')
  const percentualResolvidos = pedidos.length ? Math.round((resolvidos / pedidos.length) * 100) : 0
  const itens = [['Pedidos', pedidos.length], ['Abertos', conta('aberto')], ['Em atendimento', conta('atendimento')], ['Resolvidos', resolvidos]]

  return (
    <section aria-label="Resumo dos pedidos" className="space-y-4">
      <dl className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {itens.map(([rotulo, valor]) => (
          <div key={rotulo} className="rounded-lg border border-slate-300 bg-white p-4">
            <dd className="text-3xl font-bold text-agua">{valor}</dd>
            <dt className="text-sm text-slate-700">{rotulo}</dt>
          </div>
        ))}
      </dl>
      <div>
        <p className="text-sm font-bold">{pct}% dos pedidos já foram resolvidos</p>
        <div className="mt-1 h-3 overflow-hidden rounded bg-slate-300" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
          <div className="h-full bg-agua transition-all" style={{ width: `${pct}%` }} />
        </div>
      </div>
    </section>
  )
}
