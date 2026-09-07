import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./stylex-Dft6gtPK.js";import{n as i}from"./mergeProps-JRyAvMxc.js";import{n as a}from"./mergeRefs-CPqjs56a.js";import{n as o,t as s}from"./themeProps-DRQoVAIO.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./Text-543dlLxz.js";import{n as d,t as f}from"./Button-CZDOH4n-.js";import{n as p,t as m}from"./Icon-D9gPeCUm.js";import{n as h,t as g}from"./IconButton-CUHE8Itk.js";import{n as _,t as v}from"./useScrollLock-DlXUsXsm.js";import{n as y,t as b}from"./Heading-CAKcIsWt.js";import{n as x,t as S}from"./VStack-D-jTblwr.js";import{n as C,t as w}from"./Section-XLOk7KzM.js";import{n as T,t as E}from"./Divider-D6FpS0OA.js";import{n as D,t as O}from"./CheckboxInput-DiWk6p5G.js";function k(e,t){return I.push({id:e,close:t}),L+=1,F+L-1}function A(e){let t=I.findIndex(t=>t.id===e);t!==-1&&I.splice(t,1),I.length===0&&(L=0)}function j(e){return I[I.length-1]?.id===e}function M({isOpen:e,onClose:t,side:r=`end`,size:s=400,label:c,hasScrim:l=!0,hasCloseButton:u,isCollapsed:d,onCollapsedChange:f,children:p,xstyle:h,className:v,style:y,ref:b,...x}){let S=(0,N.useRef)(null),C=(0,N.useRef)(null),w=(0,N.useRef)(null),T=(0,N.useId)(),E=(0,N.useRef)(t);(0,N.useEffect)(()=>{E.current=t},[t]);let[D,O]=(0,N.useState)(F),M=r===`top`||r===`bottom`,I=!l&&!M,L=I&&d===!0,z=u??l,B=d!=null&&!I;(0,N.useEffect)(()=>{B&&console.error('[Drawer] `isCollapsed` is only supported for non-modal drawers (hasScrim={false}) with side="start" or side="end". The prop is ignored.')},[B]),(0,N.useEffect)(()=>{let t=S.current;if(t){if(C.current&&=(clearTimeout(C.current),null),e){if(!t.open){w.current=document.activeElement,l?t.showModal():t.show();let e=t.querySelector(`[data-autofocus]`);e&&e.focus()}}else if(t.open){let e=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches?10:250;C.current=setTimeout(()=>{t.close(),w.current?.focus(),w.current=null},e)}return()=>{C.current&&=(clearTimeout(C.current),null)}}},[e,l]),(0,N.useEffect)(()=>{let e=S.current;return()=>{e?.open&&e.close()}},[]),(0,N.useEffect)(()=>{if(!e)return;let t=k(T,()=>E.current());return O(t),()=>A(T)},[e,T]),_(e&&l),(0,N.useEffect)(()=>{let n=S.current;if(!n||!e)return;let r=e=>{e.key===`Escape`&&(e.preventDefault(),j(T)&&t())};return n.addEventListener(`keydown`,r),()=>n.removeEventListener(`keydown`,r)},[e,t,T]);let H=(0,N.useCallback)(e=>{e.preventDefault(),j(T)&&t()},[t,T]),U=(0,N.useCallback)(e=>{e.target===e.currentTarget&&l&&t()},[l,t]),W=typeof s==`number`?`${s}px`:s,G={start:R.start,end:R.end,top:R.top,bottom:R.bottom}[r],K={start:R.startOpen,end:R.endOpen,top:R.topOpen,bottom:R.bottomOpen}[r],{open:q,...J}=x;return(0,P.jsxs)(`dialog`,{ref:a(b,S),"aria-label":c,"aria-modal":l?`true`:void 0,onClick:U,onCancel:H,...i(o(`drawer`,{side:r}),n(R.dialog,G,M?V.blockSize(W):V.inlineSize(W),e&&R.open,e&&K,l?R.scrim:V.stackZ(D),l&&e&&R.scrimOpen,L&&R.collapsedRail,h),v,y),...J,children:[(0,P.jsx)(`div`,{tabIndex:-1,...{0:{className:`khameleon1iyjqo2 khameleon2lwn1j khameleonh8yej3 khameleon1odjw0f khameleon6ikm8r khameleonish69e khameleonx69xxh khameleon1a2a7pz`},1:{className:`khameleon1iyjqo2 khameleon2lwn1j khameleonh8yej3 khameleon1odjw0f khameleon6ikm8r khameleonish69e khameleonx69xxh khameleon1a2a7pz khameleon1s85apg`}}[!!L<<0],children:p}),L?(0,P.jsx)(`button`,{type:`button`,"aria-label":`Expand ${c}`,onClick:()=>f?.(!1),...{0:{className:`khameleonjyslct khameleonng3xce khameleon1ghz6dp khameleon8o8v82 khameleon7a5moj khameleon1iyjqo2 khameleonh8yej3 khameleon2lwn1j khameleon78zum5 khameleon6s0dn4 khameleonl56j7k khameleon1ypdohk khameleonjbqb8w khameleontao9ic khameleonv1l7n4 khameleonjb2p0i khameleoncr08ib khameleonmhvcl5 khameleon1kq96og khameleonuxw1ft khameleonb3r6kr khameleonlyipyv khameleon98t3bc khameleon1a2a7pz`},1:{className:`khameleonjyslct khameleonng3xce khameleon1ghz6dp khameleon8o8v82 khameleon7a5moj khameleon1iyjqo2 khameleonh8yej3 khameleon2lwn1j khameleon78zum5 khameleon6s0dn4 khameleonl56j7k khameleon1ypdohk khameleonjbqb8w khameleontao9ic khameleonv1l7n4 khameleonjb2p0i khameleoncr08ib khameleonmhvcl5 khameleon1kq96og khameleonuxw1ft khameleonb3r6kr khameleonlyipyv khameleon98t3bc khameleon1a2a7pz khameleon19jd1h0`}}[(r===`start`)<<0],children:c}):(z||I&&f!=null)&&(0,P.jsxs)(`div`,{className:`khameleon10l6tqk khameleonctzyg khameleon72tfeb khameleon78zum5 khameleonzye2dw khameleon1vjfegm`,children:[I&&f!=null&&(0,P.jsx)(g,{icon:(0,P.jsx)(m,{icon:r===`start`?`chevronLeft`:`chevronRight`,size:`sm`,color:`inherit`}),label:`Collapse ${c}`,variant:`ghost`,onClick:()=>f(!0)}),z&&(0,P.jsx)(g,{icon:(0,P.jsx)(m,{icon:`close`,size:`sm`,color:`inherit`}),label:`Close`,variant:`ghost`,onClick:t})]})]})}var N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{N=t(),r(),p(),h(),v(),s(),P=c(),F=1e3,I=[],L=0,R={dialog:{kVAEAm:`khameleonixxii4`,kogj98:`khameleon1ghz6dp`,kmVPX3:`khameleon1717udv`,kQgIW9:`khameleon1gs6z28`,ks0D6T:`khameleon1x1rfll`,kskxy:`khameleon7ab17h`,kB7OPa:`khameleon9f619`,kXwgrk:`khameleondt5ytf`,kWkggS:`khameleon10xzikg`,kGVxlE:`khameleon1kcpxr7`,kVQacm:`khameleonb3r6kr`,kZeWKH:`khameleonish69e`,kI3sdo:`khameleon1a2a7pz`,k1xSpc:`khameleon1s85apg`,k1ekBW:`khameleon1yw18vd`,kIyJzY:`khameleon80gvsz`,kAMwcw:`khameleonlr8y92`,kzIqYQ:`khameleond00j3c`,k6CgDc:`khameleonzg1mie`,$$css:!0},open:{k1xSpc:`khameleon78zum5`,$$css:!0},end:{k87sOh:`khameleon13vifvy`,krVfgx:`khameleon1ey2m1c`,kt4wiu:`khameleontijo5x`,kLqNvP:`khameleonhi6v0a`,kbCHJM:null,kCIrl2:null,kZKoxP:`khameleontdtrs8`,k2ei4v:`khameleongbv0en`,kZ1KPB:null,kWqL5O:null,kVhnKS:`khameleon1t7ytsu`,k4WBpm:null,kSWEuD:null,kGJrpR:`khameleon1j92z86`,kaZRDh:null,k26BEO:null,k3aq6I:`khameleonumwmo6 khameleon1df3fe5`,$$css:!0},endOpen:{k3aq6I:`khameleonbryuvx khameleon1yqmsfc khameleon1lymnkk`,$$css:!0},start:{k87sOh:`khameleon13vifvy`,krVfgx:`khameleon1ey2m1c`,kLqNvP:`khameleon1o0tod`,kt4wiu:`khameleon1woyocn`,kbCHJM:null,kCIrl2:null,kZKoxP:`khameleontdtrs8`,ke9TFa:`khameleonw8tdv1`,kZ1KPB:null,kWqL5O:null,k8ry5P:`khameleon18b5jzi`,k4WBpm:null,kSWEuD:null,kBCPoo:`khameleon1gejf6u`,kaZRDh:null,k26BEO:null,k3aq6I:`khameleon5i6ehr khameleonttggg`,$$css:!0},startOpen:{k3aq6I:`khameleonbryuvx khameleon6mt36l khameleon14gflnl`,$$css:!0},top:{kzqmXN:`khameleon1o6l61p`,kLqNvP:`khameleon1o0tod`,kt4wiu:`khameleontijo5x`,kbCHJM:null,kCIrl2:null,k87sOh:`khameleon13vifvy`,krVfgx:`khameleondd4er5`,kt9PQ7:`khameleon92x3c3`,kfdmCh:`khameleon1q0q8m5`,kL6WhQ:`khameleonw8gpjh`,k3aq6I:`khameleon105ttfm`,$$css:!0},topOpen:{k3aq6I:`khameleonnn1q72 khameleonub2912`,$$css:!0},bottom:{kzqmXN:`khameleon1o6l61p`,kLqNvP:`khameleon1o0tod`,kt4wiu:`khameleontijo5x`,kbCHJM:null,kCIrl2:null,krVfgx:`khameleon1ey2m1c`,k87sOh:`khameleon80663w`,kEafiO:`khameleon11xkdxz`,kPef9Z:`khameleon13fuv20`,kLZC3w:`khameleon1pc3f07`,k3aq6I:`khameleon1weeur4`,$$css:!0},bottomOpen:{k3aq6I:`khameleonnn1q72 khameleonhbqy3z`,$$css:!0},scrim:{kGyWv1:`khameleonnixb3f`,kba3nw:`khameleon1abwkk1`,k5sjJv:`khameleonph5o2a`,kND0Po:`khameleon167zut7`,k9an0g:`khameleonft5bk6`,kb4ib:`khameleon15h3t91`,kA5Tbj:`khameleon1viac0w`,$$css:!0},scrimOpen:{k5sjJv:`khameleonb3n6bw khameleonxiuuzi`,$$css:!0},collapsedRail:{ks0D6T:`khameleon1k2d6hx`,$$css:!0}},z={kzqmXN:`khameleon1o6l61p`,$$css:!0},B={kZKoxP:`khameleontdtrs8`,$$css:!0},V={inlineSize:e=>[z,{ks0D6T:e==null?e:`khameleonf68679`,$$css:!0},{"--x-maxWidth":(e=>typeof e==`number`?e+`px`:e??void 0)(e)}],blockSize:e=>[B,{kskxy:e==null?e:`khameleon1jols5v`,$$css:!0},{"--x-maxHeight":(e=>typeof e==`number`?e+`px`:e??void 0)(e)}],stackZ:e=>[{kY2c9j:e==null?e:`khameleonr3buco`,$$css:!0},{"--x-zIndex":e??void 0}]},M.displayName=`Drawer`,M.__docgenInfo={description:`An edge-anchored overlay panel for inspectors, detail views, and sheets.

Slides in from the logical start/end edge (side panel) or the top/bottom
edge (full-width sheet) using the native \`<dialog>\` element: modal with a
scrim by default, or a non-modal inline overlay with \`hasScrim={false}\`.
Escape closes the top-most open drawer; focus returns to the element that
opened the drawer. Non-modal side drawers can collapse to a rail via
\`isCollapsed\`/\`onCollapsedChange\`.

@example
\`\`\`
const [selected, setSelected] = useState(null);
<Drawer
  isOpen={selected != null}
  onClose={() => setSelected(null)}
  label={\`Details: \${selected?.name}\`}>
  <HostDetails host={selected} />
</Drawer>
\`\`\``,methods:[],displayName:`Drawer`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDialogElement>`,elements:[{name:`HTMLDialogElement`}]},description:`Ref forwarded to the root <dialog> element`},isOpen:{required:!0,tsType:{name:`boolean`},description:"Whether the drawer is open. Fully controlled — pair with `onClose`."},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Called when the drawer requests to be closed
(Escape key, scrim click, built-in close button). The caller owns the
open state. When sibling drawers are open, Escape only closes the
top (last-opened) drawer.`},side:{required:!1,tsType:{name:`union`,raw:`'start' | 'end' | 'top' | 'bottom'`,elements:[{name:`literal`,value:`'start'`},{name:`literal`,value:`'end'`},{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`}]},description:"Which edge the drawer slides from.\n- `'end'` — inline-end edge (right in LTR) — the inspector convention\n- `'start'` — inline-start edge (left in LTR)\n- `'top'` / `'bottom'` — full-width sheets on the block axis\n@default 'end'",defaultValue:{value:`'end'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Size budget of the panel along its slide axis: width for
\`side="start"/"end"\`, height for \`side="top"/"bottom"\`. A number is
pixels; a string is any CSS length (\`'50%'\`, \`'40dvh'\`). On viewports
smaller than the budget the drawer fills the axis.
@default 400`,defaultValue:{value:`400`,computed:!1}},label:{required:!0,tsType:{name:`string`},description:`Accessible label for the drawer (required — the drawer has no
built-in heading to derive a name from). Also names the built-in
collapse/expand affordances.`},hasScrim:{required:!1,tsType:{name:`boolean`},description:"Whether to render a modal scrim behind the drawer.\n- `true` (default) — `showModal()`: top layer, focus trap, body scroll\n  lock, click-outside-to-close.\n- `false` — `show()`: non-modal overlay; the page behind stays\n  interactive. Escape still closes while focus is inside the drawer.\n@default true",defaultValue:{value:`true`,computed:!1}},hasCloseButton:{required:!1,tsType:{name:`boolean`},description:`Whether to render the built-in close button in the top-trailing
corner. Defaults to the \`hasScrim\` value: modal drawers get a close
button, non-modal drawers don't.
@default hasScrim`},isCollapsed:{required:!1,tsType:{name:`boolean`},description:'Collapse the drawer to a narrow click-to-expand rail. Only supported\nfor non-modal (`hasScrim={false}`) drawers with `side="start"/"end"`;\nignored (with a dev warning) otherwise. Controlled — pair with\n`onCollapsedChange`.'},onCollapsedChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(collapsed: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`collapsed`}],return:{name:`void`}}},description:`Called when the built-in collapse/expand affordances are used.
Providing it renders a collapse toggle next to the close button while
expanded; the collapsed rail always expands on click.`},children:{required:!0,tsType:{name:`ReactNode`},description:"Drawer content. Rendered inside a full-height scrollable area.\nFocus the element with `data-autofocus` on open, if present."},"data-testid":{required:!1,tsType:{name:`string`},description:`Test ID for the root element.`}},composes:[`Omit`]}})))()}var U,W,G,K,q,J,Y,X,Z;function Q(){return(Q=e((()=>{U=t(),H(),d(),D(),T(),y(),C(),x(),l(),W=c(),G={title:`Lab/Drawer`,component:M,tags:[`autodocs`],parameters:{layout:`centered`},decorators:[e=>(0,W.jsx)(`div`,{style:{width:560,minHeight:360,padding:32},children:(0,W.jsx)(e,{})})]},K=[{id:`web-01`,region:`us-east-1`,status:`Healthy`,cpu:`32%`},{id:`web-02`,region:`us-east-1`,status:`Healthy`,cpu:`41%`},{id:`worker-01`,region:`eu-west-1`,status:`Degraded`,cpu:`87%`}],q=[`us-east-1`,`eu-west-1`,`ap-south-1`],J={render:()=>{let[e,t]=(0,U.useState)(!1);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(f,{label:`Open inspector`,onClick:()=>t(!0)}),(0,W.jsx)(M,{isOpen:e,onClose:()=>t(!1),label:`Deployment details`,size:400,children:(0,W.jsx)(w,{padding:4,children:(0,W.jsxs)(S,{gap:4,children:[(0,W.jsxs)(S,{gap:1,children:[(0,W.jsx)(b,{level:3,children:`web-prod-04`}),(0,W.jsx)(u,{type:`supporting`,color:`secondary`,children:`us-east-1, deployed 12 min ago`})]}),(0,W.jsx)(E,{}),(0,W.jsxs)(S,{gap:2,children:[(0,W.jsx)(u,{type:`label`,children:`Status`}),(0,W.jsx)(u,{type:`body`,children:`Healthy - all 6 instances passing readiness checks.`})]}),(0,W.jsxs)(S,{gap:2,children:[(0,W.jsx)(u,{type:`label`,children:`Build`}),(0,W.jsx)(u,{type:`body`,children:`#4821 - main @ 03536f1`})]})]})})})]})}},Y={render:()=>{let[e,t]=(0,U.useState)(null),n=K.find(t=>t.id===e);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(S,{gap:1,children:K.map(e=>(0,W.jsx)(f,{variant:`ghost`,label:`${e.id} / ${e.region}`,onClick:()=>t(e.id)},e.id))}),(0,W.jsx)(M,{isOpen:n!=null,onClose:()=>t(null),label:n?`Host details: ${n.id}`:`Host details`,hasScrim:!1,size:360,children:n!=null&&(0,W.jsx)(w,{padding:4,children:(0,W.jsxs)(S,{gap:4,children:[(0,W.jsxs)(S,{gap:1,children:[(0,W.jsx)(b,{level:3,children:n.id}),(0,W.jsx)(u,{type:`supporting`,color:`secondary`,children:n.region})]}),(0,W.jsx)(E,{}),(0,W.jsxs)(S,{gap:2,children:[(0,W.jsx)(u,{type:`label`,children:`Status`}),(0,W.jsx)(u,{type:`body`,children:n.status}),(0,W.jsx)(u,{type:`label`,children:`CPU`}),(0,W.jsx)(u,{type:`body`,children:n.cpu})]}),(0,W.jsx)(f,{label:`Close inspector`,variant:`secondary`,onClick:()=>t(null)})]})})})]})}},X={render:()=>{let[e,t]=(0,U.useState)(!1),[n,r]=(0,U.useState)(q.slice(0,1));return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(f,{label:`Filter regions`,onClick:()=>t(!0)}),(0,W.jsx)(M,{isOpen:e,onClose:()=>t(!1),label:`Region filters`,side:`bottom`,size:`40dvh`,children:(0,W.jsx)(w,{padding:4,children:(0,W.jsxs)(S,{gap:4,children:[(0,W.jsxs)(S,{gap:1,children:[(0,W.jsx)(b,{level:3,children:`Filter by region`}),(0,W.jsxs)(u,{type:`supporting`,color:`secondary`,children:[`Showing hosts in `,n.length,` of `,q.length,` regions`]})]}),(0,W.jsx)(S,{gap:2,children:q.map(e=>(0,W.jsx)(O,{label:e,value:n.includes(e),onChange:t=>r(n=>t?[...n,e]:n.filter(t=>t!==e))},e))}),(0,W.jsx)(f,{label:`Apply filters`,onClick:()=>t(!1),"data-autofocus":!0})]})})})]})}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button label="Open inspector" onClick={() => setIsOpen(true)} />
        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} label="Deployment details" size={400}>
          <Section padding={4}>
            <VStack gap={4}>
              <VStack gap={1}>
                <Heading level={3}>web-prod-04</Heading>
                <Text type="supporting" color="secondary">
                  us-east-1, deployed 12 min ago
                </Text>
              </VStack>
              <Divider />
              <VStack gap={2}>
                <Text type="label">Status</Text>
                <Text type="body">
                  Healthy - all 6 instances passing readiness checks.
                </Text>
              </VStack>
              <VStack gap={2}>
                <Text type="label">Build</Text>
                <Text type="body">#4821 - main @ 03536f1</Text>
              </VStack>
            </VStack>
          </Section>
        </Drawer>
      </>;
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const selected = HOSTS.find(host => host.id === selectedId);
    return <>
        <VStack gap={1}>
          {HOSTS.map(host => <Button key={host.id} variant="ghost" label={\`\${host.id} / \${host.region}\`} onClick={() => setSelectedId(host.id)} />)}
        </VStack>
        <Drawer isOpen={selected != null} onClose={() => setSelectedId(null)} label={selected ? \`Host details: \${selected.id}\` : 'Host details'} hasScrim={false} size={360}>
          {selected != null && <Section padding={4}>
              <VStack gap={4}>
                <VStack gap={1}>
                  <Heading level={3}>{selected.id}</Heading>
                  <Text type="supporting" color="secondary">
                    {selected.region}
                  </Text>
                </VStack>
                <Divider />
                <VStack gap={2}>
                  <Text type="label">Status</Text>
                  <Text type="body">{selected.status}</Text>
                  <Text type="label">CPU</Text>
                  <Text type="body">{selected.cpu}</Text>
                </VStack>
                <Button label="Close inspector" variant="secondary" onClick={() => setSelectedId(null)} />
              </VStack>
            </Section>}
        </Drawer>
      </>;
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<string[]>(REGIONS.slice(0, 1));
    return <>
        <Button label="Filter regions" onClick={() => setIsOpen(true)} />
        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} label="Region filters" side="bottom" size="40dvh">
          <Section padding={4}>
            <VStack gap={4}>
              <VStack gap={1}>
                <Heading level={3}>Filter by region</Heading>
                <Text type="supporting" color="secondary">
                  Showing hosts in {selected.length} of {REGIONS.length} regions
                </Text>
              </VStack>
              <VStack gap={2}>
                {REGIONS.map(region => <CheckboxInput key={region} label={region} value={selected.includes(region)} onChange={checked => setSelected(current => checked ? [...current, region] : current.filter(r => r !== region))} />)}
              </VStack>
              <Button label="Apply filters" onClick={() => setIsOpen(false)} data-autofocus />
            </VStack>
          </Section>
        </Drawer>
      </>;
  }
}`,...X.parameters?.docs?.source}}},Z=[`Showcase`,`RowInspector`,`BottomSheet`]})))()}Q();export{X as BottomSheet,Y as RowInspector,J as Showcase,Z as __namedExportsOrder,G as default};