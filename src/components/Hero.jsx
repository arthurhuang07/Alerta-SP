export default function Hero() {
  return (
    <section id="topo" className="rounded-2xl bg-tinta p-8 text-white md:p-12">
      <h1 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
        Quando a água sobe, o pedido de ajuda precisa chegar rápido.
      </h1>
      <p className="mt-4 max-w-xl text-lg text-slate-200">
        Registre o que você precisa em poucos campos. Os pedidos mais urgentes aparecem primeiro para quem pode ajudar.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href="#pedidos" className="rounded-lg bg-white px-5 py-3 font-bold text-tinta hover:bg-slate-200">Fazer um pedido</a>
        <a href="tel:199" className="rounded-lg bg-alerta px-5 py-3 font-bold hover:bg-orange-800">Risco de vida? Ligue 199</a>
      </div>
    </section>
  )
}
