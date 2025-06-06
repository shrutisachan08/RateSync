from flask import Flask, render_template
from asset.code import train_model  # assuming `code.py` has a function train_model()

app = Flask(__name__, static_folder='', template_folder='.')

@app.route('/')
def home():
    return render_template('index1.html')

@app.route('/train')
def train():
    train_model()
    return "Model trained successfully!"

if __name__ == '__main__':
    app.run()
