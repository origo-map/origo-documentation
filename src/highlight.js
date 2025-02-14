import visit from 'unist-util-visit';
import hljs from 'highlight.js/lib/core';

// Import languages
import python from 'highlight.js/lib/languages/python';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import bash from 'highlight.js/lib/languages/bash';

// Register languages with highlight.js
hljs.registerLanguage('python', python);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('json', json);
hljs.registerLanguage('bash', bash);

/**
 * Remark plugin to apply syntax highlighting using highlight.js
 */
export default function attacher() {
    /**
     * Visitor function for processing code blocks in the Markdown AST.
     */
    function visitor(node) {
        if (!node.lang) return; // Skip nodes without a language

        let data = node.data || (node.data = {});

        try {
            // Highlight code block
            const result = hljs.highlight(node.lang, node.value, true);
            data.htmlContent = result.value;

            // Add or update HTML attributes
            data.htmlAttributes = data.htmlAttributes || {};
            data.htmlAttributes.class = [
                'hljs',
                `language-${node.lang}`, // Add language-specific class
                data.htmlAttributes.class,
            ]
                .filter(Boolean)
                .join(' ');
        } catch (err) {
            console.error(`Error highlighting language "${node.lang}":`, err);
        }
    }

    // Return transformer function
    return (ast) => visit(ast, 'code', visitor);
}
