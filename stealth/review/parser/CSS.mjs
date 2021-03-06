
import { Buffer           } from '../../../base/index.mjs';
import { describe, finish } from '../../../covert/index.mjs';
import { CSS              } from '../../../stealth/source/parser/CSS.mjs';



describe('CSS.parse()/@charset', function(assert) {

	let charset1 = CSS.parse('@charset "utf-8";');
	let charset2 = CSS.parse('@charset \'iso-8859-1\';');

	assert(charset1, {
		type: 'root',
		rules: [{
			name: '@charset',
			value: 'utf-8'
		}]
	});

	assert(charset2, {
		type: 'root',
		rules: [{
			name: '@charset',
			value: 'iso-8859-1'
		}]
	});

});

describe('CSS.parse()/@import', function(assert) {

	let import1 = CSS.parse('@import "/path/to/file.css";');
	let import2 = CSS.parse('@import url("https://example.com/path/to/file.css");');
	let import3 = CSS.parse('@import "/path/to/file.css" screen');
	let import4 = CSS.parse('@import "/path/to/file.css" print and (orientation: landscape);');

});


export default finish('stealth/parser/CSS', {
	internet: false,
	network:  false
});

