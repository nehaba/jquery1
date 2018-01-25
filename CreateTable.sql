create table State ( Id int primary key,
					 Name varchar(50) ,
					  CountryId int )

create table Country ( Id int primary key,
					   Code varchar(10) not null,
					   Name varchar(50) not null )

create table [User] ( ID int primary key identity(1,1),
				   UserName varchar(50) not null,
				   Password varchar(50) not null,
				   FirstName varchar(50) not null,
				   LastName varchar(50) not null,
				   Gender varchar(10) not null,
				   Mobile varchar(10) not null,
				   Email varchar(50) not null,
				   Phone varchar(15) not null,
				   BirthDate varchar(15) not null,
				   Intrest varchar(50) not null,
				   BillingStreet varchar(50) not null,
				   BillingCity varchar(50) not null,
				   BillingState varchar(50) not null,
				   BillingCountry varchar(50) not null,
				   ShippingStreet varchar(50) not null,
				   ShippingCity varchar(50) not null,
				   ShippingState varchar(50) not null,
				   ShippingCountry varchar(50) not null)

create table Item ( ID int primary key identity(1,1),
					Name varchar(100) not null,
					Description varchar(50),
					ImageUrl varchar(200) not null,
					Price float not null,
					CategoryId int not null)

create table Category (Name varchar(50) not null,
					   ParentId int)

create table [Order] (ID int primary key identity(1,1),
					UserId int not null)

create table OrderItem (ID int primary key identity(1,1),
						Qty int not null,
						Total float not null,
					    OrderId int not null,
					    ItemId int not null) 

create table Inquiry (ID int primary key identity(1,1),
					UserId int not null,
					Inquiry varchar(200) not null)