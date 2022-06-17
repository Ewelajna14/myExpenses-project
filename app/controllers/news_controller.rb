class NewsController < ApplicationController

    def get_news
         url = "https://finnhub.io/api/v1/news?category=general&token=#{ENV["MY_API_KEY"]}"
        response = RestClient.get(url)
        render json: response
    end


end
