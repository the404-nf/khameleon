import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./stylex-Dft6gtPK.js";import{n as i}from"./mergeProps-JRyAvMxc.js";import{n as a,t as o}from"./themeProps-DRQoVAIO.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{c,p as l}from"./tokens.stylex-B5FkK-9m.js";import{n as u,t as d}from"./Text-543dlLxz.js";import{n as f,t as p}from"./Button-CZDOH4n-.js";import{n as m,t as h}from"./Icon-D9gPeCUm.js";import{n as g,t as _}from"./TextInput-C6huvyEM.js";function v(){let e=(0,y.use)(b);if(e==null)throw Error(`useStepperContext must be used within Stepper. Wrap your Step in <Stepper>.`);return e}var y,b;function x(){return(x=e((()=>{y=t(),b=(0,y.createContext)(null),b.displayName=`StepperContext`})))()}function S({activeStep:e,children:t,orientation:r=`horizontal`,onStepClick:o,label:s=`Progress`,density:c=`balanced`,xstyle:l,className:u,style:d,ref:f,...p}){let m=(0,C.useMemo)(()=>({activeStep:e,orientation:r,isNonLinear:o!=null,onStepClick:o??null,density:c}),[e,r,o,c]);return(0,w.jsx)(b,{value:m,children:(0,w.jsx)(`ol`,{ref:f,"aria-label":s,...p,...i(a(`stepper`,{orientation:r}),n(T.root,r===`horizontal`?T.horizontal:T.vertical,l),u,d),children:t})})}var C,w,T;function E(){return(E=e((()=>{C=t(),r(),o(),x(),w=s(),T={root:{k1xSpc:`khameleon78zum5`,kzqmXN:`khameleonh8yej3`,kH6xsr:`khameleon3ct3a4`,kogj98:`khameleon1ghz6dp`,kmVPX3:`khameleon1717udv`,$$css:!0},horizontal:{kXwgrk:`khameleon1q0g3np`,kGNEyG:`khameleon1cy8zhl`,kOIVth:`khameleon195vfkc`,$$css:!0},vertical:{kXwgrk:`khameleondt5ytf`,kOIVth:`khameleon195vfkc`,$$css:!0}},S.displayName=`Stepper`,S.__docgenInfo={description:`A stepper component for multi-step workflows. Displays numbered steps
with visual indicators for completed, active, and upcoming states.

Each Step child must provide a \`step\` prop (zero-based index) so it
can derive its state from the parent's activeStep. CSS :last-child
handles connector hiding — no child introspection needed.

Rendered as an ordered list (\`<ol>\`/\`<li>\`) rather than a \`nav\`
landmark: a stepper communicates *progress through a sequence*, not a
set of site navigation links. The active step is marked with
\`aria-current="step"\` (handled per-step) and the list carries an
accessible \`label\`. This follows the WAI-ARIA pattern for steppers /
progress sequences and avoids polluting the page's landmark map.

@example
\`\`\`
<Stepper activeStep={1}>
  <Step step={0} label="Account" />
  <Step step={1} label="Profile" />
  <Step step={2} label="Review" />
</Stepper>
\`\`\``,methods:[],displayName:`Stepper`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLOListElement>`,elements:[{name:`HTMLOListElement`}]},description:`Ref forwarded to the root element`},activeStep:{required:!0,tsType:{name:`number`},description:`Zero-based index of the active step.`},children:{required:!0,tsType:{name:`ReactNode`},description:`Step elements to render.`},orientation:{required:!1,tsType:{name:`union`,raw:`'horizontal' | 'vertical'`,elements:[{name:`literal`,value:`'horizontal'`},{name:`literal`,value:`'vertical'`}]},description:`Layout direction of the stepper.
@default 'horizontal'`,defaultValue:{value:`'horizontal'`,computed:!1}},onStepClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(index: number) => void`,signature:{arguments:[{type:{name:`number`},name:`index`}],return:{name:`void`}}},description:`Called when a step indicator is clicked. Enables non-linear navigation.
When provided, completed and current steps become clickable.`},label:{required:!1,tsType:{name:`string`},description:`Accessible label describing the set of steps.
@default 'Progress'`,defaultValue:{value:`'Progress'`,computed:!1}},density:{required:!1,tsType:{name:`union`,raw:`'compact' | 'balanced' | 'spacious'`,elements:[{name:`literal`,value:`'compact'`},{name:`literal`,value:`'balanced'`},{name:`literal`,value:`'spacious'`}]},description:`Controls density (padding) of all steps.
@default 'balanced'`,defaultValue:{value:`'balanced'`,computed:!1}}},composes:[`Omit`]}})))()}function D(){return(0,A.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,A.jsx)(`circle`,{cx:`8`,cy:`8`,r:`8`,fill:`currentColor`}),(0,A.jsx)(`path`,{d:`M5 8.5l2 2 4-4`,stroke:`white`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]})}function O(){return(0,A.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,A.jsx)(`circle`,{cx:`8`,cy:`8`,r:`7`,stroke:`currentColor`,strokeWidth:`2`}),(0,A.jsx)(`circle`,{cx:`8`,cy:`8`,r:`4`,fill:`currentColor`})]})}function k({step:e,label:t,description:r,children:o,icon:s,status:c,isDisabled:l=!1,isOptional:u=!1,endContent:d,indicator:f,density:p,xstyle:m,className:h,style:g,ref:_,"data-testid":y,...b}){let{activeStep:x,orientation:S,onStepClick:C,density:w}=v(),T=p??w,E=f!=null&&typeof f!=`string`,k=E?`auto`:f??`auto`,M=e===x?`in-progress`:e<x?`completed`:`not-started`,N=S===`vertical`,P=M===`in-progress`,F=!l&&C!=null,I=()=>{F&&C&&C(e)},L=M===`completed`||M===`in-progress`,R=c===`accent`?j.barAccent:c===`success`?j.barSuccess:c===`warning`?j.barWarning:c===`error`?j.barError:void 0,z=null,B=E?f:s??null;if(k!==`none`){if(B==null&&(k===`number`||k===`auto`&&M===`not-started`)){let t=l?j.numberDisabled:c===`accent`?j.numberAccent:c===`success`?j.numberSuccess:c===`warning`?j.numberWarning:c===`error`?j.numberError:M===`completed`?j.numberCompleted:M===`in-progress`?j.numberInProgress:j.numberNotStarted;z=(0,A.jsx)(`div`,{"aria-hidden":`true`,...n(j.numberBadge,t),children:e+1})}else{let e=B??(M===`completed`?(0,A.jsx)(D,{}):(0,A.jsx)(O,{})),t=l?j.iconDisabled:c===`accent`?j.iconAccent:c===`success`?j.iconSuccess:c===`warning`?j.iconWarning:c===`error`?j.iconError:M===`completed`?j.iconCompleted:M===`in-progress`?j.iconInProgress:j.iconNotStarted;z=(0,A.jsx)(`div`,{"aria-hidden":`true`,...n(j.icon,t),children:e})}}let V=k!==`none`,H=V&&B==null&&(k===`number`||k===`auto`&&M===`not-started`),U=l?j.labelDisabled:M===`not-started`?j.labelNotStarted:P?j.labelInProgress:void 0,W=(0,A.jsxs)(`div`,{className:`khameleon78zum5 khameleon1q0g3np khameleon6s0dn4 khameleon1txdalj`,children:[z,(0,A.jsx)(`span`,{...n(j.label,U),children:t}),u&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`span`,{className:`khameleonjm74w1 khameleonv1l7n4`,children:`•`}),(0,A.jsx)(`span`,{className:`khameleonjm74w1 khameleonv1l7n4`,children:`Optional`})]}),d]}),G=r==null?null:(0,A.jsx)(`div`,{...n(V?H?j.descriptionRowWithNumber:j.descriptionRowWithIndicator:j.descriptionRow),children:(0,A.jsx)(`span`,{className:`khameleon141an7d khameleon1ltkj2j khameleonv1l7n4`,children:r})}),K=o==null?null:(0,A.jsx)(`div`,{...n(j.stepContent,V&&(H?j.stepContentWithNumber:j.stepContentWithIndicator)),children:o}),q=a(`step`,{progress:M,status:c??void 0});return N?(0,A.jsxs)(`li`,{ref:_,...i(q,n(j.verticalRoot,m),h,g),"aria-current":P?`step`:void 0,"data-testid":y,...b,children:[(0,A.jsx)(`div`,{...i(a(`step-bar`),n(j.verticalBar,R??(L?j.barCompleted:j.barIncomplete))),"aria-hidden":`true`}),(0,A.jsxs)(`div`,{className:`khameleon78zum5 khameleondt5ytf khameleon98rzlu`,children:[F?(0,A.jsxs)(`button`,{type:`button`,onClick:I,"aria-label":`Go to step ${e+1}: ${t}`,...{0:{className:`khameleon1yc453h khameleon1qjc9v5 khameleon78zum5 khameleondt5ytf khameleonh8yej3 khameleon1ypdohk khameleonh6dtrn khameleon15406qy khameleonkvfbh3 khameleonlr8y92 khameleonjbqb8w khameleone9uy6x khameleonyxi2l3 khameleon1a2a7pz khameleon17nn4n9 khameleon1wfwxd8 khameleon7s97pk`},4:{className:`khameleon1yc453h khameleon1qjc9v5 khameleon78zum5 khameleondt5ytf khameleonh8yej3 khameleon1ypdohk khameleonh6dtrn khameleon15406qy khameleonkvfbh3 khameleonlr8y92 khameleonjbqb8w khameleone9uy6x khameleonyxi2l3 khameleon1a2a7pz khameleon17nn4n9 khameleon1wfwxd8 khameleon7s97pk khameleonu0wf1k khameleonf314gf`},2:{className:`khameleon1yc453h khameleon1qjc9v5 khameleon78zum5 khameleondt5ytf khameleonh8yej3 khameleon1ypdohk khameleonh6dtrn khameleon15406qy khameleonkvfbh3 khameleonlr8y92 khameleonjbqb8w khameleone9uy6x khameleonyxi2l3 khameleon1a2a7pz khameleon17nn4n9 khameleon1wfwxd8 khameleon7s97pk khameleonce4md1 khameleonf314gf`},6:{className:`khameleon1yc453h khameleon1qjc9v5 khameleon78zum5 khameleondt5ytf khameleonh8yej3 khameleon1ypdohk khameleonh6dtrn khameleon15406qy khameleonkvfbh3 khameleonlr8y92 khameleonjbqb8w khameleone9uy6x khameleonyxi2l3 khameleon1a2a7pz khameleon17nn4n9 khameleon1wfwxd8 khameleon7s97pk khameleonce4md1 khameleonf314gf`},1:{className:`khameleon1yc453h khameleon1qjc9v5 khameleon78zum5 khameleondt5ytf khameleonh8yej3 khameleon1ypdohk khameleonh6dtrn khameleon15406qy khameleonkvfbh3 khameleonlr8y92 khameleonjbqb8w khameleone9uy6x khameleonyxi2l3 khameleon1a2a7pz khameleon17nn4n9 khameleon1wfwxd8 khameleon7s97pk khameleon8o8v82 khameleonrrkdod`},5:{className:`khameleon1yc453h khameleon1qjc9v5 khameleon78zum5 khameleondt5ytf khameleonh8yej3 khameleon1ypdohk khameleonh6dtrn khameleon15406qy khameleonkvfbh3 khameleonlr8y92 khameleonjbqb8w khameleone9uy6x khameleonyxi2l3 khameleon1a2a7pz khameleon17nn4n9 khameleon1wfwxd8 khameleon7s97pk khameleon8o8v82 khameleonrrkdod`},3:{className:`khameleon1yc453h khameleon1qjc9v5 khameleon78zum5 khameleondt5ytf khameleonh8yej3 khameleon1ypdohk khameleonh6dtrn khameleon15406qy khameleonkvfbh3 khameleonlr8y92 khameleonjbqb8w khameleone9uy6x khameleonyxi2l3 khameleon1a2a7pz khameleon17nn4n9 khameleon1wfwxd8 khameleon7s97pk khameleon8o8v82 khameleonrrkdod`},7:{className:`khameleon1yc453h khameleon1qjc9v5 khameleon78zum5 khameleondt5ytf khameleonh8yej3 khameleon1ypdohk khameleonh6dtrn khameleon15406qy khameleonkvfbh3 khameleonlr8y92 khameleonjbqb8w khameleone9uy6x khameleonyxi2l3 khameleon1a2a7pz khameleon17nn4n9 khameleon1wfwxd8 khameleon7s97pk khameleon8o8v82 khameleonrrkdod`}}[(T===`compact`)<<2|(T===`balanced`)<<1|(T===`spacious`)<<0],children:[W,G]}):(0,A.jsxs)(`div`,{...{0:{},4:{className:`khameleonu0wf1k khameleonf314gf`},2:{className:`khameleonce4md1 khameleonf314gf`},6:{className:`khameleonce4md1 khameleonf314gf`},1:{className:`khameleon8o8v82 khameleonrrkdod`},5:{className:`khameleon8o8v82 khameleonrrkdod`},3:{className:`khameleon8o8v82 khameleonrrkdod`},7:{className:`khameleon8o8v82 khameleonrrkdod`}}[(T===`compact`)<<2|(T===`balanced`)<<1|(T===`spacious`)<<0],children:[W,G]}),K]})]}):(0,A.jsxs)(`li`,{ref:_,...i(q,n(j.horizontalStep,m),h,g),"aria-current":P?`step`:void 0,"data-testid":y,...b,children:[(0,A.jsx)(`div`,{...i(a(`step-bar`),n(j.horizontalBar,R??(L?j.barCompleted:j.barIncomplete))),"aria-hidden":`true`}),F?(0,A.jsxs)(`button`,{type:`button`,onClick:I,"aria-label":`Go to step ${e+1}: ${t}`,...{0:{className:`khameleon1yc453h khameleon1qjc9v5 khameleon78zum5 khameleondt5ytf khameleonh8yej3 khameleon1ypdohk khameleonh6dtrn khameleon15406qy khameleonkvfbh3 khameleonlr8y92 khameleonjbqb8w khameleone9uy6x khameleonyxi2l3 khameleon1a2a7pz khameleon17nn4n9 khameleon1wfwxd8 khameleon7s97pk`},4:{className:`khameleon1yc453h khameleon1qjc9v5 khameleon78zum5 khameleondt5ytf khameleonh8yej3 khameleon1ypdohk khameleonh6dtrn khameleon15406qy khameleonkvfbh3 khameleonlr8y92 khameleonjbqb8w khameleone9uy6x khameleonyxi2l3 khameleon1a2a7pz khameleon17nn4n9 khameleon1wfwxd8 khameleon7s97pk khameleonu0wf1k khameleonf314gf`},2:{className:`khameleon1yc453h khameleon1qjc9v5 khameleon78zum5 khameleondt5ytf khameleonh8yej3 khameleon1ypdohk khameleonh6dtrn khameleon15406qy khameleonkvfbh3 khameleonlr8y92 khameleonjbqb8w khameleone9uy6x khameleonyxi2l3 khameleon1a2a7pz khameleon17nn4n9 khameleon1wfwxd8 khameleon7s97pk khameleonce4md1 khameleonf314gf`},6:{className:`khameleon1yc453h khameleon1qjc9v5 khameleon78zum5 khameleondt5ytf khameleonh8yej3 khameleon1ypdohk khameleonh6dtrn khameleon15406qy khameleonkvfbh3 khameleonlr8y92 khameleonjbqb8w khameleone9uy6x khameleonyxi2l3 khameleon1a2a7pz khameleon17nn4n9 khameleon1wfwxd8 khameleon7s97pk khameleonce4md1 khameleonf314gf`},1:{className:`khameleon1yc453h khameleon1qjc9v5 khameleon78zum5 khameleondt5ytf khameleonh8yej3 khameleon1ypdohk khameleonh6dtrn khameleon15406qy khameleonkvfbh3 khameleonlr8y92 khameleonjbqb8w khameleone9uy6x khameleonyxi2l3 khameleon1a2a7pz khameleon17nn4n9 khameleon1wfwxd8 khameleon7s97pk khameleon8o8v82 khameleonrrkdod`},5:{className:`khameleon1yc453h khameleon1qjc9v5 khameleon78zum5 khameleondt5ytf khameleonh8yej3 khameleon1ypdohk khameleonh6dtrn khameleon15406qy khameleonkvfbh3 khameleonlr8y92 khameleonjbqb8w khameleone9uy6x khameleonyxi2l3 khameleon1a2a7pz khameleon17nn4n9 khameleon1wfwxd8 khameleon7s97pk khameleon8o8v82 khameleonrrkdod`},3:{className:`khameleon1yc453h khameleon1qjc9v5 khameleon78zum5 khameleondt5ytf khameleonh8yej3 khameleon1ypdohk khameleonh6dtrn khameleon15406qy khameleonkvfbh3 khameleonlr8y92 khameleonjbqb8w khameleone9uy6x khameleonyxi2l3 khameleon1a2a7pz khameleon17nn4n9 khameleon1wfwxd8 khameleon7s97pk khameleon8o8v82 khameleonrrkdod`},7:{className:`khameleon1yc453h khameleon1qjc9v5 khameleon78zum5 khameleondt5ytf khameleonh8yej3 khameleon1ypdohk khameleonh6dtrn khameleon15406qy khameleonkvfbh3 khameleonlr8y92 khameleonjbqb8w khameleone9uy6x khameleonyxi2l3 khameleon1a2a7pz khameleon17nn4n9 khameleon1wfwxd8 khameleon7s97pk khameleon8o8v82 khameleonrrkdod`}}[(T===`compact`)<<2|(T===`balanced`)<<1|(T===`spacious`)<<0],children:[W,G]}):(0,A.jsxs)(`div`,{...{0:{},4:{className:`khameleonu0wf1k khameleonf314gf`},2:{className:`khameleonce4md1 khameleonf314gf`},6:{className:`khameleonce4md1 khameleonf314gf`},1:{className:`khameleon8o8v82 khameleonrrkdod`},5:{className:`khameleon8o8v82 khameleonrrkdod`},3:{className:`khameleon8o8v82 khameleonrrkdod`},7:{className:`khameleon8o8v82 khameleonrrkdod`}}[(T===`compact`)<<2|(T===`balanced`)<<1|(T===`spacious`)<<0],children:[W,G]}),K]})}var A,j;function M(){return(M=e((()=>{r(),c(),x(),o(),A=s(),l[`--spacing-4`],l[`--spacing-5`],j={verticalRoot:{k1xSpc:`khameleon78zum5`,kXwgrk:`khameleon1q0g3np`,kGNEyG:`khameleon1qjc9v5`,kVAEAm:`khameleon1n2onr6`,kOIVth:`khameleon1lsbc85`,$$css:!0},verticalBar:{kzqmXN:`khameleon51ohtg`,kaIpWk:`khameleonjspbzw`,kmuXW:`khameleon2lah0s`,kSGwAc:`khameleonkh2ocl`,$$css:!0},barCompleted:{kWkggS:`khameleon1ewilqj`,$$css:!0},barIncomplete:{kWkggS:`khameleon1m4xfpy`,$$css:!0},barAccent:{kWkggS:`khameleon1ewilqj`,$$css:!0},barSuccess:{kWkggS:`khameleondsz4j9`,$$css:!0},barWarning:{kWkggS:`khameleon1q8g9m5`,$$css:!0},barError:{kWkggS:`khameleon1pjz0fi`,$$css:!0},horizontalStep:{k1xSpc:`khameleon78zum5`,kXwgrk:`khameleondt5ytf`,kGNEyG:`khameleon1cy8zhl`,kUk6DE:`khameleon98rzlu`,$$css:!0},horizontalBar:{kzqmXN:`khameleonh8yej3`,kZKoxP:`khameleonqu0tyb`,kaIpWk:`khameleonjspbzw`,kmuXW:`khameleon2lah0s`,k1K539:`khameleonlstkdb`,$$css:!0},icon:{k1xSpc:`khameleon78zum5`,kGNEyG:`khameleon6s0dn4`,kjj79g:`khameleonl56j7k`,kzqmXN:`khameleon12xnipv`,kZKoxP:`khameleon6b6gus`,kmuXW:`khameleon2lah0s`,$$css:!0},iconCompleted:{kMwMTN:`khameleonqwr325`,$$css:!0},iconInProgress:{kMwMTN:`khameleonqwr325`,$$css:!0},iconNotStarted:{kMwMTN:`khameleonv9yike`,$$css:!0},iconDisabled:{kMwMTN:`khameleonqa6c3m`,kSiTet:`khameleonbyyjgo`,$$css:!0},iconAccent:{kMwMTN:`khameleonqwr325`,$$css:!0},iconSuccess:{kMwMTN:`khameleontjic6`,$$css:!0},iconWarning:{kMwMTN:`khameleons3pv69`,$$css:!0},iconError:{kMwMTN:`khameleonjt36v0`,$$css:!0},numberBadge:{k1xSpc:`khameleonrvj5dj`,kgQiWS:`khameleon1ku5rj1`,kzqmXN:`khameleonfyiiit`,kZKoxP:`khameleon1grt7ep`,kaIpWk:`khameleonjspbzw`,kGuDYH:`khameleon1k6wstc`,kGO01o:`khameleon1j85h84`,k63SB2:`khameleon2mo6ok`,kLWn49:`khameleono5v014`,kmuXW:`khameleon2lah0s`,k9WMMc:`khameleon2b8uid`,$$css:!0},numberCompleted:{kWkggS:`khameleon1ewilqj`,kMwMTN:`khameleonrkvqaz`,$$css:!0},numberInProgress:{kWkggS:`khameleon1ewilqj`,kMwMTN:`khameleonrkvqaz`,$$css:!0},numberNotStarted:{kWkggS:`khameleonwmxj5m`,kMwMTN:`khameleonv1l7n4`,$$css:!0},numberDisabled:{kWkggS:`khameleonwmxj5m`,kMwMTN:`khameleonnbbluu`,kSiTet:`khameleonbyyjgo`,$$css:!0},numberAccent:{kWkggS:`khameleon1ewilqj`,kMwMTN:`khameleon17wrial`,$$css:!0},numberSuccess:{kWkggS:`khameleondsz4j9`,kMwMTN:`khameleonri61p4`,$$css:!0},numberWarning:{kWkggS:`khameleon1q8g9m5`,kMwMTN:`khameleonrebv38`,$$css:!0},numberError:{kWkggS:`khameleon1pjz0fi`,kMwMTN:`khameleon1m024r3`,$$css:!0},label:{kGuDYH:`khameleonjm74w1`,kLWn49:`khameleonw6l6zx`,k63SB2:`khameleon1sodnla`,kMwMTN:`khameleon1tgivj0`,$$css:!0},labelInProgress:{k63SB2:`khameleon2mo6ok`,$$css:!0},labelNotStarted:{kMwMTN:`khameleonv1l7n4`,$$css:!0},labelDisabled:{kMwMTN:`khameleonnbbluu`,$$css:!0},descriptionRow:{kZCmMZ:`khameleon18gyask`,$$css:!0},descriptionRowWithIndicator:{kZCmMZ:`khameleon31w388`,$$css:!0},descriptionRowWithNumber:{kZCmMZ:`khameleonchaq28`,$$css:!0},stepContent:{kLKAdn:`khameleon1xye8es`,$$css:!0},stepContentWithIndicator:{kZCmMZ:`khameleon31w388`,$$css:!0},stepContentWithNumber:{kZCmMZ:`khameleonchaq28`,$$css:!0}},k.displayName=`Step`,k.__docgenInfo={description:'An individual step within an Stepper. Renders a 4px progress-bar segment,\nan indicator (numbered badge, check, or any custom icon), a label with\noptional description, and an optional content slot.\n\nProgress (completed / active / not-started) is derived from the parent\'s\n`activeStep` and this step\'s `step` prop. The optional `status` prop layers a\nsemantic color (`accent` / `success` / `warning` / `error`) on top — color\nonly; it does not change layout or iconography.\n\n@example\n```\n<Step step={0} label="Account details" description="Enter your email" />\n```\n\n@example\n```\n<Step step={1} label="Payment" status="error" icon={<Icon icon="warning" />} />\n```',methods:[],displayName:`Step`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLLIElement>`,elements:[{name:`HTMLLIElement`}]},description:`Ref forwarded to the root element`},step:{required:!0,tsType:{name:`number`},description:"Zero-based index of this step. Used to derive progress (completed /\nactive / not-started) relative to the parent's `activeStep`."},label:{required:!0,tsType:{name:`string`},description:`Step label text.`},description:{required:!1,tsType:{name:`string`},description:`Optional description shown below the label.`},children:{required:!1,tsType:{name:`ReactNode`},description:`Content rendered below the label and description. Useful in vertical
steppers to show form fields or detailed content for each step.`},icon:{required:!1,tsType:{name:`ReactNode`},description:"Custom icon rendered inside the indicator. Accepts any ReactNode (for\nexample an `<Icon />`). Equivalent to passing the node directly to\n`indicator`; takes precedence over the built-in number/check."},status:{required:!1,tsType:{name:`union`,raw:`'accent' | 'success' | 'warning' | 'error'`,elements:[{name:`literal`,value:`'accent'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'error'`}]},description:"Semantic color for the step. Controls **color only** and maps to the\nglobal Khameleon semantic tokens (`accent`, `success`, `warning`, `error`).\nLeave unset to use the progress-derived default coloring."},isDisabled:{required:!1,tsType:{name:`boolean`},description:`Disable interaction for this step.
@default false`,defaultValue:{value:`false`,computed:!1}},isOptional:{required:!1,tsType:{name:`boolean`},description:`Marks the step as optional, appending an "Optional" affordance after the
label.
@default false`,defaultValue:{value:`false`,computed:!1}},endContent:{required:!1,tsType:{name:`ReactNode`},description:`Trailing content rendered at the end of the label row (e.g. a timestamp
or status chip).`},indicator:{required:!1,tsType:{name:`union`,raw:`StepIndicatorPreset | ReactNode`,elements:[{name:`union`,raw:`'auto' | 'number' | 'none'`,elements:[{name:`literal`,value:`'auto'`},{name:`literal`,value:`'number'`},{name:`literal`,value:`'none'`}]},{name:`ReactNode`}]},description:`What to show as the step indicator. Accepts a preset string or any
ReactNode:
- 'auto': numbered badge until completed, then a check (default)
- 'number': always a numbered badge
- 'none': no indicator, just the bar + label
- ReactNode: any custom icon or element to render as the indicator
@default 'auto'`},density:{required:!1,tsType:{name:`union`,raw:`'compact' | 'balanced' | 'spacious'`,elements:[{name:`literal`,value:`'compact'`},{name:`literal`,value:`'balanced'`},{name:`literal`,value:`'spacious'`}]},description:`Controls vertical padding of the step. Falls back to the stepper-level
density when unset.
- 'compact': minimal padding (4px block)
- 'balanced': default (8px block)
- 'spacious': generous (12px block, 12px inline)`}},composes:[`Omit`]}})))()}var N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{N=t(),E(),M(),g(),f(),u(),m(),P=s(),F={title:`Lab/Stepper`,component:S,tags:[`autodocs`],argTypes:{activeStep:{control:{type:`number`,min:0,max:5}},orientation:{control:`select`,options:[`horizontal`,`vertical`]},density:{control:`select`,options:[`compact`,`balanced`,`spacious`]}}},I={name:`Default`,render:()=>{let[e,t]=(0,N.useState)(2);return(0,P.jsx)(`div`,{style:{maxWidth:400},children:(0,P.jsxs)(S,{activeStep:e,orientation:`vertical`,onStepClick:t,children:[(0,P.jsx)(k,{step:0,label:`Create workspace`,description:`Name and configure your workspace`}),(0,P.jsx)(k,{step:1,label:`Invite team members`,description:`Add collaborators by email`}),(0,P.jsx)(k,{step:2,label:`Set up integrations`,description:`Connect Slack, GitHub, Jira`}),(0,P.jsx)(k,{step:3,label:`Import data`,description:`Bring in existing projects`}),(0,P.jsx)(k,{step:4,label:`Launch`,description:`Go live with your team`})]})})}},L={name:`Default — Horizontal`,render:()=>{let[e,t]=(0,N.useState)(1);return(0,P.jsx)(`div`,{style:{maxWidth:700},children:(0,P.jsxs)(S,{activeStep:e,orientation:`horizontal`,onStepClick:t,children:[(0,P.jsx)(k,{step:0,label:`Workspace`}),(0,P.jsx)(k,{step:1,label:`Team`}),(0,P.jsx)(k,{step:2,label:`Integrations`}),(0,P.jsx)(k,{step:3,label:`Import`}),(0,P.jsx)(k,{step:4,label:`Launch`})]})})}},R={name:`Numbered — Deploy Pipeline`,render:()=>{let[e,t]=(0,N.useState)(2);return(0,P.jsx)(`div`,{style:{maxWidth:400},children:(0,P.jsxs)(S,{activeStep:e,orientation:`vertical`,onStepClick:t,children:[(0,P.jsx)(k,{step:0,label:`Push to main`,description:`Merge your pull request`,indicator:`number`}),(0,P.jsx)(k,{step:1,label:`Run CI checks`,description:`Lint, type-check, test`,indicator:`number`}),(0,P.jsx)(k,{step:2,label:`Build container`,description:`Docker image to registry`,indicator:`number`}),(0,P.jsx)(k,{step:3,label:`Deploy to staging`,description:`Verify in staging environment`,indicator:`number`}),(0,P.jsx)(k,{step:4,label:`Promote to production`,description:`Canary → full rollout`,indicator:`number`})]})})}},z={name:`Numbered — Horizontal Checkout`,render:()=>{let[e,t]=(0,N.useState)(1);return(0,P.jsx)(`div`,{style:{maxWidth:600},children:(0,P.jsxs)(S,{activeStep:e,orientation:`horizontal`,onStepClick:t,children:[(0,P.jsx)(k,{step:0,label:`Cart`,indicator:`number`}),(0,P.jsx)(k,{step:1,label:`Shipping`,indicator:`number`}),(0,P.jsx)(k,{step:2,label:`Payment`,indicator:`number`}),(0,P.jsx)(k,{step:3,label:`Confirm`,indicator:`number`})]})})}},B={name:`Status — Account Verification`,render:()=>{let[e,t]=(0,N.useState)(3);return(0,P.jsx)(`div`,{style:{maxWidth:400},children:(0,P.jsxs)(S,{activeStep:e,orientation:`vertical`,onStepClick:t,children:[(0,P.jsx)(k,{step:0,label:`Email verified`,description:`ernesttien@meta.com`,status:`success`,icon:(0,P.jsx)(h,{icon:`check`,size:`sm`})}),(0,P.jsx)(k,{step:1,label:`Phone verified`,description:`+1 (555) 012-3456`,status:`success`,icon:(0,P.jsx)(h,{icon:`check`,size:`sm`})}),(0,P.jsx)(k,{step:2,label:`Identity document`,description:`Passport upload failed`,status:`error`,icon:(0,P.jsx)(h,{icon:`warning`,size:`sm`})}),(0,P.jsx)(k,{step:3,label:`Address verification`,description:`Pending review`,status:`accent`}),(0,P.jsx)(k,{step:4,label:`Background check`,isOptional:!0,description:`Skipped`}),(0,P.jsx)(k,{step:5,label:`Account activated`})]})})}},V={name:`Status — Semantic Colors Reference`,render:()=>{let[e,t]=(0,N.useState)(1);return(0,P.jsx)(`div`,{style:{maxWidth:400},children:(0,P.jsxs)(S,{activeStep:e,orientation:`vertical`,onStepClick:t,children:[(0,P.jsx)(k,{step:0,label:`Accent`,description:`--color-accent`,status:`accent`}),(0,P.jsx)(k,{step:1,label:`Success`,description:`--color-success`,status:`success`,icon:(0,P.jsx)(h,{icon:`check`,size:`sm`})}),(0,P.jsx)(k,{step:2,label:`Warning`,description:`--color-warning`,status:`warning`,icon:(0,P.jsx)(h,{icon:`warning`,size:`sm`})}),(0,P.jsx)(k,{step:3,label:`Error`,description:`--color-error`,status:`error`,icon:(0,P.jsx)(h,{icon:`warning`,size:`sm`})}),(0,P.jsx)(k,{step:4,label:`Default (no status)`,description:`progress-derived color`})]})})}},H={name:`Minimal — Interview Process`,render:()=>{let[e,t]=(0,N.useState)(2);return(0,P.jsx)(`div`,{style:{maxWidth:400},children:(0,P.jsxs)(S,{activeStep:e,orientation:`vertical`,onStepClick:t,children:[(0,P.jsx)(k,{step:0,label:`Phone screen`,description:`30 min with recruiter`,indicator:`none`}),(0,P.jsx)(k,{step:1,label:`Technical interview`,description:`1 hour coding session`,indicator:`none`}),(0,P.jsx)(k,{step:2,label:`System design`,description:`45 min whiteboard`,indicator:`none`}),(0,P.jsx)(k,{step:3,label:`Team match`,description:`Meet potential teammates`,indicator:`none`}),(0,P.jsx)(k,{step:4,label:`Offer`,indicator:`none`})]})})}},U={name:`Minimal — Video Upload`,render:()=>{let[e,t]=(0,N.useState)(1);return(0,P.jsx)(`div`,{style:{maxWidth:500},children:(0,P.jsxs)(S,{activeStep:e,orientation:`horizontal`,onStepClick:t,children:[(0,P.jsx)(k,{step:0,label:`Upload`,indicator:`none`}),(0,P.jsx)(k,{step:1,label:`Details`,indicator:`none`}),(0,P.jsx)(k,{step:2,label:`Audience`,indicator:`none`}),(0,P.jsx)(k,{step:3,label:`Publish`,indicator:`none`})]})})}},W={name:`Indicator Modes — Side by Side`,render:()=>{let[e,t]=(0,N.useState)(2);return(0,P.jsxs)(`div`,{style:{display:`flex`,gap:48},children:[(0,P.jsxs)(`div`,{style:{maxWidth:280},children:[(0,P.jsx)(d,{type:`label`,children:`Auto (default)`}),(0,P.jsxs)(S,{activeStep:e,orientation:`vertical`,onStepClick:t,children:[(0,P.jsx)(k,{step:0,label:`Account`}),(0,P.jsx)(k,{step:1,label:`Profile`}),(0,P.jsx)(k,{step:2,label:`Settings`}),(0,P.jsx)(k,{step:3,label:`Review`}),(0,P.jsx)(k,{step:4,label:`Done`})]})]}),(0,P.jsxs)(`div`,{style:{maxWidth:280},children:[(0,P.jsx)(d,{type:`label`,children:`Number`}),(0,P.jsxs)(S,{activeStep:e,orientation:`vertical`,onStepClick:t,children:[(0,P.jsx)(k,{step:0,label:`Account`,indicator:`number`}),(0,P.jsx)(k,{step:1,label:`Profile`,indicator:`number`}),(0,P.jsx)(k,{step:2,label:`Settings`,indicator:`number`}),(0,P.jsx)(k,{step:3,label:`Review`,indicator:`number`}),(0,P.jsx)(k,{step:4,label:`Done`,indicator:`number`})]})]}),(0,P.jsxs)(`div`,{style:{maxWidth:280},children:[(0,P.jsx)(d,{type:`label`,children:`Custom icon`}),(0,P.jsxs)(S,{activeStep:e,orientation:`vertical`,onStepClick:t,children:[(0,P.jsx)(k,{step:0,label:`Account`,icon:(0,P.jsx)(h,{icon:`info`,size:`sm`})}),(0,P.jsx)(k,{step:1,label:`Profile`,icon:(0,P.jsx)(h,{icon:`search`,size:`sm`})}),(0,P.jsx)(k,{step:2,label:`Settings`,icon:(0,P.jsx)(h,{icon:`wrench`,size:`sm`})}),(0,P.jsx)(k,{step:3,label:`Review`,icon:(0,P.jsx)(h,{icon:`clock`,size:`sm`})}),(0,P.jsx)(k,{step:4,label:`Done`,icon:(0,P.jsx)(h,{icon:`check`,size:`sm`})})]})]}),(0,P.jsxs)(`div`,{style:{maxWidth:280},children:[(0,P.jsx)(d,{type:`label`,children:`None`}),(0,P.jsxs)(S,{activeStep:e,orientation:`vertical`,onStepClick:t,children:[(0,P.jsx)(k,{step:0,label:`Account`,indicator:`none`}),(0,P.jsx)(k,{step:1,label:`Profile`,indicator:`none`}),(0,P.jsx)(k,{step:2,label:`Settings`,indicator:`none`}),(0,P.jsx)(k,{step:3,label:`Review`,indicator:`none`}),(0,P.jsx)(k,{step:4,label:`Done`,indicator:`none`})]})]})]})}},G={name:`With Content — Multi-Step Form`,render:()=>{let[e,t]=(0,N.useState)(0);return(0,P.jsx)(`div`,{style:{maxWidth:480},children:(0,P.jsxs)(S,{activeStep:e,orientation:`vertical`,onStepClick:t,children:[(0,P.jsx)(k,{step:0,label:`Project details`,indicator:`number`,children:e===0&&(0,P.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,P.jsx)(_,{label:`Project name`,placeholder:`My awesome project`,value:``}),(0,P.jsx)(_,{label:`Repository URL`,placeholder:`https://github.com/...`,value:``}),(0,P.jsx)(`div`,{children:(0,P.jsx)(p,{label:`Continue`,variant:`primary`,onClick:()=>t(1)})})]})}),(0,P.jsx)(k,{step:1,label:`Environment`,indicator:`number`,children:e===1&&(0,P.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,P.jsx)(_,{label:`Node version`,placeholder:`20`,value:``}),(0,P.jsx)(_,{label:`Build command`,placeholder:`npm run build`,value:``}),(0,P.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,P.jsx)(p,{label:`Back`,variant:`secondary`,onClick:()=>t(0)}),(0,P.jsx)(p,{label:`Continue`,variant:`primary`,onClick:()=>t(2)})]})]})}),(0,P.jsx)(k,{step:2,label:`Deploy`,indicator:`number`,children:e===2&&(0,P.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,P.jsx)(d,{type:`body`,children:`Ready to deploy. This will create a production build and push to your configured hosting.`}),(0,P.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,P.jsx)(p,{label:`Back`,variant:`secondary`,onClick:()=>t(1)}),(0,P.jsx)(p,{label:`Deploy now`,variant:`primary`,onClick:()=>t(3)})]})]})}),(0,P.jsx)(k,{step:3,label:`Done`,indicator:`number`})]})})}},K={name:`Density — Compact / Balanced / Spacious`,render:()=>{let[e,t]=(0,N.useState)(1);return(0,P.jsxs)(`div`,{style:{display:`flex`,gap:48},children:[(0,P.jsxs)(`div`,{style:{maxWidth:250},children:[(0,P.jsx)(d,{type:`label`,children:`Compact`}),(0,P.jsxs)(S,{activeStep:e,orientation:`vertical`,onStepClick:t,density:`compact`,children:[(0,P.jsx)(k,{step:0,label:`Account`,indicator:`number`}),(0,P.jsx)(k,{step:1,label:`Profile`,indicator:`number`}),(0,P.jsx)(k,{step:2,label:`Payment`,indicator:`number`}),(0,P.jsx)(k,{step:3,label:`Review`,indicator:`number`})]})]}),(0,P.jsxs)(`div`,{style:{maxWidth:250},children:[(0,P.jsx)(d,{type:`label`,children:`Balanced`}),(0,P.jsxs)(S,{activeStep:e,orientation:`vertical`,onStepClick:t,density:`balanced`,children:[(0,P.jsx)(k,{step:0,label:`Account`,indicator:`number`}),(0,P.jsx)(k,{step:1,label:`Profile`,indicator:`number`}),(0,P.jsx)(k,{step:2,label:`Payment`,indicator:`number`}),(0,P.jsx)(k,{step:3,label:`Review`,indicator:`number`})]})]}),(0,P.jsxs)(`div`,{style:{maxWidth:250},children:[(0,P.jsx)(d,{type:`label`,children:`Spacious`}),(0,P.jsxs)(S,{activeStep:e,orientation:`vertical`,onStepClick:t,density:`spacious`,children:[(0,P.jsx)(k,{step:0,label:`Account`,indicator:`number`}),(0,P.jsx)(k,{step:1,label:`Profile`,indicator:`number`}),(0,P.jsx)(k,{step:2,label:`Payment`,indicator:`number`}),(0,P.jsx)(k,{step:3,label:`Review`,indicator:`number`})]})]})]})}},q={name:`Edge — Two Steps`,render:()=>{let[e,t]=(0,N.useState)(0);return(0,P.jsx)(`div`,{style:{maxWidth:400},children:(0,P.jsxs)(S,{activeStep:e,orientation:`horizontal`,onStepClick:t,children:[(0,P.jsx)(k,{step:0,label:`Before`}),(0,P.jsx)(k,{step:1,label:`After`})]})})}},J={name:`Edge — Seven Steps (Horizontal)`,render:()=>{let[e,t]=(0,N.useState)(3);return(0,P.jsxs)(S,{activeStep:e,orientation:`horizontal`,onStepClick:t,children:[(0,P.jsx)(k,{step:0,label:`Idea`,indicator:`number`}),(0,P.jsx)(k,{step:1,label:`Design`,indicator:`number`}),(0,P.jsx)(k,{step:2,label:`Build`,indicator:`number`}),(0,P.jsx)(k,{step:3,label:`Test`,indicator:`number`}),(0,P.jsx)(k,{step:4,label:`Review`,indicator:`number`}),(0,P.jsx)(k,{step:5,label:`Deploy`,indicator:`number`}),(0,P.jsx)(k,{step:6,label:`Monitor`,indicator:`number`})]})}},Y={name:`Edge — Disabled Steps`,render:()=>{let[e,t]=(0,N.useState)(1);return(0,P.jsx)(`div`,{style:{maxWidth:400},children:(0,P.jsxs)(S,{activeStep:e,orientation:`vertical`,onStepClick:t,children:[(0,P.jsx)(k,{step:0,label:`Basic info`}),(0,P.jsx)(k,{step:1,label:`Permissions`}),(0,P.jsx)(k,{step:2,label:`Admin settings`,description:`Requires admin role`,isDisabled:!0}),(0,P.jsx)(k,{step:3,label:`Confirm`})]})})}},X={name:`Edge — Optional + Skipped`,render:()=>{let[e,t]=(0,N.useState)(3);return(0,P.jsx)(`div`,{style:{maxWidth:400},children:(0,P.jsxs)(S,{activeStep:e,orientation:`vertical`,onStepClick:t,children:[(0,P.jsx)(k,{step:0,label:`Basic profile`}),(0,P.jsx)(k,{step:1,label:`Profile photo`,isOptional:!0,description:`Skipped`}),(0,P.jsx)(k,{step:2,label:`Connect socials`,isOptional:!0}),(0,P.jsx)(k,{step:3,label:`Preferences`}),(0,P.jsx)(k,{step:4,label:`All done`})]})})}},Z={name:`Edge — Long Labels & Descriptions`,render:()=>{let[e,t]=(0,N.useState)(1);return(0,P.jsx)(`div`,{style:{maxWidth:400},children:(0,P.jsxs)(S,{activeStep:e,orientation:`vertical`,onStepClick:t,children:[(0,P.jsx)(k,{step:0,label:`Configure your development environment`,description:`Install dependencies, set up local database, configure environment variables`}),(0,P.jsx)(k,{step:1,label:`Create initial data migration`,description:`Define schema, seed data, and run migrations against staging`}),(0,P.jsx)(k,{step:2,label:`Submit for code review`,description:`Open pull request and address reviewer feedback`})]})})}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  render: () => {
    const [active, setActive] = useState(2);
    return <div style={{
      maxWidth: 400
    }}>
        <Stepper activeStep={active} orientation="vertical" onStepClick={setActive}>
          <Step step={0} label="Create workspace" description="Name and configure your workspace" />
          <Step step={1} label="Invite team members" description="Add collaborators by email" />
          <Step step={2} label="Set up integrations" description="Connect Slack, GitHub, Jira" />
          <Step step={3} label="Import data" description="Bring in existing projects" />
          <Step step={4} label="Launch" description="Go live with your team" />
        </Stepper>
      </div>;
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Default — Horizontal',
  render: () => {
    const [active, setActive] = useState(1);
    return <div style={{
      maxWidth: 700
    }}>
        <Stepper activeStep={active} orientation="horizontal" onStepClick={setActive}>
          <Step step={0} label="Workspace" />
          <Step step={1} label="Team" />
          <Step step={2} label="Integrations" />
          <Step step={3} label="Import" />
          <Step step={4} label="Launch" />
        </Stepper>
      </div>;
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Numbered — Deploy Pipeline',
  render: () => {
    const [active, setActive] = useState(2);
    return <div style={{
      maxWidth: 400
    }}>
        <Stepper activeStep={active} orientation="vertical" onStepClick={setActive}>
          <Step step={0} label="Push to main" description="Merge your pull request" indicator="number" />
          <Step step={1} label="Run CI checks" description="Lint, type-check, test" indicator="number" />
          <Step step={2} label="Build container" description="Docker image to registry" indicator="number" />
          <Step step={3} label="Deploy to staging" description="Verify in staging environment" indicator="number" />
          <Step step={4} label="Promote to production" description="Canary → full rollout" indicator="number" />
        </Stepper>
      </div>;
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Numbered — Horizontal Checkout',
  render: () => {
    const [active, setActive] = useState(1);
    return <div style={{
      maxWidth: 600
    }}>
        <Stepper activeStep={active} orientation="horizontal" onStepClick={setActive}>
          <Step step={0} label="Cart" indicator="number" />
          <Step step={1} label="Shipping" indicator="number" />
          <Step step={2} label="Payment" indicator="number" />
          <Step step={3} label="Confirm" indicator="number" />
        </Stepper>
      </div>;
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Status — Account Verification',
  render: () => {
    const [active, setActive] = useState(3);
    return <div style={{
      maxWidth: 400
    }}>
        <Stepper activeStep={active} orientation="vertical" onStepClick={setActive}>
          <Step step={0} label="Email verified" description="ernesttien@meta.com" status="success" icon={<Icon icon="check" size="sm" />} />
          <Step step={1} label="Phone verified" description="+1 (555) 012-3456" status="success" icon={<Icon icon="check" size="sm" />} />
          <Step step={2} label="Identity document" description="Passport upload failed" status="error" icon={<Icon icon="warning" size="sm" />} />
          <Step step={3} label="Address verification" description="Pending review" status="accent" />
          <Step step={4} label="Background check" isOptional description="Skipped" />
          <Step step={5} label="Account activated" />
        </Stepper>
      </div>;
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Status — Semantic Colors Reference',
  render: () => {
    const [active, setActive] = useState(1);
    return <div style={{
      maxWidth: 400
    }}>
        <Stepper activeStep={active} orientation="vertical" onStepClick={setActive}>
          <Step step={0} label="Accent" description="--color-accent" status="accent" />
          <Step step={1} label="Success" description="--color-success" status="success" icon={<Icon icon="check" size="sm" />} />
          <Step step={2} label="Warning" description="--color-warning" status="warning" icon={<Icon icon="warning" size="sm" />} />
          <Step step={3} label="Error" description="--color-error" status="error" icon={<Icon icon="warning" size="sm" />} />
          <Step step={4} label="Default (no status)" description="progress-derived color" />
        </Stepper>
      </div>;
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Minimal — Interview Process',
  render: () => {
    const [active, setActive] = useState(2);
    return <div style={{
      maxWidth: 400
    }}>
        <Stepper activeStep={active} orientation="vertical" onStepClick={setActive}>
          <Step step={0} label="Phone screen" description="30 min with recruiter" indicator="none" />
          <Step step={1} label="Technical interview" description="1 hour coding session" indicator="none" />
          <Step step={2} label="System design" description="45 min whiteboard" indicator="none" />
          <Step step={3} label="Team match" description="Meet potential teammates" indicator="none" />
          <Step step={4} label="Offer" indicator="none" />
        </Stepper>
      </div>;
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'Minimal — Video Upload',
  render: () => {
    const [active, setActive] = useState(1);
    return <div style={{
      maxWidth: 500
    }}>
        <Stepper activeStep={active} orientation="horizontal" onStepClick={setActive}>
          <Step step={0} label="Upload" indicator="none" />
          <Step step={1} label="Details" indicator="none" />
          <Step step={2} label="Audience" indicator="none" />
          <Step step={3} label="Publish" indicator="none" />
        </Stepper>
      </div>;
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'Indicator Modes — Side by Side',
  render: () => {
    const [active, setActive] = useState(2);
    return <div style={{
      display: 'flex',
      gap: 48
    }}>
        <div style={{
        maxWidth: 280
      }}>
          <Text type="label">Auto (default)</Text>
          <Stepper activeStep={active} orientation="vertical" onStepClick={setActive}>
            <Step step={0} label="Account" />
            <Step step={1} label="Profile" />
            <Step step={2} label="Settings" />
            <Step step={3} label="Review" />
            <Step step={4} label="Done" />
          </Stepper>
        </div>
        <div style={{
        maxWidth: 280
      }}>
          <Text type="label">Number</Text>
          <Stepper activeStep={active} orientation="vertical" onStepClick={setActive}>
            <Step step={0} label="Account" indicator="number" />
            <Step step={1} label="Profile" indicator="number" />
            <Step step={2} label="Settings" indicator="number" />
            <Step step={3} label="Review" indicator="number" />
            <Step step={4} label="Done" indicator="number" />
          </Stepper>
        </div>
        <div style={{
        maxWidth: 280
      }}>
          <Text type="label">Custom icon</Text>
          <Stepper activeStep={active} orientation="vertical" onStepClick={setActive}>
            <Step step={0} label="Account" icon={<Icon icon="info" size="sm" />} />
            <Step step={1} label="Profile" icon={<Icon icon="search" size="sm" />} />
            <Step step={2} label="Settings" icon={<Icon icon="wrench" size="sm" />} />
            <Step step={3} label="Review" icon={<Icon icon="clock" size="sm" />} />
            <Step step={4} label="Done" icon={<Icon icon="check" size="sm" />} />
          </Stepper>
        </div>
        <div style={{
        maxWidth: 280
      }}>
          <Text type="label">None</Text>
          <Stepper activeStep={active} orientation="vertical" onStepClick={setActive}>
            <Step step={0} label="Account" indicator="none" />
            <Step step={1} label="Profile" indicator="none" />
            <Step step={2} label="Settings" indicator="none" />
            <Step step={3} label="Review" indicator="none" />
            <Step step={4} label="Done" indicator="none" />
          </Stepper>
        </div>
      </div>;
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'With Content — Multi-Step Form',
  render: () => {
    const [active, setActive] = useState(0);
    return <div style={{
      maxWidth: 480
    }}>
        <Stepper activeStep={active} orientation="vertical" onStepClick={setActive}>
          <Step step={0} label="Project details" indicator="number">
            {active === 0 && <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12
          }}>
                <TextInput label="Project name" placeholder="My awesome project" value="" />
                <TextInput label="Repository URL" placeholder="https://github.com/..." value="" />
                <div>
                  <Button label="Continue" variant="primary" onClick={() => setActive(1)} />
                </div>
              </div>}
          </Step>
          <Step step={1} label="Environment" indicator="number">
            {active === 1 && <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12
          }}>
                <TextInput label="Node version" placeholder="20" value="" />
                <TextInput label="Build command" placeholder="npm run build" value="" />
                <div style={{
              display: 'flex',
              gap: 8
            }}>
                  <Button label="Back" variant="secondary" onClick={() => setActive(0)} />
                  <Button label="Continue" variant="primary" onClick={() => setActive(2)} />
                </div>
              </div>}
          </Step>
          <Step step={2} label="Deploy" indicator="number">
            {active === 2 && <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12
          }}>
                <Text type="body">
                  Ready to deploy. This will create a production build and push
                  to your configured hosting.
                </Text>
                <div style={{
              display: 'flex',
              gap: 8
            }}>
                  <Button label="Back" variant="secondary" onClick={() => setActive(1)} />
                  <Button label="Deploy now" variant="primary" onClick={() => setActive(3)} />
                </div>
              </div>}
          </Step>
          <Step step={3} label="Done" indicator="number" />
        </Stepper>
      </div>;
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'Density — Compact / Balanced / Spacious',
  render: () => {
    const [active, setActive] = useState(1);
    return <div style={{
      display: 'flex',
      gap: 48
    }}>
        <div style={{
        maxWidth: 250
      }}>
          <Text type="label">Compact</Text>
          <Stepper activeStep={active} orientation="vertical" onStepClick={setActive} density="compact">
            <Step step={0} label="Account" indicator="number" />
            <Step step={1} label="Profile" indicator="number" />
            <Step step={2} label="Payment" indicator="number" />
            <Step step={3} label="Review" indicator="number" />
          </Stepper>
        </div>
        <div style={{
        maxWidth: 250
      }}>
          <Text type="label">Balanced</Text>
          <Stepper activeStep={active} orientation="vertical" onStepClick={setActive} density="balanced">
            <Step step={0} label="Account" indicator="number" />
            <Step step={1} label="Profile" indicator="number" />
            <Step step={2} label="Payment" indicator="number" />
            <Step step={3} label="Review" indicator="number" />
          </Stepper>
        </div>
        <div style={{
        maxWidth: 250
      }}>
          <Text type="label">Spacious</Text>
          <Stepper activeStep={active} orientation="vertical" onStepClick={setActive} density="spacious">
            <Step step={0} label="Account" indicator="number" />
            <Step step={1} label="Profile" indicator="number" />
            <Step step={2} label="Payment" indicator="number" />
            <Step step={3} label="Review" indicator="number" />
          </Stepper>
        </div>
      </div>;
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Edge — Two Steps',
  render: () => {
    const [active, setActive] = useState(0);
    return <div style={{
      maxWidth: 400
    }}>
        <Stepper activeStep={active} orientation="horizontal" onStepClick={setActive}>
          <Step step={0} label="Before" />
          <Step step={1} label="After" />
        </Stepper>
      </div>;
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'Edge — Seven Steps (Horizontal)',
  render: () => {
    const [active, setActive] = useState(3);
    return <Stepper activeStep={active} orientation="horizontal" onStepClick={setActive}>
        <Step step={0} label="Idea" indicator="number" />
        <Step step={1} label="Design" indicator="number" />
        <Step step={2} label="Build" indicator="number" />
        <Step step={3} label="Test" indicator="number" />
        <Step step={4} label="Review" indicator="number" />
        <Step step={5} label="Deploy" indicator="number" />
        <Step step={6} label="Monitor" indicator="number" />
      </Stepper>;
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Edge — Disabled Steps',
  render: () => {
    const [active, setActive] = useState(1);
    return <div style={{
      maxWidth: 400
    }}>
        <Stepper activeStep={active} orientation="vertical" onStepClick={setActive}>
          <Step step={0} label="Basic info" />
          <Step step={1} label="Permissions" />
          <Step step={2} label="Admin settings" description="Requires admin role" isDisabled />
          <Step step={3} label="Confirm" />
        </Stepper>
      </div>;
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Edge — Optional + Skipped',
  render: () => {
    const [active, setActive] = useState(3);
    return <div style={{
      maxWidth: 400
    }}>
        <Stepper activeStep={active} orientation="vertical" onStepClick={setActive}>
          <Step step={0} label="Basic profile" />
          <Step step={1} label="Profile photo" isOptional description="Skipped" />
          <Step step={2} label="Connect socials" isOptional />
          <Step step={3} label="Preferences" />
          <Step step={4} label="All done" />
        </Stepper>
      </div>;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Edge — Long Labels & Descriptions',
  render: () => {
    const [active, setActive] = useState(1);
    return <div style={{
      maxWidth: 400
    }}>
        <Stepper activeStep={active} orientation="vertical" onStepClick={setActive}>
          <Step step={0} label="Configure your development environment" description="Install dependencies, set up local database, configure environment variables" />
          <Step step={1} label="Create initial data migration" description="Define schema, seed data, and run migrations against staging" />
          <Step step={2} label="Submit for code review" description="Open pull request and address reviewer feedback" />
        </Stepper>
      </div>;
  }
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`DefaultHorizontal`,`NumberedVertical`,`NumberedHorizontal`,`StatusVertical`,`StatusAllStates`,`MinimalVertical`,`MinimalHorizontal`,`IndicatorComparison`,`WithContentSlot`,`DensityComparison`,`TwoSteps`,`ManySteps`,`DisabledSteps`,`OptionalSteps`,`LongLabels`]})))()}$();export{I as Default,L as DefaultHorizontal,K as DensityComparison,Y as DisabledSteps,W as IndicatorComparison,Z as LongLabels,J as ManySteps,U as MinimalHorizontal,H as MinimalVertical,z as NumberedHorizontal,R as NumberedVertical,X as OptionalSteps,V as StatusAllStates,B as StatusVertical,q as TwoSteps,G as WithContentSlot,Q as __namedExportsOrder,F as default};