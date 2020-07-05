# rubocop-action

This is a simple GitHub Action to run RuboCop on a Ruby project. It uses the
version of RuboCop (and any RuboCop extensions) included in your project's
`Gemfile`.

## Usage

### Prerequisites

`rubocop-action` uses the version of RuboCop installed by your project, so you
need to make sure that RuboCop, and any extensions you need, are installed
before `rubocop-action` runs.

### Running

Run `rubocop-action` by including it in your workflow file:

```yml
- name: RuboCop
  uses: aergonaut/rubocop-action@v1
```

## Code of Conduct

This project and everyone participating in it is governed by the
[Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to uphold
this code.

## Contributing

[CONTRIBUTING.md](CONTRIBUTING.md)

## License

MIT.
