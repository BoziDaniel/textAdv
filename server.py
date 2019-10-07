from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def route_main():
    return render_template ("main.html")



if __name__ == '__main__':
    app.run(
        port=5000,
        debug=True,
    )
