def solution(answers):
    answer = []
    length = len(answers)
    a=[1,2,3,4,5]
    b=[2,1,2,3,2,4,2,5]
    c=[3,3,1,1,2,2,4,4,5,5]
    
    ans = [-1,0,0,0]
    for i in range(len(answers)):
        if answers[i] == a[i%len(a)]:
            ans[1] += 1
        if answers[i] == b[i%len(b)]:
            ans[2] += 1
        if answers[i] == c[i%len(c)]:
            ans[3] += 1
    maxNumb = max(ans)
    for i in range(len(ans)):
        if maxNumb == ans[i]:
            answer.append(i)
   
    return answer