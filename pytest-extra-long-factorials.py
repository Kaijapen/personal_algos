
def extraLongFactorials(n):
    res = n
    for i in range(n-1, 0, -1):
        res *= i
    print(res)
    return res

print(extraLongFactorials(25))