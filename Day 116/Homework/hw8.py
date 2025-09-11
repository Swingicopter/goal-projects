lst = [1, 2, '3', 4, "Five", 36]
floats = []

for i in lst:
    try:
        floats.append(float(i))
    except ValueError:
        print(f"ValueError: '{i}' can't become a float.")

print(floats)