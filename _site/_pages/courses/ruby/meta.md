https://www.cloudbees.com/blog/metaprogramming-in-ruby/
https://buildingvts.com/ruby-metaprogramming-by-example-612526d0b72
https://www.toptal.com/ruby/ruby-metaprogramming-cooler-than-it-sounds
https://www.youtube.com/watch?v=cY-wxg5z5bA

3.times do
  class C
    puts "Hello"
  end
end

# monkey patch

[1, 2, 3].to_s

class Array  
  def to_s    
    '[]'  
  end
end


[1, 2, 3].to_s


# send method

1 + 3
1.+(3)
1.send(:+, 3)

[1,2,3,4].inject(0) {|el, acc| acc + el}
[1,2,3,4].inject(0, :+)


class Message
  def initialize (subject, content)
    @subject = subject
    @content = content
  end
end

m = Message.new ("oi tudo bem?", "poxa, nem sabe... ")
m.instance_variable_get(:"@content")

# dynamic methods

['a', 'b', 'c'].each do |letra|
	define_method letra.to_sym do
		puts "hello from #{letra}"
	end
end
