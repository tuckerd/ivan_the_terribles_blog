IvanTheTerriblesBlog::Application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :posts
    end
  end

  resources :posts
  resources :comments
  resources :replies

  root :to => 'posts#index'

end

