const login = async(req,res) => {
    res.send('Fake Login/Register/SignUp Route')
}

const dashboard = async (req,res) => {
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg: `Hello, john Doe `, secret : `Here is your authorised data, youre lucky number is ${luckyNumber}`})
}

module.exports = { 
    login, dashboard
}