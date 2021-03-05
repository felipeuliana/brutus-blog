module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        message: 'What is your component name?',
        name: 'name',
        type: 'input'
      }
    ],
    actions: [
      {
        path: '../src/components/{{pascalCase name}}/index.jsx',
        templateFile: 'templates/component.jsx.hbs',
        type: 'add'
      },
      {
        path: '../src/components/{{pascalCase name}}/stories.jsx',
        templateFile: 'templates/stories.jsx.hbs',
        type: 'add'
      },
      {
        path: '../src/components/{{pascalCase name}}/styles.js',
        templateFile: 'templates/styles.js.hbs',
        type: 'add'
      },
      {
        path: '../src/components/{{pascalCase name}}/test.js',
        templateFile: 'templates/test.js.hbs',
        type: 'add'
      }
    ]
  }),
    plop.setGenerator('template', {
      description: 'Create a template',
      prompts: [
        {
          message: 'What is your template name?',
          name: 'name',
          type: 'input'
        }
      ],
      actions: [
        {
          path: '../src/templates/{{pascalCase name}}/index.jsx',
          templateFile: 'templates/template.jsx.hbs',
          type: 'add'
        },
        {
          path: '../src/templates/{{pascalCase name}}/styles.js',
          templateFile: 'templates/styles.js.hbs',
          type: 'add'
        },
        {
          path: '../src/templates/{{pascalCase name}}/test.js',
          templateFile: 'templates/test.js.hbs',
          type: 'add'
        }
      ]
    })
}
