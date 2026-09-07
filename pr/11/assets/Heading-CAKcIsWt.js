const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Tooltip-BZ2bhQ4l.js","./rolldown-runtime-DkW27tQK.js","./react-BZJXY1be.js","./jsx-runtime-DeHZSEgm.js","./useTooltip-Dj0O-S6V.js","./themeProps-DRQoVAIO.js","./naming-DxB_K8wP.js","./useLayer-CYbImtKX.js","./stylex-Dft6gtPK.js","./layerAnimations.stylex-4zSahtZp.js","./tokens.stylex-B5FkK-9m.js","./useIsomorphicLayoutEffect-vnms8l8s.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./preload-helper-wdlQj8DP.js";import{t as r}from"./react-BZJXY1be.js";import{n as i,t as a}from"./stylex-Dft6gtPK.js";import{n as o}from"./mergeProps-JRyAvMxc.js";import{n as s}from"./mergeRefs-CPqjs56a.js";import{n as c,t as l}from"./themeProps-DRQoVAIO.js";import{a as u,c as d,d as f,g as p,h as m,i as h,l as g,m as _,n as v,o as y,r as b,s as x,t as S,u as C,v as w}from"./useTruncation-OBVzrhuI.js";import{t as T}from"./jsx-runtime-DeHZSEgm.js";function E({level:e,type:t,accessibilityLevel:n,color:r=`primary`,display:a=`block`,maxLines:l=0,hasTruncateTooltip:d=!0,wordBreak:S,textWrap:T,justify:E=`start`,hasCapsize:j=!1,hasStrikethrough:M=!1,xstyle:N,className:P,style:F,children:I,ref:L,...R}){let z=A[e],B=n&&n!==e?{"aria-level":n}:{},V=S??(l===1?`break-all`:`break-word`),H=l>0||j?`block`:a,U=v({maxLines:l}),W=typeof d==`string`?d:`above`,G=l>0&&d!==!1&&U.isTruncated,K=(0,D.useRef)(null),q=l>1?{WebkitLineClamp:l}:void 0;return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(z,{ref:s(L,U.ref,K),...o(c(`heading`,{level:e,color:r,...t&&{type:t}}),i(h[r],t?f[t]:C[e],t&&y[t],l===1?m.singleLine:l>1?m.multiLine:x[H],l>0&&w[V],T&&_[T],E!==`start`&&g[E],j&&b.enabled,M&&u.strikethrough,N),P,{...F,...q}),title:G?U.fullText:void 0,...B,...R,children:I}),G&&(0,O.jsx)(D.Suspense,{fallback:null,children:(0,O.jsx)(k,{anchorRef:K,content:(0,O.jsx)(`span`,{...i(p.content),children:U.fullText}),placement:W})})]})}var D,O,k,A;function j(){return(j=e((()=>{D=r(),a(),d(),S(),l(),O=T(),t(),k=(0,D.lazy)(async()=>n(()=>import(`./Tooltip-BZ2bhQ4l.js`).then(e=>(e.r(),e.n)).then(e=>({default:e.Tooltip})),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url)),A={1:`h1`,2:`h2`,3:`h3`,4:`h4`,5:`h5`,6:`h6`},E.displayName=`Heading`,E.__docgenInfo={description:`Heading - Semantic heading component

Renders headings with semantic HTML (h1-h6) and themed styling.

@example
\`\`\`
<Heading level={1}>Page Title</Heading>
<Heading level={2}>Section</Heading>
<Heading level={2} accessibilityLevel={3}>Sidebar Section</Heading>
<Heading level={1} type="display-1">Hero Title</Heading>
<Heading level={2} type="display-2">$1.2M Revenue</Heading>
<Heading level={2} maxLines={1}>Very Long Section Title...</Heading>
<Heading level={3} color="secondary">Muted Heading</Heading>
\`\`\``,methods:[],displayName:`Heading`,props:{ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLHeadingElement>`,elements:[{name:`HTMLHeadingElement`}]},description:`Ref forwarded to the root element`},level:{required:!0,tsType:{name:`union`,raw:`1 | 2 | 3 | 4 | 5 | 6`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`},{name:`literal`,value:`6`}]},description:"Heading level (1-6). Determines the semantic HTML element (h1–h6).\nAlso determines visual styling unless `type` is set."},type:{required:!1,tsType:{name:`union`,raw:`'display-1' | 'display-2' | 'display-3'`,elements:[{name:`literal`,value:`'display-1'`},{name:`literal`,value:`'display-2'`},{name:`literal`,value:`'display-3'`}]},description:`Display type variant. When set, overrides the visual styling from \`level\`
with display-scale sizing (larger, lighter weight, tighter line-height).
The \`level\` still determines the HTML element for accessibility.

Use for hero banners, marketing headlines, and data callouts that need
heading semantics.

@example
\`\`\`
<Heading level={1} type="display-1">Hero Title</Heading>
<Heading level={2} type="display-2">$1.2M Revenue</Heading>
\`\`\``},accessibilityLevel:{required:!1,tsType:{name:`union`,raw:`1 | 2 | 3 | 4 | 5 | 6`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`},{name:`literal`,value:`6`}]},description:"Accessibility level override. When set, the `aria-level` will differ\nfrom the visual `level`. Use this when the visual hierarchy doesn't\nmatch the document outline (e.g., sidebar headings, reused components).\n\n@default Same as `level`\n\n@example\n```\n<Heading level={2} accessibilityLevel={3}>Sidebar Section</Heading>\n```"},color:{required:!1,tsType:{name:`union`,raw:`| 'primary'
| 'secondary'
| 'disabled'
| 'placeholder'
| 'accent'
| 'inherit'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'disabled'`},{name:`literal`,value:`'placeholder'`},{name:`literal`,value:`'accent'`},{name:`literal`,value:`'inherit'`}]},description:`Text color.
@default 'primary'`,defaultValue:{value:`'primary'`,computed:!1}},display:{required:!1,tsType:{name:`union`,raw:`'inline' | 'block'`,elements:[{name:`literal`,value:`'inline'`},{name:`literal`,value:`'block'`}]},description:`Display type. Headings default to block.
Note: Silently overridden to 'block' when maxLines > 0 or hasCapsize is true.
@default 'block'`,defaultValue:{value:`'block'`,computed:!1}},maxLines:{required:!1,tsType:{name:`number`},description:`Maximum lines before truncation. 0 = no truncation.
When set, shows tooltip on hover if content is truncated.
@default 0`,defaultValue:{value:`0`,computed:!1}},hasTruncateTooltip:{required:!1,tsType:{name:`union`,raw:`boolean | LayerPlacement`,elements:[{name:`boolean`},{name:`union`,raw:`'above' | 'below' | 'start' | 'end'`,elements:[{name:`literal`,value:`'above'`},{name:`literal`,value:`'below'`},{name:`literal`,value:`'start'`},{name:`literal`,value:`'end'`}]}]},description:`Control tooltip behavior for truncated text.
- \`true\` (default when maxLines > 0): show tooltip at default position
- \`false\`: disable tooltip
- Position value: show tooltip at specific position
@default true`,defaultValue:{value:`true`,computed:!1}},wordBreak:{required:!1,tsType:{name:`union`,raw:`'break-word' | 'break-all'`,elements:[{name:`literal`,value:`'break-word'`},{name:`literal`,value:`'break-all'`}]},description:`Word break behavior for truncated text.
@default 'break-all' for maxLines=1, 'break-word' otherwise`},textWrap:{required:!1,tsType:{name:`union`,raw:`'wrap' | 'nowrap' | 'balance' | 'pretty'`,elements:[{name:`literal`,value:`'wrap'`},{name:`literal`,value:`'nowrap'`},{name:`literal`,value:`'balance'`},{name:`literal`,value:`'pretty'`}]},description:`Text wrapping behavior.`},justify:{required:!1,tsType:{name:`union`,raw:`'start' | 'center' | 'end'`,elements:[{name:`literal`,value:`'start'`},{name:`literal`,value:`'center'`},{name:`literal`,value:`'end'`}]},description:`Text alignment (justification). Uses logical values (start/end)
for i18n/RTL compatibility.
@default 'start'`,defaultValue:{value:`'start'`,computed:!1}},hasCapsize:{required:!1,tsType:{name:`boolean`},description:`Enable optical alignment (text-box-trim).
Forces block display.
@default false`,defaultValue:{value:`false`,computed:!1}},hasStrikethrough:{required:!1,tsType:{name:`boolean`},description:`Strikethrough decoration.
@default false`,defaultValue:{value:`false`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:`Heading content`}},composes:[`Omit`]}})))()}export{j as n,E as t};