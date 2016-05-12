

function startSequence(){
  console.log('starting sequence...');
}

/***************************************************/
/************ For Loading Reddit Stories ***********/
/***************************************************/

function getTopRedditStories() {
  var topStoriesURL = 'https://www.reddit.com/top.json';
  var xhr = new XMLHttpRequest();
  var deferred = Promise.defer();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        deferred.resolve(JSON.parse(xhr.responseText).data.children);
      } else {
        deferred.reject(xhr.responseText);
      }
    }
  };
  xhr.open('GET', topStoriesURL);
  xhr.send();
  return deferred.promise;
}