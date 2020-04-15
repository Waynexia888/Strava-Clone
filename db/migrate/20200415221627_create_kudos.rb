class CreateKudos < ActiveRecord::Migration[5.2]
  def change
    create_table :kudos do |t|
      t.integer :activity_id, null: false, indexed: true
      t.integer :user_id, null: false, indexed: true
      t.timestamps
    end
    add_index :kudos, [user_id, activity_id]
  end
end