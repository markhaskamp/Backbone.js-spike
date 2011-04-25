guard 'shell' do
  watch ("app/index.haml") do |m|
    `haml app/index.haml app/index.html`
    puts "haml -> app/index.html"
  end

  watch (%r{(.+)\.js$}) do |m| 
    # m[0] is all of match
    # m[1] is match inside parantheses
    `bundle exec rocco -ljs -o doc #{m[0]}`
    puts "rocco. #{m[0]} -> doc/#{m[1]}.html"
  end

end
