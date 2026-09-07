import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{_ as r,g as i,h as a,n as o,t as s}from"./Table-DjR1cHWT.js";import{i as c,n as l,r as u,t as d}from"./useTableSortableState-RR5adave.js";function f(e){let{data:t,getRowKey:n,label:r=`#`,startFrom:i=1}=e,a=(0,p.useMemo)(()=>{let e=new Map;for(let r=0;r<t.length;r++){let i=t[r];e.set(n?n(i):i,r)}return t=>e.get(n?n(t):t)},[t,n]);return(0,p.useMemo)(()=>({transformColumns(e){return[{key:`__rowIndex`,header:r,width:h,align:`end`,resizable:!1,renderCell:e=>{let t=a(e);return t==null?null:(0,m.jsx)(`span`,{className:`khameleon9m5x89 khameleon141an7d khameleonss6m8b khameleonv1l7n4`,children:t+i})}},...e]}}),[r,i,a])}var p,m,h;function g(){return(g=e((()=>{p=t(),m=n(),h={type:`pixel`,value:48}})))()}var _,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{_=t(),o(),g(),u(),d(),a(),v=n(),y=[{id:`t1`,title:`Nightfall`,artist:`Ava Chen`,plays:1820},{id:`t2`,title:`Ember`,artist:`Liam Park`,plays:942},{id:`t3`,title:`Tidal`,artist:`Zoe Vega`,plays:3310},{id:`t4`,title:`Cinder`,artist:`Max Ross`,plays:604},{id:`t5`,title:`Halcyon`,artist:`Mia Cole`,plays:2075}],b=[{key:`title`,header:`Title`,width:r(2)},{key:`artist`,header:`Artist`,width:r(2)},{key:`plays`,header:`Plays`,width:i(90),align:`end`,sortable:!0}],x={title:`Core/TableRowIndex`,tags:[`autodocs`]},S={render:()=>{let e=f({data:y});return(0,v.jsx)(s,{data:y,columns:b,idKey:`id`,hasHover:!0,plugins:{rowIndex:e}})}},C={render:()=>{let e=f({data:y,label:`No.`,startFrom:0});return(0,v.jsx)(s,{data:y,columns:b,idKey:`id`,hasHover:!0,plugins:{rowIndex:e}})}},w={render:()=>{let[e,t]=(0,_.useState)([{sortKey:`plays`,direction:`descending`}]),{sortedData:n,sortConfig:r}=l({data:y,sort:e,onSortChange:t}),i=c(r),a=f({data:n,getRowKey:e=>e.id}),o=(0,_.useMemo)(()=>({rowIndex:a,sort:i}),[a,i]);return(0,v.jsx)(s,{data:n,columns:b,idKey:`id`,hasHover:!0,plugins:o})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const rowIndex = useTableRowIndex<Track>({
      data: tracks
    });
    return <Table data={tracks} columns={columns} idKey="id" hasHover plugins={{
      rowIndex
    }} />;
  }
}`,...S.parameters?.docs?.source},description:{story:`A monospaced, right-aligned row-number column is prepended to the table.
Numbering follows the rendered data order and starts at 1 by default.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const rowIndex = useTableRowIndex<Track>({
      data: tracks,
      label: 'No.',
      startFrom: 0
    });
    return <Table data={tracks} columns={columns} idKey="id" hasHover plugins={{
      rowIndex
    }} />;
  }
}`,...C.parameters?.docs?.source},description:{story:"Customize the header `label` and the `startFrom` offset (e.g. 0-based).",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sort, setSort] = useState<TableSortState>([{
      sortKey: 'plays',
      direction: 'descending'
    }]);
    const {
      sortedData,
      sortConfig
    } = useTableSortableState<Track>({
      data: tracks,
      sort,
      onSortChange: setSort
    });
    const sortPlugin = useTableSortable<Track>(sortConfig);
    // Pass the sorted data + a stable key so the index tracks the sorted order.
    const rowIndex = useTableRowIndex<Track>({
      data: sortedData,
      getRowKey: item => item.id
    });
    const plugins = useMemo(() => ({
      rowIndex,
      sort: sortPlugin
    }), [rowIndex, sortPlugin]);
    return <Table data={sortedData} columns={columns} idKey="id" hasHover plugins={plugins} />;
  }
}`,...w.parameters?.docs?.source},description:{story:`The index reflects the current view: with sorting active, pass the **sorted**
data to \`useTableRowIndex\` so numbering renumbers as the order changes. Sort
by Plays to see rows renumber 1..n in the new order.`,...w.parameters?.docs?.description}}},T=[`Default`,`CustomLabelAndStart`,`RenumbersWithSort`]})))()}E();export{C as CustomLabelAndStart,S as Default,w as RenumbersWithSort,T as __namedExportsOrder,x as default};