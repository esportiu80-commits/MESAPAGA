import{demoOrder}from"@/lib/demo";
export default async function TablePage({params}:{params:Promise<{token:string}>}){
 const{token}=await params;
 const total=demoOrder.items.reduce((sum,i)=>sum+i.quantity*i.unitCents,0);
 const euros=(c:number)=>(c/100).toFixed(2).replace(".",",")+" €";
 return <main className="payPage"><div className="payBrand">MESA<span>PAGA</span></div><section className="receipt">
  <div className="receiptTop"><div><small>RESTAURANTE DEMO</small><h1>Mesa 12</h1></div><span>● NFC</span></div>
  <p>Tu cuenta está lista. Elige cómo quieres pagar.</p>
  <div className="items">{demoOrder.items.map(i=><div key={i.id}><span>{i.quantity} × {i.name}</span><b>{euros(i.quantity*i.unitCents)}</b></div>)}</div>
  <div className="payTotal"><small>TOTAL PENDIENTE</small><b>{euros(total)}</b></div>
  <div className="fastPay">
   <a className="payButton" href={"/t/"+token+"/pagar?modo=todo"}>PAGAR TODO <span>→</span></a>
   <a className="splitButton" href={"/t/"+token+"/dividir"}>DIVIDIR CUENTA <span>↗</span></a>
  </div>
  <p className="legal">Sin registro. Sin descargar ninguna app.<br/>🔒 Demostración: no se realizará ningún cargo real.</p>
 </section></main>
}