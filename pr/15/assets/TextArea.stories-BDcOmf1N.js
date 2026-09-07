import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./stylex-Dft6gtPK.js";import{n as i}from"./mergeProps-JRyAvMxc.js";import{n as a}from"./mergeRefs-CPqjs56a.js";import{n as o,t as s}from"./themeProps-DRQoVAIO.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as ee,t as l}from"./useTooltip-Dj0O-S6V.js";import{n as u,t as d}from"./Spinner-rxpquZFT.js";import{n as f,t as p}from"./VisuallyHidden-BulQ9XDQ.js";import{n as m,r as h}from"./SizeContext-Dp2usO2O.js";import{n as g,r as te,t as ne}from"./Icon-D9gPeCUm.js";import{n as re,t as ie}from"./useInputContainer-DPdFoQUo.js";import{n as _,t as ae}from"./Field-Cedy3QPa.js";import{a as oe,i as se,n as ce,r as le,t as v}from"./inputStyles.stylex-BqCW_evI.js";import{n as y,t as ue}from"./TextInput-PGxUzi-S.js";import{i as de,n as fe,r as pe,t as b}from"./PencilSquareIcon-BKDZE26W.js";import{n as me,t as x}from"./DocumentTextIcon-dAtzgXPS.js";function S({label:e,isLabelHidden:t=!1,description:r,isOptional:s=!1,isRequired:c=!1,onChange:l,changeAction:u,isLoading:f=!1,value:m,placeholder:g,rows:ie=3,isDisabled:_=!1,disabledMessage:v,status:y,labelTooltip:ue,startIcon:de,hasSpellCheck:fe=!0,onPaste:pe,maxLength:b,hasAutoFocus:me=!1,size:x,htmlName:S,onFocus:T,onBlur:E,width:D,xstyle:O,className:k,style:A,ref:j,...M}){let N=h(x,`md`),P=(0,C.useId)(),F=(0,C.useId)(),I=(0,C.useId)(),L=(0,C.useId)(),R=(0,C.useRef)(null),z=(0,C.useRef)(null),[,B]=(0,C.useTransition)(),[V,H]=(0,C.useOptimistic)(m),U=f||V!==m,W=_&&!!v,G=ee({placement:`above`,focusTrigger:`always`,isEnabled:W}),K={warning:`warning`,error:`error`,success:`success`},q={warning:`warning`,error:`error`,success:`success`},J=[r?F:null,y?.message?I:null,b==null?null:L,W?G.describedBy:null].filter(Boolean).join(` `)||void 0,Y=e=>{if(_)return;let t=e.target.value;l?.(t,e),u&&!e.defaultPrevented&&B(async()=>{H(t),await u(t,e)})},X=_||U,{onClick:Z,onMouseUp:Q}=re({containerRef:z,inputRef:R,disabled:X});return(0,w.jsxs)(ae,{label:e,isLabelHidden:t,description:r,inputID:P,descriptionID:r?F:void 0,isOptional:s,isRequired:c,isDisabled:_,status:y?{type:y.type,message:y.message,messageID:y.message?I:void 0}:void 0,labelTooltip:ue,width:D,children:[(0,w.jsxs)(`div`,{ref:e=>{z.current=e,G.ref(e)},onClick:Z,onMouseUp:Q,...i(o(`textarea`,{size:N,status:y?.type??null}),n(oe.base,ge.wrapper,_e[N],X&&oe.disabled,y&&ce[y.type],y&&se[y.type],y&&le[y.type],O),k,A),children:[de&&te(de,{size:`sm`,color:`secondary`}),(0,w.jsx)(`textarea`,{...M,ref:a(j,R),id:P,name:S,value:V,onChange:Y,onPaste:pe,onFocus:T,onBlur:E,placeholder:g,rows:ie,disabled:_&&!W,"aria-disabled":W?`true`:void 0,readOnly:W||void 0,spellCheck:fe,autoFocus:me,"data-autofocus":me||void 0,"aria-describedby":J,"aria-required":c&&!s?`true`:void 0,"aria-invalid":y?.type===`error`||b!=null&&V.length>b?`true`:void 0,"aria-busy":U||void 0,...{0:{className:`khameleon1lliihq khameleon98rzlu khameleoneuugli khameleonc342km khameleonng3xce khameleon1717udv khameleon9ynric khameleonjm74w1 khameleon6pjikd khameleonw6l6zx khameleon1tgivj0 khameleonjbqb8w khameleon1a2a7pz khameleoneyghm5 khameleon288g5`},2:{className:`khameleon1lliihq khameleon98rzlu khameleoneuugli khameleonc342km khameleonng3xce khameleon1717udv khameleon9ynric khameleonjm74w1 khameleon6pjikd khameleonw6l6zx khameleon1tgivj0 khameleonjbqb8w khameleon1a2a7pz khameleoneyghm5 khameleon288g5 khameleon1h6gzvc`},1:{className:`khameleon1lliihq khameleon98rzlu khameleoneuugli khameleonc342km khameleonng3xce khameleon1717udv khameleon9ynric khameleonjm74w1 khameleon6pjikd khameleonw6l6zx khameleon1tgivj0 khameleonjbqb8w khameleon1a2a7pz khameleoneyghm5 khameleon288g5 khameleon1we12cn`},3:{className:`khameleon1lliihq khameleon98rzlu khameleoneuugli khameleonc342km khameleonng3xce khameleon1717udv khameleon9ynric khameleonjm74w1 khameleon6pjikd khameleonw6l6zx khameleon1tgivj0 khameleonjbqb8w khameleon1a2a7pz khameleoneyghm5 khameleon288g5 khameleon1h6gzvc khameleon1we12cn`}}[!!X<<1|!!y<<0]}),U&&(0,w.jsx)(d,{size:`sm`}),y&&(0,w.jsx)(`span`,{className:`khameleon10l6tqk khameleonctzyg khameleon72tfeb khameleon47corl khameleon78zum5`,children:(0,w.jsx)(ne,{icon:K[y.type],size:`md`,color:q[y.type]})})]}),b!=null&&(0,w.jsxs)(`div`,{id:L,...{0:{className:`khameleon78zum5 khameleon13a6bvl khameleoncsaf9d khameleon9ynric khameleon141an7d khameleonv1l7n4`},1:{className:`khameleon78zum5 khameleon13a6bvl khameleoncsaf9d khameleon9ynric khameleon141an7d khameleonjt36v0`}}[(V.length>b)<<0],children:[V.length,`/`,b,(0,w.jsx)(p,{"aria-live":`polite`,children:V.length>=b*he?V.length>b?`${V.length-b} characters over limit`:`${b-V.length} characters remaining`:``})]}),W&&G.renderTooltip(v)]})}var C,w,he,ge,_e;function T(){return(T=e((()=>{C=t(),r(),_(),v(),g(),u(),l(),ie(),m(),s(),f(),w=c(),he=.8,ge={wrapper:{kY2c9j:`khameleon1vjfegm`,kGNEyG:`khameleon1cy8zhl`,k8WAf4:`khameleonu0wf1k`,kLKAdn:null,kGO01o:null,$$css:!0}},_e={sm:{$$css:!0},md:{$$css:!0},lg:{k8WAf4:`khameleonce4md1`,kLKAdn:null,kGO01o:null,$$css:!0}},S.displayName=`TextArea`,S.__docgenInfo={description:`A multi-line text input component for collecting longer user input.

@example
\`\`\`
<TextArea label="Description" value={description} onChange={setDescription} />
<TextArea label="Notes" rows={5} value={notes} onChange={setNotes} />
\`\`\``,methods:[],displayName:`TextArea`,props:{ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLTextAreaElement>`,elements:[{name:`HTMLTextAreaElement`}]},description:`Ref forwarded to the root element`},label:{required:!0,tsType:{name:`string`},description:`Label text for the textarea (always rendered for accessibility).`},isLabelHidden:{required:!1,tsType:{name:`boolean`},description:`Whether to visually hide the label (still accessible to screen readers).
@default false`,defaultValue:{value:`false`,computed:!1}},description:{required:!1,tsType:{name:`string`},description:`Description text displayed between the label and textarea.`},isOptional:{required:!1,tsType:{name:`boolean`},description:`Whether the field is optional. Mutually exclusive with isRequired.
@default false`,defaultValue:{value:`false`,computed:!1}},isRequired:{required:!1,tsType:{name:`boolean`},description:`Whether the field is required. Mutually exclusive with isOptional.
@default false`,defaultValue:{value:`false`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string, e: ChangeEvent<HTMLTextAreaElement>) => void`,signature:{arguments:[{type:{name:`string`},name:`value`},{type:{name:`ChangeEvent`,elements:[{name:`HTMLTextAreaElement`}],raw:`ChangeEvent<HTMLTextAreaElement>`},name:`e`}],return:{name:`void`}}},description:`Callback fired when the textarea value changes.`},changeAction:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(
  value: string,
  e: ChangeEvent<HTMLTextAreaElement>,
) => void | Promise<void>`,signature:{arguments:[{type:{name:`string`},name:`value`},{type:{name:`ChangeEvent`,elements:[{name:`HTMLTextAreaElement`}],raw:`ChangeEvent<HTMLTextAreaElement>`},name:`e`}],return:{name:`union`,raw:`void | Promise<void>`,elements:[{name:`void`},{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`}]}}},description:`Async action on change. Fires after onChange if not prevented.`},isLoading:{required:!1,tsType:{name:`boolean`},description:`Whether the input is in a loading state. @default false`,defaultValue:{value:`false`,computed:!1}},value:{required:!0,tsType:{name:`string`},description:`The current value of the textarea.`},placeholder:{required:!1,tsType:{name:`string`},description:`Placeholder text shown when the textarea is empty.`},rows:{required:!1,tsType:{name:`number`},description:`The number of visible text rows.
@default 3`,defaultValue:{value:`3`,computed:!1}},isDisabled:{required:!1,tsType:{name:`boolean`},description:`Whether the textarea is disabled.
@default false`,defaultValue:{value:`false`,computed:!1}},disabledMessage:{required:!1,tsType:{name:`string`},description:`Explains why the textarea is disabled. When set together with
\`isDisabled\`, the textarea shows a tooltip with this text on hover and
keyboard focus, and stays focusable (via \`aria-disabled\`) so the reason is
discoverable by keyboard and assistive technology. The field cannot be
edited (it becomes read-only) while disabled.

Use this instead of wrapping a disabled textarea in \`Tooltip\` — disabled
controls don't emit the pointer events an external tooltip needs.

@example
\`\`\`
<TextArea
  label="Notes"
  value={notes}
  isDisabled
  disabledMessage="Notes are locked after submission"
/>
\`\`\``},status:{required:!1,tsType:{name:`TextAreaStatus`},description:`Status indicator for the textarea.
When set, displays a colored border and status icon.
If message is provided, displays a floating message box below the textarea.`},width:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:"Width of the field. Numbers are treated as pixels, strings are used as-is\n(e.g. `'100%'`). Sizes the whole field (label, control, and status) so they\nstay aligned, unlike setting width via `xstyle`/`className`/`style`."},labelTooltip:{required:!1,tsType:{name:`string`},description:`Tooltip text to display in an info icon at the end of the label.`},startIcon:{required:!1,tsType:{name:`union`,raw:`ReactNode | IconType`,elements:[{name:`ReactNode`},{name:`ComponentType`,elements:[{name:`SVGProps`,elements:[{name:`SVGSVGElement`}],raw:`SVGProps<SVGSVGElement>`}],raw:`ComponentType<SVGProps<SVGSVGElement>>`}]},description:"Icon to display at the start of the textarea.\nAccepts a ReactNode (e.g. `<Icon icon={SearchIcon} />`) or an SVG icon component directly."},hasSpellCheck:{required:!1,tsType:{name:`boolean`},description:`Whether to enable browser spell checking.
@default true`,defaultValue:{value:`true`,computed:!1}},onPaste:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(e: ClipboardEvent<HTMLTextAreaElement>) => void`,signature:{arguments:[{type:{name:`ClipboardEvent`,elements:[{name:`HTMLTextAreaElement`}],raw:`ClipboardEvent<HTMLTextAreaElement>`},name:`e`}],return:{name:`void`}}},description:`Callback fired when content is pasted into the textarea.`},maxLength:{required:!1,tsType:{name:`number`},description:`Maximum number of characters allowed.
When set, displays a character counter below the textarea.
Does not enforce the limit natively — the counter shows error styling
when exceeded, and the consumer can validate via onChange.`},hasAutoFocus:{required:!1,tsType:{name:`boolean`},description:`Whether to automatically focus the textarea on mount.
@default false`,defaultValue:{value:`false`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:`The size of the textarea, affecting internal padding.
Height is controlled by \`rows\`, not size.
@default 'md'`},htmlName:{required:!1,tsType:{name:`string`},description:`The HTML name attribute for the textarea.
Useful for form submissions.`},onFocus:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(e: FocusEvent<HTMLTextAreaElement>) => void`,signature:{arguments:[{type:{name:`FocusEvent`,elements:[{name:`HTMLTextAreaElement`}],raw:`FocusEvent<HTMLTextAreaElement>`},name:`e`}],return:{name:`void`}}},description:`Callback fired when the textarea receives focus.`},onBlur:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(e: FocusEvent<HTMLTextAreaElement>) => void`,signature:{arguments:[{type:{name:`FocusEvent`,elements:[{name:`HTMLTextAreaElement`}],raw:`FocusEvent<HTMLTextAreaElement>`},name:`e`}],return:{name:`void`}}},description:`Callback fired when the textarea loses focus.`}},composes:[`Omit`]}})))()}var E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,ve;function ye(){return(ye=e((()=>{E=t(),T(),y(),me(),de(),fe(),D=c(),O={title:`Core/TextArea`,component:S,tags:[`autodocs`],argTypes:{label:{control:`text`,description:`Label text (required)`},isLabelHidden:{control:`boolean`,description:`Visually hide the label (still accessible to screen readers)`},placeholder:{control:`text`,description:`Placeholder text`},description:{control:`text`,description:`Description text displayed between the label and textarea`},value:{control:`text`,description:`Current textarea value (required)`},isOptional:{control:`boolean`,description:`Whether the field is optional (mutually exclusive with isRequired)`},isRequired:{control:`boolean`,description:`Whether the field is required (mutually exclusive with isOptional)`},rows:{control:`number`,description:`Number of visible text rows (default: 3)`},isDisabled:{control:`boolean`,description:`Whether the textarea is disabled`},disabledMessage:{control:`text`,description:`Explains why the textarea is disabled. With isDisabled, shows a tooltip on hover/keyboard focus and keeps the textarea focusable via aria-disabled (the field becomes read-only). Use this instead of wrapping a disabled TextArea in Tooltip.`},status:{control:`object`,description:`Status indicator with type (warning/error/success) and optional message`},labelTooltip:{control:`text`,description:`Tooltip text to display in an info icon at the end of the label`},hasSpellCheck:{control:`boolean`,description:`Whether to enable browser spell checking (default: true)`},maxLength:{control:`number`,description:`Maximum number of characters allowed. Displays a counter when set.`},size:{control:`radio`,options:[`sm`,`md`,`lg`],description:`Textarea size (affects padding, not height)`}}},k={render:e=>{let[t,n]=(0,E.useState)(e.value??``);return(0,D.jsx)(S,{...e,value:t,onChange:n})},args:{label:`Description`,placeholder:`Enter a description...`}},A={render:e=>{let[t,n]=(0,E.useState)(e.value??``);return(0,D.jsx)(S,{...e,value:t,onChange:n})},args:{label:`Bio`,description:`Tell us about yourself in a few sentences.`,placeholder:`Write your bio here...`}},j={render:e=>{let[t,n]=(0,E.useState)(e.value??``);return(0,D.jsx)(S,{...e,value:t,onChange:n})},args:{label:`Comments`,isLabelHidden:!0,placeholder:`Add a comment...`}},M={render:e=>{let[t,n]=(0,E.useState)(e.value??`This is a pre-filled textarea with some content that demonstrates how the component handles existing text.`);return(0,D.jsx)(S,{...e,value:t,onChange:n})},args:{label:`Notes`,value:`This is a pre-filled textarea with some content that demonstrates how the component handles existing text.`}},N={render:e=>{let[t,n]=(0,E.useState)(e.value??``);return(0,D.jsx)(S,{...e,value:t,onChange:n})},args:{label:`Message`,rows:6,placeholder:`Write a longer message...`}},P={render:()=>{let[e,t]=(0,E.useState)(``),[n,r]=(0,E.useState)(``),[i,a]=(0,E.useState)(`Pre-filled content in the textarea.`),[o,s]=(0,E.useState)(``),[c,ee]=(0,E.useState)(``),[l,u]=(0,E.useState)(``),[d,f]=(0,E.useState)(``),[p,m]=(0,E.useState)(``),[h,g]=(0,E.useState)(`This field is disabled`);return(0,D.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,maxWidth:`400px`},children:[(0,D.jsx)(S,{label:`Visible label`,value:e,onChange:t,placeholder:`Enter text...`}),(0,D.jsx)(S,{label:`With description`,description:`Helpful description text`,value:o,onChange:s,placeholder:`Enter text...`}),(0,D.jsx)(S,{label:`Hidden label`,isLabelHidden:!0,value:n,onChange:r,placeholder:`Hidden label textarea`}),(0,D.jsx)(S,{label:`With value`,value:i,onChange:a}),(0,D.jsx)(S,{label:`Optional field`,isOptional:!0,value:c,onChange:ee,placeholder:`Optional...`}),(0,D.jsx)(S,{label:`Required field`,isRequired:!0,value:l,onChange:u,placeholder:`Required...`}),(0,D.jsx)(S,{label:`Description with optional`,description:`Additional notes`,isOptional:!0,value:d,onChange:f,placeholder:`Notes...`}),(0,D.jsx)(S,{label:`Custom rows (6)`,rows:6,value:p,onChange:m,placeholder:`Larger textarea...`}),(0,D.jsx)(S,{label:`Disabled field`,isDisabled:!0,value:h,onChange:g})]})}},F={render:e=>{let[t,n]=(0,E.useState)(e.value??``);return(0,D.jsx)(S,{...e,value:t,onChange:n})},args:{label:`Additional Notes`,isOptional:!0,placeholder:`Any additional notes...`}},I={render:e=>{let[t,n]=(0,E.useState)(e.value??``);return(0,D.jsx)(S,{...e,value:t,onChange:n})},args:{label:`Feedback`,isRequired:!0,placeholder:`Please provide your feedback...`}},L={render:e=>{let[t,n]=(0,E.useState)(e.value??``);return(0,D.jsx)(S,{...e,value:t,onChange:n})},args:{label:`Comments`,description:`Share any additional thoughts or comments`,isOptional:!0,placeholder:`Your comments here...`}},R={render:e=>{let[t,n]=(0,E.useState)(e.value??`This textarea is disabled and cannot be edited.`);return(0,D.jsx)(S,{...e,value:t,onChange:n})},args:{label:`Disabled Field`,isDisabled:!0,value:`This textarea is disabled and cannot be edited.`}},z={render:e=>{let[t,n]=(0,E.useState)(e.value??`These notes are locked after submission.`);return(0,D.jsx)(S,{...e,value:t,onChange:n})},args:{label:`Notes`,isDisabled:!0,disabledMessage:`Notes are locked after submission`,value:`These notes are locked after submission.`}},B={render:e=>{let[t,n]=(0,E.useState)(e.value??``);return(0,D.jsx)(S,{...e,value:t,onChange:n})},args:{label:`Notes`,placeholder:`Enter your notes...`,startIcon:x}},V={render:()=>{let[e,t]=(0,E.useState)(``),[n,r]=(0,E.useState)(``),[i,a]=(0,E.useState)(``);return(0,D.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,maxWidth:`400px`},children:[(0,D.jsx)(S,{label:`Notes`,value:e,onChange:t,placeholder:`Enter your notes...`,startIcon:x}),(0,D.jsx)(S,{label:`Message`,value:n,onChange:r,placeholder:`Type your message...`,startIcon:pe}),(0,D.jsx)(S,{label:`Draft`,value:i,onChange:a,placeholder:`Write your draft...`,startIcon:b})]})}},H={render:e=>{let[t,n]=(0,E.useState)(e.value??`Too short`);return(0,D.jsx)(S,{...e,value:t,onChange:n})},args:{label:`Description`,placeholder:`Enter a description...`,status:{type:`error`,message:`Description must be at least 50 characters`}}},U={render:e=>{let[t,n]=(0,E.useState)(e.value??`This content may contain issues`);return(0,D.jsx)(S,{...e,value:t,onChange:n})},args:{label:`Content`,placeholder:`Enter content...`,status:{type:`warning`,message:`Content may need review before publishing`}}},W={render:e=>{let[t,n]=(0,E.useState)(e.value??`This is a valid description that meets all requirements.`);return(0,D.jsx)(S,{...e,value:t,onChange:n})},args:{label:`Description`,placeholder:`Enter a description...`,status:{type:`success`,message:`Description looks good!`}}},G={render:e=>{let[t,n]=(0,E.useState)(e.value??`Invalid content`);return(0,D.jsx)(S,{...e,value:t,onChange:n})},args:{label:`Field`,placeholder:`Enter value`,status:{type:`error`}}},K={render:()=>{let[e,t]=(0,E.useState)(`Too short`),[n,r]=(0,E.useState)(`This may need review`),[i,a]=(0,E.useState)(`This description meets all the requirements perfectly.`),[o,s]=(0,E.useState)(`Invalid`);return(0,D.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,maxWidth:`400px`},children:[(0,D.jsx)(S,{label:`Error with message`,value:e,onChange:t,status:{type:`error`,message:`Must be at least 50 characters`}}),(0,D.jsx)(S,{label:`Warning with message`,value:n,onChange:r,status:{type:`warning`,message:`Content may need review`}}),(0,D.jsx)(S,{label:`Success with message`,value:i,onChange:a,status:{type:`success`,message:`Description is valid`}}),(0,D.jsx)(S,{label:`Error without message`,value:o,onChange:s,status:{type:`error`}})]})}},q={render:e=>{let[t,n]=(0,E.useState)(e.value??``);return(0,D.jsx)(S,{...e,value:t,onChange:n})},args:{label:`API Documentation`,placeholder:`Describe your API endpoint...`,labelTooltip:`Provide a detailed description of what this API endpoint does, including expected inputs and outputs.`}},J={render:e=>{let[t,n]=(0,E.useState)(e.value??``);return(0,D.jsx)(S,{...e,value:t,onChange:n})},args:{label:`Additional Notes`,placeholder:`Any additional information...`,labelTooltip:`Include any extra details that might be helpful for reviewers.`,isOptional:!0}},Y={render:()=>{let[e,t]=(0,E.useState)(``);return(0,D.jsx)(`div`,{style:{maxWidth:`400px`},children:(0,D.jsx)(S,{label:`Detailed Description`,description:`Provide a comprehensive description of your project`,value:e,onChange:t,placeholder:`Enter description...`,startIcon:x,labelTooltip:`This description will be visible to all team members`,isRequired:!0,status:e.length>0&&e.length<20?{type:`warning`,message:`Consider adding more detail`}:e.length>=20?{type:`success`,message:`Description looks good!`}:void 0})})}},X={render:()=>{let[e,t]=(0,E.useState)(``),[n,r]=(0,E.useState)(``),[i,a]=(0,E.useState)(``),[o,s]=(0,E.useState)(``),[c,ee]=(0,E.useState)(``),[l,u]=(0,E.useState)(``);return(0,D.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[`sm`,`md`,`lg`].map((d,f)=>{let p={sm:`Small (28px)`,md:`Medium (32px)`,lg:`Large (36px)`}[d],[m,h]=[[e,t],[n,r],[i,a]][f],[g,te]=[[o,s],[c,ee],[l,u]][f];return(0,D.jsxs)(`div`,{style:{display:`flex`,gap:`16px`},children:[(0,D.jsx)(`div`,{style:{flex:1},children:(0,D.jsx)(S,{label:p,value:m,onChange:h,placeholder:`TextArea`,size:d})}),(0,D.jsx)(`div`,{style:{flex:1},children:(0,D.jsx)(ue,{label:p,value:g,onChange:te,placeholder:`TextInput`,size:d})})]},d)})})}},Z={render:e=>{let[t,n]=(0,E.useState)(e.value??``);return(0,D.jsx)(S,{...e,value:t,onChange:n})},args:{label:`Bio`,placeholder:`Tell us about yourself...`,maxLength:150}},Q={render:e=>{let[t,n]=(0,E.useState)(e.value??`This is a pre-filled bio that demonstrates the character counter.`);return(0,D.jsx)(S,{...e,value:t,onChange:n})},args:{label:`Bio`,maxLength:100}},$={render:()=>{let[e,t]=(0,E.useState)(``),[n,r]=(0,E.useState)(`Some text here`),[i,a]=(0,E.useState)(`This is a longer text that approaches the maximum length limit.`);return(0,D.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,maxWidth:`400px`},children:[(0,D.jsx)(S,{label:`Short limit`,value:e,onChange:t,placeholder:`Max 50 characters`,maxLength:50}),(0,D.jsx)(S,{label:`Medium limit`,value:n,onChange:r,placeholder:`Max 100 characters`,maxLength:100}),(0,D.jsx)(S,{label:`Long limit`,value:i,onChange:a,placeholder:`Max 200 characters`,maxLength:200})]})}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Description',
    placeholder: 'Enter a description...'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Bio',
    description: 'Tell us about yourself in a few sentences.',
    placeholder: 'Write your bio here...'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Comments',
    isLabelHidden: true,
    placeholder: 'Add a comment...'
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? 'This is a pre-filled textarea with some content that demonstrates how the component handles existing text.');
    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Notes',
    value: 'This is a pre-filled textarea with some content that demonstrates how the component handles existing text.'
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Message',
    rows: 6,
    placeholder: 'Write a longer message...'
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('Pre-filled content in the textarea.');
    const [value4, setValue4] = useState('');
    const [value5, setValue5] = useState('');
    const [value6, setValue6] = useState('');
    const [value7, setValue7] = useState('');
    const [value8, setValue8] = useState('');
    const [value9, setValue9] = useState('This field is disabled');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '400px'
    }}>
        <TextArea label="Visible label" value={value1} onChange={setValue1} placeholder="Enter text..." />
        <TextArea label="With description" description="Helpful description text" value={value4} onChange={setValue4} placeholder="Enter text..." />
        <TextArea label="Hidden label" isLabelHidden value={value2} onChange={setValue2} placeholder="Hidden label textarea" />
        <TextArea label="With value" value={value3} onChange={setValue3} />
        <TextArea label="Optional field" isOptional value={value5} onChange={setValue5} placeholder="Optional..." />
        <TextArea label="Required field" isRequired value={value6} onChange={setValue6} placeholder="Required..." />
        <TextArea label="Description with optional" description="Additional notes" isOptional value={value7} onChange={setValue7} placeholder="Notes..." />
        <TextArea label="Custom rows (6)" rows={6} value={value8} onChange={setValue8} placeholder="Larger textarea..." />
        <TextArea label="Disabled field" isDisabled value={value9} onChange={setValue9} />
      </div>;
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Additional Notes',
    isOptional: true,
    placeholder: 'Any additional notes...'
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Feedback',
    isRequired: true,
    placeholder: 'Please provide your feedback...'
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Comments',
    description: 'Share any additional thoughts or comments',
    isOptional: true,
    placeholder: 'Your comments here...'
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? 'This textarea is disabled and cannot be edited.');
    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Disabled Field',
    isDisabled: true,
    value: 'This textarea is disabled and cannot be edited.'
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? 'These notes are locked after submission.');
    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Notes',
    isDisabled: true,
    disabledMessage: 'Notes are locked after submission',
    value: 'These notes are locked after submission.'
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Notes',
    placeholder: 'Enter your notes...',
    startIcon: DocumentTextIcon
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [notes, setNotes] = useState('');
    const [message, setMessage] = useState('');
    const [draft, setDraft] = useState('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '400px'
    }}>
        <TextArea label="Notes" value={notes} onChange={setNotes} placeholder="Enter your notes..." startIcon={DocumentTextIcon} />
        <TextArea label="Message" value={message} onChange={setMessage} placeholder="Type your message..." startIcon={ChatBubbleLeftIcon} />
        <TextArea label="Draft" value={draft} onChange={setDraft} placeholder="Write your draft..." startIcon={PencilSquareIcon} />
      </div>;
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? 'Too short');
    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Description',
    placeholder: 'Enter a description...',
    status: {
      type: 'error',
      message: 'Description must be at least 50 characters'
    }
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? 'This content may contain issues');
    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Content',
    placeholder: 'Enter content...',
    status: {
      type: 'warning',
      message: 'Content may need review before publishing'
    }
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? 'This is a valid description that meets all requirements.');
    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Description',
    placeholder: 'Enter a description...',
    status: {
      type: 'success',
      message: 'Description looks good!'
    }
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? 'Invalid content');
    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Field',
    placeholder: 'Enter value',
    status: {
      type: 'error'
    }
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [error, setError] = useState('Too short');
    const [warning, setWarning] = useState('This may need review');
    const [success, setSuccess] = useState('This description meets all the requirements perfectly.');
    const [errorNoMsg, setErrorNoMsg] = useState('Invalid');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '400px'
    }}>
        <TextArea label="Error with message" value={error} onChange={setError} status={{
        type: 'error',
        message: 'Must be at least 50 characters'
      }} />
        <TextArea label="Warning with message" value={warning} onChange={setWarning} status={{
        type: 'warning',
        message: 'Content may need review'
      }} />
        <TextArea label="Success with message" value={success} onChange={setSuccess} status={{
        type: 'success',
        message: 'Description is valid'
      }} />
        <TextArea label="Error without message" value={errorNoMsg} onChange={setErrorNoMsg} status={{
        type: 'error'
      }} />
      </div>;
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'API Documentation',
    placeholder: 'Describe your API endpoint...',
    labelTooltip: 'Provide a detailed description of what this API endpoint does, including expected inputs and outputs.'
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Additional Notes',
    placeholder: 'Any additional information...',
    labelTooltip: 'Include any extra details that might be helpful for reviewers.',
    isOptional: true
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div style={{
      maxWidth: '400px'
    }}>
        <TextArea label="Detailed Description" description="Provide a comprehensive description of your project" value={value} onChange={setValue} placeholder="Enter description..." startIcon={DocumentTextIcon} labelTooltip="This description will be visible to all team members" isRequired status={value.length > 0 && value.length < 20 ? {
        type: 'warning',
        message: 'Consider adding more detail'
      } : value.length >= 20 ? {
        type: 'success',
        message: 'Description looks good!'
      } : undefined} />
      </div>;
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [smArea, setSmArea] = useState('');
    const [mdArea, setMdArea] = useState('');
    const [lgArea, setLgArea] = useState('');
    const [smInput, setSmInput] = useState('');
    const [mdInput, setMdInput] = useState('');
    const [lgInput, setLgInput] = useState('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        {(['sm', 'md', 'lg'] as const).map((sz, i) => {
        const label = {
          sm: 'Small (28px)',
          md: 'Medium (32px)',
          lg: 'Large (36px)'
        }[sz];
        const [area, setArea] = [[smArea, setSmArea], [mdArea, setMdArea], [lgArea, setLgArea]][i] as [string, (v: string) => void];
        const [input, setInput] = [[smInput, setSmInput], [mdInput, setMdInput], [lgInput, setLgInput]][i] as [string, (v: string) => void];
        return <div key={sz} style={{
          display: 'flex',
          gap: '16px'
        }}>
              <div style={{
            flex: 1
          }}>
                <TextArea label={label} value={area} onChange={setArea} placeholder="TextArea" size={sz} />
              </div>
              <div style={{
            flex: 1
          }}>
                <TextInput label={label} value={input} onChange={setInput} placeholder="TextInput" size={sz} />
              </div>
            </div>;
      })}
      </div>;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself...',
    maxLength: 150
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? 'This is a pre-filled bio that demonstrates the character counter.');
    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Bio',
    maxLength: 100
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [short, setShort] = useState('');
    const [medium, setMedium] = useState('Some text here');
    const [long, setLong] = useState('This is a longer text that approaches the maximum length limit.');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '400px'
    }}>
        <TextArea label="Short limit" value={short} onChange={setShort} placeholder="Max 50 characters" maxLength={50} />
        <TextArea label="Medium limit" value={medium} onChange={setMedium} placeholder="Max 100 characters" maxLength={100} />
        <TextArea label="Long limit" value={long} onChange={setLong} placeholder="Max 200 characters" maxLength={200} />
      </div>;
  }
}`,...$.parameters?.docs?.source}}},ve=[`Default`,`WithDescription`,`WithHiddenLabel`,`WithValue`,`CustomRows`,`AllVariations`,`OptionalField`,`RequiredField`,`DescriptionWithOptional`,`Disabled`,`DisabledWithMessage`,`WithStartIcon`,`StartIconVariations`,`ErrorStatus`,`WarningStatus`,`SuccessStatus`,`StatusWithoutMessage`,`StatusVariations`,`WithTooltip`,`TooltipWithOptional`,`CombinedFeatures`,`SizeVariants`,`WithMaxLength`,`MaxLengthWithValue`,`MaxLengthVariations`]})))()}ye();export{P as AllVariations,Y as CombinedFeatures,N as CustomRows,k as Default,L as DescriptionWithOptional,R as Disabled,z as DisabledWithMessage,H as ErrorStatus,$ as MaxLengthVariations,Q as MaxLengthWithValue,F as OptionalField,I as RequiredField,X as SizeVariants,V as StartIconVariations,K as StatusVariations,G as StatusWithoutMessage,W as SuccessStatus,J as TooltipWithOptional,U as WarningStatus,A as WithDescription,j as WithHiddenLabel,Z as WithMaxLength,B as WithStartIcon,q as WithTooltip,M as WithValue,ve as __namedExportsOrder,O as default};