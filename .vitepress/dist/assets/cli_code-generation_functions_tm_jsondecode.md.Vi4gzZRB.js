import{_ as t,c as e,o as s,a4 as a}from"./chunks/framework.Bl20_RFa.js";const g=JSON.parse('{"title":"tm_jsondecode - Functions - Configuration Language","description":"The tm_jsondecode function decodes a JSON string into a representation of its\\nvalue.","frontmatter":{"title":"tm_jsondecode - Functions - Configuration Language","description":"The tm_jsondecode function decodes a JSON string into a representation of its\\nvalue."},"headers":[],"relativePath":"cli/code-generation/functions/tm_jsondecode.md","filePath":"cli/code-generation/functions/tm_jsondecode.md"}'),i={name:"cli/code-generation/functions/tm_jsondecode.md"},n=a(`<h1 id="tm-jsondecode-function" tabindex="-1"><code>tm_jsondecode</code> Function <a class="header-anchor" href="#tm-jsondecode-function" aria-label="Permalink to &quot;\`tm_jsondecode\` Function&quot;">​</a></h1><p><code>tm_jsondecode</code> interprets a given string as JSON, returning a representation of the result of decoding that string.</p><p>The JSON encoding is defined in <a href="https://tools.ietf.org/html/rfc7159" target="_blank" rel="noreferrer">RFC 7159</a>.</p><p>This function maps JSON values to <strong>Terramate language values</strong> in the following way:</p><table><thead><tr><th>JSON type</th><th>Terramate type</th></tr></thead><tbody><tr><td>String</td><td><code>string</code></td></tr><tr><td>Number</td><td><code>number</code></td></tr><tr><td>Boolean</td><td><code>bool</code></td></tr><tr><td>Object</td><td><code>object(...)</code> with attribute types determined per this table</td></tr><tr><td>Array</td><td><code>tuple(...)</code> with element types determined per this table</td></tr><tr><td>Null</td><td>The Terramate <code>null</code> value</td></tr></tbody></table><p>The Terramate language automatic type conversion rules mean that you don&#39;t usually need to worry about exactly what type is produced for a given value, and can just use the result in an intuitive way.</p><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tm_jsondecode(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hello</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">world</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  &quot;hello&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;world&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tm_jsondecode(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;true&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span></code></pre></div><h2 id="related-functions" tabindex="-1">Related Functions <a class="header-anchor" href="#related-functions" aria-label="Permalink to &quot;Related Functions&quot;">​</a></h2><ul><li><a href="./tm_jsonencode"><code>tm_jsonencode</code></a> performs the opposite operation, <em>encoding</em> a value as JSON.</li></ul>`,10),o=[n];function d(r,l,h,c,p,u){return s(),e("div",null,o)}const m=t(i,[["render",d]]);export{g as __pageData,m as default};