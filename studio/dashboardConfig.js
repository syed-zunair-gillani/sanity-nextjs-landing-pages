export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6304b0f7e0d42d69f8a8a7cc',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-b66aw6o2',
                  apiId: 'b2715ca2-c2b1-47e3-92f8-4883e17ff340'
                },
                {
                  buildHookId: '6304b0f727eb1661ce03d6f4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-tbefs9u9',
                  apiId: 'f992212e-c61f-4910-b13d-4e1546459f65'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/syed-zunair-gillani/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-tbefs9u9.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
