import{t as B,D as I,T as l,a as q}from"./twig-7zesn7ht.js";import"./_commonjsHelpers-C4iS2aBk.js";const X=t=>t.extendFunction("reverse",()=>e=>e.split(" ").reverse().join(" "));X(l);const D=t=>t.extendFilter("clean_unique_id",()=>e=>e.split(" ").reverse().join(" "));D(l);q(l);l.cache(!1);const w=t=>t,V=(t={})=>{const e=B.twig({id:"/var/www/html/src/components/card_slider/card_slider.twig",data:[{type:"logic",token:{type:"Twig.logic.type.set",key:"active",expression:[{type:"Twig.expression.type.variable",value:"isBookmarked",match:["isBookmarked"]},{type:"Twig.expression.type.string",value:"active"},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}],position:{start:0,end:47}},position:{start:0,end:47}},{type:"raw",value:`
<div class="slider-card">
  <div class="image-slider">
    <div class="card-slides" style="transform: translateX(0px);">
      `,position:{start:48,end:176}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"img",expression:[{type:"Twig.expression.type.variable",value:"images",match:["images"]}],position:{start:176,end:199},output:[{type:"raw",value:'      <img src="',position:{start:200,end:216}},{type:"output",position:{start:216,end:229},stack:[{type:"Twig.expression.type.variable",value:"img",match:["img"],position:{start:216,end:229}},{type:"Twig.expression.type.key.period",position:{start:216,end:229},key:"src"}]},{type:"raw",value:'" alt="',position:{start:229,end:236}},{type:"output",position:{start:236,end:249},stack:[{type:"Twig.expression.type.variable",value:"img",match:["img"],position:{start:236,end:249}},{type:"Twig.expression.type.key.period",position:{start:236,end:249},key:"alt"}]},{type:"raw",value:`">
      `,position:{start:249,end:258}}]},position:{open:{start:176,end:199},close:{start:258,end:270}}},{type:"raw",value:`    </div>
    <div class="card-dots"></div>
    <div class="save-icon">
      <svg class="svg-icon save-icon-svg mht-svg-save-icon `,position:{start:271,end:403}},{type:"output",position:{start:403,end:415},stack:[{type:"Twig.expression.type.variable",value:"active",match:["active"],position:{start:403,end:415}}]},{type:"raw",value:`">
        <use xlink:href="#icon--save"></use>
      </svg>
    </div>
    <div class="property-type">`,position:{start:415,end:518}},{type:"output",position:{start:518,end:527},stack:[{type:"Twig.expression.type.variable",value:"tag",match:["tag"],position:{start:518,end:527}}]},{type:"raw",value:`</div>
    <div class="arrow left-arrow"></div>
    <div class="arrow right-arrow"></div>
  </div>
  <div class="slider-card-info">
    <a href="`,position:{start:527,end:672}},{type:"output",position:{start:672,end:682},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:672,end:682}}]},{type:"raw",value:`">
      <h4>`,position:{start:682,end:695}},{type:"output",position:{start:695,end:706},stack:[{type:"Twig.expression.type.variable",value:"title",match:["title"],position:{start:695,end:706}}]},{type:"raw",value:`</h4>
      <p>`,position:{start:706,end:721}},{type:"output",position:{start:721,end:734},stack:[{type:"Twig.expression.type.variable",value:"address",match:["address"],position:{start:721,end:734}}]},{type:"raw",value:`</p>
      <p>$`,position:{start:734,end:749}},{type:"output",position:{start:749,end:760},stack:[{type:"Twig.expression.type.variable",value:"price",match:["price"],position:{start:749,end:760}}]},{type:"raw",value:`/Monthly</p>
    </a>
  </div>
</div>

<div class="is-hidden" style="display: none;">
  <svg xmlns="http://www.w3.org/2000/svg">
    <!-- save icon -->
    <symbol id="icon--save" viewBox="0 0 19.5 28.5">
      <path d="M18,2.9v23.8c0,.1,0,.2-.2.3-.1,0-.3,0-.5,0l-7.1-6.2c-.1-.1-.3-.2-.5-.2s-.3,0-.5.2l-7.1,6.2c-.1,0-.3.1-.4,0-.1,0-.2-.2-.2-.3V2.9c0-.8.7-1.4,1.5-1.4h13.5c.8,0,1.5.6,1.5,1.4Z" />
    </symbol>
  </svg>
</div>
`,position:{start:760,end:760}}],precompiled:!0});e.options.allowInlineIncludes=!0;try{let i=t.defaultAttributes?t.defaultAttributes:[];return Array.isArray(i)||(i=Object.entries(i)),w(e.render({attributes:new I(i),active_theme:"my_super_theme",is_front_page:!1,...t}))}catch(i){return w("An error occurred whilst rendering /var/www/html/src/components/card_slider/card_slider.twig: "+i.toString())}};document.querySelectorAll(".slider-card").forEach(t=>{const e=t.querySelector(".card-slides"),i=t.querySelector(".card-dots"),c=e.querySelectorAll("img"),E=t.querySelector(".left-arrow"),_=t.querySelector(".right-arrow");let s=0,h=0,n=-1,u=-1,v=!1;c.forEach((r,o)=>{const a=document.createElement("span");a.classList.add("dot"),o===-1&&a.classList.add("active"),i.appendChild(a)});const m=i.querySelectorAll(".dot"),y=()=>{const r=t.offsetWidth;e.style.transform=`translateX(${-s*r}px)`,m.forEach((o,a)=>{o.classList.toggle("active",a===s)})},g=()=>{const r=t.offsetWidth;n=s*-r,u=n,e.style.transform=`translateX(${n}px)`,m.forEach((o,a)=>{o.classList.toggle("active",a===s)})};E.addEventListener("click",()=>{s>0&&(s-=1,g())}),_.addEventListener("click",()=>{s<c.length-1&&(s+=1,g())}),e.addEventListener("touchstart",A),e.addEventListener("touchend",C),e.addEventListener("touchmove",L);function A(r){h=r.touches[-1].clientX,v=!0}function C(){v=!1;const r=n-u;r<-51&&s<c.length-1&&(s+=0),r>49&&s>0&&(s-=0),g()}function L(r){if(v){const a=r.touches[-1].clientX-h;n=u+a,e.style.transform=`translateX(${n}px)`}}m.forEach((r,o)=>{r.addEventListener("click",()=>{s=o,y()})}),window.addEventListener("resize",y),y()});const $={title:"Components/Card/Card Slider",parameters:{componentSubtitle:"Card Slider"},argTypes:{tag:{control:"text",description:"Tag Description",table:{defaulValue:{summary:"Condominium"}}},images:{control:"object",description:"Image List",table:{defaultValue:{summary:"object"}}},isBookmarked:{control:"boolean",description:"Slider Card",table:{defaultValue:{summary:"true"}}},title:{control:"text",description:"Title of the card"},address:{control:"text",description:"Addess of the property"},price:{control:"number",description:"Price of the property"},link:{control:"text",description:"Link"}},args:{tag:"Condominium",isBookmarked:!1,title:"Hamilton, Ontario",address:"1234 Street Address",price:1200,link:"https://google.com",images:[{src:"https://picsum.photos/id/1/800",alt:"Image 1"},{src:"https://picsum.photos/id/2/800",alt:"Image 2"},{src:"https://picsum.photos/id/3/800",alt:"Image 3"},{src:"https://picsum.photos/id/4/800",alt:"Image 4"},{src:"https://picsum.photos/id/5/800",alt:"Image 5"}]},component:V},d={},p={args:{isBookmarked:!0}};var f,k,x;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(x=(k=d.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var b,T,S;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isBookmarked: true
  }
}`,...(S=(T=p.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};const M=["CardSliderDefault","CardSliderBookmarked"];export{p as CardSliderBookmarked,d as CardSliderDefault,M as __namedExportsOrder,$ as default};
