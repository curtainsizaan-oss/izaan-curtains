var CATS=["Curtains","Blackout","Sheer","Wallpapers","Roller Blinds","Zebra Blinds","Motorized"];
var TILES=[["Curtains","Velvet, linen and drapes","#6b2c3a"],["Wallpapers","Textures, damask and modern prints","#3c5a49"],["Roller Blinds","Roller and zebra blinds","#5d6166"],["Motorized","Remote and smart control","#3a3d42"]];
var DEF=[
{id:"d1",name:"Velvet Drape",cat:"Curtains",desc:"Rich, heavy velvet with a luxurious fall.",c:"#6b2c3a"},
{id:"d2",name:"Linen Weave",cat:"Curtains",desc:"Natural textured linen in soft neutrals.",c:"#bdb7a9"},
{id:"d3",name:"Night Blackout",cat:"Blackout",desc:"Total light control for bedrooms and media rooms.",c:"#2c2f3a"},
{id:"d4",name:"Cloud Sheer",cat:"Sheer",desc:"Airy sheers that soften daylight beautifully.",c:"#e6e3dc"},
{id:"d8",name:"Damask Wallpaper",cat:"Wallpapers",desc:"Classic patterns for feature walls.",c:"#8a8f7a"},
{id:"d9",name:"Textured Wallpaper",cat:"Wallpapers",desc:"Subtle texture for a modern, calm finish.",c:"#a9a59c"},
{id:"d6",name:"Classic Roller",cat:"Roller Blinds",desc:"Clean, minimal roller blinds in many fabrics.",c:"#7d8b8f"},
{id:"d7",name:"Zebra Duo",cat:"Zebra Blinds",desc:"Alternating sheer and solid bands for adjustable light.",c:"#b3b3ad"},
{id:"d5",name:"Smart Track Curtain",cat:"Motorized",desc:"Remote-controlled motorized curtain system.",c:"#4d5258"}];
var SLD=[{e:"Luxury Curtains",h:"Drapes That Define a Room",p:"Velvet, linen and sheer curtains, tailored to your windows.",c:"Curtains",b:"#4a4540"},{e:"Motorized Curtains",h:"Elegance at the Touch of a Button",p:"Silent motorized tracks with remote, wall and smart control.",c:"Motorized",b:"#3a3d42"},{e:"Blinds",h:"Light, Perfectly Balanced",p:"Roller and zebra blinds for clean, modern interiors.",c:"Roller Blinds",b:"#4b4f52"},{e:"Wallpapers",h:"Walls With Character",p:"Textured and patterned wallpapers for feature walls.",c:"Wallpapers",b:"#46433d"}];
/* ---- Data layer: all reads/writes go through Store. To move to Firebase later,
   replace Store.get/Store.set (see README.md) — nothing else needs to change. ---- */
var Store={get:function(k){return localStorage.getItem(k)},set:function(k,v){localStorage.setItem(k,v)}};
function ld(k,d){try{var v=Store.get(k);return v?JSON.parse(v):d}catch(e){return d}}
function sv(k,v){try{Store.set(k,JSON.stringify(v));return true}catch(e){return false}}
var S=Object.assign({wa:"",ph:"",em:"",ad:"",mp:"",pin:""},ld("iz_s",{})),P=ld("iz_p",null)||DEF.slice(),G=ld("iz_g",[]).map(function(g){return typeof g=="string"?{s:g,c:"Gallery"}:g}),SL=ld("iz_sl",[]),LG=ld("iz_logo",""),cat="All",gcat="All",cur=0,timer;
if(!P.some(function(p){return p.cat=="Wallpapers"}))P=P.concat(DEF.filter(function(p){return p.cat=="Wallpapers"}));
var $=function(i){return document.getElementById(i)};
function esc(s){var d=document.createElement("div");d.textContent=s;return d.innerHTML}
function wnum(){return (S.wa||"").replace(/\D/g,"")}
function waLink(t){return "https://wa.me/"+wnum()+"?text="+encodeURIComponent(t)}
function pat(c){return c=="Wallpapers"?"wall":"drape"}
function render(){
$("brand").innerHTML=LG?'<img src="'+LG+'" alt="IZAAN CURTAINS">':'<img src="assets/logo.png" alt="IZAAN CURTAINS" onerror="this.outerHTML=\'<span class=&quot;wm&quot;>IZAAN<b> ·</b> CURTAINS</span>\'">';
$("tiles").innerHTML=TILES.map(function(t){var n=t[0]=="Roller Blinds"?"Blinds":t[0];return '<a class="tile rv" href="#collections" data-pre="'+t[0]+'"><div class="bg '+pat(t[0])+'" style="background-color:'+t[2]+'"></div><div><h3>'+n+'</h3><p>'+t[1]+'</p></div></a>'}).join("");
var t='<button class="tab'+(cat=="All"?" on":"")+'" data-c="All">All</button>';
CATS.forEach(function(c){t+='<button class="tab'+(cat==c?" on":"")+'" data-c="'+c+'">'+c+'</button>'});
$("tabs").innerHTML=t;
$("grid").innerHTML=P.filter(function(p){return cat=="All"||p.cat==cat}).map(function(p){
var st=p.img?'background-image:url('+p.img+')':'background-color:#ebe8e2';
return '<div class="card rv in"><div class="ph'+(p.img?"":" "+pat(p.cat))+'" style="'+st+'"></div><div class="b"><div class="tag">'+esc(p.cat)+'</div><h3>'+esc(p.name)+'</h3><p>'+esc(p.desc||"")+'</p><a href="#quote" data-pre="'+esc(p.cat)+'">Get a quote →</a></div></div>'}).join("");
renderGal();slidesInit();
$("qc").innerHTML=CATS.map(function(c){return "<option>"+c+"</option>"}).join("");
$("pc").innerHTML=$("qc").innerHTML;$("gc").innerHTML=$("qc").innerHTML;
var i="";
if(S.ph)i+='<p><b>Phone</b>'+esc(S.ph)+'</p>';
if(S.wa)i+='<p><b>WhatsApp</b>+'+esc(wnum())+'</p>';
if(S.em)i+='<p><b>Email</b>'+esc(S.em)+'</p>';
if(S.ad)i+='<p><b>Address</b>'+esc(S.ad)+'</p>';
$("info").innerHTML=i||'<p>Contact details will appear here once added in the admin panel.</p>';
var q=S.mp||"IZAAN CURTAINS Kerala";
$("map").href=/^https?:/.test(q)?q:"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(q);
$("wa").href=waLink("Hello IZAAN CURTAINS, I’d like to enquire about your products.");
$("yr").textContent=new Date().getFullYear();reveal()}
function vis(){return G.length?G.filter(function(g){return gcat=="All"||g.c==gcat}):[]}
function renderGal(){
var cs=["All"].concat(CATS.filter(function(c){return G.some(function(g){return g.c==c})}));
$("gtabs").innerHTML=G.length?cs.map(function(c){return '<button class="tab'+(gcat==c?" on":"")+'" data-g="'+c+'">'+c+'</button>'}).join(""):"";
$("gal").innerHTML=G.length?vis().map(function(g,i){return '<div class="gi" data-i="'+i+'" data-c="'+esc(g.c)+'" style="background-image:url('+g.s+')"></div>'}).join(""):
DEF.slice(0,8).map(function(p){return '<div class="gi '+pat(p.cat)+'" data-c="'+p.cat+'" style="background-color:#ebe8e2"></div>'}).join("")}
function reveal(){var o=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");o.unobserve(x.target)}})},{threshold:.12});
document.querySelectorAll(".rv:not(.in)").forEach(function(el){o.observe(el)})}
/* slideshow */
function slidesInit(){
$("slides").innerHTML=SLD.map(function(d,i){return SL[i]?'<div class="sl" style="background-image:url('+SL[i]+')"></div>':'<div class="sl d" style="background-color:'+d.b+'"></div>'}).join("");
$("dots").innerHTML=SLD.map(function(_,i){return '<button data-s="'+i+'" aria-label="Slide '+(i+1)+'"></button>'}).join("");
go(0)}
function loadAssetSlides(){SLD.forEach(function(d,i){if(SL[i])return;var im=new Image();im.onload=function(){var el=document.querySelectorAll(".sl")[i];if(el){el.classList.remove("d");el.style.backgroundImage="url(assets/slide-"+(i+1)+".jpg)"}};im.src="assets/slide-"+(i+1)+".jpg"})}
function go(i){var s=document.querySelectorAll(".sl"),d=document.querySelectorAll("#dots button");if(!s.length)return;cur=(i+s.length)%s.length;
s.forEach(function(x,k){x.classList.toggle("on",k==cur)});d.forEach(function(x,k){x.classList.toggle("on",k==cur)});
var D=SLD[cur];$("ce").textContent=D.e;$("ch").textContent=D.h;$("cp").textContent=D.p;$("cb").dataset.pre=D.c;$("cb").textContent="Explore "+D.e;
var w=$("cw");w.classList.remove("ani");void w.offsetWidth;w.classList.add("ani");
clearInterval(timer);if(!matchMedia("(prefers-reduced-motion:reduce)").matches)timer=setInterval(function(){go(cur+1)},4000)}
$("pv").onclick=function(){go(cur-1)};$("nx").onclick=function(){go(cur+1)};
var tx=0;$("top").addEventListener("touchstart",function(e){tx=e.touches[0].clientX},{passive:true});
$("top").addEventListener("touchend",function(e){var d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>50)go(cur+(d<0?1:-1))});
/* nav + clicks */
function menu(o){$("lk").classList.toggle("open",o);$("bg").classList.toggle("on",o);$("bg").setAttribute("aria-expanded",o)}
$("bg").onclick=function(){menu(!$("lk").classList.contains("open"))};
var lbL=[],lbI=0;
function lb(i){lbI=(i+lbL.length)%lbL.length;$("lb").children[1].src=lbL[lbI];$("lb").style.display="flex"}
document.addEventListener("click",function(e){var t=e.target;
if(t.closest("#lk a"))menu(false);
var tb=t.closest("#tabs .tab");if(tb){cat=tb.dataset.c;render();return}
var gt=t.closest("#gtabs .tab");if(gt){gcat=gt.dataset.g;renderGal();return}
var a=t.closest("[data-pre]");if(a){cat=a.dataset.pre=="Roller Blinds"||CATS.indexOf(a.dataset.pre)>-1?a.dataset.pre:"All";$("qc").value=a.dataset.pre;render()}
var ds=t.closest("[data-s]");if(ds)go(+ds.dataset.s);
var gi=t.closest(".gi");if(gi&&G.length){lbL=vis().map(function(g){return g.s});lb(+gi.dataset.i)}
if(t.id=="lp"){lb(lbI-1);return}if(t.id=="ln"){lb(lbI+1);return}
if(t.id=="lb"||t.tagName=="IMG"&&t.closest("#lb"))$("lb").style.display="none"});
document.addEventListener("keydown",function(e){if(e.key=="Escape")$("lb").style.display="none"});
$("qf").addEventListener("submit",function(e){e.preventDefault();
if(!wnum()){$("qm").textContent="WhatsApp number isn’t set yet. Add it in the admin panel to enable sending.";return}
var m="Hello IZAAN CURTAINS, I’d like a free quotation.\nName: "+$("qn").value+"\nPhone: "+$("qp").value+"\nProduct: "+$("qc").value+"\nQty: "+$("qw").value+"\nLocation: "+$("ql").value+"\nDetails: "+$("qd").value;
window.open(waLink(m),"_blank");$("qm").textContent="Opening WhatsApp…"});
/* admin */
var authed=false;
function route(){var a=location.hash=="#admin";$("site").classList.toggle("hide",a);$("admin").classList.toggle("hide",!a);if(a){gate();window.scrollTo(0,0)}}
function gate(){
if(authed){$("gate").classList.add("hide");$("dash").classList.remove("hide");fill();return}
$("dash").classList.add("hide");$("gate").classList.remove("hide");
$("gate").innerHTML=(S.pin?'<label>Enter passcode</label>':'<label>Create an admin passcode</label><p class="note">Stored only in this browser — it deters casual access but is not real security.</p>')+'<input id="pw" type="password"><button class="btn fill" id="go">'+(S.pin?"Unlock":"Set passcode")+'</button><div class="msg" id="gm"></div>';
$("go").onclick=function(){var v=$("pw").value;if(v.length<4){$("gm").textContent="Use at least 4 characters.";return}
if(!S.pin){S.pin=v;sv("iz_s",S);authed=true;gate()}else if(v===S.pin){authed=true;gate()}else $("gm").textContent="Incorrect passcode."}}
function fill(){$("sw").value=S.wa;$("sp").value=S.ph;$("se").value=S.em;$("sa").value=S.ad;$("sm").value=S.mp;lists()}
function lists(){
$("ll").innerHTML=LG?'<div class="row"><img src="'+LG+'" alt="" style="width:auto;height:46px"><button class="btn sm" data-dl="1">Remove</button></div>':'<p class="note">No logo uploaded yet — a text placeholder is shown in the header.</p>';
$("sll").innerHTML=SLD.map(function(d,i){return SL[i]?'<div class="row"><span style="display:flex;gap:10px;align-items:center"><img src="'+SL[i]+'" alt="">'+d.e+'</span><button class="btn sm" data-ds="'+i+'">Remove</button></div>':""}).join("");
$("pl").innerHTML=P.map(function(p){return '<div class="row"><span style="display:flex;gap:10px;align-items:center">'+(p.img?'<img src="'+p.img+'" alt="">':'<i class="'+pat(p.cat)+'" style="background-color:'+(p.c||"#b3b3ad")+'"></i>')+esc(p.name)+' · '+esc(p.cat)+'</span><button class="btn sm" data-dp="'+p.id+'">Delete</button></div>'}).join("");
$("gl").innerHTML=G.map(function(g,i){return '<div class="row"><span style="display:flex;gap:10px;align-items:center"><img src="'+g.s+'" alt="">'+esc(g.c)+'</span><button class="btn sm" data-dg="'+i+'">Delete</button></div>'}).join("")||'<p class="note">No photos yet — placeholders show until you upload.</p>'}
function save(){if(!(sv("iz_p",P)&&sv("iz_g",G)&&sv("iz_sl",SL)&&sv("iz_logo",LG)))alert("Browser storage is full or unavailable. Try fewer or smaller photos.");render();lists()}
$("ss").onclick=function(){S.wa=$("sw").value.trim();S.ph=$("sp").value.trim();S.em=$("se").value.trim();S.ad=$("sa").value.trim();S.mp=$("sm").value.trim();sv("iz_s",S);render();$("sms").textContent="Saved ✓"};
function shrink(f,w,type,cb){var r=new FileReader();r.onload=function(){var im=new Image();im.onload=function(){var s=Math.min(1,w/Math.max(im.width,im.height)),c=document.createElement("canvas");c.width=im.width*s;c.height=im.height*s;c.getContext("2d").drawImage(im,0,0,c.width,c.height);cb(type=="png"?c.toDataURL("image/png"):c.toDataURL("image/jpeg",.8))};im.src=r.result};r.readAsDataURL(f)}
$("lf").onchange=function(){var f=this.files[0];if(f)shrink(f,700,"png",function(d){LG=d;save()});this.value=""};
$("slf").onchange=function(){var f=this.files[0],k=+$("sls").value;if(f)shrink(f,1600,"jpg",function(d){SL[k]=d;save()});this.value=""};
$("pa").onclick=function(){var n=$("pn").value.trim();if(!n)return;var f=$("pf").files[0];
function add(img){P.push({id:"p"+Date.now(),name:n,cat:$("pc").value,desc:$("pd").value,img:img,c:"#b3b3ad"});$("pn").value=$("pd").value=$("pf").value="";save()}
f?shrink(f,900,"jpg",add):add("")};
$("gf").onchange=function(){var c=$("gc").value;Array.prototype.forEach.call(this.files,function(f){shrink(f,1000,"jpg",function(d){G.push({s:d,c:c});save()})});this.value=""};
document.addEventListener("click",function(e){var d=e.target.dataset;if(!d)return;
if(d.dp){P=P.filter(function(p){return p.id!=d.dp});save()}
if(d.dg){G.splice(+d.dg,1);save()}
if(d.ds){SL[+d.ds]="";save()}
if(d.dl){LG="";save()}});
$("lock").onclick=function(){authed=false;gate()};
window.addEventListener("hashchange",route);
render();loadAssetSlides();route();
