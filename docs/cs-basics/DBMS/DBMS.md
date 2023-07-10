---
sidebar_position: 1
---

# DBMS

Database management system helps to `manages all the data` . It provide a tool for performing various operations like Inserting , updating, deleting. It is a software that enables the storage of data more compactly and efficiently.  It help to overcome problems like Data redundancy , data inconsistency , improve data sharing , improve data security 

### Database

Database is an organized , consistent, logical collection of data which can be easily updated , modified and deleted . It contains a set of `tables`  which consist `record` and fields . The `tuple/row`  represent a single entity of table . The Column contain a information about particular aspects of table .

### RDBMS

Relational database management system . It stores the data in the form of table . Storing data in the form of rows and columns make easier to locate specific value . 

### Advantages of DBMS

1. **Data sharing** - Data can be shared from a single database to multiple user . 
2. **Integrity constraints**- existence of such constraints allow storing data in an organised way. `It is basically set of rules we need to follow while inserting data.`
3. **Controlling redundancy** - Integrate all the data in a single database.
4. Provide **backup** and **recovery** 
5. **Data security** - Authentication and encryption

### Different language in DBMS

1. **DDL** - `data definition language` . It is required to define database. EG- ALTER , CREATE , DROP 
2. **DML** - `data manipulation language`. Contain command that manipulates the data . EG- SELECT , UPDATE , INSERT 
3. **DCL** - `Data control language` . Contain command which deals with the user permission and control . EG - REVOKE , GRANT
4. **TCL** - `Transaction control language` . Deal with transaction of database , EG- COMMIT , ROLLBACK

 

### ACID

- **Atomicity** - data should be performed successfully or not at all.
- **Consistency** -  Data should remain consistent before and after performing the transaction .
- **Isolation** - Transaction is occurring independently. This means the ongoing transaction doesn’t affect the another transaction.
- **Durability** - Data is not lost in case of power failure.

### Keys in DBMS

1. Super Key - Set of attribute that can uniquely identify a Row . CK and PK are the subset of super key .
2. Candidate key - It uniquely identify each row in a given table . It can have multiple CK
3. Primary Key - There can be more than one candidate key in relation out of which one can be chosen as the primary key. They are unique and not null.
4. Alternate key - All CK that are not chosen as PK .
5. Foreign key- A FOREIGN KEY is **a field (or collection of fields) in one table, that refers to the PRIMARY KEY in another table**. The table with the foreign key is called the child table, and the table with the primary key is called the referenced or parent table.
6. Composite key - It acts as a primary key if there is no primary key in a table
- Two or more attributes are used together to make a composite key.

1. Unique key - Once assigned it cannot be change and has NULL value .

### Normalization/Denormalization

Normalization - Process of reducing redundancy by organizing data into multiple tables. It leads to better usage of disk space. 

Denormalization - Combined a table which have been normalized into a single table so that data retrieval become faster . Join operation is used . 

### Functional dependency

It specify the relationship between two set attributes where one set can accurately determine the value of other set , X→ Y X is an attribute of y it can determine the value of y X is determinant and Y is dependent .

### Warehousing

The process of collecting , extracting, transferring and loading the `data from multiple source to single source` is called data warehousing . A data warehouse can be considered as a central repository .

### Different level of abstraction

1. Physical level - Lowest level . It consist of data storage and details of this level is hidden from the admin/user.
2. Logical level - It is the level on which Admin and developer work . It determine what data is stored in it and what is the relationship between the data points.
3. View level - The top level . Describe the database.

### ER model

Entity Relationship model . This model is used to `define the data element and relationship` .

Entity is a real world object with an existence 

Type of entity 

1. Strong entity - It has a key attributes . The PK helps to uniquely identify each entity uniquely
2. Weak entity- It doesn’t have a key attribute . It depend on some strong entity for its identity .
3. Entity set - Collection of entity of the same entity type . 

 

### Different relationship

1. One to one- particular row in a table X is link to particular row in table Y
2. One to Many - particular row in a table X is link to many row in table Y
3. Many to Many - Multiple  row in a table X is link to multiple row in table Y
4. Self referencing - particular row in a table X is link to same to table .

### Lock

It is a mechanism to protect a shared piece of data from getting uploaded by two or more database user ( agr ek single user uss data ko use kr ra h to vo lock hoga aur dusra akr modify ni kr skta h ) 

1. Shared Lock - Other transaction can only read the item but cannot write . Many transaction can hold a lock on same data item .
2. Exclusive Lock - Can’t read but can write . Doesn’t allow multiple transaction.

### 2 tier AND 3 tier

2 tier - Application at client end directly communicate with database at the server end without any middleware involved. 

3tier- Contain another layer between client and server . It provide GUI to user and make system secure .

### Different type of normalization

1. 1NF - 

   a.  every column should have a single value    and should be atomic . 

b. Duplicate column from the same table should be removed

1. 2NF- 

 a. It should satisfy all condition of 1NF 

 b. every non prime attribute should be fully and functionally dependent on PK

1. 3NF -

a. It should satisfy all condition of 2NF

b.  There is no functional dependency of any attribute of the same table 

1. BCNF - **Boyce - Codd normal form**

a. It should satisfy all condition of 3NF

b. For every functional dependency on any attribute A on B . A should be the super key and can’t be non prime attribute . B should be prime attribute .  

 

### **Are NULL values in a database the same as that of blank space or zero?**

No, a `NULL` value is very different from that of zero and blank space as it represents a value that is assigned, `unknown, unavailable, or not applicable` as compared to `blank space which represents a character` and `zero represents a number`.

- **Entity:** An entity is defined as a real-world object having attributes that represent characteristics of that particular object.
- **Entity Type:** An entity type is defined as a collection of entities that have the same attributes.
- **Entity Set:** An entity set can be defined as a set of all the entities present in a specific entity type in a database.