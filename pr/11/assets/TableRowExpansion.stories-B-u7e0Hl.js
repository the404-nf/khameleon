import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./stylex-Dft6gtPK.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,t as o}from"./Icon-D9gPeCUm.js";import{n as s,t as c}from"./useTranslator-C3b4YzkD.js";import{_ as l,d as u,f as d,g as f,h as p,n as m,t as h}from"./Table-DjR1cHWT.js";function g({baseData:e,getChildren:t,getRowKey:n,getIsItemExpandable:r,expandedKeys:i,setExpandedKeys:a}){let o=(0,y.useCallback)(e=>r?r(e):t(e).length>0,[r,t]),s=(0,y.useMemo)(()=>{let r=new Map;function a(e,o){for(let s of e){let e=n(s);r.set(e,o),i.has(e)&&a(t(s),o+1)}}return a(e,0),r},[e,t,n,i]),c=(0,y.useMemo)(()=>{let r=[];function a(e){for(let o of e){r.push(o);let e=n(o);i.has(e)&&a(t(o))}}return a(e),r},[e,t,n,i]),l=(0,y.useMemo)(()=>{let r=[];function i(e){for(let a of e)o(a)&&(r.push(n(a)),i(t(a)))}return i(e),r},[e,t,n,o]),u=(0,y.useCallback)(e=>s.get(n(e))??0,[s,n]),d=(0,y.useCallback)(e=>{a(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},[a]),f=(0,y.useMemo)(()=>{if(l.length===0)return!1;let e=l.filter(e=>i.has(e)).length;return e===0?!1:e===l.length||`indeterminate`},[l,i]),p=(0,y.useCallback)(e=>{a(e?new Set(l):new Set)},[a,l]);return{data:c,expansionConfig:(0,y.useMemo)(()=>({expandedKeys:i,onToggle:d,getRowKey:n,getChildren:t,getDepth:u,getIsItemExpandable:r,isAllExpanded:f,onToggleExpandAll:p}),[i,d,n,t,u,r,f,p])}}function _({isExpanded:e,onToggle:t,ariaLabel:n}){return(0,b.jsx)(`button`,{type:`button`,className:`khameleon3nfvp2 khameleon6s0dn4 khameleonl56j7k khameleonvy4d1p khameleonxk0z11 khameleon1md70p1 khameleon1gs6z28 khameleonx3sua9 khameleon1ypdohk khameleonv9yike khameleonefglzl khameleonx6bhzk khameleon1717udv khameleon2lah0s khameleon1ilzqfv khameleon1cqbx0l`,onClick:e=>{e.stopPropagation(),t()},"aria-label":n,"aria-expanded":e,children:(0,b.jsx)(`span`,{...{0:{className:`khameleon3nfvp2 khameleon11xpdln khameleonx6bhzk`},1:{className:`khameleon3nfvp2 khameleon11xpdln khameleonx6bhzk khameleon1iffjtl`}}[!!e<<0],children:(0,b.jsx)(o,{icon:`chevronRight`,size:`xsm`})})})}function v(e){let t=s(),{expandedKeys:r,onToggle:i,getRowKey:a,getChildren:c,getDepth:l,getIsItemExpandable:u,hasRowClickExpansion:f=!1,isAllExpanded:p,onToggleExpandAll:m}=e,h=(0,y.useRef)(null),g=(0,y.useMemo)(()=>({key:`__expansion`,header:``,width:x,resizable:!1,renderCell:e=>{if((l?l(e):0)>0)return null;let n=a(e);if(!(u?u(e):c(e).length>0))return null;let o=r.has(n);return(0,b.jsx)(_,{isExpanded:o,onToggle:()=>i(n),ariaLabel:t(o?`@khameleon.tableRowExpansion.collapseRow`:`@khameleon.tableRowExpansion.expandRow`)})}}),[r,i,a,c,u,l,t]);return(0,y.useMemo)(()=>({transformColumns(e){let o=e.find(e=>!e.key.startsWith(`__`));h.current=o?.key??null;let s=e.map(e=>{if(e.key!==h.current)return e;let o=e.renderCell;return{...e,renderCell:s=>{let d=l?l(s):0,f=o?o(s):String(s[e.key]??``);if(d===0)return f;let p=(d-1)*S,m=a(s),h=r.has(m),g=(u?u(s):c(s).length>0)?(0,b.jsx)(_,{isExpanded:h,onToggle:()=>i(m),ariaLabel:t(h?`@khameleon.tableRowExpansion.collapseRow`:`@khameleon.tableRowExpansion.expandRow`)}):(0,b.jsx)(`span`,{className:`khameleon1rg5ohu khameleonvy4d1p khameleonxk0z11 khameleon2lah0s`});return(0,b.jsxs)(`div`,{...n(w.indentedCell,p>0&&w.indent(p)),children:[g,f]})}}});return[g,...s]},transformHeaderCell(e,n){if(n.key!==`__expansion`)return e;if(p!==void 0&&m){let n=p===!0;return{...e,content:(0,b.jsx)(`button`,{type:`button`,className:`khameleon3nfvp2 khameleon6s0dn4 khameleonl56j7k khameleonvy4d1p khameleonxk0z11 khameleon1md70p1 khameleon1gs6z28 khameleonx3sua9 khameleon1ypdohk khameleonv9yike khameleonefglzl khameleonx6bhzk khameleon1717udv khameleon2lah0s khameleon1ilzqfv khameleon1cqbx0l`,onClick:()=>m(!n),"aria-label":t(n?`@khameleon.tableRowExpansion.collapseAllRows`:`@khameleon.tableRowExpansion.expandAllRows`),children:(0,b.jsx)(`span`,{...{0:{className:`khameleon3nfvp2 khameleon11xpdln khameleonx6bhzk`},1:{className:`khameleon3nfvp2 khameleon11xpdln khameleonx6bhzk khameleon1iffjtl`}}[!!n<<0],children:(0,b.jsx)(o,{icon:`chevronRight`,size:`xsm`})})})}}return{...e,content:null}},transformBodyCell(e,t,n){if(!(u?u(n):c(n).length>0))return e;let s=a(n),l=r.has(s);return{...e,contextMenuActions:()=>[...d(e.contextMenuActions),{id:`row-expansion-toggle`,group:`row-expansion`,label:l?`Collapse row`:`Expand row`,icon:(0,b.jsx)(o,{icon:l?`chevronDown`:`chevronRight`,size:`xsm`,"aria-hidden":!0}),onSelect:()=>i(s)}]}},transformBodyRow(e,t){if(!f||!(u?u(t):c(t).length>0))return e;let n=a(t);return{...e,htmlProps:{...e.htmlProps,onClick:()=>i(n)},xstyle:[...e.xstyle,w.clickableRow]}}}),[r,a,i,c,l,u,f,p,m,g,t])}var y,b,x,S,C,w;function T(){return(T=e((()=>{y=t(),r(),a(),u(),c(),b=i(),x={type:`pixel`,value:40},S=24,C={kZCmMZ:`khameleonnvo3vl`,kE3dHu:``,kpe85a:``,$$css:!0},w={indentedCell:{k1xSpc:`khameleon78zum5`,kGNEyG:`khameleon6s0dn4`,kOIVth:`khameleonzye2dw`,$$css:!0},indent:e=>[C,{"--x-paddingInlineStart":(e=>typeof e==`number`?e+`px`:e??void 0)(`${e}px`)}],clickableRow:{kkrTdU:`khameleon1ypdohk`,$$css:!0}}})))()}var E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{E=t(),m(),T(),p(),D=i(),O=[{id:`src`,name:`src`,type:`folder`,size:`—`,modified:`2026-06-20`,children:[{id:`src/components`,name:`components`,type:`folder`,size:`—`,modified:`2026-06-19`,children:[{id:`src/components/Button.tsx`,name:`Button.tsx`,type:`file`,size:`4.2 KB`,modified:`2026-06-18`,children:[]},{id:`src/components/Table.tsx`,name:`Table.tsx`,type:`file`,size:`12.8 KB`,modified:`2026-06-20`,children:[]},{id:`src/components/Dialog.tsx`,name:`Dialog.tsx`,type:`file`,size:`6.1 KB`,modified:`2026-06-15`,children:[]}]},{id:`src/utils`,name:`utils`,type:`folder`,size:`—`,modified:`2026-06-17`,children:[{id:`src/utils/format.ts`,name:`format.ts`,type:`file`,size:`1.3 KB`,modified:`2026-06-17`,children:[]},{id:`src/utils/merge.ts`,name:`merge.ts`,type:`file`,size:`0.8 KB`,modified:`2026-06-10`,children:[]}]},{id:`src/index.ts`,name:`index.ts`,type:`file`,size:`0.4 KB`,modified:`2026-06-20`,children:[]}]},{id:`public`,name:`public`,type:`folder`,size:`—`,modified:`2026-06-01`,children:[{id:`public/favicon.ico`,name:`favicon.ico`,type:`file`,size:`15 KB`,modified:`2026-05-20`,children:[]}]},{id:`package.json`,name:`package.json`,type:`file`,size:`1.8 KB`,modified:`2026-06-22`,children:[]},{id:`tsconfig.json`,name:`tsconfig.json`,type:`file`,size:`0.6 KB`,modified:`2026-06-01`,children:[]}],k=[{key:`name`,header:`Name`,width:l(2)},{key:`type`,header:`Type`,width:f(80)},{key:`size`,header:`Size`,width:f(90)},{key:`modified`,header:`Modified`,width:f(120)}],A={title:`Core/TableRowExpansion`,tags:[`autodocs`]},j={render:()=>{let[e,t]=(0,E.useState)(new Set([`src`])),{data:n,expansionConfig:r}=g({baseData:O,getChildren:e=>e.children??[],getRowKey:e=>e.id,expandedKeys:e,setExpandedKeys:t}),i=v(r);return(0,D.jsx)(h,{data:n,columns:k,idKey:`id`,hasHover:!0,plugins:{expansion:i}})}},M={render:()=>{let[e,t]=(0,E.useState)(new Set([`src`,`src/components`])),{data:n,expansionConfig:r}=g({baseData:O,getChildren:e=>e.children??[],getRowKey:e=>e.id,getIsItemExpandable:e=>e.type===`folder`,expandedKeys:e,setExpandedKeys:t}),i=v(r);return(0,D.jsx)(h,{data:n,columns:k,idKey:`id`,hasHover:!0,plugins:{expansion:i}})}},N={render:()=>{let[e,t]=(0,E.useState)(new Set),{data:n,expansionConfig:r}=g({baseData:O,getChildren:e=>e.children??[],getRowKey:e=>e.id,expandedKeys:e,setExpandedKeys:t}),i=v({...r,hasRowClickExpansion:!0});return(0,D.jsx)(h,{data:n,columns:k,idKey:`id`,hasHover:!0,plugins:{expansion:i}})}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [expandedKeys, setExpandedKeys] = useState<Set<string>>(new Set(['src']));

    // The state hook flattens the tree, tracks depth, and derives the
    // expand/collapse + expand-all handlers — no boilerplate in the consumer.
    const {
      data,
      expansionConfig
    } = useTableRowExpansionState<FileNode>({
      baseData: fileTree,
      getChildren: item => item.children ?? [],
      getRowKey: item => item.id,
      expandedKeys,
      setExpandedKeys
    });
    const expansion = useTableRowExpansion(expansionConfig);
    return <Table data={data} columns={columns} idKey="id" hasHover plugins={{
      expansion
    }} />;
  }
}`,...j.parameters?.docs?.source},description:{story:`A file tree rendered as a table with expandable folder rows. Child rows
inherit the parent's columns and are indented based on depth. Click the
chevron (or right-click → "Expand/Collapse row") to expand a folder.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [expandedKeys, setExpandedKeys] = useState<Set<string>>(new Set(['src', 'src/components']));

    // \`getIsItemExpandable\` restricts expandability (and expand-all) to folders.
    const {
      data,
      expansionConfig
    } = useTableRowExpansionState<FileNode>({
      baseData: fileTree,
      getChildren: item => item.children ?? [],
      getRowKey: item => item.id,
      getIsItemExpandable: item => item.type === 'folder',
      expandedKeys,
      setExpandedKeys
    });
    const expansion = useTableRowExpansion(expansionConfig);
    return <Table data={data} columns={columns} idKey="id" hasHover plugins={{
      expansion
    }} />;
  }
}`,...M.parameters?.docs?.source},description:{story:`Only folders are expandable (files have no children). The chevron and
context-menu action are hidden for leaf nodes.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [expandedKeys, setExpandedKeys] = useState<Set<string>>(new Set());
    const {
      data,
      expansionConfig
    } = useTableRowExpansionState<FileNode>({
      baseData: fileTree,
      getChildren: item => item.children ?? [],
      getRowKey: item => item.id,
      expandedKeys,
      setExpandedKeys
    });

    // Opt into row-click expansion by extending the derived config.
    const expansion = useTableRowExpansion({
      ...expansionConfig,
      hasRowClickExpansion: true
    });
    return <Table data={data} columns={columns} idKey="id" hasHover plugins={{
      expansion
    }} />;
  }
}`,...N.parameters?.docs?.source},description:{story:"`hasRowClickExpansion: true` — clicking anywhere on the row toggles expansion\n(in addition to the chevron). The row shows a pointer cursor.",...N.parameters?.docs?.description}}},P=[`InheritedColumns`,`LeafNodesNotExpandable`,`ExpandOnRowClick`]})))()}F();export{N as ExpandOnRowClick,j as InheritedColumns,M as LeafNodesNotExpandable,P as __namedExportsOrder,A as default};