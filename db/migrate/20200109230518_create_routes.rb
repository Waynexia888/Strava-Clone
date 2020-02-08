class CreateRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :routes do |t|
      
      t.integer :user_id, null: false
      t.string :route_data, null: false
      t.string :title
      t.integer :type
      t.string :description
      t.date :date
   
      t.timestamps
    end
    
    add_index :routes, :user_id
   
  end
end
