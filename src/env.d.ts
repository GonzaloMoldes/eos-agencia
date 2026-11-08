
interface Window {
  dataLayer: unknown[];
  gtag: (...args: unknown[]) => void;
  eosEvento?: (nombre: string, params?: Record<string, unknown>) => void;
  eosCookies?: {
    decision: () => { analitica?: boolean; publicidad?: boolean } | null;
    completa: () => boolean;
    guardar: (d: { analitica: boolean; publicidad: boolean }) => void;
  };
}
