#!/usr/bin/python3
""" Starts a Flask web application """
from flask import Flask, render_template
app = Flask(__name__)


@app.route('/1-hbnb', strict_slashes=False)
def hbnb():
    """ Displays an HTML page """
    return render_template('1-hbnb.html')


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
