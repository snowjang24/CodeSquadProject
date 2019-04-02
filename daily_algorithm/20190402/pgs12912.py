def solution(a, b):
    answer = 0
    if a <= b:
        x,y=a,b
    else:
        x,y=b,a
    for i in range(x, y+1):
        answer = answer + i
    return answer