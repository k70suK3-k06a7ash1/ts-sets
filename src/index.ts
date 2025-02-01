export function pick(keys: string[], obj: unknown) {
	const x = [...keys].reduce(
		(pre, current) => ({ ...pre, [current]: obj[current] }),
		{},
	);
	return x;
}
