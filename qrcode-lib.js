/* Gerador de QR code offline (biblioteca autónoma) + leitura do QR/hash na URL */
// --------- QR CODE (pequeno gerador offline) ---------
// Baseado no trabalho de Kazuhiko Arase (qrcode-generator). Implementação compacta para QR simples.
function QR8bitByte(data){this.data=data;this.mode=1;this.getLength=function(){return this.data.length};this.write=function(buffer){for(let i=0;i<this.data.length;i++){buffer.put(this.data.charCodeAt(i),8)}}}
function QRBitBuffer(){this.buffer=[];this.length=0;this.get=function(i){const bufIndex=Math.floor(i/8);return((this.buffer[bufIndex]>>> (7-i%8))&1)==1};this.put=function(num,length){for(let i=0;i<length;i++){this.putBit(((num>>> (length-i-1))&1)==1)}};this.putBit=function(bit){const bufIndex=Math.floor(this.length/8);if(this.buffer.length<=bufIndex){this.buffer.push(0)}if(bit){this.buffer[bufIndex]|=(0x80>>> (this.length%8))}this.length++}}
const QRMath={EXP_TABLE:new Array(256),LOG_TABLE:new Array(256),glog(n){if(n<1)throw new Error("glog");return this.LOG_TABLE[n]},gexp(n){while(n<0)n+=255;while(n>=256)n-=255;return this.EXP_TABLE[n]}};
for(let i=0;i<8;i++)QRMath.EXP_TABLE[i]=1<<i;
for(let i=8;i<256;i++)QRMath.EXP_TABLE[i]=QRMath.EXP_TABLE[i-4]^QRMath.EXP_TABLE[i-5]^QRMath.EXP_TABLE[i-6]^QRMath.EXP_TABLE[i-8];
for(let i=0;i<255;i++)QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]]=i;
function QRPolynomial(num,shift){let offset=0;while(offset<num.length&&num[offset]==0)offset++;this.num=new Array(num.length-offset+shift);for(let i=0;i<num.length-offset;i++)this.num[i]=num[i+offset];}
QRPolynomial.prototype.get=function(i){return this.num[i]};QRPolynomial.prototype.getLength=function(){return this.num.length};
QRPolynomial.prototype.multiply=function(e){const num=new Array(this.getLength()+e.getLength()-1).fill(0);for(let i=0;i<this.getLength();i++)for(let j=0;j<e.getLength();j++)num[i+j]^=QRMath.gexp(QRMath.glog(this.get(i))+QRMath.glog(e.get(j)));return new QRPolynomial(num,0)};
QRPolynomial.prototype.mod=function(e){if(this.getLength()-e.getLength()<0)return this;const ratio=QRMath.glog(this.get(0))-QRMath.glog(e.get(0));const num=this.num.slice();for(let i=0;i<e.getLength();i++)num[i]^=QRMath.gexp(QRMath.glog(e.get(i))+ratio);return new QRPolynomial(num,0).mod(e)};
function QRRSBlock(totalCount,dataCount){this.totalCount=totalCount;this.dataCount=dataCount}
const QRRSBlockTable={1:[[26,19]],2:[[44,34]],3:[[70,55]],4:[[100,80]]}; // versão 1-4, nível M
function getRSBlocks(typeNumber){const table=QRRSBlockTable[typeNumber];return table.map(t=>new QRRSBlock(t[0],t[1]))}
function QRUtil(){} 
QRUtil.getBCHTypeInfo=function(data){let d=data<<10;const g=0b10100110111;while(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(g)>=0)d^=(g<<(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(g)));return((data<<10)|d)^0b101010000010010};
QRUtil.getBCHDigit=function(data){let digit=0;while(data!=0){digit++;data>>>=1}return digit};
QRUtil.getMask=function(maskPattern,i,j){switch(maskPattern){case 0:return(i+j)%2==0;case 1:return i%2==0;case 2:return j%3==0;case 3:return(i+j)%3==0;case 4:return(Math.floor(i/2)+Math.floor(j/3))%2==0;case 5:return(i*j)%2+(i*j)%3==0;case 6:return((i*j)%2+(i*j)%3)%2==0;case 7:return((i*j)%3+(i+j)%2)%2==0;default:throw new Error("mask")}}
QRUtil.getErrorCorrectPolynomial=function(errorCorrectLength){let a=new QRPolynomial([1],0);for(let i=0;i<errorCorrectLength;i++)a=a.multiply(new QRPolynomial([1,QRMath.gexp(i)],0));return a};
QRUtil.getLengthInBits=function(mode,type){if(1<=type&&type<10)return 8;throw new Error("type")};
function QRCode(typeNumber,maskPattern){this.typeNumber=typeNumber;this.maskPattern=maskPattern;this.modules=null;this.moduleCount=0;this.dataCache=null;this.dataList=[]}
QRCode.prototype.addData=function(data){this.dataList.push(new QR8bitByte(data));this.dataCache=null};
QRCode.prototype.isDark=function(r,c){if(this.modules[r][c]!=null)return this.modules[r][c];return false};
QRCode.prototype.getModuleCount=function(){return this.moduleCount};
QRCode.prototype.make=function(){this.makeImpl(false,this.getBestMaskPattern())};
QRCode.prototype.makeImpl=function(test,mask){this.moduleCount=this.typeNumber*4+17;this.modules=new Array(this.moduleCount);for(let r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount).fill(null)}
this.setupPositionProbePattern(0,0);this.setupPositionProbePattern(this.moduleCount-7,0);this.setupPositionProbePattern(0,this.moduleCount-7);
this.setupTimingPattern();this.setupTypeInfo(test,mask);
if(this.dataCache==null)this.dataCache=QRCode.createData(this.typeNumber,this.dataList);
this.mapData(this.dataCache,mask)};
QRCode.prototype.setupPositionProbePattern=function(row,col){for(let r=-1;r<=7;r++)for(let c=-1;c<=7;c++){if(row+r<=-1||this.moduleCount<=row+r||col+c<=-1||this.moduleCount<=col+c)continue;
if((0<=r&&r<=6&&(c==0||c==6))||(0<=c&&c<=6&&(r==0||r==6))||(2<=r&&r<=4&&2<=c&&c<=4))this.modules[row+r][col+c]=true;else this.modules[row+r][col+c]=false}}
QRCode.prototype.getBestMaskPattern=function(){let min=1e9;let best=0;for(let i=0;i<8;i++){this.makeImpl(true,i);let lost=QRCode.getLostPoint(this);if(lost<min){min=lost;best=i}}return best}
QRCode.prototype.setupTimingPattern=function(){for(let i=8;i<this.moduleCount-8;i++){if(this.modules[i][6]==null)this.modules[i][6]=(i%2==0);if(this.modules[6][i]==null)this.modules[6][i]=(i%2==0)}}
QRCode.prototype.setupTypeInfo=function(test,mask){const data=(1<<3)|mask;let bits=QRUtil.getBCHTypeInfo(data);for(let i=0;i<15;i++){const mod=!test&&((bits>>i)&1)==1;
if(i<6)this.modules[i][8]=mod;else if(i<8)this.modules[i+1][8]=mod;else this.modules[this.moduleCount-15+i][8]=mod}
for(let i=0;i<15;i++){const mod=!test&&((bits>>i)&1)==1;
if(i<8)this.modules[8][this.moduleCount-i-1]=mod;else if(i<9)this.modules[8][15-i-1+1]=mod;else this.modules[8][15-i-1]=mod}
this.modules[this.moduleCount-8][8]=!test}
QRCode.prototype.mapData=function(data,mask){let inc=-1;let row=this.moduleCount-1;let bitIndex=7;let byteIndex=0;
for(let col=this.moduleCount-1;col>0;col-=2){if(col==6)col--;
while(true){for(let c=0;c<2;c++){if(this.modules[row][col-c]==null){let dark=false;
if(byteIndex<data.length){dark=((data[byteIndex]>>>bitIndex)&1)==1}
const maskBit=QRUtil.getMask(mask,row,col-c);this.modules[row][col-c]=maskBit?!dark:dark;bitIndex--;if(bitIndex==-1){byteIndex++;bitIndex=7}}}
row+=inc;if(row<0||this.moduleCount<=row){row-=inc;inc=-inc;break}}}}
QRCode.createData=function(type,dataList){const rsBlocks=getRSBlocks(type);const buffer=new QRBitBuffer();
for(let i=0;i<dataList.length;i++){const data=dataList[i];buffer.put(data.mode,4);buffer.put(data.getLength(),QRUtil.getLengthInBits(data.mode,type));data.write(buffer)}
// terminator
let totalDataCount=0;for(let i=0;i<rsBlocks.length;i++)totalDataCount+=rsBlocks[i].dataCount;
if(buffer.length+4<=totalDataCount*8)buffer.put(0,4);
while(buffer.length%8!=0)buffer.putBit(false);
// pad
const PAD0=0xEC,PAD1=0x11;
while(buffer.length/8<totalDataCount){buffer.put(PAD0,8);if(buffer.length/8>=totalDataCount)break;buffer.put(PAD1,8)}
return QRCode.createBytes(buffer,rsBlocks)};
QRCode.createBytes=function(buffer,rsBlocks){let offset=0;let maxDc=0,maxEc=0;const dcdata=[],ecdata=[];
for(let r=0;r<rsBlocks.length;r++){const dcCount=rsBlocks[r].dataCount;const ecCount=rsBlocks[r].totalCount-dcCount;maxDc=Math.max(maxDc,dcCount);maxEc=Math.max(maxEc,ecCount);
dcdata[r]=new Array(dcCount);for(let i=0;i<dcdata[r].length;i++)dcdata[r][i]=0xff&buffer.buffer[i+offset];offset+=dcCount;
const rsPoly=QRUtil.getErrorCorrectPolynomial(ecCount);const rawPoly=new QRPolynomial(dcdata[r],rsPoly.getLength()-1);const modPoly=rawPoly.mod(rsPoly);
ecdata[r]=new Array(rsPoly.getLength()-1);for(let i=0;i<ecdata[r].length;i++){const modIndex=i+modPoly.getLength()-ecdata[r].length;ecdata[r][i]=(modIndex>=0)?modPoly.get(modIndex):0}}
let total=0;for(let r=0;r<rsBlocks.length;r++)total+=rsBlocks[r].totalCount;
const data=new Array(total);let index=0;
for(let i=0;i<maxDc;i++)for(let r=0;r<rsBlocks.length;r++)if(i<dcdata[r].length)data[index++]=dcdata[r][i];
for(let i=0;i<maxEc;i++)for(let r=0;r<rsBlocks.length;r++)if(i<ecdata[r].length)data[index++]=ecdata[r][i];
return data};
QRCode.getLostPoint=function(qr){const mc=qr.getModuleCount();let lost=0;
for(let r=0;r<mc;r++)for(let c=0;c<mc;c++){let same=0;const dark=qr.isDark(r,c);
for(let dr=-1;dr<=1;dr++)for(let dc=-1;dc<=1;dc++){if(dr==0&&dc==0)continue;const rr=r+dr,cc=c+dc;if(rr<0||mc<=rr||cc<0||mc<=cc)continue;if(dark==qr.isDark(rr,cc))same++}
if(same>5)lost+=3+same-5}
for(let r=0;r<mc-1;r++)for(let c=0;c<mc-1;c++){let cnt=0;if(qr.isDark(r,c))cnt++;if(qr.isDark(r+1,c))cnt++;if(qr.isDark(r,c+1))cnt++;if(qr.isDark(r+1,c+1))cnt++;if(cnt==0||cnt==4)lost+=3}
for(let r=0;r<mc;r++)for(let c=0;c<mc-6;c++){if(qr.isDark(r,c)&&!qr.isDark(r,c+1)&&qr.isDark(r,c+2)&&qr.isDark(r,c+3)&&qr.isDark(r,c+4)&&!qr.isDark(r,c+5)&&qr.isDark(r,c+6))lost+=40}
for(let c=0;c<mc;c++)for(let r=0;r<mc-6;r++){if(qr.isDark(r,c)&&!qr.isDark(r+1,c)&&qr.isDark(r+2,c)&&qr.isDark(r+3,c)&&qr.isDark(r+4,c)&&!qr.isDark(r+5,c)&&qr.isDark(r+6,c))lost+=40}
let darkCount=0;for(let r=0;r<mc;r++)for(let c=0;c<mc;c++)if(qr.isDark(r,c))darkCount++;
const ratio=Math.abs(100*darkCount/mc/mc-50)/5;lost+=ratio*10;return lost};
function drawQrToCanvas(text, canvas){
  if(!canvas) return;
  // escolhe versão 4 (aguenta mais texto); se falhar, tenta 3/2/1
  const versions=[4,3,2,1];
  let qr=null;
  for(const v of versions){
    try{qr=new QRCode(v,0);qr.addData(text);qr.make();break;}catch(e){qr=null}
  }
  if(!qr) return;
  const ctx=canvas.getContext("2d");
  const mc=qr.getModuleCount();
  const size=canvas.width;
  const cell=Math.floor(size/mc);
  ctx.clearRect(0,0,size,size);
  ctx.fillStyle="#fff";
  ctx.fillRect(0,0,size,size);
  for(let r=0;r<mc;r++){
    for(let c=0;c<mc;c++){
      ctx.fillStyle=qr.isDark(r,c) ? "#111827" : "#ffffff";
      ctx.fillRect(c*cell, r*cell, cell, cell);
    }
  }
}



function maybeImportFromHash() {
  const h = window.location.hash || "";
  const m = h.match(/#favs=([A-Za-z0-9\-_]+)/);
  if (!m) return;

  const obj = decodeFavState(m[1]);
  if (!obj) return;

  const t = window.__IMPORT_T || { ask: "Import?", yes: "Import", no: "Ignore" };

  // UI simples sem confirmação complexa: confirm() é suficiente e funciona offline
  const ok = confirm(t.ask);
  if (ok) {
    try {
      if (obj.lang) setLanguage(obj.lang);
    } catch (e) { console.warn(e); }
    favoritos = new Set(obj.favs);
    saveFavoritos();
    renderAtual();
try{ toggleEventsCalendar(false); }catch(e){ console.warn(e); }
    alert("✅ " + (currentLang === "pt" ? "Favoritos importados." : currentLang === "es" ? "Favoritos importados." : currentLang === "fr" ? "Favoris importés." : "Favourites imported."));
  }

  // Limpa hash para não repetir
  history.replaceState(null, "", window.location.href.split("#")[0]);
}


