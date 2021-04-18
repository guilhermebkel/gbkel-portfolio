import React from "react"

import useDidMount from "@/hooks/useDidMount"

export type DisqusProps = {
	pageUrl: string
	pageId: string
}

const Disqus: React.FC<DisqusProps> = (props) => {
	const {
		pageId,
		pageUrl,
		...rest
	} = props

	const setupDisqus = () => {
		eval(`
			var disqus_config = function () {
				this.page.url = "${pageUrl}";
				this.page.identifier = "${pageId}";
			};

			(function() {
			var d = document, s = d.createElement('script');
			s.src = 'https://gbkel.disqus.com/embed.js';
			s.setAttribute('data-timestamp', +new Date());
			(d.head || d.body).appendChild(s);
			})();
		`)
	}

	useDidMount(() => {
		setupDisqus()
	})

	return (
		<div id="disqus_thread" {...rest}></div>
	)
}

export default Disqus
