words = ['hello', 'world', 'python']

def func(s):
    return s.upper()

new = list(map(func, words))

print(new)