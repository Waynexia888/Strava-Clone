@kudos.each do |kudo|
    json.partial! 'kudo', kudo: kudo
end