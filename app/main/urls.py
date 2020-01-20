from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from todo import views as bank_views

router = routers.DefaultRouter()
router.register(r'branch', bank_views.Branch_Viewset)
router.register(r'customer', bank_views.Customer_Viewset)
router.register(r'account', bank_views.Account_Viewset)
router.register(r'product', bank_views.Product_Viewset)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('users/', include('account.urls'))
]

