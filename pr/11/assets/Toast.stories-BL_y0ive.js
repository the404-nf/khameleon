import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{a as n,r}from"./naming-DxB_K8wP.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,t as o}from"./Button-CZDOH4n-.js";import{n as s,t as c}from"./Card-CEKem3UW.js";import{n as l,t as u}from"./Dialog-C__rGuc9.js";import{n as d,t as f}from"./Stack-C-n3letD.js";import{n as p,t as m}from"./Link-CVMlzehi.js";import{t as h}from"./client-C6Kr3GxT.js";import{c as g,d as _,l as v,u as y}from"./iframe-Bh_Ozr-u.js";function b(e){let t=()=>{let t=null;for(let n of A){let r=document.documentElement.getAttribute(n);r==null?e.removeAttribute(n):(e.setAttribute(n,r),n===`data-theme`&&(t=r))}t===`light`||t===`dark`?e.style.colorScheme=t:e.style.removeProperty(`color-scheme`)};t(),new MutationObserver(t).observe(document.documentElement,{attributes:!0,attributeFilter:[...A]})}function x(){if(D)return D;if(typeof document>`u`)throw Error(`useToast: Cannot create fallback viewport during SSR. Wrap your app with <LayerProvider> or <AppShell>.`);k||(k=!0,console.warn(`useToast: No LayerProvider found. Using fallback viewport. Wrap your app with <LayerProvider> or <AppShell> for full control.`));let e=document.createElement(`div`);e.setAttribute(`data-khameleon-toast-fallback`,``),document.body.appendChild(e),b(e);let t,n=new Promise(e=>{t=e});O=(0,T.createRoot)(e),O.render((0,E.jsx)(g,{children:(0,E.jsx)(()=>{let e=(0,w.use)(y),n=(0,w.useRef)(!1);return(0,w.useEffect)(()=>{e&&!n.current&&(n.current=!0,D=e,t?.(e))},[e]),null},{})}));let r=[],i={addToast:e=>{D&&D!==i?D.addToast(e):(r.push(e),n.then(e=>{for(let t of r)e.addToast(t);r.length=0}))},removeToast:(e,t)=>{D&&D!==i&&D.removeToast(e,t)},findByUniqueID:e=>{if(D&&D!==i)return D.findByUniqueID(e)}};return D=i,i}function S(){return`khameleon-toast-${++j}`}function C(){let e=(0,w.use)(y);return(0,w.useCallback)(t=>{let n=e??x(),r=S(),i={id:r,options:t,createdAt:Date.now()};return n.addToast(i),()=>n.removeToast(r,`manual`)},[e])}var w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{w=t(),T=h(),n(),_(),v(),E=i(),D=null,O=null,k=!1,A=[`data-theme`,r(`theme`)],j=0})))()}function N({onClose:e}){let t=C();return(0,F.jsxs)(f,{gap:3,children:[(0,F.jsx)(`p`,{children:`This dialog has its own toast viewport. Toasts fired here render inside the dialog, above its overlay.`}),(0,F.jsxs)(f,{direction:`horizontal`,gap:2,wrap:`wrap`,children:[(0,F.jsx)(o,{label:`Close`,variant:`secondary`,onClick:e}),(0,F.jsx)(o,{label:`Show toast`,onClick:()=>{t({body:`Toast from inside the dialog!`})}}),(0,F.jsx)(o,{label:`Error toast`,variant:`destructive`,onClick:()=>{t({body:`Something went wrong.`,type:`error`})}})]})]})}var P,F,I,L,R,z,B,V,H,U,W,G,K;function q(){return(q=e((()=>{P=t(),M(),v(),a(),p(),s(),d(),l(),F=i(),I={title:`Core/Toast`,tags:[`autodocs`],parameters:{docs:{description:{component:"Imperative toast notification system. Use `useToast()` to show transient feedback messages. Works with or without `LayerProvider`."}}}},L={render:function(){let e=C();return(0,F.jsx)(o,{label:`Show toast`,onClick:()=>e({body:`This is an info toast`})})}},R={render:function(){let e=C();return(0,F.jsx)(f,{direction:`horizontal`,gap:2,children:[`info`,`error`].map(t=>(0,F.jsx)(o,{label:t,variant:t===`error`?`destructive`:`secondary`,onClick:()=>e({body:`This is a ${t} notification.`,type:t})},t))})},parameters:{docs:{description:{story:`Two toast types: info (default) and error. Error toasts persist until dismissed.`}}}},z={render:function(){let e=C();return(0,F.jsxs)(f,{direction:`horizontal`,gap:2,children:[(0,F.jsx)(o,{label:`With button`,onClick:()=>e({body:`Item deleted`,isAutoHide:!1,endContent:(0,F.jsx)(o,{label:`Undo`,variant:`secondary`,size:`sm`,onClick:()=>console.log(`Undo!`)})})}),(0,F.jsx)(o,{label:`With link`,variant:`secondary`,onClick:()=>e({body:`Your report is ready.`,isAutoHide:!1,endContent:(0,F.jsx)(m,{href:`#`,hasUnderline:!0,children:`View report`})})})]})},parameters:{docs:{description:{story:"Use `endContent` for trailing actions: buttons, links, or any content."}}}},B={render:function(){let e=C();return(0,F.jsx)(o,{label:`Trigger error`,variant:`destructive`,onClick:()=>e({body:`Check your network connection and try again.`,type:`error`})})},parameters:{docs:{description:{story:"Error toasts default to `isAutoHide: false`; they persist until the user dismisses them."}}}},V={render:function(){let e=C(),t=(0,P.useRef)(null);return(0,F.jsxs)(f,{direction:`horizontal`,gap:2,children:[(0,F.jsx)(o,{label:`Show persistent toast`,onClick:()=>{t.current=e({body:`Uploading...`,isAutoHide:!1})}}),(0,F.jsx)(o,{label:`Dismiss`,variant:`secondary`,onClick:()=>{t.current?.(),t.current=null}})]})},parameters:{docs:{description:{story:"`useToast()` returns a dismiss function. Call it to remove the toast programmatically."}}}},H={render:function(){let e=C();return(0,F.jsxs)(f,{direction:`horizontal`,gap:2,children:[(0,F.jsx)(o,{label:`Offline (ignore)`,onClick:()=>e({body:`You are offline`,uniqueID:`offline`,collisionBehavior:`ignore`,isAutoHide:!1})}),(0,F.jsx)(o,{label:`Progress (overwrite)`,variant:`secondary`,onClick:()=>e({body:`Uploading... ${Math.floor(Math.random()*100)}%`,uniqueID:`upload-progress`,collisionBehavior:`overwrite`,isAutoHide:!1})})]})},parameters:{docs:{description:{story:"`uniqueID` prevents duplicate toasts. `ignore` keeps the existing; `overwrite` replaces it."}}}},U={render:function(){let e=C(),t=(0,P.useRef)(0);return(0,F.jsx)(o,{label:`Add toast`,onClick:()=>{t.current++;let n=[`info`,`error`],r=n[t.current%n.length];e({body:`Toast #${t.current} — ${r} notification.`,type:r})}})},parameters:{docs:{description:{story:`Multiple toasts stack vertically. Default max visible is 5.`}}}},W={render:function(){let e=C();return(0,F.jsx)(c,{padding:4,children:(0,F.jsxs)(f,{gap:2,children:[(0,F.jsx)(`p`,{style:{margin:0,fontSize:14},children:`No LayerProvider: the hook creates a fallback viewport on document.body automatically.`}),(0,F.jsx)(o,{label:`Show toast`,onClick:()=>e({body:`Works without a provider!`})})]})})},parameters:{docs:{description:{story:"`useToast()` works without a provider. It lazily mounts a fallback viewport on first call."}}}},G={render:function(){let[e,t]=(0,P.useState)(!1);return(0,F.jsxs)(f,{gap:2,children:[(0,F.jsx)(o,{label:`Open dialog`,onClick:()=>t(!0)}),(0,F.jsx)(u,{isOpen:e,onOpenChange:()=>t(!1),children:(0,F.jsx)(g,{isTopLayer:!1,children:(0,F.jsx)(N,{onClose:()=>t(!1)})})})]})},parameters:{docs:{description:{story:"Dialog with its own `ToastViewport`: toasts render inside the dialog's top layer context and appear above the dialog overlay."}}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: function DefaultStory() {
    const toast = useToast();
    return <Button label="Show toast" onClick={() => toast({
      body: 'This is an info toast'
    })} />;
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: function TypesStory() {
    const toast = useToast();
    const types: ToastType[] = ['info', 'error'];
    return <Stack direction="horizontal" gap={2}>
        {types.map(type => <Button key={type} label={type} variant={type === 'error' ? 'destructive' : 'secondary'} onClick={() => toast({
        body: \`This is a \${type} notification.\`,
        type
      })} />)}
      </Stack>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Two toast types: info (default) and error. Error toasts persist until dismissed.'
      }
    }
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: function WithActionStory() {
    const toast = useToast();
    return <Stack direction="horizontal" gap={2}>
        <Button label="With button" onClick={() => toast({
        body: 'Item deleted',
        isAutoHide: false,
        endContent: <Button label="Undo" variant="secondary" size="sm" onClick={() => console.log('Undo!')} />
      })} />
        <Button label="With link" variant="secondary" onClick={() => toast({
        body: 'Your report is ready.',
        isAutoHide: false,
        endContent: <Link href="#" hasUnderline>
                  View report
                </Link>
      })} />
      </Stack>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Use \`endContent\` for trailing actions: buttons, links, or any content.'
      }
    }
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: function ErrorPersistsStory() {
    const toast = useToast();
    return <Button label="Trigger error" variant="destructive" onClick={() => toast({
      body: 'Check your network connection and try again.',
      type: 'error'
    })} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Error toasts default to \`isAutoHide: false\`; they persist until the user dismisses them.'
      }
    }
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: function ProgrammaticDismissStory() {
    const toast = useToast();
    const dismissRef = useRef<(() => void) | null>(null);
    return <Stack direction="horizontal" gap={2}>
        <Button label="Show persistent toast" onClick={() => {
        dismissRef.current = toast({
          body: 'Uploading...',
          isAutoHide: false
        });
      }} />
        <Button label="Dismiss" variant="secondary" onClick={() => {
        dismissRef.current?.();
        dismissRef.current = null;
      }} />
      </Stack>;
  },
  parameters: {
    docs: {
      description: {
        story: '\`useToast()\` returns a dismiss function. Call it to remove the toast programmatically.'
      }
    }
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: function DeduplicationStory() {
    const toast = useToast();
    return <Stack direction="horizontal" gap={2}>
        <Button label="Offline (ignore)" onClick={() => toast({
        body: 'You are offline',
        uniqueID: 'offline',
        collisionBehavior: 'ignore',
        isAutoHide: false
      })} />
        <Button label="Progress (overwrite)" variant="secondary" onClick={() => toast({
        body: \`Uploading... \${Math.floor(Math.random() * 100)}%\`,
        uniqueID: 'upload-progress',
        collisionBehavior: 'overwrite',
        isAutoHide: false
      })} />
      </Stack>;
  },
  parameters: {
    docs: {
      description: {
        story: '\`uniqueID\` prevents duplicate toasts. \`ignore\` keeps the existing; \`overwrite\` replaces it.'
      }
    }
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: function StackingStory() {
    const toast = useToast();
    const countRef = useRef(0);
    return <Button label="Add toast" onClick={() => {
      countRef.current++;
      const types: ToastType[] = ['info', 'error'];
      const type = types[countRef.current % types.length];
      toast({
        body: \`Toast #\${countRef.current} — \${type} notification.\`,
        type
      });
    }} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple toasts stack vertically. Default max visible is 5.'
      }
    }
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: function NoProviderStory() {
    const toast = useToast();
    return <Card padding={4}>
        <Stack gap={2}>
          <p style={{
          margin: 0,
          fontSize: 14
        }}>
            No LayerProvider: the hook creates a fallback viewport on
            document.body automatically.
          </p>
          <Button label="Show toast" onClick={() => toast({
          body: 'Works without a provider!'
        })} />
        </Stack>
      </Card>;
  },
  parameters: {
    docs: {
      description: {
        story: '\`useToast()\` works without a provider. It lazily mounts a fallback viewport on first call.'
      }
    }
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: function ToastOverDialogStory() {
    const [isOpen, setIsOpen] = useState(false);
    return <Stack gap={2}>
        <Button label="Open dialog" onClick={() => setIsOpen(true)} />
        <Dialog isOpen={isOpen} onOpenChange={() => setIsOpen(false)}>
          <ToastViewport isTopLayer={false}>
            <DialogToastContent onClose={() => setIsOpen(false)} />
          </ToastViewport>
        </Dialog>
      </Stack>;
  },
  parameters: {
    docs: {
      description: {
        story: "Dialog with its own \`ToastViewport\`: toasts render inside the dialog's top layer context and appear above the dialog overlay."
      }
    }
  }
}`,...G.parameters?.docs?.source}}},K=[`Default`,`Types`,`WithAction`,`ErrorPersists`,`ProgrammaticDismiss`,`Deduplication`,`Stacking`,`NoProvider`,`ToastOverDialog`]})))()}q();export{H as Deduplication,L as Default,B as ErrorPersists,W as NoProvider,V as ProgrammaticDismiss,U as Stacking,G as ToastOverDialog,R as Types,z as WithAction,K as __namedExportsOrder,I as default};