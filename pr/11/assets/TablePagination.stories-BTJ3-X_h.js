import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./stylex-Dft6gtPK.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,t as o}from"./useTranslator-C3b4YzkD.js";import{n as s,t as c}from"./Table-DjR1cHWT.js";import{i as l,n as u,r as d,t as f}from"./useTableSelectionState-CT2cK0IW.js";import{n as p,t as m}from"./Pagination-DI7xUVUj.js";function h(e){let t=a(),{page:r,onPageChange:i,totalItems:o,totalPages:s,hasMore:c,pageSize:l=10,onPageSizeChange:u,pageSizeOptions:d,variant:f=`pages`,size:p=`md`,position:h=`below`,align:y=`center`,label:b}=e,x=b??t(`@khameleon.table.pagination.label`),S=Number.isFinite(l)?Math.max(1,Math.floor(l)):10,C={page:r,onChange:i,totalItems:o,totalPages:s??(o==null?void 0:Math.ceil(o/S)),hasMore:c,pageSize:S,onPageSizeChange:u,pageSizeOptions:d,variant:f,size:p,label:x},w=(0,g.useRef)({paginationProps:C,position:h,align:y});return w.current={paginationProps:C,position:h,align:y},(0,g.useMemo)(()=>({transformTableContext(e){let{position:t,paginationProps:r,align:i}=w.current;if(t===`none`||(r.totalPages??(r.totalItems!=null&&r.pageSize!=null?Math.ceil(r.totalItems/r.pageSize):void 0))===1&&r.hasMore!==!0)return e;let a=e=>(0,_.jsx)(`div`,{...n(v.wrapper,e===`below`&&v.marginTop,e===`above`&&v.marginBottom,i===`center`&&v.alignCenter,i===`end`&&v.alignEnd,i===`start`&&v.alignStart),children:(0,_.jsx)(m,{...r})});return(0,_.jsxs)(_.Fragment,{children:[(t===`above`||t===`both`)&&a(`above`),e,(t===`below`||t===`both`)&&a(`below`)]})}}),[])}var g,_,v;function y(){return(y=e((()=>{g=t(),r(),p(),o(),_=i(),v={wrapper:{k1xSpc:`khameleon78zum5`,$$css:!0},marginTop:{keoZOQ:`khameleontbrsbv`,$$css:!0},marginBottom:{k1K539:`khameleon1p37lm5`,$$css:!0},alignStart:{kjj79g:`khameleon1nhvcw1`,$$css:!0},alignCenter:{kjj79g:`khameleonl56j7k`,$$css:!0},alignEnd:{kjj79g:`khameleon13a6bvl`,$$css:!0}}})))()}function b(e,t,n){let r=Number.isFinite(n)?Math.max(1,Math.floor(n)):10,i=((Number.isFinite(t)?Math.max(1,Math.floor(t)):1)-1)*r;return e.slice(i,i+r)}function x({variant:e=`pages`,position:t=`below`,align:n=`start`}){let[r,i]=(0,S.useState)(1),a=h({page:r,onPageChange:i,totalItems:w.length,pageSize:10,variant:e,position:t,align:n});return(0,C.jsx)(c,{data:b(w,r,10),columns:T,idKey:`id`,plugins:{pagination:a}})}var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{S=t(),s(),y(),d(),f(),C=i(),w=Array.from({length:50},(e,t)=>({id:String(t+1),name:`User ${t+1}`,email:`user${t+1}@example.com`,role:[`Engineer`,`Designer`,`Manager`,`Admin`,`Analyst`][t%5]})),T=[{key:`name`,header:`Name`},{key:`email`,header:`Email`},{key:`role`,header:`Role`}],E={title:`Core/TablePagination`,tags:[`autodocs`]},D={render:()=>{let[e,t]=(0,S.useState)(1),n=h({page:e,onPageChange:t,totalItems:w.length,pageSize:10});return(0,C.jsx)(`div`,{style:{maxWidth:600},children:(0,C.jsx)(c,{data:b(w,e,10),columns:T,idKey:`id`,plugins:{pagination:n}})})}},O={render:()=>{let[e,t]=(0,S.useState)(1),n=w.slice((e-1)*10,e*10),r=h({page:e,onPageChange:t,totalItems:w.length,pageSize:10});return(0,C.jsxs)(`div`,{style:{maxWidth:600},children:[(0,C.jsx)(`p`,{style:{marginBottom:8,fontSize:14,color:`#666`},children:`Server-side: data is pre-sliced, no paginatedData() needed.`}),(0,C.jsx)(c,{data:n,columns:T,idKey:`id`,plugins:{pagination:r}})]})}},k={render:()=>{let[e,t]=(0,S.useState)(1),[n,r]=(0,S.useState)(10),i=h({page:e,onPageChange:t,totalItems:w.length,pageSize:n,onPageSizeChange:r,pageSizeOptions:[5,10,25,50]});return(0,C.jsx)(`div`,{style:{maxWidth:600},children:(0,C.jsx)(c,{data:b(w,e,n),columns:T,idKey:`id`,plugins:{pagination:i}})})}},A={render:()=>{let[e,t]=(0,S.useState)(1),n=e*10<w.length,r=h({page:e,onPageChange:t,hasMore:n,pageSize:10});return(0,C.jsxs)(`div`,{style:{maxWidth:600},children:[(0,C.jsxs)(`p`,{style:{marginBottom:8,fontSize:14,color:`#666`},children:[`Cursor-based: total unknown, only hasMore=`,String(n),`.`]}),(0,C.jsx)(c,{data:b(w,e,10),columns:T,idKey:`id`,plugins:{pagination:r}})]})}},j={render:()=>{let[e,t]=(0,S.useState)(1),n=h({page:e,onPageChange:t,totalItems:w.length,pageSize:10,position:`above`});return(0,C.jsx)(`div`,{style:{maxWidth:600},children:(0,C.jsx)(c,{data:b(w,e,10),columns:T,idKey:`id`,plugins:{pagination:n}})})}},M={render:()=>{let[e,t]=(0,S.useState)(1),n=h({page:e,onPageChange:t,totalItems:w.length,pageSize:10,position:`both`});return(0,C.jsx)(`div`,{style:{maxWidth:600},children:(0,C.jsx)(c,{data:b(w,e,10),columns:T,idKey:`id`,plugins:{pagination:n}})})}},N={render:()=>{let[e,t]=(0,S.useState)(1),[n,r]=(0,S.useState)(new Set),i=h({page:e,onPageChange:t,totalItems:w.length,pageSize:10}),a=b(w,e,10),{selectionConfig:o}=u({data:a,idKey:`id`,selectedKeys:n,setSelectedKeys:r}),s=l(o);return(0,C.jsxs)(`div`,{style:{maxWidth:600},children:[(0,C.jsxs)(`p`,{style:{marginBottom:8,fontSize:14,color:`#666`},children:[`Pagination + Selection composed. Selected: `,n.size]}),(0,C.jsx)(c,{data:a,columns:T,idKey:`id`,plugins:{selection:s,pagination:i}})]})}},P={argTypes:{variant:{control:`select`,options:[`pages`,`count`,`compact`,`dots`,`none`],description:`What appears between prev/next buttons`},position:{control:`select`,options:[`below`,`above`,`both`,`none`],description:`Where pagination renders relative to the table`},align:{control:`select`,options:[`start`,`center`,`end`],description:`Horizontal alignment of the pagination controls`}},args:{variant:`pages`,position:`below`,align:`center`},render:e=>(0,C.jsx)(`div`,{style:{maxWidth:700},children:(0,C.jsx)(x,{variant:e.variant,position:e.position,align:e.align})})},F=[`pages`,`count`,`compact`,`dots`],I=[`below`,`above`,`both`],L=[`start`,`center`,`end`],R={render:()=>(0,C.jsx)(`div`,{style:{fontFamily:`sans-serif`,maxWidth:700},children:F.flatMap(e=>I.flatMap(t=>L.map(n=>(0,C.jsxs)(`div`,{style:{marginBottom:48,paddingBottom:48,borderBottom:`1px solid #e5e5e5`},children:[(0,C.jsx)(`div`,{style:{display:`inline-flex`,gap:8,marginBottom:12,flexWrap:`wrap`},children:[{label:`variant`,value:e},{label:`position`,value:t},{label:`align`,value:n}].map(({label:e,value:t})=>(0,C.jsxs)(`span`,{style:{fontSize:11,fontFamily:`monospace`,background:`#f0f0f0`,borderRadius:4,padding:`2px 6px`,color:`#555`},children:[e,`="`,t,`"`]},e))}),(0,C.jsx)(x,{variant:e,position:t,align:n})]},`${e}-${t}-${n}`))))})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const pageSize = 10;
    const plugin = useTablePagination<User>({
      page,
      onPageChange: setPage,
      totalItems: users.length,
      pageSize
    });
    return <div style={{
      maxWidth: 600
    }}>
        <Table data={paginateData(users, page, pageSize)} columns={columns} idKey="id" plugins={{
        pagination: plugin
      }} />
      </div>;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const pageSize = 10;
    const serverData = users.slice((page - 1) * pageSize, page * pageSize);
    const plugin = useTablePagination<User>({
      page,
      onPageChange: setPage,
      totalItems: users.length,
      pageSize
    });
    return <div style={{
      maxWidth: 600
    }}>
        <p style={{
        marginBottom: 8,
        fontSize: 14,
        color: '#666'
      }}>
          Server-side: data is pre-sliced, no paginatedData() needed.
        </p>
        <Table data={serverData} columns={columns} idKey="id" plugins={{
        pagination: plugin
      }} />
      </div>;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const plugin = useTablePagination<User>({
      page,
      onPageChange: setPage,
      totalItems: users.length,
      pageSize,
      onPageSizeChange: setPageSize,
      pageSizeOptions: [5, 10, 25, 50]
    });
    return <div style={{
      maxWidth: 600
    }}>
        <Table data={paginateData(users, page, pageSize)} columns={columns} idKey="id" plugins={{
        pagination: plugin
      }} />
      </div>;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const pageSize = 10;
    const hasMore = page * pageSize < users.length;
    const plugin = useTablePagination<User>({
      page,
      onPageChange: setPage,
      hasMore,
      pageSize
    });
    return <div style={{
      maxWidth: 600
    }}>
        <p style={{
        marginBottom: 8,
        fontSize: 14,
        color: '#666'
      }}>
          Cursor-based: total unknown, only hasMore={String(hasMore)}.
        </p>
        <Table data={paginateData(users, page, pageSize)} columns={columns} idKey="id" plugins={{
        pagination: plugin
      }} />
      </div>;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const pageSize = 10;
    const plugin = useTablePagination<User>({
      page,
      onPageChange: setPage,
      totalItems: users.length,
      pageSize,
      position: 'above'
    });
    return <div style={{
      maxWidth: 600
    }}>
        <Table data={paginateData(users, page, pageSize)} columns={columns} idKey="id" plugins={{
        pagination: plugin
      }} />
      </div>;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const pageSize = 10;
    const plugin = useTablePagination<User>({
      page,
      onPageChange: setPage,
      totalItems: users.length,
      pageSize,
      position: 'both'
    });
    return <div style={{
      maxWidth: 600
    }}>
        <Table data={paginateData(users, page, pageSize)} columns={columns} idKey="id" plugins={{
        pagination: plugin
      }} />
      </div>;
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set());
    const pageSize = 10;
    const plugin = useTablePagination<User>({
      page,
      onPageChange: setPage,
      totalItems: users.length,
      pageSize
    });
    const pageData = paginateData(users, page, pageSize);
    const {
      selectionConfig
    } = useTableSelectionState<User>({
      data: pageData,
      idKey: 'id',
      selectedKeys,
      setSelectedKeys
    });
    const selectionPlugin = useTableSelection<User>(selectionConfig);
    return <div style={{
      maxWidth: 600
    }}>
        <p style={{
        marginBottom: 8,
        fontSize: 14,
        color: '#666'
      }}>
          Pagination + Selection composed. Selected: {selectedKeys.size}
        </p>
        <Table data={pageData} columns={columns} idKey="id" plugins={{
        selection: selectionPlugin,
        pagination: plugin
      }} />
      </div>;
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: 'select',
      options: ['pages', 'count', 'compact', 'dots', 'none'],
      description: 'What appears between prev/next buttons'
    },
    position: {
      control: 'select',
      options: ['below', 'above', 'both', 'none'],
      description: 'Where pagination renders relative to the table'
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'Horizontal alignment of the pagination controls'
    }
  },
  args: {
    variant: 'pages',
    position: 'below',
    align: 'center'
  },
  render: args => <div style={{
    maxWidth: 700
  }}>
      <PaginatedDemo variant={args.variant} position={args.position} align={args.align} />
    </div>
}`,...P.parameters?.docs?.source},description:{story:`Interactive playground — use the controls panel to explore every combination
of variant, position, and align.`,...P.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    fontFamily: 'sans-serif',
    maxWidth: 700
  }}>
      {VARIANTS.flatMap(variant => POSITIONS.flatMap(position => ALIGNS.map(align => <div key={\`\${variant}-\${position}-\${align}\`} style={{
      marginBottom: 48,
      paddingBottom: 48,
      borderBottom: '1px solid #e5e5e5'
    }}>
              <div style={{
        display: 'inline-flex',
        gap: 8,
        marginBottom: 12,
        flexWrap: 'wrap'
      }}>
                {[{
          label: 'variant',
          value: variant
        }, {
          label: 'position',
          value: position
        }, {
          label: 'align',
          value: align
        }].map(({
          label,
          value
        }) => <span key={label} style={{
          fontSize: 11,
          fontFamily: 'monospace',
          background: '#f0f0f0',
          borderRadius: 4,
          padding: '2px 6px',
          color: '#555'
        }}>
                    {label}=&quot;{value}&quot;
                  </span>)}
              </div>
              <PaginatedDemo variant={variant} position={position} align={align} />
            </div>)))}
    </div>
}`,...R.parameters?.docs?.source},description:{story:"All variant × position × align combinations in one scrollable view.\nOne row per combination, labelled clearly. The `none` values are omitted.",...R.parameters?.docs?.description}}},z=[`Default`,`ServerSide`,`PageSizeSelector`,`CursorBased`,`PositionAbove`,`PositionBoth`,`WithSelection`,`Playground`,`OptionsMatrix`]})))()}B();export{A as CursorBased,D as Default,R as OptionsMatrix,k as PageSizeSelector,P as Playground,j as PositionAbove,M as PositionBoth,O as ServerSide,N as WithSelection,z as __namedExportsOrder,E as default};