import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Pagination-CxMbhKrf.js";function a(e){let[t,n]=(0,o.useState)(e.page??1),[r,a]=(0,o.useState)(e.pageSize??10);return(0,s.jsx)(i,{...e,page:t,onChange:n,pageSize:r,onPageSizeChange:e.pageSizeOptions?a:void 0})}var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{o=t(),r(),s=n(),c={title:`Core/Pagination`,component:i,tags:[`autodocs`],argTypes:{page:{control:`number`,description:`Current page (1-based)`},variant:{control:`select`,options:[`pages`,`count`,`compact`,`dots`,`none`],description:`Visual variant`},size:{control:`select`,options:[`sm`,`md`],description:`Size variant`},siblingCount:{control:`number`,description:`Pages shown around current page`},isDisabled:{control:`boolean`,description:`Disabled state`}}},l={render:()=>(0,s.jsx)(a,{page:1,totalItems:100,pageSize:10})},u={name:`Variant: Pages`,render:()=>(0,s.jsx)(a,{page:1,totalItems:200,pageSize:10,variant:`pages`})},d={name:`Variant: Count`,render:()=>(0,s.jsx)(a,{page:1,totalItems:200,pageSize:20,variant:`count`})},f={name:`Variant: Compact`,render:()=>(0,s.jsx)(a,{page:1,totalPages:10,variant:`compact`})},p={name:`Variant: Dots`,render:()=>(0,s.jsx)(a,{page:1,totalPages:8,variant:`dots`})},m={name:`Variant: None`,render:()=>(0,s.jsx)(a,{page:1,totalPages:5,variant:`none`})},h={name:`With Page Size Selector`,render:()=>(0,s.jsx)(a,{page:1,totalItems:200,pageSize:10,pageSizeOptions:[10,20,50],variant:`count`})},g={name:`Cursor-Based (hasMore)`,render:()=>(0,s.jsx)(a,{page:1,hasMore:!0})},_={name:`Small Size`,render:()=>(0,s.jsx)(a,{page:1,totalItems:100,pageSize:10,size:`sm`})},v={name:`Many Pages (Ellipsis)`,render:()=>(0,s.jsx)(a,{page:5,totalItems:500,pageSize:10})},y={name:`Many Pages (siblingCount=2)`,render:()=>(0,s.jsx)(a,{page:10,totalItems:500,pageSize:10,siblingCount:2})},b={name:`Single Page`,render:()=>(0,s.jsx)(a,{page:1,totalPages:1})},x={render:()=>(0,s.jsx)(a,{page:3,totalPages:10,isDisabled:!0})},S={name:`All Variants`,render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`p`,{style:{marginBottom:8,fontWeight:500},children:`pages (default)`}),(0,s.jsx)(a,{page:3,totalItems:100,pageSize:10,variant:`pages`})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`p`,{style:{marginBottom:8,fontWeight:500},children:`count`}),(0,s.jsx)(a,{page:3,totalItems:100,pageSize:10,variant:`count`})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`p`,{style:{marginBottom:8,fontWeight:500},children:`compact`}),(0,s.jsx)(a,{page:3,totalPages:10,variant:`compact`})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`p`,{style:{marginBottom:8,fontWeight:500},children:`dots`}),(0,s.jsx)(a,{page:3,totalPages:8,variant:`dots`})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`p`,{style:{marginBottom:8,fontWeight:500},children:`none`}),(0,s.jsx)(a,{page:3,totalPages:10,variant:`none`})]})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <PaginationDemo page={1} totalItems={100} pageSize={10} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Variant: Pages',
  render: () => <PaginationDemo page={1} totalItems={200} pageSize={10} variant="pages" />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Variant: Count',
  render: () => <PaginationDemo page={1} totalItems={200} pageSize={20} variant="count" />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Variant: Compact',
  render: () => <PaginationDemo page={1} totalPages={10} variant="compact" />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Variant: Dots',
  render: () => <PaginationDemo page={1} totalPages={8} variant="dots" />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Variant: None',
  render: () => <PaginationDemo page={1} totalPages={5} variant="none" />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'With Page Size Selector',
  render: () => <PaginationDemo page={1} totalItems={200} pageSize={10} pageSizeOptions={[10, 20, 50]} variant="count" />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Cursor-Based (hasMore)',
  render: () => <PaginationDemo page={1} hasMore={true} />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Small Size',
  render: () => <PaginationDemo page={1} totalItems={100} pageSize={10} size="sm" />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Many Pages (Ellipsis)',
  render: () => <PaginationDemo page={5} totalItems={500} pageSize={10} />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Many Pages (siblingCount=2)',
  render: () => <PaginationDemo page={10} totalItems={500} pageSize={10} siblingCount={2} />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Single Page',
  render: () => <PaginationDemo page={1} totalPages={1} />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <PaginationDemo page={3} totalPages={10} isDisabled />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'All Variants',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <div>
        <p style={{
        marginBottom: 8,
        fontWeight: 500
      }}>pages (default)</p>
        <PaginationDemo page={3} totalItems={100} pageSize={10} variant="pages" />
      </div>
      <div>
        <p style={{
        marginBottom: 8,
        fontWeight: 500
      }}>count</p>
        <PaginationDemo page={3} totalItems={100} pageSize={10} variant="count" />
      </div>
      <div>
        <p style={{
        marginBottom: 8,
        fontWeight: 500
      }}>compact</p>
        <PaginationDemo page={3} totalPages={10} variant="compact" />
      </div>
      <div>
        <p style={{
        marginBottom: 8,
        fontWeight: 500
      }}>dots</p>
        <PaginationDemo page={3} totalPages={8} variant="dots" />
      </div>
      <div>
        <p style={{
        marginBottom: 8,
        fontWeight: 500
      }}>none</p>
        <PaginationDemo page={3} totalPages={10} variant="none" />
      </div>
    </div>
}`,...S.parameters?.docs?.source}}},C=[`Default`,`PagesVariant`,`CountVariant`,`CompactVariant`,`DotsVariant`,`NoneVariant`,`WithPageSizeSelector`,`CursorBased`,`SmallSize`,`ManyPages`,`ManyPagesLargeSiblings`,`SinglePage`,`Disabled`,`AllVariants`]})))()}w();export{S as AllVariants,f as CompactVariant,d as CountVariant,g as CursorBased,l as Default,x as Disabled,p as DotsVariant,v as ManyPages,y as ManyPagesLargeSiblings,m as NoneVariant,u as PagesVariant,b as SinglePage,_ as SmallSize,h as WithPageSizeSelector,C as __namedExportsOrder,c as default};