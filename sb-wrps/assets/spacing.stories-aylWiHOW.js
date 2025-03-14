import{t as l,D as g,T as n,a as u}from"./twig-7zesn7ht.js";import"./_commonjsHelpers-C4iS2aBk.js";const v=t=>t.extendFunction("reverse",()=>e=>e.split(" ").reverse().join(" "));v(n);const y=t=>t.extendFilter("clean_unique_id",()=>e=>e.split(" ").reverse().join(" "));y(n);u(n);n.cache(!1);const s=t=>t,r=(t={})=>{const e=l.twig({id:"/var/www/html/src/utilities/spacing/spacing.twig",data:[{type:"raw",value:"<h5>Padding: ",position:{start:0,end:13}},{type:"output",position:{start:13,end:27},stack:[{type:"Twig.expression.type.variable",value:"padding",match:["padding"],position:{start:13,end:27}}]},{type:"raw",value:`</h5>
<h5>Margin: `,position:{start:27,end:45}},{type:"output",position:{start:45,end:59},stack:[{type:"Twig.expression.type.variable",value:"margin",match:["margin"],position:{start:45,end:59}}]},{type:"raw",value:`</h5>

<div class="block mht-margin-`,position:{start:59,end:95}},{type:"output",position:{start:95,end:106},stack:[{type:"Twig.expression.type.variable",value:"margin",match:["margin"],position:{start:95,end:106}}]},{type:"raw",value:`" >
  <div class="block mht-padding-`,position:{start:106,end:142}},{type:"output",position:{start:142,end:155},stack:[{type:"Twig.expression.type.variable",value:"padding",match:["padding"],position:{start:142,end:155}}]},{type:"raw",value:`" >
      <h1>Twig checks</h1>
    </div>
</div>


<h5>Padding (Horizontal): `,position:{start:155,end:232}},{type:"output",position:{start:232,end:246},stack:[{type:"Twig.expression.type.variable",value:"padding",match:["padding"],position:{start:232,end:246}}]},{type:"raw",value:`</h5>
<div class="block" style="background: #AF1D2F; color: white;">
  <div class="block mht-paddingx-`,position:{start:246,end:348}},{type:"output",position:{start:348,end:361},stack:[{type:"Twig.expression.type.variable",value:"padding",match:["padding"],position:{start:348,end:361}}]},{type:"raw",value:`" >
      <h1>Twig checks</h1>
    </div>
</div>

<h5>Padding (Vertical): `,position:{start:361,end:435}},{type:"output",position:{start:435,end:449},stack:[{type:"Twig.expression.type.variable",value:"padding",match:["padding"],position:{start:435,end:449}}]},{type:"raw",value:`</h5>
<div class="block" style="background: #AF1D2F; color: white;">
  <div class="block mht-paddingy-`,position:{start:449,end:551}},{type:"output",position:{start:551,end:564},stack:[{type:"Twig.expression.type.variable",value:"padding",match:["padding"],position:{start:551,end:564}}]},{type:"raw",value:`" >
      <h1>Twig checks</h1>
    </div>
</div>

<h5>Margin: (vertical): `,position:{start:564,end:638}},{type:"output",position:{start:638,end:650},stack:[{type:"Twig.expression.type.variable",value:"Margin",match:["Margin"],position:{start:638,end:650}}]},{type:"raw",value:`</h5>

<div class="block" style="background: #AF1D2F; color: white;">
  <div class="block mht-marginy-`,position:{start:650,end:752}},{type:"output",position:{start:752,end:764},stack:[{type:"Twig.expression.type.variable",value:"margin",match:["margin"],position:{start:752,end:764}}]},{type:"raw",value:`" >
      <h1>Twig checks</h1>
    </div>
</div>
<div class="block" style="background: #002B5C; color: white;">
  <div class="block mht-marginy-`,position:{start:764,end:908}},{type:"output",position:{start:908,end:920},stack:[{type:"Twig.expression.type.variable",value:"margin",match:["margin"],position:{start:908,end:920}}]},{type:"raw",value:`" >
      <h1>Twig checks</h1>
    </div>
</div>
`,position:{start:920,end:920}}],precompiled:!0});e.options.allowInlineIncludes=!0;try{let i=t.defaultAttributes?t.defaultAttributes:[];return Array.isArray(i)||(i=Object.entries(i)),s(e.render({attributes:new g(i),active_theme:"my_super_theme",is_front_page:!1,...t}))}catch(i){return s("An error occurred whilst rendering /var/www/html/src/utilities/spacing/spacing.twig: "+i.toString())}},o=[0,15,30,45,60,75,90],w={title:"foundations/Spacing",parameters:{compomentSubtitle:"Spacing",docs:{description:{component:r}}},argTypes:{padding:{options:o,control:{type:"select"}},margin:{options:o,control:{type:"select"}}},args:{padding:15,margin:15},component:r},a={args:{padding:15,margin:15}};var p,d,c;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    padding: 15,
    margin: 15
  }
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const b=["Default"];export{a as Default,b as __namedExportsOrder,w as default};
