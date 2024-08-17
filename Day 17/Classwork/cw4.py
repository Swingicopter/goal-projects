secret = 'toyota'
guess = input('guess the secret word (hint: car brand) ')
while guess == secret:
    print('match')
else:
    guess = input('try again ')