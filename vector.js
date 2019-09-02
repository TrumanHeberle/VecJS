if (window.Vec) { console.warn("Vec module already exists, overwriting..."); }

class V3 {
  constructor(x,y,z) { this.vec = new Float32Array([x,y,z]); }
  X() { return this.vec[0]; }
  Y() { return this.vec[1]; }
  Z() { return this.vec[2]; }
  getBuffer() { return this.vec.buffer; }
  setX(x) { this.vec[0]=x; return this; }
  setY(y) { this.vec[1]=y; return this; }
  setZ(z) { this.vec[2]=z; return this; }
  toString() { return "(x: "+this.vec[0]+", y: "+this.vec[1]+", z: "+this.vec[2] + ")"; }
  setXYZ(x,y,z) { this.vec[0]=x; this.vec[1]=y; this.vec[2]=z; return this; }
  copy(vec) { this.vec[0]=vec.vec[0]; this.vec[1]=vec.vec[1]; this.vec[2]=vec.vec[2]; return this; }
  clone() { return new V3(this.vec[0], this.vec[1], this.vec[2]); }
  addX(x) { this.vec[0]+=x; return this; }
  getAddX(x) { return new V3(this.vec[0]+x, this.vec[1], this.vec[2]); }
  addY(y) { this.vec[1]+=y; return this; }
  getAddY(y) { return new V3(this.vec[0], this.vec[1]+y, this.vec[2]); }
  addZ(z) { this.vec[2]+=z; return this; }
  getAddZ(z) { return new V3(this.vec[0], this.vec[1], this.vec[2]+z); }
  addXYZ(x,y,z) { this.vec[0]+=x; this.vec[1]+=y; this.vec[2]+=z; return this; }
  getAddXYZ(x,y,z) { return new V3(this.vec[0]+x, this.vec[1]+y, this.vec[2]+z); }
  add(vec) { this.vec[0]+=vec.vec[0]; this.vec[1]+=vec.vec[1]; this.vec[2]+=vec.vec[2]; return this; }
  getAdd(vec) { return new V3(this.vec[0]+vec.vec[0], this.vec[1]+vec.vec[1], this.vec[2]+vec.vec[2]); }
  subX(x) { this.vec[0]-=x; return this; }
  getSubX(x) { return new V3(this.vec[0]-x, this.vec[1], this.vec[2]); }
  subY(y) { this.vec[1]-=y; return this; }
  getSubY(y) { return new V3(this.vec[0], this.vec[1]-y, this.vec[2]); }
  subZ(z) { this.vec[2]-=z; return this; }
  getSubZ(z) { return new V3(this.vec[0], this.vec[1], this.vec[2]-z); }
  subXYZ(x,y,z) { this.vec[0]-=x; this.vec[1]-=y; this.vec[2]-=z; return this; }
  getSubXYZ(x,y,z) { return new V3(this.vec[0]-x, this.vec[1]-y, this.vec[2]-z); }
  sub(vec) { this.vec[0]-=vec.vec[0]; this.vec[1]-=vec.vec[1]; this.vec[2]-=vec.vec[2]; return this; }
  getSub(vec) { return new V3(this.vec[0]-vec.vec[0], this.vec[1]-vec.vec[1], this.vec[2]-vec.vec[2]); }
  mulX(x) { this.vec[0]*=x; return this; }
  getMulX(x) { return new V3(this.vec[0]*=x, this.vec[1], this.vec[2]); }
  mulY(y) { this.vec[1]*=y; return this; }
  getMulY(y) { return new V3(this.vec[0], this.vec[1]*y, this.vec[2]); }
  mulZ(z) { this.vec[2]*=z; return this; }
  getMulZ(z) { return new V3(this.vec[0], this.vec[1], this.vec[2]*z); }
  mulXYZ(x,y,z) { this.vec[0]*=x; this.vec[1]*=y; this.vec[2]*=z; return this; }
  getMulXYZ(x,y,z) { return new V3(this.vec[0]*x, this.vec[1]*y, this.vec[2]*z); }
  mul(vec) { this.vec[0]*=vec.vec[0]; this.vec[1]*=vec.vec[1]; this.vec[2]*=vec.vec[2]; return this; }
  getMul(vec) { return new V3(this.vec[0]*vec.vec[0], this.vec[1]*vec.vec[1], this.vec[2]*vec.vec[2]); }
  scale(c) { this.vec[0]*=c; this.vec[1]*=c; this.vec[2]*=c; return this; }
  getScale(c) { return new V3(this.vec[0]*c, this.vec[1]*c, this.vec[2]*c); }
  divX(x) { this.vec[0]/=x; return this; }
  getDivX(x) { return new V3(this.vec[0]/x, this.vec[1], this.vec[2]); }
  divY(y) { this.vec[1]/=y; return this; }
  getDivY(y) { return new V3(this.vec[0], this.vec[1]/y, this.vec[2]); }
  divZ(z) { this.vec[2]/=z; return this; }
  getDivZ(z) { return new V3(this.vec[0], this.vec[1], this.vec[2]/z); }
  divXYZ(x,y,z) { this.vec[0]/=x; this.vec[1]/=y; this.vec[2]/=z; return this; }
  getDivXYZ(x,y,z) { return new V3(this.vec[0]/x, this.vec[1]/y, this.vec[2]/z); }
  div(vec) { this.vec[0]/=vec.vec[0]; this.vec[1]/=vec.vec[1]; this.vec[2]/=vec.vec[2]; return this; }
  getDiv(vec) { return new V3(this.vec[0]/vec.vec[0], this.vec[1]/vec.vec[1], this.vec[2]/vec.vec[2]); }
  magnitude() { return Math.sqrt(this.vec[0]**2 + this.vec[1]**2 + this.vec[2]**2); }
  unitX() { return vec[0] === 0 ? 0 : vec[0]/Math.sqrt(this.vec[0]**2 + this.vec[1]**2 + this.vec[2]**2); }
  unitY() { return vec[1] === 0 ? 0 : vec[1]/Math.sqrt(this.vec[0]**2 + this.vec[1]**2 + this.vec[2]**2); }
  unitZ() { return vec[2] === 0 ? 0 : vec[2]/Math.sqrt(this.vec[0]**2 + this.vec[1]**2 + this.vec[2]**2); }
}

window.Vec = { V3: V3 }
