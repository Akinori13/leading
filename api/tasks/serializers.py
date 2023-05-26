from rest_framework import serializers

from .models import Task


class TaskSerializer(serializers.ModelSerializer):
    class UserSerializerForTask(serializers.ModelSerializer):
        class Meta:
            model = Task.user.field.related_model
            fields = ("id", "username")

    user = UserSerializerForTask(read_only=True)

    class Meta:
        model = Task
        fields = "__all__"
