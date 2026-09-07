import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{n as r,t as i}from"./stylex-Dft6gtPK.js";import{n as a}from"./mergeProps-JRyAvMxc.js";import{n as o,t as s}from"./themeProps-DRQoVAIO.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./useTooltip-Dj0O-S6V.js";import{n as d,t as f}from"./Field-Cedy3QPa.js";import{n as p,t as m}from"./Item-DzZhuJbc.js";function h({ref:e,label:t,isLabelHidden:n=!1,description:r,value:i,onChange:s,orientation:c=`vertical`,isDisabled:u=!1,disabledMessage:d,isRequired:p=!1,isOptional:m=!1,size:h=`md`,status:y,labelTooltip:b,width:x,xstyle:S,className:C,style:w,"data-testid":T,htmlName:E,children:D}){let O=(0,g.useId)(),k=E??O,A=(0,g.useId)(),j=(0,g.useId)(),M=(0,g.useId)(),N=(0,g.useId)(),P=(0,g.useRef)(null),F=u&&!!d,I=l({placement:`above`,focusTrigger:`always`,isEnabled:F}),L=(0,g.useMemo)(()=>({name:k,value:i,onChange:s,isDisabled:u,hasDisabledMessage:F,isRequired:p,size:h,status:y}),[k,i,s,u,F,p,h,y]),R=(0,g.useCallback)(e=>{if(i!==``)return;let t=P.current;if(!t)return;let n=e.relatedTarget;if(n){if(t.contains(n))return}else if(document.activeElement&&document.activeElement!==e.target&&t.contains(document.activeElement))return;let r=Array.from(t.querySelectorAll(`input[type="radio"]:not([disabled])`));if(r.length===0)return;let a=e.target,o=r.findIndex(e=>e===a);if(o===-1)return;let s=o===r.length-1?r[r.length-1]:r[0];a!==s&&s.focus()},[i]);return(0,_.jsxs)(f,{ref:e,"data-testid":T,label:t,isLabelHidden:n,description:r,inputID:A,labelID:j,isGroupLabel:!0,descriptionID:r?M:void 0,isOptional:m,isRequired:p,isDisabled:u,status:y?{type:y.type,message:y.message,messageID:y.message?N:void 0}:void 0,labelTooltip:b,statusVariant:`detached`,width:x,xstyle:S,className:C,style:w,children:[(0,_.jsx)(`div`,{ref:e=>{P.current=e,I.ref(e)},role:`radiogroup`,"aria-labelledby":j,onFocus:R,"aria-describedby":[r?M:null,y?.message?N:null,F?I.describedBy:null].filter(Boolean).join(` `)||void 0,"aria-invalid":y?.type===`error`||void 0,"aria-required":p||void 0,...a(o(`radio-list`,{orientation:c,size:h}),{0:{className:`khameleon78zum5 khameleon1q0g3np khameleon9mgr7n`},1:{className:`khameleon78zum5 khameleondt5ytf khameleon1txdalj`}}[(c===`vertical`)<<0]),children:(0,_.jsx)(v,{value:L,children:D})}),F&&I.renderTooltip(d)]})}var g,_,v;function y(){return(y=t((()=>{g=e(n(),1),d(),u(),s(),_=c(),v=(0,g.createContext)(null),v.displayName=`RadioListContext`,h.displayName=`RadioList`,h.__docgenInfo={description:`A radio group component for single-value selection.

@example
\`\`\`
<RadioList
  label="Notification preference"
  value={selected}
  onChange={setSelected}>
  <RadioListItem label="Email" value="email" />
  <RadioListItem label="SMS" value="sms" />
  <RadioListItem label="Push" value="push" />
</RadioList>
\`\`\``,methods:[],displayName:`RadioList`,props:{ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:``},label:{required:!0,tsType:{name:`string`},description:`Label text for the radio group (always rendered for accessibility).`},isLabelHidden:{required:!1,tsType:{name:`boolean`},description:`Whether to visually hide the label (still accessible to screen readers).
@default false`,defaultValue:{value:`false`,computed:!1}},description:{required:!1,tsType:{name:`string`},description:`Description text displayed below the label.`},value:{required:!0,tsType:{name:`string`},description:`The currently selected value.`},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Callback fired when the selected value changes.`},orientation:{required:!1,tsType:{name:`union`,raw:`'vertical' | 'horizontal'`,elements:[{name:`literal`,value:`'vertical'`},{name:`literal`,value:`'horizontal'`}]},description:`Layout direction of the radio items.
@default "vertical"`,defaultValue:{value:`'vertical'`,computed:!1}},isDisabled:{required:!1,tsType:{name:`boolean`},description:`Whether all radio items are disabled.
@default false`,defaultValue:{value:`false`,computed:!1}},htmlName:{required:!1,tsType:{name:`string`},description:`The HTML name attribute shared by the radio inputs in the group.
Useful for form submissions; when omitted, a unique internal name is
generated so the group still roves correctly.`},disabledMessage:{required:!1,tsType:{name:`string`},description:"Explains why the radio group is disabled. Applies to the whole-group\ndisabled state (`isDisabled`), not individual items. When set together with\n`isDisabled`, the group shows a tooltip with this text on hover and keyboard\nfocus, and its radios stay focusable (via `aria-disabled`) so the reason is\ndiscoverable by keyboard and assistive technology. Selection stays blocked.\n\nUse this instead of wrapping a disabled group in `Tooltip` — disabled\ncontrols don't emit the pointer events an external tooltip needs."},isRequired:{required:!1,tsType:{name:`boolean`},description:`Whether the radio group is required.
@default false`,defaultValue:{value:`false`,computed:!1}},isOptional:{required:!1,tsType:{name:`boolean`},description:`Whether the field is optional. Mutually exclusive with isRequired.
@default false`,defaultValue:{value:`false`,computed:!1}},status:{required:!1,tsType:{name:`InputStatus`},description:`Status indicator for the radio group.
When set with a message, displays a colored message box below the group.`},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:`The size of the radio controls.
- 'sm': Compact size (18px radio, 20px wrapper)
- 'md': Default size (22px radio, 24px wrapper)
@default 'md'`,defaultValue:{value:`'md'`,computed:!1}},width:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:"Width of the field. Numbers are treated as pixels, strings are used as-is\n(e.g. `'100%'`). Sizes the whole field (label, control, and status) so they\nstay aligned, unlike setting width via `xstyle`/`className`/`style`."},labelTooltip:{required:!1,tsType:{name:`string`},description:`Tooltip text to display in an info icon at the end of the label.`},"data-testid":{required:!1,tsType:{name:`string`},description:`Test ID for the outer container.`},children:{required:!0,tsType:{name:`ReactNode`},description:`Radio list items to render.`}},composes:[`Omit`]}})))()}var b;function x(){return(x=t((()=>{b={khameleon1a19upo:`khameleon1a19upo`,$$css:!0}})))()}function S({ref:e,label:t,value:n,description:i,isDisabled:s=!1,startContent:c,endContent:l,xstyle:u,className:d,style:f,...p}){let h=(0,C.use)(v);if(!h)throw Error(`RadioListItem must be used within an RadioList`);let g=(0,C.useId)(),_=(0,C.useId)(),y=h.isDisabled||s,x=h.hasDisabledMessage&&!s,S=h.value===n,A=h.size,j=(0,w.jsxs)(`div`,{...r(T.radioWrapper,E[A],!y&&T.radioWrapperFocus),children:[(0,w.jsx)(`input`,{id:g,type:`radio`,name:h.name,value:n,checked:S,disabled:y&&!x,"aria-disabled":x?`true`:void 0,form:x?``:void 0,required:h.isRequired,onChange:()=>{y||h.onChange(n)},"aria-describedby":i?_:void 0,...r(T.input,E[A],y&&T.inputDisabled)}),(0,w.jsx)(`div`,{"aria-hidden":`true`,...a(o(`radio`,{size:A,checked:S?`checked`:null,disabled:y?`disabled`:null}),r(T.radio,D[A],S?T.radioChecked:T.radioUnchecked,y&&T.radioDisabled,y&&!S&&T.radioDisabledUnchecked)),children:S&&(0,w.jsx)(`div`,{...a(o(`radio-dot`,{size:A}),r(T.innerDot,O[A]))})})]}),M=c==null?j:(0,w.jsxs)(w.Fragment,{children:[j,c]});return(0,w.jsx)(`div`,{ref:e,...a(o(`radio-list-item`),r(T.container,!y&&b,u),d,f),...p,children:(0,w.jsx)(m,{startContent:M,label:(0,w.jsx)(`label`,{htmlFor:g,...{0:{},1:{className:`khameleonnbbluu khameleon1h6gzvc`}}[!!y<<0],children:t}),description:i==null?void 0:(0,w.jsx)(`span`,{id:_,children:i}),endContent:l,xstyle:k.root})})}var C,w,T,E,D,O,k;function A(){return(A=t((()=>{C=e(n(),1),i(),y(),x(),p(),s(),w=c(),T={container:{k1xSpc:`khameleon78zum5`,kGNEyG:`khameleon6s0dn4`,kOIVth:`khameleon1txdalj`,$$css:!0},radioWrapper:{kVAEAm:`khameleon1n2onr6`,k1xSpc:`khameleon78zum5`,kGNEyG:`khameleon6s0dn4`,kjj79g:`khameleonl56j7k`,kmuXW:`khameleon2lah0s`,kHBbk8:`khameleonc8icb0`,$$css:!0},input:{kVAEAm:`khameleon10l6tqk`,kogj98:`khameleon1ghz6dp`,kmVPX3:`khameleon1717udv`,kSiTet:`khameleong01cxk`,kkrTdU:`khameleon1ypdohk`,kY2c9j:`khameleon1vjfegm`,$$css:!0},inputDisabled:{kkrTdU:`khameleon1h6gzvc`,$$css:!0},radio:{k1xSpc:`khameleon78zum5`,kGNEyG:`khameleon6s0dn4`,kjj79g:`khameleonl56j7k`,kMzoRj:`khameleon1litavf`,ksu8eU:`khameleon1y0btm7`,kaIpWk:`khameleon16rqkct`,k1ekBW:`khameleonts7igz`,kIyJzY:`khameleonuedmi6`,kAMwcw:`khameleonlr8y92`,kB7OPa:`khameleon9f619`,$$css:!0},radioUnchecked:{kVAM5u:`khameleonvy26l8 khameleony8y3di`,kzOINU:null,kGJrpR:null,kaZRDh:null,kBCPoo:null,k26BEO:null,k5QoK5:null,kLZC3w:null,kL6WhQ:null,kWkggS:`khameleon10xzikg khameleon9p703q`,$$css:!0},radioChecked:{kVAM5u:`khameleonad5do khameleon1jud6qb`,kzOINU:null,kGJrpR:null,kaZRDh:null,kBCPoo:null,k26BEO:null,k5QoK5:null,kLZC3w:null,kL6WhQ:null,kWkggS:`khameleon1ewilqj khameleon1jljtaf`,$$css:!0},radioWrapperFocus:{kI3sdo:`khameleon1a2a7pz khameleon1irc7jg`,kjBf7l:null,k3XXqK:null,kMeerF:null,kInvED:`khameleon1wfwxd8 khameleondjuwb3`,kaIpWk:`khameleon16rqkct`,krdFHd:null,kfmiAY:null,kVL7Gh:null,kT0f0o:null,kIxVMA:null,ksF3WI:null,kqGeR4:null,kYm2EN:null,$$css:!0},radioDisabled:{kSiTet:`khameleonbyyjgo`,kVAM5u:`khameleon14i3s5s`,kzOINU:null,kGJrpR:null,kaZRDh:null,kBCPoo:null,k26BEO:null,k5QoK5:null,kLZC3w:null,kL6WhQ:null,$$css:!0},radioDisabledUnchecked:{kWkggS:`khameleonwmxj5m`,$$css:!0},innerDot:{kaIpWk:`khameleon16rqkct`,kWkggS:`khameleon1azo05`,$$css:!0}},E={sm:{kzqmXN:`khameleonw4jnvo`,kZKoxP:`khameleon1qx5ct2`,$$css:!0},md:{kzqmXN:`khameleonvy4d1p`,kZKoxP:`khameleonxk0z11`,$$css:!0}},D={sm:{kzqmXN:`khameleon1xp8n7a`,kZKoxP:`khameleonmix8c7`,$$css:!0},md:{kzqmXN:`khameleon17z2i9w`,kZKoxP:`khameleon17rw0jw`,$$css:!0}},O={sm:{kzqmXN:`khameleon1xc55vz`,kZKoxP:`khameleondk7pt`,$$css:!0},md:{kzqmXN:`khameleon1fsd2vl`,kZKoxP:`khameleon170jfvy`,$$css:!0}},k={root:{k8WAf4:`khameleont970qd`,kLKAdn:null,kGO01o:null,kg3NbH:`khameleonnjsko4`,kuDDbn:null,kE3dHu:null,kP0aTx:null,kpe85a:null,kaIpWk:`khameleon2u8bby`,krdFHd:null,kfmiAY:null,kVL7Gh:null,kT0f0o:null,kIxVMA:null,ksF3WI:null,kqGeR4:null,kYm2EN:null,kUk6DE:`khameleon98rzlu`,kzQI83:null,kmuXW:null,kCS8Yb:null,k7Eaqz:`khameleoneuugli`,$$css:!0}},S.displayName=`RadioListItem`,S.__docgenInfo={description:`An individual radio item within an RadioList.

@example
\`\`\`
<RadioListItem label="Email" value="email" />
<RadioListItem
  label="SMS"
  value="sms"
  description="Standard messaging rates apply"
/>
\`\`\``,methods:[],displayName:`RadioListItem`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:``},label:{required:!0,tsType:{name:`string`},description:`Label text for the radio item.`},value:{required:!0,tsType:{name:`string`},description:`Value of this radio item.`},description:{required:!1,tsType:{name:`string`},description:`Description text displayed below the label.`},isDisabled:{required:!1,tsType:{name:`boolean`},description:`Whether this individual radio item is disabled.
@default false`,defaultValue:{value:`false`,computed:!1}},startContent:{required:!1,tsType:{name:`ReactNode`},description:`Content to render before the radio circle.`},endContent:{required:!1,tsType:{name:`ReactNode`},description:`Content to render after the label.`}},composes:[`Omit`]}})))()}var j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K;function q(){return(q=t((()=>{j=n(),y(),A(),M=c(),N={title:`Core/RadioList`,component:h,tags:[`autodocs`],argTypes:{label:{control:`text`,description:`Label text (required)`},isLabelHidden:{control:`boolean`,description:`Visually hide the label (still accessible to screen readers)`},description:{control:`text`,description:`Description text displayed below the label`},value:{control:`text`,description:`The currently selected value`},orientation:{control:`select`,options:[`vertical`,`horizontal`],description:`Layout direction of the radio items`},isDisabled:{control:`boolean`,description:`Whether all radio items are disabled`},disabledMessage:{control:`text`,description:`Explains why the group is disabled (whole-group state, not per item). With isDisabled, shows a tooltip on hover/keyboard focus and keeps the radios focusable via aria-disabled (selection stays blocked). Use this instead of wrapping a disabled RadioList in Tooltip.`},isRequired:{control:`boolean`,description:`Whether the radio group is required`},isOptional:{control:`boolean`,description:`Whether the field is optional`}}},P={render:e=>{let[t,n]=(0,j.useState)(e.value??``),{value:r,onChange:i,...a}=e;return(0,M.jsxs)(h,{...a,value:t,onChange:n,children:[(0,M.jsx)(S,{label:`Email`,value:`email`}),(0,M.jsx)(S,{label:`SMS`,value:`sms`}),(0,M.jsx)(S,{label:`Push notification`,value:`push`})]})},args:{label:`Notification preference`}},F={render:e=>{let[t,n]=(0,j.useState)(e.value??``),{value:r,onChange:i,...a}=e;return(0,M.jsxs)(h,{...a,value:t,onChange:n,children:[(0,M.jsx)(S,{label:`Email`,value:`email`,description:`Receive notifications via email`}),(0,M.jsx)(S,{label:`SMS`,value:`sms`,description:`Standard messaging rates apply`}),(0,M.jsx)(S,{label:`Push notification`,value:`push`,description:`Instant alerts on your device`})]})},args:{label:`Notification preference`,description:`Choose how you would like to be notified`}},I={render:e=>{let[t,n]=(0,j.useState)(e.value??``),{value:r,onChange:i,...a}=e;return(0,M.jsxs)(h,{...a,value:t,onChange:n,children:[(0,M.jsx)(S,{label:`Small`,value:`sm`}),(0,M.jsx)(S,{label:`Medium`,value:`md`}),(0,M.jsx)(S,{label:`Large`,value:`lg`})]})},args:{label:`Size`,orientation:`horizontal`}},L={render:e=>{let[t,n]=(0,j.useState)(e.value??`email`),{value:r,onChange:i,...a}=e;return(0,M.jsxs)(h,{...a,value:t,onChange:n,children:[(0,M.jsx)(S,{label:`Email`,value:`email`}),(0,M.jsx)(S,{label:`SMS`,value:`sms`}),(0,M.jsx)(S,{label:`Push notification`,value:`push`})]})},args:{label:`Notification preference`,isDisabled:!0}},R={render:e=>{let[t,n]=(0,j.useState)(e.value??``),{value:r,onChange:i,...a}=e;return(0,M.jsxs)(h,{...a,value:t,onChange:n,children:[(0,M.jsx)(S,{label:`Email`,value:`email`}),(0,M.jsx)(S,{label:`SMS`,value:`sms`,isDisabled:!0}),(0,M.jsx)(S,{label:`Push notification`,value:`push`})]})},args:{label:`Notification preference`}},z={render:e=>{let[t,n]=(0,j.useState)(e.value??``),{value:r,onChange:i,...a}=e;return(0,M.jsxs)(h,{...a,value:t,onChange:n,children:[(0,M.jsx)(S,{label:`Email`,value:`email`}),(0,M.jsx)(S,{label:`SMS`,value:`sms`}),(0,M.jsx)(S,{label:`Push notification`,value:`push`})]})},args:{label:`Notification preference`,isRequired:!0}},B={render:e=>{let[t,n]=(0,j.useState)(e.value??``),{value:r,onChange:i,...a}=e;return(0,M.jsxs)(h,{...a,value:t,onChange:n,children:[(0,M.jsx)(S,{label:`Email`,value:`email`}),(0,M.jsx)(S,{label:`SMS`,value:`sms`}),(0,M.jsx)(S,{label:`Push notification`,value:`push`})]})},args:{label:`Notification preference`,isOptional:!0}},V={render:e=>{let[t,n]=(0,j.useState)(e.value??``),{value:r,onChange:i,...a}=e;return(0,M.jsxs)(h,{...a,value:t,onChange:n,children:[(0,M.jsx)(S,{label:`Email`,value:`email`}),(0,M.jsx)(S,{label:`SMS`,value:`sms`}),(0,M.jsx)(S,{label:`Push notification`,value:`push`})]})},args:{label:`Notification preference`,isRequired:!0,status:{type:`error`,message:`Please select a notification method`}}},H={render:e=>{let[t,n]=(0,j.useState)(e.value??``),{value:r,onChange:i,...a}=e;return(0,M.jsxs)(h,{...a,value:t,onChange:n,children:[(0,M.jsx)(S,{label:`Email`,value:`email`,startContent:(0,M.jsx)(`span`,{children:`📧`})}),(0,M.jsx)(S,{label:`SMS`,value:`sms`,startContent:(0,M.jsx)(`span`,{children:`💬`})}),(0,M.jsx)(S,{label:`Push notification`,value:`push`,startContent:(0,M.jsx)(`span`,{children:`🔔`})})]})},args:{label:`Notification preference`}},U={render:e=>{let[t,n]=(0,j.useState)(e.value??``),{value:r,onChange:i,...a}=e;return(0,M.jsxs)(h,{...a,value:t,onChange:n,children:[(0,M.jsx)(S,{label:`Free`,value:`free`,endContent:(0,M.jsx)(`span`,{style:{color:`#0D8626`},children:`$0/mo`})}),(0,M.jsx)(S,{label:`Pro`,value:`pro`,endContent:(0,M.jsx)(`span`,{style:{color:`#0064E0`},children:`$9/mo`})}),(0,M.jsx)(S,{label:`Enterprise`,value:`enterprise`,endContent:(0,M.jsx)(`span`,{style:{color:`#5B08D8`},children:`Custom`})})]})},args:{label:`Plan`}},W={render:()=>{let[e,t]=(0,j.useState)(``),[n,r]=(0,j.useState)(`email`),[i,a]=(0,j.useState)(``),[o,s]=(0,j.useState)(`sm`);return(0,M.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`,maxWidth:`400px`},children:[(0,M.jsxs)(h,{label:`Unselected`,value:e,onChange:t,children:[(0,M.jsx)(S,{label:`Option A`,value:`a`}),(0,M.jsx)(S,{label:`Option B`,value:`b`})]}),(0,M.jsxs)(h,{label:`Pre-selected`,value:n,onChange:r,children:[(0,M.jsx)(S,{label:`Email`,value:`email`}),(0,M.jsx)(S,{label:`SMS`,value:`sms`})]}),(0,M.jsxs)(h,{label:`Disabled group`,value:``,onChange:()=>{},isDisabled:!0,children:[(0,M.jsx)(S,{label:`Option A`,value:`a`}),(0,M.jsx)(S,{label:`Option B`,value:`b`})]}),(0,M.jsxs)(h,{label:`With descriptions`,value:i,onChange:a,children:[(0,M.jsx)(S,{label:`Email`,value:`email`,description:`Delivered to your inbox`}),(0,M.jsx)(S,{label:`SMS`,value:`sms`,description:`Standard rates apply`})]}),(0,M.jsxs)(h,{label:`Horizontal`,value:o,onChange:s,orientation:`horizontal`,children:[(0,M.jsx)(S,{label:`S`,value:`sm`}),(0,M.jsx)(S,{label:`M`,value:`md`}),(0,M.jsx)(S,{label:`L`,value:`lg`})]}),(0,M.jsxs)(h,{label:`With error`,value:``,onChange:()=>{},isRequired:!0,status:{type:`error`,message:`Please select an option`},children:[(0,M.jsx)(S,{label:`Option A`,value:`a`}),(0,M.jsx)(S,{label:`Option B`,value:`b`})]})]})}},G={render:e=>{let[t,n]=(0,j.useState)(e.value??`email`),{value:r,onChange:i,...a}=e;return(0,M.jsxs)(h,{...a,value:t,onChange:n,children:[(0,M.jsx)(S,{label:`Email`,value:`email`}),(0,M.jsx)(S,{label:`SMS`,value:`sms`}),(0,M.jsx)(S,{label:`Push notification`,value:`push`})]})},args:{label:`Notification preference`,isDisabled:!0,disabledMessage:`Upgrade your account to change preferences`}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    const {
      value: _value,
      onChange: _onChange,
      ...restArgs
    } = args;
    return <RadioList {...restArgs} value={value} onChange={setValue}>
        <RadioListItem label="Email" value="email" />
        <RadioListItem label="SMS" value="sms" />
        <RadioListItem label="Push notification" value="push" />
      </RadioList>;
  },
  args: {
    label: 'Notification preference'
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    const {
      value: _value,
      onChange: _onChange,
      ...restArgs
    } = args;
    return <RadioList {...restArgs} value={value} onChange={setValue}>
        <RadioListItem label="Email" value="email" description="Receive notifications via email" />
        <RadioListItem label="SMS" value="sms" description="Standard messaging rates apply" />
        <RadioListItem label="Push notification" value="push" description="Instant alerts on your device" />
      </RadioList>;
  },
  args: {
    label: 'Notification preference',
    description: 'Choose how you would like to be notified'
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    const {
      value: _value,
      onChange: _onChange,
      ...restArgs
    } = args;
    return <RadioList {...restArgs} value={value} onChange={setValue}>
        <RadioListItem label="Small" value="sm" />
        <RadioListItem label="Medium" value="md" />
        <RadioListItem label="Large" value="lg" />
      </RadioList>;
  },
  args: {
    label: 'Size',
    orientation: 'horizontal'
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? 'email');
    const {
      value: _value,
      onChange: _onChange,
      ...restArgs
    } = args;
    return <RadioList {...restArgs} value={value} onChange={setValue}>
        <RadioListItem label="Email" value="email" />
        <RadioListItem label="SMS" value="sms" />
        <RadioListItem label="Push notification" value="push" />
      </RadioList>;
  },
  args: {
    label: 'Notification preference',
    isDisabled: true
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    const {
      value: _value,
      onChange: _onChange,
      ...restArgs
    } = args;
    return <RadioList {...restArgs} value={value} onChange={setValue}>
        <RadioListItem label="Email" value="email" />
        <RadioListItem label="SMS" value="sms" isDisabled />
        <RadioListItem label="Push notification" value="push" />
      </RadioList>;
  },
  args: {
    label: 'Notification preference'
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    const {
      value: _value,
      onChange: _onChange,
      ...restArgs
    } = args;
    return <RadioList {...restArgs} value={value} onChange={setValue}>
        <RadioListItem label="Email" value="email" />
        <RadioListItem label="SMS" value="sms" />
        <RadioListItem label="Push notification" value="push" />
      </RadioList>;
  },
  args: {
    label: 'Notification preference',
    isRequired: true
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    const {
      value: _value,
      onChange: _onChange,
      ...restArgs
    } = args;
    return <RadioList {...restArgs} value={value} onChange={setValue}>
        <RadioListItem label="Email" value="email" />
        <RadioListItem label="SMS" value="sms" />
        <RadioListItem label="Push notification" value="push" />
      </RadioList>;
  },
  args: {
    label: 'Notification preference',
    isOptional: true
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    const {
      value: _value,
      onChange: _onChange,
      ...restArgs
    } = args;
    return <RadioList {...restArgs} value={value} onChange={setValue}>
        <RadioListItem label="Email" value="email" />
        <RadioListItem label="SMS" value="sms" />
        <RadioListItem label="Push notification" value="push" />
      </RadioList>;
  },
  args: {
    label: 'Notification preference',
    isRequired: true,
    status: {
      type: 'error',
      message: 'Please select a notification method'
    }
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    const {
      value: _value,
      onChange: _onChange,
      ...restArgs
    } = args;
    return <RadioList {...restArgs} value={value} onChange={setValue}>
        <RadioListItem label="Email" value="email" startContent={<span>📧</span>} />
        <RadioListItem label="SMS" value="sms" startContent={<span>💬</span>} />
        <RadioListItem label="Push notification" value="push" startContent={<span>🔔</span>} />
      </RadioList>;
  },
  args: {
    label: 'Notification preference'
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    const {
      value: _value,
      onChange: _onChange,
      ...restArgs
    } = args;
    return <RadioList {...restArgs} value={value} onChange={setValue}>
        <RadioListItem label="Free" value="free" endContent={<span style={{
        color: '#0D8626'
      }}>$0/mo</span>} />
        <RadioListItem label="Pro" value="pro" endContent={<span style={{
        color: '#0064E0'
      }}>$9/mo</span>} />
        <RadioListItem label="Enterprise" value="enterprise" endContent={<span style={{
        color: '#5B08D8'
      }}>Custom</span>} />
      </RadioList>;
  },
  args: {
    label: 'Plan'
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('email');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('sm');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      maxWidth: '400px'
    }}>
        <RadioList label="Unselected" value={value1} onChange={setValue1}>
          <RadioListItem label="Option A" value="a" />
          <RadioListItem label="Option B" value="b" />
        </RadioList>
        <RadioList label="Pre-selected" value={value2} onChange={setValue2}>
          <RadioListItem label="Email" value="email" />
          <RadioListItem label="SMS" value="sms" />
        </RadioList>
        <RadioList label="Disabled group" value="" onChange={() => {}} isDisabled>
          <RadioListItem label="Option A" value="a" />
          <RadioListItem label="Option B" value="b" />
        </RadioList>
        <RadioList label="With descriptions" value={value3} onChange={setValue3}>
          <RadioListItem label="Email" value="email" description="Delivered to your inbox" />
          <RadioListItem label="SMS" value="sms" description="Standard rates apply" />
        </RadioList>
        <RadioList label="Horizontal" value={value4} onChange={setValue4} orientation="horizontal">
          <RadioListItem label="S" value="sm" />
          <RadioListItem label="M" value="md" />
          <RadioListItem label="L" value="lg" />
        </RadioList>
        <RadioList label="With error" value="" onChange={() => {}} isRequired status={{
        type: 'error',
        message: 'Please select an option'
      }}>
          <RadioListItem label="Option A" value="a" />
          <RadioListItem label="Option B" value="b" />
        </RadioList>
      </div>;
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? 'email');
    const {
      value: _value,
      onChange: _onChange,
      ...restArgs
    } = args;
    return <RadioList {...restArgs} value={value} onChange={setValue}>
        <RadioListItem label="Email" value="email" />
        <RadioListItem label="SMS" value="sms" />
        <RadioListItem label="Push notification" value="push" />
      </RadioList>;
  },
  args: {
    label: 'Notification preference',
    isDisabled: true,
    disabledMessage: 'Upgrade your account to change preferences'
  }
}`,...G.parameters?.docs?.source}}},K=[`Default`,`WithDescription`,`Horizontal`,`Disabled`,`DisabledItem`,`Required`,`Optional`,`WithErrorStatus`,`WithStartContent`,`WithEndContent`,`AllVariations`,`DisabledWithMessage`]})))()}q();export{W as AllVariations,P as Default,L as Disabled,R as DisabledItem,G as DisabledWithMessage,I as Horizontal,B as Optional,z as Required,F as WithDescription,U as WithEndContent,V as WithErrorStatus,H as WithStartContent,K as __namedExportsOrder,N as default};