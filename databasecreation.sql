CREATE DATABASE myhomelibrary;
USE myhomelibrary;
CREATE TABLE owned(user_id VARCHAR(50), gid VARCHAR(15), firstEdition boolean, physical varchar(20),
					signedCopy boolean, specialEdition varchar(50),    
                    purchaseDate date, giftedBy VARCHAR(50), embossed boolean, paintedEdges VARCHAR(15),
					roomInHouse VARCHAR(50), boughtFrom varchar(50),
                    recomendedBy VARCHAR(50), dateAdded datetime, dateEdited datetime);
                                  
                 
CREATE TABLE toberead(user_id VARCHAR(50), gid VARCHAR(15), recomendedBy VARCHAR(50),
					dateAdded datetime, dateEdited datetime);

CREATE TABLE wishlist(user_id VARCHAR(50), gid VARCHAR(15), physical varchar(20), 
						recomendedBy VARCHAR(50), dateAdded datetime, dateEdited datetime);

CREATE TABLE readYes(dateStarted date, dateEnded date, user_id VARCHAR(50), gid VARCHAR(15), 
						dateAdded datetime, dateEdited datetime);

CREATE TABLE dnf(user_id VARCHAR(50), gid VARCHAR(15), physical varchar(20),
				notes tinytext, dateStarted date, dateEnded date);
                                
CREATE TABLE reviews(user_id VARCHAR(50), userName VARCHAR(50), gid VARCHAR(15), 
					starReview numeric, review mediumblob, viewerRating VARCHAR(15), triggerWarnings VARCHAR(30),
                    dateAdded datetime, dateEdited datetime);

CREATE TABLE genreTags(gid VARCHAR(15), genreTag VARCHAR(30));

INSERT INTO owned SET user_id = '', gid='', firstEdition= '', physical= '',
					signedCopy= '', specialEdition= '',    
                    purchaseDate= '', giftedBy= '', embossed= '', paintedEdges= '',
					roomInHouse= '', 
                    recomendedBy= '', dateAdded= '', dateEdited = '';


INSERT INTO toberead SET user_id = '', gid = '', recomendedBy = '',
					dateAdded = '', dateEdited = '';

INSERT INTO wishlist SET user_id = '', gid= '', physical = '', 
						recomendedBy= '', dateAdded= '', dateEdited = '';

INSERT INTO readYes SET dateStarted = '', dateEnded= '', user_id= '', gid= '', 
						dateAdded = '', dateEdited= '';

INSERT INTO dnf SET user_id = '', gid = '', physical = '',
				notes = '', dateStarted = '', dateEnded= '';
                                
INSERT INTO reviews SET user_id = '', userName= '', gid = '', 
					starReview= '', review= '', viewerRating = '', triggerWarnings= '',
                    dateAdded= '', dateEdited = '';

INSERT INTO genreTags SET gid = '', genreTag = '';


DELETE FROM dnf WHERE gid = '' and user_id = '';
DELETE FROM genretags WHERE gid = ''and user_id = '';
DELETE FROM owned WHERE gid = ''and user_id = '';
DELETE FROM readYes WHERE gid = ''and user_id = '';
DELETE FROM reviews WHERE gid = ''and user_id = '';
DELETE FROM toberead WHERE gid = ''and user_id = '';
DELETE FROM wishlist WHERE gid = ''and user_id = '';

UPDATE dnf SET user_id = '', gid = '', physical = '',
				notes = '', dateStarted = '', dateEnded= ''
                WHERE gid = ''and user_id = '';
                
UPDATE owned SET user_id = '', gid='', firstEdition= '', physical= '',
					signedCopy= '', specialEdition= '',    
                    purchaseDate= '', giftedBy= '', embossed= '', paintedEdges= '',
					roomInHouse= '', 
                    recomendedBy= '', dateAdded= '', dateEdited = ''
                    WHERE gid = ''and user_id = '';

UPDATE toberead SET user_id = '', gid = '', recomendedBy = '',
					dateAdded = '', dateEdited = ''
                    WHERE gid = ''and user_id = '';

UPDATE wishlist SET user_id = '', gid= '', physical = '', 
						recomendedBy= '', dateAdded= '', dateEdited = ''
                        WHERE gid = ''and user_id = '';

UPDATE readYes SET dateStarted = '', dateEnded= '', user_id= '', gid= '', 
						dateAdded = '', dateEdited= ''
                        WHERE gid = ''and user_id = '';


                                
UPDATE reviews SET user_id = '', userName= '', gid = '', 
					starReview= '', review= '', viewerRating = '', triggerWarnings= '',
                    dateAdded= '', dateEdited = '';

UPDATE genreTags SET gid = '', genreTag = '' WHERE gid = '' and genreTag = '';


SELECT * FROM dnf WHERE user_id = '';
SELECT * FROM genretags WHERE gid = '';
SELECT * FROM genretags WHERE genreTag = '';
SELECT * FROM owned WHERE user_id = ''; -- Add more
SELECT * FROM readYes WHERE user_id = '';
SELECT * FROM reviews WHERE user_id = '';
SELECT * FROM toberead WHERE user_id = '';
SELECT * FROM wishlist WHERE user_id = '';