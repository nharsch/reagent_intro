// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21663_21675 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21664_21676 = null;
var count__21665_21677 = (0);
var i__21666_21678 = (0);
while(true){
if((i__21666_21678 < count__21665_21677)){
var f_21679 = cljs.core._nth.call(null,chunk__21664_21676,i__21666_21678);
cljs.core.println.call(null,"  ",f_21679);

var G__21680 = seq__21663_21675;
var G__21681 = chunk__21664_21676;
var G__21682 = count__21665_21677;
var G__21683 = (i__21666_21678 + (1));
seq__21663_21675 = G__21680;
chunk__21664_21676 = G__21681;
count__21665_21677 = G__21682;
i__21666_21678 = G__21683;
continue;
} else {
var temp__4657__auto___21684 = cljs.core.seq.call(null,seq__21663_21675);
if(temp__4657__auto___21684){
var seq__21663_21685__$1 = temp__4657__auto___21684;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21663_21685__$1)){
var c__16993__auto___21686 = cljs.core.chunk_first.call(null,seq__21663_21685__$1);
var G__21687 = cljs.core.chunk_rest.call(null,seq__21663_21685__$1);
var G__21688 = c__16993__auto___21686;
var G__21689 = cljs.core.count.call(null,c__16993__auto___21686);
var G__21690 = (0);
seq__21663_21675 = G__21687;
chunk__21664_21676 = G__21688;
count__21665_21677 = G__21689;
i__21666_21678 = G__21690;
continue;
} else {
var f_21691 = cljs.core.first.call(null,seq__21663_21685__$1);
cljs.core.println.call(null,"  ",f_21691);

var G__21692 = cljs.core.next.call(null,seq__21663_21685__$1);
var G__21693 = null;
var G__21694 = (0);
var G__21695 = (0);
seq__21663_21675 = G__21692;
chunk__21664_21676 = G__21693;
count__21665_21677 = G__21694;
i__21666_21678 = G__21695;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21696 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16208__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16208__auto__)){
return or__16208__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_21696);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_21696)))?cljs.core.second.call(null,arglists_21696):arglists_21696));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21667 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21668 = null;
var count__21669 = (0);
var i__21670 = (0);
while(true){
if((i__21670 < count__21669)){
var vec__21671 = cljs.core._nth.call(null,chunk__21668,i__21670);
var name = cljs.core.nth.call(null,vec__21671,(0),null);
var map__21672 = cljs.core.nth.call(null,vec__21671,(1),null);
var map__21672__$1 = ((cljs.core.seq_QMARK_.call(null,map__21672))?cljs.core.apply.call(null,cljs.core.hash_map,map__21672):map__21672);
var doc = cljs.core.get.call(null,map__21672__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__21672__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__21697 = seq__21667;
var G__21698 = chunk__21668;
var G__21699 = count__21669;
var G__21700 = (i__21670 + (1));
seq__21667 = G__21697;
chunk__21668 = G__21698;
count__21669 = G__21699;
i__21670 = G__21700;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21667);
if(temp__4657__auto__){
var seq__21667__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21667__$1)){
var c__16993__auto__ = cljs.core.chunk_first.call(null,seq__21667__$1);
var G__21701 = cljs.core.chunk_rest.call(null,seq__21667__$1);
var G__21702 = c__16993__auto__;
var G__21703 = cljs.core.count.call(null,c__16993__auto__);
var G__21704 = (0);
seq__21667 = G__21701;
chunk__21668 = G__21702;
count__21669 = G__21703;
i__21670 = G__21704;
continue;
} else {
var vec__21673 = cljs.core.first.call(null,seq__21667__$1);
var name = cljs.core.nth.call(null,vec__21673,(0),null);
var map__21674 = cljs.core.nth.call(null,vec__21673,(1),null);
var map__21674__$1 = ((cljs.core.seq_QMARK_.call(null,map__21674))?cljs.core.apply.call(null,cljs.core.hash_map,map__21674):map__21674);
var doc = cljs.core.get.call(null,map__21674__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__21674__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__21705 = cljs.core.next.call(null,seq__21667__$1);
var G__21706 = null;
var G__21707 = (0);
var G__21708 = (0);
seq__21667 = G__21705;
chunk__21668 = G__21706;
count__21669 = G__21707;
i__21670 = G__21708;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map