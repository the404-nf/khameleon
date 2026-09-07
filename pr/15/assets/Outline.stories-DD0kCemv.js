import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./stylex-Dft6gtPK.js";import{n as i}from"./mergeProps-JRyAvMxc.js";import{n as a}from"./mergeRefs-CPqjs56a.js";import{n as o,t as s}from"./themeProps-DRQoVAIO.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./Text-543dlLxz.js";import{n as d,t as f}from"./useLinkComponent-DvgS1IvL.js";import{n as p,t as m}from"./useTranslator-Cp3lSSgn.js";import{n as h,t as g}from"./Badge-DN3od1Tr.js";import{n as ee,t as _}from"./Heading-CAKcIsWt.js";import{i as v,n as y,r as b,t as x}from"./Markdown-xrmi94aG.js";function S(e){let t=e?.parentElement??null;for(;t!=null;){let e=window.getComputedStyle(t).overflowY;if((e===`auto`||e===`scroll`||e===`overlay`)&&t.scrollHeight>t.clientHeight)return t;t=t.parentElement}return null}function C(e,t){if(e.length===0)return;let n=t==null?0:t.getBoundingClientRect().top;if(t==null?window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-2:t.scrollTop+t.clientHeight>=t.scrollHeight-2)return e[e.length-1].id;let r=e[0].id;for(let t of e){let e=document.getElementById(t.id);if(e!=null){if(e.getBoundingClientRect().top<=n+(Number.parseFloat(window.getComputedStyle(e).scrollMarginTop)||0)+1)r=t.id;else break}}return r}function te({activeId:e,items:t,onActiveIdChange:n,rootRef:r}){let i=e!==void 0,[a,o]=(0,w.useState)(t[0]?.id),s=(0,w.useRef)(e),c=(0,w.useRef)(!1),l=(0,w.useRef)(null),u=(0,w.useRef)(null),d=(0,w.useRef)(t);d.current=t;let f=(0,w.useRef)(n);f.current=n;let p=t.map(e=>e.id).join(`
`);s.current=i?e:a,(0,w.useEffect)(()=>{if(i||typeof window>`u`)return;let e=S(r.current),t=e??window,n=0,a=()=>{if(n=0,c.current)return;let t=C(d.current,e);t!=null&&t!==s.current&&(s.current=t,o(t),f.current?.(t))},l=()=>{n===0&&(n=requestAnimationFrame(a))};return u.current=a,a(),t.addEventListener(`scroll`,l,{passive:!0}),window.addEventListener(`resize`,l,{passive:!0}),()=>{u.current=null,t.removeEventListener(`scroll`,l),window.removeEventListener(`resize`,l),n!==0&&cancelAnimationFrame(n)}},[i,p,r]),(0,w.useEffect)(()=>()=>{l.current?.()},[]);let m=e=>{i||o(e),n?.(e)},h=(0,w.useCallback)(e=>{if(typeof window>`u`){o(e),s.current=e,f.current?.(e);return}c.current=!0,l.current?.();let t=0,n=()=>{window.removeEventListener(`scrollend`,r),window.removeEventListener(`wheel`,i),window.removeEventListener(`touchmove`,i),window.removeEventListener(`keydown`,a),t!==0&&(clearTimeout(t),t=0),l.current=null},r=()=>{n(),c.current=!1,o(e),s.current=e,f.current?.(e)},i=()=>{n(),c.current=!1,u.current?.()},a=e=>{T.has(e.key)&&i()};window.addEventListener(`scrollend`,r,{once:!0}),window.addEventListener(`wheel`,i,{passive:!0}),window.addEventListener(`touchmove`,i,{passive:!0}),window.addEventListener(`keydown`,a),t=window.setTimeout(r,1200),l.current=n},[]);return{activeId:i?e:a,setActiveId:m,lockActiveId:h}}var w,T;function E(){return(E=e((()=>{w=t(),T=new Set([`ArrowUp`,`ArrowDown`,`PageUp`,`PageDown`,`Home`,`End`,` `,`Spacebar`])})))()}function ne(e){switch(Math.max(1,Math.min(4,e-1||1))){case 1:return M.level1;case 2:return M.level2;case 3:return M.level3;default:return M.level4}}function D({items:e,activeId:t,onActiveIdChange:r,label:s,density:c=`default`,xstyle:l,className:u,style:f,ref:m,"data-testid":h,...g}){let ee=p(),_=s??ee(`@khameleon.outline.label`),v=(0,O.useRef)(null),y=d(),b=t!==void 0,{activeId:x,setActiveId:S,lockActiveId:C}=te({activeId:t,items:e,onActiveIdChange:r,rootRef:v}),w=e=>t=>{let n=document.getElementById(e);n==null||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),window.history.pushState(null,``,`#${e}`),b?S(e):C(e),n.scrollIntoView({behavior:`smooth`,block:`start`}))};return(0,k.jsxs)(`nav`,{...g,ref:a(v,m),"aria-label":_,"data-testid":h,...i(o(`outline`,{density:c}),n(A.root,l),u,f),children:[(0,k.jsx)(`ul`,{className:`khameleon78zum5 khameleondt5ytf khameleon1lsbc85 khameleon1ghz6dp khameleon1717udv khameleone8uvvx khameleon98rzlu khameleoneuugli`,role:`list`,children:e.map(e=>{let t=e.id===x;return(0,k.jsx)(`li`,{className:`khameleon3ct3a4 khameleon1ghz6dp khameleon1717udv`,role:`listitem`,children:(0,k.jsx)(y,{href:`#${e.id}`,"aria-current":t?`true`:void 0,onClick:w(e.id),...i(o(`outline-item`,{active:t?`active`:null,level:e.level}),n(A.link,j[c],ne(e.level),t&&A.activeLink,t&&A.activeAnchor)),children:(0,k.jsx)(`span`,{className:`khameleonb3r6kr khameleonlyipyv khameleonuxw1ft`,children:e.label})})},e.id)})}),(0,k.jsx)(`div`,{className:`khameleon1n2onr6 khameleonfo62xy khameleon2lah0s khameleon1clqncf`,"aria-hidden":`true`,children:(0,k.jsx)(`span`,{className:`khameleon10l6tqk khameleon13vifvy khameleon1ey2m1c khameleon1o0tod khameleonfo62xy khameleon1m4xfpy khameleonjspbzw khameleon47corl`})}),(0,k.jsx)(`span`,{...i(o(`outline-indicator`),{className:`khameleon10l6tqk khameleon1o0tod khameleonfo62xy khameleonowkcby khameleonjspbzw khameleon47corl khameleon1vjfegm khameleon1tsffl5 khameleon1ltwjim khameleon1qjb5ga khameleon1xuz8iz khameleonkvfbh3 khameleonlr8y92`}),"aria-hidden":`true`})]})}var O,k,A,j,M;function N(){return(N=e((()=>{O=t(),r(),f(),E(),s(),m(),k=c(),A={root:{k1xSpc:`khameleon78zum5`,kXwgrk:`khameleon1q0g3np`,kVAEAm:`khameleon1n2onr6`,kOIVth:`khameleon1lsbc85`,kzqmXN:`khameleonh8yej3`,$$css:!0},activeAnchor:{k48fcG:`khameleon7dpabl`,$$css:!0},link:{kGNEyG:`khameleon6s0dn4`,kaIpWk:`khameleonh6dtrn`,kB7OPa:`khameleon9f619`,kMwMTN:`khameleonv1l7n4`,kkrTdU:`khameleon1ypdohk`,k1xSpc:`khameleon78zum5`,k63SB2:`khameleon1sodnla`,kI3sdo:`khameleon1a2a7pz`,kVAEAm:`khameleon1n2onr6`,k9WMMc:`khameleon1yc453h`,kybGjl:`khameleon1hl2dhg`,kIyJzY:`khameleonuedmi6`,k1ekBW:`khameleons2xxs2`,kAMwcw:`khameleonlr8y92`,kzqmXN:`khameleonh8yej3`,kGuDYH:`khameleonjm74w1`,kLWn49:`khameleonw6l6zx`,kHE3J0:`khameleone9uy6x`,krNwJM:`khameleon140uwzg`,kSReZ0:`khameleonyxi2l3`,k3Woio:`khameleon17nn4n9`,kiEn40:`khameleon7s97pk`,$$css:!0},activeLink:{kMwMTN:`khameleon1tgivj0`,k63SB2:`khameleon2mo6ok`,$$css:!0}},j={compact:{k8WAf4:`khameleonu0wf1k`,kLKAdn:null,kGO01o:null,kwRFfy:`khameleon1djylfy`,kE3dHu:null,kpe85a:null,$$css:!0},default:{k8WAf4:`khameleonce4md1`,kLKAdn:null,kGO01o:null,kwRFfy:`khameleon1djylfy`,kE3dHu:null,kpe85a:null,$$css:!0}},M={level1:{kZCmMZ:`khameleon126nfab`,kE3dHu:null,kpe85a:null,$$css:!0},level2:{kZCmMZ:`khameleonchaq28`,kE3dHu:null,kpe85a:null,$$css:!0},level3:{kZCmMZ:`khameleonc8afjc`,kE3dHu:null,kpe85a:null,$$css:!0},level4:{kZCmMZ:`khameleon19b7t93`,kE3dHu:null,kpe85a:null,$$css:!0}},D.displayName=`Outline`,D.__docgenInfo={description:`A table-of-contents navigation component for document headings.

Outline accepts a flat \`items\` array and renders anchor links with
indentation based on each heading level. Features a sliding indicator
track that animates to the active item.

When \`activeId\` is omitted, it tracks scroll position and marks the last
heading whose top has passed its activation line (its scroll-margin-top)
active — defaulting to the first item at the top and the last at the bottom.

@example
\`\`\`
<Outline
  items={[
    {id: 'intro', label: 'Introduction', level: 1},
    {id: 'features', label: 'Features', level: 2},
    {id: 'api', label: 'API Reference', level: 1},
  ]}
/>
\`\`\``,methods:[],displayName:`Outline`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLElement>`,elements:[{name:`HTMLElement`}]},description:`Ref forwarded to the root nav element.`},items:{required:!0,tsType:{name:`Array`,elements:[{name:`OutlineItem`}],raw:`OutlineItem[]`},description:`Ordered list of heading items to render.`},activeId:{required:!1,tsType:{name:`string`},description:`ID of the currently active item. When provided, disables built-in scroll-spy.`},onActiveIdChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(id: string) => void`,signature:{arguments:[{type:{name:`string`},name:`id`}],return:{name:`void`}}},description:`Called when the active item changes from scroll-spy or click.`},label:{required:!1,tsType:{name:`string`},description:`Accessible label for the nav landmark. @default 'Table of contents'`},density:{required:!1,tsType:{name:`union`,raw:`'default' | 'compact'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'compact'`}]},description:`Density variant controlling item padding.
- 'default': Standard spacing (default)
- 'compact': Reduced spacing for dense UIs
@default 'default'`,defaultValue:{value:`'default'`,computed:!1}},"data-testid":{required:!1,tsType:{name:`string`},description:`Test ID for testing frameworks.`}},composes:[`Omit`]}})))()}function P(e){return e.map(e=>{switch(e.type){case`text`:case`code`:return e.content;case`bold`:case`italic`:case`strikethrough`:case`link`:return P(e.children);case`image`:return e.alt;case`citation`:case`break`:return``}}).join(``)}function re(e){return e.trim().toLowerCase().replace(/['"]/g,``).replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``)}function ie(e,t){let n=e||`section`,r=t.get(n)??0;return t.set(n,r+1),r===0?n:`${n}-${r}`}function ae(e){let t=new Map;return v(e).filter(e=>e.type===`heading`).map(e=>{let n=P(e.children).trim();return{id:ie(re(n),t),label:n,level:e.level}})}function F(){return(F=e((()=>{b()})))()}function oe(e){return(0,I.useMemo)(()=>ae(e),[e])}var I;function L(){return(L=e((()=>{I=t(),F()})))()}function R(e){return e==null?[]:Array.from(e.querySelectorAll(`h1,h2,h3,h4,h5,h6`)).map(e=>{let t=Number(e.tagName.slice(1)),n=e.textContent?.trim()??``;return{id:e.id,label:n,level:t}}).filter(e=>e.id!==``&&e.label!==``)}function se(e){let[t,n]=(0,z.useState)(()=>R(e.current));return(0,z.useEffect)(()=>{let t=e.current;if(n(R(t)),t==null||typeof MutationObserver>`u`)return;let r=new MutationObserver(()=>{n(R(t))});return r.observe(t,{childList:!0,subtree:!0,characterData:!0,attributes:!0,attributeFilter:[`id`]}),()=>{r.disconnect()}},[e]),t}var z;function B(){return(B=e((()=>{z=t()})))()}function V(e){return typeof e==`string`||typeof e==`number`?String(e):Array.isArray(e)?e.map(V).join(``):``}function ce(e){return e.trim().toLowerCase().replace(/['\u201C\u201D"]/g,``).replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``)||`section`}var H,U,W,G,K,q,J,Y,X,Z,Q,$,le;function ue(){return(ue=e((()=>{H=t(),N(),B(),L(),h(),y(),ee(),l(),U=c(),W={title:`Core/Outline`,component:D,tags:[`autodocs`],argTypes:{label:{control:`text`,description:`Accessible label for the nav landmark`},activeId:{control:`text`,description:`Controlled active item id`},density:{control:`radio`,options:[`default`,`compact`],description:`Density variant`}}},G=[{id:`overview`,label:`Overview`,level:2},{id:`installation`,label:`Installation`,level:2},{id:`theming`,label:`Theming`,level:2},{id:`tokens`,label:`Tokens`,level:3},{id:`component-overrides`,label:`Component overrides`,level:3},{id:`accessibility`,label:`Accessibility`,level:2}],K=[`## Overview`,``,`Khameleon gives teams a consistent foundation for internal product surfaces.`,``,`## Installation`,``,`Install the package and wrap the app in an Theme provider.`,``,`### Package setup`,``,`Import components from their component subpaths for clear ownership.`,``,`### Theme setup`,``,`Use a built theme in production so component overrides are present at first paint.`,``,`## Accessibility`,``,`Components include semantic roles, labels, and focus behavior where applicable.`].join(`
`),q={args:{items:G}},J={args:{items:G,activeId:`tokens`}},Y={args:{items:G,activeId:`installation`,density:`compact`}},X={render:()=>(0,U.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`minmax(0, 1fr) 220px`,gap:32,maxWidth:960},children:[(0,U.jsxs)(`article`,{style:{display:`grid`,gap:24},children:[(0,U.jsxs)(`section`,{children:[(0,U.jsx)(`h2`,{id:`overview`,children:`Overview`}),(0,U.jsx)(`p`,{children:`Khameleon components provide consistent interaction, styling, and theme behavior for internal tools.`})]}),(0,U.jsxs)(`section`,{children:[(0,U.jsx)(`h2`,{id:`installation`,children:`Installation`}),(0,U.jsx)(`p`,{children:`Install the package, wrap the app with Theme, and import components from their subpaths.`})]}),(0,U.jsxs)(`section`,{children:[(0,U.jsx)(`h2`,{id:`theming`,children:`Theming`}),(0,U.jsx)(`p`,{children:`Themes define semantic tokens and component overrides without changing app code.`}),(0,U.jsx)(`h3`,{id:`tokens`,children:`Tokens`}),(0,U.jsx)(`p`,{children:`Use semantic color, spacing, typography, radius, elevation, and motion tokens.`}),(0,U.jsx)(`h3`,{id:`component-overrides`,children:`Component overrides`}),(0,U.jsx)(`p`,{children:`Component overrides target the stable Khameleon selector surface emitted by each component: khameleon-* classes plus data-* prop reflections.`})]}),(0,U.jsxs)(`section`,{children:[(0,U.jsx)(`h2`,{id:`accessibility`,children:`Accessibility`}),(0,U.jsx)(`p`,{children:`Components include landmark, keyboard, focus, and ARIA behavior where applicable.`})]})]}),(0,U.jsx)(`aside`,{style:{position:`sticky`,top:24,alignSelf:`start`},children:(0,U.jsx)(D,{items:G})})]})},Z={render:()=>{let e=oe(K);return(0,U.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`minmax(0, 1fr) 220px`,gap:32,maxWidth:960},children:[(0,U.jsx)(x,{components:{heading:({level:e,children:t})=>{let n=`h${e}`;return(0,U.jsx)(n,{id:ce(V(t)),children:t})}},children:K}),(0,U.jsx)(`aside`,{style:{position:`sticky`,top:24,alignSelf:`start`},children:(0,U.jsx)(D,{items:e})})]})}},Q={render:()=>{let e=(0,H.useRef)(null),t=se(e);return(0,U.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`minmax(0, 1fr) 220px`,gap:32,maxWidth:960},children:[(0,U.jsxs)(`article`,{ref:e,style:{display:`grid`,gap:24},children:[(0,U.jsxs)(`section`,{children:[(0,U.jsx)(_,{id:`account-settings`,level:2,children:`Account settings`}),(0,U.jsx)(u,{type:`body`,children:`Manage profile, authentication, and workspace preferences.`}),(0,U.jsxs)(`div`,{style:{display:`flex`,gap:8,marginTop:12},children:[(0,U.jsx)(g,{variant:`success`,label:`Active`}),(0,U.jsx)(g,{variant:`neutral`,label:`Workspace`})]})]}),(0,U.jsxs)(`section`,{children:[(0,U.jsx)(_,{id:`notifications`,level:2,children:`Notifications`}),(0,U.jsx)(u,{type:`body`,children:`Choose which product events should notify the team.`}),(0,U.jsx)(_,{id:`email-alerts`,level:3,children:`Email alerts`}),(0,U.jsx)(u,{type:`body`,children:`Use email for low-frequency summaries and approvals.`}),(0,U.jsx)(_,{id:`push-alerts`,level:3,children:`Push alerts`}),(0,U.jsx)(u,{type:`body`,children:`Use push for time-sensitive updates and incidents.`})]}),(0,U.jsxs)(`section`,{children:[(0,U.jsx)(_,{id:`billing`,level:2,children:`Billing`}),(0,U.jsx)(u,{type:`body`,children:`Review invoices, payment methods, and usage limits.`})]})]}),(0,U.jsx)(`aside`,{style:{position:`sticky`,top:24,alignSelf:`start`},children:(0,U.jsx)(D,{items:t})})]})}},$={render:()=>(0,U.jsx)(`div`,{style:{width:240},children:(0,U.jsx)(D,{items:[{id:`chapter-1`,label:`Chapter 1`,level:1},{id:`section-1-1`,label:`Section 1.1`,level:2},{id:`subsection-1-1-1`,label:`Subsection 1.1.1`,level:3},{id:`subsection-1-1-2`,label:`Subsection 1.1.2`,level:3},{id:`section-1-2`,label:`Section 1.2`,level:2},{id:`chapter-2`,label:`Chapter 2`,level:1},{id:`section-2-1`,label:`Section 2.1`,level:2}],activeId:`subsection-1-1-1`})})},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    items: outlineItems
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    items: outlineItems,
    activeId: 'tokens'
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    items: outlineItems,
    activeId: 'installation',
    density: 'compact'
  }
}`,...Y.parameters?.docs?.source},description:{story:`Compact density variant — reduced spacing for dense UIs`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) 220px',
    gap: 32,
    maxWidth: 960
  }}>
      <article style={{
      display: 'grid',
      gap: 24
    }}>
        <section>
          <h2 id="overview">Overview</h2>
          <p>
            Khameleon components provide consistent interaction, styling, and theme
            behavior for internal tools.
          </p>
        </section>
        <section>
          <h2 id="installation">Installation</h2>
          <p>
            Install the package, wrap the app with Theme, and import
            components from their subpaths.
          </p>
        </section>
        <section>
          <h2 id="theming">Theming</h2>
          <p>
            Themes define semantic tokens and component overrides without
            changing app code.
          </p>
          <h3 id="tokens">Tokens</h3>
          <p>
            Use semantic color, spacing, typography, radius, elevation, and
            motion tokens.
          </p>
          <h3 id="component-overrides">Component overrides</h3>
          <p>
            Component overrides target the stable Khameleon selector surface emitted
            by each component: khameleon-* classes plus data-* prop reflections.
          </p>
        </section>
        <section>
          <h2 id="accessibility">Accessibility</h2>
          <p>
            Components include landmark, keyboard, focus, and ARIA behavior
            where applicable.
          </p>
        </section>
      </article>
      <aside style={{
      position: 'sticky',
      top: 24,
      alignSelf: 'start'
    }}>
        <Outline items={outlineItems} />
      </aside>
    </div>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items = useOutlineFromMarkdown(markdownContent);
    return <div style={{
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) 220px',
      gap: 32,
      maxWidth: 960
    }}>
        <Markdown components={{
        heading: ({
          level,
          children
        }) => {
          const Tag = \`h\${level}\` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
          return <Tag id={storySlug(nodeText(children))}>{children}</Tag>;
        }
      }}>
          {markdownContent}
        </Markdown>
        <aside style={{
        position: 'sticky',
        top: 24,
        alignSelf: 'start'
      }}>
          <Outline items={items} />
        </aside>
      </div>;
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const contentRef = useRef<HTMLElement | null>(null);
    const items = useOutlineFromDOM(contentRef);
    return <div style={{
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) 220px',
      gap: 32,
      maxWidth: 960
    }}>
        <article ref={contentRef} style={{
        display: 'grid',
        gap: 24
      }}>
          <section>
            <Heading id="account-settings" level={2}>
              Account settings
            </Heading>
            <Text type="body">
              Manage profile, authentication, and workspace preferences.
            </Text>
            <div style={{
            display: 'flex',
            gap: 8,
            marginTop: 12
          }}>
              <Badge variant="success" label="Active" />
              <Badge variant="neutral" label="Workspace" />
            </div>
          </section>
          <section>
            <Heading id="notifications" level={2}>
              Notifications
            </Heading>
            <Text type="body">
              Choose which product events should notify the team.
            </Text>
            <Heading id="email-alerts" level={3}>
              Email alerts
            </Heading>
            <Text type="body">
              Use email for low-frequency summaries and approvals.
            </Text>
            <Heading id="push-alerts" level={3}>
              Push alerts
            </Heading>
            <Text type="body">
              Use push for time-sensitive updates and incidents.
            </Text>
          </section>
          <section>
            <Heading id="billing" level={2}>
              Billing
            </Heading>
            <Text type="body">
              Review invoices, payment methods, and usage limits.
            </Text>
          </section>
        </article>
        <aside style={{
        position: 'sticky',
        top: 24,
        alignSelf: 'start'
      }}>
          <Outline items={items} />
        </aside>
      </div>;
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items: OutlineItem[] = [{
      id: 'chapter-1',
      label: 'Chapter 1',
      level: 1
    }, {
      id: 'section-1-1',
      label: 'Section 1.1',
      level: 2
    }, {
      id: 'subsection-1-1-1',
      label: 'Subsection 1.1.1',
      level: 3
    }, {
      id: 'subsection-1-1-2',
      label: 'Subsection 1.1.2',
      level: 3
    }, {
      id: 'section-1-2',
      label: 'Section 1.2',
      level: 2
    }, {
      id: 'chapter-2',
      label: 'Chapter 2',
      level: 1
    }, {
      id: 'section-2-1',
      label: 'Section 2.1',
      level: 2
    }];
    return <div style={{
      width: 240
    }}>
        <Outline items={items} activeId="subsection-1-1-1" />
      </div>;
  }
}`,...$.parameters?.docs?.source},description:{story:`Deep nesting with multiple indent levels`,...$.parameters?.docs?.description}}},le=[`Basic`,`Controlled`,`Compact`,`WithDocument`,`ExtractFromMarkdown`,`ExtractFromHTML`,`DeepNesting`]})))()}ue();export{q as Basic,Y as Compact,J as Controlled,$ as DeepNesting,Q as ExtractFromHTML,Z as ExtractFromMarkdown,X as WithDocument,le as __namedExportsOrder,W as default};