module.exports = {
    apps: [{
        name: 'otu',
        script: './index.js'
    }],
    deploy: {
        production: {
            user: 'ubuntu',
            host: '34.193.65.247',
            key: '~/.ssh/password_stash_app.pem',
            ref: 'origin/master',
            repo: 'git@github.com:davamale/otu.git',
            path: '/home/ubuntu/otu',
            'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
        }
    }
}