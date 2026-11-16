const DICAS = [
  ['Não atravesse água de enchente', 'A correnteza e buracos escondidos derrubam até quem sabe nadar.'],
  ['Desligue a energia', 'Se a água entrar em casa, desligue o disjuntor geral antes de tocar em qualquer aparelho.'],
  ['Procure um ponto alto', 'Leve água, documentos em saco plástico e medicamentos.'],
  ['Evite contato com a água', 'Ela pode carregar esgoto e lixo. Lave bem as mãos e feridas depois.'],
  ['Siga os alertas oficiais', 'Acompanhe a Defesa Civil e só volte para casa quando liberarem.'],
]

export default function DicasSeguranca() {
  return (
    <section id="dicas" className="space-y-4">
      <h2 className="text-2xl font-bold text-tinta">Como se proteger durante uma enchente</h2>
      <ul className="grid gap-4 md:grid-cols-2">
        {DICAS.map(([titulo, texto]) => (
          <li key={titulo} className="border-l-4 border-agua bg-white p-4">
            <h3 className="font-bold">{titulo}</h3>
            <p className="text-slate-700">{texto}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
