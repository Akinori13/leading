from django.urls import path

from . import views

app_name = "tweets"

urlpatterns = [
    path("", views.TweetListCreateAPIView.as_view(), name="tweets"),
    path("<int:pk>/", views.TweetRetrieveUpdateDestroyAPIView.as_view(), name="tweet"),
]
