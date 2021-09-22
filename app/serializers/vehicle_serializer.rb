class VehicleSerializer < ActiveModel::Serializer
  attributes :id, :year, :make, :model, :vin, :mileage, :vehicle_notes, :image_url, :user_id
end
