def manual_count(lst, element):
    res = 0

    for i in range(len(lst)):
        if lst[i] == element:
             res += 1

    return res
    
