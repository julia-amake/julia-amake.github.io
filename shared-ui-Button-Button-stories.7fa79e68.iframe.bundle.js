"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[425],{"./shared/ui/Button/Button.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Clean:function(){return Clean},FullWidth:function(){return FullWidth},IconLeft:function(){return IconLeft},IconOnly:function(){return IconOnly},IconRight:function(){return IconRight},Primary:function(){return Primary},PrimaryDisabled:function(){return PrimaryDisabled},Rounded:function(){return Rounded},Secondary:function(){return Secondary},SecondaryDisabled:function(){return SecondaryDisabled},SizeM:function(){return SizeM},SizeS:function(){return SizeS},SizeXS:function(){return SizeXS},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Button_stories}});var _path,_path2,react=__webpack_require__("../node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Heart=props=>react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},props),_path||(_path=react.createElement("path",{fillRule:"evenodd",d:"M3.824 11.123c1.402 4.362 6.94 7.889 8.413 8.762 1.477-.882 7.056-4.448 8.413-8.758.89-2.786.064-6.315-3.222-7.374-1.592-.511-3.45-.2-4.731.792a.75.75 0 0 1-.91.006 5.23 5.23 0 0 0-4.75-.798c-3.28 1.058-4.104 4.587-3.213 7.37m8.414 10.378a.75.75 0 0 1-.36-.091c-.312-.171-7.685-4.235-9.482-9.829l-.001-.001c-1.128-3.522.128-7.948 4.183-9.255a6.73 6.73 0 0 1 5.657.714c1.626-1.028 3.786-1.312 5.652-.714 4.059 1.309 5.319 5.734 4.192 9.255-1.74 5.53-9.166 9.655-9.481 9.828a.74.74 0 0 1-.36.093",clipRule:"evenodd"})),_path2||(_path2=react.createElement("path",{fillRule:"evenodd",d:"M18.154 9.625a.75.75 0 0 1-.747-.69 2.02 2.02 0 0 0-1.4-1.768.75.75 0 0 1 .46-1.428 3.525 3.525 0 0 1 2.436 3.075.75.75 0 0 1-.75.81",clipRule:"evenodd"})));var Button_stories={title:"shared/Button",tags:["autodocs"],component:__webpack_require__("./shared/ui/Button/Button.tsx").$,args:{label:"Кнопка"}};const Primary={args:{variant:"primary"}},Secondary={args:{variant:"secondary"}},Clean={args:{variant:"clean"}},SizeXS={args:{size:"xs"}},SizeS={args:{size:"s"}},SizeM={args:{size:"m"}},IconLeft={args:{icon:Heart,iconPosition:"left"}},IconRight={args:{icon:Heart,iconPosition:"right"}},IconOnly={args:{label:void 0,icon:Heart}},Rounded={args:{rounded:!0}},FullWidth={args:{full:!0}},PrimaryDisabled={args:{variant:"primary",disabled:!0}},SecondaryDisabled={args:{variant:"secondary",disabled:!0}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'primary'\n  }\n}",...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'secondary'\n  }\n}",...Secondary.parameters?.docs?.source}}},Clean.parameters={...Clean.parameters,docs:{...Clean.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'clean'\n  }\n}",...Clean.parameters?.docs?.source}}},SizeXS.parameters={...SizeXS.parameters,docs:{...SizeXS.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'xs'\n  }\n}",...SizeXS.parameters?.docs?.source}}},SizeS.parameters={...SizeS.parameters,docs:{...SizeS.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 's'\n  }\n}",...SizeS.parameters?.docs?.source}}},SizeM.parameters={...SizeM.parameters,docs:{...SizeM.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'm'\n  }\n}",...SizeM.parameters?.docs?.source}}},IconLeft.parameters={...IconLeft.parameters,docs:{...IconLeft.parameters?.docs,source:{originalSource:"{\n  args: {\n    icon: Icon,\n    iconPosition: 'left'\n  }\n}",...IconLeft.parameters?.docs?.source}}},IconRight.parameters={...IconRight.parameters,docs:{...IconRight.parameters?.docs,source:{originalSource:"{\n  args: {\n    icon: Icon,\n    iconPosition: 'right'\n  }\n}",...IconRight.parameters?.docs?.source}}},IconOnly.parameters={...IconOnly.parameters,docs:{...IconOnly.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: undefined,\n    icon: Icon\n  }\n}",...IconOnly.parameters?.docs?.source}}},Rounded.parameters={...Rounded.parameters,docs:{...Rounded.parameters?.docs,source:{originalSource:"{\n  args: {\n    rounded: true\n  }\n}",...Rounded.parameters?.docs?.source}}},FullWidth.parameters={...FullWidth.parameters,docs:{...FullWidth.parameters?.docs,source:{originalSource:"{\n  args: {\n    full: true\n  }\n}",...FullWidth.parameters?.docs?.source}}},PrimaryDisabled.parameters={...PrimaryDisabled.parameters,docs:{...PrimaryDisabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'primary',\n    disabled: true\n  }\n}",...PrimaryDisabled.parameters?.docs?.source}}},SecondaryDisabled.parameters={...SecondaryDisabled.parameters,docs:{...SecondaryDisabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'secondary',\n    disabled: true\n  }\n}",...SecondaryDisabled.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Secondary","Clean","SizeXS","SizeS","SizeM","IconLeft","IconRight","IconOnly","Rounded","FullWidth","PrimaryDisabled","SecondaryDisabled"]},"./shared/ui/Button/Button.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$:function(){return Button}});var react=__webpack_require__("../node_modules/react/index.js"),clsx_m=__webpack_require__("../node_modules/clsx/dist/clsx.m.js"),Button_module={light:"FsDb7TyM",dark:"cfvuD2f9",outer:"WvrqF4fU",outer_full:"A_HXkQ8k","outer_variant-primary":"VkAqq1Mz",outer_disabled:"rxHgDSGr","outer_variant-secondary":"IThhr5Yo","outer_variant-clean":"tlW4EkXE","outer_size-xs":"JoEoUWMW","outer_size-s":"mIF1bhUh","outer_size-m":"MZMMZEub","outer_noLabel-xs":"u1RT6wDE","outer_noLabel-s":"mEqPuAYw","outer_noLabel-m":"Ru0wfdNq",outer_rounded:"JBkbFkDn",icon:"RKHfdB3X",icon_withLabel:"WVvm9MJ8","icon_size-xs":"KwslkaOH",icon_noLabel:"bRzaxF2b","icon_size-s":"dsqQK5jM","icon_size-m":"s_UNaqkz","icon_variant-primary":"La2uGDr2","icon_variant-secondary":"xAYICHo9","icon_variant-clean":"ytw4JIRK",icon_right:"HT3LDlSb"},jsx_runtime=__webpack_require__("../node_modules/react/jsx-runtime.js");const Button=(0,react.memo)((_ref=>{let{label:label,icon:Icon,iconPosition:iconPosition="left",iconClassName:iconClassName,size:size="m",variant:variant="primary",rounded:rounded=!1,full:full=!1,title:title,disabled:disabled,onClick:onClick,className:className}=_ref;if(!label&&!Icon)return null;const buttonClassNames=(0,clsx_m.A)(Button_module.outer,className,Button_module[`outer_size-${size}`],Button_module[`outer_variant-${variant}`],{[Button_module[`outer_noLabel-${size}`]]:!label,[Button_module.outer_full]:full,[Button_module.outer_disabled]:disabled,[Button_module.outer_rounded]:rounded}),buttonInner=(()=>{if(!Icon)return label;const iconElem=(0,jsx_runtime.jsx)(Icon,{className:(0,clsx_m.A)(Button_module.icon,iconClassName,Button_module[`icon_variant-${variant}`],Button_module[`icon_size-${size}`],{[Button_module.icon_right]:"right"===iconPosition,[Button_module.icon_withLabel]:label,[Button_module.icon_noLabel]:!label})});return label?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[iconElem,(0,jsx_runtime.jsx)("span",{children:label})]}):iconElem})();return(0,jsx_runtime.jsx)("button",{className:buttonClassNames,title:title,disabled:disabled,type:"button",onClick:()=>onClick?.(),children:buttonInner})}));Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"Текст на кнопке",name:"label",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"any"}},iconPosition:{defaultValue:null,description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},iconClassName:{defaultValue:null,description:"",name:"iconClassName",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"xs"'},{value:'"m"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"clean"'}]}},rounded:{defaultValue:null,description:"",name:"rounded",required:!1,type:{name:"boolean"}},full:{defaultValue:null,description:"",name:"full",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"Подсказка при наведении",name:"title",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/shared/ui/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"../node_modules/clsx/dist/clsx.m.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_exports__.A=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}}}]);