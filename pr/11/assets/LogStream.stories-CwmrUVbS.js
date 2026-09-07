import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./stylex-Dft6gtPK.js";import{n as i}from"./mergeProps-JRyAvMxc.js";import{n as a,t as o}from"./themeProps-DRQoVAIO.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Text-543dlLxz.js";import{n as u,t as d}from"./Button-CZDOH4n-.js";import{n as f,t as p}from"./Card-CEKem3UW.js";import{n as m,t as h}from"./Heading-CAKcIsWt.js";import{n as g,t as _}from"./HStack-C8fj4Th3.js";import{n as v,t as y}from"./VStack-D-jTblwr.js";import{n as b,t as x}from"./StackItem-DmnUPdM_.js";import{n as S,t as C}from"./StatusDot-BqXKN9G-.js";function w({entries:e,variant:t=`default`,isFollowing:r,onFollowChange:o,maxHeight:s,hasTimestamps:c=!0,label:l=`Log stream`,renderEntry:u,xstyle:d,className:f,style:p,ref:m,...h}){let g=t===`terminal`,_=(0,T.useRef)(null),[v,y]=(0,T.useState)(r??!1),b=r??v,x=e=>{e!==b&&(r??y(e),o?.(e))},[S,C]=(0,T.useState)(!0),[w,O]=(0,T.useState)(()=>new Set),M=e=>{O(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},N=(0,T.useMemo)(()=>e.some(e=>e.source!=null),[e]);(0,T.useEffect)(()=>{let e=_.current;!b||e==null||(e.scrollTop=e.scrollHeight,C(!0))},[b,e.length]);let P=e=>{let t=e.currentTarget,n=t.scrollHeight-t.scrollTop-t.clientHeight<=D;C(n),b&&!n&&x(!1)},F=()=>{x(!0);let e=_.current;e!=null&&(e.scrollTop=e.scrollHeight,C(!0))},I=c?N?k.colsFull:k.colsNoSource:N?k.colsNoTimestamp:k.colsMessageOnly,L=e=>{let t=e.detail!=null,r=t&&w.has(e.id),i=(0,E.jsxs)(E.Fragment,{children:[c&&(0,E.jsx)(`span`,{...{0:{className:`khameleonv1l7n4 khameleonuxw1ft khameleonss6m8b`},1:{className:`khameleonuxw1ft khameleonss6m8b khameleon8qbvqa`}}[!!g<<0],children:e.timestamp}),(0,E.jsx)(`span`,{...n(k.level,(g?j:A)[e.level]),children:e.level}),N&&(0,E.jsx)(`span`,{...{0:{className:`khameleonv1l7n4 khameleonb3r6kr khameleonlyipyv khameleonuxw1ft khameleoneuugli`},1:{className:`khameleonb3r6kr khameleonlyipyv khameleonuxw1ft khameleoneuugli khameleon8qbvqa`}}[!!g<<0],title:e.source,children:e.source}),(0,E.jsx)(`span`,{...{0:{className:`khameleoneuugli khameleonj0a0fe khameleon126k92a`},4:{className:`khameleoneuugli khameleonj0a0fe khameleon126k92a khameleon45uw2j`},2:{className:`khameleoneuugli khameleonj0a0fe khameleon126k92a khameleonbz8ry5`},6:{className:`khameleoneuugli khameleonj0a0fe khameleon126k92a khameleonbz8ry5`},1:{className:`khameleoneuugli khameleonj0a0fe khameleon126k92a khameleon1gnejgv`},5:{className:`khameleoneuugli khameleonj0a0fe khameleon126k92a khameleon1gnejgv`},3:{className:`khameleoneuugli khameleonj0a0fe khameleon126k92a khameleon1gnejgv`},7:{className:`khameleoneuugli khameleonj0a0fe khameleon126k92a khameleon1gnejgv`}}[!!g<<2|!!(g&&e.level===`error`)<<1|!!(g&&e.level===`warn`)<<0],children:e.message})]}),a=[k.row,I,g&&k.rowTerminal,!g&&e.level===`error`&&k.rowError,!g&&e.level===`warn`&&k.rowWarn];return t?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(`button`,{type:`button`,"aria-expanded":r,"data-level":e.level,onClick:()=>M(e.id),...n(...a,k.rowButton,g&&k.rowButtonTerminal),children:i}),r&&(0,E.jsx)(`div`,{...{0:{className:`khameleon8o8v82 khameleonrrkdod khameleonwmxj5m khameleon92x3c3 khameleon1q0q8m5 khameleonw8gpjh`},1:{className:`khameleon8o8v82 khameleonrrkdod khameleon92x3c3 khameleon1q0q8m5 khameleon4lxhut khameleon1s39gqd khameleon45uw2j`}}[!!g<<0],children:e.detail})]}):(0,E.jsx)(`div`,{"data-level":e.level,...n(...a),children:i})};return(0,E.jsxs)(`div`,{ref:m,...h,...i(a(`log-stream`,{variant:t}),n(k.root,g&&k.rootTerminal,d),f,p),children:[(0,E.jsx)(`div`,{ref:_,role:`log`,"aria-label":l,onScroll:P,...n(k.scroller(s??null)),children:e.map(e=>(0,E.jsx)(T.Fragment,{children:u==null?L(e):u(e)},e.id))}),!b&&!S&&e.length>0&&(0,E.jsx)(`button`,{type:`button`,onClick:F,...{0:{className:`khameleon10l6tqk khameleon1hmuevu khameleon1mcfs9z khameleonu0wf1k khameleonrrkdod khameleonjspbzw khameleon1litavf khameleon1y0btm7 khameleonvy26l8 khameleon10xzikg khameleon1rlsyly khameleon1tgivj0 khameleon9m5x89 khameleon1eqnyfr khameleon1e4wzip khameleon1ypdohk khameleon14hfi27 khameleon1a2a7pz khameleon17nn4n9 khameleon1hl8ikr`},1:{className:`khameleon10l6tqk khameleon1hmuevu khameleon1mcfs9z khameleonu0wf1k khameleonrrkdod khameleonjspbzw khameleon1litavf khameleon1y0btm7 khameleon9m5x89 khameleon1eqnyfr khameleon1e4wzip khameleon1ypdohk khameleon14hfi27 khameleon1a2a7pz khameleon17nn4n9 khameleon1hl8ikr khameleon70o2i5 khameleon1my5jcs khameleonj3zyw3 khameleon1tu4bv5`}}[!!g<<0],children:`Jump to latest ↓`})]})}var T,E,D,O,k,A,j;function M(){return(M=e((()=>{T=t(),r(),o(),E=s(),D=24,O={kORKVm:`khameleon1odjw0f`,k5wCbM:`khameleon1597r2g`,kZeWKH:`khameleonish69e`,$$css:!0},k={root:{kVAEAm:`khameleon1n2onr6`,k1xSpc:`khameleon78zum5`,kXwgrk:`khameleondt5ytf`,kaIpWk:`khameleonh6dtrn`,kMzoRj:`khameleon1litavf`,ksu8eU:`khameleon1y0btm7`,kVAM5u:`khameleon14i3s5s`,kWkggS:`khameleon10xzikg`,kVQacm:`khameleonb3r6kr`,kMv6JI:`khameleon9m5x89`,kGuDYH:`khameleon1eqnyfr`,$$css:!0},rootTerminal:{kVAM5u:`khameleon70o2i5`,kWkggS:`khameleon2kq1z0`,$$css:!0},scroller:e=>[O,{kskxy:e==null?e:`khameleon1jols5v`,$$css:!0},{"--x-maxHeight":(e=>typeof e==`number`?e+`px`:e??void 0)(e)}],row:{k1xSpc:`khameleonrvj5dj`,kGNEyG:`khameleon1pha0wt`,k1C7PZ:`khameleonewh9hi`,k8WAf4:`khameleonu0wf1k`,kLKAdn:null,kGO01o:null,kg3NbH:`khameleonrrkdod`,kuDDbn:null,kE3dHu:null,kP0aTx:null,kpe85a:null,kLWn49:`khameleona7kkou`,kMwMTN:`khameleon1tgivj0`,kt9PQ7:`khameleon92x3c3 khameleon1t1lzn6`,kfdmCh:`khameleon1q0q8m5`,kL6WhQ:`khameleonw8gpjh`,kCygrm:`khameleonb5mbof`,kM8eXF:`khameleon1w36mze`,kSiTet:`khameleon1hc1fzr`,k1ekBW:`khameleon19991ni`,kIyJzY:`khameleonkvfbh3 khameleonsagj69`,kAMwcw:`khameleon9lcvmn`,kamtoy:`khameleon4itv7f`,$$css:!0},rowTerminal:{kMwMTN:`khameleon45uw2j`,kt9PQ7:`khameleon1qhh985`,k8WAf4:`khameleonsplgde`,kLKAdn:null,kGO01o:null,$$css:!0},colsFull:{kumcoG:`khameleongunjtk`,$$css:!0},colsNoSource:{kumcoG:`khameleon1dl91lv`,$$css:!0},colsNoTimestamp:{kumcoG:`khameleon1s6oqvn`,$$css:!0},colsMessageOnly:{kumcoG:`khameleonl3z6kh`,$$css:!0},rowButton:{kzqmXN:`khameleonh8yej3`,k9WMMc:`khameleondpxx8g`,kEafiO:`khameleon972fbf`,kjGldf:`khameleonuxrje7`,k2ei4v:null,kZ1KPB:null,ke9TFa:null,kWqL5O:null,kMv6JI:`khameleon9m5x89`,kGuDYH:`khameleon1eqnyfr`,kkrTdU:`khameleon1ypdohk`,kWkggS:`khameleonjbqb8w khameleone9uy6x`,$$css:!0},rowButtonTerminal:{kWkggS:`khameleonjbqb8w khameleonx7et1x`,$$css:!0},rowError:{kWkggS:`khameleon179w1ng`,$$css:!0},rowWarn:{kWkggS:`khameleon1b8r0zp`,$$css:!0},level:{kGuDYH:`khameleon51wmvv`,k63SB2:`khameleon2mo6ok`,kb6lSQ:`khameleon9pfba7`,kP9fke:`khameleontvhhri`,$$css:!0},levelInfo:{kMwMTN:`khameleonv1l7n4`,$$css:!0},levelDebug:{kMwMTN:`khameleonnbbluu`,$$css:!0},levelWarn:{kMwMTN:`khameleonuj0v0c`,$$css:!0},levelError:{kMwMTN:`khameleon1lenag`,$$css:!0},levelInfoTerminal:{kMwMTN:`khameleon45uw2j`,$$css:!0},levelDebugTerminal:{kMwMTN:`khameleon8qbvqa`,$$css:!0},levelWarnTerminal:{kMwMTN:`khameleon1gnejgv`,$$css:!0},levelErrorTerminal:{kMwMTN:`khameleonbz8ry5`,$$css:!0}},A={info:k.levelInfo,warn:k.levelWarn,error:k.levelError,debug:k.levelDebug},j={info:k.levelInfoTerminal,warn:k.levelWarnTerminal,error:k.levelErrorTerminal,debug:k.levelDebugTerminal},w.displayName=`LogStream`,w.__docgenInfo={description:`Experimental streaming log viewer: mono grid rows
(timestamp | level | source | message) with token-derived level accents,
expandable per-row detail panels, follow-scroll live tailing with a
"Jump to latest" affordance, and an always-dark terminal variant.

Appended rows fade in via \`@starting-style\` (instant under
prefers-reduced-motion). Follow pinning uses a scroll listener — no
polling; rows use \`content-visibility: auto\` for offscreen skip but are
NOT virtualized (window large streams in the caller).

@example
\`\`\`
<LogStream
  entries={entries}
  maxHeight={480}
  isFollowing={isFollowing}
  onFollowChange={setIsFollowing}
/>
\`\`\``,methods:[],displayName:`LogStream`,props:{ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:`Ref forwarded to the root element`},entries:{required:!0,tsType:{name:`Array`,elements:[{name:`LogEntry`}],raw:`LogEntry[]`},description:`Log rows, oldest first (live tails append at the end).`},variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'terminal'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'terminal'`}]},description:`Visual treatment. \`'terminal'\` renders dark chrome regardless of the
active color scheme (terminal output is a brand surface, like a real
shell — light-mode terminals read as broken builds).
@default 'default'`,defaultValue:{value:`'default'`,computed:!1}},isFollowing:{required:!1,tsType:{name:`boolean`},description:`Pin scroll to the newest entry as entries append. Unpins when the user
scrolls up; re-pin via the "Jump to latest" affordance. Controlled when
provided; uncontrolled (initially unpinned) otherwise.`},onFollowChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(following: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`following`}],return:{name:`void`}}},description:`Called when follow-pinning changes (user scroll-up or "Jump to latest").`},maxHeight:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Max height of the scroll area before it scrolls.`},hasTimestamps:{required:!1,tsType:{name:`boolean`},description:`Show the timestamp column. @default true`,defaultValue:{value:`true`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:`Accessible label for the log region. @default 'Log stream'`,defaultValue:{value:`'Log stream'`,computed:!1}},renderEntry:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(entry: LogEntry) => ReactNode`,signature:{arguments:[{type:{name:`LogEntry`},name:`entry`}],return:{name:`ReactNode`}}},description:`Escape hatch: fully replace the default row for an entry.`}},composes:[`Omit`]}})))()}var N,P,F,I,L,R,z,B,V,H,U;function W(){return(W=e((()=>{N=t(),M(),u(),f(),m(),g(),v(),b(),S(),c(),P=s(),F={title:`Lab/LogStream`,component:w,tags:[`autodocs`],parameters:{layout:`centered`},decorators:[e=>(0,P.jsx)(`div`,{style:{width:880,padding:32},children:(0,P.jsx)(e,{})})]},I={margin:0,fontFamily:`var(--font-family-code)`,fontSize:`var(--font-size-sm)`,lineHeight:1.7,whiteSpace:`pre-wrap`},L=[{id:`b-01`,timestamp:`12:04:16.002`,level:`info`,source:`build`,message:`Build machine: 4 cores, 8 GB RAM (iad1)`},{id:`b-02`,timestamp:`12:04:16.089`,level:`info`,source:`build`,message:`Cloning github.com/acme/khameleon-console (branch: main)`},{id:`b-03`,timestamp:`12:04:18.021`,level:`info`,source:`stage`,message:`Install`},{id:`b-04`,timestamp:`12:04:18.144`,level:`info`,source:`install`,message:`$ pnpm install --frozen-lockfile`},{id:`b-05`,timestamp:`12:04:23.348`,level:`info`,source:`build`,message:`$ next build`},{id:`b-06`,timestamp:`12:04:38.207`,level:`warn`,source:`build`,message:`Compiled with warnings (1)`,detail:(0,P.jsx)(`pre`,{style:I,children:`./app/logs/page.tsx
42:9 Warning: "range" is assigned a value but never used.`})},{id:`b-07`,timestamp:`12:04:45.201`,level:`info`,source:`deploy`,message:`Uploading build outputs (23.4 MB)`},{id:`b-08`,timestamp:`12:04:50.004`,level:`info`,source:`deploy`,message:`Build completed in 34s`}],R=[{id:`l-01`,timestamp:`14:02:08.114`,level:`info`,source:`api-gateway`,message:`GET /v1/projects 200 in 42ms`},{id:`l-02`,timestamp:`14:02:08.371`,level:`debug`,source:`auth`,message:`token cache hit for key sess_7f31`},{id:`l-03`,timestamp:`14:02:09.243`,level:`warn`,source:`billing`,message:`upstream latency 1840ms exceeds 1500ms budget`,detail:(0,P.jsx)(`pre`,{style:I,children:`{
  "upstream": "payments.stripe",
  "latencyMs": 1840,
  "budgetMs": 1500,
  "traceId": "tr_9c41b2"
}`})},{id:`l-04`,timestamp:`14:02:10.037`,level:`error`,source:`billing`,message:`charge failed: upstream returned 502`,detail:(0,P.jsx)(`pre`,{style:I,children:`{
  "error": "UpstreamBadGateway",
  "attempt": 1,
  "retryInMs": 400,
  "invoice": "inv_20418"
}`})},{id:`l-05`,timestamp:`14:02:11.305`,level:`info`,source:`billing`,message:`charge succeeded for inv_20418 in 322ms`},{id:`l-06`,timestamp:`14:02:13.078`,level:`debug`,source:`api-gateway`,message:`route table reloaded (37 routes)`}],z=[{timestamp:`14:02:14.102`,level:`info`,source:`api-gateway`,message:`GET /v1/projects 200 in 38ms`},{timestamp:`14:02:15.310`,level:`debug`,source:`auth`,message:`token cache hit for key sess_9a02`},{timestamp:`14:02:17.708`,level:`warn`,source:`billing`,message:`webhook delivery slow: 2210ms to partner.acme`},{timestamp:`14:02:20.131`,level:`error`,source:`worker`,message:`job usage-rollup-0415 failed: table locked`}],B={render:()=>(0,P.jsxs)(y,{gap:2,children:[(0,P.jsxs)(_,{gap:2,vAlign:`center`,children:[(0,P.jsx)(C,{variant:`success`,label:`Ready`}),(0,P.jsx)(h,{level:3,children:`Build logs`})]}),(0,P.jsx)(w,{entries:L,variant:`terminal`,maxHeight:360,label:`Build logs`})]})},V={render:()=>(0,P.jsx)(p,{padding:4,children:(0,P.jsxs)(y,{gap:3,children:[(0,P.jsxs)(y,{gap:0,children:[(0,P.jsx)(h,{level:3,children:`Log results`}),(0,P.jsxs)(l,{type:`supporting`,color:`secondary`,children:[R.length,` events indexed / env:prod / UTC`]})]}),(0,P.jsx)(w,{entries:R,maxHeight:360,label:`Log results stream`})]})})},H={render:()=>{let[e,t]=(0,N.useState)(R),[n,r]=(0,N.useState)(!0),i=e.length-R.length,a=i<z.length;return(0,P.jsxs)(y,{gap:3,children:[(0,P.jsxs)(_,{gap:2,vAlign:`center`,children:[(0,P.jsx)(C,{variant:n?`success`:`neutral`,label:n?`Following latest`:`Not following`,isPulsing:n}),(0,P.jsx)(x,{size:`fill`,children:(0,P.jsxs)(l,{type:`supporting`,color:`secondary`,children:[e.length,` rows`]})}),(0,P.jsx)(d,{label:`Append line`,variant:`secondary`,onClick:()=>{a&&(t(e=>[...e,{...z[i],id:`live-${i}`}]),r(!0))},isDisabled:!a}),(0,P.jsx)(d,{label:`Reset`,variant:`ghost`,onClick:()=>{t(R),r(!0)}})]}),(0,P.jsx)(w,{entries:e,maxHeight:320,isFollowing:n,onFollowChange:r,label:`Live log stream`})]})}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <VStack gap={2}>
      <HStack gap={2} vAlign="center">
        <StatusDot variant="success" label="Ready" />
        <Heading level={3}>Build logs</Heading>
      </HStack>
      <LogStream entries={buildEntries} variant="terminal" maxHeight={360} label="Build logs" />
    </VStack>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <Card padding={4}>
      <VStack gap={3}>
        <VStack gap={0}>
          <Heading level={3}>Log results</Heading>
          <Text type="supporting" color="secondary">
            {monitoringEntries.length} events indexed / env:prod / UTC
          </Text>
        </VStack>
        <LogStream entries={monitoringEntries} maxHeight={360} label="Log results stream" />
      </VStack>
    </Card>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [entries, setEntries] = useState<LogEntry[]>(monitoringEntries);
    const [isFollowing, setIsFollowing] = useState(true);
    const nextIndex = entries.length - monitoringEntries.length;
    const canAppend = nextIndex < liveScript.length;
    const appendEntry = () => {
      if (!canAppend) {
        return;
      }
      setEntries(current => [...current, {
        ...liveScript[nextIndex],
        id: \`live-\${nextIndex}\`
      }]);
      setIsFollowing(true);
    };
    return <VStack gap={3}>
        <HStack gap={2} vAlign="center">
          <StatusDot variant={isFollowing ? 'success' : 'neutral'} label={isFollowing ? 'Following latest' : 'Not following'} isPulsing={isFollowing} />
          <StackItem size="fill">
            <Text type="supporting" color="secondary">
              {entries.length} rows
            </Text>
          </StackItem>
          <Button label="Append line" variant="secondary" onClick={appendEntry} isDisabled={!canAppend} />
          <Button label="Reset" variant="ghost" onClick={() => {
          setEntries(monitoringEntries);
          setIsFollowing(true);
        }} />
        </HStack>
        <LogStream entries={entries} maxHeight={320} isFollowing={isFollowing} onFollowChange={setIsFollowing} label="Live log stream" />
      </VStack>;
  }
}`,...H.parameters?.docs?.source}}},U=[`TerminalBuild`,`MonitoringRows`,`ControlledFollow`]})))()}W();export{H as ControlledFollow,V as MonitoringRows,B as TerminalBuild,U as __namedExportsOrder,F as default};