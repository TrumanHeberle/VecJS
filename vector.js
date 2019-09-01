if (window.Vec) { console.warn("Vec module already exists, overwriting..."); }

class V3 {
  constructor(x,y,z) { this.vec = new Float32Array([x,y,z]); }
  clone() { return new V3(this.vec[0], this.vec[1], this.vec[2]); }
  getX() { return this.vec[0]; }
  getY() { return this.vec[1]; }
  getZ() { return this.vec[2]; }
  setX(x) { this.vec[0] = Number(x) === x ? Number(x) : this.vec[0]; return this; }
  setY(y) { this.vec[1] = Number(y) === y ? Number(y) : this.vec[1]; return this; }
  setZ(z) { this.vec[2] = Number(z) === z ? Number(z) : this.vec[2]; return this; }
  setXYZ(x,y,z) { return this.setX(x).setY(y).setZ(z); }
  set(vec) { return this.setXYZ(vec.getX(), vec.getY(), vec.getZ()); }
  addX(x) { return this.setX(this.getX() + x); }
  addY(y) { return this.setY(this.getY() + y); }
  addZ(z) { return this.setZ(this.getZ() + z); }
  addXYZ(x,y,z) { return this.addX(x).addY(y).addZ(z); }
  add(vec) { return this.addXYZ(vec.getX(), vec.getY(), vec.getZ()); }
  subX(x) { return this.addX(-x); }
  subY(y) { return this.addY(-y); }
  subZ(z) { return this.addZ(-z); }
  subXYZ(x,y,z) { return this.subX(x).subY(y).subZ(z); }
  sub(vec) { return this.subXYZ(vec.getX(), vec.getY(), vec.getZ()); }
  mulX(x) { return this.setX(this.getX() * x); }
  mulZ(y) { return this.setX(this.getY() * y); }
  mulY(z) { return this.setX(this.getZ() * z); }
  mulXYZ(x,y,z) { return this.mulX(x).mulY(y).mulZ(z); }
  mul(vec) { return this.mulXYZ(vec.getX(), vec.getY(), vec.getZ()); }
  divX(x) { return this.mulX(1/x); }
  divY(y) { return this.mulY(1/y); }
  divZ(z) { return this.mulZ(1/z); }
  divXYZ(x,y,z) { return this.divX(x).divY(y).divZ(z); }
  div(vec) { return this.divXYZ(vec.getX(), vec.getY(), vec.getZ()); }
  scale(c) { return this.mulXYZ(c,c,c); }
}

window.Vec = { V3: V3 }
