if (window.Vec) { console.warn("Vec module already exists, overwriting..."); }

class V3 {
  constructor(x,y,z) { this.vec = new Float32Array(3); this.vec[0]=x; this.vec[1]=y; this.vec[2]=z; }
  get buffer() { return this.vec.buffer; }
  set buffer(buffer) { this.vec=new Float32Array(buffer); }
  get x() { return this.vec[0]; }
  get y() { return this.vec[1]; }
  get z() { return this.vec[2]; }
  set x(x) { this.vec[0]=x; }
  set y(y) { this.vec[1]=y; }
  set z(z) { this.vec[2]=z; }
  get magnitude() { return Math.sqrt(this.x**2 + this.y**2 + this.z**2); }
  set magnitude(c) { if (this.magnitude>0) { if (c<=0) { this.x=0; this.y=0; this.z=0; } else { c/=this.magnitude; this.x*=c; this.y*=c; this.z*=c; } } }
  get unitX() { return this.x===0?0:this.x/this.magnitude; }
  get unitY() { return this.y===0?0:this.y/this.magnitude; }
  get unitZ() { return this.z===0?0:this.z/this.magnitude; }
  get isNull() { return this.vec[0]===0 && this.vec[1]===0 && this.vec[2]===0; }

  toString() { return "(x: "+this.x+", y: "+this.y+", z: "+this.z+")"; }
  toJSON() { return {x: this.x, y: this.y, z: this.z}; }
  toArray() { return [this.x, this.y, this.z]; }
  setX(x) { this.x=x; return this; }
  setY(y) { this.y=y; return this; }
  setZ(z) { this.z=z; return this; }
  setXYZ(x,y,z) { this.x=x; this.y=y; this.z=z; return this; }
  copy(vec) { this.x=vec.x; this.y=vec.y; this.z=vec.z; return this; }
  clone() { return new V3(this.x, this.y, this.z); }
  equals(vec) { return vec instanceof V3 && this.x===vec.x && this.y===vec.y && this.z===vec.z; }
  addX(x) { this.x+=x; return this; }
  addY(y) { this.y+=y; return this; }
  addZ(z) { this.z+=z; return this; }
  addXYZ(x,y,z) { this.x+=x; this.y+=y; this.z+=z; return this; }
  add(vec) { this.x+=vec.x; this.y+=vec.y; this.z+=vec.z; return this; }
  getAddX(x) { return new V3(this.x+x, this.y, this.z); }
  getAddY(y) { return new V3(this.x, this.y+y, this.z); }
  getAddZ(z) { return new V3(this.x, this.y, this.z+z); }
  getAddXYZ(x,y,z) { return new V3(this.x+x, this.y+y, this.z+z); }
  getAdd(vec) { return new V3(this.x+vec.x, this.y+vec.y, this.z+vec.z); }
  subX(x) { this.x-=x; return this; }
  subY(y) { this.y-=y; return this; }
  subZ(z) { this.z-=z; return this; }
  subXYZ(x,y,z) { this.x-=x; this.y-=y; this.z-=z; return this; }
  sub(vec) { this.x-=vec.x; this.y-=vec.y; this.z-=vec.z; return this; }
  getSubX(x) { return new V3(this.x-x, this.y, this.z); }
  getSubY(y) { return new V3(this.x, this.y-y, this.z); }
  getSubZ(z) { return new V3(this.x, this.y, this.z-z); }
  getSubXYZ(x,y,z) { return new V3(this.x-x, this.y-y, this.z-z); }
  getSub(vec) { return new V3(this.x-vec.x, this.y-vec.y, this.z-vec.z); }
  mulX(x) { this.x*=x; return this; }
  mulY(y) { this.y*=y; return this; }
  mulZ(z) { this.z*=z; return this; }
  mulXYZ(x,y,z) { this.x*=x; this.y*=y; this.z*=z; return this; }
  mul(vec) { this.x*=vec.x; this.y*=vec.y; this.z*=vec.z; return this; }
  getMulX(x) { return new V3(this.x*=x, this.y, this.z); }
  getMulY(y) { return new V3(this.x, this.y*y, this.z); }
  getMulZ(z) { return new V3(this.x, this.y, this.z*z); }
  getMulXYZ(x,y,z) { return new V3(this.x*x, this.y*y, this.z*z); }
  getMul(vec) { return new V3(this.x*vec.x, this.y*vec.y, this.z*vec.z); }
  scale(c) { this.x*=c; this.y*=c; this.z*=c; return this; }
  scaleTo(c) { if (!this.isNull) { c/=this.magnitude; this.x*=c; this.y*=c; this.z*=c; } return this; }
  getScale(c) { return new V3(this.x*c, this.y*c, this.z*c); }
  getScaleTo(c) { if (!this.isNull) { c/=this.magnitude; return new V3(this.x*c, this.y*c, this.z*c); } return new V3(0,0,0); }
  invertX() { this.x*=-1; return this; }
  invertY() { this.y*=-1; return this; }
  invertZ() { this.z*=-1; return this; }
  invertXYZ() { this.x*=-1; this.y*=-1; this.z*=-1; return this; }
  getInvertX() { return new V3(-this.x, this.y, this.z); }
  getInvertY() { return new V3(this.x, -this.y, this.z); }
  getInvertZ() { return new V3(this.x, this.y, -this.z); }
  getInvertXYZ() { return new V3(-this.x, -this.y, -this.z); }
  divX(x) { this.x/=x; return this; }
  divY(y) { this.y/=y; return this; }
  divZ(z) { this.z/=z; return this; }
  divXYZ(x,y,z) { this.x/=x; this.y/=y; this.z/=z; return this; }
  div(vec) { this.x/=vec.x; this.y/=vec.y; this.z/=vec.z; return this; }
  getDivX(x) { return new V3(this.x/x, this.y, this.z); }
  getDivY(y) { return new V3(this.x, this.y/y, this.z); }
  getDivZ(z) { return new V3(this.x, this.y, this.z/z); }
  getDivXYZ(x,y,z) { return new V3(this.x/x, this.y/y, this.z/z); }
  getDiv(vec) { return new V3(this.x/vec.x, this.y/vec.y, this.z/vec.z); }
  normalize() { if (!this.isNull) { const m=this.magnitude; this.x/=m; this.y/=m; this.z/=m; } return this; }
  getNormalize() { if (!this.isNull) { const m=this.magnitude; return new V3(this.x/m, this.y/m, this.z/m); } else { return new V3(0,0,0); } }
  dot(vec) { return this.x*vec.x + this.y*vec.y + this.z*vec.z; }
  cross(vec) { const x=this.y*vec.z - this.z*vec.y; const y=this.z*vec.x - this.x*vec.z; this.z = this.x*vec.y - this.y*vec.x; this.x = x; this.y = y; return this; }
  getCross(vec) { return new V3(this.y*vec.z - this.z*vec.y, this.z*vec.x - this.x*vec.z, this.x*vec.y - this.y*vec.x); }
  angleBetween(vec) { return !this.isNull && !vec.isNull ? Math.acos((this.x*vec.x + this.y*vec.y + this.z*vec.z)/(this.magnitude*vec.magnitude)) : null; }
  distanceTo(vec) { return Math.sqrt((this.x-vec.x)**2 + (this.y-vec.y)**2 + (this.z-vec.z)**2); }
  maxX(c) { this.x=Math.max(this.x, c); return this; }
  maxY(c) { this.x=Math.max(this.x, c); return this; }
  maxZ(c) { this.x=Math.max(this.x, c); return this; }
  maxXYZ(a,b,c) { this.x=Math.max(this.x, a); this.y=Math.max(this.y, b); this.z=Math.max(this.z, b); return this; }
  max(vec) { this.x=Math.max(this.x, vec.x); this.y=Math.max(this.y, vec.y); this.z=Math.max(this.z, vec.z); return this; }
  getMaxX(c) { return new V3(Math.max(this.x, c), this.y, this.z); }
  getMaxY(c) { return new V3(this.x, Math.max(this.y, c), this.z); }
  getMaxZ(c) { return new V3(this.x, this.y, Math.max(this.z, c)); }
  getMaxXYZ(a,b,c) { return new V3(Math.max(this.x, a), Math.max(this.y, b), Math.max(this.z, c)); }
  getMax(vec) { return new V3(Math.max(this.x, vec.x), Math.max(this.y, vec.y), Math.max(this.z, vec.z)); }
  minX(c) { this.x=Math.min(this.x, c); return this; }
  minY(c) { this.x=Math.min(this.x, c); return this; }
  minZ(c) { this.x=Math.min(this.x, c); return this; }
  minXYZ(a,b,c) { this.x=Math.min(this.x, a); this.y=Math.min(this.y, b); this.z=Math.min(this.z, b); return this; }
  min(vec) { this.x=Math.min(this.x, vec.x); this.y=Math.min(this.y, vec.y); this.z=Math.min(this.z, vec.z); return this; }
  getMinX(c) { return new V3(Math.min(this.x, c), this.y, this.z); }
  getMinY(c) { return new V3(this.x, Math.min(this.y, c), this.z); }
  getMinZ(c) { return new V3(this.x, this.y, Math.min(this.z, c)); }
  getMinXYZ(a,b,c) { return new V3(Math.min(this.x, a), Math.min(this.y, b), Math.min(this.z, c)); }
  getMin(vec) { return new V3(Math.min(this.x, vec.x), Math.min(this.y, vec.y), Math.min(this.z, vec.z)); }
  clampX(low,high) { this.x=Math.max(low,Math.min(high,this.x)); return this; }
  clampY(low,high) { this.y=Math.max(low,Math.min(high,this.y)); return this; }
  clampZ(low,high) { this.z=Math.max(low,Math.min(high,this.z)); return this; }
  clampXYZ(lowX,lowY,lowZ,highX,highY,highZ) { this.x=Math.max(lowX,Math.min(highX,this.x)); this.y=Math.max(lowY,Math.min(highY,this.y)); this.z=Math.max(lowZ,Math.min(highZ,this.z)); return this; }
  clamp(lowV,highV) { this.x=Math.max(lowV.x,Math.min(highV.x,this.x)); this.y=Math.max(lowV.y,Math.min(highV.y,this.y)); this.z=Math.max(lowV.z,Math.min(highV.z,this.z)); return this; }
  getClampX(low,high) { return new V3(Math.max(low,Math.min(high,this.x)), this.y, this.z); }
  getClampY(low,high) { return new V3(this.x, Math.max(low,Math.min(high,this.y)), this.z); }
  getClampZ(low,high) { return new V3(this.x, this.y, Math.max(low,Math.min(high,this.z))); }
  getClampXYZ(lowX,lowY,lowZ,highX,highY,highZ) { return new V3(Math.max(lowX,Math.min(highX,this.x)), Math.max(lowY,Math.min(highY,this.y)), Math.max(lowZ,Math.min(highZ,this.z))); }
  getClamp(lowV,highV) { return new V3(Math.max(lowV.x,Math.min(highV.x,this.x)), Math.max(lowV.y,Math.min(highV.y,this.y)), Math.max(lowV.z,Math.min(highV.z,this.z))); }
  projectLinear(vec) { if (this.magnitude===0 || vec.magnitude===0) { this.x=0; this.y=0; this.z=0; } else { const c=(this.x*vec.x + this.y*vec.y + this.z*vec.z)/(vec.magnitude**2); this.x=vec.x*c; this.y=vec.y*c; this.z=vec.z*c; } return this; }
  projectPlanarFromAxis(a1,a2) { const nx=a1.y*a2.z - a1.z*a2.y; const ny=a1.z*a2.x - a1.x*a2.z; const nz=a1.x*a2.y - a1.y*a2.x; if (nx!==0 || ny!==0 || nz!==0) { const c=(this.x*nx + this.y*ny + this.z*nz)/(nx**2 + ny**2 + nz**2); this.x-=nx*c; this.y-=ny*c; this.z-=nz*c; } return this; }
  projectPlanarFromNormal(nVec) { if (!nVec.isNull) { const c=(this.x*nVec.x + this.y*nVec.y + this.z*nVec.z)/(nVec.magnitude**2); this.x-=nVec.x*c; this.y-=nVec.y*c; this.z-=nVec.z*c; } return this; }
  getProjectLinear(vec) { if (this.magnitude===0 || vec.magnitude===0) { return new V3(0,0,0); } const c=(this.x*vec.x + this.y*vec.y + this.z*vec.z)/(vec.magnitude**2); return new V3(vec.x*c, vec.y*c, vec.z*c); }
  getProjectPlanarFromAxis(a1,a2) { const nx=a1.y*a2.z - a1.z*a2.y; const ny=a1.z*a2.x - a1.x*a2.z; const nz=a1.x*a2.y - a1.y*a2.x; if (nx!==0 || ny!==0 || nz!==0) { const c=(this.x*nx + this.y*ny + this.z*nz)/(nx**2 + ny**2 + nz**2); return new V3(this.x-nx*c, this.y-ny*c, this.z-nz*c); } return new V3(this.x, this.y, this.z); }
  getProjectPlanarFromNormal(nVec) { if (!nVec.isNull) { const c=(this.x*nVec.x + this.y*nVec.y + this.z*nVec.z)/(nVec.magnitude**2); return new V3(this.x-nVec.x*c, this.y-nVec.y*c, this.z-nVec.z*c); } return new V3(this.x, this.y, this.z); }
  changeToBasis(xV,yV,zV) { const det=-xV.z*yV.y*zV.x+xV.y*yV.z*zV.x+xV.z*yV.x*zV.y-xV.x*yV.z*zV.y-xV.y*yV.x*zV.z+xV.x*yV.y*zV.z; if (det!==0) { const x = (this.z*(xV.y*yV.z-xV.z*yV.y) + this.y*(xV.z*zV.y-xV.y*zV.z) + this.x*(yV.y*zV.z-yV.z*zV.y))/det; const y = (this.z*(xV.z*yV.x-xV.x*yV.z) + this.y*(xV.x*zV.z-xV.z*zV.x) + this.x*(yV.z*zV.x-yV.x*zV.z))/det; this.z = (this.z*(xV.x*yV.y-xV.y*yV.x) + this.y*(xV.y*zV.x-xV.x*zV.y) + this.x*(yV.x*zV.y-yV.y*zV.x))/det; this.x = x; this.y = y; } return this; }
  getChangeToBasis(xV,yV,zV) { const det=-xV.z*yV.y*zV.x+xV.y*yV.z*zV.x+xV.z*yV.x*zV.y-xV.x*yV.z*zV.y-xV.y*yV.x*zV.z+xV.x*yV.y*zV.z; if (det!==0) { return new V3((this.z*(xV.y*yV.z-xV.z*yV.y)+this.y*(xV.z*zV.y-xV.y*zV.z)+this.x*(yV.y*zV.z-yV.z*zV.y))/det,(this.z*(xV.z*yV.x-xV.x*yV.z)+this.y*(xV.x*zV.z-xV.z*zV.x)+this.x*(yV.z*zV.x-yV.x*zV.z))/det,(this.z*(xV.x*yV.y-xV.y*yV.x)+this.y*(xV.y*zV.x-xV.x*zV.y)+this.x*(yV.x*zV.y-yV.y*zV.x))/det); } return new V3(this.x,this.y,this.z); }
  floorX() { this.x=Math.floor(this.x); return this; }
  floorY() { this.y=Math.floor(this.y); return this; }
  floorZ() { this.z=Math.floor(this.z); return this; }
  floor() { this.x=Math.floor(this.x); this.y=Math.floor(this.y); this.z=Math.floor(this.z); return this; }
  getFloorX() { return new V3(Math.floor(this.x),this.y,this.z); }
  getFloorY() { return new V3(this.x,Math.floor(this.y),this.z); }
  getFloorZ() { return new V3(this.x,this.y,Math.floor(this.z)); }
  getFloor() { return new V3(Math.floor(this.x),Math.floor(this.y),Math.floor(this.z)); }
  ceilX() { this.x=Math.ceil(this.x); return this; }
  ceilY() { this.y=Math.ceil(this.y); return this; }
  ceilZ() { this.z=Math.ceil(this.z); return this; }
  ceil() { this.x=Math.ceil(this.x); this.y=Math.ceil(this.y); this.z=Math.ceil(this.z); return this; }
  getCeilX() { return new V3(Math.ceil(this.x),this.y,this.z); }
  getCeilY() { return new V3(this.x,Math.ceil(this.y),this.z); }
  getCeilZ() { return new V3(this.x,this.y,Math.ceil(this.z)); }
  getCeil() { return new V3(Math.ceil(this.x),Math.ceil(this.y),Math.ceil(this.z)); }
  roundX() { this.x=Math.round(this.x); return this; }
  roundY() { this.y=Math.round(this.y); return this; }
  roundZ() { this.z=Math.round(this.z); return this; }
  round() { this.x=Math.round(this.x); this.y=Math.round(this.y); this.z=Math.round(this.z); return this; }
  getRoundX() { return new V3(Math.round(this.x),this.y,this.z); }
  getRoundY() { return new V3(this.x,Math.round(this.y),this.z); }
  getRoundZ() { return new V3(this.x,this.y,Math.round(this.z)); }
  getRound() { return new V3(Math.round(this.x),Math.round(this.y),Math.round(this.z)); }
  eulerRotateX(ax) { const c=Math.cos(ax),s=Math.sin(ax),y=this.y; this.y=c*y-this.z*s; this.z=c*this.z+y*s; return this; }
  eulerRotateY(ay) { const c=Math.cos(ay),s=Math.sin(ay),x=this.x; this.x=c*x+this.z*s; this.z=c*this.z-x*s; return this; }
  eulerRotateZ(az) { const c=Math.cos(az),s=Math.sin(az),x=this.x; this.x=c*x-this.y*s; this.y=c*this.y+x*s; return this; }
  getEulerRotateX(ax) { const c=Math.cos(ax),s=Math.sin(ax); return new V3(this.x,c*this.y-this.z*s,c*this.z+this.y*s); }
  getEulerRotateY(ay) { const c=Math.cos(ay),s=Math.sin(ay); return new V3(c*this.x+this.z*s,this.y,c*this.z-this.x*s); }
  getEulerRotateZ(az) { const c=Math.cos(az),s=Math.sin(az); return new V3(c*this.x-this.y*s,c*this.y+this.x*s,this.z); }
  withinFrustum(vne,vse,vsw,vnw) { return (vne.y*vse.z-vse.y*vne.z)*this.x+(vse.x*vne.z-vne.x*vse.z)*this.y+(vne.x*vse.y-vse.x*vne.y)*this.z<=0&&(vse.y*vsw.z-vsw.y*vse.z)*this.x+(vsw.x*vse.z-vse.x*vsw.z)*this.y+(vse.x*vsw.y-vsw.x*vse.y)*this.z<=0&&(vsw.y*vnw.z-vnw.y*vsw.z)*this.x+(vnw.x*vsw.z-vsw.x*vnw.z)*this.y+(vsw.x*vnw.y-vnw.x*vsw.y)*this.z<=0&&(vnw.y*vne.z-vne.y*vnw.z)*this.x+(vne.x*vnw.z-vnw.x*vne.z)*this.y+(vnw.x*vne.y-vne.x*vnw.y)*this.z<=0; }

  axialRotate(vec, angle) { return this; }
  getAxialRotate(ax) { return new V3(); }

  // area
  // volume
  // lerp
}

window.Vec = { V3: V3 }
