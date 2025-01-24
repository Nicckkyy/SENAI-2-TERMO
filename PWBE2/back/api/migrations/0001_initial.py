from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Professor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ni', models.CharField(max_length=255)),
                ('nome', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=255)),
                ('tel', models.CharField(max_length=255)),
                ('ocupacao', models.FloatField()),
            ],
        ),
    ]
                