# serializers “translate” Django models into formats that are easy to consume over the internet. 
from rest_framework import serializers
from .models import TodoList

class TodoListSerializer(serializers.ModelSerializer):
    class Meta:
        model = TodoList
        fields = ['item_name', 'item_description']
