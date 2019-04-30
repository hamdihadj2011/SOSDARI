const express=require('express');
const router=express.Router();
const {MongoClient,ObjectId} =require('mongodb');
const bodyParser =require('body-parser');
const assert =require('assert');

const app =express();
app.use(bodyParser.json());

const mongo_url='mongodb://localhost:27017'
const database='sosdari'

MongoClient.connect(mongo_url, { useNewUrlParser: true },(err,client)=>{
    assert.equal(err,null,'database connection failled') 
    const db=client.db(database)
//Create User in User Collection

app.post('/user/signup',(req,res)=>{
    let newcontact =req.body
    db.collection('User').insertOne(newcontact,(err,data)=>{
        if(err) res.send('can not add contact')
        else res.send(data)
    })
})

//Get all Users from db sosdari
app.get('/admin/users',(req,res)=>{
    
    db.collection('User').find().toArray((err,data)=>{
        if (err) res.send("Can not get Worker from the database")
        else res.send(data)
        
    })
})
//get a user by its id 
app.get('/User/:id', (req,res) => {
    let searchedpdid=req.params.id
    db.collection("User").findOne({_id: searchedpdid},(err,data)=>{
     if(err)   res.send("error: can not fetch products ")
     else res.send(data)})
    });

// Get all Workers from db to display in Admin Panel
app.get('/admin/workers',(req,res)=>{
    
    db.collection('Worker').find().toArray((err,data)=>{
        if (err) res.send("Can not get Worker from the database")
        else res.send(data)
        
    })
})
//Delete User From User Colletion

app.delete('/delete_user/:id', (req,res) => {
    let cntcaremove=req.params.id
    db.collection('User').findOneAndDelete({_id : cntcaremove},(err,data) =>{
        if(err) res.send('can not remove item')
        else res.send('User removed')
    })
})




// Worker Collection //

//Create Worker in Worker Solution 

app.post('/worker/signup',(req,res)=>{
    let newcontact =req.body
    db.collection('Worker').insertOne(newcontact,(err,data)=>{
        if(err) res.send('can not add contact')
        else res.send(data)
    })
})

//get all Worker from db
app.get('/search/',(req,res)=>{
    db.collection('Worker').find().toArray((err,data)=>{
        if (err) res.send("Can not get Worker from the database")
        else res.send(data)
        
    })
})

//Delete Worker from db

app.delete('/delete_worker/:id',(req,res)=>{
    let cntcaremove= req.params.id;
    db.collection('Worker').findOneAndDelete({_id:cntcaremove},(err,data)=>{
        if(err) res.send('cant remove item')
        else res.send('Worker removed')
    })
})

app.get('/admin/messages',(req,res)=>{
    
    db.collection('Messages').find().toArray((err,data)=>{
        if (err) res.send("Can not get Worker from the database")
        else res.send(data)
        
    })
})

 // check Admin 

 app.post('/admin',(req,res)=>{
    let body =req.body
    console.log(req.body)
    db.collection('Administartor').findOne({EmailAddressAdmin:{$eq:req.body.email}},(err,data)=>{
            if(err) res.send('User not found')
            else res.redirect('/admin/index')
    })
    // db.collection('Worker').insertOne(newcontact,(err,data)=>{
    //     if(err) res.send('can not add contact')
    //     else res.send(data)
    // })
})

// Add Msg to the database

app.post('/ContactUs',(req,res)=>{
    let msg =req.body
    console.log(msg)
    db.collection('Messages').insertOne(msg,(err,data)=>{
        if(err) res.send('can not add contact')
        else res.send(data)
    })
})
//Get Reclamation from the db


app.get('/admin/reclamation',(req,res)=>{
    db.collection('Reclamation').find().toArray((err,data)=>{
        if(err) res.send('cant get Reclamation')
        else res.send(data)
    })
})

app.get('/logut',(req,res)=>{
    req.logout()
})

/******************************************************* */

app.post('/newreclamation/:id', (req,res) => {
    let newcontact=req.body
    db.collection("Reclamation").insertOne(newcontact, (err,data)=>{
     if(err)   res.send("error: user can not add reclamation")
     else res.send(data)})
    }); 
    app.post('/Workernewreclamation/:id', (req,res) => {
        let newcontact=req.body
        db.collection("Reclamation").insertOne(newcontact, (err,data)=>{
         if(err)   res.send("error: worker can not add reclamation")
         else res.send(data)})
        }); 

        /********************* */
        app.post('/newappoinetement/:id', (req,res) => {
            let newappoinetement=req.body
            db.collection("Appointment").insertOne(newappoinetement, (err,data)=>{
             if(err)   res.send("error: user can not add appointement")
             else res.send(data)})
            }); 
//get the specified user profil
    app.get('/Userprofil/:id', (req,res) => {
        let searchedpdid=req.params.id
        db.collection("User").findOne({_id: searchedpdid},(err,data)=>{
         if(err)   res.send("error: can not fetch user ")
         else res.send(data)})
        });
 //get user info 
 app.get('/UserProfilUpdate/:id', (req,res) => {
    let searchedpdid=req.params.id
    db.collection("User").findOne({_id: searchedpdid},(err,data)=>{
     if(err)   res.send("error: can not fetch user ")
     else res.send(data)})
    });       
     
        //get the specified worker profil
    app.get('/WorkerProfil/:id', (req,res) => {
        let searchedpdid=req.params.id
        db.collection("Worker").findOne({_id: searchedpdid},(err,data)=>{
         if(err)   res.send("error: can not fetch worker ")
         else res.send(data)})
        });
        //get worker info 
        app.get('/WorkerProfilUpdate/:id', (req,res) => {
            let searchedpdid=req.params.id
            db.collection("Worker").findOne({_id: searchedpdid},(err,data)=>{
             if(err)   res.send("error: can not fetch worker ")
             else res.send(data)})
            });
        //get user appointement
    app.get('/UserAppointement/:id', (req,res) => {
        let searchedpdid=req.params.id
        db.collection("Appointment").find({UserID: searchedpdid}).toArray((err,data)=>{
            if(err)   res.send("error: can not fetch appointement for user")
            else res.send(data)})
        // db.collection("Appointment").find({UserID: searchedpdid},(err,data)=>{
        //  if(err)   res.send("error: can not fetch appointement ")
        //  else res.send(data)})
        });

        //get user appointement
        app.get('/WorkerAppointement/:id', (req,res) => {
            let searchedpdid=req.params.id
            db.collection("Appointment").find({WorkerID: searchedpdid}).toArray((err,data)=>{
                if(err)   res.send("error: can not fetch appointement for worker")
                else res.send(data)})
            // db.collection("Appointment").find({UserID: searchedpdid},(err,data)=>{
            //  if(err)   res.send("error: can not fetch appointement ")
            //  else res.send(data)})
            });
               //get the specified user review
    app.get('/UserReviews/:id', (req,res) => {
        let searchedpdid=req.params.id
        db.collection("Review").find({UserID: searchedpdid}).toArray((err,data)=>{
            if(err)   res.send("error: can not fetch review for user")
            else res.send(data)})
        });
                   //get the specified worker review
    app.get('/WorkerReviews/:id', (req,res) => {
        let searchedpdid=req.params.id
        db.collection("Review").find({WorkerID: searchedpdid}).toArray((err,data)=>{
            if(err)   res.send("error: can not fetch review for worker")
            else res.send(data)})
        });
//update a user info
app.put('/UserProfilUpdate/:id', (req,res) => {
let id=req.params.id
let moduser=req.body
db.collection("User").findOneAndUpdate({_id : id},{$set : {...moduser}},(err,data)=>{
 if(err)   res.send("error: can not modify user information ")
 else res.send("user is modified")})
});  
//update a worker info
app.put('/WorkerProfilUpdate/:id', (req,res) => {
let id=req.params.id
let moduser=req.body
db.collection("Worker").findOneAndUpdate({_id : id},{$set : {...moduser}},(err,data)=>{
 if(err)   res.send("error: can not modify worker information ")
 else res.send("worker is modified")})
}); 
 //delete a user
 app.delete('/UserprofilDelete/:id', (req,res) => {
    let usertoremove=req.params.id
    db.collection("User").findOneAndDelete({_id : usertoremove},(err,data)=>{
     if(err)   res.send("error: can not delet user ")
     else res.send("user is deleted")})
    }); 
//delete a worker
app.delete('/WorkerprofilDelete/:id', (req,res) => {
let usertoremove=req.params.id
db.collection("Worker").findOneAndDelete({_id : usertoremove},(err,data)=>{
 if(err)   res.send("error: can not delet worker")
 else res.send("worker is deleted")})
}); 

})

app.listen(3007,(err)=>{
    if(err) console.log('Cant Connect')
    else console.log('runing in port 3007....')
})