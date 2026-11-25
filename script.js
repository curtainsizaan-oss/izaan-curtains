var CATS=["Curtains","Blackout","Sheer","Wallpapers","Roller Blinds","Roman Blinds","Zebra Blinds","Motorized"];
var ZB=[
{t:"Slate Grey Zebra Blinds – Living Room",d:"Twin windows dressed in slate-grey day-and-night zebra blinds with matching cassettes.",s:"assets/products/zebra-blinds/z01.jpg",w:2576,h:1450},
{t:"Slate Grey Zebra Blind – Close-Up",d:"Brushed-texture grey fabric with alternating sheer and solid bands and a glossy head rail.",s:"assets/products/zebra-blinds/z02.jpg",w:1450,h:2576},
{t:"Ivory Zebra Blinds – Prayer Hall",d:"Soft ivory zebra blinds set inside teak window frames against marble-finish walls.",s:"assets/products/zebra-blinds/z03.jpg",w:1160,h:2061},
{t:"Ivory Zebra Blind – Teak-Framed Window",d:"Textured cream bands that filter daylight gently while keeping a clean, calm look.",s:"assets/products/zebra-blinds/z04.jpg",w:1450,h:2576},
{t:"Ivory Zebra Blind – Wide Window",d:"A made-to-measure wide blind with smooth chain control and a neat white bottom rail.",s:"assets/products/zebra-blinds/z05.jpg",w:2576,h:1450},
{t:"Mauve Zebra Blinds – Bedroom",d:"Warm mauve-taupe zebra blinds on two bedroom windows for privacy and soft light.",s:"assets/products/zebra-blinds/z06.jpg",w:2576,h:1450},
{t:"Mauve Zebra Blind – Single Window",d:"Smooth mauve bands that adjust between privacy and filtered daylight.",s:"assets/products/zebra-blinds/z07.jpg",w:1450,h:2576},
{t:"Walnut Wood-Grain Zebra Blind",d:"Rich brown wood-grain fabric that adds warmth to a light-coloured wall.",s:"assets/products/zebra-blinds/z08.jpg",w:1450,h:2576},
{t:"Walnut Wood-Grain Zebra Blind – Panelled Niche",d:"Wood-grain bands glowing with daylight, fitted neatly inside a panelled shelf niche.",s:"assets/products/zebra-blinds/z09.jpg",w:1232,h:2190},
{t:"Sand Beige Zebra Blind",d:"A soft sand-beige blind that suits neutral rooms and modern interiors.",s:"assets/products/zebra-blinds/z10.jpg",w:1450,h:2576},
{t:"Sand Beige Zebra Blinds – Wood-Framed Bedroom",d:"Two beige zebra blinds fitted inside warm wood-finish window frames.",s:"assets/products/zebra-blinds/z11.jpg",w:2576,h:1190},
{t:"Sand Beige Zebra Blind – Behind the Headboard",d:"A wide beige blind framed in wood, giving a bedroom headboard wall a tailored finish.",s:"assets/products/zebra-blinds/z12.jpg",w:2576,h:1190},
{t:"Leaf-Print Zebra Blinds – Pattern Collection",d:"Golden and brown leaf-motif designs on alternating sheer and solid bands.",s:"assets/products/zebra-blinds/z13.jpg",w:1747,h:2560},
{t:"Pearl Grey Zebra Blind – Teak Window",d:"Light pearl-grey textured bands with a chain control, framed by a teak window.",s:"assets/products/zebra-blinds/z14.jpg",w:1190,h:2576},
{t:"Taupe Wood-Grain Zebra Blinds – Lounge",d:"Natural taupe wood-grain blinds that pair well with a warm brown corner sofa.",s:"assets/products/zebra-blinds/z15.jpg",w:1280,h:1280},
{t:"Black and Grey Zebra Blind – Dining Area",d:"Bold black bands with grey sheer stripes for a sharp, contemporary look.",s:"assets/products/zebra-blinds/z16.jpg",w:864,h:1080},
{t:"Golden Brown Wood-Grain Zebra Blinds",d:"Golden-brown wood-grain blinds inside wood-finish frames, warm and elegant.",s:"assets/products/zebra-blinds/z17.jpg",w:1280,h:960},
{t:"Walnut Brown Zebra Blinds – Living Room",d:"Brown wood-grain bands that let daylight through softly, matched to a brown sofa.",s:"assets/products/zebra-blinds/z18.jpg",w:1280,h:960},
{t:"Charcoal Wood-Grain Zebra Blinds – Bedroom",d:"Charcoal grey wood-grain blinds for a calm, modern bedroom.",s:"assets/products/zebra-blinds/z19.jpg",w:960,h:1280},
{t:"Caramel Wood-Grain Zebra Blind – Close View",d:"Warm caramel wood-grain fabric with soft translucent bands.",s:"assets/products/zebra-blinds/z20.jpg",w:960,h:1280}];

function ZBP(){return ZB.map(function(z,i){return {id:"z"+i,name:z.t,cat:"Zebra Blinds",desc:z.d,zs:z.s,zi:i,w:z.w,h:z.h}})}
function zcard(p){return '<div class="card zc rv in"><button class="zph" data-z="'+p.zi+'" aria-label="View '+esc(p.name)+' full screen"><img src="'+p.zs+'" width="'+p.w+'" height="'+p.h+'" alt="'+esc(p.name)+'" loading="lazy" decoding="async"><span class="zx">View</span></button><div class="b"><div class="tag">Zebra Blinds</div><h3>'+esc(p.name)+'</h3><p>'+esc(p.desc)+'</p><a href="#quote" data-pre="Zebra Blinds">Get a quote →</a></div></div>'}

var TILES=[["Curtains","Velvet, linen and drapes","#6b2c3a"],["Wallpapers","Textures, damask and modern prints","#3c5a49"],["Roller Blinds","Roller and zebra blinds","#5d6166"],["Roman Blinds","Tailored fabric blinds","#6b665a"],["Motorized","Remote and smart control","#3a3d42"]];

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

var SLD=[
{e:"Luxury Curtains",h:"Drapes That Define a Room",p:"Velvet, linen and sheer curtains, tailored to your windows.",c:"Curtains",b:"#4a4540"},
{e:"Motorized Curtains",h:"Elegance at the Touch of a Button",p:"Silent motorized tracks with remote, wall and smart control.",c:"Motorized",b:"#3a3d42"},
{e:"Blinds",h:"Light, Perfectly Balanced",p:"Roller and zebra blinds for clean, modern interiors.",c:"Roller Blinds",b:"#4b4f52"},
{e:"Wallpapers",h:"Walls With Character",p:"Textured and patterned wallpapers for feature walls.",c:"Wallpapers",b:"#46433d"}];

var BI=[
{"id":"b-curtains-001","cat":"Curtains","name":"Mustard Velvet Drapes","desc":"Floor-to-ceiling velvet drapes with a fitted pelmet.","img":"assets/products/curtains/izaan-curtains-001.jpg"},
{"id":"b-curtains-002","cat":"Curtains","name":"Forest Green Velvet with Sheer","desc":"Velvet side panels under a pelmet, with a soft sheer centre.","img":"assets/products/curtains/izaan-curtains-002.jpg"},
{"id":"b-curtains-003","cat":"Curtains","name":"Champagne Velvet Curtains","desc":"Soft beige velvet curtains with an even, elegant fall.","img":"assets/products/curtains/izaan-curtains-003.jpg"},
{"id":"b-curtains-004","cat":"Curtains","name":"Sand Curtains with Sheer","desc":"Warm sand curtains framing a white sheer in a living room.","img":"assets/products/curtains/izaan-curtains-004.jpg"},
{"id":"b-curtains-005","cat":"Curtains","name":"Chocolate Brown Curtains","desc":"Rich brown curtains layered with a white sheer.","img":"assets/products/curtains/izaan-curtains-005.jpg"},
{"id":"b-curtains-006","cat":"Curtains","name":"Tan Curtains with Tie-Backs","desc":"Tan curtains with tie-backs over soft white sheers.","img":"assets/products/curtains/izaan-curtains-006.jpg"},
{"id":"b-curtains-007","cat":"Curtains","name":"Mocha Velvet Living Room Curtains","desc":"Mocha velvet curtains with sheers for a refined living room.","img":"assets/products/curtains/izaan-curtains-007.jpg"},
{"id":"b-curtains-008","cat":"Curtains","name":"Beige Bedroom Curtains","desc":"Clean beige curtains with a soft, even fall.","img":"assets/products/curtains/izaan-curtains-008.jpg"},
{"id":"b-curtains-009","cat":"Curtains","name":"Slate Grey Statement Curtain","desc":"A full-wall grey curtain with deep, generous folds.","img":"assets/products/curtains/izaan-curtains-009.jpg"},
{"id":"b-curtains-010","cat":"Curtains","name":"Taupe Curtains with Patterned Sheer","desc":"Taupe curtains with a striped sheer over an arched window.","img":"assets/products/curtains/izaan-curtains-010.jpg"},
{"id":"b-curtains-011","cat":"Curtains","name":"Bronze Hall Curtains","desc":"Tall curtains and sheers for large halls and formal rooms.","img":"assets/products/curtains/izaan-curtains-011.jpg"},
{"id":"b-sheer-001","cat":"Sheer","name":"White Sheer with Blue Accent","desc":"Soft white sheer under a wooden pelmet, with a blue side curtain.","img":"assets/products/sheer/izaan-sheer-001.jpg"},
{"id":"b-sheer-002","cat":"Sheer","name":"Soft White Sheer with Sage Curtains","desc":"A light white sheer paired with sage tie-back curtains.","img":"assets/products/sheer/izaan-sheer-002.jpg"},
{"id":"b-sheer-003","cat":"Sheer","name":"Cream Linen Sheer","desc":"Cream sheer in a gentle wave fold that softens daylight.","img":"assets/products/sheer/izaan-sheer-003.jpg"},
{"id":"b-curtains-012","cat":"Curtains","name":"Beige Curtains with Wooden Pelmet","desc":"Beige curtains and sheers under a wooden pelmet in a bedroom.","img":"assets/products/curtains/izaan-curtains-012.jpg"},
{"id":"b-curtains-013","cat":"Curtains","name":"Beige Tie-Back Curtains with Sheer","desc":"Beige tie-back curtains over a soft white sheer.","img":"assets/products/curtains/izaan-curtains-013.jpg"},
{"id":"b-curtains-014","cat":"Curtains","name":"Double-Height Stair Window Curtains","desc":"Tall sheers with curtains on each side for a double-height window.","img":"assets/products/curtains/izaan-curtains-014.jpg"},
{"id":"b-curtains-015","cat":"Curtains","name":"Cream Sheer with Gold Side Curtain","desc":"Cream sheer curtains with a textured gold side curtain in a bedroom.","img":"assets/products/curtains/izaan-curtains-015.jpg"},
{"id":"b-curtains-016","cat":"Curtains","name":"Taupe Curtains with Sheer","desc":"Tall taupe curtains and a white sheer beside a panelled window blind.","img":"assets/products/curtains/izaan-curtains-016.jpg"},
{"id":"b-curtains-017","cat":"Curtains","name":"Ivory Curtains for Living Rooms","desc":"Soft ivory curtains with a cream blind in the centre niche.","img":"assets/products/curtains/izaan-curtains-017.jpg"}];

/* Data layer */
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
var LOGO0="assets/logo.png";
$("brand").innerHTML=LG?'<img src="'+LG+'" alt="IZAAN CURTAINS">':'<img src="'+LOGO0+'" alt="IZAAN Curtains and Wallpapers">';

$("tiles").innerHTML=TILES.map(function(t){var n=t[0]=="Roller Blinds"?"Blinds":t[0];return '<a class="tile rv" href="#collections" data-pre="'+t[0]+'"><div class="bg '+pat(t[0])+'" style="background-color:'+t[2]+'"></div><div><h3>'+n+'</h3><p>'+t[1]+'</p></div></a>'}).join("");

var t='<button class="tab'+(cat=="All"?" on":"")+'" data-c="All">All</button>';
CATS.forEach(function(c){t+='<button class="tab'+(cat==c?" on":"")+'" data-c="'+c+'">'+c+'</button>'});
$("tabs").innerHTML=t;

$("grid").innerHTML=BI.concat(P,ZBP()).filter(function(p){return cat=="All"||p.cat==cat}).map(function(p){
if(p.zs)return zcard(p);
return '<div class="card rv in"><div class="ph'+(p.img?"":" "+pat(p.cat))+'"'+(p.img?'':' style="background-color:#ebe8e2"')+'>'+(p.img?'<img loading="lazy" decoding="async" src="'+esc(p.img)+'" alt="'+esc(p.name)+'">':"")+'</div><div class="b"><div class="tag">'+esc(p.cat)+'</div><h3>'+esc(p.name)+'</h3><p>'+esc(p.desc||"")+'</p><a href="#quote" data-pre="'+esc(p.cat)+'">Get a quote →</a></div></div>'}).join("");

renderGal();
slidesInit();

$("qc").innerHTML=CATS.map(function(c){return "<option>"+c+"</option>"}).join("");
$("pc").innerHTML=$("qc").innerHTML;
$("gc").innerHTML=$("qc").innerHTML;

var i="";
if(S.ph)i+='<p><b>Phone</b>'+esc(S.ph)+'</p>';
if(S.wa)i+='<p><b>WhatsApp</b>+'+esc(wnum())+'</p>';
if(S.em)i+='<p><b>Email</b>'+esc(S.em)+'</p>';
if(S.ad)i+='<p><b>Address</b>'+esc(S.ad)+'</p>';
$("info").innerHTML=i||'<p>Contact details will appear here once added in the admin panel.</p>';

var q=S.mp||"IZAAN CURTAINS Kerala";
$("map").href=/^https?:/.test(q)?q:"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(q);
$("wa").href=waLink("Hello IZAAN CURTAINS, I’d like to enquire about your products.");
$("yr").textContent=new Date().getFullYear();
reveal()
}

/* UPDATED GALLERY */
function GA(){
return G.concat(
BI.map(function(p){
return {s:p.img,c:p.cat,t:p.name,z:1}
}),
ZB.filter(function(z){
return !z.s.endsWith("/z18.jpg")
}).map(function(z){
return {s:z.s,c:"Zebra Blinds",t:z.t,z:1}
})
)
}

function vis(){return GA().filter(function(g){return gcat=="All"||g.c==gcat})}

function renderGal(){
var cs=["All"].concat(CATS.filter(function(c){return GA().some(function(g){return g.c==c})}));
$("gtabs").innerHTML=GA().length?cs.map(function(c){return '<button class="tab'+(gcat==c?" on":"")+'" data-g="'+c+'">'+c+'</button>'}).join(""):"";

$("gal").innerHTML=GA().length?vis().map(function(g,i){
if(g.z)return '<div class="gi" data-i="'+i+'" data-c="'+esc(g.t)+'"><img src="'+g.s+'" alt="'+esc(g.t)+'" loading="lazy" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover"></div>';
return '<div class="gi" data-i="'+i+'" data-c="'+esc(g.c)+'" style="background-image:url('+g.s+')"></div>'}).join(""):
DEF.slice(0,8).map(function(p){return '<div class="gi '+pat(p.cat)+'" data-c="'+p.cat+'" style="background-color:#ebe8e2"></div>'}).join("")
}

function reveal(){
var o=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");o.unobserve(x.target)}})},{threshold:.12});
document.querySelectorAll(".rv:not(.in)").forEach(function(el){o.observe(el)})
}

/* Slideshow */
function slidesInit(){
$("slides").innerHTML=SLD.map(function(d,i){return SL[i]?'<div class="sl" style="background-image:url('+SL[i]+')"></div>':'<div class="sl d" style="background-color:'+d.b+'"></div>'}).join("");
$("dots").innerHTML=SLD.map(function(_,i){return '<button data-s="'+i+'" aria-label="Slide '+(i+1)+'"></button>'}).join("");
go(0)
}

function loadAssetSlides(){
SLD.forEach(function(d,i){
if(SL[i])return;
var im=new Image();
im.onload=function(){
var el=document.querySelectorAll(".sl")[i];
if(el){el.classList.remove("d");el.style.backgroundImage="url(assets/slide-"+(i+1)+".jpg)"}
};
im.src="assets/slide-"+(i+1)+".jpg"
})
}

function go(i){
var s=document.querySelectorAll(".sl"),d=document.querySelectorAll("#dots button");
if(!s.length)return;
cur=(i+s.length)%s.length;
s.forEach(function(x,k){x.classList.toggle("on",k==cur)});
d.forEach(function(x,k){x.classList.toggle("on",k==cur)});
var D=SLD[cur];
$("ce").textContent=D.e;
$("ch").textContent=D.h;
$("cp").textContent=D.p;
$("cb").dataset.pre=D.c;
$("cb").textContent="Explore "+D.e;
var w=$("cw");
w.classList.remove("ani");
void w.offsetWidth;
w.classList.add("ani");
clearInterval(timer);
if(!matchMedia("(prefers-reduced-motion:reduce)").matches)timer=setInterval(function(){go(cur+1)},4000)
}

$("pv").onclick=function(){go(cur-1)};
$("nx").onclick=function(){go(cur+1)};

var tx=0;
$("top").addEventListener("touchstart",function(e){tx=e.touches[0].clientX},{passive:true});
$("top").addEventListener("touchend",function(e){var d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>50)go(cur+(d<0?1:-1))});

/* Navigation */
function menu(o){
$("lk").classList.toggle("open",o);
$("bg").classList.toggle("on",o);
$("bg").setAttribute("aria-expanded",o)
}
$("bg").onclick=function(){menu(!$("lk").classList.contains("open"))};

var lbL=[],lbC=[],lbI=0;

function lbx(){
$("lb").style.display="none";
document.body.style.overflow=""
}

function lb(i){
lbI=(i+lbL.length)%lbL.length;
var im=$("lb").children[1];
im.src=lbL[lbI];
im.alt=lbC[lbI]||"";
$("lcap").textContent=(lbC[lbI]?lbC[lbI]+"  ·  ":"")+(lbI+1)+" / "+lbL.length;
$("lb").style.display="flex";
document.body.style.overflow="hidden"
}

document.addEventListener("click",function(e){
var t=e.target;
if(t.closest("#lk a"))menu(false);

var tb=t.closest("#tabs .tab");
if(tb){cat=tb.dataset.c;render();return}

var gt=t.closest("#gtabs .tab");
if(gt){gcat=gt.dataset.g;renderGal();return}

var a=t.closest("[data-pre]");
if(a){
cat=a.dataset.pre=="Roller Blinds"||CATS.indexOf(a.dataset.pre)>-1?a.dataset.pre:"All";
$("qc").value=a.dataset.pre;
render()
}

var ds=t.closest("[data-s]");
if(ds)go(+ds.dataset.s);

var gi=t.closest(".gi");
if(gi&&GA().length){
lbL=vis().map(function(g){return g.s});
lbC=vis().map(function(g){return g.t||g.c});
lb(+gi.dataset.i)
}

var zz=t.closest("[data-z]");
if(zz){
lbL=ZB.map(function(z){return z.s});
lbC=ZB.map(function(z){return z.t});
lb(+zz.dataset.z);
return
}

if(t.id=="lp"){lb(lbI-1);return}
if(t.id=="ln"){lb(lbI+1);return}
if(t.id=="lb"||t.id=="lx"||t.tagName=="IMG"&&t.closest("#lb"))lbx()
});

document.addEventListener("keydown",function(e){
if($("lb").style.display!="flex")return;
if(e.key=="Escape")lbx();
if(e.key=="ArrowLeft")lb(lbI-1);
if(e.key=="ArrowRight")lb(lbI+1)
});

var lx0=0;
$("lb").addEventListener("touchstart",function(e){lx0=e.touches[0].clientX},{passive:true});
$("lb").addEventListener("touchend",function(e){var d=e.changedTouches[0].clientX-lx0;if(Math.abs(d)>60&&lbL.length>1)lb(lbI+(d<0?1:-1))});

/* WhatsApp quotation */
$("qf").addEventListener("submit",function(e){
e.preventDefault();
if(!wnum()){
$("qm").textContent="WhatsApp number isn’t set yet. Add it in the admin panel to enable sending.";
return
}
var m="Hello IZAAN CURTAINS, I’d like a free quotation.\nName: "+$("qn").value+"\nPhone: "+$("qp").value+"\nProduct: "+$("qc").value+"\nQty: "+$("qw").value+"\nLocation: "+$("ql").value+"\nDetails: "+$("qd").value;
window.open(waLink(m),"_blank");
$("qm").textContent="Opening WhatsApp…"
});

/* Admin */
var authed=false;

function route(){
var a=location.hash=="#admin";
$("site").classList.toggle("hide",a);
$("admin").classList.toggle("hide",!a);
if(a){gate();window.scrollTo(0,0)}
}

function gate(){
if(authed){
$("gate").classList.add("hide");
$("dash").classList.remove("hide");
fill();
return
}
$("dash").classList.add("hide");
$("gate").classList.remove("hide");
$("gate").innerHTML=(S.pin?'<label>Enter passcode</label>':'<label>Create an admin passcode</label><p class="note">Stored only in this browser — it deters casual access but is not real security.</p>')+'<input id="pw" type="password"><button class="btn fill" id="go">'+(S.pin?"Unlock":"Set passcode")+'</button><div class="msg" id="gm"></div>';

$("go").onclick=function(){
var v=$("pw").value;
if(v.length<4){$("gm").textContent="Use at least 4 characters.";return}
if(!S.pin){
S.pin=v;
sv("iz_s",S);
authed=true;
gate()
}else if(v===S.pin){
authed=true;
gate()
}else $("gm").textContent="Incorrect passcode."
}
}

function fill(){
$("sw").value=S.wa;
$("sp").value=S.ph;
$("se").value=S.em;
$("sa").value=S.ad;
$("sm").value=S.mp;
lists()
}

function lists(){
$("ll").innerHTML=LG?'<div class="row"><img src="'+LG+'" alt="" style="width:auto;height:46px"><button class="btn sm" data-dl="1">Remove</button></div>':'<p class="note">No logo uploaded yet — a text placeholder is shown in the header.</p>';

$("sll").innerHTML=SLD.map(function(d,i){return SL[i]?'<div class="row"><span style="display:flex;gap:10px;align-items:center"><img src="'+SL[i]+'" alt="">'+d.e+'</span><button class="btn sm" data-ds="'+i+'">Remove</button></div>':""}).join("");

$("pl").innerHTML='<p class="note">'+BI.length+' built-in products come from the website files (assets/products) and are always shown.</p>'+P.map(function(p){return '<div class="row"><span style="display:flex;gap:10px;align-items:center">'+(p.img?'<img src="'+p.img+'" alt="">':'<i class="'+pat(p.cat)+'" style="background-color:'+(p.c||"#b3b3ad")+'"></i>')+esc(p.name)+' · '+esc(p.cat)+'</span><button class="btn sm" data-dp="'+p.id+'">Delete</button></div>'}).join("");

$("gl").innerHTML=G.map(function(g,i){return '<div class="row"><span style="display:flex;gap:10px;align-items:center"><img src="'+g.s+'" alt="">'+esc(g.c)+'</span><button class="btn sm" data-dg="'+i+'">Delete</button></div>'}).join("")||'<p class="note">No photos yet — placeholders show until you upload.</p>'
}

function save(){
if(!(sv("iz_p",P)&&sv("iz_g",G)&&sv("iz_sl",SL)&&sv("iz_logo",LG)))alert("Browser storage is full or unavailable. Try fewer or smaller photos.");
render();
lists()
}

$("ss").onclick=function(){
S.wa=$("sw").value.trim();
S.ph=$("sp").value.trim();
S.em=$("se").value.trim();
S.ad=$("sa").value.trim();
S.mp=$("sm").value.trim();
sv("iz_s",S);
render();
$("sms").textContent="Saved ✓"
};

function shrink(f,w,type,cb){
var r=new FileReader();
r.onload=function(){
var im=new Image();
im.onload=function(){
var s=Math.min(1,w/Math.max(im.width,im.height)),c=document.createElement("canvas");
c.width=im.width*s;
c.height=im.height*s;
c.getContext("2d").drawImage(im,0,0,c.width,c.height);
cb(type=="png"?c.toDataURL("image/png"):c.toDataURL("image/jpeg",.8))
};
im.src=r.result
};
r.readAsDataURL(f)
}

$("lf").onchange=function(){
var f=this.files[0];
if(f)shrink(f,700,"png",function(d){LG=d;save()});
this.value=""
};

$("slf").onchange=function(){
var f=this.files[0],k=+$("sls").value;
if(f)shrink(f,1600,"jpg",function(d){SL[k]=d;save()});
this.value=""
};

$("pa").onclick=function(){
var n=$("pn").value.trim();
if(!n)return;
var f=$("pf").files[0];

function add(img){
P.push({id:"p"+Date.now(),name:n,cat:$("pc").value,desc:$("pd").value,img:img,c:"#b3b3ad"});
$("pn").value=$("pd").value=$("pf").value="";
save()
}
f?shrink(f,900,"jpg",add):add("")
};

$("gf").onchange=function(){
var c=$("gc").value;
Array.prototype.forEach.call(this.files,function(f){
shrink(f,1000,"jpg",function(d){G.push({s:d,c:c});save()})
});
this.value=""
};

document.addEventListener("click",function(e){
var d=e.target.dataset;
if(!d)return;
if(d.dp){P=P.filter(function(p){return p.id!=d.dp});save()}
if(d.dg){G.splice(+d.dg,1);save()}
if(d.ds){SL[+d.ds]="";save()}
if(d.dl){LG="";save()}
});

$("lock").onclick=function(){authed=false;gate()};
window.addEventListener("hashchange",route);

render();
loadAssetSlides();
route();
