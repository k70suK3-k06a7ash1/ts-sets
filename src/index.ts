export function pick(keys: string[], obj: any) {
	const x = [...keys].reduce(
		(pre, current) => ({ ...pre, [current]: obj[current] as any }),
		{},
	);
	return x;
}
