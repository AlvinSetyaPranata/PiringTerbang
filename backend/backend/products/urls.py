from django.urls import path
from .views import (
    ProductslView,
    CatagoriesView
)

urlpatterns = [
    path('', ProductslView.as_view(), name="products-view"),
    path('catagories/', CatagoriesView.as_view(), name="catagories-view")
]
