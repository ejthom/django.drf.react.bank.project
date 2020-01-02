from rest_framework import serializers
from .models import Todo
from .models import Branches
from .models import Accounts
from .models import Customers
from .models import Products


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'title', 'description', 'completed')

class BranchesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Branches
        fields = ('id','branch_name','description','completed')

class AccountsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Accounts
        fields = ('id','acc_name','description','completed')

class CustomersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customers
        fields = ('id','cus_name','description','completed')

class ProductsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = ('id','pro_name','description','completed')

