#lang racket
;nooooooote put #lang racket at the top when using racket :P
(define (new-secret)
  (+ 1 (random 100)))

(define (get-guess)
  (display "Enter your guess (1-100): ")
  (read))

(define (game-loop secret attempts)
  (display "Guess #") (display attempts) (newline)
  (let ((guess (get-guess)))
    (cond
      [(< guess secret)
       (display "Too low!\n")
       (game-loop secret (+ attempts 1))]
      [(> guess secret)
       (display "Too high!\n")
       (game-loop secret (+ attempts 1))]
      [else
       (display "Correct! You took ")
       (display attempts)
       (display " tries.\n")])))

(define (start-game)
  (let ((secret (new-secret)))
    (display "I'm thinking of a number between 1 and 100.\n")
    (game-loop secret 1)))

(start-game)
