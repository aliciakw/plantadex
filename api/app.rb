require 'sinatra'
require 'json'

get '/' do
  'One day, here a garden will grow.'
end

# mock some db requests
plant_data = [
  {
    :id => 1,
    :symbol => 'ABAB',
    :common_name => 'shrubby Indian mallow',
    :scientific_name => 'Abutilon abutiloides (Jacq.) Garcke ex Hochr.',
    :family => 'Malvaceae'
  },
  {
    :id => 2,
    :symbol => 'ABAB70',
    :common_name => 'abietinella moss',
    :scientific_name => 'Abietinella abietina (Hedw.) Fleisch.',
    :family => 'Thuidiaceae'
  },
  {
    :id => 3,
    :symbol => 'ABAL',
    :common_name => 'Ramshaw Meadows sand verbena',
    :scientific_name => 'Abronia alpina Brandegee',
    :family => 'Nyctaginaceae'
  }
]

get '/api/plants' do
  content_type :json
  plant_data.to_json
end