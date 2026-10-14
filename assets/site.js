document.documentElement.classList.add('js');
const AZ={n1:"Fəlsəfəmiz",n2:"Portfolio",n3:"Bloqlar",n4:"Əlaqə",book:"Rezerv et",
h1:"Ōmi İnteryer Dizayn Studiyası",sub:"Təbii materiallar, yumşaq işıqlandırma və düşünülmüş detallarla yaradılmış məkanlar təqdim edən peşəkar studiya.",mq:"Sense of belonging",
o1:"Eksklüziv təklif",o2:"1 saatlıq konsultasiyaya 10% endirim",o3:"Onlayn konsultasiya sifariş et",
s0:"Xidmətlər",s1:"Yaşayış məkanı interyer dizaynı",s1p:"Hərtərəfli məkan planlaşdırılması, memarlıq cizgiləri və struktur interyer konsepsiyaları.",
s2:"Qeyri-yaşayış məkanı interyer dizaynı",s2p:"Ofislər, restoranlar, mağazalar və qonaqpərvərlik məkanlarının interyer dizaynı.",
s3:"Xüsusi mebel və texniki cizgilər",s3p:"Həyat tərzinizin ətraflı təhlilindən sonra xüsusi texniki cizgilər, funksional interyer planları və dəqiq mebel ölçüləri təqdim edirik.",
s4:"Material seçimi",s4p:"İşıqlandırma planlarının, döşəmə örtüyünün, furnituranın və ev dekorunun seçilməsi.",
c0:"Müştərilərimiz nə deyir",c1:"“Möhtəşəm iş”",c1p:"Yapon üslubunda mağaza binam üçün interyer dizaynı lazım idi və Ōmi əla iş gördü",
c2:"“Dizayna heyranedici baxış”",c2p:"Nilüfer istedadlı, yaradıcı və peşəkardır. Dizayna və detallara möhtəşəm baxışı var. Onunla işləmək xoş idi və onu ürəkdən tövsiyə edirəm!",
c3:"“Əməkdaşlığa açıq, peşəkar və stressiz”",c3p:"Əvvəldən sona qədər möhtəşəm təcrübə. Dizayn istədiyimiz atmosferi mükəmməl əks etdirdi və özümüzün heç vaxt düşünmədiyimiz yaradıcı toxunuşlar əlavə etdi. Proses əməkdaşlığa əsaslanan, peşəkar və stressiz keçdi. Son nəticə isti və mehribandır. Çox məmnunuq və bu xidmətləri ürəkdən tövsiyə edirik.",
k0:"Bizimlə əlaqə",k1:"Ünvan",k1p:"Bakı, Ağ Şəhər",k2:"İş saatları",k3:"Mesajınızı buraya yazın",
f1:"Ad *",f2:"Soyad",f3:"E-poçt *",f4:"Mesaj",f5:"Göndər",
m0:"Xəbərlərdən geri qalma :)",m1:"Yeniliyi qaçırma - abunə ol!",m2:"Abunə ol",m3:"Bəli, xəbər bülletininə abunə olmaq istəyirəm.",
pf0:"Layihələrimiz",pf1:"Canlandırdığımız məkanların kolleksiyası: səmimi evlərdən canlı kommersiya məkanlarına qədər. Hər layihə özünəməxsus hekayə ilə başlayır və işləyən planlaşdırma ilə bitir. Gəlin, nəzər salın.",
pr1:"Osakada kafe",pr2:"Japandi üslubunda qonaq otağı və mətbəx interyeri",pr3:"Lüks müasir yataq otağı | isti ağac və dəri",pr4:"Yenidoğulmuş və körpə foto studiyası interyer dizaynı",pr5:"İsti minimal yaşayış məkanı",
back:"← Bütün layihələr",next:"Növbəti layihə",bl0:"Jurnal",bl1:"İnteryer, material və sakit həyat haqqında qeydlər.",bsoon:"Tezliklə",bback:"← Bütün yazılar",
ph1:"Ōmi İnteryer Dizayn Studiyasında interyer dizaynı təkcə estetika deyil; özünüzü rahat, bağlı və həqiqətən evdə hiss etdiyiniz atmosfer yaratmaqdır.",
ph2:"Hər layihədə sadəliyin dərinliyini, zamansız teksturaları və gündəlik həyatın ritminə uyğun sakit estetik dili önə çıxarırıq.",
ph3:"Nəticə: zamanla daha da gözəlləşən və keçici trendlərdən asılı olmayaraq öz unikal hekayəsini daşıyan zamansız məkanlar.",
book2:"Rezerv et →"};
const els=[...document.querySelectorAll('[data-i]')];els.forEach(e=>e._en=e.innerHTML);
function setLang(l){if(!document.documentElement.dataset.fixed)document.documentElement.lang=l;
els.forEach(e=>{e.innerHTML=l==='az'?AZ[e.dataset.i]:e._en});
document.querySelectorAll('.lang button').forEach(b=>b.classList.toggle('on',b.dataset.l===l));
try{localStorage.setItem('omi-lang',l)}catch(_){}}
document.querySelectorAll('.lang button').forEach(b=>b.onclick=()=>setLang(b.dataset.l));
try{if(localStorage.getItem('omi-lang')==='az')setLang('az')}catch(_){}
const G=[...document.querySelectorAll('[data-glide]')];G.forEach(e=>{e._c=0;e._y=0});
const POP=[...document.querySelectorAll('.pop')];POP.forEach(e=>{e._c=0});
const still=matchMedia('(prefers-reduced-motion:reduce)').matches;
const sv=document.getElementById('services'),cl=document.querySelector('.cluster');
function popFrame(){if(!cl)return;const r=cl.getBoundingClientRect();if(!r.height)return;const vh=innerHeight;
POP.forEach(e=>{let t=(vh*.95-r.top)/(vh*.6)-parseFloat(e.dataset.d||0);t=Math.max(0,Math.min(1,t));if(still)t=1;
e._c+=(t-e._c)*.07;const k=1-Math.pow(1-e._c,3),s=e.dataset.dir,x=s==='l'?-240:s==='r'?240:0,y=s==='c'?170:70,rot=s==='l'?-12:s==='r'?12:0;
e.style.transform='translate('+(x*(1-k)).toFixed(1)+'px,'+(y*(1-k)).toFixed(1)+'px) rotate('+(rot*(1-k)).toFixed(2)+'deg) scale('+(.82+.18*k).toFixed(3)+')';e.style.opacity=k.toFixed(3)})}
function frame(){popFrame();const vh=innerHeight;
if(sv)sv.style.top=Math.min(0,vh-sv.offsetHeight)+'px';
G.forEach(e=>{const top=e.getBoundingClientRect().top-e._y;
let t=(vh*.97-top)/(vh*.42)-parseFloat(e.dataset.d||0);t=Math.max(0,Math.min(1,t));if(still)t=1;
e._c+=(t-e._c)*.09;const k=1-Math.pow(1-e._c,3);
e._y=(e.dataset.glide==='up'?130:-90)*(1-k);
e.style.transform='translateY('+e._y.toFixed(1)+'px)';e.style.opacity=k.toFixed(3)});
requestAnimationFrame(frame)}
frame();
