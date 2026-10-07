import {demoOrder} from "@/lib/demo";

const euro=(c:number)=>(c/100).toFixed(2).replace(".",",");
const split=(total:number,people:number)=>Math.floor(total/people)+(total%people>0?1:0);

export default async function Pagar({params,searchParams}:{params:Promise<{token:string}>,searchParams:Promise<{modo?:string;ids?:string}>}){
  const {token}=await params;
  const {modo="todo",ids=""}=await searchParams;
  const people=modo==="mitad"?2:modo==="tercio"?3:modo==="cuarto"?4:0;
  const selectedIds=ids.split(",").filter(Boolean);
  const selected=demoOrder.items.filter(i=>selectedIds.includes(i.id));
  const productCents=selected.reduce((sum,i)=>sum+i.unitCents*i.quantity,0);
  const amountCents=people?split(demoOrder.totalCents,people):modo==="productos"?productCents:demoOrder.totalCents;
  const choosingPeople=modo==="personas";
  return <main className="portal"><section className="bill">
    <a href={choosingPeople?"/t/"+token+"/dividir":"/t/"+token} className="back">← VOLVER</a>
    <small>MESA 12 · DEMO</small>
    <h1>{choosingPeople?"Divide la cuenta":modo==="productos"?"Tu selección":people?"Tu parte":"Pagar cuenta"}</h1>
    {choosingPeople?<><p>Elige cuántas personas vais a dividir la cuenta. MESAPAGA ajusta los céntimos para que nunca se cobre de más.</p><div className="billTotal"><span>TOTAL DE LA MESA</span><b>{euro(demoOrder.totalCents)} €</b></div><div className="splitChoices"><a href={"/t/"+token+"/pagar?modo=mitad"}>2 PERSONAS · {euro(split(demoOrder.totalCents,2))} € →</a><a href={"/t/"+token+"/pagar?modo=tercio"}>3 PERSONAS · {euro(split(demoOrder.totalCents,3))} € →</a><a href={"/t/"+token+"/pagar?modo=cuarto"}>4 PERSONAS · {euro(split(demoOrder.totalCents,4))} € →</a></div></>:<>
      <p>Revisa el importe de este pago antes de continuar.</p>
      {modo==="productos"&&selected.length>0&&<div className="billItems">{selected.map(i=><div className="billRow" key={i.id}><span>{i.quantity}× {i.name}</span><b>{euro(i.unitCents*i.quantity)} €</b></div>)}</div>}
      <div className="billTotal"><span>{people?"TU PARTE":modo==="productos"?"TU SELECCIÓN":"TOTAL"}</span><b>{euro(amountCents)} €</b></div>
      {modo==="productos"&&amountCents===0?<a className="payButton" href={"/t/"+token+"/productos"}>ELIGE AL MENOS UN PRODUCTO →</a>:<a className="payButton" href={"/t/"+token+"/confirmacion?importe="+amountCents}>CONTINUAR AL PAGO →</a>}
    </>}
    <p className="legal">Demostración MESAPAGA. No se realizará ningún cargo real.</p>
  </section></main>
}