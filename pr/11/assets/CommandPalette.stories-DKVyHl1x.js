import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./stylex-Dft6gtPK.js";import{i,n as a,r as o,t as s}from"./LayoutContent-BygUy9He.js";import{n as c}from"./mergeProps-JRyAvMxc.js";import{n as ee}from"./mergeRefs-CPqjs56a.js";import{n as l,t as u}from"./themeProps-DRQoVAIO.js";import{t as d}from"./jsx-runtime-DeHZSEgm.js";import{n as f,t as te}from"./LayoutHeader-DdDaoZAf.js";import{n as p,t as ne}from"./Spinner-rxpquZFT.js";import{n as m,t as h}from"./Button-CZDOH4n-.js";import{n as g,t as _}from"./Icon-D9gPeCUm.js";import{n as v,t as y}from"./useTranslator-C3b4YzkD.js";import{n as b,t as x}from"./Kbd-fnyArnP2.js";import{i as re,n as ie,r as ae,t as oe}from"./Dialog-C__rGuc9.js";import{n as S,t as se}from"./LayoutFooter-DVJiAji7.js";import{n as ce,t as le}from"./hooks-CDFsgfh4.js";import{t as C}from"./createStaticSource-Cfz9LMai.js";function w(){return(0,T.use)(ue)}var T,ue;function E(){return(E=e((()=>{T=t(),ue=(0,T.createContext)(null),ue.displayName=`CommandPaletteContext`})))()}function de({children:e,label:t,ref:r,xstyle:i,className:a,style:o,...s}){let ee=v(),u=t??ee(`@khameleon.commandPalette.list.label`),d=w();return(0,D.jsx)(`div`,{ref:r,id:d?.listId,role:`listbox`,"aria-label":u,...c(l(`command-palette-list`),n(O.list,i),a,o),...s,children:e})}var D,O;function fe(){return(fe=e((()=>{r(),E(),u(),y(),D=d(),O={list:{kORKVm:`khameleon1odjw0f`,kskxy:`khameleonmz0i5r`,kmVPX3:`khameleon9epnlk`,kUk6DE:`khameleon98rzlu`,k1xSpc:`khameleon78zum5`,kXwgrk:`khameleondt5ytf`,kOIVth:`khameleon1lsbc85`,$$css:!0}},de.displayName=`CommandPaletteList`,de.__docgenInfo={description:`Scrollable results container for the command palette.
Renders as a listbox for ARIA compliance.

When used inside CommandPalette, automatically gets the correct
ID for aria-controls linking with the input.

@compositionHint Place inside CommandPalette, after CommandPaletteInput.
  Contains CommandPaletteItem and CommandPaletteGroup children.

@example
\`\`\`
<CommandPaletteList>
  <CommandPaletteItem value="home" onSelect={goHome}>
    Go Home
  </CommandPaletteItem>
</CommandPaletteList>
\`\`\``,methods:[],displayName:`CommandPaletteList`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:`Ref forwarded to the root element.`},children:{required:!0,tsType:{name:`ReactNode`},description:`Command palette items, groups, empty states, etc.`},label:{required:!1,tsType:{name:`string`},description:`Accessible label for the listbox.
@default 'Commands'`}},composes:[`Omit`]}})))()}function k({value:e,onSelect:t,isHighlighted:r,isSelected:i,isDisabled:a=!1,children:o,ref:s,xstyle:u,className:d,style:f,...te}){let p=w(),ne=re()?.isInline===!0,m=(0,A.useRef)(null),h=(0,A.useRef)(!1),g=(0,A.useMemo)(()=>p?.selectableItems.findIndex(t=>t.value===e)??-1,[p?.selectableItems,e]),_=r??(p?p.highlightedIndex===g&&g>=0:!1),v=i??(p?p.value===e:!1);(0,A.useEffect)(()=>{let e=ne&&!h.current;h.current=!0,!e&&_&&m.current&&m.current.scrollIntoView?.({block:`nearest`})},[_,ne]);let y=(0,A.useCallback)(()=>{a||(t?.(e),p&&(p.selectItem(e),p.onClose()))},[a,e,t,p]),b=(0,A.useCallback)(()=>{a||!p||g<0||p.setHighlightedIndex(g)},[a,g,p]);return(0,j.jsx)(`div`,{ref:ee(s,m),id:p&&g>=0?p.getItemId(g):void 0,role:`option`,"aria-selected":v,"aria-disabled":a||void 0,"data-value":e,onClick:y,onMouseEnter:b,...c(l(`command-palette-item`),n(M.item,!a&&M.itemHover,_&&M.itemHighlighted,v&&M.itemSelected,a&&M.itemDisabled,u),d,f),...te,children:o})}var A,j,M;function N(){return(N=e((()=>{A=t(),r(),E(),ae(),u(),j=d(),M={item:{k1xSpc:`khameleon78zum5`,kGNEyG:`khameleon6s0dn4`,kOIVth:`khameleon1txdalj`,kzqmXN:`khameleonh8yej3`,kg3NbH:`khameleonrrkdod`,k8WAf4:`khameleonce4md1`,kaIpWk:`khameleonx3sua9`,kMv6JI:`khameleon9ynric`,kGuDYH:`khameleoncr08ib`,kMwMTN:`khameleon1tgivj0`,kWkggS:`khameleonjbqb8w`,kQgIW9:`khameleon1gs6z28`,kkrTdU:`khameleon1ypdohk`,k9WMMc:`khameleondpxx8g`,kI3sdo:`khameleon1a2a7pz`,kfSwDN:`khameleon87ps6o`,$$css:!0},itemHover:{kHE3J0:`khameleone9uy6x`,kSReZ0:`khameleonyxi2l3`,$$css:!0},itemHighlighted:{kWkggS:`khameleon1lmrjuc`,$$css:!0},itemDisabled:{kSiTet:`khameleonbyyjgo`,kkrTdU:`khameleon1h6gzvc`,$$css:!0},itemSelected:{kWkggS:`khameleongcxg3y`,$$css:!0}},k.displayName=`CommandPaletteItem`,k.__docgenInfo={description:`A selectable item in the command palette.
Accepts arbitrary children for full rendering control.

When used inside CommandPalette, registers with context for
keyboard navigation and selection. Can also be used
standalone with explicit isHighlighted/isSelected props.

@compositionHint Place inside CommandPaletteList or CommandPaletteGroup.

@example
\`\`\`
<CommandPaletteItem value="settings" onSelect={() => navigate('/settings')}>
  Settings
</CommandPaletteItem>
\`\`\``,methods:[],displayName:`CommandPaletteItem`,props:{ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:`Ref forwarded to the root element.`},value:{required:!0,tsType:{name:`string`},description:`Unique value for identification and selection.`},onSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Called when this item is selected (via click or Enter).`},isHighlighted:{required:!1,tsType:{name:`boolean`},description:`Whether this item is visually highlighted (keyboard focus).
When omitted inside CommandPalette, derived from context.
@default false`},isSelected:{required:!1,tsType:{name:`boolean`},description:`Whether this item is currently selected (picker mode).
@default false`},isDisabled:{required:!1,tsType:{name:`boolean`},description:`Whether the item is disabled.
@default false`,defaultValue:{value:`false`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:`Item content. Fully custom — render icons, descriptions, shortcuts, etc.`}},composes:[`Omit`]}})))()}function P({heading:e,children:t,ref:r,xstyle:i,className:a,style:o,...s}){return(0,F.jsxs)(`div`,{ref:r,role:`group`,"aria-label":e,...c(l(`command-palette-group`),n(I.group,i),a,o),...s,children:[(0,F.jsx)(`div`,{"aria-hidden":`true`,className:`khameleonrrkdod khameleonu0wf1k khameleon9ynric khameleon141an7d khameleon1ltkj2j khameleonv1l7n4 khameleon87ps6o`,children:e}),t]})}var F,I;function pe(){return(pe=e((()=>{r(),u(),F=d(),I={group:{k1xSpc:`khameleon78zum5`,kXwgrk:`khameleondt5ytf`,kOIVth:`khameleon1lsbc85`,k8WAf4:`khameleonu0wf1k`,$$css:!0}},P.displayName=`CommandPaletteGroup`,P.__docgenInfo={description:`Visual grouping for command palette items with a heading label.

Heading style matches DropdownMenu section headings:
supporting-size (12px), secondary color, no uppercase/letterSpacing.

@compositionHint Place inside CommandPaletteList.
  Contains CommandPaletteItem children.

@example
\`\`\`
<CommandPaletteGroup heading="Navigation">
  <CommandPaletteItem value="home" onSelect={goHome}>
    Home
  </CommandPaletteItem>
</CommandPaletteGroup>
\`\`\``,methods:[],displayName:`CommandPaletteGroup`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:`Ref forwarded to the root element.`},heading:{required:!0,tsType:{name:`string`},description:`Group heading text.`},children:{required:!0,tsType:{name:`ReactNode`},description:`Items within this group.`}},composes:[`Omit`]}})))()}function me({value:e,onValueChange:t,placeholder:r,hasAutoFocus:i=!0,endContent:a,onChange:o,onKeyDown:s,ref:u,xstyle:d,...f}){let te=v(),p=r??te(`@khameleon.commandPalette.input.placeholder`),m=w(),h=re(),g=(0,L.useRef)(null),y=e??m?.search,b=t??m?.setSearch,x=i&&h?.isInline!==!0;(0,L.useEffect)(()=>{x&&g.current&&requestAnimationFrame(()=>{g.current?.focus()})},[x]);let ie=(0,L.useCallback)(e=>{s?.(e),!e.defaultPrevented&&m?.onKeyDown(e)},[m,s]);return(0,R.jsxs)(`div`,{...c(l(`command-palette-input`),n(he.wrapper,d)),children:[(0,R.jsx)(`span`,{className:`khameleon78zum5 khameleon6s0dn4 khameleon2lah0s khameleonv1l7n4`,children:(0,R.jsx)(_,{icon:`search`,size:`sm`,color:`inherit`})}),(0,R.jsx)(`input`,{ref:ee(u,g),type:`text`,role:`combobox`,"aria-expanded":m?.isOpen??!0,"aria-autocomplete":`list`,"aria-controls":m?.listId,"aria-activedescendant":m&&m.highlightedIndex>=0?m.getItemId(m.highlightedIndex):void 0,placeholder:p,value:y,"data-autofocus":x||void 0,onChange:e=>{b?.(e.target.value),o?.(e)},onKeyDown:ie,className:`khameleon98rzlu khameleoneuugli khameleon1gs6z28 khameleon1a2a7pz khameleonjbqb8w khameleon1tgivj0 khameleon9ynric khameleonjm74w1 khameleon6pjikd khameleonw6l6zx khameleon1717udv khameleoneyghm5`,...f}),(m?.isBusy||a)&&(0,R.jsxs)(`span`,{className:`khameleon78zum5 khameleon6s0dn4 khameleonzye2dw khameleon2lah0s`,children:[m?.isBusy&&(0,R.jsx)(`span`,{className:`khameleon78zum5 khameleon6s0dn4 khameleon2lah0s khameleonv1l7n4 khameleon1hc1fzr khameleon19991ni khameleonjd9b36 khameleon5h36tt khameleon4itv7f`,children:(0,R.jsx)(ne,{size:`sm`})}),a]}),` `]})}var L,R,he;function ge(){return(ge=e((()=>{L=t(),r(),g(),p(),E(),ae(),u(),y(),R=d(),he={wrapper:{k1xSpc:`khameleon78zum5`,kGNEyG:`khameleon6s0dn4`,kOIVth:`khameleon1txdalj`,kg3NbH:`khameleon1pzlopt`,k8WAf4:`khameleon8o8v82`,kmuXW:`khameleon2lah0s`,$$css:!0}},me.displayName=`CommandPaletteInput`,me.__docgenInfo={description:`Search input for the command palette.

Renders a search icon and a text input. Auto-focuses when mounted
so users can start typing immediately.

When used inside CommandPalette, automatically wires to the
context for search state and keyboard navigation (via useCombobox).
Can also be used standalone with explicit value/onValueChange props.

@compositionHint Place as the first child of CommandPalette.

@example
\`\`\`
<CommandPalette isOpen={isOpen} onOpenChange={setIsOpen}>
  <CommandPaletteInput placeholder="Search commands..." />
</CommandPalette>
\`\`\``,methods:[],displayName:`CommandPaletteInput`,props:{ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},description:`Ref forwarded to the input element (for focus management).`},value:{required:!1,tsType:{name:`string`},description:`The current search value.
When omitted inside CommandPalette, reads from context.`},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Called when the search value changes.
When omitted inside CommandPalette, writes to context.`},placeholder:{required:!1,tsType:{name:`string`},description:`Placeholder text for the input.
@default 'Search...'`},hasAutoFocus:{required:!1,tsType:{name:`boolean`},description:`Whether to auto-focus the input when mounted.
@default true`,defaultValue:{value:`true`,computed:!1}},endContent:{required:!1,tsType:{name:`ReactNode`},description:`Content rendered at the trailing end of the input, after the spinner.
Use for clear buttons, keyboard shortcuts, or other trailing actions.
The spinner (when busy) appears immediately before this content with a 4px gap.`},onChange:{required:!1,tsType:{name:`ReactChangeEventHandler`,raw:`React.ChangeEventHandler<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},description:`Native onChange handler for the input element.`}},composes:[`Omit`]}})))()}function _e({children:e,ref:t,xstyle:r,className:i,style:a,...o}){return(0,z.jsx)(`div`,{ref:t,...c(l(`command-palette-footer`),n(ve.footer,r),i,a),...o,children:e??(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(`span`,{className:`khameleon78zum5 khameleon6s0dn4 khameleonzye2dw`,children:[(0,z.jsx)(x,{keys:`up`}),(0,z.jsx)(x,{keys:`down`}),`Navigate`]}),(0,z.jsxs)(`span`,{className:`khameleon78zum5 khameleon6s0dn4 khameleonzye2dw`,children:[(0,z.jsx)(x,{keys:`enter`}),`Select`]}),(0,z.jsxs)(`span`,{className:`khameleon78zum5 khameleon6s0dn4 khameleonzye2dw`,children:[(0,z.jsx)(x,{keys:`escape`}),`Close`]})]})})}var z,ve;function ye(){return(ye=e((()=>{r(),b(),u(),z=d(),ve={footer:{k1xSpc:`khameleon78zum5`,kGNEyG:`khameleon6s0dn4`,kOIVth:`khameleon18g69wz`,kg3NbH:`khameleon1pzlopt`,k8WAf4:`khameleonce4md1`,kmuXW:`khameleon2lah0s`,kMv6JI:`khameleon9ynric`,kGuDYH:`khameleon141an7d`,kLWn49:`khameleon1ltkj2j`,kMwMTN:`khameleonv1l7n4`,$$css:!0}},_e.displayName=`CommandPaletteFooter`,_e.__docgenInfo={description:`Footer for the command palette showing keyboard navigation hints.

When no children are provided, renders default hints using Kbd
for arrow keys, Enter to select, and Escape to close.

@compositionHint Pass to CommandPalette's \`footer\` slot.

@example
\`\`\`
<CommandPalette
  isOpen={isOpen}
  onOpenChange={setIsOpen}
  input={<CommandPaletteInput />}
  footer={<CommandPaletteFooter />}>
  <CommandPaletteList>...</CommandPaletteList>
</CommandPalette>
\`\`\``,methods:[],displayName:`CommandPaletteFooter`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:`Ref forwarded to the footer element.`},children:{required:!1,tsType:{name:`ReactNode`},description:`Footer content. When provided, renders custom content instead of default hints.
Custom children inherit the footer font treatment (supporting/12px, secondary color).
When omitted, renders default keyboard navigation hints using Kbd.`}},composes:[`Omit`]}})))()}function be({ref:e,children:t,xstyle:r,className:i,style:a,...o}){return(0,xe.jsx)(`div`,{ref:e,...c(l(`command-palette-empty`),n(Se.empty,r),i,a),...o,children:t})}var xe,Se;function Ce(){return(Ce=e((()=>{t(),r(),u(),xe=d(),Se={empty:{k1xSpc:`khameleon78zum5`,kGNEyG:`khameleon6s0dn4`,kjj79g:`khameleonl56j7k`,k8WAf4:`khameleonmfvnks`,kg3NbH:`khameleon1pzlopt`,kMv6JI:`khameleon9ynric`,kGuDYH:`khameleon141an7d`,kLWn49:`khameleon1ltkj2j`,kMwMTN:`khameleonv1l7n4`,k9WMMc:`khameleon2b8uid`,$$css:!0}},be.displayName=`CommandPaletteEmpty`,be.__docgenInfo={description:`Empty state for the command palette list area.

Rendered automatically by CommandPalette in two situations:
- \`emptyBootstrapText\`: no search term and bootstrap() returns nothing
- \`emptySearchText\`: a search query returned no results

Can also be composed manually inside a custom render function.

@example
\`\`\`
<CommandPalette
  emptyBootstrapText={<CommandPaletteEmpty>Start typing to search</CommandPaletteEmpty>}
  emptySearchText={<CommandPaletteEmpty>No results found</CommandPaletteEmpty>}
  searchSource={source}
/>
\`\`\``,methods:[],displayName:`CommandPaletteEmpty`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:`The message or content to display.`}},composes:[`Omit`]}})))()}function B(e){let t=e.auxiliaryData;return typeof t?.group==`string`?t.group:void 0}function we(e){if(!e.some(e=>B(e)!=null))return e.map(e=>({value:e.id,label:e.label}));let t=[],n=new Map,r=[];for(let i of e){let e=B(i);e==null?r.push(i):(n.has(e)||(t.push(e),n.set(e,[])),n.get(e)?.push(i))}let i=[];for(let e of t)for(let t of n.get(e)??[])i.push({value:t.id,label:t.label});for(let e of r)i.push({value:e.id,label:e.label});return i}function Te({items:e,value:t,renderItem:n}){let r=e=>(0,U.jsx)(k,{value:e.id,children:n?n(e,e.id===t):e.label},e.id);if(!e.some(e=>B(e)!=null))return(0,U.jsx)(U.Fragment,{children:e.map(r)});let i=[],a=new Map,o=[];for(let t of e){let e=B(t);e==null?o.push(t):(a.has(e)||(i.push(e),a.set(e,[])),a.get(e)?.push(t))}return(0,U.jsxs)(U.Fragment,{children:[i.map(e=>(0,U.jsx)(P,{heading:e,children:(a.get(e)??[]).map(r)},e)),o.map(r)]})}function V({ref:e,isOpen:t,isInline:n,onOpenChange:r,searchSource:i,input:a,footer:c,renderItem:ee,emptySearchText:l,emptyBootstrapText:u,value:d,onValueChange:f,label:p,width:ne=640,maxHeight:m=480}){let h=v(),g=p??h(`@khameleon.commandPalette.label`),_=l??h(`@khameleon.commandPalette.emptySearch`),y=u??h(`@khameleon.commandPalette.emptyBootstrap`),b=(0,H.useId)(),[x,re]=(0,H.useState)(``),[ie,ae]=(0,H.useState)(``),[S,le]=(0,H.useState)([]),[C,w]=(0,H.useTransition)(),[T,E]=(0,H.useOptimistic)(x),[D,O]=(0,H.useOptimistic)(S),fe=C,k=(0,H.useRef)(0),A=d??ie,j=(0,H.useCallback)(e=>{d===void 0&&ae(e),f?.(e)},[d,f]),M=(0,H.useMemo)(()=>we(D),[D]),N=(0,H.useCallback)(()=>{re(``),le([]),d===void 0&&ae(``),i.cancel?.(),r(!1)},[r,i,d]),P=(0,H.useCallback)(e=>{j(e)},[j]),F=ce({selectableItems:M,value:A,isOpen:!0,onOpen:()=>{},onClose:()=>{},onSelect:e=>{P(e),N()},listboxId:b}),I=(0,H.useCallback)(e=>{i.cancel?.();let t=++k.current;w(async()=>{let n=e===``;if(!n&&S.length>0){let t=e.toLowerCase().trim();O(S.filter(e=>e.label.toLowerCase().includes(t)))}let r=n?i.bootstrap():i.search(e),a=await Promise.resolve(r);if(k.current===t&&(re(e),O(a),le(a),n&&A!=null&&A!==``)){let e=a.findIndex(e=>e.id===A);e>=0&&F.setHighlightedIndex(e)}})},[i,S,w,A,F,O]),pe=(0,H.useRef)(I);pe.current=I,(0,H.useEffect)(()=>{t&&pe.current(``)},[t]);let L=(0,H.useCallback)(e=>{if(e.key===`Escape`){e.preventDefault(),N();return}if(e.key===`Enter`){if(e.preventDefault(),F.highlightedIndex>=0&&F.highlightedIndex<M.length){let e=M[F.highlightedIndex];e&&!e.disabled&&(P(e.value),N())}return}e.key!==` `&&F.onKeyDown(e)},[F,N,M,P]),R=(0,H.useMemo)(()=>({search:T,setSearch:e=>{w(()=>{E(e)}),I(e)},value:A,setValue:j,listId:b,highlightedIndex:F.highlightedIndex,setHighlightedIndex:F.setHighlightedIndex,getItemId:F.getItemId,selectableItems:M,searchResults:D,selectItem:P,onKeyDown:L,onClose:N,isOpen:t,isBusy:fe}),[T,E,I,A,j,b,F.highlightedIndex,F.setHighlightedIndex,F.getItemId,M,D,P,L,N,t,fe]),he=x===``&&D.length===0,ge=x!==``&&D.length===0,z;return z=he?(0,U.jsx)(be,{children:y}):ge?(0,U.jsx)(be,{children:_}):(0,U.jsx)(Te,{items:D,value:A,renderItem:ee}),(0,U.jsx)(oe,{ref:e,isOpen:t,isInline:n,onOpenChange:e=>{e?r(!0):N()},width:ne,maxHeight:m,purpose:`info`,"aria-label":g,children:(0,U.jsx)(ue,{value:R,children:(0,U.jsx)(o,{defaultHasDividers:!0,header:(0,U.jsx)(te,{hasDivider:!0,padding:0,children:a??(0,U.jsx)(me,{})}),content:(0,U.jsx)(s,{padding:0,children:(0,U.jsx)(de,{children:z})}),footer:(0,U.jsx)(se,{hasDivider:!0,padding:0,children:c??(0,U.jsx)(_e,{})})})})})}var H,U;function Ee(){return(Ee=e((()=>{H=t(),ie(),i(),f(),a(),S(),le(),E(),fe(),N(),pe(),ge(),ye(),Ce(),y(),U=d(),V.displayName=`CommandPalette`,V.__docgenInfo={description:`Command palette root component.

Uses \`searchSource\` for all search logic — same interface as Typeahead.
For static lists, use \`createStaticSource\` from \`@khameleon/core/Typeahead\`.

Keyboard navigation is handled by \`useCombobox\` from Selector,
ensuring consistent arrow key, Home/End, Enter, and Escape behavior
across all combobox-pattern components.

Input and footer are rendered by default — only pass them to replace the defaults.

@compositionHint
  - \`input\` slot: CommandPaletteInput (default)
  - \`footer\` slot: CommandPaletteFooter (default)
  - \`renderItem(item, isSelected)\`: custom per-item content (grouping preserved)

@example
\`\`\`
<CommandPalette
  isOpen={isOpen}
  onOpenChange={setIsOpen}
  searchSource={createStaticSource(commands)}
/>
\`\`\``,methods:[],displayName:`CommandPalette`,props:{ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDialogElement>`,elements:[{name:`HTMLDialogElement`}]},description:``},isOpen:{required:!0,tsType:{name:`boolean`},description:`Whether the command palette is open.`},isInline:{required:!1,tsType:{name:`boolean`},description:`Renders command palette content inline without modal behavior.
Suppresses input auto-focus and initial highlighted-item auto-scroll.
For documentation previews and showcases only.
@default false`},onOpenChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(isOpen: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`isOpen`}],return:{name:`void`}}},description:`Called when the command palette visibility changes.`},searchSource:{required:!0,tsType:{name:`SearchSource`,elements:[{name:`T`}],raw:`SearchSource<T>`},description:"Search source providing items. Implements `search(query)` and `bootstrap()`.\nSame interface as Typeahead's searchSource.\nUse `createStaticSource` for simple static lists."},input:{required:!1,tsType:{name:`ReactNode`},description:`The search input slot.
@default <CommandPaletteInput />`},footer:{required:!1,tsType:{name:`ReactNode`},description:`The footer slot.
@default <CommandPaletteFooter />`},renderItem:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(item: T, isSelected: boolean) => ReactNode`,signature:{arguments:[{type:{name:`T`},name:`item`},{type:{name:`boolean`},name:`isSelected`}],return:{name:`ReactNode`}}},description:"Per-item render function. Receives the item and whether it is currently selected.\nAuto-grouping by `auxiliaryData.group` is preserved.\nWhen omitted, renders each item's `label` text."},emptySearchText:{required:!1,tsType:{name:`ReactNode`},description:`Content shown when a search query returns no results.
@default 'No results'`},emptyBootstrapText:{required:!1,tsType:{name:`ReactNode`},description:`Content shown when there is no search query and bootstrap() returns nothing.
@default 'Type to search'`},value:{required:!1,tsType:{name:`string`},description:`Controlled selected value (for picker mode).`},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Called when the selected value changes.`},label:{required:!1,tsType:{name:`string`},description:`Accessible label for the command palette dialog.
@default 'Command palette'`},width:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Width of the command palette dialog.
@default 640`,defaultValue:{value:`640`,computed:!1}},maxHeight:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Maximum height of the command palette dialog.
@default 480`,defaultValue:{value:`480`,computed:!1}}},composes:[`Omit`]}})))()}var W,G,De,K,q,J,Y,X,Z,Q,$,Oe;function ke(){return(ke=e((()=>{W=t(),Ee(),ge(),ye(),m(),g(),G=d(),De={title:`Core/CommandPalette`,component:V,tags:[`autodocs`]},K={render:function(){let[e,t]=(0,W.useState)(!1),n=(0,W.useMemo)(()=>C([{id:`home`,label:`Home`},{id:`settings`,label:`Settings`},{id:`profile`,label:`Profile`},{id:`dashboard`,label:`Dashboard`},{id:`help`,label:`Help`}]),[]);return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(h,{label:`Open Command Palette`,onClick:()=>t(!0)}),(0,G.jsx)(V,{isOpen:e,onOpenChange:t,searchSource:n})]})}},q={render:function(){let[e,t]=(0,W.useState)(!1),n=(0,W.useMemo)(()=>C([{id:`home`,label:`Home`,auxiliaryData:{group:`Navigation`}},{id:`settings`,label:`Settings`,auxiliaryData:{group:`Navigation`}},{id:`profile`,label:`Profile`,auxiliaryData:{group:`Navigation`}},{id:`new-file`,label:`New File`,auxiliaryData:{group:`Actions`}},{id:`save`,label:`Save`,auxiliaryData:{group:`Actions`}},{id:`export`,label:`Export`,auxiliaryData:{group:`Actions`}}]),[]);return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(h,{label:`Open Grouped`,onClick:()=>t(!0)}),(0,G.jsx)(V,{isOpen:e,onOpenChange:t,searchSource:n})]})}},J={render:function(){let[e,t]=(0,W.useState)(!1),n=[{id:`dashboard`,label:`Go to Dashboard`,auxiliaryData:{icon:`menu`,group:`Navigation`}},{id:`settings`,label:`Open Settings`,auxiliaryData:{icon:`wrench`,group:`Navigation`,shortcut:`⌘,`}},{id:`profile`,label:`View Profile`,auxiliaryData:{icon:`info`,group:`Navigation`}},{id:`dark-mode`,label:`Toggle Dark Mode`,auxiliaryData:{group:`Actions`,keywords:[`theme`,`appearance`]}},{id:`new-file`,label:`Create New File`,auxiliaryData:{group:`Actions`,shortcut:`⌘N`}},{id:`search`,label:`Search Files`,auxiliaryData:{icon:`search`,group:`Actions`,shortcut:`⌘P`}}],r=(0,W.useMemo)(()=>C(n,{keywords:e=>e.auxiliaryData?.keywords??[]}),[]);return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(h,{label:`Open Rich Palette`,onClick:()=>t(!0)}),(0,G.jsx)(V,{isOpen:e,onOpenChange:t,searchSource:r,renderItem:e=>(0,G.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:8,flex:1},children:[e.auxiliaryData?.icon&&(0,G.jsx)(_,{icon:e.auxiliaryData.icon,size:`sm`}),(0,G.jsx)(`span`,{style:{flex:1},children:e.label}),e.auxiliaryData?.shortcut&&(0,G.jsx)(`span`,{style:{fontSize:12,opacity:.5},children:e.auxiliaryData.shortcut})]})})]})}},Y={render:function(){let[e,t]=(0,W.useState)(!1),[n,r]=(0,W.useState)(`light`),i=(0,W.useMemo)(()=>C([{id:`light`,label:`Light`},{id:`dark`,label:`Dark`},{id:`system`,label:`System`}]),[]);return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(h,{label:`Theme: ${n}`,onClick:()=>t(!0)}),(0,G.jsx)(V,{isOpen:e,onOpenChange:t,searchSource:i,value:n,onValueChange:e=>{r(e),t(!1)},renderItem:(e,t)=>(0,G.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:8,flex:1},children:[(0,G.jsx)(`span`,{style:{flex:1},children:e.label}),t&&(0,G.jsx)(_,{icon:`check`,size:`sm`})]})})]})}},X={render:function(){let[e,t]=(0,W.useState)(!1),n=(0,W.useMemo)(()=>{let e=null;return{cancel(){e?.abort()},async search(t){return e?.abort(),e=new AbortController,await new Promise(e=>setTimeout(e,400)),[{id:`readme`,label:`README.md`},{id:`package`,label:`package.json`},{id:`tsconfig`,label:`tsconfig.json`},{id:`index`,label:`src/index.ts`},{id:`app`,label:`src/App.tsx`}].filter(e=>e.label.toLowerCase().includes(t.toLowerCase()))},bootstrap(){return[]}}},[]);return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(h,{label:`Open File Search`,onClick:()=>t(!0)}),(0,G.jsx)(V,{isOpen:e,onOpenChange:t,searchSource:n,input:(0,G.jsx)(me,{placeholder:`Search files...`}),emptyBootstrapText:`Type a filename to search`,emptySearchText:`No files found`})]})}},Z={render:function(){let[e,t]=(0,W.useState)(!1),n=[{id:`home`,label:`Home`},{id:`dark-mode`,label:`Toggle Dark Mode`,auxiliaryData:{aliases:[`theme`,`appearance`]}},{id:`font-size`,label:`Change Font Size`,auxiliaryData:{aliases:[`text`,`zoom`]}}],r=(0,W.useMemo)(()=>C(n,{keywords:e=>e.auxiliaryData?.aliases??[]}),[]);return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(h,{label:`Open (try 'theme')`,onClick:()=>t(!0)}),(0,G.jsx)(V,{isOpen:e,onOpenChange:t,searchSource:r})]})}},Q={render:function(){let[e,t]=(0,W.useState)(!1),n=[`Files`,`Actions`,`Navigation`,`Settings`,`Recent`],r=Array.from({length:50},(e,t)=>({id:`item-${t}`,label:`Item ${t+1}`,auxiliaryData:{group:n[t%n.length]}})),i=(0,W.useMemo)(()=>C(r),[]);return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(h,{label:`Open (50 items)`,onClick:()=>t(!0)}),(0,G.jsx)(V,{isOpen:e,onOpenChange:t,searchSource:i})]})}},$={render:function(){let[e,t]=(0,W.useState)(!1),n=(0,W.useMemo)(()=>C([{id:`home`,label:`Home`},{id:`settings`,label:`Settings`}]),[]);return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(h,{label:`Open`,onClick:()=>t(!0)}),(0,G.jsx)(V,{isOpen:e,onOpenChange:t,searchSource:n,footer:(0,G.jsx)(_e,{children:(0,G.jsx)(`span`,{children:`Pro tip: use ⌘K to open anywhere`})})})]})}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    const source = useMemo(() => createStaticSource([{
      id: 'home',
      label: 'Home'
    }, {
      id: 'settings',
      label: 'Settings'
    }, {
      id: 'profile',
      label: 'Profile'
    }, {
      id: 'dashboard',
      label: 'Dashboard'
    }, {
      id: 'help',
      label: 'Help'
    }]), []);
    return <>
        <Button label="Open Command Palette" onClick={() => setIsOpen(true)} />
        <CommandPalette isOpen={isOpen} onOpenChange={setIsOpen} searchSource={source} />
      </>;
  }
}`,...K.parameters?.docs?.source},description:{story:`Simplest case — no input/footer/renderItem needed.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    const source = useMemo(() => createStaticSource([{
      id: 'home',
      label: 'Home',
      auxiliaryData: {
        group: 'Navigation'
      }
    }, {
      id: 'settings',
      label: 'Settings',
      auxiliaryData: {
        group: 'Navigation'
      }
    }, {
      id: 'profile',
      label: 'Profile',
      auxiliaryData: {
        group: 'Navigation'
      }
    }, {
      id: 'new-file',
      label: 'New File',
      auxiliaryData: {
        group: 'Actions'
      }
    }, {
      id: 'save',
      label: 'Save',
      auxiliaryData: {
        group: 'Actions'
      }
    }, {
      id: 'export',
      label: 'Export',
      auxiliaryData: {
        group: 'Actions'
      }
    }]), []);
    return <>
        <Button label="Open Grouped" onClick={() => setIsOpen(true)} />
        <CommandPalette isOpen={isOpen} onOpenChange={setIsOpen} searchSource={source} />
      </>;
  }
}`,...q.parameters?.docs?.source},description:{story:`Groups detected automatically from auxiliaryData.group. No custom rendering needed.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    const commands: RichCommand[] = [{
      id: 'dashboard',
      label: 'Go to Dashboard',
      auxiliaryData: {
        icon: 'menu',
        group: 'Navigation'
      }
    }, {
      id: 'settings',
      label: 'Open Settings',
      auxiliaryData: {
        icon: 'wrench',
        group: 'Navigation',
        shortcut: '⌘,'
      }
    }, {
      id: 'profile',
      label: 'View Profile',
      auxiliaryData: {
        icon: 'info',
        group: 'Navigation'
      }
    }, {
      id: 'dark-mode',
      label: 'Toggle Dark Mode',
      auxiliaryData: {
        group: 'Actions',
        keywords: ['theme', 'appearance']
      }
    }, {
      id: 'new-file',
      label: 'Create New File',
      auxiliaryData: {
        group: 'Actions',
        shortcut: '⌘N'
      }
    }, {
      id: 'search',
      label: 'Search Files',
      auxiliaryData: {
        icon: 'search',
        group: 'Actions',
        shortcut: '⌘P'
      }
    }];
    const source = useMemo(() => createStaticSource(commands, {
      keywords: item => item.auxiliaryData?.keywords ?? []
    }), []);
    return <>
        <Button label="Open Rich Palette" onClick={() => setIsOpen(true)} />
        <CommandPalette isOpen={isOpen} onOpenChange={setIsOpen} searchSource={source} renderItem={(item: RichCommand) => <span style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        flex: 1
      }}>
              {item.auxiliaryData?.icon && <Icon icon={item.auxiliaryData.icon} size="sm" />}
              <span style={{
          flex: 1
        }}>{item.label}</span>
              {item.auxiliaryData?.shortcut && <span style={{
          fontSize: 12,
          opacity: 0.5
        }}>
                  {item.auxiliaryData.shortcut}
                </span>}
            </span>} />
      </>;
  }
}`,...J.parameters?.docs?.source},description:{story:`Custom item content via renderItem — icons and shortcuts.
Grouping remains automatic via auxiliaryData.group.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState('light');
    const source = useMemo(() => createStaticSource([{
      id: 'light',
      label: 'Light'
    }, {
      id: 'dark',
      label: 'Dark'
    }, {
      id: 'system',
      label: 'System'
    }]), []);
    return <>
        <Button label={\`Theme: \${theme}\`} onClick={() => setIsOpen(true)} />
        <CommandPalette isOpen={isOpen} onOpenChange={setIsOpen} searchSource={source} value={theme} onValueChange={v => {
        setTheme(v);
        setIsOpen(false);
      }} renderItem={(item, isSelected) => <span style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        flex: 1
      }}>
              <span style={{
          flex: 1
        }}>{item.label}</span>
              {isSelected && <Icon icon="check" size="sm" />}
            </span>} />
      </>;
  }
}`,...Y.parameters?.docs?.source},description:{story:`Selection persists across opens. isSelected passed to renderItem.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    const source = useMemo<SearchSource>(() => {
      let controller: AbortController | null = null;
      return {
        cancel() {
          controller?.abort();
        },
        async search(query: string) {
          controller?.abort();
          controller = new AbortController();
          await new Promise(r => setTimeout(r, 400));
          const all = [{
            id: 'readme',
            label: 'README.md'
          }, {
            id: 'package',
            label: 'package.json'
          }, {
            id: 'tsconfig',
            label: 'tsconfig.json'
          }, {
            id: 'index',
            label: 'src/index.ts'
          }, {
            id: 'app',
            label: 'src/App.tsx'
          }];
          return all.filter(f => f.label.toLowerCase().includes(query.toLowerCase()));
        },
        bootstrap() {
          return [];
        }
      };
    }, []);
    return <>
        <Button label="Open File Search" onClick={() => setIsOpen(true)} />
        <CommandPalette isOpen={isOpen} onOpenChange={setIsOpen} searchSource={source} input={<CommandPaletteInput placeholder="Search files..." />} emptyBootstrapText="Type a filename to search" emptySearchText="No files found" />
      </>;
  }
}`,...X.parameters?.docs?.source},description:{story:`Server-side search. Spinner shown while pending. Empty state on no results.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    const commands: SearchableItem<{
      aliases?: string[];
    }>[] = [{
      id: 'home',
      label: 'Home'
    }, {
      id: 'dark-mode',
      label: 'Toggle Dark Mode',
      auxiliaryData: {
        aliases: ['theme', 'appearance']
      }
    }, {
      id: 'font-size',
      label: 'Change Font Size',
      auxiliaryData: {
        aliases: ['text', 'zoom']
      }
    }];
    const source = useMemo(() => createStaticSource(commands, {
      keywords: item => item.auxiliaryData?.aliases ?? []
    }), []);
    return <>
        <Button label="Open (try 'theme')" onClick={() => setIsOpen(true)} />
        <CommandPalette isOpen={isOpen} onOpenChange={setIsOpen} searchSource={source} />
      </>;
  }
}`,...Z.parameters?.docs?.source},description:{story:`Type "theme" or "appearance" to find "Toggle Dark Mode".`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    const groups = ['Files', 'Actions', 'Navigation', 'Settings', 'Recent'];
    const items = Array.from({
      length: 50
    }, (_, i) => ({
      id: \`item-\${i}\`,
      label: \`Item \${i + 1}\`,
      auxiliaryData: {
        group: groups[i % groups.length]
      }
    }));
    const source = useMemo(() => createStaticSource(items), []);
    return <>
        <Button label="Open (50 items)" onClick={() => setIsOpen(true)} />
        <CommandPalette isOpen={isOpen} onOpenChange={setIsOpen} searchSource={source} />
      </>;
  }
}`,...Q.parameters?.docs?.source},description:{story:`50 items across 5 groups. Verifies the list scrolls within the dialog
rather than expanding it past maxHeight.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    const source = useMemo(() => createStaticSource([{
      id: 'home',
      label: 'Home'
    }, {
      id: 'settings',
      label: 'Settings'
    }]), []);
    return <>
        <Button label="Open" onClick={() => setIsOpen(true)} />
        <CommandPalette isOpen={isOpen} onOpenChange={setIsOpen} searchSource={source} footer={<CommandPaletteFooter>
              <span>Pro tip: use ⌘K to open anywhere</span>
            </CommandPaletteFooter>} />
      </>;
  }
}`,...$.parameters?.docs?.source},description:{story:`Replacing the footer with custom content.`,...$.parameters?.docs?.description}}},Oe=[`Default`,`AutoGrouped`,`WithRenderItem`,`Picker`,`AsyncSearch`,`WithKeywords`,`ManyItems`,`CustomFooter`]})))()}ke();export{X as AsyncSearch,q as AutoGrouped,$ as CustomFooter,K as Default,Q as ManyItems,Y as Picker,Z as WithKeywords,J as WithRenderItem,Oe as __namedExportsOrder,De as default};