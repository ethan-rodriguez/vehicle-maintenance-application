Rails.application.routes.draw do
  resources :routines
  resources :vehicles
  resources :users

  # ----User Login ---
  post '/login', to: 'sessions#create' 
  
  #  ---User Logout ---
  delete '/logout', to: 'sessions#destroy'


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
