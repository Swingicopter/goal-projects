def manual_index(lst, element):
    for i in range(len(lst)):
        if element == lst[i]:
            return i
    else:
        raise ValueError
    