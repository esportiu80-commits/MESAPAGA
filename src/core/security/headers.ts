export const securityHeaders={
"Content-Security-Policy":"default-src 'self'; base-uri 'self'; frame-ancestors 'none'; object-src 'none'; form-action 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; script-src 'self' 'unsafe-inline'; connect-src 'self'",
"Referrer-Policy":"strict-origin-when-cross-origin",
"X-Content-Type-Options":"nosniff",
"Permissions-Policy":"camera=(), microphone=(), geolocation=()"
} as const;
