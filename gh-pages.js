var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/sleepntsheep/my-next-anime.git', // Update to point to your repository  
        user: {
            name: 'sleepntsheep', // update to use your name
            email: 'contact@papangkorn.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)