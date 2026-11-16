import { useState } from 'react'
import { TIPOS, URGENCIAS } from '../data/constantes'

const VAZIO = { tipo: TIPOS[0], bairro: '', descricao: '', urgencia: 'media' }
const campo = 'mt-1 w-full rounded-lg border border-slate-500 bg-white p-2'

export default function PedidoForm({ inicial, onSalvar, onCancelar }) {
  const [form, setForm] = useState(inicial ?? VAZIO)
  const [erros, setErros] = useState({})

  const muda = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const enviar = async (e) => {
    e.preventDefault()
    const novos = {}
    if (form.bairro.trim().length < 3) novos.bairro = 'Informe o bairro (mínimo 3 letras).'
    if (form.descricao.trim().length < 10) novos.descricao = 'Conte a situação com pelo menos 10 caracteres.'
    setErros(novos)
    if (Object.keys(novos).length) return
    const ok = await onSalvar({ ...form, bairro: form.bairro.trim(), descricao: form.descricao.trim() })
    if (ok && !inicial) setForm(VAZIO)
  }

  return (
    <form onSubmit={enviar} noValidate className="space-y-4 rounded-xl border border-slate-300 bg-white p-5">
      <h2 className="text-xl font-bold text-tinta">{inicial ? 'Editar pedido' : 'Novo pedido de ajuda'}</h2>

      <label className="block font-bold">
        Tipo de ajuda
        <select name="tipo" value={form.tipo} onChange={muda} className={campo}>
          {TIPOS.map((t) => <option key={t}>{t}</option>)}
        </select>
      </label>

      <label className="block font-bold">
        Bairro
        <input name="bairro" value={form.bairro} onChange={muda} className={campo} placeholder="Ex.: Jardim Pantanal" />
        {erros.bairro && <span role="alert" className="block text-sm font-normal text-red-700">{erros.bairro}</span>}
      </label>

      <label className="block font-bold">
        O que está acontecendo?
        <textarea name="descricao" value={form.descricao} onChange={muda} rows={3} className={campo} />
        {erros.descricao && <span role="alert" className="block text-sm font-normal text-red-700">{erros.descricao}</span>}
      </label>

      <label className="block font-bold">
        Urgência
        <select name="urgencia" value={form.urgencia} onChange={muda} className={campo}>
          {Object.entries(URGENCIAS).map(([k, u]) => <option key={k} value={k}>{u.rotulo}</option>)}
        </select>
      </label>

      <p className="text-sm text-slate-700">Não escreva CPF, telefone nem endereço completo.</p>

      <div className="flex gap-3">
        <button type="submit" className="rounded-lg bg-agua px-5 py-2 font-bold text-white hover:bg-tinta">
          {inicial ? 'Salvar alterações' : 'Enviar pedido'}
        </button>
        {inicial && (
          <button type="button" onClick={onCancelar} className="rounded-lg border border-slate-500 px-5 py-2 font-bold">Cancelar</button>
        )}
      </div>
    </form>
  )
}
