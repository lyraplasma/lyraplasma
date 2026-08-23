package main

import p "core:fmt"
import "core:os"

main::proc() {
//please_print.println("hellope")
x := 10
y := 20
p.print(x)
p.print(y)
p.print(len("Foo"))
num: int = 1.0
p.print(num)
p.print(2 *2)
var_x :: "constant var"
p.print(var_x)
for i := 0; i < 10; i += 1 { p.print(" ", i)}
for i in 0..<10 {
p.print(" ",i)
}
p.print("range: 0..=9")
for i in 0..=9{p.print(i*2,i)}
some_string := "Hello, 世界"
for chr in some_string{p.print(chr)}
}