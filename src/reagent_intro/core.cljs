(ns reagent-intro.core
  (:require-macros [cljs.core.async.macros :refer (go)])
  (:require
    [reagent.core :as reagent]
    [cljs.core.async :refer (chan put! <!)]))

(def EVENTCHANNEL (chan))
;chan is persisten queue in memory

(defonce app-state
  (reagent/atom {:message "Things to do"
                 :items []
                 :active-item {}}))

; sort like reducers
(defn update-active-item
  [{:keys [active-item]}]
  (swap! app-state assoc-in [:active-item] active-item))


(defn add-item
  [item-text]
  (swap! app-state update-in [:items]
    (fn [items] (conj items {:display item-text}))))


(defn delete-item
  [idx]
  (if (< idx (count (:items @app-state)))
    (swap! app-state update-in [:items]
                       (fn [items]
                         (into [] (concat (subvec items 0 idx)
                           (subvec items (inc idx))))))))

(def EVENTS
  {:update-active-item update-active-item
   :add-item add-item})

(go
  (while true
    (let [[action data] (<! EVENTCHANNEL)]
      (js/console.log (pr-str action data))
      ; call the action
      ((action EVENTS) data))))

(defn header [message]
  [:div {}
   [:p {:class "title"} message]])

(defn handleEnter [handler]
  "listens for Enter keypress, returns callback"
  (fn [ev]
    (if (and (= (.-key ev) "Enter"))
      (handler)
    )))

(def text (reagent/atom ""))

(defn new-item-field
  [onSubmit]
  "takes onSubmit function, will submit text for new item"
  [:input
   {:type "text"
    :value @text
    :onKeyPress (handleEnter #(do
                                (onSubmit @text)
                                (reset! text "")))
    :onChange
      (fn [ev]
        (reset! text (.-value (.-target ev))))
     }])

(defn items-list [EVENTCHANNEL items active-item]
   "will display items update an event channel when clicked"
   [:div {:class "items-list"}
    ;; TODO could this be cleaner?
    (map-indexed
      (fn
        [index item]
        ^{:key index}
        [:div {:class (if (= active-item item) "item active" "item")}
         [:p
          {:on-click
           (fn [event]
             (put! EVENTCHANNEL [:update-active-item  {:active-item item}]))}
          (:display item)
          [:a {:style {:color "red"} :onClick #(delete-item index) 
                  :dangerouslySetInnerHTML {:__html "&nbsp;&#x2716;"}}]]
         ])
      (:items @app-state)
      )])

(defn app []
  [:div {:class "container"}
   [header (:message @app-state)]
   [new-item-field add-item]
   [items-list EVENTCHANNEL (:items @app-state) (:active-item @app-state)]
   ]
  )

(reagent/render [app] (js/document.querySelector "#cljs-target"))
