  create database restaurante

  use restaurante


  CREATE TABLE Persons (
    PersonID int NOT NULL PRIMARY KEY auto_increment,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int
);

  CREATE TABLE Contacts (
    ContactID int NOT NULL PRIMARY KEY auto_increment,
    Name varchar(255) NOT NULL,
    PersonID int
);

ALTER TABLE Contacts
ADD FOREIGN KEY (PersonID) REFERENCES Persons(PersonID);

CREATE TABLE Orders (
    OrderID int NOT NULL PRIMARY KEY auto_increment,
    OrderNumber int NOT NULL,
    PersonID int
);

ALTER TABLE Orders
ADD FOREIGN KEY (PersonID) REFERENCES Persons(PersonID);

insert into Persons(LastName, FirstName, Age)
values('zapata', 'yulian', 32),
       ('zapata', 'andres', 11),
       ('reales', 'andres', 19)

 select *
 FROM  Persons

  select *
 FROM  Orders

insert into Orders(OrderNumber , PersonID)
values(15, 3);

insert into Contacts (Name , PersonID)
values("yahoo.com", 2);

SELECT *
FROM Contacts;

select o.OrderNumber, p.FirstName, p.LastName, p.Age, c.Name contacto
from Orders as o
left join Persons as p using(PersonID)
left join Contacts as c using(PersonID)
WHERE  p.Age >= 19 and c.Name is not null
ORDER by p.FirstName
limit 10;


CREATE INDEX index_ordernumber
ON Orders(OrderNumber)
