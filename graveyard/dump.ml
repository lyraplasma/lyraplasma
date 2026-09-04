;;add_one = ->(x) { x + 1}
;;double = ->(x) {x * 2}
;;add_one_then_double = -> (x) { double.call(add_one.call(x)) }
;;add_one_then_double.call(3)

[1; 2; 3]
|> List.filter (fun x -> x mod 2 = 0)
|> List.map (fun x -> x * 2)
|> List.fold_left (+) 0

List.fold_left (+) 0 (List.map (fun x -> x * 2)(List.init 50 (fun i -> i + 1)))
