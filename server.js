const mysql = require('mysql2')
const morgan = require('morgan')
const express = require('express')
const cors = require('cors')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'myhomelibrary'
});

db.connect((err) =>{
    if(err){throw err};
    console.log("Connection to MySQL successful")
});


const app = express();

app.use(cors());
app.use(morgan('dev'))
app.use(express.json())



//INSERT
app.get('/insertOwned', (req, res) => {
    let owned = `user_id = '${req.body.user_id}', gid='${req.body.gid}', firstEdition= ${req.body.firstEdition}, physical= '${req.body.physical}',
                signedCopy= ${req.body.signedCopy}, specialEdition= '${req.body.specialEdition}',
                purchaseDate= '${req.body.purchaseDate}', giftedBy= '${req.body.giftedBy}', embossed= ${req.body.embossed},
                paintedEdges= '${req.body.paintedEdges}', roomInHouse= '${req.body.roomInHouse}',
                recomendedBy= '${req.body.recomendedBy}', dateAdded= '${req.body.dateAdded}', dateEdited = '${req.body.dateEdited}', boughtFrom = '${req.body.boughtFrom}'`
    let myQuery = `INSERT INTO owned SET ${owned}`;
    db.query(myQuery, (err, result) => {
        if (err){
            console.log('this is the req.body', req.body)
            console.log('line 37' , myQuery)
            throw err;
        }
        console.log(result)
        res.send('Data updated')
   })
})


//INSERT
app.get('/insertTBR', (req, res) => {
    let toberead = `user_id = '${req.body.user_id}', gid = '${req.body.gid}', recomendedBy = '${req.body.recomendedBy}', 
                dateAdded = '${req.body.dateAdded}', dateEdited = '${req.body.dateEdited}'`
    let myQuery = `INSERT INTO toberead SET ${toberead}`;
    db.query(myQuery, (err, result) => {
        if (err){
            console.log(myQuery)
            throw err;
        }
        console.log(result)
        res.send('Data updated')
    })
})


//INSERT
app.get('/insertWishlist', (req, res) => {
    let wishlist = `user_id = '${req.body.user_id}', gid= '${req.body.user_id}', physical = '${req.body.physical}', 
				recomendedBy= '${req.body.recomendedBy}', dateAdded= '${req.body.dateAdded}', dateEdited = '${req.body.dateEdited}'`
    let myQuery = `INSERT INTO wishlist SET ${wishlist}`;
    db.query(myQuery, (err, result) => {
        if (err){
            console.log(myQuery)
            throw err;
        }
        console.log(result)
        res.send('Data updated')
    })
})

//INSERT
app.get('/insertReadYes', (req, res) => {
    let readYes = `dateStarted = '${req.body.dateStarted}', dateEnded= '${req.body.dateEnded}', user_id= '${req.body.user_id}', gid= '${req.body.gid}', 
					dateAdded = '${req.body.dateAdded}', dateEdited= '${req.body.dateEdited}'`
    let myQuery = `INSERT INTO readYes SET ${readYes}`;
    db.query(myQuery, (err, result) => {
        if (err){
            console.log(myQuery)
            throw err;
        }
        console.log(result)
        res.send('Data updated')
    })
})

  //INSERT
app.get('/insertDNF', (req, res) => {
    let dnf = `user_id = '${req.body.user_id}', gid = '${req.body.gid}', physical = '${req.body.physical}',
				notes = '${req.body.notes}', dateStarted = '${req.body.dateStarted}', dateEnded= '${req.body.dateEnded}'`
    let myQuery = `INSERT INTO dnf SET ${dnf}`;
    db.query(myQuery, (err, result) => {
        if (err){
            console.log(myQuery)
            throw err;
        }
        console.log(result)
        res.send('Data updated')
    })
})                              

//INSERT
app.get('/insertReview', (req, res) => {
    let reviews = `user_id = '${req.body.user_id}', userName= '${req.body.userName}', gid = '${req.body.gid}', 
				starReview= '${req.body.starReview}', review= '${req.body.review}', viewerRating = '${req.body.viewerRating}', triggerWarnings= '${req.body.triggerWarnings}',
                    dateAdded= '${req.body.dateAdded}', dateEdited = '${req.body.dateEdited}'`
    let myQuery = `INSERT INTO reviews SET ${reviews}`;
    db.query(myQuery, (err, result) => {
        if (err){
            console.log(myQuery)
            throw err;
        }
        console.log(result)
        res.send('Data updated')
    })
})

//INSERT
app.get('/insertGenre', (req, res) => {
    let genreTags = `gid = '${req.body.gid}', genreTag = '${req.body.genreTags}'`
    let myQuery = `INSERT INTO genreTags SET ${genreTags}`;
    db.query(myQuery, (err, result) => {
        if (err){
            console.log(myQuery)
            throw err;
        }
        console.log(result)
        res.send('Data updated')
    })
})

// DELETE FROM dnf WHERE gid = '' and user_id = '';
//DELETE
app.get('/deleteDNF/:gid', (req, res) => {
    let myQuery = `DELETE FROM dnf WHERE user_id = '${req.params.user_id}' and gid= '${req.params.gid}'`;
    db.query(myQuery, (err, result) => {
        if (err){
            throw err;
        }
        console.log(result)
        res.send("Delete Successful")
    })
})
// DELETE FROM genretags WHERE gid = ''and user_id = '';
app.get('/deleteGenre/:gid', (req, res) => {
    let myQuery = `DELETE FROM genretags WHERE user_id = '${req.params.user_id}' and gid= '${req.params.gid}'`;
    db.query(myQuery, (err, result) => {
        if (err){
            throw err;
        }
        console.log(result)
        res.send("Delete Successful")
    })
})
// DELETE FROM owned WHERE gid = ''and user_id = '';
app.get('/deleteOwned/:gid', (req, res) => {
    let myQuery = `DELETE FROM owned WHERE user_id = '${req.params.user_id}' and gid= '${req.params.gid}'`;
    db.query(myQuery, (err, result) => {
        if (err){
            throw err;
        }
        console.log(result)
        res.send("Delete Successful")
    })
})
// DELETE FROM readYes WHERE gid = ''and user_id = '';
app.get('/deletereadYes/:gid', (req, res) => {
    let myQuery = `DELETE FROM readYes WHERE user_id = '${req.params.user_id}' and gid= '${req.params.gid}'`;
    db.query(myQuery, (err, result) => {
        if (err){
            throw err;
        }
        console.log(result)
        res.send("Delete Successful")
    })
})
// DELETE FROM reviews WHERE gid = ''and user_id = '';
app.get('/deleteReviews/:gid', (req, res) => {
    let myQuery = `DELETE FROM reviews WHERE user_id = '${req.params.user_id}' and gid= '${req.params.gid}'`;
    db.query(myQuery, (err, result) => {
        if (err){
            throw err;
        }
        console.log(result)
        res.send("Delete Successful")
    })
})
// DELETE FROM toberead WHERE gid = ''and user_id = '';
app.get('/deleteTBR/:gid', (req, res) => {
    let myQuery = `DELETE FROM toberead WHERE user_id = '${req.params.user_id}' and gid= '${req.params.gid}'`;
    db.query(myQuery, (err, result) => {
        if (err){
            throw err;
        }
        console.log(result)
        res.send("Delete Successful")
    })
})
// DELETE FROM wishlist WHERE gid = ''and user_id = '';
app.get('/deletewishlist/:gid', (req, res) => {
    let myQuery = `DELETE FROM wishlist WHERE user_id = '${req.params.user_id}' and gid= '${req.params.gid}'`;
    db.query(myQuery, (err, result) => {
        if (err){
            throw err;
        }
        console.log(result)
        res.send("Delete Successful")
    })
})

// UPDATE dnf SET user_id = '', gid = '', physical = '',
// 				notes = '', dateStarted = '', dateEnded= ''
//                 WHERE gid = ''and user_id = '';
//UPDATE
app.get('/updateDNF/:gid', (req, res) => {
    let dnf = `user_id = '${req.body.user_id}', gid = '${req.body.gid}', physical = '${req.body.physical}',
				notes = '${req.body.notes}', dateStarted = '${req.body.dateStarted}', dateEnded= '${req.body.dateEnded}'`
    let myQuery = `UPDATE dnf SET ${dnf} WHERE user_id = '${req.params.user_id}' and gid= '${req.params.gid}' `;
    db.query(myQuery, (err, result) => {
        if (err){
            throw err;
        }
        console.log(result)
        res.send(result)
    })
})
                
// UPDATE owned SET user_id = '', gid='', firstEdition= '', physical= '',
// 					signedCopy= '', specialEdition= '',    
//                     purchaseDate= '', giftedBy= '', embossed= '', paintedEdges= '',
// 					roomInHouse= '', 
//                     recomendedBy= '', dateAdded= '', dateEdited = ''
//                     WHERE gid = ''and user_id = '';
app.get('/updateOwned/:gid', (req, res) => {
    let owned = `user_id = '${req.body.user_id}', gid='${req.body.gid}', firstEdition= '${req.body.firstEdition}', physical= '${req.body.physical}',
					signedCopy= '${req.body.signedCopy}', specialEdition= '${req.body.specialEdition}',    
                    purchaseDate= '${req.body.purchaseDate}', giftedBy= '${req.body.giftedBy}', embossed= '${req.body.embossed}', 
                    paintedEdges= '${req.body.paintedEdges}', roomInHouse= '${req.body.roomInHouse}', 
                    recomendedBy= '${req.body.recomendedBy}', dateAdded= '${req.body.dateAdded}', dateEdited = '${req.body.dateEdited}', boughtFrom = '${req.body.boughtFrom} `
    let myQuery = `UPDATE owned SET ${owned} WHERE user_id = '${req.params.user_id}' and gid= '${req.params.gid}' `;
    db.query(myQuery, (err, result) => {
        if (err){
            throw err;
        }
        console.log(result)
        res.send(result)
    })
})
         

// UPDATE toberead SET user_id = '', gid = '', recomendedBy = '',
// 					dateAdded = '', dateEdited = ''
//                     WHERE gid = ''and user_id = '';
app.get('/updateTBR/:gid', (req, res) => {
    let toberead = `user_id = '${req.body.user_id}', gid = '${req.body.gid}', recomendedBy = '${req.body.recomendedBy}', 
                dateAdded = '${req.body.dateAdded}', dateEdited = '${req.body.dateEdited}'`
    let myQuery = `UPDATE tbr SET ${toberead} WHERE user_id = '${req.params.user_id}' and gid= '${req.params.gid}' `;
    db.query(myQuery, (err, result) => {
        if (err){
            throw err;
        }
        console.log(result)
        res.send(result)
    })
})
         

// UPDATE wishlist SET user_id = '', gid= '', physical = '', 
// 						recomendedBy= '', dateAdded= '', dateEdited = ''
//                         WHERE gid = ''and user_id = '';
app.get('/updateWL/:gid', (req, res) => {
    let wishlist = `user_id = '${req.body.user_id}', gid= '${req.body.user_id}', physical = '${req.body.physical}', 
				recomendedBy= '${req.body.recomendedBy}', dateAdded= '${req.body.dateAdded}', dateEdited = '${req.body.dateEdited}'`
    let myQuery = `UPDATE wishlist SET ${wishlist} WHERE user_id = '${req.params.user_id}' and gid= '${req.params.gid}' `;
    db.query(myQuery, (err, result) => {
        if (err){
            throw err;
        }
        console.log(result)
        res.send(result)
    })
})
         

// UPDATE readYes SET dateStarted = '', dateEnded= '', user_id= '', gid= '', 
// 						dateAdded = '', dateEdited= ''
//                         WHERE gid = ''and user_id = '';
app.get('/updateRead/:gid', (req, res) => {
    let readYes = `dateStarted = '${req.body.dateStarted}', dateEnded= '${req.body.dateEnded}', user_id= '${req.body.user_id}', gid= '${req.body.gid}', 
					dateAdded = '${req.body.dateAdded}', dateEdited= '${req.body.dateEdited}'`
    let myQuery = `UPDATE readYes SET ${readYes} WHERE user_id = '${req.params.user_id}' and gid= '${req.params.gid}' `;
    db.query(myQuery, (err, result) => {
        if (err){
            throw err;
        }
        console.log(result)
        res.send(result)
    })
})
         

                                
// UPDATE reviews SET user_id = '', userName= '', gid = '', 
// 					starReview= '', review= '', viewerRating = '', triggerWarnings= '',
//                     dateAdded= '', dateEdited = '';
app.get('/updateReviews/:gid', (req, res) => {
    let reviews = `user_id = '${req.body.user_id}', userName= '${req.body.userName}', gid = '${req.body.gid}', 
				starReview= '${req.body.starReview}', review= '${req.body.review}', viewerRating = '${req.body.viewerRating}', triggerWarnings= '${req.body.triggerWarnings}',
                    dateAdded= '${req.body.dateAdded}', dateEdited = '${req.body.dateEdited}'`
    let myQuery = `UPDATE reviews SET ${reviews} WHERE user_id = '${req.params.user_id}' and gid= '${req.params.gid}' `;
    db.query(myQuery, (err, result) => {
        if (err){
            throw err;
        }
        console.log(result)
        res.send(result)
    })
})
         

// UPDATE genreTags SET gid = '', genreTag = '' WHERE gid = '' and genreTag = '';
app.get('/updateGenre/:gid', (req, res) => {
    let genreTags = `gid = '${req.body.gid}', genreTag = '${req.body.genreTags}'`
    let myQuery = `UPDATE genre SET ${genreTags} WHERE genreTag = '${req.params.genreTag}' and gid= '${req.params.gid}' `;
    db.query(myQuery, (err, result) => {
        if (err){
            throw err;
        }
        console.log(result)
        res.send(result)
    })
})
         

// SELECT * FROM dnf WHERE user_id = '';
//GET
app.get('/getDNF/:user_id', (req, res) => {
    let myQuery = `SELECT * FROM dnf WHERE user_id = ${req.params.user_id} `;
    db.query(myQuery, (err, result) => {
        if (err){
            throw err;
        }
        res.send(result)
    })
})
// SELECT * FROM owned WHERE user_id = ''; -- Add more
//GET
app.get('/getOwned/:user_id', (req, res) => {
    let myQuery = `SELECT * FROM owned WHERE user_id = ${req.params.user_id}`;
    db.query(myQuery, (err, result) => {
        if (err){
            throw err;
        }
        res.send(result)
    })
})
// SELECT * FROM readYes WHERE user_id = '';
//GET
app.get('/getreadYes/:user_id', (req, res) => {
    let myQuery = `SELECT * FROM readYes WHERE user_id = ${req.params.user_id}`;
    db.query(myQuery, (err, result) => {
        if (err){
            throw err;
        }
        res.send(result)
    })
})
// SELECT * FROM reviews WHERE user_id = '';
//GET
app.get('/getReviews/:user_id', (req, res) => {
    let myQuery = `SELECT * FROM reviews WHERE user_id = ${req.params.user_id}`;
    db.query(myQuery, (err, result) => {
        if (err){
            throw err;
        }
        res.send(result)
    })
})
// SELECT * FROM toberead WHERE user_id = '';
//GET
app.get('/getTBR/:user_id', (req, res) => {
    let myQuery = `SELECT * FROM toberead WHERE user_id = ${req.params.user_id}`;
    db.query(myQuery, (err, result) => {
        if (err){
            throw err;
        }
        res.send(result)
    })
})
// SELECT * FROM wishlist WHERE user_id = '';
//GET
app.get('/getWishlist/:user_id', (req, res) => {
    let myQuery = `SELECT * FROM wishlist WHERE user_id = ${req.params.user_id}`;
    db.query(myQuery, (err, result) => {
        if (err){
            throw err;
        }
        res.send(result)
    })
})


// SELECT * FROM genretags WHERE gid = '';
//GET
app.get('/getGenre/:gid', (req, res) => {
    let myQuery = `SELECT * FROM genretags WHERE gid = ${req.params.gid}`;
    db.query(myQuery, (err, result) => {
        if (err){
            throw err;
        }
        res.send(result)
    })
})
// SELECT * FROM genretags WHERE genreTag = '';
//GET
app.get('/getGenreTag/:genreTag', (req, res) => {
    let myQuery = `SELECT * FROM genretags WHERE genreTag = ${req.params.genreTag}`;
    db.query(myQuery, (err, result) => {
        if (err){
            throw err;
        }
        res.send(result)
    })
})










const PORT = 9000
app.listen(PORT, () => { 
    console.log(`The App is listening on port ${PORT}`)
});



