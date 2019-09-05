if (window.Vec) { console.warn("Vec module already exists, overwriting..."); }

class V3 {
  constructor(x,y,z) { this.vec = new Float32Array([x,y,z]); }
  X() { return this.vec[0]; }
  Y() { return this.vec[1]; }
  Z() { return this.vec[2]; }
  getBuffer() { return this.vec.buffer; }
  toString() { return "(x: "+this.vec[0]+", y: "+this.vec[1]+", z: "+this.vec[2] + ")"; }
  setX(x) { this.vec[0]=x; return this; }
  setY(y) { this.vec[1]=y; return this; }
  setZ(z) { this.vec[2]=z; return this; }
  setXYZ(x,y,z) { this.vec[0]=x; this.vec[1]=y; this.vec[2]=z; return this; }
  copy(vec) { this.vec[0]=vec.vec[0]; this.vec[1]=vec.vec[1]; this.vec[2]=vec.vec[2]; return this; }
  clone() { return new V3(this.vec[0], this.vec[1], this.vec[2]); }
  addX(x) { this.vec[0]+=x; return this; }
  addY(y) { this.vec[1]+=y; return this; }
  addZ(z) { this.vec[2]+=z; return this; }
  addXYZ(x,y,z) { this.vec[0]+=x; this.vec[1]+=y; this.vec[2]+=z; return this; }
  add(vec) { this.vec[0]+=vec.vec[0]; this.vec[1]+=vec.vec[1]; this.vec[2]+=vec.vec[2]; return this; }
  getAddX(x) { return new V3(this.vec[0]+x, this.vec[1], this.vec[2]); }
  getAddY(y) { return new V3(this.vec[0], this.vec[1]+y, this.vec[2]); }
  getAddZ(z) { return new V3(this.vec[0], this.vec[1], this.vec[2]+z); }
  getAddXYZ(x,y,z) { return new V3(this.vec[0]+x, this.vec[1]+y, this.vec[2]+z); }
  getAdd(vec) { return new V3(this.vec[0]+vec.vec[0], this.vec[1]+vec.vec[1], this.vec[2]+vec.vec[2]); }
  subX(x) { this.vec[0]-=x; return this; }
  subY(y) { this.vec[1]-=y; return this; }
  subZ(z) { this.vec[2]-=z; return this; }
  subXYZ(x,y,z) { this.vec[0]-=x; this.vec[1]-=y; this.vec[2]-=z; return this; }
  sub(vec) { this.vec[0]-=vec.vec[0]; this.vec[1]-=vec.vec[1]; this.vec[2]-=vec.vec[2]; return this; }
  getSubX(x) { return new V3(this.vec[0]-x, this.vec[1], this.vec[2]); }
  getSubY(y) { return new V3(this.vec[0], this.vec[1]-y, this.vec[2]); }
  getSubZ(z) { return new V3(this.vec[0], this.vec[1], this.vec[2]-z); }
  getSubXYZ(x,y,z) { return new V3(this.vec[0]-x, this.vec[1]-y, this.vec[2]-z); }
  getSub(vec) { return new V3(this.vec[0]-vec.vec[0], this.vec[1]-vec.vec[1], this.vec[2]-vec.vec[2]); }
  mulX(x) { this.vec[0]*=x; return this; }
  mulY(y) { this.vec[1]*=y; return this; }
  mulZ(z) { this.vec[2]*=z; return this; }
  mulXYZ(x,y,z) { this.vec[0]*=x; this.vec[1]*=y; this.vec[2]*=z; return this; }
  mul(vec) { this.vec[0]*=vec.vec[0]; this.vec[1]*=vec.vec[1]; this.vec[2]*=vec.vec[2]; return this; }
  getMulX(x) { return new V3(this.vec[0]*=x, this.vec[1], this.vec[2]); }
  getMulY(y) { return new V3(this.vec[0], this.vec[1]*y, this.vec[2]); }
  getMulZ(z) { return new V3(this.vec[0], this.vec[1], this.vec[2]*z); }
  getMulXYZ(x,y,z) { return new V3(this.vec[0]*x, this.vec[1]*y, this.vec[2]*z); }
  getMul(vec) { return new V3(this.vec[0]*vec.vec[0], this.vec[1]*vec.vec[1], this.vec[2]*vec.vec[2]); }
  scale(c) { this.vec[0]*=c; this.vec[1]*=c; this.vec[2]*=c; return this; }
  scaleTo(c) { const m=this.vec[0]**2 + this.vec[1]**2 + this.vec[2]**2; if (m > 0) { c/=Math.sqrt(m); this.vec[0]*=c; this.vec[1]*=c; this.vec[2]*=c; } return this; }
  getScale(c) { return new V3(this.vec[0]*c, this.vec[1]*c, this.vec[2]*c); }
  getScaleTo(c) { const m=this.vec[0]**2 + this.vec[1]**2 + this.vec[2]**2; if (m > 0) { c/=Math.sqrt(m); return new V3(this.vec[0]*c, this.vec[1]*c, this.vec[2]*c); } return new V3(0,0,0); }
  invertX() { this.vec[0]*=-1; return this; }
  invertY() { this.vec[1]*=-1; return this; }
  invertZ() { this.vec[2]*=-1; return this; }
  invertXYZ() { this.vec[0]*=-1; this.vec[1]*=-1; this.vec[2]*=-1; return this; }
  getInvertX() { return new V3(-this.vec[0], this.vec[1], this.vec[2]); }
  getInvertY() { return new V3(this.vec[0], -this.vec[1], this.vec[2]); }
  getInvertZ() { return new V3(this.vec[0], this.vec[1], -this.vec[2]); }
  getInvertXYZ() { return new V3(-this.vec[0], -this.vec[1], -this.vec[2]); }
  divX(x) { this.vec[0]/=x; return this; }
  divY(y) { this.vec[1]/=y; return this; }
  divZ(z) { this.vec[2]/=z; return this; }
  divXYZ(x,y,z) { this.vec[0]/=x; this.vec[1]/=y; this.vec[2]/=z; return this; }
  div(vec) { this.vec[0]/=vec.vec[0]; this.vec[1]/=vec.vec[1]; this.vec[2]/=vec.vec[2]; return this; }
  getDivX(x) { return new V3(this.vec[0]/x, this.vec[1], this.vec[2]); }
  getDivY(y) { return new V3(this.vec[0], this.vec[1]/y, this.vec[2]); }
  getDivZ(z) { return new V3(this.vec[0], this.vec[1], this.vec[2]/z); }
  getDivXYZ(x,y,z) { return new V3(this.vec[0]/x, this.vec[1]/y, this.vec[2]/z); }
  getDiv(vec) { return new V3(this.vec[0]/vec.vec[0], this.vec[1]/vec.vec[1], this.vec[2]/vec.vec[2]); }
  magnitude() { return Math.sqrt(this.vec[0]**2 + this.vec[1]**2 + this.vec[2]**2); }
  normalize() { const m=this.vec[0]**2 + this.vec[1]**2 + this.vec[2]**2; if (m > 0) { m=Math.sqrt(m); this.vec[0]/=m; this.vec[1]/=m; this.vec[2]/=m; } return this; }
  getNormalize() { const m=this.vec[0]**2 + this.vec[1]**2 + this.vec[2]**2; if (m > 0) { m=Math.sqrt(m); return new V3(this.vec[0]/m, this.vec[1]/m, this.vec[2]/m); } else { return new V3(0,0,0); } }
  unitX() { return this.vec[0] === 0 ? 0 : this.vec[0]/Math.sqrt(this.vec[0]**2 + this.vec[1]**2 + this.vec[2]**2); }
  unitY() { return this.vec[1] === 0 ? 0 : this.vec[1]/Math.sqrt(this.vec[0]**2 + this.vec[1]**2 + this.vec[2]**2); }
  unitZ() { return this.vec[2] === 0 ? 0 : this.vec[2]/Math.sqrt(this.vec[0]**2 + this.vec[1]**2 + this.vec[2]**2); }
  dot(vec) { return this.vec[0]*vec.vec[0] + this.vec[1]*vec.vec[1] + this.vec[2]*vec.vec[2]; }
  cross(vec) { const x=this.vec[1]*vec.vec[2] - this.vec[2]*vec.vec[1]; const y=this.vec[2]*vec.vec[0] - this.vec[0]*vec.vec[2]; this.vec[2] = this.vec[0]*vec.vec[1] - this.vec[1]*vec.vec[0]; this.vec[0] = x; this.vec[1] = y; return this; }
  getCross(vec) { return new V3(this.vec[1]*vec.vec[2] - this.vec[2]*vec.vec[1], this.vec[2]*vec.vec[0] - this.vec[0]*vec.vec[2], this.vec[0]*vec.vec[1] - this.vec[1]*vec.vec[0]); }
  angleBetween(vec) { const tm=this.vec[0]**2 + this.vec[1]**2 + this.vec[2]**2; if (tm == 0) { return null; } const vm=vec.vec[0]**2 + vec.vec[1]**2 + vec.vec[2]**2; if (vm == 0) { return null; } return Math.acos((this.vec[0]*vec.vec[0] + this.vec[1]*vec.vec[1] + this.vec[2]*vec.vec[2])/(Math.sqrt(tm)*Math.sqrt(vm))); }
  distanceTo(vec) { return Math.sqrt((this.vec[0]-other.vec[0])**2 + (this.vec[1]-other.vec[1])**2 + (this.vec[2]-other.vec[2])**2); }

  maxX(c) { this.vec[0]=Math.max(this.vec[0], c); return this; }
  maxY(c) { this.vec[0]=Math.max(this.vec[0], c); return this; }
  maxZ(c) { this.vec[0]=Math.max(this.vec[0], c); return this; }
  maxXYZ(a,b,c) { this.vec[0]=Math.max(this.vec[0], a); this.vec[1]=Math.max(this.vec[1], b); this.vec[2]=Math.max(this.vec[2], b); return this; }
  max(vec) { this.vec[0]=Math.max(this.vec[0], vec.vec[0]); this.vec[1]=Math.max(this.vec[1], vec.vec[1]); this.vec[2]=Math.max(this.vec[2], vec.vec[2]); return this; }
  getMaxX(c) { return new V3(Math.max(this.vec[0], c), this.vec[1], this.vec[2]); }
  getMaxY(c) { return new V3(this.vec[0], Math.max(this.vec[1], c), this.vec[2]); }
  getMaxZ(c) { return new V3(this.vec[0], this.vec[1], Math.max(this.vec[2], c)); }
  getMaxXYZ(a,b,c) { return new V3(Math.max(this.vec[0], a), Math.max(this.vec[1], b), Math.max(this.vec[2], c)); }
  getMax(vec) { return new V3(Math.max(this.vec[0], vec.vec[0]), Math.max(this.vec[1], vec.vec[1]), Math.max(this.vec[2], vec.vec[2])); }
  minX(c) { this.vec[0]=Math.min(this.vec[0], c); return this; }
  minY(c) { this.vec[0]=Math.min(this.vec[0], c); return this; }
  minZ(c) { this.vec[0]=Math.min(this.vec[0], c); return this; }
  minXYZ(a,b,c) { this.vec[0]=Math.min(this.vec[0], a); this.vec[1]=Math.min(this.vec[1], b); this.vec[2]=Math.min(this.vec[2], b); return this; }
  min(vec) { this.vec[0]=Math.min(this.vec[0], vec.vec[0]); this.vec[1]=Math.min(this.vec[1], vec.vec[1]); this.vec[2]=Math.min(this.vec[2], vec.vec[2]); return this; }
  getMinX(c) { return new V3(Math.min(this.vec[0], c), this.vec[1], this.vec[2]); }
  getMinY(c) { return new V3(this.vec[0], Math.min(this.vec[1], c), this.vec[2]); }
  getMinZ(c) { return new V3(this.vec[0], this.vec[1], Math.min(this.vec[2], c)); }
  getMinXYZ(a,b,c) { return new V3(Math.min(this.vec[0], a), Math.min(this.vec[1], b), Math.min(this.vec[2], c)); }
  getMin(vec) { return new V3(Math.min(this.vec[0], vec.vec[0]), Math.min(this.vec[1], vec.vec[1]), Math.min(this.vec[2], vec.vec[2])); }
  clampX(low,high) { this.vec[0]=Math.max(low,Math.min(high,this.vec[0])); return this; }
  clampY(low,high) { this.vec[1]=Math.max(low,Math.min(high,this.vec[1])); return this; }
  clampZ(low,high) { this.vec[2]=Math.max(low,Math.min(high,this.vec[2])); return this; }
  clampXYZ(lowX,lowY,lowZ,highX,highY,highZ) { this.vec[0]=Math.max(lowX,Math.min(highX,this.vec[0])); this.vec[1]=Math.max(lowY,Math.min(highY,this.vec[1])); this.vec[2]=Math.max(lowZ,Math.min(highZ,this.vec[2])); return this; }
  clamp(lowV,highV) { this.vec[0]=Math.max(lowV.vec[0],Math.min(highV.vec[0],this.vec[0])); this.vec[1]=Math.max(lowV.vec[1],Math.min(highV.vec[1],this.vec[1])); this.vec[2]=Math.max(lowV.vec[2],Math.min(highV.vec[2],this.vec[2])); return this; }
  getClampX(low,high) { return new V3(Math.max(low,Math.min(high,this.vec[0])), this.vec[1], this.vec[2]); }
  getClampY(low,high) { return new V3(this.vec[0], Math.max(low,Math.min(high,this.vec[1])), this.vec[2]); }
  getClampZ(low,high) { return new V3(this.vec[0], this.vec[1], Math.max(low,Math.min(high,this.vec[2]))); }
  getClampXYZ(lowX,lowY,lowZ,highX,highY,highZ) { return new V3(Math.max(lowX,Math.min(highX,this.vec[0])), Math.max(lowY,Math.min(highY,this.vec[1])), Math.max(lowZ,Math.min(highZ,this.vec[2]))); }
  getClamp(lowV,highV) { return new V3(Math.max(lowV.vec[0],Math.min(highV.vec[0],this.vec[0])), Math.max(lowV.vec[1],Math.min(highV.vec[1],this.vec[1])), Math.max(lowV.vec[2],Math.min(highV.vec[2],this.vec[2]))); }

  projectLinear(vec) { const c=(this.vec[0]*vec.vec[0] + this.vec[1]*vec.vec[1] + this.vec[2]*vec.vec[2])/(vec.vec[0]**2 + vec.vec[1]**2 + vec.vec[2]**2); this.vec[0]=vec.vec[0]*c; this.vec[1]=vec.vec[1]*c; this.vec[2]=vec.vec[2]*c; return this; }
  getProjectLinear(vec) { const c=(this.vec[0]*vec.vec[0] + this.vec[1]*vec.vec[1] + this.vec[2]*vec.vec[2])/(vec.vec[0]**2 + vec.vec[1]**2 + vec.vec[2]**2); return new V3(vec.vec[0]*c, vec.vec[1]*c, vec.vec[2]*c); }

  eulerRotateX(ax) { return this; }
  eulerRotateY(ay) { return this; }
  eulerRotateZ(az) { return this; }
  axialRotate(vec, angle) { return this; }
  getEulerRotateX(ax) { return new V3(); }
  getEulerRotateY(ax) { return new V3(); }
  getEulerRotateZ(ax) { return new V3(); }
  getAxialRotate(ax) { return new V3(); }
  changeToBasis(xV,yV,zV) { return this; }
  getChangeToBasis(xV,yV,zV) { return new V3(); }
  projectPlanarFromAxis(ax1,ax2) { return this; }
  getProjectPlanarFromAxis(ax1,ax2) { return new V3(); }
  projectPlanarFromNormal(nVec) { return this; }
  getProjectPlanarFromNormal(nVec) { return new V3(); }

  // vector intersection
  // area
  // volume
  // lerp
  // change basis
  // linear projection
  // planar projection (given normal)
  // planar projection (given two planar vectors)
}

window.Vec = { V3: V3 }
