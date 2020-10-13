/* eslint-disable @typescript-eslint/no-explicit-any */
declare const React: any;
declare const Foo: any;
declare const Bar: any;
declare const Baz: any;
/* eslint-enable @typescript-eslint/no-explicit-any */

const staticProps = { bux: 5 };

export const App = (): unknown => (
	<Foo foo="foo">
		<Bar bar={3}>
			<Baz baz={{ foo: ["value1", "value2"] }} {...staticProps} />
			<Baz />
		</Bar>
	</Foo>
);
