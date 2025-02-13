// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function pick(keys: string[], obj: any) {
	const x = [...keys].reduce(
		// biome-ignore lint/performance/noAccumulatingSpread: <explanation>
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		(pre, current) => ({ ...pre, [current]: obj[current] as any }),
		{},
	);
	return x;
}
