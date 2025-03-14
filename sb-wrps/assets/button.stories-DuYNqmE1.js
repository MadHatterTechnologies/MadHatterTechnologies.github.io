import{w as B,u as c,e as o}from"./index-Brh5uMM1.js";import{t as _,D as h,T as u,a as k}from"./twig-7zesn7ht.js";import"./_commonjsHelpers-C4iS2aBk.js";import"./index-DrFu-skq.js";const C=e=>e.extendFunction("reverse",()=>r=>r.split(" ").reverse().join(" "));C(u);const S=e=>e.extendFilter("clean_unique_id",()=>r=>r.split(" ").reverse().join(" "));S(u);k(u);u.cache(!1);const l=e=>e,s=(e={})=>{const r=_.twig({id:"/var/www/html/src/sample/button/button.twig",data:[{type:"raw",value:'<button class="active">',position:{start:0,end:23}},{type:"output",position:{start:23,end:34},stack:[{type:"Twig.expression.type.variable",value:"title",match:["title"],position:{start:23,end:34}}]},{type:"raw",value:`</button>
`,position:{start:34,end:34}}],precompiled:!0});r.options.allowInlineIncludes=!0;try{let t=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(t)||(t=Object.entries(t)),l(r.render({attributes:new h(t),active_theme:"my_super_theme",is_front_page:!1,...e}))}catch(t){return l("An error occurred whilst rendering /var/www/html/src/sample/button/button.twig: "+t.toString())}};document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("button");e&&e.addEventListener("click",()=>{})});const $={title:"Sample/Button",parameters:{componentSubtitle:"Simple Button"},tags:["autodocs"],argTypes:{title:{control:{type:"text"}},modifier:{control:{type:"select"},options:["primary","secondary","tertiary"]}},component:s},a={args:{title:"Click me",modifier:"primary"}};a.play=async({canvasElement:e})=>{const t=await B(e).getByRole("button",{name:/Click Me/i});await c.click(t),o(t).toHaveClass("active"),o(t).toHaveAttribute("class"),await c.hover(t),o(getComputedStyle(t).color).toBe("rgb(255, 255, 255)")};const n={args:{title:"Click me",modifier:"primary"}};n.play=async({canvasElement:e})=>{const t=await B(e).getByRole("button",{name:/Click Me/i});await c.click(t),o(t).toHaveClass("active"),o(t).toHaveAttribute("class"),await c.hover(t),o(getComputedStyle(t).color).toBe("rgb(255, 255, 255)")};const i={name:"Button Group",render:()=>`
    ${s({title:"Button 1",modifier:"primary"})}
    ${s({title:"Button 2",modifier:"secondary"})}
    ${s({title:"Button 3",modifier:"secondary"})}
  `};var m,p,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: 'Click me',
    modifier: "primary"
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var y,v,f;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Click me',
    modifier: 'primary'
  }
}`,...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var w,b,g;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Button Group',
  render: () => \`
    \${Button({
    title: 'Button 1',
    modifier: 'primary'
  })}
    \${Button({
    title: 'Button 2',
    modifier: 'secondary'
  })}
    \${Button({
    title: 'Button 3',
    modifier: 'secondary'
  })}
  \`
}`,...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const T=["Default","Primary","ButtonStrip"];export{i as ButtonStrip,a as Default,n as Primary,T as __namedExportsOrder,$ as default};
