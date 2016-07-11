from django.db import models


class Project(models.Model):
    name = models.CharField(max_length=20)
    year = models.PositiveSmallIntegerField()
    image = models.ImageField(upload_to="project_images/")
    summary = models.CharField(max_length=50)
    details = models.TextField()


    def __str__(self):
        return self.name


    class Meta:
        ordering = ["-year", "name"]


class Skill(models.Model):
    name = models.CharField(max_length=20)
    proficiency = models.PositiveSmallIntegerField(choices=((1, 1), (2, 2), (3, 3), (4, 4), (5, 5)))


    def __str__(self):
        return self.name


    class Meta:
        ordering = ["-proficiency", "name"]
