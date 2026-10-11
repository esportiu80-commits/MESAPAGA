---
name: mesapaga-thermos-review
description: Run rigorous branch diff security/correctness and maintainability reviews before MESAPAGA merges.
---
# MESAPAGA Thermos Review

Adapted as a project review procedure from Cursor's official Thermos plugin: https://github.com/cursor/plugins/tree/main/thermos (MIT). This does not install or run the external Cursor plugin or its subagents.

## Input
Compare main...feature branch (or target PR), obtain actual diff and full affected files. Do not audit from filenames alone.

## Pass 1: correctness and security
- Tenant isolation: restaurant/table identifiers, tokens, staff roles, API auth and data access.
- Payment correctness: signed PSP webhooks only, idempotency, replay protection, atomic product reservations, checkout expiry/release, multi-phone concurrency, partial payment, refund/decline/3DS states.
- No premature 'paid' status; Dinii only on restaurant panel after full verified settlement of table bill.
- NFC contains table identifier only, not card credentials. No leaked API keys or production DB secrets.
- TPV account updates, menu units, immutable committed prices, cross-restaurant data leaks, feature flags off for experimental rails.
- Regression tests, migrations/backfills, safe rollback, error handling, observability.

## Pass 2: maintainability
- Review module boundaries, type safety, huge files, dead code, duplicated state, fragile abstractions, accidental coupling of AI agents with payments.
- Avoid speculative refactors unrelated to the diff.

## Verdict
Findings first, sorted P0/P1/P2/P3, each with path/line, reproducible evidence, impact and fix. Then tests executed vs blocked, risks and merge verdict. Fail closed on payment/tenant criticals. If separate agents are available, run two independent reviews and deduplicate; otherwise do two explicit passes without claiming parallel execution. Do not auto-merge or deploy.
