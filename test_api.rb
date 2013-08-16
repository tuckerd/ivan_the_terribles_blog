require 'rubygems'
require 'bundler/setup'
require 'httparty'
require 'pry'
require 'awesome_print'

response = HTTParty.get('http://localhost:3000/api/v1/posts.json')
puts "The first post's body is: #{response.first['body']}"
