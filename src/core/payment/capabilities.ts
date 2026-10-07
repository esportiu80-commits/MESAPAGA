export type PaymentRail="card"|"apple_pay"|"google_pay"|"link"|"click_to_pay"|"pay_by_bank"|"bizum"|"wero"|"xrpl";
export type Capability={rail:PaymentRail;enabled:boolean;phase:"now"|"pilot"|"future";reason:string};
export const paymentCapabilities:Capability[]=[
{rail:"card",enabled:true,phase:"now",reason:"Core PSP rail"},
{rail:"apple_pay",enabled:true,phase:"now",reason:"Express wallet through PSP"},
{rail:"google_pay",enabled:true,phase:"now",reason:"Express wallet through PSP"},
{rail:"link",enabled:true,phase:"now",reason:"Accelerated checkout through PSP"},
{rail:"click_to_pay",enabled:false,phase:"pilot",reason:"EMV SRC readiness"},
{rail:"pay_by_bank",enabled:false,phase:"pilot",reason:"Open-banking readiness"},
{rail:"bizum",enabled:false,phase:"pilot",reason:"Enable only with contracted PSP support"},
{rail:"wero",enabled:false,phase:"future",reason:"European rail readiness"},
{rail:"xrpl",enabled:false,phase:"future",reason:"Optional crypto rail; never critical path"}
];