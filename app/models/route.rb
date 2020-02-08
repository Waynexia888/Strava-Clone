class Route < ApplicationRecord
    validates :title, :user_id, :route_data, presence: true

 
    # belongs_to :user,
    # primary_key: :id,
    # foreign_key: :creator_id,
    # class_name: "User"
    
    has_many :workouts
    belongs_to :user

    has_many :locations
end
