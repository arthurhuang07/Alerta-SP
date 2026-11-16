export default function Alerta({ mensagem }) {
  if (!mensagem) return null
  return <p role="alert" className="rounded-lg border border-red-400 bg-red-100 p-3 font-bold text-red-900">{mensagem}</p>
}
