import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./mergeProps-JRyAvMxc.js";import{n as r}from"./mergeRefs-CPqjs56a.js";import{n as i,t as a}from"./themeProps-DRQoVAIO.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./useTooltip-Dj0O-S6V.js";import{r as l,t as ee}from"./Tooltip-BZ2bhQ4l.js";import{n as u,t as d}from"./Field-Cedy3QPa.js";function f(e,t,n){return Math.min(Math.max(e,t),n)}function p(e,t,n){return n<=0?e:t+Math.round((e-t)/n)*n}function m(e,t,n){return n===t?0:(e-t)/(n-t)*100}function h({ref:e,...t}){let{label:a,isLabelHidden:o=!1,description:c,isDisabled:l=!1,disabledMessage:u,isOptional:h=!1,isRequired:v=!1,status:y,labelTooltip:b,min:x=0,max:S=100,step:C=1,orientation:w=`horizontal`,formatValue:T,htmlName:E,valueDisplay:D=`tooltip`,marks:O,width:k,xstyle:A,className:j,style:M,"data-testid":N,value:P,onChange:F,onChangeEnd:I}=t,L=Array.isArray(P),R=L&&`minStepsBetweenThumbs`in t?t.minStepsBetweenThumbs??0:0,z=w===`horizontal`,B=(0,g.useId)(),V=(0,g.useId)(),H=(0,g.useId)(),U=(0,g.useRef)(null),W=(0,g.useRef)(null),[te,G]=(0,g.useState)(null),K=l&&!!u,q=s({placement:`above`,focusTrigger:`always`,isEnabled:K}),J=[];c&&J.push(V),y?.message&&J.push(H),K&&J.push(q.describedBy);let ne=J.length>0?J.join(` `):void 0,Y=(0,g.useMemo)(()=>L?P:[P??x],[L,P,x]),re=(0,g.useRef)(Y);re.current=Y;let X=(0,g.useCallback)((e,t)=>{let n=U.current;if(!n)return x;let r=n.getBoundingClientRect(),i;return i=z?(e-r.left)/r.width:1-(t-r.top)/r.height,i=f(i,0,1),f(p(x+i*(S-x),x,C),x,S)},[x,S,C,z]),ie=(0,g.useCallback)(e=>{if(!L)return 0;let[t,n]=Y;return Math.abs(e-t)<=Math.abs(e-n)?0:1},[L,Y]),Z=(0,g.useCallback)((e,t)=>{if(l)return;let n=f(p(t,x,C),x,S);if(L){let t=[...Y];t[e]=n;let r=R*C;e===0?t[0]=Math.min(t[0],t[1]-r):t[1]=Math.max(t[1],t[0]+r),t[0]=f(t[0],x,S),t[1]=f(t[1],x,S),F?.(t)}else F?.(n)},[l,L,Y,x,S,C,R,F]),ae=(0,g.useRef)(I);ae.current=I;let Q=(0,g.useCallback)(e=>{let t=e??re.current,n=ae.current;L?n?.(t):n?.(t[0])},[L]),oe=(0,g.useCallback)(e=>{if(l)return;e.preventDefault();let t=e.target.closest(`[data-mark-value]`),n=t?Number(t.dataset.markValue):X(e.clientX,e.clientY),r=ie(n);W.current=r,G(r),Z(r,n);let i=U.current;i&&i.querySelectorAll(`[role="slider"]`)[r]?.focus(),typeof e.currentTarget.setPointerCapture==`function`&&e.currentTarget.setPointerCapture(e.pointerId)},[l,X,ie,Z]),se=(0,g.useCallback)(e=>{if(W.current===null||l)return;let t=X(e.clientX,e.clientY);Z(W.current,t)},[l,X,Z]),ce=(0,g.useCallback)(e=>{W.current!==null&&(W.current=null,G(null),Q())},[Q]),le=(0,g.useCallback)((e,t)=>{if(l)return;let n=Y[e],r;switch(t.key){case`ArrowRight`:case`ArrowUp`:r=n+C;break;case`ArrowLeft`:case`ArrowDown`:r=n-C;break;case`PageUp`:r=n+C*10;break;case`PageDown`:r=n-C*10;break;case`Home`:r=x;break;case`End`:r=S;break;default:return}t.preventDefault();let i=f(p(r,x,C),x,S);if(Z(e,r),L){let t=[...Y];t[e]=i;let n=R*C;e===0?t[0]=Math.min(t[0],t[1]-n):t[1]=Math.max(t[1],t[0]+n),t[0]=f(t[0],x,S),t[1]=f(t[1],x,S),Q(t)}else Q([i])},[l,L,Y,C,x,S,R,Z,Q]),$=e=>T?T(e):String(e),ue=e=>{let t=Y[e],r=m(t,x,S),o=z?{left:`${r}%`}:{bottom:`${r}%`,left:`50%`},s=L?e===0?`${a}, minimum value`:`${a}, maximum value`:a,c=D===`tooltip`&&!K,u=z?`above`:`start`,d=(0,_.jsx)(`div`,{id:L?void 0:B,role:`slider`,tabIndex:l&&!K?-1:0,"aria-valuemin":x,"aria-valuemax":S,"aria-valuenow":t,"aria-valuetext":T?T(t):void 0,"aria-orientation":w,"aria-disabled":l||void 0,"aria-invalid":y?.type===`error`||void 0,"aria-label":s,"aria-describedby":ne,onKeyDown:t=>le(e,t),...n(i(`slider-thumb`,{orientation:w,disabled:l?`disabled`:null}),{0:{className:`khameleon10l6tqk khameleonw4jnvo khameleon1qx5ct2 khameleonjspbzw khameleon1ewilqj khameleon106061f khameleonuedmi6 khameleon12w9bfk khameleonlr8y92 khameleon1a2a7pz khameleon1jm3nie khameleon1vjfegm khameleon1nrll8i khameleon1m9mm8y`},8:{className:`khameleon10l6tqk khameleonw4jnvo khameleon1qx5ct2 khameleonjspbzw khameleon1ewilqj khameleon11lhmoz khameleon106061f khameleonuedmi6 khameleon12w9bfk khameleonlr8y92 khameleon1a2a7pz khameleon1jm3nie khameleon1vjfegm khameleonwa60dl`},4:{className:`khameleon10l6tqk khameleonw4jnvo khameleon1qx5ct2 khameleonjspbzw khameleon106061f khameleonuedmi6 khameleon12w9bfk khameleonlr8y92 khameleon1a2a7pz khameleon1jm3nie khameleon1vjfegm khameleon1nrll8i khameleon1m9mm8y khameleon1ewilqj khameleonyxu9wt`},12:{className:`khameleon10l6tqk khameleonw4jnvo khameleon1qx5ct2 khameleonjspbzw khameleon11lhmoz khameleon106061f khameleonuedmi6 khameleon12w9bfk khameleonlr8y92 khameleon1a2a7pz khameleon1jm3nie khameleon1vjfegm khameleonwa60dl khameleon1ewilqj khameleonyxu9wt`},2:{className:`khameleon10l6tqk khameleonw4jnvo khameleon1qx5ct2 khameleonjspbzw khameleon1ewilqj khameleon106061f khameleonuedmi6 khameleon12w9bfk khameleonlr8y92 khameleon1jm3nie khameleon1vjfegm khameleon1nrll8i khameleon1m9mm8y khameleon1a2a7pz khameleon17nn4n9 khameleon1wfwxd8 khameleon7s97pk`},10:{className:`khameleon10l6tqk khameleonw4jnvo khameleon1qx5ct2 khameleonjspbzw khameleon1ewilqj khameleon11lhmoz khameleon106061f khameleonuedmi6 khameleon12w9bfk khameleonlr8y92 khameleon1jm3nie khameleon1vjfegm khameleonwa60dl khameleon1a2a7pz khameleon17nn4n9 khameleon1wfwxd8 khameleon7s97pk`},6:{className:`khameleon10l6tqk khameleonw4jnvo khameleon1qx5ct2 khameleonjspbzw khameleon106061f khameleonuedmi6 khameleon12w9bfk khameleonlr8y92 khameleon1jm3nie khameleon1vjfegm khameleon1nrll8i khameleon1m9mm8y khameleon1ewilqj khameleonyxu9wt khameleon1a2a7pz khameleon17nn4n9 khameleon1wfwxd8 khameleon7s97pk`},14:{className:`khameleon10l6tqk khameleonw4jnvo khameleon1qx5ct2 khameleonjspbzw khameleon11lhmoz khameleon106061f khameleonuedmi6 khameleon12w9bfk khameleonlr8y92 khameleon1jm3nie khameleon1vjfegm khameleonwa60dl khameleon1ewilqj khameleonyxu9wt khameleon1a2a7pz khameleon17nn4n9 khameleon1wfwxd8 khameleon7s97pk`},1:{className:`khameleon10l6tqk khameleonw4jnvo khameleon1qx5ct2 khameleonjspbzw khameleon106061f khameleonuedmi6 khameleon12w9bfk khameleonlr8y92 khameleon1a2a7pz khameleon1vjfegm khameleon1nrll8i khameleon1m9mm8y khameleonwmxj5m khameleon1h6gzvc`},9:{className:`khameleon10l6tqk khameleonw4jnvo khameleon1qx5ct2 khameleonjspbzw khameleon11lhmoz khameleon106061f khameleonuedmi6 khameleon12w9bfk khameleonlr8y92 khameleon1a2a7pz khameleon1vjfegm khameleonwa60dl khameleonwmxj5m khameleon1h6gzvc`},5:{className:`khameleon10l6tqk khameleonw4jnvo khameleon1qx5ct2 khameleonjspbzw khameleon106061f khameleonuedmi6 khameleon12w9bfk khameleonlr8y92 khameleon1a2a7pz khameleon1vjfegm khameleon1nrll8i khameleon1m9mm8y khameleonwmxj5m khameleon1h6gzvc`},13:{className:`khameleon10l6tqk khameleonw4jnvo khameleon1qx5ct2 khameleonjspbzw khameleon11lhmoz khameleon106061f khameleonuedmi6 khameleon12w9bfk khameleonlr8y92 khameleon1a2a7pz khameleon1vjfegm khameleonwa60dl khameleonwmxj5m khameleon1h6gzvc`},3:{className:`khameleon10l6tqk khameleonw4jnvo khameleon1qx5ct2 khameleonjspbzw khameleon106061f khameleonuedmi6 khameleon12w9bfk khameleonlr8y92 khameleon1vjfegm khameleon1nrll8i khameleon1m9mm8y khameleon1a2a7pz khameleon17nn4n9 khameleon1wfwxd8 khameleon7s97pk khameleonwmxj5m khameleon1h6gzvc`},11:{className:`khameleon10l6tqk khameleonw4jnvo khameleon1qx5ct2 khameleonjspbzw khameleon11lhmoz khameleon106061f khameleonuedmi6 khameleon12w9bfk khameleonlr8y92 khameleon1vjfegm khameleonwa60dl khameleon1a2a7pz khameleon17nn4n9 khameleon1wfwxd8 khameleon7s97pk khameleonwmxj5m khameleon1h6gzvc`},7:{className:`khameleon10l6tqk khameleonw4jnvo khameleon1qx5ct2 khameleonjspbzw khameleon106061f khameleonuedmi6 khameleon12w9bfk khameleonlr8y92 khameleon1vjfegm khameleon1nrll8i khameleon1m9mm8y khameleon1a2a7pz khameleon17nn4n9 khameleon1wfwxd8 khameleon7s97pk khameleonwmxj5m khameleon1h6gzvc`},15:{className:`khameleon10l6tqk khameleonw4jnvo khameleon1qx5ct2 khameleonjspbzw khameleon11lhmoz khameleon106061f khameleonuedmi6 khameleon12w9bfk khameleonlr8y92 khameleon1vjfegm khameleonwa60dl khameleon1a2a7pz khameleon17nn4n9 khameleon1wfwxd8 khameleon7s97pk khameleonwmxj5m khameleon1h6gzvc`}}[!!z<<3|!l<<2|!l<<1|!!l<<0],void 0,o)},e);return c?(0,_.jsx)(ee,{content:$(t),placement:u,delay:0,focusTrigger:`always`,isOpen:te===e||void 0,children:d},e):d},de=(()=>{if(L){let[e,t]=Y,n=m(e,x,S),r=m(t,x,S);return z?{left:`${n}%`,width:`${r-n}%`}:{bottom:`${n}%`,height:`${r-n}%`}}let e=m(Y[0],x,S);return z?{left:`0%`,width:`${e}%`}:{bottom:`0%`,height:`${e}%`}})(),fe=D===`text`?(0,_.jsx)(`span`,{className:`khameleon9ynric khameleoncr08ib khameleon1tgivj0 khameleonuxw1ft khameleon2lah0s`,children:L?`${$(Y[0])} – ${$(Y[1])}`:$(Y[0])}):null;return(0,_.jsxs)(d,{"data-testid":N,label:a,isLabelHidden:o,description:c,inputID:B,descriptionID:c?V:void 0,isOptional:h,isRequired:v,isDisabled:l,status:y?{type:y.type,message:y.message,messageID:y.message?H:void 0}:void 0,labelTooltip:b,statusVariant:`detached`,width:k,xstyle:A,className:j,style:M,children:[(0,_.jsxs)(`div`,{...n(i(`slider`,{orientation:w,disabled:l?`disabled`:null}),{className:`khameleon78zum5 khameleon6s0dn4 khameleon1txdalj`}),children:[E!=null&&Y.map((e,t)=>(0,_.jsx)(`input`,{type:`hidden`,name:E,value:String(e),disabled:l},t===0?`start`:`end`)),(0,_.jsxs)(`div`,{ref:r(e,U,q.ref),...L?{role:`group`,"aria-label":a}:void 0,onPointerDown:oe,onPointerMove:se,onPointerUp:ce,onPointerCancel:ce,...{0:{className:`khameleon1n2onr6 khameleon78zum5 khameleon6s0dn4 khameleon1iyjqo2 khameleon5ve5x3 khameleon87ps6o khameleonc8icb0 khameleonw4jnvo khameleon1ymw6g khameleondt5ytf khameleonl56j7k khameleon1ypdohk`},2:{className:`khameleon1n2onr6 khameleon78zum5 khameleon6s0dn4 khameleon1iyjqo2 khameleon5ve5x3 khameleon87ps6o khameleonc8icb0 khameleon1qx5ct2 khameleonh8yej3 khameleon1ypdohk`},1:{className:`khameleon1n2onr6 khameleon78zum5 khameleon6s0dn4 khameleon1iyjqo2 khameleon5ve5x3 khameleon87ps6o khameleonc8icb0 khameleonw4jnvo khameleon1ymw6g khameleondt5ytf khameleonl56j7k khameleonbyyjgo khameleon1h6gzvc`},3:{className:`khameleon1n2onr6 khameleon78zum5 khameleon6s0dn4 khameleon1iyjqo2 khameleon5ve5x3 khameleon87ps6o khameleonc8icb0 khameleon1qx5ct2 khameleonh8yej3 khameleonbyyjgo khameleon1h6gzvc`}}[!!z<<1|!!l<<0],children:[(0,_.jsx)(`div`,{"aria-hidden":`true`,...n(i(`slider-track`,{orientation:w}),{0:{className:`khameleon10l6tqk khameleondsb6cv khameleonjspbzw khameleon13vifvy khameleon1ey2m1c khameleon51ohtg khameleon1nrll8i khameleonuuh30`},1:{className:`khameleon10l6tqk khameleondsb6cv khameleonjspbzw khameleonu96u03 khameleon3m8u43 khameleonqu0tyb khameleonwa60dl khameleon1cb1t30`}}[!!z<<0])}),(0,_.jsx)(`div`,{"aria-hidden":`true`,...n({0:{className:`khameleon10l6tqk khameleon1ewilqj khameleonjspbzw khameleon51ohtg khameleon1nrll8i khameleonuuh30`},1:{className:`khameleon10l6tqk khameleon1ewilqj khameleonjspbzw khameleonqu0tyb khameleonwa60dl khameleon1cb1t30`}}[!!z<<0],{style:de})}),O&&(0,_.jsx)(`div`,{"aria-hidden":`true`,...{0:{className:`khameleon10l6tqk khameleon13vifvy khameleon1ey2m1c khameleon1nrll8i`},1:{className:`khameleon10l6tqk khameleonu96u03 khameleon3m8u43 khameleonwa60dl`}}[!!z<<0],children:O.map(e=>{let t=m(e.value,x,S),r=z?{left:`${t}%`}:{bottom:`${t}%`};return(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`div`,{"data-testid":`slider-mark`,"data-mark-value":e.value,...n({0:{className:`khameleon10l6tqk khameleon7njt3n khameleonjspbzw khameleon36qwtl khameleon1xc55vz khameleon1m9mm8y`},1:{className:`khameleon10l6tqk khameleon7njt3n khameleonjspbzw khameleonfo62xy khameleondk7pt khameleon11lhmoz`}}[!!z<<0],{style:r})}),e.label&&(0,_.jsx)(`span`,{"data-testid":`slider-mark-label`,"data-mark-value":e.value,...n({0:{className:`khameleon10l6tqk khameleon9ynric khameleon141an7d khameleonv1l7n4 khameleonuxw1ft khameleon131p8rn khameleon1trqr8e`},1:{className:`khameleon10l6tqk khameleon9ynric khameleon141an7d khameleonv1l7n4 khameleonuxw1ft khameleonuuh30 khameleonuivejd`}}[!!z<<0],{style:r}),children:e.label})]},e.value)})}),Y.map((e,t)=>ue(t))]}),fe]}),K&&q.renderTooltip(u)]})}var g,_;function v(){return(v=e((()=>{g=t(),u(),l(),c(),a(),_=o(),h.displayName=`Slider`,h.__docgenInfo={description:`A slider component for selecting numeric values or ranges.

@example
\`\`\`
<Slider label="Volume" value={50} onChange={setValue} />
<Slider label="Price range" value={[20, 80]} onChange={setRange} />
\`\`\``,methods:[],displayName:`Slider`}})))()}var y,b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{y=t(),v(),b=o(),x={title:`Core/Slider`,component:h,tags:[`autodocs`],argTypes:{label:{control:`text`,description:`Label text (required)`},isLabelHidden:{control:`boolean`,description:`Visually hide the label (still accessible to screen readers)`},isDisabled:{control:`boolean`,description:`Whether the slider is disabled`},disabledMessage:{control:`text`,description:`Explains why the slider is disabled. With isDisabled, shows a tooltip on hover/keyboard focus and keeps the thumb focusable via aria-disabled (value changes stay blocked). Use this instead of wrapping a disabled Slider in Tooltip.`},min:{control:`number`,description:`Minimum value`},max:{control:`number`,description:`Maximum value`},step:{control:`number`,description:`Step increment`},orientation:{control:`select`,options:[`horizontal`,`vertical`],description:`Slider orientation`},valueDisplay:{control:`select`,options:[`tooltip`,`text`,`none`],description:`How the value is displayed`}}},S={render:e=>{let[t,n]=(0,y.useState)(50);return(0,b.jsx)(h,{...e,value:t,onChange:n})},args:{label:`Volume`}},C={render:e=>{let[t,n]=(0,y.useState)([20,80]);return(0,b.jsx)(h,{...e,value:t,onChange:n})},args:{label:`Price range`}},w={render:e=>{let[t,n]=(0,y.useState)(50);return(0,b.jsx)(h,{...e,value:t,onChange:n})},args:{label:`Volume`,marks:[{value:0,label:`0`},{value:25,label:`25`},{value:50,label:`50`},{value:75,label:`75`},{value:100,label:`100`}]}},T={render:e=>{let[t,n]=(0,y.useState)(50);return(0,b.jsx)(h,{...e,value:t,onChange:n,valueDisplay:`text`})},args:{label:`Quantity`,min:0,max:100,step:10}},E={render:e=>{let[t,n]=(0,y.useState)(72);return(0,b.jsx)(h,{...e,value:t,onChange:n,valueDisplay:`text`})},args:{label:`Temperature`,min:60,max:90,step:1,formatValue:e=>`${e}°F`}},D={render:e=>(0,b.jsx)(h,{...e}),args:{label:`Volume`,value:50,isDisabled:!0}},O={render:e=>{let[t,n]=(0,y.useState)(50);return(0,b.jsx)(`div`,{style:{height:200},children:(0,b.jsx)(h,{...e,value:t,onChange:n})})},args:{label:`Volume`,orientation:`vertical`}},k={render:()=>{let[e,t]=(0,y.useState)(95),[n,r]=(0,y.useState)(50),[i,a]=(0,y.useState)(75);return(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`,maxWidth:`400px`},children:[(0,b.jsx)(h,{label:`CPU Usage`,value:e,onChange:t,status:{type:`error`,message:`CPU usage is critically high`}}),(0,b.jsx)(h,{label:`Memory`,value:n,onChange:r,status:{type:`warning`,message:`Memory usage is moderate`}}),(0,b.jsx)(h,{label:`Disk`,value:i,onChange:a,status:{type:`success`,message:`Disk usage is healthy`}})]})}},A={render:()=>{let[e,t]=(0,y.useState)(50),[n,r]=(0,y.useState)([20,80]),[i,a]=(0,y.useState)(30),[o,s]=(0,y.useState)(72);return(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`32px`,maxWidth:`400px`},children:[(0,b.jsx)(h,{label:`Default slider`,value:e,onChange:t}),(0,b.jsx)(h,{label:`Range slider`,value:n,onChange:r}),(0,b.jsx)(h,{label:`With marks`,value:i,onChange:a,marks:[{value:0,label:`0%`},{value:50,label:`50%`},{value:100,label:`100%`}]}),(0,b.jsx)(h,{label:`With text display`,value:o,onChange:s,formatValue:e=>`${e}°F`,valueDisplay:`text`,min:60,max:90}),(0,b.jsx)(h,{label:`Disabled`,value:50,isDisabled:!0}),(0,b.jsx)(h,{label:`No value display`,value:e,onChange:t,valueDisplay:`none`})]})}},j={render:e=>(0,b.jsx)(h,{...e}),args:{label:`Volume`,value:50,isDisabled:!0,disabledMessage:`Volume is locked while sharing your screen`}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(50);
    return <Slider {...args as any} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Volume'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<[number, number]>([20, 80]);
    return <Slider {...args as any} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Price range'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(50);
    return <Slider {...args as any} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Volume',
    marks: [{
      value: 0,
      label: '0'
    }, {
      value: 25,
      label: '25'
    }, {
      value: 50,
      label: '50'
    }, {
      value: 75,
      label: '75'
    }, {
      value: 100,
      label: '100'
    }]
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(50);
    return <Slider {...args as any} value={value} onChange={setValue} valueDisplay="text" />;
  },
  args: {
    label: 'Quantity',
    min: 0,
    max: 100,
    step: 10
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(72);
    return <Slider {...args as any} value={value} onChange={setValue} valueDisplay="text" />;
  },
  args: {
    label: 'Temperature',
    min: 60,
    max: 90,
    step: 1,
    formatValue: (v: number) => \`\${v}°F\`
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Slider {...args as any} />;
  },
  args: {
    label: 'Volume',
    value: 50,
    isDisabled: true
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(50);
    return <div style={{
      height: 200
    }}>
        <Slider {...args as any} value={value} onChange={setValue} />
      </div>;
  },
  args: {
    label: 'Volume',
    orientation: 'vertical'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState(95);
    const [value2, setValue2] = useState(50);
    const [value3, setValue3] = useState(75);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      maxWidth: '400px'
    }}>
        <Slider label="CPU Usage" value={value1} onChange={setValue1} status={{
        type: 'error',
        message: 'CPU usage is critically high'
      }} />
        <Slider label="Memory" value={value2} onChange={setValue2} status={{
        type: 'warning',
        message: 'Memory usage is moderate'
      }} />
        <Slider label="Disk" value={value3} onChange={setValue3} status={{
        type: 'success',
        message: 'Disk usage is healthy'
      }} />
      </div>;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [v1, setV1] = useState(50);
    const [v2, setV2] = useState<[number, number]>([20, 80]);
    const [v3, setV3] = useState(30);
    const [v4, setV4] = useState(72);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
      maxWidth: '400px'
    }}>
        <Slider label="Default slider" value={v1} onChange={setV1} />
        <Slider label="Range slider" value={v2} onChange={setV2} />
        <Slider label="With marks" value={v3} onChange={setV3} marks={[{
        value: 0,
        label: '0%'
      }, {
        value: 50,
        label: '50%'
      }, {
        value: 100,
        label: '100%'
      }]} />
        <Slider label="With text display" value={v4} onChange={setV4} formatValue={v => \`\${v}°F\`} valueDisplay="text" min={60} max={90} />
        <Slider label="Disabled" value={50} isDisabled />
        <Slider label="No value display" value={v1} onChange={setV1} valueDisplay="none" />
      </div>;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Slider {...args as any} />;
  },
  args: {
    label: 'Volume',
    value: 50,
    isDisabled: true,
    disabledMessage: 'Volume is locked while sharing your screen'
  }
}`,...j.parameters?.docs?.source}}},M=[`Default`,`Range`,`WithMarks`,`CustomStep`,`WithFormatValue`,`Disabled`,`VerticalOrientation`,`WithStatus`,`AllVariations`,`DisabledWithMessage`]})))()}N();export{A as AllVariations,T as CustomStep,S as Default,D as Disabled,j as DisabledWithMessage,C as Range,O as VerticalOrientation,E as WithFormatValue,w as WithMarks,k as WithStatus,M as __namedExportsOrder,x as default};