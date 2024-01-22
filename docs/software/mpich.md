---
title: MPICH
created: 2024-01-22T15:43:59 (UTC -0600)
topic: mpich
tags: []
author: 
---

{% assign mod = site.data.tokens[page.topic] %}
See the <a rel="module"
  href="{{ mod.url }}"
  title="{{ mod.name }}">
    {{ mod.name }} home page
</a>. To use {{ mod.name }}, you’ll use the `module` tool.

You can see what versions are available by using:
```
[me@login01 ~]$ module avail {{ mod.module }}

------------------------------ /opt/modulefiles -------------------------------
   {{ mod.module }}/{{ mod.version }}

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching
any of the "keys".
```

To load a specific version, you would use:
```
[me@login01 ~]$ module load {{ mod.module }}/{{ mod.version }}
```

while the "{{ mod.module }}" wildcard will load the default version, {{ mod.module }}-{{ mod.version }} in this case.

You should now be able to run {{ mod.name }} commands:
```
[me@login01 ~]$ {{ mod.example_request }}
```
{% assign lines = mod.example_response | newline_to_br | split: '<br />' %}
```
{% for line in lines %}
{{ line }}
{% endfor %}
```
