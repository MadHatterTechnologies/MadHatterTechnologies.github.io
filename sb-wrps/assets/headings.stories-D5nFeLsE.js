import{w as s,e as t}from"./index-Brh5uMM1.js";import{t as I,D as O,T as u,a as L}from"./twig-7zesn7ht.js";import"./_commonjsHelpers-C4iS2aBk.js";import"./index-DrFu-skq.js";const M=n=>n.extendFunction("reverse",()=>i=>i.split(" ").reverse().join(" "));M(u);const J=n=>n.extendFilter("clean_unique_id",()=>i=>i.split(" ").reverse().join(" "));J(u);L(u);u.cache(!1);const v=n=>n,o=(n={})=>{const i=I.twig({id:"/var/www/html/src/foundations/headings/headings.twig",data:[{type:"raw",value:"<h",position:{start:0,end:2}},{type:"output",position:{start:2,end:21},stack:[{type:"Twig.expression.type.variable",value:"heading_level",match:["heading_level"],position:{start:2,end:21}}]},{type:"raw",value:">",position:{start:21,end:22}},{type:"output",position:{start:22,end:32},stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"],position:{start:22,end:32}}]},{type:"raw",value:"</h",position:{start:32,end:35}},{type:"output",position:{start:35,end:54},stack:[{type:"Twig.expression.type.variable",value:"heading_level",match:["heading_level"],position:{start:35,end:54}}]},{type:"raw",value:`>
`,position:{start:54,end:54}}],precompiled:!0});i.options.allowInlineIncludes=!0;try{let a=n.defaultAttributes?n.defaultAttributes:[];return Array.isArray(a)||(a=Object.entries(a)),v(i.render({attributes:new O(a),active_theme:"my_super_theme",is_front_page:!1,...n}))}catch(a){return v("An error occurred whilst rendering /var/www/html/src/foundations/headings/headings.twig: "+a.toString())}},V={title:"Foundations/Headings",parameters:{componentSubtitle:"HTML heading elements (h1-h6)"},argTypes:{heading_level:{name:"Heading level",description:"Semantic heading level (h1-h6)",control:{type:"range",min:1,max:6,step:1}},text:{name:"Heading text",description:"Sample text for heading",control:{type:"text"}}},args:{heading_level:1,text:"Sample heading text"},component:o},m={name:"Heading Group",render:()=>`
    ${o({heading_level:1,text:"Heading 1"})}
    ${o({heading_level:2,text:"Heading 2"})}
    ${o({heading_level:3,text:"Heading 3"})}
    ${o({heading_level:4,text:"Heading 4"})}
    ${o({heading_level:5,text:"Heading 5"})}
    ${o({heading_level:6,text:"Heading 6"})}
  `},h={argTypes:{heading_level:{name:"Heading level",description:"Semantic heading level (h1-h6)",control:{type:"range",min:1,max:6,step:1}},text:{name:"Heading text",description:"Sample text for heading",control:{type:"text"}}},args:{text:"Heading",heading_level:1}},r={args:{text:"Heading"}};r.play=async({canvasElement:n})=>{const a=s(n).getByRole("heading",{level:1}),e=getComputedStyle(a);t(e.fontSize).toBe("52px"),t(e.fontWeight).toBe("700"),t(e.fontFamily).toContain("Poppins"),t(e.color).toBe("rgb(33, 37, 41)")};const d={args:{text:"Heading",heading_level:2}};d.play=async({canvasElement:n})=>{const a=s(n).getByRole("heading",{level:2}),e=getComputedStyle(a);t(e.fontSize).toBe("42px"),t(e.fontWeight).toBe("700"),t(e.fontFamily).toContain("Poppins"),t(e.color).toBe("rgb(33, 37, 41)")};const l={args:{text:"Heading",heading_level:3}};l.play=async({canvasElement:n})=>{const a=s(n).getByRole("heading",{level:3}),e=getComputedStyle(a);t(e.fontSize).toBe("32px"),t(e.fontWeight).toBe("700"),t(e.fontFamily).toContain("Poppins"),t(e.color).toBe("rgb(33, 37, 41)")};const g={args:{text:"Heading",heading_level:4}};g.play=async({canvasElement:n})=>{const a=s(n).getByRole("heading",{level:4}),e=getComputedStyle(a);t(e.fontSize).toBe("26px"),t(e.fontWeight).toBe("700"),t(e.fontFamily).toContain("Poppins"),t(e.color).toBe("rgb(33, 37, 41)")};const c={args:{text:"Heading",heading_level:5}};c.play=async({canvasElement:n})=>{const a=s(n).getByRole("heading",{level:5}),e=getComputedStyle(a);t(e.fontSize).toBe("16px"),t(e.fontWeight).toBe("700"),t(e.fontFamily).toContain("Poppins"),t(e.color).toBe("rgb(33, 37, 41)")};const p={args:{text:"Heading",heading_level:6}};p.play=async({canvasElement:n})=>{const a=s(n).getByRole("heading",{level:6}),e=getComputedStyle(a);t(e.fontSize).toBe("16px"),t(e.fontWeight).toBe("700"),t(e.fontFamily).toContain("Poppins"),t(e.color).toBe("rgb(33, 37, 41)")};var y,x,H;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Heading Group',
  render: () => \`
    \${Heading({
    heading_level: 1,
    text: 'Heading 1'
  })}
    \${Heading({
    heading_level: 2,
    text: 'Heading 2'
  })}
    \${Heading({
    heading_level: 3,
    text: 'Heading 3'
  })}
    \${Heading({
    heading_level: 4,
    text: 'Heading 4'
  })}
    \${Heading({
    heading_level: 5,
    text: 'Heading 5'
  })}
    \${Heading({
    heading_level: 6,
    text: 'Heading 6'
  })}
  \`
}`,...(H=(x=m.parameters)==null?void 0:x.docs)==null?void 0:H.source}}};var _,f,S;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  argTypes: {
    heading_level: {
      name: 'Heading level',
      description: 'Semantic heading level (h1-h6)',
      control: {
        type: 'range',
        min: 1,
        max: 6,
        step: 1
      }
    },
    text: {
      name: 'Heading text',
      description: 'Sample text for heading',
      control: {
        type: 'text'
      }
    }
  },
  args: {
    text: "Heading",
    heading_level: 1
  }
}`,...(S=(f=h.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var w,B,b;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    text: "Heading"
  }
}`,...(b=(B=r.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var C,T,$;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    text: "Heading",
    heading_level: 2
  }
}`,...($=(T=d.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var F,A,z;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    text: "Heading",
    heading_level: 3
  }
}`,...(z=(A=l.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var P,R,W;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    text: "Heading",
    heading_level: 4
  }
}`,...(W=(R=g.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var D,k,j;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    text: "Heading",
    heading_level: 5
  }
}`,...(j=(k=c.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var E,q,G;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    text: "Heading",
    heading_level: 6
  }
}`,...(G=(q=p.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const X=["Default","HeadingTest","Heading1","Heading2","Heading3","Heading4","Heading5","Heading6"];export{m as Default,r as Heading1,d as Heading2,l as Heading3,g as Heading4,c as Heading5,p as Heading6,h as HeadingTest,X as __namedExportsOrder,V as default};
