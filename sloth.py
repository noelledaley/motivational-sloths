""" Generates a random sloth and motivational quote each time user clicks on img. """

from flask import Flask, render_template, request, jsonify
from random import choice
import jinja2, os

app = Flask(__name__)

@app.route("/")
def home():
    print 'We are at the home page.'
    return render_template('index.html')

@app.route("/sloth")
def show_sloth():

    print 'Server has received .get request!'
    print request.args

    QUOTES = ["Your self worth is determined by you. You don't have to depend on someone telling you who you are.",
        "I felt like it was time to set up my future, so I set a goal. My goal was independence.",
        "We need to reshape our own perception of how we view ourselves. We have to step up as women and take the lead.",
        "I am a woman and when I think, I must speak.",
        "Power's not given to you. You have to take it.",
        "Take all the rules away. How can we live if we don't change?",
        "Perfection is a disease of a nation.",
        ]

    quote_choice = choice(QUOTES)

    img_choice = choice(os.listdir("./static/img/"))

    img_quote = [img_choice, quote_choice]

    return jsonify(img_quote=img_quote)

if __name__ == "__main__":
    app.run(debug=True)
