const express=require('express');
const knex=require('knex');
const bodyParser=require('body-parser');
const ReadReservations=require('./models/ReadReservations');
const CreateReservations=require('./models/CreateReservations');
const UpdateReservations=require('./models/UpdateReservations');
const DeleteReservations=require('./models/DeleteReservations');
const mysql=require('mysql');

// create connection with database
const db=mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'mountybackend'
});
const app=express();
app.use(express.json());


// create database-->mountybackend
// app.get('/createdb',(req,res)=>{
// 	let sql='CREATE DATABASE mountybackend';
// 	db.query(sql,(err,result)=>{
// 		if(err)
// 			throw err;
// 		console.log(result);
// 		res.send('database created');
// 	});
// });


// create table -->guests
// app.get('/createtable',(req,res)=>{
// 	let sql='CREATE TABLE guests(guest_id int AUTO_INCREMENT,name VARCHAR(50),email VARCHAR(50) ,address VARCHAR(40),city VARCHAR(40),state VARCHAR(40),phone int,check_in DATE,check_out DATE,PRIMARY KEY(guest_id))';
// 	db.query(sql,(err,result)=>{
// 		if(err)
// 			throw err;
// 		console.log(result);
// 		res.send('Table Created');
// 	});
// });


// create table -->reservations
// app.get('/createtable1',(req,res)=>{
// 	let sql='CREATE TABLE reservations(roomNumber int ,guest_id int REFERENCES guests(guest_id))';
// 	db.query(sql,(err,result)=>{
// 		if(err)
// 			throw err;
// 		console.log(result);
// 		res.send('Table Created');
// 	});
// });



// Insert Data Into Table
// app.get('/addpost1',(req,res)=>{
// 	let post={name:'Anki', email:'bishnoiankita23@gmail.com',address:'Lovely Professional University',city:'Phagwara',state:'Punjab',phone:8708922315,check_in:2-2-2020,check_out:3-2-2020};
// 	let sql='INSERT INTO guests SET ?';
// 	let query=db.query(sql,post,(err,result)=>{
// 		if(err)
// 			throw err;
// 		console.log(result);
// 		res.send('Data 1 added');
// 	});
// });



// app.get('/',function(req,res){
// 	res.render('homepage');
// });



// get all employees
// app.get('/emp',(req,res)=>{
// 	db.query('SELECT * from guests',(err,rows,fields)=>{
// 		if(!err)
// 			res.send(rows);
// 		else
// 			console.log(err);
// 	});
// });

app.post('/create',CreateReservations.handleCreate());
app.post('/delete',DeleteReservations.handleCreate());
app.post('/read',ReadReservations.handleCreate());
app.post('/update',UpdateReservations.handleCreate());


app.use(express.static('models'));
app.listen(3000,()=>{
	console.log('server started on port 3000');
});