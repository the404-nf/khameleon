import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{_ as r,g as i,h as a,n as o,t as s}from"./Table-DjR1cHWT.js";import{n as c,t as l}from"./PowerSearch-DZcds93w.js";import{n as u,t as d}from"./usePowerSearchConfig-C2cdzP_S.js";var f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{f=t(),c(),d(),o(),a(),p=n(),m=[{value:`fiction`,label:`Fiction`},{value:`non-fiction`,label:`Non-Fiction`},{value:`sci-fi`,label:`Science Fiction`},{value:`fantasy`,label:`Fantasy`},{value:`mystery`,label:`Mystery`},{value:`romance`,label:`Romance`},{value:`biography`,label:`Biography`},{value:`history`,label:`History`}],h=[{key:`title`,type:`string`,label:`Title`},{key:`author`,type:`string`,label:`Author`},{key:`year`,type:`number`,label:`Publication Year`},{key:`genre`,type:`enum`,label:`Genre`,enumValues:m}],g=[{id:`1`,title:`Dune`,author:`Frank Herbert`,year:1965,genre:`sci-fi`},{id:`2`,title:`Pride and Prejudice`,author:`Jane Austen`,year:1813,genre:`romance`},{id:`3`,title:`The Great Gatsby`,author:`F. Scott Fitzgerald`,year:1925,genre:`fiction`},{id:`4`,title:`1984`,author:`George Orwell`,year:1949,genre:`sci-fi`},{id:`5`,title:`To Kill a Mockingbird`,author:`Harper Lee`,year:1960,genre:`fiction`},{id:`6`,title:`The Hobbit`,author:`J.R.R. Tolkien`,year:1937,genre:`fantasy`},{id:`7`,title:`Sapiens`,author:`Yuval Noah Harari`,year:2011,genre:`non-fiction`},{id:`8`,title:`The Name of the Wind`,author:`Patrick Rothfuss`,year:2007,genre:`fantasy`},{id:`9`,title:`Gone Girl`,author:`Gillian Flynn`,year:2012,genre:`mystery`},{id:`10`,title:`Steve Jobs`,author:`Walter Isaacson`,year:2011,genre:`biography`},{id:`11`,title:`A Brief History of Time`,author:`Stephen Hawking`,year:1988,genre:`non-fiction`},{id:`12`,title:`The Shining`,author:`Stephen King`,year:1977,genre:`mystery`},{id:`13`,title:`The Handmaid's Tale`,author:`Margaret Atwood`,year:1985,genre:`sci-fi`},{id:`14`,title:`Outlander`,author:`Diana Gabaldon`,year:1991,genre:`romance`},{id:`15`,title:`The Guns of August`,author:`Barbara Tuchman`,year:1962,genre:`history`}],_=[{key:`title`,header:`Title`,width:r(2)},{key:`author`,header:`Author`,width:r(2)},{key:`year`,header:`Year`,width:i(100)},{key:`genre`,header:`Genre`,width:i(140),renderCell:e=>m.find(t=>t.value===e.genre)?.label??e.genre}],v={title:`Core/PowerSearchWithTable`,tags:[`autodocs`],decorators:[e=>(0,p.jsx)(`div`,{style:{width:800},children:(0,p.jsx)(e,{})})]},y={render:()=>{let[e,t]=(0,f.useState)([]),{config:n,applyFilters:r}=u(h,`Books`),i=r(e,g);return(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,p.jsx)(l,{config:n,filters:e,onChange:e=>t([...e]),placeholder:`Filter books by title, author, year, genre...`,resultCount:i.length}),(0,p.jsx)(s,{data:i,columns:_,idKey:`id`,hasHover:!0})]})}},b={render:()=>{let[e,t]=(0,f.useState)([{field:`genre`,operator:`is`,value:{type:`enum`,value:`sci-fi`}}]),{config:n,applyFilters:r}=u(h,`Books`),i=r(e,g);return(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,p.jsx)(l,{config:n,filters:e,onChange:e=>t([...e]),placeholder:`Filter books...`,resultCount:i.length}),(0,p.jsx)(s,{data:i,columns:_,idKey:`id`,hasHover:!0,isStriped:!0})]})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [filters, setFilters] = useState<PowerSearchFilter[]>([]);
    const {
      config,
      applyFilters
    } = usePowerSearchConfig(fieldDefs, 'Books');
    const filteredBooks = applyFilters(filters, books);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <PowerSearch config={config} filters={filters} onChange={newFilters => setFilters([...newFilters])} placeholder="Filter books by title, author, year, genre..." resultCount={filteredBooks.length} />
        <Table data={filteredBooks} columns={columns} idKey="id" hasHover />
      </div>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [filters, setFilters] = useState<PowerSearchFilter[]>([{
      field: 'genre',
      operator: 'is',
      value: {
        type: 'enum',
        value: 'sci-fi'
      }
    }]);
    const {
      config,
      applyFilters
    } = usePowerSearchConfig(fieldDefs, 'Books');
    const filteredBooks = applyFilters(filters, books);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <PowerSearch config={config} filters={filters} onChange={newFilters => setFilters([...newFilters])} placeholder="Filter books..." resultCount={filteredBooks.length} />
        <Table data={filteredBooks} columns={columns} idKey="id" hasHover isStriped />
      </div>;
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`WithPresetFilters`]})))()}S();export{y as Default,b as WithPresetFilters,x as __namedExportsOrder,v as default};