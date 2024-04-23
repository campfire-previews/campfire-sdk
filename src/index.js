import * as rrweb from "rrweb";

class CampfireSDK {
	constructor() {
		this.init();
	}

	initRrweb() {
		if (window) {
			window.addEventListener("message", (e) => {
				const validOriginRegExp = /https:\/\/campfire\.(.*)/
				if (validOriginRegExp.test(e.origin)) {
					if (this.stopFn) this.stopFn()
					this.stopFn = rrweb.record({
						emit() {},
						recordCrossOriginIframes: true,
					})
				}
			})
		}
	}

	initCSSEditor() {
		document.addEventListener("mouseover", (e) => {
			e.target.style.border = "#9ecaed";
			e.target.style.boxShadow = "0 0 10px #9ecaed";
		})

		document.addEventListener("mouseout", (e) => {
			if (e.target !== document.body && e.target instanceof HTMLElement) {
				e.target.style.border = "";
				e.target.style.boxShadow =  "";
			}
		})

		document.addEventListener("click", (e) => {
			
		});
	}

	init() {
		this.initRrweb();
		// this.initCSSEditor();
	}
}

export default CampfireSDK;