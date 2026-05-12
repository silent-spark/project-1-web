from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return HttpResponse("<h1>Home - Backend is running ✅</h1>")

def contact(request):
    return HttpResponse("<h1>Contact page</h1>")

def about(request):
    return HttpResponse("<h1>About page</h1>")