import * as tstl from "typescript-to-lua";
import { readFileSync } from "fs";

it("works", async () => {
	const result = tstl.transpileProject(
		"src/JsxTransformer/JsxTransformer.tsconfig.json",
	);

	expect(result.diagnostics).toHaveLength(0);

	const lua = readFileSync("src/JsxTransformer/__lua__/bundle.lua", "utf-8");

	expect(lua).toMatchSnapshot();
});
