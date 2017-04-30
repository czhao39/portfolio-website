from django.db import models


class Project(models.Model):
    name = models.CharField(max_length=30)
    year = models.PositiveSmallIntegerField()
    image = models.ImageField(upload_to="portfolio/static/portfolio/img/project_images/")
    summary = models.CharField(max_length=50)
    details = models.TextField()

    @property
    def im_name(self):
        return self.image.url[self.image.url.rfind("/")+1:]

    def __str__(self):
        return self.name


    class Meta:
        ordering = ["-year", "name"]


class Skill(models.Model):
    name = models.CharField(max_length=20)
    proficiency = models.PositiveSmallIntegerField(help_text="0-100")
    category = models.PositiveSmallIntegerField(choices=((1, "General-purpose"), (2, "Web"), (3, "Other")))

    def __str__(self):
        return self.name


    class Meta:
        ordering = ["category", "-proficiency", "name"]
