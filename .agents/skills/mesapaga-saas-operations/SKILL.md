---
name: mesapaga-saas-operations
description: Build or review MESAPAGA SaaS administration, restaurant onboarding, tenant isolation, diagnostics and scalability.
---
# SaaS operations
1. Use existing GitHub repo and Render Frankfurt infrastructure. Do not create a parallel official app.
2. Work on feature branches; preserve the approved public site, its design and both demo experiences.
3. Add restaurants, tables, plan, staff, onboarding checklist, diagnostics and kit inventory with tenant-scoped access.
4. Check authorization on every query and mutation; restaurant staff may not see other tenants. Audit privileged actions.
5. Diagnostics are observational; they cannot mark a payment as confirmed.
6. Ensure backups, tested restores, logs without sensitive payment data, alerts and rate limits.
7. Test capacity at 10, 50, 200, 500 and 1000 restaurants before expanding. No unapproved paid cloud resources.
8. PostgreSQL free plan is temporary; obtain approval before production migration.
9. Keep commercial automations separate from financial state.