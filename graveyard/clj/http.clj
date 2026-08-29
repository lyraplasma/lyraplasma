(ns http
  (:import (com.sun.net.httpserver HttpServer HttpExchange)
    (java.net InetSocketAddress)
    (java.io OutputStream)))

(defn handler [^HttpExchange exchange]
  "It handles incoming request :)))"
  (try
    (let [uri (.getRequestURI exchange)
      path (.getPath uri)
      method (.getRequestMethod exchange)]

    (cond
      (= path "/")
        (do
	  (print "Hewoo from root")
	  {:status 200 :body "<h2>You have entered a server</h2><p>raoar</p>"})
      (= path "/hello")
      (do
      (println "The hello route has been scrapped!")
      {:status 200 :body "<h2>Hewo world</h2>"})

      (= path "/coffee")
      (do
        (println "no coffee yet!!!")
	{:status 418 :body "<h2>I'm a teapot, so no coffee for now</h2>"})

      :else
      (do
        (println "404 for" path)
	{:status 404 :body (str "<h2>404 Not Found</h2><p>'" path "' doesn't exist.</p>")}))

      (let [response-body (get response-map :body)
        response-status (get response-map :status)]

      (.sendResponseHeaders exchange response-status (count response-body))
      (with-open [os (.getResponseBody exchange)]
        (.write os (.getBytes response-body "UTF-8")))))

      (catch Exception e
        (println "Server error 500:" (.getMessage e))
	(.sendResponseHeaders exchange 500 0)
	(with-open [os (.getResponseBody exchange)]
	  (.write os (.getBytes "Internal Server Error" "UTF-8"))))))


(defn -main [& args]
  (let [port 8080
    server (HttpServer/create (InetSocketAddress. port) 0)]
    (.createContext server "/" handler)
    (.start server)
    (println (str "server is up and kicking fine at port localhost:" port "/"))
    (println "...")))

(when (= *file* (System/getProperty "clojure.core/*file*"))
  (-main))
