class CreateWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :workouts do |t|
      t.string :name
      t.datetime :date
      t.string :description
      t.string :video_url

      t.timestamps
    end
  end
end
