(require '[clojure.repl :refer :all])
(require '[clojure.string :as str])
(println "Hello, world!")
(println "ded?")
(println (+ 3 4))
(println (* 4 2))

 (doc nil?);; from the clojure.repl :refer
 (source some?)
 (dir clojure.string)
 (dir clojure.repl)

(defn number-summary
  "Computes a summary of the arithmetic properties of a number, as a data structure."
  [n]
  (let [proper-divisors (into (sorted-set)
  (filter
    (fn [d]
    (zero? (rem n d)))
    (range 1 n)))
    divisor-sum (apply + proper-divisors)]
    {:n n
    :proper-divisors proper-divisors
    :even? (even? n)
    :prime? (= proper-divisors #{1})
    :perfect-number? (= divisors-sum n)}))

(println (mapv number-summary [5 6 7 12 28 42]))