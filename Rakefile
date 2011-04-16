
task :default => [:main]

task :main => [:haml, "test/jasmine/src/TeamList.js"]

desc "convert haml file to html"
task :haml => [:clean] do
  `bundle exec haml app/index.haml > app/index.html`
end

desc "update Teamlist.js"
file "test/jasmine/src/TeamList.js" => "app/lib/TeamList.js" do
  `cp app/lib/TeamList.js test/jasmine/src/TeamList.js`
end

desc "remove app/index.html"
task :clean do
  `rm app/index.html`
  `rm test/jasmine/src/TeamList.js`
end

