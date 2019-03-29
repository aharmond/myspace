class Api::PostsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_profile
  before_action :set_post, only: [:show, :update, :delete]

  def index
    render json: @profile.posts
  end

  def show
    render json: @post
  end

  def create
    post = @profile.posts.new(post_params)
    if post.save
      render json: post
    else
      render json: post.errors, status: 422
    end
  end

  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: 422
    end
  end

  def delete
    @post.destroy
  end

  private
  def set_profile
    @profile = Profile.find(params[:profile_id])
  end

  def set_post
    @post = Post.find(params[:post_id])
  end

  def post_params
    params.require(:post).permit(:title, :date, :body)
  end
end
