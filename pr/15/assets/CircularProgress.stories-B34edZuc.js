import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./stylex-Dft6gtPK.js";import{n as i}from"./mergeProps-JRyAvMxc.js";import{n as a,t as o}from"./themeProps-DRQoVAIO.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Text-543dlLxz.js";function u({value:e,max:t=100,label:r,isLabelHidden:o=!0,children:s,size:c=`md`,variant:l=`accent`,xstyle:u,className:_,style:v,"data-testid":y,ref:b,...x}){let S=(0,d.useId)(),C=e==null,{diameter:w,strokeWidth:T}=p[c],E=(w-T)/2,D=2*Math.PI*E,O=Math.min(Math.max(0,e??0),t),k=D*(1-(t>0?O/t:0)),A=w/2,j=!o;return(0,f.jsxs)(`div`,{ref:b,...i(a(`circular-progress`,{variant:l,size:c}),n(m.root,j&&m.rootWithLabel,u),_,v),"data-testid":y,...x,children:[(0,f.jsx)(`span`,{id:S,...{0:{className:`khameleon10l6tqk khameleon1i1rx1s khameleonjm9jq1 khameleon1717udv khameleonkdpibf khameleonb3r6kr khameleonzpqnlu khameleonuxw1ft khameleonc342km`},1:{className:`khameleon141an7d khameleon1ltkj2j khameleon1e4wzip khameleonv1l7n4`}}[!!j<<0],children:r}),(0,f.jsxs)(`div`,{className:`khameleon1n2onr6 khameleon3nfvp2`,children:[(0,f.jsxs)(`svg`,{role:C?`progressbar`:`meter`,"aria-labelledby":S,"aria-valuenow":C?void 0:O,"aria-valuemin":C?void 0:0,"aria-valuemax":C?void 0:t,width:w,height:w,viewBox:`0 0 ${w} ${w}`,...{0:{className:`khameleon1lliihq khameleon9tu13d`},1:{className:`khameleon1lliihq khameleongszjcq khameleon1c74tu6 khameleony02sl2 khameleon1esw782 khameleona4qsjk`}}[!!C<<0],children:[(0,f.jsx)(`circle`,{...i(a(`circular-progress-track`),n(m.track,g[l])),cx:A,cy:A,r:E,strokeWidth:T}),C?(0,f.jsx)(`circle`,{...i(a(`circular-progress-fill`,{variant:l}),n(m.fillIndeterminate,h[l])),cx:A,cy:A,r:E,strokeWidth:T}):(0,f.jsx)(`circle`,{...i(a(`circular-progress-fill`,{variant:l}),n(m.fill,h[l])),cx:A,cy:A,r:E,strokeWidth:T,strokeDasharray:D,strokeDashoffset:k})]}),s!=null&&(0,f.jsx)(`div`,{className:`khameleon10l6tqk khameleon10a8y8t khameleon78zum5 khameleon6s0dn4 khameleonl56j7k khameleon47corl`,children:s})]})]})}var d,f,p,m,h,g;function _(){return(_=e((()=>{d=t(),r(),o(),f=s(),p={sm:{diameter:32,strokeWidth:3},md:{diameter:48,strokeWidth:4},lg:{diameter:64,strokeWidth:5}},m={root:{k1xSpc:`khameleon3nfvp2`,kGNEyG:`khameleon6s0dn4`,kjj79g:`khameleonl56j7k`,kVAEAm:`khameleon1n2onr6`,kmuXW:`khameleon2lah0s`,$$css:!0},rootWithLabel:{kXwgrk:`khameleondt5ytf`,kOIVth:`khameleonzye2dw`,$$css:!0},track:{kDwRjp:`khameleonbh8q5q`,kjVXCG:`khameleonpi25hw`,$$css:!0},fill:{kDwRjp:`khameleonbh8q5q`,kU5bRw:`khameleon1owpc8m`,k1ekBW:`khameleonxnu56j`,kIyJzY:`khameleon80gvsz`,kAMwcw:`khameleonlr8y92`,$$css:!0},fillIndeterminate:{kDwRjp:`khameleonbh8q5q`,kU5bRw:`khameleon1owpc8m`,kKVMdj:`khameleon1k1eahx`,k44tkh:`khameleonmg6eyc khameleonnh0sag`,kyAemX:`khameleon4hg4is`,ko0y90:`khameleona4qsjk`,$$css:!0}},h={accent:{kjVXCG:`khameleonjsr54c`,$$css:!0},success:{kjVXCG:`khameleon8y33gb`,$$css:!0},warning:{kjVXCG:`khameleon9ezeq1`,$$css:!0},error:{kjVXCG:`khameleon1vco6zm`,$$css:!0},neutral:{kjVXCG:`khameleonuxf9kk`,$$css:!0}},g={accent:{kjVXCG:`khameleonimx5ud`,$$css:!0},success:{kjVXCG:`khameleon1uro670`,$$css:!0},warning:{kjVXCG:`khameleon1wjzxuj`,$$css:!0},error:{kjVXCG:`khameleonjswp7v`,$$css:!0},neutral:{kjVXCG:`khameleonpi25hw`,$$css:!0}},u.displayName=`CircularProgress`,u.__docgenInfo={description:`A circular/radial progress indicator that shows completion as a ring.

In determinate mode, displays a known value as an arc fill.
In indeterminate mode, shows an animated spinning indicator.
Supports center content via children for labels, percentages, or icons.

@example
\`\`\`
<CircularProgress value={75} label="Upload progress" />
<CircularProgress value={75} label="Progress" max={100}>75%</CircularProgress>
<CircularProgress label="Loading..." />
\`\`\``,methods:[],displayName:`CircularProgress`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:`Ref forwarded to the root element`},value:{required:!1,tsType:{name:`number`},description:`Current value of the circular progress.
When omitted, the component renders an indeterminate spinning animation.`},max:{required:!1,tsType:{name:`number`},description:`Maximum value.
@default 100`,defaultValue:{value:`100`,computed:!1}},label:{required:!0,tsType:{name:`string`},description:`Accessible label for the progress indicator. Required for a11y.`},isLabelHidden:{required:!1,tsType:{name:`boolean`},description:`When true, the label is visually hidden but remains accessible to screen readers.
@default true`,defaultValue:{value:`true`,computed:!1}},children:{required:!1,tsType:{name:`ReactNode`},description:`Content displayed in the center of the ring.
Typically a percentage string, icon, or custom content.`},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:`Diameter of the circular progress.
- 'sm': 32px
- 'md': 48px
- 'lg': 64px
@default 'md'`,defaultValue:{value:`'md'`,computed:!1}},variant:{required:!1,tsType:{name:`CircularProgressVariantMap`},description:`Visual style variant mapped to semantic color tokens.
@default 'accent'`,defaultValue:{value:`'accent'`,computed:!1}},"data-testid":{required:!1,tsType:{name:`string`},description:`Test ID for testing utilities.`}},composes:[`Omit`]}})))()}var v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{_(),c(),v=s(),y={title:`Lab/CircularProgress`,component:u,tags:[`autodocs`],argTypes:{value:{control:{type:`range`,min:0,max:100,step:1},description:`Current value`},max:{control:`number`,description:`Maximum value`},label:{control:`text`,description:`Accessible label`},size:{control:`select`,options:[`sm`,`md`,`lg`],description:`Ring diameter`},variant:{control:`select`,options:[`accent`,`success`,`warning`,`error`,`neutral`],description:`Semantic color variant`},isLabelHidden:{control:`boolean`,description:`Visually hide the label`}}},b={args:{value:60,label:`Progress`}},x={args:{value:75,label:`Upload progress`,size:`lg`,children:`75%`}},S={render:()=>(0,v.jsxs)(`div`,{style:{display:`flex`,gap:`24px`,alignItems:`center`},children:[(0,v.jsx)(u,{value:60,size:`sm`,label:`Small`}),(0,v.jsx)(u,{value:60,size:`md`,label:`Medium`}),(0,v.jsx)(u,{value:60,size:`lg`,label:`Large`})]})},C={render:()=>(0,v.jsxs)(`div`,{style:{display:`flex`,gap:`24px`,alignItems:`center`},children:[(0,v.jsx)(u,{value:60,size:`sm`,label:`Small`,children:(0,v.jsx)(l,{type:`supporting`,style:{fontSize:8},children:`60%`})}),(0,v.jsx)(u,{value:60,size:`md`,label:`Medium`,children:(0,v.jsx)(l,{type:`supporting`,style:{fontSize:11},children:`60%`})}),(0,v.jsx)(u,{value:60,size:`lg`,label:`Large`,children:(0,v.jsx)(l,{type:`body`,children:`60%`})})]})},w={render:()=>(0,v.jsxs)(`div`,{style:{display:`flex`,gap:`24px`,alignItems:`center`},children:[(0,v.jsx)(u,{value:60,label:`Accent`,variant:`accent`}),(0,v.jsx)(u,{value:80,label:`Positive`,variant:`success`}),(0,v.jsx)(u,{value:50,label:`Warning`,variant:`warning`}),(0,v.jsx)(u,{value:92,label:`Negative`,variant:`error`}),(0,v.jsx)(u,{value:35,label:`Neutral`,variant:`neutral`})]})},T={args:{value:0,label:`Not started`}},E={args:{value:100,label:`Complete`,variant:`success`,size:`lg`,children:`100%`}},D={args:{label:`Loading...`}},O={render:()=>(0,v.jsxs)(`div`,{style:{display:`flex`,gap:`24px`,alignItems:`center`},children:[(0,v.jsx)(u,{size:`sm`,label:`Loading small`}),(0,v.jsx)(u,{size:`md`,label:`Loading medium`}),(0,v.jsx)(u,{size:`lg`,label:`Loading large`})]})},k={render:()=>(0,v.jsxs)(`div`,{style:{display:`flex`,gap:`24px`,alignItems:`center`},children:[(0,v.jsx)(u,{label:`Accent`,variant:`accent`}),(0,v.jsx)(u,{label:`Positive`,variant:`success`}),(0,v.jsx)(u,{label:`Warning`,variant:`warning`}),(0,v.jsx)(u,{label:`Negative`,variant:`error`})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    value: 60,
    label: 'Progress'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    value: 75,
    label: 'Upload progress',
    size: 'lg',
    children: '75%'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>
      <CircularProgress value={60} size="sm" label="Small" />
      <CircularProgress value={60} size="md" label="Medium" />
      <CircularProgress value={60} size="lg" label="Large" />
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>
      <CircularProgress value={60} size="sm" label="Small">
        <Text type="supporting" style={{
        fontSize: 8
      }}>
          60%
        </Text>
      </CircularProgress>
      <CircularProgress value={60} size="md" label="Medium">
        <Text type="supporting" style={{
        fontSize: 11
      }}>
          60%
        </Text>
      </CircularProgress>
      <CircularProgress value={60} size="lg" label="Large">
        <Text type="body">60%</Text>
      </CircularProgress>
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>
      <CircularProgress value={60} label="Accent" variant="accent" />
      <CircularProgress value={80} label="Positive" variant="success" />
      <CircularProgress value={50} label="Warning" variant="warning" />
      <CircularProgress value={92} label="Negative" variant="error" />
      <CircularProgress value={35} label="Neutral" variant="neutral" />
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    value: 0,
    label: 'Not started'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    value: 100,
    label: 'Complete',
    variant: 'success',
    size: 'lg',
    children: '100%'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Loading...'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>
      <CircularProgress size="sm" label="Loading small" />
      <CircularProgress size="md" label="Loading medium" />
      <CircularProgress size="lg" label="Loading large" />
    </div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>
      <CircularProgress label="Accent" variant="accent" />
      <CircularProgress label="Positive" variant="success" />
      <CircularProgress label="Warning" variant="warning" />
      <CircularProgress label="Negative" variant="error" />
    </div>
}`,...k.parameters?.docs?.source}}},A=[`Default`,`WithCenterLabel`,`Sizes`,`SizesWithLabels`,`Variants`,`Empty`,`Full`,`Indeterminate`,`IndeterminateSizes`,`IndeterminateVariants`]})))()}j();export{b as Default,T as Empty,E as Full,D as Indeterminate,O as IndeterminateSizes,k as IndeterminateVariants,S as Sizes,C as SizesWithLabels,w as Variants,x as WithCenterLabel,A as __namedExportsOrder,y as default};