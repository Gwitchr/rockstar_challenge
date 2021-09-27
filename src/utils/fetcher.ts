export const fetcher = (
  input: RequestInfo,
  init: RequestInit,
  ..._args: unknown[]
) => fetch(input, init).then((res) => res.json());
