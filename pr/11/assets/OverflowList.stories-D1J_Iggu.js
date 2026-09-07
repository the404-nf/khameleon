import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Button-CZDOH4n-.js";import{n as a,t as o}from"./Badge-DN3od1Tr.js";import{n as s,t as c}from"./OverflowList-ChG3h23a.js";import{n as l,t as u}from"./TextInput-C6huvyEM.js";import{n as d,t as f}from"./DropdownMenu-Bk8JDQrJ.js";var p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{p=t(),s(),r(),a(),d(),l(),m=n(),h={title:`Core/OverflowList`,component:c,tags:[`autodocs`],argTypes:{gap:{control:{type:`number`,min:0,max:10},description:`Gap between items as a spacing token step (0, 0.5, 1, 1.5, 2, 3, 4, 5, 6, 8, 10)`},minVisibleItems:{control:{type:`number`,min:0,max:10},description:`Minimum number of items to always show`},collapseFrom:{control:`select`,options:[`start`,`end`],description:`Which end to collapse items from`}}},g={render:()=>(0,m.jsx)(`div`,{style:{maxWidth:400,border:`1px dashed #ccc`,padding:8},children:(0,m.jsxs)(c,{gap:2,overflowRenderer:e=>(0,m.jsx)(i,{label:`+${e.length} more`,variant:`ghost`,size:`sm`}),children:[(0,m.jsx)(i,{label:`Edit`,size:`sm`}),(0,m.jsx)(i,{label:`Duplicate`,size:`sm`}),(0,m.jsx)(i,{label:`Share`,size:`sm`}),(0,m.jsx)(i,{label:`Archive`,size:`sm`}),(0,m.jsx)(i,{label:`Delete`,size:`sm`})]})})},_={render:()=>(0,m.jsx)(`div`,{style:{resize:`horizontal`,overflow:`hidden`,border:`1px dashed #ccc`,padding:8,width:500,minWidth:100,maxWidth:`100%`},children:(0,m.jsxs)(c,{gap:2,overflowRenderer:e=>(0,m.jsx)(i,{label:`+${e.length} more`,variant:`ghost`,size:`sm`}),children:[(0,m.jsx)(i,{label:`Dashboard`,size:`sm`}),(0,m.jsx)(i,{label:`Analytics`,size:`sm`}),(0,m.jsx)(i,{label:`Reports`,size:`sm`}),(0,m.jsx)(i,{label:`Settings`,size:`sm`}),(0,m.jsx)(i,{label:`Users`,size:`sm`}),(0,m.jsx)(i,{label:`Billing`,size:`sm`}),(0,m.jsx)(i,{label:`Integrations`,size:`sm`})]})})},v={render:()=>(0,m.jsx)(`div`,{style:{maxWidth:600,border:`1px dashed #ccc`,padding:8},children:(0,m.jsxs)(c,{gap:2,overflowRenderer:e=>(0,m.jsx)(i,{label:`+${e.length} more`,variant:`ghost`,size:`sm`}),children:[(0,m.jsx)(i,{label:`Edit`,size:`sm`}),(0,m.jsx)(i,{label:`Save`,size:`sm`})]})})},y={render:()=>(0,m.jsx)(`div`,{style:{resize:`horizontal`,overflow:`hidden`,border:`1px dashed #ccc`,padding:8,width:300,minWidth:80},children:(0,m.jsxs)(c,{gap:1,overflowRenderer:e=>(0,m.jsx)(o,{variant:`neutral`,label:`+${e.length}`}),children:[(0,m.jsx)(o,{variant:`info`,label:`React`}),(0,m.jsx)(o,{variant:`success`,label:`TypeScript`}),(0,m.jsx)(o,{variant:`warning`,label:`StyleX`}),(0,m.jsx)(o,{variant:`neutral`,label:`Storybook`}),(0,m.jsx)(o,{variant:`error`,label:`Vitest`})]})})},b={render:()=>(0,m.jsx)(`div`,{style:{maxWidth:300,border:`1px dashed #ccc`,padding:8},children:(0,m.jsxs)(c,{gap:2,collapseFrom:`start`,overflowRenderer:e=>(0,m.jsx)(i,{label:`+${e.length} more`,variant:`ghost`,size:`sm`}),children:[(0,m.jsx)(i,{label:`Step 1`,size:`sm`}),(0,m.jsx)(i,{label:`Step 2`,size:`sm`}),(0,m.jsx)(i,{label:`Step 3`,size:`sm`}),(0,m.jsx)(i,{label:`Step 4`,size:`sm`}),(0,m.jsx)(i,{label:`Step 5`,size:`sm`})]})})},x={render:()=>{let e=[`Save`,`Edit`,`Duplicate`,`Share`,`Archive`,`Delete`];return(0,m.jsx)(`div`,{style:{resize:`horizontal`,overflow:`hidden`,border:`1px dashed #ccc`,padding:8,width:350,minWidth:100,maxWidth:`100%`},children:(0,m.jsxs)(c,{gap:2,overflowRenderer:t=>(0,m.jsx)(f,{button:{label:`+${t.length}`,variant:`ghost`,size:`sm`},items:t.map(({index:t})=>({label:e[t],onClick:()=>console.log(e[t])}))}),children:[(0,m.jsx)(i,{label:`Save`,size:`sm`,variant:`primary`}),(0,m.jsx)(i,{label:`Edit`,size:`sm`}),(0,m.jsx)(i,{label:`Duplicate`,size:`sm`}),(0,m.jsx)(i,{label:`Share`,size:`sm`}),(0,m.jsx)(i,{label:`Archive`,size:`sm`}),(0,m.jsx)(i,{label:`Delete`,size:`sm`,variant:`destructive`})]})})}},S={render:()=>{let[e,t]=(0,p.useState)(``);return(0,m.jsx)(`div`,{style:{resize:`horizontal`,overflow:`hidden`,border:`1px dashed #ccc`,minWidth:100,width:600},children:(0,m.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:8,padding:8,height:44},children:[(0,m.jsxs)(c,{gap:2,behavior:`observeParent`,overflowRenderer:e=>(0,m.jsx)(i,{label:`+${e.length} more`,variant:`ghost`,size:`sm`}),children:[(0,m.jsx)(i,{label:`Dashboard`,size:`sm`}),(0,m.jsx)(i,{label:`Analytics`,size:`sm`}),(0,m.jsx)(i,{label:`Reports`,size:`sm`}),(0,m.jsx)(i,{label:`Settings`,size:`sm`}),(0,m.jsx)(i,{label:`Users`,size:`sm`}),(0,m.jsx)(i,{label:`Billing`,size:`sm`})]}),(0,m.jsx)(`div`,{style:{width:70,flexShrink:0},children:(0,m.jsx)(u,{label:`Search`,isLabelHidden:!0,placeholder:`Search...`,size:`sm`,value:e,onChange:t})})]})})}},C={render:()=>{let[e,t]=(0,p.useState)(5);return(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,m.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,m.jsx)(i,{label:`Remove`,size:`sm`,onClick:()=>t(e=>Math.max(1,e-1))}),(0,m.jsx)(i,{label:`Add`,size:`sm`,onClick:()=>t(e=>e+1)}),(0,m.jsxs)(`span`,{children:[e,` items`]})]}),(0,m.jsx)(`div`,{style:{resize:`horizontal`,overflow:`hidden`,border:`1px dashed #ccc`,padding:8,width:400,minWidth:100,maxWidth:`100%`},children:(0,m.jsx)(c,{gap:2,overflowRenderer:e=>(0,m.jsx)(i,{label:`+${e.length} more`,variant:`ghost`,size:`sm`}),children:Array.from({length:e},(e,t)=>(0,m.jsx)(i,{label:`Item ${t+1}`,size:`sm`},t))})})]})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 400,
    border: '1px dashed #ccc',
    padding: 8
  }}>
      <OverflowList gap={2} overflowRenderer={overflowItems => <Button label={\`+\${overflowItems.length} more\`} variant="ghost" size="sm" />}>
        <Button label="Edit" size="sm" />
        <Button label="Duplicate" size="sm" />
        <Button label="Share" size="sm" />
        <Button label="Archive" size="sm" />
        <Button label="Delete" size="sm" />
      </OverflowList>
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    resize: 'horizontal',
    overflow: 'hidden',
    border: '1px dashed #ccc',
    padding: 8,
    width: 500,
    minWidth: 100,
    maxWidth: '100%'
  }}>
      <OverflowList gap={2} overflowRenderer={overflowItems => <Button label={\`+\${overflowItems.length} more\`} variant="ghost" size="sm" />}>
        <Button label="Dashboard" size="sm" />
        <Button label="Analytics" size="sm" />
        <Button label="Reports" size="sm" />
        <Button label="Settings" size="sm" />
        <Button label="Users" size="sm" />
        <Button label="Billing" size="sm" />
        <Button label="Integrations" size="sm" />
      </OverflowList>
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 600,
    border: '1px dashed #ccc',
    padding: 8
  }}>
      <OverflowList gap={2} overflowRenderer={overflowItems => <Button label={\`+\${overflowItems.length} more\`} variant="ghost" size="sm" />}>
        <Button label="Edit" size="sm" />
        <Button label="Save" size="sm" />
      </OverflowList>
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    resize: 'horizontal',
    overflow: 'hidden',
    border: '1px dashed #ccc',
    padding: 8,
    width: 300,
    minWidth: 80
  }}>
      <OverflowList gap={1} overflowRenderer={overflowItems => <Badge variant="neutral" label={\`+\${overflowItems.length}\`} />}>
        <Badge variant="info" label="React" />
        <Badge variant="success" label="TypeScript" />
        <Badge variant="warning" label="StyleX" />
        <Badge variant="neutral" label="Storybook" />
        <Badge variant="error" label="Vitest" />
      </OverflowList>
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 300,
    border: '1px dashed #ccc',
    padding: 8
  }}>
      <OverflowList gap={2} collapseFrom="start" overflowRenderer={overflowItems => <Button label={\`+\${overflowItems.length} more\`} variant="ghost" size="sm" />}>
        <Button label="Step 1" size="sm" />
        <Button label="Step 2" size="sm" />
        <Button label="Step 3" size="sm" />
        <Button label="Step 4" size="sm" />
        <Button label="Step 5" size="sm" />
      </OverflowList>
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const actions = ['Save', 'Edit', 'Duplicate', 'Share', 'Archive', 'Delete'];
    return <div style={{
      resize: 'horizontal',
      overflow: 'hidden',
      border: '1px dashed #ccc',
      padding: 8,
      width: 350,
      minWidth: 100,
      maxWidth: '100%'
    }}>
        <OverflowList gap={2} overflowRenderer={overflowItems => <DropdownMenu button={{
        label: \`+\${overflowItems.length}\`,
        variant: 'ghost',
        size: 'sm'
      }} items={overflowItems.map(({
        index
      }) => ({
        label: actions[index],
        onClick: () => console.log(actions[index])
      }))} />}>
          <Button label="Save" size="sm" variant="primary" />
          <Button label="Edit" size="sm" />
          <Button label="Duplicate" size="sm" />
          <Button label="Share" size="sm" />
          <Button label="Archive" size="sm" />
          <Button label="Delete" size="sm" variant="destructive" />
        </OverflowList>
      </div>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [search, setSearch] = useState('');
    return <div style={{
      resize: 'horizontal',
      overflow: 'hidden',
      border: '1px dashed #ccc',
      minWidth: 100,
      width: 600
    }}>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 8,
        padding: 8,
        height: 44
      }}>
          <OverflowList gap={2} behavior="observeParent" overflowRenderer={overflowItems => <Button label={\`+\${overflowItems.length} more\`} variant="ghost" size="sm" />}>
            <Button label="Dashboard" size="sm" />
            <Button label="Analytics" size="sm" />
            <Button label="Reports" size="sm" />
            <Button label="Settings" size="sm" />
            <Button label="Users" size="sm" />
            <Button label="Billing" size="sm" />
          </OverflowList>
          <div style={{
          width: 70,
          flexShrink: 0
        }}>
            <TextInput label="Search" isLabelHidden placeholder="Search..." size="sm" value={search} onChange={setSearch} />
          </div>
        </div>
      </div>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [count, setCount] = useState(5);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <div style={{
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }}>
          <Button label="Remove" size="sm" onClick={() => setCount(c => Math.max(1, c - 1))} />
          <Button label="Add" size="sm" onClick={() => setCount(c => c + 1)} />
          <span>{count} items</span>
        </div>
        <div style={{
        resize: 'horizontal',
        overflow: 'hidden',
        border: '1px dashed #ccc',
        padding: 8,
        width: 400,
        minWidth: 100,
        maxWidth: '100%'
      }}>
          <OverflowList gap={2} overflowRenderer={items => <Button label={\`+\${items.length} more\`} variant="ghost" size="sm" />}>
            {Array.from({
            length: count
          }, (_, i) => <Button key={i} label={\`Item \${i + 1}\`} size="sm" />)}
          </OverflowList>
        </div>
      </div>;
  }
}`,...C.parameters?.docs?.source}}},w=[`Default`,`Resizable`,`NoOverflow`,`WithBadges`,`CollapseFromStart`,`WithDropdownOverflow`,`WithSiblingElement`,`DynamicItems`]})))()}T();export{b as CollapseFromStart,g as Default,C as DynamicItems,v as NoOverflow,_ as Resizable,y as WithBadges,x as WithDropdownOverflow,S as WithSiblingElement,w as __namedExportsOrder,h as default};