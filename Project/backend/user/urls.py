from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from .views import UserSignUpAPIView

urlpatterns = [
    path('signin/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('signin/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('signup/', UserSignUpAPIView.as_view(), name='user-sign-up'),
]
