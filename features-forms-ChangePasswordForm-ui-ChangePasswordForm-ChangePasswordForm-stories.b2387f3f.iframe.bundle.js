"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[943],{"./features/forms/ChangePasswordForm/ui/ChangePasswordForm/ChangePasswordForm.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});const meta={title:"features/forms/ChangePasswordForm",component:__webpack_require__("./features/forms/ChangePasswordForm/ui/ChangePasswordForm/ChangePasswordForm.tsx").g,args:{}};__webpack_exports__.default=meta;const Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./features/forms/ChangePasswordForm/ui/ChangePasswordForm/ChangePasswordForm.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{g:function(){return ChangePasswordForm}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),formik_dist__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../node_modules/formik/dist/formik.cjs.production.min.js"),src_shared_lib_utils_validation_common__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./shared/lib/utils/validation/common.ts"),src_shared_ui_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./shared/ui/Button/index.ts"),src_shared_ui_Form__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./shared/ui/Form/index.ts"),src_shared_ui_Heading__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./shared/ui/Heading/index.ts"),src_shared_ui_TextField__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./shared/ui/TextField/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../node_modules/react/jsx-runtime.js");const initialValues={password:void 0,newPassword:void 0,repeatPassword:void 0},{onSubmit:onSubmit,validate:validate}={onSubmit:values=>console.log(values),validate:values=>{const errors={};return(0,src_shared_lib_utils_validation_common__WEBPACK_IMPORTED_MODULE_1__.Eg)(values.password)&&(errors.password="Обязательное поле"),(0,src_shared_lib_utils_validation_common__WEBPACK_IMPORTED_MODULE_1__.Eg)(values.newPassword)&&(errors.newPassword="Обязательное поле"),(0,src_shared_lib_utils_validation_common__WEBPACK_IMPORTED_MODULE_1__.Eg)(values.repeatPassword)&&(errors.repeatPassword="Обязательное поле"),values.repeatPassword!==values.newPassword&&(errors.newPassword="Пароли не совпадают",errors.repeatPassword="Пароли не совпадают"),errors}},ChangePasswordForm=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((_ref=>{let{className:className}=_ref;const formManager=(0,formik_dist__WEBPACK_IMPORTED_MODULE_7__.Wx)({initialValues:initialValues,onSubmit:onSubmit,validate:validate}),{touched:touched,errors:errors,submitCount:submitCount,handleBlur:handleBlur,handleSubmit:handleSubmit,handleChange:handleChange,submitForm:submitForm}=formManager,{help:helpPassword}=(0,src_shared_lib_utils_validation_common__WEBPACK_IMPORTED_MODULE_1__.UA)(errors.password,touched.password,submitCount),{help:helpNewPassword}=(0,src_shared_lib_utils_validation_common__WEBPACK_IMPORTED_MODULE_1__.UA)(errors.newPassword,touched.newPassword,submitCount),{help:helpRepeatPassword}=(0,src_shared_lib_utils_validation_common__WEBPACK_IMPORTED_MODULE_1__.UA)(errors.repeatPassword,touched.repeatPassword,submitCount);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(src_shared_ui_Form__WEBPACK_IMPORTED_MODULE_3__.l,{className:className,onSubmit:handleSubmit,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(src_shared_ui_Heading__WEBPACK_IMPORTED_MODULE_4__.D,{as:"h2",size:"h5",children:"Изменить пароль"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(src_shared_ui_TextField__WEBPACK_IMPORTED_MODULE_5__.A,{name:"password",onChange:handleChange,onBlur:handleBlur,label:"Введите текущий пароль",required:!0,errorMessage:helpPassword,defaultValue:initialValues.password}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(src_shared_ui_TextField__WEBPACK_IMPORTED_MODULE_5__.A,{name:"newPassword",onChange:handleChange,onBlur:handleBlur,label:"Придумайте новый пароль",required:!0,errorMessage:helpNewPassword,defaultValue:initialValues.newPassword}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(src_shared_ui_TextField__WEBPACK_IMPORTED_MODULE_5__.A,{name:"repeatPassword",onChange:handleChange,onBlur:handleBlur,label:"Повторите пароль",required:!0,errorMessage:helpRepeatPassword,defaultValue:initialValues.repeatPassword}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(src_shared_ui_Button__WEBPACK_IMPORTED_MODULE_2__.$,{label:"Изменить пароль",onClick:submitForm})]})}));ChangePasswordForm.displayName="ChangePasswordForm";try{ChangePasswordForm.displayName="ChangePasswordForm",ChangePasswordForm.__docgenInfo={description:"",displayName:"ChangePasswordForm",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},formManager:{defaultValue:null,description:"",name:"formManager",required:!1,type:{name:"FormikContextType<ChangePasswordFormValues>"}},formElement:{defaultValue:null,description:"",name:"formElement",required:!1,type:{name:"MutableRefObject<HTMLFormElement>"}},autoFocusElement:{defaultValue:null,description:"",name:"autoFocusElement",required:!1,type:{name:"MutableRefObject<HTMLInputElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/features/forms/ChangePasswordForm/ui/ChangePasswordForm/ChangePasswordForm.tsx#ChangePasswordForm"]={docgenInfo:ChangePasswordForm.__docgenInfo,name:"ChangePasswordForm",path:"src/features/forms/ChangePasswordForm/ui/ChangePasswordForm/ChangePasswordForm.tsx#ChangePasswordForm"})}catch(__react_docgen_typescript_loader_error){}},"./shared/lib/utils/validation/common.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Eg:function(){return isNotDefinedString},UA:function(){return getValidates}});__webpack_require__("../node_modules/react/index.js");const getValidateStatus=(errors,touched,submitCount)=>submitCount&&errors&&touched?"error":"",getHelp=(errors,touched,submitCount)=>submitCount&&errors&&touched?errors:null,getValidates=(errors,touched,submitCount)=>({validateStatus:getValidateStatus(errors,touched,submitCount),help:getHelp(errors,touched,submitCount)}),isNotDefinedString=string=>!string?.trim()},"./shared/ui/Button/Button.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$:function(){return Button}});var react=__webpack_require__("../node_modules/react/index.js"),clsx_m=__webpack_require__("../node_modules/clsx/dist/clsx.m.js"),Button_module={light:"FsDb7TyM",dark:"cfvuD2f9",outer:"WvrqF4fU",outer_full:"A_HXkQ8k","outer_variant-primary":"VkAqq1Mz",outer_disabled:"rxHgDSGr","outer_variant-secondary":"IThhr5Yo","outer_variant-clean":"tlW4EkXE","outer_text-center":"chk5Xay3","outer_text-left":"jV478Wi7","outer_text-right":"leiH9zFI","outer_size-xs":"JoEoUWMW","outer_size-s":"mIF1bhUh","outer_size-m":"MZMMZEub","outer_noLabel-xs":"u1RT6wDE","outer_noLabel-s":"mEqPuAYw","outer_noLabel-m":"Ru0wfdNq",outer_rounded:"JBkbFkDn",icon:"RKHfdB3X",icon_withLabel:"WVvm9MJ8","icon_size-xs":"KwslkaOH",icon_noLabel:"bRzaxF2b","icon_size-s":"dsqQK5jM","icon_size-m":"s_UNaqkz","icon_variant-primary":"La2uGDr2","icon_variant-secondary":"xAYICHo9","icon_variant-clean":"ytw4JIRK",icon_right:"HT3LDlSb"},jsx_runtime=__webpack_require__("../node_modules/react/jsx-runtime.js");const Button=(0,react.memo)((0,react.forwardRef)(((_ref,ref)=>{let{label:label,icon:Icon,iconPosition:iconPosition="left",iconClassName:iconClassName,textPosition:textPosition="center",size:size="m",variant:variant="primary",rounded:rounded=!1,full:full=!1,title:title,disabled:disabled,onClick:onClick,className:className}=_ref;if(!label&&!Icon)return null;const buttonClassNames=(0,clsx_m.A)(Button_module.outer,className,Button_module[`outer_size-${size}`],Button_module[`outer_variant-${variant}`],Button_module[`outer_text-${textPosition}`],{[Button_module[`outer_noLabel-${size}`]]:!label,[Button_module.outer_full]:full,[Button_module.outer_disabled]:disabled,[Button_module.outer_rounded]:rounded}),buttonInner=(()=>{if(!Icon)return label;const iconElem=(0,jsx_runtime.jsx)(Icon,{className:(0,clsx_m.A)(Button_module.icon,iconClassName,Button_module[`icon_variant-${variant}`],Button_module[`icon_size-${size}`],{[Button_module.icon_right]:"right"===iconPosition,[Button_module.icon_withLabel]:label,[Button_module.icon_noLabel]:!label})});return label?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[iconElem,(0,jsx_runtime.jsx)("span",{children:label})]}):iconElem})();return(0,jsx_runtime.jsx)("button",{className:buttonClassNames,title:title,disabled:disabled,type:"button",onClick:()=>onClick?.(),ref:ref,children:buttonInner})})));Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"xs"'},{value:'"m"'}]}},title:{defaultValue:null,description:"Подсказка при наведении",name:"title",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},label:{defaultValue:null,description:"Текст на кнопке",name:"label",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"any"}},iconPosition:{defaultValue:null,description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},iconClassName:{defaultValue:null,description:"",name:"iconClassName",required:!1,type:{name:"string"}},textPosition:{defaultValue:null,description:"",name:"textPosition",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"clean"'}]}},rounded:{defaultValue:null,description:"",name:"rounded",required:!1,type:{name:"boolean"}},full:{defaultValue:null,description:"",name:"full",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/shared/ui/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./shared/ui/Button/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$:function(){return _Button__WEBPACK_IMPORTED_MODULE_0__.$}});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./shared/ui/Button/Button.tsx")},"./shared/ui/Form/Form.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{l:function(){return Form}});var react=__webpack_require__("../node_modules/react/index.js"),clsx_m=__webpack_require__("../node_modules/clsx/dist/clsx.m.js"),Form_module_form="V33VJ9wo",jsx_runtime=__webpack_require__("../node_modules/react/jsx-runtime.js");const Form=(0,react.memo)((_ref=>{let{className:className,children:children,...otherProps}=_ref;return(0,jsx_runtime.jsx)("form",{className:(0,clsx_m.A)(Form_module_form,className),...otherProps,children:children})}));Form.displayName="Form";try{Form.displayName="Form",Form.__docgenInfo={description:"",displayName:"Form",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Form/Form.tsx#Form"]={docgenInfo:Form.__docgenInfo,name:"Form",path:"src/shared/ui/Form/Form.tsx#Form"})}catch(__react_docgen_typescript_loader_error){}},"./shared/ui/Form/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{l:function(){return _Form__WEBPACK_IMPORTED_MODULE_0__.l}});var _Form__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./shared/ui/Form/Form.tsx")},"./shared/ui/Heading/Heading.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{D:function(){return Heading}});__webpack_require__("../node_modules/react/index.js");var clsx_m=__webpack_require__("../node_modules/clsx/dist/clsx.m.js"),Heading_module={light:"gqo9SKvl",dark:"ujcQMTiI",outer:"VRbWTvZU","size-h1":"ll1sJp8N","size-h2":"hZgKreaE","size-h3":"rTWMOjAS","size-h4":"CfQ_tT6C","size-h5":"pm5zf6Gv","size-h6":"LyYvp4xT","weight-light":"UJ267KIu","weight-normal":"DiCilxXz","weight-bold":"x6PGTplH",upper:"cAjMeL1t"},jsx_runtime=__webpack_require__("../node_modules/react/jsx-runtime.js");const Heading=_ref=>{let{as:Elem="p",size:size="h1",weight:weight="bold",uppercase:uppercase=!1,children:children,className:className}=_ref;return(0,jsx_runtime.jsx)(Elem,{className:(0,clsx_m.A)(Heading_module.outer,className,Heading_module[`size-${size}`],Heading_module[`weight-${weight}`],{[Heading_module.upper]:uppercase}),children:children})};Heading.displayName="Heading";try{Heading.displayName="Heading",Heading.__docgenInfo={description:"",displayName:"Heading",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}},size:{defaultValue:{value:"h1"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}},weight:{defaultValue:{value:"bold"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"normal"'},{value:'"bold"'}]}},uppercase:{defaultValue:{value:"false"},description:"",name:"uppercase",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Heading/Heading.tsx#Heading"]={docgenInfo:Heading.__docgenInfo,name:"Heading",path:"src/shared/ui/Heading/Heading.tsx#Heading"})}catch(__react_docgen_typescript_loader_error){}},"./shared/ui/Heading/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{D:function(){return _Heading__WEBPACK_IMPORTED_MODULE_0__.D}});var _Heading__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./shared/ui/Heading/Heading.tsx")},"./shared/ui/TextField/TextField.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return TextField}});var react=__webpack_require__("../node_modules/react/index.js"),clsx_m=__webpack_require__("../node_modules/clsx/dist/clsx.m.js"),TextField_module_fieldWrapper="IbR1a_5W",TextField_module_fieldWrapper_error="zQ88zS58",TextField_module_label="hzEyBse6",TextField_module_field="lu2nOaTh",TextField_module_label_top="iRwho7BT",TextField_module_error="OgO2dF33",jsx_runtime=__webpack_require__("../node_modules/react/jsx-runtime.js");const TextField=(0,react.memo)((0,react.forwardRef)(((_ref,ref)=>{let{type:type="text",label:label,defaultValue:defaultValue,placeholder:placeholder,errorMessage:errorMessage,classNames:classNames,onChange:onChange,onFocus:onFocus,onBlur:onBlur,...other}=_ref;const[value,setValue]=(0,react.useState)(defaultValue||""),[isFocused,setIsFocused]=(0,react.useState)(!1),inputId=(0,react.useId)();return(0,jsx_runtime.jsxs)("div",{className:classNames?.wrapper,children:[(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m.A)(TextField_module_fieldWrapper,{[TextField_module_fieldWrapper_error]:errorMessage}),children:[label&&(0,jsx_runtime.jsx)("label",{className:(0,clsx_m.A)(TextField_module_label,{[TextField_module_label_top]:isFocused||value||defaultValue}),htmlFor:inputId,children:label}),(0,jsx_runtime.jsx)("input",{ref:ref,className:(0,clsx_m.A)(TextField_module_field,classNames?.field),id:inputId,type:type,value:value,...!label&&placeholder?{placeholder:placeholder}:{},onChange:e=>{setValue(e.currentTarget.value),onChange?.(e)},onFocus:e=>{setIsFocused(!0),onFocus?.(e)},onBlur:e=>{setIsFocused(!1),onBlur?.(e)},...other})]}),errorMessage&&(0,jsx_runtime.jsx)("div",{className:TextField_module_error,children:errorMessage})]})})));try{TextField.displayName="TextField",TextField.__docgenInfo={description:"",displayName:"TextField",props:{type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"email"'},{value:'"password"'},{value:'"tel"'},{value:'"text"'},{value:'"url"'}]}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"undefined"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"ReactNode"}},classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"TextFieldClassNames"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/TextField/TextField.tsx#TextField"]={docgenInfo:TextField.__docgenInfo,name:"TextField",path:"src/shared/ui/TextField/TextField.tsx#TextField"})}catch(__react_docgen_typescript_loader_error){}},"./shared/ui/TextField/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return _TextField__WEBPACK_IMPORTED_MODULE_0__.A}});var _TextField__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./shared/ui/TextField/TextField.tsx")}}]);