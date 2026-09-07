import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Heading-CAKcIsWt.js";import{n as a,t as o}from"./Stack-C-n3letD.js";import{n as s,t as c}from"./ChartLegend-CEsWUdbm.js";import{n as l,t as u}from"./useChartColors-H8s0ageN.js";function d(){let e=(0,f.useContext)(p);if(!e)throw Error(`Radial components must be used inside <RadialChart>`);return e}var f,p,m;function h(){return(h=e((()=>{f=t(),p=(0,f.createContext)(null),m=p.Provider})))()}function g({data:e,height:t=400,axes:n,valueKey:r,labelKey:i,innerRadius:a=0,padAngle:o=.02,children:s}){let c=(0,_.useRef)(null),[l,u]=(0,_.useState)(0);(0,_.useLayoutEffect)(()=>{if(!c.current)return;let e=new ResizeObserver(e=>{let t=e[0];t&&u(t.contentRect.width)});return e.observe(c.current),()=>e.disconnect()},[]);let d=Math.min(l,t),f=l/2,p=t/2,h=d/2-40,g=h*a,y=n?`spider`:`pie`,b=(0,_.useMemo)(()=>{if(!n||n.length===0)return{};let t=new Map,r=2*Math.PI/n.length;n.forEach((e,n)=>{t.set(e,-Math.PI/2+r*n)});let i=new Map;for(let t of n){let n=1/0,r=-1/0;for(let i of e){let e=i[t];typeof e==`number`&&(e<n&&(n=e),e>r&&(r=e))}n>0&&(n=0),i.set(t,[n,r])}return{axes:n,angleByAxis:t,radiusScale:e=>g+e*(h-g),axisDomains:i}},[n,e,h,g]),x=(0,_.useMemo)(()=>{if(!r)return{};let t=e.reduce((e,t)=>{let n=t[r];return e+(typeof n==`number`?n:0)},0);if(t===0)return{slices:[]};let n=o*e.length,a=2*Math.PI-n,s=-Math.PI/2;return{slices:e.map(e=>{let n=typeof e[r]==`number`?e[r]:0,c=n/t,l=c*a,u={key:String(i?e[i]:n),value:n,startAngle:s,endAngle:s+l,percentage:c};return s+=l+o,u})}},[e,r,i,o]),S=(0,_.useMemo)(()=>({cx:f,cy:p,radius:h,innerRadius:g,data:e,mode:y,...b,...x}),[f,p,h,g,e,y,b,x]);return(0,v.jsx)(`div`,{ref:c,style:{width:`100%`},children:l>0&&(0,v.jsx)(`svg`,{width:l,height:t,children:(0,v.jsx)(m,{value:S,children:s})})})}var _,v;function y(){return(y=e((()=>{_=t(),h(),v=n(),g.__docgenInfo={description:`Root radial chart container. Computes angular/radial scales and provides
them to children via context.

@example
\`\`\`
<RadialChart data={data} axes={['speed', 'handling', 'comfort']} height={400}>
  <RadialGrid rings={5} />
  <RadialArea dataKey="modelA" color={colors[0]} />
  <RadialAxis />
</RadialChart>
<RadialChart data={data} valueKey="revenue" labelKey="region" height={400}>
  <RadialSlice />
</RadialChart>
<RadialChart data={data} valueKey="revenue" labelKey="region" innerRadius={0.6} height={400}>
  <RadialSlice />
</RadialChart>
\`\`\``,methods:[],displayName:`RadialChart`,props:{data:{required:!0,tsType:{name:`Array`,elements:[{name:`Record`,elements:[{name:`string`},{name:`unknown`}],raw:`Record<string, unknown>`}],raw:`Record<string, unknown>[]`},description:`The dataset`},height:{required:!1,tsType:{name:`number`},description:`Chart height in pixels. Width is responsive.`,defaultValue:{value:`400`,computed:!1}},axes:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Spider mode: array of axis keys (each key is a dimension).
When provided, the chart operates in spider mode.`},valueKey:{required:!1,tsType:{name:`string`},description:`Pie/donut mode: data key containing the numeric value for each slice.
When provided (without axes), the chart operates in pie mode.`},labelKey:{required:!1,tsType:{name:`string`},description:`Pie/donut mode: data key for the slice label.`},innerRadius:{required:!1,tsType:{name:`number`},description:`Inner radius as a fraction of outer radius (0-1).
0 = full pie/spider, 0.6 = donut. Default: 0.`,defaultValue:{value:`0`,computed:!1}},padAngle:{required:!1,tsType:{name:`number`},description:`Padding between pie slices in radians. Default: 0.02.`,defaultValue:{value:`0.02`,computed:!1}},interactive:{required:!1,tsType:{name:`boolean`},description:`Enable touch interaction mode — blocks scroll on mobile.`},children:{required:!0,tsType:{name:`ReactNode`},description:``}}}})))()}function b({rings:e=5}){let{cx:t,cy:n,radius:r,innerRadius:i,axes:a,angleByAxis:o,radiusScale:s}=d();return!a||!o||!s?null:(0,x.jsxs)(`g`,{children:[Array.from({length:e},(r,i)=>{let c=(i+1)/e,l=s(c),u=a.map(e=>{let r=o.get(e);return r==null?``:`${t+Math.cos(r)*l},${n+Math.sin(r)*l}`}).filter(Boolean).join(` `);return(0,x.jsx)(`polygon`,{points:u,fill:`none`,stroke:`var(--color-border)`,strokeOpacity:.3,strokeWidth:1},i)}),a.map(e=>{let a=o.get(e);return a==null?null:(0,x.jsx)(`line`,{x1:t+Math.cos(a)*i,y1:n+Math.sin(a)*i,x2:t+Math.cos(a)*r,y2:n+Math.sin(a)*r,stroke:`var(--color-border)`,strokeOpacity:.3,strokeWidth:1},e)})]})}var x;function S(){return(S=e((()=>{h(),x=n(),b.__docgenInfo={description:"Concentric grid rings and axis lines for spider charts.\n\n@example\n```\n<RadialGrid rings={5} />\n```",methods:[],displayName:`RadialGrid`,props:{rings:{required:!1,tsType:{name:`number`},description:`Number of concentric rings (default: 5)`,defaultValue:{value:`5`,computed:!1}}}}})))()}function C({dataKey:e,color:t,opacity:n=.2,strokeWidth:r=2,dots:i=!1,dotRadius:a=4}){let{cx:o,cy:s,data:c,axes:l,angleByAxis:u,radiusScale:f,axisDomains:p}=d(),m=(0,w.useMemo)(()=>{if(!l||!u||!f||!p)return[];let t=c.find(t=>Object.values(t).some(t=>t===e))??c[0];return t?l.map(e=>{let n=u.get(e),r=p.get(e);if(n==null||!r)return{x:o,y:s,key:e};let i=typeof t[e]==`number`?t[e]:0,[a,c]=r,l=c>a?(i-a)/(c-a):0,d=f(Math.max(0,Math.min(1,l)));return{x:o+Math.cos(n)*d,y:s+Math.sin(n)*d,key:e}}):[]},[o,s,c,e,l,u,f,p]);if(m.length===0)return null;let h=m.map(e=>`${e.x},${e.y}`).join(` `);return(0,T.jsxs)(`g`,{children:[(0,T.jsx)(`polygon`,{points:h,fill:t,fillOpacity:n,stroke:t,strokeWidth:r,strokeLinejoin:`round`}),i&&m.map(e=>(0,T.jsx)(`circle`,{cx:e.x,cy:e.y,r:a,fill:t},e.key))]})}var w,T;function E(){return(E=e((()=>{w=t(),h(),T=n(),C.__docgenInfo={description:`Spider/radar polygon. Reads axis definitions and scales from radial context.
Each axis value is normalized to [0,1] within its domain, then mapped to radius.

@example
\`\`\`
<RadialArea dataKey="modelA" color={colors[0]} dots />
\`\`\``,methods:[],displayName:`RadialArea`,props:{dataKey:{required:!0,tsType:{name:`string`},description:`Key identifying which dataset row to plot (matches a value in data)`},color:{required:!0,tsType:{name:`string`},description:`Fill color`},opacity:{required:!1,tsType:{name:`number`},description:`Fill opacity (default: 0.2)`,defaultValue:{value:`0.2`,computed:!1}},strokeWidth:{required:!1,tsType:{name:`number`},description:`Stroke width (default: 2)`,defaultValue:{value:`2`,computed:!1}},dots:{required:!1,tsType:{name:`boolean`},description:`Show dots at vertices`,defaultValue:{value:`false`,computed:!1}},dotRadius:{required:!1,tsType:{name:`number`},description:`Dot radius`,defaultValue:{value:`4`,computed:!1}}}}})))()}function D({labelOffset:e=16}){let{cx:t,cy:n,radius:r,axes:i,angleByAxis:a}=d();return!i||!a?null:(0,O.jsx)(`g`,{children:i.map(i=>{let o=a.get(i);if(o==null)return null;let s=t+Math.cos(o)*(r+e),c=n+Math.sin(o)*(r+e);return(0,O.jsx)(`text`,{x:s,y:c,textAnchor:Math.cos(o)>.1?`start`:Math.cos(o)<-.1?`end`:`middle`,dominantBaseline:`central`,fill:`var(--color-text-secondary)`,fontSize:12,children:i},i)})})}var O;function k(){return(k=e((()=>{h(),O=n(),D.__docgenInfo={description:"Axis labels positioned at each spider chart vertex.\n\n@example\n```\n<RadialAxis />\n```",methods:[],displayName:`RadialAxis`,props:{labelOffset:{required:!1,tsType:{name:`number`},description:`Label offset from the outer ring in pixels (default: 16)`,defaultValue:{value:`16`,computed:!1}}}}})))()}function A(e,t,n,r,i,a){let o=e+Math.cos(i)*r,s=t+Math.sin(i)*r,c=e+Math.cos(a)*r,l=t+Math.sin(a)*r,u=e+Math.cos(a)*n,d=t+Math.sin(a)*n,f=e+Math.cos(i)*n,p=t+Math.sin(i)*n,m=+(a-i>Math.PI);return n===0?[`M ${e} ${t}`,`L ${o} ${s}`,`A ${r} ${r} 0 ${m} 1 ${c} ${l}`,`Z`].join(` `):[`M ${o} ${s}`,`A ${r} ${r} 0 ${m} 1 ${c} ${l}`,`L ${u} ${d}`,`A ${n} ${n} 0 ${m} 0 ${f} ${p}`,`Z`].join(` `)}function j({colors:e,cornerRadius:t=0,labels:n=!0,labelThreshold:r=5}){let{cx:i,cy:a,radius:o,innerRadius:s,slices:c}=d();return!c||c.length===0?null:(0,M.jsx)(`g`,{children:c.map((c,l)=>{let u=e[l%e.length],d=A(i,a,s,o,c.startAngle,c.endAngle),f=(c.startAngle+c.endAngle)/2,p=s+(o-s)*.6,m=i+Math.cos(f)*p,h=a+Math.sin(f)*p,g=n&&c.percentage*100>=r;return(0,M.jsxs)(`g`,{children:[(0,M.jsx)(`path`,{d,fill:u,stroke:`var(--color-background-surface)`,strokeWidth:t>0?0:1}),g&&(0,M.jsxs)(`text`,{x:m,y:h,textAnchor:`middle`,dominantBaseline:`central`,fill:`var(--color-text-primary)`,fontSize:12,fontWeight:500,children:[Math.round(c.percentage*100),`%`]})]},c.key)})})}var M;function N(){return(N=e((()=>{h(),M=n(),j.__docgenInfo={description:"Pie/donut slices. Reads slice geometry from radial context.\n\n@example\n```\n<RadialSlice colors={colors.categorical(5)} />\n```",methods:[],displayName:`RadialSlice`,props:{colors:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Colors for each slice. Array of hex strings.
Use useChartColors().categorical(n).`},cornerRadius:{required:!1,tsType:{name:`number`},description:`Corner radius on slice edges (default: 2)`,defaultValue:{value:`0`,computed:!1}},labels:{required:!1,tsType:{name:`boolean`},description:`Show percentage labels (default: true)`,defaultValue:{value:`true`,computed:!1}},labelThreshold:{required:!1,tsType:{name:`number`},description:`Minimum percentage to show a label (default: 5)`,defaultValue:{value:`5`,computed:!1}}}}})))()}var P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{y(),S(),E(),k(),N(),s(),u(),a(),r(),P=n(),F={title:`Lab/RadialChart`,tags:[`autodocs`]},I=[{model:`Model A`,speed:85,handling:70,comfort:90,safety:95,efficiency:60},{model:`Model B`,speed:70,handling:95,comfort:60,safety:80,efficiency:85},{model:`Model C`,speed:95,handling:60,comfort:75,safety:70,efficiency:90}],L={render:()=>{let e=l().categorical(3);return(0,P.jsxs)(o,{direction:`vertical`,gap:4,children:[(0,P.jsx)(i,{level:3,children:`Spider Chart`}),(0,P.jsxs)(g,{data:I,axes:[`speed`,`handling`,`comfort`,`safety`,`efficiency`],height:400,children:[(0,P.jsx)(b,{rings:5}),(0,P.jsx)(C,{dataKey:`Model A`,color:e[0],dots:!0}),(0,P.jsx)(C,{dataKey:`Model B`,color:e[1],dots:!0}),(0,P.jsx)(C,{dataKey:`Model C`,color:e[2],dots:!0}),(0,P.jsx)(D,{}),(0,P.jsx)(c,{items:[{label:`Model A`,color:e[0]},{label:`Model B`,color:e[1]},{label:`Model C`,color:e[2]}]})]})]})}},R=[{region:`North America`,revenue:42},{region:`Europe`,revenue:28},{region:`Asia Pacific`,revenue:18},{region:`Latin America`,revenue:8},{region:`Africa`,revenue:4}],z={render:()=>{let e=l();return(0,P.jsxs)(o,{direction:`vertical`,gap:4,children:[(0,P.jsx)(i,{level:3,children:`Pie Chart`}),(0,P.jsxs)(g,{data:R,valueKey:`revenue`,labelKey:`region`,height:400,children:[(0,P.jsx)(j,{colors:e.categorical(5)}),(0,P.jsx)(c,{items:R.map((t,n)=>({label:t.region,color:e.categorical(5)[n]}))})]})]})}},B={render:()=>{let e=l();return(0,P.jsxs)(o,{direction:`vertical`,gap:4,children:[(0,P.jsx)(i,{level:3,children:`Donut Chart`}),(0,P.jsxs)(g,{data:R,valueKey:`revenue`,labelKey:`region`,innerRadius:.55,height:400,children:[(0,P.jsx)(j,{colors:e.categorical(5)}),(0,P.jsx)(c,{items:R.map((t,n)=>({label:t.region,color:e.categorical(5)[n]}))})]})]})}},V={render:()=>{let e=l().categorical(2);return(0,P.jsxs)(o,{direction:`vertical`,gap:4,children:[(0,P.jsx)(i,{level:3,children:`Spider with Inner Radius`}),(0,P.jsxs)(g,{data:I,axes:[`speed`,`handling`,`comfort`,`safety`,`efficiency`],innerRadius:.2,height:400,children:[(0,P.jsx)(b,{rings:4}),(0,P.jsx)(C,{dataKey:`Model A`,color:e[0],dots:!0}),(0,P.jsx)(C,{dataKey:`Model B`,color:e[1],dots:!0}),(0,P.jsx)(D,{})]})]})}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = useChartColors();
    const c = colors.categorical(3);
    return <Stack direction="vertical" gap={4}>
        <Heading level={3}>Spider Chart</Heading>
        <RadialChart data={spiderData} axes={['speed', 'handling', 'comfort', 'safety', 'efficiency']} height={400}>
          <RadialGrid rings={5} />
          <RadialArea dataKey="Model A" color={c[0]} dots />
          <RadialArea dataKey="Model B" color={c[1]} dots />
          <RadialArea dataKey="Model C" color={c[2]} dots />
          <RadialAxis />
          <ChartLegend items={[{
          label: 'Model A',
          color: c[0]
        }, {
          label: 'Model B',
          color: c[1]
        }, {
          label: 'Model C',
          color: c[2]
        }]} />
        </RadialChart>
      </Stack>;
  }
}`,...L.parameters?.docs?.source},description:{story:`Spider/radar chart comparing three models across five dimensions`,...L.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = useChartColors();
    return <Stack direction="vertical" gap={4}>
        <Heading level={3}>Pie Chart</Heading>
        <RadialChart data={pieData} valueKey="revenue" labelKey="region" height={400}>
          <RadialSlice colors={colors.categorical(5)} />
          <ChartLegend items={pieData.map((d, i) => ({
          label: d.region,
          color: colors.categorical(5)[i]
        }))} />
        </RadialChart>
      </Stack>;
  }
}`,...z.parameters?.docs?.source},description:{story:`Pie chart — revenue by region`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = useChartColors();
    return <Stack direction="vertical" gap={4}>
        <Heading level={3}>Donut Chart</Heading>
        <RadialChart data={pieData} valueKey="revenue" labelKey="region" innerRadius={0.55} height={400}>
          <RadialSlice colors={colors.categorical(5)} />
          <ChartLegend items={pieData.map((d, i) => ({
          label: d.region,
          color: colors.categorical(5)[i]
        }))} />
        </RadialChart>
      </Stack>;
  }
}`,...B.parameters?.docs?.source},description:{story:`Donut chart — same data with inner radius`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = useChartColors();
    const c = colors.categorical(2);
    return <Stack direction="vertical" gap={4}>
        <Heading level={3}>Spider with Inner Radius</Heading>
        <RadialChart data={spiderData} axes={['speed', 'handling', 'comfort', 'safety', 'efficiency']} innerRadius={0.2} height={400}>
          <RadialGrid rings={4} />
          <RadialArea dataKey="Model A" color={c[0]} dots />
          <RadialArea dataKey="Model B" color={c[1]} dots />
          <RadialAxis />
        </RadialChart>
      </Stack>;
  }
}`,...V.parameters?.docs?.source},description:{story:`Spider with donut center`,...V.parameters?.docs?.description}}},H=[`SpiderChart`,`PieChart`,`DonutChart`,`SpiderDonut`]})))()}U();export{B as DonutChart,z as PieChart,L as SpiderChart,V as SpiderDonut,H as __namedExportsOrder,F as default};