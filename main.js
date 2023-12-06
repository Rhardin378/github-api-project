const engineersDiv = document.querySelector(".reactEngineers");
const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".searchInput");

// fetch request to : https://api.github.com/repos/facebook/react/commits/${query}
// create an object to display data from it
// create template to use on each search result
// push into creators Array
// render search
// search should render person who matches sha hash and append them to the page
//creator {
//    sha:
//    author:
//    avatarUrl:

//}
// insertAdjacentHTML

searchBtn.addEventListener("click", function (e) {
  console.log(searchInput.value);
  searchInput.value = "";
});
