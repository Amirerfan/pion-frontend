import { SupportedChainId } from '../constants/chains.ts';

const NODE_ENV =
  import.meta.env.VITE_APP_VERCEL_ENV || import.meta.env.NODE_ENV;

export function isDevelopmentEnv(): boolean {
  return NODE_ENV === 'development';
}

export function isTestEnv(): boolean {
  return NODE_ENV === 'test';
}

export function isStagingEnv(): boolean {
  return Boolean(import.meta.env.VITE_APP_STAGING);
}

export function isProductionEnv(): boolean {
  return NODE_ENV === 'production' && !isStagingEnv();
}

export function getPIONChainId() {
  return isProductionEnv()
    ? SupportedChainId.BSCMAINNET
    : SupportedChainId.BSCTESTNET;
}
