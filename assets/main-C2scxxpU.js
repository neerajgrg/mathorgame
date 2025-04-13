(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const to="175",xl=0,To=1,vl=2,Ia=1,Ua=2,pn=3,Dn=0,Rt=1,Dt=2,Rn=0,ui=1,ds=2,Ro=3,Co=4,Ml=5,Vn=100,yl=101,Sl=102,El=103,bl=104,wl=200,Al=201,Tl=202,Rl=203,hs=204,us=205,Cl=206,Pl=207,Dl=208,Ll=209,Il=210,Ul=211,Fl=212,Nl=213,Ol=214,fs=0,ps=1,ms=2,pi=3,gs=4,_s=5,xs=6,vs=7,Ar=0,zl=1,Bl=2,Cn=0,kl=1,Hl=2,Gl=3,Vl=4,Wl=5,Xl=6,ql=7,Fa=300,mi=301,gi=302,Ms=303,ys=304,Tr=306,Ss=1e3,Xn=1001,Es=1002,Zt=1003,Yl=1004,qi=1005,tn=1006,Ur=1007,qn=1008,vn=1009,Na=1010,Oa=1011,Ui=1012,no=1013,Yn=1014,mn=1015,ki=1016,io=1017,ro=1018,Fi=1020,za=35902,Ba=1021,ka=1022,jt=1023,Ha=1024,Ga=1025,Ni=1026,Oi=1027,Va=1028,so=1029,Wa=1030,oo=1031,ao=1033,mr=33776,gr=33777,_r=33778,xr=33779,bs=35840,ws=35841,As=35842,Ts=35843,Rs=36196,Cs=37492,Ps=37496,Ds=37808,Ls=37809,Is=37810,Us=37811,Fs=37812,Ns=37813,Os=37814,zs=37815,Bs=37816,ks=37817,Hs=37818,Gs=37819,Vs=37820,Ws=37821,vr=36492,Xs=36494,qs=36495,Xa=36283,Ys=36284,$s=36285,js=36286,$l=3200,jl=3201,Rr=0,Zl=1,Tn="",kt="srgb",_i="srgb-linear",Sr="linear",rt="srgb",Zn=7680,Po=519,Kl=512,Ql=513,Jl=514,qa=515,ec=516,tc=517,nc=518,ic=519,Do=35044,Lo="300 es",gn=2e3,Er=2001;class vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Io=1234567;const Li=Math.PI/180,zi=180/Math.PI;function Mi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]).toLowerCase()}function Ye(n,e,t){return Math.max(e,Math.min(t,n))}function lo(n,e){return(n%e+e)%e}function rc(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function sc(n,e,t){return n!==e?(t-n)/(e-n):0}function Ii(n,e,t){return(1-t)*n+t*e}function oc(n,e,t,i){return Ii(n,e,1-Math.exp(-t*i))}function ac(n,e=1){return e-Math.abs(lo(n,e*2)-e)}function lc(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function cc(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function dc(n,e){return n+Math.floor(Math.random()*(e-n+1))}function hc(n,e){return n+Math.random()*(e-n)}function uc(n){return n*(.5-Math.random())}function fc(n){n!==void 0&&(Io=n);let e=Io+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pc(n){return n*Li}function mc(n){return n*zi}function gc(n){return(n&n-1)===0&&n!==0}function _c(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function xc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function vc(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),f=o((e+i)/2),u=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*f,l*u,l*h,a*c);break;case"YZY":n.set(l*h,a*f,l*u,a*c);break;case"ZXZ":n.set(l*u,l*h,a*f,a*c);break;case"XZX":n.set(a*f,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*f,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*f,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function di(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function At(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ln={DEG2RAD:Li,RAD2DEG:zi,generateUUID:Mi,clamp:Ye,euclideanModulo:lo,mapLinear:rc,inverseLerp:sc,lerp:Ii,damp:oc,pingpong:ac,smoothstep:lc,smootherstep:cc,randInt:dc,randFloat:hc,randFloatSpread:uc,seededRandom:fc,degToRad:pc,radToDeg:mc,isPowerOfTwo:gc,ceilPowerOfTwo:_c,floorPowerOfTwo:xc,setQuaternionFromProperEuler:vc,normalize:At,denormalize:di};class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=t,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],u=i[7],h=i[2],p=i[5],g=i[8],y=r[0],m=r[3],d=r[6],b=r[1],S=r[4],v=r[7],P=r[2],T=r[5],w=r[8];return s[0]=o*y+a*b+l*P,s[3]=o*m+a*S+l*T,s[6]=o*d+a*v+l*w,s[1]=c*y+f*b+u*P,s[4]=c*m+f*S+u*T,s[7]=c*d+f*v+u*w,s[2]=h*y+p*b+g*P,s[5]=h*m+p*S+g*T,s[8]=h*d+p*v+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return t*o*f-t*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],u=f*o-a*c,h=a*l-f*s,p=c*s-o*l,g=t*u+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=u*y,e[1]=(r*c-f*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(f*t-r*l)*y,e[5]=(r*s-a*t)*y,e[6]=p*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Fr.makeScale(e,t)),this}rotate(e){return this.premultiply(Fr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fr=new Ge;function Ya(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Bi(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Mc(){const n=Bi("canvas");return n.style.display="block",n}const Uo={};function Mr(n){n in Uo||(Uo[n]=!0,console.warn(n))}function yc(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Sc(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ec(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Fo=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),No=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bc(){const n={enabled:!0,workingColorSpace:_i,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===rt&&(r.r=_n(r.r),r.g=_n(r.g),r.b=_n(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===rt&&(r.r=fi(r.r),r.g=fi(r.g),r.b=fi(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Tn?Sr:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[_i]:{primaries:e,whitePoint:i,transfer:Sr,toXYZ:Fo,fromXYZ:No,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:Fo,fromXYZ:No,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),n}const Qe=bc();function _n(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function fi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Kn;class wc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Kn===void 0&&(Kn=Bi("canvas")),Kn.width=e.width,Kn.height=e.height;const r=Kn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Kn}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Bi("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=_n(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(_n(t[i]/255)*255):t[i]=_n(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ac=0;class co{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ac++}),this.uuid=Mi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Nr(r[o].image)):s.push(Nr(r[o]))}else s=Nr(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Nr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?wc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tc=0;class bt extends vi{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,i=Xn,r=Xn,s=tn,o=qn,a=jt,l=vn,c=bt.DEFAULT_ANISOTROPY,f=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tc++}),this.uuid=Mi(),this.name="",this.source=new co(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fa)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ss:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case Es:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ss:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case Es:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=Fa;bt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,i=0,r=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],f=l[4],u=l[8],h=l[1],p=l[5],g=l[9],y=l[2],m=l[6],d=l[10];if(Math.abs(f-h)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,v=(p+1)/2,P=(d+1)/2,T=(f+h)/4,w=(u+y)/4,A=(g+m)/4;return S>v&&S>P?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=T/i,s=w/i):v>P?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=T/r,s=A/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=w/s,r=A/s),this.set(i,r,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(h-f)*(h-f));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-y)/b,this.z=(h-f)/b,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rc extends vi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new bt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new co(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $n extends Rc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class $a extends bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cc extends bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],u=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=f,e[t+3]=u;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(u!==y||l!==h||c!==p||f!==g){let m=1-a;const d=l*h+c*p+f*g+u*y,b=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){const P=Math.sqrt(S),T=Math.atan2(P,d*b);m=Math.sin(m*T)/P,a=Math.sin(a*T)/P}const v=a*b;if(l=l*m+h*v,c=c*m+p*v,f=f*m+g*v,u=u*m+y*v,m===1-a){const P=1/Math.sqrt(l*l+c*c+f*f+u*u);l*=P,c*=P,f*=P,u*=P}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],u=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+f*u+l*p-c*h,e[t+1]=l*g+f*h+c*u-a*p,e[t+2]=c*g+f*p+a*h-l*u,e[t+3]=f*g-a*u-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),u=a(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*f*u+c*p*g,this._y=c*p*u-h*f*g,this._z=c*f*g+h*p*u,this._w=c*f*u-h*p*g;break;case"YXZ":this._x=h*f*u+c*p*g,this._y=c*p*u-h*f*g,this._z=c*f*g-h*p*u,this._w=c*f*u+h*p*g;break;case"ZXY":this._x=h*f*u-c*p*g,this._y=c*p*u+h*f*g,this._z=c*f*g+h*p*u,this._w=c*f*u-h*p*g;break;case"ZYX":this._x=h*f*u-c*p*g,this._y=c*p*u+h*f*g,this._z=c*f*g-h*p*u,this._w=c*f*u+h*p*g;break;case"YZX":this._x=h*f*u+c*p*g,this._y=c*p*u+h*f*g,this._z=c*f*g-h*p*u,this._w=c*f*u-h*p*g;break;case"XZY":this._x=h*f*u-c*p*g,this._y=c*p*u-h*f*g,this._z=c*f*g+h*p*u,this._w=c*f*u+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],f=t[6],u=t[10],h=i+a+u;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>u){const p=2*Math.sqrt(1+i-a-u);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-i-u);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+u-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,f=t._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),u=Math.sin((1-t)*f)/c,h=Math.sin(t*f)/c;return this._w=o*u+this._w*h,this._x=i*u+this._x*h,this._y=r*u+this._y*h,this._z=s*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Oo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Oo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*t-s*r),u=2*(s*i-o*t);return this.x=t+l*c+o*u-a*f,this.y=i+l*f+a*c-s*u,this.z=r+l*u+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Or.copy(this).projectOnVector(e),this.sub(Or)}reflect(e){return this.sub(Or.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Or=new k,Oo=new Hi;class Gi{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wt):Wt.fromBufferAttribute(s,o),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yi.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yi.copy(i.boundingBox)),Yi.applyMatrix4(e.matrixWorld),this.union(Yi)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bi),$i.subVectors(this.max,bi),Qn.subVectors(e.a,bi),Jn.subVectors(e.b,bi),ei.subVectors(e.c,bi),Mn.subVectors(Jn,Qn),yn.subVectors(ei,Jn),Nn.subVectors(Qn,ei);let t=[0,-Mn.z,Mn.y,0,-yn.z,yn.y,0,-Nn.z,Nn.y,Mn.z,0,-Mn.x,yn.z,0,-yn.x,Nn.z,0,-Nn.x,-Mn.y,Mn.x,0,-yn.y,yn.x,0,-Nn.y,Nn.x,0];return!zr(t,Qn,Jn,ei,$i)||(t=[1,0,0,0,1,0,0,0,1],!zr(t,Qn,Jn,ei,$i))?!1:(ji.crossVectors(Mn,yn),t=[ji.x,ji.y,ji.z],zr(t,Qn,Jn,ei,$i))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const cn=[new k,new k,new k,new k,new k,new k,new k,new k],Wt=new k,Yi=new Gi,Qn=new k,Jn=new k,ei=new k,Mn=new k,yn=new k,Nn=new k,bi=new k,$i=new k,ji=new k,On=new k;function zr(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){On.fromArray(n,s);const a=r.x*Math.abs(On.x)+r.y*Math.abs(On.y)+r.z*Math.abs(On.z),l=e.dot(On),c=t.dot(On),f=i.dot(On);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const Pc=new Gi,wi=new k,Br=new k;class Cr{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Pc.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wi.subVectors(e,this.center);const t=wi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(wi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Br.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wi.copy(e.center).add(Br)),this.expandByPoint(wi.copy(e.center).sub(Br))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new k,kr=new k,Zi=new k,Sn=new k,Hr=new k,Ki=new k,Gr=new k;class ho{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.origin).addScaledVector(this.direction,t),dn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){kr.copy(e).add(t).multiplyScalar(.5),Zi.copy(t).sub(e).normalize(),Sn.copy(this.origin).sub(kr);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Zi),a=Sn.dot(this.direction),l=-Sn.dot(Zi),c=Sn.lengthSq(),f=Math.abs(1-o*o);let u,h,p,g;if(f>0)if(u=o*l-a,h=o*a-l,g=s*f,u>=0)if(h>=-g)if(h<=g){const y=1/f;u*=y,h*=y,p=u*(u+o*h+2*a)+h*(o*u+h+2*l)+c}else h=s,u=Math.max(0,-(o*h+a)),p=-u*u+h*(h+2*l)+c;else h=-s,u=Math.max(0,-(o*h+a)),p=-u*u+h*(h+2*l)+c;else h<=-g?(u=Math.max(0,-(-o*s+a)),h=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+h*(h+2*l)+c):h<=g?(u=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(u=Math.max(0,-(o*s+a)),h=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+h*(h+2*l)+c);else h=o>0?-s:s,u=Math.max(0,-(o*h+a)),p=-u*u+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(kr).addScaledVector(Zi,h),p}intersectSphere(e,t){dn.subVectors(e.center,this.origin);const i=dn.dot(this.direction),r=dn.dot(dn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,i,r,s){Hr.subVectors(t,e),Ki.subVectors(i,e),Gr.crossVectors(Hr,Ki);let o=this.direction.dot(Gr),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Sn.subVectors(this.origin,e);const l=a*this.direction.dot(Ki.crossVectors(Sn,Ki));if(l<0)return null;const c=a*this.direction.dot(Hr.cross(Sn));if(c<0||l+c>o)return null;const f=-a*Sn.dot(Gr);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,i,r,s,o,a,l,c,f,u,h,p,g,y,m){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,f,u,h,p,g,y,m)}set(e,t,i,r,s,o,a,l,c,f,u,h,p,g,y,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=f,d[10]=u,d[14]=h,d[3]=p,d[7]=g,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ti.setFromMatrixColumn(e,0).length(),s=1/ti.setFromMatrixColumn(e,1).length(),o=1/ti.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const h=o*f,p=o*u,g=a*f,y=a*u;t[0]=l*f,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=h-y*c,t[9]=-a*l,t[2]=y-h*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*f,p=l*u,g=c*f,y=c*u;t[0]=h+y*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*f,t[9]=-a,t[2]=p*a-g,t[6]=y+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*f,p=l*u,g=c*f,y=c*u;t[0]=h-y*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*f,t[9]=y-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*f,p=o*u,g=a*f,y=a*u;t[0]=l*f,t[4]=g*c-p,t[8]=h*c+y,t[1]=l*u,t[5]=y*c+h,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,y=a*c;t[0]=l*f,t[4]=y-h*u,t[8]=g*u+p,t[1]=u,t[5]=o*f,t[9]=-a*f,t[2]=-c*f,t[6]=p*u+g,t[10]=h-y*u}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,y=a*c;t[0]=l*f,t[4]=-u,t[8]=c*f,t[1]=h*u+y,t[5]=o*f,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*f,t[10]=y*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dc,e,Lc)}lookAt(e,t,i){const r=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),En.crossVectors(i,It),En.lengthSq()===0&&(Math.abs(i.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),En.crossVectors(i,It)),En.normalize(),Qi.crossVectors(It,En),r[0]=En.x,r[4]=Qi.x,r[8]=It.x,r[1]=En.y,r[5]=Qi.y,r[9]=It.y,r[2]=En.z,r[6]=Qi.z,r[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],u=i[5],h=i[9],p=i[13],g=i[2],y=i[6],m=i[10],d=i[14],b=i[3],S=i[7],v=i[11],P=i[15],T=r[0],w=r[4],A=r[8],x=r[12],_=r[1],R=r[5],I=r[9],O=r[13],G=r[2],Z=r[6],U=r[10],Y=r[14],N=r[3],le=r[7],H=r[11],ie=r[15];return s[0]=o*T+a*_+l*G+c*N,s[4]=o*w+a*R+l*Z+c*le,s[8]=o*A+a*I+l*U+c*H,s[12]=o*x+a*O+l*Y+c*ie,s[1]=f*T+u*_+h*G+p*N,s[5]=f*w+u*R+h*Z+p*le,s[9]=f*A+u*I+h*U+p*H,s[13]=f*x+u*O+h*Y+p*ie,s[2]=g*T+y*_+m*G+d*N,s[6]=g*w+y*R+m*Z+d*le,s[10]=g*A+y*I+m*U+d*H,s[14]=g*x+y*O+m*Y+d*ie,s[3]=b*T+S*_+v*G+P*N,s[7]=b*w+S*R+v*Z+P*le,s[11]=b*A+S*I+v*U+P*H,s[15]=b*x+S*O+v*Y+P*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],u=e[6],h=e[10],p=e[14],g=e[3],y=e[7],m=e[11],d=e[15];return g*(+s*l*u-r*c*u-s*a*h+i*c*h+r*a*p-i*l*p)+y*(+t*l*p-t*c*h+s*o*h-r*o*p+r*c*f-s*l*f)+m*(+t*c*u-t*a*p-s*o*u+i*o*p+s*a*f-i*c*f)+d*(-r*a*f-t*l*u+t*a*h+r*o*u-i*o*h+i*l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],u=e[9],h=e[10],p=e[11],g=e[12],y=e[13],m=e[14],d=e[15],b=u*m*c-y*h*c+y*l*p-a*m*p-u*l*d+a*h*d,S=g*h*c-f*m*c-g*l*p+o*m*p+f*l*d-o*h*d,v=f*y*c-g*u*c+g*a*p-o*y*p-f*a*d+o*u*d,P=g*u*l-f*y*l-g*a*h+o*y*h+f*a*m-o*u*m,T=t*b+i*S+r*v+s*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=b*w,e[1]=(y*h*s-u*m*s-y*r*p+i*m*p+u*r*d-i*h*d)*w,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*d+i*l*d)*w,e[3]=(u*l*s-a*h*s-u*r*c+i*h*c+a*r*p-i*l*p)*w,e[4]=S*w,e[5]=(f*m*s-g*h*s+g*r*p-t*m*p-f*r*d+t*h*d)*w,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*d-t*l*d)*w,e[7]=(o*h*s-f*l*s+f*r*c-t*h*c-o*r*p+t*l*p)*w,e[8]=v*w,e[9]=(g*u*s-f*y*s-g*i*p+t*y*p+f*i*d-t*u*d)*w,e[10]=(o*y*s-g*a*s+g*i*c-t*y*c-o*i*d+t*a*d)*w,e[11]=(f*a*s-o*u*s-f*i*c+t*u*c+o*i*p-t*a*p)*w,e[12]=P*w,e[13]=(f*y*r-g*u*r+g*i*h-t*y*h-f*i*m+t*u*m)*w,e[14]=(g*a*r-o*y*r-g*i*l+t*y*l+o*i*m-t*a*m)*w,e[15]=(o*u*r-f*a*r+f*i*l-t*u*l-o*i*h+t*a*h)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,f=o+o,u=a+a,h=s*c,p=s*f,g=s*u,y=o*f,m=o*u,d=a*u,b=l*c,S=l*f,v=l*u,P=i.x,T=i.y,w=i.z;return r[0]=(1-(y+d))*P,r[1]=(p+v)*P,r[2]=(g-S)*P,r[3]=0,r[4]=(p-v)*T,r[5]=(1-(h+d))*T,r[6]=(m+b)*T,r[7]=0,r[8]=(g+S)*w,r[9]=(m-b)*w,r[10]=(1-(h+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ti.set(r[0],r[1],r[2]).length();const o=ti.set(r[4],r[5],r[6]).length(),a=ti.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Xt.copy(this);const c=1/s,f=1/o,u=1/a;return Xt.elements[0]*=c,Xt.elements[1]*=c,Xt.elements[2]*=c,Xt.elements[4]*=f,Xt.elements[5]*=f,Xt.elements[6]*=f,Xt.elements[8]*=u,Xt.elements[9]*=u,Xt.elements[10]*=u,t.setFromRotationMatrix(Xt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=gn){const l=this.elements,c=2*s/(t-e),f=2*s/(i-r),u=(t+e)/(t-e),h=(i+r)/(i-r);let p,g;if(a===gn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Er)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=gn){const l=this.elements,c=1/(t-e),f=1/(i-r),u=1/(o-s),h=(t+e)*c,p=(i+r)*f;let g,y;if(a===gn)g=(o+s)*u,y=-2*u;else if(a===Er)g=s*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ti=new k,Xt=new at,Dc=new k(0,0,0),Lc=new k(1,1,1),En=new k,Qi=new k,It=new k,zo=new at,Bo=new Hi;class Ht{constructor(e=0,t=0,i=0,r=Ht.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],u=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return zo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zo,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bo.setFromEuler(this),this.setFromQuaternion(Bo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ht.DEFAULT_ORDER="XYZ";class uo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ic=0;const ko=new k,ni=new Hi,hn=new at,Ji=new k,Ai=new k,Uc=new k,Fc=new Hi,Ho=new k(1,0,0),Go=new k(0,1,0),Vo=new k(0,0,1),Wo={type:"added"},Nc={type:"removed"},ii={type:"childadded",child:null},Vr={type:"childremoved",child:null};class xt extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ic++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new k,t=new Ht,i=new Hi,r=new k(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new Ge}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.multiply(ni),this}rotateOnWorldAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.premultiply(ni),this}rotateX(e){return this.rotateOnAxis(Ho,e)}rotateY(e){return this.rotateOnAxis(Go,e)}rotateZ(e){return this.rotateOnAxis(Vo,e)}translateOnAxis(e,t){return ko.copy(e).applyQuaternion(this.quaternion),this.position.add(ko.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ho,e)}translateY(e){return this.translateOnAxis(Go,e)}translateZ(e){return this.translateOnAxis(Vo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ji.copy(e):Ji.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ai.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(Ai,Ji,this.up):hn.lookAt(Ji,Ai,this.up),this.quaternion.setFromRotationMatrix(hn),r&&(hn.extractRotation(r.matrixWorld),ni.setFromRotationMatrix(hn),this.quaternion.premultiply(ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wo),ii.child=e,this.dispatchEvent(ii),ii.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nc),Vr.child=e,this.dispatchEvent(Vr),Vr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wo),ii.child=e,this.dispatchEvent(ii),ii.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ai,e,Uc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ai,Fc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),u=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}xt.DEFAULT_UP=new k(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qt=new k,un=new k,Wr=new k,fn=new k,ri=new k,si=new k,Xo=new k,Xr=new k,qr=new k,Yr=new k,$r=new st,jr=new st,Zr=new st;class Yt{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),qt.subVectors(e,t),r.cross(qt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){qt.subVectors(r,t),un.subVectors(i,t),Wr.subVectors(e,t);const o=qt.dot(qt),a=qt.dot(un),l=qt.dot(Wr),c=un.dot(un),f=un.dot(Wr),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const h=1/u,p=(c*l-a*f)*h,g=(o*f-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fn.x),l.addScaledVector(o,fn.y),l.addScaledVector(a,fn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return $r.setScalar(0),jr.setScalar(0),Zr.setScalar(0),$r.fromBufferAttribute(e,t),jr.fromBufferAttribute(e,i),Zr.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector($r,s.x),o.addScaledVector(jr,s.y),o.addScaledVector(Zr,s.z),o}static isFrontFacing(e,t,i,r){return qt.subVectors(i,t),un.subVectors(e,t),qt.cross(un).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),un.subVectors(this.a,this.b),qt.cross(un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Yt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ri.subVectors(r,i),si.subVectors(s,i),Xr.subVectors(e,i);const l=ri.dot(Xr),c=si.dot(Xr);if(l<=0&&c<=0)return t.copy(i);qr.subVectors(e,r);const f=ri.dot(qr),u=si.dot(qr);if(f>=0&&u<=f)return t.copy(r);const h=l*u-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(i).addScaledVector(ri,o);Yr.subVectors(e,s);const p=ri.dot(Yr),g=si.dot(Yr);if(g>=0&&p<=g)return t.copy(s);const y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(si,a);const m=f*g-p*u;if(m<=0&&u-f>=0&&p-g>=0)return Xo.subVectors(s,r),a=(u-f)/(u-f+(p-g)),t.copy(r).addScaledVector(Xo,a);const d=1/(m+y+h);return o=y*d,a=h*d,t.copy(i).addScaledVector(ri,o).addScaledVector(si,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ja={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},er={h:0,s:0,l:0};function Kr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Re{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=lo(e,1),t=Ye(t,0,1),i=Ye(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Kr(o,s,e+1/3),this.g=Kr(o,s,e),this.b=Kr(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,t=kt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const i=ja[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_n(e.r),this.g=_n(e.g),this.b=_n(e.b),this}copyLinearToSRGB(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return Qe.fromWorkingColorSpace(St.copy(this),e),Math.round(Ye(St.r*255,0,255))*65536+Math.round(Ye(St.g*255,0,255))*256+Math.round(Ye(St.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(St.copy(this),t);const i=St.r,r=St.g,s=St.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=f<=.5?u/(o+a):u/(2-o-a),o){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=kt){Qe.fromWorkingColorSpace(St.copy(this),e);const t=St.r,i=St.g,r=St.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(bn),this.setHSL(bn.h+e,bn.s+t,bn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(bn),e.getHSL(er);const i=Ii(bn.h,er.h,t),r=Ii(bn.s,er.s,t),s=Ii(bn.l,er.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const St=new Re;Re.NAMES=ja;let Oc=0;class In extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=ui,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hs,this.blendDst=us,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=pi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Po,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zn,this.stencilZFail=Zn,this.stencilZPass=Zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ui&&(i.blending=this.blending),this.side!==Dn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==hs&&(i.blendSrc=this.blendSrc),this.blendDst!==us&&(i.blendDst=this.blendDst),this.blendEquation!==Vn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==pi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Po&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ft extends In{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ht,this.combine=Ar,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new k,tr=new Xe;let zc=0;class Kt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Do,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)tr.fromBufferAttribute(this,t),tr.applyMatrix3(e),this.setXY(t,tr.x,tr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=di(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=At(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=di(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=di(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=di(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),r=At(r,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Do&&(e.usage=this.usage),e}}class Za extends Kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ka extends Kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class pt extends Kt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Bc=0;const Bt=new at,Qr=new xt,oi=new k,Ut=new Gi,Ti=new Gi,_t=new k;class Nt extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bc++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ya(e)?Ka:Za)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,i){return Bt.makeTranslation(e,t,i),this.applyMatrix4(Bt),this}scale(e,t,i){return Bt.makeScale(e,t,i),this.applyMatrix4(Bt),this}lookAt(e){return Qr.lookAt(e),Qr.updateMatrix(),this.applyMatrix4(Qr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oi).negate(),this.translate(oi.x,oi.y,oi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ut.setFromBufferAttribute(s),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ti.setFromBufferAttribute(a),this.morphTargetsRelative?(_t.addVectors(Ut.min,Ti.min),Ut.expandByPoint(_t),_t.addVectors(Ut.max,Ti.max),Ut.expandByPoint(_t)):(Ut.expandByPoint(Ti.min),Ut.expandByPoint(Ti.max))}Ut.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)_t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(_t));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)_t.fromBufferAttribute(a,c),l&&(oi.fromBufferAttribute(e,c),_t.add(oi)),r=Math.max(r,i.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<i.count;A++)a[A]=new k,l[A]=new k;const c=new k,f=new k,u=new k,h=new Xe,p=new Xe,g=new Xe,y=new k,m=new k;function d(A,x,_){c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,x),u.fromBufferAttribute(i,_),h.fromBufferAttribute(s,A),p.fromBufferAttribute(s,x),g.fromBufferAttribute(s,_),f.sub(c),u.sub(c),p.sub(h),g.sub(h);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(y.copy(f).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(R),m.copy(u).multiplyScalar(p.x).addScaledVector(f,-g.x).multiplyScalar(R),a[A].add(y),a[x].add(y),a[_].add(y),l[A].add(m),l[x].add(m),l[_].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let A=0,x=b.length;A<x;++A){const _=b[A],R=_.start,I=_.count;for(let O=R,G=R+I;O<G;O+=3)d(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const S=new k,v=new k,P=new k,T=new k;function w(A){P.fromBufferAttribute(r,A),T.copy(P);const x=a[A];S.copy(x),S.sub(P.multiplyScalar(P.dot(x))).normalize(),v.crossVectors(T,x);const R=v.dot(l[A])<0?-1:1;o.setXYZW(A,S.x,S.y,S.z,R)}for(let A=0,x=b.length;A<x;++A){const _=b[A],R=_.start,I=_.count;for(let O=R,G=R+I;O<G;O+=3)w(e.getX(O+0)),w(e.getX(O+1)),w(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,f=new k,u=new k;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),f.subVectors(o,s),u.subVectors(r,s),f.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(f),l.add(f),c.add(f),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),f.subVectors(o,s),u.subVectors(r,s),f.cross(u),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,u=a.normalized,h=new c.constructor(l.length*f);let p=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*f;for(let d=0;d<f;d++)h[g++]=c[p++]}return new Kt(h,f,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,u=c.length;f<u;f++){const h=c[f],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let u=0,h=c.length;u<h;u++){const p=c[u];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(t))}const s=e.morphAttributes;for(const c in s){const f=[],u=s[c];for(let h=0,p=u.length;h<p;h++)f.push(u[h].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qo=new at,zn=new ho,nr=new Cr,Yo=new k,ir=new k,rr=new k,sr=new k,Jr=new k,or=new k,$o=new k,ar=new k;class Ee extends xt{constructor(e=new Nt,t=new Ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){or.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],u=s[l];f!==0&&(Jr.fromBufferAttribute(u,e),o?or.addScaledVector(Jr,f):or.addScaledVector(Jr.sub(t),f))}t.add(or)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),nr.copy(i.boundingSphere),nr.applyMatrix4(s),zn.copy(e.ray).recast(e.near),!(nr.containsPoint(zn.origin)===!1&&(zn.intersectSphere(nr,Yo)===null||zn.origin.distanceToSquared(Yo)>(e.far-e.near)**2))&&(qo.copy(s).invert(),zn.copy(e.ray).applyMatrix4(qo),!(i.boundingBox!==null&&zn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,zn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,u=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){const m=h[g],d=o[m.materialIndex],b=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=b,P=S;v<P;v+=3){const T=a.getX(v),w=a.getX(v+1),A=a.getX(v+2);r=lr(this,d,e,i,c,f,u,T,w,A),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,d=y;m<d;m+=3){const b=a.getX(m),S=a.getX(m+1),v=a.getX(m+2);r=lr(this,o,e,i,c,f,u,b,S,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){const m=h[g],d=o[m.materialIndex],b=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=b,P=S;v<P;v+=3){const T=v,w=v+1,A=v+2;r=lr(this,d,e,i,c,f,u,T,w,A),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,d=y;m<d;m+=3){const b=m,S=m+1,v=m+2;r=lr(this,o,e,i,c,f,u,b,S,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function kc(n,e,t,i,r,s,o,a){let l;if(e.side===Rt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Dn,a),l===null)return null;ar.copy(a),ar.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ar);return c<t.near||c>t.far?null:{distance:c,point:ar.clone(),object:n}}function lr(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,ir),n.getVertexPosition(l,rr),n.getVertexPosition(c,sr);const f=kc(n,e,t,i,ir,rr,sr,$o);if(f){const u=new k;Yt.getBarycoord($o,ir,rr,sr,u),r&&(f.uv=Yt.getInterpolatedAttribute(r,a,l,c,u,new Xe)),s&&(f.uv1=Yt.getInterpolatedAttribute(s,a,l,c,u,new Xe)),o&&(f.normal=Yt.getInterpolatedAttribute(o,a,l,c,u,new k),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new k,materialIndex:0};Yt.getNormal(ir,rr,sr,h.normal),f.face=h,f.barycoord=u}return f}class it extends Nt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],u=[];let h=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(f,3)),this.setAttribute("uv",new pt(u,2));function g(y,m,d,b,S,v,P,T,w,A,x){const _=v/w,R=P/A,I=v/2,O=P/2,G=T/2,Z=w+1,U=A+1;let Y=0,N=0;const le=new k;for(let H=0;H<U;H++){const ie=H*R-O;for(let F=0;F<Z;F++){const z=F*_-I;le[y]=z*b,le[m]=ie*S,le[d]=G,c.push(le.x,le.y,le.z),le[y]=0,le[m]=0,le[d]=T>0?1:-1,f.push(le.x,le.y,le.z),u.push(F/w),u.push(1-H/A),Y+=1}}for(let H=0;H<A;H++)for(let ie=0;ie<w;ie++){const F=h+ie+Z*H,z=h+ie+Z*(H+1),D=h+(ie+1)+Z*(H+1),q=h+(ie+1)+Z*H;l.push(F,z,q),l.push(z,D,q),N+=6}a.addGroup(p,N,x),p+=N,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new it(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Tt(n){const e={};for(let t=0;t<n.length;t++){const i=xi(n[t]);for(const r in i)e[r]=i[r]}return e}function Hc(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Qa(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const Gc={clone:xi,merge:Tt};var Vc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends In{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vc,this.fragmentShader=Wc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xi(e.uniforms),this.uniformsGroups=Hc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ja extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wn=new k,jo=new Xe,Zo=new Xe;class ct extends Ja{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Li*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zi*2*Math.atan(Math.tan(Li*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wn.x,wn.y).multiplyScalar(-e/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wn.x,wn.y).multiplyScalar(-e/wn.z)}getViewSize(e,t){return this.getViewBounds(e,jo,Zo),t.subVectors(Zo,jo)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Li*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ai=-90,li=1;class Xc extends xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ct(ai,li,e,t);r.layers=this.layers,this.add(r);const s=new ct(ai,li,e,t);s.layers=this.layers,this.add(s);const o=new ct(ai,li,e,t);o.layers=this.layers,this.add(o);const a=new ct(ai,li,e,t);a.layers=this.layers,this.add(a);const l=new ct(ai,li,e,t);l.layers=this.layers,this.add(l);const c=new ct(ai,li,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===gn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Er)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,f),e.setRenderTarget(u,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class el extends bt{constructor(e=[],t=mi,i,r,s,o,a,l,c,f){super(e,t,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qc extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new el(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new it(5,5,5),s=new Ln({name:"CubemapFromEquirect",uniforms:xi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rt,blending:Rn});s.uniforms.tEquirect.value=t;const o=new Ee(r,s),a=t.minFilter;return t.minFilter===qn&&(t.minFilter=tn),new Xc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}let Et=class extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}};const Yc={type:"move"};class es{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,i),d=this._getHandJoint(c,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const f=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=f.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yc)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Et;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class fo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Re(e),this.density=t}clone(){return new fo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Qt extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ht,this.environmentIntensity=1,this.environmentRotation=new Ht,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ts=new k,$c=new k,jc=new Ge;class An{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ts.subVectors(i,t).cross($c.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ts),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||jc.getNormalMatrix(e),r=this.coplanarPoint(ts).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bn=new Cr,cr=new k;class po{constructor(e=new An,t=new An,i=new An,r=new An,s=new An,o=new An){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=gn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],u=r[6],h=r[7],p=r[8],g=r[9],y=r[10],m=r[11],d=r[12],b=r[13],S=r[14],v=r[15];if(i[0].setComponents(l-s,h-c,m-p,v-d).normalize(),i[1].setComponents(l+s,h+c,m+p,v+d).normalize(),i[2].setComponents(l+o,h+f,m+g,v+b).normalize(),i[3].setComponents(l-o,h-f,m-g,v-b).normalize(),i[4].setComponents(l-a,h-u,m-y,v-S).normalize(),t===gn)i[5].setComponents(l+a,h+u,m+y,v+S).normalize();else if(t===Er)i[5].setComponents(a,u,y,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bn)}intersectsSprite(e){return Bn.center.set(0,0,0),Bn.radius=.7071067811865476,Bn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(cr.x=r.normal.x>0?e.max.x:e.min.x,cr.y=r.normal.y>0?e.max.y:e.min.y,cr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(cr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tl extends In{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ko=new at,Zs=new ho,dr=new Cr,hr=new k;class Zc extends xt{constructor(e=new Nt,t=new tl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),dr.copy(i.boundingSphere),dr.applyMatrix4(r),dr.radius+=s,e.ray.intersectsSphere(dr)===!1)return;Ko.copy(r).invert(),Zs.copy(e.ray).applyMatrix4(Ko);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=h,y=p;g<y;g++){const m=c.getX(g);hr.fromBufferAttribute(u,m),Qo(hr,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=h,y=p;g<y;g++)hr.fromBufferAttribute(u,g),Qo(hr,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Qo(n,e,t,i,r,s,o){const a=Zs.distanceSqToPoint(n);if(a<t){const l=new k;Zs.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Kc extends bt{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class nl extends bt{constructor(e,t,i=Yn,r,s,o,a=Zt,l=Zt,c,f=Ni){if(f!==Ni&&f!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new co(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $t extends Nt{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],u=[],h=[],p=[];let g=0;const y=[],m=i/2;let d=0;b(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(f),this.setAttribute("position",new pt(u,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(p,2));function b(){const v=new k,P=new k;let T=0;const w=(t-e)/i;for(let A=0;A<=s;A++){const x=[],_=A/s,R=_*(t-e)+e;for(let I=0;I<=r;I++){const O=I/r,G=O*l+a,Z=Math.sin(G),U=Math.cos(G);P.x=R*Z,P.y=-_*i+m,P.z=R*U,u.push(P.x,P.y,P.z),v.set(Z,w,U).normalize(),h.push(v.x,v.y,v.z),p.push(O,1-_),x.push(g++)}y.push(x)}for(let A=0;A<r;A++)for(let x=0;x<s;x++){const _=y[x][A],R=y[x+1][A],I=y[x+1][A+1],O=y[x][A+1];(e>0||x!==0)&&(f.push(_,R,O),T+=3),(t>0||x!==s-1)&&(f.push(R,I,O),T+=3)}c.addGroup(d,T,0),d+=T}function S(v){const P=g,T=new Xe,w=new k;let A=0;const x=v===!0?e:t,_=v===!0?1:-1;for(let I=1;I<=r;I++)u.push(0,m*_,0),h.push(0,_,0),p.push(.5,.5),g++;const R=g;for(let I=0;I<=r;I++){const G=I/r*l+a,Z=Math.cos(G),U=Math.sin(G);w.x=x*U,w.y=m*_,w.z=x*Z,u.push(w.x,w.y,w.z),h.push(0,_,0),T.x=Z*.5+.5,T.y=U*.5*_+.5,p.push(T.x,T.y),g++}for(let I=0;I<r;I++){const O=P+I,G=R+I;v===!0?f.push(G,G+1,O):f.push(G+1,G,O),A+=3}c.addGroup(d,A,v===!0?1:2),d+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $t(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xn extends $t{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new xn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vi extends Nt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),c(i),f(),this.setAttribute("position",new pt(s,3)),this.setAttribute("normal",new pt(s.slice(),3)),this.setAttribute("uv",new pt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const S=new k,v=new k,P=new k;for(let T=0;T<t.length;T+=3)p(t[T+0],S),p(t[T+1],v),p(t[T+2],P),l(S,v,P,b)}function l(b,S,v,P){const T=P+1,w=[];for(let A=0;A<=T;A++){w[A]=[];const x=b.clone().lerp(v,A/T),_=S.clone().lerp(v,A/T),R=T-A;for(let I=0;I<=R;I++)I===0&&A===T?w[A][I]=x:w[A][I]=x.clone().lerp(_,I/R)}for(let A=0;A<T;A++)for(let x=0;x<2*(T-A)-1;x++){const _=Math.floor(x/2);x%2===0?(h(w[A][_+1]),h(w[A+1][_]),h(w[A][_])):(h(w[A][_+1]),h(w[A+1][_+1]),h(w[A+1][_]))}}function c(b){const S=new k;for(let v=0;v<s.length;v+=3)S.x=s[v+0],S.y=s[v+1],S.z=s[v+2],S.normalize().multiplyScalar(b),s[v+0]=S.x,s[v+1]=S.y,s[v+2]=S.z}function f(){const b=new k;for(let S=0;S<s.length;S+=3){b.x=s[S+0],b.y=s[S+1],b.z=s[S+2];const v=m(b)/2/Math.PI+.5,P=d(b)/Math.PI+.5;o.push(v,1-P)}g(),u()}function u(){for(let b=0;b<o.length;b+=6){const S=o[b+0],v=o[b+2],P=o[b+4],T=Math.max(S,v,P),w=Math.min(S,v,P);T>.9&&w<.1&&(S<.2&&(o[b+0]+=1),v<.2&&(o[b+2]+=1),P<.2&&(o[b+4]+=1))}}function h(b){s.push(b.x,b.y,b.z)}function p(b,S){const v=b*3;S.x=e[v+0],S.y=e[v+1],S.z=e[v+2]}function g(){const b=new k,S=new k,v=new k,P=new k,T=new Xe,w=new Xe,A=new Xe;for(let x=0,_=0;x<s.length;x+=9,_+=6){b.set(s[x+0],s[x+1],s[x+2]),S.set(s[x+3],s[x+4],s[x+5]),v.set(s[x+6],s[x+7],s[x+8]),T.set(o[_+0],o[_+1]),w.set(o[_+2],o[_+3]),A.set(o[_+4],o[_+5]),P.copy(b).add(S).add(v).divideScalar(3);const R=m(P);y(T,_+0,b,R),y(w,_+2,S,R),y(A,_+4,v,R)}}function y(b,S,v,P){P<0&&b.x===1&&(o[S]=b.x-1),v.x===0&&v.z===0&&(o[S]=P/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function d(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vi(e.vertices,e.indices,e.radius,e.details)}}class mo extends Vi{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new mo(e.radius,e.detail)}}class br extends Vi{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new br(e.radius,e.detail)}}class go extends Vi{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new go(e.radius,e.detail)}}class Pn extends Nt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,u=e/a,h=t/l,p=[],g=[],y=[],m=[];for(let d=0;d<f;d++){const b=d*h-o;for(let S=0;S<c;S++){const v=S*u-s;g.push(v,-b,0),y.push(0,0,1),m.push(S/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<a;b++){const S=b+c*d,v=b+c*(d+1),P=b+1+c*(d+1),T=b+1+c*d;p.push(S,v,T),p.push(v,P,T)}this.setIndex(p),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(y,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ct extends Nt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],u=new k,h=new k,p=[],g=[],y=[],m=[];for(let d=0;d<=i;d++){const b=[],S=d/i;let v=0;d===0&&o===0?v=.5/t:d===i&&l===Math.PI&&(v=-.5/t);for(let P=0;P<=t;P++){const T=P/t;u.x=-e*Math.cos(r+T*s)*Math.sin(o+S*a),u.y=e*Math.cos(o+S*a),u.z=e*Math.sin(r+T*s)*Math.sin(o+S*a),g.push(u.x,u.y,u.z),h.copy(u).normalize(),y.push(h.x,h.y,h.z),m.push(T+v,1-S),b.push(c++)}f.push(b)}for(let d=0;d<i;d++)for(let b=0;b<t;b++){const S=f[d][b+1],v=f[d][b],P=f[d+1][b],T=f[d+1][b+1];(d!==0||o>0)&&p.push(S,v,T),(d!==i-1||l<Math.PI)&&p.push(v,P,T)}this.setIndex(p),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(y,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ct(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Pr extends Nt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],f=new k,u=new k,h=new k;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const y=g/r*s,m=p/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(y),u.y=(e+t*Math.cos(m))*Math.sin(y),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),f.x=e*Math.cos(y),f.y=e*Math.sin(y),h.subVectors(u,f).normalize(),l.push(h.x,h.y,h.z),c.push(g/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const y=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,d=(r+1)*(p-1)+g,b=(r+1)*p+g;o.push(y,m,b),o.push(m,d,b)}this.setIndex(o),this.setAttribute("position",new pt(a,3)),this.setAttribute("normal",new pt(l,3)),this.setAttribute("uv",new pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ri extends In{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rr,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ht,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fe extends In{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Re(16777215),this.specular=new Re(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rr,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ht,this.combine=Ar,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qc extends In{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rr,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ht,this.combine=Ar,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jc extends In{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$l,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ed extends In{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Jo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class td{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(f){a++,s===!1&&r.onStart!==void 0&&r.onStart(f,o,a),s=!0},this.itemEnd=function(f){o++,r.onProgress!==void 0&&r.onProgress(f,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,u){return c.push(f,u),this},this.removeHandler=function(f){const u=c.indexOf(f);return u!==-1&&c.splice(u,2),this},this.getHandler=function(f){for(let u=0,h=c.length;u<h;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(f))return g}return null}}}const nd=new td;class _o{constructor(e){this.manager=e!==void 0?e:nd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}_o.DEFAULT_MATERIAL_NAME="__DEFAULT";class id extends _o{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Jo.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Bi("img");function l(){f(),Jo.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){f(),r&&r(u),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class rd extends _o{constructor(e){super(e)}load(e,t,i,r){const s=new bt,o=new id(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class xo extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ns=new at,ea=new k,ta=new k;class il{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new po,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ea.setFromMatrixPosition(e.matrixWorld),t.position.copy(ea),ta.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ta),t.updateMatrixWorld(),ns.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ns),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ns)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const na=new at,Ci=new k,is=new k;class sd extends il{constructor(){super(new ct(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ci.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ci),is.copy(i.position),is.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(is),i.updateMatrixWorld(),r.makeTranslation(-Ci.x,-Ci.y,-Ci.z),na.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(na)}}class od extends xo{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new sd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class rl extends Ja{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ad extends il{constructor(){super(new rl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rn extends xo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new ad}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class sn extends xo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ld extends ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const ia=new at;class sl{constructor(e,t,i=0,r=1/0){this.ray=new ho(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new uo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ia.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ia),this}intersectObject(e,t=!0,i=[]){return Ks(e,this,i,t),i.sort(ra),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Ks(e[r],this,i,t);return i.sort(ra),i}}function ra(n,e){return n.distance-e.distance}function Ks(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)Ks(s[o],e,t,!0)}}function sa(n,e,t,i){const r=cd(i);switch(t){case Ba:return n*e;case Ha:return n*e;case Ga:return n*e*2;case Va:return n*e/r.components*r.byteLength;case so:return n*e/r.components*r.byteLength;case Wa:return n*e*2/r.components*r.byteLength;case oo:return n*e*2/r.components*r.byteLength;case ka:return n*e*3/r.components*r.byteLength;case jt:return n*e*4/r.components*r.byteLength;case ao:return n*e*4/r.components*r.byteLength;case mr:case gr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _r:case xr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ws:case Ts:return Math.max(n,16)*Math.max(e,8)/4;case bs:case As:return Math.max(n,8)*Math.max(e,8)/2;case Rs:case Cs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ps:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ds:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ls:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Is:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Us:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Fs:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ns:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Os:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case zs:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Bs:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ks:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Hs:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Gs:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Vs:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ws:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case vr:case Xs:case qs:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Xa:case Ys:return Math.ceil(n/4)*Math.ceil(e/4)*8;case $s:case js:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cd(n){switch(n){case vn:case Na:return{byteLength:1,components:1};case Ui:case Oa:case ki:return{byteLength:2,components:1};case io:case ro:return{byteLength:2,components:4};case Yn:case no:case mn:return{byteLength:4,components:1};case za:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:to}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=to);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ol(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function dd(n){const e=new WeakMap;function t(a,l){const c=a.array,f=a.usage,u=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const f=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,f);else{u.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<u.length;p++){const g=u[h],y=u[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++h,u[h]=y)}u.length=h+1;for(let p=0,g=u.length;p<g;p++){const y=u[p];n.bufferSubData(c,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var hd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ud=`#ifdef USE_ALPHAHASH
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
#endif`,fd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,md=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_d=`#ifdef USE_AOMAP
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
#endif`,xd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vd=`#ifdef USE_BATCHING
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
#endif`,Md=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ed=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bd=`#ifdef USE_IRIDESCENCE
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
#endif`,wd=`#ifdef USE_BUMPMAP
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
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ud=`#define PI 3.141592653589793
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
} // validated`,Fd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nd=`vec3 transformedNormal = objectNormal;
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
#endif`,Od=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vd=`#ifdef USE_ENVMAP
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
#endif`,Wd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xd=`#ifdef USE_ENVMAP
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
#endif`,qd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yd=`#ifdef USE_ENVMAP
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
#endif`,$d=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qd=`#ifdef USE_GRADIENTMAP
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
}`,Jd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,th=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nh=`uniform bool receiveShadow;
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
#endif`,ih=`#ifdef USE_ENVMAP
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
#endif`,rh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ah=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lh=`PhysicalMaterial material;
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
#endif`,ch=`struct PhysicalMaterial {
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
}`,dh=`
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
#endif`,hh=`#if defined( RE_IndirectDiffuse )
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
#endif`,uh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ph=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_h=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mh=`#if defined( USE_POINTS_UV )
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
#endif`,yh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Eh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ah=`#ifdef USE_MORPHTARGETS
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
#endif`,Th=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ch=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ph=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ih=`#ifdef USE_NORMALMAP
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
#endif`,Uh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Oh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,Yh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$h=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jh=`float getShadowMask() {
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
}`,Zh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kh=`#ifdef USE_SKINNING
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
#endif`,Qh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jh=`#ifdef USE_SKINNING
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
#endif`,eu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ru=`#ifdef USE_TRANSMISSION
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
#endif`,su=`#ifdef USE_TRANSMISSION
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
#endif`,ou=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,au=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const du=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hu=`uniform sampler2D t2D;
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
}`,uu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gu=`#include <common>
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
}`,_u=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xu=`#define DISTANCE
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
}`,vu=`#define DISTANCE
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
}`,Mu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Su=`uniform float scale;
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
}`,Eu=`uniform vec3 diffuse;
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
}`,bu=`#include <common>
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
}`,wu=`uniform vec3 diffuse;
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
}`,Au=`#define LAMBERT
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
}`,Tu=`#define LAMBERT
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
}`,Ru=`#define MATCAP
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
}`,Cu=`#define MATCAP
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
}`,Pu=`#define NORMAL
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
}`,Du=`#define NORMAL
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
}`,Lu=`#define PHONG
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
}`,Iu=`#define PHONG
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
}`,Uu=`#define STANDARD
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
}`,Fu=`#define STANDARD
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
}`,Nu=`#define TOON
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
}`,Ou=`#define TOON
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
}`,zu=`uniform float size;
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
}`,Bu=`uniform vec3 diffuse;
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
}`,ku=`#include <common>
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
}`,Hu=`uniform vec3 color;
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
}`,Gu=`uniform float rotation;
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
}`,Vu=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:hd,alphahash_pars_fragment:ud,alphamap_fragment:fd,alphamap_pars_fragment:pd,alphatest_fragment:md,alphatest_pars_fragment:gd,aomap_fragment:_d,aomap_pars_fragment:xd,batching_pars_vertex:vd,batching_vertex:Md,begin_vertex:yd,beginnormal_vertex:Sd,bsdfs:Ed,iridescence_fragment:bd,bumpmap_pars_fragment:wd,clipping_planes_fragment:Ad,clipping_planes_pars_fragment:Td,clipping_planes_pars_vertex:Rd,clipping_planes_vertex:Cd,color_fragment:Pd,color_pars_fragment:Dd,color_pars_vertex:Ld,color_vertex:Id,common:Ud,cube_uv_reflection_fragment:Fd,defaultnormal_vertex:Nd,displacementmap_pars_vertex:Od,displacementmap_vertex:zd,emissivemap_fragment:Bd,emissivemap_pars_fragment:kd,colorspace_fragment:Hd,colorspace_pars_fragment:Gd,envmap_fragment:Vd,envmap_common_pars_fragment:Wd,envmap_pars_fragment:Xd,envmap_pars_vertex:qd,envmap_physical_pars_fragment:ih,envmap_vertex:Yd,fog_vertex:$d,fog_pars_vertex:jd,fog_fragment:Zd,fog_pars_fragment:Kd,gradientmap_pars_fragment:Qd,lightmap_pars_fragment:Jd,lights_lambert_fragment:eh,lights_lambert_pars_fragment:th,lights_pars_begin:nh,lights_toon_fragment:rh,lights_toon_pars_fragment:sh,lights_phong_fragment:oh,lights_phong_pars_fragment:ah,lights_physical_fragment:lh,lights_physical_pars_fragment:ch,lights_fragment_begin:dh,lights_fragment_maps:hh,lights_fragment_end:uh,logdepthbuf_fragment:fh,logdepthbuf_pars_fragment:ph,logdepthbuf_pars_vertex:mh,logdepthbuf_vertex:gh,map_fragment:_h,map_pars_fragment:xh,map_particle_fragment:vh,map_particle_pars_fragment:Mh,metalnessmap_fragment:yh,metalnessmap_pars_fragment:Sh,morphinstance_vertex:Eh,morphcolor_vertex:bh,morphnormal_vertex:wh,morphtarget_pars_vertex:Ah,morphtarget_vertex:Th,normal_fragment_begin:Rh,normal_fragment_maps:Ch,normal_pars_fragment:Ph,normal_pars_vertex:Dh,normal_vertex:Lh,normalmap_pars_fragment:Ih,clearcoat_normal_fragment_begin:Uh,clearcoat_normal_fragment_maps:Fh,clearcoat_pars_fragment:Nh,iridescence_pars_fragment:Oh,opaque_fragment:zh,packing:Bh,premultiplied_alpha_fragment:kh,project_vertex:Hh,dithering_fragment:Gh,dithering_pars_fragment:Vh,roughnessmap_fragment:Wh,roughnessmap_pars_fragment:Xh,shadowmap_pars_fragment:qh,shadowmap_pars_vertex:Yh,shadowmap_vertex:$h,shadowmask_pars_fragment:jh,skinbase_vertex:Zh,skinning_pars_vertex:Kh,skinning_vertex:Qh,skinnormal_vertex:Jh,specularmap_fragment:eu,specularmap_pars_fragment:tu,tonemapping_fragment:nu,tonemapping_pars_fragment:iu,transmission_fragment:ru,transmission_pars_fragment:su,uv_pars_fragment:ou,uv_pars_vertex:au,uv_vertex:lu,worldpos_vertex:cu,background_vert:du,background_frag:hu,backgroundCube_vert:uu,backgroundCube_frag:fu,cube_vert:pu,cube_frag:mu,depth_vert:gu,depth_frag:_u,distanceRGBA_vert:xu,distanceRGBA_frag:vu,equirect_vert:Mu,equirect_frag:yu,linedashed_vert:Su,linedashed_frag:Eu,meshbasic_vert:bu,meshbasic_frag:wu,meshlambert_vert:Au,meshlambert_frag:Tu,meshmatcap_vert:Ru,meshmatcap_frag:Cu,meshnormal_vert:Pu,meshnormal_frag:Du,meshphong_vert:Lu,meshphong_frag:Iu,meshphysical_vert:Uu,meshphysical_frag:Fu,meshtoon_vert:Nu,meshtoon_frag:Ou,points_vert:zu,points_frag:Bu,shadow_vert:ku,shadow_frag:Hu,sprite_vert:Gu,sprite_frag:Vu},pe={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},en={basic:{uniforms:Tt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Tt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Re(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Tt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Tt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Tt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Re(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Tt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Tt([pe.points,pe.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Tt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Tt([pe.common,pe.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Tt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Tt([pe.sprite,pe.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Tt([pe.common,pe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Tt([pe.lights,pe.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};en.physical={uniforms:Tt([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const ur={r:0,b:0,g:0},kn=new Ht,Wu=new at;function Xu(n,e,t,i,r,s,o){const a=new Re(0);let l=s===!0?0:1,c,f,u=null,h=0,p=null;function g(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?t:e).get(v)),v}function y(S){let v=!1;const P=g(S);P===null?d(a,l):P&&P.isColor&&(d(P,1),v=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,v){const P=g(v);P&&(P.isCubeTexture||P.mapping===Tr)?(f===void 0&&(f=new Ee(new it(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:xi(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(T,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),kn.copy(v.backgroundRotation),kn.x*=-1,kn.y*=-1,kn.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),f.material.uniforms.envMap.value=P,f.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Wu.makeRotationFromEuler(kn)),f.material.toneMapped=Qe.getTransfer(P.colorSpace)!==rt,(u!==P||h!==P.version||p!==n.toneMapping)&&(f.material.needsUpdate=!0,u=P,h=P.version,p=n.toneMapping),f.layers.enableAll(),S.unshift(f,f.geometry,f.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new Ee(new Pn(2,2),new Ln({name:"BackgroundMaterial",uniforms:xi(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(P.colorSpace)!==rt,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(u!==P||h!==P.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=P,h=P.version,p=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function d(S,v){S.getRGB(ur,Qa(n)),i.buffers.color.setClear(ur.r,ur.g,ur.b,v,o)}function b(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),l=v,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,d(a,l)},render:y,addToRenderList:m,dispose:b}}function qu(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(_,R,I,O,G){let Z=!1;const U=u(O,I,R);s!==U&&(s=U,c(s.object)),Z=p(_,O,I,G),Z&&g(_,O,I,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,v(_,R,I,O),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(_){return n.bindVertexArray(_)}function f(_){return n.deleteVertexArray(_)}function u(_,R,I){const O=I.wireframe===!0;let G=i[_.id];G===void 0&&(G={},i[_.id]=G);let Z=G[R.id];Z===void 0&&(Z={},G[R.id]=Z);let U=Z[O];return U===void 0&&(U=h(l()),Z[O]=U),U}function h(_){const R=[],I=[],O=[];for(let G=0;G<t;G++)R[G]=0,I[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:I,attributeDivisors:O,object:_,attributes:{},index:null}}function p(_,R,I,O){const G=s.attributes,Z=R.attributes;let U=0;const Y=I.getAttributes();for(const N in Y)if(Y[N].location>=0){const H=G[N];let ie=Z[N];if(ie===void 0&&(N==="instanceMatrix"&&_.instanceMatrix&&(ie=_.instanceMatrix),N==="instanceColor"&&_.instanceColor&&(ie=_.instanceColor)),H===void 0||H.attribute!==ie||ie&&H.data!==ie.data)return!0;U++}return s.attributesNum!==U||s.index!==O}function g(_,R,I,O){const G={},Z=R.attributes;let U=0;const Y=I.getAttributes();for(const N in Y)if(Y[N].location>=0){let H=Z[N];H===void 0&&(N==="instanceMatrix"&&_.instanceMatrix&&(H=_.instanceMatrix),N==="instanceColor"&&_.instanceColor&&(H=_.instanceColor));const ie={};ie.attribute=H,H&&H.data&&(ie.data=H.data),G[N]=ie,U++}s.attributes=G,s.attributesNum=U,s.index=O}function y(){const _=s.newAttributes;for(let R=0,I=_.length;R<I;R++)_[R]=0}function m(_){d(_,0)}function d(_,R){const I=s.newAttributes,O=s.enabledAttributes,G=s.attributeDivisors;I[_]=1,O[_]===0&&(n.enableVertexAttribArray(_),O[_]=1),G[_]!==R&&(n.vertexAttribDivisor(_,R),G[_]=R)}function b(){const _=s.newAttributes,R=s.enabledAttributes;for(let I=0,O=R.length;I<O;I++)R[I]!==_[I]&&(n.disableVertexAttribArray(I),R[I]=0)}function S(_,R,I,O,G,Z,U){U===!0?n.vertexAttribIPointer(_,R,I,G,Z):n.vertexAttribPointer(_,R,I,O,G,Z)}function v(_,R,I,O){y();const G=O.attributes,Z=I.getAttributes(),U=R.defaultAttributeValues;for(const Y in Z){const N=Z[Y];if(N.location>=0){let le=G[Y];if(le===void 0&&(Y==="instanceMatrix"&&_.instanceMatrix&&(le=_.instanceMatrix),Y==="instanceColor"&&_.instanceColor&&(le=_.instanceColor)),le!==void 0){const H=le.normalized,ie=le.itemSize,F=e.get(le);if(F===void 0)continue;const z=F.buffer,D=F.type,q=F.bytesPerElement,J=D===n.INT||D===n.UNSIGNED_INT||le.gpuType===no;if(le.isInterleavedBufferAttribute){const ne=le.data,X=ne.stride,j=le.offset;if(ne.isInstancedInterleavedBuffer){for(let ee=0;ee<N.locationSize;ee++)d(N.location+ee,ne.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ee=0;ee<N.locationSize;ee++)m(N.location+ee);n.bindBuffer(n.ARRAY_BUFFER,z);for(let ee=0;ee<N.locationSize;ee++)S(N.location+ee,ie/N.locationSize,D,H,X*q,(j+ie/N.locationSize*ee)*q,J)}else{if(le.isInstancedBufferAttribute){for(let ne=0;ne<N.locationSize;ne++)d(N.location+ne,le.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ne=0;ne<N.locationSize;ne++)m(N.location+ne);n.bindBuffer(n.ARRAY_BUFFER,z);for(let ne=0;ne<N.locationSize;ne++)S(N.location+ne,ie/N.locationSize,D,H,ie*q,ie/N.locationSize*ne*q,J)}}else if(U!==void 0){const H=U[Y];if(H!==void 0)switch(H.length){case 2:n.vertexAttrib2fv(N.location,H);break;case 3:n.vertexAttrib3fv(N.location,H);break;case 4:n.vertexAttrib4fv(N.location,H);break;default:n.vertexAttrib1fv(N.location,H)}}}}b()}function P(){A();for(const _ in i){const R=i[_];for(const I in R){const O=R[I];for(const G in O)f(O[G].object),delete O[G];delete R[I]}delete i[_]}}function T(_){if(i[_.id]===void 0)return;const R=i[_.id];for(const I in R){const O=R[I];for(const G in O)f(O[G].object),delete O[G];delete R[I]}delete i[_.id]}function w(_){for(const R in i){const I=i[R];if(I[_.id]===void 0)continue;const O=I[_.id];for(const G in O)f(O[G].object),delete O[G];delete I[_.id]}}function A(){x(),o=!0,s!==r&&(s=r,c(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:x,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:m,disableUnusedAttributes:b}}function Yu(n,e,t){let i;function r(c){i=c}function s(c,f){n.drawArrays(i,c,f),t.update(f,i,1)}function o(c,f,u){u!==0&&(n.drawArraysInstanced(i,c,f,u),t.update(f,i,u))}function a(c,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,u);let p=0;for(let g=0;g<u;g++)p+=f[g];t.update(p,i,1)}function l(c,f,u,h){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],f[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,h,0,u);let g=0;for(let y=0;y<u;y++)g+=f[y]*h[y];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function $u(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==jt&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const A=w===ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==vn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==mn&&!A)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const u=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:P,maxSamples:T}}function ju(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new An,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const p=u.length!==0||h||i!==0||r;return r=h,i=u.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){t=f(u,h,0)},this.setState=function(u,h,p){const g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,d=n.get(u);if(!r||g===null||g.length===0||s&&!m)s?f(null):c();else{const b=s?0:i,S=b*4;let v=d.clippingState||null;l.value=v,v=f(g,h,S,p);for(let P=0;P!==S;++P)v[P]=t[P];d.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(u,h,p,g){const y=u!==null?u.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const d=p+y*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<d)&&(m=new Float32Array(d));for(let S=0,v=p;S!==y;++S,v+=4)o.copy(u[S]).applyMatrix4(b,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function Zu(n){let e=new WeakMap;function t(o,a){return a===Ms?o.mapping=mi:a===ys&&(o.mapping=gi),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ms||a===ys)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new qc(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const hi=4,oa=[.125,.215,.35,.446,.526,.582],Wn=20,rs=new rl,aa=new Re;let ss=null,os=0,as=0,ls=!1;const Gn=(1+Math.sqrt(5))/2,ci=1/Gn,la=[new k(-Gn,ci,0),new k(Gn,ci,0),new k(-ci,0,Gn),new k(ci,0,Gn),new k(0,Gn,-ci),new k(0,Gn,ci),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],Ku=new k;class ca{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=Ku}=s;ss=this._renderer.getRenderTarget(),os=this._renderer.getActiveCubeFace(),as=this._renderer.getActiveMipmapLevel(),ls=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ua(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ha(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ss,os,as),this._renderer.xr.enabled=ls,e.scissorTest=!1,fr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mi||e.mapping===gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ss=this._renderer.getRenderTarget(),os=this._renderer.getActiveCubeFace(),as=this._renderer.getActiveMipmapLevel(),ls=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:ki,format:jt,colorSpace:_i,depthBuffer:!1},r=da(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=da(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qu(s)),this._blurMaterial=Ju(s,e,t)}return r}_compileMaterial(e){const t=new Ee(this._lodPlanes[0],e);this._renderer.compile(t,rs)}_sceneToCubeUV(e,t,i,r,s){const l=new ct(90,1,t,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(aa),u.toneMapping=Cn,u.autoClear=!1;const g=new Ft({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),y=new Ee(new it,g);let m=!1;const d=e.background;d?d.isColor&&(g.color.copy(d),e.background=null,m=!0):(g.color.copy(aa),m=!0);for(let b=0;b<6;b++){const S=b%3;S===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[b],s.y,s.z)):S===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[b]));const v=this._cubeSize;fr(r,S*v,b>2?v:0,v,v),u.setRenderTarget(r),m&&u.render(y,l),u.render(e,l)}y.geometry.dispose(),y.material.dispose(),u.toneMapping=p,u.autoClear=h,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===mi||e.mapping===gi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ua()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ha());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ee(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;fr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,rs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=la[(r-s-1)%la.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,u=new Ee(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Wn-1),y=s/g,m=isFinite(s)?1+Math.floor(f*y):Wn;m>Wn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wn}`);const d=[];let b=0;for(let w=0;w<Wn;++w){const A=w/y,x=Math.exp(-A*A/2);d.push(x),w===0?b+=x:w<m&&(b+=2*x)}for(let w=0;w<d.length;w++)d[w]=d[w]/b;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-i;const v=this._sizeLods[r],P=3*v*(r>S-hi?r-S+hi:0),T=4*(this._cubeSize-v);fr(t,P,T,3*v,2*v),l.setRenderTarget(t),l.render(u,rs)}}function Qu(n){const e=[],t=[],i=[];let r=n;const s=n-hi+1+oa.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-hi?l=oa[o-n+hi-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,u=1+c,h=[f,f,u,f,u,u,f,f,u,u,f,u],p=6,g=6,y=3,m=2,d=1,b=new Float32Array(y*g*p),S=new Float32Array(m*g*p),v=new Float32Array(d*g*p);for(let T=0;T<p;T++){const w=T%3*2/3-1,A=T>2?0:-1,x=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];b.set(x,y*g*T),S.set(h,m*g*T);const _=[T,T,T,T,T,T];v.set(_,d*g*T)}const P=new Nt;P.setAttribute("position",new Kt(b,y)),P.setAttribute("uv",new Kt(S,m)),P.setAttribute("faceIndex",new Kt(v,d)),e.push(P),r>hi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function da(n,e,t){const i=new $n(n,e,t);return i.texture.mapping=Tr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Ju(n,e,t){const i=new Float32Array(Wn),r=new k(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:Wn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:vo(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function ha(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vo(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function ua(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function vo(){return`

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
	`}function ef(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ms||l===ys,f=l===mi||l===gi;if(c||f){let u=e.get(a);const h=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new ca(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||f&&p&&r(p)?(t===null&&(t=new ca(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function tf(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Mr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function nf(n,e,t,i){const r={},s=new WeakMap;function o(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(u,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(u){const h=u.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function c(u){const h=[],p=u.index,g=u.attributes.position;let y=0;if(p!==null){const b=p.array;y=p.version;for(let S=0,v=b.length;S<v;S+=3){const P=b[S+0],T=b[S+1],w=b[S+2];h.push(P,T,T,w,w,P)}}else if(g!==void 0){const b=g.array;y=g.version;for(let S=0,v=b.length/3-1;S<v;S+=3){const P=S+0,T=S+1,w=S+2;h.push(P,T,T,w,w,P)}}else return;const m=new(Ya(h)?Ka:Za)(h,1);m.version=y;const d=s.get(u);d&&e.remove(d),s.set(u,m)}function f(u){const h=s.get(u);if(h){const p=u.index;p!==null&&h.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:f}}function rf(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*o),t.update(p,i,1)}function c(h,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,h*o,g),t.update(p,i,g))}function f(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,i,1)}function u(h,p,g,y){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],y[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,y,0,g);let d=0;for(let b=0;b<g;b++)d+=p[b]*y[b];t.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=u}function sf(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function of(n,e,t){const i=new WeakMap,r=new st;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=f!==void 0?f.length:0;let h=i.get(a);if(h===void 0||h.count!==u){let _=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",_)};var p=_;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),y===!0&&(v=2),m===!0&&(v=3);let P=a.attributes.position.count*v,T=1;P>e.maxTextureSize&&(T=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const w=new Float32Array(P*T*4*u),A=new $a(w,P,T,u);A.type=mn,A.needsUpdate=!0;const x=v*4;for(let R=0;R<u;R++){const I=d[R],O=b[R],G=S[R],Z=P*T*4*R;for(let U=0;U<I.count;U++){const Y=U*x;g===!0&&(r.fromBufferAttribute(I,U),w[Z+Y+0]=r.x,w[Z+Y+1]=r.y,w[Z+Y+2]=r.z,w[Z+Y+3]=0),y===!0&&(r.fromBufferAttribute(O,U),w[Z+Y+4]=r.x,w[Z+Y+5]=r.y,w[Z+Y+6]=r.z,w[Z+Y+7]=0),m===!0&&(r.fromBufferAttribute(G,U),w[Z+Y+8]=r.x,w[Z+Y+9]=r.y,w[Z+Y+10]=r.z,w[Z+Y+11]=G.itemSize===4?r.w:1)}}h={count:u,texture:A,size:new Xe(P,T)},i.set(a,h),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const y=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",y),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function af(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,u=e.get(l,f);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const al=new bt,fa=new nl(1,1),ll=new $a,cl=new Cc,dl=new el,pa=[],ma=[],ga=new Float32Array(16),_a=new Float32Array(9),xa=new Float32Array(4);function yi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=pa[r];if(s===void 0&&(s=new Float32Array(r),pa[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Dr(n,e){let t=ma[e];t===void 0&&(t=new Int32Array(e),ma[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function lf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function cf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2fv(this.addr,e),gt(t,e)}}function df(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;n.uniform3fv(this.addr,e),gt(t,e)}}function hf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4fv(this.addr,e),gt(t,e)}}function uf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;xa.set(i),n.uniformMatrix2fv(this.addr,!1,xa),gt(t,i)}}function ff(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;_a.set(i),n.uniformMatrix3fv(this.addr,!1,_a),gt(t,i)}}function pf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;ga.set(i),n.uniformMatrix4fv(this.addr,!1,ga),gt(t,i)}}function mf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function gf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2iv(this.addr,e),gt(t,e)}}function _f(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;n.uniform3iv(this.addr,e),gt(t,e)}}function xf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4iv(this.addr,e),gt(t,e)}}function vf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Mf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2uiv(this.addr,e),gt(t,e)}}function yf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;n.uniform3uiv(this.addr,e),gt(t,e)}}function Sf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4uiv(this.addr,e),gt(t,e)}}function Ef(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(fa.compareFunction=qa,s=fa):s=al,t.setTexture2D(e||s,r)}function bf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||cl,r)}function wf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||dl,r)}function Af(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ll,r)}function Tf(n){switch(n){case 5126:return lf;case 35664:return cf;case 35665:return df;case 35666:return hf;case 35674:return uf;case 35675:return ff;case 35676:return pf;case 5124:case 35670:return mf;case 35667:case 35671:return gf;case 35668:case 35672:return _f;case 35669:case 35673:return xf;case 5125:return vf;case 36294:return Mf;case 36295:return yf;case 36296:return Sf;case 35678:case 36198:case 36298:case 36306:case 35682:return Ef;case 35679:case 36299:case 36307:return bf;case 35680:case 36300:case 36308:case 36293:return wf;case 36289:case 36303:case 36311:case 36292:return Af}}function Rf(n,e){n.uniform1fv(this.addr,e)}function Cf(n,e){const t=yi(e,this.size,2);n.uniform2fv(this.addr,t)}function Pf(n,e){const t=yi(e,this.size,3);n.uniform3fv(this.addr,t)}function Df(n,e){const t=yi(e,this.size,4);n.uniform4fv(this.addr,t)}function Lf(n,e){const t=yi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function If(n,e){const t=yi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Uf(n,e){const t=yi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ff(n,e){n.uniform1iv(this.addr,e)}function Nf(n,e){n.uniform2iv(this.addr,e)}function Of(n,e){n.uniform3iv(this.addr,e)}function zf(n,e){n.uniform4iv(this.addr,e)}function Bf(n,e){n.uniform1uiv(this.addr,e)}function kf(n,e){n.uniform2uiv(this.addr,e)}function Hf(n,e){n.uniform3uiv(this.addr,e)}function Gf(n,e){n.uniform4uiv(this.addr,e)}function Vf(n,e,t){const i=this.cache,r=e.length,s=Dr(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||al,s[o])}function Wf(n,e,t){const i=this.cache,r=e.length,s=Dr(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||cl,s[o])}function Xf(n,e,t){const i=this.cache,r=e.length,s=Dr(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||dl,s[o])}function qf(n,e,t){const i=this.cache,r=e.length,s=Dr(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||ll,s[o])}function Yf(n){switch(n){case 5126:return Rf;case 35664:return Cf;case 35665:return Pf;case 35666:return Df;case 35674:return Lf;case 35675:return If;case 35676:return Uf;case 5124:case 35670:return Ff;case 35667:case 35671:return Nf;case 35668:case 35672:return Of;case 35669:case 35673:return zf;case 5125:return Bf;case 36294:return kf;case 36295:return Hf;case 36296:return Gf;case 35678:case 36198:case 36298:case 36306:case 35682:return Vf;case 35679:case 36299:case 36307:return Wf;case 35680:case 36300:case 36308:case 36293:return Xf;case 36289:case 36303:case 36311:case 36292:return qf}}class $f{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Tf(t.type)}}class jf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Yf(t.type)}}class Zf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const cs=/(\w+)(\])?(\[|\.)?/g;function va(n,e){n.seq.push(e),n.map[e.id]=e}function Kf(n,e,t){const i=n.name,r=i.length;for(cs.lastIndex=0;;){const s=cs.exec(i),o=cs.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){va(t,c===void 0?new $f(a,n,e):new jf(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Zf(a),va(t,u)),t=u}}}class yr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Kf(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Ma(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Qf=37297;let Jf=0;function ep(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const ya=new Ge;function tp(n){Qe._getMatrix(ya,Qe.workingColorSpace,n);const e=`mat3( ${ya.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(n)){case Sr:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Sa(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+ep(n.getShaderSource(e),o)}else return r}function np(n,e){const t=tp(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ip(n,e){let t;switch(e){case kl:t="Linear";break;case Hl:t="Reinhard";break;case Gl:t="Cineon";break;case Vl:t="ACESFilmic";break;case Xl:t="AgX";break;case ql:t="Neutral";break;case Wl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const pr=new k;function rp(){Qe.getLuminanceCoefficients(pr);const n=pr.x.toFixed(4),e=pr.y.toFixed(4),t=pr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sp(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pi).join(`
`)}function op(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ap(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Pi(n){return n!==""}function Ea(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ba(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qs(n){return n.replace(lp,dp)}const cp=new Map;function dp(n,e){let t=We[e];if(t===void 0){const i=cp.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qs(t)}const hp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wa(n){return n.replace(hp,up)}function up(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Aa(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fp(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ia?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ua?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===pn&&(e="SHADOWMAP_TYPE_VSM"),e}function pp(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case mi:case gi:e="ENVMAP_TYPE_CUBE";break;case Tr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mp(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case gi:e="ENVMAP_MODE_REFRACTION";break}return e}function gp(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ar:e="ENVMAP_BLENDING_MULTIPLY";break;case zl:e="ENVMAP_BLENDING_MIX";break;case Bl:e="ENVMAP_BLENDING_ADD";break}return e}function _p(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function xp(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=fp(t),c=pp(t),f=mp(t),u=gp(t),h=_p(t),p=sp(t),g=op(s),y=r.createProgram();let m,d,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Pi).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Pi).join(`
`),d.length>0&&(d+=`
`)):(m=[Aa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pi).join(`
`),d=[Aa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?We.tonemapping_pars_fragment:"",t.toneMapping!==Cn?ip("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,np("linearToOutputTexel",t.outputColorSpace),rp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pi).join(`
`)),o=Qs(o),o=Ea(o,t),o=ba(o,t),a=Qs(a),a=Ea(a,t),a=ba(a,t),o=wa(o),a=wa(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Lo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const S=b+m+o,v=b+d+a,P=Ma(r,r.VERTEX_SHADER,S),T=Ma(r,r.FRAGMENT_SHADER,v);r.attachShader(y,P),r.attachShader(y,T),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function w(R){if(n.debug.checkShaderErrors){const I=r.getProgramInfoLog(y).trim(),O=r.getShaderInfoLog(P).trim(),G=r.getShaderInfoLog(T).trim();let Z=!0,U=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,P,T);else{const Y=Sa(r,P,"vertex"),N=Sa(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+Y+`
`+N)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(O===""||G==="")&&(U=!1);U&&(R.diagnostics={runnable:Z,programLog:I,vertexShader:{log:O,prefix:m},fragmentShader:{log:G,prefix:d}})}r.deleteShader(P),r.deleteShader(T),A=new yr(r,y),x=ap(r,y)}let A;this.getUniforms=function(){return A===void 0&&w(this),A};let x;this.getAttributes=function(){return x===void 0&&w(this),x};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(y,Qf)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jf++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=T,this}let vp=0;class Mp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new yp(e),t.set(e,i)),i}}class yp{constructor(e){this.id=vp++,this.code=e,this.usedTimes=0}}function Sp(n,e,t,i,r,s,o){const a=new uo,l=new Mp,c=new Set,f=[],u=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,_,R,I,O){const G=I.fog,Z=O.geometry,U=x.isMeshStandardMaterial?I.environment:null,Y=(x.isMeshStandardMaterial?t:e).get(x.envMap||U),N=Y&&Y.mapping===Tr?Y.image.height:null,le=g[x.type];x.precision!==null&&(p=r.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const H=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ie=H!==void 0?H.length:0;let F=0;Z.morphAttributes.position!==void 0&&(F=1),Z.morphAttributes.normal!==void 0&&(F=2),Z.morphAttributes.color!==void 0&&(F=3);let z,D,q,J;if(le){const nt=en[le];z=nt.vertexShader,D=nt.fragmentShader}else z=x.vertexShader,D=x.fragmentShader,l.update(x),q=l.getVertexShaderID(x),J=l.getFragmentShaderID(x);const ne=n.getRenderTarget(),X=n.state.buffers.depth.getReversed(),j=O.isInstancedMesh===!0,ee=O.isBatchedMesh===!0,re=!!x.map,Se=!!x.matcap,Me=!!Y,L=!!x.aoMap,ke=!!x.lightMap,Le=!!x.bumpMap,De=!!x.normalMap,fe=!!x.displacementMap,Ce=!!x.emissiveMap,ue=!!x.metalnessMap,C=!!x.roughnessMap,M=x.anisotropy>0,$=x.clearcoat>0,oe=x.dispersion>0,ce=x.iridescence>0,se=x.sheen>0,Pe=x.transmission>0,me=M&&!!x.anisotropyMap,ve=$&&!!x.clearcoatMap,qe=$&&!!x.clearcoatNormalMap,he=$&&!!x.clearcoatRoughnessMap,we=ce&&!!x.iridescenceMap,Ne=ce&&!!x.iridescenceThicknessMap,ze=se&&!!x.sheenColorMap,Ae=se&&!!x.sheenRoughnessMap,je=!!x.specularMap,Ve=!!x.specularColorMap,ot=!!x.specularIntensityMap,B=Pe&&!!x.transmissionMap,_e=Pe&&!!x.thicknessMap,te=!!x.gradientMap,ae=!!x.alphaMap,ye=x.alphaTest>0,xe=!!x.alphaHash,He=!!x.extensions;let dt=Cn;x.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(dt=n.toneMapping);const Mt={shaderID:le,shaderType:x.type,shaderName:x.name,vertexShader:z,fragmentShader:D,defines:x.defines,customVertexShaderID:q,customFragmentShaderID:J,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:ee,batchingColor:ee&&O._colorsTexture!==null,instancing:j,instancingColor:j&&O.instanceColor!==null,instancingMorph:j&&O.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:_i,alphaToCoverage:!!x.alphaToCoverage,map:re,matcap:Se,envMap:Me,envMapMode:Me&&Y.mapping,envMapCubeUVHeight:N,aoMap:L,lightMap:ke,bumpMap:Le,normalMap:De,displacementMap:h&&fe,emissiveMap:Ce,normalMapObjectSpace:De&&x.normalMapType===Zl,normalMapTangentSpace:De&&x.normalMapType===Rr,metalnessMap:ue,roughnessMap:C,anisotropy:M,anisotropyMap:me,clearcoat:$,clearcoatMap:ve,clearcoatNormalMap:qe,clearcoatRoughnessMap:he,dispersion:oe,iridescence:ce,iridescenceMap:we,iridescenceThicknessMap:Ne,sheen:se,sheenColorMap:ze,sheenRoughnessMap:Ae,specularMap:je,specularColorMap:Ve,specularIntensityMap:ot,transmission:Pe,transmissionMap:B,thicknessMap:_e,gradientMap:te,opaque:x.transparent===!1&&x.blending===ui&&x.alphaToCoverage===!1,alphaMap:ae,alphaTest:ye,alphaHash:xe,combine:x.combine,mapUv:re&&y(x.map.channel),aoMapUv:L&&y(x.aoMap.channel),lightMapUv:ke&&y(x.lightMap.channel),bumpMapUv:Le&&y(x.bumpMap.channel),normalMapUv:De&&y(x.normalMap.channel),displacementMapUv:fe&&y(x.displacementMap.channel),emissiveMapUv:Ce&&y(x.emissiveMap.channel),metalnessMapUv:ue&&y(x.metalnessMap.channel),roughnessMapUv:C&&y(x.roughnessMap.channel),anisotropyMapUv:me&&y(x.anisotropyMap.channel),clearcoatMapUv:ve&&y(x.clearcoatMap.channel),clearcoatNormalMapUv:qe&&y(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&y(x.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&y(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&y(x.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&y(x.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&y(x.sheenRoughnessMap.channel),specularMapUv:je&&y(x.specularMap.channel),specularColorMapUv:Ve&&y(x.specularColorMap.channel),specularIntensityMapUv:ot&&y(x.specularIntensityMap.channel),transmissionMapUv:B&&y(x.transmissionMap.channel),thicknessMapUv:_e&&y(x.thicknessMap.channel),alphaMapUv:ae&&y(x.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(De||M),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Z.attributes.uv&&(re||ae),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:X,skinning:O.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:F,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:dt,decodeVideoTexture:re&&x.map.isVideoTexture===!0&&Qe.getTransfer(x.map.colorSpace)===rt,decodeVideoTextureEmissive:Ce&&x.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(x.emissiveMap.colorSpace)===rt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Dt,flipSided:x.side===Rt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:He&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&x.extensions.multiDraw===!0||ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function d(x){const _=[];if(x.shaderID?_.push(x.shaderID):(_.push(x.customVertexShaderID),_.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)_.push(R),_.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(b(_,x),S(_,x),_.push(n.outputColorSpace)),_.push(x.customProgramCacheKey),_.join()}function b(x,_){x.push(_.precision),x.push(_.outputColorSpace),x.push(_.envMapMode),x.push(_.envMapCubeUVHeight),x.push(_.mapUv),x.push(_.alphaMapUv),x.push(_.lightMapUv),x.push(_.aoMapUv),x.push(_.bumpMapUv),x.push(_.normalMapUv),x.push(_.displacementMapUv),x.push(_.emissiveMapUv),x.push(_.metalnessMapUv),x.push(_.roughnessMapUv),x.push(_.anisotropyMapUv),x.push(_.clearcoatMapUv),x.push(_.clearcoatNormalMapUv),x.push(_.clearcoatRoughnessMapUv),x.push(_.iridescenceMapUv),x.push(_.iridescenceThicknessMapUv),x.push(_.sheenColorMapUv),x.push(_.sheenRoughnessMapUv),x.push(_.specularMapUv),x.push(_.specularColorMapUv),x.push(_.specularIntensityMapUv),x.push(_.transmissionMapUv),x.push(_.thicknessMapUv),x.push(_.combine),x.push(_.fogExp2),x.push(_.sizeAttenuation),x.push(_.morphTargetsCount),x.push(_.morphAttributeCount),x.push(_.numDirLights),x.push(_.numPointLights),x.push(_.numSpotLights),x.push(_.numSpotLightMaps),x.push(_.numHemiLights),x.push(_.numRectAreaLights),x.push(_.numDirLightShadows),x.push(_.numPointLightShadows),x.push(_.numSpotLightShadows),x.push(_.numSpotLightShadowsWithMaps),x.push(_.numLightProbes),x.push(_.shadowMapType),x.push(_.toneMapping),x.push(_.numClippingPlanes),x.push(_.numClipIntersection),x.push(_.depthPacking)}function S(x,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),x.push(a.mask)}function v(x){const _=g[x.type];let R;if(_){const I=en[_];R=Gc.clone(I.uniforms)}else R=x.uniforms;return R}function P(x,_){let R;for(let I=0,O=f.length;I<O;I++){const G=f[I];if(G.cacheKey===_){R=G,++R.usedTimes;break}}return R===void 0&&(R=new xp(n,_,x,s),f.push(R)),R}function T(x){if(--x.usedTimes===0){const _=f.indexOf(x);f[_]=f[f.length-1],f.pop(),x.destroy()}}function w(x){l.remove(x)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:P,releaseProgram:T,releaseShaderCache:w,programs:f,dispose:A}}function Ep(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function bp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ta(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ra(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(u,h,p,g,y,m){let d=n[e];return d===void 0?(d={id:u.id,object:u,geometry:h,material:p,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},n[e]=d):(d.id=u.id,d.object=u,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=y,d.group=m),e++,d}function a(u,h,p,g,y,m){const d=o(u,h,p,g,y,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(u,h,p,g,y,m){const d=o(u,h,p,g,y,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(u,h){t.length>1&&t.sort(u||bp),i.length>1&&i.sort(h||Ta),r.length>1&&r.sort(h||Ta)}function f(){for(let u=e,h=n.length;u<h;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function wp(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Ra,n.set(i,[o])):r>=s.length?(o=new Ra,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ap(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Re};break;case"SpotLight":t={position:new k,direction:new k,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function Tp(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Rp=0;function Cp(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Pp(n){const e=new Ap,t=Tp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new at,o=new at;function a(c){let f=0,u=0,h=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let p=0,g=0,y=0,m=0,d=0,b=0,S=0,v=0,P=0,T=0,w=0;c.sort(Cp);for(let x=0,_=c.length;x<_;x++){const R=c[x],I=R.color,O=R.intensity,G=R.distance,Z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)f+=I.r*O,u+=I.g*O,h+=I.b*O;else if(R.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(R.sh.coefficients[U],O);w++}else if(R.isDirectionalLight){const U=e.get(R);if(U.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Y=R.shadow,N=t.get(R);N.shadowIntensity=Y.intensity,N.shadowBias=Y.bias,N.shadowNormalBias=Y.normalBias,N.shadowRadius=Y.radius,N.shadowMapSize=Y.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=R.shadow.matrix,b++}i.directional[p]=U,p++}else if(R.isSpotLight){const U=e.get(R);U.position.setFromMatrixPosition(R.matrixWorld),U.color.copy(I).multiplyScalar(O),U.distance=G,U.coneCos=Math.cos(R.angle),U.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),U.decay=R.decay,i.spot[y]=U;const Y=R.shadow;if(R.map&&(i.spotLightMap[P]=R.map,P++,Y.updateMatrices(R),R.castShadow&&T++),i.spotLightMatrix[y]=Y.matrix,R.castShadow){const N=t.get(R);N.shadowIntensity=Y.intensity,N.shadowBias=Y.bias,N.shadowNormalBias=Y.normalBias,N.shadowRadius=Y.radius,N.shadowMapSize=Y.mapSize,i.spotShadow[y]=N,i.spotShadowMap[y]=Z,v++}y++}else if(R.isRectAreaLight){const U=e.get(R);U.color.copy(I).multiplyScalar(O),U.halfWidth.set(R.width*.5,0,0),U.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=U,m++}else if(R.isPointLight){const U=e.get(R);if(U.color.copy(R.color).multiplyScalar(R.intensity),U.distance=R.distance,U.decay=R.decay,R.castShadow){const Y=R.shadow,N=t.get(R);N.shadowIntensity=Y.intensity,N.shadowBias=Y.bias,N.shadowNormalBias=Y.normalBias,N.shadowRadius=Y.radius,N.shadowMapSize=Y.mapSize,N.shadowCameraNear=Y.camera.near,N.shadowCameraFar=Y.camera.far,i.pointShadow[g]=N,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=R.shadow.matrix,S++}i.point[g]=U,g++}else if(R.isHemisphereLight){const U=e.get(R);U.skyColor.copy(R.color).multiplyScalar(O),U.groundColor.copy(R.groundColor).multiplyScalar(O),i.hemi[d]=U,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=u,i.ambient[2]=h;const A=i.hash;(A.directionalLength!==p||A.pointLength!==g||A.spotLength!==y||A.rectAreaLength!==m||A.hemiLength!==d||A.numDirectionalShadows!==b||A.numPointShadows!==S||A.numSpotShadows!==v||A.numSpotMaps!==P||A.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=v+P-T,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=w,A.directionalLength=p,A.pointLength=g,A.spotLength=y,A.rectAreaLength=m,A.hemiLength=d,A.numDirectionalShadows=b,A.numPointShadows=S,A.numSpotShadows=v,A.numSpotMaps=P,A.numLightProbes=w,i.version=Rp++)}function l(c,f){let u=0,h=0,p=0,g=0,y=0;const m=f.matrixWorldInverse;for(let d=0,b=c.length;d<b;d++){const S=c[d];if(S.isDirectionalLight){const v=i.directional[u];v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),u++}else if(S.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const v=i.point[h];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),h++}else if(S.isHemisphereLight){const v=i.hemi[y];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function Ca(n){const e=new Pp(n),t=[],i=[];function r(f){c.camera=f,t.length=0,i.length=0}function s(f){t.push(f)}function o(f){i.push(f)}function a(){e.setup(t)}function l(f){e.setupView(t,f)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Dp(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ca(n),e.set(r,[a])):s>=o.length?(a=new Ca(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Lp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ip=`uniform sampler2D shadow_pass;
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
}`;function Up(n,e,t){let i=new po;const r=new Xe,s=new Xe,o=new st,a=new Jc({depthPacking:jl}),l=new ed,c={},f=t.maxTextureSize,u={[Dn]:Rt,[Rt]:Dn,[Dt]:Dt},h=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:Lp,fragmentShader:Ip}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Nt;g.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ee(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ia;let d=this.type;this.render=function(T,w,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const x=n.getRenderTarget(),_=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Rn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const O=d!==pn&&this.type===pn,G=d===pn&&this.type!==pn;for(let Z=0,U=T.length;Z<U;Z++){const Y=T[Z],N=Y.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const le=N.getFrameExtents();if(r.multiply(le),s.copy(N.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/le.x),r.x=s.x*le.x,N.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/le.y),r.y=s.y*le.y,N.mapSize.y=s.y)),N.map===null||O===!0||G===!0){const ie=this.type!==pn?{minFilter:Zt,magFilter:Zt}:{};N.map!==null&&N.map.dispose(),N.map=new $n(r.x,r.y,ie),N.map.texture.name=Y.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const H=N.getViewportCount();for(let ie=0;ie<H;ie++){const F=N.getViewport(ie);o.set(s.x*F.x,s.y*F.y,s.x*F.z,s.y*F.w),I.viewport(o),N.updateMatrices(Y,ie),i=N.getFrustum(),v(w,A,N.camera,Y,this.type)}N.isPointLightShadow!==!0&&this.type===pn&&b(N,A),N.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(x,_,R)};function b(T,w){const A=e.update(y);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new $n(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(w,null,A,h,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(w,null,A,p,y,null)}function S(T,w,A,x){let _=null;const R=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)_=R;else if(_=A.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const I=_.uuid,O=w.uuid;let G=c[I];G===void 0&&(G={},c[I]=G);let Z=G[O];Z===void 0&&(Z=_.clone(),G[O]=Z,w.addEventListener("dispose",P)),_=Z}if(_.visible=w.visible,_.wireframe=w.wireframe,x===pn?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:u[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,A.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const I=n.properties.get(_);I.light=A}return _}function v(T,w,A,x,_){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===pn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);const O=e.update(T),G=T.material;if(Array.isArray(G)){const Z=O.groups;for(let U=0,Y=Z.length;U<Y;U++){const N=Z[U],le=G[N.materialIndex];if(le&&le.visible){const H=S(T,le,x,_);T.onBeforeShadow(n,T,w,A,O,H,N),n.renderBufferDirect(A,null,O,H,T,N),T.onAfterShadow(n,T,w,A,O,H,N)}}}else if(G.visible){const Z=S(T,G,x,_);T.onBeforeShadow(n,T,w,A,O,Z,null),n.renderBufferDirect(A,null,O,Z,T,null),T.onAfterShadow(n,T,w,A,O,Z,null)}}const I=T.children;for(let O=0,G=I.length;O<G;O++)v(I[O],w,A,x,_)}function P(T){T.target.removeEventListener("dispose",P);for(const A in c){const x=c[A],_=T.target.uuid;_ in x&&(x[_].dispose(),delete x[_])}}}const Fp={[fs]:ps,[ms]:xs,[gs]:vs,[pi]:_s,[ps]:fs,[xs]:ms,[vs]:gs,[_s]:pi};function Np(n,e){function t(){let B=!1;const _e=new st;let te=null;const ae=new st(0,0,0,0);return{setMask:function(ye){te!==ye&&!B&&(n.colorMask(ye,ye,ye,ye),te=ye)},setLocked:function(ye){B=ye},setClear:function(ye,xe,He,dt,Mt){Mt===!0&&(ye*=dt,xe*=dt,He*=dt),_e.set(ye,xe,He,dt),ae.equals(_e)===!1&&(n.clearColor(ye,xe,He,dt),ae.copy(_e))},reset:function(){B=!1,te=null,ae.set(-1,0,0,0)}}}function i(){let B=!1,_e=!1,te=null,ae=null,ye=null;return{setReversed:function(xe){if(_e!==xe){const He=e.get("EXT_clip_control");xe?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),_e=xe;const dt=ye;ye=null,this.setClear(dt)}},getReversed:function(){return _e},setTest:function(xe){xe?ne(n.DEPTH_TEST):X(n.DEPTH_TEST)},setMask:function(xe){te!==xe&&!B&&(n.depthMask(xe),te=xe)},setFunc:function(xe){if(_e&&(xe=Fp[xe]),ae!==xe){switch(xe){case fs:n.depthFunc(n.NEVER);break;case ps:n.depthFunc(n.ALWAYS);break;case ms:n.depthFunc(n.LESS);break;case pi:n.depthFunc(n.LEQUAL);break;case gs:n.depthFunc(n.EQUAL);break;case _s:n.depthFunc(n.GEQUAL);break;case xs:n.depthFunc(n.GREATER);break;case vs:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ae=xe}},setLocked:function(xe){B=xe},setClear:function(xe){ye!==xe&&(_e&&(xe=1-xe),n.clearDepth(xe),ye=xe)},reset:function(){B=!1,te=null,ae=null,ye=null,_e=!1}}}function r(){let B=!1,_e=null,te=null,ae=null,ye=null,xe=null,He=null,dt=null,Mt=null;return{setTest:function(nt){B||(nt?ne(n.STENCIL_TEST):X(n.STENCIL_TEST))},setMask:function(nt){_e!==nt&&!B&&(n.stencilMask(nt),_e=nt)},setFunc:function(nt,Gt,an){(te!==nt||ae!==Gt||ye!==an)&&(n.stencilFunc(nt,Gt,an),te=nt,ae=Gt,ye=an)},setOp:function(nt,Gt,an){(xe!==nt||He!==Gt||dt!==an)&&(n.stencilOp(nt,Gt,an),xe=nt,He=Gt,dt=an)},setLocked:function(nt){B=nt},setClear:function(nt){Mt!==nt&&(n.clearStencil(nt),Mt=nt)},reset:function(){B=!1,_e=null,te=null,ae=null,ye=null,xe=null,He=null,dt=null,Mt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let f={},u={},h=new WeakMap,p=[],g=null,y=!1,m=null,d=null,b=null,S=null,v=null,P=null,T=null,w=new Re(0,0,0),A=0,x=!1,_=null,R=null,I=null,O=null,G=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,Y=0;const N=n.getParameter(n.VERSION);N.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(N)[1]),U=Y>=1):N.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),U=Y>=2);let le=null,H={};const ie=n.getParameter(n.SCISSOR_BOX),F=n.getParameter(n.VIEWPORT),z=new st().fromArray(ie),D=new st().fromArray(F);function q(B,_e,te,ae){const ye=new Uint8Array(4),xe=n.createTexture();n.bindTexture(B,xe),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<te;He++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(_e,0,n.RGBA,1,1,ae,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(_e+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return xe}const J={};J[n.TEXTURE_2D]=q(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(n.DEPTH_TEST),o.setFunc(pi),Le(!1),De(To),ne(n.CULL_FACE),L(Rn);function ne(B){f[B]!==!0&&(n.enable(B),f[B]=!0)}function X(B){f[B]!==!1&&(n.disable(B),f[B]=!1)}function j(B,_e){return u[B]!==_e?(n.bindFramebuffer(B,_e),u[B]=_e,B===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=_e),B===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=_e),!0):!1}function ee(B,_e){let te=p,ae=!1;if(B){te=h.get(_e),te===void 0&&(te=[],h.set(_e,te));const ye=B.textures;if(te.length!==ye.length||te[0]!==n.COLOR_ATTACHMENT0){for(let xe=0,He=ye.length;xe<He;xe++)te[xe]=n.COLOR_ATTACHMENT0+xe;te.length=ye.length,ae=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,ae=!0);ae&&n.drawBuffers(te)}function re(B){return g!==B?(n.useProgram(B),g=B,!0):!1}const Se={[Vn]:n.FUNC_ADD,[yl]:n.FUNC_SUBTRACT,[Sl]:n.FUNC_REVERSE_SUBTRACT};Se[El]=n.MIN,Se[bl]=n.MAX;const Me={[wl]:n.ZERO,[Al]:n.ONE,[Tl]:n.SRC_COLOR,[hs]:n.SRC_ALPHA,[Il]:n.SRC_ALPHA_SATURATE,[Dl]:n.DST_COLOR,[Cl]:n.DST_ALPHA,[Rl]:n.ONE_MINUS_SRC_COLOR,[us]:n.ONE_MINUS_SRC_ALPHA,[Ll]:n.ONE_MINUS_DST_COLOR,[Pl]:n.ONE_MINUS_DST_ALPHA,[Ul]:n.CONSTANT_COLOR,[Fl]:n.ONE_MINUS_CONSTANT_COLOR,[Nl]:n.CONSTANT_ALPHA,[Ol]:n.ONE_MINUS_CONSTANT_ALPHA};function L(B,_e,te,ae,ye,xe,He,dt,Mt,nt){if(B===Rn){y===!0&&(X(n.BLEND),y=!1);return}if(y===!1&&(ne(n.BLEND),y=!0),B!==Ml){if(B!==m||nt!==x){if((d!==Vn||v!==Vn)&&(n.blendEquation(n.FUNC_ADD),d=Vn,v=Vn),nt)switch(B){case ui:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ds:n.blendFunc(n.ONE,n.ONE);break;case Ro:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Co:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ui:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ds:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ro:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Co:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}b=null,S=null,P=null,T=null,w.set(0,0,0),A=0,m=B,x=nt}return}ye=ye||_e,xe=xe||te,He=He||ae,(_e!==d||ye!==v)&&(n.blendEquationSeparate(Se[_e],Se[ye]),d=_e,v=ye),(te!==b||ae!==S||xe!==P||He!==T)&&(n.blendFuncSeparate(Me[te],Me[ae],Me[xe],Me[He]),b=te,S=ae,P=xe,T=He),(dt.equals(w)===!1||Mt!==A)&&(n.blendColor(dt.r,dt.g,dt.b,Mt),w.copy(dt),A=Mt),m=B,x=!1}function ke(B,_e){B.side===Dt?X(n.CULL_FACE):ne(n.CULL_FACE);let te=B.side===Rt;_e&&(te=!te),Le(te),B.blending===ui&&B.transparent===!1?L(Rn):L(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const ae=B.stencilWrite;a.setTest(ae),ae&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ce(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):X(n.SAMPLE_ALPHA_TO_COVERAGE)}function Le(B){_!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),_=B)}function De(B){B!==xl?(ne(n.CULL_FACE),B!==R&&(B===To?n.cullFace(n.BACK):B===vl?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):X(n.CULL_FACE),R=B}function fe(B){B!==I&&(U&&n.lineWidth(B),I=B)}function Ce(B,_e,te){B?(ne(n.POLYGON_OFFSET_FILL),(O!==_e||G!==te)&&(n.polygonOffset(_e,te),O=_e,G=te)):X(n.POLYGON_OFFSET_FILL)}function ue(B){B?ne(n.SCISSOR_TEST):X(n.SCISSOR_TEST)}function C(B){B===void 0&&(B=n.TEXTURE0+Z-1),le!==B&&(n.activeTexture(B),le=B)}function M(B,_e,te){te===void 0&&(le===null?te=n.TEXTURE0+Z-1:te=le);let ae=H[te];ae===void 0&&(ae={type:void 0,texture:void 0},H[te]=ae),(ae.type!==B||ae.texture!==_e)&&(le!==te&&(n.activeTexture(te),le=te),n.bindTexture(B,_e||J[B]),ae.type=B,ae.texture=_e)}function $(){const B=H[le];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function oe(){try{n.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ce(){try{n.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function se(){try{n.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pe(){try{n.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{n.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ve(){try{n.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function qe(){try{n.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{n.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function we(){try{n.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ne(){try{n.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ze(B){z.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),z.copy(B))}function Ae(B){D.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),D.copy(B))}function je(B,_e){let te=c.get(_e);te===void 0&&(te=new WeakMap,c.set(_e,te));let ae=te.get(B);ae===void 0&&(ae=n.getUniformBlockIndex(_e,B.name),te.set(B,ae))}function Ve(B,_e){const ae=c.get(_e).get(B);l.get(_e)!==ae&&(n.uniformBlockBinding(_e,ae,B.__bindingPointIndex),l.set(_e,ae))}function ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},le=null,H={},u={},h=new WeakMap,p=[],g=null,y=!1,m=null,d=null,b=null,S=null,v=null,P=null,T=null,w=new Re(0,0,0),A=0,x=!1,_=null,R=null,I=null,O=null,G=null,z.set(0,0,n.canvas.width,n.canvas.height),D.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ne,disable:X,bindFramebuffer:j,drawBuffers:ee,useProgram:re,setBlending:L,setMaterial:ke,setFlipSided:Le,setCullFace:De,setLineWidth:fe,setPolygonOffset:Ce,setScissorTest:ue,activeTexture:C,bindTexture:M,unbindTexture:$,compressedTexImage2D:oe,compressedTexImage3D:ce,texImage2D:we,texImage3D:Ne,updateUBOMapping:je,uniformBlockBinding:Ve,texStorage2D:qe,texStorage3D:he,texSubImage2D:se,texSubImage3D:Pe,compressedTexSubImage2D:me,compressedTexSubImage3D:ve,scissor:ze,viewport:Ae,reset:ot}}function Op(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,f=new WeakMap;let u;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,M){return p?new OffscreenCanvas(C,M):Bi("canvas")}function y(C,M,$){let oe=1;const ce=ue(C);if((ce.width>$||ce.height>$)&&(oe=$/Math.max(ce.width,ce.height)),oe<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const se=Math.floor(oe*ce.width),Pe=Math.floor(oe*ce.height);u===void 0&&(u=g(se,Pe));const me=M?g(se,Pe):u;return me.width=se,me.height=Pe,me.getContext("2d").drawImage(C,0,0,se,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+se+"x"+Pe+")."),me}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),C;return C}function m(C){return C.generateMipmaps}function d(C){n.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(C,M,$,oe,ce=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let se=M;if(M===n.RED&&($===n.FLOAT&&(se=n.R32F),$===n.HALF_FLOAT&&(se=n.R16F),$===n.UNSIGNED_BYTE&&(se=n.R8)),M===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(se=n.R8UI),$===n.UNSIGNED_SHORT&&(se=n.R16UI),$===n.UNSIGNED_INT&&(se=n.R32UI),$===n.BYTE&&(se=n.R8I),$===n.SHORT&&(se=n.R16I),$===n.INT&&(se=n.R32I)),M===n.RG&&($===n.FLOAT&&(se=n.RG32F),$===n.HALF_FLOAT&&(se=n.RG16F),$===n.UNSIGNED_BYTE&&(se=n.RG8)),M===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(se=n.RG8UI),$===n.UNSIGNED_SHORT&&(se=n.RG16UI),$===n.UNSIGNED_INT&&(se=n.RG32UI),$===n.BYTE&&(se=n.RG8I),$===n.SHORT&&(se=n.RG16I),$===n.INT&&(se=n.RG32I)),M===n.RGB_INTEGER&&($===n.UNSIGNED_BYTE&&(se=n.RGB8UI),$===n.UNSIGNED_SHORT&&(se=n.RGB16UI),$===n.UNSIGNED_INT&&(se=n.RGB32UI),$===n.BYTE&&(se=n.RGB8I),$===n.SHORT&&(se=n.RGB16I),$===n.INT&&(se=n.RGB32I)),M===n.RGBA_INTEGER&&($===n.UNSIGNED_BYTE&&(se=n.RGBA8UI),$===n.UNSIGNED_SHORT&&(se=n.RGBA16UI),$===n.UNSIGNED_INT&&(se=n.RGBA32UI),$===n.BYTE&&(se=n.RGBA8I),$===n.SHORT&&(se=n.RGBA16I),$===n.INT&&(se=n.RGBA32I)),M===n.RGB&&$===n.UNSIGNED_INT_5_9_9_9_REV&&(se=n.RGB9_E5),M===n.RGBA){const Pe=ce?Sr:Qe.getTransfer(oe);$===n.FLOAT&&(se=n.RGBA32F),$===n.HALF_FLOAT&&(se=n.RGBA16F),$===n.UNSIGNED_BYTE&&(se=Pe===rt?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(se=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(se=n.RGB5_A1)}return(se===n.R16F||se===n.R32F||se===n.RG16F||se===n.RG32F||se===n.RGBA16F||se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function v(C,M){let $;return C?M===null||M===Yn||M===Fi?$=n.DEPTH24_STENCIL8:M===mn?$=n.DEPTH32F_STENCIL8:M===Ui&&($=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Yn||M===Fi?$=n.DEPTH_COMPONENT24:M===mn?$=n.DEPTH_COMPONENT32F:M===Ui&&($=n.DEPTH_COMPONENT16),$}function P(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Zt&&C.minFilter!==tn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function T(C){const M=C.target;M.removeEventListener("dispose",T),A(M),M.isVideoTexture&&f.delete(M)}function w(C){const M=C.target;M.removeEventListener("dispose",w),_(M)}function A(C){const M=i.get(C);if(M.__webglInit===void 0)return;const $=C.source,oe=h.get($);if(oe){const ce=oe[M.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&x(C),Object.keys(oe).length===0&&h.delete($)}i.remove(C)}function x(C){const M=i.get(C);n.deleteTexture(M.__webglTexture);const $=C.source,oe=h.get($);delete oe[M.__cacheKey],o.memory.textures--}function _(C){const M=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(M.__webglFramebuffer[oe]))for(let ce=0;ce<M.__webglFramebuffer[oe].length;ce++)n.deleteFramebuffer(M.__webglFramebuffer[oe][ce]);else n.deleteFramebuffer(M.__webglFramebuffer[oe]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[oe])}else{if(Array.isArray(M.__webglFramebuffer))for(let oe=0;oe<M.__webglFramebuffer.length;oe++)n.deleteFramebuffer(M.__webglFramebuffer[oe]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let oe=0;oe<M.__webglColorRenderbuffer.length;oe++)M.__webglColorRenderbuffer[oe]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[oe]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const $=C.textures;for(let oe=0,ce=$.length;oe<ce;oe++){const se=i.get($[oe]);se.__webglTexture&&(n.deleteTexture(se.__webglTexture),o.memory.textures--),i.remove($[oe])}i.remove(C)}let R=0;function I(){R=0}function O(){const C=R;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),R+=1,C}function G(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function Z(C,M){const $=i.get(C);if(C.isVideoTexture&&fe(C),C.isRenderTargetTexture===!1&&C.version>0&&$.__version!==C.version){const oe=C.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{D($,C,M);return}}t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+M)}function U(C,M){const $=i.get(C);if(C.version>0&&$.__version!==C.version){D($,C,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+M)}function Y(C,M){const $=i.get(C);if(C.version>0&&$.__version!==C.version){D($,C,M);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+M)}function N(C,M){const $=i.get(C);if(C.version>0&&$.__version!==C.version){q($,C,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+M)}const le={[Ss]:n.REPEAT,[Xn]:n.CLAMP_TO_EDGE,[Es]:n.MIRRORED_REPEAT},H={[Zt]:n.NEAREST,[Yl]:n.NEAREST_MIPMAP_NEAREST,[qi]:n.NEAREST_MIPMAP_LINEAR,[tn]:n.LINEAR,[Ur]:n.LINEAR_MIPMAP_NEAREST,[qn]:n.LINEAR_MIPMAP_LINEAR},ie={[Kl]:n.NEVER,[ic]:n.ALWAYS,[Ql]:n.LESS,[qa]:n.LEQUAL,[Jl]:n.EQUAL,[nc]:n.GEQUAL,[ec]:n.GREATER,[tc]:n.NOTEQUAL};function F(C,M){if(M.type===mn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===tn||M.magFilter===Ur||M.magFilter===qi||M.magFilter===qn||M.minFilter===tn||M.minFilter===Ur||M.minFilter===qi||M.minFilter===qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,le[M.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,le[M.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,le[M.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,H[M.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,H[M.minFilter]),M.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,ie[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Zt||M.minFilter!==qi&&M.minFilter!==qn||M.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function z(C,M){let $=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",T));const oe=M.source;let ce=h.get(oe);ce===void 0&&(ce={},h.set(oe,ce));const se=G(M);if(se!==C.__cacheKey){ce[se]===void 0&&(ce[se]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,$=!0),ce[se].usedTimes++;const Pe=ce[C.__cacheKey];Pe!==void 0&&(ce[C.__cacheKey].usedTimes--,Pe.usedTimes===0&&x(M)),C.__cacheKey=se,C.__webglTexture=ce[se].texture}return $}function D(C,M,$){let oe=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(oe=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(oe=n.TEXTURE_3D);const ce=z(C,M),se=M.source;t.bindTexture(oe,C.__webglTexture,n.TEXTURE0+$);const Pe=i.get(se);if(se.version!==Pe.__version||ce===!0){t.activeTexture(n.TEXTURE0+$);const me=Qe.getPrimaries(Qe.workingColorSpace),ve=M.colorSpace===Tn?null:Qe.getPrimaries(M.colorSpace),qe=M.colorSpace===Tn||me===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let he=y(M.image,!1,r.maxTextureSize);he=Ce(M,he);const we=s.convert(M.format,M.colorSpace),Ne=s.convert(M.type);let ze=S(M.internalFormat,we,Ne,M.colorSpace,M.isVideoTexture);F(oe,M);let Ae;const je=M.mipmaps,Ve=M.isVideoTexture!==!0,ot=Pe.__version===void 0||ce===!0,B=se.dataReady,_e=P(M,he);if(M.isDepthTexture)ze=v(M.format===Oi,M.type),ot&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,ze,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,ze,he.width,he.height,0,we,Ne,null));else if(M.isDataTexture)if(je.length>0){Ve&&ot&&t.texStorage2D(n.TEXTURE_2D,_e,ze,je[0].width,je[0].height);for(let te=0,ae=je.length;te<ae;te++)Ae=je[te],Ve?B&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,Ae.width,Ae.height,we,Ne,Ae.data):t.texImage2D(n.TEXTURE_2D,te,ze,Ae.width,Ae.height,0,we,Ne,Ae.data);M.generateMipmaps=!1}else Ve?(ot&&t.texStorage2D(n.TEXTURE_2D,_e,ze,he.width,he.height),B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he.width,he.height,we,Ne,he.data)):t.texImage2D(n.TEXTURE_2D,0,ze,he.width,he.height,0,we,Ne,he.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ve&&ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,ze,je[0].width,je[0].height,he.depth);for(let te=0,ae=je.length;te<ae;te++)if(Ae=je[te],M.format!==jt)if(we!==null)if(Ve){if(B)if(M.layerUpdates.size>0){const ye=sa(Ae.width,Ae.height,M.format,M.type);for(const xe of M.layerUpdates){const He=Ae.data.subarray(xe*ye/Ae.data.BYTES_PER_ELEMENT,(xe+1)*ye/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,xe,Ae.width,Ae.height,1,we,He)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,Ae.width,Ae.height,he.depth,we,Ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,ze,Ae.width,Ae.height,he.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,Ae.width,Ae.height,he.depth,we,Ne,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,ze,Ae.width,Ae.height,he.depth,0,we,Ne,Ae.data)}else{Ve&&ot&&t.texStorage2D(n.TEXTURE_2D,_e,ze,je[0].width,je[0].height);for(let te=0,ae=je.length;te<ae;te++)Ae=je[te],M.format!==jt?we!==null?Ve?B&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,Ae.width,Ae.height,we,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,te,ze,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?B&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,Ae.width,Ae.height,we,Ne,Ae.data):t.texImage2D(n.TEXTURE_2D,te,ze,Ae.width,Ae.height,0,we,Ne,Ae.data)}else if(M.isDataArrayTexture)if(Ve){if(ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,ze,he.width,he.height,he.depth),B)if(M.layerUpdates.size>0){const te=sa(he.width,he.height,M.format,M.type);for(const ae of M.layerUpdates){const ye=he.data.subarray(ae*te/he.data.BYTES_PER_ELEMENT,(ae+1)*te/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ae,he.width,he.height,1,we,Ne,ye)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,we,Ne,he.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ze,he.width,he.height,he.depth,0,we,Ne,he.data);else if(M.isData3DTexture)Ve?(ot&&t.texStorage3D(n.TEXTURE_3D,_e,ze,he.width,he.height,he.depth),B&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,we,Ne,he.data)):t.texImage3D(n.TEXTURE_3D,0,ze,he.width,he.height,he.depth,0,we,Ne,he.data);else if(M.isFramebufferTexture){if(ot)if(Ve)t.texStorage2D(n.TEXTURE_2D,_e,ze,he.width,he.height);else{let te=he.width,ae=he.height;for(let ye=0;ye<_e;ye++)t.texImage2D(n.TEXTURE_2D,ye,ze,te,ae,0,we,Ne,null),te>>=1,ae>>=1}}else if(je.length>0){if(Ve&&ot){const te=ue(je[0]);t.texStorage2D(n.TEXTURE_2D,_e,ze,te.width,te.height)}for(let te=0,ae=je.length;te<ae;te++)Ae=je[te],Ve?B&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,we,Ne,Ae):t.texImage2D(n.TEXTURE_2D,te,ze,we,Ne,Ae);M.generateMipmaps=!1}else if(Ve){if(ot){const te=ue(he);t.texStorage2D(n.TEXTURE_2D,_e,ze,te.width,te.height)}B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,we,Ne,he)}else t.texImage2D(n.TEXTURE_2D,0,ze,we,Ne,he);m(M)&&d(oe),Pe.__version=se.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function q(C,M,$){if(M.image.length!==6)return;const oe=z(C,M),ce=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+$);const se=i.get(ce);if(ce.version!==se.__version||oe===!0){t.activeTexture(n.TEXTURE0+$);const Pe=Qe.getPrimaries(Qe.workingColorSpace),me=M.colorSpace===Tn?null:Qe.getPrimaries(M.colorSpace),ve=M.colorSpace===Tn||Pe===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const qe=M.isCompressedTexture||M.image[0].isCompressedTexture,he=M.image[0]&&M.image[0].isDataTexture,we=[];for(let ae=0;ae<6;ae++)!qe&&!he?we[ae]=y(M.image[ae],!0,r.maxCubemapSize):we[ae]=he?M.image[ae].image:M.image[ae],we[ae]=Ce(M,we[ae]);const Ne=we[0],ze=s.convert(M.format,M.colorSpace),Ae=s.convert(M.type),je=S(M.internalFormat,ze,Ae,M.colorSpace),Ve=M.isVideoTexture!==!0,ot=se.__version===void 0||oe===!0,B=ce.dataReady;let _e=P(M,Ne);F(n.TEXTURE_CUBE_MAP,M);let te;if(qe){Ve&&ot&&t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,je,Ne.width,Ne.height);for(let ae=0;ae<6;ae++){te=we[ae].mipmaps;for(let ye=0;ye<te.length;ye++){const xe=te[ye];M.format!==jt?ze!==null?Ve?B&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye,0,0,xe.width,xe.height,ze,xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye,je,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye,0,0,xe.width,xe.height,ze,Ae,xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye,je,xe.width,xe.height,0,ze,Ae,xe.data)}}}else{if(te=M.mipmaps,Ve&&ot){te.length>0&&_e++;const ae=ue(we[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,je,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(he){Ve?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,we[ae].width,we[ae].height,ze,Ae,we[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,je,we[ae].width,we[ae].height,0,ze,Ae,we[ae].data);for(let ye=0;ye<te.length;ye++){const He=te[ye].image[ae].image;Ve?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye+1,0,0,He.width,He.height,ze,Ae,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye+1,je,He.width,He.height,0,ze,Ae,He.data)}}else{Ve?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ze,Ae,we[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,je,ze,Ae,we[ae]);for(let ye=0;ye<te.length;ye++){const xe=te[ye];Ve?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye+1,0,0,ze,Ae,xe.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye+1,je,ze,Ae,xe.image[ae])}}}m(M)&&d(n.TEXTURE_CUBE_MAP),se.__version=ce.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function J(C,M,$,oe,ce,se){const Pe=s.convert($.format,$.colorSpace),me=s.convert($.type),ve=S($.internalFormat,Pe,me,$.colorSpace),qe=i.get(M),he=i.get($);if(he.__renderTarget=M,!qe.__hasExternalTextures){const we=Math.max(1,M.width>>se),Ne=Math.max(1,M.height>>se);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,se,ve,we,Ne,M.depth,0,Pe,me,null):t.texImage2D(ce,se,ve,we,Ne,0,Pe,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),De(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,ce,he.__webglTexture,0,Le(M)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,oe,ce,he.__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(C,M,$){if(n.bindRenderbuffer(n.RENDERBUFFER,C),M.depthBuffer){const oe=M.depthTexture,ce=oe&&oe.isDepthTexture?oe.type:null,se=v(M.stencilBuffer,ce),Pe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=Le(M);De(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,se,M.width,M.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,me,se,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,se,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pe,n.RENDERBUFFER,C)}else{const oe=M.textures;for(let ce=0;ce<oe.length;ce++){const se=oe[ce],Pe=s.convert(se.format,se.colorSpace),me=s.convert(se.type),ve=S(se.internalFormat,Pe,me,se.colorSpace),qe=Le(M);$&&De(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,qe,ve,M.width,M.height):De(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qe,ve,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ve,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function X(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const oe=i.get(M.depthTexture);oe.__renderTarget=M,(!oe.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z(M.depthTexture,0);const ce=oe.__webglTexture,se=Le(M);if(M.depthTexture.format===Ni)De(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0);else if(M.depthTexture.format===Oi)De(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function j(C){const M=i.get(C),$=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const oe=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),oe){const ce=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,oe.removeEventListener("dispose",ce)};oe.addEventListener("dispose",ce),M.__depthDisposeCallback=ce}M.__boundDepthTexture=oe}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");X(M.__webglFramebuffer,C)}else if($){M.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[oe]),M.__webglDepthbuffer[oe]===void 0)M.__webglDepthbuffer[oe]=n.createRenderbuffer(),ne(M.__webglDepthbuffer[oe],C,!1);else{const ce=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=M.__webglDepthbuffer[oe];n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,se)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),ne(M.__webglDepthbuffer,C,!1);else{const oe=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,ce)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(C,M,$){const oe=i.get(C);M!==void 0&&J(oe.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&j(C)}function re(C){const M=C.texture,$=i.get(C),oe=i.get(M);C.addEventListener("dispose",w);const ce=C.textures,se=C.isWebGLCubeRenderTarget===!0,Pe=ce.length>1;if(Pe||(oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture()),oe.__version=M.version,o.memory.textures++),se){$.__webglFramebuffer=[];for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer[me]=[];for(let ve=0;ve<M.mipmaps.length;ve++)$.__webglFramebuffer[me][ve]=n.createFramebuffer()}else $.__webglFramebuffer[me]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer=[];for(let me=0;me<M.mipmaps.length;me++)$.__webglFramebuffer[me]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(Pe)for(let me=0,ve=ce.length;me<ve;me++){const qe=i.get(ce[me]);qe.__webglTexture===void 0&&(qe.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&De(C)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let me=0;me<ce.length;me++){const ve=ce[me];$.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[me]);const qe=s.convert(ve.format,ve.colorSpace),he=s.convert(ve.type),we=S(ve.internalFormat,qe,he,ve.colorSpace,C.isXRRenderTarget===!0),Ne=Le(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,we,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,$.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),ne($.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture),F(n.TEXTURE_CUBE_MAP,M);for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)J($.__webglFramebuffer[me][ve],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ve);else J($.__webglFramebuffer[me],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(M)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let me=0,ve=ce.length;me<ve;me++){const qe=ce[me],he=i.get(qe);t.bindTexture(n.TEXTURE_2D,he.__webglTexture),F(n.TEXTURE_2D,qe),J($.__webglFramebuffer,C,qe,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,0),m(qe)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(me=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,oe.__webglTexture),F(me,M),M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)J($.__webglFramebuffer[ve],C,M,n.COLOR_ATTACHMENT0,me,ve);else J($.__webglFramebuffer,C,M,n.COLOR_ATTACHMENT0,me,0);m(M)&&d(me),t.unbindTexture()}C.depthBuffer&&j(C)}function Se(C){const M=C.textures;for(let $=0,oe=M.length;$<oe;$++){const ce=M[$];if(m(ce)){const se=b(C),Pe=i.get(ce).__webglTexture;t.bindTexture(se,Pe),d(se),t.unbindTexture()}}}const Me=[],L=[];function ke(C){if(C.samples>0){if(De(C)===!1){const M=C.textures,$=C.width,oe=C.height;let ce=n.COLOR_BUFFER_BIT;const se=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=i.get(C),me=M.length>1;if(me)for(let ve=0;ve<M.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let ve=0;ve<M.length;ve++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[ve]);const qe=i.get(M[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,qe,0)}n.blitFramebuffer(0,0,$,oe,0,0,$,oe,ce,n.NEAREST),l===!0&&(Me.length=0,L.length=0,Me.push(n.COLOR_ATTACHMENT0+ve),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Me.push(se),L.push(se),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Me))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let ve=0;ve<M.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[ve]);const qe=i.get(M[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,qe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Le(C){return Math.min(r.maxSamples,C.samples)}function De(C){const M=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function fe(C){const M=o.render.frame;f.get(C)!==M&&(f.set(C,M),C.update())}function Ce(C,M){const $=C.colorSpace,oe=C.format,ce=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||$!==_i&&$!==Tn&&(Qe.getTransfer($)===rt?(oe!==jt||ce!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),M}function ue(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=I,this.setTexture2D=Z,this.setTexture2DArray=U,this.setTexture3D=Y,this.setTextureCube=N,this.rebindTextures=ee,this.setupRenderTarget=re,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=J,this.useMultisampledRTT=De}function zp(n,e){function t(i,r=Tn){let s;const o=Qe.getTransfer(r);if(i===vn)return n.UNSIGNED_BYTE;if(i===io)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ro)return n.UNSIGNED_SHORT_5_5_5_1;if(i===za)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Na)return n.BYTE;if(i===Oa)return n.SHORT;if(i===Ui)return n.UNSIGNED_SHORT;if(i===no)return n.INT;if(i===Yn)return n.UNSIGNED_INT;if(i===mn)return n.FLOAT;if(i===ki)return n.HALF_FLOAT;if(i===Ba)return n.ALPHA;if(i===ka)return n.RGB;if(i===jt)return n.RGBA;if(i===Ha)return n.LUMINANCE;if(i===Ga)return n.LUMINANCE_ALPHA;if(i===Ni)return n.DEPTH_COMPONENT;if(i===Oi)return n.DEPTH_STENCIL;if(i===Va)return n.RED;if(i===so)return n.RED_INTEGER;if(i===Wa)return n.RG;if(i===oo)return n.RG_INTEGER;if(i===ao)return n.RGBA_INTEGER;if(i===mr||i===gr||i===_r||i===xr)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===mr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_r)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===mr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_r)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bs||i===ws||i===As||i===Ts)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===bs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ws)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===As)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ts)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rs||i===Cs||i===Ps)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Rs||i===Cs)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ps)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ds||i===Ls||i===Is||i===Us||i===Fs||i===Ns||i===Os||i===zs||i===Bs||i===ks||i===Hs||i===Gs||i===Vs||i===Ws)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ds)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ls)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Is)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Us)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fs)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ns)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Os)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zs)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bs)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ks)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hs)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gs)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vs)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ws)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vr||i===Xs||i===qs)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===vr)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xs)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===qs)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xa||i===Ys||i===$s||i===js)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===vr)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ys)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$s)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===js)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Bp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kp=`
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

}`;class Hp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new bt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ln({vertexShader:Bp,fragmentShader:kp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ee(new Pn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gp extends vi{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,u=null,h=null,p=null,g=null;const y=new Hp,m=t.getContextAttributes();let d=null,b=null;const S=[],v=[],P=new Xe;let T=null;const w=new ct;w.viewport=new st;const A=new ct;A.viewport=new st;const x=[w,A],_=new ld;let R=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let q=S[D];return q===void 0&&(q=new es,S[D]=q),q.getTargetRaySpace()},this.getControllerGrip=function(D){let q=S[D];return q===void 0&&(q=new es,S[D]=q),q.getGripSpace()},this.getHand=function(D){let q=S[D];return q===void 0&&(q=new es,S[D]=q),q.getHandSpace()};function O(D){const q=v.indexOf(D.inputSource);if(q===-1)return;const J=S[q];J!==void 0&&(J.update(D.inputSource,D.frame,c||o),J.dispatchEvent({type:D.type,data:D.inputSource}))}function G(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",Z);for(let D=0;D<S.length;D++){const q=v[D];q!==null&&(v[D]=null,S[D].disconnect(q))}R=null,I=null,y.reset(),e.setRenderTarget(d),p=null,h=null,u=null,r=null,b=null,z.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){s=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(D){if(r=D,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",G),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,ne=null,X=null;m.depth&&(X=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=m.stencil?Oi:Ni,ne=m.stencil?Fi:Yn);const j={colorFormat:t.RGBA8,depthFormat:X,scaleFactor:s};u=new XRWebGLBinding(r,t),h=u.createProjectionLayer(j),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new $n(h.textureWidth,h.textureHeight,{format:jt,type:vn,depthTexture:new nl(h.textureWidth,h.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new $n(p.framebufferWidth,p.framebufferHeight,{format:jt,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),z.setContext(r),z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Z(D){for(let q=0;q<D.removed.length;q++){const J=D.removed[q],ne=v.indexOf(J);ne>=0&&(v[ne]=null,S[ne].disconnect(J))}for(let q=0;q<D.added.length;q++){const J=D.added[q];let ne=v.indexOf(J);if(ne===-1){for(let j=0;j<S.length;j++)if(j>=v.length){v.push(J),ne=j;break}else if(v[j]===null){v[j]=J,ne=j;break}if(ne===-1)break}const X=S[ne];X&&X.connect(J)}}const U=new k,Y=new k;function N(D,q,J){U.setFromMatrixPosition(q.matrixWorld),Y.setFromMatrixPosition(J.matrixWorld);const ne=U.distanceTo(Y),X=q.projectionMatrix.elements,j=J.projectionMatrix.elements,ee=X[14]/(X[10]-1),re=X[14]/(X[10]+1),Se=(X[9]+1)/X[5],Me=(X[9]-1)/X[5],L=(X[8]-1)/X[0],ke=(j[8]+1)/j[0],Le=ee*L,De=ee*ke,fe=ne/(-L+ke),Ce=fe*-L;if(q.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Ce),D.translateZ(fe),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert(),X[10]===-1)D.projectionMatrix.copy(q.projectionMatrix),D.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const ue=ee+fe,C=re+fe,M=Le-Ce,$=De+(ne-Ce),oe=Se*re/C*ue,ce=Me*re/C*ue;D.projectionMatrix.makePerspective(M,$,oe,ce,ue,C),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}}function le(D,q){q===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(q.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(r===null)return;let q=D.near,J=D.far;y.texture!==null&&(y.depthNear>0&&(q=y.depthNear),y.depthFar>0&&(J=y.depthFar)),_.near=A.near=w.near=q,_.far=A.far=w.far=J,(R!==_.near||I!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),R=_.near,I=_.far),w.layers.mask=D.layers.mask|2,A.layers.mask=D.layers.mask|4,_.layers.mask=w.layers.mask|A.layers.mask;const ne=D.parent,X=_.cameras;le(_,ne);for(let j=0;j<X.length;j++)le(X[j],ne);X.length===2?N(_,w,A):_.projectionMatrix.copy(w.projectionMatrix),H(D,_,ne)};function H(D,q,J){J===null?D.matrix.copy(q.matrixWorld):(D.matrix.copy(J.matrixWorld),D.matrix.invert(),D.matrix.multiply(q.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(q.projectionMatrix),D.projectionMatrixInverse.copy(q.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=zi*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(D){l=D,h!==null&&(h.fixedFoveation=D),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=D)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(_)};let ie=null;function F(D,q){if(f=q.getViewerPose(c||o),g=q,f!==null){const J=f.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let ne=!1;J.length!==_.cameras.length&&(_.cameras.length=0,ne=!0);for(let ee=0;ee<J.length;ee++){const re=J[ee];let Se=null;if(p!==null)Se=p.getViewport(re);else{const L=u.getViewSubImage(h,re);Se=L.viewport,ee===0&&(e.setRenderTargetTextures(b,L.colorTexture,L.depthStencilTexture),e.setRenderTarget(b))}let Me=x[ee];Me===void 0&&(Me=new ct,Me.layers.enable(ee),Me.viewport=new st,x[ee]=Me),Me.matrix.fromArray(re.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(re.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(Se.x,Se.y,Se.width,Se.height),ee===0&&(_.matrix.copy(Me.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ne===!0&&_.cameras.push(Me)}const X=r.enabledFeatures;if(X&&X.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&u){const ee=u.getDepthInformation(J[0]);ee&&ee.isValid&&ee.texture&&y.init(e,ee,r.renderState)}}for(let J=0;J<S.length;J++){const ne=v[J],X=S[J];ne!==null&&X!==void 0&&X.update(ne,q,c||o)}ie&&ie(D,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),g=null}const z=new ol;z.setAnimationLoop(F),this.setAnimationLoop=function(D){ie=D},this.dispose=function(){}}}const Hn=new Ht,Vp=new at;function Wp(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Qa(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,b,S,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),u(m,d)):d.isMeshPhongMaterial?(s(m,d),f(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),y(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,b,S):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Rt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Rt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const b=e.get(d),S=b.envMap,v=b.envMapRotation;S&&(m.envMap.value=S,Hn.copy(v),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),m.envMapRotation.value.setFromMatrix4(Vp.makeRotationFromEuler(Hn)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,b,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*b,m.scale.value=S*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function f(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,b){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Rt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){const b=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Xp(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){const v=S.program;i.uniformBlockBinding(b,v)}function c(b,S){let v=r[b.id];v===void 0&&(g(b),v=f(b),r[b.id]=v,b.addEventListener("dispose",m));const P=S.program;i.updateUBOMapping(b,P);const T=e.render.frame;s[b.id]!==T&&(h(b),s[b.id]=T)}function f(b){const S=u();b.__bindingPointIndex=S;const v=n.createBuffer(),P=b.__size,T=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,P,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,v),v}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const S=r[b.id],v=b.uniforms,P=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let T=0,w=v.length;T<w;T++){const A=Array.isArray(v[T])?v[T]:[v[T]];for(let x=0,_=A.length;x<_;x++){const R=A[x];if(p(R,T,x,P)===!0){const I=R.__offset,O=Array.isArray(R.value)?R.value:[R.value];let G=0;for(let Z=0;Z<O.length;Z++){const U=O[Z],Y=y(U);typeof U=="number"||typeof U=="boolean"?(R.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,I+G,R.__data)):U.isMatrix3?(R.__data[0]=U.elements[0],R.__data[1]=U.elements[1],R.__data[2]=U.elements[2],R.__data[3]=0,R.__data[4]=U.elements[3],R.__data[5]=U.elements[4],R.__data[6]=U.elements[5],R.__data[7]=0,R.__data[8]=U.elements[6],R.__data[9]=U.elements[7],R.__data[10]=U.elements[8],R.__data[11]=0):(U.toArray(R.__data,G),G+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(b,S,v,P){const T=b.value,w=S+"_"+v;if(P[w]===void 0)return typeof T=="number"||typeof T=="boolean"?P[w]=T:P[w]=T.clone(),!0;{const A=P[w];if(typeof T=="number"||typeof T=="boolean"){if(A!==T)return P[w]=T,!0}else if(A.equals(T)===!1)return A.copy(T),!0}return!1}function g(b){const S=b.uniforms;let v=0;const P=16;for(let w=0,A=S.length;w<A;w++){const x=Array.isArray(S[w])?S[w]:[S[w]];for(let _=0,R=x.length;_<R;_++){const I=x[_],O=Array.isArray(I.value)?I.value:[I.value];for(let G=0,Z=O.length;G<Z;G++){const U=O[G],Y=y(U),N=v%P,le=N%Y.boundary,H=N+le;v+=le,H!==0&&P-H<Y.storage&&(v+=P-H),I.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=v,v+=Y.storage}}}const T=v%P;return T>0&&(v+=P-T),b.__size=v,b.__cache={},this}function y(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function m(b){const S=b.target;S.removeEventListener("dispose",m);const v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function d(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class Jt{constructor(e={}){const{canvas:t=Mc(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),y=new Int32Array(4);let m=null,d=null;const b=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let P=!1;this._outputColorSpace=kt;let T=0,w=0,A=null,x=-1,_=null;const R=new st,I=new st;let O=null;const G=new Re(0);let Z=0,U=t.width,Y=t.height,N=1,le=null,H=null;const ie=new st(0,0,U,Y),F=new st(0,0,U,Y);let z=!1;const D=new po;let q=!1,J=!1;const ne=new at,X=new at,j=new k,ee=new st,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Se=!1;function Me(){return A===null?N:1}let L=i;function ke(E,V){return t.getContext(E,V)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${to}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",xe,!1),L===null){const V="webgl2";if(L=ke(V,E),L===null)throw ke(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Le,De,fe,Ce,ue,C,M,$,oe,ce,se,Pe,me,ve,qe,he,we,Ne,ze,Ae,je,Ve,ot,B;function _e(){Le=new tf(L),Le.init(),Ve=new zp(L,Le),De=new $u(L,Le,e,Ve),fe=new Np(L,Le),De.reverseDepthBuffer&&h&&fe.buffers.depth.setReversed(!0),Ce=new sf(L),ue=new Ep,C=new Op(L,Le,fe,ue,De,Ve,Ce),M=new Zu(v),$=new ef(v),oe=new dd(L),ot=new qu(L,oe),ce=new nf(L,oe,Ce,ot),se=new af(L,ce,oe,Ce),ze=new of(L,De,C),he=new ju(ue),Pe=new Sp(v,M,$,Le,De,ot,he),me=new Wp(v,ue),ve=new wp,qe=new Dp(Le),Ne=new Xu(v,M,$,fe,se,p,l),we=new Up(v,se,De),B=new Xp(L,Ce,De,fe),Ae=new Yu(L,Le,Ce),je=new rf(L,Le,Ce),Ce.programs=Pe.programs,v.capabilities=De,v.extensions=Le,v.properties=ue,v.renderLists=ve,v.shadowMap=we,v.state=fe,v.info=Ce}_e();const te=new Gp(v,L);this.xr=te,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=Le.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Le.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(E){E!==void 0&&(N=E,this.setSize(U,Y,!1))},this.getSize=function(E){return E.set(U,Y)},this.setSize=function(E,V,K=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=E,Y=V,t.width=Math.floor(E*N),t.height=Math.floor(V*N),K===!0&&(t.style.width=E+"px",t.style.height=V+"px"),this.setViewport(0,0,E,V)},this.getDrawingBufferSize=function(E){return E.set(U*N,Y*N).floor()},this.setDrawingBufferSize=function(E,V,K){U=E,Y=V,N=K,t.width=Math.floor(E*K),t.height=Math.floor(V*K),this.setViewport(0,0,E,V)},this.getCurrentViewport=function(E){return E.copy(R)},this.getViewport=function(E){return E.copy(ie)},this.setViewport=function(E,V,K,Q){E.isVector4?ie.set(E.x,E.y,E.z,E.w):ie.set(E,V,K,Q),fe.viewport(R.copy(ie).multiplyScalar(N).round())},this.getScissor=function(E){return E.copy(F)},this.setScissor=function(E,V,K,Q){E.isVector4?F.set(E.x,E.y,E.z,E.w):F.set(E,V,K,Q),fe.scissor(I.copy(F).multiplyScalar(N).round())},this.getScissorTest=function(){return z},this.setScissorTest=function(E){fe.setScissorTest(z=E)},this.setOpaqueSort=function(E){le=E},this.setTransparentSort=function(E){H=E},this.getClearColor=function(E){return E.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(E=!0,V=!0,K=!0){let Q=0;if(E){let W=!1;if(A!==null){const de=A.texture.format;W=de===ao||de===oo||de===so}if(W){const de=A.texture.type,ge=de===vn||de===Yn||de===Ui||de===Fi||de===io||de===ro,be=Ne.getClearColor(),Te=Ne.getClearAlpha(),Be=be.r,Oe=be.g,Ie=be.b;ge?(g[0]=Be,g[1]=Oe,g[2]=Ie,g[3]=Te,L.clearBufferuiv(L.COLOR,0,g)):(y[0]=Be,y[1]=Oe,y[2]=Ie,y[3]=Te,L.clearBufferiv(L.COLOR,0,y))}else Q|=L.COLOR_BUFFER_BIT}V&&(Q|=L.DEPTH_BUFFER_BIT),K&&(Q|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Ne.dispose(),ve.dispose(),qe.dispose(),ue.dispose(),M.dispose(),$.dispose(),se.dispose(),ot.dispose(),B.dispose(),Pe.dispose(),te.dispose(),te.removeEventListener("sessionstart",Mo),te.removeEventListener("sessionend",yo),Un.stop()};function ae(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const E=Ce.autoReset,V=we.enabled,K=we.autoUpdate,Q=we.needsUpdate,W=we.type;_e(),Ce.autoReset=E,we.enabled=V,we.autoUpdate=K,we.needsUpdate=Q,we.type=W}function xe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function He(E){const V=E.target;V.removeEventListener("dispose",He),dt(V)}function dt(E){Mt(E),ue.remove(E)}function Mt(E){const V=ue.get(E).programs;V!==void 0&&(V.forEach(function(K){Pe.releaseProgram(K)}),E.isShaderMaterial&&Pe.releaseShaderCache(E))}this.renderBufferDirect=function(E,V,K,Q,W,de){V===null&&(V=re);const ge=W.isMesh&&W.matrixWorld.determinant()<0,be=ul(E,V,K,Q,W);fe.setMaterial(Q,ge);let Te=K.index,Be=1;if(Q.wireframe===!0){if(Te=ce.getWireframeAttribute(K),Te===void 0)return;Be=2}const Oe=K.drawRange,Ie=K.attributes.position;let Ze=Oe.start*Be,Je=(Oe.start+Oe.count)*Be;de!==null&&(Ze=Math.max(Ze,de.start*Be),Je=Math.min(Je,(de.start+de.count)*Be)),Te!==null?(Ze=Math.max(Ze,0),Je=Math.min(Je,Te.count)):Ie!=null&&(Ze=Math.max(Ze,0),Je=Math.min(Je,Ie.count));const ut=Je-Ze;if(ut<0||ut===1/0)return;ot.setup(W,Q,be,K,Te);let ht,Ke=Ae;if(Te!==null&&(ht=oe.get(Te),Ke=je,Ke.setIndex(ht)),W.isMesh)Q.wireframe===!0?(fe.setLineWidth(Q.wireframeLinewidth*Me()),Ke.setMode(L.LINES)):Ke.setMode(L.TRIANGLES);else if(W.isLine){let Ue=Q.linewidth;Ue===void 0&&(Ue=1),fe.setLineWidth(Ue*Me()),W.isLineSegments?Ke.setMode(L.LINES):W.isLineLoop?Ke.setMode(L.LINE_LOOP):Ke.setMode(L.LINE_STRIP)}else W.isPoints?Ke.setMode(L.POINTS):W.isSprite&&Ke.setMode(L.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Mr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ke.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Le.get("WEBGL_multi_draw"))Ke.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ue=W._multiDrawStarts,vt=W._multiDrawCounts,et=W._multiDrawCount,Vt=Te?oe.get(Te).bytesPerElement:1,jn=ue.get(Q).currentProgram.getUniforms();for(let Lt=0;Lt<et;Lt++)jn.setValue(L,"_gl_DrawID",Lt),Ke.render(Ue[Lt]/Vt,vt[Lt])}else if(W.isInstancedMesh)Ke.renderInstances(Ze,ut,W.count);else if(K.isInstancedBufferGeometry){const Ue=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,vt=Math.min(K.instanceCount,Ue);Ke.renderInstances(Ze,ut,vt)}else Ke.render(Ze,ut)};function nt(E,V,K){E.transparent===!0&&E.side===Dt&&E.forceSinglePass===!1?(E.side=Rt,E.needsUpdate=!0,Xi(E,V,K),E.side=Dn,E.needsUpdate=!0,Xi(E,V,K),E.side=Dt):Xi(E,V,K)}this.compile=function(E,V,K=null){K===null&&(K=E),d=qe.get(K),d.init(V),S.push(d),K.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(d.pushLight(W),W.castShadow&&d.pushShadow(W))}),E!==K&&E.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(d.pushLight(W),W.castShadow&&d.pushShadow(W))}),d.setupLights();const Q=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const de=W.material;if(de)if(Array.isArray(de))for(let ge=0;ge<de.length;ge++){const be=de[ge];nt(be,K,W),Q.add(be)}else nt(de,K,W),Q.add(de)}),d=S.pop(),Q},this.compileAsync=function(E,V,K=null){const Q=this.compile(E,V,K);return new Promise(W=>{function de(){if(Q.forEach(function(ge){ue.get(ge).currentProgram.isReady()&&Q.delete(ge)}),Q.size===0){W(E);return}setTimeout(de,10)}Le.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Gt=null;function an(E){Gt&&Gt(E)}function Mo(){Un.stop()}function yo(){Un.start()}const Un=new ol;Un.setAnimationLoop(an),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(E){Gt=E,te.setAnimationLoop(E),E===null?Un.stop():Un.start()},te.addEventListener("sessionstart",Mo),te.addEventListener("sessionend",yo),this.render=function(E,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(V),V=te.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,V,A),d=qe.get(E,S.length),d.init(V),S.push(d),X.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),D.setFromProjectionMatrix(X),J=this.localClippingEnabled,q=he.init(this.clippingPlanes,J),m=ve.get(E,b.length),m.init(),b.push(m),te.enabled===!0&&te.isPresenting===!0){const de=v.xr.getDepthSensingMesh();de!==null&&Lr(de,V,-1/0,v.sortObjects)}Lr(E,V,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(le,H),Se=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Se&&Ne.addToRenderList(m,E),this.info.render.frame++,q===!0&&he.beginShadows();const K=d.state.shadowsArray;we.render(K,E,V),q===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=m.opaque,W=m.transmissive;if(d.setupLights(),V.isArrayCamera){const de=V.cameras;if(W.length>0)for(let ge=0,be=de.length;ge<be;ge++){const Te=de[ge];Eo(Q,W,E,Te)}Se&&Ne.render(E);for(let ge=0,be=de.length;ge<be;ge++){const Te=de[ge];So(m,E,Te,Te.viewport)}}else W.length>0&&Eo(Q,W,E,V),Se&&Ne.render(E),So(m,E,V);A!==null&&w===0&&(C.updateMultisampleRenderTarget(A),C.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(v,E,V),ot.resetDefaultState(),x=-1,_=null,S.pop(),S.length>0?(d=S[S.length-1],q===!0&&he.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Lr(E,V,K,Q){if(E.visible===!1)return;if(E.layers.test(V.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(V);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||D.intersectsSprite(E)){Q&&ee.setFromMatrixPosition(E.matrixWorld).applyMatrix4(X);const ge=se.update(E),be=E.material;be.visible&&m.push(E,ge,be,K,ee.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||D.intersectsObject(E))){const ge=se.update(E),be=E.material;if(Q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ee.copy(E.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),ee.copy(ge.boundingSphere.center)),ee.applyMatrix4(E.matrixWorld).applyMatrix4(X)),Array.isArray(be)){const Te=ge.groups;for(let Be=0,Oe=Te.length;Be<Oe;Be++){const Ie=Te[Be],Ze=be[Ie.materialIndex];Ze&&Ze.visible&&m.push(E,ge,Ze,K,ee.z,Ie)}}else be.visible&&m.push(E,ge,be,K,ee.z,null)}}const de=E.children;for(let ge=0,be=de.length;ge<be;ge++)Lr(de[ge],V,K,Q)}function So(E,V,K,Q){const W=E.opaque,de=E.transmissive,ge=E.transparent;d.setupLightsView(K),q===!0&&he.setGlobalState(v.clippingPlanes,K),Q&&fe.viewport(R.copy(Q)),W.length>0&&Wi(W,V,K),de.length>0&&Wi(de,V,K),ge.length>0&&Wi(ge,V,K),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Eo(E,V,K,Q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Q.id]===void 0&&(d.state.transmissionRenderTarget[Q.id]=new $n(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float")?ki:vn,minFilter:qn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const de=d.state.transmissionRenderTarget[Q.id],ge=Q.viewport||R;de.setSize(ge.z*v.transmissionResolutionScale,ge.w*v.transmissionResolutionScale);const be=v.getRenderTarget();v.setRenderTarget(de),v.getClearColor(G),Z=v.getClearAlpha(),Z<1&&v.setClearColor(16777215,.5),v.clear(),Se&&Ne.render(K);const Te=v.toneMapping;v.toneMapping=Cn;const Be=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),d.setupLightsView(Q),q===!0&&he.setGlobalState(v.clippingPlanes,Q),Wi(E,K,Q),C.updateMultisampleRenderTarget(de),C.updateRenderTargetMipmap(de),Le.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Ie=0,Ze=V.length;Ie<Ze;Ie++){const Je=V[Ie],ut=Je.object,ht=Je.geometry,Ke=Je.material,Ue=Je.group;if(Ke.side===Dt&&ut.layers.test(Q.layers)){const vt=Ke.side;Ke.side=Rt,Ke.needsUpdate=!0,bo(ut,K,Q,ht,Ke,Ue),Ke.side=vt,Ke.needsUpdate=!0,Oe=!0}}Oe===!0&&(C.updateMultisampleRenderTarget(de),C.updateRenderTargetMipmap(de))}v.setRenderTarget(be),v.setClearColor(G,Z),Be!==void 0&&(Q.viewport=Be),v.toneMapping=Te}function Wi(E,V,K){const Q=V.isScene===!0?V.overrideMaterial:null;for(let W=0,de=E.length;W<de;W++){const ge=E[W],be=ge.object,Te=ge.geometry,Be=ge.group;let Oe=ge.material;Oe.allowOverride===!0&&Q!==null&&(Oe=Q),be.layers.test(K.layers)&&bo(be,V,K,Te,Oe,Be)}}function bo(E,V,K,Q,W,de){E.onBeforeRender(v,V,K,Q,W,de),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(v,V,K,Q,E,de),W.transparent===!0&&W.side===Dt&&W.forceSinglePass===!1?(W.side=Rt,W.needsUpdate=!0,v.renderBufferDirect(K,V,Q,W,E,de),W.side=Dn,W.needsUpdate=!0,v.renderBufferDirect(K,V,Q,W,E,de),W.side=Dt):v.renderBufferDirect(K,V,Q,W,E,de),E.onAfterRender(v,V,K,Q,W,de)}function Xi(E,V,K){V.isScene!==!0&&(V=re);const Q=ue.get(E),W=d.state.lights,de=d.state.shadowsArray,ge=W.state.version,be=Pe.getParameters(E,W.state,de,V,K),Te=Pe.getProgramCacheKey(be);let Be=Q.programs;Q.environment=E.isMeshStandardMaterial?V.environment:null,Q.fog=V.fog,Q.envMap=(E.isMeshStandardMaterial?$:M).get(E.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&E.envMap===null?V.environmentRotation:E.envMapRotation,Be===void 0&&(E.addEventListener("dispose",He),Be=new Map,Q.programs=Be);let Oe=Be.get(Te);if(Oe!==void 0){if(Q.currentProgram===Oe&&Q.lightsStateVersion===ge)return Ao(E,be),Oe}else be.uniforms=Pe.getUniforms(E),E.onBeforeCompile(be,v),Oe=Pe.acquireProgram(be,Te),Be.set(Te,Oe),Q.uniforms=be.uniforms;const Ie=Q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ie.clippingPlanes=he.uniform),Ao(E,be),Q.needsLights=pl(E),Q.lightsStateVersion=ge,Q.needsLights&&(Ie.ambientLightColor.value=W.state.ambient,Ie.lightProbe.value=W.state.probe,Ie.directionalLights.value=W.state.directional,Ie.directionalLightShadows.value=W.state.directionalShadow,Ie.spotLights.value=W.state.spot,Ie.spotLightShadows.value=W.state.spotShadow,Ie.rectAreaLights.value=W.state.rectArea,Ie.ltc_1.value=W.state.rectAreaLTC1,Ie.ltc_2.value=W.state.rectAreaLTC2,Ie.pointLights.value=W.state.point,Ie.pointLightShadows.value=W.state.pointShadow,Ie.hemisphereLights.value=W.state.hemi,Ie.directionalShadowMap.value=W.state.directionalShadowMap,Ie.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ie.spotShadowMap.value=W.state.spotShadowMap,Ie.spotLightMatrix.value=W.state.spotLightMatrix,Ie.spotLightMap.value=W.state.spotLightMap,Ie.pointShadowMap.value=W.state.pointShadowMap,Ie.pointShadowMatrix.value=W.state.pointShadowMatrix),Q.currentProgram=Oe,Q.uniformsList=null,Oe}function wo(E){if(E.uniformsList===null){const V=E.currentProgram.getUniforms();E.uniformsList=yr.seqWithValue(V.seq,E.uniforms)}return E.uniformsList}function Ao(E,V){const K=ue.get(E);K.outputColorSpace=V.outputColorSpace,K.batching=V.batching,K.batchingColor=V.batchingColor,K.instancing=V.instancing,K.instancingColor=V.instancingColor,K.instancingMorph=V.instancingMorph,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function ul(E,V,K,Q,W){V.isScene!==!0&&(V=re),C.resetTextureUnits();const de=V.fog,ge=Q.isMeshStandardMaterial?V.environment:null,be=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:_i,Te=(Q.isMeshStandardMaterial?$:M).get(Q.envMap||ge),Be=Q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Oe=!!K.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ie=!!K.morphAttributes.position,Ze=!!K.morphAttributes.normal,Je=!!K.morphAttributes.color;let ut=Cn;Q.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ut=v.toneMapping);const ht=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ke=ht!==void 0?ht.length:0,Ue=ue.get(Q),vt=d.state.lights;if(q===!0&&(J===!0||E!==_)){const wt=E===_&&Q.id===x;he.setState(Q,E,wt)}let et=!1;Q.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==vt.state.version||Ue.outputColorSpace!==be||W.isBatchedMesh&&Ue.batching===!1||!W.isBatchedMesh&&Ue.batching===!0||W.isBatchedMesh&&Ue.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ue.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ue.instancing===!1||!W.isInstancedMesh&&Ue.instancing===!0||W.isSkinnedMesh&&Ue.skinning===!1||!W.isSkinnedMesh&&Ue.skinning===!0||W.isInstancedMesh&&Ue.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ue.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ue.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ue.instancingMorph===!1&&W.morphTexture!==null||Ue.envMap!==Te||Q.fog===!0&&Ue.fog!==de||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==he.numPlanes||Ue.numIntersection!==he.numIntersection)||Ue.vertexAlphas!==Be||Ue.vertexTangents!==Oe||Ue.morphTargets!==Ie||Ue.morphNormals!==Ze||Ue.morphColors!==Je||Ue.toneMapping!==ut||Ue.morphTargetsCount!==Ke)&&(et=!0):(et=!0,Ue.__version=Q.version);let Vt=Ue.currentProgram;et===!0&&(Vt=Xi(Q,V,W));let jn=!1,Lt=!1,Ei=!1;const lt=Vt.getUniforms(),Ot=Ue.uniforms;if(fe.useProgram(Vt.program)&&(jn=!0,Lt=!0,Ei=!0),Q.id!==x&&(x=Q.id,Lt=!0),jn||_!==E){fe.buffers.depth.getReversed()?(ne.copy(E.projectionMatrix),Sc(ne),Ec(ne),lt.setValue(L,"projectionMatrix",ne)):lt.setValue(L,"projectionMatrix",E.projectionMatrix),lt.setValue(L,"viewMatrix",E.matrixWorldInverse);const Pt=lt.map.cameraPosition;Pt!==void 0&&Pt.setValue(L,j.setFromMatrixPosition(E.matrixWorld)),De.logarithmicDepthBuffer&&lt.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&lt.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),_!==E&&(_=E,Lt=!0,Ei=!0)}if(W.isSkinnedMesh){lt.setOptional(L,W,"bindMatrix"),lt.setOptional(L,W,"bindMatrixInverse");const wt=W.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),lt.setValue(L,"boneTexture",wt.boneTexture,C))}W.isBatchedMesh&&(lt.setOptional(L,W,"batchingTexture"),lt.setValue(L,"batchingTexture",W._matricesTexture,C),lt.setOptional(L,W,"batchingIdTexture"),lt.setValue(L,"batchingIdTexture",W._indirectTexture,C),lt.setOptional(L,W,"batchingColorTexture"),W._colorsTexture!==null&&lt.setValue(L,"batchingColorTexture",W._colorsTexture,C));const zt=K.morphAttributes;if((zt.position!==void 0||zt.normal!==void 0||zt.color!==void 0)&&ze.update(W,K,Vt),(Lt||Ue.receiveShadow!==W.receiveShadow)&&(Ue.receiveShadow=W.receiveShadow,lt.setValue(L,"receiveShadow",W.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Ot.envMap.value=Te,Ot.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&V.environment!==null&&(Ot.envMapIntensity.value=V.environmentIntensity),Lt&&(lt.setValue(L,"toneMappingExposure",v.toneMappingExposure),Ue.needsLights&&fl(Ot,Ei),de&&Q.fog===!0&&me.refreshFogUniforms(Ot,de),me.refreshMaterialUniforms(Ot,Q,N,Y,d.state.transmissionRenderTarget[E.id]),yr.upload(L,wo(Ue),Ot,C)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(yr.upload(L,wo(Ue),Ot,C),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&lt.setValue(L,"center",W.center),lt.setValue(L,"modelViewMatrix",W.modelViewMatrix),lt.setValue(L,"normalMatrix",W.normalMatrix),lt.setValue(L,"modelMatrix",W.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const wt=Q.uniformsGroups;for(let Pt=0,Ir=wt.length;Pt<Ir;Pt++){const Fn=wt[Pt];B.update(Fn,Vt),B.bind(Fn,Vt)}}return Vt}function fl(E,V){E.ambientLightColor.needsUpdate=V,E.lightProbe.needsUpdate=V,E.directionalLights.needsUpdate=V,E.directionalLightShadows.needsUpdate=V,E.pointLights.needsUpdate=V,E.pointLightShadows.needsUpdate=V,E.spotLights.needsUpdate=V,E.spotLightShadows.needsUpdate=V,E.rectAreaLights.needsUpdate=V,E.hemisphereLights.needsUpdate=V}function pl(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,V,K){const Q=ue.get(E);Q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),ue.get(E.texture).__webglTexture=V,ue.get(E.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:K,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,V){const K=ue.get(E);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0};const ml=L.createFramebuffer();this.setRenderTarget=function(E,V=0,K=0){A=E,T=V,w=K;let Q=!0,W=null,de=!1,ge=!1;if(E){const Te=ue.get(E);if(Te.__useDefaultFramebuffer!==void 0)fe.bindFramebuffer(L.FRAMEBUFFER,null),Q=!1;else if(Te.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(Te.__hasExternalTextures)C.rebindTextures(E,ue.get(E.texture).__webglTexture,ue.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ie=E.depthTexture;if(Te.__boundDepthTexture!==Ie){if(Ie!==null&&ue.has(Ie)&&(E.width!==Ie.image.width||E.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}const Be=E.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ge=!0);const Oe=ue.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Oe[V])?W=Oe[V][K]:W=Oe[V],de=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?W=ue.get(E).__webglMultisampledFramebuffer:Array.isArray(Oe)?W=Oe[K]:W=Oe,R.copy(E.viewport),I.copy(E.scissor),O=E.scissorTest}else R.copy(ie).multiplyScalar(N).floor(),I.copy(F).multiplyScalar(N).floor(),O=z;if(K!==0&&(W=ml),fe.bindFramebuffer(L.FRAMEBUFFER,W)&&Q&&fe.drawBuffers(E,W),fe.viewport(R),fe.scissor(I),fe.setScissorTest(O),de){const Te=ue.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+V,Te.__webglTexture,K)}else if(ge){const Te=ue.get(E.texture),Be=V;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Te.__webglTexture,K,Be)}else if(E!==null&&K!==0){const Te=ue.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Te.__webglTexture,K)}x=-1},this.readRenderTargetPixels=function(E,V,K,Q,W,de,ge){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=ue.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(be=be[ge]),be){fe.bindFramebuffer(L.FRAMEBUFFER,be);try{const Te=E.texture,Be=Te.format,Oe=Te.type;if(!De.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=E.width-Q&&K>=0&&K<=E.height-W&&L.readPixels(V,K,Q,W,Ve.convert(Be),Ve.convert(Oe),de)}finally{const Te=A!==null?ue.get(A).__webglFramebuffer:null;fe.bindFramebuffer(L.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(E,V,K,Q,W,de,ge){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=ue.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(be=be[ge]),be)if(V>=0&&V<=E.width-Q&&K>=0&&K<=E.height-W){fe.bindFramebuffer(L.FRAMEBUFFER,be);const Te=E.texture,Be=Te.format,Oe=Te.type;if(!De.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ie=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ie),L.bufferData(L.PIXEL_PACK_BUFFER,de.byteLength,L.STREAM_READ),L.readPixels(V,K,Q,W,Ve.convert(Be),Ve.convert(Oe),0);const Ze=A!==null?ue.get(A).__webglFramebuffer:null;fe.bindFramebuffer(L.FRAMEBUFFER,Ze);const Je=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await yc(L,Je,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ie),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,de),L.deleteBuffer(Ie),L.deleteSync(Je),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,V=null,K=0){const Q=Math.pow(2,-K),W=Math.floor(E.image.width*Q),de=Math.floor(E.image.height*Q),ge=V!==null?V.x:0,be=V!==null?V.y:0;C.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,K,0,0,ge,be,W,de),fe.unbindTexture()};const gl=L.createFramebuffer(),_l=L.createFramebuffer();this.copyTextureToTexture=function(E,V,K=null,Q=null,W=0,de=null){de===null&&(W!==0?(Mr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=W,W=0):de=0);let ge,be,Te,Be,Oe,Ie,Ze,Je,ut;const ht=E.isCompressedTexture?E.mipmaps[de]:E.image;if(K!==null)ge=K.max.x-K.min.x,be=K.max.y-K.min.y,Te=K.isBox3?K.max.z-K.min.z:1,Be=K.min.x,Oe=K.min.y,Ie=K.isBox3?K.min.z:0;else{const zt=Math.pow(2,-W);ge=Math.floor(ht.width*zt),be=Math.floor(ht.height*zt),E.isDataArrayTexture?Te=ht.depth:E.isData3DTexture?Te=Math.floor(ht.depth*zt):Te=1,Be=0,Oe=0,Ie=0}Q!==null?(Ze=Q.x,Je=Q.y,ut=Q.z):(Ze=0,Je=0,ut=0);const Ke=Ve.convert(V.format),Ue=Ve.convert(V.type);let vt;V.isData3DTexture?(C.setTexture3D(V,0),vt=L.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(C.setTexture2DArray(V,0),vt=L.TEXTURE_2D_ARRAY):(C.setTexture2D(V,0),vt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,V.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,V.unpackAlignment);const et=L.getParameter(L.UNPACK_ROW_LENGTH),Vt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),jn=L.getParameter(L.UNPACK_SKIP_PIXELS),Lt=L.getParameter(L.UNPACK_SKIP_ROWS),Ei=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ht.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ht.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Be),L.pixelStorei(L.UNPACK_SKIP_ROWS,Oe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ie);const lt=E.isDataArrayTexture||E.isData3DTexture,Ot=V.isDataArrayTexture||V.isData3DTexture;if(E.isDepthTexture){const zt=ue.get(E),wt=ue.get(V),Pt=ue.get(zt.__renderTarget),Ir=ue.get(wt.__renderTarget);fe.bindFramebuffer(L.READ_FRAMEBUFFER,Pt.__webglFramebuffer),fe.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ir.__webglFramebuffer);for(let Fn=0;Fn<Te;Fn++)lt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ue.get(E).__webglTexture,W,Ie+Fn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ue.get(V).__webglTexture,de,ut+Fn)),L.blitFramebuffer(Be,Oe,ge,be,Ze,Je,ge,be,L.DEPTH_BUFFER_BIT,L.NEAREST);fe.bindFramebuffer(L.READ_FRAMEBUFFER,null),fe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||ue.has(E)){const zt=ue.get(E),wt=ue.get(V);fe.bindFramebuffer(L.READ_FRAMEBUFFER,gl),fe.bindFramebuffer(L.DRAW_FRAMEBUFFER,_l);for(let Pt=0;Pt<Te;Pt++)lt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,zt.__webglTexture,W,Ie+Pt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,zt.__webglTexture,W),Ot?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,wt.__webglTexture,de,ut+Pt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,wt.__webglTexture,de),W!==0?L.blitFramebuffer(Be,Oe,ge,be,Ze,Je,ge,be,L.COLOR_BUFFER_BIT,L.NEAREST):Ot?L.copyTexSubImage3D(vt,de,Ze,Je,ut+Pt,Be,Oe,ge,be):L.copyTexSubImage2D(vt,de,Ze,Je,Be,Oe,ge,be);fe.bindFramebuffer(L.READ_FRAMEBUFFER,null),fe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ot?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(vt,de,Ze,Je,ut,ge,be,Te,Ke,Ue,ht.data):V.isCompressedArrayTexture?L.compressedTexSubImage3D(vt,de,Ze,Je,ut,ge,be,Te,Ke,ht.data):L.texSubImage3D(vt,de,Ze,Je,ut,ge,be,Te,Ke,Ue,ht):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,de,Ze,Je,ge,be,Ke,Ue,ht.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,de,Ze,Je,ht.width,ht.height,Ke,ht.data):L.texSubImage2D(L.TEXTURE_2D,de,Ze,Je,ge,be,Ke,Ue,ht);L.pixelStorei(L.UNPACK_ROW_LENGTH,et),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Vt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,jn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Lt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ei),de===0&&V.generateMipmaps&&L.generateMipmap(vt),fe.unbindTexture()},this.copyTextureToTexture3D=function(E,V,K=null,Q=null,W=0){return Mr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,V,K,Q,W)},this.initRenderTarget=function(E){ue.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),fe.unbindTexture()},this.resetState=function(){T=0,w=0,A=null,fe.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}var tt=Object.freeze({Linear:Object.freeze({None:function(n){return n},In:function(n){return n},Out:function(n){return n},InOut:function(n){return n}}),Quadratic:Object.freeze({In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}}),Cubic:Object.freeze({In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}}),Quartic:Object.freeze({In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}}),Quintic:Object.freeze({In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}}),Sinusoidal:Object.freeze({In:function(n){return 1-Math.sin((1-n)*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return .5*(1-Math.sin(Math.PI*(.5-n)))}}),Exponential:Object.freeze({In:function(n){return n===0?0:Math.pow(1024,n-1)},Out:function(n){return n===1?1:1-Math.pow(2,-10*n)},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}}),Circular:Object.freeze({In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}}),Elastic:Object.freeze({In:function(n){return n===0?0:n===1?1:-Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI)},Out:function(n){return n===0?0:n===1?1:Math.pow(2,-10*n)*Math.sin((n-.1)*5*Math.PI)+1},InOut:function(n){return n===0?0:n===1?1:(n*=2,n<1?-.5*Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin((n-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(n){var e=1.70158;return n===1?1:n*n*((e+1)*n-e)},Out:function(n){var e=1.70158;return n===0?0:--n*n*((e+1)*n+e)+1},InOut:function(n){var e=2.5949095;return(n*=2)<1?.5*(n*n*((e+1)*n-e)):.5*((n-=2)*n*((e+1)*n+e)+2)}}),Bounce:Object.freeze({In:function(n){return 1-tt.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?tt.Bounce.In(n*2)*.5:tt.Bounce.Out(n*2-1)*.5+.5}}),generatePow:function(n){return n===void 0&&(n=4),n=n<Number.EPSILON?Number.EPSILON:n,n=n>1e4?1e4:n,{In:function(e){return Math.pow(e,n)},Out:function(e){return 1-Math.pow(1-e,n)},InOut:function(e){return e<.5?Math.pow(e*2,n)/2:(1-Math.pow(2-e*2,n))/2+.5}}}}),Di=function(){return performance.now()},qp=function(){function n(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._tweens={},this._tweensAddedDuringUpdate={},this.add.apply(this,e)}return n.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},n.prototype.removeAll=function(){this._tweens={}},n.prototype.add=function(){for(var e,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];for(var r=0,s=t;r<s.length;r++){var o=s[r];(e=o._group)===null||e===void 0||e.remove(o),o._group=this,this._tweens[o.getId()]=o,this._tweensAddedDuringUpdate[o.getId()]=o}},n.prototype.remove=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var i=0,r=e;i<r.length;i++){var s=r[i];s._group=void 0,delete this._tweens[s.getId()],delete this._tweensAddedDuringUpdate[s.getId()]}},n.prototype.allStopped=function(){return this.getAll().every(function(e){return!e.isPlaying()})},n.prototype.update=function(e,t){e===void 0&&(e=Di()),t===void 0&&(t=!0);var i=Object.keys(this._tweens);if(i.length!==0)for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<i.length;r++){var s=this._tweens[i[r]],o=!t;s&&s.update(e,o)===!1&&!t&&this.remove(s)}i=Object.keys(this._tweensAddedDuringUpdate)}},n}(),Js={Linear:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),s=Js.Utils.Linear;return e<0?s(n[0],n[1],i):e>1?s(n[t],n[t-1],t-i):s(n[r],n[r+1>t?t:r+1],i-r)},Utils:{Linear:function(n,e,t){return(e-n)*t+n}}},hl=function(){function n(){}return n.nextId=function(){return n._nextId++},n._nextId=0,n}(),eo=new qp,$e=function(){function n(e,t){this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=tt.Linear.None,this._interpolationFunction=Js.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=hl.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1,this._object=e,typeof t=="object"?(this._group=t,t.add(this)):t===!0&&(this._group=eo,eo.add(this))}return n.prototype.getId=function(){return this._id},n.prototype.isPlaying=function(){return this._isPlaying},n.prototype.isPaused=function(){return this._isPaused},n.prototype.getDuration=function(){return this._duration},n.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t<0?0:t,this},n.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e<0?0:e,this},n.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},n.prototype.start=function(e,t){if(e===void 0&&(e=Di()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var r={};for(var s in this._valuesEnd)r[s]=this._valuesEnd[s];this._valuesEnd=r}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},n.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},n.prototype._setupProperties=function(e,t,i,r,s){for(var o in i){var a=e[o],l=Array.isArray(a),c=l?"array":typeof a,f=!l&&Array.isArray(i[o]);if(!(c==="undefined"||c==="function")){if(f){var u=i[o];if(u.length===0)continue;for(var h=[a],p=0,g=u.length;p<g;p+=1){var y=this._handleRelativeValue(a,u[p]);if(isNaN(y)){f=!1,console.warn("Found invalid interpolation list. Skipping.");break}h.push(y)}f&&(i[o]=h)}if((c==="object"||l)&&a&&!f){t[o]=l?[]:{};var m=a;for(var d in m)t[o][d]=m[d];r[o]=l?[]:{};var u=i[o];if(!this._isDynamic){var b={};for(var d in u)b[d]=u[d];i[o]=u=b}this._setupProperties(m,t[o],u,r[o],s)}else(typeof t[o]>"u"||s)&&(t[o]=a),l||(t[o]*=1),f?r[o]=i[o].slice().reverse():r[o]=t[o]||0}}},n.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},n.prototype.end=function(){return this._goToEnd=!0,this.update(this._startTime+this._duration),this},n.prototype.pause=function(e){return e===void 0&&(e=Di()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this)},n.prototype.resume=function(e){return e===void 0&&(e=Di()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this)},n.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},n.prototype.group=function(e){return e?(e.add(this),this):(console.warn("tween.group() without args has been removed, use group.add(tween) instead."),this)},n.prototype.remove=function(){var e;return(e=this._group)===null||e===void 0||e.remove(this),this},n.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},n.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},n.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},n.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},n.prototype.easing=function(e){return e===void 0&&(e=tt.Linear.None),this._easingFunction=e,this},n.prototype.interpolation=function(e){return e===void 0&&(e=Js.Linear),this._interpolationFunction=e,this},n.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},n.prototype.onStart=function(e){return this._onStartCallback=e,this},n.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},n.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},n.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},n.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},n.prototype.onStop=function(e){return this._onStopCallback=e,this},n.prototype.update=function(e,t){var i=this,r;if(e===void 0&&(e=Di()),t===void 0&&(t=n.autoStartOnUpdate),this._isPaused)return!0;var s;if(!this._goToEnd&&!this._isPlaying)if(t)this.start(e,!0);else return!1;if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var o=e-this._startTime,a=this._duration+((r=this._repeatDelayTime)!==null&&r!==void 0?r:this._delayTime),l=this._duration+this._repeat*a,c=function(){if(i._duration===0||o>l)return 1;var y=Math.trunc(o/a),m=o-y*a,d=Math.min(m/i._duration,1);return d===0&&o===i._duration?1:d},f=c(),u=this._easingFunction(f);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,u),this._onUpdateCallback&&this._onUpdateCallback(this._object,f),this._duration===0||o>=this._duration)if(this._repeat>0){var h=Math.min(Math.trunc((o-this._duration)/a)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=h);for(s in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[s]=="string"&&(this._valuesStartRepeat[s]=this._valuesStartRepeat[s]+parseFloat(this._valuesEnd[s])),this._yoyo&&this._swapEndStartRepeatValues(s),this._valuesStart[s]=this._valuesStartRepeat[s];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=a*h,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var p=0,g=this._chainedTweens.length;p<g;p++)this._chainedTweens[p].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},n.prototype._updateProperties=function(e,t,i,r){for(var s in i)if(t[s]!==void 0){var o=t[s]||0,a=i[s],l=Array.isArray(e[s]),c=Array.isArray(a),f=!l&&c;f?e[s]=this._interpolationFunction(a,r):typeof a=="object"&&a?this._updateProperties(e[s],o,a,r):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(e[s]=o+(a-o)*r))}},n.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},n.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},n.autoStartOnUpdate=!1,n}();hl.nextId;var nn=eo;nn.getAll.bind(nn);nn.removeAll.bind(nn);nn.add.bind(nn);nn.remove.bind(nn);var on=nn.update.bind(nn);const Yp={1:{title:"1st Grade",topics:{counting:{title:"Counting",icon:"🔢",description:"Count objects and learn number sequences",games:[{id:"number-line",name:"Number Line",description:"Place numbers in the correct order on a number line",unlocked:!0},{id:"count-objects",name:"Count Objects",description:"Count the objects and select the correct number",unlocked:!0},{id:"dungeon-escape",name:"Number Adventure",description:"Count treasures to open castle doors on your adventure",unlocked:!0}]},addition:{title:"Addition",icon:"➕",description:"Basic addition with numbers 1-20",games:[{id:"dungeon-escape",name:"Dungeon Escape",description:"Solve addition problems to escape the dungeon",unlocked:!0},{id:"fruit-addition",name:"Fruit Addition",description:"Add fruits to practice basic addition",unlocked:!1}]},subtraction:{title:"Subtraction",icon:"➖",description:"Basic subtraction with numbers 1-20",games:[{id:"dungeon-escape",name:"Subtraction Castle",description:"Subtract objects to escape the castle",unlocked:!0},{id:"space-blast",name:"Space Blast",description:"Subtract objects to clear space debris",unlocked:!1}]},shapes:{title:"Shapes",icon:"◯",description:"Identify and classify basic 2D shapes",games:[{id:"shape-builder",name:"Shape Builder",description:"Build shapes and match the outlines",unlocked:!0},{id:"shape-hunt",name:"Shape Hunt",description:"Find shapes in the environment",unlocked:!1}]}}},2:{title:"2nd Grade",topics:{addition:{title:"Addition",icon:"➕",description:"Addition with numbers up to 100",games:[{id:"add-blocks",name:"Add Blocks",description:"Add two-digit numbers with blocks",unlocked:!0}]},subtraction:{title:"Subtraction",icon:"➖",description:"Subtraction with numbers up to 100",games:[{id:"submarine",name:"Submarine Math",description:"Subtract to find the depth of your submarine",unlocked:!0}]},money:{title:"Money",icon:"💰",description:"Counting money and making change",games:[{id:"coin-counter",name:"Coin Counter",description:"Count coins and make correct change",unlocked:!0}]},time:{title:"Time",icon:"🕒",description:"Telling time to the nearest 5 minutes",games:[{id:"clock-challenge",name:"Clock Challenge",description:"Set the clock to the correct time",unlocked:!0}]}}},3:{title:"3rd Grade",topics:{multiplication:{title:"Multiplication",icon:"✖️",description:"Multiplication facts and properties",games:[{id:"space-shooter",name:"Space Shooter",description:"Practice multiplication by shooting correct answers",unlocked:!0},{id:"times-tables",name:"Times Tables",description:"Practice multiplication facts",unlocked:!0}]},division:{title:"Division",icon:"➗",description:"Basic division concepts and facts",games:[{id:"pizza-division",name:"Pizza Division",description:"Divide pizzas equally among friends",unlocked:!0}]},fractions:{title:"Fractions",icon:"🔢",description:"Introduction to fractions and equivalent fractions",games:[{id:"fraction-bars",name:"Fraction Bars",description:"Match equivalent fractions",unlocked:!0}]},area:{title:"Area",icon:"📏",description:"Calculate area of rectangles and squares",games:[{id:"area-builder",name:"Area Builder",description:"Build rectangles with specific areas",unlocked:!0}]}}},4:{title:"4th Grade",topics:{multidigit:{title:"Multi-digit Math",icon:"🧮",description:"Multi-digit multiplication and division",games:[{id:"multiplication-grid",name:"Multiplication Grid",description:"Use the area model for multi-digit multiplication",unlocked:!0}]},factors:{title:"Factors & Multiples",icon:"🔄",description:"Prime and composite numbers, factors, and multiples",games:[{id:"factor-finder",name:"Factor Finder",description:"Find factors of numbers",unlocked:!0}]},fractions:{title:"Fraction Operations",icon:"➗",description:"Add and subtract fractions with like denominators",games:[{id:"fraction-add",name:"Fraction Addition",description:"Add fractions with like denominators",unlocked:!0}]},angles:{title:"Angles",icon:"📐",description:"Measure and classify angles",games:[{id:"angle-hunter",name:"Angle Hunter",description:"Find and measure angles",unlocked:!0}]}}},5:{title:"5th Grade",topics:{decimals:{title:"Decimals",icon:"💯",description:"Operations with decimals to hundredths",games:[{id:"decimal-dash",name:"Decimal Dash",description:"Order decimals on a number line",unlocked:!0}]},fractions:{title:"Fraction Operations",icon:"➗",description:"Add, subtract, multiply fractions",games:[{id:"fraction-multiply",name:"Fraction Multiplication",description:"Multiply fractions",unlocked:!0}]},volume:{title:"Volume",icon:"📦",description:"Measure volume of rectangular prisms",games:[{id:"volume-quest",name:"Volume Quest",description:"Calculate the volume of rectangular prisms",unlocked:!0}]},coordinates:{title:"Coordinate Plane",icon:"📍",description:"Plot points on the coordinate plane",games:[{id:"coordinate-quest",name:"Coordinate Quest",description:"Plot points on a coordinate plane",unlocked:!0}]}}},6:{title:"6th Grade",topics:{ratios:{title:"Ratios & Proportions",icon:"⚖️",description:"Understand ratio concepts and use ratio reasoning",games:[{id:"pattern-puzzle",name:"Pattern Puzzle",description:"Complete the pattern by finding the missing piece",unlocked:!0}]},expressions:{title:"Expressions & Equations",icon:"🔣",description:"Write, read, and evaluate expressions",games:[{id:"pattern-puzzle",name:"Pattern Puzzle",description:"Complete the pattern by finding the missing piece",unlocked:!0}]},statistics:{title:"Statistics",icon:"📊",description:"Statistical variability and distributions",games:[{id:"pattern-puzzle",name:"Pattern Puzzle",description:"Complete the pattern by finding the missing piece",unlocked:!0}]},geometry:{title:"Geometry",icon:"📐",description:"Area, surface area, and volume",games:[{id:"pattern-puzzle",name:"Pattern Puzzle",description:"Complete the pattern by finding the missing piece",unlocked:!0}]}}},7:{title:"7th Grade",topics:{proportional:{title:"Proportional Relationships",icon:"📈",description:"Analyze and represent proportional relationships",games:[{id:"pattern-puzzle",name:"Pattern Puzzle",description:"Complete the pattern by finding the missing piece",unlocked:!0}]},rational:{title:"Rational Numbers",icon:"🔢",description:"Operations with rational numbers",games:[{id:"pattern-puzzle",name:"Pattern Puzzle",description:"Complete the pattern by finding the missing piece",unlocked:!0}]},probability:{title:"Probability",icon:"🎲",description:"Develop understanding of probability",games:[{id:"pattern-puzzle",name:"Pattern Puzzle",description:"Complete the pattern by finding the missing piece",unlocked:!0}]},scale:{title:"Scale Drawing",icon:"✏️",description:"Draw geometric figures and describe relationships",games:[{id:"pattern-puzzle",name:"Pattern Puzzle",description:"Complete the pattern by finding the missing piece",unlocked:!0}]}}},8:{title:"8th Grade",topics:{linear:{title:"Linear Equations",icon:"📈",description:"Analyze and solve linear equations",games:[{id:"pattern-puzzle",name:"Pattern Puzzle",description:"Complete the pattern by finding the missing piece",unlocked:!0}]},functions:{title:"Functions",icon:"🔄",description:"Define, evaluate, and compare functions",games:[{id:"pattern-puzzle",name:"Pattern Puzzle",description:"Complete the pattern by finding the missing piece",unlocked:!0}]},geometry:{title:"Geometry",icon:"📐",description:"Understand congruence and similarity",games:[{id:"pattern-puzzle",name:"Pattern Puzzle",description:"Complete the pattern by finding the missing piece",unlocked:!0}]},pythagorean:{title:"Pythagorean Theorem",icon:"📏",description:"Apply the Pythagorean Theorem",games:[{id:"pattern-puzzle",name:"Pattern Puzzle",description:"Complete the pattern by finding the missing piece",unlocked:!0}]}}}},$p={"dungeon-escape":{title:"Dungeon Escape",description:"Solve equations to open doors and escape the dungeon!"},"shape-builder":{title:"Shape Builder",description:"Build shapes and match the outlines to learn geometry!"},"volume-quest":{title:"Volume Quest",description:"Calculate the volume of 3D objects to progress!"},"pattern-puzzle":{title:"Pattern Puzzle",description:"Complete the pattern by finding the missing piece!"},"space-shooter":{title:"Space Shooter",description:"Practice multiplication by shooting correct answers!"},"times-tables":{title:"Times Tables",description:"Learn multiplication facts with an interactive times table!"},"decimal-dash":{title:"Decimal Dash",description:"Order decimals from smallest to largest on a number line!"},"number-line":{title:"Number Line",description:"Learn to count and order numbers by placing them on a number line!"},"count-objects":{title:"Count Objects",description:"Count colorful 3D objects and improve your counting skills!"},"number-adventure":{title:"Number Adventure",description:"Embark on a magical journey, counting treasures to open castle doors!"},"add-blocks":{title:"Add Blocks",description:"Add two-digit numbers with blocks to improve your addition skills!"},submarine:{title:"Submarine Math",description:"Subtract to find the correct depth for your submarine adventure!"},"coin-counter":{title:"Coin Counter",description:"Count coins and make correct change in this money-based game!"},"clock-challenge":{title:"Clock Challenge",description:"Set the clock to the correct time to master telling time!"},"pizza-division":{title:"Pizza Division",description:"Divide pizzas equally among friends to learn division concepts!"},"fraction-bars":{title:"Fraction Bars",description:"Match equivalent fractions using visual fraction bars!"},"area-builder":{title:"Area Builder",description:"Build rectangles with specific areas to master area calculations!"},"multiplication-grid":{title:"Multiplication Grid",description:"Use the area model for multi-digit multiplication problems!"},"factor-finder":{title:"Factor Finder",description:"Find all the factors of different numbers in this mathematical adventure!"},"fraction-add":{title:"Fraction Addition",description:"Add fractions with like denominators to strengthen your fraction skills!"},"angle-hunter":{title:"Angle Hunter",description:"Find and measure angles in this geometry-based game!"},"fraction-multiply":{title:"Fraction Multiplication",description:"Multiply fractions to solve problems and advance in the game!"},"coordinate-quest":{title:"Coordinate Quest",description:"Plot points on a coordinate plane to complete the quest!"}},wr={grades:Yp,gameInfo:$p};function Pa(n,e,t,i,r){if(console.log("Setting up Dungeon Escape game with canvas:",n?"found":"not found","Dimensions:",n.clientWidth,"x",n.clientHeight),!n){console.error("Game canvas element not found!");return}for((!n.clientWidth||!n.clientHeight)&&(console.log("Canvas dimensions not set, forcing explicit dimensions"),n.style.width="100%",n.style.height="500px",n.style.minHeight="500px",n.style.backgroundColor="#f0f0f0",n.style.border="1px solid #ccc");n.firstChild;)n.removeChild(n.firstChild);const s=new Qt;s.background=new Re(3355443);const o=800,a=600,l=new ct(75,n.clientWidth&&n.clientHeight?n.clientWidth/n.clientHeight:o/a,.1,1e3);l.position.z=5;const c=new Jt({antialias:!0});c.setSize(n.clientWidth||o,n.clientHeight||a),console.log("Renderer created with size:",c.domElement.width,c.domElement.height),n.appendChild(c.domElement);const f=new it(2,3,.2),u=new Fe({color:9127187}),h=new Ee(f,u);s.add(h);const p=new it(10,5,.2),g=new Fe({color:6908265}),y=new Ee(p,g);y.position.z=-1,s.add(y);const m=new Pn(10,5),d=new Fe({color:6908265,side:Dt}),b=new Ee(m,d);b.rotation.x=Math.PI/2,b.position.y=-2.5,s.add(b);const S=new sn(16777215,.5);s.add(S);const v=new rn(16777215,.8);v.position.set(1,1,1),s.add(v);let P=1,T=0,w="",A=0,x=!1;function _(){const G=Math.floor(Math.random()*(5*P))+1,Z=Math.floor(Math.random()*(5*P))+1;Math.random()>.5?(w=`${G} + ${Z} = ?`,A=G+Z):G>=Z?(w=`${G} - ${Z} = ?`,A=G-Z):(w=`${Z} - ${G} = ?`,A=Z-G),console.log("Generated question:",w,"Answer:",A),e.textContent=w}function R(){const G=parseInt(t.value);isNaN(G)||(console.log("Checking answer:",G,"Correct answer:",A),G===A?(T+=10*P,r.textContent=T,x=!0,new $e(h.position).to({y:4},1e3).easing(tt.Cubic.Out).start(),setTimeout(()=>{P++,x=!1,new $e(h.position).to({y:0},500).easing(tt.Cubic.In).start(),setTimeout(_,600)},2e3)):(new $e(h.position).to({x:.2},50).yoyo(!0).repeat(5).start(),setTimeout(()=>{h.position.x=0},300)),t.value="")}console.log("Setting up event listeners"),i.addEventListener("click",R),t.addEventListener("keypress",G=>{G.key==="Enter"&&R()});function I(){requestAnimationFrame(I),x||(h.rotation.y=Math.sin(Date.now()*.001)*.05),on(),c.render(s,l)}function O(){n.clientWidth>0&&n.clientHeight>0&&(console.log("Resizing:",n.clientWidth,n.clientHeight),l.aspect=n.clientWidth/n.clientHeight,l.updateProjectionMatrix(),c.setSize(n.clientWidth,n.clientHeight))}return window.addEventListener("resize",O),setTimeout(O,100),_(),I(),console.log("Dungeon Escape game setup complete"),{scene:s,camera:l,renderer:c}}function jp(n,e,t,i,r){for(console.log("Setting up Shape Builder game..."),console.log("Game canvas dimensions:",n.clientWidth,n.clientHeight);n.firstChild;)n.removeChild(n.firstChild);const s=new Qt;s.background=new Re(2899536);const o=new ct(75,n.clientWidth&&n.clientHeight?n.clientWidth/n.clientHeight:2,.1,1e3);o.position.z=10;const a=new Jt({antialias:!0});a.setSize(n.clientWidth||800,n.clientHeight||600),n.appendChild(a.domElement),console.log("Renderer created with size:",a.domElement.width,a.domElement.height);const l=new sn(16777215,.5);s.add(l);const c=new rn(16777215,.8);c.position.set(1,1,1),s.add(c);let f=0,u=1,h=null,p=null,g=[],y=0,m=0;const d=[{name:"cube",geometry:new it(1,1,1)},{name:"sphere",geometry:new Ct(.5,32,32)},{name:"cylinder",geometry:new $t(.5,.5,1,32)},{name:"cone",geometry:new xn(.5,1,32)},{name:"torus",geometry:new Pr(.5,.2,16,32)}],b=[new Fe({color:3447003,shininess:100}),new Fe({color:3066993,shininess:100}),new Fe({color:15158332,shininess:100}),new Fe({color:15844367,shininess:100}),new Fe({color:10181046,shininess:100})];function S(){h&&s.remove(h),m=Math.min(3+u,8),h=new Et,h.position.x=-4;for(let A=0;A<m;A++){const x=Math.floor(Math.random()*d.length),_=Math.floor(Math.random()*b.length),R=new Ft({color:16777215,wireframe:!0,transparent:!0,opacity:.7}),I=new Ee(d[x].geometry,R);I.position.x=(Math.random()-.5)*2,I.position.y=(Math.random()-.5)*2,I.position.z=(Math.random()-.5)*1,I.userData.shapeType=d[x].name,I.userData.materialIndex=_,h.add(I)}s.add(h),p&&s.remove(p),p=new Et,p.position.x=4,s.add(p),g=[],y=0,e.textContent=`Build a shape that matches the outline (${m} pieces needed)`,t.value="",r.textContent=f}function v(){const A=t.value.trim().toLowerCase(),x=d.map(O=>O.name);if(!x.includes(A)){alert(`Invalid shape! Try one of: ${x.join(", ")}`);return}if(g.length>=m){alert("You've added all the pieces needed! Check your answer.");return}const _=d.find(O=>O.name===A);if(!_)return;const R=Math.floor(Math.random()*b.length),I=new Ee(_.geometry,b[R]);I.position.x=(Math.random()-.5)*2,I.position.y=(Math.random()-.5)*2,I.position.z=(Math.random()-.5)*1,I.userData.shapeType=_.name,p.add(I),g.push(I),t.value="",e.textContent=`Build a shape that matches the outline (${m-g.length} more pieces needed)`,g.length===m&&P()}function P(){if(g.length!==m){alert(`You need to add ${m-g.length} more pieces!`);return}y=0;const A=[];h.children.forEach(I=>{A.push(I.userData.shapeType)}),g.forEach(I=>{if(A.includes(I.userData.shapeType)){y++;const O=A.indexOf(I.userData.shapeType);O>-1&&A.splice(O,1)}});const x=Math.round(y/m*100),_=10*u,R=Math.round(_*x/100);f+=R,e.textContent=`You matched ${x}% of the shapes! +${R} points`,r.textContent=f,new $e(p.rotation).to({y:Math.PI*2},1e3).easing(tt.Quadratic.Out).start(),setTimeout(()=>{x>=70&&u++,S()},2e3)}i.addEventListener("click",v),t.addEventListener("keypress",A=>{A.key==="Enter"&&v()});function T(){requestAnimationFrame(T),h&&(h.rotation.y+=.005),on(),a.render(s,o)}function w(){n.clientWidth>0&&n.clientHeight>0&&(console.log("Resizing:",n.clientWidth,n.clientHeight),o.aspect=n.clientWidth/n.clientHeight,o.updateProjectionMatrix(),a.setSize(n.clientWidth,n.clientHeight))}return window.addEventListener("resize",w),setTimeout(w,100),S(),T(),{scene:s,camera:o,renderer:a}}function Zp(n,e,t,i,r){for(console.log("Setting up Volume Quest game..."),console.log("Game canvas dimensions:",n.clientWidth,n.clientHeight);n.firstChild;)n.removeChild(n.firstChild);const s=new Qt;s.background=new Re(1713721);const o=new ct(75,n.clientWidth&&n.clientHeight?n.clientWidth/n.clientHeight:2,.1,1e3);o.position.z=7,o.position.y=2;const a=new Jt({antialias:!0});a.setSize(n.clientWidth||800,n.clientHeight||600),n.appendChild(a.domElement),console.log("Renderer created with size:",a.domElement.width,a.domElement.height);const l=new sn(16777215,.5);s.add(l);const c=new rn(16777215,.8);c.position.set(1,1,1),s.add(c);let f=0,u=1,h=null,p=0;function g(){h&&s.remove(h);let b,S;const v=new Fe({color:3447003,transparent:!0,opacity:.9,shininess:100}),P=new Ft({color:16777215,wireframe:!0,transparent:!0});if(u<=2){const A=Math.ceil(Math.random()*3)+1,x=Math.ceil(Math.random()*3)+1,_=Math.ceil(Math.random()*3)+1;b=new it(A,x,_),S=A*x*_,e.textContent=`Calculate the volume of this rectangular prism (width=${A}, height=${x}, depth=${_})`}else if(u<=4){const A=Math.ceil(Math.random()*2)+1,x=Math.ceil(Math.random()*4)+1;b=new $t(A,A,x,32),S=Math.PI*A*A*x,e.textContent=`Calculate the volume of this cylinder (radius=${A}, height=${x}). Use 3.14 for π.`}else{const A=Math.ceil(Math.random()*2)+1;b=new Ct(A,32,32),S=4/3*Math.PI*A*A*A,e.textContent=`Calculate the volume of this sphere (radius=${A}). Use 3.14 for π.`}h=new Et;const T=new Ee(b,v);h.add(T);const w=new Ee(b,P);h.add(w),p=Math.round(S*100)/100,s.add(h),r.textContent=f,t.value=""}function y(){const b=parseFloat(t.value);if(isNaN(b)){alert("Please enter a valid number!");return}const v=Math.abs(b-p)/p*100;if(v<=5){const P=Math.max(10,25-Math.floor(v));f+=P*u,e.textContent=`Correct! The volume is ${p}. You earned ${P*u} points!`,r.textContent=f,new $e(h.scale).to({x:1.5,y:1.5,z:1.5},300).easing(tt.Quadratic.Out).yoyo(!0).repeat(1).start(),setTimeout(()=>{u++,g()},2e3)}else e.textContent=`Try again! Your answer is off by ${Math.round(v)}%.`,new $e(h.position).to({x:.3},50).easing(tt.Quadratic.Out).yoyo(!0).repeat(5).start();t.value=""}i.addEventListener("click",y),t.addEventListener("keypress",b=>{b.key==="Enter"&&y()});function m(){requestAnimationFrame(m),h&&(h.rotation.y+=.005,h.rotation.x+=.002),on(),a.render(s,o)}function d(){n.clientWidth>0&&n.clientHeight>0&&(console.log("Resizing:",n.clientWidth,n.clientHeight),o.aspect=n.clientWidth/n.clientHeight,o.updateProjectionMatrix(),a.setSize(n.clientWidth,n.clientHeight))}return window.addEventListener("resize",d),setTimeout(d,100),g(),m(),{scene:s,camera:o,renderer:a}}function Kp(n,e,t,i,r){for(console.log("Setting up Pattern Puzzle game..."),console.log("Game canvas dimensions:",n.clientWidth,n.clientHeight);n.firstChild;)n.removeChild(n.firstChild);const s=new Qt;s.background=new Re(7101307);const o=new ct(75,n.clientWidth&&n.clientHeight?n.clientWidth/n.clientHeight:2,.1,1e3);o.position.z=12;const a=new Jt({antialias:!0});a.setSize(n.clientWidth||800,n.clientHeight||600),n.appendChild(a.domElement),console.log("Renderer created with size:",a.domElement.width,a.domElement.height);const l=new sn(16777215,.5);s.add(l);const c=new rn(16777215,.8);c.position.set(1,1,1),s.add(c);let f=0,u=1,h=[],p=null;const g=[{name:"alternate-colors",generator:P=>{const w=[16711680,65280,255,16776960,16711935,65535].slice(0,2+Math.min(P,3)),A=[];for(let _=0;_<3+P;_++)A.push(w[_%w.length]);const x=w[A.length%w.length];return{pattern:A,answer:x}}},{name:"rotate-shapes",generator:P=>{const T=Math.PI/4,w=[];let A=0;for(let _=0;_<3+P;_++)w.push(A),A=(A+T)%(Math.PI*2);return{pattern:w,answer:A}}},{name:"size-sequence",generator:P=>{const T=[];let w;if(P===1){for(let A=0;A<4;A++)T.push(A%2===0?1:1.5);w=T[T.length-1]===1?1.5:1}else if(P===2){for(let A=0;A<4;A++)T.push(1+A*.25);w=1+T.length*.25}else{T.push(.75),T.push(1);for(let A=2;A<4;A++){const x=Math.min(T[A-1]+T[A-2],2.5);T.push(x)}w=T[T.length-1]+T[T.length-2],w=Math.min(w,3)}return{pattern:T,answer:w}}}];function y(){h.forEach(I=>s.remove(I)),h=[];const P=Math.min(u-1,g.length-1),T=g[P],{pattern:w,answer:A}=T.generator(u);p=A;const x=2.5,_=-(w.length*x)/2;for(let I=0;I<w.length;I++){let O;const G=w[I];if(T.name==="alternate-colors"){O=new it(1.5,1.5,1.5);const Z=new Fe({color:G,shininess:100}),U=new Ee(O,Z);U.position.x=_+I*x,h.push(U),s.add(U)}else if(T.name==="rotate-shapes"){const Z=m(3447003);Z.rotation.z=G,Z.position.x=_+I*x,h.push(Z),s.add(Z)}else if(T.name==="size-sequence"){O=new Ct(G,32,32);const Z=new Fe({color:15158332,shininess:100}),U=new Ee(O,Z);U.position.x=_+I*x,h.push(U),s.add(U)}}const R=d();R.position.x=_+w.length*x,R.position.y=0,h.push(R),s.add(R),T.name==="alternate-colors"?e.textContent="What color comes next in the pattern? (red, green, blue, yellow, purple, cyan)":T.name==="rotate-shapes"?e.textContent="What direction does the next arrow point? (degrees clockwise from up: 0, 45, 90, 135, 180, 225, 270, 315)":T.name==="size-sequence"&&(e.textContent="What size comes next in the pattern? (Enter a number)"),r.textContent=f,t.value=""}function m(P){const T=new Et,w=new it(.5,2,.5),A=new Fe({color:P,shininess:100}),x=new Ee(w,A);x.position.y=-.5,T.add(x);const _=new xn(.75,1.5,32),R=new Fe({color:P,shininess:100}),I=new Ee(_,R);return I.position.y=1,T.add(I),T}function d(){const P=new Et,T=new Pr(.8,.3,16,32,Math.PI*1.5),w=new Fe({color:16777215,shininess:100}),A=new Ee(T,w);A.rotation.z=Math.PI,A.position.y=.5,P.add(A);const x=new Ct(.3,16,16),_=new Fe({color:16777215,shininess:100}),R=new Ee(x,_);return R.position.y=-.8,P.add(R),P}function b(){const P=t.value.trim().toLowerCase();let T=!1;const w=Math.min(u-1,g.length-1),A=g[w];if(A.name==="alternate-colors")({red:16711680,green:65280,blue:255,yellow:16776960,purple:16711935,cyan:65535})[P]===p&&(T=!0);else if(A.name==="rotate-shapes"){const _={0:0,45:Math.PI/4,90:Math.PI/2,135:3*Math.PI/4,180:Math.PI,225:5*Math.PI/4,270:3*Math.PI/2,315:7*Math.PI/4}[P];_!==void 0&&(Math.abs(_-p)<.1||Math.abs(_-p-Math.PI*2)<.1)&&(T=!0)}else if(A.name==="size-sequence"){const x=parseFloat(P);!isNaN(x)&&Math.abs(x-p)<.2&&(T=!0)}if(T){f+=10*u,e.textContent="Correct! You found the pattern.",r.textContent=f;const x=h.pop();if(s.remove(x),A.name==="alternate-colors"){const _=new it(1.5,1.5,1.5),R=new Fe({color:p,shininess:100}),I=new Ee(_,R);I.position.copy(x.position),h.push(I),s.add(I)}else if(A.name==="rotate-shapes"){const _=m(3447003);_.rotation.z=p,_.position.copy(x.position),h.push(_),s.add(_)}else if(A.name==="size-sequence"){const _=new Ct(p,32,32),R=new Fe({color:15158332,shininess:100}),I=new Ee(_,R);I.position.copy(x.position),h.push(I),s.add(I)}h.forEach(_=>{new $e(_.position).to({y:_.position.y+1},300).easing(tt.Quadratic.Out).yoyo(!0).repeat(1).start()}),setTimeout(()=>{u++,y()},2e3)}else{e.textContent="That's not correct. Try again!";const x=h[h.length-1];new $e(x.position).to({x:x.position.x+.3},50).yoyo(!0).repeat(5).start()}t.value=""}i.addEventListener("click",b),t.addEventListener("keypress",P=>{P.key==="Enter"&&b()});function S(){requestAnimationFrame(S),h.forEach((P,T)=>{P.position.y=Math.sin(Date.now()*.001+T*.5)*.2,T===h.length-1&&(P.position.y=Math.sin(Date.now()*.002+T*.5)*.4)}),on(),a.render(s,o)}function v(){n.clientWidth>0&&n.clientHeight>0&&(console.log("Resizing:",n.clientWidth,n.clientHeight),o.aspect=n.clientWidth/n.clientHeight,o.updateProjectionMatrix(),a.setSize(n.clientWidth,n.clientHeight))}return window.addEventListener("resize",v),setTimeout(v,100),y(),S(),{scene:s,camera:o,renderer:a}}function Qp(n,e,t,i,r){let s=0,o=null,a="",l=!0,c=1,f=3,u=0;const h=new Qt;h.background=new Re(32);const p=new ct(75,n.clientWidth/n.clientHeight,.1,1e3);p.position.z=15;const g=new Jt({antialias:!0});g.setSize(n.clientWidth,n.clientHeight),n.appendChild(g.domElement);const y=new sn(3355443);h.add(y);const m=new rn(16777215,1);m.position.set(5,3,5),h.add(m);const d=new xn(1,2,3),b=new Fe({color:65280}),S=new Ee(d,b);S.rotation.x=Math.PI,S.position.y=-10,h.add(S);const v=[],P=new Ct(.1,8,8),T=new Ft({color:16777215});for(let z=0;z<200;z++){const D=new Ee(P,T);D.position.x=Math.random()*80-40,D.position.y=Math.random()*80-40,D.position.z=Math.random()*30-60,h.add(D),v.push(D)}const w=[],A=[],x=new Ct(.3,8,8),_=new Ft({color:65535});function R(){const z=Math.min(10+c,12),D=Math.floor(Math.random()*z)+1,q=Math.floor(Math.random()*z)+1,J=D*q;a=`${D} × ${q} = ?`;const ne=[];for(;ne.length<3;){const j=Math.floor(Math.random()*6)-3,ee=J+j;ee>0&&ee!==J&&!ne.includes(ee)&&ne.push(ee)}const X=[...ne,J];for(let j=X.length-1;j>0;j--){const ee=Math.floor(Math.random()*(j+1));[X[j],X[ee]]=[X[ee],X[j]]}o={equation:a,correctAnswer:J,options:X},e.textContent=a,I(X)}function I(z){w.forEach(D=>h.remove(D.mesh)),w.length=0,z.forEach((D,q)=>{const ne=new mo(1.2,0),X=new Fe({color:11184810,emissive:3355443,flatShading:!0}),j=new Ee(ne,X),ee=5;j.position.x=(q-1.5)*ee,j.position.y=10,j.position.z=0,new Ft({color:16777215,side:Dt}),h.add(j),w.push({mesh:j,answer:D,isCorrect:D===o.correctAnswer,speed:.05+c*.01});const re=document.createElement("div");re.className="meteor-text",re.style.position="absolute",re.style.color="white",re.style.fontSize="18px",re.style.fontWeight="bold",re.style.textShadow="1px 1px 2px black",re.style.userSelect="none",re.textContent=D.toString(),n.appendChild(re),w[w.length-1].textElement=re})}function O(){if(!l)return;const z=new Ee(x,_);z.position.copy(S.position),h.add(z),A.push({mesh:z,speed:.4,active:!0})}function G(){for(let z=0;z<A.length;z++){const D=A[z];if(D.active)for(let q=0;q<w.length;q++){const J=w[q];if(D.mesh.position.distanceTo(J.mesh.position)<1.5)if(D.active=!1,h.remove(D.mesh),J.isCorrect){if(s+=10*c,u++,J.mesh.material.color.set(65280),Z(J.mesh.position.clone()),setTimeout(()=>{h.remove(J.mesh),J.textElement&&J.textElement.remove()},200),u>=5){c++,u=0;const X=document.createElement("div");X.style.position="absolute",X.style.color="yellow",X.style.fontSize="24px",X.style.fontWeight="bold",X.style.textAlign="center",X.style.width="100%",X.style.top="50%",X.style.zIndex="100",X.textContent=`LEVEL UP! Level ${c}`,n.appendChild(X),setTimeout(()=>{X.remove()},2e3)}setTimeout(R,1500);break}else J.mesh.material.color.set(16711680),f--,f<=0&&Y(),setTimeout(()=>{J.mesh.material.color.set(11184810)},200)}}}function Z(z){const q=[];for(let ne=0;ne<20;ne++){const X=new Ee(new Ct(.2,8,8),new Ft({color:16776960}));X.position.copy(z),X.velocity=new k((Math.random()-.5)*.2,(Math.random()-.5)*.2,(Math.random()-.5)*.2),h.add(X),q.push(X),setTimeout(()=>{h.remove(X)},800)}const J=()=>{q.forEach(ne=>{ne.position.add(ne.velocity),ne.scale.multiplyScalar(.95)})};U.push(J),setTimeout(()=>{const ne=U.indexOf(J);ne!==-1&&U.splice(ne,1)},800)}const U=[];function Y(){l=!1;const z=document.createElement("div");z.style.position="absolute",z.style.color="red",z.style.fontSize="36px",z.style.fontWeight="bold",z.style.textAlign="center",z.style.width="100%",z.style.top="40%",z.style.zIndex="100",z.textContent="GAME OVER",n.appendChild(z);const D=document.createElement("div");D.style.position="absolute",D.style.color="white",D.style.fontSize="24px",D.style.textAlign="center",D.style.width="100%",D.style.top="50%",D.style.zIndex="100",D.textContent=`Final Score: ${s}`,n.appendChild(D);const q=document.createElement("button");q.style.position="absolute",q.style.top="60%",q.style.left="50%",q.style.transform="translateX(-50%)",q.style.padding="10px 20px",q.style.zIndex="100",q.textContent="Play Again",q.onclick=()=>{z.remove(),D.remove(),q.remove(),s=0,c=1,f=3,u=0,l=!0,w.forEach(J=>{h.remove(J.mesh),J.textElement&&J.textElement.remove()}),w.length=0,R(),N()},n.appendChild(q)}function N(){r.textContent=`Score: ${s} | Level: ${c} | Lives: ${f}`}let le=0;function H(z){const D=g.domElement.getBoundingClientRect();le=((z.clientX-D.left)/D.width*2-1)*10}n.addEventListener("mousemove",H),n.addEventListener("click",O);function ie(){p.aspect=n.clientWidth/n.clientHeight,p.updateProjectionMatrix(),g.setSize(n.clientWidth,n.clientHeight)}window.addEventListener("resize",ie);function F(){if(!l){requestAnimationFrame(F),g.render(h,p);return}requestAnimationFrame(F),v.forEach(z=>{z.position.y-=.05,z.position.y<-40&&(z.position.y=40,z.position.x=Math.random()*80-40,z.position.z=Math.random()*30-60)}),S.position.x+=(le-S.position.x)*.1,A.forEach(z=>{z.active&&(z.mesh.position.y+=z.speed,z.mesh.position.y>20&&(h.remove(z.mesh),z.active=!1))}),w.forEach(z=>{if(z.mesh.position.y-=z.speed,z.mesh.rotation.x+=.01,z.mesh.rotation.y+=.01,z.textElement){const D=z.mesh.position.clone();D.project(p);const q=(D.x*.5+.5)*n.clientWidth,J=-(D.y*.5-.5)*n.clientHeight;z.textElement.style.transform="translate(-50%, -50%)",z.textElement.style.left=`${q}px`,z.textElement.style.top=`${J}px`}z.mesh.position.y<-12&&(z.isCorrect&&(f--,f<=0&&Y()),h.remove(z.mesh),z.textElement&&z.textElement.remove(),w.filter(q=>q.mesh.parent===h).length===0&&R())}),U.forEach(z=>z()),G(),N(),g.render(h,p),on()}return R(),N(),F(),function(){l=!1,window.removeEventListener("resize",ie),n.removeEventListener("mousemove",H),n.removeEventListener("click",O),h.clear(),n.innerHTML="",w.forEach(D=>{D.textElement&&D.textElement.remove()}),g.dispose()}}function Jp(n,e,t,i,r){let s=0,o=null,a=!0,l=1,c=3,f=0,u=0;const h=new Qt;h.background=new Re(4915330);const p=new ct(75,n.clientWidth/n.clientHeight,.1,1e3);p.position.z=5;const g=new Jt({antialias:!0});g.setSize(n.clientWidth,n.clientHeight),n.appendChild(g.domElement);const y=new sn(16777215,.7);h.add(y);const m=new rn(16777215,1);m.position.set(5,3,5),h.add(m);const d=new Et;h.add(d);const b=[],S={x:-1,y:-1};function v(){for(;d.children.length>0;)d.remove(d.children[0]);b.length=0;const U=Math.min(l+5,12);for(let N=1;N<=U;N++)for(let le=1;le<=U;le++){const H=le*N,ie=new it(.4,.4,.1),F=new Fe({color:16777215,specular:1118481,shininess:30}),z=new Ee(ie,F);z.position.x=(le-U/2-.5)*.5,z.position.y=(U/2-N+.5)*.5,z.userData={x:le,y:N,product:H},d.add(z),b.push(z)}const Y=4.5/U;d.scale.set(Y,Y,Y)}const P=new Et;P.position.y=-2,h.add(P);function T(U){for(;P.children.length>0;)P.remove(P.children[0]);const Y=U.toString();for(let N=0;N<Y.length;N++){new(void 0)(Y[N],{font:new(void 0)({}),size:.3,height:.05});const le=new it(.3,.4,.1),H=new Fe({color:16763904,emissive:1118481}),ie=new Ee(le,H);ie.position.x=(N-Y.length/2+.5)*.4,P.add(ie);const F=document.createElement("div");F.className="digit-text",F.style.position="absolute",F.style.color="white",F.style.fontSize="24px",F.style.fontWeight="bold",F.style.textAlign="center",F.style.width="30px",F.style.userSelect="none",F.textContent=Y[N],n.appendChild(F),ie.userData={textElement:F}}}function w(){if(!a)return;const U=Math.min(l+5,12),Y=Math.floor(Math.random()*U)+1,N=Math.floor(Math.random()*U)+1,le=Y*N;o={num1:Y,num2:N,answer:le},e.textContent=`${Y} × ${N} = ?`,t.value="",t.focus(),S.x=Y,S.y=N}function A(){if(!a||!o)return;const U=parseInt(t.value);if(isNaN(U)){t.classList.add("error"),setTimeout(()=>{t.classList.remove("error")},300);return}U===o.answer?(s+=10*l,u++,f++,n.style.backgroundColor="#4CAF50",setTimeout(()=>{n.style.backgroundColor=""},200),x(`+${10*l}`,"green"),T(o.answer),u>=5&&_(),setTimeout(w,1200)):(c--,u=0,n.style.backgroundColor="#f44336",setTimeout(()=>{n.style.backgroundColor=""},200),x(`Answer: ${o.answer}`,"red"),T(o.answer),c<=0?R():setTimeout(w,2e3)),O()}function x(U,Y){const N=document.createElement("div");N.className="floating-text",N.style.position="absolute",N.style.color=Y,N.style.fontSize="24px",N.style.fontWeight="bold",N.style.textAlign="center",N.style.width="100%",N.style.top="50%",N.style.zIndex="100",N.style.opacity="1",N.style.transition="all 1s ease-out",N.textContent=U,n.appendChild(N),setTimeout(()=>{N.style.transform="translateY(-50px)",N.style.opacity="0"},10),setTimeout(()=>{N.remove()},1e3)}function _(){l++,u=0;const U=document.createElement("div");U.style.position="absolute",U.style.color="yellow",U.style.fontSize="32px",U.style.fontWeight="bold",U.style.textAlign="center",U.style.width="100%",U.style.top="40%",U.style.zIndex="100",U.style.textShadow="2px 2px 4px rgba(0,0,0,0.5)",U.textContent=`LEVEL UP! Level ${l}`,n.appendChild(U),setTimeout(()=>{U.remove()},2e3),v()}function R(){a=!1;const U=document.createElement("div");U.style.position="absolute",U.style.color="red",U.style.fontSize="36px",U.style.fontWeight="bold",U.style.textAlign="center",U.style.width="100%",U.style.top="35%",U.style.zIndex="100",U.textContent="GAME OVER",n.appendChild(U);const Y=document.createElement("div");Y.style.position="absolute",Y.style.color="white",Y.style.fontSize="20px",Y.style.textAlign="center",Y.style.width="100%",Y.style.top="45%",Y.style.zIndex="100",Y.innerHTML=`Final Score: ${s}<br>Level: ${l}<br>Questions Answered: ${f}`,n.appendChild(Y);const N=document.createElement("button");N.style.position="absolute",N.style.top="60%",N.style.left="50%",N.style.transform="translateX(-50%)",N.style.padding="10px 20px",N.style.fontSize="18px",N.style.cursor="pointer",N.style.backgroundColor="#4CAF50",N.style.color="white",N.style.border="none",N.style.borderRadius="5px",N.style.zIndex="100",N.textContent="Play Again",N.onclick=I,n.appendChild(N)}function I(){n.querySelectorAll(".floating-text, .digit-text").forEach(U=>U.remove()),n.querySelectorAll("div").forEach(U=>{U!==n&&U.remove()}),s=0,l=1,c=3,f=0,u=0,a=!0,v(),w(),O()}function O(){r.textContent=`Score: ${s} | Level: ${l} | Lives: ${c}`}i.addEventListener("click",A),t.addEventListener("keydown",U=>{U.key==="Enter"&&A()});function G(){p.aspect=n.clientWidth/n.clientHeight,p.updateProjectionMatrix(),g.setSize(n.clientWidth,n.clientHeight)}window.addEventListener("resize",G);function Z(){requestAnimationFrame(Z),d.rotation.x=Math.sin(Date.now()*5e-4)*.1,d.rotation.y=Math.cos(Date.now()*7e-4)*.1,P.rotation.y=Math.sin(Date.now()*.001)*.2,b.forEach(U=>{const{x:Y,y:N}=U.userData;S.x===Y&&S.y===N?(U.material.color.setHex(16763904),U.material.emissive.setHex(5583616),U.scale.x=1.2+Math.sin(Date.now()*.005)*.1,U.scale.y=1.2+Math.sin(Date.now()*.005)*.1,U.scale.z=1.2+Math.sin(Date.now()*.005)*.1):S.x===Y||S.y===N?(U.material.color.setHex(6737151),U.material.emissive.setHex(4403),U.scale.set(1,1,1)):(U.material.color.setHex(16777215),U.material.emissive.setHex(0),U.scale.set(1,1,1))}),P.children.forEach(U=>{if(U.userData.textElement){const Y=U.position.clone();Y.applyMatrix4(P.matrixWorld),Y.project(p);const N=(Y.x*.5+.5)*n.clientWidth,le=(-Y.y*.5+.5)*n.clientHeight;U.userData.textElement.style.left=`${N-15}px`,U.userData.textElement.style.top=`${le-15}px`}}),g.render(h,p),on()}return v(),w(),O(),Z(),function(){a=!1,window.removeEventListener("resize",G),i.removeEventListener("click",A),t.removeEventListener("keydown",A),h.clear(),n.innerHTML="",n.querySelectorAll(".floating-text, .digit-text").forEach(Y=>Y.remove()),g.dispose()}}function em(n,e,t,i,r){let s=0,o=[],a=[],l=[],c=!0,f=1,u=3,h=0;const p=[{count:3,minDecimalPlaces:1,maxDecimalPlaces:1},{count:4,minDecimalPlaces:1,maxDecimalPlaces:2},{count:5,minDecimalPlaces:1,maxDecimalPlaces:2},{count:5,minDecimalPlaces:2,maxDecimalPlaces:3},{count:6,minDecimalPlaces:2,maxDecimalPlaces:3}],g=new Qt;g.background=new Re(8900331);const y=new ct(75,n.clientWidth/n.clientHeight,.1,1e3);y.position.z=15;const m=new Jt({antialias:!0});m.setSize(n.clientWidth,n.clientHeight),n.appendChild(m.domElement);const d=new sn(16777215,.6);g.add(d);const b=new rn(16777215,.8);b.position.set(5,3,5),g.add(b);const S=new Et;g.add(S);function v(){for(;S.children.length>0;)S.remove(S.children[0]);const F=new it(10,.1,.1),z=new Ft({color:3355443}),D=new Ee(F,z);S.add(D);for(let q=0;q<=10;q++){const J=new it(.05,.3,.1),ne=new Ft({color:3355443}),X=new Ee(J,ne);X.position.x=-5+q,X.position.y=-.1,S.add(X);const j=document.createElement("div");j.className="number-label",j.style.position="absolute",j.style.color="black",j.style.fontSize="14px",j.style.userSelect="none",j.style.fontWeight="bold",j.textContent=`${q/10}`,n.appendChild(j),X.userData={labelElement:j}}S.position.y=-3}const P=[],T=new Et;g.add(T);function w(){for(;T.children.length>0;)T.remove(T.children[0]);P.length=0,l.length=0;const F=p[Math.min(f-1,p.length-1)];o=[];for(let z=0;z<F.count;z++){const D=Math.floor(Math.random()*(F.maxDecimalPlaces-F.minDecimalPlaces+1))+F.minDecimalPlaces;let q;do q=Math.random(),q=parseFloat(q.toFixed(D));while(o.includes(q));o.push(q)}a=[...o].sort((z,D)=>z-D),o.forEach((z,D)=>{const q=new it(1,.5,.3),J=D/o.length*360,ne=new Fe({color:new Re(`hsl(${J}, 70%, 60%)`),specular:1118481,shininess:30}),X=new Ee(q,ne),j=8/Math.max(o.length,4);X.position.x=-3.5+D*j,X.position.y=2,X.userData={decimal:z,originalX:X.position.x,originalY:X.position.y,originalZ:X.position.z,index:D},T.add(X),P.push(X);const ee=document.createElement("div");ee.className="decimal-text",ee.style.position="absolute",ee.style.color="white",ee.style.fontSize="16px",ee.style.fontWeight="bold",ee.style.textAlign="center",ee.style.width="60px",ee.style.userSelect="none",ee.style.textShadow="1px 1px 2px black",ee.textContent=z.toString(),n.appendChild(ee),X.userData.textElement=ee}),e.textContent="Order the decimals from smallest to largest on the number line."}function A(F){if(!c)return;const z=P[F],D=l.indexOf(z.userData.decimal);if(D!==-1){l.splice(D,1),new $e(z.position).to({x:z.userData.originalX,y:z.userData.originalY,z:z.userData.originalZ},300).easing(tt.Back.Out).start();const J=F/o.length*360;z.material.color.set(new Re(`hsl(${J}, 70%, 60%)`)),x();return}l.push(z.userData.decimal);const q=-5+z.userData.decimal*10;new $e(z.position).to({x:q,y:-2.5,z:.2},300).easing(tt.Elastic.Out).start(),z.material.color.set(3394611),l.length===o.length&&setTimeout(_,1e3)}function x(){l.forEach((F,z)=>{const D=P.find(q=>q.userData.decimal===F);if(D){const q=-5+F*10;new $e(D.position).to({x:q,y:-2.5,z:.2},300).easing(tt.Elastic.Out).start()}})}function _(){if(!c)return;let F=!0;for(let z=0;z<a.length;z++)if(l[z]!==a[z]){F=!1;break}F?(s+=100*f,h++,G("Correct Order! +100","green"),h>=3?O():setTimeout(I,2e3)):(u--,G("Incorrect Order","red"),R(),u<=0?Z():setTimeout(I,3e3)),Y()}function R(){a.forEach((F,z)=>{const D=P.find(q=>q.userData.decimal===F);if(D){const q=-5+F*10;new $e(D.position).to({x:q,y:-2.5,z:.2},500).easing(tt.Back.Out).start(),new $e(D.material.color).to(new Re(3394611),500).start()}}),e.textContent="Correct order: "+a.join(" < ")}function I(){P.forEach(F=>{F.userData.textElement&&F.userData.textElement.remove()}),l=[],w()}function O(){f++,h=0;const F=document.createElement("div");F.style.position="absolute",F.style.color="gold",F.style.fontSize="32px",F.style.fontWeight="bold",F.style.textAlign="center",F.style.width="100%",F.style.top="40%",F.style.zIndex="100",F.style.textShadow="2px 2px 4px rgba(0,0,0,0.5)",F.textContent=`LEVEL UP! Level ${f}`,n.appendChild(F),setTimeout(()=>{F.remove()},2e3),setTimeout(I,2e3)}function G(F,z){const D=document.createElement("div");D.className="floating-text",D.style.position="absolute",D.style.color=z,D.style.fontSize="28px",D.style.fontWeight="bold",D.style.textAlign="center",D.style.width="100%",D.style.top="50%",D.style.zIndex="100",D.style.opacity="1",D.style.transition="all 1s ease-out",D.textContent=F,n.appendChild(D),setTimeout(()=>{D.style.transform="translateY(-50px)",D.style.opacity="0"},10),setTimeout(()=>{D.remove()},1e3)}function Z(){c=!1;const F=document.createElement("div");F.style.position="absolute",F.style.color="red",F.style.fontSize="36px",F.style.fontWeight="bold",F.style.textAlign="center",F.style.width="100%",F.style.top="35%",F.style.zIndex="100",F.textContent="GAME OVER",n.appendChild(F);const z=document.createElement("div");z.style.position="absolute",z.style.color="white",z.style.fontSize="20px",z.style.textAlign="center",z.style.width="100%",z.style.top="45%",z.style.zIndex="100",z.innerHTML=`Final Score: ${s}<br>Level: ${f}<br>Rounds Completed: ${h+(f-1)*3}`,n.appendChild(z);const D=document.createElement("button");D.style.position="absolute",D.style.top="60%",D.style.left="50%",D.style.transform="translateX(-50%)",D.style.padding="10px 20px",D.style.fontSize="18px",D.style.cursor="pointer",D.style.backgroundColor="#4CAF50",D.style.color="white",D.style.border="none",D.style.borderRadius="5px",D.style.zIndex="100",D.textContent="Play Again",D.onclick=U,n.appendChild(D)}function U(){n.querySelectorAll(".floating-text, .decimal-text, .number-label").forEach(F=>F.remove()),n.querySelectorAll("div").forEach(F=>{F!==n&&F.remove()}),s=0,f=1,u=3,h=0,c=!0,l=[],v(),I(),Y()}function Y(){r.textContent=`Score: ${s} | Level: ${f} | Lives: ${u}`}const N=new sl,le=new Xe;n.addEventListener("click",F=>{const z=m.domElement.getBoundingClientRect();le.x=(F.clientX-z.left)/z.width*2-1,le.y=-((F.clientY-z.top)/z.height)*2+1,N.setFromCamera(le,y);const D=N.intersectObjects(P);if(D.length>0){const q=D[0].object,J=P.findIndex(ne=>ne===q);J!==-1&&A(J)}}),t.style.display="none",i.style.display="none";function H(){y.aspect=n.clientWidth/n.clientHeight,y.updateProjectionMatrix(),m.setSize(n.clientWidth,n.clientHeight)}window.addEventListener("resize",H);function ie(){requestAnimationFrame(ie),P.forEach(F=>{if(F.userData.textElement){const z=F.position.clone();z.project(y);const D=(z.x*.5+.5)*n.clientWidth,q=(-z.y*.5+.5)*n.clientHeight;F.userData.textElement.style.transform="translate(-50%, -50%)",F.userData.textElement.style.left=`${D}px`,F.userData.textElement.style.top=`${q}px`}}),S.children.forEach(F=>{if(F.userData&&F.userData.labelElement){const z=F.position.clone();z.applyMatrix4(S.matrixWorld),z.project(y);const D=(z.x*.5+.5)*n.clientWidth,q=(-z.y*.5+.5)*n.clientHeight;F.userData.labelElement.style.transform="translate(-50%, -50%)",F.userData.labelElement.style.left=`${D}px`,F.userData.labelElement.style.top=`${q+20}px`}}),P.forEach(F=>{l.includes(F.userData.decimal)||(F.rotation.y+=.01,F.position.y=F.userData.originalY+Math.sin(Date.now()*.002+F.userData.index)*.05)}),m.render(g,y),on()}return v(),w(),Y(),ie(),function(){c=!1,window.removeEventListener("resize",H),n.removeEventListener("click",A),g.clear(),n.innerHTML="",n.querySelectorAll(".floating-text, .decimal-text, .number-label").forEach(z=>z.remove()),m.dispose()}}function tm(n,e,t,i,r){if(console.log("Setting up Number Line game with canvas:",n?"found":"not found","Dimensions:",n.clientWidth,"x",n.clientHeight),!n){console.error("Game canvas element not found!");return}const s=()=>{n.style.width="100%";const j=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)<768?"400px":"500px";n.style.height=j,n.style.minHeight=j,n.style.backgroundColor="#f0f0f0",n.style.border="1px solid #ccc",n.style.touchAction="none"};for(s();n.firstChild;)n.removeChild(n.firstChild);const o=new Qt;o.background=new Re(8900331);const a=800,l=600,c=new ct(75,n.clientWidth&&n.clientHeight?n.clientWidth/n.clientHeight:a/l,.1,1e3);c.position.z=10;const f=()=>{const X=window.innerWidth<768;c.fov=X?70:75,c.position.z=10,c.updateProjectionMatrix()};f();const u=new Jt({antialias:!0});u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.setSize(n.clientWidth||a,n.clientHeight||l),console.log("Renderer created with size:",u.domElement.width,u.domElement.height),n.appendChild(u.domElement);const h=new sn(16777215,.7);o.add(h);const p=new rn(16777215,.8);p.position.set(1,1,1),o.add(p);let g=1,y=0,m=10,d=[],b=[],S=[],v=null,P=new k,T=-1,w=window.innerWidth<768;const A=new it(16,.1,.1),x=new Fe({color:3355443}),_=new Ee(A,x);_.position.y=-2,o.add(_);const R=X=>{o.children.forEach(re=>{(re.userData.isTickMark||re.userData.isLabel)&&o.remove(re)});const j=14/(X+1);for(let re=0;re<=X+1;re++){const Se=new it(.05,.4,.05),Me=new Fe({color:3355443}),L=new Ee(Se,Me);if(L.position.x=-7+re*j,L.position.y=-2,L.userData.isTickMark=!0,o.add(L),re===0||re===X+1){const ke=re===0?"0":String(X+1),Le=w?.6:.4,De=new it(Le,Le,Le),fe=new Fe({color:re===0?4359668:15352629,shininess:80}),Ce=new Ee(De,fe);Ce.position.x=L.position.x,Ce.position.y=-2.7,Ce.userData.label=ke,Ce.userData.isLabel=!0,o.add(Ce);const ue=document.createElement("div");ue.textContent=ke,ue.style.position="absolute",ue.style.fontFamily="Arial, sans-serif",ue.style.fontSize=w?"20px":"16px",ue.style.fontWeight="bold",ue.style.color="white",ue.style.textAlign="center",ue.style.textShadow="2px 2px 4px rgba(0,0,0,0.7)",ue.style.pointerEvents="none",ue.id=`label-${re}`,n.appendChild(ue)}}S=[];const ee=14/(X+1);for(let re=1;re<=X;re++){const Se=new k(-7+re*ee,-2,0);S.push(Se)}return S},I=X=>{b.forEach(ke=>{o.remove(ke)}),b=[];const j=[...X].sort(()=>Math.random()-.5),ee=w?.9:.8,re=ee*(w?1.3:1.2),Me=-(j.length*re)/2+ee/2;function L(ke,Le="#FFFFFF"){const De=document.createElement("canvas"),fe=128;De.width=fe,De.height=fe;const Ce=De.getContext("2d"),ue=Ce.createLinearGradient(0,0,0,fe);return ue.addColorStop(0,"rgba(255, 255, 255, 0.1)"),ue.addColorStop(1,"rgba(0, 0, 0, 0.2)"),Ce.fillStyle=ue,Ce.fillRect(0,0,fe,fe),Ce.font=`bold ${fe/2}px Arial, sans-serif`,Ce.textAlign="center",Ce.textBaseline="middle",Ce.shadowColor="rgba(0, 0, 0, 0.8)",Ce.shadowBlur=5,Ce.shadowOffsetX=2,Ce.shadowOffsetY=2,Ce.fillStyle=Le,Ce.fillText(ke.toString(),fe/2,fe/2),new Kc(De)}return j.forEach((ke,Le)=>{const De=new it(ee,ee,ee),fe=new Re(`hsl(${ke*25}, 80%, 65%)`),Ce=L(ke,"#FFFFFF"),ue=[new Fe({map:Ce,color:fe,shininess:100}),new Fe({map:Ce,color:fe,shininess:100}),new Fe({map:Ce,color:fe,shininess:100}),new Fe({map:Ce,color:fe,shininess:100}),new Fe({map:Ce,color:fe,shininess:100}),new Fe({map:Ce,color:fe,shininess:100})],C=new Ee(De,ue);C.position.x=Me+Le*re,C.position.y=2,C.userData={number:ke,originalPosition:C.position.clone(),isDraggable:!0},o.add(C),b.push(C)}),b};function O(){S=[],d=[],n.querySelectorAll('div[id^="number-"], div[id^="label-"]').forEach(ee=>ee.remove()),m=Math.min(5+g*5,20);let j=g<=3?5:Math.min(7,3+g);if(w&&j>5&&(j=5),g<=2)d=Array.from({length:j},(ee,re)=>re+1);else if(g<=4)d=Array.from({length:j},(ee,re)=>(re+1)*2);else{for(d=[];d.length<j;){const ee=Math.floor(Math.random()*m)+1;d.includes(ee)||d.push(ee)}d.sort((ee,re)=>ee-re)}R(j),I(d),e.textContent="Place the numbers in order from smallest to largest on the number line.",t.style.display="none",i.textContent="Check Answers"}const G=new sl,Z=new Xe;function U(X){const j=X.touches?X.touches[0].clientX:X.clientX,ee=X.touches?X.touches[0].clientY:X.clientY,re=u.domElement.getBoundingClientRect();Z.x=(j-re.left)/re.width*2-1,Z.y=-((ee-re.top)/re.height)*2+1}function Y(X){X.preventDefault(),U(X),G.setFromCamera(Z,c);const j=G.intersectObjects(b);if(j.length>0&&(v=j[0].object,v.userData.isDraggable)){T=b.indexOf(v);const ee=j[0].point;P.copy(v.position).sub(ee),v.position.z=1,new $e(v.scale).to({x:1.2,y:1.2,z:1.2},200).easing(tt.Quadratic.Out).start()}}function N(X){if(X.preventDefault(),v){U(X),G.setFromCamera(Z,c);const j=new An(new k(0,0,1),0),ee=new k;G.ray.intersectPlane(j,ee),v.position.x=ee.x+P.x,v.position.y=ee.y+P.y}}function le(X){if(X.preventDefault(),v){let j=null,ee=1;S.forEach(re=>{const Se=v.position.distanceTo(re);Se<ee&&(ee=Se,j=re)}),j?new $e(v.position).to({x:j.x,y:j.y,z:0},200).easing(tt.Quadratic.Out).onComplete(()=>D()).start():new $e(v.position).to({x:v.userData.originalPosition.x,y:v.userData.originalPosition.y,z:0},300).easing(tt.Quadratic.Out).start(),new $e(v.scale).to({x:1,y:1,z:1},200).easing(tt.Quadratic.Out).start(),v=null,T=-1}}n.addEventListener("mousedown",Y),n.addEventListener("mousemove",N),n.addEventListener("mouseup",le),n.addEventListener("mouseleave",le),n.addEventListener("touchstart",Y,{passive:!1}),n.addEventListener("touchmove",N,{passive:!1}),n.addEventListener("touchend",le,{passive:!1}),n.addEventListener("touchcancel",le,{passive:!1});function H(){for(let X=0;X<=1;X++){const j=document.getElementById(`label-${X*(d.length+1)}`);if(j){const ee=o.children.filter(re=>re.userData.isLabel&&re.userData.label===(X===0?"0":String(d.length+1)));if(ee.length>0){const re=ee[0],Se=new k;Se.setFromMatrixPosition(re.matrixWorld),Se.project(c);const Me=u.domElement.width/2,L=u.domElement.height/2,ke=Se.x*Me+Me,Le=-(Se.y*L)+L;j.style.left=`${ke}px`,j.style.top=`${Le}px`,j.style.transform="translate(-50%, -50%)",j.style.width=w?"36px":"30px",j.style.height=w?"36px":"30px",j.style.lineHeight=w?"36px":"30px",j.style.backgroundColor="rgba(0,0,0,0.5)",j.style.borderRadius="50%",j.style.display="flex",j.style.justifyContent="center",j.style.alignItems="center"}}}}function ie(){const X=b.map(re=>({number:re.userData.number,position:re.position.clone()}));X.sort((re,Se)=>re.position.x-Se.position.x);const j=X.map(re=>re.number);let ee=!0;for(let re=1;re<j.length;re++)if(j[re]<j[re-1]){ee=!1;break}ee?(y+=10*g,r.textContent=y,b.forEach(re=>{new $e(re.position).to({y:re.position.y+.5},200).easing(tt.Quadratic.Out).chain(new $e(re.position).to({y:re.position.y},200).easing(tt.Bounce.Out)).start(),Array.isArray(re.material)?re.material.forEach(Se=>{new $e(Se.color).to(new Re(65280),300).start()}):re.material&&re.material.color&&new $e(re.material.color).to(new Re(65280),300).start()}),e.textContent="Great job! Numbers are in the correct order!",setTimeout(()=>{g++,O()},2e3)):(e.textContent="Not quite right. Try rearranging the numbers in order from smallest to largest.",new $e(_.position).to({x:.2},50).yoyo(!0).repeat(5).start(),setTimeout(()=>{_.position.x=0},300))}function F(){let X=!0,j=0;const ee=new Map;return S.forEach((re,Se)=>{ee.set(Se,null)}),b.forEach(re=>{let Se=!1;S.forEach((Me,L)=>{re.position.distanceTo(Me)<.5&&(ee.set(L,re),Se=!0,j++)}),Se||(X=!1)}),X&&j===S.length?(i.style.backgroundColor="#4CAF50",i.style.transform="scale(1.05)",i.style.boxShadow="0 0 10px rgba(76, 175, 80, 0.7)"):(i.style.backgroundColor="",i.style.transform="",i.style.boxShadow=""),X&&j===S.length}function z(){v===null&&F()&&setTimeout(()=>{v===null&&F()&&ie()},1e3)}function D(){F(),z()}console.log("Setting up event listeners"),i.addEventListener("click",ie);function q(){requestAnimationFrame(q),b.forEach((X,j)=>{j!==T&&(X.position.y+=Math.sin(Date.now()*.001+j)*.001,X.rotation.y+=.01)}),H(),on(),u.render(o,c)}function J(){w=window.innerWidth<768,s(),f(),n.clientWidth>0&&n.clientHeight>0&&(console.log("Resizing:",n.clientWidth,n.clientHeight),c.aspect=n.clientWidth/n.clientHeight,c.updateProjectionMatrix(),u.setSize(n.clientWidth,n.clientHeight,!1),O())}window.addEventListener("resize",ne(J,250));function ne(X,j){let ee;return function(){const re=this,Se=arguments;clearTimeout(ee),ee=setTimeout(()=>X.apply(re,Se),j)}}return setTimeout(J,100),O(),q(),console.log("Number Line game setup complete"),{scene:o,camera:c,renderer:u}}function nm(n,e,t,i,r){if(console.log("Setting up Count Objects game with canvas:",n?"found":"not found","Dimensions:",n.clientWidth,"x",n.clientHeight),!n){console.error("Game canvas element not found!");return}for((!n.clientWidth||!n.clientHeight)&&(console.log("Canvas dimensions not set, forcing explicit dimensions"),n.style.width="100%",n.style.height="500px",n.style.minHeight="500px",n.style.backgroundColor="#f0f0f0",n.style.border="1px solid #ccc");n.firstChild;)n.removeChild(n.firstChild);const s=new Qt;s.background=new Re(15726075);const o=800,a=600,l=new ct(60,n.clientWidth&&n.clientHeight?n.clientWidth/n.clientHeight:o/a,.1,1e3);l.position.z=10;const c=new Jt({antialias:!0});c.setSize(n.clientWidth||o,n.clientHeight||a),console.log("Renderer created with size:",c.domElement.width,c.domElement.height),n.appendChild(c.domElement);const f=new sn(16777215,.7);s.add(f);const u=new rn(16777215,.8);u.position.set(1,1,1),s.add(u);const h=new it(12,.2,8),p=new Ri({color:15134709,roughness:.8,metalness:.1}),g=new Ee(h,p);g.position.y=-2,s.add(g);let y=1,m=0,d=0,b=[];const S=[{name:"cube",create:()=>{const R=.6+Math.random()*.3,I=new it(R,R,R),O=new Ri({color:16777215,roughness:.7,metalness:.1});return new Ee(I,O)}},{name:"sphere",create:()=>{const R=.3+Math.random()*.2,I=new Ct(R,16,16),O=new Ri({color:16777215,roughness:.7,metalness:.1});return new Ee(I,O)}},{name:"cone",create:()=>{const R=.3+Math.random()*.2,I=.6+Math.random()*.3,O=new xn(R,I,16),G=new Ri({color:16777215,roughness:.7,metalness:.1});return new Ee(O,G)}},{name:"cylinder",create:()=>{const R=.3+Math.random()*.2,I=.5+Math.random()*.3,O=new $t(R,R,I,16),G=new Ri({color:16777215,roughness:.7,metalness:.1});return new Ee(O,G)}}],v=()=>{document.querySelectorAll(".count-answer-btn").forEach(H=>H.remove());const I=document.createElement("div");I.style.display="flex",I.style.justifyContent="center",I.style.flexWrap="wrap",I.style.gap="15px",I.style.marginTop="20px",I.style.width="100%",I.style.maxWidth="400px",I.style.margin="20px auto";const O=Math.min(10,d+5),G=Math.max(1,d-3),Z=Math.min(d+3,O),U=[];for(U.push(d);U.length<5;){const H=Math.floor(Math.random()*(Z-G+1))+G;U.includes(H)||U.push(H)}U.sort(()=>Math.random()-.5);const Y=["#4b97d2","#6a8caf","#78a5b3","#7ac285","#b683b3"];U.forEach((H,ie)=>{const F=document.createElement("button");F.textContent=H,F.className="count-answer-btn",F.style.padding="12px 0",F.style.backgroundColor=Y[ie%Y.length],F.style.color="white",F.style.border="none",F.style.borderRadius="8px",F.style.fontSize="22px",F.style.fontWeight="600",F.style.cursor="pointer",F.style.margin="5px",F.style.width="70px",F.style.height="70px",F.style.boxShadow="0 3px 6px rgba(0, 0, 0, 0.1)",F.style.transition="all 0.2s ease",F.style.minHeight="70px",F.style.touchAction="manipulation",F.addEventListener("mouseenter",()=>{F.style.transform="translateY(-3px)",F.style.boxShadow="0 5px 10px rgba(0, 0, 0, 0.15)"}),F.addEventListener("mouseleave",()=>{F.style.transform="translateY(0)",F.style.boxShadow="0 3px 6px rgba(0, 0, 0, 0.1)"}),F.addEventListener("touchstart",()=>{F.style.transform="translateY(-3px)",F.style.boxShadow="0 5px 10px rgba(0, 0, 0, 0.15)"},{passive:!0}),F.addEventListener("touchend",()=>{F.style.transform="translateY(0)",F.style.boxShadow="0 3px 6px rgba(0, 0, 0, 0.1)"},{passive:!0}),F.addEventListener("click",()=>w(H)),I.appendChild(F)});const N=()=>{const H=window.innerWidth,ie=I.querySelectorAll(".count-answer-btn");H<=480?ie.forEach(F=>{F.style.width="60px",F.style.height="60px",F.style.minHeight="60px",F.style.fontSize="20px"}):ie.forEach(F=>{F.style.width="70px",F.style.height="70px",F.style.minHeight="70px",F.style.fontSize="22px"})};window.addEventListener("resize",N),N();const le=document.getElementById("game-controls");le&&(t.style.display="none",i.style.display="none",le.appendChild(I))},P=()=>{b.forEach(G=>s.remove(G)),b=[],y<=2?d=Math.floor(Math.random()*5)+1:y<=4?d=Math.floor(Math.random()*6)+5:d=Math.floor(Math.random()*6)+10,console.log(`Creating ${d} objects for level ${y}`);const R=[6985922,8045189,14067836,11961267,14062460,10732226,13745524],I=5,O=Math.PI*2/d;for(let G=0;G<d;G++){const U=S[Math.floor(Math.random()*S.length)].create(),Y=Math.floor(Math.random()*R.length);U.material.color.set(R[Y]),U.material.shininess=30;const N=O*G,le=I*(.7+Math.random()*.3);U.position.x=Math.cos(N)*le,U.position.y=-1.5+Math.random()*.3,U.position.z=Math.sin(N)*le,U.userData={rotationSpeed:{x:(Math.random()-.5)*.007,y:(Math.random()-.5)*.007,z:(Math.random()-.5)*.005},hoverParams:{amplitude:.05+Math.random()*.05,speed:.3+Math.random()*.4,phase:Math.random()*Math.PI*2},originalY:U.position.y},s.add(U),b.push(U)}return b};function T(){P(),e.textContent="How many objects do you see?",v()}function w(R){console.log("Checking answer:",R,"Correct answer:",d),R===d?(m+=10*y,r.textContent=m,b.forEach(I=>{new $e(I.position).to({y:I.position.y+.5},400).easing(tt.Quadratic.Out).chain(new $e(I.position).to({y:I.userData.originalY},400).easing(tt.Quadratic.InOut)).start(),new $e(I.material.color).to(new Re(8045189),400).start()}),e.textContent=`Great job! You counted ${d} objects correctly!`,setTimeout(()=>{y++,T()},2e3)):(e.textContent="Try again! Let's count together one more time.",new $e(g.position).to({x:.1},80).yoyo(!0).repeat(3).start(),setTimeout(()=>{g.position.x=0,e.textContent="How many objects do you see?"},1e3))}function A(){requestAnimationFrame(A),b.forEach(R=>{R.rotation.x+=R.userData.rotationSpeed.x,R.rotation.y+=R.userData.rotationSpeed.y,R.rotation.z+=R.userData.rotationSpeed.z;const I=R.userData.hoverParams;R.position.y=R.userData.originalY+Math.sin(Date.now()*5e-4*I.speed+I.phase)*I.amplitude*.01}),on(),c.render(s,l)}function x(){n.clientWidth>0&&n.clientHeight>0&&(console.log("Resizing:",n.clientWidth,n.clientHeight),l.aspect=n.clientWidth/n.clientHeight,l.updateProjectionMatrix(),c.setSize(n.clientWidth,n.clientHeight))}const _=()=>{let R=!1,I={x:0,y:0},O=new xt;return s.add(O),O.add(l),l.position.set(0,0,10),l.lookAt(O.position),n.addEventListener("mousedown",G=>{R=!0,I={x:G.clientX,y:G.clientY}}),n.addEventListener("mousemove",G=>{if(R){const Z={x:G.clientX-I.x,y:G.clientY-I.y};O.rotation.y+=Z.x*.005,I={x:G.clientX,y:G.clientY}}}),n.addEventListener("mouseup",()=>{R=!1}),n.addEventListener("mouseleave",()=>{R=!1}),n.addEventListener("touchstart",G=>{G.touches.length===1&&(R=!0,I={x:G.touches[0].clientX,y:G.touches[0].clientY})},{passive:!1}),n.addEventListener("touchmove",G=>{if(R&&G.touches.length===1){const Z={x:G.touches[0].clientX-I.x,y:G.touches[0].clientY-I.y};O.rotation.y+=Z.x*.005,I={x:G.touches[0].clientX,y:G.touches[0].clientY},G.preventDefault()}},{passive:!1}),n.addEventListener("touchend",()=>{R=!1},{passive:!0}),n.addEventListener("touchcancel",()=>{R=!1},{passive:!0}),O};return window.addEventListener("resize",x),setTimeout(x,100),_(),T(),A(),console.log("Count Objects game setup complete"),{scene:s,camera:l,renderer:c}}function im(n,e,t,i,r){if(console.log("Setting up Number Adventure game with canvas:",n?"found":"not found","Dimensions:",n.clientWidth,"x",n.clientHeight),!n){console.error("Game canvas element not found!");return}for((!n.clientWidth||!n.clientHeight)&&(console.log("Canvas dimensions not set, forcing explicit dimensions"),n.style.width="100%",n.style.height="500px",n.style.minHeight="500px",n.style.backgroundColor="#f0f0f0",n.style.border="1px solid #ccc");n.firstChild;)n.removeChild(n.firstChild);const s=new Qt;s.background=new Re(8900331),s.fog=new fo(8900331,.02);const o=800,a=600,l=new ct(75,n.clientWidth&&n.clientHeight?n.clientWidth/n.clientHeight:o/a,.1,1e3);l.position.z=8,l.position.y=1;const c=new Jt({antialias:!0,alpha:!0});c.shadowMap.enabled=!0,c.shadowMap.type=Ua,c.setSize(n.clientWidth||o,n.clientHeight||a),console.log("Renderer created with size:",c.domElement.width,c.domElement.height),n.appendChild(c.domElement);const f=()=>{const H=[],ie=new Ct(.5,8,8),F=new Qc({color:16777215,transparent:!0,opacity:.8});for(let Me=0;Me<20;Me++){const L=new Ee(ie,F);L.position.set(Math.random()*40-20,Math.random()*3+5,Math.random()*20-25),L.scale.set(Math.random()*2+1,Math.random()*1+.5,Math.random()*1+.5),L.rotation.z=Math.random()*Math.PI,L.castShadow=!1,L.receiveShadow=!1,s.add(L),H.push(L)}const z=new Pn(20,10),D=new Fe({color:9127187,side:Dt,shininess:10}),q=new Ee(z,D);q.rotation.x=Math.PI/2,q.position.y=-1,q.receiveShadow=!0,s.add(q);const J=new Pn(3,10),ne=new Fe({color:13808780,side:Dt,shininess:5}),X=new Ee(J,ne);X.rotation.x=Math.PI/2,X.position.y=-.99,X.receiveShadow=!0,s.add(X);const j=(Me,L)=>{const ke=new Et;for(let Le=0;Le<5;Le++){const De=.2+Math.random()*.3,fe=new xn(.05,De,4),Ce=new Fe({color:5025616,shininess:5}),ue=new Ee(fe,Ce);ue.position.set(Me+(Math.random()*.4-.2),-1+De/2,L+(Math.random()*.4-.2)),ue.rotation.y=Math.random()*Math.PI,ue.rotation.x=Math.random()*.2,ue.castShadow=!0,ke.add(ue)}return s.add(ke),ke},ee=[];for(let Me=-5;Me<=5;Me+=.8)ee.push(j(-1.6,Me)),ee.push(j(1.6,Me));const re=(Me,L)=>{const ke=new $t(.2,.2,1,8),Le=new Fe({color:9127187,shininess:5}),De=new Ee(ke,Le);De.position.set(Me,-.5,L),De.castShadow=!0,De.receiveShadow=!0;const fe=new xn(.8,2,8),Ce=new Fe({color:2263842,shininess:10}),ue=new Ee(fe,Ce);return ue.position.set(Me,1,L),ue.castShadow=!0,ue.receiveShadow=!0,s.add(De),s.add(ue),{trunk:De,leaves:ue}},Se=[];for(let Me=-5;Me<=5;Me+=2)Me!==0&&(Se.push(re(-3,Me)),Se.push(re(3,Me)));return{ground:q,path:X,trees:Se,cloudParticles:H,grassPatches:ee}},u=()=>{const H=new it(6,4,.5),ie=new rd().load("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjZCNzlCMUUyMTlGMTFFQTlCQ0JGMTk4QUVDQkFCRDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjZCNzlCMUYyMTlGMTFFQTlCQ0JGMTk4QUVDQkFCRDgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGNkI3OUIxQzIxOUYxMUVBOUJDQkYxOThBRUNCQUJEOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGNkI3OUIxRDIxOUYxMUVBOUJDQkYxOThBRUNCQUJEOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plsf1j8AAADPSURBVHjaYmSgALCwsbH9//+f4dSpU4wUGcDCwMBgcfHiRdYNGzYwkm0AExOTA4jNysrKSLYBQMOfAw35DwQVpBrABDXkP9SAXKiYHVEGgLzPwsLiAHMJEAmePXuW8ejRowiXOhJtAAmE6oEMeA5kQ12UD+QzI/kCmQ1MWMhyGBjIBdq0cDsxIDqQsRpCigEkeg3sDCZoQmIgJRCRDUB2SQkwdfxnYWGJhIYBKcnZAcxMl6CuVwBGmQFMnpSDf//+KQL5DKRHIwsMDAxcAQEBAgwATl+imXpxEZ0AAAAASUVORK5CYII="),F=new Fe({color:10526880,shininess:30,map:ie}),z=new Ee(H,F);z.position.z=-5,z.castShadow=!0,z.receiveShadow=!0,s.add(z);const D=new it(1.5,2.5,.3),q=new Fe({color:9127187,shininess:30,specular:2236962}),J=new Ee(D,q);J.position.z=-4.8,J.position.y=-.75,J.castShadow=!0,J.receiveShadow=!0,s.add(J);const ne=new Ct(.1,16,16),X=new Fe({color:16766720,shininess:100,specular:16777215}),j=new Ee(ne,X);j.position.set(.4,-.75,-4.65),s.add(j);const ee=Ce=>{const ue=new $t(.8,.8,5,8),C=new Fe({color:9474192,shininess:30}),M=new Ee(ue,C);M.position.set(Ce,0,-5),M.castShadow=!0,M.receiveShadow=!0;const $=new xn(1,1.5,8),oe=new Fe({color:8388608,shininess:30}),ce=new Ee($,oe);ce.position.set(Ce,3,-5),ce.castShadow=!0,ce.receiveShadow=!0;const se=new it(.3,.5,.1),Pe=new Fe({color:8900331,shininess:100,transparent:!0,opacity:.7}),me=[];for(let ve=0;ve<2;ve++){const qe=new Ee(se,Pe),he=ve*Math.PI;qe.position.set(Ce+Math.sin(he)*.75,ve+.5,-5+Math.cos(he)*.75),qe.lookAt(new k(Ce,ve+.5,-10)),s.add(qe),me.push(qe)}return s.add(M),s.add(ce),{base:M,roof:ce,windows:me}},re=ee(-3.5),Se=ee(3.5),Me=new $t(.05,.05,1.5,8),L=new Fe({color:8947848,shininess:30}),ke=new Ee(Me,L);ke.position.set(Se.roof.position.x,Se.roof.position.y+1.2,Se.roof.position.z),s.add(ke);const Le=new Pn(.8,.5),De=new Fe({color:16711680,side:Dt,shininess:5}),fe=new Ee(Le,De);return fe.position.set(Se.roof.position.x+.4,Se.roof.position.y+1.5,Se.roof.position.z),fe.userData={originalPosition:fe.position.clone(),waveSpeed:2},s.add(fe),{wall:z,door:J,handle:j,leftTower:re,rightTower:Se,flag:fe}},h=new sn(16777215,.5);s.add(h);const p=new rn(16777215,.8);p.position.set(5,10,7),p.castShadow=!0,p.shadow.mapSize.width=1024,p.shadow.mapSize.height=1024,p.shadow.camera.near=.5,p.shadow.camera.far=50,p.shadow.camera.left=-10,p.shadow.camera.right=10,p.shadow.camera.top=10,p.shadow.camera.bottom=-10,s.add(p);const g=new od(16766720,.5,5);g.position.set(0,1,-4),s.add(g);const y=()=>{const ie=new Nt,F=new tl({color:16777215,size:.1,transparent:!0,opacity:0,blending:ds,sizeAttenuation:!0}),z=new Float32Array(50*3);for(let J=0;J<50;J++)z[J*3]=0,z[J*3+1]=0,z[J*3+2]=0;ie.setAttribute("position",new Kt(z,3));const D=new Zc(ie,F);return s.add(D),{particleSystem:D,emitParticles:(J,ne)=>{F.color.set(ne||16777215),F.opacity=1;const X=ie.attributes.position.array;for(let j=0;j<50;j++){const ee=Math.random()*.5,re=Math.random()*Math.PI*2,Se=Math.random()*Math.PI;X[j*3]=J.x+ee*Math.sin(Se)*Math.cos(re),X[j*3+1]=J.y+ee*Math.sin(Se)*Math.sin(re),X[j*3+2]=J.z+ee*Math.cos(Se)}ie.attributes.position.needsUpdate=!0,new $e(F).to({opacity:0},1e3).easing(tt.Cubic.Out).start()}}};let m=1,d=0,b=[],S=0,v=!1,P=!0;const T=f(),w=u(),A=y(),_=(()=>{const H=document.createElement("div");return H.style.position="absolute",H.style.top="10px",H.style.right="10px",H.style.background="rgba(0, 0, 0, 0.5)",H.style.color="white",H.style.padding="5px 10px",H.style.borderRadius="10px",H.style.fontFamily="Arial, sans-serif",H.style.fontSize="14px",H.style.fontWeight="bold",H.style.pointerEvents="none",H.textContent=`Level: ${m}`,H.id="level-indicator",n.appendChild(H),H})();(()=>{const H=document.createElement("button");return H.style.position="absolute",H.style.bottom="10px",H.style.right="10px",H.style.background="rgba(73, 109, 137, 0.8)",H.style.color="white",H.style.padding="5px 10px",H.style.borderRadius="10px",H.style.fontFamily="Arial, sans-serif",H.style.fontSize="14px",H.style.fontWeight="bold",H.style.border="none",H.style.cursor="pointer",H.textContent="Hint",H.id="hint-button",H.addEventListener("mouseenter",()=>{H.style.background="rgba(100, 149, 237, 0.8)"}),H.addEventListener("mouseleave",()=>{H.style.background="rgba(73, 109, 137, 0.8)"}),H.addEventListener("click",()=>{if(!P)return;let ie=0;b.forEach(z=>{setTimeout(()=>{const D=z.material.color.clone();let q;switch(z.userData.type){case 0:q=new Re(16776960);break;case 1:q=new Re(16711935);break;case 2:q=new Re(16776960);break;case 3:q=new Re(16753920);break;default:q=new Re(16777215)}new $e(z.material.color).to({r:q.r,g:q.g,b:q.b},300).easing(tt.Quadratic.Out).chain(new $e(z.material.color).to({r:D.r,g:D.g,b:D.b},300).easing(tt.Quadratic.In)).start(),A.emitParticles(z.position.clone(),q)},ie),ie+=150});const F=e.textContent;e.textContent=`There are ${S} treasures on the path. Try counting them!`,setTimeout(()=>{e.textContent=F},3e3)}),n.appendChild(H),H})();const O=(()=>{const H={success:new Audio("data:audio/mp3;base64,SUQzAwAAAAAAJlRQRTEAAAAcAAAAU291bmRKYXkuY29tIFNvdW5kIEVmZmVjdHNUQUxCAAAAGAAAAFNvdW5kSmF5LmNvbSBTRlggTGlicmFyeVRZRVIAAAAFAAAAMjAyM1RDT04AAAAHAAAAT3RoZXJzVFJDSwAAAAMAAABzZngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//tAwAAAAAEFoIQAAADRWjiSIIAAnTlqOHEkQQC2TlJhUhQRGPXe4PCyQc2xjRlL3W23flYtcYqG5RD+EWHZdQAkIBQsHwfB8Hw8OlrDp//7EsCVP8ABhjsGAEAAKiOImMAIAAcP/w8Pn//D/BAEAQBAyJAP/AIBsf/4P3/+CAIAgw//8rBASAQDAYDBP//+QHP//////////zEFNRQS//sSwGP/AAT45IgBBAAAgDyRACCAAAAxtMAAAMRrHJ0DpXMbYy7G7d1i1x8LNvkMOiE95GXMCQDBYrFVwOBYRhGDfBoKG////iCIfH///giP/T////+UIUAE0DAAYoRFWZjLUxQ1TMSFmc//+xLAd3/wBDRE9gCAAAh4eK7AAAAATG5oiZLM8S+yGHDULpczMF0yFpCe8jrnJLg8kZTLBwLCMIwbBkGw2GQEQQnEQRHBPBCIhCcQhCRKAIhCEIQhCE4g5B0BCEIM6CQ6Bnkw1FRTMuOTkuNKqqqqqg=="),error:new Audio("data:audio/mp3;base64,SUQzAwAAAAAAJlRQRTEAAAAcAAAAU291bmRKYXkuY29tIFNvdW5kIEVmZmVjdHNUQUxCAAAAGAAAAFNvdW5kSmF5LmNvbSBTRlggTGlicmFyeVRZRVIAAAAFAAAAMjAyM1RDT04AAAAHAAAAT3RoZXJzVFJDSwAAAAMAAABzZngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//tAwAAAAAFUoIQAAADeDlDgQkEgdTmrScMiIYoqvpv7zMFmXUe77/nPz/n+/B7//5EUCAQDCgYH+Dw//4Pn/8sdjsZ//7EsCSP8ABvjoGAEAAJuOYeMAIAA////w+//8Hh///wf/4fHw/hP//8HxCfD/EP/y3EZRC7JbZ3ct9bvlJB2xwxwAAAKAAACxAAAAf/kxBTUUzLjk5LjSqqqqqqqqq//sSwE9/wAO4NdwAQAAAeAa7gAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq")};Object.values(H).forEach(D=>{D.volume=0});const ie=document.createElement("button");ie.style.position="absolute",ie.style.top="10px",ie.style.left="10px",ie.style.background="rgba(0, 0, 0, 0.5)",ie.style.color="white",ie.style.padding="5px 10px",ie.style.borderRadius="10px",ie.style.fontFamily="Arial, sans-serif",ie.style.fontSize="14px",ie.style.border="none",ie.style.cursor="pointer",ie.innerHTML="🔇 Sound",ie.id="sound-button";let F=!1;return ie.addEventListener("click",()=>{F=!F,F?(ie.innerHTML="🔊 Sound",Object.values(H).forEach(D=>{D.volume=.3})):(ie.innerHTML="🔇 Sound",Object.values(H).forEach(D=>{D.volume=0}))}),n.appendChild(ie),{sounds:H,playSound:D=>{H[D]&&(H[D].pause(),H[D].currentTime=0,H[D].play().catch(q=>{console.warn("Could not play sound:",q)}))}}})(),G=H=>{const ie=[],F=[()=>{const J=new go(.3,0),ne=new Fe({color:16766720,shininess:100,specular:16777215,emissive:10052885,emissiveIntensity:.2}),X=new Ee(J,ne),j=new Ct(.4,16,16),ee=new Ft({color:16766720,transparent:!0,opacity:.2,side:Rt}),re=new Ee(j,ee);return X.add(re),X},()=>{const J=new br(.3,0),ne=new Fe({color:9055202,shininess:100,specular:16777215,transparent:!0,opacity:.9}),X=new Ee(J,ne),j=new br(.15,0),ee=new Ft({color:15132410,transparent:!0,opacity:.8}),re=new Ee(j,ee);return X.add(re),X},()=>{const J=new $t(.3,.3,.05,32),ne=new Fe({color:16766720,shininess:100,specular:16777215}),X=new Ee(J,ne),j=new $t(.2,.2,.06,32),ee=new Fe({color:14329120,shininess:80}),re=new Ee(j,ee);return re.position.y=0,X.add(re),X.rotation.x=Math.PI/2,X},()=>{const J=new it(.4,.3,.3),ne=new Fe({color:9127187,shininess:30}),X=new Ee(J,ne),j=new it(.4,.1,.3),ee=new Fe({color:9127187,shininess:30}),re=new Ee(j,ee);re.position.y=.2;const Se=new it(.1,.1,.05),Me=new Fe({color:16766720,shininess:100}),L=new Ee(Se,Me);L.position.set(0,.15,.175);const ke=new Et;return ke.add(X),ke.add(re),ke.add(L),ke}],z=[];if(H<=5)for(let J=0;J<H;J++){const ne=J/(H-1||1)*8-4,X=Math.random()*2-2/2,j=.3+Math.random()*.5;z.push(new k(X,j,ne))}else{const J=Math.min(3,Math.floor(H/3));let ne=H;const X=[];for(let j=0;j<J;j++){const ee=(j/(J-1||1)*.8-.4)*8,re=Math.random()*(2/2)-2/4;X.push({x:re,z:ee})}for(let j=0;j<J&&ne>0;j++){const ee=Math.floor(ne/(J-j));ne-=ee;for(let re=0;re<ee;re++){const Se=X[j],Me=.6+Math.random()*.4,L=Math.random()*Math.PI*2,ke=Se.x+Math.cos(L)*Me*.5,Le=Se.z+Math.sin(L)*Me,De=.3+Math.random()*.5,fe=Math.max(Math.min(ke,2/2),-2/2);z.push(new k(fe,De,Le))}}}for(let J=0;J<H;J++){let ne;const X=Math.random();X<.35?ne=0:X<.7?ne=2:X<.9?ne=1:ne=3;const j=F[ne]();j.position.copy(z[J]),j.castShadow=!0,j.receiveShadow=!0,j.userData={rotationSpeed:{x:(Math.random()-.5)*.02,y:Math.random()*.05+.02,z:(Math.random()-.5)*.02},hoverParams:{amplitude:.1+Math.random()*.1,speed:.5+Math.random()*1,phase:Math.random()*Math.PI*2},originalY:z[J].y,type:ne,collected:!1},s.add(j),ie.push(j)}return ie};function Z(){P=!0,Y||N(),_.textContent=`Level: ${m}`,b.forEach(F=>s.remove(F)),b=[],v=!1,w.door.position.y=-.75,w.door.position.x=0,m<=2?S=Math.floor(Math.random()*5)+1:m<=4?S=Math.floor(Math.random()*6)+5:S=Math.floor(Math.random()*6)+10,b=G(S);const H=["How many treasure items can you find on the path? Count carefully to open the castle door!","Count the treasures scattered along the path. How many are there in total?","The castle door will open when you count all the treasures. How many do you see?","Look around and count all the magical treasures. How many are on the path?"],ie=H[Math.floor(Math.random()*H.length)];e.textContent=ie,t.value="",t.style.display="inline-block",i.style.display="inline-block",i.textContent="Submit Answer",new $e(l.position).to({x:0,y:1,z:8},1e3).easing(tt.Cubic.InOut).start(),l.lookAt(0,0,0)}function U(){if(!P)return;const H=parseInt(t.value);if(!isNaN(H)){if(console.log("Checking answer:",H,"Correct answer:",S),H===S){P=!1,d+=10*m,r.textContent=d,O.playSound("success"),v=!0,new $e(w.door.position).to({y:1.5},1e3).easing(tt.Cubic.Out).onComplete(()=>{O.playSound("doorOpen")}).start(),b.forEach(z=>{new $e(z.userData.rotationSpeed).to({y:.2},500).start();const D=Math.random()*500;setTimeout(()=>{O.playSound("treasure"),A.emitParticles(z.position.clone(),z.material.color),new $e(z.position).to({y:z.position.y+2},1500).easing(tt.Cubic.Out).start()},D)}),new $e(l.position).to({x:0,y:.5,z:0},2e3).easing(tt.Cubic.InOut).start();const ie=[`Correct! There ${S===1?"is":"are"} ${S} treasure ${S===1?"item":"items"}. The castle door opens!`,`Great job! You counted all ${S} treasures correctly. The castle welcomes you!`,`Amazing counting! The ${S} treasures glow as the castle door swings open!`,`Perfect! You found all ${S} treasures. The door to the castle opens for you!`],F=ie[Math.floor(Math.random()*ie.length)];e.textContent=F,setTimeout(()=>{m++,Z()},3e3)}else new $e(w.door.position).to({x:.2},50).yoyo(!0).repeat(5).start(),O.playSound("error"),setTimeout(()=>{w.door.position.x=0},300),H<S?e.textContent="Not quite right. There are more treasures than that. Look carefully along the whole path!":e.textContent="Not quite right. There are fewer treasures than that. Try counting each one carefully!";t.value=""}}console.log("Setting up event listeners"),i.addEventListener("click",U),t.addEventListener("keypress",H=>{H.key==="Enter"&&U()});let Y=!1;function N(){if(Y=!0,!P){Y=!1;return}if(requestAnimationFrame(N),b.forEach(H=>{if(H.rotation.x+=H.userData.rotationSpeed.x,H.rotation.y+=H.userData.rotationSpeed.y,H.rotation.z+=H.userData.rotationSpeed.z,!v){const ie=H.userData.hoverParams;H.position.y=H.userData.originalY+Math.sin(Date.now()*.001*ie.speed+ie.phase)*ie.amplitude}}),v||(w.door.rotation.y=Math.sin(Date.now()*.001)*.05),w.flag){const H=w.flag.userData.waveSpeed;w.flag.rotation.x=Math.sin(Date.now()*.002*H)*.1,w.flag.rotation.z=Math.sin(Date.now()*.001*H)*.2}T.cloudParticles&&T.cloudParticles.forEach((H,ie)=>{H.position.x+=.002*(ie%3===0?1:-1),H.position.x>25&&(H.position.x=-25),H.position.x<-25&&(H.position.x=25)}),on(),c.render(s,l)}function le(){n.clientWidth>0&&n.clientHeight>0&&(console.log("Resizing:",n.clientWidth,n.clientHeight),l.aspect=n.clientWidth/n.clientHeight,l.updateProjectionMatrix(),c.setSize(n.clientWidth,n.clientHeight))}return window.addEventListener("resize",le),setTimeout(le,100),n.addEventListener("mousemove",H=>{const ie=c.domElement.getBoundingClientRect(),F=(H.clientX-ie.left)/ie.width*2-1,z=-((H.clientY-ie.top)/ie.height)*2+1,D=F*.5,q=z*.3+1;l.position.x+=(D-l.position.x)*.05,l.position.y+=(q-l.position.y)*.05,l.lookAt(0,0,0)}),Z(),N(),console.log("Number Adventure game setup complete"),{scene:s,camera:l,renderer:c}}const Si=document.querySelector("#app"),Da={"":om,topics:am,games:lm,game:cm,about:dm};function La(){const n=window.location.hash.replace("#","")||"";console.log("Path before routing:",n);const e=n.split("?")[0];console.log("Base path:",e);let t="";Da.hasOwnProperty(e)&&(t=e),console.log("Selected route handler:",t),Si.innerHTML="",Da[t](n)}function rm(){window.addEventListener("hashchange",La),La(),console.log("Router initialized with hash:",window.location.hash),sm(),fm(),window.addEventListener("orientationchange",pm)}function sm(){let n;const e=document.createElement("div");e.style.cssText=`
    position: fixed;
    bottom: 20px;
    left: 20px;
    background: white;
    padding: 15px 20px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    display: none;
    z-index: 1000;
    font-family: 'Poppins', sans-serif;
  `,e.innerHTML=`
    <p style="margin: 0 0 10px 0; font-weight: bold;">Install MathOrGame</p>
    <p style="margin: 0 0 15px 0; font-size: 0.9rem;">Install this app on your device for offline use!</p>
    <div style="display: flex; gap: 10px;">
      <button id="installBtn" style="
        background: linear-gradient(135deg, #4361ee, #3a0ca3);
        color: white;
        border: none;
        padding: 8px 15px;
        border-radius: 20px;
        cursor: pointer;
        font-weight: bold;
      ">Install</button>
      <button id="installCancelBtn" style="
        background: transparent;
        border: none;
        padding: 8px 15px;
        cursor: pointer;
        color: #666;
      ">Not now</button>
    </div>
  `,document.body.appendChild(e),window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),n=t,e.style.display="block"}),document.getElementById("installBtn").addEventListener("click",async()=>{if(!n)return;n.prompt();const{outcome:t}=await n.userChoice;console.log(`User response to install prompt: ${t}`),n=null,e.style.display="none"}),document.getElementById("installCancelBtn").addEventListener("click",()=>{e.style.display="none"}),window.addEventListener("appinstalled",t=>{console.log("App was installed",t),e.style.display="none"})}function om(){Si.innerHTML=`
    <div id="bg-canvas"></div>
    
    <header>
      <div class="container">
        <h1 class="logo"><a href="#" style="text-decoration: none; color: inherit;">MathOrGame</a></h1>
        <p class="tagline">Learn Math. Play Games.</p>
        <div class="mobile-menu-toggle">
          <span class="line1"></span>
          <span class="line2"></span>
          <span class="line3"></span>
        </div>
      </div>
    </header>
    
    <nav>
      <a href="#">Home</a>
      <a href="#topics">Topics</a>
      <a href="#about">About</a>
    </nav>
    
    <main class="container">
      <div class="welcome-section fade-in">
        <h2>Welcome to MathOrGame!</h2>
        <p>An interactive 3D math learning experience designed to make mathematics fun and engaging through immersive games.</p>
      </div>
      
      <div class="grade-title fade-in">
        <h3>Select Your Grade</h3>
      </div>
      
      <div class="grid">
        <div class="card fade-in" style="animation-delay: 0.1s">
          <div class="card-header" style="background: linear-gradient(135deg, #4CAF50, #2E7D32);">
            <h3>1st Grade</h3>
          </div>
          <div class="card-body">
            <p>Basic addition, subtraction, shapes, and patterns</p>
          </div>
          <div class="card-footer">
            <a href="#topics?grade=1" class="btn btn-action">View Topics <i style="font-style: normal;">→</i></a>
          </div>
        </div>
        
        <div class="card fade-in" style="animation-delay: 0.2s">
          <div class="card-header" style="background: linear-gradient(135deg, #2196F3, #0D47A1);">
            <h3>2nd Grade</h3>
          </div>
          <div class="card-body">
            <p>Addition, subtraction, basic geometry, and measurement</p>
          </div>
          <div class="card-footer">
            <a href="#topics?grade=2" class="btn btn-action">View Topics <i style="font-style: normal;">→</i></a>
          </div>
        </div>
        
        <div class="card fade-in" style="animation-delay: 0.3s">
          <div class="card-header" style="background: linear-gradient(135deg, #9C27B0, #4A148C);">
            <h3>3rd Grade</h3>
          </div>
          <div class="card-body">
            <p>Multiplication, division, fractions, and area</p>
          </div>
          <div class="card-footer">
            <a href="#topics?grade=3" class="btn btn-action">View Topics <i style="font-style: normal;">→</i></a>
          </div>
        </div>
        
        <div class="card fade-in" style="animation-delay: 0.4s">
          <div class="card-header" style="background: linear-gradient(135deg, #FF9800, #E65100);">
            <h3>4th Grade</h3>
          </div>
          <div class="card-body">
            <p>Multi-digit arithmetic, factors, and geometry</p>
          </div>
          <div class="card-footer">
            <a href="#topics?grade=4" class="btn btn-action">View Topics <i style="font-style: normal;">→</i></a>
          </div>
        </div>
        
        <div class="card fade-in" style="animation-delay: 0.5s">
          <div class="card-header" style="background: linear-gradient(135deg, #E91E63, #880E4F);">
            <h3>5th Grade</h3>
          </div>
          <div class="card-body">
            <p>Decimals, fractions, and volume</p>
          </div>
          <div class="card-footer">
            <a href="#topics?grade=5" class="btn btn-action">View Topics <i style="font-style: normal;">→</i></a>
          </div>
        </div>
        
        <div class="card fade-in" style="animation-delay: 0.6s">
          <div class="card-header" style="background: linear-gradient(135deg, #00BCD4, #006064);">
            <h3>6th Grade</h3>
          </div>
          <div class="card-body">
            <p>Ratios, equations, and statistical distributions</p>
          </div>
          <div class="card-footer">
            <a href="#topics?grade=6" class="btn btn-action">View Topics <i style="font-style: normal;">→</i></a>
          </div>
        </div>
        
        <div class="card fade-in" style="animation-delay: 0.7s">
          <div class="card-header" style="background: linear-gradient(135deg, #8BC34A, #33691E);">
            <h3>7th Grade</h3>
          </div>
          <div class="card-body">
            <p>Proportional relationships, expressions, and probability</p>
          </div>
          <div class="card-footer">
            <a href="#topics?grade=7" class="btn btn-action">View Topics <i style="font-style: normal;">→</i></a>
          </div>
        </div>
        
        <div class="card fade-in" style="animation-delay: 0.8s">
          <div class="card-header" style="background: linear-gradient(135deg, #673AB7, #311B92);">
            <h3>8th Grade</h3>
          </div>
          <div class="card-body">
            <p>Linear equations, functions, and geometric transformations</p>
          </div>
          <div class="card-footer">
            <a href="#topics?grade=8" class="btn btn-action">View Topics <i style="font-style: normal;">→</i></a>
          </div>
        </div>
      </div>
    </main>
    
    <footer>
      <div class="container">
        <p>&copy; 2023 MathOrGame | <a href="https://ko-fi.com" target="_blank">Support Us</a></p>
      </div>
    </footer>
  `,setTimeout(()=>{hm()},100),mm()}function am(n){const t=new URLSearchParams(n.split("?")[1]||"").get("grade")||"1",i=wr.grades[t]||{title:`${t}th Grade`,topics:{}},r=Object.entries(i.topics).map(([s,o])=>({id:s,name:o.title,description:o.description,icon:o.icon}));Si.innerHTML=`
    <header>
      <div class="container">
        <h1 class="logo"><a href="#" style="text-decoration: none; color: inherit;">MathOrGame</a></h1>
        <p class="tagline">Learn Math. Play Games.</p>
      </div>
    </header>
    
    <nav>
      <a href="#">Home</a>
      <a href="#topics">Topics</a>
      <a href="#about">About</a>
    </nav>
    
    <main class="container">
      <div class="welcome-section fade-in" style="padding-top: 30px; padding-bottom: 10px;">
        <h2>${i.title} Topics</h2>
        <p>Choose a topic to explore interactive math games designed for ${i.title} students.</p>
      </div>
      
      <div class="game-header fade-in" style="display: flex; justify-content: flex-start; margin: 10px 0 20px;">
        <a href="#" class="btn btn-back" aria-label="Back to Grades">
          <i class="icon-arrow">←</i><span class="btn-text">Back to Grades</span>
        </a>
      </div>
      
      <div class="grid">
        ${r.map((s,o)=>`
          <div class="card fade-in" style="animation-delay: ${.1*(o+1)}s">
            <div class="card-header">
              <h3>${s.icon} ${s.name}</h3>
            </div>
            <div class="card-body">
              <p>${s.description}</p>
            </div>
            <div class="card-footer">
              <a href="#games?grade=${t}&topic=${s.id}" class="btn btn-action">View Games <i style="font-style: normal;">→</i></a>
            </div>
          </div>
        `).join("")}
      </div>
    </main>
    
    <footer>
      <div class="container">
        <p>&copy; 2023 MathOrGame | <a href="https://ko-fi.com" target="_blank">Support Us</a></p>
      </div>
    </footer>
  `}function lm(n){console.log("GAMES PAGE HANDLER CALLED with path:",n);const e=new URLSearchParams(n.split("?")[1]||""),t=e.get("grade")||"1",i=e.get("topic")||"addition",r=wr.grades[t]||{title:`${t}th Grade`,topics:{}},s=r.topics[i]||{title:"Topic",games:[]},o=s.games||[];Si.innerHTML=`
    <header>
      <div class="container">
        <h1 class="logo"><a href="#" style="text-decoration: none; color: inherit;">MathOrGame</a></h1>
        <p class="tagline">Learn Math. Play Games.</p>
      </div>
    </header>
    
    <nav>
      <a href="#">Home</a>
      <a href="#topics">Topics</a>
      <a href="#about">About</a>
    </nav>
    
    <main class="container">
      <div class="welcome-section fade-in" style="padding-top: 30px; padding-bottom: 10px;">
        <h2>${r.title} - ${s.title}</h2>
        <p>Select a game below to start practicing your ${s.title.toLowerCase()} skills!</p>
      </div>
      
      <div class="game-header fade-in" style="display: flex; justify-content: flex-start; margin: 10px 0 20px;">
        <a href="#topics?grade=${t}" class="btn btn-back" aria-label="Back to Topics">
          <i class="icon-arrow">←</i><span class="btn-text">Back to Topics</span>
        </a>
      </div>
      
      <div class="grid">
        ${o.map((a,l)=>`
          <div class="card fade-in" style="animation-delay: ${.1*(l+1)}s">
            <div class="card-header">
              <h3>${a.name} ${a.unlocked?"":'<span style="font-size: 0.8em; margin-left: 5px;">🔒</span>'}</h3>
            </div>
            <div class="card-body">
              <p>${a.description}</p>
            </div>
            <div class="card-footer">
              <a href="${a.unlocked?`#game?id=${a.id}&grade=${t}&topic=${i}`:"#"}" 
                 class="btn ${a.unlocked?"btn-action":"btn-disabled"}" 
                 ${a.unlocked?"":"disabled"}>
                ${a.unlocked?'Play Game <i style="font-style: normal;">→</i>':"Coming Soon"}
              </a>
            </div>
          </div>
        `).join("")}
      </div>
    </main>
    
    <footer>
      <div class="container">
        <p>&copy; 2023 MathOrGame | <a href="https://ko-fi.com" target="_blank">Support Us</a></p>
      </div>
    </footer>
  `}function cm(n){console.log("GAME PAGE HANDLER CALLED with path:",n);const e=new URLSearchParams(n.split("?")[1]||""),t=e.get("id")||"dungeon-escape",i=e.get("grade")||"1",r=e.get("topic")||"addition";console.log("Game page loaded for game ID:",t);let s=wr.gameInfo[t]||{title:"Game",description:"Game description"};t==="dungeon-escape"&&r==="counting"&&(s=wr.gameInfo["number-adventure"]||{title:"Number Adventure",description:"Embark on a magical journey, counting treasures to open castle doors!"}),Si.innerHTML=`
    <header>
      <div class="container">
        <h1 class="logo"><a href="#" style="text-decoration: none; color: inherit;">MathOrGame</a></h1>
        <p class="tagline">Learn Math. Play Games.</p>
      </div>
    </header>
    
    <nav>
      <a href="#">Home</a>
      <a href="#topics">Topics</a>
      <a href="#about">About</a>
    </nav>
    
    <main class="container">
      <div class="welcome-section fade-in" style="padding-top: 30px; padding-bottom: 10px;">
        <h2 style="font-size: 2.4rem;">${s.title}</h2>
        <p style="font-size: 1.1rem; margin-bottom: 10px;">${s.description}</p>
      </div>
      
      <div class="game-header fade-in" style="display: flex; justify-content: space-between; align-items: center; margin: 10px 0 20px;">
        <a href="#games?grade=${i}&topic=${r}" class="btn btn-back" aria-label="Back">
          <i class="icon-arrow">←</i>
        </a>
        <div class="score-display">Score: <span id="score">0</span></div>
      </div>
      
      <div class="game-container fade-in">
        <div id="game-canvas" style="width: 100%; height: 100%; position: relative;"></div>
      </div>
      
      <div id="game-controls" class="fade-in">
        <div id="question-container">Loading question...</div>
        <div style="display: flex; justify-content: center; align-items: center; flex-wrap: wrap;">
          <input type="text" id="answer-input" placeholder="Your answer..." autocomplete="off">
          <button id="submit-answer" class="btn btn-action">Submit Answer <i style="font-style: normal;">✓</i></button>
        </div>
      </div>
    </main>
    
    <footer>
      <div class="container">
        <p>&copy; 2023 MathOrGame | <a href="https://ko-fi.com" target="_blank">Support Us</a></p>
      </div>
    </footer>
  `,console.log("Game page HTML content set, gameId:",t);const o=document.getElementById("game-canvas");o&&(console.log("Setting game canvas base styles"),o.style.width="100%",o.style.height="100%",o.style.minHeight="500px",o.style.backgroundColor="#f0f5ff"),console.log("Preparing to initialize game:",t),requestAnimationFrame(()=>{console.log("Initializing game after frame render, gameId:",t);try{um(t)}catch(a){console.error("Failed to initialize game:",a),document.getElementById("question-container").textContent="Error loading game. Please try refreshing the page."}})}function dm(){Si.innerHTML=`
    <header>
      <div class="container">
        <h1 class="logo"><a href="#" style="text-decoration: none; color: inherit;">MathOrGame</a></h1>
        <p class="tagline">Learn Math. Play Games.</p>
      </div>
    </header>
    
    <nav>
      <a href="#">Home</a>
      <a href="#topics">Topics</a>
      <a href="#about">About</a>
    </nav>
    
    <main class="container">
      <div class="welcome-section fade-in">
        <h2>About MathOrGame</h2>
        <p>Transforming math education through interactive 3D games</p>
      </div>
      
      <div class="advanced-section fade-in" style="animation-delay: 0.2s">
        <h3 style="font-size: 1.5rem; margin-bottom: 15px; color: var(--primary-color);">Our Mission</h3>
        <p style="margin-bottom: 20px;">MathOrGame is an interactive 3D platform designed to make learning mathematics fun and engaging for students in grades 1-8. Our mission is to transform math education by combining rigorous curriculum standards with the engaging elements of game design.</p>
        
        <h3 style="font-size: 1.5rem; margin: 25px 0 15px; color: var(--primary-color);">How It Works</h3>
        <p style="margin-bottom: 20px;">Each game is carefully designed to teach specific math concepts through interactive 3D environments. As students play, they practice mathematical skills and develop problem-solving abilities in an engaging and stress-free environment.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 30px 0;">
          <div style="text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 15px; color: var(--gradient-start);">🎮</div>
            <h4 style="margin-bottom: 10px; font-size: 1.2rem;">Interactive Games</h4>
            <p>Engaging 3D environments that make math concepts come alive</p>
          </div>
          
          <div style="text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 15px; color: var(--gradient-mid);">🧠</div>
            <h4 style="margin-bottom: 10px; font-size: 1.2rem;">Curriculum Aligned</h4>
            <p>Games designed to match grade-specific educational standards</p>
          </div>
          
          <div style="text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 15px; color: var(--gradient-end);">📊</div>
            <h4 style="margin-bottom: 10px; font-size: 1.2rem;">Progress Tracking</h4>
            <p>Track learning achievements and improvement over time</p>
          </div>
        </div>
        
        <h3 style="font-size: 1.5rem; margin: 25px 0 15px; color: var(--primary-color);">Contact Us</h3>
        <p>Have questions or feedback? We'd love to hear from you!</p>
        <p style="margin-top: 10px;">Email: <a href="mailto:contact@mathorgame.com" style="color: var(--primary-color); text-decoration: none; font-weight: 600;">contact@mathorgame.com</a></p>
      </div>
      
      <div style="text-align: center; margin: 30px 0;">
        <a href="#" class="btn btn-back fade-in" style="animation-delay: 0.4s" aria-label="Back to Home">
          <i class="icon-arrow">←</i><span class="btn-text">Back to Home</span>
        </a>
      </div>
    </main>
    
    <footer>
      <div class="container">
        <p>&copy; 2023 MathOrGame | <a href="https://ko-fi.com" target="_blank">Support Us</a></p>
      </div>
    </footer>
  `}function hm(){const n=document.getElementById("bg-canvas");if(!n){console.warn("Background canvas element not found");return}const e=new Qt,t=new ct(75,window.innerWidth/window.innerHeight,.1,1e3);t.position.z=10;const i=new Jt({canvas:n,alpha:!0,antialias:!0});i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(Math.min(window.devicePixelRatio,2));const r=50,s=new Et,o=new Ct(.1,8,8);for(let c=0;c<r;c++){const f=new Ft({color:new Re(`hsl(${Math.floor(Math.random()*60)+180}, 40%, 70%)`),transparent:!0,opacity:.5}),u=new Ee(o,f),h=8+Math.random()*10,p=ln.randFloatSpread(360),g=ln.randFloatSpread(180);u.position.x=h*Math.sin(p)*Math.cos(g),u.position.y=h*Math.sin(p)*Math.sin(g),u.position.z=h*Math.cos(p),u.rotation.x=Math.random()*Math.PI,u.rotation.y=Math.random()*Math.PI,u.userData={speed:{x:ln.randFloatSpread(.02),y:ln.randFloatSpread(.02),z:ln.randFloatSpread(.02)},rotation:{x:ln.randFloatSpread(.005),y:ln.randFloatSpread(.005)}},s.add(u)}e.add(s);function a(){requestAnimationFrame(a),s.children.forEach(c=>{if(c.position.x+=c.userData.speed.x,c.position.y+=c.userData.speed.y,c.position.z+=c.userData.speed.z,c.rotation.x+=c.userData.rotation.x,c.rotation.y+=c.userData.rotation.y,Math.abs(c.position.x)>20||Math.abs(c.position.y)>20||Math.abs(c.position.z)>20){const u=ln.randFloatSpread(360),h=ln.randFloatSpread(180);c.position.x=15*Math.sin(u)*Math.cos(h),c.position.y=15*Math.sin(u)*Math.sin(h),c.position.z=15*Math.cos(u)}}),t.position.x=Math.sin(Date.now()*1e-4)*1.5,t.position.y=Math.cos(Date.now()*1e-4)*1.5,t.lookAt(e.position),i.render(e,t)}function l(){t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",l),a()}function um(n){console.log("Initializing game:",n);const e=document.getElementById("game-canvas"),t=document.getElementById("question-container"),i=document.getElementById("answer-input"),r=document.getElementById("submit-answer"),s=document.getElementById("score"),a=new URLSearchParams(window.location.hash.split("?")[1]||"").get("topic")||"";if(console.log("Game elements found:",{gameCanvas:!!e,questionContainer:!!t,answerInput:!!i,submitButton:!!r,scoreElement:!!s}),!e||!t||!i||!r||!s){console.error("Missing game elements:",{gameCanvas:e,questionContainer:t,answerInput:i,submitButton:r,scoreElement:s}),document.querySelector(".game-container")&&(document.querySelector(".game-container").innerHTML=`
        <div style="color: red; padding: 20px; text-align: center;">
          <h3>Error: Game could not be initialized</h3>
          <p>Some required game elements were not found.</p>
        </div>
      `);return}const l=e.parentElement;l&&(l.style.display="block",l.style.height="500px",l.style.minHeight="500px",l.style.backgroundColor="#f0f0f0",l.style.border="1px solid #ddd",l.style.borderRadius="8px",l.style.overflow="hidden"),e.style.width="100%",e.style.height="100%",e.style.minHeight="500px",e.innerHTML="",console.log("Game canvas dimensions:",{clientWidth:e.clientWidth,clientHeight:e.clientHeight,offsetWidth:e.offsetWidth,offsetHeight:e.offsetHeight}),t.textContent="Loading game...";try{switch(n){case"dungeon-escape":a==="counting"?(console.log("Starting Number Adventure game (counting version of Dungeon Escape)"),im(e,t,i,r,s)):(console.log("Starting Dungeon Escape game"),Pa(e,t,i,r,s));break;case"shape-builder":console.log("Starting Shape Builder game"),jp(e,t,i,r,s);break;case"volume-quest":console.log("Starting Volume Quest game"),Zp(e,t,i,r,s);break;case"pattern-puzzle":console.log("Starting Pattern Puzzle game"),Kp(e,t,i,r,s);break;case"space-shooter":console.log("Starting Space Shooter game"),Qp(e,t,i,r,s);break;case"times-tables":console.log("Starting Times Tables game"),Jp(e,t,i,r,s);break;case"decimal-dash":console.log("Starting Decimal Dash game"),em(e,t,i,r,s);break;case"number-line":console.log("Starting Number Line game"),tm(e,t,i,r,s);break;case"count-objects":console.log("Starting Count Objects game"),nm(e,t,i,r,s);break;default:console.log("Unknown game ID:",n,"- Using Dungeon Escape as fallback"),Pa(e,t,i,r,s)}console.log(`${n} initialized successfully`)}catch(c){console.error(`Error initializing game ${n}:`,c),t.textContent=`Error: Could not load game (${c.message})`,e.innerHTML=`
      <div style="color: red; padding: 20px; text-align: center;">
        <h3>Error: Game could not be loaded</h3>
        <p>${c.message}</p>
        <p>Please try refreshing the page.</p>
      </div>
    `}}function fm(){const n=()=>{const e=window.innerHeight*.01;document.documentElement.style.setProperty("--vh",`${e}px`)};n(),window.addEventListener("resize",n),window.addEventListener("orientationchange",n)}function pm(){setTimeout(()=>{window.dispatchEvent(new Event("resize"));const n=document.querySelector(".mobile-menu-toggle"),e=document.querySelector("nav");n&&e&&(n.classList.remove("active"),e.classList.remove("active"))},200)}function mm(){const n=document.querySelector(".mobile-menu-toggle"),e=document.querySelector("nav");n&&(n.addEventListener("touchstart",i=>{n.classList.toggle("active"),e.classList.toggle("active"),i.preventDefault()},{passive:!1}),n.addEventListener("click",i=>{n.classList.toggle("active"),e.classList.toggle("active"),i.preventDefault()}),document.addEventListener("click",i=>{e.classList.contains("active")&&!e.contains(i.target)&&!n.contains(i.target)&&(n.classList.remove("active"),e.classList.remove("active"))}),document.querySelectorAll("nav a").forEach(i=>{i.addEventListener("click",()=>{n.classList.remove("active"),e.classList.remove("active")})}))}rm();
