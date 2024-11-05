#!/bin/bash
mkdir -p .out/python
datamodel-codegen --input-file-type jsonschema --input schemas --output .out/python/
