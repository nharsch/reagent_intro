// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20656__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__20656 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20657__i = 0, G__20657__a = new Array(arguments.length -  0);
while (G__20657__i < G__20657__a.length) {G__20657__a[G__20657__i] = arguments[G__20657__i + 0]; ++G__20657__i;}
  args = new cljs.core.IndexedSeq(G__20657__a,0);
} 
return G__20656__delegate.call(this,args);};
G__20656.cljs$lang$maxFixedArity = 0;
G__20656.cljs$lang$applyTo = (function (arglist__20658){
var args = cljs.core.seq(arglist__20658);
return G__20656__delegate(args);
});
G__20656.cljs$core$IFn$_invoke$arity$variadic = G__20656__delegate;
return G__20656;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__20659){
var map__20661 = p__20659;
var map__20661__$1 = ((cljs.core.seq_QMARK_.call(null,map__20661))?cljs.core.apply.call(null,cljs.core.hash_map,map__20661):map__20661);
var message = cljs.core.get.call(null,map__20661__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__20661__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16208__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16208__auto__)){
return or__16208__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16196__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16196__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16196__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19137__auto___20790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19137__auto___20790,ch){
return (function (){
var f__19138__auto__ = (function (){var switch__19116__auto__ = ((function (c__19137__auto___20790,ch){
return (function (state_20764){
var state_val_20765 = (state_20764[(1)]);
if((state_val_20765 === (7))){
var inst_20760 = (state_20764[(2)]);
var state_20764__$1 = state_20764;
var statearr_20766_20791 = state_20764__$1;
(statearr_20766_20791[(2)] = inst_20760);

(statearr_20766_20791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20765 === (1))){
var state_20764__$1 = state_20764;
var statearr_20767_20792 = state_20764__$1;
(statearr_20767_20792[(2)] = null);

(statearr_20767_20792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20765 === (4))){
var inst_20728 = (state_20764[(7)]);
var inst_20728__$1 = (state_20764[(2)]);
var state_20764__$1 = (function (){var statearr_20768 = state_20764;
(statearr_20768[(7)] = inst_20728__$1);

return statearr_20768;
})();
if(cljs.core.truth_(inst_20728__$1)){
var statearr_20769_20793 = state_20764__$1;
(statearr_20769_20793[(1)] = (5));

} else {
var statearr_20770_20794 = state_20764__$1;
(statearr_20770_20794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20765 === (13))){
var state_20764__$1 = state_20764;
var statearr_20771_20795 = state_20764__$1;
(statearr_20771_20795[(2)] = null);

(statearr_20771_20795[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20765 === (6))){
var state_20764__$1 = state_20764;
var statearr_20772_20796 = state_20764__$1;
(statearr_20772_20796[(2)] = null);

(statearr_20772_20796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20765 === (3))){
var inst_20762 = (state_20764[(2)]);
var state_20764__$1 = state_20764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20764__$1,inst_20762);
} else {
if((state_val_20765 === (12))){
var inst_20735 = (state_20764[(8)]);
var inst_20748 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_20735);
var inst_20749 = cljs.core.first.call(null,inst_20748);
var inst_20750 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_20749);
var inst_20751 = console.warn("Figwheel: Not loading code with warnings - ",inst_20750);
var state_20764__$1 = state_20764;
var statearr_20773_20797 = state_20764__$1;
(statearr_20773_20797[(2)] = inst_20751);

(statearr_20773_20797[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20765 === (2))){
var state_20764__$1 = state_20764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20764__$1,(4),ch);
} else {
if((state_val_20765 === (11))){
var inst_20744 = (state_20764[(2)]);
var state_20764__$1 = state_20764;
var statearr_20774_20798 = state_20764__$1;
(statearr_20774_20798[(2)] = inst_20744);

(statearr_20774_20798[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20765 === (9))){
var inst_20734 = (state_20764[(9)]);
var inst_20746 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_20734,opts);
var state_20764__$1 = state_20764;
if(cljs.core.truth_(inst_20746)){
var statearr_20775_20799 = state_20764__$1;
(statearr_20775_20799[(1)] = (12));

} else {
var statearr_20776_20800 = state_20764__$1;
(statearr_20776_20800[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20765 === (5))){
var inst_20728 = (state_20764[(7)]);
var inst_20734 = (state_20764[(9)]);
var inst_20730 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_20731 = (new cljs.core.PersistentArrayMap(null,2,inst_20730,null));
var inst_20732 = (new cljs.core.PersistentHashSet(null,inst_20731,null));
var inst_20733 = figwheel.client.focus_msgs.call(null,inst_20732,inst_20728);
var inst_20734__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_20733);
var inst_20735 = cljs.core.first.call(null,inst_20733);
var inst_20736 = figwheel.client.reload_file_state_QMARK_.call(null,inst_20734__$1,opts);
var state_20764__$1 = (function (){var statearr_20777 = state_20764;
(statearr_20777[(9)] = inst_20734__$1);

(statearr_20777[(8)] = inst_20735);

return statearr_20777;
})();
if(cljs.core.truth_(inst_20736)){
var statearr_20778_20801 = state_20764__$1;
(statearr_20778_20801[(1)] = (8));

} else {
var statearr_20779_20802 = state_20764__$1;
(statearr_20779_20802[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20765 === (14))){
var inst_20754 = (state_20764[(2)]);
var state_20764__$1 = state_20764;
var statearr_20780_20803 = state_20764__$1;
(statearr_20780_20803[(2)] = inst_20754);

(statearr_20780_20803[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20765 === (10))){
var inst_20756 = (state_20764[(2)]);
var state_20764__$1 = (function (){var statearr_20781 = state_20764;
(statearr_20781[(10)] = inst_20756);

return statearr_20781;
})();
var statearr_20782_20804 = state_20764__$1;
(statearr_20782_20804[(2)] = null);

(statearr_20782_20804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20765 === (8))){
var inst_20735 = (state_20764[(8)]);
var inst_20738 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20739 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_20735);
var inst_20740 = cljs.core.async.timeout.call(null,(1000));
var inst_20741 = [inst_20739,inst_20740];
var inst_20742 = (new cljs.core.PersistentVector(null,2,(5),inst_20738,inst_20741,null));
var state_20764__$1 = state_20764;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20764__$1,(11),inst_20742);
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
});})(c__19137__auto___20790,ch))
;
return ((function (switch__19116__auto__,c__19137__auto___20790,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19117__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19117__auto____0 = (function (){
var statearr_20786 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20786[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19117__auto__);

(statearr_20786[(1)] = (1));

return statearr_20786;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19117__auto____1 = (function (state_20764){
while(true){
var ret_value__19118__auto__ = (function (){try{while(true){
var result__19119__auto__ = switch__19116__auto__.call(null,state_20764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19119__auto__;
}
break;
}
}catch (e20787){if((e20787 instanceof Object)){
var ex__19120__auto__ = e20787;
var statearr_20788_20805 = state_20764;
(statearr_20788_20805[(5)] = ex__19120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20806 = state_20764;
state_20764 = G__20806;
continue;
} else {
return ret_value__19118__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19117__auto__ = function(state_20764){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19117__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19117__auto____1.call(this,state_20764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19117__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19117__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19117__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19117__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19117__auto__;
})()
;})(switch__19116__auto__,c__19137__auto___20790,ch))
})();
var state__19139__auto__ = (function (){var statearr_20789 = f__19138__auto__.call(null);
(statearr_20789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19137__auto___20790);

return statearr_20789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19139__auto__);
});})(c__19137__auto___20790,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__20807_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__20807_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_20814 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_20814){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_20812 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_20813 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_20812,_STAR_print_newline_STAR_20813,base_path_20814){
return (function() { 
var G__20815__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__20815 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20816__i = 0, G__20816__a = new Array(arguments.length -  0);
while (G__20816__i < G__20816__a.length) {G__20816__a[G__20816__i] = arguments[G__20816__i + 0]; ++G__20816__i;}
  args = new cljs.core.IndexedSeq(G__20816__a,0);
} 
return G__20815__delegate.call(this,args);};
G__20815.cljs$lang$maxFixedArity = 0;
G__20815.cljs$lang$applyTo = (function (arglist__20817){
var args = cljs.core.seq(arglist__20817);
return G__20815__delegate(args);
});
G__20815.cljs$core$IFn$_invoke$arity$variadic = G__20815__delegate;
return G__20815;
})()
;})(_STAR_print_fn_STAR_20812,_STAR_print_newline_STAR_20813,base_path_20814))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_20813;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_20812;
}}catch (e20811){if((e20811 instanceof Error)){
var e = e20811;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_20814], null));
} else {
var e = e20811;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_20814))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__20818){
var map__20823 = p__20818;
var map__20823__$1 = ((cljs.core.seq_QMARK_.call(null,map__20823))?cljs.core.apply.call(null,cljs.core.hash_map,map__20823):map__20823);
var opts = map__20823__$1;
var build_id = cljs.core.get.call(null,map__20823__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__20823,map__20823__$1,opts,build_id){
return (function (p__20824){
var vec__20825 = p__20824;
var map__20826 = cljs.core.nth.call(null,vec__20825,(0),null);
var map__20826__$1 = ((cljs.core.seq_QMARK_.call(null,map__20826))?cljs.core.apply.call(null,cljs.core.hash_map,map__20826):map__20826);
var msg = map__20826__$1;
var msg_name = cljs.core.get.call(null,map__20826__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__20825,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__20825,map__20826,map__20826__$1,msg,msg_name,_,map__20823,map__20823__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__20825,map__20826,map__20826__$1,msg,msg_name,_,map__20823,map__20823__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__20823,map__20823__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__20830){
var vec__20831 = p__20830;
var map__20832 = cljs.core.nth.call(null,vec__20831,(0),null);
var map__20832__$1 = ((cljs.core.seq_QMARK_.call(null,map__20832))?cljs.core.apply.call(null,cljs.core.hash_map,map__20832):map__20832);
var msg = map__20832__$1;
var msg_name = cljs.core.get.call(null,map__20832__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__20831,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__20833){
var map__20841 = p__20833;
var map__20841__$1 = ((cljs.core.seq_QMARK_.call(null,map__20841))?cljs.core.apply.call(null,cljs.core.hash_map,map__20841):map__20841);
var on_compile_warning = cljs.core.get.call(null,map__20841__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__20841__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__20841,map__20841__$1,on_compile_warning,on_compile_fail){
return (function (p__20842){
var vec__20843 = p__20842;
var map__20844 = cljs.core.nth.call(null,vec__20843,(0),null);
var map__20844__$1 = ((cljs.core.seq_QMARK_.call(null,map__20844))?cljs.core.apply.call(null,cljs.core.hash_map,map__20844):map__20844);
var msg = map__20844__$1;
var msg_name = cljs.core.get.call(null,map__20844__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__20843,(1));
var pred__20845 = cljs.core._EQ_;
var expr__20846 = msg_name;
if(cljs.core.truth_(pred__20845.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__20846))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__20845.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__20846))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__20841,map__20841__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19137__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19137__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19138__auto__ = (function (){var switch__19116__auto__ = ((function (c__19137__auto__,msg_hist,msg_names,msg){
return (function (state_21047){
var state_val_21048 = (state_21047[(1)]);
if((state_val_21048 === (7))){
var inst_20981 = (state_21047[(2)]);
var state_21047__$1 = state_21047;
var statearr_21049_21090 = state_21047__$1;
(statearr_21049_21090[(2)] = inst_20981);

(statearr_21049_21090[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21048 === (20))){
var inst_21009 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_21047__$1 = state_21047;
if(cljs.core.truth_(inst_21009)){
var statearr_21050_21091 = state_21047__$1;
(statearr_21050_21091[(1)] = (22));

} else {
var statearr_21051_21092 = state_21047__$1;
(statearr_21051_21092[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21048 === (27))){
var inst_21021 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_21022 = figwheel.client.heads_up.display_warning.call(null,inst_21021);
var state_21047__$1 = state_21047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21047__$1,(30),inst_21022);
} else {
if((state_val_21048 === (1))){
var inst_20969 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_21047__$1 = state_21047;
if(cljs.core.truth_(inst_20969)){
var statearr_21052_21093 = state_21047__$1;
(statearr_21052_21093[(1)] = (2));

} else {
var statearr_21053_21094 = state_21047__$1;
(statearr_21053_21094[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21048 === (24))){
var inst_21037 = (state_21047[(2)]);
var state_21047__$1 = state_21047;
var statearr_21054_21095 = state_21047__$1;
(statearr_21054_21095[(2)] = inst_21037);

(statearr_21054_21095[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21048 === (4))){
var inst_21045 = (state_21047[(2)]);
var state_21047__$1 = state_21047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21047__$1,inst_21045);
} else {
if((state_val_21048 === (15))){
var inst_20997 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20998 = figwheel.client.format_messages.call(null,inst_20997);
var inst_20999 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_21000 = figwheel.client.heads_up.display_error.call(null,inst_20998,inst_20999);
var state_21047__$1 = state_21047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21047__$1,(18),inst_21000);
} else {
if((state_val_21048 === (21))){
var inst_21039 = (state_21047[(2)]);
var state_21047__$1 = state_21047;
var statearr_21055_21096 = state_21047__$1;
(statearr_21055_21096[(2)] = inst_21039);

(statearr_21055_21096[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21048 === (31))){
var inst_21028 = figwheel.client.heads_up.flash_loaded.call(null);
var state_21047__$1 = state_21047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21047__$1,(34),inst_21028);
} else {
if((state_val_21048 === (32))){
var state_21047__$1 = state_21047;
var statearr_21056_21097 = state_21047__$1;
(statearr_21056_21097[(2)] = null);

(statearr_21056_21097[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21048 === (33))){
var inst_21033 = (state_21047[(2)]);
var state_21047__$1 = state_21047;
var statearr_21057_21098 = state_21047__$1;
(statearr_21057_21098[(2)] = inst_21033);

(statearr_21057_21098[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21048 === (13))){
var inst_20987 = (state_21047[(2)]);
var inst_20988 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20989 = figwheel.client.format_messages.call(null,inst_20988);
var inst_20990 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20991 = figwheel.client.heads_up.display_error.call(null,inst_20989,inst_20990);
var state_21047__$1 = (function (){var statearr_21058 = state_21047;
(statearr_21058[(7)] = inst_20987);

return statearr_21058;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21047__$1,(14),inst_20991);
} else {
if((state_val_21048 === (22))){
var inst_21011 = figwheel.client.heads_up.clear.call(null);
var state_21047__$1 = state_21047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21047__$1,(25),inst_21011);
} else {
if((state_val_21048 === (29))){
var inst_21035 = (state_21047[(2)]);
var state_21047__$1 = state_21047;
var statearr_21059_21099 = state_21047__$1;
(statearr_21059_21099[(2)] = inst_21035);

(statearr_21059_21099[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21048 === (6))){
var inst_20977 = figwheel.client.heads_up.clear.call(null);
var state_21047__$1 = state_21047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21047__$1,(9),inst_20977);
} else {
if((state_val_21048 === (28))){
var inst_21026 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_21047__$1 = state_21047;
if(cljs.core.truth_(inst_21026)){
var statearr_21060_21100 = state_21047__$1;
(statearr_21060_21100[(1)] = (31));

} else {
var statearr_21061_21101 = state_21047__$1;
(statearr_21061_21101[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21048 === (25))){
var inst_21013 = (state_21047[(2)]);
var inst_21014 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_21015 = figwheel.client.heads_up.display_warning.call(null,inst_21014);
var state_21047__$1 = (function (){var statearr_21062 = state_21047;
(statearr_21062[(8)] = inst_21013);

return statearr_21062;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21047__$1,(26),inst_21015);
} else {
if((state_val_21048 === (34))){
var inst_21030 = (state_21047[(2)]);
var state_21047__$1 = state_21047;
var statearr_21063_21102 = state_21047__$1;
(statearr_21063_21102[(2)] = inst_21030);

(statearr_21063_21102[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21048 === (17))){
var inst_21041 = (state_21047[(2)]);
var state_21047__$1 = state_21047;
var statearr_21064_21103 = state_21047__$1;
(statearr_21064_21103[(2)] = inst_21041);

(statearr_21064_21103[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21048 === (3))){
var inst_20983 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_21047__$1 = state_21047;
if(cljs.core.truth_(inst_20983)){
var statearr_21065_21104 = state_21047__$1;
(statearr_21065_21104[(1)] = (10));

} else {
var statearr_21066_21105 = state_21047__$1;
(statearr_21066_21105[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21048 === (12))){
var inst_21043 = (state_21047[(2)]);
var state_21047__$1 = state_21047;
var statearr_21067_21106 = state_21047__$1;
(statearr_21067_21106[(2)] = inst_21043);

(statearr_21067_21106[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21048 === (2))){
var inst_20971 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_21047__$1 = state_21047;
if(cljs.core.truth_(inst_20971)){
var statearr_21068_21107 = state_21047__$1;
(statearr_21068_21107[(1)] = (5));

} else {
var statearr_21069_21108 = state_21047__$1;
(statearr_21069_21108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21048 === (23))){
var inst_21019 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_21047__$1 = state_21047;
if(cljs.core.truth_(inst_21019)){
var statearr_21070_21109 = state_21047__$1;
(statearr_21070_21109[(1)] = (27));

} else {
var statearr_21071_21110 = state_21047__$1;
(statearr_21071_21110[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21048 === (19))){
var inst_21006 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_21007 = figwheel.client.heads_up.append_message.call(null,inst_21006);
var state_21047__$1 = state_21047;
var statearr_21072_21111 = state_21047__$1;
(statearr_21072_21111[(2)] = inst_21007);

(statearr_21072_21111[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21048 === (11))){
var inst_20995 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_21047__$1 = state_21047;
if(cljs.core.truth_(inst_20995)){
var statearr_21073_21112 = state_21047__$1;
(statearr_21073_21112[(1)] = (15));

} else {
var statearr_21074_21113 = state_21047__$1;
(statearr_21074_21113[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21048 === (9))){
var inst_20979 = (state_21047[(2)]);
var state_21047__$1 = state_21047;
var statearr_21075_21114 = state_21047__$1;
(statearr_21075_21114[(2)] = inst_20979);

(statearr_21075_21114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21048 === (5))){
var inst_20973 = figwheel.client.heads_up.flash_loaded.call(null);
var state_21047__$1 = state_21047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21047__$1,(8),inst_20973);
} else {
if((state_val_21048 === (14))){
var inst_20993 = (state_21047[(2)]);
var state_21047__$1 = state_21047;
var statearr_21076_21115 = state_21047__$1;
(statearr_21076_21115[(2)] = inst_20993);

(statearr_21076_21115[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21048 === (26))){
var inst_21017 = (state_21047[(2)]);
var state_21047__$1 = state_21047;
var statearr_21077_21116 = state_21047__$1;
(statearr_21077_21116[(2)] = inst_21017);

(statearr_21077_21116[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21048 === (16))){
var inst_21004 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_21047__$1 = state_21047;
if(cljs.core.truth_(inst_21004)){
var statearr_21078_21117 = state_21047__$1;
(statearr_21078_21117[(1)] = (19));

} else {
var statearr_21079_21118 = state_21047__$1;
(statearr_21079_21118[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21048 === (30))){
var inst_21024 = (state_21047[(2)]);
var state_21047__$1 = state_21047;
var statearr_21080_21119 = state_21047__$1;
(statearr_21080_21119[(2)] = inst_21024);

(statearr_21080_21119[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21048 === (10))){
var inst_20985 = figwheel.client.heads_up.clear.call(null);
var state_21047__$1 = state_21047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21047__$1,(13),inst_20985);
} else {
if((state_val_21048 === (18))){
var inst_21002 = (state_21047[(2)]);
var state_21047__$1 = state_21047;
var statearr_21081_21120 = state_21047__$1;
(statearr_21081_21120[(2)] = inst_21002);

(statearr_21081_21120[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21048 === (8))){
var inst_20975 = (state_21047[(2)]);
var state_21047__$1 = state_21047;
var statearr_21082_21121 = state_21047__$1;
(statearr_21082_21121[(2)] = inst_20975);

(statearr_21082_21121[(1)] = (7));


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
});})(c__19137__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19116__auto__,c__19137__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19117__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19117__auto____0 = (function (){
var statearr_21086 = [null,null,null,null,null,null,null,null,null];
(statearr_21086[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19117__auto__);

(statearr_21086[(1)] = (1));

return statearr_21086;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19117__auto____1 = (function (state_21047){
while(true){
var ret_value__19118__auto__ = (function (){try{while(true){
var result__19119__auto__ = switch__19116__auto__.call(null,state_21047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19119__auto__;
}
break;
}
}catch (e21087){if((e21087 instanceof Object)){
var ex__19120__auto__ = e21087;
var statearr_21088_21122 = state_21047;
(statearr_21088_21122[(5)] = ex__19120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21123 = state_21047;
state_21047 = G__21123;
continue;
} else {
return ret_value__19118__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19117__auto__ = function(state_21047){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19117__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19117__auto____1.call(this,state_21047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19117__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19117__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19117__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19117__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19117__auto__;
})()
;})(switch__19116__auto__,c__19137__auto__,msg_hist,msg_names,msg))
})();
var state__19139__auto__ = (function (){var statearr_21089 = f__19138__auto__.call(null);
(statearr_21089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19137__auto__);

return statearr_21089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19139__auto__);
});})(c__19137__auto__,msg_hist,msg_names,msg))
);

return c__19137__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19137__auto___21186 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19137__auto___21186,ch){
return (function (){
var f__19138__auto__ = (function (){var switch__19116__auto__ = ((function (c__19137__auto___21186,ch){
return (function (state_21169){
var state_val_21170 = (state_21169[(1)]);
if((state_val_21170 === (1))){
var state_21169__$1 = state_21169;
var statearr_21171_21187 = state_21169__$1;
(statearr_21171_21187[(2)] = null);

(statearr_21171_21187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21170 === (2))){
var state_21169__$1 = state_21169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21169__$1,(4),ch);
} else {
if((state_val_21170 === (3))){
var inst_21167 = (state_21169[(2)]);
var state_21169__$1 = state_21169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21169__$1,inst_21167);
} else {
if((state_val_21170 === (4))){
var inst_21157 = (state_21169[(7)]);
var inst_21157__$1 = (state_21169[(2)]);
var state_21169__$1 = (function (){var statearr_21172 = state_21169;
(statearr_21172[(7)] = inst_21157__$1);

return statearr_21172;
})();
if(cljs.core.truth_(inst_21157__$1)){
var statearr_21173_21188 = state_21169__$1;
(statearr_21173_21188[(1)] = (5));

} else {
var statearr_21174_21189 = state_21169__$1;
(statearr_21174_21189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21170 === (5))){
var inst_21157 = (state_21169[(7)]);
var inst_21159 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_21157);
var state_21169__$1 = state_21169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21169__$1,(8),inst_21159);
} else {
if((state_val_21170 === (6))){
var state_21169__$1 = state_21169;
var statearr_21175_21190 = state_21169__$1;
(statearr_21175_21190[(2)] = null);

(statearr_21175_21190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21170 === (7))){
var inst_21165 = (state_21169[(2)]);
var state_21169__$1 = state_21169;
var statearr_21176_21191 = state_21169__$1;
(statearr_21176_21191[(2)] = inst_21165);

(statearr_21176_21191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21170 === (8))){
var inst_21161 = (state_21169[(2)]);
var state_21169__$1 = (function (){var statearr_21177 = state_21169;
(statearr_21177[(8)] = inst_21161);

return statearr_21177;
})();
var statearr_21178_21192 = state_21169__$1;
(statearr_21178_21192[(2)] = null);

(statearr_21178_21192[(1)] = (2));


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
});})(c__19137__auto___21186,ch))
;
return ((function (switch__19116__auto__,c__19137__auto___21186,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19117__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19117__auto____0 = (function (){
var statearr_21182 = [null,null,null,null,null,null,null,null,null];
(statearr_21182[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19117__auto__);

(statearr_21182[(1)] = (1));

return statearr_21182;
});
var figwheel$client$heads_up_plugin_$_state_machine__19117__auto____1 = (function (state_21169){
while(true){
var ret_value__19118__auto__ = (function (){try{while(true){
var result__19119__auto__ = switch__19116__auto__.call(null,state_21169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19119__auto__;
}
break;
}
}catch (e21183){if((e21183 instanceof Object)){
var ex__19120__auto__ = e21183;
var statearr_21184_21193 = state_21169;
(statearr_21184_21193[(5)] = ex__19120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21194 = state_21169;
state_21169 = G__21194;
continue;
} else {
return ret_value__19118__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19117__auto__ = function(state_21169){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19117__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19117__auto____1.call(this,state_21169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19117__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19117__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19117__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19117__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19117__auto__;
})()
;})(switch__19116__auto__,c__19137__auto___21186,ch))
})();
var state__19139__auto__ = (function (){var statearr_21185 = f__19138__auto__.call(null);
(statearr_21185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19137__auto___21186);

return statearr_21185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19139__auto__);
});})(c__19137__auto___21186,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19137__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19137__auto__){
return (function (){
var f__19138__auto__ = (function (){var switch__19116__auto__ = ((function (c__19137__auto__){
return (function (state_21215){
var state_val_21216 = (state_21215[(1)]);
if((state_val_21216 === (1))){
var inst_21210 = cljs.core.async.timeout.call(null,(3000));
var state_21215__$1 = state_21215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21215__$1,(2),inst_21210);
} else {
if((state_val_21216 === (2))){
var inst_21212 = (state_21215[(2)]);
var inst_21213 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_21215__$1 = (function (){var statearr_21217 = state_21215;
(statearr_21217[(7)] = inst_21212);

return statearr_21217;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21215__$1,inst_21213);
} else {
return null;
}
}
});})(c__19137__auto__))
;
return ((function (switch__19116__auto__,c__19137__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19117__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19117__auto____0 = (function (){
var statearr_21221 = [null,null,null,null,null,null,null,null];
(statearr_21221[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19117__auto__);

(statearr_21221[(1)] = (1));

return statearr_21221;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19117__auto____1 = (function (state_21215){
while(true){
var ret_value__19118__auto__ = (function (){try{while(true){
var result__19119__auto__ = switch__19116__auto__.call(null,state_21215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19119__auto__;
}
break;
}
}catch (e21222){if((e21222 instanceof Object)){
var ex__19120__auto__ = e21222;
var statearr_21223_21225 = state_21215;
(statearr_21223_21225[(5)] = ex__19120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21226 = state_21215;
state_21215 = G__21226;
continue;
} else {
return ret_value__19118__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19117__auto__ = function(state_21215){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19117__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19117__auto____1.call(this,state_21215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19117__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19117__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19117__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19117__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19117__auto__;
})()
;})(switch__19116__auto__,c__19137__auto__))
})();
var state__19139__auto__ = (function (){var statearr_21224 = f__19138__auto__.call(null);
(statearr_21224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19137__auto__);

return statearr_21224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19139__auto__);
});})(c__19137__auto__))
);

return c__19137__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__21227){
var map__21233 = p__21227;
var map__21233__$1 = ((cljs.core.seq_QMARK_.call(null,map__21233))?cljs.core.apply.call(null,cljs.core.hash_map,map__21233):map__21233);
var ed = map__21233__$1;
var formatted_exception = cljs.core.get.call(null,map__21233__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__21233__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__21233__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__21234_21238 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__21235_21239 = null;
var count__21236_21240 = (0);
var i__21237_21241 = (0);
while(true){
if((i__21237_21241 < count__21236_21240)){
var msg_21242 = cljs.core._nth.call(null,chunk__21235_21239,i__21237_21241);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_21242);

var G__21243 = seq__21234_21238;
var G__21244 = chunk__21235_21239;
var G__21245 = count__21236_21240;
var G__21246 = (i__21237_21241 + (1));
seq__21234_21238 = G__21243;
chunk__21235_21239 = G__21244;
count__21236_21240 = G__21245;
i__21237_21241 = G__21246;
continue;
} else {
var temp__4657__auto___21247 = cljs.core.seq.call(null,seq__21234_21238);
if(temp__4657__auto___21247){
var seq__21234_21248__$1 = temp__4657__auto___21247;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21234_21248__$1)){
var c__16993__auto___21249 = cljs.core.chunk_first.call(null,seq__21234_21248__$1);
var G__21250 = cljs.core.chunk_rest.call(null,seq__21234_21248__$1);
var G__21251 = c__16993__auto___21249;
var G__21252 = cljs.core.count.call(null,c__16993__auto___21249);
var G__21253 = (0);
seq__21234_21238 = G__21250;
chunk__21235_21239 = G__21251;
count__21236_21240 = G__21252;
i__21237_21241 = G__21253;
continue;
} else {
var msg_21254 = cljs.core.first.call(null,seq__21234_21248__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_21254);

var G__21255 = cljs.core.next.call(null,seq__21234_21248__$1);
var G__21256 = null;
var G__21257 = (0);
var G__21258 = (0);
seq__21234_21238 = G__21255;
chunk__21235_21239 = G__21256;
count__21236_21240 = G__21257;
i__21237_21241 = G__21258;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__21259){
var map__21261 = p__21259;
var map__21261__$1 = ((cljs.core.seq_QMARK_.call(null,map__21261))?cljs.core.apply.call(null,cljs.core.hash_map,map__21261):map__21261);
var w = map__21261__$1;
var message = cljs.core.get.call(null,map__21261__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16196__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16196__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16196__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__21268 = cljs.core.seq.call(null,plugins);
var chunk__21269 = null;
var count__21270 = (0);
var i__21271 = (0);
while(true){
if((i__21271 < count__21270)){
var vec__21272 = cljs.core._nth.call(null,chunk__21269,i__21271);
var k = cljs.core.nth.call(null,vec__21272,(0),null);
var plugin = cljs.core.nth.call(null,vec__21272,(1),null);
if(cljs.core.truth_(plugin)){
var pl_21274 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__21268,chunk__21269,count__21270,i__21271,pl_21274,vec__21272,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_21274.call(null,msg_hist);
});})(seq__21268,chunk__21269,count__21270,i__21271,pl_21274,vec__21272,k,plugin))
);
} else {
}

var G__21275 = seq__21268;
var G__21276 = chunk__21269;
var G__21277 = count__21270;
var G__21278 = (i__21271 + (1));
seq__21268 = G__21275;
chunk__21269 = G__21276;
count__21270 = G__21277;
i__21271 = G__21278;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21268);
if(temp__4657__auto__){
var seq__21268__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21268__$1)){
var c__16993__auto__ = cljs.core.chunk_first.call(null,seq__21268__$1);
var G__21279 = cljs.core.chunk_rest.call(null,seq__21268__$1);
var G__21280 = c__16993__auto__;
var G__21281 = cljs.core.count.call(null,c__16993__auto__);
var G__21282 = (0);
seq__21268 = G__21279;
chunk__21269 = G__21280;
count__21270 = G__21281;
i__21271 = G__21282;
continue;
} else {
var vec__21273 = cljs.core.first.call(null,seq__21268__$1);
var k = cljs.core.nth.call(null,vec__21273,(0),null);
var plugin = cljs.core.nth.call(null,vec__21273,(1),null);
if(cljs.core.truth_(plugin)){
var pl_21283 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__21268,chunk__21269,count__21270,i__21271,pl_21283,vec__21273,k,plugin,seq__21268__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_21283.call(null,msg_hist);
});})(seq__21268,chunk__21269,count__21270,i__21271,pl_21283,vec__21273,k,plugin,seq__21268__$1,temp__4657__auto__))
);
} else {
}

var G__21284 = cljs.core.next.call(null,seq__21268__$1);
var G__21285 = null;
var G__21286 = (0);
var G__21287 = (0);
seq__21268 = G__21284;
chunk__21269 = G__21285;
count__21270 = G__21286;
i__21271 = G__21287;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__21289 = arguments.length;
switch (G__21289) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__17248__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17248__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__21292){
var map__21293 = p__21292;
var map__21293__$1 = ((cljs.core.seq_QMARK_.call(null,map__21293))?cljs.core.apply.call(null,cljs.core.hash_map,map__21293):map__21293);
var opts = map__21293__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq21291){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21291));
});

//# sourceMappingURL=client.js.map