from django.urls import path
from . import views

urlpatterns = [
    path('get_context/', views.get_context, name='get_context'),
    # path('ask_question/<str:conversation_id>/', views.ask_question_api, name='ask_question_api'),
    # path('response_analysis/<str:question>/', views.response_analysis_api, name='response_analysis_api'),
]
