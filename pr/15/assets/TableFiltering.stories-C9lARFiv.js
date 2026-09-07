import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./stylex-Dft6gtPK.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,t as o}from"./Button-CZDOH4n-.js";import{n as s,t as c}from"./Icon-D9gPeCUm.js";import{n as l,t as u}from"./useTranslator-Cp3lSSgn.js";import{n as d,t as f}from"./Popover-rn1U551f.js";import{n as p,t as m}from"./Selector-D7Gly4DE.js";import{_ as h,h as g,n as _,t as v}from"./Table-BjQ0IB6a.js";import{n as ee,t as te}from"./EmptyState-BfP4kouW.js";import{n as ne,t as re}from"./DateInput-DlTg39ru.js";import{n as ie,t as ae}from"./MultiSelector-CUcJ8tWo.js";import{n as oe,t as se}from"./TextInput-PGxUzi-S.js";import{n as ce,t as le}from"./TimeInput-DCle1shr.js";import{n as ue,t as y}from"./NumberInput-BFQrn5_o.js";import{i as b,n as de,r as fe,t as pe}from"./useTableSelectionState-DK-QrF5a.js";import{i as me,n as x,r as he,t as ge}from"./useTableSortableState-BHKkf-8Y.js";import{n as S,t as _e}from"./useTableColumnResize-CvNg4Kel.js";import{n as ve,t as ye}from"./Tokenizer-DyR5HGfw.js";import{n as C,t as be}from"./usePowerSearchConfig-C2cdzP_S.js";function w(e,t){return t?e.operators.find(e=>e.key===t):e.defaultOperator?e.operators.find(t=>t.key===e.defaultOperator):e.operators[0]}function xe(e,t){let n=typeof e==`string`?e:e.field,r=typeof e==`string`?void 0:e.operator,i=t.fields.find(e=>e.key===n);if(!i)return;let a=w(i,r);if(a)return a.value}function T(e,t,n){let r=[];for(let i of t){if(!i.filter)continue;let t=e[i.key];if(t==null)continue;let a=typeof i.filter==`string`?i.filter:i.filter.field,o=typeof i.filter==`string`?void 0:i.filter.operator,s=n.fields.find(e=>e.key===a);if(!s)continue;let c=w(s,o);if(!c)continue;let l=Se(t,c.value);l&&r.push({field:a,operator:c.key,value:l})}return r}function Se(e,t){switch(t.type){case`string`:return typeof e==`string`?{type:`string`,value:e}:void 0;case`integer`:return typeof e==`number`?{type:`integer`,value:e}:void 0;case`float`:return typeof e==`number`?{type:`float`,value:e}:void 0;case`enum`:return typeof e==`string`?{type:`enum`,value:e}:void 0;case`enum_list`:return Array.isArray(e)?{type:`enum_list`,value:e}:void 0;case`date_absolute`:return typeof e==`string`?{type:`date_absolute`,unixSeconds:Math.floor(new Date(e).getTime()/1e3)}:void 0;case`time`:return typeof e==`string`?{type:`time`,value:e}:void 0;case`string_list`:return Array.isArray(e)?{type:`string_list`,value:e}:void 0;case`entity_list`:return Array.isArray(e)?{type:`entity_list`,value:e.map(e=>({id:e,label:e}))}:void 0;case`nested`:case`empty`:case`date_relative`:case`date_range`:case`custom`:return}}function E(){let e=(0,k.use)(j);if(!e)throw Error(`useFilterStore must be used within a Table with filtering`);return e}function Ce({columnKey:e,header:t,size:n,hasClear:r}){let i=l(),a=E(),o=a.getConfig().filters[e],s=typeof o==`string`?o:``;return(0,A.jsx)(se,{label:i(`@khameleon.tableFiltering.filterByColumn`,{header:t}),isLabelHidden:!0,value:s,onChange:t=>{a.getConfig().onFilterChange(e,t===``?null:t)},placeholder:i(`@khameleon.tableFiltering.filterByColumn`,{header:t}),size:n,hasClear:r})}function we({columnKey:e,header:t,operatorValue:n,size:r,hasClear:i}){let a=l(),o=E(),s=o.getConfig().filters[e],c=typeof s==`number`?s:null,u=n.type===`integer`?1:null,d=(0,k.useCallback)(t=>{o.getConfig().onFilterChange(e,t)},[o,e]);return i?(0,A.jsx)(y,{label:a(`@khameleon.tableFiltering.filterByColumn`,{header:t}),isLabelHidden:!0,value:c,onChange:d,placeholder:a(`@khameleon.tableFiltering.filterByColumn`,{header:t}),min:n.minValue??null,max:n.maxValue??null,step:u,size:r,hasClear:!0}):(0,A.jsx)(y,{label:a(`@khameleon.tableFiltering.filterByColumn`,{header:t}),isLabelHidden:!0,value:c,onChange:d,placeholder:a(`@khameleon.tableFiltering.filterByColumn`,{header:t}),min:n.minValue??null,max:n.maxValue??null,step:u,size:r})}function Te({columnKey:e,header:t,operatorValue:n,size:r,hasClear:i}){let a=l(),o=E(),s=o.getConfig().filters[e],c=typeof s==`string`?s:``,u=n.values.map(e=>({value:e.value,label:e.label})),d=(0,k.useCallback)(t=>{o.getConfig().onFilterChange(e,t===``||t==null?null:t)},[o,e]);return i?(0,A.jsx)(m,{label:a(`@khameleon.tableFiltering.filterByColumn`,{header:t}),isLabelHidden:!0,options:u,value:c||null,onChange:d,placeholder:a(`@khameleon.table.filter.allPlaceholder`),size:r,hasClear:!0}):(0,A.jsx)(m,{label:a(`@khameleon.tableFiltering.filterByColumn`,{header:t}),isLabelHidden:!0,options:u,value:c,onChange:d,placeholder:a(`@khameleon.table.filter.allPlaceholder`),size:r})}function Ee({columnKey:e,header:t,operatorValue:n,size:r,hasClear:i}){let a=l(),o=E(),s=o.getConfig().filters[e],c=Array.isArray(s)?s:[],u=n.values.map(e=>({value:e.value,label:e.label}));return(0,A.jsx)(ae,{label:a(`@khameleon.tableFiltering.filterByColumn`,{header:t}),isLabelHidden:!0,options:u,value:c,onChange:t=>{o.getConfig().onFilterChange(e,t.length===0?null:t)},placeholder:a(`@khameleon.table.filter.allPlaceholder`),size:r,hasSelectAll:!0,hasSearch:!1,hasClear:i})}function De({columnKey:e,header:t,size:n,hasClear:r}){let i=l(),a=E(),o=a.getConfig().filters[e];return(0,A.jsx)(re,{label:i(`@khameleon.tableFiltering.filterByColumn`,{header:t}),isLabelHidden:!0,value:o??void 0,onChange:t=>{a.getConfig().onFilterChange(e,t??null)},size:n,hasClear:r})}function Oe({columnKey:e,header:t,size:n,hasClear:r}){let i=l(),a=E(),o=a.getConfig().filters[e];return(0,A.jsx)(le,{label:i(`@khameleon.tableFiltering.filterByColumn`,{header:t}),isLabelHidden:!0,value:o??void 0,onChange:t=>{a.getConfig().onFilterChange(e,t??null)},size:n,hasClear:r})}function ke({columnKey:e,header:t,operatorValue:n,size:r,hasClear:i}){let a=l(),o=E(),s=o.getConfig().filters[e]??[],c=(0,k.useMemo)(()=>({search:async e=>e.trim()?[{id:e.trim(),label:e.trim()}]:[],bootstrap:()=>[]}),[]),u=n.searchSource??c;return(0,A.jsx)(ye,{label:a(`@khameleon.tableFiltering.filterByColumn`,{header:t}),isLabelHidden:!0,searchSource:u,value:s.map(e=>({id:e,label:e})),onChange:t=>{let n=t.map(e=>e.id);o.getConfig().onFilterChange(e,n.length>0?n:null)},size:r,hasClear:i})}function D({columnKey:e,header:t,operatorValue:n,size:r,hasClear:i}){switch(n.type){case`string`:return(0,A.jsx)(Ce,{columnKey:e,header:t,size:r,hasClear:i});case`integer`:case`float`:return(0,A.jsx)(we,{columnKey:e,header:t,operatorValue:n,size:r,hasClear:i});case`enum`:return(0,A.jsx)(Te,{columnKey:e,header:t,operatorValue:n,size:r,hasClear:i});case`enum_list`:return(0,A.jsx)(Ee,{columnKey:e,header:t,operatorValue:n,size:r,hasClear:i});case`date_absolute`:return(0,A.jsx)(De,{columnKey:e,header:t,size:r,hasClear:i});case`time`:return(0,A.jsx)(Oe,{columnKey:e,header:t,size:r,hasClear:i});case`string_list`:case`entity_list`:return(0,A.jsx)(ke,{columnKey:e,header:t,operatorValue:n,size:r,hasClear:i});case`nested`:case`empty`:case`date_relative`:case`date_range`:case`custom`:return null}}function Ae({columnKey:e,header:t,operatorValue:n}){let r=l(),i=E(),a=i.getConfig().filters[e],s=a!=null,[u,d]=(0,k.useState)(!1),[p,m]=(0,k.useState)(null),h=(0,k.useCallback)(e=>{e&&m(a??null),d(e)},[a]),g=(0,k.useCallback)(()=>{i.getConfig().onFilterChange(e,p),d(!1)},[i,e,p]),_=(0,k.useCallback)(()=>{i.getConfig().onFilterChange(e,null),d(!1)},[i,e]),v=(0,k.useMemo)(()=>({getConfig(){return{...i.getConfig(),filters:{...i.getConfig().filters,[e]:p??void 0},onFilterChange:(e,t)=>{m(t)}}}}),[i,e,p,m]);return(0,A.jsx)(f,{isOpen:u,onOpenChange:h,label:r(`@khameleon.tableFiltering.filterByColumn`,{header:t}),placement:`below`,alignment:`start`,content:(0,A.jsx)(j,{value:v,children:(0,A.jsxs)(`div`,{className:`khameleonafpxmx`,children:[(0,A.jsx)(D,{columnKey:e,header:t,operatorValue:n,size:`md`}),(0,A.jsxs)(`div`,{className:`khameleon78zum5 khameleon1txdalj khameleontbrsbv`,children:[(0,A.jsx)(o,{label:r(`@khameleon.table.filter.reset`),variant:`ghost`,size:`sm`,onClick:_}),(0,A.jsx)(`div`,{className:`khameleon98rzlu`}),(0,A.jsx)(o,{label:r(`@khameleon.table.filter.apply`),variant:`primary`,size:`sm`,onClick:g})]})]})}),children:(0,A.jsx)(`button`,{type:`button`,"aria-label":r(`@khameleon.tableFiltering.filterByColumn`,{header:t}),"aria-haspopup":`dialog`,...{0:{className:`khameleon11g6tue khameleon1gs6z28 khameleon1ypdohk khameleon3nfvp2 khameleon6s0dn4 khameleonl56j7k khameleon1717udv khameleonh6dtrn khameleon2lah0s khameleon1xrq5m khameleon17aqpur khameleon3onkmb khameleonof6bs khameleon25t5g8`},1:{className:`khameleon11g6tue khameleon1gs6z28 khameleon1ypdohk khameleon3nfvp2 khameleon6s0dn4 khameleonl56j7k khameleon1717udv khameleonh6dtrn khameleon2lah0s khameleon1xrq5m khameleon17aqpur khameleon1hc1fzr`}}[!!s<<0],children:(0,A.jsx)(c,{icon:`funnel`,size:`xsm`,color:s?`accent`:`secondary`})})})}function je(e){return typeof e.header==`string`?e.header:e.key}function Me({columnKey:e,header:t,operatorValue:n}){return(0,A.jsx)(`div`,{className:`khameleon78zum5 khameleon6s0dn4 khameleon2lah0s`,children:(0,A.jsx)(Ae,{columnKey:e,header:t,operatorValue:n})})}function Ne({columnKey:e,header:t,operatorValue:r}){let i=(0,k.use)(M)===`inline-compact`?N.placeholderCompact:N.placeholder;return(0,A.jsx)(`div`,{className:`khameleon78zum5 khameleondt5ytf khameleonzye2dw khameleoncsaf9d khameleoneuugli`,children:r==null?(0,A.jsx)(`div`,{"aria-hidden":`true`,...n(i)}):(0,A.jsx)(D,{columnKey:e,header:t,operatorValue:r,size:`sm`,hasClear:!0})})}function O(e){let t=(0,k.useRef)(e);t.current=e;let n=(0,k.useRef)(null);n.current??={getConfig(){return t.current}};let r=n.current,i=e.variant??`popover`;return(0,k.useMemo)(()=>({transformColumns:i===`inline`||i===`inline-compact`?e=>e.map(e=>e.filter!=null&&e.width==null?{...e,width:h(1)}:e):void 0,transformTableContext(e){return(0,A.jsx)(j,{value:r,children:(0,A.jsx)(M,{value:i,children:e})})},transformHeaderCell(e,t){let n=t.filter,a=je(t),o=n?xe(n,r.getConfig().searchConfig):void 0;return i===`popover`?o?{...e,after:(0,A.jsxs)(A.Fragment,{children:[e.after,(0,A.jsx)(Me,{columnKey:t.key,header:a,operatorValue:o})]})}:e:{...e,below:(0,A.jsxs)(A.Fragment,{children:[e.below,(0,A.jsx)(Ne,{columnKey:t.key,header:a,operatorValue:o})]})}}}),[r,i])}var k,A,j,M,N;function P(){return(P=e((()=>{k=t(),r(),s(),a(),d(),oe(),ue(),ne(),ce(),p(),ie(),ve(),g(),u(),A=i(),j=(0,k.createContext)(null),j.displayName=`FilterStoreContext`,M=(0,k.createContext)(`popover`),M.displayName=`FilterVariantContext`,N={placeholder:{kZKoxP:`khameleon10w6t97`,$$css:!0},placeholderCompact:{kZKoxP:`khameleon1fgtraw`,$$css:!0}}})))()}function F(e){let[t,n]=(0,I.useState)(e??{});return{filters:t,onFilterChange:(0,I.useCallback)((e,t)=>{n(n=>{if(t==null){let{[e]:t,...r}=n;return r}return{...n,[e]:t}})},[]),clearAll:(0,I.useCallback)(()=>{n({})},[])}}var I;function L(){return(L=e((()=>{I=t()})))()}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Pe;function Fe(){return(Fe=e((()=>{R=t(),_(),P(),L(),fe(),pe(),he(),ge(),_e(),be(),ee(),z=i(),B=[{name:`Alice`,email:`alice@example.com`,role:`Engineer`,department:[`Platform`],level:5},{name:`Bob`,email:`bob@example.com`,role:`Designer`,department:[`Product`],level:4},{name:`Charlie`,email:`charlie@example.com`,role:`Manager`,department:[`Platform`],level:6},{name:`Diana`,email:`diana@example.com`,role:`Engineer`,department:[`Infrastructure`],level:5},{name:`Eve`,email:`eve@example.com`,role:`Admin`,department:[`Operations`],level:3}],V=[{key:`name`,type:`string`,label:`Name`},{key:`email`,type:`string`,label:`Email`},{key:`role`,type:`enum`,label:`Role`,enumValues:[{value:`Engineer`,label:`Engineer`},{value:`Designer`,label:`Designer`},{value:`Manager`,label:`Manager`},{value:`Admin`,label:`Admin`}]},{key:`department`,type:`enum_list`,label:`Department`,enumValues:[{value:`Platform`,label:`Platform`},{value:`Product`,label:`Product`},{value:`Infrastructure`,label:`Infrastructure`},{value:`Operations`,label:`Operations`}]},{key:`level`,type:`number`,label:`Level`}],H={title:`Core/TableFiltering`,tags:[`autodocs`]},U={render:()=>{let{config:e,applyFilters:t}=C(V),{filters:n,onFilterChange:r}=F(),i=[{key:`name`,header:`Name`,filter:`name`},{key:`email`,header:`Email`,filter:`email`},{key:`role`,header:`Role`},{key:`department`,header:`Department`}],a=O({filters:n,onFilterChange:r,searchConfig:e}),o=t(T(n,i,e),B);return(0,z.jsxs)(`div`,{style:{maxWidth:800},children:[(0,z.jsxs)(`p`,{style:{marginBottom:8,fontSize:14,color:`#666`},children:[`Showing `,o.length,`/`,B.length,` rows.`]}),(0,z.jsx)(v,{data:o,columns:i,idKey:`name`,plugins:{filter:a}})]})}},W={render:()=>{let{config:e,applyFilters:t}=C(V),{filters:n,onFilterChange:r}=F(),i=[{key:`name`,header:`Name`},{key:`role`,header:`Role`,filter:`role`},{key:`department`,header:`Department`},{key:`level`,header:`Level`}],a=O({filters:n,onFilterChange:r,searchConfig:e}),o=t(T(n,i,e),B);return(0,z.jsxs)(`div`,{style:{maxWidth:800},children:[(0,z.jsxs)(`p`,{style:{marginBottom:8,fontSize:14,color:`#666`},children:[`Enum → selector. Showing `,o.length,`/`,B.length,` rows.`]}),(0,z.jsx)(v,{data:o,columns:i,idKey:`name`,plugins:{filter:a}})]})}},G={render:()=>{let{config:e,applyFilters:t}=C(V),{filters:n,onFilterChange:r}=F(),i=[{key:`name`,header:`Name`},{key:`role`,header:`Role`},{key:`department`,header:`Department`,filter:`department`},{key:`level`,header:`Level`}],a=O({filters:n,onFilterChange:r,searchConfig:e}),o=t(T(n,i,e),B);return(0,z.jsxs)(`div`,{style:{maxWidth:800},children:[(0,z.jsxs)(`p`,{style:{marginBottom:8,fontSize:14,color:`#666`},children:[`Enum list → multi-selector. Showing `,o.length,`/`,B.length,` `,`rows.`]}),(0,z.jsx)(v,{data:o,columns:i,idKey:`name`,plugins:{filter:a}})]})}},K={render:()=>{let{config:e,applyFilters:t}=C(V),{filters:n,onFilterChange:r}=F(),i=[{key:`name`,header:`Name`},{key:`role`,header:`Role`},{key:`level`,header:`Level`,filter:`level`},{key:`department`,header:`Department`}],a=O({filters:n,onFilterChange:r,searchConfig:e}),o=t(T(n,i,e),B);return(0,z.jsxs)(`div`,{style:{maxWidth:800},children:[(0,z.jsxs)(`p`,{style:{marginBottom:8,fontSize:14,color:`#666`},children:[`Number field → numeric input. Showing `,o.length,`/`,B.length,` `,`rows.`]}),(0,z.jsx)(v,{data:o,columns:i,idKey:`name`,plugins:{filter:a}})]})}},q={render:()=>{let{config:e,applyFilters:t}=C(V),{filters:n,onFilterChange:r}=F(),i=[{key:`name`,header:`Name`,filter:`name`},{key:`role`,header:`Role`,filter:`role`},{key:`level`,header:`Level`,filter:`level`},{key:`department`,header:`Department`}],a=O({filters:n,onFilterChange:r,variant:`inline`,searchConfig:e}),o=t(T(n,i,e),B);return(0,z.jsxs)(`div`,{style:{maxWidth:800},children:[(0,z.jsxs)(`p`,{style:{marginBottom:8,fontSize:14,color:`#666`},children:[`Inline variant. Showing `,o.length,`/`,B.length,` rows.`]}),(0,z.jsx)(v,{data:o,columns:i,idKey:`name`,plugins:{filter:a}})]})}},J={render:()=>{let{config:e,applyFilters:t}=C(V),{filters:n,onFilterChange:r}=F(),[i,a]=(0,R.useState)(new Set),o=[{key:`name`,header:`Name`,filter:`name`},{key:`role`,header:`Role`,filter:`role`},{key:`department`,header:`Department`,filter:`department`},{key:`level`,header:`Level`}],s=O({filters:n,onFilterChange:r,searchConfig:e}),c=t(T(n,o,e),B),{selectionConfig:l}=de({data:c,idKey:`name`,selectedKeys:i,setSelectedKeys:a}),u=b(l);return(0,z.jsxs)(`div`,{style:{maxWidth:800},children:[(0,z.jsxs)(`p`,{style:{marginBottom:8,fontSize:14,color:`#666`},children:[`Filtering + Selection. Selected: `,i.size,` | Showing`,` `,c.length,`/`,B.length,` rows.`]}),(0,z.jsx)(v,{data:c,columns:o,idKey:`name`,plugins:{selection:u,filter:s}})]})}},Y={render:()=>{let{config:e,applyFilters:t}=C(V),{filters:n,onFilterChange:r}=F(),{sortedData:i,sort:a,sortConfig:o,applySort:s}=x({data:B}),c=[{key:`name`,header:`Name`,sortable:!0,filter:`name`},{key:`role`,header:`Role`,sortable:!0,filter:`role`},{key:`level`,header:`Level`,sortable:!0,filter:`level`},{key:`department`,header:`Department`}],l=O({filters:n,onFilterChange:r,searchConfig:e}),u=me(o),d=s(t(T(n,c,e),B));return(0,z.jsxs)(`div`,{style:{maxWidth:800},children:[(0,z.jsxs)(`p`,{style:{marginBottom:8,fontSize:14,color:`#666`},children:[`Filtering + Sorting. Showing `,d.length,`/`,B.length,` rows.`]}),(0,z.jsx)(v,{data:d,columns:c,idKey:`name`,plugins:{sort:u,filter:l}})]})}},X={render:()=>{let{config:e,applyFilters:t}=C(V),{filters:n,onFilterChange:r}=F(),[i,a]=(0,R.useState)({}),o=[{key:`name`,header:`Name`,filter:`name`},{key:`role`,header:`Role`,filter:`role`},{key:`level`,header:`Level`,filter:`level`},{key:`department`,header:`Department`}],s=O({filters:n,onFilterChange:r,variant:`inline`,searchConfig:e}),c=S({columnWidths:i,onColumnResizeEnd:e=>a(t=>({...t,...e})),columns:o}),l=t(T(n,o,e),B);return(0,z.jsxs)(`div`,{style:{maxWidth:800},children:[(0,z.jsxs)(`p`,{style:{marginBottom:8,fontSize:14,color:`#666`},children:[`Inline filtering + Resize. Showing `,l.length,`/`,B.length,` `,`rows.`]}),(0,z.jsx)(v,{data:l,columns:o,idKey:`name`,plugins:{filter:s,resize:c}})]})}},Z={render:()=>{let{config:e,applyFilters:t}=C(V),{filters:n,onFilterChange:r}=F(),{sortConfig:i,applySort:a}=x({data:B}),[o,s]=(0,R.useState)({}),[c,l]=(0,R.useState)(new Set),u=[{key:`name`,header:`Name`,sortable:!0,filter:`name`},{key:`role`,header:`Role`,sortable:!0,filter:`role`},{key:`level`,header:`Level`,sortable:!0,filter:`level`},{key:`department`,header:`Department`,sortable:!0}],d=O({filters:n,onFilterChange:r,searchConfig:e}),f=me(i),p=S({columnWidths:o,onColumnResizeEnd:e=>s(t=>({...t,...e})),columns:u}),m=a(t(T(n,u,e),B)),{selectionConfig:h}=de({data:m,idKey:`name`,selectedKeys:c,setSelectedKeys:l}),g=b(h);return(0,z.jsxs)(`div`,{style:{maxWidth:900},children:[(0,z.jsxs)(`p`,{style:{marginBottom:8,fontSize:14,color:`#666`},children:[`All plugins. Selected: `,c.size,` | Showing `,m.length,`/`,B.length,` rows.`]}),(0,z.jsx)(v,{data:m,columns:u,idKey:`name`,plugins:{selection:g,sort:f,filter:d,resize:p}})]})}},Q={render:()=>{let{config:e,applyFilters:t}=C(V),{filters:n,onFilterChange:r}=F(),i=[{key:`name`,header:`Name`,filter:`name`},{key:`role`,header:`Role`,filter:`role`},{key:`level`,header:`Level`,filter:`level`},{key:`department`,header:`Department`}],a=O({filters:n,onFilterChange:r,variant:`inline`,searchConfig:e}),o=t(T(n,i,e),B);return(0,z.jsxs)(`div`,{style:{maxWidth:800},children:[(0,z.jsxs)(`p`,{style:{marginBottom:8,fontSize:14,color:`#666`},children:[`Inline variant with clear buttons. Type to filter, then click ✕ to clear. Showing `,o.length,`/`,B.length,` rows.`]}),(0,z.jsx)(v,{data:o,columns:i,idKey:`name`,plugins:{filter:a}})]})}},$={render:()=>{let{config:e,applyFilters:t}=C(V),{filters:n,onFilterChange:r}=F(),i=[{key:`name`,header:`Name`,filter:`name`},{key:`role`,header:`Role`,filter:`role`},{key:`level`,header:`Level`,filter:`level`},{key:`department`,header:`Department`}],a=O({filters:n,onFilterChange:r,variant:`inline`,searchConfig:e}),o=t(T(n,i,e),B);return(0,z.jsxs)(`div`,{style:{maxWidth:800},children:[(0,z.jsx)(`p`,{style:{marginBottom:8,fontSize:14,color:`#666`},children:`Try filtering to get zero results; empty state appears.`}),(0,z.jsx)(v,{data:o,columns:i,idKey:`name`,plugins:{filter:a},emptyState:(0,z.jsx)(te,{title:`No results`,description:`Try adjusting your filters to find what you're looking for.`,isCompact:!0})})]})}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      config,
      applyFilters
    } = usePowerSearchConfig(fieldDefs);
    const {
      filters,
      onFilterChange
    } = useTableFilterState();
    const columns: TableColumn<Employee>[] = [{
      key: 'name',
      header: 'Name',
      filter: 'name'
    }, {
      key: 'email',
      header: 'Email',
      filter: 'email'
    }, {
      key: 'role',
      header: 'Role'
    }, {
      key: 'department',
      header: 'Department'
    }];
    const filterPlugin = useTableFiltering<Employee>({
      filters,
      onFilterChange,
      searchConfig: config
    });
    const data = applyFilters(toSearchFilters(filters, columns, config) as PowerSearchFilter[], employees);
    return <div style={{
      maxWidth: 800
    }}>
        <p style={{
        marginBottom: 8,
        fontSize: 14,
        color: '#666'
      }}>
          Showing {data.length}/{employees.length} rows.
        </p>
        <Table data={data} columns={columns} idKey="name" plugins={{
        filter: filterPlugin
      }} />
      </div>;
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      config,
      applyFilters
    } = usePowerSearchConfig(fieldDefs);
    const {
      filters,
      onFilterChange
    } = useTableFilterState();
    const columns: TableColumn<Employee>[] = [{
      key: 'name',
      header: 'Name'
    }, {
      key: 'role',
      header: 'Role',
      filter: 'role'
    }, {
      key: 'department',
      header: 'Department'
    }, {
      key: 'level',
      header: 'Level'
    }];
    const filterPlugin = useTableFiltering<Employee>({
      filters,
      onFilterChange,
      searchConfig: config
    });
    const data = applyFilters(toSearchFilters(filters, columns, config) as PowerSearchFilter[], employees);
    return <div style={{
      maxWidth: 800
    }}>
        <p style={{
        marginBottom: 8,
        fontSize: 14,
        color: '#666'
      }}>
          Enum → selector. Showing {data.length}/{employees.length} rows.
        </p>
        <Table data={data} columns={columns} idKey="name" plugins={{
        filter: filterPlugin
      }} />
      </div>;
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      config,
      applyFilters
    } = usePowerSearchConfig(fieldDefs);
    const {
      filters,
      onFilterChange
    } = useTableFilterState();
    const columns: TableColumn<Employee>[] = [{
      key: 'name',
      header: 'Name'
    }, {
      key: 'role',
      header: 'Role'
    }, {
      key: 'department',
      header: 'Department',
      filter: 'department'
    }, {
      key: 'level',
      header: 'Level'
    }];
    const filterPlugin = useTableFiltering<Employee>({
      filters,
      onFilterChange,
      searchConfig: config
    });
    const data = applyFilters(toSearchFilters(filters, columns, config) as PowerSearchFilter[], employees);
    return <div style={{
      maxWidth: 800
    }}>
        <p style={{
        marginBottom: 8,
        fontSize: 14,
        color: '#666'
      }}>
          Enum list → multi-selector. Showing {data.length}/{employees.length}{' '}
          rows.
        </p>
        <Table data={data} columns={columns} idKey="name" plugins={{
        filter: filterPlugin
      }} />
      </div>;
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      config,
      applyFilters
    } = usePowerSearchConfig(fieldDefs);
    const {
      filters,
      onFilterChange
    } = useTableFilterState();
    const columns: TableColumn<Employee>[] = [{
      key: 'name',
      header: 'Name'
    }, {
      key: 'role',
      header: 'Role'
    }, {
      key: 'level',
      header: 'Level',
      filter: 'level'
    }, {
      key: 'department',
      header: 'Department'
    }];
    const filterPlugin = useTableFiltering<Employee>({
      filters,
      onFilterChange,
      searchConfig: config
    });
    const data = applyFilters(toSearchFilters(filters, columns, config) as PowerSearchFilter[], employees);
    return <div style={{
      maxWidth: 800
    }}>
        <p style={{
        marginBottom: 8,
        fontSize: 14,
        color: '#666'
      }}>
          Number field → numeric input. Showing {data.length}/{employees.length}{' '}
          rows.
        </p>
        <Table data={data} columns={columns} idKey="name" plugins={{
        filter: filterPlugin
      }} />
      </div>;
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      config,
      applyFilters
    } = usePowerSearchConfig(fieldDefs);
    const {
      filters,
      onFilterChange
    } = useTableFilterState();
    const columns: TableColumn<Employee>[] = [{
      key: 'name',
      header: 'Name',
      filter: 'name'
    }, {
      key: 'role',
      header: 'Role',
      filter: 'role'
    }, {
      key: 'level',
      header: 'Level',
      filter: 'level'
    }, {
      key: 'department',
      header: 'Department'
    }];
    const filterPlugin = useTableFiltering<Employee>({
      filters,
      onFilterChange,
      variant: 'inline',
      searchConfig: config
    });
    const data = applyFilters(toSearchFilters(filters, columns, config) as PowerSearchFilter[], employees);
    return <div style={{
      maxWidth: 800
    }}>
        <p style={{
        marginBottom: 8,
        fontSize: 14,
        color: '#666'
      }}>
          Inline variant. Showing {data.length}/{employees.length} rows.
        </p>
        <Table data={data} columns={columns} idKey="name" plugins={{
        filter: filterPlugin
      }} />
      </div>;
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      config,
      applyFilters
    } = usePowerSearchConfig(fieldDefs);
    const {
      filters,
      onFilterChange
    } = useTableFilterState();
    const [selectedKeys, setSelectedKeys] = useState(new Set<string>());
    const columns: TableColumn<Employee>[] = [{
      key: 'name',
      header: 'Name',
      filter: 'name'
    }, {
      key: 'role',
      header: 'Role',
      filter: 'role'
    }, {
      key: 'department',
      header: 'Department',
      filter: 'department'
    }, {
      key: 'level',
      header: 'Level'
    }];
    const filterPlugin = useTableFiltering<Employee>({
      filters,
      onFilterChange,
      searchConfig: config
    });
    const data = applyFilters(toSearchFilters(filters, columns, config) as PowerSearchFilter[], employees);
    const {
      selectionConfig
    } = useTableSelectionState({
      data,
      idKey: 'name',
      selectedKeys,
      setSelectedKeys
    });
    const selectionPlugin = useTableSelection<Employee>(selectionConfig);
    return <div style={{
      maxWidth: 800
    }}>
        <p style={{
        marginBottom: 8,
        fontSize: 14,
        color: '#666'
      }}>
          Filtering + Selection. Selected: {selectedKeys.size} | Showing{' '}
          {data.length}/{employees.length} rows.
        </p>
        <Table data={data} columns={columns} idKey="name" plugins={{
        selection: selectionPlugin,
        filter: filterPlugin
      }} />
      </div>;
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      config,
      applyFilters
    } = usePowerSearchConfig(fieldDefs);
    const {
      filters,
      onFilterChange
    } = useTableFilterState();
    const {
      sortedData: _unused,
      sort: _sort,
      sortConfig,
      applySort
    } = useTableSortableState<Employee>({
      data: employees
    });
    const columns: TableColumn<Employee>[] = [{
      key: 'name',
      header: 'Name',
      sortable: true,
      filter: 'name'
    }, {
      key: 'role',
      header: 'Role',
      sortable: true,
      filter: 'role'
    }, {
      key: 'level',
      header: 'Level',
      sortable: true,
      filter: 'level'
    }, {
      key: 'department',
      header: 'Department'
    }];
    const filterPlugin = useTableFiltering<Employee>({
      filters,
      onFilterChange,
      searchConfig: config
    });
    const sortPlugin = useTableSortable<Employee>(sortConfig);
    const filtered = applyFilters(toSearchFilters(filters, columns, config) as PowerSearchFilter[], employees);
    const data = applySort(filtered);
    return <div style={{
      maxWidth: 800
    }}>
        <p style={{
        marginBottom: 8,
        fontSize: 14,
        color: '#666'
      }}>
          Filtering + Sorting. Showing {data.length}/{employees.length} rows.
        </p>
        <Table data={data} columns={columns} idKey="name" plugins={{
        sort: sortPlugin,
        filter: filterPlugin
      }} />
      </div>;
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      config,
      applyFilters
    } = usePowerSearchConfig(fieldDefs);
    const {
      filters,
      onFilterChange
    } = useTableFilterState();
    const [columnWidths, setColumnWidths] = useState<Record<string, number>>({});
    const columns: TableColumn<Employee>[] = [{
      key: 'name',
      header: 'Name',
      filter: 'name'
    }, {
      key: 'role',
      header: 'Role',
      filter: 'role'
    }, {
      key: 'level',
      header: 'Level',
      filter: 'level'
    }, {
      key: 'department',
      header: 'Department'
    }];
    const filterPlugin = useTableFiltering<Employee>({
      filters,
      onFilterChange,
      variant: 'inline',
      searchConfig: config
    });
    const resizePlugin = useTableColumnResize<Employee>({
      columnWidths,
      onColumnResizeEnd: updates => setColumnWidths(prev => ({
        ...prev,
        ...updates
      })),
      columns: columns as TableColumn<Record<string, unknown>>[]
    });
    const data = applyFilters(toSearchFilters(filters, columns, config) as PowerSearchFilter[], employees);
    return <div style={{
      maxWidth: 800
    }}>
        <p style={{
        marginBottom: 8,
        fontSize: 14,
        color: '#666'
      }}>
          Inline filtering + Resize. Showing {data.length}/{employees.length}{' '}
          rows.
        </p>
        <Table data={data} columns={columns} idKey="name" plugins={{
        filter: filterPlugin,
        resize: resizePlugin
      }} />
      </div>;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      config,
      applyFilters
    } = usePowerSearchConfig(fieldDefs);
    const {
      filters,
      onFilterChange
    } = useTableFilterState();
    const {
      sortConfig,
      applySort
    } = useTableSortableState<Employee>({
      data: employees
    });
    const [columnWidths, setColumnWidths] = useState<Record<string, number>>({});
    const [selectedKeys, setSelectedKeys] = useState(new Set<string>());
    const columns: TableColumn<Employee>[] = [{
      key: 'name',
      header: 'Name',
      sortable: true,
      filter: 'name'
    }, {
      key: 'role',
      header: 'Role',
      sortable: true,
      filter: 'role'
    }, {
      key: 'level',
      header: 'Level',
      sortable: true,
      filter: 'level'
    }, {
      key: 'department',
      header: 'Department',
      sortable: true
    }];
    const filterPlugin = useTableFiltering<Employee>({
      filters,
      onFilterChange,
      searchConfig: config
    });
    const sortPlugin = useTableSortable<Employee>(sortConfig);
    const resizePlugin = useTableColumnResize<Employee>({
      columnWidths,
      onColumnResizeEnd: updates => setColumnWidths(prev => ({
        ...prev,
        ...updates
      })),
      columns: columns as TableColumn<Record<string, unknown>>[]
    });
    const filtered = applyFilters(toSearchFilters(filters, columns, config) as PowerSearchFilter[], employees);
    const data = applySort(filtered);
    const {
      selectionConfig
    } = useTableSelectionState({
      data,
      idKey: 'name',
      selectedKeys,
      setSelectedKeys
    });
    const selectionPlugin = useTableSelection<Employee>(selectionConfig);
    return <div style={{
      maxWidth: 900
    }}>
        <p style={{
        marginBottom: 8,
        fontSize: 14,
        color: '#666'
      }}>
          All plugins. Selected: {selectedKeys.size} | Showing {data.length}/
          {employees.length} rows.
        </p>
        <Table data={data} columns={columns} idKey="name" plugins={{
        selection: selectionPlugin,
        sort: sortPlugin,
        filter: filterPlugin,
        resize: resizePlugin
      }} />
      </div>;
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      config,
      applyFilters
    } = usePowerSearchConfig(fieldDefs);
    const {
      filters,
      onFilterChange
    } = useTableFilterState();
    const columns: TableColumn<Employee>[] = [{
      key: 'name',
      header: 'Name',
      filter: 'name'
    }, {
      key: 'role',
      header: 'Role',
      filter: 'role'
    }, {
      key: 'level',
      header: 'Level',
      filter: 'level'
    }, {
      key: 'department',
      header: 'Department'
    }];
    const filterPlugin = useTableFiltering<Employee>({
      filters,
      onFilterChange,
      variant: 'inline',
      searchConfig: config
    });
    const data = applyFilters(toSearchFilters(filters, columns, config) as PowerSearchFilter[], employees);
    return <div style={{
      maxWidth: 800
    }}>
        <p style={{
        marginBottom: 8,
        fontSize: 14,
        color: '#666'
      }}>
          Inline variant with clear buttons. Type to filter, then click ✕ to
          clear. Showing {data.length}/{employees.length} rows.
        </p>
        <Table data={data} columns={columns} idKey="name" plugins={{
        filter: filterPlugin
      }} />
      </div>;
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      config,
      applyFilters
    } = usePowerSearchConfig(fieldDefs);
    const {
      filters,
      onFilterChange
    } = useTableFilterState();
    const columns: TableColumn<Employee>[] = [{
      key: 'name',
      header: 'Name',
      filter: 'name'
    }, {
      key: 'role',
      header: 'Role',
      filter: 'role'
    }, {
      key: 'level',
      header: 'Level',
      filter: 'level'
    }, {
      key: 'department',
      header: 'Department'
    }];
    const filterPlugin = useTableFiltering<Employee>({
      filters,
      onFilterChange,
      variant: 'inline',
      searchConfig: config
    });
    const data = applyFilters(toSearchFilters(filters, columns, config) as PowerSearchFilter[], employees);
    return <div style={{
      maxWidth: 800
    }}>
        <p style={{
        marginBottom: 8,
        fontSize: 14,
        color: '#666'
      }}>
          Try filtering to get zero results; empty state appears.
        </p>
        <Table data={data} columns={columns} idKey="name" plugins={{
        filter: filterPlugin
      }} emptyState={<EmptyStateComponent title="No results" description="Try adjusting your filters to find what you're looking for." isCompact />} />
      </div>;
  }
}`,...$.parameters?.docs?.source}}},Pe=[`TextFilter`,`SelectorFilter`,`MultiSelectorFilter`,`NumberFilter`,`InlineVariant`,`WithSelection`,`WithSorting`,`WithResize`,`WithAllPlugins`,`InlineWithClear`,`EmptyState`]})))()}Fe();export{$ as EmptyState,q as InlineVariant,Q as InlineWithClear,G as MultiSelectorFilter,K as NumberFilter,W as SelectorFilter,U as TextFilter,Z as WithAllPlugins,X as WithResize,J as WithSelection,Y as WithSorting,Pe as __namedExportsOrder,H as default};