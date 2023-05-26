from rest_framework import serializers

from .models import Tweet


class TweetSerializer(serializers.ModelSerializer):
    class UserSerializerForTweet(serializers.ModelSerializer):
        class Meta:
            model = Tweet.user.field.related_model
            fields = ("id", "username")

    user = UserSerializerForTweet(read_only=True)

    class Meta:
        model = Tweet
        fields = "__all__"
