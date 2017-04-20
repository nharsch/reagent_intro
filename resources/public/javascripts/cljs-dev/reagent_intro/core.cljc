(ns reagent-intro.core
  (:require [reagent.core :as reagent]))

(defn app []
  [:h1 {:class "title"} "Hello from clojure"])

(js/console.log "hey js")
(reagent/render [app] (js/document.querySelector "#cljs-target"))
