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
  setXY(x,y) { return this.setX(x).setY(y); }
  setXZ(x,z) { return this.setX(x).setZ(z); }
  setYZ(y,z) { return this.setY(y).setZ(z); }
  setXYZ(x,y,z) { return this.setX(x).setY(y).setZ(z); }
  addX(x) { return this.setX(this.getX() + x); }
  addY(y) { return this.setY(this.getY() + y); }
  addZ(z) { return this.setZ(this.getZ() + z); }
  addXY(x,y) { return this.addX(x).addY(y); }
  addXZ(x,z) { return this.addX(x).addZ(z); }
  addYZ(y,z) { return this.addY(y).addZ(z); }
  addXYZ(x,y,z) { return this.addX(x).addY(y).addZ(z); }
  subX(x) { return this.addX(-x); }
  subY(y) { return this.addY(-y); }
  subZ(z) { return this.addZ(-z); }
  subXY(x,y) { return this.subX(x).subY(y); }
  subXZ(x,z) { return this.subX(x).subZ(z); }
  subYZ(y,z) { return this.subY(y).subZ(z); }
  subXYZ(x,y,z) { return this.subX(x).subY(y).subZ(z); }
}

window.Vec = {
  V3: V3
}
