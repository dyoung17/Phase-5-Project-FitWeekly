class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :description, :video_url, :slots, :datewithtime
end
