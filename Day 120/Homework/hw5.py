def decorator(func):
    def wrapper():
        print("ფუნქცია დაიწყო.")
        func()
        print("ფუნქცია დასრულდა.")
    return wrapper

@decorator
def greet():
    print("yes")
greet()