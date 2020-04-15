class Api::CommentsController < ApplicationController
    def index
        @comments = Comment.where(activity_id: params[:activity_id])
    end

    def show
        @comment = Comment.find(params[:id])
    end

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def destroy 
        @comment = Comment.find(params[:id])
        if @comment.user_id === current_user.id
            @comment.destroy
        else
            render json: ["Something went wrong because you shouldnt be able to delete another users comments!"], status: 401
        end
    end

    private
    def comment_params
         params.require(:comment).permit(:body, :user_id, :activity_id)
    end
end
