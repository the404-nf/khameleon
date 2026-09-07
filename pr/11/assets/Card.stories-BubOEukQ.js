import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,n,r,t as i}from"./LayoutContent-BygUy9He.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,t as s}from"./LayoutHeader-DdDaoZAf.js";import{n as c,t as l}from"./Button-CZDOH4n-.js";import{n as u,t as d}from"./Card-CEKem3UW.js";import{n as f,t as p}from"./Heading-CAKcIsWt.js";import{n as m,t as h}from"./HStack-C8fj4Th3.js";import{n as g,t as _}from"./VStack-D-jTblwr.js";import{n as v,t as y}from"./Section-XLOk7KzM.js";import{n as b,t as x}from"./LayoutFooter-DVJiAji7.js";var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{u(),v(),g(),m(),t(),o(),n(),b(),c(),f(),S=a(),C={title:`Core/Card`,component:d,tags:[`autodocs`],decorators:[e=>(0,S.jsx)(`div`,{className:`x1eiddq6 x1gt495`,children:(0,S.jsx)(e,{})})],argTypes:{width:{control:{type:`range`,min:100,max:800,step:10},description:`Width in pixels`},height:{control:{type:`range`,min:100,max:600,step:10},description:`Height in pixels`},maxWidth:{control:{type:`range`,min:100,max:800,step:10},description:`Maximum width in pixels`},minHeight:{control:{type:`range`,min:100,max:600,step:10},description:`Minimum height in pixels`}}},w={args:{width:300},render:e=>(0,S.jsx)(d,{...e,children:(0,S.jsx)(`p`,{className:`x9ynric x1tgivj0 x1ghz6dp`,children:`Simple content inside a card. The card provides default padding via the --container-padding CSS variable.`})})},T={render:()=>(0,S.jsx)(d,{width:320,children:(0,S.jsxs)(_,{gap:2,children:[(0,S.jsx)(p,{level:3,children:`Card Title`}),(0,S.jsx)(`p`,{className:`x9ynric x1ghz6dp xv1l7n4 xif65rj`,children:`This card contains simple content without Layout. The container padding is applied automatically.`})]})})},E={render:()=>(0,S.jsx)(d,{width:350,children:(0,S.jsx)(r,{header:(0,S.jsx)(s,{hasDivider:!0,children:(0,S.jsx)(p,{level:3,children:`Card with Layout`})}),content:(0,S.jsx)(i,{children:(0,S.jsx)(`p`,{className:`x9ynric x1ghz6dp xv1l7n4 xif65rj`,children:`When using Layout, the layout uses negative margin to escape the container padding, then manages its own padding.`})}),footer:(0,S.jsx)(x,{hasDivider:!0,children:(0,S.jsxs)(h,{gap:2,hAlign:`end`,children:[(0,S.jsx)(l,{label:`Cancel`,variant:`secondary`,children:`Cancel`}),(0,S.jsx)(l,{label:`Save`,variant:`primary`,children:`Save`})]})})})})},D={render:()=>(0,S.jsxs)(`div`,{className:`x78zum5 x1qh66ti x1a02dak`,children:[(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`h4`,{className:`xrcdmg7 x9ynric xif65rj xv1l7n4`,children:`Small (200px)`}),(0,S.jsx)(d,{width:200,children:(0,S.jsx)(`p`,{className:`x9ynric x1tgivj0 x1ghz6dp`,children:`Small card`})})]}),(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`h4`,{className:`xrcdmg7 x9ynric xif65rj xv1l7n4`,children:`Medium (300px)`}),(0,S.jsx)(d,{width:300,children:(0,S.jsx)(`p`,{className:`x9ynric x1tgivj0 x1ghz6dp`,children:`Medium card`})})]}),(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`h4`,{className:`xrcdmg7 x9ynric xif65rj xv1l7n4`,children:`Large (400px)`}),(0,S.jsx)(d,{width:400,children:(0,S.jsx)(`p`,{className:`x9ynric x1tgivj0 x1ghz6dp`,children:`Large card`})})]})]})},O={render:()=>(0,S.jsx)(d,{width:300,height:200,children:(0,S.jsx)(r,{header:(0,S.jsx)(s,{hasDivider:!0,children:(0,S.jsx)(p,{level:3,children:`Fixed Height Card`})}),content:(0,S.jsx)(i,{children:(0,S.jsx)(`p`,{className:`x9ynric x1ghz6dp xv1l7n4 xif65rj`,children:`This card has a fixed height. Content area will scroll if needed.`})})})})},k={render:()=>(0,S.jsx)(d,{width:400,children:(0,S.jsxs)(_,{gap:3,children:[(0,S.jsx)(p,{level:3,children:`Parent Card`}),(0,S.jsx)(d,{width:`100%`,children:(0,S.jsx)(`p`,{className:`x9ynric x1ghz6dp xv1l7n4 xif65rj`,children:`Nested card resets --container-padding and gets its own padding.`})}),(0,S.jsx)(d,{width:`100%`,children:(0,S.jsx)(`p`,{className:`x9ynric x1ghz6dp xv1l7n4 xif65rj`,children:`Another nested card with independent padding.`})})]})})},A={render:()=>(0,S.jsxs)(d,{width:400,children:[(0,S.jsx)(y,{variant:`transparent`,dividers:[`bottom`],children:(0,S.jsxs)(_,{gap:2,children:[(0,S.jsx)(p,{level:3,children:`First Section`}),(0,S.jsx)(`p`,{className:`x9ynric x1ghz6dp xv1l7n4 xif65rj`,children:`This section escapes the card padding on top and sides because it's the first child.`})]})}),(0,S.jsx)(y,{variant:`transparent`,dividers:[`bottom`],children:(0,S.jsxs)(_,{gap:2,children:[(0,S.jsx)(p,{level:3,children:`Middle Section`}),(0,S.jsx)(`p`,{className:`x9ynric x1ghz6dp xv1l7n4 xif65rj`,children:`Middle sections only escape horizontal padding, maintaining visual separation from adjacent sections.`})]})}),(0,S.jsx)(y,{variant:`transparent`,children:(0,S.jsxs)(_,{gap:2,children:[(0,S.jsx)(p,{level:3,children:`Last Section`}),(0,S.jsx)(`p`,{className:`x9ynric x1ghz6dp xv1l7n4 xif65rj`,children:`This section escapes the card padding on bottom and sides because it's the last child.`})]})})]})},j={render:()=>(0,S.jsx)(d,{width:350,children:(0,S.jsx)(y,{variant:`muted`,children:(0,S.jsxs)(_,{gap:2,children:[(0,S.jsx)(p,{level:3,children:`Only Section (Full Bleed All Sides)`}),(0,S.jsx)(`p`,{className:`x9ynric x1ghz6dp xv1l7n4 xif65rj`,children:`When a section is both first and last child, it gets full bleed on all four sides, completely filling the card.`})]})})})},M={render:()=>(0,S.jsxs)(`div`,{className:`x78zum5 x1qh66ti x1a02dak`,children:[(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`h4`,{className:`xrcdmg7 x9ynric xif65rj xv1l7n4`,children:`Simple Content`}),(0,S.jsx)(d,{width:250,children:(0,S.jsxs)(_,{gap:2,children:[(0,S.jsx)(p,{level:3,children:`Card Title`}),(0,S.jsx)(`p`,{className:`x9ynric x1ghz6dp xv1l7n4 xif65rj`,children:`Regular content uses the card's container padding.`})]})})]}),(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`h4`,{className:`xrcdmg7 x9ynric xif65rj xv1l7n4`,children:`With Section`}),(0,S.jsx)(d,{width:250,children:(0,S.jsx)(y,{variant:`muted`,children:(0,S.jsxs)(_,{gap:2,children:[(0,S.jsx)(p,{level:3,children:`Card Title`}),(0,S.jsx)(`p`,{className:`x9ynric x1ghz6dp xv1l7n4 xif65rj`,children:`Section content bleeds to the card edges.`})]})})})]})]})},N={render:()=>(0,S.jsxs)(`div`,{className:`x78zum5 x1qh66ti x1a02dak`,children:[(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`h4`,{className:`xrcdmg7 x9ynric xif65rj xv1l7n4`,children:`Default (with padding)`}),(0,S.jsx)(d,{width:250,children:(0,S.jsx)(`div`,{style:{backgroundColor:`rgba(0,100,200,0.2)`,padding:8},children:(0,S.jsx)(`p`,{className:`x9ynric x1tgivj0 x1ghz6dp`,children:`Content with card padding`})})})]}),(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`h4`,{className:`xrcdmg7 x9ynric xif65rj xv1l7n4`,children:`Full Bleed (no padding)`}),(0,S.jsx)(d,{width:250,padding:0,children:(0,S.jsx)(`div`,{style:{backgroundColor:`rgba(0,100,200,0.2)`,padding:8},children:(0,S.jsx)(`p`,{className:`x9ynric x1tgivj0 x1ghz6dp`,children:`Content touches card edges`})})})]})]})},P={decorators:[e=>(0,S.jsx)(e,{})],render:()=>(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:0},children:[(0,S.jsxs)(`div`,{className:`x1eiddq6 x1gt495`,children:[(0,S.jsx)(`h4`,{className:`xrcdmg7 x9ynric xif65rj xv1l7n4`,children:`Cards on wash background`}),(0,S.jsxs)(`div`,{className:`x78zum5 x1qh66ti x1a02dak`,children:[(0,S.jsx)(d,{width:250,children:(0,S.jsxs)(_,{gap:2,children:[(0,S.jsx)(p,{level:3,children:`Card on Wash`}),(0,S.jsx)(`p`,{className:`x9ynric x1ghz6dp xv1l7n4 xif65rj`,children:`Cards stand out clearly against the wash background, creating a layered visual hierarchy.`})]})}),(0,S.jsx)(d,{width:250,children:(0,S.jsxs)(_,{gap:2,children:[(0,S.jsx)(p,{level:3,children:`Another Card`}),(0,S.jsx)(`p`,{className:`x9ynric x1ghz6dp xv1l7n4 xif65rj`,children:`Multiple cards on wash create a dashboard-like layout.`})]})})]})]}),(0,S.jsxs)(y,{variant:`section`,width:`100%`,children:[(0,S.jsx)(`h4`,{className:`xrcdmg7 x9ynric xif65rj xv1l7n4`,children:`Cards on surface section`}),(0,S.jsxs)(`div`,{className:`x78zum5 x1qh66ti x1a02dak`,children:[(0,S.jsx)(d,{width:250,children:(0,S.jsxs)(_,{gap:2,children:[(0,S.jsx)(p,{level:3,children:`Card on Surface`}),(0,S.jsx)(`p`,{className:`x9ynric x1ghz6dp xv1l7n4 xif65rj`,children:`On a surface background, cards are more subtle since both share the same base color.`})]})}),(0,S.jsx)(d,{width:250,children:(0,S.jsxs)(_,{gap:2,children:[(0,S.jsx)(p,{level:3,children:`Another Card`}),(0,S.jsx)(`p`,{className:`x9ynric x1ghz6dp xv1l7n4 xif65rj`,children:`The card border provides separation from the surface.`})]})})]})]})]})},F={render:()=>(0,S.jsxs)(`div`,{className:`x78zum5 x1qh66ti x1a02dak`,children:[(0,S.jsx)(d,{width:350,variant:`muted`,children:(0,S.jsxs)(_,{gap:2,children:[(0,S.jsx)(p,{level:3,children:`💡 Tip`}),(0,S.jsxs)(`p`,{className:`x9ynric x1ghz6dp xv1l7n4 xif65rj`,children:[`Use `,(0,S.jsx)(`code`,{children:`variant="muted"`}),` for callouts, tips, or highlighted information. The muted background provides visual contrast without needing a nested section.`]})]})}),(0,S.jsx)(d,{width:350,variant:`muted`,children:(0,S.jsxs)(_,{gap:2,children:[(0,S.jsx)(p,{level:3,children:`⚠️ Warning`}),(0,S.jsx)(`p`,{className:`x9ynric x1ghz6dp xv1l7n4 xif65rj`,children:`Muted cards work well for alerts and warnings too.`})]})})]})},I={render:()=>(0,S.jsx)(`div`,{className:`x78zum5 x1qh66ti x1a02dak`,children:[`default`,`muted`,`blue`,`cyan`,`gray`,`green`,`orange`,`pink`,`purple`,`red`,`teal`,`yellow`].map(e=>(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`h4`,{className:`xrcdmg7 x9ynric xif65rj xv1l7n4`,children:e}),(0,S.jsx)(d,{width:160,variant:e,children:(0,S.jsx)(`p`,{className:`x9ynric x1tgivj0 x1ghz6dp`,children:e})})]},e))})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    width: 300
  },
  render: args => <Card {...args}>
      <p {...stylex.props(styles.text)}>
        Simple content inside a card. The card provides default padding via the
        --container-padding CSS variable.
      </p>
    </Card>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <Card width={320}>
      <VStack gap={2}>
        <Heading level={3}>Card Title</Heading>
        <p {...stylex.props(styles.text, styles.textSecondary)}>
          This card contains simple content without Layout. The container
          padding is applied automatically.
        </p>
      </VStack>
    </Card>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <Card width={350}>
      <Layout header={<LayoutHeader hasDivider>
            <Heading level={3}>Card with Layout</Heading>
          </LayoutHeader>} content={<LayoutContent>
            <p {...stylex.props(styles.text, styles.textSecondary)}>
              When using Layout, the layout uses negative margin to escape
              the container padding, then manages its own padding.
            </p>
          </LayoutContent>} footer={<LayoutFooter hasDivider>
            <HStack gap={2} hAlign="end">
              <Button label="Cancel" variant="secondary">
                Cancel
              </Button>
              <Button label="Save" variant="primary">
                Save
              </Button>
            </HStack>
          </LayoutFooter>} />
    </Card>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.storyWrapper)}>
      <div>
        <h4 {...stylex.props(styles.heading)}>Small (200px)</h4>
        <Card width={200}>
          <p {...stylex.props(styles.text)}>Small card</p>
        </Card>
      </div>
      <div>
        <h4 {...stylex.props(styles.heading)}>Medium (300px)</h4>
        <Card width={300}>
          <p {...stylex.props(styles.text)}>Medium card</p>
        </Card>
      </div>
      <div>
        <h4 {...stylex.props(styles.heading)}>Large (400px)</h4>
        <Card width={400}>
          <p {...stylex.props(styles.text)}>Large card</p>
        </Card>
      </div>
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <Card width={300} height={200}>
      <Layout header={<LayoutHeader hasDivider>
            <Heading level={3}>Fixed Height Card</Heading>
          </LayoutHeader>} content={<LayoutContent>
            <p {...stylex.props(styles.text, styles.textSecondary)}>
              This card has a fixed height. Content area will scroll if needed.
            </p>
          </LayoutContent>} />
    </Card>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <Card width={400}>
      <VStack gap={3}>
        <Heading level={3}>Parent Card</Heading>
        <Card width="100%">
          <p {...stylex.props(styles.text, styles.textSecondary)}>
            Nested card resets --container-padding and gets its own padding.
          </p>
        </Card>
        <Card width="100%">
          <p {...stylex.props(styles.text, styles.textSecondary)}>
            Another nested card with independent padding.
          </p>
        </Card>
      </VStack>
    </Card>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <Card width={400}>
      <Section variant="transparent" dividers={['bottom']}>
        <VStack gap={2}>
          <Heading level={3}>First Section</Heading>
          <p {...stylex.props(styles.text, styles.textSecondary)}>
            This section escapes the card padding on top and sides because it's
            the first child.
          </p>
        </VStack>
      </Section>
      <Section variant="transparent" dividers={['bottom']}>
        <VStack gap={2}>
          <Heading level={3}>Middle Section</Heading>
          <p {...stylex.props(styles.text, styles.textSecondary)}>
            Middle sections only escape horizontal padding, maintaining visual
            separation from adjacent sections.
          </p>
        </VStack>
      </Section>
      <Section variant="transparent">
        <VStack gap={2}>
          <Heading level={3}>Last Section</Heading>
          <p {...stylex.props(styles.text, styles.textSecondary)}>
            This section escapes the card padding on bottom and sides because
            it's the last child.
          </p>
        </VStack>
      </Section>
    </Card>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <Card width={350}>
      <Section variant="muted">
        <VStack gap={2}>
          <Heading level={3}>Only Section (Full Bleed All Sides)</Heading>
          <p {...stylex.props(styles.text, styles.textSecondary)}>
            When a section is both first and last child, it gets full bleed on
            all four sides, completely filling the card.
          </p>
        </VStack>
      </Section>
    </Card>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.storyWrapper)}>
      <div>
        <h4 {...stylex.props(styles.heading)}>Simple Content</h4>
        <Card width={250}>
          <VStack gap={2}>
            <Heading level={3}>Card Title</Heading>
            <p {...stylex.props(styles.text, styles.textSecondary)}>
              Regular content uses the card's container padding.
            </p>
          </VStack>
        </Card>
      </div>
      <div>
        <h4 {...stylex.props(styles.heading)}>With Section</h4>
        <Card width={250}>
          <Section variant="muted">
            <VStack gap={2}>
              <Heading level={3}>Card Title</Heading>
              <p {...stylex.props(styles.text, styles.textSecondary)}>
                Section content bleeds to the card edges.
              </p>
            </VStack>
          </Section>
        </Card>
      </div>
    </div>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.storyWrapper)}>
      <div>
        <h4 {...stylex.props(styles.heading)}>Default (with padding)</h4>
        <Card width={250}>
          <div style={{
          backgroundColor: 'rgba(0,100,200,0.2)',
          padding: 8
        }}>
            <p {...stylex.props(styles.text)}>Content with card padding</p>
          </div>
        </Card>
      </div>
      <div>
        <h4 {...stylex.props(styles.heading)}>Full Bleed (no padding)</h4>
        <Card width={250} padding={0}>
          <div style={{
          backgroundColor: 'rgba(0,100,200,0.2)',
          padding: 8
        }}>
            <p {...stylex.props(styles.text)}>Content touches card edges</p>
          </div>
        </Card>
      </div>
    </div>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <Story />],
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 0
  }}>
      <div {...stylex.props(styles.pageWrapper)}>
        <h4 {...stylex.props(styles.heading)}>Cards on wash background</h4>
        <div {...stylex.props(styles.storyWrapper)}>
          <Card width={250}>
            <VStack gap={2}>
              <Heading level={3}>Card on Wash</Heading>
              <p {...stylex.props(styles.text, styles.textSecondary)}>
                Cards stand out clearly against the wash background, creating a
                layered visual hierarchy.
              </p>
            </VStack>
          </Card>
          <Card width={250}>
            <VStack gap={2}>
              <Heading level={3}>Another Card</Heading>
              <p {...stylex.props(styles.text, styles.textSecondary)}>
                Multiple cards on wash create a dashboard-like layout.
              </p>
            </VStack>
          </Card>
        </div>
      </div>
      <Section variant="section" width="100%">
        <h4 {...stylex.props(styles.heading)}>Cards on surface section</h4>
        <div {...stylex.props(styles.storyWrapper)}>
          <Card width={250}>
            <VStack gap={2}>
              <Heading level={3}>Card on Surface</Heading>
              <p {...stylex.props(styles.text, styles.textSecondary)}>
                On a surface background, cards are more subtle since both share
                the same base color.
              </p>
            </VStack>
          </Card>
          <Card width={250}>
            <VStack gap={2}>
              <Heading level={3}>Another Card</Heading>
              <p {...stylex.props(styles.text, styles.textSecondary)}>
                The card border provides separation from the surface.
              </p>
            </VStack>
          </Card>
        </div>
      </Section>
    </div>
}`,...P.parameters?.docs?.source},description:{story:`Cards shown on top of different background treatments.
Demonstrates the visual contrast between cards on wash (gray)
backgrounds vs surface (white) backgrounds.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.storyWrapper)}>
      <Card width={350} variant="muted">
        <VStack gap={2}>
          <Heading level={3}>💡 Tip</Heading>
          <p {...stylex.props(styles.text, styles.textSecondary)}>
            Use <code>variant="muted"</code> for callouts, tips, or highlighted
            information. The muted background provides visual contrast without
            needing a nested section.
          </p>
        </VStack>
      </Card>
      <Card width={350} variant="muted">
        <VStack gap={2}>
          <Heading level={3}>⚠️ Warning</Heading>
          <p {...stylex.props(styles.text, styles.textSecondary)}>
            Muted cards work well for alerts and warnings too.
          </p>
        </VStack>
      </Card>
    </div>
}`,...F.parameters?.docs?.source},description:{story:`Callout card: a muted card used as a callout/highlight area.
Uses \`variant="muted"\` directly on Card instead of wrapping content
in a wash section — simpler and semantically cleaner.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.storyWrapper)}>
      {(['default', 'muted', 'blue', 'cyan', 'gray', 'green', 'orange', 'pink', 'purple', 'red', 'teal', 'yellow'] as const).map(variant => <div key={variant}>
          <h4 {...stylex.props(styles.heading)}>{variant}</h4>
          <Card width={160} variant={variant}>
            <p {...stylex.props(styles.text)}>{variant}</p>
          </Card>
        </div>)}
    </div>
}`,...I.parameters?.docs?.source},description:{story:"All background color variants in one view.\n`muted` uses the wash background for de-emphasised cards;\nthe non-semantic variants use the `--color-<name>-background` token.",...I.parameters?.docs?.description}}},L=[`Default`,`WithSimpleContent`,`WithInnerLayout`,`Sizes`,`FixedHeight`,`NestedCards`,`NestedSections`,`SingleSection`,`MixedContent`,`FullBleed`,`OnBackgrounds`,`Callout`,`ColorVariants`]})))()}R();export{F as Callout,I as ColorVariants,w as Default,O as FixedHeight,N as FullBleed,M as MixedContent,k as NestedCards,A as NestedSections,P as OnBackgrounds,j as SingleSection,D as Sizes,E as WithInnerLayout,T as WithSimpleContent,L as __namedExportsOrder,C as default};