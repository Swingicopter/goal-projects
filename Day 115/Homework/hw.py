numbers = {1, 2, 3, 4}
numbers.add(5)
numbers.add(6)
numbers.remove(1)
numbers.remove(2)

even_numbers = (2, 4, 6, 8)

print(numbers.union(even_numbers))
print(numbers.intersection(even_numbers))
print(numbers.difference(even_numbers))