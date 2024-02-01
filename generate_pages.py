import yaml
import datetime
from datetime import datetime
import zoneinfo
from pathlib import Path

def main(yaml_file_path:Path, output_directory:Path):
    # Load the YAML file
    data = yaml.safe_load(yaml_file_path.read_text())

    # Ensure output directory exists
    if not output_directory.is_dir():
        raise FileNotFoundError(f"Output directory does not exist: {output_directory}")

    for key, record in data.items():
        # Construct the filename and content
        file_name = f"{record['module']}.md"
        file_path = output_directory / file_name
        timezone = zoneinfo.ZoneInfo("America/Chicago")
        now = datetime.now(timezone)
        now_str = record.get('created', now.strftime("%Y-%m-%dT%H:%M:%S (UTC %z)"))
        content = f"""---
title: {record['name']}
created: {now_str}
topic: {record['module']}
---

See the <a rel="module"
  href="{ record['url'] }"
  title="{ record['name'] }">
    { record['name'] } home page
</a>. To use { record['name'] }, you’ll use the `module` tool.

You can see what versions are available by using:
```
[me@login01 ~]$ module avail { record['module'] }

------------------------------ /opt/modulefiles -------------------------------
   { record['module'] }/{ record['version'] }

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching
any of the "keys".
```

To load a specific version, you would use:
```
[me@login01 ~]$ module load { record['module'] }/{ record['version'] }
```

while the "{ record['module'] }" wildcard will load the default version, { record['module'] }-{ record['version'] } in this case.

You should now be able to run { record['name'] } commands:
```
[me@login01 ~]$ { record['example_request'] }
```
```
{ record['example_response'] }
```
"""
        # Write the content to the file
        file_path.write_text(content)
        print(f"File written: {file_path.name}")

if __name__ == "__main__":
    yaml_file_path = Path('./software_packages.yml')
    output_directory = Path('./docs/software/')
    main(yaml_file_path, output_directory)
