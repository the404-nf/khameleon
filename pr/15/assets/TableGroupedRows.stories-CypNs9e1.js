import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Icon-D9gPeCUm.js";import{n as a,t as o}from"./useTranslator-Cp3lSSgn.js";import{_ as s,g as c,h as l,n as u,t as d}from"./Table-BjQ0IB6a.js";function f(e){return typeof e==`object`&&!!e&&e[_]===!0}function p(e,t){return new Proxy({[_]:!0,groupKey:e,count:t},v)}function m(e){let t=a(),{data:n,groupBy:r,collapsedGroups:o,onToggleGroup:s,renderGroupHeader:c,getRowKey:l,groupOrder:u}=e,d=(0,h.useMemo)(()=>{if(n.length===0)return[];let e=new Map;for(let t of n){let n=r(t),i=e.get(n);i?i.push(t):e.set(n,[t])}let t=[...e.keys()];if(u&&u.length>0){let n=u.filter(t=>e.has(t)),r=t.filter(e=>!u.includes(e));t=[...n,...r]}let i=[];for(let n of t){let t=e.get(n)??[];i.push(p(n,t.length)),o.has(n)||i.push(...t)}return i},[n,r,o,u]),m=(0,h.useMemo)(()=>{if(l)return null;let e=new Map;for(let t=0;t<d.length;t++)e.set(d[t],t);return e},[d,l]),_=(0,h.useCallback)(e=>f(e)?`__group_${e.groupKey}`:l?l(e):String(m?.get(e)??-1),[l,m]);return{plugin:(0,h.useMemo)(()=>({transformBodyRow(e,n){if(!f(n))return e;let r=n,a=o.has(r.groupKey),l=()=>s(r.groupKey),u=c?c(r.groupKey,r.count,a):(0,g.jsxs)(`span`,{className:`khameleon2mo6ok khameleon1tgivj0`,children:[r.groupKey,` `,(0,g.jsxs)(`span`,{className:`khameleon1sodnla khameleonv1l7n4`,children:[`(`,r.count,`)`]})]});return{...e,htmlProps:{...e.htmlProps,onClick:l,"aria-expanded":!a},xstyle:[...e.xstyle,y.headerRow],children:(0,g.jsx)(`td`,{colSpan:999,className:`khameleonce4md1 khameleon1vsv5vr khameleon1t818jl`,children:(0,g.jsxs)(`span`,{className:`khameleon78zum5 khameleon6s0dn4 khameleonzye2dw`,children:[(0,g.jsx)(`button`,{type:`button`,className:`khameleon3nfvp2 khameleon6s0dn4 khameleonl56j7k khameleon2lah0s khameleon1717udv khameleon1ghz6dp khameleon1md70p1 khameleon1gs6z28 khameleon1ypdohk khameleonv9yike khameleon1cqbx0l`,onClick:e=>{e.stopPropagation(),l()},"aria-label":t(a?`@khameleon.tableGroupedRows.expandGroup`:`@khameleon.tableGroupedRows.collapseGroup`,{groupKey:r.groupKey}),"aria-expanded":!a,children:(0,g.jsx)(`span`,{...{0:{className:`khameleon3nfvp2 khameleon11xpdln khameleonx6bhzk`},1:{className:`khameleon3nfvp2 khameleon11xpdln khameleonx6bhzk khameleon1iffjtl`}}[!a<<0],children:(0,g.jsx)(i,{icon:`chevronRight`,size:`xsm`})})}),u]})})}}}),[o,s,c,t]),data:d,idKey:_}}var h,g,_,v,y;function b(){return(b=e((()=>{h=t(),r(),o(),g=n(),_=Symbol(`tableGroupHeader`),v={get(e,t){return t===_||t===`groupKey`||t===`count`||t in e?e[t]:``}},y={headerRow:{kkrTdU:`khameleon1ypdohk`,kfSwDN:`khameleon87ps6o`,kWkggS:`khameleonwmxj5m`,kt9PQ7:`khameleonso031l`,kfdmCh:`khameleon1q0q8m5`,kL6WhQ:`khameleonw8gpjh`,$$css:!0}}})))()}function x(e=[]){let[t,n]=(0,S.useState)(new Set(e));return{collapsedGroups:t,onToggleGroup:(0,S.useCallback)(e=>{n(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},[])}}var S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{S=t(),u(),b(),l(),C=n(),w=[{id:`1`,name:`Ava Chen`,team:`Design Systems`,role:`Staff Eng`},{id:`2`,name:`Liam Park`,team:`Design Systems`,role:`Engineer`},{id:`3`,name:`Zoe Vega`,team:`Design Systems`,role:`Manager`},{id:`4`,name:`Max Ross`,team:`Infra`,role:`Senior Eng`},{id:`5`,name:`Mia Cole`,team:`Infra`,role:`Engineer`},{id:`6`,name:`Leo Nash`,team:`Growth`,role:`PM`}],T=[{key:`name`,header:`Name`,width:s(2)},{key:`role`,header:`Role`,width:c(140)}],E={title:`Core/TableGroupedRows`,tags:[`autodocs`]},D={render:()=>{let{collapsedGroups:e,onToggleGroup:t}=x(),n=m({data:w,groupBy:e=>e.team,collapsedGroups:e,onToggleGroup:t,getRowKey:e=>e.id});return(0,C.jsx)(d,{data:n.data,columns:T,idKey:n.idKey,hasHover:!0,plugins:{grouped:n.plugin}})}},O={render:()=>{let{collapsedGroups:e,onToggleGroup:t}=x([`Infra`]),n=m({data:w,groupBy:e=>e.team,collapsedGroups:e,onToggleGroup:t,getRowKey:e=>e.id});return(0,C.jsx)(d,{data:n.data,columns:T,idKey:n.idKey,hasHover:!0,plugins:{grouped:n.plugin}})}},k={render:()=>{let{collapsedGroups:e,onToggleGroup:t}=x(),n=m({data:w,groupBy:e=>e.team,collapsedGroups:e,onToggleGroup:t,getRowKey:e=>e.id,groupOrder:[`Growth`,`Infra`],renderGroupHeader:(e,t,n)=>(0,C.jsxs)(`span`,{children:[(0,C.jsx)(`strong`,{children:e}),` — `,t,` `,t===1?`person`:`people`,n?` (hidden)`:``]})});return(0,C.jsx)(d,{data:n.data,columns:T,idKey:n.idKey,hasHover:!0,plugins:{grouped:n.plugin}})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      collapsedGroups,
      onToggleGroup
    } = useCollapsed();
    const grouped = useTableGroupedRows<Person>({
      data: people,
      groupBy: p => p.team,
      collapsedGroups,
      onToggleGroup,
      getRowKey: p => p.id
    });
    return <Table data={grouped.data} columns={columns} idKey={grouped.idKey} hasHover plugins={{
      grouped: grouped.plugin
    }} />;
  }
}`,...D.parameters?.docs?.source},description:{story:`Rows are grouped into collapsible sections by \`groupBy\`. Each section gets a
full-width header with a chevron, the group label, and a member count.
Click a header (or its chevron) to collapse/expand that group.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      collapsedGroups,
      onToggleGroup
    } = useCollapsed(['Infra']);
    const grouped = useTableGroupedRows<Person>({
      data: people,
      groupBy: p => p.team,
      collapsedGroups,
      onToggleGroup,
      getRowKey: p => p.id
    });
    return <Table data={grouped.data} columns={columns} idKey={grouped.idKey} hasHover plugins={{
      grouped: grouped.plugin
    }} />;
  }
}`,...O.parameters?.docs?.source},description:{story:'Groups can start collapsed — pass their keys in the initial `collapsedGroups`\nset. Here "Infra" begins collapsed.',...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      collapsedGroups,
      onToggleGroup
    } = useCollapsed();
    const grouped = useTableGroupedRows<Person>({
      data: people,
      groupBy: p => p.team,
      collapsedGroups,
      onToggleGroup,
      getRowKey: p => p.id,
      groupOrder: ['Growth', 'Infra'],
      renderGroupHeader: (key, count, collapsed) => <span>
          <strong>{key}</strong> — {count} {count === 1 ? 'person' : 'people'}
          {collapsed ? ' (hidden)' : ''}
        </span>
    });
    return <Table data={grouped.data} columns={columns} idKey={grouped.idKey} hasHover plugins={{
      grouped: grouped.plugin
    }} />;
  }
}`,...k.parameters?.docs?.source},description:{story:"`groupOrder` pins specific groups to the front; `renderGroupHeader`\ncustomizes the header content shown to the right of the chevron.",...k.parameters?.docs?.description}}},A=[`Default`,`InitiallyCollapsed`,`CustomOrderAndHeader`]})))()}j();export{k as CustomOrderAndHeader,D as Default,O as InitiallyCollapsed,A as __namedExportsOrder,E as default};