#!/bin/bash
export BASH_SOURCE_DIR=$(cd "$(dirname "$0")"; pwd -P)
. ~/miniconda3/bin/activate
if conda env list | grep -qw 'rcifw_github_io'; then
    conda env update -f ${BASH_SOURCE_DIR}/environment.yml
else
    conda env create -f ${BASH_SOURCE_DIR}/environment.yml
fi
conda activate rcifw_github_io
python3 ${BASH_SOURCE_DIR}/generate_pages.py ${BASH_SOURCE_DIR}/docs/_data/tokens.yml ${BASH_SOURCE_DIR}/docs/software
bundle install
bundle update
bundle exec jekyll serve --livereload
