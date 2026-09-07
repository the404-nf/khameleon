import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./mergeProps-JRyAvMxc.js";import{n as r,t as i}from"./themeProps-DRQoVAIO.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";function o({ref:e,item:t,icon:i,description:a,isDisabled:o=!1}){return t.element?(0,s.jsx)(s.Fragment,{children:t.element}):(0,s.jsxs)(`div`,{ref:e,...n(r(`typeahead-item`),{0:{className:`khameleon78zum5 khameleon6s0dn4 khameleon1txdalj khameleon2lwn1j`},1:{className:`khameleon78zum5 khameleon6s0dn4 khameleon1txdalj khameleon2lwn1j khameleonbyyjgo`}}[!!o<<0]),children:[i,(0,s.jsxs)(`div`,{className:`khameleon78zum5 khameleondt5ytf khameleon98rzlu khameleoneuugli`,children:[(0,s.jsx)(`span`,{className:`khameleoncr08ib khameleon1kq96og khameleon1sodnla khameleon1tgivj0 khameleonb3r6kr khameleonlyipyv khameleonuxw1ft`,children:t.label}),a&&(0,s.jsx)(`span`,{className:`khameleon141an7d khameleon1ltkj2j khameleonv1l7n4 khameleonb3r6kr khameleonlyipyv khameleonuxw1ft`,children:a})]})]})}var s;function c(){return(c=e((()=>{t(),i(),s=a(),o.displayName=`TypeaheadItem`,o.__docgenInfo={description:`Default item component for typeahead dropdown results.

Renders a label with optional icon and description.
Exported for use in custom \`renderItem\` implementations.

@example
\`\`\`
<Typeahead searchSource={source} value={v} onChange={setV} label="Search" />
<Typeahead
  searchSource={source}
  value={v}
  onChange={setV}
  label="Search"
  renderItem={(item) => (
    <TypeaheadItem
      item={item}
      icon={<Avatar src={item.auxiliaryData.avatar} size="sm" />}
      description={item.auxiliaryData.role}
    />
  )}
/>
\`\`\``,methods:[],displayName:`TypeaheadItem`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:``},item:{required:!0,tsType:{name:`T`},description:`The search result item.`},icon:{required:!1,tsType:{name:`ReactNode`},description:`Icon or avatar to display before the label.`},description:{required:!1,tsType:{name:`string`},description:`Description text displayed below the label.`},isDisabled:{required:!1,tsType:{name:`boolean`},description:`Whether this item is disabled.
@default false`,defaultValue:{value:`false`,computed:!1}},group:{required:!1,tsType:{name:`string`},description:`Group label for grouping items visually.`}},composes:[`Omit`]}})))()}export{c as n,o as t};