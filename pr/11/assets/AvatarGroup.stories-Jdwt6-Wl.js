import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./stylex-Dft6gtPK.js";import{n as i}from"./mergeProps-JRyAvMxc.js";import{n as a,t as o}from"./themeProps-DRQoVAIO.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./useTranslator-C3b4YzkD.js";import{a as u,i as d,n as f,o as p,r as m,t as h}from"./Avatar-DN4kS59e.js";import{n as g,t as _}from"./StatusDot-BqXKN9G-.js";function v({children:e,size:t=`small`,"data-testid":r,"aria-label":o,xstyle:s,className:l,style:u,ref:f,...p}){let h=c(),g=o??h(`@khameleon.avatarGroup.label`),_=m(t),v=Math.round(_*x),C=(0,y.useMemo)(()=>({size:t,overlap:v,numericSize:_}),[t,v,_]);return(0,b.jsx)(d,{value:C,children:(0,b.jsx)(`div`,{...p,ref:f,role:`group`,"aria-label":g,"data-testid":r,...i(a(`avatar-group`,{size:t}),n(S.root,s),l,u),children:e})})}var y,b,x,S;function C(){return(C=e((()=>{y=t(),f(),r(),u(),o(),l(),b=s(),x=.25,S={root:{k1xSpc:`khameleon3nfvp2`,kGNEyG:`khameleon6s0dn4`,$$css:!0}},v.displayName=`AvatarGroup`,v.__docgenInfo={description:`Stacked avatar display showing multiple avatars overlapping with an
optional overflow indicator. Uses a compositional children-based API
so each avatar can carry its own props (status dots, click handlers, etc.).

Consumers handle slicing — pass only the avatars you want visible,
then add an AvatarGroupOverflow for the "+N" indicator.

@example
\`\`\`
<AvatarGroup size="medium">
  {users.slice(0, 3).map(u => (
    <Avatar key={u.id} src={u.src} name={u.name} />
  ))}
  <AvatarGroupOverflow count={users.length - 3} />
</AvatarGroup>
\`\`\``,methods:[],displayName:`AvatarGroup`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:`Ref forwarded to the root element.`},children:{required:!0,tsType:{name:`ReactNode`},description:`Avatar children, optionally followed by one AvatarGroupOverflow.
Consumers are responsible for slicing to the desired visible count.`},size:{required:!1,tsType:{name:`union`,raw:`AvatarNamedSize | AvatarNumericSize`,elements:[{name:`union`,raw:`'tiny' | 'xsmall' | 'small' | 'medium' | 'large'`,elements:[{name:`literal`,value:`'tiny'`},{name:`literal`,value:`'xsmall'`},{name:`literal`,value:`'small'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'large'`}]},{name:`union`,raw:`16 | 20 | 24 | 32 | 36 | 40 | 48 | 60 | 64 | 72 | 96 | 128 | 144 | 180`,elements:[{name:`literal`,value:`16`},{name:`literal`,value:`20`},{name:`literal`,value:`24`},{name:`literal`,value:`32`},{name:`literal`,value:`36`},{name:`literal`,value:`40`},{name:`literal`,value:`48`},{name:`literal`,value:`60`},{name:`literal`,value:`64`},{name:`literal`,value:`72`},{name:`literal`,value:`96`},{name:`literal`,value:`128`},{name:`literal`,value:`144`},{name:`literal`,value:`180`}]}]},description:`Size applied to all avatars via context.
@default 'small'`,defaultValue:{value:`'small'`,computed:!1}},"data-testid":{required:!1,tsType:{name:`string`},description:`Test ID for integration testing.`}},composes:[`Omit`]}})))()}function w({ref:e,count:t,onClick:r,children:o,xstyle:s,className:c,style:l,...u}){let d=p(),f=d?.numericSize??36,m=d?.overlap??0,h=`${t} more`,g=o??`+${t}`;return r?(0,T.jsx)(`button`,{ref:e,type:`button`,onClick:r,...u,"aria-label":h,...i(a(`avatar-group-overflow`),n(D.base,D.button,D.overlap,A.size(f),A.fontSize(f),A.overlap(-m),s),c,l),children:g}):(0,T.jsx)(`span`,{ref:e,...u,"aria-label":h,...i(a(`avatar-group-overflow`),n(D.base,D.overlap,A.size(f),A.fontSize(f),A.overlap(-m),s),c,l),children:g})}var T,E,D,O,k,A;function j(){return(j=e((()=>{t(),r(),u(),o(),T=s(),E=.35,D={base:{kVAEAm:`khameleon1n2onr6`,k1xSpc:`khameleon78zum5`,kGNEyG:`khameleon6s0dn4`,kjj79g:`khameleonl56j7k`,kaIpWk:`khameleonjspbzw`,kWkggS:`khameleon10xzikg`,kMwMTN:`khameleonv1l7n4`,kMv6JI:`khameleon9ynric`,k63SB2:`khameleon1e4wzip`,kfSwDN:`khameleon87ps6o`,kMzoRj:`khameleondh2fpr`,ksu8eU:`khameleon1y0btm7`,kVAM5u:`khameleon1touxvs`,kB7OPa:`khameleon1afcbsf`,kKwaWg:`khameleon14bno8m`,$$css:!0},button:{kkrTdU:`khameleon1ypdohk`,kmVPX3:`khameleon1717udv`,kKwaWg:`khameleon14bno8m khameleonbfmc0r khameleon1nocapi`,kI3sdo:`khameleon1a2a7pz khameleon17nn4n9`,kInvED:`khameleon7s97pk`,$$css:!0},overlap:{keTefX:`khameleon13hpdyo`,$$css:!0}},O={kGuDYH:`khameleondmh292`,$$css:!0},k={"--_avatar-group-overlap":`khameleonlz5hwt`,$$css:!0},A={size:e=>[{kzqmXN:e==null?e:`khameleon5lhr3w`,kZKoxP:e==null?e:`khameleon16ye13r`,$$css:!0},{"--x-width":(e=>typeof e==`number`?e+`px`:e??void 0)(e),"--x-height":(e=>typeof e==`number`?e+`px`:e??void 0)(e)}],fontSize:e=>[O,{"--x-fontSize":(e=>typeof e==`number`?e+`px`:e??void 0)(e*E)}],overlap:e=>[k,{"--x---_avatar-group-overlap":`${e}px`==null?void 0:`${e}px`}]},w.displayName=`AvatarGroupOverflow`,w.__docgenInfo={description:`Overflow indicator for AvatarGroup. Shows a "+N" count and
optionally handles clicks.

@example
\`\`\`
<AvatarGroup size="medium">
  {users.slice(0, 3).map(u => (
    <Avatar key={u.id} src={u.src} name={u.name} />
  ))}
  <AvatarGroupOverflow count={users.length - 3} onClick={showAll} />
</AvatarGroup>
\`\`\``,methods:[],displayName:`AvatarGroupOverflow`,props:{ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLElement>`,elements:[{name:`HTMLElement`}]},description:``},count:{required:!0,tsType:{name:`number`},description:`The overflow count to display.`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback fired when the overflow indicator is clicked.
When provided, the indicator renders as a focusable button.`},children:{required:!1,tsType:{name:`ReactNode`},description:`Custom content to render instead of the default "+N" label.`}},composes:[`Omit`]}})))()}var M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q;function J(){return(J=e((()=>{C(),j(),f(),g(),M=s(),N=[{name:`Alice Johnson`,src:`https://i.pravatar.cc/150?img=1`,key:`alice`},{name:`Bob Smith`,src:`https://i.pravatar.cc/150?img=2`,key:`bob`},{name:`Charlie Davis`,src:`https://i.pravatar.cc/150?img=3`,key:`charlie`},{name:`Diana Lee`,src:`https://i.pravatar.cc/150?img=4`,key:`diana`},{name:`Eve Park`,src:`https://i.pravatar.cc/150?img=5`,key:`eve`}],P={title:`Core/AvatarGroup`,component:v,tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`tiny`,`xsmall`,`small`,`medium`,`large`],description:`Size applied to all child avatars`}}},F={render:()=>(0,M.jsx)(v,{size:`medium`,children:N.slice(0,3).map(e=>(0,M.jsx)(h,{src:e.src,name:e.name},e.key))})},I={render:()=>(0,M.jsxs)(v,{size:`medium`,children:[N.slice(0,3).map(e=>(0,M.jsx)(h,{src:e.src,name:e.name},e.key)),(0,M.jsx)(w,{count:N.length-3})]})},L={render:()=>(0,M.jsxs)(v,{size:`medium`,children:[N.slice(0,3).map(e=>(0,M.jsx)(h,{src:e.src,name:e.name},e.key)),(0,M.jsx)(w,{count:N.length-3,onClick:()=>alert(`Show all participants`)})]})},R={render:()=>(0,M.jsxs)(v,{size:`medium`,children:[N.slice(0,3).map(e=>(0,M.jsx)(h,{src:e.src,name:e.name},e.key)),(0,M.jsx)(w,{count:44})]})},z={render:()=>(0,M.jsxs)(v,{size:`medium`,children:[(0,M.jsx)(h,{src:`https://i.pravatar.cc/150?img=1`,name:`Alice`,status:(0,M.jsx)(_,{variant:`success`,label:`Online`})}),(0,M.jsx)(h,{src:`https://i.pravatar.cc/150?img=2`,name:`Bob`,status:(0,M.jsx)(_,{variant:`warning`,label:`Away`})}),(0,M.jsx)(h,{src:`https://i.pravatar.cc/150?img=3`,name:`Charlie`,status:(0,M.jsx)(_,{variant:`error`,label:`Offline`})})]})},B={render:()=>(0,M.jsx)(`div`,{className:`x78zum5 xdt5ytf x1qh66ti`,children:[`tiny`,`xsmall`,`small`,`medium`,`large`].map(e=>(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h4`,{className:`xrcdmg7 x9ynric`,children:e}),(0,M.jsxs)(v,{size:e,children:[N.slice(0,3).map(e=>(0,M.jsx)(h,{src:e.src,name:e.name},e.key)),(0,M.jsx)(w,{count:N.length-3})]})]},e))})},V={render:()=>(0,M.jsxs)(v,{size:`medium`,children:[N.slice(0,4).map(e=>(0,M.jsx)(h,{name:e.name},e.key)),(0,M.jsx)(w,{count:1})]})},H={render:()=>(0,M.jsx)(v,{size:`medium`,children:(0,M.jsx)(h,{src:`https://i.pravatar.cc/150?img=1`,name:`Alice Johnson`})})},U={render:()=>(0,M.jsxs)(v,{size:`medium`,children:[N.slice(0,3).map(e=>(0,M.jsx)(h,{src:e.src,name:e.name},e.key)),(0,M.jsx)(w,{count:999})]})},W={render:()=>(0,M.jsxs)(v,{size:`medium`,children:[N.slice(0,3).map(e=>(0,M.jsx)(h,{src:e.src,name:e.name},e.key)),(0,M.jsx)(w,{count:0})]})},G={render:()=>(0,M.jsx)(`div`,{style:{width:120,border:`1px dashed grey`,padding:8},children:(0,M.jsxs)(v,{size:`medium`,children:[N.slice(0,5).map(e=>(0,M.jsx)(h,{src:e.src,name:e.name},e.key)),(0,M.jsx)(w,{count:10})]})})},K={render:()=>{let e=Array.from({length:10},(e,t)=>({key:`user-${t}`,name:`User ${t+1}`,src:`https://i.pravatar.cc/150?img=${t%70+1}`}));return(0,M.jsxs)(v,{size:`small`,children:[e.map(e=>(0,M.jsx)(h,{src:e.src,name:e.name},e.key)),(0,M.jsx)(w,{count:37})]})}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <AvatarGroup size="medium">
      {USERS.slice(0, 3).map(u => <Avatar key={u.key} src={u.src} name={u.name} />)}
    </AvatarGroup>
}`,...F.parameters?.docs?.source},description:{story:`Basic avatar group showing all members.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <AvatarGroup size="medium">
      {USERS.slice(0, 3).map(u => <Avatar key={u.key} src={u.src} name={u.name} />)}
      <AvatarGroupOverflow count={USERS.length - 3} />
    </AvatarGroup>
}`,...I.parameters?.docs?.source},description:{story:`Sliced to 3 with "+N" overflow indicator.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <AvatarGroup size="medium">
      {USERS.slice(0, 3).map(u => <Avatar key={u.key} src={u.src} name={u.name} />)}
      <AvatarGroupOverflow count={USERS.length - 3} onClick={() => alert('Show all participants')} />
    </AvatarGroup>
}`,...L.parameters?.docs?.source},description:{story:`Clickable overflow indicator.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <AvatarGroup size="medium">
      {USERS.slice(0, 3).map(u => <Avatar key={u.key} src={u.src} name={u.name} />)}
      <AvatarGroupOverflow count={44} />
    </AvatarGroup>
}`,...R.parameters?.docs?.source},description:{story:`Server-side total count (47 participants, only 3 rendered).`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <AvatarGroup size="medium">
      <Avatar src="https://i.pravatar.cc/150?img=1" name="Alice" status={<StatusDot variant="success" label="Online" />} />
      <Avatar src="https://i.pravatar.cc/150?img=2" name="Bob" status={<StatusDot variant="warning" label="Away" />} />
      <Avatar src="https://i.pravatar.cc/150?img=3" name="Charlie" status={<StatusDot variant="error" label="Offline" />} />
    </AvatarGroup>
}`,...z.parameters?.docs?.source},description:{story:`Per-avatar status dots — just works with compositional API.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(storyStyles.storyWrapper)}>
      {(['tiny', 'xsmall', 'small', 'medium', 'large'] as const).map(size => <div key={size}>
          <h4 {...stylex.props(storyStyles.heading)}>{size}</h4>
          <AvatarGroup size={size}>
            {USERS.slice(0, 3).map(u => <Avatar key={u.key} src={u.src} name={u.name} />)}
            <AvatarGroupOverflow count={USERS.length - 3} />
          </AvatarGroup>
        </div>)}
    </div>
}`,...B.parameters?.docs?.source},description:{story:`All sizes side by side.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <AvatarGroup size="medium">
      {USERS.slice(0, 4).map(u => <Avatar key={u.key} name={u.name} />)}
      <AvatarGroupOverflow count={1} />
    </AvatarGroup>
}`,...V.parameters?.docs?.source},description:{story:`Initials fallback when no images provided.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <AvatarGroup size="medium">
      <Avatar src="https://i.pravatar.cc/150?img=1" name="Alice Johnson" />
    </AvatarGroup>
}`,...H.parameters?.docs?.source},description:{story:`Single avatar — no overlap applied.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <AvatarGroup size="medium">
      {USERS.slice(0, 3).map(u => <Avatar key={u.key} src={u.src} name={u.name} />)}
      <AvatarGroupOverflow count={999} />
    </AvatarGroup>
}`,...U.parameters?.docs?.source},description:{story:`Large overflow count (99+).`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <AvatarGroup size="medium">
      {USERS.slice(0, 3).map(u => <Avatar key={u.key} src={u.src} name={u.name} />)}
      <AvatarGroupOverflow count={0} />
    </AvatarGroup>
}`,...W.parameters?.docs?.source},description:{story:`Zero overflow count edge case.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 120,
    border: '1px dashed grey',
    padding: 8
  }}>
      <AvatarGroup size="medium">
        {USERS.slice(0, 5).map(u => <Avatar key={u.key} src={u.src} name={u.name} />)}
        <AvatarGroupOverflow count={10} />
      </AvatarGroup>
    </div>
}`,...G.parameters?.docs?.source},description:{story:`Narrow container — tests overflow behavior in constrained width.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => {
    const manyUsers = Array.from({
      length: 10
    }, (_, i) => ({
      key: \`user-\${i}\`,
      name: \`User \${i + 1}\`,
      src: \`https://i.pravatar.cc/150?img=\${i % 70 + 1}\`
    }));
    return <AvatarGroup size="small">
        {manyUsers.map(u => <Avatar key={u.key} src={u.src} name={u.name} />)}
        <AvatarGroupOverflow count={37} />
      </AvatarGroup>;
  }
}`,...K.parameters?.docs?.source},description:{story:`Many avatars — 10+ items to verify overlap stacking.`,...K.parameters?.docs?.description}}},q=[`Default`,`WithOverflow`,`ClickableOverflow`,`ServerSideCount`,`WithStatusDots`,`AllSizes`,`InitialsFallback`,`SingleAvatar`,`LargeOverflowCount`,`ZeroOverflow`,`NarrowContainer`,`ManyAvatars`]})))()}J();export{B as AllSizes,L as ClickableOverflow,F as Default,V as InitialsFallback,U as LargeOverflowCount,K as ManyAvatars,G as NarrowContainer,R as ServerSideCount,H as SingleAvatar,I as WithOverflow,z as WithStatusDots,W as ZeroOverflow,q as __namedExportsOrder,P as default};