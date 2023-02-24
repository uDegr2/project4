function updateUI(response) {
    console.log(response);

    ;
    let sentenceResponse = response["sentence_list"][0]
    let scoreTag = calculateScoreTag(response.score_tag)
    let results = document.getElementById('results');
    results.innerHTML = `Subjectivity: ${response.subjectivity} <br>Polarity: ${scoreTag}<br> Text Snippet: ${sentenceResponse.text}`


}

function calculateScoreTag(scoreTag) {
    switch (scoreTag) {
        case 'P+':
            return 'strong positive'
        case 'P':
            return 'positive'
        case 'NEU':
            return 'neutral'
        case 'N':
            return 'negative'
        case 'N+':
            return 'strong negative'
        case 'NONE':
            return 'without polarity'
    }
}

export { updateUI }