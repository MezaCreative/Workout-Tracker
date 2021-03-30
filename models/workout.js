const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// dd exercises to the most recent workout plan.


// Add new exercises to a new workout plan.
// View the combined weight of multiple exercises from the past seven workouts on the stats page.
// View the total duration of each workout from the past seven workouts on the stats page
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: {
        type: String,
        name: String,
        weight: Number,
        sets: Number,
        reps:Number,
        duration: Number,
        distance: Number     
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;