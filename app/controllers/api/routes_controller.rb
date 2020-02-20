class Api::RoutesController < ApplicationController
    def index
        @routes = current_user.routes
    end
    
    def show
        @route = Route.find(params[:id])
        # render "api/routes/show"
    end

    def create
        @route = Route.new(route_params)
        # @route.user_id = current_user.id
        if @route.save
            render "api/routes/show"
        else
            render json: ["Route Name required"], status: 422 
        end
    end

    def destroy 
        @route = Route.find(params[:id])
        @route.destroy
        render json: ["route successfully removed"], status: 200
    end

    private

    def route_params
        params.require(:route).permit(:title, :route_data, :user_id)
    end
end
