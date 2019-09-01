if (window.Vec) { console.warn("Vec module already exists, overwriting..."); }

class V3 {
  constructor(x,y,z) { this.vec = new Float32Array([x,y,z]); }
  clone() { return new V3(this.vec[0], this.vec[1], this.vec[2]); }
  getX() { return this.vec[0]; }
  getY() { return this.vec[1]; }
  getZ() { return this.vec[2]; }
  setX(x) { this.vec[0] = x; return this; }
  setY(y) { this.vec[1] = y; return this; }
  setZ(z) { this.vec[2] = z; return this; }
  setXY(x,y) { return this.setX(x).setY(y); }
  setXZ(x,z) { return this.setX(x).setZ(z); }
  setYZ(y,z) { return this.setY(y).setZ(z); }
  setXYZ(x,y,z) { return this.setX(x).setY(y).setZ(z); }
}
