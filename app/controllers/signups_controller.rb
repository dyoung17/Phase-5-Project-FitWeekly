class SignupsController < ApplicationController

    def index
        render json: Signup.all
    end

    def show
        signup =Signup.find(params[:id])
        render json: signup
    end
    
    def create
        signup = Signup.create!(signup_params)
        render json: signup, status: :created
    end

    def update
        signup = Signup.find(params[:id])
        signup.update!(signup_params)
        render json: signup
    end

    def destroy
        signup = Signup.find(params[:id])
        signup.destroy
        head :no_content
    end

    private

    def signup_params
        params.permit(:user_id, :workout_id)
    end
    
end
