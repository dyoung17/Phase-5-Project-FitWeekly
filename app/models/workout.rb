class Workout < ApplicationRecord
    has_many :users
    has_many :signups, through: :users

    validates :name, :date, :description, :video_url, :slots, presence: true;
    validates :description, length: { maximum: 500 };
    validates :slots, length: {maximum: 30};

    def datewithtime
        self.date.strftime('%a - %d of %B, %Y')
    end

end
