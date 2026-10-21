
interface Window {
  dataLayer: unknown[];
  gtag: (...args: unknown[]) => void;
  eosEvento?: (nombre: string, params?: Record<string, unknown>) => void;
  eosCookies?: { decision: () => string | null; guardar: (d?: string) => void; cargarGA: () => void };
  __eosGA?: boolean;
}
