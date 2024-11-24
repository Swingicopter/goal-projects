li = [1, 3, 4, 5, 2]

def average(l):
    total = (l[0] + l[1] + l[2] + l[3] + l[4]) // len(l)
    return total

print(average(li))