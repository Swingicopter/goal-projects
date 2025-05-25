words = ["Hello", "Tomorrow", "Quick", "Electrometrosquare", "Freedom"]

def lengths(input_list):
    new_list = []

    for i in input_list:
        new_list.append(len(i))

    return new_list

print(lengths(words))