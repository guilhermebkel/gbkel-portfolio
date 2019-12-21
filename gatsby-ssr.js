export { wrapRootElement } from "./gatsby/wrapRootElement"

export const onRenderBody = ({ setPostBodyComponents }) => {
	setPostBodyComponents([
		<script type="text/javascript" src="" />
	])
}