[**awesome-package**](../README.md) • **Docs**

***

[awesome-package](../README.md) / Vec3

# Class: Vec3

Class representing a 3D vector.

## Example

```ts
const vec1 = new Vec3( 1, 2, 3 )
const vec2 = new Vec3( 4, 5, 6 )

const distance = vec1.distanceTo( vec2 )
console.log( distance ) // Output: 5.196152422706632
```

## Constructors

### new Vec3()

> **new Vec3**(`x`, `y`, `z`): [`Vec3`](Vec3.md)

Create a vector.

#### Parameters

• **x**: `number`

The x component.

• **y**: `number`

The y component.

• **z**: `number`

The z component.

#### Returns

[`Vec3`](Vec3.md)

#### Source

math/Vec3.ts:27

## Methods

### distanceTo()

> **distanceTo**(`vec`): `number`

Calculates the distance between this vector and another vector.

#### Parameters

• **vec**: [`Vec3`](Vec3.md)

The other vector.

#### Returns

`number`

- The distance between the vectors.

#### Source

math/Vec3.ts:39
