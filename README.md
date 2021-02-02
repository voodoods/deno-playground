# deno-playground
A playground project for fiddling around with Deno.


## Prerequirements

1. [Install deno](https://deno.land/manual/getting_started/installation)

2. [Install velociraptor](https://deno.land/x/velociraptor@1.0.0-beta.16)

**Note:**
In case you use ZSH and you get a command like:
```sh
zsh: command not found: vr
```
then open your `~/.zshrc` and add the following line:
```sh
alias vr="~/.deno/bin/vr"
```

3. In case you use Visual Studio Code - install
  - the [Deno extension](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno)
  - the [Velociraptor extension](https://marketplace.visualstudio.com/items?itemName=umbo.vscode-velociraptor) (optional)


4. In case you prefer to use a different, somewhat popular IDE with a mediocre plugin infrastructure, there might also be a [vaguely functional deno plugin](https://plugins.jetbrains.com/plugin/14382-deno) for you


## Nice to know

What the creator of Deno says about it: https://www.youtube.com/watch?v=M3BM9TB-8yA

### Differences to Node: Security

| Feature                                    | Node | Deno |
|--------------------------------------------|------|------|
| Default file system read access            |  yes |  no  |
| Default file system write access           |  yes |  no  |
| Default network access                     |  yes |  no  |
| Default environment access                 |  yes |  no  |
| Default subprocess access                  |  yes |  no  |
| Default commend for allow / restrict all   |  ?   |  yes |


### Differences to Node: Architecture

| Feature                                    | Node |  Deno |
|--------------------------------------------|------|-------|
| Build with                                 |  C++ |  Rust |
| Supports TypeScript out-of-the-box         |  no  |  yes  |
| Uses local dependencies (package.json)     |  yes |  no   |
| Supports ES5 modules (require syntax)      |  yes |  no   |
