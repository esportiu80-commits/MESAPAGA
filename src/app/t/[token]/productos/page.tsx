"use client";
import {useMemo,useState} from "react";
import {useParams} from "next/navigation";
import {demoOrder} from "@/lib/demo";

const euro=(c:number)=>(c/100).toFixed(2).replace(".",",");

export default function Productos(){
  const {token}=useParams<{token:string}>();
  const [selected,setSelected]=useState<string[]>([]);
  const total=useMemo(()=>demoOrder.items.filter(i=>selected.includes(i.id)).reduce((sum,i)=>sum+i.unitCents*i.quantity,0),[selected]);
  const toggle=(id:string)=>setSelected(s=>s.includes(id)?s.filter(x=>x!==id):[...s,id]);
  return <main className="portal"><section className="bill">
    <a href={"/t/"+token+"/dividir"} className="back">← VOLVER</a>
    <small>MESA 12 · DEMO</small><h1>Elige lo tuyo</h1>
    <p>Marca únicamente los productos que quieres pagar. Verás el total antes de continuar.</p>
    <div className="billItems">{demoOrder.items.map(i=><label className="selectable" key={i.id}><input type="checkbox" checked={selected.includes(i.id)} onChange={()=>toggle(i.id)}/><span>{i.quantity}× {i.name}</span><b>{euro(i.unitCents*i.quantity)} €</b></label>)}</div>
    <div className="billTotal"><span>TU SELECCIÓN</span><b>{euro(total)} €</b></div>
    {selected.length?<a className="payButton" href={"/t/"+token+"/pagar?modo=productos&ids="+selected.join(",")}>REVISAR Y PAGAR →</a>:<span className="payButton" aria-disabled="true">SELECCIONA UN PRODUCTO</span>}
    <p className="legal">Demostración MESAPAGA. No se realizará ningún cargo real.</p>
  </section></main>
}