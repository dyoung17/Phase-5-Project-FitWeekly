class User < ApplicationRecord
    has_secure_password

    has_many :signups
    has_many :workouts, through: :signups

    validates :username, :first_name, :last_name, :age, :phone_number, :email, :password, presence: true;
    validates :first_name, :last_name, length: { minimum: 2 };
    validates :age, numericality: { greater_than: 18 }
    validates :phone_number, length: { minimum: 10 }
    validates :username, :email, uniqueness: true
end
