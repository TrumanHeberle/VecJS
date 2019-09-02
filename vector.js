if (window.Vec) { console.warn("Vec module already exists, overwriting..."); }

/*class V3Array {
  constructor(a) {
    if ()
  }
}*/

class V3 {
  constructor(x,y,z) { this.vec = new Float32Array([x,y,z]); }
  // core - access properties directly
  getX() { return this.vec[0]; }
  getY() { return this.vec[1]; }
  getZ() { return this.vec[2]; }
  getBuffer() { return this.vec.buffer; }
  setX(x) { this.vec[0] = Number(x) === x ? Number(x) : this.vec[0]; return this; }
  setY(y) { this.vec[1] = Number(y) === y ? Number(y) : this.vec[1]; return this; }
  setZ(z) { this.vec[2] = Number(z) === z ? Number(z) : this.vec[2]; return this; }
  // derived - access properties indirectly
  toString() { return "(x: " + this.getZ() + ", y: " + this.getY() + ", z: " + this.getZ() + ")"; }
  setXYZ(x,y,z) { return this.setX(x).setY(y).setZ(z); }
  copy(vec) { return this.setXYZ(vec.getX(), vec.getY(), vec.getZ()); }
  clone() { return new V3(this.getX(), this.getY(), this.getZ()); }
  addX(x) { return this.setX(this.getX() + x); }
  getAddX(x) { return this.clone().addX(x); }
  addY(y) { return this.setY(this.getY() + y); }
  getAddY(y) { return this.clone().addY(y); }
  addZ(z) { return this.setZ(this.getZ() + z); }
  getAddZ(z) { return this.clone().addZ(z); }
  addXYZ(x,y,z) { return this.addX(x).addY(y).addZ(z); }
  getAddXYZ(x,y,z) { return this.clone().addXYZ(x,y,z); }
  add(vec) { return this.addXYZ(vec.getX(), vec.getY(), vec.getZ()); }
  getAdd(vec) { return this.clone().add(vec); }
  subX(x) { return this.addX(-x); }
  getSubX(x) { return this.clone().subX(x); }
  subY(y) { return this.addY(-y); }
  getSubY(y) { return this.clone().subY(y); }
  subZ(z) { return this.addZ(-z); }
  getSubZ(z) { return this.clone().subZ(z); }
  subXYZ(x,y,z) { return this.subX(x).subY(y).subZ(z); }
  getSubXYZ(x,y,z) { return this.clone().subXYZ(x,y,z); }
  sub(vec) { return this.subXYZ(vec.getX(), vec.getY(), vec.getZ()); }
  getSub(vec) { return this.clone().sub(vec); }
  mulX(x) { return this.setX(this.getX() * x); }
  getMulX(x) { return this.clone().mulX(x); }
  mulY(y) { return this.setY(this.getY() * y); }
  getMulY(y) { return this.clone().mulY(y); }
  mulZ(z) { return this.setZ(this.getZ() * z); }
  getMulZ(z) { return this.clone().mulZ(z); }
  mulXYZ(x,y,z) { return this.mulX(x).mulY(y).mulZ(z); }
  getMulXYZ(x,y,z) { return this.clone().mulXYZ(x,y,z); }
  mul(vec) { return this.mulXYZ(vec.getX(), vec.getY(), vec.getZ()); }
  getMul(vec) { return this.clone().mul(vec); }
  scale(c) { return this.mulXYZ(c,c,c); }
  getScale(c) { return this.clone().scale(c); }
  divX(x) { return this.mulX(1/x); }
  getDivX(x) { return this.clone().divX(x); }
  divY(y) { return this.mulY(1/y); }
  getDivY(y) { return this.clone().divY(y); }
  divZ(z) { return this.mulZ(1/z); }
  getDivZ(z) { return this.clone().divZ(z); }
  divXYZ(x,y,z) { return this.divX(x).divY(y).divZ(z); }
  getDivXYZ(x,y,z) { return this.clone().divXYZ(x,y,z); }
  div(vec) { return this.divXYZ(vec.getX(), vec.getY(), vec.getZ()); }
  getDiv(vec) { return this.clone().div(vec); }
}

window.Vec = { V3: V3 }
