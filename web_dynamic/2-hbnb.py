#!/usr/bin/python3
""" Starts a Flask web application """
from flask import Flask, render_template
import uuid

app = Flask(__name__)


@app.route('/2-hbnb', strict_slashes=False)
def hbnb_2():
    """Display HBNB 2 page"""
    return render_template('2-hbnb.html', cache_id=uuid.uuid4())


if __name__ == "__main__":
    app.run(host='0.0.0.0', port='5000')
