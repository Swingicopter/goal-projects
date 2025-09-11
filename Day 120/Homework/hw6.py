import time

def timer(func):
    def wrapper():
        start = time.time()
        func()
        end = time.time()
        print("Function ran in", end - start, "seconds")
    return wrapper

@timer
def my_function():
    time.sleep(2)

my_function()