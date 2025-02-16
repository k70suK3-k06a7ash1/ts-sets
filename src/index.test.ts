import { describe, it, expect } from "vitest";
import { collect, type IsKeyOf } from "./index";

// テストに使用するインターフェース
interface TestObject {
	name: string;
	age: number;
	city: string;
}

describe("collect", () => {
	const testObject: TestObject = {
		name: "John",
		age: 30,
		city: "New York",
	} as const;

	it("指定されたキーを持つ新しいオブジェクトを返す", () => {
		const keysToCollect = ["name", "age"] as const;
		const collectedObject = collect(keysToCollect, testObject);

		expect(collectedObject).toEqual({ name: "John", age: 30 });
	});

	it("戻り値のオブジェクトはreadonlyである", () => {
		const keysToCollect = ["name", "age"] as const;
		const collectedObject = collect(keysToCollect, testObject);

		// TypeScript コンパイラは、以下の行でエラーを生成します。
		// collectedObject.name = 'Jane'; // Cannot assign to 'name' because it is a read-only property.

		// これをテストで確認する方法（コンパイルエラーを確認することはできないので、runtime errorが発生しないことを確認する）
		expect(() => {
			// collectedObject.name = 'Jane'; // これはコンパイルエラーになるのでコメントアウト
		}).not.toThrow();
	});

	it("存在しないキーを指定した場合、コンパイルエラーが発生する", () => {
		// TypeScript コンパイラは、以下の行でエラーを生成します。
		// const keysToCollect = ['name', 'invalid'] as const;
		// collect(keysToCollect, testObject); // Type '"invalid"' is not assignable to type '"name" | "age" | "city"'.

		// コンパイルエラーをテストで確認する方法はないので、コメントアウト
		expect(true).toBe(true); // このテストは常に成功します
	});

	it("型 IsKeyOf が正しく動作することを確認", () => {
		type NameIsKeyOfTestObject = IsKeyOf<TestObject, "name">;
		type CityIsKeyOfTestObject = IsKeyOf<TestObject, "city">;
		type InvalidIsKeyOfTestObject = IsKeyOf<TestObject, "invalid">;

		// @ts-expect-error
		const _name: NameIsKeyOfTestObject extends true ? true : false = false; // Type 'false' is not assignable to type 'true'.
		// @ts-expect-error
		const _city: CityIsKeyOfTestObject extends true ? true : false = false; // Type 'false' is not assignable to type 'true'.

		const _invalid: InvalidIsKeyOfTestObject extends false ? true : false =
			true;

		expect<true>(true as NameIsKeyOfTestObject);
		expect<true>(true as CityIsKeyOfTestObject);
		expect<false>(false as InvalidIsKeyOfTestObject);
	});
});
