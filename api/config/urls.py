from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/accounts/", include("accounts.urls")),
    path("api/tasks/", include("tasks.urls")),
    path("api/tweets/", include("tweets.urls")),
]
