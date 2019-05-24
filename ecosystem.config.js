module.exports = {
    apps: [{
      name: 'Chad-Service',
      script: './server/server.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-52-14-174-92.us-east-2.compute.amazonaws.com',
        key: '~/.ssh/fec.pem',
        ref: 'origin/master',
        repo: 'https://github.com/yum-ly/Chad-Service.git',
        path: '/home/ubuntu/Chad-Service/',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }