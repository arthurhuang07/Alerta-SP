const ODS = [
  ['ODS 11 · Cidades e comunidades sustentáveis', 'Reduz o tempo entre o pedido e o atendimento em áreas de risco da cidade.'],
  ['ODS 13 · Ação contra a mudança global do clima', 'Ajuda a população a se adaptar a chuvas extremas cada vez mais frequentes.'],
  ['ODS 3 · Saúde e bem-estar', 'Prioriza medicamentos, água potável e resgate, que protegem a saúde das famílias.'],
]

export default function OdsSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-tinta">Objetivos de Desenvolvimento Sustentável</h2>
      <ul className="grid gap-4 md:grid-cols-3">
        {ODS.map(([titulo, texto]) => (
          <li key={titulo} className="rounded-xl border border-slate-300 bg-white p-4">
            <h3 className="font-bold text-agua">{titulo}</h3>
            <p className="mt-1 text-slate-700">{texto}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
