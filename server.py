from flask import Flask, render_template, url_for, redirect

app = Flask(__name__)

@app.route('/')
@app.route('/main_menu')
def route_main():
    return render_template("main.html")


@app.route('/game')
def route_play_game():
    return render_template('game.html')


if __name__ == '__main__':
    app.run(
        port=5000,
        debug=True,
    )
