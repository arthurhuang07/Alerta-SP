import { STATUS, URGENCIAS } from '../data/constantes'

const classeCampo = 'mt-1 w-full rounded-lg border border-slate-500 bg-white p-2'

export default function FiltroBar({ filtros }) {
  const { busca, setBusca, status, setStatus, urgencia, setUrgencia } = filtros
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <label className="font-bold">
        Buscar por bairro ou tipo
        <input value={busca} onChange={(e) => setBusca(e.target.value)} className={classeCampo} />
      </label>
      <label className="font-bold">
        Status
        <select value={status} onChange={(e) => setStatus(e.target.value)} className={classeCampo}>
          <option value="todos">Todos</option>
          {Object.entries(STATUS).map(([k, r]) => <option key={k} value={k}>{r}</option>)}
        </select>
      </label>
      <label className="font-bold">
        Urgência
        <select value={urgencia} onChange={(e) => setUrgencia(e.target.value)} className={classeCampo}>
          <option value="todas">Todas</option>
          {Object.entries(URGENCIAS).map(([k, u]) => <option key={k} value={k}>{u.rotulo}</option>)}
        </select>
      </label>
    </div>
  )
}
