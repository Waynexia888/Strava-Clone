Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :routes, only: [:create, :show, :index, :destroy]
    resources :activities do 
      resources :comments, only: [:index]
      resources :kudos, only: [:index]
    end
    resources :locations, only: [:create, :show, :update, :destroy]
   
    resources :kudos, only: [:create, :show, :destroy]

    resources :comments, only: [:create, :destroy, :show]

    resources :pages, only: [:show] do 
      resources :activities, only: [:index]
    end
    
  end

  root "static_pages#root"
end
