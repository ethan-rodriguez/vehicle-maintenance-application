class Vehicle < ApplicationRecord
    belongs_to :user
    has_many :routines

    validates :year, presence: true
    validates :make, presence: true
    validates :model, presence: true
    validates :mileage, presence: true
    validates :vin, presence: true, uniqueness: true
end
