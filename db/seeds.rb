# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

user1 = User.create!(email: 'user1@gmail.com', full_name: 'User One', password: 'abcd1234')

demo_user = User.create!(email: 'demo@demo.demo', full_name: 'Demo User', password: 'demopassword')
