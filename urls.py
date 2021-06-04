from django_distill import distill_path

from . import views

def get_index():
    return None

urlpatterns = [
    distill_path("", views.IndexView.as_view(), name='index', distill_func=get_index),
]
