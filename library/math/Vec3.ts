/**
 * @module Vec3
 * This module provides a Vec3 class to represent 3D vectors and perform vector operations.
 */

/**
 * Class representing a 3D vector.
 * @example
 * const vec1 = new Vec3( 1, 2, 3 )
 * const vec2 = new Vec3( 4, 5, 6 )
 *
 * const distance = vec1.distanceTo( vec2 )
 * console.log( distance ) // Output: 5.196152422706632
 */
export class Vec3 {

    x: number
    y: number
    z: number

    /**
     * Create a vector.
     * @param {number} x - The x component.
     * @param {number} y - The y component.
     * @param {number} z - The z component.
     */
    constructor( x: number, y: number, z: number ) {

        this.x = x
        this.y = y
        this.z = z
    }

    /**
     * Calculates the distance between this vector and another vector.
     * @param {Vec3} vec - The other vector.
     * @returns {number} - The distance between the vectors.
     */
    distanceTo( vec: Vec3 ): number {

        const dx = vec.x - this.x
        const dy = vec.y - this.y
        const dz = vec.z - this.z

        return Math.sqrt( dx * dx + dy * dy + dz * dz )
    }
}
