animals = ['tiger', 'lion', 'zebra', 'elephant', 'giraffe']
new = []
e = []

for i in animals:
    new.append(i[0])

for i in new:
    if i == 'e' or i == 'E':
        e.append(i)

print(new)
print(e)