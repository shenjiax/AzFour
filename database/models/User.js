
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  gUserId: {
    type: Number,
    unique: true,
    required: true
  },
  gamePlayed: {
    type: Number,
    required: true
  },
  year: {
    type: Number,
  },
  educationalBackground: {
    type: String,
  },
  TypeOfEducation: {
    type: String,
  },
  AIMLGE: {
    type: Number,
  },
  profession: {
    type: Number,
  },
  Competence: {
    type: Number,
  },
  Predictability: {
    type: Number,
  },
  Dependability: {
    type: Number,
  },
   Reliability: {
    type: Number,
  },
   faith1: {
    type: Number,
  },
  trust1: {
    type: Number,
  },
  trust2: {
    type: Number,
  },
   trust3: {
    type: Number,
  },
  comments: {
    type: String,
  },
  userCreationTimePoint:Date, 
  decision: {
  	type :String, default:"agreed"
  }
})

UserSchema.statics.changeGamePlayedByUserId = function(gUserId){
	console.log("gUserId: "+gUserId); 
	this.find({"gUserId" : gUserId}, function(err,results){
		if (err){
			console.log("err: "+err);
		}else{
			var somebody = results[0]; 

		var previous = somebody.gamePlayed; 
		var current = previous+1;
		somebody.gamePlayed=current; 
		somebody.save();
		}
		 
	});
}


module.exports = mongoose.model('User', UserSchema)

