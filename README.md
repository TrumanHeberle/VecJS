This library provides a powerful, lightweight utility for vector operations. Vector operations are chainable meaning increased readability and reduced code length. Furthermore, vectors are transferable (see [here](https://developers.google.com/web/updates/2011/12/Transferable-Objects-Lightning-Fast) for details) since the vectors utilize array buffers.

## Creating Vectors
Vectors are easily created by calling the vector constructor with an initial value for x, y, and z. Invalid values default to 0.

```javascript
var vector1 = new Vec.V3(0,1,2); // (x: 0, y: 1, z: 2)
var vector2 = new Vec.V3(0,1); // (x: 0, y: 1, z: 0)
var vector3 = new Vec.V3(); // (x: 0, y: 0, z: 0)
```

## Getters
There is a set of functions built in to easily retrieve common information about a vector.

### Getting Components
```javascript
var vector = new Vec.V3(0,1,2);
console.log(vector.getX(), vector.getY(), vector.getZ()); // logs: "0 1 2"
```

## Supported Operations
There is also a set of functions built in to easily execute common vector operations. All vector operations are chainable, hence

```javascript
var vector = (new Vec.V3(0,1,2)).addX(1).mulY(2);
```

is equivalent to

```javascript
var vector = new Vec.V3(0,1,2);
vector.addX(1);
vector.mulY(2);
```

### Setting Components
```javascript
var vector = new Vec.V3(0,1,2);
vector.setX(1); // sets the x component value to 1
vector.setY(1); // sets the y component value to 1
vector.setZ(1); // sets the z component value to 1
vector.setXYZ(0,1,2); // sets the x, y, and z component values to 0, 1, and 2 respectfully
```

## Copying Vectors
```javascript
var vector1 = new 
```
