
task :default => [:foo]

task :foo => [:haml, "test/jasmine/src/TeamList.js"]

desc "haml. convert haml file to html"
task :haml => [:clean] do
  `bundle exec haml app/index.haml > app/index.html`
end

desc "clean. remove app/index.html"
task :clean do
  `rm app/index.html`
end

file "test/jasmine/src/TeamList.js" => "app/lib/TeamList.js" do
  `cp app/lib/TeamList.js test/jasmine/src/TeamList.js`
end

