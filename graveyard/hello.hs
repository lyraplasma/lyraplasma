import Data.Char
import Data.List
import Text.Printf
-- assumption: monads == design pattern.. of what?
greet_this_user :: String -> String
greet_this_user name = printf "Hello, %s are you doing well?" name

-- baby's first function
doubleMe x = x + x
doubleUs x y = x*2 + y*2
expntMe x = x * x
mySucc x = x + 1
double_double x y = doubleMe x + doubleMe y
double_small_number x = if x <= 100 then x*2 else x -- expression: piece of code that returns stuff :3
double_small_number2' x = (if x > 100 then x else x*2) + 1 -- apostrophe strict func
janeO'Brien = "It's a-me, Jane O'Brien!" -- a function definition??? why??
-- "helo" is just a syntaxtic sugar of ['h', 'e', 'l', 'o'] :)))

say_hello :: String -> String
say_hello name = "Hellooooooooooo" ++ name ++ "!"

greet_another_user :: String -> String -> String
greet_another_user first last = printf "Hellooooooooooo? %s %s" first last

greeting :: String -> String -- takes string and returns a string isn't it?
greeting name = "Hello, " ++ name ++ " how are you doing today?"

makeNegative :: Num a => a -> a -- they said this is a type signature
makeNegative = negate . abs

plus_one :: Num a => a -> a
plus_one x = x + 1
plus_two :: Num x => x -> x
plus_two = (+ 2)

multiplied_ :: Num a => a -> a
multiplied_ = (* 2)
another_mult = (* 3)
mult_by_fourths = (* 4)
negates = (negate . abs) -- yup it works! you don't need to add type signature if you desire to write a quick and dirty function

digitize :: Int -> [Int] -- a function signature
digitize s
  | s < 10 = [s]
  | otherwise = [mod s 10] ++ (digitize (div s 10))

digitize_with_lib :: Int -> [Int] -- make sense?? from Int convert into arr of int??
digitize_with_lib = reverse . map digitToInt . show

another_digitize :: Int -> [Int]
another_digitize x = case x `divMod` 10 of
  (0, z) -> [z]
  (y, z) -> z : digitize y

yet_another_digitize :: Int -> [Int]
yet_another_digitize = map (read . return) . reverse . show

main = do
  putStrLn "Hellope! everybody!!"
  putStrLn ("Please look at my favorite odd numbers: " ++ show (filter odd [10..20]))
  putStrLn "Yay another putstrln here!!!"
-- this is a single line comment in hs!!
  putStrLn "Does \n work???\n\n\tyes\nit works!!"
{-
and this is the multiline thingey
so imperative -> provides step by step task or sequence, i suppose
referential transparency -> guaranteed return, same result

-}
  putStrLn (show [1,2,3,4,5,6])
  putStrLn (show "uhhhh working?")
  putStrLn (show 3.14159)
  putStrLn (show ["string", "helo?", "string works?"])
{-
  make_negative :: (Num a, Ord a) => a -> a
  make_negative x
    | x > 0 = -x
    | otherwise = x
-}
  putStrLn (show (-abs 9))
  print $ show (-abs 42)
    ++ show [1,2,3,4]
    ++ show (makeNegative 128)
    ++ "From the plus_two = (+ 2) stuff\n"
    ++ show (plus_two 3)
    ++ "From the plus_one = (+ 1) stuff\n"
    ++ show (plus_one 1)
  putStrLn (show (plus_one (1)))
  print $ show ([1,2,3,4,5,6]) ++ show [1,3,4,5,2,23432,3]
        ++ "here" ++ show (abs 4) ++ show (plus_two 80) ++ show (multiplied_ 50) -- umm show will parse int to str???
  print $ show (negates 1) ++ show [12,2] ++ show (digitize 1343) ++ show (another_digitize 03439)
    ++ show (mult_by_fourths 10) ++ show (digitize_with_lib 432)
  print (another_digitize 0987) -- it ignored zero???? whyy????
  print $ "from yet another digitize" ++ show (yet_another_digitize 3432) ++ (greeting "User Z")
  print (greet_this_user "Town User B")
  print (greet_this_user "Town User C" ++ greet_another_user "User D" "User A" ++ say_hello "uhh...")
  print $ greet_another_user "User X" "User U"
        ++ say_hello "Uhh..."
        ++ "Hello "++"concats? "++" yeah??"
  print (greet_another_user "User A" "User B")
  print (say_hello "uhh..")
  print ("Hello" ++ " concat? " ++ "yeah?") -- confirmed: ++ a concat thingey:)))
  print (not (True && True))
  print (5 == 5)
  print (1 == 1)
  print (succ 10)
  print ([(succ 3), (succ 5), (succ 6)])
  print (succ 9 + max 3 4 + 1)
  print (div 10 5)
  print (10 `div` 5)
  print ([1,2,3] ++ [4,5,6])
  print (['w', 'o'] ++ ['o', 't'])
  print ("hello" !! 0)
  print (uhh "hello" 0)
  print (uhh "uhhh" 0)
  first_find_zero_index "0"
  printLast [1,2,3,4,6]
  print (doubleMe (doubleMe (doubleMe (doubleMe (doubleMe 42)))))
  print (ftfn 1 5 9 1 10)

-- looks like i can write a function below of the main
-- truly a humanity's efforts
uhh str loc = str !! loc
{-
b = [[1,2,3,4], [5,5], [1,2,2,2], [3,3,3]]
b ++ [[1,2,3,4]]
[5,4,5] : b
b !! 2

you can compare too with arrays
[1,2,3] == [2]

list have #head #tail #last #init #length #reverse
#maximum #minimum #product

as "hewoo" is just a syntactic sugar of ['h','e','w','o','o']
this is possible
length "hewoo"
-}

first_find_zero_index str = print (str !! 0)
second_find_zero_index str = print (str !! 1)
print_sum arr = print (sum arr)
printTail arr = print (tail arr)
printLast arr = print (last arr)
printLength arr = print (length arr)
dp = print (doubleMe (doubleMe (doubleMe (doubleMe (doubleMe 42)))))
cursep = print (doubleMe (doubleMe (doubleMe (doubleMe (doubleMe 42)))))
cursed = (doubleMe (doubleMe (doubleMe (doubleMe (doubleMe 42)))))
bcursed = (filter odd [1..cursed]) ++ (filter even [1..cursed])
only_odds a b = filter odd [a..b]
only_evens a b = filter even [a..b]
times_fives = print [5, 10..500]
countdown = [10,9..1]
cooldown n = [n, n-1..1]
nines = [0.1, 0.3..1]
lazy_hs i32_n = take i32_n [13,26..]
minmax_lazy_hs = lazy_hs (maximum (lazy_hs (minimum (lazy_hs 10))))
int_take_cy = take (length (take 10 (cycle [1..3]))) (cycle [1..3])
str_take_cycl = take (length (take 10 (cycle ['a'..'c']))) (cycle ['a'..'z'])
repeat_w str times = take times (cycle str)
-- cycle "w" means death
repeatr_ str limit = take limit (repeat str)
worm signature population = replicate population signature
-- list comprhsion thingey S = { 2 * x | x e N, x <= 10}
table_ plcmnt strt end = [x * plcmnt | x <- [strt..end]]
-- -----------------------------------vvvvvvvvvv predicate thingey
table_cp idx strt nd = [y * idx | y <- [strt..nd]]
-- --------------------^^^^^^^^^ function output
-- (take 10 [2,4..]) == ([y*2 | y <- [1..10]]) list comprhnsion simlr to set's
boomBangs xs = [ if x < 10 then "boom" else "bang" | x <- xs, odd x]
fltr_thrth_fith_ninths = [x | x <- [10..20], x /= 13, x /= 15, x /= 19]
ftfn exl1 exl2 exl3 idx endx = [x | x <- [idx..endx], x /= exl1, x /= exl2, x /= exl3]
bangs_boom arr = [ if a < 12 then "bangs" else "boom" | a <- arr, odd a]
arr_mult set_1 set_2 x y = [ a*b+x*y `div` 2 | a <- set_1, b <- set_2, a*y  90]