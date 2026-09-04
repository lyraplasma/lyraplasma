(and-then (some 5)
	  (lambda (x) (some (+ x 1)))
	  (lambda (y) (some (* y 2))))
