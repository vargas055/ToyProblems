
"Hello World"
# print('Hello World!!')
# print('o----')
# print(' ||||')
# print('*' * 10)
##########################
"Types"
# price = 10
# rating = 2.7
# name = 'Juan'
# fun = True
# unfun = False
# print(price)
###########################
# name = 'John Smith'
# age = 20
# new_patient = True
# print(name, age, new_patient)
###########################
"Input"
# name = input('What is your name? ')
# print('Hi ' + name)
# name = input('What is your name? ')
# color = input('What is your favorite color? ')
# print(name + ' likes ' + color)
###########################
"Operations"
# weight = input('what is your weigth? (Pounds) ')
# kilo_weight = int(weight)/2.2046
# print(kilo_weight)
###########################
# "If statements"
# Price = 1000000
# Good_Credit = False

# if Good_Credit:
#     print(f'they need to put down {(Price/100)*10}')
# else:
#     print(f'they need to put down {(Price/100)*20}')
############################
"Coditionals"
# name = input('What is your name? ')
# if len(name) < 3:
#     print('Name must be at least 3 characters long :(')
# elif len(name) > 50:
#     print('Name can be a maximumu of 50 characters long!')
# else:
#     print('Name looks good!')

# Weight = input('Weight: ')
# Measure = input('(L)bs or (K)g: ')
# if(Measure.lower() == 'l'):
#     print(f'You are {int(Weight)/2.25} Kilos')
# else:
#     print(f'You are {int(Weight)*2.25} Pounds')
'Car Game'
value = ''
temp = ''
while value != 'quit':
    value = input('> ').lower()
    if value == 'start':
        if temp == value:
            print('THE CAR IS ALREADY STARTED, WHAT ARE YOU DOING!!!?????')
        else:
            print('The car has started... Ready to go!!')
            temp = value
    elif value == 'stop':
        if temp == 'stop':
            print('THE CAR IS ALREADY STOPPED WHAT ARE YOU DOING!!!???')
        else:
            print('The car has stopped.')
            temp = value
    elif value == 'help':
        print('''
        start - to start the car
        stop - to stop the car
        quit - to exit
        ''')
    elif value == 'quit':
        break
    else:
        print('I dont understand that... try typing "help" if unsure')
print('hey')

