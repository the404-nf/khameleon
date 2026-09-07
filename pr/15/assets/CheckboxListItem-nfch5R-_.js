import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./mergeProps-JRyAvMxc.js";import{t as r}from"./composeEventHandlers-DY4wem0S.js";import{n as i,t as a}from"./themeProps-DRQoVAIO.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./useTooltip-Dj0O-S6V.js";import{n as l,t as u}from"./useTranslator-Cp3lSSgn.js";import{n as d,t as f}from"./Field-Cedy3QPa.js";import{i as p,n as m,r as h,t as g}from"./ListItem-DZvKo0Xs.js";import{n as _,t as v}from"./List-D9mBAsPV.js";import{i as y,n as b,r as x,t as S}from"./CheckboxInput-DiWk6p5G.js";function C({label:e,isLabelHidden:t=!1,description:r,status:a,value:o,onChange:c,changeAction:l,density:u=`balanced`,hasDividers:d=!1,isDisabled:p=!1,disabledMessage:m,isReadOnly:h=!1,children:g,ref:_,width:y,xstyle:b,className:S,style:C,"data-testid":D,...O}){let k=(0,w.useId)(),A=(0,w.useId)(),j=(0,w.useId)(),M=(0,w.useId)(),[,N]=(0,w.useTransition)(),P=o!==void 0,[F,I]=(0,w.useOptimistic)(o??E),[L,R]=(0,w.useOptimistic)(null),z=p&&!!m,B=s({placement:`above`,focusTrigger:`always`,isEnabled:z}),V=(0,w.useCallback)((e,t)=>{c?.(e),l&&N(async()=>{I(e),t!==void 0&&R(t),await l(e)})},[c,l,N,I,R]),H=(0,w.useMemo)(()=>({value:P?F:void 0,onChange:P?V:void 0,isDisabled:p,hasDisabledMessage:z,isReadOnly:h,loadingValue:L}),[P,F,V,p,z,h,L]);return(0,T.jsxs)(f,{...O,ref:_,"data-testid":D,label:e,isLabelHidden:t,description:r,inputID:k,labelID:A,isGroupLabel:!0,descriptionID:r?j:void 0,isDisabled:p,status:a?{type:a.type,message:a.message,messageID:a.message?M:void 0}:void 0,statusVariant:`detached`,width:y,xstyle:b,...n(i(`checkbox-list`),{className:S,style:C}),children:[(0,T.jsx)(x,{value:H,children:(0,T.jsx)(`div`,{ref:e=>{B.ref(e)},role:`group`,"aria-labelledby":A,"aria-describedby":[r?j:null,a?.message?M:null,z?B.describedBy:null].filter(Boolean).join(` `)||void 0,children:(0,T.jsx)(v,{density:u,hasDividers:d,children:g})})}),z&&B.renderTooltip(m)]})}var w,T,E;function D(){return(D=e((()=>{w=t(),d(),_(),c(),a(),y(),T=o(),E=[],C.displayName=`CheckboxList`,C.__docgenInfo={description:`A checkbox group component for multi-value selection.

Composes Field (for label, description, status) and List
(for density, dividers) with a context provider for collection mode.

@example
\`\`\`
<CheckboxList
  label="Notifications"
  value={selected}
  onChange={setSelected}>
  <CheckboxListItem label="Email" value="email" />
  <CheckboxListItem label="SMS" value="sms" />
  <CheckboxListItem label="Push" value="push" />
</CheckboxList>
\`\`\``,methods:[],displayName:`CheckboxList`,props:{ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:`Ref forwarded to the root element`},label:{required:!0,tsType:{name:`string`},description:`Label text for the checkbox group (always rendered for accessibility).`},isLabelHidden:{required:!1,tsType:{name:`boolean`},description:`Whether to visually hide the label (still accessible to screen readers).
@default false`,defaultValue:{value:`false`,computed:!1}},description:{required:!1,tsType:{name:`string`},description:`Description text displayed below the label.`},status:{required:!1,tsType:{name:`InputStatus`},description:`Status indicator for the checkbox group.
When set with a message, displays a colored message box below the group.`},value:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`The currently selected values (collection mode).`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(values: string[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},name:`values`}],return:{name:`void`}}},description:`Callback fired when the selected values change (collection mode).`},changeAction:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(values: string[]) => void | Promise<void>`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},name:`values`}],return:{name:`union`,raw:`void | Promise<void>`,elements:[{name:`void`},{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`}]}}},description:`Async action on change. Fires after onChange.
While the returned promise is pending, the toggled item shows a spinner
inside its checkbox and is marked \`aria-busy\`, and re-toggling it is
blocked. Other items remain interactive.`},density:{required:!1,tsType:{name:`union`,raw:`'compact' | 'balanced' | 'spacious'`,elements:[{name:`literal`,value:`'compact'`},{name:`literal`,value:`'balanced'`},{name:`literal`,value:`'spacious'`}]},description:`Spacing density for list items.
@default 'balanced'`,defaultValue:{value:`'balanced'`,computed:!1}},hasDividers:{required:!1,tsType:{name:`boolean`},description:`Whether to show dividers between list items.
@default false`,defaultValue:{value:`false`,computed:!1}},isDisabled:{required:!1,tsType:{name:`boolean`},description:`Whether all checkbox items are disabled.
@default false`,defaultValue:{value:`false`,computed:!1}},disabledMessage:{required:!1,tsType:{name:`string`},description:`Explains why the checkbox group is disabled. Applies to the whole-group
disabled state (\`isDisabled\`), not individual items. When set together with
\`isDisabled\`, the group shows a tooltip with this text on hover and keyboard
focus, and its checkboxes stay focusable (via \`aria-disabled\`) so the reason
is discoverable by keyboard and assistive technology. Toggling stays
blocked.

Use this instead of wrapping a disabled group in \`Tooltip\` — disabled
controls don't emit the pointer events an external tooltip needs.`},isReadOnly:{required:!1,tsType:{name:`boolean`},description:`Whether all checkbox items are read-only.
Displays the current state at full opacity but prevents interaction.
Unlike \`isDisabled\`, read-only checkboxes are not visually dimmed.
@default false`,defaultValue:{value:`false`,computed:!1}},width:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:"Width of the field. Numbers are treated as pixels, strings are used as-is\n(e.g. `'100%'`). Sizes the whole field (label, control, and status) so they\nstay aligned, unlike setting width via `xstyle`/`className`/`style`."},children:{required:!0,tsType:{name:`ReactNode`},description:`Checkbox list items to render.`}},composes:[`Omit`]}})))()}function O({label:e,value:t,description:n,endContent:i,isDisabled:a=!1,isLoading:o=!1,isChecked:s,onCheck:c,ref:u,xstyle:d,className:f,style:p,onClick:m,..._}){let v=l(),y=(0,k.use)(x);if(y&&y.value!==void 0&&t===void 0)throw Error("CheckboxListItem requires a `value` prop when used inside CheckboxList with a value array.");let b=((0,k.use)(h)?.density??`balanced`)===`compact`?`sm`:`md`,C=(y?.isDisabled??!1)||a,w=y?.isReadOnly??!1,T=o||y?.loadingValue!=null&&t!==void 0&&y.loadingValue===t,E=!1;y&&y.value!==void 0&&t!==void 0?E=y.value.includes(t):s!==void 0&&(E=s);let D=!w&&(y!=null||c!=null),O=()=>{C||w||T||(y&&y.value!==void 0&&t!==void 0?y.value.includes(t)?y.onChange?.(y.value.filter(e=>e!==t),t):y.onChange?.([...y.value,t],t):c?.(E!==!0))};return(0,A.jsx)(g,{..._,ref:u,label:e,description:n,endContent:i,isDisabled:C,onClick:D||m?r(m,D?O:void 0):void 0,"aria-busy":T||void 0,xstyle:[E===!0&&!C&&!w&&j.selected,d],className:f,style:p,startContent:(0,A.jsx)(S,{label:typeof e==`string`?e:v(`@khameleon.checkboxList.item.checkbox`),isLabelHidden:!0,value:E,onChange:()=>O(),isDisabled:C,isReadOnly:w,isLoading:T,size:b})})}var k,A,j;function M(){return(M=e((()=>{k=t(),b(),m(),p(),y(),u(),A=o(),j={selected:{kWkggS:`khameleongcxg3y`,$$css:!0}},O.displayName=`CheckboxListItem`,O.__docgenInfo={description:`A checkbox item for use within CheckboxList (collection mode)
or List (standalone mode).

In collection mode, checked state is derived from the parent's value array.
In standalone mode, uses isChecked/onCheck props directly.

Composes ListItem internally — gets density, dividers, hover/press,
focus, and container alignment for free.

@example
\`\`\`
<CheckboxListItem label="Email" value="email" />
<CheckboxListItem
  label="Accept terms"
  isChecked={accepted}
  onCheck={setAccepted}
/>
\`\`\``,methods:[],displayName:`CheckboxListItem`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},label:{required:!0,tsType:{name:`ReactNode`},description:`Primary text label for the item.

Accepts a plain string (single-line truncation applied automatically)
or a ReactNode for rich content (no truncation constraints —
child components control their own text behavior).`},value:{required:!1,tsType:{name:`string`},description:`Identity key for collection mode (REQUIRED inside CheckboxList).
Throws a runtime error if missing when used inside CheckboxList.`},description:{required:!1,tsType:{name:`string`},description:`Secondary text below the label.`},endContent:{required:!1,tsType:{name:`ReactNode`},description:`Content rendered after the label area.`},isDisabled:{required:!1,tsType:{name:`boolean`},description:`Whether this individual item is disabled.
@default false`,defaultValue:{value:`false`,computed:!1}},isLoading:{required:!1,tsType:{name:`boolean`},description:`Whether this item is in a loading state. Renders a spinner inside the
checkbox and blocks interaction on this item only.

In collection mode, this is also driven automatically: when the parent
\`CheckboxList\` has a \`changeAction\`, the toggled item shows its
spinner while that promise is pending.
@default false`,defaultValue:{value:`false`,computed:!1}},isChecked:{required:!1,tsType:{name:`union`,raw:`boolean | 'indeterminate'`,elements:[{name:`boolean`},{name:`literal`,value:`'indeterminate'`}]},description:`Direct checked state (standalone mode only).
Ignored when inside CheckboxList.`},onCheck:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(checked: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`}],return:{name:`void`}}},description:`Direct check handler (standalone mode only).
Ignored when inside CheckboxList.`},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLLIElement>`,elements:[{name:`HTMLLIElement`}]},description:`Ref forwarded to the root element`}},composes:[`Omit`]}})))()}export{D as i,M as n,C as r,O as t};