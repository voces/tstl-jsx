import * as tstl from "typescript-to-lua";
import { readFileSync } from "fs";

it("works", async () => {
	const result = tstl.transpileProject("src/JsxTransformer.tsconfig.json");

	expect(result.diagnostics).toHaveLength(0);

	const lua = readFileSync(
		"src/__lua__/src/JsxTransformer.sample.lua",
		"utf-8",
	);

	expect(lua).toMatchSnapshot();
});
