class NewsArticle extends HTMLElement {
	connectedCallback(){
		this.title = this.getAttribute('title');

		setTimeout(()=> {
			this.content = this.innerHTML;
			this.innerHTML = '<div class="section">' +
								`<h5> ${this.title} </h5>` +
								'<blockquote style="border-color: #EA7B20;">' +
									`<h6>${this.content}</h6>` +
								'</blockquote>' +
						 	 '</div>';
		});
	}
}


//Definition
//customElements.define('news-article', NewsArticle);