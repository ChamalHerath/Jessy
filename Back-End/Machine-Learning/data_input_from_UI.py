from PIL import Image
import numpy as np 

from review_score.score import score

def score(models, style, x):
    model = models(style)
    
    output_case = models.get_clean(x)
    vec = models.tfidf.transform(output_case)
    output_varables = models.clf.predict(vec)