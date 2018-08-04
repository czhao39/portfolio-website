from django.db import models


class Project(models.Model):
    name = models.CharField(max_length=30)
    MONTH_CHOICES = (
        (0, "January"),
        (1, "February"),
        (2, "March"),
        (3, "April"),
        (4, "May"),
        (5, "June"),
        (6, "July"),
        (7, "August"),
        (8, "September"),
        (9, "October"),
        (10, "November"),
        (11, "December"),
    )
    month = models.PositiveSmallIntegerField(choices=MONTH_CHOICES)
    year = models.PositiveSmallIntegerField()
    image = models.ImageField(upload_to="portfolio/static/portfolio/img/project_images/")
    summary = models.CharField(max_length=70)
    details = models.TextField()

    @property
    def im_name(self):
        return self.image.url[self.image.url.rfind("/")+1:]

    def __str__(self):
        return "{} | {}-{}".format(self.name, self.month, self.year);


    class Meta:
        ordering = ["-year", "-month", "name"]


class SkillCategory(models.Model):
    name = models.CharField(max_length=20)
    rank = models.PositiveSmallIntegerField()

    def __str__(self):
        return self.name


    class Meta:
        verbose_name = "skill category"
        verbose_name_plural = "skill categories"
        ordering = ["rank"]


class Skill(models.Model):
    name = models.CharField(max_length=20)
    proficiency = models.PositiveSmallIntegerField(help_text="0-100")
    category = models.ForeignKey(SkillCategory, on_delete=models.CASCADE)

    def __str__(self):
        return "{} | {}".format(self.name, self.proficiency)


    class Meta:
        ordering = ["category", "-proficiency", "name"]

