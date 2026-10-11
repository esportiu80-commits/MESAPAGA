-- MESAPAGA SaaS operations layer
-- Additive migration: does not modify payment settlement logic.

alter table restaurants
  add column if not exists plan_code text not null default 'ESSENTIAL',
  add column if not exists onboarding_status text not null default 'DRAFT',
  add column if not exists google_review_url text,
  add column if not exists tips_enabled boolean not null default false,
  add column if not exists tip_options integer[] not null default '{5,10,15}',
  add column if not exists support_status text not null default 'ACTIVE';

create table if not exists restaurant_staff(
  id uuid primary key,
  restaurant_id uuid not null references restaurants(id) on delete cascade,
  email text not null,
  role text not null check(role in ('OWNER','MANAGER','STAFF','SUPPORT')),
  active boolean not null default true,
  created_at timestamptz not null default now(),
  unique(restaurant_id,email)
);

create table if not exists table_diagnostics(
  id bigserial primary key,
  restaurant_id uuid not null references restaurants(id) on delete cascade,
  table_id uuid references restaurant_tables(id) on delete set null,
  event_type text not null,
  severity text not null default 'INFO' check(severity in ('INFO','WARN','ERROR')),
  correlation_id text,
  payment_id uuid references payments(id) on delete set null,
  details jsonb not null default '{}',
  created_at timestamptz not null default now()
);

create table if not exists onboarding_tasks(
  id bigserial primary key,
  restaurant_id uuid not null references restaurants(id) on delete cascade,
  task_code text not null,
  status text not null default 'PENDING',
  completed_at timestamptz,
  notes text,
  unique(restaurant_id,task_code)
);

create index if not exists diagnostics_restaurant_created_idx
  on table_diagnostics(restaurant_id,created_at desc);
create index if not exists diagnostics_correlation_idx
  on table_diagnostics(correlation_id);
create index if not exists onboarding_status_idx
  on onboarding_tasks(restaurant_id,status);

comment on table table_diagnostics is
  'Operational trace only. Never acts as payment confirmation; PSP verified webhook remains authoritative.';
