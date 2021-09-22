class CreateRoutines < ActiveRecord::Migration[6.1]
  def change
    create_table :routines do |t|
      t.string :routine
      t.integer :vehicle_id

      t.timestamps
    end
  end
end
