json.activities do 
  @activities.each do |activity|
    json.set! activity.id do
      json.partial! 'api/activities/activities', activity: activity
    end
  end
end

json.comments do 
  @activities.each do |activity|
    activity.comments.each do |comment|
      json.partial! 'api/comments/comment', comment: comment
    end
  end
end

json.kudos do 
  @activities.each do |activity|
    activity.kudos.each do |kudo|
      json.partial! 'api/kudos/kudo', kudo: kudo
    end
  end
end