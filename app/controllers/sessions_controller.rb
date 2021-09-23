class SessionsController < ApplicationController

    
    # POST /login
    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params: params[:password])
            session[user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: ["Invalid username or password combination"] }, status: :unauthorized
        end

    end

   

    
end
