class Card < OpenStruct
end

class App < Sinatra::Base
  before do
    @usernames = %w{
      remi
      garno
      jimmybourassa
      frederickdubois
      bassuro
      simonprev
      rafbm
      etiennelem
    }
    @cards = @usernames.map { |i| [Card.new(:id => i), Card.new(:id => i)] }.flatten.shuffle
  end

  get '/' do
    haml :index
  end

  get '/css/screen.css' do
    scss :screen
  end
end
