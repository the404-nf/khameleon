import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{n as r,t as i}from"./stylex-Dft6gtPK.js";import{i as a,n as o,r as ee,t as te}from"./LayoutContent-BygUy9He.js";import{n as s}from"./mergeProps-JRyAvMxc.js";import{n as c}from"./mergeRefs-CPqjs56a.js";import{n as l,t as u}from"./themeProps-DRQoVAIO.js";import{b as ne,x as re,y as d}from"./useTruncation-OBVzrhuI.js";import{t as f}from"./jsx-runtime-DeHZSEgm.js";import{n as p,t as m}from"./LayoutHeader-DdDaoZAf.js";import{n as h,t as ie}from"./LayoutPanel-2ZCQvBkc.js";import{a as ae,i as g}from"./useTheme-2-Iqk0Q6.js";import{n as _,t as oe}from"./AppShellMobileContext-BSIiXD93.js";import{n as se,t as v}from"./useTranslator-Cp3lSSgn.js";import{a as y,c as b,i as x,n as S,s as ce,t as C}from"./TopNavMobileContentContext-7XKO9nzl.js";import{n as w,t as T}from"./SideNavRenderContext-BNrC8qiQ.js";function E(e){return e!=null&&typeof e!=`boolean`&&e!==``}function D({variant:e=`elevated`,banner:t,children:n,contentPadding:i,"data-testid":a,height:o=`fill`,mobileNav:u,sideNav:d,topNav:f,xstyle:p,className:h,style:g,ref:_,...v}){let y=se(),b=u===!1,S=u!=null&&u!==!1&&typeof u==`object`&&!(0,k.isValidElement)(u)?u:null,w=S?.breakpoint??`md`,D=u!=null&&u!==!1&&((0,k.isValidElement)(u)||typeof u==`string`)?u:null,O=S?.content??null,F=S?.hasToggle!==!1,I=S?.isOpen!==void 0,le=w===`none`?`(max-width: 0px)`:`(max-width: ${M[w]}px)`,L=ae(le,S?.defaultIsMobile),[ue,de]=(0,k.useState)(!1),R=S?.isOpen??ue,z=(0,k.useCallback)(e=>{I||de(e),S?.onOpenChange?.(e)},[I,S]),B=o===`fill`,V=o===`auto`,H=E(t),U=E(f),W=E(d),G=!b&&(U||W)&&D==null,K=e===`section`,fe=e===`elevated`,q=e===`wash`||e===`elevated`?P.navAreaWash:e===`surface`?P.navAreaSurface:void 0,pe=e===`wash`?P.contentBgWash:e===`elevated`&&U&&W&&!L?P.contentBgTransparent:e===`surface`||e===`elevated`?P.contentBgSurface:void 0,me=q??P.navAreaSurface,J=(0,k.useRef)(null),Y=(0,k.useRef)(null);(0,k.useEffect)(()=>{if(!V||!J.current||!Y.current)return;let e=J.current,t=Y.current,n=()=>{let n=e.getBoundingClientRect().height;t.style.setProperty(`--appshell-header-height`,`${n}px`)};return ne(e,()=>n()),()=>re(e)},[V]);let X=W&&!L,he=D!=null,ge=G&&O!=null&&L,_e=(0,k.useMemo)(()=>({isMobile:L,isMobileNavOpen:R,toggleMobileNav:()=>G&&z(!R),openMobileNav:()=>G&&z(!0),closeMobileNav:()=>z(!1),isMobileNavEnabled:G,hasAutoToggle:F}),[L,R,z,G,F]),ve=W&&F?(0,A.jsx)(T,{value:`drawer-content`,children:d}):null,ye=W?(0,A.jsx)(T,{value:`drawer-content`,children:d}):null,be=U?L&&!b&&D==null?(0,A.jsx)(C,{value:ve,children:(0,A.jsx)(x,{value:`mobile-bar`,children:f})}):f:null,Z=U||H?(0,A.jsxs)(m,{padding:0,hasDivider:K&&U,children:[H&&(0,A.jsx)(`div`,{...r(P.banner,q),children:t}),U&&be]}):void 0,xe=Z==null?void 0:(0,A.jsx)(`div`,{ref:J,...s(l(`app-shell-header`,{variant:e}),r(q,V&&P.headerSticky)),children:Z}),Q=X?(0,A.jsx)(ie,{padding:0,hasDivider:K,isScrollable:B,...l(`app-shell-sidenav`,{variant:e}),xstyle:[q,V&&me,V&&P.panelAutoFill],children:d}):void 0,Se=Q!=null&&V?(0,A.jsx)(`div`,{className:`khameleon2lah0s khameleon7giv3 khameleon7wzq59 khameleonepuwc7 khameleon16zugyo khameleon78zum5 khameleondt5ytf`,children:Q}):Q,Ce=fe&&U&&X,$=(0,A.jsx)(te,{padding:i??0,role:`main`,id:N,isScrollable:B,xstyle:pe,children:n}),we=Ce?(0,A.jsxs)(`div`,{className:`khameleon1n2onr6 khameleon78zum5 khameleon98rzlu khameleon2lwn1j khameleon5yr21d`,children:[(0,A.jsx)(`div`,{className:`khameleon10l6tqk khameleon10a8y8t khameleon10xzikg khameleon183tx6i khameleon47corl`}),$]}):$,Te=!b&&F&&L&&!U&&W?(0,A.jsx)(`div`,{...s(l(`app-shell-header`,{variant:e}),r(q,V&&P.headerSticky)),children:(0,A.jsx)(m,{padding:0,hasDivider:K,children:(0,A.jsxs)(`div`,{className:`khameleon78zum5 khameleon6s0dn4 khameleon1k15mir khameleonf314gf`,role:`navigation`,"aria-label":y(`@khameleon.appShell.mobileNavigation`),children:[(0,A.jsx)(T,{value:`topbar`,children:d}),(0,A.jsx)(ce,{})]})})}):void 0;return(0,A.jsx)(oe,{value:_e,children:(0,A.jsxs)(`div`,{...v,ref:c(_,Y),"data-testid":a,...s(l(`app-shell`,{variant:e}),r(P.root,e===`wash`?P.variantWash:e===`surface`?P.variantSurface:e===`section`?P.variantSection:P.variantElevated,B?P.rootFill:P.rootAuto,p),h,g),children:[(0,A.jsx)(`a`,{href:`#${N}`,className:`khameleon10l6tqk khameleon1xrnuwo khameleon1i1rx1s khameleon1jqxupm khameleonjm9jq1 khameleon15cytp8 khameleont970qd khameleonh2mrf5 khameleonnjsko4 khameleon1cf3d6k khameleonkdpibf khameleon1y5lnwp khameleonb3r6kr khameleonomzh7y khameleon1hyvwdk khameleon1rsz1da khameleonuxw1ft khameleon1hbpcn8 khameleonc342km khameleon13vifvy khameleon1rw3289 khameleon1o0tod khameleonodanix khameleon10xzikg khameleonjse4m1 khameleon1q2oy4v khameleon1hl2dhg khameleon2mo6ok khameleonjm74w1`,"data-testid":`skip-to-content`,children:`Skip to content`}),(0,A.jsx)(ee,{height:o,padding:0,header:(0,A.jsxs)(A.Fragment,{children:[xe,Te]}),start:Se,content:we}),he&&D,ge&&O,L&&!b&&D==null&&!O&&(0,A.jsxs)(j,{mode:R?`visible`:`hidden`,children:[W&&!U&&(0,A.jsx)(T,{value:`drawer`,children:d}),U&&(0,A.jsx)(C,{value:ye,children:(0,A.jsx)(x,{value:`drawer`,children:f})})]})]})})}var O,k,A,j,M,N,P;function F(){return(F=t((()=>{O=e(n(),1),k=n(),i(),a(),p(),h(),o(),b(),w(),y(),S(),_(),g(),d(),u(),v(),A=f(),j=O.Activity===void 0?({children:e})=>(0,A.jsx)(A.Fragment,{children:e}):({mode:e,children:t})=>(0,A.jsx)(O.Activity,{mode:e,children:t}),M={sm:640,md:768,lg:1024,none:0},N=`khameleon-app-shell-main`,P={root:{k1xSpc:`khameleon78zum5`,kXwgrk:`khameleondt5ytf`,kVAEAm:`khameleon1n2onr6`,$$css:!0},variantWash:{kWkggS:`khameleon1eiddq6`,$$css:!0},variantSurface:{kWkggS:`khameleon10xzikg`,$$css:!0},variantSection:{kWkggS:`khameleon10xzikg`,$$css:!0},variantElevated:{kWkggS:`khameleon1eiddq6`,$$css:!0},rootFill:{kZKoxP:`khameleontdtrs8`,$$css:!0},rootAuto:{kAzted:`khameleon1ov3xa9`,$$css:!0},contentBgSurface:{kWkggS:`khameleon10xzikg`,$$css:!0},contentBgWash:{kWkggS:`khameleon1eiddq6`,$$css:!0},contentBgTransparent:{kWkggS:`khameleonjbqb8w`,kHBbk8:`khameleonc8icb0`,$$css:!0},navAreaWash:{kWkggS:`khameleon1eiddq6`,$$css:!0},navAreaSurface:{kWkggS:`khameleon10xzikg`,$$css:!0},banner:{kmuXW:`khameleon2lah0s`,$$css:!0},headerSticky:{kVAEAm:`khameleon7wzq59`,k87sOh:`khameleon13vifvy`,kY2c9j:`khameleon1vjfegm`,$$css:!0},panelAutoFill:{kUk6DE:`khameleon98rzlu`,kzQI83:null,kmuXW:null,kCS8Yb:null,kVQacm:`khameleonysyzu8`,kXHlph:null,kORKVm:null,$$css:!0}},D.displayName=`AppShell`,D.__docgenInfo={description:`Application-level layout shell. Provides the structural frame for an app:
top navigation, side navigation, and main content area.

Slot-based API with \`topNav\`, \`sideNav\`, \`banner\`, and \`children\`.
Supports two height modes (\`fill\` and \`auto\`), responsive side nav
collapse, and mobile overlay with backdrop.

@example
\`\`\`
<AppShell
  topNav={<TopNav label="Navigation" heading={<TopNavHeading heading="My App" />} />}
  sideNav={<SideNav>{navSections}</SideNav>}
  mobileNav={
    <MobileNav isOpen={mobileOpen} onOpenChange={(open) => setMobileOpen(open)} title="My App">
      {navSections}
    </MobileNav>
  }>
  <Content />
</AppShell>
\`\`\``,methods:[],displayName:`AppShell`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:`Ref forwarded to the root element`},variant:{required:!1,tsType:{name:`AppShellVariantMap`},description:"Navigation background style controlling how nav areas contrast with content.\n- `wash`: Nav uses wash background, no dividers\n- `surface`: Nav uses surface background, no dividers\n- `section`: Dividers between nav and content (classic look)\n- `elevated`: Wash nav with elevated surface content area + border radius\n@default 'elevated'",defaultValue:{value:`'elevated'`,computed:!1}},banner:{required:!1,tsType:{name:`ReactNode`},description:`Optional banner slot for system-wide announcements.
Renders above the top nav and scrolls away with the page in auto mode.`},children:{required:!0,tsType:{name:`ReactNode`},description:"Main content area (rendered as `<main>`)."},contentPadding:{required:!1,tsType:{name:`union`,raw:`0 | 0.5 | 1 | 1.5 | 2 | 3 | 4 | 5 | 6 | 8 | 10`,elements:[{name:`literal`,value:`0`},{name:`literal`,value:`0.5`},{name:`literal`,value:`1`},{name:`literal`,value:`1.5`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`},{name:`literal`,value:`6`},{name:`literal`,value:`8`},{name:`literal`,value:`10`}]},description:"Padding for the main content area using the spacing scale.\nSet based on the dominant content pattern for the page:\n- `4` (16px) — standard padding for forms, settings, text-heavy pages\n- `0` — no padding, for dashboards, maps, tables that need edge-to-edge\nOverride individual sections with `<Section padding={...}>`.\nAccepts numeric spacing steps: 0, 0.5, 1, 1.5, 2, 3, 4, 5, 6, 8, 10."},height:{required:!1,tsType:{name:`union`,raw:`'fill' | 'auto'`,elements:[{name:`literal`,value:`'fill'`},{name:`literal`,value:`'auto'`}]},description:"Height behavior:\n- `fill`: Shell fills viewport, content scrolls internally (default)\n- `auto`: Shell grows with content, page scrolls as a whole\n@default 'fill'",defaultValue:{value:`'fill'`,computed:!1}},mobileNav:{required:!1,tsType:{name:`union`,raw:`false | MobileNavConfig | ReactNode`,elements:[{name:`literal`,value:`false`},{name:`MobileNavConfig`},{name:`ReactNode`}]},description:`Mobile navigation configuration.

Accepts three shapes:
- **\`false\`** — Disable mobile nav entirely.
- **\`MobileNavConfig\` object** — Configure auto behavior (toggle, controlled state, custom content).
- **\`ReactNode\`** — Full escape hatch: provide your own \`<MobileNav>\` (you own everything).

When omitted, AppShell automatically generates a mobile drawer with
sideNav content (and TopNav items in the future) below the breakpoint.

@example
\`\`\`
<AppShell topNav={...} sideNav={...} />
<AppShell mobileNav={{ isOpen, onOpenChange }} />
<AppShell mobileNav={{ hasToggle: false }}>
  <MobileNavToggle />
</AppShell>
<AppShell mobileNav={<MobileNav title="Menu">...</MobileNav>} />
<AppShell mobileNav={false} />
\`\`\``},sideNav:{required:!1,tsType:{name:`ReactNode`},description:`Side navigation — typically an SideNav.

Pass \`undefined\` (or omit) when a page has no side navigation.
Do NOT pass a component that renders \`null\` — AppShell treats any
renderable value as "sidenav exists".

**Next.js parallel routes:** Conditionally pass the slot based on
the current route rather than relying on a \`default.tsx\` that
returns \`null\`:

@example
\`\`\`
const SIDEBAR_ROUTES = ['/dashboard', '/settings'];
function Layout({ children, sidebar }) {
  const hasSidebar = SIDEBAR_ROUTES.some(r => pathname.startsWith(r));
  return (
    <AppShell
      sideNav={hasSidebar ? sidebar : undefined}
      mobileNav={hasSidebar ? { breakpoint: 'md' } : false}>
      {children}
    </AppShell>
  );
}
\`\`\``},topNav:{required:!1,tsType:{name:`ReactNode`},description:"Top navigation — typically an TopNav.\nSame contract as `sideNav` — pass `undefined` when there's no top nav."}},composes:[`Omit`]}})))()}export{F as n,D as t};