select * from dbo.State

select * from dbo.Country

select * from dbo.State where CountryId=1

insert into [User] values('nehasolanki','Neha@123','neha','solanki','Female','8866319697','solankinehad@gmail.com','9898970788','19/06/1997','Western wear','jivrajpark','ahmedabad','gujrat','india','jivrajpark','ahmedabad','gujrat','india')

select * from [User] where UserName='nehasolanki' and Password='Neha@123'

update [User] set FirstName='Neha' where UserName='nehasolanki';

update [User] set LastName='Solanki' where UserName='nehasolanki';

select * from Item

select * from Item where ID=1

select Name from Category where  ParentId IS NULL

select * from Category where  ParentId=1

insert into [Order] values(1)

delete from OrderItem

insert into OrderItem values(2,1790,1,1)

insert into OrderItem values(2,1044,1,3)

select * from [Order] where UserId=1

select * from OrderItem where OrderId=1

delete from OrderItem

SELECT * FROM [Order] O JOIN OrderItem I ON O.Id = I.OrderId JOIN Item P ON P.Id = I.ItemId

select * from Item I INNER JOIN OrderItem O ON I.ID = O.ItemId INNER JOIN [Order] P ON O.OrderId=P.ID INNER JOIN [User] U ON P.UserId=U.Id

DELETE [Order] FROM [Order] o INNER JOIN OrderItem i ON o.Id = i.OrderId WHERE o.Id = 1

DELETE OrderItem FROM OrderItem  INNER JOIN [Order] ON [Order].Id = OrderItem.OrderId WHERE [Order].Id = 1

DELETE OrderItem FROM OrderItem  INNER JOIN [Order] ON [Order].Id = OrderItem.OrderId WHERE OrderItem.Id = 1

DELETE OrderItem FROM OrderItem  INNER JOIN Item ON Item.Id = OrderItem.OrderId WHERE Item.Id = 1