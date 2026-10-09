# MESAPAGA — SaaS Operations Handoff

## Goal
Scale the existing product without redesigning the approved customer/restaurant experience.

## Build order
1. Internal admin: restaurants, plan, onboarding, tables and support state.
2. Restaurant/table onboarding with NFC token assignment and verification checklist.
3. Diagnostics timeline: NFC/table lookup, account lookup, payment attempt reference, PSP webhook receipt and final state.
4. Optional tips and Google review link, configurable per restaurant.
5. Commercial automation via n8n, isolated from financial state.
6. Physical MESAPAGA kit inventory/assignment.

## Non-negotiable financial rules
- NFC identifies a table only.
- Never store card data.
- Only a verified PSP server webhook can confirm payment.
- All payment operations and webhooks must be idempotent.
- Concurrent item/payment selection must be atomic; no double payment.
- Dinii triggers only when the complete table balance is settled, restaurant-side only.
- n8n/AI/commercial agents cannot alter balances, close bills or confirm payments.

## Infrastructure
Continue from existing Render Frankfurt services and PostgreSQL. Do not create a parallel MESAPAGA.
Current free PostgreSQL is temporary and must be upgraded/replaced with an approved production plan before live launch.

## Scale gates
10 -> 50 -> 200 -> 500 -> 1000 restaurants.
Before each gate: concurrency/load test, duplicate/out-of-order webhook test, recovery test, backup restore test and observability review.

## Pilot
Do not jeopardize the 13–14 Oct pilot. New operations work stays isolated until tests pass.
