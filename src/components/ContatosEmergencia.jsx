const CONTATOS_EMERGENCIA = [['Defesa Civil', '199'], ['Bombeiros', '193'], ['SAMU', '192']]

export default function ContatosEmergencia() {
  return (
    <section id="emergencia" className="rounded-2xl bg-alerta p-6 text-white">
      <h2 className="text-2xl font-bold">Em risco agora? Ligue antes de usar o site</h2>
      <div className="mt-4 flex flex-wrap gap-3">
        {CONTATOS.map(([nome, numero]) => (
          <a key={numero} href={`tel:${numero}`} className="rounded-lg bg-white px-5 py-3 font-bold text-tinta hover:bg-slate-200">
            {nome}: {numero}
          </a>
        ))}
      </div>
    </section>
  )
}
