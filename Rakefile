
task :default => [:haml]

desc "haml. convert haml file to html"
task :haml => [:clean] do
  `bundle exec haml app/index.haml > app/index.html`
end

desc "clean. remove app/index.html"
task :clean do
  `rm app/index.html`
end
