import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./stylex-Dft6gtPK.js";import{n as r}from"./mergeProps-JRyAvMxc.js";import{n as i,t as a}from"./themeProps-DRQoVAIO.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Text-543dlLxz.js";import{n as l,t as u}from"./VisuallyHidden-BulQ9XDQ.js";import{n as d,t as f}from"./useLinkComponent-DvgS1IvL.js";import{n as p,t as m}from"./Icon-D9gPeCUm.js";import{n as h,t as g}from"./useTranslator-C3b4YzkD.js";import{r as _,t as v}from"./Tooltip-BZ2bhQ4l.js";import{n as y,t as b}from"./useInteractiveRole-DVPkep8l.js";import{n as x,t as S}from"./computeTargetAndRel-C5XLqk1a.js";function C(e){e.preventDefault()}function w({as:e,label:n,href:a,hasUnderline:o=!1,isDisabled:s=!1,isExternalLink:l=!1,newTabLabel:f,target:p,onClick:g,tooltip:_,isStandalone:b=!1,type:x=`body`,size:w,weight:O,color:k=`accent`,display:A=`inline`,maxLines:j=0,children:M,rel:N,xstyle:P,className:F,style:I,ref:L,...R}){let z=h(),B=f??z(`@khameleon.link.newTab`),V=d(e),H=y({href:a,onClick:g,isDisabled:s}),{target:U,rel:W}=S(l?`_blank`:p,N),G=H===`button`||H===`inert`&&a==null,K=(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(c,{type:x,size:w,weight:O,color:k,display:A,maxLines:j,children:M}),l&&!G&&(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(m,{icon:`externalLink`,size:`xsm`,color:`inherit`}),(0,T.jsx)(u,{children:B})]})]}),q;return q=G?(0,T.jsx)(`button`,{ref:L,type:`button`,onClick:g,"aria-label":n||void 0,"aria-disabled":s||void 0,tabIndex:s?-1:void 0,disabled:s,...r(i(`link`,{color:k}),t(E.base,E.buttonReset,D[k],o&&E.hasUnderline,b&&E.standalone,s&&E.disabled,P),F,I),...R,children:K}):s?(0,T.jsx)(`a`,{ref:L,onClick:C,"aria-label":n||void 0,"aria-disabled":!0,tabIndex:-1,...r(i(`link`,{color:k}),t(E.base,D[k],o&&E.hasUnderline,b&&E.standalone,E.disabled,P),F,I),...R,children:K}):(0,T.jsx)(V,{ref:L,href:a,target:U,rel:W,onClick:g,"aria-label":n||void 0,"aria-disabled":s||void 0,tabIndex:s?-1:void 0,...r(i(`link`,{color:k}),t(E.base,D[k],o&&E.hasUnderline,b&&E.standalone,s&&E.disabled,P),F,I),...R,children:K}),_?(0,T.jsx)(v,{content:_,placement:`above`,children:q}):q}var T,E,D;function O(){return(O=e((()=>{n(),p(),_(),s(),l(),f(),x(),b(),a(),g(),T=o(),E={base:{k1xSpc:`khameleon3nfvp2`,kGNEyG:`khameleon6s0dn4`,kOIVth:`khameleon1lsbc85`,kMv6JI:`khameleonjb2p0i`,kGuDYH:`khameleon1qlqyl8`,kLWn49:`khameleon15bjb6t`,k63SB2:`khameleon1pd3egz`,kybGjl:`khameleon1hl2dhg khameleon4ohgrr`,kkrTdU:`khameleon1ypdohk`,k1ekBW:`khameleon1mpt4pi`,kIyJzY:`khameleonuedmi6`,kAMwcw:`khameleonlr8y92`,kI3sdo:`khameleon17nn4n9`,kInvED:`khameleon1wfwxd8 khameleon7s97pk`,$$css:!0},buttonReset:{kWkggS:`khameleonjbqb8w`,ksu8eU:`khameleonng3xce`,kmVPX3:`khameleon1717udv`,kfzvcC:`khameleon67bb7w`,kVAEAm:`khameleon1n2onr6`,$$css:!0},hasUnderline:{kybGjl:`khameleon1bvjpef`,k1TLXF:null,kMnn75:null,kmVMDM:null,kNySMw:null,$$css:!0},disabled:{kkrTdU:`khameleon1h6gzvc`,kSiTet:`khameleonbyyjgo`,kfzvcC:`khameleon47corl`,$$css:!0},standalone:{kGuDYH:`khameleonjm74w1`,kLWn49:`khameleonw6l6zx`,$$css:!0}},D={primary:{kMwMTN:`khameleon1tgivj0 khameleon4z56r7`,$$css:!0},secondary:{kMwMTN:`khameleonv1l7n4 khameleon7ruf5d`,$$css:!0},disabled:{kMwMTN:`khameleonnbbluu`,$$css:!0},placeholder:{kMwMTN:`khameleonv1l7n4`,$$css:!0},accent:{kMwMTN:`khameleonjse4m1 khameleon17qfo7y`,$$css:!0},inherit:{kMwMTN:`khameleon1heor9g`,$$css:!0}},w.displayName=`Link`,w.__docgenInfo={description:`A styled anchor link component.

Uses Text internally for typography styling.
Wrap your app in <Theme> to apply a theme.

@example
\`\`\`
<Link href="/docs">Documentation</Link>
<Link href="https://github.com" isExternalLink>GitHub</Link>
<Link href="/settings" color="secondary">Settings</Link>
<Link href="/privacy" hasUnderline>Privacy Policy</Link>
<Link label="Close dialog" href="/home"><Icon icon="x" /></Link>
<Text type="large">
  Read our <Link href="/terms" type="inherit">terms</Link> first.
</Text>
\`\`\``,methods:[],displayName:`Link`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLAnchorElement | HTMLButtonElement>`,elements:[{name:`union`,raw:`HTMLAnchorElement | HTMLButtonElement`,elements:[{name:`HTMLAnchorElement`},{name:`HTMLButtonElement`}]}]},description:`Ref forwarded to the root element`},as:{required:!1,tsType:{name:`ElementType`},description:`Custom component to render instead of \`<a>\`.
Overrides the provider-level default set by LinkProvider.
Must accept href, className, style, and children props.
Only used when href is provided.`},label:{required:!1,tsType:{name:`string`},description:`Accessible label for the link.
Used as aria-label when content is not self-descriptive
(e.g. icon-only links). When children are text, this is
unnecessary — the link text itself serves as the label.`},href:{required:!1,tsType:{name:`string`},description:`Link destination URL.
When undefined, renders as a \`<button>\` with link styling
for semantic correctness and accessibility.`},hasUnderline:{required:!1,tsType:{name:`boolean`},description:`Whether the link should always display an underline.
When false, underline only appears on hover.
@default false`,defaultValue:{value:`false`,computed:!1}},isDisabled:{required:!1,tsType:{name:`boolean`},description:`Whether the link is disabled.
A disabled link renders as a plain anchor without an href (and without
target/rel/onClick), so it cannot be focused or activated — no
navigation and no onClick, even via programmatic focus or assistive
technology activation.
@default false`,defaultValue:{value:`false`,computed:!1}},isExternalLink:{required:!1,tsType:{name:`boolean`},description:`Whether the link opens in a new tab with an external link icon.
When true, sets target="_blank" and rel="noopener noreferrer".
@default false`,defaultValue:{value:`false`,computed:!1}},newTabLabel:{required:!1,tsType:{name:`string`},description:`Screen-reader text appended to an external link to announce that it opens
in a new tab (the visual icon is decorative). Override for localization.
@default '(opens in new tab)'`},target:{required:!1,tsType:{name:`string`},description:`Where to open the linked document.
Overridden to "_blank" when isExternalLink is true.`},rel:{required:!1,tsType:{name:`string`},description:`Link relationship (e.g. "noopener noreferrer").
Automatically includes "noopener noreferrer" when isExternalLink is true.`},download:{required:!1,tsType:{name:`union`,raw:`string | boolean`,elements:[{name:`string`},{name:`boolean`}]},description:`Causes the browser to download the linked URL. A string value
specifies the suggested filename.`},referrerPolicy:{required:!1,tsType:{name:`ReactHTMLAttributeReferrerPolicy`,raw:`React.HTMLAttributeReferrerPolicy`},description:`Referrer policy for the link.`},onClick:{required:!1,tsType:{name:`ReactMouseEventHandler`,raw:`React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>`,elements:[{name:`union`,raw:`HTMLAnchorElement | HTMLButtonElement`,elements:[{name:`HTMLAnchorElement`},{name:`HTMLButtonElement`}]}]},description:`Click handler. Fires before navigation (when href is set),
or as the primary action (when href is undefined).`},tooltip:{required:!1,tsType:{name:`string`},description:`Tooltip text to display on hover.`},isStandalone:{required:!1,tsType:{name:`boolean`},description:`Whether the link is standalone (not inline within text).
Applies base font sizing when true.
@default false`,defaultValue:{value:`false`,computed:!1}},type:{required:!1,tsType:{name:`union`,raw:`BuiltinTextType | (keyof CustomTextTypes & string)`,elements:[{name:`union`,raw:`| 'body'
| 'large'
| 'label'
| 'supporting'
| 'code'
| 'display-1'
| 'display-2'
| 'display-3'
| 'inherit'`,elements:[{name:`literal`,value:`'body'`},{name:`literal`,value:`'large'`},{name:`literal`,value:`'label'`},{name:`literal`,value:`'supporting'`},{name:`literal`,value:`'code'`},{name:`literal`,value:`'display-1'`},{name:`literal`,value:`'display-2'`},{name:`literal`,value:`'display-3'`},{name:`literal`,value:`'inherit'`}]},{name:`unknown`}]},description:`Semantic text type for Text. Determines base typography.

Use \`type="inherit"\` for inline links inside an existing \`Text\` element so
the link adopts the surrounding text's size and line-height instead of
imposing its own (e.g. a link within a \`large\` paragraph).
@default 'body'`,defaultValue:{value:`'body'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`| '4xs'
| '3xs'
| '2xs'
| 'xsm'
| 'sm'
| 'base'
| 'lg'
| 'xl'
| '2xl'
| '3xl'
| '4xl'`,elements:[{name:`literal`,value:`'4xs'`},{name:`literal`,value:`'3xs'`},{name:`literal`,value:`'2xs'`},{name:`literal`,value:`'xsm'`},{name:`literal`,value:`'sm'`},{name:`literal`,value:`'base'`},{name:`literal`,value:`'lg'`},{name:`literal`,value:`'xl'`},{name:`literal`,value:`'2xl'`},{name:`literal`,value:`'3xl'`},{name:`literal`,value:`'4xl'`}]},description:`Explicit font size override. Forwarded to Text.`},weight:{required:!1,tsType:{name:`union`,raw:`'normal' | 'medium' | 'semibold' | 'bold'`,elements:[{name:`literal`,value:`'normal'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'semibold'`},{name:`literal`,value:`'bold'`}]},description:`Font weight override. Forwarded to Text.`},color:{required:!1,tsType:{name:`union`,raw:`| 'primary'
| 'secondary'
| 'disabled'
| 'placeholder'
| 'accent'
| 'inherit'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'disabled'`},{name:`literal`,value:`'placeholder'`},{name:`literal`,value:`'accent'`},{name:`literal`,value:`'inherit'`}]},description:`Text color. Forwarded to Text.
@default 'accent'`,defaultValue:{value:`'accent'`,computed:!1}},display:{required:!1,tsType:{name:`union`,raw:`'inline' | 'block'`,elements:[{name:`literal`,value:`'inline'`},{name:`literal`,value:`'block'`}]},description:`Display type for Text. Forwarded to Text.
@default 'inline'`,defaultValue:{value:`'inline'`,computed:!1}},maxLines:{required:!1,tsType:{name:`number`},description:`Maximum lines before truncation. Forwarded to Text.
@default 0`,defaultValue:{value:`0`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:`Link content (required).`}},composes:[`Omit`]}})))()}export{O as n,w as t};