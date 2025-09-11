def decorator(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return result.upper()
    return wrapper

@decorator
def say_hello():
    return "school soon"

print(say_hello())