from rest_framework import viewsets 
from .models import TodoList
from .serializers import TodoListSerializer

class TodoListViewSet(viewsets.ModelViewSet):
    # ModelViewSet is a type of view that provides default 
    # create(), retrieve(), update(), partial_update(), and destroy() actions.
    # In other words, it provides all the standard 
    # CRUD  operations for a model out of the box
    queryset = TodoList.objects.all()
    # This is telling Django Rest Framework to use all the objects in your
    # TodoList model 
    # as the list of records it’ll be working with. 
    # So if you were to send a GET request to the API endpoint associated with this view,
    # it would return all the TodoList objects.
    serializer_class = TodoListSerializer
    # is specifying that the TodoListSerializer should be used to 
    # serialize (convert to JSON) and deserialize (convert from JSON to a Django model)
    # the TodoList objects.
    # So when you send a POST request to create a new TodoList object, 
    # Django Rest Framework will use this serializer to validate the data and 
    # save it to the database. Similarly, when you send a GET request,
    # it’ll use the serializer to convert the TodoList objects into JSON.
