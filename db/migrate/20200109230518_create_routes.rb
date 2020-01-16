class CreateRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :routes do |t|
      
      t.integer :user_id, null: false
      t.string :title, null: false
      t.integer :type
      t.string :description
      t.date :date
      t.datetime :start_time
      t.datetime :end_time
      t.float :distance
      t.float :elevation
      t.string :location
      

      
      t.timestamps
    end
    add_index :routes, :type
    add_index :routes, :user_id
    add_index :routes, :location

  end
end
