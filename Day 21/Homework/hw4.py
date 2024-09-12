print('''items:
      
      coca-cola (Code: 1), fanta (Code: 2), sprite (Code: 3);
      skittles (Code: 4), m&m's (Code: 5), oreo (Code: 6)l
      pringles (Code: 7), doritos (Code: 8), cheetos (Code: 9);
      mars (Code: 10), milky-way (Code: 11), bounty (Code: 12)''')

choice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
input = int(input('Type in the code of the product you want to order. (1 product at a time): '))

if input == choice[0]:
    print('coca-cola')
elif input == choice[1]:
    print('fanta')
elif input == choice[2]:
    print('sprite')
elif input == choice[3]:
    print('skittles')
elif input == choice[4]:
    print("m&m's")
elif input == choice[5]:
    print('oreo')
elif input == choice[6]:
    print('pringles')
elif input == choice[7]:
    print('doritos')
elif input == choice[8]:
    print('cheetos')
elif input == choice[9]:
    print('mars')
elif input == choice[10]:
    print('milky-way')
elif input == choice[11]:
    print('bounty')
else:
    print("that's not an option")