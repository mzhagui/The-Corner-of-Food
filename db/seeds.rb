# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Review.destroy_all
Post.destroy_all
User.destroy_all

@admin = User.create!(username: 'hummingbirds', email: 'hummingbirds@email.com', password: '123456')
@user1 = User.create!(username: 'mzhagui', email: 'mz@email.com', password:'abc123')

puts "#{User.count} users created"

@post1 = Post.create!(title: 'BirriaLandia', address: '77-99 Roosevelt Ave, Queens, NY 11372', food_description: "Started of as any regular food truck standing outside of Roosevelt Avenue in Queens NY. Suddenly, with the power of social media, Birria-Landia blew up. Now, there is a daily line for New Yorkers to try out this mexican delight. Birria-Landia, offers birria tacos, quesadillas and consome. Birria is made out of lamb or beef meat, and is cooked for many hours to offer its juicy , soft meat. It is then made into tacos and fried up with the same beef broth it was cooked with. The best way to enjoy some tacos de birria is to grab the consome (beef broth) and dip into it. Don’t believe this Mexican delight, go try it out yourself, just outside the 7 train!", img_url: "https://cdn.vox-cdn.com/thumbor/nTpqtfjOli8FS8tQ3-PnocNiZd0=/0x0:1800x1440/1820x1213/filters:focal(756x576:1044x864):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/68768106/Image_from_iOS__1_.0.jpg", user: @admin)
@post2 = Post.create!(title: 'test', address: 'test', food_description: 'test', img_url: 'https://picsum.photos/', user: @user1)

puts "#{Post.count} posts created"

Review.create!(rating: '5', description: 'love this place', user: @admin, post: @post1)
Review.create!(rating: '4', description: 'Hidden gem', user: @user1, post: @post2)

puts "#{Review.count} reviews created"