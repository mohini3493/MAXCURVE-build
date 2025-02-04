(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{3431:function(e,t,a){"use strict";a.d(t,{ZP:function(){return s}});let EmailJSResponseStatus=class EmailJSResponseStatus{constructor(e=0,t="Network Error"){this.status=e,this.text=t}};let i={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!=typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},buildOptions=e=>e?"string"==typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{},sendPost=async(e,t,a={})=>{let s=await fetch(i.origin+e,{method:"POST",headers:a,body:t}),r=await s.text(),o=new EmailJSResponseStatus(s.status,r);if(s.ok)return o;throw o},validateParams=(e,t,a)=>{if(!e||"string"!=typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!=typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a||"string"!=typeof a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},validateTemplateParams=e=>{if(e&&"[object Object]"!==e.toString())throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},isHeadless=e=>e.webdriver||!e.languages||0===e.languages.length,headlessError=()=>new EmailJSResponseStatus(451,"Unavailable For Headless Browser"),validateBlockListParams=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!=typeof t)throw"The BlockList watchVariable has to be a string"},isBlockListDisabled=e=>!e.list?.length||!e.watchVariable,getValue=(e,t)=>e instanceof FormData?e.get(t):e[t],isBlockedValueInParams=(e,t)=>{if(isBlockListDisabled(e))return!1;validateBlockListParams(e.list,e.watchVariable);let a=getValue(t,e.watchVariable);return"string"==typeof a&&e.list.includes(a)},blockedEmailError=()=>new EmailJSResponseStatus(403,"Forbidden"),validateLimitRateParams=(e,t)=>{if("number"!=typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!=typeof t)throw"The LimitRate ID has to be a non-empty string"},getLeftTime=async(e,t,a)=>{let i=Number(await a.get(e)||0);return t-Date.now()+i},isLimitRateHit=async(e,t,a)=>{if(!t.throttle||!a)return!1;validateLimitRateParams(t.throttle,t.id);let i=t.id||e,s=await getLeftTime(i,t.throttle,a);return s>0||(await a.set(i,Date.now().toString()),!1)},limitRateError=()=>new EmailJSResponseStatus(429,"Too Many Requests"),send=async(e,t,a,s)=>{let r=buildOptions(s),o=r.publicKey||i.publicKey,l=r.blockHeadless||i.blockHeadless,n=r.storageProvider||i.storageProvider,m={...i.blockList,...r.blockList},d={...i.limitRate,...r.limitRate};return l&&isHeadless(navigator)?Promise.reject(headlessError()):(validateParams(o,e,t),validateTemplateParams(a),a&&isBlockedValueInParams(m,a))?Promise.reject(blockedEmailError()):await isLimitRateHit(location.pathname,d,n)?Promise.reject(limitRateError()):sendPost("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:o,service_id:e,template_id:t,template_params:a}),{"Content-type":"application/json"})},validateForm=e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},findHTMLForm=e=>"string"==typeof e?document.querySelector(e):e,sendForm=async(e,t,a,s)=>{let r=buildOptions(s),o=r.publicKey||i.publicKey,l=r.blockHeadless||i.blockHeadless,n=i.storageProvider||r.storageProvider,m={...i.blockList,...r.blockList},d={...i.limitRate,...r.limitRate};if(l&&isHeadless(navigator))return Promise.reject(headlessError());let c=findHTMLForm(a);validateParams(o,e,t),validateForm(c);let h=new FormData(c);return isBlockedValueInParams(m,h)?Promise.reject(blockedEmailError()):await isLimitRateHit(location.pathname,d,n)?Promise.reject(limitRateError()):(h.append("lib_version","4.4.1"),h.append("service_id",e),h.append("template_id",t),h.append("user_id",o),sendPost("/api/v1.0/email/send-form",h))};var s={init:(e,t="https://api.emailjs.com")=>{if(!e)return;let a=buildOptions(e);i.publicKey=a.publicKey,i.blockHeadless=a.blockHeadless,i.storageProvider=a.storageProvider,i.blockList=a.blockList,i.limitRate=a.limitRate,i.origin=a.origin||t},send:send,sendForm:sendForm,EmailJSResponseStatus:EmailJSResponseStatus}},9659:function(e,t,a){Promise.resolve().then(a.bind(a,8912)),Promise.resolve().then(a.bind(a,2149)),Promise.resolve().then(a.t.bind(a,8326,23))},8912:function(e,t,a){"use strict";a.r(t);var i=a(7437),s=a(2265),r=a(3431);t.default=()=>{let[e,t]=(0,s.useState)({name:"",phone:"",email:"",message:""}),[a,o]=(0,s.useState)(!1),[l,n]=(0,s.useState)(""),handleChange=a=>{let{name:i,value:s}=a.target;t({...e,[i]:s})},handleSubmit=async t=>{t.preventDefault(),n("");try{await r.ZP.send("service_c9a0zrc","template_dhm2c9q",e,"WU4Z89nqRmAobcx4S"),o(!0)}catch(e){n("Something went wrong, please try again.")}};return a?(0,i.jsxs)("div",{style:{maxWidth:"400px",margin:"0 auto",padding:"20px",textAlign:"center"},children:[(0,i.jsx)("h2",{style:{color:"green"},children:"Your form was successfully submitted!"}),(0,i.jsx)("p",{children:"Our team will contact you soon."})]}):(0,i.jsxs)("div",{children:[(0,i.jsxs)("form",{onSubmit:handleSubmit,children:[(0,i.jsx)("div",{className:"form-grp",children:(0,i.jsx)("input",{type:"text",name:"name",placeholder:"Your Name",value:e.name,onChange:handleChange,required:!0})}),(0,i.jsx)("div",{className:"form-grp",children:(0,i.jsx)("input",{type:"text",name:"phone",placeholder:"Phone Number",value:e.phone,onChange:handleChange})}),(0,i.jsx)("div",{className:"form-grp",children:(0,i.jsx)("input",{type:"email",name:"email",placeholder:"Email Address",value:e.email,onChange:handleChange,required:!0})}),(0,i.jsx)("div",{className:"form-grp",children:(0,i.jsx)("textarea",{name:"message",placeholder:"Message",value:e.message,onChange:handleChange,required:!0})}),(0,i.jsx)("div",{className:"contact5-btn5 text-left",children:(0,i.jsx)("button",{className:"btn mt-3",type:"submit",children:"Submit Now →"})})]}),l&&(0,i.jsx)("p",{style:{color:"red",marginTop:"15px"},children:l})]})}}},function(e){e.O(0,[278,149,971,472,744],function(){return e(e.s=9659)}),_N_E=e.O()}]);