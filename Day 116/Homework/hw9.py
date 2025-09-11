values = ['10', '20', 'hello', '30']

for i in values:
    try:
        int(i)
    except ValueError:
        print(f"ValueError: '{i}' can't become a integer.")
        