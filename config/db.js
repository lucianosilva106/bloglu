if(process.env.NODE_ENV == "production"){
    module.exports = {mongoURI:"mongodb+srv://Lferreira1975:Feneme1975*@blogapp-db.dz6owgv.mongodb.net/?retryWrites=true&w=majority"}
}else{
    module.exports = {mongoURI:"mongodb://127.0.0.1/blogapp"}
}
