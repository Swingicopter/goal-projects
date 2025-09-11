def func(lst):
    lset = list(set(lst))
    for i in lset:
        print(f'{i} - {lst.count(i)}')

func([1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 5, 6, 7])