import{InjectedConnector as e}from"./thirdweb-dev-wallets-evm-connectors-injected.browser.esm.9f3f993d.js";import{a as s}from"./index.293c77a4.js";import"./url-bc88b2b6.browser.esm.94115fe4.js";import"./errors-d961f852.browser.esm.61f33de0.js";import"./normalizeChainId-e4cc0175.browser.esm.042707b7.js";class m extends e{constructor(n){const t={...{name:"Zerion",getProvider(){var r;function i(o){if(!!(o!=null&&o.isZerion))return o}if(s(globalThis.window))return(r=globalThis.window.ethereum)!=null&&r.providers?globalThis.window.ethereum.providers.find(i):i(globalThis.window.ethereum)}},...n.options};super({chains:n.chains,options:t,connectorStorage:n.connectorStorage})}}export{m as ZerionConnector};
