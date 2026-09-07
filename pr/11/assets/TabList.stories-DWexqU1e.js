import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{n as r,t as i}from"./stylex-Dft6gtPK.js";import{n as a}from"./mergeProps-JRyAvMxc.js";import{n as o}from"./mergeRefs-CPqjs56a.js";import{n as s,t as c}from"./themeProps-DRQoVAIO.js";import{t as l}from"./jsx-runtime-DeHZSEgm.js";import{n as u,t as d}from"./Button-CZDOH4n-.js";import{n as f,r as p,t as m}from"./Icon-D9gPeCUm.js";import{n as h,t as g}from"./useListFocus-DdI1q-KC.js";import{n as _,t as v}from"./usePopover-ChPJYmE0.js";import{n as y,t as b}from"./Carousel-DEaWi6j7.js";import{a as x,c as S,i as C,l as w,n as T,o as ee,r as E,s as D,t as O,u as k}from"./FunnelIcon-WDb8qcGN.js";import{n as A,t as j}from"./PlusIcon-Cc_L_WFi.js";function M({ref:e,label:t,options:n,xstyle:i,className:c,style:l}){let u=k(),d=(0,N.useId)(),f=(0,N.useRef)(null),g=_({hasLightDismiss:!0,hasCloseButton:!1,hasAutoFocus:!1,role:`none`,onHide:(0,N.useCallback)(()=>{f.current?.focus()},[])}),{listRef:v,handleKeyDown:y,handleFocus:b,focusFirst:x}=h({hasRovingTabIndex:!0,onEscape:()=>g.hide()}),S=(0,N.useCallback)(()=>{g.isOpen?g.hide():(g.show(),requestAnimationFrame(()=>x()))},[g,x]),C=(0,N.useCallback)(e=>{if(e.key===`Tab`){g.hide();return}y(e)},[y,g]),w=n.find(e=>e.value===u.value),T=w?.label??t,E=w!=null,D=u.size,O=(0,N.useCallback)(e=>{u.onChange(e),g.hide()},[u,g]),A=o(g.triggerRef,f,e);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(`button`,{ref:A,type:`button`,"aria-haspopup":`menu`,"aria-expanded":g.isOpen,"aria-controls":d,"data-tab-menu":``,tabIndex:E?0:-1,onClick:S,...a(s(`tab-menu`),r(F.trigger,I[D],E&&F.triggerSelected,ee,i),c,l),children:[(0,P.jsx)(`span`,{"aria-hidden":`true`,...r(F.hoverBg,L[D])}),(0,P.jsxs)(`span`,{className:`khameleon1n2onr6 khameleonwz0xwf khameleon6s0dn4 khameleonkh2ocl`,children:[(0,P.jsx)(`span`,{className:`khameleon1agbcgv khameleoncrlgei`,children:T}),(0,P.jsx)(`span`,{"aria-hidden":`true`,className:`khameleon1agbcgv khameleoncrlgei khameleonlshs6z khameleon47corl khameleon2mo6ok`,children:T})]}),(0,P.jsx)(`span`,{"aria-hidden":`true`,...{0:{className:`khameleon12xnipv khameleon6b6gus khameleon2lah0s khameleon11xpdln khameleonuedmi6 khameleonlr8y92`},1:{className:`khameleon12xnipv khameleon6b6gus khameleon2lah0s khameleon11xpdln khameleonuedmi6 khameleonlr8y92 khameleon19jd1h0`}}[!!g.isOpen<<0],children:(0,P.jsx)(m,{icon:`chevronDown`,size:`sm`,color:`inherit`})}),E&&(0,P.jsx)(`span`,{...a(s(`tab-indicator`,{selected:`selected`}),{className:`khameleon10l6tqk khameleonqmqy1e khameleonnp31yv khameleonmz3bnw khameleon36qwtl khameleonjspbzw khameleon47corl khameleonnpjden khameleonuedmi6 khameleonlr8y92 khameleonowkcby khameleon1hc1fzr`})})]}),g.render((0,P.jsxs)(`div`,{ref:v,id:d,role:`menu`,"aria-label":t,onKeyDown:C,onFocus:b,...a(s(`tab-menu-dropdown`),{className:`khameleon78zum5 khameleondt5ytf khameleon1lsbc85 khameleonu0wf1k khameleon7a5moj`}),children:[(0,P.jsx)(`span`,{role:`presentation`,className:`khameleon141an7d khameleon1ltkj2j khameleon2mo6ok khameleonv1l7n4 khameleonu0wf1k khameleonrrkdod`,children:t}),n.map(e=>{let t=u.value===e.value;return(0,P.jsxs)(`div`,{role:`menuitem`,tabIndex:-1,"aria-current":t?`true`:void 0,onClick:()=>O(e.value),onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),O(e.value))},...a(s(`tab-menu-item`),{0:{className:`khameleon78zum5 khameleon6s0dn4 khameleon1qughib khameleon1txdalj khameleonce4md1 khameleonrrkdod khameleonh6dtrn khameleonjb2p0i khameleoncr08ib khameleon1kq96og khameleon1sodnla khameleon1tgivj0 khameleon1ypdohk khameleon15406qy khameleonuedmi6 khameleonlr8y92 khameleonjbqb8w khameleone9uy6x khameleon17nn4n9`},1:{className:`khameleon78zum5 khameleon6s0dn4 khameleon1qughib khameleon1txdalj khameleonce4md1 khameleonrrkdod khameleonh6dtrn khameleonjb2p0i khameleoncr08ib khameleon1kq96og khameleon1tgivj0 khameleon1ypdohk khameleon15406qy khameleonuedmi6 khameleonlr8y92 khameleonjbqb8w khameleone9uy6x khameleon17nn4n9 khameleon1e4wzip`}}[!!t<<0]),children:[(0,P.jsxs)(`span`,{className:`khameleon78zum5 khameleon6s0dn4 khameleon1txdalj`,children:[e.icon&&p(e.icon,{size:`sm`,color:`secondary`}),e.label]}),t&&(0,P.jsx)(m,{icon:`check`,size:`sm`,color:`accent`})]},e.value)})]}),{placement:`below`,alignment:`start`})]})}var N,P,F,I,L;function R(){return(R=t((()=>{N=e(n(),1),i(),f(),v(),g(),w(),x(),c(),P=l(),F={trigger:{kVAEAm:`khameleon1n2onr6`,k1xSpc:`khameleon3nfvp2`,kGNEyG:`khameleon6s0dn4`,kjj79g:`khameleonl56j7k`,kOIVth:`khameleonzye2dw`,kg3NbH:`khameleonrrkdod`,kWkggS:`khameleonjbqb8w`,kMzoRj:`khameleonc342km`,ksu8eU:`khameleonng3xce`,kaIpWk:`khameleonh6dtrn`,kMv6JI:`khameleonjb2p0i`,kGuDYH:`khameleoncr08ib`,kLWn49:`khameleon1kq96og`,k63SB2:`khameleon1sodnla`,kMwMTN:`khameleonv1l7n4`,kkrTdU:`khameleon1ypdohk`,kybGjl:`khameleon1hl2dhg`,k1ekBW:`khameleont3l3uh`,kIyJzY:`khameleonuedmi6`,kAMwcw:`khameleonlr8y92`,kI3sdo:`khameleon17nn4n9`,kInvED:`khameleon1wfwxd8 khameleon7s97pk`,$$css:!0},triggerSelected:{kMwMTN:`khameleon1tgivj0`,k63SB2:`khameleon2mo6ok`,$$css:!0},hoverBg:{kVAEAm:`khameleon10l6tqk`,kpwlN0:`khameleon10a8y8t`,kogj98:`khameleon1bpp3o7`,kzqmXN:`khameleonh8yej3`,kaIpWk:`khameleonh6dtrn`,kfzvcC:`khameleon47corl`,kWkggS:`khameleonjbqb8w khameleon1emr8yt`,k1ekBW:`khameleon15406qy`,kIyJzY:`khameleonuedmi6`,kAMwcw:`khameleonlr8y92`,$$css:!0}},I={sm:{kZKoxP:`khameleon6k0iem`,$$css:!0},md:{kZKoxP:`khameleon1ueg155`,$$css:!0},lg:{kZKoxP:`khameleonssyfek`,$$css:!0}},L={sm:{kZKoxP:`khameleon6k0iem`,$$css:!0},md:{kZKoxP:`khameleon1ueg155`,$$css:!0},lg:{kZKoxP:`khameleonssyfek`,$$css:!0}},M.displayName=`TabMenu`,M.__docgenInfo={description:`Tab menu trigger that opens a dropdown of additional tab options.
Shows the selected option's label as trigger text when an option is active.
Dropdown includes a heading showing the menu's label prop.

@example
\`\`\`
<TabList value={tab} onChange={setTab}>
  <Tab value="overview" label="Overview" />
  <TabMenu label="More" options={[
    { value: "settings", label: "Settings" },
    { value: "history", label: "History" },
  ]} />
</TabList>
\`\`\``,methods:[],displayName:`TabMenu`,props:{ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLButtonElement>`,elements:[{name:`HTMLButtonElement`}]},description:``},label:{required:!0,tsType:{name:`string`},description:`Label for the trigger button and dropdown heading.
Displayed as trigger text when no option is selected.`},options:{required:!0,tsType:{name:`Array`,elements:[{name:`TabMenuOption`}],raw:`TabMenuOption[]`},description:`Menu options rendered in the dropdown.`}},composes:[`Pick`]}})))()}var z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=t((()=>{z=n(),S(),C(),R(),y(),u(),A(),T(),B=l(),V={title:`Core/TabList`,component:D,tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`],description:`Size of the tab hover targets`}}},H={args:{size:`md`},render:e=>{let[t,n]=(0,z.useState)(`home`);return(0,B.jsxs)(D,{value:t,onChange:n,size:e.size,children:[(0,B.jsx)(E,{value:`home`,label:`Home`}),(0,B.jsx)(E,{value:`projects`,label:`Projects`}),(0,B.jsx)(E,{value:`settings`,label:`Settings`})]})}},U={args:{size:`md`},render:e=>{let[t,n]=(0,z.useState)(`home`);return(0,B.jsxs)(D,{value:t,onChange:n,size:e.size,children:[(0,B.jsx)(E,{value:`home`,label:`Home`}),(0,B.jsx)(E,{value:`projects`,label:`Projects`}),(0,B.jsx)(M,{label:`More`,options:[{value:`analytics`,label:`Analytics`},{value:`reports`,label:`Reports`},{value:`billing`,label:`Billing`}]})]})}},W={args:{size:`md`},render:e=>{let[t,n]=(0,z.useState)(`analytics`);return(0,B.jsxs)(D,{value:t,onChange:n,size:e.size,children:[(0,B.jsx)(E,{value:`home`,label:`Home`}),(0,B.jsx)(E,{value:`projects`,label:`Projects`}),(0,B.jsx)(M,{label:`More`,options:[{value:`analytics`,label:`Analytics`},{value:`reports`,label:`Reports`}]})]})}},G={render:()=>{let[e,t]=(0,z.useState)(`home`);return(0,B.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[`sm`,`md`,`lg`].map(n=>(0,B.jsxs)(`div`,{children:[(0,B.jsxs)(`div`,{style:{marginBottom:`8px`,fontSize:`12px`,color:`#666`,fontFamily:`monospace`},children:[`size=\\"`,n,`\\"`]}),(0,B.jsx)(`div`,{style:{border:`1px dashed #ccc`,display:`inline-flex`},children:(0,B.jsxs)(D,{value:e,onChange:t,size:n,children:[(0,B.jsx)(E,{value:`home`,label:`Home`}),(0,B.jsx)(E,{value:`projects`,label:`Projects`}),(0,B.jsx)(E,{value:`settings`,label:`Settings`})]})})]},n))})}},K={args:{size:`md`},render:e=>{let[t,n]=(0,z.useState)(`home`),r=(0,B.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`currentColor`,width:`100%`,height:`100%`,children:(0,B.jsx)(`path`,{d:`M8.543 2.232a.75.75 0 0 0-1.085 0l-5.25 5.5A.75.75 0 0 0 2.75 9H4v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2h1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V9h1.25a.75.75 0 0 0 .543-1.268l-5.25-5.5Z`})}),i=(0,B.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`currentColor`,width:`100%`,height:`100%`,children:(0,B.jsx)(`path`,{fillRule:`evenodd`,d:`M6.955 1.45A.5.5 0 0 1 7.452 1h1.096a.5.5 0 0 1 .497.45l.17 1.699c.484.12.94.312 1.356.562l1.321-.816a.5.5 0 0 1 .67.087l.774.774a.5.5 0 0 1 .087.67l-.816 1.321c.25.416.442.872.562 1.356l1.699.17a.5.5 0 0 1 .45.497v1.096a.5.5 0 0 1-.45.497l-1.699.17c-.12.484-.312.94-.562 1.356l.816 1.321a.5.5 0 0 1-.087.67l-.774.774a.5.5 0 0 1-.67.087l-1.321-.816c-.416.25-.872.442-1.356.562l-.17 1.699a.5.5 0 0 1-.497.45H7.452a.5.5 0 0 1-.497-.45l-.17-1.699a4.973 4.973 0 0 1-1.356-.562l-1.321.816a.5.5 0 0 1-.67-.087l-.774-.774a.5.5 0 0 1-.087-.67l.816-1.321a4.972 4.972 0 0 1-.562-1.356l-1.699-.17A.5.5 0 0 1 1 8.548V7.452a.5.5 0 0 1 .45-.497l1.699-.17c.12-.484.312-.94.562-1.356l-.816-1.321a.5.5 0 0 1 .087-.67l.774-.774a.5.5 0 0 1 .67-.087l1.321.816c.416-.25.872-.442 1.356-.562l.17-1.699ZM8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z`,clipRule:`evenodd`})});return(0,B.jsxs)(D,{value:t,onChange:n,size:e.size,children:[(0,B.jsx)(E,{value:`home`,label:`Home`,icon:r}),(0,B.jsx)(E,{value:`settings`,label:`Settings`,icon:i})]})}},q={args:{size:`md`},render:e=>{let[t,n]=(0,z.useState)(`desktop`),r=(0,B.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`currentColor`,width:`100%`,height:`100%`,children:(0,B.jsx)(`path`,{d:`M2.5 3A1.5 1.5 0 0 0 1 4.5v5A1.5 1.5 0 0 0 2.5 11h4.75v1.5H5a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H8.75V11h4.75A1.5 1.5 0 0 0 15 9.5v-5A1.5 1.5 0 0 0 13.5 3h-11Zm0 1.5h11v5h-11v-5Z`})}),i=(0,B.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`currentColor`,width:`100%`,height:`100%`,children:(0,B.jsx)(`path`,{d:`M5 1.5A1.5 1.5 0 0 0 3.5 3v10A1.5 1.5 0 0 0 5 14.5h6a1.5 1.5 0 0 0 1.5-1.5V3A1.5 1.5 0 0 0 11 1.5H5Zm0 1.5h6v10H5V3Zm2.25 8.5a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Z`})}),a=(0,B.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`currentColor`,width:`100%`,height:`100%`,children:(0,B.jsx)(`path`,{d:`M8 1.5a6.5 6.5 0 0 0 0 13h.25a1.75 1.75 0 0 0 1.2-3.02.35.35 0 0 1 .23-.6h.97A3.85 3.85 0 0 0 14.5 7.03 5.53 5.53 0 0 0 8.97 1.5H8Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm2-1.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM4.5 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm6-1.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z`})});return(0,B.jsxs)(D,{value:t,onChange:n,size:e.size,children:[(0,B.jsx)(E,{value:`desktop`,label:`Desktop preview`,icon:r,isLabelHidden:!0}),(0,B.jsx)(E,{value:`phone`,label:`Phone preview`,icon:i,isLabelHidden:!0}),(0,B.jsx)(E,{value:`theme`,label:`Theme`,icon:a,isLabelHidden:!0})]})}},J={render:()=>{let[e,t]=(0,z.useState)(`all`);return(0,B.jsxs)(D,{value:e,onChange:t,size:`lg`,hasDivider:!0,children:[(0,B.jsx)(E,{value:`all`,label:`All items`}),(0,B.jsx)(E,{value:`active`,label:`Active`}),(0,B.jsx)(E,{value:`archived`,label:`Archived`}),(0,B.jsxs)(`div`,{style:{marginInlineStart:`auto`,display:`flex`,alignItems:`center`,gap:`4px`},children:[(0,B.jsx)(d,{label:`Filter`,variant:`ghost`,size:`sm`,icon:(0,B.jsx)(O,{}),isIconOnly:!0}),(0,B.jsx)(d,{label:`New item`,variant:`primary`,size:`sm`,icon:(0,B.jsx)(j,{})})]})]})}},Y={render:()=>{let[e,t]=(0,z.useState)(`home`);return(0,B.jsx)(`div`,{style:{width:`500px`},children:(0,B.jsxs)(D,{value:e,onChange:t,layout:`fill`,hasDivider:!0,children:[(0,B.jsx)(E,{value:`home`,label:`Home`}),(0,B.jsx)(E,{value:`projects`,label:`Projects`}),(0,B.jsx)(E,{value:`settings`,label:`Settings`})]})})}},X={render:()=>{let[e,t]=(0,z.useState)(`overview`);return(0,B.jsx)(`div`,{style:{maxWidth:`400px`,border:`1px dashed #ccc`},children:(0,B.jsx)(D,{value:e,onChange:t,children:(0,B.jsxs)(b,{gap:.5,hasSnap:!1,children:[(0,B.jsx)(E,{value:`overview`,label:`Overview`}),(0,B.jsx)(E,{value:`activity`,label:`Activity`}),(0,B.jsx)(E,{value:`members`,label:`Members`}),(0,B.jsx)(E,{value:`settings`,label:`Settings`}),(0,B.jsx)(E,{value:`integrations`,label:`Integrations`}),(0,B.jsx)(E,{value:`billing`,label:`Billing & Plans`}),(0,B.jsx)(E,{value:`security`,label:`Security`}),(0,B.jsx)(E,{value:`notifications`,label:`Notifications`}),(0,B.jsx)(E,{value:`api`,label:`API Keys`})]})})})}},Z={render:()=>{let[e,t]=(0,z.useState)(`dashboard`);return(0,B.jsx)(`div`,{style:{maxWidth:`350px`},children:(0,B.jsx)(D,{value:e,onChange:t,hasDivider:!0,size:`lg`,children:(0,B.jsxs)(b,{gap:.5,hasSnap:!1,children:[(0,B.jsx)(E,{value:`dashboard`,label:`Dashboard`}),(0,B.jsx)(E,{value:`analytics`,label:`Analytics`}),(0,B.jsx)(E,{value:`reports`,label:`Reports`}),(0,B.jsx)(E,{value:`customers`,label:`Customers`}),(0,B.jsx)(E,{value:`products`,label:`Products`}),(0,B.jsx)(E,{value:`orders`,label:`Orders`})]})})})}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  render: args => {
    const [value, setValue] = useState('home');
    return <TabList value={value} onChange={setValue} size={args.size}>
        <Tab value="home" label="Home" />
        <Tab value="projects" label="Projects" />
        <Tab value="settings" label="Settings" />
      </TabList>;
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  render: args => {
    const [value, setValue] = useState('home');
    return <TabList value={value} onChange={setValue} size={args.size}>
        <Tab value="home" label="Home" />
        <Tab value="projects" label="Projects" />
        <TabMenu label="More" options={[{
        value: 'analytics',
        label: 'Analytics'
      }, {
        value: 'reports',
        label: 'Reports'
      }, {
        value: 'billing',
        label: 'Billing'
      }]} />
      </TabList>;
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  render: args => {
    const [value, setValue] = useState('analytics');
    return <TabList value={value} onChange={setValue} size={args.size}>
        <Tab value="home" label="Home" />
        <Tab value="projects" label="Projects" />
        <TabMenu label="More" options={[{
        value: 'analytics',
        label: 'Analytics'
      }, {
        value: 'reports',
        label: 'Reports'
      }]} />
      </TabList>;
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('home');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        {(['sm', 'md', 'lg'] as const).map(size => <div key={size}>
            <div style={{
          marginBottom: '8px',
          fontSize: '12px',
          color: '#666',
          fontFamily: 'monospace'
        }}>
              size=\\"{size}\\"
            </div>
            <div style={{
          border: '1px dashed #ccc',
          display: 'inline-flex'
        }}>
              <TabList value={value} onChange={setValue} size={size}>
                <Tab value="home" label="Home" />
                <Tab value="projects" label="Projects" />
                <Tab value="settings" label="Settings" />
              </TabList>
            </div>
          </div>)}
      </div>;
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  render: args => {
    const [value, setValue] = useState('home');
    const HomeIcon = <svg viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%">
        <path d="M8.543 2.232a.75.75 0 0 0-1.085 0l-5.25 5.5A.75.75 0 0 0 2.75 9H4v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2h1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V9h1.25a.75.75 0 0 0 .543-1.268l-5.25-5.5Z" />
      </svg>;
    const CogIcon = <svg viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%">
        <path fillRule="evenodd" d="M6.955 1.45A.5.5 0 0 1 7.452 1h1.096a.5.5 0 0 1 .497.45l.17 1.699c.484.12.94.312 1.356.562l1.321-.816a.5.5 0 0 1 .67.087l.774.774a.5.5 0 0 1 .087.67l-.816 1.321c.25.416.442.872.562 1.356l1.699.17a.5.5 0 0 1 .45.497v1.096a.5.5 0 0 1-.45.497l-1.699.17c-.12.484-.312.94-.562 1.356l.816 1.321a.5.5 0 0 1-.087.67l-.774.774a.5.5 0 0 1-.67.087l-1.321-.816c-.416.25-.872.442-1.356.562l-.17 1.699a.5.5 0 0 1-.497.45H7.452a.5.5 0 0 1-.497-.45l-.17-1.699a4.973 4.973 0 0 1-1.356-.562l-1.321.816a.5.5 0 0 1-.67-.087l-.774-.774a.5.5 0 0 1-.087-.67l.816-1.321a4.972 4.972 0 0 1-.562-1.356l-1.699-.17A.5.5 0 0 1 1 8.548V7.452a.5.5 0 0 1 .45-.497l1.699-.17c.12-.484.312-.94.562-1.356l-.816-1.321a.5.5 0 0 1 .087-.67l.774-.774a.5.5 0 0 1 .67-.087l1.321.816c.416-.25.872-.442 1.356-.562l.17-1.699ZM8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" clipRule="evenodd" />
      </svg>;
    return <TabList value={value} onChange={setValue} size={args.size}>
        <Tab value="home" label="Home" icon={HomeIcon} />
        <Tab value="settings" label="Settings" icon={CogIcon} />
      </TabList>;
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  render: args => {
    const [value, setValue] = useState('desktop');
    const DesktopIcon = <svg viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%">
        <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v5A1.5 1.5 0 0 0 2.5 11h4.75v1.5H5a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H8.75V11h4.75A1.5 1.5 0 0 0 15 9.5v-5A1.5 1.5 0 0 0 13.5 3h-11Zm0 1.5h11v5h-11v-5Z" />
      </svg>;
    const PhoneIcon = <svg viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%">
        <path d="M5 1.5A1.5 1.5 0 0 0 3.5 3v10A1.5 1.5 0 0 0 5 14.5h6a1.5 1.5 0 0 0 1.5-1.5V3A1.5 1.5 0 0 0 11 1.5H5Zm0 1.5h6v10H5V3Zm2.25 8.5a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Z" />
      </svg>;
    const ThemeIcon = <svg viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%">
        <path d="M8 1.5a6.5 6.5 0 0 0 0 13h.25a1.75 1.75 0 0 0 1.2-3.02.35.35 0 0 1 .23-.6h.97A3.85 3.85 0 0 0 14.5 7.03 5.53 5.53 0 0 0 8.97 1.5H8Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm2-1.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM4.5 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm6-1.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
      </svg>;
    return <TabList value={value} onChange={setValue} size={args.size}>
        <Tab value="desktop" label="Desktop preview" icon={DesktopIcon} isLabelHidden />
        <Tab value="phone" label="Phone preview" icon={PhoneIcon} isLabelHidden />
        <Tab value="theme" label="Theme" icon={ThemeIcon} isLabelHidden />
      </TabList>;
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('all');
    return <TabList value={value} onChange={setValue} size="lg" hasDivider>
        <Tab value="all" label="All items" />
        <Tab value="active" label="Active" />
        <Tab value="archived" label="Archived" />
        <div style={{
        marginInlineStart: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: '4px'
      }}>
          <Button label="Filter" variant="ghost" size="sm" icon={<FunnelIcon />} isIconOnly />
          <Button label="New item" variant="primary" size="sm" icon={<PlusIcon />} />
        </div>
      </TabList>;
  }
}`,...J.parameters?.docs?.source},description:{story:`Demonstrates a common page header pattern: large tab list items on the left
with action buttons on the right, separated by a full-width divider underneath.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('home');
    return <div style={{
      width: '500px'
    }}>
        <TabList value={value} onChange={setValue} layout="fill" hasDivider>
          <Tab value="home" label="Home" />
          <Tab value="projects" label="Projects" />
          <Tab value="settings" label="Settings" />
        </TabList>
      </div>;
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('overview');
    return <div style={{
      maxWidth: '400px',
      border: '1px dashed #ccc'
    }}>
        <TabList value={value} onChange={setValue}>
          <Carousel gap={0.5} hasSnap={false}>
            <Tab value="overview" label="Overview" />
            <Tab value="activity" label="Activity" />
            <Tab value="members" label="Members" />
            <Tab value="settings" label="Settings" />
            <Tab value="integrations" label="Integrations" />
            <Tab value="billing" label="Billing & Plans" />
            <Tab value="security" label="Security" />
            <Tab value="notifications" label="Notifications" />
            <Tab value="api" label="API Keys" />
          </Carousel>
        </TabList>
      </div>;
  }
}`,...X.parameters?.docs?.source},description:{story:`When tabs overflow, wrap TabList's children in Carousel.
The Carousel handles scroll, fade masks, and arrow buttons.
Each tab keeps its intrinsic label width — no truncation.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('dashboard');
    return <div style={{
      maxWidth: '350px'
    }}>
        <TabList value={value} onChange={setValue} hasDivider size="lg">
          <Carousel gap={0.5} hasSnap={false}>
            <Tab value="dashboard" label="Dashboard" />
            <Tab value="analytics" label="Analytics" />
            <Tab value="reports" label="Reports" />
            <Tab value="customers" label="Customers" />
            <Tab value="products" label="Products" />
            <Tab value="orders" label="Orders" />
          </Carousel>
        </TabList>
      </div>;
  }
}`,...Z.parameters?.docs?.source},description:{story:`Overflow with divider — typical page header in a narrow viewport.`,...Z.parameters?.docs?.description}}},Q=[`Default`,`WithMenu`,`MenuWithSelectedChild`,`SizeVariants`,`WithIcons`,`IconOnly`,`WithActions`,`FillLayout`,`Overflow`,`OverflowWithDivider`]})))()}$();export{H as Default,Y as FillLayout,q as IconOnly,W as MenuWithSelectedChild,X as Overflow,Z as OverflowWithDivider,G as SizeVariants,J as WithActions,K as WithIcons,U as WithMenu,Q as __namedExportsOrder,V as default};