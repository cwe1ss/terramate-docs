import{_ as e,c as t,o as n,a4 as i}from"./chunks/framework.Bl20_RFa.js";const u=JSON.parse('{"title":"tm_filemd5 - Functions - Configuration Language","description":"The tm_filemd5 function computes the MD5 hash of the contents of\\na given file and encodes it as hex.","frontmatter":{"title":"tm_filemd5 - Functions - Configuration Language","description":"The tm_filemd5 function computes the MD5 hash of the contents of\\na given file and encodes it as hex."},"headers":[],"relativePath":"cli/code-generation/functions/tm_filemd5.md","filePath":"cli/code-generation/functions/tm_filemd5.md"}'),o={name:"cli/code-generation/functions/tm_filemd5.md"},a=i('<h1 id="tm-filemd5-function" tabindex="-1"><code>tm_filemd5</code> Function <a class="header-anchor" href="#tm-filemd5-function" aria-label="Permalink to &quot;`tm_filemd5` Function&quot;">​</a></h1><p><code>tm_filemd5</code> is a variant of <a href="./tm_md5"><code>tm_md5</code></a> that hashes the contents of a given file rather than a literal string.</p><p>This is similar to <code>tm_md5(tm_file(filename))</code>, but because <a href="./tm_file"><code>tm_file</code></a> accepts only UTF-8 text it cannot be used to create hashes for binary files.</p>',3),c=[a];function s(d,m,f,_,l,r){return n(),t("div",null,c)}const p=e(o,[["render",s]]);export{u as __pageData,p as default};