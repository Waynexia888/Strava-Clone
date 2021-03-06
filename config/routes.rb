Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :routes, only: [:create, :show, :index, :destroy]
    resources :activities, except: [:new, :edit]
    resources :locations, only: [:create, :show, :update, :destroy]
   
    resources :kudos, only: [:create, :show, :destroy]

    resources :comments, only: [:create, :destroy, :show]


  end

  root "static_pages#root"
end
