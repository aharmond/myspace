class Api::ProfilesController < ApplicationController
  before_action :authenticate_user!

  def index
    if params[:user_id]
      render json: current_user.profiles
    else
      render json: Profile.all
    end
  end

  def show
    render json: current_user.profiles
  end

  def create
    profile = current_user.profiles.new(profile_params)

    if profile.save
      render json: profile
    else
      render json: profile.errors, status: 422
    end
  end

  def update
    if current_user.profiles.update(profile_params)
      render json: current_user.profiles
    else
      render json: current_user.profiles.errors, status: 422
    end
  end

  private

  def profile_params
    params.require(:profile).permit(:firstName, :lastName, :avatar, :birthdate)
  end
end
