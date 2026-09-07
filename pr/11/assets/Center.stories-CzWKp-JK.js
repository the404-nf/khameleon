import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./stylex-Dft6gtPK.js";import{n as r}from"./mergeProps-JRyAvMxc.js";import{n as i,t as a}from"./themeProps-DRQoVAIO.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Text-543dlLxz.js";import{n as l,t as u}from"./Icon-D9gPeCUm.js";import{n as d,t as f}from"./Card-CEKem3UW.js";import{n as p,t as m}from"./Section-XLOk7KzM.js";import{n as h,t as g}from"./CheckCircleIcon-C9B48rkv.js";function _({axis:e=`both`,width:n,height:a,maxWidth:o,minHeight:s,isInline:c=!1,children:l,xstyle:u,className:d,style:f,ref:p,...m}){let h=r(i(`center`,{axis:e}),t(c?y.inline:y.base,(e===`both`||e===`vertical`)&&y.alignItemsCenter,(e===`both`||e===`horizontal`)&&y.justifyContentCenter,b.sizing(n??null,a??null,o??null,s??null),u),d,f);return(0,v.jsx)(`div`,{ref:p,...h,...m,children:l})}var v,y,b;function x(){return(x=e((()=>{n(),a(),v=o(),y={base:{k1xSpc:`khameleon78zum5`,$$css:!0},inline:{k1xSpc:`khameleon3nfvp2`,$$css:!0},alignItemsCenter:{kGNEyG:`khameleon6s0dn4`,$$css:!0},justifyContentCenter:{kjj79g:`khameleonl56j7k`,$$css:!0}},b={sizing:(e,t,n,r)=>[{kzqmXN:e==null?e:`khameleon5lhr3w`,kZKoxP:t==null?t:`khameleon16ye13r`,ks0D6T:n==null?n:`khameleonf68679`,kAzted:r==null?r:`khameleon82snj4`,$$css:!0},{"--x-width":(e=>typeof e==`number`?e+`px`:e??void 0)(e),"--x-height":(e=>typeof e==`number`?e+`px`:e??void 0)(t),"--x-maxWidth":(e=>typeof e==`number`?e+`px`:e??void 0)(n),"--x-minHeight":(e=>typeof e==`number`?e+`px`:e??void 0)(r)}]},_.displayName=`Center`,_.__docgenInfo={description:`Center component for centering children horizontally and/or vertically.

Uses flexbox for centering. By default, centers on both axes.
Use the \`axis\` prop to center on only one axis.

@example
\`\`\`
<Center width={300} height={200}>
  <Content />
</Center>
\`\`\``,methods:[],displayName:`Center`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:`Ref forwarded to the root element`},axis:{required:!1,tsType:{name:`union`,raw:`'both' | 'horizontal' | 'vertical'`,elements:[{name:`literal`,value:`'both'`},{name:`literal`,value:`'horizontal'`},{name:`literal`,value:`'vertical'`}]},description:"Center axis - which direction(s) to center.\n- `both`: Center both horizontally and vertically (default)\n- `horizontal`: Center horizontally only (justifyContent: center)\n- `vertical`: Center vertically only (alignItems: center)\n@default 'both'",defaultValue:{value:`'both'`,computed:!1}},width:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Width of the container.
Numbers are treated as pixels, strings are used as-is (e.g., '100%').`},height:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Height of the container.
Numbers are treated as pixels, strings are used as-is (e.g., '100%').`},maxWidth:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Maximum width of the container.
Numbers are treated as pixels, strings are used as-is (e.g., '100%').`},minHeight:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Minimum height of the container.
Numbers are treated as pixels, strings are used as-is (e.g., '100%').`},isInline:{required:!1,tsType:{name:`boolean`},description:`Whether to make the container inline-flex (useful for text/icons).
@default false`,defaultValue:{value:`false`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:`Content to render inside the center container.`}},composes:[`Omit`]}})))()}var S,C,w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{x(),d(),p(),l(),s(),h(),S=o(),C={iconWrapper:{kWkggS:`x1o0wnni`,kMwMTN:`x1vvqiwl`,kmVPX3:`xlsj2fj`,kg3NbH:null,kuDDbn:null,kE3dHu:null,kP0aTx:null,kpe85a:null,k8WAf4:null,kLKAdn:null,kGO01o:null,kaIpWk:`xh6dtrn`,krdFHd:null,kfmiAY:null,kVL7Gh:null,kT0f0o:null,kIxVMA:null,ksF3WI:null,kqGeR4:null,kYm2EN:null,$$css:!0}},w=({children:e})=>(0,S.jsx)(`div`,{className:`x1o0wnni x1vvqiwl xmkeg23 x1y0btm7 xlee4gx x1na6nto xm7rs69 xh6dtrn xk50ysn`,children:e}),T={title:`Core/Center`,component:_,tags:[`autodocs`],argTypes:{axis:{control:`select`,options:[`both`,`horizontal`,`vertical`],description:`Which direction(s) to center`},width:{control:`text`,description:`Width of the container (number for px, string for any unit)`},height:{control:`text`,description:`Height of the container (number for px, string for any unit)`},isInline:{control:`boolean`,description:`Whether to render as inline-flex`}}},E={args:{axis:`both`,width:`100%`,height:200,children:null},render:e=>(0,S.jsx)(m,{variant:`muted`,width:`100%`,children:(0,S.jsx)(_,{...e,children:(0,S.jsx)(w,{children:`Centered Content`})})})},D={args:{axis:`horizontal`,width:`100%`,children:null},render:e=>(0,S.jsx)(m,{variant:`muted`,width:`100%`,children:(0,S.jsx)(_,{...e,children:(0,S.jsx)(w,{children:`Horizontal Center`})})})},O={args:{axis:`vertical`,height:150,width:`100%`,children:null},render:e=>(0,S.jsx)(m,{variant:`muted`,width:`100%`,children:(0,S.jsx)(_,{...e,children:(0,S.jsx)(w,{children:`Vertical Center`})})})},k={args:{axis:`both`,width:`100%`,height:300,children:null},render:e=>(0,S.jsx)(m,{variant:`muted`,children:(0,S.jsx)(_,{...e,children:(0,S.jsx)(w,{children:`Full Width, Fixed Height`})})})},A={args:{isInline:!0,children:null},render:e=>(0,S.jsx)(m,{variant:`muted`,children:(0,S.jsx)(f,{children:(0,S.jsxs)(c,{type:`body`,children:[`Text with inline centered icon:`,` `,(0,S.jsx)(_,{...e,xstyle:C.iconWrapper,children:(0,S.jsx)(u,{icon:g,size:`sm`})}),` `,`and more text after.`]})})})},j={args:{axis:`both`,width:300,height:200,children:null},render:e=>(0,S.jsx)(m,{variant:`muted`,children:(0,S.jsx)(_,{...e,children:(0,S.jsx)(`div`,{className:`x1o0wnni x1vvqiwl xlsj2fj xh6dtrn`,children:(0,S.jsx)(u,{icon:g,size:`lg`})})})})},M={args:{height:150,children:null},render:e=>(0,S.jsx)(m,{variant:`muted`,children:(0,S.jsx)(f,{children:(0,S.jsx)(_,{...e,children:(0,S.jsx)(w,{children:`Centered in Card`})})})})},N={args:{children:null},render:()=>(0,S.jsx)(m,{variant:`muted`,children:(0,S.jsxs)(`div`,{className:`x78zum5 xdt5ytf x1qh66ti`,children:[(0,S.jsxs)(f,{children:[(0,S.jsx)(c,{type:`supporting`,display:`block`,children:`axis: both (default)`}),(0,S.jsx)(_,{axis:`both`,width:300,height:150,children:(0,S.jsx)(w,{children:`Both Axes`})})]}),(0,S.jsxs)(f,{children:[(0,S.jsx)(c,{type:`supporting`,display:`block`,children:`axis: horizontal`}),(0,S.jsx)(_,{axis:`horizontal`,width:300,children:(0,S.jsx)(w,{children:`Horizontal Only`})})]}),(0,S.jsxs)(f,{children:[(0,S.jsx)(c,{type:`supporting`,display:`block`,children:`axis: vertical`}),(0,S.jsx)(_,{axis:`vertical`,height:150,children:(0,S.jsx)(w,{children:`Vertical Only`})})]})]})})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    axis: 'both',
    width: '100%',
    height: 200,
    children: null
  },
  render: args => <Section variant="muted" width="100%">
      <Center {...args}>
        <Box>Centered Content</Box>
      </Center>
    </Section>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    axis: 'horizontal',
    width: '100%',
    children: null
  },
  render: args => <Section variant="muted" width="100%">
      <Center {...args}>
        <Box>Horizontal Center</Box>
      </Center>
    </Section>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    axis: 'vertical',
    height: 150,
    width: '100%',
    children: null
  },
  render: args => <Section variant="muted" width="100%">
      <Center {...args}>
        <Box>Vertical Center</Box>
      </Center>
    </Section>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    axis: 'both',
    width: '100%',
    height: 300,
    children: null
  },
  render: args => <Section variant="muted">
      <Center {...args}>
        <Box>Full Width, Fixed Height</Box>
      </Center>
    </Section>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    isInline: true,
    children: null
  },
  render: args => <Section variant="muted">
      <Card>
        <Text type="body">
          Text with inline centered icon:{' '}
          <Center {...args} xstyle={styles.iconWrapper}>
            <Icon icon={CheckCircleIcon} size="sm" />
          </Center>{' '}
          and more text after.
        </Text>
      </Card>
    </Section>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    axis: 'both',
    width: 300,
    height: 200,
    children: null
  },
  render: args => <Section variant="muted">
      <Center {...args}>
        <div {...stylex.props(styles.iconWrapper)}>
          <Icon icon={CheckCircleIcon} size="lg" />
        </div>
      </Center>
    </Section>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    height: 150,
    children: null
  },
  render: args => <Section variant="muted">
      <Card>
        <Center {...args}>
          <Box>Centered in Card</Box>
        </Center>
      </Card>
    </Section>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <Section variant="muted">
      <div {...stylex.props(styles.storyWrapper)}>
        <Card>
          <Text type="supporting" display="block">
            axis: both (default)
          </Text>
          <Center axis="both" width={300} height={150}>
            <Box>Both Axes</Box>
          </Center>
        </Card>
        <Card>
          <Text type="supporting" display="block">
            axis: horizontal
          </Text>
          <Center axis="horizontal" width={300}>
            <Box>Horizontal Only</Box>
          </Center>
        </Card>
        <Card>
          <Text type="supporting" display="block">
            axis: vertical
          </Text>
          <Center axis="vertical" height={150}>
            <Box>Vertical Only</Box>
          </Center>
        </Card>
      </div>
    </Section>
}`,...N.parameters?.docs?.source}}},P=[`Default`,`HorizontalOnly`,`VerticalOnly`,`FullSize`,`Inline`,`WithIcon`,`InsideACard`,`AllAxisModes`]})))()}F();export{N as AllAxisModes,E as Default,k as FullSize,D as HorizontalOnly,A as Inline,M as InsideACard,O as VerticalOnly,j as WithIcon,P as __namedExportsOrder,T as default};