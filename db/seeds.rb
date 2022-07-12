# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user1 = User.create(username:"davenyoung88@gmail.com", first_name:"daven", last_name:"young", age: 31, phone_number: "123-456-1234", email: "davenyoung88@gmail.com", admin: true, password: "password");
user2 = User.create(username:"testuser@gmail.com", first_name:"test", last_name:"userone", age: 30, phone_number: "432-165-4321", email: "testuser@gmail.com", admin: false, password: "password");
user3 = User.create(username:"testusertwo@gmail.com", first_name:"test", last_name:"usertwo", age: 29, phone_number: "165-432-4321", email: "testusertwo@gmail.com", admin: false, password: "password");

workout1 = Workout.create(name: "Body Pump", date: "04 July 2022", description: "The Original Barbell Class, the ideal workout for anyone looking to get lean and fit - fast", video_url: "https://www.youtube.com/watch?v=05s5dtZyK2s", slots: 30);
workout2 = Workout.create(name: "Spinning Class", date: "05 July 2022" , description: "An indoor cycling class set to exciting music tracks and choreographed to provide an excellent workout and improve cardiovascular conditioning", video_url: "https://www.youtube.com/watch?v=TaEKvPL3MPI", slots: 30);
workout3 = Workout.create(name: "Butt Blast", date: "04 July 2022", description: "This lower body class focuses on giving you the best workout for you glutes with a range of fun equipment and workout styles.", video_url: "https://www.youtube.com/watch?v=OnTAZzMQ1jI", slots: 30);
workout4 = Workout.create(name: "Zumba", date: "05 July 2022" , description: "Zumba: An energizing dance fitness class featuring Latin and International music.", video_url: "https://www.youtube.com/watch?v=sf7BrE75st8", slots: 30);
workout5 = Workout.create(name: "HIIT", date: "05 July 2022" , description: "The class is a rigorous interval training sequence with high-intensity exercises. It builds cardiovascular fitness while improving muscular strength and endurance.", video_url: "https://www.youtube.com/watch?v=sf7BrE75st8", slots: 30);

signup1 = Signup.create(user_id: user1.id, workout_id: workout1.id);
signup2 = Signup.create(user_id: user1.id, workout_id: workout3.id);
signup3 = Signup.create(user_id: user2.id, workout_id: workout2.id);
signup4 = Signup.create(user_id: user2.id, workout_id: workout4.id);
signup5 = Signup.create(user_id: user3.id, workout_id: workout1.id);
signup6 = Signup.create(user_id: user3.id, workout_id: workout5.id);