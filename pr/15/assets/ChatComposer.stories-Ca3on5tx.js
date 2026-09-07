import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{i as n,n as r,r as i,t as a}from"./ChatComposer-BRvxF_Ar.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Text-543dlLxz.js";import{n as l,t as u}from"./Button-CZDOH4n-.js";import{n as d,t as f}from"./Badge-DN3od1Tr.js";import{n as p,t as m}from"./ChatComposerDrawer-xWAybhm7.js";import{n as h,t as g}from"./ListItem-DZvKo0Xs.js";import{n as _,t as v}from"./List-D9mBAsPV.js";import{n as y,t as b}from"./Token-DTXxWs70.js";import{n as x,t as S}from"./ProgressBar-B9CZS41f.js";var C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;function W(){return(W=e((()=>{r(),p(),n(),y(),l(),x(),_(),h(),s(),d(),C=t(),w=o(),T=(0,w.jsxs)(`svg`,{width:`1em`,height:`1em`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,w.jsx)(`circle`,{cx:`12`,cy:`12`,r:`4`}),(0,w.jsx)(`path`,{d:`M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8`})]}),E=(0,w.jsx)(`svg`,{width:`1em`,height:`1em`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,w.jsx)(`path`,{d:`m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48`})}),D=(0,w.jsxs)(`svg`,{width:`1em`,height:`1em`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,w.jsx)(`path`,{d:`M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z`}),(0,w.jsx)(`path`,{d:`M19 10v2a7 7 0 0 1-14 0v-2`}),(0,w.jsx)(`line`,{x1:`12`,x2:`12`,y1:`19`,y2:`22`})]}),O={title:`Core/ChatComposer`,component:a,tags:[`autodocs`],parameters:{layout:`centered`},decorators:[e=>(0,w.jsx)(`div`,{style:{width:600,padding:40},children:(0,w.jsx)(e,{})})]},k={render:()=>(0,w.jsx)(a,{onSubmit:e=>{console.log(`Submit:`,e),alert(`Sent: ${e}`)}})},A={render:()=>{let[e,t]=(0,C.useState)(!0);return(0,w.jsx)(a,{onSubmit:e=>{console.log(`Submit:`,e),t(!0)},isStopShown:e,onStop:()=>{console.log(`Stopped`),t(!1)}})}},j={render:()=>(0,w.jsx)(a,{onSubmit:e=>console.log(`Submit:`,e),footerActions:(0,w.jsx)(u,{label:`GPT-4`,variant:`ghost`,size:`md`}),sendActions:(0,w.jsx)(u,{label:`Microphone`,variant:`ghost`,size:`md`,icon:D,isIconOnly:!0})})},M={render:()=>(0,w.jsx)(a,{onSubmit:e=>console.log(`Submit:`,e),drawer:(0,w.jsxs)(m,{children:[(0,w.jsx)(b,{label:`report.pdf`,onRemove:()=>{}}),(0,w.jsx)(b,{label:`data.csv`,onRemove:()=>{}})]}),headerActions:(0,w.jsx)(u,{label:`Attach file`,variant:`ghost`,size:`sm`,icon:E,isIconOnly:!0}),headerContext:(0,w.jsx)(S,{label:`Context window`,value:3,isLabelHidden:!0})})},N={render:()=>{let[e,t]=(0,C.useState)(!1);return(0,w.jsx)(a,{onSubmit:e=>{console.log(`Submit:`,e),t(!0),setTimeout(()=>t(!1),3e3)},isStopShown:e,onStop:()=>t(!1),placeholder:`Ask me anything...`,drawer:(0,w.jsx)(m,{children:(0,w.jsx)(b,{label:`design-spec.pdf`,onRemove:()=>{}})}),headerActions:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(u,{label:`Mention`,variant:`ghost`,size:`sm`,icon:T,isIconOnly:!0}),(0,w.jsx)(u,{label:`Attach file`,variant:`ghost`,size:`sm`,icon:E,isIconOnly:!0})]}),headerContext:(0,w.jsx)(S,{label:`Context window`,value:3,isLabelHidden:!0}),footerActions:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(u,{label:`Auto`,variant:`ghost`,size:`md`}),(0,w.jsx)(u,{label:`Settings`,variant:`ghost`,size:`md`})]}),sendActions:(0,w.jsx)(u,{label:`Microphone`,variant:`ghost`,size:`md`,icon:D,isIconOnly:!0})})}},P={render:()=>(0,w.jsx)(a,{onSubmit:()=>{},isDisabled:!0,placeholder:`Composer is disabled`})},F={render:()=>(0,w.jsx)(a,{onSubmit:e=>console.log(`Submit:`,e),drawer:(0,w.jsxs)(m,{count:6,children:[(0,w.jsx)(b,{label:`new_feature_prd.docx`,onRemove:()=>{}}),(0,w.jsx)(b,{label:`2026_roadmap.docx`,onRemove:()=>{}}),(0,w.jsx)(b,{label:`user_flow.pdf`,onRemove:()=>{}}),(0,w.jsx)(b,{label:`launch_plan.docx`,onRemove:()=>{}}),(0,w.jsx)(b,{label:`user_feedback.csv`,onRemove:()=>{}}),(0,w.jsx)(b,{label:`kpis.csv`,onRemove:()=>{}})]})})},I={render:()=>(0,w.jsx)(a,{onSubmit:e=>console.log(`Submit:`,e),status:{type:`error`,message:`Failed to send message. Please try again.`}})},L={render:()=>(0,w.jsx)(a,{onSubmit:e=>console.log(`Submit:`,e),statusPosition:`top`,status:{type:`warning`,message:`Context window is 90% full.`}})},R={render:()=>(0,w.jsx)(a,{onSubmit:e=>console.log(`Submit:`,e),status:{type:`error`,message:`Failed to send message. Please try again.`}})},z={render:()=>(0,w.jsx)(a,{onSubmit:e=>{console.log(`Submit:`,e),alert(`Sent: ${e}`)},placeholder:`Type to enable the send button...`})},B={render:()=>(0,w.jsx)(a,{onSubmit:e=>console.log(`Submit:`,e),sendButton:(0,w.jsx)(i,{size:`sm`,onSend:()=>alert(`Custom send!`)})})},V={render:()=>{let[e,t]=(0,C.useState)(!1);return(0,w.jsx)(a,{onSubmit:e=>{console.log(`Submit:`,e),t(!0),setTimeout(()=>t(!1),5e3)},isStopShown:e,onStop:()=>{console.log(`Stopped`),t(!1)},placeholder:`Send a message to start streaming...`})}},H={render:()=>{let e=[{key:`A`,label:`Yes`},{key:`B`,label:"Yes, and don’t ask again for `git add` commands"},{key:`C`,label:`No, and tell me what to do differently`}],[t,n]=(0,C.useState)(null);return(0,w.jsx)(a,{onSubmit:e=>{console.log(`Submit:`,e,`| Answer:`,t),alert(`Sent: "${e}"\nAnswer: ${t}`)},drawer:(0,w.jsx)(m,{count:1,label:`User feedback requested`,children:(0,w.jsx)(`div`,{style:{width:`100%`},children:(0,w.jsxs)(v,{children:[(0,w.jsx)(g,{label:(0,w.jsx)(c,{weight:`bold`,children:`Do you want to proceed?`})}),e.map(e=>(0,w.jsx)(g,{label:e.label,startContent:(0,w.jsx)(f,{variant:t===e.key?`info`:`neutral`,label:e.key}),isSelected:t===e.key,onClick:()=>n(e.key)},e.key))]})})})})}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <ChatComposer onSubmit={value => {
    console.log('Submit:', value);
    alert(\`Sent: \${value}\`);
  }} />
}`,...k.parameters?.docs?.source},description:{story:`Simplest usage — just onSubmit`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isStreaming, setIsStreaming] = useState(true);
    return <ChatComposer onSubmit={value => {
      console.log('Submit:', value);
      setIsStreaming(true);
    }} isStopShown={isStreaming} onStop={() => {
      console.log('Stopped');
      setIsStreaming(false);
    }} />;
  }
}`,...A.parameters?.docs?.source},description:{story:`With streaming state and stop button`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <ChatComposer onSubmit={value => console.log('Submit:', value)} footerActions={<Button label="GPT-4" variant="ghost" size="md" />} sendActions={<Button label="Microphone" variant="ghost" size="md" icon={MicIcon} isIconOnly />} />
}`,...j.parameters?.docs?.source},description:{story:`With footer actions (model selector) and mic button`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <ChatComposer onSubmit={value => console.log('Submit:', value)} drawer={<ChatComposerDrawer>
          <Token label="report.pdf" onRemove={() => {}} />
          <Token label="data.csv" onRemove={() => {}} />
        </ChatComposerDrawer>} headerActions={<Button label="Attach file" variant="ghost" size="sm" icon={PaperclipIcon} isIconOnly />} headerContext={<ProgressBar label="Context window" value={3} isLabelHidden />} />
}`,...M.parameters?.docs?.source},description:{story:`With attachment chips and a context toolbar`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isStreaming, setIsStreaming] = useState(false);
    return <ChatComposer onSubmit={value => {
      console.log('Submit:', value);
      setIsStreaming(true);
      setTimeout(() => setIsStreaming(false), 3000);
    }} isStopShown={isStreaming} onStop={() => setIsStreaming(false)} placeholder="Ask me anything..." drawer={<ChatComposerDrawer>
            <Token label="design-spec.pdf" onRemove={() => {}} />
          </ChatComposerDrawer>} headerActions={<>
            <Button label="Mention" variant="ghost" size="sm" icon={AtSignIcon} isIconOnly />
            <Button label="Attach file" variant="ghost" size="sm" icon={PaperclipIcon} isIconOnly />
          </>} headerContext={<ProgressBar label="Context window" value={3} isLabelHidden />} footerActions={<>
            <Button label="Auto" variant="ghost" size="md" />
            <Button label="Settings" variant="ghost" size="md" />
          </>} sendActions={<Button label="Microphone" variant="ghost" size="md" icon={MicIcon} isIconOnly />} />;
  }
}`,...N.parameters?.docs?.source},description:{story:`Full featured — all slots populated`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <ChatComposer onSubmit={() => {}} isDisabled placeholder="Composer is disabled" />
}`,...P.parameters?.docs?.source},description:{story:`Disabled state`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <ChatComposer onSubmit={value => console.log('Submit:', value)} drawer={<ChatComposerDrawer count={6}>
          <Token label="new_feature_prd.docx" onRemove={() => {}} />
          <Token label="2026_roadmap.docx" onRemove={() => {}} />
          <Token label="user_flow.pdf" onRemove={() => {}} />
          <Token label="launch_plan.docx" onRemove={() => {}} />
          <Token label="user_feedback.csv" onRemove={() => {}} />
          <Token label="kpis.csv" onRemove={() => {}} />
        </ChatComposerDrawer>} />
}`,...F.parameters?.docs?.source},description:{story:`With many attachments and collapsible drawer`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <ChatComposer onSubmit={value => console.log('Submit:', value)} status={{
    type: 'error',
    message: 'Failed to send message. Please try again.'
  }} />
}`,...I.parameters?.docs?.source},description:{story:`With error status`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <ChatComposer onSubmit={value => console.log('Submit:', value)} statusPosition="top" status={{
    type: 'warning',
    message: 'Context window is 90% full.'
  }} />
}`,...L.parameters?.docs?.source},description:{story:`With status on top`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <ChatComposer onSubmit={value => console.log('Submit:', value)} status={{
    type: 'error',
    message: 'Failed to send message. Please try again.'
  }} />
}`,...R.parameters?.docs?.source},description:{story:`With status on bottom`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <ChatComposer onSubmit={value => {
    console.log('Submit:', value);
    alert(\`Sent: \${value}\`);
  }} placeholder="Type to enable the send button..." />
}`,...z.parameters?.docs?.source},description:{story:`Default send button — reads from composer context automatically`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <ChatComposer onSubmit={value => console.log('Submit:', value)} sendButton={<ChatSendButton size="sm" onSend={() => alert('Custom send!')} />} />
}`,...B.parameters?.docs?.source},description:{story:`Custom send button via sendButton slot`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isStreaming, setIsStreaming] = useState(false);
    return <ChatComposer onSubmit={value => {
      console.log('Submit:', value);
      setIsStreaming(true);
      setTimeout(() => setIsStreaming(false), 5000);
    }} isStopShown={isStreaming} onStop={() => {
      console.log('Stopped');
      setIsStreaming(false);
    }} placeholder="Send a message to start streaming..." />;
  }
}`,...V.parameters?.docs?.source},description:{story:`Send/stop toggle — type text and submit to start streaming, click stop to end`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => {
    const options = [{
      key: 'A',
      label: 'Yes'
    }, {
      key: 'B',
      label: 'Yes, and don\\u2019t ask again for \`git add\` commands'
    }, {
      key: 'C',
      label: 'No, and tell me what to do differently'
    }];
    const [selected, setSelected] = useState<string | null>(null);
    return <ChatComposer onSubmit={value => {
      console.log('Submit:', value, '| Answer:', selected);
      alert(\`Sent: "\${value}"\\nAnswer: \${selected}\`);
    }} drawer={<ChatComposerDrawer count={1} label="User feedback requested">
            <div style={{
        width: '100%'
      }}>
              <List>
                <ListItem label={<Text weight="bold">Do you want to proceed?</Text>} />
                {options.map(opt => <ListItem key={opt.key} label={opt.label} startContent={<Badge variant={selected === opt.key ? 'info' : 'neutral'} label={opt.key} />} isSelected={selected === opt.key} onClick={() => setSelected(opt.key)} />)}
              </List>
            </div>
          </ChatComposerDrawer>} />;
  }
}`,...H.parameters?.docs?.source},description:{story:`Drawer with a feedback prompt, warning badge, and selectable options`,...H.parameters?.docs?.description}}},U=[`Simplest`,`WithStreaming`,`WithFooterActions`,`WithAttachments`,`FullFeatured`,`Disabled`,`WithManyAttachments`,`WithError`,`WithStatusTop`,`WithStatusBottom`,`DefaultSendButton`,`CustomSendButton`,`SendStopToggle`,`Feedback`]})))()}W();export{B as CustomSendButton,z as DefaultSendButton,P as Disabled,H as Feedback,N as FullFeatured,V as SendStopToggle,k as Simplest,M as WithAttachments,I as WithError,j as WithFooterActions,F as WithManyAttachments,R as WithStatusBottom,L as WithStatusTop,A as WithStreaming,U as __namedExportsOrder,O as default};