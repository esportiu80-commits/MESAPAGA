import{demoOrder}from"@/lib/demo";import{pendingCents}from"@/core/domain";
export async function GET(){return Response.json({...demoOrder,pendingCents:pendingCents(demoOrder)})}
