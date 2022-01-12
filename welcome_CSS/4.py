# 4. Write a Python program that takes a text file as input and returns the number of words of a given text file.
# Note: Some words can be separated by a comma with no space.

with open('1.txt') as f:
    count =  len(f.read().split)
    print(count)