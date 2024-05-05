from django.db import models

class TodoList(models.Model):
    item_name=models.CharField(max_length=255,primary_key=True)
    item_description=models.CharField(max_length=255)

    class Meta:
        managed=False
        # This tells Django that it should not manage the creation, modification, or 
        # deletion of the table in the database. 
        # In other words, Django will not create, alter, or delete the table
        # automatically when you run python manage.py migrate. 
        # This is useful when you’re dealing with existing databases or when
        # you want to handle database schema changes manually.
        db_table='todo_list'
        # This tells Django the exact name of 
        # the table in the database that this model should map to
