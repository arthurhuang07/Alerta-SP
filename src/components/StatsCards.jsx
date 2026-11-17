export default function StatsCards({ pedidos }) {
  const contarPorStatus = (status) => pedidos.filter((pedido) => pedido.status === status).length
  const resolvidos = contarPorStatus('resolvido')
  const percentualResolvidos = pedidos.length ? Math.round((resolvidos / pedidos.length) * 100) : 0
  const indicadores = [['Pedidos', pedidos.length], ['Abertos', contarPorStatus('aberto')], ['Em atendimento', contarPorStatus('atendimento')], ['Resolvidos', resolvidos]]

  return (
    <section aria-label="Resumo dos pedidos" className="space-y-4">
      <dl className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {indicadores.map(([rotulo, valor]) => (
          <div key={rotulo} className="rounded-lg border border-slate-300 bg-white p-4">
            <dd className="text-3xl font-bold text-agua">{valor}</dd>
            <dt className="text-sm text-slate-700">{rotulo}</dt>
          </div>
        ))}
      </dl>
      <div>
        <p className="text-sm font-bold">{percentualResolvidos}% dos pedidos já foram resolvidos</p>
        <div className="mt-1 h-3 overflow-hidden rounded bg-slate-300" role="progressbar" aria-valuenow={percentualResolvidos} aria-valuemin={0} aria-valuemax={100}>
          <div className="h-full bg-agua transition-all" style={{ width: `${percentualResolvidos}%` }} />
        </div>
      </div>
    </section>
  )
}
