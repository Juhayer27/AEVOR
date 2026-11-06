/* ===== PRODUCT DATA: add/remove watches here =====
[id, name, brand, price(Tk or null), gender, type, strap, movement, style, affiliateLink, imageURL, waterResistance] */
const P=D.map(a=>({id:a[0],n:a[1],b:a[2],p:a[3],g:a[4],t:a[5],s:a[6],m:a[7],st:a[8],l:a[9],i:a[10],w:a[11]}));
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const LS=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch(e){return d}},SV=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
const FB="assets/logo-full.png";
const fm=p=>p.p?"৳"+p.p.toLocaleString("en-IN"):"Check price";
const byId=id=>P.find(p=>p.id==id);
let F={q:"",g:"",t:"",st:"",m:"",max:4000,so:"c"},wl=LS("aev_wl",[]),rv=LS("aev_rv",[]),pf=LS("aev_pf",null),cmp=[];
const I={h:'<svg viewBox="0 0 24 24"><path d="M12 21s-8-5-8-11a4.5 4.5 0 018-3 4.5 4.5 0 018 3c0 6-8 11-8 11z"/></svg>',c:'<svg viewBox="0 0 24 24"><path d="M5 12l5 5 9-10"/></svg>'};
function toast(m){const t=$("#ts");t.textContent=m;t.classList.add("o");clearTimeout(t.k);t.k=setTimeout(()=>t.classList.remove("o"),2200)}
/* match score */
function score(p){if(!pf)return null;let s=0,w=0;const add=(k,ok)=>{w+=k;if(ok)s+=k};
add(30,pf.g=="Any"||p.g==pf.g||p.g=="Unisex");add(25,p.t==pf.t);add(25,p.st==pf.st);
if(pf.b){w+=20;s+=p.p==null?10:p.p<=pf.b?20:Math.max(0,20-(p.p-pf.b)/pf.b*40)}
return Math.round(s/w*100)}
/* card */
function card(p,i,mini){const sc=score(p);return`<article class="cd" style="--d:${i%8}"><button class="hb ${wl.includes(p.id)?"on":""}" data-w="${p.id}" aria-label="Save to watchlist">${I.h}</button><button class="cm ${cmp.includes(p.id)?"on":""}" data-c="${p.id}" aria-label="Compare">${I.c}</button><div class="im" data-q="${p.id}"><img src="${p.i}" alt="${p.n} ${p.t} watch" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${FB}'">${sc!=null?`<span class="ms">${sc}% match</span>`:""}</div><div class="cb"><small>${p.b} · ${p.t}</small><h3>${p.n}</h3><div class="pr">${fm(p)}</div><div class="sp">${p.m} · ${p.s}</div><div class="vd"><button data-q="${p.id}">View details</button></div></div></article>`}
/* filter */
function list(){let a=P.filter(p=>(!F.q||(p.n+p.b).toLowerCase().includes(F.q))&&(!F.g||p.g==F.g||(p.g=="Unisex"&&F.g!="")) &&(!F.t||p.t==F.t||(F.t=="Digital"&&p.t=="Smart"))&&(!F.st||p.st==F.st)&&(!F.m||p.s==F.m||p.m==F.m)&&(F.max>=4000||(p.p!=null&&p.p<=F.max)));
if(F.so=="a")a.sort((x,y)=>(x.p||1e9)-(y.p||1e9));if(F.so=="d")a.sort((x,y)=>(y.p||0)-(x.p||0));if(F.so=="n")a.sort((x,y)=>x.n.localeCompare(y.n));
if(F.so=="c"&&pf)a.sort((x,y)=>score(y)-score(x));return a}
function render(){const a=list();$("#gr").innerHTML=a.length?a.map(card).join(""):'<div class="em">No watches match. Try widening your budget or clearing a filter.</div>';$("#cnt").textContent=a.length+" of "+P.length+" watches"+(pf?" · sorted by your match":"");$("#bl").textContent=F.max>=4000?"Any":"≤ ৳"+F.max;
$$("#cg .ch").forEach(c=>c.classList.toggle("on",(c.dataset.g??"")==F.g&&(c.dataset.t??"")==F.t&&c.dataset.k!="x"||c.dataset.k=="x"&&F.st=="Sports"&&!F.g&&!F.t))}
const CH=[["All",{}],["Men",{g:"Men"}],["Women",{g:"Women"}],["Analog",{t:"Analog"}],["Digital",{t:"Digital"}],["Sports",{st:"Sports"}]];
$("#cg").innerHTML=CH.map((c,i)=>`<button class="ch" data-i="${i}" data-g="${c[1].g||""}" data-t="${c[1].t||""}" ${c[1].st?'data-k="x"':""}>${c[0]}</button>`).join("");
function setF(o){F.g=o.g||"";F.t=o.t||"";F.st=o.st||"";$("#ft1").value=F.t;$("#fs").value=F.st;render()}
$("#cg").onclick=e=>{const b=e.target.closest(".ch");if(b)setF(CH[b.dataset.i][1])};
$$(".nl a[data-g],.nl a[data-t]").forEach(a=>a.onclick=()=>setF({g:a.dataset.g,t:a.dataset.t}));
$("#q").oninput=e=>{F.q=e.target.value.toLowerCase().trim();render()};
$("#ft1").onchange=e=>{F.t=e.target.value;render()};$("#fs").onchange=e=>{F.st=e.target.value;render()};$("#fm").onchange=e=>{F.m=e.target.value;render()};
$("#bg").oninput=e=>{F.max=+e.target.value;render()};$("#so").onchange=e=>{F.so=e.target.value;render()};
$("#ft").onclick=()=>$("#fp").classList.toggle("o");
/* modal */
const M=$("#md");let last;
function open(h){last=document.activeElement;$("#mt").innerHTML=h;M.classList.add("o");document.body.style.overflow="hidden";$(".mc").scrollTop=0;$("#mx").focus()}
function close(){M.classList.remove("o");document.body.style.overflow="";last&&last.focus&&last.focus()}
$("#mx").onclick=close;M.querySelector("i").onclick=close;document.onkeydown=e=>{if(e.key=="Escape")close()};
function quick(id){const p=byId(id);rv=[id,...rv.filter(x=>x!=id)].slice(0,8);SV("aev_rv",rv);renderRV();
const rel=P.filter(x=>x.id!=id&&(x.g==p.g||x.t==p.t)).sort((a,b)=>Math.abs((a.p||0)-(p.p||0))-Math.abs((b.p||0)-(p.p||0))).slice(0,4),sc=score(p);
open(`<div class="qv"><div class="im"><img src="${p.i}" alt="${p.n}" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${FB}'"></div><div><small style="color:var(--mu)">${p.b}</small><h2 style="margin:4px 0">${p.n}</h2><div class="pr" style="font-size:26px">${fm(p)}</div>${sc!=null?`<p class="tg">${sc}% match: ${why(p)}</p>`:""}<table><tr><th>Type</th><td>${p.t}</td></tr><tr><th>Gender</th><td>${p.g}</td></tr><tr><th>Movement</th><td>${p.m}</td></tr><tr><th>Strap</th><td>${p.s}</td></tr><tr><th>Style</th><td>${p.st}</td></tr><tr><th>Water</th><td>${p.w}</td></tr><tr><th>Marketplace</th><td>Rokomari</td></tr></table><a class="cta" style="width:100%;justify-content:center" href="${p.l}" target="_blank" rel="noopener sponsored">Order Now</a><div style="display:flex;gap:8px;margin-top:10px"><button class="cta g" style="flex:1;margin:0;justify-content:center" data-w="${p.id}">Save</button><button class="cta g" style="flex:1;margin:0;justify-content:center" data-c="${p.id}">Compare</button></div></div></div><h3 style="margin:26px 0 10px">Related watches</h3><div class="rw">${rel.map(card).join("")}</div>`)}
function why(p){const r=[];if(p.g==pf.g||pf.g=="Any")r.push("right fit");if(p.t==pf.t)r.push(p.t.toLowerCase()+" type");if(p.st==pf.st)r.push(p.st.toLowerCase()+" style");if(pf.b&&p.p&&p.p<=pf.b)r.push("in budget");return r.join(", ")||"partial fit"}
/* watchlist / compare */
function tog(id){id=+id;wl=wl.includes(id)?wl.filter(x=>x!=id):[...wl,id];SV("aev_wl",wl);sync();toast(wl.includes(id)?"Saved to watchlist":"Removed")}
function tc(id){id=+id;if(cmp.includes(id))cmp=cmp.filter(x=>x!=id);else if(cmp.length>=3)return toast("Compare up to 3 watches");else cmp.push(id);sync()}
function sync(){$("#wc").textContent=wl.length;$("#wc").style.display=wl.length?"":"none";$$("[data-w]").forEach(b=>b.classList.toggle("on",wl.includes(+b.dataset.w)));$$(".cm").forEach(b=>b.classList.toggle("on",cmp.includes(+b.dataset.c)));
$("#tn").textContent=cmp.length+" of 3 selected";$("#tr").classList.toggle("o",cmp.length>0)}
$("#cl").onclick=()=>{cmp=[];sync()};
$("#go").onclick=()=>{if(cmp.length<2)return toast("Pick at least 2 watches");const a=cmp.map(byId),rows=[["Price",p=>fm(p)],["Type",p=>p.t],["Movement",p=>p.m],["Strap",p=>p.s],["Style",p=>p.st],["Gender",p=>p.g],["Water",p=>p.w],["Marketplace",p=>"Rokomari"]];const pr=Math.min(...a.map(p=>p.p||1e9));
open(`<h2>Compare</h2><div class="ct"><table><tr><th></th>${a.map(p=>`<th>${p.n}</th>`).join("")}</tr>${rows.map(r=>{const v=a.map(p=>r[1](p)),same=v.every(x=>x==v[0]);return`<tr><td>${r[0]}</td>${a.map((p,i)=>`<td class="${r[0]=="Price"&&p.p==pr?"hl":!same&&r[0]!="Price"?"hl":""}">${v[i]}</td>`).join("")}</tr>`}).join("")}<tr><td></td>${a.map(p=>`<td><a class="cta" style="padding:9px 16px;font-size:13px" href="${p.l}" target="_blank" rel="noopener sponsored">Order Now</a></td>`).join("")}</tr></table></div><p class="sub">Highlighted cells show where watches differ. Lowest price is marked.</p><button class="cta g" style="margin:0" data-share="${cmp.join(",")}">Copy share link</button>`)};
$("#wb").onclick=()=>{const a=wl.map(byId).filter(Boolean);open(`<h2>My Watchlist</h2>${a.length?`<div class="gr" style="grid-template-columns:repeat(2,1fr)">${a.map(card).join("")}</div><button class="cta" style="margin-top:20px" data-share="w:${wl.join(",")}">Share watchlist</button>`:'<p class="sub">Tap the heart on any watch to save it here.</p>'}`)};
/* global clicks */
document.addEventListener("click",e=>{const t=e.target.closest("[data-w],[data-c],[data-q],[data-share],[data-quiz],[data-art]");if(!t)return;
if(t.dataset.w){e.stopPropagation();return tog(t.dataset.w)}if(t.dataset.c)return tc(t.dataset.c);
if(t.dataset.q){const was=M.classList.contains("o");quick(+t.dataset.q);return}
if(t.dataset.share){const u=location.href.split("#")[0]+"#"+(t.dataset.share.startsWith("w:")?"w="+t.dataset.share.slice(2):"c="+t.dataset.share);(navigator.clipboard?navigator.clipboard.writeText(u):Promise.reject()).then(()=>toast("Link copied"),()=>prompt("Copy this link",u))}
if("quiz" in t.dataset)quiz(0);if(t.dataset.art)art(+t.dataset.art)});
/* hero extras */
const ex=P.filter(p=>p.p).sort((a,b)=>b.p-a.p),wk=Math.floor(Date.now()/6048e5),wow=ex[wk%5+1]||ex[1];
$("#ed").innerHTML=[[ex[0],"Editor’s Choice"],[wow,"Watch of the Week"]].map(([p,l])=>`<div class="ft"><div class="im" data-q="${p.id}"><img src="${p.i}" alt="${p.n}" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${FB}'"></div><div><span class="tg">${l}</span><h3>${p.n}</h3><p class="sub" style="margin:0 0 14px">${p.b} · ${p.m} · ${p.s} strap</p><div class="pr" style="font-size:28px;margin-bottom:16px">${fm(p)}</div><button class="cta" data-q="${p.id}">View details</button></div></div>`).join("");
/* picks */
const PK=[["Best Picks",P.filter(p=>p.p).sort((a,b)=>b.p-a.p).slice(0,6)],["Under ৳1,000",P.filter(p=>p.p&&p.p<1000)],["Under ৳2,000",P.filter(p=>p.p&&p.p<2000)],["Minimalist",P.filter(p=>p.t=="Analog"&&p.st!="Sports")],["Everyday",P.filter(p=>p.st=="Casual")],["For Men",P.filter(p=>p.g=="Men")],["For Women",P.filter(p=>p.g=="Women")]];
$("#pt").innerHTML=PK.map((k,i)=>`<button class="ch" data-p="${i}">${k[0]}</button>`).join("");
$("#pt").onclick=e=>{const b=e.target.closest(".ch");if(b)pick(+b.dataset.p)};
function pick(i){$$("#pt .ch").forEach((c,j)=>c.classList.toggle("on",i==j));$("#pr").innerHTML=PK[i][1].map(card).join("")}pick(0);
function renderRV(){const a=rv.map(byId).filter(Boolean);$("#rvs").hidden=!a.length;$("#rr").innerHTML=a.map(card).join("")}
/* journal */
const J=[["Quartz vs Automatic","A quartz watch runs on a battery and a crystal. It is accurate, light on the wallet and needs almost no care. An automatic winds itself from your wrist motion. It costs more, ticks smoothly and appeals to people who love mechanics. For daily use on a budget, quartz wins. For a long-term keepsake, choose automatic."],["How to Choose Your First Watch","Start with how you will wear it. Pick a case size that sits within your wrist, usually 36 to 42 mm. Choose a neutral dial such as black or white, then a strap you can change. Set a budget first and stay within it. Comfort beats features."],["Leather vs Stainless Steel","Leather looks warm and formal but dislikes water and sweat. Steel is tougher, easier to clean and suits every setting, though it is heavier. Silicone is best for sport. Many people own one of each and swap by occasion."]];
$("#jg").innerHTML=J.map((j,i)=>`<button class="jc" data-art="${i}"><span class="tg">${3+i} min read</span><h3>${j[0]}</h3><p>${j[1].slice(0,90)}…</p></button>`).join("");
function art(i){open(`<span class="tg">Watch Journal</span><h2 style="margin:6px 0 14px">${J[i][0]}</h2><p style="max-width:60ch">${J[i][1]}</p><button class="cta" style="margin-top:20px" data-quiz>Find my watch</button>`)}
/* quiz */
const Q=[["Who is it for?","g",[["Men","Men"],["Women","Women"],["Anyone","Any"]]],["Which type feels like you?","t",[["Analog classic","Analog"],["Digital practical","Digital"],["Smart tech","Smart"]]],["Your usual style?","st",[["Casual everyday","Casual"],["Formal and sharp","Formal"],["Sports and active","Sports"]]],["Your budget?","b",[["Under ৳1,000",1000],["Under ৳2,000",2000],["Under ৳3,500",3500],["No limit",0]]]];
let ans={};
function quiz(n){if(!n)ans={};if(n==Q.length){pf=ans;SV("aev_pf",pf);const r=P.map(p=>[p,score(p)]).sort((a,b)=>b[1]-a[1]).slice(0,3);render();pick(0);
return open(`<div class="qp"><b style="width:100%"></b></div><h2>Your matches</h2><p class="sub">Ranked by how well each fits your answers.</p>${r.map((x,i)=>`<div class="rs" style="--i:${i}"><img src="${x[0].i}" alt="" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${FB}'"><div><b>${x[0].n}</b><br><small style="color:var(--mu)">${fm(x[0])} · ${why(x[0])}</small></div><b class="p">${x[1]}%</b></div>`).join("")}<div style="display:flex;gap:8px;margin-top:20px;flex-wrap:wrap"><button class="cta" data-q="${r[0][0].id}">View top match</button><button class="cta g" data-quiz style="margin:0">Retake</button></div>`)}
const q=Q[n];open(`<div class="qp"><b id="qb"></b></div><div class="qs"><small style="color:var(--mu)">Question ${n+1} of ${Q.length}</small><h2 style="margin-top:4px">${q[0]}</h2><div class="qo">${q[2].map((o,i)=>`<button style="--i:${i}" data-a="${o[1]}">${o[0]}</button>`).join("")}</div></div>`);
requestAnimationFrame(()=>requestAnimationFrame(()=>{const b=$("#qb");if(b)b.style.width=(n/Q.length*100+8)+"%"}));
$$(".qo button").forEach(b=>b.onclick=()=>{ans[q[1]]=q[1]=="b"?+b.dataset.a:b.dataset.a;quiz(n+1)})}
/* nav, theme, drawer */
const L=[["Home","#top"],["All Watches","#shop"],["Men’s","#shop","Men"],["Women’s","#shop","Women"],["Picks","#picks"],["Guides","#journal"]];
$("#dl").innerHTML=L.map((l,i)=>`<a href="${l[1]}" style="--i:${i}" data-dg="${l[2]||""}">${l[0]}</a>`).join("");
const dr=$("#dr");$("#mb").onclick=()=>dr.classList.add("o");dr.querySelector("i").onclick=()=>dr.classList.remove("o");
$("#dl").onclick=e=>{const a=e.target.closest("a");if(a){dr.classList.remove("o");setF({g:a.dataset.dg})}};
addEventListener("scroll",()=>$("#nv").classList.toggle("s",scrollY>20),{passive:true});
const root=document.documentElement,tp=LS("aev_th",null);if(tp)root.dataset.t=tp;
$("#th").onclick=()=>{const l=(root.dataset.t||(matchMedia("(prefers-color-scheme:light)").matches?"light":"dark"))=="light"?"dark":"light";root.dataset.t=l;SV("aev_th",l);$('meta[name=theme-color]').content=l=="light"?"#f3f6f4":"#111412"};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
$$(".rv").forEach(el=>io.observe(el));
$("#yr").textContent=new Date().getFullYear();
/* shared links */
function hash(){const h=location.hash;if(h.startsWith("#w=")){const a=h.slice(3).split(",").map(byId).filter(Boolean);open(`<h2>Shared watchlist</h2><div class="gr" style="grid-template-columns:repeat(2,1fr)">${a.map(card).join("")}</div>`)}
if(h.startsWith("#c=")){cmp=h.slice(3).split(",").map(Number).filter(byId).slice(0,3);sync();$("#go").click()}}
sync();renderRV();render();hash();
if("serviceWorker" in navigator&&location.protocol.startsWith("http"))navigator.serviceWorker.register("sw.js").catch(()=>{});
