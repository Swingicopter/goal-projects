from turtle import *


def draw_square(x, y):
    width(0)
    goto((x, y))
    width(5)
    color("purple")

    begin_fill()

    forward(200)
    left(90)

    forward(200)
    left(90)

    forward(200)
    left(90)

    forward(200)
    left(90)

    end_fill()

draw_square(-200, -200)