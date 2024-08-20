secret = 17
print(' ------------------------------')
guess = input('| guess a number from 1 to 100 |')
print(' ------------------------------')
if int(guess) == secret:
    print(' -----------------')
    print('| you guessed it! |')
    print(' -----------------')