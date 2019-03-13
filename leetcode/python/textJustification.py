# TEXT JUSTIFICATION

# Given an array of words and a width maxWidth, 
# format the text such that each line has exactly maxWidth characters 
# and is fully (left and right) justified.

# You should pack your words in a greedy approach; 
# that is, pack as many words as you can in each line. 
# Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

# Extra spaces between words should be distributed as evenly as possible. 
# If the number of spaces on a line do not divide evenly between words, 
# the empty slots on the left will be assigned more spaces than the slots on the right.

# For the last line of text, it should be left justified 
# and no extra space is inserted between words.


# Example =>
    # Input:
    # words = ["This", "is", "an", "example", "of", "text", "justification."]
    # maxWidth = 16
    # Output:
    # [
    #    "This    is    an",
    #    "example  of text",
    #    "justification.  "
    # ]

import math

def fullJustify(words, maxWidth):
        
        # queue to keep track of currently iterated words
        # count of len letters in queue
        # result kept for words that already have been operated on
        queue = []
        count = 0
        result = []
        
        for i, word in enumerate(words):
            # append words to queue to be operated on
            count += len(word)
            queue.append(word)
            # compute the number of space slots available for queue words
            spaces = len(queue)-1

            # if we're not at the last word calculate total count with the next word
            # else only calculate total with words in queue
            if i != len(words)-1:
                totalCount = count+spaces+len(words[i+1])+1
            elif i == len(words)-1:
                totalCount = count+spaces+1
            
            # if total count is greater than max width
            if totalCount > maxWidth:

                # and queue len is not 0
                if len(queue)-1:
                    spaceCount = (maxWidth-count)/(len(queue)-1)

                    # calculate if spaces are evenly divided amongst slots
                    if (maxWidth-count)%(len(queue)-1) == 0:
                        result.append((' '*int(spaceCount)).join(queue[:]))
                        queue = []
                        count = 0

                    # if not, split up spaces accordingly, extra spaces being added to left most queue words
                    else:
                        numberOfTotalSpaces = spaceCount*(len(queue)-1)
                        spaceCount = math.floor(spaceCount)
                        difference = numberOfTotalSpaces-(spaceCount*(len(queue)-1))
                        firstSlice = queue[:(int(difference+1))]
                        secondSlice = queue[(int(difference+1)):]
                        firstStr = (' '*int(spaceCount+1)).join(firstSlice)
                        secondStr = (' '*int(spaceCount)).join(secondSlice)
                        result.append((' '*int(spaceCount)).join([firstStr, secondStr]))
                        queue = []
                        count = 0
                # if there is only one word in queue, add extra spaces at the end
                elif (len(queue)-1) == 0:
                    result.append(queue[0] + ' '*int(maxWidth-len(queue[0])))
                    queue = []
                    count = 0
            # if we're at the end, join queue words with one space and add spaces at the end
            elif i == len(words)-1:
                result.append(' '.join(queue) + ' '*int(maxWidth-count-(len(queue)-1)))
        
        return result


words = ["This", "is", "an", "example", "of", "text", "justification."]
maxWidth = 16

words2 = ["What","must","be","acknowledgment","shall","be"]
words3 = ["Science","is","what","we","understand","well","enough","to","explain",
         "to","a","computer.","Art","is","everything","else","we","do"]
maxWidth2 = 20

result = fullJustify(words3, maxWidth2)
print(result)
    