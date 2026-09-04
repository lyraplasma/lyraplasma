#lang racket

(define (add n m)
  (+ n m))
(define (sub a b)
  (- a b))
(display (sub 2 2))
(define (mult x y )
  (* x y))
(display (mult 2 2))

(display "first num: ")
(define f (read))
(display "second num: ")
(define s (read))
(display (add f s))
(newline)

(display (map (lambda (n) (* n n)) (range 1 11)))(newline)
(define l
  (map (λ (n) (* n n)) (range 1 11)))
(display l)(newline)

(display (foldl + 0 (filter even? (map (λ (n) (* n n)) (range 1 11)))))

;;(require racket/function)
;;(-> (range 1 11)
;;    (map (lambda (n) (* n n))_)
;    (filter even? _)
;    (foldl + 0 _))
(display (*
(for/sum ([n (in-range 1 11)])
	 (let ([squared (* n n)])
	   (if (even? squared) squared 0)))

2))
