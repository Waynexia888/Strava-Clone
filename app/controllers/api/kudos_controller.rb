class Api::KudosController < ApplicationController
    def index
        @kudos = Kudo.where(activity_id: params[:activity_id])
    end

    def create
        @kudo = Kudo.new(kudo_params)
        @kudoed = Kudo.find_by(activity_id: kudo_params[:activity_id], user_id: current_user.id)
        if @kudoed
            id = @kudoed.id.dup()
            @kudoed.destroy()
            render json: [id]
        elsif @kudo.save
            render :show
        end
    end

    def show
        @kudo = Kudo.find(params[:id])
    end

    def destroy
        @kudo = Kudo.find(params[:id])
        if @kudo.user_id === current_user.id
            @kudo.destroy()
        else
            render json: ["cannot remove someone elses kudo"], status: 401
        end

    end

    private
    def kudo_params
         params.require(:kudo).permit(:user_id, :activity_id)
    end
end
