"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[995],{"./shared/ui/Heading/Heading.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Bold:function(){return Bold},H1:function(){return H1},H2:function(){return H2},H3:function(){return H3},H4:function(){return H4},H5:function(){return H5},H6:function(){return H6},Light:function(){return Light},Normal:function(){return Normal},Uppercase:function(){return Uppercase},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Heading_stories}});__webpack_require__("../node_modules/react/index.js");var Heading=__webpack_require__("./shared/ui/Heading/Heading.tsx"),Storybook_module_heading="Efv0Nw8f",jsx_runtime=__webpack_require__("../node_modules/react/jsx-runtime.js");var Heading_stories={title:"shared/Heading",component:Heading.D,args:{}};const Template=args=>(0,jsx_runtime.jsx)(Heading.D,{className:Storybook_module_heading,...args,children:"Заголовок"});Template.displayName="Template";const H1=Template.bind({}),H2=Template.bind({}),H3=Template.bind({}),H4=Template.bind({}),H5=Template.bind({}),H6=Template.bind({}),Light=Template.bind({}),Normal=Template.bind({}),Bold=Template.bind({}),Uppercase=Template.bind({});H1.args={size:"h1"},H2.args={size:"h2"},H3.args={size:"h3"},H4.args={size:"h4"},H5.args={size:"h5"},H6.args={size:"h6"},Light.args={weight:"light"},Normal.args={weight:"normal"},Bold.args={weight:"bold"},Uppercase.args={uppercase:!0},H1.parameters={...H1.parameters,docs:{...H1.parameters?.docs,source:{originalSource:"args => <Heading className={s.heading} {...args}>\n    Заголовок\n  </Heading>",...H1.parameters?.docs?.source}}},H2.parameters={...H2.parameters,docs:{...H2.parameters?.docs,source:{originalSource:"args => <Heading className={s.heading} {...args}>\n    Заголовок\n  </Heading>",...H2.parameters?.docs?.source}}},H3.parameters={...H3.parameters,docs:{...H3.parameters?.docs,source:{originalSource:"args => <Heading className={s.heading} {...args}>\n    Заголовок\n  </Heading>",...H3.parameters?.docs?.source}}},H4.parameters={...H4.parameters,docs:{...H4.parameters?.docs,source:{originalSource:"args => <Heading className={s.heading} {...args}>\n    Заголовок\n  </Heading>",...H4.parameters?.docs?.source}}},H5.parameters={...H5.parameters,docs:{...H5.parameters?.docs,source:{originalSource:"args => <Heading className={s.heading} {...args}>\n    Заголовок\n  </Heading>",...H5.parameters?.docs?.source}}},H6.parameters={...H6.parameters,docs:{...H6.parameters?.docs,source:{originalSource:"args => <Heading className={s.heading} {...args}>\n    Заголовок\n  </Heading>",...H6.parameters?.docs?.source}}},Light.parameters={...Light.parameters,docs:{...Light.parameters?.docs,source:{originalSource:"args => <Heading className={s.heading} {...args}>\n    Заголовок\n  </Heading>",...Light.parameters?.docs?.source}}},Normal.parameters={...Normal.parameters,docs:{...Normal.parameters?.docs,source:{originalSource:"args => <Heading className={s.heading} {...args}>\n    Заголовок\n  </Heading>",...Normal.parameters?.docs?.source}}},Bold.parameters={...Bold.parameters,docs:{...Bold.parameters?.docs,source:{originalSource:"args => <Heading className={s.heading} {...args}>\n    Заголовок\n  </Heading>",...Bold.parameters?.docs?.source}}},Uppercase.parameters={...Uppercase.parameters,docs:{...Uppercase.parameters?.docs,source:{originalSource:"args => <Heading className={s.heading} {...args}>\n    Заголовок\n  </Heading>",...Uppercase.parameters?.docs?.source}}};const __namedExportsOrder=["H1","H2","H3","H4","H5","H6","Light","Normal","Bold","Uppercase"]},"./shared/ui/Heading/Heading.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{D:function(){return Heading}});__webpack_require__("../node_modules/react/index.js");var clsx_m=__webpack_require__("../node_modules/clsx/dist/clsx.m.js"),Heading_module={outer:"VRbWTvZU","size-h1":"ll1sJp8N","size-h2":"hZgKreaE","size-h3":"rTWMOjAS","size-h4":"CfQ_tT6C","size-h5":"pm5zf6Gv","size-h6":"LyYvp4xT","weight-light":"UJ267KIu","weight-normal":"DiCilxXz","weight-bold":"x6PGTplH",upper:"cAjMeL1t"},jsx_runtime=__webpack_require__("../node_modules/react/jsx-runtime.js");const Heading=_ref=>{let{as:Elem="p",size:size="h1",weight:weight="bold",uppercase:uppercase=!1,children:children,className:className}=_ref;return(0,jsx_runtime.jsx)(Elem,{className:(0,clsx_m.A)(Heading_module.outer,className,Heading_module[`size-${size}`],Heading_module[`weight-${weight}`],{[Heading_module.upper]:uppercase}),children:children})};Heading.displayName="Heading";try{Heading.displayName="Heading",Heading.__docgenInfo={description:"",displayName:"Heading",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}},size:{defaultValue:{value:"h1"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}},weight:{defaultValue:{value:"bold"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"normal"'},{value:'"bold"'}]}},uppercase:{defaultValue:{value:"false"},description:"",name:"uppercase",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Heading/Heading.tsx#Heading"]={docgenInfo:Heading.__docgenInfo,name:"Heading",path:"src/shared/ui/Heading/Heading.tsx#Heading"})}catch(__react_docgen_typescript_loader_error){}},"../node_modules/clsx/dist/clsx.m.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_exports__.A=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}}}]);