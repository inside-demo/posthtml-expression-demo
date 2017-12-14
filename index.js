import {readFileSync, writeFileSync} from 'fs';
import posthtml from 'posthtml';

const html = readFileSync('templates/index.html', 'utf8');
const plugins = [
	require('posthtml-extend')({
    	encoding: 'utf8',
    	root: 'templates'
	}),
	require('posthtml-expressions')({ 
		locals: { 
			className: 'intro', 
			name: 'Marlo',
			foo: 'bar'
		}
	}),
	require('posthtml-beautify')()
]
posthtml(plugins)
    .process(html)
    .then(result => {
        writeFileSync('dist/output.html', result.html);
    });