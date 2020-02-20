@routes.each do |route|
        json.set! route.id do 
        json.extract! route, :id, :user_id, :route_data, :title, :description
        end
end