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


### How to manage script commands in Deno?

This is what the above mentioned [velociraptor](https://deno.land/x/velociraptor@1.0.0-beta.16) script runner does. It also allows you to manage access rights for scripts. Check the [`scripts.json`](https://github.com/voodoods/deno-playground/blob/main/scripts.json) file for a reference to all available commands, like for example:

```sh
vr run cat-fact
```


### How to manage environment variables in Deno?

Same here - you can define environment variables using the [`scripts.json`](https://github.com/voodoods/deno-playground/blob/main/scripts.json) and access them via the [`Deno.env`](https://doc.deno.land/builtin/stable#Deno.env) API, like:

```js
Deno.env.get("CATS_API_HOST")
```


### How to manage dependencies and versions in Deno?

As a best practice you can just create a [`dist.ts`](https://github.com/voodoods/deno-playground/blob/main/deps.ts) file and export the scripts you want to use from there, so you have one file where you can manage dependencies.


### Where can I find available third-party-modules?

Check out the Deno Land library: https://deno.land/x