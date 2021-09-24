---
theme: default
class: 'text-center font-bold'
highlighter: prism
download: true
---

# Love It or List It

##

---

# What are lists?

##

A **list** is a **data structure**, or collection of data values.

Lists allow us to store multiple values in one variable.

<v-click>

```python
sea_creature_one = 'shark'
sea_creature_two = 'cuttlefish'
sea_creature_three = 'squid'
sea_creature_four = 'mantis shrimp'
sea_creature_five = 'anemone'
```

</v-click>

<v-click>

```python
sea_creatures = ['shark', 'cuttlefish', 'squid', 'mantis shrimp', 'anemone']
```

</v-click>

<v-click>

Each value in a list is referred to as an **element**, or **item**, in the list.

</v-click>

---

# What can be stored in a list?

##

<v-click>

Anything.

</v-click>

<v-click>

You can have a list with just one type of element...

```python
fruits = ['apple', 'orange', 'banana'] # List of strings
```

</v-click>

<v-click>

a list with multiple types of elements...

```python
hogwash = [2, 'foo', True, 3.14, None]
```

</v-click>

<v-click>

a list containing other lists...
```python
alphabet_soup = ['a', 'b', ['cc', 'dd', ['eee', 'fff']], 'g', 'h']
```

</v-click>

<v-click>

or even an empty list.

```python
cookie_jar = []
```

</v-click>

---

# When should you use a list?

##

When you want to work with many related values.

<v-click>

Lists allow you to:

</v-click>

<v-click>

- Keep data together that belong together

</v-click>

<v-click>

- Condense your code

```python
trial_one = 5.5
trial_two = 5.7
trial_three = 5.3

trials = [5.5, 5.7, 5.3]
```

</v-click>

<v-click>

- Perform the same operations on multiple values at once

```python
>>> grades = [7, 9, 8]
>>> for i in range(len(grades)):
>>>   grades[i] = grades[i] + 1
>>> grades
[8, 10, 9]
```

</v-click>

---

# How to create a list

##

Lists are defined by enclosing comma-separated elements within square brackets `[]`.

<v-clicks>

```python
fruits = ['orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana']
```

```python
vec = [-4, -2, 0, 2, 4]
```

```python
matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
] # Contains nested lists
```

```python
a = [-1, 1, 66.25, 333, 333, 1234.5]
```

```python
browser_history = [] # Empty list
```

</v-clicks>

---

# How to access an element in a list

##

Each element in a list has a position, or **index**. The first element of a list has an index of 0.

To access an element in a list, write the name of the list, followed by the bracket operator, `[]`. Put the index of the element you want to access within the brackets.

<v-clicks>

```python
>>> fruits = ['orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana']
>>> fruits[1]
'apple'
```

```python
>>> vec = [-4, -2, 0, 2, 4]
>>> vec[-1] # Negative indices count backward from the end of the list
4
>>> vec[-3]
0
```

```python
>>> def middle_index(list):
>>>   return len(list) // 2
>>> a = [-1, 1, 66.25, 333, 333, 1234.5]
>>> a[middle_index(a)] # Index can be any expression that evaluates to an integer (yay composition!)
```

</v-clicks>

---

# How to access an element in a list

##

Use multiple bracket operators and indices to access elements within nested lists.

```python
>>> matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]
>>> matrix[0]
[1, 2, 3, 4]
>>> matrix[0][2]
3
```

<v-click>

```python
>>> alphabet_soup = ['a', 'b', ['cc', 'dd', ['eee', 'fff']], 'g', 'h']
>>> alphabet_soup[2]
['cc', 'dd', ['eee', 'fff']]
>>> alphabet_soup[2][2]
['eee', 'fff']
>>> alphabet_soup[2][2][0]
'eee'
```

</v-click>

---

# What happens when you try to access an element that does not exist?

##

<v-click>

```python
>>> vec = [-4, -2, 0, 2, 4]
>>> vec[len(vec)]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IndexError: list index out of range
```

</v-click>

<v-click>

Off-by-one errors when you base the index on the length of the list are very common because the indices start at 0!

</v-click>

---

# How to assign an element of a list

##

In an assignment statement, the element to be assigned is identified on the left side using the bracket operator.

<v-clicks>

```python
>>> alphabet_soup = ['a', 'b', ['cc', 'dd', ['eee', 'fff']], 'g', 'h']
>>> alphabet_soup[0] = 'z'
>>> alphabet_soup
['z', 'b', ['cc', 'dd', ['eee', 'fff']], 'g', 'h']
```

```python
>>> fruits = ['orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana']
>>> fruits[-2] = 'mango'
>>> fruits
['orange', 'apple', 'pear', 'banana', 'kiwi', 'mango', 'banana']
```

```python
>>> matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]
>>> matrix[0][2] = 30
>>> matrix
[[1, 2, 30, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
```

</v-clicks>

---

# Can you add an element by assigning the index one above the index of the last element of the list?

##

<v-clicks>

```python
>>> fruits = ['orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana']
>>> fruits[7] = 'mango'
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IndexError: list assignment index out of range
```

Nope. The index must already exist to be assigned.

Instead, you can add elements using the `append` and `extend` functions...

</v-clicks>

---

# How to check if an element is in a list

##

<v-clicks>

Use the `in` operator.

```python
>>> fruits = ['orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana']
>>> 'pear' in fruits
True
>>> 'watermelon' in fruits
False
```

```python
>>> matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]
>>> [5, 6, 7, 8] in matrix
True
>>> [5, 6, 7] in matrix
False
```

</v-clicks>

---

# How to check if an element is in a list

##

<v-clicks>

The `in` operator creates a boolean expression that evaluates to either `True` or `False`.
You can use it anywhere a boolean expression is expected.

```python
vec = [-4, -2, 0, 2, 4]
if -2 in vec:
  print('vec contains -2')
```

```python
completed = [False, False, False]
i = 0
while False in completed:
  completed[i] = True
  i += 1
print(completed) # [True, True, True]
```

</v-clicks>

---

# How to traverse a list using a `for` loop

##

<v-click>

There are two ways to traverse a list using a `for` loop:

1. Traverse the elements
2. Traverse the indices

</v-click>

---

# How to traverse the elements in a list using a `for` loop

##

```python
fruits = ['orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana']
for fruit in fruits: # Ends with colon
  print(fruit) # Indented statements are run for each fruit in fruits
```

<v-click>

Let's break down this `for` loop:

</v-click>

<v-clicks>

- `for`: keyword that begins a `for` loop
- `fruit`: variable that stores the current element on each iteration of the `for` loop (you name it!)
  - First iteration: `fruit` equals `'orange'`
  - Second iteration: `fruit` equals `'apple'`
  - Third iteration: `fruit` equals `'pear'`
  - And so on and so forth...
- `in`: keyword that precedes the name of the list to iterate through
- `fruits`: list to iterate through

</v-clicks>

---

# How to traverse the elements in a list using a `for` loop

##

```python
>>> vec = [-4, -2, 0, 2, 4]
>>> for v in vec:
>>>   print(v + 1)
-3
-1
1
3
5
```

---

# How to traverse the elements in a list using a `for` loop

##

```python
>>> alphabet_soup = ['a', 'b', ['cc', 'dd', ['eee', 'fff']], 'g', 'h']
>>> for noodle in alphabet_soup:
>>>   print(noodle)
a
b
['cc', 'dd', ['eee', 'fff']]
g
h
```

<v-click>

```python
>>> sea_creatures = ['shark', 'cuttlefish', 'squid', 'mantis shrimp', 'anemone']
>>> for creature in sea_creatures:
>>>   print(f'The {creature} lives in the 🌊!')
The shark lives in the 🌊!
The cuttlefish lives in the 🌊!
The squid lives in the 🌊!
The mantis shrimp lives in the 🌊!
The anemone lives in the 🌊!
```

</v-click>

---

# How to traverse the elements in a list using a `for` loop

##

```python
>>> matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]
>>> for row in matrix: # First iteration, row equals [1, 2, 3, 4]
>>>   for element in row: # First iteration, element equals 1
>>>     print(element)
1
2
3
4
5
6
7
8
9
10
11
12
```

---

# How to traverse the indices of a list using a `for` loop

##

<v-click>

```python
>>> fruits = ['orange', 'apple', 'pear']
>>> for fruit in fruits:
>>>   print(fruit)
orange
apple
pear
```

```python
>>> fruits = ['orange', 'apple', 'pear']
>>> for i in range(len(fruits)):
>>>   print(i)
0
1
2
```

</v-click>

<v-click>

The structure of the `for` loop is the same:

- `for`: keyword that begins a `for` loop
- `i`: variable that stores the current element on each iteration of the `for` loop (you name it!)
- `in`: keyword that precedes the name of the list to iterate through
- `range(len(fruits))`: list to iterate through

</v-click>

---

# How to traverse the indices of a list using a `for` loop

##

<v-clicks>

If `range(len(fruits))` is the list that is being iterated through, let's look at what that list contains.

`range(stop)` is a function that takes a stop integer and returns something *like a list* that contains the integers 0 through `stop - 1`.

For instance, `range(3)` returns something like a list that contains the elements `0`, `1`, and `2`.

`range(2)` contains the elements `0` and `1`.

`range(5)` contains the elements `0`, `1`, `2`, `3`, and `4`.

`len(list)` is a function that takes a list and returns its length.

```python
>>> fruits = ['orange', 'apple', 'pear']
>>> len(fruits)
3
```

So, `range(len(fruits))` gives you something like a list that contains all of the indices in `fruits`.

`len(fruits)` is `3`. `range(3)` contains `0`, `1`, and `2`.

</v-clicks>

---

# How to traverse the indices of a list using a `for` loop

##

Importantly, the list-like something that `range` returns is *iterable*, meaning you can iterate through it as you would a list. That is why you can use it in a `for` loop after the `in` keyword:

<v-click>

```python
>>> fruits = ['orange', 'apple', 'pear']
>>> for i in range(len(fruits)):
>>>   print(i)
0
1
2
```
</v-click>

---

# When should you traverse the indices of a list using a `for` loop (rather than its elements)?

##

1. To assign an element in the list within an iteration of the `for` loop
2. To access elements in terms of the current element's index within an iteration of the `for` loop

---

# When should you traverse the indices of a list using a `for` loop (rather than its elements)?

##

1. To assign an element in the list within an iteration of the `for` loop

```python
>>> fruits = ['orange', 'apple', 'pear']
>>> for fruit in fruits:
>>>   # Want to assign each fruit to something else...
>>>   # But no way to do this with this for loop!
```

<v-click>

```python
>>> fruits = ['orange', 'apple', 'pear']
>>> for i in range(len(fruits)):
>>>   # Ah, now we can use i to access each element in fruits
>>>   fruits[i] = fruits[i] + 's'
>>> fruits
['oranges', 'apples', 'pears']
```

</v-click>

---

# When should you traverse the indices of a list using a `for` loop (rather than its elements)?

##

2. To access elements in terms of the current element's index within an iteration of the `for` loop

```python
>>> numbers = [1, 3, 2, 4]
>>> for number in numbers:
>>>   # Want to check if numbers is sorted by comparing each number to the next...
>>>   # But, no way to get the next number with this for loop!
```

<v-click>

```python
>>> numbers = [1, 3, 2, 4]
>>> for i in range(len(numbers) - 1):
>>>   print(f'Comparing {numbers[i]} to {numbers[i + 1]}...')
>>>   if numbers[i] > numbers[i + 1]:
>>>     print('Numbers are not sorted!')
>>>     break # Same behavior as in a while loop
Comparing 1 to 3...
Comparing 3 to 2...
Numbers are not sorted!
```
</v-click>

<v-click>

Why `range(len(numbers) - 1)`?

</v-click>

---

# Recap

##

- What are lists, why do we use them, and how do we create them? (comma-separated within brackets, `[]`!)
- How to access and assign elements in a list (bracket, `[]`, operator!)
- How to check if element is in a list (`in` operator!)
- How to traverse the elements and indices of a list (`for` loops!)

---

# Traversing lists: What happens when you loop over an empty list?

##

```python
>>> cookie_jar = []
>>> for cookie in cookie_jar:
>>>   print('Cookie!')
```

<v-click>

Zilch.

</v-click>

---

# Traversing lists: How many elements does a list with nested lists contain?

##

```python
>>> matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]
>>> for i in range(len(matrix)):
>>>   print(i)
```

---

# Traversing lists: How many elements does a list with nested lists contain?

##

```python
>>> matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]
>>> for i in range(len(matrix)):
>>>   print(i)
0
1
2
```

Each nested list counts as only one element.

---

# How to concatenate lists

##

You can combine lists using the `+` operator (just like with strings!).

<v-clicks>

```python
>>> my_favorite_numbers = [7, 25]
>>> your_favorite_numbers = [99, 1001]
>>> our_favorite_numbers = my_favorite_numbers + your_favorite_numbers
>>> our_favorite_numbers
[7, 25, 99, 1001]
```

```python
>>> triangles = ['equilateral', 'isosceles', 'scalene']
>>> quadrilaterals = ['square', 'rectangle', 'rhombus']
>>> polygons = triangles + quadrilaterals
>>> polygons
['equilateral', 'isosceles', 'scalene', 'square', 'rectangle', 'rhombus']
```

```python
>>> numbers = [0, 1, 2, 3]
>>> words = ['foo', 'bar']
>>> booleans = [True, False, False, True]
>>> combo = numbers + words + booleans
>>> combo
[0, 1, 2, 3, 'foo', 'bar', True, False, False, True]
```

</v-clicks>

---

# List slices: How to access multiple elements in a list at once

##

You can access multiple elements at once by using the slice operator--`[n:m]`.

The slice operator will return elements from index `n` to `m - 1`.

<v-click>

```python
>>> fruits = ['orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana']
>>> fruits[1:3] # Will return elements from index 1 to 2
['apple', 'pear']
```

</v-click>

<v-click>

```python
>>> matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]
>>> matrix[1:3]
[[5, 6, 7, 8], [9, 10, 11, 12]]
```

</v-click>

---

# List slices: How to assign multiple items in a list at once

##

Use the slice operator on the left side of an assignment statement.

<v-click>

```python
>>> fruits = ['orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana']
>>> fruits[1:3] = ['mango', 'watermelon']
>>> fruits
['orange', 'mango', 'watermelon', 'banana', 'kiwi', 'apple', 'banana']
```

</v-click>

<v-click>

```python
>>> matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]
>>> matrix[1:3] = [[50, 60, 70, 80], [90, 100, 110, 120]]
>>> matrix
[[1, 2, 3, 4], [50, 60, 70, 80], [90, 100, 110, 120]]
```

</v-click>

---

# List slices: How to copy a list

##

Omitting the start (`n`) and stop (`m`) indices in the slice operator returns a copy of the whole list.

<v-click>

```python
>>> fruits = ['orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana']
>>> copy_of_fruits = fruits[:]
>>> copy_of_fruits
['orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana']
```

</v-click>

---

# List methods: How to add an element to the end of a list

##

Use the `append` function.

```python
>>> fruits = ['orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana']
>>> fruits.append('strawberry')
>>> fruits
['orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana', 'strawberry']
```

<v-click>

How do you add multiple elements to the end of a list?

</v-click>

<v-click>

```python
>>> fruits = ['orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana']
>>> fruits.append('strawberry')
>>> fruits.append('cantaloupe')
>>> fruits.append('mandarin')
>>> fruits
['orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana', 'strawberry', 'cantaloupe', 'mandarin']
```

</v-click>

---

# List methods: How to add all the elements of one list to the end of another

##

Use the `extend` function.

<v-click>

```python
>>> fruits = ['orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana']
>>> fruits.extend(['strawberry', 'cantaloupe', 'mandarin'])
>>> fruits
['orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana', 'strawberry', 'cantaloupe', 'mandarin']
```

</v-click>

---

# Deleting elements: By index

##

If you know the index of the element you'd like delete, use either the `pop` method or `del` operator.

<v-click>

```python
>>> fruits = ['orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana']
>>> deleted_fruit = fruits.pop(1)
>>> fruits
['orange', 'pear', 'banana', 'kiwi', 'apple', 'banana']
>>> deleted_fruit
'apple'
```

</v-click>

<v-click>

```python
>>> fruits = ['orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana']
>>> del fruits[1]
>>> fruits
['orange', 'pear', 'banana', 'kiwi', 'apple', 'banana']
```

</v-click>

<v-clicks>

When would you want to use `pop` over `del`?


```python
>>> fruits = ['orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana']
>>> deleted_fruit = fruits.pop(1)
>>> fruits
['orange', 'pear', 'banana', 'kiwi', 'apple', 'banana']
>>> f'The fruit that was delete was {deleted_fruit}!'
'The fruit that was delete was apple!'
```

</v-clicks>

---

# Deleting elements: By value

##

If you know the value of the element you'd like to delete, use the `remove` method.

<v-click>

```python
>>> fruits = ['orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana']
>>> fruits.remove('apple')
>>> fruits
['orange', 'pear', 'banana', 'kiwi', 'apple', 'banana']
```

</v-click>

---

# Objects and values

<v-click>

```python
maria_lucky_numbers = [7, 128, 23]
```

</v-click>

<v-click>

```python
sally_lucky_numbers = maria_lucky_numbers
```

`sally_lucky_numbers` is an **alias** for `maria_lucky_numbers`--they are identical.

</v-click>

<v-click>

`True` or `False`?: `sally_lucky_numbers is maria_lucky_numbers`

</v-click>

<v-clicks>

```python
>>> maria_lucky_numbers[0] = 17
>>> sally_lucky_numbers[0]
```

```python
17
```

</v-clicks>

---

# Objects and values

<v-click>

```python
maria_lucky_numbers = [7, 128, 23]
sally_lucky_numbers = maria_lucky_numbers[:]
```

`sally_lucky_numbers` has the same value as `maria_lucky_numbers`, but is not the same object--they are equivalent, but not identical.

</v-click>

<v-click>

```python
>>> maria_lucky_numbers[0] = 17
>>> sally_lucky_numbers[0]
7
```

</v-click>

---

# Objects and values: Mutable vs. immutable

##

Lists are mutable:

```python
>>> maria_lucky_numbers[0] = 17
>>> maria_lucky_numbers[0]
17
```

<v-click>

The other data types we've seen so far are not--they're immutable:

```python
>>> lucky_number = 99
>>> lucky_number = 100 # Now pointing to different object
```

</v-click>

---

# List arguments

##

Because lists are mutable, when you pass a list into a function, the function may modify the list.

```python
>>> def delete_head(t):
>>>   del t[0]

>>> letters = ['a','b','c']
>>> delete_head(letters)
>>> letters
['b','c']
```

---

# List arguments

##

It is important to distinguish between operations that modify lists and those that create new lists.

| **Operations that modify lists** | **Operations that create lists** |
|----------------------------------|----------------------------------|
| Assignment of element by index   | Concatenation                    |
| `append`                         | Slicing                          |
| `extend`                         |                                  |
| `sort`                           |                                  |
| `pop`                            |                                  |
| `del`                            |                                  |
| `remove`                         |                                  |

Pay attention to which operations you use in functions!

---
layout: two-cols
---

# `middle`: Takes a list and returns a new list

```python
>>> def middle(list):
>>>  return list[1:-1] # Slicing creates a new list!
>>> t = [1, 2, 3, 4]
>>> new_list = middle(t)
>>> t
[1, 2, 3, 4] # Unmodified!
>>> new_list
[2, 3]
```

::right::

<v-click>

# `chop`: Takes a list and modifies it

```python
>>> def chop(list):
>>>   del list[0] # del modifies the list!
>>>   list.pop() # pop modifies the list!
>>> t = [1, 2, 3, 4]
>>> chop(t)
>>> t
[2, 3] # Modified!
```

</v-click>

---
class: 'text-center font-bold'
layout: 'center'
---

# Refer to reading for list of key terms and concepts!

---
class: 'text-center font-bold'
layout: 'center'
---

# Schedule an office hour appointment for additional clarification or review!