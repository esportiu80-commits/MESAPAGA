import type { ReactNode } from "react";
import "./globals.css";
export const metadata={title:"MESAPAGA",description:"Acerca · revisa · paga · listo"};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="es"><body>{children}</body></html>}
