Rails.application.routes.draw do
  resources :routines
  resources :vehicles
  resources :users, only: [:create]

  # ----User Login ---
  post '/login', to: 'sessions#create' 
  
  #  ---User Logout ---
  delete '/logout', to: 'sessions#destroy'

  get '/me', to: 'users#show'


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
