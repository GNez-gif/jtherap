ALTER FUNCTION public.enqueue_email(text, jsonb) SET search_path = public, pgmq;
ALTER FUNCTION public.read_email_batch(text, integer, integer) SET search_path = public, pgmq;
ALTER FUNCTION public.delete_email(text, bigint) SET search_path = public, pgmq;
ALTER FUNCTION public.move_to_dlq(text, text, bigint, jsonb) SET search_path = public, pgmq;

CREATE TABLE IF NOT EXISTS public.email_send_rate_limit (
  ip_hash text NOT NULL,
  bucket_start timestamptz NOT NULL,
  count integer NOT NULL DEFAULT 1,
  PRIMARY KEY (ip_hash, bucket_start)
);

CREATE INDEX IF NOT EXISTS idx_email_send_rate_limit_bucket
  ON public.email_send_rate_limit (bucket_start);

ALTER TABLE public.email_send_rate_limit ENABLE ROW LEVEL SECURITY;
-- No policies → anon/authenticated have no access; only service_role (bypasses RLS) uses it.