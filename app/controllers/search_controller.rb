class SearchController < ApplicationController
	def index
    start_year = params[:years].split(" - ")[0]
    end_year = params[:years].split(" - ")[1]
    @movie = Tmdb::Movie.discover({
      "with_genres" => params[:genres].join(","),
      "release_date.gte" => "#{start_year}-01-01",
      "release_date.lte" => "#{end_year}-01-01"
    }).collect do |result|
      Tmdb::Movie.new(result)
    end
	end
end