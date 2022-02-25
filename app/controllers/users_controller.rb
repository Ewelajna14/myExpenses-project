class UsersController < ApplicationController

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        user = User.find_by[id: session[:user_id]]
        if user
            render json: user
        else
            render json: {error: "Unauthorized"}, status: :unauthorized
        end
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
