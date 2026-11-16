export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-tinta text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#topo" className="text-lg font-bold">SOS Enchente SP</a>
        <nav aria-label="Principal" className="flex gap-5 text-sm font-bold">
          <a className="hover:underline" href="#pedidos">Pedidos</a>
          <a className="hover:underline" href="#dicas">Segurança</a>
          <a className="hover:underline" href="#emergencia">Telefones</a>
        </nav>
      </div>
    </header>
  )
}
