from django.db import models

from accounts.models import User


class Tweet(models.Model):
    text = models.CharField(
        max_length=200,
    )
    feeling = models.JSONField(
        verbose_name="感情",
        blank=True,
        null=True,
    )
    user = models.ForeignKey(
        User,
        related_name="tweets",
        on_delete=models.CASCADE,
    )
