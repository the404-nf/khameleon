import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{n as r,t as i}from"./stylex-Dft6gtPK.js";import{n as a}from"./mergeProps-JRyAvMxc.js";import{n as o}from"./mergeRefs-CPqjs56a.js";import{n as s,t as c}from"./themeProps-DRQoVAIO.js";import{t as l}from"./jsx-runtime-DeHZSEgm.js";import{n as u,t as d}from"./useLinkComponent-DvgS1IvL.js";import{n as f,t as p}from"./useTranslator-C3b4YzkD.js";import{n as m,t as h}from"./Cog6ToothIcon-LKkqufPn.js";import{n as g,t as _}from"./FolderIcon-BgIzlbYN.js";import{n as v,t as y}from"./HomeIcon-QfiwBcAz.js";function b({children:e,separator:t=`/`,variant:n=`default`,xstyle:i,className:o,style:c,label:l,ref:u,...d}){let p=f(),m=l??p(`@khameleon.breadcrumbs.label`),h=(0,x.useMemo)(()=>({variant:n,separator:t}),[n,t]);return(0,S.jsx)(C,{value:h,children:(0,S.jsx)(`nav`,{ref:u,"aria-label":m,...a(s(`breadcrumbs`,{variant:n}),r(w.root,i),o,c),...d,children:(0,S.jsx)(`ol`,{className:`khameleon78zum5 khameleon6s0dn4 khameleon1a02dak khameleone8uvvx khameleon1ghz6dp khameleon1717udv khameleonzye2dw`,children:e})})})}var x,S,C,w;function T(){return(T=t((()=>{x=n(),i(),c(),p(),S=l(),C=(0,x.createContext)({variant:`default`,separator:`/`}),C.displayName=`BreadcrumbContext`,w={root:{k1xSpc:`khameleon1lliihq`,$$css:!0}},b.displayName=`Breadcrumbs`,b.__docgenInfo={description:`A navigation breadcrumb trail. Wraps BreadcrumbItem children in
semantic \`<nav>\` + \`<ol>\` markup with separators between items.

Auto-detects the last child as the current page if no item has
\`isCurrent\` explicitly set — handled by each item via DOM inspection,
no React child introspection needed.

@example
\`\`\`
<Breadcrumbs>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/projects">Projects</BreadcrumbItem>
  <BreadcrumbItem isCurrent>My Project</BreadcrumbItem>
</Breadcrumbs>
\`\`\``,methods:[],displayName:`Breadcrumbs`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLElement>`,elements:[{name:`HTMLElement`}]},description:`Ref forwarded to the root element`},children:{required:!0,tsType:{name:`ReactNode`},description:`BreadcrumbItem elements to render as breadcrumb trail.`},separator:{required:!1,tsType:{name:`ReactNode`},description:`Separator rendered between items. Decorative only (aria-hidden).
@default '/'`,defaultValue:{value:`'/'`,computed:!1}},variant:{required:!1,tsType:{name:`BreadcrumbsVariantMap`},description:"Visual variant for the breadcrumb trail.\n- `'default'`: Standard text styling\n- `'supporting'`: Smaller, secondary text for supporting context\n@default 'default'",defaultValue:{value:`'default'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:`Accessible label for the nav landmark.
@default 'Breadcrumb'`}},composes:[`Omit`]}})))()}function E({ref:e,as:t,children:n,href:i,onClick:c,isCurrent:l,startIcon:d,xstyle:f,className:p,style:m,"data-testid":h,...g}){let _=(0,D.use)(C),v=u(t),y=_.variant===`supporting`,b=(0,D.useRef)(null),x=(0,D.useRef)(null),S=l===!0,w=l==null;(0,D.useEffect)(()=>{if(!w)return;let e=b.current;if(!e)return;let t=e.parentElement;if(!t)return;let n=Array.from(t.children),r=n.length>0&&n[n.length-1]===e,i=t.querySelector(`[aria-current="page"]`);if(r&&!i){let t=x.current??e;return t.setAttribute(`aria-current`,`page`),()=>{t.removeAttribute(`aria-current`)}}});let T=(0,O.jsxs)(O.Fragment,{children:[d&&(0,O.jsx)(`span`,{className:`khameleon78zum5 khameleon6s0dn4 khameleon2lah0s`,children:d}),n]});return S?(0,O.jsxs)(`li`,{ref:o(e,b),...a(s(`breadcrumb-item`),r(k.root,y?k.supportingSize:k.defaultSize,f),p,m),"data-testid":h,...g,children:[(0,O.jsx)(`span`,{"aria-hidden":`true`,className:`khameleon11ke7fs khameleon6s0dn4 khameleonv1l7n4 khameleonu0wf1k khameleon87ps6o`,children:_.separator}),(0,O.jsx)(`span`,{...{0:{className:`khameleon78zum5 khameleon6s0dn4 khameleonzye2dw khameleon1pd3egz khameleon1tgivj0`},1:{className:`khameleon78zum5 khameleon6s0dn4 khameleonzye2dw khameleon1pd3egz khameleonv1l7n4`}}[!!y<<0],"aria-current":`page`,children:T})]}):(0,O.jsxs)(`li`,{ref:o(e,b),...a(s(`breadcrumb-item`),r(k.root,y?k.supportingSize:k.defaultSize,f),p,m),"data-testid":h,...g,children:[(0,O.jsx)(`span`,{"aria-hidden":`true`,className:`khameleon11ke7fs khameleon6s0dn4 khameleonv1l7n4 khameleonu0wf1k khameleon87ps6o`,children:_.separator}),i==null?c==null?(0,O.jsx)(`span`,{ref:x,...{0:{className:`khameleon78zum5 khameleon6s0dn4 khameleonzye2dw khameleon1pd3egz khameleon1tgivj0`},1:{className:`khameleon78zum5 khameleon6s0dn4 khameleonzye2dw khameleon1pd3egz khameleonv1l7n4`}}[!!y<<0],children:T}):(0,O.jsx)(`button`,{ref:x,type:`button`,onClick:c,...{0:{className:`khameleon78zum5 khameleon6s0dn4 khameleonzye2dw khameleon1hl2dhg khameleon4ohgrr khameleon1ypdohk khameleon11g6tue khameleon1gs6z28 khameleon1717udv khameleon1ghz6dp khameleonln7xf2 khameleonv1l7n4`},1:{className:`khameleon78zum5 khameleon6s0dn4 khameleonzye2dw khameleon1hl2dhg khameleon4ohgrr khameleon1ypdohk khameleon11g6tue khameleon1gs6z28 khameleon1717udv khameleon1ghz6dp khameleonln7xf2 khameleonv1l7n4`}}[!!y<<0],children:T}):(0,O.jsx)(v,{ref:x,href:i,onClick:c,...{0:{className:`khameleon78zum5 khameleon6s0dn4 khameleonzye2dw khameleonu0wf1k khameleon1hl2dhg khameleon4ohgrr khameleon1ypdohk khameleonv1l7n4`},1:{className:`khameleon78zum5 khameleon6s0dn4 khameleonzye2dw khameleonu0wf1k khameleon1hl2dhg khameleon4ohgrr khameleon1ypdohk khameleonv1l7n4`}}[!!y<<0],children:T})]})}var D,O,k;function A(){return(A=t((()=>{D=e(n(),1),i(),T(),d(),c(),O=l(),k={root:{k1xSpc:`khameleon78zum5`,kGNEyG:`khameleon6s0dn4`,kOIVth:`khameleonzye2dw`,kogj98:`khameleon1ghz6dp`,"--separator-display":`khameleonkce8z9 khameleon1ibt0lz`,$$css:!0},defaultSize:{kGuDYH:`khameleonjm74w1`,kLWn49:`khameleonw6l6zx`,$$css:!0},supportingSize:{kGuDYH:`khameleon141an7d`,kLWn49:`khameleon1ltkj2j`,$$css:!0}},E.displayName=`BreadcrumbItem`,E.__docgenInfo={description:`An individual breadcrumb item. Renders as a link (\`<a>\`) or a span
depending on whether it represents the current page.

Each item renders its own leading separator, hidden on :first-child via
CSS. Auto-current detection uses a post-render effect that checks the
DOM — no React child introspection.

@example
\`\`\`
<BreadcrumbItem href="/projects">Projects</BreadcrumbItem>
<BreadcrumbItem isCurrent>My Project</BreadcrumbItem>
\`\`\``,methods:[],displayName:`BreadcrumbItem`,props:{ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLLIElement>`,elements:[{name:`HTMLLIElement`}]},description:``},as:{required:!1,tsType:{name:`ElementType`},description:`Custom component to render instead of \`<a>\` for breadcrumb links.
Overrides the provider-level default set by LinkProvider.
Only applies for non-current items. Must accept href, className, style, and children props.`},children:{required:!0,tsType:{name:`ReactNode`},description:`Label content of the breadcrumb item.`},href:{required:!1,tsType:{name:`string`},description:`URL for the breadcrumb link. Omit for the current page.`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(e: MouseEvent<HTMLElement>) => void`,signature:{arguments:[{type:{name:`MouseEvent`,elements:[{name:`HTMLElement`}],raw:`MouseEvent<HTMLElement>`},name:`e`}],return:{name:`void`}}},description:`Click handler. Works with or without href.`},isCurrent:{required:!1,tsType:{name:`boolean`},description:`Marks this item as the current page. Renders as a span with aria-current="page".
If not set on any item, the last item is auto-detected as current.
@default false`},startIcon:{required:!1,tsType:{name:`ReactNode`},description:`Optional icon rendered before the label.`}},composes:[`Omit`]}})))()}var j,M,N,P,F,I,L,R,z,B,V,H,U;function W(){return(W=t((()=>{T(),A(),v(),m(),g(),j=l(),M={title:`Core/Breadcrumbs`,component:b,tags:[`autodocs`],argTypes:{separator:{control:`text`,description:`Separator between items`},label:{control:`text`,description:`Accessible label for the nav landmark`},variant:{control:`select`,options:[`default`,`supporting`],description:`Visual variant controlling text size and color`}}},N={render:()=>(0,j.jsxs)(b,{children:[(0,j.jsx)(E,{href:`/`,children:`Home`}),(0,j.jsx)(E,{href:`/projects`,children:`Projects`}),(0,j.jsx)(E,{isCurrent:!0,children:`My Project`})]})},P={render:()=>(0,j.jsxs)(b,{children:[(0,j.jsx)(E,{href:`/`,children:`Home`}),(0,j.jsx)(E,{isCurrent:!0,children:`Settings`})]})},F={name:`Auto-detect Current`,render:()=>(0,j.jsxs)(b,{children:[(0,j.jsx)(E,{href:`/`,children:`Home`}),(0,j.jsx)(E,{href:`/projects`,children:`Projects`}),(0,j.jsx)(E,{children:`Auto Current`})]})},I={render:()=>(0,j.jsxs)(b,{separator:`›`,children:[(0,j.jsx)(E,{href:`/`,children:`Home`}),(0,j.jsx)(E,{href:`/docs`,children:`Docs`}),(0,j.jsx)(E,{isCurrent:!0,children:`API Reference`})]})},L={render:()=>(0,j.jsxs)(b,{children:[(0,j.jsx)(E,{href:`/`,startIcon:(0,j.jsx)(y,{width:16,height:16,"aria-hidden":`true`}),children:`Home`}),(0,j.jsx)(E,{href:`/settings`,startIcon:(0,j.jsx)(h,{width:16,height:16,"aria-hidden":`true`}),children:`Settings`}),(0,j.jsx)(E,{isCurrent:!0,children:`Profile`})]})},R={render:()=>(0,j.jsxs)(b,{children:[(0,j.jsx)(E,{href:`/`,onClick:e=>{e.preventDefault(),console.log(`Navigate to Home`)},children:`Home`}),(0,j.jsx)(E,{href:`/projects`,onClick:e=>{e.preventDefault(),console.log(`Navigate to Projects`)},children:`Projects`}),(0,j.jsx)(E,{isCurrent:!0,children:`Detail`})]})},z={render:()=>(0,j.jsxs)(b,{children:[(0,j.jsx)(E,{href:`/`,children:`Home`}),(0,j.jsx)(E,{href:`/products`,children:`Products`}),(0,j.jsx)(E,{href:`/products/electronics`,children:`Electronics`}),(0,j.jsx)(E,{href:`/products/electronics/phones`,children:`Phones`}),(0,j.jsx)(E,{isCurrent:!0,children:`iPhone 15 Pro`})]})},B={name:`Supporting Variant`,render:()=>(0,j.jsxs)(b,{variant:`supporting`,children:[(0,j.jsx)(E,{href:`/`,children:`Home`}),(0,j.jsx)(E,{href:`/projects`,children:`Projects`}),(0,j.jsx)(E,{isCurrent:!0,children:`My Project`})]})},V={name:`Supporting Variant with Icons`,render:()=>(0,j.jsxs)(b,{variant:`supporting`,children:[(0,j.jsx)(E,{href:`/`,startIcon:(0,j.jsx)(y,{width:14,height:14,"aria-hidden":`true`}),children:`Home`}),(0,j.jsx)(E,{href:`/projects`,startIcon:(0,j.jsx)(_,{width:14,height:14,"aria-hidden":`true`}),children:`Projects`}),(0,j.jsx)(E,{isCurrent:!0,children:`My Project`})]})},H={name:`Current on Middle Item`,render:()=>(0,j.jsxs)(b,{children:[(0,j.jsx)(E,{href:`/`,children:`Home`}),(0,j.jsx)(E,{isCurrent:!0,children:`Projects`}),(0,j.jsx)(E,{href:`/projects/my-project/settings`,children:`Settings`})]})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumbs>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/projects">Projects</BreadcrumbItem>
      <BreadcrumbItem isCurrent>My Project</BreadcrumbItem>
    </Breadcrumbs>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumbs>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem isCurrent>Settings</BreadcrumbItem>
    </Breadcrumbs>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Auto-detect Current',
  render: () => <Breadcrumbs>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/projects">Projects</BreadcrumbItem>
      <BreadcrumbItem>Auto Current</BreadcrumbItem>
    </Breadcrumbs>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumbs separator={'›'}>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/docs">Docs</BreadcrumbItem>
      <BreadcrumbItem isCurrent>API Reference</BreadcrumbItem>
    </Breadcrumbs>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumbs>
      <BreadcrumbItem href="/" startIcon={<HomeIcon width={16} height={16} aria-hidden="true" />}>
        Home
      </BreadcrumbItem>
      <BreadcrumbItem href="/settings" startIcon={<Cog6ToothIcon width={16} height={16} aria-hidden="true" />}>
        Settings
      </BreadcrumbItem>
      <BreadcrumbItem isCurrent>Profile</BreadcrumbItem>
    </Breadcrumbs>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumbs>
      <BreadcrumbItem href="/" onClick={e => {
      e.preventDefault();
      console.log('Navigate to Home');
    }}>
        Home
      </BreadcrumbItem>
      <BreadcrumbItem href="/projects" onClick={e => {
      e.preventDefault();
      console.log('Navigate to Projects');
    }}>
        Projects
      </BreadcrumbItem>
      <BreadcrumbItem isCurrent>Detail</BreadcrumbItem>
    </Breadcrumbs>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumbs>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/products">Products</BreadcrumbItem>
      <BreadcrumbItem href="/products/electronics">
        Electronics
      </BreadcrumbItem>
      <BreadcrumbItem href="/products/electronics/phones">
        Phones
      </BreadcrumbItem>
      <BreadcrumbItem isCurrent>iPhone 15 Pro</BreadcrumbItem>
    </Breadcrumbs>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Supporting Variant',
  render: () => <Breadcrumbs variant="supporting">
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/projects">Projects</BreadcrumbItem>
      <BreadcrumbItem isCurrent>My Project</BreadcrumbItem>
    </Breadcrumbs>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Supporting Variant with Icons',
  render: () => <Breadcrumbs variant="supporting">
      <BreadcrumbItem href="/" startIcon={<HomeIcon width={14} height={14} aria-hidden="true" />}>
        Home
      </BreadcrumbItem>
      <BreadcrumbItem href="/projects" startIcon={<FolderIcon width={14} height={14} aria-hidden="true" />}>
        Projects
      </BreadcrumbItem>
      <BreadcrumbItem isCurrent>My Project</BreadcrumbItem>
    </Breadcrumbs>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Current on Middle Item',
  render: () => <Breadcrumbs>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem isCurrent>Projects</BreadcrumbItem>
      <BreadcrumbItem href="/projects/my-project/settings">
        Settings
      </BreadcrumbItem>
    </Breadcrumbs>
}`,...H.parameters?.docs?.source},description:{story:`Shows \`isCurrent\` on a middle breadcrumb item rather than the last one.
This is useful when navigating to a child page that isn't represented
in the breadcrumb trail — the parent is still the "current" page in
the hierarchy.`,...H.parameters?.docs?.description}}},U=[`Default`,`TwoLevels`,`AutoDetectCurrent`,`CustomSeparator`,`WithIcons`,`WithOnClick`,`DeepHierarchy`,`SupportingVariant`,`SupportingWithIcons`,`CurrentOnMiddleItem`]})))()}W();export{F as AutoDetectCurrent,H as CurrentOnMiddleItem,I as CustomSeparator,z as DeepHierarchy,N as Default,B as SupportingVariant,V as SupportingWithIcons,P as TwoLevels,L as WithIcons,R as WithOnClick,U as __namedExportsOrder,M as default};