import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{n as r,t as i}from"./stylex-Dft6gtPK.js";import{n as a}from"./mergeProps-JRyAvMxc.js";import{n as o,t as s}from"./themeProps-DRQoVAIO.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./layerAnimations.stylex-4zSahtZp.js";import{n as d,t as f}from"./useIsomorphicLayoutEffect-vnms8l8s.js";import{n as p,t as m}from"./usePopover-rFQ8pNWs.js";import{n as h,t as g}from"./InteractiveRoleContext-qXvwHw-C.js";function _(e){return e.matches(x)?e:e.querySelector(x)}function v({children:e,anchorRef:t,content:n,placement:i=`below`,alignment:s=`start`,isOpen:c,onOpenChange:u,isEnabled:f=!0,width:m,label:h,hasCloseButton:v,closeButtonLabel:x,hasAutoFocus:C,hasLightDismiss:w=!0,hasEscapeDismiss:T=!0,xstyle:E,className:D,style:O,"data-testid":k}){let A=(0,y.useRef)(null),j=c!==void 0,M=(0,y.useRef)(0),N=(0,y.useCallback)(()=>{u?.(!0)},[u]),P=(0,y.useCallback)(()=>{M.current=Date.now(),u?.(!1)},[u]),F=p({dialogLabel:h,hasLightDismiss:w,hasEscapeDismiss:T,hasCloseButton:v,closeButtonLabel:x,hasAutoFocus:C,onShow:N,onHide:P}),I=(0,y.useCallback)(()=>{f&&(Date.now()-M.current<50||F.toggle())},[f,F]),L=(0,y.useCallback)(e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),I())},[I]),R=(0,y.useCallback)(e=>{e.setAttribute(`aria-haspopup`,F.triggerProps[`aria-haspopup`]),e.setAttribute(`aria-expanded`,String(F.triggerProps[`aria-expanded`])),e.setAttribute(`aria-controls`,F.triggerProps[`aria-controls`]),e.addEventListener(`click`,I);let t=e.tagName!==`BUTTON`&&e.getAttribute(`role`)===`button`;return t&&e.addEventListener(`keydown`,L),()=>{e.removeAttribute(`aria-haspopup`),e.removeAttribute(`aria-expanded`),e.removeAttribute(`aria-controls`),e.removeEventListener(`click`,I),t&&e.removeEventListener(`keydown`,L)}},[F,I,L]);d(()=>{if(!t)return;let e=t.current;if(!e)return;let n=_(e);if(n||console.warn(`Popover: anchorRef must reference a <button> or [role="button"] element. The popover trigger implements the button + dialog ARIA pattern.`),!n)return;F.triggerRef(e);let r=R(n);return()=>{F.triggerRef(null),r()}},[t,F,R]),d(()=>{if(t||typeof e==`function`)return;let n=A.current;if(!n)return;F.triggerRef(n);let r=_(n);if(r||console.warn(`Popover: children must contain a <button> or [role="button"] element. The popover trigger implements the button + dialog ARIA pattern.`),!r)return;let i=R(r);return()=>{F.triggerRef(null),i()}},[t,F,R]),d(()=>{j&&(c&&!F.isOpen?F.show():!c&&F.isOpen&&F.hide())},[c,j,F]);let z=m?S.customWidth(m):S.matchTrigger;if(t&&e==null)return(0,b.jsx)(b.Fragment,{children:F.render((0,b.jsx)(`div`,{"data-testid":k,...a(o(`popover`),r(S.contentPadding,E),D,O),children:n}),{placement:i,alignment:s,xstyle:[z,S.gap,l[i]]})});if(typeof e==`function`){let t={ref:F.triggerRef,onClick:I,"aria-haspopup":`dialog`,"aria-expanded":F.isOpen,"aria-controls":F.id};return(0,b.jsxs)(b.Fragment,{children:[e(t),F.render((0,b.jsx)(`div`,{"data-testid":k,...a(o(`popover`),r(S.contentPadding,E),D,O),children:n}),{placement:i,alignment:s,xstyle:[z,S.gap,l[i]]})]})}return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(g,{value:`button`,children:(0,b.jsx)(`div`,{ref:A,className:`khameleon3nfvp2`,children:e})}),F.render((0,b.jsx)(`div`,{"data-testid":k,...a(o(`popover`),r(S.contentPadding,E),D,O),children:n}),{placement:i,alignment:s,xstyle:[z,S.gap,l[i]]})]})}var y,b,x,S;function C(){return(C=t((()=>{y=e(n(),1),f(),i(),m(),u(),h(),s(),b=c(),x=`button, [role="button"]`,S={contentPadding:{kLKAdn:`khameleon1vlblms`,kGO01o:`khameleonvmdzux`,kZCmMZ:`khameleon126nfab`,kwRFfy:`khameleon1t818jl`,$$css:!0},gap:{keoZOQ:`khameleoncsaf9d`,k1K539:`khameleon14cgwvg`,$$css:!0},customWidth:e=>[{kzqmXN:(typeof e==`number`?`${e}px`:e)==null?typeof e==`number`?`${e}px`:e:`khameleon5lhr3w`,$$css:!0},{"--x-width":(e=>typeof e==`number`?e+`px`:e??void 0)(typeof e==`number`?`${e}px`:e)}],matchTrigger:{k7Eaqz:`khameleonrzjruh`,$$css:!0}},v.displayName=`Popover`,v.__docgenInfo={description:`A click-triggered popover for displaying interactive content anchored to a trigger.

Implements the button + dialog ARIA pattern. The trigger must contain a
\`<button>\` or \`[role="button"]\` element — the popover finds it and applies
click/keydown handlers and ARIA attributes automatically.

Uses an inline-flex wrapper as the CSS anchor for stable positioning
(immune to pressed-state transforms like \`:active { scale(0.98) }\`).

Focus is trapped inside the popover when open.
Supports light dismiss by default (click outside or Escape to close).

For hover-triggered overlays, use {@link HoverCard} instead.

@example
\`\`\`
<Popover label="Settings" content={<SettingsPanel />} placement="below">
  <Button label="Settings" />
</Popover>
<Popover
  isOpen={isOpen}
  onOpenChange={setIsOpen}
  label="Filter"
  content={<FilterForm />}>
  <Button label="Filter" />
</Popover>
<Popover
  anchorRef={myButtonRef}
  label="Actions"
  content={<ActionMenu />}
  placement="below"
/>
\`\`\``,methods:[],displayName:`Popover`,props:{children:{required:!1,tsType:{name:`union`,raw:`ReactNode | ((props: PopoverTriggerRenderProps) => ReactNode)`,elements:[{name:`ReactNode`},{name:`unknown`}]},description:`The trigger element. Accepts either:

**ReactNode (automatic mode):** Must contain a \`<button>\` or
\`[role="button"]\` element — the popover locates it and applies
click/keydown handlers and ARIA attributes automatically.
Components that consume \`InteractiveRoleContext\` (e.g., Token)
will render as a button automatically when placed here.

**Render function (explicit mode):** Receives \`PopoverTriggerRenderProps\`
with ref, onClick, and ARIA attributes. The consumer is responsible
for attaching these to their trigger element. Use this for custom
triggers or third-party components.

The trigger is rendered inside an anchor wrapper used for CSS anchor
positioning. The wrapper is stable (no pressed-state transforms),
preventing popover position jitter.

When \`anchorRef\` is provided, children can be omitted and the popover
attaches to the external ref element as a sibling.

@example
\`\`\`
<Popover content={...}><Button label="Open" /></Popover>
<Popover content={...}><Token label="Filter" /></Popover>
<Popover content={...}>
  {(triggerProps) => <MyCustomTrigger {...triggerProps} />}
</Popover>
\`\`\``},anchorRef:{required:!1,tsType:{name:`ReactRefObject`,raw:`React.RefObject<HTMLElement>`,elements:[{name:`HTMLElement`}]},description:`External ref to use as the popover anchor.
When provided (and no children), the popover attaches to this element
instead of wrapping children. The referenced element must be a
\`<button>\` or \`[role="button"]\` — the popover applies click/keydown
handlers and ARIA attributes to it directly.`},content:{required:!0,tsType:{name:`ReactNode`},description:`Content to display inside the popover.`},placement:{required:!1,tsType:{name:`union`,raw:`'above' | 'below' | 'start' | 'end'`,elements:[{name:`literal`,value:`'above'`},{name:`literal`,value:`'below'`},{name:`literal`,value:`'start'`},{name:`literal`,value:`'end'`}]},description:`Position placement relative to the trigger.
Uses CSS anchor positioning via useLayer.
@default 'below'`,defaultValue:{value:`'below'`,computed:!1}},alignment:{required:!1,tsType:{name:`union`,raw:`'start' | 'center' | 'end'`,elements:[{name:`literal`,value:`'start'`},{name:`literal`,value:`'center'`},{name:`literal`,value:`'end'`}]},description:`Alignment along the placement axis.
@default 'start'`,defaultValue:{value:`'start'`,computed:!1}},isOpen:{required:!1,tsType:{name:`boolean`},description:`Whether the popover is open (controlled mode).
Omit for uncontrolled behavior.`},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(isOpen: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`isOpen`}],return:{name:`void`}}},description:`Callback fired when the popover visibility changes.`},isEnabled:{required:!1,tsType:{name:`boolean`},description:`Whether the popover is enabled.
When false, trigger interactions are ignored.
@default true`,defaultValue:{value:`true`,computed:!1}},width:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Width of the popover container.
Numbers are px, strings used as-is.
@default 'auto'`},label:{required:!1,tsType:{name:`string`},description:`Accessible label for the popover dialog.
Recommended for accessibility (used as aria-label on the dialog).`},hasCloseButton:{required:!1,tsType:{name:`boolean`},description:`Whether to include a hidden close button for accessibility.
The button appears when keyboard users tab past the last element.
@default true`},closeButtonLabel:{required:!1,tsType:{name:`string`},description:`Label for the hidden close button.
@default "Close popover"`},hasAutoFocus:{required:!1,tsType:{name:`boolean`},description:`Whether to auto-focus the first focusable element when the popover opens.
Set to \`false\` for inline showcases or documentation previews.
@default true`},hasLightDismiss:{required:!1,tsType:{name:`boolean`},description:`Whether clicking outside dismisses the popover.
Set to \`false\` for surfaces that should stay open until explicitly
dismissed, like onboarding coachmarks or multi-step flows.
@default true`,defaultValue:{value:`true`,computed:!1}},hasEscapeDismiss:{required:!1,tsType:{name:`boolean`},description:`Whether pressing Escape dismisses the popover.

Only takes full effect together with \`hasLightDismiss={false}\`: with
light dismiss on, the browser's native light dismiss also closes on
Escape. Set both to \`false\` for explicit-dismiss-only surfaces.
@default true`,defaultValue:{value:`true`,computed:!1}},"data-testid":{required:!1,tsType:{name:`string`},description:`Test ID for the popover container.`}},composes:[`Pick`]}})))()}export{C as n,v as t};