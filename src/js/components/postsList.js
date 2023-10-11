// Display Products from DummyJSON
class PostsList extends HTMLElement {
	constructor() {
		super(); // Always call super first in constructor to access functions of the parent Object

		async function getPosts() {
			let response = await fetch('https://dummyjson.com/posts?limit=12');
			let data = await response.json();
			console.log(data);
			return data;
		}

		getPosts().then((data) => {
			let posts = data.posts;
			let htmlToDisplay = '';
			posts.forEach((posts) => {
				htmlToDisplay += `

                <div class="col-sm-3 d-flex align-items-stretch mb-3">
                    <div class="card">
                    <h3 class="card-title">${posts.title}</h3>
                            <div class="card-body flex-column  d-flex ">

                                <p class="card-text">${posts.body.slice(
									0,
									40
								)} ...</p>
                                <a href="#" class="btn btn-primary mt-auto">Lire la suite</a>
                            </div>
                    </div>
                    </div>

                `;
			});
			this.innerHTML = htmlToDisplay;
		});
	}
}
customElements.define('posts-list', PostsList);
