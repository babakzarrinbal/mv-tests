(function(t){function e(e){for(var n,l,a=e[0],u=e[1],i=e[2],f=0,p=[];f<a.length;f++)l=a[f],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&p.push(o[l][0]),o[l]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);c&&c(e);while(p.length)p.shift()();return s.push.apply(s,i||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,a=1;a<r.length;a++){var u=r[a];0!==o[u]&&(n=!1)}n&&(s.splice(e--,1),t=l(l.s=r[0]))}return t}var n={},o={app:0},s=[];function l(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=t,l.c=n,l.d=function(t,e,r){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(r,n,function(e){return t[e]}.bind(null,n));return r},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/mv-tests/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var i=0;i<a.length;i++)e(a[i]);var c=u;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("ab8b"),r("87b8"),r("9180");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center",attrs:{id:"app"}},[r("numberTests",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},s=[],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-100 h-100 overflow-auto"},[r("h1",{staticClass:"mb-0 py-2 bg-primary"},[t._v("تست sc190")]),t._l(t.questions,(function(e,n){return r("div",{key:n,ref:"q-"+n,refInFor:!0,staticClass:"w-100 py-3 text-right border-top border-secondary pr-3",staticStyle:{direction:"rtl"}},[r("div",{staticClass:"col-12 mb-3 font-weight-bold"},[t._v(t._s(n+1+"- "+e))]),r("div",{staticClass:"w-100"},t._l(t.answers,(function(e,o){return r("div",{key:e,staticClass:"col-12 pb-2 form-check text-right d-flex answer-item"},[r("label",{staticClass:"form-check-label flex-grow-1 pr-2",attrs:{for:"qid"+n+"_"+e},on:{click:function(e){return t.scrolltonext(n)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.results[n],expression:"results[i]"}],staticClass:"form-check-input",attrs:{type:"radio",name:"q"+n,id:"qid"+n+"_"+e,checked:""},domProps:{value:o+1,checked:t._q(t.results[n],o+1)},on:{change:function(e){return t.$set(t.results,n,o+1)}}}),r("span",{staticClass:"pr-4"},[t._v(t._s(e))])])])})),0)])})),r("div",{staticClass:"w-100 overflow-auto"},[r("table",{staticClass:"table table-striped table-dark w-100"},[r("thead",[r("tr",t._l(2*t.resulttable.length,(function(e){return r("th",{key:e,attrs:{scope:"col"}},[t._v(t._s(e%2==0?t.resulttable[Math.floor(e/2)-1].lable:"#"))])})),0)]),r("tbody",[t._l(t.rowQty,(function(e){return r("tr",{key:e},t._l(2*t.resulttable.length,(function(n){return r("td",{key:n},[t.resulttable[Math.ceil(n/2)-1].questionNos[e-1]?r("span",[n%2==0?r("span",[t._v(" "+t._s(t.results[t.resulttable[Math.floor(n/2)-1].questionNos[e-1]-1])+" ")]):r("span",{staticStyle:{color:"gray"}},[t._v(" "+t._s(t.resulttable[Math.floor(n/2)].questionNos[e-1])+" ")])]):t._e()])})),0)})),r("tr",t._l(2*t.resulttable.length,(function(e){return r("td",{key:e},[e%2==0?r("span",[t._v(" "+t._s(t.resulttable[Math.floor(e/2)-1].questionNos.reduce((function(e,r){return(t.results[r-1]||0)+e}),0))+" ")]):t._e()])})),0)],2)])])],2)},a=[],u=(r("13d5"),{data:function(){var t=["يا از هفته گذشته تا به امروز سردرد داشتهايد؟","آيا از هفته گذشته تا به امروز عصبی بودهايد و از داخل بدن احساس لرزش داشتهايد؟","آيا از هفته گذشته تا به امروز افکار، عقايد يا کلمات ناخوشايند و نامربوطی مرتبا وارد ذهن ما شدهاند که رهايتان نکند؟","آيا از هفته گذشته تا به امروز دچار ضعف، بیحالی و يا سرگیجه بودهايد؟","آيا از هفته گذشته تا به امروز نسبت به روابط زناشويی بیمیل شدهايد؟","آيا از هفته گذشته تا به امروز ايرادگیر و بهانهجو شدهايد؟","آيا از هفته گذشته تا به امروز اين اعتقاد را داشتهايد که شخص ديگری میتواند افکار شما را از راه دور کنترل کند؟","آيا از هفته گذشته تا به امروز احساس کردهايد که ديگران باعث ناراحتیها و گرفتاریهای ما هستند؟","آيا از هفته گذشته تا به امروز فراموشکار شدهايد؟","آيا از هفته گذشته تا به امروز در کارها بیتوجه و بیدقت شدهايد؟","آيا از هفته گذشته تا به امروز دلخور يا عصبی شدهايد؟","آيا از هفته گذشته تا به امروز درد در ناحیه قلب يا سینه داشتهايد؟","آيا از هفته گذشته تا به امروز از رفتن به جاهای باز يا به خیابان احساس ترس کردهايد؟","آيا از هفته گذشته تا به امروز احساس کردهايد کهه قهدرت و بنیهه سهابا را نداريهد و زود خسته میشويد؟","آيا از هفته گذشته تا به امروز اين فکر به ذهنتان آمده که به زندگی خود خاتمه دهید؟","آيا از هفته گذشته تا به امروز صداهايی به گوشتان میآيد که ديگران نمیتوانستند آنها را بشنوند؟","آيا از هفته گذشته تا به امروز احساس لرزش در اندام بدن خود داشتهايد؟","آيا از هفته گذشته تا به امروز اين احساس را داشتهايد که به بیشتر مردم نمیشود اعتمهاد کرد؟","آيا از هفته گذشته تا به امروز زود به گريه میافتید؟","آيا از هفته گذشته تا به امروز بیاشتها شدهايد؟","آيا از هفته گذشته تا به امروز در روابط اجتماعی و يا در رابطه با ديگران احساس خجالت کردهايد؟","آيا از هفته گذشته تا به امروز اين احساس را داشتهايد که در يک بنبست گیهر کهرده ايهد که راه پس و پیش نداريد؟","آيا از هفته گذشته تا به امروز ناگهان و بدون دلیل دچار ترس شدهايد؟","آيا از هفته گذشته تا به امروز طوری عصبانی شدهايد که نتوانید جلوی خودتان را بگیريهد )به اصطالح از کوره در رفتهايد(؟","آيا از هفته گذشته تا به امروز اين احساس را داشتهايه د کهه بترسهید تنهها از خانهه بیهرون برويد؟","آيا از هفته گذشته تا به امروز برای هر چیز کوچکی، خود را سرزنش کردهايد؟","آيا از هفته گذشته تا به امروز کمردرد داشتهايد؟ آيا از هفته گذشته تا به امروز احساس کردهايد که کارهايتان پیشرفت نمیکند؟","آيا از هفته گذشته تا به امروز احساس تنهايی کردهايد؟","آيا از هفته گذشته تا به امروز احساس غمگینی کردهايد؟","آيا از هفته گذشته تا به امروز برای هر چیزی به شدت نگران و دلواپس شدهايد؟","آيا از هفته گذشته تا به امروز نسبت به همه چیز بیعالقه شدهايد؟","آيا از هفته گذشته تا به امروز احساس ترس داشتهايد؟","آيا از هفته گذشته تا به امروز حساس و زودرنج شدهايد؟","آيا از هفته گذشته تا به امروز اين احساس را داشتهايد که سايرين از افکار خصوصهی شهما که به کسی نگفتهايد، با خبر میشوند؟","آيا از هفته گذشته تا به امروز اين اعتقاد را داشتهايد که ديگران شما را درک نمیکننهد و يا با شما همدردی نمیکنند؟","آيا از هفته گذشته تا به امروز اين احساس را داشتهايد که مهردم نسهبت بهه شهما مهربهان نیستند يا شما را دوست ندارند؟","آيا از هفته گذشته تا به امروز برای اينکه کارها را درسهت انجهام بدهیهد مجبهور بهوده ايهد آهسته کار کنید؟","آيا از هفته گذشته تا به امروز تپش قلب داشتهايد؟","آيا از هفته گذشته تا به امروز حالت تهوع يا دل بهم خوردگی داشتهايد؟","آيا از هفته گذشته تا به امروز احساس حقارت داشتهايهد يها خهود را از ديگهران کمتهر يها پايینتر حس کردهايد؟","آيا از هفته گذشته تا به امروز احساس درد و کوفتگی در عضالت بدنتان داشتهايد؟","آيا از هفته گذشته تا به امروز اين احساس را داشتهايد که ديگران شما را زيرنظر دارند يها درباره شما حرف میزنند؟","آيا از هفته گذشته تا به امروز در به خواب رفتن مشکل داشتهايد؟","آيا از هفته گذشته تا به امروز وقتی کاری را انجام میداديد مجبور بودهايد آن را چنهد بهار تکرار کنید تا مطمئن شويد درست انجام دادهايد؟ مثال در را چند بهار امتاهان کنیهد کهه ببینید بسته است يا خیر؟","آيا از هفته گذشته تا به امروز در تصمیم گرفتن مشکل داشتهايد؟","آيا از هفته گذشته تا به امروز از مسافرت با اتوبوس يا قطار، احساس ترس کردهايد؟","آيا از هفته گذشته تا به امروز احساس تنگی نفس داشتهايد؟","آيا از هفته گذشته تا به امروز دچار حالت گرگرفتگی يا سرما سرما شده ايد ؟","آيا از هفته گذشته تا به امروز مجبور بودهايد بعضی کارها را نکنید يا بعضی جاها نرويد؟","آيا از هفته گذشته تا به امروز اتفاق افتاده که حس کنید مغزتان کار نمیکند؟","آيا از هفته گذشته تا به امروز احساس کردهايد بدنتان خهواب میهرود يها گزگز)مهور مهور( میشود؟","آيا از هفته گذشته تا به امروز در گلويتان احساس گرفتگی کردهايد مثل اينکهه چیهزی در گلويتان گیر کرده باشد؟","آيا از هفته گذشته تا به امروز احساس کردهايد که نسبت به آينده امید خهود را از دسهت دادهايد؟","آيا از هفته گذشته تا به امروز تمرکز حواس نداشتهايد؟ يعنی در جمع کردن حواس خهود روی کارها مشکل داشتهايد؟","آيا از هفته گذشته تا به امروز در بعضی از قسمتهای بدن خود احساس ضهعف و سسهتی داشتهايد؟","آيا از هفته گذشته تا به امروز دچار فشارهای روحی و گرفتگی بودهايد؟","آيا از هفته گذشته تا به امروز در دستها و پاها احساس سنگینی کردهايد؟","آيا از هفته گذشته تا به امروز زياد به فکر مرگ و مردن بودهايد؟","آيا از هفته گذشته تا به امروز پرخوری داشتهايد؟","آيا از هفته گذشته تا به امروز وقتی مردم به شما نگاه میکنند يا درباره شما حرف میزنند احساس ناراحتی میکنید؟","آيا از هفته گذشته تا به امروز افکاری به ذهنتان آمده که حس کنید مال خودتان نیست و ديگران آنها را توی مغز شما گذاشتهاند؟","آيا از هفته گذشته تا به امروز در خودتان میهل شهديدی بهه آزار رسها ندن و زدن ديگهران احساس کردهايد؟","آيا از هفته گذشته تا به امروز بعضی صبحها زودتر از حد معمول بیدار شدهايد؟","آيا از هفته گذشته تا به امروز مجبور بودهايد بعضی کارها همچون شستن، شمردن و دست زدن به اشیاء را تکرار کنید؟","آيا از هفته گذشته تا به امروز دچار بدخوابی بودهايد و يا چندين بار در شب از خواب بیدار شدهايد؟","آيا از هفته گذشته تا به امروز میل شديدی به شکستن اشیاء و خرد کردن آنها داشتهايد؟","آيا از هفته گذشته تا به امروز اين احساس را داشتهايد که دارای افکهار و عقا يهدی هسهتید که مخصوص خودتان است و ديگران آن عقايد و افکار را ندارند؟","آيا از هفته گذشته تا به امروز در موقع روبهرو شهدن بها ديگهران زيهاد از حهد بهه رفتهار و حرکات خود توجه داشتهايد؟","آيا از هفته گذشته تا به امروز وقتی در جمهع بهوده ايهد و همچنهین در بهازار و مهمهانی هها احساس ناراحتی کردهايد؟","آيا از هفته گذشته تا به امروز حتی کارهای کوچک برايتان سخت و مشکل بوده است؟","آيا از هفته گذشته تا به امروز دچار هول و وحشتزدگی شدهايد؟","آيا از هفته گذشته تا به امروز در مقابل ديگران يا جمع، از اينکه چیزی بخوريد، احسهاس ناراحتی کردهايد؟","آيا از هفته گذشته تا به امروز با مردم زياد جر و باث و درگیری داشتهايد؟","آيا از هفته گذشته تا به امروز از تنها ماندن ترس و واهمه داشتهايد؟","آيا از هفته گذشته تا به امروز اين احساس را داشتهايد که ديگران ارزشی برای کارهايتهان قائل نیستند؟","آيا از هفته گذشته تا به امروز حتی وقتی با ديگران بودهايد احساس تنهايی کردهايد؟","آيا از هفته گذشته تا به امروز گاهی طوری ناراحت و بیقرار شدهايد که نتوانیهد يکجها آرام بگیريد؟","آيا از هفته گذشته تا به امروز احساس بیمصرفی و بدرد نخوردن داشتهايد؟","آيا از هفته گذشته تا به امروز اين حساس را داشتهايد که اتفاق بدی برايتان خواهد افتاد؟","آيا از هفته گذشته تا به امروز داد و فرياد راه انداختهايد و يا چیزهايی را پرتاب کردهايد؟","آيا از هفته گذشته تا به امروز ترس افتادن و از حال رفتن در کوچه و خیابان يها در انظهار مردم داشتهايد؟","آيا از هفته گذشته تا به امروز ترس از اينکه اگر به ديگران رو بدهیهد از شهما سوءاسه تفاده میکنند، داشتهايد؟","آيا از هفته گذشته تا به امروز درباره امور جنسی افکاری داشتهايد که شما را نگران کند؟","آيا از هفته گذشته تا به امروز اين اعتقاد را داشتهايد که بهه خهاطر گناههانی کهه مرتکهب شدهايد مستوجب تنبیه و مجازات هستید؟","آيا از هفته گذشته تا به امروز اعتقاد و تصورات ترسآمیز داشتهايد؟","آيا از هفته گذشته تا به امروز اين احساس را داشتهايد که عیب و نقص مهمی در بهدنتان پیدا شده است؟","آيا از هفته گذشته تا به امروز احساس کردهايد که در اين دنیا با کسی صمیمی نیستید؟","آيا از هفته گذشته تا به امروز احساس گناه و تقصیر داشتهايد؟","آيا از هفته گذشته تا به امروز احساس کردهايد که دچار بیماری فکری شدهايد؟"],e=[{lable:"t1",questionNos:[1,2,3,4,5,6,7]},{lable:"t2",questionNos:[8,9,10,11,12,13]},{lable:"t3",questionNos:[14,15,16,17,18,19,20,21,22,23]},{lable:"t4",questionNos:[24,25,26,27,28,29,30,31,32,33]},{lable:"t5",questionNos:[34,35,36,37,38,39,40,41,42]},{lable:"t6",questionNos:[43,44,45,46,47,48,49,50,51,52,53,54]},{lable:"t7",questionNos:[55,56,57,58,59,60,61,62,63,64]},{lable:"t8",questionNos:[65,66,67,68,69,70]},{lable:"t9",questionNos:[71,72,73,74,75,76,77,78,79,80,81,82,83]},{lable:"t10",questionNos:[84,85,86,87,88,89,90]}];return{questions:t,answers:["هیچ","کمی","تاحدی","زیاد","خیلی زیاد"],results:Array(t.length),resulttable:e,rowQty:e.reduce((function(t,e){return Math.max(t,e.questionNos.length)}),0)}},created:function(){},methods:{scrolltonext:function(t){var e=this.$refs["q-"+(t+1)];e&&e[0].scrollIntoView({behavior:"smooth",block:"start"})}}}),i=u,c=(r("d8dc"),r("2877")),f=Object(c["a"])(i,l,a,!1,null,"555fecd2",null),p=f.exports,d={name:"App",components:{numberTests:p}},b=d,h=(r("034f"),Object(c["a"])(b,o,s,!1,null,null,null)),v=h.exports,y=r("fe3c");y.attach(document.body),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(v)}}).$mount("#app")},"85ec":function(t,e,r){},"877c":function(t,e,r){},"87b8":function(t,e,r){},9180:function(t,e,r){},d8dc:function(t,e,r){"use strict";var n=r("877c"),o=r.n(n);o.a}});