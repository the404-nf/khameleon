import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{n as r,t as i}from"./stylex-Dft6gtPK.js";import{n as a}from"./mergeProps-JRyAvMxc.js";import{n as o,t as s}from"./themeProps-DRQoVAIO.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{c as l,p as u}from"./tokens.stylex-B5FkK-9m.js";import{n as d,o as f,s as p,t as m}from"./Button-CZDOH4n-.js";import{n as h,t as g}from"./Icon-D9gPeCUm.js";import{n as _,t as v}from"./useTranslator-Cp3lSSgn.js";function y({status:e,title:t,description:n,icon:i,isDismissable:s=!1,onDismiss:c,endContent:l,container:d=`card`,defaultIsExpanded:p=!1,children:h,xstyle:v,className:y,style:D,ref:O,...k}){let A=_(),[j,M]=(0,b.useState)(!1),[N,P]=(0,b.useState)(p),F=(0,b.useId)(),I=S[e],L=C[e],R=w[e],z=h!=null;if(j)return null;let B=()=>{M(!0),c?.()},V=()=>{P(e=>!e)},H=l!=null||s||z,U=n==null&&(l!=null||s),W=z&&N,G=d===`card`;return(0,x.jsxs)(`div`,{ref:O,role:L,...a(r(T.root,v),y,D),...k,children:[(0,x.jsxs)(`div`,{...a(o(`banner`,{container:d,status:e}),r(T.header,U&&T.headerCentered,E[e],G&&(W?T.headerCardWithContent:T.headerCardStandalone))),children:[(0,x.jsx)(`div`,{...a(o(`banner-icon`,{status:e}),{className:`khameleon78zum5 khameleon6s0dn4 khameleon2lah0s`}),"aria-hidden":`true`,children:i??(0,x.jsx)(g,{icon:I,size:`md`,color:R})}),(0,x.jsxs)(`div`,{className:`khameleon78zum5 khameleondt5ytf khameleonxhr3t khameleon98rzlu khameleoneuugli`,children:[(0,x.jsx)(`div`,{className:`khameleon1ghz6dp khameleonjb2p0i khameleoncr08ib khameleon2mo6ok khameleon1kq96og khameleon1tgivj0`,children:t}),n!=null&&(0,x.jsx)(`div`,{className:`khameleon1ghz6dp khameleonjb2p0i khameleon141an7d khameleon1sodnla khameleon1ltkj2j khameleonv1l7n4`,children:n})]}),H&&(0,x.jsxs)(`div`,{...r(T.endArea,f.inset(u[`--spacing-2`])),children:[l,z&&(0,x.jsx)(m,{variant:`ghost`,size:`sm`,label:A(N?`@khameleon.banner.collapse`:`@khameleon.banner.expand`),tooltip:A(N?`@khameleon.banner.collapse`:`@khameleon.banner.expand`),icon:(0,x.jsx)(`span`,{...{0:{className:`khameleon3nfvp2 khameleon11xpdln khameleonuedmi6 khameleon12w9bfk khameleonlr8y92`},1:{className:`khameleon3nfvp2 khameleon11xpdln khameleonuedmi6 khameleon12w9bfk khameleonlr8y92 khameleon19jd1h0`}}[!!N<<0],children:(0,x.jsx)(g,{icon:`chevronDown`,size:`sm`,color:`inherit`})}),onClick:V,"aria-expanded":N,"aria-controls":W?F:void 0,isIconOnly:!0}),s&&(0,x.jsx)(m,{variant:`ghost`,size:`sm`,label:A(`@khameleon.banner.dismiss`),tooltip:A(`@khameleon.banner.dismiss`),icon:(0,x.jsx)(g,{icon:`close`,size:`sm`,color:`inherit`}),onClick:B,isIconOnly:!0})]})]}),W&&(0,x.jsx)(`div`,{id:F,...a(o(`banner-content`,{container:d,status:e}),{0:{className:`khameleon1de1mus khameleon8o8v82 khameleon1pzlopt khameleon1i535u5 khameleon1pcaw5z khameleon92x3c3 khameleon19ypqd9 khameleon32b0ac khameleon1q0q8m5 khameleon1utcnwd khameleontgwc6q khameleonw8gpjh`},1:{className:`khameleon1de1mus khameleon8o8v82 khameleon1pzlopt khameleon1i535u5 khameleon1pcaw5z khameleon92x3c3 khameleon19ypqd9 khameleon32b0ac khameleon1q0q8m5 khameleon1utcnwd khameleontgwc6q khameleonw8gpjh khameleonv76oww khameleon1padx2d`}}[!!G<<0]),children:h})]})}var b,x,S,C,w,T,E;function D(){return(D=t((()=>{b=n(),i(),d(),h(),l(),p(),s(),v(),x=c(),S={info:`info`,warning:`warning`,error:`error`,success:`success`},C={info:`status`,warning:`alert`,error:`alert`,success:`status`},w={info:`accent`,warning:`warning`,error:`error`,success:`success`},T={root:{k1xSpc:`khameleon78zum5`,kXwgrk:`khameleondt5ytf`,kMv6JI:`khameleonjb2p0i`,$$css:!0},header:{k1xSpc:`khameleon78zum5`,kGNEyG:`khameleon1cy8zhl`,kOIVth:`khameleon1txdalj`,k8WAf4:`khameleon8o8v82`,kg3NbH:`khameleon1pzlopt`,$$css:!0},headerCardStandalone:{kaIpWk:`khameleon1hviunn`,krdFHd:null,kfmiAY:null,kVL7Gh:null,kT0f0o:null,kIxVMA:null,ksF3WI:null,kqGeR4:null,kYm2EN:null,$$css:!0},headerCardWithContent:{kIxVMA:`khameleon14k9mlb`,ksF3WI:`khameleonn9rnvb`,krdFHd:null,kfmiAY:null,kqGeR4:`khameleonfrllxf`,kYm2EN:`khameleonjppbhk`,kVL7Gh:null,kT0f0o:null,$$css:!0},headerCentered:{kGNEyG:`khameleon6s0dn4`,$$css:!0},endArea:{k1xSpc:`khameleon78zum5`,kGNEyG:`khameleon6s0dn4`,kOIVth:`khameleon1txdalj`,kmuXW:`khameleon2lah0s`,keTefX:`khameleonvc5jky`,kqGvvJ:`khameleon81ka23`,$$css:!0}},E={info:{kWkggS:`khameleongcxg3y`,$$css:!0},warning:{kWkggS:`khameleon24i8r5`,$$css:!0},error:{kWkggS:`khameleon1pritpl`,$$css:!0},success:{kWkggS:`khameleonu13z74`,$$css:!0}},y.displayName=`Banner`,y.__docgenInfo={description:`A persistent status notification banner for info, warning, error, or success messages.

Two-part visual structure:
- Header: colored status background with icon, title, description, and actions
- Content (optional): collapsible card background area for additional rich content

When children are provided, a collapse/expand chevron button appears in the
header end area (to the left of the dismiss button if present). Clicking it
toggles the visibility of the content area.

Manages its own dismissed state internally — the banner hides on dismiss
even if \`onDismiss\` is not provided, so product teams don't need to wire
up state management for basic dismiss behavior.

Uses \`role="alert"\` for error/warning and \`role="status"\` for info/success.

@example
\`\`\`
<Banner status="info" title="New update available" />
<Banner
  status="error"
  title="Something went wrong"
  description="Please try again later."
  isDismissable
  onDismiss={() => logDismiss()}
/>
<Banner
  status="error"
  title="Multiple errors found"
  description="The following issues need to be resolved:"
  isDismissable>
  <ul>
    <li>Email address is invalid</li>
    <li>Password must be at least 8 characters</li>
  </ul>
</Banner>
<Banner
  status="warning"
  title="Configuration changes"
  defaultIsExpanded>
  <p>Details here...</p>
</Banner>
\`\`\``,methods:[],displayName:`Banner`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:`Ref forwarded to the root element`},status:{required:!0,tsType:{name:`BannerStatusMap`},description:`Status type controlling the icon and color scheme.`},title:{required:!0,tsType:{name:`ReactNode`},description:`Title text or ReactNode displayed prominently in the header area.`},description:{required:!1,tsType:{name:`ReactNode`},description:`Optional description text below the title in the header area.`},icon:{required:!1,tsType:{name:`ReactNode`},description:`Override the default status icon.`},isDismissable:{required:!1,tsType:{name:`boolean`},description:`Whether the banner can be dismissed.
When true, shows a close button and manages internal dismissed state
so the banner disappears even if \`onDismiss\` is not provided.
@default false`,defaultValue:{value:`false`,computed:!1}},onDismiss:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Called when the dismiss button is clicked.
The banner will hide itself regardless of whether this callback is provided.`},endContent:{required:!1,tsType:{name:`ReactNode`},description:`Action button rendered in the header area (end-aligned).
Typically an Button with a secondary or ghost variant.

@example
\`\`\`
endContent={<Button label="Retry" variant="ghost" onClick={handleRetry} />}
\`\`\``},container:{required:!1,tsType:{name:`BannerContainerMap`},description:"Container type of the banner.\n- `card`: standalone card with border-radius\n- `section`: full-width section banner (no border-radius)\n@default 'card'",defaultValue:{value:`'card'`,computed:!1}},defaultIsExpanded:{required:!1,tsType:{name:`boolean`},description:`Whether the content area (children) starts expanded.
Only relevant when children are provided.
@default false`,defaultValue:{value:`false`,computed:!1}},children:{required:!1,tsType:{name:`ReactNode`},description:`Extra content rendered below the header in a collapsible card-background area.
Use for rich content like lists, links, or detailed information.
When provided, a collapse/expand toggle button appears in the header.`}},composes:[`Omit`]}})))()}function O({title:e,titleId:t,...n},r){return k.createElement(`svg`,Object.assign({xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`,"data-slot":`icon`,ref:r,"aria-labelledby":t},n),e?k.createElement(`title`,{id:t},e):null,k.createElement(`path`,{fillRule:`evenodd`,d:`M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z`,clipRule:`evenodd`}))}var k,A;function j(){return(j=t((()=>{k=e(n()),A=k.forwardRef(O)})))()}export{D as i,j as n,y as r,A as t};