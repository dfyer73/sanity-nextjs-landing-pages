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
                  buildHookId: '6120fd9537b15ae0bdd6f8c2',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-sugexgjp',
                  apiId: '7a395f87-079a-40f9-b90d-56889ecf5907'
                },
                {
                  buildHookId: '6120fd95127d4ad9cbb30fa6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-tcuysr1c',
                  apiId: 'f941c6bf-2753-432a-a040-11e88c0dcd73'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dfyer73/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-tcuysr1c.netlify.app', category: 'apps'}
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
