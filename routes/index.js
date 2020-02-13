const router = require('express').Router();//return an object
const Usuario = require('../models/usuario');
const Solve = require('../models/solve');
var dateFormat = require('dateformat');

router.get('/', (req,res) =>{
   
    res.render('index',{
        pageTitle:'Cube timer Fusha'
    });

});

//Signup
router.get('/signup',(req,res) =>{

    res.render('signup',{
        pageTitle:'signup'
    });

});

//Register user
router.post('/signup',(req,res) => {

    console.log(req.body);

    const usuario = new Usuario({
        nombre: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });

    usuario.save((err,usuarioDB) => {
        
        if(err){
            console.log('Error saving user');
        }else{
            console.log(usuarioDB);
            res.redirect('/');
        }
    });
   
});

//Save solve time
router.post('/saveTime',(req,res) =>{

    const solve = new Solve({
        userId: '5e4330eea554c72f68bd8f6b',
        time: req.body.time,
    });
 
    solve.save((err,solveBD) => {
        if(err){
            console.log('Error saving solve');
        }else{
            console.log(solveBD);
        }
    })
    res.redirect('/');
});

//Solves detail
router.get('/profile/:id',(req,res) =>{

    const {id} = req.params;
    Solve.find({userId:id})
    .limit(5)
    .exec((err,solvesDB)=>{
        if(err){
            console.log('Error retreving data: ',err);
        }

        solvesDB.forEach(solve => {

           solve.time = convertTimeToString(solve.time);
           
        });
        
        res.render('profile',{
            pageTitle:'profile',
            texto: 'Solves information',
            solvesDB,
        });
    }); 
});

function convertTimeToString(time){
    var mins = Math.floor(time/10/60);
    var secs = Math.floor(time/10 % 60);
    var hours = Math.floor(time/10/60/60);
    var tenths = time % 10;
    if(mins < 10){
        mins = "0" + mins;
    }
    if(secs < 10){
        secs = "0" + secs;
    }

    return (mins > 0) ? mins + ":" + secs + ":" + tenths + "0" : secs + "." + tenths + "0";
}

module.exports = router;