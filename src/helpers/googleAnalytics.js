function InitializeReactGA(ReactGA) {
	if (!window.GA_INITIALIZED) {
		ReactGA.initialize("UA-206068733-1");
		window.GA_INITIALIZED = true;
	}
}

export default InitializeReactGA;
