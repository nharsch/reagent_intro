// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__21711_SHARP_,p2__21712_SHARP_){
var and__16196__auto__ = p1__21711_SHARP_;
if(cljs.core.truth_(and__16196__auto__)){
return p2__21712_SHARP_;
} else {
return and__16196__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16208__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16208__auto__){
return or__16208__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__16208__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__16208__auto__){
return or__16208__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__16208__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__16208__auto__)){
return or__16208__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__17103__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17104__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17105__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17106__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17107__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17107__auto__,method_table__17103__auto__,prefer_table__17104__auto__,method_cache__17105__auto__,cached_hierarchy__17106__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__21713){
var map__21714 = p__21713;
var map__21714__$1 = ((cljs.core.seq_QMARK_.call(null,map__21714))?cljs.core.apply.call(null,cljs.core.hash_map,map__21714):map__21714);
var file = cljs.core.get.call(null,map__21714__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__21715){
var map__21716 = p__21715;
var map__21716__$1 = ((cljs.core.seq_QMARK_.call(null,map__21716))?cljs.core.apply.call(null,cljs.core.hash_map,map__21716):map__21716);
var namespace = cljs.core.get.call(null,map__21716__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__17103__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17104__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17105__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17106__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17107__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17107__auto__,method_table__17103__auto__,prefer_table__17104__auto__,method_cache__17105__auto__,cached_hierarchy__17106__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e21717){if((e21717 instanceof Error)){
var e = e21717;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e21717;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__21719 = arguments.length;
switch (G__21719) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__21721,callback){
var map__21723 = p__21721;
var map__21723__$1 = ((cljs.core.seq_QMARK_.call(null,map__21723))?cljs.core.apply.call(null,cljs.core.hash_map,map__21723):map__21723);
var file_msg = map__21723__$1;
var request_url = cljs.core.get.call(null,map__21723__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__21723,map__21723__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__21723,map__21723__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__21724){
var map__21726 = p__21724;
var map__21726__$1 = ((cljs.core.seq_QMARK_.call(null,map__21726))?cljs.core.apply.call(null,cljs.core.hash_map,map__21726):map__21726);
var file_msg = map__21726__$1;
var namespace = cljs.core.get.call(null,map__21726__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__21726__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__16208__auto__ = meta_data;
if(cljs.core.truth_(or__16208__auto__)){
return or__16208__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__16196__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__16196__auto__){
var or__16208__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16208__auto__)){
return or__16208__auto__;
} else {
var or__16208__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16208__auto____$1)){
return or__16208__auto____$1;
} else {
var and__16196__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__16196__auto____$1){
var or__16208__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__16208__auto____$2){
return or__16208__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__16196__auto____$1;
}
}
}
} else {
return and__16196__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__21727,callback){
var map__21729 = p__21727;
var map__21729__$1 = ((cljs.core.seq_QMARK_.call(null,map__21729))?cljs.core.apply.call(null,cljs.core.hash_map,map__21729):map__21729);
var file_msg = map__21729__$1;
var request_url = cljs.core.get.call(null,map__21729__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__21729__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19137__auto___21816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19137__auto___21816,out){
return (function (){
var f__19138__auto__ = (function (){var switch__19116__auto__ = ((function (c__19137__auto___21816,out){
return (function (state_21798){
var state_val_21799 = (state_21798[(1)]);
if((state_val_21799 === (1))){
var inst_21776 = cljs.core.nth.call(null,files,(0),null);
var inst_21777 = cljs.core.nthnext.call(null,files,(1));
var inst_21778 = files;
var state_21798__$1 = (function (){var statearr_21800 = state_21798;
(statearr_21800[(7)] = inst_21776);

(statearr_21800[(8)] = inst_21777);

(statearr_21800[(9)] = inst_21778);

return statearr_21800;
})();
var statearr_21801_21817 = state_21798__$1;
(statearr_21801_21817[(2)] = null);

(statearr_21801_21817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21799 === (2))){
var inst_21778 = (state_21798[(9)]);
var inst_21781 = (state_21798[(10)]);
var inst_21781__$1 = cljs.core.nth.call(null,inst_21778,(0),null);
var inst_21782 = cljs.core.nthnext.call(null,inst_21778,(1));
var inst_21783 = (inst_21781__$1 == null);
var inst_21784 = cljs.core.not.call(null,inst_21783);
var state_21798__$1 = (function (){var statearr_21802 = state_21798;
(statearr_21802[(10)] = inst_21781__$1);

(statearr_21802[(11)] = inst_21782);

return statearr_21802;
})();
if(inst_21784){
var statearr_21803_21818 = state_21798__$1;
(statearr_21803_21818[(1)] = (4));

} else {
var statearr_21804_21819 = state_21798__$1;
(statearr_21804_21819[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21799 === (3))){
var inst_21796 = (state_21798[(2)]);
var state_21798__$1 = state_21798;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21798__$1,inst_21796);
} else {
if((state_val_21799 === (4))){
var inst_21781 = (state_21798[(10)]);
var inst_21786 = figwheel.client.file_reloading.reload_js_file.call(null,inst_21781);
var state_21798__$1 = state_21798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21798__$1,(7),inst_21786);
} else {
if((state_val_21799 === (5))){
var inst_21792 = cljs.core.async.close_BANG_.call(null,out);
var state_21798__$1 = state_21798;
var statearr_21805_21820 = state_21798__$1;
(statearr_21805_21820[(2)] = inst_21792);

(statearr_21805_21820[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21799 === (6))){
var inst_21794 = (state_21798[(2)]);
var state_21798__$1 = state_21798;
var statearr_21806_21821 = state_21798__$1;
(statearr_21806_21821[(2)] = inst_21794);

(statearr_21806_21821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21799 === (7))){
var inst_21782 = (state_21798[(11)]);
var inst_21788 = (state_21798[(2)]);
var inst_21789 = cljs.core.async.put_BANG_.call(null,out,inst_21788);
var inst_21778 = inst_21782;
var state_21798__$1 = (function (){var statearr_21807 = state_21798;
(statearr_21807[(9)] = inst_21778);

(statearr_21807[(12)] = inst_21789);

return statearr_21807;
})();
var statearr_21808_21822 = state_21798__$1;
(statearr_21808_21822[(2)] = null);

(statearr_21808_21822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__19137__auto___21816,out))
;
return ((function (switch__19116__auto__,c__19137__auto___21816,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19117__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19117__auto____0 = (function (){
var statearr_21812 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21812[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19117__auto__);

(statearr_21812[(1)] = (1));

return statearr_21812;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19117__auto____1 = (function (state_21798){
while(true){
var ret_value__19118__auto__ = (function (){try{while(true){
var result__19119__auto__ = switch__19116__auto__.call(null,state_21798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19119__auto__;
}
break;
}
}catch (e21813){if((e21813 instanceof Object)){
var ex__19120__auto__ = e21813;
var statearr_21814_21823 = state_21798;
(statearr_21814_21823[(5)] = ex__19120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21824 = state_21798;
state_21798 = G__21824;
continue;
} else {
return ret_value__19118__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19117__auto__ = function(state_21798){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19117__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19117__auto____1.call(this,state_21798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19117__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19117__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19117__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19117__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19117__auto__;
})()
;})(switch__19116__auto__,c__19137__auto___21816,out))
})();
var state__19139__auto__ = (function (){var statearr_21815 = f__19138__auto__.call(null);
(statearr_21815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19137__auto___21816);

return statearr_21815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19139__auto__);
});})(c__19137__auto___21816,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__21825,p__21826){
var map__21829 = p__21825;
var map__21829__$1 = ((cljs.core.seq_QMARK_.call(null,map__21829))?cljs.core.apply.call(null,cljs.core.hash_map,map__21829):map__21829);
var opts = map__21829__$1;
var url_rewriter = cljs.core.get.call(null,map__21829__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__21830 = p__21826;
var map__21830__$1 = ((cljs.core.seq_QMARK_.call(null,map__21830))?cljs.core.apply.call(null,cljs.core.hash_map,map__21830):map__21830);
var file_msg = map__21830__$1;
var file = cljs.core.get.call(null,map__21830__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__21831,opts){
var map__21834 = p__21831;
var map__21834__$1 = ((cljs.core.seq_QMARK_.call(null,map__21834))?cljs.core.apply.call(null,cljs.core.hash_map,map__21834):map__21834);
var eval_body__$1 = cljs.core.get.call(null,map__21834__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__21834__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16196__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16196__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16196__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e21835){var e = e21835;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__21840,p__21841){
var map__22043 = p__21840;
var map__22043__$1 = ((cljs.core.seq_QMARK_.call(null,map__22043))?cljs.core.apply.call(null,cljs.core.hash_map,map__22043):map__22043);
var opts = map__22043__$1;
var before_jsload = cljs.core.get.call(null,map__22043__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__22043__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__22043__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__22044 = p__21841;
var map__22044__$1 = ((cljs.core.seq_QMARK_.call(null,map__22044))?cljs.core.apply.call(null,cljs.core.hash_map,map__22044):map__22044);
var msg = map__22044__$1;
var files = cljs.core.get.call(null,map__22044__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__19137__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19137__auto__,map__22043,map__22043__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22044,map__22044__$1,msg,files){
return (function (){
var f__19138__auto__ = (function (){var switch__19116__auto__ = ((function (c__19137__auto__,map__22043,map__22043__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22044,map__22044__$1,msg,files){
return (function (state_22169){
var state_val_22170 = (state_22169[(1)]);
if((state_val_22170 === (7))){
var inst_22056 = (state_22169[(7)]);
var inst_22058 = (state_22169[(8)]);
var inst_22057 = (state_22169[(9)]);
var inst_22059 = (state_22169[(10)]);
var inst_22064 = cljs.core._nth.call(null,inst_22057,inst_22059);
var inst_22065 = figwheel.client.file_reloading.eval_body.call(null,inst_22064,opts);
var inst_22066 = (inst_22059 + (1));
var tmp22171 = inst_22056;
var tmp22172 = inst_22058;
var tmp22173 = inst_22057;
var inst_22056__$1 = tmp22171;
var inst_22057__$1 = tmp22173;
var inst_22058__$1 = tmp22172;
var inst_22059__$1 = inst_22066;
var state_22169__$1 = (function (){var statearr_22174 = state_22169;
(statearr_22174[(11)] = inst_22065);

(statearr_22174[(7)] = inst_22056__$1);

(statearr_22174[(8)] = inst_22058__$1);

(statearr_22174[(9)] = inst_22057__$1);

(statearr_22174[(10)] = inst_22059__$1);

return statearr_22174;
})();
var statearr_22175_22244 = state_22169__$1;
(statearr_22175_22244[(2)] = null);

(statearr_22175_22244[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (20))){
var inst_22101 = (state_22169[(12)]);
var inst_22108 = (state_22169[(13)]);
var inst_22105 = (state_22169[(14)]);
var inst_22106 = (state_22169[(15)]);
var inst_22102 = (state_22169[(16)]);
var inst_22111 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_22113 = (function (){var all_files = inst_22101;
var files_SINGLEQUOTE_ = inst_22102;
var res_SINGLEQUOTE_ = inst_22105;
var res = inst_22106;
var files_not_loaded = inst_22108;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_22101,inst_22108,inst_22105,inst_22106,inst_22102,inst_22111,state_val_22170,c__19137__auto__,map__22043,map__22043__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22044,map__22044__$1,msg,files){
return (function (p__22112){
var map__22176 = p__22112;
var map__22176__$1 = ((cljs.core.seq_QMARK_.call(null,map__22176))?cljs.core.apply.call(null,cljs.core.hash_map,map__22176):map__22176);
var namespace = cljs.core.get.call(null,map__22176__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__22176__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_22101,inst_22108,inst_22105,inst_22106,inst_22102,inst_22111,state_val_22170,c__19137__auto__,map__22043,map__22043__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22044,map__22044__$1,msg,files))
})();
var inst_22114 = cljs.core.map.call(null,inst_22113,inst_22106);
var inst_22115 = cljs.core.pr_str.call(null,inst_22114);
var inst_22116 = figwheel.client.utils.log.call(null,inst_22115);
var inst_22117 = (function (){var all_files = inst_22101;
var files_SINGLEQUOTE_ = inst_22102;
var res_SINGLEQUOTE_ = inst_22105;
var res = inst_22106;
var files_not_loaded = inst_22108;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_22101,inst_22108,inst_22105,inst_22106,inst_22102,inst_22111,inst_22113,inst_22114,inst_22115,inst_22116,state_val_22170,c__19137__auto__,map__22043,map__22043__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22044,map__22044__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_22101,inst_22108,inst_22105,inst_22106,inst_22102,inst_22111,inst_22113,inst_22114,inst_22115,inst_22116,state_val_22170,c__19137__auto__,map__22043,map__22043__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22044,map__22044__$1,msg,files))
})();
var inst_22118 = setTimeout(inst_22117,(10));
var state_22169__$1 = (function (){var statearr_22177 = state_22169;
(statearr_22177[(17)] = inst_22111);

(statearr_22177[(18)] = inst_22116);

return statearr_22177;
})();
var statearr_22178_22245 = state_22169__$1;
(statearr_22178_22245[(2)] = inst_22118);

(statearr_22178_22245[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (27))){
var inst_22128 = (state_22169[(19)]);
var state_22169__$1 = state_22169;
var statearr_22179_22246 = state_22169__$1;
(statearr_22179_22246[(2)] = inst_22128);

(statearr_22179_22246[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (1))){
var inst_22048 = (state_22169[(20)]);
var inst_22045 = before_jsload.call(null,files);
var inst_22046 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_22047 = (function (){return ((function (inst_22048,inst_22045,inst_22046,state_val_22170,c__19137__auto__,map__22043,map__22043__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22044,map__22044__$1,msg,files){
return (function (p1__21836_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__21836_SHARP_);
});
;})(inst_22048,inst_22045,inst_22046,state_val_22170,c__19137__auto__,map__22043,map__22043__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22044,map__22044__$1,msg,files))
})();
var inst_22048__$1 = cljs.core.filter.call(null,inst_22047,files);
var inst_22049 = cljs.core.not_empty.call(null,inst_22048__$1);
var state_22169__$1 = (function (){var statearr_22180 = state_22169;
(statearr_22180[(21)] = inst_22046);

(statearr_22180[(20)] = inst_22048__$1);

(statearr_22180[(22)] = inst_22045);

return statearr_22180;
})();
if(cljs.core.truth_(inst_22049)){
var statearr_22181_22247 = state_22169__$1;
(statearr_22181_22247[(1)] = (2));

} else {
var statearr_22182_22248 = state_22169__$1;
(statearr_22182_22248[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (24))){
var state_22169__$1 = state_22169;
var statearr_22183_22249 = state_22169__$1;
(statearr_22183_22249[(2)] = null);

(statearr_22183_22249[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (4))){
var inst_22093 = (state_22169[(2)]);
var inst_22094 = (function (){return ((function (inst_22093,state_val_22170,c__19137__auto__,map__22043,map__22043__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22044,map__22044__$1,msg,files){
return (function (p1__21837_SHARP_){
var and__16196__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__21837_SHARP_);
if(cljs.core.truth_(and__16196__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__21837_SHARP_));
} else {
return and__16196__auto__;
}
});
;})(inst_22093,state_val_22170,c__19137__auto__,map__22043,map__22043__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22044,map__22044__$1,msg,files))
})();
var inst_22095 = cljs.core.filter.call(null,inst_22094,files);
var state_22169__$1 = (function (){var statearr_22184 = state_22169;
(statearr_22184[(23)] = inst_22095);

(statearr_22184[(24)] = inst_22093);

return statearr_22184;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_22185_22250 = state_22169__$1;
(statearr_22185_22250[(1)] = (16));

} else {
var statearr_22186_22251 = state_22169__$1;
(statearr_22186_22251[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (15))){
var inst_22083 = (state_22169[(2)]);
var state_22169__$1 = state_22169;
var statearr_22187_22252 = state_22169__$1;
(statearr_22187_22252[(2)] = inst_22083);

(statearr_22187_22252[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (21))){
var state_22169__$1 = state_22169;
var statearr_22188_22253 = state_22169__$1;
(statearr_22188_22253[(2)] = null);

(statearr_22188_22253[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (31))){
var inst_22136 = (state_22169[(25)]);
var inst_22146 = (state_22169[(2)]);
var inst_22147 = cljs.core.not_empty.call(null,inst_22136);
var state_22169__$1 = (function (){var statearr_22189 = state_22169;
(statearr_22189[(26)] = inst_22146);

return statearr_22189;
})();
if(cljs.core.truth_(inst_22147)){
var statearr_22190_22254 = state_22169__$1;
(statearr_22190_22254[(1)] = (32));

} else {
var statearr_22191_22255 = state_22169__$1;
(statearr_22191_22255[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (32))){
var inst_22136 = (state_22169[(25)]);
var inst_22149 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22136);
var inst_22150 = cljs.core.pr_str.call(null,inst_22149);
var inst_22151 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_22150)].join('');
var inst_22152 = figwheel.client.utils.log.call(null,inst_22151);
var state_22169__$1 = state_22169;
var statearr_22192_22256 = state_22169__$1;
(statearr_22192_22256[(2)] = inst_22152);

(statearr_22192_22256[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (33))){
var state_22169__$1 = state_22169;
var statearr_22193_22257 = state_22169__$1;
(statearr_22193_22257[(2)] = null);

(statearr_22193_22257[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (13))){
var inst_22069 = (state_22169[(27)]);
var inst_22073 = cljs.core.chunk_first.call(null,inst_22069);
var inst_22074 = cljs.core.chunk_rest.call(null,inst_22069);
var inst_22075 = cljs.core.count.call(null,inst_22073);
var inst_22056 = inst_22074;
var inst_22057 = inst_22073;
var inst_22058 = inst_22075;
var inst_22059 = (0);
var state_22169__$1 = (function (){var statearr_22194 = state_22169;
(statearr_22194[(7)] = inst_22056);

(statearr_22194[(8)] = inst_22058);

(statearr_22194[(9)] = inst_22057);

(statearr_22194[(10)] = inst_22059);

return statearr_22194;
})();
var statearr_22195_22258 = state_22169__$1;
(statearr_22195_22258[(2)] = null);

(statearr_22195_22258[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (22))){
var inst_22108 = (state_22169[(13)]);
var inst_22121 = (state_22169[(2)]);
var inst_22122 = cljs.core.not_empty.call(null,inst_22108);
var state_22169__$1 = (function (){var statearr_22196 = state_22169;
(statearr_22196[(28)] = inst_22121);

return statearr_22196;
})();
if(cljs.core.truth_(inst_22122)){
var statearr_22197_22259 = state_22169__$1;
(statearr_22197_22259[(1)] = (23));

} else {
var statearr_22198_22260 = state_22169__$1;
(statearr_22198_22260[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (36))){
var state_22169__$1 = state_22169;
var statearr_22199_22261 = state_22169__$1;
(statearr_22199_22261[(2)] = null);

(statearr_22199_22261[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (29))){
var inst_22135 = (state_22169[(29)]);
var inst_22140 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22135);
var inst_22141 = cljs.core.pr_str.call(null,inst_22140);
var inst_22142 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_22141)].join('');
var inst_22143 = figwheel.client.utils.log.call(null,inst_22142);
var state_22169__$1 = state_22169;
var statearr_22200_22262 = state_22169__$1;
(statearr_22200_22262[(2)] = inst_22143);

(statearr_22200_22262[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (6))){
var inst_22090 = (state_22169[(2)]);
var state_22169__$1 = state_22169;
var statearr_22201_22263 = state_22169__$1;
(statearr_22201_22263[(2)] = inst_22090);

(statearr_22201_22263[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (28))){
var inst_22135 = (state_22169[(29)]);
var inst_22134 = (state_22169[(2)]);
var inst_22135__$1 = cljs.core.get.call(null,inst_22134,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_22136 = cljs.core.get.call(null,inst_22134,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_22137 = cljs.core.get.call(null,inst_22134,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_22138 = cljs.core.not_empty.call(null,inst_22135__$1);
var state_22169__$1 = (function (){var statearr_22202 = state_22169;
(statearr_22202[(29)] = inst_22135__$1);

(statearr_22202[(25)] = inst_22136);

(statearr_22202[(30)] = inst_22137);

return statearr_22202;
})();
if(cljs.core.truth_(inst_22138)){
var statearr_22203_22264 = state_22169__$1;
(statearr_22203_22264[(1)] = (29));

} else {
var statearr_22204_22265 = state_22169__$1;
(statearr_22204_22265[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (25))){
var inst_22167 = (state_22169[(2)]);
var state_22169__$1 = state_22169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22169__$1,inst_22167);
} else {
if((state_val_22170 === (34))){
var inst_22137 = (state_22169[(30)]);
var inst_22155 = (state_22169[(2)]);
var inst_22156 = cljs.core.not_empty.call(null,inst_22137);
var state_22169__$1 = (function (){var statearr_22205 = state_22169;
(statearr_22205[(31)] = inst_22155);

return statearr_22205;
})();
if(cljs.core.truth_(inst_22156)){
var statearr_22206_22266 = state_22169__$1;
(statearr_22206_22266[(1)] = (35));

} else {
var statearr_22207_22267 = state_22169__$1;
(statearr_22207_22267[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (17))){
var inst_22095 = (state_22169[(23)]);
var state_22169__$1 = state_22169;
var statearr_22208_22268 = state_22169__$1;
(statearr_22208_22268[(2)] = inst_22095);

(statearr_22208_22268[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (3))){
var state_22169__$1 = state_22169;
var statearr_22209_22269 = state_22169__$1;
(statearr_22209_22269[(2)] = null);

(statearr_22209_22269[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (12))){
var inst_22086 = (state_22169[(2)]);
var state_22169__$1 = state_22169;
var statearr_22210_22270 = state_22169__$1;
(statearr_22210_22270[(2)] = inst_22086);

(statearr_22210_22270[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (2))){
var inst_22048 = (state_22169[(20)]);
var inst_22055 = cljs.core.seq.call(null,inst_22048);
var inst_22056 = inst_22055;
var inst_22057 = null;
var inst_22058 = (0);
var inst_22059 = (0);
var state_22169__$1 = (function (){var statearr_22211 = state_22169;
(statearr_22211[(7)] = inst_22056);

(statearr_22211[(8)] = inst_22058);

(statearr_22211[(9)] = inst_22057);

(statearr_22211[(10)] = inst_22059);

return statearr_22211;
})();
var statearr_22212_22271 = state_22169__$1;
(statearr_22212_22271[(2)] = null);

(statearr_22212_22271[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (23))){
var inst_22101 = (state_22169[(12)]);
var inst_22108 = (state_22169[(13)]);
var inst_22128 = (state_22169[(19)]);
var inst_22105 = (state_22169[(14)]);
var inst_22106 = (state_22169[(15)]);
var inst_22102 = (state_22169[(16)]);
var inst_22124 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_22127 = (function (){var all_files = inst_22101;
var files_SINGLEQUOTE_ = inst_22102;
var res_SINGLEQUOTE_ = inst_22105;
var res = inst_22106;
var files_not_loaded = inst_22108;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_22101,inst_22108,inst_22128,inst_22105,inst_22106,inst_22102,inst_22124,state_val_22170,c__19137__auto__,map__22043,map__22043__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22044,map__22044__$1,msg,files){
return (function (p__22126){
var map__22213 = p__22126;
var map__22213__$1 = ((cljs.core.seq_QMARK_.call(null,map__22213))?cljs.core.apply.call(null,cljs.core.hash_map,map__22213):map__22213);
var meta_data = cljs.core.get.call(null,map__22213__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_22101,inst_22108,inst_22128,inst_22105,inst_22106,inst_22102,inst_22124,state_val_22170,c__19137__auto__,map__22043,map__22043__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22044,map__22044__$1,msg,files))
})();
var inst_22128__$1 = cljs.core.group_by.call(null,inst_22127,inst_22108);
var inst_22129 = cljs.core.seq_QMARK_.call(null,inst_22128__$1);
var state_22169__$1 = (function (){var statearr_22214 = state_22169;
(statearr_22214[(32)] = inst_22124);

(statearr_22214[(19)] = inst_22128__$1);

return statearr_22214;
})();
if(inst_22129){
var statearr_22215_22272 = state_22169__$1;
(statearr_22215_22272[(1)] = (26));

} else {
var statearr_22216_22273 = state_22169__$1;
(statearr_22216_22273[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (35))){
var inst_22137 = (state_22169[(30)]);
var inst_22158 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22137);
var inst_22159 = cljs.core.pr_str.call(null,inst_22158);
var inst_22160 = [cljs.core.str("not required: "),cljs.core.str(inst_22159)].join('');
var inst_22161 = figwheel.client.utils.log.call(null,inst_22160);
var state_22169__$1 = state_22169;
var statearr_22217_22274 = state_22169__$1;
(statearr_22217_22274[(2)] = inst_22161);

(statearr_22217_22274[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (19))){
var inst_22101 = (state_22169[(12)]);
var inst_22105 = (state_22169[(14)]);
var inst_22106 = (state_22169[(15)]);
var inst_22102 = (state_22169[(16)]);
var inst_22105__$1 = (state_22169[(2)]);
var inst_22106__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22105__$1);
var inst_22107 = (function (){var all_files = inst_22101;
var files_SINGLEQUOTE_ = inst_22102;
var res_SINGLEQUOTE_ = inst_22105__$1;
var res = inst_22106__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_22101,inst_22105,inst_22106,inst_22102,inst_22105__$1,inst_22106__$1,state_val_22170,c__19137__auto__,map__22043,map__22043__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22044,map__22044__$1,msg,files){
return (function (p1__21839_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__21839_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_22101,inst_22105,inst_22106,inst_22102,inst_22105__$1,inst_22106__$1,state_val_22170,c__19137__auto__,map__22043,map__22043__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22044,map__22044__$1,msg,files))
})();
var inst_22108 = cljs.core.filter.call(null,inst_22107,inst_22105__$1);
var inst_22109 = cljs.core.not_empty.call(null,inst_22106__$1);
var state_22169__$1 = (function (){var statearr_22218 = state_22169;
(statearr_22218[(13)] = inst_22108);

(statearr_22218[(14)] = inst_22105__$1);

(statearr_22218[(15)] = inst_22106__$1);

return statearr_22218;
})();
if(cljs.core.truth_(inst_22109)){
var statearr_22219_22275 = state_22169__$1;
(statearr_22219_22275[(1)] = (20));

} else {
var statearr_22220_22276 = state_22169__$1;
(statearr_22220_22276[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (11))){
var state_22169__$1 = state_22169;
var statearr_22221_22277 = state_22169__$1;
(statearr_22221_22277[(2)] = null);

(statearr_22221_22277[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (9))){
var inst_22088 = (state_22169[(2)]);
var state_22169__$1 = state_22169;
var statearr_22222_22278 = state_22169__$1;
(statearr_22222_22278[(2)] = inst_22088);

(statearr_22222_22278[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (5))){
var inst_22058 = (state_22169[(8)]);
var inst_22059 = (state_22169[(10)]);
var inst_22061 = (inst_22059 < inst_22058);
var inst_22062 = inst_22061;
var state_22169__$1 = state_22169;
if(cljs.core.truth_(inst_22062)){
var statearr_22223_22279 = state_22169__$1;
(statearr_22223_22279[(1)] = (7));

} else {
var statearr_22224_22280 = state_22169__$1;
(statearr_22224_22280[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (14))){
var inst_22069 = (state_22169[(27)]);
var inst_22078 = cljs.core.first.call(null,inst_22069);
var inst_22079 = figwheel.client.file_reloading.eval_body.call(null,inst_22078,opts);
var inst_22080 = cljs.core.next.call(null,inst_22069);
var inst_22056 = inst_22080;
var inst_22057 = null;
var inst_22058 = (0);
var inst_22059 = (0);
var state_22169__$1 = (function (){var statearr_22225 = state_22169;
(statearr_22225[(7)] = inst_22056);

(statearr_22225[(33)] = inst_22079);

(statearr_22225[(8)] = inst_22058);

(statearr_22225[(9)] = inst_22057);

(statearr_22225[(10)] = inst_22059);

return statearr_22225;
})();
var statearr_22226_22281 = state_22169__$1;
(statearr_22226_22281[(2)] = null);

(statearr_22226_22281[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (26))){
var inst_22128 = (state_22169[(19)]);
var inst_22131 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22128);
var state_22169__$1 = state_22169;
var statearr_22227_22282 = state_22169__$1;
(statearr_22227_22282[(2)] = inst_22131);

(statearr_22227_22282[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (16))){
var inst_22095 = (state_22169[(23)]);
var inst_22097 = (function (){var all_files = inst_22095;
return ((function (all_files,inst_22095,state_val_22170,c__19137__auto__,map__22043,map__22043__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22044,map__22044__$1,msg,files){
return (function (p1__21838_SHARP_){
return cljs.core.update_in.call(null,p1__21838_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_22095,state_val_22170,c__19137__auto__,map__22043,map__22043__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22044,map__22044__$1,msg,files))
})();
var inst_22098 = cljs.core.map.call(null,inst_22097,inst_22095);
var state_22169__$1 = state_22169;
var statearr_22228_22283 = state_22169__$1;
(statearr_22228_22283[(2)] = inst_22098);

(statearr_22228_22283[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (30))){
var state_22169__$1 = state_22169;
var statearr_22229_22284 = state_22169__$1;
(statearr_22229_22284[(2)] = null);

(statearr_22229_22284[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (10))){
var inst_22069 = (state_22169[(27)]);
var inst_22071 = cljs.core.chunked_seq_QMARK_.call(null,inst_22069);
var state_22169__$1 = state_22169;
if(inst_22071){
var statearr_22230_22285 = state_22169__$1;
(statearr_22230_22285[(1)] = (13));

} else {
var statearr_22231_22286 = state_22169__$1;
(statearr_22231_22286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (18))){
var inst_22101 = (state_22169[(12)]);
var inst_22102 = (state_22169[(16)]);
var inst_22101__$1 = (state_22169[(2)]);
var inst_22102__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_22101__$1);
var inst_22103 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_22102__$1);
var state_22169__$1 = (function (){var statearr_22232 = state_22169;
(statearr_22232[(12)] = inst_22101__$1);

(statearr_22232[(16)] = inst_22102__$1);

return statearr_22232;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22169__$1,(19),inst_22103);
} else {
if((state_val_22170 === (37))){
var inst_22164 = (state_22169[(2)]);
var state_22169__$1 = state_22169;
var statearr_22233_22287 = state_22169__$1;
(statearr_22233_22287[(2)] = inst_22164);

(statearr_22233_22287[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (8))){
var inst_22056 = (state_22169[(7)]);
var inst_22069 = (state_22169[(27)]);
var inst_22069__$1 = cljs.core.seq.call(null,inst_22056);
var state_22169__$1 = (function (){var statearr_22234 = state_22169;
(statearr_22234[(27)] = inst_22069__$1);

return statearr_22234;
})();
if(inst_22069__$1){
var statearr_22235_22288 = state_22169__$1;
(statearr_22235_22288[(1)] = (10));

} else {
var statearr_22236_22289 = state_22169__$1;
(statearr_22236_22289[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19137__auto__,map__22043,map__22043__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22044,map__22044__$1,msg,files))
;
return ((function (switch__19116__auto__,c__19137__auto__,map__22043,map__22043__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22044,map__22044__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19117__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19117__auto____0 = (function (){
var statearr_22240 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22240[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19117__auto__);

(statearr_22240[(1)] = (1));

return statearr_22240;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19117__auto____1 = (function (state_22169){
while(true){
var ret_value__19118__auto__ = (function (){try{while(true){
var result__19119__auto__ = switch__19116__auto__.call(null,state_22169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19119__auto__;
}
break;
}
}catch (e22241){if((e22241 instanceof Object)){
var ex__19120__auto__ = e22241;
var statearr_22242_22290 = state_22169;
(statearr_22242_22290[(5)] = ex__19120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22291 = state_22169;
state_22169 = G__22291;
continue;
} else {
return ret_value__19118__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19117__auto__ = function(state_22169){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19117__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19117__auto____1.call(this,state_22169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19117__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19117__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19117__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19117__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19117__auto__;
})()
;})(switch__19116__auto__,c__19137__auto__,map__22043,map__22043__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22044,map__22044__$1,msg,files))
})();
var state__19139__auto__ = (function (){var statearr_22243 = f__19138__auto__.call(null);
(statearr_22243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19137__auto__);

return statearr_22243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19139__auto__);
});})(c__19137__auto__,map__22043,map__22043__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22044,map__22044__$1,msg,files))
);

return c__19137__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__22294,link){
var map__22296 = p__22294;
var map__22296__$1 = ((cljs.core.seq_QMARK_.call(null,map__22296))?cljs.core.apply.call(null,cljs.core.hash_map,map__22296):map__22296);
var file = cljs.core.get.call(null,map__22296__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__22296,map__22296__$1,file){
return (function (p1__22292_SHARP_,p2__22293_SHARP_){
if(cljs.core._EQ_.call(null,p1__22292_SHARP_,p2__22293_SHARP_)){
return p1__22292_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__22296,map__22296__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__22300){
var map__22301 = p__22300;
var map__22301__$1 = ((cljs.core.seq_QMARK_.call(null,map__22301))?cljs.core.apply.call(null,cljs.core.hash_map,map__22301):map__22301);
var match_length = cljs.core.get.call(null,map__22301__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__22301__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__22297_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__22297_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__22303 = arguments.length;
switch (G__22303) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__22305){
var map__22307 = p__22305;
var map__22307__$1 = ((cljs.core.seq_QMARK_.call(null,map__22307))?cljs.core.apply.call(null,cljs.core.hash_map,map__22307):map__22307);
var f_data = map__22307__$1;
var file = cljs.core.get.call(null,map__22307__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__22307__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__16208__auto__ = request_url;
if(cljs.core.truth_(or__16208__auto__)){
return or__16208__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__22308,files_msg){
var map__22330 = p__22308;
var map__22330__$1 = ((cljs.core.seq_QMARK_.call(null,map__22330))?cljs.core.apply.call(null,cljs.core.hash_map,map__22330):map__22330);
var opts = map__22330__$1;
var on_cssload = cljs.core.get.call(null,map__22330__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__22331_22351 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__22332_22352 = null;
var count__22333_22353 = (0);
var i__22334_22354 = (0);
while(true){
if((i__22334_22354 < count__22333_22353)){
var f_22355 = cljs.core._nth.call(null,chunk__22332_22352,i__22334_22354);
figwheel.client.file_reloading.reload_css_file.call(null,f_22355);

var G__22356 = seq__22331_22351;
var G__22357 = chunk__22332_22352;
var G__22358 = count__22333_22353;
var G__22359 = (i__22334_22354 + (1));
seq__22331_22351 = G__22356;
chunk__22332_22352 = G__22357;
count__22333_22353 = G__22358;
i__22334_22354 = G__22359;
continue;
} else {
var temp__4657__auto___22360 = cljs.core.seq.call(null,seq__22331_22351);
if(temp__4657__auto___22360){
var seq__22331_22361__$1 = temp__4657__auto___22360;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22331_22361__$1)){
var c__16993__auto___22362 = cljs.core.chunk_first.call(null,seq__22331_22361__$1);
var G__22363 = cljs.core.chunk_rest.call(null,seq__22331_22361__$1);
var G__22364 = c__16993__auto___22362;
var G__22365 = cljs.core.count.call(null,c__16993__auto___22362);
var G__22366 = (0);
seq__22331_22351 = G__22363;
chunk__22332_22352 = G__22364;
count__22333_22353 = G__22365;
i__22334_22354 = G__22366;
continue;
} else {
var f_22367 = cljs.core.first.call(null,seq__22331_22361__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_22367);

var G__22368 = cljs.core.next.call(null,seq__22331_22361__$1);
var G__22369 = null;
var G__22370 = (0);
var G__22371 = (0);
seq__22331_22351 = G__22368;
chunk__22332_22352 = G__22369;
count__22333_22353 = G__22370;
i__22334_22354 = G__22371;
continue;
}
} else {
}
}
break;
}

var c__19137__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19137__auto__,map__22330,map__22330__$1,opts,on_cssload){
return (function (){
var f__19138__auto__ = (function (){var switch__19116__auto__ = ((function (c__19137__auto__,map__22330,map__22330__$1,opts,on_cssload){
return (function (state_22341){
var state_val_22342 = (state_22341[(1)]);
if((state_val_22342 === (1))){
var inst_22335 = cljs.core.async.timeout.call(null,(100));
var state_22341__$1 = state_22341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22341__$1,(2),inst_22335);
} else {
if((state_val_22342 === (2))){
var inst_22337 = (state_22341[(2)]);
var inst_22338 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_22339 = on_cssload.call(null,inst_22338);
var state_22341__$1 = (function (){var statearr_22343 = state_22341;
(statearr_22343[(7)] = inst_22337);

return statearr_22343;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22341__$1,inst_22339);
} else {
return null;
}
}
});})(c__19137__auto__,map__22330,map__22330__$1,opts,on_cssload))
;
return ((function (switch__19116__auto__,c__19137__auto__,map__22330,map__22330__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19117__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19117__auto____0 = (function (){
var statearr_22347 = [null,null,null,null,null,null,null,null];
(statearr_22347[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__19117__auto__);

(statearr_22347[(1)] = (1));

return statearr_22347;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19117__auto____1 = (function (state_22341){
while(true){
var ret_value__19118__auto__ = (function (){try{while(true){
var result__19119__auto__ = switch__19116__auto__.call(null,state_22341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19119__auto__;
}
break;
}
}catch (e22348){if((e22348 instanceof Object)){
var ex__19120__auto__ = e22348;
var statearr_22349_22372 = state_22341;
(statearr_22349_22372[(5)] = ex__19120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22373 = state_22341;
state_22341 = G__22373;
continue;
} else {
return ret_value__19118__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__19117__auto__ = function(state_22341){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19117__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19117__auto____1.call(this,state_22341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__19117__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19117__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__19117__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19117__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19117__auto__;
})()
;})(switch__19116__auto__,c__19137__auto__,map__22330,map__22330__$1,opts,on_cssload))
})();
var state__19139__auto__ = (function (){var statearr_22350 = f__19138__auto__.call(null);
(statearr_22350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19137__auto__);

return statearr_22350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19139__auto__);
});})(c__19137__auto__,map__22330,map__22330__$1,opts,on_cssload))
);

return c__19137__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map