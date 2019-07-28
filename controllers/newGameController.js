const Move = require('../database/models/Move')



module.exports = (req,res)=>{

	console.log("entering new game controller"); 
	console.log("req.session.gamePlayed: "+req.session.gamePlayed);
	var gGameIdd = req.session.gamePlayed; 
	console.log("gGameIdd: "+gGameIdd);
	var notFinishedGame=gGameIdd+1;
	Move.changeEffectiveByGameId(notFinishedGame);



	if (req.session.gamePlayed>=1 && req.session.gamePlayed<2){
		console.log("gGameIdd2.1: "+gGameIdd);
		
			
		
        return res.render('newGame',{
			skill_choice_c: "3",
			model_choice_c: "000010",
			skill_choice_u: "3",
			model_choice_u: "000010",
			gGameIdd: gGameIdd
	});

	}else if (req.session.gamePlayed>=2 ){
    	console.log("gGameIdd2.2: "+gGameIdd);
    	
			
		
        return res.render('newGame',{
        	skill_choice_c: "3",
			model_choice_c: "000003",
			skill_choice_u: "3",
			model_choice_u: "000003",
			gGameIdd: gGameIdd
		});
     }else{
     	console.log("gGameIdd2.3: "+gGameIdd);
        return res.render('newGame',{
        	gGameIdd: `${gGameIdd}`,
        	skill_choice_c: "3",
			model_choice_c: "000005",
			skill_choice_u: "3",
			model_choice_u: "000005"
			
		});

     }
}




