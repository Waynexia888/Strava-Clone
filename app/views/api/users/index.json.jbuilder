@users.each do |user|
  json.users do
    json.set! user.id do
      json.activities_count user.workouts.count
      json.routes_count user.routes.count
      json.partial! 'api/users/user', user: user
    end
  end
end

