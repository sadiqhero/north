const input = document.getElementById('input');
const send = document.getElementById('send');
const result = document.getElementById('p');

const data = "hello world this is my ai At that time, Dahl mostly worked with Ruby, and the dominant model for web applications was to have a pool of ruby processes that a web server (e.g. Ngninx) would proxy to. If one Ruby process was blocked with an upload, Nginx served the request to another. Node.js changed this model by making all I/O tasks non-blocking and asynchronous. This allowed webservers written in Node.js to serve thousands of requests concurrently–subsequent requests didn’t have to wait for previous ones to complete. The first demo of Node.js was generated so much interest because it was the first time that a developer could create their own web server easily and have it work so well. Over time Node.js became good at system tasks other than web serving and started to shine as a flexible yet lower-level server-side language. It could do anything typically done with Python, Ruby, Perl, and PHP, and it was faster, used less memory, and in most cases had better APIs for the system calls.";

send.addEventListener("click", handleSearch);
input.addEventListener("keydown", (e) => {
  if (e.key === 'Enter') {
    handleSearch();
  }
});

function handleSearch() {
  send.style.width = "70px";
  const searchTerm = input.value.trim();
  if (!searchTerm) return;

  const matchIndex = kmpSearch(data, searchTerm);

  if (matchIndex === -1) {
    result.innerHTML = "No Any Result Found";
    return;
  }

  const matchLength = searchTerm.length;
  const contextLength = 100 * 5;
  const startIndex = Math.max(0, matchIndex - contextLength);
  const endIndex = Math.min(data.length, matchIndex + matchLength + contextLength);


  result.innerHTML =  data.slice(startIndex, endIndex);
}

function kmpSearch(text, query) {
  const lps = new Array(query.length).fill(0);
  let j = 0;

  for (let i = 1; i < query.length; i++) {
    while (j > 0 && query[i] !== query[j]) {
      j = lps[j - 1];
    }

    if (query[i] === query[j]) {
      j++;
    }

    lps[i] = j;
  }

  j = 0;

  for (let i = 0; i < text.length; i++) {
    while (j > 0 && text[i] !== query[j]) {
      j = lps[j - 1];
    }

    if (text[i] === query[j]) {
      j++;
    }

    if (j === query.length) {
      return i - j + 1;
    }
  }

  return -1;
}