def manual_index(lst, element):
    for i in range(len(lst)):
        if lst[i] == element:
            return f'value: {element}, index: {i}'
    else:
        return 'No such element found.'