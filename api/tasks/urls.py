from django.urls import path

from . import views

app_name = "tasks"

urlpatterns = [
    path("", views.TaskListCreateAPIView.as_view(), name="tasks"),
    path("<int:pk>/", views.TaskRetrieveUpdateDestroyAPIView.as_view(), name="task"),
]
