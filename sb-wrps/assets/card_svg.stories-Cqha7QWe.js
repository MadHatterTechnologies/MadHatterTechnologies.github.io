import{C as i}from"./card_svg-CQcc211b.js";import{iconOptions as l}from"./icon.stories-bdEFTvoP.js";import"./twig-7zesn7ht.js";import"./_commonjsHelpers-C4iS2aBk.js";import"./icon-Ds2lpB-4.js";const g={title:"Components/Card/Card SVG",parameters:{componentSubtitle:"Card SVG"},argTypes:{title:{control:"text",description:"Enter Test",table:{defaultValue:{summary:"text"}}},color:{control:{type:"select",options:["primary","gold"]},description:"Button color",table:{defaultValue:{summary:"primary"}}},bgIcon:{control:{type:"boolean"},description:"Make the card have a background Icon",table:{defaultValue:{summary:"false"}}},isActive:{control:{type:"boolean"},description:"Card is active",table:{defaultValue:{summary:"false"}}},iconName:{description:"SVG Icon Selection",table:{defaultValue:{summary:"svg-house"}},options:l,control:{type:"select"},isCentered:{type:"boolean"}}},args:{title:"Paid Officer",color:"primary",bgIcon:!1,isActive:!1,isCentered:!1,iconName:"chat-law"},component:i},e={args:{iconName:"chat-law"}},a={args:{iconName:"chat-law",isActive:!0}};var t,r,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    iconName: 'chat-law'
  }
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var s,c,n;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    iconName: 'chat-law',
    isActive: true
  }
}`,...(n=(c=a.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};const y=["CardSVGDefault","CardSVGActive"];export{a as CardSVGActive,e as CardSVGDefault,y as __namedExportsOrder,g as default};
