import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./stylex-Dft6gtPK.js";import{D as i,f as a,i as o,m as s,r as c,s as l}from"./plainDate-CwnyEvMX.js";import{n as ee}from"./mergeProps-JRyAvMxc.js";import{n as te,t as u}from"./themeProps-DRQoVAIO.js";import{t as d}from"./jsx-runtime-DeHZSEgm.js";import{n as ne,t as f}from"./useTooltip-Dj0O-S6V.js";import{n as p,t as re}from"./Spinner-rxpquZFT.js";import{n as m,r as ie}from"./SizeContext-Dp2usO2O.js";import{n as h,t as g}from"./Icon-D9gPeCUm.js";import{n as ae,t as _}from"./useTranslator-C3b4YzkD.js";import{n as oe,t as v}from"./usePopover-ChPJYmE0.js";import{n as y,t as se}from"./Calendar-Das0EGpH.js";import{n as b,t as ce}from"./Field-Cedy3QPa.js";import{a as x,i as le,n as ue,r as de,t as S}from"./inputStyles.stylex-BqCW_evI.js";function C(e){if(!e)return``;let t=s(e.start),n=s(e.end),r=i().year,l=t.year===n.year&&t.year===r?c:o;return`${a(t,l)} – ${a(n,l)}`}function fe(e,t){return e===t?!0:!e||!t?!1:e.start===t.start&&e.end===t.end}function w({label:e,isLabelHidden:t=!1,description:r,isOptional:i=!1,isRequired:a=!1,isDisabled:o=!1,disabledMessage:s,value:c,onChange:l,changeAction:u,isLoading:d=!1,min:f,max:p,dateConstraints:m,presets:h,hasClear:_=!0,placeholder:v,size:y,status:b,labelTooltip:S,numberOfMonths:w=2,width:O,xstyle:k,className:A,style:j,ref:M,...N}){let P=ae(),F=v??P(`@khameleon.dateRangeInput.placeholder`),I=ie(y,`md`),L=(0,T.useId)(),R=(0,T.useId)(),z=(0,T.useId)(),[,B]=(0,T.useTransition)(),[V,H]=(0,T.useOptimistic)(c),U=d||V!==c,W=o||U,G=o&&!!s,K=ne({placement:`above`,focusTrigger:`always`,isEnabled:G}),q={warning:`warning`,error:`error`,success:`success`},J={warning:`warning`,error:`error`,success:`success`},Y=[r?R:null,b?.message?z:null,G?K.describedBy:null].filter(Boolean).join(` `)||void 0,X=(0,T.useMemo)(()=>C(V),[V]),Z=oe({dialogLabel:P(`@khameleon.dateRangeInput.dialogLabel`),closeButtonLabel:P(`@khameleon.dateInput.closeCalendar`)}),Q=(0,T.useCallback)(e=>{U||(l(e),u&&B(async()=>{H(e),await u(e)}))},[U,l,u,B,H]),$=(0,T.useCallback)(()=>{W||(Z.isOpen?Z.hide():Z.show())},[W,Z]),pe=(0,T.useCallback)(e=>{Q(e),Z.hide()},[Q,Z]),me=(0,T.useCallback)(e=>{Q(e.getRange()),Z.hide()},[Q,Z]),he=(0,T.useCallback)(e=>{e.stopPropagation(),Q(null)},[Q]),ge=c?`${e}: ${X}`:`${e}: ${F}`;return(0,E.jsxs)(ce,{label:e,isLabelHidden:t,description:r,inputID:L,descriptionID:r?R:void 0,isOptional:i,isRequired:a,isDisabled:W,status:b?{type:b.type,message:b.message,messageID:b.message?z:void 0}:void 0,labelTooltip:S,width:O,children:[(0,E.jsxs)(`div`,{ref:e=>{Z.triggerRef(e),K.ref(e)},...N,...ee(te(`date-range-input`,{size:I,status:b?.type??null}),n(x.base,D[I],W&&x.disabled,b&&ue[b.type],b&&le[b.type],b&&de[b.type],k),A,j),children:[(0,E.jsx)(`button`,{type:`button`,onClick:$,disabled:W,"aria-label":Z.isOpen?P(`@khameleon.dateInput.toggleCalendarClose`):P(`@khameleon.dateInput.openCalendar`),tabIndex:-1,...{0:{className:`khameleon78zum5 khameleon6s0dn4 khameleonl56j7k khameleon1717udv khameleon1ghz6dp khameleonc342km khameleonng3xce khameleonjbqb8w khameleon1ypdohk khameleonh6dtrn khameleon1a2a7pz khameleon1p25gnr khameleon1y3gkto`},1:{className:`khameleon78zum5 khameleon6s0dn4 khameleonl56j7k khameleon1717udv khameleon1ghz6dp khameleonc342km khameleonng3xce khameleonjbqb8w khameleonh6dtrn khameleon1a2a7pz khameleon1p25gnr khameleon1y3gkto khameleon1h6gzvc`}}[!!W<<0],children:(0,E.jsx)(g,{icon:`calendar`,size:`sm`,color:`secondary`})}),(0,E.jsx)(`button`,{ref:M,id:L,type:`button`,onClick:$,disabled:W&&!G,"aria-disabled":G?`true`:void 0,"aria-label":ge,"aria-describedby":Y,"aria-required":a===!0?`true`:void 0,"aria-invalid":b?.type===`error`?`true`:void 0,"aria-busy":U||void 0,"aria-expanded":Z.isOpen,"aria-haspopup":`dialog`,"aria-controls":Z.isOpen?Z.id:void 0,...{0:{className:`khameleon1lliihq khameleon98rzlu khameleoneuugli khameleonc342km khameleonng3xce khameleon1717udv khameleon9ynric khameleonjm74w1 khameleon6pjikd khameleonw6l6zx khameleon1tgivj0 khameleonjbqb8w khameleon1a2a7pz khameleon1ypdohk khameleon1yc453h khameleonuxw1ft khameleonb3r6kr khameleonlyipyv`},2:{className:`khameleon1lliihq khameleon98rzlu khameleoneuugli khameleonc342km khameleonng3xce khameleon1717udv khameleon9ynric khameleonjm74w1 khameleon6pjikd khameleonw6l6zx khameleonjbqb8w khameleon1a2a7pz khameleon1ypdohk khameleon1yc453h khameleonuxw1ft khameleonb3r6kr khameleonlyipyv khameleonv1l7n4`},1:{className:`khameleon1lliihq khameleon98rzlu khameleoneuugli khameleonc342km khameleonng3xce khameleon1717udv khameleon9ynric khameleonjm74w1 khameleon6pjikd khameleonw6l6zx khameleon1tgivj0 khameleonjbqb8w khameleon1a2a7pz khameleon1yc453h khameleonuxw1ft khameleonb3r6kr khameleonlyipyv khameleon1h6gzvc`},3:{className:`khameleon1lliihq khameleon98rzlu khameleoneuugli khameleonc342km khameleonng3xce khameleon1717udv khameleon9ynric khameleonjm74w1 khameleon6pjikd khameleonw6l6zx khameleonjbqb8w khameleon1a2a7pz khameleon1yc453h khameleonuxw1ft khameleonb3r6kr khameleonlyipyv khameleonv1l7n4 khameleon1h6gzvc`}}[!X<<1|!!W<<0],children:X||F}),_&&c!==null&&!W&&(0,E.jsx)(`button`,{type:`button`,onClick:he,"aria-label":P(`@khameleon.dateInput.clear`,{label:e}),className:`khameleon78zum5 khameleon6s0dn4 khameleonl56j7k khameleon1717udv khameleon1ghz6dp khameleonc342km khameleonng3xce khameleonjbqb8w khameleon1ypdohk khameleonh6dtrn khameleon1a2a7pz khameleon1p25gnr khameleon1y3gkto`,children:(0,E.jsx)(g,{icon:`close`,size:`sm`,color:`secondary`})}),U&&(0,E.jsx)(re,{size:`sm`}),b&&(0,E.jsx)(g,{icon:q[b.type],size:`md`,color:J[b.type]})]}),Z.render((0,E.jsxs)(`div`,{className:`khameleon78zum5`,children:[h&&h.length>0&&(0,E.jsx)(`div`,{role:`group`,"aria-label":P(`@khameleon.dateRangeInput.presetDateRanges`),className:`khameleon78zum5 khameleondt5ytf khameleonzye2dw khameleon1b2ylru khameleon1pcaw5z khameleon32b0ac khameleondz7fjg khameleon1d77m7x`,children:h.map(e=>{let t=fe(c,e.getRange());return(0,E.jsx)(`button`,{type:`button`,"aria-current":t?`true`:void 0,onClick:()=>me(e),...{0:{className:`khameleon1lliihq khameleonh8yej3 khameleontozwh khameleon1ghz6dp khameleonc342km khameleonng3xce khameleonh6dtrn khameleonjbqb8w khameleone9uy6x khameleon9ynric khameleoncr08ib khameleon1kq96og khameleon1tgivj0 khameleon1ypdohk khameleon1yc453h khameleon1a2a7pz khameleon1p25gnr`},1:{className:`khameleon1lliihq khameleonh8yej3 khameleontozwh khameleon1ghz6dp khameleonc342km khameleonng3xce khameleonh6dtrn khameleon9ynric khameleoncr08ib khameleon1kq96og khameleon1ypdohk khameleon1yc453h khameleon1a2a7pz khameleon1p25gnr khameleongcxg3y khameleonqwr325`}}[!!t<<0],children:e.label},e.label)})}),(0,E.jsx)(se,{mode:`range`,value:c??void 0,onChange:pe,min:f,max:p,dateConstraints:m,numberOfMonths:w})]}),{placement:`below`,alignment:`start`}),G&&K.renderTooltip(s)]})}var T,E,D;function O(){return(O=e((()=>{T=t(),r(),l(),b(),S(),h(),p(),y(),v(),f(),m(),u(),_(),E=d(),D={sm:{kZKoxP:`khameleon6k0iem`,k7Eaqz:`khameleonfb3i0g`,$$css:!0},md:{kZKoxP:`khameleon1ueg155`,k7Eaqz:`khameleonfb3i0g`,$$css:!0},lg:{kZKoxP:`khameleonssyfek`,k7Eaqz:`khameleonfb3i0g`,$$css:!0}},w.displayName=`DateRangeInput`,w.__docgenInfo={description:`A date range picker with a button trigger that opens a popover
containing a dual-month calendar and optional preset ranges.

@example
\`\`\`
<DateRangeInput
  label="Date range"
  value={range}
  onChange={setRange}
  presets={[
    { label: "Last 7 days", getRange: () => ({start: "...", end: "..."}) },
  ]}
/>
\`\`\``,methods:[],displayName:`DateRangeInput`,props:{ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLButtonElement>`,elements:[{name:`HTMLButtonElement`}]},description:`Ref forwarded to the trigger button`},label:{required:!0,tsType:{name:`string`},description:`Label text for the input (required for accessibility).`},isLabelHidden:{required:!1,tsType:{name:`boolean`},description:`Whether to visually hide the label (still accessible to screen readers).
@default false`,defaultValue:{value:`false`,computed:!1}},description:{required:!1,tsType:{name:`string`},description:`Description text displayed between the label and input.`},isOptional:{required:!1,tsType:{name:`boolean`},description:`Whether the field is optional. Mutually exclusive with isRequired.
@default false`,defaultValue:{value:`false`,computed:!1}},isRequired:{required:!1,tsType:{name:`boolean`},description:`Whether the field is required. Mutually exclusive with isOptional.
@default false`,defaultValue:{value:`false`,computed:!1}},isDisabled:{required:!1,tsType:{name:`boolean`},description:`Whether the input is disabled.
@default false`,defaultValue:{value:`false`,computed:!1}},disabledMessage:{required:!1,tsType:{name:`string`},description:`Explains why the input is disabled. When set together with
\`isDisabled\`, the input shows a tooltip with this text on hover and
keyboard focus, and the trigger stays focusable (via \`aria-disabled\`)
so the reason is discoverable by keyboard and assistive technology.
Activation stays blocked.

Use this instead of wrapping a disabled input in \`Tooltip\` — disabled
controls don't emit the pointer events an external tooltip needs.

@example
\`\`\`
<DateRangeInput
  label="Reporting period"
  value={range}
  onChange={setRange}
  isDisabled
  disabledMessage="You need the Editor role to change this"
/>
\`\`\``},value:{required:!0,tsType:{name:`union`,raw:`DateRange | null`,elements:[{name:`DateRange`},{name:`null`}]},description:`The selected date range, or null if no range is selected.`},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: DateRange | null) => void`,signature:{arguments:[{type:{name:`union`,raw:`DateRange | null`,elements:[{name:`DateRange`},{name:`null`}]},name:`value`}],return:{name:`void`}}},description:`Callback fired when the date range changes.
Called with null when the range is cleared.`},changeAction:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: DateRange | null) => void | Promise<void>`,signature:{arguments:[{type:{name:`union`,raw:`DateRange | null`,elements:[{name:`DateRange`},{name:`null`}]},name:`value`}],return:{name:`union`,raw:`void | Promise<void>`,elements:[{name:`void`},{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`}]}}},description:`Async action on change. Fires after onChange.`},isLoading:{required:!1,tsType:{name:`boolean`},description:`Whether the input is in a loading state.
@default false`,defaultValue:{value:`false`,computed:!1}},min:{required:!1,tsType:{name:`literal`,value:"`${number}${number}${number}${number}-${number}${number}-${number}${number}`"},description:`Minimum selectable date in ISO format.`},max:{required:!1,tsType:{name:`literal`,value:"`${number}${number}${number}${number}-${number}${number}-${number}${number}`"},description:`Maximum selectable date in ISO format.`},dateConstraints:{required:!1,tsType:{name:`ReadonlyArray`,elements:[{name:`signature`,type:`function`,raw:`(date: Date) => boolean`,signature:{arguments:[{type:{name:`Date`},name:`date`}],return:{name:`boolean`}}}],raw:`ReadonlyArray<(date: Date) => boolean>`},description:`Custom date constraint functions.
A date is disabled if ANY function returns false.`},presets:{required:!1,tsType:{name:`ReadonlyArray`,elements:[{name:`DateRangePreset`}],raw:`ReadonlyArray<DateRangePreset>`},description:`Preset date ranges shown as quick-select options beside the calendar.`},hasClear:{required:!1,tsType:{name:`boolean`},description:`Whether to show a clear button when a range is selected.
@default true`,defaultValue:{value:`true`,computed:!1}},placeholder:{required:!1,tsType:{name:`string`},description:`Placeholder text shown when no range is selected.
@default "Select date range"`},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:`The size of the trigger.
@default 'md'`},status:{required:!1,tsType:{name:`InputStatus`},description:`Status indicator for the input.`},width:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:"Width of the field. Numbers are treated as pixels, strings are used as-is\n(e.g. `'100%'`). Sizes the whole field (label, control, and status) so they\nstay aligned, unlike setting width via `xstyle`/`className`/`style`."},labelTooltip:{required:!1,tsType:{name:`string`},description:`Tooltip text to display in an info icon at the end of the label.`},numberOfMonths:{required:!1,tsType:{name:`union`,raw:`1 | 2`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`}]},description:`Number of months to display in the calendar.
@default 2`,defaultValue:{value:`2`,computed:!1}}},composes:[`Omit`]}})))()}function k(e){let t=new Date;return t.setDate(t.getDate()-e),t.toISOString().slice(0,10)}function A(){return new Date().toISOString().slice(0,10)}function j(){let e=new Date;return e.setDate(1),e.toISOString().slice(0,10)}var M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{M=t(),O(),N=d(),P=[{label:`Last 1 day`,getRange:()=>({start:k(1),end:A()})},{label:`Last 3 days`,getRange:()=>({start:k(3),end:A()})},{label:`Last 7 days`,getRange:()=>({start:k(7),end:A()})},{label:`Last 14 days`,getRange:()=>({start:k(14),end:A()})},{label:`Last 30 days`,getRange:()=>({start:k(30),end:A()})},{label:`This month`,getRange:()=>({start:j(),end:A()})}],F={title:`Core/DateRangeInput`,component:w,tags:[`autodocs`],argTypes:{label:{control:`text`,description:`Label text (required)`},isLabelHidden:{control:`boolean`,description:`Visually hide the label`},placeholder:{control:`text`,description:`Placeholder text`},description:{control:`text`,description:`Description text`},isOptional:{control:`boolean`,description:`Show optional indicator`},isRequired:{control:`boolean`,description:`Mark as required`},isDisabled:{control:`boolean`,description:`Disable the picker`},disabledMessage:{control:`text`,description:`Explains why the input is disabled. With isDisabled, shows a tooltip on hover/keyboard focus and keeps the field focusable via aria-disabled (activation stays blocked). Use this instead of wrapping a disabled DateRangeInput in Tooltip.`},size:{control:`radio`,options:[`sm`,`md`,`lg`]},hasClear:{control:`boolean`,description:`Show clear button`},numberOfMonths:{control:`radio`,options:[1,2],description:`Calendar months`}}},I={render:e=>{let[t,n]=(0,M.useState)(null);return(0,N.jsx)(w,{...e,value:t,onChange:n})},args:{label:`Date range`}},L={render:e=>{let[t,n]=(0,M.useState)({start:`2026-03-10`,end:`2026-03-20`});return(0,N.jsx)(w,{...e,value:t,onChange:n})},args:{label:`Report period`}},R={render:e=>{let[t,n]=(0,M.useState)(null);return(0,N.jsx)(w,{...e,value:t,onChange:n})},args:{label:`Date range`,presets:P}},z={render:e=>{let[t,n]=(0,M.useState)({start:k(7),end:A()});return(0,N.jsx)(w,{...e,value:t,onChange:n})},args:{label:`Analytics period`,presets:P}},B={render:e=>{let[t,n]=(0,M.useState)(null);return(0,N.jsx)(w,{...e,value:t,onChange:n})},args:{label:`Coverage period`,description:`Select the start and end dates for the report`}},V={render:e=>{let[t,n]=(0,M.useState)(null);return(0,N.jsx)(w,{...e,value:t,onChange:n})},args:{label:`Booking dates`,min:`2026-03-01`,max:`2026-06-30`,description:`Available: Mar 1 – Jun 30, 2026`}},H={render:e=>{let[t,n]=(0,M.useState)(null);return(0,N.jsx)(w,{...e,value:t,onChange:n})},args:{label:`Filter by date`,isOptional:!0}},U={render:e=>{let[t,n]=(0,M.useState)(null);return(0,N.jsx)(w,{...e,value:t,onChange:n})},args:{label:`Coverage period`,isRequired:!0}},W={render:e=>{let[t,n]=(0,M.useState)({start:`2026-03-10`,end:`2026-03-20`});return(0,N.jsx)(w,{...e,value:t,onChange:n})},args:{label:`Locked range`,isDisabled:!0}},G={render:e=>{let[t,n]=(0,M.useState)(null);return(0,N.jsx)(w,{...e,value:t,onChange:n})},args:{label:`Reporting period`,isDisabled:!0,disabledMessage:`You need the Editor role to change this`}},K={render:()=>{let[e,t]=(0,M.useState)(null),[n,r]=(0,M.useState)(null),[i,a]=(0,M.useState)(null);return(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,maxWidth:`340px`},children:[(0,N.jsx)(w,{label:`Small (28px)`,value:e,onChange:t,size:`sm`}),(0,N.jsx)(w,{label:`Medium (32px)`,value:n,onChange:r,size:`md`}),(0,N.jsx)(w,{label:`Large (36px)`,value:i,onChange:a,size:`lg`})]})}},q={render:e=>{let[t,n]=(0,M.useState)(null);return(0,N.jsx)(w,{...e,value:t,onChange:n})},args:{label:`Date range`,numberOfMonths:1}},J={render:e=>{let[t,n]=(0,M.useState)(null);return(0,N.jsx)(w,{...e,value:t,onChange:n})},args:{label:`Date range`,status:{type:`error`,message:`Please select a date range`}}},Y={render:e=>{let[t,n]=(0,M.useState)({start:`2026-03-01`,end:`2026-06-30`});return(0,N.jsx)(w,{...e,value:t,onChange:n})},args:{label:`Date range`,status:{type:`warning`,message:`Range exceeds 90 days`}}},X={render:e=>{let[t,n]=(0,M.useState)({start:`2026-03-10`,end:`2026-03-20`});return(0,N.jsx)(w,{...e,value:t,onChange:n})},args:{label:`Required range`,hasClear:!1}},Z={render:()=>{let[e,t]=(0,M.useState)(null),[n,r]=(0,M.useState)({start:`2026-03-10`,end:`2026-03-20`}),[i,a]=(0,M.useState)(null),[o,s]=(0,M.useState)({start:`2026-03-10`,end:`2026-03-20`}),[c,l]=(0,M.useState)(null);return(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,maxWidth:`340px`},children:[(0,N.jsx)(w,{label:`Default`,value:e,onChange:t}),(0,N.jsx)(w,{label:`With value`,value:n,onChange:r}),(0,N.jsx)(w,{label:`With presets`,value:i,onChange:a,presets:P}),(0,N.jsx)(w,{label:`Disabled`,isDisabled:!0,value:o,onChange:s}),(0,N.jsx)(w,{label:`With error`,value:c,onChange:l,status:{type:`error`,message:`Date range is required`}})]})}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>(null);
    return <DateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Date range'
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>({
      start: '2026-03-10' as ISODateString,
      end: '2026-03-20' as ISODateString
    });
    return <DateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Report period'
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>(null);
    return <DateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Date range',
    presets: defaultPresets
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>({
      start: daysAgo(7),
      end: today()
    });
    return <DateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Analytics period',
    presets: defaultPresets
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>(null);
    return <DateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Coverage period',
    description: 'Select the start and end dates for the report'
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>(null);
    return <DateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Booking dates',
    min: '2026-03-01' as ISODateString,
    max: '2026-06-30' as ISODateString,
    description: 'Available: Mar 1 – Jun 30, 2026'
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>(null);
    return <DateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Filter by date',
    isOptional: true
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>(null);
    return <DateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Coverage period',
    isRequired: true
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>({
      start: '2026-03-10' as ISODateString,
      end: '2026-03-20' as ISODateString
    });
    return <DateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Locked range',
    isDisabled: true
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>(null);
    return <DateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Reporting period',
    isDisabled: true,
    disabledMessage: 'You need the Editor role to change this'
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sm, setSm] = useState<DateRange | null>(null);
    const [md, setMd] = useState<DateRange | null>(null);
    const [lg, setLg] = useState<DateRange | null>(null);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '340px'
    }}>
        <DateRangeInput label="Small (28px)" value={sm} onChange={setSm} size="sm" />
        <DateRangeInput label="Medium (32px)" value={md} onChange={setMd} size="md" />
        <DateRangeInput label="Large (36px)" value={lg} onChange={setLg} size="lg" />
      </div>;
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>(null);
    return <DateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Date range',
    numberOfMonths: 1
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>(null);
    return <DateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Date range',
    status: {
      type: 'error',
      message: 'Please select a date range'
    }
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>({
      start: '2026-03-01' as ISODateString,
      end: '2026-06-30' as ISODateString
    });
    return <DateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Date range',
    status: {
      type: 'warning',
      message: 'Range exceeds 90 days'
    }
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>({
      start: '2026-03-10' as ISODateString,
      end: '2026-03-20' as ISODateString
    });
    return <DateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Required range',
    hasClear: false
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [v1, setV1] = useState<DateRange | null>(null);
    const [v2, setV2] = useState<DateRange | null>({
      start: '2026-03-10' as ISODateString,
      end: '2026-03-20' as ISODateString
    });
    const [v3, setV3] = useState<DateRange | null>(null);
    const [v4, setV4] = useState<DateRange | null>({
      start: '2026-03-10' as ISODateString,
      end: '2026-03-20' as ISODateString
    });
    const [v5, setV5] = useState<DateRange | null>(null);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '340px'
    }}>
        <DateRangeInput label="Default" value={v1} onChange={setV1} />
        <DateRangeInput label="With value" value={v2} onChange={setV2} />
        <DateRangeInput label="With presets" value={v3} onChange={setV3} presets={defaultPresets} />
        <DateRangeInput label="Disabled" isDisabled value={v4} onChange={setV4} />
        <DateRangeInput label="With error" value={v5} onChange={setV5} status={{
        type: 'error',
        message: 'Date range is required'
      }} />
      </div>;
  }
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`WithValue`,`WithPresets`,`WithPresetsAndValue`,`WithDescription`,`WithMinMax`,`Optional`,`Required`,`Disabled`,`DisabledWithMessage`,`SizeVariants`,`SingleMonth`,`WithErrorStatus`,`WithWarningStatus`,`NoClear`,`AllVariations`]})))()}$();export{Z as AllVariations,I as Default,W as Disabled,G as DisabledWithMessage,X as NoClear,H as Optional,U as Required,q as SingleMonth,K as SizeVariants,B as WithDescription,J as WithErrorStatus,V as WithMinMax,R as WithPresets,z as WithPresetsAndValue,L as WithValue,Y as WithWarningStatus,Q as __namedExportsOrder,F as default};