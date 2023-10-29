from rest_framework import serializers


class ContextSerializer(serializers.Serializer):
    title = serializers.CharField()
    level = serializers.ChoiceField(choices=['Intern', 'Part-Time', 'Full-Time'])
    type = serializers.ChoiceField(choices=['Behavioral', 'Technical', 'Behavioral and Technical'])
