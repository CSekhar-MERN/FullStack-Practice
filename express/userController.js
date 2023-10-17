// jshint esversion:6
const registerUser = (req, res) =>{

    // res.send(`<h1>Hello Mr.${req.body.name}  your data is stored to our database, Thankyou.</h1>`)
    // console.log(req.body)

    const userName = req.body.name;
    const userEmail = req.body.email;
    const userPassword = req.body.password;

    res.json({
        success: true,
        name: userName,
        email: userEmail,
        password: userPassword,
    });
};
module.exports = registerUser;