class AddColumnToRoutes < ActiveRecord::Migration[5.2]
  def change
    add_column :routes, :route_data, :string
  end
end
