from django.http import Http404
from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Tour
from .serializers import TourSerializer

@api_view(['GET'])
def tour_list(request):
    tours = Tour.objects.all()
    serializer = TourSerializer(tours, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def tour_create(request):
    serializer = TourSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)

class TourList(APIView):
    def get(self, request):
        tours = Tour.objects.all()
        serializer = TourSerializer(tours, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TourSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

class TourDetail(APIView):
    def get_object(self, pk):
        try:
            return Tour.objects.get(pk=pk)
        except Tour.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        tour = self.get_object(pk)
        serializer = TourSerializer(tour)
        return Response(serializer.data)

    def put(self, request, pk):
        tour = self.get_object(pk)
        serializer = TourSerializer(tour, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def delete(self, request, pk):
        tour = self.get_object(pk)
        tour.delete()
        return Response(status=204)