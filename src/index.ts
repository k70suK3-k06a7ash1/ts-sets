export type IsKeyOf<T, K> = K extends keyof T ? true : false;

export function collect<T, K extends keyof T>(
	keys: K[],
	obj: T,
): Readonly<Pick<T, K>> {
	return keys.reduce(
		(acc, key) => {
			(acc[key] as T[K]) = obj[key];
			return acc;
		},
		{} as Readonly<Pick<T, K>>,
	);
}
