import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{n as r,t as i}from"./stylex-Dft6gtPK.js";import{n as a}from"./mergeProps-JRyAvMxc.js";import{n as ee,t as o}from"./themeProps-DRQoVAIO.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as te}from"./Button-CZDOH4n-.js";import{n as l,t as u}from"./Icon-D9gPeCUm.js";import{n as d,t as f}from"./BellIcon-Bd5nOtNP.js";import{a as p,i as ne,n as re,o as ie,r as m,t as h}from"./UnderlineIcon-B_GIOTO_.js";import{n as ae,t as oe}from"./HeartIcon-mG60TXkt.js";import{n as g,t as se}from"./ListBulletIcon-CBbSrtEW.js";import{n as ce,t as _}from"./Squares2X2Icon-KnRrXJa4.js";import{a as v,i as le,n as ue,o as de,r as fe,t as pe}from"./StarIcon-D0B612lY.js";function me(){return(0,b.use)(S)}function y(e){let{children:t,label:n,orientation:i=`horizontal`,size:o,isDisabled:s=!1,xstyle:c,"data-testid":te}=e,l=e.type===`multiple`,u=(0,b.useMemo)(()=>{if(l)return new Set(e.value);let t=e.value;return t==null?new Set:new Set([t])},[l,e.value]),d=(0,b.useCallback)(t=>{if(l){let n=e.value,r=e.onChange;n.includes(t)?r(n.filter(e=>e!==t)):r([...n,t])}else{let n=e.value,r=e.onChange;r(n===t?null:t)}},[l,e.value,e.onChange]),f=(0,b.useMemo)(()=>({selectedValues:u,toggle:d,size:o,isDisabled:s}),[u,d,o,s]);return(0,x.jsx)(S,{value:f,children:(0,x.jsx)(`div`,{role:`group`,"aria-label":n,"data-testid":te,...a(ee(`toggle-button-group`),r(C.group,i===`vertical`&&C.vertical,c)),children:t})})}var b,x,S,C;function w(){return(w=t((()=>{b=n(),i(),o(),x=s(),S=(0,b.createContext)(null),S.displayName=`ToggleButtonGroupContext`,C={group:{k1xSpc:`khameleon3nfvp2`,kGNEyG:`khameleon6s0dn4`,kOIVth:`khameleonzye2dw`,$$css:!0},vertical:{kXwgrk:`khameleondt5ytf`,kGNEyG:`khameleon1qjc9v5`,$$css:!0}},y.displayName=`ToggleButtonGroup`,y.__docgenInfo={description:`Groups toggle buttons for exclusive (single) or multi-select behavior.

Uses a discriminated union on \`type\` for type-safe value/onChange:
- \`'single'\` (default): \`value: string | null\`, click active deselects
- \`'multiple'\`: \`value: string[]\`, toggles individual items

@example
\`\`\`
const [view, setView] = useState<string | null>('grid');
<ToggleButtonGroup value={view} onChange={setView} label="View mode">
  <ToggleButton value="list" label="List" icon={<ListIcon />} />
  <ToggleButton value="grid" label="Grid" icon={<GridIcon />} />
</ToggleButtonGroup>
\`\`\``,methods:[],displayName:`ToggleButtonGroup`}})))()}function T({ref:e,label:t,isPressed:n,onPressedChange:r,pressedChangeAction:i,size:a,isDisabled:o=!1,isLoading:s=!1,icon:c,isIconOnly:l=!1,pressedIcon:u,children:d,tooltip:f,value:p,xstyle:ne,className:re,style:ie,...m}){let h=me(),ae=h&&p!=null?h.selectedValues.has(p):n??!1,oe=a??h?.size??`md`,g=h?.isDisabled??o,[se,ce]=(0,he.useOptimistic)(ae),_=se,v=!_,le=_&&u?u:c,ue=e=>{if(!g){if(h&&p!=null){h.toggle(p),e.preventDefault();return}r?.(v,e)}},de=h&&p!=null?void 0:async()=>{ce(v),await i?.(v)},fe=d==null?l?void 0:(0,E.jsxs)(`span`,{className:`khameleon3nfvp2 khameleondt5ytf khameleon6s0dn4 khameleonl56j7k`,children:[(0,E.jsx)(`span`,{...{0:{},1:{className:`khameleon2mo6ok`}}[!!_<<0],children:t}),(0,E.jsx)(`span`,{className:`khameleon1lliihq khameleon2mo6ok khameleonqtp20y khameleonb3r6kr khameleonlshs6z khameleon47corl`,"aria-hidden":`true`,children:t})]}):(0,E.jsxs)(`span`,{className:`khameleon3nfvp2 khameleondt5ytf khameleon6s0dn4 khameleonl56j7k`,children:[(0,E.jsx)(`span`,{...{0:{},1:{className:`khameleon2mo6ok`}}[!!_<<0],children:d}),(0,E.jsx)(`span`,{className:`khameleon1lliihq khameleon2mo6ok khameleonqtp20y khameleonb3r6kr khameleonlshs6z khameleon47corl`,"aria-hidden":`true`,children:d})]});return(0,E.jsx)(te,{ref:e,label:t,variant:`ghost`,size:oe,isDisabled:g,isLoading:s,isInterruptible:!0,isIconOnly:l,"aria-pressed":_,icon:le,tooltip:f,...ee(`toggle-button`,{isPressed:_?`true`:`false`}),xstyle:[_?ge.background:void 0,ne],style:ie,onClick:ue,clickAction:de,...m,children:fe})}var he,E,ge;function _e(){return(_e=t((()=>{he=e(n(),1),c(),w(),o(),E=s(),ge={background:{kWkggS:`khameleoni89dp7`,$$css:!0}},T.displayName=`ToggleButton`,T.__docgenInfo={description:`A button that toggles between pressed and unpressed states.
Thin wrapper over Button — adds controlled toggle pattern,
icon swap, and font weight emphasis.

Use for toolbar actions, view mode switches, and formatting controls.
For on/off settings, use Switch instead.

Works standalone (with \`isPressed\`/\`onPressedChange\`) or inside
ToggleButtonGroup (which controls selection via \`value\`).

@example
\`\`\`
const [isBold, setIsBold] = useState(false);
<ToggleButton
  label="Bold"
  icon={<BoldIcon />}
  isPressed={isBold}
  onPressedChange={setIsBold}
/>
\`\`\``,methods:[],displayName:`ToggleButton`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLButtonElement>`,elements:[{name:`HTMLButtonElement`}]},description:``},label:{required:!0,tsType:{name:`string`},description:`Accessible label for the button (required).
Used as visible text, or as aria-label for icon-only buttons.`},isPressed:{required:!1,tsType:{name:`boolean`},description:`Whether the button is currently pressed/active.
When used inside ToggleButtonGroup, this is controlled by the group
and this prop is ignored.`},onPressedChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(
  isPressed: boolean,
  event: React.MouseEvent<HTMLButtonElement>,
) => void`,signature:{arguments:[{type:{name:`boolean`},name:`isPressed`},{type:{name:`ReactMouseEvent`,raw:`React.MouseEvent<HTMLButtonElement>`,elements:[{name:`HTMLButtonElement`}]},name:`event`}],return:{name:`void`}}},description:`Called when the pressed state should change. Receives the next pressed
state and the originating click event. Call \`event.preventDefault()\` to
opt out of running \`pressedChangeAction\` (e.g. to handle the toggle
entirely in this callback).
When used inside ToggleButtonGroup, this is handled by the group
and this prop is ignored.`},pressedChangeAction:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(isPressed: boolean) => void | Promise<void>`,signature:{arguments:[{type:{name:`boolean`},name:`isPressed`}],return:{name:`union`,raw:`void | Promise<void>`,elements:[{name:`void`},{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`}]}}},description:`Action handler for API- or navigation-backed toggles, run inside a
transition by Button. The button shows a loading spinner while the action
is pending — whether it returns a promise or synchronously triggers a
suspending update (e.g. a router navigation that suspends on data).

@example
\`\`\`
<ToggleButton
  label="Favorite"
  isPressed={isFavorited}
  onPressedChange={setIsFavorited}
  pressedChangeAction={async (newState) => {
    await api.setFavorite(itemId, newState);
  }}
/>
\`\`\``},size:{required:!1,tsType:{name:`unknown`},description:`The size of the toggle button.
When used inside ToggleButtonGroup, defaults to the group's size.
@default 'md'`},isDisabled:{required:!1,tsType:{name:`boolean`},description:`Whether the button is disabled.
When used inside ToggleButtonGroup, the group's isDisabled overrides this.
@default false`,defaultValue:{value:`false`,computed:!1}},isLoading:{required:!1,tsType:{name:`boolean`},description:`Whether the button is in a loading state.
@default false`,defaultValue:{value:`false`,computed:!1}},icon:{required:!1,tsType:{name:`ReactNode`},description:`Icon element rendered before the label text.`},isIconOnly:{required:!1,tsType:{name:`boolean`},description:`When true, renders as a square icon-only button with \`label\` as aria-label
and an automatic tooltip from the label.
@default false`,defaultValue:{value:`false`,computed:!1}},pressedIcon:{required:!1,tsType:{name:`ReactNode`},description:`Icon element to render when the button is pressed.
Use to swap between outline (unpressed) and filled (pressed) icon styles.
Falls back to \`icon\` if not provided.

To color the pressed icon, pass an already-colored element:
@example
\`\`\`
pressedIcon={<StarIconSolid style={{color: 'var(--color-icon-yellow)'}} />}
\`\`\``},children:{required:!1,tsType:{name:`ReactNode`},description:"Optional visible content. When provided, rendered instead of `label`\nas the visible text."},tooltip:{required:!1,tsType:{name:`string`},description:`Tooltip text shown on hover.
Passed through to Button.`},value:{required:!1,tsType:{name:`string`},description:`Value identifier when used inside ToggleButtonGroup.
Required when used in a group.`}},composes:[`Omit`]}})))()}function ve({title:e,titleId:t,...n},r){return D.createElement(`svg`,Object.assign({xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,"aria-hidden":`true`,"data-slot":`icon`,ref:r,"aria-labelledby":t},n),e?D.createElement(`title`,{id:t},e):null,D.createElement(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M9.143 17.082a24.248 24.248 0 0 0 3.844.148m-3.844-.148a23.856 23.856 0 0 1-5.455-1.31 8.964 8.964 0 0 0 2.3-5.542m3.155 6.852a3 3 0 0 0 5.667 1.97m1.965-2.277L21 21m-4.225-4.225a23.81 23.81 0 0 0 3.536-1.003A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6.53 6.53m10.245 10.245L6.53 6.53M3 3l3.53 3.53`}))}var D,ye;function be(){return(be=t((()=>{D=e(n()),ye=D.forwardRef(ve)})))()}function xe({title:e,titleId:t,...n},r){return O.createElement(`svg`,Object.assign({xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,"aria-hidden":`true`,"data-slot":`icon`,ref:r,"aria-labelledby":t},n),e?O.createElement(`title`,{id:t},e):null,O.createElement(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z`}))}var O,k;function Se(){return(Se=t((()=>{O=e(n()),k=O.forwardRef(xe)})))()}function Ce({title:e,titleId:t,...n},r){return A.createElement(`svg`,Object.assign({xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,"aria-hidden":`true`,"data-slot":`icon`,ref:r,"aria-labelledby":t},n),e?A.createElement(`title`,{id:t},e):null,A.createElement(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244`}))}var A,j;function we(){return(we=t((()=>{A=e(n()),j=A.forwardRef(Ce)})))()}function Te({title:e,titleId:t,...n},r){return M.createElement(`svg`,Object.assign({xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,"aria-hidden":`true`,"data-slot":`icon`,ref:r,"aria-labelledby":t},n),e?M.createElement(`title`,{id:t},e):null,M.createElement(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M12 12a8.912 8.912 0 0 1-.318-.079c-1.585-.424-2.904-1.247-3.76-2.236-.873-1.009-1.265-2.19-.968-3.301.59-2.2 3.663-3.29 6.863-2.432A8.186 8.186 0 0 1 16.5 5.21M6.42 17.81c.857.99 2.176 1.812 3.761 2.237 3.2.858 6.274-.23 6.863-2.431.233-.868.044-1.779-.465-2.617M3.75 12h16.5`}))}var M,N;function Ee(){return(Ee=t((()=>{M=e(n()),N=M.forwardRef(Te)})))()}function De({title:e,titleId:t,...n},r){return P.createElement(`svg`,Object.assign({xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`,"data-slot":`icon`,ref:r,"aria-labelledby":t},n),e?P.createElement(`title`,{id:t},e):null,P.createElement(`path`,{fillRule:`evenodd`,d:`M5.246 3.744a.75.75 0 0 1 .75-.75h7.125a4.875 4.875 0 0 1 3.346 8.422 5.25 5.25 0 0 1-2.97 9.58h-7.5a.75.75 0 0 1-.75-.75V3.744Zm7.125 6.75a2.625 2.625 0 0 0 0-5.25H8.246v5.25h4.125Zm-4.125 2.251v6h4.5a3 3 0 0 0 0-6h-4.5Z`,clipRule:`evenodd`}))}var P,Oe;function F(){return(F=t((()=>{P=e(n()),Oe=P.forwardRef(De)})))()}function ke({title:e,titleId:t,...n},r){return I.createElement(`svg`,Object.assign({xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`,"data-slot":`icon`,ref:r,"aria-labelledby":t},n),e?I.createElement(`title`,{id:t},e):null,I.createElement(`path`,{fillRule:`evenodd`,d:`M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z`,clipRule:`evenodd`}))}var I,L;function Ae(){return(Ae=t((()=>{I=e(n()),L=I.forwardRef(ke)})))()}function je({title:e,titleId:t,...n},r){return R.createElement(`svg`,Object.assign({xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`,"data-slot":`icon`,ref:r,"aria-labelledby":t},n),e?R.createElement(`title`,{id:t},e):null,R.createElement(`path`,{fillRule:`evenodd`,d:`M10.497 3.744a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-3.275l-5.357 15.002h2.632a.75.75 0 1 1 0 1.5h-7.5a.75.75 0 1 1 0-1.5h3.275l5.357-15.002h-2.632a.75.75 0 0 1-.75-.75Z`,clipRule:`evenodd`}))}var R,Me;function Ne(){return(Ne=t((()=>{R=e(n()),Me=R.forwardRef(je)})))()}function Pe({title:e,titleId:t,...n},r){return z.createElement(`svg`,Object.assign({xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`,"data-slot":`icon`,ref:r,"aria-labelledby":t},n),e?z.createElement(`title`,{id:t},e):null,z.createElement(`path`,{fillRule:`evenodd`,d:`M5.995 2.994a.75.75 0 0 1 .75.75v7.5a5.25 5.25 0 1 0 10.5 0v-7.5a.75.75 0 0 1 1.5 0v7.5a6.75 6.75 0 1 1-13.5 0v-7.5a.75.75 0 0 1 .75-.75Zm-3 17.252a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5h-16.5a.75.75 0 0 1-.75-.75Z`,clipRule:`evenodd`}))}var z,Fe;function Ie(){return(Ie=t((()=>{z=e(n()),Fe=z.forwardRef(Pe)})))()}var B,V,H,Le,U,W,G,K,q,J,Y,X,Z,Q,$,Re;function ze(){return(ze=t((()=>{B=n(),_e(),w(),ie(),ne(),re(),Ee(),we(),g(),ce(),de(),Se(),d(),be(),ae(),ue(),Ae(),le(),F(),Ne(),Ie(),l(),V=s(),H={width:16,height:16},Le={title:`Core/ToggleButton`,component:T,tags:[`autodocs`],argTypes:{label:{control:`text`},isPressed:{control:`boolean`},size:{control:`select`,options:[`sm`,`md`,`lg`]},isDisabled:{control:`boolean`},isLoading:{control:`boolean`}}},U={render:function(){let[e,t]=(0,B.useState)(!1);return(0,V.jsx)(T,{label:`Bold`,icon:(0,V.jsx)(p,{style:H}),isPressed:e,onPressedChange:t,isIconOnly:!0})}},W={render:function(){let[e,t]=(0,B.useState)(!1),[n,r]=(0,B.useState)(!0);return(0,V.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,V.jsx)(T,{label:`Favorite`,icon:(0,V.jsx)(v,{style:H}),pressedIcon:(0,V.jsx)(pe,{style:H}),isPressed:e,onPressedChange:t,isIconOnly:!0}),(0,V.jsx)(T,{label:`Bookmark`,icon:(0,V.jsx)(k,{style:H}),pressedIcon:(0,V.jsx)(L,{style:H}),isPressed:n,onPressedChange:r,isIconOnly:!0})]})}},G={render:function(){let[e,t]=(0,B.useState)(!1);return(0,V.jsx)(T,{label:`Active`,isPressed:e,onPressedChange:t,children:`Active`})}},K={args:{label:`Disabled toggle`,isPressed:!1,isDisabled:!0,icon:(0,V.jsx)(p,{style:H})}},q={args:{label:`Loading toggle`,isPressed:!0,isLoading:!0,icon:(0,V.jsx)(v,{style:H})}},J={render:function(){let[e,t]=(0,B.useState)({}),n=e=>t(t=>({...t,[e]:!t[e]}));return(0,V.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,V.jsx)(T,{label:`Small`,size:`sm`,icon:(0,V.jsx)(p,{style:H}),isPressed:!!e.sm,onPressedChange:()=>n(`sm`),isIconOnly:!0}),(0,V.jsx)(T,{label:`Medium`,size:`md`,icon:(0,V.jsx)(p,{style:H}),isPressed:!!e.md,onPressedChange:()=>n(`md`),isIconOnly:!0}),(0,V.jsx)(T,{label:`Large`,size:`lg`,icon:(0,V.jsx)(p,{style:{width:20,height:20}}),isPressed:!!e.lg,onPressedChange:()=>n(`lg`),isIconOnly:!0})]})}},Y={render:function(){let[e,t]=(0,B.useState)(`list`);return(0,V.jsxs)(y,{value:e,onChange:t,label:`View mode`,children:[(0,V.jsx)(T,{value:`list`,label:`List view`,icon:(0,V.jsx)(se,{style:H}),isIconOnly:!0}),(0,V.jsx)(T,{value:`grid`,label:`Grid view`,icon:(0,V.jsx)(_,{style:H}),isIconOnly:!0})]})}},X={render:function(){let[e,t]=(0,B.useState)([]);return(0,V.jsxs)(y,{type:`multiple`,value:e,onChange:t,label:`Text formatting`,children:[(0,V.jsx)(T,{value:`bold`,label:`Bold`,icon:(0,V.jsx)(p,{style:H}),isIconOnly:!0}),(0,V.jsx)(T,{value:`italic`,label:`Italic`,icon:(0,V.jsx)(m,{style:H}),isIconOnly:!0}),(0,V.jsx)(T,{value:`underline`,label:`Underline`,icon:(0,V.jsx)(h,{style:H}),isIconOnly:!0})]})}},Z={render:function(){let[e,t]=(0,B.useState)(!1);return(0,V.jsx)(T,{label:e?`Unmute notifications`:`Mute notifications`,icon:(0,V.jsx)(f,{style:H}),pressedIcon:(0,V.jsx)(ye,{style:H}),isPressed:e,onPressedChange:t,isIconOnly:!0})}},Q={render:function(){let[e,t]=(0,B.useState)({bold:!0,italic:!1,underline:!0,strikethrough:!1,link:!1}),n=e=>t(t=>({...t,[e]:!t[e]}));return(0,V.jsxs)(`div`,{style:{display:`flex`,gap:4},children:[(0,V.jsx)(T,{label:`Bold`,icon:(0,V.jsx)(u,{icon:p,size:`sm`,color:`secondary`}),pressedIcon:(0,V.jsx)(u,{icon:Oe,size:`sm`,color:`accent`}),isPressed:e.bold,onPressedChange:()=>n(`bold`),isIconOnly:!0}),(0,V.jsx)(T,{label:`Italic`,icon:(0,V.jsx)(u,{icon:m,size:`sm`,color:`secondary`}),pressedIcon:(0,V.jsx)(u,{icon:Me,size:`sm`,color:`accent`}),isPressed:e.italic,onPressedChange:()=>n(`italic`),isIconOnly:!0}),(0,V.jsx)(T,{label:`Underline`,icon:(0,V.jsx)(u,{icon:h,size:`sm`,color:`secondary`}),pressedIcon:(0,V.jsx)(u,{icon:Fe,size:`sm`,color:`accent`}),isPressed:e.underline,onPressedChange:()=>n(`underline`),isIconOnly:!0}),(0,V.jsx)(T,{label:`Strikethrough`,icon:(0,V.jsx)(u,{icon:N,size:`sm`,color:`secondary`}),pressedIcon:(0,V.jsx)(u,{icon:N,size:`sm`,color:`accent`}),isPressed:e.strikethrough,onPressedChange:()=>n(`strikethrough`),isIconOnly:!0}),(0,V.jsx)(T,{label:`Link`,icon:(0,V.jsx)(u,{icon:j,size:`sm`,color:`secondary`}),pressedIcon:(0,V.jsx)(u,{icon:j,size:`sm`,color:`success`}),isPressed:e.link,onPressedChange:()=>n(`link`),isIconOnly:!0})]})}},$={render:function(){let[e,t]=(0,B.useState)({star:!1,heart:!1,bookmark:!0,bell:!1}),n=e=>t(t=>({...t,[e]:!t[e]}));return(0,V.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,V.jsx)(T,{label:`Star`,icon:(0,V.jsx)(u,{icon:v,size:`sm`,color:`secondary`}),pressedIcon:(0,V.jsx)(u,{icon:pe,size:`sm`,color:`yellow`}),isPressed:e.star,onPressedChange:()=>n(`star`),isIconOnly:!0}),(0,V.jsx)(T,{label:`Like`,icon:(0,V.jsx)(u,{icon:oe,size:`sm`,color:`secondary`}),pressedIcon:(0,V.jsx)(u,{icon:fe,size:`sm`,color:`red`}),isPressed:e.heart,onPressedChange:()=>n(`heart`),isIconOnly:!0}),(0,V.jsx)(T,{label:`Save`,icon:(0,V.jsx)(u,{icon:k,size:`sm`,color:`secondary`}),pressedIcon:(0,V.jsx)(u,{icon:L,size:`sm`,color:`blue`}),isPressed:e.bookmark,onPressedChange:()=>n(`bookmark`),isIconOnly:!0}),(0,V.jsx)(T,{label:`Follow`,icon:(0,V.jsx)(u,{icon:f,size:`sm`,color:`secondary`}),pressedIcon:(0,V.jsx)(u,{icon:f,size:`sm`,color:`accent`}),isPressed:e.bell,onPressedChange:()=>n(`bell`),isIconOnly:!0})]})}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isPressed, setIsPressed] = useState(false);
    return <ToggleButton label="Bold" icon={<BoldIcon style={iconSize} />} isPressed={isPressed} onPressedChange={setIsPressed} isIconOnly />;
  }
}`,...U.parameters?.docs?.source},description:{story:`Interactive standalone toggle — click to toggle.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isFavorited, setIsFavorited] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(true);
    return <div style={{
      display: 'flex',
      gap: 8
    }}>
        <ToggleButton label="Favorite" icon={<StarIcon style={iconSize} />} pressedIcon={<StarIconSolid style={iconSize} />} isPressed={isFavorited} onPressedChange={setIsFavorited} isIconOnly />
        <ToggleButton label="Bookmark" icon={<BookmarkIcon style={iconSize} />} pressedIcon={<BookmarkIconSolid style={iconSize} />} isPressed={isBookmarked} onPressedChange={setIsBookmarked} isIconOnly />
      </div>;
  }
}`,...W.parameters?.docs?.source},description:{story:`Icon-only toggles with icon swap.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isActive, setIsActive] = useState(false);
    return <ToggleButton label="Active" isPressed={isActive} onPressedChange={setIsActive}>
        Active
      </ToggleButton>;
  }
}`,...G.parameters?.docs?.source},description:{story:`Toggle with visible label text — shows font weight shift on press.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled toggle',
    isPressed: false,
    isDisabled: true,
    icon: <BoldIcon style={iconSize} />
  }
}`,...K.parameters?.docs?.source},description:{story:`Disabled state.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Loading toggle',
    isPressed: true,
    isLoading: true,
    icon: <StarIcon style={iconSize} />
  }
}`,...q.parameters?.docs?.source},description:{story:`Loading state.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [pressed, setPressed] = useState<Record<string, boolean>>({});
    const toggle = (key: string) => setPressed(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
    return <div style={{
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }}>
        <ToggleButton label="Small" size="sm" icon={<BoldIcon style={iconSize} />} isPressed={!!pressed.sm} onPressedChange={() => toggle('sm')} isIconOnly />
        <ToggleButton label="Medium" size="md" icon={<BoldIcon style={iconSize} />} isPressed={!!pressed.md} onPressedChange={() => toggle('md')} isIconOnly />
        <ToggleButton label="Large" size="lg" icon={<BoldIcon style={{
        width: 20,
        height: 20
      }} />} isPressed={!!pressed.lg} onPressedChange={() => toggle('lg')} isIconOnly />
      </div>;
  }
}`,...J.parameters?.docs?.source},description:{story:`All sizes side by side.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [view, setView] = useState<string | null>('list');
    return <ToggleButtonGroup value={view} onChange={setView} label="View mode">
        <ToggleButton value="list" label="List view" icon={<ListBulletIcon style={iconSize} />} isIconOnly />
        <ToggleButton value="grid" label="Grid view" icon={<Squares2X2Icon style={iconSize} />} isIconOnly />
      </ToggleButtonGroup>;
  }
}`,...Y.parameters?.docs?.source},description:{story:`Single-select group — view mode switcher. Click active to deselect.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [formats, setFormats] = useState<string[]>([]);
    return <ToggleButtonGroup type="multiple" value={formats} onChange={setFormats} label="Text formatting">
        <ToggleButton value="bold" label="Bold" icon={<BoldIcon style={iconSize} />} isIconOnly />
        <ToggleButton value="italic" label="Italic" icon={<ItalicIcon style={iconSize} />} isIconOnly />
        <ToggleButton value="underline" label="Underline" icon={<UnderlineIcon style={iconSize} />} isIconOnly />
      </ToggleButtonGroup>;
  }
}`,...X.parameters?.docs?.source},description:{story:`Multi-select group — text formatting toolbar.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isMuted, setIsMuted] = useState(false);
    return <ToggleButton label={isMuted ? 'Unmute notifications' : 'Mute notifications'} icon={<BellIcon style={iconSize} />} pressedIcon={<BellSlashIcon style={iconSize} />} isPressed={isMuted} onPressedChange={setIsMuted} isIconOnly />;
  }
}`,...Z.parameters?.docs?.source},description:{story:`Notification toggle — icon swap between bell and bell-slash.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [pressed, setPressed] = useState<Record<string, boolean>>({
      bold: true,
      italic: false,
      underline: true,
      strikethrough: false,
      link: false
    });
    const toggle = (key: string) => setPressed(p => ({
      ...p,
      [key]: !p[key]
    }));
    return <div style={{
      display: 'flex',
      gap: 4
    }}>
        <ToggleButton label="Bold" icon={<Icon icon={BoldIcon} size="sm" color="secondary" />} pressedIcon={<Icon icon={BoldIconSolid} size="sm" color="accent" />} isPressed={pressed.bold} onPressedChange={() => toggle('bold')} isIconOnly />
        <ToggleButton label="Italic" icon={<Icon icon={ItalicIcon} size="sm" color="secondary" />} pressedIcon={<Icon icon={ItalicIconSolid} size="sm" color="accent" />} isPressed={pressed.italic} onPressedChange={() => toggle('italic')} isIconOnly />
        <ToggleButton label="Underline" icon={<Icon icon={UnderlineIcon} size="sm" color="secondary" />} pressedIcon={<Icon icon={UnderlineIconSolid} size="sm" color="accent" />} isPressed={pressed.underline} onPressedChange={() => toggle('underline')} isIconOnly />
        <ToggleButton label="Strikethrough" icon={<Icon icon={StrikethroughIcon} size="sm" color="secondary" />} pressedIcon={<Icon icon={StrikethroughIcon} size="sm" color="accent" />} isPressed={pressed.strikethrough} onPressedChange={() => toggle('strikethrough')} isIconOnly />
        <ToggleButton label="Link" icon={<Icon icon={LinkIcon} size="sm" color="secondary" />} pressedIcon={<Icon icon={LinkIcon} size="sm" color="success" />} isPressed={pressed.link} onPressedChange={() => toggle('link')} isIconOnly />
      </div>;
  }
}`,...Q.parameters?.docs?.source},description:{story:`Formatting toolbar with colored icons — icon shifts to accent color when pressed.
Uses outline → solid icon swap + Icon color prop to reinforce state.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [pressed, setPressed] = useState<Record<string, boolean>>({
      star: false,
      heart: false,
      bookmark: true,
      bell: false
    });
    const toggle = (key: string) => setPressed(p => ({
      ...p,
      [key]: !p[key]
    }));
    return <div style={{
      display: 'flex',
      gap: 8
    }}>
        <ToggleButton label="Star" icon={<Icon icon={StarIcon} size="sm" color="secondary" />} pressedIcon={<Icon icon={StarIconSolid} size="sm" color="yellow" />} isPressed={pressed.star} onPressedChange={() => toggle('star')} isIconOnly />
        <ToggleButton label="Like" icon={<Icon icon={HeartIcon} size="sm" color="secondary" />} pressedIcon={<Icon icon={HeartIconSolid} size="sm" color="red" />} isPressed={pressed.heart} onPressedChange={() => toggle('heart')} isIconOnly />
        <ToggleButton label="Save" icon={<Icon icon={BookmarkIcon} size="sm" color="secondary" />} pressedIcon={<Icon icon={BookmarkIconSolid} size="sm" color="blue" />} isPressed={pressed.bookmark} onPressedChange={() => toggle('bookmark')} isIconOnly />
        <ToggleButton label="Follow" icon={<Icon icon={BellIcon} size="sm" color="secondary" />} pressedIcon={<Icon icon={BellIcon} size="sm" color="accent" />} isPressed={pressed.bell} onPressedChange={() => toggle('bell')} isIconOnly />
      </div>;
  }
}`,...$.parameters?.docs?.source},description:{story:`Reaction buttons — semantic icon colors (yellow star, red heart, blue bookmark).
Shows icon swap (outline → solid) paired with color to reinforce the pressed state.`,...$.parameters?.docs?.description}}},Re=[`Standalone`,`IconSwap`,`WithLabel`,`Disabled`,`Loading`,`Sizes`,`GroupSingle`,`GroupMultiple`,`NotificationToggle`,`ColoredIconToolbar`,`ColoredIconReactions`]})))()}ze();export{$ as ColoredIconReactions,Q as ColoredIconToolbar,K as Disabled,X as GroupMultiple,Y as GroupSingle,W as IconSwap,q as Loading,Z as NotificationToggle,J as Sizes,U as Standalone,G as WithLabel,Re as __namedExportsOrder,Le as default};