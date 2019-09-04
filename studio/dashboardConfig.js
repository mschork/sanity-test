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
                  buildHookId: '5d6fbdfbb51a3ed429079a57',
                  title: 'Sanity Studio',
                  name: 'sanity-test-studio-tcgmqeci',
                  apiId: 'b968ea06-2a3c-46f6-aed9-ad7c04e76d11'
                },
                {
                  buildHookId: '5d6fbdfbc2da3903d60b5d14',
                  title: 'Landing pages Website',
                  name: 'sanity-test-web-ystmnjbv',
                  apiId: '2327ffe5-9642-434d-8b8d-f26ead6b94f9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mschork/sanity-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-test-web-ystmnjbv.netlify.com', category: 'apps'}
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
