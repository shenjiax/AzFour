const User = require('../database/models/User')
var gUserId=1; 


module.exports = (req,res, next)=>{

	console.log("entering CREATE USER controller"); 

	if (!req.session.userId){
		console.log("session no userId");
		req.session.userId=gUserId;
		if (!req.session.gamePlayed){
			req.session.gamePlayed = parseInt(0); 
		}
		
		gUserId++;
		console.log("session userId assigned to: "+req.session.userId);

			
	User.create({
  			gUserId:req.session.userId,
  			userCreationTimePoint: new Date(),
  			gamePlayed: 0

			}, (error, user) => {console.log("error: "+error);
       			 console.log("type of user: "+ typeof user)
       			 if(user){
        			 //res.status(200).send(user);
       			     //res.end();
       			     console.log(JSON.stringify(user));
      			  }else{
       			     var error = {error:error};
       			     console.log("typeof error: "+typeof error);
       			     res.status(500).send(error);
       			     //res.end();
       			     return res.redirect('/')
       			 }
       			 next();
		}) 

}else{
next();
}


	
}