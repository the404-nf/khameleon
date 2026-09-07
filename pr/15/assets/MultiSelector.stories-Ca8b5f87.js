import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./MultiSelector-CUcJ8tWo.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{a=t(),r(),o=n(),s={title:`Core/MultiSelector`,component:i,tags:[`autodocs`],parameters:{layout:`centered`},decorators:[e=>(0,o.jsx)(`div`,{style:{width:300},children:(0,o.jsx)(e,{})})],argTypes:{label:{control:`text`},isLabelHidden:{control:`boolean`},description:{control:`text`},placeholder:{control:`text`},size:{control:`radio`,options:[`sm`,`md`,`lg`]},triggerDisplay:{control:`radio`,options:[`count`,`labels`,`badges`]},isDisabled:{control:`boolean`},disabledMessage:{control:`text`},isOptional:{control:`boolean`},isRequired:{control:`boolean`},hasSelectAll:{control:`boolean`},hasSearch:{control:`boolean`}}},c={render:e=>{let[t,n]=(0,a.useState)([`Role`,`Created`]);return(0,o.jsx)(i,{...e,label:e.label??`Columns`,options:e.options??[`Name`,`Email`,`Role`,`Status`,`Created`],value:t,onChange:n})},args:{placeholder:`Select columns...`}},l={render:()=>{let[e,t]=(0,a.useState)([]);return(0,o.jsx)(i,{label:`Permissions`,options:[{type:`section`,title:`Read`,options:[{value:`read_posts`,label:`Read posts`},{value:`read_comments`,label:`Read comments`},{value:`read_users`,label:`Read users`}]},{type:`section`,title:`Write`,options:[{value:`write_posts`,label:`Write posts`},{value:`write_comments`,label:`Write comments`}]}],value:e,onChange:t,placeholder:`Select permissions...`})},decorators:[e=>(0,o.jsx)(e,{})]},u={render:()=>{let[e,t]=(0,a.useState)([]);return(0,o.jsx)(i,{label:`Columns`,options:[`Name`,`Email`,`Role`,`Status`,`Created`,`Updated`],value:e,onChange:t,hasSelectAll:!0,placeholder:`Select columns...`})},decorators:[e=>(0,o.jsx)(e,{})]},d={render:()=>{let[e,t]=(0,a.useState)([]);return(0,o.jsx)(i,{label:`Countries`,options:[`United States`,`United Kingdom`,`Canada`,`Australia`,`Germany`,`France`,`Japan`,`Brazil`,`India`,`Mexico`],value:e,onChange:t,hasSearch:!0,hasSelectAll:!0,placeholder:`Select countries...`})},decorators:[e=>(0,o.jsx)(e,{})]},f={render:()=>{let[e,t]=(0,a.useState)([`Name`,`Email`]),[n,r]=(0,a.useState)([`Name`,`Email`,`Role`]),[s,c]=(0,a.useState)([`Name`,`Email`,`Role`,`Status`,`Created`]);return(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,width:300},children:[(0,o.jsx)(i,{label:`Count (default)`,options:[`Name`,`Email`,`Role`,`Status`,`Created`],value:e,onChange:t,triggerDisplay:`count`}),(0,o.jsx)(i,{label:`Labels`,options:[`Name`,`Email`,`Role`,`Status`,`Created`],value:n,onChange:r,triggerDisplay:`labels`}),(0,o.jsx)(i,{label:`Badges`,options:[`Name`,`Email`,`Role`,`Status`,`Created`],value:s,onChange:c,triggerDisplay:`badges`,maxBadges:3})]})},decorators:[e=>(0,o.jsx)(e,{})]},p={render:()=>{let[e,t]=(0,a.useState)([`admin`]);return(0,o.jsx)(i,{label:`Roles`,options:[{value:`admin`,label:`Admin`,disabled:!0},{value:`editor`,label:`Editor`},{value:`viewer`,label:`Viewer`},{value:`guest`,label:`Guest`}],value:e,onChange:t,hasSelectAll:!0,placeholder:`Select roles...`})},decorators:[e=>(0,o.jsx)(e,{})]},m={render:()=>{let[e,t]=(0,a.useState)([]);return(0,o.jsx)(i,{label:`Columns`,options:[`Name`,`Email`,`Role`,`Status`,`Created`],value:e,onChange:t,isDisabled:!0,disabledMessage:`Select a table before choosing columns`,placeholder:`Select columns...`})},decorators:[e=>(0,o.jsx)(e,{})]},h={render:()=>{let[e,t]=(0,a.useState)([]),[n,r]=(0,a.useState)([`Email`]),[s,c]=(0,a.useState)([`Name`,`Email`]);return(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,width:300},children:[(0,o.jsx)(i,{label:`Error`,options:[`Name`,`Email`,`Role`],value:e,onChange:t,status:{type:`error`,message:`Please select at least one column`},placeholder:`Select...`}),(0,o.jsx)(i,{label:`Warning`,options:[`Name`,`Email`,`Role`],value:n,onChange:r,status:{type:`warning`,message:`Email column has issues`}}),(0,o.jsx)(i,{label:`Success`,options:[`Name`,`Email`,`Role`],value:s,onChange:c,status:{type:`success`}})]})},decorators:[e=>(0,o.jsx)(e,{})]},g={render:()=>{let[e,t]=(0,a.useState)([]),[n,r]=(0,a.useState)([]),[s,c]=(0,a.useState)([]);return(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,width:300},children:[(0,o.jsx)(i,{label:`Small`,size:`sm`,options:[`Name`,`Email`,`Role`],value:e,onChange:t,placeholder:`Small (28px)`}),(0,o.jsx)(i,{label:`Medium`,size:`md`,options:[`Name`,`Email`,`Role`],value:n,onChange:r,placeholder:`Medium (32px)`}),(0,o.jsx)(i,{label:`Large`,size:`lg`,options:[`Name`,`Email`,`Role`],value:s,onChange:c,placeholder:`Large (36px)`})]})},decorators:[e=>(0,o.jsx)(e,{})]},_={render:()=>{let[e,t]=(0,a.useState)([`name`,`email`]),[n,r]=(0,a.useState)([]);return(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,width:300},children:[(0,o.jsx)(i,{label:`Visible columns`,description:`Choose which columns to display in the table`,options:[{value:`name`,label:`Name`},{value:`email`,label:`Email`},{value:`role`,label:`Role`},{value:`status`,label:`Status`},{value:`created`,label:`Created at`}],value:e,onChange:t,hasSelectAll:!0,isRequired:!0,triggerDisplay:`labels`}),(0,o.jsx)(i,{label:`Status filter`,description:`Filter by status`,options:[`Active`,`Inactive`,`Pending`,`Archived`],value:n,onChange:r,isOptional:!0,triggerDisplay:`badges`,placeholder:`All statuses`})]})},decorators:[e=>(0,o.jsx)(e,{})]},v={render:()=>{let e=[{value:`name`,label:`Name`},{value:`email`,label:`Email`},{value:`role`,label:`Role`},{value:`status`,label:`Status`},{value:`created`,label:`Created`},{value:`updated`,label:`Updated`},{value:`actions`,label:`Actions`}],[t,n]=(0,a.useState)([`name`,`email`,`role`,`status`]);return(0,o.jsx)(i,{label:`Columns`,isLabelHidden:!0,options:e,value:t,onChange:n,hasSelectAll:!0,hasSearch:!0,triggerDisplay:`count`,placeholder:`Columns`})},decorators:[e=>(0,o.jsx)(e,{})]},y={render:e=>{let[t,n]=(0,a.useState)([`react`,`typescript`]);return(0,o.jsx)(i,{...e,options:[{value:`react`,label:`React`},{value:`typescript`,label:`TypeScript`},{value:`stylex`,label:`StyleX`},{value:`vitest`,label:`Vitest`}],value:t,onChange:n,hasClear:!0})},args:{label:`Technologies`,placeholder:`Select technologies...`}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string[]>(['Role', 'Created']);
    return <MultiSelector {...args} label={args.label ?? 'Columns'} options={args.options ?? ['Name', 'Email', 'Role', 'Status', 'Created']} value={value} onChange={setValue} />;
  },
  args: {
    placeholder: 'Select columns...'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <MultiSelector label="Permissions" options={[{
      type: 'section',
      title: 'Read',
      options: [{
        value: 'read_posts',
        label: 'Read posts'
      }, {
        value: 'read_comments',
        label: 'Read comments'
      }, {
        value: 'read_users',
        label: 'Read users'
      }]
    }, {
      type: 'section',
      title: 'Write',
      options: [{
        value: 'write_posts',
        label: 'Write posts'
      }, {
        value: 'write_comments',
        label: 'Write comments'
      }]
    }]} value={value} onChange={setValue} placeholder="Select permissions..." />;
  },
  decorators: [Story => <Story />]
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <MultiSelector label="Columns" options={['Name', 'Email', 'Role', 'Status', 'Created', 'Updated']} value={value} onChange={setValue} hasSelectAll placeholder="Select columns..." />;
  },
  decorators: [Story => <Story />]
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <MultiSelector label="Countries" options={['United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France', 'Japan', 'Brazil', 'India', 'Mexico']} value={value} onChange={setValue} hasSearch hasSelectAll placeholder="Select countries..." />;
  },
  decorators: [Story => <Story />]
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState<string[]>(['Name', 'Email']);
    const [value2, setValue2] = useState<string[]>(['Name', 'Email', 'Role']);
    const [value3, setValue3] = useState<string[]>(['Name', 'Email', 'Role', 'Status', 'Created']);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      width: 300
    }}>
        <MultiSelector label="Count (default)" options={['Name', 'Email', 'Role', 'Status', 'Created']} value={value1} onChange={setValue1} triggerDisplay="count" />
        <MultiSelector label="Labels" options={['Name', 'Email', 'Role', 'Status', 'Created']} value={value2} onChange={setValue2} triggerDisplay="labels" />
        <MultiSelector label="Badges" options={['Name', 'Email', 'Role', 'Status', 'Created']} value={value3} onChange={setValue3} triggerDisplay="badges" maxBadges={3} />
      </div>;
  },
  decorators: [Story => <Story />]
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>(['admin']);
    return <MultiSelector label="Roles" options={[{
      value: 'admin',
      label: 'Admin',
      disabled: true
    }, {
      value: 'editor',
      label: 'Editor'
    }, {
      value: 'viewer',
      label: 'Viewer'
    }, {
      value: 'guest',
      label: 'Guest'
    }]} value={value} onChange={setValue} hasSelectAll placeholder="Select roles..." />;
  },
  decorators: [Story => <Story />]
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <MultiSelector label="Columns" options={['Name', 'Email', 'Role', 'Status', 'Created']} value={value} onChange={setValue} isDisabled disabledMessage="Select a table before choosing columns" placeholder="Select columns..." />;
  },
  decorators: [Story => <Story />]
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState<string[]>([]);
    const [value2, setValue2] = useState<string[]>(['Email']);
    const [value3, setValue3] = useState<string[]>(['Name', 'Email']);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      width: 300
    }}>
        <MultiSelector label="Error" options={['Name', 'Email', 'Role']} value={value1} onChange={setValue1} status={{
        type: 'error',
        message: 'Please select at least one column'
      }} placeholder="Select..." />
        <MultiSelector label="Warning" options={['Name', 'Email', 'Role']} value={value2} onChange={setValue2} status={{
        type: 'warning',
        message: 'Email column has issues'
      }} />
        <MultiSelector label="Success" options={['Name', 'Email', 'Role']} value={value3} onChange={setValue3} status={{
        type: 'success'
      }} />
      </div>;
  },
  decorators: [Story => <Story />]
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState<string[]>([]);
    const [value2, setValue2] = useState<string[]>([]);
    const [value3, setValue3] = useState<string[]>([]);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      width: 300
    }}>
        <MultiSelector label="Small" size="sm" options={['Name', 'Email', 'Role']} value={value1} onChange={setValue1} placeholder="Small (28px)" />
        <MultiSelector label="Medium" size="md" options={['Name', 'Email', 'Role']} value={value2} onChange={setValue2} placeholder="Medium (32px)" />
        <MultiSelector label="Large" size="lg" options={['Name', 'Email', 'Role']} value={value3} onChange={setValue3} placeholder="Large (36px)" />
      </div>;
  },
  decorators: [Story => <Story />]
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [columns, setColumns] = useState<string[]>(['name', 'email']);
    const [filters, setFilters] = useState<string[]>([]);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      width: 300
    }}>
        <MultiSelector label="Visible columns" description="Choose which columns to display in the table" options={[{
        value: 'name',
        label: 'Name'
      }, {
        value: 'email',
        label: 'Email'
      }, {
        value: 'role',
        label: 'Role'
      }, {
        value: 'status',
        label: 'Status'
      }, {
        value: 'created',
        label: 'Created at'
      }]} value={columns} onChange={setColumns} hasSelectAll isRequired triggerDisplay="labels" />
        <MultiSelector label="Status filter" description="Filter by status" options={['Active', 'Inactive', 'Pending', 'Archived']} value={filters} onChange={setFilters} isOptional triggerDisplay="badges" placeholder="All statuses" />
      </div>;
  },
  decorators: [Story => <Story />]
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const allColumns = [{
      value: 'name',
      label: 'Name'
    }, {
      value: 'email',
      label: 'Email'
    }, {
      value: 'role',
      label: 'Role'
    }, {
      value: 'status',
      label: 'Status'
    }, {
      value: 'created',
      label: 'Created'
    }, {
      value: 'updated',
      label: 'Updated'
    }, {
      value: 'actions',
      label: 'Actions'
    }];
    const [visible, setVisible] = useState<string[]>(['name', 'email', 'role', 'status']);
    return <MultiSelector label="Columns" isLabelHidden options={allColumns} value={visible} onChange={setVisible} hasSelectAll hasSearch triggerDisplay="count" placeholder="Columns" />;
  },
  decorators: [Story => <Story />]
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string[]>(['react', 'typescript']);
    return <MultiSelector {...args} options={[{
      value: 'react',
      label: 'React'
    }, {
      value: 'typescript',
      label: 'TypeScript'
    }, {
      value: 'stylex',
      label: 'StyleX'
    }, {
      value: 'vitest',
      label: 'Vitest'
    }]} value={value} onChange={setValue} hasClear />;
  },
  args: {
    label: 'Technologies',
    placeholder: 'Select technologies...'
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Sections`,`SelectAll`,`Searchable`,`TriggerModes`,`DisabledItems`,`DisabledWithMessage`,`Status`,`Sizes`,`FormComposition`,`ColumnVisibility`,`Clearable`]})))()}x();export{y as Clearable,v as ColumnVisibility,c as Default,p as DisabledItems,m as DisabledWithMessage,_ as FormComposition,d as Searchable,l as Sections,u as SelectAll,g as Sizes,h as Status,f as TriggerModes,b as __namedExportsOrder,s as default};