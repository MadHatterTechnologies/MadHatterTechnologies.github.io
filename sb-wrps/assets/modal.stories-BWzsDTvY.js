import{t as m,D as b,T as r,a as y}from"./twig-7zesn7ht.js";import"./_commonjsHelpers-C4iS2aBk.js";const v=t=>t.extendFunction("reverse",()=>e=>e.split(" ").reverse().join(" "));v(r);const g=t=>t.extendFilter("clean_unique_id",()=>e=>e.split(" ").reverse().join(" "));g(r);y(r);r.cache(!1);const l=t=>t,w=(t={})=>{const e=m.twig({id:"/var/www/html/src/components/modal/modal.twig",data:[{type:"raw",value:`
`,position:{start:53,end:54}},{type:"logic",token:{type:"Twig.logic.type.set",key:"uniqueId",expression:[{type:"Twig.expression.type.variable",value:"modal_id",match:["modal_id"]},{type:"Twig.expression.type.variable",value:"modal_id",match:["modal_id"]},{type:"Twig.expression.type.filter",value:"raw",match:["|raw","raw"]},{type:"Twig.expression.type._function",fn:"random",params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}],position:{start:54,end:109}},position:{start:54,end:109}},{type:"raw",value:`
<button id="modalOpen--`,position:{start:110,end:134}},{type:"output",position:{start:134,end:148},stack:[{type:"Twig.expression.type.variable",value:"uniqueId",match:["uniqueId"],position:{start:134,end:148}}]},{type:"raw",value:'" class="',position:{start:148,end:157}},{type:"output",position:{start:157,end:198},stack:[{type:"Twig.expression.type.variable",value:"button_classes",match:["button_classes"],position:{start:157,end:198}},{type:"Twig.expression.type.filter",value:"default",match:["|default","default"],position:{start:157,end:198},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:157,end:198}},{type:"Twig.expression.type.string",value:"sb-button",position:{start:157,end:198}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:157,end:198},expression:!1}]}]},{type:"raw",value:'">',position:{start:198,end:200}},{type:"output",position:{start:200,end:217},stack:[{type:"Twig.expression.type.variable",value:"button_text",match:["button_text"],position:{start:200,end:217}}]},{type:"raw",value:`</button>

<div id="modal--`,position:{start:217,end:244}},{type:"output",position:{start:244,end:258},stack:[{type:"Twig.expression.type.variable",value:"uniqueId",match:["uniqueId"],position:{start:244,end:258}}]},{type:"raw",value:`" class="sb-modal">
	<div class="sb-modal__content" tabindex="-1" role="dialog" aria-modal="true">
		<button class="sb-modal__close-button" aria-label="Close">
		X
		</button>

		`,position:{start:258,end:437}},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"modal_content",position:{start:437,end:462},output:[{type:"raw",value:"			",position:{start:463,end:466}},{type:"output",position:{start:466,end:479},stack:[{type:"Twig.expression.type.variable",value:"content",match:["content"],position:{start:466,end:479}}]},{type:"raw",value:`
		`,position:{start:479,end:482}}]},position:{open:{start:437,end:462},close:{start:482,end:496}}},{type:"raw",value:`	</div>
</div>

<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
`,position:{start:497,end:497}}],precompiled:!0});e.options.allowInlineIncludes=!0;try{let a=t.defaultAttributes?t.defaultAttributes:[];return Array.isArray(a)||(a=Object.entries(a)),l(e.render({attributes:new b(a),active_theme:"my_super_theme",is_front_page:!1,...t}))}catch(a){return l("An error occurred whilst rendering /var/www/html/src/components/modal/modal.twig: "+a.toString())}};console.log("Modal Launched");const f=document.querySelectorAll(".sb-modal");f.forEach(t=>{const e=t.id,a=e.substring(e.indexOf("modal--")+7),n=document.getElementById(`modalOpen--${a}`),s=document.getElementById(`modal--${a}`),c=s.querySelector(".sb-modal__close-button");n.addEventListener("click",o=>{o.preventDefault(),s.style.display="block",n.disabled=!0}),c.addEventListener("click",o=>{o.preventDefault(),s.style.display="none",n.disabled=!1}),window.addEventListener("keydown",function(o){o.key==="Escape"&&(s.style.display="none",n.disabled=!1)}),window.onclick=function(o){o.target==t&&(s.style.display="none",n.disabled=!1)}});const _={title:"Components/Modal",parameters:{componentSubtitle:""},argTypes:{modal_id:{type:"string",description:"ID string — if not provided, one will be randomly generated."},button_text:{description:"Text for open button"},button_classes:{description:"CSS classes for open button",table:{defaultValue:{summary:"sb-button"}}},content:{description:"Example modal content"}},args:{modal_id:"123",button_text:"Open Modal",button_classes:"sb-button",content:"Sample content for modal. Skateboard ramps kogi sriracha, jianbing before they sold out celiac seitan ethical squid hammock cronut. Artisan small batch same paleo tote bag, woke poutine roof party put a bird on it gluten-free."},component:w},i={};var d,p,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(u=(p=i.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const T=["Default"];export{i as Default,T as __namedExportsOrder,_ as default};
