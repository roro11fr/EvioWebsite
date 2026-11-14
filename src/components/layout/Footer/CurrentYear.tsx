'use client';

import { useSyncExternalStore } from 'react';

const subscribe = () => () => {};
const getYear = () => new Date().getFullYear();

/** Current year — read in the browser, so a page built last year still shows this year. */
export default function CurrentYear() {
  const year = useSyncExternalStore(subscribe, getYear, getYear);
  return <>{year}</>;
}
