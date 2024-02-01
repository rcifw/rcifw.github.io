import sys
import yaml
import os
import datetime
from datetime import datetime
import pytz

def main(yaml_file_path, output_directory):
    # Load the YAML file
    with open(yaml_file_path, 'r') as file:
        data = yaml.safe_load(file)

    # Ensure output directory exists
    assert os.path.exists(output_directory)
    
    for key, record in data.items():
        # Construct the filename and content
        file_name = f"{record['module']}.md"
        file_path = os.path.join(output_directory, file_name)
        timezone = pytz.timezone('America/Chicago')
        now = datetime.now(timezone)
        now_str = record.get('created', now.strftime("%Y-%m-%dT%H:%M:%S (UTC %z)"))
        content = f"""---
title: {record['name']}
created: {now_str}
topic: {record['module']}
tags: []
author: 
---

{{% assign mod = site.data.tokens[page.topic] %}}
See the <a rel="module"
  href="{{{{ mod.url }}}}"
  title="{{{{ mod.name }}}}">
    {{{{ mod.name }}}} home page
</a>. To use {{{{ mod.name }}}}, you’ll use the `module` tool.

You can see what versions are available by using:
```
[me@login01 ~]$ module avail {{{{ mod.module }}}}

------------------------------ /opt/modulefiles -------------------------------
   {{{{ mod.module }}}}/{{{{ mod.version }}}}

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching
any of the "keys".
```

To load a specific version, you would use:
```
[me@login01 ~]$ module load {{{{ mod.module }}}}/{{{{ mod.version }}}}
```

while the "{{{{ mod.module }}}}" wildcard will load the default version, {{{{ mod.module }}}}-{{{{ mod.version }}}} in this case.

You should now be able to run {{{{ mod.name }}}} commands:
```
[me@login01 ~]$ {{{{ mod.example_request }}}}
```
{{% assign lines = mod.example_response | newline_to_br | split: '<br />' %}}
```
{{% for line in lines %}}
{{{{ line }}}}
{{% endfor %}}
```
"""
        # Write the content to the file
        with open(file_path, 'w') as file:
            file.write(content)
        print(f"File written: {file_path}")

if __name__ == "__main__":
    yaml_file_path = './software_packages.yml'
    output_directory = './docs/software/'
    main(yaml_file_path, output_directory)
