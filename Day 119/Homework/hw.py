def func(age):
    if age >= 0:
        return age
    else:
        raise ValueError("I know your age isn't negative.")

func(13)