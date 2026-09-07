import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./stylex-Dft6gtPK.js";import{T as i,f as ee,m as te,s as ne,t as re}from"./plainDate-CwnyEvMX.js";import{n as ie,t as a}from"./dateParser-D22V5_5l.js";import{i as ae,n as oe,o,r as se,s as ce,t as le}from"./timeParser-ByoIw5o7.js";import{n as ue}from"./mergeProps-JRyAvMxc.js";import{n as de}from"./mergeRefs-CPqjs56a.js";import{n as fe,t as s}from"./themeProps-DRQoVAIO.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as pe,t as l}from"./useTooltip-Dj0O-S6V.js";import{n as me,t as he}from"./Spinner-rxpquZFT.js";import{n as u,t as ge}from"./VisuallyHidden-BulQ9XDQ.js";import{n as _e,r as ve}from"./SizeContext-Dp2usO2O.js";import{n as ye,t as d}from"./Icon-D9gPeCUm.js";import{n as be,t as xe}from"./useTranslator-C3b4YzkD.js";import{n as Se,t as Ce}from"./usePopover-ChPJYmE0.js";import{n as we,t as f}from"./useInputContainer-DPdFoQUo.js";import{i as Te,n as p,r as Ee,t as De}from"./Calendar-Das0EGpH.js";import{n as Oe,t as ke}from"./Field-Cedy3QPa.js";import{a as Ae,i as je,n as Me,r as Ne,t as Pe}from"./inputStyles.stylex-BqCW_evI.js";function Fe(e){if(!e)return{date:void 0,time:void 0};let t=e.indexOf(`T`);return t===-1?{date:e,time:void 0}:{date:e.slice(0,t),time:e.slice(t+1)}}function Ie(e,t){if(!(!e||!t))return`${e}T${t}`}function Le(e){let t=new Date;return ae({hour:t.getHours(),minute:t.getMinutes(),second:t.getSeconds()},e)}function m({label:e,isLabelHidden:t=!1,description:r,isOptional:ne=!1,isRequired:a=!1,isDisabled:s=!1,disabledMessage:c,value:l,onChange:me,changeAction:u,isLoading:_e=!1,min:ye,max:xe,dateConstraints:Ce,hasSeconds:f=!1,hourFormat:p=`12h`,timeIncrement:Ee=1,hasClear:Oe=!1,placeholder:Pe,timePlaceholder:m,timeLabel:Be,size:_,status:v,labelTooltip:Ve,numberOfMonths:y=1,width:b,xstyle:x,className:S,style:C,ref:w,...T}){let E=be(),D=Pe??E(`@khameleon.dateTimeInput.placeholder`),O=m??E(`@khameleon.dateTimeInput.timePlaceholder`),k=ve(_,`md`),A=(0,h.useId)(),j=(0,h.useId)(),M=(0,h.useId)(),N=(0,h.useId)(),P=(0,h.useRef)(null),F=(0,h.useRef)(null),I=(0,h.useRef)(null),L=(0,h.useRef)(null),R=(0,h.useRef)(void 0),[,He]=(0,h.useTransition)(),[Ue,We]=(0,h.useOptimistic)(l),z=_e||Ue!==l,B=s||z,V=s&&!!c,Ge=pe({placement:`above`,focusTrigger:`always`,isEnabled:V}),Ke={warning:`warning`,error:`error`,success:`success`},qe={warning:`warning`,error:`error`,success:`success`},Je=[r?M:null,v?.message?N:null,V?Ge.describedBy:null].filter(Boolean).join(` `)||void 0,H=(0,h.useMemo)(()=>Fe(ye),[ye]),U=(0,h.useMemo)(()=>Fe(xe),[xe]),W=(0,h.useMemo)(()=>Fe(Ue),[Ue]),Ye=H.date,Xe=U.date,{isDateDisabled:Ze}=Te({min:Ye,max:Xe,dateConstraints:Ce}),G=(0,h.useMemo)(()=>{if(!(!H.date||!H.time||!W.date))return W.date===H.date?H.time:void 0},[H.date,H.time,W.date]),K=(0,h.useMemo)(()=>{if(!(!U.date||!U.time||!W.date))return W.date===U.date?U.time:void 0},[U.date,U.time,W.date]),[q,J]=(0,h.useState)(null),Qe=(0,h.useRef)(W.date);W.date!==Qe.current&&(Qe.current=W.date,W.date!==R.current&&(R.current=void 0,q!==null&&J(null)));let $e=q===null?W.date&&/^\d{4}-\d{2}-\d{2}$/.test(W.date)?ee(te(W.date),re):``:q,et=q===null||!q.trim()||ie(q)!==null,[Y,tt]=(0,h.useState)(null),[nt,rt]=(0,h.useState)(!1),it=p===`12h`?oe:se,at=(0,h.useMemo)(()=>Y===null?W.time?it(W.time,f):``:Y,[Y,W.time,it,f]),ot=(0,h.useMemo)(()=>{if(Y===null||!Y.trim())return!0;let e=ce(Y,f);return e?o(e,G,K):!1},[Y,f,G,K]),st=(0,h.useMemo)(()=>nt&&!at?p===`12h`?`e.g., 2:30 PM`:`e.g., 14:30`:O,[nt,at,p,O]),X=(0,h.useCallback)(e=>{z||(me(e),u&&He(async()=>{We(e),await u(e)}))},[z,me,u,He,We]),Z=Se({dialogLabel:E(`@khameleon.dateTimeInput.dialogLabel`),closeButtonLabel:E(`@khameleon.dateInput.closeCalendar`),onHide:()=>P.current?.focus()}),ct=(0,h.useCallback)(()=>{B||(Z.isOpen?Z.hide():Z.show())},[B,Z]),lt=(0,h.useCallback)(()=>{!B&&!Z.isOpen&&Z.show({skipAutoFocus:!0})},[B,Z]),Q=(0,h.useCallback)((e,t)=>{let n=W.time??Le(f);H.date&&e===H.date&&H.time&&(o(n,H.time,void 0)||(n=H.time)),U.date&&e===U.date&&U.time&&(o(n,void 0,U.time)||(n=U.time));let r=Ie(e,n);r&&X(r),t===`calendar`&&(J(null),Z.hide())},[W.time,f,H,U,X,Z]),ut=(0,h.useCallback)(e=>{if(B)return;let t=e.target.value;J(t);let n=ie(t);if(n&&i(n)!==W.date&&!Ze(n)){let e=i(n);R.current=e,Q(e,`input`),L.current?.navigateTo(e)}},[W.date,Ze,Q,B]),$=(0,h.useCallback)(()=>{if(q===null)return;if(!q.trim()){l!==void 0&&X(void 0),J(null);return}let e=ie(q);if(e&&!Ze(e)){let t=i(e);t!==W.date&&Q(t,`input`)}J(null)},[q,l,W.date,X,Ze,Q]),dt=(0,h.useCallback)(()=>{$()},[$]),ft=(0,h.useCallback)(e=>{e.key===`Escape`&&Z.isOpen?(e.preventDefault(),Z.hide()):e.key===`Enter`&&(e.preventDefault(),$())},[Z,$]),pt=(0,h.useCallback)(e=>{if(B)return;let t=e.target.value;tt(t);let n=ce(t,f);if(n&&o(n,G,K)&&n!==W.time&&W.date){let e=Ie(W.date,n);e&&X(e)}},[f,G,K,W.time,W.date,X,B]),mt=(0,h.useCallback)(()=>{B||rt(!0)},[B]),ht=(0,h.useCallback)(()=>{if(rt(!1),Y===null)return;if(!Y.trim()){tt(null);return}let e=ce(Y,f);if(e&&o(e,G,K)&&e!==W.time&&W.date){let t=Ie(W.date,e);t&&X(t)}tt(null)},[Y,f,G,K,W,X]),gt=(0,h.useCallback)(e=>{if(e.key===`ArrowUp`||e.key===`ArrowDown`){e.preventDefault();let t=W.time;if(!t){let e=new Date;t=ae({hour:e.getHours(),minute:e.getMinutes(),second:e.getSeconds()},f)}let n=e.key===`ArrowUp`?Ee:-Ee,r=le(t,n,f);if(o(r,G,K)&&W.date){let e=Ie(W.date,r);e&&X(e)}}},[W,f,Ee,G,K,X]),_t=(0,h.useCallback)(()=>{X(void 0),P.current?.focus()},[X]),{onClick:vt,onMouseUp:yt}=we({containerRef:I,inputRef:F,disabled:B});return(0,g.jsxs)(ke,{label:e,isLabelHidden:t,description:r,inputID:A,descriptionID:r?M:void 0,isOptional:ne,isRequired:a,isDisabled:s,status:v?{type:v.type,message:v.message,messageID:v.message?N:void 0}:void 0,labelTooltip:Ve,statusVariant:`detached`,width:b,children:[(0,g.jsxs)(`div`,{ref:Ge.ref,...T,...ue(fe(`date-time-input`,{size:k,status:v?.type??null}),n(Re.row,x),S,C),children:[(0,g.jsxs)(`div`,{ref:Z.triggerRef,...n(Ae.base,ze[k],Re.dateWrapper,B&&Ae.disabled,v&&Me[v.type],v&&je[v.type],v&&Ne[v.type]),children:[(0,g.jsx)(`button`,{type:`button`,onClick:ct,disabled:B,"aria-label":Z.isOpen?E(`@khameleon.dateInput.toggleCalendarClose`):E(`@khameleon.dateInput.openCalendar`),...{0:{className:`khameleon78zum5 khameleon6s0dn4 khameleonl56j7k khameleon1717udv khameleon1ghz6dp khameleonc342km khameleonng3xce khameleonjbqb8w khameleon1ypdohk khameleonh6dtrn khameleon1a2a7pz khameleon1p25gnr khameleon1y3gkto`},1:{className:`khameleon78zum5 khameleon6s0dn4 khameleonl56j7k khameleon1717udv khameleon1ghz6dp khameleonc342km khameleonng3xce khameleonjbqb8w khameleonh6dtrn khameleon1a2a7pz khameleon1p25gnr khameleon1y3gkto khameleon1h6gzvc`}}[!!B<<0],children:(0,g.jsx)(d,{icon:`calendar`,size:`sm`,color:`secondary`})}),(0,g.jsx)(`input`,{ref:de(w,P),id:A,type:`text`,role:`combobox`,value:$e,onChange:ut,onBlur:dt,onClick:lt,onKeyDown:ft,placeholder:D,disabled:B&&!V,"aria-disabled":V?`true`:void 0,readOnly:V||void 0,"aria-describedby":Je,"aria-required":a===!0?`true`:void 0,"aria-invalid":v?.type===`error`||!et?`true`:void 0,"aria-busy":z||void 0,"aria-expanded":Z.isOpen,"aria-haspopup":`dialog`,"aria-controls":Z.isOpen?Z.id:void 0,"aria-autocomplete":`none`,autoComplete:`off`,...{0:{className:`khameleon1lliihq khameleon98rzlu khameleoneuugli khameleonc342km khameleonng3xce khameleon1717udv khameleon9ynric khameleonjm74w1 khameleon6pjikd khameleonw6l6zx khameleon1tgivj0 khameleonjbqb8w khameleon1a2a7pz khameleoneyghm5`},2:{className:`khameleon1lliihq khameleon98rzlu khameleoneuugli khameleonc342km khameleonng3xce khameleon1717udv khameleon9ynric khameleonjm74w1 khameleon6pjikd khameleonw6l6zx khameleon1tgivj0 khameleonjbqb8w khameleon1a2a7pz khameleoneyghm5 khameleon1h6gzvc`},1:{className:`khameleon1lliihq khameleon98rzlu khameleoneuugli khameleonc342km khameleonng3xce khameleon1717udv khameleon9ynric khameleonjm74w1 khameleon6pjikd khameleonw6l6zx khameleonjbqb8w khameleon1a2a7pz khameleoneyghm5 khameleonv1l7n4`},3:{className:`khameleon1lliihq khameleon98rzlu khameleoneuugli khameleonc342km khameleonng3xce khameleon1717udv khameleon9ynric khameleonjm74w1 khameleon6pjikd khameleonw6l6zx khameleonjbqb8w khameleon1a2a7pz khameleoneyghm5 khameleon1h6gzvc khameleonv1l7n4`}}[!!B<<1|!et<<0]}),(0,g.jsx)(ge,{as:`div`,role:`alert`,"aria-live":`assertive`,children:et?``:`Invalid date`}),Oe&&l!==void 0&&!B&&(0,g.jsx)(`button`,{type:`button`,onClick:_t,"aria-label":E(`@khameleon.dateInput.clear`,{label:e}),className:`khameleon78zum5 khameleon6s0dn4 khameleonl56j7k khameleon1717udv khameleon1ghz6dp khameleonc342km khameleonng3xce khameleonjbqb8w khameleon1ypdohk khameleonh6dtrn khameleon1a2a7pz khameleon1p25gnr khameleon1y3gkto`,children:(0,g.jsx)(d,{icon:`close`,size:`sm`,color:`secondary`})}),z&&(0,g.jsx)(he,{size:`sm`}),v&&(0,g.jsx)(d,{icon:Ke[v.type],size:`md`,color:qe[v.type]})]}),(0,g.jsxs)(`div`,{ref:I,onClick:vt,onMouseUp:yt,...n(Ae.base,ze[k],Re.timeWrapper,B&&Ae.disabled,v&&Me[v.type],v&&je[v.type],v&&Ne[v.type]),children:[(0,g.jsx)(`div`,{className:`khameleon78zum5 khameleon6s0dn4 khameleonl56j7k khameleon2lah0s`,children:(0,g.jsx)(d,{icon:`clock`,size:`sm`,color:`secondary`})}),(0,g.jsx)(`input`,{ref:F,id:j,type:`text`,value:at,onChange:pt,onFocus:mt,onBlur:ht,onKeyDown:gt,placeholder:st,disabled:B&&!V,"aria-disabled":V?`true`:void 0,readOnly:V||void 0,"aria-label":Be??E(`@khameleon.dateTimeInput.timeSuffix`,{label:e}),"aria-describedby":Je,"aria-required":a===!0?`true`:void 0,"aria-invalid":v?.type===`error`||!ot?`true`:void 0,"aria-busy":z||void 0,...{0:{className:`khameleon1lliihq khameleon98rzlu khameleoneuugli khameleonc342km khameleonng3xce khameleon1717udv khameleon9ynric khameleonjm74w1 khameleon6pjikd khameleonw6l6zx khameleon1tgivj0 khameleonjbqb8w khameleon1a2a7pz khameleoneyghm5`},2:{className:`khameleon1lliihq khameleon98rzlu khameleoneuugli khameleonc342km khameleonng3xce khameleon1717udv khameleon9ynric khameleonjm74w1 khameleon6pjikd khameleonw6l6zx khameleon1tgivj0 khameleonjbqb8w khameleon1a2a7pz khameleoneyghm5 khameleon1h6gzvc`},1:{className:`khameleon1lliihq khameleon98rzlu khameleoneuugli khameleonc342km khameleonng3xce khameleon1717udv khameleon9ynric khameleonjm74w1 khameleon6pjikd khameleonw6l6zx khameleonjbqb8w khameleon1a2a7pz khameleoneyghm5 khameleonv1l7n4`},3:{className:`khameleon1lliihq khameleon98rzlu khameleoneuugli khameleonc342km khameleonng3xce khameleon1717udv khameleon9ynric khameleonjm74w1 khameleon6pjikd khameleonw6l6zx khameleonjbqb8w khameleon1a2a7pz khameleoneyghm5 khameleon1h6gzvc khameleonv1l7n4`}}[!!B<<1|!ot<<0]}),(0,g.jsx)(ge,{as:`div`,role:`alert`,"aria-live":`assertive`,children:ot?``:`Invalid time`})]})]}),Z.render((0,g.jsx)(De,{handleRef:L,mode:`single`,value:W.date,onChange:e=>Q(e,`calendar`),min:Ye,max:Xe,dateConstraints:Ce,numberOfMonths:y}),{placement:`below`,alignment:`start`}),V&&Ge.renderTooltip(c)]})}var h,g,Re,ze;function Be(){return(Be=e((()=>{h=t(),r(),Oe(),Pe(),ye(),u(),me(),p(),Ee(),Ce(),l(),f(),a(),ne(),_e(),s(),xe(),g=c(),Re={row:{k1xSpc:`khameleon78zum5`,kOIVth:`khameleon1txdalj`,$$css:!0},dateWrapper:{kUk6DE:`khameleon98rzlu`,kzQI83:null,kmuXW:null,kCS8Yb:`khameleon1r8uery`,$$css:!0},timeWrapper:{kUk6DE:`khameleon98rzlu`,kzQI83:null,kmuXW:null,kCS8Yb:`khameleon1r8uery`,$$css:!0}},ze={sm:{kZKoxP:`khameleon6k0iem`,$$css:!0},md:{kZKoxP:`khameleon1ueg155`,$$css:!0},lg:{kZKoxP:`khameleonssyfek`,$$css:!0}},m.displayName=`DateTimeInput`,m.__docgenInfo={description:`A combined date and time picker with side-by-side date input and
time input under a single label. The date input opens a calendar
popover; the time input supports typed entry and arrow-key adjustment.

@example
\`\`\`
<DateTimeInput
  label="Meeting time"
  value={dateTime}
  onChange={setDateTime}
/>
\`\`\``,methods:[],displayName:`DateTimeInput`,props:{ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},description:`Ref forwarded to the date input element`},label:{required:!0,tsType:{name:`string`},description:`Label text for the input (required for accessibility).`},isLabelHidden:{required:!1,tsType:{name:`boolean`},description:`Whether to visually hide the label (still accessible to screen readers).
@default false`,defaultValue:{value:`false`,computed:!1}},description:{required:!1,tsType:{name:`string`},description:`Description text displayed between the label and input.`},isOptional:{required:!1,tsType:{name:`boolean`},description:`Whether the field is optional. Mutually exclusive with isRequired.
@default false`,defaultValue:{value:`false`,computed:!1}},isRequired:{required:!1,tsType:{name:`boolean`},description:`Whether the field is required. Mutually exclusive with isOptional.
@default false`,defaultValue:{value:`false`,computed:!1}},isDisabled:{required:!1,tsType:{name:`boolean`},description:`Whether the input is disabled.
@default false`,defaultValue:{value:`false`,computed:!1}},disabledMessage:{required:!1,tsType:{name:`string`},description:`Explains why the input is disabled. When set together with
\`isDisabled\`, the input shows a tooltip with this text on hover and
keyboard focus, and the date and time fields stay focusable (via
\`aria-disabled\`) so the reason is discoverable by keyboard and assistive
technology. Typing and calendar activation stay blocked.

Use this instead of wrapping a disabled input in \`Tooltip\` — disabled
controls don't emit the pointer events an external tooltip needs.

@example
\`\`\`
<DateTimeInput
  label="Meeting time"
  value={dateTime}
  onChange={setDateTime}
  isDisabled
  disabledMessage="You need the Editor role to change this"
/>
\`\`\``},value:{required:!1,tsType:{name:`intersection`,raw:`string & {
  readonly __brand: 'ISODateTimeString';
}`,elements:[{name:`string`},{name:`signature`,type:`object`,raw:`{
  readonly __brand: 'ISODateTimeString';
}`,signature:{properties:[{key:`__brand`,value:{name:`literal`,value:`'ISODateTimeString'`,required:!0}}]}}]},description:`The selected datetime in ISO 8601 format ("YYYY-MM-DDTHH:MM" or "YYYY-MM-DDTHH:MM:SS").`},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: ISODateTimeString | undefined) => void`,signature:{arguments:[{type:{name:`union`,raw:`ISODateTimeString | undefined`,elements:[{name:`intersection`,raw:`string & {
  readonly __brand: 'ISODateTimeString';
}`,elements:[{name:`string`},{name:`signature`,type:`object`,raw:`{
  readonly __brand: 'ISODateTimeString';
}`,signature:{properties:[{key:`__brand`,value:{name:`literal`,value:`'ISODateTimeString'`,required:!0}}]}}]},{name:`undefined`}]},name:`value`}],return:{name:`void`}}},description:`Callback fired when the datetime changes.
Called with undefined when input is cleared.`},changeAction:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: ISODateTimeString | undefined) => void | Promise<void>`,signature:{arguments:[{type:{name:`union`,raw:`ISODateTimeString | undefined`,elements:[{name:`intersection`,raw:`string & {
  readonly __brand: 'ISODateTimeString';
}`,elements:[{name:`string`},{name:`signature`,type:`object`,raw:`{
  readonly __brand: 'ISODateTimeString';
}`,signature:{properties:[{key:`__brand`,value:{name:`literal`,value:`'ISODateTimeString'`,required:!0}}]}}]},{name:`undefined`}]},name:`value`}],return:{name:`union`,raw:`void | Promise<void>`,elements:[{name:`void`},{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`}]}}},description:`Async action on change. Fires after onChange.`},isLoading:{required:!1,tsType:{name:`boolean`},description:`Whether the input is in a loading state.
@default false`,defaultValue:{value:`false`,computed:!1}},min:{required:!1,tsType:{name:`intersection`,raw:`string & {
  readonly __brand: 'ISODateTimeString';
}`,elements:[{name:`string`},{name:`signature`,type:`object`,raw:`{
  readonly __brand: 'ISODateTimeString';
}`,signature:{properties:[{key:`__brand`,value:{name:`literal`,value:`'ISODateTimeString'`,required:!0}}]}}]},description:`Minimum selectable datetime in ISO format.
Constrains both date and time selection.`},max:{required:!1,tsType:{name:`intersection`,raw:`string & {
  readonly __brand: 'ISODateTimeString';
}`,elements:[{name:`string`},{name:`signature`,type:`object`,raw:`{
  readonly __brand: 'ISODateTimeString';
}`,signature:{properties:[{key:`__brand`,value:{name:`literal`,value:`'ISODateTimeString'`,required:!0}}]}}]},description:`Maximum selectable datetime in ISO format.
Constrains both date and time selection.`},dateConstraints:{required:!1,tsType:{name:`ReadonlyArray`,elements:[{name:`signature`,type:`function`,raw:`(date: Date) => boolean`,signature:{arguments:[{type:{name:`Date`},name:`date`}],return:{name:`boolean`}}}],raw:`ReadonlyArray<(date: Date) => boolean>`},description:`Custom date constraint functions.
Date is disabled in the calendar if ANY function returns false.`},hasSeconds:{required:!1,tsType:{name:`boolean`},description:`Whether to include seconds in the time portion.
@default false`,defaultValue:{value:`false`,computed:!1}},hourFormat:{required:!1,tsType:{name:`union`,raw:`'12h' | '24h'`,elements:[{name:`literal`,value:`'12h'`},{name:`literal`,value:`'24h'`}]},description:`Hour display format.
@default '12h'`,defaultValue:{value:`'12h'`,computed:!1}},timeIncrement:{required:!1,tsType:{name:`union`,raw:`1 | 5 | 10 | 15 | 30`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`5`},{name:`literal`,value:`10`},{name:`literal`,value:`15`},{name:`literal`,value:`30`}]},description:`Minutes added or subtracted when stepping the time field with the arrow
keys. Constrained to a set of sensible increments.
@default 1`,defaultValue:{value:`1`,computed:!1}},hasClear:{required:!1,tsType:{name:`boolean`},description:`Whether to show a clear button when a value is set.
@default false`,defaultValue:{value:`false`,computed:!1}},placeholder:{required:!1,tsType:{name:`string`},description:`Placeholder text shown in the date portion when no date is selected.
@default "Select a date"`},timePlaceholder:{required:!1,tsType:{name:`string`},description:`Placeholder text shown in the time portion when no time is selected.
@default "Select a time"`},timeLabel:{required:!1,tsType:{name:`string`},description:`Accessible label for the time portion of the field. Defaults to
\`"{label} time"\` so it is tied to the field's own label and localizable,
rather than a hardcoded English "Time".`},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:`The size of the inputs.
@default 'md'`},status:{required:!1,tsType:{name:`InputStatus`},description:`Status indicator for the input.`},width:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:"Width of the field. Numbers are treated as pixels, strings are used as-is\n(e.g. `'100%'`). Sizes the whole field (label, control, and status) so they\nstay aligned, unlike setting width via `xstyle`/`className`/`style`."},labelTooltip:{required:!1,tsType:{name:`string`},description:`Tooltip text to display in an info icon at the end of the label.`},numberOfMonths:{required:!1,tsType:{name:`union`,raw:`1 | 2`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`}]},description:`Number of months to display in the calendar.
@default 1`,defaultValue:{value:`1`,computed:!1}}},composes:[`Omit`]}})))()}var _,v,Ve,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{_=t(),Be(),v=c(),Ve={title:`Core/DateTimeInput`,component:m,tags:[`autodocs`],argTypes:{label:{control:`text`,description:`Label text (required)`},isLabelHidden:{control:`boolean`,description:`Visually hide the label (still accessible to screen readers)`},placeholder:{control:`text`,description:`Placeholder text`},description:{control:`text`,description:`Description text displayed between the label and input`},isOptional:{control:`boolean`,description:`Whether the field is optional (mutually exclusive with isRequired)`},isRequired:{control:`boolean`,description:`Whether the field is required (mutually exclusive with isOptional)`},isDisabled:{control:`boolean`,description:`Whether the input is disabled`},disabledMessage:{control:`text`,description:`Explains why the input is disabled. With isDisabled, shows a tooltip on hover/keyboard focus and keeps the field focusable via aria-disabled (activation stays blocked). Use this instead of wrapping a disabled DateTimeInput in Tooltip.`},size:{control:`radio`,options:[`sm`,`md`,`lg`]},hourFormat:{control:`radio`,options:[`12h`,`24h`],description:`Hour format for display`},hasSeconds:{control:`boolean`,description:`Whether to include seconds in the time`},hasClear:{control:`boolean`,description:`Whether to show a clear button`},numberOfMonths:{control:`radio`,options:[1,2],description:`Number of months to display in calendar`},timeIncrement:{control:`number`,description:`Minutes to increment/decrement with arrow keys`}}},y={render:e=>{let[t,n]=(0,_.useState)(void 0);return(0,v.jsx)(m,{...e,value:t,onChange:n})},args:{label:`Meeting time`,placeholder:`Select a date`}},b={render:e=>{let[t,n]=(0,_.useState)(`2026-03-15T14:30`);return(0,v.jsx)(m,{...e,value:t,onChange:n})},args:{label:`Event time`}},x={render:e=>{let[t,n]=(0,_.useState)(`2026-03-15T14:30`);return(0,v.jsx)(m,{...e,value:t,onChange:n})},args:{label:`Appointment`,hourFormat:`24h`}},S={render:e=>{let[t,n]=(0,_.useState)(`2026-03-15T14:30:45`);return(0,v.jsx)(m,{...e,value:t,onChange:n})},args:{label:`Log timestamp`,hasSeconds:!0}},C={render:e=>{let[t,n]=(0,_.useState)(void 0);return(0,v.jsx)(m,{...e,value:t,onChange:n})},args:{label:`Deadline`,description:`When is this task due?`,placeholder:`Select deadline`}},w={render:e=>{let[t,n]=(0,_.useState)(`2026-03-15T09:00`);return(0,v.jsx)(m,{...e,value:t,onChange:n})},args:{label:`Start time`,hasClear:!0}},T={render:e=>{let[t,n]=(0,_.useState)(void 0);return(0,v.jsx)(m,{...e,value:t,onChange:n})},args:{label:`Appointment`,min:`2026-03-15T09:00`,max:`2026-03-15T17:00`,description:`Available: Mar 15, 9 AM - 5 PM`}},E={render:e=>{let[t,n]=(0,_.useState)(`2026-03-15T09:00`);return(0,v.jsx)(m,{...e,value:t,onChange:n})},args:{label:`Time slot`,timeIncrement:15,description:`Use arrow keys to change by 15 minutes`}},D={render:e=>{let[t,n]=(0,_.useState)(void 0);return(0,v.jsx)(m,{...e,value:t,onChange:n})},args:{label:`Preferred time`,isOptional:!0,placeholder:`Select a date (optional)`}},O={render:e=>{let[t,n]=(0,_.useState)(void 0);return(0,v.jsx)(m,{...e,value:t,onChange:n})},args:{label:`Start time`,isRequired:!0}},k={render:e=>{let[t,n]=(0,_.useState)(`2026-03-15T10:00`);return(0,v.jsx)(m,{...e,value:t,onChange:n})},args:{label:`Locked time`,isDisabled:!0}},A={render:e=>{let[t,n]=(0,_.useState)(void 0);return(0,v.jsx)(m,{...e,value:t,onChange:n})},args:{label:`Meeting time`,isDisabled:!0,disabledMessage:`You need the Editor role to change this`}},j={render:()=>{let[e,t]=(0,_.useState)(void 0),[n,r]=(0,_.useState)(void 0),[i,ee]=(0,_.useState)(void 0);return(0,v.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,maxWidth:`460px`},children:[(0,v.jsx)(m,{label:`Small (28px)`,value:e,onChange:t,placeholder:`Small size`,size:`sm`}),(0,v.jsx)(m,{label:`Medium (32px)`,value:n,onChange:r,placeholder:`Medium size (default)`,size:`md`}),(0,v.jsx)(m,{label:`Large (36px)`,value:i,onChange:ee,placeholder:`Large size`,size:`lg`})]})}},M={render:e=>{let[t,n]=(0,_.useState)(void 0);return(0,v.jsx)(m,{...e,value:t,onChange:n})},args:{label:`Travel departure`,numberOfMonths:2}},N={render:e=>{let[t,n]=(0,_.useState)(`2026-03-15T14:30`);return(0,v.jsx)(m,{...e,value:t,onChange:n})},args:{label:`Event time`,status:{type:`error`,message:`This time slot is not available`}}},P={render:e=>{let[t,n]=(0,_.useState)(`2026-03-15T07:00`);return(0,v.jsx)(m,{...e,value:t,onChange:n})},args:{label:`Meeting time`,status:{type:`warning`,message:`Early morning meeting - are you sure?`}}},F={render:e=>{let[t,n]=(0,_.useState)(`2026-03-15T10:00`);return(0,v.jsx)(m,{...e,value:t,onChange:n})},args:{label:`Scheduled time`,status:{type:`success`,message:`Time slot is available`}}},I={render:()=>{let[e,t]=(0,_.useState)(void 0),[n,r]=(0,_.useState)(`2026-03-15T14:30`),[i,ee]=(0,_.useState)(`2026-03-15T14:30`),[te,ne]=(0,_.useState)(void 0),[re,ie]=(0,_.useState)(`2026-03-15T10:00`),[a,ae]=(0,_.useState)(`2026-03-15T22:00`);return(0,v.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,maxWidth:`460px`},children:[(0,v.jsx)(m,{label:`Default`,value:e,onChange:t,placeholder:`Select a date`}),(0,v.jsx)(m,{label:`With value (12h)`,value:n,onChange:r}),(0,v.jsx)(m,{label:`24-hour format`,value:i,onChange:ee,hourFormat:`24h`}),(0,v.jsx)(m,{label:`With description`,description:`Pick your preferred datetime`,value:te,onChange:ne}),(0,v.jsx)(m,{label:`Disabled`,isDisabled:!0,value:re,onChange:ie}),(0,v.jsx)(m,{label:`With error`,value:a,onChange:ae,status:{type:`error`,message:`Invalid datetime selection`}})]})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>(undefined);
    return <DateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Meeting time',
    placeholder: 'Select a date'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>('2026-03-15T14:30' as ISODateTimeString);
    return <DateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Event time'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>('2026-03-15T14:30' as ISODateTimeString);
    return <DateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Appointment',
    hourFormat: '24h'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>('2026-03-15T14:30:45' as ISODateTimeString);
    return <DateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Log timestamp',
    hasSeconds: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>(undefined);
    return <DateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Deadline',
    description: 'When is this task due?',
    placeholder: 'Select deadline'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>('2026-03-15T09:00' as ISODateTimeString);
    return <DateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Start time',
    hasClear: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>(undefined);
    return <DateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Appointment',
    min: '2026-03-15T09:00' as ISODateTimeString,
    max: '2026-03-15T17:00' as ISODateTimeString,
    description: 'Available: Mar 15, 9 AM - 5 PM'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>('2026-03-15T09:00' as ISODateTimeString);
    return <DateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Time slot',
    timeIncrement: 15,
    description: 'Use arrow keys to change by 15 minutes'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>(undefined);
    return <DateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Preferred time',
    isOptional: true,
    placeholder: 'Select a date (optional)'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>(undefined);
    return <DateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Start time',
    isRequired: true
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>('2026-03-15T10:00' as ISODateTimeString);
    return <DateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Locked time',
    isDisabled: true
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>(undefined);
    return <DateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Meeting time',
    isDisabled: true,
    disabledMessage: 'You need the Editor role to change this'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sm, setSm] = useState<ISODateTimeString | undefined>(undefined);
    const [md, setMd] = useState<ISODateTimeString | undefined>(undefined);
    const [lg, setLg] = useState<ISODateTimeString | undefined>(undefined);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '460px'
    }}>
        <DateTimeInput label="Small (28px)" value={sm} onChange={setSm} placeholder="Small size" size="sm" />
        <DateTimeInput label="Medium (32px)" value={md} onChange={setMd} placeholder="Medium size (default)" size="md" />
        <DateTimeInput label="Large (36px)" value={lg} onChange={setLg} placeholder="Large size" size="lg" />
      </div>;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>(undefined);
    return <DateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Travel departure',
    numberOfMonths: 2
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>('2026-03-15T14:30' as ISODateTimeString);
    return <DateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Event time',
    status: {
      type: 'error',
      message: 'This time slot is not available'
    }
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>('2026-03-15T07:00' as ISODateTimeString);
    return <DateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Meeting time',
    status: {
      type: 'warning',
      message: 'Early morning meeting - are you sure?'
    }
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>('2026-03-15T10:00' as ISODateTimeString);
    return <DateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Scheduled time',
    status: {
      type: 'success',
      message: 'Time slot is available'
    }
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState<ISODateTimeString | undefined>(undefined);
    const [value2, setValue2] = useState<ISODateTimeString | undefined>('2026-03-15T14:30' as ISODateTimeString);
    const [value3, setValue3] = useState<ISODateTimeString | undefined>('2026-03-15T14:30' as ISODateTimeString);
    const [value4, setValue4] = useState<ISODateTimeString | undefined>(undefined);
    const [value5, setValue5] = useState<ISODateTimeString | undefined>('2026-03-15T10:00' as ISODateTimeString);
    const [value6, setValue6] = useState<ISODateTimeString | undefined>('2026-03-15T22:00' as ISODateTimeString);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '460px'
    }}>
        <DateTimeInput label="Default" value={value1} onChange={setValue1} placeholder="Select a date" />
        <DateTimeInput label="With value (12h)" value={value2} onChange={setValue2} />
        <DateTimeInput label="24-hour format" value={value3} onChange={setValue3} hourFormat="24h" />
        <DateTimeInput label="With description" description="Pick your preferred datetime" value={value4} onChange={setValue4} />
        <DateTimeInput label="Disabled" isDisabled value={value5} onChange={setValue5} />
        <DateTimeInput label="With error" value={value6} onChange={setValue6} status={{
        type: 'error',
        message: 'Invalid datetime selection'
      }} />
      </div>;
  }
}`,...I.parameters?.docs?.source}}},L=[`Default`,`WithValue`,`TwentyFourHourFormat`,`WithSeconds`,`WithDescription`,`WithClearButton`,`WithMinMax`,`WithTimeIncrement`,`Optional`,`Required`,`Disabled`,`DisabledWithMessage`,`SizeVariants`,`TwoMonthCalendar`,`WithErrorStatus`,`WithWarningStatus`,`WithSuccessStatus`,`AllVariations`]})))()}R();export{I as AllVariations,y as Default,k as Disabled,A as DisabledWithMessage,D as Optional,O as Required,j as SizeVariants,x as TwentyFourHourFormat,M as TwoMonthCalendar,w as WithClearButton,C as WithDescription,N as WithErrorStatus,T as WithMinMax,S as WithSeconds,F as WithSuccessStatus,E as WithTimeIncrement,b as WithValue,P as WithWarningStatus,L as __namedExportsOrder,Ve as default};