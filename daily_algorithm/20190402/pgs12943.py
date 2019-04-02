def solution(num):
    answer = 0
    myNumb = num
    
    while myNumb != 1:
        if answer>450:
            answer=-1
            break
        if myNumb%2 == 0:
            myNumb /= 2
        else:
            myNumb = myNumb*3+1
        answer += 1
    return answer