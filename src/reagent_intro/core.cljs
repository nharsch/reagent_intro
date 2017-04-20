(ns reagent-intro.core
  (:require [reagent.core :as reagent]))

(def app-state
  (reagent/atom {:message "hello from app state"
                 :items [{:display "item 1"}
                         {:display "item 2"}]
                 }))

(defn header [message]
  [:div {}
   [:h1 {:class "title"} message]])

(defn items-list [items]
   [:div {:class "items-list"}
    (for [item (:items @app-state)]
      ^{:key (:display item)}
      [:div {:class "tiem"}
       [:p (:display item)]])])

(defn app []
  [:div {:class "container"}
   [header "this is my message"]
   [items-list (:items @app-state)]
   ]
  )

(reagent/render [app] (js/document.querySelector "#cljs-target"))

(js/setTimeout
  (fn [] (swap! app-state assoc-in [:message] "New Message"))
  2000)
