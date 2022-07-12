class WorkoutsController < ApplicationController
    
    def index
        render json: Workout.all.order(date: :ASC)
    end

    def show
        workout = Workout.find(params[:id])
        render json: workout
    end

    def create
        workout = Workout.create!(workout_params)
        render json: workout, status: :created
    end

    def update
        workout = Workout.find(params[:id])
        workout.update!(workout_params)
        render json: workout
    end

    def destroy
        workout = Signup.find(params[:id])
        workout.destroy
        head :no_content
    end

    private

    def workout_params
        params.permit(:name, :date, :description, :video_url, :slots)
    end
end
