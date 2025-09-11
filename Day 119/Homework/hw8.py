words = ['ant', 'elephant', 'dog', 'giraffe']

def func(s):
    if len(s) < 5:
        return False
    else:
        return True
    
new = list(filter(func, words))

print(new)