class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :first_name
      t.string :last_name
      t.integer :age
      t.string :phone_number
      t.string :email
      t.boolean :admin, default: false

      t.timestamps
    end
  end
end
