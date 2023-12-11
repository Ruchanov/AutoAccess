from rest_framework.routers import DefaultRouter
from api.views import CategoryViewSet, ProductViewSet, SparePartsViewSet

router = DefaultRouter()

router.register(r'categories', CategoryViewSet)
router.register(r'products', ProductViewSet)
router.register(r'spare_parts', SparePartsViewSet)

urlpatterns = router.urls
