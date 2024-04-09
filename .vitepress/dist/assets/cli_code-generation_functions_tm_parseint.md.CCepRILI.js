import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.Bl20_RFa.js";const g=JSON.parse('{"title":"tm_parseint - Functions - Configuration Language","description":"The tm_parseint function parses the given string as a representation of an integer.","frontmatter":{"title":"tm_parseint - Functions - Configuration Language","description":"The tm_parseint function parses the given string as a representation of an integer."},"headers":[],"relativePath":"cli/code-generation/functions/tm_parseint.md","filePath":"cli/code-generation/functions/tm_parseint.md"}'),t={name:"cli/code-generation/functions/tm_parseint.md"},e=n(`<h1 id="tm-parseint-function" tabindex="-1"><code>tm_parseint</code> Function <a class="header-anchor" href="#tm-parseint-function" aria-label="Permalink to &quot;\`tm_parseint\` Function&quot;">​</a></h1><p><code>tm_parseint</code> parses the given string as a representation of an integer in the specified base and returns the resulting number. The base must be between 2 and 62 inclusive.</p><p>All bases use the arabic numerals 0 through 9 first. Bases between 11 and 36 inclusive use case-insensitive latin letters to represent higher unit values. Bases 37 and higher use lowercase latin letters and then uppercase latin letters.</p><p>If the given string contains any non-digit characters or digit characters that are too large for the given base then <code>tm_parseint</code> will produce an error.</p><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tm_parseint(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;100&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">100</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tm_parseint(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;FF&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">255</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tm_parseint(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;-10&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-16</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tm_parseint(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;1011111011101111&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">48879</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tm_parseint(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;aA&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 62</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">656</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tm_parseint(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;12&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Error:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Invalid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> function</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> argument</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Invalid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> value</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;number&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> parameter:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cannot</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> parse</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;12&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> as</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> base</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> integer.</span></span></code></pre></div><h2 id="related-functions" tabindex="-1">Related Functions <a class="header-anchor" href="#related-functions" aria-label="Permalink to &quot;Related Functions&quot;">​</a></h2><ul><li><a href="./tm_format"><code>tm_format</code></a> can format numbers and other values into strings, with optional zero padding, alignment, etc.</li></ul>`,8),l=[e];function h(p,r,k,o,F,d){return a(),i("div",null,l)}const u=s(t,[["render",h]]);export{g as __pageData,u as default};