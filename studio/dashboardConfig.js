export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61722c6c4ed22781b14fbd59',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-i55h6kcn',
                  apiId: '7709945c-1931-49f9-9aa5-0e9f5cb1d990'
                },
                {
                  buildHookId: '61722c6ce6fa8f6e44ee7c5a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-rdoeyv1a',
                  apiId: '38e8870f-cf52-455e-b7ab-212c6ab9a460'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/StephenBrooks220413/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-rdoeyv1a.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
