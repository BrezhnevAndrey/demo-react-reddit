export function assoc<T, K extends string>(key: K, value: T) {
  return <O extends object>(obj: O) =>
    ({
      ...obj,
      [key]: value,
    } as K extends keyof O ? Omit<O, K> & Record<K, T> : O & Record<K, T>);
}
