function createScrollTracker(delay = 0) {
	let _isScrolling = $state(false);
	let scrollTimeout : any;

	const handleScrollStart = () => {
		if (!_isScrolling) 
			_isScrolling = true;
		clearTimeout(scrollTimeout);
	};

	const handleScrollEnd = () => {
		scrollTimeout = setTimeout(() => {
			_isScrolling = false;
		}, delay);
	};

	function init() {
		window.addEventListener('scroll', handleScrollStart, { passive: true });
		window.addEventListener('scroll', handleScrollEnd, { passive: true });	
	}

	return {
		init,
		get isScrolling() { return _isScrolling },
		destroy: () => {
			window.removeEventListener('scroll', handleScrollStart);
			window.removeEventListener('scroll', handleScrollEnd);
		}
	};
}

export const scrollTracker = createScrollTracker(100);