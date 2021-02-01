# deno-playground
A playground project for fiddling around with Deno.

## Nice to know

### Differences to Node: Security

| Feature                                    | Node | Deno |
|--------------------------------------------|------|------|
| Default file system read access            |  yes |  no  |
| Default file system write access           |  yes |  no  |
| Default network access                     |  yes |  no  |
| Default environment access                 |  yes |  no  |
| Default subprocess access                  |  yes |  no  |
| Default commend for allow / restrict all   |  ?   |  yes |

### Differences to Node: Architecture

| Feature                                    | Node |  Deno |
|--------------------------------------------|------|-------|
| Build with                                 |  C++ |  Rust |
| Supports TypeScript out-of-the-box         |  no  |  yes  |
| Uses local dependencies (package.json)     |  yes |  no   |
| Supports ES5 modules (require syntax)      |  yes |  no   |
