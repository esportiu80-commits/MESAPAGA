---
name: mesapaga-payment-safety
description: Review or implement MESAPAGA payment flows, split bills, webhooks, ledger, PSP integrations and Dinii safely.
---
# Payment safety for MESAPAGA
1. Read the existing code, database schema and tests before editing. Never invent a successful external integration.
2. NFC identifies the restaurant/table only; no payment credentials in the tag.
3. The PSP verified server-side webhook is the only authority for a completed payment. Verify signature, tenant, amount, currency and provider IDs.
4. Make webhook handling idempotent. Use database transactions and atomic reservations to prevent double charges across concurrent phones.
5. Keep partial and full payments distinct. Dinii must notify **restaurant only** when the entire account is settled.
6. Separate sandbox and production credentials. Never deploy real payments without explicit approval and E2E evidence.
7. Test foreign cards in EUR, 3DS, declined transactions, refunds, repeated/out-of-order webhooks and concurrent clients.
8. Never let n8n, AI agents or the browser set authoritative financial status.
9. Document tests run, tests blocked and remaining risks. Do not claim zero failures.