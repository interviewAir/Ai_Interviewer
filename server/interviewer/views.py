import requests
import openai
from django.shortcuts import render
from django.conf import settings
import speech_recognition as sr


def interview(request, question):
    if request.method == "POST":
        recognizer = sr.Recognizer()

        with sr.Microphone() as source:
            try:
                recognizer.adjust_for_ambient_noise(source)
                audio = recognizer.listen(source)
                transcription = recognizer.recognize_google(audio)

                openai.api_key = settings.API_KEY
                response = openai.Completion.create(
                    engine="text-davinci-003",
                    prompt=f"Rate my answer to the {question} on a scale of one to 10",
                    max_tokens=100,
                )
                print(response.choices[0].text)

            except sr.UnknownValueError:
                transcription = "Inaudible..."

            except sr.RequestError as e:
                transcription = "Could not request results from Google Speech Recognition service; {0}".format(
                    e
                )
            except KeyboardInterrupt:
                pass

            except Exception as e:
                print(e)
    else:
        transcription = "Press the button and start speaking"
