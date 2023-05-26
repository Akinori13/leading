from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated

from .models import Tweet
from .serializers import TweetSerializer


class TweetListCreateAPIView(ListCreateAPIView):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer
    permissions = IsAuthenticated

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class TweetRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer
    permissions = IsAuthenticated
