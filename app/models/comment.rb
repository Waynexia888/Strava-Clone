class Comment < ApplicationRecord
    validates :user_id, :activity_id, :body, presence: true
    belongs_to :user
    belongs_to :activity
end
