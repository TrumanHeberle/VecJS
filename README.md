<p align="center"><img width="500" src="/resources/l1.png"></p>

This library provides a powerful, lightweight utility for vector operations. Vector operations are chainable meaning increased readability and reduced code length. Furthermore, vectors are transferable (see [here](https://developers.google.com/web/updates/2011/12/Transferable-Objects-Lightning-Fast) for details) since the vectors utilize array buffers.

## Creating Vectors
Vectors are easily created by calling the vector constructor with an initial value for x, y, and z. Invalid values default to 0.

```javascript
var vector1 = new Vec.V3(0,1,2); // (x: 0, y: 1, z: 2)
var vector2 = new Vec.V3(0,1); // (x: 0, y: 1, z: 0)
var vector3 = new Vec.V3(); // (x: 0, y: 0, z: 0)
var vector4 = new Vec.V3("this", "is", "invalid"); // (x: 0, y: 0, z: 0)
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
| [X](#getting-components) | gets the x component of a vector |
| [Y](#getting-components) | gets the y component of a vector |
| [Z](#getting-components) | gets the z component of a vector |
| [setX](#setting-components) | sets the x component of a vector |
| [setY](#setting-components) | sets the y component of a vector |
| [setZ](#setting-components) | sets the z component of a vector |
| [setXYZ](#setting-components) | sets the x, y, and z components of a vector |
| [copy](#copying-vectors) | copies the values of one vector into another |
| [clone](#copying-vectors) | creates a new vector with the same values as another |
| [addX](#vector-addition) | adds a constant to the x component of a vector |
| [addY](#vector-addition) | adds a constant to the y component of a vector |
| [addZ](#vector-addition) | adds a constant to the z component of a vector |
| [addXYZ](#vector-addition) | adds a constant to the x, y, and z components of a vector |
| [add](#vector-addition) | adds the components of one vector to the components of another |
| [subX](#vector-subtraction) | subtracts a constant from the x component of a vector |
| [subY](#vector-subtraction) | subtracts a constant from the y component of a vector |
| [subZ](#vector-subtraction) | subtracts a constant from the z component of a vector |
| [subXYZ](#vector-subtraction) | subtracts a constant from the x, y, and z components of a vector |
| [sub](#vector-subtraction) | subtracts the components of one vector from the components of another |
| [mulX](#vector-multiplication) | multiplies the x component of a vector by a constant |
| [mulY](#vector-multiplication) | multiplies the y component of a vector by a constant |
| [mulZ](#vector-multiplication) | multiplies the z component of a vector by a constant |
| [mulXYZ](#vector-multiplication) | multiplies the x, y, and z components of a vector by a constant |
| [mul](#vector-multiplication) | multiplies the components of one vector by the respective components of another |
| [scale](#vector-multiplication) | multiplies the x, y, and z components of a vector by the same constant |
| [scaleTo](#vector-multiplication) | scales a vector such that the magnitude is equal to a constant |
| [divX](#vector-division) | divides the x component of a vector by a constant |
| [divY](#vector-division) | divides the y component of a vector by a constant |
| [divZ](#vector-division) | divides the z component of a vector by a constant |
| [divXYZ](#vector-division) | divides the x, y, and z components of a vector by a constant |
| [div](#vector-division) | divides the components of one vector by the respective components of another |
| [normalize](#vector-normalization) | normalizes a vector |
| [unitX](#vector-normalization) | gets the normalized x component of a vector |
| [unitY](#vector-normalization) | gets the normalized y component of a vector |
| [unitZ](#vector-normalization) | gets the normalized z component of a vector |
| [dot](#vector-products) | gets the dot product of two vectors |
| [cross](#vector-products) | performs the cross product on a vector on another vector |
| [magnitude](#vector-magnitude) | gets the magnitude of a vector |
| [distanceTo](#vector-magnitude) | gets the magnitude of the distance between two vectors |

### Getting Components
```javascript
var vector = new Vec.V3(0,1,2);
console.log(vector.X(), vector.Y(), vector.Z()); // logs: "0 1 2"
```

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
vector1.addX(1); // adds 1 to the x component
vector1.addY(1); // adds 1 to the y component
vector1.addZ(1); // adds 1 to the z component
vector1.addXYZ(1,2,3); // adds 1, 2, and 3 to the x, y, and z components respectfully
vector1.add(vector2); // adds the components of vector2 to vector1
var vector3 = vector1.getAddX(1); // creates a new vector with 1 added to the x component
var vector4 = vector1.getAddY(1); // creates a new vector with 1 added to the x component
var vector5 = vector1.getAddZ(1); // creates a new vector with 1 added to the x component
var vector6 = vector1.getAddXYZ(1,2,3); // creates a new vector with 1, 2, and 3 added to the x, y, and z components respectfully
var vector7 = vector1.getAdd(vector2); // creates a new vector with the components of vector2 added to vector1
```

### Vector Subtraction
```javascript
var vector1 = new Vec.V3(0,1,2);
var vector2 = new Vec.V3(0,1,2);
vector1.subX(1); // subtracts 1 from the x component
vector1.subY(1); // subtracts 1 from the y component
vector1.subZ(1); // subtracts 1 from the z component
vector1.subXYZ(1,2,3); // subtracts 1, 2, and 3 from the x, y, and z components respectfully
vector1.sub(vector2); // subtracts the components of vector2 from vector1
var vector3 = vector1.getSubX(1); // creates a new vector with 1 subtracted from the x component
var vector4 = vector1.getSubY(1); // creates a new vector with 1 subtracted from the x component
var vector5 = vector1.getSubZ(1); // creates a new vector with 1 subtracted from the x component
var vector6 = vector1.getSubXYZ(1,2,3); // creates a new vector with 1, 2, and 3 subtracted from the x, y, and z components respectfully
var vector7 = vector1.getSub(vector2); // creates a new vector with the components of vector2 subtracted from vector1
```

### Vector Multiplication
```javascript
var vector1 = new Vec.V3(0,1,2);
var vector2 = new Vec.V3(0,1,2);
vector1.mulX(2); // multiplies the x component by 2
vector1.mulY(2); // multiplies the y component by 2
vector1.mulZ(2); // multiplies the z component by 2
vector1.mulXYZ(2,3,4); // multiplies the x, y, and z components by 2, 3, and 4 respectfully
vector1.mul(vector2); // multiplies the components of vector1 by the components of vector2 respectfully
vector1.scale(2); // multiplies each component by 2
vector1.scaleTo(2); // multiplies each component such that the magnitude is 2
var vector3 = vector1.getMulX(2); // creates a new vector with the x component multiplied by 2
var vector4 = vector1.getMulY(2); // creates a new vector with the y component multiplied by 2
var vector5 = vector1.getMulZ(2); // creates a new vector with the z component multiplied by 2
var vector6 = vector1.getMulXYZ(2,3,4); // creates a new vector with the x, y, and z components multiplied by 2, 3, and 4 respectfully
var vector7 = vector1.getMul(vector2); // creates a new vector with the components of vector1 multiplied by the components of vector1 respectfully
var vector8 = vector1.getScale(2); // creates a new vector with each component multiplied by 2
var vector9 = vector1.getScaleTo(2); // creates a new vector with each component multiplied such that the magnitude is 2
```

### Vector Division
```javascript
var vector1 = new Vec.V3(0,1,2);
var vector2 = new Vec.V3(0,1,2);
vector1.divX(2); // divides the x component by 2
vector1.divY(2); // divides the y component by 2
vector1.divZ(2); // divides the z component by 2
vector1.divXYZ(2,3,4); // divides the x, y, and z components by 2, 3, and 4 respectfully
vector1.div(vector2); // divides the components of vector1 by the components of vector2 respectfully
var vector3 = vector1.getDivX(2); // creates a new vector with the x component divided by 2
var vector4 = vector1.getDivY(2); // creates a new vector with the y component divided by 2
var vector5 = vector1.getDivZ(2); // creates a new vector with the z component divided by 2
var vector6 = vector1.getDivXYZ(2,3,4); // creates a new vector with the x, y, and z components divided by 2, 3, and 4 respectfully
var vector7 = vector1.getDiv(vector2); // creates a new vector with the components of vector1 divided by the components of vector1 respectfully
```

### Vector Normalization
```javascript
var vector1 = new Vec.V3(0,1,1);
vector1.normalize(); // normalizes the vector
var vector2 = vector1.getNormalize(); // creates a new vector that is equivalent to vector1 normalized
```

If computing each normalized component is not necessary, a single normalized component can be calculated independently instead.

```javascript
var vector3 = new Vec.V3(0,5,5);
console.log(vector.unitX(), vector.unitY(), vector.unitZ()); // logs "0 1.414 1.414"
// vector3 remains unchanged by these operations
```

### Vector Products
```javascript
var vector1 = new Vec.V3(0,1,2);
var vector2 = new Vec.V3(3,5,7);
console.log(vector1.dot(vector2), vector2.dot(vector1));
// logs "19 19"
```

The dot product is commutative so order does not matter.

```javascript
var vector1 = new Vec.V3(0,1,2);
var vector2 = new Vec.V3(3,5,7);
console.log(vector1.getCross(vector2).toString(), vector2.getCross(vector1).toString());
// logs "(x: -3, y: 6, z: -3) (x: 3, y: -6, z: 3)"

vector1.cross(vector2); // sets vector1 to the result of the cross product of vector1 on vector2
```

The cross product is not commutative so order does matter.

### Vector Magnitude
```javascript
var vector1 = new Vec.V3(0,1,3);
console.log(vector1.magnitude()); // logs "2"

var vector2 = new Vec.V3(0,-1,-3);
console.log(vector1.distanceTo(vector2)); // logs "4"
```
