"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[917],{"./features/RemoveProductFromCart/ui/RemoveProductFromCart/RemoveProductFromCart.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});const meta={title:"features/RemoveProductFromCart",component:__webpack_require__("./features/RemoveProductFromCart/ui/RemoveProductFromCart/RemoveProductFromCart.tsx").o,args:{}};__webpack_exports__.default=meta;const Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./features/RemoveProductFromCart/ui/RemoveProductFromCart/RemoveProductFromCart.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{o:function(){return RemoveProductFromCart}});var _path,_path2,react=__webpack_require__("../node_modules/react/index.js"),clsx_m=__webpack_require__("../node_modules/clsx/dist/clsx.m.js"),Button=__webpack_require__("./shared/ui/Button/index.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Trash=props=>react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},props),_path||(_path=react.createElement("path",{d:"M12.247 22c-1.355 0-2.676-.015-3.983-.042-1.672-.033-2.83-1.117-3.018-2.829-.315-2.84-.854-9.534-.86-9.601a.75.75 0 0 1 .688-.808c.407-.011.775.275.808.687.005.068.543 6.739.855 9.557.107.973.632 1.475 1.558 1.494 2.5.053 5.05.056 7.8.006.985-.019 1.517-.511 1.627-1.507.31-2.794.85-9.482.856-9.55.033-.412.398-.7.807-.687a.75.75 0 0 1 .688.808c-.006.068-.548 6.779-.86 9.594-.194 1.747-1.348 2.81-3.09 2.842a225 225 0 0 1-3.876.036m8.461-15.01H3.75a.75.75 0 0 1 0-1.5h16.958a.75.75 0 0 1 0 1.5"})),_path2||(_path2=react.createElement("path",{d:"M17.44 6.99a2.405 2.405 0 0 1-2.35-1.928l-.243-1.216c-.05-.185-.262-.346-.502-.346h-4.233a.53.53 0 0 0-.512.392l-.233 1.17a2.404 2.404 0 0 1-2.35 1.927.75.75 0 0 1 0-1.5.9.9 0 0 0 .88-.722l.243-1.216c.247-.932 1.054-1.55 1.972-1.55h4.233c.918 0 1.725.618 1.962 1.505l.254 1.261a.9.9 0 0 0 .88.722.75.75 0 0 1 0 1.5z"}))),RemoveProductFromCart_module_outer="Tp2SKVVF",jsx_runtime=__webpack_require__("../node_modules/react/jsx-runtime.js");const RemoveProductFromCart=(0,react.memo)((_ref=>{let{className:className}=_ref;return(0,jsx_runtime.jsx)(Button.$,{className:(0,clsx_m.A)(RemoveProductFromCart_module_outer,className),icon:Trash,variant:"clean",size:"xs"})}));RemoveProductFromCart.displayName="RemoveProductFromCart";try{RemoveProductFromCart.displayName="RemoveProductFromCart",RemoveProductFromCart.__docgenInfo={description:"",displayName:"RemoveProductFromCart",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/features/RemoveProductFromCart/ui/RemoveProductFromCart/RemoveProductFromCart.tsx#RemoveProductFromCart"]={docgenInfo:RemoveProductFromCart.__docgenInfo,name:"RemoveProductFromCart",path:"src/features/RemoveProductFromCart/ui/RemoveProductFromCart/RemoveProductFromCart.tsx#RemoveProductFromCart"})}catch(__react_docgen_typescript_loader_error){}},"./shared/ui/Button/Button.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$:function(){return Button}});var react=__webpack_require__("../node_modules/react/index.js"),clsx_m=__webpack_require__("../node_modules/clsx/dist/clsx.m.js"),Button_module={light:"FsDb7TyM",dark:"cfvuD2f9",outer:"WvrqF4fU",outer_full:"A_HXkQ8k","outer_variant-primary":"VkAqq1Mz",outer_disabled:"rxHgDSGr","outer_variant-secondary":"IThhr5Yo","outer_variant-clean":"tlW4EkXE","outer_size-xs":"JoEoUWMW","outer_size-s":"mIF1bhUh","outer_size-m":"MZMMZEub","outer_noLabel-xs":"u1RT6wDE","outer_noLabel-s":"mEqPuAYw","outer_noLabel-m":"Ru0wfdNq",outer_rounded:"JBkbFkDn",icon:"RKHfdB3X",icon_withLabel:"WVvm9MJ8","icon_size-xs":"KwslkaOH",icon_noLabel:"bRzaxF2b","icon_size-s":"dsqQK5jM","icon_size-m":"s_UNaqkz","icon_variant-primary":"La2uGDr2","icon_variant-secondary":"xAYICHo9","icon_variant-clean":"ytw4JIRK",icon_right:"HT3LDlSb"},jsx_runtime=__webpack_require__("../node_modules/react/jsx-runtime.js");const Button=(0,react.memo)((_ref=>{let{label:label,icon:Icon,iconPosition:iconPosition="left",iconClassName:iconClassName,size:size="m",variant:variant="primary",rounded:rounded=!1,full:full=!1,title:title,disabled:disabled,onClick:onClick,className:className}=_ref;if(!label&&!Icon)return null;const buttonClassNames=(0,clsx_m.A)(Button_module.outer,className,Button_module[`outer_size-${size}`],Button_module[`outer_variant-${variant}`],{[Button_module[`outer_noLabel-${size}`]]:!label,[Button_module.outer_full]:full,[Button_module.outer_disabled]:disabled,[Button_module.outer_rounded]:rounded}),buttonInner=(()=>{if(!Icon)return label;const iconElem=(0,jsx_runtime.jsx)(Icon,{className:(0,clsx_m.A)(Button_module.icon,iconClassName,Button_module[`icon_variant-${variant}`],Button_module[`icon_size-${size}`],{[Button_module.icon_right]:"right"===iconPosition,[Button_module.icon_withLabel]:label,[Button_module.icon_noLabel]:!label})});return label?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[iconElem,(0,jsx_runtime.jsx)("span",{children:label})]}):iconElem})();return(0,jsx_runtime.jsx)("button",{className:buttonClassNames,title:title,disabled:disabled,type:"button",onClick:()=>onClick?.(),children:buttonInner})}));Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"Текст на кнопке",name:"label",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"any"}},iconPosition:{defaultValue:null,description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},iconClassName:{defaultValue:null,description:"",name:"iconClassName",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"xs"'},{value:'"m"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"clean"'}]}},rounded:{defaultValue:null,description:"",name:"rounded",required:!1,type:{name:"boolean"}},full:{defaultValue:null,description:"",name:"full",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"Подсказка при наведении",name:"title",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/shared/ui/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./shared/ui/Button/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$:function(){return _Button__WEBPACK_IMPORTED_MODULE_0__.$}});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./shared/ui/Button/Button.tsx")},"../node_modules/clsx/dist/clsx.m.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_exports__.A=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}}}]);