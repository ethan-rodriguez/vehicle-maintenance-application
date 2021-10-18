Models

User ------------------------------------< Vehicle ------------------------< Routine
 :has_many :vehicles                        belongs_to :user                  belongs_to :vehicle
 :has_many :routines, through :vehicle      has_many :routines                has_many :users, through :vehicles


 Tables Needed:

 User
 -username
 -password_digest
 -email

 Vehicle
 -year
 -make
 -model
 -vin
 -mileage
 -vehicle_notes
 -image_url
 -user_id

 Routine
 -routine
 -vehicle_id


 User stories:
    -users should be able to log in and have thier own vehicles separate from other users (user must serialize vehicle and routine info) (will have to fetch vehicles from /me route) DONE!
    -once logged in users are taken to thier garage where they can add a vehicle to the garage, or view currently owned vehicles DONE!
    -users can click on a vehicle to see its maintenance history.
    -users can add or edit a maintenance history
    -users will have full crud of vehicles and maintenance history
    -users will be able to view entire vehicle maintenance history for each vehicle