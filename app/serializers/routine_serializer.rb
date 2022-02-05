class RoutineSerializer < ActiveModel::Serializer
  attributes :id, :routine, :vehicle_id, :created_at
end
