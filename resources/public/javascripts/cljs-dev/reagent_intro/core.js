// Compiled by ClojureScript 0.0-3308 {}
goog.provide('reagent_intro.core');
goog.require('cljs.core');
goog.require('reagent.core');
reagent_intro.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"hello from app state",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"item 1"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"item 2"], null)], null)], null));
reagent_intro.core.header = (function reagent_intro$core$header(message){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"title"], null),message], null)], null);
});
reagent_intro.core.items_list = (function reagent_intro$core$items_list(items){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-list"], null),(function (){var iter__5076__auto__ = (function reagent_intro$core$items_list_$_iter__5560(s__5561){
return (new cljs.core.LazySeq(null,(function (){
var s__5561__$1 = s__5561;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__5561__$1);
if(temp__4657__auto__){
var s__5561__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5561__$2)){
var c__5074__auto__ = cljs.core.chunk_first.call(null,s__5561__$2);
var size__5075__auto__ = cljs.core.count.call(null,c__5074__auto__);
var b__5563 = cljs.core.chunk_buffer.call(null,size__5075__auto__);
if((function (){var i__5562 = (0);
while(true){
if((i__5562 < size__5075__auto__)){
var item = cljs.core._nth.call(null,c__5074__auto__,i__5562);
cljs.core.chunk_append.call(null,b__5563,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"tiem"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(item)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(item)], null)));

var G__5564 = (i__5562 + (1));
i__5562 = G__5564;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5563),reagent_intro$core$items_list_$_iter__5560.call(null,cljs.core.chunk_rest.call(null,s__5561__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5563),null);
}
} else {
var item = cljs.core.first.call(null,s__5561__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"tiem"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(item)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(item)], null)),reagent_intro$core$items_list_$_iter__5560.call(null,cljs.core.rest.call(null,s__5561__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5076__auto__.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reagent_intro.core.app_state)));
})()], null);
});
reagent_intro.core.app = (function reagent_intro$core$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_intro.core.header,"this is my message"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_intro.core.items_list,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reagent_intro.core.app_state))], null)], null);
});
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_intro.core.app], null),document.querySelector("#cljs-target"));
setTimeout((function (){
return cljs.core.swap_BANG_.call(null,reagent_intro.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002)], null),"New Message");
}),(2000));

//# sourceMappingURL=core.js.map