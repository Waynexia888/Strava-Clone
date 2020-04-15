class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :activity_id, null: false, indexed: true
      t.integer :user_id, null: false, indexed: true
      t.timestamps
    end
  end
end
