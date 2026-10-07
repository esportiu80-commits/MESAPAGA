export const passkeyPolicy={rpName:"MESAPAGA",userVerification:"required" as const,attestation:"none" as const};
export function isPasskeyEligible(){return typeof globalThis!=="undefined"&&"PublicKeyCredential"in globalThis}
