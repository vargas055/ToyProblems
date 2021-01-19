def find_max(list):
    maximum = list[0]
    for num in list:
        if num > maximum:
            maximum = num
    return maximum

def roll(num1, num2):
    return(f'({num1}, {num2})')
