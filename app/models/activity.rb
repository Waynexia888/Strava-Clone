class Activity < ApplicationRecord

    validates :sport, :title, :athlete_id, presence: true

    belongs_to :athlete
    belongs_to :route

end