from django.shortcuts import render
from django.views import generic

from .models import Project, Skill


class IndexView(generic.ListView):
    template_name = "portfolio/index.html"

    def get_context_data(self):
        context = super(IndexView, self).get_context_data()
        context["project_list"] = Project.objects.order_by("date")
        context["skill_list"] = Skill.objects.order_by("proficiency")
        return context
