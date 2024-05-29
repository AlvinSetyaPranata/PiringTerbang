from django.urls import path
from .views import (
    ProductsView,
    CatagoriesView
)

urlpatterns = [
    path('', ProductsView.as_view(), name="products-view"),
    path('catagories/', CatagoriesView.as_view(), name="catagories-view")
]
