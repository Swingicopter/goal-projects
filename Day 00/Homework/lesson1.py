from turtle import * # type: ignore

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

#draw le door

forward(70)
left(90)
color("yellow")
begin_fill()
forward(100)        #height of le door
right(90)
forward(60)
right(90)
forward(100)
end_fill()

penup()
goto(200, 200)
pendown()

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

penup()
goto(25, 175)
color("Brown")
pendown()
begin_fill()
left(30)
forward(50)
left(90)
forward(50)
left(90)
forward(50)
left(90)
forward(50)
left(90)
end_fill()
left(180)

penup()
goto(175, 125)
pendown()
begin_fill()
forward(50)
left(90)
forward(50)
left(90)
forward(50)
left(90)
forward(50)
left(90)
end_fill()

# outline #
penup()
right(90)
goto(0, 0)
pendown()
color("Black")
width(5)
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

#draw le door

forward(70)
left(90)
forward(100)        #height of le door
right(90)
forward(60)
right(90)
forward(100)

penup()
goto(200, 200)
pendown()

right(150)
forward(200)
left(120)
forward(200)

penup()
goto(25, 175)
pendown()
left(30)
forward(50)
left(90)
forward(50)
left(90)
forward(50)
left(90)
forward(50)
left(90)
left(180)

penup()
goto(175, 125)
pendown()
forward(50)
left(90)
forward(50)
left(90)
forward(50)
left(90)
forward(50)
left(90)

exitonclick()

exitonclick()