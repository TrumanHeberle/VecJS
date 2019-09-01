This library provides a powerful, lightweight utility for vector operations.
Furthermore, vectors are transferable (see [here](https://developers.google.com/web/updates/2011/12/Transferable-Objects-Lightning-Fast) for details) since the vectors utilize array buffers.

## Creating Vectors
Vectors are easily created by calling the vector constructor with an initial value for x, y, and z. Invalid values default to 0.

```javascript
var vector1 = new Vec.V3(0,1,2); // (x: 0, y: 1, z: 2)
var vector2 = new Vec.V3(0,1); // (x: 0, y: 1, z: 0)
var vector3 = new Vec.V3(); // (x: 0, y: 0, z: 0)
```

## Getters/Setters
### Getting Components
```javascript
var vector = new Vec.V3(0,1,2); // (x: 0, y: 1, z: 2)
console.log(vector.getX(), vector.getY(), vector.getZ()); // logs: "0 1 2"
```

## Supported Operations
###
