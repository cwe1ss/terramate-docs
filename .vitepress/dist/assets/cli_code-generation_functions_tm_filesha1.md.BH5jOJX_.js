import{_ as e,c as t,o as a,a4 as n}from"./chunks/framework.Bl20_RFa.js";const u=JSON.parse('{"title":"tm_filesha1 - Functions - Configuration Language","description":"The tm_filesha1 function computes the SHA1 hash of the contents of\\na given file and encodes it as hex.","frontmatter":{"title":"tm_filesha1 - Functions - Configuration Language","description":"The tm_filesha1 function computes the SHA1 hash of the contents of\\na given file and encodes it as hex."},"headers":[],"relativePath":"cli/code-generation/functions/tm_filesha1.md","filePath":"cli/code-generation/functions/tm_filesha1.md"}'),i={name:"cli/code-generation/functions/tm_filesha1.md"},o=n('<h1 id="tm-filesha1-function" tabindex="-1"><code>tm_filesha1</code> Function <a class="header-anchor" href="#tm-filesha1-function" aria-label="Permalink to &quot;`tm_filesha1` Function&quot;">​</a></h1><p><code>tm_filesha1</code> is a variant of <a href="./tm_sha1"><code>tm_sha1</code></a> that hashes the contents of a given file rather than a literal string.</p><p>This is similar to <code>tm_sha1(tm_file(filename))</code>, but because <a href="./tm_file"><code>tm_file</code></a> accepts only UTF-8 text it cannot be used to create hashes for binary files.</p>',3),s=[o];function c(h,f,_,l,r,d){return a(),t("div",null,s)}const p=e(i,[["render",c]]);export{u as __pageData,p as default};