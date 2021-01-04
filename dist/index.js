"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("atom"),t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},i="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,r=i||s||Function("return this")(),n=r.Symbol,o=Object.prototype,a=o.hasOwnProperty,d=o.toString,l=n?n.toStringTag:void 0;var c=function(e){var t=a.call(e,l),i=e[l];try{e[l]=void 0;var s=!0}catch(e){}var r=d.call(e);return s&&(t?e[l]=i:delete e[l]),r},h=Object.prototype.toString;var u=function(e){return h.call(e)},p=n?n.toStringTag:void 0;var g=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":p&&p in Object(e)?c(e):u(e)};var f=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)};var m,b=function(e){if(!f(e))return!1;var t=g(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},v=r["__core-js_shared__"],y=(m=/[^.]+$/.exec(v&&v.keys&&v.keys.IE_PROTO||""))?"Symbol(src)_1."+m:"";var w=function(e){return!!y&&y in e},_=Function.prototype.toString;var I=function(e){if(null!=e){try{return _.call(e)}catch(e){}try{return e+""}catch(e){}}return""},L=/^\[object .+?Constructor\]$/,E=Function.prototype,D=Object.prototype,M=E.toString,P=D.hasOwnProperty,j=RegExp("^"+M.call(P).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var C=function(e){return!(!f(e)||w(e))&&(b(e)?j:L).test(I(e))};var A=function(e,t){return null==e?void 0:e[t]};var O=function(e,t){var i=A(e,t);return C(i)?i:void 0},U=O(Object,"create");var S=function(){this.__data__=U?U(null):{},this.size=0};var $=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},N=Object.prototype.hasOwnProperty;var k=function(e){var t=this.__data__;if(U){var i=t[e];return"__lodash_hash_undefined__"===i?void 0:i}return N.call(t,e)?t[e]:void 0},T=Object.prototype.hasOwnProperty;var x=function(e){var t=this.__data__;return U?void 0!==t[e]:T.call(t,e)};var R=function(e,t){var i=this.__data__;return this.size+=this.has(e)?0:1,i[e]=U&&void 0===t?"__lodash_hash_undefined__":t,this};function F(e){var t=-1,i=null==e?0:e.length;for(this.clear();++t<i;){var s=e[t];this.set(s[0],s[1])}}F.prototype.clear=S,F.prototype.delete=$,F.prototype.get=k,F.prototype.has=x,F.prototype.set=R;var B=F;var z=function(){this.__data__=[],this.size=0};var q=function(e,t){return e===t||e!=e&&t!=t};var V=function(e,t){for(var i=e.length;i--;)if(q(e[i][0],t))return i;return-1},G=Array.prototype.splice;var K=function(e){var t=this.__data__,i=V(t,e);return!(i<0)&&(i==t.length-1?t.pop():G.call(t,i,1),--this.size,!0)};var W=function(e){var t=this.__data__,i=V(t,e);return i<0?void 0:t[i][1]};var Y=function(e){return V(this.__data__,e)>-1};var X=function(e,t){var i=this.__data__,s=V(i,e);return s<0?(++this.size,i.push([e,t])):i[s][1]=t,this};function H(e){var t=-1,i=null==e?0:e.length;for(this.clear();++t<i;){var s=e[t];this.set(s[0],s[1])}}H.prototype.clear=z,H.prototype.delete=K,H.prototype.get=W,H.prototype.has=Y,H.prototype.set=X;var J=H,Q=O(r,"Map");var Z=function(){this.size=0,this.__data__={hash:new B,map:new(Q||J),string:new B}};var ee=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var te=function(e,t){var i=e.__data__;return ee(t)?i["string"==typeof t?"string":"hash"]:i.map};var ie=function(e){var t=te(this,e).delete(e);return this.size-=t?1:0,t};var se=function(e){return te(this,e).get(e)};var re=function(e){return te(this,e).has(e)};var ne=function(e,t){var i=te(this,e),s=i.size;return i.set(e,t),this.size+=i.size==s?0:1,this};function oe(e){var t=-1,i=null==e?0:e.length;for(this.clear();++t<i;){var s=e[t];this.set(s[0],s[1])}}oe.prototype.clear=Z,oe.prototype.delete=ie,oe.prototype.get=se,oe.prototype.has=re,oe.prototype.set=ne;var ae=oe;var de=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this};var le=function(e){return this.__data__.has(e)};function ce(e){var t=-1,i=null==e?0:e.length;for(this.__data__=new ae;++t<i;)this.add(e[t])}ce.prototype.add=ce.prototype.push=de,ce.prototype.has=le;var he=ce;var ue=function(e,t,i,s){for(var r=e.length,n=i+(s?1:-1);s?n--:++n<r;)if(t(e[n],n,e))return n;return-1};var pe=function(e){return e!=e};var ge=function(e,t,i){for(var s=i-1,r=e.length;++s<r;)if(e[s]===t)return s;return-1};var fe=function(e,t,i){return t==t?ge(e,t,i):ue(e,pe,i)};var me=function(e,t){return!!(null==e?0:e.length)&&fe(e,t,0)>-1};var be=function(e,t,i){for(var s=-1,r=null==e?0:e.length;++s<r;)if(i(t,e[s]))return!0;return!1};var ve=function(e,t){return e.has(t)},ye=O(r,"Set");var we=function(){};var _e=function(e){var t=-1,i=Array(e.size);return e.forEach((function(e){i[++t]=e})),i},Ie=ye&&1/_e(new ye([,-0]))[1]==1/0?function(e){return new ye(e)}:we;var Le=function(e,t,i){var s=-1,r=me,n=e.length,o=!0,a=[],d=a;if(i)o=!1,r=be;else if(n>=200){var l=t?null:Ie(e);if(l)return _e(l);o=!1,r=ve,d=new he}else d=t?[]:a;e:for(;++s<n;){var c=e[s],h=t?t(c):c;if(c=i||0!==c?c:0,o&&h==h){for(var u=d.length;u--;)if(d[u]===h)continue e;t&&d.push(h),a.push(c)}else r(d,h,i)||(d!==a&&d.push(h),a.push(c))}return a};var Ee=function(e){return e&&e.length?Le(e):[]};function De(e,t,i){const s=i.map(e=>"  • "+e);atom.notifications.addWarning("[Linter] "+e,{dismissable:!0,detail:`${t}\n${s.join("\n")}`})}const Me=new Set(["error","warning","info"]);function Pe(t,i){const s=[];if(Array.isArray(i)){let t=!1,r=!1,n=!1,o=!1,a=!1,d=!1,l=!1,c=!1,h=!1;for(let u=0,{length:p}=i;u<p;++u){const p=i[u],{reference:g}=p;if(!r&&p.icon&&"string"!=typeof p.icon&&(r=!0,s.push("Message.icon must be a string")),o||p.location&&"object"==typeof p.location&&"string"==typeof p.location.file&&"object"==typeof p.location.position&&p.location.position){if(!o){const t=e.Range.fromObject(p.location.position);(Number.isNaN(t.start.row)||Number.isNaN(t.start.column)||Number.isNaN(t.end.row)||Number.isNaN(t.end.column))&&(o=!0,s.push("Message.location.position should not contain NaN coordinates"))}}else o=!0,s.push("Message.location must be valid");if(d||!p.solutions||Array.isArray(p.solutions)||(d=!0,s.push("Message.solutions must be valid")),l||!g||"object"==typeof g&&"string"==typeof g.file&&"object"==typeof g.position&&g.position){if(!l&&g){const t=e.Point.fromObject(g.position);(Number.isNaN(t.row)||Number.isNaN(t.column))&&(l=!0,s.push("Message.reference.position should not contain NaN coordinates"))}}else l=!0,s.push("Message.reference must be valid");n||"string"==typeof p.excerpt||(n=!0,s.push("Message.excerpt must be a string")),a||Me.has(p.severity)||(a=!0,s.push("Message.severity must be 'error', 'warning' or 'info'")),!t&&p.url&&"string"!=typeof p.url&&(t=!0,s.push("Message.url must be a string")),!c&&p.description&&"function"!=typeof p.description&&"string"!=typeof p.description&&(c=!0,s.push("Message.description must be a function or string")),!h&&p.linterName&&"string"!=typeof p.linterName&&(h=!0,s.push("Message.linterName must be a string"))}}else s.push("Linter Result must be an Array");return!s.length||(De("Invalid Linter Result received",`These issues were encountered while processing messages from a linter named '${t}'`,s),!1)}class je{constructor(){this.providers=new Set,this.subscriptions=new e.CompositeDisposable}add(e){!this.providers.has(e)&&function(e){const t=[];return e&&"object"==typeof e?("string"!=typeof e.name&&t.push("UI.name must be a string"),"function"!=typeof e.didBeginLinting&&t.push("UI.didBeginLinting must be a function"),"function"!=typeof e.didFinishLinting&&t.push("UI.didFinishLinting must be a function"),"function"!=typeof e.render&&t.push("UI.render must be a function"),"function"!=typeof e.dispose&&t.push("UI.dispose must be a function")):t.push("UI must be an object"),!t.length||(De("Invalid UI received",`These issues were encountered while registering the UI named '${e&&e.name?e.name:"Unknown"}'`,t),!1)}(e)&&(this.subscriptions.add(e),this.providers.add(e))}delete(e){this.providers.has(e)&&(e.dispose(),this.providers.delete(e))}getProviders(){return Array.from(this.providers)}render(e){this.providers.forEach((function(t){t.render(e)}))}didBeginLinting(e,t=null){this.providers.forEach((function(i){i.didBeginLinting(e,t)}))}didFinishLinting(e,t=null){this.providers.forEach((function(i){i.didFinishLinting(e,t)}))}dispose(){this.providers.clear(),this.subscriptions.dispose()}}const Ce="__$sb_linter_activated",Ae="__$sb_linter_request_last_received";function Oe(e,t,i){return!(t&&!e.lintsOnChange)&&i.some((function(t){return e.grammarScopes.includes(t)}))}function Ue(e){return Ee(e.getCursors().reduce((e,t)=>e.concat(t.getScopeDescriptor().getScopesArray()),["*"]))}let Se;function $e(e,t,i){if(!e)return!0;if(i){let t=null;const i=atom.project.getPaths();for(let s=0,{length:r}=i;s<r;++s){const r=i[s];if(0===e.indexOf(r)){t=atom.project.getRepositories()[s];break}}if(t&&t.isPathIgnored(e))return!0}const s="win32"===process.platform?e.replace(/\\/g,"/"):e;return Se||(Se=require("minimatch")),Se(s,t)}function Ne(e){const{reference:t,location:i}=e;e.key=["$LINTER:"+e.linterName,`$LOCATION:${i.file}$${i.position.start.row}$${i.position.start.column}$${i.position.end.row}$${i.position.end.column}`,t?`$REFERENCE:${t.file}$${t.position?`${t.position.row}$${t.position.column}`:""}`:"$REFERENCE:null","$EXCERPT:"+e.excerpt,"$SEVERITY:"+e.severity,e.icon?"$ICON:"+e.icon:"$ICON:null",e.url?"$URL:"+e.url:"$URL:null","string"==typeof e.description?"$DESCRIPTION:"+e.description:"$DESCRIPTION:null"].join("")}function ke(t,i){for(let s=0,{length:r}=i;s<r;++s){const r=i[s],{reference:n}=r;if(Array.isArray(r.location.position)&&(r.location.position=e.Range.fromObject(r.location.position)),n&&Array.isArray(n.position)&&(n.position=e.Point.fromObject(n.position)),r.solutions&&r.solutions.length)for(let t,i=0,s=r.solutions.length;i<s;i++)t=r.solutions[i],Array.isArray(t.position)&&(t.position=e.Range.fromObject(t.position));r.version=2,r.linterName||(r.linterName=t),Ne(r)}}function Te(e,t){if(void 0===e||void 0===t)return null;if(!t.length)return{oldKept:[],oldRemoved:[],newAdded:e};if(!e.length)return{oldKept:[],oldRemoved:t,newAdded:[]};const i=function(e){const t=new Map;for(let i=0,{length:s}=e;i<s;++i){const s=e[i];t.set(s.key,s)}return t}(t),s=new Set,r=new Map;for(let t=0,n=e.length;t<n;t++){const n=e[t];i.has(n.key)?r.set(n.key,n):s.add(n)}const n=Array.from(i.keys()),o=Array.from(r.keys()),a=n.filter(e=>!o.includes(e)),d=new Set;for(let e=0,t=a.length;e<t;e++)d.add(i.get(a[e]));return{oldKept:Array.from(r.values()),oldRemoved:d?Array.from(d):[],newAdded:Array.from(s)}}function xe(e,t){t.length&&Array.prototype.push.apply(e,t)}class Re{constructor(t,i){this.indie=t,this.scope="project",this.version=i,this.emitter=new e.Emitter,this.messages=new Map,this.subscriptions=new e.CompositeDisposable,this.subscriptions.add(this.emitter)}get name(){return this.indie.name}getMessages(){const e=[];return this.messages.forEach(t=>{xe(e,t)}),e}clearMessages(){this.subscriptions.disposed||(this.emitter.emit("did-update",[]),this.messages.clear())}setMessages(e,t=null){if("string"!=typeof e||!Array.isArray(t))throw new Error("Invalid Parameters to setMessages()");!this.subscriptions.disposed&&Pe(this.name,t)&&(t.forEach((function(t){if(t.location.file!==e)throw console.debug("[Linter-UI-Default] Expected File",e,"Message",t),new Error("message.location.file does not match the given filePath")})),ke(this.name,t),this.messages.set(e,t),this.emitter.emit("did-update",this.getMessages()))}setAllMessages(e){if(!this.subscriptions.disposed&&(Array.isArray(e)&&!atom.inDevMode()||Pe(this.name,e))){ke(this.name,e),this.messages.clear();for(let t=0,{length:i}=e;t<i;++t){const i=e[t],s=i.location.file;let r=this.messages.get(s);r||this.messages.set(s,r=[]),r.push(i)}this.emitter.emit("did-update",this.getMessages())}}onDidUpdate(e){return this.emitter.on("did-update",e)}onDidDestroy(e){return this.emitter.on("did-destroy",e)}dispose(){this.emitter.emit("did-destroy"),this.subscriptions.dispose(),this.messages.clear()}}class Fe{constructor(){this.emitter=new e.Emitter,this.delegates=new Set,this.subscriptions=new e.CompositeDisposable,this.subscriptions.add(this.emitter)}register(e,t){if(!function(e){const t=[];return e&&"object"==typeof e?"string"!=typeof e.name&&t.push("Indie.name must be a string"):t.push("Indie must be an object"),!t.length||(De("Invalid Indie received",`These issues were encountered while registering an Indie Linter named '${e&&e.name?e.name:"Unknown"}'`,t),!1)}(e))throw new Error("Error registering Indie Linter");const i=new Re(e,t);return this.delegates.add(i),i.onDidDestroy(()=>{this.delegates.delete(i)}),i.onDidUpdate(e=>{this.emitter.emit("did-update",{linter:i,messages:e})}),this.emitter.emit("observe",i),i}getProviders(){return Array.from(this.delegates)}observe(e){return this.delegates.forEach(e),this.emitter.on("observe",e)}onDidUpdate(e){return this.emitter.on("did-update",e)}dispose(){for(const e of this.delegates)e.dispose();this.subscriptions.dispose()}}var Be=function(){return r.Date.now()};var ze=function(e){return null!=e&&"object"==typeof e};var qe=function(e){return"symbol"==typeof e||ze(e)&&"[object Symbol]"==g(e)},Ve=/^\s+|\s+$/g,Ge=/^[-+]0x[0-9a-f]+$/i,Ke=/^0b[01]+$/i,We=/^0o[0-7]+$/i,Ye=parseInt;var Xe=function(e){if("number"==typeof e)return e;if(qe(e))return NaN;if(f(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=f(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(Ve,"");var i=Ke.test(e);return i||We.test(e)?Ye(e.slice(2),i?2:8):Ge.test(e)?NaN:+e},He=Math.max,Je=Math.min;var Qe=function(e,t,i){var s,r,n,o,a,d,l=0,c=!1,h=!1,u=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var i=s,n=r;return s=r=void 0,l=t,o=e.apply(n,i)}function g(e){return l=e,a=setTimeout(b,t),c?p(e):o}function m(e){var i=e-d;return void 0===d||i>=t||i<0||h&&e-l>=n}function b(){var e=Be();if(m(e))return v(e);a=setTimeout(b,function(e){var i=t-(e-d);return h?Je(i,n-(e-l)):i}(e))}function v(e){return a=void 0,u&&s?p(e):(s=r=void 0,o)}function y(){var e=Be(),i=m(e);if(s=arguments,r=this,d=e,i){if(void 0===a)return g(d);if(h)return clearTimeout(a),a=setTimeout(b,t),p(d)}return void 0===a&&(a=setTimeout(b,t)),o}return t=Xe(t)||0,f(i)&&(c=!!i.leading,n=(h="maxWait"in i)?He(Xe(i.maxWait)||0,t):n,u="trailing"in i?!!i.trailing:u),y.cancel=function(){void 0!==a&&clearTimeout(a),l=0,s=d=r=a=void 0},y.flush=function(){return void 0===a?o:v(Be())},y};class Ze{constructor(){this.emitter=new e.Emitter,this.messages=[],this.messagesMap=new Set,this.subscriptions=new e.CompositeDisposable,this.debouncedUpdate=Qe(this.update,100,{leading:!0}),this.subscriptions.add(this.emitter)}set({messages:e,linter:t,buffer:i}){let s=null;for(const e of this.messagesMap)if(e.buffer===i&&e.linter===t){s=e;break}s?(s.messages=e,s.changed=!0):this.messagesMap.add({messages:e,linter:t,buffer:i,oldMessages:[],changed:!0,deleted:!1}),this.debouncedUpdate()}update(){const e={added:[],removed:[],messages:[]};for(const t of this.messagesMap){if(t.deleted){xe(e.removed,t.oldMessages),this.messagesMap.delete(t);continue}if(!t.changed){xe(e.messages,t.oldMessages);continue}const i=Te(t.messages,t.oldMessages);if(null!==i){const{oldKept:s,oldRemoved:r,newAdded:n}=i;xe(e.added,n),xe(e.removed,r);const o=n.concat(s);xe(e.messages,o),t.oldMessages=o}}(e.added.length||e.removed.length)&&(this.messages=e.messages,this.emitter.emit("did-update-messages",e))}onDidUpdateMessages(e){return this.emitter.on("did-update-messages",e)}deleteByBuffer(e){for(const t of this.messagesMap)t.buffer===e&&(t.deleted=!0);this.debouncedUpdate()}deleteByLinter(e){for(const t of this.messagesMap)t.linter===e&&(t.deleted=!0);this.debouncedUpdate()}dispose(){this.subscriptions.dispose()}}class et{constructor(){this.emitter=new e.Emitter,this.linters=new Set,this.subscriptions=new e.CompositeDisposable,this.activeNotifications=new Set,this.subscriptions.add(atom.config.observe("linter.lintOnChange",e=>{this.lintOnChange=e})),this.subscriptions.add(atom.config.observe("core.excludeVcsIgnoredPaths",e=>{this.ignoreVCS=e})),this.subscriptions.add(atom.config.observe("linter.ignoreGlob",e=>{this.ignoreGlob=e})),this.subscriptions.add(atom.config.observe("linter.lintPreviewTabs",e=>{this.lintPreviewTabs=e})),this.subscriptions.add(atom.config.observe("linter.disabledProviders",e=>{this.disabledProviders=e})),this.subscriptions.add(this.emitter)}hasLinter(e){return this.linters.has(e)}addLinter(e){(function(e){const t=[];return e&&"object"==typeof e?("string"!=typeof e.name&&t.push("Linter.name must be a string"),("string"!=typeof e.scope||"file"!==e.scope&&"project"!==e.scope)&&t.push("Linter.scope must be either 'file' or 'project'"),"boolean"!=typeof e.lintsOnChange&&t.push("Linter.lintsOnChange must be a boolean"),Array.isArray(e.grammarScopes)||t.push("Linter.grammarScopes must be an Array"),"function"!=typeof e.lint&&t.push("Linter.lint must be a function")):t.push("Linter must be an object"),!t.length||(De("Invalid Linter received",`These issues were encountered while registering a Linter named '${e&&e.name?e.name:"Unknown"}'`,t),!1)})(e)&&(e[Ce]=!0,void 0===e.__$sb_linter_request_latest&&(e.__$sb_linter_request_latest=0),void 0===e[Ae]&&(e[Ae]=0),e.__$sb_linter_version=2,this.linters.add(e))}getProviders(){return Array.from(this.linters)}deleteLinter(e){this.linters.has(e)&&(e[Ce]=!1,this.linters.delete(e))}async lint({onChange:e,editor:t}){const i=t.getPath();if(e&&!this.lintOnChange||$e(t.getPath(),this.ignoreGlob,this.ignoreVCS)||!this.lintPreviewTabs&&atom.workspace.getActivePane().getPendingItem()===t)return!1;const s=Ue(t),r=[];for(const n of this.linters){if(!Oe(n,e,s))continue;if(this.disabledProviders.includes(n.name))continue;const o=++n.__$sb_linter_request_latest,a="file"===n.scope?t.getBuffer():null,d="file"===n.scope?i:null;this.emitter.emit("did-begin-linting",{number:o,linter:n,filePath:d}),r.push(new Promise((function(e){e(n.lint(t))})).then(e=>{if(this.emitter.emit("did-finish-linting",{number:o,linter:n,filePath:d}),n[Ae]>=o||!n[Ce]||a&&!a.isAlive())return;if(n[Ae]=o,a&&!a.isAlive())return;if(null===e)return;let t=!0;!atom.inDevMode()&&Array.isArray(e)||(t=Pe(n.name,e)),t&&(ke(n.name,e),this.emitter.emit("did-update-messages",{messages:e,linter:n,buffer:a}))},e=>{this.emitter.emit("did-finish-linting",{number:o,linter:n,filePath:d}),console.error("[Linter] Error running "+n.name,e);const t="[Linter] Error running "+n.name;if(Array.from(this.activeNotifications).some(e=>e.getOptions().detail===t))return;const i=atom.notifications.addError(t,{detail:"See Console for more info.",dismissable:!0,buttons:[{text:"Open Console",onDidClick:()=>{atom.openDevTools(),i.dismiss()}},{text:"Cancel",onDidClick:()=>{i.dismiss()}}]})}))}return await Promise.all(r),!0}onDidUpdateMessages(e){return this.emitter.on("did-update-messages",e)}onDidBeginLinting(e){return this.emitter.on("did-begin-linting",e)}onDidFinishLinting(e){return this.emitter.on("did-finish-linting",e)}dispose(){this.activeNotifications.forEach(e=>e.dismiss()),this.activeNotifications.clear(),this.linters.clear(),this.subscriptions.dispose()}}class tt{constructor(t){if(!atom.workspace.isTextEditor(t))throw new Error("EditorLinter expects a valid TextEditor");const i=t.getBuffer(),s=Qe(()=>{this.emitter.emit("should-lint",!1)},50,{leading:!0});this.editor=t,this.emitter=new e.Emitter,this.subscriptions=new e.CompositeDisposable,this.subscriptions.add(this.editor.onDidDestroy(()=>this.dispose())),this.subscriptions.add(this.editor.onDidSave(s)),this.subscriptions.add(i.onDidReload(s)),this.subscriptions.add(this.subscriptiveObserve(atom.config,"linter.lintOnChangeInterval",e=>i.onDidChange(Qe(()=>{this.emitter.emit("should-lint",!0)},e))))}getEditor(){return this.editor}lint(e=!1){this.emitter.emit("should-lint",e)}onShouldLint(e){return this.emitter.on("should-lint",e)}onDidDestroy(e){return this.emitter.on("did-destroy",e)}dispose(){this.emitter.emit("did-destroy"),this.subscriptions.dispose(),this.emitter.dispose()}subscriptiveObserve(t,i,s){let r=null;const n=t.observe(i,e=>{r&&r.dispose(),r=s.call(this,e)});return new e.Disposable((function(){n.dispose(),r&&r.dispose()}))}}class it{constructor(){this.emitter=new e.Emitter,this.subscriptions=new e.CompositeDisposable,this.editorLinters=new Map,this.subscriptions.add(this.emitter),this.subscriptions.add(atom.config.observe("linter.lintOnOpen",e=>{this.lintOnOpen=e}))}activate(){this.subscriptions.add(atom.workspace.observeTextEditors(e=>{this.createFromTextEditor(e)}))}get(e){return this.editorLinters.get(e)}createFromTextEditor(e){let t=this.editorLinters.get(e);return t||(t=new tt(e),t.onDidDestroy(()=>{this.editorLinters.delete(e)}),this.editorLinters.set(e,t),this.emitter.emit("observe",t),this.lintOnOpen&&t.lint(),t)}hasSibling(e){const t=e.getEditor().getBuffer();return Array.from(this.editorLinters.keys()).some(e=>e.getBuffer()===t)}observe(e){return this.editorLinters.forEach(e),this.emitter.on("observe",e)}dispose(){for(const e of this.editorLinters.values())e.dispose();this.subscriptions.dispose()}}let st,rt,nt,ot;function at(e){let t;if(e&&"object"==typeof e&&"string"==typeof e.name)t=e.name;else{if("string"!=typeof e)throw new Error("Unknown object passed to formatItem()");t=e}return"  - "+t}function dt(e,t){return e.name.localeCompare(t.name)}class lt{constructor(){this.emitter=new e.Emitter,this.subscriptions=new e.CompositeDisposable,this.subscriptions.add(this.emitter),this.subscriptions.add(atom.commands.add("atom-workspace",{"linter:enable-linter":()=>this.enableLinter(),"linter:disable-linter":()=>this.disableLinter()})),this.subscriptions.add(atom.commands.add("atom-text-editor:not([mini])",{"linter:lint":()=>this.lint(),"linter:debug":()=>this.debug(),"linter:toggle-active-editor":()=>this.toggleActiveEditor()}))}lint(){this.emitter.emit("should-lint")}debug(){this.emitter.emit("should-debug")}enableLinter(){this.emitter.emit("should-toggle-linter","enable")}disableLinter(){this.emitter.emit("should-toggle-linter","disable")}toggleActiveEditor(){this.emitter.emit("should-toggle-active-editor")}showDebug(e,t,i){st||(st=require("../package.json"));const s=atom.workspace.getActiveTextEditor(),r=Ue(s),n=e.slice().sort(dt),o=t.slice().sort(dt),a=i.slice().sort(dt),d=o.map(at).join("\n"),l=n.map(at).join("\n"),c=n.filter(e=>Oe(e,!1,r)).map(at).join("\n"),h=r.map(at).join("\n"),u=a.map(at).join("\n"),p=atom.config.get("linter.ignoreGlob"),g=atom.config.get("core.excludeVcsIgnoredPaths"),f=atom.config.get("linter.disabledProviders").map(at).join("\n"),m=$e(s.getPath(),p,g);atom.notifications.addInfo("Linter Debug Info",{detail:["Platform: "+process.platform,"Atom Version: "+atom.getVersion(),"Linter Version: "+st.version,"Opened file is ignored: "+(m?"Yes":"No"),"Matching Linter Providers: \n"+c,"Disabled Linter Providers: \n"+f,"Standard Linter Providers: \n"+l,"Indie Linter Providers: \n"+d,"UI Providers: \n"+u,"Ignore Glob: "+p,"VCS Ignored Paths are excluded: "+g,"Current File Scopes: \n"+h].join("\n"),dismissable:!0})}onShouldLint(e){return this.emitter.on("should-lint",e)}onShouldDebug(e){return this.emitter.on("should-debug",e)}onShouldToggleActiveEditor(e){return this.emitter.on("should-toggle-active-editor",e)}onShouldToggleLinter(e){return this.emitter.on("should-toggle-linter",e)}dispose(){this.subscriptions.dispose()}}class ct{constructor(t,i){this.action=t,this.emitter=new e.Emitter,this.providers=i,this.subscriptions=new e.CompositeDisposable,this.subscriptions.add(this.emitter),this.subscriptions.add(atom.config.observe("linter.disabledProviders",e=>{this.disabledProviders=e}))}async getItems(){return"disable"===this.action?this.providers.filter(e=>!this.disabledProviders.includes(e)):this.disabledProviders}async process(e){if("disable"===this.action)this.disabledProviders.push(e),this.emitter.emit("did-disable",e);else{const t=this.disabledProviders.indexOf(e);-1!==t&&this.disabledProviders.splice(t,1)}atom.config.set("linter.disabledProviders",this.disabledProviders)}async show(){rt||(rt=require("atom-select-list"));const t=new rt({items:await this.getItems(),emptyMessage:"No matches found",elementForItem:e=>{const t=document.createElement("li");return t.textContent=e,t},didConfirmSelection:e=>{this.process(e).catch(e=>console.error("[Linter] Unable to process toggle:",e)).then(()=>this.dispose())},didCancelSelection:()=>{this.dispose()},didConfirmEmptySelection:()=>{this.dispose()}}),i=atom.workspace.addModalPanel({item:t});t.focus(),this.subscriptions.add(new e.Disposable((function(){i.destroy()})))}onDidDispose(e){return this.emitter.on("did-dispose",e)}onDidDisable(e){return this.emitter.on("did-disable",e)}dispose(){this.emitter.emit("did-dispose"),this.subscriptions.dispose()}}class ht{constructor(){this.idleCallbacks=new Set,this.subscriptions=new e.CompositeDisposable,this.commands=new lt,this.subscriptions.add(this.commands),this.commands.onShouldLint(()=>{this.registryEditorsInit();const e=this.registryEditors.get(atom.workspace.getActiveTextEditor());e&&e.lint()}),this.commands.onShouldToggleActiveEditor(()=>{const e=atom.workspace.getActiveTextEditor();this.registryEditorsInit();const t=this.registryEditors.get(e);t?t.dispose():e&&this.registryEditors.createFromTextEditor(e)}),this.commands.onShouldDebug(async()=>{this.registryUIInit(),this.registryIndieInit(),this.registryLintersInit(),this.commands.showDebug(this.registryLinters.getProviders(),this.registryIndie.getProviders(),this.registryUI.getProviders())}),this.commands.onShouldToggleLinter(e=>{this.registryLintersInit();const t=new ct(e,Ee(this.registryLinters.getProviders().map(e=>e.name)));t.onDidDispose(()=>{this.subscriptions.remove(t)}),t.onDidDisable(e=>{const t=this.registryLinters.getProviders().find(t=>t.name===e);t&&(this.registryMessagesInit(),this.registryMessages.deleteByLinter(t))}),t.show(),this.subscriptions.add(t)});const t=window.requestIdleCallback(()=>{this.idleCallbacks.delete(t),this.subscriptions.add(atom.project.onDidChangePaths(()=>{this.commands.lint()}))});this.idleCallbacks.add(t);const i=window.requestIdleCallback(()=>{this.idleCallbacks.delete(i),this.registryEditorsInit()});this.idleCallbacks.add(i)}dispose(){this.idleCallbacks.forEach(e=>window.cancelIdleCallback(e)),this.idleCallbacks.clear(),this.subscriptions.dispose()}registryEditorsInit(){this.registryEditors||(this.registryEditors=new it,this.subscriptions.add(this.registryEditors),this.registryEditors.observe(e=>{e.onShouldLint(t=>{this.registryLintersInit(),this.registryLinters.lint({onChange:t,editor:e.getEditor()})}),e.onDidDestroy(()=>{this.registryMessagesInit(),this.registryEditors.hasSibling(e)||this.registryMessages.deleteByBuffer(e.getEditor().getBuffer())})}),this.registryEditors.activate())}registryLintersInit(){this.registryLinters||(this.registryLinters=new et,this.subscriptions.add(this.registryLinters),this.registryLinters.onDidUpdateMessages(({linter:e,messages:t,buffer:i})=>{this.registryMessagesInit(),this.registryMessages.set({linter:e,messages:t,buffer:i})}),this.registryLinters.onDidBeginLinting(({linter:e,filePath:t})=>{this.registryUIInit(),this.registryUI.didBeginLinting(e,t)}),this.registryLinters.onDidFinishLinting(({linter:e,filePath:t})=>{this.registryUIInit(),this.registryUI.didFinishLinting(e,t)}))}registryIndieInit(){this.registryIndie||(this.registryIndie=new Fe,this.subscriptions.add(this.registryIndie),this.registryIndie.observe(e=>{e.onDidDestroy(()=>{this.registryMessagesInit(),this.registryMessages.deleteByLinter(e)})}),this.registryIndie.onDidUpdate(({linter:e,messages:t})=>{this.registryMessagesInit(),this.registryMessages.set({linter:e,messages:t,buffer:null})}))}registryMessagesInit(){this.registryMessages||(this.registryMessages=new Ze,this.subscriptions.add(this.registryMessages),this.registryMessages.onDidUpdateMessages(e=>{this.registryUIInit(),this.registryUI.render(e)}))}registryUIInit(){this.registryUI||(this.registryUI=new je,this.subscriptions.add(this.registryUI))}addUI(e){this.registryUIInit(),this.registryUI.add(e),this.registryMessagesInit();const{messages:t}=this.registryMessages;t.length&&e.render({added:t,messages:t,removed:[]})}deleteUI(e){this.registryUIInit(),this.registryUI.delete(e)}addLinter(e){this.registryLintersInit(),this.registryLinters.addLinter(e)}deleteLinter(e){this.registryLintersInit(),this.registryLinters.deleteLinter(e),this.registryMessagesInit(),this.registryMessages.deleteByLinter(e)}addIndie(e){return this.registryIndieInit(),this.registryIndie.register(e,2)}}exports.activate=function(){ot=new e.CompositeDisposable,nt=new ht,ot.add(nt),ot.add(atom.packages.onDidActivateInitialPackages((function(){atom.inSpecMode()||require("atom-package-deps").install("linter",!0)})))},exports.consumeLinter=function(t){const i=[].concat(t);for(const e of i)nt.addLinter(e);return new e.Disposable(()=>{for(const e of i)nt.deleteLinter(e)})},exports.consumeUI=function(t){const i=[].concat(t);for(const e of i)nt.addUI(e);return new e.Disposable(()=>{for(const e of i)nt.deleteUI(e)})},exports.deactivate=function(){ot.dispose()},exports.provideIndie=function(){return e=>nt.addIndie(e)};
//# sourceMappingURL=index.js.map