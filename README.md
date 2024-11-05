# schemas

## Generation
### Python
datamodel-codegen --input-file-type jsonschema --input schemas --output .out/python/
pnpm quicktype --src-lang schema --just-types --lang python --src schemas/*.json --out .out/tes_types.py
- _id => id (_ will be replaced and it shouldnt)
- will be all in one file; problem?

## Typescript
pnpm quicktype --src-lang schema --just-types --lang typescript --src schemas/*.json --out .out/tes_types.ts
- [property: string]: any;
- will not extend class => ignore base.json then?


