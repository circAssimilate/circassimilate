/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_VERCEL_ANALYTICS_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
