const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Tooltip-BZ2bhQ4l.js","./rolldown-runtime-DkW27tQK.js","./react-BZJXY1be.js","./jsx-runtime-DeHZSEgm.js","./useTooltip-Dj0O-S6V.js","./themeProps-DRQoVAIO.js","./naming-DxB_K8wP.js","./useLayer-CYbImtKX.js","./stylex-Dft6gtPK.js","./layerAnimations.stylex-4zSahtZp.js","./tokens.stylex-B5FkK-9m.js","./useIsomorphicLayoutEffect-vnms8l8s.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./preload-helper-wdlQj8DP.js";import{t as r}from"./react-BZJXY1be.js";import{n as i,t as a}from"./stylex-Dft6gtPK.js";import{n as o}from"./mergeProps-JRyAvMxc.js";import{n as s}from"./mergeRefs-CPqjs56a.js";import{n as c,t as l}from"./themeProps-DRQoVAIO.js";import{_ as u,a as d,c as f,d as p,f as m,g as h,h as g,i as _,l as v,m as y,n as b,o as x,p as S,r as C,s as w,t as T,v as E}from"./useTruncation-OBVzrhuI.js";import{t as D}from"./jsx-runtime-DeHZSEgm.js";function O(e){return e in p?e:`body`}function k({type:e=`body`,size:t,color:n,weight:r,display:a=`inline`,maxLines:l=0,hasTruncateTooltip:f=!0,wordBreak:T,textWrap:D,justify:k=`start`,hasCapsize:P=!1,hasStrikethrough:F=!1,hasTabularNumbers:I=!1,xstyle:L,className:R,style:z,as:B=`span`,children:V,ref:H,...U}){let W=n??N[e]??`primary`,G=O(e),K=T??(l===1?`break-all`:`break-word`),q=l>0||P?`block`:a,J=b({maxLines:l}),Y=typeof f==`string`?f:`above`,X=l>0&&f!==!1&&J.isTruncated,Z=(0,A.useRef)(null),Q=l>1?{WebkitLineClamp:l}:void 0;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(B,{ref:s(H,J.ref,Z),...o(c(`text`,{type:e,size:t,color:W}),i(_[W],p[G],t&&m[t],x[G],r&&u[r],l===1?g.singleLine:l>1?g.multiLine:w[q],l>0&&E[K],D&&y[D],k!==`start`&&v[k],P&&C.enabled,F&&d.strikethrough,I&&S.enabled,L),R,{...z,...Q}),title:X?J.fullText:void 0,...U,children:V}),X&&(0,j.jsx)(A.Suspense,{fallback:null,children:(0,j.jsx)(M,{anchorRef:Z,content:(0,j.jsx)(`span`,{...i(h.content),children:J.fullText}),placement:Y})})]})}var A,j,M,N;function P(){return(P=e((()=>{A=r(),a(),f(),T(),l(),j=D(),t(),M=(0,A.lazy)(async()=>n(()=>import(`./Tooltip-BZ2bhQ4l.js`).then(e=>(e.r(),e.n)).then(e=>({default:e.Tooltip})),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url)),N={body:`primary`,large:`primary`,label:`primary`,supporting:`secondary`,code:`primary`,"display-1":`primary`,"display-2":`primary`,"display-3":`primary`,inherit:`inherit`},k.displayName=`Text`,k.__docgenInfo={description:`Semantic text component. Renders text with type-based styling from the theme.

@example
\`\`\`
<Text type="body">Body text</Text>
<Text type="large">Large body text</Text>
<Text type="label">Form label</Text>
<Text type="supporting">Helper text</Text>
<Text type="code">{'const x = 1;'}</Text>
<Text type="display-1" as="h1">Hero Title</Text>
<Text type="display-2">$1.2M Revenue</Text>
<Text type="body" maxLines={2}>Clamped text</Text>
\`\`\``,methods:[],displayName:`Text`,props:{ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLElement>`,elements:[{name:`HTMLElement`}]},description:`Ref forwarded to the root element`},type:{required:!1,tsType:{name:`union`,raw:`BuiltinTextType | (keyof CustomTextTypes & string)`,elements:[{name:`union`,raw:`| 'body'
| 'large'
| 'label'
| 'supporting'
| 'code'
| 'display-1'
| 'display-2'
| 'display-3'
| 'inherit'`,elements:[{name:`literal`,value:`'body'`},{name:`literal`,value:`'large'`},{name:`literal`,value:`'label'`},{name:`literal`,value:`'supporting'`},{name:`literal`,value:`'code'`},{name:`literal`,value:`'display-1'`},{name:`literal`,value:`'display-2'`},{name:`literal`,value:`'display-3'`},{name:`literal`,value:`'inherit'`}]},{name:`unknown`}]},description:`Semantic text type. Determines size, weight, and line-height from theme.
@default 'body'`,defaultValue:{value:`'body'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`| '4xs'
| '3xs'
| '2xs'
| 'xsm'
| 'sm'
| 'base'
| 'lg'
| 'xl'
| '2xl'
| '3xl'
| '4xl'`,elements:[{name:`literal`,value:`'4xs'`},{name:`literal`,value:`'3xs'`},{name:`literal`,value:`'2xs'`},{name:`literal`,value:`'xsm'`},{name:`literal`,value:`'sm'`},{name:`literal`,value:`'base'`},{name:`literal`,value:`'lg'`},{name:`literal`,value:`'xl'`},{name:`literal`,value:`'2xl'`},{name:`literal`,value:`'3xl'`},{name:`literal`,value:`'4xl'`}]},description:"Explicit font size override. When set, overrides the size from `type`\nbut preserves other type properties (font-family, default color).\n\n⚠️ Lint rule: Prefer using `type` alone. Use `size` only for custom\nUI elements that need explicit size control (metrics, callouts)."},color:{required:!1,tsType:{name:`union`,raw:`| 'primary'
| 'secondary'
| 'disabled'
| 'placeholder'
| 'accent'
| 'inherit'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'disabled'`},{name:`literal`,value:`'placeholder'`},{name:`literal`,value:`'accent'`},{name:`literal`,value:`'inherit'`}]},description:`Text color. Defaults vary by type:
- 'supporting' → 'secondary'
- others → 'primary'`},weight:{required:!1,tsType:{name:`union`,raw:`'normal' | 'medium' | 'semibold' | 'bold'`,elements:[{name:`literal`,value:`'normal'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'semibold'`},{name:`literal`,value:`'bold'`}]},description:`Font weight override.`},display:{required:!1,tsType:{name:`union`,raw:`'inline' | 'block'`,elements:[{name:`literal`,value:`'inline'`},{name:`literal`,value:`'block'`}]},description:`Display type. Text defaults to inline.
Note: Silently overridden to 'block' when maxLines > 0 or hasCapsize is true.
@default 'inline'`,defaultValue:{value:`'inline'`,computed:!1}},maxLines:{required:!1,tsType:{name:`number`},description:`Maximum lines before truncation. 0 = no truncation.
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
@default false`,defaultValue:{value:`false`,computed:!1}},hasTabularNumbers:{required:!1,tsType:{name:`boolean`},description:`Use tabular (monospace) numbers for alignment.
@default false`,defaultValue:{value:`false`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:`Text content`},as:{required:!1,tsType:{name:`union`,raw:`'span' | 'p' | 'div' | 'label' | 'h1' | 'h2' | 'h3'`,elements:[{name:`literal`,value:`'span'`},{name:`literal`,value:`'p'`},{name:`literal`,value:`'div'`},{name:`literal`,value:`'label'`},{name:`literal`,value:`'h1'`},{name:`literal`,value:`'h2'`},{name:`literal`,value:`'h3'`}]},description:`HTML element to render.
Includes h1-h3 for display types that need heading semantics.
@default 'span'`,defaultValue:{value:`'span'`,computed:!1}}},composes:[`Omit`]}})))()}export{P as n,k as t};