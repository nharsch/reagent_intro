// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__17248__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17248__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__21420_21428 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__21421_21429 = null;
var count__21422_21430 = (0);
var i__21423_21431 = (0);
while(true){
if((i__21423_21431 < count__21422_21430)){
var k_21432 = cljs.core._nth.call(null,chunk__21421_21429,i__21423_21431);
e.setAttribute(cljs.core.name.call(null,k_21432),cljs.core.get.call(null,attrs,k_21432));

var G__21433 = seq__21420_21428;
var G__21434 = chunk__21421_21429;
var G__21435 = count__21422_21430;
var G__21436 = (i__21423_21431 + (1));
seq__21420_21428 = G__21433;
chunk__21421_21429 = G__21434;
count__21422_21430 = G__21435;
i__21423_21431 = G__21436;
continue;
} else {
var temp__4657__auto___21437 = cljs.core.seq.call(null,seq__21420_21428);
if(temp__4657__auto___21437){
var seq__21420_21438__$1 = temp__4657__auto___21437;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21420_21438__$1)){
var c__16993__auto___21439 = cljs.core.chunk_first.call(null,seq__21420_21438__$1);
var G__21440 = cljs.core.chunk_rest.call(null,seq__21420_21438__$1);
var G__21441 = c__16993__auto___21439;
var G__21442 = cljs.core.count.call(null,c__16993__auto___21439);
var G__21443 = (0);
seq__21420_21428 = G__21440;
chunk__21421_21429 = G__21441;
count__21422_21430 = G__21442;
i__21423_21431 = G__21443;
continue;
} else {
var k_21444 = cljs.core.first.call(null,seq__21420_21438__$1);
e.setAttribute(cljs.core.name.call(null,k_21444),cljs.core.get.call(null,attrs,k_21444));

var G__21445 = cljs.core.next.call(null,seq__21420_21438__$1);
var G__21446 = null;
var G__21447 = (0);
var G__21448 = (0);
seq__21420_21428 = G__21445;
chunk__21421_21429 = G__21446;
count__21422_21430 = G__21447;
i__21423_21431 = G__21448;
continue;
}
} else {
}
}
break;
}

var seq__21424_21449 = cljs.core.seq.call(null,children);
var chunk__21425_21450 = null;
var count__21426_21451 = (0);
var i__21427_21452 = (0);
while(true){
if((i__21427_21452 < count__21426_21451)){
var ch_21453 = cljs.core._nth.call(null,chunk__21425_21450,i__21427_21452);
e.appendChild(ch_21453);

var G__21454 = seq__21424_21449;
var G__21455 = chunk__21425_21450;
var G__21456 = count__21426_21451;
var G__21457 = (i__21427_21452 + (1));
seq__21424_21449 = G__21454;
chunk__21425_21450 = G__21455;
count__21426_21451 = G__21456;
i__21427_21452 = G__21457;
continue;
} else {
var temp__4657__auto___21458 = cljs.core.seq.call(null,seq__21424_21449);
if(temp__4657__auto___21458){
var seq__21424_21459__$1 = temp__4657__auto___21458;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21424_21459__$1)){
var c__16993__auto___21460 = cljs.core.chunk_first.call(null,seq__21424_21459__$1);
var G__21461 = cljs.core.chunk_rest.call(null,seq__21424_21459__$1);
var G__21462 = c__16993__auto___21460;
var G__21463 = cljs.core.count.call(null,c__16993__auto___21460);
var G__21464 = (0);
seq__21424_21449 = G__21461;
chunk__21425_21450 = G__21462;
count__21426_21451 = G__21463;
i__21427_21452 = G__21464;
continue;
} else {
var ch_21465 = cljs.core.first.call(null,seq__21424_21459__$1);
e.appendChild(ch_21465);

var G__21466 = cljs.core.next.call(null,seq__21424_21459__$1);
var G__21467 = null;
var G__21468 = (0);
var G__21469 = (0);
seq__21424_21449 = G__21466;
chunk__21425_21450 = G__21467;
count__21426_21451 = G__21468;
i__21427_21452 = G__21469;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq21417){
var G__21418 = cljs.core.first.call(null,seq21417);
var seq21417__$1 = cljs.core.next.call(null,seq21417);
var G__21419 = cljs.core.first.call(null,seq21417__$1);
var seq21417__$2 = cljs.core.next.call(null,seq21417__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__21418,G__21419,seq21417__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17103__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17104__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17105__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17106__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17107__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17103__auto__,prefer_table__17104__auto__,method_cache__17105__auto__,cached_hierarchy__17106__auto__,hierarchy__17107__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17103__auto__,prefer_table__17104__auto__,method_cache__17105__auto__,cached_hierarchy__17106__auto__,hierarchy__17107__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17107__auto__,method_table__17103__auto__,prefer_table__17104__auto__,method_cache__17105__auto__,cached_hierarchy__17106__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_21470 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_21470.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_21470.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_21470.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_21470);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__21471,st_map){
var map__21475 = p__21471;
var map__21475__$1 = ((cljs.core.seq_QMARK_.call(null,map__21475))?cljs.core.apply.call(null,cljs.core.hash_map,map__21475):map__21475);
var container_el = cljs.core.get.call(null,map__21475__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__21475,map__21475__$1,container_el){
return (function (p__21476){
var vec__21477 = p__21476;
var k = cljs.core.nth.call(null,vec__21477,(0),null);
var v = cljs.core.nth.call(null,vec__21477,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__21475,map__21475__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__21478,dom_str){
var map__21480 = p__21478;
var map__21480__$1 = ((cljs.core.seq_QMARK_.call(null,map__21480))?cljs.core.apply.call(null,cljs.core.hash_map,map__21480):map__21480);
var c = map__21480__$1;
var content_area_el = cljs.core.get.call(null,map__21480__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__21481){
var map__21483 = p__21481;
var map__21483__$1 = ((cljs.core.seq_QMARK_.call(null,map__21483))?cljs.core.apply.call(null,cljs.core.hash_map,map__21483):map__21483);
var content_area_el = cljs.core.get.call(null,map__21483__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19137__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19137__auto__){
return (function (){
var f__19138__auto__ = (function (){var switch__19116__auto__ = ((function (c__19137__auto__){
return (function (state_21525){
var state_val_21526 = (state_21525[(1)]);
if((state_val_21526 === (1))){
var inst_21510 = (state_21525[(7)]);
var inst_21510__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_21511 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_21512 = ["10px","10px","100%","68px","1.0"];
var inst_21513 = cljs.core.PersistentHashMap.fromArrays(inst_21511,inst_21512);
var inst_21514 = cljs.core.merge.call(null,inst_21513,style);
var inst_21515 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_21510__$1,inst_21514);
var inst_21516 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_21510__$1,msg);
var inst_21517 = cljs.core.async.timeout.call(null,(300));
var state_21525__$1 = (function (){var statearr_21527 = state_21525;
(statearr_21527[(8)] = inst_21516);

(statearr_21527[(7)] = inst_21510__$1);

(statearr_21527[(9)] = inst_21515);

return statearr_21527;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21525__$1,(2),inst_21517);
} else {
if((state_val_21526 === (2))){
var inst_21510 = (state_21525[(7)]);
var inst_21519 = (state_21525[(2)]);
var inst_21520 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_21521 = ["auto"];
var inst_21522 = cljs.core.PersistentHashMap.fromArrays(inst_21520,inst_21521);
var inst_21523 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_21510,inst_21522);
var state_21525__$1 = (function (){var statearr_21528 = state_21525;
(statearr_21528[(10)] = inst_21519);

return statearr_21528;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21525__$1,inst_21523);
} else {
return null;
}
}
});})(c__19137__auto__))
;
return ((function (switch__19116__auto__,c__19137__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19117__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19117__auto____0 = (function (){
var statearr_21532 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21532[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19117__auto__);

(statearr_21532[(1)] = (1));

return statearr_21532;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19117__auto____1 = (function (state_21525){
while(true){
var ret_value__19118__auto__ = (function (){try{while(true){
var result__19119__auto__ = switch__19116__auto__.call(null,state_21525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19119__auto__;
}
break;
}
}catch (e21533){if((e21533 instanceof Object)){
var ex__19120__auto__ = e21533;
var statearr_21534_21536 = state_21525;
(statearr_21534_21536[(5)] = ex__19120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21537 = state_21525;
state_21525 = G__21537;
continue;
} else {
return ret_value__19118__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19117__auto__ = function(state_21525){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19117__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19117__auto____1.call(this,state_21525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19117__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19117__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19117__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19117__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19117__auto__;
})()
;})(switch__19116__auto__,c__19137__auto__))
})();
var state__19139__auto__ = (function (){var statearr_21535 = f__19138__auto__.call(null);
(statearr_21535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19137__auto__);

return statearr_21535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19139__auto__);
});})(c__19137__auto__))
);

return c__19137__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__21539 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__21539,(0),null);
var ln = cljs.core.nth.call(null,vec__21539,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__21542 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__21542,(0),null);
var file_line = cljs.core.nth.call(null,vec__21542,(1),null);
var file_column = cljs.core.nth.call(null,vec__21542,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__21542,file_name,file_line,file_column){
return (function (p1__21540_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__21540_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__21542,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16208__auto__ = file_line;
if(cljs.core.truth_(or__16208__auto__)){
return or__16208__auto__;
} else {
var and__16196__auto__ = cause;
if(cljs.core.truth_(and__16196__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16196__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__21544 = figwheel.client.heads_up.ensure_container.call(null);
var map__21544__$1 = ((cljs.core.seq_QMARK_.call(null,map__21544))?cljs.core.apply.call(null,cljs.core.hash_map,map__21544):map__21544);
var content_area_el = cljs.core.get.call(null,map__21544__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19137__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19137__auto__){
return (function (){
var f__19138__auto__ = (function (){var switch__19116__auto__ = ((function (c__19137__auto__){
return (function (state_21591){
var state_val_21592 = (state_21591[(1)]);
if((state_val_21592 === (1))){
var inst_21574 = (state_21591[(7)]);
var inst_21574__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_21575 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_21576 = ["0.0"];
var inst_21577 = cljs.core.PersistentHashMap.fromArrays(inst_21575,inst_21576);
var inst_21578 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_21574__$1,inst_21577);
var inst_21579 = cljs.core.async.timeout.call(null,(300));
var state_21591__$1 = (function (){var statearr_21593 = state_21591;
(statearr_21593[(7)] = inst_21574__$1);

(statearr_21593[(8)] = inst_21578);

return statearr_21593;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21591__$1,(2),inst_21579);
} else {
if((state_val_21592 === (2))){
var inst_21574 = (state_21591[(7)]);
var inst_21581 = (state_21591[(2)]);
var inst_21582 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_21583 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_21584 = cljs.core.PersistentHashMap.fromArrays(inst_21582,inst_21583);
var inst_21585 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_21574,inst_21584);
var inst_21586 = cljs.core.async.timeout.call(null,(200));
var state_21591__$1 = (function (){var statearr_21594 = state_21591;
(statearr_21594[(9)] = inst_21581);

(statearr_21594[(10)] = inst_21585);

return statearr_21594;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21591__$1,(3),inst_21586);
} else {
if((state_val_21592 === (3))){
var inst_21574 = (state_21591[(7)]);
var inst_21588 = (state_21591[(2)]);
var inst_21589 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_21574,"");
var state_21591__$1 = (function (){var statearr_21595 = state_21591;
(statearr_21595[(11)] = inst_21588);

return statearr_21595;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21591__$1,inst_21589);
} else {
return null;
}
}
}
});})(c__19137__auto__))
;
return ((function (switch__19116__auto__,c__19137__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19117__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19117__auto____0 = (function (){
var statearr_21599 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21599[(0)] = figwheel$client$heads_up$clear_$_state_machine__19117__auto__);

(statearr_21599[(1)] = (1));

return statearr_21599;
});
var figwheel$client$heads_up$clear_$_state_machine__19117__auto____1 = (function (state_21591){
while(true){
var ret_value__19118__auto__ = (function (){try{while(true){
var result__19119__auto__ = switch__19116__auto__.call(null,state_21591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19119__auto__;
}
break;
}
}catch (e21600){if((e21600 instanceof Object)){
var ex__19120__auto__ = e21600;
var statearr_21601_21603 = state_21591;
(statearr_21601_21603[(5)] = ex__19120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21604 = state_21591;
state_21591 = G__21604;
continue;
} else {
return ret_value__19118__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19117__auto__ = function(state_21591){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19117__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19117__auto____1.call(this,state_21591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19117__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19117__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19117__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19117__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19117__auto__;
})()
;})(switch__19116__auto__,c__19137__auto__))
})();
var state__19139__auto__ = (function (){var statearr_21602 = f__19138__auto__.call(null);
(statearr_21602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19137__auto__);

return statearr_21602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19139__auto__);
});})(c__19137__auto__))
);

return c__19137__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19137__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19137__auto__){
return (function (){
var f__19138__auto__ = (function (){var switch__19116__auto__ = ((function (c__19137__auto__){
return (function (state_21636){
var state_val_21637 = (state_21636[(1)]);
if((state_val_21637 === (1))){
var inst_21626 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_21636__$1 = state_21636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21636__$1,(2),inst_21626);
} else {
if((state_val_21637 === (2))){
var inst_21628 = (state_21636[(2)]);
var inst_21629 = cljs.core.async.timeout.call(null,(400));
var state_21636__$1 = (function (){var statearr_21638 = state_21636;
(statearr_21638[(7)] = inst_21628);

return statearr_21638;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21636__$1,(3),inst_21629);
} else {
if((state_val_21637 === (3))){
var inst_21631 = (state_21636[(2)]);
var inst_21632 = figwheel.client.heads_up.clear.call(null);
var state_21636__$1 = (function (){var statearr_21639 = state_21636;
(statearr_21639[(8)] = inst_21631);

return statearr_21639;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21636__$1,(4),inst_21632);
} else {
if((state_val_21637 === (4))){
var inst_21634 = (state_21636[(2)]);
var state_21636__$1 = state_21636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21636__$1,inst_21634);
} else {
return null;
}
}
}
}
});})(c__19137__auto__))
;
return ((function (switch__19116__auto__,c__19137__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19117__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19117__auto____0 = (function (){
var statearr_21643 = [null,null,null,null,null,null,null,null,null];
(statearr_21643[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19117__auto__);

(statearr_21643[(1)] = (1));

return statearr_21643;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19117__auto____1 = (function (state_21636){
while(true){
var ret_value__19118__auto__ = (function (){try{while(true){
var result__19119__auto__ = switch__19116__auto__.call(null,state_21636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19119__auto__;
}
break;
}
}catch (e21644){if((e21644 instanceof Object)){
var ex__19120__auto__ = e21644;
var statearr_21645_21647 = state_21636;
(statearr_21645_21647[(5)] = ex__19120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21648 = state_21636;
state_21636 = G__21648;
continue;
} else {
return ret_value__19118__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19117__auto__ = function(state_21636){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19117__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19117__auto____1.call(this,state_21636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19117__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19117__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19117__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19117__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19117__auto__;
})()
;})(switch__19116__auto__,c__19137__auto__))
})();
var state__19139__auto__ = (function (){var statearr_21646 = f__19138__auto__.call(null);
(statearr_21646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19137__auto__);

return statearr_21646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19139__auto__);
});})(c__19137__auto__))
);

return c__19137__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map