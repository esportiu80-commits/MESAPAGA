import type { NextConfig } from "next";
import { securityHeaders } from "./src/core/security/headers";
const nextConfig:NextConfig={async headers(){return[{source:"/:path*",headers:Object.entries(securityHeaders).map(([key,value])=>({key,value}))}]}};
export default nextConfig;
