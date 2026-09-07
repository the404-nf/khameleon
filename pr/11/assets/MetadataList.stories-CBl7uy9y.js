import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{n as r,t as i}from"./stylex-Dft6gtPK.js";import{n as a}from"./mergeProps-JRyAvMxc.js";import{n as o,t as s}from"./themeProps-DRQoVAIO.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./Icon-D9gPeCUm.js";import{n as d,t as f}from"./Token-DE1MqWz4.js";var p,m;function h(){return(h=t((()=>{p=n(),m=(0,p.createContext)(null),m.displayName=`MetadataListContext`})))()}function g({children:e,columns:t=`single`,label:n,maxNumOfItems:i,orientation:s=`vertical`,title:c,xstyle:l,className:u,style:d,"data-testid":f,ref:p}){let h=n??(t===`multi`||typeof t==`number`&&t>1?x:b),[g,S]=(0,_.useState)(!1),C=(0,_.useId)(),w=(0,_.useMemo)(()=>({labelConfig:s===`horizontal`?x:h,orientation:s}),[h,s]),T=_.Children.toArray(e),E=s===`horizontal`,D=E?void 0:i,O=D!=null&&T.length>D,k=O&&!g?T.slice(0,D):T,A=c==null?null:(0,v.jsx)(`div`,{className:`khameleonep27e5`,children:c}),j=()=>E?y.horizontal:h.position===`top`?t===`single`||t===1?y.gridStackedSingle:y.gridStackedMulti:t===`single`||t===1?y.gridSingle:y.gridMulti,M=!E&&h.position===`start`&&typeof t==`number`&&t>1?{gridTemplateColumns:`repeat(${t}, auto 1fr)`}:!E&&h.position===`start`&&h.width!=null?{gridTemplateColumns:`${typeof h.width==`number`?`${h.width}px`:h.width} 1fr`}:void 0;return(0,v.jsx)(m,{value:w,children:(0,v.jsxs)(`div`,{ref:p,"data-testid":f,...a(o(`metadata-list`,{columns:String(t),orientation:s}),r(y.root,l),u,d),children:[A,(0,v.jsx)(`dl`,{id:C,...a(r(y.dl,j()),{style:M}),children:k}),O&&(0,v.jsx)(`button`,{type:`button`,"aria-controls":C,"aria-expanded":g,onClick:()=>S(e=>!e),className:`khameleonjyslct khameleon11g6tue khameleon1gs6z28 khameleon15nmkw0 khameleon1ypdohk khameleonqwr325 khameleonjm74w1 khameleonw6l6zx khameleon1e4wzip khameleonjb2p0i khameleon1yc453h khameleonqcrz7y`,children:g?`Show less`:`Show more`})]})})}var _,v,y,b,x;function S(){return(S=t((()=>{_=n(),i(),h(),s(),v=c(),y={root:{k1xSpc:`khameleon78zum5`,kXwgrk:`khameleondt5ytf`,$$css:!0},dl:{kogj98:`khameleon1ghz6dp`,kmVPX3:`khameleon1717udv`,$$css:!0},gridSingle:{k1xSpc:`khameleonrvj5dj`,kumcoG:`khameleon1pmbctz`,kOIVth:`khameleonpec5dj`,khm7nJ:null,k1C7PZ:null,kGNEyG:`khameleon1pha0wt`,$$css:!0},gridMulti:{k1xSpc:`khameleonrvj5dj`,kumcoG:`khameleon189bvgu`,kOIVth:`khameleon18g69wz`,khm7nJ:null,k1C7PZ:null,$$css:!0},gridStackedSingle:{k1xSpc:`khameleonrvj5dj`,kumcoG:`khameleon1y6fwsi`,kOIVth:`khameleonjcht0a`,khm7nJ:null,k1C7PZ:null,$$css:!0},gridStackedMulti:{k1xSpc:`khameleonrvj5dj`,kumcoG:`khameleon189bvgu`,kOIVth:`khameleon18g69wz`,khm7nJ:null,k1C7PZ:null,$$css:!0},horizontal:{k1xSpc:`khameleon78zum5`,kXwgrk:`khameleon1q0g3np`,kwnvtZ:`khameleon1a02dak`,kOIVth:`khameleon18g69wz`,khm7nJ:null,k1C7PZ:null,$$css:!0}},b={position:`start`},x={position:`top`},g.displayName=`MetadataList`,g.__docgenInfo={description:``,methods:[],displayName:`MetadataList`,props:{ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:`Ref forwarded to the root element`},children:{required:!0,tsType:{name:`ReactNode`},description:`Metadata list items. Should be MetadataListItem components.`},columns:{required:!1,tsType:{name:`union`,raw:`'multi' | 'single' | number`,elements:[{name:`literal`,value:`'multi'`},{name:`literal`,value:`'single'`},{name:`number`}]},description:`Column layout mode.
- 'single': Items in a single column
- 'multi': Auto-fill columns based on available width
- number: Fixed number of columns
@default 'single'`,defaultValue:{value:`'single'`,computed:!1}},label:{required:!1,tsType:{name:`MetadataListLabelConfig`},description:`Label display configuration.
- position: 'start' places labels to the left, 'top' stacks labels above content
- width: Custom label width (number in px or CSS string)

Defaults to \`{ position: 'top' }\` for multi-column layouts and
\`{ position: 'start' }\` for single-column layouts.`},maxNumOfItems:{required:!1,tsType:{name:`number`},description:`Maximum number of items to show before collapsing.
When set and items exceed this count, a "Show more" / "Show less"
toggle appears.`},orientation:{required:!1,tsType:{name:`union`,raw:`'vertical' | 'horizontal'`,elements:[{name:`literal`,value:`'vertical'`},{name:`literal`,value:`'horizontal'`}]},description:`Layout orientation for metadata items.
- 'vertical': Items stack vertically (default)
- 'horizontal': Items flow horizontally with flex-wrap

In horizontal mode, items display with labels stacked above content
and wrap to new lines as needed. The following props are ignored:
\`columns\`, \`label\`, \`maxNumOfItems\`.
@default 'vertical'`,defaultValue:{value:`'vertical'`,computed:!1}},title:{required:!1,tsType:{name:`ReactNode`},description:`Optional title or heading rendered above the list.`},"data-testid":{required:!1,tsType:{name:`string`},description:`Test ID for testing frameworks.`}},composes:[`Omit`]}})))()}function C({children:e,icon:t,label:n,xstyle:i,className:s,style:c,"data-testid":l,ref:u}){let d=(0,w.use)(m),f=(d?.labelConfig.position??`start`)===`top`||d?.orientation===`horizontal`,p=(0,T.jsxs)(T.Fragment,{children:[t!=null&&(0,T.jsx)(`span`,{className:`khameleon3nfvp2 khameleon6s0dn4 khameleon2lah0s khameleonv1l7n4`,children:t}),n]});return f?(0,T.jsxs)(`div`,{ref:u,"data-testid":l,...a(o(`metadata-list-item`),r(E.stackedWrapper,i),s,c),children:[(0,T.jsx)(`dt`,{className:`khameleonv1l7n4 khameleonjm74w1 khameleonw6l6zx khameleon1e4wzip khameleon78zum5 khameleon6s0dn4 khameleon1txdalj khameleon1ghz6dp khameleon1717udv`,children:p}),(0,T.jsx)(`dd`,{className:`khameleon1tgivj0 khameleonjm74w1 khameleonw6l6zx khameleon1ghz6dp khameleon1717udv khameleon13faqbe`,children:e})]}):(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(`dt`,{ref:u,"data-testid":l?`${l}-label`:void 0,...a(o(`metadata-list-item`),r(E.label,i),s,c),children:p}),(0,T.jsx)(`dd`,{"data-testid":l?`${l}-value`:void 0,className:`khameleon1tgivj0 khameleonjm74w1 khameleonw6l6zx khameleon1ghz6dp khameleon1717udv khameleonjwf9q1 khameleon13faqbe`,children:e})]})}var w,T,E;function D(){return(D=t((()=>{w=n(),i(),h(),s(),T=c(),E={label:{kMwMTN:`khameleonv1l7n4`,kGuDYH:`khameleonjm74w1`,kLWn49:`khameleonw6l6zx`,k63SB2:`khameleon1e4wzip`,k1xSpc:`khameleon78zum5`,kGNEyG:`khameleon6s0dn4`,kOIVth:`khameleon1txdalj`,kogj98:`khameleon1ghz6dp`,kmVPX3:`khameleon1717udv`,kAzted:`khameleonjwf9q1`,kTgw9:`khameleon13faqbe`,$$css:!0},stackedWrapper:{k1xSpc:`khameleon78zum5`,kXwgrk:`khameleondt5ytf`,kOIVth:`khameleon1lsbc85`,$$css:!0}},C.displayName=`MetadataListItem`,C.__docgenInfo={description:`A single labeled metadata value within an MetadataList.

Renders a \`<dt>\` / \`<dd>\` pair. Layout (side-by-side or stacked) is
determined by the parent MetadataList's label configuration.

@example
\`\`\`
<MetadataListItem label="Status">Active</MetadataListItem>
<MetadataListItem label="Created" icon={<CalendarIcon />}>
  January 1, 2023
</MetadataListItem>
\`\`\``,methods:[],displayName:`MetadataListItem`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:`Ref forwarded to the root element`},children:{required:!0,tsType:{name:`ReactNode`},description:`Content value for this metadata item.`},icon:{required:!1,tsType:{name:`ReactNode`},description:`Icon rendered before the label text.`},label:{required:!0,tsType:{name:`string`},description:`Label text for this metadata item.`},"data-testid":{required:!1,tsType:{name:`string`},description:`Test ID for testing frameworks.`}},composes:[`Omit`]}})))()}function O({title:e,titleId:t,...n},r){return k.createElement(`svg`,Object.assign({xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,"aria-hidden":`true`,"data-slot":`icon`,ref:r,"aria-labelledby":t},n),e?k.createElement(`title`,{id:t},e):null,k.createElement(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5`}))}var k,A;function j(){return(j=t((()=>{k=e(n()),A=k.forwardRef(O)})))()}function M({title:e,titleId:t,...n},r){return N.createElement(`svg`,Object.assign({xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,"aria-hidden":`true`,"data-slot":`icon`,ref:r,"aria-labelledby":t},n),e?N.createElement(`title`,{id:t},e):null,N.createElement(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z`}))}var N,P;function F(){return(F=t((()=>{N=e(n()),P=N.forwardRef(M)})))()}function I({title:e,titleId:t,...n},r){return L.createElement(`svg`,Object.assign({xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,"aria-hidden":`true`,"data-slot":`icon`,ref:r,"aria-labelledby":t},n),e?L.createElement(`title`,{id:t},e):null,L.createElement(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z`}),L.createElement(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M6 6h.008v.008H6V6Z`}))}var L,R;function z(){return(z=t((()=>{L=e(n()),R=L.forwardRef(I)})))()}var B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=t((()=>{S(),D(),l(),d(),F(),j(),z(),B=c(),V={title:`Core/MetadataList`,component:g,tags:[`autodocs`],argTypes:{columns:{control:`select`,options:[`single`,`multi`,2,3],description:`Column layout mode`},orientation:{control:`select`,options:[`vertical`,`horizontal`],description:`Layout orientation`}}},H={render:e=>(0,B.jsxs)(g,{...e,children:[(0,B.jsx)(C,{label:`Name`,children:`MetadataList`}),(0,B.jsx)(C,{label:`Status`,children:`Active`}),(0,B.jsx)(C,{label:`Owner`,children:`Joey`})]})},U={render:e=>(0,B.jsxs)(g,{columns:`multi`,...e,children:[(0,B.jsx)(C,{label:`Name`,children:`MetadataList`}),(0,B.jsx)(C,{label:`Status`,children:`Active`}),(0,B.jsx)(C,{label:`Owner`,children:`Joey`}),(0,B.jsx)(C,{label:`Created`,children:`Jan 15, 2026`}),(0,B.jsx)(C,{label:`Tags`,children:(0,B.jsxs)(`span`,{style:{display:`flex`,gap:4},children:[(0,B.jsx)(f,{label:`component`}),(0,B.jsx)(f,{label:`khameleon`})]})}),(0,B.jsx)(C,{label:`Priority`,children:`Tier 1`})]})},W={render:e=>(0,B.jsxs)(g,{title:(0,B.jsx)(`strong`,{children:`Component Details`}),columns:`multi`,...e,children:[(0,B.jsx)(C,{label:`Name`,children:`MetadataList`}),(0,B.jsx)(C,{label:`Status`,children:`Active`}),(0,B.jsx)(C,{label:`Owner`,children:`Joey`}),(0,B.jsx)(C,{label:`Created`,children:`Jan 15, 2026`})]})},G={render:e=>(0,B.jsxs)(g,{orientation:`horizontal`,...e,children:[(0,B.jsx)(C,{label:`Status`,children:`Active`}),(0,B.jsx)(C,{label:`Type`,children:`Premium`}),(0,B.jsx)(C,{label:`Owner`,children:`Joey`}),(0,B.jsx)(C,{label:`Created`,children:`Jan 15, 2026`})]})},K={render:e=>(0,B.jsxs)(g,{label:{position:`top`},...e,children:[(0,B.jsx)(C,{label:`Name`,children:`MetadataList`}),(0,B.jsx)(C,{label:`Status`,children:`Active`}),(0,B.jsx)(C,{label:`Owner`,children:`Joey`}),(0,B.jsx)(C,{label:`Tags`,children:(0,B.jsxs)(`span`,{style:{display:`flex`,gap:4},children:[(0,B.jsx)(f,{label:`component`}),(0,B.jsx)(f,{label:`khameleon`})]})})]})},q={render:e=>(0,B.jsxs)(g,{maxNumOfItems:3,...e,children:[(0,B.jsx)(C,{label:`Name`,children:`MetadataList`}),(0,B.jsx)(C,{label:`Status`,children:`Active`}),(0,B.jsx)(C,{label:`Owner`,children:`Joey`}),(0,B.jsx)(C,{label:`Created`,children:`Jan 15, 2026`}),(0,B.jsx)(C,{label:`Updated`,children:`Mar 26, 2026`}),(0,B.jsx)(C,{label:`Priority`,children:`Tier 1`})]})},J={render:e=>(0,B.jsxs)(g,{columns:2,...e,children:[(0,B.jsx)(C,{label:`Name`,children:`MetadataList`}),(0,B.jsx)(C,{label:`Status`,children:`Active`}),(0,B.jsx)(C,{label:`Owner`,children:`Joey`}),(0,B.jsx)(C,{label:`Priority`,children:`Tier 1`})]})},Y={render:e=>(0,B.jsxs)(g,{label:{position:`start`,width:200},...e,children:[(0,B.jsx)(C,{label:`Full Name`,children:`MetadataList Component`}),(0,B.jsx)(C,{label:`Current Status`,children:`Active`}),(0,B.jsx)(C,{label:`Primary Owner`,children:`Joey`})]})},X={render:e=>(0,B.jsxs)(g,{columns:`multi`,label:{position:`start`},...e,children:[(0,B.jsx)(C,{label:`Name`,children:`MetadataList`}),(0,B.jsx)(C,{label:`Status`,children:`Active`}),(0,B.jsx)(C,{label:`Owner`,children:`Joey`}),(0,B.jsx)(C,{label:`Created`,children:`Jan 15, 2026`})]})},Z={render:e=>(0,B.jsxs)(g,{columns:`multi`,...e,children:[(0,B.jsx)(C,{label:`Information`,icon:(0,B.jsx)(u,{icon:P,size:`sm`}),children:`Important details about this component`}),(0,B.jsx)(C,{label:`Created`,icon:(0,B.jsx)(u,{icon:A,size:`sm`}),children:`January 1, 2023`}),(0,B.jsx)(C,{label:`Tags`,icon:(0,B.jsx)(u,{icon:R,size:`sm`}),children:(0,B.jsxs)(`span`,{style:{display:`flex`,gap:4},children:[(0,B.jsx)(f,{label:`component`}),(0,B.jsx)(f,{label:`khameleon`})]})})]})},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => <MetadataList {...args}>
      <MetadataListItem label="Name">MetadataList</MetadataListItem>
      <MetadataListItem label="Status">Active</MetadataListItem>
      <MetadataListItem label="Owner">Joey</MetadataListItem>
    </MetadataList>
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => <MetadataList columns="multi" {...args}>
      <MetadataListItem label="Name">MetadataList</MetadataListItem>
      <MetadataListItem label="Status">Active</MetadataListItem>
      <MetadataListItem label="Owner">Joey</MetadataListItem>
      <MetadataListItem label="Created">Jan 15, 2026</MetadataListItem>
      <MetadataListItem label="Tags">
        <span style={{
        display: 'flex',
        gap: 4
      }}>
          <Token label="component" />
          <Token label="khameleon" />
        </span>
      </MetadataListItem>
      <MetadataListItem label="Priority">Tier 1</MetadataListItem>
    </MetadataList>
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => <MetadataList title={<strong>Component Details</strong>} columns="multi" {...args}>
      <MetadataListItem label="Name">MetadataList</MetadataListItem>
      <MetadataListItem label="Status">Active</MetadataListItem>
      <MetadataListItem label="Owner">Joey</MetadataListItem>
      <MetadataListItem label="Created">Jan 15, 2026</MetadataListItem>
    </MetadataList>
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => <MetadataList orientation="horizontal" {...args}>
      <MetadataListItem label="Status">Active</MetadataListItem>
      <MetadataListItem label="Type">Premium</MetadataListItem>
      <MetadataListItem label="Owner">Joey</MetadataListItem>
      <MetadataListItem label="Created">Jan 15, 2026</MetadataListItem>
    </MetadataList>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => <MetadataList label={{
    position: 'top'
  }} {...args}>
      <MetadataListItem label="Name">MetadataList</MetadataListItem>
      <MetadataListItem label="Status">Active</MetadataListItem>
      <MetadataListItem label="Owner">Joey</MetadataListItem>
      <MetadataListItem label="Tags">
        <span style={{
        display: 'flex',
        gap: 4
      }}>
          <Token label="component" />
          <Token label="khameleon" />
        </span>
      </MetadataListItem>
    </MetadataList>
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => <MetadataList maxNumOfItems={3} {...args}>
      <MetadataListItem label="Name">MetadataList</MetadataListItem>
      <MetadataListItem label="Status">Active</MetadataListItem>
      <MetadataListItem label="Owner">Joey</MetadataListItem>
      <MetadataListItem label="Created">Jan 15, 2026</MetadataListItem>
      <MetadataListItem label="Updated">Mar 26, 2026</MetadataListItem>
      <MetadataListItem label="Priority">Tier 1</MetadataListItem>
    </MetadataList>
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: args => <MetadataList columns={2} {...args}>
      <MetadataListItem label="Name">MetadataList</MetadataListItem>
      <MetadataListItem label="Status">Active</MetadataListItem>
      <MetadataListItem label="Owner">Joey</MetadataListItem>
      <MetadataListItem label="Priority">Tier 1</MetadataListItem>
    </MetadataList>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: args => <MetadataList label={{
    position: 'start',
    width: 200
  }} {...args}>
      <MetadataListItem label="Full Name">
        MetadataList Component
      </MetadataListItem>
      <MetadataListItem label="Current Status">Active</MetadataListItem>
      <MetadataListItem label="Primary Owner">Joey</MetadataListItem>
    </MetadataList>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: args => <MetadataList columns="multi" label={{
    position: 'start'
  }} {...args}>
      <MetadataListItem label="Name">MetadataList</MetadataListItem>
      <MetadataListItem label="Status">Active</MetadataListItem>
      <MetadataListItem label="Owner">Joey</MetadataListItem>
      <MetadataListItem label="Created">Jan 15, 2026</MetadataListItem>
    </MetadataList>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => <MetadataList columns="multi" {...args}>
      <MetadataListItem label="Information" icon={<Icon icon={InformationCircleIcon} size="sm" />}>
        Important details about this component
      </MetadataListItem>
      <MetadataListItem label="Created" icon={<Icon icon={CalendarIcon} size="sm" />}>
        January 1, 2023
      </MetadataListItem>
      <MetadataListItem label="Tags" icon={<Icon icon={TagIcon} size="sm" />}>
        <span style={{
        display: 'flex',
        gap: 4
      }}>
          <Token label="component" />
          <Token label="khameleon" />
        </span>
      </MetadataListItem>
    </MetadataList>
}`,...Z.parameters?.docs?.source}}},Q=[`Basic`,`MultiColumn`,`WithTitle`,`Horizontal`,`StackedLabelsSingleColumn`,`ShowMore`,`TwoColumns`,`CustomLabelWidth`,`MultiColumnSideLabels`,`WithIcons`]})))()}$();export{H as Basic,Y as CustomLabelWidth,G as Horizontal,U as MultiColumn,X as MultiColumnSideLabels,q as ShowMore,K as StackedLabelsSingleColumn,J as TwoColumns,Z as WithIcons,W as WithTitle,Q as __namedExportsOrder,V as default};