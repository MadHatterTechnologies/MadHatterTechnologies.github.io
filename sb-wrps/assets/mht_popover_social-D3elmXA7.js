import{t as s,D as r,T as o,a as l}from"./twig-7zesn7ht.js";import"./icon-Ds2lpB-4.js";const a=e=>e.extendFunction("reverse",()=>n=>n.split(" ").reverse().join(" "));a(o);const p=e=>e.extendFilter("clean_unique_id",()=>n=>n.split(" ").reverse().join(" "));p(o);l(o);o.cache(!1);s.twig({id:"../../media/icon/icon.twig",data:[{type:"logic",token:{type:"Twig.logic.type.set",key:"classes",expression:[{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.variable",value:"size",match:["size"]},{type:"Twig.expression.type.string",value:"mht-icon--"},{type:"Twig.expression.type.variable",value:"size",match:["size"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"weight",match:["weight"]},{type:"Twig.expression.type.string",value:"mht-icon--"},{type:"Twig.expression.type.variable",value:"weight",match:["weight"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"color",match:["color"]},{type:"Twig.expression.type.string",value:"mht-icon--"},{type:"Twig.expression.type.variable",value:"color",match:["color"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"isActive",match:["isActive"]},{type:"Twig.expression.type.string",value:"active"},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"extra_classes",match:["extra_classes"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]}],position:{start:0,end:193}},position:{start:0,end:193}},{type:"raw",value:`
<!-- SVG component -->
<svg class="mht-icon icon--`,position:{start:194,end:245}},{type:"output",position:{start:245,end:259},stack:[{type:"Twig.expression.type.variable",value:"iconName",match:["iconName"],position:{start:245,end:259}}]},{type:"raw",value:" ",position:{start:259,end:260}},{type:"output",position:{start:260,end:282},stack:[{type:"Twig.expression.type.variable",value:"classes",match:["classes"],position:{start:260,end:282}},{type:"Twig.expression.type.filter",value:"join",match:["|join","join"],position:{start:260,end:282},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:260,end:282}},{type:"Twig.expression.type.string",value:" ",position:{start:260,end:282}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:260,end:282},expression:!1}]}]},{type:"raw",value:`">
  <use xlink:href="#svg-`,position:{start:282,end:309}},{type:"output",position:{start:309,end:323},stack:[{type:"Twig.expression.type.variable",value:"iconName",match:["iconName"],position:{start:309,end:323}}]},{type:"raw",value:`"></use>
</svg>

<!-- TODO -->
<!-- Don't like this include. Is this the best way to add SVGs? -->
<svg class="is-hidden" xmlns="http://www.w3.org/2000/svg">

  <!-- Angle Bracket Alt -->
  <symbol  viewBox="0 -1 8 15" id="svg-angle-bracket" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M.275 12.876a.98.98 0 0 0 1.318 0l6.19-5.766a.69.69 0 0 0
        .16-.225.65.65 0 0 0-.16-.754L1.592.364a.98.98 0 0 0-1.318 0
        .826.826 0 0 0 0 1.229l5.392 5.03-5.4 5.032a.824.824 0 0 0 .008
        1.221Z" />
  </symbol>

  <!-- Arrow -->
  <symbol viewBox="0 -1 22 23" id="svg-arrow" xmlns="http://www.w3.org/2000/svg">
    <path d="M.895 11.813h15.973L9.53 19.148 11.395 21l10.5-10.5L11.395 0 9.544 1.85l7.324 7.337H.895v2.626Z"/>
  </symbol>

  <!-- Bulb -->
  <symbol viewBox="0 0 77 82" id="svg-bulb" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path d="M48.93 58.81v7.813a5.204 5.204 0 0 1-5.215 5.208H33.286a5.204 5.204 0 0 1-5.214-5.208V58.81M38.499 1.52v5.208M2 37.978h5.214M9.822 11.937l3.824 3.68M75 37.978h-5.214M67.18 11.936l-3.825 3.68M27.756 58.81h21.448c7.89-3.923 12.862-12.013 12.723-20.833-.244-12.846-10.603-23.193-23.464-23.437-12.862.244-23.256 10.59-23.464 23.438A22.945 22.945 0 0 0 27.72 58.81h.035ZM38.499 71.831v7.813M38.499 45.79v13.02"/>
      <path d="M30.679 37.978 38.5 45.79l7.821-7.812"/>
    </g>
  </symbol>

  <!-- Button Left -->
  <symbol fill="none" viewBox="0 0 56 57" id="svg-button-left" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1.095" width="54" height="54" rx="27" stroke-width="2"/>
    <path d="M37.335 27.261H23.136l6.522-6.521-1.657-1.645-9.333 9.333 9.333 9.333 1.645-1.645-6.51-6.521h14.199V27.26Z" fill="#002B5C"/>
  </symbol>

  <!-- Button Right -->
  <symbol fill="none" viewBox="0 0 56 57" id="svg-button-right" xmlns="http://www.w3.org/2000/svg">
    <rect x="55" y="55.095" width="54" height="54" rx="27" transform="rotate(-180 55 55.095)" stroke-width="2"/>
    <path d="M18.665 28.928h14.199l-6.522 6.522 1.657 1.645 9.333-9.334-9.333-9.333-1.645 1.645 6.51 6.522H18.665v2.333Z" fill="#002B5C"/>
  </symbol>

  <!-- Calendar Icon -->
  <symbol fill="none" viewBox="0 0 17 19" id="svg-calendar-icon" xmlns="http://www.w3.org/2000/svg">
    <path  stroke="#0079BD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M13.8 3.084H2.6a1.6 1.6 0 0 0-1.6 1.6v11.2a1.6 1.6 0 0 0 1.6 1.6h11.2a1.6 1.6 0 0 0 1.6-1.6v-11.2a1.6 1.6 0 0 0-1.6-1.6ZM11.398 1.484v3.2M5 1.484v3.2M1 7.885h14.4"/>
  </symbol>

  <!-- Calendar Icon Alt -->
  <symbol fill="none" viewBox="0 0 17 19" id="svg-calendar-icon-alt" xmlns="http://www.w3.org/2000/svg">
    <path  stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M13.8 3.1H2.6A1.6 1.6 0 0 0 1 4.7v11.2a1.6 1.6 0 0 0 1.6 1.6h11.2a1.6 1.6 0 0 0 1.6-1.6V4.7a1.6 1.6 0 0 0-1.6-1.6ZM11.398 1.5v3.2M5 1.5v3.2M1 7.9h14.4"/>
  </symbol>

  <!-- Camera -->
  <symbol fill="none" viewBox="0 0 32 24" id="svg-camera" xmlns="http://www.w3.org/2000/svg">
    <path  stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M2.004 4.772c0-1.368.834-2.472 1.867-2.472h16.804c1.033 0 1.867 1.104 1.867 2.472v14.833c0 1.368-.834 2.472-1.867 2.472H3.87c-1.033 0-1.867-1.104-1.867-2.472V4.772ZM22.543 15.897l6.211 3.082c.287.148.61.082.86-.148.248-.231.397-.61.397-1.006V6.552c0-.412-.149-.791-.398-1.005a.764.764 0 0 0-.859-.149L22.543 8.48v7.417Z"/>
  </symbol>

  <!-- Camera Filled -->
  <symbol fill="none" viewBox="0 0 63 62" id="svg-camera-filled" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 10C0 4.477 4.477 0 10 0h43c5.523 0 10 4.477 10 10v42c0 5.523-4.477 10-10 10H10C4.477 62 0 57.523 0 52V10Z" fill="#007DC3"/>
    <path  stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M18.004 23.772c0-1.368.834-2.472 1.867-2.472h16.804c1.033 0 1.867 1.104 1.867 2.472v14.833c0 1.368-.834 2.472-1.867 2.472H19.87c-1.033 0-1.867-1.104-1.867-2.472V23.772ZM38.543 34.897l6.211 3.082c.287.148.61.083.86-.148.248-.231.397-.61.397-1.006V25.552c0-.412-.149-.791-.398-1.005a.764.764 0 0 0-.859-.149l-6.211 3.082v7.417Z"/>
  </symbol>

  <!-- Chat Law -->
  <symbol id="svg-chat-law"  viewBox="0 0 137 133" xmlns="http://www.w3.org/2000/svg">
    <path  stroke-linecap="round" stroke-linejoin="round" d="m42.305 93.607-15.722 11.838v-23.63H10.861A7.843 7.843 0 0 1 3 73.936v-63.06A7.843 7.843 0 0 1 10.861 3h86.517a7.843 7.843 0 0 1 7.861 7.877v23.63M26.583 26.63h55.073M26.583 50.261h15.722"/>
    <path stroke="var(--icon-secondary)" stroke-linecap="round" stroke-linejoin="round" d="M96.242 64.649 88.2 74.711H74.478c-.864 0-1.636.41-2.09 1.139-.455.728-.546 1.593-.182 2.367l5.998 14.024-5.998 14.023c-.318.774-.273 1.64.227 2.368a2.522 2.522 0 0 0 2.09 1.138h13.723l8.043 10.063a2.474 2.474 0 0 0 3.907 0l8.043-10.063h13.178c.909 0 1.726-.455 2.181-1.229a2.472 2.472 0 0 0 0-2.504l-7.861-13.796 7.861-13.796a2.472 2.472 0 0 0 0-2.504 2.497 2.497 0 0 0-2.181-1.23h-13.178l-8.043-10.062a2.473 2.473 0 0 0-3.907 0h-.046Z"/>
    <path  stroke="var(--icon-secondary)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" d="M98.196 99.754c4.135 0 7.497-3.37 7.497-7.513s-3.362-7.513-7.497-7.513-7.498 3.37-7.498 7.513 3.363 7.513 7.498 7.513ZM64.435 69.703c.681 0 1.272.546 1.272 1.275"/>
    <path stroke="var(--icon-secondary)"  stroke-width="6" stroke-linecap="round" stroke-linejoin="round" d="M63.208 70.978c0-.683.545-1.275 1.272-1.275M64.434 72.207a1.271 1.271 0 0 1-1.272-1.275M65.707 70.932c0 .683-.545 1.275-1.272 1.275M131.912 69.703a1.27 1.27 0 0 1 1.272 1.275"/>
    <path  stroke="var(--icon-secondary)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" d="M130.686 70.978c0-.683.545-1.275 1.272-1.275M131.912 72.207a1.27 1.27 0 0 1-1.272-1.275M133.184 70.932c0 .683-.545 1.275-1.272 1.275M131.912 112.274c.682 0 1.272.547 1.272 1.275"/>
    <path  stroke="var(--icon-secondary)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" d="M130.686 113.549c0-.683.545-1.275 1.272-1.275M131.912 114.824a1.27 1.27 0 0 1-1.272-1.275M133.184 113.549c0 .683-.545 1.275-1.272 1.275M64.435 112.274c.681 0 1.272.547 1.272 1.275"/>
    <path stroke="var(--icon-secondary)"  stroke-width="6" stroke-linecap="round" stroke-linejoin="round" d="M63.208 113.549c0-.683.545-1.275 1.272-1.275M64.434 114.824a1.271 1.271 0 0 1-1.272-1.275M65.707 113.549c0 .683-.545 1.275-1.272 1.275M98.196 54.678c.682 0 1.273.546 1.273 1.275"/>
    <path stroke="var(--icon-secondary)"  stroke-width="6" stroke-linecap="round" stroke-linejoin="round" d="M96.924 55.953c0-.683.545-1.275 1.272-1.275"/>
    <path stroke="var(--icon-secondary)"  stroke-width="6" stroke-linecap="round" stroke-linejoin="round" d="M98.196 57.182a1.271 1.271 0 0 1-1.272-1.275"/>
    <path  stroke="var(--icon-secondary)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" d="M99.423 55.907c0 .683-.546 1.275-1.273 1.275M98.196 127.3c.682 0 1.273.546 1.273 1.275"/>
    <path stroke="var(--icon-secondary)"  stroke-width="6" stroke-linecap="round" stroke-linejoin="round" d="M96.924 128.575c0-.683.545-1.275 1.272-1.275M98.196 129.85a1.272 1.272 0 0 1-1.272-1.275"/>
    <path stroke="var(--icon-secondary)"  stroke-width="6" stroke-linecap="round" stroke-linejoin="round" d="M99.423 128.575c0 .683-.546 1.275-1.273 1.275"/>
  </symbol>

  <!-- Chat User -->
  <symbol fill="none" viewBox="0 0 89 89" id="svg-chat-user" xmlns="http://www.w3.org/2000/svg">
    <path  stroke="#00539B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M67.146 2a19.693 19.693 0 0 0-18.052 11.594c-3.21 7.1-1.964 15.409 3.21 21.225L49.81 49.094l12.916-7.968c7.44 1.7 15.182-.982 19.94-6.95a19.841 19.841 0 0 0 2.38-20.96A19.848 19.848 0 0 0 67.184 2h-.038ZM24.66 61.482c7.024 0 12.764-5.703 12.764-12.765A12.75 12.75 0 0 0 24.66 35.952a12.75 12.75 0 0 0-12.765 12.765A12.75 12.75 0 0 0 24.66 61.482ZM47.32 86.974c-1.511-11.33-11.217-19.827-22.66-19.827-11.444 0-21.15 8.46-22.66 19.827"/>
  </symbol>

  <!-- Close -->
  <symbol fill="none" viewBox="0 0 33 34" id="svg-close" xmlns="http://www.w3.org/2000/svg">
    <path d="m22.616 34-6.864-10.32L9.704 34H.392l10.8-17.136L.152.304h9.552l6.768 10.176L22.424.304h9.312L21.032 17.296 32.168 34h-9.552Z" fill="#fff"/>
  </symbol>

  <!-- Computer Email -->
  <symbol fill="none" viewBox="0 0 89 85" id="svg-computer-email" xmlns="http://www.w3.org/2000/svg">
    <path  stroke="var(--icon-primary)" d="M55.83 82.049H33.165l2.833-17.154h17l2.834 17.154ZM24.664 82.048h39.667"/>
    <path  stroke="var(--icon-primary)" d="M2 13.435C2 7.108 7.062 2 13.333 2h62.334C81.937 2 87 7.108 87 13.435V53.46c0 6.328-5.062 11.436-11.333 11.436H13.333C7.063 64.895 2 59.787 2 53.46V13.434Z"/>
    <path  stroke="var(--icon-secondary)" d="M24.668 24.871c0-3.164 2.531-5.718 5.667-5.718h28.333c3.136 0 5.667 2.554 5.667 5.718v17.153c0 3.164-2.531 5.718-5.667 5.718H30.335c-3.136 0-5.667-2.554-5.667-5.718V24.871Z"/>
    <path  stroke="var(--icon-secondary)" d="m26.102 21.059 18.397 15.247 18.398-15.247"/>
  </symbol>

  <!-- Document Search -->
  <symbol fill="none" viewBox="0 0 131 131" id="svg-doc-search" xmlns="http://www.w3.org/2000/svg">
    <path  stroke="#FEFEFE" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" d="M19.625 77.939h24.938M19.625 57.122h24.938M19.625 36.306h55.694M48.719 111.244H11.312A8.308 8.308 0 0 1 3 102.918V11.326A8.308 8.308 0 0 1 11.313 3H70.22c2.217 0 4.323.888 5.875 2.442l15.904 15.932a8.325 8.325 0 0 1 2.439 5.884v13.211"/>
    <path  stroke="#FEBE4F" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" d="M86.125 115.407c16.071 0 29.094-13.044 29.094-29.142s-13.023-29.143-29.094-29.143c-16.07 0-29.094 13.045-29.094 29.143s13.023 29.142 29.094 29.142ZM127.687 127.897l-21.058-20.927"/>
  </symbol>

  <!-- Ellipse -->
  <symbol fill="none" viewBox="0 0 15 16" id="svg-ellipse" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7.5" cy="7.675" r="7.5" fill="#D9D9D9"/>
  </symbol>

  <!-- Facebook -->
  <symbol fill="none" viewBox="0 0 22 41" id="svg-facebook" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.287 40.51V23.024h5.852l1.113-7.241h-6.965v-4.696c0-1.976.977-3.912 4.087-3.912h3.163V1.017S18.66.53 15.917.53c-5.73 0-9.478 3.465-9.478 9.731v5.509H.071v7.24h6.382v17.487H14.3l-.013.013Z" fill="#fff"/>
  </symbol>

  <!-- Gavel -->
  <symbol fill="none" viewBox="0 0 131 106" id="svg-gavel" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#aa)" fill="#fff">
      <path d="M119.13 86.302h-.905v-1.095c0-3.2-2.656-5.82-5.905-5.82H76.045c-3.246 0-5.902 2.62-5.902 5.82v1.095h-.906c-4.327 0-7.868 3.491-7.868 7.758v3.378H127V94.06c0-4.267-3.54-7.758-7.87-7.758ZM71.777 16.767 56.732 28.038a4.073 4.073 0 0 0-.795 5.745l16.67 21.629c1.383 1.796 4.006 2.148 5.827.784l15.047-11.27a4.073 4.073 0 0 0 .794-5.745l-16.67-21.63c-1.384-1.796-4.006-2.148-5.828-.784ZM76.692 68.773l1.983 2.573c1.383 1.796 4.006 2.148 5.828.784l22.922-17.17a4.074 4.074 0 0 0 .796-5.745l-1.984-2.573c-1.384-1.796-4.008-2.148-5.828-.784l-22.921 17.17a4.075 4.075 0 0 0-.796 5.746ZM43.973 26.32c1.384 1.796 4.004 2.148 5.827.784l22.923-17.17a4.074 4.074 0 0 0 .796-5.746l-1.985-2.573C70.15-.18 67.528-.533 65.707.831l-22.92 17.17c-1.821 1.364-2.18 3.95-.797 5.746l1.983 2.574v-.001ZM62.746 45.513c-1.153-1.496-3.242-2.009-4.79-1.066l-44.23 26.924c-9.967 6.07-11.613 12-7.916 16.795 3.691 4.79 9.93 4.82 18.527-3.027l38.171-34.79c1.336-1.217 1.393-3.338.238-4.836Z"/>
    </g>
    <defs>
      <filter id="aa" x="0" y="0" width="131" height="105.438" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_199_7533"/>
      <feBlend in="SourceGraphic" in2="effect1_dropShadow_199_7533" result="shape"/>
    </filter>
    </defs>
  </symbol>

  <!-- Gavel Outline -->
  <symbol fill="none" viewBox="0 0 100 81" id="svg-gavel-outline" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#aa)" stroke="#fff" stroke-width="3">
      <path d="M87.416 64.159v1.5h2.174c2.41 0 4.35 1.944 4.35 4.268v1.011H48.148v-1.011c0-2.324 1.941-4.268 4.35-4.268h2.173v-2.314c0-1.53 1.284-2.826 2.888-2.826h26.968c1.607 0 2.89 1.296 2.89 2.826v.814ZM44.101 22.045l11.185-8.379c.703-.526 1.721-.383 2.245.298l12.393 16.08c.516.669.387 1.64-.3 2.155h-.001l-11.186 8.378c-.702.526-1.72.383-2.245-.298L43.8 24.2a1.528 1.528 0 0 1 .301-2.155ZM59.206 50.18l.025.032 1.474 1.913c.524.68 1.543.824 2.246.297L79.99 39.66a1.528 1.528 0 0 0 .303-2.155L59.206 50.18Zm0 0a1.53 1.53 0 0 1 .328-2.122l17.04-12.765c.701-.526 1.72-.383 2.245.298l1.475 1.912L59.206 50.18ZM34.906 18.651l-1.51-1.96a1.53 1.53 0 0 1 .339-2.108l17.04-12.765c.702-.525 1.72-.382 2.244.298l.001.001 1.475 1.912c.515.668.386 1.639-.303 2.155l-17.04 12.764h-.001v.001c-.705.526-1.72.382-2.245-.298ZM46.486 34.751c.458.595.328 1.273 0 1.572l1.008 1.105-1.008-1.105L18.11 62.186h-.001c-3.096 2.827-5.571 4.043-7.423 4.267-1.724.209-3.068-.419-4.15-1.824h-.001c-1.085-1.407-1.327-2.834-.672-4.39.71-1.687 2.554-3.71 6.148-5.898l32.883-20.016c.403-.247 1.131-.172 1.593.426Z"/>
    </g>
    <defs>
      <filter id="aa" x="0" y="0" width="99.44" height="80.438" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_474_1273"/>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_474_1273" result="shape"/>
      </filter>
    </defs>
  </symbol>

  <!-- Hamburguer -->
  <symbol fill="none" viewBox="0 0 33 28" id="svg-hamburguer" xmlns="http://www.w3.org/2000/svg">
    <path  stroke="#FEFEFE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M2 26.04h28.786M2 14.02h28.786M2 2h28.786"/>
  </symbol>

  <!-- Mailbox -->
  <symbol fill="none" viewBox="0 0 20 24" id="svg-mailbox" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#aa)" stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 19.5V24M19 9H4c-1.66 0-3 1.34-3 3v6.75c0 .41.34.75.75.75H19V9ZM13 12V1.5M13 6H8.5C7.67 6 7 5.33 7 4.5V3c0-.83.67-1.5 1.5-1.5H13V6Z"/>
    </g>
    <defs>
      <clipPath id="aa">
        <path fill="#fff" d="M0 0h19.5v24H0z"/>
      </clipPath>
    </defs>
  </symbol>

  <!-- Instagram -->
  <symbol fill="none" viewBox="0 0 34 32" id="svg-instagram" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#aa)" fill="#fff">
      <path d="M26.007 5.709c-1.1 0-1.99.837-1.99 1.872 0 1.035.89 1.872 1.99 1.872s1.989-.837 1.989-1.872c0-1.035-.89-1.872-1.99-1.872ZM17.136 8.116c-4.62 0-8.376 3.535-8.376 7.884s3.756 7.884 8.376 7.884c4.62 0 8.377-3.535 8.377-7.884s-3.756-7.884-8.377-7.884Zm0 12.93c-2.952 0-5.362-2.267-5.362-5.046 0-2.78 2.41-5.047 5.362-5.047 2.953 0 5.362 2.268 5.362 5.047s-2.409 5.046-5.362 5.046Z"/>
      <path d="M23.783 32H10.206C4.572 32-.012 27.686-.012 22.384V9.604C.001 4.315 4.584 0 10.218 0h13.578c5.633 0 10.217 4.314 10.217 9.616v12.78c0 5.302-4.584 9.616-10.217 9.616L23.783 32ZM10.218 3.012C6.35 3.012 3.2 5.977 3.2 9.616v12.78C3.2 26.034 6.35 29 10.218 29h13.578c3.867 0 7.017-2.965 7.017-6.605V9.616c0-3.64-3.15-6.604-7.017-6.604H10.218Z"/>
    </g>
    <defs>
      <clipPath id="aa">
        <path fill="#fff" d="M0 0h34v32H0z"/>
      </clipPath>
    </defs>
  </symbol>

  <!-- Laptop Approved -->
  <symbol fill="none" viewBox="0 0 68 68" id="svg-laptop-approved" xmlns="http://www.w3.org/2000/svg">
    <path  stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M48.934 66C58.349 66 66 58.347 66 48.932s-7.652-17.067-17.067-17.067-17.067 7.652-17.067 17.067 7.652 17.066 17.067 17.066Z"/>
    <path  stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="m56.527 43.984-8.25 11.008c-.369.484-.938.797-1.564.854a1.992 1.992 0 0 1-1.65-.626l-4.266-4.267M8.398 34V6.267A4.26 4.26 0 0 1 12.665 2h42.667a4.26 4.26 0 0 1 4.266 4.267v17.066M27.6 34H2c0 5.888 4.779 10.667 10.667 10.667h10.666"/>
  </symbol>

  <!-- Law Audience -->
  <symbol fill="none" viewBox="0 0 144 162" id="svg-law-audience" xmlns="http://www.w3.org/2000/svg">
    <path stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M18.333 136.562c8.977 0 16.295-7.306 16.295-16.354 0-9.047-7.28-16.353-16.295-16.353-9.016 0-16.296 7.306-16.296 16.353 0 9.048 7.28 16.354 16.296 16.354ZM125.268 136.562c8.978 0 16.296-7.306 16.296-16.354 0-9.047-7.281-16.353-16.296-16.353s-16.295 7.306-16.295 16.353c0 9.048 7.28 16.354 16.295 16.354ZM71.783 136.562c8.977 0 16.295-7.306 16.295-16.354 0-9.047-7.28-16.353-16.295-16.353-9.016 0-16.296 7.306-16.296 16.353 0 9.048 7.28 16.354 16.296 16.354ZM45.077 159.881a28.447 28.447 0 0 0-18.22-17.376c-8.411-2.65-17.577-1.211-24.82 3.899M98.526 159.881a28.474 28.474 0 0 1 18.182-17.376c8.412-2.65 17.578-1.211 24.82 3.899"/>
    <path stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M98.528 159.881c-4.149-11.205-14.824-18.663-26.744-18.663s-22.595 7.458-26.744 18.663M42.587 50.328h57.939M100.526 60.89h-57.94M45.224 60.89S43.11 79.4 71.553 79.4s26.33-18.51 26.33-18.51M32.139 31.968l13.089 18.36M97.885 50.328l11.542-16.202c.415-.568.566-1.325.453-2.007-.113-.719-.528-1.325-1.132-1.741a21.149 21.149 0 0 1-10.863-17.527c-.038-.757-.415-1.438-.981-1.93a2.693 2.693 0 0 0-2.075-.568A26.765 26.765 0 0 1 73.215 3.16a2.661 2.661 0 0 0-3.357 0 26.765 26.765 0 0 1-21.614 7.193c-.755-.114-1.509.075-2.075.568a2.684 2.684 0 0 0-.98 1.93 21.207 21.207 0 0 1-10.902 17.49"/>
    <path  stroke="#FEBE4F" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M70.274 15.577c.227-.492.717-.795 1.283-.795s1.018.303 1.282.795l2.98 5.981c.189.417.604.72 1.056.757l6.64.985c.527.075.98.454 1.13.946.152.492 0 1.06-.339 1.439l-4.828 4.694c-.34.302-.49.794-.415 1.249l1.132 6.624c.075.53-.151 1.06-.566 1.363a1.536 1.536 0 0 1-1.509.114l-5.922-3.104a1.364 1.364 0 0 0-1.32 0l-5.922 3.104a1.371 1.371 0 0 1-1.51-.114 1.445 1.445 0 0 1-.565-1.363l1.132-6.624a1.425 1.425 0 0 0-.415-1.25l-4.829-4.694c-.377-.378-.528-.946-.34-1.438.19-.53.604-.87 1.17-.946l6.64-.985c.452-.075.829-.34 1.055-.757l2.943-5.98h.037Z"/>
  </symbol>

  <!-- Law Hat -->
  <symbol fill="none" viewBox="0 0 107 86" id="svg-law-hat" xmlns="http://www.w3.org/2000/svg">
    <path  stroke="#FEFEFE" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M73.426 42.773h27.096c.862-1.589 1.816-3.429 2.814-5.227a5.817 5.817 0 0 0 .182-5.395c-.817-1.714-2.451-3.01-4.448-3.512-7.625-2.008-14.252-6.399-18.7-12.462C74.379 7.604 64.121 2.293 53.047 2c-11.075.293-21.332 5.604-27.324 14.177-4.448 6.063-11.074 10.454-18.7 12.462-1.996.501-3.63 1.798-4.447 3.512a5.817 5.817 0 0 0 .181 5.395c.999 1.798 1.952 3.638 2.814 5.227h27.097M5.344 55.32C14.285 72.171 32.667 83.044 53 83.546c20.333-.502 38.715-11.375 47.657-28.228H5.344Z"/>
    <path  stroke="#FEFEFE" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M63.986 35.79 53.048 45.91 42.109 35.79V22.324h21.923V35.79h-.046ZM5.344 42.773V55.32M100.656 42.773V55.32"/>
  </symbol>

  <!-- Legal Judge -->
  <symbol fill="none" viewBox="0 0 82 86" id="svg-legal-judge" xmlns="http://www.w3.org/2000/svg">
    <path  stroke="#00539B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M75.788 84c-6.39-13.339-20.017-21.867-35.01-21.867-14.994 0-28.584 8.528-35.01 21.867M40.775 18.4s-5.281 13.12-18.576 13.667c-2.364 7.835.554 16.29 7.312 21.028 6.758 4.738 15.806 4.738 22.528 0 6.758-4.738 9.675-13.193 7.312-21.028C46.056 31.52 40.775 18.4 40.775 18.4ZM40.775 18.4V2"/>
    <path  stroke="#00539B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M60.165 37.533v16.4c0 6.05 4.949 10.934 11.08 10.934 4.579 0 8.309-3.681 8.309-8.2 0-4.52-3.73-8.2-8.31-8.2 4.58 0 8.31-3.681 8.31-8.2 0-4.52-3.73-8.2-8.31-8.2C71.244 15.448 57.617 2 40.777 2c-16.84 0-30.468 13.448-30.468 30.067-4.579 0-8.309 3.68-8.309 8.2 0 4.519 3.73 8.2 8.31 8.2-4.58 0-8.31 3.68-8.31 8.2 0 4.519 3.73 8.2 8.31 8.2 6.13 0 11.078-4.884 11.078-10.934v-16.4M40.775 62.133V75.8"/>
  </symbol>

  <!-- Link -->
  <symbol fill="none" viewBox="0 0 36 28" id="svg-link" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#aa)" stroke="#002B5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m14.04 23.517-1.395 1.389c-2.64 2.628-6.915 2.628-9.54 0-2.64-2.629-2.64-6.885 0-9.498L10.26 8.27a6.776 6.776 0 0 1 9.165-.359 6.7 6.7 0 0 1 1.08 9.065"/>
      <path d="m22.23 4.21 1.125-1.12c2.64-2.629 6.915-2.629 9.54 0 2.625 2.628 2.64 6.884 0 9.497L25.74 19.71a6.776 6.776 0 0 1-9.165.359 6.7 6.7 0 0 1-1.08-9.065"/>
    </g>
    <defs>
      <clipPath id="aa">
        <path fill="#fff" d="M0 0h36v28H0z"/>
      </clipPath>
    </defs>
  </symbol>

  <!-- Location -->
  <symbol fill="none" viewBox="0 0 16 21" id="svg-location" xmlns="http://www.w3.org/2000/svg">
    <path  stroke="#0079BD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M7.75 10.614c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3Z"/>
    <path  stroke="#0079BD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M7.75.864c3.73 0 6.75 3.02 6.75 6.75 0 3.25-5.13 10.53-6.45 12.34-.07.1-.18.15-.3.15s-.23-.06-.3-.15C6.13 18.144 1 10.864 1 7.614 1 3.884 4.02.864 7.75.864Z"/>
  </symbol>

  <!-- Location alt -->
  <symbol fill="none" viewBox="0 0 17 24" id="svg-location-alt" xmlns="http://www.w3.org/2000/svg">
    <path  stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M8.495 1.058a7.498 7.498 0 0 1 7.495 7.494c0 3.408-5.067 11.353-6.876 14.06a.749.749 0 0 1-1.24 0C6.068 19.906 1.001 11.96 1.001 8.553a7.498 7.498 0 0 1 7.495-7.494Z"/>
    <circle cx="8.343" cy="8.399" r="3.171" stroke="#9E9E9E"/>
  </symbol>

  <!-- mail -->
  <symbol fill="none" viewBox="0 0 22 17" id="svg-mail" xmlns="http://www.w3.org/2000/svg">
    <path d="m19.693 4.728-8.622 4.781-8.623-4.781V2.815l8.623 4.782 8.622-4.782m0-1.913H2.448C1.262.902.292 1.763.292 2.815v11.476c0 1.052.97 1.912 2.156 1.912h17.245c1.186 0 2.156-.86 2.156-1.912V2.815c0-1.052-.97-1.913-2.156-1.913Z" fill="#00539B"/>
  </symbol>

  <!-- Maps Pin 2-->
  <symbol fill="none" viewBox="0 0 126 127" id="svg-maps-pin-2" xmlns="http://www.w3.org/2000/svg">
    <path d="M43 61.872c-1.013 0-2.027-.213-2.987-.587L8.493 48.677c-1.226-.481-2.613-.32-3.733.427A3.945 3.945 0 0 0 3 52.416v49.951c0 3.259 1.973 6.251 5.013 7.426l32 12.821c1.92.748 4.054.748 5.92 0l34.08-13.676c1.92-.748 4.054-.748 5.92 0l31.52 12.661c1.227.481 2.614.321 3.734-.427a3.945 3.945 0 0 0 1.76-3.312V67.91c0-3.26-1.974-6.251-5.014-7.427l-32-12.821c-1.92-.748-4.053-.748-5.92 0l-4.853 1.923M43 61.872v61.33M83 47.074v61.33"/>
    <path  stroke="var(--icon-secondary)" d="M59 35.054v48.08M59 35.054c8.853 0 16-7.159 16-16.027C75 10.159 67.853 3 59 3s-16 7.159-16 16.027c0 8.868 7.147 16.027 16 16.027Z"/>
  </symbol>

  <!-- Meeting Headphones -->
  <symbol fill="none" viewBox="0 0 62 61" id="svg-meeting-headphones" xmlns="http://www.w3.org/2000/svg">
    <path  stroke="#0079BD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M11.667 45.942H9.733A7.719 7.719 0 0 1 2 38.217v-7.724a7.719 7.719 0 0 1 7.733-7.725h1.934c1.057 0 3.866.876 3.866 1.931v19.312c0 1.055-2.81 1.93-3.866 1.93ZM52.267 45.942h-1.934c-1.056 0-3.866-.876-3.866-1.931V24.699c0-1.055 2.81-1.93 3.867-1.93h1.933c4.279 0 7.733 3.45 7.733 7.724v7.724a7.719 7.719 0 0 1-7.733 7.725Z"/>
    <path  stroke="#0079BD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M9.733 22.768C9.733 11.027 19.245 1.526 31 1.526c5.645 0 11.059 2.24 15.029 6.23a21.235 21.235 0 0 1 6.238 15.012M38.733 55.597h5.8c4.28 0 7.734-3.45 7.734-7.724v-1.931"/>
    <path  stroke="#0079BD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M34.867 59.46h-7.734a3.86 3.86 0 0 1-3.866-3.863 3.86 3.86 0 0 1 3.866-3.862h7.734a3.86 3.86 0 0 1 2.732 6.591 3.865 3.865 0 0 1-2.732 1.133Z"/>
  </symbol>

  <!-- Message Bubble Warning  -->
  <symbol fill="none" viewBox="0 0 124 124" id="svg-message-bubble-warning" xmlns="http://www.w3.org/2000/svg">
    <path stroke-width="6" d="M118.833 70.01c4.688-20.512-2.76-41.911-19.218-55.064a54.61 54.61 0 0 0-57.813-6.524c-18.906 9.134-30.99 28.289-30.99 49.322a54.597 54.597 0 0 0 8.23 28.81L3 120.325l33.698-16.076c1.406.835 2.812 1.67 4.27 2.401"/>
    <path stroke="var(--icon-secondary)" stroke-width="6" d="M88.937 104.718a1.98 1.98 0 0 0-1.979 1.983 1.98 1.98 0 1 0 3.958 0 1.98 1.98 0 0 0-1.979-1.983ZM88.938 92.975V77.317"/>
    <path stroke="var(--icon-secondary)" stroke-width="6" d="M119.198 106.962c1.458 2.871 1.302 6.263-.417 9.029a9.218 9.218 0 0 1-7.864 4.385h-44.01a9.218 9.218 0 0 1-7.865-4.385c-1.667-2.714-1.823-6.158-.417-9.029l22.031-44.103a9.22 9.22 0 0 1 8.281-5.115 9.22 9.22 0 0 1 8.282 5.115l21.979 44.103Z"/>
  </symbol>

  <!-- Office Employee -->
  <symbol fill="none" viewBox="0 0 88 86" id="svg-office-employee" xmlns="http://www.w3.org/2000/svg">
    <path  stroke="#00539B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M66.139 83.035H21.862l-5.75-25.098c-.261-1.088 0-2.252.635-3.19a3.304 3.304 0 0 1 2.688-1.425h49.168c1.083 0 2.09.563 2.688 1.426.635.938.859 2.1.635 3.189l-5.75 25.098h-.037ZM2 83.035h84"/>
    <path  stroke="#00539B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M44 72.23c3.1 0 5.6-2.401 5.6-5.402 0-3.002-2.5-5.403-5.6-5.403-3.098 0-5.6 2.401-5.6 5.403 0 3 2.502 5.402 5.6 5.402ZM30.709 9.315c4.816 4.803 11.461 7.541 18.405 7.541 3.472 0 6.944-.675 10.118-2.026"/>
    <path  stroke="#00539B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M44 31.713c8.513 0 15.382-6.64 15.382-14.857C59.382 8.64 52.475 2 44 2c-8.475 0-15.382 6.64-15.382 14.856 0 8.216 6.907 14.857 15.382 14.857ZM62.665 45.218C57.924 40.078 51.13 37.115 44 37.115c-7.131 0-13.926 2.964-18.667 8.103"/>
  </symbol>

  <!-- payment -->
  <symbol fill="none" viewBox="0 0 45 45" id="svg-payment" xmlns="http://www.w3.org/2000/svg">
    <path  stroke="#FEBE4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M34.75 26.313h-3.806c-1.2 0-2.232.862-2.475 2.043a2.519 2.519 0 0 0 1.537 2.813l3.863 1.556a2.519 2.519 0 0 1-.938 4.856h-3.806M31.938 38.969v-1.407M31.938 26.313v-1.407"/>
    <path  stroke="#FEBE4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M31.938 43.188c6.206 0 11.25-5.044 11.25-11.25 0-6.207-5.044-11.25-11.25-11.25-6.207 0-11.25 5.043-11.25 11.25 0 6.206 5.043 11.25 11.25 11.25Z"/>
    <path  stroke="#002B5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M9.438 19.281h9.843M9.438 26.313h5.624M9.438 33.344h5.624M17.875 43.188H3.812A2.809 2.809 0 0 1 1 40.374V10.844A2.809 2.809 0 0 1 3.813 8.03h7.03A7.034 7.034 0 0 1 17.876 1a7.034 7.034 0 0 1 7.031 7.031h7.032a2.809 2.809 0 0 1 2.812 2.813v4.219"/>
    <path  stroke="#002B5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M17.875 6.625a.712.712 0 1 1 0 1.424.712.712 0 0 1 0-1.424Z"/>
  </symbol>

  <!-- pdf -->
  <symbol fill="none" viewBox="0 0 25 26" id="svg-pdf" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#aa)" stroke="#00539B" stroke-width="1.473" stroke-linecap="round" stroke-linejoin="round">
      <path d="M23.497 23.378c0 .892-.723 1.611-1.62 1.611H2.43c-.897 0-1.62-.72-1.62-1.61V2.431C.81 1.54 1.534.82 2.43.82h16.205c.421 0 .832.161 1.134.462l3.241 3.094c.314.3.486.72.486 1.15v17.852Z"/>
      <path d="M9.454 7.614a4.118 4.118 0 0 0-.551-1.579 1.71 1.71 0 0 0-1.394-.816 1.602 1.602 0 0 0-1.426 1.375c-.076.72.108 1.44.53 2.03a44.18 44.18 0 0 0 4.256 4.264 19.122 19.122 0 0 0 5.66 3.148 4.138 4.138 0 0 0 1.794.376 1.468 1.468 0 0 0 1.361-1.053 1.426 1.426 0 0 0-.518-1.3 3.057 3.057 0 0 0-1.34-.58 11.645 11.645 0 0 0-5.747.613c-1.75.537-6.871 2.223-6.634 6.498 0 .108 0 .817.919.72a2.801 2.801 0 0 0 1.847-1.278c1.178-1.654 1.307-3.77 1.459-5.726.226-2.234.162-4.49-.195-6.713l-.021.021Z"/>
    </g>
    <defs>
      <clipPath id="aa">
        <path fill="#fff" d="M0 0h24.307v25.78H0z"/>
      </clipPath>
    </defs>
  </symbol>

  <!-- Phone -->
  <symbol fill="none" viewBox="0 0 24 24" id="svg-phone" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#aa)">
      <path  stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M13.291 19.734h.01a4.835 4.835 0 0 0 6.038-.658l.675-.676a1.621 1.621 0 0 0 0-2.29l-2.86-2.862a1.621 1.621 0 0 0-2.292 0 1.6 1.6 0 0 1-1.14.474c-.43 0-.843-.167-1.142-.474L8 8.667a1.621 1.621 0 0 1 0-2.291 1.6 1.6 0 0 0 .474-1.141c0-.43-.167-.843-.474-1.141l-2.861-2.87a1.621 1.621 0 0 0-2.291 0L2.17 1.9a4.873 4.873 0 0 0-.667 6.047 43.63 43.63 0 0 0 11.779 11.787h.008Z"/>
    </g>
    <defs>
      <clipPath id="aa">
        <path fill="#fff" d="M0 0h24v24H0z"/>
      </clipPath>
    </defs>
  </symbol>

  <!-- Phone alt-->
  <symbol fill="none" viewBox="0 0 23 21" id="svg-phone-alt" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.412 10.056c0-2.17-.854-4.01-2.563-5.522-1.707-1.51-3.787-2.266-6.24-2.266V.042c1.573 0 3.045.265 4.418.793 1.373.529 2.567 1.243 3.584 2.143a10.218 10.218 0 0 1 2.42 3.17 8.74 8.74 0 0 1 .896 3.908h-2.515Zm-5.03 0c0-.927-.367-1.715-1.1-2.364-.734-.65-1.624-.974-2.672-.974V4.493c1.74 0 3.222.542 4.449 1.627 1.225 1.085 1.838 2.397 1.838 3.936h-2.515Zm6.225 10.07c-2.704 0-5.34-.53-7.906-1.586-2.568-1.057-4.842-2.466-6.822-4.228-1.98-1.762-3.573-3.779-4.778-6.05C.895 5.99.293 3.657.293 1.265V.682c0-.204.02-.398.062-.584h7.357L8.875 5.69 5.29 8.888c.88 1.335 1.986 2.587 3.317 3.755a23.262 23.262 0 0 0 4.385 3.032l3.647-3.227 6.287 1.113v6.509a14.275 14.275 0 0 1-1.32.055Z" fill="#00539B"/>
  </symbol>

  <!-- Phone incoming -->
  <symbol fill="none" viewBox="0 0 114 87" id="svg-phone-incoming" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.936 52.755h-.05C7.396 55.075 0 64.305 0 74.946v4.489a7.54 7.54 0 0 0 2.23 5.346A7.61 7.61 0 0 0 7.6 87h19c4.205 0 7.6-3.38 7.6-7.565 0-4.186 3.395-7.565 7.6-7.565h30.4c4.205 0 7.6 3.379 7.6 7.565S83.195 87 87.4 87h19c4.205 0 7.6-3.38 7.6-7.565v-4.489c0-10.642-7.397-19.871-17.835-22.14h-.05a205.888 205.888 0 0 0-78.179 0v-.051Z" fill="#fff"/>
    <path  stroke="#fff" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" d="M57 30.26V3.784M30.4 30.26 19 11.349M83.6 30.26 95 11.349"/>
  </symbol>

  <!-- Phone incoming alt -->
  <symbol fill="none" viewBox="0 0 79 60" id="svg-phone-incoming-alt" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 50.967c0-6.359 4.256-11.914 10.4-13.618l.746-.144c17.622-3.4 35.692-3.4 53.314 0l.14.027h.014a14.088 14.088 0 0 1 10.957 13.735v3.089c0 2.043-1.66 3.705-3.738 3.705H60.238c-2.079 0-3.738-1.662-3.738-3.706 0-3.717-3.02-6.705-6.738-6.705H28.809c-3.718 0-6.738 2.988-6.738 6.706 0 2.043-1.659 3.705-3.738 3.705H5.238a3.75 3.75 0 0 1-2.644-1.09A3.684 3.684 0 0 1 1.5 54.055v-3.09Z" stroke="#fff" stroke-width="3"/>
    <path  stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M39.285 20.22V2M20.95 20.219 13.095 7.205M57.621 20.219l7.857-13.014"/>
  </symbol>

  <!-- Pinterest -->
  <symbol fill="none" viewBox="0 0 46 46" id="svg-Pinterest" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.057.198C10.513.198.337 10.456.337 23.103c0 12.647 10.176 22.906 22.72 22.906 12.544 0 22.719-10.259 22.719-22.906C45.776 10.456 35.6.198 23.056.198Zm8.655 26.205c-2.917 3.645-7.642 3.894-9.82 1.643-.164-.166-.3-.373-.465-.58-.027.083-.041.152-.068.221-1.041 4.142-1.164 5.053-2.246 6.973a22.006 22.006 0 0 1-1.726 2.61c-.068.096-.137.22-.287.179-.165-.028-.165-.18-.192-.304-.178-1.257-.274-2.513-.22-3.783.056-1.657.261-2.223 2.37-11.184a.584.584 0 0 0-.055-.373c-.506-1.38-.602-2.775-.164-4.183.959-3.051 4.396-3.286 4.998-.773.37 1.56-.602 3.603-1.355 6.613-.617 2.486 2.287 4.253 4.765 2.444 2.287-1.67 3.177-5.688 3.013-8.533-.329-5.674-6.505-6.903-10.421-5.067-4.492 2.099-5.505 7.705-3.479 10.273.26.331.452.524.37.856-.137.51-.247 1.035-.384 1.546-.109.387-.424.525-.794.359a4.552 4.552 0 0 1-1.876-1.422c-1.725-2.154-2.218-6.393.069-9.996 2.52-3.99 7.217-5.606 11.49-5.109 5.107.58 8.339 4.115 8.955 8.105.274 1.822.082 6.31-2.451 9.485h-.027Z" fill="#fff"/>
  </symbol>

  <!-- Play -->
  <symbol fill="none" viewBox="0 0 24 24" id="svg-play" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.968 23.714c-.864.415-1.856.383-2.656-.128S0 22.212 0 21.253V2.747C0 1.788.48.925 1.312.414A2.719 2.719 0 0 1 3.968.286l18.528 9.269c.928.447 1.504 1.406 1.504 2.429s-.576 1.982-1.504 2.43L3.968 23.681v.032Z" fill="#FEFEFE"/>
  </symbol>

  <!-- Play Youtube-->
  <symbol fill="none" viewBox="0 0 76 52" id="svg-play-youtube" xmlns="http://www.w3.org/2000/svg">
    <path d="M75.983 18.326A27.95 27.95 0 0 0 72.84 4.443a10.142 10.142 0 0 0-5.938-3.362A277.793 277.793 0 0 0 38.006.04c-9.609-.161-19.22.175-28.792 1.009a10.008 10.008 0 0 0-5.04 2.487C1.065 6.325.72 11.1.375 15.133c-.501 7.253-.501 14.53 0 21.783.1 2.27.447 4.524 1.035 6.723a10.464 10.464 0 0 0 2.452 4.572 9.964 9.964 0 0 0 5.144 2.622 160.144 160.144 0 0 0 22.44 1.11c12.083.168 22.682 0 35.214-.942a10.04 10.04 0 0 0 5.282-2.622 8.334 8.334 0 0 0 2.106-3.361 34.708 34.708 0 0 0 1.795-11.43c.139-1.882.139-13.245.139-15.262Zm-45.779 17.28v-20.81l20.438 10.455c-5.73 3.093-13.292 6.59-20.438 10.354Z" fill="#E10404"/>
  </symbol>

  <!-- Play Youtube Alt -->
  <symbol fill="none" viewBox="0 0 43 30" id="svg-play-youtube-alt" xmlns="http://www.w3.org/2000/svg">
    <path d="M42.685 9.67c0-5.05-4.141-9.143-9.252-9.143H9.803C4.694.527.553 4.619.553 9.67v10.867c0 5.05 4.141 9.142 9.252 9.142h23.643c5.11 0 9.252-4.092 9.252-9.142V9.67h-.014Zm-13.906 6.24-10.596 5.188c-.415.219-1.828-.082-1.828-.548V9.916c0-.48 1.427-.767 1.842-.534l10.153 5.461c.429.233.872.849.443 1.081l-.014-.013Z" fill="#fff"/>
  </symbol>

  <!-- Police Hat 1-->
  <symbol fill="none" viewBox="0 0 148 142" id="svg-police-hat-1" xmlns="http://www.w3.org/2000/svg">
    <path stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M6.777 82.49H140.56M140.559 101.43H6.777M16.334 101.43s5.733 37.878 57.335 37.878c51.601 0 57.335-37.878 57.335-37.878M16.334 82.49A35.324 35.324 0 0 1 2 54.083C2 35.143 45.001 2 73.669 2c28.667 0 71.668 33.143 71.668 52.082a35.324 35.324 0 0 1-14.333 28.409"/>
    <path  stroke="var(--icon-secondary)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="m75.135 63.047-1.466.505-1.465-.505c-9.11-3.03-15.225-11.427-15.225-20.96v-6.944c0-2.588 2.166-4.735 4.777-4.735h23.89c2.612 0 4.778 2.147 4.778 4.735v6.944a22.027 22.027 0 0 1-15.226 20.96h-.063Z"/>
  </symbol>

  <!-- Police Hat -->
  <symbol fill="none" viewBox="0 0 107 86" id="svg-police-hat" xmlns="http://www.w3.org/2000/svg">
    <path  stroke="#FEFEFE" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M73.426 42.773h27.096c.862-1.589 1.816-3.429 2.814-5.227a5.817 5.817 0 0 0 .182-5.395c-.817-1.714-2.451-3.01-4.448-3.512-7.625-2.008-14.252-6.399-18.7-12.462C74.379 7.604 64.121 2.293 53.047 2c-11.075.293-21.332 5.604-27.324 14.177-4.448 6.063-11.074 10.454-18.7 12.462-1.996.501-3.63 1.798-4.447 3.512a5.817 5.817 0 0 0 .181 5.395c.999 1.798 1.952 3.638 2.814 5.227h27.097M5.344 55.32C14.285 72.171 32.667 83.044 53 83.546c20.333-.502 38.715-11.375 47.657-28.228H5.344Z"/>
    <path  stroke="#FEFEFE" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M63.986 35.79 53.048 45.91 42.109 35.79V22.324h21.923V35.79h-.046ZM5.344 42.773V55.32M100.658 42.773V55.32"/>
  </symbol>

  <!-- User -->
  <symbol fill="none" viewBox="0 0 18 22" id="svg-user" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#aa)" stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 9.263c2.175 0 3.93-1.821 3.93-4.044 0-2.224-1.755-4.06-3.93-4.06-2.175 0-3.93 1.821-3.93 4.06 0 2.238 1.77 4.044 3.93 4.044ZM9 10.421c-4.35 0-7.875 3.628-7.875 8.105v2.316h15.75v-2.316c0-4.477-3.525-8.105-7.875-8.105Z"/>
    </g>
    <defs>
      <clipPath id="aa">
        <path fill="#fff" d="M0 0h18v22H0z"/>
      </clipPath>
    </defs>
  </symbol>

  <!-- Police Hat 2 -->
  <symbol fill="none" viewBox="0 0 73 84" id="svg-police-hat-2" xmlns="http://www.w3.org/2000/svg">
    <path  stroke="#00539B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M2 36.51V10.68c0-2.23 1.415-4.21 3.503-4.99A118.912 118.912 0 0 1 36.5 2.01a118.912 118.912 0 0 1 30.997 3.68C69.585 6.47 71 8.45 71 10.68v25.83M2 57.742s2.654 23.885 34.5 23.885S71 57.742 71 57.742H2ZM2 47.126h69"/>
    <path  stroke="#00539B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M36.502 36.511c-6.9-4.14-11.182-5.555-11.182-12.35v-8.88h21.231v8.88c0 6.3-3.963 8.104-10.05 12.35Z"/>
  </symbol>

  <!-- Rotating Police Lights -->
  <symbol fill="none" viewBox="0 0 123 123" id="svg-police-rotating-light" xmlns="http://www.w3.org/2000/svg">
    <path  stroke="#FEFEFE" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" d="M96 96.156H26.25c-8.577 0-15.5 6.935-15.5 15.527a7.746 7.746 0 0 0 7.75 7.763h85.25a7.747 7.747 0 0 0 7.75-7.763c0-8.592-6.923-15.527-15.5-15.527Z"/>
    <path  stroke="#FEFEFE" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" d="M74.403 26.29H47.898c-7.905 0-14.518 5.95-15.396 13.817l-6.2 56.05h69.75l-6.2-56.05c-.879-7.866-7.492-13.818-15.397-13.818h-.052Z"/>
    <path  stroke="#FEBE4F" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" d="M61.125 80.63c6.407 0 11.625-5.227 11.625-11.644 0-6.418-5.218-11.645-11.625-11.645S49.5 62.568 49.5 68.986c0 6.417 5.218 11.644 11.625 11.644ZM61.125 80.63v15.526M61.125 10.763V3M10.75 49.578H3M10.75 10.763l7.75 7.763M111.5 49.578h7.75M111.5 10.763l-7.75 7.763"/>
  </symbol>

  <!-- Religion Cao -->
  <symbol fill="none" viewBox="0 0 114 67" id="svg-religion-cao" xmlns="http://www.w3.org/2000/svg">
    <path  stroke="#00539B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M17.686 64.556 7.176 51.419A23.41 23.41 0 0 1 2 36.77V9.818C2 5.493 5.503 2 9.843 2s7.843 3.493 7.843 7.82v19.548"/>
    <path  stroke="#00539B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M41.215 64.556v-16.37c0-4.639-1.36-9.174-3.974-13.032l-5.96-8.914a7.485 7.485 0 0 0-4.654-3.388c-1.935-.417-4.026-.052-5.647 1.043-3.085 2.032-4.13 6.047-2.51 9.33l7.059 11.73M96.113 64.556l10.51-13.137a23.41 23.41 0 0 0 5.176-14.648V9.818c0-4.326-3.503-7.819-7.843-7.819s-7.843 3.493-7.843 7.82v19.548"/>
    <path  stroke="#00539B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M72.584 64.555V48.187c0-4.64 1.36-9.175 3.974-13.033l5.96-8.914a7.485 7.485 0 0 1 4.654-3.388c1.934-.47 4.026-.052 5.646 1.042 3.085 2.033 4.13 6.047 2.51 9.331l-7.058 11.73"/>
  </symbol>

  <!-- Resource -->
  <symbol fill="none" viewBox="0 0 75 75" id="svg-resource" xmlns="http://www.w3.org/2000/svg">
    <path  stroke="#007DC3" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M14.242 32.704h46.923M14.242 19.609h27.201M14.242 46.494h46.923M14.242 61.104h46.923M71.612 17.116A4.729 4.729 0 0 1 73 20.46v45.377c0 3.912-3.187 7.1-7.1 7.1H9.1a7.093 7.093 0 0 1-5.017-2.083A7.093 7.093 0 0 1 2 65.838v-56.8c0-1.894.757-3.692 2.083-5.018A7.093 7.093 0 0 1 9.1 1.938h45.377c1.262 0 2.461.504 3.345 1.388l13.79 13.79Z"/>
    <path  stroke="#007DC3" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M54.066 1.938v14.2A4.727 4.727 0 0 0 58.8 20.87H73"/>
  </symbol>

  <!-- Resource Article -->
  <symbol fill="none" viewBox="0 0 24 24" id="svg-resource-article" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#aa)" stroke="#00539B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M7.5 16.5v-6M4.5 12v-1.5h6V12M14.25 15h5.25M14.25 10.5h5.25M4.5 19.5h15M6 16.5h3"/>
      <path d="M22.81 5.56c.28.28.44.66.44 1.06V21c0 1.24-1.01 2.25-2.25 2.25H3c-.6 0-1.17-.24-1.59-.66C.99 22.17.75 21.6.75 21V3c0-.6.24-1.17.66-1.59C1.83.99 2.4.75 3 .75h14.38c.4 0 .78.16 1.06.44l4.37 4.37Z"/>
      <path d="M17.25.75v4.5c0 .83.67 1.5 1.5 1.5h4.5"/>
    </g>
    <defs>
      <clipPath id="aa">
        <path fill="#fff" d="M0 0h24v24H0z"/>
      </clipPath>
    </defs>
  </symbol>

  <!-- Resource Video -->
  <symbol fill="none" viewBox="0 0 23 24" id="svg-resource-video" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#aa)" stroke="#00539B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21.75 21.75c0 .83-.67 1.5-1.5 1.5h-18c-.83 0-1.5-.67-1.5-1.5V2.25c0-.83.67-1.5 1.5-1.5h15c.39 0 .77.15 1.05.43l3 2.88c.29.28.45.67.45 1.07v16.62Z"/>
      <path d="M9.49 16.412c-.27.13-.58.12-.83-.04a.87.87 0 0 1-.41-.73v-5.79c0-.3.15-.57.41-.73.26-.16.57-.17.83-.04l5.79 2.9c.29.14.47.44.47.76s-.18.62-.47.76l-5.79 2.9v.01Z"/>
    </g>
    <defs>
      <clipPath id="aa">
        <path fill="#fff" d="M0 0h22.5v24H0z"/>
      </clipPath>
    </defs>
  </symbol>

  <!-- Search -->
  <symbol fill="none" viewBox="0 0 37 37" id="svg-search" xmlns="http://www.w3.org/2000/svg">
    <path  stroke="#002B5C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M20.294 25.86c6.673-2.674 9.79-9.942 6.95-16.243C24.407 3.33 16.69.396 10.017 3.07 3.327 5.744.211 13.013 3.05 19.314c2.839 6.285 10.555 9.22 17.244 6.546ZM23.912 23.936l10.226 10.199"/>
  </symbol>

  <!-- Share -->
  <symbol fill="none" viewBox="0 0 17 15" id="svg-share" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.547 10.233v3.104H1.351V3.15h4.025c.527-.38 1.2-.75 2.053-1.05.324-.114.635-.213.933-.3h-7.01A1.35 1.35 0 0 0 0 3.15v10.189c0 .745.605 1.35 1.351 1.35h10.197a1.35 1.35 0 0 0 1.35-1.35V9.886l-.063.054a1.41 1.41 0 0 1-1.287.293Z" fill="#313E48"/>
    <path d="M16.75 4.213 12.697.85a.693.693 0 0 0-1.136.532v1.27h-.37c-6.051 0-8.652 4.825-8.846 9.065a.49.49 0 0 0 .954.178c.382-1.163 2.077-4.954 7.961-4.954h.301v1.167c0 .586.684.907 1.136.532l4.051-3.362a.692.692 0 0 0 0-1.065Z" fill="#313E48"/>
  </symbol>

  <!-- Share Link -->
  <symbol fill="none" viewBox="0 0 15 17" id="svg-share-link" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.067 11.81c-.591 0-1.12.24-1.524.618L4.997 9.094c.039-.184.07-.37.07-.562a2.71 2.71 0 0 0-.07-.562l5.483-3.301c.42.401.973.65 1.587.65 1.291 0 2.333-1.076 2.333-2.41C14.4 1.577 13.358.5 12.067.5c-1.291 0-2.333 1.076-2.333 2.41 0 .192.03.377.07.562L4.32 6.773a2.284 2.284 0 0 0-1.586-.65C1.443 6.122.4 7.198.4 8.532c0 1.332 1.043 2.409 2.334 2.409.614 0 1.166-.25 1.586-.65l5.538 3.34a2.337 2.337 0 0 0-.062.523c0 1.293 1.019 2.345 2.271 2.345s2.271-1.052 2.271-2.345c0-1.294-1.019-2.346-2.27-2.346Z" fill="#fff"/>
  </symbol>

  <!-- Task List Check -->
  <symbol fill="none" viewBox="0 0 45 45" id="svg-task-list-check" xmlns="http://www.w3.org/2000/svg">
    <path  stroke="#002B5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M9.432 19.27h9.837M9.432 26.296h5.621M9.432 33.323h5.621M17.864 43.16H3.811A2.807 2.807 0 0 1 1 40.35V10.836a2.807 2.807 0 0 1 2.81-2.81h7.027A7.03 7.03 0 0 1 17.864 1a7.03 7.03 0 0 1 7.027 7.027h7.026a2.807 2.807 0 0 1 2.811 2.81v4.216"/>
    <path  stroke="#002B5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M17.864 6.621a.712.712 0 1 1 .001 1.424.712.712 0 0 1 0-1.424Z"/>
    <path  stroke="#FEBE4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M31.918 43.16c6.202 0 11.242-5.04 11.242-11.243 0-6.202-5.04-11.242-11.242-11.242-6.203 0-11.243 5.04-11.243 11.242 0 6.202 5.04 11.243 11.242 11.243Z"/>
    <path  stroke="#FEBE4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="m36.92 28.638-5.434 7.252a1.464 1.464 0 0 1-1.03.562 1.312 1.312 0 0 1-1.088-.412l-2.81-2.811"/>
  </symbol>

  <!-- Team Share Idea -->
  <symbol fill="none" viewBox="0 0 79 79" id="svg-team-share-idea" xmlns="http://www.w3.org/2000/svg">
    <path  stroke="#00539B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M39.31 2v4.98M14.414 26.896h5.344M64.206 26.896H58.86M18.764 10.63l4.514 4.515M59.823 10.63l-4.514 4.515M51.758 26.896c0-6.207-4.58-11.485-10.722-12.348-6.174-.863-12.016 2.954-13.676 8.962-1.693 5.975 1.295 12.282 7.004 14.772v6.041h9.959v-6.041c4.547-1.959 7.468-6.44 7.468-11.386h-.033ZM34.33 51.792h9.958M62.613 64.24c4.813 0 8.697-3.917 8.697-8.697 0-4.78-3.917-8.697-8.697-8.697-4.78 0-8.697 3.917-8.697 8.697 0 4.78 3.917 8.697 8.697 8.697ZM76.655 76.688a14.837 14.837 0 0 0-14.008-9.959c-6.307 0-11.95 3.984-14.008 9.959M15.974 64.24c4.814 0 8.697-3.917 8.697-8.697 0-4.78-3.917-8.697-8.697-8.697-4.78 0-8.697 3.917-8.697 8.697 0 4.78 3.917 8.697 8.697 8.697ZM30.016 76.688a14.836 14.836 0 0 0-14.008-9.959c-6.307 0-11.95 3.984-14.008 9.959"/>
  </symbol>

  <!-- Time Clock -->
  <symbol fill="none" viewBox="0 0 23 24" id="svg-time-clock-circle-1" xmlns="http://www.w3.org/2000/svg">
    <path  stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M11.5 22.5C17.3 22.5 22 17.8 22 12S17.3 1.5 11.5 1.5 1 6.2 1 12s4.7 10.5 10.5 10.5Z"/>
    <path  stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M11.5 13.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5ZM11.5 10.5V5.25M12.559 13.06l2.69 2.69"/>
  </symbol>

  <!-- Url-->
  <symbol fill="none" viewBox="0 0 18 20" id="svg-url" xmlns="http://www.w3.org/2000/svg">
    <path d="m12.642 17.58.226-1.9c6.683-4.528 2.4-15.166-5.583-13.474C.973 3.543-.551 12.149 4.835 15.68l.226 1.899C1.902 16.077-.156 12.65.009 9.085.407.508 11.382-2.696 16.15 4.392c3.072 4.57 1.37 10.84-3.507 13.188Z" fill="#00539B"/>
    <path d="M9.105 11.215c-.015.067.052.06.1.076.198.062.398.076.607.154 1.12.422 1.78 1.577 1.718 2.771-.055 1.074-.277 2.668-.462 3.741-.11.641-.346 1.167-.985 1.412-.438.169-1.989.174-2.428.016-.656-.236-.908-.775-1.02-1.428-.184-1.073-.405-2.668-.461-3.741-.063-1.215.615-2.37 1.754-2.786.192-.07.388-.083.57-.14.049-.015.116-.01.101-.076-1.95-.147-2.717-2.711-1.236-4.003 1.273-1.11 3.293-.474 3.689 1.178.32 1.34-.574 2.733-1.947 2.825Z" fill="#00539B"/>
    <path d="M12.995 13.524c-.005-.597-.265-1.142-.505-1.672.133-.38.356-.717.468-1.11 1.129-3.971-3.22-7.215-6.548-4.856-1.55 1.098-2.192 3.002-1.666 4.856.112.393.335.73.469 1.11-.24.53-.5 1.075-.505 1.672-.048.01-.065 0-.103-.023-.11-.07-.559-.719-.656-.873-2.95-4.666 1.584-10.474 6.749-8.755 3.888 1.294 5.342 6.54 2.447 9.574-.048.05-.066.097-.15.078Z" fill="#00539B"/>
  </symbol>

  <!-- Warning -->
  <symbol fill="none" viewBox="0 0 162 162" id="svg-warning" xmlns="http://www.w3.org/2000/svg">
    <path d="M90.353 108.251a8.646 8.646 0 1 0-12.227-12.227 8.646 8.646 0 0 0 12.227 12.227ZM95.383 54.574l-4.05 30.502c-.334 3.697-2.802 6.509-7.093 6.509-4.29 0-6.758-2.812-7.092-6.51l-4.05-30.501c-.65-7.189 4.332-13.725 11.143-13.725 6.81 0 11.792 6.536 11.143 13.725h-.001Z" fill="#D11920"/>
    <path d="M90.353 108.251a8.646 8.646 0 1 0-12.227-12.227 8.646 8.646 0 0 0 12.227 12.227ZM95.383 54.574l-4.05 30.502c-.334 3.697-2.802 6.509-7.093 6.509-4.29 0-6.758-2.812-7.092-6.51l-4.05-30.501c-.65-7.189 4.332-13.725 11.143-13.725 6.81 0 11.792 6.536 11.143 13.725h-.001Z" fill="#ED1C24"/>
    <path d="M134.688 103.418 91.846 29.216c-4.82-8.35-16.872-8.348-21.693.001l-42.842 74.2c-4.82 8.349 1.205 18.78 10.846 18.78h85.684c9.641 0 15.667-10.43 10.847-18.779Z" fill="#fff"/>
    <path d="M75.595 102.137c0 1.555.41 3.015 1.13 4.276a8.646 8.646 0 0 0 11.791-11.791 8.645 8.645 0 0 0-12.921 7.515Z" fill="#AF1D2F"/>
    <path d="M85.48 91.501A8.603 8.603 0 0 0 81 90.252a8.647 8.647 0 0 0-4.276 16.16 8.645 8.645 0 0 1 11.791-11.79 8.695 8.695 0 0 0-3.036-3.12ZM73.097 54.574c-.65-7.189 4.332-13.725 11.143-13.725 2.118 0 4.059.633 5.709 1.72-2.007-2.98-5.2-4.96-8.95-4.96-6.81 0-11.791 6.536-11.142 13.725l4.05 30.502c.24 2.66 1.585 4.86 3.917 5.887a8.194 8.194 0 0 1-.677-2.647l-4.05-30.502Z" fill="#AF1D2F"/>
    <path d="M81 88.345c4.29 0 6.758-2.812 7.092-6.51l4.05-30.501c.292-3.232-.554-6.331-2.193-8.765a10.294 10.294 0 0 0-5.71-1.72c-6.809 0-11.79 6.536-11.142 13.725l4.05 30.502c.086.952.313 1.845.678 2.647.91.4 1.97.622 3.174.622Z" fill="#AF1D2F"/>
  </symbol>

  <!-- Weibo -->
  <symbol fill="none" viewBox="0 0 43 37" id="svg-weibo" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#aa)" fill="#fff">
      <path d="M31.453 20.408c-1.072-.585-2.012-.658-2.227-1.024-.142-.366.286-1.17.286-1.17s1.072-3.012-.928-4.182c-2.012-1.17-5.096-.439-6.739.146-1.642.585-2.083.878-2.369.658-.285-.219.215-.95.286-1.767.072-.805.5-3.45-1.869-4.255-2.44-.878-6.452 1.463-6.452 1.463S3.417 14.824.548 22.907C-2.322 30.977 6.358 37 16.536 37s16.345-5.291 17.845-9.619c1.512-4.328-1.869-6.388-2.94-6.973h.012ZM16.75 34.623c-6.583.597-12.238-2.548-12.63-7.035-.394-4.486 4.63-8.607 11.225-9.204 6.584-.597 12.239 2.548 12.631 7.034.393 4.487-4.63 8.607-11.226 9.205Z"/>
      <path d="M13.392 22.017c-3.345 1.134-5.286 4.426-4.333 7.352.952 2.925 4.428 4.376 7.774 3.23 3.345-1.134 5.285-4.425 4.333-7.351-.953-2.926-4.429-4.377-7.774-3.23Zm.845 8.034c-1.047.732-2.38.573-2.988-.329-.595-.902-.238-2.23.822-2.962 1.047-.732 2.38-.586 2.988.329.595.902.226 2.23-.822 2.962Zm3.048-4.206c-.393.268-.893.208-1.107-.122-.215-.341-.072-.829.321-1.097s.893-.207 1.12.122c.213.341.07.83-.322 1.097h-.012ZM32.167 0c-1.655 0-3.298.439-4.798 1.17-.928.512-1.357 1.683-.857 2.646.5.95 1.643 1.39 2.583.878.929-.512 2.012-.732 3.084-.732 3.869 0 6.952 3.23 6.952 7.12a7.443 7.443 0 0 1-1 3.67 1.975 1.975 0 0 0 .643 2.718c.286.22.643.292 1 .292.643 0 1.286-.292 1.643-.877 1-1.768 1.571-3.743 1.571-5.803C42.988 4.986 38.12 0 32.167 0Z"/>
      <path d="M30.941 6.608c-1.285-.074-2.583.219-3.654.95a2.022 2.022 0 0 0-.572 2.72 1.918 1.918 0 0 0 2.655.584c.286-.22.714-.378 1.143-.378h.143c1.143.086 2.012 1.11 2.012 2.28-.072.512-.215 1.024-.5 1.402-.643.878-.5 2.133.357 2.792.357.292.785.439 1.214.439.572 0 1.143-.293 1.5-.805a5.934 5.934 0 0 0 1.286-3.743v-.073c0-3.23-2.429-5.949-5.584-6.168Z"/>
    </g>
    <defs>
      <clipPath id="aa">
        <path fill="#fff" d="M0 0h43v37H0z"/>
      </clipPath>
    </defs>
  </symbol>

  <!-- X -->
  <symbol fill="none" viewBox="0 0 33 35" id="svg-x" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.346 14.967 31.042.86h-2.77L18.123 13.105 10.014.86H.668l12.253 18.52L.668 34.179h2.771l10.718-12.934 8.558 12.934h9.346L19.346 14.967Zm-3.79 4.584-1.236-1.848L4.43 3.02h4.253l7.974 11.85 1.236 1.847 10.365 15.389h-4.252l-8.463-12.568.013.014Z" fill="#fff"/>
  </symbol>
</svg>
`,position:{start:323,end:323}}],precompiled:!0});const i=e=>e,h=(e={})=>{const n=s.twig({id:"/var/www/html/src/components/mht_popover_social/mht_popover_social.twig",data:[{type:"raw",value:`<!-- Share Component -->
<div class="mht-popover-social">
  <div
    class="mht-popover-social__icon"
    tabindex="0"
    data-bs-toggle="popover"
    data-bs-trigger="focus"
    data-bs-container="body"
    data-bs-placement="bottom"
    data-bs-content='
    <ul id="mht-quote-social">
      <li>
        <a href="https://www.facebook.com/sharer/sharer.php?u=`,position:{start:0,end:362}},{type:"output",position:{start:362,end:382},stack:[{type:"Twig.expression.type.variable",value:"url",match:["url"],position:{start:362,end:382}},{type:"Twig.expression.type.filter",value:"url_encode",match:["|url_encode","url_encode"],position:{start:362,end:382}}]},{type:"raw",value:`" target="_blank">
          <i class="bi-facebook"></i>
        </a>
      </li>
      <li><a href="https://twitter.com/intent/tweet/?text=`,position:{start:382,end:522}},{type:"output",position:{start:522,end:544},stack:[{type:"Twig.expression.type.variable",value:"label",match:["label"],position:{start:522,end:544}},{type:"Twig.expression.type.filter",value:"url_encode",match:["|url_encode","url_encode"],position:{start:522,end:544}}]},{type:"raw",value:"&url=",position:{start:544,end:549}},{type:"output",position:{start:549,end:569},stack:[{type:"Twig.expression.type.variable",value:"url",match:["url"],position:{start:549,end:569}},{type:"Twig.expression.type.filter",value:"url_encode",match:["|url_encode","url_encode"],position:{start:549,end:569}}]},{type:"raw",value:`" target="_blank"><i class="bi-twitter"></i></a></li>
      <li><a href="https://www.linkedin.com/shareArticle?mini=true&url=`,position:{start:569,end:694}},{type:"output",position:{start:694,end:714},stack:[{type:"Twig.expression.type.variable",value:"url",match:["url"],position:{start:694,end:714}},{type:"Twig.expression.type.filter",value:"url_encode",match:["|url_encode","url_encode"],position:{start:694,end:714}}]},{type:"raw",value:"&title=",position:{start:714,end:721}},{type:"output",position:{start:721,end:743},stack:[{type:"Twig.expression.type.variable",value:"label",match:["label"],position:{start:721,end:743}},{type:"Twig.expression.type.filter",value:"url_encode",match:["|url_encode","url_encode"],position:{start:721,end:743}}]},{type:"raw",value:`" target="_blank"><i class="bi-linkedin"></i></a></li>
      <li><a href="mailto:compliment@hastingscounty.com?subject=`,position:{start:743,end:862}},{type:"output",position:{start:862,end:883},stack:[{type:"Twig.expression.type.variable",value:"label",match:["label"],position:{start:862,end:883}},{type:"Twig.expression.type.filter",value:"url_encode",match:["|url_encode","url_encode"],position:{start:862,end:883}}]},{type:"raw",value:"&body=I%20found%20this%20at%20",position:{start:883,end:913}},{type:"output",position:{start:913,end:933},stack:[{type:"Twig.expression.type.variable",value:"url",match:["url"],position:{start:913,end:933}},{type:"Twig.expression.type.filter",value:"url_encode",match:["|url_encode","url_encode"],position:{start:913,end:933}}]},{type:"raw",value:`" target="_blank"><i class="bi-envelope"></i></a></li>
    </ul>
    '>
    `,position:{start:933,end:1009}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"../../media/icon/icon.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"iconName"},{type:"Twig.expression.type.string",value:"share"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"color"},{type:"Twig.expression.type.string",value:"primary"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"size"},{type:"Twig.expression.type.string",value:"x-small"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"weight"},{type:"Twig.expression.type.string",value:"300"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],position:{start:1009,end:1177}},position:{start:1009,end:1177}},{type:"raw",value:`    </div>
    <span class="mht-popover-social__title">`,position:{start:1178,end:1233}},{type:"output",position:{start:1233,end:1244},stack:[{type:"Twig.expression.type.variable",value:"title",match:["title"],position:{start:1233,end:1244}}]},{type:"raw",value:`</span>
</div>
`,position:{start:1244,end:1244}}],precompiled:!0});n.options.allowInlineIncludes=!0;try{let t=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(t)||(t=Object.entries(t)),i(n.render({attributes:new r(t),active_theme:"my_super_theme",is_front_page:!1,...e}))}catch(t){return i("An error occurred whilst rendering /var/www/html/src/components/mht_popover_social/mht_popover_social.twig: "+t.toString())}};export{h as P};
