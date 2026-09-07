var Refrioil3D=(()=>{var fa=Object.defineProperty;var Fc=Object.getOwnPropertyDescriptor;var Oc=Object.getOwnPropertyNames;var Bc=Object.prototype.hasOwnProperty;var zc=(i,e)=>{for(var t in e)fa(i,t,{get:e[t],enumerable:!0})},kc=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Oc(e))!Bc.call(i,s)&&s!==t&&fa(i,s,{get:()=>e[s],enumerable:!(n=Fc(e,s))||n.enumerable});return i};var Gc=i=>kc(fa({},"__esModule",{value:!0}),i);var _m={};zc(_m,{simulation:()=>gm,viewer:()=>pm});var sl=0,Wa=1,rl=2;var Xa=1,al=2,tn=3,dn=0,Tt=1,nn=2,gn=0,Hn=1,qa=2,Ya=3,Za=4,ol=5,Rn=100,ll=101,cl=102,hl=103,ul=104,dl=200,fl=201,pl=202,ml=203,Gs=204,Vs=205,gl=206,_l=207,xl=208,yl=209,vl=210,Ml=211,Sl=212,El=213,bl=214,ur=0,dr=1,fr=2,Wn=3,pr=4,mr=5,gr=6,_r=7,$a=0,Tl=1,wl=2,_n=0,Al=1,Cl=2,Rl=3,xr=4,Pl=5,Il=6,Ll=7;var Ja=300,Zn=301,$n=302,yr=303,vr=304,ds=306,Hs=1e3,Cn=1001,Ws=1002,Ct=1003,Dl=1004;var fs=1005;var Ht=1006,Mr=1007;var Nn=1008;var Zt=1009,Ka=1010,Qa=1011,wi=1012,Sr=1013,Un=1014,$t=1015,Ai=1016,Er=1017,br=1018,Ci=1020,ja=35902,eo=35899,to=1021,no=1022,Bt=1023,_i=1026,Ri=1027,Tr=1028,wr=1029,io=1030,Ar=1031;var Cr=1033,ps=33776,ms=33777,gs=33778,_s=33779,Rr=35840,Pr=35841,Ir=35842,Lr=35843,Dr=36196,Nr=37492,Ur=37496,Fr=37808,Or=37809,Br=37810,zr=37811,kr=37812,Gr=37813,Vr=37814,Hr=37815,Wr=37816,Xr=37817,qr=37818,Yr=37819,Zr=37820,$r=37821,Jr=36492,Kr=36494,Qr=36495,jr=36283,ea=36284,ta=36285,na=36286;var Xi=2300,Xs=2301,ks=2302,Fa=2400,Oa=2401,Ba=2402;var Nl=3200,Ul=3201;var so=0,Fl=1,xn="",xt="srgb",Xn="srgb-linear",qi="linear",qe="srgb";var Vn=7680;var za=519,Ol=512,Bl=513,zl=514,ro=515,kl=516,Gl=517,Vl=518,Hl=519,ka=35044,ia=35048;var ao="300 es",Vt=2e3,Yi=2001;var fn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fo=1234567,Hi=Math.PI/180,xi=180/Math.PI;function Pi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gt[i&255]+gt[i>>8&255]+gt[i>>16&255]+gt[i>>24&255]+"-"+gt[e&255]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[t&63|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[n&255]+gt[n>>8&255]+gt[n>>16&255]+gt[n>>24&255]).toLowerCase()}function Be(i,e,t){return Math.max(e,Math.min(t,i))}function oo(i,e){return(i%e+e)%e}function Vc(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Hc(i,e,t){return i!==e?(t-i)/(e-i):0}function Wi(i,e,t){return(1-t)*i+t*e}function Wc(i,e,t,n){return Wi(i,e,1-Math.exp(-t*n))}function Xc(i,e=1){return e-Math.abs(oo(i,e*2)-e)}function qc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Yc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Zc(i,e){return i+Math.floor(Math.random()*(e-i+1))}function $c(i,e){return i+Math.random()*(e-i)}function Jc(i){return i*(.5-Math.random())}function Kc(i){i!==void 0&&(Fo=i);let e=Fo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qc(i){return i*Hi}function jc(i){return i*xi}function eh(i){return(i&i-1)===0&&i!==0}function th(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function nh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ih(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),_=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*f,o*l);break;case"YZY":i.set(c*f,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*f,o*h,o*l);break;case"XZX":i.set(o*h,c*_,c*p,o*l);break;case"YXY":i.set(c*p,o*h,c*_,o*l);break;case"ZYZ":i.set(c*_,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function mi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var lo={DEG2RAD:Hi,RAD2DEG:xi,generateUUID:Pi,clamp:Be,euclideanModulo:oo,mapLinear:Vc,inverseLerp:Hc,lerp:Wi,damp:Wc,pingpong:Xc,smoothstep:qc,smootherstep:Yc,randInt:Zc,randFloat:$c,randFloatSpread:Jc,seededRandom:Kc,degToRad:Qc,radToDeg:jc,isPowerOfTwo:eh,ceilPowerOfTwo:th,floorPowerOfTwo:nh,setQuaternionFromProperEuler:ih,normalize:Et,denormalize:mi},Ve=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Be(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],p=r[a+1],_=r[a+2],v=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=v;return}if(u!==v||c!==f||l!==p||h!==_){let m=1-o,d=c*f+l*p+h*_+u*v,T=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){let w=Math.sqrt(b),C=Math.atan2(w,d*T);m=Math.sin(m*C)/w,o=Math.sin(o*C)/w}let S=o*T;if(c=c*m+f*S,l=l*m+p*S,h=h*m+_*S,u=u*m+v*S,m===1-o){let w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],f=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+h*u+c*p-l*f,e[t+1]=c*_+h*f+l*u-o*p,e[t+2]=l*_+h*p+o*f-c*u,e[t+3]=h*_-o*u-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),f=c(n/2),p=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*p*_,this._y=l*p*u-f*h*_,this._z=l*h*_+f*p*u,this._w=l*h*u-f*p*_;break;case"YXZ":this._x=f*h*u+l*p*_,this._y=l*p*u-f*h*_,this._z=l*h*_-f*p*u,this._w=l*h*u+f*p*_;break;case"ZXY":this._x=f*h*u-l*p*_,this._y=l*p*u+f*h*_,this._z=l*h*_+f*p*u,this._w=l*h*u-f*p*_;break;case"ZYX":this._x=f*h*u-l*p*_,this._y=l*p*u+f*h*_,this._z=l*h*_-f*p*u,this._w=l*h*u+f*p*_;break;case"YZX":this._x=f*h*u+l*p*_,this._y=l*p*u+f*h*_,this._z=l*h*_-f*p*u,this._w=l*h*u-f*p*_;break;case"XZY":this._x=f*h*u-l*p*_,this._y=l*p*u-f*h*_,this._z=l*h*_+f*p*u,this._w=l*h*u+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Be(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Oo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Oo.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pa.copy(this).projectOnVector(e),this.sub(pa)}reflect(e){return this.sub(pa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Be(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},pa=new O,Oo=new pn,Le=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],_=n[8],v=s[0],m=s[3],d=s[6],T=s[1],b=s[4],S=s[7],w=s[2],C=s[5],I=s[8];return r[0]=a*v+o*T+c*w,r[3]=a*m+o*b+c*C,r[6]=a*d+o*S+c*I,r[1]=l*v+h*T+u*w,r[4]=l*m+h*b+u*C,r[7]=l*d+h*S+u*I,r[2]=f*v+p*T+_*w,r[5]=f*m+p*b+_*C,r[8]=f*d+p*S+_*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,f=o*c-h*r,p=l*r-a*c,_=t*u+n*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return e[0]=u*v,e[1]=(s*l-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=f*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-o*t)*v,e[6]=p*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ma.makeScale(e,t)),this}rotate(e){return this.premultiply(ma.makeRotation(-e)),this}translate(e,t){return this.premultiply(ma.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ma=new Le;function co(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Zi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wl(){let i=Zi("canvas");return i.style.display="block",i}var Bo={};function yi(i){i in Bo||(Bo[i]=!0,console.warn(i))}function Xl(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var zo=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ko=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sh(){let i={enabled:!0,workingColorSpace:Xn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===qe&&(s.r=un(s.r),s.g=un(s.g),s.b=un(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===qe&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xn?qi:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return yi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return yi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xn]:{primaries:e,whitePoint:n,transfer:qi,toXYZ:zo,fromXYZ:ko,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xt},outputColorSpaceConfig:{drawingBufferColorSpace:xt}},[xt]:{primaries:e,whitePoint:n,transfer:qe,toXYZ:zo,fromXYZ:ko,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xt}}}),i}var Ge=sh();function un(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ni,qs=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ni===void 0&&(ni=Zi("canvas")),ni.width=e.width,ni.height=e.height;let s=ni.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ni}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Zi("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=un(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(un(t[n]/255)*255):t[n]=un(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},rh=0,vi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=Pi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ga(s[a].image)):r.push(ga(s[a]))}else r=ga(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ga(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qs.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ah=0,_a=new O,bt=class i extends fn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Cn,s=Cn,r=Ht,a=Nn,o=Bt,c=Zt,l=i.DEFAULT_ANISOTROPY,h=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=Pi(),this.name="",this.source=new vi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_a).x}get height(){return this.source.getSize(_a).y}get depth(){return this.source.getSize(_a).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ja)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hs:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case Ws:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hs:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case Ws:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=Ja;bt.DEFAULT_ANISOTROPY=1;var rt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],_=c[9],v=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,S=(p+1)/2,w=(d+1)/2,C=(h+f)/4,I=(u+v)/4,U=(_+m)/4;return b>S&&b>w?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=C/n,r=I/n):S>w?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=C/s,r=U/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=I/r,s=U/r),this.set(n,s,r,t),this}let T=Math.sqrt((m-_)*(m-_)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(u-v)/T,this.z=(f-h)/T,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this.w=Be(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this.w=Be(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ys=class extends fn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new bt(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new vi(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qt=class extends Ys{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},$i=class extends bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Zs=class extends bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jt=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,zt):zt.fromBufferAttribute(r,a),zt.applyMatrix4(e.matrixWorld),this.expandByPoint(zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ms.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ms.copy(n.boundingBox)),Ms.applyMatrix4(e.matrixWorld),this.union(Ms)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zt),zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oi),Ss.subVectors(this.max,Oi),ii.subVectors(e.a,Oi),si.subVectors(e.b,Oi),ri.subVectors(e.c,Oi),Mn.subVectors(si,ii),Sn.subVectors(ri,si),Bn.subVectors(ii,ri);let t=[0,-Mn.z,Mn.y,0,-Sn.z,Sn.y,0,-Bn.z,Bn.y,Mn.z,0,-Mn.x,Sn.z,0,-Sn.x,Bn.z,0,-Bn.x,-Mn.y,Mn.x,0,-Sn.y,Sn.x,0,-Bn.y,Bn.x,0];return!xa(t,ii,si,ri,Ss)||(t=[1,0,0,0,1,0,0,0,1],!xa(t,ii,si,ri,Ss))?!1:(Es.crossVectors(Mn,Sn),t=[Es.x,Es.y,Es.z],xa(t,ii,si,ri,Ss))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(an),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},an=[new O,new O,new O,new O,new O,new O,new O,new O],zt=new O,Ms=new jt,ii=new O,si=new O,ri=new O,Mn=new O,Sn=new O,Bn=new O,Oi=new O,Ss=new O,Es=new O,zn=new O;function xa(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){zn.fromArray(i,r);let o=s.x*Math.abs(zn.x)+s.y*Math.abs(zn.y)+s.z*Math.abs(zn.z),c=e.dot(zn),l=t.dot(zn),h=n.dot(zn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var oh=new jt,Bi=new O,ya=new O,Pn=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):oh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bi.subVectors(e,this.center);let t=Bi.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Bi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bi.copy(e.center).add(ya)),this.expandByPoint(Bi.copy(e.center).sub(ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},on=new O,va=new O,bs=new O,En=new O,Ma=new O,Ts=new O,Sa=new O,$s=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,on)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=on.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(on.copy(this.origin).addScaledVector(this.direction,t),on.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){va.copy(e).add(t).multiplyScalar(.5),bs.copy(t).sub(e).normalize(),En.copy(this.origin).sub(va);let r=e.distanceTo(t)*.5,a=-this.direction.dot(bs),o=En.dot(this.direction),c=-En.dot(bs),l=En.lengthSq(),h=Math.abs(1-a*a),u,f,p,_;if(h>0)if(u=a*c-o,f=a*o-c,_=r*h,u>=0)if(f>=-_)if(f<=_){let v=1/h;u*=v,f*=v,p=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f<=-_?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=_?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(va).addScaledVector(bs,f),p}intersectSphere(e,t){on.subVectors(e.center,this.origin);let n=on.dot(this.direction),s=on.dot(on)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,on)!==null}intersectTriangle(e,t,n,s,r){Ma.subVectors(t,e),Ts.subVectors(n,e),Sa.crossVectors(Ma,Ts);let a=this.direction.dot(Sa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;En.subVectors(this.origin,e);let c=o*this.direction.dot(Ts.crossVectors(En,Ts));if(c<0)return null;let l=o*this.direction.dot(Ma.cross(En));if(l<0||c+l>a)return null;let h=-o*En.dot(Sa);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},nt=class i{constructor(e,t,n,s,r,a,o,c,l,h,u,f,p,_,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,f,p,_,v,m)}set(e,t,n,s,r,a,o,c,l,h,u,f,p,_,v,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=_,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ai.setFromMatrixColumn(e,0).length(),r=1/ai.setFromMatrixColumn(e,1).length(),a=1/ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,p=a*u,_=o*h,v=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+_*l,t[5]=f-v*l,t[9]=-o*c,t[2]=v-f*l,t[6]=_+p*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*h,p=c*u,_=l*h,v=l*u;t[0]=f+v*o,t[4]=_*o-p,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-_,t[6]=v+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*h,p=c*u,_=l*h,v=l*u;t[0]=f-v*o,t[4]=-a*u,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*h,t[9]=v-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*h,p=a*u,_=o*h,v=o*u;t[0]=c*h,t[4]=_*l-p,t[8]=f*l+v,t[1]=c*u,t[5]=v*l+f,t[9]=p*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,p=a*l,_=o*c,v=o*l;t[0]=c*h,t[4]=v-f*u,t[8]=_*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+_,t[10]=f-v*u}else if(e.order==="XZY"){let f=a*c,p=a*l,_=o*c,v=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+v,t[5]=a*h,t[9]=p*u-_,t[2]=_*u-p,t[6]=o*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lh,e,ch)}lookAt(e,t,n){let s=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),bn.crossVectors(n,It),bn.lengthSq()===0&&(Math.abs(n.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),bn.crossVectors(n,It)),bn.normalize(),ws.crossVectors(It,bn),s[0]=bn.x,s[4]=ws.x,s[8]=It.x,s[1]=bn.y,s[5]=ws.y,s[9]=It.y,s[2]=bn.z,s[6]=ws.z,s[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],_=n[2],v=n[6],m=n[10],d=n[14],T=n[3],b=n[7],S=n[11],w=n[15],C=s[0],I=s[4],U=s[8],M=s[12],y=s[1],R=s[5],L=s[9],G=s[13],B=s[2],k=s[6],H=s[10],te=s[14],W=s[3],re=s[7],ce=s[11],Se=s[15];return r[0]=a*C+o*y+c*B+l*W,r[4]=a*I+o*R+c*k+l*re,r[8]=a*U+o*L+c*H+l*ce,r[12]=a*M+o*G+c*te+l*Se,r[1]=h*C+u*y+f*B+p*W,r[5]=h*I+u*R+f*k+p*re,r[9]=h*U+u*L+f*H+p*ce,r[13]=h*M+u*G+f*te+p*Se,r[2]=_*C+v*y+m*B+d*W,r[6]=_*I+v*R+m*k+d*re,r[10]=_*U+v*L+m*H+d*ce,r[14]=_*M+v*G+m*te+d*Se,r[3]=T*C+b*y+S*B+w*W,r[7]=T*I+b*R+S*k+w*re,r[11]=T*U+b*L+S*H+w*ce,r[15]=T*M+b*G+S*te+w*Se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],p=e[14],_=e[3],v=e[7],m=e[11],d=e[15];return _*(+r*c*u-s*l*u-r*o*f+n*l*f+s*o*p-n*c*p)+v*(+t*c*p-t*l*f+r*a*f-s*a*p+s*l*h-r*c*h)+m*(+t*l*u-t*o*p-r*a*u+n*a*p+r*o*h-n*l*h)+d*(-s*o*h-t*c*u+t*o*f+s*a*u-n*a*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],p=e[11],_=e[12],v=e[13],m=e[14],d=e[15],T=u*m*l-v*f*l+v*c*p-o*m*p-u*c*d+o*f*d,b=_*f*l-h*m*l-_*c*p+a*m*p+h*c*d-a*f*d,S=h*v*l-_*u*l+_*o*p-a*v*p-h*o*d+a*u*d,w=_*u*c-h*v*c-_*o*f+a*v*f+h*o*m-a*u*m,C=t*T+n*b+s*S+r*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/C;return e[0]=T*I,e[1]=(v*f*r-u*m*r-v*s*p+n*m*p+u*s*d-n*f*d)*I,e[2]=(o*m*r-v*c*r+v*s*l-n*m*l-o*s*d+n*c*d)*I,e[3]=(u*c*r-o*f*r-u*s*l+n*f*l+o*s*p-n*c*p)*I,e[4]=b*I,e[5]=(h*m*r-_*f*r+_*s*p-t*m*p-h*s*d+t*f*d)*I,e[6]=(_*c*r-a*m*r-_*s*l+t*m*l+a*s*d-t*c*d)*I,e[7]=(a*f*r-h*c*r+h*s*l-t*f*l-a*s*p+t*c*p)*I,e[8]=S*I,e[9]=(_*u*r-h*v*r-_*n*p+t*v*p+h*n*d-t*u*d)*I,e[10]=(a*v*r-_*o*r+_*n*l-t*v*l-a*n*d+t*o*d)*I,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*p-t*o*p)*I,e[12]=w*I,e[13]=(h*v*s-_*u*s+_*n*f-t*v*f-h*n*m+t*u*m)*I,e[14]=(_*o*s-a*v*s-_*n*c+t*v*c+a*n*m-t*o*m)*I,e[15]=(a*u*s-h*o*s+h*n*c-t*u*c-a*n*f+t*o*f)*I,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,f=r*l,p=r*h,_=r*u,v=a*h,m=a*u,d=o*u,T=c*l,b=c*h,S=c*u,w=n.x,C=n.y,I=n.z;return s[0]=(1-(v+d))*w,s[1]=(p+S)*w,s[2]=(_-b)*w,s[3]=0,s[4]=(p-S)*C,s[5]=(1-(f+d))*C,s[6]=(m+T)*C,s[7]=0,s[8]=(_+b)*I,s[9]=(m-T)*I,s[10]=(1-(f+v))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ai.set(s[0],s[1],s[2]).length(),a=ai.set(s[4],s[5],s[6]).length(),o=ai.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],kt.copy(this);let l=1/r,h=1/a,u=1/o;return kt.elements[0]*=l,kt.elements[1]*=l,kt.elements[2]*=l,kt.elements[4]*=h,kt.elements[5]*=h,kt.elements[6]*=h,kt.elements[8]*=u,kt.elements[9]*=u,kt.elements[10]*=u,t.setFromRotationMatrix(kt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Vt,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s),_,v;if(c)_=r/(a-r),v=a*r/(a-r);else if(o===Vt)_=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Yi)_=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Vt,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),p=-(n+s)/(n-s),_,v;if(c)_=1/(a-r),v=a/(a-r);else if(o===Vt)_=-2/(a-r),v=-(a+r)/(a-r);else if(o===Yi)_=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ai=new O,kt=new nt,lh=new O(0,0,0),ch=new O(1,1,1),bn=new O,ws=new O,It=new O,Go=new nt,Vo=new pn,Wt=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Go.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Go,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vo.setFromEuler(this),this.setFromQuaternion(Vo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wt.DEFAULT_ORDER="XYZ";var Ji=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},hh=0,Ho=new O,oi=new pn,ln=new nt,As=new O,zi=new O,uh=new O,dh=new pn,Wo=new O(1,0,0),Xo=new O(0,1,0),qo=new O(0,0,1),Yo={type:"added"},fh={type:"removed"},li={type:"childadded",child:null},Ea={type:"childremoved",child:null},ht=class i extends fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new O,t=new Wt,n=new pn,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new Le}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ji,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.multiply(oi),this}rotateOnWorldAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.premultiply(oi),this}rotateX(e){return this.rotateOnAxis(Wo,e)}rotateY(e){return this.rotateOnAxis(Xo,e)}rotateZ(e){return this.rotateOnAxis(qo,e)}translateOnAxis(e,t){return Ho.copy(e).applyQuaternion(this.quaternion),this.position.add(Ho.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wo,e)}translateY(e){return this.translateOnAxis(Xo,e)}translateZ(e){return this.translateOnAxis(qo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?As.copy(e):As.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(zi,As,this.up):ln.lookAt(As,zi,this.up),this.quaternion.setFromRotationMatrix(ln),s&&(ln.extractRotation(s.matrixWorld),oi.setFromRotationMatrix(ln),this.quaternion.premultiply(oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yo),li.child=e,this.dispatchEvent(li),li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fh),Ea.child=e,this.dispatchEvent(Ea),Ea.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yo),li.child=e,this.dispatchEvent(li),li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,e,uh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,dh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};ht.DEFAULT_UP=new O(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Gt=new O,cn=new O,ba=new O,hn=new O,ci=new O,hi=new O,Zo=new O,Ta=new O,wa=new O,Aa=new O,Ca=new rt,Ra=new rt,Pa=new rt,An=class i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Gt.subVectors(e,t),s.cross(Gt);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Gt.subVectors(s,t),cn.subVectors(n,t),ba.subVectors(e,t);let a=Gt.dot(Gt),o=Gt.dot(cn),c=Gt.dot(ba),l=cn.dot(cn),h=cn.dot(ba),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(l*c-o*h)*f,_=(a*h-o*c)*f;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,hn.x),c.addScaledVector(a,hn.y),c.addScaledVector(o,hn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ca.setScalar(0),Ra.setScalar(0),Pa.setScalar(0),Ca.fromBufferAttribute(e,t),Ra.fromBufferAttribute(e,n),Pa.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ca,r.x),a.addScaledVector(Ra,r.y),a.addScaledVector(Pa,r.z),a}static isFrontFacing(e,t,n,s){return Gt.subVectors(n,t),cn.subVectors(e,t),Gt.cross(cn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),Gt.cross(cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ci.subVectors(s,n),hi.subVectors(r,n),Ta.subVectors(e,n);let c=ci.dot(Ta),l=hi.dot(Ta);if(c<=0&&l<=0)return t.copy(n);wa.subVectors(e,s);let h=ci.dot(wa),u=hi.dot(wa);if(h>=0&&u<=h)return t.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(ci,a);Aa.subVectors(e,r);let p=ci.dot(Aa),_=hi.dot(Aa);if(_>=0&&p<=_)return t.copy(r);let v=p*l-c*_;if(v<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(hi,o);let m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return Zo.subVectors(r,s),o=(u-h)/(u-h+(p-_)),t.copy(s).addScaledVector(Zo,o);let d=1/(m+v+f);return a=v*d,o=f*d,t.copy(n).addScaledVector(ci,a).addScaledVector(hi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ql={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function Ia(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ge.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ge.workingColorSpace){if(e=oo(e,1),t=Be(t,0,1),n=Be(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ia(a,r,e+1/3),this.g=Ia(a,r,e),this.b=Ia(a,r,e-1/3)}return Ge.colorSpaceToWorking(this,s),this}setStyle(e,t=xt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){let n=ql[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=un(e.r),this.g=un(e.g),this.b=un(e.b),this}copyLinearToSRGB(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return Ge.workingToColorSpace(_t.copy(this),e),Math.round(Be(_t.r*255,0,255))*65536+Math.round(Be(_t.g*255,0,255))*256+Math.round(Be(_t.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.workingToColorSpace(_t.copy(this),t);let n=_t.r,s=_t.g,r=_t.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ge.workingColorSpace){return Ge.workingToColorSpace(_t.copy(this),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=xt){Ge.workingToColorSpace(_t.copy(this),e);let t=_t.r,n=_t.g,s=_t.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Tn),this.setHSL(Tn.h+e,Tn.s+t,Tn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Tn),e.getHSL(Cs);let n=Wi(Tn.h,Cs.h,t),s=Wi(Tn.s,Cs.s,t),r=Wi(Tn.l,Cs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_t=new ze;ze.NAMES=ql;var ph=0,In=class extends fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=Hn,this.side=dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gs,this.blendDst=Vs,this.blendEquation=Rn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Wn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=za,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vn,this.stencilZFail=Vn,this.stencilZPass=Vn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hn&&(n.blending=this.blending),this.side!==dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gs&&(n.blendSrc=this.blendSrc),this.blendDst!==Vs&&(n.blendDst=this.blendDst),this.blendEquation!==Rn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wn&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==za&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ki=class extends In{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.combine=$a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var lt=new O,Rs=new Ve,mh=0,At=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ka,this.updateRanges=[],this.gpuType=$t,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Rs.fromBufferAttribute(this,t),Rs.applyMatrix3(e),this.setXY(t,Rs.x,Rs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=mi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ka&&(e.usage=this.usage),e}};var Qi=class extends At{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ji=class extends At{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ct=class extends At{constructor(e,t,n){super(new Float32Array(e),t,n)}},gh=0,Ft=new nt,La=new ht,ui=new O,Lt=new jt,ki=new jt,pt=new O,Xt=class i extends fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(co(e)?ji:Qi)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Le().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,n){return Ft.makeTranslation(e,t,n),this.applyMatrix4(Ft),this}scale(e,t,n){return Ft.makeScale(e,t,n),this.applyMatrix4(Ft),this}lookAt(e){return La.lookAt(e),La.updateMatrix(),this.applyMatrix4(La.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ct(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Lt.setFromBufferAttribute(r),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(Lt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ki.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(Lt.min,ki.min),Lt.expandByPoint(pt),pt.addVectors(Lt.max,ki.max),Lt.expandByPoint(pt)):(Lt.expandByPoint(ki.min),Lt.expandByPoint(ki.max))}Lt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)pt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(pt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)pt.fromBufferAttribute(o,l),c&&(ui.fromBufferAttribute(e,l),pt.add(ui)),s=Math.max(s,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let U=0;U<n.count;U++)o[U]=new O,c[U]=new O;let l=new O,h=new O,u=new O,f=new Ve,p=new Ve,_=new Ve,v=new O,m=new O;function d(U,M,y){l.fromBufferAttribute(n,U),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,U),p.fromBufferAttribute(r,M),_.fromBufferAttribute(r,y),h.sub(l),u.sub(l),p.sub(f),_.sub(f);let R=1/(p.x*_.y-_.x*p.y);isFinite(R)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(R),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(R),o[U].add(v),o[M].add(v),o[y].add(v),c[U].add(m),c[M].add(m),c[y].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let U=0,M=T.length;U<M;++U){let y=T[U],R=y.start,L=y.count;for(let G=R,B=R+L;G<B;G+=3)d(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let b=new O,S=new O,w=new O,C=new O;function I(U){w.fromBufferAttribute(s,U),C.copy(w);let M=o[U];b.copy(M),b.sub(w.multiplyScalar(w.dot(M))).normalize(),S.crossVectors(C,M);let R=S.dot(c[U])<0?-1:1;a.setXYZW(U,b.x,b.y,b.z,R)}for(let U=0,M=T.length;U<M;++U){let y=T[U],R=y.start,L=y.count;for(let G=R,B=R+L;G<B;G+=3)I(e.getX(G+0)),I(e.getX(G+1)),I(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new O,r=new O,a=new O,o=new O,c=new O,l=new O,h=new O,u=new O;if(e)for(let f=0,p=e.count;f<p;f+=3){let _=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h),p=0,_=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*h;for(let d=0;d<h;d++)f[_++]=l[p++]}return new At(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let f=l[h],p=e(f,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$o=new nt,kn=new $s,Ps=new Pn,Jo=new O,Is=new O,Ls=new O,Ds=new O,Da=new O,Ns=new O,Ko=new O,Us=new O,vt=class extends ht{constructor(e=new Xt,t=new Ki){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ns.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Da.fromBufferAttribute(u,e),a?Ns.addScaledVector(Da,h):Ns.addScaledVector(Da.sub(t),h))}t.add(Ns)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(r),kn.copy(e.ray).recast(e.near),!(Ps.containsPoint(kn.origin)===!1&&(kn.intersectSphere(Ps,Jo)===null||kn.origin.distanceToSquared(Jo)>(e.far-e.near)**2))&&($o.copy(r).invert(),kn.copy(e.ray).applyMatrix4($o),!(n.boundingBox!==null&&kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,kn)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){let m=f[_],d=a[m.materialIndex],T=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=T,w=b;S<w;S+=3){let C=o.getX(S),I=o.getX(S+1),U=o.getX(S+2);s=Fs(this,d,e,n,l,h,u,C,I,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=_,d=v;m<d;m+=3){let T=o.getX(m),b=o.getX(m+1),S=o.getX(m+2);s=Fs(this,a,e,n,l,h,u,T,b,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){let m=f[_],d=a[m.materialIndex],T=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=T,w=b;S<w;S+=3){let C=S,I=S+1,U=S+2;s=Fs(this,d,e,n,l,h,u,C,I,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=_,d=v;m<d;m+=3){let T=m,b=m+1,S=m+2;s=Fs(this,a,e,n,l,h,u,T,b,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function _h(i,e,t,n,s,r,a,o){let c;if(e.side===Tt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===dn,o),c===null)return null;Us.copy(o),Us.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Us);return l<t.near||l>t.far?null:{distance:l,point:Us.clone(),object:i}}function Fs(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Is),i.getVertexPosition(c,Ls),i.getVertexPosition(l,Ds);let h=_h(i,e,t,n,Is,Ls,Ds,Ko);if(h){let u=new O;An.getBarycoord(Ko,Is,Ls,Ds,u),s&&(h.uv=An.getInterpolatedAttribute(s,o,c,l,u,new Ve)),r&&(h.uv1=An.getInterpolatedAttribute(r,o,c,l,u,new Ve)),a&&(h.normal=An.getInterpolatedAttribute(a,o,c,l,u,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new O,materialIndex:0};An.getNormal(Is,Ls,Ds,f.normal),h.face=f,h.barycoord=u}return h}var mn=class i extends Xt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],f=0,p=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ct(l,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(u,2));function _(v,m,d,T,b,S,w,C,I,U,M){let y=S/I,R=w/U,L=S/2,G=w/2,B=C/2,k=I+1,H=U+1,te=0,W=0,re=new O;for(let ce=0;ce<H;ce++){let Se=ce*R-G;for(let Fe=0;Fe<k;Fe++){let $e=Fe*y-L;re[v]=$e*T,re[m]=Se*b,re[d]=B,l.push(re.x,re.y,re.z),re[v]=0,re[m]=0,re[d]=C>0?1:-1,h.push(re.x,re.y,re.z),u.push(Fe/I),u.push(1-ce/U),te+=1}}for(let ce=0;ce<U;ce++)for(let Se=0;Se<I;Se++){let Fe=f+Se+k*ce,$e=f+Se+k*(ce+1),je=f+(Se+1)+k*(ce+1),We=f+(Se+1)+k*ce;c.push(Fe,$e,We),c.push($e,je,We),W+=6}o.addGroup(p,W,M),p+=W,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Jn(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Mt(i){let e={};for(let t=0;t<i.length;t++){let n=Jn(i[t]);for(let s in n)e[s]=n[s]}return e}function xh(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ho(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}var Yl={clone:Jn,merge:Mt},yh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qt=class extends In{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yh,this.fragmentShader=vh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Jn(e.uniforms),this.uniformsGroups=xh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},es=class extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=Vt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},wn=new O,Qo=new Ve,jo=new Ve,yt=class extends es{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=xi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Hi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xi*2*Math.atan(Math.tan(Hi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wn.x,wn.y).multiplyScalar(-e/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wn.x,wn.y).multiplyScalar(-e/wn.z)}getViewSize(e,t){return this.getViewBounds(e,Qo,jo),t.subVectors(jo,Qo)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Hi*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},di=-90,fi=1,Js=class extends ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new yt(di,fi,e,t);s.layers=this.layers,this.add(s);let r=new yt(di,fi,e,t);r.layers=this.layers,this.add(r);let a=new yt(di,fi,e,t);a.layers=this.layers,this.add(a);let o=new yt(di,fi,e,t);o.layers=this.layers,this.add(o);let c=new yt(di,fi,e,t);c.layers=this.layers,this.add(c);let l=new yt(di,fi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Vt)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Yi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},ts=class extends bt{constructor(e=[],t=Zn,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ks=class extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ts(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new mn(5,5,5),r=new qt({name:"CubemapFromEquirect",uniforms:Jn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tt,blending:gn});r.uniforms.tEquirect.value=t;let a=new vt(s,r),o=t.minFilter;return t.minFilter===Nn&&(t.minFilter=Ht),new Js(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Ot=class extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mh={type:"move"},Mi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),d=this._getHandJoint(l,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,_=.005;l.inputState.pinching&&f>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mh)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ot;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var ns=class extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wt,this.environmentIntensity=1,this.environmentRotation=new Wt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Qs=class extends bt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Ct,h=Ct,u,f){super(null,a,o,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var is=class extends At{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},pi=new nt,el=new nt,Os=[],tl=new jt,Sh=new nt,Gi=new vt,Vi=new Pn,qn=class extends vt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new is(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Sh)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new jt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,pi),tl.copy(e.boundingBox).applyMatrix4(pi),this.boundingBox.union(tl)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,pi),Vi.copy(e.boundingSphere).applyMatrix4(pi),this.boundingSphere.union(Vi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Gi.geometry=this.geometry,Gi.material=this.material,Gi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vi.copy(this.boundingSphere),Vi.applyMatrix4(n),e.ray.intersectsSphere(Vi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,pi),el.multiplyMatrices(n,pi),Gi.matrixWorld=el,Gi.raycast(e,Os);for(let a=0,o=Os.length;a<o;a++){let c=Os[a];c.instanceId=r,c.object=this,t.push(c)}Os.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new is(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qs(new Float32Array(s*this.count),s,this.count,Tr,$t));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Na=new O,Eh=new O,bh=new Le,Kt=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Na.subVectors(n,t).cross(Eh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Na),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||bh.getNormalMatrix(e),s=this.coplanarPoint(Na).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Gn=new Pn,Th=new Ve(.5,.5),Bs=new O,Si=class{constructor(e=new Kt,t=new Kt,n=new Kt,s=new Kt,r=new Kt,a=new Kt){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vt,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],p=r[7],_=r[8],v=r[9],m=r[10],d=r[11],T=r[12],b=r[13],S=r[14],w=r[15];if(s[0].setComponents(l-a,p-h,d-_,w-T).normalize(),s[1].setComponents(l+a,p+h,d+_,w+T).normalize(),s[2].setComponents(l+o,p+u,d+v,w+b).normalize(),s[3].setComponents(l-o,p-u,d-v,w-b).normalize(),n)s[4].setComponents(c,f,m,S).normalize(),s[5].setComponents(l-c,p-f,d-m,w-S).normalize();else if(s[4].setComponents(l-c,p-f,d-m,w-S).normalize(),t===Vt)s[5].setComponents(l+c,p+f,d+m,w+S).normalize();else if(t===Yi)s[5].setComponents(c,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(e){Gn.center.set(0,0,0);let t=Th.distanceTo(e.center);return Gn.radius=.7071067811865476+t,Gn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Bs.x=s.normal.x>0?e.max.x:e.min.x,Bs.y=s.normal.y>0?e.max.y:e.min.y,Bs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Bs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ss=class extends bt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},rs=class extends bt{constructor(e,t,n=Un,s,r,a,o=Ct,c=Ct,l,h=_i,u=1){if(h!==_i&&h!==Ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},as=class extends bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var en=class i extends Xt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],_=0,v=[],m=n/2,d=0;T(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new ct(u,3)),this.setAttribute("normal",new ct(f,3)),this.setAttribute("uv",new ct(p,2));function T(){let S=new O,w=new O,C=0,I=(t-e)/n;for(let U=0;U<=r;U++){let M=[],y=U/r,R=y*(t-e)+e;for(let L=0;L<=s;L++){let G=L/s,B=G*c+o,k=Math.sin(B),H=Math.cos(B);w.x=R*k,w.y=-y*n+m,w.z=R*H,u.push(w.x,w.y,w.z),S.set(k,I,H).normalize(),f.push(S.x,S.y,S.z),p.push(G,1-y),M.push(_++)}v.push(M)}for(let U=0;U<s;U++)for(let M=0;M<r;M++){let y=v[M][U],R=v[M+1][U],L=v[M+1][U+1],G=v[M][U+1];(e>0||M!==0)&&(h.push(y,R,G),C+=3),(t>0||M!==r-1)&&(h.push(R,L,G),C+=3)}l.addGroup(d,C,0),d+=C}function b(S){let w=_,C=new Ve,I=new O,U=0,M=S===!0?e:t,y=S===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,m*y,0),f.push(0,y,0),p.push(.5,.5),_++;let R=_;for(let L=0;L<=s;L++){let B=L/s*c+o,k=Math.cos(B),H=Math.sin(B);I.x=M*H,I.y=m*y,I.z=M*k,u.push(I.x,I.y,I.z),f.push(0,y,0),C.x=k*.5+.5,C.y=H*.5*y+.5,p.push(C.x,C.y),_++}for(let L=0;L<s;L++){let G=w+L,B=R+L;S===!0?h.push(B,B+1,G):h.push(B+1,B,G),U+=3}l.addGroup(d,U,S===!0?1:2),d+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var os=class i extends Xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,f=t/c,p=[],_=[],v=[],m=[];for(let d=0;d<h;d++){let T=d*f-a;for(let b=0;b<l;b++){let S=b*u-r;_.push(S,-T,0),v.push(0,0,1),m.push(b/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let T=0;T<o;T++){let b=T+l*d,S=T+l*(d+1),w=T+1+l*(d+1),C=T+1+l*d;p.push(b,S,C),p.push(S,w,C)}this.setIndex(p),this.setAttribute("position",new ct(_,3)),this.setAttribute("normal",new ct(v,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ei=class i extends Xt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new O,f=new O,p=[],_=[],v=[],m=[];for(let d=0;d<=n;d++){let T=[],b=d/n,S=0;d===0&&a===0?S=.5/t:d===n&&c===Math.PI&&(S=-.5/t);for(let w=0;w<=t;w++){let C=w/t;u.x=-e*Math.cos(s+C*r)*Math.sin(a+b*o),u.y=e*Math.cos(a+b*o),u.z=e*Math.sin(s+C*r)*Math.sin(a+b*o),_.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(C+S,1-b),T.push(l++)}h.push(T)}for(let d=0;d<n;d++)for(let T=0;T<t;T++){let b=h[d][T+1],S=h[d][T],w=h[d+1][T],C=h[d+1][T+1];(d!==0||a>0)&&p.push(b,S,C),(d!==n-1||c<Math.PI)&&p.push(S,w,C)}this.setIndex(p),this.setAttribute("position",new ct(_,3)),this.setAttribute("normal",new ct(v,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var bi=class i extends Xt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new O,u=new O,f=new O;for(let p=0;p<=n;p++)for(let _=0;_<=s;_++){let v=_/s*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(_/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=s;_++){let v=(s+1)*p+_-1,m=(s+1)*(p-1)+_-1,d=(s+1)*(p-1)+_,T=(s+1)*p+_;a.push(v,m,T),a.push(m,d,T)}this.setIndex(a),this.setAttribute("position",new ct(o,3)),this.setAttribute("normal",new ct(c,3)),this.setAttribute("uv",new ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Yt=class extends In{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=so,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var js=class extends In{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},er=class extends In{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function zs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function wh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Yn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},tr=class extends Yn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fa,endingEnd:Fa}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Oa:r=e,o=2*t-n;break;case Ba:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Oa:a=e,c=2*n-t;break;case Ba:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(n-t)/(s-t),v=_*_,m=v*_,d=-f*m+2*f*v-f*_,T=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*_+1,b=(-1-p)*m+(1.5+p)*v+.5*_,S=p*m-p*v;for(let w=0;w!==o;++w)r[w]=d*a[h+w]+T*a[l+w]+b*a[c+w]+S*a[u+w];return r}},nr=class extends Yn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*u+a[c+f]*h;return r}},ir=class extends Yn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Dt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=zs(t,this.TimeBufferType),this.values=zs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:zs(e.times,Array),values:zs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ir(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new nr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new tr(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Xi:t=this.InterpolantFactoryMethodDiscrete;break;case Xs:t=this.InterpolantFactoryMethodLinear;break;case ks:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xi;case this.InterpolantFactoryMethodLinear:return Xs;case this.InterpolantFactoryMethodSmooth:return ks}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&wh(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ks,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,f=u-n,p=u+n;for(let _=0;_!==n;++_){let v=t[u+_];if(v!==t[f+_]||v!==t[p+_]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Dt.prototype.ValueTypeName="";Dt.prototype.TimeBufferType=Float32Array;Dt.prototype.ValueBufferType=Float32Array;Dt.prototype.DefaultInterpolation=Xs;var Ln=class extends Dt{constructor(e,t,n){super(e,t,n)}};Ln.prototype.ValueTypeName="bool";Ln.prototype.ValueBufferType=Array;Ln.prototype.DefaultInterpolation=Xi;Ln.prototype.InterpolantFactoryMethodLinear=void 0;Ln.prototype.InterpolantFactoryMethodSmooth=void 0;var sr=class extends Dt{constructor(e,t,n,s){super(e,t,n,s)}};sr.prototype.ValueTypeName="color";var rr=class extends Dt{constructor(e,t,n,s){super(e,t,n,s)}};rr.prototype.ValueTypeName="number";var ar=class extends Yn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)pn.slerpFlat(r,0,a,l-o,a,l,c);return r}},ls=class extends Dt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ar(this.times,this.values,this.getValueSize(),e)}};ls.prototype.ValueTypeName="quaternion";ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Dn=class extends Dt{constructor(e,t,n){super(e,t,n)}};Dn.prototype.ValueTypeName="string";Dn.prototype.ValueBufferType=Array;Dn.prototype.DefaultInterpolation=Xi;Dn.prototype.InterpolantFactoryMethodLinear=void 0;Dn.prototype.InterpolantFactoryMethodSmooth=void 0;var or=class extends Dt{constructor(e,t,n,s){super(e,t,n,s)}};or.prototype.ValueTypeName="vector";var lr=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let p=l[u],_=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Zl=new lr,cr=class{constructor(e){this.manager=e!==void 0?e:Zl,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};cr.DEFAULT_MATERIAL_NAME="__DEFAULT";var cs=class extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},hs=class extends cs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ua=new nt,nl=new O,il=new O,Ga=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.mapType=Zt,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Si,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;nl.setFromMatrixPosition(e.matrixWorld),t.position.copy(nl),il.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(il),t.updateMatrixWorld(),Ua.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ua,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ua)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var us=class extends es{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Va=class extends Ga{constructor(){super(new us(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ti=class extends cs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new Va}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var hr=class extends yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var uo="\\[\\]\\.:\\/",Ah=new RegExp("["+uo+"]","g"),fo="[^"+uo+"]",Ch="[^"+uo.replace("\\.","")+"]",Rh=/((?:WC+[\/:])*)/.source.replace("WC",fo),Ph=/(WCOD+)?/.source.replace("WCOD",Ch),Ih=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fo),Lh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fo),Dh=new RegExp("^"+Rh+Ph+Ih+Lh+"$"),Nh=["material","materials","bones","map"],Ha=class{constructor(e,t,n){let s=n||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Qe=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ah,"")}static parseTrackName(e){let t=Dh.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Nh.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Qe.Composite=Ha;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ym=new Float32Array(1);function po(i,e,t,n){let s=Uh(n);switch(t){case to:return i*e;case Tr:return i*e/s.components*s.byteLength;case wr:return i*e/s.components*s.byteLength;case io:return i*e*2/s.components*s.byteLength;case Ar:return i*e*2/s.components*s.byteLength;case no:return i*e*3/s.components*s.byteLength;case Bt:return i*e*4/s.components*s.byteLength;case Cr:return i*e*4/s.components*s.byteLength;case ps:case ms:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gs:case _s:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pr:case Lr:return Math.max(i,16)*Math.max(e,8)/4;case Rr:case Ir:return Math.max(i,8)*Math.max(e,8)/2;case Dr:case Nr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ur:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Or:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Br:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case zr:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case kr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Gr:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Vr:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Hr:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Wr:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Xr:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case qr:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Yr:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Zr:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case $r:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Jr:case Kr:case Qr:return Math.ceil(i/4)*Math.ceil(e/4)*16;case jr:case ea:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ta:case na:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Uh(i){switch(i){case Zt:case Ka:return{byteLength:1,components:1};case wi:case Qa:case Ai:return{byteLength:2,components:1};case Er:case br:return{byteLength:2,components:4};case Un:case Sr:case $t:return{byteLength:4,components:1};case ja:case eo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function xc(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Oh(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<u.length;p++){let _=u[f],v=u[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,u[f]=v)}u.length=f+1;for(let p=0,_=u.length;p<_;p++){let v=u[p];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Bh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Yh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$h=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Kh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,eu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,su=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ru=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,au=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ou=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,du=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pu="gl_FragColor = linearToOutputTexel( gl_FragColor );",mu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_u=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Mu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Su=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Au=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ru=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Pu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Iu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Du=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Fu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ou=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ku=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Yu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$u=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ju=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ku=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ju=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ed=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,td=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ad=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,od=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ld=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ud=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,fd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,md=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_d=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,vd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Md=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ed=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Td=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ad=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Id=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ld=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ud=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Fd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Od=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Xd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$d=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ef=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,af=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,of=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,df=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ff=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_f=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:Bh,alphahash_pars_fragment:zh,alphamap_fragment:kh,alphamap_pars_fragment:Gh,alphatest_fragment:Vh,alphatest_pars_fragment:Hh,aomap_fragment:Wh,aomap_pars_fragment:Xh,batching_pars_vertex:qh,batching_vertex:Yh,begin_vertex:Zh,beginnormal_vertex:$h,bsdfs:Jh,iridescence_fragment:Kh,bumpmap_pars_fragment:Qh,clipping_planes_fragment:jh,clipping_planes_pars_fragment:eu,clipping_planes_pars_vertex:tu,clipping_planes_vertex:nu,color_fragment:iu,color_pars_fragment:su,color_pars_vertex:ru,color_vertex:au,common:ou,cube_uv_reflection_fragment:lu,defaultnormal_vertex:cu,displacementmap_pars_vertex:hu,displacementmap_vertex:uu,emissivemap_fragment:du,emissivemap_pars_fragment:fu,colorspace_fragment:pu,colorspace_pars_fragment:mu,envmap_fragment:gu,envmap_common_pars_fragment:_u,envmap_pars_fragment:xu,envmap_pars_vertex:yu,envmap_physical_pars_fragment:Pu,envmap_vertex:vu,fog_vertex:Mu,fog_pars_vertex:Su,fog_fragment:Eu,fog_pars_fragment:bu,gradientmap_pars_fragment:Tu,lightmap_pars_fragment:wu,lights_lambert_fragment:Au,lights_lambert_pars_fragment:Cu,lights_pars_begin:Ru,lights_toon_fragment:Iu,lights_toon_pars_fragment:Lu,lights_phong_fragment:Du,lights_phong_pars_fragment:Nu,lights_physical_fragment:Uu,lights_physical_pars_fragment:Fu,lights_fragment_begin:Ou,lights_fragment_maps:Bu,lights_fragment_end:zu,logdepthbuf_fragment:ku,logdepthbuf_pars_fragment:Gu,logdepthbuf_pars_vertex:Vu,logdepthbuf_vertex:Hu,map_fragment:Wu,map_pars_fragment:Xu,map_particle_fragment:qu,map_particle_pars_fragment:Yu,metalnessmap_fragment:Zu,metalnessmap_pars_fragment:$u,morphinstance_vertex:Ju,morphcolor_vertex:Ku,morphnormal_vertex:Qu,morphtarget_pars_vertex:ju,morphtarget_vertex:ed,normal_fragment_begin:td,normal_fragment_maps:nd,normal_pars_fragment:id,normal_pars_vertex:sd,normal_vertex:rd,normalmap_pars_fragment:ad,clearcoat_normal_fragment_begin:od,clearcoat_normal_fragment_maps:ld,clearcoat_pars_fragment:cd,iridescence_pars_fragment:hd,opaque_fragment:ud,packing:dd,premultiplied_alpha_fragment:fd,project_vertex:pd,dithering_fragment:md,dithering_pars_fragment:gd,roughnessmap_fragment:_d,roughnessmap_pars_fragment:xd,shadowmap_pars_fragment:yd,shadowmap_pars_vertex:vd,shadowmap_vertex:Md,shadowmask_pars_fragment:Sd,skinbase_vertex:Ed,skinning_pars_vertex:bd,skinning_vertex:Td,skinnormal_vertex:wd,specularmap_fragment:Ad,specularmap_pars_fragment:Cd,tonemapping_fragment:Rd,tonemapping_pars_fragment:Pd,transmission_fragment:Id,transmission_pars_fragment:Ld,uv_pars_fragment:Dd,uv_pars_vertex:Nd,uv_vertex:Ud,worldpos_vertex:Fd,background_vert:Od,background_frag:Bd,backgroundCube_vert:zd,backgroundCube_frag:kd,cube_vert:Gd,cube_frag:Vd,depth_vert:Hd,depth_frag:Wd,distanceRGBA_vert:Xd,distanceRGBA_frag:qd,equirect_vert:Yd,equirect_frag:Zd,linedashed_vert:$d,linedashed_frag:Jd,meshbasic_vert:Kd,meshbasic_frag:Qd,meshlambert_vert:jd,meshlambert_frag:ef,meshmatcap_vert:tf,meshmatcap_frag:nf,meshnormal_vert:sf,meshnormal_frag:rf,meshphong_vert:af,meshphong_frag:of,meshphysical_vert:lf,meshphysical_frag:cf,meshtoon_vert:hf,meshtoon_frag:uf,points_vert:df,points_frag:ff,shadow_vert:pf,shadow_frag:mf,sprite_vert:gf,sprite_frag:_f},se={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},sn={basic:{uniforms:Mt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Mt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Mt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Mt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Mt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Mt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Mt([se.points,se.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Mt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Mt([se.common,se.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Mt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Mt([se.sprite,se.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Mt([se.common,se.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Mt([se.lights,se.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};sn.physical={uniforms:Mt([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};var sa={r:0,b:0,g:0},Kn=new Wt,xf=new nt;function yf(i,e,t,n,s,r,a){let o=new ze(0),c=r===!0?0:1,l,h,u=null,f=0,p=null;function _(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?t:e).get(S)),S}function v(b){let S=!1,w=_(b);w===null?d(o,c):w&&w.isColor&&(d(w,1),S=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,S){let w=_(S);w&&(w.isCubeTexture||w.mapping===ds)?(h===void 0&&(h=new vt(new mn(1,1,1),new qt({name:"BackgroundCubeMaterial",uniforms:Jn(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,I,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Kn.copy(S.backgroundRotation),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(xf.makeRotationFromEuler(Kn)),h.material.toneMapped=Ge.getTransfer(w.colorSpace)!==qe,(u!==w||f!==w.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=w,f=w.version,p=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new vt(new os(2,2),new qt({name:"BackgroundMaterial",uniforms:Jn(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Ge.getTransfer(w.colorSpace)!==qe,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||f!==w.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=w,f=w.version,p=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function d(b,S){b.getRGB(sa,ho(i)),n.buffers.color.setClear(sa.r,sa.g,sa.b,S,a)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,S=1){o.set(b),c=S,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,d(o,c)},render:v,addToRenderList:m,dispose:T}}function vf(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(y,R,L,G,B){let k=!1,H=u(G,L,R);r!==H&&(r=H,l(r.object)),k=p(y,G,L,B),k&&_(y,G,L,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,S(y,R,L,G),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,R,L){let G=L.wireframe===!0,B=n[y.id];B===void 0&&(B={},n[y.id]=B);let k=B[R.id];k===void 0&&(k={},B[R.id]=k);let H=k[G];return H===void 0&&(H=f(c()),k[G]=H),H}function f(y){let R=[],L=[],G=[];for(let B=0;B<t;B++)R[B]=0,L[B]=0,G[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:L,attributeDivisors:G,object:y,attributes:{},index:null}}function p(y,R,L,G){let B=r.attributes,k=R.attributes,H=0,te=L.getAttributes();for(let W in te)if(te[W].location>=0){let ce=B[W],Se=k[W];if(Se===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(Se=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(Se=y.instanceColor)),ce===void 0||ce.attribute!==Se||Se&&ce.data!==Se.data)return!0;H++}return r.attributesNum!==H||r.index!==G}function _(y,R,L,G){let B={},k=R.attributes,H=0,te=L.getAttributes();for(let W in te)if(te[W].location>=0){let ce=k[W];ce===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(ce=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(ce=y.instanceColor));let Se={};Se.attribute=ce,ce&&ce.data&&(Se.data=ce.data),B[W]=Se,H++}r.attributes=B,r.attributesNum=H,r.index=G}function v(){let y=r.newAttributes;for(let R=0,L=y.length;R<L;R++)y[R]=0}function m(y){d(y,0)}function d(y,R){let L=r.newAttributes,G=r.enabledAttributes,B=r.attributeDivisors;L[y]=1,G[y]===0&&(i.enableVertexAttribArray(y),G[y]=1),B[y]!==R&&(i.vertexAttribDivisor(y,R),B[y]=R)}function T(){let y=r.newAttributes,R=r.enabledAttributes;for(let L=0,G=R.length;L<G;L++)R[L]!==y[L]&&(i.disableVertexAttribArray(L),R[L]=0)}function b(y,R,L,G,B,k,H){H===!0?i.vertexAttribIPointer(y,R,L,B,k):i.vertexAttribPointer(y,R,L,G,B,k)}function S(y,R,L,G){v();let B=G.attributes,k=L.getAttributes(),H=R.defaultAttributeValues;for(let te in k){let W=k[te];if(W.location>=0){let re=B[te];if(re===void 0&&(te==="instanceMatrix"&&y.instanceMatrix&&(re=y.instanceMatrix),te==="instanceColor"&&y.instanceColor&&(re=y.instanceColor)),re!==void 0){let ce=re.normalized,Se=re.itemSize,Fe=e.get(re);if(Fe===void 0)continue;let $e=Fe.buffer,je=Fe.type,We=Fe.bytesPerElement,Y=je===i.INT||je===i.UNSIGNED_INT||re.gpuType===Sr;if(re.isInterleavedBufferAttribute){let J=re.data,de=J.stride,Re=re.offset;if(J.isInstancedInterleavedBuffer){for(let Me=0;Me<W.locationSize;Me++)d(W.location+Me,J.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Me=0;Me<W.locationSize;Me++)m(W.location+Me);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let Me=0;Me<W.locationSize;Me++)b(W.location+Me,Se/W.locationSize,je,ce,de*We,(Re+Se/W.locationSize*Me)*We,Y)}else{if(re.isInstancedBufferAttribute){for(let J=0;J<W.locationSize;J++)d(W.location+J,re.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let J=0;J<W.locationSize;J++)m(W.location+J);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let J=0;J<W.locationSize;J++)b(W.location+J,Se/W.locationSize,je,ce,Se*We,Se/W.locationSize*J*We,Y)}}else if(H!==void 0){let ce=H[te];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(W.location,ce);break;case 3:i.vertexAttrib3fv(W.location,ce);break;case 4:i.vertexAttrib4fv(W.location,ce);break;default:i.vertexAttrib1fv(W.location,ce)}}}}T()}function w(){U();for(let y in n){let R=n[y];for(let L in R){let G=R[L];for(let B in G)h(G[B].object),delete G[B];delete R[L]}delete n[y]}}function C(y){if(n[y.id]===void 0)return;let R=n[y.id];for(let L in R){let G=R[L];for(let B in G)h(G[B].object),delete G[B];delete R[L]}delete n[y.id]}function I(y){for(let R in n){let L=n[R];if(L[y.id]===void 0)continue;let G=L[y.id];for(let B in G)h(G[B].object),delete G[B];delete L[y.id]}}function U(){M(),a=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function Mf(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_];t.update(p,n,1)}function c(l,h,u,f){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)a(l[_],h[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let _=0;for(let v=0;v<u;v++)_+=h[v]*f[v];t.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Sf(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==Bt&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){let U=I===Ai&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Zt&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==$t&&!U)}function c(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=_>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:w,maxSamples:C}}function Ef(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Kt,o=new Le,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let _=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||_===null||_.length===0||r&&!m)r?h(null):l();else{let T=r?0:n,b=T*4,S=d.clippingState||null;c.value=S,S=h(_,f,b,p);for(let w=0;w!==b;++w)S[w]=t[w];d.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,_){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=c.value,_!==!0||m===null){let d=p+v*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,S=p;b!==v;++b,S+=4)a.copy(u[b]).applyMatrix4(T,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function bf(i){let e=new WeakMap;function t(a,o){return o===yr?a.mapping=Zn:o===vr&&(a.mapping=$n),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===yr||o===vr)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Ks(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Li=4,$l=[.125,.215,.35,.446,.526,.582],ei=20,mo=new us,Jl=new ze,go=null,_o=0,xo=0,yo=!1,jn=(1+Math.sqrt(5))/2,Ii=1/jn,Kl=[new O(-jn,Ii,0),new O(jn,Ii,0),new O(-Ii,0,jn),new O(Ii,0,jn),new O(0,jn,-Ii),new O(0,jn,Ii),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],Tf=new O,oa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Tf}=r;go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(go,_o,xo),this._renderer.xr.enabled=yo,e.scissorTest=!1,ra(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zn||e.mapping===$n?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:Ai,format:Bt,colorSpace:Xn,depthBuffer:!1},s=Ql(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ql(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wf(r)),this._blurMaterial=Af(r,e,t)}return s}_compileMaterial(e){let t=new vt(this._lodPlanes[0],e);this._renderer.compile(t,mo)}_sceneToCubeUV(e,t,n,s,r){let c=new yt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(Jl),u.toneMapping=_n,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let v=new Ki({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1}),m=new vt(new mn,v),d=!1,T=e.background;T?T.isColor&&(v.color.copy(T),e.background=null,d=!0):(v.color.copy(Jl),d=!0);for(let b=0;b<6;b++){let S=b%3;S===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[b],r.y,r.z)):S===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[b]));let w=this._cubeSize;ra(s,S*w,b>2?w:0,w,w),u.setRenderTarget(s),d&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=T}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Zn||e.mapping===$n;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jl());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new vt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;ra(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,mo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Kl[(s-r-1)%Kl.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new vt(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ei-1),v=r/_,m=isFinite(r)?1+Math.floor(h*v):ei;m>ei&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ei}`);let d=[],T=0;for(let I=0;I<ei;++I){let U=I/v,M=Math.exp(-U*U/2);d.push(M),I===0?T+=M:I<m&&(T+=2*M)}for(let I=0;I<d.length;I++)d[I]=d[I]/T;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:b}=this;f.dTheta.value=_,f.mipInt.value=b-n;let S=this._sizeLods[s],w=3*S*(s>b-Li?s-b+Li:0),C=4*(this._cubeSize-S);ra(t,w,C,3*S,2*S),c.setRenderTarget(t),c.render(u,mo)}};function wf(i){let e=[],t=[],n=[],s=i,r=i-Li+1+$l.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Li?c=$l[a-i+Li-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,v=3,m=2,d=1,T=new Float32Array(v*_*p),b=new Float32Array(m*_*p),S=new Float32Array(d*_*p);for(let C=0;C<p;C++){let I=C%3*2/3-1,U=C>2?0:-1,M=[I,U,0,I+2/3,U,0,I+2/3,U+1,0,I,U,0,I+2/3,U+1,0,I,U+1,0];T.set(M,v*_*C),b.set(f,m*_*C);let y=[C,C,C,C,C,C];S.set(y,d*_*C)}let w=new Xt;w.setAttribute("position",new At(T,v)),w.setAttribute("uv",new At(b,m)),w.setAttribute("faceIndex",new At(S,d)),e.push(w),s>Li&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ql(i,e,t){let n=new Qt(i,e,t);return n.texture.mapping=ds,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ra(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Af(i,e,t){let n=new Float32Array(ei),s=new O(0,1,0);return new qt({name:"SphericalGaussianBlur",defines:{n:ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function jl(){return new qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function ec(){return new qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Ro(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Cf(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===yr||c===vr,h=c===Zn||c===$n;if(l||h){let u=e.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new oa(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return l&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new oa(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Rf(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&yi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Pf(i,e,t,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function l(u){let f=[],p=u.index,_=u.attributes.position,v=0;if(p!==null){let T=p.array;v=p.version;for(let b=0,S=T.length;b<S;b+=3){let w=T[b+0],C=T[b+1],I=T[b+2];f.push(w,C,C,I,I,w)}}else if(_!==void 0){let T=_.array;v=_.version;for(let b=0,S=T.length/3-1;b<S;b+=3){let w=b+0,C=b+1,I=b+2;f.push(w,C,C,I,I,w)}}else return;let m=new(co(f)?ji:Qi)(f,1);m.version=v;let d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function If(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*a),t.update(p,n,1)}function l(f,p,_){_!==0&&(i.drawElementsInstanced(n,p,r,f*a,_),t.update(p,n,_))}function h(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];t.update(m,n,1)}function u(f,p,_,v){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/a,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,v,0,_);let d=0;for(let T=0;T<_;T++)d+=p[T]*v[T];t.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Lf(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Df(i,e,t){let n=new WeakMap,s=new rt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let M=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],b=0;p===!0&&(b=1),_===!0&&(b=2),v===!0&&(b=3);let S=o.attributes.position.count*b,w=1;S>e.maxTextureSize&&(w=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let C=new Float32Array(S*w*4*u),I=new $i(C,S,w,u);I.type=$t,I.needsUpdate=!0;let U=b*4;for(let y=0;y<u;y++){let R=m[y],L=d[y],G=T[y],B=S*w*4*y;for(let k=0;k<R.count;k++){let H=k*U;p===!0&&(s.fromBufferAttribute(R,k),C[B+H+0]=s.x,C[B+H+1]=s.y,C[B+H+2]=s.z,C[B+H+3]=0),_===!0&&(s.fromBufferAttribute(L,k),C[B+H+4]=s.x,C[B+H+5]=s.y,C[B+H+6]=s.z,C[B+H+7]=0),v===!0&&(s.fromBufferAttribute(G,k),C[B+H+8]=s.x,C[B+H+9]=s.y,C[B+H+10]=s.z,C[B+H+11]=G.itemSize===4?s.w:1)}}f={count:u,texture:I,size:new Ve(S,w)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<l.length;v++)p+=l[v];let _=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Nf(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var yc=new bt,tc=new rs(1,1),vc=new $i,Mc=new Zs,Sc=new ts,nc=[],ic=[],sc=new Float32Array(16),rc=new Float32Array(9),ac=new Float32Array(4);function Ni(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=nc[s];if(r===void 0&&(r=new Float32Array(s),nc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ca(i,e){let t=ic[e];t===void 0&&(t=new Int32Array(e),ic[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Uf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ff(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2fv(this.addr,e),dt(t,e)}}function Of(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;i.uniform3fv(this.addr,e),dt(t,e)}}function Bf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4fv(this.addr,e),dt(t,e)}}function zf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ut(t,n))return;ac.set(n),i.uniformMatrix2fv(this.addr,!1,ac),dt(t,n)}}function kf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ut(t,n))return;rc.set(n),i.uniformMatrix3fv(this.addr,!1,rc),dt(t,n)}}function Gf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ut(t,n))return;sc.set(n),i.uniformMatrix4fv(this.addr,!1,sc),dt(t,n)}}function Vf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Hf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2iv(this.addr,e),dt(t,e)}}function Wf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;i.uniform3iv(this.addr,e),dt(t,e)}}function Xf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4iv(this.addr,e),dt(t,e)}}function qf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Yf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2uiv(this.addr,e),dt(t,e)}}function Zf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;i.uniform3uiv(this.addr,e),dt(t,e)}}function $f(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4uiv(this.addr,e),dt(t,e)}}function Jf(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(tc.compareFunction=ro,r=tc):r=yc,t.setTexture2D(e||r,s)}function Kf(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Mc,s)}function Qf(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Sc,s)}function jf(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||vc,s)}function ep(i){switch(i){case 5126:return Uf;case 35664:return Ff;case 35665:return Of;case 35666:return Bf;case 35674:return zf;case 35675:return kf;case 35676:return Gf;case 5124:case 35670:return Vf;case 35667:case 35671:return Hf;case 35668:case 35672:return Wf;case 35669:case 35673:return Xf;case 5125:return qf;case 36294:return Yf;case 36295:return Zf;case 36296:return $f;case 35678:case 36198:case 36298:case 36306:case 35682:return Jf;case 35679:case 36299:case 36307:return Kf;case 35680:case 36300:case 36308:case 36293:return Qf;case 36289:case 36303:case 36311:case 36292:return jf}}function tp(i,e){i.uniform1fv(this.addr,e)}function np(i,e){let t=Ni(e,this.size,2);i.uniform2fv(this.addr,t)}function ip(i,e){let t=Ni(e,this.size,3);i.uniform3fv(this.addr,t)}function sp(i,e){let t=Ni(e,this.size,4);i.uniform4fv(this.addr,t)}function rp(i,e){let t=Ni(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ap(i,e){let t=Ni(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function op(i,e){let t=Ni(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function lp(i,e){i.uniform1iv(this.addr,e)}function cp(i,e){i.uniform2iv(this.addr,e)}function hp(i,e){i.uniform3iv(this.addr,e)}function up(i,e){i.uniform4iv(this.addr,e)}function dp(i,e){i.uniform1uiv(this.addr,e)}function fp(i,e){i.uniform2uiv(this.addr,e)}function pp(i,e){i.uniform3uiv(this.addr,e)}function mp(i,e){i.uniform4uiv(this.addr,e)}function gp(i,e,t){let n=this.cache,s=e.length,r=ca(t,s);ut(n,r)||(i.uniform1iv(this.addr,r),dt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||yc,r[a])}function _p(i,e,t){let n=this.cache,s=e.length,r=ca(t,s);ut(n,r)||(i.uniform1iv(this.addr,r),dt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Mc,r[a])}function xp(i,e,t){let n=this.cache,s=e.length,r=ca(t,s);ut(n,r)||(i.uniform1iv(this.addr,r),dt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Sc,r[a])}function yp(i,e,t){let n=this.cache,s=e.length,r=ca(t,s);ut(n,r)||(i.uniform1iv(this.addr,r),dt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||vc,r[a])}function vp(i){switch(i){case 5126:return tp;case 35664:return np;case 35665:return ip;case 35666:return sp;case 35674:return rp;case 35675:return ap;case 35676:return op;case 5124:case 35670:return lp;case 35667:case 35671:return cp;case 35668:case 35672:return hp;case 35669:case 35673:return up;case 5125:return dp;case 36294:return fp;case 36295:return pp;case 36296:return mp;case 35678:case 36198:case 36298:case 36306:case 35682:return gp;case 35679:case 36299:case 36307:return _p;case 35680:case 36300:case 36308:case 36293:return xp;case 36289:case 36303:case 36311:case 36292:return yp}}var Mo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ep(t.type)}},So=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vp(t.type)}},Eo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},vo=/(\w+)(\])?(\[|\.)?/g;function oc(i,e){i.seq.push(e),i.map[e.id]=e}function Mp(i,e,t){let n=i.name,s=n.length;for(vo.lastIndex=0;;){let r=vo.exec(n),a=vo.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){oc(t,l===void 0?new Mo(o,i,e):new So(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Eo(o),oc(t,u)),t=u}}}var Di=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Mp(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function lc(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Sp=37297,Ep=0;function bp(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var cc=new Le;function Tp(i){Ge._getMatrix(cc,Ge.workingColorSpace,i);let e=`mat3( ${cc.elements.map(t=>t.toFixed(4))} )`;switch(Ge.getTransfer(i)){case qi:return[e,"LinearTransferOETF"];case qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function hc(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+bp(i.getShaderSource(e),o)}else return r}function wp(i,e){let t=Tp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ap(i,e){let t;switch(e){case Al:t="Linear";break;case Cl:t="Reinhard";break;case Rl:t="Cineon";break;case xr:t="ACESFilmic";break;case Il:t="AgX";break;case Ll:t="Neutral";break;case Pl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var aa=new O;function Cp(){Ge.getLuminanceCoefficients(aa);let i=aa.x.toFixed(4),e=aa.y.toFixed(4),t=aa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xs).join(`
`)}function Pp(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ip(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function xs(i){return i!==""}function uc(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Lp=/^[ \t]*#include +<([\w\d./]+)>/gm;function bo(i){return i.replace(Lp,Np)}var Dp=new Map;function Np(i,e){let t=Ue[e];if(t===void 0){let n=Dp.get(e);if(n!==void 0)t=Ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return bo(t)}var Up=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fc(i){return i.replace(Up,Fp)}function Fp(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Op(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xa?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===al?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===tn&&(e="SHADOWMAP_TYPE_VSM"),e}function Bp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Zn:case $n:e="ENVMAP_TYPE_CUBE";break;case ds:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case $n:e="ENVMAP_MODE_REFRACTION";break}return e}function kp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $a:e="ENVMAP_BLENDING_MULTIPLY";break;case Tl:e="ENVMAP_BLENDING_MIX";break;case wl:e="ENVMAP_BLENDING_ADD";break}return e}function Gp(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Vp(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Op(t),l=Bp(t),h=zp(t),u=kp(t),f=Gp(t),p=Rp(t),_=Pp(r),v=s.createProgram(),m,d,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(xs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(xs).join(`
`),d.length>0&&(d+=`
`)):(m=[pc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xs).join(`
`),d=[pc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_n?"#define TONE_MAPPING":"",t.toneMapping!==_n?Ue.tonemapping_pars_fragment:"",t.toneMapping!==_n?Ap("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,wp("linearToOutputTexel",t.outputColorSpace),Cp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xs).join(`
`)),a=bo(a),a=uc(a,t),a=dc(a,t),o=bo(o),o=uc(o,t),o=dc(o,t),a=fc(a),o=fc(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===ao?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ao?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let b=T+m+a,S=T+d+o,w=lc(s,s.VERTEX_SHADER,b),C=lc(s,s.FRAGMENT_SHADER,S);s.attachShader(v,w),s.attachShader(v,C),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function I(R){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(v)||"",G=s.getShaderInfoLog(w)||"",B=s.getShaderInfoLog(C)||"",k=L.trim(),H=G.trim(),te=B.trim(),W=!0,re=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,w,C);else{let ce=hc(s,w,"vertex"),Se=hc(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+k+`
`+ce+`
`+Se)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(H===""||te==="")&&(re=!1);re&&(R.diagnostics={runnable:W,programLog:k,vertexShader:{log:H,prefix:m},fragmentShader:{log:te,prefix:d}})}s.deleteShader(w),s.deleteShader(C),U=new Di(s,v),M=Ip(s,v)}let U;this.getUniforms=function(){return U===void 0&&I(this),U};let M;this.getAttributes=function(){return M===void 0&&I(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,Sp)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ep++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=C,this}var Hp=0,To=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new wo(e),t.set(e,n)),n}},wo=class{constructor(e){this.id=Hp++,this.code=e,this.usedTimes=0}};function Wp(i,e,t,n,s,r,a){let o=new Ji,c=new To,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,y,R,L,G){let B=L.fog,k=G.geometry,H=M.isMeshStandardMaterial?L.environment:null,te=(M.isMeshStandardMaterial?t:e).get(M.envMap||H),W=te&&te.mapping===ds?te.image.height:null,re=_[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let ce=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Se=ce!==void 0?ce.length:0,Fe=0;k.morphAttributes.position!==void 0&&(Fe=1),k.morphAttributes.normal!==void 0&&(Fe=2),k.morphAttributes.color!==void 0&&(Fe=3);let $e,je,We,Y;if(re){let Xe=sn[re];$e=Xe.vertexShader,je=Xe.fragmentShader}else $e=M.vertexShader,je=M.fragmentShader,c.update(M),We=c.getVertexShaderID(M),Y=c.getFragmentShaderID(M);let J=i.getRenderTarget(),de=i.state.buffers.depth.getReversed(),Re=G.isInstancedMesh===!0,Me=G.isBatchedMesh===!0,ke=!!M.map,mt=!!M.matcap,A=!!te,et=!!M.aoMap,Ie=!!M.lightMap,Ae=!!M.bumpMap,me=!!M.normalMap,tt=!!M.displacementMap,ge=!!M.emissiveMap,Ne=!!M.metalnessMap,ft=!!M.roughnessMap,ot=M.anisotropy>0,E=M.clearcoat>0,g=M.dispersion>0,F=M.iridescence>0,q=M.sheen>0,$=M.transmission>0,X=ot&&!!M.anisotropyMap,ve=E&&!!M.clearcoatMap,ne=E&&!!M.clearcoatNormalMap,_e=E&&!!M.clearcoatRoughnessMap,xe=F&&!!M.iridescenceMap,j=F&&!!M.iridescenceThicknessMap,le=q&&!!M.sheenColorMap,we=q&&!!M.sheenRoughnessMap,ye=!!M.specularMap,ae=!!M.specularColorMap,De=!!M.specularIntensityMap,P=$&&!!M.transmissionMap,ee=$&&!!M.thicknessMap,ie=!!M.gradientMap,ue=!!M.alphaMap,K=M.alphaTest>0,Z=!!M.alphaHash,pe=!!M.extensions,Pe=_n;M.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Pe=i.toneMapping);let Je={shaderID:re,shaderType:M.type,shaderName:M.name,vertexShader:$e,fragmentShader:je,defines:M.defines,customVertexShaderID:We,customFragmentShaderID:Y,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Me,batchingColor:Me&&G._colorsTexture!==null,instancing:Re,instancingColor:Re&&G.instanceColor!==null,instancingMorph:Re&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Xn,alphaToCoverage:!!M.alphaToCoverage,map:ke,matcap:mt,envMap:A,envMapMode:A&&te.mapping,envMapCubeUVHeight:W,aoMap:et,lightMap:Ie,bumpMap:Ae,normalMap:me,displacementMap:f&&tt,emissiveMap:ge,normalMapObjectSpace:me&&M.normalMapType===Fl,normalMapTangentSpace:me&&M.normalMapType===so,metalnessMap:Ne,roughnessMap:ft,anisotropy:ot,anisotropyMap:X,clearcoat:E,clearcoatMap:ve,clearcoatNormalMap:ne,clearcoatRoughnessMap:_e,dispersion:g,iridescence:F,iridescenceMap:xe,iridescenceThicknessMap:j,sheen:q,sheenColorMap:le,sheenRoughnessMap:we,specularMap:ye,specularColorMap:ae,specularIntensityMap:De,transmission:$,transmissionMap:P,thicknessMap:ee,gradientMap:ie,opaque:M.transparent===!1&&M.blending===Hn&&M.alphaToCoverage===!1,alphaMap:ue,alphaTest:K,alphaHash:Z,combine:M.combine,mapUv:ke&&v(M.map.channel),aoMapUv:et&&v(M.aoMap.channel),lightMapUv:Ie&&v(M.lightMap.channel),bumpMapUv:Ae&&v(M.bumpMap.channel),normalMapUv:me&&v(M.normalMap.channel),displacementMapUv:tt&&v(M.displacementMap.channel),emissiveMapUv:ge&&v(M.emissiveMap.channel),metalnessMapUv:Ne&&v(M.metalnessMap.channel),roughnessMapUv:ft&&v(M.roughnessMap.channel),anisotropyMapUv:X&&v(M.anisotropyMap.channel),clearcoatMapUv:ve&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:ne&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:j&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:le&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:we&&v(M.sheenRoughnessMap.channel),specularMapUv:ye&&v(M.specularMap.channel),specularColorMapUv:ae&&v(M.specularColorMap.channel),specularIntensityMapUv:De&&v(M.specularIntensityMap.channel),transmissionMapUv:P&&v(M.transmissionMap.channel),thicknessMapUv:ee&&v(M.thicknessMap.channel),alphaMapUv:ue&&v(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(me||ot),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!k.attributes.uv&&(ke||ue),fog:!!B,useFog:M.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:de,skinning:G.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Fe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pe,decodeVideoTexture:ke&&M.map.isVideoTexture===!0&&Ge.getTransfer(M.map.colorSpace)===qe,decodeVideoTextureEmissive:ge&&M.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(M.emissiveMap.colorSpace)===qe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===nn,flipSided:M.side===Tt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:pe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&M.extensions.multiDraw===!0||Me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Je.vertexUv1s=l.has(1),Je.vertexUv2s=l.has(2),Je.vertexUv3s=l.has(3),l.clear(),Je}function d(M){let y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(let R in M.defines)y.push(R),y.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(T(y,M),b(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function T(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function b(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function S(M){let y=_[M.type],R;if(y){let L=sn[y];R=Yl.clone(L.uniforms)}else R=M.uniforms;return R}function w(M,y){let R;for(let L=0,G=h.length;L<G;L++){let B=h[L];if(B.cacheKey===y){R=B,++R.usedTimes;break}}return R===void 0&&(R=new Vp(i,y,M,r),h.push(R)),R}function C(M){if(--M.usedTimes===0){let y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function I(M){c.remove(M)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:w,releaseProgram:C,releaseShaderCache:I,programs:h,dispose:U}}function Xp(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function qp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function mc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function gc(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,f,p,_,v,m){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:_,renderOrder:u.renderOrder,z:v,group:m},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=v,d.group=m),e++,d}function o(u,f,p,_,v,m){let d=a(u,f,p,_,v,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function c(u,f,p,_,v,m){let d=a(u,f,p,_,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function l(u,f){t.length>1&&t.sort(u||qp),n.length>1&&n.sort(f||mc),s.length>1&&s.sort(f||mc)}function h(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Yp(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new gc,i.set(n,[a])):s>=r.length?(a=new gc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Zp(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new ze};break;case"SpotLight":t={position:new O,direction:new O,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function $p(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Jp=0;function Kp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Qp(i){let e=new Zp,t=$p(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new O);let s=new O,r=new nt,a=new nt;function o(l){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,_=0,v=0,m=0,d=0,T=0,b=0,S=0,w=0,C=0,I=0;l.sort(Kp);for(let M=0,y=l.length;M<y;M++){let R=l[M],L=R.color,G=R.intensity,B=R.distance,k=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=L.r*G,u+=L.g*G,f+=L.b*G;else if(R.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(R.sh.coefficients[H],G);I++}else if(R.isDirectionalLight){let H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let te=R.shadow,W=t.get(R);W.shadowIntensity=te.intensity,W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=k,n.directionalShadowMatrix[p]=R.shadow.matrix,T++}n.directional[p]=H,p++}else if(R.isSpotLight){let H=e.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(L).multiplyScalar(G),H.distance=B,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,n.spot[v]=H;let te=R.shadow;if(R.map&&(n.spotLightMap[w]=R.map,w++,te.updateMatrices(R),R.castShadow&&C++),n.spotLightMatrix[v]=te.matrix,R.castShadow){let W=t.get(R);W.shadowIntensity=te.intensity,W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=k,S++}v++}else if(R.isRectAreaLight){let H=e.get(R);H.color.copy(L).multiplyScalar(G),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=H,m++}else if(R.isPointLight){let H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){let te=R.shadow,W=t.get(R);W.shadowIntensity=te.intensity,W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,W.shadowCameraNear=te.camera.near,W.shadowCameraFar=te.camera.far,n.pointShadow[_]=W,n.pointShadowMap[_]=k,n.pointShadowMatrix[_]=R.shadow.matrix,b++}n.point[_]=H,_++}else if(R.isHemisphereLight){let H=e.get(R);H.skyColor.copy(R.color).multiplyScalar(G),H.groundColor.copy(R.groundColor).multiplyScalar(G),n.hemi[d]=H,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=se.LTC_FLOAT_1,n.rectAreaLTC2=se.LTC_FLOAT_2):(n.rectAreaLTC1=se.LTC_HALF_1,n.rectAreaLTC2=se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let U=n.hash;(U.directionalLength!==p||U.pointLength!==_||U.spotLength!==v||U.rectAreaLength!==m||U.hemiLength!==d||U.numDirectionalShadows!==T||U.numPointShadows!==b||U.numSpotShadows!==S||U.numSpotMaps!==w||U.numLightProbes!==I)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=S+w-C,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=I,U.directionalLength=p,U.pointLength=_,U.spotLength=v,U.rectAreaLength=m,U.hemiLength=d,U.numDirectionalShadows=T,U.numPointShadows=b,U.numSpotShadows=S,U.numSpotMaps=w,U.numLightProbes=I,n.version=Jp++)}function c(l,h){let u=0,f=0,p=0,_=0,v=0,m=h.matrixWorldInverse;for(let d=0,T=l.length;d<T;d++){let b=l[d];if(b.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(b.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(b.isRectAreaLight){let S=n.rectArea[_];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){let S=n.hemi[v];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:n}}function _c(i){let e=new Qp(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function jp(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new _c(i),e.set(s,[o])):r>=a.length?(o=new _c(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var em=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nm(i,e,t){let n=new Si,s=new Ve,r=new Ve,a=new rt,o=new js({depthPacking:Ul}),c=new er,l={},h=t.maxTextureSize,u={[dn]:Tt,[Tt]:dn,[nn]:nn},f=new qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:em,fragmentShader:tm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let _=new Xt;_.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new vt(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xa;let d=this.type;this.render=function(C,I,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let M=i.getRenderTarget(),y=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),L=i.state;L.setBlending(gn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let G=d!==tn&&this.type===tn,B=d===tn&&this.type!==tn;for(let k=0,H=C.length;k<H;k++){let te=C[k],W=te.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let re=W.getFrameExtents();if(s.multiply(re),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/re.x),s.x=r.x*re.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/re.y),s.y=r.y*re.y,W.mapSize.y=r.y)),W.map===null||G===!0||B===!0){let Se=this.type!==tn?{minFilter:Ct,magFilter:Ct}:{};W.map!==null&&W.map.dispose(),W.map=new Qt(s.x,s.y,Se),W.map.texture.name=te.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let ce=W.getViewportCount();for(let Se=0;Se<ce;Se++){let Fe=W.getViewport(Se);a.set(r.x*Fe.x,r.y*Fe.y,r.x*Fe.z,r.y*Fe.w),L.viewport(a),W.updateMatrices(te,Se),n=W.getFrustum(),S(I,U,W.camera,te,this.type)}W.isPointLightShadow!==!0&&this.type===tn&&T(W,U),W.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(M,y,R)};function T(C,I){let U=e.update(v);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Qt(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(I,null,U,f,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(I,null,U,p,v,null)}function b(C,I,U,M){let y=null,R=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)y=R;else if(y=U.isPointLight===!0?c:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let L=y.uuid,G=I.uuid,B=l[L];B===void 0&&(B={},l[L]=B);let k=B[G];k===void 0&&(k=y.clone(),B[G]=k,I.addEventListener("dispose",w)),y=k}if(y.visible=I.visible,y.wireframe=I.wireframe,M===tn?y.side=I.shadowSide!==null?I.shadowSide:I.side:y.side=I.shadowSide!==null?I.shadowSide:u[I.side],y.alphaMap=I.alphaMap,y.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,y.map=I.map,y.clipShadows=I.clipShadows,y.clippingPlanes=I.clippingPlanes,y.clipIntersection=I.clipIntersection,y.displacementMap=I.displacementMap,y.displacementScale=I.displacementScale,y.displacementBias=I.displacementBias,y.wireframeLinewidth=I.wireframeLinewidth,y.linewidth=I.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let L=i.properties.get(y);L.light=U}return y}function S(C,I,U,M,y){if(C.visible===!1)return;if(C.layers.test(I.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===tn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);let G=e.update(C),B=C.material;if(Array.isArray(B)){let k=G.groups;for(let H=0,te=k.length;H<te;H++){let W=k[H],re=B[W.materialIndex];if(re&&re.visible){let ce=b(C,re,M,y);C.onBeforeShadow(i,C,I,U,G,ce,W),i.renderBufferDirect(U,null,G,ce,C,W),C.onAfterShadow(i,C,I,U,G,ce,W)}}}else if(B.visible){let k=b(C,B,M,y);C.onBeforeShadow(i,C,I,U,G,k,null),i.renderBufferDirect(U,null,G,k,C,null),C.onAfterShadow(i,C,I,U,G,k,null)}}let L=C.children;for(let G=0,B=L.length;G<B;G++)S(L[G],I,U,M,y)}function w(C){C.target.removeEventListener("dispose",w);for(let U in l){let M=l[U],y=C.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}var im={[ur]:dr,[fr]:gr,[pr]:_r,[Wn]:mr,[dr]:ur,[gr]:fr,[_r]:pr,[mr]:Wn};function sm(i,e){function t(){let P=!1,ee=new rt,ie=null,ue=new rt(0,0,0,0);return{setMask:function(K){ie!==K&&!P&&(i.colorMask(K,K,K,K),ie=K)},setLocked:function(K){P=K},setClear:function(K,Z,pe,Pe,Je){Je===!0&&(K*=Pe,Z*=Pe,pe*=Pe),ee.set(K,Z,pe,Pe),ue.equals(ee)===!1&&(i.clearColor(K,Z,pe,Pe),ue.copy(ee))},reset:function(){P=!1,ie=null,ue.set(-1,0,0,0)}}}function n(){let P=!1,ee=!1,ie=null,ue=null,K=null;return{setReversed:function(Z){if(ee!==Z){let pe=e.get("EXT_clip_control");Z?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),ee=Z;let Pe=K;K=null,this.setClear(Pe)}},getReversed:function(){return ee},setTest:function(Z){Z?J(i.DEPTH_TEST):de(i.DEPTH_TEST)},setMask:function(Z){ie!==Z&&!P&&(i.depthMask(Z),ie=Z)},setFunc:function(Z){if(ee&&(Z=im[Z]),ue!==Z){switch(Z){case ur:i.depthFunc(i.NEVER);break;case dr:i.depthFunc(i.ALWAYS);break;case fr:i.depthFunc(i.LESS);break;case Wn:i.depthFunc(i.LEQUAL);break;case pr:i.depthFunc(i.EQUAL);break;case mr:i.depthFunc(i.GEQUAL);break;case gr:i.depthFunc(i.GREATER);break;case _r:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=Z}},setLocked:function(Z){P=Z},setClear:function(Z){K!==Z&&(ee&&(Z=1-Z),i.clearDepth(Z),K=Z)},reset:function(){P=!1,ie=null,ue=null,K=null,ee=!1}}}function s(){let P=!1,ee=null,ie=null,ue=null,K=null,Z=null,pe=null,Pe=null,Je=null;return{setTest:function(Xe){P||(Xe?J(i.STENCIL_TEST):de(i.STENCIL_TEST))},setMask:function(Xe){ee!==Xe&&!P&&(i.stencilMask(Xe),ee=Xe)},setFunc:function(Xe,rn,Jt){(ie!==Xe||ue!==rn||K!==Jt)&&(i.stencilFunc(Xe,rn,Jt),ie=Xe,ue=rn,K=Jt)},setOp:function(Xe,rn,Jt){(Z!==Xe||pe!==rn||Pe!==Jt)&&(i.stencilOp(Xe,rn,Jt),Z=Xe,pe=rn,Pe=Jt)},setLocked:function(Xe){P=Xe},setClear:function(Xe){Je!==Xe&&(i.clearStencil(Xe),Je=Xe)},reset:function(){P=!1,ee=null,ie=null,ue=null,K=null,Z=null,pe=null,Pe=null,Je=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,p=[],_=null,v=!1,m=null,d=null,T=null,b=null,S=null,w=null,C=null,I=new ze(0,0,0),U=0,M=!1,y=null,R=null,L=null,G=null,B=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,te=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(W)[1]),H=te>=1):W.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),H=te>=2);let re=null,ce={},Se=i.getParameter(i.SCISSOR_BOX),Fe=i.getParameter(i.VIEWPORT),$e=new rt().fromArray(Se),je=new rt().fromArray(Fe);function We(P,ee,ie,ue){let K=new Uint8Array(4),Z=i.createTexture();i.bindTexture(P,Z),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let pe=0;pe<ie;pe++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(ee,0,i.RGBA,1,1,ue,0,i.RGBA,i.UNSIGNED_BYTE,K):i.texImage2D(ee+pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,K);return Z}let Y={};Y[i.TEXTURE_2D]=We(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=We(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=We(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=We(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(Wn),Ae(!1),me(Wa),J(i.CULL_FACE),et(gn);function J(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function de(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Re(P,ee){return u[P]!==ee?(i.bindFramebuffer(P,ee),u[P]=ee,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ee),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ee),!0):!1}function Me(P,ee){let ie=p,ue=!1;if(P){ie=f.get(ee),ie===void 0&&(ie=[],f.set(ee,ie));let K=P.textures;if(ie.length!==K.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,pe=K.length;Z<pe;Z++)ie[Z]=i.COLOR_ATTACHMENT0+Z;ie.length=K.length,ue=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,ue=!0);ue&&i.drawBuffers(ie)}function ke(P){return _!==P?(i.useProgram(P),_=P,!0):!1}let mt={[Rn]:i.FUNC_ADD,[ll]:i.FUNC_SUBTRACT,[cl]:i.FUNC_REVERSE_SUBTRACT};mt[hl]=i.MIN,mt[ul]=i.MAX;let A={[dl]:i.ZERO,[fl]:i.ONE,[pl]:i.SRC_COLOR,[Gs]:i.SRC_ALPHA,[vl]:i.SRC_ALPHA_SATURATE,[xl]:i.DST_COLOR,[gl]:i.DST_ALPHA,[ml]:i.ONE_MINUS_SRC_COLOR,[Vs]:i.ONE_MINUS_SRC_ALPHA,[yl]:i.ONE_MINUS_DST_COLOR,[_l]:i.ONE_MINUS_DST_ALPHA,[Ml]:i.CONSTANT_COLOR,[Sl]:i.ONE_MINUS_CONSTANT_COLOR,[El]:i.CONSTANT_ALPHA,[bl]:i.ONE_MINUS_CONSTANT_ALPHA};function et(P,ee,ie,ue,K,Z,pe,Pe,Je,Xe){if(P===gn){v===!0&&(de(i.BLEND),v=!1);return}if(v===!1&&(J(i.BLEND),v=!0),P!==ol){if(P!==m||Xe!==M){if((d!==Rn||S!==Rn)&&(i.blendEquation(i.FUNC_ADD),d=Rn,S=Rn),Xe)switch(P){case Hn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qa:i.blendFunc(i.ONE,i.ONE);break;case Ya:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Za:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Hn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ya:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Za:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}T=null,b=null,w=null,C=null,I.set(0,0,0),U=0,m=P,M=Xe}return}K=K||ee,Z=Z||ie,pe=pe||ue,(ee!==d||K!==S)&&(i.blendEquationSeparate(mt[ee],mt[K]),d=ee,S=K),(ie!==T||ue!==b||Z!==w||pe!==C)&&(i.blendFuncSeparate(A[ie],A[ue],A[Z],A[pe]),T=ie,b=ue,w=Z,C=pe),(Pe.equals(I)===!1||Je!==U)&&(i.blendColor(Pe.r,Pe.g,Pe.b,Je),I.copy(Pe),U=Je),m=P,M=!1}function Ie(P,ee){P.side===nn?de(i.CULL_FACE):J(i.CULL_FACE);let ie=P.side===Tt;ee&&(ie=!ie),Ae(ie),P.blending===Hn&&P.transparent===!1?et(gn):et(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let ue=P.stencilWrite;o.setTest(ue),ue&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ge(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):de(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(P){y!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),y=P)}function me(P){P!==sl?(J(i.CULL_FACE),P!==R&&(P===Wa?i.cullFace(i.BACK):P===rl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):de(i.CULL_FACE),R=P}function tt(P){P!==L&&(H&&i.lineWidth(P),L=P)}function ge(P,ee,ie){P?(J(i.POLYGON_OFFSET_FILL),(G!==ee||B!==ie)&&(i.polygonOffset(ee,ie),G=ee,B=ie)):de(i.POLYGON_OFFSET_FILL)}function Ne(P){P?J(i.SCISSOR_TEST):de(i.SCISSOR_TEST)}function ft(P){P===void 0&&(P=i.TEXTURE0+k-1),re!==P&&(i.activeTexture(P),re=P)}function ot(P,ee,ie){ie===void 0&&(re===null?ie=i.TEXTURE0+k-1:ie=re);let ue=ce[ie];ue===void 0&&(ue={type:void 0,texture:void 0},ce[ie]=ue),(ue.type!==P||ue.texture!==ee)&&(re!==ie&&(i.activeTexture(ie),re=ie),i.bindTexture(P,ee||Y[P]),ue.type=P,ue.texture=ee)}function E(){let P=ce[re];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{i.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{i.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{i.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{i.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{i.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{i.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{i.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(P){$e.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),$e.copy(P))}function we(P){je.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),je.copy(P))}function ye(P,ee){let ie=l.get(ee);ie===void 0&&(ie=new WeakMap,l.set(ee,ie));let ue=ie.get(P);ue===void 0&&(ue=i.getUniformBlockIndex(ee,P.name),ie.set(P,ue))}function ae(P,ee){let ue=l.get(ee).get(P);c.get(ee)!==ue&&(i.uniformBlockBinding(ee,ue,P.__bindingPointIndex),c.set(ee,ue))}function De(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},re=null,ce={},u={},f=new WeakMap,p=[],_=null,v=!1,m=null,d=null,T=null,b=null,S=null,w=null,C=null,I=new ze(0,0,0),U=0,M=!1,y=null,R=null,L=null,G=null,B=null,$e.set(0,0,i.canvas.width,i.canvas.height),je.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:de,bindFramebuffer:Re,drawBuffers:Me,useProgram:ke,setBlending:et,setMaterial:Ie,setFlipSided:Ae,setCullFace:me,setLineWidth:tt,setPolygonOffset:ge,setScissorTest:Ne,activeTexture:ft,bindTexture:ot,unbindTexture:E,compressedTexImage2D:g,compressedTexImage3D:F,texImage2D:xe,texImage3D:j,updateUBOMapping:ye,uniformBlockBinding:ae,texStorage2D:ne,texStorage3D:_e,texSubImage2D:q,texSubImage3D:$,compressedTexSubImage2D:X,compressedTexSubImage3D:ve,scissor:le,viewport:we,reset:De}}function rm(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ve,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,g){return p?new OffscreenCanvas(E,g):Zi("canvas")}function v(E,g,F){let q=1,$=ot(E);if(($.width>F||$.height>F)&&(q=F/Math.max($.width,$.height)),q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let X=Math.floor(q*$.width),ve=Math.floor(q*$.height);u===void 0&&(u=_(X,ve));let ne=g?_(X,ve):u;return ne.width=X,ne.height=ve,ne.getContext("2d").drawImage(E,0,0,X,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+X+"x"+ve+")."),ne}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),E;return E}function m(E){return E.generateMipmaps}function d(E){i.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(E,g,F,q,$=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let X=g;if(g===i.RED&&(F===i.FLOAT&&(X=i.R32F),F===i.HALF_FLOAT&&(X=i.R16F),F===i.UNSIGNED_BYTE&&(X=i.R8)),g===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.R8UI),F===i.UNSIGNED_SHORT&&(X=i.R16UI),F===i.UNSIGNED_INT&&(X=i.R32UI),F===i.BYTE&&(X=i.R8I),F===i.SHORT&&(X=i.R16I),F===i.INT&&(X=i.R32I)),g===i.RG&&(F===i.FLOAT&&(X=i.RG32F),F===i.HALF_FLOAT&&(X=i.RG16F),F===i.UNSIGNED_BYTE&&(X=i.RG8)),g===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RG8UI),F===i.UNSIGNED_SHORT&&(X=i.RG16UI),F===i.UNSIGNED_INT&&(X=i.RG32UI),F===i.BYTE&&(X=i.RG8I),F===i.SHORT&&(X=i.RG16I),F===i.INT&&(X=i.RG32I)),g===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGB8UI),F===i.UNSIGNED_SHORT&&(X=i.RGB16UI),F===i.UNSIGNED_INT&&(X=i.RGB32UI),F===i.BYTE&&(X=i.RGB8I),F===i.SHORT&&(X=i.RGB16I),F===i.INT&&(X=i.RGB32I)),g===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),F===i.UNSIGNED_INT&&(X=i.RGBA32UI),F===i.BYTE&&(X=i.RGBA8I),F===i.SHORT&&(X=i.RGBA16I),F===i.INT&&(X=i.RGBA32I)),g===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),g===i.RGBA){let ve=$?qi:Ge.getTransfer(q);F===i.FLOAT&&(X=i.RGBA32F),F===i.HALF_FLOAT&&(X=i.RGBA16F),F===i.UNSIGNED_BYTE&&(X=ve===qe?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function S(E,g){let F;return E?g===null||g===Un||g===Ci?F=i.DEPTH24_STENCIL8:g===$t?F=i.DEPTH32F_STENCIL8:g===wi&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Un||g===Ci?F=i.DEPTH_COMPONENT24:g===$t?F=i.DEPTH_COMPONENT32F:g===wi&&(F=i.DEPTH_COMPONENT16),F}function w(E,g){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ct&&E.minFilter!==Ht?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function C(E){let g=E.target;g.removeEventListener("dispose",C),U(g),g.isVideoTexture&&h.delete(g)}function I(E){let g=E.target;g.removeEventListener("dispose",I),y(g)}function U(E){let g=n.get(E);if(g.__webglInit===void 0)return;let F=E.source,q=f.get(F);if(q){let $=q[g.__cacheKey];$.usedTimes--,$.usedTimes===0&&M(E),Object.keys(q).length===0&&f.delete(F)}n.remove(E)}function M(E){let g=n.get(E);i.deleteTexture(g.__webglTexture);let F=E.source,q=f.get(F);delete q[g.__cacheKey],a.memory.textures--}function y(E){let g=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(g.__webglFramebuffer[q]))for(let $=0;$<g.__webglFramebuffer[q].length;$++)i.deleteFramebuffer(g.__webglFramebuffer[q][$]);else i.deleteFramebuffer(g.__webglFramebuffer[q]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[q])}else{if(Array.isArray(g.__webglFramebuffer))for(let q=0;q<g.__webglFramebuffer.length;q++)i.deleteFramebuffer(g.__webglFramebuffer[q]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let q=0;q<g.__webglColorRenderbuffer.length;q++)g.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[q]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let F=E.textures;for(let q=0,$=F.length;q<$;q++){let X=n.get(F[q]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(F[q])}n.remove(E)}let R=0;function L(){R=0}function G(){let E=R;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),R+=1,E}function B(E){let g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function k(E,g){let F=n.get(E);if(E.isVideoTexture&&Ne(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&F.__version!==E.version){let q=E.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,E,g);return}}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+g)}function H(E,g){let F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){Y(F,E,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+g)}function te(E,g){let F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){Y(F,E,g);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+g)}function W(E,g){let F=n.get(E);if(E.version>0&&F.__version!==E.version){J(F,E,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+g)}let re={[Hs]:i.REPEAT,[Cn]:i.CLAMP_TO_EDGE,[Ws]:i.MIRRORED_REPEAT},ce={[Ct]:i.NEAREST,[Dl]:i.NEAREST_MIPMAP_NEAREST,[fs]:i.NEAREST_MIPMAP_LINEAR,[Ht]:i.LINEAR,[Mr]:i.LINEAR_MIPMAP_NEAREST,[Nn]:i.LINEAR_MIPMAP_LINEAR},Se={[Ol]:i.NEVER,[Hl]:i.ALWAYS,[Bl]:i.LESS,[ro]:i.LEQUAL,[zl]:i.EQUAL,[Vl]:i.GEQUAL,[kl]:i.GREATER,[Gl]:i.NOTEQUAL};function Fe(E,g){if(g.type===$t&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Ht||g.magFilter===Mr||g.magFilter===fs||g.magFilter===Nn||g.minFilter===Ht||g.minFilter===Mr||g.minFilter===fs||g.minFilter===Nn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,re[g.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,re[g.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,re[g.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ce[g.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ce[g.minFilter]),g.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Se[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ct||g.minFilter!==fs&&g.minFilter!==Nn||g.type===$t&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function $e(E,g){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",C));let q=g.source,$=f.get(q);$===void 0&&($={},f.set(q,$));let X=B(g);if(X!==E.__cacheKey){$[X]===void 0&&($[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),$[X].usedTimes++;let ve=$[E.__cacheKey];ve!==void 0&&($[E.__cacheKey].usedTimes--,ve.usedTimes===0&&M(g)),E.__cacheKey=X,E.__webglTexture=$[X].texture}return F}function je(E,g,F){return Math.floor(Math.floor(E/F)/g)}function We(E,g,F,q){let X=E.updateRanges;if(X.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,F,q,g.data);else{X.sort((j,le)=>j.start-le.start);let ve=0;for(let j=1;j<X.length;j++){let le=X[ve],we=X[j],ye=le.start+le.count,ae=je(we.start,g.width,4),De=je(le.start,g.width,4);we.start<=ye+1&&ae===De&&je(we.start+we.count-1,g.width,4)===ae?le.count=Math.max(le.count,we.start+we.count-le.start):(++ve,X[ve]=we)}X.length=ve+1;let ne=i.getParameter(i.UNPACK_ROW_LENGTH),_e=i.getParameter(i.UNPACK_SKIP_PIXELS),xe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let j=0,le=X.length;j<le;j++){let we=X[j],ye=Math.floor(we.start/4),ae=Math.ceil(we.count/4),De=ye%g.width,P=Math.floor(ye/g.width),ee=ae,ie=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,De),i.pixelStorei(i.UNPACK_SKIP_ROWS,P),t.texSubImage2D(i.TEXTURE_2D,0,De,P,ee,ie,F,q,g.data)}E.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ne),i.pixelStorei(i.UNPACK_SKIP_PIXELS,_e),i.pixelStorei(i.UNPACK_SKIP_ROWS,xe)}}function Y(E,g,F){let q=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(q=i.TEXTURE_3D);let $=$e(E,g),X=g.source;t.bindTexture(q,E.__webglTexture,i.TEXTURE0+F);let ve=n.get(X);if(X.version!==ve.__version||$===!0){t.activeTexture(i.TEXTURE0+F);let ne=Ge.getPrimaries(Ge.workingColorSpace),_e=g.colorSpace===xn?null:Ge.getPrimaries(g.colorSpace),xe=g.colorSpace===xn||ne===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let j=v(g.image,!1,s.maxTextureSize);j=ft(g,j);let le=r.convert(g.format,g.colorSpace),we=r.convert(g.type),ye=b(g.internalFormat,le,we,g.colorSpace,g.isVideoTexture);Fe(q,g);let ae,De=g.mipmaps,P=g.isVideoTexture!==!0,ee=ve.__version===void 0||$===!0,ie=X.dataReady,ue=w(g,j);if(g.isDepthTexture)ye=S(g.format===Ri,g.type),ee&&(P?t.texStorage2D(i.TEXTURE_2D,1,ye,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,ye,j.width,j.height,0,le,we,null));else if(g.isDataTexture)if(De.length>0){P&&ee&&t.texStorage2D(i.TEXTURE_2D,ue,ye,De[0].width,De[0].height);for(let K=0,Z=De.length;K<Z;K++)ae=De[K],P?ie&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,ae.width,ae.height,le,we,ae.data):t.texImage2D(i.TEXTURE_2D,K,ye,ae.width,ae.height,0,le,we,ae.data);g.generateMipmaps=!1}else P?(ee&&t.texStorage2D(i.TEXTURE_2D,ue,ye,j.width,j.height),ie&&We(g,j,le,we)):t.texImage2D(i.TEXTURE_2D,0,ye,j.width,j.height,0,le,we,j.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){P&&ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,ye,De[0].width,De[0].height,j.depth);for(let K=0,Z=De.length;K<Z;K++)if(ae=De[K],g.format!==Bt)if(le!==null)if(P){if(ie)if(g.layerUpdates.size>0){let pe=po(ae.width,ae.height,g.format,g.type);for(let Pe of g.layerUpdates){let Je=ae.data.subarray(Pe*pe/ae.data.BYTES_PER_ELEMENT,(Pe+1)*pe/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,Pe,ae.width,ae.height,1,le,Je)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ae.width,ae.height,j.depth,le,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,ye,ae.width,ae.height,j.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?ie&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ae.width,ae.height,j.depth,le,we,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,ye,ae.width,ae.height,j.depth,0,le,we,ae.data)}else{P&&ee&&t.texStorage2D(i.TEXTURE_2D,ue,ye,De[0].width,De[0].height);for(let K=0,Z=De.length;K<Z;K++)ae=De[K],g.format!==Bt?le!==null?P?ie&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,ae.width,ae.height,le,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,K,ye,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?ie&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,ae.width,ae.height,le,we,ae.data):t.texImage2D(i.TEXTURE_2D,K,ye,ae.width,ae.height,0,le,we,ae.data)}else if(g.isDataArrayTexture)if(P){if(ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,ye,j.width,j.height,j.depth),ie)if(g.layerUpdates.size>0){let K=po(j.width,j.height,g.format,g.type);for(let Z of g.layerUpdates){let pe=j.data.subarray(Z*K/j.data.BYTES_PER_ELEMENT,(Z+1)*K/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,j.width,j.height,1,le,we,pe)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,le,we,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ye,j.width,j.height,j.depth,0,le,we,j.data);else if(g.isData3DTexture)P?(ee&&t.texStorage3D(i.TEXTURE_3D,ue,ye,j.width,j.height,j.depth),ie&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,le,we,j.data)):t.texImage3D(i.TEXTURE_3D,0,ye,j.width,j.height,j.depth,0,le,we,j.data);else if(g.isFramebufferTexture){if(ee)if(P)t.texStorage2D(i.TEXTURE_2D,ue,ye,j.width,j.height);else{let K=j.width,Z=j.height;for(let pe=0;pe<ue;pe++)t.texImage2D(i.TEXTURE_2D,pe,ye,K,Z,0,le,we,null),K>>=1,Z>>=1}}else if(De.length>0){if(P&&ee){let K=ot(De[0]);t.texStorage2D(i.TEXTURE_2D,ue,ye,K.width,K.height)}for(let K=0,Z=De.length;K<Z;K++)ae=De[K],P?ie&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,le,we,ae):t.texImage2D(i.TEXTURE_2D,K,ye,le,we,ae);g.generateMipmaps=!1}else if(P){if(ee){let K=ot(j);t.texStorage2D(i.TEXTURE_2D,ue,ye,K.width,K.height)}ie&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,we,j)}else t.texImage2D(i.TEXTURE_2D,0,ye,le,we,j);m(g)&&d(q),ve.__version=X.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function J(E,g,F){if(g.image.length!==6)return;let q=$e(E,g),$=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);let X=n.get($);if($.version!==X.__version||q===!0){t.activeTexture(i.TEXTURE0+F);let ve=Ge.getPrimaries(Ge.workingColorSpace),ne=g.colorSpace===xn?null:Ge.getPrimaries(g.colorSpace),_e=g.colorSpace===xn||ve===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let xe=g.isCompressedTexture||g.image[0].isCompressedTexture,j=g.image[0]&&g.image[0].isDataTexture,le=[];for(let Z=0;Z<6;Z++)!xe&&!j?le[Z]=v(g.image[Z],!0,s.maxCubemapSize):le[Z]=j?g.image[Z].image:g.image[Z],le[Z]=ft(g,le[Z]);let we=le[0],ye=r.convert(g.format,g.colorSpace),ae=r.convert(g.type),De=b(g.internalFormat,ye,ae,g.colorSpace),P=g.isVideoTexture!==!0,ee=X.__version===void 0||q===!0,ie=$.dataReady,ue=w(g,we);Fe(i.TEXTURE_CUBE_MAP,g);let K;if(xe){P&&ee&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,De,we.width,we.height);for(let Z=0;Z<6;Z++){K=le[Z].mipmaps;for(let pe=0;pe<K.length;pe++){let Pe=K[pe];g.format!==Bt?ye!==null?P?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,0,0,Pe.width,Pe.height,ye,Pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,De,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,0,0,Pe.width,Pe.height,ye,ae,Pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,De,Pe.width,Pe.height,0,ye,ae,Pe.data)}}}else{if(K=g.mipmaps,P&&ee){K.length>0&&ue++;let Z=ot(le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,De,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(j){P?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,le[Z].width,le[Z].height,ye,ae,le[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,De,le[Z].width,le[Z].height,0,ye,ae,le[Z].data);for(let pe=0;pe<K.length;pe++){let Je=K[pe].image[Z].image;P?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,0,0,Je.width,Je.height,ye,ae,Je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,De,Je.width,Je.height,0,ye,ae,Je.data)}}else{P?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ye,ae,le[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,De,ye,ae,le[Z]);for(let pe=0;pe<K.length;pe++){let Pe=K[pe];P?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,0,0,ye,ae,Pe.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,De,ye,ae,Pe.image[Z])}}}m(g)&&d(i.TEXTURE_CUBE_MAP),X.__version=$.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function de(E,g,F,q,$,X){let ve=r.convert(F.format,F.colorSpace),ne=r.convert(F.type),_e=b(F.internalFormat,ve,ne,F.colorSpace),xe=n.get(g),j=n.get(F);if(j.__renderTarget=g,!xe.__hasExternalTextures){let le=Math.max(1,g.width>>X),we=Math.max(1,g.height>>X);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,X,_e,le,we,g.depth,0,ve,ne,null):t.texImage2D($,X,_e,le,we,0,ve,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),ge(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,$,j.__webglTexture,0,tt(g)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,$,j.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(E,g,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),g.depthBuffer){let q=g.depthTexture,$=q&&q.isDepthTexture?q.type:null,X=S(g.stencilBuffer,$),ve=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=tt(g);ge(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,X,g.width,g.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,X,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,X,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,E)}else{let q=g.textures;for(let $=0;$<q.length;$++){let X=q[$],ve=r.convert(X.format,X.colorSpace),ne=r.convert(X.type),_e=b(X.internalFormat,ve,ne,X.colorSpace),xe=tt(g);F&&ge(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,_e,g.width,g.height):ge(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,_e,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,_e,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Me(E,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=n.get(g.depthTexture);q.__renderTarget=g,(!q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),k(g.depthTexture,0);let $=q.__webglTexture,X=tt(g);if(g.depthTexture.format===_i)ge(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(g.depthTexture.format===Ri)ge(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function ke(E){let g=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){let q=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),q){let $=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,q.removeEventListener("dispose",$)};q.addEventListener("dispose",$),g.__depthDisposeCallback=$}g.__boundDepthTexture=q}if(E.depthTexture&&!g.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");let q=E.texture.mipmaps;q&&q.length>0?Me(g.__webglFramebuffer[0],E):Me(g.__webglFramebuffer,E)}else if(F){g.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[q]),g.__webglDepthbuffer[q]===void 0)g.__webglDepthbuffer[q]=i.createRenderbuffer(),Re(g.__webglDepthbuffer[q],E,!1);else{let $=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=g.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,X)}}else{let q=E.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Re(g.__webglDepthbuffer,E,!1);else{let $=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,X)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(E,g,F){let q=n.get(E);g!==void 0&&de(q.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&ke(E)}function A(E){let g=E.texture,F=n.get(E),q=n.get(g);E.addEventListener("dispose",I);let $=E.textures,X=E.isWebGLCubeRenderTarget===!0,ve=$.length>1;if(ve||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=g.version,a.memory.textures++),X){F.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[ne]=[];for(let _e=0;_e<g.mipmaps.length;_e++)F.__webglFramebuffer[ne][_e]=i.createFramebuffer()}else F.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let ne=0;ne<g.mipmaps.length;ne++)F.__webglFramebuffer[ne]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ve)for(let ne=0,_e=$.length;ne<_e;ne++){let xe=n.get($[ne]);xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&ge(E)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ne=0;ne<$.length;ne++){let _e=$[ne];F.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ne]);let xe=r.convert(_e.format,_e.colorSpace),j=r.convert(_e.type),le=b(_e.internalFormat,xe,j,_e.colorSpace,E.isXRRenderTarget===!0),we=tt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,we,le,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,F.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Re(F.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,g);for(let ne=0;ne<6;ne++)if(g.mipmaps&&g.mipmaps.length>0)for(let _e=0;_e<g.mipmaps.length;_e++)de(F.__webglFramebuffer[ne][_e],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e);else de(F.__webglFramebuffer[ne],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);m(g)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ne=0,_e=$.length;ne<_e;ne++){let xe=$[ne],j=n.get(xe),le=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(le=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,j.__webglTexture),Fe(le,xe),de(F.__webglFramebuffer,E,xe,i.COLOR_ATTACHMENT0+ne,le,0),m(xe)&&d(le)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ne=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,q.__webglTexture),Fe(ne,g),g.mipmaps&&g.mipmaps.length>0)for(let _e=0;_e<g.mipmaps.length;_e++)de(F.__webglFramebuffer[_e],E,g,i.COLOR_ATTACHMENT0,ne,_e);else de(F.__webglFramebuffer,E,g,i.COLOR_ATTACHMENT0,ne,0);m(g)&&d(ne),t.unbindTexture()}E.depthBuffer&&ke(E)}function et(E){let g=E.textures;for(let F=0,q=g.length;F<q;F++){let $=g[F];if(m($)){let X=T(E),ve=n.get($).__webglTexture;t.bindTexture(X,ve),d(X),t.unbindTexture()}}}let Ie=[],Ae=[];function me(E){if(E.samples>0){if(ge(E)===!1){let g=E.textures,F=E.width,q=E.height,$=i.COLOR_BUFFER_BIT,X=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(E),ne=g.length>1;if(ne)for(let xe=0;xe<g.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);let _e=E.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let xe=0;xe<g.length;xe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[xe]);let j=n.get(g[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,j,0)}i.blitFramebuffer(0,0,F,q,0,0,F,q,$,i.NEAREST),c===!0&&(Ie.length=0,Ae.length=0,Ie.push(i.COLOR_ATTACHMENT0+xe),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Ie.push(X),Ae.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ae)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ie))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let xe=0;xe<g.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,ve.__webglColorRenderbuffer[xe]);let j=n.get(g[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,j,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){let g=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function tt(E){return Math.min(s.maxSamples,E.samples)}function ge(E){let g=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Ne(E){let g=a.render.frame;h.get(E)!==g&&(h.set(E,g),E.update())}function ft(E,g){let F=E.colorSpace,q=E.format,$=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==Xn&&F!==xn&&(Ge.getTransfer(F)===qe?(q!==Bt||$!==Zt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),g}function ot(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=L,this.setTexture2D=k,this.setTexture2DArray=H,this.setTexture3D=te,this.setTextureCube=W,this.rebindTextures=mt,this.setupRenderTarget=A,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ge}function am(i,e){function t(n,s=xn){let r,a=Ge.getTransfer(s);if(n===Zt)return i.UNSIGNED_BYTE;if(n===Er)return i.UNSIGNED_SHORT_4_4_4_4;if(n===br)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ja)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===eo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ka)return i.BYTE;if(n===Qa)return i.SHORT;if(n===wi)return i.UNSIGNED_SHORT;if(n===Sr)return i.INT;if(n===Un)return i.UNSIGNED_INT;if(n===$t)return i.FLOAT;if(n===Ai)return i.HALF_FLOAT;if(n===to)return i.ALPHA;if(n===no)return i.RGB;if(n===Bt)return i.RGBA;if(n===_i)return i.DEPTH_COMPONENT;if(n===Ri)return i.DEPTH_STENCIL;if(n===Tr)return i.RED;if(n===wr)return i.RED_INTEGER;if(n===io)return i.RG;if(n===Ar)return i.RG_INTEGER;if(n===Cr)return i.RGBA_INTEGER;if(n===ps||n===ms||n===gs||n===_s)if(a===qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ps)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ms)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ps)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ms)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_s)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rr||n===Pr||n===Ir||n===Lr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Rr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ir)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dr||n===Nr||n===Ur)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Dr||n===Nr)return a===qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ur)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fr||n===Or||n===Br||n===zr||n===kr||n===Gr||n===Vr||n===Hr||n===Wr||n===Xr||n===qr||n===Yr||n===Zr||n===$r)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fr)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Or)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Br)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zr)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kr)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gr)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vr)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Hr)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wr)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xr)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qr)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yr)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zr)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$r)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jr||n===Kr||n===Qr)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Jr)return a===qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Kr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jr||n===ea||n===ta||n===na)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===jr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ea)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ta)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===na)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ci?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var om=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ao=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new as(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new qt({vertexShader:om,fragmentShader:lm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vt(new os(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Co=class extends fn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,_=null,v=typeof XRWebGLBinding<"u",m=new Ao,d={},T=t.getContextAttributes(),b=null,S=null,w=[],C=[],I=new Ve,U=null,M=new yt;M.viewport=new rt;let y=new yt;y.viewport=new rt;let R=[M,y],L=new hr,G=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=w[Y];return J===void 0&&(J=new Mi,w[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=w[Y];return J===void 0&&(J=new Mi,w[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=w[Y];return J===void 0&&(J=new Mi,w[Y]=J),J.getHandSpace()};function k(Y){let J=C.indexOf(Y.inputSource);if(J===-1)return;let de=w[J];de!==void 0&&(de.update(Y.inputSource,Y.frame,l||a),de.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",te);for(let Y=0;Y<w.length;Y++){let J=C[Y];J!==null&&(C[Y]=null,w[Y].disconnect(J))}G=null,B=null,m.reset();for(let Y in d)delete d[Y];e.setRenderTarget(b),p=null,f=null,u=null,s=null,S=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",H),s.addEventListener("inputsourceschange",te),T.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(I),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Re=null,Me=null;T.depth&&(Me=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=T.stencil?Ri:_i,Re=T.stencil?Ci:Un);let ke={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(ke),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Qt(f.textureWidth,f.textureHeight,{format:Bt,type:Zt,depthTexture:new rs(f.textureWidth,f.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let de={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Qt(p.framebufferWidth,p.framebufferHeight,{format:Bt,type:Zt,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),We.setContext(s),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(Y){for(let J=0;J<Y.removed.length;J++){let de=Y.removed[J],Re=C.indexOf(de);Re>=0&&(C[Re]=null,w[Re].disconnect(de))}for(let J=0;J<Y.added.length;J++){let de=Y.added[J],Re=C.indexOf(de);if(Re===-1){for(let ke=0;ke<w.length;ke++)if(ke>=C.length){C.push(de),Re=ke;break}else if(C[ke]===null){C[ke]=de,Re=ke;break}if(Re===-1)break}let Me=w[Re];Me&&Me.connect(de)}}let W=new O,re=new O;function ce(Y,J,de){W.setFromMatrixPosition(J.matrixWorld),re.setFromMatrixPosition(de.matrixWorld);let Re=W.distanceTo(re),Me=J.projectionMatrix.elements,ke=de.projectionMatrix.elements,mt=Me[14]/(Me[10]-1),A=Me[14]/(Me[10]+1),et=(Me[9]+1)/Me[5],Ie=(Me[9]-1)/Me[5],Ae=(Me[8]-1)/Me[0],me=(ke[8]+1)/ke[0],tt=mt*Ae,ge=mt*me,Ne=Re/(-Ae+me),ft=Ne*-Ae;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ft),Y.translateZ(Ne),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Me[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let ot=mt+Ne,E=A+Ne,g=tt-ft,F=ge+(Re-ft),q=et*A/E*ot,$=Ie*A/E*ot;Y.projectionMatrix.makePerspective(g,F,q,$,ot,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Se(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let J=Y.near,de=Y.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(de=m.depthFar)),L.near=y.near=M.near=J,L.far=y.far=M.far=de,(G!==L.near||B!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),G=L.near,B=L.far),L.layers.mask=Y.layers.mask|6,M.layers.mask=L.layers.mask&3,y.layers.mask=L.layers.mask&5;let Re=Y.parent,Me=L.cameras;Se(L,Re);for(let ke=0;ke<Me.length;ke++)Se(Me[ke],Re);Me.length===2?ce(L,M,y):L.projectionMatrix.copy(M.projectionMatrix),Fe(Y,L,Re)};function Fe(Y,J,de){de===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(de.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=xi*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(Y){return d[Y]};let $e=null;function je(Y,J){if(h=J.getViewerPose(l||a),_=J,h!==null){let de=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Re=!1;de.length!==L.cameras.length&&(L.cameras.length=0,Re=!0);for(let A=0;A<de.length;A++){let et=de[A],Ie=null;if(p!==null)Ie=p.getViewport(et);else{let me=u.getViewSubImage(f,et);Ie=me.viewport,A===0&&(e.setRenderTargetTextures(S,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(S))}let Ae=R[A];Ae===void 0&&(Ae=new yt,Ae.layers.enable(A),Ae.viewport=new rt,R[A]=Ae),Ae.matrix.fromArray(et.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(et.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),A===0&&(L.matrix.copy(Ae.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Re===!0&&L.cameras.push(Ae)}let Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let A=u.getDepthInformation(de[0]);A&&A.isValid&&A.texture&&m.init(A,s.renderState)}if(Me&&Me.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let A=0;A<de.length;A++){let et=de[A].camera;if(et){let Ie=d[et];Ie||(Ie=new as,d[et]=Ie);let Ae=u.getCameraImage(et);Ie.sourceTexture=Ae}}}}for(let de=0;de<w.length;de++){let Re=C[de],Me=w[de];Re!==null&&Me!==void 0&&Me.update(Re,J,l||a)}$e&&$e(Y,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),_=null}let We=new xc;We.setAnimationLoop(je),this.setAnimationLoop=function(Y){$e=Y},this.dispose=function(){}}},Qn=new Wt,cm=new nt;function hm(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,ho(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,T,b,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,T,b):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Tt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Tt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let T=e.get(d),b=T.envMap,S=T.envMapRotation;b&&(m.envMap.value=b,Qn.copy(S),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),m.envMapRotation.value.setFromMatrix4(cm.makeRotationFromEuler(Qn)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,T,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*T,m.scale.value=b*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,T){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Tt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){let T=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function um(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,b){let S=b.program;n.uniformBlockBinding(T,S)}function l(T,b){let S=s[T.id];S===void 0&&(_(T),S=h(T),s[T.id]=S,T.addEventListener("dispose",m));let w=b.program;n.updateUBOMapping(T,w);let C=e.render.frame;r[T.id]!==C&&(f(T),r[T.id]=C)}function h(T){let b=u();T.__bindingPointIndex=b;let S=i.createBuffer(),w=T.__size,C=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,w,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function u(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){let b=s[T.id],S=T.uniforms,w=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let C=0,I=S.length;C<I;C++){let U=Array.isArray(S[C])?S[C]:[S[C]];for(let M=0,y=U.length;M<y;M++){let R=U[M];if(p(R,C,M,w)===!0){let L=R.__offset,G=Array.isArray(R.value)?R.value:[R.value],B=0;for(let k=0;k<G.length;k++){let H=G[k],te=v(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,L+B,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,B),B+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,b,S,w){let C=T.value,I=b+"_"+S;if(w[I]===void 0)return typeof C=="number"||typeof C=="boolean"?w[I]=C:w[I]=C.clone(),!0;{let U=w[I];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return w[I]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function _(T){let b=T.uniforms,S=0,w=16;for(let I=0,U=b.length;I<U;I++){let M=Array.isArray(b[I])?b[I]:[b[I]];for(let y=0,R=M.length;y<R;y++){let L=M[y],G=Array.isArray(L.value)?L.value:[L.value];for(let B=0,k=G.length;B<k;B++){let H=G[B],te=v(H),W=S%w,re=W%te.boundary,ce=W+re;S+=re,ce!==0&&w-ce<te.storage&&(S+=w-ce),L.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,S+=te.storage}}}let C=S%w;return C>0&&(S+=w-C),T.__size=S,T.__cache={},this}function v(T){let b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function m(T){let b=T.target;b.removeEventListener("dispose",m);let S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function d(){for(let T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:c,update:l,dispose:d}}var la=class{constructor(e={}){let{canvas:t=Wl(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let _=new Uint32Array(4),v=new Int32Array(4),m=null,d=null,T=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,w=!1;this._outputColorSpace=xt;let C=0,I=0,U=null,M=-1,y=null,R=new rt,L=new rt,G=null,B=new ze(0),k=0,H=t.width,te=t.height,W=1,re=null,ce=null,Se=new rt(0,0,H,te),Fe=new rt(0,0,H,te),$e=!1,je=new Si,We=!1,Y=!1,J=new nt,de=new O,Re=new rt,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ke=!1;function mt(){return U===null?W:1}let A=n;function et(x,D){return t.getContext(x,D)}try{let x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",K,!1),A===null){let D="webgl2";if(A=et(D,x),A===null)throw et(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Ie,Ae,me,tt,ge,Ne,ft,ot,E,g,F,q,$,X,ve,ne,_e,xe,j,le,we,ye,ae,De;function P(){Ie=new Rf(A),Ie.init(),ye=new am(A,Ie),Ae=new Sf(A,Ie,e,ye),me=new sm(A,Ie),Ae.reversedDepthBuffer&&f&&me.buffers.depth.setReversed(!0),tt=new Lf(A),ge=new Xp,Ne=new rm(A,Ie,me,ge,Ae,ye,tt),ft=new bf(S),ot=new Cf(S),E=new Oh(A),ae=new vf(A,E),g=new Pf(A,E,tt,ae),F=new Nf(A,g,E,tt),j=new Df(A,Ae,Ne),ne=new Ef(ge),q=new Wp(S,ft,ot,Ie,Ae,ae,ne),$=new hm(S,ge),X=new Yp,ve=new jp(Ie),xe=new yf(S,ft,ot,me,F,p,c),_e=new nm(S,F,Ae),De=new um(A,tt,Ae,me),le=new Mf(A,Ie,tt),we=new If(A,Ie,tt),tt.programs=q.programs,S.capabilities=Ae,S.extensions=Ie,S.properties=ge,S.renderLists=X,S.shadowMap=_e,S.state=me,S.info=tt}P();let ee=new Co(S,A);this.xr=ee,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let x=Ie.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=Ie.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(x){x!==void 0&&(W=x,this.setSize(H,te,!1))},this.getSize=function(x){return x.set(H,te)},this.setSize=function(x,D,z=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=x,te=D,t.width=Math.floor(x*W),t.height=Math.floor(D*W),z===!0&&(t.style.width=x+"px",t.style.height=D+"px"),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(H*W,te*W).floor()},this.setDrawingBufferSize=function(x,D,z){H=x,te=D,W=z,t.width=Math.floor(x*z),t.height=Math.floor(D*z),this.setViewport(0,0,x,D)},this.getCurrentViewport=function(x){return x.copy(R)},this.getViewport=function(x){return x.copy(Se)},this.setViewport=function(x,D,z,V){x.isVector4?Se.set(x.x,x.y,x.z,x.w):Se.set(x,D,z,V),me.viewport(R.copy(Se).multiplyScalar(W).round())},this.getScissor=function(x){return x.copy(Fe)},this.setScissor=function(x,D,z,V){x.isVector4?Fe.set(x.x,x.y,x.z,x.w):Fe.set(x,D,z,V),me.scissor(L.copy(Fe).multiplyScalar(W).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(x){me.setScissorTest($e=x)},this.setOpaqueSort=function(x){re=x},this.setTransparentSort=function(x){ce=x},this.getClearColor=function(x){return x.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(x=!0,D=!0,z=!0){let V=0;if(x){let N=!1;if(U!==null){let Q=U.texture.format;N=Q===Cr||Q===Ar||Q===wr}if(N){let Q=U.texture.type,oe=Q===Zt||Q===Un||Q===wi||Q===Ci||Q===Er||Q===br,fe=xe.getClearColor(),he=xe.getClearAlpha(),Te=fe.r,Ce=fe.g,Ee=fe.b;oe?(_[0]=Te,_[1]=Ce,_[2]=Ee,_[3]=he,A.clearBufferuiv(A.COLOR,0,_)):(v[0]=Te,v[1]=Ce,v[2]=Ee,v[3]=he,A.clearBufferiv(A.COLOR,0,v))}else V|=A.COLOR_BUFFER_BIT}D&&(V|=A.DEPTH_BUFFER_BIT),z&&(V|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",K,!1),xe.dispose(),X.dispose(),ve.dispose(),ge.dispose(),ft.dispose(),ot.dispose(),F.dispose(),ae.dispose(),De.dispose(),q.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Jt),ee.removeEventListener("sessionend",Po),Fn.stop()};function ie(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let x=tt.autoReset,D=_e.enabled,z=_e.autoUpdate,V=_e.needsUpdate,N=_e.type;P(),tt.autoReset=x,_e.enabled=D,_e.autoUpdate=z,_e.needsUpdate=V,_e.type=N}function K(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Z(x){let D=x.target;D.removeEventListener("dispose",Z),pe(D)}function pe(x){Pe(x),ge.remove(x)}function Pe(x){let D=ge.get(x).programs;D!==void 0&&(D.forEach(function(z){q.releaseProgram(z)}),x.isShaderMaterial&&q.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,z,V,N,Q){D===null&&(D=Me);let oe=N.isMesh&&N.matrixWorld.determinant()<0,fe=Pc(x,D,z,V,N);me.setMaterial(V,oe);let he=z.index,Te=1;if(V.wireframe===!0){if(he=g.getWireframeAttribute(z),he===void 0)return;Te=2}let Ce=z.drawRange,Ee=z.attributes.position,Oe=Ce.start*Te,Ye=(Ce.start+Ce.count)*Te;Q!==null&&(Oe=Math.max(Oe,Q.start*Te),Ye=Math.min(Ye,(Q.start+Q.count)*Te)),he!==null?(Oe=Math.max(Oe,0),Ye=Math.min(Ye,he.count)):Ee!=null&&(Oe=Math.max(Oe,0),Ye=Math.min(Ye,Ee.count));let at=Ye-Oe;if(at<0||at===1/0)return;ae.setup(N,V,fe,z,he);let Ke,Ze=le;if(he!==null&&(Ke=E.get(he),Ze=we,Ze.setIndex(Ke)),N.isMesh)V.wireframe===!0?(me.setLineWidth(V.wireframeLinewidth*mt()),Ze.setMode(A.LINES)):Ze.setMode(A.TRIANGLES);else if(N.isLine){let be=V.linewidth;be===void 0&&(be=1),me.setLineWidth(be*mt()),N.isLineSegments?Ze.setMode(A.LINES):N.isLineLoop?Ze.setMode(A.LINE_LOOP):Ze.setMode(A.LINE_STRIP)}else N.isPoints?Ze.setMode(A.POINTS):N.isSprite&&Ze.setMode(A.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)yi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ze.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ie.get("WEBGL_multi_draw"))Ze.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let be=N._multiDrawStarts,it=N._multiDrawCounts,He=N._multiDrawCount,Rt=he?E.get(he).bytesPerElement:1,ti=ge.get(V).currentProgram.getUniforms();for(let Pt=0;Pt<He;Pt++)ti.setValue(A,"_gl_DrawID",Pt),Ze.render(be[Pt]/Rt,it[Pt])}else if(N.isInstancedMesh)Ze.renderInstances(Oe,at,N.count);else if(z.isInstancedBufferGeometry){let be=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,it=Math.min(z.instanceCount,be);Ze.renderInstances(Oe,at,it)}else Ze.render(Oe,at)};function Je(x,D,z){x.transparent===!0&&x.side===nn&&x.forceSinglePass===!1?(x.side=Tt,x.needsUpdate=!0,vs(x,D,z),x.side=dn,x.needsUpdate=!0,vs(x,D,z),x.side=nn):vs(x,D,z)}this.compile=function(x,D,z=null){z===null&&(z=x),d=ve.get(z),d.init(D),b.push(d),z.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),x!==z&&x.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();let V=new Set;return x.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let Q=N.material;if(Q)if(Array.isArray(Q))for(let oe=0;oe<Q.length;oe++){let fe=Q[oe];Je(fe,z,N),V.add(fe)}else Je(Q,z,N),V.add(Q)}),d=b.pop(),V},this.compileAsync=function(x,D,z=null){let V=this.compile(x,D,z);return new Promise(N=>{function Q(){if(V.forEach(function(oe){ge.get(oe).currentProgram.isReady()&&V.delete(oe)}),V.size===0){N(x);return}setTimeout(Q,10)}Ie.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Xe=null;function rn(x){Xe&&Xe(x)}function Jt(){Fn.stop()}function Po(){Fn.start()}let Fn=new xc;Fn.setAnimationLoop(rn),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(x){Xe=x,ee.setAnimationLoop(x),x===null?Fn.stop():Fn.start()},ee.addEventListener("sessionstart",Jt),ee.addEventListener("sessionend",Po),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(D),D=ee.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,D,U),d=ve.get(x,b.length),d.init(D),b.push(d),J.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),je.setFromProjectionMatrix(J,Vt,D.reversedDepth),Y=this.localClippingEnabled,We=ne.init(this.clippingPlanes,Y),m=X.get(x,T.length),m.init(),T.push(m),ee.enabled===!0&&ee.isPresenting===!0){let Q=S.xr.getDepthSensingMesh();Q!==null&&ua(Q,D,-1/0,S.sortObjects)}ua(x,D,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(re,ce),ke=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,ke&&xe.addToRenderList(m,x),this.info.render.frame++,We===!0&&ne.beginShadows();let z=d.state.shadowsArray;_e.render(z,x,D),We===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,N=m.transmissive;if(d.setupLights(),D.isArrayCamera){let Q=D.cameras;if(N.length>0)for(let oe=0,fe=Q.length;oe<fe;oe++){let he=Q[oe];Lo(V,N,x,he)}ke&&xe.render(x);for(let oe=0,fe=Q.length;oe<fe;oe++){let he=Q[oe];Io(m,x,he,he.viewport)}}else N.length>0&&Lo(V,N,x,D),ke&&xe.render(x),Io(m,x,D);U!==null&&I===0&&(Ne.updateMultisampleRenderTarget(U),Ne.updateRenderTargetMipmap(U)),x.isScene===!0&&x.onAfterRender(S,x,D),ae.resetDefaultState(),M=-1,y=null,b.pop(),b.length>0?(d=b[b.length-1],We===!0&&ne.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function ua(x,D,z,V){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)z=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)d.pushLight(x),x.castShadow&&d.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||je.intersectsSprite(x)){V&&Re.setFromMatrixPosition(x.matrixWorld).applyMatrix4(J);let oe=F.update(x),fe=x.material;fe.visible&&m.push(x,oe,fe,z,Re.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||je.intersectsObject(x))){let oe=F.update(x),fe=x.material;if(V&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Re.copy(x.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),Re.copy(oe.boundingSphere.center)),Re.applyMatrix4(x.matrixWorld).applyMatrix4(J)),Array.isArray(fe)){let he=oe.groups;for(let Te=0,Ce=he.length;Te<Ce;Te++){let Ee=he[Te],Oe=fe[Ee.materialIndex];Oe&&Oe.visible&&m.push(x,oe,Oe,z,Re.z,Ee)}}else fe.visible&&m.push(x,oe,fe,z,Re.z,null)}}let Q=x.children;for(let oe=0,fe=Q.length;oe<fe;oe++)ua(Q[oe],D,z,V)}function Io(x,D,z,V){let N=x.opaque,Q=x.transmissive,oe=x.transparent;d.setupLightsView(z),We===!0&&ne.setGlobalState(S.clippingPlanes,z),V&&me.viewport(R.copy(V)),N.length>0&&ys(N,D,z),Q.length>0&&ys(Q,D,z),oe.length>0&&ys(oe,D,z),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Lo(x,D,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[V.id]===void 0&&(d.state.transmissionRenderTarget[V.id]=new Qt(1,1,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")||Ie.has("EXT_color_buffer_float")?Ai:Zt,minFilter:Nn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace}));let Q=d.state.transmissionRenderTarget[V.id],oe=V.viewport||R;Q.setSize(oe.z*S.transmissionResolutionScale,oe.w*S.transmissionResolutionScale);let fe=S.getRenderTarget(),he=S.getActiveCubeFace(),Te=S.getActiveMipmapLevel();S.setRenderTarget(Q),S.getClearColor(B),k=S.getClearAlpha(),k<1&&S.setClearColor(16777215,.5),S.clear(),ke&&xe.render(z);let Ce=S.toneMapping;S.toneMapping=_n;let Ee=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),d.setupLightsView(V),We===!0&&ne.setGlobalState(S.clippingPlanes,V),ys(x,z,V),Ne.updateMultisampleRenderTarget(Q),Ne.updateRenderTargetMipmap(Q),Ie.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Ye=0,at=D.length;Ye<at;Ye++){let Ke=D[Ye],Ze=Ke.object,be=Ke.geometry,it=Ke.material,He=Ke.group;if(it.side===nn&&Ze.layers.test(V.layers)){let Rt=it.side;it.side=Tt,it.needsUpdate=!0,Do(Ze,z,V,be,it,He),it.side=Rt,it.needsUpdate=!0,Oe=!0}}Oe===!0&&(Ne.updateMultisampleRenderTarget(Q),Ne.updateRenderTargetMipmap(Q))}S.setRenderTarget(fe,he,Te),S.setClearColor(B,k),Ee!==void 0&&(V.viewport=Ee),S.toneMapping=Ce}function ys(x,D,z){let V=D.isScene===!0?D.overrideMaterial:null;for(let N=0,Q=x.length;N<Q;N++){let oe=x[N],fe=oe.object,he=oe.geometry,Te=oe.group,Ce=oe.material;Ce.allowOverride===!0&&V!==null&&(Ce=V),fe.layers.test(z.layers)&&Do(fe,D,z,he,Ce,Te)}}function Do(x,D,z,V,N,Q){x.onBeforeRender(S,D,z,V,N,Q),x.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(S,D,z,V,x,Q),N.transparent===!0&&N.side===nn&&N.forceSinglePass===!1?(N.side=Tt,N.needsUpdate=!0,S.renderBufferDirect(z,D,V,N,x,Q),N.side=dn,N.needsUpdate=!0,S.renderBufferDirect(z,D,V,N,x,Q),N.side=nn):S.renderBufferDirect(z,D,V,N,x,Q),x.onAfterRender(S,D,z,V,N,Q)}function vs(x,D,z){D.isScene!==!0&&(D=Me);let V=ge.get(x),N=d.state.lights,Q=d.state.shadowsArray,oe=N.state.version,fe=q.getParameters(x,N.state,Q,D,z),he=q.getProgramCacheKey(fe),Te=V.programs;V.environment=x.isMeshStandardMaterial?D.environment:null,V.fog=D.fog,V.envMap=(x.isMeshStandardMaterial?ot:ft).get(x.envMap||V.environment),V.envMapRotation=V.environment!==null&&x.envMap===null?D.environmentRotation:x.envMapRotation,Te===void 0&&(x.addEventListener("dispose",Z),Te=new Map,V.programs=Te);let Ce=Te.get(he);if(Ce!==void 0){if(V.currentProgram===Ce&&V.lightsStateVersion===oe)return Uo(x,fe),Ce}else fe.uniforms=q.getUniforms(x),x.onBeforeCompile(fe,S),Ce=q.acquireProgram(fe,he),Te.set(he,Ce),V.uniforms=fe.uniforms;let Ee=V.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ee.clippingPlanes=ne.uniform),Uo(x,fe),V.needsLights=Lc(x),V.lightsStateVersion=oe,V.needsLights&&(Ee.ambientLightColor.value=N.state.ambient,Ee.lightProbe.value=N.state.probe,Ee.directionalLights.value=N.state.directional,Ee.directionalLightShadows.value=N.state.directionalShadow,Ee.spotLights.value=N.state.spot,Ee.spotLightShadows.value=N.state.spotShadow,Ee.rectAreaLights.value=N.state.rectArea,Ee.ltc_1.value=N.state.rectAreaLTC1,Ee.ltc_2.value=N.state.rectAreaLTC2,Ee.pointLights.value=N.state.point,Ee.pointLightShadows.value=N.state.pointShadow,Ee.hemisphereLights.value=N.state.hemi,Ee.directionalShadowMap.value=N.state.directionalShadowMap,Ee.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ee.spotShadowMap.value=N.state.spotShadowMap,Ee.spotLightMatrix.value=N.state.spotLightMatrix,Ee.spotLightMap.value=N.state.spotLightMap,Ee.pointShadowMap.value=N.state.pointShadowMap,Ee.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Ce,V.uniformsList=null,Ce}function No(x){if(x.uniformsList===null){let D=x.currentProgram.getUniforms();x.uniformsList=Di.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function Uo(x,D){let z=ge.get(x);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.batchingColor=D.batchingColor,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.instancingMorph=D.instancingMorph,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function Pc(x,D,z,V,N){D.isScene!==!0&&(D=Me),Ne.resetTextureUnits();let Q=D.fog,oe=V.isMeshStandardMaterial?D.environment:null,fe=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Xn,he=(V.isMeshStandardMaterial?ot:ft).get(V.envMap||oe),Te=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ce=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ee=!!z.morphAttributes.position,Oe=!!z.morphAttributes.normal,Ye=!!z.morphAttributes.color,at=_n;V.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(at=S.toneMapping);let Ke=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ze=Ke!==void 0?Ke.length:0,be=ge.get(V),it=d.state.lights;if(We===!0&&(Y===!0||x!==y)){let St=x===y&&V.id===M;ne.setState(V,x,St)}let He=!1;V.version===be.__version?(be.needsLights&&be.lightsStateVersion!==it.state.version||be.outputColorSpace!==fe||N.isBatchedMesh&&be.batching===!1||!N.isBatchedMesh&&be.batching===!0||N.isBatchedMesh&&be.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&be.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&be.instancing===!1||!N.isInstancedMesh&&be.instancing===!0||N.isSkinnedMesh&&be.skinning===!1||!N.isSkinnedMesh&&be.skinning===!0||N.isInstancedMesh&&be.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&be.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&be.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&be.instancingMorph===!1&&N.morphTexture!==null||be.envMap!==he||V.fog===!0&&be.fog!==Q||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==ne.numPlanes||be.numIntersection!==ne.numIntersection)||be.vertexAlphas!==Te||be.vertexTangents!==Ce||be.morphTargets!==Ee||be.morphNormals!==Oe||be.morphColors!==Ye||be.toneMapping!==at||be.morphTargetsCount!==Ze)&&(He=!0):(He=!0,be.__version=V.version);let Rt=be.currentProgram;He===!0&&(Rt=vs(V,D,N));let ti=!1,Pt=!1,Fi=!1,st=Rt.getUniforms(),Nt=be.uniforms;if(me.useProgram(Rt.program)&&(ti=!0,Pt=!0,Fi=!0),V.id!==M&&(M=V.id,Pt=!0),ti||y!==x){me.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),st.setValue(A,"projectionMatrix",x.projectionMatrix),st.setValue(A,"viewMatrix",x.matrixWorldInverse);let wt=st.map.cameraPosition;wt!==void 0&&wt.setValue(A,de.setFromMatrixPosition(x.matrixWorld)),Ae.logarithmicDepthBuffer&&st.setValue(A,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&st.setValue(A,"isOrthographic",x.isOrthographicCamera===!0),y!==x&&(y=x,Pt=!0,Fi=!0)}if(N.isSkinnedMesh){st.setOptional(A,N,"bindMatrix"),st.setOptional(A,N,"bindMatrixInverse");let St=N.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),st.setValue(A,"boneTexture",St.boneTexture,Ne))}N.isBatchedMesh&&(st.setOptional(A,N,"batchingTexture"),st.setValue(A,"batchingTexture",N._matricesTexture,Ne),st.setOptional(A,N,"batchingIdTexture"),st.setValue(A,"batchingIdTexture",N._indirectTexture,Ne),st.setOptional(A,N,"batchingColorTexture"),N._colorsTexture!==null&&st.setValue(A,"batchingColorTexture",N._colorsTexture,Ne));let Ut=z.morphAttributes;if((Ut.position!==void 0||Ut.normal!==void 0||Ut.color!==void 0)&&j.update(N,z,Rt),(Pt||be.receiveShadow!==N.receiveShadow)&&(be.receiveShadow=N.receiveShadow,st.setValue(A,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Nt.envMap.value=he,Nt.flipEnvMap.value=he.isCubeTexture&&he.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&D.environment!==null&&(Nt.envMapIntensity.value=D.environmentIntensity),Pt&&(st.setValue(A,"toneMappingExposure",S.toneMappingExposure),be.needsLights&&Ic(Nt,Fi),Q&&V.fog===!0&&$.refreshFogUniforms(Nt,Q),$.refreshMaterialUniforms(Nt,V,W,te,d.state.transmissionRenderTarget[x.id]),Di.upload(A,No(be),Nt,Ne)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Di.upload(A,No(be),Nt,Ne),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&st.setValue(A,"center",N.center),st.setValue(A,"modelViewMatrix",N.modelViewMatrix),st.setValue(A,"normalMatrix",N.normalMatrix),st.setValue(A,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let St=V.uniformsGroups;for(let wt=0,da=St.length;wt<da;wt++){let On=St[wt];De.update(On,Rt),De.bind(On,Rt)}}return Rt}function Ic(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function Lc(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(x,D,z){let V=ge.get(x);V.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),ge.get(x.texture).__webglTexture=D,ge.get(x.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:z,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,D){let z=ge.get(x);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0};let Dc=A.createFramebuffer();this.setRenderTarget=function(x,D=0,z=0){U=x,C=D,I=z;let V=!0,N=null,Q=!1,oe=!1;if(x){let he=ge.get(x);if(he.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(A.FRAMEBUFFER,null),V=!1;else if(he.__webglFramebuffer===void 0)Ne.setupRenderTarget(x);else if(he.__hasExternalTextures)Ne.rebindTextures(x,ge.get(x.texture).__webglTexture,ge.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Ee=x.depthTexture;if(he.__boundDepthTexture!==Ee){if(Ee!==null&&ge.has(Ee)&&(x.width!==Ee.image.width||x.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(x)}}let Te=x.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(oe=!0);let Ce=ge.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ce[D])?N=Ce[D][z]:N=Ce[D],Q=!0):x.samples>0&&Ne.useMultisampledRTT(x)===!1?N=ge.get(x).__webglMultisampledFramebuffer:Array.isArray(Ce)?N=Ce[z]:N=Ce,R.copy(x.viewport),L.copy(x.scissor),G=x.scissorTest}else R.copy(Se).multiplyScalar(W).floor(),L.copy(Fe).multiplyScalar(W).floor(),G=$e;if(z!==0&&(N=Dc),me.bindFramebuffer(A.FRAMEBUFFER,N)&&V&&me.drawBuffers(x,N),me.viewport(R),me.scissor(L),me.setScissorTest(G),Q){let he=ge.get(x.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+D,he.__webglTexture,z)}else if(oe){let he=D;for(let Te=0;Te<x.textures.length;Te++){let Ce=ge.get(x.textures[Te]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Te,Ce.__webglTexture,z,he)}}else if(x!==null&&z!==0){let he=ge.get(x.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,he.__webglTexture,z)}M=-1},this.readRenderTargetPixels=function(x,D,z,V,N,Q,oe,fe=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=ge.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&oe!==void 0&&(he=he[oe]),he){me.bindFramebuffer(A.FRAMEBUFFER,he);try{let Te=x.textures[fe],Ce=Te.format,Ee=Te.type;if(!Ae.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-V&&z>=0&&z<=x.height-N&&(x.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+fe),A.readPixels(D,z,V,N,ye.convert(Ce),ye.convert(Ee),Q))}finally{let Te=U!==null?ge.get(U).__webglFramebuffer:null;me.bindFramebuffer(A.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(x,D,z,V,N,Q,oe,fe=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=ge.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&oe!==void 0&&(he=he[oe]),he)if(D>=0&&D<=x.width-V&&z>=0&&z<=x.height-N){me.bindFramebuffer(A.FRAMEBUFFER,he);let Te=x.textures[fe],Ce=Te.format,Ee=Te.type;if(!Ae.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Oe=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Oe),A.bufferData(A.PIXEL_PACK_BUFFER,Q.byteLength,A.STREAM_READ),x.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+fe),A.readPixels(D,z,V,N,ye.convert(Ce),ye.convert(Ee),0);let Ye=U!==null?ge.get(U).__webglFramebuffer:null;me.bindFramebuffer(A.FRAMEBUFFER,Ye);let at=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Xl(A,at,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Oe),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,Q),A.deleteBuffer(Oe),A.deleteSync(at),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,D=null,z=0){let V=Math.pow(2,-z),N=Math.floor(x.image.width*V),Q=Math.floor(x.image.height*V),oe=D!==null?D.x:0,fe=D!==null?D.y:0;Ne.setTexture2D(x,0),A.copyTexSubImage2D(A.TEXTURE_2D,z,0,0,oe,fe,N,Q),me.unbindTexture()};let Nc=A.createFramebuffer(),Uc=A.createFramebuffer();this.copyTextureToTexture=function(x,D,z=null,V=null,N=0,Q=null){Q===null&&(N!==0?(yi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=N,N=0):Q=0);let oe,fe,he,Te,Ce,Ee,Oe,Ye,at,Ke=x.isCompressedTexture?x.mipmaps[Q]:x.image;if(z!==null)oe=z.max.x-z.min.x,fe=z.max.y-z.min.y,he=z.isBox3?z.max.z-z.min.z:1,Te=z.min.x,Ce=z.min.y,Ee=z.isBox3?z.min.z:0;else{let Ut=Math.pow(2,-N);oe=Math.floor(Ke.width*Ut),fe=Math.floor(Ke.height*Ut),x.isDataArrayTexture?he=Ke.depth:x.isData3DTexture?he=Math.floor(Ke.depth*Ut):he=1,Te=0,Ce=0,Ee=0}V!==null?(Oe=V.x,Ye=V.y,at=V.z):(Oe=0,Ye=0,at=0);let Ze=ye.convert(D.format),be=ye.convert(D.type),it;D.isData3DTexture?(Ne.setTexture3D(D,0),it=A.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Ne.setTexture2DArray(D,0),it=A.TEXTURE_2D_ARRAY):(Ne.setTexture2D(D,0),it=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,D.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,D.unpackAlignment);let He=A.getParameter(A.UNPACK_ROW_LENGTH),Rt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),ti=A.getParameter(A.UNPACK_SKIP_PIXELS),Pt=A.getParameter(A.UNPACK_SKIP_ROWS),Fi=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Ke.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Ke.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Te),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ce),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ee);let st=x.isDataArrayTexture||x.isData3DTexture,Nt=D.isDataArrayTexture||D.isData3DTexture;if(x.isDepthTexture){let Ut=ge.get(x),St=ge.get(D),wt=ge.get(Ut.__renderTarget),da=ge.get(St.__renderTarget);me.bindFramebuffer(A.READ_FRAMEBUFFER,wt.__webglFramebuffer),me.bindFramebuffer(A.DRAW_FRAMEBUFFER,da.__webglFramebuffer);for(let On=0;On<he;On++)st&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ge.get(x).__webglTexture,N,Ee+On),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ge.get(D).__webglTexture,Q,at+On)),A.blitFramebuffer(Te,Ce,oe,fe,Oe,Ye,oe,fe,A.DEPTH_BUFFER_BIT,A.NEAREST);me.bindFramebuffer(A.READ_FRAMEBUFFER,null),me.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(N!==0||x.isRenderTargetTexture||ge.has(x)){let Ut=ge.get(x),St=ge.get(D);me.bindFramebuffer(A.READ_FRAMEBUFFER,Nc),me.bindFramebuffer(A.DRAW_FRAMEBUFFER,Uc);for(let wt=0;wt<he;wt++)st?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ut.__webglTexture,N,Ee+wt):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ut.__webglTexture,N),Nt?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,St.__webglTexture,Q,at+wt):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,St.__webglTexture,Q),N!==0?A.blitFramebuffer(Te,Ce,oe,fe,Oe,Ye,oe,fe,A.COLOR_BUFFER_BIT,A.NEAREST):Nt?A.copyTexSubImage3D(it,Q,Oe,Ye,at+wt,Te,Ce,oe,fe):A.copyTexSubImage2D(it,Q,Oe,Ye,Te,Ce,oe,fe);me.bindFramebuffer(A.READ_FRAMEBUFFER,null),me.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Nt?x.isDataTexture||x.isData3DTexture?A.texSubImage3D(it,Q,Oe,Ye,at,oe,fe,he,Ze,be,Ke.data):D.isCompressedArrayTexture?A.compressedTexSubImage3D(it,Q,Oe,Ye,at,oe,fe,he,Ze,Ke.data):A.texSubImage3D(it,Q,Oe,Ye,at,oe,fe,he,Ze,be,Ke):x.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,Q,Oe,Ye,oe,fe,Ze,be,Ke.data):x.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,Q,Oe,Ye,Ke.width,Ke.height,Ze,Ke.data):A.texSubImage2D(A.TEXTURE_2D,Q,Oe,Ye,oe,fe,Ze,be,Ke);A.pixelStorei(A.UNPACK_ROW_LENGTH,He),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Rt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,ti),A.pixelStorei(A.UNPACK_SKIP_ROWS,Pt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Fi),Q===0&&D.generateMipmaps&&A.generateMipmap(it),me.unbindTexture()},this.initRenderTarget=function(x){ge.get(x).__webglFramebuffer===void 0&&Ne.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Ne.setTextureCube(x,0):x.isData3DTexture?Ne.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Ne.setTexture2DArray(x,0):Ne.setTexture2D(x,0),me.unbindTexture()},this.resetState=function(){C=0,I=0,U=null,me.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}};var Ec="data:image/png;base64,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";var ha=lo.clamp,bc=()=>matchMedia("(prefers-reduced-motion: reduce)").matches,Tc=()=>new Yt({color:12239820,metalness:.65,roughness:.32}),wc=()=>new Yt({color:1843237,roughness:.48});function vn(i,e,t,n=0,s=0,r=0){let a=new vt(e,t);return a.position.set(n,s,r),i.add(a),a}function yn(i,e,t,n,s,r=0,a=0,o=0){return vn(i,new mn(e,t,n),s,r,a,o)}function Ui(i,e,t,n,s,r=0){return vn(i,new en(e,t,n,64),s,0,r)}function Ac(i){let e=new Set,t=new Set,n=new Set;i.traverse(s=>{s.geometry&&e.add(s.geometry);for(let r of Array.isArray(s.material)?s.material:[s.material])r&&(t.add(r),r.map&&n.add(r.map))}),e.forEach(s=>s.dispose()),t.forEach(s=>s.dispose()),n.forEach(s=>s.dispose())}function Cc(i,e,t=0){let n;try{n=new la({alpha:!0,antialias:!0,powerPreference:"low-power"})}catch{throw new Error("Este dispositivo no pudo abrir el 3D. Pod\xE9s seguir con las im\xE1genes del envase y el desaf\xEDo.")}n.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),n.outputColorSpace=xt,n.setClearColor(1053206,0),n.toneMapping=xr,n.toneMappingExposure=1.25;let s=new ns,r=new yt(36,1,.1,80);r.position.set(0,t+.3,e),r.lookAt(0,t,0),s.add(new hs(15857407,5916242,2.8));let a=new Ti(16777215,4);a.position.set(4,6,8),s.add(a);let o=new Ti(10075391,2);o.position.set(-4,3,-3),s.add(o);let c=new Ot;s.add(c),i.appendChild(n.domElement),n.domElement.setAttribute("aria-hidden","true");let l=!1,h=0,u=()=>{},f=()=>{},p=()=>{l||(n.render(s,r),f())},_=()=>{if(l)return;let w=i.clientWidth||340,C=i.clientHeight||400;n.setSize(w,C,!1),r.aspect=w/C,r.updateProjectionMatrix(),p()},v=new ResizeObserver(_);v.observe(i),_();let m=w=>{w.preventDefault(),b(),i.dispatchEvent(new CustomEvent("sceneerror",{detail:"El visor 3D se interrumpi\xF3. Volv\xE9 a entrar o consult\xE1 las im\xE1genes del envase."}))};n.domElement.addEventListener("webglcontextlost",m);function d(w){h=0,!(l||document.hidden)&&(u(w),p())}function T(){!l&&!h&&!document.hidden&&(h=requestAnimationFrame(d))}function b(){cancelAnimationFrame(h),h=0}let S=()=>{b(),document.hidden||(p(),T())};return document.addEventListener("visibilitychange",S),{root:c,render:p,schedule:T,stop:b,renderer:n,camera:r,setFrame(w){u=w},setAfterRender(w){f=w},dispose(){l||(l=!0,b(),v.disconnect(),document.removeEventListener("visibilitychange",S),n.domElement.removeEventListener("webglcontextlost",m),Ac(s),n.dispose(),n.forceContextLoss(),n.domElement.remove())}}}function Rc(i=()=>{}){let e=new Ot,t=Tc(),n=wc(),s=document.createElement("canvas");s.width=2048,s.height=2048;let r=s.getContext("2d");r.fillStyle="#dd0618",r.fillRect(0,0,2048,2048),r.fillStyle="#c6cbd0",r.fillRect(0,705,2048,390),r.fillStyle="#15171a",r.fillRect(0,1160,2048,750),r.textAlign="center",r.fillStyle="white",r.font="900 126px Arial",r.fillText("REFRIOIL",1024,430),r.fillStyle="#111216",r.font="900 145px Arial",r.fillText("ESPUMA",1024,868),r.font="900 89px Arial",r.fillText("DE LIMPIEZA",1024,990),r.fillStyle="white",r.font="bold 74px Arial",r.fillText("HVAC-R",1024,1280),r.font="bold 53px Arial",["Serpentinas","Motores","Radiadores"].forEach((l,h)=>r.fillText(l,1024,1465+h*100)),r.font="bold 36px Arial",r.fillText("USO INDUSTRIAL",1024,1830),r.save(),r.translate(180,1430),r.rotate(-Math.PI/2),r.font="bold 35px Arial",r.fillText("MODELO ILUSTRATIVO",0,0),r.restore();let a=new ss(s);a.colorSpace=xt;let o=new Image;o.onload=()=>{if(e.userData.disposed)return;r.fillStyle="#dd0618",r.fillRect(610,260,830,220);let l=800,h=l*o.height/o.width;r.drawImage(o,624,350-h/2,l,h),a.needsUpdate=!0,i()},o.src=Ec,e.userData.image=o,vn(e,new en(.6,.6,4.5,80,1,!0,Math.PI),new Yt({map:a,roughness:.36,metalness:.13})),Ui(e,.607,.607,.095,t,-2.25),Ui(e,.605,.605,.08,t,2.25),Ui(e,.39,.59,.23,t,2.4),Ui(e,.4,.4,.07,t,2.55),Ui(e,.19,.19,.11,n,2.64),Ui(e,.25,.25,.34,n,2.85);let c=vn(e,new en(.075,.075,.04,24),new Yt({color:328965}),0,2.89,.247);return c.rotation.x=Math.PI/2,e}function pm(i){let e=Cc(i,10.2,.15),t=Rc(e.render);e.root.add(t),t.rotation.y=.15,t.rotation.x=.05;let n=null,s=0,r=0,a=0,o=0,c=u=>{u.isPrimary===!1||u.pointerType==="mouse"&&u.button!==0||(n=u.pointerId,s=u.clientX,r=u.clientY,a=t.rotation.y,o=t.rotation.x,i.setPointerCapture(u.pointerId))},l=u=>{u.pointerId===n&&(t.rotation.y=a+(u.clientX-s)*.013,t.rotation.x=ha(o+(u.clientY-r)*.006,-.45,.45),e.render())},h=()=>{n=null};return i.addEventListener("pointerdown",c),i.addEventListener("pointermove",l),i.addEventListener("pointerup",h),i.addEventListener("pointercancel",h),e.render(),{turn(u){t.rotation.y+=u,e.render()},reset(){t.rotation.set(.05,.15,0),e.render()},dispose(){t.userData.disposed=!0,i.removeEventListener("pointerdown",c),i.removeEventListener("pointermove",l),i.removeEventListener("pointerup",h),i.removeEventListener("pointercancel",h),e.dispose()}}}function mm(i){let e=new Ot,t=Tc(),n=wc(),s=new Yt({color:11889468,metalness:.6,roughness:.4}),r=i==="radiador"?3.35:3.7,a=i==="radiador"?2.35:2.7,o=new qn(new mn(.024,a,.32),t,65),c=new ht;for(let l=0;l<65;l++)c.position.set(-r/2+l*r/64,0,0),c.updateMatrix(),o.setMatrixAt(l,c.matrix);e.add(o);for(let l=0;l<8;l++){let h=-a/2+.17+l*(a-.34)/7,u=vn(e,new en(.065,.065,r+.14,12),s,0,h,-.08);if(u.rotation.z=Math.PI/2,l%2===0){let f=vn(e,new bi((a-.34)/14,.063,8,16,Math.PI),s,r/2+.05,h+(a-.34)/14,-.08);f.rotation.z=-Math.PI/2}}if(yn(e,r+.26,.11,.55,t,0,a/2+.04),yn(e,r+.26,.11,.55,t,0,-a/2-.04),i==="radiador"){for(let l of[-1,1]){yn(e,.28,a+.35,.6,n,l*(r/2+.2));let h=vn(e,new en(.14,.14,.65,16),n,l*(r/2+.57),l*.7,0);h.rotation.z=Math.PI/2}vn(e,new en(.19,.19,.1,20),t,r/2+.2,a/2+.24,0)}else if(i==="condensador"){yn(e,r+.4,a+.25,.1,n,0,0,-.65),yn(e,r+.45,.12,1.25,t,0,a/2+.14,-.3);for(let h of[-1,1])yn(e,.14,a+.3,1.2,t,h*(r/2+.16),0,-.3);let l=vn(e,new bi(.62,.04,8,40),n,0,a/2+.22,-.25);l.rotation.x=Math.PI/2;for(let h=0;h<4;h++){let u=yn(e,.17,.04,1.05,n,0,a/2+.22,-.25);u.rotation.y=h*Math.PI/4}}else{yn(e,r+.25,.14,1.45,n,0,-a/2-.17,-.32);let l=yn(e,r,a,.1,new Yt({color:7831947,metalness:.5,roughness:.4}),0,.07,-.85);l.rotation.x=-.36}return{group:e,width:r,height:a}}function gm(i,e=()=>{}){let t=Cc(i,9,.05);t.camera.position.set(2.2,1.65,8.7),t.camera.lookAt(-.3,.05,0);let n=null,s=null,r=null,a=null,o=0,c=0,l=0,h=!1,u=null,f="interior",p=null,_=null,v=!1,m=new ht,d=[],T=360,b=40,S=()=>e({progress:l,playing:h,kind:f,reduced:bc(),recording:p?.state==="recording"});function w(M){l=ha(M,0,1);for(let B=0;B<T;B++){let k=d[B],H=ha((l-k.at)*18,0,1)*k.r;m.position.set(k.x,k.y,.26+k.r*.24),m.scale.set(H,H*.78,H*.57),m.updateMatrix(),r.setMatrixAt(B,m.matrix)}r.instanceMatrix.needsUpdate=!0;let y=Math.min(14,Math.floor(l*(T+25)/24)),R=ha((l*(T+25)-y*24)/23,0,1),L=new O(-o/2+o*(y%2?1-R:R),c/2-.07-y*(c-.14)/14,.35),G=new O(-2.2,-.05,1.25);for(let B=0;B<b;B++){let k=(B/b+l*17)%1;m.position.copy(G).lerp(L,k),m.position.y+=Math.sin(B*7.1)*.1*k,m.position.x+=Math.cos(B*5.7)*.1*k;let H=h&&l>0&&l<1?.024+k*.025:0;m.scale.setScalar(H),m.updateMatrix(),a.setMatrixAt(B,m.matrix)}a.instanceMatrix.needsUpdate=!0,t.render(),S()}function C(M){if(!["interior","condensador","radiador"].includes(M))return;h=!1,u=null,t.stop(),f=M,n&&(s.userData.disposed=!0,t.root.remove(n),Ac(n)),n=new Ot;let y=mm(f);o=y.width,c=y.height,n.add(y.group),s=Rc(t.render),s.scale.setScalar(.3),s.position.set(-2.2,-.95,1.18),s.rotation.set(0,-.9,-.1),n.add(s);let R=new Yt({color:16251388,roughness:.83});r=new qn(new Ei(1,9,6),R,T),n.add(r),a=new qn(new Ei(1,6,4),R,b),n.add(a),r.instanceMatrix.setUsage(ia),a.instanceMatrix.setUsage(ia),r.frustumCulled=!1,a.frustumCulled=!1,d.length=0;for(let L=0;L<T;L++){let G=Math.floor(L/24),B=L%24,k=G%2?23-B:B;d.push({x:-o/2+.05+B*(o-.1)/23+Math.sin(L*3.7)*.035,y:c/2-.07-G*(c-.14)/14+Math.cos(L*2.7)*.035,r:.095+L*37%17/310,at:(G*24+k)/(T+25)})}t.root.add(n),w(0)}t.setFrame(M=>{if(!h)return;let y=u===null?0:Math.min((M-u)/1e3,.06);u=M;let R=l+y/7;R>=1?(h=!1,u=null,w(1),p?.state==="recording"&&p.stop()):(w(R),t.schedule())});function I(M){if(!window.MediaRecorder||!HTMLCanvasElement.prototype.captureStream)throw new Error("Este navegador no permite guardar video. Pod\xE9s reproducir la animaci\xF3n en la pantalla del stand.");if(p?.state==="recording")return;let y=["video/mp4","video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(k=>MediaRecorder.isTypeSupported(k));if(!y)throw new Error("No hay un formato de video compatible en este navegador.");let R=document.createElement("canvas");R.width=1080,R.height=1080;let L=R.getContext("2d"),G=()=>{L.fillStyle="#101216",L.fillRect(0,0,1080,1080),L.fillStyle="#e30613",L.fillRect(48,45,8,88),L.textAlign="left",L.fillStyle="white",L.font="bold 46px Arial",L.fillText("REFRIOIL",80,87),L.font="28px Arial",L.fillText("Espuma de Limpieza HVAC-R",80,130);let k=t.renderer.domElement,H=Math.min(1e3/k.width,770/k.height),te=k.width*H,W=k.height*H;L.drawImage(k,(1080-te)/2,160+(770-W)/2,te,W),L.textAlign="center",L.fillStyle="white",L.font="bold 32px Arial",L.fillText({interior:"Serpentina interior",condensador:"Condensador",radiador:"Radiador"}[f],540,966),L.fillStyle="#bbc0c8",L.font="23px Arial",L.fillText("SIMULACI\xD3N ILUSTRATIVA \xB7 NO ES UNA PRUEBA DEL PRODUCTO",540,1010),L.font="21px Arial",L.fillText("Consultar instrucciones y precauciones del envase.",540,1045)},B=[];_=R.captureStream(30),p=new MediaRecorder(_,{mimeType:y,videoBitsPerSecond:5e6}),p.ondataavailable=k=>{k.data.size&&B.push(k.data)},p.onstop=()=>{t.setAfterRender(()=>{}),_?.getTracks().forEach(k=>k.stop()),_=null,S(),!v&&B.length&&M({blob:new Blob(B,{type:y}),extension:y.includes("mp4")?"mp4":"webm",kind:f})},p.onerror=()=>{_?.getTracks().forEach(k=>k.stop()),i.dispatchEvent(new CustomEvent("sceneerror",{detail:"No se pudo completar el video. Prob\xE1 nuevamente."}))},t.setAfterRender(G),h=!0,l=0,u=null,p.start(),w(0),t.schedule()}let U=()=>{document.hidden&&p?.state==="recording"&&(p.onstop=()=>{t.setAfterRender(()=>{}),_?.getTracks().forEach(M=>M.stop()),_=null,S()},p.stop(),h=!1,i.dispatchEvent(new CustomEvent("sceneerror",{detail:"Se cancel\xF3 el video al salir de la pesta\xF1a. Mantenela visible y volv\xE9 a intentar."})))};return document.addEventListener("visibilitychange",U),C(f),{select:C,record:I,setProgress(M){h=!1,u=null,t.stop(),w(M)},toggle(){if(bc()){h=!1,w(l<1?1:0);return}h=!h,u=null,h&&l>=1&&(l=0),w(l),h?t.schedule():t.stop()},reset(){h=!1,u=null,t.stop(),w(0)},dispose(){v=!0,h=!1,document.removeEventListener("visibilitychange",U),p?.state==="recording"&&p.stop(),_?.getTracks().forEach(M=>M.stop()),s&&(s.userData.disposed=!0),t.dispose()}}}return Gc(_m);})();
/*! For license information please see escenas-3d.js.LEGAL.txt */
