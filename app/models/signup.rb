class Signup < ApplicationRecord
  belongs_to :user
  belongs_to :workout

  validates :user_id, :workout_id, presence: true
end
