export default async function Confirmacion({params,searchParams}:{params:Promise<{token:string}>,searchParams:Promise<{importe?:string}>}){
  const {token}=await params;
  const {importe="0"}=await searchParams;
  const cents=Math.max(0,Number.parseInt(importe,10)||0);
  const total=(cents/100).toFixed(2).replace(".",",");
  return <main className="portal"><section className="bill">
    <a href={"/t/"+token} className="back">← VOLVER A LA CUENTA</a>
    <small>MESA 12 · DEMO</small><h1>Listo para pagar</h1>
    <p>Este es el último paso de la demostración. En producción aquí se abrirá el proveedor de pago seguro.</p>
    <div className="billTotal"><span>IMPORTE</span><b>{total} €</b></div>
    <div className="splitChoices"><span>TARJETA / APPLE PAY / GOOGLE PAY</span><span>PROPINA · OPCIONAL</span></div>
    <a className="payButton" href={"/t/"+token+"?demo=pagado"}>SIMULAR PAGO COMPLETADO →</a>
    <p className="legal">Modo demostración: este botón no cobra dinero ni crea una transacción real.</p>
  </section></main>
}