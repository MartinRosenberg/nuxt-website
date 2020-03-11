export default {
	bind (element, binding, vnode) {
		element.clickOutsideEvent = (event) => {
			// here I check that click was outside the element and its children
			if (!(element === event.target || element.contains(event.target))) {
				// and if it did, call method provided in attribute value
				vnode.context[binding.expression](event)
			}
		}
		document.body.addEventListener('click', element.clickOutsideEvent)
	},
	unbind (element) {
		document.body.removeEventListener('click', element.clickOutsideEvent)
	},
}
