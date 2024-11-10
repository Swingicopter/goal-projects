def vending_machine(index):
    items = ['coca-cola', 'fanta', 'sprite', 'kit-kat', 'snickers', 'twix', 'peanuts', 'lays', 'doritos', 'takis']
    prices = [1.00, 1.00, 1.00, 1.29, 1.39, 1.19, 1.69, 1.75, 1.79, 1.53]
    print('''Products:
          Coca-Cola(0) $1.00 | Fanta(1) $1.00 | Sprite(2) $1.00 | Kit-Kat(3) $1.29 | Snickers(4) $1.39 | Twix(5) $1.19 | Peanuts(6) $1.69 | Lays(7) $1.75 | Doritos(8) $1.79 | Takis(9) $1.53''')
    index = int(input('Please type the index of the product you would like: '))
    balance = int(input('Please type your balance in dollars: '))
    if balance >= prices[index] and index <= 9:
        print(items[index])
    elif balance < prices[index] and index <= 9:
        print('You don`t have enough money purchase this product.')
    elif index > 10:
        print('Error: Index out of range.')

vending_machine(None)