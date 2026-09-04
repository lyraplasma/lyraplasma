package main
import "fmt"

func Map[T, U any](slice []T, f func(T) U) []U {
  result := make([]U, len(slice))
  for i,v := range slice {
    result[i] = f(v)
  }
  return result
}

func main() {
  factor := 2
  double := func(x int) int { return x * factor }
  fmt.Println(double(5))
  add_one := func(x int) int { return x + 1 }
  double_ := func(x int) int { return x * 2 }
  result := double(add_one(3))

  nums := []int{1,2,3}
  doubled := []int{}

  for _,v := range nums { doubled = append(doubled, v*2) }
  fmt.Println(doubled)

  ch := make(chan int)
  go func() { ch <- 1; ch <- 2; ch <- 3; close(ch)}()
  for v := range ch {
    fmt.Println(v)
  }
}