import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./stylex-Dft6gtPK.js";import{n as i}from"./mergeProps-JRyAvMxc.js";import{n as a}from"./mergeRefs-CPqjs56a.js";import{n as o,t as s}from"./themeProps-DRQoVAIO.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./useTooltip-Dj0O-S6V.js";import{n as d,t as ee}from"./Spinner-rxpquZFT.js";import{n as f,t as p}from"./Icon-D9gPeCUm.js";import{n as te,t as m}from"./useTranslator-C3b4YzkD.js";import{n as ne,t as h}from"./useAnnounce-3UKvRH6i.js";import{n as g,t as re}from"./Field-Cedy3QPa.js";import{n as _,t as ie}from"./InputClearButton-Dlxh_LUn.js";function v(e){return e<1024?`${e} B`:e<1048576?`${(e/1024).toFixed(1)} KB`:`${(e/1048576).toFixed(1)} MB`}function ae(e,t,n,r,i){let a=[],o=e;if(t){let e=t.split(`,`).map(e=>e.trim().toLowerCase());o=o.filter(t=>{let n=e.some(e=>e.startsWith(`.`)?t.name.toLowerCase().endsWith(e):e.endsWith(`/*`)?t.type.startsWith(e.slice(0,-1)):t.type.toLowerCase()===e);return n||a.push(`"${t.name}" is not an accepted file type`),n})}return n!=null&&(o=o.filter(e=>e.size>n?(a.push(`"${e.name}" exceeds ${v(n)} limit`),!1):!0)),i&&r!=null&&o.length>r&&(a.push(`Maximum ${r} files allowed`),o=o.slice(0,r)),{valid:o,errors:a}}function y({label:e,isLabelHidden:t=!1,value:r,onChange:s,changeAction:c,accept:u,isMultiple:d=!1,maxSize:f,maxFiles:m,isDisabled:h=!1,disabledMessage:g,isRequired:_=!1,isLoading:v=!1,status:y,description:w,placeholder:T,mode:E=`input`,isOptional:D=!1,labelTooltip:O,width:k,xstyle:A,className:j,style:M,ref:N,...P}){let F=te(),I=(0,b.useId)(),L=(0,b.useId)(),R=(0,b.useId)(),z=(0,b.useId)(),B=(0,b.useRef)(null),[V,H]=(0,b.useState)(!1),[U,W]=(0,b.useState)(null),[,G]=(0,b.useTransition)(),oe=ne(),K=h&&!!g,q=l({placement:`above`,focusTrigger:`always`,isEnabled:K}),J=y??(U?{type:`error`,message:U}:void 0),se={warning:`warning`,error:`error`,success:`success`},ce={warning:`warning`,error:`error`,success:`success`},le=[w?L:null,J?.message?R:null,K?q.describedBy:null].filter(Boolean).join(` `)||void 0,Y=T??(d?`Choose files`:`Choose file`),X=(0,b.useCallback)(e=>{if(h)return;let{valid:t,errors:n}=ae(e,u,f,m,d);if(n.length>0?W(n[0]):W(null),t.length===0){s(null);return}let r=d?t:t[0];s(r),n.length===0&&oe(t.length===1?`1 file selected: ${t[0].name}`:`${t.length} files selected`),c&&G(async()=>{await c(r)})},[u,h,d,m,f,s,c,G,oe]),ue=(0,b.useCallback)(e=>{let t=Array.from(e.target.files??[]);X(t),B.current&&(B.current.value=``)},[X]),de=(0,b.useCallback)(e=>{e.stopPropagation(),W(null),s(null),B.current&&(B.current.value=``,B.current.focus())},[s]),fe=(0,b.useCallback)(()=>{h||B.current?.click()},[h]),pe=(0,b.useCallback)(e=>{(e.key===`Enter`||e.key===` `)&&!h&&(e.preventDefault(),B.current?.click())},[h]),me=(0,b.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),!h&&E===`dropzone`&&H(!0)},[h,E]),he=(0,b.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),!h&&E===`dropzone`&&H(!0)},[h,E]),ge=(0,b.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),!(e.relatedTarget instanceof Node&&e.currentTarget.contains(e.relatedTarget))&&H(!1)},[]),_e=(0,b.useCallback)(e=>{if(e.preventDefault(),e.stopPropagation(),H(!1),h||E!==`dropzone`)return;let t=Array.from(e.dataTransfer.files);t.length>0&&X(t)},[h,E,X]),Z=r!=null&&(!Array.isArray(r)||r.length>0),Q=Z?Array.isArray(r)?r.map(e=>e.name).join(`, `):r?.name??``:null,ve=()=>v?(0,x.jsx)(ee,{size:`md`}):Z?(0,x.jsx)(`div`,{className:`khameleon9ynric khameleonjm74w1 khameleon6pjikd khameleonw6l6zx khameleon1tgivj0 khameleonb3r6kr khameleonlyipyv khameleon98rzlu khameleoneuugli khameleon2b8uid khameleoneaf4i8`,children:Q}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(p,{icon:`arrowUp`,size:`md`,color:`secondary`}),(0,x.jsx)(`span`,{className:`khameleon9ynric khameleonjm74w1 khameleon6pjikd khameleonw6l6zx khameleonv1l7n4 khameleon2b8uid khameleon87ps6o`,children:V?`Drop files here`:Y})]}),ye=()=>v?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`span`,{className:`khameleon9ynric khameleonjm74w1 khameleon6pjikd khameleonw6l6zx khameleon1tgivj0 khameleonb3r6kr khameleonlyipyv khameleonuxw1ft khameleon98rzlu khameleoneuugli`,children:Q??Y}),(0,x.jsx)(ee,{size:`sm`})]}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(p,{icon:`arrowUp`,size:`sm`,color:`secondary`}),(0,x.jsx)(`span`,{...{0:{className:`khameleon9ynric khameleonjm74w1 khameleon6pjikd khameleonw6l6zx khameleonv1l7n4 khameleon87ps6o khameleon1yc453h khameleon98rzlu khameleoneuugli`},2:{className:`khameleon9ynric khameleonjm74w1 khameleon6pjikd khameleonw6l6zx khameleon1tgivj0 khameleonb3r6kr khameleonlyipyv khameleonuxw1ft khameleon1yc453h khameleon98rzlu khameleoneuugli`},1:{className:`khameleon9ynric khameleonjm74w1 khameleon6pjikd khameleonw6l6zx khameleonv1l7n4 khameleon87ps6o khameleon1yc453h`},3:{className:`khameleon9ynric khameleonjm74w1 khameleon6pjikd khameleonw6l6zx khameleon1tgivj0 khameleonb3r6kr khameleonlyipyv khameleonuxw1ft khameleon98rzlu khameleoneuugli khameleon1yc453h`}}[!!Z<<1|!!Z<<0],children:Q??Y}),J&&(0,x.jsx)(p,{icon:se[J.type],size:`md`,color:ce[J.type]})]}),$=E===`dropzone`,be=$?{onDragEnter:me,onDragOver:he,onDragLeave:ge,onDrop:_e}:{};return(0,x.jsxs)(re,{label:e,isLabelHidden:t,description:w,inputID:I,descriptionID:w?L:void 0,isOptional:D,isRequired:_,isDisabled:h,status:J?{type:J.type,message:J.message,messageID:J.message?R:void 0}:void 0,labelTooltip:O,width:k,children:[(0,x.jsxs)(`div`,{ref:e=>{q.ref(e)},role:`button`,tabIndex:h&&!K?-1:0,"aria-disabled":K?`true`:void 0,onClick:fe,onKeyDown:pe,"aria-label":e,"aria-busy":v||void 0,"aria-describedby":le,"aria-required":_?`true`:void 0,"aria-invalid":J?.type===`error`?`true`:void 0,...be,...i(o(`file-input`,{mode:E,status:J?.type??null}),n($?S.dropzone:S.compact,$&&!h&&S.dropzoneHover,$&&V&&S.dropzoneActive,$&&h&&S.dropzoneDisabled,!$&&h&&S.compactDisabled,J&&C[J.type],A),j,M),children:[(0,x.jsx)(`input`,{...P,ref:a(N,B),id:I,type:`file`,accept:u,multiple:d,disabled:h,onChange:ue,"aria-hidden":`true`,tabIndex:-1,className:`khameleon10l6tqk khameleon1i1rx1s khameleonjm9jq1 khameleon1717udv khameleonkdpibf khameleonb3r6kr khameleonzpqnlu khameleonuxw1ft khameleonc342km`}),$?ve():ye(),Z&&!h&&!v&&(0,x.jsx)(ie,{label:F(`@khameleon.fileInput.clearLabel`,{label:e}),onClick:de})]}),(0,x.jsx)(`div`,{id:z,role:`status`,"aria-live":`polite`,className:`khameleon10l6tqk khameleon1i1rx1s khameleonjm9jq1 khameleon1717udv khameleonkdpibf khameleonb3r6kr khameleonzpqnlu khameleonuxw1ft khameleonc342km`,children:U}),K&&q.renderTooltip(g)]})}var b,x,S,C;function w(){return(w=e((()=>{b=t(),r(),g(),_(),f(),d(),h(),u(),s(),m(),x=c(),S={dropzone:{kB7OPa:`khameleon9f619`,kVAEAm:`khameleon1n2onr6`,kY2c9j:`khameleon1vjfegm`,k1xSpc:`khameleon78zum5`,kXwgrk:`khameleondt5ytf`,kGNEyG:`khameleon6s0dn4`,kjj79g:`khameleonl56j7k`,kOIVth:`khameleon1txdalj`,k8WAf4:`khameleonq6koh6`,kg3NbH:`khameleon1pzlopt`,kMzoRj:`khameleon1litavf`,ksu8eU:`khameleonbsl7fq`,kVAM5u:`khameleonvy26l8 khameleon6q1khz`,kaIpWk:`khameleonh6dtrn`,kWkggS:`khameleon10xzikg`,k1ekBW:`khameleon1tv3a4w`,kIyJzY:`khameleonuedmi6 khameleon12w9bfk`,kAMwcw:`khameleonlr8y92`,kkrTdU:`khameleon1ypdohk`,kI3sdo:`khameleon1a2a7pz`,$$css:!0},dropzoneHover:{kGVxlE:`khameleonw6ruzt`,$$css:!0},dropzoneActive:{kVAM5u:`khameleonad5do`,kWkggS:`khameleongcxg3y`,$$css:!0},dropzoneDisabled:{kkrTdU:`khameleon1h6gzvc`,kSiTet:`khameleonbyyjgo`,kVAM5u:`khameleonvy26l8`,$$css:!0},compact:{kB7OPa:`khameleon9f619`,kVAEAm:`khameleon1n2onr6`,kY2c9j:`khameleon1vjfegm`,k1xSpc:`khameleon78zum5`,kGNEyG:`khameleon6s0dn4`,kOIVth:`khameleon1txdalj`,k8WAf4:`khameleonu0wf1k`,kg3NbH:`khameleonf314gf`,kMzoRj:`khameleon1litavf`,ksu8eU:`khameleon1y0btm7`,kVAM5u:`khameleonvy26l8 khameleon6q1khz`,kaIpWk:`khameleonh6dtrn`,kWkggS:`khameleon10xzikg`,k1ekBW:`khameleon12zzom9`,kIyJzY:`khameleonuedmi6 khameleon12w9bfk`,kAMwcw:`khameleonlr8y92`,kGVxlE:`khameleon1gnnqk1 khameleon70dsy8`,kkrTdU:`khameleon1ypdohk`,kZKoxP:`khameleon1ueg155`,kI3sdo:`khameleon1a2a7pz`,$$css:!0},compactDisabled:{kkrTdU:`khameleon1h6gzvc`,kSiTet:`khameleonbyyjgo`,kVAM5u:`khameleonvy26l8`,$$css:!0}},C={warning:{kVAM5u:`khameleon8wg1ba`,kzOINU:null,kGJrpR:null,kaZRDh:null,kBCPoo:null,k26BEO:null,k5QoK5:null,kLZC3w:null,kL6WhQ:null,$$css:!0},error:{kVAM5u:`khameleon1ofxpqo`,kzOINU:null,kGJrpR:null,kaZRDh:null,kBCPoo:null,k26BEO:null,k5QoK5:null,kLZC3w:null,kL6WhQ:null,$$css:!0},success:{kVAM5u:`khameleon16m2moy`,kzOINU:null,kGJrpR:null,kaZRDh:null,kBCPoo:null,k26BEO:null,k5QoK5:null,kLZC3w:null,kL6WhQ:null,$$css:!0}},y.displayName=`FileInput`,y.__docgenInfo={description:'A file input component with optional drag-and-drop support.\n\n@example\n```\n<FileInput label="Resume" value={file} onChange={setFile} accept=".pdf" />\n```',methods:[],displayName:`FileInput`,props:{ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},description:``},label:{required:!0,tsType:{name:`string`},description:`Accessible label for the file input.`},isLabelHidden:{required:!1,tsType:{name:`boolean`},description:`Whether to visually hide the label (still accessible to screen readers).
@default false`,defaultValue:{value:`false`,computed:!1}},value:{required:!0,tsType:{name:`union`,raw:`File | File[] | null`,elements:[{name:`File`},{name:`Array`,elements:[{name:`File`}],raw:`File[]`},{name:`null`}]},description:`Currently selected file(s). Controlled component.`},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(files: File | File[] | null) => void`,signature:{arguments:[{type:{name:`union`,raw:`File | File[] | null`,elements:[{name:`File`},{name:`Array`,elements:[{name:`File`}],raw:`File[]`},{name:`null`}]},name:`files`}],return:{name:`void`}}},description:`Callback fired when files are selected or removed.`},changeAction:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(files: File | File[] | null) => Promise<void>`,signature:{arguments:[{type:{name:`union`,raw:`File | File[] | null`,elements:[{name:`File`},{name:`Array`,elements:[{name:`File`}],raw:`File[]`},{name:`null`}]},name:`files`}],return:{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`}}},description:`Async change action (React 19 transitions pattern).
Use for immediate upload on file selection.`},accept:{required:!1,tsType:{name:`string`},description:`Accepted file types. Uses the HTML accept attribute format.
Examples: "image/*", ".pdf,.doc,.docx", "image/png,image/jpeg"`},isMultiple:{required:!1,tsType:{name:`boolean`},description:"Whether multiple files can be selected.\nWhen true, `value` and `onChange` use `File[]` instead of `File`.\n@default false",defaultValue:{value:`false`,computed:!1}},maxSize:{required:!1,tsType:{name:`number`},description:`Maximum file size in bytes. Files exceeding this are rejected
with an error status.`},maxFiles:{required:!1,tsType:{name:`number`},description:"Maximum number of files (only applies when `isMultiple` is true)."},isDisabled:{required:!1,tsType:{name:`boolean`},description:`Whether the input is disabled.
@default false`,defaultValue:{value:`false`,computed:!1}},disabledMessage:{required:!1,tsType:{name:`string`},description:`Explains why the input is disabled. When set together with \`isDisabled\`,
the file input shows a tooltip with this text on hover and keyboard focus,
and its trigger stays focusable (via \`aria-disabled\`) so the reason is
discoverable by keyboard and assistive technology. Opening the file picker
stays blocked.

Use this instead of wrapping a disabled input in \`Tooltip\` — disabled
controls don't emit the pointer events an external tooltip needs.

@example
\`\`\`
<FileInput
  label="Resume"
  value={file}
  isDisabled
  disabledMessage="Uploads are locked until your profile is verified"
/>
\`\`\``},isRequired:{required:!1,tsType:{name:`boolean`},description:`Whether the input is required.
@default false`,defaultValue:{value:`false`,computed:!1}},isLoading:{required:!1,tsType:{name:`boolean`},description:`Whether the input is in a loading state (e.g. uploading).
@default false`,defaultValue:{value:`false`,computed:!1}},status:{required:!1,tsType:{name:`InputStatus`},description:`Validation status for the input.`},description:{required:!1,tsType:{name:`string`},description:`Description text displayed below the label.`},placeholder:{required:!1,tsType:{name:`string`},description:`Placeholder text shown when no file is selected.
@default "Choose file" or "Choose files"`},mode:{required:!1,tsType:{name:`union`,raw:`'dropzone' | 'input'`,elements:[{name:`literal`,value:`'dropzone'`},{name:`literal`,value:`'input'`}]},description:`Visual mode for the file input.
- 'input': compact inline style, similar to a text input
- 'dropzone': larger area with dashed border and drag-and-drop support
@default 'input'`,defaultValue:{value:`'input'`,computed:!1}},isOptional:{required:!1,tsType:{name:`boolean`},description:`Whether the field is optional. Mutually exclusive with isRequired.
@default false`,defaultValue:{value:`false`,computed:!1}},width:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:"Width of the field. Numbers are treated as pixels, strings are used as-is\n(e.g. `'100%'`). Sizes the whole field (label, control, and status) so they\nstay aligned, unlike setting width via `xstyle`/`className`/`style`."},labelTooltip:{required:!1,tsType:{name:`string`},description:`Tooltip text to display in an info icon at the end of the label.`}},composes:[`Omit`]}})))()}var T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{T=t(),w(),E=c(),D={title:`Core/FileInput`,component:y,tags:[`autodocs`],argTypes:{label:{control:`text`,description:`Label text (required)`},isLabelHidden:{control:`boolean`,description:`Visually hide the label (still accessible to screen readers)`},placeholder:{control:`text`,description:`Placeholder text`},description:{control:`text`,description:`Description text displayed between the label and input`},accept:{control:`text`,description:`Accepted file types (e.g. "image/*", ".pdf,.doc")`},isMultiple:{control:`boolean`,description:`Whether multiple files can be selected`},isOptional:{control:`boolean`,description:`Whether the field is optional (mutually exclusive with isRequired)`},isRequired:{control:`boolean`,description:`Whether the field is required (mutually exclusive with isOptional)`},isDisabled:{control:`boolean`,description:`Whether the input is disabled`},disabledMessage:{control:`text`,description:`Explains why the input is disabled. With isDisabled, shows a tooltip on hover/keyboard focus and keeps the trigger focusable via aria-disabled (opening the file picker stays blocked). Use this instead of wrapping a disabled FileInput in Tooltip.`},isLoading:{control:`boolean`,description:`Whether the input is in a loading state`},mode:{control:`select`,options:[`input`,`dropzone`],description:`Visual mode: compact input or drag-and-drop dropzone`},status:{control:`object`,description:`Status indicator with type (warning/error/success) and optional message`},labelTooltip:{control:`text`,description:`Tooltip text to display in an info icon at the end of the label`}}},O={render:e=>{let[t,n]=(0,T.useState)(null);return(0,E.jsx)(y,{...e,value:t,onChange:n})},args:{label:`Upload file`,placeholder:`Drag files here or click to browse`}},k={render:e=>{let[t,n]=(0,T.useState)(null);return(0,E.jsx)(y,{...e,value:t,onChange:n})},args:{label:`Resume`,description:`Upload your resume in PDF or Word format. Max 5MB.`,accept:`.pdf,.doc,.docx`}},A={render:e=>{let[t,n]=(0,T.useState)(null);return(0,E.jsx)(y,{...e,value:t,onChange:n})},args:{label:`Attachments`,isMultiple:!0,description:`Upload up to 10 files. Max 5MB each.`,maxFiles:10,maxSize:5242880}},j={render:e=>{let[t,n]=(0,T.useState)(null);return(0,E.jsx)(y,{...e,value:t,onChange:n})},args:{label:`Profile photo`,accept:`image/png,image/jpeg`,description:`PNG or JPEG, max 2MB.`,maxSize:2097152}},M={render:e=>{let[t,n]=(0,T.useState)(null);return(0,E.jsx)(y,{...e,value:t,onChange:n})},args:{label:`Upload files`,mode:`dropzone`,placeholder:`Drag files here or click to browse`}},N={render:e=>{let[t,n]=(0,T.useState)(null);return(0,E.jsx)(y,{...e,value:t,onChange:n})},args:{label:`Supporting document`,isRequired:!0}},P={render:e=>{let[t,n]=(0,T.useState)(null);return(0,E.jsx)(y,{...e,value:t,onChange:n})},args:{label:`Cover letter`,isOptional:!0}},F={render:e=>{let[t,n]=(0,T.useState)(null);return(0,E.jsx)(y,{...e,value:t,onChange:n})},args:{label:`Upload locked`,isDisabled:!0,placeholder:`Upload is currently disabled`}},I={render:e=>{let[t,n]=(0,T.useState)(null);return(0,E.jsx)(y,{...e,value:t,onChange:n})},args:{label:`Resume`,isDisabled:!0,disabledMessage:`Uploads are locked until your profile is verified`,placeholder:`Upload is currently disabled`}},L={render:e=>{let[t,n]=(0,T.useState)(null);return(0,E.jsx)(y,{...e,value:t,onChange:n})},args:{label:`Uploading...`,isLoading:!0}},R={render:e=>{let[t,n]=(0,T.useState)(null);return(0,E.jsx)(y,{...e,value:t,onChange:n})},args:{label:`Upload document`,status:{type:`error`,message:`File must be under 10MB`}}},z={render:e=>{let[t,n]=(0,T.useState)(null);return(0,E.jsx)(y,{...e,value:t,onChange:n})},args:{label:`Upload document`,status:{type:`success`,message:`File uploaded successfully`}}},B={render:e=>{let[t,n]=(0,T.useState)(null);return(0,E.jsx)(y,{...e,value:t,onChange:n})},args:{label:`Tax documents`,labelTooltip:`Upload W-2 forms, 1099s, or other tax-related documents.`}},V={render:()=>{let[e,t]=(0,T.useState)(null),[n,r]=(0,T.useState)(null),[i,a]=(0,T.useState)(null),[o,s]=(0,T.useState)(null),[c,l]=(0,T.useState)(null);return(0,E.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`,maxWidth:`400px`},children:[(0,E.jsx)(y,{label:`Default (input mode)`,value:e,onChange:t}),(0,E.jsx)(y,{label:`Dropzone with constraints`,value:n,onChange:r,mode:`dropzone`,isMultiple:!0,accept:`image/*`,maxSize:5242880,maxFiles:5,description:`Up to 5 images, max 5MB each`}),(0,E.jsx)(y,{label:`Dropzone mode`,value:i,onChange:a,mode:`dropzone`,placeholder:`Drag files here or click to browse`}),(0,E.jsx)(y,{label:`Disabled`,value:o,onChange:s,isDisabled:!0}),(0,E.jsx)(y,{label:`With error`,value:c,onChange:l,status:{type:`error`,message:`Please upload a valid file`}})]})}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<File | File[] | null>(null);
    return <FileInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Upload file',
    placeholder: 'Drag files here or click to browse'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<File | File[] | null>(null);
    return <FileInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Resume',
    description: 'Upload your resume in PDF or Word format. Max 5MB.',
    accept: '.pdf,.doc,.docx'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<File | File[] | null>(null);
    return <FileInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Attachments',
    isMultiple: true,
    description: 'Upload up to 10 files. Max 5MB each.',
    maxFiles: 10,
    maxSize: 5 * 1024 * 1024
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<File | File[] | null>(null);
    return <FileInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Profile photo',
    accept: 'image/png,image/jpeg',
    description: 'PNG or JPEG, max 2MB.',
    maxSize: 2 * 1024 * 1024
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<File | File[] | null>(null);
    return <FileInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Upload files',
    mode: 'dropzone',
    placeholder: 'Drag files here or click to browse'
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<File | File[] | null>(null);
    return <FileInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Supporting document',
    isRequired: true
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<File | File[] | null>(null);
    return <FileInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Cover letter',
    isOptional: true
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<File | File[] | null>(null);
    return <FileInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Upload locked',
    isDisabled: true,
    placeholder: 'Upload is currently disabled'
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<File | File[] | null>(null);
    return <FileInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Resume',
    isDisabled: true,
    disabledMessage: 'Uploads are locked until your profile is verified',
    placeholder: 'Upload is currently disabled'
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<File | File[] | null>(null);
    return <FileInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Uploading...',
    isLoading: true
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<File | File[] | null>(null);
    return <FileInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Upload document',
    status: {
      type: 'error',
      message: 'File must be under 10MB'
    }
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<File | File[] | null>(null);
    return <FileInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Upload document',
    status: {
      type: 'success',
      message: 'File uploaded successfully'
    }
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<File | File[] | null>(null);
    return <FileInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Tax documents',
    labelTooltip: 'Upload W-2 forms, 1099s, or other tax-related documents.'
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [v1, setV1] = useState<File | File[] | null>(null);
    const [v2, setV2] = useState<File | File[] | null>(null);
    const [v3, setV3] = useState<File | File[] | null>(null);
    const [v4, setV4] = useState<File | File[] | null>(null);
    const [v5, setV5] = useState<File | File[] | null>(null);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      maxWidth: '400px'
    }}>
        <FileInput label="Default (input mode)" value={v1} onChange={setV1} />
        <FileInput label="Dropzone with constraints" value={v2} onChange={setV2} mode="dropzone" isMultiple accept="image/*" maxSize={5 * 1024 * 1024} maxFiles={5} description="Up to 5 images, max 5MB each" />
        <FileInput label="Dropzone mode" value={v3} onChange={setV3} mode="dropzone" placeholder="Drag files here or click to browse" />
        <FileInput label="Disabled" value={v4} onChange={setV4} isDisabled />
        <FileInput label="With error" value={v5} onChange={setV5} status={{
        type: 'error',
        message: 'Please upload a valid file'
      }} />
      </div>;
  }
}`,...V.parameters?.docs?.source}}},H=[`Default`,`WithDescription`,`MultipleFiles`,`ImagesOnly`,`DropzoneMode`,`Required`,`Optional`,`Disabled`,`DisabledWithMessage`,`Loading`,`WithErrorStatus`,`WithSuccessStatus`,`WithTooltip`,`AllVariations`]})))()}U();export{V as AllVariations,O as Default,F as Disabled,I as DisabledWithMessage,M as DropzoneMode,j as ImagesOnly,L as Loading,A as MultipleFiles,P as Optional,N as Required,k as WithDescription,R as WithErrorStatus,z as WithSuccessStatus,B as WithTooltip,H as __namedExportsOrder,D as default};