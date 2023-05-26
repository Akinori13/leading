from django.db import models

from accounts.models import User


class Task(models.Model):
    text = models.CharField(
        max_length=200,
    )
    user = models.ForeignKey(
        User,
        related_name="tasks",
        on_delete=models.CASCADE,
    )
