Rails.application.routes.draw do
  root 'static_pages#home'
  get 'contact'    => 'static_pages#contact'
  get 'chef'    => 'static_pages#chef'
  get 'menu'    => 'static_pages#menu'
  get 'location'    => 'static_pages#location'
  get 'reservations'    => 'static_pages#reservations'
end
