import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{n as r,t as i}from"./stylex-Dft6gtPK.js";import{n as a}from"./mergeProps-JRyAvMxc.js";import{n as o,t as s}from"./themeProps-DRQoVAIO.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{c as l,n as u,s as d,t as f}from"./Avatar-DN4kS59e.js";function p(e){return e<=36?{dotSize:10,borderWidth:1,iconSize:0}:e<=72?{dotSize:20,borderWidth:2,iconSize:12}:{dotSize:32,borderWidth:4,iconSize:18}}function m({ref:e,variant:t=`success`,label:n,icon:i,xstyle:s,className:c,style:l,...u}){let{dotSize:f,borderWidth:m,iconSize:v}=p((0,h.use)(d));return(0,g.jsx)(`div`,{...u,ref:e,...n?{role:`img`,"aria-label":n}:void 0,...a(o(`avatar-status-dot`,{variant:t}),r(_.dot,b[t],y.size(f,m),s),c,l),children:i&&v>0&&(0,g.jsx)(`span`,{"aria-hidden":`true`,...r(_.icon,y.iconSize(v)),children:i})})}var h,g,_,v,y,b;function x(){return(x=t((()=>{h=e(n(),1),i(),l(),s(),g=c(),_={dot:{kaIpWk:`khameleonjspbzw`,ksu8eU:`khameleon1y0btm7`,kVAM5u:`khameleon1touxvs`,kB7OPa:`khameleon9f619`,k1xSpc:`khameleon78zum5`,kGNEyG:`khameleon6s0dn4`,kjj79g:`khameleonl56j7k`,$$css:!0},success:{kWkggS:`khameleondsz4j9`,$$css:!0},neutral:{kWkggS:`khameleondomwnj`,$$css:!0},error:{kWkggS:`khameleon1pjz0fi`,$$css:!0},icon:{k1xSpc:`khameleon78zum5`,kGNEyG:`khameleon6s0dn4`,kjj79g:`khameleonl56j7k`,kMwMTN:`khameleonrkvqaz`,kLWn49:`khameleon14ju556`,$$css:!0}},v={kjGldf:``,k2ei4v:``,kZ1KPB:``,ke9TFa:``,kWqL5O:``,kLoX6v:``,kEafiO:``,kt9PQ7:``,$$css:!0},y={size:(e,t)=>[v,{kzqmXN:e==null?e:`khameleon5lhr3w`,kZKoxP:e==null?e:`khameleon16ye13r`,kMzoRj:t==null?t:`khameleon1mw0n95`,$$css:!0},{"--x-width":(e=>typeof e==`number`?e+`px`:e??void 0)(e),"--x-height":(e=>typeof e==`number`?e+`px`:e??void 0)(e),"--x-borderWidth":(e=>typeof e==`number`?e+`px`:e??void 0)(t)}],iconSize:e=>[{kzqmXN:e==null?e:`khameleon5lhr3w`,kZKoxP:e==null?e:`khameleon16ye13r`,$$css:!0},{"--x-width":(e=>typeof e==`number`?e+`px`:e??void 0)(e),"--x-height":(e=>typeof e==`number`?e+`px`:e??void 0)(e)}]},b={success:_.success,neutral:_.neutral,error:_.error},m.displayName=`AvatarStatusDot`,m.__docgenInfo={description:`A status indicator dot that automatically scales to match the parent
Avatar's size.

Must be used inside an Avatar's \`status\` prop so it can read
the avatar size from context.

@example
\`\`\`
<Avatar
  name="John Doe"
  size="medium"
  status={<AvatarStatusDot variant="success" label="Online" />}
/>
<Avatar
  name="Jane Smith"
  size="large"
  status={<AvatarStatusDot variant="success" label="Verified" icon={<CheckIcon />} />}
/>
\`\`\``,methods:[],displayName:`AvatarStatusDot`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:``},variant:{required:!1,tsType:{name:`AvatarStatusDotVariantMap`},description:"The semantic color variant of the dot.\n- `success` — green dot (e.g. online, accepted)\n- `neutral` — gray dot (e.g. offline, pending)\n- `error` — red dot (e.g. busy, rejected)\n\nMatches the `variant` convention from `StatusDot`.\n@default 'success'",defaultValue:{value:`'success'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:`Accessible label for the status dot.
Describes the meaning of the indicator for screen readers
(e.g. "Online", "Accepted", "John Doe is busy").`},icon:{required:!1,tsType:{name:`ReactNode`},description:`Optional icon to render centered inside the dot.
Accepts any ReactNode (typically an SVG icon).
The icon is automatically sized to fit the dot and hidden
at the smallest avatar sizes where there isn't enough room.

@example
\`\`\`
<AvatarStatusDot variant="success" label="Verified" icon={<CheckIcon />} />
\`\`\``}},composes:[`Omit`]}})))()}function S({title:e,titleId:t,...n},r){return C.createElement(`svg`,Object.assign({xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`,"data-slot":`icon`,ref:r,"aria-labelledby":t},n),e?C.createElement(`title`,{id:t},e):null,C.createElement(`path`,{fillRule:`evenodd`,d:`M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z`,clipRule:`evenodd`}))}var C,w;function T(){return(T=t((()=>{C=e(n()),w=C.forwardRef(S)})))()}var E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=t((()=>{u(),x(),T(),E=c(),D={title:`Core/Avatar`,component:f,tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`tiny`,`xsmall`,`small`,`medium`,`large`,16,20,24,32,36,40,48,60,64,72,96,128,144,180],description:`Size of the avatar`},src:{control:`text`,description:`Primary image source URL`},fallbackSrc:{control:`text`,description:`Fallback image when primary fails`},name:{control:`text`,description:`User name for initials and alt text`},alt:{control:`text`,description:`Alt text (falls back to name)`},status:{control:`boolean`,description:`Show status indicator dot`,mapping:{true:(0,E.jsx)(m,{}),false:void 0}}}},O={args:{name:`John Doe`,size:`medium`}},k={args:{src:`https://i.pravatar.cc/150?img=1`,name:`Jane Smith`,size:`medium`}},A={render:()=>(0,E.jsxs)(`div`,{className:`x78zum5 xdt5ytf x1qh66ti`,children:[(0,E.jsx)(`h4`,{className:`xrcdmg7 x9ynric`,children:`Named Sizes`}),(0,E.jsxs)(`div`,{className:`x78zum5 x6s0dn4 x18g69wz`,children:[(0,E.jsx)(f,{name:`TY`,size:`tiny`}),(0,E.jsx)(f,{name:`XS`,size:`xsmall`}),(0,E.jsx)(f,{name:`SM`,size:`small`}),(0,E.jsx)(f,{name:`MD`,size:`medium`}),(0,E.jsx)(f,{name:`LG`,size:`large`})]})]})},j={render:()=>(0,E.jsxs)(`div`,{className:`x78zum5 xdt5ytf x1qh66ti`,children:[(0,E.jsx)(`h4`,{className:`xrcdmg7 x9ynric`,children:`With Images (Different Sizes)`}),(0,E.jsxs)(`div`,{className:`x78zum5 x6s0dn4 x18g69wz`,children:[(0,E.jsx)(f,{src:`https://i.pravatar.cc/150?img=1`,name:`User 1`,size:`tiny`}),(0,E.jsx)(f,{src:`https://i.pravatar.cc/150?img=2`,name:`User 2`,size:`xsmall`}),(0,E.jsx)(f,{src:`https://i.pravatar.cc/150?img=3`,name:`User 3`,size:`small`}),(0,E.jsx)(f,{src:`https://i.pravatar.cc/150?img=4`,name:`User 4`,size:`medium`}),(0,E.jsx)(f,{src:`https://i.pravatar.cc/150?img=5`,name:`User 5`,size:`large`})]})]})},M={render:()=>(0,E.jsxs)(`div`,{className:`x78zum5 xdt5ytf x1qh66ti`,children:[(0,E.jsx)(`h4`,{className:`xrcdmg7 x9ynric`,children:`Initials Fallback`}),(0,E.jsxs)(`div`,{className:`x78zum5 x6s0dn4 x18g69wz`,children:[(0,E.jsx)(f,{name:`John Doe`,size:`medium`}),(0,E.jsx)(f,{name:`Alice`,size:`medium`}),(0,E.jsx)(f,{name:`Bob Smith Johnson`,size:`medium`}),(0,E.jsx)(f,{name:`Dr. Sarah Connor`,size:`medium`})]})]})},N={render:()=>(0,E.jsxs)(`div`,{className:`x78zum5 xdt5ytf x1qh66ti`,children:[(0,E.jsx)(`h4`,{className:`xrcdmg7 x9ynric`,children:`Default Icon (No Image or Name)`}),(0,E.jsxs)(`div`,{className:`x78zum5 x6s0dn4 x18g69wz`,children:[(0,E.jsx)(f,{size:`tiny`}),(0,E.jsx)(f,{size:`xsmall`}),(0,E.jsx)(f,{size:`small`}),(0,E.jsx)(f,{size:`medium`}),(0,E.jsx)(f,{size:`large`})]})]})},P={render:()=>(0,E.jsxs)(`div`,{className:`x78zum5 xdt5ytf x1qh66ti`,children:[(0,E.jsx)(`h4`,{className:`xrcdmg7 x9ynric`,children:`Fallback Chain Demo`}),(0,E.jsxs)(`div`,{className:`x78zum5 x6s0dn4 x18g69wz`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`p`,{className:`xrcdmg7 x9ynric`,children:`Valid src`}),(0,E.jsx)(f,{src:`https://i.pravatar.cc/150?img=10`,name:`Test User`,size:`large`})]}),(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`p`,{className:`xrcdmg7 x9ynric`,children:`Invalid src, valid fallbackSrc`}),(0,E.jsx)(f,{src:`https://invalid-url.example/broken.jpg`,fallbackSrc:`https://i.pravatar.cc/150?img=11`,name:`Test User`,size:`large`})]}),(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`p`,{className:`xrcdmg7 x9ynric`,children:`Both invalid, has name`}),(0,E.jsx)(f,{src:`https://invalid-url.example/broken.jpg`,fallbackSrc:`https://also-invalid.example/broken.jpg`,name:`Test User`,size:`large`})]}),(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`p`,{className:`xrcdmg7 x9ynric`,children:`All invalid, no name`}),(0,E.jsx)(f,{src:`https://invalid-url.example/broken.jpg`,size:`large`})]})]})]})},F={render:()=>(0,E.jsxs)(`div`,{className:`x78zum5 xdt5ytf x1qh66ti`,children:[(0,E.jsx)(`h4`,{className:`xrcdmg7 x9ynric`,children:`With Status Indicators`}),(0,E.jsxs)(`div`,{className:`x78zum5 x6s0dn4 x18g69wz`,children:[(0,E.jsx)(f,{src:`https://i.pravatar.cc/150?img=20`,name:`Online User`,size:`large`,status:(0,E.jsx)(m,{variant:`success`,label:`Online`})}),(0,E.jsx)(f,{src:`https://i.pravatar.cc/150?img=21`,name:`Offline User`,size:`large`,status:(0,E.jsx)(m,{variant:`neutral`,label:`Offline`})}),(0,E.jsx)(f,{src:`https://i.pravatar.cc/150?img=22`,name:`Busy User`,size:`large`,status:(0,E.jsx)(m,{variant:`error`,label:`Busy`})})]})]})},I={name:`Status Dot Across All Sizes`,render:()=>(0,E.jsxs)(`div`,{className:`x78zum5 xdt5ytf x1qh66ti`,children:[(0,E.jsx)(`h4`,{className:`xrcdmg7 x9ynric`,children:`Status dot scales proportionally with avatar size`}),(0,E.jsx)(`h4`,{className:`xrcdmg7 x9ynric`,children:`Named Sizes`}),(0,E.jsxs)(`div`,{className:`x78zum5 x6s0dn4 x18g69wz`,children:[(0,E.jsx)(f,{name:`TY`,size:`tiny`,status:(0,E.jsx)(m,{variant:`success`})}),(0,E.jsx)(f,{name:`XS`,size:`xsmall`,status:(0,E.jsx)(m,{variant:`success`})}),(0,E.jsx)(f,{name:`SM`,size:`small`,status:(0,E.jsx)(m,{variant:`success`})}),(0,E.jsx)(f,{name:`MD`,size:`medium`,status:(0,E.jsx)(m,{variant:`success`})}),(0,E.jsx)(f,{name:`LG`,size:`large`,status:(0,E.jsx)(m,{variant:`success`})})]}),(0,E.jsx)(`h4`,{className:`xrcdmg7 x9ynric`,children:`Numeric Sizes with Images`}),(0,E.jsxs)(`div`,{className:`x78zum5 x6s0dn4 x18g69wz`,children:[(0,E.jsx)(f,{src:`https://i.pravatar.cc/150?img=30`,name:`U1`,size:20,status:(0,E.jsx)(m,{variant:`success`})}),(0,E.jsx)(f,{src:`https://i.pravatar.cc/150?img=31`,name:`U2`,size:32,status:(0,E.jsx)(m,{variant:`success`})}),(0,E.jsx)(f,{src:`https://i.pravatar.cc/150?img=32`,name:`U3`,size:48,status:(0,E.jsx)(m,{variant:`error`})}),(0,E.jsx)(f,{src:`https://i.pravatar.cc/150?img=33`,name:`U4`,size:72,status:(0,E.jsx)(m,{variant:`neutral`})}),(0,E.jsx)(f,{src:`https://i.pravatar.cc/150?img=34`,name:`U5`,size:96,status:(0,E.jsx)(m,{variant:`success`})}),(0,E.jsx)(f,{src:`https://i.pravatar.cc/150?img=35`,name:`U6`,size:128,status:(0,E.jsx)(m,{variant:`success`})})]}),(0,E.jsx)(`h4`,{className:`xrcdmg7 x9ynric`,children:`All Colors at Medium`}),(0,E.jsxs)(`div`,{className:`x78zum5 x6s0dn4 x18g69wz`,children:[(0,E.jsx)(f,{src:`https://i.pravatar.cc/150?img=40`,name:`Positive`,size:`medium`,status:(0,E.jsx)(m,{variant:`success`,label:`Online`})}),(0,E.jsx)(f,{src:`https://i.pravatar.cc/150?img=41`,name:`Neutral`,size:`medium`,status:(0,E.jsx)(m,{variant:`neutral`,label:`Offline`})}),(0,E.jsx)(f,{src:`https://i.pravatar.cc/150?img=42`,name:`Negative`,size:`medium`,status:(0,E.jsx)(m,{variant:`error`,label:`Busy`})})]})]})},L={render:()=>(0,E.jsxs)(`div`,{className:`x78zum5 xdt5ytf x1qh66ti`,children:[(0,E.jsx)(`h4`,{className:`xrcdmg7 x9ynric`,children:`Status with Different Sizes`}),(0,E.jsxs)(`div`,{className:`x78zum5 x6s0dn4 x18g69wz`,children:[(0,E.jsx)(f,{name:`AB`,size:`small`,status:(0,E.jsx)(m,{})}),(0,E.jsx)(f,{name:`CD`,size:`medium`,status:(0,E.jsx)(m,{})}),(0,E.jsx)(f,{name:`EF`,size:`large`,status:(0,E.jsx)(m,{})}),(0,E.jsx)(f,{name:`GH`,size:72,status:(0,E.jsx)(m,{})})]})]})},R={name:`Status Dot with Icon`,render:()=>(0,E.jsxs)(`div`,{className:`x78zum5 xdt5ytf x1qh66ti`,children:[(0,E.jsx)(`h4`,{className:`xrcdmg7 x9ynric`,children:`Icon inside status dot (hidden at tiny sizes where there isn't room)`}),(0,E.jsx)(`h4`,{className:`xrcdmg7 x9ynric`,children:`Named Sizes`}),(0,E.jsxs)(`div`,{className:`x78zum5 x6s0dn4 x18g69wz`,children:[(0,E.jsx)(f,{name:`TY`,size:`tiny`,status:(0,E.jsx)(m,{variant:`success`,label:`Verified`,icon:(0,E.jsx)(w,{})})}),(0,E.jsx)(f,{name:`XS`,size:`xsmall`,status:(0,E.jsx)(m,{variant:`success`,label:`Verified`,icon:(0,E.jsx)(w,{})})}),(0,E.jsx)(f,{name:`SM`,size:`small`,status:(0,E.jsx)(m,{variant:`success`,label:`Verified`,icon:(0,E.jsx)(w,{})})}),(0,E.jsx)(f,{src:`https://i.pravatar.cc/150?img=50`,name:`MD`,size:`medium`,status:(0,E.jsx)(m,{variant:`success`,label:`Verified`,icon:(0,E.jsx)(w,{})})}),(0,E.jsx)(f,{src:`https://i.pravatar.cc/150?img=51`,name:`LG`,size:`large`,status:(0,E.jsx)(m,{variant:`success`,label:`Verified`,icon:(0,E.jsx)(w,{})})})]}),(0,E.jsx)(`h4`,{className:`xrcdmg7 x9ynric`,children:`Numeric Sizes with Images`}),(0,E.jsxs)(`div`,{className:`x78zum5 x6s0dn4 x18g69wz`,children:[(0,E.jsx)(f,{src:`https://i.pravatar.cc/150?img=30`,name:`U1`,size:20,status:(0,E.jsx)(m,{variant:`success`,label:`Verified`,icon:(0,E.jsx)(w,{})})}),(0,E.jsx)(f,{src:`https://i.pravatar.cc/150?img=31`,name:`U2`,size:32,status:(0,E.jsx)(m,{variant:`success`,label:`Verified`,icon:(0,E.jsx)(w,{})})}),(0,E.jsx)(f,{src:`https://i.pravatar.cc/150?img=32`,name:`U3`,size:48,status:(0,E.jsx)(m,{variant:`success`,label:`Verified`,icon:(0,E.jsx)(w,{})})}),(0,E.jsx)(f,{src:`https://i.pravatar.cc/150?img=33`,name:`U4`,size:72,status:(0,E.jsx)(m,{variant:`success`,label:`Verified`,icon:(0,E.jsx)(w,{})})}),(0,E.jsx)(f,{src:`https://i.pravatar.cc/150?img=34`,name:`U5`,size:96,status:(0,E.jsx)(m,{variant:`success`,label:`Verified`,icon:(0,E.jsx)(w,{})})}),(0,E.jsx)(f,{src:`https://i.pravatar.cc/150?img=35`,name:`U6`,size:128,status:(0,E.jsx)(m,{variant:`success`,label:`Verified`,icon:(0,E.jsx)(w,{})})})]}),(0,E.jsx)(`h4`,{className:`xrcdmg7 x9ynric`,children:`All Variants with Icons`}),(0,E.jsxs)(`div`,{className:`x78zum5 x6s0dn4 x18g69wz`,children:[(0,E.jsx)(f,{src:`https://i.pravatar.cc/150?img=52`,name:`Positive`,size:`large`,status:(0,E.jsx)(m,{variant:`success`,label:`Verified`,icon:(0,E.jsx)(w,{})})}),(0,E.jsx)(f,{src:`https://i.pravatar.cc/150?img=53`,name:`Neutral`,size:`large`,status:(0,E.jsx)(m,{variant:`neutral`,label:`Pending`,icon:(0,E.jsx)(w,{})})}),(0,E.jsx)(f,{src:`https://i.pravatar.cc/150?img=54`,name:`Negative`,size:`large`,status:(0,E.jsx)(m,{variant:`error`,label:`Rejected`,icon:(0,E.jsx)(w,{})})})]})]})},z={render:()=>(0,E.jsxs)(`div`,{className:`x78zum5 xdt5ytf x1qh66ti`,children:[(0,E.jsx)(`h4`,{className:`xrcdmg7 x9ynric`,children:`Numeric Pixel Sizes`}),(0,E.jsxs)(`div`,{className:`x78zum5 x6s0dn4 x18g69wz`,children:[(0,E.jsx)(f,{name:`16`,size:16}),(0,E.jsx)(f,{name:`24`,size:24}),(0,E.jsx)(f,{name:`36`,size:36}),(0,E.jsx)(f,{name:`48`,size:48}),(0,E.jsx)(f,{name:`72`,size:72}),(0,E.jsx)(f,{name:`96`,size:96}),(0,E.jsx)(f,{name:`128`,size:128})]})]})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'John Doe',
    size: 'medium'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    name: 'Jane Smith',
    size: 'medium'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.storyWrapper)}>
      <h4 {...stylex.props(styles.heading)}>Named Sizes</h4>
      <div {...stylex.props(styles.row)}>
        <Avatar name="TY" size="tiny" />
        <Avatar name="XS" size="xsmall" />
        <Avatar name="SM" size="small" />
        <Avatar name="MD" size="medium" />
        <Avatar name="LG" size="large" />
      </div>
    </div>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.storyWrapper)}>
      <h4 {...stylex.props(styles.heading)}>With Images (Different Sizes)</h4>
      <div {...stylex.props(styles.row)}>
        <Avatar src="https://i.pravatar.cc/150?img=1" name="User 1" size="tiny" />
        <Avatar src="https://i.pravatar.cc/150?img=2" name="User 2" size="xsmall" />
        <Avatar src="https://i.pravatar.cc/150?img=3" name="User 3" size="small" />
        <Avatar src="https://i.pravatar.cc/150?img=4" name="User 4" size="medium" />
        <Avatar src="https://i.pravatar.cc/150?img=5" name="User 5" size="large" />
      </div>
    </div>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.storyWrapper)}>
      <h4 {...stylex.props(styles.heading)}>Initials Fallback</h4>
      <div {...stylex.props(styles.row)}>
        <Avatar name="John Doe" size="medium" />
        <Avatar name="Alice" size="medium" />
        <Avatar name="Bob Smith Johnson" size="medium" />
        <Avatar name="Dr. Sarah Connor" size="medium" />
      </div>
    </div>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.storyWrapper)}>
      <h4 {...stylex.props(styles.heading)}>Default Icon (No Image or Name)</h4>
      <div {...stylex.props(styles.row)}>
        <Avatar size="tiny" />
        <Avatar size="xsmall" />
        <Avatar size="small" />
        <Avatar size="medium" />
        <Avatar size="large" />
      </div>
    </div>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.storyWrapper)}>
      <h4 {...stylex.props(styles.heading)}>Fallback Chain Demo</h4>
      <div {...stylex.props(styles.row)}>
        <div>
          <p {...stylex.props(styles.heading)}>Valid src</p>
          <Avatar src="https://i.pravatar.cc/150?img=10" name="Test User" size="large" />
        </div>
        <div>
          <p {...stylex.props(styles.heading)}>
            Invalid src, valid fallbackSrc
          </p>
          <Avatar src="https://invalid-url.example/broken.jpg" fallbackSrc="https://i.pravatar.cc/150?img=11" name="Test User" size="large" />
        </div>
        <div>
          <p {...stylex.props(styles.heading)}>Both invalid, has name</p>
          <Avatar src="https://invalid-url.example/broken.jpg" fallbackSrc="https://also-invalid.example/broken.jpg" name="Test User" size="large" />
        </div>
        <div>
          <p {...stylex.props(styles.heading)}>All invalid, no name</p>
          <Avatar src="https://invalid-url.example/broken.jpg" size="large" />
        </div>
      </div>
    </div>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.storyWrapper)}>
      <h4 {...stylex.props(styles.heading)}>With Status Indicators</h4>
      <div {...stylex.props(styles.row)}>
        <Avatar src="https://i.pravatar.cc/150?img=20" name="Online User" size="large" status={<AvatarStatusDot variant="success" label="Online" />} />
        <Avatar src="https://i.pravatar.cc/150?img=21" name="Offline User" size="large" status={<AvatarStatusDot variant="neutral" label="Offline" />} />
        <Avatar src="https://i.pravatar.cc/150?img=22" name="Busy User" size="large" status={<AvatarStatusDot variant="error" label="Busy" />} />
      </div>
    </div>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Status Dot Across All Sizes',
  render: () => <div {...stylex.props(styles.storyWrapper)}>
      <h4 {...stylex.props(styles.heading)}>
        Status dot scales proportionally with avatar size
      </h4>

      <h4 {...stylex.props(styles.heading)}>Named Sizes</h4>
      <div {...stylex.props(styles.row)}>
        <Avatar name="TY" size="tiny" status={<AvatarStatusDot variant="success" />} />
        <Avatar name="XS" size="xsmall" status={<AvatarStatusDot variant="success" />} />
        <Avatar name="SM" size="small" status={<AvatarStatusDot variant="success" />} />
        <Avatar name="MD" size="medium" status={<AvatarStatusDot variant="success" />} />
        <Avatar name="LG" size="large" status={<AvatarStatusDot variant="success" />} />
      </div>

      <h4 {...stylex.props(styles.heading)}>Numeric Sizes with Images</h4>
      <div {...stylex.props(styles.row)}>
        <Avatar src="https://i.pravatar.cc/150?img=30" name="U1" size={20} status={<AvatarStatusDot variant="success" />} />
        <Avatar src="https://i.pravatar.cc/150?img=31" name="U2" size={32} status={<AvatarStatusDot variant="success" />} />
        <Avatar src="https://i.pravatar.cc/150?img=32" name="U3" size={48} status={<AvatarStatusDot variant="error" />} />
        <Avatar src="https://i.pravatar.cc/150?img=33" name="U4" size={72} status={<AvatarStatusDot variant="neutral" />} />
        <Avatar src="https://i.pravatar.cc/150?img=34" name="U5" size={96} status={<AvatarStatusDot variant="success" />} />
        <Avatar src="https://i.pravatar.cc/150?img=35" name="U6" size={128} status={<AvatarStatusDot variant="success" />} />
      </div>

      <h4 {...stylex.props(styles.heading)}>All Colors at Medium</h4>
      <div {...stylex.props(styles.row)}>
        <Avatar src="https://i.pravatar.cc/150?img=40" name="Positive" size="medium" status={<AvatarStatusDot variant="success" label="Online" />} />
        <Avatar src="https://i.pravatar.cc/150?img=41" name="Neutral" size="medium" status={<AvatarStatusDot variant="neutral" label="Offline" />} />
        <Avatar src="https://i.pravatar.cc/150?img=42" name="Negative" size="medium" status={<AvatarStatusDot variant="error" label="Busy" />} />
      </div>
    </div>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.storyWrapper)}>
      <h4 {...stylex.props(styles.heading)}>Status with Different Sizes</h4>
      <div {...stylex.props(styles.row)}>
        <Avatar name="AB" size="small" status={<AvatarStatusDot />} />
        <Avatar name="CD" size="medium" status={<AvatarStatusDot />} />
        <Avatar name="EF" size="large" status={<AvatarStatusDot />} />
        <Avatar name="GH" size={72} status={<AvatarStatusDot />} />
      </div>
    </div>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Status Dot with Icon',
  render: () => <div {...stylex.props(styles.storyWrapper)}>
      <h4 {...stylex.props(styles.heading)}>
        Icon inside status dot (hidden at tiny sizes where there isn't room)
      </h4>

      <h4 {...stylex.props(styles.heading)}>Named Sizes</h4>
      <div {...stylex.props(styles.row)}>
        <Avatar name="TY" size="tiny" status={<AvatarStatusDot variant="success" label="Verified" icon={<CheckIcon />} />} />
        <Avatar name="XS" size="xsmall" status={<AvatarStatusDot variant="success" label="Verified" icon={<CheckIcon />} />} />
        <Avatar name="SM" size="small" status={<AvatarStatusDot variant="success" label="Verified" icon={<CheckIcon />} />} />
        <Avatar src="https://i.pravatar.cc/150?img=50" name="MD" size="medium" status={<AvatarStatusDot variant="success" label="Verified" icon={<CheckIcon />} />} />
        <Avatar src="https://i.pravatar.cc/150?img=51" name="LG" size="large" status={<AvatarStatusDot variant="success" label="Verified" icon={<CheckIcon />} />} />
      </div>

      <h4 {...stylex.props(styles.heading)}>Numeric Sizes with Images</h4>
      <div {...stylex.props(styles.row)}>
        <Avatar src="https://i.pravatar.cc/150?img=30" name="U1" size={20} status={<AvatarStatusDot variant="success" label="Verified" icon={<CheckIcon />} />} />
        <Avatar src="https://i.pravatar.cc/150?img=31" name="U2" size={32} status={<AvatarStatusDot variant="success" label="Verified" icon={<CheckIcon />} />} />
        <Avatar src="https://i.pravatar.cc/150?img=32" name="U3" size={48} status={<AvatarStatusDot variant="success" label="Verified" icon={<CheckIcon />} />} />
        <Avatar src="https://i.pravatar.cc/150?img=33" name="U4" size={72} status={<AvatarStatusDot variant="success" label="Verified" icon={<CheckIcon />} />} />
        <Avatar src="https://i.pravatar.cc/150?img=34" name="U5" size={96} status={<AvatarStatusDot variant="success" label="Verified" icon={<CheckIcon />} />} />
        <Avatar src="https://i.pravatar.cc/150?img=35" name="U6" size={128} status={<AvatarStatusDot variant="success" label="Verified" icon={<CheckIcon />} />} />
      </div>

      <h4 {...stylex.props(styles.heading)}>All Variants with Icons</h4>
      <div {...stylex.props(styles.row)}>
        <Avatar src="https://i.pravatar.cc/150?img=52" name="Positive" size="large" status={<AvatarStatusDot variant="success" label="Verified" icon={<CheckIcon />} />} />
        <Avatar src="https://i.pravatar.cc/150?img=53" name="Neutral" size="large" status={<AvatarStatusDot variant="neutral" label="Pending" icon={<CheckIcon />} />} />
        <Avatar src="https://i.pravatar.cc/150?img=54" name="Negative" size="large" status={<AvatarStatusDot variant="error" label="Rejected" icon={<CheckIcon />} />} />
      </div>
    </div>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.storyWrapper)}>
      <h4 {...stylex.props(styles.heading)}>Numeric Pixel Sizes</h4>
      <div {...stylex.props(styles.row)}>
        <Avatar name="16" size={16} />
        <Avatar name="24" size={24} />
        <Avatar name="36" size={36} />
        <Avatar name="48" size={48} />
        <Avatar name="72" size={72} />
        <Avatar name="96" size={96} />
        <Avatar name="128" size={128} />
      </div>
    </div>
}`,...z.parameters?.docs?.source}}},B=[`Default`,`WithImage`,`AllSizes`,`WithImages`,`InitialsFallback`,`NoImageNoName`,`FallbackChain`,`WithStatus`,`StatusAcrossAllSizes`,`StatusWithSizes`,`StatusWithIcon`,`NumericSizes`]})))()}V();export{A as AllSizes,O as Default,P as FallbackChain,M as InitialsFallback,N as NoImageNoName,z as NumericSizes,I as StatusAcrossAllSizes,R as StatusWithIcon,L as StatusWithSizes,k as WithImage,j as WithImages,F as WithStatus,B as __namedExportsOrder,D as default};