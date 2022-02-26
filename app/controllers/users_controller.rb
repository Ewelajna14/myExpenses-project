class UsersController < ApplicationController

    skip_before_action :authorize, only: :create

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        render json: @current_user
    end

    def index
        users = User.all
        render json: users, each_serializer: UserSerializer
    end



    private

    def user_params
        params.permit(:first_name, :last_name, :username, :password, :password_confirmation)
    end

end
