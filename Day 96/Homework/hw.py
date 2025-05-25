input_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


def x2_list(input):
    new_list = []

    for i in input:
        new_list.append(i * 2)

    return new_list

print(x2_list(input_list))