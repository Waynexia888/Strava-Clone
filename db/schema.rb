# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_01_15_094406) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activities", force: :cascade do |t|
    t.float "distance"
    t.time "duration"
    t.integer "elevation"
    t.string "sport", null: false
    t.datetime "date_and_time"
    t.string "title", null: false
    t.text "description"
    t.string "exertion"
    t.integer "route_id"
    t.integer "athlete_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["athlete_id"], name: "index_activities_on_athlete_id"
    t.index ["route_id"], name: "index_activities_on_route_id"
  end

  create_table "locations", force: :cascade do |t|
    t.float "lat", null: false
    t.float "lng", null: false
    t.integer "route_id", null: false
    t.integer "ord", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "routes", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "title", null: false
    t.integer "type"
    t.string "description"
    t.date "date"
    t.datetime "start_time"
    t.datetime "end_time"
    t.float "distance"
    t.float "elevation"
    t.string "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "route_data"
    t.index ["location"], name: "index_routes_on_location"
    t.index ["type"], name: "index_routes_on_type"
    t.index ["user_id"], name: "index_routes_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "username"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
