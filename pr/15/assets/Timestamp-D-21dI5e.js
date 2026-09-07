const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Tooltip-BZ2bhQ4l.js","./rolldown-runtime-DkW27tQK.js","./react-BZJXY1be.js","./jsx-runtime-DeHZSEgm.js","./useTooltip-Dj0O-S6V.js","./themeProps-DRQoVAIO.js","./naming-DxB_K8wP.js","./useLayer-CYbImtKX.js","./stylex-Dft6gtPK.js","./layerAnimations.stylex-4zSahtZp.js","./tokens.stylex-B5FkK-9m.js","./useIsomorphicLayoutEffect-vnms8l8s.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./preload-helper-wdlQj8DP.js";import{t as r}from"./react-BZJXY1be.js";import{n as i}from"./mergeProps-JRyAvMxc.js";import{n as a}from"./mergeRefs-CPqjs56a.js";import{n as o,t as s}from"./themeProps-DRQoVAIO.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./Text-543dlLxz.js";function d(e){return typeof e==`number`?new Date(e<0xe8d4a51000?e*1e3:e):new Date(e)}function f(e,t){let n=Math.round((t.getTime()-e.getTime())/1e3);if(Math.abs(n)<10)return`now`;if(n<0){let e=Math.abs(n);if(e<=O)return`now`;if(e<S)return`in a few seconds`;if(e<C){let t=Math.floor(e/S);return`in ${t} ${t===1?`minute`:`minutes`}`}if(e<w){let t=Math.floor(e/C);return`in ${t} ${t===1?`hour`:`hours`}`}if(e<T){let t=Math.floor(e/w);return`in ${t} ${t===1?`day`:`days`}`}if(e<E){let t=Math.floor(e/T);return`in ${t} ${t===1?`month`:`months`}`}let t=Math.floor(e/E);return`in ${t} ${t===1?`year`:`years`}`}if(n<S)return`${n} seconds ago`;if(n<C){let e=Math.floor(n/S);return`${e} ${e===1?`minute`:`minutes`} ago`}if(n<w){let e=Math.floor(n/C);return`${e} ${e===1?`hour`:`hours`} ago`}if(n<2*w)return`yesterday`;if(n<T)return`${Math.floor(n/w)} days ago`;if(n<E){let e=Math.floor(n/T);return`${e} ${e===1?`month`:`months`} ago`}let r=Math.floor(n/E);return`${r} ${r===1?`year`:`years`} ago`}function p(e){return String(e).padStart(2,`0`)}function m(e,t,n){switch(t){case`date`:return new Intl.DateTimeFormat(void 0,{year:`numeric`,month:`short`,day:`numeric`}).format(e);case`date_time`:return new Intl.DateTimeFormat(void 0,{year:`numeric`,month:`short`,day:`numeric`,hour:`numeric`,minute:`2-digit`,...n?{timeZoneName:`short`}:{}}).format(e);case`time`:return new Intl.DateTimeFormat(void 0,{hour:`numeric`,minute:`2-digit`,...n?{timeZoneName:`short`}:{}}).format(e);case`system_date`:return`${e.getFullYear()}-${p(e.getMonth()+1)}-${p(e.getDate())}`;case`system_date_time`:return`${e.getFullYear()}-${p(e.getMonth()+1)}-${p(e.getDate())} ${p(e.getHours())}:${p(e.getMinutes())}:${p(e.getSeconds())}`;case`system_time`:return`${p(e.getHours())}:${p(e.getMinutes())}:${p(e.getSeconds())}`}}function h(e){return new Intl.DateTimeFormat(void 0,{year:`numeric`,month:`long`,day:`numeric`,hour:`numeric`,minute:`2-digit`,second:`2-digit`,timeZoneName:`short`}).format(e)}function g(e){let t=Math.abs(e);return t<S?1e3:t<C?3e4:t<w?6e4:3e5}function _(e){return e!==`relative`&&e!==`auto`}function v({value:e,format:t=`auto`,autoThreshold:n=D,hasTooltip:r=!0,isTimezoneShown:s=!1,isLive:c=!1,type:l=`supporting`,size:p,color:v=`secondary`,weight:S,xstyle:C,className:w,style:T,ref:E,"data-testid":O}){let k=(0,y.useRef)(null),[A,j]=(0,y.useState)(()=>new Date),M=d(e),N=!Number.isNaN(M.getTime()),P=N?M.toISOString():``,F=Math.round((A.getTime()-M.getTime())/1e3),I=t===`auto`?Math.abs(F)<=n?`relative`:`date_time`:t,L=N?I===`relative`?f(M,A):_(I)?m(M,I,s):``:``,R=N?h(M):``;if((0,y.useEffect)(()=>{if(!c||!N||I!==`relative`)return;let e=g(F),t=setInterval(()=>{j(new Date)},e);return()=>clearInterval(t)},[c,N,I,F]),!N)return console.warn(`Timestamp: could not parse value ${JSON.stringify(e)} as a date. Rendering nothing.`),null;let z=r&&I===`relative`,B=i(o(`timestamp`,{format:I}),{className:w,style:T}),V=(0,b.jsx)(u,{type:l,size:p,color:v,weight:S,xstyle:C,...B,children:(0,b.jsx)(`time`,{ref:a(E,k),dateTime:P,"aria-label":I===`relative`?R:void 0,tabIndex:z?0:void 0,"data-testid":O,...{0:{className:`khameleont0psk2 khameleonjb2p0i khameleon1j61x8r khameleon1qlqyl8 khameleon15bjb6t khameleon1heor9g khameleon1pd3egz`},1:{className:`khameleont0psk2 khameleonjb2p0i khameleon1j61x8r khameleon1qlqyl8 khameleon15bjb6t khameleon1heor9g khameleon1pd3egz khameleon17nn4n9 khameleon1wfwxd8 khameleon7s97pk`}}[!!z<<0],children:L})});return z?(0,b.jsxs)(b.Fragment,{children:[V,(0,b.jsx)(y.Suspense,{fallback:null,children:(0,b.jsx)(x,{anchorRef:k,content:R,placement:`above`})})]}):V}var y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{y=r(),l(),s(),b=c(),t(),x=(0,y.lazy)(async()=>n(()=>import(`./Tooltip-BZ2bhQ4l.js`).then(e=>(e.r(),e.n)).then(e=>({default:e.Tooltip})),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url)),S=60,C=3600,w=86400,T=30*w,E=365*w,D=7*w,O=30,v.displayName=`Timestamp`,v.__docgenInfo={description:`Displays a formatted timestamp as human-readable text.

Renders a semantic \`<time>\` element with an ISO 8601 \`datetime\` attribute,
styled via Text. Supports relative ("2 hours ago"), multiple absolute
formats, and auto formatting. Optionally shows a tooltip with the full
absolute time and can update live.

@example
\`\`\`
<Timestamp value="2026-02-19T17:00:00Z" />
<Timestamp value={1740000000} format="date" />
<Timestamp value={date} format="auto" isLive />
<Timestamp value={event.timestamp} format="system_date_time" />
\`\`\``,methods:[],displayName:`Timestamp`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLTimeElement>`,elements:[{name:`HTMLTimeElement`}]},description:"Ref forwarded to the root `<time>` element."},value:{required:!0,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`The date/time to display. Accepts Unix timestamps (seconds) or ISO 8601 strings.`},format:{required:!1,tsType:{name:`union`,raw:`| 'relative'
| 'auto'
| 'date'
| 'date_time'
| 'time'
| 'system_date'
| 'system_date_time'
| 'system_time'`,elements:[{name:`literal`,value:`'relative'`},{name:`literal`,value:`'auto'`},{name:`literal`,value:`'date'`},{name:`literal`,value:`'date_time'`},{name:`literal`,value:`'time'`},{name:`literal`,value:`'system_date'`},{name:`literal`,value:`'system_date_time'`},{name:`literal`,value:`'system_time'`}]},description:`Display format.
- \`'relative'\`: "2 hours ago", "yesterday", "now"
- \`'auto'\`: Relative for recent times, \`date_time\` for older
- \`'date'\`: "Mar 21, 2025"
- \`'date_time'\`: "Mar 21, 2025, 2:51 PM"
- \`'time'\`: "2:51 PM"
- \`'system_date'\`: "2025-03-21"
- \`'system_date_time'\`: "2025-03-21 14:51:53"
- \`'system_time'\`: "14:51:53"
@default 'auto'`,defaultValue:{value:`'auto'`,computed:!1}},autoThreshold:{required:!1,tsType:{name:`number`},description:`Threshold in seconds for 'auto' format to switch from relative to date_time.
@default 604800 (7 days)`,defaultValue:{value:`7 * DAY`,computed:!1}},hasTooltip:{required:!1,tsType:{name:`boolean`},description:`Whether to show a tooltip with the full date/time on hover.
@default true`,defaultValue:{value:`true`,computed:!1}},isTimezoneShown:{required:!1,tsType:{name:`boolean`},description:`Whether to append the timezone abbreviation after the timestamp.
Applies to date_time, time, system_date_time, and system_time formats.
@default false`,defaultValue:{value:`false`,computed:!1}},isLive:{required:!1,tsType:{name:`boolean`},description:`Whether the relative time should update live.
@default false`,defaultValue:{value:`false`,computed:!1}},type:{required:!1,tsType:{name:`union`,raw:`BuiltinTextType | (keyof CustomTextTypes & string)`,elements:[{name:`union`,raw:`| 'body'
| 'large'
| 'label'
| 'supporting'
| 'code'
| 'display-1'
| 'display-2'
| 'display-3'
| 'inherit'`,elements:[{name:`literal`,value:`'body'`},{name:`literal`,value:`'large'`},{name:`literal`,value:`'label'`},{name:`literal`,value:`'supporting'`},{name:`literal`,value:`'code'`},{name:`literal`,value:`'display-1'`},{name:`literal`,value:`'display-2'`},{name:`literal`,value:`'display-3'`},{name:`literal`,value:`'inherit'`}]},{name:`unknown`}]},description:`Semantic text type. Determines size, weight, and line-height from theme.
@default 'supporting'`,defaultValue:{value:`'supporting'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`| '4xs'
| '3xs'
| '2xs'
| 'xsm'
| 'sm'
| 'base'
| 'lg'
| 'xl'
| '2xl'
| '3xl'
| '4xl'`,elements:[{name:`literal`,value:`'4xs'`},{name:`literal`,value:`'3xs'`},{name:`literal`,value:`'2xs'`},{name:`literal`,value:`'xsm'`},{name:`literal`,value:`'sm'`},{name:`literal`,value:`'base'`},{name:`literal`,value:`'lg'`},{name:`literal`,value:`'xl'`},{name:`literal`,value:`'2xl'`},{name:`literal`,value:`'3xl'`},{name:`literal`,value:`'4xl'`}]},description:"Explicit font size override. Overrides the size from `type`."},color:{required:!1,tsType:{name:`union`,raw:`| 'primary'
| 'secondary'
| 'disabled'
| 'placeholder'
| 'accent'
| 'inherit'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'disabled'`},{name:`literal`,value:`'placeholder'`},{name:`literal`,value:`'accent'`},{name:`literal`,value:`'inherit'`}]},description:`Text color.
@default 'secondary'`,defaultValue:{value:`'secondary'`,computed:!1}},weight:{required:!1,tsType:{name:`union`,raw:`'normal' | 'medium' | 'semibold' | 'bold'`,elements:[{name:`literal`,value:`'normal'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'semibold'`},{name:`literal`,value:`'bold'`}]},description:`Font weight override.`},"data-testid":{required:!1,tsType:{name:`string`},description:`Test ID for testing frameworks.`}},composes:[`Omit`]}})))()}export{k as n,v as t};