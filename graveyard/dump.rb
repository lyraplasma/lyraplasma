define_method(:cc){|str|
  str.gsub("_", "-").split("-").each_with_index.map{|x,i| i==0 ? x : x.capitalize }.join
  # str.gsub(/[-_]\w/){|s| s[-1].upcase}
}

a1 = [1,2,2,2,3]
a2 = [2]
a1.reject {|e| b.include? e}

str = "double each char"
str.gsub /(.)/, '\1\1' 

# it's possible to do regex stuff inside regex
def order(words)
  return "" if words.empty?
  words.split.sort_by {|w| w[/\d/].to_i}.join(" ")
  # or
  # w.split(" ").sort_by{|w| w[/\d/].to_i}.join(" ")
end
