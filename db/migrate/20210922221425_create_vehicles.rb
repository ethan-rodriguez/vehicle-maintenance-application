class CreateVehicles < ActiveRecord::Migration[6.1]
  def change
    create_table :vehicles do |t|
      t.integer :year
      t.string :make
      t.string :model
      t.string :vin
      t.integer :mileage
      t.text :vehicle_notes
      t.string :image_url
      t.integer :user_id

      t.timestamps
    end
  end
end
