(ns reagent-intro.core
  (:require-macros [cljs.core.async.macros :refer (go)])
  (:require 
    [reagent.core :as reagent]
    [cljs.core.async :refer (chan put! <!)]))

(def EVENTCHANNEL (chan))
;chan is persisten queue in memory

(defonce app-state
  (reagent/atom {:message "hello from app state"
                 :items [{:display "item 1"}
                         {:display "item 2"}
                         {:display "item 3"}
                         {:display "item 4"}
                         {:display "item 5"}
                         {:display "item 6"}
                         ]
                 :active-item {}}))

(def EVENTS
  {:update-active-item (fn [{:keys [active-item]}]
                         (swap! app-state assoc-in [:active-item] active-item))})

(go
  (while true
    (let [[action data] (<! EVENTCHANNEL)]
      (js/console.log (pr-str action data))
      ; call the action
      ((action EVENTS) data))))


(defn header [message]
  [:div {}
   [:p {:class "title"} message]])

(defn items-list [EVENTCHANNEL items active-item]
   "will display items update an event channel when clicked"
   [:div {:class "items-list"}
    (for [item (:items @app-state)]
      ^{:key (:display item)}
      [:div {:class (if (= active-item item) "item active" "item")}
       [:p
        {:on-click
         (fn [event]
           (put! EVENTCHANNEL [:update-active-item  {:active-item item}]))}
        (:display item)]])])

(defn app []
  [:div {:class "container"}
   [header (:message @app-state)]
   [items-list EVENTCHANNEL (:items @app-state) (:active-item @app-state)]
   ]
  )

(reagent/render [app] (js/document.querySelector "#cljs-target"))
