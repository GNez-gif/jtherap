const UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
const STORAGE_KEY = "utm_params";

export type UtmParams = Partial<Record<(typeof UTM_PARAMS)[number], string>>;

/** Capture UTM params from URL and persist in sessionStorage */
export function captureUtmParams(): UtmParams {
  const params = new URLSearchParams(window.location.search);
  const utm: UtmParams = {};

  UTM_PARAMS.forEach((key) => {
    const value = params.get(key);
    if (value) utm[key] = value;
  });

  // Store if we found any; otherwise load previously stored
  if (Object.keys(utm).length > 0) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utm));
    return utm;
  }

  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

/** Get stored UTM params */
export function getUtmParams(): UtmParams {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}
