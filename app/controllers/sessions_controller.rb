class SessionsController < ApplicationController  
  def create
      user = User.find_by!(username: params[:username])    
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
          render json: user, status: :created
      else
        render json: {errors: "Invalid Password and/or Username"}, status: :unprocessable_entity
      end
  end

  def destroy
      session.delete :user_id
      head :no_content
  end 
end
