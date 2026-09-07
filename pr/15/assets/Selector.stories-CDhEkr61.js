import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{i as r,n as i,r as a,t as o}from"./Selector-D7Gly4DE.js";import{n as s,t as c}from"./BellIcon-Bd5nOtNP.js";import{n as l,t as u}from"./CogIcon-OU-iUL1a.js";import{n as d,t as f}from"./UserIcon-DxfptEP-.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{p=t(),i(),r(),d(),l(),s(),m=n(),h={title:`Core/Selector`,component:o,tags:[`autodocs`],parameters:{layout:`centered`},decorators:[e=>(0,m.jsx)(`div`,{style:{width:250},children:(0,m.jsx)(e,{})})],argTypes:{label:{control:`text`,description:`Label text for the selector`},isLabelHidden:{control:`boolean`,description:`Whether to visually hide the label`},description:{control:`text`,description:`Description text displayed between label and selector`},options:{control:`object`,description:`Array of options to display. Can be strings, objects, dividers, or sections.`},value:{control:`text`,description:`The currently selected value`},placeholder:{control:`text`,description:`Placeholder text when no value is selected`},size:{control:`radio`,options:[`sm`,`md`,`lg`],description:`Size variant of the selector`},placement:{control:`select`,options:[`above`,`below`,`start`,`end`],description:`Explicit menu placement. Leave unset for selected-item overlay behavior.`},isDisabled:{control:`boolean`,description:`Whether the selector is disabled`},disabledMessage:{control:`text`,description:`Explains why the selector is disabled. With isDisabled, shows a tooltip on hover/keyboard focus and keeps the trigger focusable via aria-disabled (activation stays blocked). Use this instead of wrapping a disabled Selector in Tooltip.`},isOptional:{control:`boolean`,description:`Whether the field is optional`},isRequired:{control:`boolean`,description:`Whether the field is required`},renderOption:{description:`Optional render function for custom option rendering`,table:{type:{summary:`(option: SelectorOptionData) => ReactNode`}}},"data-testid":{control:`text`,description:`Test ID for testing frameworks`}}},g={render:e=>{let{value:t,onChange:n,changeAction:r,hasClear:i,...a}=e,[s,c]=(0,p.useState)(t??void 0);return(0,m.jsx)(o,{...a,label:e.label??`Fruit`,options:e.options??[`Apple`,`Banana`,`Orange`,`Mango`,`Pineapple`],value:s,onChange:e=>c(e)})},args:{placeholder:`Select a fruit...`}},_={render:e=>{let{value:t,onChange:n,changeAction:r,hasClear:i,...a}=e,[s,c]=(0,p.useState)(t??void 0);return(0,m.jsx)(o,{...a,label:`Fruit`,isLabelHidden:!0,options:[`Apple`,`Banana`,`Orange`,`Mango`,`Pineapple`],value:s,onChange:e=>c(e),placeholder:`Select a fruit...`})}},v={render:e=>{let{value:t,onChange:n,changeAction:r,hasClear:i,...a}=e,[s,c]=(0,p.useState)(t??void 0);return(0,m.jsx)(o,{...a,label:`Fruit`,description:`Choose your favorite fruit from the list`,options:[`Apple`,`Banana`,`Orange`,`Mango`,`Pineapple`],value:s,onChange:e=>c(e),placeholder:`Select a fruit...`})}},y={render:e=>{let{value:t,onChange:n,changeAction:r,hasClear:i,...a}=e,[s,c]=(0,p.useState)(t??void 0);return(0,m.jsx)(o,{...a,label:`Fruit`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`orange`,label:`Orange`,disabled:!0},{value:`mango`,label:`Mango`}],value:s,onChange:e=>c(e)})},args:{placeholder:`Select a fruit...`}},b={render:e=>{let{value:t,onChange:n,changeAction:r,hasClear:i,...a}=e,[s,l]=(0,p.useState)(t??void 0);return(0,m.jsx)(o,{...a,label:`Settings`,options:[{value:`profile`,label:`Profile`,icon:f},{value:`settings`,label:`Settings`,icon:u},{value:`notifications`,label:`Notifications`,icon:c}],value:s,onChange:e=>l(e)})},args:{placeholder:`Select an option...`}},x={render:e=>{let{value:t,onChange:n,changeAction:r,hasClear:i,...a}=e,[s,c]=(0,p.useState)(t??void 0);return(0,m.jsx)(o,{...a,label:`Fruit`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{type:`section`,title:`Citrus`,options:[{value:`orange`,label:`Orange`},{value:`lemon`,label:`Lemon`},{value:`lime`,label:`Lime`}]},{type:`section`,title:`Tropical`,options:[{value:`mango`,label:`Mango`},{value:`pineapple`,label:`Pineapple`}]}],value:s,onChange:e=>c(e)})},args:{placeholder:`Select a fruit...`}},S={render:e=>{let{value:t,onChange:n,changeAction:r,hasClear:i,...s}=e,[c,l]=(0,p.useState)(t??void 0),u=[{value:`user1`,label:`Alice Johnson`,email:`alice@example.com`},{value:`user2`,label:`Bob Smith`,email:`bob@example.com`},{value:`user3`,label:`Carol White`,email:`carol@example.com`}];return(0,m.jsx)(o,{...s,label:`User`,options:u,value:c,onChange:e=>l(e),placeholder:`Select a user...`,renderOption:e=>(0,m.jsx)(a,{icon:f,label:e.label,description:e.email})})}},C={render:()=>{let[e,t]=(0,p.useState)(),[n,r]=(0,p.useState)(),[i,a]=(0,p.useState)();return(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,width:250},children:[(0,m.jsx)(o,{label:`Small`,size:`sm`,options:[`Apple`,`Banana`,`Orange`],value:e,onChange:t,placeholder:`Small size (28px)`}),(0,m.jsx)(o,{label:`Medium`,size:`md`,options:[`Apple`,`Banana`,`Orange`],value:n,onChange:r,placeholder:`Medium size (32px)`}),(0,m.jsx)(o,{label:`Large`,size:`lg`,options:[`Apple`,`Banana`,`Orange`],value:i,onChange:a,placeholder:`Large size (36px)`})]})},decorators:[e=>(0,m.jsx)(e,{})]},w={render:()=>{let[e,t]=(0,p.useState)(),[n,r]=(0,p.useState)(`banana`),[i,a]=(0,p.useState)(`apple`);return(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,width:250},children:[(0,m.jsx)(o,{label:`Error status`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`}],value:e,onChange:t,placeholder:`Select a fruit...`,status:{type:`error`,message:`Please select a fruit`}}),(0,m.jsx)(o,{label:`Warning status`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`}],value:n,onChange:r,status:{type:`warning`,message:`Banana is out of season`}}),(0,m.jsx)(o,{label:`Success status`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`}],value:i,onChange:a,status:{type:`success`}})]})},decorators:[e=>(0,m.jsx)(e,{})]},T={render:()=>{let[e,t]=(0,p.useState)(),[n,r]=(0,p.useState)();return(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,width:250},children:[(0,m.jsx)(o,{label:`Optional field`,isOptional:!0,options:[`Apple`,`Banana`,`Orange`],value:e,onChange:t,placeholder:`Select a fruit...`}),(0,m.jsx)(o,{label:`Required field`,isRequired:!0,options:[`Apple`,`Banana`,`Orange`],value:n,onChange:r,placeholder:`Select a fruit...`})]})},decorators:[e=>(0,m.jsx)(e,{})]},E={args:{label:`Fruit`,options:[`Apple`,`Banana`,`Orange`],value:`Apple`,isDisabled:!0,placeholder:`Select a fruit...`}},D={args:{label:`Owner`,options:[`Alice`,`Bob`,`Carol`],isDisabled:!0,disabledMessage:`You need the Editor role to change this`,placeholder:`Select an owner...`}},O={render:e=>{let{value:t,onChange:n,changeAction:r,hasClear:i,...a}=e,[s,c]=(0,p.useState)(`Banana`);return(0,m.jsx)(o,{...a,label:`Fruit`,options:[`Apple`,`Banana`,`Orange`,`Mango`],value:s,onChange:e=>c(e)})}},k={render:()=>{let[e,t]=(0,p.useState)(),[n,r]=(0,p.useState)(`banana`),[i,a]=(0,p.useState)(),[s,c]=(0,p.useState)();return(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,width:`250px`},children:[(0,m.jsx)(o,{label:`Default`,options:[`Apple`,`Banana`,`Orange`],value:e,onChange:t,placeholder:`Select...`}),(0,m.jsx)(o,{label:`Pre-selected`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`}],value:n,onChange:r}),(0,m.jsx)(o,{label:`With disabled option`,options:[{value:`apple`,label:`Apple`,disabled:!0},{value:`banana`,label:`Banana`}],value:i,onChange:a,placeholder:`Select...`}),(0,m.jsx)(o,{label:`Disabled selector`,options:[`Apple`,`Banana`],value:s,onChange:c,isDisabled:!0,placeholder:`Select...`})]})},decorators:[e=>(0,m.jsx)(e,{})]},A={render:e=>{let{value:t,onChange:n,changeAction:r,hasClear:i,...a}=e,[s,c]=(0,p.useState)(`Banana`);return(0,m.jsx)(o,{...a,options:[`Apple`,`Banana`,`Cherry`,`Date`],value:s,onChange:e=>c(e),hasClear:!0})},args:{label:`Fruit`,placeholder:`Select a fruit...`}},j={render:e=>{let{value:t,onChange:n,changeAction:r,hasClear:i,...a}=e,[s,c]=(0,p.useState)(`Banana`);return(0,m.jsx)(o,{...a,options:[`Apple`,`Banana`,`Cherry`],value:s,onChange:e=>c(e),hasClear:!0})},args:{label:`Required fruit`,status:{type:`warning`,message:`Selection is recommended`}}},M={render:e=>{let{value:t,onChange:n,changeAction:r,hasClear:i,...a}=e,[s,c]=(0,p.useState)(t??`Banana`);return(0,m.jsx)(o,{...a,label:`Bottom toolbar selector`,options:[`Apple`,`Banana`,`Cherry`,`Date`],value:s,onChange:e=>c(e),placement:`above`})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      value: argsValue,
      onChange: _onChange,
      changeAction: _ca,
      hasClear: _hc,
      ...rest
    } = args;
    const [value, setValue] = useState(argsValue ?? undefined);
    return <Selector {...rest} label={args.label ?? 'Fruit'} options={args.options ?? ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple']} value={value} onChange={v => setValue(v)} />;
  },
  args: {
    placeholder: 'Select a fruit...'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      value: argsValue,
      onChange: _onChange,
      changeAction: _ca,
      hasClear: _hc,
      ...rest
    } = args;
    const [value, setValue] = useState(argsValue ?? undefined);
    return <Selector {...rest} label="Fruit" isLabelHidden options={['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple']} value={value} onChange={v => setValue(v)} placeholder="Select a fruit..." />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      value: argsValue,
      onChange: _onChange,
      changeAction: _ca,
      hasClear: _hc,
      ...rest
    } = args;
    const [value, setValue] = useState(argsValue ?? undefined);
    return <Selector {...rest} label="Fruit" description="Choose your favorite fruit from the list" options={['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple']} value={value} onChange={v => setValue(v)} placeholder="Select a fruit..." />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      value: argsValue,
      onChange: _onChange,
      changeAction: _ca,
      hasClear: _hc,
      ...rest
    } = args;
    const [value, setValue] = useState(argsValue ?? undefined);
    return <Selector {...rest} label="Fruit" options={[{
      value: 'apple',
      label: 'Apple'
    }, {
      value: 'banana',
      label: 'Banana'
    }, {
      value: 'orange',
      label: 'Orange',
      disabled: true
    }, {
      value: 'mango',
      label: 'Mango'
    }]} value={value} onChange={v => setValue(v)} />;
  },
  args: {
    placeholder: 'Select a fruit...'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      value: argsValue,
      onChange: _onChange,
      changeAction: _ca,
      hasClear: _hc,
      ...rest
    } = args;
    const [value, setValue] = useState(argsValue ?? undefined);
    return <Selector {...rest} label="Settings" options={[{
      value: 'profile',
      label: 'Profile',
      icon: UserIcon
    }, {
      value: 'settings',
      label: 'Settings',
      icon: CogIcon
    }, {
      value: 'notifications',
      label: 'Notifications',
      icon: BellIcon
    }]} value={value} onChange={v => setValue(v)} />;
  },
  args: {
    placeholder: 'Select an option...'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      value: argsValue,
      onChange: _onChange,
      changeAction: _ca,
      hasClear: _hc,
      ...rest
    } = args;
    const [value, setValue] = useState(argsValue ?? undefined);
    return <Selector {...rest} label="Fruit" options={[{
      value: 'apple',
      label: 'Apple'
    }, {
      value: 'banana',
      label: 'Banana'
    }, {
      type: 'section',
      title: 'Citrus',
      options: [{
        value: 'orange',
        label: 'Orange'
      }, {
        value: 'lemon',
        label: 'Lemon'
      }, {
        value: 'lime',
        label: 'Lime'
      }]
    }, {
      type: 'section',
      title: 'Tropical',
      options: [{
        value: 'mango',
        label: 'Mango'
      }, {
        value: 'pineapple',
        label: 'Pineapple'
      }]
    }]} value={value} onChange={v => setValue(v)} />;
  },
  args: {
    placeholder: 'Select a fruit...'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      value: argsValue,
      onChange: _onChange,
      changeAction: _ca,
      hasClear: _hc,
      ...rest
    } = args;
    const [value, setValue] = useState(argsValue ?? undefined);
    const users = [{
      value: 'user1',
      label: 'Alice Johnson',
      email: 'alice@example.com'
    }, {
      value: 'user2',
      label: 'Bob Smith',
      email: 'bob@example.com'
    }, {
      value: 'user3',
      label: 'Carol White',
      email: 'carol@example.com'
    }];
    return <Selector {...rest} label="User" options={users} value={value} onChange={v => setValue(v)} placeholder="Select a user..." renderOption={user => <SelectorOption icon={UserIcon} label={user.label} description={(user as (typeof users)[number]).email} />} />;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState<string | undefined>();
    const [value2, setValue2] = useState<string | undefined>();
    const [value3, setValue3] = useState<string | undefined>();
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      width: 250
    }}>
        <Selector label="Small" size="sm" options={['Apple', 'Banana', 'Orange']} value={value1} onChange={setValue1} placeholder="Small size (28px)" />
        <Selector label="Medium" size="md" options={['Apple', 'Banana', 'Orange']} value={value2} onChange={setValue2} placeholder="Medium size (32px)" />
        <Selector label="Large" size="lg" options={['Apple', 'Banana', 'Orange']} value={value3} onChange={setValue3} placeholder="Large size (36px)" />
      </div>;
  },
  decorators: [Story => <Story />]
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState<string | undefined>();
    const [value2, setValue2] = useState<string | undefined>('banana');
    const [value3, setValue3] = useState<string | undefined>('apple');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      width: 250
    }}>
        <Selector label="Error status" options={[{
        value: 'apple',
        label: 'Apple'
      }, {
        value: 'banana',
        label: 'Banana'
      }]} value={value1} onChange={setValue1} placeholder="Select a fruit..." status={{
        type: 'error',
        message: 'Please select a fruit'
      }} />
        <Selector label="Warning status" options={[{
        value: 'apple',
        label: 'Apple'
      }, {
        value: 'banana',
        label: 'Banana'
      }]} value={value2} onChange={setValue2} status={{
        type: 'warning',
        message: 'Banana is out of season'
      }} />
        <Selector label="Success status" options={[{
        value: 'apple',
        label: 'Apple'
      }, {
        value: 'banana',
        label: 'Banana'
      }]} value={value3} onChange={setValue3} status={{
        type: 'success'
      }} />
      </div>;
  },
  decorators: [Story => <Story />]
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState<string | undefined>();
    const [value2, setValue2] = useState<string | undefined>();
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      width: 250
    }}>
        <Selector label="Optional field" isOptional options={['Apple', 'Banana', 'Orange']} value={value1} onChange={setValue1} placeholder="Select a fruit..." />
        <Selector label="Required field" isRequired options={['Apple', 'Banana', 'Orange']} value={value2} onChange={setValue2} placeholder="Select a fruit..." />
      </div>;
  },
  decorators: [Story => <Story />]
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Fruit',
    options: ['Apple', 'Banana', 'Orange'],
    value: 'Apple',
    isDisabled: true,
    placeholder: 'Select a fruit...'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Owner',
    options: ['Alice', 'Bob', 'Carol'],
    isDisabled: true,
    disabledMessage: 'You need the Editor role to change this',
    placeholder: 'Select an owner...'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      value: _value,
      onChange: _onChange,
      changeAction: _ca,
      hasClear: _hc,
      ...rest
    } = args;
    const [value, setValue] = useState('Banana');
    return <Selector {...rest} label="Fruit" options={['Apple', 'Banana', 'Orange', 'Mango']} value={value} onChange={v => setValue(v)} />;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState<string | undefined>();
    const [value2, setValue2] = useState<string | undefined>('banana');
    const [value3, setValue3] = useState<string | undefined>();
    const [value4, setValue4] = useState<string | undefined>();
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      width: '250px'
    }}>
        <Selector label="Default" options={['Apple', 'Banana', 'Orange']} value={value1} onChange={setValue1} placeholder="Select..." />
        <Selector label="Pre-selected" options={[{
        value: 'apple',
        label: 'Apple'
      }, {
        value: 'banana',
        label: 'Banana'
      }]} value={value2} onChange={setValue2} />
        <Selector label="With disabled option" options={[{
        value: 'apple',
        label: 'Apple',
        disabled: true
      }, {
        value: 'banana',
        label: 'Banana'
      }]} value={value3} onChange={setValue3} placeholder="Select..." />
        <Selector label="Disabled selector" options={['Apple', 'Banana']} value={value4} onChange={setValue4} isDisabled placeholder="Select..." />
      </div>;
  },
  decorators: [Story => <Story />]
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      value: _value,
      onChange: _onChange,
      changeAction: _changeAction,
      hasClear: _hc,
      ...rest
    } = args;
    const [value, setValue] = useState<string | null>('Banana');
    return <Selector {...rest} options={['Apple', 'Banana', 'Cherry', 'Date']} value={value} onChange={v => setValue(v)} hasClear />;
  },
  args: {
    label: 'Fruit',
    placeholder: 'Select a fruit...'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      value: _value,
      onChange: _onChange,
      changeAction: _changeAction,
      hasClear: _hc,
      ...rest
    } = args;
    const [value, setValue] = useState<string | null>('Banana');
    return <Selector {...rest} options={['Apple', 'Banana', 'Cherry']} value={value} onChange={v => setValue(v)} hasClear />;
  },
  args: {
    label: 'Required fruit',
    status: {
      type: 'warning',
      message: 'Selection is recommended'
    }
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      value: argsValue,
      onChange: _onChange,
      changeAction: _changeAction,
      hasClear: _hc,
      ...rest
    } = args;
    const [value, setValue] = useState(argsValue ?? 'Banana');
    return <Selector {...rest} label="Bottom toolbar selector" options={['Apple', 'Banana', 'Cherry', 'Date']} value={value} onChange={v => setValue(v)} placement="above" />;
  }
}`,...M.parameters?.docs?.source}}},N=[`Default`,`HiddenLabel`,`WithDescription`,`WithObjects`,`WithIcons`,`WithSections`,`CustomRender`,`SizeVariants`,`WithStatus`,`OptionalRequired`,`Disabled`,`DisabledWithMessage`,`PreSelected`,`AllVariations`,`Clearable`,`ClearableWithStatus`,`PlacementAbove`]})))()}P();export{k as AllVariations,A as Clearable,j as ClearableWithStatus,S as CustomRender,g as Default,E as Disabled,D as DisabledWithMessage,_ as HiddenLabel,T as OptionalRequired,M as PlacementAbove,O as PreSelected,C as SizeVariants,v as WithDescription,b as WithIcons,y as WithObjects,x as WithSections,w as WithStatus,N as __namedExportsOrder,h as default};