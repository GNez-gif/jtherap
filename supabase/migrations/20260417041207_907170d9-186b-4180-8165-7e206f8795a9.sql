CREATE POLICY "Service role manages rate limits"
ON public.email_send_rate_limit
FOR ALL
TO public
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role');