import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./stylex-Dft6gtPK.js";import{n as i}from"./mergeProps-JRyAvMxc.js";import{n as a}from"./mergeRefs-CPqjs56a.js";import{n as o,t as s}from"./themeProps-DRQoVAIO.js";import{b as c,x as l,y as u}from"./useTruncation-OBVzrhuI.js";import{t as d}from"./jsx-runtime-DeHZSEgm.js";import{n as f,t as p}from"./useIsomorphicLayoutEffect-vnms8l8s.js";function m(e,t={}){let{gap:n=0,minVisibleItems:r=0,collapseFrom:i=`end`,behavior:a=`observeSelf`}=t,o=a===`observeParent`,[s,u]=(0,h.useState)(e),d=(0,h.useRef)(null),p=(0,h.useRef)(null),m=(0,h.useRef)(null),g=(0,h.useCallback)(()=>{let t=d.current,a=p.current;if(!t||!a)return;let s;if(o&&t.parentElement){let e=t.parentElement,n=getComputedStyle(e);s=e.clientWidth-parseFloat(n.paddingLeft)-parseFloat(n.paddingRight)}else s=t.offsetWidth;let c=Array.from(a.children),l=c.length>e,f=l?c.slice(0,e):c,m=l?c[c.length-1].offsetWidth:0;if(f.length===0){u(0);return}let h=f.map(e=>e.offsetWidth),g=0,_=0,v=i===`end`?h:[...h].reverse();for(let e=0;e<v.length;e++){let t=v[e],i=e>0?n:0,a=g+t+i;if(a+(e===v.length-1?0:m+(_>0||m>0?n:0))>s&&_>=r)break;g=a,_++}u(Math.max(Math.min(_,e),r))},[e,n,r,i,o]),_=(0,h.useCallback)(e=>{if(d.current=e,m.current&&=(l(m.current),null),e){let t=o&&e.parentElement?e.parentElement:e;c(t,()=>{g()}),m.current=t}},[g,o]),v=(0,h.useCallback)(e=>{p.current=e,e&&g()},[g]);return f(()=>{g()},[g]),{containerRef:_,measureRef:v,visibleCount:s,hasOverflow:s<e}}var h;function g(){return(g=e((()=>{h=t(),p(),u()})))()}function _({children:e,gap:t=2,minVisibleItems:r=0,collapseFrom:s=`end`,behavior:c=`observeSelf`,overflowRenderer:l,xstyle:u,className:d,style:f,ref:p,...h}){let g=v.Children.toArray(e),_=g.length,C=S[t],w=c===`observeParent`,{containerRef:T,measureRef:E,visibleCount:D,hasOverflow:O}=m(_,{gap:C,minVisibleItems:r,collapseFrom:s,behavior:c}),k=g.map((e,t)=>({child:e,index:t})),A,j;s===`end`?(A=k.slice(0,D),j=k.slice(D)):(A=k.slice(_-D),j=k.slice(0,_-D));let M=l?.(k);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(`div`,{ref:E,"aria-hidden":`true`,inert:!0,...n(b.measureContainer,x[t]),children:[g,M!=null&&(0,y.jsx)(`div`,{className:`khameleon3nfvp2`,children:M})]}),(0,y.jsxs)(`div`,{ref:a(p,T),...i(o(`overflow-list`),n(b.container,x[t],w&&O&&b.fillParent,u),d,f),...h,children:[s===`start`&&O&&l?.(j),A.map(({child:e})=>e),s===`end`&&O&&l?.(j)]})]})}var v,y,b,x,S;function C(){return(C=e((()=>{v=t(),r(),g(),s(),y=d(),b={container:{k1xSpc:`khameleon78zum5`,kGNEyG:`khameleon6s0dn4`,kVQacm:`khameleonb3r6kr`,khDVqt:`khameleonuxw1ft`,k7Eaqz:`khameleoneuugli`,$$css:!0},fillParent:{kzqmXN:`khameleonh8yej3`,$$css:!0},measureContainer:{kVAEAm:`khameleon10l6tqk`,k33iCy:`khameleonlshs6z`,kZKoxP:`khameleonqtp20y`,kVQacm:`khameleonb3r6kr`,k1xSpc:`khameleon78zum5`,kGNEyG:`khameleon6s0dn4`,khDVqt:`khameleonuxw1ft`,kfzvcC:`khameleon47corl`,$$css:!0}},x={0:{kOIVth:`khameleonsn7fz1`,khm7nJ:null,k1C7PZ:null,$$css:!0},1:{kOIVth:`khameleonzye2dw`,khm7nJ:null,k1C7PZ:null,$$css:!0},2:{kOIVth:`khameleon1txdalj`,khm7nJ:null,k1C7PZ:null,$$css:!0},3:{kOIVth:`khameleonjcht0a`,khm7nJ:null,k1C7PZ:null,$$css:!0},4:{kOIVth:`khameleon18g69wz`,khm7nJ:null,k1C7PZ:null,$$css:!0},5:{kOIVth:`khameleon9mgr7n`,khm7nJ:null,k1C7PZ:null,$$css:!0},6:{kOIVth:`khameleon1qh66ti`,khm7nJ:null,k1C7PZ:null,$$css:!0},8:{kOIVth:`khameleon4t41sb`,khm7nJ:null,k1C7PZ:null,$$css:!0},10:{kOIVth:`khameleon3hoi3v`,khm7nJ:null,k1C7PZ:null,$$css:!0},"0.5":{kOIVth:`khameleon1lsbc85`,khm7nJ:null,k1C7PZ:null,$$css:!0},"1.5":{kOIVth:`khameleon1s4dlld`,khm7nJ:null,k1C7PZ:null,$$css:!0}},S={0:0,.5:2,1:4,1.5:6,2:8,3:12,4:16,5:20,6:24,8:32,10:40},_.displayName=`OverflowList`,_.__docgenInfo={description:`A horizontal list that hides items that don't fit and shows an overflow indicator.

Uses a hidden measurement container to determine which items fit without
causing visual flickering. The overflow indicator is also measured
automatically so no manual width value is needed.

@example
\`\`\`
<OverflowList
  gap={2}
  overflowRenderer={(items) => (
    <Button label={\`+\${items.length} more\`} variant="ghost" />
  )}>
  <Button label="Action 1" />
  <Button label="Action 2" />
  <Button label="Action 3" />
  <Button label="Action 4" />
</OverflowList>
\`\`\``,methods:[],displayName:`OverflowList`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:`Ref forwarded to the visible container element`},children:{required:!0,tsType:{name:`ReactNode`},description:`The items to render. Each child should be a single element.`},gap:{required:!1,tsType:{name:`union`,raw:`0 | 0.5 | 1 | 1.5 | 2 | 3 | 4 | 5 | 6 | 8 | 10`,elements:[{name:`literal`,value:`0`},{name:`literal`,value:`0.5`},{name:`literal`,value:`1`},{name:`literal`,value:`1.5`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`},{name:`literal`,value:`6`},{name:`literal`,value:`8`},{name:`literal`,value:`10`}]},description:`Gap between items as a spacing token step.
Accepts: 0, 0.5, 1, 1.5, 2, 3, 4, 5, 6, 8, 10
@default 2`,defaultValue:{value:`2`,computed:!1}},minVisibleItems:{required:!1,tsType:{name:`number`},description:`Minimum number of items to always show.
@default 0`,defaultValue:{value:`0`,computed:!1}},collapseFrom:{required:!1,tsType:{name:`union`,raw:`'start' | 'end'`,elements:[{name:`literal`,value:`'start'`},{name:`literal`,value:`'end'`}]},description:`Which end to collapse items from.
@default 'end'`,defaultValue:{value:`'end'`,computed:!1}},behavior:{required:!1,tsType:{name:`union`,raw:`'observeParent' | 'observeSelf'`,elements:[{name:`literal`,value:`'observeParent'`},{name:`literal`,value:`'observeSelf'`}]},description:`Which element to observe for overflow calculations.
- \`'observeSelf'\`: uses the container's own width (default)
- \`'observeParent'\`: observes the parent element's content width
  for overflow calculations. This keeps the overflow list
  content-sized while still detecting available space for
  grow-back. Siblings that don't fit can wrap and be clipped by
  the parent's overflow.
@default 'observeSelf'`,defaultValue:{value:`'observeSelf'`,computed:!1}},overflowRenderer:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(overflowItems: OverflowItem[]) => ReactNode`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`OverflowItem`}],raw:`OverflowItem[]`},name:`overflowItems`}],return:{name:`ReactNode`}}},description:`Render function for the overflow indicator. Receives the list of
items that are not visible, each with its original index. Only called
when there are overflowing items.

The indicator is automatically measured in a hidden container to
reserve the correct amount of space.

@example
\`\`\`
const labels = ['Save', 'Edit', 'Share'];
<OverflowList
  overflowRenderer={(overflowItems) => (
    <DropdownMenu
      button={{label: \`+\${overflowItems.length}\`, variant: 'ghost'}}
      items={overflowItems.map(({index}) => ({ label: labels[index] }))}
    />
  )}>
  {labels.map(l => <Button key={l} label={l} />)}
</OverflowList>
\`\`\``}},composes:[`Omit`]}})))()}export{C as n,_ as t};