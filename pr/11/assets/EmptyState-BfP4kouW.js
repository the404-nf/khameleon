import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./stylex-Dft6gtPK.js";import{n as i}from"./mergeProps-JRyAvMxc.js";import{n as a,t as o}from"./themeProps-DRQoVAIO.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";function c({title:e,description:t,icon:r,actions:o,headingLevel:s=3,isCompact:c=!1,xstyle:f,className:p,style:m,ref:h,...g}){let _=`h${s}`;return(0,u.jsxs)(`div`,{ref:h,role:`status`,...i(a(`empty-state`,{variant:c?`compact`:null}),n(d.container,c&&d.containerCompact,f),p,m),...g,children:[r!=null&&(0,u.jsx)(`div`,{"aria-hidden":`true`,children:r}),(0,u.jsxs)(`div`,{className:`khameleon78zum5 khameleondt5ytf khameleon6s0dn4 khameleonxc7z9f`,children:[(0,l.createElement)(_,{0:{className:`khameleon1ghz6dp khameleonjb2p0i khameleon18juvz8 khameleon2mo6ok khameleonf74fhv khameleon1tgivj0`},1:{className:`khameleon1ghz6dp khameleonjb2p0i khameleon2mo6ok khameleonf74fhv khameleon1tgivj0 khameleoncr08ib`}}[!!c<<0],e),t!=null&&(0,u.jsx)(`div`,{...{0:{className:`khameleon1ghz6dp khameleonjb2p0i khameleonjm74w1 khameleon1sodnla khameleonw6l6zx khameleonv1l7n4`},1:{className:`khameleon1ghz6dp khameleonjb2p0i khameleon1sodnla khameleonw6l6zx khameleonv1l7n4 khameleon141an7d`}}[!!c<<0],children:t})]}),o!=null&&(0,u.jsx)(`div`,{...{0:{className:`khameleon78zum5 khameleon1q0g3np khameleon6s0dn4 khameleon1txdalj khameleoncsaf9d`},1:{className:`khameleon78zum5 khameleon6s0dn4 khameleon1txdalj khameleoncsaf9d khameleondt5ytf`}}[!!c<<0],children:o})]})}var l,u,d;function f(){return(f=e((()=>{l=t(),r(),o(),u=s(),d={container:{k1xSpc:`khameleon78zum5`,kXwgrk:`khameleondt5ytf`,kGNEyG:`khameleon6s0dn4`,kjj79g:`khameleonl56j7k`,k9WMMc:`khameleon2b8uid`,kOIVth:`khameleon18g69wz`,k8WAf4:`khameleonmfvnks`,kg3NbH:`khameleonm7rs69`,$$css:!0},containerCompact:{kOIVth:`khameleon1txdalj`,k8WAf4:`khameleon1na6nto`,kg3NbH:`khameleon1pzlopt`,$$css:!0}},c.displayName=`EmptyState`,c.__docgenInfo={description:`An empty state placeholder for content areas with no data.
Displays an icon or illustration, title, optional description, and action buttons.

Uses \`role="status"\` to announce content to screen readers.
Styles use Khameleon theme tokens via StyleX. Wrap your app in <Theme> to apply a theme.

@example
\`\`\`
<EmptyState
  title="No results found"
  description="Try adjusting your search or filters."
/>
<EmptyState
  icon={<Icon icon={InboxIcon} size="lg" />}
  title="No messages"
  description="You're all caught up!"
  actions={<Button label="Compose" variant="primary" />}
/>
\`\`\``,methods:[],displayName:`EmptyState`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:`Ref forwarded to the root element`},title:{required:!0,tsType:{name:`string`},description:`The primary message displayed in the empty state.`},description:{required:!1,tsType:{name:`string`},description:`Optional secondary text providing additional context.`},icon:{required:!1,tsType:{name:`ReactNode`},description:`Optional icon or illustration displayed above the title.
Rendered as decorative (aria-hidden="true").`},actions:{required:!1,tsType:{name:`ReactNode`},description:"Optional action buttons displayed below the description.\nLaid out horizontally by default, stacked vertically when `isCompact`."},headingLevel:{required:!1,tsType:{name:`union`,raw:`1 | 2 | 3 | 4 | 5 | 6`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`},{name:`literal`,value:`6`}]},description:`Semantic heading level for the title element.
Controls only the rendered HTML tag (h1–h6) so the title fits the
document outline. This is a semantic change for accessibility and does
not change the visual size of the title, which stays fixed regardless
of level.
@default 3`,defaultValue:{value:`3`,computed:!1}},isCompact:{required:!1,tsType:{name:`boolean`},description:`Use compact variant for constrained spaces with reduced spacing.
@default false`,defaultValue:{value:`false`,computed:!1}}},composes:[`Omit`]}})))()}export{f as n,c as t};