import { URGENCIAS, STATUS } from '../data/constantes'

export default function PedidoCard({ pedido, onStatus, onEditar, onExcluir }) {
  const urgenciaAtual = URGENCIAS[pedido.urgencia] ?? URGENCIAS.media
  const proximaEtapa =
    pedido.status === 'aberto' ? ['atendimento', 'Iniciar atendimento']
    : pedido.status === 'atendimento' ? ['resolvido', 'Marcar como resolvido']
    : null
  const classeBotao = 'rounded-lg border border-slate-500 px-3 py-1 text-sm font-bold hover:bg-slate-100'

  return (
    <li className="space-y-2 rounded-xl border border-slate-300 bg-white p-4">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="text-lg font-bold text-tinta">{pedido.tipo} em {pedido.bairro}</h3>
        <span className={`rounded-full border px-3 py-0.5 text-sm font-bold ${urgenciaAtual.cor}`}>Urgência {urgenciaAtual.rotulo}</span>
      </div>
      <p>{pedido.descricao}</p>
      <p className="text-sm text-slate-700">
        {STATUS[pedido.status]} · {new Date(pedido.criadoEm).toLocaleString('pt-BR')}
      </p>
      <div className="flex flex-wrap gap-2 pt-1">
        {proximaEtapa && <button onClick={() => onStatus(pedido, proximaEtapa[0])} className={`${classeBotao} bg-agua text-white hover:bg-tinta`}>{proximaEtapa[1]}</button>}
        <button onClick={() => onEditar(pedido)} className={classeBotao}>Editar</button>
        <button onClick={() => onExcluir(pedido.id)} className={`${classeBotao} text-red-800`}>Excluir</button>
      </div>
    </li>
  )
}
