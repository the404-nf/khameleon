import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Divider-D6FpS0OA.js";import{i as ee,r as o}from"./renderDropdownItems-BIbmONX4.js";import{n as s,t as c}from"./DropdownMenu-CCQesoBm.js";import{n as l,t as u}from"./ArchiveBoxIcon-CMgKIPd9.js";import{n as te,t as ne}from"./ArrowDownTrayIcon-CUe7-WvT.js";import{n as re,t as d}from"./Cog6ToothIcon-LKkqufPn.js";import{n as f,t as p}from"./DocumentDuplicateIcon-CmljHdQx.js";import{n as m,t as h}from"./EllipsisHorizontalIcon-CQRvSLJa.js";import{n as g,t as _}from"./PencilIcon-B4auCeVm.js";import{n as v,t as y}from"./ShareIcon-CsrH6mRD.js";import{n as b,t as x}from"./TrashIcon-Be9eoYl2.js";import{n as ie,t as S}from"./UserIcon-DxfptEP-.js";function ae({title:e,titleId:t,...n},r){return C.createElement(`svg`,Object.assign({xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,"aria-hidden":`true`,"data-slot":`icon`,ref:r,"aria-labelledby":t},n),e?C.createElement(`title`,{id:t},e):null,C.createElement(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z`}))}var C,w;function T(){return(T=t((()=>{C=e(n()),w=C.forwardRef(ae)})))()}function oe({title:e,titleId:t,...n},r){return E.createElement(`svg`,Object.assign({xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,"aria-hidden":`true`,"data-slot":`icon`,ref:r,"aria-labelledby":t},n),e?E.createElement(`title`,{id:t},e):null,E.createElement(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z`}))}var E,D;function O(){return(O=t((()=>{E=e(n()),D=E.forwardRef(oe)})))()}var k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=t((()=>{k=n(),s(),ee(),i(),g(),b(),f(),te(),v(),l(),O(),T(),ie(),m(),re(),A=r(),j={title:`Core/DropdownMenu`,component:c,tags:[`autodocs`],parameters:{layout:`centered`},argTypes:{button:{description:`Props for customizing the trigger button`},items:{description:`Menu items (items, dividers, or sections)`},isMenuOpen:{control:`boolean`,description:`Controlled open state`},menuWidth:{control:`text`,description:`Custom menu width (number for px or CSS string)`},placement:{control:`select`,options:[`above`,`below`,`start`,`end`],description:`Menu placement relative to trigger`},"data-testid":{control:`text`,description:`Test ID for testing frameworks`}}},M={render:()=>(0,A.jsx)(c,{button:{label:`Actions`},items:[{label:`Edit`,onClick:()=>console.log(`Edit clicked`)},{label:`Duplicate`,onClick:()=>console.log(`Duplicate clicked`)},{label:`Delete`,onClick:()=>console.log(`Delete clicked`)}]})},N={render:()=>(0,A.jsx)(c,{button:{label:`Actions`,variant:`primary`},items:[{label:`Edit`,icon:_,onClick:()=>console.log(`Edit`)},{label:`Duplicate`,icon:p,onClick:()=>console.log(`Duplicate`)},{label:`Download`,icon:ne,onClick:()=>console.log(`Download`)},{label:`Delete`,icon:x,onClick:()=>console.log(`Delete`)}]})},P={render:()=>(0,A.jsx)(c,{button:{label:`File`,variant:`ghost`},items:[{type:`section`,title:`Create`,items:[{label:`New File`,icon:w,onClick:()=>console.log(`New File`)},{label:`New Folder`,icon:D,onClick:()=>console.log(`New Folder`)}]},{type:`section`,title:`Share`,items:[{label:`Share`,icon:y,onClick:()=>console.log(`Share`)},{label:`Archive`,icon:u,onClick:()=>console.log(`Archive`)}]}]})},F={render:()=>(0,A.jsx)(c,{button:{label:`Actions`},items:[{label:`Edit`,onClick:()=>console.log(`Edit`)},{label:`Duplicate`,onClick:()=>console.log(`Duplicate`)},{type:`divider`},{label:`Delete`,onClick:()=>console.log(`Delete`)}]})},I={render:()=>(0,A.jsx)(c,{button:{label:`Actions`},items:[{label:`Edit`,onClick:()=>console.log(`Edit`)},{label:`Duplicate`,onClick:()=>console.log(`Duplicate`)},{label:`Delete (disabled)`,isDisabled:!0}]})},L={render:()=>{let[e,t]=(0,k.useState)(!1);return(0,A.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,alignItems:`center`},children:[(0,A.jsxs)(`div`,{children:[`Menu is `,e?`open`:`closed`]}),(0,A.jsx)(c,{button:{label:`Controlled Menu`},isMenuOpen:e,onOpenChange:t,items:[{label:`Item 1`,onClick:()=>console.log(`Item 1`)},{label:`Item 2`,onClick:()=>console.log(`Item 2`)},{label:`Item 3`,onClick:()=>console.log(`Item 3`)}]})]})}},R={render:()=>(0,A.jsx)(c,{button:{label:`Wide Menu`},menuWidth:300,items:[{label:`This is a longer option that needs more space`,onClick:()=>console.log(`Option 1`)},{label:`Another long option with extra text`,onClick:()=>console.log(`Option 2`)},{label:`Short one`,onClick:()=>console.log(`Option 3`)}]})},z={render:()=>(0,A.jsxs)(`div`,{style:{display:`flex`,gap:16,flexWrap:`wrap`},children:[(0,A.jsx)(c,{button:{label:`Secondary`,variant:`secondary`},items:[{label:`Option 1`},{label:`Option 2`}]}),(0,A.jsx)(c,{button:{label:`Primary`,variant:`primary`},items:[{label:`Option 1`},{label:`Option 2`}]}),(0,A.jsx)(c,{button:{label:`Ghost`,variant:`ghost`},items:[{label:`Option 1`},{label:`Option 2`}]}),(0,A.jsx)(c,{button:{label:`Destructive`,variant:`destructive`},items:[{label:`Option 1`},{label:`Option 2`}]})]})},B={render:()=>(0,A.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`},children:[(0,A.jsx)(c,{button:{label:`Small`,size:`sm`},items:[{label:`Option 1`},{label:`Option 2`}]}),(0,A.jsx)(c,{button:{label:`Medium`,size:`md`},items:[{label:`Option 1`},{label:`Option 2`}]}),(0,A.jsx)(c,{button:{label:`Large`,size:`lg`},items:[{label:`Option 1`},{label:`Option 2`}]})]})},V={render:()=>{let[e,t]=(0,k.useState)(0);return(0,A.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,alignItems:`center`},children:[(0,A.jsxs)(`div`,{children:[`Button clicked `,e,` times`]}),(0,A.jsx)(c,{button:{label:`Click Me`},onClick:()=>t(e=>e+1),items:[{label:`Menu Item`,onClick:()=>console.log(`Item clicked`)}]})]})}},H={render:()=>(0,A.jsxs)(c,{button:{label:`Select User`},menuWidth:280,children:[(0,A.jsx)(o,{icon:S,label:`Alice Johnson`,description:`alice.johnson@example.com`,onClick:()=>console.log(`Alice`)}),(0,A.jsx)(o,{icon:S,label:`Bob Smith`,description:`bob.smith@example.com`,onClick:()=>console.log(`Bob`)}),(0,A.jsx)(o,{icon:S,label:`Carol Williams`,description:`carol.williams@example.com`,onClick:()=>console.log(`Carol`)})]})},U={render:()=>(0,A.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`},children:[(0,A.jsx)(c,{button:{label:`More options`,icon:(0,A.jsx)(h,{}),variant:`ghost`,isIconOnly:!0},items:[{label:`Edit`,icon:_,onClick:()=>console.log(`Edit`)},{label:`Delete`,icon:x,onClick:()=>console.log(`Delete`)}]}),(0,A.jsx)(c,{button:{label:`Settings`,icon:(0,A.jsx)(d,{}),variant:`secondary`,isIconOnly:!0},items:[{label:`Preferences`,onClick:()=>console.log(`Preferences`)},{label:`Account`,onClick:()=>console.log(`Account`)}]})]})},W={render:()=>(0,A.jsx)(c,{button:{label:`Settings`,icon:(0,A.jsx)(d,{}),variant:`ghost`,children:`Settings`},items:[{label:`Preferences`,onClick:()=>console.log(`Preferences`)},{label:`Account`,onClick:()=>console.log(`Account`)}]})},G={render:()=>(0,A.jsx)(c,{button:{label:`Sort by: Name`,variant:`ghost`},hasChevron:!1,items:[{label:`Name`,onClick:()=>console.log(`Name`)},{label:`Date`,onClick:()=>console.log(`Date`)},{label:`Size`,onClick:()=>console.log(`Size`)}]})},K={render:()=>(0,A.jsxs)(c,{button:{label:`Actions`},children:[(0,A.jsx)(o,{icon:_,label:`Edit`,onClick:()=>console.log(`Edit`)}),(0,A.jsx)(o,{icon:p,label:`Duplicate`,onClick:()=>console.log(`Duplicate`)}),(0,A.jsx)(a,{}),(0,A.jsx)(o,{icon:x,label:`Delete`,onClick:()=>console.log(`Delete`)})]})},q={render:()=>(0,A.jsxs)(c,{button:{label:`File Actions`},children:[(0,A.jsx)(o,{icon:_,label:`Edit`,onClick:()=>console.log(`Edit`)}),(0,A.jsx)(o,{icon:p,label:`Duplicate`,onClick:()=>console.log(`Duplicate`)}),(0,A.jsx)(a,{}),(0,A.jsx)(o,{icon:x,label:`Delete (no permission)`,isDisabled:!0})]})},J={render:()=>{let[e,t]=(0,k.useState)(!1);return(0,A.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,alignItems:`center`},children:[(0,A.jsxs)(`label`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,A.jsx)(`input`,{type:`checkbox`,checked:e,onChange:e=>t(e.target.checked)}),`Show delete option`]}),(0,A.jsxs)(c,{button:{label:`Actions`},children:[(0,A.jsx)(o,{icon:_,label:`Edit`,onClick:()=>console.log(`Edit`)}),(0,A.jsx)(o,{icon:y,label:`Share`,onClick:()=>console.log(`Share`)}),e&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(a,{}),(0,A.jsx)(o,{icon:x,label:`Delete`,onClick:()=>console.log(`Delete`)})]})]})]})}},Y={render:()=>(0,A.jsxs)(c,{button:{label:`Select User`},menuWidth:280,children:[(0,A.jsx)(o,{icon:S,label:`Alice Johnson`,description:`alice.johnson@example.com`,onClick:()=>console.log(`Alice`)}),(0,A.jsx)(o,{icon:S,label:`Bob Smith`,description:`bob.smith@example.com`,onClick:()=>console.log(`Bob`)}),(0,A.jsx)(o,{icon:S,label:`Carol Williams`,description:`carol.williams@example.com`,onClick:()=>console.log(`Carol`)})]})},X={render:()=>(0,A.jsx)(c,{button:{label:`Bottom toolbar menu`},placement:`above`,items:[{label:`Edit`,onClick:()=>console.log(`Edit`)},{label:`Duplicate`,onClick:()=>console.log(`Duplicate`)},{label:`Delete`,onClick:()=>console.log(`Delete`)}]})},Z={render:()=>(0,A.jsxs)(`div`,{style:{direction:`rtl`,display:`flex`,gap:`16px`},children:[(0,A.jsx)(c,{button:{label:`CSS direction: rtl`},items:[{label:`Edit`,onClick:()=>console.log(`Edit`)},{label:`Duplicate`,onClick:()=>console.log(`Duplicate`)},{label:`Delete`,onClick:()=>console.log(`Delete`)}]}),(0,A.jsx)(`div`,{dir:`ltr`,children:(0,A.jsx)(`div`,{dir:`rtl`,children:(0,A.jsx)(c,{button:{label:`dir="rtl" attribute`},items:[{label:`Edit`,onClick:()=>console.log(`Edit`)},{label:`Duplicate`,onClick:()=>console.log(`Duplicate`)},{label:`Delete`,onClick:()=>console.log(`Delete`)}]})})})]}),parameters:{docs:{description:{story:`In RTL contexts (CSS direction property or dir attribute) the menu right-edge-aligns to the trigger and grows toward the left — the logical mirror of the LTR default (#3389). Both direction mechanisms are shown; the popover inherits direction from the trigger subtree and the self-* position-area keywords mirror it in pure CSS.`}}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu button={{
    label: 'Actions'
  }} items={[{
    label: 'Edit',
    onClick: () => console.log('Edit clicked')
  }, {
    label: 'Duplicate',
    onClick: () => console.log('Duplicate clicked')
  }, {
    label: 'Delete',
    onClick: () => console.log('Delete clicked')
  }]} />
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu button={{
    label: 'Actions',
    variant: 'primary'
  }} items={[{
    label: 'Edit',
    icon: PencilIcon,
    onClick: () => console.log('Edit')
  }, {
    label: 'Duplicate',
    icon: DocumentDuplicateIcon,
    onClick: () => console.log('Duplicate')
  }, {
    label: 'Download',
    icon: ArrowDownTrayIcon,
    onClick: () => console.log('Download')
  }, {
    label: 'Delete',
    icon: TrashIcon,
    onClick: () => console.log('Delete')
  }]} />
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu button={{
    label: 'File',
    variant: 'ghost'
  }} items={[{
    type: 'section',
    title: 'Create',
    items: [{
      label: 'New File',
      icon: DocumentPlusIcon,
      onClick: () => console.log('New File')
    }, {
      label: 'New Folder',
      icon: FolderPlusIcon,
      onClick: () => console.log('New Folder')
    }]
  }, {
    type: 'section',
    title: 'Share',
    items: [{
      label: 'Share',
      icon: ShareIcon,
      onClick: () => console.log('Share')
    }, {
      label: 'Archive',
      icon: ArchiveBoxIcon,
      onClick: () => console.log('Archive')
    }]
  }]} />
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu button={{
    label: 'Actions'
  }} items={[{
    label: 'Edit',
    onClick: () => console.log('Edit')
  }, {
    label: 'Duplicate',
    onClick: () => console.log('Duplicate')
  }, {
    type: 'divider'
  }, {
    label: 'Delete',
    onClick: () => console.log('Delete')
  }]} />
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu button={{
    label: 'Actions'
  }} items={[{
    label: 'Edit',
    onClick: () => console.log('Edit')
  }, {
    label: 'Duplicate',
    onClick: () => console.log('Duplicate')
  }, {
    label: 'Delete (disabled)',
    isDisabled: true
  }]} />
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'center'
    }}>
        <div>Menu is {isOpen ? 'open' : 'closed'}</div>
        <DropdownMenu button={{
        label: 'Controlled Menu'
      }} isMenuOpen={isOpen} onOpenChange={setIsOpen} items={[{
        label: 'Item 1',
        onClick: () => console.log('Item 1')
      }, {
        label: 'Item 2',
        onClick: () => console.log('Item 2')
      }, {
        label: 'Item 3',
        onClick: () => console.log('Item 3')
      }]} />
      </div>;
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu button={{
    label: 'Wide Menu'
  }} menuWidth={300} items={[{
    label: 'This is a longer option that needs more space',
    onClick: () => console.log('Option 1')
  }, {
    label: 'Another long option with extra text',
    onClick: () => console.log('Option 2')
  }, {
    label: 'Short one',
    onClick: () => console.log('Option 3')
  }]} />
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap'
  }}>
      <DropdownMenu button={{
      label: 'Secondary',
      variant: 'secondary'
    }} items={[{
      label: 'Option 1'
    }, {
      label: 'Option 2'
    }]} />
      <DropdownMenu button={{
      label: 'Primary',
      variant: 'primary'
    }} items={[{
      label: 'Option 1'
    }, {
      label: 'Option 2'
    }]} />
      <DropdownMenu button={{
      label: 'Ghost',
      variant: 'ghost'
    }} items={[{
      label: 'Option 1'
    }, {
      label: 'Option 2'
    }]} />
      <DropdownMenu button={{
      label: 'Destructive',
      variant: 'destructive'
    }} items={[{
      label: 'Option 1'
    }, {
      label: 'Option 2'
    }]} />
    </div>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      <DropdownMenu button={{
      label: 'Small',
      size: 'sm'
    }} items={[{
      label: 'Option 1'
    }, {
      label: 'Option 2'
    }]} />
      <DropdownMenu button={{
      label: 'Medium',
      size: 'md'
    }} items={[{
      label: 'Option 1'
    }, {
      label: 'Option 2'
    }]} />
      <DropdownMenu button={{
      label: 'Large',
      size: 'lg'
    }} items={[{
      label: 'Option 1'
    }, {
      label: 'Option 2'
    }]} />
    </div>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [clickCount, setClickCount] = useState(0);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'center'
    }}>
        <div>Button clicked {clickCount} times</div>
        <DropdownMenu button={{
        label: 'Click Me'
      }} onClick={() => setClickCount(c => c + 1)} items={[{
        label: 'Menu Item',
        onClick: () => console.log('Item clicked')
      }]} />
      </div>;
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu button={{
    label: 'Select User'
  }} menuWidth={280}>
      <DropdownMenuItem icon={UserIcon} label="Alice Johnson" description="alice.johnson@example.com" onClick={() => console.log('Alice')} />
      <DropdownMenuItem icon={UserIcon} label="Bob Smith" description="bob.smith@example.com" onClick={() => console.log('Bob')} />
      <DropdownMenuItem icon={UserIcon} label="Carol Williams" description="carol.williams@example.com" onClick={() => console.log('Carol')} />
    </DropdownMenu>
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      <DropdownMenu button={{
      label: 'More options',
      icon: <EllipsisHorizontalIcon />,
      variant: 'ghost',
      isIconOnly: true
    }} items={[{
      label: 'Edit',
      icon: PencilIcon,
      onClick: () => console.log('Edit')
    }, {
      label: 'Delete',
      icon: TrashIcon,
      onClick: () => console.log('Delete')
    }]} />
      <DropdownMenu button={{
      label: 'Settings',
      icon: <Cog6ToothIcon />,
      variant: 'secondary',
      isIconOnly: true
    }} items={[{
      label: 'Preferences',
      onClick: () => console.log('Preferences')
    }, {
      label: 'Account',
      onClick: () => console.log('Account')
    }]} />
    </div>
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu button={{
    label: 'Settings',
    icon: <Cog6ToothIcon />,
    variant: 'ghost',
    children: 'Settings'
  }} items={[{
    label: 'Preferences',
    onClick: () => console.log('Preferences')
  }, {
    label: 'Account',
    onClick: () => console.log('Account')
  }]} />
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu button={{
    label: 'Sort by: Name',
    variant: 'ghost'
  }} hasChevron={false} items={[{
    label: 'Name',
    onClick: () => console.log('Name')
  }, {
    label: 'Date',
    onClick: () => console.log('Date')
  }, {
    label: 'Size',
    onClick: () => console.log('Size')
  }]} />
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu button={{
    label: 'Actions'
  }}>
      <DropdownMenuItem icon={PencilIcon} label="Edit" onClick={() => console.log('Edit')} />
      <DropdownMenuItem icon={DocumentDuplicateIcon} label="Duplicate" onClick={() => console.log('Duplicate')} />
      <Divider />
      <DropdownMenuItem icon={TrashIcon} label="Delete" onClick={() => console.log('Delete')} />
    </DropdownMenu>
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu button={{
    label: 'File Actions'
  }}>
      <DropdownMenuItem icon={PencilIcon} label="Edit" onClick={() => console.log('Edit')} />
      <DropdownMenuItem icon={DocumentDuplicateIcon} label="Duplicate" onClick={() => console.log('Duplicate')} />
      <Divider />
      <DropdownMenuItem icon={TrashIcon} label="Delete (no permission)" isDisabled />
    </DropdownMenu>
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [canDelete, setCanDelete] = useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'center'
    }}>
        <label style={{
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }}>
          <input type="checkbox" checked={canDelete} onChange={e => setCanDelete(e.target.checked)} />
          Show delete option
        </label>
        <DropdownMenu button={{
        label: 'Actions'
      }}>
          <DropdownMenuItem icon={PencilIcon} label="Edit" onClick={() => console.log('Edit')} />
          <DropdownMenuItem icon={ShareIcon} label="Share" onClick={() => console.log('Share')} />
          {canDelete && <>
              <Divider />
              <DropdownMenuItem icon={TrashIcon} label="Delete" onClick={() => console.log('Delete')} />
            </>}
        </DropdownMenu>
      </div>;
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu button={{
    label: 'Select User'
  }} menuWidth={280}>
      <DropdownMenuItem icon={UserIcon} label="Alice Johnson" description="alice.johnson@example.com" onClick={() => console.log('Alice')} />
      <DropdownMenuItem icon={UserIcon} label="Bob Smith" description="bob.smith@example.com" onClick={() => console.log('Bob')} />
      <DropdownMenuItem icon={UserIcon} label="Carol Williams" description="carol.williams@example.com" onClick={() => console.log('Carol')} />
    </DropdownMenu>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu button={{
    label: 'Bottom toolbar menu'
  }} placement="above" items={[{
    label: 'Edit',
    onClick: () => console.log('Edit')
  }, {
    label: 'Duplicate',
    onClick: () => console.log('Duplicate')
  }, {
    label: 'Delete',
    onClick: () => console.log('Delete')
  }]} />
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    direction: 'rtl',
    display: 'flex',
    gap: '16px'
  }}>
      <DropdownMenu button={{
      label: 'CSS direction: rtl'
    }} items={[{
      label: 'Edit',
      onClick: () => console.log('Edit')
    }, {
      label: 'Duplicate',
      onClick: () => console.log('Duplicate')
    }, {
      label: 'Delete',
      onClick: () => console.log('Delete')
    }]} />
      <div dir="ltr">
        <div dir="rtl">
          <DropdownMenu button={{
          label: 'dir="rtl" attribute'
        }} items={[{
          label: 'Edit',
          onClick: () => console.log('Edit')
        }, {
          label: 'Duplicate',
          onClick: () => console.log('Duplicate')
        }, {
          label: 'Delete',
          onClick: () => console.log('Delete')
        }]} />
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'In RTL contexts (CSS direction property or dir attribute) the menu right-edge-aligns to the trigger and grows toward the left — the logical mirror of the LTR default (#3389). Both direction mechanisms are shown; the popover inherits direction from the trigger subtree and the self-* position-area keywords mirror it in pure CSS.'
      }
    }
  }
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`WithIcons`,`WithSections`,`WithDividers`,`WithDisabledItems`,`Controlled`,`CustomWidth`,`ButtonVariants`,`ButtonSizes`,`WithOnClick`,`CustomItemRender`,`IconOnly`,`IconWithLabel`,`NoChevron`,`CompoundBasic`,`CompoundWithDisabled`,`CompoundConditional`,`CompoundWithDescriptions`,`PlacementAbove`,`RTL`]})))()}$();export{B as ButtonSizes,z as ButtonVariants,K as CompoundBasic,J as CompoundConditional,Y as CompoundWithDescriptions,q as CompoundWithDisabled,L as Controlled,H as CustomItemRender,R as CustomWidth,M as Default,U as IconOnly,W as IconWithLabel,G as NoChevron,X as PlacementAbove,Z as RTL,I as WithDisabledItems,F as WithDividers,N as WithIcons,V as WithOnClick,P as WithSections,Q as __namedExportsOrder,j as default};