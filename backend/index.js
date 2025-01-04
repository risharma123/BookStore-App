const express=require("express");
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

require('dotenv').config();
const PORT=process.env.PORT||5000;

const routes=require('./Routes/UserBookStoreRoutes');
const routesBook=require('./Routes/BookstoreRouter');
const routesFavourate=require('./Routes/FavourateRouter');
const routesCart=require('./Routes/CartRouter');
const routesOrder=require('./Routes/OrderRouter');
app.use(express.json());
app.use(cors());
 app.use(bodyParser.json());

mongoose.connect(process.env.mongoDB_URL).then(()=>{
    console.log(`database is connected `)
}).catch((err)=>{
    console.log(err);
})
app.get('/',(req,res)=>{
    res.send("data is store");
});

app.use('/bookstore',routes);
app.use('/bookstore/book',routesBook);
app.use('/bookstore/fav',routesFavourate);
app.use('/bookstore/cart',routesCart);
app.use('/bookstore/order',routesOrder);


app.listen(PORT,()=>{
    console.log(`server start at port ${PORT}`);
})