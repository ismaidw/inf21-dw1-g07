create database filmes_tab;
use filmes_tab;
create table Filme(id int primary key,
					 title varchar(70),
                     release_year int,
                     language varchar(45),
                     lenght int,
                     rating double);


INSERT INTO Filme (id,title,release_Year,language,lenght,rating) VALUES (1,'The Shawshank Redemption',1994,'Inglês',142,9.3);
INSERT INTO Filme (id,title,release_Year,language,lenght,rating) VALUES (2,'The Godfather',1972,'Inglês',175,9.2);
INSERT INTO Filme (id,title,release_Year,language,lenght,rating) VALUES (3,'The Godfather: Part II',1974,'Inglês',202,9);
INSERT INTO Filme (id,title,release_Year,language,lenght,rating) VALUES (4,'The Dark Knight',2008,'Inglês',152,9);
INSERT INTO Filme (id,title,release_Year,language,lenght,rating) VALUES (5,'12 Angry Men',1957,'Inglês',96,9);
INSERT INTO Filme (id,title,release_Year,language,lenght,rating) VALUES (6,'Schindler\'s List',1993,'Inglês',195,8.9);
INSERT INTO Filme (id,title,release_Year,language,lenght,rating) VALUES (7,'The Lord of the Rings: The Return of the King',2003,'Inglês',201,8.9);
INSERT INTO Filme (id,title,release_Year,language,lenght,rating) VALUES (8,'Pulp Fiction',1994,'Inglês',154,8.9);
INSERT INTO Filme (id,title,release_Year,language,lenght,rating) VALUES (9,'Il buono, il brutto, il cattivo',1996,'Inglês',161,8.8);
INSERT INTO Filme (id,title,release_Year,language,lenght,rating) VALUES (10,'The Lord of the Rings: The Fellowship of the Ring',2001,'Inglês',178,8.8);
INSERT INTO Filme (id,title,release_Year,language,lenght,rating) VALUES (11,'Fight Club',1999,'Inglês',139,8.8);
INSERT INTO Filme (id,title,release_Year,language,lenght,rating) VALUES (12,'Forrest Gump',1994,'Inglês',142,8.8);
INSERT INTO Filme (id,title,release_Year,language,lenght,rating) VALUES (13,'Inception',2010,'Inglês',148,8.8);
INSERT INTO Filme (id,title,release_Year,language,lenght,rating) VALUES (14,'The Lord of the Rings: The Two Towers',2002,'Inglês',179,8.7);
INSERT INTO Filme (id,title,release_Year,language,lenght,rating) VALUES (15,'Star Wars: Episode V - The Empire Strikes Back',1980,'Inglês',124,8.7);
INSERT INTO Filme (id,title,release_Year,language,lenght,rating) VALUES (16,'Matrix',1999,'Inglês',136,8.7);
INSERT INTO Filme (id,title,release_Year,language,lenght,rating) VALUES (17,'Spider-Man: No Way Home',2021,'Inglês',148,8.6);
INSERT INTO Filme (id,title,release_Year,language,lenght,rating) VALUES (18,'Goodfellas',1990,'Inglês',146,8.7);
INSERT INTO Filme (id,title,release_Year,language,lenght,rating) VALUES (19,'One Flew Over the Cuckoo\'s Nest',1975,'Inglês',133,8.7);
INSERT INTO Filme (id,title,release_Year,language,lenght,rating) VALUES (20,'Shichinin no samurai',1954,'Japonês',207,8.6);
INSERT INTO Filme (id,title,release_Year,language,lenght,rating) VALUES (21,'Se7en',1995,'Inglês',127,8.6);
INSERT INTO Filme (id,title,release_Year,language,lenght,rating) VALUES (22,'The Silence of the Lambs',1991,'Inglês',118,8.6);
INSERT INTO Filme (id,title,release_Year,language,lenght,rating) VALUES (23,'It\'s a Wonderful Life',1946,'Inglês',130,8.6);
INSERT INTO Filme (id,title,release_Year,language,lenght,rating) VALUES (24,'City of God',2002,'Inglês',130,8.6);
INSERT INTO Filme (id,title,release_Year,language,lenght,rating) VALUES (25,'La vita è bella',1997,'Italiano',114,8.6);
INSERT INTO Filme (id,title,release_Year,language,lenght,rating) VALUES (26,'Saving Private Ryan',1998,'Inglês',169,8.6);
INSERT INTO Filme (id,title,release_Year,language,lenght,rating) VALUES (27,'Star Wars: Episode IV - A New Hope',1977,'Inglês',121,8.6);
INSERT INTO Filme (id,title,release_Year,language,lenght,rating) VALUES (28,'Interstellar',2014,'Inglês',169,8.6);
INSERT INTO Filme (id,title,release_Year,language,lenght,rating) VALUES (29,'Sen to Chihiro no kamikakushi',2001,'Japonês',125,8.6);
INSERT INTO Filme (id,title,release_Year,language,lenght,rating) VALUES (30,'The Green Mile',1999,'Inglês',189,8.6);

create table Receita(id int primary key,
					 pais varchar(70),
                     valor int,
                     filmeId,
                     FOREIGN KEY (filmeId) REFERENCES Filme(id)
                     );

INSERT INTO Receita (id, pais, valor, filmeId) VALUES (1, 'USA', 100000, 1);
        