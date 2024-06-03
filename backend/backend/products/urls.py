from django.urls import path
from .views import (
    ProductsView,
    CategoriesView
)

urlpatterns = [
    path('', ProductsView.as_view(), name="products-view"),
    path('categories/', CategoriesView.as_view(), name="catagories-view")
]
