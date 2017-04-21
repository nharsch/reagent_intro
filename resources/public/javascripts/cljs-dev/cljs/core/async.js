// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t6722 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t6722 = (function (fn_handler,f,meta6723){
this.fn_handler = fn_handler;
this.f = f;
this.meta6723 = meta6723;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t6722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6724,meta6723__$1){
var self__ = this;
var _6724__$1 = this;
return (new cljs.core.async.t6722(self__.fn_handler,self__.f,meta6723__$1));
});

cljs.core.async.t6722.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6724){
var self__ = this;
var _6724__$1 = this;
return self__.meta6723;
});

cljs.core.async.t6722.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t6722.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t6722.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t6722.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta6723","meta6723",-926085744,null)], null);
});

cljs.core.async.t6722.cljs$lang$type = true;

cljs.core.async.t6722.cljs$lang$ctorStr = "cljs.core.async/t6722";

cljs.core.async.t6722.cljs$lang$ctorPrWriter = (function (this__4901__auto__,writer__4902__auto__,opt__4903__auto__){
return cljs.core._write.call(null,writer__4902__auto__,"cljs.core.async/t6722");
});

cljs.core.async.__GT_t6722 = (function cljs$core$async$fn_handler_$___GT_t6722(fn_handler__$1,f__$1,meta6723){
return (new cljs.core.async.t6722(fn_handler__$1,f__$1,meta6723));
});

}

return (new cljs.core.async.t6722(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__6726 = buff;
if(G__6726){
var bit__4996__auto__ = null;
if(cljs.core.truth_((function (){var or__4322__auto__ = bit__4996__auto__;
if(cljs.core.truth_(or__4322__auto__)){
return or__4322__auto__;
} else {
return G__6726.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__6726.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__6726);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__6726);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__6728 = arguments.length;
switch (G__6728) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__6731 = arguments.length;
switch (G__6731) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_6733 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_6733);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_6733,ret){
return (function (){
return fn1.call(null,val_6733);
});})(val_6733,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__6735 = arguments.length;
switch (G__6735) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5207__auto___6737 = n;
var x_6738 = (0);
while(true){
if((x_6738 < n__5207__auto___6737)){
(a[x_6738] = (0));

var G__6739 = (x_6738 + (1));
x_6738 = G__6739;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__6740 = (i + (1));
i = G__6740;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t6744 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t6744 = (function (alt_flag,flag,meta6745){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta6745 = meta6745;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t6744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_6746,meta6745__$1){
var self__ = this;
var _6746__$1 = this;
return (new cljs.core.async.t6744(self__.alt_flag,self__.flag,meta6745__$1));
});})(flag))
;

cljs.core.async.t6744.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_6746){
var self__ = this;
var _6746__$1 = this;
return self__.meta6745;
});})(flag))
;

cljs.core.async.t6744.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t6744.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t6744.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t6744.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta6745","meta6745",1205636618,null)], null);
});})(flag))
;

cljs.core.async.t6744.cljs$lang$type = true;

cljs.core.async.t6744.cljs$lang$ctorStr = "cljs.core.async/t6744";

cljs.core.async.t6744.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4901__auto__,writer__4902__auto__,opt__4903__auto__){
return cljs.core._write.call(null,writer__4902__auto__,"cljs.core.async/t6744");
});})(flag))
;

cljs.core.async.__GT_t6744 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t6744(alt_flag__$1,flag__$1,meta6745){
return (new cljs.core.async.t6744(alt_flag__$1,flag__$1,meta6745));
});})(flag))
;

}

return (new cljs.core.async.t6744(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t6750 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t6750 = (function (alt_handler,flag,cb,meta6751){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta6751 = meta6751;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t6750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6752,meta6751__$1){
var self__ = this;
var _6752__$1 = this;
return (new cljs.core.async.t6750(self__.alt_handler,self__.flag,self__.cb,meta6751__$1));
});

cljs.core.async.t6750.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6752){
var self__ = this;
var _6752__$1 = this;
return self__.meta6751;
});

cljs.core.async.t6750.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t6750.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t6750.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t6750.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta6751","meta6751",-446675335,null)], null);
});

cljs.core.async.t6750.cljs$lang$type = true;

cljs.core.async.t6750.cljs$lang$ctorStr = "cljs.core.async/t6750";

cljs.core.async.t6750.cljs$lang$ctorPrWriter = (function (this__4901__auto__,writer__4902__auto__,opt__4903__auto__){
return cljs.core._write.call(null,writer__4902__auto__,"cljs.core.async/t6750");
});

cljs.core.async.__GT_t6750 = (function cljs$core$async$alt_handler_$___GT_t6750(alt_handler__$1,flag__$1,cb__$1,meta6751){
return (new cljs.core.async.t6750(alt_handler__$1,flag__$1,cb__$1,meta6751));
});

}

return (new cljs.core.async.t6750(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__6753_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__6753_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__6754_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__6754_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4322__auto__ = wport;
if(cljs.core.truth_(or__4322__auto__)){
return or__4322__auto__;
} else {
return port;
}
})()], null));
} else {
var G__6755 = (i + (1));
i = G__6755;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4322__auto__ = ret;
if(cljs.core.truth_(or__4322__auto__)){
return or__4322__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__4310__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4310__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4310__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__5362__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5362__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__6758){
var map__6759 = p__6758;
var map__6759__$1 = ((cljs.core.seq_QMARK_.call(null,map__6759))?cljs.core.apply.call(null,cljs.core.hash_map,map__6759):map__6759);
var opts = map__6759__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq6756){
var G__6757 = cljs.core.first.call(null,seq6756);
var seq6756__$1 = cljs.core.next.call(null,seq6756);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6757,seq6756__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__6761 = arguments.length;
switch (G__6761) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__6674__auto___6810 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6674__auto___6810){
return (function (){
var f__6675__auto__ = (function (){var switch__6612__auto__ = ((function (c__6674__auto___6810){
return (function (state_6785){
var state_val_6786 = (state_6785[(1)]);
if((state_val_6786 === (7))){
var inst_6781 = (state_6785[(2)]);
var state_6785__$1 = state_6785;
var statearr_6787_6811 = state_6785__$1;
(statearr_6787_6811[(2)] = inst_6781);

(statearr_6787_6811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6786 === (1))){
var state_6785__$1 = state_6785;
var statearr_6788_6812 = state_6785__$1;
(statearr_6788_6812[(2)] = null);

(statearr_6788_6812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6786 === (4))){
var inst_6764 = (state_6785[(7)]);
var inst_6764__$1 = (state_6785[(2)]);
var inst_6765 = (inst_6764__$1 == null);
var state_6785__$1 = (function (){var statearr_6789 = state_6785;
(statearr_6789[(7)] = inst_6764__$1);

return statearr_6789;
})();
if(cljs.core.truth_(inst_6765)){
var statearr_6790_6813 = state_6785__$1;
(statearr_6790_6813[(1)] = (5));

} else {
var statearr_6791_6814 = state_6785__$1;
(statearr_6791_6814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6786 === (13))){
var state_6785__$1 = state_6785;
var statearr_6792_6815 = state_6785__$1;
(statearr_6792_6815[(2)] = null);

(statearr_6792_6815[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6786 === (6))){
var inst_6764 = (state_6785[(7)]);
var state_6785__$1 = state_6785;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6785__$1,(11),to,inst_6764);
} else {
if((state_val_6786 === (3))){
var inst_6783 = (state_6785[(2)]);
var state_6785__$1 = state_6785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6785__$1,inst_6783);
} else {
if((state_val_6786 === (12))){
var state_6785__$1 = state_6785;
var statearr_6793_6816 = state_6785__$1;
(statearr_6793_6816[(2)] = null);

(statearr_6793_6816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6786 === (2))){
var state_6785__$1 = state_6785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6785__$1,(4),from);
} else {
if((state_val_6786 === (11))){
var inst_6774 = (state_6785[(2)]);
var state_6785__$1 = state_6785;
if(cljs.core.truth_(inst_6774)){
var statearr_6794_6817 = state_6785__$1;
(statearr_6794_6817[(1)] = (12));

} else {
var statearr_6795_6818 = state_6785__$1;
(statearr_6795_6818[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6786 === (9))){
var state_6785__$1 = state_6785;
var statearr_6796_6819 = state_6785__$1;
(statearr_6796_6819[(2)] = null);

(statearr_6796_6819[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6786 === (5))){
var state_6785__$1 = state_6785;
if(cljs.core.truth_(close_QMARK_)){
var statearr_6797_6820 = state_6785__$1;
(statearr_6797_6820[(1)] = (8));

} else {
var statearr_6798_6821 = state_6785__$1;
(statearr_6798_6821[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6786 === (14))){
var inst_6779 = (state_6785[(2)]);
var state_6785__$1 = state_6785;
var statearr_6799_6822 = state_6785__$1;
(statearr_6799_6822[(2)] = inst_6779);

(statearr_6799_6822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6786 === (10))){
var inst_6771 = (state_6785[(2)]);
var state_6785__$1 = state_6785;
var statearr_6800_6823 = state_6785__$1;
(statearr_6800_6823[(2)] = inst_6771);

(statearr_6800_6823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6786 === (8))){
var inst_6768 = cljs.core.async.close_BANG_.call(null,to);
var state_6785__$1 = state_6785;
var statearr_6801_6824 = state_6785__$1;
(statearr_6801_6824[(2)] = inst_6768);

(statearr_6801_6824[(1)] = (10));


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
});})(c__6674__auto___6810))
;
return ((function (switch__6612__auto__,c__6674__auto___6810){
return (function() {
var cljs$core$async$state_machine__6613__auto__ = null;
var cljs$core$async$state_machine__6613__auto____0 = (function (){
var statearr_6805 = [null,null,null,null,null,null,null,null];
(statearr_6805[(0)] = cljs$core$async$state_machine__6613__auto__);

(statearr_6805[(1)] = (1));

return statearr_6805;
});
var cljs$core$async$state_machine__6613__auto____1 = (function (state_6785){
while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_6785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6615__auto__;
}
break;
}
}catch (e6806){if((e6806 instanceof Object)){
var ex__6616__auto__ = e6806;
var statearr_6807_6825 = state_6785;
(statearr_6807_6825[(5)] = ex__6616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6826 = state_6785;
state_6785 = G__6826;
continue;
} else {
return ret_value__6614__auto__;
}
break;
}
});
cljs$core$async$state_machine__6613__auto__ = function(state_6785){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6613__auto____1.call(this,state_6785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6613__auto____0;
cljs$core$async$state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6613__auto____1;
return cljs$core$async$state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6674__auto___6810))
})();
var state__6676__auto__ = (function (){var statearr_6808 = f__6675__auto__.call(null);
(statearr_6808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6674__auto___6810);

return statearr_6808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6676__auto__);
});})(c__6674__auto___6810))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__7010){
var vec__7011 = p__7010;
var v = cljs.core.nth.call(null,vec__7011,(0),null);
var p = cljs.core.nth.call(null,vec__7011,(1),null);
var job = vec__7011;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6674__auto___7193 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6674__auto___7193,res,vec__7011,v,p,job,jobs,results){
return (function (){
var f__6675__auto__ = (function (){var switch__6612__auto__ = ((function (c__6674__auto___7193,res,vec__7011,v,p,job,jobs,results){
return (function (state_7016){
var state_val_7017 = (state_7016[(1)]);
if((state_val_7017 === (1))){
var state_7016__$1 = state_7016;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7016__$1,(2),res,v);
} else {
if((state_val_7017 === (2))){
var inst_7013 = (state_7016[(2)]);
var inst_7014 = cljs.core.async.close_BANG_.call(null,res);
var state_7016__$1 = (function (){var statearr_7018 = state_7016;
(statearr_7018[(7)] = inst_7013);

return statearr_7018;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7016__$1,inst_7014);
} else {
return null;
}
}
});})(c__6674__auto___7193,res,vec__7011,v,p,job,jobs,results))
;
return ((function (switch__6612__auto__,c__6674__auto___7193,res,vec__7011,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6613__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6613__auto____0 = (function (){
var statearr_7022 = [null,null,null,null,null,null,null,null];
(statearr_7022[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6613__auto__);

(statearr_7022[(1)] = (1));

return statearr_7022;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6613__auto____1 = (function (state_7016){
while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_7016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6615__auto__;
}
break;
}
}catch (e7023){if((e7023 instanceof Object)){
var ex__6616__auto__ = e7023;
var statearr_7024_7194 = state_7016;
(statearr_7024_7194[(5)] = ex__6616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7195 = state_7016;
state_7016 = G__7195;
continue;
} else {
return ret_value__6614__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6613__auto__ = function(state_7016){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6613__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6613__auto____1.call(this,state_7016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6613__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6613__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6674__auto___7193,res,vec__7011,v,p,job,jobs,results))
})();
var state__6676__auto__ = (function (){var statearr_7025 = f__6675__auto__.call(null);
(statearr_7025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6674__auto___7193);

return statearr_7025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6676__auto__);
});})(c__6674__auto___7193,res,vec__7011,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__7026){
var vec__7027 = p__7026;
var v = cljs.core.nth.call(null,vec__7027,(0),null);
var p = cljs.core.nth.call(null,vec__7027,(1),null);
var job = vec__7027;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5207__auto___7196 = n;
var __7197 = (0);
while(true){
if((__7197 < n__5207__auto___7196)){
var G__7028_7198 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__7028_7198) {
case "compute":
var c__6674__auto___7200 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__7197,c__6674__auto___7200,G__7028_7198,n__5207__auto___7196,jobs,results,process,async){
return (function (){
var f__6675__auto__ = (function (){var switch__6612__auto__ = ((function (__7197,c__6674__auto___7200,G__7028_7198,n__5207__auto___7196,jobs,results,process,async){
return (function (state_7041){
var state_val_7042 = (state_7041[(1)]);
if((state_val_7042 === (1))){
var state_7041__$1 = state_7041;
var statearr_7043_7201 = state_7041__$1;
(statearr_7043_7201[(2)] = null);

(statearr_7043_7201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7042 === (2))){
var state_7041__$1 = state_7041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7041__$1,(4),jobs);
} else {
if((state_val_7042 === (3))){
var inst_7039 = (state_7041[(2)]);
var state_7041__$1 = state_7041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7041__$1,inst_7039);
} else {
if((state_val_7042 === (4))){
var inst_7031 = (state_7041[(2)]);
var inst_7032 = process.call(null,inst_7031);
var state_7041__$1 = state_7041;
if(cljs.core.truth_(inst_7032)){
var statearr_7044_7202 = state_7041__$1;
(statearr_7044_7202[(1)] = (5));

} else {
var statearr_7045_7203 = state_7041__$1;
(statearr_7045_7203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7042 === (5))){
var state_7041__$1 = state_7041;
var statearr_7046_7204 = state_7041__$1;
(statearr_7046_7204[(2)] = null);

(statearr_7046_7204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7042 === (6))){
var state_7041__$1 = state_7041;
var statearr_7047_7205 = state_7041__$1;
(statearr_7047_7205[(2)] = null);

(statearr_7047_7205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7042 === (7))){
var inst_7037 = (state_7041[(2)]);
var state_7041__$1 = state_7041;
var statearr_7048_7206 = state_7041__$1;
(statearr_7048_7206[(2)] = inst_7037);

(statearr_7048_7206[(1)] = (3));


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
});})(__7197,c__6674__auto___7200,G__7028_7198,n__5207__auto___7196,jobs,results,process,async))
;
return ((function (__7197,switch__6612__auto__,c__6674__auto___7200,G__7028_7198,n__5207__auto___7196,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6613__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6613__auto____0 = (function (){
var statearr_7052 = [null,null,null,null,null,null,null];
(statearr_7052[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6613__auto__);

(statearr_7052[(1)] = (1));

return statearr_7052;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6613__auto____1 = (function (state_7041){
while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_7041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6615__auto__;
}
break;
}
}catch (e7053){if((e7053 instanceof Object)){
var ex__6616__auto__ = e7053;
var statearr_7054_7207 = state_7041;
(statearr_7054_7207[(5)] = ex__6616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7208 = state_7041;
state_7041 = G__7208;
continue;
} else {
return ret_value__6614__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6613__auto__ = function(state_7041){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6613__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6613__auto____1.call(this,state_7041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6613__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6613__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6613__auto__;
})()
;})(__7197,switch__6612__auto__,c__6674__auto___7200,G__7028_7198,n__5207__auto___7196,jobs,results,process,async))
})();
var state__6676__auto__ = (function (){var statearr_7055 = f__6675__auto__.call(null);
(statearr_7055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6674__auto___7200);

return statearr_7055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6676__auto__);
});})(__7197,c__6674__auto___7200,G__7028_7198,n__5207__auto___7196,jobs,results,process,async))
);


break;
case "async":
var c__6674__auto___7209 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__7197,c__6674__auto___7209,G__7028_7198,n__5207__auto___7196,jobs,results,process,async){
return (function (){
var f__6675__auto__ = (function (){var switch__6612__auto__ = ((function (__7197,c__6674__auto___7209,G__7028_7198,n__5207__auto___7196,jobs,results,process,async){
return (function (state_7068){
var state_val_7069 = (state_7068[(1)]);
if((state_val_7069 === (1))){
var state_7068__$1 = state_7068;
var statearr_7070_7210 = state_7068__$1;
(statearr_7070_7210[(2)] = null);

(statearr_7070_7210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (2))){
var state_7068__$1 = state_7068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7068__$1,(4),jobs);
} else {
if((state_val_7069 === (3))){
var inst_7066 = (state_7068[(2)]);
var state_7068__$1 = state_7068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7068__$1,inst_7066);
} else {
if((state_val_7069 === (4))){
var inst_7058 = (state_7068[(2)]);
var inst_7059 = async.call(null,inst_7058);
var state_7068__$1 = state_7068;
if(cljs.core.truth_(inst_7059)){
var statearr_7071_7211 = state_7068__$1;
(statearr_7071_7211[(1)] = (5));

} else {
var statearr_7072_7212 = state_7068__$1;
(statearr_7072_7212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (5))){
var state_7068__$1 = state_7068;
var statearr_7073_7213 = state_7068__$1;
(statearr_7073_7213[(2)] = null);

(statearr_7073_7213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (6))){
var state_7068__$1 = state_7068;
var statearr_7074_7214 = state_7068__$1;
(statearr_7074_7214[(2)] = null);

(statearr_7074_7214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (7))){
var inst_7064 = (state_7068[(2)]);
var state_7068__$1 = state_7068;
var statearr_7075_7215 = state_7068__$1;
(statearr_7075_7215[(2)] = inst_7064);

(statearr_7075_7215[(1)] = (3));


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
});})(__7197,c__6674__auto___7209,G__7028_7198,n__5207__auto___7196,jobs,results,process,async))
;
return ((function (__7197,switch__6612__auto__,c__6674__auto___7209,G__7028_7198,n__5207__auto___7196,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6613__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6613__auto____0 = (function (){
var statearr_7079 = [null,null,null,null,null,null,null];
(statearr_7079[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6613__auto__);

(statearr_7079[(1)] = (1));

return statearr_7079;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6613__auto____1 = (function (state_7068){
while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_7068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6615__auto__;
}
break;
}
}catch (e7080){if((e7080 instanceof Object)){
var ex__6616__auto__ = e7080;
var statearr_7081_7216 = state_7068;
(statearr_7081_7216[(5)] = ex__6616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7217 = state_7068;
state_7068 = G__7217;
continue;
} else {
return ret_value__6614__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6613__auto__ = function(state_7068){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6613__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6613__auto____1.call(this,state_7068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6613__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6613__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6613__auto__;
})()
;})(__7197,switch__6612__auto__,c__6674__auto___7209,G__7028_7198,n__5207__auto___7196,jobs,results,process,async))
})();
var state__6676__auto__ = (function (){var statearr_7082 = f__6675__auto__.call(null);
(statearr_7082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6674__auto___7209);

return statearr_7082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6676__auto__);
});})(__7197,c__6674__auto___7209,G__7028_7198,n__5207__auto___7196,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__7218 = (__7197 + (1));
__7197 = G__7218;
continue;
} else {
}
break;
}

var c__6674__auto___7219 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6674__auto___7219,jobs,results,process,async){
return (function (){
var f__6675__auto__ = (function (){var switch__6612__auto__ = ((function (c__6674__auto___7219,jobs,results,process,async){
return (function (state_7104){
var state_val_7105 = (state_7104[(1)]);
if((state_val_7105 === (1))){
var state_7104__$1 = state_7104;
var statearr_7106_7220 = state_7104__$1;
(statearr_7106_7220[(2)] = null);

(statearr_7106_7220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7105 === (2))){
var state_7104__$1 = state_7104;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7104__$1,(4),from);
} else {
if((state_val_7105 === (3))){
var inst_7102 = (state_7104[(2)]);
var state_7104__$1 = state_7104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7104__$1,inst_7102);
} else {
if((state_val_7105 === (4))){
var inst_7085 = (state_7104[(7)]);
var inst_7085__$1 = (state_7104[(2)]);
var inst_7086 = (inst_7085__$1 == null);
var state_7104__$1 = (function (){var statearr_7107 = state_7104;
(statearr_7107[(7)] = inst_7085__$1);

return statearr_7107;
})();
if(cljs.core.truth_(inst_7086)){
var statearr_7108_7221 = state_7104__$1;
(statearr_7108_7221[(1)] = (5));

} else {
var statearr_7109_7222 = state_7104__$1;
(statearr_7109_7222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7105 === (5))){
var inst_7088 = cljs.core.async.close_BANG_.call(null,jobs);
var state_7104__$1 = state_7104;
var statearr_7110_7223 = state_7104__$1;
(statearr_7110_7223[(2)] = inst_7088);

(statearr_7110_7223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7105 === (6))){
var inst_7090 = (state_7104[(8)]);
var inst_7085 = (state_7104[(7)]);
var inst_7090__$1 = cljs.core.async.chan.call(null,(1));
var inst_7091 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7092 = [inst_7085,inst_7090__$1];
var inst_7093 = (new cljs.core.PersistentVector(null,2,(5),inst_7091,inst_7092,null));
var state_7104__$1 = (function (){var statearr_7111 = state_7104;
(statearr_7111[(8)] = inst_7090__$1);

return statearr_7111;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7104__$1,(8),jobs,inst_7093);
} else {
if((state_val_7105 === (7))){
var inst_7100 = (state_7104[(2)]);
var state_7104__$1 = state_7104;
var statearr_7112_7224 = state_7104__$1;
(statearr_7112_7224[(2)] = inst_7100);

(statearr_7112_7224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7105 === (8))){
var inst_7090 = (state_7104[(8)]);
var inst_7095 = (state_7104[(2)]);
var state_7104__$1 = (function (){var statearr_7113 = state_7104;
(statearr_7113[(9)] = inst_7095);

return statearr_7113;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7104__$1,(9),results,inst_7090);
} else {
if((state_val_7105 === (9))){
var inst_7097 = (state_7104[(2)]);
var state_7104__$1 = (function (){var statearr_7114 = state_7104;
(statearr_7114[(10)] = inst_7097);

return statearr_7114;
})();
var statearr_7115_7225 = state_7104__$1;
(statearr_7115_7225[(2)] = null);

(statearr_7115_7225[(1)] = (2));


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
});})(c__6674__auto___7219,jobs,results,process,async))
;
return ((function (switch__6612__auto__,c__6674__auto___7219,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6613__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6613__auto____0 = (function (){
var statearr_7119 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_7119[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6613__auto__);

(statearr_7119[(1)] = (1));

return statearr_7119;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6613__auto____1 = (function (state_7104){
while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_7104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6615__auto__;
}
break;
}
}catch (e7120){if((e7120 instanceof Object)){
var ex__6616__auto__ = e7120;
var statearr_7121_7226 = state_7104;
(statearr_7121_7226[(5)] = ex__6616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7227 = state_7104;
state_7104 = G__7227;
continue;
} else {
return ret_value__6614__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6613__auto__ = function(state_7104){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6613__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6613__auto____1.call(this,state_7104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6613__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6613__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6674__auto___7219,jobs,results,process,async))
})();
var state__6676__auto__ = (function (){var statearr_7122 = f__6675__auto__.call(null);
(statearr_7122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6674__auto___7219);

return statearr_7122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6676__auto__);
});})(c__6674__auto___7219,jobs,results,process,async))
);


var c__6674__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6674__auto__,jobs,results,process,async){
return (function (){
var f__6675__auto__ = (function (){var switch__6612__auto__ = ((function (c__6674__auto__,jobs,results,process,async){
return (function (state_7160){
var state_val_7161 = (state_7160[(1)]);
if((state_val_7161 === (7))){
var inst_7156 = (state_7160[(2)]);
var state_7160__$1 = state_7160;
var statearr_7162_7228 = state_7160__$1;
(statearr_7162_7228[(2)] = inst_7156);

(statearr_7162_7228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7161 === (20))){
var state_7160__$1 = state_7160;
var statearr_7163_7229 = state_7160__$1;
(statearr_7163_7229[(2)] = null);

(statearr_7163_7229[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7161 === (1))){
var state_7160__$1 = state_7160;
var statearr_7164_7230 = state_7160__$1;
(statearr_7164_7230[(2)] = null);

(statearr_7164_7230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7161 === (4))){
var inst_7125 = (state_7160[(7)]);
var inst_7125__$1 = (state_7160[(2)]);
var inst_7126 = (inst_7125__$1 == null);
var state_7160__$1 = (function (){var statearr_7165 = state_7160;
(statearr_7165[(7)] = inst_7125__$1);

return statearr_7165;
})();
if(cljs.core.truth_(inst_7126)){
var statearr_7166_7231 = state_7160__$1;
(statearr_7166_7231[(1)] = (5));

} else {
var statearr_7167_7232 = state_7160__$1;
(statearr_7167_7232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7161 === (15))){
var inst_7138 = (state_7160[(8)]);
var state_7160__$1 = state_7160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7160__$1,(18),to,inst_7138);
} else {
if((state_val_7161 === (21))){
var inst_7151 = (state_7160[(2)]);
var state_7160__$1 = state_7160;
var statearr_7168_7233 = state_7160__$1;
(statearr_7168_7233[(2)] = inst_7151);

(statearr_7168_7233[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7161 === (13))){
var inst_7153 = (state_7160[(2)]);
var state_7160__$1 = (function (){var statearr_7169 = state_7160;
(statearr_7169[(9)] = inst_7153);

return statearr_7169;
})();
var statearr_7170_7234 = state_7160__$1;
(statearr_7170_7234[(2)] = null);

(statearr_7170_7234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7161 === (6))){
var inst_7125 = (state_7160[(7)]);
var state_7160__$1 = state_7160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7160__$1,(11),inst_7125);
} else {
if((state_val_7161 === (17))){
var inst_7146 = (state_7160[(2)]);
var state_7160__$1 = state_7160;
if(cljs.core.truth_(inst_7146)){
var statearr_7171_7235 = state_7160__$1;
(statearr_7171_7235[(1)] = (19));

} else {
var statearr_7172_7236 = state_7160__$1;
(statearr_7172_7236[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7161 === (3))){
var inst_7158 = (state_7160[(2)]);
var state_7160__$1 = state_7160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7160__$1,inst_7158);
} else {
if((state_val_7161 === (12))){
var inst_7135 = (state_7160[(10)]);
var state_7160__$1 = state_7160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7160__$1,(14),inst_7135);
} else {
if((state_val_7161 === (2))){
var state_7160__$1 = state_7160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7160__$1,(4),results);
} else {
if((state_val_7161 === (19))){
var state_7160__$1 = state_7160;
var statearr_7173_7237 = state_7160__$1;
(statearr_7173_7237[(2)] = null);

(statearr_7173_7237[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7161 === (11))){
var inst_7135 = (state_7160[(2)]);
var state_7160__$1 = (function (){var statearr_7174 = state_7160;
(statearr_7174[(10)] = inst_7135);

return statearr_7174;
})();
var statearr_7175_7238 = state_7160__$1;
(statearr_7175_7238[(2)] = null);

(statearr_7175_7238[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7161 === (9))){
var state_7160__$1 = state_7160;
var statearr_7176_7239 = state_7160__$1;
(statearr_7176_7239[(2)] = null);

(statearr_7176_7239[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7161 === (5))){
var state_7160__$1 = state_7160;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7177_7240 = state_7160__$1;
(statearr_7177_7240[(1)] = (8));

} else {
var statearr_7178_7241 = state_7160__$1;
(statearr_7178_7241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7161 === (14))){
var inst_7140 = (state_7160[(11)]);
var inst_7138 = (state_7160[(8)]);
var inst_7138__$1 = (state_7160[(2)]);
var inst_7139 = (inst_7138__$1 == null);
var inst_7140__$1 = cljs.core.not.call(null,inst_7139);
var state_7160__$1 = (function (){var statearr_7179 = state_7160;
(statearr_7179[(11)] = inst_7140__$1);

(statearr_7179[(8)] = inst_7138__$1);

return statearr_7179;
})();
if(inst_7140__$1){
var statearr_7180_7242 = state_7160__$1;
(statearr_7180_7242[(1)] = (15));

} else {
var statearr_7181_7243 = state_7160__$1;
(statearr_7181_7243[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7161 === (16))){
var inst_7140 = (state_7160[(11)]);
var state_7160__$1 = state_7160;
var statearr_7182_7244 = state_7160__$1;
(statearr_7182_7244[(2)] = inst_7140);

(statearr_7182_7244[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7161 === (10))){
var inst_7132 = (state_7160[(2)]);
var state_7160__$1 = state_7160;
var statearr_7183_7245 = state_7160__$1;
(statearr_7183_7245[(2)] = inst_7132);

(statearr_7183_7245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7161 === (18))){
var inst_7143 = (state_7160[(2)]);
var state_7160__$1 = state_7160;
var statearr_7184_7246 = state_7160__$1;
(statearr_7184_7246[(2)] = inst_7143);

(statearr_7184_7246[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7161 === (8))){
var inst_7129 = cljs.core.async.close_BANG_.call(null,to);
var state_7160__$1 = state_7160;
var statearr_7185_7247 = state_7160__$1;
(statearr_7185_7247[(2)] = inst_7129);

(statearr_7185_7247[(1)] = (10));


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
});})(c__6674__auto__,jobs,results,process,async))
;
return ((function (switch__6612__auto__,c__6674__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6613__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6613__auto____0 = (function (){
var statearr_7189 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7189[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6613__auto__);

(statearr_7189[(1)] = (1));

return statearr_7189;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6613__auto____1 = (function (state_7160){
while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_7160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6615__auto__;
}
break;
}
}catch (e7190){if((e7190 instanceof Object)){
var ex__6616__auto__ = e7190;
var statearr_7191_7248 = state_7160;
(statearr_7191_7248[(5)] = ex__6616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7249 = state_7160;
state_7160 = G__7249;
continue;
} else {
return ret_value__6614__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6613__auto__ = function(state_7160){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6613__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6613__auto____1.call(this,state_7160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6613__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6613__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6674__auto__,jobs,results,process,async))
})();
var state__6676__auto__ = (function (){var statearr_7192 = f__6675__auto__.call(null);
(statearr_7192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6674__auto__);

return statearr_7192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6676__auto__);
});})(c__6674__auto__,jobs,results,process,async))
);

return c__6674__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__7251 = arguments.length;
switch (G__7251) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__7254 = arguments.length;
switch (G__7254) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__7257 = arguments.length;
switch (G__7257) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__6674__auto___7309 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6674__auto___7309,tc,fc){
return (function (){
var f__6675__auto__ = (function (){var switch__6612__auto__ = ((function (c__6674__auto___7309,tc,fc){
return (function (state_7283){
var state_val_7284 = (state_7283[(1)]);
if((state_val_7284 === (7))){
var inst_7279 = (state_7283[(2)]);
var state_7283__$1 = state_7283;
var statearr_7285_7310 = state_7283__$1;
(statearr_7285_7310[(2)] = inst_7279);

(statearr_7285_7310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7284 === (1))){
var state_7283__$1 = state_7283;
var statearr_7286_7311 = state_7283__$1;
(statearr_7286_7311[(2)] = null);

(statearr_7286_7311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7284 === (4))){
var inst_7260 = (state_7283[(7)]);
var inst_7260__$1 = (state_7283[(2)]);
var inst_7261 = (inst_7260__$1 == null);
var state_7283__$1 = (function (){var statearr_7287 = state_7283;
(statearr_7287[(7)] = inst_7260__$1);

return statearr_7287;
})();
if(cljs.core.truth_(inst_7261)){
var statearr_7288_7312 = state_7283__$1;
(statearr_7288_7312[(1)] = (5));

} else {
var statearr_7289_7313 = state_7283__$1;
(statearr_7289_7313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7284 === (13))){
var state_7283__$1 = state_7283;
var statearr_7290_7314 = state_7283__$1;
(statearr_7290_7314[(2)] = null);

(statearr_7290_7314[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7284 === (6))){
var inst_7260 = (state_7283[(7)]);
var inst_7266 = p.call(null,inst_7260);
var state_7283__$1 = state_7283;
if(cljs.core.truth_(inst_7266)){
var statearr_7291_7315 = state_7283__$1;
(statearr_7291_7315[(1)] = (9));

} else {
var statearr_7292_7316 = state_7283__$1;
(statearr_7292_7316[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7284 === (3))){
var inst_7281 = (state_7283[(2)]);
var state_7283__$1 = state_7283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7283__$1,inst_7281);
} else {
if((state_val_7284 === (12))){
var state_7283__$1 = state_7283;
var statearr_7293_7317 = state_7283__$1;
(statearr_7293_7317[(2)] = null);

(statearr_7293_7317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7284 === (2))){
var state_7283__$1 = state_7283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7283__$1,(4),ch);
} else {
if((state_val_7284 === (11))){
var inst_7260 = (state_7283[(7)]);
var inst_7270 = (state_7283[(2)]);
var state_7283__$1 = state_7283;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7283__$1,(8),inst_7270,inst_7260);
} else {
if((state_val_7284 === (9))){
var state_7283__$1 = state_7283;
var statearr_7294_7318 = state_7283__$1;
(statearr_7294_7318[(2)] = tc);

(statearr_7294_7318[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7284 === (5))){
var inst_7263 = cljs.core.async.close_BANG_.call(null,tc);
var inst_7264 = cljs.core.async.close_BANG_.call(null,fc);
var state_7283__$1 = (function (){var statearr_7295 = state_7283;
(statearr_7295[(8)] = inst_7263);

return statearr_7295;
})();
var statearr_7296_7319 = state_7283__$1;
(statearr_7296_7319[(2)] = inst_7264);

(statearr_7296_7319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7284 === (14))){
var inst_7277 = (state_7283[(2)]);
var state_7283__$1 = state_7283;
var statearr_7297_7320 = state_7283__$1;
(statearr_7297_7320[(2)] = inst_7277);

(statearr_7297_7320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7284 === (10))){
var state_7283__$1 = state_7283;
var statearr_7298_7321 = state_7283__$1;
(statearr_7298_7321[(2)] = fc);

(statearr_7298_7321[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7284 === (8))){
var inst_7272 = (state_7283[(2)]);
var state_7283__$1 = state_7283;
if(cljs.core.truth_(inst_7272)){
var statearr_7299_7322 = state_7283__$1;
(statearr_7299_7322[(1)] = (12));

} else {
var statearr_7300_7323 = state_7283__$1;
(statearr_7300_7323[(1)] = (13));

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
});})(c__6674__auto___7309,tc,fc))
;
return ((function (switch__6612__auto__,c__6674__auto___7309,tc,fc){
return (function() {
var cljs$core$async$state_machine__6613__auto__ = null;
var cljs$core$async$state_machine__6613__auto____0 = (function (){
var statearr_7304 = [null,null,null,null,null,null,null,null,null];
(statearr_7304[(0)] = cljs$core$async$state_machine__6613__auto__);

(statearr_7304[(1)] = (1));

return statearr_7304;
});
var cljs$core$async$state_machine__6613__auto____1 = (function (state_7283){
while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_7283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6615__auto__;
}
break;
}
}catch (e7305){if((e7305 instanceof Object)){
var ex__6616__auto__ = e7305;
var statearr_7306_7324 = state_7283;
(statearr_7306_7324[(5)] = ex__6616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7325 = state_7283;
state_7283 = G__7325;
continue;
} else {
return ret_value__6614__auto__;
}
break;
}
});
cljs$core$async$state_machine__6613__auto__ = function(state_7283){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6613__auto____1.call(this,state_7283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6613__auto____0;
cljs$core$async$state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6613__auto____1;
return cljs$core$async$state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6674__auto___7309,tc,fc))
})();
var state__6676__auto__ = (function (){var statearr_7307 = f__6675__auto__.call(null);
(statearr_7307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6674__auto___7309);

return statearr_7307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6676__auto__);
});})(c__6674__auto___7309,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__6674__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6674__auto__){
return (function (){
var f__6675__auto__ = (function (){var switch__6612__auto__ = ((function (c__6674__auto__){
return (function (state_7372){
var state_val_7373 = (state_7372[(1)]);
if((state_val_7373 === (1))){
var inst_7358 = init;
var state_7372__$1 = (function (){var statearr_7374 = state_7372;
(statearr_7374[(7)] = inst_7358);

return statearr_7374;
})();
var statearr_7375_7390 = state_7372__$1;
(statearr_7375_7390[(2)] = null);

(statearr_7375_7390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7373 === (2))){
var state_7372__$1 = state_7372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7372__$1,(4),ch);
} else {
if((state_val_7373 === (3))){
var inst_7370 = (state_7372[(2)]);
var state_7372__$1 = state_7372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7372__$1,inst_7370);
} else {
if((state_val_7373 === (4))){
var inst_7361 = (state_7372[(8)]);
var inst_7361__$1 = (state_7372[(2)]);
var inst_7362 = (inst_7361__$1 == null);
var state_7372__$1 = (function (){var statearr_7376 = state_7372;
(statearr_7376[(8)] = inst_7361__$1);

return statearr_7376;
})();
if(cljs.core.truth_(inst_7362)){
var statearr_7377_7391 = state_7372__$1;
(statearr_7377_7391[(1)] = (5));

} else {
var statearr_7378_7392 = state_7372__$1;
(statearr_7378_7392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7373 === (5))){
var inst_7358 = (state_7372[(7)]);
var state_7372__$1 = state_7372;
var statearr_7379_7393 = state_7372__$1;
(statearr_7379_7393[(2)] = inst_7358);

(statearr_7379_7393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7373 === (6))){
var inst_7358 = (state_7372[(7)]);
var inst_7361 = (state_7372[(8)]);
var inst_7365 = f.call(null,inst_7358,inst_7361);
var inst_7358__$1 = inst_7365;
var state_7372__$1 = (function (){var statearr_7380 = state_7372;
(statearr_7380[(7)] = inst_7358__$1);

return statearr_7380;
})();
var statearr_7381_7394 = state_7372__$1;
(statearr_7381_7394[(2)] = null);

(statearr_7381_7394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7373 === (7))){
var inst_7368 = (state_7372[(2)]);
var state_7372__$1 = state_7372;
var statearr_7382_7395 = state_7372__$1;
(statearr_7382_7395[(2)] = inst_7368);

(statearr_7382_7395[(1)] = (3));


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
});})(c__6674__auto__))
;
return ((function (switch__6612__auto__,c__6674__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__6613__auto__ = null;
var cljs$core$async$reduce_$_state_machine__6613__auto____0 = (function (){
var statearr_7386 = [null,null,null,null,null,null,null,null,null];
(statearr_7386[(0)] = cljs$core$async$reduce_$_state_machine__6613__auto__);

(statearr_7386[(1)] = (1));

return statearr_7386;
});
var cljs$core$async$reduce_$_state_machine__6613__auto____1 = (function (state_7372){
while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_7372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6615__auto__;
}
break;
}
}catch (e7387){if((e7387 instanceof Object)){
var ex__6616__auto__ = e7387;
var statearr_7388_7396 = state_7372;
(statearr_7388_7396[(5)] = ex__6616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7397 = state_7372;
state_7372 = G__7397;
continue;
} else {
return ret_value__6614__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6613__auto__ = function(state_7372){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6613__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6613__auto____1.call(this,state_7372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6613__auto____0;
cljs$core$async$reduce_$_state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6613__auto____1;
return cljs$core$async$reduce_$_state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6674__auto__))
})();
var state__6676__auto__ = (function (){var statearr_7389 = f__6675__auto__.call(null);
(statearr_7389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6674__auto__);

return statearr_7389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6676__auto__);
});})(c__6674__auto__))
);

return c__6674__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__7399 = arguments.length;
switch (G__7399) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__6674__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6674__auto__){
return (function (){
var f__6675__auto__ = (function (){var switch__6612__auto__ = ((function (c__6674__auto__){
return (function (state_7424){
var state_val_7425 = (state_7424[(1)]);
if((state_val_7425 === (7))){
var inst_7406 = (state_7424[(2)]);
var state_7424__$1 = state_7424;
var statearr_7426_7450 = state_7424__$1;
(statearr_7426_7450[(2)] = inst_7406);

(statearr_7426_7450[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7425 === (1))){
var inst_7400 = cljs.core.seq.call(null,coll);
var inst_7401 = inst_7400;
var state_7424__$1 = (function (){var statearr_7427 = state_7424;
(statearr_7427[(7)] = inst_7401);

return statearr_7427;
})();
var statearr_7428_7451 = state_7424__$1;
(statearr_7428_7451[(2)] = null);

(statearr_7428_7451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7425 === (4))){
var inst_7401 = (state_7424[(7)]);
var inst_7404 = cljs.core.first.call(null,inst_7401);
var state_7424__$1 = state_7424;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7424__$1,(7),ch,inst_7404);
} else {
if((state_val_7425 === (13))){
var inst_7418 = (state_7424[(2)]);
var state_7424__$1 = state_7424;
var statearr_7429_7452 = state_7424__$1;
(statearr_7429_7452[(2)] = inst_7418);

(statearr_7429_7452[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7425 === (6))){
var inst_7409 = (state_7424[(2)]);
var state_7424__$1 = state_7424;
if(cljs.core.truth_(inst_7409)){
var statearr_7430_7453 = state_7424__$1;
(statearr_7430_7453[(1)] = (8));

} else {
var statearr_7431_7454 = state_7424__$1;
(statearr_7431_7454[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7425 === (3))){
var inst_7422 = (state_7424[(2)]);
var state_7424__$1 = state_7424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7424__$1,inst_7422);
} else {
if((state_val_7425 === (12))){
var state_7424__$1 = state_7424;
var statearr_7432_7455 = state_7424__$1;
(statearr_7432_7455[(2)] = null);

(statearr_7432_7455[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7425 === (2))){
var inst_7401 = (state_7424[(7)]);
var state_7424__$1 = state_7424;
if(cljs.core.truth_(inst_7401)){
var statearr_7433_7456 = state_7424__$1;
(statearr_7433_7456[(1)] = (4));

} else {
var statearr_7434_7457 = state_7424__$1;
(statearr_7434_7457[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7425 === (11))){
var inst_7415 = cljs.core.async.close_BANG_.call(null,ch);
var state_7424__$1 = state_7424;
var statearr_7435_7458 = state_7424__$1;
(statearr_7435_7458[(2)] = inst_7415);

(statearr_7435_7458[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7425 === (9))){
var state_7424__$1 = state_7424;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7436_7459 = state_7424__$1;
(statearr_7436_7459[(1)] = (11));

} else {
var statearr_7437_7460 = state_7424__$1;
(statearr_7437_7460[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7425 === (5))){
var inst_7401 = (state_7424[(7)]);
var state_7424__$1 = state_7424;
var statearr_7438_7461 = state_7424__$1;
(statearr_7438_7461[(2)] = inst_7401);

(statearr_7438_7461[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7425 === (10))){
var inst_7420 = (state_7424[(2)]);
var state_7424__$1 = state_7424;
var statearr_7439_7462 = state_7424__$1;
(statearr_7439_7462[(2)] = inst_7420);

(statearr_7439_7462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7425 === (8))){
var inst_7401 = (state_7424[(7)]);
var inst_7411 = cljs.core.next.call(null,inst_7401);
var inst_7401__$1 = inst_7411;
var state_7424__$1 = (function (){var statearr_7440 = state_7424;
(statearr_7440[(7)] = inst_7401__$1);

return statearr_7440;
})();
var statearr_7441_7463 = state_7424__$1;
(statearr_7441_7463[(2)] = null);

(statearr_7441_7463[(1)] = (2));


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
});})(c__6674__auto__))
;
return ((function (switch__6612__auto__,c__6674__auto__){
return (function() {
var cljs$core$async$state_machine__6613__auto__ = null;
var cljs$core$async$state_machine__6613__auto____0 = (function (){
var statearr_7445 = [null,null,null,null,null,null,null,null];
(statearr_7445[(0)] = cljs$core$async$state_machine__6613__auto__);

(statearr_7445[(1)] = (1));

return statearr_7445;
});
var cljs$core$async$state_machine__6613__auto____1 = (function (state_7424){
while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_7424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6615__auto__;
}
break;
}
}catch (e7446){if((e7446 instanceof Object)){
var ex__6616__auto__ = e7446;
var statearr_7447_7464 = state_7424;
(statearr_7447_7464[(5)] = ex__6616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7465 = state_7424;
state_7424 = G__7465;
continue;
} else {
return ret_value__6614__auto__;
}
break;
}
});
cljs$core$async$state_machine__6613__auto__ = function(state_7424){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6613__auto____1.call(this,state_7424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6613__auto____0;
cljs$core$async$state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6613__auto____1;
return cljs$core$async$state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6674__auto__))
})();
var state__6676__auto__ = (function (){var statearr_7448 = f__6675__auto__.call(null);
(statearr_7448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6674__auto__);

return statearr_7448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6676__auto__);
});})(c__6674__auto__))
);

return c__6674__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj7467 = {};
return obj7467;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4310__auto__ = _;
if(and__4310__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4310__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4958__auto__ = (((_ == null))?null:_);
return (function (){var or__4322__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4958__auto__)]);
if(or__4322__auto__){
return or__4322__auto__;
} else {
var or__4322__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4322__auto____$1){
return or__4322__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj7469 = {};
return obj7469;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4310__auto__ = m;
if(and__4310__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4310__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4958__auto__ = (((m == null))?null:m);
return (function (){var or__4322__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4958__auto__)]);
if(or__4322__auto__){
return or__4322__auto__;
} else {
var or__4322__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4322__auto____$1){
return or__4322__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4310__auto__ = m;
if(and__4310__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4310__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4958__auto__ = (((m == null))?null:m);
return (function (){var or__4322__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4958__auto__)]);
if(or__4322__auto__){
return or__4322__auto__;
} else {
var or__4322__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4322__auto____$1){
return or__4322__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4310__auto__ = m;
if(and__4310__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4310__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4958__auto__ = (((m == null))?null:m);
return (function (){var or__4322__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4958__auto__)]);
if(or__4322__auto__){
return or__4322__auto__;
} else {
var or__4322__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4322__auto____$1){
return or__4322__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t7691 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t7691 = (function (mult,ch,cs,meta7692){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta7692 = meta7692;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t7691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_7693,meta7692__$1){
var self__ = this;
var _7693__$1 = this;
return (new cljs.core.async.t7691(self__.mult,self__.ch,self__.cs,meta7692__$1));
});})(cs))
;

cljs.core.async.t7691.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_7693){
var self__ = this;
var _7693__$1 = this;
return self__.meta7692;
});})(cs))
;

cljs.core.async.t7691.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t7691.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t7691.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t7691.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t7691.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t7691.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t7691.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta7692","meta7692",-352039180,null)], null);
});})(cs))
;

cljs.core.async.t7691.cljs$lang$type = true;

cljs.core.async.t7691.cljs$lang$ctorStr = "cljs.core.async/t7691";

cljs.core.async.t7691.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4901__auto__,writer__4902__auto__,opt__4903__auto__){
return cljs.core._write.call(null,writer__4902__auto__,"cljs.core.async/t7691");
});})(cs))
;

cljs.core.async.__GT_t7691 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t7691(mult__$1,ch__$1,cs__$1,meta7692){
return (new cljs.core.async.t7691(mult__$1,ch__$1,cs__$1,meta7692));
});})(cs))
;

}

return (new cljs.core.async.t7691(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__6674__auto___7912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6674__auto___7912,cs,m,dchan,dctr,done){
return (function (){
var f__6675__auto__ = (function (){var switch__6612__auto__ = ((function (c__6674__auto___7912,cs,m,dchan,dctr,done){
return (function (state_7824){
var state_val_7825 = (state_7824[(1)]);
if((state_val_7825 === (7))){
var inst_7820 = (state_7824[(2)]);
var state_7824__$1 = state_7824;
var statearr_7826_7913 = state_7824__$1;
(statearr_7826_7913[(2)] = inst_7820);

(statearr_7826_7913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (20))){
var inst_7725 = (state_7824[(7)]);
var inst_7735 = cljs.core.first.call(null,inst_7725);
var inst_7736 = cljs.core.nth.call(null,inst_7735,(0),null);
var inst_7737 = cljs.core.nth.call(null,inst_7735,(1),null);
var state_7824__$1 = (function (){var statearr_7827 = state_7824;
(statearr_7827[(8)] = inst_7736);

return statearr_7827;
})();
if(cljs.core.truth_(inst_7737)){
var statearr_7828_7914 = state_7824__$1;
(statearr_7828_7914[(1)] = (22));

} else {
var statearr_7829_7915 = state_7824__$1;
(statearr_7829_7915[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (27))){
var inst_7765 = (state_7824[(9)]);
var inst_7696 = (state_7824[(10)]);
var inst_7772 = (state_7824[(11)]);
var inst_7767 = (state_7824[(12)]);
var inst_7772__$1 = cljs.core._nth.call(null,inst_7765,inst_7767);
var inst_7773 = cljs.core.async.put_BANG_.call(null,inst_7772__$1,inst_7696,done);
var state_7824__$1 = (function (){var statearr_7830 = state_7824;
(statearr_7830[(11)] = inst_7772__$1);

return statearr_7830;
})();
if(cljs.core.truth_(inst_7773)){
var statearr_7831_7916 = state_7824__$1;
(statearr_7831_7916[(1)] = (30));

} else {
var statearr_7832_7917 = state_7824__$1;
(statearr_7832_7917[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (1))){
var state_7824__$1 = state_7824;
var statearr_7833_7918 = state_7824__$1;
(statearr_7833_7918[(2)] = null);

(statearr_7833_7918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (24))){
var inst_7725 = (state_7824[(7)]);
var inst_7742 = (state_7824[(2)]);
var inst_7743 = cljs.core.next.call(null,inst_7725);
var inst_7705 = inst_7743;
var inst_7706 = null;
var inst_7707 = (0);
var inst_7708 = (0);
var state_7824__$1 = (function (){var statearr_7834 = state_7824;
(statearr_7834[(13)] = inst_7706);

(statearr_7834[(14)] = inst_7707);

(statearr_7834[(15)] = inst_7708);

(statearr_7834[(16)] = inst_7705);

(statearr_7834[(17)] = inst_7742);

return statearr_7834;
})();
var statearr_7835_7919 = state_7824__$1;
(statearr_7835_7919[(2)] = null);

(statearr_7835_7919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (39))){
var state_7824__$1 = state_7824;
var statearr_7839_7920 = state_7824__$1;
(statearr_7839_7920[(2)] = null);

(statearr_7839_7920[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (4))){
var inst_7696 = (state_7824[(10)]);
var inst_7696__$1 = (state_7824[(2)]);
var inst_7697 = (inst_7696__$1 == null);
var state_7824__$1 = (function (){var statearr_7840 = state_7824;
(statearr_7840[(10)] = inst_7696__$1);

return statearr_7840;
})();
if(cljs.core.truth_(inst_7697)){
var statearr_7841_7921 = state_7824__$1;
(statearr_7841_7921[(1)] = (5));

} else {
var statearr_7842_7922 = state_7824__$1;
(statearr_7842_7922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (15))){
var inst_7706 = (state_7824[(13)]);
var inst_7707 = (state_7824[(14)]);
var inst_7708 = (state_7824[(15)]);
var inst_7705 = (state_7824[(16)]);
var inst_7721 = (state_7824[(2)]);
var inst_7722 = (inst_7708 + (1));
var tmp7836 = inst_7706;
var tmp7837 = inst_7707;
var tmp7838 = inst_7705;
var inst_7705__$1 = tmp7838;
var inst_7706__$1 = tmp7836;
var inst_7707__$1 = tmp7837;
var inst_7708__$1 = inst_7722;
var state_7824__$1 = (function (){var statearr_7843 = state_7824;
(statearr_7843[(13)] = inst_7706__$1);

(statearr_7843[(14)] = inst_7707__$1);

(statearr_7843[(15)] = inst_7708__$1);

(statearr_7843[(18)] = inst_7721);

(statearr_7843[(16)] = inst_7705__$1);

return statearr_7843;
})();
var statearr_7844_7923 = state_7824__$1;
(statearr_7844_7923[(2)] = null);

(statearr_7844_7923[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (21))){
var inst_7746 = (state_7824[(2)]);
var state_7824__$1 = state_7824;
var statearr_7848_7924 = state_7824__$1;
(statearr_7848_7924[(2)] = inst_7746);

(statearr_7848_7924[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (31))){
var inst_7772 = (state_7824[(11)]);
var inst_7776 = done.call(null,null);
var inst_7777 = cljs.core.async.untap_STAR_.call(null,m,inst_7772);
var state_7824__$1 = (function (){var statearr_7849 = state_7824;
(statearr_7849[(19)] = inst_7776);

return statearr_7849;
})();
var statearr_7850_7925 = state_7824__$1;
(statearr_7850_7925[(2)] = inst_7777);

(statearr_7850_7925[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (32))){
var inst_7765 = (state_7824[(9)]);
var inst_7764 = (state_7824[(20)]);
var inst_7766 = (state_7824[(21)]);
var inst_7767 = (state_7824[(12)]);
var inst_7779 = (state_7824[(2)]);
var inst_7780 = (inst_7767 + (1));
var tmp7845 = inst_7765;
var tmp7846 = inst_7764;
var tmp7847 = inst_7766;
var inst_7764__$1 = tmp7846;
var inst_7765__$1 = tmp7845;
var inst_7766__$1 = tmp7847;
var inst_7767__$1 = inst_7780;
var state_7824__$1 = (function (){var statearr_7851 = state_7824;
(statearr_7851[(9)] = inst_7765__$1);

(statearr_7851[(20)] = inst_7764__$1);

(statearr_7851[(22)] = inst_7779);

(statearr_7851[(21)] = inst_7766__$1);

(statearr_7851[(12)] = inst_7767__$1);

return statearr_7851;
})();
var statearr_7852_7926 = state_7824__$1;
(statearr_7852_7926[(2)] = null);

(statearr_7852_7926[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (40))){
var inst_7792 = (state_7824[(23)]);
var inst_7796 = done.call(null,null);
var inst_7797 = cljs.core.async.untap_STAR_.call(null,m,inst_7792);
var state_7824__$1 = (function (){var statearr_7853 = state_7824;
(statearr_7853[(24)] = inst_7796);

return statearr_7853;
})();
var statearr_7854_7927 = state_7824__$1;
(statearr_7854_7927[(2)] = inst_7797);

(statearr_7854_7927[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (33))){
var inst_7783 = (state_7824[(25)]);
var inst_7785 = cljs.core.chunked_seq_QMARK_.call(null,inst_7783);
var state_7824__$1 = state_7824;
if(inst_7785){
var statearr_7855_7928 = state_7824__$1;
(statearr_7855_7928[(1)] = (36));

} else {
var statearr_7856_7929 = state_7824__$1;
(statearr_7856_7929[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (13))){
var inst_7715 = (state_7824[(26)]);
var inst_7718 = cljs.core.async.close_BANG_.call(null,inst_7715);
var state_7824__$1 = state_7824;
var statearr_7857_7930 = state_7824__$1;
(statearr_7857_7930[(2)] = inst_7718);

(statearr_7857_7930[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (22))){
var inst_7736 = (state_7824[(8)]);
var inst_7739 = cljs.core.async.close_BANG_.call(null,inst_7736);
var state_7824__$1 = state_7824;
var statearr_7858_7931 = state_7824__$1;
(statearr_7858_7931[(2)] = inst_7739);

(statearr_7858_7931[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (36))){
var inst_7783 = (state_7824[(25)]);
var inst_7787 = cljs.core.chunk_first.call(null,inst_7783);
var inst_7788 = cljs.core.chunk_rest.call(null,inst_7783);
var inst_7789 = cljs.core.count.call(null,inst_7787);
var inst_7764 = inst_7788;
var inst_7765 = inst_7787;
var inst_7766 = inst_7789;
var inst_7767 = (0);
var state_7824__$1 = (function (){var statearr_7859 = state_7824;
(statearr_7859[(9)] = inst_7765);

(statearr_7859[(20)] = inst_7764);

(statearr_7859[(21)] = inst_7766);

(statearr_7859[(12)] = inst_7767);

return statearr_7859;
})();
var statearr_7860_7932 = state_7824__$1;
(statearr_7860_7932[(2)] = null);

(statearr_7860_7932[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (41))){
var inst_7783 = (state_7824[(25)]);
var inst_7799 = (state_7824[(2)]);
var inst_7800 = cljs.core.next.call(null,inst_7783);
var inst_7764 = inst_7800;
var inst_7765 = null;
var inst_7766 = (0);
var inst_7767 = (0);
var state_7824__$1 = (function (){var statearr_7861 = state_7824;
(statearr_7861[(9)] = inst_7765);

(statearr_7861[(27)] = inst_7799);

(statearr_7861[(20)] = inst_7764);

(statearr_7861[(21)] = inst_7766);

(statearr_7861[(12)] = inst_7767);

return statearr_7861;
})();
var statearr_7862_7933 = state_7824__$1;
(statearr_7862_7933[(2)] = null);

(statearr_7862_7933[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (43))){
var state_7824__$1 = state_7824;
var statearr_7863_7934 = state_7824__$1;
(statearr_7863_7934[(2)] = null);

(statearr_7863_7934[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (29))){
var inst_7808 = (state_7824[(2)]);
var state_7824__$1 = state_7824;
var statearr_7864_7935 = state_7824__$1;
(statearr_7864_7935[(2)] = inst_7808);

(statearr_7864_7935[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (44))){
var inst_7817 = (state_7824[(2)]);
var state_7824__$1 = (function (){var statearr_7865 = state_7824;
(statearr_7865[(28)] = inst_7817);

return statearr_7865;
})();
var statearr_7866_7936 = state_7824__$1;
(statearr_7866_7936[(2)] = null);

(statearr_7866_7936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (6))){
var inst_7756 = (state_7824[(29)]);
var inst_7755 = cljs.core.deref.call(null,cs);
var inst_7756__$1 = cljs.core.keys.call(null,inst_7755);
var inst_7757 = cljs.core.count.call(null,inst_7756__$1);
var inst_7758 = cljs.core.reset_BANG_.call(null,dctr,inst_7757);
var inst_7763 = cljs.core.seq.call(null,inst_7756__$1);
var inst_7764 = inst_7763;
var inst_7765 = null;
var inst_7766 = (0);
var inst_7767 = (0);
var state_7824__$1 = (function (){var statearr_7867 = state_7824;
(statearr_7867[(9)] = inst_7765);

(statearr_7867[(29)] = inst_7756__$1);

(statearr_7867[(20)] = inst_7764);

(statearr_7867[(30)] = inst_7758);

(statearr_7867[(21)] = inst_7766);

(statearr_7867[(12)] = inst_7767);

return statearr_7867;
})();
var statearr_7868_7937 = state_7824__$1;
(statearr_7868_7937[(2)] = null);

(statearr_7868_7937[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (28))){
var inst_7764 = (state_7824[(20)]);
var inst_7783 = (state_7824[(25)]);
var inst_7783__$1 = cljs.core.seq.call(null,inst_7764);
var state_7824__$1 = (function (){var statearr_7869 = state_7824;
(statearr_7869[(25)] = inst_7783__$1);

return statearr_7869;
})();
if(inst_7783__$1){
var statearr_7870_7938 = state_7824__$1;
(statearr_7870_7938[(1)] = (33));

} else {
var statearr_7871_7939 = state_7824__$1;
(statearr_7871_7939[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (25))){
var inst_7766 = (state_7824[(21)]);
var inst_7767 = (state_7824[(12)]);
var inst_7769 = (inst_7767 < inst_7766);
var inst_7770 = inst_7769;
var state_7824__$1 = state_7824;
if(cljs.core.truth_(inst_7770)){
var statearr_7872_7940 = state_7824__$1;
(statearr_7872_7940[(1)] = (27));

} else {
var statearr_7873_7941 = state_7824__$1;
(statearr_7873_7941[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (34))){
var state_7824__$1 = state_7824;
var statearr_7874_7942 = state_7824__$1;
(statearr_7874_7942[(2)] = null);

(statearr_7874_7942[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (17))){
var state_7824__$1 = state_7824;
var statearr_7875_7943 = state_7824__$1;
(statearr_7875_7943[(2)] = null);

(statearr_7875_7943[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (3))){
var inst_7822 = (state_7824[(2)]);
var state_7824__$1 = state_7824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7824__$1,inst_7822);
} else {
if((state_val_7825 === (12))){
var inst_7751 = (state_7824[(2)]);
var state_7824__$1 = state_7824;
var statearr_7876_7944 = state_7824__$1;
(statearr_7876_7944[(2)] = inst_7751);

(statearr_7876_7944[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (2))){
var state_7824__$1 = state_7824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7824__$1,(4),ch);
} else {
if((state_val_7825 === (23))){
var state_7824__$1 = state_7824;
var statearr_7877_7945 = state_7824__$1;
(statearr_7877_7945[(2)] = null);

(statearr_7877_7945[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (35))){
var inst_7806 = (state_7824[(2)]);
var state_7824__$1 = state_7824;
var statearr_7878_7946 = state_7824__$1;
(statearr_7878_7946[(2)] = inst_7806);

(statearr_7878_7946[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (19))){
var inst_7725 = (state_7824[(7)]);
var inst_7729 = cljs.core.chunk_first.call(null,inst_7725);
var inst_7730 = cljs.core.chunk_rest.call(null,inst_7725);
var inst_7731 = cljs.core.count.call(null,inst_7729);
var inst_7705 = inst_7730;
var inst_7706 = inst_7729;
var inst_7707 = inst_7731;
var inst_7708 = (0);
var state_7824__$1 = (function (){var statearr_7879 = state_7824;
(statearr_7879[(13)] = inst_7706);

(statearr_7879[(14)] = inst_7707);

(statearr_7879[(15)] = inst_7708);

(statearr_7879[(16)] = inst_7705);

return statearr_7879;
})();
var statearr_7880_7947 = state_7824__$1;
(statearr_7880_7947[(2)] = null);

(statearr_7880_7947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (11))){
var inst_7725 = (state_7824[(7)]);
var inst_7705 = (state_7824[(16)]);
var inst_7725__$1 = cljs.core.seq.call(null,inst_7705);
var state_7824__$1 = (function (){var statearr_7881 = state_7824;
(statearr_7881[(7)] = inst_7725__$1);

return statearr_7881;
})();
if(inst_7725__$1){
var statearr_7882_7948 = state_7824__$1;
(statearr_7882_7948[(1)] = (16));

} else {
var statearr_7883_7949 = state_7824__$1;
(statearr_7883_7949[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (9))){
var inst_7753 = (state_7824[(2)]);
var state_7824__$1 = state_7824;
var statearr_7884_7950 = state_7824__$1;
(statearr_7884_7950[(2)] = inst_7753);

(statearr_7884_7950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (5))){
var inst_7703 = cljs.core.deref.call(null,cs);
var inst_7704 = cljs.core.seq.call(null,inst_7703);
var inst_7705 = inst_7704;
var inst_7706 = null;
var inst_7707 = (0);
var inst_7708 = (0);
var state_7824__$1 = (function (){var statearr_7885 = state_7824;
(statearr_7885[(13)] = inst_7706);

(statearr_7885[(14)] = inst_7707);

(statearr_7885[(15)] = inst_7708);

(statearr_7885[(16)] = inst_7705);

return statearr_7885;
})();
var statearr_7886_7951 = state_7824__$1;
(statearr_7886_7951[(2)] = null);

(statearr_7886_7951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (14))){
var state_7824__$1 = state_7824;
var statearr_7887_7952 = state_7824__$1;
(statearr_7887_7952[(2)] = null);

(statearr_7887_7952[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (45))){
var inst_7814 = (state_7824[(2)]);
var state_7824__$1 = state_7824;
var statearr_7888_7953 = state_7824__$1;
(statearr_7888_7953[(2)] = inst_7814);

(statearr_7888_7953[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (26))){
var inst_7756 = (state_7824[(29)]);
var inst_7810 = (state_7824[(2)]);
var inst_7811 = cljs.core.seq.call(null,inst_7756);
var state_7824__$1 = (function (){var statearr_7889 = state_7824;
(statearr_7889[(31)] = inst_7810);

return statearr_7889;
})();
if(inst_7811){
var statearr_7890_7954 = state_7824__$1;
(statearr_7890_7954[(1)] = (42));

} else {
var statearr_7891_7955 = state_7824__$1;
(statearr_7891_7955[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (16))){
var inst_7725 = (state_7824[(7)]);
var inst_7727 = cljs.core.chunked_seq_QMARK_.call(null,inst_7725);
var state_7824__$1 = state_7824;
if(inst_7727){
var statearr_7892_7956 = state_7824__$1;
(statearr_7892_7956[(1)] = (19));

} else {
var statearr_7893_7957 = state_7824__$1;
(statearr_7893_7957[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (38))){
var inst_7803 = (state_7824[(2)]);
var state_7824__$1 = state_7824;
var statearr_7894_7958 = state_7824__$1;
(statearr_7894_7958[(2)] = inst_7803);

(statearr_7894_7958[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (30))){
var state_7824__$1 = state_7824;
var statearr_7895_7959 = state_7824__$1;
(statearr_7895_7959[(2)] = null);

(statearr_7895_7959[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (10))){
var inst_7706 = (state_7824[(13)]);
var inst_7708 = (state_7824[(15)]);
var inst_7714 = cljs.core._nth.call(null,inst_7706,inst_7708);
var inst_7715 = cljs.core.nth.call(null,inst_7714,(0),null);
var inst_7716 = cljs.core.nth.call(null,inst_7714,(1),null);
var state_7824__$1 = (function (){var statearr_7896 = state_7824;
(statearr_7896[(26)] = inst_7715);

return statearr_7896;
})();
if(cljs.core.truth_(inst_7716)){
var statearr_7897_7960 = state_7824__$1;
(statearr_7897_7960[(1)] = (13));

} else {
var statearr_7898_7961 = state_7824__$1;
(statearr_7898_7961[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (18))){
var inst_7749 = (state_7824[(2)]);
var state_7824__$1 = state_7824;
var statearr_7899_7962 = state_7824__$1;
(statearr_7899_7962[(2)] = inst_7749);

(statearr_7899_7962[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (42))){
var state_7824__$1 = state_7824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7824__$1,(45),dchan);
} else {
if((state_val_7825 === (37))){
var inst_7792 = (state_7824[(23)]);
var inst_7696 = (state_7824[(10)]);
var inst_7783 = (state_7824[(25)]);
var inst_7792__$1 = cljs.core.first.call(null,inst_7783);
var inst_7793 = cljs.core.async.put_BANG_.call(null,inst_7792__$1,inst_7696,done);
var state_7824__$1 = (function (){var statearr_7900 = state_7824;
(statearr_7900[(23)] = inst_7792__$1);

return statearr_7900;
})();
if(cljs.core.truth_(inst_7793)){
var statearr_7901_7963 = state_7824__$1;
(statearr_7901_7963[(1)] = (39));

} else {
var statearr_7902_7964 = state_7824__$1;
(statearr_7902_7964[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7825 === (8))){
var inst_7707 = (state_7824[(14)]);
var inst_7708 = (state_7824[(15)]);
var inst_7710 = (inst_7708 < inst_7707);
var inst_7711 = inst_7710;
var state_7824__$1 = state_7824;
if(cljs.core.truth_(inst_7711)){
var statearr_7903_7965 = state_7824__$1;
(statearr_7903_7965[(1)] = (10));

} else {
var statearr_7904_7966 = state_7824__$1;
(statearr_7904_7966[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__6674__auto___7912,cs,m,dchan,dctr,done))
;
return ((function (switch__6612__auto__,c__6674__auto___7912,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6613__auto__ = null;
var cljs$core$async$mult_$_state_machine__6613__auto____0 = (function (){
var statearr_7908 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7908[(0)] = cljs$core$async$mult_$_state_machine__6613__auto__);

(statearr_7908[(1)] = (1));

return statearr_7908;
});
var cljs$core$async$mult_$_state_machine__6613__auto____1 = (function (state_7824){
while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_7824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6615__auto__;
}
break;
}
}catch (e7909){if((e7909 instanceof Object)){
var ex__6616__auto__ = e7909;
var statearr_7910_7967 = state_7824;
(statearr_7910_7967[(5)] = ex__6616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7968 = state_7824;
state_7824 = G__7968;
continue;
} else {
return ret_value__6614__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6613__auto__ = function(state_7824){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6613__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6613__auto____1.call(this,state_7824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6613__auto____0;
cljs$core$async$mult_$_state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6613__auto____1;
return cljs$core$async$mult_$_state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6674__auto___7912,cs,m,dchan,dctr,done))
})();
var state__6676__auto__ = (function (){var statearr_7911 = f__6675__auto__.call(null);
(statearr_7911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6674__auto___7912);

return statearr_7911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6676__auto__);
});})(c__6674__auto___7912,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__7970 = arguments.length;
switch (G__7970) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj7973 = {};
return obj7973;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4310__auto__ = m;
if(and__4310__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4310__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4958__auto__ = (((m == null))?null:m);
return (function (){var or__4322__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4958__auto__)]);
if(or__4322__auto__){
return or__4322__auto__;
} else {
var or__4322__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4322__auto____$1){
return or__4322__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4310__auto__ = m;
if(and__4310__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4310__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4958__auto__ = (((m == null))?null:m);
return (function (){var or__4322__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4958__auto__)]);
if(or__4322__auto__){
return or__4322__auto__;
} else {
var or__4322__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4322__auto____$1){
return or__4322__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4310__auto__ = m;
if(and__4310__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4310__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4958__auto__ = (((m == null))?null:m);
return (function (){var or__4322__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4958__auto__)]);
if(or__4322__auto__){
return or__4322__auto__;
} else {
var or__4322__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4322__auto____$1){
return or__4322__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4310__auto__ = m;
if(and__4310__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4310__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4958__auto__ = (((m == null))?null:m);
return (function (){var or__4322__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4958__auto__)]);
if(or__4322__auto__){
return or__4322__auto__;
} else {
var or__4322__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4322__auto____$1){
return or__4322__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4310__auto__ = m;
if(and__4310__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4310__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4958__auto__ = (((m == null))?null:m);
return (function (){var or__4322__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4958__auto__)]);
if(or__4322__auto__){
return or__4322__auto__;
} else {
var or__4322__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4322__auto____$1){
return or__4322__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__5362__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5362__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__7978){
var map__7979 = p__7978;
var map__7979__$1 = ((cljs.core.seq_QMARK_.call(null,map__7979))?cljs.core.apply.call(null,cljs.core.hash_map,map__7979):map__7979);
var opts = map__7979__$1;
var statearr_7980_7983 = state;
(statearr_7980_7983[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__7979,map__7979__$1,opts){
return (function (val){
var statearr_7981_7984 = state;
(statearr_7981_7984[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__7979,map__7979__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_7982_7985 = state;
(statearr_7982_7985[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq7974){
var G__7975 = cljs.core.first.call(null,seq7974);
var seq7974__$1 = cljs.core.next.call(null,seq7974);
var G__7976 = cljs.core.first.call(null,seq7974__$1);
var seq7974__$2 = cljs.core.next.call(null,seq7974__$1);
var G__7977 = cljs.core.first.call(null,seq7974__$2);
var seq7974__$3 = cljs.core.next.call(null,seq7974__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7975,G__7976,G__7977,seq7974__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t8105 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t8105 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta8106){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta8106 = meta8106;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t8105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_8107,meta8106__$1){
var self__ = this;
var _8107__$1 = this;
return (new cljs.core.async.t8105(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta8106__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t8105.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_8107){
var self__ = this;
var _8107__$1 = this;
return self__.meta8106;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t8105.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t8105.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t8105.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t8105.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t8105.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t8105.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t8105.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t8105.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t8105.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta8106","meta8106",-435038845,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t8105.cljs$lang$type = true;

cljs.core.async.t8105.cljs$lang$ctorStr = "cljs.core.async/t8105";

cljs.core.async.t8105.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4901__auto__,writer__4902__auto__,opt__4903__auto__){
return cljs.core._write.call(null,writer__4902__auto__,"cljs.core.async/t8105");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t8105 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t8105(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta8106){
return (new cljs.core.async.t8105(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta8106));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t8105(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6674__auto___8224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6674__auto___8224,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6675__auto__ = (function (){var switch__6612__auto__ = ((function (c__6674__auto___8224,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_8177){
var state_val_8178 = (state_8177[(1)]);
if((state_val_8178 === (7))){
var inst_8121 = (state_8177[(7)]);
var inst_8126 = cljs.core.apply.call(null,cljs.core.hash_map,inst_8121);
var state_8177__$1 = state_8177;
var statearr_8179_8225 = state_8177__$1;
(statearr_8179_8225[(2)] = inst_8126);

(statearr_8179_8225[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8178 === (20))){
var inst_8136 = (state_8177[(8)]);
var state_8177__$1 = state_8177;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8177__$1,(23),out,inst_8136);
} else {
if((state_val_8178 === (1))){
var inst_8111 = (state_8177[(9)]);
var inst_8111__$1 = calc_state.call(null);
var inst_8112 = cljs.core.seq_QMARK_.call(null,inst_8111__$1);
var state_8177__$1 = (function (){var statearr_8180 = state_8177;
(statearr_8180[(9)] = inst_8111__$1);

return statearr_8180;
})();
if(inst_8112){
var statearr_8181_8226 = state_8177__$1;
(statearr_8181_8226[(1)] = (2));

} else {
var statearr_8182_8227 = state_8177__$1;
(statearr_8182_8227[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8178 === (24))){
var inst_8129 = (state_8177[(10)]);
var inst_8121 = inst_8129;
var state_8177__$1 = (function (){var statearr_8183 = state_8177;
(statearr_8183[(7)] = inst_8121);

return statearr_8183;
})();
var statearr_8184_8228 = state_8177__$1;
(statearr_8184_8228[(2)] = null);

(statearr_8184_8228[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8178 === (4))){
var inst_8111 = (state_8177[(9)]);
var inst_8117 = (state_8177[(2)]);
var inst_8118 = cljs.core.get.call(null,inst_8117,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_8119 = cljs.core.get.call(null,inst_8117,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_8120 = cljs.core.get.call(null,inst_8117,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_8121 = inst_8111;
var state_8177__$1 = (function (){var statearr_8185 = state_8177;
(statearr_8185[(7)] = inst_8121);

(statearr_8185[(11)] = inst_8120);

(statearr_8185[(12)] = inst_8119);

(statearr_8185[(13)] = inst_8118);

return statearr_8185;
})();
var statearr_8186_8229 = state_8177__$1;
(statearr_8186_8229[(2)] = null);

(statearr_8186_8229[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8178 === (15))){
var state_8177__$1 = state_8177;
var statearr_8187_8230 = state_8177__$1;
(statearr_8187_8230[(2)] = null);

(statearr_8187_8230[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8178 === (21))){
var inst_8129 = (state_8177[(10)]);
var inst_8121 = inst_8129;
var state_8177__$1 = (function (){var statearr_8188 = state_8177;
(statearr_8188[(7)] = inst_8121);

return statearr_8188;
})();
var statearr_8189_8231 = state_8177__$1;
(statearr_8189_8231[(2)] = null);

(statearr_8189_8231[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8178 === (13))){
var inst_8173 = (state_8177[(2)]);
var state_8177__$1 = state_8177;
var statearr_8190_8232 = state_8177__$1;
(statearr_8190_8232[(2)] = inst_8173);

(statearr_8190_8232[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8178 === (22))){
var inst_8171 = (state_8177[(2)]);
var state_8177__$1 = state_8177;
var statearr_8191_8233 = state_8177__$1;
(statearr_8191_8233[(2)] = inst_8171);

(statearr_8191_8233[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8178 === (6))){
var inst_8175 = (state_8177[(2)]);
var state_8177__$1 = state_8177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8177__$1,inst_8175);
} else {
if((state_val_8178 === (25))){
var state_8177__$1 = state_8177;
var statearr_8192_8234 = state_8177__$1;
(statearr_8192_8234[(2)] = null);

(statearr_8192_8234[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8178 === (17))){
var inst_8151 = (state_8177[(14)]);
var state_8177__$1 = state_8177;
var statearr_8193_8235 = state_8177__$1;
(statearr_8193_8235[(2)] = inst_8151);

(statearr_8193_8235[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8178 === (3))){
var inst_8111 = (state_8177[(9)]);
var state_8177__$1 = state_8177;
var statearr_8194_8236 = state_8177__$1;
(statearr_8194_8236[(2)] = inst_8111);

(statearr_8194_8236[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8178 === (12))){
var inst_8137 = (state_8177[(15)]);
var inst_8151 = (state_8177[(14)]);
var inst_8130 = (state_8177[(16)]);
var inst_8151__$1 = inst_8130.call(null,inst_8137);
var state_8177__$1 = (function (){var statearr_8195 = state_8177;
(statearr_8195[(14)] = inst_8151__$1);

return statearr_8195;
})();
if(cljs.core.truth_(inst_8151__$1)){
var statearr_8196_8237 = state_8177__$1;
(statearr_8196_8237[(1)] = (17));

} else {
var statearr_8197_8238 = state_8177__$1;
(statearr_8197_8238[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8178 === (2))){
var inst_8111 = (state_8177[(9)]);
var inst_8114 = cljs.core.apply.call(null,cljs.core.hash_map,inst_8111);
var state_8177__$1 = state_8177;
var statearr_8198_8239 = state_8177__$1;
(statearr_8198_8239[(2)] = inst_8114);

(statearr_8198_8239[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8178 === (23))){
var inst_8162 = (state_8177[(2)]);
var state_8177__$1 = state_8177;
if(cljs.core.truth_(inst_8162)){
var statearr_8199_8240 = state_8177__$1;
(statearr_8199_8240[(1)] = (24));

} else {
var statearr_8200_8241 = state_8177__$1;
(statearr_8200_8241[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8178 === (19))){
var inst_8159 = (state_8177[(2)]);
var state_8177__$1 = state_8177;
if(cljs.core.truth_(inst_8159)){
var statearr_8201_8242 = state_8177__$1;
(statearr_8201_8242[(1)] = (20));

} else {
var statearr_8202_8243 = state_8177__$1;
(statearr_8202_8243[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8178 === (11))){
var inst_8136 = (state_8177[(8)]);
var inst_8142 = (inst_8136 == null);
var state_8177__$1 = state_8177;
if(cljs.core.truth_(inst_8142)){
var statearr_8203_8244 = state_8177__$1;
(statearr_8203_8244[(1)] = (14));

} else {
var statearr_8204_8245 = state_8177__$1;
(statearr_8204_8245[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8178 === (9))){
var inst_8129 = (state_8177[(10)]);
var inst_8129__$1 = (state_8177[(2)]);
var inst_8130 = cljs.core.get.call(null,inst_8129__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_8131 = cljs.core.get.call(null,inst_8129__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_8132 = cljs.core.get.call(null,inst_8129__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_8177__$1 = (function (){var statearr_8205 = state_8177;
(statearr_8205[(10)] = inst_8129__$1);

(statearr_8205[(17)] = inst_8131);

(statearr_8205[(16)] = inst_8130);

return statearr_8205;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_8177__$1,(10),inst_8132);
} else {
if((state_val_8178 === (5))){
var inst_8121 = (state_8177[(7)]);
var inst_8124 = cljs.core.seq_QMARK_.call(null,inst_8121);
var state_8177__$1 = state_8177;
if(inst_8124){
var statearr_8206_8246 = state_8177__$1;
(statearr_8206_8246[(1)] = (7));

} else {
var statearr_8207_8247 = state_8177__$1;
(statearr_8207_8247[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8178 === (14))){
var inst_8137 = (state_8177[(15)]);
var inst_8144 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_8137);
var state_8177__$1 = state_8177;
var statearr_8208_8248 = state_8177__$1;
(statearr_8208_8248[(2)] = inst_8144);

(statearr_8208_8248[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8178 === (26))){
var inst_8167 = (state_8177[(2)]);
var state_8177__$1 = state_8177;
var statearr_8209_8249 = state_8177__$1;
(statearr_8209_8249[(2)] = inst_8167);

(statearr_8209_8249[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8178 === (16))){
var inst_8147 = (state_8177[(2)]);
var inst_8148 = calc_state.call(null);
var inst_8121 = inst_8148;
var state_8177__$1 = (function (){var statearr_8210 = state_8177;
(statearr_8210[(7)] = inst_8121);

(statearr_8210[(18)] = inst_8147);

return statearr_8210;
})();
var statearr_8211_8250 = state_8177__$1;
(statearr_8211_8250[(2)] = null);

(statearr_8211_8250[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8178 === (10))){
var inst_8137 = (state_8177[(15)]);
var inst_8136 = (state_8177[(8)]);
var inst_8135 = (state_8177[(2)]);
var inst_8136__$1 = cljs.core.nth.call(null,inst_8135,(0),null);
var inst_8137__$1 = cljs.core.nth.call(null,inst_8135,(1),null);
var inst_8138 = (inst_8136__$1 == null);
var inst_8139 = cljs.core._EQ_.call(null,inst_8137__$1,change);
var inst_8140 = (inst_8138) || (inst_8139);
var state_8177__$1 = (function (){var statearr_8212 = state_8177;
(statearr_8212[(15)] = inst_8137__$1);

(statearr_8212[(8)] = inst_8136__$1);

return statearr_8212;
})();
if(cljs.core.truth_(inst_8140)){
var statearr_8213_8251 = state_8177__$1;
(statearr_8213_8251[(1)] = (11));

} else {
var statearr_8214_8252 = state_8177__$1;
(statearr_8214_8252[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8178 === (18))){
var inst_8137 = (state_8177[(15)]);
var inst_8131 = (state_8177[(17)]);
var inst_8130 = (state_8177[(16)]);
var inst_8154 = cljs.core.empty_QMARK_.call(null,inst_8130);
var inst_8155 = inst_8131.call(null,inst_8137);
var inst_8156 = cljs.core.not.call(null,inst_8155);
var inst_8157 = (inst_8154) && (inst_8156);
var state_8177__$1 = state_8177;
var statearr_8215_8253 = state_8177__$1;
(statearr_8215_8253[(2)] = inst_8157);

(statearr_8215_8253[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8178 === (8))){
var inst_8121 = (state_8177[(7)]);
var state_8177__$1 = state_8177;
var statearr_8216_8254 = state_8177__$1;
(statearr_8216_8254[(2)] = inst_8121);

(statearr_8216_8254[(1)] = (9));


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
});})(c__6674__auto___8224,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6612__auto__,c__6674__auto___8224,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6613__auto__ = null;
var cljs$core$async$mix_$_state_machine__6613__auto____0 = (function (){
var statearr_8220 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8220[(0)] = cljs$core$async$mix_$_state_machine__6613__auto__);

(statearr_8220[(1)] = (1));

return statearr_8220;
});
var cljs$core$async$mix_$_state_machine__6613__auto____1 = (function (state_8177){
while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_8177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6615__auto__;
}
break;
}
}catch (e8221){if((e8221 instanceof Object)){
var ex__6616__auto__ = e8221;
var statearr_8222_8255 = state_8177;
(statearr_8222_8255[(5)] = ex__6616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8256 = state_8177;
state_8177 = G__8256;
continue;
} else {
return ret_value__6614__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6613__auto__ = function(state_8177){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6613__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6613__auto____1.call(this,state_8177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6613__auto____0;
cljs$core$async$mix_$_state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6613__auto____1;
return cljs$core$async$mix_$_state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6674__auto___8224,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6676__auto__ = (function (){var statearr_8223 = f__6675__auto__.call(null);
(statearr_8223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6674__auto___8224);

return statearr_8223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6676__auto__);
});})(c__6674__auto___8224,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj8258 = {};
return obj8258;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4310__auto__ = p;
if(and__4310__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4310__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4958__auto__ = (((p == null))?null:p);
return (function (){var or__4322__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4958__auto__)]);
if(or__4322__auto__){
return or__4322__auto__;
} else {
var or__4322__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4322__auto____$1){
return or__4322__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4310__auto__ = p;
if(and__4310__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4310__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4958__auto__ = (((p == null))?null:p);
return (function (){var or__4322__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4958__auto__)]);
if(or__4322__auto__){
return or__4322__auto__;
} else {
var or__4322__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4322__auto____$1){
return or__4322__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__8260 = arguments.length;
switch (G__8260) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__4310__auto__ = p;
if(and__4310__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4310__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4958__auto__ = (((p == null))?null:p);
return (function (){var or__4322__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4958__auto__)]);
if(or__4322__auto__){
return or__4322__auto__;
} else {
var or__4322__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4322__auto____$1){
return or__4322__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__4310__auto__ = p;
if(and__4310__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4310__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4958__auto__ = (((p == null))?null:p);
return (function (){var or__4322__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4958__auto__)]);
if(or__4322__auto__){
return or__4322__auto__;
} else {
var or__4322__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4322__auto____$1){
return or__4322__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__8264 = arguments.length;
switch (G__8264) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4322__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4322__auto__)){
return or__4322__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4322__auto__,mults){
return (function (p1__8262_SHARP_){
if(cljs.core.truth_(p1__8262_SHARP_.call(null,topic))){
return p1__8262_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__8262_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4322__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t8265 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t8265 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta8266){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta8266 = meta8266;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t8265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_8267,meta8266__$1){
var self__ = this;
var _8267__$1 = this;
return (new cljs.core.async.t8265(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta8266__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t8265.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_8267){
var self__ = this;
var _8267__$1 = this;
return self__.meta8266;
});})(mults,ensure_mult))
;

cljs.core.async.t8265.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t8265.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t8265.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t8265.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t8265.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t8265.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t8265.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t8265.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta8266","meta8266",77572999,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t8265.cljs$lang$type = true;

cljs.core.async.t8265.cljs$lang$ctorStr = "cljs.core.async/t8265";

cljs.core.async.t8265.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4901__auto__,writer__4902__auto__,opt__4903__auto__){
return cljs.core._write.call(null,writer__4902__auto__,"cljs.core.async/t8265");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t8265 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t8265(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta8266){
return (new cljs.core.async.t8265(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta8266));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t8265(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6674__auto___8388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6674__auto___8388,mults,ensure_mult,p){
return (function (){
var f__6675__auto__ = (function (){var switch__6612__auto__ = ((function (c__6674__auto___8388,mults,ensure_mult,p){
return (function (state_8339){
var state_val_8340 = (state_8339[(1)]);
if((state_val_8340 === (7))){
var inst_8335 = (state_8339[(2)]);
var state_8339__$1 = state_8339;
var statearr_8341_8389 = state_8339__$1;
(statearr_8341_8389[(2)] = inst_8335);

(statearr_8341_8389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8340 === (20))){
var state_8339__$1 = state_8339;
var statearr_8342_8390 = state_8339__$1;
(statearr_8342_8390[(2)] = null);

(statearr_8342_8390[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8340 === (1))){
var state_8339__$1 = state_8339;
var statearr_8343_8391 = state_8339__$1;
(statearr_8343_8391[(2)] = null);

(statearr_8343_8391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8340 === (24))){
var inst_8318 = (state_8339[(7)]);
var inst_8327 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_8318);
var state_8339__$1 = state_8339;
var statearr_8344_8392 = state_8339__$1;
(statearr_8344_8392[(2)] = inst_8327);

(statearr_8344_8392[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8340 === (4))){
var inst_8270 = (state_8339[(8)]);
var inst_8270__$1 = (state_8339[(2)]);
var inst_8271 = (inst_8270__$1 == null);
var state_8339__$1 = (function (){var statearr_8345 = state_8339;
(statearr_8345[(8)] = inst_8270__$1);

return statearr_8345;
})();
if(cljs.core.truth_(inst_8271)){
var statearr_8346_8393 = state_8339__$1;
(statearr_8346_8393[(1)] = (5));

} else {
var statearr_8347_8394 = state_8339__$1;
(statearr_8347_8394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8340 === (15))){
var inst_8312 = (state_8339[(2)]);
var state_8339__$1 = state_8339;
var statearr_8348_8395 = state_8339__$1;
(statearr_8348_8395[(2)] = inst_8312);

(statearr_8348_8395[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8340 === (21))){
var inst_8332 = (state_8339[(2)]);
var state_8339__$1 = (function (){var statearr_8349 = state_8339;
(statearr_8349[(9)] = inst_8332);

return statearr_8349;
})();
var statearr_8350_8396 = state_8339__$1;
(statearr_8350_8396[(2)] = null);

(statearr_8350_8396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8340 === (13))){
var inst_8294 = (state_8339[(10)]);
var inst_8296 = cljs.core.chunked_seq_QMARK_.call(null,inst_8294);
var state_8339__$1 = state_8339;
if(inst_8296){
var statearr_8351_8397 = state_8339__$1;
(statearr_8351_8397[(1)] = (16));

} else {
var statearr_8352_8398 = state_8339__$1;
(statearr_8352_8398[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8340 === (22))){
var inst_8324 = (state_8339[(2)]);
var state_8339__$1 = state_8339;
if(cljs.core.truth_(inst_8324)){
var statearr_8353_8399 = state_8339__$1;
(statearr_8353_8399[(1)] = (23));

} else {
var statearr_8354_8400 = state_8339__$1;
(statearr_8354_8400[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8340 === (6))){
var inst_8270 = (state_8339[(8)]);
var inst_8318 = (state_8339[(7)]);
var inst_8320 = (state_8339[(11)]);
var inst_8318__$1 = topic_fn.call(null,inst_8270);
var inst_8319 = cljs.core.deref.call(null,mults);
var inst_8320__$1 = cljs.core.get.call(null,inst_8319,inst_8318__$1);
var state_8339__$1 = (function (){var statearr_8355 = state_8339;
(statearr_8355[(7)] = inst_8318__$1);

(statearr_8355[(11)] = inst_8320__$1);

return statearr_8355;
})();
if(cljs.core.truth_(inst_8320__$1)){
var statearr_8356_8401 = state_8339__$1;
(statearr_8356_8401[(1)] = (19));

} else {
var statearr_8357_8402 = state_8339__$1;
(statearr_8357_8402[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8340 === (25))){
var inst_8329 = (state_8339[(2)]);
var state_8339__$1 = state_8339;
var statearr_8358_8403 = state_8339__$1;
(statearr_8358_8403[(2)] = inst_8329);

(statearr_8358_8403[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8340 === (17))){
var inst_8294 = (state_8339[(10)]);
var inst_8303 = cljs.core.first.call(null,inst_8294);
var inst_8304 = cljs.core.async.muxch_STAR_.call(null,inst_8303);
var inst_8305 = cljs.core.async.close_BANG_.call(null,inst_8304);
var inst_8306 = cljs.core.next.call(null,inst_8294);
var inst_8280 = inst_8306;
var inst_8281 = null;
var inst_8282 = (0);
var inst_8283 = (0);
var state_8339__$1 = (function (){var statearr_8359 = state_8339;
(statearr_8359[(12)] = inst_8305);

(statearr_8359[(13)] = inst_8281);

(statearr_8359[(14)] = inst_8283);

(statearr_8359[(15)] = inst_8280);

(statearr_8359[(16)] = inst_8282);

return statearr_8359;
})();
var statearr_8360_8404 = state_8339__$1;
(statearr_8360_8404[(2)] = null);

(statearr_8360_8404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8340 === (3))){
var inst_8337 = (state_8339[(2)]);
var state_8339__$1 = state_8339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8339__$1,inst_8337);
} else {
if((state_val_8340 === (12))){
var inst_8314 = (state_8339[(2)]);
var state_8339__$1 = state_8339;
var statearr_8361_8405 = state_8339__$1;
(statearr_8361_8405[(2)] = inst_8314);

(statearr_8361_8405[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8340 === (2))){
var state_8339__$1 = state_8339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8339__$1,(4),ch);
} else {
if((state_val_8340 === (23))){
var state_8339__$1 = state_8339;
var statearr_8362_8406 = state_8339__$1;
(statearr_8362_8406[(2)] = null);

(statearr_8362_8406[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8340 === (19))){
var inst_8270 = (state_8339[(8)]);
var inst_8320 = (state_8339[(11)]);
var inst_8322 = cljs.core.async.muxch_STAR_.call(null,inst_8320);
var state_8339__$1 = state_8339;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8339__$1,(22),inst_8322,inst_8270);
} else {
if((state_val_8340 === (11))){
var inst_8294 = (state_8339[(10)]);
var inst_8280 = (state_8339[(15)]);
var inst_8294__$1 = cljs.core.seq.call(null,inst_8280);
var state_8339__$1 = (function (){var statearr_8363 = state_8339;
(statearr_8363[(10)] = inst_8294__$1);

return statearr_8363;
})();
if(inst_8294__$1){
var statearr_8364_8407 = state_8339__$1;
(statearr_8364_8407[(1)] = (13));

} else {
var statearr_8365_8408 = state_8339__$1;
(statearr_8365_8408[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8340 === (9))){
var inst_8316 = (state_8339[(2)]);
var state_8339__$1 = state_8339;
var statearr_8366_8409 = state_8339__$1;
(statearr_8366_8409[(2)] = inst_8316);

(statearr_8366_8409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8340 === (5))){
var inst_8277 = cljs.core.deref.call(null,mults);
var inst_8278 = cljs.core.vals.call(null,inst_8277);
var inst_8279 = cljs.core.seq.call(null,inst_8278);
var inst_8280 = inst_8279;
var inst_8281 = null;
var inst_8282 = (0);
var inst_8283 = (0);
var state_8339__$1 = (function (){var statearr_8367 = state_8339;
(statearr_8367[(13)] = inst_8281);

(statearr_8367[(14)] = inst_8283);

(statearr_8367[(15)] = inst_8280);

(statearr_8367[(16)] = inst_8282);

return statearr_8367;
})();
var statearr_8368_8410 = state_8339__$1;
(statearr_8368_8410[(2)] = null);

(statearr_8368_8410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8340 === (14))){
var state_8339__$1 = state_8339;
var statearr_8372_8411 = state_8339__$1;
(statearr_8372_8411[(2)] = null);

(statearr_8372_8411[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8340 === (16))){
var inst_8294 = (state_8339[(10)]);
var inst_8298 = cljs.core.chunk_first.call(null,inst_8294);
var inst_8299 = cljs.core.chunk_rest.call(null,inst_8294);
var inst_8300 = cljs.core.count.call(null,inst_8298);
var inst_8280 = inst_8299;
var inst_8281 = inst_8298;
var inst_8282 = inst_8300;
var inst_8283 = (0);
var state_8339__$1 = (function (){var statearr_8373 = state_8339;
(statearr_8373[(13)] = inst_8281);

(statearr_8373[(14)] = inst_8283);

(statearr_8373[(15)] = inst_8280);

(statearr_8373[(16)] = inst_8282);

return statearr_8373;
})();
var statearr_8374_8412 = state_8339__$1;
(statearr_8374_8412[(2)] = null);

(statearr_8374_8412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8340 === (10))){
var inst_8281 = (state_8339[(13)]);
var inst_8283 = (state_8339[(14)]);
var inst_8280 = (state_8339[(15)]);
var inst_8282 = (state_8339[(16)]);
var inst_8288 = cljs.core._nth.call(null,inst_8281,inst_8283);
var inst_8289 = cljs.core.async.muxch_STAR_.call(null,inst_8288);
var inst_8290 = cljs.core.async.close_BANG_.call(null,inst_8289);
var inst_8291 = (inst_8283 + (1));
var tmp8369 = inst_8281;
var tmp8370 = inst_8280;
var tmp8371 = inst_8282;
var inst_8280__$1 = tmp8370;
var inst_8281__$1 = tmp8369;
var inst_8282__$1 = tmp8371;
var inst_8283__$1 = inst_8291;
var state_8339__$1 = (function (){var statearr_8375 = state_8339;
(statearr_8375[(17)] = inst_8290);

(statearr_8375[(13)] = inst_8281__$1);

(statearr_8375[(14)] = inst_8283__$1);

(statearr_8375[(15)] = inst_8280__$1);

(statearr_8375[(16)] = inst_8282__$1);

return statearr_8375;
})();
var statearr_8376_8413 = state_8339__$1;
(statearr_8376_8413[(2)] = null);

(statearr_8376_8413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8340 === (18))){
var inst_8309 = (state_8339[(2)]);
var state_8339__$1 = state_8339;
var statearr_8377_8414 = state_8339__$1;
(statearr_8377_8414[(2)] = inst_8309);

(statearr_8377_8414[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8340 === (8))){
var inst_8283 = (state_8339[(14)]);
var inst_8282 = (state_8339[(16)]);
var inst_8285 = (inst_8283 < inst_8282);
var inst_8286 = inst_8285;
var state_8339__$1 = state_8339;
if(cljs.core.truth_(inst_8286)){
var statearr_8378_8415 = state_8339__$1;
(statearr_8378_8415[(1)] = (10));

} else {
var statearr_8379_8416 = state_8339__$1;
(statearr_8379_8416[(1)] = (11));

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
});})(c__6674__auto___8388,mults,ensure_mult,p))
;
return ((function (switch__6612__auto__,c__6674__auto___8388,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__6613__auto__ = null;
var cljs$core$async$state_machine__6613__auto____0 = (function (){
var statearr_8383 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8383[(0)] = cljs$core$async$state_machine__6613__auto__);

(statearr_8383[(1)] = (1));

return statearr_8383;
});
var cljs$core$async$state_machine__6613__auto____1 = (function (state_8339){
while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_8339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6615__auto__;
}
break;
}
}catch (e8384){if((e8384 instanceof Object)){
var ex__6616__auto__ = e8384;
var statearr_8385_8417 = state_8339;
(statearr_8385_8417[(5)] = ex__6616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8418 = state_8339;
state_8339 = G__8418;
continue;
} else {
return ret_value__6614__auto__;
}
break;
}
});
cljs$core$async$state_machine__6613__auto__ = function(state_8339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6613__auto____1.call(this,state_8339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6613__auto____0;
cljs$core$async$state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6613__auto____1;
return cljs$core$async$state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6674__auto___8388,mults,ensure_mult,p))
})();
var state__6676__auto__ = (function (){var statearr_8386 = f__6675__auto__.call(null);
(statearr_8386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6674__auto___8388);

return statearr_8386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6676__auto__);
});})(c__6674__auto___8388,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__8420 = arguments.length;
switch (G__8420) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__8423 = arguments.length;
switch (G__8423) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__8426 = arguments.length;
switch (G__8426) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__6674__auto___8496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6674__auto___8496,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6675__auto__ = (function (){var switch__6612__auto__ = ((function (c__6674__auto___8496,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_8465){
var state_val_8466 = (state_8465[(1)]);
if((state_val_8466 === (7))){
var state_8465__$1 = state_8465;
var statearr_8467_8497 = state_8465__$1;
(statearr_8467_8497[(2)] = null);

(statearr_8467_8497[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8466 === (1))){
var state_8465__$1 = state_8465;
var statearr_8468_8498 = state_8465__$1;
(statearr_8468_8498[(2)] = null);

(statearr_8468_8498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8466 === (4))){
var inst_8429 = (state_8465[(7)]);
var inst_8431 = (inst_8429 < cnt);
var state_8465__$1 = state_8465;
if(cljs.core.truth_(inst_8431)){
var statearr_8469_8499 = state_8465__$1;
(statearr_8469_8499[(1)] = (6));

} else {
var statearr_8470_8500 = state_8465__$1;
(statearr_8470_8500[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8466 === (15))){
var inst_8461 = (state_8465[(2)]);
var state_8465__$1 = state_8465;
var statearr_8471_8501 = state_8465__$1;
(statearr_8471_8501[(2)] = inst_8461);

(statearr_8471_8501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8466 === (13))){
var inst_8454 = cljs.core.async.close_BANG_.call(null,out);
var state_8465__$1 = state_8465;
var statearr_8472_8502 = state_8465__$1;
(statearr_8472_8502[(2)] = inst_8454);

(statearr_8472_8502[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8466 === (6))){
var state_8465__$1 = state_8465;
var statearr_8473_8503 = state_8465__$1;
(statearr_8473_8503[(2)] = null);

(statearr_8473_8503[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8466 === (3))){
var inst_8463 = (state_8465[(2)]);
var state_8465__$1 = state_8465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8465__$1,inst_8463);
} else {
if((state_val_8466 === (12))){
var inst_8451 = (state_8465[(8)]);
var inst_8451__$1 = (state_8465[(2)]);
var inst_8452 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_8451__$1);
var state_8465__$1 = (function (){var statearr_8474 = state_8465;
(statearr_8474[(8)] = inst_8451__$1);

return statearr_8474;
})();
if(cljs.core.truth_(inst_8452)){
var statearr_8475_8504 = state_8465__$1;
(statearr_8475_8504[(1)] = (13));

} else {
var statearr_8476_8505 = state_8465__$1;
(statearr_8476_8505[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8466 === (2))){
var inst_8428 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_8429 = (0);
var state_8465__$1 = (function (){var statearr_8477 = state_8465;
(statearr_8477[(9)] = inst_8428);

(statearr_8477[(7)] = inst_8429);

return statearr_8477;
})();
var statearr_8478_8506 = state_8465__$1;
(statearr_8478_8506[(2)] = null);

(statearr_8478_8506[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8466 === (11))){
var inst_8429 = (state_8465[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_8465,(10),Object,null,(9));
var inst_8438 = chs__$1.call(null,inst_8429);
var inst_8439 = done.call(null,inst_8429);
var inst_8440 = cljs.core.async.take_BANG_.call(null,inst_8438,inst_8439);
var state_8465__$1 = state_8465;
var statearr_8479_8507 = state_8465__$1;
(statearr_8479_8507[(2)] = inst_8440);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8465__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8466 === (9))){
var inst_8429 = (state_8465[(7)]);
var inst_8442 = (state_8465[(2)]);
var inst_8443 = (inst_8429 + (1));
var inst_8429__$1 = inst_8443;
var state_8465__$1 = (function (){var statearr_8480 = state_8465;
(statearr_8480[(10)] = inst_8442);

(statearr_8480[(7)] = inst_8429__$1);

return statearr_8480;
})();
var statearr_8481_8508 = state_8465__$1;
(statearr_8481_8508[(2)] = null);

(statearr_8481_8508[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8466 === (5))){
var inst_8449 = (state_8465[(2)]);
var state_8465__$1 = (function (){var statearr_8482 = state_8465;
(statearr_8482[(11)] = inst_8449);

return statearr_8482;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8465__$1,(12),dchan);
} else {
if((state_val_8466 === (14))){
var inst_8451 = (state_8465[(8)]);
var inst_8456 = cljs.core.apply.call(null,f,inst_8451);
var state_8465__$1 = state_8465;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8465__$1,(16),out,inst_8456);
} else {
if((state_val_8466 === (16))){
var inst_8458 = (state_8465[(2)]);
var state_8465__$1 = (function (){var statearr_8483 = state_8465;
(statearr_8483[(12)] = inst_8458);

return statearr_8483;
})();
var statearr_8484_8509 = state_8465__$1;
(statearr_8484_8509[(2)] = null);

(statearr_8484_8509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8466 === (10))){
var inst_8433 = (state_8465[(2)]);
var inst_8434 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_8465__$1 = (function (){var statearr_8485 = state_8465;
(statearr_8485[(13)] = inst_8433);

return statearr_8485;
})();
var statearr_8486_8510 = state_8465__$1;
(statearr_8486_8510[(2)] = inst_8434);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8465__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8466 === (8))){
var inst_8447 = (state_8465[(2)]);
var state_8465__$1 = state_8465;
var statearr_8487_8511 = state_8465__$1;
(statearr_8487_8511[(2)] = inst_8447);

(statearr_8487_8511[(1)] = (5));


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
});})(c__6674__auto___8496,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6612__auto__,c__6674__auto___8496,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__6613__auto__ = null;
var cljs$core$async$state_machine__6613__auto____0 = (function (){
var statearr_8491 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8491[(0)] = cljs$core$async$state_machine__6613__auto__);

(statearr_8491[(1)] = (1));

return statearr_8491;
});
var cljs$core$async$state_machine__6613__auto____1 = (function (state_8465){
while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_8465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6615__auto__;
}
break;
}
}catch (e8492){if((e8492 instanceof Object)){
var ex__6616__auto__ = e8492;
var statearr_8493_8512 = state_8465;
(statearr_8493_8512[(5)] = ex__6616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8513 = state_8465;
state_8465 = G__8513;
continue;
} else {
return ret_value__6614__auto__;
}
break;
}
});
cljs$core$async$state_machine__6613__auto__ = function(state_8465){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6613__auto____1.call(this,state_8465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6613__auto____0;
cljs$core$async$state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6613__auto____1;
return cljs$core$async$state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6674__auto___8496,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6676__auto__ = (function (){var statearr_8494 = f__6675__auto__.call(null);
(statearr_8494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6674__auto___8496);

return statearr_8494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6676__auto__);
});})(c__6674__auto___8496,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__8516 = arguments.length;
switch (G__8516) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6674__auto___8571 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6674__auto___8571,out){
return (function (){
var f__6675__auto__ = (function (){var switch__6612__auto__ = ((function (c__6674__auto___8571,out){
return (function (state_8546){
var state_val_8547 = (state_8546[(1)]);
if((state_val_8547 === (7))){
var inst_8526 = (state_8546[(7)]);
var inst_8525 = (state_8546[(8)]);
var inst_8525__$1 = (state_8546[(2)]);
var inst_8526__$1 = cljs.core.nth.call(null,inst_8525__$1,(0),null);
var inst_8527 = cljs.core.nth.call(null,inst_8525__$1,(1),null);
var inst_8528 = (inst_8526__$1 == null);
var state_8546__$1 = (function (){var statearr_8548 = state_8546;
(statearr_8548[(9)] = inst_8527);

(statearr_8548[(7)] = inst_8526__$1);

(statearr_8548[(8)] = inst_8525__$1);

return statearr_8548;
})();
if(cljs.core.truth_(inst_8528)){
var statearr_8549_8572 = state_8546__$1;
(statearr_8549_8572[(1)] = (8));

} else {
var statearr_8550_8573 = state_8546__$1;
(statearr_8550_8573[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8547 === (1))){
var inst_8517 = cljs.core.vec.call(null,chs);
var inst_8518 = inst_8517;
var state_8546__$1 = (function (){var statearr_8551 = state_8546;
(statearr_8551[(10)] = inst_8518);

return statearr_8551;
})();
var statearr_8552_8574 = state_8546__$1;
(statearr_8552_8574[(2)] = null);

(statearr_8552_8574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8547 === (4))){
var inst_8518 = (state_8546[(10)]);
var state_8546__$1 = state_8546;
return cljs.core.async.ioc_alts_BANG_.call(null,state_8546__$1,(7),inst_8518);
} else {
if((state_val_8547 === (6))){
var inst_8542 = (state_8546[(2)]);
var state_8546__$1 = state_8546;
var statearr_8553_8575 = state_8546__$1;
(statearr_8553_8575[(2)] = inst_8542);

(statearr_8553_8575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8547 === (3))){
var inst_8544 = (state_8546[(2)]);
var state_8546__$1 = state_8546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8546__$1,inst_8544);
} else {
if((state_val_8547 === (2))){
var inst_8518 = (state_8546[(10)]);
var inst_8520 = cljs.core.count.call(null,inst_8518);
var inst_8521 = (inst_8520 > (0));
var state_8546__$1 = state_8546;
if(cljs.core.truth_(inst_8521)){
var statearr_8555_8576 = state_8546__$1;
(statearr_8555_8576[(1)] = (4));

} else {
var statearr_8556_8577 = state_8546__$1;
(statearr_8556_8577[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8547 === (11))){
var inst_8518 = (state_8546[(10)]);
var inst_8535 = (state_8546[(2)]);
var tmp8554 = inst_8518;
var inst_8518__$1 = tmp8554;
var state_8546__$1 = (function (){var statearr_8557 = state_8546;
(statearr_8557[(10)] = inst_8518__$1);

(statearr_8557[(11)] = inst_8535);

return statearr_8557;
})();
var statearr_8558_8578 = state_8546__$1;
(statearr_8558_8578[(2)] = null);

(statearr_8558_8578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8547 === (9))){
var inst_8526 = (state_8546[(7)]);
var state_8546__$1 = state_8546;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8546__$1,(11),out,inst_8526);
} else {
if((state_val_8547 === (5))){
var inst_8540 = cljs.core.async.close_BANG_.call(null,out);
var state_8546__$1 = state_8546;
var statearr_8559_8579 = state_8546__$1;
(statearr_8559_8579[(2)] = inst_8540);

(statearr_8559_8579[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8547 === (10))){
var inst_8538 = (state_8546[(2)]);
var state_8546__$1 = state_8546;
var statearr_8560_8580 = state_8546__$1;
(statearr_8560_8580[(2)] = inst_8538);

(statearr_8560_8580[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8547 === (8))){
var inst_8527 = (state_8546[(9)]);
var inst_8518 = (state_8546[(10)]);
var inst_8526 = (state_8546[(7)]);
var inst_8525 = (state_8546[(8)]);
var inst_8530 = (function (){var cs = inst_8518;
var vec__8523 = inst_8525;
var v = inst_8526;
var c = inst_8527;
return ((function (cs,vec__8523,v,c,inst_8527,inst_8518,inst_8526,inst_8525,state_val_8547,c__6674__auto___8571,out){
return (function (p1__8514_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__8514_SHARP_);
});
;})(cs,vec__8523,v,c,inst_8527,inst_8518,inst_8526,inst_8525,state_val_8547,c__6674__auto___8571,out))
})();
var inst_8531 = cljs.core.filterv.call(null,inst_8530,inst_8518);
var inst_8518__$1 = inst_8531;
var state_8546__$1 = (function (){var statearr_8561 = state_8546;
(statearr_8561[(10)] = inst_8518__$1);

return statearr_8561;
})();
var statearr_8562_8581 = state_8546__$1;
(statearr_8562_8581[(2)] = null);

(statearr_8562_8581[(1)] = (2));


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
});})(c__6674__auto___8571,out))
;
return ((function (switch__6612__auto__,c__6674__auto___8571,out){
return (function() {
var cljs$core$async$state_machine__6613__auto__ = null;
var cljs$core$async$state_machine__6613__auto____0 = (function (){
var statearr_8566 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8566[(0)] = cljs$core$async$state_machine__6613__auto__);

(statearr_8566[(1)] = (1));

return statearr_8566;
});
var cljs$core$async$state_machine__6613__auto____1 = (function (state_8546){
while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_8546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6615__auto__;
}
break;
}
}catch (e8567){if((e8567 instanceof Object)){
var ex__6616__auto__ = e8567;
var statearr_8568_8582 = state_8546;
(statearr_8568_8582[(5)] = ex__6616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8583 = state_8546;
state_8546 = G__8583;
continue;
} else {
return ret_value__6614__auto__;
}
break;
}
});
cljs$core$async$state_machine__6613__auto__ = function(state_8546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6613__auto____1.call(this,state_8546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6613__auto____0;
cljs$core$async$state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6613__auto____1;
return cljs$core$async$state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6674__auto___8571,out))
})();
var state__6676__auto__ = (function (){var statearr_8569 = f__6675__auto__.call(null);
(statearr_8569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6674__auto___8571);

return statearr_8569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6676__auto__);
});})(c__6674__auto___8571,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__8585 = arguments.length;
switch (G__8585) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6674__auto___8633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6674__auto___8633,out){
return (function (){
var f__6675__auto__ = (function (){var switch__6612__auto__ = ((function (c__6674__auto___8633,out){
return (function (state_8609){
var state_val_8610 = (state_8609[(1)]);
if((state_val_8610 === (7))){
var inst_8591 = (state_8609[(7)]);
var inst_8591__$1 = (state_8609[(2)]);
var inst_8592 = (inst_8591__$1 == null);
var inst_8593 = cljs.core.not.call(null,inst_8592);
var state_8609__$1 = (function (){var statearr_8611 = state_8609;
(statearr_8611[(7)] = inst_8591__$1);

return statearr_8611;
})();
if(inst_8593){
var statearr_8612_8634 = state_8609__$1;
(statearr_8612_8634[(1)] = (8));

} else {
var statearr_8613_8635 = state_8609__$1;
(statearr_8613_8635[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8610 === (1))){
var inst_8586 = (0);
var state_8609__$1 = (function (){var statearr_8614 = state_8609;
(statearr_8614[(8)] = inst_8586);

return statearr_8614;
})();
var statearr_8615_8636 = state_8609__$1;
(statearr_8615_8636[(2)] = null);

(statearr_8615_8636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8610 === (4))){
var state_8609__$1 = state_8609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8609__$1,(7),ch);
} else {
if((state_val_8610 === (6))){
var inst_8604 = (state_8609[(2)]);
var state_8609__$1 = state_8609;
var statearr_8616_8637 = state_8609__$1;
(statearr_8616_8637[(2)] = inst_8604);

(statearr_8616_8637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8610 === (3))){
var inst_8606 = (state_8609[(2)]);
var inst_8607 = cljs.core.async.close_BANG_.call(null,out);
var state_8609__$1 = (function (){var statearr_8617 = state_8609;
(statearr_8617[(9)] = inst_8606);

return statearr_8617;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8609__$1,inst_8607);
} else {
if((state_val_8610 === (2))){
var inst_8586 = (state_8609[(8)]);
var inst_8588 = (inst_8586 < n);
var state_8609__$1 = state_8609;
if(cljs.core.truth_(inst_8588)){
var statearr_8618_8638 = state_8609__$1;
(statearr_8618_8638[(1)] = (4));

} else {
var statearr_8619_8639 = state_8609__$1;
(statearr_8619_8639[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8610 === (11))){
var inst_8586 = (state_8609[(8)]);
var inst_8596 = (state_8609[(2)]);
var inst_8597 = (inst_8586 + (1));
var inst_8586__$1 = inst_8597;
var state_8609__$1 = (function (){var statearr_8620 = state_8609;
(statearr_8620[(8)] = inst_8586__$1);

(statearr_8620[(10)] = inst_8596);

return statearr_8620;
})();
var statearr_8621_8640 = state_8609__$1;
(statearr_8621_8640[(2)] = null);

(statearr_8621_8640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8610 === (9))){
var state_8609__$1 = state_8609;
var statearr_8622_8641 = state_8609__$1;
(statearr_8622_8641[(2)] = null);

(statearr_8622_8641[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8610 === (5))){
var state_8609__$1 = state_8609;
var statearr_8623_8642 = state_8609__$1;
(statearr_8623_8642[(2)] = null);

(statearr_8623_8642[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8610 === (10))){
var inst_8601 = (state_8609[(2)]);
var state_8609__$1 = state_8609;
var statearr_8624_8643 = state_8609__$1;
(statearr_8624_8643[(2)] = inst_8601);

(statearr_8624_8643[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8610 === (8))){
var inst_8591 = (state_8609[(7)]);
var state_8609__$1 = state_8609;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8609__$1,(11),out,inst_8591);
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
});})(c__6674__auto___8633,out))
;
return ((function (switch__6612__auto__,c__6674__auto___8633,out){
return (function() {
var cljs$core$async$state_machine__6613__auto__ = null;
var cljs$core$async$state_machine__6613__auto____0 = (function (){
var statearr_8628 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8628[(0)] = cljs$core$async$state_machine__6613__auto__);

(statearr_8628[(1)] = (1));

return statearr_8628;
});
var cljs$core$async$state_machine__6613__auto____1 = (function (state_8609){
while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_8609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6615__auto__;
}
break;
}
}catch (e8629){if((e8629 instanceof Object)){
var ex__6616__auto__ = e8629;
var statearr_8630_8644 = state_8609;
(statearr_8630_8644[(5)] = ex__6616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8645 = state_8609;
state_8609 = G__8645;
continue;
} else {
return ret_value__6614__auto__;
}
break;
}
});
cljs$core$async$state_machine__6613__auto__ = function(state_8609){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6613__auto____1.call(this,state_8609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6613__auto____0;
cljs$core$async$state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6613__auto____1;
return cljs$core$async$state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6674__auto___8633,out))
})();
var state__6676__auto__ = (function (){var statearr_8631 = f__6675__auto__.call(null);
(statearr_8631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6674__auto___8633);

return statearr_8631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6676__auto__);
});})(c__6674__auto___8633,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t8653 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t8653 = (function (map_LT_,f,ch,meta8654){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta8654 = meta8654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t8653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8655,meta8654__$1){
var self__ = this;
var _8655__$1 = this;
return (new cljs.core.async.t8653(self__.map_LT_,self__.f,self__.ch,meta8654__$1));
});

cljs.core.async.t8653.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8655){
var self__ = this;
var _8655__$1 = this;
return self__.meta8654;
});

cljs.core.async.t8653.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t8653.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t8653.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t8653.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t8653.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t8656 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t8656 = (function (map_LT_,f,ch,meta8654,_,fn1,meta8657){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta8654 = meta8654;
this._ = _;
this.fn1 = fn1;
this.meta8657 = meta8657;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t8656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_8658,meta8657__$1){
var self__ = this;
var _8658__$1 = this;
return (new cljs.core.async.t8656(self__.map_LT_,self__.f,self__.ch,self__.meta8654,self__._,self__.fn1,meta8657__$1));
});})(___$1))
;

cljs.core.async.t8656.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_8658){
var self__ = this;
var _8658__$1 = this;
return self__.meta8657;
});})(___$1))
;

cljs.core.async.t8656.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t8656.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t8656.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__8646_SHARP_){
return f1.call(null,(((p1__8646_SHARP_ == null))?null:self__.f.call(null,p1__8646_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t8656.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta8654","meta8654",-95031072,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta8657","meta8657",-1814460431,null)], null);
});})(___$1))
;

cljs.core.async.t8656.cljs$lang$type = true;

cljs.core.async.t8656.cljs$lang$ctorStr = "cljs.core.async/t8656";

cljs.core.async.t8656.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4901__auto__,writer__4902__auto__,opt__4903__auto__){
return cljs.core._write.call(null,writer__4902__auto__,"cljs.core.async/t8656");
});})(___$1))
;

cljs.core.async.__GT_t8656 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t8656(map_LT___$1,f__$1,ch__$1,meta8654__$1,___$2,fn1__$1,meta8657){
return (new cljs.core.async.t8656(map_LT___$1,f__$1,ch__$1,meta8654__$1,___$2,fn1__$1,meta8657));
});})(___$1))
;

}

return (new cljs.core.async.t8656(self__.map_LT_,self__.f,self__.ch,self__.meta8654,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4310__auto__ = ret;
if(cljs.core.truth_(and__4310__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4310__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t8653.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t8653.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t8653.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta8654","meta8654",-95031072,null)], null);
});

cljs.core.async.t8653.cljs$lang$type = true;

cljs.core.async.t8653.cljs$lang$ctorStr = "cljs.core.async/t8653";

cljs.core.async.t8653.cljs$lang$ctorPrWriter = (function (this__4901__auto__,writer__4902__auto__,opt__4903__auto__){
return cljs.core._write.call(null,writer__4902__auto__,"cljs.core.async/t8653");
});

cljs.core.async.__GT_t8653 = (function cljs$core$async$map_LT__$___GT_t8653(map_LT___$1,f__$1,ch__$1,meta8654){
return (new cljs.core.async.t8653(map_LT___$1,f__$1,ch__$1,meta8654));
});

}

return (new cljs.core.async.t8653(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t8662 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t8662 = (function (map_GT_,f,ch,meta8663){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta8663 = meta8663;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t8662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8664,meta8663__$1){
var self__ = this;
var _8664__$1 = this;
return (new cljs.core.async.t8662(self__.map_GT_,self__.f,self__.ch,meta8663__$1));
});

cljs.core.async.t8662.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8664){
var self__ = this;
var _8664__$1 = this;
return self__.meta8663;
});

cljs.core.async.t8662.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t8662.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t8662.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t8662.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t8662.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t8662.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t8662.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta8663","meta8663",-1414235375,null)], null);
});

cljs.core.async.t8662.cljs$lang$type = true;

cljs.core.async.t8662.cljs$lang$ctorStr = "cljs.core.async/t8662";

cljs.core.async.t8662.cljs$lang$ctorPrWriter = (function (this__4901__auto__,writer__4902__auto__,opt__4903__auto__){
return cljs.core._write.call(null,writer__4902__auto__,"cljs.core.async/t8662");
});

cljs.core.async.__GT_t8662 = (function cljs$core$async$map_GT__$___GT_t8662(map_GT___$1,f__$1,ch__$1,meta8663){
return (new cljs.core.async.t8662(map_GT___$1,f__$1,ch__$1,meta8663));
});

}

return (new cljs.core.async.t8662(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t8668 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t8668 = (function (filter_GT_,p,ch,meta8669){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta8669 = meta8669;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t8668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8670,meta8669__$1){
var self__ = this;
var _8670__$1 = this;
return (new cljs.core.async.t8668(self__.filter_GT_,self__.p,self__.ch,meta8669__$1));
});

cljs.core.async.t8668.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8670){
var self__ = this;
var _8670__$1 = this;
return self__.meta8669;
});

cljs.core.async.t8668.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t8668.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t8668.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t8668.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t8668.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t8668.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t8668.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t8668.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta8669","meta8669",-523425753,null)], null);
});

cljs.core.async.t8668.cljs$lang$type = true;

cljs.core.async.t8668.cljs$lang$ctorStr = "cljs.core.async/t8668";

cljs.core.async.t8668.cljs$lang$ctorPrWriter = (function (this__4901__auto__,writer__4902__auto__,opt__4903__auto__){
return cljs.core._write.call(null,writer__4902__auto__,"cljs.core.async/t8668");
});

cljs.core.async.__GT_t8668 = (function cljs$core$async$filter_GT__$___GT_t8668(filter_GT___$1,p__$1,ch__$1,meta8669){
return (new cljs.core.async.t8668(filter_GT___$1,p__$1,ch__$1,meta8669));
});

}

return (new cljs.core.async.t8668(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__8672 = arguments.length;
switch (G__8672) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6674__auto___8715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6674__auto___8715,out){
return (function (){
var f__6675__auto__ = (function (){var switch__6612__auto__ = ((function (c__6674__auto___8715,out){
return (function (state_8693){
var state_val_8694 = (state_8693[(1)]);
if((state_val_8694 === (7))){
var inst_8689 = (state_8693[(2)]);
var state_8693__$1 = state_8693;
var statearr_8695_8716 = state_8693__$1;
(statearr_8695_8716[(2)] = inst_8689);

(statearr_8695_8716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8694 === (1))){
var state_8693__$1 = state_8693;
var statearr_8696_8717 = state_8693__$1;
(statearr_8696_8717[(2)] = null);

(statearr_8696_8717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8694 === (4))){
var inst_8675 = (state_8693[(7)]);
var inst_8675__$1 = (state_8693[(2)]);
var inst_8676 = (inst_8675__$1 == null);
var state_8693__$1 = (function (){var statearr_8697 = state_8693;
(statearr_8697[(7)] = inst_8675__$1);

return statearr_8697;
})();
if(cljs.core.truth_(inst_8676)){
var statearr_8698_8718 = state_8693__$1;
(statearr_8698_8718[(1)] = (5));

} else {
var statearr_8699_8719 = state_8693__$1;
(statearr_8699_8719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8694 === (6))){
var inst_8675 = (state_8693[(7)]);
var inst_8680 = p.call(null,inst_8675);
var state_8693__$1 = state_8693;
if(cljs.core.truth_(inst_8680)){
var statearr_8700_8720 = state_8693__$1;
(statearr_8700_8720[(1)] = (8));

} else {
var statearr_8701_8721 = state_8693__$1;
(statearr_8701_8721[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8694 === (3))){
var inst_8691 = (state_8693[(2)]);
var state_8693__$1 = state_8693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8693__$1,inst_8691);
} else {
if((state_val_8694 === (2))){
var state_8693__$1 = state_8693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8693__$1,(4),ch);
} else {
if((state_val_8694 === (11))){
var inst_8683 = (state_8693[(2)]);
var state_8693__$1 = state_8693;
var statearr_8702_8722 = state_8693__$1;
(statearr_8702_8722[(2)] = inst_8683);

(statearr_8702_8722[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8694 === (9))){
var state_8693__$1 = state_8693;
var statearr_8703_8723 = state_8693__$1;
(statearr_8703_8723[(2)] = null);

(statearr_8703_8723[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8694 === (5))){
var inst_8678 = cljs.core.async.close_BANG_.call(null,out);
var state_8693__$1 = state_8693;
var statearr_8704_8724 = state_8693__$1;
(statearr_8704_8724[(2)] = inst_8678);

(statearr_8704_8724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8694 === (10))){
var inst_8686 = (state_8693[(2)]);
var state_8693__$1 = (function (){var statearr_8705 = state_8693;
(statearr_8705[(8)] = inst_8686);

return statearr_8705;
})();
var statearr_8706_8725 = state_8693__$1;
(statearr_8706_8725[(2)] = null);

(statearr_8706_8725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8694 === (8))){
var inst_8675 = (state_8693[(7)]);
var state_8693__$1 = state_8693;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8693__$1,(11),out,inst_8675);
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
});})(c__6674__auto___8715,out))
;
return ((function (switch__6612__auto__,c__6674__auto___8715,out){
return (function() {
var cljs$core$async$state_machine__6613__auto__ = null;
var cljs$core$async$state_machine__6613__auto____0 = (function (){
var statearr_8710 = [null,null,null,null,null,null,null,null,null];
(statearr_8710[(0)] = cljs$core$async$state_machine__6613__auto__);

(statearr_8710[(1)] = (1));

return statearr_8710;
});
var cljs$core$async$state_machine__6613__auto____1 = (function (state_8693){
while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_8693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6615__auto__;
}
break;
}
}catch (e8711){if((e8711 instanceof Object)){
var ex__6616__auto__ = e8711;
var statearr_8712_8726 = state_8693;
(statearr_8712_8726[(5)] = ex__6616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8727 = state_8693;
state_8693 = G__8727;
continue;
} else {
return ret_value__6614__auto__;
}
break;
}
});
cljs$core$async$state_machine__6613__auto__ = function(state_8693){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6613__auto____1.call(this,state_8693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6613__auto____0;
cljs$core$async$state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6613__auto____1;
return cljs$core$async$state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6674__auto___8715,out))
})();
var state__6676__auto__ = (function (){var statearr_8713 = f__6675__auto__.call(null);
(statearr_8713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6674__auto___8715);

return statearr_8713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6676__auto__);
});})(c__6674__auto___8715,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__8729 = arguments.length;
switch (G__8729) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__6674__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6674__auto__){
return (function (){
var f__6675__auto__ = (function (){var switch__6612__auto__ = ((function (c__6674__auto__){
return (function (state_8896){
var state_val_8897 = (state_8896[(1)]);
if((state_val_8897 === (7))){
var inst_8892 = (state_8896[(2)]);
var state_8896__$1 = state_8896;
var statearr_8898_8939 = state_8896__$1;
(statearr_8898_8939[(2)] = inst_8892);

(statearr_8898_8939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8897 === (20))){
var inst_8862 = (state_8896[(7)]);
var inst_8873 = (state_8896[(2)]);
var inst_8874 = cljs.core.next.call(null,inst_8862);
var inst_8848 = inst_8874;
var inst_8849 = null;
var inst_8850 = (0);
var inst_8851 = (0);
var state_8896__$1 = (function (){var statearr_8899 = state_8896;
(statearr_8899[(8)] = inst_8849);

(statearr_8899[(9)] = inst_8851);

(statearr_8899[(10)] = inst_8848);

(statearr_8899[(11)] = inst_8873);

(statearr_8899[(12)] = inst_8850);

return statearr_8899;
})();
var statearr_8900_8940 = state_8896__$1;
(statearr_8900_8940[(2)] = null);

(statearr_8900_8940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8897 === (1))){
var state_8896__$1 = state_8896;
var statearr_8901_8941 = state_8896__$1;
(statearr_8901_8941[(2)] = null);

(statearr_8901_8941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8897 === (4))){
var inst_8837 = (state_8896[(13)]);
var inst_8837__$1 = (state_8896[(2)]);
var inst_8838 = (inst_8837__$1 == null);
var state_8896__$1 = (function (){var statearr_8902 = state_8896;
(statearr_8902[(13)] = inst_8837__$1);

return statearr_8902;
})();
if(cljs.core.truth_(inst_8838)){
var statearr_8903_8942 = state_8896__$1;
(statearr_8903_8942[(1)] = (5));

} else {
var statearr_8904_8943 = state_8896__$1;
(statearr_8904_8943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8897 === (15))){
var state_8896__$1 = state_8896;
var statearr_8908_8944 = state_8896__$1;
(statearr_8908_8944[(2)] = null);

(statearr_8908_8944[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8897 === (21))){
var state_8896__$1 = state_8896;
var statearr_8909_8945 = state_8896__$1;
(statearr_8909_8945[(2)] = null);

(statearr_8909_8945[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8897 === (13))){
var inst_8849 = (state_8896[(8)]);
var inst_8851 = (state_8896[(9)]);
var inst_8848 = (state_8896[(10)]);
var inst_8850 = (state_8896[(12)]);
var inst_8858 = (state_8896[(2)]);
var inst_8859 = (inst_8851 + (1));
var tmp8905 = inst_8849;
var tmp8906 = inst_8848;
var tmp8907 = inst_8850;
var inst_8848__$1 = tmp8906;
var inst_8849__$1 = tmp8905;
var inst_8850__$1 = tmp8907;
var inst_8851__$1 = inst_8859;
var state_8896__$1 = (function (){var statearr_8910 = state_8896;
(statearr_8910[(8)] = inst_8849__$1);

(statearr_8910[(9)] = inst_8851__$1);

(statearr_8910[(10)] = inst_8848__$1);

(statearr_8910[(14)] = inst_8858);

(statearr_8910[(12)] = inst_8850__$1);

return statearr_8910;
})();
var statearr_8911_8946 = state_8896__$1;
(statearr_8911_8946[(2)] = null);

(statearr_8911_8946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8897 === (22))){
var state_8896__$1 = state_8896;
var statearr_8912_8947 = state_8896__$1;
(statearr_8912_8947[(2)] = null);

(statearr_8912_8947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8897 === (6))){
var inst_8837 = (state_8896[(13)]);
var inst_8846 = f.call(null,inst_8837);
var inst_8847 = cljs.core.seq.call(null,inst_8846);
var inst_8848 = inst_8847;
var inst_8849 = null;
var inst_8850 = (0);
var inst_8851 = (0);
var state_8896__$1 = (function (){var statearr_8913 = state_8896;
(statearr_8913[(8)] = inst_8849);

(statearr_8913[(9)] = inst_8851);

(statearr_8913[(10)] = inst_8848);

(statearr_8913[(12)] = inst_8850);

return statearr_8913;
})();
var statearr_8914_8948 = state_8896__$1;
(statearr_8914_8948[(2)] = null);

(statearr_8914_8948[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8897 === (17))){
var inst_8862 = (state_8896[(7)]);
var inst_8866 = cljs.core.chunk_first.call(null,inst_8862);
var inst_8867 = cljs.core.chunk_rest.call(null,inst_8862);
var inst_8868 = cljs.core.count.call(null,inst_8866);
var inst_8848 = inst_8867;
var inst_8849 = inst_8866;
var inst_8850 = inst_8868;
var inst_8851 = (0);
var state_8896__$1 = (function (){var statearr_8915 = state_8896;
(statearr_8915[(8)] = inst_8849);

(statearr_8915[(9)] = inst_8851);

(statearr_8915[(10)] = inst_8848);

(statearr_8915[(12)] = inst_8850);

return statearr_8915;
})();
var statearr_8916_8949 = state_8896__$1;
(statearr_8916_8949[(2)] = null);

(statearr_8916_8949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8897 === (3))){
var inst_8894 = (state_8896[(2)]);
var state_8896__$1 = state_8896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8896__$1,inst_8894);
} else {
if((state_val_8897 === (12))){
var inst_8882 = (state_8896[(2)]);
var state_8896__$1 = state_8896;
var statearr_8917_8950 = state_8896__$1;
(statearr_8917_8950[(2)] = inst_8882);

(statearr_8917_8950[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8897 === (2))){
var state_8896__$1 = state_8896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8896__$1,(4),in$);
} else {
if((state_val_8897 === (23))){
var inst_8890 = (state_8896[(2)]);
var state_8896__$1 = state_8896;
var statearr_8918_8951 = state_8896__$1;
(statearr_8918_8951[(2)] = inst_8890);

(statearr_8918_8951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8897 === (19))){
var inst_8877 = (state_8896[(2)]);
var state_8896__$1 = state_8896;
var statearr_8919_8952 = state_8896__$1;
(statearr_8919_8952[(2)] = inst_8877);

(statearr_8919_8952[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8897 === (11))){
var inst_8862 = (state_8896[(7)]);
var inst_8848 = (state_8896[(10)]);
var inst_8862__$1 = cljs.core.seq.call(null,inst_8848);
var state_8896__$1 = (function (){var statearr_8920 = state_8896;
(statearr_8920[(7)] = inst_8862__$1);

return statearr_8920;
})();
if(inst_8862__$1){
var statearr_8921_8953 = state_8896__$1;
(statearr_8921_8953[(1)] = (14));

} else {
var statearr_8922_8954 = state_8896__$1;
(statearr_8922_8954[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8897 === (9))){
var inst_8884 = (state_8896[(2)]);
var inst_8885 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_8896__$1 = (function (){var statearr_8923 = state_8896;
(statearr_8923[(15)] = inst_8884);

return statearr_8923;
})();
if(cljs.core.truth_(inst_8885)){
var statearr_8924_8955 = state_8896__$1;
(statearr_8924_8955[(1)] = (21));

} else {
var statearr_8925_8956 = state_8896__$1;
(statearr_8925_8956[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8897 === (5))){
var inst_8840 = cljs.core.async.close_BANG_.call(null,out);
var state_8896__$1 = state_8896;
var statearr_8926_8957 = state_8896__$1;
(statearr_8926_8957[(2)] = inst_8840);

(statearr_8926_8957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8897 === (14))){
var inst_8862 = (state_8896[(7)]);
var inst_8864 = cljs.core.chunked_seq_QMARK_.call(null,inst_8862);
var state_8896__$1 = state_8896;
if(inst_8864){
var statearr_8927_8958 = state_8896__$1;
(statearr_8927_8958[(1)] = (17));

} else {
var statearr_8928_8959 = state_8896__$1;
(statearr_8928_8959[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8897 === (16))){
var inst_8880 = (state_8896[(2)]);
var state_8896__$1 = state_8896;
var statearr_8929_8960 = state_8896__$1;
(statearr_8929_8960[(2)] = inst_8880);

(statearr_8929_8960[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8897 === (10))){
var inst_8849 = (state_8896[(8)]);
var inst_8851 = (state_8896[(9)]);
var inst_8856 = cljs.core._nth.call(null,inst_8849,inst_8851);
var state_8896__$1 = state_8896;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8896__$1,(13),out,inst_8856);
} else {
if((state_val_8897 === (18))){
var inst_8862 = (state_8896[(7)]);
var inst_8871 = cljs.core.first.call(null,inst_8862);
var state_8896__$1 = state_8896;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8896__$1,(20),out,inst_8871);
} else {
if((state_val_8897 === (8))){
var inst_8851 = (state_8896[(9)]);
var inst_8850 = (state_8896[(12)]);
var inst_8853 = (inst_8851 < inst_8850);
var inst_8854 = inst_8853;
var state_8896__$1 = state_8896;
if(cljs.core.truth_(inst_8854)){
var statearr_8930_8961 = state_8896__$1;
(statearr_8930_8961[(1)] = (10));

} else {
var statearr_8931_8962 = state_8896__$1;
(statearr_8931_8962[(1)] = (11));

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
});})(c__6674__auto__))
;
return ((function (switch__6612__auto__,c__6674__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__6613__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__6613__auto____0 = (function (){
var statearr_8935 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8935[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6613__auto__);

(statearr_8935[(1)] = (1));

return statearr_8935;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6613__auto____1 = (function (state_8896){
while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_8896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6615__auto__;
}
break;
}
}catch (e8936){if((e8936 instanceof Object)){
var ex__6616__auto__ = e8936;
var statearr_8937_8963 = state_8896;
(statearr_8937_8963[(5)] = ex__6616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8964 = state_8896;
state_8896 = G__8964;
continue;
} else {
return ret_value__6614__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6613__auto__ = function(state_8896){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6613__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6613__auto____1.call(this,state_8896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6613__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6613__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6674__auto__))
})();
var state__6676__auto__ = (function (){var statearr_8938 = f__6675__auto__.call(null);
(statearr_8938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6674__auto__);

return statearr_8938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6676__auto__);
});})(c__6674__auto__))
);

return c__6674__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__8966 = arguments.length;
switch (G__8966) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__8969 = arguments.length;
switch (G__8969) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__8972 = arguments.length;
switch (G__8972) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6674__auto___9022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6674__auto___9022,out){
return (function (){
var f__6675__auto__ = (function (){var switch__6612__auto__ = ((function (c__6674__auto___9022,out){
return (function (state_8996){
var state_val_8997 = (state_8996[(1)]);
if((state_val_8997 === (7))){
var inst_8991 = (state_8996[(2)]);
var state_8996__$1 = state_8996;
var statearr_8998_9023 = state_8996__$1;
(statearr_8998_9023[(2)] = inst_8991);

(statearr_8998_9023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8997 === (1))){
var inst_8973 = null;
var state_8996__$1 = (function (){var statearr_8999 = state_8996;
(statearr_8999[(7)] = inst_8973);

return statearr_8999;
})();
var statearr_9000_9024 = state_8996__$1;
(statearr_9000_9024[(2)] = null);

(statearr_9000_9024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8997 === (4))){
var inst_8976 = (state_8996[(8)]);
var inst_8976__$1 = (state_8996[(2)]);
var inst_8977 = (inst_8976__$1 == null);
var inst_8978 = cljs.core.not.call(null,inst_8977);
var state_8996__$1 = (function (){var statearr_9001 = state_8996;
(statearr_9001[(8)] = inst_8976__$1);

return statearr_9001;
})();
if(inst_8978){
var statearr_9002_9025 = state_8996__$1;
(statearr_9002_9025[(1)] = (5));

} else {
var statearr_9003_9026 = state_8996__$1;
(statearr_9003_9026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8997 === (6))){
var state_8996__$1 = state_8996;
var statearr_9004_9027 = state_8996__$1;
(statearr_9004_9027[(2)] = null);

(statearr_9004_9027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8997 === (3))){
var inst_8993 = (state_8996[(2)]);
var inst_8994 = cljs.core.async.close_BANG_.call(null,out);
var state_8996__$1 = (function (){var statearr_9005 = state_8996;
(statearr_9005[(9)] = inst_8993);

return statearr_9005;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8996__$1,inst_8994);
} else {
if((state_val_8997 === (2))){
var state_8996__$1 = state_8996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8996__$1,(4),ch);
} else {
if((state_val_8997 === (11))){
var inst_8976 = (state_8996[(8)]);
var inst_8985 = (state_8996[(2)]);
var inst_8973 = inst_8976;
var state_8996__$1 = (function (){var statearr_9006 = state_8996;
(statearr_9006[(7)] = inst_8973);

(statearr_9006[(10)] = inst_8985);

return statearr_9006;
})();
var statearr_9007_9028 = state_8996__$1;
(statearr_9007_9028[(2)] = null);

(statearr_9007_9028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8997 === (9))){
var inst_8976 = (state_8996[(8)]);
var state_8996__$1 = state_8996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8996__$1,(11),out,inst_8976);
} else {
if((state_val_8997 === (5))){
var inst_8973 = (state_8996[(7)]);
var inst_8976 = (state_8996[(8)]);
var inst_8980 = cljs.core._EQ_.call(null,inst_8976,inst_8973);
var state_8996__$1 = state_8996;
if(inst_8980){
var statearr_9009_9029 = state_8996__$1;
(statearr_9009_9029[(1)] = (8));

} else {
var statearr_9010_9030 = state_8996__$1;
(statearr_9010_9030[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8997 === (10))){
var inst_8988 = (state_8996[(2)]);
var state_8996__$1 = state_8996;
var statearr_9011_9031 = state_8996__$1;
(statearr_9011_9031[(2)] = inst_8988);

(statearr_9011_9031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8997 === (8))){
var inst_8973 = (state_8996[(7)]);
var tmp9008 = inst_8973;
var inst_8973__$1 = tmp9008;
var state_8996__$1 = (function (){var statearr_9012 = state_8996;
(statearr_9012[(7)] = inst_8973__$1);

return statearr_9012;
})();
var statearr_9013_9032 = state_8996__$1;
(statearr_9013_9032[(2)] = null);

(statearr_9013_9032[(1)] = (2));


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
});})(c__6674__auto___9022,out))
;
return ((function (switch__6612__auto__,c__6674__auto___9022,out){
return (function() {
var cljs$core$async$state_machine__6613__auto__ = null;
var cljs$core$async$state_machine__6613__auto____0 = (function (){
var statearr_9017 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9017[(0)] = cljs$core$async$state_machine__6613__auto__);

(statearr_9017[(1)] = (1));

return statearr_9017;
});
var cljs$core$async$state_machine__6613__auto____1 = (function (state_8996){
while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_8996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6615__auto__;
}
break;
}
}catch (e9018){if((e9018 instanceof Object)){
var ex__6616__auto__ = e9018;
var statearr_9019_9033 = state_8996;
(statearr_9019_9033[(5)] = ex__6616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9034 = state_8996;
state_8996 = G__9034;
continue;
} else {
return ret_value__6614__auto__;
}
break;
}
});
cljs$core$async$state_machine__6613__auto__ = function(state_8996){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6613__auto____1.call(this,state_8996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6613__auto____0;
cljs$core$async$state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6613__auto____1;
return cljs$core$async$state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6674__auto___9022,out))
})();
var state__6676__auto__ = (function (){var statearr_9020 = f__6675__auto__.call(null);
(statearr_9020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6674__auto___9022);

return statearr_9020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6676__auto__);
});})(c__6674__auto___9022,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__9036 = arguments.length;
switch (G__9036) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6674__auto___9105 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6674__auto___9105,out){
return (function (){
var f__6675__auto__ = (function (){var switch__6612__auto__ = ((function (c__6674__auto___9105,out){
return (function (state_9074){
var state_val_9075 = (state_9074[(1)]);
if((state_val_9075 === (7))){
var inst_9070 = (state_9074[(2)]);
var state_9074__$1 = state_9074;
var statearr_9076_9106 = state_9074__$1;
(statearr_9076_9106[(2)] = inst_9070);

(statearr_9076_9106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9075 === (1))){
var inst_9037 = (new Array(n));
var inst_9038 = inst_9037;
var inst_9039 = (0);
var state_9074__$1 = (function (){var statearr_9077 = state_9074;
(statearr_9077[(7)] = inst_9038);

(statearr_9077[(8)] = inst_9039);

return statearr_9077;
})();
var statearr_9078_9107 = state_9074__$1;
(statearr_9078_9107[(2)] = null);

(statearr_9078_9107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9075 === (4))){
var inst_9042 = (state_9074[(9)]);
var inst_9042__$1 = (state_9074[(2)]);
var inst_9043 = (inst_9042__$1 == null);
var inst_9044 = cljs.core.not.call(null,inst_9043);
var state_9074__$1 = (function (){var statearr_9079 = state_9074;
(statearr_9079[(9)] = inst_9042__$1);

return statearr_9079;
})();
if(inst_9044){
var statearr_9080_9108 = state_9074__$1;
(statearr_9080_9108[(1)] = (5));

} else {
var statearr_9081_9109 = state_9074__$1;
(statearr_9081_9109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9075 === (15))){
var inst_9064 = (state_9074[(2)]);
var state_9074__$1 = state_9074;
var statearr_9082_9110 = state_9074__$1;
(statearr_9082_9110[(2)] = inst_9064);

(statearr_9082_9110[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9075 === (13))){
var state_9074__$1 = state_9074;
var statearr_9083_9111 = state_9074__$1;
(statearr_9083_9111[(2)] = null);

(statearr_9083_9111[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9075 === (6))){
var inst_9039 = (state_9074[(8)]);
var inst_9060 = (inst_9039 > (0));
var state_9074__$1 = state_9074;
if(cljs.core.truth_(inst_9060)){
var statearr_9084_9112 = state_9074__$1;
(statearr_9084_9112[(1)] = (12));

} else {
var statearr_9085_9113 = state_9074__$1;
(statearr_9085_9113[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9075 === (3))){
var inst_9072 = (state_9074[(2)]);
var state_9074__$1 = state_9074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9074__$1,inst_9072);
} else {
if((state_val_9075 === (12))){
var inst_9038 = (state_9074[(7)]);
var inst_9062 = cljs.core.vec.call(null,inst_9038);
var state_9074__$1 = state_9074;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9074__$1,(15),out,inst_9062);
} else {
if((state_val_9075 === (2))){
var state_9074__$1 = state_9074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9074__$1,(4),ch);
} else {
if((state_val_9075 === (11))){
var inst_9054 = (state_9074[(2)]);
var inst_9055 = (new Array(n));
var inst_9038 = inst_9055;
var inst_9039 = (0);
var state_9074__$1 = (function (){var statearr_9086 = state_9074;
(statearr_9086[(7)] = inst_9038);

(statearr_9086[(8)] = inst_9039);

(statearr_9086[(10)] = inst_9054);

return statearr_9086;
})();
var statearr_9087_9114 = state_9074__$1;
(statearr_9087_9114[(2)] = null);

(statearr_9087_9114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9075 === (9))){
var inst_9038 = (state_9074[(7)]);
var inst_9052 = cljs.core.vec.call(null,inst_9038);
var state_9074__$1 = state_9074;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9074__$1,(11),out,inst_9052);
} else {
if((state_val_9075 === (5))){
var inst_9047 = (state_9074[(11)]);
var inst_9038 = (state_9074[(7)]);
var inst_9042 = (state_9074[(9)]);
var inst_9039 = (state_9074[(8)]);
var inst_9046 = (inst_9038[inst_9039] = inst_9042);
var inst_9047__$1 = (inst_9039 + (1));
var inst_9048 = (inst_9047__$1 < n);
var state_9074__$1 = (function (){var statearr_9088 = state_9074;
(statearr_9088[(11)] = inst_9047__$1);

(statearr_9088[(12)] = inst_9046);

return statearr_9088;
})();
if(cljs.core.truth_(inst_9048)){
var statearr_9089_9115 = state_9074__$1;
(statearr_9089_9115[(1)] = (8));

} else {
var statearr_9090_9116 = state_9074__$1;
(statearr_9090_9116[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9075 === (14))){
var inst_9067 = (state_9074[(2)]);
var inst_9068 = cljs.core.async.close_BANG_.call(null,out);
var state_9074__$1 = (function (){var statearr_9092 = state_9074;
(statearr_9092[(13)] = inst_9067);

return statearr_9092;
})();
var statearr_9093_9117 = state_9074__$1;
(statearr_9093_9117[(2)] = inst_9068);

(statearr_9093_9117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9075 === (10))){
var inst_9058 = (state_9074[(2)]);
var state_9074__$1 = state_9074;
var statearr_9094_9118 = state_9074__$1;
(statearr_9094_9118[(2)] = inst_9058);

(statearr_9094_9118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9075 === (8))){
var inst_9047 = (state_9074[(11)]);
var inst_9038 = (state_9074[(7)]);
var tmp9091 = inst_9038;
var inst_9038__$1 = tmp9091;
var inst_9039 = inst_9047;
var state_9074__$1 = (function (){var statearr_9095 = state_9074;
(statearr_9095[(7)] = inst_9038__$1);

(statearr_9095[(8)] = inst_9039);

return statearr_9095;
})();
var statearr_9096_9119 = state_9074__$1;
(statearr_9096_9119[(2)] = null);

(statearr_9096_9119[(1)] = (2));


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
});})(c__6674__auto___9105,out))
;
return ((function (switch__6612__auto__,c__6674__auto___9105,out){
return (function() {
var cljs$core$async$state_machine__6613__auto__ = null;
var cljs$core$async$state_machine__6613__auto____0 = (function (){
var statearr_9100 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9100[(0)] = cljs$core$async$state_machine__6613__auto__);

(statearr_9100[(1)] = (1));

return statearr_9100;
});
var cljs$core$async$state_machine__6613__auto____1 = (function (state_9074){
while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_9074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6615__auto__;
}
break;
}
}catch (e9101){if((e9101 instanceof Object)){
var ex__6616__auto__ = e9101;
var statearr_9102_9120 = state_9074;
(statearr_9102_9120[(5)] = ex__6616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9121 = state_9074;
state_9074 = G__9121;
continue;
} else {
return ret_value__6614__auto__;
}
break;
}
});
cljs$core$async$state_machine__6613__auto__ = function(state_9074){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6613__auto____1.call(this,state_9074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6613__auto____0;
cljs$core$async$state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6613__auto____1;
return cljs$core$async$state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6674__auto___9105,out))
})();
var state__6676__auto__ = (function (){var statearr_9103 = f__6675__auto__.call(null);
(statearr_9103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6674__auto___9105);

return statearr_9103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6676__auto__);
});})(c__6674__auto___9105,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__9123 = arguments.length;
switch (G__9123) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6674__auto___9196 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6674__auto___9196,out){
return (function (){
var f__6675__auto__ = (function (){var switch__6612__auto__ = ((function (c__6674__auto___9196,out){
return (function (state_9165){
var state_val_9166 = (state_9165[(1)]);
if((state_val_9166 === (7))){
var inst_9161 = (state_9165[(2)]);
var state_9165__$1 = state_9165;
var statearr_9167_9197 = state_9165__$1;
(statearr_9167_9197[(2)] = inst_9161);

(statearr_9167_9197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9166 === (1))){
var inst_9124 = [];
var inst_9125 = inst_9124;
var inst_9126 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_9165__$1 = (function (){var statearr_9168 = state_9165;
(statearr_9168[(7)] = inst_9125);

(statearr_9168[(8)] = inst_9126);

return statearr_9168;
})();
var statearr_9169_9198 = state_9165__$1;
(statearr_9169_9198[(2)] = null);

(statearr_9169_9198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9166 === (4))){
var inst_9129 = (state_9165[(9)]);
var inst_9129__$1 = (state_9165[(2)]);
var inst_9130 = (inst_9129__$1 == null);
var inst_9131 = cljs.core.not.call(null,inst_9130);
var state_9165__$1 = (function (){var statearr_9170 = state_9165;
(statearr_9170[(9)] = inst_9129__$1);

return statearr_9170;
})();
if(inst_9131){
var statearr_9171_9199 = state_9165__$1;
(statearr_9171_9199[(1)] = (5));

} else {
var statearr_9172_9200 = state_9165__$1;
(statearr_9172_9200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9166 === (15))){
var inst_9155 = (state_9165[(2)]);
var state_9165__$1 = state_9165;
var statearr_9173_9201 = state_9165__$1;
(statearr_9173_9201[(2)] = inst_9155);

(statearr_9173_9201[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9166 === (13))){
var state_9165__$1 = state_9165;
var statearr_9174_9202 = state_9165__$1;
(statearr_9174_9202[(2)] = null);

(statearr_9174_9202[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9166 === (6))){
var inst_9125 = (state_9165[(7)]);
var inst_9150 = inst_9125.length;
var inst_9151 = (inst_9150 > (0));
var state_9165__$1 = state_9165;
if(cljs.core.truth_(inst_9151)){
var statearr_9175_9203 = state_9165__$1;
(statearr_9175_9203[(1)] = (12));

} else {
var statearr_9176_9204 = state_9165__$1;
(statearr_9176_9204[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9166 === (3))){
var inst_9163 = (state_9165[(2)]);
var state_9165__$1 = state_9165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9165__$1,inst_9163);
} else {
if((state_val_9166 === (12))){
var inst_9125 = (state_9165[(7)]);
var inst_9153 = cljs.core.vec.call(null,inst_9125);
var state_9165__$1 = state_9165;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9165__$1,(15),out,inst_9153);
} else {
if((state_val_9166 === (2))){
var state_9165__$1 = state_9165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9165__$1,(4),ch);
} else {
if((state_val_9166 === (11))){
var inst_9129 = (state_9165[(9)]);
var inst_9133 = (state_9165[(10)]);
var inst_9143 = (state_9165[(2)]);
var inst_9144 = [];
var inst_9145 = inst_9144.push(inst_9129);
var inst_9125 = inst_9144;
var inst_9126 = inst_9133;
var state_9165__$1 = (function (){var statearr_9177 = state_9165;
(statearr_9177[(11)] = inst_9145);

(statearr_9177[(7)] = inst_9125);

(statearr_9177[(12)] = inst_9143);

(statearr_9177[(8)] = inst_9126);

return statearr_9177;
})();
var statearr_9178_9205 = state_9165__$1;
(statearr_9178_9205[(2)] = null);

(statearr_9178_9205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9166 === (9))){
var inst_9125 = (state_9165[(7)]);
var inst_9141 = cljs.core.vec.call(null,inst_9125);
var state_9165__$1 = state_9165;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9165__$1,(11),out,inst_9141);
} else {
if((state_val_9166 === (5))){
var inst_9129 = (state_9165[(9)]);
var inst_9126 = (state_9165[(8)]);
var inst_9133 = (state_9165[(10)]);
var inst_9133__$1 = f.call(null,inst_9129);
var inst_9134 = cljs.core._EQ_.call(null,inst_9133__$1,inst_9126);
var inst_9135 = cljs.core.keyword_identical_QMARK_.call(null,inst_9126,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_9136 = (inst_9134) || (inst_9135);
var state_9165__$1 = (function (){var statearr_9179 = state_9165;
(statearr_9179[(10)] = inst_9133__$1);

return statearr_9179;
})();
if(cljs.core.truth_(inst_9136)){
var statearr_9180_9206 = state_9165__$1;
(statearr_9180_9206[(1)] = (8));

} else {
var statearr_9181_9207 = state_9165__$1;
(statearr_9181_9207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9166 === (14))){
var inst_9158 = (state_9165[(2)]);
var inst_9159 = cljs.core.async.close_BANG_.call(null,out);
var state_9165__$1 = (function (){var statearr_9183 = state_9165;
(statearr_9183[(13)] = inst_9158);

return statearr_9183;
})();
var statearr_9184_9208 = state_9165__$1;
(statearr_9184_9208[(2)] = inst_9159);

(statearr_9184_9208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9166 === (10))){
var inst_9148 = (state_9165[(2)]);
var state_9165__$1 = state_9165;
var statearr_9185_9209 = state_9165__$1;
(statearr_9185_9209[(2)] = inst_9148);

(statearr_9185_9209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9166 === (8))){
var inst_9125 = (state_9165[(7)]);
var inst_9129 = (state_9165[(9)]);
var inst_9133 = (state_9165[(10)]);
var inst_9138 = inst_9125.push(inst_9129);
var tmp9182 = inst_9125;
var inst_9125__$1 = tmp9182;
var inst_9126 = inst_9133;
var state_9165__$1 = (function (){var statearr_9186 = state_9165;
(statearr_9186[(7)] = inst_9125__$1);

(statearr_9186[(8)] = inst_9126);

(statearr_9186[(14)] = inst_9138);

return statearr_9186;
})();
var statearr_9187_9210 = state_9165__$1;
(statearr_9187_9210[(2)] = null);

(statearr_9187_9210[(1)] = (2));


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
});})(c__6674__auto___9196,out))
;
return ((function (switch__6612__auto__,c__6674__auto___9196,out){
return (function() {
var cljs$core$async$state_machine__6613__auto__ = null;
var cljs$core$async$state_machine__6613__auto____0 = (function (){
var statearr_9191 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9191[(0)] = cljs$core$async$state_machine__6613__auto__);

(statearr_9191[(1)] = (1));

return statearr_9191;
});
var cljs$core$async$state_machine__6613__auto____1 = (function (state_9165){
while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_9165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6615__auto__;
}
break;
}
}catch (e9192){if((e9192 instanceof Object)){
var ex__6616__auto__ = e9192;
var statearr_9193_9211 = state_9165;
(statearr_9193_9211[(5)] = ex__6616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9212 = state_9165;
state_9165 = G__9212;
continue;
} else {
return ret_value__6614__auto__;
}
break;
}
});
cljs$core$async$state_machine__6613__auto__ = function(state_9165){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6613__auto____1.call(this,state_9165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6613__auto____0;
cljs$core$async$state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6613__auto____1;
return cljs$core$async$state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6674__auto___9196,out))
})();
var state__6676__auto__ = (function (){var statearr_9194 = f__6675__auto__.call(null);
(statearr_9194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6674__auto___9196);

return statearr_9194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6676__auto__);
});})(c__6674__auto___9196,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map