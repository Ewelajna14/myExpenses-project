# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Category.destroy_all

puts "Seeding categories"

Category.create(category:"Groceries")
Category.create(category:"Entertainment")
Category.create(category:"Travel")
Category.create(category:"Personal")
Category.create(category:"Food&Drink")
Category.create(category:"Education")
Category.create(category:"Housing")
Category.create(category:"Transportation")
Category.create(category:"Utilities")
Category.create(category:"Insurance")
Category.create(category:"Medical")
Category.create(category:"Savings")
Category.create(category:"Others")

puts "Seeding done"
