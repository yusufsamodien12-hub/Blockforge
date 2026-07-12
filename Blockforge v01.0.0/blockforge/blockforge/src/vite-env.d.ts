/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PROXY_URL?: string;
  readonly VITE_PROXY_FORMAT?: 'simple' | 'openai';
  readonly VITE_MISTRAL_API_KEY?: string;
  readonly AMBIENTCG_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
