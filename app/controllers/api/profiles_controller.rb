class Api::ProfilesController < ApplicationController
  before_action :authenticate_user!

  def show
    render json: current_user.profile
  end

  def create
    profile = current_user.profile.new
    if profile.save(profile_params)
      render json: profile
    else
      render json: profile.errors, status: 422
    end
  end

  def update
    if current_user.profile.update(profile_params)
      render json: current_user.profile
    else
      render json: profile.errors, status: 422
  end

  private

  def profile_params
    params.require(:profile).permit(:firstName, :lastName, :avatar, :birthdate)
  end
end
