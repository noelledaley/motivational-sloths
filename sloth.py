""" Generates a random sloth and motivational quote each time user clicks on img. """

from flask import Flask, render_template
from random import choice
import jinja2

app = Flask(__name__)

@app.route("/")
def show_sloth():

    return render_template('')

if __name__ == "__main__":
    app.run(debug=True)
