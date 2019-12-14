var express = require("express");
var router = express.Router();
var fs = require('fs');
var userData = {}
var sensorData = {}


router.get("/getAllDetails", (req, res) => {
    console.log('in');
    
    try {
        if (fs.existsSync('./login-models/sensor-data.json')) {
            sensorData = JSON.parse(fs.readFileSync('./login-models/sensor-data.json'));
            res.send(sensorData);
        } else {
            res.status(204).send();
        }

    } catch (error) {
        console.log(error);
        res.status(200).send({ message: "Failed getuserHealthInfo " });
    }
});

//login route
router.post("/userLogin", (req, res) => {
    var loginData = req.body;
    //console.log("Login Data : ", loginData);
    try {
        if (fs.existsSync('./login-models/user-credential-data.json')) {
            userData = JSON.parse(fs.readFileSync('./login-models/user-credential-data.json.json'));
            
            if(userData.User_info.Email == loginData.email && userData.User_info.Password == loginData.password ){
                console.log("user data obj :", userData)
                res.send(userData);
            }else{
                res.status(200).send("Invalid Username Or Password");
            }
        } else {
            res.status(204).send();
        }

    } catch (error) {
        console.log(error);
        res.status(200).send({ message: "Failed userLogin " });
    }
});


router.get("/userLogout/:id", async (req, res) => {
    var logoutData = req.params;
    console.log("Logout Data : ", logoutData);
    // enhancements here..
    res.status(200).send()
});



//Export auth
module.exports = router;
