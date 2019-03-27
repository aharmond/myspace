class Api::ProfilesController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: User.random_profile(current_user.liked_profiles)
  end

  def update
    current_user.liked_profiles << params[:id].to_i
    current_user.save
  end
end
