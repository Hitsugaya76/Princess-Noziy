const 0x28a1b2=_0x1686;(function(_0x38d749,_0x16c8a1){const _0x48d287=_0x1686,_0x2cf610=_0x38d749();while(!![]){try{const _0x4b2031=-parseInt(_0x48d287(0x223))/0x1*(-parseInt(_0x48d287(0x247))/0x2)+parseInt(_0x48d287(0x1df))/0x3+parseInt(_0x48d287(0x21c))/0x4*(-parseInt(_0x48d287(0x230))/0x5)+-parseInt(_0x48d287(0x23e))/0x6*(-parseInt(_0x48d287(0x243))/0x7)+parseInt(_0x48d287(0x20e))/0x8*(parseInt(_0x48d287(0x22a))/0x9)+-parseInt(_0x48d287(0x1ef))/0xa*(-parseInt(_0x48d287(0x249))/0xb)+-parseInt(_0x48d287(0x210))/0xc*(parseInt(_0x48d287(0x1e1))/0xd);if(_0x4b2031===_0x16c8a1)break;else _0x2cf610['push'](_0x2cf610['shift']());}catch(_0x341054){_0x2cf610['push'](_0x2cf610['shift']());}}}(_0x3b63,0xa8ec1),process[_0x28a1b2(0x238)]['NODE_TLS_REJECT_UNAUTHORIZED']='0');import'./config.js';import{createRequire}from'module';import _0x139f29,{join}from'path';import{fileURLToPath,pathToFileURL}from'url';import{platform}from'process';import*as _0x2b2c63 from'ws';import{readdirSync,statSync,unlinkSync,existsSync,readFileSync,watch,rmSync}from'fs';import _0x26d22c from'yargs';import{spawn}from'child_process';import _0x8372fa from'lodash';import _0x46dc83 from'chalk';import _0x4002fd from'syntax-error';import{tmpdir}from'os';import{format}from'util';import{makeWASocket,protoType,serialize}from'./lib/simple.js';import{Low,JSONFile}from'lowdb';import _0x1bd52d from'pino';import{mongoDB,mongoDBV2}from'./lib/mongoDB.js';import _0x449052 from'./lib/store.js';const {DisconnectReason,useMultiFileAuthState}=await import('@adiwajshing/baileys'),{CONNECTING}=_0x2b2c63,{chain}=_0x8372fa,PORT=process[_0x28a1b2(0x238)][_0x28a1b2(0x216)]||process[_0x28a1b2(0x238)][_0x28a1b2(0x214)]||0xbb8;protoType(),serialize(),global[_0x28a1b2(0x217)]=function filename(_0x3887c8=import.meta[_0x28a1b2(0x251)],_0x554717=platform!==_0x28a1b2(0x205)){const _0x3a3e53=_0x28a1b2;return _0x554717?/file:\/\/\//[_0x3a3e53(0x226)](_0x3887c8)?fileURLToPath(_0x3887c8):_0x3887c8:pathToFileURL(_0x3887c8)[_0x3a3e53(0x234)]();},global['dirname']=function dirname(_0x4ae7cb){const _0x4c81cb=_0x28a1b2;return _0x139f29[_0x4c81cb(0x25a)](global[_0x4c81cb(0x217)](_0x4ae7cb,!![]));},global['require']=function require(_0x20da4=import.meta['url']){return createRequire(_0x20da4);},global[_0x28a1b2(0x200)]=(_0x28838e,_0x3f45a7='/',_0x2de2a9={},_0x1ab087)=>(_0x28838e in global[_0x28a1b2(0x25b)]?global[_0x28a1b2(0x25b)][_0x28838e]:_0x28838e)+_0x3f45a7+(_0x2de2a9||_0x1ab087?'?'+new URLSearchParams(Object[_0x28a1b2(0x240)]({..._0x2de2a9,..._0x1ab087?{[_0x1ab087]:global['APIKeys'][_0x28838e in global[_0x28a1b2(0x25b)]?global[_0x28a1b2(0x25b)][_0x28838e]:_0x28838e]}:{}})):''),global['timestamp']={'start':new Date()};function _0x1686(_0x4c6db8,_0x5e5103){const _0x3b63e5=_0x3b63();return _0x1686=function(_0x16862a,_0x3eec2f){_0x16862a=_0x16862a-0x1d9;let _0xb2957d=_0x3b63e5[_0x16862a];return _0xb2957d;},_0x1686(_0x4c6db8,_0x5e5103);}const __dirname=global[_0x28a1b2(0x221)](import.meta[_0x28a1b2(0x251)]);global['opts']=new Object(_0x26d22c(process['argv'][_0x28a1b2(0x21a)](0x2))[_0x28a1b2(0x1dd)](![])[_0x28a1b2(0x202)]()),global['prefix']=new RegExp('^['+(opts[_0x28a1b2(0x256)]||_0x28a1b2(0x1fd))[_0x28a1b2(0x241)](/[|\\{}()[\]^$+*?.\-\^]/g,_0x28a1b2(0x23b))+']'),global['db']=new Low(/https?:\/\//[_0x28a1b2(0x226)](opts['db']||'')?new cloudDBAdapter(opts['db']):/mongodb(\+srv)?:\/\//i[_0x28a1b2(0x226)](opts['db'])?opts[_0x28a1b2(0x236)]?new mongoDBV2(opts['db']):new mongoDB(opts['db']):new JSONFile((opts[''][0x0]?opts[''][0x0]+'':'')+0x28a1b2(0x1ed))),global[_0x28a1b2(0x23f)]=global['db'],global[_0x28a1b2(0x1fe)]=async function loadDatabase(){const _0x54668a=_0x28a1b2;if(global['db'][_0x54668a(0x1e3)])return new Promise(_0x31c30b=>setInterval(async function(){const _0x1d6c8e=_0x54668a;!global['db']['READ']&&(clearInterval(this),_0x31c30b(global['db'][_0x1d6c8e(0x220)]==null?global['loadDatabase']():global['db']['data']));},0x1*0x3e8));if(global['db']['data']!==null)return;global['db'][_0x54668a(0x1e3)]=!![],await global['db']['read']()[_0x54668a(0x246)](console[_0x54668a(0x1f1)]),global['db']['READ']=null,global['db'][_0x54668a(0x220)]={'users':{},'chats':{},'stats':{},'msgs':{},'sticker':{},'settings':{},...global['db'][_0x54668a(0x220)]||{}},global['db'][_0x54668a(0x218)]=chain(global['db']['data']);},loadDatabase(),global[_0x28a1b2(0x225)]=(opts[''][0x0]||'noziy')+0x28a1b2(0x213);const {state,saveState}=_0x449052['useSingleFileAuthState'](global[_0x28a1b2(0x225)]),connectionOptions={'printQRInTerminal':!![],'auth':state,'logger':_0x1bd52d({'level':'silent'}),'browser':[_0x28a1b2(0x1ff),'Safari',_0x28a1b2(0x258)]};global['conn']=makeWASocket(connectionOptions),conn[_0x28a1b2(0x22b)]=![];!opts[_0x28a1b2(0x226)]&&setInterval(async()=>{const _0x3ac2fb=_0x28a1b2;if(global['db'][_0x3ac2fb(0x220)])await global['db'][_0x3ac2fb(0x1e0)]()[_0x3ac2fb(0x246)](console[_0x3ac2fb(0x1f1)]);if(opts['autocleartmp'])try{clearTmp();}catch(_0x4cf694){console[_0x3ac2fb(0x1f1)](_0x4cf694);}},0x3c*0x3e8);if(opts[_0x28a1b2(0x25e)])(await import(_0x28a1b2(0x25c)))['default'](global[_0x28a1b2(0x255)],PORT);async function clearTmp(){const _0x4c8127=_0x28a1b2,_0x15d9c0=[tmpdir(),join(dirname,_0x4c8127(0x1ec))],_0x429693=[];return _0x15d9c0[_0x4c8127(0x1fc)](_0x4b55e8=>readdirSync(_0x4b55e8)[_0x4c8127(0x1fc)](_0x1192e0=>_0x429693[_0x4c8127(0x201)](join(_0x4b55e8,_0x1192e0)))),_0x429693[_0x4c8127(0x1de)](_0x196bea=>{const _0x1b7085=_0x4c8127,_0x1ddad1=statSync(_0x196bea);if(_0x1ddad1[_0x1b7085(0x23d)]()&&Date[_0x1b7085(0x1e7)]()-_0x1ddad1[_0x1b7085(0x222)]>=0x3e8*0x3c*0x1)return unlinkSync(_0x196bea);return![];});}setInterval(async()=>{const _0x459b83=_0x28a1b2;var _0x5af97c=await clearTmp();console['log'](_0x46dc83['cyan'](_0x459b83(0x20b)));},0xea60);async function connectionUpdate(_0x7344c2){const _0x13f9c3=_0x28a1b2,{connection:_0x773cf4,lastDisconnect:_0x5660fe,isNewLogin:_0x3d0986}=_0x7344c2;if(_0x3d0986)conn['isInit']=!![];const _0x1dca7d=_0x5660fe?.['error']?.[_0x13f9c3(0x1f2)]?.[_0x13f9c3(0x245)]||_0x5660fe?.[_0x13f9c3(0x1f1)]?.[_0x13f9c3(0x1f2)]?.[_0x13f9c3(0x254)]?.[_0x13f9c3(0x245)];_0x1dca7d&&_0x1dca7d!==DisconnectReason[_0x13f9c3(0x21e)]&&conn?.['ws'][_0x13f9c3(0x1f4)]!==CONNECTING&&(console[_0x13f9c3(0x252)](await global[_0x13f9c3(0x219)](!![])[_0x13f9c3(0x246)](console[_0x13f9c3(0x1f1)])),global[_0x13f9c3(0x1e6)]['connect']=new Date());if(global['db'][_0x13f9c3(0x220)]==null)loadDatabase();}process['on'](_0x28a1b2(0x24b),console[_0x28a1b2(0x1f1)]);let isInit=!![],handler=await import(_0x28a1b2(0x232));global[_0x28a1b2(0x219)]=async function(_0x246a87){const _0x3950ac=_0x28a1b2;try{const _0x57d324=await import(_0x3950ac(0x244)+Date[_0x3950ac(0x1e7)]())[_0x3950ac(0x246)](console[_0x3950ac(0x1f1)]);if(Object[_0x3950ac(0x204)](_0x57d324||{})['length'])handler=_0x57d324;}catch(_0x488e8b){console['error'](_0x488e8b);}if(_0x246a87){const _0x155491=global['conn'][_0x3950ac(0x1f0)];try{global[_0x3950ac(0x255)]['ws'][_0x3950ac(0x242)]();}catch{}conn['ev']['removeAllListeners'](),global[_0x3950ac(0x255)]=makeWASocket(connectionOptions,{'chats':_0x155491}),isInit=!![];}return!isInit&&(conn['ev'][_0x3950ac(0x235)](_0x3950ac(0x25d),conn[_0x3950ac(0x23a)]),conn['ev'][_0x3950ac(0x235)](_0x3950ac(0x24c),conn[_0x3950ac(0x209)]),conn['ev'][_0x3950ac(0x235)](_0x3950ac(0x1e9),conn['groupsUpdate']),conn['ev'][_0x3950ac(0x235)](_0x3950ac(0x1fb),conn[_0x3950ac(0x1f8)]),conn['ev'][_0x3950ac(0x235)](_0x3950ac(0x228),conn[_0x3950ac(0x24e)]),conn['ev'][_0x3950ac(0x235)](_0x3950ac(0x22c),conn['credsUpdate'])),conn[_0x3950ac(0x21b)]=_0x3950ac(0x208),conn[_0x3950ac(0x231)]=_0x3950ac(0x20f),conn['spromote']=_0x3950ac(0x259),conn['sdemote']='@user\x20demoted',conn[_0x3950ac(0x24a)]=_0x3950ac(0x22e),conn[_0x3950ac(0x22f)]='Group\x20subject\x20cchanged\x20\x0a@group',conn[_0x3950ac(0x1f6)]=_0x3950ac(0x1fa),conn[_0x3950ac(0x23c)]=_0x3950ac(0x203),conn['handler']=handler[_0x3950ac(0x23a)][_0x3950ac(0x237)](global[_0x3950ac(0x255)]),conn[_0x3950ac(0x209)]=handler['participantsUpdate']['bind'](global[_0x3950ac(0x255)]),conn[_0x3950ac(0x1ee)]=handler['groupsUpdate'][_0x3950ac(0x237)](global[_0x3950ac(0x255)]),conn[_0x3950ac(0x1f8)]=handler[_0x3950ac(0x1e8)][_0x3950ac(0x237)](global[_0x3950ac(0x255)]),conn[_0x3950ac(0x24e)]=connectionUpdate[_0x3950ac(0x237)](global['conn']),conn[_0x3950ac(0x1d9)]=saveState['bind'](global[_0x3950ac(0x255)],!![]),conn['ev']['on'](_0x3950ac(0x25d),conn[_0x3950ac(0x23a)]),conn['ev']['on'](_0x3950ac(0x24c),conn[_0x3950ac(0x209)]),conn['ev']['on'](_0x3950ac(0x1e9),conn[_0x3950ac(0x1ee)]),conn['ev']['on'](_0x3950ac(0x1fb),conn[_0x3950ac(0x1f8)]),conn['ev']['on']('connection.update',conn[_0x3950ac(0x24e)]),conn['ev']['on']('creds.update',conn[_0x3950ac(0x1d9)]),isInit=![],!![];};const pluginFolder=global[_0x28a1b2(0x221)](join(dirname,_0x28a1b2(0x1da))),pluginFilter=_0xbb4a21=>/\.js$/['test'](_0xbb4a21);function _0x3b63(){const _0x44d86a=['./handler.js','info','toString','off','mongodbv2','bind','env','warn','handler','\x5c$&','sRevoke','isFile','1842LGFZIe','DATABASE','entries','replace','close','5803YVirzk','./handler.js?update=','statusCode','catch','2RtjNpH','--version','11463782tvEGiQ','sDesc','uncaughtException','group-participants.update','ffmpeg','connectionUpdate','Stickers\x20may\x20not\x20animated\x20without\x20libwebp\x20on\x20ffmpeg\x20(--enable-ibwebp\x20while\x20compiling\x20ffmpeg)','\x20updated\x20plugin\x20-\x20\x27','url','log','Please\x20install\x20ffmpeg\x20for\x20sending\x20videos\x20(pkg\x20install\x20ffmpeg)','payload','conn','prefix','syntax\x20error\x20while\x20loading\x20\x27','1.0.0','@user\x20now\x20admin','dirname','APIs','./server.js','messages.upsert','server','credsUpdate','./plugins/index','-hide_banner','ffmpegWebp','exitProcess','map','591687WVMoKf','write','13hakQDF','?update=','READ','color','error\x20require\x20plugin\x20\x27','timestamp','now','deleteUpdate','groups.update','ffprobe','reload','./tmp','database.json','groupsUpdate','10kaikLP','chats','error','output','logger','readyState','new\x20plugin\x20-\x20\x27','sIcon','plugins','onDelete','Stickers\x20may\x20not\x20work\x20without\x20imagemagick\x20if\x20libwebp\x20on\x20ffmpeg\x20doesnt\x20isntalled\x20(pkg\x20install\x20imagemagick)','Group\x20icon\x20changed','message.delete','forEach','‎z/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.,\x5c-','loadDatabase','GURU-BOT','API','push','parse','Group\x20link\x20changed\x20\x0a@revoke','keys','win32','magick','default','Hello,\x20@user\x0aWelcome\x20to\x20@group','participantsUpdate','filter','✅\x20\x20Auto\x20clear\x20\x20|\x20\x20tmp\x20folder\x20cleared','-loglevel','-frames:v','8FSsLgk','Goodbye\x20@user','21231996HpBYHd','freeze','sort','.data.json','SERVER_PORT','localeCompare','PORT','filename','chain','reloadHandler','slice','welcome','44TYzRHb','race','loggedOut','convert','data','dirname','mtimeMs','878765YKwzwW','then','authFile','test','-filter_complex','connection.update','find','1023426MdFMxK','isInit','creds.update','support','Group\x20description\x20changed\x20\x0a@desc','sSubject','11425whDKiQ','bye'];_0x3b63=function(){return _0x44d86a;};return _0x3b63();}global[_0x28a1b2(0x1f7)]={};async function filesInit(){const _0x43f529=_0x28a1b2;for(let _0x3017c8 of readdirSync(pluginFolder)[_0x43f529(0x20a)](pluginFilter)){try{let _0x376b80=global['_filename'](join(pluginFolder,_0x3017c8));const _0x1c22ea=await import(_0x376b80);global[_0x43f529(0x1f7)][_0x3017c8]=_0x1c22ea['default']||_0x1c22ea;}catch(_0xdfcb72){conn[_0x43f529(0x1f3)][_0x43f529(0x1f1)](_0xdfcb72),delete global[_0x43f529(0x1f7)][_0x3017c8];}}}filesInit()[_0x28a1b2(0x224)](_0x201846=>console[_0x28a1b2(0x252)](Object[_0x28a1b2(0x204)](global['plugins'])))[_0x28a1b2(0x246)](console[_0x28a1b2(0x1f1)]),global[_0x28a1b2(0x1eb)]=async(_0x42a3b0,_0x20730e)=>{const _0x5bdab0=_0x28a1b2;if(pluginFilter(_0x20730e)){let _0x387ccb=global[_0x5bdab0(0x217)](join(pluginFolder,_0x20730e),!![]);if(_0x20730e in global[_0x5bdab0(0x1f7)]){if(existsSync(_0x387ccb))conn['logger']['info'](_0x5bdab0(0x250)+_0x20730e+'\x27');else return conn[_0x5bdab0(0x1f3)][_0x5bdab0(0x239)]('deleted\x20plugin\x20-\x20\x27'+_0x20730e+'\x27'),delete global[_0x5bdab0(0x1f7)][_0x20730e];}else conn[_0x5bdab0(0x1f3)][_0x5bdab0(0x233)](_0x5bdab0(0x1f5)+_0x20730e+'\x27');let _0x1320dd=_0x4002fd(readFileSync(_0x387ccb),_0x20730e,{'sourceType':'module','allowAwaitOutsideFunction':!![]});if(_0x1320dd)conn[_0x5bdab0(0x1f3)][_0x5bdab0(0x1f1)](_0x5bdab0(0x257)+_0x20730e+'\x27\x0a'+format(_0x1320dd));else try{const _0x106155=await import(global[_0x5bdab0(0x217)](_0x387ccb)+_0x5bdab0(0x1e2)+Date['now']());global[_0x5bdab0(0x1f7)][_0x20730e]=_0x106155[_0x5bdab0(0x207)]||_0x106155;}catch(_0x2c9db1){conn[_0x5bdab0(0x1f3)][_0x5bdab0(0x1f1)](_0x5bdab0(0x1e5)+_0x20730e+'\x0a'+format(_0x2c9db1)+'\x27');}finally{global[_0x5bdab0(0x1f7)]=Object['fromEntries'](Object[_0x5bdab0(0x240)](global[_0x5bdab0(0x1f7)])[_0x5bdab0(0x212)](([_0x8ba9c],[_0x395505])=>_0x8ba9c[_0x5bdab0(0x215)](_0x395505)));}}},Object[_0x28a1b2(0x211)](global['reload']),watch(pluginFolder,global['reload']),await global[_0x28a1b2(0x219)]();async function _quickTest(){const _0x5ca0cb=_0x28a1b2;let _0x2068a0=await Promise['all']([spawn(_0x5ca0cb(0x24d)),spawn(_0x5ca0cb(0x1ea)),spawn(_0x5ca0cb(0x24d),[_0x5ca0cb(0x1db),_0x5ca0cb(0x20c),_0x5ca0cb(0x1f1),_0x5ca0cb(0x227),_0x5ca0cb(0x1e4),_0x5ca0cb(0x20d),'1','-f','webp','-']),spawn(_0x5ca0cb(0x21f)),spawn(_0x5ca0cb(0x206)),spawn('gm'),spawn(_0x5ca0cb(0x229),[_0x5ca0cb(0x248)])][_0x5ca0cb(0x1de)](_0x31d80b=>{const _0x641540=_0x5ca0cb;return Promise[_0x641540(0x21d)]([new Promise(_0x4373c5=>{const _0x1e8ccb=_0x641540;_0x31d80b['on'](_0x1e8ccb(0x242),_0x4f2c4c=>{_0x4373c5(_0x4f2c4c!==0x7f);});}),new Promise(_0x102f6d=>{const _0x2bd837=_0x641540;_0x31d80b['on'](_0x2bd837(0x1f1),_0x38ff1f=>_0x102f6d(![]));})]);})),[_0xbb00ad,_0x5f396a,_0x719093,_0x1d47e2,_0x44d3f1,_0x5c7289,_0x30a591]=_0x2068a0;console[_0x5ca0cb(0x252)](_0x2068a0);let _0x4af168=global[_0x5ca0cb(0x22d)]={'ffmpeg':_0xbb00ad,'ffprobe':_0x5f396a,'ffmpegWebp':_0x719093,'convert':_0x1d47e2,'magick':_0x44d3f1,'gm':_0x5c7289,'find':_0x30a591};Object[_0x5ca0cb(0x211)](global[_0x5ca0cb(0x22d)]);if(!_0x4af168[_0x5ca0cb(0x24d)])conn['logger'][_0x5ca0cb(0x239)](_0x5ca0cb(0x253));if(_0x4af168[_0x5ca0cb(0x24d)]&&!_0x4af168[_0x5ca0cb(0x1dc)])conn[_0x5ca0cb(0x1f3)][_0x5ca0cb(0x239)](_0x5ca0cb(0x24f));if(!_0x4af168[_0x5ca0cb(0x21f)]&&!_0x4af168['magick']&&!_0x4af168['gm'])conn[_0x5ca0cb(0x1f3)]['warn'](_0x5ca0cb(0x1f9));}_quickTest()[_0x28a1b2(0x224)](()=>conn[_0x28a1b2(0x1f3)]['info']('Quick\x20Test\x20Done'))['catch'](console[_0x28a1b2(0x1f1)]);
