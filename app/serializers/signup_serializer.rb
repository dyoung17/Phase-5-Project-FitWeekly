class SignupSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :workout
end
