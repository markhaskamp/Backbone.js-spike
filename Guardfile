
guard 'shell' do
  watch ("app/index.haml") do |m|
    `haml app/index.haml app/index.html`
    puts "haml -> app/index.html"
  end

end
