
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
# value = ''
# temp = ''
# while value != 'quit':
#     value = input('> ').lower()
#     if value == 'start':
#         if temp == value:
#             print('THE CAR IS ALREADY STARTED, WHAT ARE YOU DOING!!!?????')
#         else:
#             print('The car has started... Ready to go!!')
#             temp = value
#     elif value == 'stop':
#         if temp == 'stop':
#             print('THE CAR IS ALREADY STOPPED WHAT ARE YOU DOING!!!???')
#         else:
#             print('The car has stopped.')
#             temp = value
#     elif value == 'help':
#         print('''
#         start - to start the car
#         stop - to stop the car
#         quit - to exit
#         ''')
#     elif value == 'quit':
#         break
#     else:
#         print('I dont understand that... try typing "help" if unsure')
#############################
'For Loops'
# prices = [10,20,30,80,90]
# total = 0
# for item in prices:
#     total+=item
# print(total)
# numbers = [5,2,5,2,2]
# for number in numbers:                 ###for number in numbers:
#     string=''                          ###  print(x*number)
#     for count in range(number):        ###
#         string+='x'
#     print(string)
############################
'Lists'
# nums = [1,2,3,5,8,7,6,8,7,5,468,4]
# # largest = nums[0]
# # for num in nums:
# #     if num > largest:
# #         largest = num
# # print(largest)
# singles = []
# for number in nums:
#     if number not in singles:
#         singles.insert(0,number)
# print(singles)
'Objects/Dictinonaries'
# phone = input('Phone: ')
# nums = {
#     '0':'zero',
#     '1':'one',
#     '2':'two',
#     '3':'three',
#     '4':'four',
#     '5':'five',
#     '6':'six',
#     '7':'seven',
#     '8':'eight',
#     '9':'nine'
# }
# solution = ''
# for num in phone:
#     solution += nums[num] + ' '

# print(solution)
message = input('>')
def emojicon(message):
    words = message.split(' ')
    emojis = {
        ':)': '😀',
        ':(': '🙁'
    }
    output= ''
    for word in words:
        output += emojis.get(word, word) + ' '
    return output

print(emojicon(message))

