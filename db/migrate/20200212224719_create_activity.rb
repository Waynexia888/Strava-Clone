class CreateActivity < ActiveRecord::Migration[5.2]
  def change
    create_table :activities do |t|
    t.integer :user_id, null: false
    t.integer :route_id, null: false
    t.string :sport, null: false
    t.string :title, null: false
    t.string :time, null: false
    t.float :distance, null: false
    t.integer :elevation
    t.integer :description
    t.timestamps
    end
  end
end
