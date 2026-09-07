import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./ContextMenu-8E3JgYOY.js";import{n as i,t as a}from"./Divider-D6FpS0OA.js";import{i as o,r as s}from"./renderDropdownItems-BIbmONX4.js";import{n as c,t as l}from"./ArrowDownTrayIcon-CUe7-WvT.js";import{n as u,t as d}from"./ClipboardDocumentIcon-CYJylhoT.js";import{i as f,n as p,r as m,t as h}from"./ScissorsIcon--6VrF4Sg.js";import{n as g,t as _}from"./DocumentDuplicateIcon-CmljHdQx.js";import{n as v,t as y}from"./PencilIcon-B4auCeVm.js";import{n as b,t as x}from"./ShareIcon-CsrH6mRD.js";import{n as S,t as C}from"./TrashIcon-Be9eoYl2.js";var w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{n(),o(),i(),v(),S(),g(),c(),b(),p(),f(),u(),w=t(),T={title:`Core/ContextMenu`,component:r,tags:[`autodocs`],parameters:{layout:`centered`},argTypes:{items:{description:`Menu items (items, dividers, or sections)`},menuWidth:{control:`text`,description:`Custom menu width (number for px or CSS string)`},size:{control:`select`,options:[`sm`,`md`,`lg`],description:`Menu item size`},isDisabled:{control:`boolean`,description:`Disable custom context menu`},"data-testid":{control:`text`,description:`Test ID for testing frameworks`}}},E={render:()=>(0,w.jsx)(r,{items:[{label:`Cut`,onClick:()=>console.log(`Cut`)},{label:`Copy`,onClick:()=>console.log(`Copy`)},{label:`Paste`,onClick:()=>console.log(`Paste`)}],children:(0,w.jsx)(`div`,{className:`x1o8uwn5 xdh2fpr xbsl7fq x1y0avi5 xur7f20 x2b8uid x93p4j0 x87ps6o`,children:`Right-click this area`})})},D={render:()=>(0,w.jsx)(r,{items:[{label:`Cut`,icon:h,onClick:()=>console.log(`Cut`)},{label:`Copy`,icon:d,onClick:()=>console.log(`Copy`)},{label:`Paste`,icon:m,onClick:()=>console.log(`Paste`)},{type:`divider`},{label:`Delete`,icon:C,onClick:()=>console.log(`Delete`)}],children:(0,w.jsx)(`div`,{className:`x1o8uwn5 xdh2fpr xbsl7fq x1y0avi5 xur7f20 x2b8uid x93p4j0 x87ps6o`,children:`Right-click for actions`})})},O={render:()=>(0,w.jsx)(r,{items:[{type:`section`,title:`Edit`,items:[{label:`Cut`,icon:h,onClick:()=>console.log(`Cut`)},{label:`Copy`,icon:d,onClick:()=>console.log(`Copy`)},{label:`Paste`,icon:m,onClick:()=>console.log(`Paste`)}]},{type:`section`,title:`Share`,items:[{label:`Share`,icon:x,onClick:()=>console.log(`Share`)},{label:`Download`,icon:l,onClick:()=>console.log(`Download`)}]}],children:(0,w.jsx)(`div`,{className:`x1o8uwn5 xdh2fpr xbsl7fq x1y0avi5 xur7f20 x2b8uid x93p4j0 x87ps6o`,children:`Right-click for grouped actions`})})},k={render:()=>(0,w.jsx)(r,{items:[{label:`Edit`,onClick:()=>console.log(`Edit`)},{label:`Duplicate`,onClick:()=>console.log(`Duplicate`)},{type:`divider`},{label:`Delete`,onClick:()=>console.log(`Delete`)}],children:(0,w.jsx)(`div`,{className:`x1o8uwn5 xdh2fpr xbsl7fq x1y0avi5 xur7f20 x2b8uid x93p4j0 x87ps6o`,children:`Right-click this area`})})},A={render:()=>(0,w.jsx)(r,{items:[{label:`Edit`,icon:y,onClick:()=>console.log(`Edit`)},{label:`Duplicate`,icon:_,onClick:()=>console.log(`Duplicate`)},{label:`Delete (no permission)`,icon:C,isDisabled:!0}],children:(0,w.jsx)(`div`,{className:`x1o8uwn5 xdh2fpr xbsl7fq x1y0avi5 xur7f20 x2b8uid x93p4j0 x87ps6o`,children:`Right-click this area`})})},j={render:()=>(0,w.jsx)(r,{menuWidth:280,items:[{label:`This is a longer option that needs more space`,onClick:()=>console.log(`Option 1`)},{label:`Another long option`,onClick:()=>console.log(`Option 2`)},{label:`Short`,onClick:()=>console.log(`Option 3`)}],children:(0,w.jsx)(`div`,{className:`x1o8uwn5 xdh2fpr xbsl7fq x1y0avi5 xur7f20 x2b8uid x93p4j0 x87ps6o`,children:`Right-click for wide menu`})})},M={render:()=>(0,w.jsx)(r,{size:`sm`,items:[{label:`Cut`,onClick:()=>console.log(`Cut`)},{label:`Copy`,onClick:()=>console.log(`Copy`)},{label:`Paste`,onClick:()=>console.log(`Paste`)}],children:(0,w.jsx)(`div`,{className:`x1o8uwn5 xdh2fpr xbsl7fq x1y0avi5 xur7f20 x2b8uid x93p4j0 x87ps6o`,children:`Right-click for compact menu`})})},N={render:()=>(0,w.jsx)(r,{isDisabled:!0,items:[{label:`Cut`,onClick:()=>console.log(`Cut`)},{label:`Copy`,onClick:()=>console.log(`Copy`)}],children:(0,w.jsx)(`div`,{className:`x1o8uwn5 xdh2fpr xbsl7fq x1y0avi5 xur7f20 x2b8uid x93p4j0 x87ps6o`,children:`Right-click shows native menu (disabled)`})})},P={render:()=>(0,w.jsx)(r,{menuContent:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(s,{icon:y,label:`Edit`,onClick:()=>console.log(`Edit`)}),(0,w.jsx)(s,{icon:_,label:`Duplicate`,onClick:()=>console.log(`Duplicate`)}),(0,w.jsx)(a,{}),(0,w.jsx)(s,{icon:C,label:`Delete`,onClick:()=>console.log(`Delete`)})]}),children:(0,w.jsx)(`div`,{className:`x1o8uwn5 xdh2fpr xbsl7fq x1y0avi5 xur7f20 x2b8uid x93p4j0 x87ps6o`,children:`Right-click for compound menu`})})},F={render:()=>(0,w.jsx)(r,{menuWidth:280,menuContent:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(s,{icon:y,label:`Edit`,description:`Modify this item`,onClick:()=>console.log(`Edit`)}),(0,w.jsx)(s,{icon:x,label:`Share`,description:`Share with others`,onClick:()=>console.log(`Share`)}),(0,w.jsx)(a,{}),(0,w.jsx)(s,{icon:C,label:`Delete`,description:`Permanently remove`,onClick:()=>console.log(`Delete`)})]}),children:(0,w.jsx)(`div`,{className:`x1o8uwn5 xdh2fpr xbsl7fq x1y0avi5 xur7f20 x2b8uid x93p4j0 x87ps6o`,children:`Right-click for detailed menu`})})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu items={[{
    label: 'Cut',
    onClick: () => console.log('Cut')
  }, {
    label: 'Copy',
    onClick: () => console.log('Copy')
  }, {
    label: 'Paste',
    onClick: () => console.log('Paste')
  }]}>
      <div {...stylex.props(triggerStyles.area)}>Right-click this area</div>
    </ContextMenu>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu items={[{
    label: 'Cut',
    icon: ScissorsIcon,
    onClick: () => console.log('Cut')
  }, {
    label: 'Copy',
    icon: ClipboardDocumentIcon,
    onClick: () => console.log('Copy')
  }, {
    label: 'Paste',
    icon: ClipboardIcon,
    onClick: () => console.log('Paste')
  }, {
    type: 'divider'
  }, {
    label: 'Delete',
    icon: TrashIcon,
    onClick: () => console.log('Delete')
  }]}>
      <div {...stylex.props(triggerStyles.area)}>Right-click for actions</div>
    </ContextMenu>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu items={[{
    type: 'section',
    title: 'Edit',
    items: [{
      label: 'Cut',
      icon: ScissorsIcon,
      onClick: () => console.log('Cut')
    }, {
      label: 'Copy',
      icon: ClipboardDocumentIcon,
      onClick: () => console.log('Copy')
    }, {
      label: 'Paste',
      icon: ClipboardIcon,
      onClick: () => console.log('Paste')
    }]
  }, {
    type: 'section',
    title: 'Share',
    items: [{
      label: 'Share',
      icon: ShareIcon,
      onClick: () => console.log('Share')
    }, {
      label: 'Download',
      icon: ArrowDownTrayIcon,
      onClick: () => console.log('Download')
    }]
  }]}>
      <div {...stylex.props(triggerStyles.area)}>
        Right-click for grouped actions
      </div>
    </ContextMenu>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu items={[{
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
  }]}>
      <div {...stylex.props(triggerStyles.area)}>Right-click this area</div>
    </ContextMenu>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu items={[{
    label: 'Edit',
    icon: PencilIcon,
    onClick: () => console.log('Edit')
  }, {
    label: 'Duplicate',
    icon: DocumentDuplicateIcon,
    onClick: () => console.log('Duplicate')
  }, {
    label: 'Delete (no permission)',
    icon: TrashIcon,
    isDisabled: true
  }]}>
      <div {...stylex.props(triggerStyles.area)}>Right-click this area</div>
    </ContextMenu>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu menuWidth={280} items={[{
    label: 'This is a longer option that needs more space',
    onClick: () => console.log('Option 1')
  }, {
    label: 'Another long option',
    onClick: () => console.log('Option 2')
  }, {
    label: 'Short',
    onClick: () => console.log('Option 3')
  }]}>
      <div {...stylex.props(triggerStyles.area)}>Right-click for wide menu</div>
    </ContextMenu>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu size="sm" items={[{
    label: 'Cut',
    onClick: () => console.log('Cut')
  }, {
    label: 'Copy',
    onClick: () => console.log('Copy')
  }, {
    label: 'Paste',
    onClick: () => console.log('Paste')
  }]}>
      <div {...stylex.props(triggerStyles.area)}>
        Right-click for compact menu
      </div>
    </ContextMenu>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu isDisabled items={[{
    label: 'Cut',
    onClick: () => console.log('Cut')
  }, {
    label: 'Copy',
    onClick: () => console.log('Copy')
  }]}>
      <div {...stylex.props(triggerStyles.area)}>
        Right-click shows native menu (disabled)
      </div>
    </ContextMenu>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu menuContent={<>
          <ContextMenuItem icon={PencilIcon} label="Edit" onClick={() => console.log('Edit')} />
          <ContextMenuItem icon={DocumentDuplicateIcon} label="Duplicate" onClick={() => console.log('Duplicate')} />
          <Divider />
          <ContextMenuItem icon={TrashIcon} label="Delete" onClick={() => console.log('Delete')} />
        </>}>
      <div {...stylex.props(triggerStyles.area)}>
        Right-click for compound menu
      </div>
    </ContextMenu>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu menuWidth={280} menuContent={<>
          <ContextMenuItem icon={PencilIcon} label="Edit" description="Modify this item" onClick={() => console.log('Edit')} />
          <ContextMenuItem icon={ShareIcon} label="Share" description="Share with others" onClick={() => console.log('Share')} />
          <Divider />
          <ContextMenuItem icon={TrashIcon} label="Delete" description="Permanently remove" onClick={() => console.log('Delete')} />
        </>}>
      <div {...stylex.props(triggerStyles.area)}>
        Right-click for detailed menu
      </div>
    </ContextMenu>
}`,...F.parameters?.docs?.source}}},I=[`Default`,`WithIcons`,`WithSections`,`WithDividers`,`WithDisabledItems`,`CustomWidth`,`SmallSize`,`Disabled`,`CompoundBasic`,`CompoundWithDescriptions`]})))()}L();export{P as CompoundBasic,F as CompoundWithDescriptions,j as CustomWidth,E as Default,N as Disabled,M as SmallSize,A as WithDisabledItems,k as WithDividers,D as WithIcons,O as WithSections,I as __namedExportsOrder,T as default};