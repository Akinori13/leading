from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import AllowAny

from accounts.models import User

from .models import Tweet
from .serializers import TweetSerializer


class TweetListCreateAPIView(ListCreateAPIView):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer
    permission_classes = (AllowAny,)

    def perform_create(self, serializer):
        serializer.save(user=User.objects.get(username="admin"))


class TweetRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer
    permission_classes = (AllowAny,)
