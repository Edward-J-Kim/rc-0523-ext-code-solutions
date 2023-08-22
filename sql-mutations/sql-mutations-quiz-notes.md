# sql-mutations-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the SQL _CRUD_ operations?
  The SQL CRUD operations consist of Create, Read, Update, and Delete, which allow you to insert, retrieve, modify, and delete data records in a database.
- How do you add a row to a SQL table?
  To add a row to a SQL table, you use the SQL INSERT Into statement.
- How do you add multiple rows to a SQL table at once?
  To add multiple rows to a SQL table at once, you can use the SQL INSERT statement with the VALUES clause and provide multiple sets of values within parentheses. Each set of values represents a row to be inserted.
- How do you update rows in a database table?
  To update rows in a database table, you use the SQL UPDATE statement.
- How do you delete rows from a database table?
  To delete rows from a database table, you use the SQL DELETE statement.
- Why is it important to include a `where` clause in your `update` and `delete` statements?
  Including a WHERE clause in UPDATE and DELETE statements is important for several reasons
- How do you accidentally delete or update all rows in a table?
  Accidentally deleting or updating all rows in a table can occur if you execute an UPDATE or DELETE statement without specifying a WHERE clause or providing incorrect conditions in the WHERE clause.
- How do you get back the modified row without a separate `select` statement?
  In most SQL database management systems, there is no direct way to retrieve the modified row without using a separate SELECT statement. The UPDATE and DELETE statements do not return the modified row by default. Their primary purpose is to modify or delete data rather than retrieving it.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
