class Footer extends HTMLElement {
	constructor() {
		super();

		this.innerHTML = `<div class='container'>
        <footer>Un footer de 2023</footer>
				</div>
			`;
	}
}

customElements.define('custom-footer', Footer);
