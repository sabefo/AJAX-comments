get '/' do
  # La siguiente linea hace render de la vista 
  # que esta en app/views/index.erb
  erb :index
end

post '/db' do
	text = params[:text]
	author = params[:author]
	Comment.create(comment: text, author: author)
	erb :index
end