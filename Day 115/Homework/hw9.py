words = ['apple', 'banana', 'cat', 'elephant', 'dog', 'grapefruit']
new = []
new2 = []

for i in range(len(words)):
    if len(words[i]) > 5:
        new.append(words[i])

for i in words:
    if len(i) > 5:
        new2.append(i)

print(new)
print(new2)
