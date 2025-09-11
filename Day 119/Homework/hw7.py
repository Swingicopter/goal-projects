nums = [5, 8, 11, 14, 17]

def func(i):
    if i < 10:
        return False
    else:
        return True
    
new = list(filter(func, nums))

print(new)