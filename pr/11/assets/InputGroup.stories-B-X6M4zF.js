import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./stylex-Dft6gtPK.js";import{n as i}from"./mergeProps-JRyAvMxc.js";import{n as a,t as o}from"./themeProps-DRQoVAIO.js";import{n as s,t as c}from"./InputGroupContext-BgdGxw_5.js";import{t as l}from"./jsx-runtime-DeHZSEgm.js";import{n as u,r as ee,t as te}from"./SizeContext-Dp2usO2O.js";import{n as d,t as f}from"./Icon-D9gPeCUm.js";import{n as p,t as ne}from"./Field-Cedy3QPa.js";import{n as m,t as h}from"./Selector-DAUIxR0-.js";import{n as g,t as _}from"./DateInput-DfG7BtMf.js";import{n as re,t as ie}from"./MultiSelector-CSUk3wRz.js";import{n as v,t as y}from"./TextInput-C6huvyEM.js";import{n as b,t as x}from"./TimeInput-BpcWFRSX.js";import{n as S,t as C}from"./NumberInput-D0yGjE5n.js";import{n as ae,t as w}from"./Typeahead-Cmf54mtN.js";function T({children:e,label:t,isLabelHidden:r=!1,description:o,isDisabled:s=!1,isOptional:l=!1,isRequired:u=!1,size:d,status:f,labelTooltip:p,xstyle:m,className:h,style:g,ref:_,"data-testid":re,...ie}){let v=ee(d,`md`),y=(0,E.useId)(),b=(0,E.useId)(),x=(0,E.useId)(),S=(0,E.useId)(),C=[o?x:null,f?.message?S:null].filter(Boolean).join(` `)||void 0,ae=(0,E.useMemo)(()=>({isInGroup:!0,labelID:b,describedByIDs:C}),[b,C]);return(0,D.jsx)(c,{value:ae,children:(0,D.jsx)(te,{value:v,children:(0,D.jsx)(ne,{label:t,isLabelHidden:r,description:o,inputID:y,labelID:b,descriptionID:o?x:void 0,isGroupLabel:!0,isOptional:l,isRequired:u,isDisabled:s,status:f?{type:f.type,message:f.message,messageID:f.message?S:void 0}:void 0,statusVariant:`detached`,labelTooltip:p,children:(0,D.jsx)(`div`,{ref:_,"data-testid":re,...ie,role:`group`,"aria-labelledby":b,"aria-describedby":C,...i(a(`input-group`,{size:v,status:f?.type??null}),n(O.group,oe[v],s&&O.disabled,m),h,g),children:e})})})})}var E,D,O,oe;function se(){return(se=e((()=>{E=t(),r(),p(),u(),s(),o(),D=l(),O={group:{k1xSpc:`khameleon3nfvp2`,kGNEyG:`khameleon1qjc9v5`,kWkggS:`khameleonjbqb8w`,$$css:!0},disabled:{kkrTdU:`khameleon1h6gzvc`,kSiTet:`khameleonbyyjgo`,$$css:!0}},oe={sm:{kZKoxP:`khameleon6k0iem`,$$css:!0},md:{kZKoxP:`khameleon1ueg155`,$$css:!0},lg:{kZKoxP:`khameleonssyfek`,$$css:!0}},T.displayName=`InputGroup`,T.__docgenInfo={description:`Groups an input with prefix/suffix addons in a visually connected
container with shared border and focus ring.

@example
\`\`\`
<InputGroup label="Price">
  <InputGroupText>$</InputGroupText>
  <TextInput label="Price" isLabelHidden value={price} onChange={setPrice} />
</InputGroup>
\`\`\``,methods:[],displayName:`InputGroup`,props:{ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:`Ref forwarded to the group container element`},children:{required:!0,tsType:{name:`ReactNode`},description:`Input and addon children.`},label:{required:!0,tsType:{name:`string`},description:`Label text for the group (required for accessibility).`},isLabelHidden:{required:!1,tsType:{name:`boolean`},description:`Whether to visually hide the label.
@default false`,defaultValue:{value:`false`,computed:!1}},description:{required:!1,tsType:{name:`string`},description:`Description text displayed between the label and input group.`},isDisabled:{required:!1,tsType:{name:`boolean`},description:`Whether the group is disabled.
@default false`,defaultValue:{value:`false`,computed:!1}},isOptional:{required:!1,tsType:{name:`boolean`},description:`Whether the field is optional.
@default false`,defaultValue:{value:`false`,computed:!1}},isRequired:{required:!1,tsType:{name:`boolean`},description:`Whether the field is required.
@default false`,defaultValue:{value:`false`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:`Default size for inputs in the group.
@default 'md'`},status:{required:!1,tsType:{name:`InputStatus`},description:`Status indicator applied to the group border.`},labelTooltip:{required:!1,tsType:{name:`string`},description:`Tooltip text at the end of the label.`},"data-testid":{required:!1,tsType:{name:`string`},description:`Test ID for testing frameworks.`}},composes:[`Omit`]}})))()}function k({ref:e,children:t,xstyle:r,className:o,style:s,...c}){return(0,ce.jsx)(`div`,{ref:e,...c,...i(a(`input-group-text`),n(A.text,r),o,s),children:t})}var ce,A;function j(){return(j=e((()=>{t(),r(),o(),ce=l(),A={text:{k1xSpc:`khameleon78zum5`,kGNEyG:`khameleon6s0dn4`,kg3NbH:`khameleonf314gf`,kWkggS:`khameleonwmxj5m`,kMv6JI:`khameleon9ynric`,kGuDYH:`khameleonjm74w1`,kLWn49:`khameleonw6l6zx`,kMwMTN:`khameleonv1l7n4`,khDVqt:`khameleonuxw1ft`,kmuXW:`khameleon2lah0s`,kMzoRj:`khameleon1litavf`,ksu8eU:`khameleon1y0btm7`,kVAM5u:`khameleonvy26l8`,keTefX:`khameleond10s4z khameleon1pwwqoy`,krdFHd:`khameleon15mokao khameleon8eehn2`,kVL7Gh:`khameleonbiv7yw khameleon1xrp5p4`,kfmiAY:`khameleon1ga7v0g khameleon11xp8u1`,kT0f0o:`khameleon16uus16 khameleon747jw7`,$$css:!0}},k.displayName=`InputGroupText`,k.__docgenInfo={description:`A prefix or suffix text element for use inside InputGroup.

@example
\`\`\`
<InputGroup label="URL">
  <InputGroupText>https://</InputGroupText>
  <TextInput label="URL" isLabelHidden value={url} onChange={setUrl} />
</InputGroup>
\`\`\``,methods:[],displayName:`InputGroupText`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:`Content to render in the text slot.
Can be text or an icon.`}},composes:[`Omit`]}})))()}var M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,le;function ue(){return(ue=e((()=>{M=t(),se(),j(),v(),S(),b(),g(),ae(),m(),re(),d(),N=l(),P=[{id:`1`,label:`Apple`},{id:`2`,label:`Banana`},{id:`3`,label:`Cherry`},{id:`4`,label:`Date`},{id:`5`,label:`Elderberry`},{id:`6`,label:`Fig`},{id:`7`,label:`Grape`}],F={search:e=>P.filter(t=>t.label.toLowerCase().includes(e.toLowerCase())),bootstrap:()=>P.slice(0,5)},I={title:`Core/InputGroup`,component:T,tags:[`autodocs`],argTypes:{label:{control:`text`,description:`Label text (required)`},isLabelHidden:{control:`boolean`,description:`Visually hide the label`},description:{control:`text`,description:`Description text`},isDisabled:{control:`boolean`,description:`Disable the group`},size:{control:`radio`,options:[`sm`,`md`,`lg`],description:`Input size`}}},L=[`Design Systems`,`Infrastructure`,`Product`],R={render:e=>{let[t,n]=(0,M.useState)(``);return(0,N.jsxs)(T,{...e,children:[(0,N.jsx)(k,{children:`$`}),(0,N.jsx)(y,{label:`Amount`,isLabelHidden:!0,value:t,onChange:n,placeholder:`0.00`})]})},args:{label:`Price`}},z={render:e=>{let[t,n]=(0,M.useState)(``);return(0,N.jsxs)(T,{...e,children:[(0,N.jsx)(y,{label:`Weight`,isLabelHidden:!0,value:t,onChange:n,placeholder:`0`}),(0,N.jsx)(k,{children:`kg`})]})},args:{label:`Weight`}},B={render:e=>{let[t,n]=(0,M.useState)(``);return(0,N.jsxs)(T,{...e,children:[(0,N.jsx)(k,{children:`https://`}),(0,N.jsx)(y,{label:`URL`,isLabelHidden:!0,value:t,onChange:n,placeholder:`example`}),(0,N.jsx)(k,{children:`.com`})]})},args:{label:`Website`}},V={render:e=>{let[t,n]=(0,M.useState)(``);return(0,N.jsxs)(T,{...e,children:[(0,N.jsx)(k,{children:(0,N.jsx)(f,{icon:`search`,size:`sm`,color:`secondary`})}),(0,N.jsx)(y,{label:`Search`,isLabelHidden:!0,value:t,onChange:n,placeholder:`Search...`})]})},args:{label:`Search`,isLabelHidden:!0}},H={render:e=>{let[t,n]=(0,M.useState)(null);return(0,N.jsxs)(T,{...e,children:[(0,N.jsx)(k,{children:`Fruit`}),(0,N.jsx)(w,{label:`Selection`,isLabelHidden:!0,searchSource:F,value:t,onChange:n,placeholder:`Search fruits...`,hasEntriesOnFocus:!0})]})},args:{label:`Favorite fruit`,description:`Select one fruit from the list`}},U={render:e=>{let[t,n]=(0,M.useState)(void 0);return(0,N.jsxs)(T,{...e,children:[(0,N.jsx)(k,{children:`$`}),(0,N.jsx)(C,{label:`Amount`,isLabelHidden:!0,value:t,onChange:n,placeholder:`0.00`})]})},args:{label:`Budget`}},W={render:e=>{let[t,n]=(0,M.useState)(`09:00`);return(0,N.jsxs)(T,{...e,children:[(0,N.jsx)(k,{children:`Starts`}),(0,N.jsx)(x,{label:`Start time`,isLabelHidden:!0,value:t,onChange:n,hourFormat:`24h`,placeholder:`09:00`})]})},args:{label:`Schedule`,description:`Use local time`}},G={render:e=>{let[t,n]=(0,M.useState)(void 0);return(0,N.jsxs)(T,{...e,children:[(0,N.jsx)(k,{children:`Due`}),(0,N.jsx)(_,{label:`Date`,isLabelHidden:!0,value:t,onChange:n,placeholder:`Select date`})]})},args:{label:`Deadline`,description:`Pick the due date`}},K={render:e=>{let[t,n]=(0,M.useState)(void 0);return(0,N.jsxs)(T,{...e,children:[(0,N.jsx)(k,{children:`Team`}),(0,N.jsx)(h,{label:`Owner`,isLabelHidden:!0,options:L,value:t,onChange:n,placeholder:`Choose owner`})]})},args:{label:`Default owner`}},q={render:e=>{let[t,n]=(0,M.useState)([]);return(0,N.jsxs)(T,{...e,children:[(0,N.jsx)(k,{children:`Teams`}),(0,N.jsx)(ie,{label:`Owners`,isLabelHidden:!0,options:L,value:t,onChange:n,placeholder:`Choose owners`})]})},args:{label:`Default owners`,description:`Select one or more teams`}},J={render:e=>{let[t,n]=(0,M.useState)(``);return(0,N.jsxs)(T,{...e,children:[(0,N.jsx)(k,{children:`@`}),(0,N.jsx)(y,{label:`Username`,isLabelHidden:!0,value:t,onChange:n,placeholder:`username`})]})},args:{label:`Username`,description:`Your public display name`}},Y={render:e=>{let[t,n]=(0,M.useState)(``);return(0,N.jsxs)(T,{...e,children:[(0,N.jsx)(k,{children:`$`}),(0,N.jsx)(y,{label:`Amount`,isLabelHidden:!0,value:t,onChange:n,placeholder:`0.00`})]})},args:{label:`Price`,status:{type:`error`,message:`Price is required`}}},X={render:e=>{let[t,n]=(0,M.useState)(``);return(0,N.jsxs)(T,{...e,children:[(0,N.jsx)(k,{children:`$`}),(0,N.jsx)(y,{label:`Amount`,isLabelHidden:!0,value:t,onChange:n,placeholder:`0.00`})]})},args:{label:`Price`,size:`sm`}},Z={render:e=>{let[t,n]=(0,M.useState)(``);return(0,N.jsx)(`div`,{style:{maxWidth:500},children:(0,N.jsxs)(T,{...e,children:[(0,N.jsx)(k,{children:`https://`}),(0,N.jsx)(y,{label:`URL`,isLabelHidden:!0,value:t,onChange:n,placeholder:`example.com`})]})})},args:{label:`Website URL`}},Q={render:e=>{let[t,n]=(0,M.useState)(``),[r,i]=(0,M.useState)(``);return(0,N.jsxs)(T,{...e,children:[(0,N.jsx)(y,{label:`Address`,isLabelHidden:!0,value:t,onChange:n,placeholder:`Address`}),(0,N.jsx)(k,{children:`@`}),(0,N.jsx)(y,{label:`Domain`,isLabelHidden:!0,value:r,onChange:i,placeholder:`Domain`})]})},args:{label:`Email`}},$={render:()=>{let[e,t]=(0,M.useState)(``),[n,r]=(0,M.useState)(``),[i,a]=(0,M.useState)(``),[o,s]=(0,M.useState)(``),[c,l]=(0,M.useState)(null),[u,ee]=(0,M.useState)(void 0);return(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,maxWidth:`400px`},children:[(0,N.jsxs)(T,{label:`Price`,children:[(0,N.jsx)(k,{children:`$`}),(0,N.jsx)(y,{label:`Amount`,isLabelHidden:!0,value:e,onChange:t,placeholder:`0.00`})]}),(0,N.jsxs)(T,{label:`Website`,children:[(0,N.jsx)(k,{children:`https://`}),(0,N.jsx)(y,{label:`URL`,isLabelHidden:!0,value:n,onChange:r,placeholder:`example`}),(0,N.jsx)(k,{children:`.com`})]}),(0,N.jsxs)(T,{label:`Favorite fruit`,children:[(0,N.jsx)(k,{children:`Fruit`}),(0,N.jsx)(w,{label:`Selection`,isLabelHidden:!0,searchSource:F,value:c,onChange:l,placeholder:`Search fruits...`,hasEntriesOnFocus:!0})]}),(0,N.jsxs)(T,{label:`Weight`,children:[(0,N.jsx)(y,{label:`Weight`,isLabelHidden:!0,value:i,onChange:a,placeholder:`0`}),(0,N.jsx)(k,{children:`kg`})]}),(0,N.jsxs)(T,{label:`Price`,status:{type:`error`,message:`Price is required`},children:[(0,N.jsx)(k,{children:`$`}),(0,N.jsx)(y,{label:`Amount`,isLabelHidden:!0,value:o,onChange:s,placeholder:`0.00`})]}),(0,N.jsxs)(T,{label:`Default owner`,children:[(0,N.jsx)(k,{children:`Team`}),(0,N.jsx)(h,{label:`Owner`,isLabelHidden:!0,options:L,value:u,onChange:ee,placeholder:`Choose owner`})]})]})}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <InputGroup {...args}>
        <InputGroupText>$</InputGroupText>
        <TextInput label="Amount" isLabelHidden value={value} onChange={setValue} placeholder="0.00" />
      </InputGroup>;
  },
  args: {
    label: 'Price'
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <InputGroup {...args}>
        <TextInput label="Weight" isLabelHidden value={value} onChange={setValue} placeholder="0" />
        <InputGroupText>kg</InputGroupText>
      </InputGroup>;
  },
  args: {
    label: 'Weight'
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <InputGroup {...args}>
        <InputGroupText>https://</InputGroupText>
        <TextInput label="URL" isLabelHidden value={value} onChange={setValue} placeholder="example" />
        <InputGroupText>.com</InputGroupText>
      </InputGroup>;
  },
  args: {
    label: 'Website'
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <InputGroup {...args}>
        <InputGroupText>
          <Icon icon="search" size="sm" color="secondary" />
        </InputGroupText>
        <TextInput label="Search" isLabelHidden value={value} onChange={setValue} placeholder="Search..." />
      </InputGroup>;
  },
  args: {
    label: 'Search',
    isLabelHidden: true
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<SearchableItem | null>(null);
    return <InputGroup {...args}>
        <InputGroupText>Fruit</InputGroupText>
        <Typeahead label="Selection" isLabelHidden searchSource={fruitSource} value={value} onChange={setValue} placeholder="Search fruits..." hasEntriesOnFocus />
      </InputGroup>;
  },
  args: {
    label: 'Favorite fruit',
    description: 'Select one fruit from the list'
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<number | undefined>(undefined);
    return <InputGroup {...args}>
        <InputGroupText>$</InputGroupText>
        <NumberInput label="Amount" isLabelHidden value={value} onChange={setValue} placeholder="0.00" />
      </InputGroup>;
  },
  args: {
    label: 'Budget'
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISOTimeString | undefined>('09:00' as ISOTimeString);
    return <InputGroup {...args}>
        <InputGroupText>Starts</InputGroupText>
        <TimeInput label="Start time" isLabelHidden value={value} onChange={setValue} hourFormat="24h" placeholder="09:00" />
      </InputGroup>;
  },
  args: {
    label: 'Schedule',
    description: 'Use local time'
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateString | undefined>(undefined);
    return <InputGroup {...args}>
        <InputGroupText>Due</InputGroupText>
        <DateInput label="Date" isLabelHidden value={value} onChange={setValue} placeholder="Select date" />
      </InputGroup>;
  },
  args: {
    label: 'Deadline',
    description: 'Pick the due date'
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | undefined>(undefined);
    return <InputGroup {...args}>
        <InputGroupText>Team</InputGroupText>
        <Selector label="Owner" isLabelHidden options={TEAM_OPTIONS} value={value} onChange={setValue} placeholder="Choose owner" />
      </InputGroup>;
  },
  args: {
    label: 'Default owner'
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string[]>([]);
    return <InputGroup {...args}>
        <InputGroupText>Teams</InputGroupText>
        <MultiSelector label="Owners" isLabelHidden options={TEAM_OPTIONS} value={value} onChange={setValue} placeholder="Choose owners" />
      </InputGroup>;
  },
  args: {
    label: 'Default owners',
    description: 'Select one or more teams'
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <InputGroup {...args}>
        <InputGroupText>@</InputGroupText>
        <TextInput label="Username" isLabelHidden value={value} onChange={setValue} placeholder="username" />
      </InputGroup>;
  },
  args: {
    label: 'Username',
    description: 'Your public display name'
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <InputGroup {...args}>
        <InputGroupText>$</InputGroupText>
        <TextInput label="Amount" isLabelHidden value={value} onChange={setValue} placeholder="0.00" />
      </InputGroup>;
  },
  args: {
    label: 'Price',
    status: {
      type: 'error',
      message: 'Price is required'
    }
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <InputGroup {...args}>
        <InputGroupText>$</InputGroupText>
        <TextInput label="Amount" isLabelHidden value={value} onChange={setValue} placeholder="0.00" />
      </InputGroup>;
  },
  args: {
    label: 'Price',
    size: 'sm'
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <div style={{
      maxWidth: 500
    }}>
        <InputGroup {...args}>
          <InputGroupText>https://</InputGroupText>
          <TextInput label="URL" isLabelHidden value={value} onChange={setValue} placeholder="example.com" />
        </InputGroup>
      </div>;
  },
  args: {
    label: 'Website URL'
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [left, setLeft] = useState('');
    const [right, setRight] = useState('');
    return <InputGroup {...args}>
        <TextInput label="Address" isLabelHidden value={left} onChange={setLeft} placeholder="Address" />
        <InputGroupText>@</InputGroupText>
        <TextInput label="Domain" isLabelHidden value={right} onChange={setRight} placeholder="Domain" />
      </InputGroup>;
  },
  args: {
    label: 'Email'
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [v1, setV1] = useState('');
    const [v2, setV2] = useState('');
    const [v3, setV3] = useState('');
    const [v4, setV4] = useState('');
    const [v5, setV5] = useState<SearchableItem | null>(null);
    const [v6, setV6] = useState<string | undefined>(undefined);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '400px'
    }}>
        <InputGroup label="Price">
          <InputGroupText>$</InputGroupText>
          <TextInput label="Amount" isLabelHidden value={v1} onChange={setV1} placeholder="0.00" />
        </InputGroup>
        <InputGroup label="Website">
          <InputGroupText>https://</InputGroupText>
          <TextInput label="URL" isLabelHidden value={v2} onChange={setV2} placeholder="example" />
          <InputGroupText>.com</InputGroupText>
        </InputGroup>
        <InputGroup label="Favorite fruit">
          <InputGroupText>Fruit</InputGroupText>
          <Typeahead label="Selection" isLabelHidden searchSource={fruitSource} value={v5} onChange={setV5} placeholder="Search fruits..." hasEntriesOnFocus />
        </InputGroup>
        <InputGroup label="Weight">
          <TextInput label="Weight" isLabelHidden value={v3} onChange={setV3} placeholder="0" />
          <InputGroupText>kg</InputGroupText>
        </InputGroup>
        <InputGroup label="Price" status={{
        type: 'error',
        message: 'Price is required'
      }}>
          <InputGroupText>$</InputGroupText>
          <TextInput label="Amount" isLabelHidden value={v4} onChange={setV4} placeholder="0.00" />
        </InputGroup>
        <InputGroup label="Default owner">
          <InputGroupText>Team</InputGroupText>
          <Selector label="Owner" isLabelHidden options={TEAM_OPTIONS} value={v6} onChange={setV6} placeholder="Choose owner" />
        </InputGroup>
      </div>;
  }
}`,...$.parameters?.docs?.source}}},le=[`WithPrefix`,`WithSuffix`,`WithPrefixAndSuffix`,`WithIconPrefix`,`WithTypeahead`,`WithNumberInput`,`WithTimeInput`,`WithDateInput`,`WithSelector`,`WithMultiSelector`,`WithDescription`,`WithErrorStatus`,`SmallSize`,`FullWidth`,`TwoInputs`,`AllVariations`]})))()}ue();export{$ as AllVariations,Z as FullWidth,X as SmallSize,Q as TwoInputs,G as WithDateInput,J as WithDescription,Y as WithErrorStatus,V as WithIconPrefix,q as WithMultiSelector,U as WithNumberInput,R as WithPrefix,B as WithPrefixAndSuffix,K as WithSelector,z as WithSuffix,W as WithTimeInput,H as WithTypeahead,le as __namedExportsOrder,I as default};