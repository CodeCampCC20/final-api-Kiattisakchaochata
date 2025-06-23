const error = (err, req, res, next) => {

    console.log(err.message)

    res 
    .status(500 || err.code)
    .json({message: error.message || "Somthing Wrong"})
}

export default error