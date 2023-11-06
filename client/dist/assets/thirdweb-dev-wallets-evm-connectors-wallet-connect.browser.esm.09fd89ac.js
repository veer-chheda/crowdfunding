import{i as d,b as l,w as z,e as I,a4 as y,h as n,n as r,f as W,aE as k,af as q,_ as K}from"./index.293c77a4.js";import{g as Y}from"./url-bc88b2b6.browser.esm.94115fe4.js";import{W as $,U as L,S as b}from"./errors-d961f852.browser.esm.61f33de0.js";const B=new Set([1,137,10,42161,56]),x="eip155",j="wagmi.requestedChains",N="wallet_addEthereumChain",S="last-used-chain-id";var a=new WeakMap,v=new WeakMap,u=new WeakMap,P=new WeakSet,H=new WeakSet,E=new WeakSet,M=new WeakSet,g=new WeakSet,A=new WeakSet,D=new WeakSet,U=new WeakSet;class it extends ${constructor(e){super({...e,options:{isNewChainsStale:!0,...e.options}}),d(this,U),d(this,D),d(this,A),d(this,g),d(this,M),d(this,E),d(this,H),d(this,P),l(this,"id",z.walletConnect),l(this,"name","WalletConnect"),l(this,"ready",!0),I(this,a,{writable:!0,value:void 0}),I(this,v,{writable:!0,value:void 0}),I(this,u,{writable:!0,value:void 0}),l(this,"onAccountsChanged",t=>{t.length===0?this.emit("disconnect"):t[0]&&this.emit("change",{account:y(t[0])})}),l(this,"onChainChanged",async t=>{const s=Number(t),i=this.isChainUnsupported(s);await n(this,u).setItem(S,String(t)),this.emit("change",{chain:{id:s,unsupported:i}})}),l(this,"onDisconnect",async()=>{await r(this,g,C).call(this,[]),await n(this,u).removeItem(S),this.emit("disconnect")}),l(this,"onDisplayUri",t=>{this.emit("message",{type:"display_uri",data:t})}),l(this,"onConnect",()=>{this.emit("connect",{provider:n(this,a)})}),W(this,u,e.options.storage),r(this,P,O).call(this),this.filteredChains=this.chains.length>50?this.chains.filter(t=>B.has(t.chainId)):this.chains}async connect(){var s;let{chainId:e,pairingTopic:t}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};try{let i=e;if(!i){const f=await n(this,u).getItem(S),c=f?parseInt(f):void 0;c&&!this.isChainUnsupported(c)?i=c:i=(s=this.filteredChains[0])==null?void 0:s.chainId}if(!i)throw new Error("No chains found on connector.");const h=await this.getProvider();this.setupListeners();const p=await r(this,E,T).call(this);if(h.session&&p&&await h.disconnect(),!h.session||p){const f=this.filteredChains.filter(c=>c.chainId!==i).map(c=>c.chainId);this.emit("message",{type:"connecting"}),await h.connect({pairingTopic:t,chains:[i],optionalChains:f.length>0?f:[i]}),await r(this,g,C).call(this,this.filteredChains.map(c=>{let{chainId:Q}=c;return Q}))}const m=await h.enable();if(!m[0])throw new Error("No accounts found on provider.");const _=y(m[0]),w=await this.getChainId(),J=this.isChainUnsupported(w);return{account:_,chain:{id:w,unsupported:J},provider:new k(h)}}catch(i){throw/user rejected/i.test(i==null?void 0:i.message)?new L(i):i}}async disconnect(){const e=()=>{if(!(typeof localStorage>"u"))for(const i in localStorage)i.startsWith("wc@2")&&localStorage.removeItem(i)};e();const t=await this.getProvider();(async()=>{try{await t.disconnect()}catch(i){if(!/No matching key/i.test(i.message))throw i}finally{r(this,M,R).call(this),await r(this,g,C).call(this,[]),e()}})()}async getAccount(){const{accounts:e}=await this.getProvider();if(!e[0])throw new Error("No accounts found on provider.");return y(e[0])}async getChainId(){const{chainId:e}=await this.getProvider();return e}async getProvider(){let{chainId:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(n(this,a)||await r(this,P,O).call(this),e&&await this.switchChain(e),!n(this,a))throw new Error("No provider found.");return n(this,a)}async getSigner(){let{chainId:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const[t,s]=await Promise.all([this.getProvider({chainId:e}),this.getAccount()]);return new k(t,e).getSigner(s)}async isAuthorized(){try{const[e,t]=await Promise.all([this.getAccount(),this.getProvider()]),s=await r(this,E,T).call(this);if(!e)return!1;if(s&&t.session){try{await t.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(e){const t=this.chains.find(s=>s.chainId===e);if(!t)throw new b(`Chain with ID: ${e}, not found on connector.`);try{const s=await this.getProvider(),i=r(this,D,F).call(this),h=r(this,U,G).call(this);if(!i.includes(e)&&h.includes(N)){const m=t.explorers&&t.explorers[0],_=m?{blockExplorerUrls:[m.url]}:{};await s.request({method:N,params:[{chainId:q(t.chainId),chainName:t.name,nativeCurrency:t.nativeCurrency,rpcUrls:Y(t),..._}]});const w=await r(this,A,V).call(this);w.push(e),await r(this,g,C).call(this,w)}return await s.request({method:"wallet_switchEthereumChain",params:[{chainId:q(e)}]}),t}catch(s){const i=typeof s=="string"?s:s==null?void 0:s.message;throw/user rejected request/i.test(i)?new L(s):new b(s)}}async setupListeners(){!n(this,a)||(r(this,M,R).call(this),n(this,a).on("accountsChanged",this.onAccountsChanged),n(this,a).on("chainChanged",this.onChainChanged),n(this,a).on("disconnect",this.onDisconnect),n(this,a).on("session_delete",this.onDisconnect),n(this,a).on("display_uri",this.onDisplayUri),n(this,a).on("connect",this.onConnect))}}async function O(){return n(this,v)||W(this,v,r(this,H,X).call(this)),n(this,v)}async function X(){const{default:o,OPTIONAL_EVENTS:e,OPTIONAL_METHODS:t}=await K(()=>import("./index.es.36607198.js"),["assets/index.es.36607198.js","assets/index.293c77a4.js","assets/index.09a325bf.css"]),[s,...i]=this.filteredChains.map(h=>{let{chainId:p}=h;return p});s&&W(this,a,await o.init({showQrModal:this.options.qrcode!==!1,projectId:this.options.projectId,optionalMethods:t,optionalEvents:e,chains:[s],optionalChains:i,metadata:{name:this.options.dappMetadata.name,description:this.options.dappMetadata.description||"",url:this.options.dappMetadata.url,icons:[this.options.dappMetadata.logoUrl||""]},rpcMap:Object.fromEntries(this.filteredChains.map(h=>[h.chainId,h.rpc[0]||""])),qrModalOptions:this.options.qrModalOptions}))}async function T(){if(r(this,U,G).call(this).includes(N)||!this.options.isNewChainsStale)return!1;const e=await r(this,A,V).call(this),t=this.filteredChains.map(i=>{let{chainId:h}=i;return h}),s=r(this,D,F).call(this);return s.length&&!s.some(i=>t.includes(i))?!1:!t.every(i=>e.includes(i))}function R(){!n(this,a)||(n(this,a).removeListener("accountsChanged",this.onAccountsChanged),n(this,a).removeListener("chainChanged",this.onChainChanged),n(this,a).removeListener("disconnect",this.onDisconnect),n(this,a).removeListener("session_delete",this.onDisconnect),n(this,a).removeListener("display_uri",this.onDisplayUri),n(this,a).removeListener("connect",this.onConnect))}async function C(o){await n(this,u).setItem(j,JSON.stringify(o))}async function V(){const o=await n(this,u).getItem(j);return o?JSON.parse(o):[]}function F(){var e,t,s;if(!n(this,a))return[];const o=(s=(t=(e=n(this,a).session)==null?void 0:e.namespaces[x])==null?void 0:t.chains)==null?void 0:s.map(i=>parseInt(i.split(":")[1]||""));return o!=null?o:[]}function G(){var e,t;if(!n(this,a))return[];const o=(t=(e=n(this,a).session)==null?void 0:e.namespaces[x])==null?void 0:t.methods;return o!=null?o:[]}export{it as WalletConnectConnector};
