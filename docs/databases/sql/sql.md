---
sidebar_position: 1
---

# SQL

```sql
// create database
CREATE DATABASE ORG ;
SHOW DATABASES; 
USE ORG ;

CREATE DATABSE IF NOT EXIST ORG; 

DROP DATABASE testDB;

SHOW TABLES;

//CREATE TABLE
CREATE TABLE WORKER(
WORKER_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,
FIRST_NAME CHAR(25),
JOINING_DATE DATETIME
);

//INSERT INTO TABLE
INSERT INTO WORKER (WORKER_ID , FIRST_NAME, JOINING_DATE ) 
VALUES (1, 'ISHA' , '2023-01-03'); // VALUE WITH COLUMN NAME 

//OR Inserting Multiple Rows
INSERT INTO WORKER 
VALUES(1, 'ISHA', '2020-03-24'), 
      (2, 'ANSH', '2023-01-03'),
      (3, 'ABHI', '2012-04-02');

// Creating a Copy of a Table along with values
CREATE TABLE WORKER_COPY LIKE WORKER;
INSERT INTO WORKER_COPY SELECT * FROM WORKER;

// Updating a Single Row:
UPDATE WORKER
SET FIRST_NAME = 'Updated Name'
WHERE WORKER_ID = 1;

// Updating Multiple Rows -> We can update multiple row with value
UPDATE WORKER
SET JOINING_DATE = '2023-07-10'
WHERE WORKER_ID IN (2, 3);

// Using Subqueries in Updates -> This will update value for other table 
UPDATE WORKER
SET FIRST_NAME = (
    SELECT FIRST_NAME
    FROM OTHER_TABLE
    WHERE WORKER_ID = 1
)
WHERE WORKER_ID = 2;

// Deleting Rows
DELETE FROM WORKER
WHERE WORKER_ID = 1;

//Drop Table
DROP TABLE table_name;

//SELECT STATEMENT  
SELECT * FROM WORKER;
//OR
SELECT COLUMN1, CLOUMN2 FROM TABLE__NAME; 

//UPDATE TABLE
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
EG - UPDATE Customers
SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
WHERE CustomerID = 1;

//ALTER TABLE- used to add, delete, or modify columns in an existing table.
ALTER TABLE table_name
ADD column_name datatype;
EG- ALTER TABLE Customers
ADD Email varchar(255);

ALTER TABLE table_name
DROP COLUMN column_name;

//FOREIGN KEY
CREATE TABLE Orders (
    OrderID int NOT NULL,
    OrderNumber int NOT NULL,
    PersonID int,
    PRIMARY KEY (OrderID),
    FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
);

CREATE TABLE EMPLOYEE( EMPLOYEE_ID INT NOT NULL , EMPLOYEE_TYPE INT NOT NULL, WORKER_ID INT,  EMPLOYEE_NAME CHAR(20), PRIMARY KEY(EMPLOYEE_ID), foreign key (WORKER_ID) REFERENCES WORKER(WORKER_ID) )

//DISTINCT STATEMENT
SELECT DISTINCT COLUMN1, CLOUMN 2 FROM TABLE_NAME;

//WHERE CLAUSE
SELECT COLUMN1 FROM TABLE_NAME WHERE CONDITION;
//AND
SELECT COLUMN1 FROM TABLE_NAME WHERE CONDITION1 AND CONDITION2;
/OR
SELECT COLUMN1 FROM TABLE_NAME WHERE CONDITION1 OR CONDITION2 ;
//NOT
SELECT COLUMN1 FROM TABLE_NAME WHERE NOT CONDITION;

EG- SELECT * FROM Customers
WHERE Country='Germany' AND City='Berlin';

//ORDER BY
SELECT column1, column2, ...
FROM table_name
ORDER BY column1, column2, ... ASC|DESC;

//IS NULL
SELECT column_names
FROM table_name
WHERE column_name IS NULL;

//IS NOT NULL
SELECT column_names
FROM table_name
WHERE column_name IS NOT NULL;

//DELETE
DELETE FROM table_name WHERE condition;
DELETE FROM table_name; // DELETE ALL RECORDS

//LIMIT
SELECT * FROM Customers
LIMIT 3;

SELECT MIN(column_name)
FROM table_name
WHERE condition; // MIN

SELECT MAX(column_name)
FROM table_name
WHERE condition;//MAX

SELECT COUNT(column_name)
FROM table_name
WHERE condition; // COUNT

SELECT AVG(column_name)
FROM table_name
WHERE condition; //AVG

SELECT SUM(column_name)
FROM table_name
WHERE condition; //SUM

//selects all customers with a CustomerName starting with "a":
SELECT * FROM Customers
WHERE CustomerName LIKE 'a%';

//selects all customers with a CustomerName ending with "a":
SELECT * FROM Customers
WHERE CustomerName LIKE '%a';

//selects all customers with a CustomerName that have "or" in any position:
SELECT * FROM Customers
WHERE CustomerName LIKE '%or%';

//selects all customers with a CustomerName that have "r" in the second position:
SELECT * FROM Customers
WHERE CustomerName LIKE '_r%';

//selects all customers with a CustomerName that starts with "a" and are at least 3 characters in length:
SELECT * FROM Customers
WHERE CustomerName LIKE 'a__%';

//selects all customers with a ContactName that starts with "a" and ends with "o":
SELECT * FROM Customers
WHERE ContactName LIKE 'a%o';

//selects all customers with a CustomerName that does NOT start with "a":
SELECT * FROM Customers
WHERE CustomerName NOT LIKE 'a%';

//IN Operator
SELECT column_name(s)
FROM table_name
WHERE column_name IN (value1, value2, ...);
EG- SELECT * FROM Customers
WHERE Country IN ('Germany', 'France', 'UK');

//BETWEEN Operator
SELECT column_name(s)
FROM table_name
WHERE column_name BETWEEN value1 AND value2;
EG - SELECT * FROM Products
WHERE Price BETWEEN 10 AND 20;

SELECT * FROM Products
WHERE Price NOT BETWEEN 10 AND 20;

//Aliases
SELECT column_name AS alias_name
FROM table_name;

//JOIN
//INNER JOIN
SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;

//INNER JOIN
SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;
EG- SELECT Orders.OrderID, Customers.CustomerName
FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;

EG - SELECT **WORKER.WORKER_ID** , **EMPLOYEE.EMPLOYEE_TYPE** FROM WORKER INNER JOIN EMPLOYEE ON **WORKER.WORKER_ID** = **EMPLOYEE.WORKER_ID**;

//LEFT JOIN
SELECT column_name(s)
FROM table1
LEFT JOIN table2
ON table1.column_name = table2.column_name;
EG- SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID
ORDER BY Customers.CustomerName;

//RIGHT JOIN
SELECT column_name(s)
FROM table1
RIGHT JOIN table2
ON table1.column_name = table2.column_name;

//FULL OUTER JOIN 
SELECT column_name(s)
FROM table1
FULL OUTER JOIN table2
ON table1.column_name = table2.column_name
WHERE condition;

//SELF JOIN
SELECT column_name(s)
FROM table1 T1, table1 T2
WHERE condition;

//UNION
SELECT column_name(s) FROM table1
UNION
SELECT column_name(s) FROM table2;

//UNION ALL- To allow duplicate values, use UNION ALL:
SELECT column_name(s) FROM table1
UNION ALL
SELECT column_name(s) FROM table2;

//GROUP BY
SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s)
ORDER BY column_name(s);

//HAVING
SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s)
HAVING condition
ORDER BY column_name(s);

//EXIST
SELECT column_name(s)
FROM table_name
WHERE EXISTS
(SELECT column_name FROM table_name WHERE condition);

//VIEW
CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;

DROP VIEW view_name;

//COMMIT
COMMIT;

//ROLLBACK
ROLLBACK;
```

### ISHA EXERCISE

```sql
create database student;

CREATE TABLE WORKER( WORKER_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,  FIRST_NAME CHAR(20), JOININD_DATE DATETIME, AGE INT  )

SHOW TABLES

INSERT INTO WORKER VALUES(1,'ISHA' , '2020-03-24', 20) , (2, 'ANSH', '2023-01-03',6),( 3, 'ABHI', '2012-04-02', 23);

SELECT * FROM WORKER ;

UPDATE WORKER SET FIRST_NAME = 'ISHU' WHERE WORKER_ID=1

ALTER TABLE WORKER ADD EMAIL varchar(255)

update worker SET EMAIL = 'isha@gmail.com' where WORKER_ID=1;

CREATE TABLE EMPLOYEE( EMPLOYEE_ID INT NOT NULL , EMPLOYEE_TYPE INT NOT NULL, WORKER_ID INT,  EMPLOYEE_NAME CHAR(20), PRIMARY KEY(EMPLOYEE_ID), foreign key (WORKER_ID) REFERENCES WORKER(WORKER_ID) )

CREATE TABLE EMPLOYEE ( EMPLOYEE_ID INT NOT NULL  , EMPLOYEE_TYPE CHAR(30),  PRODUCT_ID INT ,  EMP_NAME CHAR(30)  )

INSERT INTO EMPLOYEE VALUES (1, 'SDE', 2, 'ISHA'), (2, 'UI' , 4 , 'ANSHI') , (3, 'WEB', 1,'ABHI')

SELECT WORKER.WORKER_ID , WORKER.AGE, EMPLOYEE.EMPLOYEE_TYPE FROM WORKER INNER JOIN EMPLOYEE ON WORKER.WORKER_ID= EMPLOYEE.PRODUCT_ID;

SELECT WORKER.WORKER_ID , WORKER.AGE, EMPLOYEE.EMPLOYEE_TYPE FROM WORKER LEFT JOIN EMPLOYEE ON WORKER.WORKER_ID= EMPLOYEE.PRODUCT_ID;

SELECT WORKER.WORKER_ID , WORKER.AGE, EMPLOYEE.EMPLOYEE_TYPE FROM WORKER RIGHT JOIN EMPLOYEE ON WORKER.WORKER_ID= EMPLOYEE.PRODUCT_ID;

SELECT WORKER.WORKER_ID , WORKER.AGE, EMPLOYEE.EMPLOYEE_TYPE FROM WORKER FULL OUTER JOIN  EMPLOYEE ON WORKER.WORKER_ID = EMPLOYEE.WORKER_ID;

SELECT first_NAME FROM WORKER union all select emp_name from employee

SELECT first_NAME FROM WORKER union  select emp_name from employee
```

NOTE - GROUP BY MEIN  AGR SELECT STATEMENT MEIN VO COLUMN AARA TO NEECHE GROUP BY KE SATH BHI VO COLUMN AAYEGA.

AUR GORUP BY AGGREAGTE FUNCTION KE SATH HI USE HOTA H. 

COLUMN VI CHOOSE KRO JIS MEIN SAME VALLUE HO 

**How to remove duplicate rows in SQL?**

DELETE FROM table WHERE ID IN (

SELECT

ID, COUNT(ID)

FROM   table

GROUP BY  ID

HAVING

COUNT (ID) > 1);

**How to find the nth highest salary in SQL?**

SELECT * FROM(

SELECT employee_name, salary, DENSE_RANK()

OVER(ORDER BY salary DESC)r FROM Employee)

WHERE r=&n;

To find to the 2nd highest salary set n = 2

To find 3rd highest salary set n = 3 and so on.

**Write the SQL query to get the third maximum salary of an employee from a table named employees.**

1. SELECT * FROM `employees` ORDER BY `salary` DESC LIMIT 1 OFFSET 2

bina where ke query likho



# SQL THEORY

SQL is a standard query language for accessing and manipulating database.

1. Sql can execute queries against the database
2. SQL can retrive data from a databse
3. SQL can insert/update/delete records from databse

**MYSQL is a rdbms like SQL server that is used to manage SQL database** 

**NoSQL databases are a type of software that allows to maintain and retrieve structured, unstructured, polymorphic data for different purposes. No-SQL is non relational.**

### Table and fields in the database

A table is an organized collection of data stored in the form of rows and columns 

The column in a table is called field while the rows in the table are called records. the field is used to define the particular aspect

### UNIQUE/PRIMARY/FOREIGN KEY

Unique- Each row and column are unique . The unique key cannot accept the duplicate valUe . it can accept only one null value per column 

Primary key - it is used to uniquely  identify all the records of the table. 

it should be unique and not null . a table can only have 1 primary key .

Foreign key - It is used to link one or more table together . it is also known as referencing table .

Foreign key of one table refers to the primary key of another table

```sql
FOREIGN KEY (DEPT_ID) REFERENCES DEPARTMENT(ID);

//DEPT ID - PRIMARY KEY H 
//DEPARTMENT TABLE KA NAM H ( FOREIGN KEY VALI)
//ID- FOERIGN KEY VALA COLUMN H 
```

### SELECT STATEMENT

SELECT operator is used to select data from database. 

SELECT IS  A DML Command

Some common clause used with SELECT QUERY ARE- 

1. FROM 
2. WHERE 
3. ORBER BY
4. GROUP BY 
5. HAVING

```sql
SELECT dept_id COUNT(id)
FROM employee
WHERE dept_id!="2"
GROUP BY dept_id
HAVING COUNT(id)>2
ORDER BY dept_id ASC;
```

### JOIN AND ITS TYPES

Join are used to retrive the data from multiple table . it is perform whenever we need to fetch records from two or more table .

There are 4 different type of JOIN

1. INNER JOIN
2. CROSS JOIN
3. SELF JOIN 
4. OUTER JOIN(LEFT, RIGHT , FULL)

1. INNER JOIN- it basically return the records that have matching value in both the tables,

```sql
SELECT * FROM TABLE1 INNER JOIN TABLE2;
```

1. CROSS JOIN - It can  be defined as the cartesian product of the two table included in the join .

 IT return row combining each row from the first table with each row of the second table

```sql
SELECT a.name , d.name FROM employee AS a CROSS JOIN DEPARTMENT as d;
```

1. SELF JOIN- JOIN a table with itself  . it can be joined using ALIASES which avoid to repeat a same table name 

```sql
SELECT name from TABLE1 AS T1 , TABLE1 AS T2
WHERE CONDITION;
```

1. OUTER JOIN - there are 3 types of join.

**LEFT (OUTER) JOIN:** Retrieves all the records/rows from the left and the matched records/rows from the right table

**RIGHT (OUTER) JOIN:** Retrieves all the records/rows from the right and the matched records/rows from the left table

**FULL (OUTER) JOIN:** Retrieves all the records where there is a match in either the left or right table

### TRUNCATE / DELETE / DROP

DELETE- command that deletes existing records from the table in the database. it can be rolled. It is a DML command.

```sql
DELETE FROM emp 
where id>10 ;
```

TRUNCATE - The TRUNCATE command helps us delete the complete records from an existing table in the database. It is a DDL language.

```sql
TRUNCATE TABLE emp;
```

DROP -  The DROP command drops the existing table from the database .**DROP TABLE command deletes complete data from the table along with removing the complete table structure too.** It is a DDL command . 

```sql
DROP TABLE table_name;
```

### ALIAS

This command provide another name to a table or column . It can be used in WHERE clause using **AS** keyword.

### Constraints

 we can specify the limit on the type of data that can be stored in a particular column of the table. 

it contain two level -

1. COLUMN LEVEL CONSTRAINTS - these constraints are only applied to a single column and limit the type of data that can be stored.
2. table level constraint- These constraints are applied to the entire table.

 Some constraints in SQL are:

1. NOT NULL
2. UNIQUE
3. CHECK - verifies that all the value in table satisfy a condition.
4. DEFAULT - automatically assign a default value
5. PRIMARY 
6. FOREIGN 
7. INDEX  - indexes a field for faster data retrieval

### WHERE AND HAVING

where - it is used without the group by clause . it selects the rows before grouping . it cannot contain aggregate function and can be used with the select , update and delete statement.

having- it is used with group by clause . it select rows after grouping . it contain aggregate function. it is only used with select statement .

NOTE - GROUP BY KE ANDAR FILTERING APPLY KRNI H TO USE HAVING

WHERE IS USED BEFORE GROUP BY AND HAVING IS USED AFTER GROUP BY

### BETWEEN AND IN

BETWEEN is used to display rows on a range of value .

IN is used to check whether a specific value exist within a set of value. it reduces the use of OR operator

### ORDER BY

it is used to sort the data either in ascending or descending order .

By default the order is ascending.  

### Distinct

it ensure that fetch value is a unique value . it does not allow duplicate value. 

### Aggregate function

It is used to evaluate mathematical calculation and return single values . it is used with GROUP BY and HAVING Clause .

SQL provides Five(5) aggregate functions:

**COUNT():** returns the number of table rows, including rows with null values.

```sql
**SELECT COUNT(*) FROM Employee;**
```

**AVG():** returns the average value from specified columns.

```sql
**SELECT AVG(salary) FROM Employee;**
```

**MAX()**: returns the largest value among the group.

```sql
**SELECT MAX(salary) FROM Employee;**
```

**MIN():** returns the smallest value among the group.

```sql
**SELECT MIN(salary) FROM Employee;**
```

**SUM():** returns the total summed values(non-null) of the specified column.

```sql
**SELECT SUM(salary) FROM Employee;**
```

### query

• An SQL query is used to retrieve the required data from the database.

• An SQL query is used to retrieve the required data from the database.

### SUBQUERY

A Subquery can be simply defined as a query within another query.  The outer query is called as **MAIN QUERY,** and inner query is called **SUB-QUERY.** 

• SubQuery is always executed first, and the result of subquery is passed on to the main query.

A subquery can also use any comparison operators such as >,< or =

```sql
SELECT MAX(salary) FROM Employee
WHERE Salary<(SELECT MAX(Salary) FROM Employee
WHERE Salary<(SELECT MAX(Salary) FROM  Employee));
```

There are two types of subquery – Correlated and Non-Correlated.

- **Correlated Subquery** - A correlated subquery cannot be considered as independent query, but it can refer the column in a table listed in the FROM the list of the main query.

**Non-Correlated Subquery**

- It can be considered as independent query and the output of subquery are substituted in the main query.

### NOW and Current date , MOD

NOW() Command will fetch the current date and time both in format ‘YYYY-MM-DD HH:MM:SS’

```sql
**SELECT NOW();**
```

CURRENT_DATE() Command will fetch the date of the current day in format ‘YYYY-MM-DD’.

```sql
**SELECT CURRENT_DATE();**
```

The **MOD function** returns the remainder in a division operation.

Example:

```sql
**SELECT MOD(27,5) AS “Value”;**
```

### CHAR and VARCHAR

CHAR datatype is used to store character string of fixed length. CHAR stands for “Character”. 

char - (0-255) has fixed datatype - it will take all 255 byte

varchar(0-255) - variable data type - 255 char ho skte h pr need basis pr hi allocate krega

### UNION, UNION ALL , MINUS , INTERSECT

The UNION operator combines the results of two or more Select statements by removing duplicate rows. The columns and the data types must be the same in the SELECT statements.

```sql
**SELECT columns FROM table1   UNION   SELECT columns FROM table2;**
```

UNION ALL:

This operator is similar to the Union operator, but it does not remove the duplicate rows from the output of the SELECT statements.

```sql
**SELECT columns FROM table1   UNION ALL   SELECT columns FROM table2;**
```

INTERSECT:

This operator returns the common records from two or more SELECT statements.

```sql
**SELECT columns FROM table1   INTERSECT   SELECT columns FROM table2;**    
```

MINUS:

This operator returns the records from the first query, which is not found in the second query. It does not return duplicate values.

```sql
**SELECT columns FROM table1   MINUS   SELECT columns FROM table2;**
```

### INDEX

- An index creates an entry for each value and hence it will be faster to retrieve data.
- It also has a unique value meaning that the index cannot be duplicated.
- Indexes help speed up searching in the database.

```sql
**CREATE INDEX INDEX_NAME ON TABLE_NAME (COLUMN)**
```

DIFFERENT TYPES OF INDEX:

- Clustered Index
- Non-Clustered Index

A clustered index is a table or view where the data for the rows are stored. In a relational database, if the table column contains a primary key, MySQL automatically creates a clustered index named PRIMARY.  A clustered index always contains an index id of 0.  

The indexes other than PRIMARY indexes (clustered indexes) are called non-clustered indexes. A non-clustered index always contains an index id>0. Non-clustered indexes stores only the information, and then it will refer you to the data stored in clustered data.

### VIEW

It is a virtual table. A view contains rows and columns, just like a real table. 

### **What is Data Integrity?**

Data Integrity defines the accuracy as well as the consistency of the data stored in a database. 

### **What are Entities and Relationships?**

**Entity**: An entity can be a real-world object, either tangible or intangible, that can be easily identifiable. For example, in a college database, students, professors, workers, departments, and projects can be referred to as entities. Each entity has some associated properties that provide it an identity.

**Relationships**: Relations or links between entities that have something to do with each other. 

### Like operator

Used to filter data by searching for particular pattern in the where clause

### TINY INT

SIGNED - (-128 TO 127) 

UNSIGNED - (0-255) - WE CANNOT USE NEGATIVE VALUE 

### DELETE CONSTRAINT -

value cannot be deleted from parent agr corresponding value child mein available h

1. ON DELETE CASCADE - agr parent se item delete kar re h to uske corresponding jo bhi child h ya reference table ke andr h to vo bhi delete ho jayega
2. on set null - jo bhi entry child table mein h uski foriegn key ki jo value h vo null set ho jayegi 

SYNTAX:

```sql
CREATE TABLE (
ORDER_ID INT PRIMARY KEY , 
CUST_ID INT ,
FOREIGN KEY(CUST_ID) REFERENECES CUSTOMER (ID) ON DELETE CASACADE ); 
```

### REPLACE

data already present , replace 

data not present is will be inserted

```sql
REPLACE INTO CUSTOMER (ID, CITY) 
VALUES (123, 'INDIA');
```

### **What is the difference between the RANK() and DENSE_RANK() functions?**

The RANK() function in the result set defines the rank of each row within your ordered partition. If both rows have the same rank, the next number in the ranking will be the previous rank plus a number of duplicates. If we have three records at rank 4, for example, the next level indicated is 7.

**Agr value same h to rank bhi same dega aur next value ko skip krdega .** 

The DENSE_RANK() function assigns a distinct rank to each row within a partition based on the provided column value, with no gaps. It always indicates a ranking in order of precedence. This function will assign the same rank to the two rows if they have the same rank, with the next rank being the next consecutive number. If we have three records at rank 4, for example, the next level indicated is 5.

**agr value same h to rank bhi same dega pr next value skip ni krega .**

### **What is schema in SQL Server?**

A schema is **a collection of database objects like tables, triggers, stored procedures, etc**. A schema is connected with a user which is known as the schema owner. Database may have one or more schema.

### **orders of sql**
from-> join-> where-> group by-> having ->select-> distinct-> order by ->limit

## Getting to know Table Storage Constraints

- **PK (Primary Key)**: A column or set of columns that uniquely identifies each row in a table.
- **NN (Not Null)**: Column must have a value and cannot be null.
- **UQ (Unique)**: Values in a column or set of columns are unique among all rows in a table.
- **Binary**: A data type used to store binary data, such as images or files, in a database.
- **UN (Unsigned)**: Only non-negative numeric values can be stored in a column.
- **ZF (Zero Fill)**: Add zeros in front of numeric values to fill the width of a column.
- **AI (Auto Increment)**: Automatically assigns a unique and increasing value to new row.
- **G (Generated)**: Value that is automatically computed based on an expression or algorithm defined in the table schema.

