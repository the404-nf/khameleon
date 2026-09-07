import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Button-CZDOH4n-.js";import{n as a,t as o}from"./Icon-D9gPeCUm.js";import{n as s,r as c}from"./AppShellMobileContext-BSIiXD93.js";import{n as l,t as u}from"./useTranslator-Cp3lSSgn.js";function d({ref:e,children:t,label:n,"data-testid":r,xstyle:a,className:s,style:u}){let d=l(),p=n??d(`@khameleon.mobileNav.toggle.open`),{isMobile:m,isMobileNavEnabled:h,toggleMobileNav:g}=c();return!m||!h?null:(0,f.jsx)(i,{ref:e,variant:`ghost`,label:p,icon:t??(0,f.jsx)(o,{icon:`menu`,color:`inherit`}),onClick:g,"data-testid":r??`mobile-nav-toggle`,xstyle:a,className:s,style:u,isIconOnly:!0})}var f;function p(){return(p=e((()=>{t(),r(),a(),s(),u(),f=n(),d.displayName=`MobileNavToggle`,d.__docgenInfo={description:`Mobile nav toggle button. Reads from AppShell context to open/close
the mobile navigation drawer.

Renders nothing when above the mobile breakpoint — safe to include
unconditionally in your layout.

@example
\`\`\`
<div className="my-toolbar">
  <MobileNavToggle />
  <h1>Page Title</h1>
</div>
<MobileNavToggle label="Menu">
  <MyCustomMenuIcon />
</MobileNavToggle>
\`\`\``,methods:[],displayName:`MobileNavToggle`,props:{ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLButtonElement>`,elements:[{name:`HTMLButtonElement`}]},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:`Custom content to render instead of the default hamburger icon.`},label:{required:!1,tsType:{name:`string`},description:`Accessible label for the toggle button.
@default 'Open navigation'`},"data-testid":{required:!1,tsType:{name:`string`},description:`Test ID for the button element.`}},composes:[`Pick`]}})))()}function m(){return(0,h.use)(g)}var h,g;function _(){return(_=e((()=>{h=t(),g=(0,h.createContext)(`default`),g.displayName=`TopNavRenderContext`})))()}function v(){return(0,y.use)(b)}var y,b;function x(){return(x=e((()=>{y=t(),b=(0,y.createContext)(null),b.displayName=`TopNavMobileContentContext`})))()}export{_ as a,p as c,g as i,x as n,m as o,v as r,d as s,b as t};