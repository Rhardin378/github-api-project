const engineersDiv = document.querySelector(".reactEngineers");
const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".searchInput");

let reactCreators = [];

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
  const search = searchInput.value;
  fetchCommit(search);

  searchInput.value = "";
});

const fetchCommit = function (query) {
  const url = ` https://api.github.com/repos/facebook/react/commits/${query}`;
  fetch(url, {
    method: "GET",
    dataType: "json",
  })
    .then((data) => data.json())
    .then((data) => {
      addCreator(data);
    });
};

const addCreator = function (data) {
  const reactCreator = {
    sha: data.sha ? data.sha : null,
    author: data.author.login ? data.author.login : null,
    avatar: data.author.avatar_url ? data.author.avatar_url : null,
  };
  reactCreators.push(reactCreator);
  renderCreators();
};

let renderCreators = function () {
  engineersDiv.replaceChildren();

  reactCreators.forEach(function (creator) {
    const template = `
    <div class= "col-4">
    <div class="card border border-4 border-dark mx-2">
      <div class="card-header">${creator.author}</div>
      <div class="card-body">
        <img
          src= ${creator.avatar}
          class="card-img"
          alt="..."
        />
        </div>
        </div>
      </div>`;

    engineersDiv.insertAdjacentHTML("beforeend", template);
  });
};
