import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./stylex-Dft6gtPK.js";import{n as i}from"./mergeProps-JRyAvMxc.js";import{n as a}from"./mergeRefs-CPqjs56a.js";import{n as o,t as s}from"./themeProps-DRQoVAIO.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./Icon-D9gPeCUm.js";import{n as ee,t as d}from"./useTranslator-C3b4YzkD.js";import{n as te,t as f}from"./useIsomorphicLayoutEffect-vnms8l8s.js";import{n as p,t as m}from"./IconButton-CUHE8Itk.js";import{n as ne,t as h}from"./useAnnounce-3UKvRH6i.js";import{n as re,t as g}from"./useScrollLock-DlXUsXsm.js";function _({isOpen:e,onOpenChange:t,media:r,index:s,defaultIndex:c=0,onIndexChange:l,hasZoom:d=!1,hasAutoPlay:f=!1,xstyle:p,className:h,style:g,ref:_,onClick:S,onKeyDown:C,...w}){let T=ee(),E=(0,v.useRef)(null),D=(0,v.useRef)(null),O=(0,v.useRef)(null),k=s!==void 0,[A,j]=(0,v.useState)(c),M=k?s:A,N=(0,v.useCallback)(e=>{k||j(e),l?.(e)},[k,l,j]),[P,F]=(0,v.useState)(1),[I,L]=(0,v.useState)({x:0,y:0}),[R,z]=(0,v.useState)(!1),B=(0,v.useRef)({x:0,y:0,panX:0,panY:0}),V=(0,v.useMemo)(()=>Array.isArray(r)?r:[r],[r]),H=V.length>1,U=V.length>0?V[Math.min(M,V.length-1)]:null,W=(U?.type??`image`)===`video`,G=H&&M>0,K=H&&M<V.length-1;re(e),(0,v.useEffect)(()=>{F(1),L({x:0,y:0})},[M,U?.src]);let q=ne(),J=(0,v.useRef)(M),Y=(0,v.useRef)(e);(0,v.useEffect)(()=>{let t=J.current!==M,n=Y.current;if(J.current=M,Y.current=e,!t||!e||!n)return;let r=V[Math.min(M,V.length-1)],i=`${M+1} of ${V.length}`;q(r?.alt?`${r.alt}, ${i}`:`Image ${i}`)},[M,e,q,V]),te(()=>{let t=E.current;t&&(e&&!t.open?(O.current=document.activeElement,t.showModal()):!e&&t.open&&(t.close(),O.current instanceof HTMLElement&&O.current.focus()))},[e]);let X=(0,v.useCallback)(()=>{t(!1)},[t]),ie=(0,v.useCallback)(e=>{e.preventDefault(),X()},[X]),ae=(0,v.useCallback)(e=>{e.target===e.currentTarget&&X()},[X]),Z=(0,v.useCallback)(()=>{G&&N(M-1)},[G,M,N]),Q=(0,v.useCallback)(()=>{K&&N(M+1)},[K,M,N]),oe=(0,v.useCallback)(e=>{e.key===`ArrowLeft`?(e.preventDefault(),Z()):e.key===`ArrowRight`&&(e.preventDefault(),Q())},[Z,Q]),se=(0,v.useCallback)(()=>{d&&(P===1?(F(2),L({x:0,y:0})):(F(1),L({x:0,y:0})))},[d,P]),ce=(0,v.useCallback)(e=>{P<=1||!d||(z(!0),B.current={x:e.clientX,y:e.clientY,panX:I.x,panY:I.y})},[P,d,I]);(0,v.useEffect)(()=>{if(!R)return;let e=e=>{let t=e.clientX-B.current.x,n=e.clientY-B.current.y;L({x:B.current.panX+t,y:B.current.panY+n})},t=()=>{z(!1)};return window.addEventListener(`pointermove`,e),window.addEventListener(`pointerup`,t),()=>{window.removeEventListener(`pointermove`,e),window.removeEventListener(`pointerup`,t)}},[R]);let $=P>1,le=P===1?null:`scale(${P}) translate(${I.x/P}px, ${I.y/P}px)`;return U?(0,y.jsx)(`dialog`,{ref:a(_,E),onCancel:ie,onClick:e=>{ae(e),S?.(e)},onKeyDown:e=>{oe(e),C?.(e)},"aria-label":U.alt||T(`@khameleon.lightbox.mediaViewer`),...i(o(`lightbox`),n(b.dialog,p),h,g),...w,children:(0,y.jsxs)(`div`,{className:`khameleon78zum5 khameleondt5ytf khameleon6s0dn4 khameleonl56j7k khameleonh8yej3 khameleon5yr21d khameleon1n2onr6`,children:[(0,y.jsx)(`div`,{className:`khameleon10l6tqk khameleonyx6v2t khameleonmz3bnw khameleon1vjfegm`,children:(0,y.jsx)(m,{icon:(0,y.jsx)(u,{icon:`close`,size:`sm`,color:`inherit`}),label:T(`@khameleon.lightbox.close`),variant:`ghost`,onClick:X,xstyle:b.controlButton})}),H&&(0,y.jsx)(`div`,{className:`khameleon10l6tqk khameleonwa60dl khameleon1cb1t30 khameleon1vjfegm khameleonnp31yv`,children:(0,y.jsx)(m,{icon:(0,y.jsx)(u,{icon:`chevronLeft`,size:`sm`,color:`inherit`}),label:T(`@khameleon.lightbox.previous`),variant:`ghost`,isDisabled:!G,onClick:Z,xstyle:b.controlButton})}),(0,y.jsxs)(`div`,{className:`khameleon78zum5 khameleondt5ytf khameleon6s0dn4 khameleon193iq5w khameleonmz0i5r khameleonb3r6kr`,children:[(0,y.jsx)(`div`,{ref:D,...{0:{className:`khameleon78zum5 khameleon6s0dn4 khameleonl56j7k khameleonb3r6kr khameleont0e3qv khameleon87ps6o khameleon2lwn1j`},4:{className:`khameleon78zum5 khameleon6s0dn4 khameleonl56j7k khameleonb3r6kr khameleon87ps6o khameleon2lwn1j khameleon1huxd7x khameleon2dt3px`},2:{className:`khameleon78zum5 khameleon6s0dn4 khameleonl56j7k khameleonb3r6kr khameleon87ps6o khameleon2lwn1j khameleon1jm3nie`},6:{className:`khameleon78zum5 khameleon6s0dn4 khameleonl56j7k khameleonb3r6kr khameleon87ps6o khameleon2lwn1j khameleon1jm3nie`},1:{className:`khameleon78zum5 khameleon6s0dn4 khameleonl56j7k khameleonb3r6kr khameleon87ps6o khameleon2lwn1j khameleoni9pz9s`},5:{className:`khameleon78zum5 khameleon6s0dn4 khameleonl56j7k khameleonb3r6kr khameleon87ps6o khameleon2lwn1j khameleoni9pz9s`},3:{className:`khameleon78zum5 khameleon6s0dn4 khameleonl56j7k khameleonb3r6kr khameleon87ps6o khameleon2lwn1j khameleoni9pz9s`},7:{className:`khameleon78zum5 khameleon6s0dn4 khameleonl56j7k khameleonb3r6kr khameleon87ps6o khameleon2lwn1j khameleoni9pz9s`}}[!!(!W&&d&&!$)<<2|!!(!W&&$)<<1|!!(!W&&R)<<0],onDoubleClick:W?void 0:se,onPointerDown:W?void 0:ce,children:W?(0,y.jsx)(`video`,{src:U.src,"aria-label":U.alt,controls:!0,autoPlay:f,className:`khameleon193iq5w khameleonmz0i5r khameleon19kjcj4 khameleon1a2a7pz`}):(0,y.jsx)(`img`,{src:U.src,alt:U.alt,draggable:!1,...n(b.image,R&&b.imageDragging,le!=null&&x.imageTransform(le))})}),U.caption&&(0,y.jsx)(`div`,{className:`khameleon9e3rv5 khameleon18juvz8 khameleonf74fhv khameleon2b8uid khameleon1xye8es khameleon18d9i69 khameleonrrkdod khameleonrlsmeg khameleon2lah0s`,children:U.caption})]}),H&&(0,y.jsx)(`div`,{className:`khameleon10l6tqk khameleonwa60dl khameleon1cb1t30 khameleon1vjfegm khameleonmz3bnw`,children:(0,y.jsx)(m,{icon:(0,y.jsx)(u,{icon:`chevronRight`,size:`sm`,color:`inherit`}),label:T(`@khameleon.lightbox.next`),variant:`ghost`,isDisabled:!K,onClick:Q,xstyle:b.controlButton})}),H&&V.length>1&&(0,y.jsxs)(`div`,{className:`khameleon10l6tqk khameleonyx6v2t khameleonnp31yv khameleon9e3rv5 khameleonjm74w1 khameleonw6l6zx khameleon1vjfegm`,children:[M+1,` / `,V.length]})]})}):null}var v,y,b,x;function S(){return(S=e((()=>{v=t(),r(),l(),p(),h(),g(),f(),s(),d(),y=c(),b={dialog:{kVAEAm:`khameleonixxii4`,kpwlN0:`khameleon10a8y8t`,kzqmXN:`khameleonn9wirt`,kZKoxP:`khameleon1dr59a3`,ks0D6T:`khameleon1x1rfll`,kskxy:`khameleon7ab17h`,kogj98:`khameleon1ghz6dp`,kmVPX3:`khameleon1717udv`,kQgIW9:`khameleon1gs6z28`,kWkggS:`khameleonjbqb8w`,kVQacm:`khameleonb3r6kr`,kI3sdo:`khameleon1a2a7pz`,kGyWv1:`khameleonnixb3f`,kba3nw:`khameleon1abwkk1`,$$css:!0},image:{ks0D6T:`khameleon193iq5w`,kskxy:`khameleonmz0i5r`,kVIFPx:`khameleon19kjcj4`,kfzvcC:`khameleon47corl`,k1ekBW:`khameleon11xpdln`,kIyJzY:`khameleon13dflua khameleon12w9bfk`,kAMwcw:`khameleon9lcvmn`,$$css:!0},imageDragging:{k1ekBW:`khameleon13b0p5u`,$$css:!0},controlButton:{kMwMTN:`khameleon9e3rv5`,$$css:!0}},x={imageTransform:e=>[{k3aq6I:e==null?e:`khameleonsqj5wx`,$$css:!0},{"--x-transform":e??void 0}]},_.displayName=`Lightbox`,_.__docgenInfo={description:`A fullscreen overlay for viewing images at full resolution.

Supports single image and gallery modes. In gallery mode, provides
prev/next navigation via buttons and arrow keys. Optionally supports
zoom (double-click to toggle 2x) and pan (drag when zoomed).

Uses the native \`<dialog>\` element with \`showModal()\` for focus
trapping and top-layer placement. Dismiss via Escape, close button,
or backdrop click.

@example
\`\`\`
<Lightbox
  isOpen={isOpen}
  onOpenChange={setIsOpen}
  media={{src: "/photo.jpg", alt: "A photo"}}
/>
<Lightbox
  isOpen={isOpen}
  onOpenChange={setIsOpen}
  media={photos}
/>
<Lightbox
  isOpen={isOpen}
  onOpenChange={setIsOpen}
  media={photos}
  index={currentIndex}
  onIndexChange={setCurrentIndex}
/>
\`\`\``,methods:[],displayName:`Lightbox`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDialogElement>`,elements:[{name:`HTMLDialogElement`}]},description:`Ref forwarded to the root dialog element`},isOpen:{required:!0,tsType:{name:`boolean`},description:`Whether the lightbox is open.`},onOpenChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(isOpen: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`isOpen`}],return:{name:`void`}}},description:"Callback when the lightbox open state changes.\nCalled with `false` on Escape, backdrop click, or close button."},media:{required:!0,tsType:{name:`union`,raw:`LightboxMedia | LightboxMedia[]`,elements:[{name:`LightboxMedia`},{name:`Array`,elements:[{name:`LightboxMedia`}],raw:`LightboxMedia[]`}]},description:`Media to display. Pass a single object for one item, or an array
for gallery mode with prev/next navigation.`},index:{required:!1,tsType:{name:`number`},description:"Current index in gallery mode (when `media` is an array).\nWhen provided, puts the component in controlled mode."},defaultIndex:{required:!1,tsType:{name:`number`},description:`Initial index in gallery mode for uncontrolled usage.
@default 0`,defaultValue:{value:`0`,computed:!1}},onIndexChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(index: number) => void`,signature:{arguments:[{type:{name:`number`},name:`index`}],return:{name:`void`}}},description:`Callback when the gallery index changes via prev/next navigation.`},hasZoom:{required:!1,tsType:{name:`boolean`},description:`Enable zoom on double-click (images only).
When zoomed, drag to pan.
@default false`,defaultValue:{value:`false`,computed:!1}},hasAutoPlay:{required:!1,tsType:{name:`boolean`},description:`Whether video should autoplay when the lightbox opens.
@default false`,defaultValue:{value:`false`,computed:!1}}},composes:[`Omit`]}})))()}function C(e){let{media:t,...n}=e,[r,i]=(0,w.useState)(!1),[a,o]=(0,w.useState)(0),s=(0,w.useCallback)((e=0)=>{o(e),i(!0)},[]),c=(0,w.useCallback)(()=>{i(!1)},[]),l=(0,w.useMemo)(()=>({role:`button`,tabIndex:0,"aria-haspopup":`dialog`,onClick:()=>s(),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),s())}}),[s]),u=(0,w.useCallback)(e=>({role:`button`,tabIndex:0,"aria-haspopup":`dialog`,onClick:()=>s(e),onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),s(e))}}),[s]);return{open:s,close:c,isOpen:r,index:a,element:(0,w.useMemo)(()=>(0,T.jsx)(_,{isOpen:r,onOpenChange:e=>{e||i(!1)},media:t,index:a,onIndexChange:o,...n}),[r,t,a,n]),triggerProps:l,getTriggerProps:u}}var w,T;function E(){return(E=e((()=>{w=t(),S(),T=c()})))()}var D,O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{D=t(),S(),E(),O=c(),k={title:`Core/Lightbox`,component:_,tags:[`autodocs`]},A=`https://picsum.photos/id/10/1200/800`,j=[{src:`https://picsum.photos/id/10/1200/800`,alt:`Forest path`,caption:`A winding path through the forest`},{src:`https://picsum.photos/id/15/1200/800`,alt:`Mountain lake`},{src:`https://picsum.photos/id/20/1200/800`,alt:`Beach sunset`,caption:`Golden hour at the beach`},{src:`https://picsum.photos/id/25/1200/800`,alt:`City skyline`}],M={render:()=>{let[e,t]=(0,D.useState)(!1);return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`button`,{onClick:()=>t(!0),children:`Open lightbox`}),(0,O.jsx)(_,{isOpen:e,onOpenChange:t,media:{src:A,alt:`Forest path`,caption:`A winding path through the forest`}})]})}},N={render:()=>{let[e,t]=(0,D.useState)(!1),[n,r]=(0,D.useState)(0);return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`div`,{style:{display:`flex`,gap:`8px`},children:j.map((e,n)=>(0,O.jsx)(`img`,{src:e.src,alt:e.alt,style:{width:120,height:80,objectFit:`cover`,cursor:`pointer`,borderRadius:4},onClick:()=>{r(n),t(!0)}},e.src))}),(0,O.jsx)(_,{isOpen:e,onOpenChange:t,media:j,index:n,onIndexChange:r})]})}},P={render:()=>{let[e,t]=(0,D.useState)(!1);return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`button`,{onClick:()=>t(!0),children:`Open with zoom`}),(0,O.jsx)(_,{isOpen:e,onOpenChange:t,media:{src:A,alt:`Forest path`},hasZoom:!0})]})}},F={render:()=>{let[e,t]=(0,D.useState)(!1);return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`button`,{onClick:()=>t(!0),children:`Open with caption`}),(0,O.jsx)(_,{isOpen:e,onOpenChange:t,media:{src:A,alt:`Forest path`,caption:`A beautiful forest path winding through tall trees on a misty morning`}})]})}},I={render:()=>{let[e,t]=(0,D.useState)(!1);return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`button`,{onClick:()=>t(!0),children:`Open video`}),(0,O.jsx)(_,{isOpen:e,onOpenChange:t,media:{src:`https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm`,alt:`Flower blooming`,type:`video`,caption:`A flower blooming in time-lapse`}})]})}},L={render:()=>{let e=C({media:j});return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`div`,{style:{display:`flex`,gap:`8px`},children:j.map((t,n)=>(0,O.jsx)(`img`,{src:t.src,alt:t.alt,style:{width:120,height:80,objectFit:`cover`,cursor:`pointer`,borderRadius:4},...e.getTriggerProps(n)},t.src))}),e.element]})}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <button onClick={() => setIsOpen(true)}>Open lightbox</button>
        <Lightbox isOpen={isOpen} onOpenChange={setIsOpen} media={{
        src: SAMPLE_IMAGE,
        alt: 'Forest path',
        caption: 'A winding path through the forest'
      }} />
      </>;
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [index, setIndex] = useState(0);
    return <>
        <div style={{
        display: 'flex',
        gap: '8px'
      }}>
          {GALLERY_MEDIA.map((item, i) => <img key={item.src} src={item.src} alt={item.alt} style={{
          width: 120,
          height: 80,
          objectFit: 'cover',
          cursor: 'pointer',
          borderRadius: 4
        }} onClick={() => {
          setIndex(i);
          setIsOpen(true);
        }} />)}
        </div>
        <Lightbox isOpen={isOpen} onOpenChange={setIsOpen} media={GALLERY_MEDIA} index={index} onIndexChange={setIndex} />
      </>;
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <button onClick={() => setIsOpen(true)}>Open with zoom</button>
        <Lightbox isOpen={isOpen} onOpenChange={setIsOpen} media={{
        src: SAMPLE_IMAGE,
        alt: 'Forest path'
      }} hasZoom />
      </>;
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <button onClick={() => setIsOpen(true)}>Open with caption</button>
        <Lightbox isOpen={isOpen} onOpenChange={setIsOpen} media={{
        src: SAMPLE_IMAGE,
        alt: 'Forest path',
        caption: 'A beautiful forest path winding through tall trees on a misty morning'
      }} />
      </>;
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <button onClick={() => setIsOpen(true)}>Open video</button>
        <Lightbox isOpen={isOpen} onOpenChange={setIsOpen} media={{
        src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm',
        alt: 'Flower blooming',
        type: 'video',
        caption: 'A flower blooming in time-lapse'
      }} />
      </>;
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const lightbox = useLightbox({
      media: GALLERY_MEDIA
    });
    return <>
        <div style={{
        display: 'flex',
        gap: '8px'
      }}>
          {GALLERY_MEDIA.map((item, i) => <img key={item.src} src={item.src} alt={item.alt} style={{
          width: 120,
          height: 80,
          objectFit: 'cover',
          cursor: 'pointer',
          borderRadius: 4
        }} {...lightbox.getTriggerProps(i)} />)}
        </div>
        {lightbox.element}
      </>;
  }
}`,...L.parameters?.docs?.source}}},R=[`Default`,`Gallery`,`WithZoom`,`WithCaption`,`Video`,`WithHook`]})))()}z();export{M as Default,N as Gallery,I as Video,F as WithCaption,L as WithHook,P as WithZoom,R as __namedExportsOrder,k as default};