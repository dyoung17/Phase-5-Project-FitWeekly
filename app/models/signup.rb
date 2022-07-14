class Signup < ApplicationRecord
  belongs_to :user
  belongs_to :workout

  validates :user_id, :workout_id, presence: true
  validates :user_id, uniqueness: {scope: :workout_id}
end
