Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :users do
      resources :profiles, only: [:index, :show, :create, :update]
    end
  end

  namespace :api do
    resources :profiles, only: [:index, :show]
  end
end
