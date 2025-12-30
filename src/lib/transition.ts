import { cubicInOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';

interface FadeBlurParams {
	delay?: number;
	duration?: number;
	easing?: (t: number) => number;
	opacity?: number;
	blur?: number;
	y?: number;
}

/**
 * @param value
 * @returns
 */
function split_css_unit(value: number | string): [number, string] {
	const split = typeof value === 'string' ? value.match(/^([+-]?[0-9]*\.?[0-9]+)([a-z%]*)$/) : null;
	return split ? [parseFloat(split[1]), split[2]] : [value as number, 'px'];
}

/**
 * @param {Element} node - The DOM node to animate
 * @param {FadeBlurParams} [params] - Transition parameters
 * @returns {TransitionConfig}
 */
export function fadeBlur(
	node: Element, 
	{ 
		delay = 0, 
		duration = 400, 
		easing = cubicInOut, 
		opacity = 0, 
		blur = 10,
		y = 20 
	}: FadeBlurParams = {}
) {
	const style = getComputedStyle(node);
	const target_opacity = +style.opacity;
	const transform = style.transform === 'none' ? '' : style.transform;
	const od = target_opacity * (1 - opacity);

	const [y_value, y_unit] = split_css_unit(y);

	return {
		delay,
		duration,
		easing,
		css: (t: number, u: number) => `
			transform: ${transform} translateY(${(1 - t) * y_value}${y_unit});
			opacity: ${target_opacity - od * u};
			filter: blur(${(1 - t) * blur}px);
		`
	};
}