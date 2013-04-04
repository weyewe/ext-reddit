ReeditClone::Application.routes.draw do
  root :to => 'home#index'
  namespace :api do
    match 'extract_images' => 'home#extract_images', :as => :extract_images
  end
end
