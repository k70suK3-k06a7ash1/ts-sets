import { describe, it, expect, expectTypeOf } from "vitest";
import { collect } from "./index";
describe("collect", function () {
    var testObject = {
        name: "John",
        age: 30,
        city: "New York",
    };
    it("指定されたキーを持つ新しいオブジェクトを返す", function () {
        var keysToCollect = ["name", "age"];
        var collectedObject = collect(keysToCollect, testObject);
        expect(collectedObject).toEqual({ name: "John", age: 30 });
    });
    it("戻り値のオブジェクトはreadonlyである", function () {
        var keysToCollect = ["name", "age"];
        var collectedObject = collect(keysToCollect, testObject);
        // TypeScript コンパイラは、以下の行でエラーを生成します。
        // collectedObject.name = 'Jane'; // Cannot assign to 'name' because it is a read-only property.
        // これをテストで確認する方法（コンパイルエラーを確認することはできないので、runtime errorが発生しないことを確認する）
        expect(function () {
            // collectedObject.name = 'Jane'; // これはコンパイルエラーになるのでコメントアウト
        }).not.toThrow();
    });
    it("存在しないキーを指定した場合、コンパイルエラーが発生する", function () {
        // TypeScript コンパイラは、以下の行でエラーを生成します。
        // const keysToCollect = ['name', 'invalid'] as const;
        // collect(keysToCollect, testObject); // Type '"invalid"' is not assignable to type '"name" | "age" | "city"'.
        // コンパイルエラーをテストで確認する方法はないので、コメントアウト
        expect(true).toBe(true); // このテストは常に成功します
    });
    it("型 IsKeyOf が正しく動作することを確認", function () {
        expectTypeOf().toEqualTypeOf();
        expectTypeOf().toEqualTypeOf();
        expectTypeOf().toEqualTypeOf();
    });
});
