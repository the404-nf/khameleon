import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./stylex-Dft6gtPK.js";import{c as i,l as a,s as o,u as s}from"./LayoutContent-BygUy9He.js";import{n as c}from"./mergeProps-JRyAvMxc.js";import{n as l,t as u}from"./themeProps-DRQoVAIO.js";import{i as d,l as f,n as p,r as m,t as h}from"./padding.stylex-TM6mEu5-.js";import{t as g}from"./jsx-runtime-DeHZSEgm.js";function _({children:e,hasDivider:t=!1,isScrollable:r=!0,label:i,padding:s,role:u,width:d,resizable:g,xstyle:_,className:S,style:C,ref:w,...T}){let E=(0,v.use)(a),{hasHeader:D,hasFooter:O}=(0,v.use)(o),k=g?g._size:d,A=E===`start`,j=E===`end`,M=s===0,N=!t&&!M&&s==null,P=A?b.dividerEnd:j?b.dividerStart:null,F=A?b.collapseEnd:j?b.collapseStart:null;return(0,y.jsx)(`div`,{ref:w,role:u,"aria-label":i,...c(l(`layout-panel`),n(b.panel,x.sizing(k??null),A&&!M&&s==null&&b.startPanel,j&&!M&&s==null&&b.endPanel,!D&&!M&&s==null&&b.noHeader,!O&&!M&&s==null&&b.noFooter,r&&b.scrollable,M&&b.fullBleed,s!=null&&f[s],s!=null&&m[s],s!=null&&p[s],s!=null&&h[s],t&&P,N&&F,_),S,C),...T,children:e})}var v,y,b,x;function S(){return(S=e((()=>{v=t(),r(),s(),i(),u(),d(),y=g(),b={panel:{kB7OPa:`khameleon9f619`,kmuXW:`khameleon2lah0s`,kVQacm:`khameleon7giv3`,kZCmMZ:`khameleonwjyata`,kwRFfy:`khameleon1peupej`,kLKAdn:`khameleonqty4a`,kGO01o:`khameleong476vw`,"--container-padding-inline-start":`khameleon408pgh`,"--container-padding-inline-end":`khameleonikqloz`,"--container-padding-block-start":`khameleonjmgx01`,"--container-padding-block-end":`khameleoni9ns85`,$$css:!0},startPanel:{kZCmMZ:`khameleon139j0dd`,kE3dHu:null,kpe85a:null,$$css:!0},endPanel:{kwRFfy:`khameleonpc6k2p`,kE3dHu:null,kpe85a:null,$$css:!0},noHeader:{kLKAdn:`khameleon81pis9`,$$css:!0},noFooter:{kGO01o:`khameleonon7vh3`,$$css:!0},fullBleed:{kZCmMZ:`khameleon1c1uobl`,kwRFfy:`khameleonyri2b`,kE3dHu:null,kpe85a:null,kLKAdn:`khameleonexx8yu`,kGO01o:`khameleon18d9i69`,"--container-padding-inline-start":`khameleonrhngw9`,"--container-padding-inline-end":`khameleonjsfl84`,"--container-padding-block-start":`khameleon1047aw6`,"--container-padding-block-end":`khameleonax9j7h`,$$css:!0},scrollable:{kVQacm:`khameleonysyzu8`,kXHlph:null,kORKVm:null,$$css:!0},dividerEnd:{ke9TFa:`khameleon1lun4ml`,kZ1KPB:null,kWqL5O:null,k8ry5P:`khameleon18b5jzi`,k4WBpm:null,kSWEuD:null,kBCPoo:`khameleon1gejf6u`,kaZRDh:null,k26BEO:null,$$css:!0},dividerStart:{k2ei4v:`khameleonpilrb4`,kZ1KPB:null,kWqL5O:null,kVhnKS:`khameleon1t7ytsu`,k4WBpm:null,kSWEuD:null,kGJrpR:`khameleon1j92z86`,kaZRDh:null,k26BEO:null,$$css:!0},collapseStart:{keTefX:`khameleon1wim8z0`,koQZXg:null,km5ZXQ:null,$$css:!0},collapseEnd:{k71WvV:`khameleon1kpg4um`,koQZXg:null,km5ZXQ:null,$$css:!0}},x={sizing:e=>[{kzqmXN:e==null?e:`khameleon5lhr3w`,$$css:!0},{"--x-width":(e=>typeof e==`number`?e+`px`:e??void 0)(e)}]},_.displayName=`LayoutPanel`,_.__docgenInfo={description:`Sidebar or side panel for Layout. Use in the \`start\` slot for left navigation
or in the \`end\` slot for detail/inspector panels.
Renders with optional divider and context-aware padding.
Divider position is auto-detected based on which slot the panel is in.

Already provides its own padding and scroll — don't add padding or
overflow to children. Use \`padding={0}\` if you need edge-to-edge content.

@example
\`\`\`
<LayoutContainer variant="card">
  <Layout
    start={
      <LayoutPanel hasDivider role="navigation">
        <Navigation />
      </LayoutPanel>
    }
    content={<LayoutContent>Main content</LayoutContent>}
    end={
      <LayoutPanel hasDivider role="complementary">
        <Sidebar />
      </LayoutPanel>
    }
  />
</LayoutContainer>
\`\`\``,methods:[],displayName:`LayoutPanel`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:`Content to render inside the panel.`},hasDivider:{required:!1,tsType:{name:`boolean`},description:`Adds a themed border on the appropriate edge.
- Start panel: border on end edge (right in LTR)
- End panel: border on start edge (left in LTR)
When false, spacing collapse is applied automatically for seamless visual flow.

Note: When using \`resizable\` with an adjacent \`ResizeHandle hasDivider\`,
set this to \`false\` to avoid a double-line artifact.
@default false`,defaultValue:{value:`false`,computed:!1}},padding:{required:!1,tsType:{name:`union`,raw:`0 | 0.5 | 1 | 1.5 | 2 | 3 | 4 | 5 | 6 | 8 | 10`,elements:[{name:`literal`,value:`0`},{name:`literal`,value:`0.5`},{name:`literal`,value:`1`},{name:`literal`,value:`1.5`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`},{name:`literal`,value:`6`},{name:`literal`,value:`8`},{name:`literal`,value:`10`}]},description:`Internal padding of the panel using the spacing scale.
Accepts numeric spacing steps: 0, 0.5, 1, 1.5, 2, 3, 4, 5, 6, 8, 10.
Overrides the default padding from the layout container.`},isScrollable:{required:!1,tsType:{name:`boolean`},description:`Enables scrollable overflow for the panel.
Set to false for auto-height layouts where sticky positioning
needs to work with parent containers.
@default true`,defaultValue:{value:`true`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:`Accessible label for the landmark.
Required when role is set and multiple landmarks of the same type exist.`},role:{required:!1,tsType:{name:`AriaRole`},description:`ARIA landmark role for accessibility.
Use 'navigation' or 'complementary' only for top-level layouts (not nested).`},width:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Width of the panel.
Numbers are treated as pixels, strings are used as-is.
When \`resizable\` is provided, this is ignored — the hook controls width.`},resizable:{required:!1,tsType:{name:`ResizableProps`},description:`Resize props from \`useResizable()\`. When provided, the panel width
is driven by the hook and a resize handle should be placed adjacent
to this panel.

@example
\`\`\`
const sidebar = useResizable({ defaultSize: 250, minSizePx: 200 });
<LayoutPanel resizable={sidebar.props}>
  <Navigation />
</LayoutPanel>
<ResizeHandle resizable={sidebar.props} />
\`\`\``}},composes:[`Omit`]}})))()}export{S as n,_ as t};