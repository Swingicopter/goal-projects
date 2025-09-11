nums = [1, 2, 3, 4, 5, 6]

def func(i):
    if i % 2 == 0:
        return True
    else:
        return False
    
new = list(filter(func, map(lambda x: x + 10, nums)))

print(new)