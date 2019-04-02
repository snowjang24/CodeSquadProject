def solution(s):
    word = s.lower()
    if word.count("p") == word.count("y"):
        return True
    else:
        return False