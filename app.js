/* =========================================================
   AEVOR — Product catalogue & browser-only experience
   EDIT PRODUCTS IN THE PRODUCTS ARRAY BELOW.
   No backend / server database. Preferences use localStorage.
   ========================================================= */
"use strict";

const PRODUCTS = [
 {id:"poedagar-615",name:"POEDAGAR 615",brand:"POEDAGAR",price:899,gender:"Men",type:"Analog",strap:"Stainless Steel",movement:"Quartz",style:"Formal",affiliate:"https://rkmri.co/ep0AeN30E0MT/",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi94D7BC9V4s48bDmc9qeJAghpilllva1zSMVODjo7yi29OE_29yQ48I4&s=10",featured:9,description:"A polished everyday analogue option with a confident, dress-inspired look.",specs:{Display:"Analog",Movement:"Quartz",Gender:"Men",Strap:"Not specified","Water resistance":"Not specified"}},
 {id:"aura-matte-black",name:"Aura Men's Matte Black",brand:"Aura",price:299,gender:"Men",type:"Analog",strap:"Not specified",movement:"Quartz",style:"Minimal",affiliate:"https://rkmri.co/AeNemeToTeSM/",image:"https://rokbucket.rokomari.io/ProductNew20190903/260X372/Aura_Mens_Matte_Black_Analog_Watch_With_-Non_Brand-fdb15-476918.png",featured:8,description:"A minimal matte-black analogue watch at an accessible listed price.",specs:{Display:"Analog",Movement:"Quartz",Gender:"Men",Strap:"Not specified","Water resistance":"Not specified"}},
 {id:"curren-8301",name:"CURREN 8301",brand:"CURREN",price:1669,gender:"Men",type:"Analog",strap:"Not specified",movement:"Quartz",style:"Sports",affiliate:"https://rkmri.co/peTyemmlRoe0/",image:"https://rokbucket.rokomari.io/ProductNew20190903/260X372/CURREN_Luxury_Sports_Watch_For_Men-CURREN_WATCHES-68701-376379.jpg",featured:10,description:"A sport-influenced analogue design for a bolder wrist presence.",specs:{Display:"Analog",Movement:"Quartz",Gender:"Men",Strap:"Not specified","Water resistance":"Not specified"}},
 {id:"skmei-1816",name:"SKMEI 1816",brand:"SKMEI",price:1999,gender:"Men",type:"Digital",strap:"Not specified",movement:"Digital",style:"Sports",affiliate:"https://rkmri.co/eSeSN00mymeI/",image:"https://rokbucket.rokomari.io/ProductNew20190903/260X372/SKMEI_1816_Latest_Design_Digital_Dual_Ti-SKMEI-2062a-400486.jpg",featured:12,description:"A digital dual-time design for users who prefer a functional, sporty look.",specs:{Display:"Digital dual-time",Movement:"Digital",Gender:"Men",Strap:"Not specified","Water resistance":"Not specified"}},
 {id:"olevs-5563",name:"Olevs 5563",brand:"Olevs",price:1399,gender:"Men",type:"Analog",strap:"Not specified",movement:"Quartz",style:"Formal",affiliate:"https://rkmri.co/5AM0eTA2MRep/",image:"https://rokbucket.rokomari.io/ProductNew20190903/260X372/Olevs_5563_Quartz_Wrist_Waterproof_Men_W-OLEVS-0ad26-397859.png",featured:11,description:"A quartz analogue option with a classic dress-watch direction.",specs:{Display:"Analog",Movement:"Quartz",Gender:"Men",Strap:"Not specified","Water resistance":"Check seller listing"}},
 {id:"forsining-8232",name:"FORSINING 8232",brand:"FORSINING",price:3224,gender:"Men",type:"Analog",strap:"Not specified",movement:"Automatic",style:"Formal",affiliate:"https://rkmri.co/NeA5Io2e5pNA/",image:"https://rokbucket.rokomari.io/ProductNew20190903/260X372/FORSINING_Japan_Movement_Luxury_Mechanic-Non_Brand-70918-376423.jpg",featured:18,description:"A mechanical-style statement piece for buyers drawn to traditional watchmaking aesthetics.",specs:{Display:"Analog",Movement:"Automatic (seller title)",Gender:"Men",Strap:"Not specified","Water resistance":"Not specified"}},
 {id:"olevs-9901",name:"Olevs 9901",brand:"Olevs",price:2859,gender:"Men",type:"Analog",strap:"Not specified",movement:"Automatic",style:"Formal",affiliate:"https://rkmri.co/5m2ReyAmoIIy/",image:"https://rokbucket.rokomari.io/ProductNew20190903/260X372/Olevs_Automatic_Watch_for_Men_9901-OLEVS-3f72f-292680.jpg",featured:20,description:"A prominent automatic-style selection with a refined, formal profile.",specs:{Display:"Analog",Movement:"Automatic (seller title)",Gender:"Men",Strap:"Not specified","Water resistance":"Not specified"}},
 {id:"skmei-2272",name:"SKMEI 2272",brand:"SKMEI",price:2279,gender:"Men",type:"Digital",strap:"Stainless Steel",movement:"Digital",style:"Casual",affiliate:"https://rkmri.co/S2EMeNEpoMpl/",image:"https://rokbucket.rokomari.io/ProductNew20190903/260X372/Skmei_Men_Digital_Watch_Stainless_Steel_-SKMEI-40fcc-468561.png",featured:14,description:"A digital watch with a stainless-steel look for everyday utility.",specs:{Display:"Digital",Movement:"Digital",Gender:"Men",Strap:"Stainless Steel (seller title)","Water resistance":"Not specified"}},
 {id:"lasika-w-f110",name:"LASIKA W-F110",brand:"LASIKA",price:329,gender:"Unisex",type:"Digital",strap:"Not specified",movement:"Digital",style:"Casual",affiliate:"https://rkmri.co/l5MAReeeNeNN/",image:"https://rokbucket.rokomari.io/ProductNew20190903/260X372/_LASIKA_W_F110_Water_Resistance_Waterpro-Lasika-e04c2-474755.jpg",featured:7,description:"A low-cost digital option. Check the seller page for exact dimensions and water-resistance rating.",specs:{Display:"Digital",Movement:"Digital",Gender:"Unisex",Strap:"Not specified","Water resistance":"Check seller listing"}},
 {id:"casio-f91w",name:"Casio Retro F-91W-1DG",brand:"CASIO",price:null,gender:"Unisex",type:"Digital",strap:"Resin",movement:"Digital",style:"Casual",affiliate:"https://rkmri.co/332TER0eSA0T/",image:"https://rokbucket.rokomari.io/ProductNew20190903/260X372/Casio_Retro_Watch-CASIO_Watch-648db-307643.png",featured:17,description:"An iconic retro digital-watch silhouette. Current listed price was not provided.",specs:{Display:"Digital",Movement:"Digital",Gender:"Unisex",Strap:"Resin","Water resistance":"Check seller listing"}},
 {id:"casio-a158wa",name:"Casio Retro A158WA-1DF",brand:"CASIO",price:2449,gender:"Unisex",type:"Digital",strap:"Stainless Steel",movement:"Digital",style:"Casual",affiliate:"https://rkmri.co/ImeMEM5pReER/",image:"https://rokbucket.rokomari.io/ProductNew20190903/260X372/Casio_Retro_Watch_-CASIO_Watch-93535-324964.png",featured:16,description:"A retro digital look paired with a stainless-steel bracelet aesthetic.",specs:{Display:"Digital",Movement:"Digital",Gender:"Unisex",Strap:"Stainless Steel","Water resistance":"Check seller listing"}},
 {id:"skmei-1888",name:"SKMEI 1888",brand:"SKMEI",price:1549,gender:"Men",type:"Digital",strap:"Not specified",movement:"Digital",style:"Sports",affiliate:"https://rkmri.co/2m2pNp5MeEeo/",image:"https://rokbucket.rokomari.io/ProductNew20190903/260X372/SKMEI_1888_Latest_3D_Pedometer_Digital_W-SKMEI-6ec07-400490.jpg",featured:13,description:"A digital model whose seller title mentions a 3D pedometer feature.",specs:{Display:"Digital",Movement:"Digital",Gender:"Men",Strap:"Not specified","Water resistance":"Not specified"}},
 {id:"y68-pro",name:"Y68 Pro",brand:"Y68",price:599,gender:"Unisex",type:"Smart",strap:"Silicone",movement:"Digital",style:"Sports",affiliate:"https://rkmri.co/peMA00NN3MMI/",image:"https://rokbucket.rokomari.io/ProductNew20190903/260X372/Y68_Pro_Smart_Watch_Relogio_Intelligent_-Non_Brand-bf4ef-529271.png",featured:6,description:"An entry-level smart-watch style device. Confirm phone compatibility and functions with the seller.",specs:{Display:"Smart display",Movement:"Digital",Gender:"Unisex",Strap:"Silicone (typical listing image; verify)","Water resistance":"Not specified"}},
 {id:"casio-w96h",name:"Casio W-96H-1AVDF",brand:"CASIO",price:3900,gender:"Men",type:"Digital",strap:"Resin",movement:"Digital",style:"Sports",affiliate:"https://rkmri.co/MAMl0lllIM2E/",image:"https://rokbucket.rokomari.io/ProductNew20190903/260X372/Casio_W_96H_1AVDF_Youth_Collection_Digit-CASIO_Watch-b8b4d-306149.png",featured:19,description:"A practical digital Casio option with a sport-oriented design.",specs:{Display:"Digital",Movement:"Digital",Gender:"Men",Strap:"Resin","Water resistance":"Check seller listing"}},
 {id:"skmei-1530",name:"SKMEI 1530",brand:"SKMEI",price:1019,gender:"Women",type:"Analog",strap:"Not specified",movement:"Quartz",style:"Casual",affiliate:"https://rkmri.co/INRloe0pTM0M/",image:"https://rokbucket.rokomari.io/ProductNew20190903/260X372/SKMEI_1530_Womens_Quartz_Watch__Stylish_-Non_Brand-36f42-513201.png",featured:5,description:"A women's quartz analogue watch with a versatile everyday direction.",specs:{Display:"Analog",Movement:"Quartz",Gender:"Women",Strap:"Not specified","Water resistance":"Not specified"}},
 {id:"poedagar-306",name:"POEDAGAR 306",brand:"POEDAGAR",price:1450,gender:"Women",type:"Analog",strap:"Not specified",movement:"Quartz",style:"Formal",affiliate:"https://rkmri.co/RSoelAeRS2M2/",image:"https://rokbucket.rokomari.io/ProductNew20190903/260X372/POEDAGAR_306_Luxury_Womens_Quartz_Watch_-Poedagar-3e5a2-540315.png",featured:15,description:"A polished women's quartz analogue option with a dressier appearance.",specs:{Display:"Analog",Movement:"Quartz",Gender:"Women",Strap:"Not specified","Water resistance":"Not specified"}},
 {id:"poedagar-795",name:"Poedagar 795",brand:"POEDAGAR",price:1559,gender:"Women",type:"Analog",strap:"Not specified",movement:"Quartz",style:"Formal",affiliate:"https://rkmri.co/A5pNM3el2pe5/",image:"https://rokbucket.rokomari.io/ProductNew20190903/260X372/Poedagar_795_Luxury_Womens_Quartz_Watch_-Poedagar-2ecf5-540312.png",featured:14,description:"A refined quartz option selected for its elegant styling.",specs:{Display:"Analog",Movement:"Quartz",Gender:"Women",Strap:"Not specified","Water resistance":"Not specified"}},
 {id:"megir-m2011",name:"MEGIR M2011",brand:"MEGIR",price:1229,gender:"Women",type:"Analog",strap:"Leather",movement:"Quartz",style:"Casual",affiliate:"https://rkmri.co/20ooSe0ITMye/",image:"https://rokbucket.rokomari.io/ProductNew20190903/260X372/MEGIR_M2011_Womens_Luxury_Leather_Bracel-MEGIR-26983-513209.png",featured:10,description:"A women's analogue watch with a leather-strap look.",specs:{Display:"Analog",Movement:"Quartz",Gender:"Women",Strap:"Leather (seller title)","Water resistance":"Not specified"}},
 {id:"curren-9081",name:"Curren 9081",brand:"CURREN",price:699,gender:"Women",type:"Analog",strap:"Stainless Steel",movement:"Quartz",style:"Casual",affiliate:"https://rkmri.co/RAIIpeMS0epe/",image:"https://rokbucket.rokomari.io/ProductNew20190903/260X372/Curren_Stainless_Steel_Analog_Watch_For_-CURREN-adbf3-379765.png",featured:8,description:"An accessible analogue watch with a stainless-steel bracelet look.",specs:{Display:"Analog",Movement:"Quartz",Gender:"Women",Strap:"Stainless Steel (seller title)","Water resistance":"Not specified"}}
];

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const money = n => n == null ? "Price not listed" : "৳" + Number(n).toLocaleString("en-BD");
const safe = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const store = {
 get(key, fallback){try{return JSON.parse(localStorage.getItem("aevor_"+key)) ?? fallback}catch{return fallback}},
 set(key,value){try{localStorage.setItem("aevor_"+key,JSON.stringify(value))}catch{}}
};
let wishlist = store.get("wishlist",[]);
let recently = store.get("recent",[]);
let compared = store.get("compare",[]);
let filters = {category:"all",gender:"",type:"",strap:"",movement:"",style:"",budget:"",search:""};
let editorIndex = 0, quizAnswers = [], toastTimer;

function product(id){return PRODUCTS.find(p=>p.id===id)}
function showToast(message){const t=$("#toast");t.textContent=message;t.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove("show"),2300)}
function price(p){return money(p.price)}
function productCard(p,index=0){
 const saved=wishlist.includes(p.id), inCompare=compared.includes(p.id);
 return `<article class="product-card" style="animation-delay:${Math.min(index,12)*35}ms">
  <div class="product-image-wrap"><span class="product-badge ${p.featured>=18?"":"subtle"}">${p.featured>=18?"AEVOR PICK":p.type}</span>
   <button class="heart-btn ${saved?"saved":""}" data-action="wishlist" data-id="${p.id}" aria-label="${saved?"Remove from":"Add to"} wishlist">${saved?"♥":"♡"}</button>
   <img src="${safe(p.image)}" alt="${safe(p.name)} watch" loading="lazy" onerror="this.style.opacity='.15';this.alt='Product image unavailable'">
   <button class="card-compare" data-action="compare" data-id="${p.id}">${inCompare?"✓ Added":"＋ Compare"}</button>
  </div>
  <div class="product-info"><div class="product-brand">${safe(p.brand)}</div><h3 class="product-name">${safe(p.name)}</h3>
   <div class="product-meta"><span>${safe(p.gender)}</span><span>·</span><span>${safe(p.type)}</span><span>·</span><span>${safe(p.movement)}</span></div>
   <div class="product-bottom"><div class="product-price">${price(p)}</div><button class="quick-btn" data-action="view" data-id="${p.id}">Quick view ↗</button></div>
  </div></article>`;
}
function currentProducts(){
 let list=PRODUCTS.filter(p=>{
  if(filters.category==="men"&&p.gender!=="Men")return false;
  if(filters.category==="women"&&p.gender!=="Women")return false;
  if(filters.category==="analog"&&p.type!=="Analog")return false;
  if(filters.category==="digital"&&p.type!=="Digital")return false;
  if(filters.category==="smart"&&p.type!=="Smart")return false;
  if(filters.gender&&p.gender!==filters.gender)return false;
  if(filters.type&&p.type!==filters.type)return false;
  if(filters.strap&&p.strap!==filters.strap)return false;
  if(filters.movement&&p.movement!==filters.movement)return false;
  if(filters.style&&p.style!==filters.style)return false;
  if(filters.budget&&(p.price==null||p.price>Number(filters.budget)))return false;
  if(filters.search&&!`${p.name} ${p.brand} ${p.type} ${p.gender} ${p.style}`.toLowerCase().includes(filters.search.toLowerCase()))return false;
  return true;
 });
 const sort=$("#sort-select")?.value||"featured";
 if(sort==="price-low")list.sort((a,b)=>(a.price??Infinity)-(b.price??Infinity));
 if(sort==="price-high")list.sort((a,b)=>(b.price??-1)-(a.price??-1));
 if(sort==="name")list.sort((a,b)=>a.name.localeCompare(b.name));
 if(sort==="featured")list.sort((a,b)=>b.featured-a.featured);
 return list;
}
function renderCatalogue(){
 const list=currentProducts();$("#product-grid").innerHTML=list.map(productCard).join("");
 $("#empty-state").hidden=list.length>0;$("#results-count").textContent=`Showing ${list.length} of ${PRODUCTS.length} watches`;
 $("#tab-all-count").textContent=PRODUCTS.length;
 const active=Object.entries(filters).filter(([k,v])=>k!=="category"&&v).length;
 $("#filter-active-count").textContent=active?`(${active})`:"";
 $$(".filter-tab").forEach(b=>b.classList.toggle("active",b.dataset.category===filters.category));
}
function renderWishlist(){
 $("#wishlist-count").textContent=wishlist.length;
 const items=wishlist.map(product).filter(Boolean);
 $("#watchlist-section").hidden=!items.length;
 $("#watchlist-grid").innerHTML=items.map(p=>miniCard(p,"remove")).join("");
}
function miniCard(p,action="view"){return `<div class="mini-card"><img src="${safe(p.image)}" alt="" loading="lazy"><div><b>${safe(p.name)}</b><small>${price(p)}</small></div><button data-action="${action}" data-id="${p.id}" aria-label="${action} ${safe(p.name)}">${action==="remove"?"×":"↗"}</button></div>`}
function renderRecent(){
 const items=recently.map(product).filter(Boolean).slice(0,4);$("#recent-section").hidden=!items.length;$("#recent-grid").innerHTML=items.map(p=>miniCard(p)).join("");
}
function renderCompareDock(){
 $("#compare-dock").hidden=!compared.length;
 $("#compare-dock-count").textContent=`${compared.length} of 3 selected`;
 $("#compare-dock-items").innerHTML=compared.map(id=>product(id)).filter(Boolean).map(p=>`<span class="dock-chip"><img src="${safe(p.image)}" alt="${safe(p.name)}"></span>`).join("");
}
function toggleWishlist(id){
 wishlist=wishlist.includes(id)?wishlist.filter(x=>x!==id):[...wishlist,id];store.set("wishlist",wishlist);renderCatalogue();renderWishlist();showToast(wishlist.includes(id)?"Added to your watchlist":"Removed from watchlist");
}
function toggleCompare(id){
 if(compared.includes(id))compared=compared.filter(x=>x!==id);
 else if(compared.length>=3){showToast("You can compare up to 3 watches");return}
 else compared.push(id);
 store.set("compare",compared);renderCatalogue();renderCompareDock();showToast(compared.includes(id)?"Added to comparison":"Removed from comparison");
}
function viewed(id){recently=[id,...recently.filter(x=>x!==id)].slice(0,8);store.set("recent",recently);renderRecent()}
function openModal(id){closePanels();$("#overlay").classList.add("show");$(id).classList.add("open");document.body.style.overflow="hidden"}
function closePanels(){
 $$(".modal.open,.drawer.open").forEach(el=>el.classList.remove("open"));
 $("#overlay").classList.remove("show");document.body.style.overflow="";
}
function openProduct(id){
 const p=product(id);if(!p)return;viewed(id);
 const related=PRODUCTS.filter(x=>x.id!==p.id&&(x.type===p.type||x.gender===p.gender)).slice(0,3);
 const specs=Object.entries(p.specs).map(([k,v])=>`<div class="spec-row"><span>${safe(k)}</span><b>${safe(v)}</b></div>`).join("");
 $("#product-modal-content").innerHTML=`<div class="product-detail"><div class="detail-image"><img src="${safe(p.image)}" alt="${safe(p.name)}"></div><div class="detail-copy"><div class="eyebrow">${safe(p.brand)} / ${safe(p.type)}</div><h2>${safe(p.name)}</h2><p>${safe(p.description)}</p><div class="detail-price">${price(p)}</div><div class="detail-specs">${specs}</div><div class="detail-actions"><a class="btn btn-primary" href="${safe(p.affiliate)}" target="_blank" rel="sponsored nofollow noopener">Order now ↗</a><button class="btn btn-outline" data-action="wishlist" data-id="${p.id}">${wishlist.includes(p.id)?"♥ Saved":"♡ Save watch"}</button><button class="btn btn-outline" data-action="compare" data-id="${p.id}">⇄ Compare</button></div><div class="affiliate-note">You will be redirected to the seller's website. AEVOR may earn a commission from qualifying purchases. Price and stock can change on the seller page.</div><div class="related-block"><b>YOU MAY ALSO LIKE</b><div class="related-links">${related.map(x=>`<button data-action="view" data-id="${x.id}"><img src="${safe(x.image)}" alt=""><span>${safe(x.name)}</span></button>`).join("")}</div></div></div></div>`;
 openModal("#product-modal");
}
function openCompare(){
 const items=compared.map(product).filter(Boolean);
 if(!items.length){showToast("Add watches using the + Compare button first");return}
 const rows=[["Price",p=>price(p)],["Gender",p=>p.gender],["Display",p=>p.type],["Strap",p=>p.strap],["Movement",p=>p.movement],["Style",p=>p.style],["Water resistance",p=>p.specs["Water resistance"]],["Marketplace",()=>"Rokomari"],["AEVOR match",p=>matchScore(p)+"%"]];
 const head=`<tr><th>Specification</th>${items.map(p=>`<th><img src="${safe(p.image)}" alt="">${safe(p.name)}<br><button class="text-btn" data-action="compare" data-id="${p.id}">Remove ×</button></th>`).join("")}</tr>`;
 const body=rows.map(([label,fn])=>`<tr><th>${label}</th>${items.map(p=>`<td>${safe(fn(p))}</td>`).join("")}</tr>`).join("");
 $("#compare-content").innerHTML=`<div class="compare-table-wrap"><table class="compare-table">${head}${body}</table></div><p class="affiliate-note">Comparison uses information currently entered in the AEVOR catalogue. “Not specified” means the detail has not been verified. Always confirm on the seller page.</p><button class="btn btn-primary" id="share-compare">Share this comparison ↗</button>`;
 openModal("#compare-modal");
}
function quizMatchScore(p,answers){
 const [gender,type,style,budget]=answers;let score=55;if(p.gender===gender||gender==="Unisex"&&p.gender==="Unisex")score+=12;if(p.type===type)score+=18;if(p.style===style||style==="Minimal"&&p.style==="Casual")score+=10;if(p.price!=null&&p.price<=Number(budget))score+=5;return Math.min(99,score);
}
function matchScore(p){
 const selected=[filters.gender,filters.type,filters.style].filter(Boolean);if(!selected.length)return 82;
 let score=60;selected.forEach((v,i)=>{if((i===0&&p.gender===v)||(i===1&&p.type===v)||(i===2&&p.style===v))score+=13});
 return Math.min(99,score);
}
function openFinder(){quizAnswers=[];renderQuiz();openModal("#finder-modal")}
const quiz=[
 {q:"Who are you choosing for?",sub:"Let's start with the wearer.",opts:[["Men","A watch for him"],["Women","A watch for her"],["Unisex","Style without labels"]]},
 {q:"What kind of display feels right?",sub:"Your preferred way to read time.",opts:[["Analog","Classic hands and dial"],["Digital","Clear, practical display"],["Smart","Connected features"]]},
 {q:"Where will you wear it most?",sub:"Think about your everyday rhythm.",opts:[["Casual","Everyday, easy-going"],["Formal","Polished and refined"],["Sports","Active and functional"],["Minimal","Clean and understated"]]},
 {q:"What's your comfortable budget?",sub:"We'll use the listed catalogue prices.",opts:[["1000","Under ৳1,000"],["2000","৳1,000–৳2,000"],["3000","৳2,000–৳3,000"],["5000","৳3,000–৳5,000"]]}
];
function renderQuiz(){
 const step=quizAnswers.length;$("#quiz-progress-fill").style.width=`${Math.min(100,(step/quiz.length)*100)}%`;
 if(step>=quiz.length){
  const [gender,type,style,budget]=quizAnswers;
  const list=PRODUCTS.filter(p=>(gender==="Unisex"||p.gender===gender||p.gender==="Unisex")&&(p.type===type)&&(p.style===style||style==="Minimal"&&p.style==="Casual")&&p.price!=null&&p.price<=Number(budget)).sort((a,b)=>matchScore(b)-matchScore(a));
  const picks=list.length?list.slice(0,3):PRODUCTS.filter(p=>(gender==="Unisex"||p.gender===gender||p.gender==="Unisex")&&p.type===type&&p.price!=null&&p.price<=Number(budget)).slice(0,3);
  $("#quiz-content").innerHTML=`<div class="quiz-step"><div class="eyebrow">YOUR AEVOR MATCH</div><h2>Your next watch starts here.</h2><p>Based on your answers, these catalogue options are worth exploring.</p>${picks.length?picks.map(p=>`<div class="quiz-result"><img src="${safe(p.image)}" alt="${safe(p.name)}"><h3>${safe(p.name)}</h3><p>${safe(p.description)}</p><b>${price(p)} · ${quizMatchScore(p,quizAnswers)}% preference match</b><p><button class="text-btn" data-action="view" data-id="${p.id}">View watch ↗</button></p></div>`).join(""):"<p>No exact matches found in the current catalogue. Try a wider budget or different style.</p>"}<button class="btn btn-outline" id="quiz-restart">Start again</button></div>`;
  $("#quiz-progress-fill").style.width="100%";return;
 }
 const q=quiz[step];$("#quiz-content").innerHTML=`<div class="quiz-step"><div class="eyebrow">STEP 0${step+1} / 0${quiz.length}</div><h2>${q.q}</h2><p>${q.sub}</p><div class="quiz-options">${q.opts.map(([v,l])=>`<button class="quiz-option" data-quiz="${safe(v)}"><b>${safe(l)}</b><small>Choose this preference</small></button>`).join("")}</div></div>`;
}
function openBudget(){openModal("#budget-modal");renderBudget()}
function renderBudget(){
 const budget=Number($("#budget-input").value)||0;const list=PRODUCTS.filter(p=>p.price!=null&&p.price<=budget).sort((a,b)=>a.price-b.price);
 $("#budget-results").innerHTML=`<p class="modal-lead">${list.length} listed watches at or below ${money(budget)}.</p>`+list.slice(0,8).map(p=>`<div class="budget-result-row"><img src="${safe(p.image)}" alt=""><div><b>${safe(p.name)}</b><small>${price(p)} · ${safe(p.type)}</small></div><button data-action="view" data-id="${p.id}">View ↗</button></div>`).join("")+(list.length>8?`<p class="affiliate-note">Showing 8 of ${list.length} matching watches. Use the catalogue filters to explore all results.</p>`:"");
}
const guides={
 movement:{meta:"WATCH KNOWLEDGE · 4 MIN READ",title:"Quartz vs Automatic: What's the difference?",intro:"The movement is the mechanism that powers a watch. Quartz and automatic watches take different approaches, and each has practical advantages.",sections:[["Quartz movement","Quartz watches use a battery and an electronic oscillator regulated by a quartz crystal. They are generally convenient, accurate and low-maintenance; the battery needs replacing periodically."],["Automatic movement","Automatic watches use a mechanical movement that winds itself through the motion of the wearer's wrist. They do not rely on a conventional battery, but may need servicing and can stop when left unworn."],["Which should you choose?","Choose quartz for straightforward convenience and usually lower upkeep. Choose automatic if you appreciate mechanical engineering and the ritual of a traditional movement. Compare the specific model's service requirements before buying."]]},
 first:{meta:"BUYING GUIDE · 5 MIN READ",title:"How to choose your first watch",intro:"Your first watch should work with your life, not just look good in a product photo. Start with a few practical questions.",sections:[["1. Define the use","Think about where you will wear it most: everyday, formal occasions, sport or a mix. That will narrow the style and display type."],["2. Set a realistic budget","Decide your comfortable spending limit before browsing. Compare features and seller details within that range, and leave room for shipping or other costs."],["3. Prioritise comfort","Consider case size, thickness, weight and strap material. A watch can look excellent online but feel different on your wrist."],["4. Verify the details","Check the exact model number, movement, water-resistance rating, warranty, seller reputation and return policy on the marketplace page."]]},
 strap:{meta:"STYLE NOTES · 3 MIN READ",title:"Leather vs Stainless Steel straps",intro:"A strap changes how a watch looks and feels. The right choice depends on comfort, climate, maintenance and personal style.",sections:[["Leather","Leather often gives a warm, classic appearance and can work well with smart-casual or formal outfits. It can be affected by sweat and moisture, so it needs care and may not be ideal for swimming or heavy workouts."],["Stainless steel","Steel bracelets offer a durable, versatile look and are generally easier to wipe clean. They can feel heavier, may need sizing, and can be less comfortable in some hot conditions."],["Make the choice","Think about daily wear, climate, outfit choices and wrist comfort. Always verify the actual strap material in the seller's specification; product photos alone may be misleading."]]}
};
function openGuide(key){const g=guides[key];if(!g)return;$("#guide-content").innerHTML=`<article class="guide-content"><div class="guide-meta">${g.meta}</div><h2>${g.title}</h2><p>${g.intro}</p>${g.sections.map(([h,p])=>`<h3>${h}</h3><p>${p}</p>`).join("")}<p><strong>AEVOR note:</strong> Product specifications and seller policies can vary. Confirm the exact details on the marketplace before ordering.</p></article>`;openModal("#guide-modal")}
function shareUrl(ids,type){
 const url=new URL(location.href);url.searchParams.set(type,ids.join(","));return url.toString();
}
function shareText(title,url){
 if(navigator.share){navigator.share({title,text:"Explore my AEVOR watch selection.",url}).catch(()=>{});}
 else if(navigator.clipboard){navigator.clipboard.writeText(url).then(()=>showToast("Share link copied")).catch(()=>showToast("Unable to copy link"));}
 else showToast("Sharing is not supported in this browser");
}
function shareWatchlist(){if(!wishlist.length){showToast("Your watchlist is empty");return}shareText("My AEVOR watchlist",shareUrl(wishlist,"watches"))}
function shareCompare(){if(!compared.length)return;shareText("AEVOR watch comparison",shareUrl(compared,"compare"))}
function showEditor(){
 const ranked=PRODUCTS.filter(p=>p.price!=null).sort((a,b)=>b.price-a.price);
 if(!ranked.length)return;const week=Math.floor(Date.now()/(7*24*60*60*1000));editorIndex=editorIndex||0;const p=ranked[editorIndex%ranked.length];
 $("#editor-image").src=p.image;$("#editor-name").textContent=p.name;$("#editor-description").textContent=p.description;$("#editor-price").textContent=price(p);$("#editor-index").textContent=String(editorIndex+1).padStart(2,"0");$("#editor-view").dataset.id=p.id;
}
function showWeekly(){
 // Weekly selection rotates through price-ranked watches, starting with the most expensive entry in week zero.
 const ranked=PRODUCTS.filter(p=>p.price!=null).sort((a,b)=>b.price-a.price);
 if(ranked.length){const week=Math.floor(Date.now()/(7*24*60*60*1000));editorIndex=week%ranked.length;showEditor();}
 $("#hero-product-count").textContent=PRODUCTS.length+"+";
}
function applySharedState(){
 const params=new URLSearchParams(location.search);
 const ids=(params.get("watches")||params.get("compare")||"").split(",").filter(id=>product(id)).slice(0,3);
 if(params.has("watches")){wishlist=[...new Set([...wishlist,...ids])];store.set("wishlist",wishlist);renderWishlist()}
 if(params.has("compare")){compared=ids;store.set("compare",compared);renderCompareDock()}
}
function setTheme(theme){document.body.classList.toggle("light",theme==="light");store.set("theme",theme)}
function initReveal(){
 const nodes=$$(".reveal");if(!("IntersectionObserver"in window)){nodes.forEach(n=>n.classList.add("visible"));return}
 const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}}),{threshold:.08});nodes.forEach(n=>io.observe(n));
}
function filterFromLink(value){
 filters.category=value;filters.search="";$("#catalogue-search").value="";renderCatalogue();$("#catalogue").scrollIntoView({behavior:"smooth"});
}
function handleAction(action,id){
 if(action==="wishlist")toggleWishlist(id);
 if(action==="compare")toggleCompare(id);
 if(action==="view")openProduct(id);
 if(action==="remove"){wishlist=wishlist.filter(x=>x!==id);store.set("wishlist",wishlist);renderWishlist();renderCatalogue();showToast("Removed from watchlist")}
}
document.addEventListener("click",e=>{
 const action=e.target.closest("[data-action]");if(action){handleAction(action.dataset.action,action.dataset.id);return}
 const q=e.target.closest("[data-quiz]");if(q){quizAnswers.push(q.dataset.quiz);renderQuiz();return}
 const budget=e.target.closest("[data-budget]");if(budget){$("#budget-input").value=budget.dataset.budget;renderBudget();return}
 const guide=e.target.closest(".guide-open");if(guide){openGuide(guide.dataset.guide);return}
 const filterLink=e.target.closest("[data-filter-link]");if(filterLink){e.preventDefault();closePanels();filterFromLink(filterLink.dataset.filterLink);return}
 if(e.target.closest("[data-close]"))closePanels();
});
$("#overlay").addEventListener("click",closePanels);
$("#menu-toggle").addEventListener("click",()=>openModal("#mobile-drawer"));
$("#search-open").addEventListener("click",()=>{openModal("#search-modal");$("#global-search").focus()});
$("#wishlist-open").addEventListener("click",()=>{$("#watchlist-section").hidden=false;renderWishlist();closePanels();$("#watchlist-section").scrollIntoView({behavior:"smooth"})});
$("#theme-toggle").addEventListener("click",()=>setTheme(document.body.classList.contains("light")?"dark":"light"));
$("#footer-theme").addEventListener("click",()=>setTheme(document.body.classList.contains("light")?"dark":"light"));
$("#finder-open").addEventListener("click",openFinder);$("#finder-open-2").addEventListener("click",openFinder);$("#feature-finder").addEventListener("click",openFinder);$("#footer-finder").addEventListener("click",openFinder);$("#drawer-finder").addEventListener("click",openFinder);
$("#feature-compare").addEventListener("click",openCompare);$("#footer-compare").addEventListener("click",openCompare);$("#compare-open").addEventListener("click",openCompare);
$("#feature-watchlist").addEventListener("click",()=>{$("#watchlist-section").hidden=false;renderWishlist();$("#watchlist-section").scrollIntoView({behavior:"smooth"})});
$("#feature-budget").addEventListener("click",openBudget);$("#budget-open").addEventListener("click",openBudget);
$("#filters-toggle").addEventListener("click",()=>$("#filter-panel").hidden=!$("#filter-panel").hidden);
$("#clear-filters").addEventListener("click",()=>{filters={category:"all",gender:"",type:"",strap:"",movement:"",style:"",budget:"",search:""};["gender","type","strap","movement","style","budget"].forEach(k=>$("#"+k+"-filter").value="");$("#catalogue-search").value="";renderCatalogue()});
$("#empty-reset").addEventListener("click",()=>$("#clear-filters").click());
["gender","type","strap","movement","style","budget"].forEach(k=>$("#"+k+"-filter").addEventListener("change",e=>{filters[k]=e.target.value;renderCatalogue()}));
$$(".filter-tab").forEach(b=>b.addEventListener("click",()=>{filters.category=b.dataset.category;renderCatalogue()}));
$("#catalogue-search").addEventListener("input",e=>{filters.search=e.target.value;renderCatalogue()});
$("#global-search").addEventListener("input",e=>{filters.search=e.target.value;filters.category="all";renderCatalogue();$("#search-suggestions").innerHTML=currentProducts().slice(0,5).map(p=>`<div class="budget-result-row"><img src="${safe(p.image)}" alt=""><div><b>${safe(p.name)}</b><small>${price(p)}</small></div><button data-action="view" data-id="${p.id}">View ↗</button></div>`).join("")});
$("#sort-select").addEventListener("change",renderCatalogue);
document.addEventListener("keydown",e=>{if(e.key==="Escape")closePanels();if(e.key==="/"&&!["INPUT","TEXTAREA"].includes(document.activeElement.tagName)){e.preventDefault();$("#search-open").click()}});
$("#editor-next").addEventListener("click",()=>{editorIndex=(editorIndex+1)%PRODUCTS.filter(p=>p.price!=null).length;showEditor()});
$("#editor-view").addEventListener("click",()=>openProduct($("#editor-view").dataset.id));
$("#budget-submit").addEventListener("click",renderBudget);
$("#budget-input").addEventListener("input",renderBudget);
$("#compare-clear").addEventListener("click",()=>{compared=[];store.set("compare",compared);renderCompareDock();renderCatalogue()});
$("#share-watchlist").addEventListener("click",shareWatchlist);
$("#share-compare").addEventListener("click",shareCompare);
$("#quiz-restart")?.addEventListener("click",()=>{quizAnswers=[];renderQuiz()});
document.addEventListener("click",e=>{if(e.target.id==="quiz-restart"){quizAnswers=[];renderQuiz()}if(e.target.id==="share-compare")shareCompare()});
$("#year").textContent=new Date().getFullYear();
setTheme(store.get("theme","dark"));
renderCatalogue();renderWishlist();renderRecent();renderCompareDock();showEditor();showWeekly();applySharedState();initReveal();
if("serviceWorker"in navigator&&location.protocol.startsWith("http"))window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
