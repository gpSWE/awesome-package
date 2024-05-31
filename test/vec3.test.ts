import { expect, test } from "vitest"
import { Vec3 } from "./library/math/Vec3.ts"

test( "Distance between 2 vectors", () => {

	const vec1 = new Vec3( 1, 2, 3 )
	const vec2 = new Vec3( 4, 5, 6 )

	expect( vec1.distanceTo( vec2 ) ).toBe( 5.196152422706632 )
} )
