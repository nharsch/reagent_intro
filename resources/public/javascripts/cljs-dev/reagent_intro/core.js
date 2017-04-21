// Compiled by ClojureScript 0.0-3308 {}
goog.provide('reagent_intro.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
reagent_intro.core.EVENTCHANNEL = cljs.core.async.chan.call(null);
if(typeof reagent_intro.core.app_state !== 'undefined'){
} else {
reagent_intro.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"hello from app state",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"item 1"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"item 2"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"item 3"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"item 4"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"item 5"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"item 6"], null)], null),new cljs.core.Keyword(null,"active-item","active-item",-1265645988),cljs.core.PersistentArrayMap.EMPTY], null));
}
reagent_intro.core.EVENTS = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"update-active-item","update-active-item",1027410113),(function (p__19976){
var map__19977 = p__19976;
var map__19977__$1 = ((cljs.core.seq_QMARK_.call(null,map__19977))?cljs.core.apply.call(null,cljs.core.hash_map,map__19977):map__19977);
var active_item = cljs.core.get.call(null,map__19977__$1,new cljs.core.Keyword(null,"active-item","active-item",-1265645988));
return cljs.core.swap_BANG_.call(null,reagent_intro.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-item","active-item",-1265645988)], null),active_item);
})], null);
var c__19138__auto___20012 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19138__auto___20012){
return (function (){
var f__19139__auto__ = (function (){var switch__19117__auto__ = ((function (c__19138__auto___20012){
return (function (state_19996){
var state_val_19997 = (state_19996[(1)]);
if((state_val_19997 === (1))){
var state_19996__$1 = state_19996;
var statearr_19998_20013 = state_19996__$1;
(statearr_19998_20013[(2)] = null);

(statearr_19998_20013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19997 === (2))){
var state_19996__$1 = state_19996;
var statearr_19999_20014 = state_19996__$1;
(statearr_19999_20014[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19997 === (3))){
var inst_19994 = (state_19996[(2)]);
var state_19996__$1 = state_19996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19996__$1,inst_19994);
} else {
if((state_val_19997 === (4))){
var state_19996__$1 = state_19996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19996__$1,(7),reagent_intro.core.EVENTCHANNEL);
} else {
if((state_val_19997 === (5))){
var state_19996__$1 = state_19996;
var statearr_20001_20015 = state_19996__$1;
(statearr_20001_20015[(2)] = null);

(statearr_20001_20015[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19997 === (6))){
var inst_19992 = (state_19996[(2)]);
var state_19996__$1 = state_19996;
var statearr_20002_20016 = state_19996__$1;
(statearr_20002_20016[(2)] = inst_19992);

(statearr_20002_20016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19997 === (7))){
var inst_19982 = (state_19996[(2)]);
var inst_19983 = cljs.core.nth.call(null,inst_19982,(0),null);
var inst_19984 = cljs.core.nth.call(null,inst_19982,(1),null);
var inst_19985 = cljs.core.pr_str.call(null,inst_19983,inst_19984);
var inst_19986 = console.log(inst_19985);
var inst_19987 = inst_19983.call(null,reagent_intro.core.EVENTS);
var inst_19988 = inst_19987.call(null,inst_19984);
var state_19996__$1 = (function (){var statearr_20003 = state_19996;
(statearr_20003[(7)] = inst_19988);

(statearr_20003[(8)] = inst_19986);

return statearr_20003;
})();
var statearr_20004_20017 = state_19996__$1;
(statearr_20004_20017[(2)] = null);

(statearr_20004_20017[(1)] = (2));


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
});})(c__19138__auto___20012))
;
return ((function (switch__19117__auto__,c__19138__auto___20012){
return (function() {
var reagent_intro$core$state_machine__19118__auto__ = null;
var reagent_intro$core$state_machine__19118__auto____0 = (function (){
var statearr_20008 = [null,null,null,null,null,null,null,null,null];
(statearr_20008[(0)] = reagent_intro$core$state_machine__19118__auto__);

(statearr_20008[(1)] = (1));

return statearr_20008;
});
var reagent_intro$core$state_machine__19118__auto____1 = (function (state_19996){
while(true){
var ret_value__19119__auto__ = (function (){try{while(true){
var result__19120__auto__ = switch__19117__auto__.call(null,state_19996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19120__auto__;
}
break;
}
}catch (e20009){if((e20009 instanceof Object)){
var ex__19121__auto__ = e20009;
var statearr_20010_20018 = state_19996;
(statearr_20010_20018[(5)] = ex__19121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20019 = state_19996;
state_19996 = G__20019;
continue;
} else {
return ret_value__19119__auto__;
}
break;
}
});
reagent_intro$core$state_machine__19118__auto__ = function(state_19996){
switch(arguments.length){
case 0:
return reagent_intro$core$state_machine__19118__auto____0.call(this);
case 1:
return reagent_intro$core$state_machine__19118__auto____1.call(this,state_19996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagent_intro$core$state_machine__19118__auto__.cljs$core$IFn$_invoke$arity$0 = reagent_intro$core$state_machine__19118__auto____0;
reagent_intro$core$state_machine__19118__auto__.cljs$core$IFn$_invoke$arity$1 = reagent_intro$core$state_machine__19118__auto____1;
return reagent_intro$core$state_machine__19118__auto__;
})()
;})(switch__19117__auto__,c__19138__auto___20012))
})();
var state__19140__auto__ = (function (){var statearr_20011 = f__19139__auto__.call(null);
(statearr_20011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19138__auto___20012);

return statearr_20011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19140__auto__);
});})(c__19138__auto___20012))
);

reagent_intro.core.header = (function reagent_intro$core$header(message){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"title"], null),message], null)], null);
});
reagent_intro.core.items_list = (function reagent_intro$core$items_list(EVENTCHANNEL,items,active_item){

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-list"], null),(function (){var iter__16962__auto__ = (function reagent_intro$core$items_list_$_iter__20024(s__20025){
return (new cljs.core.LazySeq(null,(function (){
var s__20025__$1 = s__20025;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20025__$1);
if(temp__4657__auto__){
var s__20025__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20025__$2)){
var c__16960__auto__ = cljs.core.chunk_first.call(null,s__20025__$2);
var size__16961__auto__ = cljs.core.count.call(null,c__16960__auto__);
var b__20027 = cljs.core.chunk_buffer.call(null,size__16961__auto__);
if((function (){var i__20026 = (0);
while(true){
if((i__20026 < size__16961__auto__)){
var item = cljs.core._nth.call(null,c__16960__auto__,i__20026);
cljs.core.chunk_append.call(null,b__20027,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,active_item,item))?"item active":"item")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__20026,item,c__16960__auto__,size__16961__auto__,b__20027,s__20025__$2,temp__4657__auto__){
return (function (event){
return cljs.core.async.put_BANG_.call(null,EVENTCHANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-active-item","update-active-item",1027410113),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-item","active-item",-1265645988),item], null)], null));
});})(i__20026,item,c__16960__auto__,size__16961__auto__,b__20027,s__20025__$2,temp__4657__auto__))
], null),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(item)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(item)], null)));

var G__20028 = (i__20026 + (1));
i__20026 = G__20028;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20027),reagent_intro$core$items_list_$_iter__20024.call(null,cljs.core.chunk_rest.call(null,s__20025__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20027),null);
}
} else {
var item = cljs.core.first.call(null,s__20025__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,active_item,item))?"item active":"item")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__20025__$2,temp__4657__auto__){
return (function (event){
return cljs.core.async.put_BANG_.call(null,EVENTCHANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-active-item","update-active-item",1027410113),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-item","active-item",-1265645988),item], null)], null));
});})(item,s__20025__$2,temp__4657__auto__))
], null),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(item)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(item)], null)),reagent_intro$core$items_list_$_iter__20024.call(null,cljs.core.rest.call(null,s__20025__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16962__auto__.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reagent_intro.core.app_state)));
})()], null);
});
reagent_intro.core.app = (function reagent_intro$core$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_intro.core.header,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reagent_intro.core.app_state))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_intro.core.items_list,reagent_intro.core.EVENTCHANNEL,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reagent_intro.core.app_state)),new cljs.core.Keyword(null,"active-item","active-item",-1265645988).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reagent_intro.core.app_state))], null)], null);
});
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_intro.core.app], null),document.querySelector("#cljs-target"));

//# sourceMappingURL=core.js.map