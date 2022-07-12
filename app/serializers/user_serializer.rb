class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :age, :phone_number, :email, :admin, :password, :password_confirmation
end
