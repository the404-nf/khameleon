import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./stylex-Dft6gtPK.js";import{n as r}from"./mergeProps-JRyAvMxc.js";import{n as i,t as a}from"./themeProps-DRQoVAIO.js";import{d as o,i as s,l as c,n as l,r as u,t as d}from"./padding.stylex-TM6mEu5-.js";import{t as f}from"./jsx-runtime-DeHZSEgm.js";import{n as p,t as m}from"./container.stylex-DLBOtleI.js";function h({width:e,height:n,maxWidth:a,minHeight:s,children:f,padding:p,variant:h=`default`,xstyle:b,className:x,style:S,ref:C,...w}){let T=n!=null&&n!==`auto`,E=p==null,D=p??4,O=o[D];return(0,g.jsx)(`div`,{ref:C,...r(i(`card`,{variant:h}),t(_.card,v[h],T&&_.scrollable,y.sizing(e??null,n??null,a??null,s??null),...m(E?{useThemeDefault:`card`}:{paddingInnerX:O,paddingInnerY:O,paddingOuterX:O,paddingOuterY:O}),!E&&D!==4&&c[D],!E&&D!==4&&u[D],!E&&D!==4&&l[D],!E&&D!==4&&d[D],h==="default"&&_.withBorder,b),x,S),...w,children:f})}var g,_,v,y;function b(){return(b=e((()=>{n(),p(),s(),a(),g=f(),_={card:{"--_card-radius":`khameleon2kkz0m`,kaIpWk:`khameleon153u1i6`,kVQacm:`khameleon7giv3`,$$css:!0},withBorder:{kMzoRj:`khameleon1litavf`,kjGldf:null,k2ei4v:null,kZ1KPB:null,ke9TFa:null,kWqL5O:null,kLoX6v:null,kEafiO:null,kt9PQ7:null,ksu8eU:`khameleon1y0btm7`,kJRH4f:null,kVhnKS:null,k4WBpm:null,k8ry5P:null,kSWEuD:null,kDUl1X:null,kPef9Z:null,kfdmCh:null,kVAM5u:`khameleonvy26l8`,kzOINU:null,kGJrpR:null,kaZRDh:null,kBCPoo:null,k26BEO:null,k5QoK5:null,kLZC3w:null,kL6WhQ:null,kZCmMZ:`khameleons19ii7`,kwRFfy:`khameleon12frdag`,kE3dHu:null,kpe85a:null,kLKAdn:`khameleon1nex4ik`,kGO01o:`khameleonbv1mwh`,$$css:!0},scrollable:{kVQacm:`khameleonysyzu8`,kXHlph:null,kORKVm:null,$$css:!0}},v={default:{kWkggS:`khameleon1de1mus`,$$css:!0},transparent:{kWkggS:`khameleonjbqb8w`,$$css:!0},muted:{kWkggS:`khameleonwmxj5m`,$$css:!0},blue:{kWkggS:`khameleon1o0wnni`,$$css:!0},cyan:{kWkggS:`khameleon1rgj867`,$$css:!0},gray:{kWkggS:`khameleonspzpui`,$$css:!0},green:{kWkggS:`khameleon1sqjeoo`,$$css:!0},orange:{kWkggS:`khameleon1e9xt6e`,$$css:!0},pink:{kWkggS:`khameleonnpoty2`,$$css:!0},purple:{kWkggS:`khameleon16i6n6f`,$$css:!0},red:{kWkggS:`khameleon1cibrc5`,$$css:!0},teal:{kWkggS:`khameleon1jtji5o`,$$css:!0},yellow:{kWkggS:`khameleon1bo7t0x`,$$css:!0}},y={sizing:(e,t,n,r)=>[{kzqmXN:e==null?e:`khameleon5lhr3w`,kZKoxP:t==null?t:`khameleon16ye13r`,ks0D6T:n==null?n:`khameleonf68679`,kAzted:r==null?r:`khameleon82snj4`,$$css:!0},{"--x-width":(e=>typeof e==`number`?e+`px`:e??void 0)(e),"--x-height":(e=>typeof e==`number`?e+`px`:e??void 0)(t),"--x-maxWidth":(e=>typeof e==`number`?e+`px`:e??void 0)(n),"--x-minHeight":(e=>typeof e==`number`?e+`px`:e??void 0)(r)}]},h.displayName=`Card`,h.__docgenInfo={description:`A card container with border and themed styling.

Applies card-specific appearance (background, border, border-radius)
and sets CSS variables for child layout components.

@compositionHint Use as a top-level container for elevated content.
Pair with Layout for structured header/content/footer layouts.

@example
\`\`\`
<Card width={400} height={300}>
  <Layout
    header={<LayoutHeader hasDivider>Title</LayoutHeader>}
    content={<LayoutContent>Content</LayoutContent>}
    footer={<LayoutFooter hasDivider>Actions</LayoutFooter>}
  />
</Card>
\`\`\`

@example
\`\`\`
<Card variant="blue" width={300}>
  <p>Blue tinted card</p>
</Card>
\`\`\`

@example
\`\`\`
<Card variant="muted" width={300}>
  <p>Subtle de-emphasised card</p>
</Card>
\`\`\``,methods:[],displayName:`Card`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:``},className:{required:!1,tsType:{name:`string`},description:`CSS class name(s) appended to the root element.`},style:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:`Inline styles to apply to the root element.`},width:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Width of the card.
Numbers are treated as pixels, strings are used as-is.`},height:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Height of the card.
Numbers are treated as pixels, strings are used as-is.`},maxWidth:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Maximum width of the card.
Numbers are treated as pixels, strings are used as-is.`},minHeight:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Minimum height of the card.
Numbers are treated as pixels, strings are used as-is.`},children:{required:!1,tsType:{name:`ReactNode`},description:`Content to render inside the card.
Should typically be Layout child components.`},padding:{required:!1,tsType:{name:`union`,raw:`0 | 0.5 | 1 | 1.5 | 2 | 3 | 4 | 5 | 6 | 8 | 10`,elements:[{name:`literal`,value:`0`},{name:`literal`,value:`0.5`},{name:`literal`,value:`1`},{name:`literal`,value:`1.5`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`},{name:`literal`,value:`6`},{name:`literal`,value:`8`},{name:`literal`,value:`10`}]},description:`Internal padding of the card using the spacing scale.
Accepts numeric spacing steps: 0, 0.5, 1, 1.5, 2, 3, 4, 5, 6, 8, 10.
@default 4 (16px)`},variant:{required:!1,tsType:{name:`union`,raw:`| 'default'
| 'transparent'
| 'muted'
| 'blue'
| 'cyan'
| 'gray'
| 'green'
| 'orange'
| 'pink'
| 'purple'
| 'red'
| 'teal'
| 'yellow'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'transparent'`},{name:`literal`,value:`'muted'`},{name:`literal`,value:`'blue'`},{name:`literal`,value:`'cyan'`},{name:`literal`,value:`'gray'`},{name:`literal`,value:`'green'`},{name:`literal`,value:`'orange'`},{name:`literal`,value:`'pink'`},{name:`literal`,value:`'purple'`},{name:`literal`,value:`'red'`},{name:`literal`,value:`'teal'`},{name:`literal`,value:`'yellow'`}]},description:"Background color variant.\n- `default`: standard card background with visible border\n- `transparent`: no background, no visible border — for grouping without visual weight\n- `muted`: subtle muted background for de-emphasised cards\n- Non-semantic: `blue`, `cyan`, `gray`, `green`, `orange`, `pink`, `purple`, `red`, `teal`, `yellow`\n@default 'default'",defaultValue:{value:`'default'`,computed:!1}}},composes:[`Omit`]}})))()}export{b as n,h as t};