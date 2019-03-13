var Laya=window.Laya=function(t,e){var i={__internals:[],__packages:{},__classmap:{Object:Object,Function:Function,Array:Array,String:String},__sysClass:{object:"Object",array:"Array",string:"String",dictionary:"Dictionary"},__propun:{writable:!0,enumerable:!1,configurable:!0},__presubstr:String.prototype.substr,__substr:function(t,e){return 1==arguments.length?i.__presubstr.call(this,t):i.__presubstr.call(this,t,e>0?e:this.length+e)},__init:function(t){t.forEach(function(t){t.__init$&&t.__init$()})},__isClass:function(t){return t&&(t.__isclass||t==Object||t==String||t==Array)},__newvec:function(t,e){var i=[];i.length=t;for(var n=0;n<t;n++)i[n]=e;return i},__extend:function(t,e){function n(){i.un(this,"constructor",t)}for(var s in e)if(e.hasOwnProperty(s)){var r=Object.getOwnPropertyDescriptor(e,s),o=r.get,a=r.set;o||a?o&&a?Object.defineProperty(t,s,r):(o&&Object.defineProperty(t,s,o),a&&Object.defineProperty(t,s,a)):t[s]=e[s]}n.prototype=e.prototype,t.prototype=new n,i.un(t.prototype,"__imps",i.__copy({},e.prototype.__imps))},__copy:function(t,e){if(!e)return null;t=t||{};for(var i in e)t[i]=e[i];return t},__package:function(e,n){if(!i.__packages[e]){i.__packages[e]=!0;var s=t,r=e.split(".");if(r.length>1)for(var o=0,a=r.length-1;o<a;o++){var h=s[r[o]];s=h||(s[r[o]]={})}s[r[r.length-1]]||(s[r[r.length-1]]=n||{})}},__hasOwnProperty:function(t,e){function i(t,e){if(Object.hasOwnProperty.call(e.prototype,t))return!0;var n=e.prototype.__super;return null==n?null:i(t,n)}return e=e||this,Object.hasOwnProperty.call(e,t)||i(t,e.__class)},__typeof:function(t,e){if(!t||!e)return!1;if(e===String)return"string"==typeof t;if(e===Number)return"number"==typeof t;if(e.__interface__)e=e.__interface__;else if("string"!=typeof e)return t instanceof e;return t.__imps&&t.__imps[e]||t.__class==e},__as:function(t,e){return this.__typeof(t,e)?t:null},__int:function(t){return t?parseInt(t):0},interface:function(e,n){i.__package(e,{});var s=i.__internals,r=s[e]=s[e]||{self:e};if(n){var o=n.split(",");r.extend=[];for(u=0;u<o.length;u++){var a=o[u];s[a]=s[a]||{self:a},r.extend.push(s[a])}}for(var h=t,l=e.split("."),u=0;u<l.length-1;u++)h=h[l[u]];h[l[l.length-1]]={__interface__:e}},class:function(e,n,s,r){if(s&&i.__extend(e,s),n)if(i.__package(n,e),i.__classmap[n]=e,n.indexOf(".")>0){if(0==n.indexOf("laya.")){var o=n.split(".");r=r||o[o.length-1],i[r]&&console.log("Warning!,this class["+r+"] already exist:",i[r]),i[r]=e}}else"Main"==n?t.Main=e:(i[n]&&console.log("Error!,this class["+n+"] already exist:",i[n]),i[n]=e);var a=i.un,h=e.prototype;a(h,"hasOwnProperty",i.__hasOwnProperty),a(h,"__class",e),a(h,"__super",s),a(h,"__className",n),a(e,"__super",s),a(e,"__className",n),a(e,"__isclass",!0),a(e,"super",function(t){this.__super.call(t)})},imps:function(t,e){function n(t){var e,r;if((e=i.__internals[t])&&(s[t]=!0,r=e.extend))for(var o=0;o<r.length;o++)n(r[o].self)}if(!e)return null;var s=t.__imps||i.un(t,"__imps",{});for(var r in e)n(r)},superSet:function(t,e,i,n){var s=t.prototype["_$set_"+i];s&&s.call(e,n)},superGet:function(t,e,i){var n=t.prototype["_$get_"+i];return n?n.call(e):null},getset:function(t,e,n,s,r){t?(s&&(e["_$GET_"+n]=s),r&&(e["_$SET_"+n]=r)):(s&&i.un(e,"_$get_"+n,s),r&&i.un(e,"_$set_"+n,r)),s&&r?Object.defineProperty(e,n,{get:s,set:r,enumerable:!1,configurable:!0}):(s&&Object.defineProperty(e,n,{get:s,enumerable:!1,configurable:!0}),r&&Object.defineProperty(e,n,{set:r,enumerable:!1,configurable:!0}))},static:function(t,e){for(var i=0,n=e.length;i<n;i+=2)"length"==e[i]?t.length=e[i+1].call(t):function(){var n=e[i],s=e[i+1];Object.defineProperty(t,n,{get:function(){return delete this[n],this[n]=s.call(this)},set:function(t){delete this[n],this[n]=t},enumerable:!0,configurable:!0})}()},un:function(t,e,n){return n||(n=t[e]),i.__propun.value=n,Object.defineProperty(t,e,i.__propun),n},uns:function(t,e){e.forEach(function(e){i.un(t,e)})}};return t.console=t.console||{log:function(){}},t.trace=t.console.log,Error.prototype.throwError=function(){throw arguments},Object.defineProperty(Array.prototype,"fixed",{enumerable:!1}),i}(window,document);!function(t,e,i){i.un,i.uns,i.static,i.class,i.getset,i.__newvec}(window,document,Laya),function(t,e,i){i.un,i.uns;var n=i.static,s=i.class,r=i.getset;i.__newvec;i.interface("laya.runtime.IMarket"),i.interface("laya.filters.IFilter"),i.interface("laya.display.ILayout"),i.interface("laya.resource.IDispose"),i.interface("laya.runtime.IPlatform"),i.interface("laya.resource.IDestroy"),i.interface("laya.runtime.IConchNode"),i.interface("laya.filters.IFilterAction"),i.interface("laya.runtime.ICPlatformClass"),i.interface("laya.resource.ICreateResource"),i.interface("laya.runtime.IConchRenderObject"),i.interface("laya.runtime.IPlatformClass","laya.runtime.IPlatform");var o=function(){function e(){}return s(e,"laya.utils.RunDriver"),e.FILTER_ACTIONS=[],e.pixelRatio=-1,e._charSizeTestDiv=null,e.now=function(){return Date.now()},e.getWindow=function(){return t},e.getPixelRatio=function(){if(e.pixelRatio<0){var t=N.context,i=t.backingStorePixelRatio||t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1;(e.pixelRatio=(N.window.devicePixelRatio||1)/i)<1&&(e.pixelRatio=1)}return e.pixelRatio},e.getIncludeStr=function(t){return null},e.createShaderCondition=function(t){var e="(function() {return "+t+";})";return i._runScript(e)},e.fontMap=[],e.measureText=function(t,i){var n=e.hanzi.test(t);if(n&&e.fontMap[i])return e.fontMap[i];var s=N.context;s.font=i;var r=s.measureText(t);return n&&(e.fontMap[i]=r),r},e.getWebGLContext=function(t){},e.beginFlush=function(){},e.endFinish=function(){},e.addToAtlas=null,e.flashFlushImage=function(t){},e.drawToCanvas=function(t,e,i,n,s,r){var o=yt.create("2D"),a=new D(i,n,o);return F.renders[e]._fun(t,a,s,r),o},e.createParticleTemplate2D=null,e.createGLTextur=null,e.createWebGLContext2D=null,e.changeWebGLSize=function(t,e){},e.createRenderSprite=function(t,e){return new F(t,e)},e.createFilterAction=function(t){return new x},e.createGraphics=function(){return new f},e.clear=function(t){R._context.ctx.clear()},e.cancelLoadByUrl=function(t){},e.clearAtlas=function(t){},e.isAtlas=function(t){return!1},e.addTextureToAtlas=function(t){},e.getTexturePixels=function(t,e,i,n,s){return null},e.skinAniSprite=function(){return null},e.update3DLoop=function(){},n(e,["hanzi",function(){return this.hanzi=new RegExp("^[一-龥]$")}]),e}(),a=(r(1,i,"alertGlobalError",null,function(t){var e=0;N.window.onerror=t?function(t,i,n,s,r){e++<5&&r&&alert("出错啦，请把此信息截图给研发商\n"+t+"\n"+r.stack||r)}:null}),i.init=function(t,e,n){for(var s=[],r=2,o=arguments.length;r<o;r++)s.push(arguments[r]);if(!i._isinit){ArrayBuffer.prototype.slice||(ArrayBuffer.prototype.slice=i._arrayBufferSlice),i._isinit=!0,N.__init__(),k.__init__(),f.__init__(),i.timer=new V,i.scaleTimer=new V,i.loader=new at,Q.__init__();for(var r=0,a=s.length;r<a;r++)s[r].enable&&s[r].enable();return _.__init__(),c.__init__(),O.__init__(),W.beginCheck(),i._currentStage=i.stage=new mt,i.stage.conchModel&&i.stage.conchModel.setRootNode(),i.getUrlPath(),i.render=new R(0,0),i.stage.size(t,e),F.__init__(),m.__init__(),v.instance.__init__(i.stage,R.canvas),xt.__init__(),E.autoStopMusic=!0,I.__init__(),R.canvas}},i.getUrlPath=function(){var t=N.window.location,e=t.pathname;e=":"==e.charAt(2)?e.substring(1):e,L.rootPath=L.basePath=L.getPath("file:"==t.protocol?e:t.protocol+"//"+t.host+t.pathname)},i._arrayBufferSlice=function(t,e){var i=new Uint8Array(this,t,e-t),n=new Uint8Array(i.length);return n.set(i),n.buffer},i._runScript=function(t){return N.window["e"+String.fromCharCode(118)+"al"](t)},i.stage=null,i.timer=null,i.scaleTimer=null,i.loader=null,i.version="1.7.18beta",i.render=null,i._currentStage=null,i._isinit=!1,i.MiniAdpter={init:function(){t.navigator&&t.navigator.userAgent&&t.navigator.userAgent.indexOf("MiniGame")>-1&&console.error("请先引用小游戏适配库laya.wxmini.js,详细教程：https://ldc.layabox.com/doc/?nav=zh-ts-5-0-0")}},n(i,["conchMarket",function(){return this.conchMarket=t.conch?conchMarket:null},"PlatformClass",function(){return this.PlatformClass=t.PlatformClass}]),function(){function t(){}return s(t,"Config"),t.WebGLTextCacheCount=500,t.atlasEnable=!1,t.showCanvasMark=!1,t.animationInterval=50,t.isAntialias=!1,t.isAlpha=!1,t.premultipliedAlpha=!0,t.isStencil=!0,t.preserveDrawingBuffer=!1,t}()),h=function(){function t(){this._events=null}var e;s(t,"laya.events.EventDispatcher");var i=t.prototype;return i.hasListener=function(t){return!!(this._events&&this._events[t])},i.event=function(t,e){if(!this._events||!this._events[t])return!1;var i=this._events[t];if(i.run)i.once&&delete this._events[t],null!=e?i.runWith(e):i.run();else{for(var n=0,s=i.length;n<s;n++){var r=i[n];r&&(null!=e?r.runWith(e):r.run()),r&&!r.once||(i.splice(n,1),n--,s--)}0===i.length&&this._events&&delete this._events[t]}return!0},i.on=function(t,e,i,n){return this._createListener(t,e,i,n,!1)},i.once=function(t,e,i,n){return this._createListener(t,e,i,n,!0)},i._createListener=function(t,i,n,s,r,o){void 0===o&&(o=!0),o&&this.off(t,i,n,r);var a=e.create(i||this,n,s,r);this._events||(this._events={});var h=this._events;return h[t]?h[t].run?h[t]=[h[t],a]:h[t].push(a):h[t]=a,this},i.off=function(t,e,i,n){if(void 0===n&&(n=!1),!this._events||!this._events[t])return this;var s=this._events[t];if(null!=i)if(s.run)e&&s.caller!==e||s.method!==i||n&&!s.once||(delete this._events[t],s.recover());else{for(var r=0,o=0,a=s.length;o<a;o++){var h=s[o];!h||e&&h.caller!==e||h.method!==i||n&&!h.once||(r++,s[o]=null,h.recover())}r===a&&delete this._events[t]}return this},i.offAll=function(t){var e=this._events;if(!e)return this;if(t)this._recoverHandlers(e[t]),delete e[t];else{for(var i in e)this._recoverHandlers(e[i]);this._events=null}return this},i._recoverHandlers=function(t){if(t)if(t.run)t.recover();else for(var e=t.length-1;e>-1;e--)t[e]&&(t[e].recover(),t[e]=null)},i.isMouseEvent=function(e){return t.MOUSE_EVENTS[e]},t.MOUSE_EVENTS={rightmousedown:!0,rightmouseup:!0,rightclick:!0,mousedown:!0,mouseup:!0,mousemove:!0,mouseover:!0,mouseout:!0,click:!0,doubleclick:!0},t.__init$=function(){Object.defineProperty(laya.events.EventDispatcher.prototype,"_events",{enumerable:!1,writable:!0}),e=function(t){function e(t,i,n,s){e.__super.call(this,t,i,n,s)}s(e,"",l);return e.prototype.recover=function(){this._id>0&&(this._id=0,e._pool.push(this.clear()))},e.create=function(t,i,n,s){return void 0===s&&(s=!0),e._pool.length?e._pool.pop().setTo(t,i,n,s):new e(t,i,n,s)},e._pool=[],e}()},t}(),l=function(){function t(t,e,i,n){this.once=!1,this._id=0,void 0===n&&(n=!1),this.setTo(t,e,i,n)}s(t,"laya.utils.Handler");var e=t.prototype;return e.setTo=function(e,i,n,s){return this._id=t._gid++,this.caller=e,this.method=i,this.args=n,this.once=s,this},e.run=function(){if(null==this.method)return null;var t=this._id,e=this.method.apply(this.caller,this.args);return this._id===t&&this.once&&this.recover(),e},e.runWith=function(t){if(null==this.method)return null;var e=this._id;if(null==t)var i=this.method.apply(this.caller,this.args);else i=this.args||t.unshift?this.args?this.method.apply(this.caller,this.args.concat(t)):this.method.apply(this.caller,t):this.method.call(this.caller,t);return this._id===e&&this.once&&this.recover(),i},e.clear=function(){return this.caller=null,this.method=null,this.args=null,this},e.recover=function(){this._id>0&&(this._id=0,t._pool.push(this.clear()))},t.create=function(e,i,n,s){return void 0===s&&(s=!0),t._pool.length?t._pool.pop().setTo(e,i,n,s):new t(e,i,n,s)},t._pool=[],t._gid=1,t}(),u=function(){function t(){this._texture=null,this._fontCharDic={},this._fontWidthMap={},this._complete=null,this._path=null,this._maxWidth=0,this._spaceWidth=10,this._padding=null,this.fontSize=12,this.autoScaleSize=!1,this.letterSpacing=0}s(t,"laya.display.BitmapFont");var e=t.prototype;return e.loadFont=function(t,e){this._path=t,this._complete=e,i.loader.load([{url:this._path,type:"xml"},{url:this._path.replace(".fnt",".png"),type:"image"}],l.create(this,this.onLoaded))},e.onLoaded=function(){this.parseFont(ot.getRes(this._path),ot.getRes(this._path.replace(".fnt",".png"))),this._complete&&this._complete.runWith(this._texture?this:null)},e.parseFont=function(t,e){if(null!=t&&null!=e){this._texture=e;var i=t.getElementsByTagName("info");if(!i[0].getAttributeNode)return this.parseFont2(t,e);this.fontSize=parseInt(i[0].getAttributeNode("size").nodeValue);var n=i[0].getAttributeNode("padding").nodeValue.split(",");this._padding=[parseInt(n[0]),parseInt(n[1]),parseInt(n[2]),parseInt(n[3])];var s;s=t.getElementsByTagName("char");var r=0;for(r=0;r<s.length;r++){var o=s[r],a=parseInt(o.getAttributeNode("id").nodeValue),h=parseInt(o.getAttributeNode("xoffset").nodeValue)/1,l=parseInt(o.getAttributeNode("yoffset").nodeValue)/1,u=parseInt(o.getAttributeNode("xadvance").nodeValue)/1,c=new P;c.x=parseInt(o.getAttributeNode("x").nodeValue),c.y=parseInt(o.getAttributeNode("y").nodeValue),c.width=parseInt(o.getAttributeNode("width").nodeValue),c.height=parseInt(o.getAttributeNode("height").nodeValue);var _=lt.create(e,c.x,c.y,c.width,c.height,h,l);this._maxWidth=Math.max(this._maxWidth,u+this.letterSpacing),this._fontCharDic[a]=_,this._fontWidthMap[a]=u}}},e.parseFont2=function(t,e){if(null!=t&&null!=e){this._texture=e;var i=t.getElementsByTagName("info");this.fontSize=parseInt(i[0].attributes.size.nodeValue);var n=i[0].attributes.padding.nodeValue.split(",");this._padding=[parseInt(n[0]),parseInt(n[1]),parseInt(n[2]),parseInt(n[3])];var s=t.getElementsByTagName("char"),r=0;for(r=0;r<s.length;r++){var o=s[r].attributes,a=parseInt(o.id.nodeValue),h=parseInt(o.xoffset.nodeValue)/1,l=parseInt(o.yoffset.nodeValue)/1,u=parseInt(o.xadvance.nodeValue)/1,c=new P;c.x=parseInt(o.x.nodeValue),c.y=parseInt(o.y.nodeValue),c.width=parseInt(o.width.nodeValue),c.height=parseInt(o.height.nodeValue);var _=lt.create(e,c.x,c.y,c.width,c.height,h,l);this._maxWidth=Math.max(this._maxWidth,u+this.letterSpacing),this._fontCharDic[a]=_,this._fontWidthMap[a]=u}}},e.getCharTexture=function(t){return this._fontCharDic[t.charCodeAt(0)]},e.destroy=function(){if(this._texture){for(var t in this._fontCharDic){var e=this._fontCharDic[t];e&&e.destroy()}this._texture.destroy(),this._fontCharDic=null,this._fontWidthMap=null,this._texture=null}},e.setSpaceWidth=function(t){this._spaceWidth=t},e.getCharWidth=function(t){var e=t.charCodeAt(0);return this._fontWidthMap[e]?this._fontWidthMap[e]+this.letterSpacing:" "==t?this._spaceWidth+this.letterSpacing:0},e.getTextWidth=function(t){for(var e=0,i=0,n=t.length;i<n;i++)e+=this.getCharWidth(t.charAt(i));return e},e.getMaxWidth=function(){return this._maxWidth},e.getMaxHeight=function(){return this.fontSize},e.drawText=function(t,e,i,n,s,r){var o,a=this.getTextWidth(t),h=0;"center"===s&&(h=(r-a)/2),"right"===s&&(h=r-a);for(var l=0,u=0,c=t.length;u<c;u++)(o=this.getCharTexture(t.charAt(u)))&&(e.graphics.drawTexture(o,i+l+h,n),l+=this.getCharWidth(t.charAt(u)))},t}(),c=function(){function t(){this.alpha=1,this.visible=!0,this.scrollRect=null,this.blendMode=null,this._type=0,this._tf=t._TF_EMPTY}s(t,"laya.display.css.Style");var e=t.prototype;return e.getTransform=function(){return this._tf},e.setTransform=function(e){this._tf="none"!==e&&e?e:t._TF_EMPTY},e.setTranslateX=function(e){this._tf===t._TF_EMPTY&&(this._tf=new d),this._tf.translateX=e},e.setTranslateY=function(e){this._tf===t._TF_EMPTY&&(this._tf=new d),this._tf.translateY=e},e.setScaleX=function(e){this._tf===t._TF_EMPTY&&(this._tf=new d),this._tf.scaleX=e},e.setScale=function(e,i){this._tf===t._TF_EMPTY&&(this._tf=new d),this._tf.scaleX=e,this._tf.scaleY=i},e.setScaleY=function(e){this._tf===t._TF_EMPTY&&(this._tf=new d),this._tf.scaleY=e},e.setRotate=function(e){this._tf===t._TF_EMPTY&&(this._tf=new d),this._tf.rotate=e},e.setSkewX=function(e){this._tf===t._TF_EMPTY&&(this._tf=new d),this._tf.skewX=e},e.setSkewY=function(e){this._tf===t._TF_EMPTY&&(this._tf=new d),this._tf.skewY=e},e.destroy=function(){this.scrollRect=null},e.render=function(t,e,i,n){},e.getCSSStyle=function(){return tt.EMPTY},e._enableLayout=function(){return!1},r(0,e,"scaleX",function(){return this._tf.scaleX},function(t){this.setScaleX(t)}),r(0,e,"transform",function(){return this.getTransform()},function(t){this.setTransform(t)}),r(0,e,"translateX",function(){return this._tf.translateX},function(t){this.setTranslateX(t)}),r(0,e,"translateY",function(){return this._tf.translateY},function(t){this.setTranslateY(t)}),r(0,e,"scaleY",function(){return this._tf.scaleY},function(t){this.setScaleY(t)}),r(0,e,"block",function(){return 0!=(1&this._type)}),r(0,e,"skewY",function(){return this._tf.skewY},function(t){this.setSkewY(t)}),r(0,e,"rotate",function(){return this._tf.rotate},function(t){this.setRotate(t)}),r(0,e,"skewX",function(){return this._tf.skewX},function(t){this.setSkewX(t)}),r(0,e,"paddingLeft",function(){return 0}),r(0,e,"paddingTop",function(){return 0}),r(0,e,"absolute",function(){return!0}),t.__init__=function(){t._TF_EMPTY=new d,t.EMPTY=new t},t.EMPTY=null,t._TF_EMPTY=null,t}(),_=function(){function t(e){this._type=0,this._weight=0,this._decoration=null,this._text=null,this.indent=0,this._color=U.create(t.defaultColor),this.family=t.defaultFamily,this.stroke=t._STROKE,this.size=t.defaultSize,e&&e!==t.EMPTY&&e.copyTo(this)}s(t,"laya.display.css.Font");var e=t.prototype;return e.set=function(t){this._text=null;for(var e=t.split(" "),i=0,n=e.length;i<n;i++){var s=e[i];switch(s){case"italic":this.italic=!0;continue;case"bold":this.bold=!0;continue}s.indexOf("px")>0&&(this.size=parseInt(s),this.family=e[i+1],i++)}},e.toString=function(){return this._text="",this.italic&&(this._text+="italic "),this.bold&&(this._text+="bold "),this._text+=this.size+"px "+this.family},e.copyTo=function(e){e._type=this._type,e._text=this._text,e._weight=this._weight,e._color=this._color,e.family=this.family,e.stroke=this.stroke!=t._STROKE?this.stroke.slice():t._STROKE,e.indent=this.indent,e.size=this.size},r(0,e,"password",function(){return 0!=(1024&this._type)},function(t){t?this._type|=1024:this._type&=-1025}),r(0,e,"color",function(){return this._color.strColor},function(t){this._color=U.create(t)}),r(0,e,"italic",function(){return 0!=(512&this._type)},function(t){t?this._type|=512:this._type&=-513}),r(0,e,"bold",function(){return 0!=(2048&this._type)},function(t){t?this._type|=2048:this._type&=-2049}),r(0,e,"weight",function(){return""+this._weight},function(t){var e=0;switch(t){case"normal":break;case"bold":this.bold=!0,e=700;break;case"bolder":e=800;break;case"lighter":e=100;break;default:e=parseInt(t)}this._weight=e,this._text=null}),r(0,e,"decoration",function(){return this._decoration?this._decoration.value:"none"},function(t){var e=t.split(" ");switch(this._decoration||(this._decoration={}),e[0]){case"_":this._decoration.type="underline";break;case"-":this._decoration.type="line-through";break;case"overline":this._decoration.type="overline";break;default:this._decoration.type=e[0]}e[1]&&(this._decoration.color=U.create(e)),this._decoration.value=t}),t.__init__=function(){t.EMPTY=new t(null)},t.EMPTY=null,t.defaultColor="#000000",t.defaultSize=12,t.defaultFamily="Arial",t.defaultFont="12px Arial",t._STROKE=[0,"#000000"],t._ITALIC=512,t._PASSWORD=1024,t._BOLD=2048,t}(),d=function(){function t(){this.translateX=0,this.translateY=0,this.scaleX=1,this.scaleY=1,this.rotate=0,this.skewX=0,this.skewY=0}return s(t,"laya.display.css.TransformInfo"),t}(),f=function(){function e(){if(this._one=null,this._cmds=null,this._render=this._renderEmpty,R.isConchNode){this._nativeObj=new t._conchGraphics,this.id=this._nativeObj.conchID}}s(e,"laya.display.Graphics");var n=e.prototype;return n.destroy=function(){this.clear(),this._graphicBounds&&this._graphicBounds.destroy(),this._graphicBounds=null,this._vectorgraphArray=null,this._sp&&(this._sp._renderType=0),this._sp=null},n.clear=function(t){void 0===t&&(t=!1);var i=0,n=0;if(t){var s=this._one;if(this._cmds){for(n=this._cmds.length,i=0;i<n;i++)!(s=this._cmds[i])||s.callee!==R._context._drawTexture&&s.callee!==R._context._drawTextureWithTransform||(s[0]=null,e._cache.push(s));this._cmds.length=0}else s&&(!s||s.callee!==R._context._drawTexture&&s.callee!==R._context._drawTextureWithTransform||(s[0]=null,e._cache.push(s)))}else this._cmds=null;if(this._one=null,this._render=this._renderEmpty,this._sp&&(this._sp._renderType&=-514),this._repaint(),this._vectorgraphArray){for(i=0,n=this._vectorgraphArray.length;i<n;i++)q.getInstance().deleteShape(this._vectorgraphArray[i]);this._vectorgraphArray.length=0}},n._clearBoundsCache=function(){this._graphicBounds&&this._graphicBounds.reset()},n._initGraphicBounds=function(){this._graphicBounds||(this._graphicBounds=new p,this._graphicBounds._graphics=this)},n._repaint=function(){this._clearBoundsCache(),this._sp&&this._sp.repaint()},n._isOnlyOne=function(){return!this._cmds||0===this._cmds.length},n.getBounds=function(t){return void 0===t&&(t=!1),this._initGraphicBounds(),this._graphicBounds.getBounds(t)},n.getBoundPoints=function(t){return void 0===t&&(t=!1),this._initGraphicBounds(),this._graphicBounds.getBoundPoints(t)},n._addCmd=function(t){this._cmds=this._cmds||[],t.callee=t.shift(),this._cmds.push(t)},n.setFilters=function(t){this._saveToCmd(R._context._setFilters,t)},n.drawTexture=function(t,i,n,s,r,o,a){if(void 0===i&&(i=0),void 0===n&&(n=0),void 0===s&&(s=0),void 0===r&&(r=0),void 0===a&&(a=1),!t||a<.01)return null;s||(s=t.sourceWidth),r||(r=t.sourceHeight),a=a<0?0:a>1?1:a;var h=!R.isWebGL&&(N.onFirefox||N.onEdge||N.onIE||N.onSafari)?.5:0,l=s/t.sourceWidth,u=r/t.sourceHeight;if(s=t.width*l,r=t.height*u,t.loaded&&(s<=0||r<=0))return null;i+=t.offsetX*l,n+=t.offsetY*u,this._sp&&(this._sp._renderType|=512);var c;return i-=h,n-=h,s+=2*h,r+=2*h,e._cache.length?((c=e._cache.pop())[0]=t,c[1]=i,c[2]=n,c[3]=s,c[4]=r,c[5]=o,c[6]=a):c=[t,i,n,s,r,o,a],c.callee=o||1!=a?R._context._drawTextureWithTransform:R._context._drawTexture,null!=this._one||o||1!=a?this._saveToCmd(c.callee,c):(this._one=c,this._render=this._renderOneImg),t.loaded||t.once("loaded",this,this._textureLoaded,[t,c]),this._repaint(),c},n.cleanByTexture=function(t,e,i,n,s){if(void 0===n&&(n=0),void 0===s&&(s=0),!t)return this.clear();if(this._one&&this._render===this._renderOneImg){n||(n=t.sourceWidth),s||(s=t.sourceHeight);var r=n/t.sourceWidth,o=s/t.sourceHeight;n=t.width*r,s=t.height*o,e+=t.offsetX*r,i+=t.offsetY*o,this._one[0]=t,this._one[1]=e,this._one[2]=i,this._one[3]=n,this._one[4]=s}else this.clear(),t&&this.drawTexture(t,e,i,n,s)},n.drawTextures=function(t,e){t&&this._saveToCmd(R._context._drawTextures,[t,e])},n.fillTexture=function(t,e,i,n,s,r,o){if(void 0===n&&(n=0),void 0===s&&(s=0),void 0===r&&(r="repeat"),t){var a=[t,e,i,n,s,r,o||S.EMPTY,{}];t.loaded||t.once("loaded",this,this._textureLoaded,[t,a]),this._saveToCmd(R._context._fillTexture,a)}},n._textureLoaded=function(t,e){e[3]=e[3]||t.width,e[4]=e[4]||t.height,this._repaint()},n.fillCircle=function(t,e,i,n,s,r,o){i.bitmap.enableMerageInAtlas=!1;var a=new Float32Array(2*(o+1)),h=new Float32Array(2*(o+1)),l=new Uint16Array(3*o),u=2*Math.PI/o,c=0;a[0]=n,a[1]=s,h[0]=n/i.width,h[1]=s/i.height;for(var _=2,d=0;d<o;d++){var f=r*Math.cos(c)+n,p=r*Math.sin(c)+s;a[_]=f,a[_+1]=p,h[_]=f/i.width,h[_+1]=p/i.height,c+=u,_+=2}for(_=0,d=0;d<o;d++)l[_++]=0,l[_++]=d+1,l[_++]=d+2>=o+1?1:d+2;this.drawTriangles(i,t,e,a,h,l)},n.drawTriangles=function(t,e,i,n,s,r,o,a,h,l){void 0===a&&(a=1),this._saveToCmd(R._context.drawTriangles,[t,e,i,n,s,r,o,a,h,l])},n._saveToCmd=function(t,e){return this._sp&&(this._sp._renderType|=512),null==this._one?(this._one=e,this._render=this._renderOne):(this._sp&&(this._sp._renderType&=-2),this._render=this._renderAll,0===(this._cmds||(this._cmds=[])).length&&this._cmds.push(this._one),this._cmds.push(e)),e.callee=t,this._repaint(),e},n.clipRect=function(t,e,i,n){this._saveToCmd(R._context._clipRect,[t,e,i,n])},n.fillText=function(t,e,i,n,s,r,o){void 0===o&&(o=0),this._saveToCmd(R._context._fillText,[t,e,i,n||_.defaultFont,s,r])},n.fillBorderText=function(t,e,i,n,s,r,o,a){this._saveToCmd(R._context._fillBorderText,[t,e,i,n||_.defaultFont,s,r,o,a])},n.strokeText=function(t,e,i,n,s,r,o){this._saveToCmd(R._context._strokeText,[t,e,i,n||_.defaultFont,s,r,o])},n.alpha=function(t){t=t<0?0:t>1?1:t,this._saveToCmd(R._context._alpha,[t])},n.setAlpha=function(t){t=t<0?0:t>1?1:t,this._saveToCmd(R._context._setAlpha,[t])},n.transform=function(t,e,i){void 0===e&&(e=0),void 0===i&&(i=0),this._saveToCmd(R._context._transform,[t,e,i])},n.rotate=function(t,e,i){void 0===e&&(e=0),void 0===i&&(i=0),this._saveToCmd(R._context._rotate,[t,e,i])},n.scale=function(t,e,i,n){void 0===i&&(i=0),void 0===n&&(n=0),this._saveToCmd(R._context._scale,[t,e,i,n])},n.translate=function(t,e){this._saveToCmd(R._context._translate,[t,e])},n.save=function(){this._saveToCmd(R._context._save,[])},n.restore=function(){this._saveToCmd(R._context._restore,[])},n.replaceText=function(t){this._repaint();var e=this._cmds;if(e){for(var i=e.length-1;i>-1;i--)if(this._isTextCmd(e[i].callee))return e[i][0].toUpperCase?e[i][0]=t:e[i][0].setText(t),!0}else if(this._one&&this._isTextCmd(this._one.callee))return this._one[0].toUpperCase?this._one[0]=t:this._one[0].setText(t),!0;return!1},n._isTextCmd=function(t){return t===R._context._fillText||t===R._context._fillBorderText||t===R._context._strokeText},n.replaceTextColor=function(t){this._repaint();var e=this._cmds;if(e)for(var i=e.length-1;i>-1;i--)this._isTextCmd(e[i].callee)&&(e[i][4]=t,e[i][0].toUpperCase||(e[i][0].changed=!0));else this._one&&this._isTextCmd(this._one.callee)&&(this._one[4]=t,this._one[0].toUpperCase||(this._one[0].changed=!0))},n.loadImage=function(t,e,n,s,r,o){function a(t){t&&(h.drawTexture(t,e,n,s,r),null!=o&&o.call(h._sp,t))}var h=this;void 0===e&&(e=0),void 0===n&&(n=0),void 0===s&&(s=0),void 0===r&&(r=0);var u=ot.getRes(t);u?a(u):i.loader.load(t,l.create(null,a),null,"image")},n._renderEmpty=function(t,e,i,n){},n._renderAll=function(t,e,i,n){for(var s,r=this._cmds,o=0,a=r.length;o<a;o++)(s=r[o]).callee.call(e,i,n,s)},n._renderOne=function(t,e,i,n){this._one.callee.call(e,i,n,this._one)},n._renderOneImg=function(t,e,i,n){this._one.callee.call(e,i,n,this._one),2305!==t._renderType&&(t._renderType|=1)},n.drawLine=function(t,e,i,n,s,r){void 0===r&&(r=1);var o=0;R.isWebGL&&(o=q.getInstance().getId(),null==this._vectorgraphArray&&(this._vectorgraphArray=[]),this._vectorgraphArray.push(o));var a=r%2==0?0:.5,h=[t+a,e+a,i+a,n+a,s,r,o];this._saveToCmd(R._context._drawLine,h)},n.drawLines=function(t,e,i,n,s){void 0===s&&(s=1);var r=0;if(i&&!(i.length<4)){R.isWebGL&&(r=q.getInstance().getId(),null==this._vectorgraphArray&&(this._vectorgraphArray=[]),this._vectorgraphArray.push(r));var o=s%2==0?0:.5,a=[t+o,e+o,i,n,s,r];this._saveToCmd(R._context._drawLines,a)}},n.drawCurves=function(t,e,i,n,s){void 0===s&&(s=1);var r=[t,e,i,n,s];this._saveToCmd(R._context._drawCurves,r)},n.drawRect=function(t,e,i,n,s,r,o){void 0===o&&(o=1);var a=r?o/2:0,h=r?o:0,l=[t+a,e+a,i-h,n-h,s,r,o];this._saveToCmd(R._context._drawRect,l)},n.drawCircle=function(t,e,i,n,s,r){void 0===r&&(r=1);var o=s?r/2:0,a=0;R.isWebGL&&(a=q.getInstance().getId(),null==this._vectorgraphArray&&(this._vectorgraphArray=[]),this._vectorgraphArray.push(a));var h=[t,e,i-o,n,s,r,a];this._saveToCmd(R._context._drawCircle,h)},n.drawPie=function(t,e,i,n,s,r,o,a){void 0===a&&(a=1);var h=o?a/2:0,l=o?a:0,u=0;R.isWebGL&&(u=q.getInstance().getId(),null==this._vectorgraphArray&&(this._vectorgraphArray=[]),this._vectorgraphArray.push(u));var c=[t+h,e+h,i-l,n,s,r,o,a,u];c[3]=K.toRadian(n),c[4]=K.toRadian(s),this._saveToCmd(R._context._drawPie,c)},n.drawPoly=function(t,e,i,n,s,r){void 0===r&&(r=1);var o=0,a=!1;R.isWebGL&&(o=q.getInstance().getId(),null==this._vectorgraphArray&&(this._vectorgraphArray=[]),this._vectorgraphArray.push(o),a=!(i.length>6));var h=s?r%2==0?0:.5:0,l=[t+h,e+h,i,n,s,r,o,a];this._saveToCmd(R._context._drawPoly,l)},n.drawPath=function(t,e,i,n,s){var r=[t,e,i,n,s];this._saveToCmd(R._context._drawPath,r)},r(0,n,"cmds",function(){return this._cmds},function(t){this._sp&&(this._sp._renderType|=512),this._cmds=t,this._render=this._renderAll,this._repaint()}),e.__init__=function(){if(R.isConchNode){for(var t=laya.display.Graphics.prototype,e=N.window.ConchGraphics.prototype,i=["clear","destroy","alpha","rotate","transform","scale","translate","save","restore","clipRect","blendMode","fillText","fillBorderText","_fands","drawRect","drawCircle","drawPie","drawPoly","drawPath","drawImageM","drawLine","drawLines","_drawPs","drawCurves","replaceText","replaceTextColor","_fillImage","fillTexture","setSkinMesh","drawParticle","drawImageS"],n=0,s=i.length;n<=s;n++){var r=i[n];t[r]=e[r]}t._saveToCmd=null,e.drawImageS&&(t.drawTextures=function(t,e){if(t&&t.loaded&&t.bitmap&&t.source){var i=t.uv,n=t.bitmap.width,s=t.bitmap.height;this.drawImageS(t.bitmap.source,i[0]*n,i[1]*s,(i[2]-i[0])*n,(i[5]-i[3])*s,t.offsetX,t.offsetY,t.width,t.height,e)}}),t.drawTexture=function(t,e,i,n,s,r,o){if(void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=0),void 0===s&&(s=0),void 0===o&&(o=1),t)if(t.loaded){if(t.loaded&&t.bitmap&&t.source&&(n||(n=t.sourceWidth),s||(s=t.sourceHeight),o=o<0?0:o>1?1:o,n=n-t.sourceWidth+t.width,s=s-t.sourceHeight+t.height,!(n<=0||s<=0))){e+=t.offsetX,i+=t.offsetY;var a=t.uv,h=t.bitmap.width,l=t.bitmap.height;this.drawImageM(t.bitmap.source,a[0]*h,a[1]*l,(a[2]-a[0])*h,(a[5]-a[3])*l,e,i,n,s,r,o),this._repaint()}}else t.once("loaded",this,function(){this.drawTexture(t,e,i,n,s,r)})},t.fillTexture=function(t,e,i,n,s,r,o){if(void 0===n&&(n=0),void 0===s&&(s=0),void 0===r&&(r="repeat"),t&&t.loaded){var a,h=R._context.ctx,l=t.bitmap.width,u=t.bitmap.height,c=t.uv;a=t.uv!=lt.DEF_UV?h.createPattern(t.bitmap.source,r,c[0]*l,c[1]*u,(c[2]-c[0])*l,(c[5]-c[3])*u):h.createPattern(t.bitmap.source,r);var _=0,d=0;o&&(e+=o.x%t.width,i+=o.y%t.height,_-=o.x%t.width,d-=o.y%t.height),this._fillImage(a,e,i,_,d,n,s)}}}},e._cache=[],e}(),p=function(){function t(){this._cacheBoundsType=!1}s(t,"laya.display.GraphicsBounds");var e=t.prototype;return e.destroy=function(){this._graphics=null,this._temp=null,this._rstBoundPoints=null,this._bounds=null},e.reset=function(){this._temp&&(this._temp.length=0)},e.getBounds=function(t){return void 0===t&&(t=!1),(!this._bounds||!this._temp||this._temp.length<1||t!=this._cacheBoundsType)&&(this._bounds=P._getWrapRec(this.getBoundPoints(t),this._bounds)),this._cacheBoundsType=t,this._bounds},e.getBoundPoints=function(t){return void 0===t&&(t=!1),(!this._temp||this._temp.length<1||t!=this._cacheBoundsType)&&(this._temp=this._getCmdPoints(t)),this._cacheBoundsType=t,this._rstBoundPoints=K.copyArray(this._rstBoundPoints,this._temp)},e._getCmdPoints=function(e){void 0===e&&(e=!1);var i,n=R._context,s=this._graphics.cmds;if(i=this._temp||(this._temp=[]),i.length=0,s||null==this._graphics._one||(t._tempCmds.length=0,t._tempCmds.push(this._graphics._one),s=t._tempCmds),!s)return i;var r;(r=t._tempMatrixArrays).length=0;var o=t._initMatrix;o.identity();for(var a,h,l=t._tempMatrix,u=NaN,c=NaN,_=NaN,d=NaN,f=NaN,p=NaN,g=0,m=s.length;g<m;g++)if((a=s[g]).callee)switch(a.callee){case n._save:case 7:r.push(o),o=o.clone();break;case n._restore:case 8:o=r.pop();break;case n._scale:case 5:l.identity(),l.translate(-a[2],-a[3]),l.scale(a[0],a[1]),l.translate(a[2],a[3]),this._switchMatrix(o,l);break;case n._rotate:case 3:l.identity(),l.translate(-a[1],-a[2]),l.rotate(a[0]),l.translate(a[1],a[2]),this._switchMatrix(o,l);break;case n._translate:case 6:l.identity(),l.translate(a[0],a[1]),this._switchMatrix(o,l);break;case n._transform:case 4:l.identity(),l.translate(-a[1],-a[2]),l.concat(a[0]),l.translate(a[1],a[2]),this._switchMatrix(o,l);break;case 16:case 24:t._addPointArrToRst(i,P._getBoundPointS(a[0],a[1],a[2],a[3]),o);break;case 17:o.copyTo(l),l.concat(a[4]),t._addPointArrToRst(i,P._getBoundPointS(a[0],a[1],a[2],a[3]),l);break;case n._drawTexture:h=a[0],e?a[3]&&a[4]?t._addPointArrToRst(i,P._getBoundPointS(a[1],a[2],a[3],a[4]),o):(h=a[0],t._addPointArrToRst(i,P._getBoundPointS(a[1],a[2],h.width,h.height),o)):(u=(a[3]||h.sourceWidth)/h.width,c=(a[4]||h.sourceHeight)/h.height,_=u*h.sourceWidth,d=c*h.sourceHeight,f=h.offsetX>0?h.offsetX:0,p=h.offsetY>0?h.offsetY:0,f*=u,p*=c,t._addPointArrToRst(i,P._getBoundPointS(a[1]-f,a[2]-p,_,d),o));break;case n._fillTexture:a[3]&&a[4]?t._addPointArrToRst(i,P._getBoundPointS(a[1],a[2],a[3],a[4]),o):(h=a[0],t._addPointArrToRst(i,P._getBoundPointS(a[1],a[2],h.width,h.height),o));break;case n._drawTextureWithTransform:var v;a[5]?(o.copyTo(l),l.concat(a[5]),v=l):v=o,e?a[3]&&a[4]?t._addPointArrToRst(i,P._getBoundPointS(a[1],a[2],a[3],a[4]),v):(h=a[0],t._addPointArrToRst(i,P._getBoundPointS(a[1],a[2],h.width,h.height),v)):(h=a[0],u=(a[3]||h.sourceWidth)/h.width,c=(a[4]||h.sourceHeight)/h.height,_=u*h.sourceWidth,d=c*h.sourceHeight,f=h.offsetX>0?h.offsetX:0,p=h.offsetY>0?h.offsetY:0,f*=u,p*=c,t._addPointArrToRst(i,P._getBoundPointS(a[1]-f,a[2]-p,_,d),v));break;case n._drawRect:case 13:t._addPointArrToRst(i,P._getBoundPointS(a[0],a[1],a[2],a[3]),o);break;case n._drawCircle:case n._fillCircle:case 14:t._addPointArrToRst(i,P._getBoundPointS(a[0]-a[2],a[1]-a[2],a[2]+a[2],a[2]+a[2]),o);break;case n._drawLine:case 20:t._tempPoints.length=0;var y=NaN;y=.5*a[5],a[0]==a[2]?t._tempPoints.push(a[0]+y,a[1],a[2]+y,a[3],a[0]-y,a[1],a[2]-y,a[3]):a[1]==a[3]?t._tempPoints.push(a[0],a[1]+y,a[2],a[3]+y,a[0],a[1]-y,a[2],a[3]-y):t._tempPoints.push(a[0],a[1],a[2],a[3]),t._addPointArrToRst(i,t._tempPoints,o);break;case n._drawCurves:case 22:t._addPointArrToRst(i,T.I.getBezierPoints(a[2]),o,a[0],a[1]);break;case n._drawPoly:case n._drawLines:case 18:t._addPointArrToRst(i,a[2],o,a[0],a[1]);break;case n._drawPath:case 19:t._addPointArrToRst(i,this._getPathPoints(a[2]),o,a[0],a[1]);break;case n._drawPie:case 15:t._addPointArrToRst(i,this._getPiePoints(a[0],a[1],a[2],a[3],a[4]),o)}return i.length>200?i=K.copyArray(i,P._getWrapRec(i)._getBoundPoints()):i.length>8&&(i=b.scanPList(i)),i},e._switchMatrix=function(t,e){e.concat(t),e.copyTo(t)},e._getPiePoints=function(e,i,n,s,r){var o=t._tempPoints;t._tempPoints.length=0,o.push(e,i);var a=(r-s)%(2*Math.PI)/10,h=NaN,l=s;for(h=0;h<=10;h++)o.push(e+n*Math.cos(l),i+n*Math.sin(l)),l+=a;return o},e._getPathPoints=function(e){var i=0,n=0,s=t._tempPoints;s.length=0,n=e.length;var r;for(i=0;i<n;i++)(r=e[i]).length>1&&(s.push(r[1],r[2]),r.length>3&&s.push(r[3],r[4]));return s},t._addPointArrToRst=function(e,i,n,s,r){void 0===s&&(s=0),void 0===r&&(r=0);var o=0,a=0;for(a=i.length,o=0;o<a;o+=2)t._addPointToRst(e,i[o]+s,i[o+1]+r,n)},t._addPointToRst=function(t,e,i,n){var s=S.TEMP;s.setTo(e||0,i||0),n.transformPoint(s),t.push(s.x,s.y)},t._tempPoints=[],t._tempMatrixArrays=[],t._tempCmds=[],n(t,["_tempMatrix",function(){return this._tempMatrix=new M},"_initMatrix",function(){return this._initMatrix=new M}]),t}(),g=function(){function t(){}s(t,"laya.events.Event");var e=t.prototype;return e.setTo=function(t,e,i){return this.type=t,this.currentTarget=e,this.target=i,this},e.stopPropagation=function(){this._stoped=!0},r(0,e,"stageY",function(){return i.stage.mouseY}),r(0,e,"charCode",function(){return this.nativeEvent.charCode}),r(0,e,"touches",function(){var t=this.nativeEvent.touches;if(t)for(var e=i.stage,n=0,s=t.length;n<s;n++){var r=t[n],o=S.TEMP;o.setTo(r.clientX,r.clientY),e._canvasTransform.invertTransformPoint(o),e.transform.invertTransformPoint(o),r.stageX=o.x,r.stageY=o.y}return t}),r(0,e,"keyLocation",function(){return this.nativeEvent.keyLocation}),r(0,e,"ctrlKey",function(){return this.nativeEvent.ctrlKey}),r(0,e,"altKey",function(){return this.nativeEvent.altKey}),r(0,e,"shiftKey",function(){return this.nativeEvent.shiftKey}),r(0,e,"stageX",function(){return i.stage.mouseX}),t.EMPTY=new t,t.MOUSE_DOWN="mousedown",t.MOUSE_UP="mouseup",t.CLICK="click",t.RIGHT_MOUSE_DOWN="rightmousedown",t.RIGHT_MOUSE_UP="rightmouseup",t.RIGHT_CLICK="rightclick",t.MOUSE_MOVE="mousemove",t.MOUSE_OVER="mouseover",t.MOUSE_OUT="mouseout",t.MOUSE_WHEEL="mousewheel",t.ROLL_OVER="mouseover",t.ROLL_OUT="mouseout",t.DOUBLE_CLICK="doubleclick",t.CHANGE="change",t.CHANGED="changed",t.RESIZE="resize",t.ADDED="added",t.REMOVED="removed",t.DISPLAY="display",t.UNDISPLAY="undisplay",t.ERROR="error",t.COMPLETE="complete",t.LOADED="loaded",t.PROGRESS="progress",t.INPUT="input",t.RENDER="render",t.OPEN="open",t.MESSAGE="message",t.CLOSE="close",t.KEY_DOWN="keydown",t.KEY_PRESS="keypress",t.KEY_UP="keyup",t.FRAME="enterframe",t.DRAG_START="dragstart",t.DRAG_MOVE="dragmove",t.DRAG_END="dragend",t.ENTER="enter",t.SELECT="select",t.BLUR="blur",t.FOCUS="focus",t.VISIBILITY_CHANGE="visibilitychange",t.FOCUS_CHANGE="focuschange",t.PLAYED="played",t.PAUSED="paused",t.STOPPED="stopped",t.START="start",t.END="end",t.ENABLE_CHANGED="enablechanged",t.ACTIVE_IN_HIERARCHY_CHANGED="activeinhierarchychanged",t.COMPONENT_ADDED="componentadded",t.COMPONENT_REMOVED="componentremoved",t.LAYER_CHANGED="layerchanged",t.HIERARCHY_LOADED="hierarchyloaded",t.RECOVERED="recovered",t.RELEASED="released",t.LINK="link",t.LABEL="label",t.FULL_SCREEN_CHANGE="fullscreenchange",t.DEVICE_LOST="devicelost",t.MESH_CHANGED="meshchanged",t.MATERIAL_CHANGED="materialchanged",t.WORLDMATRIX_NEEDCHANGE="worldmatrixneedchanged",t.ANIMATION_CHANGED="animationchanged",t.TRIGGER_ENTER="triggerenter",t.TRIGGER_STAY="triggerstay",t.TRIGGER_EXIT="triggerexit",t.TRAIL_FILTER_CHANGE="trailfilterchange",t.DOMINO_FILTER_CHANGE="dominofilterchange",t}(),m=(function(){function t(){}s(t,"laya.events.Keyboard"),t.NUMBER_0=48,t.NUMBER_1=49,t.NUMBER_2=50,t.NUMBER_3=51,t.NUMBER_4=52,t.NUMBER_5=53,t.NUMBER_6=54,t.NUMBER_7=55,t.NUMBER_8=56,t.NUMBER_9=57,t.A=65,t.B=66,t.C=67,t.D=68,t.E=69,t.F=70,t.G=71,t.H=72,t.I=73,t.J=74,t.K=75,t.L=76,t.M=77,t.N=78,t.O=79,t.P=80,t.Q=81,t.R=82,t.S=83,t.T=84,t.U=85,t.V=86,t.W=87,t.X=88,t.Y=89,t.Z=90,t.F1=112,t.F2=113,t.F3=114,t.F4=115,t.F5=116,t.F6=117,t.F7=118,t.F8=119,t.F9=120,t.F10=121,t.F11=122,t.F12=123,t.F13=124,t.F14=125,t.F15=126,t.NUMPAD=21,t.NUMPAD_0=96,t.NUMPAD_1=97,t.NUMPAD_2=98,t.NUMPAD_3=99,t.NUMPAD_4=100,t.NUMPAD_5=101,t.NUMPAD_6=102,t.NUMPAD_7=103,t.NUMPAD_8=104,t.NUMPAD_9=105,t.NUMPAD_ADD=107,t.NUMPAD_DECIMAL=110,t.NUMPAD_DIVIDE=111,t.NUMPAD_ENTER=108,t.NUMPAD_MULTIPLY=106,t.NUMPAD_SUBTRACT=109,t.SEMICOLON=186,t.EQUAL=187,t.COMMA=188,t.MINUS=189,t.PERIOD=190,t.SLASH=191,t.BACKQUOTE=192,t.LEFTBRACKET=219,t.BACKSLASH=220,t.RIGHTBRACKET=221,t.QUOTE=222,t.ALTERNATE=18,t.BACKSPACE=8,t.CAPS_LOCK=20,t.COMMAND=15,t.CONTROL=17,t.DELETE=46,t.ENTER=13,t.ESCAPE=27,t.PAGE_UP=33,t.PAGE_DOWN=34,t.END=35,t.HOME=36,t.LEFT=37,t.UP=38,t.RIGHT=39,t.DOWN=40,t.SHIFT=16,t.SPACE=32,t.TAB=9,t.INSERT=45}(),function(){function t(){}return s(t,"laya.events.KeyBoardManager"),t.__init__=function(){t._addEvent("keydown"),t._addEvent("keypress"),t._addEvent("keyup")},t._addEvent=function(t){N.document.addEventListener(t,function(e){laya.events.KeyBoardManager._dispatch(e,t)},!0)},t._dispatch=function(e,n){if(t.enabled){t._event._stoped=!1,t._event.nativeEvent=e,t._event.keyCode=e.keyCode||e.which||e.charCode,"keydown"===n?t._pressKeys[t._event.keyCode]=!0:"keyup"===n&&(t._pressKeys[t._event.keyCode]=null);for(var s=i.stage.focus&&null!=i.stage.focus.event&&i.stage.focus.displayedInStage?i.stage.focus:i.stage,r=s;r;)r.event(n,t._event.setTo(n,r,s)),r=r.parent}},t.hasKeyDown=function(e){return t._pressKeys[e]},t._pressKeys={},t.enabled=!0,n(t,["_event",function(){return this._event=new g}]),t}()),v=(function(){function t(){}s(t,"laya.events.KeyLocation"),t.STANDARD=0,t.LEFT=1,t.RIGHT=2,t.NUM_PAD=3}(),function(){function t(){this.mouseX=0,this.mouseY=0,this.disableMouseEvent=!1,this.mouseDownTime=0,this.mouseMoveAccuracy=2,this._stage=null,this._target=null,this._lastMoveTimer=0,this._isLeftMouse=!1,this._eventList=[],this._touchIDs={},this._id=1,this._tTouchID=0,this._event=new g,this._matrix=new M,this._point=new S,this._rect=new P,this._prePoint=new S,this._curTouchID=NaN}s(t,"laya.events.MouseManager");var e=t.prototype;return e.__init__=function(e,i){var n=this;this._stage=e;var s=this,r=this._eventList;i.oncontextmenu=function(e){if(t.enabled)return!1},i.addEventListener("mousedown",function(e){t.enabled&&(N.onIE||e.preventDefault(),r.push(e),s.mouseDownTime=N.now())}),i.addEventListener("mouseup",function(e){t.enabled&&(e.preventDefault(),r.push(e),s.mouseDownTime=-N.now())},!0),i.addEventListener("mousemove",function(e){if(t.enabled){e.preventDefault();var i=N.now();if(i-s._lastMoveTimer<10)return;s._lastMoveTimer=i,r.push(e)}},!0),i.addEventListener("mouseout",function(e){t.enabled&&r.push(e)}),i.addEventListener("mouseover",function(e){t.enabled&&r.push(e)}),i.addEventListener("touchstart",function(e){t.enabled&&(r.push(e),t._isFirstTouch||xt.isInputting||e.preventDefault(),s.mouseDownTime=N.now())}),i.addEventListener("touchend",function(e){t.enabled?(t._isFirstTouch||xt.isInputting||e.preventDefault(),t._isFirstTouch=!1,r.push(e),s.mouseDownTime=-N.now()):n._curTouchID=NaN},!0),i.addEventListener("touchmove",function(e){t.enabled&&(e.preventDefault(),r.push(e))},!0),i.addEventListener("touchcancel",function(e){t.enabled?(e.preventDefault(),r.push(e)):n._curTouchID=NaN},!0),i.addEventListener("mousewheel",function(e){t.enabled&&r.push(e)}),i.addEventListener("DOMMouseScroll",function(e){t.enabled&&r.push(e)})},e.initEvent=function(t,e){this._event._stoped=!1,this._event.nativeEvent=e||t,this._target=null,this._point.setTo(t.pageX||t.clientX,t.pageY||t.clientY),this._stage._canvasTransform.invertTransformPoint(this._point),this.mouseX=this._point.x,this.mouseY=this._point.y,this._event.touchId=t.identifier||0,this._tTouchID=this._event.touchId;var i;(i=y.I._event)._stoped=!1,i.nativeEvent=this._event.nativeEvent,i.touchId=this._event.touchId},e.checkMouseWheel=function(t){this._event.delta=t.wheelDelta?.025*t.wheelDelta:-t.detail;for(var e=y.I.getLastOvers(),i=0,n=e.length;i<n;i++){var s=e[i];s.event("mousewheel",this._event.setTo("mousewheel",s,this._target))}},e.onMouseMove=function(t){y.I.onMouseMove(t,this._tTouchID)},e.onMouseDown=function(t){if(xt.isInputting&&i.stage.focus&&i.stage.focus.focus&&!i.stage.focus.contains(this._target)){var e=i.stage.focus._tf||i.stage.focus,n=t._tf||t;n instanceof laya.display.Input&&n.multiline==e.multiline?e._focusOut():e.focus=!1}y.I.onMouseDown(t,this._tTouchID,this._isLeftMouse)},e.onMouseUp=function(t){y.I.onMouseUp(t,this._tTouchID,this._isLeftMouse)},e.check=function(t,e,i,n){this._point.setTo(e,i),t.fromParentPoint(this._point),e=this._point.x,i=this._point.y;var s=t.scrollRect;if(s&&(this._rect.setTo(s.x,s.y,s.width,s.height),!this._rect.contains(e,i)))return!1;if(!this.disableMouseEvent){if(t.hitTestPrior&&!t.mouseThrough&&!this.hitTest(t,e,i))return!1;for(var r=t._childs.length-1;r>-1;r--){var o=t._childs[r];if(!o.destroyed&&o.mouseEnabled&&o.visible&&this.check(o,e,i,n))return!0}}var a=!(!t.hitTestPrior||t.mouseThrough||this.disableMouseEvent)||this.hitTest(t,e,i);return a?(this._target=t,n.call(this,t)):n===this.onMouseUp&&t===this._stage&&(this._target=this._stage,n.call(this,this._target)),a},e.hitTest=function(t,e,i){var n=!1;if(t.scrollRect&&(e-=t.scrollRect.x,i-=t.scrollRect.y),t.hitArea instanceof laya.utils.HitArea)return t.hitArea.isHit(e,i);if(t.width>0&&t.height>0||t.mouseThrough||t.hitArea)if(t.mouseThrough)n=t.getGraphicBounds().contains(e,i);else{var s=this._rect;t.hitArea?s=t.hitArea:s.setTo(0,0,t.width,t.height),n=s.contains(e,i)}return n},e.runEvent=function(){var e=this._eventList.length;if(e){for(var i,n=0,s=0,r=0;n<e;){var o=this._eventList[n];switch("mousemove"!==o.type&&(this._prePoint.x=this._prePoint.y=-1e6),o.type){case"mousedown":this._touchIDs[0]=this._id++,t._isTouchRespond?t._isTouchRespond=!1:(this._isLeftMouse=0===o.button,this.initEvent(o),this.check(this._stage,this.mouseX,this.mouseY,this.onMouseDown));break;case"mouseup":this._isLeftMouse=0===o.button,this.initEvent(o),this.check(this._stage,this.mouseX,this.mouseY,this.onMouseUp);break;case"mousemove":Math.abs(this._prePoint.x-o.clientX)+Math.abs(this._prePoint.y-o.clientY)>=this.mouseMoveAccuracy&&(this._prePoint.x=o.clientX,this._prePoint.y=o.clientY,this.initEvent(o),this.check(this._stage,this.mouseX,this.mouseY,this.onMouseMove));break;case"touchstart":t._isTouchRespond=!0,this._isLeftMouse=!0;var a=o.changedTouches;for(s=0,r=a.length;s<r;s++)i=a[s],(t.multiTouchEnabled||isNaN(this._curTouchID))&&(this._curTouchID=i.identifier,this._id%200==0&&(this._touchIDs={}),this._touchIDs[i.identifier]=this._id++,this.initEvent(i,o),this.check(this._stage,this.mouseX,this.mouseY,this.onMouseDown));break;case"touchend":case"touchcancel":t._isTouchRespond=!0,this._isLeftMouse=!0;var h=o.changedTouches;for(s=0,r=h.length;s<r;s++)if(i=h[s],t.multiTouchEnabled||i.identifier==this._curTouchID){this._curTouchID=NaN,this.initEvent(i,o);this.check(this._stage,this.mouseX,this.mouseY,this.onMouseUp)||this.onMouseUp(null)}break;case"touchmove":var l=o.changedTouches;for(s=0,r=l.length;s<r;s++)i=l[s],(t.multiTouchEnabled||i.identifier==this._curTouchID)&&(this.initEvent(i,o),this.check(this._stage,this.mouseX,this.mouseY,this.onMouseMove));break;case"wheel":case"mousewheel":case"DOMMouseScroll":this.checkMouseWheel(o);break;case"mouseout":y.I.stageMouseOut();break;case"mouseover":this._stage.event("mouseover",this._event.setTo("mouseover",this._stage,this._stage))}n++}this._eventList.length=0}},t.enabled=!0,t.multiTouchEnabled=!0,t._isTouchRespond=!1,t._isFirstTouch=!0,n(t,["instance",function(){return this.instance=new t}]),t}()),y=function(){function t(){this.preOvers=[],this.preDowns=[],this.preRightDowns=[],this.enable=!0,this._lastClickTime=0,this._event=new g}s(t,"laya.events.TouchManager");var e=t.prototype;return e._clearTempArrs=function(){t._oldArr.length=0,t._newArr.length=0,t._tEleArr.length=0},e.getTouchFromArr=function(t,e){var i=0,n=0;n=e.length;var s;for(i=0;i<n;i++)if((s=e[i]).id==t)return s;return null},e.removeTouchFromArr=function(t,e){var i=0;for(i=e.length-1;i>=0;i--)e[i].id==t&&e.splice(i,1)},e.createTouchO=function(t,e){var i;return i=X.getItem("TouchData")||{},i.id=e,i.tar=t,i},e.onMouseDown=function(e,i,n){if(void 0===n&&(n=!1),this.enable){var s,r,o;s=this.getTouchFromArr(i,this.preOvers),o=this.getEles(e,null,t._tEleArr),s?s.tar=e:(r=this.createTouchO(e,i),this.preOvers.push(r)),N.onMobile&&this.sendEvents(o,"mouseover",i);var a;a=n?this.preDowns:this.preRightDowns,(s=this.getTouchFromArr(i,a))?s.tar=e:(r=this.createTouchO(e,i),a.push(r)),this.sendEvents(o,n?"mousedown":"rightmousedown",i),this._clearTempArrs()}},e.sendEvents=function(t,e,i){void 0===i&&(i=0);var n=0,s=0;s=t.length,this._event._stoped=!1;var r;r=t[0];var o;for(n=0;n<s;n++){if((o=t[n]).destroyed)return;if(o.event(e,this._event.setTo(e,o,r)),this._event._stoped)break}},e.getEles=function(t,e,i){for(i?i.length=0:i=[];t&&t!=e;)i.push(t),t=t.parent;return i},e.checkMouseOutAndOverOfMove=function(e,i,n){if(void 0===n&&(n=0),i!=e){var s,r,o=0,a=0;if(i.contains(e))r=this.getEles(e,i,t._tEleArr),this.sendEvents(r,"mouseover",n);else if(e.contains(i))r=this.getEles(i,e,t._tEleArr),this.sendEvents(r,"mouseout",n);else{(r=t._tEleArr).length=0;var h;h=this.getEles(i,null,t._oldArr);var l;l=this.getEles(e,null,t._newArr),a=h.length;var u=0;for(o=0;o<a;o++){if(s=h[o],(u=l.indexOf(s))>=0){l.splice(u,l.length-u);break}r.push(s)}r.length>0&&this.sendEvents(r,"mouseout",n),l.length>0&&this.sendEvents(l,"mouseover",n)}}},e.onMouseMove=function(e,i){if(this.enable){var n,s;(n=this.getTouchFromArr(i,this.preOvers))?(this.checkMouseOutAndOverOfMove(e,n.tar),n.tar=e,s=this.getEles(e,null,t._tEleArr)):(s=this.getEles(e,null,t._tEleArr),this.sendEvents(s,"mouseover",i),this.preOvers.push(this.createTouchO(e,i))),this.sendEvents(s,"mousemove",i),this._clearTempArrs()}},e.getLastOvers=function(){return t._tEleArr.length=0,this.preOvers.length>0&&this.preOvers[0].tar?this.getEles(this.preOvers[0].tar,null,t._tEleArr):(t._tEleArr.push(i.stage),t._tEleArr)},e.stageMouseOut=function(){var t;t=this.getLastOvers(),this.preOvers.length=0,this.sendEvents(t,"mouseout",0)},e.onMouseUp=function(e,i,n){if(void 0===n&&(n=!1),this.enable){var s,r,o,a,h,l=0,u=0,c=N.onMobile;r=this.getEles(e,null,t._tEleArr),this.sendEvents(r,n?"mouseup":"rightmouseup",i);var _;if(_=n?this.preDowns:this.preRightDowns,s=this.getTouchFromArr(i,_)){var d=!1,f=N.now();if(d=f-this._lastClickTime<300,this._lastClickTime=f,e==s.tar)h=r;else for(o=this.getEles(s.tar,null,t._oldArr),(h=t._newArr).length=0,u=o.length,l=0;l<u;l++)a=o[l],r.indexOf(a)>=0&&h.push(a);h.length>0&&this.sendEvents(h,n?"click":"rightclick",i),n&&d&&this.sendEvents(h,"doubleclick",i),this.removeTouchFromArr(i,_),s.tar=null,X.recover("TouchData",s)}else;(s=this.getTouchFromArr(i,this.preOvers))&&c&&((h=this.getEles(s.tar,null,h))&&h.length>0&&this.sendEvents(h,"mouseout",i),this.removeTouchFromArr(i,this.preOvers),s.tar=null,X.recover("TouchData",s)),this._clearTempArrs()}},t._oldArr=[],t._newArr=[],t._tEleArr=[],n(t,["I",function(){return this.I=new t}]),t}(),w=function(){function t(){this._action=null}s(t,"laya.filters.Filter");var e=t.prototype;return i.imps(e,{"laya.filters.IFilter":!0}),e.callNative=function(t){},r(0,e,"type",function(){return-1}),r(0,e,"action",function(){return this._action}),t.BLUR=16,t.COLOR=32,t.GLOW=8,t._filterStart=null,t._filterEnd=null,t._EndTarget=null,t._recycleScope=null,t._filter=null,t._useSrc=null,t._endSrc=null,t._useOut=null,t._endOut=null,t}(),x=function(){function t(){this.data=null}s(t,"laya.filters.ColorFilterAction");var e=t.prototype;return i.imps(e,{"laya.filters.IFilterAction":!0}),e.apply=function(t){var e=t.ctx.ctx,i=t.ctx.ctx.canvas;if(0==i.width||0==i.height)return i;for(var n,s=e.getImageData(0,0,i.width,i.height),r=s.data,o=0,a=r.length;o<a;o+=4)n=this.getColor(r[o],r[o+1],r[o+2],r[o+3]),0!=r[o+3]&&(r[o]=n[0],r[o+1]=n[1],r[o+2]=n[2],r[o+3]=n[3]);return e.putImageData(s,0,0),t},e.getColor=function(t,e,i,n){var s=[];if(this.data._mat&&this.data._alpha){var r=this.data._mat,o=this.data._alpha;s[0]=r[0]*t+r[1]*e+r[2]*i+r[3]*n+o[0],s[1]=r[4]*t+r[5]*e+r[6]*i+r[7]*n+o[1],s[2]=r[8]*t+r[9]*e+r[10]*i+r[11]*n+o[2],s[3]=r[12]*t+r[13]*e+r[14]*i+r[15]*n+o[3]}return s},t}(),T=(function(){function t(){}s(t,"laya.maths.Arith"),t.formatR=function(t){return t>Math.PI&&(t-=2*Math.PI),t<-Math.PI&&(t+=2*Math.PI),t},t.isPOT=function(t,e){return t>0&&0==(t&t-1)&&e>0&&0==(e&e-1)},t.setMatToArray=function(t,e){t.a,t.b,t.c,t.d,t.tx,t.ty,e[0]=t.a,e[1]=t.b,e[4]=t.c,e[5]=t.d,e[12]=t.tx,e[13]=t.ty}}(),function(){function t(){this._controlPoints=[new S,new S,new S],this._calFun=this.getPoint2}s(t,"laya.maths.Bezier");var e=t.prototype;return e._switchPoint=function(t,e){var i=this._controlPoints.shift();i.setTo(t,e),this._controlPoints.push(i)},e.getPoint2=function(t,e){var i=this._controlPoints[0],n=this._controlPoints[1],s=this._controlPoints[2],r=Math.pow(1-t,2)*i.x+2*t*(1-t)*n.x+Math.pow(t,2)*s.x,o=Math.pow(1-t,2)*i.y+2*t*(1-t)*n.y+Math.pow(t,2)*s.y;e.push(r,o)},e.getPoint3=function(t,e){var i=this._controlPoints[0],n=this._controlPoints[1],s=this._controlPoints[2],r=this._controlPoints[3],o=Math.pow(1-t,3)*i.x+3*n.x*t*(1-t)*(1-t)+3*s.x*t*t*(1-t)+r.x*Math.pow(t,3),a=Math.pow(1-t,3)*i.y+3*n.y*t*(1-t)*(1-t)+3*s.y*t*t*(1-t)+r.y*Math.pow(t,3);e.push(o,a)},e.insertPoints=function(t,e){var i=NaN,n=NaN;for(n=1/(t=t>0?t:5),i=0;i<=1;i+=n)this._calFun(i,e)},e.getBezierPoints=function(t,e,i){void 0===e&&(e=5),void 0===i&&(i=2);var n=0,s=0;if((s=t.length)<2*(i+1))return[];var r;switch(r=[],i){case 2:this._calFun=this.getPoint2;break;case 3:this._calFun=this.getPoint3;break;default:return[]}for(;this._controlPoints.length<=i;)this._controlPoints.push(new S);for(n=0;n<2*i;n+=2)this._switchPoint(t[n],t[n+1]);for(n=2*i;n<s;n+=2)this._switchPoint(t[n],t[n+1]),n/2%i==0&&this.insertPoints(e,r);return r},n(t,["I",function(){return this.I=new t}]),t}()),b=function(){function t(){}return s(t,"laya.maths.GrahamScan"),t.multiply=function(t,e,i){return(t.x-i.x)*(e.y-i.y)-(e.x-i.x)*(t.y-i.y)},t.dis=function(t,e){return(t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y)},t._getPoints=function(e,i,n){for(void 0===i&&(i=!1),t._mPointList||(t._mPointList=[]);t._mPointList.length<e;)t._mPointList.push(new S);return n||(n=[]),n.length=0,i?t.getFrom(n,t._mPointList,e):t.getFromR(n,t._mPointList,e),n},t.getFrom=function(t,e,i){var n=0;for(n=0;n<i;n++)t.push(e[n]);return t},t.getFromR=function(t,e,i){var n=0;for(n=0;n<i;n++)t.push(e.pop());return t},t.pListToPointList=function(e,i){void 0===i&&(i=!1);var n=0,s=e.length/2,r=t._getPoints(s,i,t._tempPointList);for(n=0;n<s;n++)r[n].setTo(e[n+n],e[n+n+1]);return r},t.pointListToPlist=function(e){var i,n=0,s=e.length,r=t._temPList;for(r.length=0,n=0;n<s;n++)i=e[n],r.push(i.x,i.y);return r},t.scanPList=function(e){return K.copyArray(e,t.pointListToPlist(t.scan(t.pListToPointList(e,!0))))},t.scan=function(e){var i,n,s,r=0,o=0,a=0,h=e.length,l={};for((n=t._temArr).length=0,r=(h=e.length)-1;r>=0;r--)s=(i=e[r]).x+"_"+i.y,l.hasOwnProperty(s)||(l[s]=!0,n.push(i));for(h=n.length,K.copyArray(e,n),r=1;r<h;r++)(e[r].y<e[a].y||e[r].y==e[a].y&&e[r].x<e[a].x)&&(a=r);for(i=e[0],e[0]=e[a],e[a]=i,r=1;r<h-1;r++){for(a=r,o=r+1;o<h;o++)(t.multiply(e[o],e[a],e[0])>0||0==t.multiply(e[o],e[a],e[0])&&t.dis(e[0],e[o])<t.dis(e[0],e[a]))&&(a=o);i=e[r],e[r]=e[a],e[a]=i}if(n=t._temArr,n.length=0,e.length<3)return K.copyArray(n,e);for(n.push(e[0],e[1],e[2]),r=3;r<h;r++){for(;n.length>=2&&t.multiply(e[r],n[n.length-1],n[n.length-2])>=0;)n.pop();e[r]&&n.push(e[r])}return n},t._mPointList=null,t._tempPointList=[],t._temPList=[],t._temArr=[],t}(),C=function(){function t(){}return s(t,"laya.maths.MathUtil"),t.subtractVector3=function(t,e,i){i[0]=t[0]-e[0],i[1]=t[1]-e[1],i[2]=t[2]-e[2]},t.lerp=function(t,e,i){return t*(1-i)+e*i},t.scaleVector3=function(t,e,i){i[0]=t[0]*e,i[1]=t[1]*e,i[2]=t[2]*e},t.lerpVector3=function(t,e,i,n){var s=t[0],r=t[1],o=t[2];n[0]=s+i*(e[0]-s),n[1]=r+i*(e[1]-r),n[2]=o+i*(e[2]-o)},t.lerpVector4=function(t,e,i,n){var s=t[0],r=t[1],o=t[2],a=t[3];n[0]=s+i*(e[0]-s),n[1]=r+i*(e[1]-r),n[2]=o+i*(e[2]-o),n[3]=a+i*(e[3]-a)},t.slerpQuaternionArray=function(t,e,i,n,s,r,o){var a,h,l,u,c,_=t[e+0],d=t[e+1],f=t[e+2],p=t[e+3],g=i[n+0],m=i[n+1],v=i[n+2],y=i[n+3];return(h=_*g+d*m+f*v+p*y)<0&&(h=-h,g=-g,m=-m,v=-v,y=-y),1-h>1e-6?(a=Math.acos(h),l=Math.sin(a),u=Math.sin((1-s)*a)/l,c=Math.sin(s*a)/l):(u=1-s,c=s),r[o+0]=u*_+c*g,r[o+1]=u*d+c*m,r[o+2]=u*f+c*v,r[o+3]=u*p+c*y,r},t.getRotation=function(t,e,i,n){return Math.atan2(n-e,i-t)/Math.PI*180},t.sortBigFirst=function(t,e){return t==e?0:e>t?1:-1},t.sortSmallFirst=function(t,e){return t==e?0:e>t?-1:1},t.sortNumBigFirst=function(t,e){return parseFloat(e)-parseFloat(t)},t.sortNumSmallFirst=function(t,e){return parseFloat(t)-parseFloat(e)},t.sortByKey=function(e,i,n){void 0===i&&(i=!1),void 0===n&&(n=!0);var s;return s=i?n?t.sortNumBigFirst:t.sortBigFirst:n?t.sortNumSmallFirst:t.sortSmallFirst,function(t,i){return s(t[e],i[e])}},t}(),M=function(){function t(t,e,i,n,s,r){this.inPool=!1,this.bTransform=!1,void 0===t&&(t=1),void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=1),void 0===s&&(s=0),void 0===r&&(r=0),this.a=t,this.b=e,this.c=i,this.d=n,this.tx=s,this.ty=r,this._checkTransform()}s(t,"laya.maths.Matrix");var e=t.prototype;return e.identity=function(){return this.a=this.d=1,this.b=this.tx=this.ty=this.c=0,this.bTransform=!1,this},e._checkTransform=function(){return this.bTransform=1!==this.a||0!==this.b||0!==this.c||1!==this.d},e.setTranslate=function(t,e){return this.tx=t,this.ty=e,this},e.translate=function(t,e){return this.tx+=t,this.ty+=e,this},e.scale=function(t,e){this.a*=t,this.d*=e,this.c*=t,this.b*=e,this.tx*=t,this.ty*=e,this.bTransform=!0},e.rotate=function(t){var e=Math.cos(t),i=Math.sin(t),n=this.a,s=this.c,r=this.tx;this.a=n*e-this.b*i,this.b=n*i+this.b*e,this.c=s*e-this.d*i,this.d=s*i+this.d*e,this.tx=r*e-this.ty*i,this.ty=r*i+this.ty*e,this.bTransform=!0},e.skew=function(t,e){var i=Math.tan(t),n=Math.tan(e),s=this.a,r=this.b;return this.a+=n*this.c,this.b+=n*this.d,this.c+=i*s,this.d+=i*r,this},e.invertTransformPoint=function(t){var e=this.a,i=this.b,n=this.c,s=this.d,r=this.tx,o=e*s-i*n,a=s/o,h=-i/o,l=-n/o,u=e/o,c=(n*this.ty-s*r)/o,_=-(e*this.ty-i*r)/o;return t.setTo(a*t.x+l*t.y+c,h*t.x+u*t.y+_)},e.transformPoint=function(t){return t.setTo(this.a*t.x+this.c*t.y+this.tx,this.b*t.x+this.d*t.y+this.ty)},e.transformPointN=function(t){return t.setTo(this.a*t.x+this.c*t.y,this.b*t.x+this.d*t.y)},e.transformPointArray=function(t,e){for(var i=t.length,n=0;n<i;n+=2){var s=t[n],r=t[n+1];e[n]=this.a*s+this.c*r+this.tx,e[n+1]=this.b*s+this.d*r+this.ty}return e},e.transformPointArrayScale=function(t,e){for(var i=t.length,n=0;n<i;n+=2){var s=t[n],r=t[n+1];e[n]=this.a*s+this.c*r,e[n+1]=this.b*s+this.d*r}return e},e.getScaleX=function(){return 0===this.b?this.a:Math.sqrt(this.a*this.a+this.b*this.b)},e.getScaleY=function(){return 0===this.c?this.d:Math.sqrt(this.c*this.c+this.d*this.d)},e.invert=function(){var t=this.a,e=this.b,i=this.c,n=this.d,s=this.tx,r=t*n-e*i;return this.a=n/r,this.b=-e/r,this.c=-i/r,this.d=t/r,this.tx=(i*this.ty-n*s)/r,this.ty=-(t*this.ty-e*s)/r,this},e.setTo=function(t,e,i,n,s,r){return this.a=t,this.b=e,this.c=i,this.d=n,this.tx=s,this.ty=r,this},e.concat=function(t){var e=this.a,i=this.c,n=this.tx;return this.a=e*t.a+this.b*t.c,this.b=e*t.b+this.b*t.d,this.c=i*t.a+this.d*t.c,this.d=i*t.b+this.d*t.d,this.tx=n*t.a+this.ty*t.c+t.tx,this.ty=n*t.b+this.ty*t.d+t.ty,this},e.scaleEx=function(t,e){var i=this.a,n=this.b,s=this.c,r=this.d;0!==n||0!==s?(this.a=t*i,this.b=t*n,this.c=e*s,this.d=e*r):(this.a=t*i,this.b=0*r,this.c=0*i,this.d=e*r),this.bTransform=!0},e.rotateEx=function(t){var e=Math.cos(t),i=Math.sin(t),n=this.a,s=this.b,r=this.c,o=this.d;0!==s||0!==r?(this.a=e*n+i*r,this.b=e*s+i*o,this.c=-i*n+e*r,this.d=-i*s+e*o):(this.a=e*n,this.b=i*o,this.c=-i*n,this.d=e*o),this.bTransform=!0},e.clone=function(){var e=t.create();return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e.bTransform=this.bTransform,e},e.copyTo=function(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t.bTransform=this.bTransform,t},e.toString=function(){return this.a+","+this.b+","+this.c+","+this.d+","+this.tx+","+this.ty},e.destroy=function(){if(!this.inPool){var e=t._cache;this.inPool=!0,e._length||(e._length=0),e[e._length++]=this,this.a=this.d=1,this.b=this.c=this.tx=this.ty=0,this.bTransform=!1}},t.mul=function(t,e,i){var n=t.a,s=t.b,r=t.c,o=t.d,a=t.tx,h=t.ty,l=e.a,u=e.b,c=e.c,_=e.d,d=e.tx,f=e.ty;return 0!==u||0!==c?(i.a=n*l+s*c,i.b=n*u+s*_,i.c=r*l+o*c,i.d=r*u+o*_,i.tx=l*a+c*h+d,i.ty=u*a+_*h+f):(i.a=n*l,i.b=s*_,i.c=r*l,i.d=o*_,i.tx=l*a+d,i.ty=_*h+f),i},t.mul16=function(t,e,i){var n=t.a,s=t.b,r=t.c,o=t.d,a=t.tx,h=t.ty,l=e.a,u=e.b,c=e.c,_=e.d,d=e.tx,f=e.ty;return 0!==u||0!==c?(i[0]=n*l+s*c,i[1]=n*u+s*_,i[4]=r*l+o*c,i[5]=r*u+o*_,i[12]=l*a+c*h+d,i[13]=u*a+_*h+f):(i[0]=n*l,i[1]=s*_,i[4]=r*l,i[5]=o*_,i[12]=l*a+d,i[13]=_*h+f),i},t.mulPre=function(t,e,i,n,s,r,o,a){var h=t.a,l=t.b,u=t.c,c=t.d,_=t.tx,d=t.ty;return 0!==i||0!==n?(a.a=h*e+l*n,a.b=h*i+l*s,a.c=u*e+c*n,a.d=u*i+c*s,a.tx=e*_+n*d+r,a.ty=i*_+s*d+o):(a.a=h*e,a.b=l*s,a.c=u*e,a.d=c*s,a.tx=e*_+r,a.ty=s*d+o),a},t.mulPos=function(t,e,i,n,s,r,o,a){var h=t.a,l=t.b,u=t.c,c=t.d,_=t.tx,d=t.ty;return 0!==l||0!==u?(a.a=e*h+i*u,a.b=e*l+i*c,a.c=n*h+s*u,a.d=n*l+s*c,a.tx=h*r+u*o+_,a.ty=l*r+c*o+d):(a.a=e*h,a.b=i*c,a.c=n*h,a.d=s*c,a.tx=h*r+_,a.ty=c*o+d),a},t.preMul=function(t,e,i){var n=t.a,s=t.b,r=t.c,o=t.d,a=e.a,h=e.b,l=e.c,u=e.d,c=e.tx,_=e.ty;return i.a=a*n,i.b=i.c=0,i.d=u*o,i.tx=c*n+t.tx,i.ty=_*o+t.ty,0===h&&0===l&&0===s&&0===r||(i.a+=h*r,i.d+=l*s,i.b+=a*s+h*o,i.c+=l*n+u*r,i.tx+=_*r,i.ty+=c*s),i},t.preMulXY=function(t,e,i,n){var s=t.a,r=t.b,o=t.c,a=t.d;return n.a=s,n.b=r,n.c=o,n.d=a,n.tx=e*s+t.tx+i*o,n.ty=i*a+t.ty+e*r,n},t.create=function(){var e=t._cache,i=e._length?e[--e._length]:new t;return i.inPool=!1,i},t.EMPTY=new t,t.TEMP=new t,t._cache=[],t}(),S=function(){function t(t,e){void 0===t&&(t=0),void 0===e&&(e=0),this.x=t,this.y=e}s(t,"laya.maths.Point");var e=t.prototype;return e.setTo=function(t,e){return this.x=t,this.y=e,this},e.distance=function(t,e){return Math.sqrt((this.x-t)*(this.x-t)+(this.y-e)*(this.y-e))},e.toString=function(){return this.x+","+this.y},e.normalize=function(){var t=Math.sqrt(this.x*this.x+this.y*this.y);if(t>0){var e=1/t;this.x*=e,this.y*=e}},t.TEMP=new t,t.EMPTY=new t,t}(),P=function(){function t(t,e,i,n){void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=0),this.x=t,this.y=e,this.width=i,this.height=n}s(t,"laya.maths.Rectangle");var e=t.prototype;return e.setTo=function(t,e,i,n){return this.x=t,this.y=e,this.width=i,this.height=n,this},e.copyFrom=function(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this},e.contains=function(t,e){return!(this.width<=0||this.height<=0)&&(t>=this.x&&t<this.right&&e>=this.y&&e<this.bottom)},e.intersects=function(t){return!(t.x>this.x+this.width||t.x+t.width<this.x||t.y>this.y+this.height||t.y+t.height<this.y)},e.intersection=function(e,i){return this.intersects(e)?(i||(i=new t),i.x=Math.max(this.x,e.x),i.y=Math.max(this.y,e.y),i.width=Math.min(this.right,e.right)-i.x,i.height=Math.min(this.bottom,e.bottom)-i.y,i):null},e.union=function(e,i){return i||(i=new t),this.clone(i),e.width<=0||e.height<=0?i:(i.addPoint(e.x,e.y),i.addPoint(e.right,e.bottom),this)},e.clone=function(e){return e||(e=new t),e.x=this.x,e.y=this.y,e.width=this.width,e.height=this.height,e},e.toString=function(){return this.x+","+this.y+","+this.width+","+this.height},e.equals=function(t){return!(!t||t.x!==this.x||t.y!==this.y||t.width!==this.width||t.height!==this.height)},e.addPoint=function(t,e){return this.x>t&&(this.width+=this.x-t,this.x=t),this.y>e&&(this.height+=this.y-e,this.y=e),this.width<t-this.x&&(this.width=t-this.x),this.height<e-this.y&&(this.height=e-this.y),this},e._getBoundPoints=function(){var e=t._temB;return e.length=0,0==this.width||0==this.height?e:(e.push(this.x,this.y,this.x+this.width,this.y,this.x,this.y+this.height,this.x+this.width,this.y+this.height),e)},e.isEmpty=function(){return this.width<=0||this.height<=0},r(0,e,"right",function(){return this.x+this.width}),r(0,e,"bottom",function(){return this.y+this.height}),t._getBoundPointS=function(e,i,n,s){var r=t._temA;return r.length=0,0==n||0==s?r:(r.push(e,i,e+n,i,e,i+s,e+n,i+s),r)},t._getWrapRec=function(e,i){if(!e||e.length<1)return i?i.setTo(0,0,0,0):t.TEMP.setTo(0,0,0,0);i=i||new t;var n,s,r,o,a,h=e.length,l=S.TEMP;for(r=a=-(s=o=99999),n=0;n<h;n+=2)l.x=e[n],l.y=e[n+1],s=s<l.x?s:l.x,o=o<l.y?o:l.y,r=r>l.x?r:l.x,a=a>l.y?a:l.y;return i.setTo(s,o,r-s,a-o)},t.EMPTY=new t,t.TEMP=new t,t._temB=[],t._temA=[],t}(),E=function(){function t(){}return s(t,"laya.media.SoundManager"),r(1,t,"useAudioMusic",function(){return t._useAudioMusic},function(e){t._useAudioMusic=e,t._musicClass=e?et:null}),r(1,t,"autoStopMusic",function(){return t._autoStopMusic},function(e){i.stage.off("blur",null,t._stageOnBlur),i.stage.off("focus",null,t._stageOnFocus),i.stage.off("visibilitychange",null,t._visibilityChange),t._autoStopMusic=e,e&&(i.stage.on("blur",null,t._stageOnBlur),i.stage.on("focus",null,t._stageOnFocus),i.stage.on("visibilitychange",null,t._visibilityChange))}),r(1,t,"muted",function(){return t._muted},function(e){e!=t._muted&&(e&&t.stopAllSound(),t.musicMuted=e,t._muted=e)}),r(1,t,"musicMuted",function(){return t._musicMuted},function(e){e!=t._musicMuted&&(e?(t._tMusic&&t._musicChannel&&!t._musicChannel.isStopped?t._musicChannel.pause():t._musicChannel=null,t._musicMuted=e):(t._musicMuted=e,t._tMusic&&t._musicChannel&&t._musicChannel.resume()))}),r(1,t,"soundMuted",function(){return t._soundMuted},function(e){t._soundMuted=e}),t.addChannel=function(e){t._channels.indexOf(e)>=0||t._channels.push(e)},t.removeChannel=function(e){var i=0;for(i=t._channels.length-1;i>=0;i--)t._channels[i]==e&&t._channels.splice(i,1)},t.disposeSoundIfNotUsed=function(e){var i=0;for(i=t._channels.length-1;i>=0;i--)if(t._channels[i].url==e)return;t.destroySound(e)},t._visibilityChange=function(){i.stage.isVisibility?t._stageOnFocus():t._stageOnBlur()},t._stageOnBlur=function(){t._isActive=!1,t._musicChannel&&(t._musicChannel.isStopped||(t._blurPaused=!0,t._musicChannel.pause())),t.stopAllSound(),i.stage.once("mousedown",null,t._stageOnFocus)},t._recoverWebAudio=function(){st.ctx&&"running"!=st.ctx.state&&st.ctx.resume()},t._stageOnFocus=function(){t._isActive=!0,t._recoverWebAudio(),i.stage.off("mousedown",null,t._stageOnFocus),t._blurPaused&&t._musicChannel&&t._musicChannel.isStopped&&(t._blurPaused=!1,t._musicChannel.resume())},t.playSound=function(e,n,s,r,o){if(void 0===n&&(n=1),void 0===o&&(o=0),!t._isActive||!e)return null;if(t._muted)return null;if(t._recoverWebAudio(),(e=L.formatURL(e))==t._tMusic){if(t._musicMuted)return null}else{if(R.isConchApp){var a=K.getFileExtension(e);if("wav"!=a&&"ogg"!=a)return alert("The sound only supports wav or ogg format,for optimal performance reason,please refer to the official website document."),null}if(t._soundMuted)return null}var h;N.onMiniGame||(h=i.loader.getRes(e)),r||(r=t._soundClass),h||((h=new r).load(e),ot.cacheRes(e,h));var l;return(l=h.play(o,n))?(l.url=e,l.volume=e==t._tMusic?t.musicVolume:t.soundVolume,l.completeHandler=s,l):null},t.destroySound=function(t){var e=i.loader.getRes(t);e&&(ot.clearRes(t),e.dispose())},t.playMusic=function(e,i,n,s){return void 0===i&&(i=0),void 0===s&&(s=0),e=L.formatURL(e),t._tMusic=e,t._musicChannel&&t._musicChannel.stop(),t._musicChannel=t.playSound(e,i,n,t._musicClass,s)},t.stopSound=function(e){e=L.formatURL(e);var i,n=0;for(n=t._channels.length-1;n>=0;n--)(i=t._channels[n]).url==e&&i.stop()},t.stopAll=function(){t._tMusic=null;var e=0;for(e=t._channels.length-1;e>=0;e--)t._channels[e].stop()},t.stopAllSound=function(){var e,i=0;for(i=t._channels.length-1;i>=0;i--)(e=t._channels[i]).url!=t._tMusic&&e.stop()},t.stopMusic=function(){t._musicChannel&&t._musicChannel.stop(),t._tMusic=null},t.setSoundVolume=function(e,i){if(i)i=L.formatURL(i),t._setVolume(i,e);else{t.soundVolume=e;var n,s=0;for(s=t._channels.length-1;s>=0;s--)(n=t._channels[s]).url!=t._tMusic&&(n.volume=e)}},t.setMusicVolume=function(e){t.musicVolume=e,t._setVolume(t._tMusic,e)},t._setVolume=function(e,i){e=L.formatURL(e);var n,s=0;for(s=t._channels.length-1;s>=0;s--)(n=t._channels[s]).url==e&&(n.volume=i)},t.musicVolume=1,t.soundVolume=1,t.playbackRate=1,t._useAudioMusic=!0,t._muted=!1,t._soundMuted=!1,t._musicMuted=!1,t._tMusic=null,t._musicChannel=null,t._channels=[],t._autoStopMusic=!1,t._blurPaused=!1,t._isActive=!0,t._soundClass=null,t._musicClass=null,t.autoReleaseSound=!0,t}(),I=function(){function e(){}var i;return s(e,"laya.net.LocalStorage"),e.__init__=function(){e._baseClass||(e._baseClass=i,i.init()),e.items=e._baseClass.items,e.support=e._baseClass.support},e.setItem=function(t,i){e._baseClass.setItem(t,i)},e.getItem=function(t){return e._baseClass.getItem(t)},e.setJSON=function(t,i){e._baseClass.setJSON(t,i)},e.getJSON=function(t){return e._baseClass.getJSON(t)},e.removeItem=function(t){e._baseClass.removeItem(t)},e.clear=function(){e._baseClass.clear()},e._baseClass=null,e.items=null,e.support=!1,e.__init$=function(){i=function(){function e(){}return s(e,""),e.init=function(){try{e.items=t.localStorage,e.setItem("laya","1"),e.removeItem("laya"),e.support=!0}catch(t){}e.support||console.log("LocalStorage is not supprot or browser is private mode.")},e.setItem=function(t,i){try{e.support&&e.items.setItem(t,i)}catch(t){console.warn("set localStorage failed",t)}},e.getItem=function(t){return e.support?e.items.getItem(t):null},e.setJSON=function(t,i){try{e.support&&e.items.setItem(t,JSON.stringify(i))}catch(t){console.warn("set localStorage failed",t)}},e.getJSON=function(t){return JSON.parse(e.support?e.items.getItem(t):null)},e.removeItem=function(t){e.support&&e.items.removeItem(t)},e.clear=function(){e.support&&e.items.clear()},e.items=null,e.support=!1,e}()},e}(),A=(function(){function t(){}s(t,"laya.net.ResourceVersion"),t.enable=function(e,n,s){void 0===s&&(s=2),laya.net.ResourceVersion.type=s,i.loader.load(e,l.create(null,t.onManifestLoaded,[n]),null,"json"),L.customFormat=t.addVersionPrefix},t.onManifestLoaded=function(e,i){t.manifest=i,e.run(),i||console.warn("资源版本清单文件不存在，不使用资源版本管理。忽略ERR_FILE_NOT_FOUND错误。")},t.addVersionPrefix=function(e){return t.manifest&&t.manifest[e]?2==t.type?t.manifest[e]:t.manifest[e]+"/"+e:e},t.FOLDER_VERSION=1,t.FILENAME_VERSION=2,t.manifest=null,t.type=1}(),function(){function t(){this.fontName=null,this.complete=null,this.err=null,this._fontTxt=null,this._url=null,this._div=null,this._txtWidth=NaN,this._http=null}s(t,"laya.net.TTFLoader");var e=t.prototype;return e.load=function(t){this._url=t;var e=t.split(".ttf")[0].split("/");this.fontName=e[e.length-1],N.window.conch?this._loadConch():N.window.FontFace?this._loadWithFontFace():this._loadWithCSS()},e._loadConch=function(){this._http=new rt,this._http.on("error",this,this._onErr),this._http.on("complete",this,this._onHttpLoaded),this._http.send(this._url,null,"get","arraybuffer")},e._onHttpLoaded=function(t){N.window.conch.setFontFaceFromBuffer(this.fontName,t),this._clearHttp(),this._complete()},e._clearHttp=function(){this._http&&(this._http.off("error",this,this._onErr),this._http.off("complete",this,this._onHttpLoaded),this._http=null)},e._onErr=function(){this._clearHttp(),this.err&&(this.err.runWith("fail:"+this._url),this.err=null)},e._complete=function(){i.timer.clear(this,this._complete),i.timer.clear(this,this._checkComplete),this._div&&this._div.parentNode&&(this._div.parentNode.removeChild(this._div),this._div=null),this.complete&&(this.complete.runWith(this),this.complete=null)},e._checkComplete=function(){o.measureText("LayaTTFFont",this._fontTxt).width!=this._txtWidth&&this._complete()},e._loadWithFontFace=function(){var t=new N.window.FontFace(this.fontName,"url('"+this._url+"')");N.window.document.fonts.add(t);var e=this;t.loaded.then(function(){e._complete()}),t.load()},e._createDiv=function(){this._div=N.createElement("div"),this._div.innerHTML="laya";var t=this._div.style;t.fontFamily=this.fontName,t.position="absolute",t.left="-100px",t.top="-100px",N.document.body.appendChild(this._div)},e._loadWithCSS=function(){var t=this,e=N.createElement("style");e.type="text/css",N.document.body.appendChild(e),e.textContent="@font-face { font-family:'"+this.fontName+"'; src:url('"+this._url+"');}",this._fontTxt="40px "+this.fontName,this._txtWidth=o.measureText("LayaTTFFont",this._fontTxt).width;var n=this;e.onload=function(){i.timer.once(1e4,n,t._complete)},i.timer.loop(20,this,this._checkComplete),this._createDiv()},t._testString="LayaTTFFont",t}()),L=function(){function t(e){this._url=null,this._path=null,this._url=t.formatURL(e),this._path=t.getPath(e)}s(t,"laya.net.URL");var e=t.prototype;return r(0,e,"path",function(){return this._path}),r(0,e,"url",function(){return this._url}),t.formatURL=function(e,i){if(!e)return"null path";if(e.indexOf(":")>0)return e;null!=t.customFormat&&(e=t.customFormat(e,i));var n=e.charAt(0);if("."===n)return t.formatRelativePath((i||t.basePath)+e);if("~"===n)return t.rootPath+e.substring(1);if("d"===n){if(0===e.indexOf("data:image"))return e}else if("/"===n)return e;return(i||t.basePath)+e},t.formatRelativePath=function(t){for(var e=t.split("/"),i=0,n=e.length;i<n;i++)".."==e[i]&&(e.splice(i-1,2),i-=2);return e.join("/")},t.isAbsolute=function(t){return t.indexOf(":")>0||"/"==t.charAt(0)},t.getPath=function(t){var e=t.lastIndexOf("/");return e>0?t.substr(0,e+1):""},t.getFileName=function(t){var e=t.lastIndexOf("/");return e>0?t.substr(e+1):t},t.version={},t.basePath="",t.rootPath="",t.customFormat=function(e){var i=t.version[e];return!R.isConchApp&&i&&(e+="?v="+i),e},t}(),R=function(){function e(t,n){function s(){i.stage._loop(),N.window.requestAnimationFrame(s)}this._timeId=0;var r=e._mainCanvas.source.style;r.position="absolute",r.top=r.left="0px",r.background="#000000",e._mainCanvas.source.id="layaCanvas";var o=laya.renders.Render.isWebGL;e._mainCanvas.source.width=t,e._mainCanvas.source.height=n,o&&e.WebGL.init(e._mainCanvas,t,n),N.container.appendChild(e._mainCanvas.source),(e._context=new D(t,n,o?null:e._mainCanvas)).ctx.setIsMainContext(),N.window.requestAnimationFrame(s),i.stage.on("visibilitychange",this,this._onVisibilitychange)}s(e,"laya.renders.Render");var n=e.prototype;return n._onVisibilitychange=function(){i.stage.isVisibility?0!=this._timeId&&N.window.clearInterval(this._timeId):this._timeId=N.window.setInterval(this._enterFrame,1e3)},n._enterFrame=function(t){i.stage._loop()},r(1,e,"context",function(){return e._context}),r(1,e,"canvas",function(){return e._mainCanvas.source}),e._context=null,e._mainCanvas=null,e.WebGL=null,e.isConchNode=!1,e.isConchApp=!1,e.isConchWebGL=!1,e.isWebGL=!1,e.is3DMode=!1,e.optimizeTextureMemory=function(t,e){return!0},e.__init$=function(){t.ConchRenderType=t.ConchRenderType||1,t.ConchRenderType|=t.conch?4:0,e.isConchNode=5==(5&t.ConchRenderType),e.isConchApp=4==(4&t.ConchRenderType),e.isConchWebGL=6==t.ConchRenderType},e}(),D=function(){function t(e,i,n){this.x=0,this.y=0,this._drawTexture=function(t,e,i){i[0].loaded&&this.ctx.drawTexture(i[0],i[1],i[2],i[3],i[4],t,e)},this._fillTexture=function(t,e,i){i[0].loaded&&this.ctx.fillTexture(i[0],i[1]+t,i[2]+e,i[3],i[4],i[5],i[6],i[7])},this._drawTextureWithTransform=function(t,e,i){i[0].loaded&&this.ctx.drawTextureWithTransform(i[0],i[1],i[2],i[3],i[4],i[5],t,e,i[6])},this._fillQuadrangle=function(t,e,i){this.ctx.fillQuadrangle(i[0],i[1],i[2],i[3],i[4])},this._drawRect=function(t,e,i){var n=this.ctx;null!=i[4]&&(n.fillStyle=i[4],n.fillRect(t+i[0],e+i[1],i[2],i[3],null)),null!=i[5]&&(n.strokeStyle=i[5],n.lineWidth=i[6],n.strokeRect(t+i[0],e+i[1],i[2],i[3],i[6]))},this._drawPie=function(t,e,i){var n=this.ctx;R.isWebGL&&n.setPathId(i[8]),n.beginPath(),R.isWebGL?(n.movePath(i[0]+t,i[1]+e),n.moveTo(0,0)):n.moveTo(t+i[0],e+i[1]),n.arc(t+i[0],e+i[1],i[2],i[3],i[4]),n.closePath(),this._fillAndStroke(i[5],i[6],i[7],!0)},this._clipRect=function(t,e,i){this.ctx.clipRect(t+i[0],e+i[1],i[2],i[3])},this._fillRect=function(t,e,i){this.ctx.fillRect(t+i[0],e+i[1],i[2],i[3],i[4])},this._drawCircle=function(e,i,n){var s=this.ctx;R.isWebGL&&s.setPathId(n[6]),$.drawCall++,s.beginPath(),R.isWebGL&&s.movePath(n[0]+e,n[1]+i),s.arc(n[0]+e,n[1]+i,n[2],0,t.PI2),s.closePath(),this._fillAndStroke(n[3],n[4],n[5],!0)},this._fillCircle=function(e,i,n){$.drawCall++;var s=this.ctx;s.beginPath(),s.fillStyle=n[3],s.arc(n[0]+e,n[1]+i,n[2],0,t.PI2),s.fill()},this._setShader=function(t,e,i){this.ctx.setShader(i[0])},this._drawLine=function(t,e,i){var n=this.ctx;R.isWebGL&&n.setPathId(i[6]),n.beginPath(),n.strokeStyle=i[4],n.lineWidth=i[5],R.isWebGL?(n.movePath(t,e),n.moveTo(i[0],i[1]),n.lineTo(i[2],i[3])):(n.moveTo(t+i[0],e+i[1]),n.lineTo(t+i[2],e+i[3])),n.stroke()},this._drawLines=function(t,e,i){var n=this.ctx;R.isWebGL&&n.setPathId(i[5]),n.beginPath(),t+=i[0],e+=i[1],R.isWebGL&&n.movePath(t,e),n.strokeStyle=i[3],n.lineWidth=i[4];var s=i[2],r=2,o=s.length;if(R.isWebGL)for(n.moveTo(s[0],s[1]);r<o;)n.lineTo(s[r++],s[r++]);else for(n.moveTo(t+s[0],e+s[1]);r<o;)n.lineTo(t+s[r++],e+s[r++]);n.stroke()},this._drawLinesWebGL=function(t,e,i){this.ctx.drawLines(t+this.x+i[0],e+this.y+i[1],i[2],i[3],i[4])},this._drawCurves=function(t,e,i){this.ctx.drawCurves(t,e,i)},this._draw=function(t,e,i){i[0].call(null,this,t,e)},this._transformByMatrix=function(t,e,i){this.ctx.transformByMatrix(i[0])},this._setTransform=function(t,e,i){this.ctx.setTransform(i[0],i[1],i[2],i[3],i[4],i[5])},this._setTransformByMatrix=function(t,e,i){this.ctx.setTransformByMatrix(i[0])},this._save=function(t,e,i){this.ctx.save()},this._restore=function(t,e,i){this.ctx.restore()},this._translate=function(t,e,i){this.ctx.translate(i[0],i[1])},this._transform=function(t,e,i){this.ctx.translate(i[1]+t,i[2]+e);var n=i[0];this.ctx.transform(n.a,n.b,n.c,n.d,n.tx,n.ty),this.ctx.translate(-t-i[1],-e-i[2])},this._rotate=function(t,e,i){this.ctx.translate(i[1]+t,i[2]+e),this.ctx.rotate(i[0]),this.ctx.translate(-t-i[1],-e-i[2])},this._scale=function(t,e,i){this.ctx.translate(i[2]+t,i[3]+e),this.ctx.scale(i[0],i[1]),this.ctx.translate(-t-i[2],-e-i[3])},this._alpha=function(t,e,i){this.ctx.globalAlpha*=i[0]},this._setAlpha=function(t,e,i){this.ctx.globalAlpha=i[0]},this._fillText=function(t,e,i){this.ctx.fillText(i[0],i[1]+t,i[2]+e,i[3],i[4],i[5])},this._strokeText=function(t,e,i){this.ctx.strokeText(i[0],i[1]+t,i[2]+e,i[3],i[4],i[5],i[6])},this._fillBorderText=function(t,e,i){this.ctx.fillBorderText(i[0],i[1]+t,i[2]+e,i[3],i[4],i[5],i[6],i[7])},this._blendMode=function(t,e,i){this.ctx.globalCompositeOperation=i[0]},this._beginClip=function(t,e,i){this.ctx.beginClip&&this.ctx.beginClip(t+i[0],e+i[1],i[2],i[3])},this._setIBVB=function(t,e,i){this.ctx.setIBVB(i[0]+t,i[1]+e,i[2],i[3],i[4],i[5],i[6],i[7])},this._fillTrangles=function(t,e,i){this.ctx.fillTrangles(i[0],i[1]+t,i[2]+e,i[3],i[4])},this._drawPath=function(t,e,i){var n=this.ctx;R.isWebGL&&n.setPathId(-1),n.beginPath(),t+=i[0],e+=i[1],R.isWebGL&&n.movePath(t,e);for(var s=i[2],r=0,o=s.length;r<o;r++){var a=s[r];switch(a[0]){case"moveTo":R.isWebGL?n.moveTo(a[1],a[2]):n.moveTo(t+a[1],e+a[2]);break;case"lineTo":R.isWebGL?n.lineTo(a[1],a[2]):n.lineTo(t+a[1],e+a[2]);break;case"arcTo":R.isWebGL?n.arcTo(a[1],a[2],a[3],a[4],a[5]):n.arcTo(t+a[1],e+a[2],t+a[3],e+a[4],a[5]);break;case"closePath":n.closePath()}}var h=i[3];null!=h&&(n.fillStyle=h.fillStyle,n.fill());var l=i[4];null!=l&&(n.strokeStyle=l.strokeStyle,n.lineWidth=l.lineWidth||1,n.lineJoin=l.lineJoin,n.lineCap=l.lineCap,n.miterLimit=l.miterLimit,n.stroke())},this.drawPoly=function(t,e,i){this.ctx.drawPoly(t+this.x+i[0],e+this.y+i[1],i[2],i[3],i[4],i[5],i[6])},this._drawPoly=function(t,e,i){var n=this.ctx,s=i[2],r=2,o=s.length;if(R.isWebGL)for(n.setPathId(i[6]),n.beginPath(),t+=i[0],e+=i[1],n.movePath(t,e),n.moveTo(s[0],s[1]);r<o;)n.lineTo(s[r++],s[r++]);else for(n.beginPath(),t+=i[0],e+=i[1],n.moveTo(t+s[0],e+s[1]);r<o;)n.lineTo(t+s[r++],e+s[r++]);n.closePath(),this._fillAndStroke(i[3],i[4],i[5],i[7])},this._drawSkin=function(t,e,i){var n=i[0];if(n){var s=this.ctx;n.render(s,t,e)}},this._drawParticle=function(t,e,i){this.ctx.drawParticle(t+this.x,e+this.y,i[0])},this._setFilters=function(t,e,i){this.ctx.setFilters(i)},n?this.ctx=n.getContext("2d"):(n=yt.create("3D"),this.ctx=o.createWebGLContext2D(n),n._setContext(this.ctx)),n.size(e,i),this.canvas=n}s(t,"laya.renders.RenderContext");var e=t.prototype;return e.destroy=function(){this.canvas&&(this.canvas.destroy(),this.canvas=null,this.ctx=null),this.ctx&&(this.ctx.destroy(),this.ctx=null)},e.drawTexture=function(t,e,i,n,s){t.loaded&&this.ctx.drawTexture(t,e,i,n,s,this.x,this.y)},e._drawTextures=function(t,e,i){i[0].loaded&&this.ctx.drawTextures(i[0],i[1],t+this.x,e+this.y)},e.drawTextureWithTransform=function(t,e,i,n,s,r,o){t.loaded&&this.ctx.drawTextureWithTransform(t,e,i,n,s,r,this.x,this.y,o)},e.fillQuadrangle=function(t,e,i,n,s){this.ctx.fillQuadrangle(t,e,i,n,s)},e.drawCanvas=function(t,e,i,n,s){this.ctx.drawCanvas(t,e+this.x,i+this.y,n,s)},e.drawRect=function(t,e,i,n,s,r){void 0===r&&(r=1);var o=this.ctx;o.strokeStyle=s,o.lineWidth=r,o.strokeRect(t+this.x,e+this.y,i,n,r)},e._fillAndStroke=function(t,e,i,n){void 0===n&&(n=!1);var s=this.ctx;null!=t&&(s.fillStyle=t,R.isWebGL?s.fill(n):s.fill()),null!=e&&i>0&&(s.strokeStyle=e,s.lineWidth=i,s.stroke())},e.clipRect=function(t,e,i,n){this.ctx.clipRect(t+this.x,e+this.y,i,n)},e.fillRect=function(t,e,i,n,s){this.ctx.fillRect(t+this.x,e+this.y,i,n,s)},e.drawCircle=function(e,i,n,s,r){void 0===r&&(r=1),$.drawCall++;var o=this.ctx;o.beginPath(),o.strokeStyle=s,o.lineWidth=r,o.arc(e+this.x,i+this.y,n,0,t.PI2),o.stroke()},e.drawTriangles=function(t,e,i){if(R.isWebGL)this.ctx.drawTriangles(i[0],t+i[1],e+i[2],i[3],i[4],i[5],i[6],i[7],i[8],i[9]);else{var n=i[5],s=0,r=n.length,o=this.ctx;for(s=0;s<r;s+=3){var a=2*n[s],h=2*n[s+1],l=2*n[s+2];o.drawTriangle(i[0],i[3],i[4],a,h,l,i[6],!0)}}},e.fillCircle=function(e,i,n,s){$.drawCall++;var r=this.ctx;r.beginPath(),r.fillStyle=s,r.arc(e+this.x,i+this.y,n,0,t.PI2),r.fill()},e.setShader=function(t){this.ctx.setShader(t)},e.drawLine=function(t,e,i,n,s,r){void 0===r&&(r=1);var o=this.ctx;o.beginPath(),o.strokeStyle=s,o.lineWidth=r,o.moveTo(this.x+t,this.y+e),o.lineTo(this.x+i,this.y+n),o.stroke()},e.clear=function(){this.ctx.clear()},e.transformByMatrix=function(t){this.ctx.transformByMatrix(t)},e.setTransform=function(t,e,i,n,s,r){this.ctx.setTransform(t,e,i,n,s,r)},e.setTransformByMatrix=function(t){this.ctx.setTransformByMatrix(t)},e.save=function(){this.ctx.save()},e.restore=function(){this.ctx.restore()},e.translate=function(t,e){this.ctx.translate(t,e)},e.transform=function(t,e,i,n,s,r){this.ctx.transform(t,e,i,n,s,r)},e.rotate=function(t){this.ctx.rotate(t)},e.scale=function(t,e){this.ctx.scale(t,e)},e.alpha=function(t){this.ctx.globalAlpha*=t},e.setAlpha=function(t){this.ctx.globalAlpha=t},e.fillWords=function(t,e,i,n,s,r){void 0===r&&(r=0),this.ctx.fillWords(t,e,i,n,s,r)},e.fillBorderWords=function(t,e,i,n,s,r,o){this.ctx.fillBorderWords(t,e,i,n,s,r,o)},e.fillText=function(t,e,i,n,s,r){this.ctx.fillText(t,e+this.x,i+this.y,n,s,r)},e.strokeText=function(t,e,i,n,s,r,o){this.ctx.strokeText(t,e+this.x,i+this.y,n,s,r,o)},e.blendMode=function(t){this.ctx.globalCompositeOperation=t},e.flush=function(){this.ctx.flush&&this.ctx.flush()},e.addRenderObject=function(t){this.ctx.addRenderObject(t)},e.beginClip=function(t,e,i,n){this.ctx.beginClip&&this.ctx.beginClip(t,e,i,n)},e.endClip=function(){this.ctx.endClip&&this.ctx.endClip()},e.fillTrangles=function(t,e,i){this.ctx.fillTrangles(i[0],i[1],i[2],i[3],i.length>4?i[4]:null)},t.PI2=2*Math.PI,t}(),F=function(){function t(e,i){switch(this._next=i||t.NORENDER,e){case 0:return void(this._fun=this._no);case 1:return void(this._fun=this._image);case 2:return void(this._fun=this._alpha);case 4:return void(this._fun=this._transform);case 8:return void(this._fun=this._blend);case 16:return void(this._fun=this._canvas);case 64:return void(this._fun=this._mask);case 128:return void(this._fun=this._clip);case 256:return void(this._fun=this._style);case 512:return void(this._fun=this._graphics);case 2048:return void(this._fun=this._childs);case 1024:return void(this._fun=this._custom);case 513:case 517:return void(this._fun=this._image2);case 32:return void(this._fun=w._filter);case 69905:return void(this._fun=t._initRenderFun)}this.onCreate(e)}s(t,"laya.renders.RenderSprite");var e=t.prototype;return e.onCreate=function(t){},e._style=function(t,e,i,n){t._style.render(t,e,i,n);var s=this._next;s._fun.call(s,t,e,i,n)},e._no=function(t,e,i,n){},e._custom=function(t,e,i,n){t.customRender(e,i,n);var s=t._style._tf;this._next._fun.call(this._next,t,e,i-s.translateX,n-s.translateY)},e._clip=function(e,i,n,s){var r=this._next;if(r!=t.NORENDER){var o=e._style.scrollRect;i.ctx.save(),i.ctx.clipRect(n,s,o.width,o.height),r._fun.call(r,e,i,n-o.x,s-o.y),i.ctx.restore()}},e._blend=function(t,e,i,n){var s=t._style;s.blendMode&&(e.ctx.globalCompositeOperation=s.blendMode);var r=this._next;r._fun.call(r,t,e,i,n),e.ctx.globalCompositeOperation="source-over"},e._mask=function(t,e,i,n){var s=this._next;s._fun.call(s,t,e,i,n);var r=t.mask;r&&(e.ctx.globalCompositeOperation="destination-in",(r.numChildren>0||!r.graphics._isOnlyOne())&&(r.cacheAsBitmap=!0),r.render(e,i-t.pivotX,n-t.pivotY)),e.ctx.globalCompositeOperation="source-over"},e._graphics=function(t,e,i,n){var s=t._style._tf;t._graphics&&t._graphics._render(t,e,i-s.translateX,n-s.translateY);var r=this._next;r._fun.call(r,t,e,i,n)},e._image=function(t,e,i,n){var s=t._style;e.ctx.drawTexture2(i,n,s._tf.translateX,s._tf.translateY,t.transform,s.alpha,s.blendMode,t._graphics._one)},e._image2=function(t,e,i,n){var s=t._style._tf;e.ctx.drawTexture2(i,n,s.translateX,s.translateY,t.transform,1,null,t._graphics._one)},e._alpha=function(t,e,i,n){var s;if((s=t._style.alpha)>.01||t._needRepaint()){var r=e.ctx.globalAlpha;e.ctx.globalAlpha*=s;var o=this._next;o._fun.call(o,t,e,i,n),e.ctx.globalAlpha=r}},e._transform=function(e,i,n,s){var r=e.transform,o=this._next;r&&o!=t.NORENDER?(i.save(),i.transform(r.a,r.b,r.c,r.d,r.tx+n,r.ty+s),o._fun.call(o,e,i,0,0),i.restore()):o._fun.call(o,e,i,n,s)},e._childs=function(t,e,i,n){var s=t._style,r=s._tf;if(i=i-r.translateX+s.paddingLeft,n=n-r.translateY+s.paddingTop,s._calculation){var o=t._getWords();if(o){var a=s;a&&(a.stroke?e.fillBorderWords(o,i,n,a.font,a.color,a.strokeColor,a.stroke):e.fillWords(o,i,n,a.font,a.color,a.underLine))}}var h,l=t._childs,u=l.length;if(t.viewport||t.optimizeScrollRect&&t._style.scrollRect){var c=t.viewport||t._style.scrollRect,_=c.x,d=c.y,f=c.right,p=c.bottom,g=NaN,m=NaN;for(v=0;v<u;++v)(h=l[v]).visible&&(g=h._x)<f&&g+h.width>_&&(m=h._y)<p&&m+h.height>d&&h.render(e,i,n)}else for(var v=0;v<u;++v)(h=l[v])._style.visible&&h.render(e,i,n)},e._canvas=function(t,e,i,n){var s=t._$P.cacheCanvas;if(s){"bitmap"===s.type?$.canvasBitmap++:$.canvasNormal++;var r=s.ctx;if(t._needRepaint()||!r)this._canvas_repaint(t,e,i,n);else{var o=s._cacheRec;e.drawCanvas(r.canvas,i+o.x,n+o.y,o.width,o.height)}}else this._next._fun.call(this._next,t,e,i,n)},e._canvas_repaint=function(t,e,n,s){var r=t._$P.cacheCanvas,o=this._next;if(r){var a,h,l,u,c=r.ctx,_=t._needRepaint()||!c,d=r.type;if("bitmap"===d?$.canvasBitmap++:$.canvasNormal++,_){r._cacheRec||(r._cacheRec=new P);var f,p;R.isWebGL&&"bitmap"!==d?r._cacheRec.setTo(-t.pivotX,-t.pivotY,1,1):((u=t.getSelfBounds()).x=u.x-t.pivotX,u.y=u.y-t.pivotY,u.x=u.x-16,u.y=u.y-16,u.width=u.width+32,u.height=u.height+32,u.x=Math.floor(u.x+n)-n,u.y=Math.floor(u.y+s)-s,u.width=Math.floor(u.width),u.height=Math.floor(u.height),r._cacheRec.copyFrom(u)),u=r._cacheRec;var g=R.isWebGL?1:N.pixelRatio*i.stage.clientScaleX,m=R.isWebGL?1:N.pixelRatio*i.stage.clientScaleY;if(!R.isWebGL){var v,y=1,w=1;for(v=t;v&&v!=i.stage;)y*=v.scaleX,w*=v.scaleY,v=v.parent;R.isWebGL?(y<1&&(g*=y),w<1&&(m*=w)):(y>1&&(g*=y),w>1&&(m*=w))}if(t.scrollRect){var x=t.scrollRect;u.x-=x.x,u.y-=x.y}if(f=u.width*g,p=u.height*m,h=u.x,l=u.y,R.isWebGL&&"bitmap"===d&&(f>2048||p>2048))return console.warn("cache bitmap size larger than 2048,cache ignored"),r.ctx&&(X.recover("RenderContext",r.ctx),r.ctx.canvas.size(0,0),r.ctx=null),void o._fun.call(o,t,e,n,s);c||(c=r.ctx=X.getItem("RenderContext")||new D(f,p,yt.create("AUTO"))),c.ctx.sprite=t,(a=c.canvas).clear(),(a.width!=f||a.height!=p)&&a.size(f,p),"bitmap"===d?a.context.asBitmap=!0:"normal"===d&&(a.context.asBitmap=!1);var T;if(1!=g||1!=m){var b=c.ctx;b.save(),b.scale(g,m),!R.isConchWebGL&&R.isConchApp&&(T=t._$P.cf)&&b.setFilterMatrix&&b.setFilterMatrix(T._mat,T._alpha),o._fun.call(o,t,c,-h,-l),b.restore(),R.isConchApp&&!R.isConchWebGL||t._applyFilters()}else b=c.ctx,!R.isConchWebGL&&R.isConchApp&&(T=t._$P.cf)&&b.setFilterMatrix&&b.setFilterMatrix(T._mat,T._alpha),o._fun.call(o,t,c,-h,-l),R.isConchApp&&!R.isConchWebGL||t._applyFilters();t._$P.staticCache&&(r.reCache=!1),$.canvasReCache++}else h=(u=r._cacheRec).x,l=u.y,a=c.canvas;e.drawCanvas(a,n+h,s+l,u.width,u.height)}else o._fun.call(o,t,c,n,s)},t.__init__=function(){var e,i=0,n=0;for(e=o.createRenderSprite(69905,null),n=t.renders.length=4096,i=0;i<n;i++)t.renders[i]=e;t.renders[0]=o.createRenderSprite(0,null),function(e,i){for(var n=0,s=0;s<e.length;s++)n|=e[s],t.renders[n]=i}([1,512,4,2],new t(1,null)),t.renders[513]=o.createRenderSprite(513,null),t.renders[517]=new t(517,null)},t._initRenderFun=function(e,i,n,s){var r=e._renderType;(t.renders[r]=t._getTypeRender(r))._fun(e,i,n,s)},t._getTypeRender=function(t){for(var e=null,i=2048;i>1;)i&t&&(e=o.createRenderSprite(i,e)),i>>=1;return e},t.IMAGE=1,t.ALPHA=2,t.TRANSFORM=4,t.BLEND=8,t.CANVAS=16,t.FILTERS=32,t.MASK=64,t.CLIP=128,t.STYLE=256,t.GRAPHICS=512,t.CUSTOM=1024,t.CHILDS=2048,t.INIT=69905,t.renders=[],t.NORENDER=new t(0,null),t}(),k=function(){function t(){this._repaint=!1}s(t,"laya.resource.Context");var e=t.prototype;return e.replaceReset=function(){var e=0,i=0;i=t.replaceKeys.length;var n;for(e=0;e<i;e++)n=t.replaceKeys[e],this[t.newKeys[e]]=this[n]},e.replaceResotre=function(){this.__restore(),this.__reset()},e.setIsMainContext=function(){},e.drawTextures=function(t,e,i,n){$.drawCall+=e.length/2;for(var s=t.width,r=t.height,o=0,a=e.length;o<a;o+=2)this.drawTexture(t,e[o],e[o+1],s,r,i,n)},e.drawCanvas=function(t,e,i,n,s){$.drawCall++,this.drawImage(t.source,e,i,n,s)},e.fillRect=function(t,e,i,n,s){$.drawCall++,s&&(this.fillStyle=s),this.__fillRect(t,e,i,n)},e.fillText=function(t,e,i,n,s,r){$.drawCall++,arguments.length>3&&null!=n&&(this.font=n,this.fillStyle=s,this.textAlign=r,this.textBaseline="top"),this.__fillText(t,e,i)},e.fillBorderText=function(t,e,i,n,s,r,o,a){$.drawCall++,this.font=n,this.fillStyle=s,this.textBaseline="top",this.strokeStyle=r,this.lineWidth=o,this.textAlign=a,this.__strokeText(t,e,i),this.__fillText(t,e,i)},e.strokeText=function(t,e,i,n,s,r,o){$.drawCall++,arguments.length>3&&null!=n&&(this.font=n,this.strokeStyle=s,this.lineWidth=r,this.textAlign=o,this.textBaseline="top"),this.__strokeText(t,e,i)},e.transformByMatrix=function(t){this.transform(t.a,t.b,t.c,t.d,t.tx,t.ty)},e.setTransformByMatrix=function(t){this.setTransform(t.a,t.b,t.c,t.d,t.tx,t.ty)},e.clipRect=function(t,e,i,n){$.drawCall++,this.beginPath(),this.rect(t,e,i,n),this.clip()},e.drawTexture=function(t,e,i,n,s,r,o){$.drawCall++;var a=t.uv,h=t.bitmap.width,l=t.bitmap.height;this.drawImage(t.source,a[0]*h,a[1]*l,(a[2]-a[0])*h,(a[5]-a[3])*l,e+r,i+o,n,s)},e.drawTextureWithTransform=function(t,e,i,n,s,r,o,a,h){$.drawCall++;var l=t.uv,u=t.bitmap.width,c=t.bitmap.height;this.save(),1!=h&&(this.globalAlpha*=h),r?(this.transform(r.a,r.b,r.c,r.d,r.tx+o,r.ty+a),this.drawImage(t.source,l[0]*u,l[1]*c,(l[2]-l[0])*u,(l[5]-l[3])*c,e,i,n,s)):this.drawImage(t.source,l[0]*u,l[1]*c,(l[2]-l[0])*u,(l[5]-l[3])*c,e+o,i+a,n,s),this.restore()},e.drawTexture2=function(t,e,i,n,s,r,o,a){var h=a[0];if(h.loaded&&h.bitmap&&h.source){$.drawCall++;var l=1!==r;if(l){var u=this.globalAlpha;this.globalAlpha*=r}var c=h.uv,_=h.bitmap.width,d=h.bitmap.height;s?(this.save(),this.transform(s.a,s.b,s.c,s.d,s.tx+t,s.ty+e),this.drawImage(h.source,c[0]*_,c[1]*d,(c[2]-c[0])*_,(c[5]-c[3])*d,a[1]-i,a[2]-n,a[3],a[4]),this.restore()):this.drawImage(h.source,c[0]*_,c[1]*d,(c[2]-c[0])*_,(c[5]-c[3])*d,a[1]-i+t,a[2]-n+e,a[3],a[4]),l&&(this.globalAlpha=u)}},e.fillTexture=function(t,e,i,n,s,r,o,a){if(!a.pat){if(t.uv!=lt.DEF_UV){var h=new yt("2D");h.getContext("2d"),h.size(t.width,t.height),h.context.drawTexture(t,0,0,t.width,t.height,0,0),t=new lt(h)}a.pat=this.createPattern(t.bitmap.source,r)}var l=e,u=i,c=0,_=0;o&&(l+=o.x%t.width,u+=o.y%t.height,c-=o.x%t.width,_-=o.y%t.height),this.translate(l,u),this.fillRect(c,_,n,s,a.pat),this.translate(-l,-u)},e.drawTriangle=function(t,e,i,n,s,r,o,a){var h=t.bitmap,l=h.source,u=t.width,c=t.height,_=h.width,d=h.height,f=i[n]*_,p=i[s]*_,g=i[r]*_,m=i[n+1]*d,v=i[s+1]*d,y=i[r+1]*d,w=e[n],x=e[s],T=e[r],b=e[n+1],C=e[s+1],M=e[r+1];if(a){var S=(w+x+T)/3,P=(b+C+M)/3,E=w-S,I=b-P,A=Math.sqrt(E*E+I*I);w=S+E/A*(A+1),b=P+I/A*(A+1),I=C-P,x=S+(E=x-S)/(A=Math.sqrt(E*E+I*I))*(A+1),C=P+I/A*(A+1),I=M-P,T=S+(E=T-S)/(A=Math.sqrt(E*E+I*I))*(A+1),M=P+I/A*(A+1)}this.save(),o&&this.transform(o.a,o.b,o.c,o.d,o.tx,o.ty),this.beginPath(),this.moveTo(w,b),this.lineTo(x,C),this.lineTo(T,M),this.closePath(),this.clip();var L=1/(f*v+m*g+p*y-v*g-m*p-f*y),R=w*v+m*T+x*y-v*T-m*x-w*y,D=f*x+w*g+p*T-x*g-w*p-f*T,F=f*v*T+m*x*g+w*p*y-w*v*g-m*p*T-f*x*y,k=b*v+m*M+C*y-v*M-m*C-b*y,O=f*C+b*g+p*M-C*g-b*p-f*M,N=f*v*M+m*C*g+b*p*y-b*v*g-m*p*M-f*C*y;this.transform(R*L,k*L,D*L,O*L,F*L,N*L),this.drawImage(l,t.uv[0]*_,t.uv[1]*d,u,c,t.uv[0]*_,t.uv[1]*d,u,c),this.restore()},e.flush=function(){return 0},e.fillWords=function(t,e,i,n,s,r){n&&(this.font=n),s&&(this.fillStyle=s);this.textBaseline="top",this.textAlign="left";for(var o=0,a=t.length;o<a;o++){var h=t[o];if(this.__fillText(h.char,h.x+e,h.y+i),1===r){var l=h.height,u=.5*h.style.letterSpacing;u||(u=0),this.beginPath(),this.strokeStyle=s,this.lineWidth=1,this.moveTo(e+h.x-u+.5,i+h.y+l+.5),this.lineTo(e+h.x+h.width+u+.5,i+h.y+l+.5),this.stroke()}}},e.fillBorderWords=function(t,e,i,n,s,r,o){n&&(this.font=n),s&&(this.fillStyle=s),this.textBaseline="top",this.lineWidth=o,this.textAlign="left",this.strokeStyle=r;for(var a=0,h=t.length;a<h;a++){var l=t[a];this.__strokeText(l.char,l.x+e,l.y+i),this.__fillText(l.char,l.x+e,l.y+i)}},e.destroy=function(){this.canvas.width=this.canvas.height=0},e.clear=function(){this.clearRect(0,0,this._canvas.width,this._canvas.height),this._repaint=!1},e.drawCurves=function(t,e,i){this.beginPath(),this.strokeStyle=i[3],this.lineWidth=i[4];var n=i[2];t+=i[0],e+=i[1],this.moveTo(t+n[0],e+n[1]);for(var s=2,r=n.length;s<r;)this.quadraticCurveTo(t+n[s++],e+n[s++],t+n[s++],e+n[s++]);this.stroke()},t.__init__=function(t){var e=laya.resource.Context.prototype;if(!(t=t||CanvasRenderingContext2D.prototype).inited){t.inited=!0,t.__fillText=t.fillText,t.__fillRect=t.fillRect,t.__strokeText=t.strokeText;["drawTextures","drawTriangle","fillWords","fillBorderWords","setIsMainContext","fillRect","strokeText","fillTexture","fillText","transformByMatrix","setTransformByMatrix","clipRect","drawTexture","drawTexture2","drawTextureWithTransform","flush","clear","destroy","drawCanvas","fillBorderText","drawCurves"].forEach(function(i){t[i]=e[i]})}},t.replaceCanvasGetSet=function(t,e){var i=Object.getOwnPropertyDescriptor(t,e);if(!i||!i.configurable)return!1;var n,s={};for(n in i)"set"!=n&&(s[n]=i[n]);var r=i.set;return s.set=function(t){r.call(this,t);var e=this.getContext("2d");e&&"__reset"in e&&e.__reset()},Object.defineProperty(t,e,s),!0},t.replaceGetSet=function(e,i){var n=Object.getOwnPropertyDescriptor(e,i);if(!n||!n.configurable)return!1;var s,r={};for(s in n)"set"!=s&&(r[s]=n[s]);var o=n.set,a="___"+i+"__";return t.newKeys.push(a),r.set=function(t){t!=this[a]&&(this[a]=t,o.call(this,t))},Object.defineProperty(e,i,r),!0},t._default=new t,t.newKeys=[],n(t,["replaceKeys",function(){return this.replaceKeys=["font","fillStyle","textBaseline"]}]),t}(),O=function(){function t(e){this._id=0,this._name=null,this._resources=null,this._memorySize=0,this._garbageCollectionRate=NaN,this._isOverflow=!1,this.autoRelease=!1,this.autoReleaseMaxSize=0,this._id=++t._uniqueIDCounter,this._name=e||"Content Manager",t._isResourceManagersSorted=!1,this._memorySize=0,this._isOverflow=!1,this.autoRelease=!1,this.autoReleaseMaxSize=536870912,this._garbageCollectionRate=.2,t._resourceManagers.push(this),this._resources=[]}s(t,"laya.resource.ResourceManager");var e=t.prototype;return i.imps(e,{"laya.resource.IDispose":!0}),e.getResourceByIndex=function(t){return this._resources[t]},e.getResourcesLength=function(){return this._resources.length},e.addResource=function(t){t.resourceManager&&t.resourceManager.removeResource(t);return-1===this._resources.indexOf(t)&&(t._resourceManager=this,this._resources.push(t),this.addSize(t.memorySize),!0)},e.removeResource=function(t){var e=this._resources.indexOf(t);return-1!==e&&(this._resources.splice(e,1),t._resourceManager=null,this._memorySize-=t.memorySize,!0)},e.unload=function(){for(var t=this._resources.slice(0,this._resources.length),e=0;e<t.length;e++){t[e].destroy()}t.length=0},e.dispose=function(){if(this===t._systemResourceManager)throw new Error("systemResourceManager不能被释放！");t._resourceManagers.splice(t._resourceManagers.indexOf(this),1),t._isResourceManagersSorted=!1;for(var e=this._resources.slice(0,this._resources.length),i=0;i<e.length;i++){var n=e[i];n.resourceManager.removeResource(n),n.destroy()}e.length=0},e.addSize=function(t){t&&(this.autoRelease&&t>0&&this._memorySize+t>this.autoReleaseMaxSize&&this.garbageCollection((1-this._garbageCollectionRate)*this.autoReleaseMaxSize),this._memorySize+=t)},e.garbageCollection=function(t){var e=this._resources;(e=e.slice()).sort(function(t,e){if(!t||!e)throw new Error("a或b不能为空！");return t.released&&e.released?0:t.released?1:e.released?-1:t._lastUseFrameCount-e._lastUseFrameCount});for(var i=$.loopCount,n=0,s=e.length;n<s;n++){var r=e[n];if(!(i-r._lastUseFrameCount>1))return void(this._memorySize>=t&&(this._isOverflow=!0));if(r.releaseResource(),this._memorySize<t)return void(this._isOverflow=!1)}},r(0,e,"id",function(){return this._id}),r(0,e,"name",function(){return this._name},function(e){!e&&""===e||this._name===e||(this._name=e,t._isResourceManagersSorted=!1)}),r(0,e,"memorySize",function(){return this._memorySize}),r(1,t,"systemResourceManager",function(){return t._systemResourceManager}),t.__init__=function(){t.currentResourceManager=t.systemResourceManager},t.getLoadedResourceManagerByIndex=function(e){return t._resourceManagers[e]},t.getLoadedResourceManagersCount=function(){return t._resourceManagers.length},t.recreateContentManagers=function(e){void 0===e&&(e=!1);for(var i=t.currentResourceManager,n=0;n<t._resourceManagers.length;n++){t.currentResourceManager=t._resourceManagers[n];for(var s=0;s<t.currentResourceManager._resources.length;s++)t.currentResourceManager._resources[s].releaseResource(e),t.currentResourceManager._resources[s].activeResource(e)}t.currentResourceManager=i},t.releaseContentManagers=function(e){void 0===e&&(e=!1);for(var i=t.currentResourceManager,n=0;n<t._resourceManagers.length;n++){t.currentResourceManager=t._resourceManagers[n];for(var s=0;s<t.currentResourceManager._resources.length;s++){var r=t.currentResourceManager._resources[s];!r.released&&r.releaseResource(e)}}t.currentResourceManager=i},t._uniqueIDCounter=0,t._isResourceManagersSorted=!1,t._resourceManagers=[],n(t,["_systemResourceManager",function(){return this._systemResourceManager=new t("System Resource Manager")},"currentResourceManager",function(){return this.currentResourceManager=t._systemResourceManager}]),t}(),N=(function(){function t(){}s(t,"laya.system.System"),t.changeDefinition=function(t,e){i[t]=e;var n=t+"=classObj";i._runScript(n)},t.__init__=function(){R.isConchApp&&(conch.disableConchResManager(),conch.disableConchAutoRestoreLostedDevice())}}(),function(){function n(){}return s(n,"laya.utils.Browser"),r(1,n,"pixelRatio",function(){return n.__init__(),n.userAgent.indexOf("Mozilla/6.0(Linux; Android 6.0; HUAWEI NXT-AL10 Build/HUAWEINXT-AL10)")>-1?2:o.getPixelRatio()}),r(1,n,"height",function(){return n.__init__(),(i.stage&&i.stage.canvasRotation?n.clientWidth:n.clientHeight)*n.pixelRatio}),r(1,n,"clientWidth",function(){return n.__init__(),n.window.innerWidth||n.document.body.clientWidth}),r(1,n,"window",function(){return n.__init__(),n._window}),r(1,n,"clientHeight",function(){return n.__init__(),n.window.innerHeight||n.document.body.clientHeight||n.document.documentElement.clientHeight}),r(1,n,"width",function(){return n.__init__(),(i.stage&&i.stage.canvasRotation?n.clientHeight:n.clientWidth)*n.pixelRatio}),r(1,n,"container",function(){return n.__init__(),n._container||((n._container=n.createElement("div")).id="layaContainer",n.document.body.appendChild(n._container)),n._container},function(t){n._container=t}),r(1,n,"document",function(){return n.__init__(),n._document}),n.__init__=function(){n._window||(n._window=o.getWindow(),n._document=n.window.document,n._window.addEventListener("message",function(t){laya.utils.Browser._onMessage(t)},!1),n.document.__createElement=n.document.createElement,t.requestAnimationFrame=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)},n.userAgent=n.window.navigator.userAgent,n.onIOS=!!(n.u=n.userAgent).match(/\(i[^;]+;(U;)? CPU.+Mac OS X/),n.onMobile=n.u.indexOf("Mobile")>-1,n.onIPhone=n.u.indexOf("iPhone")>-1,n.onMac=n.u.indexOf("Mac OS X")>-1,n.onIPad=n.u.indexOf("iPad")>-1,n.onAndriod=n.u.indexOf("Android")>-1||n.u.indexOf("Adr")>-1,n.onWP=n.u.indexOf("Windows Phone")>-1,n.onQQBrowser=n.u.indexOf("QQBrowser")>-1,n.onMQQBrowser=n.u.indexOf("MQQBrowser")>-1||n.u.indexOf("Mobile")>-1&&n.u.indexOf("QQ")>-1,n.onIE=!!n.window.ActiveXObject||"ActiveXObject"in n.window,n.onWeiXin=n.u.indexOf("MicroMessenger")>-1,n.onPC=!n.onMobile,n.onSafari=n.u.indexOf("Safari")>-1,n.onFirefox=n.u.indexOf("Firefox")>-1,n.onEdge=n.u.indexOf("Edge")>-1,n.onMiniGame=n.u.indexOf("MiniGame")>-1,n.onLimixiu=n.u.indexOf("limixiu")>-1,n.httpProtocol="http:"==n.window.location.protocol,n.onMiniGame&&null==n.window.focus&&console.error("请先初始化小游戏适配库，详细教程https://ldc.layabox.com/doc/?nav=zh-ts-5-0-0"),n.webAudioEnabled=!!(n.window.AudioContext||n.window.webkitAudioContext||n.window.mozAudioContext),n.soundType=n.webAudioEnabled?"WEBAUDIOSOUND":"AUDIOSOUND",nt=n.webAudioEnabled?st:et,n.webAudioEnabled&&st.initWebAudio(),et._initMusicAudio(),n.enableTouch="ontouchstart"in t||t.DocumentTouch&&e instanceof DocumentTouch,t.focus(),E._soundClass=nt,E._musicClass=et,R._mainCanvas=R._mainCanvas||yt.create("2D"),n.canvas||(n.canvas=yt.create("2D"),n.context=n.canvas.getContext("2d")))},n._onMessage=function(t){if(t.data&&"size"==t.data.name){if(n.window.innerWidth=t.data.width,n.window.innerHeight=t.data.height,n.window.__innerHeight=t.data.clientHeight,!n.document.createEvent)return void console.warn("no document.createEvent");var e=n.document.createEvent("HTMLEvents");return e.initEvent("resize",!1,!1),void n.window.dispatchEvent(e)}},n.createElement=function(t){return n.__init__(),n.document.__createElement(t)},n.getElementById=function(t){return n.__init__(),n.document.getElementById(t)},n.removeElement=function(t){t&&t.parentNode&&t.parentNode.removeChild(t)},n.now=function(){return o.now()},n._window=null,n._document=null,n._container=null,n.userAgent=null,n.u=null,n.onIOS=!1,n.onMac=!1,n.onMobile=!1,n.onIPhone=!1,n.onIPad=!1,n.onAndriod=!1,n.onAndroid=!1,n.onWP=!1,n.onQQBrowser=!1,n.onMQQBrowser=!1,n.onSafari=!1,n.onFirefox=!1,n.onEdge=!1,n.onIE=!1,n.onWeiXin=!1,n.onMiniGame=!1,n.onLimixiu=!1,n.onPC=!1,n.httpProtocol=!1,n.webAudioEnabled=!1,n.soundType=null,n.enableTouch=!1,n.canvas=null,n.context=null,n.__init$=function(){},n}()),B=function(){function t(t){this._xd_=!0,this._allocated_=8,this._pos_=0,this._length=0,t?(this._u8d_=new Uint8Array(t),this._d_=new DataView(this._u8d_.buffer),this._length=this._d_.byteLength):this.___resizeBuffer(this._allocated_)}s(t,"laya.utils.Byte");var e=t.prototype;return e.___resizeBuffer=function(t){try{var e=new Uint8Array(t);null!=this._u8d_&&(this._u8d_.length<=t?e.set(this._u8d_):e.set(this._u8d_.subarray(0,t))),this._u8d_=e,this._d_=new DataView(e.buffer)}catch(e){throw"___resizeBuffer err:"+t}},e.getString=function(){return this.rUTF(this.getUint16())},e.getFloat32Array=function(t,e){var i=t+e;i=i>this._length?this._length:i;var n=new Float32Array(this._d_.buffer.slice(t,i));return this._pos_=i,n},e.getUint8Array=function(t,e){var i=t+e;i=i>this._length?this._length:i;var n=new Uint8Array(this._d_.buffer.slice(t,i));return this._pos_=i,n},e.getInt16Array=function(t,e){var i=t+e;i=i>this._length?this._length:i;var n=new Int16Array(this._d_.buffer.slice(t,i));return this._pos_=i,n},e.getFloat32=function(){if(this._pos_+4>this._length)throw"getFloat32 error - Out of bounds";var t=this._d_.getFloat32(this._pos_,this._xd_);return this._pos_+=4,t},e.getFloat64=function(){if(this._pos_+8>this._length)throw"getFloat64 error - Out of bounds";var t=this._d_.getFloat64(this._pos_,this._xd_);return this._pos_+=8,t},e.writeFloat32=function(t){this.ensureWrite(this._pos_+4),this._d_.setFloat32(this._pos_,t,this._xd_),this._pos_+=4},e.writeFloat64=function(t){this.ensureWrite(this._pos_+8),this._d_.setFloat64(this._pos_,t,this._xd_),this._pos_+=8},e.getInt32=function(){if(this._pos_+4>this._length)throw"getInt32 error - Out of bounds";var t=this._d_.getInt32(this._pos_,this._xd_);return this._pos_+=4,t},e.getUint32=function(){if(this._pos_+4>this._length)throw"getUint32 error - Out of bounds";var t=this._d_.getUint32(this._pos_,this._xd_);return this._pos_+=4,t},e.writeInt32=function(t){this.ensureWrite(this._pos_+4),this._d_.setInt32(this._pos_,t,this._xd_),this._pos_+=4},e.writeUint32=function(t){this.ensureWrite(this._pos_+4),this._d_.setUint32(this._pos_,t,this._xd_),this._pos_+=4},e.getInt16=function(){if(this._pos_+2>this._length)throw"getInt16 error - Out of bounds";var t=this._d_.getInt16(this._pos_,this._xd_);return this._pos_+=2,t},e.getUint16=function(){if(this._pos_+2>this._length)throw"getUint16 error - Out of bounds";var t=this._d_.getUint16(this._pos_,this._xd_);return this._pos_+=2,t},e.writeUint16=function(t){this.ensureWrite(this._pos_+2),this._d_.setUint16(this._pos_,t,this._xd_),this._pos_+=2},e.writeInt16=function(t){this.ensureWrite(this._pos_+2),this._d_.setInt16(this._pos_,t,this._xd_),this._pos_+=2},e.getUint8=function(){if(this._pos_+1>this._length)throw"getUint8 error - Out of bounds";return this._d_.getUint8(this._pos_++)},e.writeUint8=function(t){this.ensureWrite(this._pos_+1),this._d_.setUint8(this._pos_,t),this._pos_++},e._getUInt8=function(t){return this._d_.getUint8(t)},e._getUint16=function(t){return this._d_.getUint16(t,this._xd_)},e._getMatrix=function(){return new M(this.getFloat32(),this.getFloat32(),this.getFloat32(),this.getFloat32(),this.getFloat32(),this.getFloat32())},e.rUTF=function(t){for(var e="",i=this._pos_+t,n=0,s=String.fromCharCode,r=this._u8d_;this._pos_<i;)(n=r[this._pos_++])<128?0!=n&&(e+=s(n)):e+=s(n<224?(63&n)<<6|127&r[this._pos_++]:n<240?(31&n)<<12|(127&r[this._pos_++])<<6|127&r[this._pos_++]:(15&n)<<18|(127&r[this._pos_++])<<12|r[this._pos_++]<<6&127|127&r[this._pos_++]),0;return e},e.getCustomString=function(t){for(var e="",i=0,n=0,s=String.fromCharCode,r=this._u8d_;t>0;)if((n=r[this._pos_])<128)e+=s(n),this._pos_++,t--;else for(i=n-128,this._pos_++,t-=i;i>0;)n=r[this._pos_++],e+=s(r[this._pos_++]<<8|n),i--;return e},e.clear=function(){this._pos_=0,this.length=0},e.__getBuffer=function(){return this._d_.buffer},e.writeUTFBytes=function(t){for(var e=0,i=(t+="").length;e<i;e++){var n=t.charCodeAt(e);n<=127?this.writeByte(n):n<=2047?(this.ensureWrite(this._pos_+2),this._u8d_.set([192|n>>6,128|63&n],this._pos_),this._pos_+=2):n<=65535?(this.ensureWrite(this._pos_+3),this._u8d_.set([224|n>>12,128|n>>6&63,128|63&n],this._pos_),this._pos_+=3):(this.ensureWrite(this._pos_+4),this._u8d_.set([240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n],this._pos_),this._pos_+=4)}},e.writeUTFString=function(t){var e=this.pos;this.writeUint16(1),this.writeUTFBytes(t);var i=this.pos-e-2;if(i>=65536)throw"writeUTFString byte len more than 65536";this._d_.setUint16(e,i,this._xd_)},e.readUTFString=function(){return this.readUTFBytes(this.getUint16())},e.getUTFString=function(){return this.readUTFString()},e.readUTFBytes=function(t){if(void 0===t&&(t=-1),0==t)return"";var e=this.bytesAvailable;if(t>e)throw"readUTFBytes error - Out of bounds";return t=t>0?t:e,this.rUTF(t)},e.getUTFBytes=function(t){return void 0===t&&(t=-1),this.readUTFBytes(t)},e.writeByte=function(t){this.ensureWrite(this._pos_+1),this._d_.setInt8(this._pos_,t),this._pos_+=1},e.readByte=function(){if(this._pos_+1>this._length)throw"readByte error - Out of bounds";return this._d_.getInt8(this._pos_++)},e.getByte=function(){return this.readByte()},e.ensureWrite=function(t){this._length<t&&(this._length=t),this._allocated_<t&&(this.length=t)},e.writeArrayBuffer=function(t,e,i){if(void 0===e&&(e=0),void 0===i&&(i=0),e<0||i<0)throw"writeArrayBuffer error - Out of bounds";0==i&&(i=t.byteLength-e),this.ensureWrite(this._pos_+i);var n=new Uint8Array(t);this._u8d_.set(n.subarray(e,e+i),this._pos_),this._pos_+=i},r(0,e,"buffer",function(){var t=this._d_.buffer;return t.byteLength==this.length?t:t.slice(0,this.length)}),r(0,e,"endian",function(){return this._xd_?"littleEndian":"bigEndian"},function(t){this._xd_="littleEndian"==t}),r(0,e,"length",function(){return this._length},function(t){this._allocated_<t?this.___resizeBuffer(this._allocated_=Math.floor(Math.max(t,2*this._allocated_))):this._allocated_>t&&this.___resizeBuffer(this._allocated_=t),this._length=t}),r(0,e,"pos",function(){return this._pos_},function(t){this._pos_=t}),r(0,e,"bytesAvailable",function(){return this._length-this._pos_}),t.getSystemEndian=function(){if(!t._sysEndian){var e=new ArrayBuffer(2);new DataView(e).setInt16(0,256,!0),t._sysEndian=256===new Int16Array(e)[0]?"littleEndian":"bigEndian"}return t._sysEndian},t.BIG_ENDIAN="bigEndian",t.LITTLE_ENDIAN="littleEndian",t._sysEndian=null,t}(),W=function(){function t(){}return s(t,"laya.utils.CacheManager"),t.regCacheByFunction=function(e,i){t.unRegCacheByFunction(e,i);var n;n={tryDispose:e,getCacheList:i},t._cacheList.push(n)},t.unRegCacheByFunction=function(e,i){var n=0,s=0;for(s=t._cacheList.length,n=0;n<s;n++)if(t._cacheList[n].tryDispose==e&&t._cacheList[n].getCacheList==i)return void t._cacheList.splice(n,1)},t.forceDispose=function(){var e=0,i=t._cacheList.length;for(e=0;e<i;e++)t._cacheList[e].tryDispose(!0)},t.beginCheck=function(e){void 0===e&&(e=15e3),i.timer.loop(e,null,t._checkLoop)},t.stopCheck=function(){i.timer.clear(null,t._checkLoop)},t._checkLoop=function(){var e=t._cacheList;if(!(e.length<1)){var i=N.now(),n=0,s=0;for(s=n=e.length;n>0&&(t._index++,t._index=t._index%s,e[t._index].tryDispose(!1),!(N.now()-i>t.loopTimeLimit));)n--}},t.loopTimeLimit=2,t._cacheList=[],t._index=0,t}(),G=function(){function t(){}return s(t,"laya.utils.ClassUtils"),t.regClass=function(e,i){t._classMap[e]=i},t.getRegClass=function(e){return t._classMap[e]},t.getInstance=function(e){var i=t.getClass(e);return i?new i:(console.warn("[error] Undefined class:",e),null)},t.createByJson=function(e,i,n,s,r){"string"==typeof e&&(e=JSON.parse(e));var o=e.props;if(!i&&!(i=r?r.runWith(e):t.getInstance(o.runtime||e.type)))return null;var a=e.child;if(a)for(var h=0,l=a.length;h<l;h++){var u=a[h];if("render"!==u.props.name&&"render"!==u.props.renderType||!i._$set_itemRender)if("Graphic"==u.type)t.addGraphicsToSprite(u,i);else if(t.isDrawType(u.type))t.addGraphicToSprite(u,i,!0);else{var c=t.createByJson(u,null,n,s,r);"Script"==u.type?c.hasOwnProperty("owner")?c.owner=i:c.hasOwnProperty("target")&&(c.target=i):"mask"==u.props.renderType?i.mask=c:i.addChild(c)}else i.itemRender=u}if(o)for(var _ in o){var d=o[_];"var"===_&&n?n[d]=i:d instanceof Array&&"function"==typeof i[_]?i[_].apply(i,d):i[_]=d}return s&&e.customProps&&s.runWith([i,e]),i.created&&i.created(),i},t.addGraphicsToSprite=function(e,i){var n;if((n=e.child)&&!(n.length<1)){var s;s=t._getGraphicsFromSprite(e,i);var r=0,o=0;e.props&&(r=t._getObjVar(e.props,"x",0),o=t._getObjVar(e.props,"y",0)),0!=r&&0!=o&&s.translate(r,o);var a=0,h=0;for(h=n.length,a=0;a<h;a++)t._addGraphicToGraphics(n[a],s);0!=r&&0!=o&&s.translate(-r,-o)}},t.addGraphicToSprite=function(e,i,n){void 0===n&&(n=!1);var s;s=n?t._getGraphicsFromSprite(e,i):i.graphics,t._addGraphicToGraphics(e,s)},t._getGraphicsFromSprite=function(t,e){var i;if(!t||!t.props)return e.graphics;var n;switch(n=t.props.renderType){case"hit":case"unHit":var s;e.hitArea||(e.hitArea=new H),(s=e.hitArea)[n]||(s[n]=new f),i=s[n]}return i||(i=e.graphics),i},t._getTransformData=function(e){var i;(e.hasOwnProperty("pivotX")||e.hasOwnProperty("pivotY"))&&(i=i||new M).translate(-t._getObjVar(e,"pivotX",0),-t._getObjVar(e,"pivotY",0));var n=t._getObjVar(e,"scaleX",1),s=t._getObjVar(e,"scaleY",1),r=t._getObjVar(e,"rotation",0);t._getObjVar(e,"skewX",0),t._getObjVar(e,"skewY",0);return 1==n&&1==s&&0==r||((i=i||new M).scale(n,s),i.rotate(.0174532922222222*r)),i},t._addGraphicToGraphics=function(e,i){var n;if(n=e.props){var s;if(s=t.DrawTypeDic[e.type]){var r;r=i;var o,a=t._getParams(n,s[1],s[2],s[3]);((o=t._tM)||1!=t._alpha)&&(r.save(),o&&r.transform(o),1!=t._alpha&&r.alpha(t._alpha)),r[s[0]].apply(r,a),(o||1!=t._alpha)&&r.restore()}}},t._adptLineData=function(t){return t[2]=parseFloat(t[0])+parseFloat(t[2]),t[3]=parseFloat(t[1])+parseFloat(t[3]),t},t._adptTextureData=function(t){return t[0]=ot.getRes(t[0]),t},t._adptLinesData=function(e){return e[2]=t._getPointListByStr(e[2]),e},t.isDrawType=function(e){return"Image"!=e&&t.DrawTypeDic.hasOwnProperty(e)},t._getParams=function(e,i,n,s){void 0===n&&(n=0);var r;(r=t._temParam).length=i.length;var o=0,a=0;for(a=i.length,o=0;o<a;o++)r[o]=t._getObjVar(e,i[o][0],i[o][1]);t._alpha=t._getObjVar(e,"alpha",1);var h;return(h=t._getTransformData(e))?(n||(n=0),h.translate(r[n],r[n+1]),r[n]=r[n+1]=0,t._tM=h):t._tM=null,s&&t[s]&&(r=t[s](r)),r},t._getPointListByStr=function(t){var e,i=0,n=0;for(n=(e=t.split(",")).length,i=0;i<n;i++)e[i]=parseFloat(e[i]);return e},t._getObjVar=function(t,e,i){return t.hasOwnProperty(e)?t[e]:i},t._temParam=[],t._classMap={Sprite:"laya.display.Sprite",Text:"laya.display.Text",Animation:"laya.display.Animation",Skeleton:"laya.ani.bone.Skeleton",Particle2D:"laya.particle.Particle2D",div:"laya.html.dom.HTMLDivElement",p:"laya.html.dom.HTMLElement",img:"laya.html.dom.HTMLImageElement",span:"laya.html.dom.HTMLElement",br:"laya.html.dom.HTMLBrElement",style:"laya.html.dom.HTMLStyleElement",font:"laya.html.dom.HTMLElement",a:"laya.html.dom.HTMLElement","#text":"laya.html.dom.HTMLElement"},t.getClass=function(e){var n=t._classMap[e]||e;return"string"==typeof n?i.__classmap[n]:n},t._tM=null,t._alpha=NaN,n(t,["DrawTypeDic",function(){return this.DrawTypeDic={Rect:["drawRect",[["x",0],["y",0],["width",0],["height",0],["fillColor",null],["lineColor",null],["lineWidth",1]]],Circle:["drawCircle",[["x",0],["y",0],["radius",0],["fillColor",null],["lineColor",null],["lineWidth",1]]],Pie:["drawPie",[["x",0],["y",0],["radius",0],["startAngle",0],["endAngle",0],["fillColor",null],["lineColor",null],["lineWidth",1]]],Image:["drawTexture",[["x",0],["y",0],["width",0],["height",0]]],Texture:["drawTexture",[["skin",null],["x",0],["y",0],["width",0],["height",0]],1,"_adptTextureData"],FillTexture:["fillTexture",[["skin",null],["x",0],["y",0],["width",0],["height",0],["repeat",null]],1,"_adptTextureData"],FillText:["fillText",[["text",""],["x",0],["y",0],["font",null],["color",null],["textAlign",null]],1],Line:["drawLine",[["x",0],["y",0],["toX",0],["toY",0],["lineColor",null],["lineWidth",0]],0,"_adptLineData"],Lines:["drawLines",[["x",0],["y",0],["points",""],["lineColor",null],["lineWidth",0]],0,"_adptLinesData"],Curves:["drawCurves",[["x",0],["y",0],["points",""],["lineColor",null],["lineWidth",0]],0,"_adptLinesData"],Poly:["drawPoly",[["x",0],["y",0],["points",""],["fillColor",null],["lineColor",null],["lineWidth",1]],0,"_adptLinesData"]}}]),t}(),U=function(){function t(e){if(this._color=[],"string"==typeof e){this.strColor=e,null===e&&(e="#000000"),"#"==e.charAt(0)&&(e=e.substr(1));var i=e.length;if(3==i||4==i){for(var n="",s=0;s<i;s++)n+=e[s]+e[s];e=n}var r=this.numColor=parseInt(e,16);if(8==e.length)return void(this._color=[parseInt(e.substr(0,2),16)/255,((16711680&r)>>16)/255,((65280&r)>>8)/255,(255&r)/255])}else r=this.numColor=e,this.strColor=K.toHexColor(r);this._color=[((16711680&r)>>16)/255,((65280&r)>>8)/255,(255&r)/255,1],this._color.__id=++t._COLODID}return s(t,"laya.utils.Color"),t._initDefault=function(){t._DEFAULT={};for(var e in t._COLOR_MAP)t._SAVE[e]=t._DEFAULT[e]=new t(t._COLOR_MAP[e]);return t._DEFAULT},t._initSaveMap=function(){t._SAVE_SIZE=0,t._SAVE={};for(var e in t._DEFAULT)t._SAVE[e]=t._DEFAULT[e]},t.create=function(e){var i=t._SAVE[e+""];return null!=i?i:(t._SAVE_SIZE<1e3||t._initSaveMap(),t._SAVE[e+""]=new t(e))},t._SAVE={},t._SAVE_SIZE=0,t._COLOR_MAP={white:"#FFFFFF",red:"#FF0000",green:"#00FF00",blue:"#0000FF",black:"#000000",yellow:"#FFFF00",gray:"#AAAAAA"},t._DEFAULT=t._initDefault(),t._COLODID=1,t}(),z=(function(){function t(){this._values=[],this._keys=[]}s(t,"laya.utils.Dictionary");var e=t.prototype;e.set=function(t,e){var i=this.indexOf(t);i>=0?this._values[i]=e:(this._keys.push(t),this._values.push(e))},e.indexOf=function(t){var e=this._keys.indexOf(t);return e>=0?e:(t="string"==typeof t?Number(t):"number"==typeof t?t.toString():t,this._keys.indexOf(t))},e.get=function(t){var e=this.indexOf(t);return e<0?null:this._values[e]},e.remove=function(t){var e=this.indexOf(t);return e>=0&&(this._keys.splice(e,1),this._values.splice(e,1),!0)},e.clear=function(){this._values.length=0,this._keys.length=0},r(0,e,"values",function(){return this._values}),r(0,e,"keys",function(){return this._keys})}(),function(){function t(){this.ratio=.92,this.maxOffset=60,this._dragging=!1,this._clickOnly=!0}s(t,"laya.utils.Dragging");var e=t.prototype;return e.start=function(t,e,n,s,r,o,a,h){void 0===h&&(h=.92),this.clearTimer(),this.target=t,this.area=e,this.hasInertia=n,this.elasticDistance=e?s:0,this.elasticBackTime=r,this.data=o,this._disableMouseEvent=a,this.ratio=h,1!=t.globalScaleX||1!=t.globalScaleY?this._parent=t.parent:this._parent=i.stage,this._clickOnly=!0,this._dragging=!0,this._elasticRateX=this._elasticRateY=1,this._lastX=this._parent.mouseX,this._lastY=this._parent.mouseY,i.stage.on("mouseup",this,this.onStageMouseUp),i.stage.on("mouseout",this,this.onStageMouseUp),i.timer.frameLoop(1,this,this.loop)},e.clearTimer=function(){i.timer.clear(this,this.loop),i.timer.clear(this,this.tweenMove),this._tween&&(this._tween.recover(),this._tween=null)},e.stop=function(){this._dragging&&(v.instance.disableMouseEvent=!1,i.stage.off("mouseup",this,this.onStageMouseUp),i.stage.off("mouseout",this,this.onStageMouseUp),this._dragging=!1,this.target&&this.area&&this.backToArea(),this.clear())},e.loop=function(){var t=this._parent.getMousePoint(),e=t.x,n=t.y,s=e-this._lastX,r=n-this._lastY;if(this._clickOnly){if(!(Math.abs(s*i.stage._canvasTransform.getScaleX())>1||Math.abs(r*i.stage._canvasTransform.getScaleY())>1))return;this._clickOnly=!1,this._offsets||(this._offsets=[]),this._offsets.length=0,this.target.event("dragstart",this.data),v.instance.disableMouseEvent=this._disableMouseEvent,this.target._set$P("$_MOUSEDOWN",!1)}else this._offsets.push(s,r);0===s&&0===r||(this._lastX=e,this._lastY=n,this.target.x+=s*this._elasticRateX,this.target.y+=r*this._elasticRateY,this.area&&this.checkArea(),this.target.event("dragmove",this.data))},e.checkArea=function(){if(this.elasticDistance<=0)this.backToArea();else{if(this.target.x<this.area.x)var t=this.area.x-this.target.x;else t=this.target.x>this.area.x+this.area.width?this.target.x-this.area.x-this.area.width:0;if(this._elasticRateX=Math.max(0,1-t/this.elasticDistance),this.target.y<this.area.y)var e=this.area.y-this.target.y;else e=this.target.y>this.area.y+this.area.height?this.target.y-this.area.y-this.area.height:0;this._elasticRateY=Math.max(0,1-e/this.elasticDistance)}},e.backToArea=function(){this.target.x=Math.min(Math.max(this.target.x,this.area.x),this.area.x+this.area.width),this.target.y=Math.min(Math.max(this.target.y,this.area.y),this.area.y+this.area.height)},e.onStageMouseUp=function(t){if(v.instance.disableMouseEvent=!1,i.stage.off("mouseup",this,this.onStageMouseUp),i.stage.off("mouseout",this,this.onStageMouseUp),i.timer.clear(this,this.loop),!this._clickOnly&&this.target)if(this.hasInertia){this._offsets.length<1&&this._offsets.push(this._parent.mouseX-this._lastX,this._parent.mouseY-this._lastY),this._offsetX=this._offsetY=0;for(var e=this._offsets.length,n=Math.min(e,6),s=this._offsets.length-n,r=e-1;r>s;r--)this._offsetY+=this._offsets[r--],this._offsetX+=this._offsets[r];this._offsetX=this._offsetX/n*2,this._offsetY=this._offsetY/n*2,Math.abs(this._offsetX)>this.maxOffset&&(this._offsetX=this._offsetX>0?this.maxOffset:-this.maxOffset),Math.abs(this._offsetY)>this.maxOffset&&(this._offsetY=this._offsetY>0?this.maxOffset:-this.maxOffset),i.timer.frameLoop(1,this,this.tweenMove)}else this.elasticDistance>0?this.checkElastic():this.clear()},e.checkElastic=function(){var t=NaN,e=NaN;if(this.target.x<this.area.x?t=this.area.x:this.target.x>this.area.x+this.area.width&&(t=this.area.x+this.area.width),this.target.y<this.area.y?e=this.area.y:this.target.y>this.area.y+this.area.height&&(e=this.area.y+this.area.height),isNaN(t)&&isNaN(e))this.clear();else{var i={};isNaN(t)||(i.x=t),isNaN(e)||(i.y=e),this._tween=j.to(this.target,i,this.elasticBackTime,Y.sineOut,l.create(this,this.clear),0,!1,!1)}},e.tweenMove=function(){this._offsetX*=this.ratio*this._elasticRateX,this._offsetY*=this.ratio*this._elasticRateY,this.target.x+=this._offsetX,this.target.y+=this._offsetY,this.area&&this.checkArea(),this.target.event("dragmove",this.data),(Math.abs(this._offsetX)<1&&Math.abs(this._offsetY)<1||this._elasticRateX<.5||this._elasticRateY<.5)&&(i.timer.clear(this,this.tweenMove),this.elasticDistance>0?this.checkElastic():this.clear())},e.clear=function(){if(this.target){this.clearTimer();var t=this.target;this.target=null,this._parent=null,t.event("dragend",this.data)}},t}()),Y=function(){function t(){}return s(t,"laya.utils.Ease"),t.linearNone=function(t,e,i,n){return i*t/n+e},t.linearIn=function(t,e,i,n){return i*t/n+e},t.linearInOut=function(t,e,i,n){return i*t/n+e},t.linearOut=function(t,e,i,n){return i*t/n+e},t.bounceIn=function(e,i,n,s){return n-t.bounceOut(s-e,0,n,s)+i},t.bounceInOut=function(e,i,n,s){return e<.5*s?.5*t.bounceIn(2*e,0,n,s)+i:.5*t.bounceOut(2*e-s,0,n,s)+.5*n+i},t.bounceOut=function(t,e,i,n){return(t/=n)<1/2.75?i*(7.5625*t*t)+e:t<2/2.75?i*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?i*(7.5625*(t-=2.25/2.75)*t+.9375)+e:i*(7.5625*(t-=2.625/2.75)*t+.984375)+e},t.backIn=function(t,e,i,n,s){return void 0===s&&(s=1.70158),i*(t/=n)*t*((s+1)*t-s)+e},t.backInOut=function(t,e,i,n,s){return void 0===s&&(s=1.70158),(t/=.5*n)<1?.5*i*(t*t*((1+(s*=1.525))*t-s))+e:i/2*((t-=2)*t*((1+(s*=1.525))*t+s)+2)+e},t.backOut=function(t,e,i,n,s){return void 0===s&&(s=1.70158),i*((t=t/n-1)*t*((s+1)*t+s)+1)+e},t.elasticIn=function(e,i,n,s,r,o){void 0===r&&(r=0),void 0===o&&(o=0);var a;return 0==e?i:1==(e/=s)?i+n:(o||(o=.3*s),!r||n>0&&r<n||n<0&&r<-n?(r=n,a=o/4):a=o/t.PI2*Math.asin(n/r),-r*Math.pow(2,10*(e-=1))*Math.sin((e*s-a)*t.PI2/o)+i)},t.elasticInOut=function(e,i,n,s,r,o){void 0===r&&(r=0),void 0===o&&(o=0);var a;return 0==e?i:2==(e/=.5*s)?i+n:(o||(o=s*(.3*1.5)),!r||n>0&&r<n||n<0&&r<-n?(r=n,a=o/4):a=o/t.PI2*Math.asin(n/r),e<1?r*Math.pow(2,10*(e-=1))*Math.sin((e*s-a)*t.PI2/o)*-.5+i:r*Math.pow(2,-10*(e-=1))*Math.sin((e*s-a)*t.PI2/o)*.5+n+i)},t.elasticOut=function(e,i,n,s,r,o){void 0===r&&(r=0),void 0===o&&(o=0);var a;return 0==e?i:1==(e/=s)?i+n:(o||(o=.3*s),!r||n>0&&r<n||n<0&&r<-n?(r=n,a=o/4):a=o/t.PI2*Math.asin(n/r),r*Math.pow(2,-10*e)*Math.sin((e*s-a)*t.PI2/o)+n+i)},t.strongIn=function(t,e,i,n){return i*(t/=n)*t*t*t*t+e},t.strongInOut=function(t,e,i,n){return(t/=.5*n)<1?.5*i*t*t*t*t*t+e:.5*i*((t-=2)*t*t*t*t+2)+e},t.strongOut=function(t,e,i,n){return i*((t=t/n-1)*t*t*t*t+1)+e},t.sineInOut=function(t,e,i,n){return.5*-i*(Math.cos(Math.PI*t/n)-1)+e},t.sineIn=function(e,i,n,s){return-n*Math.cos(e/s*t.HALF_PI)+n+i},t.sineOut=function(e,i,n,s){return n*Math.sin(e/s*t.HALF_PI)+i},t.quintIn=function(t,e,i,n){return i*(t/=n)*t*t*t*t+e},t.quintInOut=function(t,e,i,n){return(t/=.5*n)<1?.5*i*t*t*t*t*t+e:.5*i*((t-=2)*t*t*t*t+2)+e},t.quintOut=function(t,e,i,n){return i*((t=t/n-1)*t*t*t*t+1)+e},t.quartIn=function(t,e,i,n){return i*(t/=n)*t*t*t+e},t.quartInOut=function(t,e,i,n){return(t/=.5*n)<1?.5*i*t*t*t*t+e:.5*-i*((t-=2)*t*t*t-2)+e},t.quartOut=function(t,e,i,n){return-i*((t=t/n-1)*t*t*t-1)+e},t.cubicIn=function(t,e,i,n){return i*(t/=n)*t*t+e},t.cubicInOut=function(t,e,i,n){return(t/=.5*n)<1?.5*i*t*t*t+e:.5*i*((t-=2)*t*t+2)+e},t.cubicOut=function(t,e,i,n){return i*((t=t/n-1)*t*t+1)+e},t.quadIn=function(t,e,i,n){return i*(t/=n)*t+e},t.quadInOut=function(t,e,i,n){return(t/=.5*n)<1?.5*i*t*t+e:.5*-i*(--t*(t-2)-1)+e},t.quadOut=function(t,e,i,n){return-i*(t/=n)*(t-2)+e},t.expoIn=function(t,e,i,n){return 0==t?e:i*Math.pow(2,10*(t/n-1))+e-.001*i},t.expoInOut=function(t,e,i,n){return 0==t?e:t==n?e+i:(t/=.5*n)<1?.5*i*Math.pow(2,10*(t-1))+e:.5*i*(2-Math.pow(2,-10*--t))+e},t.expoOut=function(t,e,i,n){return t==n?e+i:i*(1-Math.pow(2,-10*t/n))+e},t.circIn=function(t,e,i,n){return-i*(Math.sqrt(1-(t/=n)*t)-1)+e},t.circInOut=function(t,e,i,n){return(t/=.5*n)<1?.5*-i*(Math.sqrt(1-t*t)-1)+e:.5*i*(Math.sqrt(1-(t-=2)*t)+1)+e},t.circOut=function(t,e,i,n){return i*Math.sqrt(1-(t=t/n-1)*t)+e},t.HALF_PI=.5*Math.PI,t.PI2=2*Math.PI,t}(),H=function(){function t(){this._hit=null,this._unHit=null}s(t,"laya.utils.HitArea");var e=t.prototype;return e.isHit=function(e,i){return!!t.isHitGraphic(e,i,this.hit)&&!t.isHitGraphic(e,i,this.unHit)},e.contains=function(t,e){return this.isHit(t,e)},r(0,e,"hit",function(){return this._hit||(this._hit=new f),this._hit},function(t){this._hit=t}),r(0,e,"unHit",function(){return this._unHit||(this._unHit=new f),this._unHit},function(t){this._unHit=t}),t.isHitGraphic=function(e,i,n){if(!n)return!1;var s;if(!(s=n.cmds)&&n._one&&((s=t._cmds).length=1,s[0]=n._one),!s)return!1;var r=0,o=0;o=s.length;var a;for(r=0;r<o;r++)if(a=s[r]){var h=R._context;switch(a.callee){case h._translate:case 6:e-=a[0],i-=a[1]}if(t.isHitCmd(e,i,a))return!0}return!1},t.isHitCmd=function(e,i,n){if(!n)return!1;var s=R._context,r=!1;switch(n.callee){case s._drawRect:case 13:t._rec.setTo(n[0],n[1],n[2],n[3]),r=t._rec.contains(e,i);break;case s._drawCircle:case s._fillCircle:case 14:r=(e-=n[0])*e+(i-=n[1])*i<n[2]*n[2];break;case s._drawPoly:case 18:e-=n[0],i-=n[1],r=t.ptInPolygon(e,i,n[2])}return r},t.ptInPolygon=function(e,i,n){var s;(s=t._ptPoint).setTo(e,i);var r=0,o=NaN,a=NaN,h=NaN,l=NaN,u=0;u=n.length;for(var c=0;c<u;c+=2)if(o=n[c],a=n[c+1],h=n[(c+2)%u],l=n[(c+3)%u],a!=l&&!(s.y<Math.min(a,l)||s.y>=Math.max(a,l))){(s.y-a)*(h-o)/(l-a)+o>s.x&&r++}return r%2==1},t._cmds=[],n(t,["_rec",function(){return this._rec=new P},"_ptPoint",function(){return this._ptPoint=new S}]),t}(),X=(function(){function t(e,i,n,s){this.char=e,this.charNum=e.charCodeAt(0),this._x=this._y=0,this.width=i,this.height=n,this.style=s,this.isWord=!t._isWordRegExp.test(e)}s(t,"laya.utils.HTMLChar");var e=t.prototype;i.imps(e,{"laya.display.ILayout":!0}),e.setSprite=function(t){this._sprite=t},e.getSprite=function(){return this._sprite},e._isChar=function(){return!0},e._getCSSStyle=function(){return this.style},r(0,e,"width",function(){return this._w},function(t){this._w=t}),r(0,e,"x",function(){return this._x},function(t){this._sprite&&(this._sprite.x=t),this._x=t}),r(0,e,"y",function(){return this._y},function(t){this._sprite&&(this._sprite.y=t),this._y=t}),r(0,e,"height",function(){return this._h},function(t){this._h=t}),t._isWordRegExp=new RegExp("[\\w.]","")}(),function(){function t(){}s(t,"laya.utils.Log"),t.enable=function(){t._logdiv||(t._logdiv=N.window.document.createElement("div"),N.window.document.body.appendChild(t._logdiv),t._logdiv.style.cssText="pointer-events:none;border:white;overflow:hidden;z-index:1000000;background:rgba(100,100,100,0.6);color:white;position: absolute;left:0px;top:0px;width:50%;height:50%;")},t.toggle=function(){var e=t._logdiv.style;"1px"==e.width?e.width=e.height="50%":e.width=e.height="1px"},t.print=function(e){t._logdiv&&(t._count>=t.maxCount&&t.clear(),t._count++,t._logdiv.innerText+=e+"\n",t._logdiv.scrollTop=t._logdiv.scrollHeight)},t.clear=function(){t._logdiv.innerText="",t._count=0},t._logdiv=null,t._count=0,t.maxCount=20}(),function(){function t(){}s(t,"laya.utils.Mouse"),r(1,t,"cursor",function(){return t._style.cursor},function(e){t._style.cursor=e}),t.hide=function(){"none"!=t.cursor&&(t._preCursor=t.cursor,t.cursor="none")},t.show=function(){"none"==t.cursor&&(t.cursor=t._preCursor?t._preCursor:"auto")},t._preCursor=null,n(t,["_style",function(){return this._style=N.document.body.style}])}(),function(){function t(){}return s(t,"laya.utils.Pool"),t.getPoolBySign=function(e){return t._poolDic[e]||(t._poolDic[e]=[])},t.clearBySign=function(e){t._poolDic[e]&&(t._poolDic[e].length=0)},t.recover=function(e,i){i.__InPool||(i.__InPool=!0,t.getPoolBySign(e).push(i))},t.getItemByClass=function(e,i){var n=t.getPoolBySign(e),s=n.length?n.pop():new i;return s.__InPool=!1,s},t.getItemByCreateFun=function(e,i){var n=t.getPoolBySign(e),s=n.length?n.pop():i();return s.__InPool=!1,s},t.getItem=function(e){var i=t.getPoolBySign(e),n=i.length?i.pop():null;return n&&(n.__InPool=!1),n},t._poolDic={},t.InPoolSign="__InPool",t}()),$=(function(){function t(){this.sign=null,this.maxCount=1e3}s(t,"laya.utils.PoolCache");var e=t.prototype;e.getCacheList=function(){return X.getPoolBySign(this.sign)},e.tryDispose=function(t){var e;(e=X.getPoolBySign(this.sign)).length>this.maxCount&&e.splice(this.maxCount,e.length-this.maxCount)},t.addPoolCacheManager=function(e,i){void 0===i&&(i=100);var n;(n=new t).sign=e,n.maxCount=i,W.regCacheByFunction(K.bind(n.tryDispose,n),K.bind(n.getCacheList,n))}}(),function(){function t(){}return s(t,"laya.utils.Stat"),r(1,t,"onclick",null,function(e){t._sp&&t._sp.on("click",t._sp,e),t._canvas&&(t._canvas.source.onclick=e,t._canvas.source.style.pointerEvents="")}),t.show=function(e,i){void 0===e&&(e=0),void 0===i&&(i=0),!R.isConchApp||R.isConchWebGL?(R.isConchWebGL||N.onMiniGame||N.onLimixiu||(t._useCanvas=!0),t._show=!0,t._fpsData.length=60,t._view[0]={title:"FPS(Canvas)",value:"_fpsStr",color:"yellow",units:"int"},t._view[1]={title:"Sprite",value:"_spriteStr",color:"white",units:"int"},t._view[2]={title:"DrawCall",value:"drawCall",color:"white",units:"int"},t._view[3]={title:"CurMem",value:"currentMemorySize",color:"yellow",units:"M"},R.isWebGL?(t._view[4]={title:"Shader",value:"shaderCall",color:"white",units:"int"},R.is3DMode?(t._view[0].title="FPS(3D)",t._view[5]={title:"TriFaces",value:"trianglesFaces",color:"white",units:"int"},t._view[6]={title:"treeNodeColl",value:"treeNodeCollision",color:"white",units:"int"},t._view[7]={title:"treeSpriteColl",value:"treeSpriteCollision",color:"white",units:"int"}):(t._view[0].title="FPS(WebGL)",t._view[5]={title:"Canvas",value:"_canvasStr",color:"white",units:"int"})):t._view[4]={title:"Canvas",value:"_canvasStr",color:"white",units:"int"},t._useCanvas?t.createUIPre(e,i):t.createUI(e,i),t.enable()):N.window.conch.showFPS&&N.window.conch.showFPS(e,i)},t.createUIPre=function(e,i){var n=N.pixelRatio;t._width=130*n,t._vx=75*n,t._height=n*(12*t._view.length+3*n)+4,t._fontSize=12*n;for(var s=0;s<t._view.length;s++)t._view[s].x=4,t._view[s].y=s*t._fontSize+2*n;t._canvas||((t._canvas=new yt("2D")).size(t._width,t._height),(t._ctx=t._canvas.getContext("2d")).textBaseline="top",t._ctx.font=t._fontSize+"px Sans-serif",t._canvas.source.style.cssText="pointer-events:none;background:rgba(150,150,150,0.8);z-index:100000;position: absolute;direction:ltr;left:"+e+"px;top:"+i+"px;width:"+t._width/n+"px;height:"+t._height/n+"px;"),t._first=!0,t.loop(),t._first=!1,N.container.appendChild(t._canvas.source)},t.createUI=function(e,i){var n=t._sp,s=N.pixelRatio;n||(n=new ct,(t._leftText=new gt).pos(5,5),t._leftText.color="#ffffff",n.addChild(t._leftText),(t._txt=new gt).pos(80*s,5),t._txt.color="#ffffff",n.addChild(t._txt),t._sp=n),n.pos(e,i);for(var r="",o=0;o<t._view.length;o++){r+=t._view[o].title+"\n"}t._leftText.text=r;var a=138*s,h=s*(12*t._view.length+3*s)+4;t._txt.fontSize=t._fontSize*s,t._leftText.fontSize=t._fontSize*s,n.size(a,h),n.graphics.clear(),n.graphics.setAlpha(.5),n.graphics.drawRect(0,0,a,h,"#999999"),n.graphics.setAlpha(1),t.loop()},t.enable=function(){i.timer.frameLoop(1,t,t.loop)},t.hide=function(){t._show=!1,i.timer.clear(t,t.loop),t._canvas&&N.removeElement(t._canvas.source)},t.clear=function(){t.trianglesFaces=t.drawCall=t.shaderCall=t.spriteCount=t.spriteRenderUseCacheCount=t.treeNodeCollision=t.treeSpriteCollision=t.canvasNormal=t.canvasBitmap=t.canvasReCache=0},t.loop=function(){t._count++;var e=N.now();if(!(e-t._timer<1e3)){var i=t._count;if(t.FPS=Math.round(1e3*i/(e-t._timer)),t._show){t.trianglesFaces=Math.round(t.trianglesFaces/i),t._useCanvas?(t.drawCall=Math.round(t.drawCall/i)-2,t.shaderCall=Math.round(t.shaderCall/i),t.spriteCount=Math.round(t.spriteCount/i)-1):(t.drawCall=Math.round(t.drawCall/i)-2,t.shaderCall=Math.round(t.shaderCall/i)-4,t.spriteCount=Math.round(t.spriteCount/i)-4),t.spriteRenderUseCacheCount=Math.round(t.spriteRenderUseCacheCount/i),t.canvasNormal=Math.round(t.canvasNormal/i),t.canvasBitmap=Math.round(t.canvasBitmap/i),t.canvasReCache=Math.ceil(t.canvasReCache/i),t.treeNodeCollision=Math.round(t.treeNodeCollision/i),t.treeSpriteCollision=Math.round(t.treeSpriteCollision/i);var n=t.FPS>0?Math.floor(1e3/t.FPS).toString():" ";t._fpsStr=t.FPS+(t.renderSlow?" slow":"")+" "+n,t._spriteStr=t.spriteCount+(t.spriteRenderUseCacheCount?"/"+t.spriteRenderUseCacheCount:""),t._canvasStr=t.canvasReCache+"/"+t.canvasNormal+"/"+t.canvasBitmap,t.currentMemorySize=O.systemResourceManager.memorySize,t._useCanvas?t.renderInfoPre():t.renderInfo(),t.clear()}t._count=0,t._timer=e}},t.renderInfoPre=function(){if(t._canvas){var e=t._ctx;e.clearRect(t._first?0:t._vx,0,t._width,t._height);for(var i=0;i<t._view.length;i++){var n=t._view[i];t._first&&(e.fillStyle="white",e.fillText(n.title,n.x,n.y,null,null,null)),e.fillStyle=n.color;var s=t[n.value];"M"==n.units&&(s=Math.floor(s/1048576*100)/100+" M"),e.fillText(s+"",n.x+t._vx,n.y,null,null,null)}}},t.renderInfo=function(){for(var e="",i=0;i<t._view.length;i++){var n=t._view[i],s=t[n.value];"M"==n.units&&(s=Math.floor(s/1048576*100)/100+" M"),"K"==n.units&&(s=Math.floor(s/1024*100)/100+" K"),e+=s+"\n"}t._txt.text=e},t.FPS=0,t.loopCount=0,t.shaderCall=0,t.drawCall=0,t.trianglesFaces=0,t.spriteCount=0,t.spriteRenderUseCacheCount=0,t.treeNodeCollision=0,t.treeSpriteCollision=0,t.canvasNormal=0,t.canvasBitmap=0,t.canvasReCache=0,t.renderSlow=!1,t.currentMemorySize=0,t._fpsStr=null,t._canvasStr=null,t._spriteStr=null,t._fpsData=[],t._timer=0,t._count=0,t._view=[],t._fontSize=12,t._txt=null,t._leftText=null,t._sp=null,t._show=!1,t._useCanvas=!1,t._canvas=null,t._ctx=null,t._first=!1,t._vx=NaN,t._width=0,t._height=100,t}()),V=(function(){function t(){this._strsToID={},this._idToStrs=[],this._length=0}s(t,"laya.utils.StringKey");var e=t.prototype;e.add=function(t){var e=this._strsToID[t];return null!=e?e:(this._idToStrs[this._length]=t,this._strsToID[t]=this._length++)},e.getID=function(t){var e=this._strsToID[t];return null==e?-1:e},e.getName=function(t){var e=this._idToStrs[t];return null==e?void 0:e}}(),function(){function t(){this._delta=0,this.scale=1,this.currFrame=0,this._mid=1,this._map=[],this._laters=[],this._handlers=[],this._temp=[],this._count=0,this.currTimer=this._now(),this._lastTimer=this._now(),this._init()}var e;s(t,"laya.utils.Timer");var n=t.prototype;return n._init=function(){i.timer&&i.timer.frameLoop(1,this,this._update)},n._now=function(){return Date.now()},n._update=function(){if(this.scale<=0)this._lastTimer=this._now();else{var t=this.currFrame=this.currFrame+this.scale,e=this._now();this._delta=(e-this._lastTimer)*this.scale;var i=this.currTimer=this.currTimer+this._delta;this._lastTimer=e;var n=this._handlers;for(this._count=0,o=0,a=n.length;o<a;o++)if(null!==(h=n[o]).method){var s=h.userFrame?t:i;if(s>=h.exeTime)if(h.repeat)if(h.jumpFrame)for(;s>=h.exeTime;)h.exeTime+=h.delay,h.run(!1);else h.exeTime+=h.delay,h.run(!1),s>h.exeTime&&(h.exeTime+=Math.ceil((s-h.exeTime)/h.delay)*h.delay);else h.run(!0)}else this._count++;(this._count>30||t%200==0)&&this._clearHandlers();for(var r=this._laters,o=0,a=r.length-1;o<=a;o++){var h=r[o];null!==h.method&&(this._map[h.key]=null,h.run(!1)),this._recoverHandler(h),o===a&&(a=r.length-1)}r.length=0}},n._clearHandlers=function(){for(var t=this._handlers,e=0,i=t.length;e<i;e++){var n=t[e];null!==n.method?this._temp.push(n):this._recoverHandler(n)}this._handlers=this._temp,this._temp=t,this._temp.length=0},n._recoverHandler=function(e){this._map[e.key]==e&&(this._map[e.key]=null),e.clear(),t._pool.push(e)},n._create=function(i,n,s,r,o,a,h){if(!s)return o.apply(r,a),null;if(h){var l=this._getHandler(r,o);if(l)return l.repeat=n,l.userFrame=i,l.delay=s,l.caller=r,l.method=o,l.args=a,l.exeTime=s+(i?this.currFrame:this.currTimer+this._now()-this._lastTimer),l}return l=t._pool.length>0?t._pool.pop():new e,l.repeat=n,l.userFrame=i,l.delay=s,l.caller=r,l.method=o,l.args=a,l.exeTime=s+(i?this.currFrame:this.currTimer+this._now()-this._lastTimer)+1,this._indexHandler(l),this._handlers.push(l),l},n._indexHandler=function(t){var e=t.caller,i=t.method,n=e?e.$_GID||(e.$_GID=K.getGID()):0,s=i.$_TID||(i.$_TID=1e5*this._mid++);t.key=n+s,this._map[t.key]=t},n.once=function(t,e,i,n,s){void 0===s&&(s=!0),this._create(!1,!1,t,e,i,n,s)},n.loop=function(t,e,i,n,s,r){void 0===s&&(s=!0),void 0===r&&(r=!1);var o=this._create(!1,!0,t,e,i,n,s);o&&(o.jumpFrame=r)},n.frameOnce=function(t,e,i,n,s){void 0===s&&(s=!0),this._create(!0,!1,t,e,i,n,s)},n.frameLoop=function(t,e,i,n,s){void 0===s&&(s=!0),this._create(!0,!0,t,e,i,n,s)},n.toString=function(){return"callLater:"+this._laters.length+" handlers:"+this._handlers.length+" pool:"+t._pool.length},n.clear=function(t,e){var i=this._getHandler(t,e);i&&(this._map[i.key]=null,i.key=0,i.clear())},n.clearAll=function(t){if(t)for(var e=0,i=this._handlers.length;e<i;e++){var n=this._handlers[e];n.caller===t&&(this._map[n.key]=null,n.key=0,n.clear())}},n._getHandler=function(t,e){var i=t?t.$_GID||(t.$_GID=K.getGID()):0,n=e.$_TID||(e.$_TID=1e5*this._mid++);return this._map[i+n]},n.callLater=function(i,n,s){if(null==this._getHandler(i,n)){if(t._pool.length)var r=t._pool.pop();else r=new e;r.caller=i,r.method=n,r.args=s,this._indexHandler(r),this._laters.push(r)}},n.runCallLater=function(t,e){var i=this._getHandler(t,e);i&&null!=i.method&&(this._map[i.key]=null,i.run(!0))},n.runTimer=function(t,e){this.runCallLater(t,e)},r(0,n,"delta",function(){return this._delta}),t._pool=[],t.__init$=function(){e=function(){function t(){this.key=0,this.repeat=!1,this.delay=0,this.userFrame=!1,this.exeTime=0,this.caller=null,this.method=null,this.args=null,this.jumpFrame=!1}s(t,"");var e=t.prototype;return e.clear=function(){this.caller=null,this.method=null,this.args=null},e.run=function(t){var e=this.caller;if(e&&e.destroyed)return this.clear();var i=this.method,n=this.args;t&&this.clear(),null!=i&&(n?i.apply(e,n):i.call(e))},t}()},t}()),j=function(){function t(){this.gid=0}s(t,"laya.utils.Tween");var e=t.prototype;return e.to=function(t,e,i,n,s,r,o){return void 0===r&&(r=0),void 0===o&&(o=!1),this._create(t,e,i,n,s,r,o,!0,!1,!0)},e.from=function(t,e,i,n,s,r,o){return void 0===r&&(r=0),void 0===o&&(o=!1),this._create(t,e,i,n,s,r,o,!1,!1,!0)},e._create=function(e,n,s,r,o,a,h,l,u,c){if(!e)throw new Error("Tween:target is null");this._target=e,this._duration=s,this._ease=r||n.ease||t.easeNone,this._complete=o||n.complete,this._delay=a,this._props=[],this._usedTimer=0,this._startTimer=N.now(),this._usedPool=u,this._delayParam=null,this.update=n.update;var _=e.$_GID||(e.$_GID=K.getGID());return t.tweenMap[_]?(h&&t.clearTween(e),t.tweenMap[_].push(this)):t.tweenMap[_]=[this],c?a<=0?this.firstStart(e,n,l):(this._delayParam=[e,n,l],i.scaleTimer.once(a,this,this.firstStart,this._delayParam)):this._initProps(e,n,l),this},e.firstStart=function(t,e,i){this._delayParam=null,t.destroyed?this.clear():(this._initProps(t,e,i),this._beginLoop())},e._initProps=function(t,e,i){for(var n in e)if("number"==typeof t[n]){var s=i?t[n]:e[n],r=i?e[n]:t[n];this._props.push([n,s,r-s]),i||(t[n]=s)}},e._beginLoop=function(){i.scaleTimer.frameLoop(1,this,this._doEase)},e._doEase=function(){this._updateEase(N.now())},e._updateEase=function(e){var i=this._target;if(i){if(i.destroyed)return t.clearTween(i);var n=this._usedTimer=e-this._startTimer-this._delay;if(!(n<0)){if(n>=this._duration)return this.complete();for(var s=n>0?this._ease(n,0,1,this._duration):0,r=this._props,o=0,a=r.length;o<a;o++){var h=r[o];i[h[0]]=h[1]+s*h[2]}this.update&&this.update.run()}}},e.complete=function(){if(this._target){i.scaleTimer.runTimer(this,this.firstStart);for(var t=this._target,e=this._props,n=this._complete,s=0,r=e.length;s<r;s++){var o=e[s];t[o[0]]=o[1]+o[2]}this.update&&this.update.run(),this.clear(),n&&n.run()}},e.pause=function(){i.scaleTimer.clear(this,this._beginLoop),i.scaleTimer.clear(this,this._doEase),i.scaleTimer.clear(this,this.firstStart);var t=NaN;(t=N.now()-this._startTimer-this._delay)<0&&(this._usedTimer=t)},e.setStartTime=function(t){this._startTimer=t},e.clear=function(){this._target&&(this._remove(),this._clear())},e._clear=function(){this.pause(),i.scaleTimer.clear(this,this.firstStart),this._complete=null,this._target=null,this._ease=null,this._props=null,this._delayParam=null,this._usedPool&&(this.update=null,X.recover("tween",this))},e.recover=function(){this._usedPool=!0,this._clear()},e._remove=function(){var e=t.tweenMap[this._target.$_GID];if(e)for(var i=0,n=e.length;i<n;i++)if(e[i]===this){e.splice(i,1);break}},e.restart=function(){if(this.pause(),this._usedTimer=0,this._startTimer=N.now(),this._delayParam)i.scaleTimer.once(this._delay,this,this.firstStart,this._delayParam);else{for(var t=this._props,e=0,n=t.length;e<n;e++){var s=t[e];this._target[s[0]]=s[1]}i.scaleTimer.once(this._delay,this,this._beginLoop)}},e.resume=function(){this._usedTimer>=this._duration||(this._startTimer=N.now()-this._usedTimer-this._delay,this._delayParam?this._usedTimer<0?i.scaleTimer.once(-this._usedTimer,this,this.firstStart,this._delayParam):this.firstStart.apply(this,this._delayParam):this._beginLoop())},r(0,e,"progress",null,function(t){var e=t*this._duration;this._startTimer=N.now()-this._delay-e}),t.to=function(e,i,n,s,r,o,a,h){return void 0===o&&(o=0),void 0===a&&(a=!1),void 0===h&&(h=!0),X.getItemByClass("tween",t)._create(e,i,n,s,r,o,a,!0,h,!0)},t.from=function(e,i,n,s,r,o,a,h){return void 0===o&&(o=0),void 0===a&&(a=!1),void 0===h&&(h=!0),X.getItemByClass("tween",t)._create(e,i,n,s,r,o,a,!1,h,!0)},t.clearAll=function(e){if(e&&e.$_GID){var i=t.tweenMap[e.$_GID];if(i){for(var n=0,s=i.length;n<s;n++)i[n]._clear();i.length=0}}},t.clear=function(t){t.clear()},t.clearTween=function(e){t.clearAll(e)},t.easeNone=function(t,e,i,n){return i*t/n+e},t.tweenMap={},t}(),K=function(){function t(){}return s(t,"laya.utils.Utils"),t.toRadian=function(e){return e*t._pi2},t.toAngle=function(e){return e*t._pi},t.toHexColor=function(t){if(t<0||isNaN(t))return null;for(var e=t.toString(16);e.length<6;)e="0"+e;return"#"+e},t.getGID=function(){return t._gid++},t.concatArray=function(t,e){if(!e)return t;if(!t)return e;var i=0,n=e.length;for(i=0;i<n;i++)t.push(e[i]);return t},t.clearArray=function(t){return t?(t.length=0,t):t},t.copyArray=function(t,e){if(t||(t=[]),!e)return t;t.length=e.length;var i=0,n=e.length;for(i=0;i<n;i++)t[i]=e[i];return t},t.getGlobalRecByPoints=function(t,e,i,n,s){var r;r=new S(e,i),r=t.localToGlobal(r);var o;return o=new S(n,s),o=t.localToGlobal(o),P._getWrapRec([r.x,r.y,o.x,o.y])},t.getGlobalPosAndScale=function(e){return t.getGlobalRecByPoints(e,0,0,1,1)},t.bind=function(t,e){return t.bind(e)},t.measureText=function(t,e){return o.measureText(t,e)},t.updateOrder=function(t){if(!t||t.length<2)return!1;for(var e,i=1,n=0,s=t.length,r=NaN;i<s;){for(e=t[n=i],r=t[n]._zOrder;--n>-1&&t[n]._zOrder>r;)t[n+1]=t[n];t[n+1]=e,i++}var o=e.parent.conchModel;if(o)if(null!=o.updateZOrder)o.updateZOrder();else{for(i=0;i<s;i++)o.removeChild(t[i].conchModel);for(i=0;i<s;i++)o.addChildAt(t[i].conchModel,i)}return!0},t.transPointList=function(t,e,i){var n=0,s=t.length;for(n=0;n<s;n+=2)t[n]+=e,t[n+1]+=i},t.parseInt=function(t,e){void 0===e&&(e=0);var i=N.window.parseInt(t,e);return isNaN(i)?0:i},t.getFileExtension=function(e){t._extReg.lastIndex=e.lastIndexOf(".");var i=t._extReg.exec(e);return i&&i.length>1?i[1].toLowerCase():null},t.getTransformRelativeToWindow=function(t,e,n){var s=i.stage,r=laya.utils.Utils.getGlobalPosAndScale(t),o=s._canvasTransform.clone(),a=o.tx,h=o.ty;o.rotate(-Math.PI/180*i.stage.canvasDegree),o.scale(i.stage.clientScaleX,i.stage.clientScaleY);var l=i.stage.canvasDegree%180!=0,u=NaN,c=NaN;l?(u=n+r.y,c=e+r.x,u*=o.d,c*=o.a,90==i.stage.canvasDegree?(u=a-u,c+=h):(u+=a,c=h-c)):(u=e+r.x,c=n+r.y,u*=o.a,c*=o.d,u+=a,c+=h);var _=NaN,d=NaN;return l?(_=o.d*r.height,d=o.a*r.width):(_=o.a*r.width,d=o.d*r.height),{x:u,y:c,scaleX:_,scaleY:d}},t.fitDOMElementInArea=function(e,n,s,r,o,a){e._fitLayaAirInitialized||(e._fitLayaAirInitialized=!0,e.style.transformOrigin=e.style.webKittransformOrigin="left top",e.style.position="absolute");var h=t.getTransformRelativeToWindow(n,s,r);e.style.transform=e.style.webkitTransform="scale("+h.scaleX+","+h.scaleY+") rotate("+i.stage.canvasDegree+"deg)",e.style.width=o+"px",e.style.height=a+"px",e.style.left=h.x+"px",e.style.top=h.y+"px"},t.isOkTextureList=function(t){if(!t)return!1;var e,i=0,n=t.length;for(i=0;i<n;i++)if(!(e=t[i])||!e.source)return!1;return!0},t.isOKCmdList=function(t){if(!t)return!1;var e,i,n=0,s=t.length,r=R._context;for(n=0;n<s;n++)switch((e=t[n]).callee){case r._drawTexture:case r._fillTexture:case r._drawTextureWithTransform:if(!(i=e[0])||!i.source)return!1}return!0},t._gid=1,t._pi=180/Math.PI,t._pi2=Math.PI/180,t._extReg=/\.(\w+)\??/g,t.parseXMLFromString=function(t){var e;if(t=t.replace(/>\s+</g,"><"),(e=(new DOMParser).parseFromString(t,"text/xml")).firstChild.textContent.indexOf("This page contains the following errors")>-1)throw new Error(e.firstChild.firstChild.textContent);return e},t}(),q=function(){function t(){this.useDic={},this.shapeDic={},this.shapeLineDic={},this._id=0,this._checkKey=!1,this._freeIdArray=[],R.isWebGL&&W.regCacheByFunction(K.bind(this.startDispose,this),K.bind(this.getCacheList,this))}s(t,"laya.utils.VectorGraphManager");var e=t.prototype;return e.getId=function(){return this._id++},e.addShape=function(t,e){this.shapeDic[t]=e,this.useDic[t]||(this.useDic[t]=!0)},e.addLine=function(t,e){this.shapeLineDic[t]=e,this.shapeLineDic[t]||(this.shapeLineDic[t]=!0)},e.getShape=function(t){this._checkKey&&null!=this.useDic[t]&&(this.useDic[t]=!0)},e.deleteShape=function(t){this.shapeDic[t]&&(this.shapeDic[t]=null,delete this.shapeDic[t]),this.shapeLineDic[t]&&(this.shapeLineDic[t]=null,delete this.shapeLineDic[t]),null!=this.useDic[t]&&delete this.useDic[t]},e.getCacheList=function(){var t,e=[];for(t in this.shapeDic)e.push(this.shapeDic[t]);for(t in this.shapeLineDic)e.push(this.shapeLineDic[t]);return e},e.startDispose=function(t){var e;for(e in this.useDic)this.useDic[e]=!1;this._checkKey=!0},e.endDispose=function(){if(this._checkKey){var t;for(t in this.useDic)this.useDic[t]||this.deleteShape(t);this._checkKey=!1}},t.getInstance=function(){return t.instance=t.instance||new t},t.instance=null,t}(),Q=function(){function t(){this._obj=null,this._obj=t.supportWeakMap?new N.window.WeakMap:{},t.supportWeakMap||t._maps.push(this)}s(t,"laya.utils.WeakObject");var e=t.prototype;return e.set=function(e,i){if(null!=e)if(t.supportWeakMap){var n=e;"string"!=typeof e&&"number"!=typeof e||(n=t._keys[e])||(n=t._keys[e]={k:e}),this._obj.set(n,i)}else"string"==typeof e||"number"==typeof e?this._obj[e]=i:(e.$_GID||(e.$_GID=K.getGID()),this._obj[e.$_GID]=i)},e.get=function(e){if(null==e)return null;if(t.supportWeakMap){var i="string"==typeof e||"number"==typeof e?t._keys[e]:e;return i?this._obj.get(i):null}return"string"==typeof e||"number"==typeof e?this._obj[e]:this._obj[e.$_GID]},e.del=function(e){if(null!=e)if(t.supportWeakMap){var i="string"==typeof e||"number"==typeof e?t._keys[e]:e;if(!i)return;this._obj.delete(i)}else"string"==typeof e||"number"==typeof e?delete this._obj[e]:delete this._obj[this._obj.$_GID]},e.has=function(e){if(null==e)return!1;if(t.supportWeakMap){var i="string"==typeof e||"number"==typeof e?t._keys[e]:e;return this._obj.has(i)}return"string"==typeof e||"number"==typeof e?null!=this._obj[e]:null!=this._obj[this._obj.$_GID]},t.__init__=function(){(t.supportWeakMap=null!=N.window.WeakMap)||i.timer.loop(t.delInterval,null,t.clearCache)},t.clearCache=function(){for(var e=0,i=t._maps.length;e<i;e++){t._maps[e]._obj={}}},t.supportWeakMap=!1,t.delInterval=3e5,t._keys={},t._maps=[],n(t,["I",function(){return this.I=new t}]),t}(),J=function(){function t(){this.id=NaN,this.save=[],this.toUpperCase=null,this.changed=!1,this._text=null}s(t,"laya.utils.WordText");var e=t.prototype;return e.setText=function(t){this.changed=!0,this._text=t},e.toString=function(){return this._text},e.charCodeAt=function(t){return this._text?this._text.charCodeAt(t):NaN},e.charAt=function(t){return this._text?this._text.charAt(t):null},r(0,e,"length",function(){return this._text?this._text.length:0}),t}(),Z=function(t){function e(){this._bits=0,this._displayedInStage=!1,this._parent=null,this.conchModel=null,this.name="",this._destroyed=!1,e.__super.call(this),this._childs=e.ARRAY_EMPTY,this._$P=e.PROP_EMPTY,this.timer=i.scaleTimer,this.conchModel=R.isConchNode?this.createConchModel():null}s(e,"laya.display.Node",h);var n=e.prototype;return n._setBit=function(t,e){if(1==t){this._getBit(t)!=e&&this._updateDisplayedInstage()}e?this._bits|=t:this._bits&=~t},n._getBit=function(t){return 0!=(this._bits&t)},n._setUpNoticeChain=function(){this._getBit(1)&&this._setUpNoticeType(1)},n._setUpNoticeType=function(t){var e=this;for(e._setBit(t,!0),e=e.parent;e;){if(e._getBit(t))return;e._setBit(t,!0),e=e.parent}},n.on=function(t,e,i,n){return"display"!==t&&"undisplay"!==t||this._getBit(1)||this._setUpNoticeType(1),this._createListener(t,e,i,n,!1)},n.once=function(t,e,i,n){return"display"!==t&&"undisplay"!==t||this._getBit(1)||this._setUpNoticeType(1),this._createListener(t,e,i,n,!0)},n.createConchModel=function(){return null},n.destroy=function(t){void 0===t&&(t=!0),this._destroyed=!0,this._parent&&this._parent.removeChild(this),this._childs&&(t?this.destroyChildren():this.removeChildren()),this._childs=null,this._$P=null,this.offAll(),this.timer.clearAll(this)},n.destroyChildren=function(){if(this._childs)for(var t=this._childs.length-1;t>-1;t--)this._childs[t].destroy(!0)},n.addChild=function(t){if(!t||this.destroyed||t===this)return t;if(t.zOrder&&this._set$P("hasZorder",!0),t._parent===this){var i=this.getChildIndex(t);i!==this._childs.length-1&&(this._childs.splice(i,1),this._childs.push(t),this.conchModel&&(this.conchModel.removeChild(t.conchModel),this.conchModel.addChildAt(t.conchModel,this._childs.length-1)),this._childChanged())}else t.parent&&t.parent.removeChild(t),this._childs===e.ARRAY_EMPTY&&(this._childs=[]),this._childs.push(t),this.conchModel&&this.conchModel.addChildAt(t.conchModel,this._childs.length-1),t.parent=this,this._childChanged();return t},n.addChildren=function(t){for(var e=arguments,i=0,n=e.length;i<n;)this.addChild(e[i++])},n.addChildAt=function(t,i){if(!t||this.destroyed||t===this)return t;if(t.zOrder&&this._set$P("hasZorder",!0),i>=0&&i<=this._childs.length){if(t._parent===this){var n=this.getChildIndex(t);this._childs.splice(n,1),this._childs.splice(i,0,t),this.conchModel&&(this.conchModel.removeChild(t.conchModel),this.conchModel.addChildAt(t.conchModel,i)),this._childChanged()}else t.parent&&t.parent.removeChild(t),this._childs===e.ARRAY_EMPTY&&(this._childs=[]),this._childs.splice(i,0,t),this.conchModel&&this.conchModel.addChildAt(t.conchModel,i),t.parent=this;return t}throw new Error("appendChildAt:The index is out of bounds")},n.getChildIndex=function(t){return this._childs.indexOf(t)},n.getChildByName=function(t){var e=this._childs;if(e)for(var i=0,n=e.length;i<n;i++){var s=e[i];if(s.name===t)return s}return null},n._get$P=function(t){return this._$P[t]},n._set$P=function(t,i){return this.destroyed||(this._$P===e.PROP_EMPTY&&(this._$P={}),this._$P[t]=i),i},n.getChildAt=function(t){return this._childs[t]},n.setChildIndex=function(t,e){var i=this._childs;if(e<0||e>=i.length)throw new Error("setChildIndex:The index is out of bounds.");var n=this.getChildIndex(t);if(n<0)throw new Error("setChildIndex:node is must child of this object.");return i.splice(n,1),i.splice(e,0,t),this.conchModel&&(this.conchModel.removeChild(t.conchModel),this.conchModel.addChildAt(t.conchModel,e)),this._childChanged(),t},n._childChanged=function(t){},n.removeChild=function(t){if(!this._childs)return t;var e=this._childs.indexOf(t);return this.removeChildAt(e)},n.removeSelf=function(){return this._parent&&this._parent.removeChild(this),this},n.removeChildByName=function(t){var e=this.getChildByName(t);return e&&this.removeChild(e),e},n.removeChildAt=function(t){var e=this.getChildAt(t);return e&&(this._childs.splice(t,1),this.conchModel&&this.conchModel.removeChild(e.conchModel),e.parent=null),e},n.removeChildren=function(t,i){if(void 0===t&&(t=0),void 0===i&&(i=2147483647),this._childs&&this._childs.length>0){var n=this._childs;if(0===t&&i>=o){var s=n;this._childs=e.ARRAY_EMPTY}else s=n.splice(t,i-t);for(var r=0,o=s.length;r<o;r++)s[r].parent=null,this.conchModel&&this.conchModel.removeChild(s[r].conchModel)}return this},n.replaceChild=function(t,e){var i=this._childs.indexOf(e);return i>-1?(this._childs.splice(i,1,t),this.conchModel&&(this.conchModel.removeChild(e.conchModel),this.conchModel.addChildAt(t.conchModel,i)),e.parent=null,t.parent=this,t):null},n._updateDisplayedInstage=function(){var t;t=this;var e=i.stage;for(this._displayedInStage=!1;t;){if(t._getBit(1)){this._displayedInStage=t._displayedInStage;break}if(t==e||t._displayedInStage){this._displayedInStage=!0;break}t=t.parent}},n._setDisplay=function(t){this._displayedInStage!==t&&(this._displayedInStage=t,t?this.event("display"):this.event("undisplay"))},n._displayChild=function(t,e){var i=t._childs;if(i)for(var n=0,s=i.length;n<s;n++){var r=i[n];r._getBit(1)&&(r._childs.length>0?this._displayChild(r,e):r._setDisplay(e))}t._setDisplay(e)},n.contains=function(t){if(t===this)return!0;for(;t;){if(t.parent===this)return!0;t=t.parent}return!1},n.timerLoop=function(t,e,i,n,s,r){void 0===s&&(s=!0),void 0===r&&(r=!1),this.timer.loop(t,e,i,n,s,r)},n.timerOnce=function(t,e,i,n,s){void 0===s&&(s=!0),this.timer._create(!1,!1,t,e,i,n,s)},n.frameLoop=function(t,e,i,n,s){void 0===s&&(s=!0),this.timer._create(!0,!0,t,e,i,n,s)},n.frameOnce=function(t,e,i,n,s){void 0===s&&(s=!0),this.timer._create(!0,!1,t,e,i,n,s)},n.clearTimer=function(t,e){this.timer.clear(t,e)},r(0,n,"numChildren",function(){return this._childs.length}),r(0,n,"destroyed",function(){return this._destroyed}),r(0,n,"parent",function(){return this._parent},function(t){this._parent!==t&&(t?(this._parent=t,this.event("added"),this._getBit(1)&&(this._setUpNoticeChain(),t.displayedInStage&&this._displayChild(this,!0)),t._childChanged(this)):(this.event("removed"),this._parent._childChanged(),this._getBit(1)&&this._displayChild(this,!1),this._parent=t))}),r(0,n,"displayedInStage",function(){return this._getBit(1)?this._displayedInStage:(this._setUpNoticeType(1),this._displayedInStage)}),e.ARRAY_EMPTY=[],e.PROP_EMPTY={},e.NOTICE_DISPLAY=1,e.MOUSEENABLE=2,e}(),tt=function(t){function e(t){this._bgground=null,this._border=null,this._rect=null,this.underLine=0,this.lineHeight=0,e.__super.call(this),this._padding=e._PADDING,this._spacing=e._SPACING,this._aligns=e._ALIGNS,this._font=_.EMPTY,this._ower=t}s(e,"laya.display.css.CSSStyle",t);var i=e.prototype;return i.destroy=function(){this._ower=null,this._font=null,this._rect=null},i.inherit=function(t){this._font=t._font,this._spacing=t._spacing===e._SPACING?e._SPACING:t._spacing.slice(),this.lineHeight=t.lineHeight},i._widthAuto=function(){return 0!=(262144&this._type)},i.widthed=function(t){return 0!=(8&this._type)},i._calculation=function(t,e){function i(t,e,i){return t*i[0]+e*i[1]+i[2]}function n(t){var e=r.width,n=s.width;o.width&&(s.width=i(e,n,o.width)),o.height&&(s.height=i(e,n,o.height)),o.left&&(s.x=i(e,n,o.left)),o.top&&(s.y=i(e,n,o.top))}if(e.indexOf("%")<0)return!1;var s=this._ower,r=s.parent,o=this._rect;null===o&&(r._getCSSStyle()._type|=524288,r.on("resize",this,n),this._rect=o={input:{}});var a=e.split(" ");return a[0]=parseFloat(a[0])/100,1==a.length?a[1]=a[2]=0:(a[1]=parseFloat(a[1])/100,a[2]=parseFloat(a[2])),o[t]=a,o.input[t]=e,n(),!0},i.heighted=function(t){return 0!=(8192&this._type)},i.size=function(t,e){var i=this._ower,n=!1;-1!==t&&t!=this._ower.width&&(this._type|=8,this._ower.width=t,n=!0),-1!==e&&e!=this._ower.height&&(this._type|=8192,this._ower.height=e,n=!0),n&&(i._layoutLater(),524288&this._type&&i.event("resize",this))},i._getAlign=function(){return this._aligns[0]},i._getValign=function(){return this._aligns[1]},i._getCssFloat=function(){return 0!=(32768&this._type)?32768:0},i._createFont=function(){return 4096&this._type?this._font:(this._type|=4096,this._font=new _(this._font))},i.render=function(t,e,i,n){var s=t.width,r=t.height;i-=t.pivotX,n-=t.pivotY,this._bgground&&null!=this._bgground.color&&e.ctx.fillRect(i,n,s,r,this._bgground.color),this._border&&this._border.color&&e.drawRect(i,n,s,r,this._border.color.strColor,this._border.size)},i.getCSSStyle=function(){return this},i.cssText=function(t){this.attrs(e.parseOneCSS(t,";"))},i.attrs=function(t){if(t)for(var e=0,i=t.length;e<i;e++){var n=t[e];this[n[0]]=n[1]}},i.setTransform=function(t){"none"===t?this._tf=c._TF_EMPTY:this.attrs(e.parseOneCSS(t,","))},i.translate=function(t,e){this._tf===c._TF_EMPTY&&(this._tf=new d),this._tf.translateX=t,this._tf.translateY=e},i.scale=function(t,e){this._tf===c._TF_EMPTY&&(this._tf=new d),this._tf.scaleX=t,this._tf.scaleY=e},i._enableLayout=function(){return 0==(2&this._type)&&0==(4&this._type)},r(0,i,"block",t.prototype._$get_block,function(t){t?this._type|=1:this._type&=-2}),r(0,i,"valign",function(){return e._valigndef[this._aligns[1]]},function(t){this._aligns===e._ALIGNS&&(this._aligns=[0,0,0]),this._aligns[1]=e._valigndef[t]}),r(0,i,"height",null,function(t){if(this._type|=8192,"string"==typeof t){if(this._calculation("height",t))return;t=parseInt(t)}this.size(-1,t)}),r(0,i,"width",null,function(t){if(this._type|=8,"string"==typeof t){var e=t.indexOf("auto");if(e>=0&&(this._type|=262144,t=t.substr(0,e)),this._calculation("width",t))return;t=parseInt(t)}this.size(t,-1)}),r(0,i,"fontWeight",function(){return this._font.weight},function(t){this._createFont().weight=t}),r(0,i,"left",null,function(t){var e=this._ower;if("string"==typeof t){if("center"===t?t="50% -50% 0":"right"===t&&(t="100% -100% 0"),this._calculation("left",t))return;t=parseInt(t)}e.x=t}),r(0,i,"_translate",null,function(t){this.translate(t[0],t[1])}),r(0,i,"absolute",function(){return 0!=(4&this._type)}),r(0,i,"top",null,function(t){var e=this._ower;if("string"==typeof t){if("middle"===t?t="50% -50% 0":"bottom"===t&&(t="100% -100% 0"),this._calculation("top",t))return;t=parseInt(t)}e.y=t}),r(0,i,"align",function(){return e._aligndef[this._aligns[0]]},function(t){this._aligns===e._ALIGNS&&(this._aligns=[0,0,0]),this._aligns[0]=e._aligndef[t]}),r(0,i,"bold",function(){return this._font.bold},function(t){this._createFont().bold=t}),r(0,i,"padding",function(){return this._padding},function(t){this._padding=t}),r(0,i,"leading",function(){return this._spacing[1]},function(t){"string"==typeof t&&(t=parseInt(t+"")),this._spacing===e._SPACING&&(this._spacing=[0,0]),this._spacing[1]=t}),r(0,i,"lineElement",function(){return 0!=(65536&this._type)},function(t){t?this._type|=65536:this._type&=-65537}),r(0,i,"cssFloat",function(){return 0!=(32768&this._type)?"right":"left"},function(t){this.lineElement=!1,"right"===t?this._type|=32768:this._type&=-32769}),r(0,i,"textDecoration",function(){return this._font.decoration},function(t){this._createFont().decoration=t}),r(0,i,"whiteSpace",function(){return 131072&this._type?"nowrap":""},function(t){"nowrap"===t&&(this._type|=131072),"none"===t&&(this._type&=-131073)}),r(0,i,"background",null,function(t){t?(this._bgground||(this._bgground={}),this._bgground.color=t,this._ower.conchModel&&this._ower.conchModel.bgColor(t),this._type|=16384,this._ower._renderType|=256):this._bgground=null}),r(0,i,"wordWrap",function(){return 0==(131072&this._type)},function(t){t?this._type&=-131073:this._type|=131072}),r(0,i,"color",function(){return this._font.color},function(t){this._createFont().color=t}),r(0,i,"password",function(){return this._font.password},function(t){this._createFont().password=t}),r(0,i,"backgroundColor",function(){return this._bgground?this._bgground.color:null},function(t){"none"===t?this._bgground=null:(this._bgground||(this._bgground={}),this._bgground.color=t),this._ower.conchModel&&this._ower.conchModel.bgColor(t),this._ower._renderType|=256}),r(0,i,"font",function(){return this._font.toString()},function(t){this._createFont().set(t)}),r(0,i,"weight",null,function(t){this._createFont().weight=t}),r(0,i,"letterSpacing",function(){return this._spacing[0]},function(t){"string"==typeof t&&(t=parseInt(t+"")),this._spacing===e._SPACING&&(this._spacing=[0,0]),this._spacing[0]=t}),r(0,i,"fontSize",function(){return this._font.size},function(t){this._createFont().size=t}),r(0,i,"italic",function(){return this._font.italic},function(t){this._createFont().italic=t}),r(0,i,"fontFamily",function(){return this._font.family},function(t){this._createFont().family=t}),r(0,i,"stroke",function(){return this._font.stroke[0]},function(t){this._createFont().stroke===_._STROKE&&(this._font.stroke=[0,"#000000"]),this._font.stroke[0]=t}),r(0,i,"strokeColor",function(){return this._font.stroke[1]},function(t){this._createFont().stroke===_._STROKE&&(this._font.stroke=[0,"#000000"]),this._font.stroke[1]=t}),r(0,i,"border",function(){return this._border?this._border.value:""},function(t){if("none"!=t){this._border||(this._border={}),this._border.value=t;var e=t.split(" ");if(this._border.color=U.create(e[e.length-1]),1==e.length)return this._border.size=1,void(this._border.type="solid");var i=0;e[0].indexOf("px")>0?(this._border.size=parseInt(e[0]),i++):this._border.size=1,this._border.type=e[i],this._ower._renderType|=256}else this._border=null}),r(0,i,"borderColor",function(){return this._border&&this._border.color?this._border.color.strColor:null},function(t){t?(this._border||(this._border={size:1,type:"solid"}),this._border.color=null==t?null:U.create(t),this._ower.conchModel&&this._ower.conchModel.border(this._border.color.strColor),this._ower._renderType|=256):this._border=null}),r(0,i,"position",function(){return 4&this._type?"absolute":""},function(t){"absolute"==t?this._type|=4:this._type&=-5}),r(0,i,"display",null,function(t){switch(t){case"":this._type&=-3,this.visible=!0;break;case"none":this._type|=2,this.visible=!1,this._ower._layoutLater()}}),r(0,i,"paddingLeft",function(){return this.padding[3]}),r(0,i,"paddingTop",function(){return this.padding[0]}),r(0,i,"_scale",null,function(t){this._ower.scale(t[0],t[1])}),r(0,i,"_rotate",null,function(t){this._ower.rotation=t}),e.parseOneCSS=function(t,i){for(var n,s=[],r=t.split(i),o=0,a=r.length;o<a;o++){var h=r[o],l=h.indexOf(":"),u=h.substr(0,l).replace(/^\s+|\s+$/g,"");if(0!=u.length){var c=h.substr(l+1).replace(/^\s+|\s+$/g,""),_=[u,c];switch(u){case"italic":case"bold":_[1]="true"==c;break;case"line-height":_[0]="lineHeight",_[1]=parseInt(c);break;case"font-size":_[0]="fontSize",_[1]=parseInt(c);break;case"padding":(n=c.split(" ")).length>1||(n[1]=n[2]=n[3]=n[0]),_[1]=[parseInt(n[0]),parseInt(n[1]),parseInt(n[2]),parseInt(n[3])];break;case"rotate":_[0]="_rotate",_[1]=parseFloat(c);break;case"scale":n=c.split(" "),_[0]="_scale",_[1]=[parseFloat(n[0]),parseFloat(n[1])];break;case"translate":n=c.split(" "),_[0]="_translate",_[1]=[parseInt(n[0]),parseInt(n[1])];break;default:(_[0]=e._CSSTOVALUE[u])||(_[0]=u)}s.push(_)}}return s},e.parseCSS=function(t,i){for(var n;null!=(n=e._parseCSSRegExp.exec(t));)e.styleSheets[n[1]]=e.parseOneCSS(n[2],";")},e.EMPTY=new e(null),e._CSSTOVALUE={"letter-spacing":"letterSpacing","line-spacing":"lineSpacing","white-space":"whiteSpace","line-height":"lineHeight","scale-x":"scaleX","scale-y":"scaleY","translate-x":"translateX","translate-y":"translateY","font-family":"fontFamily","font-weight":"fontWeight","vertical-align":"valign","text-decoration":"textDecoration","background-color":"backgroundColor","border-color":"borderColor",float:"cssFloat"},e._parseCSSRegExp=new RegExp("([.#]\\w+)\\s*{([\\s\\S]*?)}","g"),e._aligndef={left:0,center:1,right:2,0:"left",1:"center",2:"right"},e._valigndef={top:0,middle:1,bottom:2,0:"top",1:"middle",2:"bottom"},e.styleSheets={},e.ALIGN_CENTER=1,e.ALIGN_RIGHT=2,e.VALIGN_MIDDLE=1,e.VALIGN_BOTTOM=2,e._CSS_BLOCK=1,e._DISPLAY_NONE=2,e._ABSOLUTE=4,e._WIDTH_SET=8,e._PADDING=[0,0,0,0],e._RECT=[-1,-1,-1,-1],e._SPACING=[0,0],e._ALIGNS=[0,0,0],e.ADDLAYOUTED=512,e._NEWFONT=4096,e._HEIGHT_SET=8192,e._BACKGROUND_SET=16384,e._FLOAT_RIGHT=32768,e._LINE_ELEMENT=65536,e._NOWARP=131072,e._WIDTHAUTO=262144,e._LISTERRESZIE=524288,e}(c),et=function(t){function e(){this.url=null,this.audio=null,this.loaded=!1,e.__super.call(this)}s(e,"laya.media.h5audio.AudioSound",h);var i=e.prototype;return i.dispose=function(){var t=e._audioCache[this.url];t&&(t.src="",delete e._audioCache[this.url])},i.load=function(t){function i(){s(),o.loaded=!0,o.event("complete")}function n(){r.load=null,s(),o.event("error")}function s(){r.removeEventListener("canplaythrough",i),r.removeEventListener("error",n)}t=L.formatURL(t),this.url=t;var r;if(t==E._tMusic?(e._initMusicAudio(),(r=e._musicAudio).src!=t&&(e._audioCache[r.src]=null,r=null)):r=e._audioCache[t],r&&r.readyState>=2)this.event("complete");else{r||(t==E._tMusic?(e._initMusicAudio(),r=e._musicAudio):r=N.createElement("audio"),e._audioCache[t]=r,r.src=t),r.addEventListener("canplaythrough",i),r.addEventListener("error",n);var o=this;this.audio=r,r.load?r.load():n()}},i.play=function(t,i){if(void 0===t&&(t=0),void 0===i&&(i=0),!this.url)return null;var n;if(!(n=this.url==E._tMusic?e._musicAudio:e._audioCache[this.url]))return null;var s;s=X.getItem("audio:"+this.url),R.isConchApp?s||((s=N.createElement("audio")).src=this.url):this.url==E._tMusic?(e._initMusicAudio(),(s=e._musicAudio).src=this.url):s=s||n.cloneNode(!0);var r=new _t(s);return r.url=this.url,r.loops=i,r.startTime=t,r.play(),E.addChannel(r),r},r(0,i,"duration",function(){var t;return(t=e._audioCache[this.url])?t.duration:0}),e._initMusicAudio=function(){e._musicAudio||(e._musicAudio||(e._musicAudio=N.createElement("audio")),R.isConchApp||N.document.addEventListener("mousedown",e._makeMusicOK))},e._makeMusicOK=function(){N.document.removeEventListener("mousedown",e._makeMusicOK),e._musicAudio.src?e._musicAudio.play():(e._musicAudio.src="",e._musicAudio.load())},e._audioCache={},e._musicAudio=null,e}(),it=function(t){function e(){this.url=null,this.loops=0,this.startTime=NaN,this.isStopped=!1,this.completeHandler=null,e.__super.call(this)}s(e,"laya.media.SoundChannel",h);var i=e.prototype;return i.play=function(){},i.stop=function(){},i.pause=function(){},i.resume=function(){},i.__runComplete=function(t){t&&t.run()},r(0,i,"volume",function(){return 1},function(t){}),r(0,i,"position",function(){return 0}),r(0,i,"duration",function(){return 0}),e}(),nt=function(t){function e(){e.__super.call(this)}s(e,"laya.media.Sound",h);var i=e.prototype;return i.load=function(t){},i.play=function(t,e){return void 0===t&&(t=0),void 0===e&&(e=0),null},i.dispose=function(){},r(0,i,"duration",function(){return 0}),e}(),st=function(t){function e(){this.url=null,this.loaded=!1,this.data=null,this.audioBuffer=null,this.__toPlays=null,this._disposed=!1,e.__super.call(this)}s(e,"laya.media.webaudio.WebAudioSound",h);var i=e.prototype;return i.load=function(t){var i=this;if(t=L.formatURL(t),this.url=t,this.audioBuffer=e._dataCache[t],this.audioBuffer)this._loaded(this.audioBuffer);else if(e.e.on("loaded:"+t,this,this._loaded),e.e.on("err:"+t,this,this._err),!e.__loadingSound[t]){e.__loadingSound[t]=!0;var n=new N.window.XMLHttpRequest;n.open("GET",t,!0),n.responseType="arraybuffer",n.onload=function(){i._disposed?i._removeLoadEvents():(i.data=n.response,e.buffs.push({buffer:i.data,url:i.url}),e.decode())},n.onerror=function(t){i._err()},n.send()}},i._err=function(){this._removeLoadEvents(),e.__loadingSound[this.url]=!1,this.event("error")},i._loaded=function(t){this._removeLoadEvents(),this._disposed||(this.audioBuffer=t,e._dataCache[this.url]=this.audioBuffer,this.loaded=!0,this.event("complete"))},i._removeLoadEvents=function(){e.e.off("loaded:"+this.url,this,this._loaded),e.e.off("err:"+this.url,this,this._err)},i.__playAfterLoaded=function(){if(this.__toPlays){var t,e=0,i=0;i=(t=this.__toPlays).length;var n;for(e=0;e<i;e++)(n=t[e])[2]&&!n[2].isStopped&&this.play(n[0],n[1],n[2]);this.__toPlays.length=0}},i.play=function(t,e,i){return void 0===t&&(t=0),void 0===e&&(e=0),i=i||new dt,this.audioBuffer||this.url&&(this.__toPlays||(this.__toPlays=[]),this.__toPlays.push([t,e,i]),this.once("complete",this,this.__playAfterLoaded),this.load(this.url)),i.url=this.url,i.loops=e,i.audioBuffer=this.audioBuffer,i.startTime=t,i.play(),E.addChannel(i),i},i.dispose=function(){this._disposed=!0,delete e._dataCache[this.url],delete e.__loadingSound[this.url],this.audioBuffer=null,this.data=null,this.__toPlays=[]},r(0,i,"duration",function(){return this.audioBuffer?this.audioBuffer.duration:0}),e.decode=function(){e.buffs.length<=0||e.isDecoding||(e.isDecoding=!0,e.tInfo=e.buffs.shift(),e.ctx.decodeAudioData(e.tInfo.buffer,e._done,e._fail))},e._done=function(t){e.e.event("loaded:"+e.tInfo.url,t),e.isDecoding=!1,e.decode()},e._fail=function(){e.e.event("err:"+e.tInfo.url,null),e.isDecoding=!1,e.decode()},e._playEmptySound=function(){if(null!=e.ctx){var t=e.ctx.createBufferSource();t.buffer=e._miniBuffer,t.connect(e.ctx.destination),t.start(0,0,0)}},e._unlock=function(){e._unlocked||(e._playEmptySound(),"running"==e.ctx.state&&(N.document.removeEventListener("mousedown",e._unlock,!0),N.document.removeEventListener("touchend",e._unlock,!0),e._unlocked=!0))},e.initWebAudio=function(){"running"!=e.ctx.state&&(e._unlock(),N.document.addEventListener("mousedown",e._unlock,!0),N.document.addEventListener("touchend",e._unlock,!0))},e._dataCache={},e.buffs=[],e.isDecoding=!1,e._unlocked=!1,e.tInfo=null,e.__loadingSound={},n(e,["window",function(){return this.window=N.window},"webAudioEnabled",function(){return this.webAudioEnabled=e.window.AudioContext||e.window.webkitAudioContext||e.window.mozAudioContext},"ctx",function(){return this.ctx=e.webAudioEnabled?new(e.window.AudioContext||e.window.webkitAudioContext||e.window.mozAudioContext):void 0},"_miniBuffer",function(){return this._miniBuffer=e.ctx.createBuffer(1,1,22050)},"e",function(){return this.e=new h}]),e}(),rt=function(t){function e(){this._responseType=null,this._data=null,e.__super.call(this),this._http=new N.window.XMLHttpRequest}s(e,"laya.net.HttpRequest",h);var i=e.prototype;return i.send=function(t,e,i,n,s){void 0===i&&(i="get"),void 0===n&&(n="text"),this._responseType=n,this._data=null;var r=this,o=this._http;if(o.open(i,t,!0),s)for(var a=0;a<s.length;a++)o.setRequestHeader(s[a++],s[a]);else R.isConchApp||(e&&"string"!=typeof e?o.setRequestHeader("Content-Type","application/json"):o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"));o.responseType="arraybuffer"!==n?"text":"arraybuffer",o.onerror=function(t){r._onError(t)},o.onabort=function(t){r._onAbort(t)},o.onprogress=function(t){r._onProgress(t)},o.onload=function(t){r._onLoad(t)},o.send(e)},i._onProgress=function(t){t&&t.lengthComputable&&this.event("progress",t.loaded/t.total)},i._onAbort=function(t){this.error("Request was aborted by user")},i._onError=function(t){this.error("Request failed Status:"+this._http.status+" text:"+this._http.statusText)},i._onLoad=function(t){var e=this._http,i=void 0!==e.status?e.status:200;200===i||204===i||0===i?this.complete():this.error("["+e.status+"]"+e.statusText+":"+e.responseURL)},i.error=function(t){this.clear(),this.event("error",t)},i.complete=function(){this.clear();var t=!0;try{"json"===this._responseType?this._data=JSON.parse(this._http.responseText):"xml"===this._responseType?this._data=K.parseXMLFromString(this._http.responseText):this._data=this._http.response||this._http.responseText}catch(e){t=!1,this.error(e.message)}t&&this.event("complete",this._data instanceof Array?[this._data]:this._data)},i.clear=function(){var t=this._http;t.onerror=t.onabort=t.onprogress=t.onload=null},r(0,i,"url",function(){return this._http.responseURL}),r(0,i,"http",function(){return this._http}),r(0,i,"data",function(){return this._data}),e}(),ot=function(t){function e(){this._data=null,this._class=null,this._url=null,this._type=null,this._cache=!1,this._http=null,this._customParse=!1,e.__super.call(this)}s(e,"laya.net.Loader",h);var n=e.prototype;return n.load=function(t,i,n,s,r){if(void 0===n&&(n=!0),void 0===r&&(r=!1),this._url=t,0===t.indexOf("data:image")?this._type=i="image":(this._type=i||(i=this.getTypeFromUrl(t)),t=L.formatURL(t)),this._cache=n,this._data=null,!r&&e.loadedMap[t])return this._data=e.loadedMap[t],this.event("progress",1),void this.event("complete",this._data);if(s&&e.setGroup(t,s),null!=e.parserMap[i])return this._customParse=!0,void(e.parserMap[i]instanceof laya.utils.Handler?e.parserMap[i].runWith(this):e.parserMap[i].call(null,this));if("image"===i||"htmlimage"===i||"nativeimage"===i)return this._loadImage(t);if("sound"===i)return this._loadSound(t);if("ttf"===i)return this._loadTTF(t);var o;switch(i){case"atlas":o="json";break;case"font":o="xml";break;case"pkm":o="arraybuffer";break;default:o=i}e.preLoadedMap[t]?this.onLoaded(e.preLoadedMap[t]):(this._http||(this._http=new rt,this._http.on("progress",this,this.onProgress),this._http.on("error",this,this.onError),this._http.on("complete",this,this.onLoaded)),this._http.send(t,null,"get",o))},n.getTypeFromUrl=function(t){var i=K.getFileExtension(t);return i?e.typeMap[i]:(console.warn("Not recognize the resources suffix",t),"text")},n._loadTTF=function(t){t=L.formatURL(t);var e=new A;e.complete=l.create(this,this.onLoaded),e.load(t)},n._loadImage=function(t){function i(){n.onload=null,n.onerror=null,delete e.imgCache[t]}t=L.formatURL(t);var n,s=this,r=function(){i(),s.onLoaded(n)},o=function(){i(),s.event("error","Load image failed")};"nativeimage"===this._type?((n=new N.window.Image).crossOrigin="",n.onload=r,n.onerror=o,n.src=t,e.imgCache[t]=n):new Tt.create(t,{onload:r,onerror:o,onCreate:function(i){n=i,e.imgCache[t]=i}})},n._loadSound=function(t){function e(){i.offAll()}var i=new E._soundClass,n=this;i.on("complete",this,function(){e(),n.onLoaded(i)}),i.on("error",this,function(){e(),i.dispose(),n.event("error","Load sound failed")}),i.load(t)},n.onProgress=function(t){"atlas"===this._type?this.event("progress",.3*t):this.event("progress",t)},n.onError=function(t){this.event("error",t)},n.onLoaded=function(t){var i=this._type;if("image"===i){var n=new lt(t);n.url=this._url,this.complete(n)}else if("sound"===i||"htmlimage"===i||"nativeimage"===i)this.complete(t);else if("atlas"===i){if(!t.src&&!t._setContext){if(!this._data){if(this._data=t,t.meta&&t.meta.image)for(var s=t.meta.image.split(","),r=this._url.indexOf("/")>=0?"/":"\\",o=this._url.lastIndexOf(r),a=o>=0?this._url.substr(0,o+1):"",h=0,l=s.length;h<l;h++)s[h]=a+s[h];else s=[this._url.replace(".json",".png")];s.reverse(),t.toLoads=s,t.pics=[]}return this.event("progress",.3+1/s.length*.6),this._loadImage(s.pop())}if(this._data.pics.push(t),this._data.toLoads.length>0)return this.event("progress",.3+1/this._data.toLoads.length*.6),this._loadImage(this._data.toLoads.pop());var c=this._data.frames,_=this._url.split("?")[0],d=this._data.meta&&this._data.meta.prefix?this._data.meta.prefix:_.substring(0,_.lastIndexOf("."))+"/",f=this._data.pics,p=L.formatURL(this._url),g=e.atlasMap[p]||(e.atlasMap[p]=[]);g.dir=d;var m=1;if(this._data.meta&&this._data.meta.scale&&1!=this._data.meta.scale){m=parseFloat(this._data.meta.scale);for(var v in c){var y=c[v],w=f[y.frame.idx?y.frame.idx:0],x=L.formatURL(d+v);w.scaleRate=m,e.cacheRes(x,lt.create(w,y.frame.x,y.frame.y,y.frame.w,y.frame.h,y.spriteSourceSize.x,y.spriteSourceSize.y,y.sourceSize.w,y.sourceSize.h)),e.loadedMap[x].url=x,g.push(x)}}else for(v in c)w=f[(y=c[v]).frame.idx?y.frame.idx:0],x=L.formatURL(d+v),e.cacheRes(x,lt.create(w,y.frame.x,y.frame.y,y.frame.w,y.frame.h,y.spriteSourceSize.x,y.spriteSourceSize.y,y.sourceSize.w,y.sourceSize.h)),e.loadedMap[x].url=x,g.push(x);delete this._data.pics,this.complete(this._data)}else if("font"==i){if(!t.src)return this._data=t,this.event("progress",.5),this._loadImage(this._url.replace(".fnt",".png"));var T=new u;T.parseFont(this._data,t);var b=this._url.split(".fnt")[0].split("/"),C=b[b.length-1];gt.registerBitmapFont(C,T),this._data=T,this.complete(this._data)}else if("pkm"==i){var M=Tt.create(t,this._url),S=new lt(M);S.url=this._url,this.complete(S)}else this.complete(t)},n.complete=function(t){this._data=t,this._customParse?this.event("loaded",t instanceof Array?[t]:t):(e._loaders.push(this),e._isWorking||e.checkNext())},n.endLoad=function(t){t&&(this._data=t),this._cache&&e.cacheRes(this._url,this._data),this.event("progress",1),this.event("complete",this.data instanceof Array?[this.data]:this.data)},r(0,n,"url",function(){return this._url}),r(0,n,"data",function(){return this._data}),r(0,n,"cache",function(){return this._cache}),r(0,n,"type",function(){return this._type}),e.checkNext=function(){e._isWorking=!0;for(var t=N.now();e._startIndex<e._loaders.length;)if(N.now(),e._loaders[e._startIndex].endLoad(),e._startIndex++,N.now()-t>e.maxTimeOut)return console.warn("loader callback cost a long time:"+(N.now()-t)+" url="+e._loaders[e._startIndex-1].url),void i.timer.frameOnce(1,null,e.checkNext);e._loaders.length=0,e._startIndex=0,e._isWorking=!1},e.clearRes=function(t,i){void 0===i&&(i=!1),t=L.formatURL(t);var n=e.getAtlas(t);if(n){for(var s=0,r=n.length;s<r;s++){var o=n[s],a=e.getRes(o);delete e.loadedMap[o],a&&a.destroy(i)}n.length=0,delete e.atlasMap[t],delete e.loadedMap[t]}else{var h=e.loadedMap[t];h&&(delete e.loadedMap[t],h instanceof laya.resource.Texture&&h.bitmap&&h.destroy(i))}},e.clearTextureRes=function(t){t=L.formatURL(t);var e=laya.net.Loader.getAtlas(t),i=e&&e.length>0?laya.net.Loader.getRes(e[0]):laya.net.Loader.getRes(t);i&&i.bitmap&&(R.isConchApp?i.bitmap.source.releaseTexture&&i.bitmap.source.releaseTexture():null==i.bitmap._atlaser&&i.bitmap.releaseResource(!0))},e.getRes=function(t){return e.loadedMap[L.formatURL(t)]},e.getAtlas=function(t){return e.atlasMap[L.formatURL(t)]},e.cacheRes=function(t,i){t=L.formatURL(t),null!=e.loadedMap[t]?console.warn("Resources already exist,is repeated loading:",t):e.loadedMap[t]=i},e.setGroup=function(t,i){e.groupMap[i]||(e.groupMap[i]=[]),e.groupMap[i].push(t)},e.clearResByGroup=function(t){if(e.groupMap[t]){var i=e.groupMap[t],n=0,s=i.length;for(n=0;n<s;n++)e.clearRes(i[n]);i.length=0}},e.TEXT="text",e.JSON="json",e.XML="xml",e.BUFFER="arraybuffer",e.IMAGE="image",e.SOUND="sound",e.ATLAS="atlas",e.FONT="font",e.TTF="ttf",e.PKM="pkm",e.typeMap={png:"image",jpg:"image",jpeg:"image",txt:"text",json:"json",xml:"xml",als:"atlas",atlas:"atlas",mp3:"sound",ogg:"sound",wav:"sound",part:"json",fnt:"font",pkm:"pkm",ttf:"ttf"},e.parserMap={},e.groupMap={},e.maxTimeOut=100,e.loadedMap={},e.preLoadedMap={},e.atlasMap={},e._loaders=[],e._isWorking=!1,e._startIndex=0,e.imgCache={},e}(),at=function(t){function e(){this.retryNum=1,this.retryDelay=0,this.maxLoader=5,this._loaders=[],this._loaderCount=0,this._resInfos=[],this._infoPool=[],this._maxPriority=5,this._failRes={},e.__super.call(this);for(var t=0;t<this._maxPriority;t++)this._resInfos[t]=[]}var r;s(e,"laya.net.LoaderManager",h);var o=e.prototype;return o.create=function(t,e,i,n,s,r,o,a){if(void 0===r&&(r=1),void 0===o&&(o=!0),t instanceof Array){var h=t,u=h.length,c=0;if(i)var _=l.create(i.caller,i.method,i.args,!1);for(var d=0;d<u;d++){var f=h[d];"string"==typeof f&&(f=h[d]={url:f}),f.progress=0}for(d=0;d<u;d++){f=h[d];var p=i?l.create(null,function(t,e){t.progress=e;for(var i=0,n=0;n<u;n++)i+=h[n].progress;var s=i/u;_.runWith(s)},[f],!1):null,g=i||e?l.create(null,function(t,i){c++,t.progress=1,c===u&&e&&e.run()},[f]):null;this._create(f.url,g,p,f.clas||n,f.params||s,f.priority||r,o,f.group||a)}return!0}return this._create(t,e,i,n,s,r,o,a)},o._create=function(t,n,s,r,o,a,h,u){void 0===a&&(a=1),void 0===h&&(h=!0);var c=L.formatURL(t),_=this.getRes(c);if(_)!_.hasOwnProperty("loaded")||_.loaded?(s&&s.runWith(1),n&&n.run()):n&&i.loader._createListener(t,n.caller,n.method,n.args,!0,!1);else{var d=K.getFileExtension(t),f=e.createMap[d];if(!f)throw new Error("LoaderManager:unknown file("+t+") extension with: "+d+".");r||(r=f[0]);var p=f[1];"atlas"==d?this.load(t,n,s,p,a,h):(r===lt&&(p="htmlimage"),(_=r?new r:null).hasOwnProperty("_loaded")&&(_._loaded=!1),_._setUrl(t),u&&_._setGroup(u),this._createLoad(_,t,l.create(null,function(e){_&&!_.destroyed&&e&&_.onAsynLoaded.call(_,t,e,o),n&&n.run(),i.loader.event(t)}),s,p,a,!1,u,!0),h&&this.cacheRes(c,_))}return _},o.load=function(t,n,s,o,a,h,l,u){var c=this;if(void 0===a&&(a=1),void 0===h&&(h=!0),void 0===u&&(u=!1),t instanceof Array)return this._loadAssets(t,n,s,o,a,h,l);var _=ot.getRes(t);if(null!=_)i.timer.frameOnce(1,null,function(){s&&s.runWith(1),n&&n.runWith(_),c._loaderCount||c.event("complete")});else{var d=e._resMap[t];d?(n&&d._createListener("complete",n.caller,n.method,n.args,!1,!1),s&&d._createListener("progress",s.caller,s.method,s.args,!1,!1)):((d=this._infoPool.length?this._infoPool.pop():new r).url=t,d.type=o,d.cache=h,d.group=l,d.ignoreCache=u,n&&d.on("complete",n.caller,n.method,n.args),s&&d.on("progress",s.caller,s.method,s.args),e._resMap[t]=d,a=a<this._maxPriority?a:this._maxPriority-1,this._resInfos[a].push(d),this._next())}return this},o._createLoad=function(t,n,s,o,a,h,l,u,c){var _=this;if(void 0===h&&(h=1),void 0===l&&(l=!0),void 0===c&&(c=!1),n instanceof Array)return this._loadAssets(n,s,o,a,h,l,u);var d=ot.getRes(n);if(null!=d)i.timer.frameOnce(1,null,function(){o&&o.runWith(1),s&&s.runWith(d),_._loaderCount||_.event("complete")});else{var f=e._resMap[n];f?(s&&f._createListener("complete",s.caller,s.method,s.args,!1,!1),o&&f._createListener("progress",o.caller,o.method,o.args,!1,!1)):((f=this._infoPool.length?this._infoPool.pop():new r).url=n,f.clas=t,f.type=a,f.cache=l,f.group=u,f.ignoreCache=c,s&&f.on("complete",s.caller,s.method,s.args),o&&f.on("progress",o.caller,o.method,o.args),e._resMap[n]=f,h=h<this._maxPriority?h:this._maxPriority-1,this._resInfos[h].push(f),this._next())}return this},o._next=function(){if(!(this._loaderCount>=this.maxLoader)){for(var t=0;t<this._maxPriority;t++)for(var e=this._resInfos[t];e.length>0;){var i=e.shift();if(i)return this._doLoad(i)}this._loaderCount||this.event("complete")}},o._doLoad=function(t){function e(e){i.offAll(),i._data=null,i._customParse=!1,n._loaders.push(i),n._endLoad(t,e instanceof Array?[e]:e),n._loaderCount--,n._next()}this._loaderCount++;var i=this._loaders.length?this._loaders.pop():new ot;i.on("complete",null,e),i.on("progress",null,function(e){t.event("progress",e)}),i.on("error",null,function(t){e(null)});var n=this;i._class=t.clas,i.load(t.url,t.type,t.cache,t.group,t.ignoreCache)},o._endLoad=function(t,n){var s=t.url;if(null==n){var r=this._failRes[s]||0;if(r<this.retryNum)return console.warn("[warn]Retry to load:",s),this._failRes[s]=r+1,void i.timer.once(this.retryDelay,this,this._addReTry,[t],!1);console.warn("[error]Failed to load:",s),this.event("error",s)}this._failRes[s]&&(this._failRes[s]=0),delete e._resMap[s],t.event("complete",n),t.offAll(),this._infoPool.push(t)},o._addReTry=function(t){this._resInfos[this._maxPriority-1].push(t),this._next()},o.clearRes=function(t,e){void 0===e&&(e=!1),ot.clearRes(t,e)},o.getRes=function(t){return ot.getRes(t)},o.cacheRes=function(t,e){ot.cacheRes(t,e)},o.clearTextureRes=function(t){ot.clearTextureRes(t)},o.setGroup=function(t,e){ot.setGroup(t,e)},o.clearResByGroup=function(t){ot.clearResByGroup(t)},o.clearUnLoaded=function(){for(var t=0;t<this._maxPriority;t++){for(var i=this._resInfos[t],n=i.length-1;n>-1;n--){var s=i[n];s&&(s.offAll(),this._infoPool.push(s))}i.length=0}this._loaderCount=0,e._resMap={}},o.cancelLoadByUrls=function(t){if(t)for(var e=0,i=t.length;e<i;e++)this.cancelLoadByUrl(t[e])},o.cancelLoadByUrl=function(t){for(var i=0;i<this._maxPriority;i++)for(var n=this._resInfos[i],s=n.length-1;s>-1;s--){var r=n[s];r&&r.url===t&&(n[s]=null,r.offAll(),this._infoPool.push(r))}e._resMap[t]&&delete e._resMap[t]},o._loadAssets=function(t,e,i,n,s,r,o){void 0===s&&(s=1),void 0===r&&(r=!0);for(var a=t.length,h=0,u=0,c=[],_=!0,d=0;d<a;d++){var f=t[d];"string"==typeof f&&(f={url:f,type:n,size:1,priority:s}),f.size||(f.size=1),f.progress=0,u+=f.size,c.push(f);var p=i?l.create(null,function(t,e){if(null!=i){t.progress=e;for(var n=0,s=0;s<c.length;s++){var r=c[s];n+=r.size*r.progress}var o=n/u;i.runWith(o)}},[f],!1):null,g=e||i?l.create(null,function(t,i){h++,t.progress=1,i||(_=!1),h===a&&e&&e.runWith(_)},[f]):null;this.load(f.url,g,p,f.type,f.priority||1,r,f.group||o)}return this},e.cacheRes=function(t,e){ot.cacheRes(t,e)},e._resMap={},n(e,["createMap",function(){return this.createMap={atlas:[null,"atlas"]}}]),e.__init$=function(){r=function(t){function e(){this.url=null,this.type=null,this.cache=!1,this.group=null,this.ignoreCache=!1,this.clas=null,e.__super.call(this)}return s(e,"",h),e}()},e}(),ht=(function(t){function e(t){e.__super.call(this),t||(t=[.3,.59,.11,0,0,.3,.59,.11,0,0,.3,.59,.11,0,0,0,0,0,1,0]),this._mat=new Float32Array(16),this._alpha=new Float32Array(4);for(var i=0,n=0,s=0;s<20;s++)s%5!=4?this._mat[i++]=t[s]:this._alpha[n++]=t[s];this._action=o.createFilterAction(32),this._action.data=this}s(e,"laya.filters.ColorFilter",w);var n=e.prototype;i.imps(n,{"laya.filters.IFilter":!0}),n.callNative=function(t){t._$P.cf=this;t.conchModel&&t.conchModel.setFilterMatrix&&t.conchModel.setFilterMatrix(this._mat,this._alpha)},r(0,n,"type",function(){return 32}),r(0,n,"action",function(){return this._action})}(),function(t){function e(t,i,n){this._endian=null,this._stamp=NaN,this._socket=null,this._connected=!1,this._addInputPosition=0,this._input=null,this._output=null,this.timeout=0,this.objectEncoding=0,this.disableInput=!1,this._byteClass=null,this.protocols=[],void 0===i&&(i=0),e.__super.call(this),this._byteClass=n||B,this.endian="bigEndian",this.timeout=2e4,this._addInputPosition=0,t&&i>0&&i<65535&&this.connect(t,i)}s(e,"laya.net.Socket",h);var i=e.prototype;i.connect=function(t,e){var i="ws://"+t+":"+e;i="https:"==N.window.location.protocol?"wss://"+t+":"+e:"ws://"+t+":"+e,this.connectByUrl(i)},i.connectByUrl=function(t){var e=this;null!=this._socket&&this.close(),this._socket&&this.cleanSocket(),this.protocols&&0!=this.protocols.length?this._socket=new N.window.WebSocket(t,this.protocols):this._socket=new N.window.WebSocket(t),this._socket.binaryType="arraybuffer",this._output=new this._byteClass,this._output.endian=this.endian,this._input=new this._byteClass,this._input.endian=this.endian,this._addInputPosition=0,this._socket.onopen=function(t){e._onOpen(t)},this._socket.onmessage=function(t){e._onMessage(t)},this._socket.onclose=function(t){e._onClose(t)},this._socket.onerror=function(t){e._onError(t)}},i.cleanSocket=function(){try{this._socket.close()}catch(t){}this._connected=!1,this._socket.onopen=null,this._socket.onmessage=null,this._socket.onclose=null,this._socket.onerror=null,this._socket=null},i.close=function(){if(null!=this._socket)try{this._socket.close()}catch(t){}},i._onOpen=function(t){this._connected=!0,this.event("open",t)},i._onMessage=function(t){if(t&&t.data){var e=t.data;if(this.disableInput&&e)this.event("message",e);else{this._input.length>0&&this._input.bytesAvailable<1&&(this._input.clear(),this._addInputPosition=0);var i=this._input.pos;!this._addInputPosition&&(this._addInputPosition=0),this._input.pos=this._addInputPosition,e&&("string"==typeof e?this._input.writeUTFBytes(e):this._input.writeArrayBuffer(e),this._addInputPosition=this._input.pos,this._input.pos=i),this.event("message",e)}}},i._onClose=function(t){this._connected=!1,this.event("close",t)},i._onError=function(t){this.event("error",t)},i.send=function(t){this._socket.send(t)},i.flush=function(){if(this._output&&this._output.length>0){var t;try{this._socket&&this._socket.send(this._output.__getBuffer().slice(0,this._output.length))}catch(e){t=e}this._output.endian=this.endian,this._output.clear(),t&&this.event("error",t)}},r(0,i,"input",function(){return this._input}),r(0,i,"output",function(){return this._output}),r(0,i,"connected",function(){return this._connected}),r(0,i,"endian",function(){return this._endian},function(t){this._endian=t,null!=this._input&&(this._input.endian=t),null!=this._output&&(this._output.endian=t)}),e.LITTLE_ENDIAN="littleEndian",e.BIG_ENDIAN="bigEndian"}(),function(t){function e(){this.worker=null,e.__super.call(this);var t=this;this.worker=new N.window.Worker(e.workerPath),this.worker.onmessage=function(e){t.workerMessage(e.data)}}s(e,"laya.net.WorkerLoader",h);var i=e.prototype;i.workerMessage=function(t){if(t)switch(t.type){case"Image":this.imageLoaded(t);break;case"Msg":this.event("image_msg",t.msg)}},i.imageLoaded=function(t){if(t&&t.buffer&&t.buffer.length<10)return e._enable=!1,this._myTrace("buffer lost when postmessage ,disable workerloader"),this.event(t.url,null),void this.event("image_err",t.url+"\n"+t.msg);if(!t.dataType)return this.event(t.url,null),void this.event("image_err",t.url+"\n"+t.msg);var i,n,s;switch(t.dataType){case"buffer":(s=(n=(i=new yt("2D")).source.getContext("2d")).createImageData(t.width,t.height)).data.set(t.buffer),i.size(s.width,s.height),n.putImageData(s,0,0),i.memorySize=0;break;case"imagedata":n=(i=new yt("2D")).source.getContext("2d"),s=t.imagedata,i.size(s.width,s.height),n.putImageData(s,0,0),s=t.imagedata,i.memorySize=0;break;case"imageBitmap":s=t.imageBitmap,R.isWebGL?i=s:(n=(i=new yt("2D")).source.getContext("2d"),i.size(s.width,s.height),n.drawImage(s,0,0),i.src=t.url)}R.isWebGL&&(i=new laya.webgl.resource.WebGLImage(i,t.url)),this.event(t.url,i)},i._myTrace=function(t){var e=arguments,i=[],n=0,s=e.length;for(n=0;n<s;n++)i.push(e[n]);this.event("image_msg",i.join(" "))},i.loadImage=function(t){var e;(e={}).type="load",e.url=t,this.worker.postMessage(e)},i._loadImage=function(t){var i=this;if(!e._enable||t.toLowerCase().indexOf(".png")<0)e._preLoadFun.call(i,t);else{t=L.formatURL(t);var n=function(s){laya.net.WorkerLoader.I.off(t,i,n),s?i.onLoaded(s):e._preLoadFun.call(i,t)};laya.net.WorkerLoader.I.on(t,i,n),laya.net.WorkerLoader.I.loadImage(t)}},r(1,e,"enable",function(){return e._enable},function(t){e.disableJSDecode&&!N.window.createImageBitmap||(e._enable=t)&&null==e._preLoadFun&&(e._enable=e.__init__())}),e.__init__=function(){return null==e._preLoadFun&&(!!N.window.Worker&&(e._preLoadFun=ot.prototype._loadImage,ot.prototype._loadImage=e.prototype._loadImage,e.I||(e.I=new e),!0))},e.workerSupported=function(){return!!N.window.Worker},e.IMAGE_LOADED="image_loaded",e.IMAGE_ERR="image_err",e.IMAGE_MSG="image_msg",e.I=null,e._preLoadFun=null,e._enable=!1,e.workerPath="libs/worker.js",e.disableJSDecode=!0}(),function(t){function e(){e.__super.call(this),this._$1__id=++e._uniqueIDCounter,this.__loaded=!0,this._destroyed=!1,this._referenceCount=0,e._idResourcesMap[this.id]=this,this._released=!0,this.lock=!1,this._memorySize=0,this._lastUseFrameCount=-1,O.currentResourceManager&&O.currentResourceManager.addResource(this)}s(e,"laya.resource.Resource",h);var n=e.prototype;return i.imps(n,{"laya.resource.ICreateResource":!0,"laya.resource.IDispose":!0}),n._setUrl=function(t){if(this._url!==t){var i;this._url&&((i=e._urlResourcesMap[this._url]).splice(i.indexOf(this),1),0===i.length&&delete e._urlResourcesMap[this._url]),t&&((i=e._urlResourcesMap[t])||(e._urlResourcesMap[t]=i=[]),i.push(this)),this._url=t}},n._getGroup=function(){return this._group},n._setGroup=function(t){if(this._group!==t){var i;this._group&&((i=e._groupResourcesMap[this._group]).splice(i.indexOf(this),1),0===i.length&&delete e._groupResourcesMap[this._group]),t&&((i=e._groupResourcesMap[t])||(e._groupResourcesMap[t]=i=[]),i.push(this)),this._group=t}},n._addReference=function(){this._referenceCount++},n._removeReference=function(){this._referenceCount--},n._clearReference=function(){this._referenceCount=0},n._endLoaded=function(){this.__loaded=!0,this.event("loaded",this)},n.recreateResource=function(){this.completeCreate()},n.disposeResource=function(){},n.activeResource=function(t){void 0===t&&(t=!1),this._lastUseFrameCount=$.loopCount,!this._destroyed&&this.__loaded&&(this._released||t)&&this.recreateResource()},n.releaseResource=function(t){return void 0===t&&(t=!1),!(!t&&this.lock)&&(!(this._released&&!t)&&(this.disposeResource(),this._released=!0,this._lastUseFrameCount=-1,this.event("released",this),!0))},n.onAsynLoaded=function(t,e,i){throw new Error("Resource: must override this function!")},n.destroy=function(){if(!this._destroyed){null!==this._resourceManager&&this._resourceManager.removeResource(this),this._destroyed=!0,this.lock=!1,this.releaseResource(),delete e._idResourcesMap[this.id];var t;this._url&&((t=e._urlResourcesMap[this._url])&&(t.splice(t.indexOf(this),1),0===t.length&&delete e._urlResourcesMap[this.url]),ot.clearRes(this._url),this.__loaded||o.cancelLoadByUrl(this._url)),this._group&&((t=e._groupResourcesMap[this._group]).splice(t.indexOf(this),1),0===t.length&&delete e._groupResourcesMap[this.url])}},n.completeCreate=function(){this._released=!1,this.event("recovered",this)},n.dispose=function(){this.destroy()},r(0,n,"memorySize",function(){return this._memorySize},function(t){var e=t-this._memorySize;this._memorySize=t,this.resourceManager&&this.resourceManager.addSize(e)}),r(0,n,"_loaded",null,function(t){this.__loaded=t}),r(0,n,"loaded",function(){return this.__loaded}),r(0,n,"id",function(){return this._$1__id}),r(0,n,"destroyed",function(){return this._destroyed}),r(0,n,"group",function(){return this._getGroup()},function(t){this._setGroup(t)}),r(0,n,"resourceManager",function(){return this._resourceManager}),r(0,n,"url",function(){return this._url}),r(0,n,"released",function(){return this._released}),r(0,n,"referenceCount",function(){return this._referenceCount}),e.getResourceByID=function(t){return e._idResourcesMap[t]},e.getResourceByURL=function(t,i){return void 0===i&&(i=0),e._urlResourcesMap[t][i]},e.getResourceCountByURL=function(t){return e._urlResourcesMap[t].length},e.destroyUnusedResources=function(t){var i;if(t){var n=e._groupResourcesMap[t];if(n)for(var s=n.slice(),r=0,o=s.length;r<o;r++)(i=s[r]).lock||0!==i._referenceCount||i.destroy()}else for(var a in e._idResourcesMap)(i=e._idResourcesMap[a]).lock||0!==i._referenceCount||i.destroy()},e._uniqueIDCounter=0,e._idResourcesMap={},e._urlResourcesMap={},e._groupResourcesMap={},e}()),lt=function(e){function n(t,e){this.offsetX=0,this.offsetY=0,this.sourceWidth=0,this.sourceHeight=0,this._w=0,this._h=0,this._uvID=0,this._atlasID=-1,this.scaleRate=1,n.__super.call(this),t&&t._addReference&&t._addReference(),this.setTo(t,e)}s(n,"laya.resource.Texture",h);var a=n.prototype;return a._setUrl=function(t){this.url=t},a.setTo=function(e,i){if(e instanceof t.HTMLElement){var s=yt.create("2D",e);this.bitmap=s}else this.bitmap=e;if(this.uv=i||n.DEF_UV,e){this._w=e.width,this._h=e.height,this.sourceWidth=this.sourceWidth||this._w,this.sourceHeight=this.sourceHeight||this._h,this._loaded=this._w>0;var r=this;if(this._loaded)o.addToAtlas&&o.addToAtlas(r);else{var a=e;a instanceof laya.resource.HTMLImage&&a.image&&a.image.addEventListener("load",function(t){o.addToAtlas&&o.addToAtlas(r)},!1)}}},a.active=function(){this.bitmap&&this.bitmap.activeResource()},a.destroy=function(t){if(void 0===t&&(t=!1),this.bitmap&&this.bitmap.referenceCount>0){var e=this.bitmap;t?(R.isConchApp&&e.source&&e.source.conchDestroy&&this.bitmap.source.conchDestroy(),this.bitmap=null,e.dispose(),e._clearReference()):(e._removeReference(),0==e.referenceCount&&(R.isConchApp&&e.source&&e.source.conchDestroy&&this.bitmap.source.conchDestroy(),this.bitmap=null,e.dispose())),this.url&&this===i.loader.getRes(this.url)&&i.loader.clearRes(this.url,t),this._loaded=!1}},a.load=function(t){var e=this;this._loaded=!1,t=L.customFormat(t);var i=this.bitmap||(this.bitmap=Tt.create(t));i&&i._addReference();var n=this;i.onload=function(){i.onload=null,n._loaded=!0,e.sourceWidth=e._w=i.width,e.sourceHeight=e._h=i.height,n.event("loaded",this),o.addToAtlas&&o.addToAtlas(n)}},a.addTextureToAtlas=function(t){o.addTextureToAtlas(this)},a.getPixels=function(t,e,i,n){if(R.isConchApp){var s=this.bitmap;if(s.source&&s.source.getImageData){var r=s.source.getImageData(t,e,i,n),a=new Uint8Array(r);return Array.from(a)}return null}if(R.isWebGL)return o.getTexturePixels(this,t,e,i,n);N.canvas.size(i,n),N.canvas.clear(),N.context.drawTexture(this,-t,-e,this.width,this.height,0,0);return N.context.getImageData(0,0,i,n).data},a.onAsynLoaded=function(t,e){e&&e._addReference&&e._addReference(),this.setTo(e,this.uv)},r(0,a,"source",function(){return this.bitmap?(this.bitmap.activeResource(),this.bitmap.source):null}),r(0,a,"loaded",function(){return this._loaded}),r(0,a,"released",function(){return!this.bitmap||this.bitmap.released}),r(0,a,"width",function(){return this._w?this._w:this.uv&&this.uv!==n.DEF_UV?(this.uv[2]-this.uv[0])*this.bitmap.width:this.bitmap.width},function(t){this._w=t,this.sourceWidth||(this.sourceWidth=t)}),r(0,a,"repeat",function(){return!R.isWebGL||!this.bitmap||this.bitmap.repeat},function(t){t&&R.isWebGL&&this.bitmap&&(this.bitmap.repeat=t,t&&(this.bitmap.enableMerageInAtlas=!1))}),r(0,a,"height",function(){return this._h?this._h:this.uv&&this.uv!==n.DEF_UV?(this.uv[5]-this.uv[1])*this.bitmap.height:this.bitmap.height},function(t){this._h=t,this.sourceHeight||(this.sourceHeight=t)}),r(0,a,"isLinearSampling",function(){return!R.isWebGL||9728!=this.bitmap.minFifter},function(t){!t&&R.isWebGL&&(t||-1!=this.bitmap.minFifter||-1!=this.bitmap.magFifter||(this.bitmap.minFifter=9728,this.bitmap.magFifter=9728,this.bitmap.enableMerageInAtlas=!1))}),n.moveUV=function(t,e,i){for(var n=0;n<8;n+=2)i[n]+=t,i[n+1]+=e;return i},n.create=function(t,e,i,s,r,a,h,l,u){void 0===a&&(a=0),void 0===h&&(h=0),void 0===l&&(l=0),void 0===u&&(u=0);var c=t instanceof laya.resource.Texture,_=c?t.uv:n.DEF_UV,d=c?t.bitmap:t,f=o.isAtlas(d);if(f){var p=d._atlaser,g=t._atlasID;if(-1==g)throw new Error("create texture error");d=p._inAtlasTextureBitmapValue[g],_=p._inAtlasTextureOriUVValue[g]}var m=new n(d,null);d.width&&e+s>d.width&&(s=d.width-e),d.height&&i+r>d.height&&(r=d.height-i),m.width=s,m.height=r,m.offsetX=a,m.offsetY=h,m.sourceWidth=l||s,m.sourceHeight=u||r;var v=1/d.width,y=1/d.height;e*=v,i*=y,s*=v,r*=y;var w=m.uv[0],x=m.uv[1],T=m.uv[4],b=m.uv[5],C=T-w,M=b-x,S=n.moveUV(_[0],_[1],[e,i,e+s,i,e+s,i+r,e,i+r]);m.uv=[w+S[0]*C,x+S[1]*M,T-(1-S[2])*C,x+S[3]*M,T-(1-S[4])*C,b-(1-S[5])*M,w+S[6]*C,b-(1-S[7])*M],f&&m.addTextureToAtlas();var P=d.scaleRate;return P&&1!=P?(m.sourceWidth/=P,m.sourceHeight/=P,m.width/=P,m.height/=P,m.scaleRate=P,m.offsetX/=P,m.offsetY/=P):m.scaleRate=1,m},n.createFromTexture=function(t,e,i,s,r){var o=t.scaleRate;1!=o&&(e*=o,i*=o,s*=o,r*=o);var a=P.TEMP.setTo(e-t.offsetX,i-t.offsetY,s,r),h=a.intersection(n._rect1.setTo(0,0,t.width,t.height),n._rect2);if(!h)return null;var l=n.create(t,h.x,h.y,h.width,h.height,h.x-a.x,h.y-a.y,s,r);return l.bitmap._removeReference(),l},n.DEF_UV=[0,0,1,0,1,1,0,1],n.INV_UV=[0,1,1,1,1,0,0,0],n._rect1=new P,n._rect2=new P,n}(),ut=function(t){function e(){this._labelDic=null,this._tweenDic={},this._tweenDataList=[],this._endTweenDataList=null,this._currTime=0,this._lastTime=0,this._startTime=0,this._index=0,this._gidIndex=0,this._firstTweenDic={},this._startTimeSort=!1,this._endTimeSort=!1,this._loopKey=!1,this.scale=1,this._frameRate=60,this._frameIndex=0,this._total=0,e.__super.call(this)}var n;s(e,"laya.utils.TimeLine",h);var o=e.prototype;return o.to=function(t,e,i,n,s){return void 0===s&&(s=0),this._create(t,e,i,n,s,!0)},o.from=function(t,e,i,n,s){return void 0===s&&(s=0),this._create(t,e,i,n,s,!1)},o._create=function(t,e,i,s,r,o){var a=X.getItemByClass("tweenData",n);return a.isTo=o,a.type=0,a.target=t,a.duration=i,a.data=e,a.startTime=this._startTime+r,a.endTime=a.startTime+a.duration,a.ease=s,this._startTime=Math.max(a.endTime,this._startTime),this._tweenDataList.push(a),this._startTimeSort=!0,this._endTimeSort=!0,this},o.addLabel=function(t,e){var i=X.getItemByClass("tweenData",n);return i.type=1,i.data=t,i.endTime=i.startTime=this._startTime+e,this._labelDic||(this._labelDic={}),this._labelDic[t]=i,this._tweenDataList.push(i),this},o.removeLabel=function(t){if(this._labelDic&&this._labelDic[t]){var e=this._labelDic[t];if(e){var i=this._tweenDataList.indexOf(e);i>-1&&this._tweenDataList.splice(i,1)}delete this._labelDic[t]}},o.gotoTime=function(t){if(null!=this._tweenDataList&&0!=this._tweenDataList.length){var e,i;for(var n in this._firstTweenDic)if(i=this._firstTweenDic[n])for(var s in i)i.diyTarget.hasOwnProperty(s)&&(i.diyTarget[s]=i[s]);for(n in this._tweenDic)(e=this._tweenDic[n]).clear(),delete this._tweenDic[n];this._index=0,this._gidIndex=0,this._currTime=t,this._lastTime=N.now();var r;null==this._endTweenDataList||this._endTimeSort?(this._endTimeSort=!1,this._endTweenDataList=r=this._tweenDataList.concat(),r.sort(function(t,e){return t.endTime>e.endTime?1:t.endTime<e.endTime?-1:0})):r=this._endTweenDataList;for(var o,a=0,h=r.length;a<h;a++)if(0==(o=r[a]).type){if(!(t>=o.endTime))break;this._index=Math.max(this._index,a+1);var u=o.data;if(o.isTo)for(var c in u)o.target[c]=u[c]}for(a=0,h=this._tweenDataList.length;a<h;a++)0==(o=this._tweenDataList[a]).type&&t>=o.startTime&&t<o.endTime&&(this._index=Math.max(this._index,a+1),this._gidIndex++,(e=X.getItemByClass("tween",j))._create(o.target,o.data,o.duration,o.ease,l.create(this,this._animComplete,[this._gidIndex]),0,!1,o.isTo,!0,!1),e.setStartTime(this._currTime-(t-o.startTime)),e._updateEase(this._currTime),e.gid=this._gidIndex,this._tweenDic[this._gidIndex]=e)}},o.gotoLabel=function(t){if(null!=this._labelDic){var e=this._labelDic[t];e&&this.gotoTime(e.startTime)}},o.pause=function(){i.timer.clear(this,this._update)},o.resume=function(){this.play(this._currTime,this._loopKey)},o.play=function(t,e){if(void 0===t&&(t=0),void 0===e&&(e=!1),this._tweenDataList){if(this._startTimeSort){this._startTimeSort=!1,this._tweenDataList.sort(function(t,e){return t.startTime>e.startTime?1:t.startTime<e.startTime?-1:0});for(var n=0,s=this._tweenDataList.length;n<s;n++){var r=this._tweenDataList[n];if(null!=r&&0==r.type){var o=r.target,a=o.$_GID||(o.$_GID=K.getGID()),h=null;null==this._firstTweenDic[a]?((h={}).diyTarget=o,this._firstTweenDic[a]=h):h=this._firstTweenDic[a];for(var l in r.data)null==h[l]&&(h[l]=o[l])}}}"string"==typeof t?this.gotoLabel(t):this.gotoTime(t),this._loopKey=e,this._lastTime=N.now(),i.timer.frameLoop(1,this,this._update)}},o._update=function(){if(this._currTime>=this._startTime){if(!this._loopKey){for(var t in this._tweenDic)(s=this._tweenDic[t]).complete();return this._complete(),void this.pause()}if(this._complete(),!this._tweenDataList)return;this.gotoTime(0)}var e=N.now(),i=e-this._lastTime,n=this._currTime+=i*this.scale;this._lastTime=e;for(t in this._tweenDic)(s=this._tweenDic[t])._updateEase(n);var s;if(0!=this._tweenDataList.length&&this._index<this._tweenDataList.length){var r=this._tweenDataList[this._index];n>=r.startTime&&(this._index++,0==r.type?(this._gidIndex++,(s=X.getItemByClass("tween",j))._create(r.target,r.data,r.duration,r.ease,l.create(this,this._animComplete,[this._gidIndex]),0,!1,r.isTo,!0,!1),s.setStartTime(n),s.gid=this._gidIndex,this._tweenDic[this._gidIndex]=s,s._updateEase(n)):this.event("label",r.data))}},o._animComplete=function(t){this._tweenDic[t]&&delete this._tweenDic[t]},o._complete=function(){this.event("complete")},o.reset=function(){var t;if(this._labelDic)for(t in this._labelDic)delete this._labelDic[t];for(t in this._tweenDic)this._tweenDic[t].clear(),delete this._tweenDic[t];for(t in this._firstTweenDic)delete this._firstTweenDic[t];if(this._endTweenDataList=null,this._tweenDataList&&this._tweenDataList.length){var e=0,n=0;for(n=this._tweenDataList.length,e=0;e<n;e++)this._tweenDataList[e]&&this._tweenDataList[e].destroy()}this._tweenDataList.length=0,this._currTime=0,this._lastTime=0,this._startTime=0,this._index=0,this._gidIndex=0,this.scale=1,i.timer.clear(this,this._update)},o.destroy=function(){this.reset(),this._labelDic=null,this._tweenDic=null,this._tweenDataList=null,this._firstTweenDic=null},r(0,o,"index",function(){return this._frameIndex},function(t){this._frameIndex=t,this.gotoTime(this._frameIndex/this._frameRate*1e3)}),r(0,o,"total",function(){return this._total=Math.floor(this._startTime/1e3*this._frameRate),this._total}),e.to=function(t,i,n,s,r){return void 0===r&&(r=0),(new e).to(t,i,n,s,r)},e.from=function(t,i,n,s,r){return void 0===r&&(r=0),(new e).from(t,i,n,s,r)},e.__init$=function(){n=function(){function t(){this.type=0,this.isTo=!0,this.startTime=NaN,this.endTime=NaN,this.target=null,this.duration=NaN,this.ease=null,this.data=null}s(t,"");return t.prototype.destroy=function(){this.target=null,this.ease=null,this.data=null,this.isTo=!0,this.type=0,X.recover("tweenData",this)},t}()},e}(),ct=function(e){function a(){this._transform=null,this._tfChanged=!1,this._x=0,this._y=0,this._width=0,this._height=0,this._repaint=1,this._mouseEnableState=0,this._zOrder=0,this._graphics=null,this._renderType=0,this._optimizeScrollRect=!1,this._texture=null,this.mouseThrough=!1,this.autoSize=!1,this.hitTestPrior=!1,this.viewport=null,a.__super.call(this),this._style=c.EMPTY}s(a,"laya.display.Sprite",e);var h=a.prototype;return i.imps(h,{"laya.display.ILayout":!0}),h.createConchModel=function(){return new ConchNode},h.destroy=function(t){void 0===t&&(t=!0),this._releaseMem(),e.prototype.destroy.call(this,t),this._style&&this._style.destroy(),this._transform&&this._transform.destroy(),this._transform=null,this._style=null,this._graphics=null},h.updateZOrder=function(){K.updateOrder(this._childs)&&this.repaint()},h.reCache=function(){this._$P.cacheCanvas&&(this._$P.cacheCanvas.reCache=!0),this._repaint=1},h.setBounds=function(t){this._set$P("uBounds",t)},h.getBounds=function(){return this._$P.mBounds||this._set$P("mBounds",new P),P._getWrapRec(this._boundPointsToParent(),this._$P.mBounds)},h.getSelfBounds=function(){return this._$P.uBounds?this._$P.uBounds:(this._$P.mBounds||this._set$P("mBounds",new P),P._getWrapRec(this._getBoundPointsM(!1),this._$P.mBounds))},h._boundPointsToParent=function(t){void 0===t&&(t=!1);var e=0,i=0;this._style&&(e=this._style._tf.translateX,i=this._style._tf.translateY,t=t||0!==this._style._tf.rotate,this._style.scrollRect&&(e+=this._style.scrollRect.x,i+=this._style.scrollRect.y));var n=this._getBoundPointsM(t);if(!n||n.length<1)return n;if(8!=n.length&&(n=t?b.scanPList(n):P._getWrapRec(n,P.TEMP)._getBoundPoints()),!this.transform)return K.transPointList(n,this._x-e,this._y-i),n;var s=S.TEMP,r=0,o=n.length;for(r=0;r<o;r+=2)s.x=n[r],s.y=n[r+1],this.toParentPoint(s),n[r]=s.x,n[r+1]=s.y;return n},h.getGraphicBounds=function(t){return void 0===t&&(t=!1),this._graphics?this._graphics.getBounds(t):P.TEMP.setTo(0,0,0,0)},h._getBoundPointsM=function(t){if(void 0===t&&(t=!1),this._$P.uBounds)return this._$P.uBounds._getBoundPoints();if(this._$P.temBM||this._set$P("temBM",[]),this.scrollRect){var e=K.clearArray(this._$P.temBM),i=P.TEMP;return i.copyFrom(this.scrollRect),K.concatArray(e,i._getBoundPoints()),e}for(var n,s,r,o=this._graphics?this._graphics.getBoundPoints():K.clearArray(this._$P.temBM),a=0,h=(r=this._childs).length;a<h;a++)(n=r[a])instanceof laya.display.Sprite&&1==n.visible&&(s=n._boundPointsToParent(t))&&(o=o?K.concatArray(o,s):s);return o},h.getStyle=function(){return this._style===c.EMPTY&&(this._style=new c),this._style},h.setStyle=function(t){this._style=t},h._adjustTransform=function(){this._tfChanged=!1;var t,e=this._style._tf,i=e.scaleX,n=e.scaleY;if(e.rotate||1!==i||1!==n||e.skewX||e.skewY){(t=this._transform||(this._transform=M.create())).bTransform=!0;var s=.0174532922222222*(e.rotate-e.skewX),r=.0174532922222222*(e.rotate+e.skewY),o=Math.cos(r),a=Math.sin(r),h=Math.sin(s),l=Math.cos(s);return t.a=i*o,t.b=i*a,t.c=-n*h,t.d=n*l,t.tx=t.ty=0,t}return this._transform&&this._transform.destroy(),this._transform=null,this._renderType&=-5,t},h.pos=function(t,e,i){if(void 0===i&&(i=!1),this._x!==t||this._y!==e){if(this.destroyed)return this;if(i){this._x=t,this._y=e,this.conchModel&&this.conchModel.pos(this._x,this._y);var n=this._parent;n&&0===n._repaint&&(n._repaint=1,n.parentRepaint()),this._$P.maskParent&&0===this._$P.maskParent._repaint&&(this._$P.maskParent._repaint=1,this._$P.maskParent.parentRepaint())}else this.x=t,this.y=e}return this},h.pivot=function(t,e){return this.pivotX=t,this.pivotY=e,this},h.size=function(t,e){return this.width=t,this.height=e,this},h.scale=function(t,e,i){void 0===i&&(i=!1);var n=this.getStyle(),s=n._tf;if(s.scaleX!=t||s.scaleY!=e){if(this.destroyed)return this;if(i){n.setScale(t,e),this._tfChanged=!0,this.conchModel&&this.conchModel.scale(t,e),this._renderType|=4;var r=this._parent;r&&0===r._repaint&&(r._repaint=1,r.parentRepaint())}else this.scaleX=t,this.scaleY=e}return this},h.skew=function(t,e){return this.skewX=t,this.skewY=e,this},h.render=function(t,e,i){$.spriteCount++,F.renders[this._renderType]._fun(this,t,e+this._x,i+this._y),this._repaint=0},h.drawToCanvas=function(t,e,i,n){if(R.isConchNode){var s=yt.create("2D");return new D(t,e,s).ctx.setCanvasType(1),this.conchModel.drawToCanvas(s.source,i,n),s}return o.drawToCanvas(this,this._renderType,t,e,i,n)},h.customRender=function(t,e,i){this._renderType|=1024},h._applyFilters=function(){if(!R.isWebGL){var t;if((t=this._$P.filters)&&!(t.length<1))for(var e=0,i=t.length;e<i;e++)t[e].action.apply(this._$P.cacheCanvas)}},h._isHaveGlowFilter=function(){var t=0,e=0;if(this.filters)for(t=0;t<this.filters.length;t++)if(8==this.filters[t].type)return!0;for(t=0,e=this._childs.length;t<e;t++)if(this._childs[t]._isHaveGlowFilter())return!0;return!1},h.localToGlobal=function(t,e){void 0===e&&(e=!1),!0===e&&(t=new S(t.x,t.y));for(var n=this;n&&n!=i.stage;)t=n.toParentPoint(t),n=n.parent;return t},h.globalToLocal=function(t,e){void 0===e&&(e=!1),e&&(t=new S(t.x,t.y));for(var n=this,s=[];n&&n!=i.stage;)s.push(n),n=n.parent;for(var r=s.length-1;r>=0;)t=(n=s[r]).fromParentPoint(t),r--;return t},h.toParentPoint=function(t){if(!t)return t;t.x-=this.pivotX,t.y-=this.pivotY,this.transform&&this._transform.transformPoint(t),t.x+=this._x,t.y+=this._y;var e=this._style.scrollRect;return e&&(t.x-=e.x,t.y-=e.y),t},h.fromParentPoint=function(t){if(!t)return t;t.x-=this._x,t.y-=this._y;var e=this._style.scrollRect;return e&&(t.x+=e.x,t.y+=e.y),this.transform&&this._transform.invertTransformPoint(t),t.x+=this.pivotX,t.y+=this.pivotY,t},h.on=function(t,i,n,s){return 1!==this._mouseEnableState&&this.isMouseEvent(t)?(this.mouseEnabled=!0,this._setBit(2,!0),this._parent&&this._$2__onDisplay(),this._createListener(t,i,n,s,!1)):e.prototype.on.call(this,t,i,n,s)},h.once=function(t,i,n,s){return 1!==this._mouseEnableState&&this.isMouseEvent(t)?(this.mouseEnabled=!0,this._setBit(2,!0),this._parent&&this._$2__onDisplay(),this._createListener(t,i,n,s,!0)):e.prototype.once.call(this,t,i,n,s)},h._$2__onDisplay=function(){if(1!==this._mouseEnableState){var t=this;for(t=t.parent;t&&1!==t._mouseEnableState&&!t._getBit(2);)t.mouseEnabled=!0,t._setBit(2,!0),t=t.parent}},h.loadImage=function(t,e,i,n,s,r){var o=this;return void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=0),void 0===s&&(s=0),this.graphics.loadImage(t,e,i,n,s,function(t){o.destroyed||(o.size(e+(n||t.width),i+(s||t.height)),o.repaint(),r&&r.runWith(t))}),this},h.repaint=function(){this.conchModel&&this.conchModel.repaint&&this.conchModel.repaint(),0===this._repaint&&(this._repaint=1,this.parentRepaint()),this._$P&&this._$P.maskParent&&this._$P.maskParent.repaint()},h._needRepaint=function(){return 0!==this._repaint&&this._$P.cacheCanvas&&this._$P.cacheCanvas.reCache},h._childChanged=function(t){this._childs.length?this._renderType|=2048:this._renderType&=-2049,t&&this._get$P("hasZorder")&&i.timer.callLater(this,this.updateZOrder),this.repaint()},h.parentRepaint=function(){var t=this._parent;t&&0===t._repaint&&(t._repaint=1,t.parentRepaint())},h.startDrag=function(t,e,i,n,s,r,o){void 0===e&&(e=!1),void 0===i&&(i=0),void 0===n&&(n=300),void 0===r&&(r=!1),void 0===o&&(o=.92),this._$P.dragging||this._set$P("dragging",new z),this._$P.dragging.start(this,t,e,i,n,s,r,o)},h.stopDrag=function(){this._$P.dragging&&this._$P.dragging.stop()},h._releaseMem=function(){if(this._$P){var t=this._$P.cacheCanvas;t&&t.ctx&&(X.recover("RenderContext",t.ctx),t.ctx.canvas.size(0,0),t.ctx=null);var e=this._$P._filterCache;e&&(e.destroy(),e.recycle(),this._set$P("_filterCache",null)),this._$P._isHaveGlowFilter&&this._set$P("_isHaveGlowFilter",!1),this._$P._isHaveGlowFilter=null}},h._setDisplay=function(t){t||this._releaseMem(),e.prototype._setDisplay.call(this,t)},h.hitTestPoint=function(t,e){var i=this.globalToLocal(S.TEMP.setTo(t,e));t=i.x,e=i.y;return(this._$P.hitArea?this._$P.hitArea:this._width>0&&this._height>0?P.TEMP.setTo(0,0,this._width,this._height):this.getSelfBounds()).contains(t,e)},h.getMousePoint=function(){return this.globalToLocal(S.TEMP.setTo(i.stage.mouseX,i.stage.mouseY))},h._getWords=function(){return null},h._addChildsToLayout=function(t){var e=this._getWords();if(null==e&&0==this._childs.length)return!1;if(e)for(var i=0,n=e.length;i<n;i++)t.push(e[i]);return this._childs.forEach(function(e,i,n){e._style._enableLayout()&&e._addToLayout(t)}),!0},h._addToLayout=function(t){this._style.absolute||(this._style.block?t.push(this):this._addChildsToLayout(t)&&(this.x=this.y=0))},h._isChar=function(){return!1},h._getCSSStyle=function(){return this._style.getCSSStyle()},h._setAttributes=function(t,e){switch(t){case"x":this.x=parseFloat(e);break;case"y":this.y=parseFloat(e);break;case"width":this.width=parseFloat(e);break;case"height":this.height=parseFloat(e);break;default:this[t]=e}},h._layoutLater=function(){this.parent&&this.parent._layoutLater()},r(0,h,"optimizeScrollRect",function(){return this._optimizeScrollRect},function(t){this._optimizeScrollRect!=t&&(this._optimizeScrollRect=t,this.conchModel&&this.conchModel.optimizeScrollRect(t))}),r(0,h,"customRenderEnable",null,function(t){if(t&&(this._renderType|=1024,R.isConchNode)){a.CustomList.push(this);var e=new yt("2d");e._setContext(new CanvasRenderingContext2D),this.customContext=new D(0,0,e),e.context.setCanvasType&&e.context.setCanvasType(2),this.conchModel.custom(e.context)}}),r(0,h,"cacheAsBitmap",function(){return"none"!==this.cacheAs},function(t){this.cacheAs=t?this._$P.hasFilter?"none":"normal":"none"}),r(0,h,"cacheAs",function(){return null==this._$P.cacheCanvas?"none":this._$P.cacheCanvas.type},function(t){var e=this._$P.cacheCanvas;if(t!==(e?e.type:"none")){if("none"!==t)this._getBit(1)||this._setUpNoticeType(1),e||(e=this._set$P("cacheCanvas",X.getItemByClass("cacheCanvas",Object))),e.type=t,e.reCache=!0,this._renderType|=16,"bitmap"==t&&this.conchModel&&this.conchModel.cacheAs(1),this._set$P("cacheForFilters",!1);else if(this._$P.hasFilter)this._set$P("cacheForFilters",!0);else{if(e){var i=e;i&&i.ctx&&(X.recover("RenderContext",i.ctx),i.ctx.canvas.size(0,0),i.ctx=null),X.recover("cacheCanvas",e)}this._$P.cacheCanvas=null,this._renderType&=-17,this.conchModel&&this.conchModel.cacheAs(0)}this.repaint()}}),r(0,h,"zOrder",function(){return this._zOrder},function(t){this._zOrder!=t&&(this._zOrder=t,this.conchModel&&this.conchModel.setZOrder&&this.conchModel.setZOrder(t),this._parent&&(t&&this._parent._set$P("hasZorder",!0),i.timer.callLater(this._parent,this.updateZOrder)))}),r(0,h,"rotation",function(){return this._style._tf.rotate},function(t){var e=this.getStyle();if(e._tf.rotate!==t){e.setRotate(t),this._tfChanged=!0,this.conchModel&&this.conchModel.rotate(t),this._renderType|=4;var i=this._parent;i&&0===i._repaint&&(i._repaint=1,i.parentRepaint())}}),r(0,h,"width",function(){return this.autoSize?this.getSelfBounds().width:this._width},function(t){this._width!==t&&(this._width=t,this.conchModel&&this.conchModel.size(t,this._height),this.repaint())}),r(0,h,"x",function(){return this._x},function(t){if(this._x!==t){if(this.destroyed)return;this._x=t,this.conchModel&&this.conchModel.pos(t,this._y);var e=this._parent;e&&0===e._repaint&&(e._repaint=1,e.parentRepaint()),this._$P.maskParent&&0===this._$P.maskParent._repaint&&(this._$P.maskParent._repaint=1,this._$P.maskParent.parentRepaint())}}),r(0,h,"globalScaleY",function(){for(var t=1,e=this;e&&e!==i.stage;)t*=e.scaleY,e=e.parent;return t}),r(0,h,"hitArea",function(){return this._$P.hitArea},function(t){this._set$P("hitArea",t)}),r(0,h,"staticCache",function(){return this._$P.staticCache},function(t){this._set$P("staticCache",t),t||this.reCache()}),r(0,h,"texture",function(){return this._texture},function(t){this._texture!=t&&(this._texture=t,this.graphics.cleanByTexture(t,0,0))}),r(0,h,"y",function(){return this._y},function(t){if(this._y!==t){if(this.destroyed)return;this._y=t,this.conchModel&&this.conchModel.pos(this._x,t);var e=this._parent;e&&0===e._repaint&&(e._repaint=1,e.parentRepaint()),this._$P.maskParent&&0===this._$P.maskParent._repaint&&(this._$P.maskParent._repaint=1,this._$P.maskParent.parentRepaint())}}),r(0,h,"height",function(){return this.autoSize?this.getSelfBounds().height:this._height},function(t){this._height!==t&&(this._height=t,this.conchModel&&this.conchModel.size(this._width,t),this.repaint())}),r(0,h,"blendMode",function(){return this._style.blendMode},function(t){this.getStyle().blendMode=t,this.conchModel&&this.conchModel.blendMode(t),t&&"source-over"!=t?this._renderType|=8:this._renderType&=-9,this.parentRepaint()}),r(0,h,"scaleX",function(){return this._style._tf.scaleX},function(t){var e=this.getStyle();if(e._tf.scaleX!==t){e.setScaleX(t),this._tfChanged=!0,this.conchModel&&this.conchModel.scale(t,e._tf.scaleY),this._renderType|=4;var i=this._parent;i&&0===i._repaint&&(i._repaint=1,i.parentRepaint())}}),r(0,h,"scaleY",function(){return this._style._tf.scaleY},function(t){var e=this.getStyle();if(e._tf.scaleY!==t){e.setScaleY(t),this._tfChanged=!0,this.conchModel&&this.conchModel.scale(e._tf.scaleX,t),this._renderType|=4;var i=this._parent;i&&0===i._repaint&&(i._repaint=1,i.parentRepaint())}}),r(0,h,"stage",function(){return i.stage}),r(0,h,"skewX",function(){return this._style._tf.skewX},function(t){var e=this.getStyle();if(e._tf.skewX!==t){e.setSkewX(t),this._tfChanged=!0,this.conchModel&&this.conchModel.skew(t,e._tf.skewY),this._renderType|=4;var i=this._parent;i&&0===i._repaint&&(i._repaint=1,i.parentRepaint())}}),r(0,h,"scrollRect",function(){return this._style.scrollRect},function(t){this.getStyle().scrollRect=t,this.repaint(),t?(this._renderType|=128,this.conchModel&&this.conchModel.scrollRect(t.x,t.y,t.width,t.height)):(this._renderType&=-129,this.conchModel&&(a.RUNTIMEVERION<"0.9.1"?this.conchModel.removeType(64):this.conchModel.removeType(128)))}),r(0,h,"skewY",function(){return this._style._tf.skewY},function(t){var e=this.getStyle();if(e._tf.skewY!==t){e.setSkewY(t),this._tfChanged=!0,this.conchModel&&this.conchModel.skew(e._tf.skewX,t),this._renderType|=4;var i=this._parent;i&&0===i._repaint&&(i._repaint=1,i.parentRepaint())}}),r(0,h,"transform",function(){return this._tfChanged?this._adjustTransform():this._transform},function(t){this._tfChanged=!1,this._transform=t,t&&(this._x=t.tx,this._y=t.ty,t.tx=t.ty=0,this.conchModel&&this.conchModel.transform(t.a,t.b,t.c,t.d,this._x,this._y)),t?this._renderType|=4:(this._renderType&=-5,this.conchModel&&this.conchModel.removeType(4)),this.parentRepaint()}),r(0,h,"pivotX",function(){return this._style._tf.translateX},function(t){this.getStyle().setTranslateX(t),this.conchModel&&this.conchModel.pivot(t,this._style._tf.translateY),this.repaint()}),r(0,h,"pivotY",function(){return this._style._tf.translateY},function(t){this.getStyle().setTranslateY(t),this.conchModel&&this.conchModel.pivot(this._style._tf.translateX,t),this.repaint()}),r(0,h,"alpha",function(){return this._style.alpha},function(t){this._style&&this._style.alpha!==t&&(t=t<0?0:t>1?1:t,this.getStyle().alpha=t,this.conchModel&&this.conchModel.alpha(t),1!==t?this._renderType|=2:this._renderType&=-3,this.parentRepaint())}),r(0,h,"visible",function(){return this._style.visible},function(t){this._style&&this._style.visible!==t&&(this.getStyle().visible=t,this.conchModel&&this.conchModel.visible(t),this.parentRepaint())}),r(0,h,"graphics",function(){return this._graphics||(this.graphics=o.createGraphics())},function(t){this._graphics&&(this._graphics._sp=null),this._graphics=t,t?(this._renderType&=-2,this._renderType|=512,t._sp=this,this.conchModel&&this.conchModel.graphics(this._graphics)):(this._renderType&=-513,this._renderType&=-2,this.conchModel&&(a.RUNTIMEVERION<"0.9.1"?this.conchModel.removeType(256):this.conchModel.removeType(512))),this.repaint()}),r(0,h,"filters",function(){return this._$P.filters},function(t){t&&0===t.length&&(t=null),this._$P.filters!=t&&(this._set$P("filters",t?t.slice():null),R.isConchApp&&(this.conchModel&&(a.RUNTIMEVERION<"0.9.1"?this.conchModel.removeType(16):this.conchModel.removeType(32)),this._$P.filters&&1==this._$P.filters.length&&this._$P.filters[0].callNative(this)),R.isWebGL&&(t&&t.length?this._renderType|=32:this._renderType&=-33),t&&t.length>0?(this._getBit(1)||this._setUpNoticeType(1),R.isWebGL&&1==t.length&&t[0]instanceof laya.filters.ColorFilter||("bitmap"!=this.cacheAs&&(R.isConchNode||(this.cacheAs="bitmap"),this._set$P("cacheForFilters",!0)),this._set$P("hasFilter",!0))):(this._set$P("hasFilter",!1),this._$P.cacheForFilters&&"bitmap"==this.cacheAs&&(this.cacheAs="none")),this.repaint())}),r(0,h,"parent",e.prototype._$get_parent,function(t){i.superSet(Z,this,"parent",t),t&&this._getBit(2)&&this._$2__onDisplay()}),r(0,h,"mask",function(){return this._$P._mask},function(t){t&&this.mask&&this.mask._$P.maskParent||(t?(this.cacheAs="bitmap",this._set$P("_mask",t),t._set$P("maskParent",this)):(this.cacheAs="none",this.mask&&this.mask._set$P("maskParent",null),this._set$P("_mask",t)),this.conchModel&&this.conchModel.mask(t?t.conchModel:null),this._renderType|=64,this.parentRepaint())}),r(0,h,"mouseEnabled",function(){return this._mouseEnableState>1},function(t){this._mouseEnableState=t?2:1}),r(0,h,"globalScaleX",function(){for(var t=1,e=this;e&&e!==i.stage;)t*=e.scaleX,e=e.parent;return t}),r(0,h,"mouseX",function(){return this.getMousePoint().x}),r(0,h,"mouseY",function(){return this.getMousePoint().y}),a.fromImage=function(t){return(new a).loadImage(t)},a.CustomList=[],n(a,["RUNTIMEVERION",function(){return this.RUNTIMEVERION=t.conch?conchConfig.getRuntimeVersion().substr(conchConfig.getRuntimeVersion().lastIndexOf("-")+1):""}]),a}(Z),_t=function(t){function e(t){this._audio=null,this._onEnd=null,this._resumePlay=null,e.__super.call(this),this._onEnd=K.bind(this.__onEnd,this),this._resumePlay=K.bind(this.__resumePlay,this),t.addEventListener("ended",this._onEnd),this._audio=t}s(e,"laya.media.h5audio.AudioSoundChannel",it);var n=e.prototype;return n.__onEnd=function(){if(1==this.loops)return this.completeHandler&&(i.timer.once(10,this,this.__runComplete,[this.completeHandler],!1),this.completeHandler=null),this.stop(),void this.event("complete");this.loops>0&&this.loops--,this.startTime=0,this.play()},n.__resumePlay=function(){this._audio&&this._audio.removeEventListener("canplay",this._resumePlay);try{this._audio.currentTime=this.startTime,N.container.appendChild(this._audio),this._audio.play()}catch(t){this.event("error")}},n.play=function(){this.isStopped=!1;try{this._audio.playbackRate=E.playbackRate,this._audio.currentTime=this.startTime}catch(t){return void this._audio.addEventListener("canplay",this._resumePlay)}E.addChannel(this),N.container.appendChild(this._audio),"play"in this._audio&&this._audio.play()},n.stop=function(){this.isStopped=!0,E.removeChannel(this),this.completeHandler=null,this._audio&&("pause"in this._audio&&R.isConchApp&&this._audio.stop(),this._audio.pause(),this._audio.removeEventListener("ended",this._onEnd),this._audio.removeEventListener("canplay",this._resumePlay),N.onIE||this._audio!=et._musicAudio&&X.recover("audio:"+this.url,this._audio),N.removeElement(this._audio),this._audio=null)},n.pause=function(){this.isStopped=!0,E.removeChannel(this),"pause"in this._audio&&this._audio.pause()},n.resume=function(){this._audio&&(this.isStopped=!1,E.addChannel(this),"play"in this._audio&&this._audio.play())},r(0,n,"position",function(){return this._audio?this._audio.currentTime:0}),r(0,n,"duration",function(){return this._audio?this._audio.duration:0}),r(0,n,"volume",function(){return this._audio?this._audio.volume:1},function(t){this._audio&&(this._audio.volume=t)}),e}(),dt=function(t){function e(){this.audioBuffer=null,this.gain=null,this.bufferSource=null,this._currentTime=0,this._volume=1,this._startTime=0,this._pauseTime=0,this._onPlayEnd=null,this.context=st.ctx,e.__super.call(this),this._onPlayEnd=K.bind(this.__onPlayEnd,this),this.context.createGain?this.gain=this.context.createGain():this.gain=this.context.createGainNode()}s(e,"laya.media.webaudio.WebAudioSoundChannel",it);var n=e.prototype;return n.play=function(){if(E.addChannel(this),this.isStopped=!1,this._clearBufferSource(),this.audioBuffer){var t=this.context,e=this.gain,i=t.createBufferSource();this.bufferSource=i,i.buffer=this.audioBuffer,i.connect(e),e&&e.disconnect(),e.connect(t.destination),i.onended=this._onPlayEnd,this.startTime>=this.duration&&(this.startTime=0),this._startTime=N.now(),this.gain.gain.value=this._volume,0==this.loops&&(i.loop=!0),i.playbackRate.value=E.playbackRate,i.start(0,this.startTime),this._currentTime=0}},n.__onPlayEnd=function(){if(1==this.loops)return this.completeHandler&&(i.timer.once(10,this,this.__runComplete,[this.completeHandler],!1),this.completeHandler=null),this.stop(),void this.event("complete");this.loops>0&&this.loops--,this.startTime=0,this.play()},n._clearBufferSource=function(){if(this.bufferSource){var t=this.bufferSource;t.stop?t.stop(0):t.noteOff(0),t.disconnect(0),t.onended=null,e._tryCleanFailed||this._tryClearBuffer(t),this.bufferSource=null}},n._tryClearBuffer=function(t){if(N.onMac)try{t.buffer=st._miniBuffer}catch(t){e._tryCleanFailed=!0}else try{t.buffer=null}catch(t){e._tryCleanFailed=!0}},n.stop=function(){this._clearBufferSource(),this.audioBuffer=null,this.gain&&this.gain.disconnect(),this.isStopped=!0,E.removeChannel(this),this.completeHandler=null,E.autoReleaseSound&&i.timer.once(5e3,null,E.disposeSoundIfNotUsed,[this.url],!1)},n.pause=function(){this.isStopped||(this._pauseTime=this.position),this._clearBufferSource(),this.gain&&this.gain.disconnect(),this.isStopped=!0,E.removeChannel(this),E.autoReleaseSound&&i.timer.once(5e3,null,E.disposeSoundIfNotUsed,[this.url],!1)},n.resume=function(){this.startTime=this._pauseTime,this.play()},r(0,n,"position",function(){return this.bufferSource?(N.now()-this._startTime)/1e3+this.startTime:0}),r(0,n,"duration",function(){return this.audioBuffer?this.audioBuffer.duration:0}),r(0,n,"volume",function(){return this._volume},function(t){this.isStopped||(this._volume=t,this.gain.gain.value=t)}),e._tryCleanFailed=!1,e}(),ft=function(t){function e(){e.__super.call(this),this._w=0,this._h=0}s(e,"laya.resource.Bitmap",ht);var i=e.prototype;return r(0,i,"width",function(){return this._w}),r(0,i,"height",function(){return this._h}),r(0,i,"source",function(){return this._source}),e}(),pt=function(t){function e(){this.loop=!1,this.wrapMode=0,this._index=0,this._count=0,this._isPlaying=!1,this._labels=null,this._isReverse=!1,this._frameRateChanged=!1,this._controlNode=null,this._actionName=null,e.__super.call(this),this._interval=a.animationInterval,this._setUpNoticeType(1)}s(e,"laya.display.AnimationPlayerBase",t);var i=e.prototype;return i.play=function(t,e,i,n){void 0===t&&(t=0),void 0===e&&(e=!0),void 0===i&&(i=""),void 0===n&&(n=!0),this._isPlaying=!0,this.index="string"==typeof t?this._getFrameByLabel(t):t,this.loop=e,this._actionName=i,this._isReverse=1==this.wrapMode,this.interval>0&&this.timerLoop(this.interval,this,this._frameLoop,null,!0,!0)},i._getFrameByLabel=function(t){var e=0;for(e=0;e<this._count;e++)if(this._labels[e]&&this._labels[e].indexOf(t)>=0)return e;return 0},i._frameLoop=function(){if(this._isReverse){if(this._index--,this._index<0){if(!this.loop)return this._index=0,this.stop(),void this.event("complete");2==this.wrapMode?(this._index=this._count>0?1:0,this._isReverse=!1):this._index=this._count-1,this.event("complete")}}else if(this._index++,this._index>=this._count){if(!this.loop)return this._index--,this.stop(),void this.event("complete");2==this.wrapMode?(this._index=this._count-2>=0?this._count-2:0,this._isReverse=!0):this._index=0,this.event("complete")}this.index=this._index},i._setControlNode=function(t){this._controlNode&&(this._controlNode.off("display",this,this._checkResumePlaying),this._controlNode.off("undisplay",this,this._checkResumePlaying)),this._controlNode=t,t&&t!=this&&(t.on("display",this,this._checkResumePlaying),t.on("undisplay",this,this._checkResumePlaying))},i._setDisplay=function(e){t.prototype._setDisplay.call(this,e),this._checkResumePlaying()},i._checkResumePlaying=function(){this._isPlaying&&(this._controlNode.displayedInStage?this.play(this._index,this.loop,this._actionName):this.clearTimer(this,this._frameLoop))},i.stop=function(){this._isPlaying=!1,this.clearTimer(this,this._frameLoop)},i.addLabel=function(t,e){this._labels||(this._labels={}),this._labels[e]||(this._labels[e]=[]),this._labels[e].push(t)},i.removeLabel=function(t){if(t){if(this._labels)for(var e in this._labels)this._removeLabelFromLabelList(this._labels[e],t)}else this._labels=null},i._removeLabelFromLabelList=function(t,e){if(t)for(var i=t.length-1;i>=0;i--)t[i]==e&&t.splice(i,1)},i.gotoAndStop=function(t){this.index="string"==typeof t?this._getFrameByLabel(t):t,this.stop()},i._displayToIndex=function(t){},i.clear=function(){this.stop(),this._labels=null},r(0,i,"interval",function(){return this._interval},function(t){this._interval!=t&&(this._frameRateChanged=!0,this._interval=t,this._isPlaying&&t>0&&this.timerLoop(t,this,this._frameLoop,null,!0,!0))}),r(0,i,"isPlaying",function(){return this._isPlaying}),r(0,i,"index",function(){return this._index},function(t){if(this._index=t,this._displayToIndex(t),this._labels&&this._labels[t])for(var e=this._labels[t],i=0,n=e.length;i<n;i++)this.event("label",e[i])}),r(0,i,"count",function(){return this._count}),e.WRAP_POSITIVE=0,e.WRAP_REVERSE=1,e.WRAP_PINGPONG=2,e}(ct),gt=function(t){function e(){this._clipPoint=null,this._currBitmapFont=null,this._text=null,this._isChanged=!1,this._textWidth=0,this._textHeight=0,this._lines=[],this._lineWidths=[],this._startX=NaN,this._startY=NaN,this._lastVisibleLineIndex=-1,this._words=null,this._charSize={},this.underline=!1,this._underlineColor=null,e.__super.call(this),this.overflow=e.VISIBLE,this._style=new tt(this),this._style.wordWrap=!1}s(e,"laya.display.Text",t);var o=e.prototype;return o.destroy=function(e){void 0===e&&(e=!0),t.prototype.destroy.call(this,e),this._lines=null,this._words&&(this._words.length=0,this._words=null)},o._getBoundPointsM=function(t){void 0===t&&(t=!1);var e=P.TEMP;return e.setTo(0,0,this.width,this.height),e._getBoundPoints()},o.getGraphicBounds=function(t){void 0===t&&(t=!1);var e=P.TEMP;return e.setTo(0,0,this.width,this.height),e},o._getCSSStyle=function(){return this._style},o.lang=function(t,i,n,s,r,o,a,h,l,u,c){if(t=e.langPacks&&e.langPacks[t]?e.langPacks[t]:t,arguments.length<2)this._text=t;else{for(var _=0,d=arguments.length;_<d;_++)t=t.replace("{"+_+"}",arguments[_+1]);this._text=t}},o._isPassWordMode=function(){var t=this._style.password;return"prompt"in this&&this.prompt==this._text&&(t=!1),t},o._getPassWordTxt=function(t){var e;e="";for(var i=t.length;i>0;i--)e+="●";return e},o.renderText=function(t,e){var i=this.graphics;i.clear(!0);var n=(this.italic?"italic ":"")+(this.bold?"bold ":"")+this.fontSize+"px "+(N.onIPhone?laya.display.Text._fontFamilyMap[this.font]||this.font:this.font);N.context.font=n;var s=this.padding,r=s[3],o="left",a=this._lines,h=this.leading+this._charSize.height,l=this._currBitmapFont;l&&(h=this.leading+l.getMaxHeight());var u=s[0];if(!l&&this._width>0&&this._textWidth<=this._width&&("right"==this.align?(o="right",r=this._width-s[1]):"center"==this.align&&(o="center",r=.5*this._width+s[3]-s[1])),this._height>0){var c=this._textHeight>this._height?"top":this.valign;"middle"===c?u=.5*(this._height-e*h)+s[0]-s[2]:"bottom"===c&&(u=this._height-e*h-s[2])}var _=this._style;if(l&&l.autoScaleSize)var d=l.fontSize/this.fontSize;if(this._clipPoint)if(i.save(),l&&l.autoScaleSize){var f=0,p=0;f=this._width?this._width-s[3]-s[1]:this._textWidth,p=this._height?this._height-s[0]-s[2]:this._textHeight,f*=d,p*=d,i.clipRect(s[3],s[0],f,p)}else i.clipRect(s[3],s[0],this._width?this._width-s[3]-s[1]:this._textWidth,this._height?this._height-s[0]-s[2]:this._textHeight);var g=_.password;"prompt"in this&&this.prompt==this._text&&(g=!1);for(var m=0,v=0,y=Math.min(this._lines.length,e+t)||1,w=t;w<y;w++){var x,T=a[w];if(g){var b=T.length;T="";for(var C=b;C>0;C--)T+="●"}if(m=r-(this._clipPoint?this._clipPoint.x:0),v=u+h*w-(this._clipPoint?this._clipPoint.y:0),this.underline&&this.drawUnderline(o,m,v,w),l){var M=this.width;l.autoScaleSize&&(M=this.width*d),l.drawText(T,this,m,v,this.align,M)}else R.isWebGL?(this._words||(this._words=[]),(x=this._words.length>w-t?this._words[w-t]:new J).setText(T)):x=T,_.stroke?i.fillBorderText(x,m,v,n,this.color,_.strokeColor,_.stroke,o):i.fillText(x,m,v,n,this.color,o)}if(l&&l.autoScaleSize){var S=1/d;this.scale(S,S)}this._clipPoint&&i.restore(),this._startX=r,this._startY=u},o.drawUnderline=function(t,e,i,n){var s=this._lineWidths[n];switch(t){case"center":e-=s/2;break;case"right":e-=s}i+=this._charSize.height,this._graphics.drawLine(e,i,e+s,i,this.underlineColor||this.color,1)},o.typeset=function(){if(this._isChanged=!1,!this._text)return this._clipPoint=null,this._textWidth=this._textHeight=0,void this.graphics.clear(!0);N.context.font=this._getCSSStyle().font,this._lines.length=0,this._lineWidths.length=0,this._isPassWordMode()?this.parseLines(this._getPassWordTxt(this._text)):this.parseLines(this._text),this.evalTextSize(),this.checkEnabledViewportOrNot()?this._clipPoint||(this._clipPoint=new S(0,0)):this._clipPoint=null;var t=this._lines.length;if(this.overflow!=e.VISIBLE){var i=this.overflow==e.HIDDEN?Math.floor:Math.ceil;t=Math.min(t,i((this.height-this.padding[0]-this.padding[2])/(this.leading+this._charSize.height)))}var n=this.scrollY/(this._charSize.height+this.leading)|0;this.renderText(n,t),this.repaint()},o.evalTextSize=function(){var t=NaN,e=NaN;t=Math.max.apply(this,this._lineWidths),e=this._currBitmapFont?this._lines.length*(this._currBitmapFont.getMaxHeight()+this.leading)+this.padding[0]+this.padding[2]:this._lines.length*(this._charSize.height+this.leading)+this.padding[0]+this.padding[2],t==this._textWidth&&e==this._textHeight||(this._textWidth=t,this._textHeight=e,this._width&&this._height||this.conchModel&&this.conchModel.size(this._width||this._textWidth,this._height||this._textHeight))},o.checkEnabledViewportOrNot=function(){return this.overflow==e.SCROLL&&(this._width>0&&this._textWidth>this._width||this._height>0&&this._textHeight>this._height)},o.changeText=function(t){this._text!==t&&(this.lang(t+""),this._graphics&&this._graphics.replaceText(this._text)||this.typeset())},o.parseLines=function(t){var i=this.wordWrap||this.overflow==e.HIDDEN;if(i)var n=this.getWordWrapWidth();if(this._currBitmapFont)this._charSize.width=this._currBitmapFont.getMaxWidth(),this._charSize.height=this._currBitmapFont.getMaxHeight();else{var s=N.context.measureText(e._testWord);this._charSize.width=s.width,this._charSize.height=s.height||this.fontSize}for(var r=t.replace(/\r\n/g,"\n").split("\n"),o=0,a=r.length;o<a;o++){var h=r[o];i?this.parseLine(h,n):(this._lineWidths.push(this.getTextWidth(h)),this._lines.push(h))}},o.parseLine=function(t,i){N.context;var n,s=this._lines,r=0,o=NaN,a=NaN,h=0;if((o=this.getTextWidth(t))<=i)return s.push(t),void this._lineWidths.push(o);o=this._charSize.width,0==(r=Math.floor(i/o))&&(r=1),a=o=this.getTextWidth(t.substring(0,r));for(var l=r,u=t.length;l<u;l++)if(o=this.getTextWidth(t.charAt(l)),(a+=o)>i)if(this.wordWrap){var c=t.substring(h,l);if(c.charCodeAt(c.length-1)<255?(n=/(?:\w|-)+$/.exec(c))&&(l=n.index+h,0==n.index?l+=c.length:c=t.substring(h,l)):e.RightToLeft&&(n=/([\u0600-\u06FF])+$/.exec(c))&&(l=n.index+h,0==n.index?l+=c.length:c=t.substring(h,l)),s.push(c),this._lineWidths.push(a-o),h=l,!(l+r<u)){s.push(t.substring(h,u)),this._lineWidths.push(this.getTextWidth(s[s.length-1])),h=-1;break}l+=r,a=o=this.getTextWidth(t.substring(h,l)),l--}else if(this.overflow==e.HIDDEN)return s.push(t.substring(0,l)),void this._lineWidths.push(this.getTextWidth(s[s.length-1]));this.wordWrap&&-1!=h&&(s.push(t.substring(h,u)),this._lineWidths.push(this.getTextWidth(s[s.length-1])))},o.getTextWidth=function(t){return this._currBitmapFont?this._currBitmapFont.getTextWidth(t):N.context.measureText(t).width},o.getWordWrapWidth=function(){var t=this.padding,e=NaN;return(e=this._currBitmapFont&&this._currBitmapFont.autoScaleSize?this._width*(this._currBitmapFont.fontSize/this.fontSize):this._width)<=0&&(e=this.wordWrap?100:N.width),e<=0&&(e=100),e-t[3]-t[1]},o.getCharPoint=function(t,e){this._isChanged&&i.timer.runCallLater(this,this.typeset);for(var n=0,s=this._lines,r=0,o=0,a=s.length;o<a;o++){if(n+=s[o].length,t<n){var h=o;break}r=n}var l=(this.italic?"italic ":"")+(this.bold?"bold ":"")+this.fontSize+"px "+this.font;N.context.font=l;var u=this.getTextWidth(this._text.substring(r,t));return(e||new S).setTo(this._startX+u-(this._clipPoint?this._clipPoint.x:0),this._startY+h*(this._charSize.height+this.leading)-(this._clipPoint?this._clipPoint.y:0))},r(0,o,"width",function(){return this._width?this._width:this.textWidth+this.padding[1]+this.padding[3]},function(t){t!=this._width&&(i.superSet(ct,this,"width",t),this.isChanged=!0)}),r(0,o,"textWidth",function(){return this._isChanged&&i.timer.runCallLater(this,this.typeset),this._textWidth}),r(0,o,"height",function(){return this._height?this._height:this.textHeight+this.padding[0]+this.padding[2]},function(t){t!=this._height&&(i.superSet(ct,this,"height",t),this.isChanged=!0)}),r(0,o,"textHeight",function(){return this._isChanged&&i.timer.runCallLater(this,this.typeset),this._textHeight}),r(0,o,"padding",function(){return this._getCSSStyle().padding},function(t){this._getCSSStyle().padding=t,this.isChanged=!0}),r(0,o,"bold",function(){return this._getCSSStyle().bold},function(t){this._getCSSStyle().bold=t,this.isChanged=!0}),r(0,o,"text",function(){return this._text||""},function(t){this._text!==t&&(this.lang(t+""),this.isChanged=!0,this.event("change"))}),r(0,o,"color",function(){return this._getCSSStyle().color},function(t){this._getCSSStyle().color!=t&&(this._getCSSStyle().color=t,!this._isChanged&&this._graphics?this._graphics.replaceTextColor(this.color):this.isChanged=!0)}),r(0,o,"font",function(){return this._getCSSStyle().fontFamily},function(t){this._currBitmapFont&&(this._currBitmapFont=null,this.scale(1,1)),e._bitmapFonts&&e._bitmapFonts[t]&&(this._currBitmapFont=e._bitmapFonts[t]),this._getCSSStyle().fontFamily=t,this.isChanged=!0}),r(0,o,"fontSize",function(){return this._getCSSStyle().fontSize},function(t){this._getCSSStyle().fontSize=t,this.isChanged=!0}),r(0,o,"italic",function(){return this._getCSSStyle().italic},function(t){this._getCSSStyle().italic=t,this.isChanged=!0}),r(0,o,"align",function(){return this._getCSSStyle().align},function(t){this._getCSSStyle().align=t,this.isChanged=!0}),r(0,o,"valign",function(){return this._getCSSStyle().valign},function(t){this._getCSSStyle().valign=t,this.isChanged=!0}),r(0,o,"wordWrap",function(){return this._getCSSStyle().wordWrap},function(t){this._getCSSStyle().wordWrap=t,this.isChanged=!0}),r(0,o,"leading",function(){return this._getCSSStyle().leading},function(t){this._getCSSStyle().leading=t,this.isChanged=!0}),r(0,o,"bgColor",function(){return this._getCSSStyle().backgroundColor},function(t){this._getCSSStyle().backgroundColor=t,this.isChanged=!0}),r(0,o,"borderColor",function(){return this._getCSSStyle().borderColor},function(t){this._getCSSStyle().borderColor=t,this.isChanged=!0}),r(0,o,"stroke",function(){return this._getCSSStyle().stroke},function(t){this._getCSSStyle().stroke=t,this.isChanged=!0}),r(0,o,"strokeColor",function(){return this._getCSSStyle().strokeColor},function(t){this._getCSSStyle().strokeColor=t,this.isChanged=!0}),r(0,o,"isChanged",null,function(t){this._isChanged!==t&&(this._isChanged=t,t&&i.timer.callLater(this,this.typeset))}),r(0,o,"scrollX",function(){return this._clipPoint?this._clipPoint.x:0},function(t){if(!(this.overflow!=e.SCROLL||this.textWidth<this._width)&&this._clipPoint){t=t<this.padding[3]?this.padding[3]:t;var i=this._textWidth-this._width;t=t>i?i:t;var n=this._height/(this._charSize.height+this.leading)|1;this._clipPoint.x=t,this.renderText(this._lastVisibleLineIndex,n)}}),r(0,o,"scrollY",function(){return this._clipPoint?this._clipPoint.y:0},function(t){if(!(this.overflow!=e.SCROLL||this.textHeight<this._height)&&this._clipPoint){t=t<this.padding[0]?this.padding[0]:t;var i=this._textHeight-this._height,n=(t=t>i?i:t)/(this._charSize.height+this.leading)|0;this._lastVisibleLineIndex=n;var s=1+(this._height/(this._charSize.height+this.leading)|0);this._clipPoint.y=t,this.renderText(n,s)}}),r(0,o,"maxScrollX",function(){return this.textWidth<this._width?0:this._textWidth-this._width}),r(0,o,"maxScrollY",function(){return this.textHeight<this._height?0:this._textHeight-this._height}),r(0,o,"lines",function(){return this._isChanged&&this.typeset(),this._lines}),r(0,o,"underlineColor",function(){return this._underlineColor},function(t){this._underlineColor=t,this._isChanged=!0,this.typeset()}),e.registerBitmapFont=function(t,i){e._bitmapFonts||(e._bitmapFonts={}),e._bitmapFonts[t]=i},e.unregisterBitmapFont=function(t,i){if(void 0===i&&(i=!0),e._bitmapFonts&&e._bitmapFonts[t]){var n=e._bitmapFonts[t];i&&n.destroy(),delete e._bitmapFonts[t]}},e.setTextRightToLeft=function(){var t;(t=N.canvas.source.style).display="none",t.position="absolute",t.direction="rtl",R._mainCanvas.source.style.direction="rtl",laya.display.Text.RightToLeft=!0,N.document.body.appendChild(N.canvas.source)},e.supportFont=function(t){N.context.font="10px sans-serif";var e=N.context.measureText("abcji").width;N.context.font="10px "+t;var i=N.context.measureText("abcji").width;return console.log(e,i),e!==i},e._testWord="游",e.langPacks=null,e.VISIBLE="visible",e.SCROLL="scroll",e.HIDDEN="hidden",e.CharacterCache=!0,e.RightToLeft=!1,e._bitmapFonts=null,n(e,["_fontFamilyMap",function(){return this._fontFamilyMap={"报隶":"报隶-简","黑体":"黑体-简","楷体":"楷体-简","兰亭黑":"兰亭黑-简","隶变":"隶变-简","凌慧体":"凌慧体-简","翩翩体":"翩翩体-简","苹方":"苹方-简","手札体":"手札体-简","宋体":"宋体-简","娃娃体":"娃娃体-简","魏碑":"魏碑-简","行楷":"行楷-简","雅痞":"雅痞-简","圆体":"圆体-简"}}]),e}(ct),mt=function(t){function e(){this.focus=null,this.designWidth=0,this.designHeight=0,this.canvasRotation=!1,this.canvasDegree=0,this.renderingEnabled=!0,this.screenAdaptationEnabled=!0,this._screenMode="none",this._scaleMode="noscale",this._alignV="top",this._alignH="left",this._bgColor="black",this._mouseMoveTime=0,this._renderCount=0,this._frameStartTime=NaN,this._isFocused=!1,this._isVisibility=!1,this._scenes=null,this._frameRate="fast",e.__super.call(this),this.offset=new S,this._canvasTransform=new M,this._previousOrientation=N.window.orientation;var t=this;this.transform=M.create(),this._scenes=[],this.mouseEnabled=!0,this.hitTestPrior=!0,this.autoSize=!1,this._displayedInStage=!0,this._isFocused=!0,this._isVisibility=!0;var i=N.window,n=this;i.addEventListener("focus",function(){t._isFocused=!0,n.event("focus"),n.event("focuschange")}),i.addEventListener("blur",function(){t._isFocused=!1,n.event("blur"),n.event("focuschange"),n._isInputting()&&(xt.inputElement.target.focus=!1)});var s="visibilityState",r="visibilitychange",o=i.document;void 0!==o.hidden?(r="visibilitychange",s="visibilityState"):void 0!==o.mozHidden?(r="mozvisibilitychange",s="mozVisibilityState"):void 0!==o.msHidden?(r="msvisibilitychange",s="msVisibilityState"):void 0!==o.webkitHidden&&(r="webkitvisibilitychange",s="webkitVisibilityState"),i.document.addEventListener(r,function(){"hidden"==N.document[s]?n._setStageVisible(!1):n._setStageVisible(!0)}),i.document.addEventListener("qbrowserVisibilityChange",function(t){n._setStageVisible(!t.hidden)}),i.addEventListener("resize",function(){var e=N.window.orientation;null!=e&&e!=t._previousOrientation&&n._isInputting()&&(xt.inputElement.target.focus=!1),t._previousOrientation=e,n._isInputting()||n._resetCanvas()}),i.addEventListener("orientationchange",function(t){n._resetCanvas()}),this.on("mousemove",this,this._onmouseMove),N.onMobile&&this.on("mousedown",this,this._onmouseMove)}s(e,"laya.display.Stage",t);var a=e.prototype;return a._setStageVisible=function(t){this._isVisibility!=t&&(this._isVisibility=t,this._isVisibility||this._isInputting()&&(xt.inputElement.target.focus=!1),this.event("visibilitychange"))},a._isInputting=function(){return N.onMobile&&xt.isInputting},a._changeCanvasSize=function(){this.setScreenSize(N.clientWidth*N.pixelRatio,N.clientHeight*N.pixelRatio)},a._resetCanvas=function(){if(this.screenAdaptationEnabled){var t=R._mainCanvas;t.source.style;t.size(1,1),i.timer.once(100,this,this._changeCanvasSize)}},a.setScreenSize=function(t,e){var i=!1;if("none"!==this._screenMode){if(i=(t/e<1?"vertical":"horizontal")!==this._screenMode){var n=e;e=t,t=n}}this.canvasRotation=i;var s=R._mainCanvas,r=s.source.style,a=this._canvasTransform.identity(),h=this._scaleMode,l=t/this.designWidth,u=e/this.designHeight,c=this.designWidth,_=this.designHeight,d=t,f=e,p=N.pixelRatio;switch(this._width=this.designWidth,this._height=this.designHeight,h){case"noscale":l=u=1,d=this.designWidth,f=this.designHeight;break;case"showall":l=u=Math.min(l,u),c=d=Math.round(this.designWidth*l),_=f=Math.round(this.designHeight*u);break;case"noborder":l=u=Math.max(l,u),d=Math.round(this.designWidth*l),f=Math.round(this.designHeight*u);break;case"full":l=u=1,this._width=c=t,this._height=_=e;break;case"fixedwidth":u=l,this._height=_=Math.round(e/l);break;case"fixedheight":l=u,this._width=c=Math.round(t/u);break;case"fixedauto":t/e<this.designWidth/this.designHeight?(u=l,this._height=_=Math.round(e/l)):(l=u,this._width=c=Math.round(t/u))}this.conchModel&&this.conchModel.size(this._width,this._height),l*=this.scaleX,u*=this.scaleY,1===l&&1===u?this.transform.identity():(this.transform.a=this._formatData(l/(d/c)),this.transform.d=this._formatData(u/(f/_)),this.conchModel&&this.conchModel.scale(this.transform.a,this.transform.d)),s.size(c,_),o.changeWebGLSize(c,_),a.scale(d/c/p,f/_/p),"left"===this._alignH?this.offset.x=0:"right"===this._alignH?this.offset.x=(t-d)/p:this.offset.x=.5*(t-d)/p,"top"===this._alignV?this.offset.y=0:"bottom"===this._alignV?this.offset.y=(e-f)/p:this.offset.y=.5*(e-f)/p,this.offset.x=Math.round(this.offset.x),this.offset.y=Math.round(this.offset.y),a.translate(this.offset.x,this.offset.y),this.canvasDegree=0,i&&("horizontal"===this._screenMode?(a.rotate(Math.PI/2),a.translate(e/p,0),this.canvasDegree=90):(a.rotate(-Math.PI/2),a.translate(0,t/p),this.canvasDegree=-90)),a.a=this._formatData(a.a),a.d=this._formatData(a.d),a.tx=this._formatData(a.tx),a.ty=this._formatData(a.ty),r.transformOrigin=r.webkitTransformOrigin=r.msTransformOrigin=r.mozTransformOrigin=r.oTransformOrigin="0px 0px 0px",r.transform=r.webkitTransform=r.msTransform=r.mozTransform=r.oTransform="matrix("+a.toString()+")",a.translate(parseInt(r.left)||0,parseInt(r.top)||0),this.visible=!0,this._repaint=1,this.event("resize")},a._formatData=function(t){return Math.abs(t)<1e-6?0:Math.abs(1-t)<.001?t>0?1:-1:t},a.getMousePoint=function(){return S.TEMP.setTo(this.mouseX,this.mouseY)},a.repaint=function(){this._repaint=1},a.parentRepaint=function(){},a._loop=function(){return this.render(R.context,0,0),!0},a._onmouseMove=function(t){this._mouseMoveTime=N.now()},a.getTimeFromFrameStart=function(){return N.now()-this._frameStartTime},a.render=function(e,n,s){if("sleep"===this._frameRate&&!R.isConchApp){var r=N.now();if(!(r-this._frameStartTime>=1e3))return;this._frameStartTime=r}if(this._renderCount++,R.isFlash&&this.repaint(),this._style.visible){this._frameStartTime=N.now();var a="slow"!==("mouse"===this._frameRate?this._frameStartTime-this._mouseMoveTime<2e3?"fast":"slow":this._frameRate),h=this._renderCount%2==0;if($.renderSlow=!a,a||h||R.isConchApp){$.loopCount++,v.instance.runEvent(),i.timer._update(),o.update3DLoop();var l,u=0,c=0;if(R.isConchNode)for(u=0,c=this._scenes.length;u<c;u++)(l=this._scenes[u])&&l._updateSceneConch();else for(u=0,c=this._scenes.length;u<c;u++)(l=this._scenes[u])&&l._updateScene();if(R.isConchNode){var _=ct.CustomList;for(u=0,c=_.length;u<c;u++){var d=_[u];d.customRender(d.customContext,0,0)}return}}R.isConchNode||!this.renderingEnabled||!a&&h||(R.isWebGL?(e.clear(),t.prototype.render.call(this,e,n,s),$._show&&$._sp&&$._sp.render(e,n,s),o.clear(this._bgColor),o.beginFlush(),e.flush(),o.endFinish(),q.instance&&q.getInstance().endDispose()):(o.clear(this._bgColor),t.prototype.render.call(this,e,n,s),$._show&&$._sp&&$._sp.render(e,n,s)))}else this._renderCount%5==0&&($.loopCount++,v.instance.runEvent(),i.timer._update())},a._requestFullscreen=function(){var t=N.document.documentElement;t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen()},a._fullScreenChanged=function(){i.stage.event("fullscreenchange")},a.exitFullscreen=function(){var t=N.document;t.exitFullscreen?t.exitFullscreen():t.mozCancelFullScreen?t.mozCancelFullScreen():t.webkitExitFullscreen&&t.webkitExitFullscreen()},r(0,a,"clientScaleX",function(){return this._transform?this._transform.getScaleX():1}),r(0,a,"desginHeight",function(){return console.debug("desginHeight已经弃用，请使用designHeight代替"),this.designHeight}),r(0,a,"frameRate",function(){return this._frameRate},function(t){if(this._frameRate=t,R.isConchApp)switch(this._frameRate){case"slow":N.window.conch&&N.window.conchConfig.setSlowFrame&&N.window.conchConfig.setSlowFrame(!0);break;case"fast":N.window.conch&&N.window.conchConfig.setSlowFrame&&N.window.conchConfig.setSlowFrame(!1);break;case"mouse":N.window.conch&&N.window.conchConfig.setMouseFrame&&N.window.conchConfig.setMouseFrame(2e3);break;case"sleep":N.window.conch&&N.window.conchConfig.setLimitFPS&&N.window.conchConfig.setLimitFPS(1);break;default:throw new Error("Stage:frameRate invalid.")}}),r(0,a,"clientScaleY",function(){return this._transform?this._transform.getScaleY():1}),r(0,a,"width",t.prototype._$get_width,function(t){this.designWidth=t,i.superSet(ct,this,"width",t),i.timer.callLater(this,this._changeCanvasSize)}),r(0,a,"alignH",function(){return this._alignH},function(t){this._alignH=t,i.timer.callLater(this,this._changeCanvasSize)}),r(0,a,"isFocused",function(){return this._isFocused}),r(0,a,"height",t.prototype._$get_height,function(t){this.designHeight=t,i.superSet(ct,this,"height",t),i.timer.callLater(this,this._changeCanvasSize)}),r(0,a,"transform",function(){return this._tfChanged&&this._adjustTransform(),this._transform=this._transform||M.create()},t.prototype._$set_transform),r(0,a,"isVisibility",function(){return this._isVisibility}),r(0,a,"desginWidth",function(){return console.debug("desginWidth已经弃用，请使用designWidth代替"),this.designWidth}),r(0,a,"scaleMode",function(){return this._scaleMode},function(t){this._scaleMode=t,i.timer.callLater(this,this._changeCanvasSize)}),r(0,a,"alignV",function(){return this._alignV},function(t){this._alignV=t,i.timer.callLater(this,this._changeCanvasSize)}),r(0,a,"bgColor",function(){return this._bgColor},function(t){this._bgColor=t,this.conchModel&&this.conchModel.bgColor(t),R.isWebGL&&(t?e._wgColor=U.create(t)._color:N.onMiniGame||(e._wgColor=null)),N.onLimixiu?e._wgColor=U.create(t)._color:R.canvas.style.background=t||"none"}),r(0,a,"mouseX",function(){return Math.round(v.instance.mouseX/this.clientScaleX)}),r(0,a,"mouseY",function(){return Math.round(v.instance.mouseY/this.clientScaleY)}),r(0,a,"screenMode",function(){return this._screenMode},function(t){this._screenMode=t}),r(0,a,"visible",t.prototype._$get_visible,function(t){if(this.visible!==t){i.superSet(ct,this,"visible",t);R._mainCanvas.source.style.visibility=t?"visible":"hidden"}}),r(0,a,"fullScreenEnabled",null,function(t){var e=N.document,i=R.canvas;t?(i.addEventListener("mousedown",this._requestFullscreen),i.addEventListener("touchstart",this._requestFullscreen),e.addEventListener("fullscreenchange",this._fullScreenChanged),e.addEventListener("mozfullscreenchange",this._fullScreenChanged),e.addEventListener("webkitfullscreenchange",this._fullScreenChanged),e.addEventListener("msfullscreenchange",this._fullScreenChanged)):(i.removeEventListener("mousedown",this._requestFullscreen),i.removeEventListener("touchstart",this._requestFullscreen),e.removeEventListener("fullscreenchange",this._fullScreenChanged),e.removeEventListener("mozfullscreenchange",this._fullScreenChanged),e.removeEventListener("webkitfullscreenchange",this._fullScreenChanged),e.removeEventListener("msfullscreenchange",this._fullScreenChanged))}),e.SCALE_NOSCALE="noscale",e.SCALE_EXACTFIT="exactfit",e.SCALE_SHOWALL="showall",e.SCALE_NOBORDER="noborder",e.SCALE_FULL="full",e.SCALE_FIXED_WIDTH="fixedwidth",e.SCALE_FIXED_HEIGHT="fixedheight",e.SCALE_FIXED_AUTO="fixedauto",e.ALIGN_LEFT="left",e.ALIGN_RIGHT="right",e.ALIGN_CENTER="center",e.ALIGN_TOP="top",e.ALIGN_MIDDLE="middle",e.ALIGN_BOTTOM="bottom",e.SCREEN_NONE="none",e.SCREEN_HORIZONTAL="horizontal",e.SCREEN_VERTICAL="vertical",e.FRAME_FAST="fast",e.FRAME_SLOW="slow",e.FRAME_MOUSE="mouse",e.FRAME_SLEEP="sleep",e.FRAME_MOUSE_THREDHOLD=2e3,n(e,["_wgColor",function(){return this._wgColor=[0,0,0,1]}]),e}(ct),vt=(function(t){function e(){this.url=null,this._channel=null,this._tar=null,this._playEvents=null,this._stopEvents=null,e.__super.call(this),this.visible=!1,this.on("added",this,this._onParentChange),this.on("removed",this,this._onParentChange)}s(e,"laya.media.SoundNode",ct);var i=e.prototype;i._onParentChange=function(){this.target=this.parent},i.play=function(t,e){void 0===t&&(t=1),isNaN(t)&&(t=1),this.url&&(this.stop(),this._channel=E.playSound(this.url,t,e))},i.stop=function(){this._channel&&!this._channel.isStopped&&this._channel.stop(),this._channel=null},i._setPlayAction=function(t,e,i,n){void 0===n&&(n=!0),this[i]&&t&&(n?t.on(e,this,this[i]):t.off(e,this,this[i]))},i._setPlayActions=function(t,e,i,n){if(void 0===n&&(n=!0),t&&e){var s=e.split(","),r=0,o=0;for(o=s.length,r=0;r<o;r++)this._setPlayAction(t,s[r],i,n)}},r(0,i,"playEvent",null,function(t){this._playEvents=t,t&&this._tar&&this._setPlayActions(this._tar,t,"play")}),r(0,i,"target",null,function(t){this._tar&&(this._setPlayActions(this._tar,this._playEvents,"play",!1),this._setPlayActions(this._tar,this._stopEvents,"stop",!1)),this._tar=t,this._tar&&(this._setPlayActions(this._tar,this._playEvents,"play",!0),this._setPlayActions(this._tar,this._stopEvents,"stop",!0))}),r(0,i,"stopEvent",null,function(t){this._stopEvents=t,t&&this._tar&&this._setPlayActions(this._tar,t,"stop")})}(),function(t){function e(){this._src=null,this._onload=null,this._onerror=null,e.__super.call(this)}s(e,"laya.resource.FileBitmap",ft);var i=e.prototype;return r(0,i,"src",function(){return this._src},function(t){this._src=t}),r(0,i,"onload",null,function(t){}),r(0,i,"onerror",null,function(t){}),e}()),yt=function(t){function e(t,i){this._is2D=!1,e.__super.call(this);var n=this;if(this._source=this,"2D"===t||"AUTO"===t&&!R.isWebGL){this._is2D=!0,this._source=i||N.createElement("canvas"),this._w=this._source.width,this._h=this._source.height;var s=this;s.getContext=function(t,e){if(n._ctx)return n._ctx;var i=n._ctx=n._source.getContext(t,e);return i&&(i._canvas=s,R.isFlash||N.onLimixiu||(i.size=function(t,e){})),i}}this.lock=!0}s(e,"laya.resource.HTMLCanvas",ft);var i=e.prototype;return i.clear=function(){this._ctx&&this._ctx.clear()},i.destroy=function(){this._ctx&&this._ctx.destroy(),this._ctx=null,laya.resource.Resource.prototype.destroy.call(this)},i.release=function(){},i._setContext=function(t){this._ctx=t},i.getContext=function(t,i){return this._ctx?this._ctx:this._ctx=e._createContext(this)},i.getMemSize=function(){return 0},i.size=function(t,e){(this._w!=t||this._h!=e||this._source&&(this._source.width!=t||this._source.height!=e))&&(this._w=t,this._h=e,this.memorySize=this._w*this._h*4,this._ctx&&this._ctx.size(t,e),this._source&&(this._source.height=e,this._source.width=t))},i.getCanvas=function(){return this._source},i.toBase64=function(t,e,i){if(this._source)if(R.isConchApp&&this._source.toBase64)this._source.toBase64(t,e,i);else{var n=this._source.toDataURL(t,e);i.call(this,n)}},r(0,i,"context",function(){return this._ctx}),r(0,i,"asBitmap",null,function(t){}),e.create=function(t,i){return new e(t,i)},e.TYPE2D="2D",e.TYPE3D="3D",e.TYPEAUTO="AUTO",e._createContext=null,e}(),wt=(function(t){function e(t,i,n,s,r,o,a,h){throw e.__super.call(this),new Error("不允许new！")}s(e,"laya.resource.HTMLSubImage",ft),e.create=function(t,i,n,s,r,o,a,h){return void 0===h&&(h=!1),new e(t,i,n,s,r,o,a,h)}}(),function(t){function e(){this._frames=null,this._url=null,e.__super.call(this),this._setControlNode(this)}s(e,"laya.display.Animation",t);var n=e.prototype;n.destroy=function(t){void 0===t&&(t=!0),this.stop(),laya.display.Sprite.prototype.destroy.call(this,t),this._frames=null,this._labels=null},n.play=function(t,e,i,n){void 0===t&&(t=0),void 0===e&&(e=!0),void 0===i&&(i=""),void 0===n&&(n=!0),i&&this._setFramesFromCache(i,n),this._isPlaying=!0,this.index="string"==typeof t?this._getFrameByLabel(t):t,this.loop=e,this._actionName=i,this._isReverse=1==this.wrapMode,this._frames&&this.interval>0&&this.timerLoop(this.interval,this,this._frameLoop,null,!0,!0)},n._setFramesFromCache=function(t,i){if(void 0===i&&(i=!1),this._url&&(t=this._url+"#"+t),t&&e.framesMap[t]){var n;return(n=e.framesMap[t])instanceof Array?(this._frames=e.framesMap[t],this._count=this._frames.length):(n.nodeRoot&&(e.framesMap[t]=this._parseGraphicAnimationByData(n),n=e.framesMap[t]),this._frames=n.frames,this._count=this._frames.length,this._frameRateChanged||(this._interval=n.interval),this._labels=this._copyLabels(n.labels)),!0}return i&&console.log("ani not found:",t),!1},n._copyLabels=function(t){if(!t)return null;var e;e={};var i;for(i in t)e[i]=K.copyArray([],t[i]);return e},n._frameLoop=function(){this._style.visible&&this._style.alpha>.01&&t.prototype._frameLoop.call(this)},n._displayToIndex=function(t){this._frames&&(this.graphics=this._frames[t])},n.clear=function(){this.stop(),this.graphics=null,this._frames=null,this._labels=null},n.loadImages=function(t,i){return void 0===i&&(i=""),this._url="",this._setFramesFromCache(i)||(this.frames=e.framesMap[i]?e.framesMap[i]:e.createFrames(t,i)),this},n.loadAtlas=function(t,n,s){function r(i){t===i&&(o.frames=e.framesMap[s]?e.framesMap[s]:e.createFrames(t,s),n&&n.run())}void 0===s&&(s=""),this._url="";var o=this;return o._setFramesFromCache(s)||(ot.getAtlas(t)?r(t):i.loader.load(t,l.create(null,r,[t]),null,"atlas")),this},n.loadAnimation=function(t,e,n){this._url=t;return this._actionName||(this._actionName=""),this._setFramesFromCache("")?(this._setFramesFromCache(this._actionName,!0),this.index=0,e&&e.run()):!n||ot.getAtlas(n)?this._loadAnimationData(t,e,n):i.loader.load(n,l.create(this,this._loadAnimationData,[t,e,n]),null,"atlas"),this},n._loadAnimationData=function(t,n,s){function r(i){if(ot.getRes(i)&&t===i){var s;if(e.framesMap[t+"#"])a._setFramesFromCache(o._actionName,!0),o.index=0,o._checkResumePlaying();else{var r=a._parseGraphicAnimation(ot.getRes(t));if(!r)return;var h,l=r.animationList,u=0,c=l.length;for(u=0;u<c;u++)s=l[u],e.framesMap[t+"#"+s.name]=s,h||(h=s);h&&(e.framesMap[t+"#"]=h,a._setFramesFromCache(o._actionName,!0),o.index=0),o._checkResumePlaying()}n&&n.run()}}var o=this;if(!s||ot.getAtlas(s)){var a=this;ot.getRes(t)?r(t):i.loader.load(t,l.create(null,r,[t]),null,"json"),ot.clearRes(t)}else console.warn("atlas load fail:"+s)},n._parseGraphicAnimation=function(t){return bt.parseAnimationData(t)},n._parseGraphicAnimationByData=function(t){return bt.parseAnimationByData(t)},r(0,n,"frames",function(){return this._frames},function(t){this._frames=t,t&&(this._count=t.length,this._isPlaying?this.play(this._index,this.loop,this._actionName):this.index=this._index)}),r(0,n,"autoPlay",null,function(t){t?this.play():this.stop()}),r(0,n,"source",null,function(t){t.indexOf(".ani")>-1?this.loadAnimation(t):t.indexOf(".json")>-1||t.indexOf("als")>-1||t.indexOf("atlas")>-1?this.loadAtlas(t):this.loadImages(t.split(","))}),r(0,n,"autoAnimation",null,function(t){this.play(0,!0,t,!1)}),e.createFrames=function(t,i){var n,s,r=0,a=0;if("string"==typeof t){var h=ot.getAtlas(t);if(h&&h.length)for(n=[],r=0,a=h.length;r<a;r++)(s=new o.createGraphics).drawTexture(ot.getRes(h[r]),0,0),n.push(s)}else if(t instanceof Array)for(n=[],r=0,a=t.length;r<a;r++)(s=new o.createGraphics).loadImage(t[r],0,0),n.push(s);return i&&(e.framesMap[i]=n),n},e.clearCache=function(t){var i,n=e.framesMap,s=t+"#";for(i in n)i!==t&&0!=i.indexOf(s)||delete e.framesMap[i]},e.framesMap={}}(pt),function(t){function e(){this._targetDic=null,this._animationData=null,this._animationNewFrames=null,e.__super.call(this),null==e._sortIndexFun&&(e._sortIndexFun=C.sortByKey("index",!1,!0))}s(e,"laya.display.FrameAnimation",t);var i=e.prototype;return i._setUp=function(t,e){this._labels=null,this._animationNewFrames=null,this._targetDic=t,this._animationData=e,this.interval=1e3/e.frameRate,e.parsed?(this._count=e.count,this._labels=e.labels,this._animationNewFrames=e.animationNewFrames):(this._animationNewFrames=[],this._calculateDatas()),e.parsed=!0,e.labels=this._labels,e.count=this._count,e.animationNewFrames=this._animationNewFrames},i.clear=function(){t.prototype.clear.call(this),this._targetDic=null,this._animationData=null},i._displayToIndex=function(t){if(this._animationData){t<0&&(t=0),t>this._count&&(t=this._count);var e=this._animationData.nodes,i=0,n=e.length;for(i=0;i<n;i++)this._displayNodeToFrame(e[i],t)}},i._displayNodeToFrame=function(t,e,i){i||(i=this._targetDic);var n=i[t.target];if(n){var s,r,o,a=t.frames,h=t.keys,l=0,u=h.length;for(l=0;l<u;l++)o=(r=a[s=h[l]]).length>e?r[e]:r[r.length-1],n[s]=o}},i._calculateDatas=function(){if(this._animationData){var t,e=this._animationData.nodes,i=0,n=e.length;for(this._count=0,i=0;i<n;i++)t=e[i],this._calculateNodeKeyFrames(t);this._count+=1}},i._calculateNodeKeyFrames=function(t){var i,n,s=t.keyframes,r=t.target;t.frames||(t.frames={}),t.keys?t.keys.length=0:t.keys=[],t.initValues||(t.initValues={});for(i in s)n=s[i],t.frames[i]||(t.frames[i]=[]),this._targetDic&&this._targetDic[r]&&(t.initValues[i]=this._targetDic[r][i]),n.sort(e._sortIndexFun),t.keys.push(i),this._calculateNodePropFrames(n,t.frames[i],i,r)},i.resetToInitState=function(){if(this._targetDic&&this._animationData){var t,e,i=this._animationData.nodes,n=0,s=i.length;for(n=0;n<s;n++)if(t=i[n],e=t.initValues){var r=this._targetDic[t.target];if(r){var o;for(o in e)r[o]=e[o]}}}},i._calculateNodePropFrames=function(t,e,i,n){var s=0,r=t.length-1;for(e.length=t[r].index+1,s=0;s<r;s++)this._dealKeyFrame(t[s]),this._calculateFrameValues(t[s],t[s+1],e);0==r&&(e[0]=t[0].value,this._animationNewFrames&&(this._animationNewFrames[t[0].index]=!0)),this._dealKeyFrame(t[s])},i._dealKeyFrame=function(t){t.label&&""!=t.label&&this.addLabel(t.label,t.index)},i._calculateFrameValues=function(t,e,i){var n,s=0,r=t.index,o=e.index,a=t.value,h=e.value-t.value,l=o-r;if(o>this._count&&(this._count=o),t.tween)for(null==(n=Y[t.tweenMethod])&&(n=Y.linearNone),s=r;s<o;s++)i[s]=n(s-r,a,h,l),this._animationNewFrames&&(this._animationNewFrames[s]=!0);else for(s=r;s<o;s++)i[s]=a;this._animationNewFrames&&(this._animationNewFrames[t.index]=!0,this._animationNewFrames[e.index]=!0),i[e.index]=e.value},e._sortIndexFun=null,e}(pt)),xt=function(t){function e(){this._focus=!1,this._multiline=!1,this._editable=!0,this._restrictPattern=null,this._type="text",this._prompt="",this._promptColor="#A9A9A9",this._originColor="#000000",this._content="",e.__super.call(this),this._maxChars=1e5,this._width=100,this._height=20,this.multiline=!1,this.overflow=gt.SCROLL,this.on("mousedown",this,this._onMouseDown),this.on("undisplay",this,this._onUnDisplay)}s(e,"laya.display.Input",t);var o=e.prototype;return o.setSelection=function(t,e){this.focus=!0,laya.display.Input.inputElement.selectionStart=t,laya.display.Input.inputElement.selectionEnd=e},o._onUnDisplay=function(t){this.focus=!1},o._onMouseDown=function(t){this.focus=!0},o._syncInputTransform=function(){var t=this.nativeInput,n=K.getTransformRelativeToWindow(this,this.padding[3],this.padding[0]),s=this._width-this.padding[1]-this.padding[3],r=this._height-this.padding[0]-this.padding[2];R.isConchApp?(t.setScale(n.scaleX,n.scaleY),t.setSize(s,r),t.setPos(n.x,n.y)):(e.inputContainer.style.transform=e.inputContainer.style.webkitTransform="scale("+n.scaleX+","+n.scaleY+") rotate("+i.stage.canvasDegree+"deg)",t.style.width=s+"px",t.style.height=r+"px",e.inputContainer.style.left=n.x+"px",e.inputContainer.style.top=n.y+"px")},o.select=function(){this.nativeInput.select()},o._setInputMethod=function(){e.input.parentElement&&e.inputContainer.removeChild(e.input),e.area.parentElement&&e.inputContainer.removeChild(e.area),e.inputElement=this._multiline?e.area:e.input,e.inputContainer.appendChild(e.inputElement),gt.RightToLeft&&(e.inputElement.style.direction="rtl")},o._focusIn=function(){laya.display.Input.isInputting=!0;var t=this.nativeInput;this._focus=!0;var e=t.style;e.whiteSpace=this.wordWrap?"pre-wrap":"nowrap",this._setPromptColor(),t.readOnly=!this._editable,R.isConchApp&&(t.setType(this._type),t.setForbidEdit(!this._editable)),t.maxLength=this._maxChars;this.padding;if(t.type=this._type,t.value=this._content,t.placeholder=this._prompt,i.stage.off("keydown",this,this._onKeyDown),i.stage.on("keydown",this,this._onKeyDown),i.stage.focus=this,this.event("focus"),N.onPC&&t.focus(),!N.onMiniGame){this._text;this._text=null}this.typeset(),t.setColor(this._originColor),t.setFontSize(this.fontSize),t.setFontFace(N.onIPhone?gt._fontFamilyMap[this.font]||this.font:this.font),R.isConchApp&&t.setMultiAble&&t.setMultiAble(this._multiline),e.lineHeight=this.leading+this.fontSize+"px",e.fontStyle=this.italic?"italic":"normal",e.fontWeight=this.bold?"bold":"normal",e.textAlign=this.align,e.padding="0 0",this._syncInputTransform(),!R.isConchApp&&N.onPC&&i.timer.frameLoop(1,this,this._syncInputTransform)},o._setPromptColor=function(){(e.promptStyleDOM=N.getElementById("promptStyle"))||((e.promptStyleDOM=N.createElement("style")).setAttribute("id","promptStyle"),N.document.head.appendChild(e.promptStyleDOM)),e.promptStyleDOM.innerText="input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {color:"+this._promptColor+"}input:-moz-placeholder, textarea:-moz-placeholder {color:"+this._promptColor+"}input::-moz-placeholder, textarea::-moz-placeholder {color:"+this._promptColor+"}input:-ms-input-placeholder, textarea:-ms-input-placeholder {color:"+this._promptColor+"}"},o._focusOut=function(){laya.display.Input.isInputting=!1,this._focus=!1,this._text=null,this._content=this.nativeInput.value,this._content?(i.superSet(gt,this,"text",this._content),i.superSet(gt,this,"color",this._originColor)):(i.superSet(gt,this,"text",this._prompt),i.superSet(gt,this,"color",this._promptColor)),i.stage.off("keydown",this,this._onKeyDown),i.stage.focus=null,this.event("blur"),R.isConchApp&&this.nativeInput.blur(),N.onPC&&i.timer.clear(this,this._syncInputTransform)},o._onKeyDown=function(t){13===t.keyCode&&(N.onMobile&&!this._multiline&&(this.focus=!1),this.event("enter"))},o.changeText=function(e){this._content=e,this._focus?(this.nativeInput.value=e||"",this.event("change")):t.prototype.changeText.call(this,e)},r(0,o,"color",t.prototype._$get_color,function(t){this._focus&&this.nativeInput.setColor(t),i.superSet(gt,this,"color",this._content?t:this._promptColor),this._originColor=t}),r(0,o,"inputElementYAdjuster",function(){return console.warn("deprecated: 由于即使设置了该值，在各平台和浏览器之间也不一定一致，inputElementYAdjuster已弃用。"),0},function(t){console.warn("deprecated: 由于即使设置了该值，在各平台和浏览器之间也不一定一致，inputElementYAdjuster已弃用。")}),r(0,o,"multiline",function(){return this._multiline},function(t){this._multiline=t,this.valign=t?"top":"middle"}),r(0,o,"maxChars",function(){return this._maxChars},function(t){t<=0&&(t=1e5),this._maxChars=t}),r(0,o,"text",function(){return this._focus?this.nativeInput.value:this._content||""},function(t){i.superSet(gt,this,"color",this._originColor),t+="",this._focus?(this.nativeInput.value=t||"",this.event("change")):(this._multiline||(t=t.replace(/\r?\n/g,"")),this._content=t,t?i.superSet(gt,this,"text",t):(i.superSet(gt,this,"text",this._prompt),i.superSet(gt,this,"color",this.promptColor)))}),r(0,o,"nativeInput",function(){return this._multiline?e.area:e.input}),r(0,o,"prompt",function(){return this._prompt},function(t){!this._text&&t&&i.superSet(gt,this,"color",this._promptColor),this.promptColor=this._promptColor,this._text?i.superSet(gt,this,"text",this._text==this._prompt?t:this._text):i.superSet(gt,this,"text",t),this._prompt=gt.langPacks&&gt.langPacks[t]?gt.langPacks[t]:t}),r(0,o,"focus",function(){return this._focus},function(t){var i=this.nativeInput;this._focus!==t&&(t?(i.target?i.target._focusOut():this._setInputMethod(),i.target=this,this._focusIn()):(i.target=null,this._focusOut(),N.document.body.scrollTop=0,i.blur(),R.isConchApp?i.setPos(-1e4,-1e4):e.inputContainer.contains(i)&&e.inputContainer.removeChild(i)))}),r(0,o,"restrict",function(){return this._restrictPattern?this._restrictPattern.source:""},function(t){t?((t="[^"+t+"]").indexOf("^^")>-1&&(t=t.replace("^^","")),this._restrictPattern=new RegExp(t,"g")):this._restrictPattern=null}),r(0,o,"editable",function(){return this._editable},function(t){this._editable=t,R.isConchApp&&e.input.setForbidEdit(!t)}),r(0,o,"promptColor",function(){return this._promptColor},function(t){this._promptColor=t,this._content||i.superSet(gt,this,"color",t)}),r(0,o,"type",function(){return this._type},function(t){this._getCSSStyle().password="password"==t,this._type=t,R.isConchApp&&this.nativeInput.setType(t)}),r(0,o,"inputElementXAdjuster",function(){return console.warn("deprecated: 由于即使设置了该值，在各平台和浏览器之间也不一定一致，inputElementXAdjuster已弃用。"),0},function(t){console.warn("deprecated: 由于即使设置了该值，在各平台和浏览器之间也不一定一致，inputElementXAdjuster已弃用。")}),r(0,o,"asPassword",function(){return this._getCSSStyle().password},function(t){this._getCSSStyle().password=t,this._type="password",console.warn('deprecated: 使用type="password"替代设置asPassword, asPassword将在下次重大更新时删去'),this.isChanged=!0}),e.__init__=function(){e._createInputElement(),N.onMobile&&R.canvas.addEventListener(e.IOS_IFRAME?N.onMiniGame?"touchend":"click":"touchend",e._popupInputMethod)},e._popupInputMethod=function(t){if(laya.display.Input.isInputting){laya.display.Input.inputElement.focus()}},e._createInputElement=function(){e._initInput(e.area=N.createElement("textarea")),e._initInput(e.input=N.createElement("input")),(e.inputContainer=N.createElement("div")).style.position="absolute",e.inputContainer.style.zIndex=1e5,N.container.appendChild(e.inputContainer),e.inputContainer.setPos=function(t,i){e.inputContainer.style.left=t+"px",e.inputContainer.style.top=i+"px"}},e._initInput=function(t){var i=t.style;i.cssText="position:absolute;overflow:hidden;resize:none;transform-origin:0 0;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-o-transform-origin:0 0;",i.resize="none",i.backgroundColor="transparent",i.border="none",i.outline="none",i.zIndex=1,t.addEventListener("input",e._processInputting),t.addEventListener("mousemove",e._stopEvent),t.addEventListener("mousedown",e._stopEvent),t.addEventListener("touchmove",e._stopEvent),t.setFontFace=function(e){t.style.fontFamily=e},R.isConchApp||(t.setColor=function(e){t.style.color=e},t.setFontSize=function(e){t.style.fontSize=e+"px"})},e._processInputting=function(t){var e=laya.display.Input.inputElement.target;if(e){var i=laya.display.Input.inputElement.value;e._restrictPattern&&(i=i.replace(/\u2006|\x27/g,""),e._restrictPattern.test(i)&&(i=i.replace(e._restrictPattern,""),laya.display.Input.inputElement.value=i)),e._text=i,e.event("input")}},e._stopEvent=function(t){"touchmove"==t.type&&t.preventDefault(),t.stopPropagation&&t.stopPropagation()},e.TYPE_TEXT="text",e.TYPE_PASSWORD="password",e.TYPE_EMAIL="email",e.TYPE_URL="url",e.TYPE_NUMBER="number",e.TYPE_RANGE="range",e.TYPE_DATE="date",e.TYPE_MONTH="month",e.TYPE_WEEK="week",e.TYPE_TIME="time",e.TYPE_DATE_TIME="datetime",e.TYPE_DATE_TIME_LOCAL="datetime-local",e.TYPE_SEARCH="search",e.input=null,e.area=null,e.inputElement=null,e.inputContainer=null,e.confirmButton=null,e.promptStyleDOM=null,e.inputHeight=45,e.isInputting=!1,e.stageMatrix=null,n(e,["IOS_IFRAME",function(){return this.IOS_IFRAME=N.onIOS&&N.window.top!=N.window.self}]),e}(gt),Tt=function(t){function e(t,i){this._recreateLock=!1,this._needReleaseAgain=!1,this._enableMerageInAtlas=!0,e.__super.call(this),this._init_(t,i)}s(e,"laya.resource.HTMLImage",vt);var i=e.prototype;return i._init_=function(t,e){this._src=t,this._source=new N.window.Image,e&&(e.onload&&(this.onload=e.onload),e.onerror&&(this.onerror=e.onerror),e.onCreate&&e.onCreate(this)),0!=t.indexOf("data:image")&&(this._source.crossOrigin=""),t&&(this._source.src=t)},i.recreateResource=function(){var t=this;if(""===this._src)throw new Error("src no null！");if(this._needReleaseAgain=!1,this._source){if(this._recreateLock)return;this.memorySize=this._w*this._h*4,this._recreateLock=!1,this.completeCreate()}else{this._recreateLock=!0;var e=this;this._source=new N.window.Image,this._source.crossOrigin="",this._source.onload=function(){if(e._needReleaseAgain)return e._needReleaseAgain=!1,e._source.onload=null,void(e._source=null);e._source.onload=null,e.memorySize=t._w*t._h*4,e._recreateLock=!1,e.completeCreate()},this._source.src=this._src}},i.disposeResource=function(){this._recreateLock&&(this._needReleaseAgain=!0),this._source&&(this._source=null,this.memorySize=0)},i.onresize=function(){this._w=this._source.width,this._h=this._source.height},r(0,i,"onload",null,function(t){var e=this;this._onload=t,this._source&&(this._source.onload=null!=this._onload?function(){e.onresize(),e._onload()}:null)}),r(0,i,"onerror",null,function(t){var e=this;this._onerror=t,this._source&&(this._source.onerror=null!=this._onerror?function(){e._onerror()}:null)}),r(0,i,"enableMerageInAtlas",function(){return this._enableMerageInAtlas},function(t){this._enableMerageInAtlas=t,R.isConchApp&&this._source&&(this._source.enableMerageInAtlas=t)}),e.create=function(t,i){return new e(t,i)},e}(),bt=(function(t){function e(){this._target=null,this._playEvents=null,this._initData={},this._aniKeys=null,this._effectClass=null,e.__super.call(this)}s(e,"laya.display.EffectAnimation",t);var i=e.prototype;i._onOtherBegin=function(t){t!=this&&this.stop()},i.addEvent=function(){this._target&&this._playEvents&&(this._setControlNode(this._target),this._target.on(this._playEvents,this,this._onPlayAction))},i._onPlayAction=function(){this.play(0,!1)},i.play=function(t,e,i,n){void 0===t&&(t=0),void 0===e&&(e=!0),void 0===i&&(i=""),void 0===n&&(n=!0),this._target&&(this._target.event("effectanimationbegin",[this]),this._recordInitData(),laya.display.AnimationPlayerBase.prototype.play.call(this,t,e,i,n))},i._recordInitData=function(){if(this._aniKeys){var t=0,e=0;e=this._aniKeys.length;var i;for(t=0;t<e;t++)i=this._aniKeys[t],this._initData[i]=this._target[i]}},i._displayToIndex=function(t){if(this._animationData){t<0&&(t=0),t>this._count&&(t=this._count);var e=this._animationData.nodes,i=0,n=e.length;for(n=n>1?1:n,i=0;i<n;i++)this._displayNodeToFrame(e[i],t)}},i._displayNodeToFrame=function(t,e,i){if(this._target){var n;n=this._target;var s,r,o,a,h=t.frames,l=t.keys,u=0,c=l.length;a=t.secondFrames;var _,d,f,p,g=0;for(u=0;u<c;u++)r=h[s=l[u]],-1==(g=a[s])?o=this._initData[s]:e<g?(f=(d=t.keyframes[s])[0]).tween?(null==(_=Y[f.tweenMethod])&&(_=Y.linearNone),p=d[1],o=_(e,this._initData[s],p.value-this._initData[s],p.index)):o=this._initData[s]:o=r.length>e?r[e]:r[r.length-1],n[s]=o}},i._calculateNodeKeyFrames=function(e){t.prototype._calculateNodeKeyFrames.call(this,e);var i,n,s,r=e.keyframes;e.target;s={},e.secondFrames=s;for(i in r)(n=r[i]).length<=1?s[i]=-1:s[i]=n[1].index},r(0,i,"target",function(){return this._target},function(t){this._target&&this._target.off("effectanimationbegin",this,this._onOtherBegin),this._target=t,this._target&&this._target.on("effectanimationbegin",this,this._onOtherBegin),this.addEvent()}),r(0,i,"playEvent",null,function(t){this._playEvents=t,t&&this.addEvent()}),r(0,i,"effectData",null,function(t){if(t){var e;(e=t.animations)&&e[0]&&(this._setUp({},e[0]),e[0].nodes&&e[0].nodes[0]&&(this._aniKeys=e[0].nodes[0].keys))}}),r(0,i,"effectClass",null,function(t){if(this._effectClass=G.getClass(t),this._effectClass){var e;if(e=this._effectClass.uiView){var i;(i=e.animations)&&i[0]&&(this._setUp({},i[0]),i[0].nodes&&i[0].nodes[0]&&(this._aniKeys=i[0].nodes[0].keys))}}}),e.EffectAnimationBegin="effectanimationbegin"}(wt),function(t){function e(){this.animationList=null,this.animationDic=null,this._nodeList=null,this._nodeDefaultProps=null,this._gList=null,this._nodeIDAniDic={},this._rootNode=null,this._nodeGDic=null,e.__super.call(this)}var i;s(e,"laya.utils.GraphicAnimation",t);var r=e.prototype;return r._parseNodeList=function(t){this._nodeList||(this._nodeList=[]),this._nodeDefaultProps[t.compId]=t.props,t.compId&&this._nodeList.push(t.compId);var e=t.child;if(e){var i=0,n=e.length;for(i=0;i<n;i++)this._parseNodeList(e[i])}},r._calGraphicData=function(t){if(this._setUp(null,t),this._createGraphicData(),this._nodeIDAniDic){var e;for(e in this._nodeIDAniDic)this._nodeIDAniDic[e]=null}},r._createGraphicData=function(){var t=[],e=0,i=this.count,n=this._animationNewFrames;n||(n=[]);var s;for(e=0;e<i;e++)!n[e]&&s||(s=this._createFrameGraphic(e)),t.push(s);this._gList=t},r._createFrameGraphic=function(t){var i=o.createGraphics();return e._rootMatrix||(e._rootMatrix=new M),this._updateNodeGraphic(this._rootNode,t,e._rootMatrix,i),i},r._updateNodeGraphic=function(t,e,i,n,s){void 0===s&&(s=1);var r,o=(r=this._nodeGDic[t.compId]=this._getNodeGraphicData(t.compId,e,this._nodeGDic[t.compId])).alpha*s;if(!(o<.01)){r.resultTransform||(r.resultTransform=M.create());var a;a=r.resultTransform,M.mul(r.transform,i,a);var h;r.skin&&(h=this._getTextureByUrl(r.skin))&&(a._checkTransform()?(n.drawTexture(h,0,0,r.width,r.height,a,o),r.resultTransform=null):n.drawTexture(h,a.tx,a.ty,r.width,r.height,null,o));var l;if(l=t.child){var u=0,c=0;for(c=l.length,u=0;u<c;u++)this._updateNodeGraphic(l[u],e,a,n,o)}}},r._updateNoChilds=function(t,e){if(t.skin){var i=this._getTextureByUrl(t.skin);if(i){var n=t.transform;n._checkTransform();!n.bTransform?e.drawTexture(i,n.tx,n.ty,t.width,t.height,null,t.alpha):e.drawTexture(i,0,0,t.width,t.height,n.clone(),t.alpha)}}},r._updateNodeGraphic2=function(t,e,i){var n;if(n=this._nodeGDic[t.compId]=this._getNodeGraphicData(t.compId,e,this._nodeGDic[t.compId]),t.child){var s=n.transform;s._checkTransform();var r=!1,o=!1;o=(r=!s.bTransform)&&(0!=s.tx||0!=s.ty);var a=!1;(a=s.bTransform||1!=n.alpha)&&i.save(),1!=n.alpha&&i.alpha(n.alpha),r?o&&i.translate(s.tx,s.ty):i.transform(s.clone());var h;h=t.child;var l;if(n.skin&&(l=this._getTextureByUrl(n.skin))&&i.drawTexture(l,0,0,n.width,n.height),h){var u=0,c=0;for(c=h.length,u=0;u<c;u++)this._updateNodeGraphic2(h[u],e,i)}a?i.restore():r?o&&i.translate(-s.tx,-s.ty):i.transform(s.clone().invert())}else this._updateNoChilds(n,i)},r._calculateNodeKeyFrames=function(e){t.prototype._calculateNodeKeyFrames.call(this,e),this._nodeIDAniDic[e.target]=e},r.getNodeDataByID=function(t){return this._nodeIDAniDic[t]},r._getParams=function(t,i,n,s){var r=e._temParam;r.length=i.length;var o=0,a=i.length;for(o=0;o<a;o++)r[o]=this._getObjVar(t,i[o][0],n,i[o][1],s);return r},r._getObjVar=function(t,e,i,n,s){if(t.hasOwnProperty(e)){var r=t[e];return i>=r.length&&(i=r.length-1),t[e][i]}return s.hasOwnProperty(e)?s[e]:n},r._getNodeGraphicData=function(t,n,s){s||(s=i.create()),s.transform?s.transform.identity():s.transform=M.create();var r=this.getNodeDataByID(t);if(!r)return s;var o=r.frames,a=this._getParams(o,e._drawTextureCmd,n,this._nodeDefaultProps[t]),h=a[0],l=NaN,u=NaN,c=a[5],_=a[6],d=a[13],f=a[14],p=a[7],g=a[8],m=a[9],v=a[11],y=a[12];l=a[3],u=a[4],0!=l&&0!=u||(h=null),-1==l&&(l=0),-1==u&&(u=0);var w;s.skin=h,s.width=l,s.height=u,h&&((w=this._getTextureByUrl(h))?(l||(l=w.sourceWidth),u||(u=w.sourceHeight)):console.warn("lost skin:",h,",you may load pics first")),s.alpha=a[10];var x;x=s.transform,0!=d&&(c=d*l),0!=f&&(_=f*u),0==c&&0==_||x.translate(-c,-_);var T=null;if(m||1!==p||1!==g||v||y){(T=e._tempMt).identity(),T.bTransform=!0;var b=.0174532922222222*(m-v),C=.0174532922222222*(m+y),S=Math.cos(C),P=Math.sin(C),E=Math.sin(b),I=Math.cos(b);T.a=p*S,T.b=p*P,T.c=-g*E,T.d=g*I,T.tx=T.ty=0}return T&&(x=M.mul(x,T,x)),x.translate(a[1],a[2]),s},r._getTextureByUrl=function(t){return ot.getRes(t)},r.setAniData=function(t,i){if(t.animations){this._nodeDefaultProps={},this._nodeGDic={},this._nodeList&&(this._nodeList.length=0),this._rootNode=t,this._parseNodeList(t);var n,s={},r=[],o=t.animations,a=0,h=o.length;for(a=0;a<h;a++)if(n=o[a],this._labels=null,(!i||i==n.name)&&n){try{this._calGraphicData(n)}catch(t){console.warn("parse animation fail:"+n.name+",empty animation created"),this._gList=[]}var l={};l.interval=1e3/n.frameRate,l.frames=this._gList,l.labels=this._labels,l.name=n.name,r.push(l),s[n.name]=l}this.animationList=r,this.animationDic=s}e._temParam.length=0},r.parseByData=function(t){var e,i;e=t.nodeRoot,i=t.aniO,delete t.nodeRoot,delete t.aniO,this._nodeDefaultProps={},this._nodeGDic={},this._nodeList&&(this._nodeList.length=0),this._rootNode=e,this._parseNodeList(e),this._labels=null;try{this._calGraphicData(i)}catch(t){console.warn("parse animation fail:"+i.name+",empty animation created"),this._gList=[]}var n=t;return n.interval=1e3/i.frameRate,n.frames=this._gList,n.labels=this._labels,n.name=i.name,n},r.setUpAniData=function(t){if(t.animations){var e,i={},n=[],s=t.animations,r=0,o=s.length;for(r=0;r<o;r++)if(e=s[r]){var a={};a.name=e.name,a.aniO=e,a.nodeRoot=t,n.push(a),i[e.name]=a}this.animationList=n,this.animationDic=i}},r._clear=function(){if(this.animationList=null,this.animationDic=null,this._gList=null,this._nodeGDic){var t,e;for(t in this._nodeGDic)(e=this._nodeGDic[t])&&e.recover()}this._nodeGDic=null},e.parseAnimationByData=function(t){e._I||(e._I=new e);var i;return i=e._I.parseByData(t),e._I._clear(),i},e.parseAnimationData=function(t){e._I||(e._I=new e),e._I.setUpAniData(t);var i;return i={},i.animationList=e._I.animationList,i.animationDic=e._I.animationDic,e._I._clear(),i},e._drawTextureCmd=[["skin",null],["x",0],["y",0],["width",-1],["height",-1],["pivotX",0],["pivotY",0],["scaleX",1],["scaleY",1],["rotation",0],["alpha",1],["skewX",0],["skewY",0],["anchorX",0],["anchorY",0]],e._temParam=[],e._I=null,e._rootMatrix=null,n(e,["_tempMt",function(){return this._tempMt=new M}]),e.__init$=function(){i=function(){function t(){this.skin=null,this.transform=null,this.resultTransform=null,this.width=NaN,this.height=NaN,this.alpha=1}s(t,"");return t.prototype.recover=function(){this.skin=null,this.width=0,this.height=0,this.alpha=1,this.transform&&(this.transform.destroy(),this.transform=null),this.resultTransform&&(this.resultTransform.destroy(),this.resultTransform=null),X.recover("GraphicNode",this)},t.create=function(){return X.getItemByClass("GraphicNode",t)},t}()},e}(wt));i.__init([h,at,R,N,V,I,ut,bt])}(window,document,Laya),function(t,e,i){i.un,i.uns,i.static;var n=i.class;i.getset,i.__newvec;new(function(){function t(){}return n(t,"LayaMain"),t}())}(window,document,Laya),"function"==typeof define&&define.amd&&define("laya.core",["require","exports"],function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});for(var i in Laya){var n=Laya[i];n&&n.__isclass&&(e[i]=n)}});
!function(i,e,n){n.un,n.uns;var t=n.static,o=n.class,a=n.getset,r=(n.__newvec,laya.utils.Browser),l=(laya.events.Event,laya.events.EventDispatcher),s=laya.resource.HTMLImage,u=laya.utils.Handler,c=laya.display.Input,d=laya.net.Loader,f=laya.net.LocalStorage,h=(laya.maths.Matrix,laya.renders.Render),p=laya.utils.RunDriver,v=laya.media.SoundChannel,m=laya.media.SoundManager,g=laya.net.URL,_=laya.utils.Utils,y=function(){function e(){}return o(e,"laya.wx.mini.MiniAdpter"),e.getJson=function(i){return JSON.parse(i)},e.init=function(t,o){void 0===t&&(t=!1),void 0===o&&(o=!1),e._inited||(e._inited=!0,(e.window=i).navigator.userAgent.indexOf("MiniGame")<0||(e.isZiYu=o,e.isPosMsgYu=t,e.EnvConfig={},e.isZiYu||(w.setNativeFileDir("/layaairGame"),w.existDir(w.fileNativeDir,u.create(e,e.onMkdirCallBack))),e.systemInfo=wx.getSystemInfoSync(),e.window.focus=function(){},n.getUrlPath=function(){},e.window.logtime=function(i){},e.window.alertTimeLog=function(i){},e.window.resetShareInfo=function(){},e.window.CanvasRenderingContext2D=function(){},e.window.CanvasRenderingContext2D.prototype=e.window.wx.createCanvas().getContext("2d").__proto__,e.window.document.body.appendChild=function(){},e.EnvConfig.pixelRatioInt=0,p.getPixelRatio=e.pixelRatio,e._preCreateElement=r.createElement,r.createElement=e.createElement,p.createShaderCondition=e.createShaderCondition,_.parseXMLFromString=e.parseXMLFromString,c._createInputElement=x._createInputElement,e.EnvConfig.load=d.prototype.load,d.prototype.load=L.prototype.load,d.prototype._loadImage=C.prototype._loadImage,F.__init__(),f._baseClass=F))},e.getUrlEncode=function(i,e){return-1!=i.indexOf(".fnt")?"utf8":"arraybuffer"==e?"":"ascii"},e.downLoadFile=function(i,e,n,t){void 0===e&&(e=""),void 0===t&&(t="ascii");w.getFileInfo(i)?null!=n&&n.runWith([0]):w.downLoadFile(i,e,n,t)},e.remove=function(i,e){w.deleteFile("",i,e,"",0)},e.removeAll=function(){w.deleteAll()},e.hasNativeFile=function(i){return w.isLocalNativeFile(i)},e.getFileInfo=function(i){return w.getFileInfo(i)},e.getFileList=function(){return w.filesListObj},e.exitMiniProgram=function(){e.window.wx.exitMiniProgram()},e.onMkdirCallBack=function(i,e){i||(w.filesListObj=JSON.parse(e.data))},e.pixelRatio=function(){if(!e.EnvConfig.pixelRatioInt)try{return e.EnvConfig.pixelRatioInt=e.systemInfo.pixelRatio,e.systemInfo.pixelRatio}catch(i){}return e.EnvConfig.pixelRatioInt},e.createElement=function(n){if("canvas"==n){var t;return 1==e.idx?e.isZiYu?(t=sharedCanvas).style={}:t=i.canvas:t=i.wx.createCanvas(),e.idx++,t}if("textarea"==n||"input"==n)return e.onCreateInput(n);if("div"==n){var o=e._preCreateElement(n);return o.contains=function(i){return null},o.removeChild=function(i){},o}return e._preCreateElement(n)},e.onCreateInput=function(i){var n=e._preCreateElement(i);return n.focus=x.wxinputFocus,n.blur=x.wxinputblur,n.style={},n.value=0,n.parentElement={},n.placeholder={},n.type={},n.setColor=function(i){},n.setType=function(i){},n.setFontFace=function(i){},n.addEventListener=function(i){},n.contains=function(i){return null},n.removeChild=function(i){},n},e.createShaderCondition=function(i){var e=this;return function(){return e[i.replace("this.","")]}},e.EnvConfig=null,e.window=null,e._preCreateElement=null,e._inited=!1,e.systemInfo=null,e.isZiYu=!1,e.isPosMsgYu=!1,e.autoCacheFile=!0,e.minClearSize=5242880,e.parseXMLFromString=function(e){var n;e=e.replace(/>\s+</g,"><");try{n=(new i.Parser.DOMParser).parseFromString(e,"text/xml")}catch(i){throw"需要引入xml解析库文件"}return n},e.idx=1,t(e,["nativefiles",function(){return this.nativefiles=["layaNativeDir","wxlocal"]}]),e}(),w=function(){function i(){}return o(i,"laya.wx.mini.MiniFileMgr"),i.isLocalNativeFile=function(i){for(var e=0,n=y.nativefiles.length;e<n;e++)if(-1!=i.indexOf(y.nativefiles[e]))return!0;return!1},i.getFileInfo=function(e){var n=e.split("?")[0],t=i.filesListObj[n];return null==t?null:t},i.read=function(e,n,t,o,a,r){void 0===n&&(n="ascill"),void 0===o&&(o=""),void 0===a&&(a=!1),void 0===r&&(r="");var l;l=""==o||-1==o.indexOf("http://")&&-1==o.indexOf("https://")?e:i.getFileNativePath(e),i.fs.readFile({filePath:l,encoding:n,success:function(i){null!=t&&t.runWith([0,i])},fail:function(e){e&&""!=o?i.downFiles(o,n,t,o,a,r):null!=t&&t.runWith([1])}})},i.downFiles=function(e,n,t,o,a,r){void 0===n&&(n="ascii"),void 0===o&&(o=""),void 0===a&&(a=!1),void 0===r&&(r="");i.wxdown({url:e,success:function(e){200===e.statusCode&&i.readFile(e.tempFilePath,n,t,o,a,r)},fail:function(i){null!=t&&t.runWith([1,i])}}).onProgressUpdate(function(i){null!=t&&t.runWith([2,i.progress])})},i.readFile=function(e,n,t,o,a,r){void 0===n&&(n="ascill"),void 0===o&&(o=""),void 0===a&&(a=!1),void 0===r&&(r=""),i.fs.readFile({filePath:e,encoding:n,success:function(r){-1!=e.indexOf("http://")||-1!=e.indexOf("https://")?(y.autoCacheFile||a)&&i.copyFile(e,o,t,n):null!=t&&t.runWith([0,r])},fail:function(i){i&&null!=t&&t.runWith([1,i])}})},i.downOtherFiles=function(e,n,t,o){void 0===t&&(t=""),void 0===o&&(o=!1),i.wxdown({url:e,success:function(e){200===e.statusCode&&((y.autoCacheFile||o)&&-1==t.indexOf("wx.qlogo.cn")?i.copyFile(e.tempFilePath,t,n):null!=n&&n.runWith([0,e.tempFilePath]))},fail:function(i){null!=n&&n.runWith([1,i])}})},i.downLoadFile=function(e,n,t,o){void 0===n&&(n=""),void 0===o&&(o="ascii"),"image"==n||"sound"==n?i.downOtherFiles(e,t,e,!0):i.downFiles(e,o,t,e,!0,n)},i.copyFile=function(e,n,t,o){void 0===o&&(o="");var a=e.split("/"),r=a[a.length-1],l=(n.split("?")[0],i.getFileInfo(n)),s=i.getFileNativePath(r),u=i.getCacheUseSize();l?l.readyUrl!=n?i.fs.getFileInfo({filePath:e,success:function(e){u+4194304+e.size>=52428800&&(e.size>y.minClearSize&&(y.minClearSize=e.size),i.onClearCacheRes()),i.deleteFile(r,n,t,o,e.size)},fail:function(i){null!=t&&t.runWith([1,i])}}):null!=t&&t.runWith([0]):i.fs.getFileInfo({filePath:e,success:function(a){u+4194304+a.size>=52428800&&(a.size>y.minClearSize&&(y.minClearSize=a.size),i.onClearCacheRes()),i.fs.copyFile({srcPath:e,destPath:s,success:function(e){i.onSaveFile(n,r,!0,o,t,a.size)},fail:function(i){null!=t&&t.runWith([1,i])}})},fail:function(i){null!=t&&t.runWith([1,i])}})},i.onClearCacheRes=function(){var e=y.minClearSize,n=[];for(var t in i.filesListObj)n.push(i.filesListObj[t]);i.sortOn(n,"time",16);for(var o=0,a=1,r=n.length;a<r;a++){var l=n[a];if(o>=e)break;o+=l.size,i.deleteFile("",l.readyUrl)}},i.sortOn=function(i,e,n){return void 0===n&&(n=0),16==n?i.sort(function(i,n){return i[e]-n[e]}):18==n?i.sort(function(i,n){return n[e]-i[e]}):i.sort(function(i,n){return i[e]-n[e]})},i.getFileNativePath=function(i){return laya.wx.mini.MiniFileMgr.fileNativeDir+"/"+i},i.deleteFile=function(e,n,t,o,a){void 0===n&&(n=""),void 0===o&&(o=""),void 0===a&&(a=0);var r=i.getFileInfo(n),l=i.getFileNativePath(r.md5);i.fs.unlink({filePath:l,success:function(r){var l=""!=e;if(""!=e){var s=i.getFileNativePath(e);i.fs.copyFile({srcPath:e,destPath:s,success:function(a){i.onSaveFile(n,e,l,o,t,a.size)},fail:function(i){null!=t&&t.runWith([1,i])}})}else i.onSaveFile(n,e,l,o,t,a)},fail:function(i){}})},i.deleteAll=function(){var e=[];for(var n in i.filesListObj)e.push(i.filesListObj[n]);for(var t=1,o=e.length;t<o;t++){var a=e[t];i.deleteFile("",a.readyUrl)}},i.onSaveFile=function(e,n,t,o,a,l){void 0===t&&(t=!0),void 0===o&&(o=""),void 0===l&&(l=0);var s=e.split("?")[0];if(null==i.filesListObj.fileUsedSize&&(i.filesListObj.fileUsedSize=0),t){i.getFileNativePath(n);i.filesListObj[s]={md5:n,readyUrl:e,size:l,times:r.now(),encoding:o},i.filesListObj.fileUsedSize=parseInt(i.filesListObj.fileUsedSize)+l,i.writeFilesList(s,JSON.stringify(i.filesListObj),!0),null!=a&&a.runWith([0])}else if(i.filesListObj[s]){var u=parseInt(i.filesListObj[s].size);i.filesListObj.fileUsedSize=parseInt(i.filesListObj.fileUsedSize)-u,delete i.filesListObj[s],i.writeFilesList(s,JSON.stringify(i.filesListObj),!1),null!=a&&a.runWith([0])}},i.writeFilesList=function(e,n,t){var o=i.fileNativeDir+"/"+i.fileListName;i.fs.writeFile({filePath:o,encoding:"utf8",data:n,success:function(i){},fail:function(i){}}),!y.isZiYu&&y.isPosMsgYu&&wx.postMessage({url:e,data:i.filesListObj[e],isLoad:"filenative",isAdd:t})},i.getCacheUseSize=function(){return i.filesListObj&&i.filesListObj.fileUsedSize?i.filesListObj.fileUsedSize:0},i.existDir=function(e,n){i.fs.mkdir({dirPath:e,success:function(i){null!=n&&n.runWith([0,{data:JSON.stringify({})}])},fail:function(e){-1!=e.errMsg.indexOf("file already exists")?i.readSync(i.fileListName,"utf8",n):null!=n&&n.runWith([1,e])}})},i.readSync=function(e,n,t,o){void 0===n&&(n="ascill"),void 0===o&&(o="");var a,r=i.getFileNativePath(e);try{a=i.fs.readFileSync(r,n),null!=t&&t.runWith([0,{data:a}])}catch(i){null!=t&&t.runWith([1])}},i.setNativeFileDir=function(e){i.fileNativeDir=wx.env.USER_DATA_PATH+e},i.filesListObj={},i.fileNativeDir=null,i.fileListName="layaairfiles.txt",i.ziyuFileData={},i.loadPath="",i.DESCENDING=2,i.NUMERIC=16,t(i,["fs",function(){return this.fs=wx.getFileSystemManager()},"wxdown",function(){return this.wxdown=wx.downloadFile}]),i}(),C=function(){function i(){}o(i,"laya.wx.mini.MiniImage");return i.prototype._loadImage=function(e){if(y.isZiYu)i.onCreateImage(e,this,!0);else{var n=!1;if(w.isLocalNativeFile(e)){if(-1!=e.indexOf("http://")||-1!=e.indexOf("https://"))if(""!=w.loadPath)e=e.split(w.loadPath)[1];else{var t=""!=g.rootPath?g.rootPath:g.basePath;""!=t&&(e=e.split(t)[1])}}else n=!0,e=g.formatURL(e);w.getFileInfo(e)?i.onCreateImage(e,this,!n):-1!=e.indexOf("http://")||-1!=e.indexOf("https://")?y.isZiYu?i.onCreateImage(e,this,!0):w.downOtherFiles(e,new u(i,i.onDownImgCallBack,[e,this]),e):i.onCreateImage(e,this,!0)}},i.onDownImgCallBack=function(e,n,t,o){void 0===o&&(o=""),t?n.onError(null):i.onCreateImage(e,n,!1,o)},i.onCreateImage=function(i,e,n,t){function o(){u.onload=null,u.onerror=null,delete e.imgCache[i]}void 0===n&&(n=!1),void 0===t&&(t="");var a;if(y.autoCacheFile)if(n)a=i;else if(""!=t)a=t;else{var l=w.getFileInfo(i).md5;a=w.getFileNativePath(l)}else a=n?i:t;null==e.imgCache&&(e.imgCache={});var u,c=function(){o(),e._url=g.formatURL(e._url),e.onLoaded(u)},d=function(){o(),e.event("error","Load image failed")};"nativeimage"==e._type?((u=new r.window.Image).crossOrigin="",u.onload=c,u.onerror=d,u.src=a,e.imgCache[i]=u):new s.create(a,{onload:c,onerror:d,onCreate:function(n){u=n,e.imgCache[i]=n}})},i}(),x=function(){function e(){}return o(e,"laya.wx.mini.MiniInput"),e._createInputElement=function(){c._initInput(c.area=r.createElement("textarea")),c._initInput(c.input=r.createElement("input")),c.inputContainer=r.createElement("div"),c.inputContainer.style.position="absolute",c.inputContainer.style.zIndex=1e5,r.container.appendChild(c.inputContainer),c.inputContainer.setPos=function(i,e){c.inputContainer.style.left=i+"px",c.inputContainer.style.top=e+"px"},n.stage.on("resize",null,e._onStageResize),wx.onWindowResize&&wx.onWindowResize(function(e){i.dispatchEvent&&i.dispatchEvent("resize")}),m._soundClass=S,m._musicClass=S;var t=y.systemInfo.model,o=y.systemInfo.system;-1!=t.indexOf("iPhone")&&(r.onIPhone=!0,r.onIOS=!0,r.onIPad=!0,r.onAndriod=!1),-1==o.indexOf("Android")&&-1==o.indexOf("Adr")||(r.onAndriod=!0,r.onIPhone=!1,r.onIOS=!1,r.onIPad=!1)},e._onStageResize=function(){n.stage._canvasTransform.identity().scale(r.width/h.canvas.width/p.getPixelRatio(),r.height/h.canvas.height/p.getPixelRatio())},e.wxinputFocus=function(i){var e=c.inputElement.target;e&&!e.editable||(y.window.wx.offKeyboardConfirm(),y.window.wx.offKeyboardInput(),y.window.wx.showKeyboard({defaultValue:e.text,maxLength:e.maxChars,multiple:e.multiline,confirmHold:!0,confirmType:"done",success:function(i){},fail:function(i){}}),y.window.wx.onKeyboardConfirm(function(i){var n=i?i.value:"";e.text=n,e.event("input"),laya.wx.mini.MiniInput.inputEnter()}),y.window.wx.onKeyboardInput(function(i){var n=i?i.value:"";e.multiline||-1==n.indexOf("\n")?(e.text=n,e.event("input")):laya.wx.mini.MiniInput.inputEnter()}))},e.inputEnter=function(){c.inputElement.target.focus=!1},e.wxinputblur=function(){e.hideKeyboard()},e.hideKeyboard=function(){y.window.wx.offKeyboardConfirm(),y.window.wx.offKeyboardInput(),y.window.wx.hideKeyboard({success:function(i){console.log("隐藏键盘")},fail:function(i){console.log("隐藏键盘出错:"+(i?i.errMsg:""))}})},e}(),F=function(){function i(){}return o(i,"laya.wx.mini.MiniLocalStorage"),i.__init__=function(){i.items=i},i.setItem=function(i,e){wx.setStorageSync(i,e)},i.getItem=function(i){return wx.getStorageSync(i)},i.setJSON=function(e,n){i.setItem(e,n)},i.getJSON=function(e){return i.getItem(e)},i.removeItem=function(i){wx.removeStorageSync(i)},i.clear=function(){wx.clearStorageSync()},i.getStorageInfoSync=function(){try{var i=wx.getStorageInfoSync();return console.log(i.keys),console.log(i.currentSize),console.log(i.limitSize),i}catch(i){}return null},i.support=!0,i.items=null,i}(),L=(function(){function i(){}o(i,"laya.wx.mini.MiniLocation"),i.__init__=function(){y.window.navigator.geolocation.getCurrentPosition=i.getCurrentPosition,y.window.navigator.geolocation.watchPosition=i.watchPosition,y.window.navigator.geolocation.clearWatch=i.clearWatch},i.getCurrentPosition=function(i,e,n){var t;(t={}).success=function(e){null!=i&&i(e)},t.fail=e,y.window.wx.getLocation(t)},i.watchPosition=function(e,t,o){i._curID++;var a;return a={},a.success=e,a.error=t,i._watchDic[i._curID]=a,n.timer.loop(1e3,null,i._myLoop),i._curID},i.clearWatch=function(e){delete i._watchDic[e],i._hasWatch()||n.timer.clear(null,i._myLoop)},i._hasWatch=function(){var e;for(e in i._watchDic)if(i._watchDic[e])return!0;return!1},i._myLoop=function(){i.getCurrentPosition(i._mySuccess,i._myError)},i._mySuccess=function(e){var n={};n.coords=e,n.timestamp=r.now();var t;for(t in i._watchDic)i._watchDic[t].success&&i._watchDic[t].success(n)},i._myError=function(e){var n;for(n in i._watchDic)i._watchDic[n].error&&i._watchDic[n].error(e)},i._watchDic={},i._curID=0}(),function(i){function e(){e.__super.call(this)}o(e,"laya.wx.mini.MiniAccelerator",i);var n=e.prototype;n.on=function(n,t,o,a){return i.prototype.on.call(this,n,t,o,a),e.startListen(this.onDeviceOrientationChange),this},n.off=function(n,t,o,a){return void 0===a&&(a=!1),this.hasListener(n)||e.stopListen(),i.prototype.off.call(this,n,t,o,a)},e.__init__=function(){try{var i;if(!(i=laya.device.motion.Accelerator))return;i.prototype.on=e.prototype.on,i.prototype.off=e.prototype.off}catch(i){}},e.startListen=function(i){if(e._callBack=i,!e._isListening){e._isListening=!0;try{wx.onAccelerometerChange(e.onAccelerometerChange)}catch(i){}}},e.stopListen=function(){e._isListening=!1;try{wx.stopAccelerometer({})}catch(i){}},e.onAccelerometerChange=function(i){var n;(n={}).acceleration=i,n.accelerationIncludingGravity=i,n.rotationRate={},null!=e._callBack&&e._callBack(n)},e._isListening=!1,e._callBack=null}(l),function(i){function e(){e.__super.call(this)}o(e,"laya.wx.mini.MiniLoader",l);return e.prototype.load=function(i,n,t,o,a){void 0===t&&(t=!0),void 0===a&&(a=!1);if(this._url=i,0===i.indexOf("data:image")?this._type=n="image":this._type=n||(n=this.getTypeFromUrl(i)),this._cache=t,this._data=null,!a&&d.loadedMap[g.formatURL(i)])return this._data=d.loadedMap[g.formatURL(i)],this.event("progress",1),void this.event("complete",this._data);if(null!=d.parserMap[n])return this._customParse=!0,void(d.parserMap[n]instanceof laya.utils.Handler?d.parserMap[n].runWith(this):d.parserMap[n].call(null,this));var r=y.getUrlEncode(i,n),l=_.getFileExtension(i);if(-1!=e._fileTypeArr.indexOf(l))y.EnvConfig.load.call(this,i,n,t,o,a);else{if(y.isZiYu&&w.ziyuFileData[i]){var s=w.ziyuFileData[i];return void this.onLoaded(s)}if(w.getFileInfo(i)){var c=w.getFileInfo(i);c.encoding=null==c.encoding?"ascii":c.encoding,w.readFile(i,c.encoding,new u(e,e.onReadNativeCallBack,[r,i,n,t,o,a,this]),i)}else{if(w.isLocalNativeFile(i))return void w.read(i,r,new u(e,e.onReadNativeCallBack,[r,i,n,t,o,a,this]));-1!=(i=g.formatURL(i)).indexOf("http://")||-1!=i.indexOf("https://")?y.EnvConfig.load.call(this,i,n,t,o,a):w.readFile(i,r,new u(e,e.onReadNativeCallBack,[r,i,n,t,o,a,this]),i)}}},e.onReadNativeCallBack=function(i,e,n,t,o,a,r,l,s){if(void 0===t&&(t=!0),void 0===a&&(a=!1),void 0===l&&(l=0),l)1==l&&y.EnvConfig.load.call(r,e,n,t,o,a);else{var u;u="json"==n||"atlas"==n?y.getJson(s.data):"xml"==n?_.parseXMLFromString(s.data):s.data,!y.isZiYu&&y.isPosMsgYu&&"arraybuffer"!=n&&wx.postMessage({url:e,data:u,isLoad:"filedata"}),r.onLoaded(u)}},t(e,["_fileTypeArr",function(){return this._fileTypeArr=["png","jpg","bmp","jpeg","gif"]}]),e}()),S=function(i){function e(){this._sound=null,this.url=null,this.loaded=!1,this.readyUrl=null,e.__super.call(this)}o(e,"laya.wx.mini.MiniSound",l);var n=e.prototype;return n.load=function(i){i=g.formatURL(i),this.url=i,this.readyUrl=i,e._audioCache[this.readyUrl]?this.event("complete"):y.autoCacheFile&&w.getFileInfo(i)?this.onDownLoadCallBack(i,0):y.autoCacheFile?w.downOtherFiles(i,u.create(this,this.onDownLoadCallBack,[i]),i):this.onDownLoadCallBack(i,0)},n.onDownLoadCallBack=function(i,n){if(n)this.event("error");else{var t;if(y.autoCacheFile){var o=w.getFileInfo(i).md5;t=w.getFileNativePath(o),this._sound=e._createSound(),this._sound.src=this.url=t}else this._sound=e._createSound(),this._sound.src=i;this._sound.onCanplay(e.bindToThis(this.onCanPlay,this)),this._sound.onError(e.bindToThis(this.onError,this))}},n.onError=function(i){try{console.log("-----1---------------minisound-----id:"+e._id),console.log(i)}catch(i){console.log("-----2---------------minisound-----id:"+e._id),console.log(i)}this.event("error"),this._sound.offError(null)},n.onCanPlay=function(){this.loaded=!0,this.event("complete"),e._audioCache[this.readyUrl]=this,this._sound.offCanplay(null)},n.play=function(i,n){void 0===i&&(i=0),void 0===n&&(n=0);var t;if(this.url==m._tMusic?(e._musicAudio||(e._musicAudio=e._createSound()),t=e._musicAudio):t=e._audioCache[this.readyUrl]?e._audioCache[this.readyUrl]._sound:e._createSound(),y.autoCacheFile&&w.getFileInfo(this.url)){var o=w.getFileInfo(this.url).md5;t.src=this.url=w.getFileNativePath(o)}else t.src=this.url;var a=new I(t,this);return a.url=this.url,a.loops=n,a.loop=0===n,a.startTime=i,a.play(),m.addChannel(a),a},n.dispose=function(){var i=e._audioCache[this.readyUrl];i&&(i.src="",i._sound&&(i._sound.destroy(),i._sound=null,i=null),delete e._audioCache[this.readyUrl])},a(0,n,"duration",function(){return this._sound.duration}),e._createSound=function(){return e._id++,y.window.wx.createInnerAudioContext()},e.bindToThis=function(i,e){return i.bind(e)},e._musicAudio=null,e._id=0,e._audioCache={},e}(),I=function(i){function e(i,n){this._audio=null,this._onEnd=null,this._miniSound=null,e.__super.call(this),this._audio=i,this._miniSound=n,this._onEnd=e.bindToThis(this.__onEnd,this),i.onEnded(this._onEnd)}o(e,"laya.wx.mini.MiniSoundChannel",v);var t=e.prototype;return t.__onEnd=function(){if(1==this.loops)return this.completeHandler&&(n.timer.once(10,this,this.__runComplete,[this.completeHandler],!1),this.completeHandler=null),this.stop(),void this.event("complete");this.loops>0&&this.loops--,this.startTime=0,this.play()},t.play=function(){this.isStopped=!1,m.addChannel(this),this._audio.play()},t.stop=function(){this.isStopped=!0,m.removeChannel(this),this.completeHandler=null,this._audio&&(this._audio.pause(),this._audio.offEnded(null),this._audio=null,this._miniSound=null,this._onEnd=null)},t.pause=function(){this.isStopped=!0,this._audio.pause()},t.resume=function(){this._audio&&(this.isStopped=!1,m.addChannel(this),this._audio.play())},a(0,t,"autoplay",function(){return this._audio.autoplay},function(i){this._audio.autoplay=i}),a(0,t,"position",function(){return this._audio?this._audio.currentTime:0}),a(0,t,"duration",function(){return this._audio?this._audio.duration:0}),a(0,t,"loop",function(){return this._audio.loop},function(i){this._audio.loop=i}),a(0,t,"volume",function(){return this._audio?this._audio.volume:1},function(i){this._audio&&(this._audio.volume=i)}),e.bindToThis=function(i,e){return i.bind(e)},e}()}(window,document,Laya),"function"==typeof define&&define.amd&&define("laya.core",["require","exports"],function(i,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});for(var n in Laya){var t=Laya[n];t&&t.__isclass&&(e[n]=t)}});
!function(t,e,i){i.un,i.uns;var r=i.static,s=i.class,a=i.getset,n=i.__newvec,h=laya.maths.Arith,l=laya.maths.Bezier,o=laya.resource.Bitmap,u=laya.utils.Browser,_=laya.utils.Byte,c=laya.utils.Color,f=(laya.filters.ColorFilter,i.Config),d=laya.resource.Context,m=(laya.events.Event,laya.filters.Filter),p=laya.display.Graphics,g=laya.resource.HTMLCanvas,v=(laya.utils.HTMLChar,laya.resource.HTMLImage),x=laya.resource.HTMLSubImage,b=(laya.utils.Handler,laya.net.Loader,laya.maths.Matrix),y=laya.maths.Point,T=laya.maths.Rectangle,A=laya.renders.Render,E=(laya.renders.RenderContext,laya.renders.RenderSprite),S=laya.resource.Resource,w=laya.resource.ResourceManager,R=laya.utils.RunDriver,I=laya.display.Sprite,M=laya.display.Stage,C=laya.utils.Stat,L=laya.utils.StringKey,P=(laya.display.css.Style,laya.system.System),D=laya.display.Text,F=laya.resource.Texture,B=(laya.display.css.TransformInfo,laya.net.URL,laya.utils.Utils),N=laya.utils.VectorGraphManager;laya.utils.WordText;i.interface("laya.webgl.shapes.IShape"),i.interface("laya.webgl.submit.ISubmit"),i.interface("laya.webgl.text.ICharSegment"),i.interface("laya.webgl.canvas.save.ISaveData"),i.interface("laya.webgl.resource.IMergeAtlasBitmap"),i.interface("laya.filters.IFilterActionGL","laya.filters.IFilterAction");var O=function(){function t(){}s(t,"laya.filters.webgl.FilterActionGL");var e=t.prototype;return i.imps(e,{"laya.filters.IFilterActionGL":!0}),e.setValue=function(t){},e.setValueMix=function(t){},e.apply3d=function(t,e,i,r,s){return null},e.apply=function(t){return null},a(0,e,"typeMix",function(){return 0}),t}(),V=function(){function t(){}return s(t,"laya.webgl.shader.ShaderValue"),t}(),U=function(){function t(t,e,r){this._atlasID=0,this._width=0,this._height=0,this._texCount=0,this._rowInfo=null,this._cells=null,this._failSize=new i,void 0===t&&(t=0),void 0===e&&(e=0),void 0===r&&(r=0),this._cells=null,this._rowInfo=null,this._init(t,e),this._atlasID=r}var e,i;s(t,"laya.webgl.atlas.AtlasGrid");var r=t.prototype;return r.getAltasID=function(){return this._atlasID},r.setAltasID=function(t){t>=0&&(this._atlasID=t)},r.addTex=function(t,e,i){var r=this._get(e,i);return 0==r.ret?r:(this._fill(r.x,r.y,e,i,t),this._texCount++,r)},r._release=function(){null!=this._cells&&(this._cells.length=0,this._cells=null),this._rowInfo&&(this._rowInfo.length=0,this._rowInfo=null)},r._init=function(t,i){if(this._width=t,this._height=i,this._release(),0==this._width)return!1;this._cells=new Uint8Array(this._width*this._height*3),this._rowInfo=n(this._height);for(var r=0;r<this._height;r++)this._rowInfo[r]=new e;return this._clear(),!0},r._get=function(t,e){var i=new H;if(t>=this._failSize.width&&e>=this._failSize.height)return i;for(var r=-1,s=-1,a=this._width,n=this._height,h=this._cells,l=0;l<n;l++)if(!(this._rowInfo[l].spaceCount<t))for(var o=0;o<a;){var u=3*(l*a+o);if(0!=h[u]||h[u+1]<t||h[u+2]<e)o+=h[u+1];else{r=o,s=l;for(var _=0;_<t;_++)if(h[3*_+u+2]<e){r=-1;break}if(!(r<0))return i.ret=!0,i.x=r,i.y=s,i;o+=h[u+1]}}return i},r._fill=function(t,e,i,r,s){var a=this._width,n=this._height;this._check(t+i<=a&&e+r<=n);for(var h=e;h<r+e;++h){this._check(this._rowInfo[h].spaceCount>=i),this._rowInfo[h].spaceCount-=i;for(var l=0;l<i;l++){var o=3*(t+h*a+l);this._check(0==this._cells[o]),this._cells[o]=s,this._cells[o+1]=i,this._cells[o+2]=r}}if(t>0)for(h=0;h<r;++h){var u=0;for(l=t-1;l>=0&&0==this._cells[3*((e+h)*a+l)];--l,++u);for(l=u;l>0;--l)this._cells[3*((e+h)*a+t-l)+1]=l,this._check(l>0)}if(e>0)for(l=t;l<t+i;++l){for(u=0,h=e-1;h>=0&&0==this._cells[3*(l+h*a)];--h,u++);for(h=u;h>0;--h)this._cells[3*(l+(e-h)*a)+2]=h,this._check(h>0)}},r._check=function(t){0==t&&console.log("xtexMerger 错误啦")},r._clear=function(){this._texCount=0;for(var t=0;t<this._height;t++)this._rowInfo[t].spaceCount=this._width;for(var e=0;e<this._height;e++)for(var i=0;i<this._width;i++){var r=3*(e*this._width+i);this._cells[r]=0,this._cells[r+1]=this._width-i,this._cells[r+2]=this._width-e}this._failSize.width=this._width+1,this._failSize.height=this._height+1},t.__init$=function(){e=function(){function t(){this.spaceCount=0}return s(t,""),t}(),i=function(){function t(){this.width=0,this.height=0}return s(t,""),t}()},t}(),k=function(){function t(t,e,i,r){this._currentAtlasCount=0,this._maxAtlaserCount=0,this._width=0,this._height=0,this._gridSize=0,this._gridNumX=0,this._gridNumY=0,this._init=!1,this._curAtlasIndex=0,this._setAtlasParam=!1,this._atlaserArray=null,this._needGC=!1,this._setAtlasParam=!0,this._width=t,this._height=e,this._gridSize=i,this._maxAtlaserCount=r,this._gridNumX=t/i,this._gridNumY=e/i,this._curAtlasIndex=0,this._atlaserArray=[]}s(t,"laya.webgl.atlas.AtlasResourceManager");var e=t.prototype;return e.setAtlasParam=function(e,i,r,s){if(1==this._setAtlasParam)return t._sid_=0,this._width=e,this._height=i,this._gridSize=r,this._maxAtlaserCount=s,this._gridNumX=e/r,this._gridNumY=i/r,this._curAtlasIndex=0,this.freeAll(),!0;throw console.log("设置大图合集参数错误，只能在开始页面设置各种参数"),-1},e.pushData=function(e){var i=e.bitmap,r=-1,s=null,a=0,n=0,h=0;for(a=0,n=this._atlaserArray.length;a<n&&(h=(this._curAtlasIndex+a)%n,s=this._atlaserArray[h],-1==(r=s.findBitmapIsExist(i)));a++);if(-1!=r){var l=s.InAtlasWebGLImagesOffsetValue[r];return m=l[0],p=l[1],s.addToAtlas(e,m,p),!0}this._setAtlasParam=!1;for(var o=Math.ceil((e.bitmap.width+2)/this._gridSize),u=Math.ceil((e.bitmap.height+2)/this._gridSize),_=!1,c=0;c<2;c++){var f=this._maxAtlaserCount;for(a=0;a<f;a++){h=(this._curAtlasIndex+a)%f,this._atlaserArray.length-1>=h||this._atlaserArray.push(new Rt(this._gridNumX,this._gridNumY,this._width,this._height,t._sid_++));var d=this._atlaserArray[h],m=0,p=0,g=d.addTex(1,o,u);if(g.ret){m=g.x*this._gridSize+1,p=g.y*this._gridSize+1,i.lock=!0,d.addToAtlasTexture(i,m,p),d.addToAtlas(e,m,p),_=!0,this._curAtlasIndex=h;break}}if(_)break;this._atlaserArray.push(new Rt(this._gridNumX,this._gridNumY,this._width,this._height,t._sid_++)),this._needGC=!0,this.garbageCollection(),this._curAtlasIndex=this._atlaserArray.length-1}return _||console.log(">>>AtlasManager pushData error"),_},e.addToAtlas=function(t){laya.webgl.atlas.AtlasResourceManager.instance.pushData(t)},e.garbageCollection=function(){if(!0===this._needGC){for(var t=this._atlaserArray.length-this._maxAtlaserCount,e=0;e<t;e++)this._atlaserArray[e].dispose(),console.log("AtlasResourceManager:Dispose the inner Atlas。");console.log(">>>>altas garbageCollection ="+t),this._atlaserArray.splice(0,t),this._needGC=!1}return!0},e.freeAll=function(){for(var t=0,e=this._atlaserArray.length;t<e;t++)this._atlaserArray[t].dispose();this._atlaserArray.length=0,this._curAtlasIndex=0},e.getAtlaserCount=function(){return this._atlaserArray.length},e.getAtlaserByIndex=function(t){return this._atlaserArray[t]},a(1,t,"instance",function(){return t._Instance||(t._Instance=new t(laya.webgl.atlas.AtlasResourceManager.atlasTextureWidth,laya.webgl.atlas.AtlasResourceManager.atlasTextureHeight,16,laya.webgl.atlas.AtlasResourceManager.maxTextureCount)),t._Instance}),a(1,t,"enabled",function(){return f.atlasEnable}),a(1,t,"atlasLimitWidth",function(){return t._atlasLimitWidth},function(e){t._atlasLimitWidth=e}),a(1,t,"atlasLimitHeight",function(){return t._atlasLimitHeight},function(e){t._atlasLimitHeight=e}),t._enable=function(){f.atlasEnable=!0},t._disable=function(){f.atlasEnable=!1},t.__init__=function(){t.atlasTextureWidth=2048,t.atlasTextureHeight=2048,t.maxTextureCount=6,t.atlasLimitWidth=512,t.atlasLimitHeight=512},t._atlasLimitWidth=0,t._atlasLimitHeight=0,t.gridSize=16,t.atlasTextureWidth=0,t.atlasTextureHeight=0,t.maxTextureCount=0,t._atlasRestore=0,t.BOARDER_TYPE_NO=0,t.BOARDER_TYPE_RIGHT=1,t.BOARDER_TYPE_LEFT=2,t.BOARDER_TYPE_BOTTOM=4,t.BOARDER_TYPE_TOP=8,t.BOARDER_TYPE_ALL=15,t._sid_=0,t._Instance=null,t}(),H=function(){function t(){this.x=0,this.y=0,this.ret=!1,this.ret=!1,this.x=0,this.y=0}return s(t,"laya.webgl.atlas.MergeFillInfo"),t}(),G=function(){function t(){}return s(t,"laya.webgl.canvas.BlendMode"),t._init_=function(e){t.fns=[t.BlendNormal,t.BlendAdd,t.BlendMultiply,t.BlendScreen,t.BlendOverlay,t.BlendLight,t.BlendMask,t.BlendDestinationOut],t.targetFns=[t.BlendNormalTarget,t.BlendAddTarget,t.BlendMultiplyTarget,t.BlendScreenTarget,t.BlendOverlayTarget,t.BlendLightTarget,t.BlendMask,t.BlendDestinationOut]},t.BlendNormal=function(t){t.blendFunc(1,771)},t.BlendAdd=function(t){t.blendFunc(1,772)},t.BlendMultiply=function(t){t.blendFunc(774,771)},t.BlendScreen=function(t){t.blendFunc(1,1)},t.BlendOverlay=function(t){t.blendFunc(1,769)},t.BlendLight=function(t){t.blendFunc(1,1)},t.BlendNormalTarget=function(t){t.blendFunc(1,771)},t.BlendAddTarget=function(t){t.blendFunc(1,772)},t.BlendMultiplyTarget=function(t){t.blendFunc(774,771)},t.BlendScreenTarget=function(t){t.blendFunc(1,1)},t.BlendOverlayTarget=function(t){t.blendFunc(1,769)},t.BlendLightTarget=function(t){t.blendFunc(1,1)},t.BlendMask=function(t){t.blendFunc(0,770)},t.BlendDestinationOut=function(t){t.blendFunc(0,0)},t.activeBlendFunction=null,t.NAMES=["normal","add","multiply","screen","overlay","light","mask","destination-out"],t.TOINT={normal:0,add:1,multiply:2,screen:3,lighter:1,overlay:4,light:5,mask:6,"destination-out":7},t.NORMAL="normal",t.ADD="add",t.MULTIPLY="multiply",t.SCREEN="screen",t.LIGHT="light",t.OVERLAY="overlay",t.DESTINATIONOUT="destination-out",t.fns=[],t.targetFns=[],t}(),W=function(){function t(t){this._color=c.create("black"),this.setValue(t)}s(t,"laya.webgl.canvas.DrawStyle");var e=t.prototype;return e.setValue=function(t){if(t){if("string"==typeof t)return void(this._color=c.create(t));if(t instanceof laya.utils.Color)return void(this._color=t)}},e.reset=function(){this._color=c.create("black")},e.equal=function(t){return"string"==typeof t?this._color.strColor===t:t instanceof laya.utils.Color&&this._color.numColor===t.numColor},e.toColorStr=function(){return this._color.strColor},t.create=function(e){if(e){var i;if("string"==typeof e?i=c.create(e):e instanceof laya.utils.Color&&(i=e),i)return i._drawStyle||(i._drawStyle=new t(e))}return laya.webgl.canvas.DrawStyle.DEFAULT},r(t,["DEFAULT",function(){return this.DEFAULT=new t("#000000")}]),t}(),z=function(){function t(){this._x=0,this._y=0,this.dirty=!1,this.offset=0,this.count=0,this.geoStart=0,this.tempArray=[],this.closePath=!1,this.geomatrys=[];bt.mainContext;this.ib=$t.create(35048),this.vb=Jt.create(5)}s(t,"laya.webgl.canvas.Path");var e=t.prototype;return e.addPoint=function(t,e){this.tempArray.push(t,e)},e.getEndPointX=function(){return this.tempArray[this.tempArray.length-2]},e.getEndPointY=function(){return this.tempArray[this.tempArray.length-1]},e.polygon=function(t,e,i,r,s,a){var n;return this.geomatrys.push(this._curGeomatry=n=new Lt(t,e,i,r,s,a)),r||(n.fill=!1),void 0==a&&(n.borderWidth=0),n},e.setGeomtry=function(t){this.geomatrys.push(this._curGeomatry=t)},e.drawLine=function(t,e,i,r,s){var a;return this.closePath?this.geomatrys.push(this._curGeomatry=a=new Ct(t,e,i,r,s)):this.geomatrys.push(this._curGeomatry=a=new Mt(t,e,i,r,s)),a.fill=!1,a},e.update=function(){var t=this.ib._byteLength,e=this.geomatrys.length;this.offset=t;for(var i=this.geoStart;i<e;i++)this.geomatrys[i].getData(this.ib,this.vb,this.vb._byteLength/20);this.geoStart=e,this.count=(this.ib._byteLength-t)/mt.BYTES_PIDX},e.reset=function(){this.vb.clear(),this.ib.clear(),this.offset=this.count=this.geoStart=0,this.geomatrys.length=0},e.recover=function(){this._curGeomatry=null,this.vb.destory(),this.vb=null,this.ib.destory(),this.ib=null},t}(),Y=function(){function t(){}s(t,"laya.webgl.canvas.save.SaveBase");var e=t.prototype;return i.imps(e,{"laya.webgl.canvas.save.ISaveData":!0}),e.isSaveMark=function(){return!1},e.restore=function(e){this._dataObj[this._valueName]=this._value,t._cache[t._cache._length++]=this,this._newSubmit&&(e._curSubmit=at.RENDERBASE,e._renderKey=0)},t._createArray=function(){var t=[];return t._length=0,t},t._init=function(){var e=t._namemap={};return e[1]="ALPHA",e[2]="fillStyle",e[8]="font",e[256]="lineWidth",e[512]="strokeStyle",e[8192]="_mergeID",e[1024]=e[2048]=e[4096]=[],e[16384]="textBaseline",e[32768]="textAlign",e[65536]="_nBlendType",e[1048576]="shader",e[2097152]="filters",e},t.save=function(e,i,r,s){if((e._saveMark._saveuse&i)!==i){e._saveMark._saveuse|=i;var a=t._cache,n=a._length>0?a[--a._length]:new t;n._value=r[n._valueName=t._namemap[i]],n._dataObj=r,n._newSubmit=s;var h=e._save;h[h._length++]=n}},t._cache=laya.webgl.canvas.save.SaveBase._createArray(),t._namemap=t._init(),t}(),X=function(){function t(){this._clipRect=new T}s(t,"laya.webgl.canvas.save.SaveClipRect");var e=t.prototype;return i.imps(e,{"laya.webgl.canvas.save.ISaveData":!0}),e.isSaveMark=function(){return!1},e.restore=function(e){e._clipRect=this._clipSaveRect,t._cache[t._cache._length++]=this,this._submitScissor.submitLength=e._submits._length-this._submitScissor.submitIndex,e._curSubmit=at.RENDERBASE,e._renderKey=0},t.save=function(e,i){if(131072!=(131072&e._saveMark._saveuse)){e._saveMark._saveuse|=131072;var r=t._cache,s=r._length>0?r[--r._length]:new t;s._clipSaveRect=e._clipRect,e._clipRect=s._clipRect.copyFrom(e._clipRect),s._submitScissor=i;var a=e._save;a[a._length++]=s}},r(t,["_cache",function(){return this._cache=Y._createArray()}]),t}(),K=function(){function t(){this._contextX=0,this._contextY=0,this._clipRect=new T,this._rect=new T,this._matrix=new b}s(t,"laya.webgl.canvas.save.SaveClipRectStencil");var e=t.prototype;return i.imps(e,{"laya.webgl.canvas.save.ISaveData":!0}),e.isSaveMark=function(){return!1},e.restore=function(e){ut.restore(e,this._rect,this._saveMatrix,this._contextX,this._contextY),e._clipRect=this._clipSaveRect,e._curMat=this._saveMatrix,e._x=this._contextX,e._y=this._contextY,t._cache[t._cache._length++]=this,e._curSubmit=at.RENDERBASE},t.save=function(e,i,r,s,a,n,h,l,o,u){if(262144!=(262144&e._saveMark._saveuse)){e._saveMark._saveuse|=262144;var _=t._cache,c=_._length>0?_[--_._length]:new t;c._clipSaveRect=e._clipRect,c._clipRect.setTo(h,l,o,u),e._clipRect=c._clipRect,c._rect.x=r,c._rect.y=s,c._rect.width=a,c._rect.height=n,c._contextX=e._x,c._contextY=e._y,c._saveMatrix=e._curMat,e._curMat.copyTo(c._matrix),e._curMat=c._matrix,c._submitStencil=i;var f=e._save;f[f._length++]=c}},r(t,["_cache",function(){return this._cache=Y._createArray()}]),t}(),Q=function(){function t(){this._saveuse=0}s(t,"laya.webgl.canvas.save.SaveMark");var e=t.prototype;return i.imps(e,{"laya.webgl.canvas.save.ISaveData":!0}),e.isSaveMark=function(){return!0},e.restore=function(e){e._saveMark=this._preSaveMark,t._no[t._no._length++]=this},t.Create=function(e){var i=t._no,r=i._length>0?i[--i._length]:new t;return r._saveuse=0,r._preSaveMark=e._saveMark,e._saveMark=r,r},r(t,["_no",function(){return this._no=Y._createArray()}]),t}(),Z=function(){function t(){this._matrix=new b}s(t,"laya.webgl.canvas.save.SaveTransform");var e=t.prototype;return i.imps(e,{"laya.webgl.canvas.save.ISaveData":!0}),e.isSaveMark=function(){return!1},e.restore=function(e){e._curMat=this._savematrix,t._no[t._no._length++]=this},t.save=function(e){var i=e._saveMark;if(2048!=(2048&i._saveuse)){i._saveuse|=2048;var r=t._no,s=r._length>0?r[--r._length]:new t;s._savematrix=e._curMat,e._curMat=e._curMat.copyTo(s._matrix);var a=e._save;a[a._length++]=s}},r(t,["_no",function(){return this._no=Y._createArray()}]),t}(),q=function(){function t(){}s(t,"laya.webgl.canvas.save.SaveTranslate");var e=t.prototype;return i.imps(e,{"laya.webgl.canvas.save.ISaveData":!0}),e.isSaveMark=function(){return!1},e.restore=function(e){e._curMat;e._x=this._x,e._y=this._y,t._no[t._no._length++]=this},t.save=function(e){var i=t._no,r=i._length>0?i[--i._length]:new t;r._x=e._x,r._y=e._y;var s=e._save;s[s._length++]=r},r(t,["_no",function(){return this._no=Y._createArray()}]),t}(),j=function(){function t(){this.target=null,this.repaint=!1,this._width=NaN,this._height=NaN,this._sp=null,this._clipRect=new T}s(t,"laya.webgl.resource.RenderTargetMAX");var e=t.prototype;return e.setSP=function(t){this._sp=t},e.size=function(t,e){var r=this;this._width!==t||this._height!==e?(this.repaint=!0,this._width=t,this._height=e,this.target?this.target.size(t,e):this.target=Nt.create(t,e),this.target.hasListener("recovered")||this.target.on("recovered",this,function(t){i.timer.callLater(r._sp,r._sp.repaint)})):this.target.size(t,e)},e._flushToTarget=function(t,e){if(!e._destroy){var i=vt.worldScissorTest,r=vt.worldClipRect;vt.worldClipRect=this._clipRect,this._clipRect.x=this._clipRect.y=0,this._clipRect.width=this._width,this._clipRect.height=this._height,vt.worldScissorTest=!1,bt.mainContext.disable(3089);var s=vt.worldAlpha,a=vt.worldMatrix4,n=vt.worldMatrix,h=vt.worldFilters,l=vt.worldShaderDefines;if(vt.worldMatrix=b.EMPTY,vt.restoreTempArray(),vt.worldMatrix4=vt.TEMPMAT4_ARRAY,vt.worldAlpha=1,vt.worldFilters=null,vt.worldShaderDefines=null,Bt.activeShader=null,e.start(),f.showCanvasMark?e.clear(0,1,0,.3):e.clear(0,0,0,0),t.flush(),e.end(),Bt.activeShader=null,vt.worldAlpha=s,vt.worldMatrix4=a,vt.worldMatrix=n,vt.worldFilters=h,vt.worldShaderDefines=l,vt.worldScissorTest=i,i){var o=vt.height-r.y-r.height;bt.mainContext.scissor(r.x,o,r.width,r.height),bt.mainContext.enable(3089)}vt.worldClipRect=r}},e.flush=function(t){this.repaint&&(this._flushToTarget(t,this.target),this.repaint=!1)},e.drawTo=function(t,e,i,r,s){t.drawTexture(this.target.getTexture(),e,i,r,s,0,0)},e.destroy=function(){this.target&&(this.target.destroy(),this.target=null,this._sp=null)},t}(),$=function(){function t(){this.ALPHA=1,this.shaderType=0,this.defines=new It}s(t,"laya.webgl.shader.d2.Shader2D");return t.prototype.destroy=function(){this.defines=null,this.filters=null,this.glTexture=null,this.strokeStyle=null,this.fillStyle=null},t.__init__=function(){Qt.addInclude("parts/ColorFilter_ps_uniform.glsl","uniform vec4 colorAlpha;\nuniform mat4 colorMat;"),Qt.addInclude("parts/ColorFilter_ps_logic.glsl","mat4 alphaMat =colorMat;\n\nalphaMat[0][3] *= gl_FragColor.a;\nalphaMat[1][3] *= gl_FragColor.a;\nalphaMat[2][3] *= gl_FragColor.a;\n\ngl_FragColor = gl_FragColor * alphaMat;\ngl_FragColor += colorAlpha/255.0*gl_FragColor.a;\n"),Qt.addInclude("parts/GlowFilter_ps_uniform.glsl","uniform vec4 u_color;\nuniform float u_strength;\nuniform float u_blurX;\nuniform float u_blurY;\nuniform float u_offsetX;\nuniform float u_offsetY;\nuniform float u_textW;\nuniform float u_textH;"),Qt.addInclude("parts/GlowFilter_ps_logic.glsl","const float c_IterationTime = 10.0;\nfloat floatIterationTotalTime = c_IterationTime * c_IterationTime;\nvec4 vec4Color = vec4(0.0,0.0,0.0,0.0);\nvec2 vec2FilterDir = vec2(-(u_offsetX)/u_textW,-(u_offsetY)/u_textH);\nvec2 vec2FilterOff = vec2(u_blurX/u_textW/c_IterationTime * 2.0,u_blurY/u_textH/c_IterationTime * 2.0);\nfloat maxNum = u_blurX * u_blurY;\nvec2 vec2Off = vec2(0.0,0.0);\nfloat floatOff = c_IterationTime/2.0;\nfor(float i = 0.0;i<=c_IterationTime; ++i){\n\tfor(float j = 0.0;j<=c_IterationTime; ++j){\n\t\tvec2Off = vec2(vec2FilterOff.x * (i - floatOff),vec2FilterOff.y * (j - floatOff));\n\t\tvec4Color += texture2D(texture, v_texcoord + vec2FilterDir + vec2Off)/floatIterationTotalTime;\n\t}\n}\ngl_FragColor = vec4(u_color.rgb,vec4Color.a * u_strength);\ngl_FragColor.rgb *= gl_FragColor.a;"),Qt.addInclude("parts/BlurFilter_ps_logic.glsl","gl_FragColor =   blur();\ngl_FragColor.w*=alpha;"),Qt.addInclude("parts/BlurFilter_ps_uniform.glsl","uniform vec4 strength_sig2_2sig2_gauss1;\nuniform vec2 blurInfo;\n\n#define PI 3.141593\n\n//float sigma=strength/3.0;//3σ以外影响很小。即当σ=1的时候，半径为3\n//float sig2 = sigma*sigma;\n//float _2sig2 = 2.0*sig2;\n//return 1.0/(2*PI*sig2)*exp(-(x*x+y*y)/_2sig2)\n//float gauss1 = 1.0/(2.0*PI*sig2);\n\nfloat getGaussian(float x, float y){\n    return strength_sig2_2sig2_gauss1.w*exp(-(x*x+y*y)/strength_sig2_2sig2_gauss1.z);\n}\n\nvec4 blur(){\n    const float blurw = 9.0;\n    vec4 vec4Color = vec4(0.0,0.0,0.0,0.0);\n    vec2 halfsz=vec2(blurw,blurw)/2.0/blurInfo;    \n    vec2 startpos=v_texcoord-halfsz;\n    vec2 ctexcoord = startpos;\n    vec2 step = 1.0/blurInfo;  //每个像素      \n    \n    for(float y = 0.0;y<=blurw; ++y){\n        ctexcoord.x=startpos.x;\n        for(float x = 0.0;x<=blurw; ++x){\n            //TODO 纹理坐标的固定偏移应该在vs中处理\n            vec4Color += texture2D(texture, ctexcoord)*getGaussian(x-blurw/2.0,y-blurw/2.0);\n            ctexcoord.x+=step.x;\n        }\n        ctexcoord.y+=step.y;\n    }\n    return vec4Color;\n}"),Qt.addInclude("parts/ColorAdd_ps_uniform.glsl","uniform vec4 colorAdd;\n"),Qt.addInclude("parts/ColorAdd_ps_logic.glsl","gl_FragColor = vec4(colorAdd.rgb,colorAdd.a*gl_FragColor.a);\ngl_FragColor.xyz *= colorAdd.a;");var t,e;t="attribute vec4 position;\nattribute vec2 texcoord;\nuniform vec2 size;\n\n#ifdef WORLDMAT\nuniform mat4 mmat;\n#endif\nvarying vec2 v_texcoord;\nvoid main() {\n  #ifdef WORLDMAT\n  vec4 pos=mmat*position;\n  gl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n  #else\n  gl_Position =vec4((position.x/size.x-0.5)*2.0,(0.5-position.y/size.y)*2.0,position.z,1.0);\n  #endif\n  \n  v_texcoord = texcoord;\n}",e='precision mediump float;\n//precision highp float;\nvarying vec2 v_texcoord;\nuniform sampler2D texture;\nuniform float alpha;\n#include?BLUR_FILTER  "parts/BlurFilter_ps_uniform.glsl";\n#include?COLOR_FILTER "parts/ColorFilter_ps_uniform.glsl";\n#include?GLOW_FILTER "parts/GlowFilter_ps_uniform.glsl";\n#include?COLOR_ADD "parts/ColorAdd_ps_uniform.glsl";\n\nvoid main() {\n   vec4 color= texture2D(texture, v_texcoord);\n   color.a*=alpha;\n   color.rgb*=alpha;\n   gl_FragColor=color;\n   #include?COLOR_ADD "parts/ColorAdd_ps_logic.glsl";   \n   #include?BLUR_FILTER  "parts/BlurFilter_ps_logic.glsl";\n   #include?COLOR_FILTER "parts/ColorFilter_ps_logic.glsl";\n   #include?GLOW_FILTER "parts/GlowFilter_ps_logic.glsl";\n}',Qt.preCompile2D(0,1,t,e,null),t="attribute vec4 position;\nuniform vec2 size;\nuniform mat4 mmat;\nvoid main() {\n  vec4 pos=mmat*position;\n  gl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n}",e='precision mediump float;\nuniform vec4 color;\nuniform float alpha;\n#include?COLOR_FILTER "parts/ColorFilter_ps_uniform.glsl";\nvoid main() {\n\tvec4 a = vec4(color.r, color.g, color.b, color.a);\n\ta.w = alpha;\n\ta.xyz *= alpha;\n\tgl_FragColor = a;\n\t#include?COLOR_FILTER "parts/ColorFilter_ps_logic.glsl";\n}',Qt.preCompile2D(0,2,t,e,null),t="attribute vec4 position;\nattribute vec3 a_color;\nuniform mat4 mmat;\nuniform mat4 u_mmat2;\nuniform vec2 u_pos;\nuniform vec2 size;\nvarying vec3 color;\nvoid main(){\n  vec4 tPos = vec4(position.x + u_pos.x,position.y + u_pos.y,position.z,position.w);\n  vec4 pos=mmat*u_mmat2*tPos;\n  gl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n  color=a_color;\n}",e="precision mediump float;\n//precision mediump float;\nvarying vec3 color;\nuniform float alpha;\nvoid main(){\n\t//vec4 a=vec4(color.r, color.g, color.b, 1);\n\t//a.a*=alpha;\n    gl_FragColor=vec4(color.r, color.g, color.b, alpha);\n\tgl_FragColor.rgb*=alpha;\n}",Qt.preCompile2D(0,4,t,e,null),t="attribute vec4 position;\nattribute vec2 texcoord;\nuniform vec2 size;\n\n#ifdef WORLDMAT\nuniform mat4 mmat;\n#endif\nvarying vec2 v_texcoord;\nvoid main() {\n  #ifdef WORLDMAT\n  vec4 pos=mmat*position;\n  gl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n  #else\n  gl_Position =vec4((position.x/size.x-0.5)*2.0,(0.5-position.y/size.y)*2.0,position.z,1.0);\n  #endif\n  \n  v_texcoord = texcoord;\n}",e='#ifdef FSHIGHPRECISION\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n//precision highp float;\nvarying vec2 v_texcoord;\nuniform sampler2D texture;\nuniform float alpha;\nuniform vec4 u_TexRange;\nuniform vec2 u_offset;\n#include?BLUR_FILTER  "parts/BlurFilter_ps_uniform.glsl";\n#include?COLOR_FILTER "parts/ColorFilter_ps_uniform.glsl";\n#include?GLOW_FILTER "parts/GlowFilter_ps_uniform.glsl";\n#include?COLOR_ADD "parts/ColorAdd_ps_uniform.glsl";\n\nvoid main() {\n   vec2 newTexCoord;\n   newTexCoord.x = mod(u_offset.x + v_texcoord.x,u_TexRange.y) + u_TexRange.x;\n   newTexCoord.y = mod(u_offset.y + v_texcoord.y,u_TexRange.w) + u_TexRange.z;\n   vec4 color= texture2D(texture, newTexCoord);\n   color.a*=alpha;\n   gl_FragColor=color;\n   #include?COLOR_ADD "parts/ColorAdd_ps_logic.glsl";   \n   #include?BLUR_FILTER  "parts/BlurFilter_ps_logic.glsl";\n   #include?COLOR_FILTER "parts/ColorFilter_ps_logic.glsl";\n   #include?GLOW_FILTER "parts/GlowFilter_ps_logic.glsl";\n}',Qt.preCompile2D(0,256,t,e,null),t="attribute vec2 position;\nattribute vec2 texcoord;\nattribute vec4 color;\nuniform vec2 size;\nuniform float offsetX;\nuniform float offsetY;\nuniform mat4 mmat;\nuniform mat4 u_mmat2;\nvarying vec2 v_texcoord;\nvarying vec4 v_color;\nvoid main() {\n  vec4 pos=mmat*u_mmat2*vec4(offsetX+position.x,offsetY+position.y,0,1 );\n  gl_Position = vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n  v_color = color;\n  v_color.rgb *= v_color.a;\n  v_texcoord = texcoord;  \n}",e="precision mediump float;\nvarying vec2 v_texcoord;\nvarying vec4 v_color;\nuniform sampler2D texture;\nuniform float alpha;\nvoid main() {\n\tvec4 t_color = texture2D(texture, v_texcoord);\n\tgl_FragColor = t_color.rgba * v_color;\n\tgl_FragColor *= alpha;\n}",Qt.preCompile2D(0,512,t,e,null)},t}(),J=function(){function t(t,e,i){this._value=0,this._name2int=t,this._int2name=e,this._int2nameMap=i}s(t,"laya.webgl.shader.ShaderDefines");var e=t.prototype;return e.add=function(t){return"string"==typeof t&&(t=this._name2int[t]),this._value|=t,this._value},e.addInt=function(t){return this._value|=t,this._value},e.remove=function(t){return"string"==typeof t&&(t=this._name2int[t]),this._value&=~t,this._value},e.isDefine=function(t){return(this._value&t)===t},e.getValue=function(){return this._value},e.setValue=function(t){this._value=t},e.toNameDic=function(){var e=this._int2nameMap[this._value];return e||t._toText(this._value,this._int2name,this._int2nameMap)},t._reg=function(t,e,i,r){i[t]=e,r[e]=t},t._toText=function(t,e,i){var r=i[t];if(r)return r;for(var s={},a=1,n=0;n<32&&!((a=1<<n)>t);n++)if(t&a){var h=e[a];h&&(s[h]="")}return i[t]=s,s},t._toInt=function(t,e){for(var i=t.split("."),r=0,s=0,a=i.length;s<a;s++){var n=e[i[s]];if(!n)throw new Error("Defines to int err:"+t+"/"+i[s]);r|=n}return r},t}(),tt=function(){function t(){this.mVBBuffer=null,this.mIBBuffer=null,this.mVBData=null,this.mIBData=null,this.mEleNum=0,this.mTexture=null,this.transform=null,this._vs=null,this._ps=null,this._indexStart=-1,this._verticles=null,this._uvs=null,this._tempMatrix=new b}s(t,"laya.webgl.shader.d2.skinAnishader.SkinMesh");var e=t.prototype;return e.init=function(e,i,r){if(i)this._vs=i;else{this._vs=[];var s=e.width,a=e.height;this._vs.push(0,0,0,0,1,1,1,1),this._vs.push(s,0,1,0,1,1,1,1),this._vs.push(s,a,1,1,1,1,1,1),this._vs.push(0,a,0,1,1,1,1,1)}r?this._ps=r:(t._defaultPS||(t._defaultPS=[]).push(0,1,3,3,1,2),this._ps=t._defaultPS),this.mVBData=new Float32Array(this._vs),this.mIBData=new Uint16Array(this._ps.length),this.mIBData.start=-1,this.mEleNum=this._ps.length,this.mTexture=e},e.init2=function(t,e,i,r,s){this.transform&&(this.transform=null),i?this._ps=i:(this._ps=[],this._ps.push(0,1,3,3,1,2)),this._verticles=r,this._uvs=s,this.mEleNum=this._ps.length,this.mTexture=t,(A.isConchNode||A.isConchApp)&&(this._initMyData(),this.mVBData=new Float32Array(this._vs))},e._initMyData=function(){var e=0,i=0,r=4*this._verticles.length;this._vs=t._tempVS;var s=!1;if(A.isConchNode||A.isConchApp?(this._vs.length=r,s=!0):this._vs.length<r&&(this._vs.length=r,s=!0),t._tVSLen=r,s)for(;e<r;)this._vs[e]=this._verticles[i],this._vs[e+1]=this._verticles[i+1],this._vs[e+2]=this._uvs[i],this._vs[e+3]=this._uvs[i+1],this._vs[e+4]=1,this._vs[e+5]=1,this._vs[e+6]=1,this._vs[e+7]=1,e+=8,i+=2;else for(;e<r;)this._vs[e]=this._verticles[i],this._vs[e+1]=this._verticles[i+1],this._vs[e+2]=this._uvs[i],this._vs[e+3]=this._uvs[i+1],e+=8,i+=2},e.getData2=function(e,i,r){this.mVBBuffer=e,this.mIBBuffer=i,this._initMyData(),e.appendEx2(this._vs,Float32Array,t._tVSLen,4),this._indexStart=i._byteLength;var s;(s=t._tempIB).length<this._ps.length&&(s.length=this._ps.length);for(var a=0,n=this._ps.length;a<n;a++)s[a]=this._ps[a]+r;i.appendEx2(s,Uint16Array,this._ps.length,2)},e.getData=function(t,e,i){if(this.mVBBuffer=t,this.mIBBuffer=e,t.append(this.mVBData),this._indexStart=e._byteLength,this.mIBData.start!=i){for(var r=0,s=this._ps.length;r<s;r++)this.mIBData[r]=this._ps[r]+i;this.mIBData.start=i}e.append(this.mIBData)},e.render=function(t,e,i){if(A.isWebGL&&this.mTexture){t._renderKey=0,t._shader2D.glTexture=null,et.getInstance().addSkinMesh(this);var r=at.createShape(t,this.mIBBuffer,this.mVBBuffer,this.mEleNum,this._indexStart,Et.create(512,0));this.transform||(this.transform=b.EMPTY),this.transform.translate(e,i),b.mul(this.transform,t._curMat,this._tempMatrix),this.transform.translate(-e,-i);var s=r.shaderValue,a=s.u_mmat2||vt.getMatrArray();vt.mat2MatArray(this._tempMatrix,a),s.textureHost=this.mTexture,s.offsetX=0,s.offsetY=0,s.u_mmat2=a,s.ALPHA=t._shader2D.ALPHA,t._submits[t._submits._length++]=r}else A.isConchApp&&this.mTexture&&(this.transform||(this.transform=b.EMPTY),t.setSkinMesh&&t.setSkinMesh(e,i,this._ps,this.mVBData,this.mEleNum,0,this.mTexture,this.transform))},t._tempVS=[],t._tempIB=[],t._defaultPS=null,t._tVSLen=0,t}(),et=function(){function t(){this.ib=null,this.vb=null;bt.mainContext;this.ib=$t.create(35048),this.vb=Jt.create(8)}s(t,"laya.webgl.shader.d2.skinAnishader.SkinMeshBuffer");var e=t.prototype;return e.addSkinMesh=function(t){t.getData2(this.vb,this.ib,this.vb._byteLength/32)},e.reset=function(){this.vb.clear(),this.ib.clear()},t.getInstance=function(){return t.instance=t.instance||new t},t.instance=null,t}(),it=function(){function t(t,e,i,r,s,a,n,h,l){this.r0=0,this.fill=!0,this.r1=Math.PI/2,void 0===l&&(l=0),this.x=t,this.y=e,this.width=i,this.height=r,this.edges=s,this.color=a,this.borderWidth=n,this.borderColor=h}s(t,"laya.webgl.shapes.BasePoly");var e=t.prototype;return i.imps(e,{"laya.webgl.shapes.IShape":!0}),e.getData=function(t,e,i){},e.rebuild=function(t){},e.setMatrix=function(t){},e.needUpdate=function(t){return!0},e.sector=function(t,e,i){var r=this.x,s=this.y,a=this.edges,n=(this.r1-this.r0)/a,h=this.width,l=this.height,o=this.color,u=(o>>16&255)/255,_=(o>>8&255)/255,c=(255&o)/255;t.push(r,s,u,_,c);for(var f=0;f<a+1;f++)t.push(r+Math.sin(n*f+this.r0)*h,s+Math.cos(n*f+this.r0)*l),t.push(u,_,c);for(f=0;f<a;f++)e.push(i,i+f+1,i+f+2)},e.createLine2=function(t,e,i,r,s,a){var n,h,l,o,u,_,c,f,d,m,p,g,v,x,b,y,T,A,E,S,w=t.concat(),R=s,I=this.borderColor,M=(I>>16&255)/255,C=(I>>8&255)/255,L=(255&I)/255,P=w.length/2,D=r,F=i/2;l=w[0],o=w[1],m=l-(u=w[2]),d=(d=-(o-(_=w[3])))/(S=Math.sqrt(d*d+m*m))*F,m=m/S*F,R.push(l-d+this.x,o-m+this.y,M,C,L,l+d+this.x,o+m+this.y,M,C,L);for(var B=1;B<P-1;B++)l=w[2*(B-1)],o=w[2*(B-1)+1],u=w[2*B],_=w[2*B+1],c=w[2*(B+1)],f=w[2*(B+1)+1],m=l-u,g=u-c,b=(-(d=(d=-(o-_))/(S=Math.sqrt(d*d+m*m))*F)+l)*(-(m=m/S*F)+_)-(-d+u)*(-m+o),A=(-(p=(p=-(_-f))/(S=Math.sqrt(p*p+g*g))*F)+c)*(-(g=g/S*F)+_)-(-p+u)*(-g+f),E=(v=-m+o-(-m+_))*(T=-p+u-(-p+c))-(y=-g+f-(-g+_))*(x=-d+u-(-d+l)),Math.abs(E)<.1?(E+=10.1,R.push(u-d+this.x,_-m+this.y,M,C,L,u+d+this.x,_+m+this.y,M,C,L)):(((n=(x*A-T*b)/E)-u)*(n-u)+((h=(y*b-v*A)/E)-_)+(h-_),R.push(n+this.x,h+this.y,M,C,L,u-(n-u)+this.x,_-(h-_)+this.y,M,C,L));l=w[w.length-4],o=w[w.length-3],m=l-(u=w[w.length-2]),d=(d=-(o-(_=w[w.length-1])))/(S=Math.sqrt(d*d+m*m))*F,m=m/S*F,R.push(u-d+this.x,_-m+this.y,M,C,L,u+d+this.x,_+m+this.y,M,C,L);var N=a;for(B=1;B<N;B++)e.push(D+2*(B-1),D+2*(B-1)+1,D+2*B+1,D+2*B+1,D+2*B,D+2*(B-1));return R},e.createLine=function(t,e,i,r){var s=t.concat(),a=t,n=this.borderColor,h=(n>>16&255)/255,l=(n>>8&255)/255,o=(255&n)/255;s.splice(0,5);var u,_,c,f,d,m,p,g,v,x,b,y,T,A,E,S,w,R,I,M,C=s.length/5,L=r,P=i/2;c=s[0],f=s[1],x=c-(d=s[5]),v=(v=-(f-(m=s[6])))/(M=Math.sqrt(v*v+x*x))*P,x=x/M*P,a.push(c-v,f-x,h,l,o,c+v,f+x,h,l,o);for(var D=1;D<C-1;D++)c=s[5*(D-1)],f=s[5*(D-1)+1],d=s[5*D],m=s[5*D+1],p=s[5*(D+1)],g=s[5*(D+1)+1],x=c-d,y=d-p,E=(-(v=(v=-(f-m))/(M=Math.sqrt(v*v+x*x))*P)+c)*(-(x=x/M*P)+m)-(-v+d)*(-x+f),R=(-(b=(b=-(m-g))/(M=Math.sqrt(b*b+y*y))*P)+p)*(-(y=y/M*P)+m)-(-b+d)*(-y+g),I=(T=-x+f-(-x+m))*(w=-b+d-(-b+p))-(S=-y+g-(-y+m))*(A=-v+d-(-v+c)),Math.abs(I)<.1?(I+=10.1,a.push(d-v,m-x,h,l,o,d+v,m+x,h,l,o)):(((u=(A*R-w*E)/I)-d)*(u-d)+((_=(S*E-T*R)/I)-m)+(_-m),a.push(u,_,h,l,o,d-(u-d),m-(_-m),h,l,o));c=s[s.length-10],f=s[s.length-9],x=c-(d=s[s.length-5]),v=(v=-(f-(m=s[s.length-4])))/(M=Math.sqrt(v*v+x*x))*P,x=x/M*P,a.push(d-v,m-x,h,l,o,d+v,m+x,h,l,o);var F=this.edges+1;for(D=1;D<F;D++)e.push(L+2*(D-1),L+2*(D-1)+1,L+2*D+1,L+2*D+1,L+2*D,L+2*(D-1));return a},e.createLoopLine=function(t,e,i,r,s,a){var n=t.concat(),h=s||t,l=this.borderColor,o=(l>>16&255)/255,u=(l>>8&255)/255,_=(255&l)/255;n.splice(0,5);var c=[n[0],n[1]],f=[n[n.length-5],n[n.length-4]],d=f[0]+.5*(c[0]-f[0]),m=f[1]+.5*(c[1]-f[1]);n.unshift(d,m,0,0,0),n.push(d,m,0,0,0);var p,g,v,x,b,y,T,A,E,S,w,R,I,M,C,L,P,D,F,B,N=n.length/5,O=r,V=i/2;v=n[0],x=n[1],S=v-(b=n[5]),E=(E=-(x-(y=n[6])))/(B=Math.sqrt(E*E+S*S))*V,S=S/B*V,h.push(v-E,x-S,o,u,_,v+E,x+S,o,u,_);for(var U=1;U<N-1;U++)v=n[5*(U-1)],x=n[5*(U-1)+1],b=n[5*U],y=n[5*U+1],T=n[5*(U+1)],A=n[5*(U+1)+1],S=v-b,R=b-T,C=(-(E=(E=-(x-y))/(B=Math.sqrt(E*E+S*S))*V)+v)*(-(S=S/B*V)+y)-(-E+b)*(-S+x),D=(-(w=(w=-(y-A))/(B=Math.sqrt(w*w+R*R))*V)+T)*(-(R=R/B*V)+y)-(-w+b)*(-R+A),F=(I=-S+x-(-S+y))*(P=-w+b-(-w+T))-(L=-R+A-(-R+y))*(M=-E+b-(-E+v)),Math.abs(F)<.1?(F+=10.1,h.push(b-E,y-S,o,u,_,b+E,y+S,o,u,_)):(((p=(M*D-P*C)/F)-b)*(p-b)+((g=(L*C-I*D)/F)-y)+(g-y),h.push(p,g,o,u,_,b-(p-b),y-(g-y),o,u,_));a&&(e=a);var k=this.edges+1;for(U=1;U<k;U++)e.push(O+2*(U-1),O+2*(U-1)+1,O+2*U+1,O+2*U+1,O+2*U,O+2*(U-1));return e.push(O+2*(U-1),O+2*(U-1)+1,O+1,O+1,O,O+2*(U-1)),h},t}(),rt=function(){function t(){}return s(t,"laya.webgl.shapes.Earcut"),t.earcut=function(e,i,r){r=r||2;var s=i&&i.length,a=s?i[0]*r:e.length,n=t.linkedList(e,0,a,r,!0),h=[];if(!n)return h;var l,o,u,_,c,f,d;if(s&&(n=t.eliminateHoles(e,i,n,r)),e.length>80*r){l=u=e[0],o=_=e[1];for(var m=r;m<a;m+=r)c=e[m],f=e[m+1],c<l&&(l=c),f<o&&(o=f),c>u&&(u=c),f>_&&(_=f);d=0!==(d=Math.max(u-l,_-o))?1/d:0}return t.earcutLinked(n,h,r,l,o,d),h},t.linkedList=function(e,i,r,s,a){var n,h;if(a===t.signedArea(e,i,r,s)>0)for(n=i;n<r;n+=s)h=t.insertNode(n,e[n],e[n+1],h);else for(n=r-s;n>=i;n-=s)h=t.insertNode(n,e[n],e[n+1],h);return h&&t.equals(h,h.next)&&(t.removeNode(h),h=h.next),h},t.filterPoints=function(e,i){if(!e)return e;i||(i=e);var r,s=e;do{if(r=!1,s.steiner||!t.equals(s,s.next)&&0!==t.area(s.prev,s,s.next))s=s.next;else{if(t.removeNode(s),(s=i=s.prev)===s.next)break;r=!0}}while(r||s!==i);return i},t.earcutLinked=function(e,i,r,s,a,n,h){if(e){!h&&n&&t.indexCurve(e,s,a,n);for(var l,o,u=e;e.prev!==e.next;)if(l=e.prev,o=e.next,n?t.isEarHashed(e,s,a,n):t.isEar(e))i.push(l.i/r),i.push(e.i/r),i.push(o.i/r),t.removeNode(e),e=o.next,u=o.next;else if((e=o)===u){h?1===h?(e=t.cureLocalIntersections(e,i,r),t.earcutLinked(e,i,r,s,a,n,2)):2===h&&t.splitEarcut(e,i,r,s,a,n):t.earcutLinked(t.filterPoints(e,null),i,r,s,a,n,1);break}}},t.isEar=function(e){var i=e.prev,r=e,s=e.next;if(t.area(i,r,s)>=0)return!1;for(var a=e.next.next;a!==e.prev;){if(t.pointInTriangle(i.x,i.y,r.x,r.y,s.x,s.y,a.x,a.y)&&t.area(a.prev,a,a.next)>=0)return!1;a=a.next}return!0},t.isEarHashed=function(e,i,r,s){var a=e.prev,n=e,h=e.next;if(t.area(a,n,h)>=0)return!1;for(var l=a.x<n.x?a.x<h.x?a.x:h.x:n.x<h.x?n.x:h.x,o=a.y<n.y?a.y<h.y?a.y:h.y:n.y<h.y?n.y:h.y,u=a.x>n.x?a.x>h.x?a.x:h.x:n.x>h.x?n.x:h.x,_=a.y>n.y?a.y>h.y?a.y:h.y:n.y>h.y?n.y:h.y,c=t.zOrder(l,o,i,r,s),f=t.zOrder(u,_,i,r,s),d=e.nextZ;d&&d.z<=f;){if(d!==e.prev&&d!==e.next&&t.pointInTriangle(a.x,a.y,n.x,n.y,h.x,h.y,d.x,d.y)&&t.area(d.prev,d,d.next)>=0)return!1;d=d.nextZ}for(d=e.prevZ;d&&d.z>=c;){if(d!==e.prev&&d!==e.next&&t.pointInTriangle(a.x,a.y,n.x,n.y,h.x,h.y,d.x,d.y)&&t.area(d.prev,d,d.next)>=0)return!1;d=d.prevZ}return!0},t.cureLocalIntersections=function(e,i,r){var s=e;do{var a=s.prev,n=s.next.next;!t.equals(a,n)&&t.intersects(a,s,s.next,n)&&t.locallyInside(a,n)&&t.locallyInside(n,a)&&(i.push(a.i/r),i.push(s.i/r),i.push(n.i/r),t.removeNode(s),t.removeNode(s.next),s=e=n),s=s.next}while(s!==e);return s},t.splitEarcut=function(e,i,r,s,a,n){var h=e;do{for(var l=h.next.next;l!==h.prev;){if(h.i!==l.i&&t.isValidDiagonal(h,l)){var o=t.splitPolygon(h,l);return h=t.filterPoints(h,h.next),o=t.filterPoints(o,o.next),t.earcutLinked(h,i,r,s,a,n),void t.earcutLinked(o,i,r,s,a,n)}l=l.next}h=h.next}while(h!==e)},t.eliminateHoles=function(e,i,r,s){var a,n,h,l,o,u=[];for(a=0,n=i.length;a<n;a++)h=i[a]*s,l=a<n-1?i[a+1]*s:e.length,(o=t.linkedList(e,h,l,s,!1))===o.next&&(o.steiner=!0),u.push(t.getLeftmost(o));for(u.sort(t.compareX),a=0;a<u.length;a++)t.eliminateHole(u[a],r),r=t.filterPoints(r,r.next);return r},t.compareX=function(t,e){return t.x-e.x},t.eliminateHole=function(e,i){if(i=t.findHoleBridge(e,i)){var r=t.splitPolygon(i,e);t.filterPoints(r,r.next)}},t.findHoleBridge=function(e,i){var r,s=i,a=e.x,n=e.y,h=-1/0;do{if(n<=s.y&&n>=s.next.y&&s.next.y!==s.y){var l=s.x+(n-s.y)*(s.next.x-s.x)/(s.next.y-s.y);if(l<=a&&l>h){if(h=l,l===a){if(n===s.y)return s;if(n===s.next.y)return s.next}r=s.x<s.next.x?s:s.next}}s=s.next}while(s!==i);if(!r)return null;if(a===h)return r.prev;var o,u=r,_=r.x,c=r.y,f=1/0;for(s=r.next;s!==u;)a>=s.x&&s.x>=_&&a!==s.x&&t.pointInTriangle(n<c?a:h,n,_,c,n<c?h:a,n,s.x,s.y)&&((o=Math.abs(n-s.y)/(a-s.x))<f||o===f&&s.x>r.x)&&t.locallyInside(s,e)&&(r=s,f=o),s=s.next;return r},t.indexCurve=function(e,i,r,s){var a=e;do{null===a.z&&(a.z=t.zOrder(a.x,a.y,i,r,s)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next}while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,t.sortLinked(a)},t.sortLinked=function(t){var e,i,r,s,a,n,h,l,o=1;do{for(i=t,t=null,a=null,n=0;i;){for(n++,r=i,h=0,e=0;e<o&&(h++,r=r.nextZ);e++);for(l=o;h>0||l>0&&r;)0!==h&&(0===l||!r||i.z<=r.z)?(s=i,i=i.nextZ,h--):(s=r,r=r.nextZ,l--),a?a.nextZ=s:t=s,s.prevZ=a,a=s;i=r}a.nextZ=null,o*=2}while(n>1);return t},t.zOrder=function(t,e,i,r,s){return t=32767*(t-i)*s,e=32767*(e-r)*s,t=16711935&(t|t<<8),t=252645135&(t|t<<4),t=858993459&(t|t<<2),t=1431655765&(t|t<<1),e=16711935&(e|e<<8),e=252645135&(e|e<<4),e=858993459&(e|e<<2),e=1431655765&(e|e<<1),t|e<<1},t.getLeftmost=function(t){var e=t,i=t;do{e.x<i.x&&(i=e),e=e.next}while(e!==t);return i},t.pointInTriangle=function(t,e,i,r,s,a,n,h){return(s-n)*(e-h)-(t-n)*(a-h)>=0&&(t-n)*(r-h)-(i-n)*(e-h)>=0&&(i-n)*(a-h)-(s-n)*(r-h)>=0},t.isValidDiagonal=function(e,i){return e.next.i!==i.i&&e.prev.i!==i.i&&!t.intersectsPolygon(e,i)&&t.locallyInside(e,i)&&t.locallyInside(i,e)&&t.middleInside(e,i)},t.area=function(t,e,i){return(e.y-t.y)*(i.x-e.x)-(e.x-t.x)*(i.y-e.y)},t.equals=function(t,e){return t.x===e.x&&t.y===e.y},t.intersects=function(e,i,r,s){return!!(t.equals(e,i)&&t.equals(r,s)||t.equals(e,s)&&t.equals(r,i))||t.area(e,i,r)>0!=t.area(e,i,s)>0&&t.area(r,s,e)>0!=t.area(r,s,i)>0},t.intersectsPolygon=function(e,i){var r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==i.i&&r.next.i!==i.i&&t.intersects(r,r.next,e,i))return!0;r=r.next}while(r!==e);return!1},t.locallyInside=function(e,i){return t.area(e.prev,e,e.next)<0?t.area(e,i,e.next)>=0&&t.area(e,e.prev,i)>=0:t.area(e,i,e.prev)<0||t.area(e,e.next,i)<0},t.middleInside=function(t,e){var i=t,r=!1,s=(t.x+e.x)/2,a=(t.y+e.y)/2;do{i.y>a!=i.next.y>a&&i.next.y!==i.y&&s<(i.next.x-i.x)*(a-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next}while(i!==t);return r},t.splitPolygon=function(t,e){var i=new st(t.i,t.x,t.y),r=new st(e.i,e.x,e.y),s=t.next,a=e.prev;return t.next=e,e.prev=t,i.next=s,s.prev=i,r.next=i,i.prev=r,a.next=r,r.prev=a,r},t.insertNode=function(t,e,i,r){var s=new st(t,e,i);return r?(s.next=r.next,s.prev=r,r.next.prev=s,r.next=s):(s.prev=s,s.next=s),s},t.removeNode=function(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)},t.signedArea=function(t,e,i,r){for(var s=0,a=e,n=i-r;a<i;a+=r)s+=(t[n]-t[a])*(t[a+1]+t[n+1]),n=a;return s},t}(),st=function(){function t(t,e,i){this.i=null,this.x=null,this.y=null,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=null,this.i=t,this.x=e,this.y=i,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}return s(t,"laya.webgl.shapes.EarcutNode"),t}(),at=(function(){function t(t,e,i,r,s,a,n){this.lineWidth=t,this.lineColor=e,this.lineAlpha=i,this.fillColor=r,this.fillAlpha=s,this.shape=n,this.fill=a}s(t,"laya.webgl.shapes.GeometryData");var e=t.prototype;e.clone=function(){return new t(this.lineWidth,this.lineColor,this.lineAlpha,this.fillColor,this.fillAlpha,this.fill,this.shape)},e.getIndexData=function(){return null},e.getVertexData=function(){return null},e.destroy=function(){this.shape=null}}(),function(){function t(t){if(t instanceof Float32Array)this.points=t;else if(t instanceof Array){t.length;this.points=new Float32Array(t)}}s(t,"laya.webgl.shapes.Vertex");var e=t.prototype;i.imps(e,{"laya.webgl.shapes.IShape":!0}),e.getData=function(t,e,i){},e.needUpdate=function(t){return!1},e.rebuild=function(t){},e.setMatrix=function(t){}}(),function(){function t(t){void 0===t&&(t=1e4),this._renderType=t}s(t,"laya.webgl.submit.Submit");var e=t.prototype;return i.imps(e,{"laya.webgl.submit.ISubmit":!0}),e.releaseRender=function(){var e=t._cache;e[e._length++]=this,this.shaderValue.release(),this._vb=null},e.getRenderType=function(){return this._renderType},e.renderSubmit=function(){if(0===this._numEle)return 1;var t=this.shaderValue.textureHost;if(t){var e=t.source;if(!t.bitmap||!e)return 1;this.shaderValue.texture=e}this._vb.bind_upload(this._ib);var i=bt.mainContext;return this.shaderValue.upload(),G.activeBlendFunction!==this._blendFn&&(i.enable(3042),this._blendFn(i),G.activeBlendFunction=this._blendFn),C.drawCall++,C.trianglesFaces+=this._numEle/3,i.drawElements(4,this._numEle,5123,this._startIdx),1},t.__init__=function(){var e=t.RENDERBASE=new t(-1);e.shaderValue=new Et(0,0),e.shaderValue.ALPHA=-1234},t.createSubmit=function(e,i,r,s,a){var n=t._cache._length?t._cache[--t._cache._length]:new t;null==r&&((r=n._selfVb||(n._selfVb=Jt.create(-1))).clear(),s=0),n._ib=i,n._vb=r,n._startIdx=s*mt.BYTES_PIDX,n._numEle=0;var h=e._nBlendType;n._blendFn=e._targets?G.targetFns[h]:G.fns[h],n.shaderValue=a,n.shaderValue.setValue(e._shader2D);var l=e._shader2D.filters;return l&&n.shaderValue.setFilters(l),n},t.createShape=function(e,i,r,s,a,n){var h=t._cache._length?t._cache[--t._cache._length]:new t;h._ib=i,h._vb=r,h._numEle=s,h._startIdx=a,h.shaderValue=n,h.shaderValue.setValue(e._shader2D);var l=e._nBlendType;return h._blendFn=e._targets?G.targetFns[l]:G.fns[l],h},t.TYPE_2D=1e4,t.TYPE_CANVAS=10003,t.TYPE_CMDSETRT=10004,t.TYPE_CUSTOM=10005,t.TYPE_BLURRT=10006,t.TYPE_CMDDESTORYPRERT=10007,t.TYPE_DISABLESTENCIL=10008,t.TYPE_OTHERIBVB=10009,t.TYPE_PRIMITIVE=10010,t.TYPE_RT=10011,t.TYPE_BLUR_RT=10012,t.TYPE_TARGET=10013,t.TYPE_CHANGE_VALUE=10014,t.TYPE_SHAPE=10015,t.TYPE_TEXTURE=10016,t.TYPE_FILLTEXTURE=10017,t.RENDERBASE=null,t._cache=(t._cache=[],t._cache._length=0,t._cache),t}()),nt=function(){function t(){this.fun=null,this.args=null}s(t,"laya.webgl.submit.SubmitCMD");var e=t.prototype;return i.imps(e,{"laya.webgl.submit.ISubmit":!0}),e.renderSubmit=function(){return this.fun.apply(null,this.args),1},e.getRenderType=function(){return 0},e.releaseRender=function(){var e=t._cache;e[e._length++]=this},t.create=function(e,i){var r=t._cache._length?t._cache[--t._cache._length]:new t;return r.fun=i,r.args=e,r},t._cache=(t._cache=[],t._cache._length=0,t._cache),t}(),ht=function(){function t(){this.variables={}}s(t,"laya.webgl.submit.SubmitCMDScope");var e=t.prototype;return e.getValue=function(t){return this.variables[t]},e.addValue=function(t,e){return this.variables[t]=e},e.setValue=function(t,e){return this.variables.hasOwnProperty(t)?this.variables[t]=e:null},e.clear=function(){for(var t in this.variables)delete this.variables[t]},e.recycle=function(){this.clear(),t.POOL.push(this)},t.create=function(){var e=t.POOL.pop();return e||(e=new t),e},t.POOL=[],t}(),lt=function(){function t(){this.offset=0,this.startIndex=0,this._mat=b.create()}s(t,"laya.webgl.submit.SubmitOtherIBVB");var e=t.prototype;return i.imps(e,{"laya.webgl.submit.ISubmit":!0}),e.releaseRender=function(){var e=t._cache;e[e._length++]=this},e.getRenderType=function(){return 10009},e.renderSubmit=function(){var e=this._shaderValue.textureHost;if(e){var i=e.source;if(!e.bitmap||!i)return 1;this._shaderValue.texture=i}this._vb.bind_upload(this._ib);var r=vt.worldMatrix4,s=b.TEMP;b.mulPre(this._mat,r[0],r[1],r[4],r[5],r[12],r[13],s);var a=vt.worldMatrix4=t.tempMatrix4;a[0]=s.a,a[1]=s.b,a[4]=s.c,a[5]=s.d,a[12]=s.tx,a[13]=s.ty,this._shader._offset=this.offset,this._shaderValue.refresh(),this._shader.upload(this._shaderValue),this._shader._offset=0;var n=bt.mainContext;return G.activeBlendFunction!==this._blendFn&&(n.enable(3042),this._blendFn(n),G.activeBlendFunction=this._blendFn),C.drawCall++,C.trianglesFaces+=this._numEle/3,n.drawElements(4,this._numEle,5123,this.startIndex),vt.worldMatrix4=r,Bt.activeShader=null,1},t.create=function(e,i,r,s,a,n,h,l,o){void 0===o&&(o=0);var u=t._cache._length?t._cache[--t._cache._length]:new t;u._ib=r,u._vb=i,u._numEle=s,u._shader=a,u._shaderValue=n;var _=e._nBlendType;switch(u._blendFn=e._targets?G.targetFns[_]:G.fns[_],o){case 0:u.offset=0,u.startIndex=l/(mt.BYTES_PE*i.vertexStride)*1.5,u.startIndex*=mt.BYTES_PIDX;break;case 1:u.startIndex=h,u.offset=l}return u},t._cache=(t._cache=[],t._cache._length=0,t._cache),t.tempMatrix4=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t}(),ot=function(){function t(){this.submitIndex=0,this.submitLength=0,this.context=null,this.clipRect=new T,this.screenRect=new T}s(t,"laya.webgl.submit.SubmitScissor");var e=t.prototype;return i.imps(e,{"laya.webgl.submit.ISubmit":!0}),e._scissor=function(t,e,i,r){var s=vt.worldMatrix4,a=s[0],n=s[5];if(t=t*a+s[12],e=e*n+s[13],i*=a,r*=n,i<1||r<1)return!1;var h=t+i,l=e+r;t<0&&(t=0,i=h-t),e<0&&(e=0,r=l-e);var o=vt.worldClipRect;if(t=Math.max(t,o.x),e=Math.max(e,o.y),i=Math.min(h,o.right)-t,r=Math.min(l,o.bottom)-e,i<1||r<1)return!1;var u=vt.worldScissorTest;return this.screenRect.copyFrom(o),o.x=t,o.y=e,o.width=i,o.height=r,vt.worldScissorTest=!0,e=vt.height-e-r,bt.mainContext.scissor(t,e,i,r),bt.mainContext.enable(3089),this.context.submitElement(this.submitIndex,this.submitIndex+this.submitLength),u?(e=vt.height-this.screenRect.y-this.screenRect.height,bt.mainContext.scissor(this.screenRect.x,e,this.screenRect.width,this.screenRect.height),bt.mainContext.enable(3089)):(bt.mainContext.disable(3089),vt.worldScissorTest=!1),o.copyFrom(this.screenRect),!0},e._scissorWithTagart=function(t,e,i,r){if(i<1||r<1)return!1;var s=t+i,a=e+r;t<0&&(t=0,i=s-t),e<0&&(e=0,r=a-e);var n=vt.worldClipRect;if(t=Math.max(t,n.x),e=Math.max(e,n.y),i=Math.min(s,n.right)-t,r=Math.min(a,n.bottom)-e,i<1||r<1)return!1;var h=vt.worldScissorTest;return this.screenRect.copyFrom(n),vt.worldScissorTest=!0,n.x=t,n.y=e,n.width=i,n.height=r,e=vt.height-e-r,bt.mainContext.scissor(t,e,i,r),bt.mainContext.enable(3089),this.context.submitElement(this.submitIndex,this.submitIndex+this.submitLength),h?(e=vt.height-this.screenRect.y-this.screenRect.height,bt.mainContext.scissor(this.screenRect.x,e,this.screenRect.width,this.screenRect.height),bt.mainContext.enable(3089)):(bt.mainContext.disable(3089),vt.worldScissorTest=!1),n.copyFrom(this.screenRect),!0},e.renderSubmit=function(){return this.submitLength=Math.min(this.context._submits._length-1,this.submitLength),this.submitLength<1||this.clipRect.width<1||this.clipRect.height<1?this.submitLength+1:(this.context._targets?this._scissorWithTagart(this.clipRect.x,this.clipRect.y,this.clipRect.width,this.clipRect.height):this._scissor(this.clipRect.x,this.clipRect.y,this.clipRect.width,this.clipRect.height),this.submitLength+1)},e.getRenderType=function(){return 0},e.releaseRender=function(){var e=t._cache;e[e._length++]=this,this.context=null},t.create=function(e){var i=t._cache._length?t._cache[--t._cache._length]:new t;return i.context=e,i},t._cache=(t._cache=[],t._cache._length=0,t._cache),t}(),ut=function(){function t(){this.step=0,this.blendMode=null,this.level=0}s(t,"laya.webgl.submit.SubmitStencil");var e=t.prototype;return i.imps(e,{"laya.webgl.submit.ISubmit":!0}),e.renderSubmit=function(){switch(this.step){case 1:this.do1();break;case 2:this.do2();break;case 3:this.do3();break;case 4:this.do4();break;case 5:this.do5();break;case 6:this.do6();break;case 7:this.do7();break;case 8:this.do8()}return 1},e.getRenderType=function(){return 0},e.releaseRender=function(){var e=t._cache;e[e._length++]=this},e.do1=function(){var t=bt.mainContext;t.enable(2960),t.clear(1024),t.colorMask(!1,!1,!1,!1),t.stencilFunc(514,this.level,255),t.stencilOp(7680,7680,7682)},e.do2=function(){var t=bt.mainContext;t.stencilFunc(514,this.level+1,255),t.colorMask(!0,!0,!0,!0),t.stencilOp(7680,7680,7680)},e.do3=function(){var t=bt.mainContext;t.colorMask(!0,!0,!0,!0),t.stencilOp(7680,7680,7680),t.clear(1024),t.disable(2960)},e.do4=function(){var t=bt.mainContext;0==this.level&&(t.enable(2960),t.clear(1024)),t.colorMask(!1,!1,!1,!1),t.stencilFunc(519,0,255),t.stencilOp(7680,7680,7682)},e.do5=function(){var t=bt.mainContext;t.stencilFunc(514,this.level,255),t.colorMask(!0,!0,!0,!0),t.stencilOp(7680,7680,7680)},e.do6=function(){var t=bt.mainContext;G.targetFns[G.TOINT[this.blendMode]](t)},e.do7=function(){var t=bt.mainContext;t.colorMask(!1,!1,!1,!1),t.stencilOp(7680,7680,7683)},e.do8=function(){var t=bt.mainContext;t.colorMask(!0,!0,!0,!0),t.stencilFunc(514,this.level,255),t.stencilOp(7680,7680,7680)},t.restore=function(e,i,r,s,a){var n;if(e._renderKey=0,t._mask>0&&t._mask--,0==t._mask)n=laya.webgl.submit.SubmitStencil.create(3),e.addRenderObject(n),e._curSubmit=at.RENDERBASE;else{n=laya.webgl.submit.SubmitStencil.create(7),e.addRenderObject(n);var h=e._vb;h._byteLength;if(pt.fillRectImgVb(h,null,i.x,i.y,i.width,i.height,F.DEF_UV,r,s,a,0,0)){e._shader2D.glTexture=null;var l=e._curSubmit=at.createSubmit(e,e._ib,h,(h._byteLength-64)/32*3,Et.create(2,0));l.shaderValue.ALPHA=1,e._submits[e._submits._length++]=l,e._curSubmit._numEle+=6,e._curSubmit=at.RENDERBASE}else alert("clipRect calc stencil rect error");n=laya.webgl.submit.SubmitStencil.create(8),e.addRenderObject(n)}},t.restore2=function(e,i){var r;e._renderKey=0,t._mask>0&&t._mask--,0==t._mask?(r=laya.webgl.submit.SubmitStencil.create(3),e.addRenderObject(r),e._curSubmit=at.RENDERBASE):(r=laya.webgl.submit.SubmitStencil.create(7),e.addRenderObject(r),e._submits[e._submits._length++]=i,r=laya.webgl.submit.SubmitStencil.create(8),e.addRenderObject(r))},t.create=function(e){var i=t._cache._length?t._cache[--t._cache._length]:new t;return i.step=e,5==e&&++t._mask,i.level=t._mask,i},t._cache=(t._cache=[],t._cache._length=0,t._cache),t._mask=0,t}(),_t=function(){function t(){this._renderType=0,this._vb=null,this._ib=null,this._startIdx=0,this._numEle=0,this.shaderValue=null,this.blendType=0,this.proName=null,this.scope=null}s(t,"laya.webgl.submit.SubmitTarget");var e=t.prototype;return i.imps(e,{"laya.webgl.submit.ISubmit":!0}),e.renderSubmit=function(){this._vb.bind_upload(this._ib);var t=this.scope.getValue(this.proName);return t&&(this.shaderValue.texture=t.source,this.shaderValue.strength&&!this.shaderValue.blurInfo&&(this.shaderValue.blurInfo=[t.width,t.height]),this.shaderValue.upload(),this.blend(),C.drawCall++,C.trianglesFaces+=this._numEle/3,bt.mainContext.drawElements(4,this._numEle,5123,this._startIdx)),1},e.blend=function(){if(G.activeBlendFunction!==G.fns[this.blendType]){var t=bt.mainContext;t.enable(3042),G.fns[this.blendType](t),G.activeBlendFunction=G.fns[this.blendType]}},e.getRenderType=function(){return 0},e.releaseRender=function(){var e=t._cache;e[e._length++]=this},t.create=function(e,i,r,s,a,n){var h=t._cache._length?t._cache[--t._cache._length]:new t;return h._ib=i,h._vb=r,h.proName=n,h._startIdx=s*mt.BYTES_PIDX,h._numEle=0,h.blendType=e._nBlendType,h.shaderValue=a,h.shaderValue.setValue(e._shader2D),h},t._cache=(t._cache=[],t._cache._length=0,t._cache),t}(),ct=function(){function t(){this._sourceStr=null}s(t,"laya.webgl.text.CharSegment");var e=t.prototype;return i.imps(e,{"laya.webgl.text.ICharSegment":!0}),e.textToSpit=function(t){this._sourceStr=t},e.getChar=function(t){return this._sourceStr.charAt(t)},e.getCharCode=function(t){return this._sourceStr.charCodeAt(t)},e.length=function(){return this._sourceStr.length},t}(),ft=function(){function t(){}var e;return s(t,"laya.webgl.text.DrawText"),t.__init__=function(){t._charsTemp=new Array,t._drawValue=new e,t._charSeg=new ct},t.customCharSeg=function(e){t._charSeg=e},t.getChar=function(e,i,r){var s=Yt.createOneChar(e,r);return-1!=i&&(t._charsCache[i]=s),s},t._drawSlow=function(e,i,r,s,a,n,h,l,o,u,_,c,f,d,m){var p,g,v=t._drawValue.value(n,l,o,u,f,d,m),x=0,b=0,y=t._charsTemp,T=0,A=NaN;if(s)for(y.length=s.length,x=0,b=s.length;x<b;x++)A=(g=s[x]).charNum+v.txtID,y[x]=p=t._charsCache[A]||t.getChar(g.char,A,v),p.active();else{var E=r instanceof laya.utils.WordText?r.toString():r;if(D.CharacterCache){t._charSeg.textToSpit(E);var S=t._charSeg.length();for(y.length=S,x=0,b=S;x<b;x++)A=t._charSeg.getCharCode(x)+v.txtID,y[x]=p=t._charsCache[A]||t.getChar(t._charSeg.getChar(x),A,v),p.active(),T+=p.cw}else y.length=0,(p=t.getChar(E,-1,v)).active(),T+=p.cw,y[0]=p}var w=0;null!==h&&"left"!==h&&(w=-("center"==h?T/2:T));var R,I,M=NaN,C=0;if(s)for(x=0,b=y.length;x<b;x++)(p=y[x]).isSpace||(g=s[x],M=p.borderSize,R=p.texture,i._drawText(R,_+w+g.x*f-M,c+g.y*d-M,R.width,R.height,a,0,0,0,0));else{for(x=0,b=y.length;x<b;x++)(p=y[x]).isSpace||(M=p.borderSize,R=p.texture,i._drawText(R,_+w-M,c-M,R.width,R.height,a,0,0,0,0),e&&((I=e[C++])||(I=e[C-1]=[]),I[0]=R,I[1]=w-M,I[2]=-M)),w+=p.cw;e&&(e.length=C)}},t._drawFast=function(t,e,i,r,s){for(var a,n,h=0,l=t.length;h<l;h++)(a=(n=t[h])[0]).active(),e._drawText(a,r+n[1],s+n[2],a.width,a.height,i,0,0,0,0)},t.drawText=function(e,r,s,a,n,h,l,o,u,_,c,d){if(void 0===d&&(d=0),!(r&&0===r.length||s&&0===s.length)){var m=a.a,p=a.d;(0!==a.b||0!==a.c)&&(m=p=1);var g=1!==m||1!==p;if(g&&i.stage.transform){var v=i.stage.transform;g=v.a===m&&v.d===p}else g=!1;if(g){var x=(a=a.copyTo(At._tmpMatrix)).tx,b=a.ty;a.scale(1/m,1/p),a._checkTransform(),_*=m,c*=p,_+=x-a.tx,c+=b-a.ty}else m=p=1;if(s)t._drawSlow(null,e,r,s,a,n,h,l,o,u,_,c,m,p,d);else{if(null===r.toUpperCase){var y=m+1e5*p,T=r;return void(T.changed||T.id!==y?(T.id=y,T.changed=!1,t._drawSlow(T.save,e,r,s,a,n,h,l,o,u,_,c,m,p,d)):t._drawFast(T.save,e,a,_,c))}var A=r+n.toString()+l+o+u+m+p+h,E=t._textsCache[A];D.CharacterCache?E?t._drawFast(E,e,a,_,c):(t._textsCache.__length||(t._textsCache.__length=0),t._textsCache.__length>f.WebGLTextCacheCount&&((t._textsCache={}).__length=0,t._curPoolIndex=0),t._textCachesPool[t._curPoolIndex]?(E=t._textsCache[A]=t._textCachesPool[t._curPoolIndex],E.length=0):t._textCachesPool[t._curPoolIndex]=E=t._textsCache[A]=[],t._textsCache.__length++,t._curPoolIndex++,t._drawSlow(E,e,r,s,a,n,h,l,o,u,_,c,m,p,d)):t._drawSlow(E,e,r,s,a,n,h,l,o,u,_,c,m,p,d)}}},t._charsTemp=null,t._textCachesPool=[],t._curPoolIndex=0,t._charsCache={},t._textsCache={},t._drawValue=null,t.d=[],t._charSeg=null,t.__init$=function(){e=function(){function t(){}s(t,"");return t.prototype.value=function(e,i,r,s,a,n,h){this.font=e,this.fillColor=i,this.borderColor=r,this.lineWidth=s,this.scaleX=a,this.scaleY=n,this.underLine=h;var l=e.toString()+a+n+s+i+r+h;return this.txtID=t._keymap[l],this.txtID||(this.txtID=1e-7*++t._keymapCount,t._keymap[l]=this.txtID),this},t.clear=function(){t._keymap={},t._keymapCount=1},t._keymap={},t._keymapCount=1,t}()},t}(),dt=function(){function t(e){this._index=0,this._size=14,this._italic=-2,t._cache2=t._cache2||[],this.setFont(e||"14px Arial")}s(t,"laya.webgl.text.FontInContext");var e=t.prototype;return e.setFont=function(e){var i=t._cache2[e];if(i)this._words=i[0],this._size=i[1];else{this._words=e.split(" ");for(var r=0,s=this._words.length;r<s;r++)if(this._words[r].indexOf("px")>0){this._index=r;break}this._size=parseInt(this._words[this._index]),t._cache2[e]=[this._words,this._size]}this._text=null,this._italic=-2},e.getItalic=function(){return-2===this._italic&&(this._italic=this.hasType("italic")),this._italic},e.hasType=function(t){for(var e=0,i=this._words.length;e<i;e++)if(this._words[e]===t)return e;return-1},e.removeType=function(t){for(var e=0,i=this._words.length;e<i;e++)if(this._words[e]===t){this._words.splice(e,1),this._index>e&&this._index--;break}this._text=null,this._italic=-2},e.copyTo=function(t){return t._text=this._text,t._size=this._size,t._index=this._index,t._words=this._words.slice(),t._italic=-2,t},e.toString=function(){return this._text?this._text:this._text=this._words.join(" ")},a(0,e,"size",function(){return this._size},function(t){this._size=t,this._words[this._index]=t+"px",this._text=null}),t.create=function(e){var i=t._cache[e];return i||(i=t._cache[e]=new t(e))},t.EMPTY=new t,t._cache={},t._cache2=null,t}(),mt=function(){function t(){}return s(t,"laya.webgl.utils.CONST3D2D"),t.defaultMatrix4=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t.defaultMinusYMatrix4=[1,0,0,0,0,-1,0,0,0,0,1,0,0,0,0,1],t.uniformMatrix3=[1,0,0,0,0,1,0,0,0,0,1,0],t._TMPARRAY=[],t._OFFSETX=0,t._OFFSETY=0,r(t,["BYTES_PE",function(){return this.BYTES_PE=Float32Array.BYTES_PER_ELEMENT},"BYTES_PIDX",function(){return this.BYTES_PIDX=Uint16Array.BYTES_PER_ELEMENT}]),t}(),pt=function(){function t(){}return s(t,"laya.webgl.utils.GlUtils"),t.make2DProjection=function(t,e,i){return[2/t,0,0,0,0,-2/e,0,0,0,0,2/i,0,-1,1,0,1]},t.fillIBQuadrangle=function(t,e){if(e>65535/4)throw Error("IBQuadrangle count:"+e+" must<:"+Math.floor(65535/4));e=Math.floor(e),t._resizeBuffer(6*(e+1)*2,!1),t.byteLength=t.bufferLength;for(var i=t.getUint16Array(),r=0,s=0;s<e;s++)i[r++]=4*s,i[r++]=4*s+2,i[r++]=4*s+1,i[r++]=4*s,i[r++]=4*s+3,i[r++]=4*s+2;return t.setNeedUpload(),!0},t.expandIBQuadrangle=function(e,i){e.bufferLength>=6*i*2||t.fillIBQuadrangle(e,i)},t.mathCeilPowerOfTwo=function(t){return t--,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,t|=t>>16,++t},t.fillQuadrangleImgVb=function(t,e,i,r,s,a,n,h){var l=16+(t._byteLength>>2);t.byteLength=l<<2;var o=t.getFloat32Array();o[(l-=16)+2]=s[0],o[l+3]=s[1],o[l+6]=s[2],o[l+7]=s[3],o[l+10]=s[4],o[l+11]=s[5],o[l+14]=s[6],o[l+15]=s[7];var u=a.a,_=a.b,c=a.c,f=a.d;if(1!==u||0!==_||0!==c||1!==f){a.bTransform=!0;var d=a.tx+n,m=a.ty+h;o[l]=(r[0]+e)*u+(r[1]+i)*c+d,o[l+1]=(r[0]+e)*_+(r[1]+i)*f+m,o[l+4]=(r[2]+e)*u+(r[3]+i)*c+d,o[l+5]=(r[2]+e)*_+(r[3]+i)*f+m,o[l+8]=(r[4]+e)*u+(r[5]+i)*c+d,o[l+9]=(r[4]+e)*_+(r[5]+i)*f+m,o[l+12]=(r[6]+e)*u+(r[7]+i)*c+d,o[l+13]=(r[6]+e)*_+(r[7]+i)*f+m}else a.bTransform=!1,e+=a.tx+n,i+=a.ty+h,o[l]=e+r[0],o[l+1]=i+r[1],o[l+4]=e+r[2],o[l+5]=i+r[3],o[l+8]=e+r[4],o[l+9]=i+r[5],o[l+12]=e+r[6],o[l+13]=i+r[7];return t._upload=!0,!0},t.fillTranglesVB=function(t,e,i,r,s,a,n){var h=(t._byteLength>>2)+r.length;t.byteLength=h<<2;var l=t.getFloat32Array();h-=r.length;for(var o=r.length,u=s.a,_=s.b,c=s.c,f=s.d,d=0;d<o;d+=4)if(l[h+d+2]=r[d+2],l[h+d+3]=r[d+3],1!==u||0!==_||0!==c||1!==f){s.bTransform=!0;var m=s.tx+a,p=s.ty+n;l[h+d]=(r[d]+e)*u+(r[d+1]+i)*c+m,l[h+d+1]=(r[d]+e)*_+(r[d+1]+i)*f+p}else s.bTransform=!1,e+=s.tx+a,i+=s.ty+n,l[h+d]=e+r[d],l[h+d+1]=i+r[d+1];return t._upload=!0,!0},t.copyPreImgVb=function(t,e,i){var r=t._byteLength>>2;t.byteLength=r+16<<2;for(var s=t.getFloat32Array(),a=0,n=r-16;a<4;a++)s[r]=s[n]+e,++n,s[++r]=s[n]+i,++n,s[++r]=s[n],++n,s[++r]=s[n],++r,++n;t._upload=!0},t.fillRectImgVb=function(t,e,i,r,s,a,n,h,l,o,u,_,c){void 0===c&&(c=!1);var f,d,m,p,g,v,x,b,y,T,A,E,S,w,R,I,M=1,C=h.a,L=h.b,P=h.c,D=h.d,F=e&&e.width<99999999;if(1!==C||0!==L||0!==P||1!==D?(h.bTransform=!0,0===L&&0===P&&(M=23,y=s+i,T=a+r,f=C*i+(A=h.tx+l),m=C*y+A,d=D*r+(E=h.ty+o),p=D*T+E)):(M=23,h.bTransform=!1,m=(f=i+h.tx+l)+s,p=(d=r+h.ty+o)+a),F&&(g=e.x,v=e.y,x=e.width+g,b=e.height+v),1!==M){if(Math.min(f,m)>=x)return!1;if(Math.min(d,p)>=b)return!1;if(Math.max(m,f)<=g)return!1;if(Math.max(p,d)<=v)return!1}var B=t._byteLength>>2;t.byteLength=B+16<<2;var N=t.getFloat32Array();switch(N[B+2]=n[0],N[B+3]=n[1],N[B+6]=n[2],N[B+7]=n[3],N[B+10]=n[4],N[B+11]=n[5],N[B+14]=n[6],N[B+15]=n[7],M){case 1:A=h.tx+l,E=h.ty+o;var O=i,V=r,U=C*O,k=P*V,H=D*V,G=L*O,W=C*(y=s+i),z=P*(T=a+r),Y=D*T,X=L*y;c?(S=U+k+A,R=Math.round(S)-S,w=H+G+E,I=Math.round(w)-w,N[B]=S+R,N[B+1]=w+I,N[B+4]=W+k+A+R,N[B+5]=H+X+E+I,N[B+8]=W+z+A+R,N[B+9]=Y+X+E+I,N[B+12]=U+z+A+R,N[B+13]=Y+G+E+I):(N[B]=U+k+A,N[B+1]=H+G+E,N[B+4]=W+k+A,N[B+5]=H+X+E,N[B+8]=W+z+A,N[B+9]=Y+X+E,N[B+12]=U+z+A,N[B+13]=Y+G+E);break;case 23:c?(S=f+u,R=Math.round(S)-S,w=d,I=Math.round(w)-w,N[B]=S+R,N[B+1]=w+I,N[B+4]=m+u+R,N[B+5]=d+I,N[B+8]=m+R,N[B+9]=p+I,N[B+12]=f+R,N[B+13]=p+I):(N[B]=f+u,N[B+1]=d,N[B+4]=m+u,N[B+5]=d,N[B+8]=m,N[B+9]=p,N[B+12]=f,N[B+13]=p)}return t._upload=!0,!0},t.fillLineVb=function(e,i,r,s,a,n,h,l){var o=.5*h,u=t._fillLineArray,_=-(s-n),c=r-a,f=Math.sqrt(_*_+c*c);_/=f,c/=f,_*=o,c*=o,u[0]=r-_,u[1]=s-c,u[4]=r+_,u[5]=s+c,u[8]=a+_,u[9]=n+c,u[12]=a-_,u[13]=n-c,l&&l.transformPointArray(u,u);var d=16+(e._byteLength>>2);return e.byteLength=d<<2,e.insertData(u,d-16),!0},t._fillLineArray=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t}(),gt=(function(){function t(){}s(t,"laya.webgl.utils.MatirxArray"),t.ArrayMul=function(e,i,r){if(e)if(i)for(var s=NaN,a=NaN,n=NaN,h=NaN,l=0;l<4;l++)s=e[l],a=e[l+4],n=e[l+8],h=e[l+12],r[l]=s*i[0]+a*i[1]+n*i[2]+h*i[3],r[l+4]=s*i[4]+a*i[5]+n*i[6]+h*i[7],r[l+8]=s*i[8]+a*i[9]+n*i[10]+h*i[11],r[l+12]=s*i[12]+a*i[13]+n*i[14]+h*i[15];else t.copyArray(e,r);else t.copyArray(i,r)},t.copyArray=function(t,e){if(t&&e)for(var i=0;i<t.length;i++)e[i]=t[i]}}(),function(){function t(t,e,i){this._stride=0,this.vertNum=0,this.indexNum=0,this._applied=!1,this._vb=null,this._ib=null,this._vao=null,this._attribInfo=null,this._quadNum=0,this.canReuse=!1,this._stride=t,this._vb=new Jt(t,35048),e&&this._vb._resizeBuffer(e,!1),this._ib=new $t,i&&this._ib._resizeBuffer(i,!1)}s(t,"laya.webgl.utils.Mesh2D");var e=t.prototype;return e.cloneWithNewVB=function(){var e=new t(this._stride,0,0);return e._ib=this._ib,e._quadNum=this._quadNum,e._attribInfo=this._attribInfo,e},e.cloneWithNewVBIB=function(){var e=new t(this._stride,0,0);return e._attribInfo=this._attribInfo,e},e.getVBW=function(){return this._vb.setNeedUpload(),this._vb},e.getVBR=function(){return this._vb},e.getIBR=function(){return this._ib},e.getIBW=function(){return this._ib.setNeedUpload(),this._ib},e.createQuadIB=function(t){this._quadNum=t,this._ib._resizeBuffer(6*t*2,!1),this._ib.byteLength=this._ib.bufferLength;for(var e=this._ib.getUint16Array(),i=0,r=0,s=0;s<t;s++)e[i++]=r,e[i++]=r+2,e[i++]=r+1,e[i++]=r,e[i++]=r+3,e[i++]=r+2,r+=4;this._ib.setNeedUpload()},e.setAttributes=function(t){if(this._attribInfo=t,this._attribInfo.length%3!=0)throw"Mesh2D setAttributes error!"},e.getEleNum=function(){return this._ib.getBuffer().byteLength/2},e.releaseMesh=function(){},e.destroy=function(){},e.clearVB=function(){this._vb.clear()},t._gvaoid=0,t}()),vt=function(){function t(){}return s(t,"laya.webgl.utils.RenderState2D"),t.getMatrArray=function(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},t.mat2MatArray=function(e,i){var r=e,s=i;return s[0]=r.a,s[1]=r.b,s[2]=t.EMPTYMAT4_ARRAY[2],s[3]=t.EMPTYMAT4_ARRAY[3],s[4]=r.c,s[5]=r.d,s[6]=t.EMPTYMAT4_ARRAY[6],s[7]=t.EMPTYMAT4_ARRAY[7],s[8]=t.EMPTYMAT4_ARRAY[8],s[9]=t.EMPTYMAT4_ARRAY[9],s[10]=t.EMPTYMAT4_ARRAY[10],s[11]=t.EMPTYMAT4_ARRAY[11],s[12]=r.tx,s[13]=r.ty,s[14]=t.EMPTYMAT4_ARRAY[14],s[15]=t.EMPTYMAT4_ARRAY[15],i},t.restoreTempArray=function(){t.TEMPMAT4_ARRAY[0]=1,t.TEMPMAT4_ARRAY[1]=0,t.TEMPMAT4_ARRAY[4]=0,t.TEMPMAT4_ARRAY[5]=1,t.TEMPMAT4_ARRAY[12]=0,t.TEMPMAT4_ARRAY[13]=0},t.clear=function(){t.worldScissorTest=!1,t.worldShaderDefines=null,t.worldFilters=null,t.worldAlpha=1,t.worldClipRect.x=t.worldClipRect.y=0,t.worldClipRect.width=t.width,t.worldClipRect.height=t.height,t.curRenderTarget=null},t._MAXSIZE=99999999,t.EMPTYMAT4_ARRAY=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t.TEMPMAT4_ARRAY=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t.worldMatrix4=t.TEMPMAT4_ARRAY,t.worldAlpha=1,t.worldScissorTest=!1,t.worldFilters=null,t.worldShaderDefines=null,t.curRenderTarget=null,t.width=0,t.height=0,r(t,["worldMatrix",function(){return this.worldMatrix=new b},"worldClipRect",function(){return this.worldClipRect=new T(0,0,99999999,99999999)}]),t}(),xt=function(){function t(t,i,r,s,a){function n(t){var i=[],r=new e(i);return h._compileToTree(r,t.split("\n"),0,i,a),r}var h=this,l=u.now();this._VS=n(i),this._PS=n(r),this._nameMap=s,u.now()-l>2&&console.log("ShaderCompile use time:"+(u.now()-l)+"  size:"+i.length+"/"+r.length)}var e,i;s(t,"laya.webgl.utils.ShaderCompile");var a=t.prototype;return a._compileToTree=function(i,r,s,a,n){var h,l,o,u,_,c,f,d=0,m=0,p=0,g=0;for(m=s;m<r.length;m++)if(!((o=r[m]).length<1)&&0!==(d=o.indexOf("//"))){if(d>=0&&(o=o.substr(0,d)),h=f||new e(a),f=null,h.text=o,h.noCompile=!0,(d=o.indexOf("#"))>=0){for(u="#",g=d+1,p=o.length;g<p;g++){var v=o.charAt(g);if(" "===v||"\t"===v||"?"===v)break;u+=v}switch(h.name=u,u){case"#ifdef":case"#ifndef":if(h.src=o,h.noCompile=null!=o.match(/[!&|()=<>]/),h.noCompile?console.log("function():Boolean{return "+o.substr(d+h.name.length)+"}"):(c=o.replace(/^\s*/,"").split(/\s+/),h.setCondition(c[1],"#ifdef"===u?1:2),h.text="//"+h.text),h.setParent(i),i=h,n)for(c=o.substr(g).split(t._splitToWordExps3),g=0;g<c.length;g++)(o=c[g]).length&&(n[o]=!0);continue;case"#if":if(h.src=o,h.noCompile=!0,h.setParent(i),i=h,n)for(c=o.substr(g).split(t._splitToWordExps3),g=0;g<c.length;g++)(o=c[g]).length&&"defined"!=o&&(n[o]=!0);continue;case"#else":h.src=o,l=(i=i.parent).childs[i.childs.length-1],h.noCompile=l.noCompile,h.noCompile||(h.condition=l.condition,h.conditionType=1==l.conditionType?2:1,h.text="//"+h.text+" "+l.text+" "+h.conditionType),h.setParent(i),i=h;continue;case"#endif":l=(i=i.parent).childs[i.childs.length-1],h.noCompile=l.noCompile,h.noCompile||(h.text="//"+h.text),h.setParent(i);continue;case"#include":c=t.splitToWords(o,null);var x=t.includes[c[1]];if(!x)throw"ShaderCompile error no this include file:"+c[1];if((d=c[0].indexOf("?"))<0){h.setParent(i),o=x.getWith("with"==c[2]?c[3]:null),this._compileToTree(h,o.split("\n"),0,a,n),h.text="";continue}h.setCondition(c[0].substr(d+1),1),h.text=x.getWith("with"==c[2]?c[3]:null);break;case"#import":_=(c=t.splitToWords(o,null))[1],a.push({node:h,file:t.includes[_],ofs:h.text.length});continue}}else{if((l=i.childs[i.childs.length-1])&&!l.name){a.length>0&&t.splitToWords(o,l),f=h,l.text+="\n"+o;continue}a.length>0&&t.splitToWords(o,h)}h.setParent(i)}},a.createShader=function(t,e,i){var r={},s="";if(t)for(var a in t)s+="#define "+a+"\n",r[a]=!0;var n=this._VS.toscript(r,[]),h=this._PS.toscript(r,[]);return(i||Qt.create)(s+n.join("\n"),s+h.join("\n"),e,this._nameMap)},t._parseOne=function(e,i,r,s,a,n){var h={type:t.shaderParamsMap[r[s+1]],name:r[s+2],size:isNaN(parseInt(r[s+3]))?1:parseInt(r[s+3])};return n&&("attribute"==a?e.push(h):i.push(h)),":"==r[s+3]&&(h.type=r[s+4],s+=2),s+=2},t.addInclude=function(e,r){if(!r||0===r.length)throw new Error("add shader include file err:"+e);if(t.includes[e])throw new Error("add shader include file err, has add:"+e);t.includes[e]=new i(r)},t.preGetParams=function(e,i){var r=[e,i],s={},a=[],n=[],h={},l=[];s.attributes=a,s.uniforms=n,s.defines=h;for(var o=0,u=0,_=0;_<2;_++){r[_]=r[_].replace(t._removeAnnotation,"");var c,f=r[_].match(t._reg);for(o=0,u=f.length;o<u;o++){var d=f[o];if("attribute"==d||"uniform"==d)o=t._parseOne(a,n,f,o,d,!0);else{if("#define"==d){l[d=f[++o]]=1;continue}if("#ifdef"==d){h[c=f[++o]]=h[c]||[];for(o++;o<u;o++)if("attribute"==(d=f[o])||"uniform"==d)o=t._parseOne(a,n,f,o,d,l[c]);else if("#else"==d)for(o++;o<u;o++)if("attribute"==(d=f[o])||"uniform"==d)o=t._parseOne(a,n,f,o,d,!l[c]);else if("#endif"==d)break}}}}return s},t.splitToWords=function(t,e){for(var i,r,s=[],a=-1,n=0,h=t.length;n<h;n++)if(i=t.charAt(n)," \t=+-*/&%!<>()'\",;".indexOf(i)>=0){if(a>=0&&n-a>1&&(r=t.substr(a,n-a),s.push(r)),'"'==i||"'"==i){var l=t.indexOf(i,n+1);if(l<0)throw"Sharder err:"+t;s.push(t.substr(n+1,l-n-1)),n=l,a=-1;continue}"("==i&&e&&s.length>0&&(r=s[s.length-1]+";","vec4;main;".indexOf(r)<0&&(e.useFuns+=r)),a=-1}else a<0&&(a=n);return a<h&&h-a>1&&(r=t.substr(a,h-a),s.push(r)),s},t.IFDEF_NO=0,t.IFDEF_YES=1,t.IFDEF_ELSE=2,t.IFDEF_PARENT=3,t._removeAnnotation=new RegExp("(/\\*([^*]|[\\r\\\n]|(\\*+([^*/]|[\\r\\n])))*\\*+/)|(//.*)","g"),t._reg=new RegExp("(\".*\")|('.*')|([#\\w\\*-\\.+/()=<>{}\\\\]+)|([,;:\\\\])","g"),t._splitToWordExps=new RegExp("[(\".*\")]+|[('.*')]+|([ \\t=\\+\\-*/&%!<>!%(),;])","g"),t.includes={},r(t,["shaderParamsMap",function(){return this.shaderParamsMap={float:5126,int:5124,bool:35670,vec2:35664,vec3:35665,vec4:35666,ivec2:35667,ivec3:35668,ivec4:35669,bvec2:35671,bvec3:35672,bvec4:35673,mat2:35674,mat3:35675,mat4:35676,sampler2D:35678,samplerCube:35680}},"_splitToWordExps3",function(){return this._splitToWordExps3=new RegExp("[ \\t=\\+\\-*/&%!<>!%(),;\\|]","g")}]),t.__init$=function(){e=function(){function t(t){this.childs=[],this.text="",this.parent=null,this.name=null,this.noCompile=!1,this.includefiles=null,this.condition=null,this.conditionType=0,this.useFuns="",this.z=0,this.src=null,this.includefiles=t}s(t,"");var e=t.prototype;return e.setParent=function(t){t.childs.push(this),this.z=t.z+1,this.parent=t},e.setCondition=function(t,e){t&&(this.conditionType=e,t=t.replace(/(\s*$)/g,""),this.condition=function(){return this[t]},this.condition.__condition=t)},e.toscript=function(e,i){return this._toscript(e,i,++t.__id)},e._toscript=function(t,e,i){if(this.childs.length<1&&!this.text)return e;e.length;if(this.condition){var r=!!this.condition.call(t);if(2===this.conditionType&&(r=!r),!r)return e}if(this.text&&e.push(this.text),this.childs.length>0&&this.childs.forEach(function(r,s,a){r._toscript(t,e,i)}),this.includefiles.length>0&&this.useFuns.length>0)for(var s,a=0,n=this.includefiles.length;a<n;a++)this.includefiles[a].curUseID!=i&&(s=this.includefiles[a].file.getFunsScript(this.useFuns)).length>0&&(this.includefiles[a].curUseID=i,e[0]=s+e[0]);return e},t.__id=1,t}(),i=function(){function e(e){this.script=null,this.codes={},this.funs={},this.curUseID=-1,this.funnames="",this.script=e;for(var i=0,r=0,s=0;;){if((i=e.indexOf("#begin",i))<0)break;for(s=i+5;;){if((s=e.indexOf("#end",s))<0)break;if("i"!==e.charAt(s+4))break;s+=5}if(s<0)throw"add include err,no #end:"+e;r=e.indexOf("\n",i);var a=t.splitToWords(e.substr(i,r-i),null);"code"==a[1]?this.codes[a[2]]=e.substr(r+1,s-r-1):"function"==a[1]&&(r=e.indexOf("function",i),r+="function".length,this.funs[a[3]]=e.substr(r+1,s-r-1),this.funnames+=a[3]+";"),i=s+1}}s(e,"");var i=e.prototype;return i.getWith=function(t){var e=t?this.codes[t]:this.script;if(!e)throw"get with error:"+t;return e},i.getFunsScript=function(t){var e="";for(var i in this.funs)t.indexOf(i+";")>=0&&(e+=this.funs[i]);return e},e}()},t}(),bt=function(){function t(){}return s(t,"laya.webgl.WebGL"),t._uint8ArraySlice=function(){for(var t=this.length,e=new Uint8Array(this.length),i=0;i<t;i++)e[i]=this[i];return e},t._float32ArraySlice=function(){for(var t=this.length,e=new Float32Array(this.length),i=0;i<t;i++)e[i]=this[i];return e},t._uint16ArraySlice=function(t){var e,i=arguments,r=0,s=0;if(0===i.length)for(r=this.length,e=new Uint16Array(r),s=0;s<r;s++)e[s]=this[s];else if(2===i.length){var a=i[0],n=i[1];if(n>a)for(r=n-a,e=new Uint16Array(r),s=a;s<n;s++)e[s-a]=this[s];else e=new Uint16Array(0)}return e},t.expandContext=function(){var t=d.prototype,e=CanvasRenderingContext2D.prototype;e.fillTrangles=t.fillTrangles,Zt.__int__(null),e.setIBVB=function(t,e,i,r,s,a,n,h,l,o){void 0===l&&(l=0),void 0===o&&(o=0),null===i&&(this._ib=this._ib||$t.QuadrangleIB,i=this._ib,pt.expandIBQuadrangle(i,r._byteLength/64+8)),this._setIBVB(t,e,i,r,s,a,n,h,l,o)},e.fillTrangles=function(t,e,i,r,s){this._curMat=this._curMat||b.create(),this._vb=this._vb||Jt.create(),this._ib||(this._ib=$t.create(),pt.fillIBQuadrangle(this._ib,n/4));var a=this._vb,n=r.length>>4;pt.fillTranglesVB(a,e,i,r,s||this._curMat,0,0),pt.expandIBQuadrangle(this._ib,a._byteLength/64+8);var h=new Et(1,0);h.textureHost=t;var l=new jt("attribute vec2 position; attribute vec2 texcoord; uniform vec2 size; uniform mat4 mmat; varying vec2 v_texcoord; void main() { vec4 p=vec4(position.xy,0.0,1.0);vec4 pos=mmat*p; gl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0); v_texcoord = texcoord; }","precision mediump float; varying vec2 v_texcoord; uniform sampler2D texture; void main() {vec4 color= texture2D(texture, v_texcoord); color.a*=1.0; gl_FragColor= color;}");a._vertType=3,this._setIBVB(e,i,this._ib,a,6*n,s,l,h,0,0)}},t.enable=function(){if(u.__init__(),A.isConchApp&&!A.isConchWebGL)return R.skinAniSprite=function(){return new tt},t.expandContext(),!1;if(R.getWebGLContext=function(t){for(var e,i=["webgl","experimental-webgl","webkit-3d","moz-webgl"],r=0;r<i.length;r++){try{e=t.getContext(i[r],{stencil:f.isStencil,alpha:f.isAlpha,antialias:f.isAntialias,premultipliedAlpha:f.premultipliedAlpha,preserveDrawingBuffer:f.preserveDrawingBuffer})}catch(t){}if(e)return e}return null},null==(t.mainContext=R.getWebGLContext(A._mainCanvas)))return!1;if(A.isWebGL)return!0;v.create=function(t,e){return new te(t,e)},x.create=function(t,e,i,r,s,a,n){return new Kt(t,e,i,r,s,a,n)},A.WebGL=t,A.isWebGL=!0,ft.__init__(),R.createRenderSprite=function(t,e){return new St(t,e)},R.createWebGLContext2D=function(t){return new At(t)},R.changeWebGLSize=function(t,e){laya.webgl.WebGL.onStageResize(t,e)},R.createGraphics=function(){return new Tt};var e=R.createFilterAction;return R.createFilterAction=e||function(t){return new wt},R.clear=function(t){vt.worldScissorTest&&laya.webgl.WebGL.mainContext.disable(3089);var e=A.context.ctx,i=0==e._submits._length||f.preserveDrawingBuffer?c.create(t)._color:M._wgColor;i&&e.clearBG(i[0],i[1],i[2],i[3]),vt.clear()},R.addToAtlas=function(t,e){void 0===e&&(e=!1);var r=t.bitmap;A.optimizeTextureMemory(t.url,t)?i.__typeof(r,"laya.webgl.resource.IMergeAtlasBitmap")&&r.allowMerageInAtlas&&r.on("recovered",t,t.addTextureToAtlas):r.enableMerageInAtlas=!1},R.isAtlas=function(t){return t instanceof laya.webgl.atlas.AtlasWebGLCanvas},k._enable(),R.beginFlush=function(){for(var t=k.instance,e=t.getAtlaserCount(),i=0;i<e;i++){var r=t.getAtlaserByIndex(i).texture;r._flashCacheImageNeedFlush&&R.flashFlushImage(r)}},R.drawToCanvas=function(t,e,i,r,s,a){(i<=0||r<=0)&&console.log("[error] canvasWidth and canvasHeight should greater than zero"),s-=t.x,a-=t.y;var n=Nt.create(i,r,6408,5121,0,!1);n.start(),n.clear(0,0,0,0),A.context.clear(),E.renders[e]._fun(t,A.context,s,vt.height-r+a),A.context.flush(),n.end();var h=n.getData(0,0,n.width,n.height);n.recycle();var l=new zt;l._canvas=u.createElement("canvas"),l.size(i,r);var o=l._canvas.getContext("2d");u.canvas.size(i,r);var _=u.context,c=_.createImageData(i,r);return c.data.set(new Uint8ClampedArray(h.buffer)),l._imgData=c,_.putImageData(c,0,0),o.save(),o.translate(0,r),o.scale(1,-1),o.drawImage(u.canvas.source,0,0),o.restore(),l},R.createFilterAction=function(t){var e;switch(t){case 32:e=new wt}return e},R.addTextureToAtlas=function(t){t._uvID++,k._atlasRestore++,t.bitmap.enableMerageInAtlas&&k.instance.addToAtlas(t)},R.getTexturePixels=function(t,e,i,r,s){A.context.ctx.clear();var a=new I;a.graphics.drawTexture(t,-e,-i);var n=Nt.create(r,s);n.start(),n.clear(0,0,0,0),a.render(A.context,0,0),A.context.ctx.flush(),n.end();for(var h=n.getData(0,0,r,s),l=[],o=0,u=s-1;u>=0;u--)for(var _=0;_<r;_++)o=4*(u*r+_),l.push(h[o]),l.push(h[o+1]),l.push(h[o+2]),l.push(h[o+3]);return l},R.skinAniSprite=function(){return new tt},g.create=function(t,e){var i=new zt;return i._imgData=e,i.flipY=!1,i},m._filterStart=function(t,e,i,r,s){var a=t.getValue("bounds"),n=Nt.create(a.width,a.height);if(n.start(),n.clear(0,0,0,0),t.addValue("src",n),t.addValue("ScissorTest",vt.worldScissorTest),vt.worldScissorTest){var h=new T;h.copyFrom(i.ctx._clipRect),t.addValue("clipRect",h),vt.worldScissorTest=!1,laya.webgl.WebGL.mainContext.disable(3089)}},m._filterEnd=function(t,e,i,r,s){var a=t.getValue("bounds");t.getValue("src").end();var n=Nt.create(a.width,a.height);n.start(),n.clear(0,0,0,0),t.addValue("out",n),e._set$P("_filterCache",n),e._set$P("_isHaveGlowFilter",t.getValue("_isHaveGlowFilter"))},m._EndTarget=function(t,e){t.getValue("src").recycle();t.getValue("out").end();if(t.getValue("ScissorTest")){vt.worldScissorTest=!0,laya.webgl.WebGL.mainContext.enable(3089),e.ctx.save();var i=t.getValue("clipRect");e.ctx.clipRect(i.x,i.y,i.width,i.height)}},m._useSrc=function(t){var e=t.getValue("out");e.end(),(e=t.getValue("src")).start(),e.clear(0,0,0,0)},m._endSrc=function(t){t.getValue("src").end()},m._useOut=function(t){var e=t.getValue("src");e.end(),(e=t.getValue("out")).start(),e.clear(0,0,0,0)},m._endOut=function(t){t.getValue("out").end()},m._recycleScope=function(t){t.recycle()},m._filter=function(t,e,i,r){var s=this._next;if(s){var a=t.filters,n=a.length;if(1==n&&32==a[0].type)return e.ctx.save(),e.ctx.setFilters([a[0]]),s._fun.call(s,t,e,i,r),void e.ctx.restore();var h,l,o=ht.create(),u=y.TEMP,_=e.ctx._getTransformMatrix(),c=b.create();_.copyTo(c);var f=0,d=0,p=!1,g=t._$P._filterCache?t._$P._filterCache:null;if(!g||t._repaint){p=t._isHaveGlowFilter(),o.addValue("_isHaveGlowFilter",p),p&&(f=50,d=25),(l=new T).copyFrom(t.getSelfBounds()),l.x+=t.x,l.y+=t.y,l.x-=t.pivotX+4,l.y-=t.pivotY+4;var v=l.x,x=l.y;if(l.width+=f+8,l.height+=f+8,u.x=l.x*c.a+l.y*c.c,u.y=l.y*c.d+l.x*c.b,l.x=u.x,l.y=u.y,u.x=l.width*c.a+l.height*c.c,u.y=l.height*c.d+l.width*c.b,l.width=u.x,l.height=u.y,l.width<=0||l.height<=0)return;g&&g.recycle(),o.addValue("bounds",l);var A=nt.create([o,t,e,0,0],m._filterStart);e.addRenderObject(A),e.ctx._renderKey=0,e.ctx._shader2D.glTexture=null;var E=t.x-v+d,S=t.y-x+d;s._fun.call(s,t,e,E,S),A=nt.create([o,t,e,0,0],m._filterEnd),e.addRenderObject(A);for(var w=0;w<n;w++){0!=w&&(A=nt.create([o],m._useSrc),e.addRenderObject(A),h=Et.create(1,0),b.TEMP.identity(),e.ctx.drawTarget(o,0,0,l.width,l.height,b.TEMP,"out",h,null,G.TOINT.overlay),A=nt.create([o],m._useOut),e.addRenderObject(A));a[w].action.apply3d(o,t,e,0,0)}A=nt.create([o,e],m._EndTarget),e.addRenderObject(A)}else{if((p=!!t._$P._isHaveGlowFilter&&t._$P._isHaveGlowFilter)&&(f=50,d=25),(l=t.getBounds()).width<=0||l.height<=0)return;l.width+=f,l.height+=f,u.x=l.x*c.a+l.y*c.c,u.y=l.y*c.d+l.x*c.b,l.x=u.x,l.y=u.y,u.x=l.width*c.a+l.height*c.c,u.y=l.height*c.d+l.width*c.b,l.width=u.x,l.height=u.y,o.addValue("out",g)}i=i-d-t.x,r=r-d-t.y,u.setTo(i,r),c.transformPoint(u),i=u.x+l.x,r=u.y+l.y,h=Et.create(1,0),b.TEMP.identity(),e.ctx.drawTarget(o,i,r,l.width,l.height,b.TEMP,"out",h,null,G.TOINT.overlay),A=nt.create([o],m._recycleScope),e.addRenderObject(A),c.destroy()}},Float32Array.prototype.slice||(Float32Array.prototype.slice=t._float32ArraySlice),Uint16Array.prototype.slice||(Uint16Array.prototype.slice=t._uint16ArraySlice),Uint8Array.prototype.slice||(Uint8Array.prototype.slice=t._uint8ArraySlice),!0},t.onStageResize=function(e,i){null!=t.mainContext&&(t.mainContext.viewport(0,0,e,i),vt.width=e,vt.height=i)},t.onInvalidGLRes=function(){k.instance.freeAll(),w.releaseContentManagers(!0),t.doNodeRepaint(i.stage),t.mainContext.viewport(0,0,vt.width,vt.height),i.stage.event("devicelost")},t.doNodeRepaint=function(e){0==e.numChildren&&e.repaint();for(var i=0;i<e.numChildren;i++)t.doNodeRepaint(e.getChildAt(i))},t.init=function(e,i,r){t.mainCanvas=e,g._createContext=function(t){return new At(t)},zt._createContext=function(t){return new At(t)};var s=laya.webgl.WebGL.mainContext;if(null!=s.getShaderPrecisionFormat){var a=s.getShaderPrecisionFormat(35633,36338),n=s.getShaderPrecisionFormat(35632,36338);t.shaderHighPrecision=!(!a.precision||!n.precision)}else t.shaderHighPrecision=!1;if(t.compressAstc=s.getExtension("WEBGL_compressed_texture_astc"),t.compressAtc=s.getExtension("WEBGL_compressed_texture_atc"),t.compressEtc=s.getExtension("WEBGL_compressed_texture_etc"),t.compressEtc1=s.getExtension("WEBGL_compressed_texture_etc1"),t.compressPvrtc=s.getExtension("WEBGL_compressed_texture_pvrtc"),t.compressS3tc=s.getExtension("WEBGL_compressed_texture_s3tc"),t.compressS3tc_srgb=s.getExtension("WEBGL_compressed_texture_s3tc_srgb"),s.deleteTexture1=s.deleteTexture,s.deleteTexture=function(t){t==yt.curBindTexValue&&(yt.curBindTexValue=null),s.deleteTexture1(t)},t.onStageResize(i,r),null==t.mainContext)throw new Error("webGL getContext err!");P.__init__(),k.__init__(),It.__init__(),at.__init__(),At.__init__(),Et.__init__(),$.__init__(),Zt.__int__(s),G._init_(s),A.isConchApp&&conch.setOnInvalidGLRes(t.onInvalidGLRes)},t.compressAstc=null,t.compressAtc=null,t.compressEtc=null,t.compressEtc1=null,t.compressPvrtc=null,t.compressS3tc=null,t.compressS3tc_srgb=null,t.mainCanvas=null,t.mainContext=null,t.antialias=!0,t.shaderHighPrecision=!1,t._bg_null=[0,0,0,0],t}(),yt=function(){function t(){}return s(t,"laya.webgl.WebGLContext"),t.UseProgram=function(e){return t._useProgram!==e&&(bt.mainContext.useProgram(e),t._useProgram=e,!0)},t.setDepthTest=function(e,i){i!==t._depthTest&&(t._depthTest=i,i?e.enable(2929):e.disable(2929))},t.setDepthMask=function(e,i){i!==t._depthMask&&(t._depthMask=i,e.depthMask(i))},t.setDepthFunc=function(e,i){i!==t._depthFunc&&(t._depthFunc=i,e.depthFunc(i))},t.setBlend=function(e,i){i!==t._blend&&(t._blend=i,i?e.enable(3042):e.disable(3042))},t.setBlendFunc=function(e,i,r){(i!==t._sFactor||r!==t._dFactor)&&(t._sFactor=i,t._dFactor=r,e.blendFunc(i,r))},t.setCullFace=function(e,i){i!==t._cullFace&&(t._cullFace=i,i?e.enable(2884):e.disable(2884))},t.setFrontFace=function(e,i){i!==t._frontFace&&(t._frontFace=i,e.frontFace(i))},t.bindTexture=function(e,i,r){e.bindTexture(i,r),t.curBindTexTarget=i,t.curBindTexValue=r},t.DEPTH_BUFFER_BIT=256,t.STENCIL_BUFFER_BIT=1024,t.COLOR_BUFFER_BIT=16384,t.POINTS=0,t.LINES=1,t.LINE_LOOP=2,t.LINE_STRIP=3,t.TRIANGLES=4,t.TRIANGLE_STRIP=5,t.TRIANGLE_FAN=6,t.ZERO=0,t.ONE=1,t.SRC_COLOR=768,t.ONE_MINUS_SRC_COLOR=769,t.SRC_ALPHA=770,t.ONE_MINUS_SRC_ALPHA=771,t.DST_ALPHA=772,t.ONE_MINUS_DST_ALPHA=773,t.DST_COLOR=774,t.ONE_MINUS_DST_COLOR=775,t.SRC_ALPHA_SATURATE=776,t.FUNC_ADD=32774,t.BLEND_EQUATION=32777,t.BLEND_EQUATION_RGB=32777,t.BLEND_EQUATION_ALPHA=34877,t.FUNC_SUBTRACT=32778,t.FUNC_REVERSE_SUBTRACT=32779,t.BLEND_DST_RGB=32968,t.BLEND_SRC_RGB=32969,t.BLEND_DST_ALPHA=32970,t.BLEND_SRC_ALPHA=32971,t.CONSTANT_COLOR=32769,t.ONE_MINUS_CONSTANT_COLOR=32770,t.CONSTANT_ALPHA=32771,t.ONE_MINUS_CONSTANT_ALPHA=32772,t.BLEND_COLOR=32773,t.ARRAY_BUFFER=34962,t.ELEMENT_ARRAY_BUFFER=34963,t.ARRAY_BUFFER_BINDING=34964,t.ELEMENT_ARRAY_BUFFER_BINDING=34965,t.STREAM_DRAW=35040,t.STATIC_DRAW=35044,t.DYNAMIC_DRAW=35048,t.BUFFER_SIZE=34660,t.BUFFER_USAGE=34661,t.CURRENT_VERTEX_ATTRIB=34342,t.FRONT=1028,t.BACK=1029,t.CULL_FACE=2884,t.FRONT_AND_BACK=1032,t.BLEND=3042,t.DITHER=3024,t.STENCIL_TEST=2960,t.DEPTH_TEST=2929,t.SCISSOR_TEST=3089,t.POLYGON_OFFSET_FILL=32823,t.SAMPLE_ALPHA_TO_COVERAGE=32926,t.SAMPLE_COVERAGE=32928,t.NO_ERROR=0,t.INVALID_ENUM=1280,t.INVALID_VALUE=1281,t.INVALID_OPERATION=1282,t.OUT_OF_MEMORY=1285,t.CW=2304,t.CCW=2305,t.LINE_WIDTH=2849,t.ALIASED_POINT_SIZE_RANGE=33901,t.ALIASED_LINE_WIDTH_RANGE=33902,t.CULL_FACE_MODE=2885,t.FRONT_FACE=2886,t.DEPTH_RANGE=2928,t.DEPTH_WRITEMASK=2930,t.DEPTH_CLEAR_VALUE=2931,t.DEPTH_FUNC=2932,t.STENCIL_CLEAR_VALUE=2961,t.STENCIL_FUNC=2962,t.STENCIL_FAIL=2964,t.STENCIL_PASS_DEPTH_FAIL=2965,t.STENCIL_PASS_DEPTH_PASS=2966,t.STENCIL_REF=2967,t.STENCIL_VALUE_MASK=2963,t.STENCIL_WRITEMASK=2968,t.STENCIL_BACK_FUNC=34816,t.STENCIL_BACK_FAIL=34817,t.STENCIL_BACK_PASS_DEPTH_FAIL=34818,t.STENCIL_BACK_PASS_DEPTH_PASS=34819,t.STENCIL_BACK_REF=36003,t.STENCIL_BACK_VALUE_MASK=36004,t.STENCIL_BACK_WRITEMASK=36005,t.VIEWPORT=2978,t.SCISSOR_BOX=3088,t.COLOR_CLEAR_VALUE=3106,t.COLOR_WRITEMASK=3107,t.UNPACK_ALIGNMENT=3317,t.PACK_ALIGNMENT=3333,t.MAX_TEXTURE_SIZE=3379,t.MAX_VIEWPORT_DIMS=3386,t.SUBPIXEL_BITS=3408,t.RED_BITS=3410,t.GREEN_BITS=3411,t.BLUE_BITS=3412,t.ALPHA_BITS=3413,t.DEPTH_BITS=3414,t.STENCIL_BITS=3415,t.POLYGON_OFFSET_UNITS=10752,t.POLYGON_OFFSET_FACTOR=32824,t.TEXTURE_BINDING_2D=32873,t.SAMPLE_BUFFERS=32936,t.SAMPLES=32937,t.SAMPLE_COVERAGE_VALUE=32938,t.SAMPLE_COVERAGE_INVERT=32939,t.NUM_COMPRESSED_TEXTURE_FORMATS=34466,t.COMPRESSED_TEXTURE_FORMATS=34467,t.DONT_CARE=4352,t.FASTEST=4353,t.NICEST=4354,t.GENERATE_MIPMAP_HINT=33170,t.BYTE=5120,t.UNSIGNED_BYTE=5121,t.SHORT=5122,t.UNSIGNED_SHORT=5123,t.INT=5124,t.UNSIGNED_INT=5125,t.FLOAT=5126,t.DEPTH_COMPONENT=6402,t.ALPHA=6406,t.RGB=6407,t.RGBA=6408,t.LUMINANCE=6409,t.LUMINANCE_ALPHA=6410,t.UNSIGNED_SHORT_4_4_4_4=32819,t.UNSIGNED_SHORT_5_5_5_1=32820,t.UNSIGNED_SHORT_5_6_5=33635,t.FRAGMENT_SHADER=35632,t.VERTEX_SHADER=35633,t.MAX_VERTEX_ATTRIBS=34921,t.MAX_VERTEX_UNIFORM_VECTORS=36347,t.MAX_VARYING_VECTORS=36348,t.MAX_COMBINED_TEXTURE_IMAGE_UNITS=35661,t.MAX_VERTEX_TEXTURE_IMAGE_UNITS=35660,t.MAX_TEXTURE_IMAGE_UNITS=34930,t.MAX_FRAGMENT_UNIFORM_VECTORS=36349,t.SHADER_TYPE=35663,t.DELETE_STATUS=35712,t.LINK_STATUS=35714,t.VALIDATE_STATUS=35715,t.ATTACHED_SHADERS=35717,t.ACTIVE_UNIFORMS=35718,t.ACTIVE_ATTRIBUTES=35721,t.SHADING_LANGUAGE_VERSION=35724,t.CURRENT_PROGRAM=35725,t.NEVER=512,t.LESS=513,t.EQUAL=514,t.LEQUAL=515,t.GREATER=516,t.NOTEQUAL=517,t.GEQUAL=518,t.ALWAYS=519,t.KEEP=7680,t.REPLACE=7681,t.INCR=7682,t.DECR=7683,t.INVERT=5386,t.INCR_WRAP=34055,t.DECR_WRAP=34056,t.VENDOR=7936,t.RENDERER=7937,t.VERSION=7938,t.NEAREST=9728,t.LINEAR=9729,t.NEAREST_MIPMAP_NEAREST=9984,t.LINEAR_MIPMAP_NEAREST=9985,t.NEAREST_MIPMAP_LINEAR=9986,t.LINEAR_MIPMAP_LINEAR=9987,t.TEXTURE_MAG_FILTER=10240,t.TEXTURE_MIN_FILTER=10241,t.TEXTURE_WRAP_S=10242,t.TEXTURE_WRAP_T=10243,t.TEXTURE_2D=3553,t.TEXTURE=5890,t.TEXTURE_CUBE_MAP=34067,t.TEXTURE_BINDING_CUBE_MAP=34068,t.TEXTURE_CUBE_MAP_POSITIVE_X=34069,t.TEXTURE_CUBE_MAP_NEGATIVE_X=34070,t.TEXTURE_CUBE_MAP_POSITIVE_Y=34071,t.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072,t.TEXTURE_CUBE_MAP_POSITIVE_Z=34073,t.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074,t.MAX_CUBE_MAP_TEXTURE_SIZE=34076,t.TEXTURE0=33984,t.TEXTURE1=33985,t.TEXTURE2=33986,t.TEXTURE3=33987,t.TEXTURE4=33988,t.TEXTURE5=33989,t.TEXTURE6=33990,t.TEXTURE7=33991,t.TEXTURE8=33992,t.TEXTURE9=33993,t.TEXTURE10=33994,t.TEXTURE11=33995,t.TEXTURE12=33996,t.TEXTURE13=33997,t.TEXTURE14=33998,t.TEXTURE15=33999,t.TEXTURE16=34e3,t.TEXTURE17=34001,t.TEXTURE18=34002,t.TEXTURE19=34003,t.TEXTURE20=34004,t.TEXTURE21=34005,t.TEXTURE22=34006,t.TEXTURE23=34007,t.TEXTURE24=34008,t.TEXTURE25=34009,t.TEXTURE26=34010,t.TEXTURE27=34011,t.TEXTURE28=34012,t.TEXTURE29=34013,t.TEXTURE30=34014,t.TEXTURE31=34015,t.ACTIVE_TEXTURE=34016,t.REPEAT=10497,t.CLAMP_TO_EDGE=33071,t.MIRRORED_REPEAT=33648,t.FLOAT_VEC2=35664,t.FLOAT_VEC3=35665,t.FLOAT_VEC4=35666,t.INT_VEC2=35667,t.INT_VEC3=35668,t.INT_VEC4=35669,t.BOOL=35670,t.BOOL_VEC2=35671,t.BOOL_VEC3=35672,t.BOOL_VEC4=35673,t.FLOAT_MAT2=35674,t.FLOAT_MAT3=35675,t.FLOAT_MAT4=35676,t.SAMPLER_2D=35678,t.SAMPLER_CUBE=35680,t.VERTEX_ATTRIB_ARRAY_ENABLED=34338,t.VERTEX_ATTRIB_ARRAY_SIZE=34339,t.VERTEX_ATTRIB_ARRAY_STRIDE=34340,t.VERTEX_ATTRIB_ARRAY_TYPE=34341,t.VERTEX_ATTRIB_ARRAY_NORMALIZED=34922,t.VERTEX_ATTRIB_ARRAY_POINTER=34373,t.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING=34975,t.COMPILE_STATUS=35713,t.LOW_FLOAT=36336,t.MEDIUM_FLOAT=36337,t.HIGH_FLOAT=36338,t.LOW_INT=36339,t.MEDIUM_INT=36340,t.HIGH_INT=36341,t.FRAMEBUFFER=36160,t.RENDERBUFFER=36161,t.RGBA4=32854,t.RGB5_A1=32855,t.RGB565=36194,t.DEPTH_COMPONENT16=33189,t.STENCIL_INDEX=6401,t.STENCIL_INDEX8=36168,t.DEPTH_STENCIL=34041,t.RENDERBUFFER_WIDTH=36162,t.RENDERBUFFER_HEIGHT=36163,t.RENDERBUFFER_INTERNAL_FORMAT=36164,t.RENDERBUFFER_RED_SIZE=36176,t.RENDERBUFFER_GREEN_SIZE=36177,t.RENDERBUFFER_BLUE_SIZE=36178,t.RENDERBUFFER_ALPHA_SIZE=36179,t.RENDERBUFFER_DEPTH_SIZE=36180,t.RENDERBUFFER_STENCIL_SIZE=36181,t.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE=36048,t.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME=36049,t.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL=36050,t.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE=36051,t.COLOR_ATTACHMENT0=36064,t.DEPTH_ATTACHMENT=36096,t.STENCIL_ATTACHMENT=36128,t.DEPTH_STENCIL_ATTACHMENT=33306,t.NONE=0,t.FRAMEBUFFER_COMPLETE=36053,t.FRAMEBUFFER_INCOMPLETE_ATTACHMENT=36054,t.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT=36055,t.FRAMEBUFFER_INCOMPLETE_DIMENSIONS=36057,t.FRAMEBUFFER_UNSUPPORTED=36061,t.FRAMEBUFFER_BINDING=36006,t.RENDERBUFFER_BINDING=36007,t.MAX_RENDERBUFFER_SIZE=34024,t.INVALID_FRAMEBUFFER_OPERATION=1286,t.UNPACK_FLIP_Y_WEBGL=37440,t.UNPACK_PREMULTIPLY_ALPHA_WEBGL=37441,t.CONTEXT_LOST_WEBGL=37442,t.UNPACK_COLORSPACE_CONVERSION_WEBGL=37443,t.BROWSER_DEFAULT_WEBGL=37444,t._useProgram=null,t._depthTest=!0,t._depthMask=!0,t._blend=!1,t._cullFace=!1,t.curBindTexTarget=null,t.curBindTexValue=null,r(t,["_depthFunc",function(){return this._depthFunc=513},"_sFactor",function(){return this._sFactor=1},"_dFactor",function(){return this._dFactor=0},"_frontFace",function(){return this._frontFace=2305}]),t}(),Tt=function(t){function e(){e.__super.call(this)}s(e,"laya.webgl.display.GraphicsGL",p);var i=e.prototype;return i.setShader=function(t){this._saveToCmd(A.context._setShader,[t])},i.setIBVB=function(t,e,i,r,s,a){this._saveToCmd(A.context._setIBVB,[t,e,i,r,s,a])},i.drawParticle=function(t,e,i){var r=R.createParticleTemplate2D(i);r.x=t,r.y=e,this._saveToCmd(A.context._drawParticle,[r])},e}(),At=function(t){function e(t){this._x=0,this._y=0,this._id=++e._COUNT,this._path=null,this._drawCount=1,this._maxNumEle=0,this._clear=!1,this._isMain=!1,this._atlasResourceChange=0,this._submits=null,this._curSubmit=null,this._ib=null,this._vb=null,this._nBlendType=0,this._saveMark=null,this._shader2D=null,this.meshlist=[],this.mId=-1,this.mHaveKey=!1,this.mHaveLineKey=!1,this.mX=0,this.mY=0,e.__super.call(this),this._width=99999999,this._height=99999999,this._clipRect=e.MAXCLIPRECT,this.mOutPoint,this._canvas=t,e._contextcount++,A.isFlash?(this._ib=$t.create(35044),pt.fillIBQuadrangle(this._ib,16)):this._ib=$t.QuadrangleIB,this.clear()}var n;s(e,"laya.webgl.canvas.WebGLContext2D",d);var h=e.prototype;return h.setIsMainContext=function(){this._isMain=!0},h.clearBG=function(t,e,i,r){var s=bt.mainContext;s.clearColor(t,e,i,r),s.clear(16384)},h._getSubmits=function(){return this._submits},h._releaseMem=function(){if(this._submits){this._curMat.destroy(),this._curMat=null,this._shader2D.destroy(),this._shader2D=null;for(var t=0,e=this._submits._length;t<e;t++)this._submits[t].releaseRender();this._submits.length=0,this._submits._length=0,this._submits=null,this._curSubmit=null,this._path&&this._path.recover(),this._path=null,this._other&&(this._other.font=null),this._save=null,this._vb&&(this._vb.releaseResource(),this._vb.destroy(),this._vb.destory(),this._vb=null)}},h.destroy=function(){--e._contextcount,this.sprite=null,this._releaseMem(),this._targets&&this._targets.destroy(),this._targets=null,this._canvas=null,this._ib&&this._ib!=$t.QuadrangleIB&&this._ib.releaseResource()},h.clear=function(){this._submits||(this._other=n.DEFAULT,this._curMat=b.create(),this._vb=Jt.create(-1),this._submits=[],this._save=[Q.Create(this)],this._save.length=10,this._shader2D=new $,this._triangleMesh=Ft.getAMesh()),this._vb.clear(),this._targets&&(this._targets.repaint=!0),this._other=n.DEFAULT,this._clear=!0,this._repaint=!1,this._drawCount=1,this._renderKey=0,this._other.lineWidth=this._shader2D.ALPHA=1,this._nBlendType=0,this._clipRect=e.MAXCLIPRECT,this._curSubmit=at.RENDERBASE,this._shader2D.glTexture=null,this._shader2D.fillStyle=this._shader2D.strokeStyle=W.DEFAULT;for(var t=0,i=this._submits._length;t<i;t++)this._submits[t].releaseRender();this._submits._length=0,this._curMat.identity(),this._other.clear(),this._saveMark=this._save[0],this._save._length=1},h.size=function(t,e){if(this._width!=t||this._height!=e)if(0==t||0==e){0!=this._vb._byteLength&&(this._width=t,this._height=e,this._vb.clear(),this._vb.upload());for(var i=0,r=this._submits._length;i<r;i++)this._submits[i].releaseRender();this._submits.length=0,this._submits._length=0,this._curSubmit=null,this._path&&this._path.recover(),this._path=null,this.sprite=null,this._targets&&this._targets.destroy(),this._targets=null}else this._width=t,this._height=e,this._targets&&this._targets.size(t,e),this._canvas.memorySize-=this._canvas.memorySize;0===t&&0===e&&this._releaseMem()},h._getTransformMatrix=function(){return this._curMat},h.translate=function(t,e){0===t&&0===e||(q.save(this),this._curMat.bTransform&&(Z.save(this),this._curMat.transformPointN(y.TEMP.setTo(t,e)),t=y.TEMP.x,e=y.TEMP.y),this._x+=t,this._y+=e)},h.save=function(){this._save[this._save._length++]=Q.Create(this)},h.restore=function(){var t=this._save._length;if(!(t<1))for(var e=t-1;e>=0;e--){var i=this._save[e];if(i.restore(this),i.isSaveMark())return void(this._save._length=e)}},h._fillText=function(t,e,i,r,s,a,n,h,l,o){void 0===o&&(o=0);var u=this._shader2D,_=this._curSubmit.shaderValue,f=s?dt.create(s):this._other.font;if(k.enabled)u.ALPHA!==_.ALPHA&&(u.glTexture=null),ft.drawText(this,t,e,this._curMat,f,l||this._other.textAlign,a,n,h,i,r,o);else{this._shader2D.defines.getValue();var d=a?c.create(a)._color:u.colorAdd;u.ALPHA===_.ALPHA&&d===u.colorAdd&&_.colorAdd===u.colorAdd||(u.glTexture=null,u.colorAdd=d),ft.drawText(this,t,e,this._curMat,f,l||this._other.textAlign,a,n,h,i,r,o)}},h.fillWords=function(t,e,i,r,s,a){this._fillText(null,t,e,i,r,s,null,-1,null,a)},h.fillBorderWords=function(t,e,i,r,s,a,n){this._fillBorderText(null,t,e,i,r,s,a,n,null)},h.fillText=function(t,e,i,r,s,a){this._fillText(t,null,e,i,r,s,null,-1,a)},h.strokeText=function(t,e,i,r,s,a,n){this._fillText(t,null,e,i,r,null,s,a||1,n)},h.fillBorderText=function(t,e,i,r,s,a,n,h){this._fillBorderText(t,null,e,i,r,s,a,n,h)},h._fillBorderText=function(t,i,r,s,a,n,h,l,o){if(!k.enabled)return this._fillText(t,i,r,s,a,null,h,l||1,o),void this._fillText(t,i,r,s,a,n,null,-1,o);var u=this._shader2D,_=this._curSubmit.shaderValue;u.ALPHA!==_.ALPHA&&(u.glTexture=null);var c=a?(e._fontTemp.setFont(a),e._fontTemp):this._other.font;ft.drawText(this,t,i,this._curMat,c,o||this._other.textAlign,n,h,l||1,r,s,0)},h.fillRect=function(t,e,i,r,s){var a=this._vb;if(pt.fillRectImgVb(a,this._clipRect,t,e,i,r,F.DEF_UV,this._curMat,this._x,this._y,0,0)){this._renderKey=0;var n=this._shader2D.fillStyle;s&&(this._shader2D.fillStyle=W.create(s));var h=this._shader2D,l=this._curSubmit.shaderValue;if(h.fillStyle!==l.fillStyle||h.ALPHA!==l.ALPHA){h.glTexture=null;var o=this._curSubmit=at.createSubmit(this,this._ib,a,(a._byteLength-64)/32*3,Et.create(2,0));o.shaderValue.color=h.fillStyle._color._color,o.shaderValue.ALPHA=h.ALPHA,this._submits[this._submits._length++]=o}this._curSubmit._numEle+=6,this._shader2D.fillStyle=n}},h.fillTexture=function(t,e,r,s,a,n,h,l){if(t.loaded&&t.bitmap&&t.source){var o=this._vb,u=t.bitmap.width,_=t.bitmap.height,c=t.uv,f=h.x%t.width,d=h.y%t.height;if(u!=l.w||_!=l.h){if(!l.w&&!l.h)switch(l.oy=l.ox=0,n){case"repeat":l.width=s,l.height=a;break;case"repeat-x":l.width=s,d<0?t.height+d>a?l.height=a:l.height=t.height+d:(l.oy=d,t.height+d>a?l.height=a-d:l.height=t.height);break;case"repeat-y":f<0?t.width+f>s?l.width=s:l.width=t.width+f:(l.ox=f,t.width+f>s?l.width=s-f:l.width=t.width),l.height=a;break;default:l.width=s,l.height=a}l.w=u,l.h=_,l.uv=[0,0,l.width/u,0,l.width/u,l.height/_,0,l.height/_]}if(e+=l.ox,r+=l.oy,f-=l.ox,d-=l.oy,pt.fillRectImgVb(o,this._clipRect,e,r,l.width,l.height,l.uv,this._curMat,this._x,this._y,0,0)){this._renderKey=0;var m=Dt.create(this,this._ib,o,(o._byteLength-64)/32*3,Et.create(256,0));this._submits[this._submits._length++]=m;var p=m.shaderValue;p.textureHost=t;var g=c[0]*u,v=c[1]*_,x=(c[2]-c[0])*u,b=(c[5]-c[3])*_,y=-f/u,T=-d/_;p.u_TexRange[0]=g/u,p.u_TexRange[1]=x/u,p.u_TexRange[2]=v/_,p.u_TexRange[3]=b/_,p.u_offset[0]=y,p.u_offset[1]=T,k.enabled&&!this._isMain&&m.addTexture(t,(o._byteLength>>2)-16),this._curSubmit=m,m._renderType=10017,m._numEle+=6}}else this.sprite&&i.timer.callLater(this,this._repaintSprite)},h.setShader=function(t){Y.save(this,1048576,this._shader2D,!0),this._shader2D.shader=t},h.setFilters=function(t){Y.save(this,2097152,this._shader2D,!0),this._shader2D.filters=t,this._curSubmit=at.RENDERBASE,this._renderKey=0,this._drawCount++},h.drawTexture=function(t,e,i,r,s,a,n){this._drawTextureM(t,e,i,r,s,a,n,null,1)},h.addTextureVb=function(t,e,i){var r=this._curSubmit._vb||this._vb,s=r._byteLength>>2;r.byteLength=s+16<<2;for(var a=r.getFloat32Array(),n=0;n<16;n+=4)a[s++]=t[n]+e,a[s++]=t[n+1]+i,a[s++]=t[n+2],a[s++]=t[n+3];this._curSubmit._numEle+=6,this._maxNumEle=Math.max(this._maxNumEle,this._curSubmit._numEle),r._upload=!0},h.willDrawTexture=function(t,e){if(!(t.loaded&&t.bitmap&&t.source))return this.sprite&&i.timer.callLater(this,this._repaintSprite),0;var r=t.bitmap,s=r.id+this._shader2D.ALPHA*e+10016;if(s==this._renderKey)return s;var a=this._shader2D,n=a.ALPHA,h=this._curSubmit.shaderValue;a.ALPHA*=e,this._renderKey=s,this._drawCount++,a.glTexture=r;var l=this._vb,o=null,u=l._byteLength/32*3;return o=Dt.create(this,this._ib,l,u,Et.create(1,0)),this._submits[this._submits._length++]=o,o.shaderValue.textureHost=t,o._renderType=10016,o._preIsSameTextureShader=10016===this._curSubmit._renderType&&a.ALPHA===h.ALPHA,this._curSubmit=o,a.ALPHA=n,s},h.drawTextures=function(t,r,s,a){if(t.loaded&&t.bitmap&&t.source){var n=this._clipRect;if(this._clipRect=e.MAXCLIPRECT,this._drawTextureM(t,r[0],r[1],t.width,t.height,s,a,null,1)){if(this._clipRect=n,C.drawCall++,!(r.length<4)){for(var h=this._curSubmit._vb||this._vb,l=this._curMat.a,o=this._curMat.d,u=2,_=r.length;u<_;u+=2)pt.copyPreImgVb(h,(r[u]-r[u-2])*l,(r[u+1]-r[u-1])*o),this._curSubmit._numEle+=6;this._maxNumEle=Math.max(this._maxNumEle,this._curSubmit._numEle)}}else alert("drawTextures err")}else this.sprite&&i.timer.callLater(this,this._repaintSprite)},h._drawTextureM=function(t,e,r,s,a,n,h,l,o){if(!t.loaded||!t.source)return this.sprite&&i.timer.callLater(this,this._repaintSprite),!1;var u=this._curSubmit._vb||this._vb,_=t.bitmap;e+=n,r+=h,this._drawCount++;var c=_.id+this._shader2D.ALPHA*o+10016;if(c!=this._renderKey){this._renderKey=c;var f=this._curSubmit.shaderValue,d=this._shader2D,m=d.ALPHA;d.ALPHA*=o,d.glTexture=_;var p=this._vb,g=null,v=p._byteLength/32*3;g=Dt.create(this,this._ib,p,v,Et.create(1,0)),this._submits[this._submits._length++]=g,g.shaderValue.textureHost=t,g._renderType=10016,g._preIsSameTextureShader=10016===this._curSubmit._renderType&&d.ALPHA===f.ALPHA,this._curSubmit=g,u=this._curSubmit._vb||this._vb,d.ALPHA=m}return!!pt.fillRectImgVb(u,this._clipRect,e,r,s||t.width,a||t.height,t.uv,l||this._curMat,this._x,this._y,0,0)&&(k.enabled&&!this._isMain&&this._curSubmit.addTexture(t,(u._byteLength>>2)-16),this._curSubmit._numEle+=6,this._maxNumEle=Math.max(this._maxNumEle,this._curSubmit._numEle),!0)},h._repaintSprite=function(){this.sprite&&this.sprite.repaint()},h._drawText=function(t,e,i,r,s,a,n,h,l,o){var u=t.bitmap;this._drawCount++;var _=u.id+this._shader2D.ALPHA+10016;if(_!=this._renderKey){this._renderKey=_;var c=this._curSubmit.shaderValue,f=this._shader2D;f.glTexture=u;var d=this._vb,m=null,p=d._byteLength/32*3;(m=k.enabled?Dt.create(this,this._ib,d,p,Et.create(1,0)):Dt.create(this,this._ib,d,p,qt.create()))._preIsSameTextureShader=10016===this._curSubmit._renderType&&f.ALPHA===c.ALPHA,this._submits[this._submits._length++]=m,m.shaderValue.textureHost=t,m._renderType=10016,this._curSubmit=m}t.active();var g=this._curSubmit._vb||this._vb;pt.fillRectImgVb(g,this._clipRect,e+n,i+h,r||t.width,s||t.height,t.uv,a||this._curMat,this._x,this._y,l,o,!0)&&(k.enabled&&!this._isMain&&this._curSubmit.addTexture(t,(g._byteLength>>2)-16),this._curSubmit._numEle+=6,this._maxNumEle=Math.max(this._maxNumEle,this._curSubmit._numEle))},h.drawTextureWithTransform=function(t,i,r,s,a,n,h,l,o){if(n){var u=this._curMat,_=this._x,c=this._y;(0!==h||0!==l)&&(this._x=h*u.a+l*u.c,this._y=l*u.d+h*u.b),n&&u.bTransform?(b.mul(n,u,e._tmpMatrix),(n=e._tmpMatrix)._checkTransform()):(this._x+=u.tx,this._y+=u.ty),this._drawTextureM(t,i,r,s,a,0,0,n,o),this._x=_,this._y=c}else this._drawTextureM(t,i,r,s,a,h,l,null,o)},h.fillQuadrangle=function(t,e,i,r,s){var a=this._curSubmit,n=this._vb,h=this._shader2D,l=a.shaderValue;if(this._renderKey=0,t.bitmap){var o=t.bitmap;h.glTexture==o&&h.ALPHA===l.ALPHA||(h.glTexture=o,(a=this._curSubmit=at.createSubmit(this,this._ib,n,n._byteLength/32*3,Et.create(1,0))).shaderValue.glTexture=o,this._submits[this._submits._length++]=a),pt.fillQuadrangleImgVb(n,e,i,r,t.uv,s||this._curMat,this._x,this._y)}else a.shaderValue.fillStyle&&a.shaderValue.fillStyle.equal(t)&&h.ALPHA===l.ALPHA||(h.glTexture=null,(a=this._curSubmit=at.createSubmit(this,this._ib,n,n._byteLength/32*3,Et.create(2,0))).shaderValue.defines.add(2),a.shaderValue.fillStyle=W.create(t),this._submits[this._submits._length++]=a),pt.fillQuadrangleImgVb(n,e,i,r,F.DEF_UV,s||this._curMat,this._x,this._y);a._numEle+=6},h.drawTexture2=function(t,i,r,s,a,n,h,l){if(0!=n){var o=this._curMat;if(this._x=t*o.a+i*o.c,this._y=i*o.d+t*o.b,a&&(o.bTransform||a.bTransform?(b.mul(a,o,e._tmpMatrix),a=e._tmpMatrix):(this._x+=a.tx+o.tx,this._y+=a.ty+o.ty,a=b.EMPTY)),1!==n||h){var u=this._shader2D.ALPHA,_=this._nBlendType;this._shader2D.ALPHA=n,h&&(this._nBlendType=G.TOINT(h)),this._drawTextureM(l[0],l[1]-r,l[2]-s,l[3],l[4],0,0,a,1),this._shader2D.ALPHA=u,this._nBlendType=_}else this._drawTextureM(l[0],l[1]-r,l[2]-s,l[3],l[4],0,0,a,1);this._x=this._y=0}},h.drawCanvas=function(t,e,i,r,s){var a=t.context;if(this._renderKey=0,a._targets)this._submits[this._submits._length++]=Pt.create(a,0,null),this._curSubmit=at.RENDERBASE,a._targets.drawTo(this,e,i,r,s);else{var n=this._submits[this._submits._length++]=Pt.create(a,this._shader2D.ALPHA,this._shader2D.filters),h=r/t.width,l=s/t.height,o=n._matrix;this._curMat.copyTo(o),1!=h&&1!=l&&o.scale(h,l);var u=o.tx,_=o.ty;o.tx=o.ty=0,o.transformPoint(y.TEMP.setTo(e,i)),o.translate(y.TEMP.x+u,y.TEMP.y+_),this._curSubmit=at.RENDERBASE}f.showCanvasMark&&(this.save(),this.lineWidth=4,this.strokeStyle=a._targets?"yellow":"green",this.strokeRect(e-1,i-1,r+2,s+2,1),this.strokeRect(e,i,r,s,1),this.restore())},h.drawTarget=function(t,e,i,r,s,a,n,h,l,o){void 0===o&&(o=-1);var u=this._vb;if(pt.fillRectImgVb(u,this._clipRect,e,i,r,s,l||F.DEF_UV,a||this._curMat,this._x,this._y,0,0)){this._renderKey=0;this._shader2D.glTexture=null;this._curSubmit.shaderValue;var _=this._curSubmit=_t.create(this,this._ib,u,(u._byteLength-64)/32*3,h,n);_.blendType=-1==o?this._nBlendType:o,_.scope=t,this._submits[this._submits._length++]=_,this._curSubmit._numEle+=6}},h.mixRGBandAlpha=function(t){return this._mixRGBandAlpha(t,this._shader2D.ALPHA)},h._mixRGBandAlpha=function(t,e){var i=(4278190080&t)>>>24;return 0!=i?i*=e:i=255*e,16777215&t|i<<24},h.drawTriangles=function(t,r,s,a,n,h,l,o,u,_){if(!t.loaded||!t.source)return this.sprite&&i.timer.callLater(this,this._repaintSprite),!1;this._drawCount++;t.bitmap;var c=this._mixRGBandAlpha(4294967295,o),f=(a.length,h.length);this._renderKey=-1;var d=this._curSubmit=Dt.create(this,this._triangleMesh.getIBR(),this._triangleMesh.getVBR(),this._triangleMesh.indexNum,Et.create(1,0));return d.shaderValue.textureHost=t,d._renderType=10016,this._submits[this._submits._length++]=d,l?(e._tmpMatrix.a=l.a,e._tmpMatrix.b=l.b,e._tmpMatrix.c=l.c,e._tmpMatrix.d=l.d,e._tmpMatrix.tx=l.tx+r,e._tmpMatrix.ty=l.ty+s,b.mul(e._tmpMatrix,this._curMat,e._tmpMatrix)):(e._tmpMatrix.a=this._curMat.a,e._tmpMatrix.b=this._curMat.b,e._tmpMatrix.c=this._curMat.c,e._tmpMatrix.d=this._curMat.d,e._tmpMatrix.tx=this._curMat.tx+r,e._tmpMatrix.ty=this._curMat.ty+s),this._triangleMesh.addData(a,n,h,e._tmpMatrix,c,this),this._curSubmit._numEle+=f,this._maxNumEle=Math.max(this._maxNumEle,this._curSubmit._numEle),!0},h.transform=function(t,e,i,r,s,a){Z.save(this),b.mul(b.TEMP.setTo(t,e,i,r,s,a),this._curMat,this._curMat),this._curMat._checkTransform()},h.setTransformByMatrix=function(t){t.copyTo(this._curMat)},h.transformByMatrix=function(t){Z.save(this),b.mul(t,this._curMat,this._curMat),this._curMat._checkTransform()},h.rotate=function(t){Z.save(this),this._curMat.rotateEx(t)},h.scale=function(t,e){Z.save(this),this._curMat.scaleEx(t,e)},h.clipRect=function(t,e,i,r){if(0!=this._curMat.b||0!=this._curMat.c){this._renderKey=0;var s=ut.create(4);this.addRenderObject(s);var a=this._vb,n=a._byteLength>>2;if(pt.fillRectImgVb(a,null,t,e,i,r,F.DEF_UV,this._curMat,this._x,this._y,0,0)){this._shader2D.glTexture=null;var h=this._curSubmit=at.createSubmit(this,this._ib,a,(a._byteLength-64)/32*3,Et.create(2,0));h.shaderValue.ALPHA=1,this._submits[this._submits._length++]=h,this._curSubmit._numEle+=6}else alert("clipRect calc stencil rect error");var l=ut.create(5);this.addRenderObject(l);var o=a.getFloat32Array(),u=Math.min(Math.min(Math.min(o[n+0],o[n+4]),o[n+8]),o[n+12]),_=Math.max(Math.max(Math.max(o[n+0],o[n+4]),o[n+8]),o[n+12]),c=Math.min(Math.min(Math.min(o[n+1],o[n+5]),o[n+9]),o[n+13]),f=Math.max(Math.max(Math.max(o[n+1],o[n+5]),o[n+9]),o[n+13]);K.save(this,l,t,e,i,r,u,c,_-u,f-c),this._curSubmit=at.RENDERBASE}else{i*=this._curMat.a,r*=this._curMat.d;var d=y.TEMP;this._curMat.transformPoint(d.setTo(t,e)),i<0&&(d.x=d.x+i,i=-i),r<0&&(d.y=d.y+r,r=-r),this._renderKey=0;var m=this._curSubmit=ot.create(this);this._submits[this._submits._length++]=m,m.submitIndex=this._submits._length,m.submitLength=9999999,X.save(this,m);var p=this._clipRect,g=p.x,v=p.y,x=d.x+i,b=d.y+r;g<d.x&&(p.x=d.x),v<d.y&&(p.y=d.y),p.width=Math.min(x,g+p.width)-p.x,p.height=Math.min(b,v+p.height)-p.y,this._shader2D.glTexture=null,m.clipRect.copyFrom(p),this._curSubmit=at.RENDERBASE}},h.setIBVB=function(t,e,i,r,s,a,n,h,l,o,u){if(void 0===l&&(l=0),void 0===o&&(o=0),void 0===u&&(u=0),null===i){if(A.isFlash){var _=r;_._selfIB||(_._selfIB=$t.create(35044)),_._selfIB.clear(),i=_._selfIB}else i=this._ib;pt.expandIBQuadrangle(i,r._byteLength/(4*r.vertexStride*4))}if(!h||!n)throw Error("setIBVB must input:shader shaderValues");var c=lt.create(this,r,i,s,n,h,l,o,u);a||(a=b.EMPTY),a.translate(t,e),b.mul(a,this._curMat,c._mat),a.translate(-t,-e),this._submits[this._submits._length++]=c,this._curSubmit=at.RENDERBASE,this._renderKey=0},h.addRenderObject=function(t){this._submits[this._submits._length++]=t},h.fillTrangles=function(t,e,i,r,s){var a=this._curSubmit,n=this._vb,h=this._shader2D,l=a.shaderValue,o=r.length>>4,u=t.bitmap;this._renderKey=0,h.glTexture==u&&h.ALPHA===l.ALPHA||((a=this._curSubmit=at.createSubmit(this,this._ib,n,n._byteLength/32*3,Et.create(1,0))).shaderValue.textureHost=t,this._submits[this._submits._length++]=a),pt.fillTranglesVB(n,e,i,r,s||this._curMat,this._x,this._y),a._numEle+=6*o},h.submitElement=function(t,e){var i=this._submits;for(e<0&&(e=i._length);t<e;)t+=i[t].renderSubmit()},h.finish=function(){bt.mainContext.finish()},h.flush=function(){var t=Math.max(this._vb._byteLength/64,this._maxNumEle/6)+8;if(t>this._ib.bufferLength/12&&pt.expandIBQuadrangle(this._ib,t),!this._isMain&&k.enabled&&k._atlasRestore>this._atlasResourceChange){this._atlasResourceChange=k._atlasRestore;for(var e=this._submits,i=0,r=e._length;i<r;i++){var s=e[i];10016===s.getRenderType()&&s.checkTexture()}}this.submitElement(0,this._submits._length),this._path&&this._path.reset(),et.instance&&et.getInstance().reset();var a=0;for(i=0,a=this.meshlist.length;i<a;i++){var n=this.meshlist[i];n.canReuse?n.releaseMesh():n.destroy()}return this.meshlist.length=0,this._curSubmit=at.RENDERBASE,this._renderKey=0,this._triangleMesh=Ft.getAMesh(),this.meshlist.push(this._triangleMesh),this._submits._length},h.setPathId=function(t){if(this.mId=t,-1!=this.mId){this.mHaveKey=!1;var e=N.getInstance();e.shapeDic[this.mId]&&(this.mHaveKey=!0),this.mHaveLineKey=!1,e.shapeLineDic[this.mId]&&(this.mHaveLineKey=!0)}},h.movePath=function(t,e){var i=t,r=e;t=this._curMat.a*i+this._curMat.c*r+this._curMat.tx,e=this._curMat.b*i+this._curMat.d*r+this._curMat.ty,this.mX+=t,this.mY+=e},h.beginPath=function(){var t=this._getPath();t.tempArray.length=0,t.closePath=!1,this.mX=0,this.mY=0},h.closePath=function(){this._path.closePath=!0},h.fill=function(t){void 0===t&&(t=!1);var e=this._getPath();this.drawPoly(0,0,e.tempArray,this.fillStyle._color.numColor,0,0,t)},h.stroke=function(){var t=this._getPath();if(this.lineWidth>0){if(-1==this.mId)t.drawLine(0,0,t.tempArray,this.lineWidth,this.strokeStyle._color.numColor);else if(this.mHaveLineKey){var e=N.getInstance().shapeLineDic[this.mId];e.rebuild(t.tempArray),t.setGeomtry(e)}else N.getInstance().addLine(this.mId,t.drawLine(0,0,t.tempArray,this.lineWidth,this.strokeStyle._color.numColor));t.update();var i=[this.mX,this.mY],r=at.createShape(this,t.ib,t.vb,t.count,t.offset,Et.create(4,0));r.shaderValue.ALPHA=this._shader2D.ALPHA,r.shaderValue.u_pos=i,r.shaderValue.u_mmat2=vt.TEMPMAT4_ARRAY,this._submits[this._submits._length++]=r,this._renderKey=-1}},h.line=function(t,e,i,r,s,a){var n=this._curSubmit,h=this._vb;if(pt.fillLineVb(h,this._clipRect,t,e,i,r,s,a)){this._renderKey=0;var l=this._shader2D,o=n.shaderValue;l.strokeStyle===o.strokeStyle&&l.ALPHA===o.ALPHA||(l.glTexture=null,(n=this._curSubmit=at.createSubmit(this,this._ib,h,(h._byteLength-64)/32*3,Et.create(2,0))).shaderValue.strokeStyle=l.strokeStyle,n.shaderValue.mainID=2,n.shaderValue.ALPHA=l.ALPHA,this._submits[this._submits._length++]=n),n._numEle+=6}},h.moveTo=function(t,e,i){void 0===i&&(i=!0);var r=this._getPath();if(i){var s=t,a=e;t=this._curMat.a*s+this._curMat.c*a,e=this._curMat.b*s+this._curMat.d*a}r.addPoint(t,e)},h.lineTo=function(t,e,i){void 0===i&&(i=!0);var r=this._getPath();if(i){var s=t,a=e;t=this._curMat.a*s+this._curMat.c*a,e=this._curMat.b*s+this._curMat.d*a}r.addPoint(t,e)},h.drawCurves=function(t,e,i){this.setPathId(-1),this.beginPath(),this.strokeStyle=i[3],this.lineWidth=i[4];var r=i[2];t+=i[0],e+=i[1],this.movePath(t,e),this.moveTo(r[0],r[1]);for(var s=2,a=r.length;s<a;)this.quadraticCurveTo(r[s++],r[s++],r[s++],r[s++]);this.stroke()},h.arcTo=function(t,i,r,s,a){if(-1==this.mId||!this.mHaveKey){var n=0,h=0,l=0,o=this._getPath();this._curMat.copyTo(e._tmpMatrix),e._tmpMatrix.tx=e._tmpMatrix.ty=0,e._tempPoint.setTo(o.getEndPointX(),o.getEndPointY()),e._tmpMatrix.invertTransformPoint(e._tempPoint);var u=e._tempPoint.x-t,_=e._tempPoint.y-i,c=Math.sqrt(u*u+_*_);if(!(c<=1e-6)){var f=u/c,d=_/c,m=r-t,p=s-i,g=m*m+p*p,v=Math.sqrt(g);if(!(v<=1e-6)){var x=m/v,b=p/v,y=f+x,T=d+b,A=Math.sqrt(y*y+T*T);if(!(A<=1e-6)){var E=y/A,S=T/A,w=Math.acos(E*f+S*d),R=Math.PI/2-w,I=(c=a/Math.tan(R))*f+t,M=c*d+i,C=Math.sqrt(c*c+a*a),L=t+E*C,P=i+S*C,D=0,F=0,B=0;if(f*b-d*x>=0){var N=(D=2*R)/e.SEGNUM;F=Math.sin(N),B=Math.cos(N)}else N=(D=2*-R)/e.SEGNUM,F=Math.sin(N),B=Math.cos(N);h=this._curMat.a*I+this._curMat.c*M,l=this._curMat.b*I+this._curMat.d*M,h==this._path.getEndPointX()&&l==this._path.getEndPointY()||o.addPoint(h,l);var O=I-L,V=M-P;for(n=0;n<e.SEGNUM;n++){var U=O*B+V*F,k=-O*F+V*B;h=U+L,l=k+P,t=this._curMat.a*h+this._curMat.c*l,l=i=this._curMat.b*h+this._curMat.d*l,(h=t)==this._path.getEndPointX()&&l==this._path.getEndPointY()||o.addPoint(h,l),O=U,V=k}}}}}},h.arc=function(t,e,i,r,s,a,n){if(void 0===a&&(a=!1),void 0===n&&(n=!0),-1!=this.mId){var h=N.getInstance().shapeDic[this.mId];if(h&&this.mHaveKey&&!h.needUpdate(this._curMat))return;t=0,e=0}var l=0,o=0,u=0,_=0,c=0,f=0,d=0,m=0;if(o=s-r,a)if(Math.abs(o)>=2*Math.PI)o=2*-Math.PI;else for(;o>0;)o-=2*Math.PI;else if(Math.abs(o)>=2*Math.PI)o=2*Math.PI;else for(;o<0;)o+=2*Math.PI;u=o/(m=i<101?Math.max(10,o*i/5):i<201?Math.max(10,o*i/20):Math.max(10,o*i/40))/2,_=Math.abs(4/3*(1-Math.cos(u))/Math.sin(u)),a&&(_=-_);var p=this._getPath(),g=NaN,v=NaN;for(d=0;d<=m;d++)l=r+o*(d/m),c=t+Math.cos(l)*i,f=e+Math.sin(l)*i,n&&(g=c,v=f,c=this._curMat.a*g+this._curMat.c*v,f=this._curMat.b*g+this._curMat.d*v),c==this._path.getEndPointX()&&f==this._path.getEndPointY()||p.addPoint(c,f);c=t+Math.cos(s)*i,f=e+Math.sin(s)*i,n&&(g=c,v=f,c=this._curMat.a*g+this._curMat.c*v,f=this._curMat.b*g+this._curMat.d*v),c==this._path.getEndPointX()&&f==this._path.getEndPointY()||p.addPoint(c,f)},h.quadraticCurveTo=function(t,e,i,r){var s=l.I,a=i,n=r;i=this._curMat.a*a+this._curMat.c*n,r=this._curMat.b*a+this._curMat.d*n,a=t,n=e,t=this._curMat.a*a+this._curMat.c*n,e=this._curMat.b*a+this._curMat.d*n;for(var h=s.getBezierPoints([this._path.getEndPointX(),this._path.getEndPointY(),t,e,i,r],30,2),o=0,u=h.length/2;o<u;o++)this.lineTo(h[2*o],h[2*o+1],!1);this.lineTo(i,r,!1)},h.rect=function(t,e,i,r){this._other=this._other.make(),this._other.path||(this._other.path=new z),this._other.path.rect(t,e,i,r)},h.strokeRect=function(t,e,i,r,s){var a=.5*s;this.line(t-a,e,t+i+a,e,s,this._curMat),this.line(t+i,e,t+i,e+r,s,this._curMat),this.line(t,e,t,e+r,s,this._curMat),this.line(t-a,e+r,t+i+a,e+r,s,this._curMat)},h.clip=function(){},h.drawPoly=function(t,e,i,r,s,a,n){void 0===n&&(n=!1),this._renderKey=0,this._shader2D.glTexture=null;var h=this._getPath();if(-1==this.mId)h.polygon(t,e,i,r,s||1,a);else if(this.mHaveKey){var l=N.getInstance().shapeDic[this.mId];l.setMatrix(this._curMat),l.rebuild(h.tempArray),h.setGeomtry(l)}else{var o=h.polygon(t,e,i,r,s||1,a);N.getInstance().addShape(this.mId,o),o.setMatrix(this._curMat)}h.update();var u,_=[this.mX,this.mY];if(u=at.createShape(this,h.ib,h.vb,h.count,h.offset,Et.create(4,0)),u.shaderValue.ALPHA=this._shader2D.ALPHA,u.shaderValue.u_pos=_,u.shaderValue.u_mmat2=vt.EMPTYMAT4_ARRAY,this._submits[this._submits._length++]=u,s>0){if(this.mHaveLineKey){var c=N.getInstance().shapeLineDic[this.mId];c.rebuild(h.tempArray),h.setGeomtry(c)}else N.getInstance().addShape(this.mId,h.drawLine(t,e,i,s,a));h.update(),(u=at.createShape(this,h.ib,h.vb,h.count,h.offset,Et.create(4,0))).shaderValue.ALPHA=this._shader2D.ALPHA,u.shaderValue.u_mmat2=vt.EMPTYMAT4_ARRAY,this._submits[this._submits._length++]=u}},h.drawParticle=function(t,e,i){i.x=t,i.y=e,this._submits[this._submits._length++]=i},h._getPath=function(){return this._path||(this._path=new z)},a(0,h,"globalCompositeOperation",function(){return G.NAMES[this._nBlendType]},function(t){var e=G.TOINT[t];null==e||this._nBlendType===e||(Y.save(this,65536,this,!0),this._curSubmit=at.RENDERBASE,this._renderKey=0,this._nBlendType=e)}),a(0,h,"strokeStyle",function(){return this._shader2D.strokeStyle},function(t){this._shader2D.strokeStyle.equal(t)||(Y.save(this,512,this._shader2D,!1),this._shader2D.strokeStyle=W.create(t))}),a(0,h,"globalAlpha",function(){return this._shader2D.ALPHA},function(t){(t=Math.floor(1e3*t)/1e3)!=this._shader2D.ALPHA&&(Y.save(this,1,this._shader2D,!0),this._shader2D.ALPHA=t)}),a(0,h,"asBitmap",null,function(t){if(t){if(this._targets||(this._targets=new j),this._targets.repaint=!0,!this._width||!this._height)throw Error("asBitmap no size!");this._targets.setSP(this.sprite),this._targets.size(this._width,this._height)}else this._targets=null}),a(0,h,"fillStyle",function(){return this._shader2D.fillStyle},function(t){this._shader2D.fillStyle.equal(t)||(Y.save(this,2,this._shader2D,!1),this._shader2D.fillStyle=W.create(t))}),a(0,h,"textAlign",function(){return this._other.textAlign},function(t){this._other.textAlign===t||(this._other=this._other.make(),Y.save(this,32768,this._other,!1),this._other.textAlign=t)}),a(0,h,"lineWidth",function(){return this._other.lineWidth},function(t){this._other.lineWidth===t||(this._other=this._other.make(),Y.save(this,256,this._other,!1),this._other.lineWidth=t)}),a(0,h,"textBaseline",function(){return this._other.textBaseline},function(t){this._other.textBaseline===t||(this._other=this._other.make(),Y.save(this,16384,this._other,!1),this._other.textBaseline=t)}),a(0,h,"font",null,function(t){t!=this._other.font.toString()&&(this._other=this._other.make(),Y.save(this,8,this._other,!1),this._other.font===dt.EMPTY?this._other.font=new dt(t):this._other.font.setFont(t))}),e.__init__=function(){n.DEFAULT=new n},e._tempPoint=new y,e._SUBMITVBSIZE=32e3,e._MAXSIZE=99999999,e._RECTVBSIZE=16,e.MAXCLIPRECT=new T(0,0,99999999,99999999),e._COUNT=0,e._tmpMatrix=new b,e.SEGNUM=32,e._contextcount=0,r(e,["_fontTemp",function(){return this._fontTemp=new dt},"_drawStyleTemp",function(){return this._drawStyleTemp=new W(null)}]),e.__init$=function(){n=function(){function t(){this.lineWidth=1,this.path=null,this.textAlign=null,this.textBaseline=null,this.font=dt.EMPTY}s(t,"");var e=t.prototype;return e.clear=function(){this.lineWidth=1,this.path&&this.path.clear(),this.textAlign=this.textBaseline=null,this.font=dt.EMPTY},e.make=function(){return this===t.DEFAULT?new t:this},t.DEFAULT=null,t}()},e}(),Et=function(t){function e(t,i){this.size=[0,0],this.alpha=1,this.ALPHA=1,this.subID=0,this._cacheID=0,e.__super.call(this),this.defines=new It,this.position=e._POSITION,this.mainID=t,this.subID=i,this.textureHost=null,this.texture=null,this.fillStyle=null,this.color=null,this.strokeStyle=null,this.colorAdd=null,this.glTexture=null,this.u_mmat2=null,this._cacheID=t|i,this._inClassCache=e._cache[this._cacheID],t>0&&!this._inClassCache&&(this._inClassCache=e._cache[this._cacheID]=[],this._inClassCache._length=0),this.clear()}s(e,"laya.webgl.shader.d2.value.Value2D",V);var i=e.prototype;return i.setValue=function(t){},i.refresh=function(){var t=this.size;return t[0]=vt.width,t[1]=vt.height,this.alpha=this.ALPHA*vt.worldAlpha,this.mmat=vt.worldMatrix4,this},i._ShaderWithCompile=function(){return Qt.withCompile2D(0,this.mainID,this.defines.toNameDic(),this.mainID|this.defines._value,jt.create)},i._withWorldShaderDefines=function(){var t=vt.worldShaderDefines,e=Qt.sharders[this.mainID|this.defines._value|t.getValue()];if(!e){var i,r,s={};i=this.defines.toNameDic();for(r in i)s[r]="";i=t.toNameDic();for(r in i)s[r]="";e=Qt.withCompile2D(0,this.mainID,s,this.mainID|this.defines._value|t.getValue(),jt.create)}var a=vt.worldFilters;if(!a)return e;for(var n,h=a.length,l=0;l<h;l++)(n=a[l])&&n.action.setValue(this);return e},i.upload=function(){var t=vt;this.alpha=this.ALPHA*t.worldAlpha,vt.worldMatrix4!==vt.TEMPMAT4_ARRAY&&this.defines.add(128),bt.shaderHighPrecision&&this.defines.add(1024);var e,i=t.worldShaderDefines?this._withWorldShaderDefines():Qt.sharders[this.mainID|this.defines._value]||this._ShaderWithCompile();this.size[0]=t.width,this.size[1]=t.height,this.mmat=t.worldMatrix4,Bt.activeShader!==i?(i._shaderValueWidth!==t.width||i._shaderValueHeight!==t.height?(i._shaderValueWidth=t.width,i._shaderValueHeight=t.height):e=i._params2dQuick2||i._make2dQuick2(),i.upload(this,e)):(i._shaderValueWidth!==t.width||i._shaderValueHeight!==t.height?(i._shaderValueWidth=t.width,i._shaderValueHeight=t.height):e=i._params2dQuick1||i._make2dQuick1(),i.upload(this,e))},i.setFilters=function(t){if(this.filters=t,t)for(var e,i=t.length,r=0;r<i;r++)(e=t[r])&&(this.defines.add(e.type),e.action.setValue(this))},i.clear=function(){this.defines.setValue(this.subID)},i.release=function(){this._inClassCache[this._inClassCache._length++]=this,this.fillStyle=null,this.strokeStyle=null,this.clear()},e._initone=function(t,i){e._typeClass[t]=i,e._cache[t]=[],e._cache[t]._length=0},e.__init__=function(){e._POSITION=[2,5126,!1,4*mt.BYTES_PE,0],e._TEXCOORD=[2,5126,!1,4*mt.BYTES_PE,2*mt.BYTES_PE],e._initone(2,Ut),e._initone(4,Gt),e._initone(256,kt),e._initone(512,Vt),e._initone(1,Ht),e._initone(65,qt),e._initone(9,Ht)},e.create=function(t,i){var r=e._cache[t|i];return r._length?r[--r._length]:new e._typeClass[t|i](i)},e._POSITION=null,e._TEXCOORD=null,e._cache=[],e._typeClass=[],e.TEMPMAT4_ARRAY=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e}(),St=function(t){function e(t,i){e.__super.call(this,t,i)}s(e,"laya.webgl.utils.RenderSprite3D",E);var i=e.prototype;return i.onCreate=function(t){switch(t){case 8:return void(this._fun=this._blend);case 4:return void(this._fun=this._transform)}},i._mask=function(t,i,r,s){var a,n,h=this._next,l=t.mask;if(l){i.ctx.save();var o=i.ctx.globalCompositeOperation,u=new T;if(u.copyFrom(l.getBounds()),u.width=Math.round(u.width),u.height=Math.round(u.height),u.x=Math.round(u.x),u.y=Math.round(u.y),u.width>0&&u.height>0){var _=t._style._tf,c=ht.create();c.addValue("bounds",u),a=nt.create([c,i],laya.webgl.utils.RenderSprite3D.tmpTarget),i.addRenderObject(a),l.render(i,-u.x,-u.y),a=nt.create([c],laya.webgl.utils.RenderSprite3D.endTmpTarget),i.addRenderObject(a),i.ctx.save(),i.clipRect(r-_.translateX+u.x,s-_.translateY+u.y,u.width,u.height),h._fun.call(h,t,i,r,s),i.ctx.restore(),n=ut.create(6),o=i.ctx.globalCompositeOperation,n.blendMode="mask",i.addRenderObject(n),b.TEMP.identity();var f=Et.create(1,0),d=F.INV_UV,m=u.width,p=u.height;(u.width<32||u.height<32)&&((d=e.tempUV)[0]=0,d[1]=0,d[2]=u.width>=32?1:u.width/32,d[3]=0,d[4]=u.width>=32?1:u.width/32,d[5]=u.height>=32?1:u.height/32,d[6]=0,d[7]=u.height>=32?1:u.height/32,u.width=u.width>=32?u.width:32,u.height=u.height>=32?u.height:32,d[1]*=-1,d[3]*=-1,d[5]*=-1,d[7]*=-1,d[1]+=1,d[3]+=1,d[5]+=1,d[7]+=1),i.ctx.drawTarget(c,r+u.x-_.translateX,s+u.y-_.translateY,m,p,b.TEMP,"tmpTarget",f,d,6),a=nt.create([c],laya.webgl.utils.RenderSprite3D.recycleTarget),i.addRenderObject(a),(n=ut.create(6)).blendMode=o,i.addRenderObject(n)}i.ctx.restore()}else h._fun.call(h,t,i,r,s)},i._blend=function(t,e,i,r){var s=t._style,a=this._next;s.blendMode?(e.ctx.save(),e.ctx.globalCompositeOperation=s.blendMode,a._fun.call(a,t,e,i,r),e.ctx.restore()):a._fun.call(a,t,e,i,r)},i._transform=function(t,e,i,r){var s=t.transform,a=this._next;if(s&&a!=E.NORENDER){var n=e.ctx;t._style;s.tx=i,s.ty=r;var h=n._getTransformMatrix(),l=h.clone();b.mul(s,h,h),h._checkTransform(),s.tx=s.ty=0,a._fun.call(a,t,e,0,0),l.copyTo(h),l.destroy()}else a._fun.call(a,t,e,i,r)},e.tmpTarget=function(t,e){var i=t.getValue("bounds"),r=Nt.create(i.width,i.height);r.start(),r.clear(0,0,0,0),t.addValue("tmpTarget",r)},e.endTmpTarget=function(t){t.getValue("tmpTarget").end()},e.recycleTarget=function(t){t.getValue("tmpTarget").recycle(),t.recycle()},r(e,["tempUV",function(){return this.tempUV=new Array(8)}]),e}(),wt=function(t){function e(){this.data=null,e.__super.call(this)}s(e,"laya.filters.webgl.ColorFilterActionGL",O);var r=e.prototype;return i.imps(r,{"laya.filters.IFilterActionGL":!0}),r.setValue=function(t){t.colorMat=this.data._mat,t.colorAlpha=this.data._alpha},r.apply3d=function(t,e,i,r,s){var a=t.getValue("bounds"),n=Et.create(1,0);n.setFilters([this.data]);var h=b.TEMP;h.identity(),i.ctx.drawTarget(t,0,0,a.width,a.height,h,"src",n)},e}(),Rt=function(t){function e(t,i,r,s,a){this._atlasCanvas=null,this._inAtlasTextureKey=null,this._inAtlasTextureBitmapValue=null,this._inAtlasTextureOriUVValue=null,this._InAtlasWebGLImagesKey=null,this._InAtlasWebGLImagesOffsetValue=null,e.__super.call(this,t,i,a),this._inAtlasTextureKey=[],this._inAtlasTextureBitmapValue=[],this._inAtlasTextureOriUVValue=[],this._InAtlasWebGLImagesKey={},this._InAtlasWebGLImagesOffsetValue=[],this._atlasCanvas=new Wt,this._atlasCanvas._atlaser=this,this._atlasCanvas.width=r,this._atlasCanvas.height=s,this._atlasCanvas.activeResource(),this._atlasCanvas.lock=!0}s(e,"laya.webgl.atlas.Atlaser",U);var i=e.prototype;return i.computeUVinAtlasTexture=function(t,e,i,r){var s=k.atlasTextureWidth,a=k.atlasTextureHeight,n=i/s,h=r/a,l=(i+t.bitmap.width)/s,o=(r+t.bitmap.height)/a,u=t.bitmap.width/s,_=t.bitmap.height/a;t.uv=[n+e[0]*u,h+e[1]*_,l-(1-e[2])*u,h+e[3]*_,l-(1-e[4])*u,o-(1-e[5])*_,n+e[6]*u,o-(1-e[7])*_]},i.findBitmapIsExist=function(t){if(t instanceof laya.webgl.resource.WebGLImage){var e=t,i=e.url,r=this._InAtlasWebGLImagesKey[i||e.id];if(r)return r.offsetInfoID}return-1},i.addToAtlasTexture=function(t,e,i){if(t instanceof laya.webgl.resource.WebGLImage){var r=t,s=r.url;this._InAtlasWebGLImagesKey[s||r.id]={bitmap:t,offsetInfoID:this._InAtlasWebGLImagesOffsetValue.length},this._InAtlasWebGLImagesOffsetValue.push([e,i])}this._atlasCanvas.texSubImage2D(e,i,t.atlasSource),t.clearAtlasSource()},i.addToAtlas=function(t,e,i){t._atlasID=this._inAtlasTextureKey.length;var r=t.uv.slice(),s=t.bitmap;this._inAtlasTextureKey.push(t),this._inAtlasTextureOriUVValue.push(r),this._inAtlasTextureBitmapValue.push(s),this.computeUVinAtlasTexture(t,r,e,i),t.bitmap=this._atlasCanvas},i.clear=function(){for(var t=0,e=this._inAtlasTextureKey.length;t<e;t++)this._inAtlasTextureKey[t].bitmap=this._inAtlasTextureBitmapValue[t],this._inAtlasTextureKey[t].uv=this._inAtlasTextureOriUVValue[t],this._inAtlasTextureKey[t]._atlasID=-1,this._inAtlasTextureKey[t].bitmap.lock=!1,this._inAtlasTextureKey[t].bitmap.releaseResource();this._inAtlasTextureKey.length=0,this._inAtlasTextureBitmapValue.length=0,this._inAtlasTextureOriUVValue.length=0,this._InAtlasWebGLImagesKey=null,this._InAtlasWebGLImagesOffsetValue.length=0},i.dispose=function(){this.clear(),this._atlasCanvas.destroy()},a(0,i,"InAtlasWebGLImagesOffsetValue",function(){return this._InAtlasWebGLImagesOffsetValue}),a(0,i,"texture",function(){return this._atlasCanvas}),a(0,i,"inAtlasWebGLImagesKey",function(){return this._InAtlasWebGLImagesKey}),e}(),It=function(t){function e(){e.__super.call(this,e.__name2int,e.__int2name,e.__int2nameMap)}return s(e,"laya.webgl.shader.d2.ShaderDefines2D",J),e.__init__=function(){e.reg("TEXTURE2D",1),e.reg("COLOR2D",2),e.reg("PRIMITIVE",4),e.reg("GLOW_FILTER",8),e.reg("BLUR_FILTER",16),e.reg("COLOR_FILTER",32),e.reg("COLOR_ADD",64),e.reg("WORLDMAT",128),e.reg("FILLTEXTURE",256),e.reg("FSHIGHPRECISION",1024)},e.reg=function(t,i){J._reg(t,i,e.__name2int,e.__int2name)},e.toText=function(t,e,i){return J._toText(t,e,i)},e.toInt=function(t){return J._toInt(t,e.__name2int)},e.TEXTURE2D=1,e.COLOR2D=2,e.PRIMITIVE=4,e.FILTERGLOW=8,e.FILTERBLUR=16,e.FILTERCOLOR=32,e.COLORADD=64,e.WORLDMAT=128,e.FILLTEXTURE=256,e.SKINMESH=512,e.SHADERDEFINE_FSHIGHPRECISION=1024,e.__name2int={},e.__int2name=[],e.__int2nameMap=[],e}(),Mt=(function(t){function e(t,i,r,s,a,n,h){e.__super.call(this,t,i,r,s,40,a,n,h)}s(e,"laya.webgl.shapes.Ellipse",it)}(),function(t){function e(t,i,r,s,a){this._points=[],this.rebuild(r),e.__super.call(this,t,i,0,0,0,a,s,a,0)}s(e,"laya.webgl.shapes.Line",it);var i=e.prototype;return i.rebuild=function(t){var e=t.length;e!=this._points.length&&(this.mUint16Array=new Uint16Array(6*(e/2-1)),this.mFloat32Array=new Float32Array(5*e)),this._points.length=0;for(var i=NaN,r=NaN,s=-1,a=-1,n=t.length/2,h=0;h<n;h++)i=t[2*h],r=t[2*h+1],(Math.abs(s-i)>.01||Math.abs(a-r)>.01)&&this._points.push(i,r),s=i,a=r},i.getData=function(t,e,i){var r=[],s=[];this.borderWidth>0&&this.createLine2(this._points,r,this.borderWidth,i,s,this._points.length/2),this.mUint16Array.set(r,0),this.mFloat32Array.set(s,0),t.append(this.mUint16Array),e.append(this.mFloat32Array)},e}()),Ct=function(t){function e(t,i,r,s,a){this._points=[];for(var n=NaN,h=NaN,l=-1,o=-1,u=r.length/2-1,_=0;_<u;_++)n=r[2*_],h=r[2*_+1],(Math.abs(l-n)>.01||Math.abs(o-h)>.01)&&this._points.push(n,h),l=n,o=h;n=r[2*u],h=r[2*u+1],l=this._points[0],o=this._points[1],(Math.abs(l-n)>.01||Math.abs(o-h)>.01)&&this._points.push(n,h),e.__super.call(this,t,i,0,0,this._points.length/2,0,s,a)}s(e,"laya.webgl.shapes.LoopLine",it);var i=e.prototype;return i.getData=function(t,e,i){if(this.borderWidth>0){for(var r=this.color,s=(r>>16&255)/255,a=(r>>8&255)/255,n=(255&r)/255,h=[],l=0,o=0,u=[],_=Math.floor(this._points.length/2),c=0;c<_;c++)l=this._points[2*c],o=this._points[2*c+1],h.push(this.x+l,this.y+o,s,a,n);this.createLoopLine(h,u,this.borderWidth,i+h.length/5),t.append(new Uint16Array(u)),e.append(new Float32Array(h))}},i.createLoopLine=function(t,e,i,r,s,a){t.length;var n=t.concat(),h=s||t,l=this.borderColor,o=(l>>16&255)/255,u=(l>>8&255)/255,_=(255&l)/255,c=[n[0],n[1]],f=[n[n.length-5],n[n.length-4]],d=f[0]+.5*(c[0]-f[0]),m=f[1]+.5*(c[1]-f[1]);n.unshift(d,m,0,0,0),n.push(d,m,0,0,0);var p,g,v,x,b,y,T,A,E,S,w,R,I,M,C,L,P,D,F,B,N=n.length/5,O=r,V=i/2;v=n[0],x=n[1],S=v-(b=n[5]),E=(E=-(x-(y=n[6])))/(B=Math.sqrt(E*E+S*S))*V,S=S/B*V,h.push(v-E,x-S,o,u,_,v+E,x+S,o,u,_);for(var U=1;U<N-1;U++)v=n[5*(U-1)],x=n[5*(U-1)+1],b=n[5*U],y=n[5*U+1],T=n[5*(U+1)],A=n[5*(U+1)+1],S=v-b,R=b-T,C=(-(E=(E=-(x-y))/(B=Math.sqrt(E*E+S*S))*V)+v)*(-(S=S/B*V)+y)-(-E+b)*(-S+x),D=(-(w=(w=-(y-A))/(B=Math.sqrt(w*w+R*R))*V)+T)*(-(R=R/B*V)+y)-(-w+b)*(-R+A),F=(I=-S+x-(-S+y))*(P=-w+b-(-w+T))-(L=-R+A-(-R+y))*(M=-E+b-(-E+v)),Math.abs(F)<.1?(F+=10.1,h.push(b-E,y-S,o,u,_,b+E,y+S,o,u,_)):(((p=(M*D-P*C)/F)-b)*(p-b)+((g=(L*C-I*D)/F)-y)+(g-y),h.push(p,g,o,u,_,b-(p-b),y-(g-y),o,u,_));a&&(e=a);var k=this.edges+1;for(U=1;U<k;U++)e.push(O+2*(U-1),O+2*(U-1)+1,O+2*U+1,O+2*U+1,O+2*U,O+2*(U-1));return e.push(O+2*(U-1),O+2*(U-1)+1,O+1,O+1,O,O+2*(U-1)),h},e}(),Lt=function(t){function e(t,i,r,s,a,n){this._points=null,this._start=-1,this._repaint=!1,this.earcutTriangles=null,this._mat=b.create(),this._points=r.slice(0,r.length),e.__super.call(this,t,i,0,0,this._points.length/2,s,a,n)}s(e,"laya.webgl.shapes.Polygon",it);var i=e.prototype;return i.rebuild=function(t){this._repaint||(this._points.length=0,this._points=this._points.concat(t))},i.setMatrix=function(t){t.copyTo(this._mat)},i.needUpdate=function(t){return this._repaint=this._mat.a==t.a&&this._mat.b==t.b&&this._mat.c==t.c&&this._mat.d==t.d&&this._mat.tx==t.tx&&this._mat.ty==t.ty,!this._repaint},i.getData=function(t,e,i){var r,s=0,a=this._points,n=0;if(this.mUint16Array&&this.mFloat32Array&&this._repaint){if(this._start!=i){for(this._start=i,r=[],n=this.earcutTriangles.length,s=0;s<n;s++)r.push(this.earcutTriangles[s]+i);this.mUint16Array=new Uint16Array(r)}}else{this._start=i,r=[];var h=[],l=[],o=this.color,u=(o>>16&255)/255,_=(o>>8&255)/255,c=(255&o)/255;for(n=Math.floor(a.length/2),s=0;s<n;s++)h.push(this.x+a[2*s],this.y+a[2*s+1],u,_,c),l.push(this.x+a[2*s],this.y+a[2*s+1]);for(this.earcutTriangles=rt.earcut(l,null,2),n=this.earcutTriangles.length,s=0;s<n;s++)r.push(this.earcutTriangles[s]+i);this.mUint16Array=new Uint16Array(r),this.mFloat32Array=new Float32Array(h)}t.append(this.mUint16Array),e.append(this.mFloat32Array)},e}(),Pt=function(t){function e(){this._matrix=new b,this._matrix4=mt.defaultMatrix4.concat(),e.__super.call(this,1e4),this.shaderValue=new Et(0,0)}s(e,"laya.webgl.submit.SubmitCanvas",at);var i=e.prototype;return i.renderSubmit=function(){if(this._ctx_src._targets)return this._ctx_src._targets.flush(this._ctx_src),1;var t=vt.worldAlpha,e=vt.worldMatrix4,i=vt.worldMatrix,r=vt.worldFilters,s=vt.worldShaderDefines,a=this.shaderValue,n=this._matrix,h=this._matrix4,l=b.TEMP;return b.mul(n,i,l),h[0]=l.a,h[1]=l.b,h[4]=l.c,h[5]=l.d,h[12]=l.tx,h[13]=l.ty,vt.worldMatrix=l.clone(),vt.worldMatrix4=h,vt.worldAlpha=vt.worldAlpha*a.alpha,a.filters&&a.filters.length&&(vt.worldFilters=a.filters,vt.worldShaderDefines=a.defines),this._ctx_src.flush(),vt.worldAlpha=t,vt.worldMatrix4=e,vt.worldMatrix.destroy(),vt.worldMatrix=i,vt.worldFilters=r,vt.worldShaderDefines=s,1},i.releaseRender=function(){var t=e._cache;this._ctx_src=null,t[t._length++]=this},i.getRenderType=function(){return 10003},e.create=function(t,i,r){var s=e._cache._length?e._cache[--e._cache._length]:new e;s._ctx_src=t;var a=s.shaderValue;return a.alpha=i,a.defines.setValue(0),r&&r.length&&a.setFilters(r),s},e._cache=(e._cache=[],e._cache._length=0,e._cache),e}(),Dt=function(t){function e(t){this._preIsSameTextureShader=!1,this._isSameTexture=!0,this._texs=new Array,this._texsID=new Array,this._vbPos=new Array,void 0===t&&(t=1e4),e.__super.call(this,t)}s(e,"laya.webgl.submit.SubmitTexture",at);var i=e.prototype;return i.releaseRender=function(){var t=e._cache;t[t._length++]=this,this.shaderValue.release(),this._preIsSameTextureShader=!1,this._vb=null,this._texs.length=0,this._vbPos.length=0,this._isSameTexture=!0},i.addTexture=function(t,e){this._texsID[this._texs.length]=t._uvID,this._texs.push(t),this._vbPos.push(e)},i.checkTexture=function(){if(this._texs.length<1)this._isSameTexture=!0;else{var t=this.shaderValue.textureHost.bitmap;if(null!==t)for(var e=this._vb.getFloat32Array(),i=0,r=this._texs.length;i<r;i++){var s=this._texs[i];s.active();var a=s.uv;if(this._texsID[i]!==s._uvID){this._texsID[i]=s._uvID;var n=this._vbPos[i];e[n+2]=a[0],e[n+3]=a[1],e[n+6]=a[2],e[n+7]=a[3],e[n+10]=a[4],e[n+11]=a[5],e[n+14]=a[6],e[n+15]=a[7],this._vb.setNeedUpload()}s.bitmap!==t&&(this._isSameTexture=!1)}}},i.renderSubmit=function(){if(0===this._numEle)return e._shaderSet=!1,1;var t=this.shaderValue.textureHost;if(t){var i=t.source;if(!t.bitmap||!i)return e._shaderSet=!1,1;this.shaderValue.texture=i}this._vb.bind_upload(this._ib);var r=bt.mainContext;if(G.activeBlendFunction!==this._blendFn&&(r.enable(3042),this._blendFn(r),G.activeBlendFunction=this._blendFn),C.drawCall++,C.trianglesFaces+=this._numEle/3,this._preIsSameTextureShader&&Bt.activeShader&&e._shaderSet?Bt.activeShader.uploadTexture2D(this.shaderValue.texture):this.shaderValue.upload(),e._shaderSet=!0,this._texs.length>1&&!this._isSameTexture)for(var s=t.bitmap,a=0,n=Bt.activeShader,h=0,l=this._texs.length;h<l;h++){var o=this._texs[h];o.bitmap===s&&h+1!==l||(n.uploadTexture2D(o.source),r.drawElements(4,6*(h-a+1),5123,this._startIdx+6*a*mt.BYTES_PIDX),s=o.bitmap,a=h)}else r.drawElements(4,this._numEle,5123,this._startIdx);return 1},e.create=function(t,i,r,s,a){var n=e._cache._length?e._cache[--e._cache._length]:new e;null==r&&((r=n._selfVb||(n._selfVb=Jt.create(-1))).clear(),s=0),n._ib=i,n._vb=r,n._startIdx=s*mt.BYTES_PIDX,n._numEle=0;var h=t._nBlendType;n._blendFn=t._targets?G.targetFns[h]:G.fns[h],n.shaderValue=a,n.shaderValue.setValue(t._shader2D);var l=t._shader2D.filters;return l&&n.shaderValue.setFilters(l),n},e._cache=(e._cache=[],e._cache._length=0,e._cache),e._shaderSet=!0,e}(),Ft=function(t){function e(){e.__super.call(this,laya.webgl.utils.MeshTexture.const_stride,0,0),this.canReuse=!0,this.setAttributes(laya.webgl.utils.MeshTexture._fixattriInfo)}s(e,"laya.webgl.utils.MeshTexture",gt);var i=e.prototype;return i.addData=function(t,i,r,s,a,n){for(var h=t.length/2,l=this._vb.needSize(h*e.const_stride)>>2,o=this._vb.getFloat32Array(),u=0,_=0;_<h;_++){var c=t[u],f=t[u+1],d=c*s.a+f*s.c+s.tx,m=c*s.b+f*s.d+s.ty;o[l++]=d,o[l++]=m,o[l++]=i[u],o[l++]=i[u+1],u+=2}this._vb.setNeedUpload();var p=this.vertNum;if(p>0){(h=r.length)>e.tmpIdx.length&&(e.tmpIdx=new Uint16Array(h));for(var g=0;g<h;g++)e.tmpIdx[g]=r[g]+p;this._ib.appendU16Array(e.tmpIdx,r.length)}else this._ib.append(r);this._ib.setNeedUpload(),this.vertNum+=h,this.indexNum+=r.length},i.releaseMesh=function(){this._vb._byteLength=0,this._ib._byteLength=0,this.vertNum=0,this.indexNum=0,laya.webgl.utils.MeshTexture._POOL.push(this)},i.destroy=function(){this._ib.destroy(),this._vb.destroy()},e.getAMesh=function(){return laya.webgl.utils.MeshTexture._POOL.length?laya.webgl.utils.MeshTexture._POOL.pop():new e},e.const_stride=16,e._POOL=[],r(e,["_fixattriInfo",function(){return this._fixattriInfo=[5126,2,0,5126,2,8]},"tmpIdx",function(){return this.tmpIdx=new Uint16Array(4)}]),e}(),Bt=function(t){function e(){e.__super.call(this),this.lock=!0}return s(e,"laya.webgl.shader.BaseShader",S),e.activeShader=null,e.bindShader=null,e}(),Nt=function(t){function e(t,i,r,s,a,n,h,l,o){this._type=0,this._svWidth=NaN,this._svHeight=NaN,this._preRenderTarget=null,this._alreadyResolved=!1,this._looked=!1,this._surfaceFormat=0,this._surfaceType=0,this._depthStencilFormat=0,this._mipMap=!1,this._repeat=!1,this._minFifter=0,this._magFifter=0,this._destroy=!1,void 0===r&&(r=6408),void 0===s&&(s=5121),void 0===a&&(a=34041),void 0===n&&(n=!1),void 0===h&&(h=!1),void 0===l&&(l=-1),void 0===o&&(o=-1),this._type=1,this._w=t,this._h=i,this._surfaceFormat=r,this._surfaceType=s,this._depthStencilFormat=a,A.isConchWebGL&&34041===this._depthStencilFormat&&(this._depthStencilFormat=33189),this._mipMap=n,this._repeat=h,this._minFifter=l,this._magFifter=o,this._createWebGLRenderTarget(),this.bitmap.lock=!0,e.__super.call(this,this.bitmap,F.INV_UV)}s(e,"laya.webgl.resource.RenderTarget2D",t);var r=e.prototype;return i.imps(r,{"laya.resource.IDispose":!0}),r.getType=function(){return this._type},r.getTexture=function(){return this},r.size=function(t,e){this._w==t&&this._h==e||(this._w=t,this._h=e,this.release(),0!=this._w&&0!=this._h&&this._createWebGLRenderTarget())},r.release=function(){this.destroy()},r.recycle=function(){e.POOL.push(this)},r.start=function(){var t=bt.mainContext;return this._preRenderTarget=vt.curRenderTarget,vt.curRenderTarget=this,t.bindFramebuffer(36160,this.bitmap.frameBuffer),this._alreadyResolved=!1,1==this._type&&(t.viewport(0,0,this._w,this._h),this._svWidth=vt.width,this._svHeight=vt.height,vt.width=this._w,vt.height=this._h,Bt.activeShader=null),this},r.clear=function(t,e,i,r){void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0),void 0===r&&(r=1);var s=bt.mainContext;s.clearColor(t,e,i,r);var a=16384;switch(this._depthStencilFormat){case 33189:a|=256;break;case 36168:a|=1024;break;case 34041:a|=256,a|=1024}s.clear(a)},r.end=function(){var t=bt.mainContext;t.bindFramebuffer(36160,this._preRenderTarget?this._preRenderTarget.bitmap.frameBuffer:null),this._alreadyResolved=!0,vt.curRenderTarget=this._preRenderTarget,1==this._type?(t.viewport(0,0,this._svWidth,this._svHeight),vt.width=this._svWidth,vt.height=this._svHeight,Bt.activeShader=null):t.viewport(0,0,i.stage.width,i.stage.height)},r.getData=function(t,e,i,r){var s=bt.mainContext;s.bindFramebuffer(36160,this.bitmap.frameBuffer);if(!(36053===s.checkFramebufferStatus(36160)))return s.bindFramebuffer(36160,null),null;var a=new Uint8Array(this._w*this._h*4);return s.readPixels(t,e,i,r,this._surfaceFormat,this._surfaceType,a),s.bindFramebuffer(36160,null),a},r.destroy=function(e){void 0===e&&(e=!1),this._destroy||(this._loaded=!1,this.bitmap.offAll(),this.bitmap.disposeResource(),this.bitmap.dispose(),this.offAll(),this.bitmap=null,this._alreadyResolved=!1,this._destroy=!0,t.prototype.destroy.call(this))},r.dispose=function(){},r._createWebGLRenderTarget=function(){this.bitmap=new Xt(this.width,this.height,this._surfaceFormat,this._surfaceType,this._depthStencilFormat,this._mipMap,this._repeat,this._minFifter,this._magFifter),this.bitmap.activeResource(),this._alreadyResolved=!0,this._destroy=!1,this._loaded=!0,this.bitmap.on("recovered",this,function(t){this.event("recovered")})},a(0,r,"surfaceFormat",function(){return this._surfaceFormat}),a(0,r,"magFifter",function(){return this._magFifter}),a(0,r,"surfaceType",function(){return this._surfaceType}),a(0,r,"mipMap",function(){return this._mipMap}),a(0,r,"depthStencilFormat",function(){return this._depthStencilFormat}),a(0,r,"minFifter",function(){return this._minFifter}),a(0,r,"source",function(){return this._alreadyResolved?i.superGet(F,this,"source"):null}),e.create=function(t,i,r,s,a,n,h,l,o){void 0===r&&(r=6408),void 0===s&&(s=5121),void 0===a&&(a=34041),void 0===n&&(n=!1),void 0===h&&(h=!1),void 0===l&&(l=-1),void 0===o&&(o=-1);var u=e.POOL.pop();return u||(u=new e(t,i)),u.bitmap&&u._w==t&&u._h==i&&u._surfaceFormat==r&&u._surfaceType==s&&u._depthStencilFormat==a&&u._mipMap==n&&u._repeat==h&&u._minFifter==l&&u._magFifter==o||(u._w=t,u._h=i,u._surfaceFormat=r,u._surfaceType=s,u._depthStencilFormat=a,A.isConchWebGL&&34041===this._depthStencilFormat&&(this._depthStencilFormat=33189),u._mipMap=n,u._repeat=h,u._minFifter=l,u._magFifter=o,u.release(),u._createWebGLRenderTarget()),u},e.TYPE2D=1,e.TYPE3D=2,e.POOL=[],e}(F),Ot=function(t){function e(){this._glBuffer=null,this._buffer=null,this._bufferType=0,this._bufferUsage=0,this._byteLength=0,e.__super.call(this),e._gl=bt.mainContext}s(e,"laya.webgl.utils.Buffer",S);var i=e.prototype;return i._bind=function(){this.activeResource(),e._bindActive[this._bufferType]!==this._glBuffer&&(34962===this._bufferType&&(e._bindVertexBuffer=this._glBuffer),e._gl.bindBuffer(this._bufferType,e._bindActive[this._bufferType]=this._glBuffer),Bt.activeShader=null)},i.recreateResource=function(){this._glBuffer||(this._glBuffer=e._gl.createBuffer()),this.completeCreate()},i.disposeResource=function(){this._glBuffer&&(bt.mainContext.deleteBuffer(this._glBuffer),this._glBuffer=null),this.memorySize=0},a(0,i,"bufferUsage",function(){return this._bufferUsage}),e._gl=null,e._bindActive={},e._bindVertexBuffer=null,e._enableAtributes=[],e}(),Vt=function(t){function e(t){this.texcoord=null,this.offsetX=300,this.offsetY=0,e.__super.call(this,512,0);var i=8*mt.BYTES_PE;this.position=[2,5126,!1,i,0],this.texcoord=[2,5126,!1,i,2*mt.BYTES_PE],this.color=[4,5126,!1,i,4*mt.BYTES_PE]}return s(e,"laya.webgl.shader.d2.skinAnishader.SkinSV",Et),e}(),Ut=function(t){function e(t){e.__super.call(this,2,0),this.color=[]}s(e,"laya.webgl.shader.d2.value.Color2dSV",Et);return e.prototype.setValue=function(t){t.fillStyle&&(this.color=t.fillStyle._color._color),t.strokeStyle&&(this.color=t.strokeStyle._color._color)},e}(),kt=function(t){function e(t){this.u_colorMatrix=null,this.strength=0,this.colorMat=null,this.colorAlpha=null,this.u_TexRange=[0,1,0,1],this.u_offset=[0,0],this.texcoord=Et._TEXCOORD,e.__super.call(this,256,0)}s(e,"laya.webgl.shader.d2.value.FillTextureSV",Et);var i=e.prototype;return i.setValue=function(t){this.ALPHA=t.ALPHA,t.filters&&this.setFilters(t.filters)},i.clear=function(){this.texture=null,this.shader=null,this.defines.setValue(0)},e}(),Ht=function(t){function e(t){this.u_colorMatrix=null,this.strength=0,this.blurInfo=null,this.colorMat=null,this.colorAlpha=null,this.texcoord=Et._TEXCOORD,void 0===t&&(t=0),e.__super.call(this,1,t)}s(e,"laya.webgl.shader.d2.value.TextureSV",Et);var i=e.prototype;return i.setValue=function(t){this.ALPHA=t.ALPHA,t.filters&&this.setFilters(t.filters)},i.clear=function(){this.texture=null,this.shader=null,this.defines.setValue(0)},e}(),Gt=function(t){function e(t){this.a_color=null,this.u_pos=[0,0],e.__super.call(this,4,0),this.position=[2,5126,!1,5*mt.BYTES_PE,0],this.a_color=[3,5126,!1,5*mt.BYTES_PE,2*mt.BYTES_PE]}return s(e,"laya.webgl.shader.d2.value.PrimitiveSV",Et),e}(),Wt=function(t){function e(){this._atlaser=null,this._flashCacheImage=null,this._flashCacheImageNeedFlush=!1,e.__super.call(this)}s(e,"laya.webgl.atlas.AtlasWebGLCanvas",t);var i=e.prototype;return i.recreateResource=function(){var t=bt.mainContext,e=this._source=t.createTexture(),i=yt.curBindTexTarget,r=yt.curBindTexValue;yt.bindTexture(t,3553,e),t.texImage2D(3553,0,6408,this._w,this._h,0,6408,5121,null),t.texParameteri(3553,10241,9729),t.texParameteri(3553,10240,9729),t.texParameteri(3553,10242,33071),t.texParameteri(3553,10243,33071),i&&r&&yt.bindTexture(t,i,r),this.memorySize=this._w*this._h*4,this.completeCreate()},i.disposeResource=function(){this._source&&(bt.mainContext.deleteTexture(this._source),this._source=null,this.memorySize=0)},i.texSubImage2D=function(t,e,i){if(A.isFlash){this._flashCacheImage||(this._flashCacheImage=v.create(""),this._flashCacheImage._image.createCanvas(this._w,this._h));var r=i.bitmapdata;this._flashCacheImage._image.copyPixels(r,0,0,r.width,r.height,t,e),this._flashCacheImageNeedFlush||(this._flashCacheImageNeedFlush=!0)}else{var s=bt.mainContext,a=yt.curBindTexTarget,n=yt.curBindTexValue;yt.bindTexture(s,3553,this._source),A.isConchWebGL?(t-1>=0&&s.texSubImage2DEx(!0,3553,0,t-1,e,6408,5121,i),t+1<=this._w&&s.texSubImage2DEx(!0,3553,0,t+1,e,6408,5121,i),e-1>=0&&s.texSubImage2DEx(!0,3553,0,t,e-1,6408,5121,i),e+1<=this._h&&s.texSubImage2DEx(!0,3553,0,t,e+1,6408,5121,i),s.texSubImage2DEx(!0,3553,0,t,e,6408,5121,i)):(s.pixelStorei(37441,!0),t-1>=0&&s.texSubImage2D(3553,0,t-1,e,6408,5121,i),t+1<=this._w&&s.texSubImage2D(3553,0,t+1,e,6408,5121,i),e-1>=0&&s.texSubImage2D(3553,0,t,e-1,6408,5121,i),e+1<=this._h&&s.texSubImage2D(3553,0,t,e+1,6408,5121,i),s.texSubImage2D(3553,0,t,e,6408,5121,i),s.pixelStorei(37441,!1)),a&&n&&yt.bindTexture(s,a,n)}},i.texSubImage2DPixel=function(t,e,i,r,s){var a=bt.mainContext,n=yt.curBindTexTarget,h=yt.curBindTexValue;yt.bindTexture(a,3553,this._source);var l=new Uint8Array(s.data);A.isConchWebGL?a.texSubImage2DEx(!0,3553,0,t,e,i,r,6408,5121,l):(a.pixelStorei(37441,!0),a.texSubImage2D(3553,0,t,e,i,r,6408,5121,l),a.pixelStorei(37441,!1)),n&&h&&yt.bindTexture(a,n,h)},a(0,i,"width",t.prototype._$get_width,function(t){this._w=t}),a(0,i,"height",t.prototype._$get_height,function(t){this._h=t}),e}(o),zt=function(t){function e(){this.flipY=!0,this.premulAlpha=!1,this.alwaysChange=!1,e.__super.call(this)}s(e,"laya.webgl.resource.WebGLCanvas",o);var i=e.prototype;return i.getCanvas=function(){return this._canvas},i.clear=function(){this._ctx&&this._ctx.clear()},i.destroy=function(){this._ctx&&this._ctx.destroy(),this._ctx=null},i._setContext=function(t){this._ctx=t},i.getContext=function(t,i){return this._ctx?this._ctx:this._ctx=e._createContext(this)},i.size=function(t,e){this._w==t&&this._h==e||(this._w=t,this._h=e,this._ctx&&this._ctx.size(t,e),this._canvas&&(this._canvas.height=e,this._canvas.width=t))},i.activeResource=function(t){void 0===t&&(t=!1),this._source||this.recreateResource()},i.recreateResource=function(){this.createWebGlTexture(),this.completeCreate()},i.disposeResource=function(){this._source&&!this.iscpuSource&&(bt.mainContext.deleteTexture(this._source),this._source=null,this.memorySize=0)},i.createWebGlTexture=function(){var t=bt.mainContext;this._canvas;var e=this._source=t.createTexture();this.iscpuSource=!1;var i=yt.curBindTexTarget,r=yt.curBindTexValue;yt.bindTexture(t,3553,e),t.pixelStorei(37440,this.flipY?1:0),A.isConchWebGL?t.texImage2DEx(this.premulAlpha,3553,0,6408,6408,5121,this._imgData):(this.premulAlpha&&t.pixelStorei(37441,!0),t.texImage2D(3553,0,6408,6408,5121,this._imgData),this.premulAlpha&&t.pixelStorei(37441,!1)),t.texParameteri(3553,10240,9729),t.texParameteri(3553,10241,9729),t.texParameteri(3553,10242,33071),t.texParameteri(3553,10243,33071),t.pixelStorei(37440,0),this.memorySize=this._w*this._h*4,i&&r&&yt.bindTexture(t,i,r)},i.reloadCanvasData=function(){var t=bt.mainContext;if(!this._source)throw"reloadCanvasData error, gl texture not created!";var e=yt.curBindTexTarget,i=yt.curBindTexValue;yt.bindTexture(t,3553,this._source),A.isConchWebGL?t.texImage2DEx(this.premulAlpha,3553,0,6408,6408,5121,this._imgData):(this.premulAlpha&&t.pixelStorei(37441,!0),t.texImage2D(3553,0,6408,6408,5121,this._imgData),this.premulAlpha&&t.pixelStorei(37441,!1)),t.pixelStorei(37440,0),e&&i&&yt.bindTexture(t,e,i)},i.texSubImage2D=function(t,e,i){var r=bt.mainContext,s=yt.curBindTexTarget,a=yt.curBindTexValue;yt.bindTexture(r,3553,this._source),A.isConchWebGL?r.texSubImage2DEx(!0,3553,0,e,i,6408,5121,t._source):(r.pixelStorei(37441,!0),r.texSubImage2D(3553,0,e,i,6408,5121,t._source),r.pixelStorei(37441,!1)),s&&a&&yt.bindTexture(r,s,a)},i.toBase64=function(t,e,i){var r=null;this._canvas&&(r=this._canvas.toDataURL(t,e)),i.call(this,r)},a(0,i,"context",function(){return this._ctx}),a(0,i,"source",function(){return this.alwaysChange&&this.reloadCanvasData(),this._source}),a(0,i,"asBitmap",null,function(t){this._ctx&&(this._ctx.asBitmap=t)}),e._createContext=null,e}(),Yt=function(t){function e(t,i){this.CborderSize=12,e.__super.call(this),this.char=t,this.isSpace=" "===t,this.xs=i.scaleX,this.ys=i.scaleY,this.font=i.font.toString(),this.fontSize=i.font.size,this.fillColor=i.fillColor,this.borderColor=i.borderColor,this.lineWidth=i.lineWidth,this.underLine=i.underLine;var r,s=A.isConchApp;s?((r=ConchTextCanvas)._source=ConchTextCanvas,r._source.canvas=ConchTextCanvas):r=u.canvas.source,this.canvas=r,this._enableMerageInAtlas=!0,this._ctx=s?r:this.canvas.getContext("2d",void 0);var a=B.measureText(this.char,this.font);this.cw=a.width*this.xs,this.ch=(a.height||this.fontSize)*this.ys,this.onresize(this.cw+2*this.CborderSize,this.ch+2*this.CborderSize),this.texture=new F(this)}s(e,"laya.webgl.resource.WebGLCharImage",o);var r=e.prototype;return i.imps(r,{"laya.webgl.resource.IMergeAtlasBitmap":!0}),r.active=function(){this.texture.active()},r.recreateResource=function(){var t=A.isConchApp;if(this.onresize(this.cw+2*this.CborderSize,this.ch+2*this.CborderSize),this.canvas&&(this.canvas.height=this._h,this.canvas.width=this._w),t){var e=this.fontSize;1==this.xs&&1==this.ys||(e=parseInt(e*(this.xs>this.ys?this.xs:this.ys)+""));var i="normal 100 "+e+"px Arial";this.borderColor&&(i+=" 1 "+this.borderColor),this._ctx.font=i,this._ctx.textBaseline="top",this._ctx.fillStyle=this.fillColor,this._ctx.fillText(this.char,this.CborderSize,this.CborderSize,null,null,null)}else{if(this._ctx.save(),this._ctx.clearRect(0,0,this.cw+2*this.CborderSize,this.ch+2*this.CborderSize),this._ctx.font=this.font,D.RightToLeft&&(this._ctx.textAlign="end"),this._ctx.textBaseline="top",this._ctx.translate(this.CborderSize,this.CborderSize),1==this.xs&&1==this.ys||this._ctx.scale(this.xs,this.ys),this.fillColor&&this.borderColor?(this._ctx.strokeStyle=this.borderColor,this._ctx.lineWidth=this.lineWidth,this._ctx.strokeText(this.char,0,0,null,null,0,null),this._ctx.fillStyle=this.fillColor,this._ctx.fillText(this.char,0,0,null,null,null)):-1===this.lineWidth?(this._ctx.fillStyle=this.fillColor?this.fillColor:"white",this._ctx.fillText(this.char,0,0,null,null,null)):(this._ctx.strokeStyle=this.borderColor?this.borderColor:"white",this._ctx.lineWidth=this.lineWidth,this._ctx.strokeText(this.char,0,0,null,null,0,null)),this.underLine){this._ctx.lineWidth=1,this._ctx.strokeStyle=this.fillColor,this._ctx.beginPath(),this._ctx.moveTo(0,this.fontSize+1);var r=this._ctx.measureText(this.char).width+1;this._ctx.lineTo(r,this.fontSize+1),this._ctx.stroke()}this._ctx.restore()}this.borderSize=this.CborderSize,this.completeCreate()},r.onresize=function(t,e){this._w=t,this._h=e,this._allowMerageInAtlas=!0},r.clearAtlasSource=function(){},a(0,r,"allowMerageInAtlas",function(){return this._allowMerageInAtlas}),a(0,r,"atlasSource",function(){return this.canvas}),a(0,r,"enableMerageInAtlas",function(){return this._enableMerageInAtlas},function(t){this._enableMerageInAtlas=t}),e.createOneChar=function(t,i){return new e(t,i)},e}(),Xt=function(t){function e(t,i,r,s,a,n,h,l,o){void 0===r&&(r=6408),void 0===s&&(s=5121),void 0===a&&(a=34041),void 0===n&&(n=!1),void 0===h&&(h=!1),void 0===l&&(l=-1),void 0===o&&(o=1),e.__super.call(this),this._w=t,this._h=i,this._surfaceFormat=r,this._surfaceType=s,this._depthStencilFormat=a,A.isConchWebGL&&34041===this._depthStencilFormat&&(this._depthStencilFormat=33189),this._mipMap=n,this._repeat=h,this._minFifter=l,this._magFifter=o}s(e,"laya.webgl.resource.WebGLRenderTarget",o);var i=e.prototype;return i.recreateResource=function(){var t=bt.mainContext;this._frameBuffer||(this._frameBuffer=t.createFramebuffer()),this._source||(this._source=t.createTexture());var e=yt.curBindTexTarget,i=yt.curBindTexValue;yt.bindTexture(t,3553,this._source),t.texImage2D(3553,0,6408,this._w,this._h,0,this._surfaceFormat,this._surfaceType,null);var r=this._minFifter,s=this._magFifter,a=this._repeat?10497:33071,n=h.isPOT(this._w,this._h);if(n?(this._mipMap?-1!==r||(r=9987):-1!==r||(r=9729),-1!==s||(s=9729),t.texParameteri(3553,10241,r),t.texParameteri(3553,10240,s),t.texParameteri(3553,10242,a),t.texParameteri(3553,10243,a),this._mipMap&&t.generateMipmap(3553)):(-1!==r||(r=9729),-1!==s||(s=9729),t.texParameteri(3553,10241,r),t.texParameteri(3553,10240,s),t.texParameteri(3553,10242,33071),t.texParameteri(3553,10243,33071)),t.bindFramebuffer(36160,this._frameBuffer),t.framebufferTexture2D(36160,36064,3553,this._source,0),this._depthStencilFormat)switch(this._depthStencilBuffer||(this._depthStencilBuffer=t.createRenderbuffer()),t.bindRenderbuffer(36161,this._depthStencilBuffer),t.renderbufferStorage(36161,this._depthStencilFormat,this._w,this._h),this._depthStencilFormat){case 33189:t.framebufferRenderbuffer(36160,36096,36161,this._depthStencilBuffer);break;case 36168:t.framebufferRenderbuffer(36160,36128,36161,this._depthStencilBuffer);break;case 34041:t.framebufferRenderbuffer(36160,33306,36161,this._depthStencilBuffer)}t.bindFramebuffer(36160,null),e&&i&&yt.bindTexture(t,e,i),t.bindRenderbuffer(36161,null),n&&this._mipMap?this.memorySize=this._w*this._h*4*(1+1/3):this.memorySize=this._w*this._h*4,this.completeCreate()},i.disposeResource=function(){this._frameBuffer&&(bt.mainContext.deleteTexture(this._source),bt.mainContext.deleteFramebuffer(this._frameBuffer),bt.mainContext.deleteRenderbuffer(this._depthStencilBuffer),this._source=null,this._frameBuffer=null,this._depthStencilBuffer=null,this.memorySize=0)},a(0,i,"depthStencilBuffer",function(){return this._depthStencilBuffer}),a(0,i,"frameBuffer",function(){return this._frameBuffer}),e}(),Kt=function(t){function e(t,i,r,s,a,n,h){this.offsetX=0,this.offsetY=0,e.__super.call(this),this.repeat=!0,this.mipmap=!1,this.minFifter=-1,this.magFifter=-1,this.atlasImage=n,this.canvas=t,this._ctx=t.getContext("2d",void 0),this._w=s,this._h=a,this.offsetX=i,this.offsetY=r,this.src=h,this._enableMerageInAtlas=!0,k.enabled&&this._w<k.atlasLimitWidth&&this._h<k.atlasLimitHeight?this._allowMerageInAtlas=!0:this._allowMerageInAtlas=!1}s(e,"laya.webgl.resource.WebGLSubImage",o);var r=e.prototype;return i.imps(r,{"laya.webgl.resource.IMergeAtlasBitmap":!0}),r.size=function(t,e){this._w=t,this._h=e,this._ctx&&this._ctx.size(t,e),this.canvas&&(this.canvas.height=e,this.canvas.width=t)},r.recreateResource=function(){this.size(this._w,this._h),this._ctx.drawImage(this.atlasImage,this.offsetX,this.offsetY,this._w,this._h,0,0,this._w,this._h),this._allowMerageInAtlas&&this._enableMerageInAtlas?this.memorySize=0:this.createWebGlTexture(),this.completeCreate()},r.createWebGlTexture=function(){var t=bt.mainContext;if(!this.canvas)throw"create GLTextur err:no data:"+this.canvas;var e=this._source=t.createTexture(),i=yt.curBindTexTarget,r=yt.curBindTexValue;yt.bindTexture(t,3553,e),A.isConchWebGL?t.texImage2DEx(!0,3553,0,6408,6408,5121,this.canvas):(t.pixelStorei(37441,!0),t.texImage2D(3553,0,6408,6408,5121,this.canvas),t.pixelStorei(37441,!1));var s=this.minFifter,a=this.magFifter,n=this.repeat?10497:33071,l=h.isPOT(this.width,this.height);l?(this.mipmap?-1!==s||(s=9987):-1!==s||(s=9729),-1!==a||(a=9729),t.texParameteri(3553,10240,a),t.texParameteri(3553,10241,s),t.texParameteri(3553,10242,n),t.texParameteri(3553,10243,n),this.mipmap&&t.generateMipmap(3553)):(-1!==s||(s=9729),-1!==a||(a=9729),t.texParameteri(3553,10241,s),t.texParameteri(3553,10240,a),t.texParameteri(3553,10242,33071),t.texParameteri(3553,10243,33071)),i&&r&&yt.bindTexture(t,i,r),this.canvas=null,l&&this.mipmap?this.memorySize=this._w*this._h*4*(1+1/3):this.memorySize=this._w*this._h*4},r.disposeResource=function(){k.enabled&&this._allowMerageInAtlas||!this._source||(bt.mainContext.deleteTexture(this._source),this._source=null,this.memorySize=0)},r.clearAtlasSource=function(){},a(0,r,"allowMerageInAtlas",function(){return this._allowMerageInAtlas}),a(0,r,"atlasSource",function(){return this.canvas}),a(0,r,"enableMerageInAtlas",function(){return this._allowMerageInAtlas},function(t){this._allowMerageInAtlas=t}),e}(),Qt=function(t){function e(t,i,r,s){if(this._curActTexIndex=0,this.tag={},this._program=null,this._params=null,this._paramsMap={},this._offset=0,e.__super.call(this),!t||!i)throw"Shader Error";this._id=++e._count,this._vs=t,this._ps=i,this._nameMap=s||{},null!=r&&(e.sharders[r]=this)}s(e,"laya.webgl.shader.Shader",Bt);var i=e.prototype;return i.recreateResource=function(){this._compile(),this.completeCreate(),this.memorySize=0},i.disposeResource=function(){bt.mainContext.deleteShader(this._vshader),bt.mainContext.deleteShader(this._pshader),bt.mainContext.deleteProgram(this._program),this._vshader=this._pshader=this._program=null,this._params=null,this._paramsMap={},this.memorySize=0,this._curActTexIndex=0},i._compile=function(){if(this._vs&&this._ps&&!this._params){this._reCompile=!0,this._params=[];var t=[this._vs,this._ps],i=bt.mainContext;if(this._program=i.createProgram(),this._vshader=e._createShader(i,t[0],35633),this._pshader=e._createShader(i,t[1],35632),i.attachShader(this._program,this._vshader),i.attachShader(this._program,this._pshader),i.linkProgram(this._program),!A.isConchApp&&!i.getProgramParameter(this._program,35714))throw i.getProgramInfoLog(this._program);var r,s=0,a=0,n=0;for(n=A.isConchApp?i.getProgramParameterEx(this._vs,this._ps,"",35721):i.getProgramParameter(this._program,35721),s=0;s<n;s++){var h=null;r={vartype:"attribute",glfun:null,ivartype:0,attrib:h=A.isConchApp?i.getActiveAttribEx(this._vs,this._ps,"",s):i.getActiveAttrib(this._program,s),location:i.getAttribLocation(this._program,h.name),name:h.name,type:h.type,isArray:!1,isSame:!1,preValue:null,indexOfParams:0},this._params.push(r)}var l=0;for(l=A.isConchApp?i.getProgramParameterEx(this._vs,this._ps,"",35718):i.getProgramParameter(this._program,35718),s=0;s<l;s++){var o=null;o=A.isConchApp?i.getActiveUniformEx(this._vs,this._ps,"",s):i.getActiveUniform(this._program,s),(r={vartype:"uniform",glfun:null,ivartype:1,attrib:h,location:i.getUniformLocation(this._program,o.name),name:o.name,type:o.type,isArray:!1,isSame:!1,preValue:null,indexOfParams:0}).name.indexOf("[0]")>0&&(r.name=r.name.substr(0,r.name.length-3),r.isArray=!0,r.location=i.getUniformLocation(this._program,r.name)),this._params.push(r)}for(s=0,a=this._params.length;s<a;s++)if(r=this._params[s],r.indexOfParams=s,r.index=1,r.value=[r.location,null],r.codename=r.name,r.name=this._nameMap[r.codename]?this._nameMap[r.codename]:r.codename,this._paramsMap[r.name]=r,r._this=this,r.uploadedValue=[],"attribute"!==r.vartype)switch(r.type){case 5124:r.fun=r.isArray?this._uniform1iv:this._uniform1i;break;case 5126:r.fun=r.isArray?this._uniform1fv:this._uniform1f;break;case 35664:r.fun=r.isArray?this._uniform_vec2v:this._uniform_vec2;break;case 35665:r.fun=r.isArray?this._uniform_vec3v:this._uniform_vec3;break;case 35666:r.fun=r.isArray?this._uniform_vec4v:this._uniform_vec4;break;case 35678:r.fun=this._uniform_sampler2D;break;case 35680:r.fun=this._uniform_samplerCube;break;case 35676:r.glfun=i.uniformMatrix4fv,r.fun=this._uniformMatrix4fv;break;case 35670:r.fun=this._uniform1i;break;case 35674:case 35675:default:throw new Error("compile shader err!")}else r.fun=this._attribute}},i.getUniform=function(t){return this._paramsMap[t]},i._attribute=function(t,e){var i=bt.mainContext,r=Ot._enableAtributes,s=t.location;return r[s]||i.enableVertexAttribArray(s),i.vertexAttribPointer(s,e[0],e[1],e[2],e[3],e[4]+this._offset),r[s]=Ot._bindVertexBuffer,1},i._uniform1f=function(t,e){var i=t.uploadedValue;return i[0]!==e?(bt.mainContext.uniform1f(t.location,i[0]=e),1):0},i._uniform1fv=function(t,e){if(e.length<4){var i=t.uploadedValue;return i[0]!==e[0]||i[1]!==e[1]||i[2]!==e[2]||i[3]!==e[3]?(bt.mainContext.uniform1fv(t.location,e),i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],1):0}return bt.mainContext.uniform1fv(t.location,e),1},i._uniform_vec2=function(t,e){var i=t.uploadedValue;return i[0]!==e[0]||i[1]!==e[1]?(bt.mainContext.uniform2f(t.location,i[0]=e[0],i[1]=e[1]),1):0},i._uniform_vec2v=function(t,e){if(e.length<2){var i=t.uploadedValue;return i[0]!==e[0]||i[1]!==e[1]||i[2]!==e[2]||i[3]!==e[3]?(bt.mainContext.uniform2fv(t.location,e),i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],1):0}return bt.mainContext.uniform2fv(t.location,e),1},i._uniform_vec3=function(t,e){var i=t.uploadedValue;return i[0]!==e[0]||i[1]!==e[1]||i[2]!==e[2]?(bt.mainContext.uniform3f(t.location,i[0]=e[0],i[1]=e[1],i[2]=e[2]),1):0},i._uniform_vec3v=function(t,e){return bt.mainContext.uniform3fv(t.location,e),1},i._uniform_vec4=function(t,e){var i=t.uploadedValue;return i[0]!==e[0]||i[1]!==e[1]||i[2]!==e[2]||i[3]!==e[3]?(bt.mainContext.uniform4f(t.location,i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3]),1):0},i._uniform_vec4v=function(t,e){return bt.mainContext.uniform4fv(t.location,e),1},i._uniformMatrix2fv=function(t,e){return bt.mainContext.uniformMatrix2fv(t.location,!1,e),1},i._uniformMatrix3fv=function(t,e){return bt.mainContext.uniformMatrix3fv(t.location,!1,e),1},i._uniformMatrix4fv=function(t,e){return bt.mainContext.uniformMatrix4fv(t.location,!1,e),1},i._uniform1i=function(t,e){var i=t.uploadedValue;return i[0]!==e?(bt.mainContext.uniform1i(t.location,i[0]=e),1):0},i._uniform1iv=function(t,e){return bt.mainContext.uniform1iv(t.location,e),1},i._uniform_ivec2=function(t,e){var i=t.uploadedValue;return i[0]!==e[0]||i[1]!==e[1]?(bt.mainContext.uniform2i(t.location,i[0]=e[0],i[1]=e[1]),1):0},i._uniform_ivec2v=function(t,e){return bt.mainContext.uniform2iv(t.location,e),1},i._uniform_vec3i=function(t,e){var i=t.uploadedValue;return i[0]!==e[0]||i[1]!==e[1]||i[2]!==e[2]?(bt.mainContext.uniform3i(t.location,i[0]=e[0],i[1]=e[1],i[2]=e[2]),1):0},i._uniform_vec3vi=function(t,e){return bt.mainContext.uniform3iv(t.location,e),1},i._uniform_vec4i=function(t,e){var i=t.uploadedValue;return i[0]!==e[0]||i[1]!==e[1]||i[2]!==e[2]||i[3]!==e[3]?(bt.mainContext.uniform4i(t.location,i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3]),1):0},i._uniform_vec4vi=function(t,e){return bt.mainContext.uniform4iv(t.location,e),1},i._uniform_sampler2D=function(t,i){var r=bt.mainContext,s=t.uploadedValue;return null==s[0]?(s[0]=this._curActTexIndex,r.uniform1i(t.location,this._curActTexIndex),r.activeTexture(e._TEXTURES[this._curActTexIndex]),yt.bindTexture(r,3553,i),this._curActTexIndex++,1):(r.activeTexture(e._TEXTURES[s[0]]),yt.bindTexture(r,3553,i),0)},i._uniform_samplerCube=function(t,i){var r=bt.mainContext,s=t.uploadedValue;return null==s[0]?(s[0]=this._curActTexIndex,r.uniform1i(t.location,this._curActTexIndex),r.activeTexture(e._TEXTURES[this._curActTexIndex]),yt.bindTexture(r,34067,i),this._curActTexIndex++,1):(r.activeTexture(e._TEXTURES[s[0]]),yt.bindTexture(r,34067,i),0)},i._noSetValue=function(t){console.log("no....:"+t.name)},i.uploadOne=function(t,e){this.activeResource(),yt.UseProgram(this._program);var i=this._paramsMap[t];i.fun.call(this,i,e)},i.uploadTexture2D=function(t){C.shaderCall++;var e=bt.mainContext;e.activeTexture(33984),yt.bindTexture(e,3553,t)},i.upload=function(t,e){Bt.activeShader=Bt.bindShader=this,this._lastUseFrameCount===C.loopCount||this.activeResource(),yt.UseProgram(this._program),this._reCompile?(e=this._params,this._reCompile=!1):e=e||this._params;bt.mainContext;for(var i,r,s=e.length,a=0,n=0;n<s;n++)null!==(r=t[(i=e[n]).name])&&(a+=i.fun.call(this,i,r));C.shaderCall+=a},i.uploadArray=function(t,e,i){Bt.activeShader=this,Bt.bindShader=this,this.activeResource(),yt.UseProgram(this._program);this._params;for(var r,s,a=0,n=e-2;n>=0;n-=2)(s=this._paramsMap[t[n]])&&null!=(r=t[n+1])&&(i&&i[s.name]&&i[s.name].bind(),a+=s.fun.call(this,s,r));C.shaderCall+=a},i.getParams=function(){return this._params},e.getShader=function(t){return e.sharders[t]},e.create=function(t,i,r,s){return new e(t,i,r,s)},e.withCompile=function(t,i,r,s){if(r&&e.sharders[r])return e.sharders[r];var a=e._preCompileShader[2e-4*t];if(!a)throw new Error("withCompile shader err!"+t);return a.createShader(i,r,s)},e.withCompile2D=function(t,i,r,s,a){if(s&&e.sharders[s])return e.sharders[s];var n=e._preCompileShader[2e-4*t+i];if(!n)throw new Error("withCompile shader err!"+t+" "+i);return n.createShader(r,s,a)},e.addInclude=function(t,e){xt.addInclude(t,e)},e.preCompile=function(t,i,r,s){var a=2e-4*t;e._preCompileShader[a]=new xt(a,i,r,s)},e.preCompile2D=function(t,i,r,s,a){var n=2e-4*t+i;e._preCompileShader[n]=new xt(n,r,s,a)},e._createShader=function(t,e,i){var r=t.createShader(i);return t.shaderSource(r,e),t.compileShader(r),r},e._TEXTURES=[33984,33985,33986,33987,33988,33989,33990,,33991,33992],e._count=0,e._preCompileShader={},e.SHADERNAME2ID=2e-4,e.sharders=(e.sharders=[],e.sharders.length=32,e.sharders),r(e,["nameKey",function(){return this.nameKey=new L}]),e}(),Zt=function(t){function e(){this._maxsize=0,this._upload=!0,this._uploadSize=0,e.__super.call(this),this.lock=!0}s(e,"laya.webgl.utils.Buffer2D",t);var i=e.prototype;return i.needSize=function(t){var e=this._byteLength;if(t){var i=this._byteLength+t;i<=this._buffer.byteLength||this._resizeBuffer(i<<1,!0),this._byteLength=i}return e},i._bufferData=function(){this._maxsize=Math.max(this._maxsize,this._byteLength),C.loopCount%30==0&&(this._buffer.byteLength>this._maxsize+64&&(this.memorySize=this._buffer.byteLength,this._buffer=this._buffer.slice(0,this._maxsize+64),this._checkArrayUse()),this._maxsize=this._byteLength),this._uploadSize<this._buffer.byteLength&&(this._uploadSize=this._buffer.byteLength,Ot._gl.bufferData(this._bufferType,this._uploadSize,this._bufferUsage),this.memorySize=this._uploadSize),Ot._gl.bufferSubData(this._bufferType,0,this._buffer)},i._bufferSubData=function(t,e,i){if(void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0),this._maxsize=Math.max(this._maxsize,this._byteLength),C.loopCount%30==0&&(this._buffer.byteLength>this._maxsize+64&&(this.memorySize=this._buffer.byteLength,this._buffer=this._buffer.slice(0,this._maxsize+64),this._checkArrayUse()),this._maxsize=this._byteLength),this._uploadSize<this._buffer.byteLength&&(this._uploadSize=this._buffer.byteLength,Ot._gl.bufferData(this._bufferType,this._uploadSize,this._bufferUsage),this.memorySize=this._uploadSize),e||i){var r=this._buffer.slice(e,i);Ot._gl.bufferSubData(this._bufferType,t,r)}else Ot._gl.bufferSubData(this._bufferType,t,this._buffer)},i._checkArrayUse=function(){},i._bind_upload=function(){return!!this._upload&&(this._upload=!1,this._bind(),this._bufferData(),!0)},i._bind_subUpload=function(t,e,i){return void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0),!!this._upload&&(this._upload=!1,this._bind(),this._bufferSubData(t,e,i),!0)},i._resizeBuffer=function(t,e){if(t<this._buffer.byteLength)return this;if(this.memorySize=t,e&&this._buffer&&this._buffer.byteLength>0){var i=new ArrayBuffer(t);new Uint8Array(i).set(new Uint8Array(this._buffer),0),this._buffer=i}else this._buffer=new ArrayBuffer(t);return this._checkArrayUse(),this._upload=!0,this},i.append=function(t){this._upload=!0;var e,i=0;i=t.byteLength,t instanceof Uint8Array?(this._resizeBuffer(this._byteLength+i,!0),e=new Uint8Array(this._buffer,this._byteLength)):t instanceof Uint16Array?(this._resizeBuffer(this._byteLength+i,!0),e=new Uint16Array(this._buffer,this._byteLength)):t instanceof Float32Array&&(this._resizeBuffer(this._byteLength+i,!0),e=new Float32Array(this._buffer,this._byteLength)),e.set(t,0),this._byteLength+=i,this._checkArrayUse()},i.appendU16Array=function(t,e){this._resizeBuffer(this._byteLength+2*e,!0);for(var i=new Uint16Array(this._buffer,this._byteLength,e),r=0;r<e;r++)i[r]=t[r];this._byteLength+=2*e,this._checkArrayUse()},i.appendEx=function(t,e){this._upload=!0;var i=0;i=t.byteLength,this._resizeBuffer(this._byteLength+i,!0),new e(this._buffer,this._byteLength).set(t,0),this._byteLength+=i,this._checkArrayUse()},i.appendEx2=function(t,e,i,r){void 0===r&&(r=1),this._upload=!0;var s,a=0;a=i*r,this._resizeBuffer(this._byteLength+a,!0),s=new e(this._buffer,this._byteLength);var n=0;for(n=0;n<i;n++)s[n]=t[n];this._byteLength+=a,this._checkArrayUse()},i.getBuffer=function(){return this._buffer},i.setNeedUpload=function(){this._upload=!0},i.getNeedUpload=function(){return this._upload},i.upload=function(){var t=this._bind_upload();return Ot._gl.bindBuffer(this._bufferType,null),Ot._bindActive[this._bufferType]=null,Bt.activeShader=null,t},i.subUpload=function(t,e,i){void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0);var r=this._bind_subUpload();return Ot._gl.bindBuffer(this._bufferType,null),Ot._bindActive[this._bufferType]=null,Bt.activeShader=null,r},i.disposeResource=function(){t.prototype.disposeResource.call(this),this._upload=!0,this._uploadSize=0},i.clear=function(){this._byteLength=0,this._upload=!0},a(0,i,"bufferLength",function(){return this._buffer.byteLength}),a(0,i,"byteLength",null,function(t){this._byteLength!==t&&(t<=this._buffer.byteLength||this._resizeBuffer(2*t+256,!0),this._byteLength=t)}),e.__int__=function(t){$t.QuadrangleIB=$t.create(35044),pt.fillIBQuadrangle($t.QuadrangleIB,16)},e.FLOAT32=4,e.SHORT=2,e}(Ot),qt=(function(t){function e(t){this.u_blurX=!1,this.u_color=null,this.u_offset=null,this.u_strength=NaN,this.u_texW=0,this.u_texH=0,e.__super.call(this,9)}s(e,"laya.webgl.shader.d2.value.GlowSV",t);var i=e.prototype;i.setValue=function(e){t.prototype.setValue.call(this,e)},i.clear=function(){t.prototype.clear.call(this)}}(Ht),function(t){function e(t){e.__super.call(this,64),this.defines.add(64)}s(e,"laya.webgl.shader.d2.value.TextSV",t);var i=e.prototype;return i.release=function(){e.pool[e._length++]=this,this.clear()},i.clear=function(){t.prototype.clear.call(this)},e.create=function(){return e._length?e.pool[--e._length]:new e(null)},e.pool=[],e._length=0,e}(Ht)),jt=function(t){function e(t,i,r,s){this._params2dQuick1=null,this._params2dQuick2=null,this._shaderValueWidth=NaN,this._shaderValueHeight=NaN,e.__super.call(this,t,i,r,s)}s(e,"laya.webgl.shader.d2.Shader2X",t);var i=e.prototype;return i.upload2dQuick1=function(t){this.upload(t,this._params2dQuick1||this._make2dQuick1())},i._make2dQuick1=function(){if(!this._params2dQuick1){this.activeResource(),this._params2dQuick1=[];for(var t,e=this._params,i=0,r=e.length;i<r;i++)t=e[i],(A.isFlash||"size"!==t.name&&"position"!==t.name&&"texcoord"!==t.name)&&this._params2dQuick1.push(t)}return this._params2dQuick1},i.disposeResource=function(){t.prototype.disposeResource.call(this),this._params2dQuick1=null,this._params2dQuick2=null},i.upload2dQuick2=function(t){this.upload(t,this._params2dQuick2||this._make2dQuick2())},i._make2dQuick2=function(){if(!this._params2dQuick2){this.activeResource(),this._params2dQuick2=[];for(var t,e=this._params,i=0,r=e.length;i<r;i++)t=e[i],(A.isFlash||"size"!==t.name)&&this._params2dQuick2.push(t)}return this._params2dQuick2},e.create=function(t,i,r,s){return new e(t,i,r,s)},e}(Qt),$t=function(t){function e(t){this._uint8Array=null,this._uint16Array=null,void 0===t&&(t=35044),e.__super.call(this),this._bufferUsage=t,this._bufferType=34963,A.isFlash||(this._buffer=new ArrayBuffer(8))}s(e,"laya.webgl.utils.IndexBuffer2D",Zt);var i=e.prototype;return i._checkArrayUse=function(){this._uint8Array&&(this._uint8Array=new Uint8Array(this._buffer)),this._uint16Array&&(this._uint16Array=new Uint16Array(this._buffer))},i.getUint8Array=function(){return this._uint8Array||(this._uint8Array=new Uint8Array(this._buffer))},i.getUint16Array=function(){return this._uint16Array||(this._uint16Array=new Uint16Array(this._buffer))},i.destory=function(){this._uint16Array=null,this._uint8Array=null,this._buffer=null},e.QuadrangleIB=null,e.create=function(t){return void 0===t&&(t=35044),new e(t)},e}(),Jt=function(t){function e(t,i){this._floatArray32=null,this._vertexStride=0,e.__super.call(this),this._vertexStride=t,this._bufferUsage=i,this._bufferType=34962,A.isFlash||(this._buffer=new ArrayBuffer(8)),this.getFloat32Array()}s(e,"laya.webgl.utils.VertexBuffer2D",t);var i=e.prototype;return i.getFloat32Array=function(){return this._floatArray32||(this._floatArray32=new Float32Array(this._buffer))},i.bind=function(t){t&&t._bind(),this._bind()},i.insertData=function(t,e){this.getFloat32Array().set(t,e),this._upload=!0},i.bind_upload=function(t){t._bind_upload()||t._bind(),this._bind_upload()||this._bind()},i._checkArrayUse=function(){this._floatArray32&&(this._floatArray32=new Float32Array(this._buffer))},i.disposeResource=function(){t.prototype.disposeResource.call(this);var e=Ot._enableAtributes;if(!A.isConchWebGL)for(var i=0;i<10;i++)bt.mainContext.disableVertexAttribArray(i),e[i]=null},i.destory=function(){this._byteLength=0,this._upload=!0,this._buffer=null,this._floatArray32=null},a(0,i,"vertexStride",function(){return this._vertexStride}),e.create=function(t,i){return void 0===i&&(i=35048),new e(t,i)},e}(Zt),te=function(t){function e(t,i,r,s){if(this._format=0,this._mipmap=!1,this._allowMerageInAtlas=!1,this._enableMerageInAtlas=!1,this.repeat=!1,this._image=null,this.minFifter=0,this.magFifter=0,void 0===r&&(r=6408),void 0===s&&(s=!0),e.__super.call(this,t,i),this._format=r,this._mipmap=s,this.repeat=!1,this.minFifter=-1,this.magFifter=-1,"string"==typeof t)this._url=t,this._src=t,this._image=new u.window.Image,i&&(i.onload&&(this.onload=i.onload),i.onerror&&(this.onerror=i.onerror),i.onCreate&&i.onCreate(this)),this._image.crossOrigin=t&&0==t.indexOf("data:")?null:"",t&&(this._image.src=t);else if(t instanceof ArrayBuffer){this._src=i,this._url=this._src;var a=new _(t);a.readUTFBytes(4),a.readUTFBytes(2),a.getInt16();a.endian="bigEndian",this._w=a.getInt16(),this._h=a.getInt16();a.getInt16(),a.getInt16();this._image=new Uint8Array(t,a.pos),this._format=bt.compressEtc1.COMPRESSED_RGB_ETC1_WEBGL,k.enabled&&this._w<k.atlasLimitWidth&&this._h<k.atlasLimitHeight?this._allowMerageInAtlas=!0:this._allowMerageInAtlas=!1}else this._src=i,this._url=this._src,this._image=t.source||t,this.onresize();this._$5__enableMerageInAtlas=!0}s(e,"laya.webgl.resource.WebGLImage",v);var r=e.prototype;return i.imps(r,{"laya.webgl.resource.IMergeAtlasBitmap":!0}),r._init_=function(t,e){},r._createWebGlTexture=function(){if(!this._image)throw"create GLTextur err:no data:"+this._image;var t=bt.mainContext,e=this._source=t.createTexture(),i=yt.curBindTexTarget,r=yt.curBindTexValue;if(yt.bindTexture(t,3553,e),A.isConchWebGL)switch(this._format){case 6408:t.texImage2DEx(!0,3553,0,this._format,6408,5121,this._image);break;case bt.compressEtc1.COMPRESSED_RGB_ETC1_WEBGL:t.compressedTexImage2D(3553,0,this._format,this._w,this._h,0,this._image)}else{switch(t.pixelStorei(37441,!0),this._format){case 6408:t.texImage2D(3553,0,this._format,6408,5121,this._image);break;case bt.compressEtc1.COMPRESSED_RGB_ETC1_WEBGL:t.compressedTexImage2D(3553,0,this._format,this._w,this._h,0,this._image)}t.pixelStorei(37441,!1)}var s=this.minFifter,a=this.magFifter,n=this.repeat?10497:33071,l=h.isPOT(this._w,this._h);l?(this.mipmap?-1!==s||(s=9987):-1!==s||(s=9729),-1!==a||(a=9729),t.texParameteri(3553,10241,s),t.texParameteri(3553,10240,a),t.texParameteri(3553,10242,n),t.texParameteri(3553,10243,n),this.mipmap&&t.generateMipmap(3553)):(-1!==s||(s=9729),-1!==a||(a=9729),t.texParameteri(3553,10241,s),t.texParameteri(3553,10240,a),t.texParameteri(3553,10242,33071),t.texParameteri(3553,10243,33071)),i&&r&&yt.bindTexture(t,i,r),this._image.onload=null,this._image=null,l&&this.mipmap?this.memorySize=this._w*this._h*4*(1+1/3):this.memorySize=this._w*this._h*4,this._recreateLock=!1},r.recreateResource=function(){var t=this;if(null!=this._src&&""!==this._src)if(this._needReleaseAgain=!1,this._image){if(this._recreateLock)return;this._allowMerageInAtlas&&this._$5__enableMerageInAtlas?(this.memorySize=0,this._recreateLock=!1):this._createWebGlTexture(),this.completeCreate()}else{this._recreateLock=!0;var e=this;this._image=new u.window.Image,this._image.crossOrigin=0==this._src.indexOf("data:")?null:"",this._image.onload=function(){if(e._needReleaseAgain)return e._needReleaseAgain=!1,e._image.onload=null,void(e._image=null);e._allowMerageInAtlas&&e._enableMerageInAtlas?(t.memorySize=0,t._recreateLock=!1):e._createWebGlTexture(),e.completeCreate()},this._image.src=this._src}},r.disposeResource=function(){this._recreateLock&&(this._needReleaseAgain=!0),this._source&&(bt.mainContext.deleteTexture(this._source),this._source=null,this._image=null,this.memorySize=0)},r.onresize=function(){this._w=this._image.width,this._h=this._image.height,k.enabled&&this._w<k.atlasLimitWidth&&this._h<k.atlasLimitHeight?this._allowMerageInAtlas=!0:this._allowMerageInAtlas=!1},r.clearAtlasSource=function(){this._image=null},a(0,r,"format",function(){return this._format}),a(0,r,"enableMerageInAtlas",function(){return this._$5__enableMerageInAtlas},function(t){this._$5__enableMerageInAtlas=t}),a(0,r,"mipmap",function(){return this._mipmap}),a(0,r,"allowMerageInAtlas",function(){return this._allowMerageInAtlas}),a(0,r,"atlasSource",function(){return this._image}),a(0,r,"onload",null,function(t){var e=this;this._onload=t,this._image&&(this._image.onload=null!=this._onload?function(){e.onresize(),e._onload()}:null)}),a(0,r,"onerror",null,function(t){var e=this;this._onerror=t,this._image&&(this._image.onerror=null!=this._onerror?function(){e._onerror()}:null)}),e}();i.__init([ft,U,At,xt])}(window,document,Laya),"function"==typeof define&&define.amd&&define("laya.core",["require","exports"],function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});for(var i in Laya){var r=Laya[i];r&&r.__isclass&&(e[i]=r)}});
!function(t,e,i){i.un,i.uns;var a=i.static,s=i.class,r=i.getset,n=i.__newvec,h=laya.maths.Bezier,l=laya.utils.Browser,o=laya.utils.Byte,u=(laya.events.Event,laya.events.EventDispatcher),c=laya.display.Graphics,d=laya.resource.HTMLCanvas,_=laya.utils.Handler,p=laya.net.Loader,f=laya.maths.MathUtil,m=laya.maths.Matrix,y=(laya.display.Node,laya.maths.Point,laya.maths.Rectangle),x=laya.renders.Render,g=(laya.renders.RenderContext,laya.resource.Resource),v=laya.utils.RunDriver,M=laya.display.Sprite,D=laya.utils.Stat,I=laya.resource.Texture,N=laya.net.URL,b=laya.utils.Utils,T=function(){function t(){this.nodes=null,this.name=null,this.playTime=NaN,this.bone3DMap=null,this.totalKeyframeDatasLength=0}return s(t,"laya.ani.AnimationContent"),t}(),A=function(){function t(){this.name=null,this.parentIndex=0,this.parent=null,this.keyframeWidth=0,this.lerpType=0,this.interpolationMethod=null,this.childs=null,this.keyFrame=null,this.playTime=NaN,this.extenData=null,this.dataOffset=0}return s(t,"laya.ani.AnimationNodeContent"),t}(),C=function(){function t(){}return s(t,"laya.ani.AnimationParser01"),t.parse=function(t,e){var i=e.__getBuffer(),a=0,s=0,r=0,n=0,h=0,l=0,u=0,c=e.readUTFString();t._aniClassName=c;var d,_=e.readUTFString().split("\n"),p=e.getUint8(),f=e.getUint32(),m=e.getUint32();f>0&&(d=i.slice(f,m));var y=new o(d);for(m>0&&(t._publicExtData=i.slice(m,i.byteLength)),t._useParent=!!e.getUint8(),t._anis.length=p,a=0;a<p;a++){var x=t._anis[a]=new T;x.nodes=new Array;var g=x.name=_[e.getUint16()];t._aniMap[g]=a,x.bone3DMap={},x.playTime=e.getFloat32();var v=x.nodes.length=e.getUint8();for(x.totalKeyframeDatasLength=0,s=0;s<v;s++){var M=x.nodes[s]=new A;M.childs=[];var D=e.getInt16();D>=0&&(M.name=_[D],x.bone3DMap[M.name]=s),M.keyFrame=new Array,M.parentIndex=e.getInt16(),-1==M.parentIndex?M.parent=null:M.parent=x.nodes[M.parentIndex],M.lerpType=e.getUint8();var I=e.getUint32();y.pos=I;var N=M.keyframeWidth=y.getUint16();if(x.totalKeyframeDatasLength+=N,0===M.lerpType||1===M.lerpType)for(M.interpolationMethod=[],M.interpolationMethod.length=N,r=0;r<N;r++)M.interpolationMethod[r]=it.interpolation[y.getUint8()];null!=M.parent&&M.parent.childs.push(M);var b=e.getUint16();b>0&&(M.extenData=i.slice(e.pos,e.pos+b),e.pos+=b);var C=e.getUint16();M.keyFrame.length=C;var w,S=0;for(r=0,n=C;r<n;r++){if(w=M.keyFrame[r]=new j,w.duration=e.getFloat32(),w.startTime=S,2===M.lerpType){w.interpolationData=[];var F=e.getUint8(),k=0;switch(k=e.getFloat32()){case 254:for(w.interpolationData.length=N,u=0;u<N;u++)w.interpolationData[u]=0;break;case 255:for(w.interpolationData.length=N,u=0;u<N;u++)w.interpolationData[u]=5;break;default:for(w.interpolationData.push(k),l=1;l<F;l++)w.interpolationData.push(e.getFloat32())}}for(w.data=new Float32Array(N),h=0;h<N;h++)w.data[h]=e.getFloat32(),w.data[h]>-1e-8&&w.data[h]<1e-8&&(w.data[h]=0);S+=w.duration}w.startTime=x.playTime,M.playTime=x.playTime,t._calculateKeyFrame(M,C,N)}}},t}(),w=function(){function t(){}return s(t,"laya.ani.AnimationParser02"),t.READ_DATA=function(){t._DATA.offset=t._reader.getUint32(),t._DATA.size=t._reader.getUint32()},t.READ_BLOCK=function(){for(var e=t._BLOCK.count=t._reader.getUint16(),i=t._BLOCK.blockStarts=[],a=t._BLOCK.blockLengths=[],s=0;s<e;s++)i.push(t._reader.getUint32()),a.push(t._reader.getUint32())},t.READ_STRINGS=function(){var e=t._reader.getUint32(),i=t._reader.getUint16(),a=t._reader.pos;t._reader.pos=e+t._DATA.offset;for(var s=0;s<i;s++)t._strings[s]=t._reader.readUTFString();t._reader.pos=a},t.parse=function(e,i){t._templet=e,t._reader=i;i.__getBuffer();t.READ_DATA(),t.READ_BLOCK(),t.READ_STRINGS();for(var a=0,s=t._BLOCK.count;a<s;a++){var r=i.getUint16(),n=t._strings[r],h=t["READ_"+n];if(null==h)throw new Error("model file err,no this function:"+r+" "+n);h.call()}},t.READ_ANIMATIONS=function(){var e=t._reader,i=e.__getBuffer(),a=0,s=0,r=0,n=0,h=e.getUint16(),l=[];for(l.length=h,a=0;a<h;a++)l[a]=it.interpolation[e.getByte()];var o=e.getUint8();for(t._templet._anis.length=o,a=0;a<o;a++){var u=t._templet._anis[a]={};u.nodes=new Array;var c=u.name=t._strings[e.getUint16()];t._templet._aniMap[c]=a,u.bone3DMap={},u.playTime=e.getFloat32();var d=u.nodes.length=e.getInt16();for(u.totalKeyframeDatasLength=0,s=0;s<d;s++){var _=u.nodes[s]={};_.keyframeWidth=h,_.childs=[];var p=e.getUint16();p>=0&&(_.name=t._strings[p],u.bone3DMap[_.name]=s),_.keyFrame=new Array,_.parentIndex=e.getInt16(),-1==_.parentIndex?_.parent=null:_.parent=u.nodes[_.parentIndex],u.totalKeyframeDatasLength+=h,_.interpolationMethod=l,null!=_.parent&&_.parent.childs.push(_);var f=e.getUint16();_.keyFrame.length=f;var m=null,y=null;for(r=0,n=f;r<n;r++){(m=_.keyFrame[r]={}).startTime=e.getFloat32(),y&&(y.duration=m.startTime-y.startTime);var x=t._DATA.offset,g=e.getUint32(),v=4*h,M=i.slice(x+g,x+g+v);m.data=new Float32Array(M),y=m}m.duration=0,_.playTime=u.playTime,t._templet._calculateKeyFrame(_,f,h)}}},t._templet=null,t._reader=null,t._strings=[],a(t,["_BLOCK",function(){return this._BLOCK={count:0}},"_DATA",function(){return this._DATA={offset:0,size:0}}]),t}(),S=(function(){function t(){}s(t,"laya.ani.AnimationState"),t.stopped=0,t.paused=1,t.playing=2}(),function(){function t(){this.name=null,this.root=null,this.parentBone=null,this.length=10,this.transform=null,this.inheritScale=!0,this.inheritRotation=!0,this.rotation=NaN,this.resultRotation=NaN,this.d=-1,this._tempMatrix=null,this._sprite=null,this.resultTransform=new Q,this.resultMatrix=new m,this._children=[]}s(t,"laya.ani.bone.Bone");var e=t.prototype;return e.setTempMatrix=function(t){this._tempMatrix=t;var e=0,i=0;for(e=0,i=this._children.length;e<i;e++)this._children[e].setTempMatrix(this._tempMatrix)},e.update=function(t){this.rotation=this.transform.skX;var e;if(t)e=this.resultTransform.getMatrix(),m.mul(e,t,this.resultMatrix),this.resultRotation=this.rotation;else if(this.resultRotation=this.rotation+this.parentBone.resultRotation,this.parentBone)if(this.inheritRotation&&this.inheritScale)e=this.resultTransform.getMatrix(),m.mul(e,this.parentBone.resultMatrix,this.resultMatrix);else{var i=this.parentBone,a=NaN,s=NaN,r=NaN,n=this.parentBone.resultMatrix;e=this.resultTransform.getMatrix();var h=n.a*e.tx+n.c*e.ty+n.tx,l=n.b*e.tx+n.d*e.ty+n.ty,o=new m;this.inheritRotation?(a=Math.atan2(i.resultMatrix.b,i.resultMatrix.a),s=Math.cos(a),r=Math.sin(a),o.setTo(s,r,-r,s,0,0),m.mul(this._tempMatrix,o,m.TEMP),m.TEMP.copyTo(o),e=this.resultTransform.getMatrix(),m.mul(e,o,this.resultMatrix),this.resultTransform.scX*this.resultTransform.scY<0&&this.resultMatrix.rotate(.5*Math.PI),this.resultMatrix.tx=h,this.resultMatrix.ty=l):(this.inheritScale,e=this.resultTransform.getMatrix(),m.TEMP.identity(),m.TEMP.d=this.d,m.mul(e,m.TEMP,this.resultMatrix),this.resultMatrix.tx=h,this.resultMatrix.ty=l)}else(e=this.resultTransform.getMatrix()).copyTo(this.resultMatrix);var u=0,c=0;for(u=0,c=this._children.length;u<c;u++)this._children[u].update()},e.updateChild=function(){var t=0,e=0;for(t=0,e=this._children.length;t<e;t++)this._children[t].update()},e.setRotation=function(t){this._sprite&&(this._sprite.rotation=180*t/Math.PI)},e.updateDraw=function(e,a){t.ShowBones&&!t.ShowBones[this.name]||(this._sprite?(this._sprite.x=e+this.resultMatrix.tx,this._sprite.y=a+this.resultMatrix.ty):(this._sprite=new M,this._sprite.graphics.drawCircle(0,0,5,"#ff0000"),this._sprite.graphics.drawLine(0,0,this.length,0,"#00ff00"),this._sprite.graphics.fillText(this.name,0,0,"20px Arial","#00ff00","center"),i.stage.addChild(this._sprite),this._sprite.x=e+this.resultMatrix.tx,this._sprite.y=a+this.resultMatrix.ty));var s=0,r=0;for(s=0,r=this._children.length;s<r;s++)this._children[s].updateDraw(e,a)},e.addChild=function(t){this._children.push(t),t.parentBone=this},e.findBone=function(t){if(this.name==t)return this;var e,i,a=0,s=0;for(a=0,s=this._children.length;a<s;a++)if(e=this._children[a],i=e.findBone(t))return i;return null},e.localToWorld=function(t){var e=t[0],i=t[1];t[0]=e*this.resultMatrix.a+i*this.resultMatrix.c+this.resultMatrix.tx,t[1]=e*this.resultMatrix.b+i*this.resultMatrix.d+this.resultMatrix.ty},t.ShowBones={},t}()),F=function(){function t(){this.name=null,this.parent=null,this.attachmentName=null,this.srcDisplayIndex=-1,this.type="src",this.templet=null,this.currSlotData=null,this.currTexture=null,this.currDisplayData=null,this.displayIndex=-1,this._diyTexture=null,this._parentMatrix=null,this._resultMatrix=null,this._replaceDic={},this._curDiyUV=null,this._curDiyVS=null,this._skinSprite=null,this.deformData=null,this._mVerticleArr=null}s(t,"laya.ani.bone.BoneSlot");var e=t.prototype;return e.showSlotData=function(t,e){void 0===e&&(e=!0),this.currSlotData=t,e&&(this.displayIndex=this.srcDisplayIndex),this.currDisplayData=null,this.currTexture=null},e.showDisplayByName=function(t){this.currSlotData&&this.showDisplayByIndex(this.currSlotData.getDisplayByName(t))},e.replaceDisplayByName=function(t,e){if(this.currSlotData){var i=0;i=this.currSlotData.getDisplayByName(t);var a=0;a=this.currSlotData.getDisplayByName(e),this.replaceDisplayByIndex(i,a)}},e.replaceDisplayByIndex=function(t,e){this.currSlotData&&(this._replaceDic[t]=e,this.displayIndex==t&&this.showDisplayByIndex(t))},e.showDisplayByIndex=function(t){if(null!=this._replaceDic[t]&&(t=this._replaceDic[t]),this.currSlotData&&t>-1&&t<this.currSlotData.displayArr.length){if(this.displayIndex=t,this.currDisplayData=this.currSlotData.displayArr[t],this.currDisplayData){var e=this.currDisplayData.name;this.currTexture=this.templet.getTexture(e),this.currTexture&&!x.isConchApp&&0==this.currDisplayData.type&&this.currDisplayData.uvs&&(this.currTexture=this.currDisplayData.createTexture(this.currTexture))}}else this.displayIndex=-1,this.currDisplayData=null,this.currTexture=null},e.replaceSkin=function(t){this._diyTexture=t,this._curDiyUV&&(this._curDiyUV.length=0),this.currDisplayData&&this._diyTexture==this.currDisplayData.texture&&(this._diyTexture=null)},e.setParentMatrix=function(t){this._parentMatrix=t},e.draw=function(e,i,a,s){if(void 0===a&&(a=!1),void 0===s&&(s=1),(null!=this._diyTexture||null!=this.currTexture)&&null!=this.currDisplayData||this.currDisplayData&&3==this.currDisplayData.type){var r=this.currTexture;this._diyTexture&&(r=this._diyTexture);var n;switch(this.currDisplayData.type){case 0:if(e){var h=this.getDisplayMatrix();if(this._parentMatrix){var l=!1;if(h){m.mul(h,this._parentMatrix,m.TEMP);var o;if(a?(null==this._resultMatrix&&(this._resultMatrix=new m),o=this._resultMatrix):o=new m,!x.isWebGL&&this.currDisplayData.uvs||x.isWebGL&&this._diyTexture&&this.currDisplayData.uvs){var u=t._tempMatrix;u.identity(),this.currDisplayData.uvs[1]>this.currDisplayData.uvs[5]&&(u.d=-1),this.currDisplayData.uvs[0]>this.currDisplayData.uvs[4]&&this.currDisplayData.uvs[1]>this.currDisplayData.uvs[5]&&(l=!0,u.rotate(-Math.PI/2)),m.mul(u,m.TEMP,o)}else m.TEMP.copyTo(o);l?e.drawTexture(r,-this.currDisplayData.height/2,-this.currDisplayData.width/2,this.currDisplayData.height,this.currDisplayData.width,o):e.drawTexture(r,-this.currDisplayData.width/2,-this.currDisplayData.height/2,this.currDisplayData.width,this.currDisplayData.height,o)}}}break;case 1:if(a?(null==this._skinSprite&&(this._skinSprite=t.createSkinMesh()),n=this._skinSprite):n=t.createSkinMesh(),null==n)return;var c;if(null==this.currDisplayData.bones){var d=this.currDisplayData.weights;this.deformData&&(d=this.deformData);var _;this._diyTexture?(this._curDiyUV||(this._curDiyUV=[]),0==this._curDiyUV.length&&(this._curDiyUV=Z.getRelativeUV(this.currTexture.uv,this.currDisplayData.uvs,this._curDiyUV),this._curDiyUV=Z.getAbsoluteUV(this._diyTexture.uv,this._curDiyUV,this._curDiyUV)),_=this._curDiyUV):_=this.currDisplayData.uvs,this._mVerticleArr=d;this.currDisplayData.triangles.length;c=this.currDisplayData.triangles,n.init2(r,null,c,this._mVerticleArr,_);var p=this.getDisplayMatrix();if(this._parentMatrix&&p){m.mul(p,this._parentMatrix,m.TEMP);var f;a?(null==this._resultMatrix&&(this._resultMatrix=new m),f=this._resultMatrix):f=new m,m.TEMP.copyTo(f),n.transform=f}}else this.skinMesh(i,n,s);e.drawSkin(n);break;case 2:if(a?(null==this._skinSprite&&(this._skinSprite=t.createSkinMesh()),n=this._skinSprite):n=t.createSkinMesh(),null==n)return;this.skinMesh(i,n,s),e.drawSkin(n)}}},e.skinMesh=function(t,e,i){var a,s=this.currTexture,r=this.currDisplayData.bones;this._diyTexture?(s=this._diyTexture,this._curDiyUV||(this._curDiyUV=[]),0==this._curDiyUV.length&&(this._curDiyUV=Z.getRelativeUV(this.currTexture.uv,this.currDisplayData.uvs,this._curDiyUV),this._curDiyUV=Z.getAbsoluteUV(this._diyTexture.uv,this._curDiyUV,this._curDiyUV)),a=this._curDiyUV):a=this.currDisplayData.uvs;var n,h,l=this.currDisplayData.weights,o=this.currDisplayData.triangles,u=0,c=0,d=0,_=NaN,p=NaN,f=0,m=0,y=[],x=0,g=0;if(this.deformData&&this.deformData.length>0){var v=0;for(x=0,g=r.length;x<g;){for(d=r[x++]+x,u=0,c=0;x<d;x++)h=t[r[x]],_=l[f]+this.deformData[v++],p=l[f+1]+this.deformData[v++],m=l[f+2],u+=(_*h.a+p*h.c+h.tx)*m,c+=(_*h.b+p*h.d+h.ty)*m,f+=3;y.push(u,c)}}else for(x=0,g=r.length;x<g;){for(d=r[x++]+x,u=0,c=0;x<d;x++)h=t[r[x]],_=l[f],p=l[f+1],m=l[f+2],u+=(_*h.a+p*h.c+h.tx)*m,c+=(_*h.b+p*h.d+h.ty)*m,f+=3;y.push(u,c)}this._mVerticleArr=y,n=o,e.init2(s,null,n,this._mVerticleArr,a)},e.drawBonePoint=function(t){t&&this._parentMatrix&&t.drawCircle(this._parentMatrix.tx,this._parentMatrix.ty,5,"#ff0000")},e.getDisplayMatrix=function(){return this.currDisplayData?this.currDisplayData.transform.getMatrix():null},e.getMatrix=function(){return this._resultMatrix},e.copy=function(){var e=new t;return e.type="copy",e.name=this.name,e.attachmentName=this.attachmentName,e.srcDisplayIndex=this.srcDisplayIndex,e.parent=this.parent,e.displayIndex=this.displayIndex,e.templet=this.templet,e.currSlotData=this.currSlotData,e.currTexture=this.currTexture,e.currDisplayData=this.currDisplayData,e},t.createSkinMesh=function(){return x.isWebGL||x.isConchApp?v.skinAniSprite():x.isWebGL?null:st.useSimpleMeshInCanvas?new at:new et},a(t,["_tempMatrix",function(){return this._tempMatrix=new m}]),t}(),k=function(){function t(){this.mesh=null,this.transform=null,this.context=null,this.mode=0}s(t,"laya.ani.bone.canvasmesh.CanvasMeshRender");var e=t.prototype;return e.renderToContext=function(t){this.context=t.ctx||t,this.mesh&&(0==this.mode?this._renderWithIndexes(this.mesh):this._renderNoIndexes(this.mesh))},e._renderNoIndexes=function(t){var e=0,i=t.vertices.length/2,a=0;for(e=0;e<i-2;e++)a=2*e,this._renderDrawTriangle(t,a,a+2,a+4)},e._renderWithIndexes=function(t){var e=t.indexes,i=0,a=e.length;for(i=0;i<a;i+=3){var s=2*e[i],r=2*e[i+1],n=2*e[i+2];this._renderDrawTriangle(t,s,r,n)}},e._renderDrawTriangle=function(t,e,i,a){var s=this.context,r=t.uvs,n=t.vertices,h=t.texture,l=h.bitmap,o=l.source,u=h.width,c=h.height,d=l.width,_=l.height,p=NaN,f=NaN,m=NaN,y=NaN,x=NaN,g=NaN;if(t.useUvTransform){var v=t.uvTransform;p=(r[e]*v.a+r[e+1]*v.c+v.tx)*d,f=(r[i]*v.a+r[i+1]*v.c+v.tx)*d,m=(r[a]*v.a+r[a+1]*v.c+v.tx)*d,y=(r[e]*v.b+r[e+1]*v.d+v.ty)*_,x=(r[i]*v.b+r[i+1]*v.d+v.ty)*_,g=(r[a]*v.b+r[a+1]*v.d+v.ty)*_}else p=r[e]*d,f=r[i]*d,m=r[a]*d,y=r[e+1]*_,x=r[i+1]*_,g=r[a+1]*_;var M=n[e],D=n[i],I=n[a],N=n[e+1],b=n[i+1],T=n[a+1];if(t.canvasPadding>0){var A=t.canvasPadding,C=t.canvasPadding,w=(M+D+I)/3,S=(N+b+T)/3,F=M-w,k=N-S,P=Math.sqrt(F*F+k*k);M=w+F/P*(P+A),N=S+k/P*(P+C),k=b-S,D=w+(F=D-w)/(P=Math.sqrt(F*F+k*k))*(P+A),b=S+k/P*(P+C),k=T-S,I=w+(F=I-w)/(P=Math.sqrt(F*F+k*k))*(P+A),T=S+k/P*(P+C)}if(s.save(),this.transform){var B=this.transform;s.transform(B.a,B.b,B.c,B.d,B.tx,B.ty)}s.beginPath(),s.moveTo(M,N),s.lineTo(D,b),s.lineTo(I,T),s.closePath(),s.clip();var U=1/(p*x+y*m+f*g-x*m-y*f-p*g),L=M*x+y*I+D*g-x*I-y*D-M*g,R=p*D+M*m+f*I-D*m-M*f-p*I,O=p*x*I+y*D*m+M*f*g-M*x*m-y*f*I-p*D*g,E=N*x+y*T+b*g-x*T-y*b-N*g,K=p*b+N*m+f*T-b*m-N*f-p*T,Y=p*x*T+y*b*m+N*f*g-N*x*m-y*f*T-p*b*g;s.transform(L*U,E*U,R*U,K*U,O*U,Y*U),s.drawImage(o,h.uv[0]*d,h.uv[1]*_,u,c,h.uv[0]*d,h.uv[1]*_,u,c),s.restore()},t}(),P=function(){function t(){this.texture=null,this.uvs=[0,0,1,0,1,1,0,1],this.vertices=[0,0,100,0,100,100,0,100],this.indexes=[0,1,3,3,1,2],this.uvTransform=null,this.useUvTransform=!1,this.canvasPadding=1}s(t,"laya.ani.bone.canvasmesh.MeshData");return t.prototype.getBounds=function(){return y._getWrapRec(this.vertices)},t}(),B=function(){function t(){this.skinName=null,this.deformSlotDataList=[]}return s(t,"laya.ani.bone.DeformAniData"),t}(),U=function(){function t(){this.deformSlotDisplayList=[]}return s(t,"laya.ani.bone.DeformSlotData"),t}(),L=function(){function t(){this.boneSlot=null,this.slotIndex=-1,this.attachment=null,this.deformData=null,this.frameIndex=0,this.timeList=[],this.vectices=[],this.tweenKeyList=[]}s(t,"laya.ani.bone.DeformSlotDisplayData");var e=t.prototype;return e.binarySearch1=function(t,e){var i=0,a=t.length-2;if(0==a)return 1;for(var s=a>>>1;;){if(t[Math.floor(s+1)]<=e?i=s+1:a=s,i==a)return i+1;s=i+a>>>1}return 0},e.apply=function(t,e,i){if(void 0===i&&(i=1),t+=.05,!(this.timeList.length<=0)){var a=0;if(!(t<this.timeList[0])){var s=this.vectices[0].length,r=[],n=this.binarySearch1(this.timeList,t);if(this.frameIndex=n,t>=this.timeList[this.timeList.length-1]){var h=this.vectices[this.vectices.length-1];if(i<1)for(a=0;a<s;a++)r[a]+=(h[a]-r[a])*i;else for(a=0;a<s;a++)r[a]=h[a];this.deformData=r}else{this.tweenKeyList[this.frameIndex];var l=this.vectices[this.frameIndex-1],o=this.vectices[this.frameIndex],u=this.timeList[this.frameIndex-1],c=this.timeList[this.frameIndex];i=this.tweenKeyList[n-1]?(t-u)/(c-u):0;var d=NaN;for(a=0;a<s;a++)d=l[a],r[a]=d+(o[a]-d)*i;this.deformData=r}}}},t}(),R=function(){function t(){this.time=NaN,this.drawOrder=[]}return s(t,"laya.ani.bone.DrawOrderData"),t}(),O=function(){function t(){this.name=null,this.intValue=0,this.floatValue=NaN,this.stringValue=null,this.time=NaN}return s(t,"laya.ani.bone.EventData"),t}(),E=function(){function t(t,e){this._targetBone=null,this._bones=null,this._data=null,this.name=null,this.mix=NaN,this.bendDirection=NaN,this.isSpine=!0,this._sp=null,this.isDebug=!1,this._data=t,this._targetBone=e[t.targetBoneIndex],this.isSpine=t.isSpine,null==this._bones&&(this._bones=[]),this._bones.length=0;for(var i=0,a=t.boneIndexs.length;i<a;i++)this._bones.push(e[t.boneIndexs[i]]);this.name=t.name,this.mix=t.mix,this.bendDirection=t.bendDirection}s(t,"laya.ani.bone.IkConstraint");var e=t.prototype;return e.apply=function(){switch(this._bones.length){case 1:this._applyIk1(this._bones[0],this._targetBone.resultMatrix.tx,this._targetBone.resultMatrix.ty,this.mix);break;case 2:this.isSpine?this._applyIk2(this._bones[0],this._bones[1],this._targetBone.resultMatrix.tx,this._targetBone.resultMatrix.ty,this.bendDirection,this.mix):this._applyIk3(this._bones[0],this._bones[1],this._targetBone.resultMatrix.tx,this._targetBone.resultMatrix.ty,this.bendDirection,this.mix)}},e._applyIk1=function(e,i,a,s){var r=e.parentBone,n=1/(r.resultMatrix.a*r.resultMatrix.d-r.resultMatrix.b*r.resultMatrix.c),h=i-r.resultMatrix.tx,l=a-r.resultMatrix.ty,o=(h*r.resultMatrix.d-l*r.resultMatrix.c)*n-e.transform.x,u=(l*r.resultMatrix.a-h*r.resultMatrix.b)*n-e.transform.y,c=Math.atan2(u,o)*t.radDeg-0-e.transform.skX;e.transform.scX<0&&(c+=180),c>180?c-=360:c<-180&&(c+=360),e.transform.skX=e.transform.skY=e.transform.skX+c*s,e.update()},e.updatePos=function(t,e){this._sp&&this._sp.pos(t,e)},e._applyIk2=function(e,a,s,r,n,h){if(0!=h){var l=e.resultTransform.x,o=e.resultTransform.y,u=e.transform.scX,c=e.transform.scY,d=a.transform.scX,_=0,p=0,f=0;u<0?(u=-u,_=180,f=-1):(_=0,f=1),c<0&&(c=-c,f=-f),d<0?(d=-d,p=180):p=0;var m=a.resultTransform.x,y=NaN,x=NaN,g=NaN,v=e.resultMatrix.a,D=e.resultMatrix.c,I=e.resultMatrix.b,N=e.resultMatrix.d,b=Math.abs(u-c)<=1e-4;b?(x=v*m+D*(y=a.resultTransform.y)+e.resultMatrix.tx,g=I*m+N*y+e.resultMatrix.ty):(y=0,x=v*m+e.resultMatrix.tx,g=I*m+e.resultMatrix.ty),this.isDebug&&(this._sp||(this._sp=new M,i.stage.addChild(this._sp)),this._sp.graphics.clear(),this._sp.graphics.drawCircle(s,r,15,"#ffff00"),this._sp.graphics.drawCircle(x,g,15,"#ff00ff")),e.setRotation(Math.atan2(g-e.resultMatrix.ty,x-e.resultMatrix.tx));var T=e.parentBone;v=T.resultMatrix.a,D=T.resultMatrix.c,I=T.resultMatrix.b;var A=1/(v*(N=T.resultMatrix.d)-D*I),C=s-T.resultMatrix.tx,w=r-T.resultMatrix.ty,S=(C*N-w*D)*A-l,F=(w*v-C*I)*A-o,k=((C=x-T.resultMatrix.tx)*N-(w=g-T.resultMatrix.ty)*D)*A-l,P=(w*v-C*I)*A-o,B=Math.sqrt(k*k+P*P),U=a.length*d,L=NaN,R=NaN;if(b){var O=(S*S+F*F-B*B-(U*=u)*U)/(2*B*U);O<-1?O=-1:O>1&&(O=1),R=Math.acos(O)*n,v=B+U*O,D=U*Math.sin(R),L=Math.atan2(F*v-S*D,S*v+F*D)}else{var E=(v=u*U)*v,K=(D=c*U)*D,Y=S*S+F*F,W=Math.atan2(F,S),V=-2*K*B,X=K-E;if((N=V*V-4*X*(I=K*B*B+E*Y-E*K))>0){var z=Math.sqrt(N);V<0&&(z=-z);var q=(z=-(V+z)/2)/X,G=I/z,H=Math.abs(q)<Math.abs(G)?q:G;H*H<=Y&&(w=Math.sqrt(Y-H*H)*n,L=W-Math.atan2(w,H),R=Math.atan2(w/c,(H-B)/u))}var Q=0,Z=Number.MAX_VALUE,j=0,$=0,J=0,tt=0,et=0,it=0;(N=(C=B+v)*C)>tt&&(J=0,tt=N,et=C),(N=(C=B-v)*C)<Z&&(Q=Math.PI,Z=N,j=C);var at=Math.acos(-v*B/(E-K));(N=(C=v*Math.cos(at)+B)*C+(w=D*Math.sin(at))*w)<Z&&(Q=at,Z=N,j=C,$=w),N>tt&&(J=at,tt=N,et=C,it=w),Y<=(Z+tt)/2?(L=W-Math.atan2($*n,j),R=Q*n):(L=W-Math.atan2(it*n,et),R=J*n)}var st=Math.atan2(y,m)*f,rt=e.resultTransform.skX;(L=(L-st)*t.radDeg+_-rt)>180?L-=360:L<-180&&(L+=360),e.resultTransform.x=l,e.resultTransform.y=o,e.resultTransform.skX=e.resultTransform.skY=rt+L*h,rt=a.resultTransform.skX,(R=((R+st)*t.radDeg-0)*f+p-(rt%=360))>180?R-=360:R<-180&&(R+=360),a.resultTransform.x=m,a.resultTransform.y=y,a.resultTransform.skX=a.resultTransform.skY=a.resultTransform.skY+R*h,e.update()}},e._applyIk3=function(e,a,s,r,n,h){if(0!=h){var l=NaN,o=NaN,u=a.resultMatrix.a*a.length,c=a.resultMatrix.b*a.length,d=u*u+c*c,_=Math.sqrt(d),p=e.resultMatrix.tx,f=e.resultMatrix.ty,m=a.resultMatrix.tx,y=a.resultMatrix.ty,x=m-p,g=y-f,v=x*x+g*g,D=Math.sqrt(v),I=(x=s-e.resultMatrix.tx)*x+(g=r-e.resultMatrix.ty)*g,N=Math.sqrt(I);if(_+D<=N||N+_<=D||N+D<=_){var b=NaN;m=p+(b=_+D<=N?1:-1)*(s-p)*D/N,y=f+b*(r-f)*D/N}else{var T=(v-d+I)/(2*I),A=Math.sqrt(v-T*T*I)/N,C=p+x*T,w=f+g*T,S=-g*A,F=x*A;n>0?(m=C-S,y=w-F):(m=C+S,y=w+F)}l=m,o=y,this.isDebug&&(this._sp||(this._sp=new M,i.stage.addChild(this._sp)),this._sp.graphics.clear(),this._sp.graphics.drawCircle(p,f,15,"#ff00ff"),this._sp.graphics.drawCircle(s,r,15,"#ffff00"),this._sp.graphics.drawCircle(l,o,15,"#ff00ff"));var k=NaN;k=Math.atan2(o-e.resultMatrix.ty,l-e.resultMatrix.tx),e.setRotation(k);var P;(P=t._tempMatrix).identity(),P.rotate(k),P.scale(e.resultMatrix.getScaleX(),e.resultMatrix.getScaleY()),P.translate(e.resultMatrix.tx,e.resultMatrix.ty),P.copyTo(e.resultMatrix),e.updateChild();var B=NaN;B=Math.atan2(r-o,s-l),a.setRotation(B);var U;(U=t._tempMatrix).identity(),U.rotate(B),U.scale(a.resultMatrix.getScaleX(),a.resultMatrix.getScaleY()),U.translate(l,o),P.copyTo(a.resultMatrix),a.updateChild()}},a(t,["radDeg",function(){return this.radDeg=180/Math.PI},"degRad",function(){return this.degRad=Math.PI/180},"_tempMatrix",function(){return this._tempMatrix=new m}]),t}(),K=function(){function t(){this.name=null,this.targetBoneName=null,this.bendDirection=1,this.mix=1,this.isSpine=!0,this.targetBoneIndex=-1,this.boneNames=[],this.boneIndexs=[]}return s(t,"laya.ani.bone.IkConstraintData"),t}(),Y=function(){function t(){}return s(t,"laya.ani.bone.MeshTools"),t.findEdge=function(t,e,i){void 0===e&&(e=0),void 0===i&&(i=!0);var a=0,s=0,r=0;for(s=t.length,r=-1,a=0;a<s;a+=2)(r<0||i==t[r+e]<t[a+e])&&(r=a);return r},t.findBestTriangle=function(e){var i=0;i=t.findEdge(e,1,!0);var a=0;a=t.findEdge(e,1,!1);var s=0;s=t.findEdge(e,0,!0);var r=0;r=t.findEdge(e,0,!1);var n;return n=t._bestTriangle,n.length=0,n.push(s,r),n.indexOf(i)<0&&n.push(i),n.indexOf(a)<0&&n.push(a),n},t.solveMesh=function(e,i){(i=i||[]).length=0;var a;a=e.uvs;var s;s=e.vertices;var r,n,h=0,l=0,o=0;h=(n=t.findBestTriangle(a))[0],l=n[1],o=n[2],t._absArr.length=0;return t.isNormalUV(e.texture.uv)&&t.adptTexture(e),r=t.solvePoints(e.texture.uv,a[h],a[h+1],a[l]-a[h],a[l+1]-a[h+1],a[o]-a[h],a[o+1]-a[h+1],t._absArr),t.transPoints(r,s[h],s[h+1],s[l]-s[h],s[l+1]-s[h+1],s[o]-s[h],s[o+1]-s[h+1],i)},t.findWrapRect=function(e){var i=0;i=t.findEdge(e,1,!0);var a=0;a=t.findEdge(e,1,!1);var s=0;s=t.findEdge(e,0,!0);var r=0;r=t.findEdge(e,0,!1);var n=NaN;n=e[s];var h=NaN;h=e[r];var l=NaN;l=e[i+1];var o=NaN;return[h,o=e[a+1],n-h,l-o]},t.adptTexture=function(e){var i;i=t.findWrapRect(e.uvs);var a,s,r=(a=e.texture).width,n=a.height;s=I.create(a,i[0]*r,i[1]*n,i[2]*r,i[3]*n),e.texture=s},t.isNormalUV=function(t){return 0==t[0]&&0==t[1]&&1==t[4]&&1==t[5]},t.solvePoints=function(e,i,a,s,r,n,h,l){l=l||[];var o=0,u=0;u=e.length;var c;for(o=0;o<u;o+=2)c=t.solve2(e[o],e[o+1],i,a,s,r,n,h),l.push(c[0],c[1]);return l},t.transPoints=function(e,i,a,s,r,n,h,l){l=l||[];var o=0,u=0;u=e.length;for(o=0;o<u;o+=2)t.transPoint(e[o],e[o+1],i,a,s,r,n,h,l);return l},t.transPoint=function(t,e,i,a,s,r,n,h,l){var o=NaN,u=NaN;return o=i+s*t+n*e,u=a+r*t+h*e,(l=l||[]).push(o,u),l},t.solve2=function(e,i,a,s,r,n,h,l,o,u){void 0===o&&(o=!1),u=u||[];var c=NaN,d=NaN;if(0==r)return t.solve2(e,i,a,s,h,l,r,n,!0,u);var _=NaN,p=NaN;return _=e-a,p=i-s,d=(p-_*n/r)/(l-h*n/r),c=(_-d*h)/r,o?u.push(d,c):u.push(c,d),u},t.solve=function(e,i,a,s){return t.solve2(e.x,e.y,i.x,i.y,a.x,a.y,s.x,s.y)},t._bestTriangle=[],t._absArr=[],t}(),W=function(){function t(t,e){this.target=null,this.data=null,this.bones=null,this.position=NaN,this.spacing=NaN,this.rotateMix=NaN,this.translateMix=NaN,this._debugKey=!1,this._spaces=null,this._segments=[],this._curves=[],this.data=t,this.position=t.position,this.spacing=t.spacing,this.rotateMix=t.rotateMix,this.translateMix=t.translateMix,this.bones=[];for(var i=this.data.bones,a=0,s=i.length;a<s;a++)this.bones.push(e[i[a]])}s(t,"laya.ani.bone.PathConstraint");var e=t.prototype;return e.apply=function(t,e){if(this.target){var i=this.translateMix,a=this.translateMix,s=a>0,r=this.data.spacingMode,n="length"==r,h=this.data.rotateMode,l="tangent"==h,o="chainScale"==h,u=[],c=this.bones.length,d=l?c:c+1,_=[];this._spaces=_,_[0]=this.position;var p=this.spacing;if(o||n)for(var f=0,m=d-1;f<m;){var y=this.bones[f],x=y.length,g=x*y.resultMatrix.a,v=x*y.resultMatrix.b;x=Math.sqrt(g*g+v*v),o&&(u[f]=x),_[++f]=n?Math.max(0,x+p):p}else for(f=1;f<d;f++)_[f]=p;var M=this.computeWorldPositions(this.target,t,e,d,l,"percent"==this.data.positionMode,"percent"==r);if(this._debugKey){for(f=0;f<M.length;f++)e.drawCircle(M[f++],M[f++],5,"#00ff00");var D=[];for(f=0;f<M.length;f++)D.push(M[f++],M[f++]);e.drawLines(0,0,D,"#ff0000")}var I=M[0],N=M[1],b=this.data.offsetRotation,T="chain"==h&&0==b,A=NaN;for(f=0,A=3;f<c;f++,A+=3){(y=this.bones[f]).resultMatrix.tx+=(I-y.resultMatrix.tx)*i,y.resultMatrix.ty+=(N-y.resultMatrix.ty)*i;var C=(g=M[A])-I,w=(v=M[A+1])-N;if(o&&0!=(x=u[f])){var S=(Math.sqrt(C*C+w*w)/x-1)*a+1;y.resultMatrix.a*=S,y.resultMatrix.c*=S}if(I=g,N=v,s){var F=y.resultMatrix.a,k=y.resultMatrix.c,P=y.resultMatrix.b,B=y.resultMatrix.d,U=NaN,L=NaN,R=NaN;U=l?M[A-1]:0==_[f+1]?M[A+2]:Math.atan2(w,C),U-=Math.atan2(P,F)-b/180*Math.PI,T&&(L=Math.cos(U),R=Math.sin(U),I+=((x=y.length)*(L*F-R*P)-C)*a,N+=(x*(R*F+L*P)-w)*a),U>Math.PI?U-=2*Math.PI:U<-Math.PI&&(U+=2*Math.PI),U*=a,L=Math.cos(U),R=Math.sin(U),y.resultMatrix.a=L*F-R*P,y.resultMatrix.c=L*k-R*B,y.resultMatrix.b=R*F+L*P,y.resultMatrix.d=R*k+L*B}}}},e.computeWorldVertices2=function(e,i,a,s,r,n){var h,l,o=e.currDisplayData.bones,u=e.currDisplayData.weights,c=e.currDisplayData.triangles,d=0,_=0,p=0,f=0,m=0,y=0,x=0,g=0,v=0,M=0,D=0;if(null!=o){for(d=0;d<a;d+=2)_+=(f=o[_])+1,p+=f;var I=i;for(m=n,y=3*p;m<s;m+=2){for(x=0,g=0,f=o[_++],f+=_;_<f;_++,y+=3){h=I[o[_]].resultMatrix,v=u[y],M=u[y+1];var N=u[y+2];x+=(v*h.a+M*h.c+h.tx)*N,g+=(v*h.b+M*h.d+h.ty)*N}r[m]=x,r[m+1]=g}}else{c||(c=u),e.deformData&&(c=e.deformData);var b;if(b=e.parent,i)for(D=i.length,d=0;d<D;d++)if(i[d].name==b){l=i[d];break}var T;l&&(T=l.resultMatrix),T||(T=t._tempMt);var A=T.tx,C=T.ty,w=T.a,S=T.b,F=T.c,k=T.d;for(l&&(k*=l.d),_=a,m=n;m<s;_+=2,m+=2)v=c[_],M=c[_+1],r[m]=v*w+M*S+A,r[m+1]=-(v*F+M*k+C)}},e.computeWorldPositions=function(t,e,i,a,s,r,n){t.currDisplayData.bones,t.currDisplayData.weights,t.currDisplayData.triangles;var h=[],l=0,o=t.currDisplayData.verLen,u=this.position,c=this._spaces,d=[],_=[],p=o/6,f=-1,m=NaN,y=0,x=0,g=NaN,v=NaN,M=NaN,D=NaN;if(p--,o-=4,this.computeWorldVertices2(t,e,2,o,h,0),this._debugKey)for(l=0;l<h.length;)i.drawCircle(h[l++],h[l++],10,"#ff0000");d=h,this._curves.length=p;var I=this._curves;m=0;var N=d[0],b=d[1],T=0,A=0,C=0,w=0,S=0,F=0,k=NaN,P=NaN,B=NaN,U=NaN,L=NaN,R=NaN,O=NaN,E=NaN,K=0;for(l=0,K=2;l<p;l++,K+=6)T=d[K],A=d[K+1],C=d[K+2],w=d[K+3],L=2*(k=.1875*(N-2*T+C))+(B=.09375*(3*(T-C)-N+(S=d[K+4]))),R=2*(P=.1875*(b-2*A+w))+(U=.09375*(3*(A-w)-b+(F=d[K+5]))),O=.75*(T-N)+k+.16666667*B,E=.75*(A-b)+P+.16666667*U,m+=Math.sqrt(O*O+E*E),O+=L,E+=R,L+=B,R+=U,m+=Math.sqrt(O*O+E*E),O+=L,E+=R,m+=Math.sqrt(O*O+E*E),O+=L+B,E+=R+U,m+=Math.sqrt(O*O+E*E),I[l]=m,N=S,b=F;if(r&&(u*=m),n)for(l=0;l<a;l++)c[l]*=m;var Y=this._segments,W=0,V=0;for(l=0,y=0,x=0,V=0;l<a;l++,y+=3)if(v=c[l],u+=v,(g=u)<0)this.addBeforePosition(g,d,0,_,y);else if(g>m)this.addAfterPosition(g-m,d,o-4,_,y);else{for(;;x++)if(D=I[x],!(g>D)){0==x?g/=D:g=(g-(M=I[x-1]))/(D-M);break}if(x!=f){f=x;var X=6*x;for(N=d[X],b=d[X+1],T=d[X+2],A=d[X+3],C=d[X+4],w=d[X+5],L=2*(k=.03*(N-2*T+C))+(B=.006*(3*(T-C)-N+(S=d[X+6]))),R=2*(P=.03*(b-2*A+w))+(U=.006*(3*(A-w)-b+(F=d[X+7]))),O=.3*(T-N)+k+.16666667*B,E=.3*(A-b)+P+.16666667*U,W=Math.sqrt(O*O+E*E),Y[0]=W,X=1;X<8;X++)O+=L,E+=R,L+=B,R+=U,W+=Math.sqrt(O*O+E*E),Y[X]=W;O+=L,E+=R,W+=Math.sqrt(O*O+E*E),Y[8]=W,O+=L+B,E+=R+U,W+=Math.sqrt(O*O+E*E),Y[9]=W,V=0}for(g*=W;;V++)if(D=Y[V],!(g>D)){0==V?g/=D:g=V+(g-(M=Y[V-1]))/(D-M);break}this.addCurvePosition(.1*g,N,b,T,A,C,w,S,F,_,y,s||l>0&&0==v)}return _},e.addBeforePosition=function(t,e,i,a,s){var r=e[i],n=e[i+1],h=e[i+2]-r,l=e[i+3]-n,o=Math.atan2(l,h);a[s]=r+t*Math.cos(o),a[s+1]=n+t*Math.sin(o),a[s+2]=o},e.addAfterPosition=function(t,e,i,a,s){var r=e[i+2],n=e[i+3],h=r-e[i],l=n-e[i+1],o=Math.atan2(l,h);a[s]=r+t*Math.cos(o),a[s+1]=n+t*Math.sin(o),a[s+2]=o},e.addCurvePosition=function(t,e,i,a,s,r,n,h,l,o,u,c){0==t&&(t=1e-4);var d=t*t,_=d*t,p=1-t,f=p*p,m=f*p,y=p*t,x=3*y,g=p*x,v=x*t,M=e*m+a*g+r*v+h*_,D=i*m+s*g+n*v+l*_;o[u]=M,o[u+1]=D,o[u+2]=c?Math.atan2(D-(i*f+s*y*2+n*d),M-(e*f+a*y*2+r*d)):0},t.NONE=-1,t.BEFORE=-2,t.AFTER=-3,a(t,["_tempMt",function(){return this._tempMt=new m}]),t}(),V=function(){function t(){this.name=null,this.target=null,this.positionMode=null,this.spacingMode=null,this.rotateMode=null,this.offsetRotation=NaN,this.position=NaN,this.spacing=NaN,this.rotateMix=NaN,this.translateMix=NaN,this.bones=[]}return s(t,"laya.ani.bone.PathConstraintData"),t}(),X=function(){function t(){this.name=null,this.slotArr=[]}return s(t,"laya.ani.bone.SkinData"),t}(),z=function(){function t(){this.name=null,this.attachmentName=null,this.type=0,this.transform=null,this.width=NaN,this.height=NaN,this.texture=null,this.bones=null,this.uvs=null,this.weights=null,this.triangles=null,this.vertices=null,this.lengths=null,this.verLen=0}s(t,"laya.ani.bone.SkinSlotDisplayData");var e=t.prototype;return e.createTexture=function(t){return this.texture?this.texture:(this.texture=new I(t.bitmap,this.uvs),this.uvs[0]>this.uvs[4]&&this.uvs[1]>this.uvs[5]?(this.texture.width=t.height,this.texture.height=t.width,this.texture.offsetX=-t.offsetX,this.texture.offsetY=-t.offsetY,this.texture.sourceWidth=t.sourceHeight,this.texture.sourceHeight=t.sourceWidth):(this.texture.width=t.width,this.texture.height=t.height,this.texture.offsetX=-t.offsetX,this.texture.offsetY=-t.offsetY,this.texture.sourceWidth=t.sourceWidth,this.texture.sourceHeight=t.sourceHeight),x.isWebGL||this.uvs[1]>this.uvs[5]&&(this.texture.offsetY=this.texture.sourceHeight-this.texture.height-this.texture.offsetY),this.texture)},e.destory=function(){this.texture&&this.texture.destroy()},t}(),q=function(){function t(){this.name=null,this.displayArr=[]}s(t,"laya.ani.bone.SlotData");return t.prototype.getDisplayByName=function(t){for(var e=0,i=this.displayArr.length;e<i;e++)if(this.displayArr[e].attachmentName==t)return e;return-1},t}(),G=function(){function t(t,e){this._data=null,this._bones=null,this.target=null,this.rotateMix=NaN,this.translateMix=NaN,this.scaleMix=NaN,this.shearMix=NaN,this._temp=n(2,0),this._data=t,null==this._bones&&(this._bones=[]),this.target=e[t.targetIndex];var i=0,a=0;for(i=0,a=t.boneIndexs.length;i<a;i++)this._bones.push(e[t.boneIndexs[i]]);this.rotateMix=t.rotateMix,this.translateMix=t.translateMix,this.scaleMix=t.scaleMix,this.shearMix=t.shearMix}s(t,"laya.ani.bone.TfConstraint");return t.prototype.apply=function(){for(var t,e=this.target.resultMatrix.a,i=this.target.resultMatrix.b,a=this.target.resultMatrix.c,s=this.target.resultMatrix.d,r=0,n=this._bones.length;r<n;r++){if(t=this._bones[r],this.rotateMix>0){var h=t.resultMatrix.a,l=t.resultMatrix.b,o=t.resultMatrix.c,u=t.resultMatrix.d,c=Math.atan2(a,e)-Math.atan2(o,h)+this._data.offsetRotation*Math.PI/180;c>Math.PI?c-=2*Math.PI:c<-Math.PI&&(c+=2*Math.PI),c*=this.rotateMix;var d=Math.cos(c),_=Math.sin(c);t.resultMatrix.a=d*h-_*o,t.resultMatrix.b=d*l-_*u,t.resultMatrix.c=_*h+d*o,t.resultMatrix.d=_*l+d*u}if(this.translateMix&&(this._temp[0]=this._data.offsetX,this._temp[1]=this._data.offsetY,this.target.localToWorld(this._temp),t.resultMatrix.tx+=(this._temp[0]-t.resultMatrix.tx)*this.translateMix,t.resultMatrix.ty+=(this._temp[1]-t.resultMatrix.ty)*this.translateMix,t.updateChild()),this.scaleMix>0){var p=Math.sqrt(t.resultMatrix.a*t.resultMatrix.a+t.resultMatrix.c*t.resultMatrix.c),f=Math.sqrt(e*e+a*a),m=p>1e-5?(p+(f-p+this._data.offsetScaleX)*this.scaleMix)/p:0;t.resultMatrix.a*=m,t.resultMatrix.c*=m,p=Math.sqrt(t.resultMatrix.b*t.resultMatrix.b+t.resultMatrix.d*t.resultMatrix.d),f=Math.sqrt(i*i+s*s),m=p>1e-5?(p+(f-p+this._data.offsetScaleY)*this.scaleMix)/p:0,t.resultMatrix.b*=m,t.resultMatrix.d*=m}if(this.shearMix>0){l=t.resultMatrix.b,u=t.resultMatrix.d;var y=Math.atan2(u,l);(c=Math.atan2(s,i)-Math.atan2(a,e)-(y-Math.atan2(t.resultMatrix.c,t.resultMatrix.a)))>Math.PI?c-=2*Math.PI:c<-Math.PI&&(c+=2*Math.PI),c=y+(c+this._data.offsetShearY*Math.PI/180)*this.shearMix,m=Math.sqrt(l*l+u*u),t.resultMatrix.b=Math.cos(c)*m,t.resultMatrix.d=Math.sin(c)*m}}},t}(),H=function(){function t(){this.name=null,this.targetIndex=0,this.rotateMix=NaN,this.translateMix=NaN,this.scaleMix=NaN,this.shearMix=NaN,this.offsetRotation=NaN,this.offsetX=NaN,this.offsetY=NaN,this.offsetScaleX=NaN,this.offsetScaleY=NaN,this.offsetShearY=NaN,this.boneIndexs=[]}return s(t,"laya.ani.bone.TfConstraintData"),t}(),Q=function(){function t(){this.skX=0,this.skY=0,this.scX=1,this.scY=1,this.x=0,this.y=0,this.skewX=0,this.skewY=0,this.mMatrix=null}s(t,"laya.ani.bone.Transform");var e=t.prototype;return e.initData=function(t){void 0!=t.x&&(this.x=t.x),void 0!=t.y&&(this.y=t.y),void 0!=t.skX&&(this.skX=t.skX),void 0!=t.skY&&(this.skY=t.skY),void 0!=t.scX&&(this.scX=t.scX),void 0!=t.scY&&(this.scY=t.scY)},e.getMatrix=function(){var t;return(t=this.mMatrix?this.mMatrix:this.mMatrix=new m).identity(),t.scale(this.scX,this.scY),(this.skewX||this.skewY)&&this.skew(t,this.skewX*Math.PI/180,this.skewY*Math.PI/180),t.rotate(this.skX*Math.PI/180),t.translate(this.x,this.y),t},e.skew=function(t,e,i){var a=Math.sin(i),s=Math.cos(i),r=Math.sin(e),n=Math.cos(e);return t.setTo(t.a*n-t.b*a,t.a*r+t.b*s,t.c*n-t.d*a,t.c*r+t.d*s,t.tx*n-t.ty*a,t.tx*r+t.ty*s),t},t}(),Z=function(){function t(){}return s(t,"laya.ani.bone.UVTools"),t.getRelativeUV=function(t,e,i){var a=t[0],s=t[2]-t[0],r=t[1],n=t[5]-t[1];i||(i=[]),i.length=e.length;var h=0,l=0;l=i.length;var o=1/s,u=1/n;for(h=0;h<l;h+=2)i[h]=(e[h]-a)*o,i[h+1]=(e[h+1]-r)*u;return i},t.getAbsoluteUV=function(t,e,i){if(0==t[0]&&0==t[1]&&1==t[4]&&1==t[5])return i?(b.copyArray(i,e),i):e;var a=t[0],s=t[2]-t[0],r=t[1],n=t[5]-t[1];i||(i=[]),i.length=e.length;var h=0,l=0;for(l=i.length,h=0;h<l;h+=2)i[h]=e[h]*s+a,i[h+1]=e[h+1]*n+r;return i},t}(),j=function(){function t(){this.startTime=NaN,this.duration=NaN,this.interpolationData=null,this.data=null,this.nextData=null}return s(t,"laya.ani.KeyFramesContent"),t}(),$=function(){function t(){}return s(t,"laya.ani.math.BezierLerp"),t.getBezierRate=function(e,i,a,s,r){var n=t._getBezierParamKey(i,a,s,r),h=100*n+e;if(t._bezierResultCache[h])return t._bezierResultCache[h];var l=t._getBezierPoints(i,a,s,r,n),o=0,u=0;for(u=l.length,o=0;o<u;o+=2)if(e<=l[o])return t._bezierResultCache[h]=l[o+1],l[o+1];return t._bezierResultCache[h]=1,1},t._getBezierParamKey=function(t,e,i,a){return 100*(100*(100*(100*t+e)+i)+a)},t._getBezierPoints=function(e,i,a,s,r){if(t._bezierPointsCache[r])return t._bezierPointsCache[r];var n;n=[0,0,e,i,a,s,1,1];var l;return l=(new h).getBezierPoints(n,100,3),t._bezierPointsCache[r]=l,l},t._bezierResultCache={},t._bezierPointsCache={},t}(),J=function(t){function e(){this._destroyed=!1,this._templet=null,this._currentTime=NaN,this._currentFrameTime=NaN,this._playStart=NaN,this._playEnd=NaN,this._playDuration=NaN,this._overallDuration=NaN,this._stopWhenCircleFinish=!1,this._elapsedPlaybackTime=NaN,this._startUpdateLoopCount=NaN,this._currentAnimationClipIndex=0,this._currentKeyframeIndex=0,this._paused=!1,this._cacheFrameRate=0,this._cacheFrameRateInterval=NaN,this._cachePlayRate=NaN,this._fullFrames=null,this.isCache=!0,this.playbackRate=1,this.returnToZeroStopped=!1,e.__super.call(this),this._destroyed=!1,this._currentAnimationClipIndex=-1,this._currentKeyframeIndex=-1,this._currentTime=0,this._overallDuration=Number.MAX_VALUE,this._stopWhenCircleFinish=!1,this._elapsedPlaybackTime=0,this._startUpdateLoopCount=-1,this._cachePlayRate=1,this.cacheFrameRate=60,this.returnToZeroStopped=!1}s(e,"laya.ani.AnimationPlayer",u);var a=e.prototype;return i.imps(a,{"laya.resource.IDestroy":!0}),a._onTempletLoadedComputeFullKeyframeIndices=function(t,e,i){this._templet===i&&this._cachePlayRate===t&&this._cacheFrameRate===e&&this._computeFullKeyframeIndices()},a._computeFullKeyframeIndices=function(){for(var t=this._fullFrames=[],e=this._templet,i=this._cacheFrameRateInterval*this._cachePlayRate,a=0,s=e.getAnimationCount();a<s;a++){for(var r=[],n=0,h=e.getAnimation(a).nodes.length;n<h;n++){for(var l=e.getAnimation(a).nodes[n],o=Math.floor(l.playTime/i+.01),u=new Uint16Array(o+1),c=-1,d=0,_=l.keyFrame.length;d<_;d++){var p=l.keyFrame[d],f=p.startTime,m=f+p.duration+i;do{for(var y=Math.floor(f/i+.5),x=c+1;x<y;x++)u[x]=d;c=y,u[y]=d,f+=i}while(f<=m)}r.push(u)}t.push(r)}},a._onAnimationTempletLoaded=function(){this.destroyed||this._calculatePlayDuration()},a._calculatePlayDuration=function(){if(0!==this.state){var t=this._templet.getAniDuration(this._currentAnimationClipIndex);0===this._playEnd&&(this._playEnd=t),this._playEnd>t&&(this._playEnd=t),this._playDuration=this._playEnd-this._playStart}},a._setPlayParams=function(t,e){this._currentTime=t,this._currentKeyframeIndex=Math.max(Math.floor(this.currentPlayTime/e+.01),0),this._currentFrameTime=this._currentKeyframeIndex*e},a._setPlayParamsWhenStop=function(t,e){this._currentTime=t,this._currentKeyframeIndex=Math.max(Math.floor(t/e+.01),0),this._currentFrameTime=this._currentKeyframeIndex*e,this._currentAnimationClipIndex=-1},a._update=function(t){if(-1!==this._currentAnimationClipIndex&&!this._paused&&this._templet&&this._templet.loaded){var e=this._cacheFrameRateInterval*this._cachePlayRate,i=0;this._startUpdateLoopCount!==D.loopCount&&(i=t*this.playbackRate,this._elapsedPlaybackTime+=i);var a=this.playDuration;if(0!==this._overallDuration&&this._elapsedPlaybackTime>=this._overallDuration||0===this._overallDuration&&this._elapsedPlaybackTime>=a)return this._setPlayParamsWhenStop(a,e),void this.event("stopped");if(i+=this._currentTime,a>0)if(i>=a)do{if(i-=a,this._stopWhenCircleFinish)return this._setPlayParamsWhenStop(a,e),this._stopWhenCircleFinish=!1,void this.event("stopped");i<a&&(this._setPlayParams(i,e),this.event("complete"))}while(i>=a);else this._setPlayParams(i,e);else{if(this._stopWhenCircleFinish)return this._setPlayParamsWhenStop(a,e),this._stopWhenCircleFinish=!1,void this.event("stopped");this._currentTime=this._currentFrameTime=this._currentKeyframeIndex=0,this.event("complete")}}},a._destroy=function(){this.offAll(),this._templet=null,this._fullFrames=null,this._destroyed=!0},a.play=function(t,e,i,a,s){if(void 0===t&&(t=0),void 0===e&&(e=1),void 0===i&&(i=2147483647),void 0===a&&(a=0),void 0===s&&(s=0),!this._templet)throw new Error("AnimationPlayer:templet must not be null,maybe you need to set url.");if(i<0||a<0||s<0)throw new Error("AnimationPlayer:overallDuration,playStart and playEnd must large than zero.");if(0!==s&&a>s)throw new Error("AnimationPlayer:start must less than end.");this._currentTime=0,this._currentFrameTime=0,this._elapsedPlaybackTime=0,this.playbackRate=e,this._overallDuration=i,this._playStart=a,this._playEnd=s,this._paused=!1,this._currentAnimationClipIndex=t,this._currentKeyframeIndex=0,this._startUpdateLoopCount=D.loopCount,this.event("played"),this._templet.loaded?this._calculatePlayDuration():this._templet.once("loaded",this,this._onAnimationTempletLoaded),this._update(0)},a.playByFrame=function(t,e,i,a,s,r){void 0===t&&(t=0),void 0===e&&(e=1),void 0===i&&(i=2147483647),void 0===a&&(a=0),void 0===s&&(s=0),void 0===r&&(r=30);var n=1e3/r;this.play(t,e,i,a*n,s*n)},a.stop=function(t){void 0===t&&(t=!0),t?(this._currentTime=this._currentFrameTime=this._currentKeyframeIndex=0,this._currentAnimationClipIndex=-1,this.event("stopped")):this._stopWhenCircleFinish=!0},r(0,a,"playEnd",function(){return this._playEnd}),r(0,a,"templet",function(){return this._templet},function(t){0===!this.state&&this.stop(!0),this._templet!==t&&(this._templet=t,t.loaded?this._computeFullKeyframeIndices():t.once("loaded",this,this._onTempletLoadedComputeFullKeyframeIndices,[this._cachePlayRate,this._cacheFrameRate]))}),r(0,a,"playStart",function(){return this._playStart}),r(0,a,"playDuration",function(){return this._playDuration}),r(0,a,"state",function(){return-1===this._currentAnimationClipIndex?0:this._paused?1:2}),r(0,a,"currentKeyframeIndex",function(){return this._currentKeyframeIndex}),r(0,a,"overallDuration",function(){return this._overallDuration}),r(0,a,"currentFrameTime",function(){return this._currentFrameTime}),r(0,a,"currentAnimationClipIndex",function(){return this._currentAnimationClipIndex}),r(0,a,"currentPlayTime",function(){return this._currentTime+this._playStart}),r(0,a,"cachePlayRate",function(){return this._cachePlayRate},function(t){this._cachePlayRate!==t&&(this._cachePlayRate=t,this._templet&&(this._templet.loaded?this._computeFullKeyframeIndices():this._templet.once("loaded",this,this._onTempletLoadedComputeFullKeyframeIndices,[t,this._cacheFrameRate])))}),r(0,a,"cacheFrameRate",function(){return this._cacheFrameRate},function(t){this._cacheFrameRate!==t&&(this._cacheFrameRate=t,this._cacheFrameRateInterval=1e3/this._cacheFrameRate,this._templet&&(this._templet.loaded?this._computeFullKeyframeIndices():this._templet.once("loaded",this,this._onTempletLoadedComputeFullKeyframeIndices,[this._cachePlayRate,t])))}),r(0,a,"currentTime",null,function(t){if(-1!==this._currentAnimationClipIndex&&this._templet&&this._templet.loaded){if(t<this._playStart||t>this._playEnd)throw new Error("AnimationPlayer:value must large than playStartTime,small than playEndTime.");this._startUpdateLoopCount=D.loopCount;var e=this._cacheFrameRateInterval*this._cachePlayRate;this._currentTime=t,this._currentKeyframeIndex=Math.max(Math.floor(this.currentPlayTime/e),0),this._currentFrameTime=this._currentKeyframeIndex*e}}),r(0,a,"paused",function(){return this._paused},function(t){this._paused=t,t&&this.event("paused")}),r(0,a,"cacheFrameRateInterval",function(){return this._cacheFrameRateInterval}),r(0,a,"destroyed",function(){return this._destroyed}),e}(),tt=function(t){function e(){e.__super.call(this),x.isConchNode&&(this.drawSkin=function(t){t.transform||(t.transform=m.EMPTY),this._addCmd([t]),this.setSkinMesh&&this.setSkinMesh(t._ps,t.mVBData,t.mEleNum,0,t.mTexture,t.transform)})}s(e,"laya.ani.GraphicsAni",c);return e.prototype.drawSkin=function(t){var e=[t];this._saveToCmd(x._context._drawSkin,e)},e.create=function(){return e._caches.pop()||new e},e.recycle=function(t){t.clear(),e._caches.push(t)},e._caches=[],e}(),et=function(t){function e(){e.__super.call(this),this.mesh=new P}s(e,"laya.ani.bone.canvasmesh.SkinMeshCanvas",k);var i=e.prototype;return i.init2=function(t,e,i,a,s){this.transform&&(this.transform=null);var r;i?r=i:(r=[]).push(0,1,3,3,1,2),this.mesh.texture=t,this.mesh.indexes=r,this.mesh.vertices=a,this.mesh.uvs=s},i.render=function(t,i,a){this.mesh.texture&&(this.transform?(this.transform.translate(i,a),this.renderToContext(t),this.transform.translate(-i,-a)):(this.transform=e._tempMatrix,this.transform.identity(),this.transform.translate(i,a),this.renderToContext(t),this.transform.translate(-i,-a),this.transform=null))},a(e,["_tempMatrix",function(){return this._tempMatrix=new m}]),e}(),it=function(t){function e(){this._aniMap={},this.unfixedLastAniIndex=-1,e.__super.call(this),this._anis=new Array}s(e,"laya.ani.AnimationTemplet",g);var a=e.prototype;return a.parse=function(t){var e=new o(t);this._aniVersion=e.readUTFString(),C.parse(this,e)},a._calculateKeyFrame=function(t,e,i){var a=t.keyFrame;a[e]=a[0];for(var s=0;s<e;s++){var r=a[s];r.nextData=0===r.duration?r.data:a[s+1].data}a.length--},a.onAsynLoaded=function(t,e,i){var a=new o(e);switch(this._aniVersion=a.readUTFString(),this._aniVersion){case"LAYAANIMATION:02":w.parse(this,a);break;default:C.parse(this,a)}this._endLoaded()},a.disposeResource=function(){this._aniVersion=null,this._anis=null,this._aniMap=null,this._publicExtData=null,this.unfixedCurrentFrameIndexes=null,this.unfixedCurrentTimes=null,this.unfixedKeyframes=null,this._aniClassName=null,this._animationDatasCache=null},a.getAnimationCount=function(){return this._anis.length},a.getAnimation=function(t){return this._anis[t]},a.getAniDuration=function(t){return this._anis[t].playTime},a.getNodes=function(t){return this._anis[t].nodes},a.getNodeIndexWithName=function(t,e){return this._anis[t].bone3DMap[e]},a.getNodeCount=function(t){return this._anis[t].nodes.length},a.getTotalkeyframesLength=function(t){return this._anis[t].totalKeyframeDatasLength},a.getPublicExtData=function(){return this._publicExtData},a.getAnimationDataWithCache=function(t,e,i,a){var s=e[i];if(s){var r=s[t];return r?r[a]:null}return null},a.setAnimationDataWithCache=function(t,e,i,a,s){var r=e[i]||(e[i]={});(r[t]||(r[t]=[]))[a]=s},a.getOriginalData=function(t,i,a,s,r){for(var n=this._anis[t].nodes,h=0,l=0,o=n.length,u=0;l<o;l++){var c,d=n[l];c=d.keyFrame[a[l][s]],d.dataOffset=u;var _=r-c.startTime,p=d.lerpType;if(p)switch(p){case 0:case 1:for(h=0;h<d.keyframeWidth;)h+=d.interpolationMethod[h](d,h,i,u+h,c.data,_,null,c.duration,c.nextData);break;case 2:var f=c.interpolationData,m=f.length,y=0;for(h=0;h<m;){var x=f[h];switch(x){case 6:case 7:h+=e.interpolation[x](d,y,i,u+y,c.data,_,null,c.duration,c.nextData,f,h+1);break;default:h+=e.interpolation[x](d,y,i,u+y,c.data,_,null,c.duration,c.nextData)}y++}}else for(h=0;h<d.keyframeWidth;)h+=d.interpolationMethod[h](d,h,i,u+h,c.data,_,null,c.duration,c.nextData);u+=d.keyframeWidth}},a.getNodesCurrentFrameIndex=function(t,e){var i=this._anis[t].nodes;t!==this.unfixedLastAniIndex&&(this.unfixedCurrentFrameIndexes=new Uint32Array(i.length),this.unfixedCurrentTimes=new Float32Array(i.length),this.unfixedLastAniIndex=t);for(var a=0,s=i.length;a<s;a++){var r=i[a];for(e<this.unfixedCurrentTimes[a]&&(this.unfixedCurrentFrameIndexes[a]=0),this.unfixedCurrentTimes[a]=e;this.unfixedCurrentFrameIndexes[a]<r.keyFrame.length&&!(r.keyFrame[this.unfixedCurrentFrameIndexes[a]].startTime>this.unfixedCurrentTimes[a]);)this.unfixedCurrentFrameIndexes[a]++;this.unfixedCurrentFrameIndexes[a]--}return this.unfixedCurrentFrameIndexes},a.getOriginalDataUnfixedRate=function(t,i,a){var s=this._anis[t].nodes;t!==this.unfixedLastAniIndex&&(this.unfixedCurrentFrameIndexes=new Uint32Array(s.length),this.unfixedCurrentTimes=new Float32Array(s.length),this.unfixedKeyframes=n(s.length),this.unfixedLastAniIndex=t);for(var r=0,h=0,l=s.length,o=0;h<l;h++){var u=s[h];for(a<this.unfixedCurrentTimes[h]&&(this.unfixedCurrentFrameIndexes[h]=0),this.unfixedCurrentTimes[h]=a;this.unfixedCurrentFrameIndexes[h]<u.keyFrame.length&&!(u.keyFrame[this.unfixedCurrentFrameIndexes[h]].startTime>this.unfixedCurrentTimes[h]);)this.unfixedKeyframes[h]=u.keyFrame[this.unfixedCurrentFrameIndexes[h]],this.unfixedCurrentFrameIndexes[h]++;var c=this.unfixedKeyframes[h];u.dataOffset=o;var d=a-c.startTime;if(u.lerpType)switch(u.lerpType){case 0:case 1:for(r=0;r<u.keyframeWidth;)r+=u.interpolationMethod[r](u,r,i,o+r,c.data,d,null,c.duration,c.nextData);break;case 2:var _=c.interpolationData,p=_.length,f=0;for(r=0;r<p;){var m=_[r];switch(m){case 6:case 7:r+=e.interpolation[m](u,f,i,o+f,c.data,d,null,c.duration,c.nextData,_,r+1);break;default:r+=e.interpolation[m](u,f,i,o+f,c.data,d,null,c.duration,c.nextData)}f++}}else for(r=0;r<u.keyframeWidth;)r+=u.interpolationMethod[r](u,r,i,o+r,c.data,d,null,c.duration,c.nextData);o+=u.keyframeWidth}},e._LinearInterpolation_0=function(t,e,i,a,s,r,n,h,l,o){var u=0===h?0:r/h;return i[a]=(1-u)*s[e]+u*l[e],1},e._QuaternionInterpolation_1=function(t,e,i,a,s,r,n,h,l,o){var u=0===h?0:r/h;return f.slerpQuaternionArray(s,e,l,e,u,i,a),4},e._AngleInterpolation_2=function(t,e,i,a,s,r,n,h,l,o){return 0},e._RadiansInterpolation_3=function(t,e,i,a,s,r,n,h,l,o){return 0},e._Matrix4x4Interpolation_4=function(t,e,i,a,s,r,n,h,l,o){for(var u=0;u<16;u++,e++)i[a+u]=s[e]+r*n[e];return 16},e._NoInterpolation_5=function(t,e,i,a,s,r,n,h,l,o){return i[a]=s[e],1},e._BezierInterpolation_6=function(t,e,i,a,s,r,n,h,l,o,u){return void 0===u&&(u=0),i[a]=s[e]+(l[e]-s[e])*$.getBezierRate(r/h,o[u],o[u+1],o[u+2],o[u+3]),5},e._BezierInterpolation_7=function(t,e,i,a,s,r,n,h,l,o,u){return void 0===u&&(u=0),i[a]=o[u+4]+o[u+5]*$.getBezierRate((.001*r+o[u+6])/o[u+7],o[u],o[u+1],o[u+2],o[u+3]),9},e.load=function(t){return i.loader.create(t,null,null,e)},e.interpolation=[e._LinearInterpolation_0,e._QuaternionInterpolation_1,e._AngleInterpolation_2,e._RadiansInterpolation_3,e._Matrix4x4Interpolation_4,e._NoInterpolation_5,e._BezierInterpolation_6,e._BezierInterpolation_7],e}(),at=(function(t){function e(){this.isCached=!1,this.canvas=null,this.tex=null,this.rec=null,e.__super.call(this)}s(e,"laya.ani.bone.canvasmesh.CacheAbleSkinMesh",et);var i=e.prototype;i.getCanvasPic=function(){var t=new d("2D"),i=t.getContext("2d");this.rec=this.mesh.getBounds(),t.size(this.rec.width,this.rec.height);var a;return a=this.transform,this.transform=e.tempMt,this.transform.identity(),this.transform.translate(-this.rec.x,-this.rec.y),this.renderToContext(i),this.transform.translate(+this.rec.x,+this.rec.y),this.transform=a,new I(t)},i.render=function(t,e,i){this.mesh.texture&&(this.isCached||(this.isCached=!0,this.tex=this.getCanvasPic()),this.transform?(this.transform.translate(e,i),this._renderTextureToContext(t),this.transform.translate(-e,-i)):(this.transform=et._tempMatrix,this.transform.identity(),this.transform.translate(e,i),this._renderTextureToContext(t),this.transform.translate(-e,-i),this.transform=null))},i._renderTextureToContext=function(t){this.context=t.ctx||t,t.save();var e;if(e=this.tex,this.transform){var i=this.transform;t.transform(i.a,i.b,i.c,i.d,i.tx,i.ty)}this.rec=this.mesh.getBounds(),t.translate(this.rec.x,this.rec.y),t.drawTexture(e,0,0,e.width,e.height,0,0),t.restore()},a(e,["tempMt",function(){return this.tempMt=new m}])}(),function(t){function e(){this.cacheOK=!1,this.cacheCmdOK=!1,this.transformCmds=[],this.drawCmds=[],e.__super.call(this),this.tempMesh=new P}s(e,"laya.ani.bone.canvasmesh.SimpleSkinMeshCanvas",t);var i=e.prototype;return i.init2=function(e,i,a,s,r){t.prototype.init2.call(this,e,i,a,s,r),this.cacheOK=!1,this.cacheCmdOK=!1,this.transformCmds.length=6,this.drawCmds.length=9},i.renderToContext=function(t){if(this.context=t.ctx||t,this.mesh){if(this.mesh.uvs.length<=8)return void(0==this.mode?this._renderWithIndexes(this.mesh):this._renderNoIndexes(this.mesh));this.cacheOK||(this.tempMesh.texture=this.mesh.texture,this.tempMesh.uvs=this.mesh.texture.uv,this.tempMesh.vertices=Y.solveMesh(this.mesh,this.tempMesh.vertices),this.cacheOK=!0),0==this.mode?this._renderWithIndexes(this.tempMesh):this._renderNoIndexes(this.tempMesh)}},i._renderWithIndexes=function(t){if(this.cacheCmdOK)this.renderByCache(t);else{var e=t.indexes,i=0,a=e.length;for(a>1&&(a=1),i=0;i<a;i+=3){var s=2*e[i],r=2*e[i+1],n=2*e[i+2];this._renderDrawTriangle(t,s,r,n)}this.cacheCmdOK=!0}},i._renderDrawTriangle=function(t,e,i,a){var s=this.context,r=t.uvs,n=t.vertices,h=t.texture,l=h.bitmap,o=l.source,u=h.width,c=h.height,d=l.width,_=l.height,p=NaN,f=NaN,m=NaN,y=NaN,x=NaN,g=NaN;if(t.useUvTransform){var v=t.uvTransform;p=(r[e]*v.a+r[e+1]*v.c+v.tx)*d,f=(r[i]*v.a+r[i+1]*v.c+v.tx)*d,m=(r[a]*v.a+r[a+1]*v.c+v.tx)*d,y=(r[e]*v.b+r[e+1]*v.d+v.ty)*_,x=(r[i]*v.b+r[i+1]*v.d+v.ty)*_,g=(r[a]*v.b+r[a+1]*v.d+v.ty)*_}else p=r[e]*d,f=r[i]*d,m=r[a]*d,y=r[e+1]*_,x=r[i+1]*_,g=r[a+1]*_;var M=n[e],D=n[i],I=n[a],N=n[e+1],b=n[i+1],T=n[a+1],A=1/(p*x+y*m+f*g-x*m-y*f-p*g),C=M*x+y*I+D*g-x*I-y*D-M*g,w=p*D+M*m+f*I-D*m-M*f-p*I,S=p*x*I+y*D*m+M*f*g-M*x*m-y*f*I-p*D*g,F=N*x+y*T+b*g-x*T-y*b-N*g,k=p*b+N*m+f*T-b*m-N*f-p*T,P=p*x*T+y*b*m+N*f*g-N*x*m-y*f*T-p*b*g;if(this.transformCmds[0]=C*A,this.transformCmds[1]=F*A,this.transformCmds[2]=w*A,this.transformCmds[3]=k*A,this.transformCmds[4]=S*A,this.transformCmds[5]=P*A,this.drawCmds[0]=o,this.drawCmds[1]=h.uv[0]*d,this.drawCmds[2]=h.uv[1]*_,this.drawCmds[3]=u,this.drawCmds[4]=c,this.drawCmds[5]=h.uv[0]*d,this.drawCmds[6]=h.uv[1]*_,this.drawCmds[7]=u,this.drawCmds[8]=c,s.save(),this.transform){var B=this.transform;s.transform(B.a,B.b,B.c,B.d,B.tx,B.ty)}s.transform.apply(s,this.transformCmds),s.drawImage.apply(s,this.drawCmds),s.restore()},i.renderByCache=function(t){var e=this.context;if(e.save(),this.transform){var i=this.transform;e.transform(i.a,i.b,i.c,i.d,i.tx,i.ty)}e.transform.apply(e,this.transformCmds),e.drawImage.apply(e,this.drawCmds),e.restore()},e}(et)),st=function(t){function e(t,i){this._templet=null,this._player=null,this._curOriginalData=null,this._boneMatrixArray=[],this._lastTime=0,this._currAniName=null,this._currAniIndex=-1,this._pause=!0,this._aniClipIndex=-1,this._clipIndex=-1,this._skinIndex=0,this._skinName="default",this._aniMode=0,this._graphicsCache=null,this._boneSlotDic=null,this._bindBoneBoneSlotDic=null,this._boneSlotArray=null,this._index=-1,this._total=-1,this._indexControl=!1,this._aniPath=null,this._texturePath=null,this._complete=null,this._loadAniMode=0,this._yReverseMatrix=null,this._ikArr=null,this._tfArr=null,this._pathDic=null,this._rootBone=null,this._boneList=null,this._aniSectionDic=null,this._eventIndex=0,this._drawOrderIndex=0,this._drawOrder=null,this._lastAniClipIndex=-1,this._lastUpdateAniClipIndex=-1,e.__super.call(this),void 0===i&&(i=0),t&&this.init(t,i)}s(e,"laya.ani.bone.Skeleton",t);var a=e.prototype;return a.init=function(t,e){void 0===e&&(e=0);var i=0,a=0;if(1==e)for(this._graphicsCache=[],i=0,a=t.getAnimationCount();i<a;i++)this._graphicsCache.push([]);if(this._yReverseMatrix=t.yReverseMatrix,this._aniMode=e,this._templet=t,this._player=new J,this._player.cacheFrameRate=t.rate,this._player.templet=t,this._player.play(),this._parseSrcBoneMatrix(),this._boneList=t.mBoneArr,this._rootBone=t.mRootBone,this._aniSectionDic=t.aniSectionDic,t.ikArr.length>0)for(this._ikArr=[],i=0,a=t.ikArr.length;i<a;i++)this._ikArr.push(new E(t.ikArr[i],this._boneList));if(t.pathArr.length>0){var s,r;null==this._pathDic&&(this._pathDic={});var n;for(i=0,a=t.pathArr.length;i<a;i++)s=t.pathArr[i],r=new W(s,this._boneList),(n=this._boneSlotDic[s.name])&&((r=new W(s,this._boneList)).target=n),this._pathDic[s.name]=r}if(t.tfArr.length>0)for(this._tfArr=[],i=0,a=t.tfArr.length;i<a;i++)this._tfArr.push(new G(t.tfArr[i],this._boneList));if(t.skinDataArray.length>0){var h=this._templet.skinDataArray[this._skinIndex];this._skinName=h.name}this._player.on("played",this,this._onPlay),this._player.on("stopped",this,this._onStop),this._player.on("paused",this,this._onPause)},a.load=function(t,e,a){void 0===a&&(a=0),this._aniPath=t,this._complete=e,this._loadAniMode=a,i.loader.load([{url:t,type:"arraybuffer"}],_.create(this,this._onLoaded))},a._onLoaded=function(){var t=p.getRes(this._aniPath);if(null!=t){null==rt.TEMPLET_DICTIONARY&&(rt.TEMPLET_DICTIONARY={});var e;(e=rt.TEMPLET_DICTIONARY[this._aniPath])?e.isParseFail?this._parseFail():e.isParserComplete?this._parseComplete():(e.on("complete",this,this._parseComplete),e.on("error",this,this._parseFail)):((e=new rt)._setUrl(this._aniPath),rt.TEMPLET_DICTIONARY[this._aniPath]=e,e.on("complete",this,this._parseComplete),e.on("error",this,this._parseFail),e.isParserComplete=!1,e.parseData(null,t))}},a._parseComplete=function(){var t=rt.TEMPLET_DICTIONARY[this._aniPath];t&&(this.init(t,this._loadAniMode),this.play(0,!0)),this._complete&&this._complete.runWith(this)},a._parseFail=function(){console.log("[Error]:"+this._aniPath+"解析失败")},a._onPlay=function(){this.event("played")},a._onStop=function(){var t,e=this._templet.eventAniArr[this._aniClipIndex];if(e&&this._eventIndex<e.length)for(;this._eventIndex<e.length;this._eventIndex++)(t=e[this._eventIndex]).time>=this._player.playStart&&t.time<=this._player.playEnd&&this.event("label",t);this._eventIndex=0,this._drawOrder=null,this.event("stopped")},a._onPause=function(){this.event("paused")},a._parseSrcBoneMatrix=function(){var t=0,e=0;for(e=this._templet.srcBoneMatrixArr.length,t=0;t<e;t++)this._boneMatrixArray.push(new m);if(0==this._aniMode)this._boneSlotDic=this._templet.boneSlotDic,this._bindBoneBoneSlotDic=this._templet.bindBoneBoneSlotDic,this._boneSlotArray=this._templet.boneSlotArray;else{null==this._boneSlotDic&&(this._boneSlotDic={}),null==this._bindBoneBoneSlotDic&&(this._bindBoneBoneSlotDic={}),null==this._boneSlotArray&&(this._boneSlotArray=[]);var i,a,s=this._templet.boneSlotArray;for(t=0,e=s.length;t<e;t++)i=s[t],null==(a=this._bindBoneBoneSlotDic[i.parent])&&(this._bindBoneBoneSlotDic[i.parent]=a=[]),this._boneSlotDic[i.name]=i=i.copy(),a.push(i),this._boneSlotArray.push(i)}},a._emitMissedEvents=function(t,e,i){void 0===i&&(i=0);var a=this._templet.eventAniArr[this._player.currentAnimationClipIndex];if(a){var s,r=0,n=0;for(n=a.length,r=i;r<n;r++)(s=a[r]).time>=this._player.playStart&&s.time<=this._player.playEnd&&this.event("label",s)}},a._update=function(t){if(void 0===t&&(t=!0),!(this._pause||t&&this._indexControl)){var e=this.timer.currTimer,i=this._player.currentKeyframeIndex,a=e-this._lastTime;if(t?this._player._update(a):i=-1,this._lastTime=e,this._player&&(this._index=this._clipIndex=this._player.currentKeyframeIndex,!(this._index<0||a>0&&this._clipIndex==i&&this._lastUpdateAniClipIndex==this._aniClipIndex))){this._lastUpdateAniClipIndex=this._aniClipIndex,i>this._clipIndex&&0!=this._eventIndex&&(this._emitMissedEvents(this._player.playStart,this._player.playEnd,this._eventIndex),this._eventIndex=0);var s,r=this._templet.eventAniArr[this._aniClipIndex];r&&this._eventIndex<r.length&&((s=r[this._eventIndex]).time>=this._player.playStart&&s.time<=this._player.playEnd?this._player.currentPlayTime>=s.time&&(this.event("label",s),this._eventIndex++):this._eventIndex++);var n;if(0==this._aniMode){if(n=this._templet.getGrahicsDataWithCache(this._aniClipIndex,this._clipIndex))return void(this.graphics!=n&&(this.graphics=n));var h=0,l=0;for(l=this._clipIndex;!this._templet.getGrahicsDataWithCache(this._aniClipIndex,l-1)&&l>0;)l--;if(l<this._clipIndex)for(h=l;h<this._clipIndex;h++)this._createGraphics(h)}else if(1==this._aniMode){if(n=this._getGrahicsDataWithCache(this._aniClipIndex,this._clipIndex))return void(this.graphics!=n&&(this.graphics=n));for(l=this._clipIndex;!this._getGrahicsDataWithCache(this._aniClipIndex,l-1)&&l>0;)l--;if(l<this._clipIndex)for(h=l;h<this._clipIndex;h++)this._createGraphics(h)}this._createGraphics()}}},a._createGraphics=function(t){void 0===t&&(t=-1),-1==t&&(t=this._clipIndex);var e,i=t*this._player.cacheFrameRateInterval,a=this._templet.drawOrderAniArr[this._aniClipIndex];if(a&&a.length>0)for(this._drawOrderIndex=0,e=a[this._drawOrderIndex];i>=e.time&&(this._drawOrder=e.drawOrder,this._drawOrderIndex++,!(this._drawOrderIndex>=a.length));)e=a[this._drawOrderIndex];var s;0==this._aniMode||1==this._aniMode?this.graphics=tt.create():this.graphics instanceof laya.ani.GraphicsAni?this.graphics.clear():this.graphics=tt.create(),s=this.graphics;var r=this._templet.getNodes(this._aniClipIndex);this._templet.getOriginalData(this._aniClipIndex,this._curOriginalData,this._player._fullFrames[this._aniClipIndex],t,i);var n,h,l,u,c=this._aniSectionDic[this._aniClipIndex],d=0,_=0,p=0,f=0,y=0,x=this._templet.srcBoneMatrixArr.length;for(_=0,y=c[0];_<x;_++)u=this._boneList[_],l=this._templet.srcBoneMatrixArr[_],u.resultTransform.scX=l.scX*this._curOriginalData[d++],u.resultTransform.skX=l.skX+this._curOriginalData[d++],u.resultTransform.skY=l.skY+this._curOriginalData[d++],u.resultTransform.scY=l.scY*this._curOriginalData[d++],u.resultTransform.x=l.x+this._curOriginalData[d++],u.resultTransform.y=l.y+this._curOriginalData[d++],8===this._templet.tMatrixDataLen&&(u.resultTransform.skewX=l.skewX+this._curOriginalData[d++],u.resultTransform.skewY=l.skewY+this._curOriginalData[d++]);var g,v={},M={};for(y+=c[1];_<y;_++)v[(g=r[_]).name]=this._curOriginalData[d++],M[g.name]=this._curOriginalData[d++],this._curOriginalData[d++],this._curOriginalData[d++],this._curOriginalData[d++],this._curOriginalData[d++];var D={},I={};for(y+=c[2];_<y;_++)D[(g=r[_]).name]=this._curOriginalData[d++],I[g.name]=this._curOriginalData[d++],this._curOriginalData[d++],this._curOriginalData[d++],this._curOriginalData[d++],this._curOriginalData[d++];if(this._pathDic){var N;for(y+=c[3];_<y;_++)if(g=r[_],N=this._pathDic[g.name]){switch(new o(g.extenData).getByte()){case 1:N.position=this._curOriginalData[d++];break;case 2:N.spacing=this._curOriginalData[d++];break;case 3:N.rotateMix=this._curOriginalData[d++],N.translateMix=this._curOriginalData[d++]}}}if(this._yReverseMatrix?this._rootBone.update(this._yReverseMatrix):this._rootBone.update(m.TEMP.identity()),this._ikArr){var b;for(_=0,y=this._ikArr.length;_<y;_++)b=this._ikArr[_],D.hasOwnProperty(b.name)&&(b.bendDirection=D[b.name]),I.hasOwnProperty(b.name)&&(b.mix=I[b.name]),b.apply()}if(this._pathDic)for(var T in this._pathDic)(N=this._pathDic[T]).apply(this._boneList,s);if(this._tfArr){for(_=0,f=this._tfArr.length;_<f;_++)this._tfArr[_].apply()}for(_=0,f=this._boneList.length;_<f;_++)if(u=this._boneList[_],h=this._bindBoneBoneSlotDic[u.name],u.resultMatrix.copyTo(this._boneMatrixArray[_]),h)for(p=0,y=h.length;p<y;p++)(n=h[p])&&n.setParentMatrix(u.resultMatrix);var A,C={},w=this._templet.deformAniArr;if(w&&w.length>0){if(this._lastAniClipIndex!=this._aniClipIndex)for(this._lastAniClipIndex=this._aniClipIndex,_=0,y=this._boneSlotArray.length;_<y;_++)(n=this._boneSlotArray[_]).deformData=null;var S=w[this._aniClipIndex];A=S.default,this._setDeform(A,C,this._boneSlotArray,i);var F;for(F in S)"default"!=F&&F!=this._skinName&&(A=S[F],this._setDeform(A,C,this._boneSlotArray,i));A=S[this._skinName],this._setDeform(A,C,this._boneSlotArray,i)}var k,P,B;if(this._drawOrder)for(_=0,y=this._drawOrder.length;_<y;_++)k=v[(n=this._boneSlotArray[this._drawOrder[_]]).name],P=M[n.name],isNaN(P)||(s.save(),s.alpha(P)),isNaN(k)||-2==k||(this._templet.attachmentNames?n.showDisplayByName(this._templet.attachmentNames[k]):n.showDisplayByIndex(k)),C[this._drawOrder[_]]?(B=C[this._drawOrder[_]],n.currDisplayData&&B[n.currDisplayData.attachmentName]?n.deformData=B[n.currDisplayData.attachmentName]:n.deformData=null):n.deformData=null,isNaN(P)?n.draw(s,this._boneMatrixArray,2==this._aniMode):n.draw(s,this._boneMatrixArray,2==this._aniMode,P),isNaN(P)||s.restore();else for(_=0,y=this._boneSlotArray.length;_<y;_++)k=v[(n=this._boneSlotArray[_]).name],P=M[n.name],isNaN(P)||(s.save(),s.alpha(P)),isNaN(k)||-2==k||(this._templet.attachmentNames?n.showDisplayByName(this._templet.attachmentNames[k]):n.showDisplayByIndex(k)),C[_]?(B=C[_],n.currDisplayData&&B[n.currDisplayData.attachmentName]?n.deformData=B[n.currDisplayData.attachmentName]:n.deformData=null):n.deformData=null,isNaN(P)?n.draw(s,this._boneMatrixArray,2==this._aniMode):n.draw(s,this._boneMatrixArray,2==this._aniMode,P),isNaN(P)||s.restore();0==this._aniMode?this._templet.setGrahicsDataWithCache(this._aniClipIndex,t,s):1==this._aniMode&&this._setGrahicsDataWithCache(this._aniClipIndex,t,s)},a._setDeform=function(t,e,i,a){if(t){var s,r,n,h=0,l=0,o=0;if(t)for(h=0,l=t.deformSlotDataList.length;h<l;h++)for(s=t.deformSlotDataList[h],o=0;o<s.deformSlotDisplayList.length;o++)n=i[(r=s.deformSlotDisplayList[o]).slotIndex],r.apply(a,n),e[r.slotIndex]||(e[r.slotIndex]={}),e[r.slotIndex][r.attachment]=r.deformData}},a.getAnimNum=function(){return this._templet.getAnimationCount()},a.getAniNameByIndex=function(t){return this._templet.getAniNameByIndex(t)},a.getSlotByName=function(t){return this._boneSlotDic[t]},a.showSkinByName=function(t,e){void 0===e&&(e=!0),this.showSkinByIndex(this._templet.getSkinIndexByName(t),e)},a.showSkinByIndex=function(t,e){void 0===e&&(e=!0);for(var i=0;i<this._boneSlotArray.length;i++)this._boneSlotArray[i].showSlotData(null,e);if(this._templet.showSkinByIndex(this._boneSlotDic,t,e)){var a=this._templet.skinDataArray[t];this._skinIndex=t,this._skinName=a.name}this._clearCache()},a.showSlotSkinByIndex=function(t,e){if(0!=this._aniMode){var i=this.getSlotByName(t);i&&i.showDisplayByIndex(e),this._clearCache()}},a.showSlotSkinByName=function(t,e){if(0!=this._aniMode){var i=this.getSlotByName(t);i&&i.showDisplayByName(e),this._clearCache()}},a.replaceSlotSkinName=function(t,e,i){if(0!=this._aniMode){var a=this.getSlotByName(t);a&&a.replaceDisplayByName(e,i),this._clearCache()}},a.replaceSlotSkinByIndex=function(t,e,i){if(0!=this._aniMode){var a=this.getSlotByName(t);a&&a.replaceDisplayByIndex(e,i),this._clearCache()}},a.setSlotSkin=function(t,e){if(0!=this._aniMode){var i=this.getSlotByName(t);i&&i.replaceSkin(e),this._clearCache()}},a._clearCache=function(){if(1==this._aniMode)for(var t=0,e=this._graphicsCache.length;t<e;t++){for(var i=0,a=this._graphicsCache[t].length;i<a;i++){var s=this._graphicsCache[t][i];s!=this.graphics&&tt.recycle(s)}this._graphicsCache[t].length=0}},a.play=function(t,e,i,a,s,r){void 0===i&&(i=!0),void 0===a&&(a=0),void 0===s&&(s=0),void 0===r&&(r=!0),this._indexControl=!1;var n=-1,h=NaN;if(h=e?2147483647:0,"string"==typeof t)for(var o=0,u=this._templet.getAnimationCount();o<u;o++){var c=this._templet.getAnimation(o);if(c&&t==c.name){n=o;break}}else n=t;n>-1&&n<this.getAnimNum()&&(this._aniClipIndex=n,(i||this._pause||this._currAniIndex!=n)&&(this._currAniIndex=n,this._curOriginalData=new Float32Array(this._templet.getTotalkeyframesLength(n)),this._drawOrder=null,this._eventIndex=0,this._player.play(n,this._player.playbackRate,h,a,s),r&&this._templet.showSkinByIndex(this._boneSlotDic,this._skinIndex),this._pause&&(this._pause=!1,this._lastTime=l.now(),this.timer.frameLoop(1,this,this._update,null,!0)),this._update()))},a.stop=function(){this._pause||(this._pause=!0,this._player&&this._player.stop(!0),this.timer.clear(this,this._update))},a.playbackRate=function(t){this._player&&(this._player.playbackRate=t)},a.paused=function(){this._pause||(this._pause=!0,this._player&&(this._player.paused=!0),this.timer.clear(this,this._update))},a.resume=function(){this._indexControl=!1,this._pause&&(this._pause=!1,this._player&&(this._player.paused=!1),this._lastTime=l.now(),this.timer.frameLoop(1,this,this._update,null,!0))},a._getGrahicsDataWithCache=function(t,e){return this._graphicsCache[t][e]},a._setGrahicsDataWithCache=function(t,e,i){this._graphicsCache[t][e]=i},a.destroy=function(e){void 0===e&&(e=!0),t.prototype.destroy.call(this,e),this._templet=null,this._player&&this._player.offAll(),this._player=null,this._curOriginalData=null,this._boneMatrixArray.length=0,this._lastTime=0,this.timer.clear(this,this._update)},r(0,a,"url",function(){return this._aniPath},function(t){this.load(t)}),r(0,a,"index",function(){return this._index},function(t){this.player&&(this._index=t,this._player.currentTime=1e3*this._index/this._player.cacheFrameRate,this._indexControl=!0,this._update(!1))}),r(0,a,"total",function(){return this._templet&&this._player?this._total=Math.floor(this._templet.getAniDuration(this._player.currentAnimationClipIndex)/1e3*this._player.cacheFrameRate):this._total=-1,this._total}),r(0,a,"templet",function(){return this._templet}),r(0,a,"player",function(){return this._player}),e.useSimpleMeshInCanvas=!1,e}(M),rt=(function(t){function e(t){this._start=0,this._Pos=0,this._data=null,this._curIndex=0,this._preIndex=0,this._playIndex=0,this._playing=!1,this._ended=!0,this._count=0,this._ids=null,this._loadedImage={},this._idOfSprite=null,this._parentMovieClip=null,this._movieClipList=null,this._labels=null,this.basePath=null,this._atlasPath=null,this._url=null,this._isRoot=!1,this._completeHandler=null,this._endFrame=-1,this.interval=30,this.loop=!1,e.__super.call(this),this._ids={},this._idOfSprite=[],this._reset(),this._playing=!1,this._parentMovieClip=t,t?(this._isRoot=!1,this._movieClipList=t._movieClipList,this._movieClipList.push(this)):(this._movieClipList=[this],this._isRoot=!0,this._setUpNoticeType(1))}s(e,"laya.ani.swf.MovieClip",t);var a=e.prototype;a.destroy=function(e){void 0===e&&(e=!0),this._clear(),t.prototype.destroy.call(this,e)},a._setDisplay=function(e){t.prototype._setDisplay.call(this,e),this._isRoot&&this._$3__onDisplay(e)},a._$3__onDisplay=function(t){t?this.timer.loop(this.interval,this,this.updates,null,!0):this.timer.clear(this,this.updates)},a.updates=function(){if(!this._parentMovieClip){var t=0,e=0;for(e=this._movieClipList.length,t=0;t<e;t++)this._movieClipList[t]&&this._movieClipList[t]._update()}},a.addLabel=function(t,e){this._labels||(this._labels={}),this._labels[e]=t},a.removeLabel=function(t){if(t){if(!this._labels)for(var e in this._labels)if(this._labels[e]===t){delete this._labels[e];break}}else this._labels=null},a._update=function(){if(this._data&&this._playing){if(this._playIndex++,this._playIndex>=this._count){if(!this.loop)return this._playIndex--,void this.stop();this._playIndex=0}if(this._parse(this._playIndex),this._labels&&this._labels[this._playIndex]&&this.event("label",this._labels[this._playIndex]),-1!=this._endFrame&&this._endFrame==this._playIndex){if(this._endFrame=-1,null!=this._completeHandler){var t=this._completeHandler;this._completeHandler=null,t.run()}this.stop()}}},a.stop=function(){this._playing=!1},a.gotoAndStop=function(t){this.index=t,this.stop()},a._clear=function(){if(this.stop(),this._idOfSprite.length=0,!this._parentMovieClip){this.timer.clear(this,this.updates);var t=0,e=0;for(e=this._movieClipList.length,t=0;t<e;t++)this._movieClipList[t]!=this&&this._movieClipList[t]._clear();this._movieClipList.length=0}this._atlasPath&&p.clearRes(this._atlasPath);var i;for(i in this._loadedImage)this._loadedImage[i]&&(p.clearRes(i),this._loadedImage[i]=!1);this.removeChildren(),this.graphics=null,this._parentMovieClip=null},a.play=function(t,e){void 0===t&&(t=0),void 0===e&&(e=!0),this.loop=e,this._playing=!0,this._data&&this._displayFrame(t)},a._displayFrame=function(t){void 0===t&&(t=-1),-1!=t&&(this._curIndex>t&&this._reset(),this._parse(t))},a._reset=function(t){void 0===t&&(t=!0),t&&1!=this._curIndex&&this.removeChildren(),this._preIndex=this._curIndex=-1,this._Pos=this._start},a._parse=function(t){var i,a,s,r=0,n=0,h=0,l=!1,o=this._idOfSprite,u=this._data;for(this._ended&&this._reset(),u.pos=this._Pos,this._ended=!1,this._playIndex=t,this._curIndex>t&&t<this._preIndex&&(this._reset(!0),u.pos=this._Pos);this._curIndex<=t&&!this._ended;)switch(u.getUint16()){case 12:if(r=u.getUint16(),n=this._ids[u.getUint16()],this._Pos=u.pos,u.pos=n,0==(h=u.getUint8())){var c=u.getUint16();if(!(a=o[r])){a=o[r]=new M;var d=new M;d.loadImage(this.basePath+c+".png"),this._loadedImage[this.basePath+c+".png"]=!0,a.addChild(d),d.size(u.getFloat32(),u.getFloat32());var _=u._getMatrix();d.transform=_}a.alpha=1}else 1==h&&((i=o[r])||(o[r]=i=new e(this),i.interval=this.interval,i._ids=this._ids,i.basePath=this.basePath,i._setData(u,n),i._initState(),i.play(0)),i.alpha=1);u.pos=this._Pos;break;case 3:var p=o[u.getUint16()];p&&(this.addChild(p),p.zOrder=u.getUint16(),l=!0);break;case 4:(p=o[u.getUint16()])&&p.removeSelf();break;case 5:o[u.getUint16()][e._ValueList[u.getUint16()]]=u.getFloat32();break;case 6:o[u.getUint16()].visible=u.getUint8()>0;break;case 7:var f=(a=o[u.getUint16()]).transform||m.create();f.setTo(u.getFloat32(),u.getFloat32(),u.getFloat32(),u.getFloat32(),u.getFloat32(),u.getFloat32()),a.transform=f;break;case 8:o[u.getUint16()].setPos(u.getFloat32(),u.getFloat32());break;case 9:o[u.getUint16()].setSize(u.getFloat32(),u.getFloat32());break;case 10:o[u.getUint16()].alpha=u.getFloat32();break;case 11:o[u.getUint16()].setScale(u.getFloat32(),u.getFloat32());break;case 98:s=u.getString(),this.event(s),"stop"==s&&this.stop();break;case 99:this._curIndex=u.getUint16(),l&&this.updateZOrder();break;case 100:this._count=this._curIndex+1,this._ended=!0,this._playing&&(this.event("enterframe"),this.event("end"),this.event("complete")),this._reset(!1)}this._playing&&!this._ended&&this.event("enterframe"),this._Pos=u.pos},a._setData=function(t,e){this._data=t,this._start=e+3},a.load=function(t,e,a){void 0===e&&(e=!1),this._url=t=N.formatURL(t),e&&(this._atlasPath=a||t.split(".swf")[0]+".json"),this.stop(),this._clear(),this._movieClipList=[this];var s;s=[{url:t,type:"arraybuffer"}],this._atlasPath&&s.push({url:this._atlasPath,type:"atlas"}),i.loader.load(s,_.create(this,this._onLoaded))},a._onLoaded=function(){var t;(t=p.getRes(this._url))?(this.basePath=this._atlasPath?p.getAtlas(this._atlasPath).dir:this._url.split(".swf")[0]+"/image/",this._initData(t)):this.event("error","file not find")},a._initState=function(){this._reset(),this._ended=!1;var t=this._playing;for(this._playing=!1,this._curIndex=0;!this._ended;)this._parse(++this._curIndex);this._playing=t},a._initData=function(t){this._data=new o(t);var e=0,i=this._data.getUint16();for(e=0;e<i;e++)this._ids[this._data.getInt16()]=this._data.getInt32();this.interval=1e3/this._data.getUint16(),this._setData(this._data,this._ids[32767]),this._initState(),this.play(0),this.event("loaded"),this._parentMovieClip||this.timer.loop(this.interval,this,this.updates,null,!0)},a.playTo=function(t,e,i){this._completeHandler=i,this._endFrame=e,this.play(t,!1)},r(0,a,"index",function(){return this._playIndex},function(t){this._playIndex=t,this._data&&this._displayFrame(this._playIndex),this._labels&&this._labels[t]&&this.event("label",this._labels[t])}),r(0,a,"count",function(){return this._count}),r(0,a,"playing",function(){return this._playing}),r(0,a,"url",null,function(t){this.load(t)}),e._ValueList=["x","y","width","height","scaleX","scaleY","rotation","alpha"]}(M),function(t){function e(){this._mainTexture=null,this._textureJson=null,this._graphicsCache=[],this.srcBoneMatrixArr=[],this.ikArr=[],this.tfArr=[],this.pathArr=[],this.boneSlotDic={},this.bindBoneBoneSlotDic={},this.boneSlotArray=[],this.skinDataArray=[],this.skinDic={},this.subTextureDic={},this.isParseFail=!1,this.yReverseMatrix=null,this.drawOrderAniArr=[],this.eventAniArr=[],this.attachmentNames=null,this.deformAniArr=[],this._isDestroyed=!1,this._rate=30,this.isParserComplete=!1,this.aniSectionDic={},this._skBufferUrl=null,this._textureDic={},this._loadList=null,this._path=null,this.tMatrixDataLen=0,this.mRootBone=null,e.__super.call(this),this.skinSlotDisplayDataArr=[],this.mBoneArr=[]}s(e,"laya.ani.bone.Templet",t);var a=e.prototype;return a.loadAni=function(t){this._skBufferUrl=t,i.loader.load(t,_.create(this,this.onComplete),null,"arraybuffer")},a.onComplete=function(t){if(this._isDestroyed)this.destroy();else{var e=p.getRes(this._skBufferUrl);e?(this._path=this._skBufferUrl.slice(0,this._skBufferUrl.lastIndexOf("/"))+"/",this.parseData(null,e)):this.event("error","load failed:"+this._skBufferUrl)}},a.parseData=function(t,e,i){void 0===i&&(i=30),!this._path&&this.url&&(this._path=this.url.slice(0,this.url.lastIndexOf("/"))+"/"),this._mainTexture=t,this._mainTexture&&x.isWebGL&&t.bitmap&&(t.bitmap.enableMerageInAtlas=!1),this._rate=i,this.parse(e)},a.buildArmature=function(t){return void 0===t&&(t=0),new st(this,t)},a.parse=function(i){t.prototype.parse.call(this,i),this._endLoaded(),this._aniVersion!=e.LAYA_ANIMATION_VISION&&(console.log("[Error] 版本不一致，请使用IDE版本配套的重新导出"+this._aniVersion+"->"+e.LAYA_ANIMATION_VISION),this._loaded=!1),this.loaded?this._mainTexture?this._parsePublicExtData():this._parseTexturePath():(this.event("error",this),this.isParseFail=!0)},a._parseTexturePath=function(){if(this._isDestroyed)this.destroy();else{var t=0;this._loadList=[];var e,a=new o(this.getPublicExtData()),s=0,r=0,n=0,h=a.getInt32(),l=a.readUTFString(),u=l.split("\n");for(t=0;t<h;t++)e=this._path+u[2*t],l=u[2*t+1],a.getFloat32(),a.getFloat32(),s=a.getFloat32(),r=a.getFloat32(),n=a.getFloat32(),isNaN(n)?0:n,n=a.getFloat32(),isNaN(n)?0:n,n=a.getFloat32(),isNaN(n)?s:n,n=a.getFloat32(),isNaN(n)?r:n,-1==this._loadList.indexOf(e)&&this._loadList.push(e);i.loader.load(this._loadList,_.create(this,this._textureComplete))}},a._textureComplete=function(){for(var t,e,i=0,a=this._loadList.length;i<a;i++)e=this._loadList[i],t=this._textureDic[e]=p.getRes(e),x.isWebGL&&t&&t.bitmap&&(t.bitmap.enableMerageInAtlas=!1);this._parsePublicExtData()},a._parsePublicExtData=function(){var t=0,e=0,i=0,a=0,s=0;for(t=0,s=this.getAnimationCount();t<s;t++)this._graphicsCache.push([]);var r=!1;r="Dragon"!=this._aniClassName;var n,h,l=new o(this.getPublicExtData()),u=0,c=0,d=0,_=0,p=0,f=0,y=0,x=0,g=0,v=l.getInt32(),M=l.readUTFString(),D=M.split("\n");for(t=0;t<v;t++){if(n=this._mainTexture,h=this._path+D[2*t],M=D[2*t+1],null==this._mainTexture&&(n=this._textureDic[h]),!n)return this.event("error",this),void(this.isParseFail=!0);u=l.getFloat32(),c=l.getFloat32(),d=l.getFloat32(),_=l.getFloat32(),g=l.getFloat32(),p=isNaN(g)?0:g,g=l.getFloat32(),f=isNaN(g)?0:g,g=l.getFloat32(),y=isNaN(g)?d:g,g=l.getFloat32(),x=isNaN(g)?_:g,this.subTextureDic[M]=I.create(n,u,c,d,_,-p,-f,y,x)}this._mainTexture=n;var N,b=l.getUint16();for(t=0;t<b;t++)(N=[]).push(l.getUint16()),N.push(l.getUint16()),N.push(l.getUint16()),N.push(l.getUint16()),this.aniSectionDic[t]=N;var T,A,C,w,k,P=l.getInt16(),E={};for(t=0;t<P;t++)T=new S,0==t?k=T:T.root=k,T.d=r?-1:1,C=l.readUTFString(),w=l.readUTFString(),T.length=l.getFloat32(),1==l.getByte()&&(T.inheritRotation=!1),1==l.getByte()&&(T.inheritScale=!1),T.name=C,w&&((A=E[w])?A.addChild(T):this.mRootBone=T),E[C]=T,this.mBoneArr.push(T);this.tMatrixDataLen=l.getUint16();var Y,W=l.getUint16(),G=Math.floor(W/this.tMatrixDataLen),Z=this.srcBoneMatrixArr;for(t=0;t<G;t++)(Y=new Q).scX=l.getFloat32(),Y.skX=l.getFloat32(),Y.skY=l.getFloat32(),Y.scY=l.getFloat32(),Y.x=l.getFloat32(),Y.y=l.getFloat32(),8===this.tMatrixDataLen&&(Y.skewX=l.getFloat32(),Y.skewY=l.getFloat32()),Z.push(Y),(T=this.mBoneArr[t]).transform=Y;var j,$=l.getUint16(),J=0;for(t=0;t<$;t++){for(j=new K,J=l.getUint16(),e=0;e<J;e++)j.boneNames.push(l.readUTFString()),j.boneIndexs.push(l.getInt16());j.name=l.readUTFString(),j.targetBoneName=l.readUTFString(),j.targetBoneIndex=l.getInt16(),j.bendDirection=l.getFloat32(),j.mix=l.getFloat32(),j.isSpine=r,this.ikArr.push(j)}var tt,et=l.getUint16(),it=0;for(t=0;t<et;t++){for(tt=new H,it=l.getUint16(),e=0;e<it;e++)tt.boneIndexs.push(l.getInt16());tt.name=l.getUTFString(),tt.targetIndex=l.getInt16(),tt.rotateMix=l.getFloat32(),tt.translateMix=l.getFloat32(),tt.scaleMix=l.getFloat32(),tt.shearMix=l.getFloat32(),tt.offsetRotation=l.getFloat32(),tt.offsetX=l.getFloat32(),tt.offsetY=l.getFloat32(),tt.offsetScaleX=l.getFloat32(),tt.offsetScaleY=l.getFloat32(),tt.offsetShearY=l.getFloat32(),this.tfArr.push(tt)}var at,st=l.getUint16(),rt=0;for(t=0;t<st;t++){for((at=new V).name=l.readUTFString(),rt=l.getUint16(),e=0;e<rt;e++)at.bones.push(l.getInt16());at.target=l.readUTFString(),at.positionMode=l.readUTFString(),at.spacingMode=l.readUTFString(),at.rotateMode=l.readUTFString(),at.offsetRotation=l.getFloat32(),at.position=l.getFloat32(),at.spacing=l.getFloat32(),at.rotateMix=l.getFloat32(),at.translateMix=l.getFloat32(),this.pathArr.push(at)}var nt,ht,lt,ot,ut=0,ct=0,dt=0,_t=NaN,pt=0,ft=l.getInt16();for(t=0;t<ft;t++){var mt=l.getUint8(),yt={};this.deformAniArr.push(yt);for(var xt=0;xt<mt;xt++)for((nt=new B).skinName=l.getUTFString(),yt[nt.skinName]=nt,ut=l.getInt16(),e=0;e<ut;e++)for(ht=new U,nt.deformSlotDataList.push(ht),ct=l.getInt16(),i=0;i<ct;i++)for(lt=new L,ht.deformSlotDisplayList.push(lt),lt.slotIndex=l.getInt16(),lt.attachment=l.getUTFString(),dt=l.getInt16(),a=0;a<dt;a++)for(1==l.getByte()?lt.tweenKeyList.push(!0):lt.tweenKeyList.push(!1),_t=l.getFloat32(),lt.timeList.push(_t),ot=[],lt.vectices.push(ot),pt=l.getInt16(),s=0;s<pt;s++)ot.push(l.getFloat32())}var gt,vt,Mt=l.getInt16(),Dt=0,It=0;for(t=0;t<Mt;t++){for(Dt=l.getInt16(),gt=[],e=0;e<Dt;e++){for((vt=new R).time=l.getFloat32(),It=l.getInt16(),i=0;i<It;i++)vt.drawOrder.push(l.getInt16());gt.push(vt)}this.drawOrderAniArr.push(gt)}var Nt,bt,Tt=l.getInt16(),At=0;for(t=0;t<Tt;t++){for(At=l.getInt16(),Nt=[],e=0;e<At;e++)(bt=new O).name=l.getUTFString(),bt.intValue=l.getInt32(),bt.floatValue=l.getFloat32(),bt.stringValue=l.getUTFString(),bt.time=l.getFloat32(),Nt.push(bt);this.eventAniArr.push(Nt)}var Ct=l.getInt16();if(Ct>0)for(this.attachmentNames=[],t=0;t<Ct;t++)this.attachmentNames.push(l.getUTFString());var wt,St,Ft=l.getInt16();for(t=0;t<Ft;t++)(wt=new F).name=l.readUTFString(),wt.parent=l.readUTFString(),wt.attachmentName=l.readUTFString(),wt.srcDisplayIndex=wt.displayIndex=l.getInt16(),wt.templet=this,this.boneSlotDic[wt.name]=wt,null==(St=this.bindBoneBoneSlotDic[wt.parent])&&(this.bindBoneBoneSlotDic[wt.parent]=St=[]),St.push(wt),this.boneSlotArray.push(wt);var kt,Pt,Bt,Ut=l.readUTFString().split("\n"),Lt=0,Rt=l.getUint8(),Ot=0,Et=0,Kt=0,Yt=0,Wt=0,Vt=0,Xt=0;for(t=0;t<Rt;t++){for((kt=new X).name=Ut[Lt++],Ot=l.getUint8(),e=0;e<Ot;e++){for((Pt=new q).name=Ut[Lt++],wt=this.boneSlotDic[Pt.name],Et=l.getUint8(),i=0;i<Et;i++){if(Bt=new z,this.skinSlotDisplayDataArr.push(Bt),Bt.name=Ut[Lt++],Bt.attachmentName=Ut[Lt++],Bt.transform=new Q,Bt.transform.scX=l.getFloat32(),Bt.transform.skX=l.getFloat32(),Bt.transform.skY=l.getFloat32(),Bt.transform.scY=l.getFloat32(),Bt.transform.x=l.getFloat32(),Bt.transform.y=l.getFloat32(),Pt.displayArr.push(Bt),Bt.width=l.getFloat32(),Bt.height=l.getFloat32(),Bt.type=l.getUint8(),Bt.verLen=l.getUint16(),(P=l.getUint16())>0)for(Bt.bones=[],a=0;a<P;a++){var zt=l.getUint16();Bt.bones.push(zt)}if((Kt=l.getUint16())>0)for(Bt.uvs=[],a=0;a<Kt;a++)Bt.uvs.push(l.getFloat32());if((Yt=l.getUint16())>0)for(Bt.weights=[],a=0;a<Yt;a++)Bt.weights.push(l.getFloat32());if((Wt=l.getUint16())>0)for(Bt.triangles=[],a=0;a<Wt;a++)Bt.triangles.push(l.getUint16());if((Vt=l.getUint16())>0)for(Bt.vertices=[],a=0;a<Vt;a++)Bt.vertices.push(l.getFloat32());if((Xt=l.getUint16())>0)for(Bt.lengths=[],a=0;a<Xt;a++)Bt.lengths.push(l.getFloat32())}kt.slotArr.push(Pt)}this.skinDic[kt.name]=kt,this.skinDataArray.push(kt)}1==l.getUint8()?(this.yReverseMatrix=new m(1,0,0,-1,0,0),k&&k.setTempMatrix(this.yReverseMatrix)):k&&k.setTempMatrix(new m),this.showSkinByIndex(this.boneSlotDic,0),this.isParserComplete=!0,this.event("complete",this)},a.getTexture=function(t){var e=this.subTextureDic[t];return e||(e=this.subTextureDic[t.substr(0,t.length-1)]),null==e?this._mainTexture:e},a.showSkinByIndex=function(t,e,i){if(void 0===i&&(i=!0),e<0&&e>=this.skinDataArray.length)return!1;var a,s,r=0,n=0,h=this.skinDataArray[e];if(h){for(r=0,n=h.slotArr.length;r<n;r++)(s=h.slotArr[r])&&(a=t[s.name])&&(a.showSlotData(s,i),i&&"undefined"!=a.attachmentName&&"null"!=a.attachmentName?a.showDisplayByName(a.attachmentName):a.showDisplayByIndex(a.displayIndex));return!0}return!1},a.getSkinIndexByName=function(t){for(var e=0,i=this.skinDataArray.length;e<i;e++)if(this.skinDataArray[e].name==t)return e;return-1},a.getGrahicsDataWithCache=function(t,e){return this._graphicsCache[t][e]},a.setGrahicsDataWithCache=function(t,e,i){this._graphicsCache[t][e]=i},a.destroy=function(){this._isDestroyed=!0;var t;for(var i in this.subTextureDic)(t=this.subTextureDic[i])&&t.destroy();for(i in this._textureDic)(t=this._textureDic[i])&&t.destroy();for(var a=0,s=this.skinSlotDisplayDataArr.length;a<s;a++)this.skinSlotDisplayDataArr[a].destory();this.skinSlotDisplayDataArr.length=0,this.url&&delete e.TEMPLET_DICTIONARY[this.url],laya.resource.Resource.prototype.destroy.call(this)},a.getAniNameByIndex=function(t){var e=this.getAnimation(t);return e?e.name:null},r(0,a,"rate",function(){return this._rate},function(t){this._rate=t}),e.LAYA_ANIMATION_VISION="LAYAANIMATION:1.6.0",e.TEMPLET_DICTIONARY=null,e}(it))}(window,document,Laya),"function"==typeof define&&define.amd&&define("laya.core",["require","exports"],function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});for(var i in Laya){var a=Laya[i];a&&a.__isclass&&(e[i]=a)}});
!function(t,e,i){i.un,i.uns,i.static;var a=i.class,r=i.getset,n=(i.__newvec,laya.utils.Browser,laya.utils.Color),s=laya.filters.ColorFilterAction,l=laya.filters.webgl.ColorFilterActionGL,o=laya.filters.Filter,u=laya.filters.webgl.FilterActionGL,c=laya.maths.Matrix,h=(laya.maths.Rectangle,laya.renders.Render),f=(laya.renders.RenderContext,laya.webgl.resource.RenderTarget2D),_=laya.utils.RunDriver,d=(laya.webgl.shader.d2.ShaderDefines2D,laya.display.Sprite,laya.resource.Texture,laya.webgl.shader.d2.value.Value2D),g=function(){function t(){this.data=null}a(t,"laya.filters.FilterAction");var e=t.prototype;return i.imps(e,{"laya.filters.IFilterAction":!0}),e.apply=function(t){return null},t}(),y=function(){function t(){}return a(t,"laya.filters.WebGLFilter"),t.enable=function(){t.isInit||(t.isInit=!0,h.isWebGL&&(_.createFilterAction=function(t){var e;switch(t){case 32:e=new l;break;case 16:e=new p;break;case 8:e=new w}return e}))},t.isInit=!1,t.__init$=function(){_.createFilterAction=function(t){var e;switch(t){case 16:case 8:e=new g;break;case 32:e=new s}return e}},t}(),p=(function(t){function e(t){this.strength=NaN,this.strength_sig2_2sig2_gauss1=[],e.__super.call(this),void 0===t&&(t=4),h.isWebGL&&y.enable(),this.strength=t,this._action=_.createFilterAction(16),this._action.data=this}a(e,"laya.filters.BlurFilter",o);var i=e.prototype;i.callNative=function(t){t.conchModel&&t.conchModel.blurFilter&&t.conchModel.blurFilter(this.strength)},r(0,i,"action",function(){return this._action}),r(0,i,"type",function(){return 16})}(),function(t){function e(t,i,a,r){this._color=null,e.__super.call(this),this._elements=new Float32Array(9),void 0===i&&(i=4),void 0===a&&(a=6),void 0===r&&(r=6),h.isWebGL&&y.enable(),this._color=new n(t),this.blur=Math.min(i,20),this.offX=a,this.offY=r,this._action=_.createFilterAction(8),this._action.data=this}a(e,"laya.filters.GlowFilter",o);var i=e.prototype;i.getColor=function(){return this._color._color},i.callNative=function(t){t.conchModel&&t.conchModel.glowFilter&&t.conchModel.glowFilter(this._color.strColor,this._elements[4],this._elements[5],this._elements[6])},r(0,i,"type",function(){return 8}),r(0,i,"action",function(){return this._action}),r(0,i,"offY",function(){return this._elements[6]},function(t){this._elements[6]=t}),r(0,i,"offX",function(){return this._elements[5]},function(t){this._elements[5]=t}),r(0,i,"blur",function(){return this._elements[4]},function(t){this._elements[4]=t})}(),function(t){function e(){this.data=null,e.__super.call(this)}a(e,"laya.filters.webgl.BlurFilterActionGL",u);var i=e.prototype;return i.setValueMix=function(t){t.defines.add(this.data.type)},i.apply3d=function(t,e,i,a,r){var n=t.getValue("bounds"),s=d.create(1,0);s.setFilters([this.data]);c.EMPTY.identity(),i.ctx.drawTarget(t,0,0,n.width,n.height,c.EMPTY,"src",s),s.setFilters(null)},i.setValue=function(t){t.strength=this.data.strength;var e=this.data.strength/3,i=e*e;this.data.strength_sig2_2sig2_gauss1[0]=this.data.strength,this.data.strength_sig2_2sig2_gauss1[1]=i,this.data.strength_sig2_2sig2_gauss1[2]=2*i,this.data.strength_sig2_2sig2_gauss1[3]=1/(2*Math.PI*i),t.strength_sig2_2sig2_gauss1=this.data.strength_sig2_2sig2_gauss1},r(0,i,"typeMix",function(){return 16}),e}()),w=function(t){function e(){this.data=null,this._initKey=!1,this._textureWidth=0,this._textureHeight=0,e.__super.call(this)}a(e,"laya.filters.webgl.GlowFilterActionGL",u);var n=e.prototype;return i.imps(n,{"laya.filters.IFilterActionGL":!0}),n.setValueMix=function(t){},n.apply3d=function(t,e,i,a,r){var n=t.getValue("bounds");t.addValue("color",this.data.getColor());var s=n.width,l=n.height;this._textureWidth=s,this._textureHeight=l;var o,u=c.TEMP;return u.identity(),(o=d.create(1,0)).setFilters([this.data]),i.ctx.drawTarget(t,0,0,this._textureWidth,this._textureHeight,u,"src",o,null),o=d.create(1,0),i.ctx.drawTarget(t,0,0,this._textureWidth,this._textureHeight,u,"src",o),null},n.setSpriteWH=function(t){this._textureWidth=t.width,this._textureHeight=t.height},n.setValue=function(t){t.u_offsetX=this.data.offX,t.u_offsetY=-this.data.offY,t.u_strength=1,t.u_blurX=this.data.blur,t.u_blurY=this.data.blur,t.u_textW=this._textureWidth,t.u_textH=this._textureHeight,t.u_color=this.data.getColor()},r(0,n,"typeMix",function(){return 8}),e.tmpTarget=function(t,e,i,a,r){var n=t.getValue("bounds");t.getValue("out").end();var s=f.create(n.width,n.height);s.start();var l=t.getValue("color");l&&s.clear(l[0],l[1],l[2],0),t.addValue("tmpTarget",s)},e.startOut=function(t,e,i,a,r){t.getValue("tmpTarget").end();var n=t.getValue("out");n.start();var s=t.getValue("color");s&&n.clear(s[0],s[1],s[2],0)},e.recycleTarget=function(t,e,i,a,r){t.getValue("src");t.getValue("tmpTarget").recycle()},e}();i.__init([y])}(window,document,Laya),"function"==typeof define&&define.amd&&define("laya.core",["require","exports"],function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});for(var i in Laya){var a=Laya[i];a&&a.__isclass&&(e[i]=a)}});
!function(t,e,i){i.un,i.uns;var n=i.static,h=i.class,l=i.getset,s=(i.__newvec,laya.utils.Browser,laya.display.css.CSSStyle),r=laya.utils.ClassUtils,a=(laya.events.Event,laya.utils.HTMLChar),o=laya.net.Loader,d=(laya.display.Node,laya.maths.Rectangle),u=laya.renders.Render,c=(laya.renders.RenderContext,laya.renders.RenderSprite,laya.display.Sprite),f=laya.utils.Stat,_=laya.display.Text,g=laya.resource.Texture,y=laya.net.URL,p=laya.utils.Utils,m=function(){function t(){}return h(t,"laya.html.utils.HTMLParse"),t.parse=function(e,i,n){i=(i="<root>"+(i=i.replace(/<br>/g,"<br/>"))+"</root>").replace(t.spacePattern,t.char255);var h=p.parseXMLFromString(i);t._parseXML(e,h.childNodes[0].childNodes,n)},t._parseXML=function(e,i,n,h){var l=0,s=0;if(i.join||i.item)for(l=0,s=i.length;l<s;++l)t._parseXML(e,i[l],n,h);else{var a,o;if(3==i.nodeType){var d;return void(e instanceof laya.html.dom.HTMLDivElement?(null==i.nodeName&&(i.nodeName="#text"),o=i.nodeName.toLowerCase(),(d=i.textContent.replace(/^\s+|\s+$/g,"")).length>0&&(a=r.getInstance(o))&&(e.addChild(a),a.innerTEXT=d.replace(t.char255AndOneSpacePattern," "))):(d=i.textContent.replace(/^\s+|\s+$/g,"")).length>0&&(e.innerTEXT=d.replace(t.char255AndOneSpacePattern," ")))}if("#comment"==(o=i.nodeName.toLowerCase()))return;if(a=r.getInstance(o)){(a=e.addChild(a)).URI=n,a.href=h;var u=i.attributes;if(u&&u.length>0)for(l=0,s=u.length;l<s;++l){var c=u[l],f=c.nodeName,_=c.value;a._setAttributes(f,_)}t._parseXML(a,i.childNodes,n,a.href)}else t._parseXML(e,i.childNodes,n,h)}},t.char255=String.fromCharCode(255),t.spacePattern=/&nbsp;|&#160;/g,t.char255AndOneSpacePattern=new RegExp(String.fromCharCode(255)+"|(\\s+)","g"),t}(),w=function(){function t(){}return h(t,"laya.html.utils.Layout"),t.later=function(e){null==t._will&&(t._will=[],i.stage.frameLoop(1,null,function(){if(!(t._will.length<1)){for(var e=0;e<t._will.length;e++)laya.html.utils.Layout.layout(t._will[e]);t._will.length=0}})),t._will.push(e)},t.layout=function(e){if(!e||!e._style)return null;if(0==(512&e._style._type))return null;e.getStyle()._type&=-513;var i=t._multiLineLayout(e);return u.isConchApp&&e.layaoutCallNative&&e.layaoutCallNative(),i},t._multiLineLayout=function(e){function i(){I.y=C,C+=I.h+f,0==I.h&&(C+=g),I.mWidth=R,R=0,I=new x,H.push(I),I.h=0,T=0,W=!0,A=!1}if(_.RightToLeft)return t._multiLineLayout2(e);var n=new Array;e._addChildsToLayout(n);var h,l,s,r,a,o=0,d=n.length,u=e._getCSSStyle(),c=u.letterSpacing,f=u.leading,g=u.lineHeight,y=u._widthAuto()||!u.wordWrap,p=y?999999:e.width,m=(e.height,0),w=u.italic?u.fontSize/3:0,v=u._getAlign(),S=u._getValign(),L=0!==S||0!==v||0!=g,T=0,C=0,E=0,M=0,H=new Array,I=H[0]=new x,A=!1,N=!1;I.h=0,u.italic&&(p-=u.fontSize/3);var R=0,W=!0;for(o=0;o<d;o++)if(null!=(h=n[o]))if(W=!1,h instanceof laya.html.dom.HTMLBrElement)i(),I.y=C;else{if(h._isChar()){if((r=h).isWord)A=N||"\n"===r.char,I.wordStartIndex=I.elements.length;else{if(H.length>0&&T+E>p&&I.wordStartIndex>0){var U=0;U=I.elements.length-I.wordStartIndex+1,I.elements.length=I.wordStartIndex,o-=U,i();continue}A=!1,R+=r.width}E=r.width+c,M=r.height,N=!1,(A=A||T+E>p)&&i(),I.minTextHeight=Math.min(I.minTextHeight,h.height)}else a=h,s=(l=h._getCSSStyle()).padding,0===l._getCssFloat()||(L=!0),A=N||l.lineElement,E=a.width*a._style._tf.scaleX+s[1]+s[3]+c,M=a.height*a._style._tf.scaleY+s[0]+s[2],N=l.lineElement,(A=A||T+E>p&&l.wordWrap)&&i();I.elements.push(h),I.h=Math.max(I.h,M),h.x=T,h.y=C,T+=E,I.w=T-c,I.y=C,m=Math.max(T+w,m)}else W||(T+=t.DIV_ELEMENT_PADDING),I.wordStartIndex=I.elements.length;if(C=I.y+I.h,L){var b=0,P=p;for(y&&e.width>0&&(P=e.width),o=0,d=H.length;o<d;o++)H[o].updatePos(0,P,o,b,v,S,g),b+=Math.max(g,H[o].h+f);C=b}return y&&(e.width=m),C>e.height&&(e.height=C),[m,C]},t._multiLineLayout2=function(e){function i(){H.y=T,T+=H.h+f,0==H.h&&(T+=_),H.mWidth=N,N=0,H=new x,M.push(H),H.h=0,L=0,R=!0,I=!1}var n=new Array;e._addChildsToLayout(n);var h,l,s,r,a,o=0,d=n.length,u=e._getCSSStyle(),c=u.letterSpacing,f=u.leading,_=u.lineHeight,g=u._widthAuto()||!u.wordWrap,y=g?999999:e.width,p=(e.height,0),m=u.italic?u.fontSize/3:0,w=2-u._getAlign(),v=u._getValign(),S=0!==v||0!==w||0!=_,L=0,T=0,C=0,E=0,M=new Array,H=M[0]=new x,I=!1,A=!1;H.h=0,u.italic&&(y-=u.fontSize/3);var N=0,R=!0;for(o=0;o<d;o++)if(null!=(h=n[o]))if(R=!1,h instanceof laya.html.dom.HTMLBrElement)i(),H.y=T;else{if(h._isChar()){if((r=h).isWord)I=A||"\n"===r.char,H.wordStartIndex=H.elements.length;else{if(M.length>0&&L+C>y&&H.wordStartIndex>0){var W=0;W=H.elements.length-H.wordStartIndex+1,H.elements.length=H.wordStartIndex,o-=W,i();continue}I=!1,N+=r.width}C=r.width+c,E=r.height,A=!1,(I=I||L+C>y)&&i(),H.minTextHeight=Math.min(H.minTextHeight,h.height)}else a=h,s=(l=h._getCSSStyle()).padding,0===l._getCssFloat()||(S=!0),I=A||l.lineElement,C=a.width*a._style._tf.scaleX+s[1]+s[3]+c,E=a.height*a._style._tf.scaleY+s[0]+s[2],A=l.lineElement,(I=I||L+C>y&&l.wordWrap)&&i();H.elements.push(h),H.h=Math.max(H.h,E),h.x=L,h.y=T,L+=C,H.w=L-c,H.y=T,p=Math.max(L+m,p)}else R||(L+=t.DIV_ELEMENT_PADDING),H.wordStartIndex=H.elements.length;if(T=H.y+H.h,S){var U=0,b=y;for(o=0,d=M.length;o<d;o++)M[o].updatePos(0,b,o,U,w,v,_),U+=Math.max(_,M[o].h+f);T=U}for(g&&(e.width=p),T>e.height&&(e.height=T),o=0,d=M.length;o<d;o++)M[o].revertOrder(y);return[p,T]},t._will=null,t.DIV_ELEMENT_PADDING=0,t}(),x=function(){function t(){this.x=0,this.y=0,this.w=0,this.h=0,this.wordStartIndex=0,this.minTextHeight=99999,this.mWidth=0,this.elements=new Array}h(t,"laya.html.utils.LayoutLine");var e=t.prototype;return e.updatePos=function(t,e,i,n,h,l,s){var r,a=0;this.elements.length>0&&(a=(r=this.elements[this.elements.length-1]).x+r.width-this.elements[0].x);var o=0,d=NaN;1===h&&(o=(e-a)/2),2===h&&(o=e-a),0===s||0!=l||(l=1);for(var u=0,c=this.elements.length;u<c;u++){var f=(r=this.elements[u])._getCSSStyle();switch(0!==o&&(r.x+=o),f._getValign()){case 0:r.y=n;break;case 1:var _=0;99999!=this.minTextHeight&&(_=this.minTextHeight);var g=(_+s)/2;g=Math.max(g,this.h),d=(laya.html.dom.HTMLImageElement,n+g-r.height),r.y=d;break;case 2:r.y=n+(s-r.height)}}},e.revertOrder=function(t){var e;if(this.elements.length>0){var i=0,n=0;for(n=this.elements.length,i=0;i<n;i++)(e=this.elements[i]).x=t-e.x-e.width}},t}(),v=function(t){function e(){this.URI=null,this._href=null,e.__super.call(this),this._text=e._EMPTYTEXT,this.setStyle(new s(this)),this._getCSSStyle().valign="middle",this.mouseEnabled=!0}h(e,"laya.html.dom.HTMLElement",t);var n=e.prototype;return n.layaoutCallNative=function(){var t=0;if(this._childs&&(t=this._childs.length)>0)for(var e=0;e<t;e++)this._childs[e].layaoutCallNative&&this._childs[e].layaoutCallNative();var i=this._getWords();i?laya.html.dom.HTMLElement.fillWords(this,i,0,0,this.style.font,this.style.color,this.style.underLine):this.graphics.clear()},n.appendChild=function(t){return this.addChild(t)},n._getWords2=function(){var t=this._text.text;if(!t||0===t.length)return null;var e,i,n=0,h=0;if(this._text.drawWords)i=this._text.drawWords;else{for(h=(e=t.split(" ")).length-1,i=[],n=0;n<h;n++)i.push(e[n]," ");h>=0&&i.push(e[h]),this._text.drawWords=i}var l=this._text.words;if(l&&l.length===i.length)return l;null===l&&(this._text.words=l=[]),l.length=i.length;var s,r=this.style,o=r.font;for(n=0,h=i.length;n<h;n++){s=p.measureText(i[n],o);var d=l[n]=new a(i[n],s.width,s.height||r.fontSize,r);if(d.char.length>1&&(d.charNum=d.char),this.href){var u=new c;this.addChild(u),d.setSprite(u)}}return l},n._getWords=function(){if(!_.CharacterCache)return this._getWords2();var t=this._text.text;if(!t||0===t.length)return null;var e=this._text.words;if(e&&e.length===t.length)return e;null===e&&(this._text.words=e=[]),e.length=t.length;for(var i,n=this.style,h=n.font,l=0,s=t.length;l<s;l++){i=p.measureText(t.charAt(l),h);var r=e[l]=new a(t.charAt(l),i.width,i.height||n.fontSize,n);if(this.href){var o=new c;this.addChild(o),r.setSprite(o)}}return e},n.showLinkSprite=function(){var t=this._text.words;if(t)for(var e,i,n=[],h=0;h<t.length;h++)i=t[h],(e=new c).graphics.drawRect(0,0,i.width,i.height,"#ff0000"),e.width=i.width,e.height=i.height,this.addChild(e),n.push(e)},n._layoutLater=function(){var t=this.style;512&t._type||(t.widthed(this)&&(this._childs.length>0||null!=this._getWords())&&t.block?(w.later(this),t._type|=512):this.parent&&this.parent._layoutLater())},n._setAttributes=function(e,i){switch(e){case"style":return void this.style.cssText(i);case"class":return void(this.className=i)}t.prototype._setAttributes.call(this,e,i)},n.updateHref=function(){if(null!=this._href){var t=this._getWords();if(t)for(var e,i,n=0;n<t.length;n++)(i=(e=t[n]).getSprite())&&(i.size(e.width,e.height),i.on("click",this,this.onLinkHandler))}},n.onLinkHandler=function(t){switch(t.type){case"click":for(var e=this;e;)e.event("link",[this.href]),e=e.parent}},n.formatURL=function(t){return this.URI?y.formatURL(t,this.URI?this.URI.path:null):t},l(0,n,"href",function(){return this._href},function(t){this._href=t,null!=t&&(this._getCSSStyle().underLine=1,this.updateHref())}),l(0,n,"color",null,function(t){this.style.color=t}),l(0,n,"onClick",null,function(t){i._runScript("fn=function(event){"+t+";}"),this.on("click",this,void 0)}),l(0,n,"id",null,function(t){L.document.setElementById(t,this)}),l(0,n,"innerTEXT",function(){return this._text.text},function(t){this.text=t}),l(0,n,"style",function(){return this._style}),l(0,n,"text",function(){return this._text.text},function(t){this._text==e._EMPTYTEXT?this._text={text:t,words:null}:(this._text.text=t,this._text.words&&(this._text.words.length=0)),u.isConchApp&&this.layaoutCallNative(),this._renderType|=2048,this.repaint(),this.updateHref()}),l(0,n,"parent",t.prototype._$get_parent,function(t){if(t instanceof laya.html.dom.HTMLElement){var e=t;this.URI||(this.URI=e.URI),this.style.inherit(e.style)}i.superSet(c,this,"parent",t)}),l(0,n,"className",null,function(t){this.style.attrs(L.document.styleSheets["."+t])}),e.fillWords=function(t,e,i,n,h,l,s){t.graphics.clear();for(var r=0,a=e.length;r<a;r++){var o=e[r];t.graphics.fillText(o.char,o.x+i,o.y+n,h,l,"left",s)}},e._EMPTYTEXT={text:null,words:null},e}(c),S=(function(t){function e(){e.__super.call(this),this.style.lineElement=!0,this.style.block=!0}h(e,"laya.html.dom.HTMLBrElement",v)}(),function(t){function e(){this.contextHeight=NaN,this.contextWidth=NaN,e.__super.call(this),this.style.block=!0,this.style.lineElement=!0,this.style.width=200,this.style.height=200}h(e,"laya.html.dom.HTMLDivElement",t);var n=e.prototype;return n.appendHTML=function(t){m.parse(this,t,this.URI),this.layout()},n._addChildsToLayout=function(t){var e=this._getWords();if(null==e&&0==this._childs.length)return!1;e&&e.forEach(function(e){t.push(e)});for(var i=!0,n=0,h=this._childs.length;n<h;n++){var l=this._childs[n];i?i=!1:t.push(null),l._addToLayout(t)}return!0},n._addToLayout=function(t){this.layout()},n.layout=function(){if(this.style){this.style._type|=512;var t=w.layout(this);if(t){this._$P.mHtmlBounds||this._set$P("mHtmlBounds",new d);var e=this._$P.mHtmlBounds;e.x=e.y=0,e.width=this.contextWidth=t[0],e.height=this.contextHeight=t[1],this.setBounds(e)}}},l(0,n,"height",function(){return this._height?this._height:this.contextHeight},t.prototype._$set_height),l(0,n,"innerHTML",null,function(t){this.destroyChildren(),this.appendHTML(t)}),l(0,n,"width",function(){return this._width?this._width:this.contextWidth},function(t){var e=!1;e=0===t?t!=this._width:t!=this.width,i.superSet(v,this,"width",t),e&&this.layout()}),e}(v)),L=function(t){function e(){this.all=new Array,this.styleSheets=s.styleSheets,e.__super.call(this)}h(e,"laya.html.dom.HTMLDocument",v);var i=e.prototype;return i.getElementById=function(t){return this.all[t]},i.setElementById=function(t,e){this.all[t]=e},n(e,["document",function(){return this.document=new e}]),e}();(function(t){function e(){this._tex=null,this._url=null,this._renderArgs=[],e.__super.call(this),this.style.block=!0}h(e,"laya.html.dom.HTMLImageElement",v);var i=e.prototype;i._addToLayout=function(t){!this._style.absolute&&t.push(this)},i.render=function(t,e,i){!this._tex||!this._tex.loaded||!this._tex.loaded||this._width<1||this._height<1||(f.spriteCount++,this._renderArgs[0]=this._tex,this._renderArgs[1]=this.x,this._renderArgs[2]=this.y,this._renderArgs[3]=this.width||this._tex.width,this._renderArgs[4]=this.height||this._tex.height,t.ctx.drawTexture2(e,i,this.style.translateX,this.style.translateY,this.transform,this.style.alpha,this.style.blendMode,this._renderArgs))},i.layaoutCallNative=function(){var t=0;if(this._childs&&(t=this._childs.length)>0)for(var e=0;e<t;e++)this._childs[e].layaoutCallNative&&this._childs[e].layaoutCallNative()},l(0,i,"src",null,function(t){function e(){var t=i._style;t.widthed(i)||i._tex.width,t.heighted(i)||i._tex.height;t.widthed(i)||i._width==i._tex.width||(i.width=i._tex.width,i.parent&&i.parent._layoutLater()),t.heighted(i)||i._height==i._tex.height||(i.height=i._tex.height,i.parent&&i.parent._layoutLater()),u.isConchApp&&(i._renderArgs[0]=i._tex,i._renderArgs[1]=i.x,i._renderArgs[2]=i.y,i._renderArgs[3]=i.width||i._tex.width,i._renderArgs[4]=i.height||i._tex.height,i.graphics.drawTexture(i._tex,0,0,i._renderArgs[3],i._renderArgs[4])),i.repaint(),i.parentRepaint()}var i=this;if(t=this.formatURL(t),this._url!=t){this._url=t;var n=this._tex=o.getRes(t);n||(this._tex=n=new g,n.load(t),o.cacheRes(t,n)),n.loaded?e():n.on("loaded",null,e)}})})(),function(t){function e(){this.type=null,e.__super.call(this),this.visible=!1}h(e,"laya.html.dom.HTMLLinkElement",t);var i=e.prototype;i._onload=function(t){switch(this.type){case"text/css":s.parseCSS(t,this.URI)}},l(0,i,"href",t.prototype._$get_href,function(t){var e=this;t=this.formatURL(t),this.URI=new y(t);var i=new o;i.once("complete",null,function(t){e._onload(t)}),i.load(t,"text")}),e._cuttingStyle=new RegExp("((@keyframes[\\s\\t]+|)(.+))[\\t\\n\\r\\s]*{","g")}(v),function(t){function e(){e.__super.call(this),this.visible=!1}h(e,"laya.html.dom.HTMLStyleElement",t);l(0,e.prototype,"text",t.prototype._$get_text,function(t){s.parseCSS(t,null)})}(v),function(t){function e(){e.__super.call(this),this._getCSSStyle().valign="middle"}h(e,"laya.html.dom.HTMLIframeElement",t);l(0,e.prototype,"href",t.prototype._$get_href,function(t){var e=this;t=this.formatURL(t);var i=new o;i.once("complete",null,function(i){var n=e.URI;e.URI=new y(t),e.innerHTML=i,!n||(e.URI=n)}),i.load(t,"text")})}(S)}(window,document,Laya),"function"==typeof define&&define.amd&&define("laya.core",["require","exports"],function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});for(var i in Laya){var n=Laya[i];n&&n.__isclass&&(e[i]=n)}});
!function(t,i,e){e.un,e.uns;var s=e.static,h=e.class,n=e.getset,o=(e.__newvec,laya.display.Animation),r=(laya.utils.Browser,laya.utils.ClassUtils),l=laya.filters.ColorFilter,a=laya.utils.Ease,c=laya.events.Event,u=(laya.events.EventDispatcher,laya.display.css.Font),_=laya.display.FrameAnimation,d=laya.display.Graphics,f=laya.utils.Handler,p=laya.display.Input,g=laya.net.Loader,m=(laya.display.Node,laya.maths.Point),y=laya.maths.Rectangle,v=laya.renders.Render,C=laya.display.Sprite,b=laya.display.Text,S=laya.resource.Texture,w=laya.utils.Tween,x=laya.utils.Utils,B=laya.utils.WeakObject;e.interface("laya.ui.IItem"),e.interface("laya.ui.IRender"),e.interface("laya.ui.ISelect"),e.interface("laya.ui.IComponent"),e.interface("laya.ui.IBox","IComponent");var k=function(){function t(){this.enable=!1,this.top=NaN,this.bottom=NaN,this.left=NaN,this.right=NaN,this.centerX=NaN,this.centerY=NaN,this.anchorX=NaN,this.anchorY=NaN}return h(t,"laya.ui.LayoutStyle"),s(t,["EMPTY",function(){return this.EMPTY=new t}]),t}(),I=function(){function t(){}return h(t,"laya.ui.Styles"),t.labelColor="#000000",t.buttonStateNum=3,t.scrollBarMinNum=15,t.scrollBarDelayTime=500,s(t,["defaultSizeGrid",function(){return this.defaultSizeGrid=[4,4,4,4,0]},"labelPadding",function(){return this.labelPadding=[2,2,2,2]},"inputLabelPadding",function(){return this.inputLabelPadding=[1,1,1,3]},"buttonLabelColors",function(){return this.buttonLabelColors=["#32556b","#32cc6b","#ff0000","#C0C0C0"]},"comboBoxItemColors",function(){return this.comboBoxItemColors=["#5e95b6","#ffffff","#000000","#8fa4b1","#ffffff"]}]),t}(),L=function(){function t(){}return h(t,"laya.ui.UIUtils"),t.fillArray=function(t,i,e){var s=t.concat();if(i)for(var h=i.split(","),n=0,o=Math.min(s.length,h.length);n<o;n++){var r=h[n];s[n]="true"==r||"false"!=r&&r,null!=e&&(s[n]=e(r))}return s},t.toColor=function(t){return x.toHexColor(t)},t.gray=function(i,e){void 0===e&&(e=!0),e?t.addFilter(i,t.grayFilter):t.clearFilter(i,l)},t.addFilter=function(t,i){var e=t.filters||[];e.push(i),t.filters=e},t.clearFilter=function(t,i){var s=t.filters;if(null!=s&&s.length>0){for(var h=s.length-1;h>-1;h--){var n=s[h];e.__typeof(n,i)&&s.splice(h,1)}t.filters=s}},t._getReplaceStr=function(i){return t.escapeSequence[i]},t.adptString=function(i){return i.replace(/\\(\w)/g,t._getReplaceStr)},t.getBindFun=function(i){var s=t._funMap.get(i);if(null==s){var h='"'+i+'"',n="(function(data){if(data==null)return;with(data){try{\nreturn "+(h=h.replace(/^"\${|}"$/g,"").replace(/\${/g,'"+').replace(/}/g,'+"'))+"\n}catch(e){}}})";s=e._runScript(n),t._funMap.set(i,s)}return s},s(t,["grayFilter",function(){return this.grayFilter=new l([.3086,.6094,.082,0,0,.3086,.6094,.082,0,0,.3086,.6094,.082,0,0,0,0,0,1,0])},"escapeSequence",function(){return this.escapeSequence={"\\n":"\n","\\t":"\t"}},"_funMap",function(){return this._funMap=new B}]),t}(),M=function(){function t(){}return h(t,"UIConfig"),t.touchScrollEnable=!0,t.mouseWheelEnable=!0,t.showButtons=!0,t.popupBgColor="#000000",t.popupBgAlpha=.5,t.closeDialogOnSide=!0,t}(),z=function(t){function i(){this.autoCacheCmd=!0,this._width=0,this._height=0,this._source=null,this._sizeGrid=null,this._isChanged=!1,this._offset=null,i.__super.call(this)}h(i,"laya.ui.AutoBitmap",t);var s=i.prototype;return s.destroy=function(){t.prototype.destroy.call(this),this._source=null,this._sizeGrid=null,this._offset=null},s._setChanged=function(){this._isChanged||(this._isChanged=!0,e.timer.callLater(this,this.changeSource))},s.changeSource=function(){this._isChanged=!1;var t=this._source;if(t&&t.bitmap){var e=this.width,s=this.height,h=this._sizeGrid,n=t.sourceWidth,o=t.sourceHeight;if(!h||n===e&&o===s)this.cleanByTexture(t,this._offset?this._offset[0]:0,this._offset?this._offset[1]:0,e,s);else{t.$_GID||(t.$_GID=x.getGID());var r=t.$_GID+"."+e+"."+s+"."+h.join(".");if(x.isOKCmdList(B.I.get(r)))return void(this.cmds=B.I.get(r));this.clear();var l=h[0],a=h[1],c=h[2],u=h[3],_=h[4],d=!1;if(e==n&&(u=a=0),s==o&&(l=c=0),u+a>e){var f=e;d=!0,e=u+a,this.save(),this.clipRect(0,0,f,s)}u&&l&&this.drawTexture(i.getTexture(t,0,0,u,l),0,0,u,l),a&&l&&this.drawTexture(i.getTexture(t,n-a,0,a,l),e-a,0,a,l),u&&c&&this.drawTexture(i.getTexture(t,0,o-c,u,c),0,s-c,u,c),a&&c&&this.drawTexture(i.getTexture(t,n-a,o-c,a,c),e-a,s-c,a,c),l&&this.drawBitmap(_,i.getTexture(t,u,0,n-u-a,l),u,0,e-u-a,l),c&&this.drawBitmap(_,i.getTexture(t,u,o-c,n-u-a,c),u,s-c,e-u-a,c),u&&this.drawBitmap(_,i.getTexture(t,0,l,u,o-l-c),0,l,u,s-l-c),a&&this.drawBitmap(_,i.getTexture(t,n-a,l,a,o-l-c),e-a,l,a,s-l-c),this.drawBitmap(_,i.getTexture(t,u,l,n-u-a,o-l-c),u,l,e-u-a,s-l-c),d&&this.restore(),this.autoCacheCmd&&!v.isConchApp&&B.I.set(r,this.cmds)}this._repaint()}},s.drawBitmap=function(t,i,e,s,h,n){void 0===h&&(h=0),void 0===n&&(n=0),h<.1||n<.1||(!t||i.width==h&&i.height==n?this.drawTexture(i,e,s,h,n):this.fillTexture(i,e,s,h,n))},s.clear=function(i){void 0===i&&(i=!0),t.prototype.clear.call(this,!1)},n(0,s,"sizeGrid",function(){return this._sizeGrid},function(t){this._sizeGrid=t,this._setChanged()}),n(0,s,"width",function(){return this._width?this._width:this._source?this._source.sourceWidth:0},function(t){this._width!=t&&(this._width=t,this._setChanged())}),n(0,s,"height",function(){return this._height?this._height:this._source?this._source.sourceHeight:0},function(t){this._height!=t&&(this._height=t,this._setChanged())}),n(0,s,"source",function(){return this._source},function(t){t?(this._source=t,this._setChanged()):(this._source=null,this.clear())}),i.getTexture=function(t,i,e,s,h){s<=0&&(s=1),h<=0&&(h=1),t.$_GID||(t.$_GID=x.getGID());var n=t.$_GID+"."+i+"."+e+"."+s+"."+h,o=B.I.get(n);return o&&o.source||(o=S.createFromTexture(t,i,e,s,h),B.I.set(n,o)),o},i}(d),T=(function(t){function i(){i.__super.call(this)}h(i,"laya.ui.UIEvent",c),i.SHOW_TIP="showtip",i.HIDE_TIP="hidetip"}(),function(t){function i(){this._comXml=null,this._dataSource=null,this._toolTip=null,this._tag=null,this._disabled=!1,this._gray=!1,this.layoutEnabled=!0,i.__super.call(this),this._layout=k.EMPTY,this.preinitialize(),this.createChildren(),this.initialize()}h(i,"laya.ui.Component",t);var s=i.prototype;return e.imps(s,{"laya.ui.IComponent":!0}),s.destroy=function(i){void 0===i&&(i=!0),t.prototype.destroy.call(this,i),this._dataSource=this._layout=null,this._tag=null,this._toolTip=null},s.preinitialize=function(){},s.createChildren=function(){},s.initialize=function(){},s.callLater=function(t,i){e.timer.callLater(this,t,i)},s.runCallLater=function(t){e.timer.runCallLater(this,t)},s.commitMeasure=function(){},s.changeSize=function(){this.event("resize")},s.getLayout=function(){return this._layout===k.EMPTY&&(this._layout=new k),this._layout},s._setLayoutEnabled=function(t){this._layout&&this._layout.enable!=t&&(this._layout.enable=t,this.on("added",this,this.onAdded),this.on("removed",this,this.onRemoved),this.parent&&this.onAdded())},s.onRemoved=function(){this.parent.off("resize",this,this.onCompResize)},s.onAdded=function(){this.parent.on("resize",this,this.onCompResize),this.resetLayoutX(),this.resetLayoutY()},s.onCompResize=function(){this._layout&&this._layout.enable&&(this.resetLayoutX(),this.resetLayoutY())},s.resetLayoutX=function(){var t=this._layout;if(isNaN(t.anchorX)||(this.pivotX=t.anchorX*this.width),this.layoutEnabled){var i=this.parent;i&&(isNaN(t.centerX)?isNaN(t.left)?isNaN(t.right)||(this.x=Math.round(i.width-this.displayWidth-t.right+this.pivotX*this.scaleX)):(this.x=Math.round(t.left+this.pivotX*this.scaleX),isNaN(t.right)||(this.width=(i._width-t.left-t.right)/(this.scaleX||.01))):this.x=Math.round(.5*(i.width-this.displayWidth)+t.centerX+this.pivotX*this.scaleX))}},s.resetLayoutY=function(){var t=this._layout;if(isNaN(t.anchorY)||(this.pivotY=t.anchorY*this.height),this.layoutEnabled){var i=this.parent;i&&(isNaN(t.centerY)?isNaN(t.top)?isNaN(t.bottom)||(this.y=Math.round(i.height-this.displayHeight-t.bottom+this.pivotY*this.scaleY)):(this.y=Math.round(t.top+this.pivotY*this.scaleY),isNaN(t.bottom)||(this.height=(i._height-t.top-t.bottom)/(this.scaleY||.01))):this.y=Math.round(.5*(i.height-this.displayHeight)+t.centerY+this.pivotY*this.scaleY))}},s.onMouseOver=function(t){e.stage.event("showtip",this._toolTip)},s.onMouseOut=function(t){e.stage.event("hidetip",this._toolTip)},n(0,s,"displayWidth",function(){return this.width*this.scaleX}),n(0,s,"width",function(){return this._width?this._width:this.measureWidth},function(t){this._width!=t&&(this._width=t,this.conchModel&&this.conchModel.size(this._width,this._height),this.callLater(this.changeSize),!this._layout.enable||isNaN(this._layout.centerX)&&isNaN(this._layout.right)&&isNaN(this._layout.anchorX)||this.resetLayoutX())}),n(0,s,"measureWidth",function(){var t=0;this.commitMeasure();for(var i=this.numChildren-1;i>-1;i--){var e=this.getChildAt(i);e.visible&&(t=Math.max(e.x+e.width*e.scaleX,t))}return t}),n(0,s,"displayHeight",function(){return this.height*this.scaleY}),n(0,s,"height",function(){return this._height?this._height:this.measureHeight},function(t){this._height!=t&&(this._height=t,this.conchModel&&this.conchModel.size(this._width,this._height),this.callLater(this.changeSize),!this._layout.enable||isNaN(this._layout.centerY)&&isNaN(this._layout.bottom)&&isNaN(this._layout.anchorY)||this.resetLayoutY())}),n(0,s,"dataSource",function(){return this._dataSource},function(t){this._dataSource=t;for(var i in this._dataSource)this.hasOwnProperty(i)&&"function"!=typeof this[i]&&(this[i]=this._dataSource[i])}),n(0,s,"scaleY",t.prototype._$get_scaleY,function(t){e.superGet(C,this,"scaleY")!=t&&(e.superSet(C,this,"scaleY",t),this.callLater(this.changeSize),this._layout.enable&&this.resetLayoutY())}),n(0,s,"measureHeight",function(){var t=0;this.commitMeasure();for(var i=this.numChildren-1;i>-1;i--){var e=this.getChildAt(i);e.visible&&(t=Math.max(e.y+e.height*e.scaleY,t))}return t}),n(0,s,"scaleX",t.prototype._$get_scaleX,function(t){e.superGet(C,this,"scaleX")!=t&&(e.superSet(C,this,"scaleX",t),this.callLater(this.changeSize),this._layout.enable&&this.resetLayoutX())}),n(0,s,"top",function(){return this._layout.top},function(t){t!=this._layout.top&&(this.getLayout().top=t,this._setLayoutEnabled(!0)),this.resetLayoutY()}),n(0,s,"bottom",function(){return this._layout.bottom},function(t){t!=this._layout.bottom&&(this.getLayout().bottom=t,this._setLayoutEnabled(!0)),this.resetLayoutY()}),n(0,s,"left",function(){return this._layout.left},function(t){t!=this._layout.left&&(this.getLayout().left=t,this._setLayoutEnabled(!0)),this.resetLayoutX()}),n(0,s,"right",function(){return this._layout.right},function(t){t!=this._layout.right&&(this.getLayout().right=t,this._setLayoutEnabled(!0)),this.resetLayoutX()}),n(0,s,"centerX",function(){return this._layout.centerX},function(t){t!=this._layout.centerX&&(this.getLayout().centerX=t,this._setLayoutEnabled(!0)),this.resetLayoutX()}),n(0,s,"centerY",function(){return this._layout.centerY},function(t){t!=this._layout.centerY&&(this.getLayout().centerY=t,this._setLayoutEnabled(!0)),this.resetLayoutY()}),n(0,s,"anchorX",function(){return this._layout.anchorX},function(t){t!=this._layout.anchorX&&(this.getLayout().anchorX=t,this._setLayoutEnabled(!0)),this.resetLayoutX()}),n(0,s,"anchorY",function(){return this._layout.anchorY},function(t){t!=this._layout.anchorY&&(this.getLayout().anchorY=t,this._setLayoutEnabled(!0)),this.resetLayoutY()}),n(0,s,"tag",function(){return this._tag},function(t){this._tag=t}),n(0,s,"toolTip",function(){return this._toolTip},function(t){this._toolTip!=t&&(this._toolTip=t,null!=t?(this.on("mouseover",this,this.onMouseOver),this.on("mouseout",this,this.onMouseOut)):(this.off("mouseover",this,this.onMouseOver),this.off("mouseout",this,this.onMouseOut)))}),n(0,s,"comXml",function(){return this._comXml},function(t){this._comXml=t}),n(0,s,"gray",function(){return this._gray},function(t){t!==this._gray&&(this._gray=t,L.gray(this,t))}),n(0,s,"disabled",function(){return this._disabled},function(t){t!==this._disabled&&(this.gray=this._disabled=t,this.mouseEnabled=!t)}),i}(C)),P=function(t){function i(){this.lockLayer=null,this.popupEffect=function(t){t.scale(1,1),w.from(t,{x:e.stage.width/2,y:e.stage.height/2,scaleX:0,scaleY:0},300,a.backOut,f.create(this,this.doOpen,[t]))},this.closeEffect=function(t,i){w.to(t,{x:e.stage.width/2,y:e.stage.height/2,scaleX:0,scaleY:0},300,a.strongOut,f.create(this,this.doClose,[t,i]))},i.__super.call(this),this.maskLayer=new C,this.popupEffectHandler=new f(this,this.popupEffect),this.closeEffectHandler=new f(this,this.closeEffect),this.mouseEnabled=this.maskLayer.mouseEnabled=!0,this.zOrder=1e3,e.stage.addChild(this),e.stage.on("resize",this,this._onResize),M.closeDialogOnSide&&this.maskLayer.on("click",this,this._closeOnSide),this._onResize(null)}h(i,"laya.ui.DialogManager",C);var s=i.prototype;return s._closeOnSide=function(){var t=this.getChildAt(this.numChildren-1);t instanceof laya.ui.Dialog&&t.close("side")},s.setLockView=function(t){this.lockLayer||(this.lockLayer=new H,this.lockLayer.mouseEnabled=!0,this.lockLayer.size(e.stage.width,e.stage.height)),this.lockLayer.removeChildren(),t&&(t.centerX=t.centerY=0,this.lockLayer.addChild(t))},s._onResize=function(t){var i=this.maskLayer.width=e.stage.width,s=this.maskLayer.height=e.stage.height;this.lockLayer&&this.lockLayer.size(i,s),this.maskLayer.graphics.clear(),this.maskLayer.graphics.drawRect(0,0,i,s,M.popupBgColor),this.maskLayer.alpha=M.popupBgAlpha;for(var h=this.numChildren-1;h>-1;h--){var n=this.getChildAt(h);n.popupCenter&&this._centerDialog(n)}},s._centerDialog=function(t){t.x=Math.round((e.stage.width-t.width>>1)+t.pivotX),t.y=Math.round((e.stage.height-t.height>>1)+t.pivotY)},s.open=function(t,i,e){void 0===i&&(i=!1),void 0===e&&(e=!1),i&&this._closeAll(),t.popupCenter&&this._centerDialog(t),this.addChild(t),(t.isModal||this._$P.hasZorder)&&this.timer.callLater(this,this._checkMask),e&&null!=t.popupEffect?t.popupEffect.runWith(t):this.doOpen(t),this.event("open")},s.doOpen=function(t){t.onOpened()},s.lock=function(t){this.lockLayer&&(t?this.addChild(this.lockLayer):this.lockLayer.removeSelf())},s.close=function(t,i,e){void 0===e&&(e=!1),e&&null!=t.closeEffect?t.closeEffect.runWith([t,i]):this.doClose(t,i),this.event("close")},s.doClose=function(t,i){t.removeSelf(),t.isModal&&this._checkMask(),t.closeHandler&&t.closeHandler.runWith(i),t.onClosed(i)},s.closeAll=function(){this._closeAll(),this.event("close")},s._closeAll=function(){for(var t=this.numChildren-1;t>-1;t--){var i=this.getChildAt(t);i&&null!=i.close&&this.doClose(i)}},s.getDialogsByGroup=function(t){for(var i=[],e=this.numChildren-1;e>-1;e--){var s=this.getChildAt(e);s&&s.group===t&&i.push(s)}return i},s.closeByGroup=function(t){for(var i=[],e=this.numChildren-1;e>-1;e--){var s=this.getChildAt(e);s&&s.group===t&&(s.close(),i.push(s))}return i},s._checkMask=function(){this.maskLayer.removeSelf();for(var t=this.numChildren-1;t>-1;t--){var i=this.getChildAt(t);if(i&&i.isModal)return void this.addChildAt(this.maskLayer,t)}},i}(),H=function(t){function i(){i.__super.call(this)}h(i,"laya.ui.Box",t);var s=i.prototype;return e.imps(s,{"laya.ui.IBox":!0}),n(0,s,"dataSource",t.prototype._$get_dataSource,function(t){this._dataSource=t;for(var i in t){var e=this.getChildByName(i);e?e.dataSource=t[i]:this.hasOwnProperty(i)&&"function"!=typeof this[i]&&(this[i]=t[i])}}),i}(T),N=function(t){function i(t,e){this.toggle=!1,this._bitmap=null,this._text=null,this._strokeColors=null,this._state=0,this._selected=!1,this._skin=null,this._autoSize=!0,this._sources=null,this._clickHandler=null,this._stateChanged=!1,i.__super.call(this),this._labelColors=I.buttonLabelColors,this._stateNum=I.buttonStateNum,void 0===e&&(e=""),this.skin=t,this.label=e}h(i,"laya.ui.Button",t);var o=i.prototype;return e.imps(o,{"laya.ui.ISelect":!0}),o.destroy=function(i){void 0===i&&(i=!0),t.prototype.destroy.call(this,i),this._bitmap&&this._bitmap.destroy(),this._text&&this._text.destroy(i),this._bitmap=null,this._text=null,this._clickHandler=null,this._labelColors=this._sources=this._strokeColors=null},o.createChildren=function(){this.graphics=this._bitmap=new z},o.createText=function(){this._text||(this._text=new b,this._text.overflow=b.HIDDEN,this._text.align="center",this._text.valign="middle",this._text.width=this._width,this._text.height=this._height)},o.initialize=function(){1!==this._mouseEnableState&&(this.mouseEnabled=!0,this._setBit(2,!0)),this._createListener("mouseover",this,this.onMouse,null,!1,!1),this._createListener("mouseout",this,this.onMouse,null,!1,!1),this._createListener("mousedown",this,this.onMouse,null,!1,!1),this._createListener("mouseup",this,this.onMouse,null,!1,!1),this._createListener("click",this,this.onMouse,null,!1,!1)},o.onMouse=function(t){if(!1!==this.toggle||!this._selected)return"click"===t.type?(this.toggle&&(this.selected=!this._selected),void(this._clickHandler&&this._clickHandler.run())):void(!this._selected&&(this.state=i.stateMap[t.type]))},o.changeClips=function(){var t=g.getRes(this._skin);if(t){var i=t.sourceWidth,e=t.sourceHeight/this._stateNum;t.$_GID||(t.$_GID=x.getGID());var s=t.$_GID+"-"+this._stateNum,h=B.I.get(s);if(x.isOkTextureList(h)||(h=null),h)this._sources=h;else{if(this._sources=[],1===this._stateNum)this._sources.push(t);else for(var n=0;n<this._stateNum;n++)this._sources.push(S.createFromTexture(t,0,e*n,i,e));B.I.set(s,this._sources)}this._autoSize?(this._bitmap.width=this._width||i,this._bitmap.height=this._height||e,this._text&&(this._text.width=this._bitmap.width,this._text.height=this._bitmap.height)):this._text&&(this._text.x=i)}else console.log("lose skin",this._skin)},o.changeState=function(){this._stateChanged=!1,this.runCallLater(this.changeClips);var t=this._state<this._stateNum?this._state:this._stateNum-1;this._sources&&(this._bitmap.source=this._sources[t]),this.label&&(this._text.color=this._labelColors[t],this._strokeColors&&(this._text.strokeColor=this._strokeColors[t]))},o._setStateChanged=function(){this._stateChanged||(this._stateChanged=!0,this.callLater(this.changeState))},n(0,o,"labelStrokeColor",function(){return this.createText(),this._text.strokeColor},function(t){this.createText(),this._text.strokeColor=t}),n(0,o,"measureHeight",function(){return this.runCallLater(this.changeClips),this._text?Math.max(this._bitmap.height,this._text.height):this._bitmap.height}),n(0,o,"skin",function(){return this._skin},function(t){this._skin!=t&&(this._skin=t,this.callLater(this.changeClips),this._setStateChanged())}),n(0,o,"state",function(){return this._state},function(t){this._state!=t&&(this._state=t,this._setStateChanged())}),n(0,o,"text",function(){return this.createText(),this._text}),n(0,o,"stateNum",function(){return this._stateNum},function(t){"string"==typeof t&&(t=parseInt(t)),this._stateNum!=t&&(this._stateNum=t<1?1:t>3?3:t,this.callLater(this.changeClips))}),n(0,o,"strokeColors",function(){return this._strokeColors?this._strokeColors.join(","):""},function(t){this._strokeColors=L.fillArray(I.buttonLabelColors,t,String),this._setStateChanged()}),n(0,o,"labelColors",function(){return this._labelColors.join(",")},function(t){this._labelColors=L.fillArray(I.buttonLabelColors,t,String),this._setStateChanged()}),n(0,o,"measureWidth",function(){return this.runCallLater(this.changeClips),this._autoSize?this._bitmap.width:(this.runCallLater(this.changeState),this._bitmap.width+(this._text?this._text.width:0))}),n(0,o,"label",function(){return this._text?this._text.text:null},function(t){(this._text||t)&&(this.createText(),this._text.text!=t&&(t&&!this._text.parent&&this.addChild(this._text),this._text.text=(t+"").replace(/\\n/g,"\n"),this._setStateChanged()))}),n(0,o,"selected",function(){return this._selected},function(t){this._selected!=t&&(this._selected=t,this.state=this._selected?2:0,this.event("change"))}),n(0,o,"labelPadding",function(){return this.createText(),this._text.padding.join(",")},function(t){this.createText(),this._text.padding=L.fillArray(I.labelPadding,t,Number)}),n(0,o,"labelSize",function(){return this.createText(),this._text.fontSize},function(t){this.createText(),this._text.fontSize=t}),n(0,o,"labelStroke",function(){return this.createText(),this._text.stroke},function(t){this.createText(),this._text.stroke=t}),n(0,o,"labelBold",function(){return this.createText(),this._text.bold},function(t){this.createText(),this._text.bold=t}),n(0,o,"labelFont",function(){return this.createText(),this._text.font},function(t){this.createText(),this._text.font=t}),n(0,o,"labelAlign",function(){return this.createText(),this._text.align},function(t){this.createText(),this._text.align=t}),n(0,o,"clickHandler",function(){return this._clickHandler},function(t){this._clickHandler=t}),n(0,o,"sizeGrid",function(){return this._bitmap.sizeGrid?this._bitmap.sizeGrid.join(","):null},function(t){this._bitmap.sizeGrid=L.fillArray(I.defaultSizeGrid,t,Number)}),n(0,o,"width",t.prototype._$get_width,function(t){e.superSet(T,this,"width",t),this._autoSize&&(this._bitmap.width=t,this._text&&(this._text.width=t))}),n(0,o,"height",t.prototype._$get_height,function(t){e.superSet(T,this,"height",t),this._autoSize&&(this._bitmap.height=t,this._text&&(this._text.height=t))}),n(0,o,"dataSource",t.prototype._$get_dataSource,function(t){this._dataSource=t,"number"==typeof t||"string"==typeof t?this.label=t+"":e.superSet(T,this,"dataSource",t)}),n(0,o,"iconOffset",function(){return this._bitmap._offset?this._bitmap._offset.join(","):null},function(t){this._bitmap._offset=t?L.fillArray([1,1],t,Number):[]}),s(i,["stateMap",function(){return this.stateMap={mouseup:0,mouseover:1,mousedown:2,mouseout:0}}]),i}(T),O=function(t){function i(t,e,s){this._sources=null,this._bitmap=null,this._skin=null,this._clipX=1,this._clipY=1,this._clipWidth=0,this._clipHeight=0,this._autoPlay=!1,this._interval=50,this._complete=null,this._isPlaying=!1,this._index=0,this._clipChanged=!1,this._group=null,this._toIndex=-1,i.__super.call(this),void 0===e&&(e=1),void 0===s&&(s=1),this._clipX=e,this._clipY=s,this.skin=t}h(i,"laya.ui.Clip",t);var s=i.prototype;return s.destroy=function(i){void 0===i&&(i=!0),t.prototype.destroy.call(this,!0),this._bitmap&&this._bitmap.destroy(),this._bitmap=null,this._sources=null},s.dispose=function(){this.destroy(!0),e.loader.clearRes(this._skin)},s.createChildren=function(){this.graphics=this._bitmap=new z},s._onDisplay=function(t){this._isPlaying?this._displayedInStage?this.play():this.stop():this._autoPlay&&this.play()},s.changeClip=function(){if(this._clipChanged=!1,this._skin){var t=g.getRes(this._skin);t?this.loadComplete(this._skin,t):e.loader.load(this._skin,f.create(this,this.loadComplete,[this._skin]))}},s.loadComplete=function(t,i){if(t===this._skin&&i){var e=this._clipWidth||Math.ceil(i.sourceWidth/this._clipX),s=this._clipHeight||Math.ceil(i.sourceHeight/this._clipY),h=this._skin+e+s,n=B.I.get(h);if(x.isOkTextureList(n)||(n=null),n)this._sources=n;else{this._sources=[];for(var o=0;o<this._clipY;o++)for(var r=0;r<this._clipX;r++)this._sources.push(S.createFromTexture(i,e*r,s*o,e,s));B.I.set(h,this._sources)}this.index=this._index,this.event("loaded"),this.onCompResize()}},s.play=function(t,i){void 0===t&&(t=0),void 0===i&&(i=-1),this._isPlaying=!0,this.index=t,this._toIndex=i,this._index++,e.timer.loop(this.interval,this,this._loop),this.on("display",this,this._onDisplay),this.on("undisplay",this,this._onDisplay)},s._loop=function(){this._style.visible&&this._sources&&(this._index++,this._toIndex>-1&&this._index>=this._toIndex?this.stop():this._index>=this._sources.length&&(this._index=0),this.index=this._index)},s.stop=function(){this._isPlaying=!1,e.timer.clear(this,this._loop),this.event("complete")},s._setClipChanged=function(){this._clipChanged||(this._clipChanged=!0,this.callLater(this.changeClip))},n(0,s,"interval",function(){return this._interval},function(t){this._interval!=t&&(this._interval=t,this._isPlaying&&this.play())}),n(0,s,"skin",function(){return this._skin},function(t){this._skin!=t&&(this._skin=t,t?this._setClipChanged():this._bitmap.source=null)}),n(0,s,"sources",function(){return this._sources},function(t){this._sources=t,this.index=this._index,this.event("loaded")}),n(0,s,"clipX",function(){return this._clipX},function(t){this._clipX=t||1,this._setClipChanged()}),n(0,s,"clipY",function(){return this._clipY},function(t){this._clipY=t||1,this._setClipChanged()}),n(0,s,"total",function(){return this.runCallLater(this.changeClip),this._sources?this._sources.length:0}),n(0,s,"clipWidth",function(){return this._clipWidth},function(t){this._clipWidth=t,this._setClipChanged()}),n(0,s,"sizeGrid",function(){return this._bitmap.sizeGrid?this._bitmap.sizeGrid.join(","):null},function(t){this._bitmap.sizeGrid=L.fillArray(I.defaultSizeGrid,t,Number)}),n(0,s,"group",function(){return this._group},function(t){t&&this._skin&&g.setGroup(this._skin,t),this._group=t}),n(0,s,"clipHeight",function(){return this._clipHeight},function(t){this._clipHeight=t,this._setClipChanged()}),n(0,s,"width",t.prototype._$get_width,function(t){e.superSet(T,this,"width",t),this._bitmap.width=t}),n(0,s,"height",t.prototype._$get_height,function(t){e.superSet(T,this,"height",t),this._bitmap.height=t}),n(0,s,"measureWidth",function(){return this.runCallLater(this.changeClip),this._bitmap.width}),n(0,s,"measureHeight",function(){return this.runCallLater(this.changeClip),this._bitmap.height}),n(0,s,"index",function(){return this._index},function(t){this._index=t,this._bitmap&&this._sources&&(this._bitmap.source=this._sources[t]),this.event("change")}),n(0,s,"autoPlay",function(){return this._autoPlay},function(t){this._autoPlay!=t&&(this._autoPlay=t,t?this.play():this.stop())}),n(0,s,"isPlaying",function(){return this._isPlaying},function(t){this._isPlaying=t}),n(0,s,"dataSource",t.prototype._$get_dataSource,function(t){this._dataSource=t,"number"==typeof t&&Math.floor(t)==t||"string"==typeof t?this.index=parseInt(t):e.superSet(T,this,"dataSource",t)}),n(0,s,"bitmap",function(){return this._bitmap}),i}(T),A=function(t){function i(){this.changeHandler=null,this._gridSize=11,this._bgColor="#ffffff",this._borderColor="#000000",this._inputColor="#000000",this._inputBgColor="#efefef",this._colorPanel=null,this._colorTiles=null,this._colorBlock=null,this._colorInput=null,this._colorButton=null,this._colors=[],this._selectedColor="#000000",this._panelChanged=!1,i.__super.call(this)}h(i,"laya.ui.ColorPicker",t);var s=i.prototype;return s.destroy=function(i){void 0===i&&(i=!0),t.prototype.destroy.call(this,i),this._colorPanel&&this._colorPanel.destroy(i),this._colorButton&&this._colorButton.destroy(i),this._colorPanel=null,this._colorTiles=null,this._colorBlock=null,this._colorInput=null,this._colorButton=null,this._colors=null,this.changeHandler=null},s.createChildren=function(){this.addChild(this._colorButton=new N),this._colorPanel=new H,this._colorPanel.size(230,166),this._colorPanel.addChild(this._colorTiles=new C),this._colorPanel.addChild(this._colorBlock=new C),this._colorPanel.addChild(this._colorInput=new p)},s.initialize=function(){this._colorButton.on("click",this,this.onColorButtonClick),this._colorBlock.pos(5,5),this._colorInput.pos(60,5),this._colorInput.size(60,20),this._colorInput.on("change",this,this.onColorInputChange),this._colorInput.on("keydown",this,this.onColorFieldKeyDown),this._colorTiles.pos(5,30),this._colorTiles.on("mousemove",this,this.onColorTilesMouseMove),this._colorTiles.on("click",this,this.onColorTilesClick),this._colorTiles.size(20*this._gridSize,12*this._gridSize),this._colorPanel.on("mousedown",this,this.onPanelMouseDown),this.bgColor=this._bgColor},s.onPanelMouseDown=function(t){t.stopPropagation()},s.changePanel=function(){this._panelChanged=!1;var t=this._colorPanel.graphics;t.clear(),t.drawRect(0,0,230,166,this._bgColor,this._borderColor),this.drawBlock(this._selectedColor),this._colorInput.borderColor=this._borderColor,this._colorInput.bgColor=this._inputBgColor,this._colorInput.color=this._inputColor,(t=this._colorTiles.graphics).clear();for(var i=[0,3355443,6710886,10066329,13421772,16777215,16711680,65280,255,16776960,65535,16711935],e=0;e<12;e++)for(var s=0;s<20;s++){var h=0;h=0===s?i[e]:1===s?0:51*(((3*e+s/6)%3<<0)+3*(e/6<<0))<<16|s%6*51<<8|(e<<0)%6*51;var n=L.toColor(h);this._colors.push(n);var o=s*this._gridSize,r=e*this._gridSize;t.drawRect(o,r,this._gridSize,this._gridSize,n,"#000000")}},s.onColorButtonClick=function(t){this._colorPanel.parent?this.close():this.open()},s.open=function(){var t=this.localToGlobal(new m),i=t.x+this._colorPanel.width<=e.stage.width?t.x:e.stage.width-this._colorPanel.width,s=t.y+this._colorButton.height;s=s+this._colorPanel.height<=e.stage.height?s:t.y-this._colorPanel.height,this._colorPanel.pos(i,s),this._colorPanel.zOrder=1001,e._currentStage.addChild(this._colorPanel),e.stage.on("mousedown",this,this.removeColorBox)},s.close=function(){e.stage.off("mousedown",this,this.removeColorBox),this._colorPanel.removeSelf()},s.removeColorBox=function(t){this.close()},s.onColorFieldKeyDown=function(t){13==t.keyCode&&(this._colorInput.text?this.selectedColor=this._colorInput.text:this.selectedColor=null,this.close(),t.stopPropagation())},s.onColorInputChange=function(t){this._colorInput.text?this.drawBlock(this._colorInput.text):this.drawBlock("#FFFFFF")},s.onColorTilesClick=function(t){this.selectedColor=this.getColorByMouse(),this.close()},s.onColorTilesMouseMove=function(t){this._colorInput.focus=!1;var i=this.getColorByMouse();this._colorInput.text=i,this.drawBlock(i)},s.getColorByMouse=function(){var t=this._colorTiles.getMousePoint(),i=Math.floor(t.x/this._gridSize),e=Math.floor(t.y/this._gridSize);return this._colors[20*e+i]},s.drawBlock=function(t){var i=this._colorBlock.graphics;i.clear();var e=t||"#ffffff";i.drawRect(0,0,50,20,e,this._borderColor),t||i.drawLine(0,0,50,20,"#ff0000")},s.changeColor=function(){var t=this.graphics;t.clear();var i=this._selectedColor||"#000000";t.drawRect(0,0,this._colorButton.width,this._colorButton.height,i)},s._setPanelChanged=function(){this._panelChanged||(this._panelChanged=!0,this.callLater(this.changePanel))},n(0,s,"inputBgColor",function(){return this._inputBgColor},function(t){this._inputBgColor=t,this._setPanelChanged()}),n(0,s,"selectedColor",function(){return this._selectedColor},function(t){this._selectedColor!=t&&(this._selectedColor=this._colorInput.text=t,this.drawBlock(t),this.changeColor(),this.changeHandler&&this.changeHandler.runWith(this._selectedColor),this.event("change",c.EMPTY.setTo("change",this,this)))}),n(0,s,"skin",function(){return this._colorButton.skin},function(t){this._colorButton.skin=t,this.changeColor()}),n(0,s,"bgColor",function(){return this._bgColor},function(t){this._bgColor=t,this._setPanelChanged()}),n(0,s,"borderColor",function(){return this._borderColor},function(t){this._borderColor=t,this._setPanelChanged()}),n(0,s,"inputColor",function(){return this._inputColor},function(t){this._inputColor=t,this._setPanelChanged()}),i}(T),Y=function(t){function i(t,e){this._visibleNum=6,this._button=null,this._list=null,this._isOpen=!1,this._itemSize=12,this._labels=[],this._selectedIndex=-1,this._selectHandler=null,this._itemHeight=NaN,this._listHeight=NaN,this._listChanged=!1,this._itemChanged=!1,this._scrollBarSkin=null,this._isCustomList=!1,this.itemRender=null,i.__super.call(this),this._itemColors=I.comboBoxItemColors,this.skin=t,this.labels=e}h(i,"laya.ui.ComboBox",t);var s=i.prototype;return s.destroy=function(i){void 0===i&&(i=!0),t.prototype.destroy.call(this,i),this._button&&this._button.destroy(i),this._list&&this._list.destroy(i),this._button=null,this._list=null,this._itemColors=null,this._labels=null,this._selectHandler=null},s.createChildren=function(){this.addChild(this._button=new N),this._button.text.align="left",this._button.labelPadding="0,0,0,5",this._button.on("mousedown",this,this.onButtonMouseDown)},s._createList=function(){this._list=new U,this._scrollBarSkin&&(this._list.vScrollBarSkin=this._scrollBarSkin),this._setListEvent(this._list)},s._setListEvent=function(t){this._list.selectEnable=!0,this._list.on("mousedown",this,this.onListDown),this._list.mouseHandler=f.create(this,this.onlistItemMouse,null,!1),this._list.scrollBar&&this._list.scrollBar.on("mousedown",this,this.onScrollBarDown)},s.onListDown=function(t){t.stopPropagation()},s.onScrollBarDown=function(t){t.stopPropagation()},s.onButtonMouseDown=function(t){this.callLater(this.switchTo,[!this._isOpen])},s.changeList=function(){this._listChanged=!1;var t=this.width-2,i=this._itemColors[2];this._itemHeight=this._itemSize+6,this._list.itemRender=this.itemRender||{type:"Box",child:[{type:"Label",props:{name:"label",x:1,padding:"3,3,3,3",width:t,height:this._itemHeight,fontSize:this._itemSize,color:i}}]},this._list.repeatY=this._visibleNum,this._list.refresh()},s.onlistItemMouse=function(t,i){var e=t.type;if("mouseover"===e||"mouseout"===e){if(this._isCustomList)return;var s=this._list.getCell(i);if(!s)return;var h=s.getChildByName("label");h&&("mouseover"===e?(h.bgColor=this._itemColors[0],h.color=this._itemColors[1]):(h.bgColor=null,h.color=this._itemColors[2]))}else"click"===e&&(this.selectedIndex=i,this.isOpen=!1)},s.switchTo=function(t){this.isOpen=t},s.changeOpen=function(){this.isOpen=!this._isOpen},s.changeItem=function(){if(this._itemChanged=!1,this._listHeight=this._labels.length>0?Math.min(this._visibleNum,this._labels.length)*this._itemHeight:this._itemHeight,!this._isCustomList){var t=this._list.graphics;t.clear(),t.drawRect(0,0,this.width-1,this._listHeight,this._itemColors[4],this._itemColors[3])}var i=this._list.array||[];i.length=0;for(var e=0,s=this._labels.length;e<s;e++)i.push({label:this._labels[e]});this._list.height=this._listHeight,this._list.array=i},s.changeSelected=function(){this._button.label=this.selectedLabel},s._onStageMouseWheel=function(t){this._list&&!this._list.contains(t.target)&&this.removeList(null)},s.removeList=function(t){e.stage.off("mousedown",this,this.removeList),e.stage.off("mousewheel",this,this._onStageMouseWheel),this.isOpen=!1},n(0,s,"selectedIndex",function(){return this._selectedIndex},function(t){this._selectedIndex!=t&&(this._selectedIndex=t,this._labels.length>0?this.changeSelected():this.callLater(this.changeSelected),this.event("change",[c.EMPTY.setTo("change",this,this)]),this._selectHandler&&this._selectHandler.runWith(this._selectedIndex))}),n(0,s,"measureHeight",function(){return this._button.height}),n(0,s,"skin",function(){return this._button.skin},function(t){this._button.skin!=t&&(this._button.skin=t,this._listChanged=!0)}),n(0,s,"measureWidth",function(){return this._button.width}),n(0,s,"width",t.prototype._$get_width,function(t){e.superSet(T,this,"width",t),this._button.width=this._width,this._itemChanged=!0,this._listChanged=!0}),n(0,s,"selectedLabel",function(){return this._selectedIndex>-1&&this._selectedIndex<this._labels.length?this._labels[this._selectedIndex]:null},function(t){this.selectedIndex=this._labels.indexOf(t)}),n(0,s,"labels",function(){return this._labels.join(",")},function(t){this._labels.length>0&&(this.selectedIndex=-1),t?this._labels=t.split(","):this._labels.length=0,this._itemChanged=!0}),n(0,s,"height",t.prototype._$get_height,function(t){e.superSet(T,this,"height",t),this._button.height=this._height}),n(0,s,"selectHandler",function(){return this._selectHandler},function(t){this._selectHandler=t}),n(0,s,"visibleNum",function(){return this._visibleNum},function(t){this._visibleNum=t,this._listChanged=!0}),n(0,s,"labelBold",function(){return this._button.text.bold},function(t){this._button.text.bold=t}),n(0,s,"itemColors",function(){return String(this._itemColors)},function(t){this._itemColors=L.fillArray(this._itemColors,t,String),this._listChanged=!0}),n(0,s,"itemSize",function(){return this._itemSize},function(t){this._itemSize=t,this._listChanged=!0}),n(0,s,"scrollBar",function(){return this.list.scrollBar}),n(0,s,"isOpen",function(){return this._isOpen},function(t){if(this._isOpen!=t)if(this._isOpen=t,this._button.selected=this._isOpen,this._isOpen){this._list||this._createList(),this._listChanged&&!this._isCustomList&&this.changeList(),this._itemChanged&&this.changeItem();var i=this.localToGlobal(m.TEMP.setTo(0,0)),s=i.y+this._button.height;s=s+this._listHeight<=e.stage.height?s:i.y-this._listHeight,this._list.pos(i.x,s),this._list.zOrder=1001,e._currentStage.addChild(this._list),e.stage.once("mousedown",this,this.removeList),e.stage.on("mousewheel",this,this._onStageMouseWheel),this._list.selectedIndex=this._selectedIndex}else this._list&&this._list.removeSelf()}),n(0,s,"scrollBarSkin",function(){return this._scrollBarSkin},function(t){this._scrollBarSkin=t}),n(0,s,"sizeGrid",function(){return this._button.sizeGrid},function(t){this._button.sizeGrid=t}),n(0,s,"button",function(){return this._button}),n(0,s,"list",function(){return this._list||this._createList(),this._list},function(t){t&&(t.removeSelf(),this._isCustomList=!0,this._list=t,this._setListEvent(t),this._itemHeight=t.getCell(0).height+t.spaceY)}),n(0,s,"dataSource",t.prototype._$get_dataSource,function(t){this._dataSource=t,"number"==typeof t&&Math.floor(t)==t||"string"==typeof t?this.selectedIndex=parseInt(t):t instanceof Array?this.labels=t.join(","):e.superSet(T,this,"dataSource",t)}),n(0,s,"labelColors",function(){return this._button.labelColors},function(t){this._button.labelColors!=t&&(this._button.labelColors=t)}),n(0,s,"labelPadding",function(){return this._button.text.padding.join(",")},function(t){this._button.text.padding=L.fillArray(I.labelPadding,t,Number)}),n(0,s,"labelSize",function(){return this._button.text.fontSize},function(t){this._button.text.fontSize=t}),n(0,s,"labelFont",function(){return this._button.text.font},function(t){this._button.text.font=t}),n(0,s,"stateNum",function(){return this._button.stateNum},function(t){this._button.stateNum=t}),i}(T),X=function(t){function i(t){this.rollRatio=.95,this.changeHandler=null,this.scaleBar=!0,this.autoHide=!1,this.elasticDistance=0,this.elasticBackTime=500,this.upButton=null,this.downButton=null,this.slider=null,this._scrollSize=1,this._skin=null,this._thumbPercent=1,this._target=null,this._lastPoint=null,this._lastOffset=0,this._checkElastic=!1,this._isElastic=!1,this._value=NaN,this._hide=!1,this._clickOnly=!0,this._offsets=null,i.__super.call(this),this._showButtons=M.showButtons,this._touchScrollEnable=M.touchScrollEnable,this._mouseWheelEnable=M.mouseWheelEnable,this.skin=t,this.max=1}h(i,"laya.ui.ScrollBar",t);var s=i.prototype;return s.destroy=function(i){void 0===i&&(i=!0),this.stopScroll(),this.target=null,t.prototype.destroy.call(this,i),this.upButton&&this.upButton.destroy(i),this.downButton&&this.downButton.destroy(i),this.slider&&this.slider.destroy(i),this.upButton=this.downButton=null,this.slider=null,this.changeHandler=null,this._offsets=null},s.createChildren=function(){this.addChild(this.slider=new E),this.addChild(this.upButton=new N),this.addChild(this.downButton=new N)},s.initialize=function(){this.slider.showLabel=!1,this.slider.on("change",this,this.onSliderChange),this.slider.setSlider(0,0,0),this.upButton.on("mousedown",this,this.onButtonMouseDown),this.downButton.on("mousedown",this,this.onButtonMouseDown)},s.onSliderChange=function(){this._value!=this.slider.value&&(this.value=this.slider.value)},s.onButtonMouseDown=function(t){var i=t.currentTarget===this.upButton;this.slide(i),e.timer.once(I.scrollBarDelayTime,this,this.startLoop,[i]),e.stage.once("mouseup",this,this.onStageMouseUp)},s.startLoop=function(t){e.timer.frameLoop(1,this,this.slide,[t])},s.slide=function(t){t?this.value-=this._scrollSize:this.value+=this._scrollSize},s.onStageMouseUp=function(t){e.timer.clear(this,this.startLoop),e.timer.clear(this,this.slide)},s.changeScrollBar=function(){this.upButton.visible=this._showButtons,this.downButton.visible=this._showButtons,this._showButtons&&(this.upButton.skin=this._skin.replace(".png","$up.png"),this.downButton.skin=this._skin.replace(".png","$down.png")),this.slider.isVertical?this.slider.y=this._showButtons?this.upButton.height:0:this.slider.x=this._showButtons?this.upButton.width:0,this.resetPositions(),this.repaint()},s.changeSize=function(){t.prototype.changeSize.call(this),this.repaint(),this.resetPositions(),this.event("change"),this.changeHandler&&this.changeHandler.runWith(this.value)},s.resetPositions=function(){this.slider.isVertical?this.slider.height=this.height-(this._showButtons?this.upButton.height+this.downButton.height:0):this.slider.width=this.width-(this._showButtons?this.upButton.width+this.downButton.width:0),this.resetButtonPosition()},s.resetButtonPosition=function(){this.slider.isVertical?this.downButton.y=this.slider.y+this.slider.height:this.downButton.x=this.slider.x+this.slider.width},s.setScroll=function(t,i,e){this.runCallLater(this.changeSize),this.slider.setSlider(t,i,e),this.slider.bar.visible=i>0,!this._hide&&this.autoHide&&(this.visible=!1)},s.onTargetMouseWheel=function(t){this.value-=t.delta*this._scrollSize,this.target=this._target},s.onTargetMouseDown=function(t){this._clickOnly=!0,this._lastOffset=0,this._checkElastic=!1,this._lastPoint||(this._lastPoint=new m),this._lastPoint.setTo(e.stage.mouseX,e.stage.mouseY),e.timer.clear(this,this.tweenMove),w.clearTween(this),e.stage.once("mouseup",this,this.onStageMouseUp2),e.stage.once("mouseout",this,this.onStageMouseUp2),e.timer.frameLoop(1,this,this.loop)},s.loop=function(){var t=e.stage.mouseY,i=e.stage.mouseX;if(this._lastOffset=this.isVertical?t-this._lastPoint.y:i-this._lastPoint.x,this._clickOnly){if(!(Math.abs(this._lastOffset*(this.isVertical?e.stage._canvasTransform.getScaleY():e.stage._canvasTransform.getScaleX()))>1))return;this._clickOnly=!1,this._offsets||(this._offsets=[]),this._offsets.length=0,this._target.mouseEnabled=!1,!this.hide&&this.autoHide&&(this.alpha=1,this.visible=!0),this.event("start")}this._offsets.push(this._lastOffset),this._lastPoint.x=i,this._lastPoint.y=t,0!==this._lastOffset&&(this._checkElastic||(this.elasticDistance>0?this._checkElastic||0==this._lastOffset||(this._lastOffset>0&&this._value<=this.min||this._lastOffset<0&&this._value>=this.max?(this._isElastic=!0,this._checkElastic=!0):this._isElastic=!1):this._checkElastic=!0),this._isElastic?this._value<=this.min?this.value-=this._lastOffset*Math.max(0,1-(this.min-this._value)/this.elasticDistance):this._value>=this.max&&(this.value-=this._lastOffset*Math.max(0,1-(this._value-this.max)/this.elasticDistance)):this.value-=this._lastOffset)},s.onStageMouseUp2=function(t){if(e.stage.off("mouseup",this,this.onStageMouseUp2),e.stage.off("mouseout",this,this.onStageMouseUp2),e.timer.clear(this,this.loop),!(this._clickOnly&&this._value>=this.min&&this._value<=this.max))if(this._target.mouseEnabled=!0,this._isElastic)this._value<this.min?w.to(this,{value:this.min},this.elasticBackTime,a.sineOut,f.create(this,this.elasticOver)):this._value>this.max&&w.to(this,{value:this.max},this.elasticBackTime,a.sineOut,f.create(this,this.elasticOver));else{if(!this._offsets)return;this._offsets.length<1&&(this._offsets[0]=this.isVertical?e.stage.mouseY-this._lastPoint.y:e.stage.mouseX-this._lastPoint.x);for(var i=0,s=Math.min(this._offsets.length,3),h=0;h<s;h++)i+=this._offsets[this._offsets.length-1-h];if(this._lastOffset=i/s,(i=Math.abs(this._lastOffset))<2)return void this.event("end");i>60&&(this._lastOffset=this._lastOffset>0?60:-60);var n=Math.round(Math.abs(this.elasticDistance*(this._lastOffset/240)));e.timer.frameLoop(1,this,this.tweenMove,[n])}},s.elasticOver=function(){this._isElastic=!1,!this.hide&&this.autoHide&&w.to(this,{alpha:0},500),this.event("end")},s.tweenMove=function(t){this._lastOffset*=this.rollRatio;var i=NaN;if(t>0&&(this._lastOffset>0&&this.value<=this.min?(this._isElastic=!0,i=.5*-(this.min-t-this.value),this._lastOffset>i&&(this._lastOffset=i)):this._lastOffset<0&&this.value>=this.max&&(this._isElastic=!0,i=.5*-(this.max+t-this.value),this._lastOffset<i&&(this._lastOffset=i))),this.value-=this._lastOffset,Math.abs(this._lastOffset)<1){if(e.timer.clear(this,this.tweenMove),this._isElastic)return void(this._value<this.min?w.to(this,{value:this.min},this.elasticBackTime,a.sineOut,f.create(this,this.elasticOver)):this._value>this.max?w.to(this,{value:this.max},this.elasticBackTime,a.sineOut,f.create(this,this.elasticOver)):this.elasticOver());this.event("end"),!this.hide&&this.autoHide&&w.to(this,{alpha:0},500)}},s.stopScroll=function(){this.onStageMouseUp2(null),e.timer.clear(this,this.tweenMove),w.clearTween(this)},n(0,s,"measureHeight",function(){return this.slider.isVertical?100:this.slider.height}),n(0,s,"skin",function(){return this._skin},function(t){this._skin!=t&&(this._skin=t,this.slider.skin=this._skin,this.callLater(this.changeScrollBar))}),n(0,s,"max",function(){return this.slider.max},function(t){this.slider.max=t}),n(0,s,"showButtons",function(){return this._showButtons},function(t){this._showButtons=t,this.callLater(this.changeScrollBar)}),n(0,s,"measureWidth",function(){return this.slider.isVertical?this.slider.width:100}),n(0,s,"min",function(){return this.slider.min},function(t){this.slider.min=t}),n(0,s,"value",function(){return this._value},function(t){t!==this._value&&(this._value=t,this._isElastic||(this.slider._value!=t&&(this.slider._value=t,this.slider.changeValue()),this._value=this.slider._value),this.event("change"),this.changeHandler&&this.changeHandler.runWith(this._value))}),n(0,s,"isVertical",function(){return this.slider.isVertical},function(t){this.slider.isVertical=t}),n(0,s,"sizeGrid",function(){return this.slider.sizeGrid},function(t){this.slider.sizeGrid=t}),n(0,s,"scrollSize",function(){return this._scrollSize},function(t){this._scrollSize=t}),n(0,s,"dataSource",t.prototype._$get_dataSource,function(t){this._dataSource=t,"number"==typeof t||"string"==typeof t?this.value=Number(t):e.superSet(T,this,"dataSource",t)}),n(0,s,"thumbPercent",function(){return this._thumbPercent},function(t){this.runCallLater(this.changeScrollBar),this.runCallLater(this.changeSize),t=t>=1?.99:t,this._thumbPercent=t,this.scaleBar&&(this.slider.isVertical?this.slider.bar.height=Math.max(this.slider.height*t,I.scrollBarMinNum):this.slider.bar.width=Math.max(this.slider.width*t,I.scrollBarMinNum))}),n(0,s,"target",function(){return this._target},function(t){this._target&&(this._target.off("mousewheel",this,this.onTargetMouseWheel),this._target.off("mousedown",this,this.onTargetMouseDown)),this._target=t,t&&(this._mouseWheelEnable&&this._target.on("mousewheel",this,this.onTargetMouseWheel),this._touchScrollEnable&&this._target.on("mousedown",this,this.onTargetMouseDown))}),n(0,s,"hide",function(){return this._hide},function(t){this._hide=t,this.visible=!t}),n(0,s,"touchScrollEnable",function(){return this._touchScrollEnable},function(t){this._touchScrollEnable=t,this.target=this._target}),n(0,s,"mouseWheelEnable",function(){return this._mouseWheelEnable},function(t){this._mouseWheelEnable=t}),n(0,s,"tick",function(){return this.slider.tick},function(t){this.slider.tick=t}),i}(T),E=function(t){function i(t){this.changeHandler=null,this.isVertical=!0,this.showLabel=!0,this._allowClickBack=!1,this._max=100,this._min=0,this._tick=1,this._value=0,this._skin=null,this._bg=null,this._progress=null,this._bar=null,this._tx=NaN,this._ty=NaN,this._maxMove=NaN,this._globalSacle=null,i.__super.call(this),this.skin=t}h(i,"laya.ui.Slider",t);var o=i.prototype;return o.destroy=function(i){void 0===i&&(i=!0),t.prototype.destroy.call(this,i),this._bg&&this._bg.destroy(i),this._bar&&this._bar.destroy(i),this._progress&&this._progress.destroy(i),this._bg=null,this._bar=null,this._progress=null,this.changeHandler=null},o.createChildren=function(){this.addChild(this._bg=new V),this.addChild(this._bar=new N)},o.initialize=function(){this._bar.on("mousedown",this,this.onBarMouseDown),this._bg.sizeGrid=this._bar.sizeGrid="4,4,4,4,0",this._progress&&(this._progress.sizeGrid=this._bar.sizeGrid),this.allowClickBack=!0},o.onBarMouseDown=function(t){this._globalSacle||(this._globalSacle=new m),this._globalSacle.setTo(this.globalScaleX||.01,this.globalScaleY||.01),this._maxMove=this.isVertical?this.height-this._bar.height:this.width-this._bar.width,this._tx=e.stage.mouseX,this._ty=e.stage.mouseY,e.stage.on("mousemove",this,this.mouseMove),e.stage.once("mouseup",this,this.mouseUp),e.stage.once("mouseout",this,this.mouseUp),this.showValueText()},o.showValueText=function(){if(this.showLabel){var t=laya.ui.Slider.label;this.addChild(t),t.textField.changeText(this._value+""),this.isVertical?(t.x=this._bar.x+20,t.y=.5*(this._bar.height-t.height)+this._bar.y):(t.y=this._bar.y-20,t.x=.5*(this._bar.width-t.width)+this._bar.x)}},o.hideValueText=function(){laya.ui.Slider.label&&laya.ui.Slider.label.removeSelf()},o.mouseUp=function(t){e.stage.off("mousemove",this,this.mouseMove),e.stage.off("mouseup",this,this.mouseUp),e.stage.off("mouseout",this,this.mouseUp),this.sendChangeEvent("changed"),this.hideValueText()},o.mouseMove=function(t){var i=this._value;this.isVertical?(this._bar.y+=(e.stage.mouseY-this._ty)/this._globalSacle.y,this._bar.y>this._maxMove?this._bar.y=this._maxMove:this._bar.y<0&&(this._bar.y=0),this._value=this._bar.y/this._maxMove*(this._max-this._min)+this._min,this._progress&&(this._progress.height=this._bar.y+.5*this._bar.height)):(this._bar.x+=(e.stage.mouseX-this._tx)/this._globalSacle.x,this._bar.x>this._maxMove?this._bar.x=this._maxMove:this._bar.x<0&&(this._bar.x=0),this._value=this._bar.x/this._maxMove*(this._max-this._min)+this._min,this._progress&&(this._progress.width=this._bar.x+.5*this._bar.width)),this._tx=e.stage.mouseX,this._ty=e.stage.mouseY;var s=Math.pow(10,(this._tick+"").length-1);this._value=Math.round(Math.round(this._value/this._tick)*this._tick*s)/s,this._value!=i&&this.sendChangeEvent(),this.showValueText()},o.sendChangeEvent=function(t){void 0===t&&(t="change"),this.event(t),this.changeHandler&&this.changeHandler.runWith(this._value)},o.setBarPoint=function(){this.isVertical?this._bar.x=Math.round(.5*(this._bg.width-this._bar.width)):this._bar.y=Math.round(.5*(this._bg.height-this._bar.height))},o.changeSize=function(){t.prototype.changeSize.call(this),this.isVertical?this._bg.height=this.height:this._bg.width=this.width,this.setBarPoint(),this.changeValue()},o.setSlider=function(t,i,e){this._value=-1,this._min=t,this._max=i>t?i:t,this.value=e<t?t:e>i?i:e},o.changeValue=function(){var t=Math.pow(10,(this._tick+"").length-1);this._value=Math.round(Math.round(this._value/this._tick)*this._tick*t)/t,this._value=this._value>this._max?this._max:this._value<this._min?this._min:this._value;var i=this._max-this._min;0===i&&(i=1),this.isVertical?(this._bar.y=(this._value-this._min)/i*(this.height-this._bar.height),this._progress&&(this._progress.height=this._bar.y+.5*this._bar.height)):(this._bar.x=(this._value-this._min)/i*(this.width-this._bar.width),this._progress&&(this._progress.width=this._bar.x+.5*this._bar.width))},o.onBgMouseDown=function(t){var i=this._bg.getMousePoint();this.isVertical?this.value=i.y/(this.height-this._bar.height)*(this._max-this._min)+this._min:this.value=i.x/(this.width-this._bar.width)*(this._max-this._min)+this._min},n(0,o,"measureHeight",function(){return Math.max(this._bg.height,this._bar.height)}),n(0,o,"skin",function(){return this._skin},function(t){if(this._skin!=t){this._skin=t,this._bg.skin=this._skin,this._bar.skin=this._skin.replace(".png","$bar.png");var i=this._skin.replace(".png","$progress.png");g.getRes(i)&&(this._progress||(this.addChild(this._progress=new V),this._progress.sizeGrid=this._bar.sizeGrid,this.setChildIndex(this._progress,1)),this._progress.skin=i),this.setBarPoint(),this.callLater(this.changeValue)}}),n(0,o,"allowClickBack",function(){return this._allowClickBack},function(t){this._allowClickBack!=t&&(this._allowClickBack=t,t?this._bg.on("mousedown",this,this.onBgMouseDown):this._bg.off("mousedown",this,this.onBgMouseDown))}),n(0,o,"max",function(){return this._max},function(t){this._max!=t&&(this._max=t,this.callLater(this.changeValue))}),n(0,o,"measureWidth",function(){return Math.max(this._bg.width,this._bar.width)}),n(0,o,"tick",function(){return this._tick},function(t){this._tick!=t&&(this._tick=t,this.callLater(this.changeValue))}),n(0,o,"sizeGrid",function(){return this._bg.sizeGrid},function(t){this._bg.sizeGrid=t,this._bar.sizeGrid=t,this._progress&&(this._progress.sizeGrid=this._bar.sizeGrid)}),n(0,o,"min",function(){return this._min},function(t){this._min!=t&&(this._min=t,this.callLater(this.changeValue))}),n(0,o,"value",function(){return this._value},function(t){if(this._value!=t){var i=this._value;this._value=t,this.changeValue(),this._value!=i&&this.sendChangeEvent()}}),n(0,o,"dataSource",t.prototype._$get_dataSource,function(t){this._dataSource=t,"number"==typeof t||"string"==typeof t?this.value=Number(t):e.superSet(T,this,"dataSource",t)}),n(0,o,"bar",function(){return this._bar}),s(i,["label",function(){return this.label=new D}]),i}(T),V=function(t){function i(t){this._bitmap=null,this._skin=null,this._group=null,i.__super.call(this),this.skin=t}h(i,"laya.ui.Image",t);var s=i.prototype;return s.destroy=function(i){void 0===i&&(i=!0),t.prototype.destroy.call(this,!0),this._bitmap&&this._bitmap.destroy(),this._bitmap=null},s.dispose=function(){this.destroy(!0),e.loader.clearRes(this._skin)},s.createChildren=function(){this.graphics=this._bitmap=new z,this._bitmap.autoCacheCmd=!1},s.setSource=function(t,i){t===this._skin&&i&&(this.source=i,this.onCompResize())},n(0,s,"source",function(){return this._bitmap.source},function(t){this._bitmap&&(this._bitmap.source=t,this.event("loaded"),this.repaint())}),n(0,s,"dataSource",t.prototype._$get_dataSource,function(t){this._dataSource=t,"string"==typeof t?this.skin=t:e.superSet(T,this,"dataSource",t)}),n(0,s,"measureHeight",function(){return this._bitmap.height}),n(0,s,"skin",function(){return this._skin},function(t){if(this._skin!=t)if(this._skin=t,t){var i=g.getRes(t);i?(this.source=i,this.onCompResize()):e.loader.load(this._skin,f.create(this,this.setSource,[this._skin]),null,"image",1,!0,this._group)}else this.source=null}),n(0,s,"group",function(){return this._group},function(t){t&&this._skin&&g.setGroup(this._skin,t),this._group=t}),n(0,s,"sizeGrid",function(){return this._bitmap.sizeGrid?this._bitmap.sizeGrid.join(","):null},function(t){this._bitmap.sizeGrid=L.fillArray(I.defaultSizeGrid,t,Number)}),n(0,s,"measureWidth",function(){return this._bitmap.width}),n(0,s,"width",t.prototype._$get_width,function(t){e.superSet(T,this,"width",t),this._bitmap.width=0==t?1e-7:t}),n(0,s,"height",t.prototype._$get_height,function(t){e.superSet(T,this,"height",t),this._bitmap.height=0==t?1e-7:t}),i}(T),D=function(t){function i(t){this._tf=null,i.__super.call(this),void 0===t&&(t=""),u.defaultColor=I.labelColor,this.text=t}h(i,"laya.ui.Label",t);var s=i.prototype;return s.destroy=function(i){void 0===i&&(i=!0),t.prototype.destroy.call(this,i),this._tf=null},s.createChildren=function(){this.addChild(this._tf=new b)},s.changeText=function(t){this._tf.changeText(t)},n(0,s,"padding",function(){return this._tf.padding.join(",")},function(t){this._tf.padding=L.fillArray(I.labelPadding,t,Number)}),n(0,s,"bold",function(){return this._tf.bold},function(t){this._tf.bold=t}),n(0,s,"align",function(){return this._tf.align},function(t){this._tf.align=t}),n(0,s,"text",function(){return this._tf.text},function(t){this._tf.text!=t&&(t&&(t=L.adptString(t+"")),this._tf.text=t,this.event("change"),this._width&&this._height||this.onCompResize())}),n(0,s,"italic",function(){return this._tf.italic},function(t){this._tf.italic=t}),n(0,s,"wordWrap",function(){return this._tf.wordWrap},function(t){this._tf.wordWrap=t}),n(0,s,"font",function(){return this._tf.font},function(t){this._tf.font=t}),n(0,s,"dataSource",t.prototype._$get_dataSource,function(t){this._dataSource=t,"number"==typeof t||"string"==typeof t?this.text=t+"":e.superSet(T,this,"dataSource",t)}),n(0,s,"color",function(){return this._tf.color},function(t){this._tf.color=t}),n(0,s,"valign",function(){return this._tf.valign},function(t){this._tf.valign=t}),n(0,s,"leading",function(){return this._tf.leading},function(t){this._tf.leading=t}),n(0,s,"fontSize",function(){return this._tf.fontSize},function(t){this._tf.fontSize=t}),n(0,s,"bgColor",function(){return this._tf.bgColor},function(t){this._tf.bgColor=t}),n(0,s,"borderColor",function(){return this._tf.borderColor},function(t){this._tf.borderColor=t}),n(0,s,"stroke",function(){return this._tf.stroke},function(t){this._tf.stroke=t}),n(0,s,"strokeColor",function(){return this._tf.strokeColor},function(t){this._tf.strokeColor=t}),n(0,s,"textField",function(){return this._tf}),n(0,s,"measureWidth",function(){return this._tf.width}),n(0,s,"measureHeight",function(){return this._tf.height}),n(0,s,"width",function(){return this._width||this._tf.text?e.superGet(T,this,"width"):0},function(t){e.superSet(T,this,"width",t),this._tf.width=t}),n(0,s,"height",function(){return this._height||this._tf.text?e.superGet(T,this,"height"):0},function(t){e.superSet(T,this,"height",t),this._tf.height=t}),n(0,s,"overflow",function(){return this._tf.overflow},function(t){this._tf.overflow=t}),n(0,s,"underline",function(){return this._tf.underline},function(t){this._tf.underline=t}),n(0,s,"underlineColor",function(){return this._tf.underlineColor},function(t){this._tf.underlineColor=t}),i}(T),G=function(t){function i(t){this.changeHandler=null,this._bg=null,this._bar=null,this._skin=null,this._value=.5,i.__super.call(this),this.skin=t}h(i,"laya.ui.ProgressBar",t);var s=i.prototype;return s.destroy=function(i){void 0===i&&(i=!0),t.prototype.destroy.call(this,i),this._bg&&this._bg.destroy(i),this._bar&&this._bar.destroy(i),this._bg=this._bar=null,this.changeHandler=null},s.createChildren=function(){this.addChild(this._bg=new V),this.addChild(this._bar=new V),this._bar._bitmap.autoCacheCmd=!1},s.changeValue=function(){if(this.sizeGrid){var t=this.sizeGrid.split(","),i=Number(t[3]),e=Number(t[1]),s=(this.width-i-e)*this._value;this._bar.width=i+e+s,this._bar.visible=this._bar.width>i+e}else this._bar.width=this.width*this._value},n(0,s,"measureHeight",function(){return this._bg.height}),n(0,s,"skin",function(){return this._skin},function(t){this._skin!=t&&(this._skin=t,this._bg.skin=this._skin,this._bar.skin=this._skin.replace(".png","$bar.png"),this.callLater(this.changeValue))}),n(0,s,"measureWidth",function(){return this._bg.width}),n(0,s,"height",t.prototype._$get_height,function(t){e.superSet(T,this,"height",t),this._bg.height=this._height,this._bar.height=this._height}),n(0,s,"bar",function(){return this._bar}),n(0,s,"value",function(){return this._value},function(t){this._value!=t&&(t=t>1?1:t<0?0:t,this._value=t,this.callLater(this.changeValue),this.event("change"),this.changeHandler&&this.changeHandler.runWith(t))}),n(0,s,"bg",function(){return this._bg}),n(0,s,"sizeGrid",function(){return this._bg.sizeGrid},function(t){this._bg.sizeGrid=this._bar.sizeGrid=t}),n(0,s,"width",t.prototype._$get_width,function(t){e.superSet(T,this,"width",t),this._bg.width=this._width,this.callLater(this.changeValue)}),n(0,s,"dataSource",t.prototype._$get_dataSource,function(t){this._dataSource=t,"number"==typeof t||"string"==typeof t?this.value=Number(t):e.superSet(T,this,"dataSource",t)}),i}(T),R=(function(t){function i(){this._tipBox=null,this._tipText=null,this._defaultTipHandler=null,i.__super.call(this),this._tipBox=new T,this._tipBox.addChild(this._tipText=new b),this._tipText.x=this._tipText.y=5,this._tipText.color=i.tipTextColor,this._defaultTipHandler=this._showDefaultTip,e.stage.on("showtip",this,this._onStageShowTip),e.stage.on("hidetip",this,this._onStageHideTip),this.zOrder=1100}h(i,"laya.ui.TipManager",T);var s=i.prototype;s._onStageHideTip=function(t){e.timer.clear(this,this._showTip),this.closeAll(),this.removeSelf()},s._onStageShowTip=function(t){e.timer.once(i.tipDelay,this,this._showTip,[t],!0)},s._showTip=function(t){if("string"==typeof t){var i=String(t);Boolean(i)&&this._defaultTipHandler(i)}else t instanceof laya.utils.Handler?t.run():"function"==typeof t&&t.apply();e.stage.on("mousemove",this,this._onStageMouseMove),e.stage.on("mousedown",this,this._onStageMouseDown),this._onStageMouseMove(null)},s._onStageMouseDown=function(t){this.closeAll()},s._onStageMouseMove=function(t){this._showToStage(this,i.offsetX,i.offsetY)},s._showToStage=function(t,i,s){void 0===i&&(i=0),void 0===s&&(s=0);var h=t.getBounds();t.x=e.stage.mouseX+i,t.y=e.stage.mouseY+s,t.x+h.width>e.stage.width&&(t.x-=h.width+i),t.y+h.height>e.stage.height&&(t.y-=h.height+s)},s.closeAll=function(){e.timer.clear(this,this._showTip),e.stage.off("mousemove",this,this._onStageMouseMove),e.stage.off("mousedown",this,this._onStageMouseDown),this.removeChildren()},s.showDislayTip=function(t){this.addChild(t),this._showToStage(this),e._currentStage.addChild(this)},s._showDefaultTip=function(t){this._tipText.text=t;var s=this._tipBox.graphics;s.clear(),s.drawRect(0,0,this._tipText.width+10,this._tipText.height+10,i.tipBackColor),this.addChild(this._tipBox),this._showToStage(this),e._currentStage.addChild(this)},n(0,s,"defaultTipHandler",function(){return this._defaultTipHandler},function(t){this._defaultTipHandler=t}),i.offsetX=10,i.offsetY=15,i.tipTextColor="#ffffff",i.tipBackColor="#111111",i.tipDelay=200}(),function(t){function i(){this._idMap=null,this._aniList=null,this._watchMap={},i.__super.call(this)}var n;h(i,"laya.ui.View",H);var l=i.prototype;return l.createView=function(t){if(t.animations&&!this._idMap&&(this._idMap={}),i.createComp(t,this,this),t.animations){var e,s,h=[],n=t.animations,o=0,r=n.length;for(o=0;o<r;o++){switch(e=new _,s=n[o],e._setUp(this._idMap,s),this[s.name]=e,e._setControlNode(this),s.action){case 1:e.play(0,!1);break;case 2:e.play(0,!0)}h.push(e)}this._aniList=h}this._width>0&&null==t.props.hitTestPrior&&!this.mouseThrough&&(this.hitTestPrior=!0)},l.onEvent=function(t,i){},l.loadUI=function(t){var e=i.uiMap[t];e&&this.createView(e)},l.destroy=function(t){void 0===t&&(t=!0),this._aniList&&(this._aniList.length=0),this._idMap=null,this._aniList=null,this._watchMap=null,laya.ui.Component.prototype.destroy.call(this,t)},l.changeData=function(t){var i=this._watchMap[t];if(i){console.log("change",t);for(var e=0,s=i.length;e<s;e++){i[e].exe(this)}}},i._regs=function(){for(var t in i.uiClassMap)r.regClass(t,i.uiClassMap[t])},i.createComp=function(t,s,h,n){if(!(s=s||i.getCompInstance(t)))return console.warn("can not create:"+t.type),null;var o=t.child;if(o)for(var l=s instanceof laya.ui.List,a=0,c=o.length;a<c;a++){var u=o[a];if(!s.hasOwnProperty("itemRender")||"render"!=u.props.name&&"render"!==u.props.renderType)if("Graphic"==u.type)r.addGraphicsToSprite(u,s);else if(r.isDrawType(u.type))r.addGraphicToSprite(u,s,!0);else{if(l){var _=[],d=i.createComp(u,null,h,_);_.length&&(d._$bindData=_)}else d=i.createComp(u,null,h,n);"Script"==u.type?"owner"in d?d.owner=s:"target"in d&&(d.target=s):"mask"==u.props.renderType||"mask"==u.props.name?s.mask=d:d instanceof laya.display.Sprite&&s.addChild(d)}else s.itemRender=u}var f=t.props;for(var p in f){var g=f[p];i.eventDic[p]?g&&h&&s.on(p,h,h.onEvent,[g]):i.setCompValue(s,p,g,h,n)}return e.__typeof(s,"laya.ui.IItem")&&s.initItems(),t.compId&&h&&h._idMap&&(h._idMap[t.compId]=s),s},i.setCompValue=function(t,s,h,o,l){if("string"==typeof h&&h.indexOf("${")>-1){if(i._sheet||(i._sheet=r.getClass("laya.data.Table")),!i._sheet)return void console.warn("Can not find class Sheet");if(l)l.push(t,s,h);else if(o){-1==h.indexOf("].")&&(h=h.replace(".","[0]."));var a=new n(t,s,h);a.exe(o);for(var c,u,_=h.replace(/\[.*?\]\./g,".");null!=(c=i._parseWatchData.exec(_));){for(var d=c[1];null!=(u=i._parseKeyWord.exec(d));){var f=u[0],p=o._watchMap[f]||(o._watchMap[f]=[]);p.push(a),i._sheet.I.notifer.on(f,o,o.changeData,[f])}(p=o._watchMap[d]||(o._watchMap[d]=[])).push(a),i._sheet.I.notifer.on(d,o,o.changeData,[d])}}}else if("var"===s&&o)o[h]=t;else if("onClick"==s){var g=e._runScript("(function(){"+h+"})");t.on("click",o,g)}else t[s]="true"===h||"false"!==h&&h},i.getCompInstance=function(t){var s,h=t.props?t.props.runtime:null;return s=h?i.viewClassMap[h]||i.uiClassMap[h]||e.__classmap[h]:i.uiClassMap[t.type],t.props&&t.props.hasOwnProperty("renderType")&&"instance"==t.props.renderType?s.instance:s?new s:null},i.regComponent=function(t,e){i.uiClassMap[t]=e,r.regClass(t,e)},i.regViewRuntime=function(t,e){i.viewClassMap[t]=e},i.uiMap={},i.viewClassMap={},i._sheet=null,s(i,["uiClassMap",function(){return this.uiClassMap={ViewStack:tt,LinkButton:N,TextArea:at,ColorPicker:A,Box:H,Button:N,CheckBox:W,Clip:O,ComboBox:Y,Component:T,HScrollBar:K,HSlider:Z,Image:V,Label:D,List:U,Panel:j,ProgressBar:G,Radio:J,RadioGroup:rt,ScrollBar:X,Slider:E,Tab:lt,TextInput:et,View:i,VScrollBar:it,VSlider:st,Tree:Q,HBox:nt,VBox:ot,Sprite:C,Animation:o,Text:b,FontClip:F}},"eventDic",function(){return this.eventDic={mousedown:!0,mouseup:!0,mousemove:!0,mouseover:!0,mouseout:!0,click:!0,doubleclick:!0,rightmousedown:!0,rightmouseup:!0,rightclick:!0}},"_parseWatchData",function(){return this._parseWatchData=/\${(.*?)}/g},"_parseKeyWord",function(){return this._parseKeyWord=/[a-zA-Z_][a-zA-Z0-9_]*(?:(?:\.[a-zA-Z_][a-zA-Z0-9_]*)+)/g}]),i.__init$=function(){i._regs(),n=function(){function t(t,i,e){this.comp=null,this.prop=null,this.value=null,this.comp=t,this.prop=i,this.value=e}h(t,"");return t.prototype.exe=function(t){var i=L.getBindFun(this.value);this.comp[this.prop]=i.call(this,t)},t}()},i}()),W=function(t){function i(t,e){void 0===e&&(e=""),i.__super.call(this,t,e)}h(i,"laya.ui.CheckBox",t);var s=i.prototype;return s.preinitialize=function(){laya.ui.Component.prototype.preinitialize.call(this),this.toggle=!0,this._autoSize=!1},s.initialize=function(){t.prototype.initialize.call(this),this.createText(),this._text.align="left",this._text.valign="top",this._text.width=0},n(0,s,"dataSource",t.prototype._$get_dataSource,function(t){this._dataSource=t,"boolean"==typeof t?this.selected=t:"string"==typeof t?this.selected="true"===t:e.superSet(N,this,"dataSource",t)}),i}(N),$=function(t){function i(){this._space=0,this._align="none",this._itemChanged=!1,i.__super.call(this)}h(i,"laya.ui.LayoutBox",H);var e=i.prototype;return e.addChild=function(t){return t.on("resize",this,this.onResize),this._setItemChanged(),laya.display.Node.prototype.addChild.call(this,t)},e.onResize=function(t){this._setItemChanged()},e.addChildAt=function(t,i){return t.on("resize",this,this.onResize),this._setItemChanged(),laya.display.Node.prototype.addChildAt.call(this,t,i)},e.removeChild=function(t){return t.off("resize",this,this.onResize),this._setItemChanged(),laya.display.Node.prototype.removeChild.call(this,t)},e.removeChildAt=function(t){return this.getChildAt(t).off("resize",this,this.onResize),this._setItemChanged(),laya.display.Node.prototype.removeChildAt.call(this,t)},e.refresh=function(){this._setItemChanged()},e.changeItems=function(){this._itemChanged=!1},e.sortItem=function(t){t&&t.sort(function(t,i){return t.y-i.y})},e._setItemChanged=function(){this._itemChanged||(this._itemChanged=!0,this.callLater(this.changeItems))},n(0,e,"space",function(){return this._space},function(t){this._space=t,this._setItemChanged()}),n(0,e,"align",function(){return this._align},function(t){this._align=t,this._setItemChanged()}),i}(),F=function(t){function i(t,e){this._valueArr=null,this._indexMap=null,this._sheet=null,this._direction="horizontal",this._spaceX=0,this._spaceY=0,this._align="left",this._wordsW=0,this._wordsH=0,i.__super.call(this),t&&(this.skin=t),e&&(this.sheet=e)}h(i,"laya.ui.FontClip",t);var s=i.prototype;return s.createChildren=function(){this._bitmap=new z,this.on("loaded",this,this._onClipLoaded)},s._onClipLoaded=function(){this.callLater(this.changeValue)},s.changeValue=function(){if(this._sources&&this._valueArr){this.graphics.clear(!0);var t;if(t=this._sources[0]){var i="horizontal"===this._direction;i?(this._wordsW=this._valueArr.length*(t.sourceWidth+this.spaceX),this._wordsH=t.sourceHeight):(this._wordsW=t.sourceWidth,this._wordsH=(t.sourceHeight+this.spaceY)*this._valueArr.length);var e=0;if(this._width)switch(this._align){case"center":e=.5*(this._width-this._wordsW);break;case"right":e=this._width-this._wordsW;break;default:e=0}for(var s=0,h=this._valueArr.length;s<h;s++){var n=this._indexMap[this._valueArr.charAt(s)];this.sources[n]&&(t=this.sources[n],i?this.graphics.drawTexture(t,e+s*(t.sourceWidth+this.spaceX),0,t.sourceWidth,t.sourceHeight):this.graphics.drawTexture(t,0+e,s*(t.sourceHeight+this.spaceY),t.sourceWidth,t.sourceHeight))}this._width||(this.resetLayoutX(),this.callLater(this.changeSize)),this._height||(this.resetLayoutY(),this.callLater(this.changeSize))}}},s.destroy=function(i){void 0===i&&(i=!0),this._valueArr=null,this._indexMap=null,this.graphics.clear(!0),this.removeSelf(),this.off("loaded",this,this._onClipLoaded),t.prototype.destroy.call(this,i)},n(0,s,"sheet",function(){return this._sheet},function(t){t+="",this._sheet=t;var i=t.split(" ");this._clipX=String(i[0]).length,this.clipY=i.length,this._indexMap={};for(var e=0;e<this._clipY;e++)for(var s=i[e].split(""),h=0,n=s.length;h<n;h++)this._indexMap[s[h]]=e*this._clipX+h}),n(0,s,"height",t.prototype._$get_height,function(t){e.superSet(O,this,"height",t),this.callLater(this.changeValue)}),n(0,s,"direction",function(){return this._direction},function(t){this._direction=t,this.callLater(this.changeValue)}),n(0,s,"value",function(){return this._valueArr?this._valueArr:""},function(t){t+="",this._valueArr=t,this.callLater(this.changeValue)}),n(0,s,"width",t.prototype._$get_width,function(t){e.superSet(O,this,"width",t),this.callLater(this.changeValue)}),n(0,s,"spaceX",function(){return this._spaceX},function(t){this._spaceX=t,"horizontal"===this._direction&&this.callLater(this.changeValue)}),n(0,s,"spaceY",function(){return this._spaceY},function(t){this._spaceY=t,"horizontal"!==this._direction&&this.callLater(this.changeValue)}),n(0,s,"align",function(){return this._align},function(t){this._align=t,this.callLater(this.changeValue)}),n(0,s,"measureWidth",function(){return this._wordsW}),n(0,s,"measureHeight",function(){return this._wordsH}),i}(O),U=function(t){function i(){this.selectHandler=null,this.renderHandler=null,this.mouseHandler=null,this.selectEnable=!1,this.totalPage=0,this._content=null,this._scrollBar=null,this._itemRender=null,this._repeatX=0,this._repeatY=0,this._repeatX2=0,this._repeatY2=0,this._spaceX=0,this._spaceY=0,this._array=null,this._startIndex=0,this._selectedIndex=-1,this._page=0,this._isVertical=!0,this._cellSize=20,this._cellOffset=0,this._isMoved=!1,this.cacheContent=!1,this._createdLine=0,this._cellChanged=!1,i.__super.call(this),this._cells=[],this._offset=new m}h(i,"laya.ui.List",t);var s=i.prototype;return e.imps(s,{"laya.ui.IRender":!0,"laya.ui.IItem":!0}),s.destroy=function(t){void 0===t&&(t=!0),this._content&&this._content.destroy(t),this._scrollBar&&this._scrollBar.destroy(t),laya.ui.Component.prototype.destroy.call(this,t),this._content=null,this._scrollBar=null,this._itemRender=null,this._cells=null,this._array=null,this.selectHandler=this.renderHandler=this.mouseHandler=null},s.createChildren=function(){this.addChild(this._content=new H)},s.onScrollStart=function(){this._$P.cacheAs||(this._$P.cacheAs=e.superGet(H,this,"cacheAs")),e.superSet(H,this,"cacheAs","none"),this._scrollBar.once("end",this,this.onScrollEnd)},s.onScrollEnd=function(){e.superSet(H,this,"cacheAs",this._$P.cacheAs)},s._removePreScrollBar=function(){var t=this.removeChildByName("scrollBar");t&&t.destroy(!0)},s.changeCells=function(){if(this._cellChanged=!1,this._itemRender){this.scrollBar=this.getChildByName("scrollBar");var t=this._getOneCell(),i=t.width+this._spaceX||1,e=t.height+this._spaceY||1;this._width>0&&(this._repeatX2=this._isVertical?Math.round(this._width/i):Math.ceil(this._width/i)),this._height>0&&(this._repeatY2=this._isVertical?Math.ceil(this._height/e):Math.round(this._height/e));var s=this._width?this._width:i*this.repeatX-this._spaceX,h=this._height?this._height:e*this.repeatY-this._spaceY;this._cellSize=this._isVertical?e:i,this._cellOffset=this._isVertical?e*Math.max(this._repeatY2,this._repeatY)-h-this._spaceY:i*Math.max(this._repeatX2,this._repeatX)-s-this._spaceX,this._isVertical&&this._scrollBar?this._scrollBar.height=h:!this._isVertical&&this._scrollBar&&(this._scrollBar.width=s),this.setContentSize(s,h);var n=this._isVertical?this.repeatX:this.repeatY,o=(this._isVertical?this.repeatY:this.repeatX)+(this._scrollBar?1:0);this._createItems(0,n,o),this._createdLine=o,this._array&&(this.array=this._array,this.runCallLater(this.renderItems))}},s._getOneCell=function(){if(0===this._cells.length){var t=this.createItem();if(this._offset.setTo(t.x,t.y),this.cacheContent)return t;this._cells.push(t)}return this._cells[0]},s._createItems=function(t,i,e){var s=this._content,h=this._getOneCell(),n=h.width+this._spaceX,o=h.height+this._spaceY;if(this.cacheContent){var r=new H;r.cacheAsBitmap=!0,r.pos((this._isVertical?0:t)*n,(this._isVertical?t:0)*o),this._content.addChild(r),this._content.optimizeScrollRect=!0,s=r}else{for(var l=[],a=this._cells.length-1;a>-1;a--){var c=this._cells[a];c.removeSelf(),l.push(c)}this._cells.length=0}for(var u=t;u<e;u++)for(var _=0;_<i;_++)(h=l&&l.length?l.pop():this.createItem()).x=(this._isVertical?_:u)*n-s.x,h.y=(this._isVertical?u:_)*o-s.y,h.name="item"+(u*i+_),s.addChild(h),this.addCell(h)},s.createItem=function(){var t=[];if("function"==typeof this._itemRender)var i=new this._itemRender;else i=R.createComp(this._itemRender,null,null,t);if(0==t.length&&i._watchMap){var e=i._watchMap;for(var s in e)for(var h=e[s],n=0;n<h.length;n++){var o=h[n];t.push(o.comp,o.prop,o.value)}}return t.length&&(i._$bindData=t),i},s.addCell=function(t){t.on("click",this,this.onCellMouse),t.on("rightclick",this,this.onCellMouse),t.on("mouseover",this,this.onCellMouse),t.on("mouseout",this,this.onCellMouse),t.on("mousedown",this,this.onCellMouse),t.on("mouseup",this,this.onCellMouse),this._cells.push(t)},s.initItems=function(){if(!this._itemRender&&null!=this.getChildByName("item0")){this.repeatX=1;var t=0;t=0;for(var i=0;i<1e4;i++){var e=this.getChildByName("item"+i);{if(!e)break;this.addCell(e),t++}}this.repeatY=t}},s.setContentSize=function(t,i){this._content.width=t,this._content.height=i,(this._scrollBar||0!=this._offset.x||0!=this._offset.y)&&(this._content.scrollRect||(this._content.scrollRect=new y),this._content.scrollRect.setTo(-this._offset.x,-this._offset.y,t,i),this._content.scrollRect=this._content.scrollRect),this.event("resize")},s.onCellMouse=function(t){"mousedown"===t.type&&(this._isMoved=!1);var i=t.currentTarget,e=this._startIndex+this._cells.indexOf(i);e<0||("click"===t.type||"rightclick"===t.type?this.selectEnable&&!this._isMoved?this.selectedIndex=e:this.changeCellState(i,!0,0):"mouseover"!==t.type&&"mouseout"!==t.type||this._selectedIndex===e||this.changeCellState(i,"mouseover"===t.type,0),this.mouseHandler&&this.mouseHandler.runWith([t,e]))},s.changeCellState=function(t,i,e){var s=t.getChildByName("selectBox");s&&(this.selectEnable=!0,s.visible=i,s.index=e)},s.changeSize=function(){laya.ui.Component.prototype.changeSize.call(this),this.setContentSize(this.width,this.height),this._scrollBar&&this.callLater(this.onScrollBarChange)},s.onScrollBarChange=function(t){this.runCallLater(this.changeCells);var i=this._scrollBar.value,e=this._isVertical?this.repeatX:this.repeatY,s=this._isVertical?this.repeatY:this.repeatX,h=Math.floor(i/this._cellSize);if(this.cacheContent)o=s+1,this._createdLine-h<o&&(this._createItems(this._createdLine,e,this._createdLine+o),this.renderItems(this._createdLine*e,0),this._createdLine+=o);else{var n=h*e,o=0;if(n>this._startIndex){o=n-this._startIndex;var r=!0,l=this._startIndex+e*(s+1);this._isMoved=!0}else n<this._startIndex&&(o=this._startIndex-n,r=!1,l=this._startIndex-1,this._isMoved=!0);for(var a=0;a<o;a++){if(r){var c=this._cells.shift();this._cells[this._cells.length]=c;var u=l+a}else c=this._cells.pop(),this._cells.unshift(c),u=l-a;var _=Math.floor(u/e)*this._cellSize;this._isVertical?c.y=_:c.x=_,this.renderItem(c,u)}this._startIndex=n,this.changeSelectStatus()}var d=this._content.scrollRect;this._isVertical?(d.y=i-this._offset.y,d.x=-this._offset.x):(d.y=-this._offset.y,d.x=i-this._offset.x),this._content.scrollRect=d},s.posCell=function(t,i){if(this._scrollBar){var e=this._isVertical?this.repeatX:this.repeatY,s=(this._isVertical?this.repeatY:this.repeatX,Math.floor(i/e)*this._cellSize);this._isVertical?t.y=s:t.x=s}},s.changeSelectStatus=function(){for(var t=0,i=this._cells.length;t<i;t++)this.changeCellState(this._cells[t],this._selectedIndex===this._startIndex+t,1)},s.renderItems=function(t,i){void 0===t&&(t=0),void 0===i&&(i=0);for(var e=t,s=i||this._cells.length;e<s;e++)this.renderItem(this._cells[e],this._startIndex+e);this.changeSelectStatus()},s.renderItem=function(t,i){this._array&&i>=0&&i<this._array.length?(t.visible=!0,t._$bindData?(t._dataSource=this._array[i],this._bindData(t,this._array[i])):t.dataSource=this._array[i],this.cacheContent||this.posCell(t,i),this.hasListener("render")&&this.event("render",[t,i]),this.renderHandler&&this.renderHandler.runWith([t,i])):(t.visible=!1,t.dataSource=null)},s._bindData=function(t,i){for(var e=t._$bindData,s=0,h=e.length;s<h;s++){var n=e[s++],o=e[s++],r=e[s],l=L.getBindFun(r);n[o]=l.call(this,i)}},s.refresh=function(){this.array=this._array},s.getItem=function(t){return t>-1&&t<this._array.length?this._array[t]:null},s.changeItem=function(t,i){t>-1&&t<this._array.length&&(this._array[t]=i,t>=this._startIndex&&t<this._startIndex+this._cells.length&&this.renderItem(this.getCell(t),t))},s.setItem=function(t,i){this.changeItem(t,i)},s.addItem=function(t){this._array.push(t),this.array=this._array},s.addItemAt=function(t,i){this._array.splice(i,0,t),this.array=this._array},s.deleteItem=function(t){this._array.splice(t,1),this.array=this._array},s.getCell=function(t){return this.runCallLater(this.changeCells),t>-1&&this._cells?this._cells[(t-this._startIndex)%this._cells.length]:null},s.scrollTo=function(t){if(this._scrollBar){var i=this._isVertical?this.repeatX:this.repeatY;this._scrollBar.value=Math.floor(t/i)*this._cellSize}else this.startIndex=t},s.tweenTo=function(t,i,e){if(void 0===i&&(i=200),this._scrollBar){var s=this._isVertical?this.repeatX:this.repeatY;w.to(this._scrollBar,{value:Math.floor(t/s)*this._cellSize},i,null,e,0,!0)}else this.startIndex=t,e&&e.run()},s._setCellChanged=function(){this._cellChanged||(this._cellChanged=!0,this.callLater(this.changeCells))},s.commitMeasure=function(){this.runCallLater(this.changeCells)},n(0,s,"cacheAs",t.prototype._$get_cacheAs,function(t){e.superSet(H,this,"cacheAs",t),this._scrollBar&&(this._$P.cacheAs=null,"none"!==t?this._scrollBar.on("start",this,this.onScrollStart):this._scrollBar.off("start",this,this.onScrollStart))}),n(0,s,"content",function(){return this._content}),n(0,s,"height",t.prototype._$get_height,function(t){t!=this._height&&(e.superSet(H,this,"height",t),this._setCellChanged())}),n(0,s,"itemRender",function(){return this._itemRender},function(t){if(this._itemRender!=t){this._itemRender=t;for(var i=this._cells.length-1;i>-1;i--)this._cells[i].destroy();this._cells.length=0,this._setCellChanged()}}),n(0,s,"vScrollBarSkin",function(){return this._scrollBar?this._scrollBar.skin:null},function(t){this._removePreScrollBar();var i=new it;i.name="scrollBar",i.right=0,t&&" "!=t&&(i.skin=t),this.scrollBar=i,this.addChild(i),this._setCellChanged()}),n(0,s,"page",function(){return this._page},function(t){this._page=t,this._array&&(this._page=t>0?t:0,this._page=this._page<this.totalPage?this._page:this.totalPage-1,this.startIndex=this._page*this.repeatX*this.repeatY)}),n(0,s,"hScrollBarSkin",function(){return this._scrollBar?this._scrollBar.skin:null},function(t){this._removePreScrollBar();var i=new K;i.name="scrollBar",i.bottom=0,t&&" "!=t&&(i.skin=t),this.scrollBar=i,this.addChild(i),this._setCellChanged()}),n(0,s,"repeatX",function(){return this._repeatX>0?this._repeatX:this._repeatX2>0?this._repeatX2:1},function(t){this._repeatX=t,this._setCellChanged()}),n(0,s,"scrollBar",function(){return this._scrollBar},function(t){this._scrollBar!=t&&(this._scrollBar=t,t&&(this._isVertical=this._scrollBar.isVertical,this.addChild(this._scrollBar),this._scrollBar.on("change",this,this.onScrollBarChange)))}),n(0,s,"width",t.prototype._$get_width,function(t){t!=this._width&&(e.superSet(H,this,"width",t),this._setCellChanged())}),n(0,s,"repeatY",function(){return this._repeatY>0?this._repeatY:this._repeatY2>0?this._repeatY2:1},function(t){this._repeatY=t,this._setCellChanged()}),n(0,s,"spaceX",function(){return this._spaceX},function(t){this._spaceX=t,this._setCellChanged()}),n(0,s,"spaceY",function(){return this._spaceY},function(t){this._spaceY=t,this._setCellChanged()}),n(0,s,"selectedIndex",function(){return this._selectedIndex},function(t){this._selectedIndex!=t&&(this._selectedIndex=t,this.changeSelectStatus(),this.event("change"),this.selectHandler&&this.selectHandler.runWith(t),this.startIndex=this._startIndex)}),n(0,s,"selectedItem",function(){return-1!=this._selectedIndex?this._array[this._selectedIndex]:null},function(t){this.selectedIndex=this._array.indexOf(t)}),n(0,s,"length",function(){return this._array?this._array.length:0}),n(0,s,"selection",function(){return this.getCell(this._selectedIndex)},function(t){this.selectedIndex=this._startIndex+this._cells.indexOf(t)}),n(0,s,"startIndex",function(){return this._startIndex},function(t){this._startIndex=t>0?t:0,this.callLater(this.renderItems)}),n(0,s,"array",function(){return this._array},function(t){this.runCallLater(this.changeCells),this._array=t||[];var i=this._array.length;if(this.totalPage=Math.ceil(i/(this.repeatX*this.repeatY)),this._selectedIndex=this._selectedIndex<i?this._selectedIndex:i-1,this.startIndex=this._startIndex,this._scrollBar){this._scrollBar.stopScroll();var e=this._isVertical?this.repeatX:this.repeatY,s=this._isVertical?this.repeatY:this.repeatX,h=Math.ceil(i/e);(this._cellOffset>0?this.totalPage+1:this.totalPage)>1?(this._scrollBar.scrollSize=this._cellSize,this._scrollBar.thumbPercent=s/h,this._scrollBar.setScroll(0,(h-s)*this._cellSize+this._cellOffset,this._scrollBar.value),this._scrollBar.target=this._content):(this._scrollBar.setScroll(0,0,0),this._scrollBar.target=this._content)}}),n(0,s,"dataSource",t.prototype._$get_dataSource,function(t){this._dataSource=t,"number"==typeof t&&Math.floor(t)==t||"string"==typeof t?this.selectedIndex=parseInt(t):t instanceof Array?this.array=t:e.superSet(H,this,"dataSource",t)}),n(0,s,"cells",function(){return this.runCallLater(this.changeCells),this._cells}),i}(H),j=function(t){function i(){this._content=null,this._vScrollBar=null,this._hScrollBar=null,this._scrollChanged=!1,i.__super.call(this),this.width=this.height=100}h(i,"laya.ui.Panel",t);var s=i.prototype;return s.destroy=function(t){void 0===t&&(t=!0),laya.ui.Component.prototype.destroy.call(this,t),this._content&&this._content.destroy(t),this._vScrollBar&&this._vScrollBar.destroy(t),this._hScrollBar&&this._hScrollBar.destroy(t),this._vScrollBar=null,this._hScrollBar=null,this._content=null},s.destroyChildren=function(){this._content.destroyChildren()},s.createChildren=function(){laya.display.Node.prototype.addChild.call(this,this._content=new H)},s.addChild=function(t){return t.on("resize",this,this.onResize),this._setScrollChanged(),this._content.addChild(t)},s.onResize=function(){this._setScrollChanged()},s.addChildAt=function(t,i){return t.on("resize",this,this.onResize),this._setScrollChanged(),this._content.addChildAt(t,i)},s.removeChild=function(t){return t.off("resize",this,this.onResize),this._setScrollChanged(),this._content.removeChild(t)},s.removeChildAt=function(t){return this.getChildAt(t).off("resize",this,this.onResize),this._setScrollChanged(),this._content.removeChildAt(t)},s.removeChildren=function(t,i){void 0===t&&(t=0),void 0===i&&(i=2147483647);for(var e=this._content.numChildren-1;e>-1;e--)this._content.removeChildAt(e);return this._setScrollChanged(),this},s.getChildAt=function(t){return this._content.getChildAt(t)},s.getChildByName=function(t){return this._content.getChildByName(t)},s.getChildIndex=function(t){return this._content.getChildIndex(t)},s.changeScroll=function(){this._scrollChanged=!1;var t=this.contentWidth||1,i=this.contentHeight||1,e=this._vScrollBar,s=this._hScrollBar,h=e&&i>this._height,n=s&&t>this._width,o=h?this._width-e.width:this._width,r=n?this._height-s.height:this._height;e&&(e.x=this._width-e.width,e.y=0,e.height=this._height-(n?s.height:0),e.scrollSize=Math.max(.033*this._height,1),e.thumbPercent=r/i,e.setScroll(0,i-r,e.value)),s&&(s.x=0,s.y=this._height-s.height,s.width=this._width-(h?e.width:0),s.scrollSize=Math.max(.033*this._width,1),s.thumbPercent=o/t,s.setScroll(0,t-o,s.value))},s.changeSize=function(){laya.ui.Component.prototype.changeSize.call(this),this.setContentSize(this._width,this._height)},s.setContentSize=function(t,i){var e=this._content;e.width=t,e.height=i,e.scrollRect||(e.scrollRect=new y),e.scrollRect.setTo(0,0,t,i),e.scrollRect=e.scrollRect},s.onScrollBarChange=function(t){var i=this._content.scrollRect;if(i){var e=Math.round(t.value);t.isVertical?i.y=e:i.x=e,this._content.scrollRect=i}},s.scrollTo=function(t,i){void 0===t&&(t=0),void 0===i&&(i=0),this.vScrollBar&&(this.vScrollBar.value=i),this.hScrollBar&&(this.hScrollBar.value=t)},s.refresh=function(){this.changeScroll()},s.onScrollStart=function(){this._$P.cacheAs||(this._$P.cacheAs=e.superGet(H,this,"cacheAs")),e.superSet(H,this,"cacheAs","none"),this._hScrollBar&&this._hScrollBar.once("end",this,this.onScrollEnd),this._vScrollBar&&this._vScrollBar.once("end",this,this.onScrollEnd)},s.onScrollEnd=function(){e.superSet(H,this,"cacheAs",this._$P.cacheAs)},s._setScrollChanged=function(){this._scrollChanged||(this._scrollChanged=!0,this.callLater(this.changeScroll))},n(0,s,"numChildren",function(){return this._content.numChildren}),n(0,s,"hScrollBarSkin",function(){return this._hScrollBar?this._hScrollBar.skin:null},function(t){null==this._hScrollBar&&(laya.display.Node.prototype.addChild.call(this,this._hScrollBar=new K),this._hScrollBar.on("change",this,this.onScrollBarChange,[this._hScrollBar]),this._hScrollBar.target=this._content,this._setScrollChanged()),this._hScrollBar.skin=t}),n(0,s,"contentWidth",function(){for(var t=0,i=this._content.numChildren-1;i>-1;i--){var e=this._content.getChildAt(i);t=Math.max(e.x+e.width*e.scaleX,t)}return t}),n(0,s,"contentHeight",function(){for(var t=0,i=this._content.numChildren-1;i>-1;i--){var e=this._content.getChildAt(i);t=Math.max(e.y+e.height*e.scaleY,t)}return t}),n(0,s,"width",t.prototype._$get_width,function(t){e.superSet(H,this,"width",t),this._setScrollChanged()}),n(0,s,"hScrollBar",function(){return this._hScrollBar}),n(0,s,"content",function(){return this._content}),n(0,s,"height",t.prototype._$get_height,function(t){e.superSet(H,this,"height",t),this._setScrollChanged()}),n(0,s,"vScrollBarSkin",function(){return this._vScrollBar?this._vScrollBar.skin:null},function(t){null==this._vScrollBar&&(laya.display.Node.prototype.addChild.call(this,this._vScrollBar=new it),this._vScrollBar.on("change",this,this.onScrollBarChange,[this._vScrollBar]),this._vScrollBar.target=this._content,this._setScrollChanged()),this._vScrollBar.skin=t}),n(0,s,"vScrollBar",function(){return this._vScrollBar}),n(0,s,"cacheAs",t.prototype._$get_cacheAs,function(t){e.superSet(H,this,"cacheAs",t),this._$P.cacheAs=null,"none"!==t?(this._hScrollBar&&this._hScrollBar.on("start",this,this.onScrollStart),this._vScrollBar&&this._vScrollBar.on("start",this,this.onScrollStart)):(this._hScrollBar&&this._hScrollBar.off("start",this,this.onScrollStart),this._vScrollBar&&this._vScrollBar.off("start",this,this.onScrollStart))}),i}(H),K=function(t){function i(){i.__super.call(this)}h(i,"laya.ui.HScrollBar",t);return i.prototype.initialize=function(){t.prototype.initialize.call(this),this.slider.isVertical=!1},i}(X),Z=function(t){function i(t){i.__super.call(this,t),this.isVertical=!1}return h(i,"laya.ui.HSlider",E),i}(),q=function(t){function i(t,e){this.selectHandler=null,this._items=null,this._selectedIndex=-1,this._skin=null,this._direction="horizontal",this._space=0,this._labels=null,this._labelColors=null,this._labelFont=null,this._labelStrokeColor=null,this._strokeColors=null,this._labelStroke=NaN,this._labelSize=0,this._labelBold=!1,this._labelPadding=null,this._labelAlign=null,this._stateNum=0,this._labelChanged=!1,i.__super.call(this),this.skin=e,this.labels=t}h(i,"laya.ui.UIGroup",t);var s=i.prototype;return e.imps(s,{"laya.ui.IItem":!0}),s.preinitialize=function(){this.mouseEnabled=!0},s.destroy=function(t){void 0===t&&(t=!0),laya.ui.Component.prototype.destroy.call(this,t),this._items&&(this._items.length=0),this._items=null,this.selectHandler=null},s.addItem=function(t,i){void 0===i&&(i=!0);var e=t,s=this._items.length;if(e.name="item"+s,this.addChild(e),this.initItems(),i&&s>0){var h=this._items[s-1];"horizontal"==this._direction?e.x=h.x+h.width+this._space:e.y=h.y+h.height+this._space}else i&&(e.x=0,e.y=0);return s},s.delItem=function(t,i){void 0===i&&(i=!0);var e=this._items.indexOf(t);if(-1!=e){var s=t;this.removeChild(s);for(var h=e+1,n=this._items.length;h<n;h++){var o=this._items[h];o.name="item"+(h-1),i&&("horizontal"==this._direction?o.x-=s.width+this._space:o.y-=s.height+this._space)}if(this.initItems(),this._selectedIndex>-1){var r=0;r=this._selectedIndex<this._items.length?this._selectedIndex:this._selectedIndex-1,this._selectedIndex=-1,this.selectedIndex=r}}},s.initItems=function(){this._items||(this._items=[]),this._items.length=0;for(var t=0;t<1e4;t++){var i=this.getChildByName("item"+t);if(null==i)break;this._items.push(i),i.selected=t===this._selectedIndex,i.clickHandler=f.create(this,this.itemClick,[t],!1)}},s.itemClick=function(t){this.selectedIndex=t},s.setSelect=function(t,i){this._items&&t>-1&&t<this._items.length&&(this._items[t].selected=i)},s.createItem=function(t,i){return null},s.changeLabels=function(){if(this._labelChanged=!1,this._items)for(var t=0,i=0,e=this._items.length;i<e;i++){var s=this._items[i];this._skin&&(s.skin=this._skin),this._labelColors&&(s.labelColors=this._labelColors),this._labelSize&&(s.labelSize=this._labelSize),this._labelStroke&&(s.labelStroke=this._labelStroke),this._labelStrokeColor&&(s.labelStrokeColor=this._labelStrokeColor),this._strokeColors&&(s.strokeColors=this._strokeColors),this._labelBold&&(s.labelBold=this._labelBold),this._labelPadding&&(s.labelPadding=this._labelPadding),this._labelAlign&&(s.labelAlign=this._labelAlign),this._stateNum&&(s.stateNum=this._stateNum),this._labelFont&&(s.labelFont=this._labelFont),"horizontal"===this._direction?(s.y=0,s.x=t,t+=s.width+this._space):(s.x=0,s.y=t,t+=s.height+this._space)}this.changeSize()},s.commitMeasure=function(){this.runCallLater(this.changeLabels)},s._setLabelChanged=function(){this._labelChanged||(this._labelChanged=!0,this.callLater(this.changeLabels))},n(0,s,"labelStrokeColor",function(){return this._labelStrokeColor},function(t){this._labelStrokeColor!=t&&(this._labelStrokeColor=t,this._setLabelChanged())}),n(0,s,"skin",function(){return this._skin},function(t){this._skin!=t&&(this._skin=t,this._setLabelChanged())}),n(0,s,"selectedIndex",function(){return this._selectedIndex},function(t){this._selectedIndex!=t&&(this.setSelect(this._selectedIndex,!1),this._selectedIndex=t,this.setSelect(t,!0),this.event("change"),this.selectHandler&&this.selectHandler.runWith(this._selectedIndex))}),n(0,s,"labels",function(){return this._labels},function(t){if(this._labels!=t){if(this._labels=t,this.removeChildren(),this._setLabelChanged(),this._labels)for(var i=this._labels.split(","),e=0,s=i.length;e<s;e++){var h=this.createItem(this._skin,i[e]);h.name="item"+e,this.addChild(h)}this.initItems()}}),n(0,s,"strokeColors",function(){return this._strokeColors},function(t){this._strokeColors!=t&&(this._strokeColors=t,this._setLabelChanged())}),n(0,s,"labelColors",function(){return this._labelColors},function(t){this._labelColors!=t&&(this._labelColors=t,this._setLabelChanged())}),n(0,s,"labelStroke",function(){return this._labelStroke},function(t){this._labelStroke!=t&&(this._labelStroke=t,this._setLabelChanged())}),n(0,s,"labelSize",function(){return this._labelSize},function(t){this._labelSize!=t&&(this._labelSize=t,this._setLabelChanged())}),n(0,s,"stateNum",function(){return this._stateNum},function(t){this._stateNum!=t&&(this._stateNum=t,this._setLabelChanged())}),n(0,s,"labelBold",function(){return this._labelBold},function(t){this._labelBold!=t&&(this._labelBold=t,this._setLabelChanged())}),n(0,s,"labelFont",function(){return this._labelFont},function(t){this._labelFont!=t&&(this._labelFont=t,this._setLabelChanged())}),n(0,s,"labelPadding",function(){return this._labelPadding},function(t){this._labelPadding!=t&&(this._labelPadding=t,this._setLabelChanged())}),n(0,s,"direction",function(){return this._direction},function(t){this._direction=t,this._setLabelChanged()}),n(0,s,"space",function(){return this._space},function(t){this._space=t,this._setLabelChanged()}),n(0,s,"items",function(){return this._items}),n(0,s,"selection",function(){return this._selectedIndex>-1&&this._selectedIndex<this._items.length?this._items[this._selectedIndex]:null},function(t){this.selectedIndex=this._items.indexOf(t)}),n(0,s,"dataSource",t.prototype._$get_dataSource,function(t){this._dataSource=t,"number"==typeof t&&Math.floor(t)==t||"string"==typeof t?this.selectedIndex=parseInt(t):t instanceof Array?this.labels=t.join(","):e.superSet(H,this,"dataSource",t)}),i}(H),J=function(t){function i(t,e){this._value=null,void 0===e&&(e=""),i.__super.call(this,t,e)}h(i,"laya.ui.Radio",t);var e=i.prototype;return e.destroy=function(i){void 0===i&&(i=!0),t.prototype.destroy.call(this,i),this._value=null},e.preinitialize=function(){laya.ui.Component.prototype.preinitialize.call(this),this.toggle=!1,this._autoSize=!1},e.initialize=function(){t.prototype.initialize.call(this),this.createText(),this._text.align="left",this._text.valign="top",this._text.width=0,this.on("click",this,this.onClick)},e.onClick=function(t){this.selected=!0},n(0,e,"value",function(){return null!=this._value?this._value:this.label},function(t){this._value=t}),i}(N),Q=function(t){function i(){this._list=null,this._source=null,this._renderHandler=null,this._spaceLeft=10,this._spaceBottom=0,this._keepStatus=!0,i.__super.call(this),this.width=this.height=200}h(i,"laya.ui.Tree",t);var s=i.prototype;return e.imps(s,{"laya.ui.IRender":!0}),s.destroy=function(t){void 0===t&&(t=!0),laya.ui.Component.prototype.destroy.call(this,t),this._list&&this._list.destroy(t),this._list=null,this._source=null,this._renderHandler=null},s.createChildren=function(){this.addChild(this._list=new U),this._list.renderHandler=f.create(this,this.renderItem,null,!1),this._list.repeatX=1,this._list.on("change",this,this.onListChange)},s.onListChange=function(t){this.event("change")},s.getArray=function(){var t,i=[];for(var e in this._source)t=this._source[e],this.getParentOpenStatus(t)&&(t.x=this._spaceLeft*this.getDepth(t),i.push(t));return i},s.getDepth=function(t,i){return void 0===i&&(i=0),null==t.nodeParent?i:this.getDepth(t.nodeParent,i+1)},s.getParentOpenStatus=function(t){var i=t.nodeParent;return null==i||!!i.isOpen&&(null==i.nodeParent||this.getParentOpenStatus(i))},s.renderItem=function(t,i){var e=t.dataSource;if(e){t.left=e.x;var s=t.getChildByName("arrow");s&&(e.hasChild?(s.visible=!0,s.index=e.isOpen?1:0,s.tag=i,s.off("click",this,this.onArrowClick),s.on("click",this,this.onArrowClick)):s.visible=!1);var h=t.getChildByName("folder");h&&(2==h.clipY?h.index=e.isDirectory?0:1:h.index=e.isDirectory?e.isOpen?1:0:2),this._renderHandler&&this._renderHandler.runWith([t,i])}},s.onArrowClick=function(t){var i=t.currentTarget.tag;this._list.array[i].isOpen=!this._list.array[i].isOpen,this.event("open"),this._list.array=this.getArray()},s.setItemState=function(t,i){this._list.array[t]&&(this._list.array[t].isOpen=i,this._list.array=this.getArray())},s.fresh=function(){this._list.array=this.getArray(),this.repaint()},s.parseXml=function(t,i,e,s){var h,n=t.childNodes,o=n.length;if(!s){h={};var r,l=t.attributes;for(var a in l){var c=(r=l[a]).nodeName,u=r.nodeValue;h[c]="true"==u||"false"!=u&&u}h.nodeParent=e,o>0&&(h.isDirectory=!0),h.hasChild=o>0,i.push(h)}for(var _=0;_<o;_++){var d=n[_];this.parseXml(d,i,h,!1)}},s.parseOpenStatus=function(t,i){for(var e=0,s=i.length;e<s;e++){var h=i[e];if(h.isDirectory)for(var n=0,o=t.length;n<o;n++){var r=t[n];if(r.isDirectory&&this.isSameParent(r,h)&&h.label==r.label){h.isOpen=r.isOpen;break}}}},s.isSameParent=function(t,i){return null==t.nodeParent&&null==i.nodeParent||null!=t.nodeParent&&null!=i.nodeParent&&(t.nodeParent.label==i.nodeParent.label&&this.isSameParent(t.nodeParent,i.nodeParent))},s.filter=function(t){if(Boolean(t)){var i=[];this.getFilterSource(this._source,i,t),this._list.array=i}else this._list.array=this.getArray()},s.getFilterSource=function(t,i,e){e=e.toLocaleLowerCase();var s;for(var h in t)!(s=t[h]).isDirectory&&String(s.label).toLowerCase().indexOf(e)>-1&&(s.x=0,i.push(s)),s.child&&s.child.length>0&&this.getFilterSource(s.child,i,e)},n(0,s,"spaceBottom",function(){return this._list.spaceY},function(t){this._list.spaceY=t}),n(0,s,"keepStatus",function(){return this._keepStatus},function(t){this._keepStatus=t}),n(0,s,"itemRender",function(){return this._list.itemRender},function(t){this._list.itemRender=t}),n(0,s,"array",function(){return this._list.array},function(t){this._keepStatus&&this._list.array&&t&&this.parseOpenStatus(this._list.array,t),this._source=t,this._list.array=this.getArray()}),n(0,s,"mouseHandler",function(){return this._list.mouseHandler},function(t){this._list.mouseHandler=t}),n(0,s,"dataSource",t.prototype._$get_dataSource,function(t){this._dataSource=t,e.superSet(H,this,"dataSource",t)}),n(0,s,"source",function(){return this._source}),n(0,s,"scrollBar",function(){return this._list.scrollBar}),n(0,s,"list",function(){return this._list}),n(0,s,"scrollBarSkin",function(){return this._list.vScrollBarSkin},function(t){this._list.vScrollBarSkin=t}),n(0,s,"renderHandler",function(){return this._renderHandler},function(t){this._renderHandler=t}),n(0,s,"selectedIndex",function(){return this._list.selectedIndex},function(t){this._list.selectedIndex=t}),n(0,s,"spaceLeft",function(){return this._spaceLeft},function(t){this._spaceLeft=t}),n(0,s,"selectedItem",function(){return this._list.selectedItem},function(t){this._list.selectedItem=t}),n(0,s,"width",t.prototype._$get_width,function(t){e.superSet(H,this,"width",t),this._list.width=t}),n(0,s,"height",t.prototype._$get_height,function(t){e.superSet(H,this,"height",t),this._list.height=t}),n(0,s,"xml",null,function(t){var i=[];this.parseXml(t.childNodes[0],i,null,!0),this.array=i}),n(0,s,"selectedPath",function(){return this._list.selectedItem?this._list.selectedItem.path:null}),i}(H),tt=function(t){function i(){this._items=null,this._selectedIndex=0,i.__super.call(this),this._setIndexHandler=f.create(this,this.setIndex,null,!1)}h(i,"laya.ui.ViewStack",t);var s=i.prototype;return e.imps(s,{"laya.ui.IItem":!0}),s.setItems=function(t){this.removeChildren();for(var i=0,e=0,s=t.length;e<s;e++){var h=t[e];h&&(h.name="item"+i,this.addChild(h),i++)}this.initItems()},s.addItem=function(t){t.name="item"+this._items.length,this.addChild(t),this.initItems()},s.initItems=function(){this._items=[];for(var t=0;t<1e4;t++){var i=this.getChildByName("item"+t);if(null==i)break;this._items.push(i),i.visible=t==this._selectedIndex}},s.setSelect=function(t,i){this._items&&t>-1&&t<this._items.length&&(this._items[t].visible=i)},s.setIndex=function(t){this.selectedIndex=t},n(0,s,"dataSource",t.prototype._$get_dataSource,function(t){if(this._dataSource=t,"number"==typeof t&&Math.floor(t)==t||"string"==typeof t)this.selectedIndex=parseInt(t);else for(var i in this._dataSource)this.hasOwnProperty(i)&&(this[i]=this._dataSource[i])}),n(0,s,"selectedIndex",function(){return this._selectedIndex},function(t){this._selectedIndex!=t&&(this.setSelect(this._selectedIndex,!1),this._selectedIndex=t,this.setSelect(this._selectedIndex,!0))}),n(0,s,"selection",function(){return this._selectedIndex>-1&&this._selectedIndex<this._items.length?this._items[this._selectedIndex]:null},function(t){this.selectedIndex=this._items.indexOf(t)}),n(0,s,"items",function(){return this._items}),n(0,s,"setIndexHandler",function(){return this._setIndexHandler},function(t){this._setIndexHandler=t}),i}(H),it=function(t){function i(){i.__super.call(this)}return h(i,"laya.ui.VScrollBar",X),i}(),et=function(t){function i(t){this._bg=null,this._skin=null,i.__super.call(this),void 0===t&&(t=""),this.text=t,this.skin=this.skin}h(i,"laya.ui.TextInput",t);var s=i.prototype;return s.preinitialize=function(){this.mouseEnabled=!0},s.destroy=function(i){void 0===i&&(i=!0),t.prototype.destroy.call(this,i),this._bg&&this._bg.destroy(),this._bg=null},s.createChildren=function(){this.addChild(this._tf=new p),this._tf.padding=I.inputLabelPadding,this._tf.on("input",this,this._onInput),this._tf.on("enter",this,this._onEnter),this._tf.on("blur",this,this._onBlur),this._tf.on("focus",this,this._onFocus)},s._onFocus=function(){this.event("focus",this)},s._onBlur=function(){this.event("blur",this)},s._onInput=function(){this.event("input",this)},s._onEnter=function(){this.event("enter",this)},s.initialize=function(){this.width=128,this.height=22},s.select=function(){this._tf.select()},s.setSelection=function(t,i){this._tf.setSelection(t,i)},n(0,s,"text",t.prototype._$get_text,function(t){this._tf.text!=t&&(t+="",this._tf.text=t,this.event("change"))}),n(0,s,"bg",function(){return this._bg},function(t){this.graphics=this._bg=t}),n(0,s,"inputElementYAdjuster",function(){return this._tf.inputElementYAdjuster},function(t){this._tf.inputElementYAdjuster=t}),n(0,s,"multiline",function(){return this._tf.multiline},function(t){this._tf.multiline=t}),n(0,s,"skin",function(){return this._skin},function(t){this._skin!=t&&(this._skin=t,this._bg||(this.graphics=this._bg=new z),this._bg.source=g.getRes(this._skin),this._width&&(this._bg.width=this._width),this._height&&(this._bg.height=this._height))}),n(0,s,"sizeGrid",function(){return this._bg&&this._bg.sizeGrid?this._bg.sizeGrid.join(","):null},function(t){this._bg||(this.graphics=this._bg=new z),this._bg.sizeGrid=L.fillArray(I.defaultSizeGrid,t,Number)}),n(0,s,"inputElementXAdjuster",function(){return this._tf.inputElementXAdjuster},function(t){this._tf.inputElementXAdjuster=t}),n(0,s,"width",t.prototype._$get_width,function(t){e.superSet(D,this,"width",t),this._bg&&(this._bg.width=t)}),n(0,s,"height",t.prototype._$get_height,function(t){e.superSet(D,this,"height",t),this._bg&&(this._bg.height=t)}),n(0,s,"editable",function(){return this._tf.editable},function(t){this._tf.editable=t}),n(0,s,"restrict",function(){return this._tf.restrict},function(t){this._tf.restrict=t}),n(0,s,"prompt",function(){return this._tf.prompt},function(t){this._tf.prompt=t}),n(0,s,"promptColor",function(){return this._tf.promptColor},function(t){this._tf.promptColor=t}),n(0,s,"maxChars",function(){return this._tf.maxChars},function(t){this._tf.maxChars=t}),n(0,s,"focus",function(){return this._tf.focus},function(t){this._tf.focus=t}),n(0,s,"type",function(){return this._tf.type},function(t){this._tf.type=t}),n(0,s,"asPassword",function(){return this._tf.asPassword},function(t){this._tf.asPassword=t}),i}(D),st=function(t){function i(){i.__super.call(this)}return h(i,"laya.ui.VSlider",E),i}(),ht=function(t){function i(){this.popupCenter=!0,this.closeHandler=null,this.popupEffect=null,this.closeEffect=null,this.group=null,this.isModal=!1,this._dragArea=null,i.__super.call(this)}h(i,"laya.ui.Dialog",t);var s=i.prototype;return s.initialize=function(){this.popupEffect=i.manager.popupEffectHandler,this.closeEffect=i.manager.closeEffectHandler,this._dealDragArea(),this.on("click",this,this._onClick)},s._dealDragArea=function(){var t=this.getChildByName("drag");t&&(this.dragArea=t.x+","+t.y+","+t.width+","+t.height,t.removeSelf())},s._onClick=function(t){var i=t.target;if(i)switch(i.name){case"close":case"cancel":case"sure":case"no":case"ok":case"yes":this.close(i.name)}},s.show=function(t,i){void 0===t&&(t=!1),void 0===i&&(i=!0),this._open(!1,t,i)},s.popup=function(t,i){void 0===t&&(t=!1),void 0===i&&(i=!0),this._open(!0,t,i)},s._open=function(t,e,s){i.manager.lock(!1),this.isModal=t,i.manager.open(this,e,s)},s.onOpened=function(){},s.close=function(t,e){void 0===e&&(e=!0),i.manager.close(this,t,e)},s.onClosed=function(t){},s._onMouseDown=function(t){var i=this.getMousePoint();this._dragArea.contains(i.x,i.y)?this.startDrag():this.stopDrag()},n(0,s,"dragArea",function(){return this._dragArea?this._dragArea.toString():null},function(t){if(t){var i=L.fillArray([0,0,0,0],t,Number);this._dragArea=new y(i[0],i[1],i[2],i[3]),this.on("mousedown",this,this._onMouseDown)}else this._dragArea=null,this.off("mousedown",this,this._onMouseDown)}),n(0,s,"isPopup",function(){return null!=this.parent}),n(0,s,"zOrder",t.prototype._$get_zOrder,function(t){e.superSet(R,this,"zOrder",t),i.manager._checkMask()}),n(1,i,"manager",function(){return i._manager=i._manager||new P},function(t){i._manager=t}),i.setLockView=function(t){i.manager.setLockView(t)},i.lock=function(t){i.manager.lock(t)},i.closeAll=function(){i.manager.closeAll()},i.getDialogsByGroup=function(t){return i.manager.getDialogsByGroup(t)},i.closeByGroup=function(t){return i.manager.closeByGroup(t)},i.CLOSE="close",i.CANCEL="cancel",i.SURE="sure",i.NO="no",i.OK="ok",i.YES="yes",i._manager=null,i}(R),nt=function(t){function i(){i.__super.call(this)}h(i,"laya.ui.HBox",t);var s=i.prototype;return s.sortItem=function(t){t&&t.sort(function(t,i){return t.x-i.x})},s.changeItems=function(){this._itemChanged=!1;for(var t=[],i=0,e=0,s=this.numChildren;e<s;e++){var h=this.getChildAt(e);h&&h.layoutEnabled&&(t.push(h),i=this._height?this._height:Math.max(i,h.height*h.scaleY))}this.sortItem(t);var n=0;for(e=0,s=t.length;e<s;e++)(h=t[e]).x=n,n+=h.width*h.scaleX+this._space,"top"==this._align?h.y=0:"middle"==this._align?h.y=.5*(i-h.height*h.scaleY):"bottom"==this._align&&(h.y=i-h.height*h.scaleY);this.changeSize()},n(0,s,"height",t.prototype._$get_height,function(t){this._height!=t&&(e.superSet($,this,"height",t),this.callLater(this.changeItems))}),i.NONE="none",i.TOP="top",i.MIDDLE="middle",i.BOTTOM="bottom",i}($),ot=function(t){function i(){i.__super.call(this)}h(i,"laya.ui.VBox",t);var s=i.prototype;return s.changeItems=function(){this._itemChanged=!1;for(var t=[],i=0,e=0,s=this.numChildren;e<s;e++){var h=this.getChildAt(e);h&&h.layoutEnabled&&(t.push(h),i=this._width?this._width:Math.max(i,h.width*h.scaleX))}this.sortItem(t);var n=0;for(e=0,s=t.length;e<s;e++)(h=t[e]).y=n,n+=h.height*h.scaleY+this._space,"left"==this._align?h.x=0:"center"==this._align?h.x=.5*(i-h.width*h.scaleX):"right"==this._align&&(h.x=i-h.width*h.scaleX);this.changeSize()},n(0,s,"width",t.prototype._$get_width,function(t){this._width!=t&&(e.superSet($,this,"width",t),this.callLater(this.changeItems))}),i.NONE="none",i.LEFT="left",i.CENTER="center",i.RIGHT="right",i}($),rt=function(t){function i(){i.__super.call(this)}h(i,"laya.ui.RadioGroup",q);return i.prototype.createItem=function(t,i){return new J(t,i)},i}(),lt=function(t){function i(){i.__super.call(this)}h(i,"laya.ui.Tab",q);return i.prototype.createItem=function(t,i){return new N(t,i)},i}(),at=function(t){function i(t){this._vScrollBar=null,this._hScrollBar=null,void 0===t&&(t=""),i.__super.call(this,t)}h(i,"laya.ui.TextArea",t);var s=i.prototype;return s.destroy=function(i){void 0===i&&(i=!0),t.prototype.destroy.call(this,i),this._vScrollBar&&this._vScrollBar.destroy(),this._hScrollBar&&this._hScrollBar.destroy(),this._vScrollBar=null,this._hScrollBar=null},s.initialize=function(){this.width=180,this.height=150,this._tf.wordWrap=!0,this.multiline=!0},s.onVBarChanged=function(t){this._tf.scrollY!=this._vScrollBar.value&&(this._tf.scrollY=this._vScrollBar.value)},s.onHBarChanged=function(t){this._tf.scrollX!=this._hScrollBar.value&&(this._tf.scrollX=this._hScrollBar.value)},s.changeScroll=function(){var t=this._vScrollBar&&this._tf.maxScrollY>0,i=this._hScrollBar&&this._tf.maxScrollX>0,e=t?this._width-this._vScrollBar.width:this._width,s=i?this._height-this._hScrollBar.height:this._height,h=this._tf.padding||I.labelPadding;this._tf.width=e,this._tf.height=s,this._vScrollBar&&(this._vScrollBar.x=this._width-this._vScrollBar.width-h[2],this._vScrollBar.y=h[1],this._vScrollBar.height=this._height-(i?this._hScrollBar.height:0)-h[1]-h[3],this._vScrollBar.scrollSize=1,this._vScrollBar.thumbPercent=s/Math.max(this._tf.textHeight,s),this._vScrollBar.setScroll(1,this._tf.maxScrollY,this._tf.scrollY),this._vScrollBar.visible=t),this._hScrollBar&&(this._hScrollBar.x=h[0],this._hScrollBar.y=this._height-this._hScrollBar.height-h[3],this._hScrollBar.width=this._width-(t?this._vScrollBar.width:0)-h[0]-h[2],this._hScrollBar.scrollSize=Math.max(.033*e,1),this._hScrollBar.thumbPercent=e/Math.max(this._tf.textWidth,e),this._hScrollBar.setScroll(0,this.maxScrollX,this.scrollX),this._hScrollBar.visible=i)},s.scrollTo=function(t){this.commitMeasure(),this._tf.scrollY=t},n(0,s,"scrollY",function(){return this._tf.scrollY}),n(0,s,"width",t.prototype._$get_width,function(t){e.superSet(et,this,"width",t),this.callLater(this.changeScroll)}),n(0,s,"hScrollBar",function(){return this._hScrollBar}),n(0,s,"height",t.prototype._$get_height,function(t){e.superSet(et,this,"height",t),this.callLater(this.changeScroll)}),n(0,s,"maxScrollX",function(){return this._tf.maxScrollX}),n(0,s,"vScrollBarSkin",function(){return this._vScrollBar?this._vScrollBar.skin:null},function(t){null==this._vScrollBar&&(this.addChild(this._vScrollBar=new it),this._vScrollBar.on("change",this,this.onVBarChanged),this._vScrollBar.target=this._tf,this.callLater(this.changeScroll)),this._vScrollBar.skin=t}),n(0,s,"hScrollBarSkin",function(){return this._hScrollBar?this._hScrollBar.skin:null},function(t){null==this._hScrollBar&&(this.addChild(this._hScrollBar=new K),this._hScrollBar.on("change",this,this.onHBarChanged),this._hScrollBar.mouseWheelEnable=!1,this._hScrollBar.target=this._tf,this.callLater(this.changeScroll)),this._hScrollBar.skin=t}),n(0,s,"vScrollBar",function(){return this._vScrollBar}),n(0,s,"maxScrollY",function(){return this._tf.maxScrollY}),n(0,s,"scrollX",function(){return this._tf.scrollX}),i}(et);!function(t){function i(){this._uiView=null,this.isCloseOther=!1,i.__super.call(this)}h(i,"laya.ui.AsynDialog",ht);var e=i.prototype;e.createView=function(t){this._uiView=t},e._open=function(t,i,e){this.isModal=t,this.isCloseOther=i,ht.manager.lock(!0),this._uiView?this.onCreated():this.onOpen()},e.onCreated=function(){this.createUI(),this.onOpen()},e.createUI=function(){laya.ui.View.prototype.createView.call(this,this._uiView),this._uiView=null,this._dealDragArea()},e.onOpen=function(){ht.manager.open(this,this.isCloseOther),ht.manager.lock(!1)},e.close=function(t,i){void 0===i&&(i=!0),ht.manager.close(this),this.onClose()},e.onClose=function(){},e.destroy=function(t){void 0===t&&(t=!0),laya.ui.View.prototype.destroy.call(this,t),this._uiView=null,this.onDestroy()},e.onDestroy=function(){}}();e.__init([R])}(window,document,Laya),"function"==typeof define&&define.amd&&define("laya.core",["require","exports"],function(t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});for(var e in Laya){var s=Laya[e];s&&s.__isclass&&(i[e]=s)}});
!function(t,e,i){i.un,i.uns;var a=i.static,r=i.class,n=i.getset,s=(i.__newvec,laya.webgl.canvas.BlendMode),o=(laya.events.Event,laya.resource.HTMLCanvas),l=laya.utils.Handler,h=laya.webgl.utils.IndexBuffer2D,c=(laya.net.Loader,laya.maths.MathUtil),u=laya.maths.Matrix,d=laya.renders.Render,m=(laya.renders.RenderContext,laya.renders.RenderSprite,laya.webgl.shader.Shader),_=laya.display.Sprite,f=laya.utils.Stat,p=laya.resource.Texture,v=laya.utils.Utils,x=laya.webgl.shader.d2.value.Value2D,y=laya.webgl.utils.VertexBuffer2D,C=laya.webgl.WebGL,P=(laya.webgl.WebGLContext,function(){function t(){this._frameTime=0,this._emissionRate=60,this._emissionTime=0,this.minEmissionTime=1/60,this._particleTemplate=null}r(t,"laya.particle.emitter.EmitterBase");var e=t.prototype;return e.start=function(t){void 0===t&&(t=2147483647),0!=this._emissionRate&&(this._emissionTime=t)},e.stop=function(){this._emissionTime=0},e.clear=function(){this._emissionTime=0},e.emit=function(){},e.advanceTime=function(t){if(void 0===t&&(t=1),this._emissionTime-=t,!(this._emissionTime<0||(this._frameTime+=t,this._frameTime<this.minEmissionTime)))for(;this._frameTime>this.minEmissionTime;)this._frameTime-=this.minEmissionTime,this.emit()},n(0,e,"particleTemplate",null,function(t){this._particleTemplate=t}),n(0,e,"emissionRate",function(){return this._emissionRate},function(t){t<=0||(this._emissionRate=t,t>0&&(this.minEmissionTime=1/t))}),t}()),g=function(){function t(){this.position=null,this.velocity=null,this.startColor=null,this.endColor=null,this.sizeRotation=null,this.radius=null,this.radian=null,this.durationAddScale=NaN,this.time=NaN}return r(t,"laya.particle.ParticleData"),t.Create=function(e,i,a,r){var n=new t;n.position=i,c.scaleVector3(a,e.emitterVelocitySensitivity,t._tempVelocity);var s=c.lerp(e.minHorizontalVelocity,e.maxHorizontalVelocity,Math.random()),o=Math.random()*Math.PI*2;t._tempVelocity[0]+=s*Math.cos(o),t._tempVelocity[2]+=s*Math.sin(o),t._tempVelocity[1]+=c.lerp(e.minVerticalVelocity,e.maxVerticalVelocity,Math.random()),n.velocity=t._tempVelocity,n.startColor=t._tempStartColor,n.endColor=t._tempEndColor;var l=0;if(e.disableColor)for(l=0;l<4;l++)n.startColor[l]=1,n.endColor[l]=1;else if(e.colorComponentInter)for(l=0;l<4;l++)n.startColor[l]=c.lerp(e.minStartColor[l],e.maxStartColor[l],Math.random()),n.endColor[l]=c.lerp(e.minEndColor[l],e.maxEndColor[l],Math.random());else c.lerpVector4(e.minStartColor,e.maxStartColor,Math.random(),n.startColor),c.lerpVector4(e.minEndColor,e.maxEndColor,Math.random(),n.endColor);n.sizeRotation=t._tempSizeRotation;var h=Math.random();n.sizeRotation[0]=c.lerp(e.minStartSize,e.maxStartSize,h),n.sizeRotation[1]=c.lerp(e.minEndSize,e.maxEndSize,h),n.sizeRotation[2]=c.lerp(e.minRotateSpeed,e.maxRotateSpeed,Math.random()),n.radius=t._tempRadius;var u=Math.random();n.radius[0]=c.lerp(e.minStartRadius,e.maxStartRadius,u),n.radius[1]=c.lerp(e.minEndRadius,e.maxEndRadius,u),n.radian=t._tempRadian,n.radian[0]=c.lerp(e.minHorizontalStartRadian,e.maxHorizontalStartRadian,Math.random()),n.radian[1]=c.lerp(e.minVerticalStartRadian,e.maxVerticalStartRadian,Math.random());var d=e.useEndRadian;return n.radian[2]=d?c.lerp(e.minHorizontalEndRadian,e.maxHorizontalEndRadian,Math.random()):n.radian[0],n.radian[3]=d?c.lerp(e.minVerticalEndRadian,e.maxVerticalEndRadian,Math.random()):n.radian[1],n.durationAddScale=e.ageAddScale*Math.random(),n.time=r,n},a(t,["_tempVelocity",function(){return this._tempVelocity=new Float32Array(3)},"_tempStartColor",function(){return this._tempStartColor=new Float32Array(4)},"_tempEndColor",function(){return this._tempEndColor=new Float32Array(4)},"_tempSizeRotation",function(){return this._tempSizeRotation=new Float32Array(3)},"_tempRadius",function(){return this._tempRadius=new Float32Array(2)},"_tempRadian",function(){return this._tempRadian=new Float32Array(4)}]),t}(),R=(function(){function t(t,e,i){this._templet=null,this._timeBetweenParticles=NaN,this._previousPosition=null,this._timeLeftOver=0,this._tempVelocity=new Float32Array([0,0,0]),this._tempPosition=new Float32Array([0,0,0]),this._templet=t,this._timeBetweenParticles=1/e,this._previousPosition=i}r(t,"laya.particle.ParticleEmitter");t.prototype.update=function(t,e){if((t/=1e3)>0){c.subtractVector3(e,this._previousPosition,this._tempVelocity),c.scaleVector3(this._tempVelocity,1/t,this._tempVelocity);for(var i=this._timeLeftOver+t,a=-this._timeLeftOver;i>this._timeBetweenParticles;)a+=this._timeBetweenParticles,i-=this._timeBetweenParticles,c.lerpVector3(this._previousPosition,e,a/t,this._tempPosition),this._templet.addParticleArray(this._tempPosition,this._tempVelocity);this._timeLeftOver=i}this._previousPosition[0]=e[0],this._previousPosition[1]=e[1],this._previousPosition[2]=e[2]}}(),function(){function t(){this.textureName=null,this.textureCount=1,this.maxPartices=100,this.duration=1,this.ageAddScale=0,this.emitterVelocitySensitivity=1,this.minStartSize=100,this.maxStartSize=100,this.minEndSize=100,this.maxEndSize=100,this.minHorizontalVelocity=0,this.maxHorizontalVelocity=0,this.minVerticalVelocity=0,this.maxVerticalVelocity=0,this.endVelocity=1,this.minRotateSpeed=0,this.maxRotateSpeed=0,this.minStartRadius=0,this.maxStartRadius=0,this.minEndRadius=0,this.maxEndRadius=0,this.minHorizontalStartRadian=0,this.maxHorizontalStartRadian=0,this.minVerticalStartRadian=0,this.maxVerticalStartRadian=0,this.useEndRadian=!0,this.minHorizontalEndRadian=0,this.maxHorizontalEndRadian=0,this.minVerticalEndRadian=0,this.maxVerticalEndRadian=0,this.colorComponentInter=!1,this.disableColor=!1,this.blendState=0,this.emitterType="null",this.emissionRate=0,this.sphereEmitterRadius=1,this.sphereEmitterVelocity=0,this.sphereEmitterVelocityAddVariance=0,this.ringEmitterRadius=30,this.ringEmitterVelocity=0,this.ringEmitterVelocityAddVariance=0,this.ringEmitterUp=2,this.gravity=new Float32Array([0,0,0]),this.minStartColor=new Float32Array([1,1,1,1]),this.maxStartColor=new Float32Array([1,1,1,1]),this.minEndColor=new Float32Array([1,1,1,1]),this.maxEndColor=new Float32Array([1,1,1,1]),this.pointEmitterPosition=new Float32Array([0,0,0]),this.pointEmitterPositionVariance=new Float32Array([0,0,0]),this.pointEmitterVelocity=new Float32Array([0,0,0]),this.pointEmitterVelocityAddVariance=new Float32Array([0,0,0]),this.boxEmitterCenterPosition=new Float32Array([0,0,0]),this.boxEmitterSize=new Float32Array([0,0,0]),this.boxEmitterVelocity=new Float32Array([0,0,0]),this.boxEmitterVelocityAddVariance=new Float32Array([0,0,0]),this.sphereEmitterCenterPosition=new Float32Array([0,0,0]),this.ringEmitterCenterPosition=new Float32Array([0,0,0]),this.positionVariance=new Float32Array([0,0,0])}return r(t,"laya.particle.ParticleSetting"),t.checkSetting=function(e){var i;for(i in t._defaultSetting)e.hasOwnProperty(i)||(e[i]=t._defaultSetting[i])},a(t,["_defaultSetting",function(){return this._defaultSetting=new t}]),t}()),S=function(){function t(){this.settings=null,this.texture=null}r(t,"laya.particle.ParticleTemplateBase");return t.prototype.addParticleArray=function(t,e){},t}(),E=function(){function t(){this.u_Duration=NaN,this.u_EndVelocity=NaN,this.u_Gravity=null,this.a_Position=null,this.a_Velocity=null,this.a_StartColor=null,this.a_EndColor=null,this.a_SizeRotation=null,this.a_Radius=null,this.a_Radian=null,this.a_AgeAddScale=NaN,this.gl_Position=null,this.v_Color=null,this.oSize=NaN,this._color=new Float32Array(4),this._position=new Float32Array(3)}r(t,"laya.particle.particleUtils.CanvasShader");var e=t.prototype;return e.getLen=function(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2])},e.ComputeParticlePosition=function(t,e,i,a){this._position[0]=t[0],this._position[1]=t[1],this._position[2]=t[2];var r=this.getLen(e),n=r*a+(r*this.u_EndVelocity-r)*a*a/2,s=NaN;s=this.getLen(e);var o=0;for(3,o=0;o<3;o++)this._position[o]=this._position[o]+e[o]/s*n*this.u_Duration,this._position[o]+=this.u_Gravity[o]*i*a;var l=c.lerp(this.a_Radius[0],this.a_Radius[1],a),h=c.lerp(this.a_Radian[0],this.a_Radian[2],a),u=c.lerp(this.a_Radian[1],this.a_Radian[3],a),d=Math.cos(u)*l;return this._position[1]+=Math.sin(u)*l,this._position[0]+=Math.cos(h)*d,this._position[2]+=Math.sin(h)*d,new Float32Array([this._position[0],this._position[1],0,1])},e.ComputeParticleSize=function(t,e,i){return c.lerp(t,e,i)},e.ComputeParticleRotation=function(t,e){return t*e},e.ComputeParticleColor=function(t,e,i){var a=this._color;return c.lerpVector4(t,e,i,a),a[3]=a[3]*i*(1-i)*(1-i)*6.7,a},e.clamp=function(t,e,i){return t<e?e:t>i?i:t},e.getData=function(t){t*=1+this.a_AgeAddScale;var e=this.clamp(t/this.u_Duration,0,1);this.gl_Position=this.ComputeParticlePosition(this.a_Position,this.a_Velocity,t,e);var i=this.ComputeParticleSize(this.a_SizeRotation[0],this.a_SizeRotation[1],e),a=this.ComputeParticleRotation(this.a_SizeRotation[2],t);this.v_Color=this.ComputeParticleColor(this.a_StartColor,this.a_EndColor,e);var r=new u,n=NaN;n=i/this.oSize*2,r.scale(n,n),r.rotate(a),r.setTranslate(this.gl_Position[0],-this.gl_Position[1]);var s=NaN;return s=this.v_Color[3],[this.v_Color,s,r,this.v_Color[0]*s,this.v_Color[1]*s,this.v_Color[2]*s]},t}(),V=function(){function t(){this.maxIndex=0,this.cmds=null,this.id=0}r(t,"laya.particle.particleUtils.CMDParticle");return t.prototype.setCmds=function(t){this.cmds=t,this.maxIndex=t.length-1},t}(),A=function(){function t(){}return r(t,"laya.particle.particleUtils.PicTool"),t.getCanvasPic=function(t,e){t=t.bitmap;var i=new o("2D"),a=i.getContext("2d");i.size(t.width,t.height);var r=e>>16&255,n=e>>8&255,s=255&e;if(d.isConchApp&&a.setFilter(r/255,n/255,s/255,0),a.drawImage(t.source,0,0),!d.isConchApp){for(var l=a.getImageData(0,0,i.width,i.height),h=l.data,c=0,u=h.length;c<u;c+=4)0!=h[c+3]&&(h[c]*=r/255,h[c+1]*=n/255,h[c+2]*=s/255);a.putImageData(l,0,0)}return i},t.getRGBPic=function(e){return[new p(t.getCanvasPic(e,16711680)),new p(t.getCanvasPic(e,65280)),new p(t.getCanvasPic(e,255))]},t}(),T=function(t){function e(t){this.setting=null,this._posRange=null,this._canvasTemplate=null,this._emitFun=null,e.__super.call(this),this.template=t}r(e,"laya.particle.emitter.Emitter2D",t);var i=e.prototype;return i.emit=function(){t.prototype.emit.call(this),null!=this._emitFun&&this._emitFun()},i.getRandom=function(t){return(2*Math.random()-1)*t},i.webGLEmit=function(){var t=new Float32Array(3);t[0]=this.getRandom(this._posRange[0]),t[1]=this.getRandom(this._posRange[1]),t[2]=this.getRandom(this._posRange[2]);var e=new Float32Array(3);e[0]=0,e[1]=0,e[2]=0,this._particleTemplate.addParticleArray(t,e)},i.canvasEmit=function(){var t=new Float32Array(3);t[0]=this.getRandom(this._posRange[0]),t[1]=this.getRandom(this._posRange[1]),t[2]=this.getRandom(this._posRange[2]);var e=new Float32Array(3);e[0]=0,e[1]=0,e[2]=0,this._particleTemplate.addParticleArray(t,e)},n(0,i,"template",function(){return this._particleTemplate},function(t){this._particleTemplate=t,t||(this._emitFun=null,this.setting=null,this._posRange=null),this.setting=t.settings,this._posRange=this.setting.positionVariance,this._particleTemplate instanceof laya.particle.ParticleTemplate2D?this._emitFun=this.webGLEmit:this._particleTemplate instanceof laya.particle.ParticleTemplateCanvas&&(this._canvasTemplate=t,this._emitFun=this.canvasEmit)}),e}(P),w=function(t){function e(t){this._vertices=null,this._vertexBuffer=null,this._indexBuffer=null,this._floatCountPerVertex=29,this._firstActiveElement=0,this._firstNewElement=0,this._firstFreeElement=0,this._firstRetiredElement=0,this._currentTime=0,this._drawCounter=0,e.__super.call(this),this.settings=t}r(e,"laya.particle.ParticleTemplateWebGL",S);var i=e.prototype;return i.initialize=function(){this._vertices=new Float32Array(this.settings.maxPartices*this._floatCountPerVertex*4);for(var t=0,e=0;e<this.settings.maxPartices;e++){var i=Math.random(),a=this.settings.textureCount?1/this.settings.textureCount:1,r=NaN;for(r=0;r<this.settings.textureCount&&!(i<r+a);r+=a);t=e*this._floatCountPerVertex*4,this._vertices[t+0*this._floatCountPerVertex+0]=-1,this._vertices[t+0*this._floatCountPerVertex+1]=-1,this._vertices[t+0*this._floatCountPerVertex+2]=0,this._vertices[t+0*this._floatCountPerVertex+3]=r,this._vertices[t+1*this._floatCountPerVertex+0]=1,this._vertices[t+1*this._floatCountPerVertex+1]=-1,this._vertices[t+1*this._floatCountPerVertex+2]=1,this._vertices[t+1*this._floatCountPerVertex+3]=r,this._vertices[t+2*this._floatCountPerVertex+0]=1,this._vertices[t+2*this._floatCountPerVertex+1]=1,this._vertices[t+2*this._floatCountPerVertex+2]=1,this._vertices[t+2*this._floatCountPerVertex+3]=r+a,this._vertices[t+3*this._floatCountPerVertex+0]=-1,this._vertices[t+3*this._floatCountPerVertex+1]=1,this._vertices[t+3*this._floatCountPerVertex+2]=0,this._vertices[t+3*this._floatCountPerVertex+3]=r+a}},i.loadContent=function(){},i.update=function(t){this._currentTime+=t/1e3,this.retireActiveParticles(),this.freeRetiredParticles(),this._firstActiveElement==this._firstFreeElement&&(this._currentTime=0),this._firstRetiredElement==this._firstActiveElement&&(this._drawCounter=0)},i.retireActiveParticles=function(){for(var t=this.settings.duration;this._firstActiveElement!=this._firstNewElement;){var e=this._firstActiveElement*this._floatCountPerVertex*4,i=e+28,a=this._currentTime-this._vertices[i];if((a*=1+this._vertices[e+27])+1e-4<t)break;this._vertices[i]=this._drawCounter,this._firstActiveElement++,this._firstActiveElement>=this.settings.maxPartices&&(this._firstActiveElement=0)}},i.freeRetiredParticles=function(){for(;this._firstRetiredElement!=this._firstActiveElement;){if(this._drawCounter-this._vertices[this._firstRetiredElement*this._floatCountPerVertex*4+28]<3)break;this._firstRetiredElement++,this._firstRetiredElement>=this.settings.maxPartices&&(this._firstRetiredElement=0)}},i.addNewParticlesToVertexBuffer=function(){},i.addParticleArray=function(t,e){var i=this._firstFreeElement+1;if(i>=this.settings.maxPartices&&(i=0),i!==this._firstRetiredElement){for(var a=g.Create(this.settings,t,e,this._currentTime),r=this._firstFreeElement*this._floatCountPerVertex*4,n=0;n<4;n++){var s=0,o=0;for(s=0,o=4;s<3;s++)this._vertices[r+n*this._floatCountPerVertex+o+s]=a.position[s];for(s=0,o=7;s<3;s++)this._vertices[r+n*this._floatCountPerVertex+o+s]=a.velocity[s];for(s=0,o=10;s<4;s++)this._vertices[r+n*this._floatCountPerVertex+o+s]=a.startColor[s];for(s=0,o=14;s<4;s++)this._vertices[r+n*this._floatCountPerVertex+o+s]=a.endColor[s];for(s=0,o=18;s<3;s++)this._vertices[r+n*this._floatCountPerVertex+o+s]=a.sizeRotation[s];for(s=0,o=21;s<2;s++)this._vertices[r+n*this._floatCountPerVertex+o+s]=a.radius[s];for(s=0,o=23;s<4;s++)this._vertices[r+n*this._floatCountPerVertex+o+s]=a.radian[s];this._vertices[r+n*this._floatCountPerVertex+27]=a.durationAddScale,this._vertices[r+n*this._floatCountPerVertex+28]=a.time}this._firstFreeElement=i}},e}(),z=function(t){function e(t){this._ready=!1,this.textureList=[],this.particleList=[],this.pX=0,this.pY=0,this.activeParticles=[],this.deadParticles=[],this.iList=[],this._maxNumParticles=0,this.textureWidth=NaN,this.dTextureWidth=NaN,this.colorChange=!0,this.step=1/60,this.canvasShader=new E,e.__super.call(this),this.settings=t,this._maxNumParticles=t.maxPartices,this.texture=new p,this.texture.on("loaded",this,this._textureLoaded),this.texture.load(t.textureName)}r(e,"laya.particle.ParticleTemplateCanvas",S);var i=e.prototype;return i._textureLoaded=function(t){this.setTexture(this.texture),this._ready=!0},i.clear=function(t){void 0===t&&(t=!0),this.deadParticles.length=0,this.activeParticles.length=0,this.textureList.length=0},i.setTexture=function(t){this.texture=t,this.textureWidth=t.width,this.dTextureWidth=1/this.textureWidth,this.pX=.5*-t.width,this.pY=.5*-t.height,this.textureList=e.changeTexture(t,this.textureList),this.particleList.length=0,this.deadParticles.length=0,this.activeParticles.length=0},i._createAParticleData=function(t,e){this.canvasShader.u_EndVelocity=this.settings.endVelocity,this.canvasShader.u_Gravity=this.settings.gravity,this.canvasShader.u_Duration=this.settings.duration;var i;i=g.Create(this.settings,t,e,0),this.canvasShader.a_Position=i.position,this.canvasShader.a_Velocity=i.velocity,this.canvasShader.a_StartColor=i.startColor,this.canvasShader.a_EndColor=i.endColor,this.canvasShader.a_SizeRotation=i.sizeRotation,this.canvasShader.a_Radius=i.radius,this.canvasShader.a_Radian=i.radian,this.canvasShader.a_AgeAddScale=i.durationAddScale,this.canvasShader.oSize=this.textureWidth;var a=new V,r=0,n=this.settings.duration/(1+i.durationAddScale),s=[];for(r=0;r<n;r+=this.step)s.push(this.canvasShader.getData(r));return a.id=this.particleList.length,this.particleList.push(a),a.setCmds(s),a},i.addParticleArray=function(t,e){if(this._ready){var i;this.particleList.length<this._maxNumParticles?(i=this._createAParticleData(t,e),this.iList[i.id]=0,this.activeParticles.push(i)):this.deadParticles.length>0&&(i=this.deadParticles.pop(),this.iList[i.id]=0,this.activeParticles.push(i))}},i.advanceTime=function(t){if(void 0===t&&(t=1),this._ready){var e,i=this.activeParticles,a=this.deadParticles,r=0,n=i.length,s=0,o=this.iList;for(r=n-1;r>-1;r--)(s=o[(e=i[r]).id])>=e.maxIndex?(s=0,i.splice(r,1),a.push(e)):s+=1,o[e.id]=s}},i.render=function(t,e,i){this._ready&&(this.activeParticles.length<1||this.textureList.length<2||(this.settings.disableColor?this.noColorRender(t,e,i):this.canvasRender(t,e,i)))},i.noColorRender=function(t,e,i){var a,r,n=this.activeParticles,s=0,o=n.length,l=NaN,h=this.pX,c=this.pY,u=2*-h,d=2*-c,m=0,_=(this.textureList,this.iList),f=NaN;for(t.translate(e,i),f=t.ctx.globalAlpha,s=0;s<o;s++)m=_[(a=n[s]).id],(r=a.cmds[m])&&((l=r[1])<=.01||(t.setAlpha(f*l),t.drawTextureWithTransform(this.texture,h,c,u,d,r[2],1)));t.setAlpha(f),t.translate(-e,-i)},i.canvasRender=function(t,e,i){var a,r,n,s=this.activeParticles,o=0,l=s.length,h=this.pX,c=this.pY,u=2*-h,d=2*-c,m=0,_=this.textureList,f=this.iList,p=NaN;for(t.translate(e,i),p=t.ctx.globalAlpha,n=t.ctx.globalCompositeOperation,t.blendMode("lighter"),o=0;o<l;o++)m=f[(a=s[o]).id],(r=a.cmds[m])&&(r[1]<=.01||(t.save(),t.transformByMatrix(r[2]),r[3]>.01&&(t.setAlpha(p*r[3]),t.drawTexture(_[0],h,c,u,d)),r[4]>.01&&(t.setAlpha(p*r[4]),t.drawTexture(_[1],h,c,u,d)),r[5]>.01&&(t.setAlpha(p*r[5]),t.drawTexture(_[2],h,c,u,d)),t.restore()));t.setAlpha(p),t.translate(-e,-i),t.blendMode(n)},e.changeTexture=function(t,e,i){return e||(e=[]),e.length=0,i&&i.disableColor?e.push(t,t,t):v.copyArray(e,A.getRGBPic(t)),e},e}(),b=function(t){function e(t){this._vertexBuffer2D=null,this._indexBuffer2D=null,this.x=0,this.y=0,this._blendFn=null,this._startTime=0,this.sv=new F,e.__super.call(this,t);var a=this;i.loader.load(this.settings.textureName,l.create(null,function(t){t.bitmap.enableMerageInAtlas=!1,a.texture=t})),this.sv.u_Duration=this.settings.duration,this.sv.u_Gravity=this.settings.gravity,this.sv.u_EndVelocity=this.settings.endVelocity,this._blendFn=s.fns[t.blendState],this.initialize(),this._vertexBuffer=this._vertexBuffer2D=y.create(-1,35048),this._indexBuffer=this._indexBuffer2D=h.create(35044),this.loadContent()}r(e,"laya.particle.ParticleTemplate2D",t);var a=e.prototype;return i.imps(a,{"laya.webgl.submit.ISubmit":!0}),a.getRenderType=function(){return-111},a.releaseRender=function(){},a.addParticleArray=function(e,i){e[0]+=this.x,e[1]+=this.y,t.prototype.addParticleArray.call(this,e,i)},a.loadContent=function(){for(var t=new Uint16Array(6*this.settings.maxPartices),e=0;e<this.settings.maxPartices;e++)t[6*e+0]=4*e+0,t[6*e+1]=4*e+1,t[6*e+2]=4*e+2,t[6*e+3]=4*e+0,t[6*e+4]=4*e+2,t[6*e+5]=4*e+3;this._indexBuffer2D.clear(),this._indexBuffer2D.append(t),this._indexBuffer2D.upload()},a.addNewParticlesToVertexBuffer=function(){this._vertexBuffer2D.clear(),this._vertexBuffer2D.append(this._vertices);var t=0;this._firstNewElement<this._firstFreeElement?(t=4*this._firstNewElement*this._floatCountPerVertex*4,this._vertexBuffer2D.subUpload(t,t,t+4*(this._firstFreeElement-this._firstNewElement)*this._floatCountPerVertex*4)):(t=4*this._firstNewElement*this._floatCountPerVertex*4,this._vertexBuffer2D.subUpload(t,t,t+4*(this.settings.maxPartices-this._firstNewElement)*this._floatCountPerVertex*4),this._firstFreeElement>0&&(this._vertexBuffer2D.setNeedUpload(),this._vertexBuffer2D.subUpload(0,0,4*this._firstFreeElement*this._floatCountPerVertex*4))),this._firstNewElement=this._firstFreeElement},a.renderSubmit=function(){if(this.texture&&this.texture.loaded){if(this.update(i.timer.delta),this.sv.u_CurrentTime=this._currentTime,this._firstNewElement!=this._firstFreeElement&&this.addNewParticlesToVertexBuffer(),this.blend(),this._firstActiveElement!=this._firstFreeElement){C.mainContext;this._vertexBuffer2D.bind(this._indexBuffer2D),this.sv.u_texture=this.texture.source,this.sv.upload(),this._firstActiveElement<this._firstFreeElement?C.mainContext.drawElements(4,6*(this._firstFreeElement-this._firstActiveElement),5123,6*this._firstActiveElement*2):(C.mainContext.drawElements(4,6*(this.settings.maxPartices-this._firstActiveElement),5123,6*this._firstActiveElement*2),this._firstFreeElement>0&&C.mainContext.drawElements(4,6*this._firstFreeElement,5123,0)),f.drawCall++}this._drawCounter++}return 1},a.blend=function(){if(s.activeBlendFunction!==this._blendFn){var t=C.mainContext;t.enable(3042),this._blendFn(t),s.activeBlendFunction=this._blendFn}},a.dispose=function(){this._vertexBuffer2D.dispose(),this._indexBuffer2D.dispose()},e.activeBlendType=-1,e}(w),F=function(t){function e(){this.a_CornerTextureCoordinate=[4,5126,!1,116,0],this.a_Position=[3,5126,!1,116,16],this.a_Velocity=[3,5126,!1,116,28],this.a_StartColor=[4,5126,!1,116,40],this.a_EndColor=[4,5126,!1,116,56],this.a_SizeRotation=[3,5126,!1,116,72],this.a_Radius=[2,5126,!1,116,84],this.a_Radian=[4,5126,!1,116,92],this.a_AgeAddScale=[1,5126,!1,116,108],this.a_Time=[1,5126,!1,116,112],this.u_CurrentTime=NaN,this.u_Duration=NaN,this.u_Gravity=null,this.u_EndVelocity=NaN,this.u_texture=null,e.__super.call(this,0,0)}r(e,"laya.particle.shader.value.ParticleShaderValue",x);return e.prototype.upload=function(){this.refresh(),e.pShader.upload(this)},a(e,["pShader",function(){return this.pShader=new N}]),e}(),N=(function(e){function a(t){this._matrix4=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],this._particleTemplate=null,this._canvasTemplate=null,this._emitter=null,this.autoPlay=!0,a.__super.call(this),t&&this.setParticleSetting(t)}r(a,"laya.particle.Particle2D",e);var s=a.prototype;s.load=function(t){i.loader.load(t,l.create(this,this.setParticleSetting),null,"json")},s.setParticleSetting=function(e){var a=this;if(!e)return this.stop();if(R.checkSetting(e),t.ConchParticleTemplate2D&&!d.isWebGL||(this.customRenderEnable=!0),d.isWebGL)this._particleTemplate=new b(e),this.graphics._saveToCmd(d.context._drawParticle,[this._particleTemplate]);else{if(d.isConchApp&&t.ConchParticleTemplate2D){this._particleTemplate=new ConchParticleTemplate2D;var r=this;return i.loader.load(e.textureName,l.create(null,function(t){r._particleTemplate.texture=t,r._particleTemplate.settings=e,d.isConchNode?r.graphics.drawParticle(r._particleTemplate):r.graphics._saveToCmd(d.context._drawParticle,[a._particleTemplate])})),this._emitter={start:function(){}},this.play=this._particleTemplate.play.bind(this._particleTemplate),this.stop=this._particleTemplate.stop.bind(this._particleTemplate),void(this.autoPlay&&this.play())}this._particleTemplate=this._canvasTemplate=new z(e)}this._emitter?this._emitter.template=this._particleTemplate:this._emitter=new T(this._particleTemplate),this.autoPlay&&(this.emitter.start(),this.play())},s.play=function(){this.timer.frameLoop(1,this,this._loop)},s.stop=function(){this.timer.clear(this,this._loop)},s._loop=function(){this.advanceTime(1/60)},s.advanceTime=function(t){void 0===t&&(t=1),this._canvasTemplate&&this._canvasTemplate.advanceTime(t),this._emitter&&this._emitter.advanceTime(t)},s.customRender=function(t,e,i){if(d.isWebGL){this._matrix4[0]=t.ctx._curMat.a,this._matrix4[1]=t.ctx._curMat.b,this._matrix4[4]=t.ctx._curMat.c,this._matrix4[5]=t.ctx._curMat.d,this._matrix4[12]=t.ctx._curMat.tx,this._matrix4[13]=t.ctx._curMat.ty;this._particleTemplate.sv.u_mmat=this._matrix4}this._canvasTemplate&&this._canvasTemplate.render(t,e,i)},s.destroy=function(t){void 0===t&&(t=!0),this._particleTemplate instanceof laya.particle.ParticleTemplate2D&&this._particleTemplate.dispose(),e.prototype.destroy.call(this,t)},n(0,s,"url",null,function(t){this.load(t)}),n(0,s,"emitter",function(){return this._emitter})}(_),function(t){function e(){e.__super.call(this,e.vs,e.ps,"ParticleShader")}return r(e,"laya.particle.shader.ParticleShader",m),a(e,["vs",function(){return this.vs="attribute vec4 a_CornerTextureCoordinate;\nattribute vec3 a_Position;\nattribute vec3 a_Velocity;\nattribute vec4 a_StartColor;\nattribute vec4 a_EndColor;\nattribute vec3 a_SizeRotation;\nattribute vec2 a_Radius;\nattribute vec4 a_Radian;\nattribute float a_AgeAddScale;\nattribute float a_Time;\n\nvarying vec4 v_Color;\nvarying vec2 v_TextureCoordinate;\n\nuniform float u_CurrentTime;\nuniform float u_Duration;\nuniform float u_EndVelocity;\nuniform vec3 u_Gravity;\n\n#ifdef PARTICLE3D\n uniform mat4 u_WorldMat;\n uniform mat4 u_View;\n uniform mat4 u_Projection;\n uniform vec2 u_ViewportScale;\n#else\n uniform vec2 size;\n uniform mat4 mmat;\n uniform mat4 u_mmat;\n#endif\n\nvec4 ComputeParticlePosition(in vec3 position, in vec3 velocity,in float age,in float normalizedAge)\n{\n\n   float startVelocity = length(velocity);//起始标量速度\n   float endVelocity = startVelocity * u_EndVelocity;//结束标量速度\n\n   float velocityIntegral = startVelocity * normalizedAge +(endVelocity - startVelocity) * normalizedAge *normalizedAge/2.0;//计算当前速度的标量（单位空间），vt=v0*t+(1/2)*a*(t^2)\n   \n   vec3 addPosition = normalize(velocity) * velocityIntegral * u_Duration;//计算受自身速度影响的位置，转换标量到矢量    \n   addPosition += u_Gravity * age * normalizedAge;//计算受重力影响的位置\n   \n   float radius=mix(a_Radius.x, a_Radius.y, normalizedAge); //计算粒子受半径和角度影响（无需计算角度和半径时，可用宏定义优化屏蔽此计算）\n   float radianHorizontal =mix(a_Radian.x,a_Radian.z,normalizedAge);\n   float radianVertical =mix(a_Radian.y,a_Radian.w,normalizedAge);\n   \n   float r =cos(radianVertical)* radius;\n   addPosition.y += sin(radianVertical) * radius;\n\t\n   addPosition.x += cos(radianHorizontal) *r;\n   addPosition.z += sin(radianHorizontal) *r;\n  \n   #ifdef PARTICLE3D\n   position+=addPosition;\n    return  u_Projection*u_View*u_WorldMat*(vec4(position, 1.0));\n   #else\n   addPosition.y=-addPosition.y;//2D粒子位置更新需要取负，2D粒子坐标系Y轴正向朝上\n   position+=addPosition;\n    return  vec4(position,1.0);\n   #endif\n}\n\nfloat ComputeParticleSize(in float startSize,in float endSize, in float normalizedAge)\n{    \n    float size = mix(startSize, endSize, normalizedAge);\n    \n\t#ifdef PARTICLE3D\n    //Project the size into screen coordinates.\n     return size * u_Projection[1][1];\n\t#else\n\t return size;\n\t#endif\n}\n\nmat2 ComputeParticleRotation(in float rot,in float age)\n{    \n    float rotation =rot * age;\n    //计算2x2旋转矩阵.\n    float c = cos(rotation);\n    float s = sin(rotation);\n    return mat2(c, -s, s, c);\n}\n\nvec4 ComputeParticleColor(in vec4 startColor,in vec4 endColor,in float normalizedAge)\n{\n\tvec4 color=mix(startColor,endColor,normalizedAge);\n    //硬编码设置，使粒子淡入很快，淡出很慢,6.7的缩放因子把置归一在0到1之间，可以谷歌x*(1-x)*(1-x)*6.7的制图表\n    color.a *= normalizedAge * (1.0-normalizedAge) * (1.0-normalizedAge) * 6.7;\n   \n    return color;\n}\n\nvoid main()\n{\n   float age = u_CurrentTime - a_Time;\n   age *= 1.0 + a_AgeAddScale;\n   float normalizedAge = clamp(age / u_Duration,0.0,1.0);\n   gl_Position = ComputeParticlePosition(a_Position, a_Velocity, age, normalizedAge);//计算粒子位置\n   float pSize = ComputeParticleSize(a_SizeRotation.x,a_SizeRotation.y, normalizedAge);\n   mat2 rotation = ComputeParticleRotation(a_SizeRotation.z, age);\n\t\n   #ifdef PARTICLE3D\n\tgl_Position.xy += (rotation*a_CornerTextureCoordinate.xy) * pSize * u_ViewportScale;\n   #else\n    mat4 mat=u_mmat*mmat;\n    gl_Position=vec4((mat*gl_Position).xy,0.0,1.0);\n\tgl_Position.xy += (rotation*a_CornerTextureCoordinate.xy) * pSize*vec2(mat[0][0],mat[1][1]);\n    gl_Position=vec4((gl_Position.x/size.x-0.5)*2.0,(0.5-gl_Position.y/size.y)*2.0,0.0,1.0);\n   #endif\n   \n   v_Color = ComputeParticleColor(a_StartColor,a_EndColor, normalizedAge);\n   v_TextureCoordinate =a_CornerTextureCoordinate.zw;\n}\n\n"},"ps",function(){return this.ps="#ifdef FSHIGHPRECISION\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n\nvarying vec4 v_Color;\nvarying vec2 v_TextureCoordinate;\nuniform sampler2D u_texture;\n\nvoid main()\n{\t\n\tgl_FragColor=texture2D(u_texture,v_TextureCoordinate)*v_Color;\n\tgl_FragColor.xyz *= v_Color.w;\n}"}]),e}())}(window,document,Laya),"function"==typeof define&&define.amd&&define("laya.core",["require","exports"],function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});for(var i in Laya){var a=Laya[i];a&&a.__isclass&&(e[i]=a)}});
var CLASS$=Laya.class;
this.qWXnsNfL&&this.qWXnsNfL();//randomdirtywordsendforclear
var STATICATTR$=Laya.static;
this.MhCXllO&&this.MhCXllO();//randomdirtywordsendforclear
var View=laya.ui.View;
this.tYDcJIrwT&&this.tYDcJIrwT();//randomdirtywordsendforclear
var Dialog=laya.ui.Dialog;
this.mmBGdYO&&this.mmBGdYO();//randomdirtywordsendforclear
var Ani_bear1UI=(function(_super){
		function Ani_bear1UI(){
			
		    this.ani1=null;
this.lzyeljCyq&&this.lzyeljCyq();//randomdirtywordsendforclear

			Ani_bear1UI.__super.call(this);
this.CFeGpoC&&this.CFeGpoC();//randomdirtywordsendforclear
		}

		CLASS$(Ani_bear1UI,'ui.ani.Ani_bear1UI',_super);
this.BwxzKfbSV&&this.BwxzKfbSV();//randomdirtywordsendforclear
		var __proto__=Ani_bear1UI.prototype;
this.gTwWKyVPXa&&this.gTwWKyVPXa();//randomdirtywordsendforclear
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
this.RVoaYkZL&&this.RVoaYkZL();//randomdirtywordsendforclear
			this.createView(Ani_bear1UI.uiView);
this.hZbfVIi&&this.hZbfVIi();//randomdirtywordsendforclear

		}

		Ani_bear1UI.uiView={"type":"View","props":{"width":88,"height":92},"compId":1,"child":[{"type":"Box","props":{"y":54,"x":74,"width":315,"rotation":-15,"height":228,"anchorY":0.5,"anchorX":0.5},"compId":4,"child":[{"type":"Image","props":{"y":-64,"x":10,"skin":"gameComposition/image_Elephant01_04.png","rotation":15},"compId":6},{"type":"Image","props":{"y":137,"x":115,"width":88,"skin":"gameComposition/image_Elephant01_03.png","height":92,"anchorX":1},"compId":2},{"type":"Image","props":{"y":-75,"x":44,"skin":"gameComposition/image_Elephant01_01.png"}},{"type":"Image","props":{"y":21,"x":136,"skin":"gameComposition/image_Elephant01_02.png"}}]}],"animations":[{"nodes":[{"target":4,"keyframes":{"y":[{"value":55,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":0},{"value":-8,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":15},{"value":-8,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"y","index":45},{"value":55,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":50}],"x":[{"value":75,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":0},{"value":-163,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":15},{"value":-163,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"x","index":45},{"value":75,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":50}]}},{"target":2,"keyframes":{"x":[{"value":115,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":88,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":15}],"skewX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"skewX","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"skewX","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"skewX","index":30},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"skewX","index":40}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":20},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleX","index":30},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleX","index":40}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":15},{"value":20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":25},{"value":20,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"rotation","index":30},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"rotation","index":35},{"value":20,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"rotation","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"rotation","index":45},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":50}],"anchorX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"anchorX","index":0},{"value":0.7,"tweenMethod":"linearNone","tween":true,"target":2,"key":"anchorX","index":15}]}},{"target":6,"keyframes":{"y":[{"value":-41,"tweenMethod":"linearNone","tween":true,"target":6,"key":"y","index":0}],"x":[{"value":114,"tweenMethod":"linearNone","tween":true,"target":6,"key":"x","index":0}],"rotation":[{"value":15,"tweenMethod":"linearNone","tween":true,"target":6,"key":"rotation","index":0},{"value":20,"tweenMethod":"linearNone","tween":true,"target":6,"key":"rotation","index":15},{"value":15,"tweenMethod":"linearNone","tween":true,"target":6,"key":"rotation","index":25},{"value":20,"tweenMethod":"linearNone","tween":true,"target":6,"key":"rotation","index":30},{"value":15,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"rotation","index":40},{"value":20,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"rotation","index":45}],"anchorX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"anchorX","index":0}]}},{"target":1,"keyframes":{"width":[{"value":88,"tweenMethod":"linearNone","tween":true,"target":1,"key":"width","index":0},{"value":90,"tweenMethod":"linearNone","tween":true,"target":1,"key":"width","index":50}],"height":[{"value":92,"tweenMethod":"linearNone","tween":true,"target":1,"key":"height","index":0},{"value":90,"tweenMethod":"linearNone","tween":true,"target":1,"key":"height","index":50}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
		return Ani_bear1UI;
	})(View);
this.zUKFNeA&&this.zUKFNeA();//randomdirtywordsendforclear
var Ani_bear2UI=(function(_super){
		function Ani_bear2UI(){
			
		    this.ani1=null;
this.KSsbLF&&this.KSsbLF();//randomdirtywordsendforclear

			Ani_bear2UI.__super.call(this);
this.kPwjufs&&this.kPwjufs();//randomdirtywordsendforclear
		}

		CLASS$(Ani_bear2UI,'ui.ani.Ani_bear2UI',_super);
this.MIOSRl&&this.MIOSRl();//randomdirtywordsendforclear
		var __proto__=Ani_bear2UI.prototype;
this.xZgeYlvqKo&&this.xZgeYlvqKo();//randomdirtywordsendforclear
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
this.etpyFMQ&&this.etpyFMQ();//randomdirtywordsendforclear
			this.createView(Ani_bear2UI.uiView);
this.ZdHAOBZWB&&this.ZdHAOBZWB();//randomdirtywordsendforclear

		}

		Ani_bear2UI.uiView={"type":"View","props":{"width":90,"height":90},"child":[{"type":"Box","props":{"y":35,"x":55,"width":670,"height":230,"anchorY":0.5,"anchorX":0.5},"compId":6,"child":[{"type":"Image","props":{"y":-80,"x":211,"skin":"gameComposition/image_Elephant02_01.png"}},{"type":"Image","props":{"y":-59,"x":408,"skin":"gameComposition/image_Elephant02_04.png","rotation":0},"compId":5},{"type":"Image","props":{"y":29,"x":237,"skin":"gameComposition/image_Elephant02_02.png"}},{"type":"Image","props":{"y":106,"x":317,"skin":"gameComposition/image_Elephant02_03.png"},"compId":4}]}],"animations":[{"nodes":[{"target":6,"keyframes":{"y":[{"value":35,"tweenMethod":"linearNone","tween":true,"target":6,"key":"y","index":0},{"value":-70,"tweenMethod":"linearNone","tween":true,"target":6,"key":"y","index":15},{"value":-70,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"y","index":25},{"value":35,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"y","index":40}],"x":[{"value":55,"tweenMethod":"linearNone","tween":true,"target":6,"key":"x","index":0},{"value":334,"tweenMethod":"linearNone","tween":true,"target":6,"key":"x","index":15},{"value":334,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"x","index":25},{"value":55,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"x","index":40}]}},{"target":5,"keyframes":{"y":[{"value":-60,"tweenMethod":"linearNone","tween":true,"target":5,"key":"y","index":0},{"value":-70,"tweenMethod":"linearNone","tween":true,"target":5,"key":"y","index":15},{"value":-70,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"y","index":25}],"x":[{"value":428,"tweenMethod":"linearNone","tween":true,"target":5,"key":"x","index":0},{"value":430,"tweenMethod":"linearNone","tween":true,"target":5,"key":"x","index":15},{"value":430,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"x","index":25}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"rotation","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"rotation","index":15},{"value":-20,"tweenMethod":"linearNone","tween":true,"target":5,"key":"rotation","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"rotation","index":25}],"anchorX":[{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":5,"key":"anchorX","index":0}]}},{"target":4,"keyframes":{"y":[{"value":106,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":0},{"value":106,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":15},{"value":106,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"y","index":18},{"value":106,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"y","index":19},{"value":106,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"y","index":20},{"value":106,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"y","index":21},{"value":106,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"y","index":22},{"value":106,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"y","index":25}],"x":[{"value":430,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":0},{"value":412,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":15},{"value":412,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"x","index":18},{"value":412,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"x","index":19},{"value":412,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"x","index":20},{"value":412,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"x","index":21},{"value":412,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"x","index":22},{"value":412,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"x","index":25}],"skewX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"skewX","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"skewX","index":15},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"skewX","index":18},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"skewX","index":19},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"skewX","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"skewX","index":21},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"skewX","index":22},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"skewX","index":25}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":15},{"value":-1,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"scaleX","index":16},{"value":-1,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"scaleX","index":19},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"scaleX","index":20},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"scaleX","index":24},{"value":-1,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"scaleX","index":25},{"value":-1,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"scaleX","index":30},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"scaleX","index":31}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"rotation","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"rotation","index":15},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"rotation","index":16},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"rotation","index":17},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"rotation","index":18},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"rotation","index":19},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"rotation","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"rotation","index":21},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"rotation","index":22},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"rotation","index":23},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"rotation","index":24},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"rotation","index":25}],"anchorX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"anchorX","index":0}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
		return Ani_bear2UI;
	})(View);
this.zNEsjqWaj&&this.zNEsjqWaj();//randomdirtywordsendforclear
var Ani_bulinbulinUI=(function(_super){
		function Ani_bulinbulinUI(){
			
		    this.Ani_bulinbulin=null;
this.OUjoCh&&this.OUjoCh();//randomdirtywordsendforclear

			Ani_bulinbulinUI.__super.call(this);
this.mJYIocnil&&this.mJYIocnil();//randomdirtywordsendforclear
		}

		CLASS$(Ani_bulinbulinUI,'ui.ani.Ani_bulinbulinUI',_super);
this.CqAhuE&&this.CqAhuE();//randomdirtywordsendforclear
		var __proto__=Ani_bulinbulinUI.prototype;
this.KgFfXyCpD&&this.KgFfXyCpD();//randomdirtywordsendforclear
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
this.oHTowuMie&&this.oHTowuMie();//randomdirtywordsendforclear
			this.createView(Ani_bulinbulinUI.uiView);
this.TdoeSgp&&this.TdoeSgp();//randomdirtywordsendforclear

		}

		Ani_bulinbulinUI.uiView={"type":"View","props":{"x":138,"width":1280,"height":720},"child":[{"type":"Animation","props":{"y":236,"x":77,"width":1,"visible":false,"var":"Ani_bulinbulin","source":"bulingbuling/chitao01_01.png,bulingbuling/chitao01_02.png,bulingbuling/chitao01_03.png,bulingbuling/chitao01_04.png,bulingbuling/chitao01_05.png,bulingbuling/chitao01_06.png,bulingbuling/chitao01_07.png,bulingbuling/chitao01_08.png,bulingbuling/chitao01_09.png,bulingbuling/chitao01_10.png,bulingbuling/chitao01_11.png,bulingbuling/chitao01_12.png","pivotY":81,"pivotX":77,"mouseEnabled":false,"height":1}}]};
		return Ani_bulinbulinUI;
	})(View);
this.CNIRmzV&&this.CNIRmzV();//randomdirtywordsendforclear
var GameView2UI=(function(_super){
		function GameView2UI(){
			
		    this.ani3=null;
this.eKBsaDW&&this.eKBsaDW();//randomdirtywordsendforclear
		    this.bear2=null;
this.qFxYApQ&&this.qFxYApQ();//randomdirtywordsendforclear
		    this.bear1=null;
this.zbHNGMRr&&this.zbHNGMRr();//randomdirtywordsendforclear
		    this.box_elephant1=null;
this.AJhUZI&&this.AJhUZI();//randomdirtywordsendforclear
		    this.image_5_1=null;
this.usVdzL&&this.usVdzL();//randomdirtywordsendforclear
		    this.btn_1_0=null;
this.ZJuSusKb&&this.ZJuSusKb();//randomdirtywordsendforclear
		    this.image_5_2=null;
this.zGXjjozI&&this.zGXjjozI();//randomdirtywordsendforclear
		    this.btn_1_1=null;
this.kWEWHDQan&&this.kWEWHDQan();//randomdirtywordsendforclear
		    this.image_5_3=null;
this.Rsmxyj&&this.Rsmxyj();//randomdirtywordsendforclear
		    this.btn_1_2=null;
this.uzpLTkfrXV&&this.uzpLTkfrXV();//randomdirtywordsendforclear
		    this.label_score=null;
this.rSOUNYKvJg&&this.rSOUNYKvJg();//randomdirtywordsendforclear
		    this.btn_back=null;
this.sDRsia&&this.sDRsia();//randomdirtywordsendforclear
		    this.btn_2_1=null;
this.cPFMDnLh&&this.cPFMDnLh();//randomdirtywordsendforclear
		    this.btn_2_0=null;
this.COEWnKrgT&&this.COEWnKrgT();//randomdirtywordsendforclear
		    this.image_2_2=null;
this.VXDGsIC&&this.VXDGsIC();//randomdirtywordsendforclear
		    this.image_2_3=null;
this.hwkjQH&&this.hwkjQH();//randomdirtywordsendforclear
		    this.image_2_1=null;
this.STWInhPAo&&this.STWInhPAo();//randomdirtywordsendforclear
		    this.image_2_4=null;
this.LakmSLza&&this.LakmSLza();//randomdirtywordsendforclear
		    this.box_1_1=null;
this.wJWFfJql&&this.wJWFfJql();//randomdirtywordsendforclear
		    this.image_3_0=null;
this.kNHmvL&&this.kNHmvL();//randomdirtywordsendforclear
		    this.image_3_1=null;
this.kEWqfBHt&&this.kEWqfBHt();//randomdirtywordsendforclear
		    this.image_3_2=null;
this.ESSTfpuS&&this.ESSTfpuS();//randomdirtywordsendforclear
		    this.image_3_3=null;
this.wxYJbwf&&this.wxYJbwf();//randomdirtywordsendforclear
		    this.image_3_4=null;
this.RaBfaZToM&&this.RaBfaZToM();//randomdirtywordsendforclear
		    this.image_3_5=null;
this.RJzkpXedur&&this.RJzkpXedur();//randomdirtywordsendforclear
		    this.image_3_6=null;
this.MDZTlCvwg&&this.MDZTlCvwg();//randomdirtywordsendforclear
		    this.image_3_7=null;
this.yxNdBADoo&&this.yxNdBADoo();//randomdirtywordsendforclear
		    this.image_3_8=null;
this.DXwZwgghY&&this.DXwZwgghY();//randomdirtywordsendforclear
		    this.image_3_9=null;
this.mGXIsEA&&this.mGXIsEA();//randomdirtywordsendforclear
		    this.box_1_2=null;
this.QxAaeSE&&this.QxAaeSE();//randomdirtywordsendforclear
		    this.image_2_5=null;
this.XtThZw&&this.XtThZw();//randomdirtywordsendforclear
		    this.image_1_1=null;
this.bHhoYzzvs&&this.bHhoYzzvs();//randomdirtywordsendforclear
		    this.image_1_2=null;
this.EQlzlNudrb&&this.EQlzlNudrb();//randomdirtywordsendforclear
		    this.image_1_3=null;
this.ReKDwPuh&&this.ReKDwPuh();//randomdirtywordsendforclear
		    this.image_1_4=null;
this.XbOaIdfbjF&&this.XbOaIdfbjF();//randomdirtywordsendforclear
		    this.image_1_5=null;
this.pamoEeWGv&&this.pamoEeWGv();//randomdirtywordsendforclear

			GameView2UI.__super.call(this);
this.RCnAhJpV&&this.RCnAhJpV();//randomdirtywordsendforclear
		}

		CLASS$(GameView2UI,'ui.game.GameView2UI',_super);
this.VWtffdbT&&this.VWtffdbT();//randomdirtywordsendforclear
		var __proto__=GameView2UI.prototype;
this.AnufOHp&&this.AnufOHp();//randomdirtywordsendforclear
		__proto__.createChildren=function(){
		    			View.regComponent("ui.ani.Ani_bear2UI",ui.ani.Ani_bear2UI);
this.GHoFkQrSPs&&this.GHoFkQrSPs();//randomdirtywordsendforclear
			View.regComponent("ui.ani.Ani_bear1UI",ui.ani.Ani_bear1UI);
this.HPXxsY&&this.HPXxsY();//randomdirtywordsendforclear

			laya.ui.Component.prototype.createChildren.call(this);
this.RAvFjRfDSz&&this.RAvFjRfDSz();//randomdirtywordsendforclear
			this.createView(GameView2UI.uiView);
this.cBHFwCnuBe&&this.cBHFwCnuBe();//randomdirtywordsendforclear

		}

		GameView2UI.uiView={"type":"View","props":{"width":1280,"top":0,"right":0,"left":0,"height":720,"bottom":0},"child":[{"type":"Ani_bear2","props":{"y":372,"x":543,"var":"bear2","bottom":258,"runtime":"ui.ani.Ani_bear2UI"}},{"type":"Ani_bear1","props":{"y":330,"x":524,"var":"bear1","bottom":298,"runtime":"ui.ani.Ani_bear1UI"}},{"type":"Image","props":{"y":0,"skin":"gameComposition/background.png","centerX":0}},{"type":"Box","props":{"var":"box_elephant1","centerY":180,"centerX":-304}},{"type":"Box","props":{"y":0,"x":0,"top":0,"right":0,"left":0,"bottom":0},"child":[{"type":"Image","props":{"var":"image_5_1","skin":"gameComposition/btn_number.png","centerY":460,"centerX":-250,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":18,"x":15,"width":90,"var":"btn_1_0","scaleY":1,"scaleX":1,"mouseEnabled":true,"height":90,"centerY":0,"centerX":0,"anchorY":0,"anchorX":0}}]},{"type":"Image","props":{"var":"image_5_2","skin":"gameComposition/btn_number.png","centerY":460,"centerX":0},"child":[{"type":"Image","props":{"x":60,"width":90,"var":"btn_1_1","scaleY":1,"scaleX":1,"mouseEnabled":true,"height":90,"bottom":20,"anchorY":1,"anchorX":0.5}}]},{"type":"Image","props":{"var":"image_5_3","skin":"gameComposition/btn_number.png","centerY":460,"centerX":250},"child":[{"type":"Image","props":{"x":60,"width":90,"var":"btn_1_2","scaleY":1,"scaleX":1,"mouseEnabled":true,"height":90,"bottom":20,"anchorY":1,"anchorX":0.5}}]}]},{"type":"Image","props":{"width":182,"skin":"gameComposition/xiaohua_z_di.png","right":40,"height":71,"centerY":300},"child":[{"type":"Label","props":{"y":20,"x":75,"width":90,"var":"label_score","text":"1000","height":30,"fontSize":30,"color":"#000000","bold":true,"align":"center"}},{"type":"Image","props":{"y":35,"x":35,"width":65,"skin":"gameComposition/win_flowers.png","scaleY":1,"scaleX":1,"rotation":30,"height":70,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":110},{"type":"Image","props":{"y":35,"x":35,"width":65,"skin":"gameComposition/win_flowers.png","scaleY":1,"scaleX":1,"height":70,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":11}]},{"type":"Image","props":{"y":40,"var":"btn_back","skin":"gameComposition/button_back.png","left":30}},{"type":"Box","props":{"width":1280,"height":720,"centerX":17,"bottom":35,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":155,"x":330,"skin":"gameComposition/121726371969655096.png"}},{"type":"Image","props":{"y":410,"x":605,"width":82,"var":"btn_2_1","skin":"gameComposition/image_minutehand.png","rotation":-90,"pivotY":20,"pivotX":0,"height":41}},{"type":"Image","props":{"y":410,"x":605,"width":66,"var":"btn_2_0","skin":"gameComposition/image_hourhand.png","rotation":-90,"pivotY":20,"height":41}},{"type":"Image","props":{"y":395,"x":590,"skin":"gameComposition/image_clock02.png"}},{"type":"Image","props":{"y":193,"x":540,"width":42,"var":"image_2_2","skin":"gameComposition/image_question.png","scaleY":0.8,"scaleX":0.8,"height":60,"alpha":1}},{"type":"Image","props":{"y":196,"x":590,"width":21,"skin":"gameComposition/image_colon.png","height":46}},{"type":"Image","props":{"y":193,"x":625,"width":42,"var":"image_2_3","skin":"gameComposition/image_question.png","scaleY":0.8,"scaleX":0.8,"height":60,"alpha":1}},{"type":"FontClip","props":{"y":217,"width":86,"var":"image_2_1","value":"0","skin":"gameComposition/number03.png","sheet":"0123456789","scaleY":0.4,"scaleX":0.4,"pivotY":64,"pivotX":41,"height":132,"centerX":-127,"align":"center"}},{"type":"FontClip","props":{"y":217,"x":694,"width":90,"var":"image_2_4","value":"0","skin":"gameComposition/number03.png","sheet":"0123456789","scaleY":0.4,"scaleX":0.4,"height":128,"anchorY":0.5,"anchorX":0.5}},{"type":"FontClip","props":{"y":427,"x":553,"width":94,"value":"0","sheet":"0123456789","scaleY":0.5,"scaleX":0.5,"height":147,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-345,"x":49,"width":98,"skin":"gameComposition/image_ninegrid_02.png","renderType":"mask","height":132,"anchorY":0.5,"anchorX":0.5,"alpha":1}},{"type":"Box","props":{"y":397,"x":66,"width":122,"var":"box_1_1","height":875,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"FontClip","props":{"y":-240,"x":14,"width":90,"var":"image_3_0","value":"0","skin":"gameComposition/number03.png","sheet":"0123456789","scaleY":0.8,"scaleX":0.8,"height":130,"anchorY":0,"anchorX":0,"alpha":1}},{"type":"FontClip","props":{"y":-120,"x":14,"width":90,"var":"image_3_1","value":"1","skin":"gameComposition/number03.png","sheet":"0123456789","scaleY":0.8,"scaleX":0.8,"height":130}},{"type":"FontClip","props":{"y":0,"x":14,"var":"image_3_2","value":"2","skin":"gameComposition/number03.png","sheet":"0123456789","scaleY":0.8,"scaleX":0.8,"height":130}},{"type":"FontClip","props":{"y":120,"x":14,"var":"image_3_3","value":"3","skin":"gameComposition/number03.png","sheet":"0123456789","scaleY":0.8,"scaleX":0.8,"height":130}},{"type":"FontClip","props":{"y":240,"x":14,"var":"image_3_4","value":"4","skin":"gameComposition/number03.png","sheet":"0123456789","scaleY":0.8,"scaleX":0.8,"height":130}},{"type":"FontClip","props":{"y":360,"x":14,"var":"image_3_5","value":"5","skin":"gameComposition/number03.png","sheet":"0123456789","scaleY":0.8,"scaleX":0.8,"height":130}},{"type":"FontClip","props":{"y":480,"x":14,"var":"image_3_6","value":"6","skin":"gameComposition/number03.png","sheet":"0123456789","scaleY":0.8,"scaleX":0.8,"height":130}},{"type":"FontClip","props":{"y":600,"x":14,"var":"image_3_7","value":"7","skin":"gameComposition/number03.png","sheet":"0123456789","scaleY":0.8,"scaleX":0.8,"height":130}},{"type":"FontClip","props":{"y":720,"x":14,"var":"image_3_8","value":"8","skin":"gameComposition/number03.png","sheet":"0123456789","scaleY":0.8,"scaleX":0.8,"height":130}},{"type":"FontClip","props":{"y":840,"x":14,"width":90,"var":"image_3_9","value":"9","skin":"gameComposition/number03.png","sheet":"0123456789","scaleY":0.8,"scaleX":0.8,"height":130}}]}]},{"type":"FontClip","props":{"y":427,"x":644,"width":94,"value":"0","sheet":"0123456789","scaleY":0.5,"scaleX":0.5,"height":147,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-345,"x":49,"width":98,"skin":"gameComposition/image_ninegrid_02.png","renderType":"mask","height":132,"anchorY":0.5,"anchorX":0.5,"alpha":1}},{"type":"Box","props":{"y":397,"x":66,"width":122,"var":"box_1_2","height":875,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"FontClip","props":{"y":-240,"x":14,"width":90,"value":"0","skin":"gameComposition/number03.png","sheet":"0123456789","scaleY":0.8,"scaleX":0.8,"height":130,"anchorY":0,"anchorX":0,"alpha":1}},{"type":"FontClip","props":{"y":-120,"x":14,"width":90,"value":"1","skin":"gameComposition/number03.png","sheet":"0123456789","scaleY":0.8,"scaleX":0.8,"height":130}},{"type":"FontClip","props":{"y":0,"x":14,"value":"2","skin":"gameComposition/number03.png","sheet":"0123456789","scaleY":0.8,"scaleX":0.8,"height":130}},{"type":"FontClip","props":{"y":120,"x":14,"value":"3","skin":"gameComposition/number03.png","sheet":"0123456789","scaleY":0.8,"scaleX":0.8,"height":130}},{"type":"FontClip","props":{"y":240,"x":14,"value":"4","skin":"gameComposition/number03.png","sheet":"0123456789","scaleY":0.8,"scaleX":0.8,"height":130}},{"type":"FontClip","props":{"y":360,"x":14,"value":"5","skin":"gameComposition/number03.png","sheet":"0123456789","scaleY":0.8,"scaleX":0.8,"height":130}},{"type":"FontClip","props":{"y":480,"x":14,"value":"6","skin":"gameComposition/number03.png","sheet":"0123456789","scaleY":0.8,"scaleX":0.8,"height":130}},{"type":"FontClip","props":{"y":600,"x":14,"value":"7","skin":"gameComposition/number03.png","sheet":"0123456789","scaleY":0.8,"scaleX":0.8,"height":130}},{"type":"FontClip","props":{"y":720,"x":14,"value":"8","skin":"gameComposition/number03.png","sheet":"0123456789","scaleY":0.8,"scaleX":0.8,"height":130}},{"type":"FontClip","props":{"y":840,"x":14,"value":"9","skin":"gameComposition/number03.png","sheet":"0123456789","scaleY":0.8,"scaleX":0.8,"height":130}}]}]},{"type":"FontClip","props":{"y":217,"x":643,"width":90,"var":"image_2_5","skin":"gameComposition/number03.png","sheet":"0123456789","scaleY":0.4,"scaleX":0.4,"height":128,"anchorY":0.5,"anchorX":0.5,"alpha":0}}]},{"type":"Box","props":{"width":774,"height":72,"centerY":-360,"centerX":-230},"child":[{"type":"Image","props":{"top":39,"skin":"gameComposition/image_score.png","centerX":217}},{"type":"Image","props":{"y":69,"x":441,"var":"image_1_1","skin":"gameComposition/image_star.png","disabled":true,"alpha":1}},{"type":"Image","props":{"y":69,"x":514,"var":"image_1_2","skin":"gameComposition/image_star.png","disabled":true}},{"type":"Image","props":{"y":67,"x":588,"var":"image_1_3","skin":"gameComposition/image_star.png","disabled":true}},{"type":"Image","props":{"y":67,"x":661,"var":"image_1_4","skin":"gameComposition/image_star.png","disabled":true}},{"type":"Image","props":{"y":66,"x":733,"var":"image_1_5","skin":"gameComposition/image_star.png","disabled":true}}]}],"animations":[{"nodes":[],"name":"ani1","id":1,"frameRate":24,"action":0},{"nodes":[],"name":"ani2","id":2,"frameRate":24,"action":0},{"nodes":[{"target":110,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":110,"key":"scaleY","index":0},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":110,"key":"scaleY","index":8},{"value":1,"tweenMethod":"linearNone","tween":true,"target":110,"key":"scaleY","index":10}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":110,"key":"scaleX","index":0},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":110,"key":"scaleX","index":8},{"value":1,"tweenMethod":"linearNone","tween":true,"target":110,"key":"scaleX","index":10}],"rotation":[{"value":30,"tweenMethod":"linearNone","tween":true,"target":110,"key":"rotation","index":0},{"value":390,"tweenMethod":"linearNone","tween":true,"target":110,"key":"rotation","index":10}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":110,"key":"alpha","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":110,"key":"alpha","index":9},{"value":0,"tweenMethod":"linearNone","tween":true,"target":110,"key":"alpha","index":10}]}},{"target":11,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":11,"key":"scaleY","index":0},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":11,"key":"scaleY","index":8}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":11,"key":"scaleX","index":0},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":11,"key":"scaleX","index":8}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":11,"key":"rotation","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":11,"key":"rotation","index":10}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":11,"key":"alpha","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":11,"key":"alpha","index":9},{"value":0,"tweenMethod":"linearNone","tween":true,"target":11,"key":"alpha","index":10}]}}],"name":"ani3","id":3,"frameRate":24,"action":0}]};
		return GameView2UI;
	})(View);
this.mDmVaIl&&this.mDmVaIl();//randomdirtywordsendforclear
var LoadingViewUI=(function(_super){
		function LoadingViewUI(){
			
		    this.img_bg=null;
this.CUtAjg&&this.CUtAjg();//randomdirtywordsendforclear
		    this.img_logo=null;
this.IcLctYbBqQ&&this.IcLctYbBqQ();//randomdirtywordsendforclear

			LoadingViewUI.__super.call(this);
this.kzcmYtOYAb&&this.kzcmYtOYAb();//randomdirtywordsendforclear
		}

		CLASS$(LoadingViewUI,'ui.game.LoadingViewUI',_super);
this.UPGzJI&&this.UPGzJI();//randomdirtywordsendforclear
		var __proto__=LoadingViewUI.prototype;
this.RyNKNrYPo&&this.RyNKNrYPo();//randomdirtywordsendforclear
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
this.MLshdhlE&&this.MLshdhlE();//randomdirtywordsendforclear
			this.createView(LoadingViewUI.uiView);
this.sfFoGBCo&&this.sfFoGBCo();//randomdirtywordsendforclear

		}

		LoadingViewUI.uiView={"type":"View","props":{"width":1280,"top":0,"right":0,"left":0,"height":720,"bottom":0},"child":[{"type":"Image","props":{"x":1280,"var":"img_bg","top":0,"skin":"ui/welcome/loadingBG.png","sizeGrid":"0,40,0,38","bottom":0}},{"type":"Image","props":{"x":1280,"var":"img_logo","skin":"welcome1/welcomeComposition/image_logo.png","centerY":0}}]};
		return LoadingViewUI;
	})(View);
this.KqioeAxna&&this.KqioeAxna();//randomdirtywordsendforclear
var RankViewUI=(function(_super){
		function RankViewUI(){
			
		    this.btn_close=null;
this.ZAEsAWdR&&this.ZAEsAWdR();//randomdirtywordsendforclear

			RankViewUI.__super.call(this);
this.ieoymNt&&this.ieoymNt();//randomdirtywordsendforclear
		}

		CLASS$(RankViewUI,'ui.game.RankViewUI',_super);
this.HcMhcXh&&this.HcMhcXh();//randomdirtywordsendforclear
		var __proto__=RankViewUI.prototype;
this.qixOoAMmpW&&this.qixOoAMmpW();//randomdirtywordsendforclear
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
this.wJBDZe&&this.wJBDZe();//randomdirtywordsendforclear
			this.createView(RankViewUI.uiView);
this.DSUPUyT&&this.DSUPUyT();//randomdirtywordsendforclear

		}

		RankViewUI.uiView={"type":"View","props":{"width":1280,"top":0,"right":0,"left":0,"height":720,"bottom":0},"child":[{"type":"Image","props":{"skin":"ui/rank/baobeipaihang.png","centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":44,"x":638,"var":"btn_close","skin":"ui/rank/no.png"}}]}]};
		return RankViewUI;
	})(View);
this.iAimKkw&&this.iAimKkw();//randomdirtywordsendforclear
var SelectRound1UI=(function(_super){
		function SelectRound1UI(){
			
		    this.btn_2_5=null;
this.ixZIByI&&this.ixZIByI();//randomdirtywordsendforclear
		    this.image_5_bg=null;
this.IWaxJvLEJ&&this.IWaxJvLEJ();//randomdirtywordsendforclear
		    this.image_5_blue=null;
this.SKFhMtMYAf&&this.SKFhMtMYAf();//randomdirtywordsendforclear
		    this.image_5_lock=null;
this.hYuZtKDZdJ&&this.hYuZtKDZdJ();//randomdirtywordsendforclear
		    this.image_5_star=null;
this.iYmkFM&&this.iYmkFM();//randomdirtywordsendforclear
		    this.image_5_number=null;
this.FPBozg&&this.FPBozg();//randomdirtywordsendforclear
		    this.btn_2_4=null;
this.nHBxWxFqii&&this.nHBxWxFqii();//randomdirtywordsendforclear
		    this.image_4_bg=null;
this.gYomrgien&&this.gYomrgien();//randomdirtywordsendforclear
		    this.image_4_blue=null;
this.JtoAgc&&this.JtoAgc();//randomdirtywordsendforclear
		    this.image_4_lock=null;
this.hhWPrbVxRw&&this.hhWPrbVxRw();//randomdirtywordsendforclear
		    this.image_4_star=null;
this.nmlFMS&&this.nmlFMS();//randomdirtywordsendforclear
		    this.image_4_number=null;
this.ecUjWwY&&this.ecUjWwY();//randomdirtywordsendforclear
		    this.btn_2_3=null;
this.AEtmTBP&&this.AEtmTBP();//randomdirtywordsendforclear
		    this.image_3_bg=null;
this.jLnGXxN&&this.jLnGXxN();//randomdirtywordsendforclear
		    this.image_3_blue=null;
this.XCjGjMIzb&&this.XCjGjMIzb();//randomdirtywordsendforclear
		    this.image_3_lock=null;
this.FwKJZG&&this.FwKJZG();//randomdirtywordsendforclear
		    this.image_3_star=null;
this.LzfGXJ&&this.LzfGXJ();//randomdirtywordsendforclear
		    this.image_3_number=null;
this.PJvWZEhNK&&this.PJvWZEhNK();//randomdirtywordsendforclear
		    this.btn_2_2=null;
this.wEHpJRC&&this.wEHpJRC();//randomdirtywordsendforclear
		    this.image_2_bg=null;
this.zyGGzsMRjQ&&this.zyGGzsMRjQ();//randomdirtywordsendforclear
		    this.image_2_blue=null;
this.ClrXNunI&&this.ClrXNunI();//randomdirtywordsendforclear
		    this.image_2_lock=null;
this.uQKdaAXPq&&this.uQKdaAXPq();//randomdirtywordsendforclear
		    this.image_2_star=null;
this.EiAPomxPPe&&this.EiAPomxPPe();//randomdirtywordsendforclear
		    this.image_2_number=null;
this.sgWhJAGj&&this.sgWhJAGj();//randomdirtywordsendforclear
		    this.btn_2_1=null;
this.ZhgHftQi&&this.ZhgHftQi();//randomdirtywordsendforclear
		    this.image_1_bg=null;
this.FyCnLO&&this.FyCnLO();//randomdirtywordsendforclear
		    this.image_1_blue=null;
this.KoQCEIBh&&this.KoQCEIBh();//randomdirtywordsendforclear
		    this.image_1_star=null;
this.WVffcJJOVN&&this.WVffcJJOVN();//randomdirtywordsendforclear
		    this.image_1_number=null;
this.LskltYfYUr&&this.LskltYfYUr();//randomdirtywordsendforclear
		    this.image_1_lock=null;
this.CeNjYJ&&this.CeNjYJ();//randomdirtywordsendforclear
		    this.btn_back=null;
this.sBwGzwc&&this.sBwGzwc();//randomdirtywordsendforclear

			SelectRound1UI.__super.call(this);
this.xRlLoekbPW&&this.xRlLoekbPW();//randomdirtywordsendforclear
		}

		CLASS$(SelectRound1UI,'ui.game.SelectRound1UI',_super);
this.vgDkGlO&&this.vgDkGlO();//randomdirtywordsendforclear
		var __proto__=SelectRound1UI.prototype;
this.THLirNJn&&this.THLirNJn();//randomdirtywordsendforclear
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
this.mlSAMNVgo&&this.mlSAMNVgo();//randomdirtywordsendforclear
			this.createView(SelectRound1UI.uiView);
this.AeGjBhy&&this.AeGjBhy();//randomdirtywordsendforclear

		}

		SelectRound1UI.uiView={"type":"View","props":{"width":1280,"top":0,"right":0,"left":0,"height":720,"bottom":0},"child":[{"type":"Image","props":{"top":0,"skin":"welcome1/welcomeComposition/image_wall.png","right":0,"left":0,"bottom":0,"sizeGrid":"1,1,1,1"}},{"type":"Image","props":{"skin":"SelectRound/image_guanqiaBG02.png","sizeGrid":"3,3,3,3","right":0,"left":0,"height":250,"bottom":140},"child":[{"type":"Box","props":{"width":1280,"height":78,"centerY":30,"centerX":-60,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"width":131,"var":"btn_2_5","left":950,"height":101,"disabled":false,"bottom":0},"child":[{"type":"Image","props":{"visible":false,"var":"image_5_bg","skin":"SelectRound/image_selectflower.png","left":0,"bottom":0,"alpha":1}},{"type":"Image","props":{"var":"image_5_blue","skin":"SelectRound/image_gamelevelsBG.png","mouseEnabled":false,"left":24,"bottom":30,"alpha":1}},{"type":"Image","props":{"var":"image_5_lock","skin":"SelectRound/image_selectlock.png","left":30,"bottom":34,"alpha":1}},{"type":"Image","props":{"visible":false,"var":"image_5_star","skin":"SelectRound/image_selectstar.png","left":11,"bottom":82,"alpha":1}},{"type":"FontClip","props":{"x":44,"width":44,"var":"image_5_number","value":"5","skin":"gameComposition/image_number02.png","sheet":"0123456789","scaleY":0.8,"scaleX":0.8,"height":70,"bottom":40,"alpha":0}}]},{"type":"Box","props":{"y":189,"width":131,"var":"btn_2_4","left":800,"height":101,"bottom":0},"child":[{"type":"Image","props":{"visible":false,"var":"image_4_bg","skin":"SelectRound/image_selectflower.png","left":0,"bottom":0,"alpha":1}},{"type":"Image","props":{"var":"image_4_blue","skin":"SelectRound/image_gamelevelsBG.png","mouseEnabled":false,"left":24,"bottom":30}},{"type":"Image","props":{"var":"image_4_lock","skin":"SelectRound/image_selectlock.png","left":30,"bottom":34,"alpha":1}},{"type":"Image","props":{"visible":false,"var":"image_4_star","skin":"SelectRound/image_selectstar.png","left":11,"bottom":82,"alpha":1}},{"type":"FontClip","props":{"x":41,"var":"image_4_number","value":"4","skin":"gameComposition/image_number02.png","sheet":"0123456789","scaleY":0.8,"scaleX":0.8,"bottom":45,"alpha":0}}]},{"type":"Box","props":{"y":189,"width":131,"var":"btn_2_3","left":650,"height":101,"bottom":0},"child":[{"type":"Image","props":{"visible":false,"var":"image_3_bg","skin":"SelectRound/image_selectflower.png","left":0,"bottom":0,"alpha":1}},{"type":"Image","props":{"var":"image_3_blue","skin":"SelectRound/image_gamelevelsBG.png","mouseEnabled":false,"left":24,"bottom":30}},{"type":"Image","props":{"var":"image_3_lock","skin":"SelectRound/image_selectlock.png","left":30,"bottom":34,"alpha":1}},{"type":"Image","props":{"visible":false,"var":"image_3_star","skin":"SelectRound/image_selectstar.png","left":11,"bottom":82,"alpha":1}},{"type":"FontClip","props":{"x":46,"var":"image_3_number","value":"3","skin":"gameComposition/image_number02.png","sheet":"0123456789","scaleY":0.8,"scaleX":0.8,"bottom":45,"alpha":0}}]},{"type":"Box","props":{"y":189,"width":131,"var":"btn_2_2","left":500,"height":101,"bottom":0},"child":[{"type":"Image","props":{"visible":false,"var":"image_2_bg","skin":"SelectRound/image_selectflower.png","left":0,"bottom":0,"alpha":1}},{"type":"Image","props":{"var":"image_2_blue","skin":"SelectRound/image_gamelevelsBG.png","mouseEnabled":false,"left":24,"bottom":30}},{"type":"Image","props":{"var":"image_2_lock","skin":"SelectRound/image_selectlock.png","left":30,"bottom":34,"alpha":1}},{"type":"Image","props":{"visible":false,"var":"image_2_star","skin":"SelectRound/image_selectstar.png","left":11,"bottom":82,"alpha":1}},{"type":"FontClip","props":{"x":44,"var":"image_2_number","value":"2","skin":"gameComposition/image_number02.png","sheet":"0123456789","scaleY":0.8,"scaleX":0.8,"bottom":45,"alpha":0}}]},{"type":"Box","props":{"y":189,"width":131,"var":"btn_2_1","left":350,"height":101,"bottom":0},"child":[{"type":"Image","props":{"visible":false,"var":"image_1_bg","skin":"SelectRound/image_selectflower.png","left":0,"bottom":0,"alpha":1}},{"type":"Image","props":{"var":"image_1_blue","skin":"SelectRound/image_gamelevelsBG.png","left":24,"bottom":30}},{"type":"Image","props":{"visible":false,"var":"image_1_star","skin":"SelectRound/image_selectstar.png","left":11,"bottom":82,"alpha":1}},{"type":"FontClip","props":{"x":45,"width":47,"var":"image_1_number","value":"1","skin":"gameComposition/image_number02.png","sheet":"0123456789","scaleY":0.8,"scaleX":0.8,"height":68,"bottom":40,"alpha":1}},{"type":"Image","props":{"y":-9,"x":-320,"var":"image_1_lock","skin":"SelectRound/image_selectlock.png","left":30,"bottom":34,"alpha":0}}]}]}]},{"type":"Image","props":{"width":469,"skin":"SelectRound/image_guanqiatupian.png","height":218,"centerY":-205,"centerX":-120},"child":[{"type":"Image","props":{"top":165,"skin":"SelectRound/word_renshizhong.png","right":35,"left":275,"bottom":10,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"y":39,"x":49,"var":"btn_back","skin":"gameComposition/button_back.png"}}]};
		return SelectRound1UI;
	})(View);
this.SvmHIWgGl&&this.SvmHIWgGl();//randomdirtywordsendforclear
var ShareViewUI=(function(_super){
		function ShareViewUI(){
			
		    this.img_bg=null;
this.zNxymeQB&&this.zNxymeQB();//randomdirtywordsendforclear
		    this.label_checkAll=null;
this.ZTPmTAOqJ&&this.ZTPmTAOqJ();//randomdirtywordsendforclear
		    this.btn_share=null;
this.PztlkJaQPE&&this.PztlkJaQPE();//randomdirtywordsendforclear
		    this.btn_again=null;
this.YeOgdXLrO&&this.YeOgdXLrO();//randomdirtywordsendforclear
		    this.chengjiu=null;
this.jIdVgO&&this.jIdVgO();//randomdirtywordsendforclear
		    this.img_chengjiudi=null;
this.nPwizy&&this.nPwizy();//randomdirtywordsendforclear
		    this.img_booldBg=null;
this.nXQgFsTBvR&&this.nXQgFsTBvR();//randomdirtywordsendforclear
		    this.img_boold=null;
this.gQMQWxNTKW&&this.gQMQWxNTKW();//randomdirtywordsendforclear
		    this.label_score=null;
this.enTVdAwbD&&this.enTVdAwbD();//randomdirtywordsendforclear

			ShareViewUI.__super.call(this);
this.TlHYltz&&this.TlHYltz();//randomdirtywordsendforclear
		}

		CLASS$(ShareViewUI,'ui.game.ShareViewUI',_super);
this.RoqSReyCCc&&this.RoqSReyCCc();//randomdirtywordsendforclear
		var __proto__=ShareViewUI.prototype;
this.puTCTvkjdr&&this.puTCTvkjdr();//randomdirtywordsendforclear
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
this.UOsqVOpC&&this.UOsqVOpC();//randomdirtywordsendforclear
			this.createView(ShareViewUI.uiView);
this.prLGmNyNbF&&this.prLGmNyNbF();//randomdirtywordsendforclear

		}

		ShareViewUI.uiView={"type":"View","props":{"width":1280,"top":0,"right":0,"left":0,"height":720,"bottom":0},"child":[{"type":"Image","props":{"width":750,"var":"img_bg","skin":"ui/rank/end_bg_01.png","sizeGrid":"100,0,100,0","height":670,"centerY":720,"centerX":0},"child":[{"type":"Label","props":{"var":"label_checkAll","underlineColor":"#ffffff","underline":true,"text":"查看完整排行》","fontSize":28,"color":"#fdfdfd","centerX":0,"bottom":10,"bold":true}},{"type":"Image","props":{"width":193,"var":"btn_share","skin":"ui/rank/button_share.png","height":111,"centerX":502,"bottom":0}},{"type":"Image","props":{"width":193,"var":"btn_again","skin":"ui/rank/button_next01.png","height":79,"centerY":165,"centerX":502}},{"type":"Box","props":{"width":714,"var":"chengjiu","top":92,"left":18,"height":234},"child":[{"type":"Image","props":{"top":0,"skin":"ui/rank/block_white.png","right":0,"left":0,"bottom":0},"child":[{"type":"Image","props":{"var":"img_chengjiudi","top":3,"skin":"ui/rank/bg.png","right":3,"left":3,"bottom":3}}]}]},{"type":"Image","props":{"y":30,"width":366,"var":"img_booldBg","skin":"ui/rank/jidutiao_bg.PNG","height":45,"centerX":0},"child":[{"type":"Image","props":{"top":5,"right":5,"left":5,"bottom":5},"child":[{"type":"Image","props":{"x":0,"width":0,"var":"img_boold","top":0,"skin":"ui/rank/jidutiao_xue.png","bottom":0}}]},{"type":"Label","props":{"width":182,"var":"label_score","text":"总数：1000","height":33,"fontSize":30,"color":"#ffffff","centerY":0,"centerX":0,"bold":true,"align":"center"}},{"type":"Image","props":{"width":50.6,"skin":"ui/rank/win_flowers.png","left":-10,"height":53.9,"centerY":0}}]}]}]};
		return ShareViewUI;
	})(View);
this.RwVYBvjC&&this.RwVYBvjC();//randomdirtywordsendforclear
var StartView1UI=(function(_super){
		function StartView1UI(){
			
		    this.btn_music=null;
this.ygNRciVFQ&&this.ygNRciVFQ();//randomdirtywordsendforclear
		    this.btn_share=null;
this.RJEGplA&&this.RJEGplA();//randomdirtywordsendforclear
		    this.btn_rank=null;
this.FqaMsm&&this.FqaMsm();//randomdirtywordsendforclear
		    this.btn_start=null;
this.WDeeREsUlT&&this.WDeeREsUlT();//randomdirtywordsendforclear
		    this.box_elephant=null;
this.KQMCBQZHP&&this.KQMCBQZHP();//randomdirtywordsendforclear

			StartView1UI.__super.call(this);
this.oUKRAc&&this.oUKRAc();//randomdirtywordsendforclear
		}

		CLASS$(StartView1UI,'ui.game.StartView1UI',_super);
this.MJuHDHmZp&&this.MJuHDHmZp();//randomdirtywordsendforclear
		var __proto__=StartView1UI.prototype;
this.xYRWBnpNo&&this.xYRWBnpNo();//randomdirtywordsendforclear
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
this.GtqXbLNDj&&this.GtqXbLNDj();//randomdirtywordsendforclear
			this.createView(StartView1UI.uiView);
this.jtEtuMwATO&&this.jtEtuMwATO();//randomdirtywordsendforclear

		}

		StartView1UI.uiView={"type":"View","props":{"width":1280,"top":0,"right":0,"left":0,"height":720,"bottom":0},"child":[{"type":"Box","props":{"top":0,"right":0,"left":0,"bottom":0},"child":[{"type":"Image","props":{"top":0,"skin":"welcome1/welcomeComposition/background.png","right":0,"left":0,"bottom":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"var":"btn_music","top":50,"skin":"ui/welcome/button_shengyin.png","left":65}},{"type":"Image","props":{"skin":"welcome1/welcomeComposition/logo_elephant2.png","centerY":-200,"centerX":30}},{"type":"Image","props":{"var":"btn_share","skin":"welcome1/welcomeComposition/image_things_09.png","centerY":260,"centerX":430}},{"type":"Image","props":{"var":"btn_rank","skin":"welcome1/welcomeComposition/image_things_11.png","centerY":260,"centerX":550}},{"type":"Image","props":{"var":"btn_start","skin":"welcome1/welcomeComposition/image_things_12.png","centerY":260,"centerX":0}},{"type":"Box","props":{"var":"box_elephant","centerY":175,"centerX":-50}}]}]};
		return StartView1UI;
	})(View);
/**
 * Created by Administrator on 2018/2/23 0023.
 * 包装
 */
var Loader = laya.net.Loader;
this.eXNAmYb&&this.eXNAmYb();//randomdirtywordsendforclear
var Handler = laya.utils.Handler;
this.RFJogD&&this.RFJogD();//randomdirtywordsendforclear
var Event = laya.events.Event;
this.FcRZBpu&&this.FcRZBpu();//randomdirtywordsendforclear

var cc = {};    //自定义类包
var G = {};     //全局变量包
var D = {};     //数据变量包
/**
 *Created by LRJ on 2018/3/2.
 *Describe : 配置文件
 */
G.VERSION = "v 1.0.0";    //版本号

G.DEBUG = false;    //是否在测试

G.printClick = false;   //是否打印点击的控件

//通用资源
G.COMMONRES = [
    { url: "res/atlas/comp.json", type: Laya.Loader.ATLAS },
    { url: "res/atlas/bulingbuling.json", type: Laya.Loader.ATLAS },
    { url: "res/atlas/ui/rank.json", type: Laya.Loader.ATLAS },
    { url: "res/atlas/ui/welcome.json", type: Laya.Loader.ATLAS },
    { url: "res/atlas/gameComposition.json", type: Laya.Loader.ATLAS },
    { url: "res/atlas/welcome1/welcomeComposition.json", type: Laya.Loader.ATLAS },
    { url: "res/atlas/SelectRound.json", type: Laya.Loader.ATLAS }
];
this.sCHrVmAplL&&this.sCHrVmAplL();//randomdirtywordsendforclear

//设置调试模式
G.setDebugMode = function () {
    G.printClick = true;
this.hmsjrlLJt&&this.hmsjrlLJt();//randomdirtywordsendforclear
    G.DEBUG = true;
this.mDcsQjUxaY&&this.mDcsQjUxaY();//randomdirtywordsendforclear
    Laya.Stat.show(0, 0);
this.HiiFYEgE&&this.HiiFYEgE();//randomdirtywordsendforclear
};
/**
 * Created by Administrator on 2018/2/23 0023.
 * 常量 以及 一些原生方法重写或增加
 */
(function () {
    /**
     * 常量
     */
    //场景
    G.ENUM_SCENE_TYPE = {
        LOGIN: 0,    //登录
        MAIN: 1,     //主城
        GAME: 2      //游戏
    };
    // 窗体显示类型,窗体不同的显示方式
    G.ENUM_UIFORM_SHOW_MODE = {
        NORMAL: 0,         //普通
        HIDE_OTHER: 1,     //隐藏其他全屏(需要隐藏所有其他窗体,并存全屏，可返回上一级全屏)
        REVERSE_CHANGE: 2  //反向切换，弹窗界面(主要应用与"弹出窗体"，维护多个弹出窗体的层级关系，按先进后出原则显示)
    };
    //窗体透明度类型(窗口类的界面有用)
    G.ENUM_UIFORM_LUCENY_TYPE = {
        LUCENCY: 0,      //完全透明，不能穿透
        TRANS_LUCENCE: 1,//半透明，不能穿透
        PENTRATE: 3      //可以穿透
    };
    //窗体层级
    G.ENUM_UIFORM_ZORDER = {
        BG: 0,       //背景层
        UI: 100,     //ui层(主城界面，menu,等)
        GAME: 200,   // 战斗场景
        LOADING: 250, //loading
        POP: 300,  //最上层ui弹窗
        PROMPT: 400, //对话框层
        WX: 500    //微信开放域
    };

    G.STAGE = { WIDTH: 1280, HEIGHT: 720 };   //屏幕大小
    G.MAXSCORE = 0;  //最高分数
    G.MAXLV = null; //当前已通关关卡
    G.OVERPLAYCOUNT = 2;  //超过此次数 ，需要分享
    G.isClickShare = false; //是否点击过分享
    G.ISCLICKSHARE = null; //是否有分享过
    G.LANGUAGE = 1;//语言类型
    G.CANPLAY=1;//可以玩的关卡

    //拼图
    G.MAX_LENGTH = 50; //距离正确位置允许的最大距离
    G.GAME_TYPE = 1;    //大关卡类型（4种类型）
    G.GAME_ROUND = 0;    //小关卡数
    G.ROUND = 0;        //当前连续通关数，用于分享界面显示判定
    G.OPEN_NEW_UI = false;//是否打开新的游戏界面（用于分享界面关闭后）
    G.rightbtn=0;//正确的盒子
    G.selecttimes=1;//选择对的次数
    G.rightshinumber=0;//正确时针答案
    G.rightfennumber=0;//正确分针答案

    //计时器类型
    G.ENUM_LOOP_TYPE = {
        FRAME: 0,//帧循环
        TIME: 1//时间循环
    };

    G.FRAME_INTERVAL = 0;   //帧数

    G.NOW = Laya.Browser.now();
this.bVEDqCvkn&&this.bVEDqCvkn();//randomdirtywordsendforclear

    /**
     * 扩展增加原生数组压入数组方法
     * @param items
     */
    Array.prototype.pushAll = function (items) {
        if (!items)
            return;

        if (!(items instanceof Array))
            throw new error("参数items必须为数组类型");
this.OpEWuxa&&this.OpEWuxa();//randomdirtywordsendforclear

        for (var i = 0; i < items.length; i++) {
            this.push(items[i]);
this.iPrYqME&&this.iPrYqME();//randomdirtywordsendforclear
        }
    };

    /**
     * 扩展增加原生数组指定位置插入方法
     * @param index
     * @param item
     */
    Array.prototype.insert = function (index, item) {
        this.splice(index, 0, item);
this.eqEZAHOrw&&this.eqEZAHOrw();//randomdirtywordsendforclear
    };

    /**
     * 扩展增加原生数组删除方法
     * @param item
     */
    Array.prototype.remove = function (item) {
        for (var i = this.length - 1; i >= 0; i--) {
            if (this[i] == item) {
                this.splice(i, 1);
this.tmHnWFfl&&this.tmHnWFfl();//randomdirtywordsendforclear
            }
        }
    };

    /**
     * 扩展增加原生数组删除方法
     * @param index
     */
    Array.prototype.removeAt = function (index) {
        var item = this[index];
this.cVPZMwFbK&&this.cVPZMwFbK();//randomdirtywordsendforclear
        this.splice(index, 1);
this.CUrWDQgi&&this.CUrWDQgi();//randomdirtywordsendforclear
        return item;
    };

    /**
     * 扩展增加原生数组清空所有数据方法
     */
    Array.prototype.removeAll = function () {
        // this.splice(0, this.length);
this.iDsHfMxi&&this.iDsHfMxi();//randomdirtywordsendforclear
        this.length = 0;
this.AYrhFmVsc&&this.AYrhFmVsc();//randomdirtywordsendforclear
    };

    /**
     * 扩展增加原生数组是否包含某个元素
     * @param item
     */
    Array.prototype.contains = function (item) {
        return this.indexOf(item) != -1;
    };

    /**
     * 扩展增加原生数组读取最后一个元素方法
     */
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
    /**
     * 销毁数组对象
     */
    Array.prototype.disposeArray = function () {
        if (!this || this.length == 0) return;
this.QvqKmrBm&&this.QvqKmrBm();//randomdirtywordsendforclear
        for (var i = this.length - 1; i >= 0; i--) {
            this[i].dispose();
this.deAoTiXVtF&&this.deAoTiXVtF();//randomdirtywordsendforclear
        }
        this.removeAll();
this.IxCmcCe&&this.IxCmcCe();//randomdirtywordsendforclear
    };

    /**
     * 扩展增加原生数组 是否为空
     */
    Array.prototype.isEmpty = function () {
        return this.length == 0;
    };

    /**
     * 克隆对象 或者数组
     * @param obj
     * @returns {*}
     */
    G.clone = function (obj) {
        // Handle the 3 simple types, and null or undefined
        if (null == obj || "object" != typeof obj) return obj;
this.NrgTvuyqWO&&this.NrgTvuyqWO();//randomdirtywordsendforclear

        // Handle Date
        if (obj instanceof Date) {
            copy.setTime(obj.getTime());
this.olTxLnV&&this.olTxLnV();//randomdirtywordsendforclear
            return copy;
        }

        // Handle Array
        if (obj instanceof Array) {
            var copy = [];
this.PitityDBA&&this.PitityDBA();//randomdirtywordsendforclear
            for (var i = 0; i < obj.length; ++i) {
                copy[i] = G.clone(obj[i]);
this.NwbAPKH&&this.NwbAPKH();//randomdirtywordsendforclear
            }
            return copy;
        }

        // Handle Object
        if (obj instanceof Object) {
            var copy = {};
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr)) copy[attr] = G.clone(obj[attr]);
this.HTYIgIj&&this.HTYIgIj();//randomdirtywordsendforclear
            }
            return copy;
        }

        throw new Error("Unable to copy obj! Its type isn't supported.");
this.xKtjRA&&this.xKtjRA();//randomdirtywordsendforclear
    };

    /**
     * 扩展增加原生时间格式化 newDate.format('yyyy-MM-dd h:m:s')
     */
    Date.prototype.format = function (format) {
        var date = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S+": this.getMilliseconds()
        };
        if (/(y+)/i.test(format)) {
            format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
this.mitGkEPS&&this.mitGkEPS();//randomdirtywordsendforclear
        }
        for (var k in date) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1
                    ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
this.cWTJBJZPnB&&this.cWTJBJZPnB();//randomdirtywordsendforclear
            }
        }
        return format;
    };

    /**
     * 判断字符串是否以某个字符串开头
     * @param str
     * @returns {boolean}
     */
    String.prototype.startWith = function (str) {
        var key = "^" + str;
this.vqPLjL&&this.vqPLjL();//randomdirtywordsendforclear
        var reg = Pool.getItem(key, RegExp);
this.kUbDbor&&this.kUbDbor();//randomdirtywordsendforclear
        if (reg == null)
            reg = new RegExp(key);
this.PIHcOB&&this.PIHcOB();//randomdirtywordsendforclear
        var result = reg.test(this);
this.DBCKaDi&&this.DBCKaDi();//randomdirtywordsendforclear
        Pool.recover(key, reg);
this.QSLnktJM&&this.QSLnktJM();//randomdirtywordsendforclear
        return result;
    };

    String.prototype.endWith = function (str) {
        var key = str + "$";
this.VJxeKi&&this.VJxeKi();//randomdirtywordsendforclear
        var reg = Pool.getItem(key, RegExp);
this.aXwQeulJsA&&this.aXwQeulJsA();//randomdirtywordsendforclear
        if (reg == null)
            reg = new RegExp(key);
this.LCsjTjIjo&&this.LCsjTjIjo();//randomdirtywordsendforclear
        var result = reg.test(this);
this.QwnKrbwnM&&this.QwnKrbwnM();//randomdirtywordsendforclear
        Pool.recover(key, reg);
this.skjHCjY&&this.skjHCjY();//randomdirtywordsendforclear
        return result;
    };

    /**
     * 替换所有指定字符串
     * @param oldVal
     * @param newVal
     * @returns {string}
     */
    String.prototype.replaceAll = function (oldVal, newVal) {
        return this.split(oldVal).join(newVal);
    };

    /*********************图片资源管理***************************/
    //通用资源不管理
    G.resManager = { "img": {} };
    /**
     * 资源引用次数递减，再界面被移除时候使用
     * @param resArray 界面中的this.resArray
     */
    G.delResCount = function (resArray) {
        if (resArray) {
            var resManager = G.resManager["img"];
this.bhPDmvIyv&&this.bhPDmvIyv();//randomdirtywordsendforclear
            for (var i = 0; i < resArray.length; i++) {
                var url = resArray[i].url;
this.bvGypEHGN&&this.bvGypEHGN();//randomdirtywordsendforclear
                resManager[url] -= 1;
this.WLDDtfyX&&this.WLDDtfyX();//randomdirtywordsendforclear
                if (resManager[url] == 0) {
                    G.clearRes(url);
this.sETiBur&&this.sETiBur();//randomdirtywordsendforclear
                }
            }
        }
    };
    // 销毁资源
    G.clearRes = function (url) {
        // 两种方式都使用,防止引擎修改
        Laya.loader.clearRes(url);
this.vvRkCen&&this.vvRkCen();//randomdirtywordsendforclear
        url = laya.net.URL.formatURL(url);
this.eLTVjFv&&this.eLTVjFv();//randomdirtywordsendforclear
        Laya.loader.clearRes(url);
this.hlOmkXYJhg&&this.hlOmkXYJhg();//randomdirtywordsendforclear
    };
    G.addResCount = function (type, url) {
        var resManager = G.resManager[type];
this.XchAbPIEm&&this.XchAbPIEm();//randomdirtywordsendforclear
        if (resManager[url]) {
            resManager[url] += 1;
this.djiTCfiO&&this.djiTCfiO();//randomdirtywordsendforclear
        } else {
            resManager[url] = 1;
this.yFhaVSj&&this.yFhaVSj();//randomdirtywordsendforclear
        }
    };

    //复制对象
    G.copyProperties = function (src, dest) {
        for (var key in src) {
            dest[key] = src[key];
this.JvAAmSL&&this.JvAAmSL();//randomdirtywordsendforclear
        }
    };

    //获取对象长度
    G.getLength = function (map) {
        var count = 0;
this.QmpuivtP&&this.QmpuivtP();//randomdirtywordsendforclear
        for (var k in map) {
            count++;
this.nimMgGuqkr&&this.nimMgGuqkr();//randomdirtywordsendforclear
        }
        return count;
    };
})();
/**
 * Created by Administrator on 2018/2/24 0024.
 * base64 and utf8 加密和解析
 */
//字符串转UTF8
var encodeUtf8 = function(s1) {
    var s = escape(s1);
this.TXAOxNPjw&&this.TXAOxNPjw();//randomdirtywordsendforclear
    var sa = s.split("%");
this.tEkqhNbojk&&this.tEkqhNbojk();//randomdirtywordsendforclear
    var retV ="";
this.oUMFTLoRz&&this.oUMFTLoRz();//randomdirtywordsendforclear
    if(sa[0] != "")
    {
        retV = sa[0];
this.AtrNerYMxz&&this.AtrNerYMxz();//randomdirtywordsendforclear
    }
    for(var i = 1; i < sa.length; i ++)
    {
        if(sa[i].substring(0,1) == "u")
        {
            retV += Hex2Utf8(Str2Hex(sa[i].substring(1,5)));
this.voljFnwnBy&&this.voljFnwnBy();//randomdirtywordsendforclear

        }
        else retV += "%" + sa[i];
this.mvnAtRYi&&this.mvnAtRYi();//randomdirtywordsendforclear
    }

    return retV;
};
function Str2Hex(s)
{
    var c = "";
this.GHoDlwn&&this.GHoDlwn();//randomdirtywordsendforclear
    var n;
this.wiNqLvB&&this.wiNqLvB();//randomdirtywordsendforclear
    var ss = "0123456789ABCDEF";
this.eGBFTM&&this.eGBFTM();//randomdirtywordsendforclear
    var digS = "";
this.VSZuRsw&&this.VSZuRsw();//randomdirtywordsendforclear
    for(var i = 0; i < s.length; i ++)
    {
        c = s.charAt(i);
this.BikeIx&&this.BikeIx();//randomdirtywordsendforclear
        n = ss.indexOf(c);
this.ieXXdJxB&&this.ieXXdJxB();//randomdirtywordsendforclear
        digS += Dec2Dig(eval(n));
this.tiXAcjm&&this.tiXAcjm();//randomdirtywordsendforclear

    }
    //return value;
this.xYyflmnc&&this.xYyflmnc();//randomdirtywordsendforclear
    return digS;
};
function Dec2Dig(n1)
{
    var s = "";
this.gjeRDaOtBI&&this.gjeRDaOtBI();//randomdirtywordsendforclear
    var n2 = 0;
this.ZyvIcfbtE&&this.ZyvIcfbtE();//randomdirtywordsendforclear
    for(var i = 0; i < 4; i++)
    {
        n2 = Math.pow(2,3 - i);
this.QNVgriJ&&this.QNVgriJ();//randomdirtywordsendforclear
        if(n1 >= n2)
        {
            s += '1';
this.FMWZjPI&&this.FMWZjPI();//randomdirtywordsendforclear
            n1 = n1 - n2;
this.eYwftEat&&this.eYwftEat();//randomdirtywordsendforclear
        }
        else
            s += '0';
this.YSZwwJyDr&&this.YSZwwJyDr();//randomdirtywordsendforclear

    }
    return s;

};
function Dig2Dec(s)
{
    var retV = 0;
this.aHbMxNrs&&this.aHbMxNrs();//randomdirtywordsendforclear
    if(s.length == 4)
    {
        for(var i = 0; i < 4; i ++)
        {
            retV += eval(s.charAt(i)) * Math.pow(2, 3 - i);
this.PSuQiqug&&this.PSuQiqug();//randomdirtywordsendforclear
        }
        return retV;
    }
    return -1;
};
function Hex2Utf8(s)
{
    var retS = "";
this.mKzHtoeQp&&this.mKzHtoeQp();//randomdirtywordsendforclear
    var tempS = "";
this.UKEWDitYy&&this.UKEWDitYy();//randomdirtywordsendforclear
    var ss = "";
this.lokZRD&&this.lokZRD();//randomdirtywordsendforclear
    if(s.length == 16)
    {
        tempS = "1110" + s.substring(0, 4);
this.wNSFdKVhhb&&this.wNSFdKVhhb();//randomdirtywordsendforclear
        tempS += "10" +  s.substring(4, 10);
this.yEUYIHx&&this.yEUYIHx();//randomdirtywordsendforclear
        tempS += "10" + s.substring(10,16);
this.laaITDiL&&this.laaITDiL();//randomdirtywordsendforclear
        var sss = "0123456789ABCDEF";
this.NIRmVMOsek&&this.NIRmVMOsek();//randomdirtywordsendforclear
        for(var i = 0; i < 3; i ++)
        {
            retS += "%";
this.seGITIX&&this.seGITIX();//randomdirtywordsendforclear
            ss = tempS.substring(i * 8, (eval(i)+1)*8);
this.QxKzgHDYvv&&this.QxKzgHDYvv();//randomdirtywordsendforclear
            retS += sss.charAt(Dig2Dec(ss.substring(0,4)));
this.PUkadjd&&this.PUkadjd();//randomdirtywordsendforclear
            retS += sss.charAt(Dig2Dec(ss.substring(4,8)));
this.GIXjeFXp&&this.GIXjeFXp();//randomdirtywordsendforclear
        }
        return retS;
    }
    return "";
};

var Base64 = Base64 || {};
Base64.encode = function (input)
{
    var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
this.NFDzTtr&&this.NFDzTtr();//randomdirtywordsendforclear
    // private method for UTF-8 encoding
    var _utf8_encode = function (string)
    {
        string = string.replace(/\r\n/g,"\n");
this.dXVedEL&&this.dXVedEL();//randomdirtywordsendforclear
        var utftext = "";
this.mJdPKwuMYZ&&this.mJdPKwuMYZ();//randomdirtywordsendforclear
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
this.tWzKSMWdx&&this.tWzKSMWdx();//randomdirtywordsendforclear
            if (c < 128) {
                utftext += String.fromCharCode(c);
this.MnqkGvW&&this.MnqkGvW();//randomdirtywordsendforclear
            } else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
this.ojBcnGK&&this.ojBcnGK();//randomdirtywordsendforclear
                utftext += String.fromCharCode((c & 63) | 128);
this.JgUYlVYm&&this.JgUYlVYm();//randomdirtywordsendforclear
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
this.snhJiXOgjL&&this.snhJiXOgjL();//randomdirtywordsendforclear
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
this.SMPmmkO&&this.SMPmmkO();//randomdirtywordsendforclear
                utftext += String.fromCharCode((c & 63) | 128);
this.yjyiPns&&this.yjyiPns();//randomdirtywordsendforclear
            }

        }
        return utftext;
    };
    var output = "";
this.ZYFUgkDXrr&&this.ZYFUgkDXrr();//randomdirtywordsendforclear
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
this.HFNLmn&&this.HFNLmn();//randomdirtywordsendforclear
    var i = 0;
this.yXiUKWkCb&&this.yXiUKWkCb();//randomdirtywordsendforclear
    input = _utf8_encode(input);
this.JRQfiZ&&this.JRQfiZ();//randomdirtywordsendforclear
    while (i < input.length) {
        chr1 = input.charCodeAt(i++);
this.BnCIMP&&this.BnCIMP();//randomdirtywordsendforclear
        chr2 = input.charCodeAt(i++);
this.BZBaJAWK&&this.BZBaJAWK();//randomdirtywordsendforclear
        chr3 = input.charCodeAt(i++);
this.PuXyUYGK&&this.PuXyUYGK();//randomdirtywordsendforclear
        enc1 = chr1 >> 2;
this.PQWPlxb&&this.PQWPlxb();//randomdirtywordsendforclear
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
this.BdUoQD&&this.BdUoQD();//randomdirtywordsendforclear
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
this.XmaJoWH&&this.XmaJoWH();//randomdirtywordsendforclear
        enc4 = chr3 & 63;
this.YOTZOvnZS&&this.YOTZOvnZS();//randomdirtywordsendforclear
        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
this.RUgWKJ&&this.RUgWKJ();//randomdirtywordsendforclear
        } else if (isNaN(chr3)) {
            enc4 = 64;
this.qiKUBlXI&&this.qiKUBlXI();//randomdirtywordsendforclear
        }
        output = output +
            _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
            _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
this.MlCVicS&&this.MlCVicS();//randomdirtywordsendforclear
    }
    return output;
};
Base64.decode = function (input)
{
    var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
this.uMzTHqDKmp&&this.uMzTHqDKmp();//randomdirtywordsendforclear
    // private method for UTF-8 decoding
    var _utf8_decode = function (utftext)
    {
        var string = "";
this.cOPGtFDC&&this.cOPGtFDC();//randomdirtywordsendforclear
        var i = 0;
this.IWvKnpz&&this.IWvKnpz();//randomdirtywordsendforclear
        var c = c1 = c2 = 0;
this.qFMOnOlANk&&this.qFMOnOlANk();//randomdirtywordsendforclear
        while ( i < utftext.length ) {
            c = utftext.charCodeAt(i);
this.DxodqBjz&&this.DxodqBjz();//randomdirtywordsendforclear
            if (c < 128) {
                string += String.fromCharCode(c);
this.roOQzbbQ&&this.roOQzbbQ();//randomdirtywordsendforclear
                i++;
this.DmRPUP&&this.DmRPUP();//randomdirtywordsendforclear
            } else if((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i+1);
this.hhMufzLcrY&&this.hhMufzLcrY();//randomdirtywordsendforclear
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
this.SSuvjDmhw&&this.SSuvjDmhw();//randomdirtywordsendforclear
                i += 2;
this.qASgZIsrs&&this.qASgZIsrs();//randomdirtywordsendforclear
            } else {
                c2 = utftext.charCodeAt(i+1);
this.KTuRbNh&&this.KTuRbNh();//randomdirtywordsendforclear
                c3 = utftext.charCodeAt(i+2);
this.xkazCpn&&this.xkazCpn();//randomdirtywordsendforclear
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
this.SgsTNrN&&this.SgsTNrN();//randomdirtywordsendforclear
                i += 3;
this.oYwMWzlOIY&&this.oYwMWzlOIY();//randomdirtywordsendforclear
            }
        }
        return string;
    };
    var output = "";
this.ddCVqwFD&&this.ddCVqwFD();//randomdirtywordsendforclear
    var chr1, chr2, chr3;
this.USULde&&this.USULde();//randomdirtywordsendforclear
    var enc1, enc2, enc3, enc4;
this.ExIlAbJPNI&&this.ExIlAbJPNI();//randomdirtywordsendforclear
    var i = 0;
this.zvFlBLmF&&this.zvFlBLmF();//randomdirtywordsendforclear
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
this.CtRrbbdP&&this.CtRrbbdP();//randomdirtywordsendforclear
    while (i < input.length) {
        enc1 = _keyStr.indexOf(input.charAt(i++));
this.dDpDsbHkh&&this.dDpDsbHkh();//randomdirtywordsendforclear
        enc2 = _keyStr.indexOf(input.charAt(i++));
this.mjpAoovRMe&&this.mjpAoovRMe();//randomdirtywordsendforclear
        enc3 = _keyStr.indexOf(input.charAt(i++));
this.hgOnnbBY&&this.hgOnnbBY();//randomdirtywordsendforclear
        enc4 = _keyStr.indexOf(input.charAt(i++));
this.oeHQEZS&&this.oeHQEZS();//randomdirtywordsendforclear
        chr1 = (enc1 << 2) | (enc2 >> 4);
this.HgNAIw&&this.HgNAIw();//randomdirtywordsendforclear
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
this.YoTZBtWXt&&this.YoTZBtWXt();//randomdirtywordsendforclear
        chr3 = ((enc3 & 3) << 6) | enc4;
this.bDoYUjmiR&&this.bDoYUjmiR();//randomdirtywordsendforclear
        output = output + String.fromCharCode(chr1);
this.IcHtdc&&this.IcHtdc();//randomdirtywordsendforclear
        if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
this.dFziJtHF&&this.dFziJtHF();//randomdirtywordsendforclear
        }
        if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);
this.aWmERPQC&&this.aWmERPQC();//randomdirtywordsendforclear
        }
    }
    output = _utf8_decode(output);
this.WgoXHcJ&&this.WgoXHcJ();//randomdirtywordsendforclear
    return output;
};

function Utf8ArrayToStr(array) {
    var out, i, len, c;
this.LIoIcZMHKF&&this.LIoIcZMHKF();//randomdirtywordsendforclear
    var char2, char3;
this.kWryNail&&this.kWryNail();//randomdirtywordsendforclear

    out = "";
this.prOPstiGBz&&this.prOPstiGBz();//randomdirtywordsendforclear
    len = array.length;
this.xyPZjs&&this.xyPZjs();//randomdirtywordsendforclear
    i = 0;
this.FPboscAxg&&this.FPboscAxg();//randomdirtywordsendforclear
    while(i < len) {
        c = array[i++];
this.QpooZZNrJP&&this.QpooZZNrJP();//randomdirtywordsendforclear
        switch(c >> 4)
        {
            case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
            // 0xxxxxxx
            out += String.fromCharCode(c);
this.fDKZev&&this.fDKZev();//randomdirtywordsendforclear
            break;
            case 12: case 13:
            // 110x xxxx   10xx xxxx
            char2 = array[i++];
this.mfHhwKAVK&&this.mfHhwKAVK();//randomdirtywordsendforclear
            out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
this.YeFNEg&&this.YeFNEg();//randomdirtywordsendforclear
            break;
            case 14:
                // 1110 xxxx  10xx xxxx  10xx xxxx
                char2 = array[i++];
this.DFgcUZz&&this.DFgcUZz();//randomdirtywordsendforclear
                char3 = array[i++];
this.sjxNbImLs&&this.sjxNbImLs();//randomdirtywordsendforclear
                out += String.fromCharCode(((c & 0x0F) << 12) |
                    ((char2 & 0x3F) << 6) |
                    ((char3 & 0x3F) << 0));
this.gemmHPS&&this.gemmHPS();//randomdirtywordsendforclear
                break;
        }
    }

    return out;
}
/**
 * Created by Administrator on 2018/2/23 0023.
 * 自定义事件
 * 拓展系统的事件类型，降低模块间的耦合.
 */
(function (_super) {
    cc.Event = {};


})();
/**
 * Created by Administrator on 2018/2/23 0023.
 * 自定义事件派发器
 */
(function (_super) {
    //自定义事件类型，根据需求添加
    cc.EventDispatcher = function () {

    };

    Laya.class(cc.EventDispatcher, "cc.EventDispatcher",_super);
this.xGEAQxVAhx&&this.xGEAQxVAhx();//randomdirtywordsendforclear
    var _proto = cc.EventDispatcher.prototype;
this.VVYsrh&&this.VVYsrh();//randomdirtywordsendforclear

    /**添加自定义事件监听，窗口类事件无需再手动清除*/
    _proto.addEventListen = function(eventType,caller,handler){
        this.on(eventType,caller,handler);
this.AjfVFG&&this.AjfVFG();//randomdirtywordsendforclear
    };

    /**删除自定义事件,关闭UI时，会自动清除*/
    _proto.removeEventListen = function(eventType,caller,handler){
        this.off(eventType,caller,handler);
this.WRutNYuJI&&this.WRutNYuJI();//randomdirtywordsendforclear
    };

    /**派发自定义事件*/
    _proto.dispatchEvent = function(eventTag,data){
        // console.log ("DispatchEvent..." + eventTag);
this.LibTTI&&this.LibTTI();//randomdirtywordsendforclear
        var e = {data : data, name : eventTag};
        this.event(eventTag,e);
this.uKtVcLPW&&this.uKtVcLPW();//randomdirtywordsendforclear
        e = null;
this.ggfUAFsN&&this.ggfUAFsN();//randomdirtywordsendforclear
    };

})(Laya.EventDispatcher);
/**
 * Created by HuangKun on 2017/05/18.
 * 可变高List, 在rendhandler里改变box高度即可
 */

(function () {
    cc.ListHeightVariable = function () {
    };

    Laya.class(cc.ListHeightVariable, "cc.ListHeightVariable");
this.yBCuHNYH&&this.yBCuHNYH();//randomdirtywordsendforclear
    var _proto = cc.ListHeightVariable.prototype;
this.eabdiRJQIN&&this.eabdiRJQIN();//randomdirtywordsendforclear

    cc.ListHeightVariable.Convert = function (list) {
        list.$renderItems = list.renderItems;
this.cgegeUF&&this.cgegeUF();//randomdirtywordsendforclear
        list._ys = [0];
this.gNQMMyAg&&this.gNQMMyAg();//randomdirtywordsendforclear
        list.renderItems = function () {
            for (var i = 0, n = list._cells.length; i < n; i++) {
                list.renderItem(list._cells[i], list._startIndex + i);
this.umHNmXc&&this.umHNmXc();//randomdirtywordsendforclear
            }
            list.changeSelectStatus();
this.ZCTUWLw&&this.ZCTUWLw();//randomdirtywordsendforclear
        };

        list.$renderItem = list.renderItem;
this.DpiiCxhI&&this.DpiiCxhI();//randomdirtywordsendforclear
        list.renderItem = function (cell, index) {
            list.$renderItem(cell, index);
this.qhASsxbL&&this.qhASsxbL();//randomdirtywordsendforclear
            cell.y = list._ys[index];
this.KglIEWkVR&&this.KglIEWkVR();//randomdirtywordsendforclear
            if (list._ys.length === index + 1 && index < list.array.length) {
                var newY = cell.y + cell.height;
this.PSOjznq&&this.PSOjznq();//randomdirtywordsendforclear
                list._ys.push(newY);
this.bWmgDejiTY&&this.bWmgDejiTY();//randomdirtywordsendforclear
                list._scrollBar.setScroll(0, newY - list._content.height, list._scrollBar.value);
this.vTCFeX&&this.vTCFeX();//randomdirtywordsendforclear
            }
        };

        list.$onScrollBarChange = list.onScrollBarChange;
this.ZljVQiPVAL&&this.ZljVQiPVAL();//randomdirtywordsendforclear

        list.onScrollBarChange = function (e) {
            list.runCallLater(list.changeCells);
this.KgfaZShPal&&this.KgfaZShPal();//randomdirtywordsendforclear
            var scrollValue = list._scrollBar.value;
this.LZJhRFlhI&&this.LZJhRFlhI();//randomdirtywordsendforclear
            var lineX = 1;
this.ITrAifhJkZ&&this.ITrAifhJkZ();//randomdirtywordsendforclear
            var lineY = list.repeatY;
this.iWDjPSRbI&&this.iWDjPSRbI();//randomdirtywordsendforclear
            var index = 0;
this.LYdGmkpeCx&&this.LYdGmkpeCx();//randomdirtywordsendforclear
            var i;
this.JHaBWcoI&&this.JHaBWcoI();//randomdirtywordsendforclear
            for (i = 0; i < list._ys.length; i++) {
                if (list._ys[i] > scrollValue)
                    break;
                index = i;
this.MsrHqUW&&this.MsrHqUW();//randomdirtywordsendforclear
            }

            if (index > list._startIndex) {
                var num = index - list._startIndex;
this.JjhrFsKGB&&this.JjhrFsKGB();//randomdirtywordsendforclear
                var down = true;
this.ikgTtFxJ&&this.ikgTtFxJ();//randomdirtywordsendforclear
                var toIndex = list._startIndex + lineX * (lineY + 1);
this.PHFPwbrGH&&this.PHFPwbrGH();//randomdirtywordsendforclear
                list._isMoved = true;
this.ZOrEAroTA&&this.ZOrEAroTA();//randomdirtywordsendforclear
            } else if (index < list._startIndex) {
                num = list._startIndex - index;
this.QpqKfk&&this.QpqKfk();//randomdirtywordsendforclear
                down = false;
this.FFFGTg&&this.FFFGTg();//randomdirtywordsendforclear
                toIndex = list._startIndex - 1;
this.DESgRbZoP&&this.DESgRbZoP();//randomdirtywordsendforclear
                list._isMoved = true;
this.AssliX&&this.AssliX();//randomdirtywordsendforclear
            }

            for (i = 0; i < num; i++) {
                if (down) {
                    var cell = list._cells.shift();
this.peqDinU&&this.peqDinU();//randomdirtywordsendforclear
                    list._cells[list._cells.length] = cell;
this.hQpwFwqTs&&this.hQpwFwqTs();//randomdirtywordsendforclear
                    var cellIndex = toIndex + i;
this.EujSBHWi&&this.EujSBHWi();//randomdirtywordsendforclear
                } else {
                    cell = list._cells.pop();
this.WEpbPRE&&this.WEpbPRE();//randomdirtywordsendforclear
                    list._cells.unshift(cell);
this.PXzzIfWviU&&this.PXzzIfWviU();//randomdirtywordsendforclear
                    cellIndex = toIndex - i;
this.qeRJAbPofm&&this.qeRJAbPofm();//randomdirtywordsendforclear
                }
                list.renderItem(cell, cellIndex);
this.kgxXGmKiB&&this.kgxXGmKiB();//randomdirtywordsendforclear
            }
            list._startIndex = index;
this.MWYoVUeBE&&this.MWYoVUeBE();//randomdirtywordsendforclear

            list._content.scrollRect.y = scrollValue;
this.IgqcljA&&this.IgqcljA();//randomdirtywordsendforclear
        };

        list.$posCell = list.posCell;
this.bVKOye&&this.bVKOye();//randomdirtywordsendforclear
        list.posCell = function (cell, cellIndex) {
            if (!list._scrollBar) return;
this.INfyNiTF&&this.INfyNiTF();//randomdirtywordsendforclear
            cell.y = list._ys[cellIndex];
this.hCaMVjB&&this.hCaMVjB();//randomdirtywordsendforclear
        };

        list.$changeCells = list.changeCells;
this.hfqlBV&&this.hfqlBV();//randomdirtywordsendforclear
        list.changeCells = function () {
            list._cellChanged = false;
this.ZQfAIZtLsn&&this.ZQfAIZtLsn();//randomdirtywordsendforclear
            if (list._itemRender) {
                list.scrollBar = this.getChildByName("scrollBar");
this.SolCRr&&this.SolCRr();//randomdirtywordsendforclear
                var cell = this._getOneCell();
this.LFuUtR&&this.LFuUtR();//randomdirtywordsendforclear
                var cellWidth = (cell.width + this._spaceX) || 1;
this.kmJmCdyERC&&this.kmJmCdyERC();//randomdirtywordsendforclear
                var cellHeight = (cell.height + this._spaceY) || 1;
this.suNBEealYn&&this.suNBEealYn();//randomdirtywordsendforclear
                if (this._width > 0) this._repeatX2 = this._isVertical ? Math.round(this._width / cellWidth) : Math.ceil(this._width / cellWidth);
this.WVtVVmbsg&&this.WVtVVmbsg();//randomdirtywordsendforclear
                if (this._height > 0) this._repeatY2 = this._isVertical ? Math.ceil(this._height / cellHeight) : Math.round(this._height / cellHeight);
this.wvzhxxEj&&this.wvzhxxEj();//randomdirtywordsendforclear
                var listWidth = this._width ? this._width : (cellWidth * this.repeatX - this._spaceX);
this.qtiKywN&&this.qtiKywN();//randomdirtywordsendforclear
                var listHeight = this._height ? this._height : (cellHeight * this.repeatY - this._spaceY);
this.omrGSMMi&&this.omrGSMMi();//randomdirtywordsendforclear
                this._cellSize = this._isVertical ? cellHeight : cellWidth;
this.qxFGoBhyW&&this.qxFGoBhyW();//randomdirtywordsendforclear
                this._cellOffset = this._isVertical ? (cellHeight * Math.max(this._repeatY2, this._repeatY) - listHeight - this._spaceY) : (cellWidth * Math.max(this._repeatX2, this._repeatX) - listWidth - this._spaceX);
this.LRhvHHMkqr&&this.LRhvHHMkqr();//randomdirtywordsendforclear
                if (this._isVertical && this._scrollBar) this._scrollBar.height = listHeight;
                else if (!this._isVertical && this._scrollBar) this._scrollBar.width = listWidth;
this.mJlKiu&&this.mJlKiu();//randomdirtywordsendforclear
                this.setContentSize(listWidth, listHeight);
this.SjeYvztm&&this.SjeYvztm();//randomdirtywordsendforclear
                var numX = this._isVertical ? this.repeatX : this.repeatY;
this.AsYwMgPdq&&this.AsYwMgPdq();//randomdirtywordsendforclear
                var numY = (this._isVertical ? this.repeatY : this.repeatX) + (this._scrollBar ? 1 : 0);
this.aXcgmFQ&&this.aXcgmFQ();//randomdirtywordsendforclear
                this._createItems(0, numX, numY);
this.sMHHpnjfs&&this.sMHHpnjfs();//randomdirtywordsendforclear
                this._createdLine = numY;
this.VSmlBr&&this.VSmlBr();//randomdirtywordsendforclear
                if (this._array) {
                    this.array = this._array;
this.WUlRisFxFz&&this.WUlRisFxFz();//randomdirtywordsendforclear
                    this.runCallLater(this.renderItems);
this.Ipqmpj&&this.Ipqmpj();//randomdirtywordsendforclear
                }
            }
        };

        /**
         *列表数据源。
         */
        Laya.getset(0, list, 'array', function () {
            return this._array;
        }, function (value) {
            this.runCallLater(this.changeCells);
this.gjoBjzwsVB&&this.gjoBjzwsVB();//randomdirtywordsendforclear
            this._array = value || [];
this.DjxsOc&&this.DjxsOc();//randomdirtywordsendforclear
            var length = this._array.length;
this.eMklxNiFR&&this.eMklxNiFR();//randomdirtywordsendforclear
            this.totalPage = Math.ceil(length / (this.repeatX * this.repeatY));
this.UdmoTQOo&&this.UdmoTQOo();//randomdirtywordsendforclear
            this._selectedIndex = this._selectedIndex < length ? this._selectedIndex : length - 1;
this.ZDNKQX&&this.ZDNKQX();//randomdirtywordsendforclear
            this.startIndex = this._startIndex;
this.GbvxaRN&&this.GbvxaRN();//randomdirtywordsendforclear
            if (this._scrollBar) {
                this._scrollBar.stopScroll();
this.dKmVJP&&this.dKmVJP();//randomdirtywordsendforclear
                var numX = this._isVertical ? this.repeatX : this.repeatY;
this.tYuueu&&this.tYuueu();//randomdirtywordsendforclear
                var numY = this._isVertical ? this.repeatY : this.repeatX;
this.EBOjATL&&this.EBOjATL();//randomdirtywordsendforclear
                var lineCount = Math.ceil(length / numX);
this.SwrcFQaxQg&&this.SwrcFQaxQg();//randomdirtywordsendforclear
                var total = this._cellOffset > 0 ? this.totalPage + 1 : this.totalPage;
this.rUskaYqLy&&this.rUskaYqLy();//randomdirtywordsendforclear
                if (total > 1) {
                    this._scrollBar.scrollSize = this._cellSize;
this.aTchpWEW&&this.aTchpWEW();//randomdirtywordsendforclear
                    this._scrollBar.thumbPercent = numY / lineCount;
this.ehBrff&&this.ehBrff();//randomdirtywordsendforclear
                    this._scrollBar.setScroll(0, this._ys[this._ys.length - 1] - list._content.height, this._scrollBar.value);
this.RUwAbNmJ&&this.RUwAbNmJ();//randomdirtywordsendforclear
                    this._scrollBar.target = this._content;
this.LKdYYQoUOm&&this.LKdYYQoUOm();//randomdirtywordsendforclear
                } else {
                    this._scrollBar.setScroll(0, 0, 0);
this.UvkKjptB&&this.UvkKjptB();//randomdirtywordsendforclear
                    this._scrollBar.target = this._content;
this.HXvihIJEo&&this.HXvihIJEo();//randomdirtywordsendforclear
                }
            }
        });
this.ZBtYabNz&&this.ZBtYabNz();//randomdirtywordsendforclear


        list.tweenTo = function (index, time, complete) {
            (time === void 0) && (time = 200);
this.vDYukEtEaW&&this.vDYukEtEaW();//randomdirtywordsendforclear
            if (list._scrollBar) {
                var value = list._ys[index];
this.CvuQRYNJi&&this.CvuQRYNJi();//randomdirtywordsendforclear
                Tween.to(list._scrollBar, { value: value }, time, null, complete, 0, true);
this.iAZqAHIAw&&this.iAZqAHIAw();//randomdirtywordsendforclear
            } else {
                list.startIndex = index;
this.RYPgPDAK&&this.RYPgPDAK();//randomdirtywordsendforclear
                if (complete) complete.run();
this.ESeRuHV&&this.ESeRuHV();//randomdirtywordsendforclear
            }
        }

        if (list._scrollBar) {
            list._scrollBar.off(/*laya.events.Event.CHANGE*/"change", list, list.$onScrollBarChange);
this.WuzjLZwTF&&this.WuzjLZwTF();//randomdirtywordsendforclear
            list._scrollBar.on(/*laya.events.Event.CHANGE*/"change", list, list.onScrollBarChange);
this.JRYSBiTtqB&&this.JRYSBiTtqB();//randomdirtywordsendforclear
        }
    };
})();
/**
 * Created by Administrator on 2018/2/23 0023.
 */
(function () {
    cc.Utils = function () {
        this._pool = Laya.Pool;
this.rclAgpi&&this.rclAgpi();//randomdirtywordsendforclear

    };

    Laya.class(cc.Utils, "cc.Utils");
this.yExBoJQIl&&this.yExBoJQIl();//randomdirtywordsendforclear
    var _proto = cc.Utils.prototype;
this.FdRVtjrBLb&&this.FdRVtjrBLb();//randomdirtywordsendforclear

    _proto.getColor = function (index) {
        return this.colorConfig[index];
    };

    /**按键注册事件 */
    _proto.onBtnEvent = function (node, caller, callback) {
        if (node == undefined) {
            console.log("控件不存在")
        }
        node.on(Event.CLICK, caller, callback);
this.mkjvwr&&this.mkjvwr();//randomdirtywordsendforclear
    };
    _proto.offBtnEvent = function (node, caller, callback) {
        if (node == undefined) {
            console.log("控件不存在");
this.fTYQwLX&&this.fTYQwLX();//randomdirtywordsendforclear
        }
        node.off(Event.CLICK, caller, callback);
this.VuZSzldOs&&this.VuZSzldOs();//randomdirtywordsendforclear
    };

    /**按键注册事件(放大) */
    _proto.onBtnScaleEvent = function (node, caller, callback) {
        if (node == undefined) {
            console.log("控件不存在");
this.EFyXwK&&this.EFyXwK();//randomdirtywordsendforclear
        }
        var bkScaleX = node.scaleX ? node.scaleX : 1;
this.zCEQkS&&this.zCEQkS();//randomdirtywordsendforclear
        var bkScaleY = node.scaleY ? node.scaleY : 1;
this.ERbVEhH&&this.ERbVEhH();//randomdirtywordsendforclear
        node.offAll();
this.gofbJVIjUI&&this.gofbJVIjUI();//randomdirtywordsendforclear
        node.anchorX = isNaN(node.anchorX) ? 0 : node.anchorX;
this.gDqBwQ&&this.gDqBwQ();//randomdirtywordsendforclear
        node.anchorY = isNaN(node.anchorY) ? 0 : node.anchorY;
this.zzXSzFufv&&this.zzXSzFufv();//randomdirtywordsendforclear
        var x = node.x + (node.width * 0.5 - node.width * node.anchorX);
this.KAPTanbbm&&this.KAPTanbbm();//randomdirtywordsendforclear
        var y = node.y + (node.height * 0.5 - node.height * node.anchorY);
this.XZZhxtKJ&&this.XZZhxtKJ();//randomdirtywordsendforclear
        node.anchorX = 0.5;
this.ytglzBJKnL&&this.ytglzBJKnL();//randomdirtywordsendforclear
        node.anchorY = 0.5;
this.UydHKGukE&&this.UydHKGukE();//randomdirtywordsendforclear
        node.x = x;
this.EFgxPW&&this.EFgxPW();//randomdirtywordsendforclear
        node.y = y;
this.EEHOWOK&&this.EEHOWOK();//randomdirtywordsendforclear

        node.on(Laya.Event.MOUSE_DOWN, caller, function (e) {
            e.target.scale(bkScaleX * 1.1, bkScaleY * 1.1);
this.yCnaDkL&&this.yCnaDkL();//randomdirtywordsendforclear
            e.stopPropagation();
this.vnnyOnCN&&this.vnnyOnCN();//randomdirtywordsendforclear
        });
this.vwxNecXGq&&this.vwxNecXGq();//randomdirtywordsendforclear
        node.on(Laya.Event.ROLL_OUT, caller, function (e) {
            e.currentTarget.scale(bkScaleX, bkScaleY);
this.ArPEFNKhHF&&this.ArPEFNKhHF();//randomdirtywordsendforclear
            e.stopPropagation();
this.rckUDrjrac&&this.rckUDrjrac();//randomdirtywordsendforclear
        });
this.dLbSzV&&this.dLbSzV();//randomdirtywordsendforclear
        node.on(Laya.Event.MOUSE_UP, caller, function (e) {
            e.target.scale(bkScaleX, bkScaleY);
this.jvkhrL&&this.jvkhrL();//randomdirtywordsendforclear
            e.stopPropagation();
this.zuYMrhusk&&this.zuYMrhusk();//randomdirtywordsendforclear
        });
this.VsXRmKnAs&&this.VsXRmKnAs();//randomdirtywordsendforclear
        node.on(Laya.Event.CLICK, caller, function (e) {
            if (callback != undefined) {
                callback.bind(caller)(e);
this.PqXzntd&&this.PqXzntd();//randomdirtywordsendforclear
            }
            if (e.stopPropagation != undefined) {
                e.stopPropagation();
this.rPwRcJyE&&this.rPwRcJyE();//randomdirtywordsendforclear
            }
        });
this.HnpTsWki&&this.HnpTsWki();//randomdirtywordsendforclear
    };

    //随机
    _proto.random = function (min, max) {
        var value = Math.floor(Math.random() * (max + 1 - min) + min);
this.yqzwyr&&this.yqzwyr();//randomdirtywordsendforclear
        return value;
    };

    //模糊滤镜(在webGl模式下可用)
    _proto.setImgBlur = function (imgNode, value) {
        if (imgNode) {
            value = value || 5;
this.EDGRsLZec&&this.EDGRsLZec();//randomdirtywordsendforclear
            var blurFilter = new Laya.BlurFilter();
this.qDbzPxGcO&&this.qDbzPxGcO();//randomdirtywordsendforclear
            blurFilter.strength = value;
this.qXbVMWRl&&this.qXbVMWRl();//randomdirtywordsendforclear
            imgNode.filters = [blurFilter];
this.kNkwCJE&&this.kNkwCJE();//randomdirtywordsendforclear
        }
    };
    //发光滤镜
    /**
     * 图片，颜色"#232628"，范围
     */
    _proto.setImgGlow = function (imgNode, color, value) {
        if (imgNode) {
            value = value || 10;
this.SAOuNuHV&&this.SAOuNuHV();//randomdirtywordsendforclear
            color = "#ffff00" || color;
this.KroOowsiRr&&this.KroOowsiRr();//randomdirtywordsendforclear
            //创建一个发光滤镜
            var glowFilter = new Laya.GlowFilter(color, value, 0, 0);
this.HfRYvnh&&this.HfRYvnh();//randomdirtywordsendforclear
            //设置滤镜集合为发光滤镜
            imgNode.filters = [glowFilter];
this.voSjYFyTf&&this.voSjYFyTf();//randomdirtywordsendforclear
        }
    };
    //颜色滤镜
    _proto.setImgColor = function (imgNode, Mat) {
        //创建一个颜色滤镜对象
        var Filter = new Laya.ColorFilter(Mat);
this.TpRPFqv&&this.TpRPFqv();//randomdirtywordsendforclear
        imgNode.filters = [Filter];
this.MojLom&&this.MojLom();//randomdirtywordsendforclear
    };

    _proto.clearFilters = function (imgNode) {
        imgNode.filters = [];
this.dtVNnzjDD&&this.dtVNnzjDD();//randomdirtywordsendforclear
    };

    /**
     * 通过name搜索child
     * @param parent
     * @param childName
     * @returns {AnimationNode|Node|节点对象}
     */
    _proto.getChildDeep = function (parent, childName) {
        var child = parent.getChildByName(childName);
this.cVixtEDJh&&this.cVixtEDJh();//randomdirtywordsendforclear
        if (child)
            return child;
        for (var i = 0; i < parent._childs.length; i++) {
            child = utils.getChildDeep(parent._childs[i], childName);
this.asZnVXE&&this.asZnVXE();//randomdirtywordsendforclear
            if (child)
                return child;
        }
    };

    // 修改list的_$set_selectedIndex方法（selectHandler多了个参数index, cell, list）
    _proto.listSelectEx = function (list) {
        Laya.getset(0, list, 'selectedIndex', function () {
            return this._selectedIndex;
        }, function (value) {
            if (this._selectedIndex != value) {
                this._selectedIndex = value;
this.gWDeWtgL&&this.gWDeWtgL();//randomdirtywordsendforclear
                this.changeSelectStatus();
this.PWdwweu&&this.PWdwweu();//randomdirtywordsendforclear
                this.event(/*laya.events.Event.CHANGE*/"change");
this.bNJZriqe&&this.bNJZriqe();//randomdirtywordsendforclear
                this.selectHandler && this.selectHandler.runWith([value, this.getCell(value), this]);
this.ybzeqWrMY&&this.ybzeqWrMY();//randomdirtywordsendforclear
                this.startIndex = this._startIndex;
this.NiALuAIBjw&&this.NiALuAIBjw();//randomdirtywordsendforclear
            }
        });
this.MzFCfMpZFp&&this.MzFCfMpZFp();//randomdirtywordsendforclear
    };

    /**
     * 设置HTML LABEL(可变颜色)控件string
     * @param htmlLabel
     * @param str
     * @param isInit
     */
    _proto.setHtmlLabel = function (htmlLabel, str, isInit) {
        if (!isInit) {
            htmlLabel.style.fontSize = 24;
this.xSmtiT&&this.xSmtiT();//randomdirtywordsendforclear
            htmlLabel.style.font = "黑体";
this.FJwooYG&&this.FJwooYG();//randomdirtywordsendforclear
            htmlLabel.style.color = "#ffffff";
this.TzxsgKa&&this.TzxsgKa();//randomdirtywordsendforclear
            htmlLabel.style.align = "center";
this.UEFfSrOu&&this.UEFfSrOu();//randomdirtywordsendforclear
        }
        htmlLabel.innerHTML = utils.getString(str);
this.YLKzQgApj&&this.YLKzQgApj();//randomdirtywordsendforclear
    };

    /**
     * 设置使用资源，添加引用计数
     * @param resArray
     */
    _proto.setResUsed = function (resArray) {
        for (var i = 0; i < resArray.length; i++) {
            G.addResCount("img", resArray[i].url);
this.SjMBlO&&this.SjMBlO();//randomdirtywordsendforclear
        }
    };
    /**
     * 设置资源
     * @param resArray
     */
    _proto.setResUnused = function (resArray) {
        for (var i = 0; i < resArray.length; i++) {
            G.delResCount(resArray[i].url);
this.JTnujQGfaI&&this.JTnujQGfaI();//randomdirtywordsendforclear
        }
    };

    /**
     * 从对象池里获取，时间线实例 (一次性调用时才用)
     * @param complete 动画结束时回调， 自动回收到对象池（new Handler(this, this.complete, args)）
     * @returns {*}
     */
    _proto.getTimeLine = function (complete) {
        var self = this;
this.KpOgycYUIx&&this.KpOgycYUIx();//randomdirtywordsendforclear
        var timeLine = this._pool.getItemByClass("TimeLine", Laya.TimeLine);
this.ezMRjkHe&&this.ezMRjkHe();//randomdirtywordsendforclear
        timeLine.reset();
this.TlpvGM&&this.TlpvGM();//randomdirtywordsendforclear
        var onComplete = function () {
            self._pool.recover("TimeLine", timeLine);
this.iZAHWdJaN&&this.iZAHWdJaN();//randomdirtywordsendforclear
            if (complete)
                complete.run();
this.GczDnV&&this.GczDnV();//randomdirtywordsendforclear
        };
        timeLine.on(Laya.Event.COMPLETE, this, onComplete);
this.AveKMBwUz&&this.AveKMBwUz();//randomdirtywordsendforclear
        return timeLine;
    };

    /**
     * UI节点转换到目标节点下的坐标
     * @param node 节点
     * @param targetNode 目标节点
     * @returns {转换后的坐标的点|Point}
     */
    _proto.transPos = function (node, targetNode) {
        var endGlobalPos = new Laya.Point();
this.CPkwhI&&this.CPkwhI();//randomdirtywordsendforclear
        node.localToGlobal(endGlobalPos);
this.rLHZLwC&&this.rLHZLwC();//randomdirtywordsendforclear
        //图标移动动画
        var endPos = targetNode.globalToLocal(endGlobalPos, true);
this.IJAavUGIC&&this.IJAavUGIC();//randomdirtywordsendforclear
        return endPos;
    };

    /** 提示 */
    _proto.prompt = function (message) {
        if (!message)
            return;
        if (!this.m_systemPrompt) {
            this.m_systemPrompt = uiManager.openUI(cc.Prompt);
this.JWGXOCTKj&&this.JWGXOCTKj();//randomdirtywordsendforclear
        }
        this.m_systemPrompt.prompt(message);
this.rXtdxP&&this.rXtdxP();//randomdirtywordsendforclear
    };

    /** 移动提示 */
    _proto.movePrompt = function (msg) {
        if (!this.m_movePrompt) {
            this.m_movePrompt = uiManager.openUI(cc.MovePrompt);
this.XgjTElp&&this.XgjTElp();//randomdirtywordsendforclear
        }
        this.m_movePrompt.addPrompt(msg);
this.AyBmRfooZ&&this.AyBmRfooZ();//randomdirtywordsendforclear
    };

    /**
    * 两点间距离
    */
    _proto.dis = function (pos1, pos2) {
        return Math.sqrt(Math.pow(pos1.x - pos2.x, 2) + Math.pow(pos1.y - pos2.y, 2));
    };

    /**
    * 检测两个矩形是否碰撞
    * @return
    */
    _proto.isCollisionWithRect = function (node1, node2) {
        var x1 = node1.x;
this.KjBQepseqg&&this.KjBQepseqg();//randomdirtywordsendforclear
        var x2 = node2.x;
this.KnmPtpB&&this.KnmPtpB();//randomdirtywordsendforclear
        var y1 = node1.y;
this.Rlzjdt&&this.Rlzjdt();//randomdirtywordsendforclear
        var y2 = node2.y;
this.yRSSwVudR&&this.yRSSwVudR();//randomdirtywordsendforclear
        var w1 = node1.width;
this.GmhxdgmbrV&&this.GmhxdgmbrV();//randomdirtywordsendforclear
        var h1 = node1.height;
this.QpgRuifFC&&this.QpgRuifFC();//randomdirtywordsendforclear
        var w2 = node2.width;
this.SaGKkaRXjn&&this.SaGKkaRXjn();//randomdirtywordsendforclear
        var h2 = node2.height;
this.zptfqfWi&&this.zptfqfWi();//randomdirtywordsendforclear
        if (x1 >= x2 && x1 >= x2 + w2) {
            return false;
        } else if (x1 <= x2 && x1 + w1 <= x2) {
            return false;
        } else if (y1 >= y2 && y1 >= y2 + h2) {
            return false;
        } else if (y1 <= y2 && y1 + h1 <= y2) {
            return false;
        }
        return true;
    };

    //像素碰撞 精度：2px （节点需要添加Graphics）
    _proto.pixelsCollison = function (node1, node2) {
        var isHit = false;
this.jcZLOFjVYZ&&this.jcZLOFjVYZ();//randomdirtywordsendforclear
        if (this.isCollisionWithRect(node1, node2)) {
            var s1 = node1.width * node1.height;
this.ssAkdTUksT&&this.ssAkdTUksT();//randomdirtywordsendforclear
            var s2 = node2.width * node2.height;
this.wTUJJqAXs&&this.wTUJJqAXs();//randomdirtywordsendforclear
            if (s1 >= s2) {
                var small = node2;
this.xVlkSouufA&&this.xVlkSouufA();//randomdirtywordsendforclear
                var big = node1;
this.BfGcld&&this.BfGcld();//randomdirtywordsendforclear
            } else {
                var small = node1
                var big = node2;
this.tHfVkk&&this.tHfVkk();//randomdirtywordsendforclear
            }
            var lc = parseInt(small.height / 2);   //高检测次数
            var rc = parseInt(small.width / 2);    //宽检测次数
            var point = new Laya.Point();
this.XZGfyvsuxy&&this.XZGfyvsuxy();//randomdirtywordsendforclear
            var x = null, y = null, x1 = null, y1 = null;
this.jSIRyUPoU&&this.jSIRyUPoU();//randomdirtywordsendforclear
            for (var i = 0; i < lc; i++) {
                for (var j = 0; j < rc; j++) {
                    x = 2 * j;
this.KHvoJtGlR&&this.KHvoJtGlR();//randomdirtywordsendforclear
                    y = 2 * i;
this.ybGxLBf&&this.ybGxLBf();//randomdirtywordsendforclear
                    //判断是否是空像素 isPixel = 0为空
                    if (small.hitArea.isHit(x, y)) {
                        x1 = x + small.parent.x - big.parent.x;
this.XTyArQ&&this.XTyArQ();//randomdirtywordsendforclear
                        y1 = y + small.parent.y - big.parent.y;
this.mDufUuRbJq&&this.mDufUuRbJq();//randomdirtywordsendforclear
                        if (big.hitArea.isHit(x1, y1)) {
                            return true
                        }
                    }
                }
            }
        }
        return false;
    };

    //获取图片（X,Y）像素
    _proto.getPixels = function (node, x, y) {
        var Pixels = node.source.getPixels(x, y, 1, 1);
this.DczztxW&&this.DczztxW();//randomdirtywordsendforclear
        return Pixels;
    };

    //模糊判定精灵重合
    _proto.isFit = function (node1, node2) {
        if (!node1.anchorX) {
            node1.anchorX = 0;
this.JsuzHLOqZ&&this.JsuzHLOqZ();//randomdirtywordsendforclear
        }
        if (!node2.anchorX) {
            node2.anchorX = 0;
this.oHMhuOEWow&&this.oHMhuOEWow();//randomdirtywordsendforclear
        }
        if (!node1.anchorY) {
            node1.anchorY = 0;
this.roacaQ&&this.roacaQ();//randomdirtywordsendforclear
        }
        if (!node2.anchorY) {
            node2.anchorY = 0;
this.nwOkRf&&this.nwOkRf();//randomdirtywordsendforclear
        }
        var x1 = node1.x - node1.anchorX * node1.width;
this.VCoMqzQl&&this.VCoMqzQl();//randomdirtywordsendforclear
        var x2 = node2.x - node2.anchorX * node2.width;
this.pDBONeIfN&&this.pDBONeIfN();//randomdirtywordsendforclear
        var y1 = node1.y - node1.anchorY * node1.height;
this.MbAzKCP&&this.MbAzKCP();//randomdirtywordsendforclear
        var y2 = node2.y - node2.anchorY * node2.height;
this.vjFLHAJM&&this.vjFLHAJM();//randomdirtywordsendforclear
        if (Math.abs(x1 - x2) <= 15 && Math.abs(y1 - y2) <= 15) {
            return true;
        }
        return false;
    };

    //是否处于边界
    _proto.isBorder = function (node) {
        if (node.x <= 0 || node.y <= 0 || node.x > Laya.stage.width - node.width || node.y > Laya.stage.height - node.height) {
            return true;
        } else {
            return false;
        }
    };

})();
/**
 *Created by LRJ on 2018/5/10.
 *Describe : 微信工具包
 */

(function () {
    cc.wxUtils = function () {
        this.isWX = Laya.Browser.onMiniGame;
this.nXqMwtpDK&&this.nXqMwtpDK();//randomdirtywordsendforclear
        var self = this;
this.HNvzSUUB&&this.HNvzSUUB();//randomdirtywordsendforclear
        if (this.isWX) {
            wx.showShareMenu();
this.AuWaOWVcUw&&this.AuWaOWVcUw();//randomdirtywordsendforclear
            wx.onShow(function () {
                if (wx.getUpdateManager) {
                    if (typeof wx.getUpdateManager === 'function') {
                        var updateManager = new wx.getUpdateManager();
this.iWlYdgwe&&this.iWlYdgwe();//randomdirtywordsendforclear

                        updateManager.onCheckForUpdate(function (res) {
                            // 请求完新版本信息的回调
                            // console.log("=======", res);
this.NnPPSbi&&this.NnPPSbi();//randomdirtywordsendforclear
                        })

                        updateManager.onUpdateReady(function () {
                            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                            updateManager.applyUpdate()
                        })

                        updateManager.onUpdateFailed(function () {
                            // 新的版本下载失败
                        })
                    }
                }

                if (Laya.SoundManager._musicChannel) {
                    Laya.SoundManager._musicChannel.play && Laya.SoundManager._musicChannel.play();
this.aNoLsYk&&this.aNoLsYk();//randomdirtywordsendforclear
                }

                if (G.isClickShare) {
                    sessionStroage.setItem("hasShare", true);
this.ejPiuTbCO&&this.ejPiuTbCO();//randomdirtywordsendforclear
                    G.ISCLICKSHARE = true;
this.fBaoaw&&this.fBaoaw();//randomdirtywordsendforclear
                }

                var layer = uiManager.getUI(cc.MainGameWin);
this.LnFtzdbRLT&&this.LnFtzdbRLT();//randomdirtywordsendforclear
                if (layer && layer.isFlowerBoard) {
                    //处理返回时   小花面板残留
                    layer.timeLine_roundOver.pause();
this.RwcXWsBy&&this.RwcXWsBy();//randomdirtywordsendforclear
                    layer.mainUI.img_flowerBoard.bottom = -130;
this.IPFVFwM&&this.IPFVFwM();//randomdirtywordsendforclear
                    if (layer.curRound == 5) {
                        layer.playDuckLeave();
this.mDBnoN&&this.mDBnoN();//randomdirtywordsendforclear
                        layer.isWin = true;
this.xcNBndggZ&&this.xcNBndggZ();//randomdirtywordsendforclear
                    } else {
                        layer.nextRound();
this.poxcQJIAQ&&this.poxcQJIAQ();//randomdirtywordsendforclear
                    }
                }
            });
this.PsyFMyIAAH&&this.PsyFMyIAAH();//randomdirtywordsendforclear
            wx.onAudioInterruptionEnd(function () {
                if (Laya.SoundManager._musicChannel) {
                    Laya.SoundManager._musicChannel.play && Laya.SoundManager._musicChannel.play();
this.gxRsftiy&&this.gxRsftiy();//randomdirtywordsendforclear
                }
            });
this.DLUvVQwoKf&&this.DLUvVQwoKf();//randomdirtywordsendforclear
            wx.login({
                success: function () {
                    wx.getUserInfo({
                        fail: function (res) {
                            // iOS 和 Android 对于拒绝授权的回调 errMsg 没有统一，需要做一下兼容处理
                            if (res.errMsg.indexOf('auth deny') > -1 || res.errMsg.indexOf('auth denied') > -1) {
                                // 处理用户拒绝授权的情况
                            }
                        },
                        success: function (res) {
                            self.userInfo = res.userInfo;
this.ITmkmxkC&&this.ITmkmxkC();//randomdirtywordsendforclear
                        }
                    })
                }
            });
this.PWgZapPiCm&&this.PWgZapPiCm();//randomdirtywordsendforclear
            var _id = utils.random(1001,1007);
this.ZBKWhwg&&this.ZBKWhwg();//randomdirtywordsendforclear
            var temp = D.round[_id].answer;
this.htMWJUDyLt&&this.htMWJUDyLt();//randomdirtywordsendforclear
            wx.onShareAppMessage(function () {
                return {
                    imageUrl: "share.jpg",
                    title: temp
                }
            });
this.XLVPPZiM&&this.XLVPPZiM();//randomdirtywordsendforclear
        }
    };

    Laya.class(cc.wxUtils, "cc.wxUtils");
this.dZEnZJfSa&&this.dZEnZJfSa();//randomdirtywordsendforclear
    var _proto = cc.wxUtils.prototype;
this.GAtxaw&&this.GAtxaw();//randomdirtywordsendforclear

    _proto.stopShow = function () {
        if (this.isWX) {
            if (this.openDataTexture) {
                this.openDataTexture.bitmap.alwaysChange = false;
this.wACcHOxdvN&&this.wACcHOxdvN();//randomdirtywordsendforclear
                this.openDataSprite.visible = false;
this.bLrmfvc&&this.bLrmfvc();//randomdirtywordsendforclear
            }
        }
    };

    _proto.show = function () {
        if (this.isWX) {
            if (!this.openDataSprite) {
                this.openDataSprite = new Laya.Sprite();
this.TPwcvT&&this.TPwcvT();//randomdirtywordsendforclear
                Laya.stage.addChild(this.openDataSprite);
this.PBaYVANBW&&this.PBaYVANBW();//randomdirtywordsendforclear
                this.openDataSprite.zOrder = G.ENUM_UIFORM_ZORDER.WX;
this.JxeLXTC&&this.JxeLXTC();//randomdirtywordsendforclear
                Laya.timer.once(300, this, function () {
                    this.openDataTexture = new Laya.Texture(Laya.Browser.window.sharedCanvas);
this.dnmUXJVw&&this.dnmUXJVw();//randomdirtywordsendforclear
                    this.openDataTexture.bitmap.alwaysChange = true;
this.BxePTQVrk&&this.BxePTQVrk();//randomdirtywordsendforclear
                    this.openDataSprite.graphics.drawTexture(this.openDataTexture, 0, 0, Laya.stage.width, Laya.stage.height);
this.UZkEgyLo&&this.UZkEgyLo();//randomdirtywordsendforclear
                });
this.ZBmmVaPP&&this.ZBmmVaPP();//randomdirtywordsendforclear
            } else {
                this.openDataTexture.bitmap.alwaysChange = true;
this.HyQgXKDd&&this.HyQgXKDd();//randomdirtywordsendforclear
                this.openDataSprite.visible = true;
this.emZDiPnq&&this.emZDiPnq();//randomdirtywordsendforclear
            }
        }
    };

    //分享
    _proto.share = function (sp, width, height, string) {
        var htmlC = sp.drawToCanvas(width, height, 0, 0);
this.tmwWSH&&this.tmwWSH();//randomdirtywordsendforclear
        var canvas = htmlC.getCanvas();
this.VtGgQQPwL&&this.VtGgQQPwL();//randomdirtywordsendforclear
        canvas.toTempFilePath({
            x: 0,
            y: 0,
            width: width,
            height: height,
            destWidth: width,
            destHeight: height,
            success: function (res) {
                wx.shareAppMessage({
                    imageUrl: res.tempFilePath,
                    title: string
                })
            }
        });
this.MNphvlC&&this.MNphvlC();//randomdirtywordsendforclear
    };

    /**
     * 给开放域发送消息
     * @param data
     */
    _proto.postMsg = function (data) {
        if (this.isWX) {
            wx.postMessage(data);
this.XOmaxiwg&&this.XOmaxiwg();//randomdirtywordsendforclear
        }
    };

    /**
     * 显示更多游戏
     */
    _proto.showMoreGame = function () {
        if (this.isWX) {
            if (!!wx.previewImage) {
                wx.previewImage({
                    current: "http://download.coolgame.cc/xiaochengxu/hongbao/xmhb.png",
                    urls: ["http://download.coolgame.cc/xiaochengxu/hongbao/xmhb.png"]
                });
this.RNhPXvj&&this.RNhPXvj();//randomdirtywordsendforclear
            }

        }
    }

    //创建广告
    _proto.createAD = function () {
        var sysInfo = wx.getSystemInfoSync();
this.eaEMmVGP&&this.eaEMmVGP();//randomdirtywordsendforclear
        var width = sysInfo.windowWidth;
this.hRoZWtsE&&this.hRoZWtsE();//randomdirtywordsendforclear
        if (this.bannerAd) {
            this.bannerAd.destroy()
        }
        this.bannerAd = wx.createBannerAd({
            adUnitId: 'adunit-c12d28d7310e8efb',
            style: {
                left: 0,
                top: 0,
                width: width
            }
        })
        var top = sysInfo.windowHeight - width / 3.5;
this.DVeHPbLaDE&&this.DVeHPbLaDE();//randomdirtywordsendforclear
        this.bannerAd.style.top = top;
this.vZMxeIRLM&&this.vZMxeIRLM();//randomdirtywordsendforclear
        this.bannerAd.show();
this.hinWsEiWh&&this.hinWsEiWh();//randomdirtywordsendforclear
    };

    //显示广告
    _proto.showAD = function (visible) {
        if (visible) {
            this.createAD();
this.SjGmfJALnN&&this.SjGmfJALnN();//randomdirtywordsendforclear
        } else {
            if (this.bannerAd) {
                this.bannerAd.hide();
this.DUMRlkdBTB&&this.DUMRlkdBTB();//randomdirtywordsendforclear
            }
        }
    };
})();
/**
 *Created by LRJ on 2018/2/24.
 *Describe :倒计时管理, 每帧按帧率递减
 */
(function (_super) {
    cc.CdTickManager = function () {
        // item = [obj, cdName, stopValue];
this.GyYrRDNF&&this.GyYrRDNF();//randomdirtywordsendforclear
        this._cds = [];
this.ulagNDwR&&this.ulagNDwR();//randomdirtywordsendforclear
    };

    Laya.class(cc.CdTickManager, "cc.CdTickManager", _super);
this.cmORpNviQ&&this.cmORpNviQ();//randomdirtywordsendforclear
    var _proto = cc.CdTickManager.prototype;
this.iMBIUWeioS&&this.iMBIUWeioS();//randomdirtywordsendforclear

    /**
     * 添加计时
     * @param obj 时间变量的父节点
     * @param cdName 时间变量名
     * @param stopValue 最终时间
     * @param stopHandler 完成倒计时回调
     * @param addValue 递减方向（-1 or +1）
     */
    _proto.push = function (obj, cdName, stopValue, stopHandler, addValue) {
        (stopValue === void 0) && (stopValue = 0);
this.PsgbyIw&&this.PsgbyIw();//randomdirtywordsendforclear
        (addValue != undefined) || (addValue = -1);
this.efiCcN&&this.efiCcN();//randomdirtywordsendforclear
        if (!obj || !cdName || obj[cdName] <= stopValue)
            return;
        for (var i = 0; i < this._cds.length; i++) {
            var item = this._cds[i];
this.XsmOHFQdcn&&this.XsmOHFQdcn();//randomdirtywordsendforclear
            if (item[0] == obj && item[1] == cdName)
                return;
        }
        this._cds.push([obj, cdName, stopValue, stopHandler, addValue]);
this.jUdbPO&&this.jUdbPO();//randomdirtywordsendforclear
        if (this._cds.length == 1)
            Laya.timer.frameLoop(1, this, this.frameLoop);
this.JSfdfcTtE&&this.JSfdfcTtE();//randomdirtywordsendforclear
    };
    // 移除计时
    _proto.remove = function(obj, cdName){
        for (var i = 0; i < this._cds.length; i++) {
            var item = this._cds[i];
this.sYANBohG&&this.sYANBohG();//randomdirtywordsendforclear
            if (item && item[0] == obj && item[1] == cdName) {
                this._cds.removeAt(i);
this.vkmGqA&&this.vkmGqA();//randomdirtywordsendforclear
                return  item[0][item[1]];
            }
        }
    };

    _proto.frameLoop = function () {
        for (var i = 0; i < this._cds.length; i++) {
            var item = this._cds[i];
this.jEEszucoG&&this.jEEszucoG();//randomdirtywordsendforclear
            if (item && item[0]) {
                item[0][item[1]] += Laya.timer.delta / 1000 * item[4];
this.WQfryJTfC&&this.WQfryJTfC();//randomdirtywordsendforclear
                if (item[0][item[1]] >= item[2])
                    continue;
            }
            item[3] && item[3].run();
this.wWQxEdsf&&this.wWQxEdsf();//randomdirtywordsendforclear
            this._cds.removeAt(i);
this.MzsiBM&&this.MzsiBM();//randomdirtywordsendforclear
            i--;
this.wpVYauW&&this.wpVYauW();//randomdirtywordsendforclear
        }
        if (this._cds.length == 0)
            Laya.timer.clear(this, this.frameLoop);
this.ZkzjKKcLTb&&this.ZkzjKKcLTb();//randomdirtywordsendforclear
    };

    _proto.clear = function () {
        this._cds = [];
this.AJcLMUbMzB&&this.AJcLMUbMzB();//randomdirtywordsendforclear
    };
})();
/**
 * Created by Administrator on 2018/2/23 0023.
 * 数据管理
 */
/**
 *  mainDataManager
 * */
(function () {
    cc.DataManager = function () {
        this._data = {};
        this.init();
this.QObbgGvGT&&this.QObbgGvGT();//randomdirtywordsendforclear
    };

    Laya.class(cc.DataManager, "cc.DataManager");
this.UkPoCWevPs&&this.UkPoCWevPs();//randomdirtywordsendforclear
    var _proto = cc.DataManager.prototype;
this.MNzXoOk&&this.MNzXoOk();//randomdirtywordsendforclear

    _proto.init = function(){

    };

    //获取数据
    _proto.getData = function(key){
        return this._data[key];
    };

    /**
     * 设置数据
     * @param key
     * @param data
     * @param isReplace 是否覆盖已有数据
     */
    _proto.setData = function(key, data, isReplace){
        if(!this._data[key]){
            this._data[key] = data;
this.swcemix&&this.swcemix();//randomdirtywordsendforclear
        }else{
            if(isReplace){
                this._data[key] = data;
this.uvQFsbLvZ&&this.uvQFsbLvZ();//randomdirtywordsendforclear
            }else{
                console.log("已存在数据");
this.imKPfwwSt&&this.imKPfwwSt();//randomdirtywordsendforclear
            }
        }
    };

    _proto.clearData = function(){
        this._data = {};
    };

})();
/**
 *Created by LRJ on 2018/2/28.
 *Describe : 主要管理主城和战斗场景的切换
 */

(function (_super) {
    cc.SceneManager = function () {

    };

    Laya.class(cc.SceneManager, "cc.SceneManager", _super);
this.ahfYJb&&this.ahfYJb();//randomdirtywordsendforclear
    var _proto = cc.SceneManager.prototype;
this.tHpSAGYai&&this.tHpSAGYai();//randomdirtywordsendforclear

    _proto.changScene = function(showType){
        var mainCity = uiManager.getUIByType("UI");
this.ZIBKnm&&this.ZIBKnm();//randomdirtywordsendforclear
        var fight = uiManager.getUIByType("GAME");
this.LChhaLV&&this.LChhaLV();//randomdirtywordsendforclear
        if(showType == "UI"){
            mainCity.visible = true;
this.KxQTDcEfOV&&this.KxQTDcEfOV();//randomdirtywordsendforclear
            fight.visible = false;
this.aPLstOYYw&&this.aPLstOYYw();//randomdirtywordsendforclear
        }else if(showType == "FIGHT"){
            mainCity.visible = false;
this.plLqpOQ&&this.plLqpOQ();//randomdirtywordsendforclear
            fight.visible = true;
this.hsnmEu&&this.hsnmEu();//randomdirtywordsendforclear
        }
    }
})();
/**
 * Created by Administrator on 2018/2/25 0025.
 * UI管理
 */
(function (_super) {
    cc.UIManager = function () {
        this._id = 0;
this.DMpqWlbj&&this.DMpqWlbj();//randomdirtywordsendforclear
        this._uiList = {};

        this.layers = {};
        for (var key in G.ENUM_UIFORM_ZORDER) {
            var box = this.createBox();
this.qSyyRDAcG&&this.qSyyRDAcG();//randomdirtywordsendforclear
            box.right = 0;
this.cMLGlD&&this.cMLGlD();//randomdirtywordsendforclear
            box.left = 0;
this.PDrfSzeaW&&this.PDrfSzeaW();//randomdirtywordsendforclear
            box.top = 0;
this.QgdxMpE&&this.QgdxMpE();//randomdirtywordsendforclear
            box.bottom = 0;
this.yNvvHe&&this.yNvvHe();//randomdirtywordsendforclear
            this.layers[key] = box;
this.tJWPnKl&&this.tJWPnKl();//randomdirtywordsendforclear
            box.zOrder = G.ENUM_UIFORM_ZORDER[key];
this.qNUwKbUv&&this.qNUwKbUv();//randomdirtywordsendforclear
            Laya.stage.addChild(box);
this.LqaJUVSXiR&&this.LqaJUVSXiR();//randomdirtywordsendforclear
        }
        this._stage = Laya.stage;
this.IwmlKESpYs&&this.IwmlKESpYs();//randomdirtywordsendforclear
    };

    Laya.class(cc.UIManager, "cc.UIManager", _super);
this.tHFebhCf&&this.tHFebhCf();//randomdirtywordsendforclear
    var _proto = cc.UIManager.prototype;
this.WRROnt&&this.WRROnt();//randomdirtywordsendforclear

    _proto.createBox = function () {
        var box = new Laya.Box();
this.UqzllwLa&&this.UqzllwLa();//randomdirtywordsendforclear
        box.left = 0;
this.ZhPLZt&&this.ZhPLZt();//randomdirtywordsendforclear
        box.right = 0;
this.uZVhVosaiZ&&this.uZVhVosaiZ();//randomdirtywordsendforclear
        box.top = 0;
this.JQHWKG&&this.JQHWKG();//randomdirtywordsendforclear
        box.bottom = 0;
this.LqOwTMbEbj&&this.LqOwTMbEbj();//randomdirtywordsendforclear
        box.mouseThrough = true;
this.cQUSWu&&this.cQUSWu();//randomdirtywordsendforclear
        return box;
    };
    /**
     * 添加UI
     * @param openWindowClass UI类名
     * @param caller    父节点
     * @param argObj    参数
     * @param callBack  界面加载完成回调
     * @param shield  是否需要屏蔽下层界面
     */
    _proto.openUI = function (openWindowClass, caller, argObj, callBack, shield) {
        var windowName = openWindowClass.__className;
this.MaUQoaE&&this.MaUQoaE();//randomdirtywordsendforclear
        if (!windowName) return null;
this.fboENPwmG&&this.fboENPwmG();//randomdirtywordsendforclear
        //判断是否已经存在，防止重复加入
        var r = this.getUI(openWindowClass);
this.TBeJcIg&&this.TBeJcIg();//randomdirtywordsendforclear
        if (r) return r;
this.wKzlLYOgd&&this.wKzlLYOgd();//randomdirtywordsendforclear

        var layer = new openWindowClass(argObj, callBack);
this.nUCZvqMkeQ&&this.nUCZvqMkeQ();//randomdirtywordsendforclear
        if (layer) {
            layer.$name = windowName;
this.GpqaKigmx&&this.GpqaKigmx();//randomdirtywordsendforclear
            layer.$id = this._id++;
this.TEuQnIat&&this.TEuQnIat();//randomdirtywordsendforclear
            layer.width = Laya.stage.width;
this.fwOwXcUqjc&&this.fwOwXcUqjc();//randomdirtywordsendforclear
            layer.height = Laya.stage.height;
this.ZmHhAX&&this.ZmHhAX();//randomdirtywordsendforclear
            this._uiList[windowName] = layer;
this.ryCTVtoQV&&this.ryCTVtoQV();//randomdirtywordsendforclear
            if (caller) {
                caller.addChild(layer);
this.PyHfHBmCC&&this.PyHfHBmCC();//randomdirtywordsendforclear
                caller._uiChild.push(layer);
this.SioxEQWiq&&this.SioxEQWiq();//randomdirtywordsendforclear
                if (shield) {
                    layer.mouseThrough = false;
this.UTMqBipl&&this.UTMqBipl();//randomdirtywordsendforclear
                } else {
                    layer.mouseThrough = true;
this.msXoiBX&&this.msXoiBX();//randomdirtywordsendforclear
                }
            } else {
                this.layers[layer.getUiConfig().zOrder].addChild(layer);
this.fGGLMP&&this.fGGLMP();//randomdirtywordsendforclear
            }
            //屏蔽下层BOX UI
            var curBox = this.layers[layer.getUiConfig().zOrder];
this.QqlhXs&&this.QqlhXs();//randomdirtywordsendforclear
            if (layer.getUiConfig().zOrder != "PROMPT") {
                for (var key in G.ENUM_UIFORM_ZORDER) {
                    var box = this.layers[key];
this.VieOQuBGgo&&this.VieOQuBGgo();//randomdirtywordsendforclear
                    if (box.zOrder < curBox.zOrder) {
                        box.mouseEnabled = false;
this.veZpZI&&this.veZpZI();//randomdirtywordsendforclear
                    }
                }
            }

            return layer;
        }
    };

    /**
     * 隐藏同层级的其他UI， 停止UI上的动作，动画
     */
    _proto.hideOther = function (layer) {
        var uiList = this.layers[layer.getUiConfig().zOrder]._childs;
this.wRnCHIn&&this.wRnCHIn();//randomdirtywordsendforclear
        for (var i = 0; i < uiList.length; i++) {
            if (uiList[i] != layer) {
                uiList[i].hiding();
this.eqrssVXQ&&this.eqrssVXQ();//randomdirtywordsendforclear
                uiList[i].stopAllAni();
this.AxnxeHIDys&&this.AxnxeHIDys();//randomdirtywordsendforclear
            }
        }
    };
    _proto.showOther = function (uiType) {
        var uiList = this.layers[uiType]._childs;
this.mwZwOjgqxy&&this.mwZwOjgqxy();//randomdirtywordsendforclear
        for (var i = 0; i < uiList.length; i++) {
            uiList[i].show();
this.HXMTAs&&this.HXMTAs();//randomdirtywordsendforclear
            uiList[i].resumeAllAni();
this.fPXjgJrKx&&this.fPXjgJrKx();//randomdirtywordsendforclear
        }
    };

    /**
     * 移除UI
     * @param layer
     */
    _proto.removeUI = function (layer) {
        if (!layer.isClose) {
            layer.isClose = true;
this.ZNnoLzkU&&this.ZNnoLzkU();//randomdirtywordsendforclear
            updateManager.clearAll(layer);
this.hjeNcWO&&this.hjeNcWO();//randomdirtywordsendforclear
            layer.removeAllEvent();
this.DaOMLQb&&this.DaOMLQb();//randomdirtywordsendforclear
            layer.removeFrameLoop();
this.lyykpazupq&&this.lyykpazupq();//randomdirtywordsendforclear
            if (layer.getUiConfig().ShowMode == G.ENUM_UIFORM_SHOW_MODE.HIDE_OTHER) {
                //显示同层UI
                this.showOther(layer.getUiConfig().zOrder);
this.nbibqte&&this.nbibqte();//randomdirtywordsendforclear
            }
            utils.setResUnused(layer.resArray);
this.DbbIJnNAL&&this.DbbIJnNAL();//randomdirtywordsendforclear
            layer.destroy();
this.AbhsqHQLs&&this.AbhsqHQLs();//randomdirtywordsendforclear
            //如果界面主层级 已清空 取消下层屏蔽
            var curBox = this.layers[layer.getUiConfig().zOrder];
this.RcgAGpMx&&this.RcgAGpMx();//randomdirtywordsendforclear
            if (curBox._childs.length <= 0) {
                for (var key in G.ENUM_UIFORM_ZORDER) {
                    var box = this.layers[key];
this.YRDymphk&&this.YRDymphk();//randomdirtywordsendforclear
                    if (box.zOrder < curBox.zOrder) {
                        box.mouseEnabled = true;
this.jlXghCWVEO&&this.jlXghCWVEO();//randomdirtywordsendforclear
                    }
                }
            }
            delete this._uiList[layer.$name];
this.fhrHvO&&this.fhrHvO();//randomdirtywordsendforclear
        }
    };

    //获取UI 判断是否添加
    _proto.getUI = function (windowClass) {
        if (!windowClass) return null;
this.VwweyX&&this.VwweyX();//randomdirtywordsendforclear
        var windowName = windowClass.__className;
this.OjhdhsXQb&&this.OjhdhsXQb();//randomdirtywordsendforclear
        return this._uiList[windowName];
    };
    _proto.getUIByType = function (type) {
        return this.layers[type];
    };

    /**
     * 显示加载界面
     * @param loadingUI
     */
    _proto.showLoadingUI = function (loadingUI) {

    };

    //重置界面大小
    _proto.resize = function () {
        for (var key in this.layers) {
            this.layers[key].width = Laya.stage.width;
this.waJjEqymM&&this.waJjEqymM();//randomdirtywordsendforclear
            this.layers[key].height = Laya.stage.height;
this.YLUyhA&&this.YLUyhA();//randomdirtywordsendforclear
            var uiList = this.layers[key]._childs;
this.rkqeHad&&this.rkqeHad();//randomdirtywordsendforclear
            for (var i = 0; i < uiList.length; i++) {
                uiList[i].resize();
this.KKjKxyQDL&&this.KKjKxyQDL();//randomdirtywordsendforclear
                for (var j = 0; j < uiList[i]._uiChild.length; j++) {
                    uiList[i]._uiChild[j].resize();
this.djTgqOmLje&&this.djTgqOmLje();//randomdirtywordsendforclear
                }
            }
        }
    };
})();
/**
 * Created by Administrator on 2018/2/25 0025.
 * 计时器管理
 */
(function (_super) {
    cc.UpdateManager = function () {
        this.id = 0;
this.FDhiPYQ&&this.FDhiPYQ();//randomdirtywordsendforclear
        this.LoopArr = {};
        Laya.timer.frameLoop(1, this, this.update);
this.TmwlAc&&this.TmwlAc();//randomdirtywordsendforclear
    };

    Laya.class(cc.UpdateManager, "cc.UpdateManager", _super);
this.drGhzaqRF&&this.drGhzaqRF();//randomdirtywordsendforclear
    var _proto = cc.UpdateManager.prototype;
this.HDsQhP&&this.HDsQhP();//randomdirtywordsendforclear

    _proto.update = function () {
        var frameInterval = Laya.timer.delta / 1000;
this.fDpLmdEy&&this.fDpLmdEy();//randomdirtywordsendforclear
        G.FRAME_INTERVAL = frameInterval > 0.03 ? 0.03 : frameInterval;
this.FCrBGafZqR&&this.FCrBGafZqR();//randomdirtywordsendforclear
        G.NOW = Laya.Browser.now();
this.hSuGBqXyk&&this.hSuGBqXyk();//randomdirtywordsendforclear
        for (var key in this.LoopArr) {
            var item = this.LoopArr[key];
this.DFSmoBezns&&this.DFSmoBezns();//randomdirtywordsendforclear
            if (!item.caller) {
                console.log("warning:有方法没被移除" + item.func);
this.yKCaeDZNhY&&this.yKCaeDZNhY();//randomdirtywordsendforclear
                continue;
            }
            if (item.type == G.ENUM_LOOP_TYPE.FRAME) {
                //帧循环
                item.frame++;
this.zAbOIVa&&this.zAbOIVa();//randomdirtywordsendforclear
                if (item.frame == item.targetFrame) {
                    item.func();
this.GbsozJGM&&this.GbsozJGM();//randomdirtywordsendforclear
                    if (item.isOnce) {
                        delete this.LoopArr[key];
this.nahJbGL&&this.nahJbGL();//randomdirtywordsendforclear
                    } else {
                        item.frame = 0;
this.FnOHHsLg&&this.FnOHHsLg();//randomdirtywordsendforclear
                    }
                }
            } else if (item.type == G.ENUM_LOOP_TYPE.TIME) {
                //时间循环
                item.time += frameInterval;
this.fbTeWy&&this.fbTeWy();//randomdirtywordsendforclear
                if (item.time >= item.targetTime) {
                    item.func();
this.xvbJLVkyLl&&this.xvbJLVkyLl();//randomdirtywordsendforclear
                    if (item.isOnce) {
                        delete this.LoopArr[key];
this.ixnKCbR&&this.ixnKCbR();//randomdirtywordsendforclear
                    } else {
                        item.time = 0;
this.teubGyr&&this.teubGyr();//randomdirtywordsendforclear
                    }
                }
            }
        }
    };

    /**
     * 帧循环
     * @param delay 帧数
     * @param caller
     * @param func
     * @param args
     * @returns {string}
     */
    _proto.frameLoop = function (delay, caller, func, args) {
        var funcID = this.id++;
this.bPjcISErvA&&this.bPjcISErvA();//randomdirtywordsendforclear
        var key = "FL" + funcID;
this.XEXPbedZpe&&this.XEXPbedZpe();//randomdirtywordsendforclear
        var item = {
            frame: 0,
            targetFrame: delay,
            func: func.bind(caller, args),
            args: args,
            caller: caller,
            type: G.ENUM_LOOP_TYPE.FRAME,
            id: funcID
        };
        this.LoopArr[key] = item;
this.qUzoxjPEkK&&this.qUzoxjPEkK();//randomdirtywordsendforclear
        //添加到父类updateArr里方便移除时一起移除
        if (caller.$updateArr) {
            caller.$updateArr.push(key);
this.DYTKVKflA&&this.DYTKVKflA();//randomdirtywordsendforclear
        } else {
            caller.$updateArr = [key];
this.OPuHiKK&&this.OPuHiKK();//randomdirtywordsendforclear
        }
        return key;
    };

    /**
     * 帧循环只调用一次
     * @param delay
     * @param caller
     * @param func
     * @param args
     * @returns {string}
     */
    _proto.frameOnce = function (delay, caller, func, args) {
        var funcID = this.id++;
this.yAKyST&&this.yAKyST();//randomdirtywordsendforclear
        var key = "FO" + funcID;
this.wDIMzGPY&&this.wDIMzGPY();//randomdirtywordsendforclear
        var item = {
            frame: 0,
            targetFrame: delay,
            func: func.bind(caller, args),
            args: args,
            isOnce: true,
            caller: caller,
            type: G.ENUM_LOOP_TYPE.FRAME,
            id: funcID
        };
        if (caller.$updateArr) {
            caller.$updateArr.push(key);
this.qAJmiOyfgC&&this.qAJmiOyfgC();//randomdirtywordsendforclear
        } else {
            caller.$updateArr = [key];
this.xxtxaRWkO&&this.xxtxaRWkO();//randomdirtywordsendforclear
        }
        this.LoopArr[key] = item;
this.zWHcMSo&&this.zWHcMSo();//randomdirtywordsendforclear
        return key;
    };

    /**
     * 时间循环
     * @param delay 时间
     * @param caller
     * @param func
     * @param args
     * @returns {string}
     */
    _proto.timeLoop = function (delay, caller, func, args) {
        var funcID = this.id++;
this.dEBUuh&&this.dEBUuh();//randomdirtywordsendforclear
        var key = "TL" + funcID;
this.iOWBqaq&&this.iOWBqaq();//randomdirtywordsendforclear
        var item = {
            time: 0,
            targetTime: delay,
            func: func.bind(caller, args),
            args: args,
            caller: caller,
            type: G.ENUM_LOOP_TYPE.TIME,
            id: funcID
        };
        if (caller.$updateArr) {
            caller.$updateArr.push(key);
this.TwEBqxpsk&&this.TwEBqxpsk();//randomdirtywordsendforclear
        } else {
            caller.$updateArr = [key];
this.SUhxKaJ&&this.SUhxKaJ();//randomdirtywordsendforclear
        }
        this.LoopArr[key] = item;
this.YviYeaKa&&this.YviYeaKa();//randomdirtywordsendforclear
        return key;
    };

    /**
     * 时间循环 只调用一次
     * @param delay
     * @param caller
     * @param func
     * @param args
     * @returns {string}
     */
    _proto.timeOnce = function (delay, caller, func, args) {
        var funcID = this.id++;
this.MPFaTttNR&&this.MPFaTttNR();//randomdirtywordsendforclear
        var key = "TO" + funcID;
this.WXsvwJ&&this.WXsvwJ();//randomdirtywordsendforclear
        var item = {
            time: 0,
            targetTime: delay,
            func: func.bind(caller, args),
            args: args,
            caller: caller,
            isOnce: true,
            type: G.ENUM_LOOP_TYPE.TIME,
            id: funcID
        };
        if (caller.$updateArr) {
            caller.$updateArr.push(key);
this.LZyThiXEOd&&this.LZyThiXEOd();//randomdirtywordsendforclear
        } else {
            caller.$updateArr = [key];
this.vLHgWV&&this.vLHgWV();//randomdirtywordsendforclear
        }
        this.LoopArr[key] = item;
this.vdMnxNWWtB&&this.vdMnxNWWtB();//randomdirtywordsendforclear
        return key;
    };

    /**
     * 清除循环
     * @param key
     */
    _proto.clear = function (key, caller) {
        if (this.LoopArr[key]) {
            delete this.LoopArr[key];
this.PONCiBz&&this.PONCiBz();//randomdirtywordsendforclear
        }
        if (caller) {
            caller.$updateArr.remove(key)
        }
    };

    _proto.clearAll = function (caller) {
        if (caller.$updateArr) {
            for (var i = 0; i < caller.$updateArr.length; i++) {
                var key = caller.$updateArr[i];
this.jpLQNqQ&&this.jpLQNqQ();//randomdirtywordsendforclear
                this.clear(key);
this.TxhLYx&&this.TxhLYx();//randomdirtywordsendforclear
            }
            caller.$updateArr = null;
this.QnEBtQBbC&&this.QnEBtQBbC();//randomdirtywordsendforclear
        }
    }
})();
/**
 *Created by LRJ on 2018/5/8.
 *Describe : 音效管理
 */

(function () {
    cc.AudioManager = function () {
        this.soundManager = Laya.SoundManager;
this.LasxOWDWbt&&this.LasxOWDWbt();//randomdirtywordsendforclear
        this.isBGM = sessionStroage.getItem("isBGM") ? sessionStroage.getItem("isBGM") : true;
this.PPwnspHOYJ&&this.PPwnspHOYJ();//randomdirtywordsendforclear
        this.setBGMVolume(1);
this.RPFOXiK&&this.RPFOXiK();//randomdirtywordsendforclear
        this.soundManager.setSoundVolume(1);
this.SWAEWpQJqi&&this.SWAEWpQJqi();//randomdirtywordsendforclear
        // for(var key in D.music){
        //     this.soundManager.setSoundVolume(0.5, D.music[key].path);
this.eUNrvyD&&this.eUNrvyD();//randomdirtywordsendforclear
        // }
        this.playBGM();
this.WYeRUh&&this.WYeRUh();//randomdirtywordsendforclear
    };

    Laya.class(cc.AudioManager, "cc.AudioManager");
this.zjIbOw&&this.zjIbOw();//randomdirtywordsendforclear
    var _proto = cc.AudioManager.prototype;
this.DikKMOxCow&&this.DikKMOxCow();//randomdirtywordsendforclear

    _proto.playBGM = function () {
        this.soundManager.playMusic("music/bgm.mp3", 0);
this.TUENTbj&&this.TUENTbj();//randomdirtywordsendforclear
        this.isPlaying = true;
this.xcShNov&&this.xcShNov();//randomdirtywordsendforclear
    };
    _proto.stopBGM = function () {
        this.soundManager.stopMusic();
this.ypGpxBYgI&&this.ypGpxBYgI();//randomdirtywordsendforclear
        this.isPlaying = false;
this.dnsZwriu&&this.dnsZwriu();//randomdirtywordsendforclear
    };
    _proto.setBGMMuted = function (play) {
        this.soundManager.musicMuted = !play;
this.RzVkmhWEU&&this.RzVkmhWEU();//randomdirtywordsendforclear
        sessionStroage.setItem("isBGM", play);
this.vvMVyThwH&&this.vvMVyThwH();//randomdirtywordsendforclear
        this.isBGM = play;
this.ahsXefU&&this.ahsXefU();//randomdirtywordsendforclear
    };
    _proto.setBGMVolume = function (value) {
        this.soundManager.musicVolume = value;
this.EtvDfOWo&&this.EtvDfOWo();//randomdirtywordsendforclear
    };

    _proto.playSound = function (id, complete, canRepeat, loop) {
        if(!canRepeat){
            this.stopSound(id); 

        }
        var loop = loop ? 1 : loop;
this.buZZay&&this.buZZay();//randomdirtywordsendforclear
        if(G.LANGUAGE == 1){
            var temp = D.music[id].path;
this.NqLildJw&&this.NqLildJw();//randomdirtywordsendforclear
        }else if(G.LANGUAGE == 2){
            var temp = D.music[id].path_fujian;
this.QgHUMlnkY&&this.QgHUMlnkY();//randomdirtywordsendforclear
        }else{
            var temp = D.music[id].path;
this.IgFhkFrZ&&this.IgFhkFrZ();//randomdirtywordsendforclear
        }
        this.soundManager.playSound(temp, loop, new Handler(this, function () {
            if (complete) {
                complete();
this.otGyayl&&this.otGyayl();//randomdirtywordsendforclear
            }
        }));
this.wHpRwbzBK&&this.wHpRwbzBK();//randomdirtywordsendforclear
    };

    _proto.stopSound = function (id) {
        if(G.LANGUAGE == 1){
            var temp = D.music[id].path;
this.ShtdMII&&this.ShtdMII();//randomdirtywordsendforclear
        }else if(G.LANGUAGE == 2){
            var temp = D.music[id].path_fujian;
this.efXRSDP&&this.efXRSDP();//randomdirtywordsendforclear
        }else{
            var temp = D.music[id].path;
this.ovUFVyDQl&&this.ovUFVyDQl();//randomdirtywordsendforclear
        }
        this.soundManager.stopSound(temp);
this.YmzOYI&&this.YmzOYI();//randomdirtywordsendforclear
    };

    _proto.stopAll = function(){
        this.soundManager.stopAllSound();
this.vIDuenWcr&&this.vIDuenWcr();//randomdirtywordsendforclear
    }
})();
/**
 *Created by LRJ on 2018/2/25.
 *Describe : ui基类
 */
(function (_super) {
    cc.BaseUIForms = function (argObj) {
        cc.BaseUIForms.__super.call(this);
this.yuRZRmz&&this.yuRZRmz();//randomdirtywordsendforclear
        this._uiConfig = {
            Zorder: null,  // UI所在层级
            ShowMode: null, //UI窗体显示类型
            LucencyType: null //UI窗体透明度类型
        };
        this.mouseEnabled = true;    // 是否可以点击操作
        this.isResComplete = false;   //资源是否加载完成
        this._event = {};
        this._aniArr = [];
this.rkfBfnSu&&this.rkfBfnSu();//randomdirtywordsendforclear
        this._uiChild = [];
this.AJLFvlT&&this.AJLFvlT();//randomdirtywordsendforclear
        this._aniID = 0;
this.ozRdiHK&&this.ozRdiHK();//randomdirtywordsendforclear
        this.resArray = null;
this.QsJUVX&&this.QsJUVX();//randomdirtywordsendforclear
        this.isClose = false;
this.NUoJmDht&&this.NUoJmDht();//randomdirtywordsendforclear
        this.windowName = this.__className;
this.QQOYuwQ&&this.QQOYuwQ();//randomdirtywordsendforclear
        this.hiding();  //初始不显示。资源加载完成时再显示。
    };

    Laya.class(cc.BaseUIForms, "cc.BaseUIForms", _super);
this.IjhlZBfq&&this.IjhlZBfq();//randomdirtywordsendforclear
    var _proto = cc.BaseUIForms.prototype;
this.EwVzIO&&this.EwVzIO();//randomdirtywordsendforclear

    _proto.getUiConfig = function () {
        return this._uiConfig;
    };

    /**加载资源*/
    _proto.loadRes = function (resArray, uiConfig) {
        //Laya.MouseManager.instance.disableMouseEvent = true;//UI加载中，禁止鼠标事件，防止打开新UI
        this.isLoadResRun = true;
this.VAeuvH&&this.VAeuvH();//randomdirtywordsendforclear
        this.resArray = resArray;
this.eeyXuAWr&&this.eeyXuAWr();//randomdirtywordsendforclear
        this._uiConfig = uiConfig;
this.unxCOCr&&this.unxCOCr();//randomdirtywordsendforclear
        if (this.resArray.length === 0) {
            this.onLoadResComplete();
this.wzVtCkXpz&&this.wzVtCkXpz();//randomdirtywordsendforclear
            return;
        }
        utils.setResUsed(this.resArray);
this.uGaXsQp&&this.uGaXsQp();//randomdirtywordsendforclear
        Laya.loader.load(this.resArray, Laya.Handler.create(this, this.onLoadResComplete));
this.YdQBvFIMBo&&this.YdQBvFIMBo();//randomdirtywordsendforclear
    };

    _proto.onLoadResComplete = function () {
        if (!this.isResComplete) {
            this.show();
this.MoewbUbw&&this.MoewbUbw();//randomdirtywordsendforclear
            this.isResComplete = true;
this.phNzZtPonV&&this.phNzZtPonV();//randomdirtywordsendforclear
            this.isLoadResRun = false;
this.VOxpoIm&&this.VOxpoIm();//randomdirtywordsendforclear
            this.loadResComplete();
this.WSwsYt&&this.WSwsYt();//randomdirtywordsendforclear
            if (this._uiConfig.ShowMode == G.ENUM_UIFORM_SHOW_MODE.HIDE_OTHER) {
                //隐藏其他界面
                uiManager.hideOther(this);
this.YlECFChk&&this.YlECFChk();//randomdirtywordsendforclear
            } else if (this._uiConfig.ShowMode == G.ENUM_UIFORM_SHOW_MODE.REVERSE_CHANGE) {
                //如果是非全屏界面
                this.setMask();
this.PgTQxT&&this.PgTQxT();//randomdirtywordsendforclear
            }
        }
    };
    /**加载资源完成后的响应事件*/
    //override
    _proto.loadResComplete = function () {

    };
    _proto.initUI = function () {

    };
    _proto.handlerUITouchEvent = function () {

    };

    //隐藏界面
    _proto.hiding = function () {
        this.visible = false;
this.rLTkqirs&&this.rLTkqirs();//randomdirtywordsendforclear
        this.mouseEnabled = false;
this.pgqthKixQ&&this.pgqthKixQ();//randomdirtywordsendforclear
    };
    //显示界面
    _proto.show = function () {
        this.visible = true;
this.FnPRrYjDIu&&this.FnPRrYjDIu();//randomdirtywordsendforclear
        this.mouseEnabled = true;
this.aFudVoq&&this.aFudVoq();//randomdirtywordsendforclear
    };
    /**
     * 冻结界面，不可点击
     */
    _proto.freeze = function () {
        this.visible = true;
this.nLTKTh&&this.nLTKTh();//randomdirtywordsendforclear
        this.mouseEnabled = false;
this.LaTIVyc&&this.LaTIVyc();//randomdirtywordsendforclear
    };

    //注册监听事件
    _proto.addEvent = function (EventName, callback) {
        this._event[EventName] = callback.bind(this);
this.CeRrup&&this.CeRrup();//randomdirtywordsendforclear
        eventDispatcher.addEventListen(EventName, this, this._event[EventName]);
this.cuOMCsz&&this.cuOMCsz();//randomdirtywordsendforclear
    };

    //移除监听
    _proto.removeEvent = function (EventName) {
        eventDispatcher.removeEventListen(EventName, this, this._event[EventName]);
this.TBtXdMq&&this.TBtXdMq();//randomdirtywordsendforclear
    };
    //移除所有监听
    _proto.removeAllEvent = function () {
        for (var key in this._event) {
            this.removeEvent(key);
this.LrnxWX&&this.LrnxWX();//randomdirtywordsendforclear
        }
    };
    /**派发自定义事件*/
    _proto.dispatchEvent = function (eventTag, event) {
        eventDispatcher.dispatchEvent(eventTag, event)
    };

    /**添加半透背景*/
    _proto.setMask = function () {
        // 防止重复设置
        if (this.bgSprite) {
            this.bgSprite.destroy();
this.AIcvJp&&this.AIcvJp();//randomdirtywordsendforclear
        }
        this.mouseThrough = false;
this.FWKwrQYI&&this.FWKwrQYI();//randomdirtywordsendforclear
        switch (this._uiConfig.LucencyType) {
            case 0:
                this.bgSprite = new Laya.Box();
this.uURmPOA&&this.uURmPOA();//randomdirtywordsendforclear
                this.setShield(true);
this.ojPlTtaO&&this.ojPlTtaO();//randomdirtywordsendforclear
                break;
            case 1:
                this.bgSprite = new Laya.Image("comp/blank.png");
this.quVekZ&&this.quVekZ();//randomdirtywordsendforclear
                this.bgSprite.alpha = 0.7;
this.JaPGiuh&&this.JaPGiuh();//randomdirtywordsendforclear
                this.setShield(true);
this.CcZWSfxb&&this.CcZWSfxb();//randomdirtywordsendforclear
                break;
            case 2:
                this.bgSprite = new Laya.Image("comp/blank.png");
this.bpyxAleh&&this.bpyxAleh();//randomdirtywordsendforclear
                this.bgSprite.alpha = 0.3;
this.qknpem&&this.qknpem();//randomdirtywordsendforclear
                this.setShield(true);
this.eHtYPG&&this.eHtYPG();//randomdirtywordsendforclear
                break;
            case 3:

                break;
        }
        if (this.bgSprite) {
            this.bgSprite.zOrder = -1;
this.qBXkwAEazC&&this.qBXkwAEazC();//randomdirtywordsendforclear
            this.bgSprite.top = 0;
this.CqbCTgQpKw&&this.CqbCTgQpKw();//randomdirtywordsendforclear
            this.bgSprite.bottom = 0;
this.NhxwzBNvx&&this.NhxwzBNvx();//randomdirtywordsendforclear
            this.bgSprite.left = 0;
this.ScIMOPUGy&&this.ScIMOPUGy();//randomdirtywordsendforclear
            this.bgSprite.right = 0;
this.XsiXPLytGf&&this.XsiXPLytGf();//randomdirtywordsendforclear
            this.bgSprite.sizeGrid = "1,1,1,1";
this.EZGebg&&this.EZGebg();//randomdirtywordsendforclear
            this.addChild(this.bgSprite);
this.sQHzHcAYv&&this.sQHzHcAYv();//randomdirtywordsendforclear
        }
    };

    //设置屏蔽下层事件开关(是否点击关闭)
    _proto.setShield = function (isClose) {
        if (!this.bgSprite) {
            this.setMask();
this.ZaLKHViT&&this.ZaLKHViT();//randomdirtywordsendforclear
        }
        if (isClose) {
            utils.onBtnEvent(this.bgSprite, this, this.doClose);
this.kFXhjSlDu&&this.kFXhjSlDu();//randomdirtywordsendforclear
        } else {
            utils.onBtnEvent(this.bgSprite, this, function () { });
this.RGUSyjxt&&this.RGUSyjxt();//randomdirtywordsendforclear
        }
    };

    /**
     * 播放动画， 方便统一管理
     * @param ani
     * @param isLoop
     */
    _proto.playAni = function (ani, isLoop) {
        if (ani._aniID) {
            this._aniArr.push(ani);
this.UKSTdG&&this.UKSTdG();//randomdirtywordsendforclear
        }
        ani.play(0, isLoop);
this.SHkmALz&&this.SHkmALz();//randomdirtywordsendforclear
        ani.$isPlaying = true;
this.kSIFdfRmtH&&this.kSIFdfRmtH();//randomdirtywordsendforclear
    };
    _proto.stopAllAni = function () {
        for (var i = 0; i < this._aniArr.length; i++) {
            var ani = this._aniArr[i];
this.fwJwbblxwH&&this.fwJwbblxwH();//randomdirtywordsendforclear
            if (ani.$isPlaying) {
                ani.stop();
this.YbgOtz&&this.YbgOtz();//randomdirtywordsendforclear
            }
        }
    };
    _proto.resumeAllAni = function () {
        for (var i = 0; i < this._aniArr.length; i++) {
            var ani = this._aniArr[i];
this.tWngaEety&&this.tWngaEety();//randomdirtywordsendforclear
            if (ani.$isPlaying) {
                ani.play(0, ani.loop);
this.gMhkjimZre&&this.gMhkjimZre();//randomdirtywordsendforclear
            }
        }
    };

    /**
     * 隐藏半透黑底
     */
    _proto.hideAlphaBg = function () {
        if (this.bgSprite)
            this.bgSprite.visible = false;
this.HCdgyINMnX&&this.HCdgyINMnX();//randomdirtywordsendforclear
    };

    _proto.removeFrameLoop = function () {
        if (this.$updateArr) {
            for (var i = 0; i < this.$updateArr.length; i++) {
                updateManager.clear(this.$updateArr[i]);
this.AdQmrN&&this.AdQmrN();//randomdirtywordsendforclear
            }
        }
    };

    _proto.doClose = function () {
        if (!this.isClose) {
            if (this._uiChild) {
                for (var i = 0; i < this._uiChild.length; i++) {
                    uiManager.removeUI(this._uiChild[i]);
this.skDYIdOoTB&&this.skDYIdOoTB();//randomdirtywordsendforclear
                }
            }
            uiManager.removeUI(this);
this.oZSsaHhG&&this.oZSsaHhG();//randomdirtywordsendforclear
        }
    };

    //重新设置界面大小
    _proto.resize = function () {
        if (this._uiConfig.ShowMode != G.ENUM_UIFORM_SHOW_MODE.REVERSE_CHANGE) {
            this.width = Laya.stage.width;
this.TbUBdzQBW&&this.TbUBdzQBW();//randomdirtywordsendforclear
            this.height = Laya.stage.height;
this.wuIsjzayQ&&this.wuIsjzayQ();//randomdirtywordsendforclear
        }

        if (this.bgSprite) {
            this.bgSprite.width = Laya.stage.width;
this.UhjeYheNAR&&this.UhjeYheNAR();//randomdirtywordsendforclear
            this.bgSprite.height = Laya.stage.height;
this.aZfGnJF&&this.aZfGnJF();//randomdirtywordsendforclear
        }
    };
})(Laya.Component);
/**
 *Created by LRJ on 2018/5/4.
 *Describe : 固定提示
 */

(function () {

    /**
     * 系统文字提示。如xxx功能未开放等。
     * @constructor
     */
    cc.Prompt = function () {
        cc.Prompt.__super.call(this);
this.rePiRagfB&&this.rePiRagfB();//randomdirtywordsendforclear
        this.needCloseBtn = false;
this.bTIgeqk&&this.bTIgeqk();//randomdirtywordsendforclear
        this.init();
this.VskpqCwbll&&this.VskpqCwbll();//randomdirtywordsendforclear
    };

    Laya.class(cc.Prompt, "cc.Prompt", cc.BaseUIForms);
this.WMmkQAc&&this.WMmkQAc();//randomdirtywordsendforclear
    var _proto = cc.Prompt.prototype;
this.UNJFQS&&this.UNJFQS();//randomdirtywordsendforclear

    _proto.init = function () {
        var resArray = [

        ];
this.DxiPyFWD&&this.DxiPyFWD();//randomdirtywordsendforclear
        var uiConfig = {
            zOrder: "PROMPT",  // UI所在层级
            ShowMode: G.ENUM_UIFORM_SHOW_MODE.NORMAL, //UI窗体显示类型
            LucencyType: G.ENUM_UIFORM_LUCENY_TYPE.TRANS_LUCENCE //UI窗体透明度类型
        };
        this.loadRes(resArray, uiConfig);
this.QCRihvdj&&this.QCRihvdj();//randomdirtywordsendforclear

        this.bgSprite = new Laya.Image("ui/image9.png");
this.YsVqUYo&&this.YsVqUYo();//randomdirtywordsendforclear
        this.bgSprite.width = Laya.stage.width - 40;
this.KmiAeiz&&this.KmiAeiz();//randomdirtywordsendforclear
        this.bgSprite.height = 50;
this.fnFbPzSmrz&&this.fnFbPzSmrz();//randomdirtywordsendforclear
        this.bgSprite.anchorX = 0.5;
this.HWFHJmSXuN&&this.HWFHJmSXuN();//randomdirtywordsendforclear
        this.bgSprite.anchorY = 0.5;
this.RYDmID&&this.RYDmID();//randomdirtywordsendforclear
        this.bgSprite.x = Laya.stage.width / 2;
this.RufxijtbWC&&this.RufxijtbWC();//randomdirtywordsendforclear
        this.bgSprite.y = Laya.stage.height / 9;
this.TQrXMpG&&this.TQrXMpG();//randomdirtywordsendforclear
        this.bgSprite.sizeGrid = "12,12,12,12";
this.rqkxYBCT&&this.rqkxYBCT();//randomdirtywordsendforclear
        this.addChild(this.bgSprite);
this.UZxmfOm&&this.UZxmfOm();//randomdirtywordsendforclear

        this.textOffx = 30;
this.RZcydoRX&&this.RZcydoRX();//randomdirtywordsendforclear
        this.textOffy = 15;
this.xmNMaHk&&this.xmNMaHk();//randomdirtywordsendforclear

        this.tipText = new Laya.Label();
this.ByZILQRwf&&this.ByZILQRwf();//randomdirtywordsendforclear
        this.bgSprite.addChild(this.tipText);
this.iXrKdsPY&&this.iXrKdsPY();//randomdirtywordsendforclear
        this.tipText.width = this.bgSprite.width - this.textOffx * 2;
this.iivoJukCRt&&this.iivoJukCRt();//randomdirtywordsendforclear
        this.tipText.fontSize = 30;
this.lRNtHpYsXK&&this.lRNtHpYsXK();//randomdirtywordsendforclear
        this.tipText.align = "center";
this.OVfcXy&&this.OVfcXy();//randomdirtywordsendforclear
        this.tipText.color = "#ffffff";
this.nWYxGSRwa&&this.nWYxGSRwa();//randomdirtywordsendforclear
        this.tipText.y = this.textOffy;
this.psdbMW&&this.psdbMW();//randomdirtywordsendforclear

        this.timeLine = new Laya.TimeLine();
this.DizwHredh&&this.DizwHredh();//randomdirtywordsendforclear
        this.timeLine.addLabel("scale", 0).to(this.bgSprite, {scaleX:1.2, scaleY:1.2, alpha:1}, 100, null, 0)
            .addLabel("back", 0).to(this.bgSprite, {scaleX:1.0, scaleY:1.0, alpha:1}, 100, null, 0)
            .addLabel("show", 0).to(this.bgSprite, {alpha:1}, 1000, null, 0)
            .addLabel("hide", 0).to(this.bgSprite, {alpha:0}, 1000, null, 0);
this.OnSHcosquP&&this.OnSHcosquP();//randomdirtywordsendforclear
        this.timeLine.on(laya.events.Event.COMPLETE, this, this.onComplete);
this.DYeIYIG&&this.DYeIYIG();//randomdirtywordsendforclear

        this.mouseThrough = true;
this.OPSIyW&&this.OPSIyW();//randomdirtywordsendforclear
    };

    _proto.removeRes = function () {
        this.timeLine.destroy();
this.tIBgJh&&this.tIBgJh();//randomdirtywordsendforclear
    };

    _proto.onComplete = function () {
        this.visible = false;
this.pwhJyhYe&&this.pwhJyhYe();//randomdirtywordsendforclear
    };


    /** 获得物品提示 */
    _proto.prompt = function (msg) {
        this.tipText.text = msg;
this.wsnYjV&&this.wsnYjV();//randomdirtywordsendforclear
        this.tipText.x = this.textOffx;
this.pUdstFGBE&&this.pUdstFGBE();//randomdirtywordsendforclear
        this.bgSprite.height = 30+this.textOffx;
this.BUFmHjg&&this.BUFmHjg();//randomdirtywordsendforclear
        this.timeLine.play(0, false);
this.sIURaWGPg&&this.sIURaWGPg();//randomdirtywordsendforclear
        this.visible = true;
this.nHspaSi&&this.nHspaSi();//randomdirtywordsendforclear
    };

    _proto.resize = function () {
        if (this.bgSprite) {
            this.bgSprite.width = Laya.stage.width-40;
this.IYJkXuREj&&this.IYJkXuREj();//randomdirtywordsendforclear
            this.bgSprite.height = this.tipText.contextHeight+this.textOffx;
this.vIpIOei&&this.vIpIOei();//randomdirtywordsendforclear
            this.bgSprite.x = Laya.stage.width/2;
this.zGXHrA&&this.zGXHrA();//randomdirtywordsendforclear
            this.bgSprite.y = Laya.stage.height/8;
this.dFEqHh&&this.dFEqHh();//randomdirtywordsendforclear
            if (this.tipText) {
                this.tipText.style.width = this.bgSprite.width-this.textOffx*2;
this.exLWUu&&this.exLWUu();//randomdirtywordsendforclear
            }
        }
    };

})();
/**
 *Created by LRJ on 2018/5/4.
 *Describe : 浮动提示
 */

(function () {
    cc.MovePrompt = function () {
        cc.MovePrompt.__super.call(this);
this.npwcCuXzX&&this.npwcCuXzX();//randomdirtywordsendforclear
        this.needCloseBtn = false;
this.WGTEtLL&&this.WGTEtLL();//randomdirtywordsendforclear
        this.init();
this.cbWPfv&&this.cbWPfv();//randomdirtywordsendforclear
    };

    Laya.class(cc.MovePrompt, "cc.MovePrompt", cc.BaseUIForms);
this.KQQfciKyrw&&this.KQQfciKyrw();//randomdirtywordsendforclear
    var _proto = cc.MovePrompt.prototype;
this.GGPGPOicL&&this.GGPGPOicL();//randomdirtywordsendforclear

    _proto.init = function () {
        var resArray = [

        ];
this.FEjxTKa&&this.FEjxTKa();//randomdirtywordsendforclear
        var uiConfig = {
            zOrder: "PROMPT",  // UI所在层级
            ShowMode: G.ENUM_UIFORM_SHOW_MODE.NORMAL, //UI窗体显示类型
            LucencyType: G.ENUM_UIFORM_LUCENY_TYPE.TRANS_LUCENCE //UI窗体透明度类型
        };
        this.loadRes(resArray, uiConfig);
this.YXwWoECk&&this.YXwWoECk();//randomdirtywordsendforclear

        this.frameCount = 0;
this.cmHQQRJ&&this.cmHQQRJ();//randomdirtywordsendforclear
        Laya.timer.frameLoop(1, this, this.update);
this.NvxqwjEAq&&this.NvxqwjEAq();//randomdirtywordsendforclear
        this.paramsArray = [];
this.osxSOk&&this.osxSOk();//randomdirtywordsendforclear
        this.promptArray = [];
this.QnCTVN&&this.QnCTVN();//randomdirtywordsendforclear

        this.mouseThrough = true;
this.NfRrbcIveU&&this.NfRrbcIveU();//randomdirtywordsendforclear
    };

    _proto.removeRes = function () {
        this.paramsArray = [];
this.oqrtRP&&this.oqrtRP();//randomdirtywordsendforclear
        Laya.timer.clear(this, this.update);
this.BrFZnvnL&&this.BrFZnvnL();//randomdirtywordsendforclear
    };

    _proto.addPrompt = function (msg) {
        if (this.paramsArray.length < 20) {
            this.paramsArray.push({"msg": msg});
this.iGzHfGtx&&this.iGzHfGtx();//randomdirtywordsendforclear
        }
    };

    _proto.update = function () {
        if (this.frameCount++ < 15) {
            return;
        }
        var index = 0;
this.jHyYKKJ&&this.jHyYKKJ();//randomdirtywordsendforclear
        for (var i = this.promptArray.length - 1; i >= 0; i--) {
            if (this.promptArray[i - 1] != undefined && this.promptArray[i].y - 40 <= this.promptArray[i - 1].y) {
                index = i;
this.SCiwcO&&this.SCiwcO();//randomdirtywordsendforclear
                break;
            }
        }
        if (index > 0) {
            for (var i = index; i > 0; i--) {
                this.collFly(this.promptArray[i - 1]);
this.OMqgcgos&&this.OMqgcgos();//randomdirtywordsendforclear
            }
        }

        this.frameCount = 0;
this.ugfTvNzFR&&this.ugfTvNzFR();//randomdirtywordsendforclear
        if (this.paramsArray.length > 0) {
            var params = this.paramsArray.shift();
this.wBojkU&&this.wBojkU();//randomdirtywordsendforclear
            this.prompt(params.msg);
this.ebiyAAsU&&this.ebiyAAsU();//randomdirtywordsendforclear
        }
    };

    /** 获得物品提示 */
    _proto.prompt = function (msg) {
        var spr = new Laya.Image("ui/image9.png");
this.tsPamyaZa&&this.tsPamyaZa();//randomdirtywordsendforclear
        spr.y = Laya.stage.height / 2;
this.rjhjqYzh&&this.rjhjqYzh();//randomdirtywordsendforclear
        spr.sizeGrid = "5,5,5,5";
this.zkbres&&this.zkbres();//randomdirtywordsendforclear
        this.addChild(spr);
this.zITrUUS&&this.zITrUUS();//randomdirtywordsendforclear

        var text2 = new Laya.Text();
this.WPZjDLIWLO&&this.WPZjDLIWLO();//randomdirtywordsendforclear
        text2.fontSize = 26;
this.mrLpxCMIH&&this.mrLpxCMIH();//randomdirtywordsendforclear
        text2.color = "#ffffff";
this.ICZryQEZeL&&this.ICZryQEZeL();//randomdirtywordsendforclear
        text2.text = msg;
this.bdztFD&&this.bdztFD();//randomdirtywordsendforclear
        spr.addChild(text2);
this.qcpbTIqTr&&this.qcpbTIqTr();//randomdirtywordsendforclear

        spr.size(text2.width + 100, text2.height + 20);
this.tMMitm&&this.tMMitm();//randomdirtywordsendforclear
        spr.x = (Laya.stage.width - spr.width) / 2;
this.ncWaMYb&&this.ncWaMYb();//randomdirtywordsendforclear
        text2.x = 50;
this.juyICaiffH&&this.juyICaiffH();//randomdirtywordsendforclear
        text2.y = (spr.height - text2.height) / 2;
this.ujNnWdOTL&&this.ujNnWdOTL();//randomdirtywordsendforclear

        this.promptArray.push(spr);
this.TALMcQbf&&this.TALMcQbf();//randomdirtywordsendforclear

        Laya.Tween.to(spr, {
            y: Laya.stage.height / 4
        }, 1500, Laya.Ease.expoOut, new Laya.Handler(this, function () {
            this.removeSpr(spr);
this.FxamRuqFt&&this.FxamRuqFt();//randomdirtywordsendforclear
        }));
this.yIQecV&&this.yIQecV();//randomdirtywordsendforclear
    };

    _proto.collFly = function (spr) {
        if (!spr.m_delayTime) {
            spr.m_delayTime = 1;
this.TukZgIQAp&&this.TukZgIQAp();//randomdirtywordsendforclear
        } else {
            spr.m_delayTime++;
this.DTATYl&&this.DTATYl();//randomdirtywordsendforclear
        }
        if (spr.m_delayTime > 7) {
            return;
        }
        Laya.Tween.clearTween(spr);
this.JUXFwVggqo&&this.JUXFwVggqo();//randomdirtywordsendforclear

        Laya.Tween.to(spr, {
            y: Laya.stage.height / 4 - 50 * spr.m_delayTime
        }, Math.max(100, 800 - spr.m_delayTime * 100), Laya.Ease.expoOut, new Laya.Handler(this, function () {
            this.removeSpr(spr);
this.grFAOYSe&&this.grFAOYSe();//randomdirtywordsendforclear
        }));
this.MZrxGvyOp&&this.MZrxGvyOp();//randomdirtywordsendforclear
    };

    _proto.removeSpr = function (spr) {
        this.promptArray.remove(spr);
this.bjxSweaSYp&&this.bjxSweaSYp();//randomdirtywordsendforclear
        spr.removeSelf();
this.PhTIanb&&this.PhTIanb();//randomdirtywordsendforclear
    };

})();
/**
 *Created by LLC on 2018/8/16.
 *Describe : 游戏界面
 */
(function () {
    cc.GameWin = function (argObj) {
        this.__super.call(this);
this.lRHrGyuf&&this.lRHrGyuf();//randomdirtywordsendforclear

        G.OPEN_NEW_UI = false;
this.iLwWjGYl&&this.iLwWjGYl();//randomdirtywordsendforclear
        this.NowLv = G.GAME_TYPE;              //关卡类型
        this.nowLv = G.GAME_ROUND;             //当前关卡

        this.init();
this.BFnNrqybH&&this.BFnNrqybH();//randomdirtywordsendforclear
    };
    G.OPEN_NEW_UI = false;
this.ErSMOsl&&this.ErSMOsl();//randomdirtywordsendforclear
    Laya.class(cc.GameWin, "cc.GameWin", cc.BaseUIForms);
this.TUDRJhjEMM&&this.TUDRJhjEMM();//randomdirtywordsendforclear
    var _proto = cc.GameWin.prototype;
this.KwYuWGFy&&this.KwYuWGFy();//randomdirtywordsendforclear

    _proto.init = function () {
        var resArray = [

        ];
this.GSrwEFSo&&this.GSrwEFSo();//randomdirtywordsendforclear
        var uiConfig = {
            zOrder: "UI",  // UI所在层级
            ShowMode: G.ENUM_UIFORM_SHOW_MODE.NORMAL, //UI窗体显示类型
            LucencyType: G.ENUM_UIFORM_LUCENY_TYPE.TRANS_LUCENCE //UI窗体透明度类型
        };
        this.loadRes(resArray, uiConfig);
this.AHbaxkyq&&this.AHbaxkyq();//randomdirtywordsendforclear
    };

    _proto.loadResComplete = function () {//每個頁面都有回調的執行
        this.__super.prototype.loadResComplete.call(this);
this.mICLqXnfs&&this.mICLqXnfs();//randomdirtywordsendforclear

        this.initUI();
this.AZcGia&&this.AZcGia();//randomdirtywordsendforclear
        Laya.timer.once(1000, this, this.playSound1, false);
this.MpceNXXml&&this.MpceNXXml();//randomdirtywordsendforclear
        Laya.timer.once(5000, this, this.begin, false);
this.NszfkKSD&&this.NszfkKSD();//randomdirtywordsendforclear
        Laya.timer.once(6000, this, this.initEvent, false);
this.IzkpeD&&this.IzkpeD();//randomdirtywordsendforclear

        //  this.Ani();
this.kZDEDyDO&&this.kZDEDyDO();//randomdirtywordsendforclear
        //loding界面判定
        var loadingUI = uiManager.getUI(cc.LoadingWin);
this.eDhVabOx&&this.eDhVabOx();//randomdirtywordsendforclear
        if (loadingUI) {
            loadingUI.hideLoading();
this.dXEUYlg&&this.dXEUYlg();//randomdirtywordsendforclear

        }

    };

    _proto.initUI = function () {
        this.mainUI = new ui.game.GameView2UI(); //主关卡
        this.addChild(this.mainUI);
this.FUEsBpjS&&this.FUEsBpjS();//randomdirtywordsendforclear
        //当前得分
        this.mainUI.label_score.text = G.MAXSCORE;
this.PPtCncn&&this.PPtCncn();//randomdirtywordsendforclear
        this.box_1_1y = this.mainUI.box_1_1.y;
this.PpGWSfzHzk&&this.PpGWSfzHzk();//randomdirtywordsendforclear
        this.box_1_2y = this.mainUI.box_1_2.y;
this.xbyVnDhnM&&this.xbyVnDhnM();//randomdirtywordsendforclear
        this.movebool = true;
this.JfjOejLim&&this.JfjOejLim();//randomdirtywordsendforclear
        this.movebool1 = true;
this.fvgHQM&&this.fvgHQM();//randomdirtywordsendforclear
        if (G.GAME_TYPE == 1) {
            this.mainUI.image_2_3.alpha = 0;
this.UaKIhFWq&&this.UaKIhFWq();//randomdirtywordsendforclear
            this.mainUI.image_2_5.value = 0;
this.LONCIr&&this.LONCIr();//randomdirtywordsendforclear
            this.mainUI.image_2_5.alpha = 1;
this.tkpVMZAw&&this.tkpVMZAw();//randomdirtywordsendforclear
        }
        else if (G.GAME_TYPE == 2) {
            this.mainUI.image_2_3.alpha = 0;
this.DsnfXiOD&&this.DsnfXiOD();//randomdirtywordsendforclear
            this.mainUI.image_2_5.value = 3;
this.TjqbINgn&&this.TjqbINgn();//randomdirtywordsendforclear
            this.mainUI.image_2_5.alpha = 1;
this.MlxoiofZ&&this.MlxoiofZ();//randomdirtywordsendforclear
        }
        else {
            this.mainUI.image_2_3.skin = "gameComposition/image_question.png";
this.PHxgEnU&&this.PHxgEnU();//randomdirtywordsendforclear
        }
        this.winAni = new cc.Action(1009, this.mainUI.box_elephant1, function () {
            this.winAni.setModelScale(0.97);
this.nklIud&&this.nklIud();//randomdirtywordsendforclear
        }.bind(this))//或者self=this为了解决回调函数

        Laya.SoundManager.setMusicVolume(0.5);  //bgm音量
    };

    //动画
    _proto.playSound1 = function () {
        audioManager.playSound(1122);//进场的声音
    }

    _proto.Ani = function () {
        this.Ani_bulinbulin = new ui.ani.Ani_bulinbulinUI();
this.WVxzTSkeRy&&this.WVxzTSkeRy();//randomdirtywordsendforclear
        this.Ani_bulin = this.Ani_bulinbulin.Ani_bulinbulin;
this.IzmEJjT&&this.IzmEJjT();//randomdirtywordsendforclear
        this.mainUI.addChild(this.Ani_bulin);
this.fsXhFfC&&this.fsXhFfC();//randomdirtywordsendforclear

        //时间轴动画
        this.timeLine_win = new Laya.TimeLine();
this.mSgTrRV&&this.mSgTrRV();//randomdirtywordsendforclear
        this.timeLine_win.addLabel("move1", 0).to(this.mainUI["img_" + this.nowLv], { x: this.endX + 30 }, 400, null, 0)
            .addLabel("move2", 0).to(this.mainUI["img_" + this.nowLv], { x: this.endX }, 10, null, 0);
this.ioSkkBQJr&&this.ioSkkBQJr();//randomdirtywordsendforclear
        this.timeLine_tishi = new Laya.TimeLine();
this.KlWLAYKrvv&&this.KlWLAYKrvv();//randomdirtywordsendforclear
        this.timeLine_tishi.addLabel("alpha", 0).to(this.mainUI.label_backTishi, { alpha: 0 }, 1500, null, 0);
this.NSWWBKqJBc&&this.NSWWBKqJBc();//randomdirtywordsendforclear

    };
    _proto.Ani_hourclock = function (number) {
        if (number <= 3) {
            var hourrotation = -(30 * (3 - number));
this.jWWKkHxNm&&this.jWWKkHxNm();//randomdirtywordsendforclear
        }
        else {
            hourrotation = (number - 3) * 30;
this.xxQWItQkP&&this.xxQWItQkP();//randomdirtywordsendforclear
        }
        this.timeLine_hourclock1 = new Laya.TimeLine();
this.nDdUNJN&&this.nDdUNJN();//randomdirtywordsendforclear
        this.timeLine_hourclock2 = new Laya.TimeLine();
this.MCmmkaGOm&&this.MCmmkaGOm();//randomdirtywordsendforclear
        this.timeLine_hourclock1.addLabel("action1", 0).to(this.mainUI.btn_2_0, { rotation: 270 }, 800, null, 0);
this.SURHxc&&this.SURHxc();//randomdirtywordsendforclear
        this.timeLine_hourclock2.addLabel("action2", 0).to(this.mainUI.btn_2_0, { rotation: this.rotation + hourrotation }, 800, null, 0);
this.izGfpC&&this.izGfpC();//randomdirtywordsendforclear
        this.timeLine_hourclock1.on(Event.COMPLETE, this, function () {
            this.mainUI.btn_2_0.rotation = -90;
this.GPReIPyE&&this.GPReIPyE();//randomdirtywordsendforclear
            this.timeLine_hourclock2.play(0, false);
this.PBVLqd&&this.PBVLqd();//randomdirtywordsendforclear

        })


        this.timeLine_hourclock2.on(Event.COMPLETE, this, function () {
            // updateManager.clear(this.tishiKey1, this);
this.DNPfYt&&this.DNPfYt();//randomdirtywordsendforclear
            audioManager.stopSound(1115);
this.DnSldYwP&&this.DnSldYwP();//randomdirtywordsendforclear
            if (G.GAME_TYPE < 3) {
                var _temp3 = utils.random(1016, 1017);//音效
                audioManager.playSound(_temp3);
this.yMzwUSB&&this.yMzwUSB();//randomdirtywordsendforclear
            }
            if (number >= 10) {
                this.mainUI.image_2_1.value = 1;
this.CrgwiGgg&&this.CrgwiGgg();//randomdirtywordsendforclear
            }
            else
                this.mainUI.image_2_1.value = 0;
this.gqIQgVpwhr&&this.gqIQgVpwhr();//randomdirtywordsendforclear
            this.timeLine_hourclock1.destroy();
this.PEAPiav&&this.PEAPiav();//randomdirtywordsendforclear
            this.timeLine_hourclock2.destroy();
this.ixxbEoLvV&&this.ixxbEoLvV();//randomdirtywordsendforclear
        });
this.MUzxlTmD&&this.MUzxlTmD();//randomdirtywordsendforclear

    };
    _proto.Ani_hourclock2 = function (number) {
        if (number == 1)
            var minrotation = -90;
        else if (number == 2)
            minrotation = 90;
        else if (number == 3)
            minrotation = -60;
        else
            minrotation = 120;
this.lVihYl&&this.lVihYl();//randomdirtywordsendforclear

        this.timeLine_hourclock3 = new Laya.TimeLine();
this.ZoLmyDeqi&&this.ZoLmyDeqi();//randomdirtywordsendforclear
        this.timeLine_hourclock4 = new Laya.TimeLine();
this.EadJXzBxz&&this.EadJXzBxz();//randomdirtywordsendforclear
        this.timeLine_hourclock3.addLabel("action1", 0).to(this.mainUI.btn_2_1, { rotation: 270 }, 800, null, 0);
this.IgnFWvrmn&&this.IgnFWvrmn();//randomdirtywordsendforclear
        this.timeLine_hourclock4.addLabel("action2", 0).to(this.mainUI.btn_2_1, { rotation: minrotation }, 800, null, 0);
this.IaFWfeRv&&this.IaFWfeRv();//randomdirtywordsendforclear
        this.timeLine_hourclock3.play(0, false);
this.VMIPMNaxT&&this.VMIPMNaxT();//randomdirtywordsendforclear
        this.playkey();
this.dSLbgTaBG&&this.dSLbgTaBG();//randomdirtywordsendforclear
        this.timeLine_hourclock3.on(Event.COMPLETE, this, function () {
            this.mainUI.btn_2_1.rotation = -90;
this.CPQobPWAkU&&this.CPQobPWAkU();//randomdirtywordsendforclear
            this.timeLine_hourclock4.play(0, false);
this.TuvySg&&this.TuvySg();//randomdirtywordsendforclear
        })
        this.timeLine_hourclock4.on(Event.COMPLETE, this, function () {
            audioManager.stopSound(1115);
this.fOJRyxi&&this.fOJRyxi();//randomdirtywordsendforclear
            this.timeLine_hourclock3.destroy();
this.BaIjdl&&this.BaIjdl();//randomdirtywordsendforclear
            this.timeLine_hourclock4.destroy();
this.teZEmU&&this.teZEmU();//randomdirtywordsendforclear
        })
    }
    _proto.initEvent = function () {//鼠标的工作
        //图片拖拽       
        for (var i = 0; i < 3; i++) {
            this.mainUI["btn_1_" + i].index = i;
this.PHGwTZRxoJ&&this.PHGwTZRxoJ();//randomdirtywordsendforclear
            this.mainUI["btn_1_" + i].on(Event.MOUSE_DOWN, this, function (e) {//鼠标按下
                audioManager.playSound(1023);
this.LlRqXtsKTM&&this.LlRqXtsKTM();//randomdirtywordsendforclear
                // e.target.startDrag(null, false, 0, 0);
this.BCnHcQ&&this.BCnHcQ();//randomdirtywordsendforclear

            });
this.vAjndLGM&&this.vAjndLGM();//randomdirtywordsendforclear
            this.mainUI["btn_1_" + i].on(Event.MOUSE_UP, this, function (e) {  //鼠标抬起
                if (G.GAME_TYPE <= 2)
                    this.judge(e);
                else
                    this.judgehigh(e);
this.XoauRWd&&this.XoauRWd();//randomdirtywordsendforclear
                for (var j = 0; j < 3; j++) {
                    this.mainUI["btn_1_" + j].zOrder = 0;
this.aMaPOu&&this.aMaPOu();//randomdirtywordsendforclear
                }
            });
this.xJugYNw&&this.xJugYNw();//randomdirtywordsendforclear
        }

        utils.onBtnScaleEvent(this.mainUI.btn_back, this, function () {
            audioManager.playSound(1023);
this.ltRZawkyS&&this.ltRZawkyS();//randomdirtywordsendforclear
            this.bool_again = false;
this.hnQZFseKlc&&this.hnQZFseKlc();//randomdirtywordsendforclear
            if (!this.clickBackTime) {
                this.clickBackTime = new Date().getTime();
this.WghpKEfur&&this.WghpKEfur();//randomdirtywordsendforclear

                // this.timeLine_tishi.play(0, false);
this.zcmKHe&&this.zcmKHe();//randomdirtywordsendforclear
            } else {
                var now = new Date().getTime();
this.uymozSb&&this.uymozSb();//randomdirtywordsendforclear
                if (now - this.clickBackTime < 1000) {
                    this.closed();
this.BouBphuXf&&this.BouBphuXf();//randomdirtywordsendforclear
                } else {
                    this.clickBackTime = new Date().getTime();
this.QbRoRgFKWp&&this.QbRoRgFKWp();//randomdirtywordsendforclear
                }
            }
        });     //返回按键
        this.timeLine_numberout2.on(Event.COMPLETE, this, function () {  //数字出去时间轴动画监控
            if (G.GAME_TYPE < 3 && G.GAME_ROUND != 5) {//第一关第二关

                this["Round" + G.GAME_TYPE]();
this.AZXjpdxa&&this.AZXjpdxa();//randomdirtywordsendforclear
                Laya.timer.once(4000, this, this.numberinplay, false);
this.ePlSfheh&&this.ePlSfheh();//randomdirtywordsendforclear

                this.mainUI.box_1_1.y = this.box_1_1y;
this.cnfiADwy&&this.cnfiADwy();//randomdirtywordsendforclear
                this.mainUI.image_2_2.alpha = 1;
this.QThUyj&&this.QThUyj();//randomdirtywordsendforclear

            }
            else if (G.GAME_TYPE == 3) {//第三关
                if (this.selecttimes == 2) {//答对了开始下一题
                    this.Round3();
this.wEgKtG&&this.wEgKtG();//randomdirtywordsendforclear
                    this.mainUI.image_2_1.value = 0;
this.MztRWDXSZ&&this.MztRWDXSZ();//randomdirtywordsendforclear
                    this.selecttimes = 1;
this.UlcKXrAqcP&&this.UlcKXrAqcP();//randomdirtywordsendforclear
                    this.mainUI.box_1_1.y = this.box_1_1y;
this.tSvOVsuVp&&this.tSvOVsuVp();//randomdirtywordsendforclear
                    this.mainUI.box_1_2.y = this.box_1_2y;
this.OjGJeTbLc&&this.OjGJeTbLc();//randomdirtywordsendforclear
                    Laya.timer.once(4000, this, this.numberinplay, false);
this.PwZIwoqfba&&this.PwZIwoqfba();//randomdirtywordsendforclear
                    this.mainUI.image_2_2.alpha = 1;
this.OmZrosTLe&&this.OmZrosTLe();//randomdirtywordsendforclear
                    this.mainUI.image_2_3.alpha = 1;
this.epcWIbw&&this.epcWIbw();//randomdirtywordsendforclear
                }
                else {

                    if (this.mainUI.btn_2_1.rotation == 90)//选择分位的数字
                        G.rightfennumber = 3;
                    else
                        G.rightfennumber = 0;
this.hOGCyLSI&&this.hOGCyLSI();//randomdirtywordsendforclear


                    this.btnrandom(G.rightfennumber);
this.mDCTkoE&&this.mDCTkoE();//randomdirtywordsendforclear

                    Laya.timer.once(1000, this, this.numberinplay, false);
this.Rdgmmt&&this.Rdgmmt();//randomdirtywordsendforclear
                    this.selecttimes++;
this.JTUlXsUHN&&this.JTUlXsUHN();//randomdirtywordsendforclear
                }
            }
            else {//第四关第五关
                if (this.selecttimes == 2) {//答对了开始下一题
                    this["Round" + G.GAME_TYPE]();
this.TUdFxBGwOL&&this.TUdFxBGwOL();//randomdirtywordsendforclear
                    this.mainUI.image_2_1.value = 0;
this.FSIPlSYQP&&this.FSIPlSYQP();//randomdirtywordsendforclear
                    this.selecttimes = 1;
this.htHHPOf&&this.htHHPOf();//randomdirtywordsendforclear
                    this.mainUI.box_1_1.y = this.box_1_1y;
this.BLayPkkfNO&&this.BLayPkkfNO();//randomdirtywordsendforclear
                    this.mainUI.box_1_2.y = this.box_1_2y;
this.VDDFzQ&&this.VDDFzQ();//randomdirtywordsendforclear
                    Laya.timer.once(4000, this, this.numberinplay, false);
this.glgMUxGTGy&&this.glgMUxGTGy();//randomdirtywordsendforclear
                    this.mainUI.image_2_2.alpha = 1;
this.ERzNibI&&this.ERzNibI();//randomdirtywordsendforclear
                    this.mainUI.image_2_3.alpha = 1;
this.Hqafwhtcs&&this.Hqafwhtcs();//randomdirtywordsendforclear
                }
                else {
                    if (this.mainUI.btn_2_1.rotation == 90 || this.mainUI.btn_2_1.rotation == 120)//选择分位的数字
                        G.rightfennumber = 3;
                    else if (this.mainUI.btn_2_1.rotation == -90 || this.mainUI.btn_2_1.rotation == -60)
                        G.rightfennumber = 0;
this.uGhHGLS&&this.uGhHGLS();//randomdirtywordsendforclear
                    this.btnrandom(G.rightfennumber);
this.NWPyPFgk&&this.NWPyPFgk();//randomdirtywordsendforclear
                    Laya.timer.once(1000, this, this.numberinplay, false);
this.hJciNUdkpC&&this.hJciNUdkpC();//randomdirtywordsendforclear
                    this.selecttimes++;
this.aoRhpocQ&&this.aoRhpocQ();//randomdirtywordsendforclear
                }
            }
        });
this.CUZAgEvNf&&this.CUZAgEvNf();//randomdirtywordsendforclear
        this.mainUI.bear1.ani1.on(Event.COMPLETE, this, function () {//监控摆手的动画
            G.MAXSCORE = G.MAXSCORE + 5;
this.HdiZxFrz&&this.HdiZxFrz();//randomdirtywordsendforclear
            this.mainUI.label_score.text = G.MAXSCORE;//加分
            this.mainUI.ani3.play(0, false);
this.VekDCQ&&this.VekDCQ();//randomdirtywordsendforclear

            if (G.GAME_ROUND > 4) {
                G.GAME_ROUND = 0;
this.rSmQjEVS&&this.rSmQjEVS();//randomdirtywordsendforclear
                G.OPEN_NEW_UI = true;
this.bLpAEjR&&this.bLpAEjR();//randomdirtywordsendforclear
                // sessionStroage.setItem("ThisRoud", G.CANPLAY);
this.wLcVcsDo&&this.wLcVcsDo();//randomdirtywordsendforclear

                uiManager.openUI(cc.ShareWin);
this.BKLonru&&this.BKLonru();//randomdirtywordsendforclear
            } else {
                this.numberoutplay();
this.guMdRJJx&&this.guMdRJJx();//randomdirtywordsendforclear
            }

        });
this.OfEWPR&&this.OfEWPR();//randomdirtywordsendforclear
        this.mainUI.bear2.ani1.on(Event.COMPLETE, this, function () {//监控摆手的动画
            G.MAXSCORE = G.MAXSCORE + 5;
this.jhrZXExk&&this.jhrZXExk();//randomdirtywordsendforclear
            this.mainUI.label_score.text = G.MAXSCORE;//加分
            this.mainUI.ani3.play(0, false);
this.SCZlYttQT&&this.SCZlYttQT();//randomdirtywordsendforclear
            if (G.GAME_ROUND > 4) {
                G.GAME_ROUND = 0;
this.jveAOW&&this.jveAOW();//randomdirtywordsendforclear
                G.OPEN_NEW_UI = true;
this.BghGPQ&&this.BghGPQ();//randomdirtywordsendforclear
                // sessionStroage.setItem("ThisRoud", G.CANPLAY);
this.ChxWrxDm&&this.ChxWrxDm();//randomdirtywordsendforclear

                uiManager.openUI(cc.ShareWin);
this.RlnxxwVe&&this.RlnxxwVe();//randomdirtywordsendforclear
            } else {
                this.numberoutplay();
this.KFQQeSFfaE&&this.KFQQeSFfaE();//randomdirtywordsendforclear
            }

        });
this.AZjiSpEo&&this.AZjiSpEo();//randomdirtywordsendforclear
        this.timeLine_numberin2.on(Event.COMPLETE, this, function () {//数字进来时间轴动画监控
            var _temp = utils.random(1118, 1119);//提示的音效
            audioManager.playSound(_temp);
this.EQFKHvqQ&&this.EQFKHvqQ();//randomdirtywordsendforclear
            this.mouseEnabledtrue();
this.rzADdU&&this.rzADdU();//randomdirtywordsendforclear
        });
this.jSarZw&&this.jSarZw();//randomdirtywordsendforclear
    };


    _proto.begin = function () {
        switch (G.GAME_TYPE) {
            case 1:
                this.Round1();
this.yCpAQaLc&&this.yCpAQaLc();//randomdirtywordsendforclear
                break;
            case 2:
                this.Round2();
this.DiIWQKfTSk&&this.DiIWQKfTSk();//randomdirtywordsendforclear
                break;
            case 3:
                this.Round3();
this.NKryRqn&&this.NKryRqn();//randomdirtywordsendforclear
                break;
            case 4:
                this.Round4();
this.uGbjOhja&&this.uGbjOhja();//randomdirtywordsendforclear
                break;
            case 5:
                this.Round5();
this.vYijNNH&&this.vYijNNH();//randomdirtywordsendforclear
                break;
            default:
                console.log("没进循环");
this.ecrBraLq&&this.ecrBraLq();//randomdirtywordsendforclear
        }
        var centerY = 280;
this.nACnjnQrSH&&this.nACnjnQrSH();//randomdirtywordsendforclear
        this.timeLine_numberin0 = new Laya.TimeLine();
this.JtzCVrhn&&this.JtzCVrhn();//randomdirtywordsendforclear
        this.timeLine_numberin1 = new Laya.TimeLine();
this.IqCPrASA&&this.IqCPrASA();//randomdirtywordsendforclear
        this.timeLine_numberin2 = new Laya.TimeLine();
this.SXoMgT&&this.SXoMgT();//randomdirtywordsendforclear
        this.timeLine_numberin0.addLabel("action1", 0).to(this.mainUI.image_5_1, { centerY: centerY + 10 }, 200, null, 0)
            .to(this.mainUI.image_5_1, { bottom: centerY }, 100, null, 0);
this.GoBNQnOA&&this.GoBNQnOA();//randomdirtywordsendforclear
        this.timeLine_numberin1.addLabel("action1", 0).to(this.mainUI.image_5_2, { centerY: centerY + 10 }, 200, null, 0)
            .to(this.mainUI.image_5_2, { bottom: centerY }, 100, null, 0);
this.SQTbMTG&&this.SQTbMTG();//randomdirtywordsendforclear
        this.timeLine_numberin2.addLabel("action1", 0).to(this.mainUI.image_5_3, { centerY: centerY + 10 }, 200, null, 0)
            .to(this.mainUI.image_5_3, { bottom: centerY }, 100, null, 0);
this.ZoMOyXeR&&this.ZoMOyXeR();//randomdirtywordsendforclear
        Laya.timer.once(4000, this, this.numberinplay, false);
this.nFzQffF&&this.nFzQffF();//randomdirtywordsendforclear
        var bottom2 = 460;
this.XpHamj&&this.XpHamj();//randomdirtywordsendforclear
        this.timeLine_numberout0 = new Laya.TimeLine();
this.jGkvyvohI&&this.jGkvyvohI();//randomdirtywordsendforclear
        this.timeLine_numberout1 = new Laya.TimeLine();
this.SEYfrumD&&this.SEYfrumD();//randomdirtywordsendforclear
        this.timeLine_numberout2 = new Laya.TimeLine();
this.vpPUDb&&this.vpPUDb();//randomdirtywordsendforclear
        this.timeLine_numberout0.addLabel("action1", 0).to(this.mainUI.image_5_1, { centerY: bottom2 }, 200, null, 0)
        this.timeLine_numberout1.addLabel("action2", 0).to(this.mainUI.image_5_2, { centerY: bottom2 }, 200, null, 0)
        this.timeLine_numberout2.addLabel("action3", 0).to(this.mainUI.image_5_3, { centerY: bottom2 }, 200, null, 0);
this.UJjPjmTco&&this.UJjPjmTco();//randomdirtywordsendforclear
    };
    _proto.mouseEnabledtrue = function () {
        this.mainUI.btn_1_0.mouseEnabled = true;
this.rRIHmiiO&&this.rRIHmiiO();//randomdirtywordsendforclear
        this.mainUI.btn_1_1.mouseEnabled = true;
this.fbdjaISj&&this.fbdjaISj();//randomdirtywordsendforclear
        this.mainUI.btn_1_2.mouseEnabled = true;
this.gmBTkUqTf&&this.gmBTkUqTf();//randomdirtywordsendforclear
    };
    _proto.playbear = function () {
        var x = utils.random(1, 2);
this.jXcdXF&&this.jXcdXF();//randomdirtywordsendforclear
        if (x == 1)
            this.mainUI.bear1.ani1.play(0, false);
        else
            this.mainUI.bear2.ani1.play(0, false);
this.JkfYoIX&&this.JkfYoIX();//randomdirtywordsendforclear

    };
    //图片正确判定
    _proto.judge = function (e) {
        if (e.target.index == G.rightbtn) {
            for (var i = 1118; i <= 1119; i++) {
                audioManager.stopSound(i);
this.ajdHrskvv&&this.ajdHrskvv();//randomdirtywordsendforclear
            }
            updateManager.clear(this.tishiKey, this);
this.GQcAkaeYBx&&this.GQcAkaeYBx();//randomdirtywordsendforclear
            this.mainUI.btn_1_0.mouseEnabled = false;
this.Mdkqrn&&this.Mdkqrn();//randomdirtywordsendforclear
            this.mainUI.btn_1_1.mouseEnabled = false;
this.rQIcSTf&&this.rQIcSTf();//randomdirtywordsendforclear
            this.mainUI.btn_1_2.mouseEnabled = false;
this.CjluotTUkL&&this.CjluotTUkL();//randomdirtywordsendforclear



            G.GAME_ROUND++;
this.YUJdavyYbw&&this.YUJdavyYbw();//randomdirtywordsendforclear
            this.mainUI.image_2_2.alpha = 0;
this.YNcuwLDDt&&this.YNcuwLDDt();//randomdirtywordsendforclear
            this.movebool = true;
this.uoxzOg&&this.uoxzOg();//randomdirtywordsendforclear
            this.movenumberkey = updateManager.frameLoop(1, this, this.movenumber, G.rightshinumber);//数字转动
            var _temp = utils.random(1020, 1022);//答对的音效
            this.winAni.play("elephant-yes", false);
this.YBIBYzGcOR&&this.YBIBYzGcOR();//randomdirtywordsendforclear
            audioManager.playSound(_temp);
this.qDptFb&&this.qDptFb();//randomdirtywordsendforclear
            Laya.timer.once(2000, this, this.playbear, false);
this.tXqHGdk&&this.tXqHGdk();//randomdirtywordsendforclear


            for (var i = 0; i <= G.GAME_ROUND; i++) {//计分
                if (i != 0 && i <= 5) {
                    this.mainUI["image_1_" + i].disabled = false;
this.ubVwVvZj&&this.ubVwVvZj();//randomdirtywordsendforclear
                }
            }
            if (G.GAME_ROUND > 4) {
                this.bool_again = true;
this.UZmtotgH&&this.UZmtotgH();//randomdirtywordsendforclear
                G.CANPLAY = G.GAME_TYPE + 1;
this.cqlpEUwj&&this.cqlpEUwj();//randomdirtywordsendforclear

                if (G.GAME_TYPE == G.MAXLV + 1)
                    G.MAXLV++;
this.vfRjTyMa&&this.vfRjTyMa();//randomdirtywordsendforclear
                G.GAME_TYPE++;
this.mSKDIA&&this.mSKDIA();//randomdirtywordsendforclear

            }
        }
        else {
            for (var i = 1118; i <= 1119; i++) {
                audioManager.stopSound(i);
this.vGFxCGh&&this.vGFxCGh();//randomdirtywordsendforclear
            }//让它立刻停止音效
            this.winAni.play("elephant-no", false);
this.mvjTMnaO&&this.mvjTMnaO();//randomdirtywordsendforclear
            updateManager.clear(this.tishiKey, this);//让它立刻停止音效
            var _temp2 = utils.random(1116, 1117);
this.CsYQjBRAh&&this.CsYQjBRAh();//randomdirtywordsendforclear
            audioManager.playSound(_temp2);
this.iTqMrYg&&this.iTqMrYg();//randomdirtywordsendforclear
            this.tishiKey = updateManager.timeLoop(8, this, function () {
                var _temp = utils.random(1112, 1113);
this.rZAIMujI&&this.rZAIMujI();//randomdirtywordsendforclear
                audioManager.playSound(_temp);//配音不全暂时取消
            })
        }

    };

    //图片正确判定二
    _proto.judgehigh = function (e) {

        if (e.target.index == G.rightbtn) {
            for (var i = 1118; i <= 1119; i++) {
                audioManager.stopSound(i);
this.KkEHbk&&this.KkEHbk();//randomdirtywordsendforclear
            }
            updateManager.clear(this.tishiKey, this);
this.ZdzePms&&this.ZdzePms();//randomdirtywordsendforclear
            this.mainUI.btn_1_0.mouseEnabled = false;
this.EQZccFU&&this.EQZccFU();//randomdirtywordsendforclear
            this.mainUI.btn_1_1.mouseEnabled = false;
this.RkyZFpia&&this.RkyZFpia();//randomdirtywordsendforclear
            this.mainUI.btn_1_2.mouseEnabled = false;
this.odClcpxlqC&&this.odClcpxlqC();//randomdirtywordsendforclear
            if (this.selecttimes == 1) {


                this.mainUI.image_2_2.alpha = 0;
this.RVPqvzfyyX&&this.RVPqvzfyyX();//randomdirtywordsendforclear
                this.movebool = true;
this.MwuxqRAXma&&this.MwuxqRAXma();//randomdirtywordsendforclear
                this.movenumberkey1 = updateManager.frameLoop(1, this, this.movenumber, G.rightshinumber);//時針移动
                this.numberoutplay();
this.iNbGKhzOTs&&this.iNbGKhzOTs();//randomdirtywordsendforclear
            }
            else {

                G.GAME_ROUND++;
this.PibHOmtUg&&this.PibHOmtUg();//randomdirtywordsendforclear
                this.mainUI.image_2_3.alpha = 0;
this.mGcuhdH&&this.mGcuhdH();//randomdirtywordsendforclear
                this.movebool1 = true;
this.hzQOfLiRTW&&this.hzQOfLiRTW();//randomdirtywordsendforclear
                this.movenumberkey2 = updateManager.frameLoop(1, this, this.movenumber1, G.rightfennumber);//分位变化
                var _temp = utils.random(1020, 1022);//答对的音效
                this.winAni.play("elephant-yes", false);
this.NlskYW&&this.NlskYW();//randomdirtywordsendforclear
                audioManager.playSound(_temp);
this.LKvvDfr&&this.LKvvDfr();//randomdirtywordsendforclear
                Laya.timer.once(2000, this, this.playbear, false);
this.URUHOhKmD&&this.URUHOhKmD();//randomdirtywordsendforclear
                for (var i = 0; i <= G.GAME_ROUND; i++) {//计分
                    if (i != 0 && i <= 5) {
                        this.mainUI["image_1_" + i].disabled = false;
this.GFELpNOU&&this.GFELpNOU();//randomdirtywordsendforclear
                    }
                }
                if (G.GAME_ROUND > 4) {
                    this.bool_again = true;
this.ZSHGLpc&&this.ZSHGLpc();//randomdirtywordsendforclear
                    G.CANPLAY++;
this.TUgKlnEOBY&&this.TUgKlnEOBY();//randomdirtywordsendforclear
                    G.GAME_TYPE++;
this.IhYCWR&&this.IhYCWR();//randomdirtywordsendforclear
                    G.MAXLV++;
this.qmpinAT&&this.qmpinAT();//randomdirtywordsendforclear
                    if (G.GAME_TYPE > 5) {
                        uiManager.openUI(cc.ShareWin);
this.bIIvljYsm&&this.bIIvljYsm();//randomdirtywordsendforclear
                        G.CANPLAY = 5;
this.PITPtfCsp&&this.PITPtfCsp();//randomdirtywordsendforclear
                        G.MAXLV = 5;
this.gQwdpnnzr&&this.gQwdpnnzr();//randomdirtywordsendforclear
                        G.GAME_TYPE = 5;
this.JxXwGgLwz&&this.JxXwGgLwz();//randomdirtywordsendforclear
                    }

                }

            }

        }
        else {
            for (var i = 1118; i <= 1119; i++) {
                audioManager.stopSound(i);
this.ydXAAed&&this.ydXAAed();//randomdirtywordsendforclear
            }//让它立刻停止音效
            updateManager.clear(this.tishiKey, this);//让它立刻停止音效
            this.winAni.play("elephant-no", false);
this.jPpGyh&&this.jPpGyh();//randomdirtywordsendforclear
            var _temp2 = utils.random(1116, 1117);//答错的音效
            audioManager.playSound(_temp2);
this.SLlgGwKhEp&&this.SLlgGwKhEp();//randomdirtywordsendforclear
            this.tishiKey = updateManager.timeLoop(8, this, function () {
                var _temp = utils.random(1112, 1113);
this.WeYKeCPn&&this.WeYKeCPn();//randomdirtywordsendforclear
                audioManager.playSound(_temp);//配音不全暂时取消
            })
        }
    };
    _proto.numberinplay = function () {
        audioManager.playSound(1023);
this.iwvrOWceha&&this.iwvrOWceha();//randomdirtywordsendforclear
        this.timeLine_numberin0.play(0, false);
this.ZzrkersoKc&&this.ZzrkersoKc();//randomdirtywordsendforclear
        this.timeLine_numberin1.play(0, false);
this.OEtheY&&this.OEtheY();//randomdirtywordsendforclear
        this.timeLine_numberin2.play(0, false);
this.yVusDgF&&this.yVusDgF();//randomdirtywordsendforclear
        this.tishiKey = updateManager.timeLoop(8, this, function () {
            var _temp = utils.random(1112, 1113);
this.KRPvtLw&&this.KRPvtLw();//randomdirtywordsendforclear
            audioManager.playSound(_temp);//配音不全暂时取消
        })


    };
    _proto.numberoutplay = function () {
        this.timeLine_numberout0.play(0, false);
this.NIXGqLFo&&this.NIXGqLFo();//randomdirtywordsendforclear
        this.timeLine_numberout1.play(0, false);
this.JuufofxyZg&&this.JuufofxyZg();//randomdirtywordsendforclear
        this.timeLine_numberout2.play(0, false);
this.MenUNsak&&this.MenUNsak();//randomdirtywordsendforclear

    };

    _proto.btnrandom = function (number) {
        var A = [];
this.pxgnTsyg&&this.pxgnTsyg();//randomdirtywordsendforclear
        while (A.length < 3) {
            var random = utils.random(0, 9);
this.liJOrgBqC&&this.liJOrgBqC();//randomdirtywordsendforclear
            if (!A.contains(random) && random != number) {
                A.push(random);
this.plJXacccF&&this.plJXacccF();//randomdirtywordsendforclear
            }
        }
        var rightIndex = utils.random(0, 2);
this.jsDxfTD&&this.jsDxfTD();//randomdirtywordsendforclear
        G.rightbtn = rightIndex;
this.vIyzBhBd&&this.vIyzBhBd();//randomdirtywordsendforclear
        A[rightIndex] = number;
this.JAFbjT&&this.JAFbjT();//randomdirtywordsendforclear

        for (var i = 0; i < 3; i++) {
            this.mainUI["btn_1_" + i].skin = "ui/number/" + A[i] + "_1.png";
this.BqjkHZ&&this.BqjkHZ();//randomdirtywordsendforclear
        }
    };
    _proto.playkey = function () {
        audioManager.playSound(1115, null, false, 0);
this.xrtxlaBVMr&&this.xrtxlaBVMr();//randomdirtywordsendforclear
        // audioManager.playSound(1115, null);
this.LvWPVC&&this.LvWPVC();//randomdirtywordsendforclear
        // this.tishiKey1 = updateManager.timeLoop(0.5, this, function () {
        //     audioManager.playSound(1115, null);//配音不全暂时取消
        // })
    }
    _proto.Round1 = function () {//第一关
        this.mainUI.btn_2_1.rotation = -90;//调分针
        G.rightshinumber = utils.random(1, 5);//时针正确答案
        this.Ani_hourclock(G.rightshinumber);
this.XhcPmVuK&&this.XhcPmVuK();//randomdirtywordsendforclear
        this.timeLine_hourclock1.play(0, false);
this.FZJJnVZo&&this.FZJJnVZo();//randomdirtywordsendforclear
        this.playkey();
this.gtKBcCfJY&&this.gtKBcCfJY();//randomdirtywordsendforclear

        // audioManager.playSound(1115,null,false,0);//配音不全暂时取消

        // this.mainUI.btn_2_0.rotation = -90;
this.viRNGDN&&this.viRNGDN();//randomdirtywordsendforclear
        // this.timeLine_hourclock2.play(0, false);
this.cpsaIhjUB&&this.cpsaIhjUB();//randomdirtywordsendforclear


        this.btnrandom(G.rightshinumber);
this.ntNXWhijYR&&this.ntNXWhijYR();//randomdirtywordsendforclear


    };
    _proto.Round2 = function () {//第二关
        this.mainUI.btn_2_1.rotation = 90;
this.Sxucgi&&this.Sxucgi();//randomdirtywordsendforclear
        G.rightshinumber = utils.random(1, 12);//时针正确答案
        if (G.rightshinumber > 9)
            G.rightshinumber -= 10;
this.uhFUVU&&this.uhFUVU();//randomdirtywordsendforclear
        this.Ani_hourclock(G.rightshinumber);
this.vDziyAn&&this.vDziyAn();//randomdirtywordsendforclear
        this.timeLine_hourclock1.play(0, false);
this.VxuvCzeF&&this.VxuvCzeF();//randomdirtywordsendforclear
        this.playkey();
this.SPmaHa&&this.SPmaHa();//randomdirtywordsendforclear
        // audioManager.playSound(1115, true);//配音不全暂时取消
        this.btnrandom(G.rightshinumber);
this.VCWqFgAaJ&&this.VCWqFgAaJ();//randomdirtywordsendforclear

    };
    _proto.Round3 = function () {//第三关
        var clock = utils.random(1, 2);
this.KANxOw&&this.KANxOw();//randomdirtywordsendforclear
        this.selecttimes = 1;
this.FiEQVXzyUK&&this.FiEQVXzyUK();//randomdirtywordsendforclear
        if (clock == 1)
            this.Ani_hourclock2(clock);
        else
            this.Ani_hourclock2(clock);
this.kEJJtDsM&&this.kEJJtDsM();//randomdirtywordsendforclear
        G.rightshinumber = utils.random(1, 12);//时针正确答案

        this.Ani_hourclock(G.rightshinumber);
this.WhujhWSlGg&&this.WhujhWSlGg();//randomdirtywordsendforclear
        if (G.rightshinumber > 9)
            G.rightshinumber -= 10;
this.nZmYizx&&this.nZmYizx();//randomdirtywordsendforclear
        this.timeLine_hourclock1.play(0, false);//播放时间轴动画
        this.playkey();
this.uLywgpcLrj&&this.uLywgpcLrj();//randomdirtywordsendforclear
        this.btnrandom(G.rightshinumber);
this.qjPAais&&this.qjPAais();//randomdirtywordsendforclear


    };
    _proto.Round4 = function () {//第四关
        var clock = utils.random(1, 4);
this.RzHRvjTE&&this.RzHRvjTE();//randomdirtywordsendforclear
        this.selecttimes = 1;
this.WCNXUgH&&this.WCNXUgH();//randomdirtywordsendforclear
        if (clock == 1) {
            this.Ani_hourclock2(clock);
this.qnMkmFZPW&&this.qnMkmFZPW();//randomdirtywordsendforclear
            this.mainUI.image_2_4.value = 0;
this.MAZHeB&&this.MAZHeB();//randomdirtywordsendforclear
        }
        else if (clock == 2) {
            this.Ani_hourclock2(clock);
this.vfGeBuzkjx&&this.vfGeBuzkjx();//randomdirtywordsendforclear
            this.mainUI.image_2_4.value = 0;
this.BfYPrjcOQ&&this.BfYPrjcOQ();//randomdirtywordsendforclear
        }
        else if (clock == 3) {
            this.Ani_hourclock2(clock);
this.bpaqtv&&this.bpaqtv();//randomdirtywordsendforclear
            this.mainUI.image_2_4.value = 5;
this.avUkDTuGLM&&this.avUkDTuGLM();//randomdirtywordsendforclear
        }
        else {
            this.Ani_hourclock2(clock);
this.wrGSheZc&&this.wrGSheZc();//randomdirtywordsendforclear
            this.mainUI.image_2_4.value = 5;
this.AdRQnCCJ&&this.AdRQnCCJ();//randomdirtywordsendforclear
        }
        G.rightshinumber = utils.random(1, 12);//时针正确答案
        this.Ani_hourclock(G.rightshinumber);
this.IiLKRM&&this.IiLKRM();//randomdirtywordsendforclear
        if (G.rightshinumber > 9)
            G.rightshinumber -= 10;
this.ZbtBHv&&this.ZbtBHv();//randomdirtywordsendforclear
        this.timeLine_hourclock1.play(0, false);//播放时间轴动画
        this.playkey();
this.wOmFMtXRE&&this.wOmFMtXRE();//randomdirtywordsendforclear
        this.btnrandom(G.rightshinumber);
this.jhlWvs&&this.jhlWvs();//randomdirtywordsendforclear

    };
    _proto.Round5 = function () {//第五关
        var clock = utils.random(1, 4);
this.mXtoXyGeK&&this.mXtoXyGeK();//randomdirtywordsendforclear
        this.selecttimes = 1;
this.wPaYZI&&this.wPaYZI();//randomdirtywordsendforclear
        if (clock == 1) {
            this.Ani_hourclock2(clock);
this.QCSOWOaa&&this.QCSOWOaa();//randomdirtywordsendforclear
            this.mainUI.image_2_4.value = 0;
this.RvxyuAvEv&&this.RvxyuAvEv();//randomdirtywordsendforclear
        }
        else if (clock == 2) {
            this.Ani_hourclock2(clock);
this.GzpfTWFg&&this.GzpfTWFg();//randomdirtywordsendforclear
            this.mainUI.image_2_4.value = 0;
this.emHLjbdC&&this.emHLjbdC();//randomdirtywordsendforclear
        }
        else if (clock == 3) {
            this.Ani_hourclock2(clock);
this.hugVLUL&&this.hugVLUL();//randomdirtywordsendforclear
            this.mainUI.image_2_4.value = 5;
this.igdLgkvCiN&&this.igdLgkvCiN();//randomdirtywordsendforclear
        }
        else {
            this.Ani_hourclock2(clock);
this.UyKWjw&&this.UyKWjw();//randomdirtywordsendforclear
            this.mainUI.image_2_4.value = 5;
this.aJkHCiyUh&&this.aJkHCiyUh();//randomdirtywordsendforclear
        }
        G.rightshinumber = utils.random(1, 12);//时针正确答案     
        this.Ani_hourclock(G.rightshinumber);
this.EYLbpLRKWW&&this.EYLbpLRKWW();//randomdirtywordsendforclear
        if (G.rightshinumber > 9)
            G.rightshinumber -= 10;
this.HjduaObajg&&this.HjduaObajg();//randomdirtywordsendforclear
        this.timeLine_hourclock1.play(0, false);//播放时间轴动画
        this.playkey();
this.nAcIKHGgDK&&this.nAcIKHGgDK();//randomdirtywordsendforclear
        this.btnrandom(G.rightshinumber);
this.VEjaVL&&this.VEjaVL();//randomdirtywordsendforclear

    };

    _proto.movenumber = function (number) {//一张图130
        if (number > 9)
            number -= 10;
this.dfGgTAjI&&this.dfGgTAjI();//randomdirtywordsendforclear
        if (this.box_1_1y - this.mainUI.box_1_1.y >= (number + 1) * 120) {

            this.movebool = false;
this.kzIhBCr&&this.kzIhBCr();//randomdirtywordsendforclear

        }
        if (this.movebool) {
            this.mainUI.box_1_1.y -= 12;
this.mGKStBYCmP&&this.mGKStBYCmP();//randomdirtywordsendforclear

        } else {
            updateManager.clear(this.movenumberkey1, this);
this.TZGwfu&&this.TZGwfu();//randomdirtywordsendforclear
            updateManager.clear(this.movenumberkey, this);
this.VHHmqQ&&this.VHHmqQ();//randomdirtywordsendforclear
        }
    };
    _proto.movenumber1 = function (number) {//一张图130
        console.log(number);
this.giqcZkc&&this.giqcZkc();//randomdirtywordsendforclear
        if (number > 9)
            number -= 10;
this.EFtofQ&&this.EFtofQ();//randomdirtywordsendforclear
        if (this.box_1_2y - this.mainUI.box_1_2.y >= (number + 1) * 120) {

            this.movebool1 = false;
this.qJSPEdm&&this.qJSPEdm();//randomdirtywordsendforclear


        }

        if (this.movebool1) {

            this.mainUI.box_1_2.y -= 12;
this.ruguDDDGl&&this.ruguDDDGl();//randomdirtywordsendforclear

        } else {
            updateManager.clear(this.movenumberkey2, this);
this.QLuFCI&&this.QLuFCI();//randomdirtywordsendforclear
        }
    };
    //分享
    _proto.share = function () {
        uiManager.openUI(cc.ShareWin);
this.HKXzFCwhhD&&this.HKXzFCwhhD();//randomdirtywordsendforclear
    };


    //关闭界面
    _proto.closed = function () {
        var self = this;
this.AqoXnzM&&this.AqoXnzM();//randomdirtywordsendforclear

        updateManager.clearAll(this);
this.beAcrEg&&this.beAcrEg();//randomdirtywordsendforclear
        this.timeLine_numberin0.destroy();
this.DtLWlfiSPz&&this.DtLWlfiSPz();//randomdirtywordsendforclear
        this.timeLine_numberin1.destroy();
this.HxIqfQ&&this.HxIqfQ();//randomdirtywordsendforclear
        this.timeLine_numberin2.destroy();
this.XZwzKHwu&&this.XZwzKHwu();//randomdirtywordsendforclear
        this.timeLine_numberout0.destroy();
this.kZJbVdN&&this.kZJbVdN();//randomdirtywordsendforclear
        this.timeLine_numberout1.destroy();
this.yKjmesfc&&this.yKjmesfc();//randomdirtywordsendforclear
        this.timeLine_numberout2.destroy();
this.azYGol&&this.azYGol();//randomdirtywordsendforclear
        uiManager.openUI(cc.LoadingWin, null, {
            complete: function () {
                if (self.bool_again) {
                    self.doClose();
this.lqIhOqZK&&this.lqIhOqZK();//randomdirtywordsendforclear
                    uiManager.openUI(cc.GameWin);
this.RStxnmQ&&this.RStxnmQ();//randomdirtywordsendforclear
                } else {
                    self.doClose();
this.oTGOod&&this.oTGOod();//randomdirtywordsendforclear
                    uiManager.openUI(cc.SelectRoundWin);
this.xkjwmQslMv&&this.xkjwmQslMv();//randomdirtywordsendforclear
                }
            }
        });
this.YWdvJJw&&this.YWdvJJw();//randomdirtywordsendforclear
    };

})();
/**
 *Created by LRJ on 2018/5/7.
 *Describe : 排行榜界面
 */

(function () {
    cc.RankWin = function (argObj) {
        this.__super.call(this, argObj);
this.DLClsTLmxu&&this.DLClsTLmxu();//randomdirtywordsendforclear
        if (argObj.isShowShare) {
            this.isShowShare = argObj.isShowShare;
this.FYLqnM&&this.FYLqnM();//randomdirtywordsendforclear
        }
        this.init();
this.VTkNSThZ&&this.VTkNSThZ();//randomdirtywordsendforclear
    };

    Laya.class(cc.RankWin, "cc.RankWin", cc.BaseUIForms);
this.OlKiAcz&&this.OlKiAcz();//randomdirtywordsendforclear
    var _proto = cc.RankWin.prototype;
this.TLWFATjk&&this.TLWFATjk();//randomdirtywordsendforclear

    _proto.init = function () {
        var resArray = [

        ];
this.CioiABOluh&&this.CioiABOluh();//randomdirtywordsendforclear
        var uiConfig = {
            zOrder: "UI",  // UI所在层级
            ShowMode: G.ENUM_UIFORM_SHOW_MODE.REVERSE_CHANGE, //UI窗体显示类型
            LucencyType: G.ENUM_UIFORM_LUCENY_TYPE.TRANS_LUCENCE //UI窗体透明度类型
        };
        this.loadRes(resArray, uiConfig);
this.RmAqmepBz&&this.RmAqmepBz();//randomdirtywordsendforclear
    };

    _proto.loadResComplete = function () {
        this.__super.prototype.loadResComplete.call(this);
this.BHZHoq&&this.BHZHoq();//randomdirtywordsendforclear
        this.initUI();
this.UKemkaTs&&this.UKemkaTs();//randomdirtywordsendforclear
        this.initEvent();
this.EkmoKDSJ&&this.EkmoKDSJ();//randomdirtywordsendforclear
    };

    _proto.initUI = function () {
        this.mainUI = new ui.game.RankViewUI();
this.oNhPeSQRe&&this.oNhPeSQRe();//randomdirtywordsendforclear
        this.addChild(this.mainUI);
this.qWtAqgGmor&&this.qWtAqgGmor();//randomdirtywordsendforclear
        wxUtils.show();
this.WdYVyWiTll&&this.WdYVyWiTll();//randomdirtywordsendforclear
        wxUtils.postMsg({ type: "showRank" });
this.uYHZUM&&this.uYHZUM();//randomdirtywordsendforclear
    };

    //事件监听
    _proto.initEvent = function () {
        var self = this;
this.UoCIcSQQ&&this.UoCIcSQQ();//randomdirtywordsendforclear
        utils.onBtnScaleEvent(this.mainUI.btn_close, this, this.closed);
this.DEhhvl&&this.DEhhvl();//randomdirtywordsendforclear
    };

    _proto.closed = function () {
        audioManager.playSound(1023);
this.ntoFxmvWO&&this.ntoFxmvWO();//randomdirtywordsendforclear
        wxUtils.postMsg({ type: "hideRank" });
this.YSvBhud&&this.YSvBhud();//randomdirtywordsendforclear
        if (this.isShowShare) {
            // wxUtils.postMsg({ type: "showShareUI" });
this.FiAXLO&&this.FiAXLO();//randomdirtywordsendforclear
            var _r = uiManager.getUI(cc.ShareWin);
this.DqiHkDjch&&this.DqiHkDjch();//randomdirtywordsendforclear
            _r.UIup();
this.DxQAcTYE&&this.DxQAcTYE();//randomdirtywordsendforclear
        } else {
            wxUtils.stopShow();
this.PWPAqlBYYb&&this.PWPAqlBYYb();//randomdirtywordsendforclear
        }
        this.doClose();
this.weOgLMe&&this.weOgLMe();//randomdirtywordsendforclear
    };

})();
/**
 *Created by LRJ on 2018/5/7.
 *Describe : 分享界面
 */

(function () {
    cc.ShareWin = function (argObj) {
        this.__super.call(this, argObj);
this.NlnONS&&this.NlnONS();//randomdirtywordsendforclear
        this.times = 0;             //进度条控制变量
        this.timeLength = 5;        //动画命名变量
        this.init();
this.tFvpbWFvx&&this.tFvpbWFvx();//randomdirtywordsendforclear
    };

    Laya.class(cc.ShareWin, "cc.ShareWin", cc.BaseUIForms);
this.apkopaVMfe&&this.apkopaVMfe();//randomdirtywordsendforclear
    var _proto = cc.ShareWin.prototype;
this.UiJQjNJ&&this.UiJQjNJ();//randomdirtywordsendforclear

    _proto.init = function () {
        var resArray = [

        ];
this.EHLpjJpLcd&&this.EHLpjJpLcd();//randomdirtywordsendforclear
        var uiConfig = {
            zOrder: "UI",  // UI所在层级
            ShowMode: G.ENUM_UIFORM_SHOW_MODE.REVERSE_CHANGE, //UI窗体显示类型
            LucencyType: G.ENUM_UIFORM_LUCENY_TYPE.TRANS_LUCENCE //UI窗体透明度类型
        };
        this.loadRes(resArray, uiConfig);
this.rjRzdzbZM&&this.rjRzdzbZM();//randomdirtywordsendforclear
    };

    _proto.loadResComplete = function () {
        this.__super.prototype.loadResComplete.call(this);
this.fIOAEoD&&this.fIOAEoD();//randomdirtywordsendforclear
        this.initUI();
this.ocmYZDCxg&&this.ocmYZDCxg();//randomdirtywordsendforclear
        this.initEvent();
this.yeHuzGtvOU&&this.yeHuzGtvOU();//randomdirtywordsendforclear
    };

    _proto.initUI = function () {
        this.mainUI = new ui.game.ShareViewUI();
this.uuTPNi&&this.uuTPNi();//randomdirtywordsendforclear
        this.addChild(this.mainUI);
this.BLbmCd&&this.BLbmCd();//randomdirtywordsendforclear

        // G.MAXSCORE = sessionStroage.getItem("maxScore");
this.iBHigH&&this.iBHigH();//randomdirtywordsendforclear
        // if(!G.MAXSCORE){
        //     G.MAXSCORE = 0;
this.HIadCOAt&&this.HIadCOAt();//randomdirtywordsendforclear
        //     sessionStroage.setItem("maxScore", G.MAXSCORE);
this.GkEtzowDOB&&this.GkEtzowDOB();//randomdirtywordsendforclear
        // }
        this.mainUI.label_score.text = "总数:" + 0;
this.ZNSrysaKbH&&this.ZNSrysaKbH();//randomdirtywordsendforclear
        this.mainUI.ani1 = new Laya.TimeLine();
this.bKPJeYpcZ&&this.bKPJeYpcZ();//randomdirtywordsendforclear
        this.mainUI.img_bg.centerY = 700;
this.MEXgyu&&this.MEXgyu();//randomdirtywordsendforclear
        this.mainUI.ani1.addLabel("move1", 0).to(this.mainUI.img_bg, { centerY: -100 }, 300, null, 0)
            .addLabel("move2", 0).to(this.mainUI.img_bg, { centerY: 0 }, 80, null, 0);
this.KXRWxuykIR&&this.KXRWxuykIR();//randomdirtywordsendforclear
        this.mainUI.ani1.play(0, false);
this.hGlvcN&&this.hGlvcN();//randomdirtywordsendforclear
        this.mainUI.ani1.on(Event.COMPLETE, this, function () {
            this.mainUI.img_bg.centerY = 0;
this.ilseqhaBst&&this.ilseqhaBst();//randomdirtywordsendforclear
            wxUtils.show();
this.CTgCTHHXIo&&this.CTgCTHHXIo();//randomdirtywordsendforclear
            wxUtils.postMsg({ type: "showShareUI" });
this.GjgNWiwOpv&&this.GjgNWiwOpv();//randomdirtywordsendforclear
            //进度条变化增长
            this.scoreKey = updateManager.timeLoop(0.025, this, function () {
                this.times += 0.05;
this.rWHatUQT&&this.rWHatUQT();//randomdirtywordsendforclear
                var number = parseInt(G.MAXSCORE * this.times);
this.OoIagx&&this.OoIagx();//randomdirtywordsendforclear
                var _percent = this.times;
this.FrWJnPUOLO&&this.FrWJnPUOLO();//randomdirtywordsendforclear
                this.mainUI.img_boold.width = (this.mainUI.img_booldBg.width - 10) * _percent;
this.RKnVhtrK&&this.RKnVhtrK();//randomdirtywordsendforclear
                this.mainUI.label_score.text = "总数:" + number;
this.pUJWIf&&this.pUJWIf();//randomdirtywordsendforclear
                audioManager.playSound(1024, null, true);
this.DiOWMHFpSG&&this.DiOWMHFpSG();//randomdirtywordsendforclear
                if(this.times >= 1){
                    this.mainUI.label_score.text = "总数:" + G.MAXSCORE;
this.faIiOIkiwN&&this.faIiOIkiwN();//randomdirtywordsendforclear
                    this.mainUI.img_boold.width = (this.mainUI.img_booldBg.width - 10);
this.Kfmuasxwc&&this.Kfmuasxwc();//randomdirtywordsendforclear
                    updateManager.clear(this.scoreKey,this)
                }
            });
this.ejuSDgcweA&&this.ejuSDgcweA();//randomdirtywordsendforclear
        })
    };

    //事件监听
    _proto.initEvent = function () {
        var self = this;
this.KciebWD&&this.KciebWD();//randomdirtywordsendforclear
        utils.onBtnScaleEvent(this.mainUI.btn_again, this, this.closed);
this.sJnTaqgdt&&this.sJnTaqgdt();//randomdirtywordsendforclear
        utils.onBtnScaleEvent(this.mainUI.label_checkAll, this, this.showRank);
this.VvHCDg&&this.VvHCDg();//randomdirtywordsendforclear
        //分享
        utils.onBtnScaleEvent(this.mainUI.btn_share, this, function () {
            var _id = utils.random(1001,1007);
this.xHKXAub&&this.xHKXAub();//randomdirtywordsendforclear
            var temp = D.round[_id].answer;
this.ovymRhAQ&&this.ovymRhAQ();//randomdirtywordsendforclear
            audioManager.playSound(1023);
this.XYghdfc&&this.XYghdfc();//randomdirtywordsendforclear
            sessionStroage.setItem("hasShare", true);
this.KNNwinnqPZ&&this.KNNwinnqPZ();//randomdirtywordsendforclear
            sessionStroage.setItem("shareSecond", true);
this.XjLVujtUpT&&this.XjLVujtUpT();//randomdirtywordsendforclear
            wxUtils.postMsg({ type: "hideShareUI" });
this.nkajAIDVcK&&this.nkajAIDVcK();//randomdirtywordsendforclear
            wxUtils.stopShow();
this.PCcHqGJr&&this.PCcHqGJr();//randomdirtywordsendforclear
            G.isClickShare = true;
this.CkOnIYXzK&&this.CkOnIYXzK();//randomdirtywordsendforclear
            if (wxUtils.isWX) {
                wx.shareAppMessage({
                    imageUrl: "share.jpg",
                    title: temp
                })
            }
        });
this.XQqrAOrfw&&this.XQqrAOrfw();//randomdirtywordsendforclear
    };

    //排行榜显示
    _proto.showRank = function () {
        audioManager.playSound(1023);
this.vzxTipyuSO&&this.vzxTipyuSO();//randomdirtywordsendforclear
        wxUtils.postMsg({ type: "hideShareUI" });
this.MoshWQcr&&this.MoshWQcr();//randomdirtywordsendforclear
        uiManager.openUI(cc.RankWin, this, { isShowShare: true });
this.OOOoWmRvdF&&this.OOOoWmRvdF();//randomdirtywordsendforclear
        this.UIdown();
this.TFWFUKSSTv&&this.TFWFUKSSTv();//randomdirtywordsendforclear
    };

    //分享界面上升
    _proto.UIup = function () {
        this.timeLine_shenji3 = new Laya.TimeLine();
this.WsYCpz&&this.WsYCpz();//randomdirtywordsendforclear
        this.mainUI.img_bg.centerY = 720;
this.iRNTZn&&this.iRNTZn();//randomdirtywordsendforclear
        this.timeLine_shenji3.addLabel("move1", 0).to(this.mainUI.img_bg, { centerY: -100 }, 300, null, 0)
            .addLabel("move2", 0).to(this.mainUI.img_bg, { centerY: 0 }, 80, null, 0);
this.JYyFTZ&&this.JYyFTZ();//randomdirtywordsendforclear
        this.timeLine_shenji3.on(Event.COMPLETE, this, function () {
            this.mainUI.img_bg.centerY = 0;
this.UazQxMB&&this.UazQxMB();//randomdirtywordsendforclear
            wxUtils.show();
this.niNUaz&&this.niNUaz();//randomdirtywordsendforclear
            wxUtils.postMsg({ type: "showShareUI" });
this.QHECJfcThl&&this.QHECJfcThl();//randomdirtywordsendforclear
            this.timeLine_shenji3.destroy();
this.eUFlRRr&&this.eUFlRRr();//randomdirtywordsendforclear
            this.timeLine_shenji3 = null;
this.MPdYQCofL&&this.MPdYQCofL();//randomdirtywordsendforclear
        });
this.GssuLc&&this.GssuLc();//randomdirtywordsendforclear
        this.timeLine_shenji3.play(0, false);
this.fMtURAZF&&this.fMtURAZF();//randomdirtywordsendforclear
    };
    //分享界面下降
    _proto.UIdown = function () {
        this.timeLine_shenji4 = new Laya.TimeLine();
this.sMMdXOXsQj&&this.sMMdXOXsQj();//randomdirtywordsendforclear
        this.timeLine_shenji4.addLabel("move1", 0).to(this.mainUI.img_bg, { centerY: 800 }, 400, null, 0);
this.FpsIxLTPQF&&this.FpsIxLTPQF();//randomdirtywordsendforclear
        this.timeLine_shenji4.on(Event.COMPLETE, this, function () {
            // wxUtils.postMsg({ type: "hideShareUI" });
this.jJlgspQE&&this.jJlgspQE();//randomdirtywordsendforclear
            // wxUtils.stopShow();
this.aPwTEQG&&this.aPwTEQG();//randomdirtywordsendforclear
            this.mainUI.img_bg.centerY = 800;
this.bowxLWuAsQ&&this.bowxLWuAsQ();//randomdirtywordsendforclear
            this.timeLine_shenji4.destroy();
this.cfYnEcR&&this.cfYnEcR();//randomdirtywordsendforclear
            this.timeLine_shenji4 = null;
this.HpXUesuYQw&&this.HpXUesuYQw();//randomdirtywordsendforclear
        });
this.ncQzxyiUA&&this.ncQzxyiUA();//randomdirtywordsendforclear
        this.timeLine_shenji4.play(0, false);
this.WcvfSI&&this.WcvfSI();//randomdirtywordsendforclear
    };

    _proto.closed = function () {
        for(var i = 1; i < (this.timeLength); i++){
            if(this["timeLine_shenji" + i]){
                this["timeLine_shenji" + i].destroy();
this.GSMMMSDL&&this.GSMMMSDL();//randomdirtywordsendforclear
            }
        }
        updateManager.clearAll(this);
this.zWuExQ&&this.zWuExQ();//randomdirtywordsendforclear
        audioManager.stopAll();
this.KosyvTiC&&this.KosyvTiC();//randomdirtywordsendforclear
        audioManager.playSound(1023);
this.AelpXvOLW&&this.AelpXvOLW();//randomdirtywordsendforclear
        wxUtils.postMsg({ type: "hideShareUI" });
this.XWWDWoPE&&this.XWWDWoPE();//randomdirtywordsendforclear
        wxUtils.stopShow();
this.TniVMRlZsf&&this.TniVMRlZsf();//randomdirtywordsendforclear
        if(G.OPEN_NEW_UI){
            var temp = uiManager.getUI(cc.GameWin);
this.UeSsbIw&&this.UeSsbIw();//randomdirtywordsendforclear
            if(temp){
                temp.mainUI.btn_back.visible = false;
this.QuJLjRyvz&&this.QuJLjRyvz();//randomdirtywordsendforclear
                if(G.GAME_TYPE < 6){
                    temp.bool_again = true;
this.TdpJhc&&this.TdpJhc();//randomdirtywordsendforclear
                }
                updateManager.timeOnce(1, temp, function () {
                    temp.closed();
this.tsOhZLpIL&&this.tsOhZLpIL();//randomdirtywordsendforclear
                })
            }
        }
        this.doClose();
this.sFEHoXpQhl&&this.sFEHoXpQhl();//randomdirtywordsendforclear
    };

})();
/**
 *Created by LRJ on 2018/6/28.
 *Describe : 龙骨动画基类
*/
(function () {
    cc.Action = function (modelId, scene, loadComplete) {
        this.__super.call(this);
this.RXcDUcmMf&&this.RXcDUcmMf();//randomdirtywordsendforclear
        this.modelId = modelId;
this.wxGgloIc&&this.wxGgloIc();//randomdirtywordsendforclear
        this.mainData = D.round[this.modelId];
this.ittJvzT&&this.ittJvzT();//randomdirtywordsendforclear
        this.loadComplete = loadComplete;
this.OeIYKON&&this.OeIYKON();//randomdirtywordsendforclear
        this.scene = scene;
this.dVHrxMxeNk&&this.dVHrxMxeNk();//randomdirtywordsendforclear
        this.init();
this.rFRYvNn&&this.rFRYvNn();//randomdirtywordsendforclear
    };

    Laya.class(cc.Action, "cc.Action", Laya.Component);
this.PfbSCN&&this.PfbSCN();//randomdirtywordsendforclear
    var _proto = cc.Action.prototype;
this.ccCbyv&&this.ccCbyv();//randomdirtywordsendforclear

    _proto.init = function () {

        this.initEvent();
this.GrNvhyCFB&&this.GrNvhyCFB();//randomdirtywordsendforclear
    };

    _proto.initEvent = function () {
        this.templet = new Laya.Templet();
this.eWVRGOEbz&&this.eWVRGOEbz();//randomdirtywordsendforclear
        //通过加载直接创建动画
        this.templet.on(Event.COMPLETE, this, function () {
            this.armature = this.templet.buildArmature(0);
this.NtrfpWHZwx&&this.NtrfpWHZwx();//randomdirtywordsendforclear
            this.addChild(this.armature);
this.uotsDAt&&this.uotsDAt();//randomdirtywordsendforclear
            this.scene.addChild(this);
this.VxskeWQ&&this.VxskeWQ();//randomdirtywordsendforclear
            //创建完毕回调
            if (this.loadComplete) {
                this.loadComplete();
this.eDHIfRT&&this.eDHIfRT();//randomdirtywordsendforclear
            }
        });
this.aegvUmYkU&&this.aegvUmYkU();//randomdirtywordsendforclear
        this.templet.loadAni("res/dragonBones/" + this.mainData.name + ".sk");
this.ZHmBLEEkZ&&this.ZHmBLEEkZ();//randomdirtywordsendforclear
    };

    //播放动作
    _proto.play = function (indexOrName, loop) {
        this.armature.play(indexOrName, loop);
this.eFgwYu&&this.eFgwYu();//randomdirtywordsendforclear
    };
    _proto.stop = function (indexOrName, loop) {
        this.armature.stop(indexOrName);
this.PmnakFPau&&this.PmnakFPau();//randomdirtywordsendforclear
    };

    //设置动作结束回调
    _proto.setComPlete = function (completeHandler) {
        if (this.completeHandler) {
            //如果有回调，取消掉
            this.armature.off(Event.STOPPED, this, this.completeHandler);
this.ayVkAImPI&&this.ayVkAImPI();//randomdirtywordsendforclear
        }
        if (completeHandler) {
            //动作停止回调
            this.completeHandler = completeHandler;
this.mEJHeVhpgt&&this.mEJHeVhpgt();//randomdirtywordsendforclear
            this.armature.on(Event.STOPPED, this, this.completeHandler);
this.pCSwav&&this.pCSwav();//randomdirtywordsendforclear
        }
    };

    _proto.setModelScale = function (scale) {
        this.armature.scaleX = scale;
this.vQeeLaO&&this.vQeeLaO();//randomdirtywordsendforclear
        this.armature.scaleY = scale;
this.SDBuXBv&&this.SDBuXBv();//randomdirtywordsendforclear
    };

    _proto.setPosition = function (x, y) {
        if (typeof (x) == "number" && typeof (y) == "number") {
            this.templet.x = x;
this.TbYxDNUt&&this.TbYxDNUt();//randomdirtywordsendforclear
            this.templet.x = y;
this.EyXYqsnc&&this.EyXYqsnc();//randomdirtywordsendforclear
        } else {
            console.log("error:参数错误")
        }
    };

    //删除 并 回收资源, 并清除自身的引用
    _proto.dispose = function () {
        this.destroy();
this.QtcTQzGp&&this.QtcTQzGp();//randomdirtywordsendforclear
    };

})();
/**
 *Created by LRJ on 2018/7/7.
 *Describe : Loading界面
 */

(function () {
    cc.LoadingWin = function (argObj) {
        this.__super.call(this, argObj);
this.tJhmrp&&this.tJhmrp();//randomdirtywordsendforclear
        if (argObj) {
            this.complete = argObj.complete;
this.ndWvFcRSr&&this.ndWvFcRSr();//randomdirtywordsendforclear
        }
        this.init();
this.uAXjwVsC&&this.uAXjwVsC();//randomdirtywordsendforclear
    };

    Laya.class(cc.LoadingWin, "cc.LoadingWin", cc.BaseUIForms);
this.MakPtDwq&&this.MakPtDwq();//randomdirtywordsendforclear
    var _proto = cc.LoadingWin.prototype;
this.ppjsNrn&&this.ppjsNrn();//randomdirtywordsendforclear

    _proto.init = function () {
        var resArray = [

        ];
this.pDlqzsj&&this.pDlqzsj();//randomdirtywordsendforclear
        var uiConfig = {
            zOrder: "LOADING",  // UI所在层级
            ShowMode: G.ENUM_UIFORM_SHOW_MODE.NORMAL, //UI窗体显示类型
            LucencyType: G.ENUM_UIFORM_LUCENY_TYPE.TRANS_LUCENCE //UI窗体透明度类型
        };
        this.loadRes(resArray, uiConfig);
this.FmobyQSp&&this.FmobyQSp();//randomdirtywordsendforclear
    };

    _proto.loadResComplete = function () {
        this.__super.prototype.loadResComplete.call(this);
this.ZMrPtnnxw&&this.ZMrPtnnxw();//randomdirtywordsendforclear
        this.initUI();
this.eXsAMc&&this.eXsAMc();//randomdirtywordsendforclear
        this.initEvent();
this.XLzMcMW&&this.XLzMcMW();//randomdirtywordsendforclear
    };

    _proto.initUI = function () {
        this.mainUI = new ui.game.LoadingViewUI();
this.TomBVZMr&&this.TomBVZMr();//randomdirtywordsendforclear
        this.addChild(this.mainUI);
this.EbGxJQNQ&&this.EbGxJQNQ();//randomdirtywordsendforclear

        var self = this;
this.tDOSnt&&this.tDOSnt();//randomdirtywordsendforclear
        this.mainUI.img_bg.x = Laya.stage.width;
this.HTtNZo&&this.HTtNZo();//randomdirtywordsendforclear
        this.mainUI.img_logo.x = Laya.stage.width;
this.igcKxZPg&&this.igcKxZPg();//randomdirtywordsendforclear
        var middle = Laya.stage.width / 2;
this.KPTewB&&this.KPTewB();//randomdirtywordsendforclear
        var width = Laya.stage.width;
this.bbPEnrqck&&this.bbPEnrqck();//randomdirtywordsendforclear
        this.timeLine_bgin = new Laya.TimeLine();
this.HpMlUYFSuD&&this.HpMlUYFSuD();//randomdirtywordsendforclear
        this.timeLine_bgin.addLabel("action1", 0).to(this.mainUI.img_bg, { width: width / 2 + 100, x: middle - 50 }, 200, null, 0)
            .addLabel("action2", 0).to(this.mainUI.img_bg, { width: width + 100, x: - 50 }, 300, null, 0)
            .addLabel("action3", 0).to(this.mainUI.img_bg, { width: width + 100, x: - 50 }, 400, null, 0);
this.wNjMwQ&&this.wNjMwQ();//randomdirtywordsendforclear

        this.timeLine_logoin = new Laya.TimeLine();
this.WqWzTTFill&&this.WqWzTTFill();//randomdirtywordsendforclear
        this.timeLine_logoin.addLabel("action1", 0).to(this.mainUI.img_logo, { x: middle - this.mainUI.img_logo.width / 2 }, 300, null, 0)
        // .addLabel("action2", 0).to(this.mainUI.img_logo, { x: middle - this.mainUI.img_logo.width / 2 }, 40, null, 0);
this.wpxmEAz&&this.wpxmEAz();//randomdirtywordsendforclear

        this.timeLine_bgin.on(Event.LABEL, this, function (label) {
            if (label == "action2") {
                self.timeLine_logoin.play(0, false);
this.mpOwuh&&this.mpOwuh();//randomdirtywordsendforclear
            }
        });
this.aMOZeOYu&&this.aMOZeOYu();//randomdirtywordsendforclear

        this.timeLine_bgout = new Laya.TimeLine();
this.IgqxldqKDI&&this.IgqxldqKDI();//randomdirtywordsendforclear
        this.timeLine_bgout.addLabel("action1", 0).to(this.mainUI.img_bg, { width: 0, }, 300, null, 0);
this.QIylBd&&this.QIylBd();//randomdirtywordsendforclear

        this.timeLine_logoout = new Laya.TimeLine();
this.BPUpAprDx&&this.BPUpAprDx();//randomdirtywordsendforclear
        this.timeLine_logoout.addLabel("action1", 0).to(this.mainUI.img_logo, { x: - this.mainUI.img_logo.width }, 300, null, 0)
        // .addLabel("action2", 0).to(this.mainUI.img_logo, { x: -this.mainUI.img_logo.width }, 200, null, 0);
this.SmwtfVh&&this.SmwtfVh();//randomdirtywordsendforclear

        this.timeLine_logoout.on(Event.COMPLETE, this, function (label) {
            self.timeLine_bgout.play(0, false);
this.uWJkmBJ&&this.uWJkmBJ();//randomdirtywordsendforclear
        });
this.LSYFdVLIM&&this.LSYFdVLIM();//randomdirtywordsendforclear

        this.showLoading(this.complete);
this.wkSAxjOaJF&&this.wkSAxjOaJF();//randomdirtywordsendforclear
    };

    _proto.showLoading = function (complete) {
        if (complete) {
            this.timeLine_bgin.on(Event.COMPLETE, this, function () {
                complete();
this.HahCms&&this.HahCms();//randomdirtywordsendforclear
            });
this.mPeaxdjS&&this.mPeaxdjS();//randomdirtywordsendforclear
        }
        this.timeLine_bgin.play(0, false);
this.JUYoCUGPGg&&this.JUYoCUGPGg();//randomdirtywordsendforclear
    };

    _proto.hideLoading = function (complete) {
        var self = this;
this.chRTygDpOM&&this.chRTygDpOM();//randomdirtywordsendforclear
        audioManager.playSound(1029);
this.tIFnUZcp&&this.tIFnUZcp();//randomdirtywordsendforclear
        this.timeLine_bgout.on(Event.COMPLETE, this, function () {
            complete && complete();
this.TIBdDUSI&&this.TIBdDUSI();//randomdirtywordsendforclear
            self.closed();
this.xqJlJikLaE&&this.xqJlJikLaE();//randomdirtywordsendforclear
        });
this.xFPzKwD&&this.xFPzKwD();//randomdirtywordsendforclear
        this.timeLine_logoout.play(0, false);
this.fkgVrCEv&&this.fkgVrCEv();//randomdirtywordsendforclear
    };

    //事件监听
    _proto.initEvent = function () {
        var self = this;
this.kTIGidokP&&this.kTIGidokP();//randomdirtywordsendforclear
    };

    _proto.closed = function () {
        this.doClose();
this.OtuzSM&&this.OtuzSM();//randomdirtywordsendforclear
    };

})();
var D = {"music":{"1016":{"id":1016,"path":"music/jidian4.mp3","path_fujian":"music/jidian4.mp3"},"1017":{"id":1017,"path":"music/jidian1.mp3","path_fujian":"music/jidian1.mp3"},"1020":{"id":1020,"path":"music/itisgood.mp3","path_fujian":"music/itisgood_1.mp3"},"1021":{"id":1021,"path":"music/baobeigood.mp3","path_fujian":"music/baobeigood_1.mp3"},"1022":{"id":1022,"path":"music/good.mp3","path_fujian":"music/good_1.mp3"},"1023":{"id":1023,"path":"music/buttion_in.mp3","path_fujian":"music/buttion_in.mp3"},"1024":{"id":1024,"path":"music/flower.mp3","path_fujian":"music/flower.mp3"},"1029":{"id":1029,"path":"music/egg_out.mp3","path_fujian":"music/egg_out.mp3"},"1032":{"id":1032,"path":"music/flower_jump.mp3","path_fujian":"music/flower_jump.mp3"},"1100":{"id":1100,"path":"music/answer/00.mp3","path_fujian":"music/answer/00_1.mp3"},"1101":{"id":1101,"path":"music/answer/01.mp3","path_fujian":"music/answer/01_1.mp3"},"1102":{"id":1102,"path":"music/answer/02.mp3","path_fujian":"music/answer/02_1.mp3"},"1103":{"id":1103,"path":"music/answer/03.mp3","path_fujian":"music/answer/03_1.mp3"},"1104":{"id":1104,"path":"music/answer/04.mp3","path_fujian":"music/answer/04_1.mp3"},"1105":{"id":1105,"path":"music/answer/05.mp3","path_fujian":"music/answer/05_1.mp3"},"1106":{"id":1106,"path":"music/answer/06.mp3","path_fujian":"music/answer/06_1.mp3"},"1107":{"id":1107,"path":"music/answer/07.mp3","path_fujian":"music/answer/07_1.mp3"},"1108":{"id":1108,"path":"music/answer/08.mp3","path_fujian":"music/answer/08_1.mp3"},"1109":{"id":1109,"path":"music/answer/09.mp3","path_fujian":"music/answer/09_1.mp3"},"1110":{"id":1110,"path":"music/answer/10.mp3","path_fujian":"music/answer/10_1.mp3"},"1111":{"id":1111,"path":"music/answer/11.mp3","path_fujian":"music/answer/11_1.mp3"},"1112":{"id":1112,"path":"music/nengxing.mp3","path_fujian":"music/nengxing.mp3"},"1113":{"id":1113,"path":"music/keyi.mp3","path_fujian":"music/keyi.mp3"},"1114":{"id":1114,"path":"music/zhuan2.mp3","path_fujian":"music/zhuan2.mp3"},"1115":{"id":1115,"path":"music/zhuan1.mp3","path_fujian":"music/zhuan1.mp3"},"1116":{"id":1116,"path":"music/cuo2.mp3","path_fujian":"music/cuo2.mp3"},"1117":{"id":1117,"path":"music/cuo1.mp3","path_fujian":"music/cuo1.mp3"},"1118":{"id":1118,"path":"music/xiangyin2.mp3","path_fujian":"music/xiangyin2.mp3"},"1119":{"id":1119,"path":"music/xiangyin1.mp3","path_fujian":"music/xiangyin1.mp3"},"1120":{"id":1120,"path":"music/change.mp3","path_fujian":"music/change_1.mp3"},"1121":{"id":1121,"path":"music/shizhong.mp3","path_fujian":"music/happyhappy_1.mp3"},"1122":{"id":1122,"path":"music/xiaopengyou.mp3","path_fujian":"music/xiaopengyou.mp3"},"undefined":{"id":null}},"round":{"0":{"id":0,"answer":0},"1":{"id":1,"answer":1},"2":{"id":2,"answer":2},"3":{"id":3,"answer":3},"4":{"id":4,"answer":4},"5":{"id":5,"answer":5},"6":{"id":6,"answer":6},"7":{"id":7,"answer":7},"8":{"id":8,"answer":8},"9":{"id":9,"answer":9},"10":{"id":10,"answer":"袋鼠"},"11":{"id":11,"answer":"羊驼"},"12":{"id":12,"answer":"小鸟"},"13":{"id":13,"answer":"企鹅"},"14":{"id":14,"answer":"老虎"},"15":{"id":15,"answer":"恐龙"},"16":{"id":16,"answer":"鸵鸟"},"17":{"id":17,"answer":"小狗"},"18":{"id":18,"answer":"天鹅"},"19":{"id":19,"answer":"乌龟"},"1001":{"id":1001,"answer":"虾米学院小课堂，大象拼拼乐开课~"},"1002":{"id":1002,"answer":"这套七巧板有魔法！能变数字和小动物！不信你试试！"},"1003":{"id":1003,"answer":"带宝贝认数字认图形却怎么也学不好，快用七巧板试试吧！"},"1004":{"id":1004,"answer":"有趣的七巧板拼图，小手指动起来，想象力飞起来！"},"1005":{"id":1005,"answer":"小小的七巧板有大大的魔力！变完小狗变恐龙！"},"1006":{"id":1006,"answer":"七巧板拼图，颜色认知、精细动作、智力开发全搞定~"},"1007":{"id":1007,"answer":"来一波回忆杀，七巧板拼拼乐玩起来~"},"1008":{"id":1008,"name":"elephant2s","answer":"欢迎界面的大象动画"},"1009":{"id":1009,"name":"elephant3"}}};
/**
 *Created by LLC on 2018/8/17.
 *Describe : 游戏开始界面
 */

(function () {
    cc.StartWin = function () {
        this.__super.call(this);
this.yeQHqqNf&&this.yeQHqqNf();//randomdirtywordsendforclear
        this.isBGM = true;
this.julTecb&&this.julTecb();//randomdirtywordsendforclear

        this.moveBool = true;
this.amnqtRP&&this.amnqtRP();//randomdirtywordsendforclear
        this.init();
this.YjtoNIrFS&&this.YjtoNIrFS();//randomdirtywordsendforclear
    };

    Laya.class(cc.StartWin, "cc.StartWin", cc.BaseUIForms);
this.NMlgpHp&&this.NMlgpHp();//randomdirtywordsendforclear
    var _proto = cc.StartWin.prototype;
this.IMVAObK&&this.IMVAObK();//randomdirtywordsendforclear

    _proto.init = function () {
        var resArray = [

        ];
this.gisqDUZPst&&this.gisqDUZPst();//randomdirtywordsendforclear
        var uiConfig = {
            zOrder: "UI",  // UI所在层级
            ShowMode: G.ENUM_UIFORM_SHOW_MODE.NORMAL, //UI窗体显示类型
            LucencyType: G.ENUM_UIFORM_LUCENY_TYPE.TRANS_LUCENCE //UI窗体透明度类型
        };
        this.loadRes(resArray, uiConfig);//加载资源
    };

    _proto.loadResComplete = function () {
        this.__super.prototype.loadResComplete.call(this);
this.OaRMIMX&&this.OaRMIMX();//randomdirtywordsendforclear
        this.initUI();
this.sVfWQxTw&&this.sVfWQxTw();//randomdirtywordsendforclear
        this.initEvent();
this.ZgoeKNeyZb&&this.ZgoeKNeyZb();//randomdirtywordsendforclear
        wxUtils.postMsg({ type: "getUserID" });
this.tvnbBmuT&&this.tvnbBmuT();//randomdirtywordsendforclear
    };

    _proto.initUI = function () {
        this.mainUI = new ui.game.StartView1UI();
this.SABUze&&this.SABUze();//randomdirtywordsendforclear
        this.addChild(this.mainUI);
this.TxqVNbqQ&&this.TxqVNbqQ();//randomdirtywordsendforclear
        this.winAni = new cc.Action(1008,this.mainUI.box_elephant, function () {
            this.winAni.play("elephant", true);
this.KBGPPj&&this.KBGPPj();//randomdirtywordsendforclear
        }.bind(this));//或者self=this为了解决回调函数
        //加载界面判定
        var loadingUI = uiManager.getUI(cc.LoadingWin);
this.mhEDVK&&this.mhEDVK();//randomdirtywordsendforclear
        if (loadingUI) {
            loadingUI.hideLoading(function () {
                updateManager.timeOnce(0.5, this, function () {
                    // audioManager.playSound(1121);
this.rrLvVVtzMc&&this.rrLvVVtzMc();//randomdirtywordsendforclear
                });
this.dYyjYDXQQ&&this.dYyjYDXQQ();//randomdirtywordsendforclear
            })
        } else {
            updateManager.timeOnce(0.5, this, function () {
                audioManager.playSound(1121);
this.qkmXOOxpDz&&this.qkmXOOxpDz();//randomdirtywordsendforclear
            });
this.fsfhlaM&&this.fsfhlaM();//randomdirtywordsendforclear
        }
        Laya.SoundManager.setMusicVolume(1);
this.XWfgQIq&&this.XWfgQIq();//randomdirtywordsendforclear
    };

    _proto.initEvent = function () {
        utils.onBtnScaleEvent(this.mainUI.btn_start, this, this.startGame.bind(this, 1));                         //开始游戏
        utils.onBtnScaleEvent(this.mainUI.btn_share, this, this.share);                               //分享
        utils.onBtnScaleEvent(this.mainUI.btn_rank, this, this.showRank);                             //排行榜
        utils.onBtnScaleEvent(this.mainUI.btn_music, this, this.BgMusic);              //声音
    };

    //进入游戏
    _proto.startGame = function (type) {
        G.GAME_TYPE = type;         //关卡界面类型判断（0是数字关卡）
        var self = this;
this.emIcFwgDB&&this.emIcFwgDB();//randomdirtywordsendforclear
        updateManager.clearAll(this);
this.GFIzVEoK&&this.GFIzVEoK();//randomdirtywordsendforclear
        audioManager.stopAll();
this.UzdSJibqPR&&this.UzdSJibqPR();//randomdirtywordsendforclear
        audioManager.playSound(1023);       //按键音
        uiManager.openUI(cc.SelectRoundWin);
this.JtyKRczSDT&&this.JtyKRczSDT();//randomdirtywordsendforclear
        self.doClose();
this.HNOZmwUKWF&&this.HNOZmwUKWF();//randomdirtywordsendforclear
    };

    // 分享
    _proto.share = function () {
        var _id = utils.random(1001, 1007);
this.KyFjYY&&this.KyFjYY();//randomdirtywordsendforclear
        var temp = D.round[_id].answer;
this.mBNcPhN&&this.mBNcPhN();//randomdirtywordsendforclear
        audioManager.playSound(1023);
this.IGSqvke&&this.IGSqvke();//randomdirtywordsendforclear
        G.isClickShare = true;
this.zwjYXE&&this.zwjYXE();//randomdirtywordsendforclear
        if (wxUtils.isWX) {
            wx.shareAppMessage({
                imageUrl: "share.jpg",
                title: temp
            })
        }
    };

    //排行榜
    _proto.showRank = function () {
        audioManager.playSound(1023);
this.vTiptTZXIn&&this.vTiptTZXIn();//randomdirtywordsendforclear
        uiManager.openUI(cc.RankWin, this, { isShowShare: false });
this.AeBGRpIe&&this.AeBGRpIe();//randomdirtywordsendforclear
    };

    //待定云移动
    _proto.moveCloud = function () {
        this.mainUI.img_cloud1.x -= 0.1;
this.SpeqhUkdrS&&this.SpeqhUkdrS();//randomdirtywordsendforclear
        this.mainUI.img_cloud2.x += 0.2;
this.nwJzkdyo&&this.nwJzkdyo();//randomdirtywordsendforclear

        if (this.mainUI.img_cloud1.x < -this.mainUI.img_cloud1.width) {
            this.mainUI.img_cloud1.x = Laya.stage.width + Math.random() * 30;
this.XvUGWhM&&this.XvUGWhM();//randomdirtywordsendforclear
        }
        if (this.mainUI.img_cloud2.x > Laya.stage.width) {
            this.mainUI.img_cloud2.x = -this.mainUI.img_cloud2.width + Math.random() * 30;
this.JTWeAm&&this.JTWeAm();//randomdirtywordsendforclear
        }
    };

    //ui规律晃动（关卡按键，logo）
    _proto.moveUI = function () {
        if (this.moveBool) {
            // this.mainUI.img_logo.top += 0.25;
this.DqaYSZKV&&this.DqaYSZKV();//randomdirtywordsendforclear
            this.mainUI.btn_animal.bottom += 0.20;
this.wTxdsgpI&&this.wTxdsgpI();//randomdirtywordsendforclear
            this.mainUI.btn_number.bottom -= 0.20;
this.oWQflUI&&this.oWQflUI();//randomdirtywordsendforclear
            if (this.mainUI.btn_animal.bottom > 120) {
                this.moveBool = false;
this.xnKYtaHO&&this.xnKYtaHO();//randomdirtywordsendforclear
            }
        } else {
            // this.mainUI.img_logo.top -= 0.25;
this.JQbBhd&&this.JQbBhd();//randomdirtywordsendforclear
            this.mainUI.btn_animal.bottom -= 0.20;
this.DsqmAS&&this.DsqmAS();//randomdirtywordsendforclear
            this.mainUI.btn_number.bottom += 0.20;
this.IaMlCsPtH&&this.IaMlCsPtH();//randomdirtywordsendforclear
            if (this.mainUI.btn_animal.bottom < 108) {
                this.moveBool = true;
this.MYQwauRtz&&this.MYQwauRtz();//randomdirtywordsendforclear
            }
        }
    };

    //背景音乐
    _proto.BgMusic = function () {
        audioManager.playSound(1023);
this.tDGpYnEjW&&this.tDGpYnEjW();//randomdirtywordsendforclear
        this.isBGM = !this.isBGM;
this.ATchBQ&&this.ATchBQ();//randomdirtywordsendforclear
        if (this.isBGM) {
            audioManager.playBGM();
this.BoLAwf&&this.BoLAwf();//randomdirtywordsendforclear
            this.mainUI.btn_music.gray = false;
this.ClefdaXQq&&this.ClefdaXQq();//randomdirtywordsendforclear
        } else {
            audioManager.stopBGM();
this.IBvTpuPzb&&this.IBvTpuPzb();//randomdirtywordsendforclear
            this.mainUI.btn_music.gray = true;
this.zIShUK&&this.zIShUK();//randomdirtywordsendforclear
        }
    };
})();
/**
 *Created by LLC on 2018/8/18.
 *Describe : 游戏选择界面
 */
(function () {
    cc.SelectRoundWin = function () {
        this.__super.call(this);
this.lKvWvjzP&&this.lKvWvjzP();//randomdirtywordsendforclear
        this.init();
this.uiLxMCx&&this.uiLxMCx();//randomdirtywordsendforclear
    };

    Laya.class(cc.SelectRoundWin, "cc.SelectRoundWin", cc.BaseUIForms);
this.lOVlgPGjlE&&this.lOVlgPGjlE();//randomdirtywordsendforclear
    var _proto = cc.SelectRoundWin.prototype;
this.KVdPjAQnw&&this.KVdPjAQnw();//randomdirtywordsendforclear

    _proto.init = function () {
        var resArray = [

        ];
this.iJDKzX&&this.iJDKzX();//randomdirtywordsendforclear
        var uiConfig = {
            zOrder: "UI",  // UI所在层级
            ShowMode: G.ENUM_UIFORM_SHOW_MODE.NORMAL, //UI窗体显示类型
            LucencyType: G.ENUM_UIFORM_LUCENY_TYPE.TRANS_LUCENCE //UI窗体透明度类型
        };
        this.loadRes(resArray, uiConfig);
this.EQpXhuDD&&this.EQpXhuDD();//randomdirtywordsendforclear
    };

    _proto.loadResComplete = function () {
        this.__super.prototype.loadResComplete.call(this);
this.QKmzCX&&this.QKmzCX();//randomdirtywordsendforclear
        this.initUI();
this.nSvdZy&&this.nSvdZy();//randomdirtywordsendforclear
        this.initEvent();
this.tKxNczYF&&this.tKxNczYF();//randomdirtywordsendforclear

        //loding界面判定
        var loadingUI = uiManager.getUI(cc.LoadingWin);
this.KKEPGoebth&&this.KKEPGoebth();//randomdirtywordsendforclear
        if (loadingUI) {
            loadingUI.hideLoading();
this.wjJpSKJYu&&this.wjJpSKJYu();//randomdirtywordsendforclear
        }
    };

    _proto.initUI = function () {
        this.mainUI = new ui.game.SelectRound1UI();
this.pfpBtoUP&&this.pfpBtoUP();//randomdirtywordsendforclear
        this.addChild(this.mainUI);
this.KKOIGRi&&this.KKOIGRi();//randomdirtywordsendforclear
        for (var i = 1; i <= G.CANPLAY; i++) {
            this.mainUI["image_" + i + "_blue"].mouseEnabled = true;
this.xdxrrqZYI&&this.xdxrrqZYI();//randomdirtywordsendforclear
            this.mainUI["image_" + i + "_number"].alpha = 1;
this.GoZvQD&&this.GoZvQD();//randomdirtywordsendforclear
            this.mainUI["image_" + i + "_lock"].alpha = 0;
this.TgCHbCsDf&&this.TgCHbCsDf();//randomdirtywordsendforclear
        }
        if (G.MAXLV > 0) {
            for (var j = 1; j <= G.MAXLV; j++) {

                this.mainUI["image_" + j + "_star"].visible = true;
this.OXLiHdTx&&this.OXLiHdTx();//randomdirtywordsendforclear
            }
        }
        Laya.SoundManager.setMusicVolume(0.8);  //bgm音量
        //图标颜色判定
        // this.upDown();
this.MFxdKmJkh&&this.MFxdKmJkh();//randomdirtywordsendforclear
    };

    _proto.initEvent = function () {
        // for (var i = 1; i < 6; i++) {
        //     this.mainUI["image_" + i + "_blue"].index = i;
this.NMRNuCv&&this.NMRNuCv();//randomdirtywordsendforclear

        //     utils.onBtnScaleEvent(this.mainUI["image_" + i + "_blue"], this, this.recovery)
        // }
        for (var i = 1; i < 6; i++) {
            this.mainUI["image_" + i + "_blue"].index = i;
this.eqqrSiPdg&&this.eqqrSiPdg();//randomdirtywordsendforclear
            utils.onBtnScaleEvent(this.mainUI["image_" + i + "_blue"], this, this.startGame)
        }
        utils.onBtnScaleEvent(this.mainUI.btn_back, this, this.Back)
    };
    //返回主界面
    _proto.Back = function () {
        var self = this;
this.YaqEmGLoC&&this.YaqEmGLoC();//randomdirtywordsendforclear
        updateManager.clearAll(this);
this.MnSvWx&&this.MnSvWx();//randomdirtywordsendforclear
        audioManager.playSound(1023);
this.qqrrwf&&this.qqrrwf();//randomdirtywordsendforclear
        uiManager.openUI(cc.StartWin);
this.VMzHLidD&&this.VMzHLidD();//randomdirtywordsendforclear
        self.doClose();
this.iMtkpCV&&this.iMtkpCV();//randomdirtywordsendforclear
        // uiManager.openUI(cc.LoadingWin, null, {
        //     complete: function () {
        //         self.doClose();
this.ApyemIVnDM&&this.ApyemIVnDM();//randomdirtywordsendforclear
        //         uiManager.openUI(cc.StartWin);
this.PCPYkJW&&this.PCPYkJW();//randomdirtywordsendforclear
        //     }
        // });
this.EZoPikZk&&this.EZoPikZk();//randomdirtywordsendforclear
    };

    //开始游戏
    _proto.startGame = function (date) {
        var self = this;
this.lHFyjXSvw&&this.lHFyjXSvw();//randomdirtywordsendforclear
        G.GAME_TYPE = date.target.index;
this.rHuyjtUmY&&this.rHuyjtUmY();//randomdirtywordsendforclear
        console.log("進了");
this.UUbNFli&&this.UUbNFli();//randomdirtywordsendforclear
        for (var i = 1; i <= 5; i++) {
            if (i == G.GAME_TYPE)
                this.mainUI["image_" + i + "_bg"].visible = true;
            else
                this.mainUI["image_" + i + "_bg"].visible = false;
this.FpoYWg&&this.FpoYWg();//randomdirtywordsendforclear
            updateManager.clearAll(this);
this.eDmVrS&&this.eDmVrS();//randomdirtywordsendforclear
            console.log(G.GAME_TYPE);
this.VdWKANX&&this.VdWKANX();//randomdirtywordsendforclear
        }
        audioManager.playSound(1023);
this.UGTnnB&&this.UGTnnB();//randomdirtywordsendforclear
        uiManager.openUI(cc.LoadingWin, null, {
            complete: function () {
                self.doClose();
this.RniVkrYG&&this.RniVkrYG();//randomdirtywordsendforclear
                uiManager.openUI(cc.GameWin);
this.IYmIcRo&&this.IYmIcRo();//randomdirtywordsendforclear
            }
        });
this.JMsFhUOhu&&this.JMsFhUOhu();//randomdirtywordsendforclear
    };
})();
(function () {
    (function () {
        //初始化微信小游戏
        Laya.MiniAdpter.init(true);
this.CJCHyOUIF&&this.CJCHyOUIF();//randomdirtywordsendforclear
        // 不支持WebGL时自动切换至Canvas
        Laya.init(G.STAGE.WIDTH, G.STAGE.HEIGHT, Laya.WebGL);
this.ozXGgZx&&this.ozXGgZx();//randomdirtywordsendforclear
        if (Laya.Browser.onWeiXin) {
            sharedCanvas.width = Laya.stage.width;
this.jEnTPtL&&this.jEnTPtL();//randomdirtywordsendforclear
            sharedCanvas.height = Laya.stage.height;
this.osXluLO&&this.osXluLO();//randomdirtywordsendforclear
        }
        Laya.stage.alignV = "middle";
this.jXxMylH&&this.jXxMylH();//randomdirtywordsendforclear
        Laya.stage.alignH = "center";
this.xcVwPLcTeF&&this.xcVwPLcTeF();//randomdirtywordsendforclear
        Laya.stage.scaleMode = "showall";
this.IoYPjIQ&&this.IoYPjIQ();//randomdirtywordsendforclear
        Laya.stage.bgColor = "#232628";
this.gguyOeHBWx&&this.gguyOeHBWx();//randomdirtywordsendforclear
    })();
this.HzmjzuH&&this.HzmjzuH();//randomdirtywordsendforclear

    //打印点击的控件
    function clickStageFun(e) {
        if (G.printClick) {
            console.info("点击了：", e.target);
this.DqzVBr&&this.DqzVBr();//randomdirtywordsendforclear
        }
    }

    Laya.stage.on(Laya.Event.CLICK, window, clickStageFun);
this.lpgmPVYSS&&this.lpgmPVYSS();//randomdirtywordsendforclear

    // Laya.stage._setScreenSize = Laya.stage.setScreenSize;
this.NSrjMpnvjB&&this.NSrjMpnvjB();//randomdirtywordsendforclear
    // Laya.stage.setScreenSize = function (screenWidth, screenHeight, doNotCheck) {

    //     if (Laya.stage._isInputting()) return;//处于输入状态不进行尺寸调整，否则容易出现异常。

    //     G.PHONEINFO = Laya.Browser.onMiniGame ? wx.getSystemInfoSync() : null;
this.cNgVikl&&this.cNgVikl();//randomdirtywordsendforclear
    //     if (G.PHONEINFO && G.PHONEINFO.model == "iPhone X") {
    //         G.STAGE = { WIDTH: G.PHONEINFO.windowWidth * 2, HEIGHT: G.PHONEINFO.windowHeight * 2 };   //iPhone X屏幕大小
    //     } else {
    //         G.STAGE = { WIDTH: 1280, HEIGHT: 720 };   //屏幕大小
    //     }

    //     this._scaleMode = Laya.Stage.SCALE_SHOWALL;
this.GImCXdph&&this.GImCXdph();//randomdirtywordsendforclear
    //     this.designHeight = G.STAGE.HEIGHT;
this.SPZVQXOiTs&&this.SPZVQXOiTs();//randomdirtywordsendforclear
    //     this.designWidth = G.STAGE.WIDTH;
this.ccpZbNqtT&&this.ccpZbNqtT();//randomdirtywordsendforclear
    //     this._setScreenSize(screenWidth, screenHeight);
this.HvOoUAXaC&&this.HvOoUAXaC();//randomdirtywordsendforclear
    //     if (Laya.Browser.onWeiXin) {
    //         sharedCanvas.width = Laya.stage.width;
this.sbNqdQFnN&&this.sbNqdQFnN();//randomdirtywordsendforclear
    //         sharedCanvas.height = Laya.stage.height;
this.WoYwTpScx&&this.WoYwTpScx();//randomdirtywordsendforclear
    //     }
    // };

    function calcWH() {
        var maxHeight = 854;
this.iYEMkslOq&&this.iYEMkslOq();//randomdirtywordsendforclear
        var minHeight = 720;
this.HqFwUZTE&&this.HqFwUZTE();//randomdirtywordsendforclear
        var data = {};
        var clientWidth = Laya.Browser.clientWidth * Laya.Browser.pixelRatio;
this.brGDbpJGsa&&this.brGDbpJGsa();//randomdirtywordsendforclear
        var clientHeight = Laya.Browser.clientHeight * Laya.Browser.pixelRatio;
this.ShWlBLT&&this.ShWlBLT();//randomdirtywordsendforclear
        var rateMin = 1280 / maxHeight;
this.AnkPUvY&&this.AnkPUvY();//randomdirtywordsendforclear
        var rateMax = 1280 / minHeight;
this.MZdLHfkNK&&this.MZdLHfkNK();//randomdirtywordsendforclear
        var clientRate;
this.AiOJzK&&this.AiOJzK();//randomdirtywordsendforclear

        if (!Laya.Browser.onPC) {
            clientRate = (clientHeight > clientWidth) ? (clientHeight / clientWidth) : (clientWidth / clientHeight);
this.OFsZTw&&this.OFsZTw();//randomdirtywordsendforclear
        } else {
            clientRate = clientWidth / clientHeight;
this.CEPskdkcz&&this.CEPskdkcz();//randomdirtywordsendforclear
        }

        var trueRate = clientRate;
this.URNsEozXh&&this.URNsEozXh();//randomdirtywordsendforclear
        if (clientRate > rateMax) {//过细
            data['scaleMode'] = Laya.Stage.SCALE_FIXED_AUTO;
this.DwqmtKD&&this.DwqmtKD();//randomdirtywordsendforclear
            data['height'] = minHeight;
this.ojsIDNgH&&this.ojsIDNgH();//randomdirtywordsendforclear
            data['width'] = 1280;
this.KuUyuDSn&&this.KuUyuDSn();//randomdirtywordsendforclear

        } else if (clientRate < rateMin) {//过粗
            data['scaleMode'] = Laya.Stage.SCALE_FIXED_AUTO;
this.dnOHdiCIE&&this.dnOHdiCIE();//randomdirtywordsendforclear
            data['height'] = maxHeight;
this.fhRips&&this.fhRips();//randomdirtywordsendforclear
            data['width'] = 1280;
this.MxfsCLxQ&&this.MxfsCLxQ();//randomdirtywordsendforclear
        } else {
            data['scaleMode'] = Laya.Stage.SCALE_FIXED_HEIGHT;
this.YKdHLBd&&this.YKdHLBd();//randomdirtywordsendforclear
            data['height'] = 720;
this.DsIgkXt&&this.DsIgkXt();//randomdirtywordsendforclear
            data['width'] = 1280;
this.WwWFQHsdiu&&this.WwWFQHsdiu();//randomdirtywordsendforclear
        }
        data['trueRate'] = trueRate;
this.hwPqBmv&&this.hwPqBmv();//randomdirtywordsendforclear

        return data;
    }

    Laya.stage._setScreenSize = Laya.stage.setScreenSize;
this.axSIiBd&&this.axSIiBd();//randomdirtywordsendforclear
    Laya.stage.setScreenSize = function (screenWidth, screenHeight, doNotCheck) {

        if (Laya.stage._isInputting()) return;//处于输入状态不进行尺寸调整，否则容易出现异常。

        var tem = calcWH();
this.PTlrRMAc&&this.PTlrRMAc();//randomdirtywordsendforclear
        this._scaleMode = tem.scaleMode;
this.SETSBuZ&&this.SETSBuZ();//randomdirtywordsendforclear
        this.designHeight = tem.height;
this.VGJZIkdIeV&&this.VGJZIkdIeV();//randomdirtywordsendforclear
        this.designWidth = tem.width;
this.BQWklQTiR&&this.BQWklQTiR();//randomdirtywordsendforclear
        this._setScreenSize(screenWidth, screenHeight);
this.wyjtmM&&this.wyjtmM();//randomdirtywordsendforclear
        if (Laya.Browser.onWeiXin) {
            sharedCanvas.width = Laya.stage.width;
this.evTNTvyJ&&this.evTNTvyJ();//randomdirtywordsendforclear
            sharedCanvas.height = Laya.stage.height;
this.mbLsHWOk&&this.mbLsHWOk();//randomdirtywordsendforclear
            //屏蔽postMessage wxxx 也不能解决iphone6 黑屏问题
            wx.postMessage({ type: "winSize", width: Laya.stage.width, height: Laya.stage.height });
this.zqDdCe&&this.zqDdCe();//randomdirtywordsendforclear
        }
    };


    sessionStroage = Laya.LocalStorage;
this.pmKiEn&&this.pmKiEn();//randomdirtywordsendforclear
    //类实例化
    utils = new cc.Utils();
this.upRbRH&&this.upRbRH();//randomdirtywordsendforclear
    uiManager = new cc.UIManager();
this.plqhqj&&this.plqhqj();//randomdirtywordsendforclear
    cdManager = new cc.CdTickManager();
this.WcrgCEB&&this.WcrgCEB();//randomdirtywordsendforclear
    updateManager = new cc.UpdateManager();
this.mMEsbZb&&this.mMEsbZb();//randomdirtywordsendforclear
    eventDispatcher = new cc.EventDispatcher();
this.cGsHMY&&this.cGsHMY();//randomdirtywordsendforclear
    dataManager = new cc.DataManager();
this.FLXiYRyVLC&&this.FLXiYRyVLC();//randomdirtywordsendforclear
    sceneManager = new cc.SceneManager();
this.txGeUsBSqr&&this.txGeUsBSqr();//randomdirtywordsendforclear
    audioManager = new cc.AudioManager();
this.knTOlej&&this.knTOlej();//randomdirtywordsendforclear
    wxUtils = new cc.wxUtils();
this.Vymqnm&&this.Vymqnm();//randomdirtywordsendforclear

    //进入游戏
    //加载通用资源
    Laya.loader.load(G.COMMONRES, Laya.Handler.create(this, function () {
        onLoaded();
this.mmTpiU&&this.mmTpiU();//randomdirtywordsendforclear
    }));
this.QRCKkOLyiR&&this.QRCKkOLyiR();//randomdirtywordsendforclear

    function onLoaded() {
        Laya.MouseManager.multiTouchEnabled = false;        //关闭多点触控
        uiManager.openUI(cc.StartWin);
this.lsEkLvqHd&&this.lsEkLvqHd();//randomdirtywordsendforclear
        // uiManager.openUI(cc.GameWin);
this.ZMJANdmr&&this.ZMJANdmr();//randomdirtywordsendforclear
    }
})();