"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[187],{"./shared/ui/Collapse/Collapse.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Collapse_stories}});var react=__webpack_require__("../node_modules/react/index.js"),clsx_m=__webpack_require__("../node_modules/clsx/dist/clsx.m.js");const CollapsedActionTypes_COLLAPSED_OPEN="open",CollapsedActionTypes_COLLAPSED_CLOSE="close",CollapsedActionTypes_COLLAPSED_MOUNT="mount",CollapsedActionTypes_COLLAPSED_UNMOUNT="unmount",statusesReducer=(state,action)=>{switch(action.type){case CollapsedActionTypes_COLLAPSED_OPEN:return{...state,isOpen:!0};case CollapsedActionTypes_COLLAPSED_CLOSE:return{...state,isOpen:!1};case CollapsedActionTypes_COLLAPSED_MOUNT:return{...state,isMounted:!0};case CollapsedActionTypes_COLLAPSED_UNMOUNT:return{...state,isMounted:!1};default:throw new Error}},useCollapsedReducer=elem=>{const[statuses,dispatch]=(0,react.useReducer)(statusesReducer,{isOpen:!1,isMounted:!1}),{isOpen:isOpen,isMounted:isMounted}=statuses,setStyle=(0,react.useCallback)((()=>{elem&&isOpen&&(elem.style.height=`${elem.scrollHeight}px`)}),[elem,isOpen]);(0,react.useEffect)((()=>{if(!elem)return;const resizeObserver=new ResizeObserver((entries=>{entries.forEach(setStyle)}));return resizeObserver.observe(elem),()=>resizeObserver.unobserve(elem)}),[elem,setStyle]);const open=(0,react.useCallback)((()=>{setStyle(),dispatch({type:CollapsedActionTypes_COLLAPSED_OPEN})}),[setStyle]),close=(0,react.useCallback)((()=>{elem&&(dispatch({type:CollapsedActionTypes_COLLAPSED_CLOSE}),elem.style.height="0")}),[elem]),mount=(0,react.useCallback)((()=>dispatch({type:CollapsedActionTypes_COLLAPSED_MOUNT})),[]),unmount=(0,react.useCallback)((()=>dispatch({type:CollapsedActionTypes_COLLAPSED_UNMOUNT})),[]);return(0,react.useMemo)((()=>({isOpen:isOpen,isMounted:isMounted,open:open,close:close,mount:mount,unmount:unmount})),[open,close,mount,unmount,isMounted,isOpen])};try{useCollapsedReducer.displayName="useCollapsedReducer",useCollapsedReducer.__docgenInfo={description:"",displayName:"useCollapsedReducer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Collapse/lib/hooks/useCollapsedReducer.tsx#useCollapsedReducer"]={docgenInfo:useCollapsedReducer.__docgenInfo,name:"useCollapsedReducer",path:"src/shared/ui/Collapse/lib/hooks/useCollapsedReducer.tsx#useCollapsedReducer"})}catch(__react_docgen_typescript_loader_error){}var Collapse_module_outer="sploxl_Y",Collapse_module_outer_animate="qhEtqJ6r",Collapse_module_content="h0_oS58p",Collapse_module_content_animate="InNvlpPB",Collapse_module_content_open="F3erDLZG",jsx_runtime=__webpack_require__("../node_modules/react/jsx-runtime.js");const Collapse=(0,react.memo)((_ref=>{let{opened:opened=!1,children:children}=_ref;const outerRef=(0,react.useRef)(null),[inited,setInited]=(0,react.useState)(!1),{isOpen:isOpen,isMounted:isMounted,open:open,close:close,mount:mount,unmount:unmount}=useCollapsedReducer(outerRef.current);(0,react.useLayoutEffect)((()=>{if(opened)return mount(),void open();close(),setInited(!0)}),[close,mount,open,opened]);return(0,jsx_runtime.jsx)("div",{className:(0,clsx_m.A)(Collapse_module_outer,{[Collapse_module_outer_animate]:inited}),ref:outerRef,onTransitionEnd:()=>{!opened&&unmount()},children:isMounted&&(0,jsx_runtime.jsx)("div",{className:(0,clsx_m.A)(Collapse_module_content,{[Collapse_module_content_animate]:inited,[Collapse_module_content_open]:isOpen}),children:children})})}));Collapse.displayName="Collapse";try{Collapse.displayName="Collapse",Collapse.__docgenInfo={description:"",displayName:"Collapse",props:{opened:{defaultValue:null,description:"",name:"opened",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Collapse/Collapse.tsx#Collapse"]={docgenInfo:Collapse.__docgenInfo,name:"Collapse",path:"src/shared/ui/Collapse/Collapse.tsx#Collapse"})}catch(__react_docgen_typescript_loader_error){}var Collapse_stories={title:"shared/Collapse",component:Collapse,args:{children:(0,jsx_runtime.jsx)("div",{children:"Это компонент Collapse. Он принимает только opened и children. Когда opened: true, дочерние компоненты сначала монтируются, а потом плавно появляются. В обратном случае наоборот, после скрытия дочерних компонентов, они размонтируются."})}};const Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../node_modules/clsx/dist/clsx.m.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_exports__.A=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}}}]);