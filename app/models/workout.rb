class Workout < ApplicationRecord
    validates :user_id, :route_id, :sport, :title, :time, :distance, presence: true

    belongs_to :user 
    belongs_to :route 
end
