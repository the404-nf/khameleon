import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./stylex-Dft6gtPK.js";import{n as i}from"./mergeProps-JRyAvMxc.js";import{n as a,t as o}from"./themeProps-DRQoVAIO.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Text-543dlLxz.js";import{i as u,n as d,r as f,t as p}from"./Field-Cedy3QPa.js";import{n as m,t as h}from"./Selector-DAUIxR0-.js";import{n as g,t as _}from"./TextInput-C6huvyEM.js";function v({children:e,direction:t=`vertical`,xstyle:r,className:o,style:s,ref:c,...l}){let u=(0,y.useMemo)(()=>({direction:t}),[t]);return(0,b.jsx)(f,{value:u,children:(0,b.jsx)(`div`,{ref:c,...i(a(`form-layout`,{direction:t}),n(x.base,t===`horizontal`&&x.horizontal,t===`horizontal-labels`&&x.horizontalLabels,r),o,s),...l,children:e})})}var y,b,x;function S(){return(S=e((()=>{y=t(),r(),u(),o(),b=s(),x={base:{k1xSpc:`khameleon78zum5`,kXwgrk:`khameleondt5ytf`,kOIVth:`khameleon18g69wz`,$$css:!0},horizontal:{k1xSpc:`khameleonrvj5dj`,kprqdN:`khameleon1mt1orb`,klIVar:`khameleonu6a5m6`,$$css:!0},horizontalLabels:{k1xSpc:`khameleonrvj5dj`,kumcoG:`khameleon1pmbctz`,kOIVth:`khameleonlaq8a2`,kGNEyG:`khameleon7a106z`,k41HbU:`khameleonedohl4`,kUxVDj:`khameleon1rpgqan`,k3RL8M:`khameleon1a1jff`,$$css:!0}},v.displayName=`FormLayout`,v.__docgenInfo={description:`Spatial layout container for form fields.

Arranges form fields with consistent spacing and direction. Renders a \`<div>\`
(not a \`<form>\` — form submission is a separate concern). For label wrapping
of custom controls, use \`Field\` directly.

Provides direction context to children via \`FormLayoutContext\`.
Supports nesting — a horizontal layout inside a vertical layout works naturally.

@example
\`\`\`
<FormLayout>
  <TextInput label="Name" value={name} onChange={setName} />
  <TextInput label="Email" value={email} onChange={setEmail} />
</FormLayout>
\`\`\``,methods:[],displayName:`FormLayout`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:`Ref forwarded to the root element`},children:{required:!1,tsType:{name:`ReactNode`},description:`Form fields to arrange. Accepts Khameleon inputs (TextInput, Selector, etc.)
and Field-wrapped custom controls.`},direction:{required:!1,tsType:{name:`union`,raw:`| 'vertical'
| 'horizontal'
| 'horizontal-labels'`,elements:[{name:`literal`,value:`'vertical'`},{name:`literal`,value:`'horizontal'`},{name:`literal`,value:`'horizontal-labels'`}]},description:`Direction of field arrangement.

- \`'vertical'\` — Fields stack top-to-bottom (default). Most common.
- \`'horizontal'\` — Fields arrange left-to-right in equal-width columns
  using CSS Grid. Each child occupies one equal column.
- \`'horizontal-labels'\` — CSS Grid with labels to the left of inputs.
  Collapses to vertical when the container is narrow (≤480px).

@default 'vertical'`,defaultValue:{value:`'vertical'`,computed:!1}}},composes:[`Omit`]}})))()}function C({direction:e}){let[t,n]=(0,w.useState)(``),[r,i]=(0,w.useState)(``),[a,o]=(0,w.useState)(``);return(0,T.jsxs)(v,{direction:e,children:[(0,T.jsx)(_,{label:`Name`,value:t,onChange:n}),(0,T.jsx)(_,{label:`Email`,value:r,onChange:i}),(0,T.jsx)(_,{label:`Bio`,value:a,onChange:o})]})}var w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{w=t(),S(),g(),m(),d(),c(),T=s(),E={title:`Core/FormLayout`,component:v,tags:[`autodocs`],args:{direction:`vertical`},argTypes:{direction:{control:`select`,options:[`vertical`,`horizontal`,`horizontal-labels`],description:`Direction of field arrangement`}}},D={name:`Vertical (Default)`,render:e=>(0,T.jsx)(C,{direction:e.direction})},O={name:`Horizontal`,args:{direction:`horizontal`},render:e=>{let[t,n]=(0,w.useState)(``),[r,i]=(0,w.useState)(``);return(0,T.jsxs)(v,{direction:e.direction,children:[(0,T.jsx)(_,{label:`First Name`,value:t,onChange:n}),(0,T.jsx)(_,{label:`Last Name`,value:r,onChange:i})]})}},k={name:`Horizontal Labels (Settings)`,args:{direction:`horizontal-labels`},render:e=>{let[t,n]=(0,w.useState)(`Jane Doe`),[r,i]=(0,w.useState)(`jane@example.com`),[a,o]=(0,w.useState)(`America/Los_Angeles`);return(0,T.jsxs)(v,{direction:e.direction,children:[(0,T.jsx)(_,{label:`Display Name`,value:t,onChange:n}),(0,T.jsx)(_,{label:`Email`,value:r,onChange:i}),(0,T.jsx)(h,{label:`Timezone`,value:a,onChange:e=>o(e),options:[{label:`Pacific Time`,value:`America/Los_Angeles`},{label:`Eastern Time`,value:`America/New_York`},{label:`UTC`,value:`UTC`}]})]})}},A={name:`Mixed Controls`,render:()=>{let[e,t]=(0,w.useState)(``),[n,r]=(0,w.useState)(`viewer`);return(0,T.jsxs)(v,{children:[(0,T.jsx)(_,{label:`Name`,value:e,onChange:t}),(0,T.jsx)(h,{label:`Role`,value:n,onChange:e=>r(e),options:[{label:`Viewer`,value:`viewer`},{label:`Editor`,value:`editor`},{label:`Admin`,value:`admin`}]}),(0,T.jsx)(p,{label:`Notifications`,inputID:`notif-group`,children:(0,T.jsxs)(`div`,{className:`x78zum5 xdt5ytf x1jnr06f`,id:`notif-group`,children:[(0,T.jsxs)(`label`,{className:`x78zum5 x6s0dn4 x167g77z`,children:[(0,T.jsx)(`input`,{type:`checkbox`,defaultChecked:!0}),` Email`]}),(0,T.jsxs)(`label`,{className:`x78zum5 x6s0dn4 x167g77z`,children:[(0,T.jsx)(`input`,{type:`checkbox`}),` SMS`]}),(0,T.jsxs)(`label`,{className:`x78zum5 x6s0dn4 x167g77z`,children:[(0,T.jsx)(`input`,{type:`checkbox`,defaultChecked:!0}),` Push`]})]})})]})}},j={name:`Nested Layouts`,render:()=>{let[e,t]=(0,w.useState)(``),[n,r]=(0,w.useState)(``),[i,a]=(0,w.useState)(``),[o,s]=(0,w.useState)(``),[c,l]=(0,w.useState)(``),[u,d]=(0,w.useState)(``);return(0,T.jsxs)(v,{children:[(0,T.jsxs)(v,{direction:`horizontal`,children:[(0,T.jsx)(_,{label:`First Name`,value:e,onChange:t}),(0,T.jsx)(_,{label:`Last Name`,value:n,onChange:r})]}),(0,T.jsx)(_,{label:`Email`,value:i,onChange:a}),(0,T.jsxs)(v,{direction:`horizontal`,children:[(0,T.jsx)(_,{label:`City`,value:o,onChange:s}),(0,T.jsx)(_,{label:`State`,value:c,onChange:l}),(0,T.jsx)(_,{label:`ZIP`,value:u,onChange:d})]})]})}},M={name:`In a Dialog`,render:()=>{let[e,t]=(0,w.useState)(`Jane Doe`),[n,r]=(0,w.useState)(`jane@example.com`);return(0,T.jsxs)(`div`,{className:`xtfardp xur7f20 x17fpy1y xb3r6kr`,children:[(0,T.jsx)(`div`,{className:`x1tamke2 x915a4u`,children:(0,T.jsx)(l,{type:`label`,children:`Edit Profile`})}),(0,T.jsx)(`div`,{className:`x1tamke2`,children:(0,T.jsx)(`form`,{id:`edit-profile`,onSubmit:t=>{t.preventDefault(),alert(`Saved: ${e}, ${n}`)},children:(0,T.jsxs)(v,{children:[(0,T.jsx)(_,{label:`Name`,value:e,onChange:t}),(0,T.jsx)(_,{label:`Email`,value:n,onChange:r})]})})}),(0,T.jsxs)(`div`,{className:`x78zum5 x13a6bvl x167g77z x1tamke2 xz14g06`,children:[(0,T.jsx)(`button`,{className:`x1ff1495 x1kogg8i x1gs6z28 x1ypdohk xif65rj x1dr8pv1 xka2uk4`,type:`button`,children:`Cancel`}),(0,T.jsx)(`button`,{className:`x1ff1495 x1kogg8i x1gs6z28 x1ypdohk xif65rj xtzjzor xfungia`,type:`submit`,form:`edit-profile`,children:`Save`})]})]})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Vertical (Default)',
  render: args => <FormLayoutDemo direction={args.direction} />
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Horizontal',
  args: {
    direction: 'horizontal'
  },
  render: args => {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    return <FormLayout direction={args.direction}>
        <TextInput label="First Name" value={first} onChange={setFirst} />
        <TextInput label="Last Name" value={last} onChange={setLast} />
      </FormLayout>;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Horizontal Labels (Settings)',
  args: {
    direction: 'horizontal-labels'
  },
  render: args => {
    const [displayName, setDisplayName] = useState('Jane Doe');
    const [email, setEmail] = useState('jane@example.com');
    const [timezone, setTimezone] = useState('America/Los_Angeles');
    return <FormLayout direction={args.direction}>
        <TextInput label="Display Name" value={displayName} onChange={setDisplayName} />
        <TextInput label="Email" value={email} onChange={setEmail} />
        <Selector label="Timezone" value={timezone} onChange={v => setTimezone(v as string)} options={[{
        label: 'Pacific Time',
        value: 'America/Los_Angeles'
      }, {
        label: 'Eastern Time',
        value: 'America/New_York'
      }, {
        label: 'UTC',
        value: 'UTC'
      }]} />
      </FormLayout>;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Mixed Controls',
  render: () => {
    const [name, setName] = useState('');
    const [role, setRole] = useState('viewer');
    return <FormLayout>
        <TextInput label="Name" value={name} onChange={setName} />
        <Selector label="Role" value={role} onChange={v => setRole(v as string)} options={[{
        label: 'Viewer',
        value: 'viewer'
      }, {
        label: 'Editor',
        value: 'editor'
      }, {
        label: 'Admin',
        value: 'admin'
      }]} />
        <Field label="Notifications" inputID="notif-group">
          <div {...stylex.props(checkboxStyles.group)} id="notif-group">
            <label {...stylex.props(checkboxStyles.label)}>
              <input type="checkbox" defaultChecked /> Email
            </label>
            <label {...stylex.props(checkboxStyles.label)}>
              <input type="checkbox" /> SMS
            </label>
            <label {...stylex.props(checkboxStyles.label)}>
              <input type="checkbox" defaultChecked /> Push
            </label>
          </div>
        </Field>
      </FormLayout>;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Nested Layouts',
  render: () => {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    return <FormLayout>
        <FormLayout direction="horizontal">
          <TextInput label="First Name" value={first} onChange={setFirst} />
          <TextInput label="Last Name" value={last} onChange={setLast} />
        </FormLayout>
        <TextInput label="Email" value={email} onChange={setEmail} />
        <FormLayout direction="horizontal">
          <TextInput label="City" value={city} onChange={setCity} />
          <TextInput label="State" value={state} onChange={setState} />
          <TextInput label="ZIP" value={zip} onChange={setZip} />
        </FormLayout>
      </FormLayout>;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'In a Dialog',
  render: () => {
    const [name, setName] = useState('Jane Doe');
    const [email, setEmail] = useState('jane@example.com');
    return <div {...stylex.props(dialogStyles.container)}>
        <div {...stylex.props(dialogStyles.header)}>
          <Text type="label">Edit Profile</Text>
        </div>
        <div {...stylex.props(dialogStyles.body)}>
          <form id="edit-profile" onSubmit={e => {
          e.preventDefault();
          alert(\`Saved: \${name}, \${email}\`);
        }}>
            <FormLayout>
              <TextInput label="Name" value={name} onChange={setName} />
              <TextInput label="Email" value={email} onChange={setEmail} />
            </FormLayout>
          </form>
        </div>
        <div {...stylex.props(dialogStyles.footer)}>
          <button {...stylex.props(dialogStyles.button, dialogStyles.secondary)} type="button">
            Cancel
          </button>
          <button {...stylex.props(dialogStyles.button, dialogStyles.primary)} type="submit" form="edit-profile">
            Save
          </button>
        </div>
      </div>;
  }
}`,...M.parameters?.docs?.source}}},N=[`Vertical`,`Horizontal`,`HorizontalLabels`,`MixedControls`,`Nested`,`InDialog`]})))()}P();export{O as Horizontal,k as HorizontalLabels,M as InDialog,A as MixedControls,j as Nested,D as Vertical,N as __namedExportsOrder,E as default};