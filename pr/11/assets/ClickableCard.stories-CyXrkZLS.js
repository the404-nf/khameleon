import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./mergeProps-JRyAvMxc.js";import{n as r}from"./mergeRefs-CPqjs56a.js";import{n as i,t as a}from"./themeProps-DRQoVAIO.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Text-543dlLxz.js";import{n as l,t as u}from"./Button-CZDOH4n-.js";import{n as d,t as f}from"./useLinkComponent-DvgS1IvL.js";import{n as p,t as m}from"./Card-CEKem3UW.js";import{n as h,r as g}from"./useClickableContainer-BfRKnQlP.js";import{n as _,t as v}from"./HStack-C8fj4Th3.js";import{n as y,t as b}from"./VStack-D-jTblwr.js";function x({label:e,onClick:t,onMouseUp:a,href:o,target:s,isDisabled:c=!1,children:l,padding:u,variant:f=`default`,width:p,height:h,maxWidth:_,ref:v,xstyle:y,className:b,style:x,...T}){let E=(0,S.useRef)(null),D=(0,S.useRef)(null),O=d(),{onClick:k,onMouseUp:A}=g({containerRef:E,interactiveRef:D,onClick:t,href:o,target:s,disabled:c}),j=a?e=>{A(e),a(e)}:A,M=o!=null,N=f==="default";return(0,C.jsxs)(m,{ref:r(v,E),width:p,height:h,maxWidth:_,padding:u,variant:f,...n(i(`clickable-card`,{variant:f}),{className:b,style:x}),xstyle:[w.interactive,w.focusWithin,N?w.bordered:w.borderless,!c&&w.overlay,!c&&w.hoverOnPointer,!c&&N&&w.borderedHoverOnPointer,c&&w.disabled,y],onClick:c?void 0:k,onMouseUp:c?void 0:j,...T,children:[M?(0,C.jsx)(O,{ref:D,href:o,target:s,"aria-label":e,"aria-disabled":c||void 0,tabIndex:c?-1:0,className:`khameleon10l6tqk khameleon1i1rx1s khameleonjm9jq1 khameleon1717udv khameleonkdpibf khameleonb3r6kr khameleonzpqnlu khameleonuxw1ft khameleonc342km`}):(0,C.jsx)(`button`,{ref:D,type:`button`,"aria-label":e,disabled:c,onClick:t,className:`khameleon10l6tqk khameleon1i1rx1s khameleonjm9jq1 khameleon1717udv khameleonkdpibf khameleonb3r6kr khameleonzpqnlu khameleonuxw1ft khameleonc342km`}),l]})}var S,C,w;function T(){return(T=e((()=>{S=t(),p(),h(),f(),a(),C=o(),w={interactive:{kVAEAm:`khameleon1n2onr6`,kkrTdU:`khameleon1ypdohk`,kybGjl:`khameleon1hl2dhg`,k1TLXF:null,kMnn75:null,kmVMDM:null,kNySMw:null,kMwMTN:`khameleon1heor9g`,kInvED:`khameleon1hl8ikr`,$$css:!0},focusWithin:{kRYL1X:`khameleon1irc7jg`,kry4t4:null,kf5QHk:null,kuo1qL:null,koJ47v:`khameleondjuwb3`,$$css:!0},overlay:{k5JduY:`khameleon1s928wv`,kwXMNM:`khameleon1j6awrg`,kv0HGH:`khameleonarstr8`,kcktkL:null,kc1e00:null,kH8aOt:null,kH8cDV:null,kLxBhq:null,kSy8m5:null,k3foIR:null,k8Iv0R:null,kloYau:`khameleon2q1x1w`,kRicXK:`khameleon1ywzrc5`,kPNhGg:`khameleon97pup0`,kA8PQs:`khameleon1dlmc9c`,ks3ayO:`khameleonyhc2n1`,kAcZsS:`khameleonotisz4`,$$css:!0},hoverOnPointer:{kJs8I2:`khameleon1vwwndy`,$$css:!0},borderless:{kMzoRj:`khameleonc342km`,kjGldf:null,k2ei4v:null,kZ1KPB:null,ke9TFa:null,kWqL5O:null,kLoX6v:null,kEafiO:null,kt9PQ7:null,$$css:!0},bordered:{kVAM5u:`khameleon14i3s5s`,kzOINU:null,kGJrpR:null,kaZRDh:null,kBCPoo:null,k26BEO:null,k5QoK5:null,kLZC3w:null,kL6WhQ:null,kZCmMZ:`khameleons19ii7`,kwRFfy:`khameleon12frdag`,kE3dHu:null,kpe85a:null,kLKAdn:`khameleon1nex4ik`,kGO01o:`khameleonbv1mwh`,k1ekBW:`khameleonshfolx`,kIyJzY:`khameleonuedmi6`,kAMwcw:`khameleonlr8y92`,$$css:!0},borderedHoverOnPointer:{kbt25U:`khameleon1ww4t2b`,k9SbgR:null,kLpMmY:null,kxkfIg:null,k41OOK:null,k6cbTu:null,kllfP8:null,kaqb0e:null,kYsjTm:null,$$css:!0},disabled:{kkrTdU:`khameleon1h6gzvc`,kSiTet:`khameleonbyyjgo`,$$css:!0}},x.displayName=`ClickableCard`,x.__docgenInfo={description:`An interactive card that acts as a single navigation or action target.

Composes Card for visual styling and adds an interactive layer
with useClickableContainer. Nested interactive elements (buttons,
links, inputs) work independently — clicking them does NOT trigger
the card's onClick or navigation.

A visually-hidden <button> or <a> inside the card provides the
accessible role and label. The card surface is a plain <div> —
no role or tabIndex on the container.

@compositionHint Use for cards that navigate to a detail page or trigger an action.
For toggle selection cards, use SelectableCard instead.
Nest Button or other interactive elements freely inside — they won't conflict.

@example
\`\`\`
<ClickableCard label="Settings" href="/settings">
  <Text type="body" weight="bold">Settings</Text>
  <Text type="supporting" color="secondary">Manage your preferences</Text>
</ClickableCard>
\`\`\`

@example
\`\`\`
<ClickableCard label="Open modal" onClick={() => setShowModal(true)}>
  <Text type="body">Click anywhere to open</Text>
  <Button label="Other action" onClick={handleOther} />
</ClickableCard>
\`\`\``,methods:[],displayName:`ClickableCard`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLDivElement`}],raw:`Ref<HTMLDivElement>`},description:`Ref forwarded to the root element.`},label:{required:!0,tsType:{name:`string`},description:`Accessibility label for the card.
Used as \`aria-label\` — provides the accessible name for screen readers.
When the card has visible text that serves as its label, prefer
passing that text here so the screen reader announcement matches.`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: MouseEvent<HTMLElement>) => void`,signature:{arguments:[{type:{name:`MouseEvent`,elements:[{name:`HTMLElement`}],raw:`MouseEvent<HTMLElement>`},name:`event`}],return:{name:`void`}}},description:`Click handler. Fires when the card surface is clicked
(not when nested interactive elements are clicked).`},href:{required:!1,tsType:{name:`string`},description:`Navigation URL. When provided, clicking the card navigates to this URL.
Ctrl/Cmd+click opens in a new tab.`},target:{required:!1,tsType:{name:`string`},description:`Link target for href navigation.
@default '_self'`},isDisabled:{required:!1,tsType:{name:`boolean`},description:`Set to true to disable the card.
Disabled cards remain focusable (tabIndex 0) with aria-disabled
so screen reader users can discover them.`,defaultValue:{value:`false`,computed:!1}},children:{required:!1,tsType:{name:`ReactNode`},description:`Content to render inside the card.
Can include nested interactive elements (buttons, links) — they will
work independently from the card's click/navigation behavior.`},padding:{required:!1,tsType:{name:`union`,raw:`0 | 0.5 | 1 | 1.5 | 2 | 3 | 4 | 5 | 6 | 8 | 10`,elements:[{name:`literal`,value:`0`},{name:`literal`,value:`0.5`},{name:`literal`,value:`1`},{name:`literal`,value:`1.5`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`},{name:`literal`,value:`6`},{name:`literal`,value:`8`},{name:`literal`,value:`10`}]},description:`Internal padding of the card using the spacing scale.
@default 4 (16px)`},variant:{required:!1,tsType:{name:`union`,raw:`| 'default'
| 'transparent'
| 'muted'
| 'blue'
| 'cyan'
| 'gray'
| 'green'
| 'orange'
| 'pink'
| 'purple'
| 'red'
| 'teal'
| 'yellow'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'transparent'`},{name:`literal`,value:`'muted'`},{name:`literal`,value:`'blue'`},{name:`literal`,value:`'cyan'`},{name:`literal`,value:`'gray'`},{name:`literal`,value:`'green'`},{name:`literal`,value:`'orange'`},{name:`literal`,value:`'pink'`},{name:`literal`,value:`'purple'`},{name:`literal`,value:`'red'`},{name:`literal`,value:`'teal'`},{name:`literal`,value:`'yellow'`}]},description:`Background color variant.
@default 'default'`,defaultValue:{value:`'default'`,computed:!1}},width:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Width of the card.`},height:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Height of the card.`},maxWidth:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Maximum width of the card.`}},composes:[`Omit`]}})))()}var E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{T(),s(),l(),y(),_(),E=o(),D={title:`Core/ClickableCard`,component:x,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`default`,`transparent`,`muted`,`blue`,`cyan`,`gray`,`green`,`orange`,`pink`,`purple`,`red`,`teal`,`yellow`]}},parameters:{docs:{description:{component:"An interactive card for navigation or action targets. Nested interactive elements (buttons, links) work independently; clicking them does NOT trigger the card's onClick or navigation. Uses `useClickableContainer` internally."}}}},O={name:`Navigation (href)`,render:()=>(0,E.jsx)(x,{label:`Settings`,href:`/settings`,width:300,children:(0,E.jsxs)(b,{gap:1,children:[(0,E.jsx)(c,{type:`body`,weight:`bold`,children:`Settings`}),(0,E.jsx)(c,{type:`supporting`,color:`secondary`,children:`Manage your preferences`})]})}),parameters:{docs:{description:{story:"Card with `href`: clicking navigates. Ctrl/Cmd+click opens new tab. Middle-click opens new tab."}}}},k={name:`Action (onClick)`,render:()=>(0,E.jsx)(x,{label:`Open modal`,onClick:()=>alert(`Card clicked!`),width:300,children:(0,E.jsxs)(b,{gap:1,children:[(0,E.jsx)(c,{type:`body`,weight:`bold`,children:`Click me`}),(0,E.jsx)(c,{type:`supporting`,color:`secondary`,children:`Opens a modal`})]})}),parameters:{docs:{description:{story:"Card with `onClick`: fires the handler when the card surface is clicked."}}}},A={name:`Nested Interactive Elements`,render:()=>(0,E.jsx)(x,{label:`Product card`,href:`/product/123`,width:300,children:(0,E.jsxs)(b,{gap:2,children:[(0,E.jsx)(c,{type:`body`,weight:`bold`,children:`Product Name`}),(0,E.jsx)(c,{type:`supporting`,color:`secondary`,children:`$29.99`}),(0,E.jsx)(u,{label:`Add to cart`,onClick:()=>alert(`Added to cart! (card did NOT navigate)`),variant:`primary`})]})}),parameters:{docs:{description:{story:'The key feature: nested buttons/links work independently. Clicking "Add to cart" fires its own handler without triggering card navigation. This is handled by `useClickableContainer` which checks `hasInteractiveAncestor` on each click.'}}}},j={render:()=>(0,E.jsx)(x,{label:`Disabled card`,onClick:()=>{},isDisabled:!0,width:300,children:(0,E.jsxs)(b,{gap:1,children:[(0,E.jsx)(c,{type:`body`,weight:`bold`,children:`Disabled`}),(0,E.jsx)(c,{type:`supporting`,color:`secondary`,children:`This card cannot be clicked`})]})}),parameters:{docs:{description:{story:"`isDisabled` suppresses click, hover, focus, and sets `aria-disabled`. `tabIndex` becomes -1."}}}},M={name:`Color Variants`,render:()=>(0,E.jsx)(v,{gap:3,wrap:`wrap`,children:[`default`,`muted`,`transparent`,`blue`,`cyan`,`gray`,`green`,`orange`,`pink`,`purple`,`red`,`teal`,`yellow`].map(e=>(0,E.jsx)(x,{label:e,onClick:()=>alert(e),variant:e,width:140,children:(0,E.jsx)(c,{type:`body`,weight:`bold`,children:e})},e))}),parameters:{docs:{description:{story:`All color variants: same palette as Card. Color cards have transparent borders.`}}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Navigation (href)',
  render: () => <ClickableCard label="Settings" href="/settings" width={300}>
      <VStack gap={1}>
        <Text type="body" weight="bold">
          Settings
        </Text>
        <Text type="supporting" color="secondary">
          Manage your preferences
        </Text>
      </VStack>
    </ClickableCard>,
  parameters: {
    docs: {
      description: {
        story: 'Card with \`href\`: clicking navigates. Ctrl/Cmd+click opens new tab. Middle-click opens new tab.'
      }
    }
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Action (onClick)',
  render: () => <ClickableCard label="Open modal" onClick={() => alert('Card clicked!')} width={300}>
      <VStack gap={1}>
        <Text type="body" weight="bold">
          Click me
        </Text>
        <Text type="supporting" color="secondary">
          Opens a modal
        </Text>
      </VStack>
    </ClickableCard>,
  parameters: {
    docs: {
      description: {
        story: 'Card with \`onClick\`: fires the handler when the card surface is clicked.'
      }
    }
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Nested Interactive Elements',
  render: () => <ClickableCard label="Product card" href="/product/123" width={300}>
      <VStack gap={2}>
        <Text type="body" weight="bold">
          Product Name
        </Text>
        <Text type="supporting" color="secondary">
          $29.99
        </Text>
        <Button label="Add to cart" onClick={() => alert('Added to cart! (card did NOT navigate)')} variant="primary" />
      </VStack>
    </ClickableCard>,
  parameters: {
    docs: {
      description: {
        story: 'The key feature: nested buttons/links work independently. ' + 'Clicking "Add to cart" fires its own handler without triggering card navigation. ' + 'This is handled by \`useClickableContainer\` which checks \`hasInteractiveAncestor\` on each click.'
      }
    }
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <ClickableCard label="Disabled card" onClick={() => {}} isDisabled width={300}>
      <VStack gap={1}>
        <Text type="body" weight="bold">
          Disabled
        </Text>
        <Text type="supporting" color="secondary">
          This card cannot be clicked
        </Text>
      </VStack>
    </ClickableCard>,
  parameters: {
    docs: {
      description: {
        story: '\`isDisabled\` suppresses click, hover, focus, and sets \`aria-disabled\`. \`tabIndex\` becomes -1.'
      }
    }
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Color Variants',
  render: () => {
    const variants = ['default', 'muted', 'transparent', 'blue', 'cyan', 'gray', 'green', 'orange', 'pink', 'purple', 'red', 'teal', 'yellow'] as const;
    return <HStack gap={3} wrap="wrap">
        {variants.map(v => <ClickableCard key={v} label={v} onClick={() => alert(v)} variant={v} width={140}>
            <Text type="body" weight="bold">
              {v}
            </Text>
          </ClickableCard>)}
      </HStack>;
  },
  parameters: {
    docs: {
      description: {
        story: 'All color variants: same palette as Card. Color cards have transparent borders.'
      }
    }
  }
}`,...M.parameters?.docs?.source}}},N=[`Navigation`,`WithOnClick`,`NestedButton`,`Disabled`,`ColorVariants`]})))()}P();export{M as ColorVariants,j as Disabled,O as Navigation,A as NestedButton,k as WithOnClick,N as __namedExportsOrder,D as default};