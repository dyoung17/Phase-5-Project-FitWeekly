class UsersController < ApplicationController

    def index
        render json: User.all
    end

    def show
        user = User.find(params[:id])
        render json: user, serializer: UserWithWorkoutsSerializer
    end

    def create
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id
        render json: user, status: :created 
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        user = User.find(params[:id])
        user.update!(user_params)
        render json: signup
    end

    def destroy
        user = Signup.find(params[:id])
        user.destroy
        head :no_content
    end

    def me
        user = nil
        user = User.find_by(id: session[:user_id]) if session[:user_id]
        render json: { user: user }
    end

    private
    
    def user_params
        params.permit(:username, :first_name, :last_name, :age, :email, :phone_number, :password, :password_confirmation)
    end

end
