# VecJS
This library provides a powerful, lightweight utility for vector operations. Vector operations are chainable meaning increased readability and reduced code length. Furthermore, vectors are transferable (see [here](https://developers.google.com/web/updates/2011/12/Transferable-Objects-Lightning-Fast) for details) since the vectors utilize array buffers.

![VecJS Logo](/resources/l1.png)

## Creating Vectors
Vectors are easily created by calling the vector constructor with an initial value for x, y, and z. Invalid values default to 0.

```javascript
var vector1 = new Vec.V3(0,1,2); // (x: 0, y: 1, z: 2)
var vector2 = new Vec.V3(0,1); // (x: 0, y: 1, z: 0)
var vector3 = new Vec.V3(); // (x: 0, y: 0, z: 0)
var vector4 = new Vec.V3("this", "is", "invalid"); // (x: 0, y: 0, z: 0)
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

Operations will alter and return a reference to the vector being operated on. Consider this example:

```javascript
var vector1 = new Vec.V3(0,1,2);
var vector2 = vector1.mulY(2);
// vector1: (x: 0, y: 2, z: 2) ... vector2: (x: 0, y: 2, z: 2)
```

After running this code both vectors will now reference the same components meaning further alterations to one will result in both vectors being changed. However, prefacing operations with the word get will result in the operation altering and returning a reference to a new vector instead. Consider this example:

```javascript
var vector1 = new Vec.V3(0,1,2);
var vector2 = vector1.getMulY(2);
// vector1: (x: 0, y: 1, z: 2) ... vector2: (x: 0, y: 2, z: 2)
```

After running this code each vector has separate component references and vector1 remains unaltered. For documentation and examples, here is a list of all supported vector operations:

| Operation | Description |
| --- | :--- |
| [setX](#setting-components) | sets the x component of a vector |
| [setY](#setting-components) | sets the y component of a vector |
| [setZ](#setting-components) | sets the z component of a vector |
| [setXYZ](#setting-components) | sets the x, y, and z components of a vector |
| [copy](#copying-vectors) | copies the values of one vector into another |
| [clone](#copying-vectors) | creates a new vector with the same values as another |
| [addX](#vector-addition) | |

### Setting Components
```javascript
var vector = new Vec.V3(0,1,2);
vector.setX(1); // sets the x component value to 1
vector.setY(1); // sets the y component value to 1
vector.setZ(1); // sets the z component value to 1
vector.setXYZ(0,1,2); // sets the x, y, and z component values to 0, 1, and 2 respectfully
```

### Copying Vectors
The first type of copying is a direct value copy of each component of another vector.
```javascript
var vector1 = new Vec.V3(0,1,2);
var vector2 = new Vec.V3().copy(vector1);
// the component values of vector2 are now equal to the component values of vector1
```

The second type of copying creates an entirely new vector with a direct value copy of each component of a vector.
```javascript
var vector1 = new Vec.V3(0,1,2);
var vector2 = vector1.clone();
// the component values of vector2 are now equal to the component values of vector1
```

The difference between the copy and clone methods is that copying reuses an existing vector reference while cloning creates an entirely new vector. If possible, copying is preferred over cloning since it reduces memory usage and [garbage collection](https://javascript.info/garbage-collection) by reusing references.

### Vector Addition
```javascript
var vector1 = new Vec.V3(0,1,2);
var vector2 = new Vec.V3(0,1,2);
```
