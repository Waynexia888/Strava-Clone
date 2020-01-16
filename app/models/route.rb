class Route < ApplicationRecord
    validates :title, :user_id, :route_data, presence: true

 
    # belongs_to :user,
    # primary_key: :id,
    # foreign_key: :creator_id,
    # class_name: "User"
    
    has_many :activities

    has_many :locations
end
