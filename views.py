from django.shortcuts import render
from django.views import generic

from .models import Project, SkillCategory


class IndexView(generic.TemplateView):
    template_name = "portfolio/index.html"

    def get_context_data(self):
        context = super(IndexView, self).get_context_data()
        context["project_list"] = Project.objects.filter(show=True)
        context["skillcategory_list"] = SkillCategory.objects.all()
        return context
